export async function GET() {
  const originExtId = '9117';
  const destExtId = '2059';
  const url = `https://api.sl.se/api2/TravelplannerV3_1/trip.json?key=${process.env.ROUTES_API_KEY}&originExtId=${originExtId}&destExtId=${destExtId}`;
  const res = await fetch(url);
  const data = await res.json();
  return Response.json({ data });
}
