import calculateDistance from './calculateDistance';
import calculateEmissions from './calculateEmissions';

export default function getInfo(trip) {
  let tripStats = [];
  for (const tripSection of trip.LegList.Leg) {
    // Extract only motorized trip sections
    // and not walks
    if (tripSection.hasOwnProperty('Product')) {
      const distance = calculateDistance(
        tripSection.Origin.lon,
        tripSection.Origin.lat,
        tripSection.Destination.lon,
        tripSection.Destination.lat
      );
      const transportType = tripSection.Product.catOut.trim().toLowerCase();
      const emissions = calculateEmissions(distance, transportType);
      const tripSectionStat = {
        origin: tripSection.Origin.name,
        destination: tripSection.Destination.name,
        distanceKm: distance,
        emissions: emissions,
        transportType: transportType,
        tranportLine: tripSection.Product.line
      };
      tripStats.push(tripSectionStat);
    }
  }
  return tripStats;
}
