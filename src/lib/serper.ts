interface SerperSearchOptions {
  query: string;
  num?: number;
  start?: number; // Pagination offset
  gl?: string; // Country code (e.g., 'us', 'uk')
  hl?: string; // Language code (e.g., 'en')
  type?: 'search' | 'images' | 'videos' | 'places' | 'news';
}

interface SerperSearchResult {
  organic: Array<{
    title: string;
    link: string;
    snippet: string;
    position: number;
    date?: string;
  }>;
  places?: Array<{
    title: string;
    address: string;
    rating?: number;
    reviews?: number;
    type?: string;
    website?: string;
    phoneNumber?: string;
    category?: string;
    position?: number;
  }>;
  localPack?: Array<{
    title: string;
    address: string;
    rating?: number;
    reviews?: number;
    website?: string;
    phoneNumber?: string;
    category?: string;
    position?: number;
  }>;
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

export async function searchSerper(options: SerperSearchOptions): Promise<SerperSearchResult> {
  const apiKey = process.env.SERPER_API_KEY;
  
  if (!apiKey) {
    throw new Error('SERPER_API_KEY is not set in environment variables');
  }

  const response = await fetch('https://google.serper.dev/search', {
    method: 'POST',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: options.query,
      num: options.num || 10,
      start: options.start || 0,
      gl: options.gl || 'us',
      hl: options.hl || 'en',
      type: options.type || 'search',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Serper API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data;
}

export interface GMBResult {
  title: string;
  website: string;
  address: string;
  phoneNumber?: string;
  rating?: number;
  reviews?: number;
  category?: string;
  query: string;
}

/**
 * Scrape GMB (Google My Business) URLs from search results
 * Uses places search type to get local business results
 * Supports pagination to fetch up to 500 results
 */
export async function scrapeGMBUrls(
  query: string,
  gl: string = 'us',
  maxResults: number = 20
): Promise<GMBResult[]> {
  const allGmbResults: GMBResult[] = [];
  const seenUrls = new Set<string>();
  
  // Calculate number of pages needed (100 results per page for search type)
  const resultsPerPage = 100;
  const maxPages = Math.ceil(maxResults / resultsPerPage);
  
  // Use search type for better pagination and to get organic results with business websites
  for (let page = 0; page < maxPages && allGmbResults.length < maxResults; page++) {
    const start = page * resultsPerPage;
    
    try {
      const results = await searchSerper({
        query,
        type: 'search', // Use search type for better pagination
        gl,
        num: resultsPerPage,
        start,
      });

      // Extract from places array (if available)
      if (results.places && Array.isArray(results.places)) {
        results.places.forEach((place) => {
          if (place.website && !seenUrls.has(place.website) && allGmbResults.length < maxResults) {
            seenUrls.add(place.website);
            allGmbResults.push({
              title: place.title,
              website: place.website,
              address: place.address || '',
              phoneNumber: place.phoneNumber,
              rating: place.rating,
              reviews: place.reviews,
              category: place.category,
              query,
            });
          }
        });
      }

      // Extract from localPack array (if available)
      if (results.localPack && Array.isArray(results.localPack)) {
        results.localPack.forEach((place) => {
          if (place.website && !seenUrls.has(place.website) && allGmbResults.length < maxResults) {
            seenUrls.add(place.website);
            allGmbResults.push({
              title: place.title,
              website: place.website,
              address: place.address || '',
              phoneNumber: place.phoneNumber,
              rating: place.rating,
              reviews: place.reviews,
              category: place.category,
              query,
            });
          }
        });
      }

      // Extract from organic results - these are the main source for business websites
      if (results.organic && Array.isArray(results.organic)) {
        results.organic.forEach((result) => {
          if (allGmbResults.length >= maxResults) return;
          
          // Skip Google-owned domains
          if (result.link.includes('google.com') || 
              result.link.includes('youtube.com') ||
              result.link.includes('maps.google')) {
            return;
          }

          // Extract website from the link itself (most reliable)
          try {
            const url = new URL(result.link);
            const domain = url.hostname.replace('www.', '');
            
            // Skip common non-business domains
            const skipDomains = ['facebook.com', 'instagram.com', 'twitter.com', 'linkedin.com', 
                               'yelp.com', 'tripadvisor.com', 'yellowpages.com', 'bbb.org'];
            if (skipDomains.some(d => domain.includes(d))) {
              return;
            }

            // Use the link as the website if it's a valid business website
            if (!seenUrls.has(result.link) && allGmbResults.length < maxResults) {
              seenUrls.add(result.link);
              allGmbResults.push({
                title: result.title,
                website: result.link,
                address: result.snippet || '',
                query,
              });
            }
          } catch (e) {
            // Invalid URL, skip
          }

          // Also check snippet for additional website URLs
          if (result.snippet) {
            const urlPattern = /(https?:\/\/[^\s\)"']+)/g;
            const urls = result.snippet.match(urlPattern);
            if (urls) {
              urls.forEach((url) => {
                try {
                  const cleanUrl = url.replace(/[.,;!?]+$/, '').trim();
                  const urlObj = new URL(cleanUrl);
                  const domain = urlObj.hostname.replace('www.', '');
                  
                  // Skip Google and social media domains
                  if (domain.includes('google.com') || 
                      domain.includes('facebook.com') || 
                      domain.includes('maps.google') ||
                      domain.includes('yelp.com')) {
                    return;
                  }

                  if (!seenUrls.has(cleanUrl) && allGmbResults.length < maxResults) {
                    seenUrls.add(cleanUrl);
                    allGmbResults.push({
                      title: result.title,
                      website: cleanUrl,
                      address: result.snippet,
                      query,
                    });
                  }
                } catch (e) {
                  // Invalid URL, skip
                }
              });
            }
          }
        });
      }

      // If no organic results, break early
      if (!results.organic || results.organic.length === 0) {
        break;
      }

      // Small delay to avoid rate limiting
      if (page < maxPages - 1 && allGmbResults.length < maxResults) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error(`Error on page ${page + 1}:`, error);
      // Continue with next page even if one fails
      if (allGmbResults.length === 0) break;
    }
  }

  return allGmbResults.slice(0, maxResults);
}

/**
 * Bulk scrape GMB URLs from multiple queries
 */
export async function bulkScrapeGMBUrls(
  queries: string[],
  gl: string = 'us',
  maxResultsPerQuery: number = 20
): Promise<GMBResult[]> {
  const allResults: GMBResult[] = [];

  for (const query of queries) {
    try {
      const results = await scrapeGMBUrls(query, gl, maxResultsPerQuery);
      allResults.push(...results);
      // Small delay to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error scraping query "${query}":`, error);
    }
  }

  // Remove duplicates across all queries
  const uniqueResults = Array.from(
    new Map(allResults.map((item) => [item.website, item])).values()
  );

  return uniqueResults;
}

