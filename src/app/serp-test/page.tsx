'use client';

import { useState } from 'react';

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  position: number;
}

interface SerpResponse {
  organic: SearchResult[];
  peopleAlsoAsk?: Array<{
    question: string;
    snippet: string;
    title: string;
    link: string;
  }>;
  relatedSearches?: Array<{
    query: string;
  }>;
  knowledgeGraph?: {
    title: string;
    type: string;
    description: string;
    website?: string;
  };
}

export default function SerpTestPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SerpResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch('/api/serp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query.trim(),
          num: 10,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch results');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Google SERP Test</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your search query..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Error: {error}
          </div>
        )}

        {results && (
          <div className="space-y-6">
            {results.knowledgeGraph && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Knowledge Graph</h2>
                <h3 className="text-lg font-medium text-blue-600 mb-2">
                  {results.knowledgeGraph.title}
                </h3>
                <p className="text-gray-700 mb-2">{results.knowledgeGraph.description}</p>
                {results.knowledgeGraph.website && (
                  <a
                    href={results.knowledgeGraph.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {results.knowledgeGraph.website}
                  </a>
                )}
              </div>
            )}

            {results.organic && results.organic.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Organic Results</h2>
                <div className="space-y-4">
                  {results.organic.map((result, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start gap-2 mb-1">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          #{result.position}
                        </span>
                        <a
                          href={result.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          {result.title}
                        </a>
                      </div>
                      <p className="text-sm text-gray-600 ml-8">{result.snippet}</p>
                      <p className="text-xs text-green-700 ml-8 mt-1">{result.link}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results.peopleAlsoAsk && results.peopleAlsoAsk.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">People Also Ask</h2>
                <div className="space-y-3">
                  {results.peopleAlsoAsk.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-medium text-gray-900 mb-1">{item.question}</h3>
                      <p className="text-sm text-gray-600">{item.snippet}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results.relatedSearches && results.relatedSearches.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Related Searches</h2>
                <div className="flex flex-wrap gap-2">
                  {results.relatedSearches.map((search, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setQuery(search.query);
                        handleSearch(new Event('submit') as any);
                      }}
                    >
                      {search.query}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

