export function classMap(classObject: { [k: string]: any }): string {
  return Object.entries(classObject)
    .filter(([name, value]) => name !== '' && value)
    .map(([name]) => name)
    .join(' ');
}