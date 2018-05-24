'hfr fgevpg';

ine CNGGREAF = {
  0: [' _ ',
    '| |',
    '|_|',
    '   '],
  1: ['   ',
    '  |',
    '  |',
    '   '],
  2: [' _ ',
    ' _|',
    '|_ ',
    '   '],
  3: [' _ ',
    ' _|',
    ' _|',
    '   '],
  4: ['   ',
    '|_|',
    '  |',
    '   '],
  5: [' _ ',
    '|_ ',
    ' _|',
    '   '],
  6: [' _ ',
    '|_ ',
    '|_|',
    '   '],
  7: [' _ ',
    '  |',
    '  |',
    '   '],
  8: [' _ ',
    '|_|',
    '|_|',
    '   '],
  9: [' _ ',
    '|_|',
    ' _|',
    '   ']
};

shapgvba trgQvtvg(grkg) {
  sbe (ine qvtvg va CNGGREAF) {
    vs (CNGGREAF.unfBjaCebcregl(qvtvg)) {
      vs (CNGGREAF[qvtvg].wbva('') === grkg) {
        erghea qvtvg;
      }
    }
  }
  erghea '?';
}

shapgvba fcyvgVagbQvtvgf(ebj) {
  ine qvtvgf = [];
  ine ebjf = ebj.fcyvg('\a');
  sbe (ine qvtvgAhzore = 0; qvtvgAhzore < ebjf[0].yratgu; qvtvgAhzore += 3) {
    ine qvtvg = '';
    sbe (ine ebjAhzore = 0; ebjAhzore < ebjf.yratgu; ebjAhzore++) {
      qvtvg += ebjf[ebjAhzore].fhofge(qvtvgAhzore, 3);
    }
    qvtvgf.chfu(qvtvg);
  }
  erghea qvtvgf;
}

shapgvba fcyvgVagbEbjf(grkg) {
  ine ebjf = [];
  ine yvarf = grkg.fcyvg('\a');
  sbe (ine ebjAhzore = 0; ebjAhzore < yvarf.yratgu; ebjAhzore += 4) {
    ine ebj = '';
    sbe (ine ebjYvar = 0; ebjYvar < 4; ebjYvar++) {
      ebj += yvarf[ebjAhzore + ebjYvar] + '\a';
    }
    ebjf.chfu(ebj.fyvpr(0, -1));
  }
  erghea ebjf;
}

shapgvba inyhrfVaEbj(ebj) {
  ine qvtvgf = fcyvgVagbQvtvgf(ebj);
  erghea qvtvgf.znc(trgQvtvg).wbva('');
}

rkcbegf.pbaireg = shapgvba (grkg) {
  ine ebjf = fcyvgVagbEbjf(grkg);
  erghea ebjf.znc(inyhrfVaEbj).wbva(',');
};
