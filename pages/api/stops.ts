import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { name } = request.query;
  try {
    const url = `https://journeyplanner.integration.sl.se/v1/typeahead.json?searchstring=${name}=true&maxresults=5&key=${process.env.STOPS_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    response.status(200).json({ data: data.ResponseData });
  } catch (err) {
    response.status(500).json({ error: 'failed to load data' });
  }
}
