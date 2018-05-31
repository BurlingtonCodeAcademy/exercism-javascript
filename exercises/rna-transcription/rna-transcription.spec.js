var transcribeDna = require('./rna-transcription');

describe('toRna()', function () {
  it('transcribes cytosine to guanine', function () {
    expect(transcribeDna('C')).toEqual('G');
  });

  it('transcribes guanine to cytosine', function () {
    expect(transcribeDna('G')).toEqual('C');
  });

  it('transcribes adenine to uracil', function () {
    expect(transcribeDna('A')).toEqual('U');
  });

  it('transcribes thymine to adenine', function () {
    expect(transcribeDna('T')).toEqual('A');
  });

  it('transcribes all dna nucleotides to their rna complements', function () {
    expect(transcribeDna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU');
  });

  it('correctly handles completely invalid input', function () {
    expect(function () { transcribeDna('XXX'); }).toThrow(
      new Error('Invalid input')
    );
  });

  it('correctly handles partially invalid input', function () {
    expect(function () { transcribeDna('ACGTXXXCTTAA'); }).toThrow(
      new Error('Invalid input')
    );
  });
});
