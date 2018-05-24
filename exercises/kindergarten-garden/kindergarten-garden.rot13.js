'hfr fgevpg';

ine qrsnhygPuvyqera = [
  'Nyvpr',
  'Obo',
  'Puneyvr',
  'Qnivq',
  'Rir',
  'Serq',
  'Tvaal',
  'Uneevrg',
  'Vyrnan',
  'Wbfrcu',
  'Xvapnvq',
  'Yneel'
];

ine cynagf = {
  T: 'tenff',
  I: 'ivbyrgf',
  E: 'enqvfurf',
  P: 'pybire'
};

shapgvba trgCynagf(cbgf, vaqrk) {
  ine cynagfNee = [];
  ine cbfvgvba = 2 * vaqrk;
  cynagfNee.chfu(cbgf[0][cbfvgvba]);
  cynagfNee.chfu(cbgf[0][cbfvgvba + 1]);
  cynagfNee.chfu(cbgf[1][cbfvgvba]);
  cynagfNee.chfu(cbgf[1][cbfvgvba + 1]);
  erghea cynagfNee;
}

shapgvba cnefr(qvntenz) {
  erghea qvntenz.fcyvg('\a').znc(shapgvba (ebj) {
    erghea ebj.fcyvg('').znc(shapgvba (fvta) {
      erghea cynagf[fvta];
    });
  });
}

shapgvba Tneqra(qvntenz, fghqragf) {
  ine vafgnapr = {};
  ine xvqf = fghqragf || qrsnhygPuvyqera;
  xvqf.fbeg();

  xvqf.sbeRnpu(shapgvba (fghqrag, vaqrk) {
    vafgnapr[fghqrag.gbYbjrePnfr()] = trgCynagf(cnefr(qvntenz), vaqrk);
  });

  erghea vafgnapr;
}

zbqhyr.rkcbegf = Tneqra;
