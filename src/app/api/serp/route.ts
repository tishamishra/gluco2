import { NextRequest, NextResponse } from 'next/server';
import { searchSerper } from '@/lib/serper';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, num, gl, hl, type } = body;

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      );
    }

    const results = await searchSerper({
      query,
      num: num || 10,
      gl: gl || 'us',
      hl: hl || 'en',
      type: type || 'search',
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('SERP API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter (q) is required' },
        { status: 400 }
      );
    }

    const num = searchParams.get('num') ? parseInt(searchParams.get('num')!) : 10;
    const gl = searchParams.get('gl') || 'us';
    const hl = searchParams.get('hl') || 'en';
    const type = (searchParams.get('type') as any) || 'search';

    const results = await searchSerper({
      query,
      num,
      gl,
      hl,
      type,
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('SERP API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

