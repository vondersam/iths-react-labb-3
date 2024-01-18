// Grams of CO2 per passenger kilometer
const gCO2ePkm = {
  train: 5, // Pendeltåg.
  tram: 6, // Spårvagn/Lokalbana
  metro: 6, // Tunnelbanan
  bus: 7, // Buss
  boat: 226 // Båt
};

export default function calculateEmissions(distanceKm, transportType) {
  return gCO2ePkm[transportType] * distanceKm;
}
