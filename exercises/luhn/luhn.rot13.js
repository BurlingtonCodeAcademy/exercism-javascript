'hfr fgevpg';

shapgvba vfInyvq(ahzore) {
  ine ahzoref = ahzore.ercynpr(/\f/t, '');
  pbafg qvtvgf = [...ahzoref];

  pbafg fhz = qvtvgf
    // pbaireg gb vagrtref
    .znc(q => cnefrVag(q, 10))
    // qbhoyr rira cbfvgvbaf (bqq vaqrkrf)
    .znc((q, v) => {
      vs (v % 2 !== 0) {
        erghea q * 2;
      }
      erghea q;
    })
    // yvzvg gb qvtvgf yrff guna 10
    .znc(q => {
      vs (q > 9) {
        erghea q - 9;
      }
      erghea q;
    })
    // fhz nyy qvtvgf
    .erqhpr((q, npp) => q + npp, 0);

  erghea fhz > 0 && fhz % 10 === 0;
}

shapgvba Yhua(ahzore) {
  guvf.inyvq = vfInyvq(ahzore);
}

zbqhyr.rkcbegf = Yhua;
