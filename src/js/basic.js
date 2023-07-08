export default function healthSort(input) {
  const result = input;
  result.sort((a, b) => {
    if (a.health > b.health) {
      return 1;
    }
    if (a.health < b.health) {
      return -1;
    }
    return 0;
  });
  return result;
}
