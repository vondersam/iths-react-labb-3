# Stockholm Transport Emissions Calculator

Stockholm Transport Emissions Calculator is a web app where you can search a trip between two stations in the Stockholm's transport system and gives you information on the possible routes for that trip, their length in time and kilometers and the emissions created by that trip in CO2e/pKm and person.

It is deployed using Vercel [here](https://stockholm-transport-emissions-calculator.vercel.app/).

# How Stockholm Transport Emissions Calculator works

Stockholm Transport Emissions Calculator uses two SL's APIs (Storstockholms Lokaltrafik, Transport of Stockholm) available in [Trafiklab](https://www.trafiklab.se/) and some further calculations to obtain the information that the user is given.

1. We use [SL Stop lookup v1.0 (Platsuppslag)](https://www.trafiklab.se/api/trafiklab-apis/sl/stop-lookup/) for getting the stops suggestions on the origin and destination search fields.

2. We use [SL Route-planner v3.1 (Reseplanerare 3.1)](https://www.trafiklab.se/api/trafiklab-apis/sl/route-planner-31/) to obtain the possible routes between the origin and destination.

3. We calculate the distance in kilometers between all the stops in each route by using the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula)

4. We calculate the emissions by multiplying the whole route's distance in kilometers by some emission factors extracted from multiple sources. These are the factors used, where gCO2e/pkm stands for grams of CO2 per kilometer per person:

   - Train, 5 gCO2e/pkm

   - Tram, 6 gCO2e/pkm

   - Metro, 6 gCO2e/pkm

   - Bus, 7 gCO2e/pkm

   - Boat, 226 gCO2e/pkm

These factors are just approximations. The data showed in the app is just to show the prototype of application and is not claimed that they reflect the reality.
