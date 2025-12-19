import { NextRequest, NextResponse } from 'next/server';
import { scrapeGMBUrls, bulkScrapeGMBUrls } from '@/lib/serper';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { queries, query, gl, maxResults } = body;

    const resultsLimit = Math.min(Math.max(parseInt(maxResults) || 20, 1), 500); // Cap at 500

    // Single query
    if (query) {
      console.log(`Scraping GMB URLs for query: "${query}", maxResults: ${resultsLimit}, country: ${gl || 'us'}`);
      const results = await scrapeGMBUrls(query, gl || 'us', resultsLimit);
      console.log(`Found ${results.length} GMB URLs for query: "${query}"`);
      return NextResponse.json({ results, count: results.length });
    }

    // Bulk queries
    if (queries && Array.isArray(queries) && queries.length > 0) {
      const resultsPerQuery = Math.floor(resultsLimit / queries.length);
      console.log(`Scraping GMB URLs for ${queries.length} queries, ${resultsPerQuery} per query`);
      const results = await bulkScrapeGMBUrls(queries, gl || 'us', resultsPerQuery);
      console.log(`Found ${results.length} total GMB URLs`);
      return NextResponse.json({ results, count: results.length });
    }

    return NextResponse.json(
      { error: 'Either "query" (string) or "queries" (array) parameter is required' },
      { status: 400 }
    );
  } catch (error) {
    console.error('GMB Scrape API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

