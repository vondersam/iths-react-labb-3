import calculateDistance from './calculateDistance';
import calculateEmissions from './calculateEmissions';

export default function getTripInfo(trip) {
  let tripInfo = [];
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
      const tripSectionInfo = {
        origin: tripSection.Origin.name,
        destination: tripSection.Destination.name,
        distanceKm: distance,
        emissions: emissions,
        transportType: transportType,
        tranportLine: tripSection.Product.line
      };
      tripInfo.push(tripSectionInfo);
    }
  }
  return tripInfo;
}
