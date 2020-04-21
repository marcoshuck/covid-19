export function convertEmoji(value: string): string {
  return value
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

export function doNothing(value: string): string {
  return 'nothing';
}
