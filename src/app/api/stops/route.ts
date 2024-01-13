export async function GET() {
  const searchString = 'Oden';
  const url = `https://journeyplanner.integration.sl.se/v1/typeahead.json?searchstring=${searchString}=true&maxresults=5&key=${process.env.STOPS_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return Response.json({ data });
}
