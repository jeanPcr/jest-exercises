import { isLeap } from './leap';

const leapYears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020];
const notLeapYears = [1900, 1901, 1902, 1905, 1910, 1923];

describe('A leap year', () => {
  notLeapYears.forEach(function (year) {
    test(`Year ${year} IS ***NOT*** LEAP`, function () {
      expect(isLeap(year)).toEqual(false);
    })
  });

  leapYears.forEach(function (year) {
    test(`Year ${year} IS LEAP`, function () {
      expect(isLeap(year)).toEqual(true);
    })
  });

  test('year not divisible by 4: common year', () => {
    expect(isLeap(2015)).toEqual(false);
  });

  test('year divisible by 4, not divisible by 100: leap year', () => {
    expect(isLeap(2016)).toEqual(true);
  });

  test('year divisible by 100, not divisible by 400: common year', () => {
    expect(isLeap(2100)).toEqual(false);
  });

  test('year divisible by 400: leap year', () => {
    expect(isLeap(2000)).toEqual(true);
  });

  test('year divisible by 200, not divisible by 400: common year', () => {
    expect(isLeap(1800)).toEqual(false);
  });
});



