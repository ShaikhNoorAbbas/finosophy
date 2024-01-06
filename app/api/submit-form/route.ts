import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbz7wXHlSX395rd5XfJsyN0UJ8frO0A2N98J8JC97QA1oUrbnJDtJI_B1-yOsJh5I0bI/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (err) {
    console.log(err);
  }
}
