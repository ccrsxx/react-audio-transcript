export function millisToMinutesAndSeconds(millis: number): string {
  const date = new Date(millis);
  return date.toISOString().slice(14, 19);
}
