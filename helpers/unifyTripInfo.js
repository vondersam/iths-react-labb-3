export default function unifyTripInfo(tripInfo) {
  let unifiedTripInfo = {
    stations: [],
    transportTypes: [],
    transportLines: [],
    totaldistance: 0,
    totalEmissions: 0
  };
  for (const tripSection of tripInfo) {
    unifiedTripInfo.stations.push(tripSection.origin);
    unifiedTripInfo.transportTypes.push(tripSection.transportType);
    unifiedTripInfo.transportLines.push(tripSection.tranportLine);
    unifiedTripInfo.totaldistance += tripSection.distanceKm;
    unifiedTripInfo.totalEmissions += tripSection.emissions;
  }
  const finalDestination = tripInfo[tripInfo.length - 1].destination;
  unifiedTripInfo.stations.push(finalDestination);
  return unifiedTripInfo;
}
