import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK = 'https://omnwebhook.omnichanels.net/webhook/reservaciones';

export async function POST(req: NextRequest) {
  const body = await req.text();

  const res = await fetch(N8N_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-webhook-secret': process.env.N8N_RESERVATION_SECRET ?? '',
    },
    body,
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
