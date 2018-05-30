var isPangram = require('./pangram');

describe('isPangram()', function ()  {
  it('with empty sentence', function () {
    expect(isPangram('')).toBe(false);
  });

  it('with only lower case', function ()  {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
  });

  it("with missing a character 'x'", function ()  {
    expect(isPangram('a quick movement of the enemy will jeopardize five gunboats')).toBe(false);
  });

  it("with another missing character 'x'", function () {
    expect(isPangram('the quick brown fish jumps over the lazy dog')).toBe(false);
  });

  it('ignores underscores', function () {
    expect(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true);
  });

  it('ignores numbers', function () {
    expect(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs')).toBe(true);
  });

  it('with leetspeek still needs the missing letters', function () {
    expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
  });

  it('with mixed case and punctuation, ignores case', function ()  {
    expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
  });

  it('with non-ASCII characters', function ()  {
    expect(isPangram('Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.')).toBe(true);
  });
});
