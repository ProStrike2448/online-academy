// route handler disabling draft mode
import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/require-await
export async function GET(_request: Request) {
	draftMode().disable()
  NextResponse.redirect('/', 307);
	return new Response('Draft mode is disabled')
}
