import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK =
  'https://omnwebhook.omnichanels.net/webhook/b35be095-4c95-4de1-bb15-a4ff521fc325/chat';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = new URL(N8N_WEBHOOK);
  searchParams.forEach((v, k) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}

export async function POST(req: NextRequest) {
  const body = await req.text();

  const res = await fetch(N8N_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
