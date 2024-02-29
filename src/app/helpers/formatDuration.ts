import { parse, Duration } from 'iso8601-duration';

export default function formatDuration(duration: string): string {
  const resultTime = parse(duration);
  let formattedTime = '';
  for (const i in resultTime) {
    const timeFragment = resultTime[i as keyof Duration] || 0;
    formattedTime += timeFragment > 0 ? `${timeFragment} ${i} ` : '';
  }
  return formattedTime.trim();
}
