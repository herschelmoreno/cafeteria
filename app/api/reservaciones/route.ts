import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK = 'https://omnwebhook.omnichanels.net/webhook/reservaciones';

export async function POST(req: NextRequest) {
  const secret = process.env.N8N_RESERVATION_SECRET;

  if (!secret) {
    console.error('[reservaciones] N8N_RESERVATION_SECRET no está definido — reinicia el servidor');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const body = await req.text();

  const res = await fetch(N8N_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-webhook-secret': secret,
    },
    body,
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
