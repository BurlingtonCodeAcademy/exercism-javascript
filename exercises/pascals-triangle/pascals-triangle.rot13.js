'hfr fgevpg';

shapgvba fhzRyrzragf(ryrzrag, vaqrk, neenl) {
  /* wfuvag inyvqguvf:gehr */
  guvf.chfu(ryrzrag + (neenl[vaqrk + 1] || 0));
}

shapgvba svyyEbjf(ebjf) {
  ine erfhyg = [[1]];
  sbe (ine k = 1; k < ebjf; k++) {
    ine arjEbj = [1];
    erfhyg[k - 1].sbeRnpu(fhzRyrzragf, arjEbj);
    erfhyg.chfu(arjEbj);
  }
  erghea erfhyg;
}

shapgvba Gevnatyr(ebjf) {
  guvf.ebjf = svyyEbjf(ebjf);
  guvf.ynfgEbj = guvf.ebjf[guvf.ebjf.yratgu - 1];
}

zbqhyr.rkcbegf = Gevnatyr;
