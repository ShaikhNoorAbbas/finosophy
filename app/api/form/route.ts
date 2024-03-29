import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const KEYFILEPATH = 'finosophy-leads-f083e4dbe43c.json';

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: KEYFILEPATH,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const valueInputOption = 'USER_ENTERED';
    const insertDataOption = 'INSERT_ROWS';

    let range;
    let response;

    if (data.sheetName === 'contact') {
      range = `${data.sheetName}!A:E`;

      response = await sheets.spreadsheets.values.append({
        spreadsheetId: data.spreadsheetId,
        range,
        valueInputOption,
        insertDataOption,
        requestBody: {
          values: [
            [
              data.date,
              data.name,
              data.phone,
              data.email,
              data.subject,
              data.message,
            ],
          ],
        },
      });
    }

    if (data.sheetName === 'newsletter') {
      range = `${data.sheetName}!A:B`;

      response = await sheets.spreadsheets.values.append({
        spreadsheetId: data.spreadsheetId,
        range,
        valueInputOption,
        insertDataOption,
        requestBody: {
          values: [[data.date, data.name, data.email]],
        },
      });
    }

    return Response.json(response);
  } catch (error) {
    console.error('The API returned an error: ' + error);
    throw error;
  }
}
