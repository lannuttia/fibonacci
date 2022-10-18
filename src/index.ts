export default function *fibonacci(): Generator<number, number, boolean> {
  let current = 0;
  let next = 1;
  while (true) {
    const reset: boolean = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}