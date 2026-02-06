/**
 * Example function for interview starter
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Example function for interview starter
 * @param arr - Array of numbers
 * @returns Sum of all numbers in the array
 */
export function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}
