export const time = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))
