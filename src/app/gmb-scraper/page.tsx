'use client';

import { useState } from 'react';

interface GMBResult {
  title: string;
  website: string;
  address: string;
  phoneNumber?: string;
  rating?: number;
  reviews?: number;
  category?: string;
  query: string;
}

export default function GMBScraperPage() {
  const [queries, setQueries] = useState<string>('');
  const [singleQuery, setSingleQuery] = useState<string>('');
  const [useSingleQuery, setUseSingleQuery] = useState(true);
  const [maxResults, setMaxResults] = useState<number>(500);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GMBResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState('us');
  const [progress, setProgress] = useState<string>('');

  const handleScrape = async () => {
    if (useSingleQuery) {
      if (!singleQuery.trim()) {
        setError('Please enter a search query');
        return;
      }
    } else {
      const queryList = queries
        .split('\n')
        .map((q) => q.trim())
        .filter((q) => q.length > 0);

      if (queryList.length === 0) {
        setError('Please enter at least one search query');
        return;
      }
    }

    setLoading(true);
    setError(null);
    setResults([]);
    setProgress('Starting scrape...');

    try {
      const response = await fetch('/api/gmb-scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(useSingleQuery ? { query: singleQuery.trim() } : { queries: queries.split('\n').map(q => q.trim()).filter(q => q.length > 0) }),
          gl: country,
          maxResults: maxResults,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to scrape GMB URLs');
      }

      setProgress('Processing results...');
      const data = await response.json();
      setResults(data.results || []);
      setProgress(`Found ${data.count || 0} unique GMB URLs`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProgress('');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (results.length === 0) return;

    const headers = ['Title', 'Website', 'Address', 'Phone', 'Rating', 'Reviews', 'Category', 'Query'];
    const rows = results.map((r) => [
      r.title,
      r.website,
      r.address,
      r.phoneNumber || '',
      r.rating?.toString() || '',
      r.reviews?.toString() || '',
      r.category || '',
      r.query,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `gmb-urls-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const exportToJSON = () => {
    if (results.length === 0) return;

    const jsonContent = JSON.stringify(results, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `gmb-urls-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const exportToTXT = () => {
    if (results.length === 0) return;

    const txtContent = results.map((r) => r.website).join('\n');
    const blob = new Blob([txtContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `gmb-urls-${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
  };

  const copyURLs = () => {
    if (results.length === 0) return;

    const urls = results.map((r) => r.website).join('\n');
    navigator.clipboard.writeText(urls);
    alert(`Copied ${results.length} URLs to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Google GMB URL Scraper</h1>
        <p className="text-gray-600 mb-6">
          Scrape up to 500 Google My Business website URLs from a single search query.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="mb-4">
            <label className="flex items-center gap-2 mb-4">
              <input
                type="radio"
                checked={useSingleQuery}
                onChange={() => setUseSingleQuery(true)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm font-medium text-gray-700">Single Query (Get 500 results)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={!useSingleQuery}
                onChange={() => setUseSingleQuery(false)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm font-medium text-gray-700">Multiple Queries</span>
            </label>
          </div>

          {useSingleQuery ? (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Query
              </label>
              <input
                type="text"
                value={singleQuery}
                onChange={(e) => setSingleQuery(e.target.value)}
                placeholder="e.g., dentist near me, restaurants in New York"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter a single search query to scrape up to 500 GMB URLs.
              </p>
            </div>
          ) : (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Queries (one per line)
              </label>
              <textarea
                value={queries}
                onChange={(e) => setQueries(e.target.value)}
                placeholder="e.g.,&#10;dentist near me&#10;restaurants in New York&#10;gym in Los Angeles"
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter multiple queries, one per line. Each query will be searched for GMB listings.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Results
              </label>
              <input
                type="number"
                value={maxResults}
                onChange={(e) => setMaxResults(Math.min(Math.max(parseInt(e.target.value) || 1, 1), 500))}
                min="1"
                max="500"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Maximum number of results to scrape (1-500)
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country Code
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="us">United States (US)</option>
                <option value="uk">United Kingdom (UK)</option>
                <option value="ca">Canada (CA)</option>
                <option value="au">Australia (AU)</option>
                <option value="in">India (IN)</option>
                <option value="de">Germany (DE)</option>
                <option value="fr">France (FR)</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleScrape}
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Scraping GMB URLs...' : `Start Scraping (Up to ${maxResults} results)`}
          </button>
          {progress && (
            <p className="mt-2 text-sm text-blue-600 text-center">{progress}</p>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Error: {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Results ({results.length} unique GMB URLs found)
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={copyURLs}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm"
                >
                  Copy URLs
                </button>
                <button
                  onClick={exportToTXT}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                >
                  Export TXT
                </button>
                <button
                  onClick={exportToCSV}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  Export CSV
                </button>
                <button
                  onClick={exportToJSON}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm"
                >
                  Export JSON
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Website URL
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Query
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((result, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {result.title}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <a
                          href={result.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline break-all"
                        >
                          {result.website}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {result.address}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {result.rating && (
                          <span>
                            ⭐ {result.rating}
                            {result.reviews && ` (${result.reviews} reviews)`}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                          {result.query}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

