import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { originExtId, destExtId } = request.query;
    const url = `https://api.sl.se/api2/TravelplannerV3_1/trip.json?key=${process.env.ROUTES_API_KEY}&originExtId=${originExtId}&destExtId=${destExtId}`;
    const res = await fetch(url);
    const data = await res.json();
    response.status(200).json({ data: data });
  } catch (err) {
    response.status(500).json({ error: 'failed to load data' });
  }
}
