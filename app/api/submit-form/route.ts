import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    console.log(body);
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbx5kQezIduR_h87F-0UMBF9iZ5NS9RwS3NCsNOHQ9H_tUsIcNQ7Ug7Z-bKxTtZyZOiD/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.json()),
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (err) {
    console.log(err);
  }
}
