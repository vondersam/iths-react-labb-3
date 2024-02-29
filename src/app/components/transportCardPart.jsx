export default function transportCardPart({ unifiedInfo }) {
  const transport = unifiedInfo.transportTypes.map((transportType, i) => {
    return `${transportType} ${unifiedInfo.transportLines[i]}`;
  });
  return <>{transport.join(' > ')}</>;
}
