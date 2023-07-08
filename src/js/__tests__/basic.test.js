import healthSort from '../basic';

test('should sort array by health', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'зомби', health: 80 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'зомби', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];
  const received = healthSort(input);
  expect(received).toEqual(expected);
});

test("check toBe doesn't work in sort array", () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'зомби', health: 80 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'зомби', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];
  const received = healthSort(input);
  expect(Object.is(received, expected)).toBe(false);
});
