import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const originExtId = searchParams.get('originExtId');
  const destExtId = searchParams.get('destExtId');
  console.log(searchParams);
  const url = `https://api.sl.se/api2/TravelplannerV3_1/trip.json?key=${process.env.ROUTES_API_KEY}&originExtId=${originExtId}&destExtId=${destExtId}`;
  const res = await fetch(url);
  const data = await res.json();
  return Response.json({ data });
}
