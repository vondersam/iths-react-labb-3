import { parse } from 'iso8601-duration';

export default function formatDuration(duration) {
  const resultTime = parse(duration);
  let formattedTime = '';
  for (const i in resultTime) {
    formattedTime += resultTime[i] > 0 ? `${resultTime[i]} ${i} ` : '';
  }
  return formattedTime.trim();
}
