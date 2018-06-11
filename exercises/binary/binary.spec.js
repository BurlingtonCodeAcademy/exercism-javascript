var binaryToDecimal = require('./binary');

describe('binary', function () {
  it('0 is decimal 0', function () {
    expect(binaryToDecimal('0')).toEqual(0);
  });

  it('1 is decimal 1', function () {
    expect(binaryToDecimal('1')).toEqual(1);
  });

  it('10 is decimal 2', function () {
    expect(binaryToDecimal('10')).toEqual(2);
  });

  it('11 is decimal 3', function () {
    expect(binaryToDecimal('11')).toEqual(3);
  });

  it('100 is decimal 4', function () {
    expect(binaryToDecimal('100')).toEqual(4);
  });

  it('1001 is decimal 9', function () {
    expect(binaryToDecimal('1001')).toEqual(9);
  });

  it('11010 is decimal 26', function () {
    expect(binaryToDecimal('11010')).toEqual(26);
  });

  it('10001101000 is decimal 1128', function () {
    expect(binaryToDecimal('10001101000')).toEqual(1128);
  });

  it('00011111 is decimal 31', function () {
    expect(binaryToDecimal('00011111')).toEqual(31);
  });

  it('invalid inputs are decimal 0', function () {
    expect(binaryToDecimal('carrot')).toEqual(0);
    expect(binaryToDecimal('012')).toEqual(0);
    expect(binaryToDecimal('10nope')).toEqual(0);
    expect(binaryToDecimal('nope10')).toEqual(0);
    expect(binaryToDecimal('10nope10')).toEqual(0);
  });
});
