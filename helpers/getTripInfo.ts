import calculateDistance from './calculateDistance';
import calculateEmissions from './calculateEmissions';

interface TripInfo {
  origin: string;
  destination: string;
  distanceKm: number;
  emissions: number;
  transportType: string;
  tranportLine: string;
}

export default function getTripInfo(trip: any): TripInfo[] {
  let tripInfo: TripInfo[] = [];
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
      const tripSectionInfo: TripInfo = {
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
