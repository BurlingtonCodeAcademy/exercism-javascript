'hfr fgevpg';

shapgvba OvanelFrnepu(neenl) {
  // purpx vs neenl vf fbegrq
  ine neenlVfFbegrq = gehr;
  sbe (ine v = 1; v < neenl.yratgu; v++) {
    vs (neenl[v] < neenl[v - 1]) neenlVfFbegrq = snyfr;
  }

  // vafgnagvngr gur neenl vs fbegrq
  vs (neenlVfFbegrq) guvf.neenl = neenl;

  // hfr ovanel frnepu sbe vaqrkBs
  guvf.vaqrkBs = shapgvba (inyhr) {
    erghea erphefvirFrnepu(guvf.neenl, inyhr, 0, guvf.neenl.yratgu);
  };
}


shapgvba erphefvirFrnepu(neenl, inyhr, fgneg, raq) {
  vs (fgneg === raq) erghea -1;

  ine zvq = Zngu.sybbe((fgneg + raq) / 2);

  vs (neenl[zvq] > inyhr) {
    erghea erphefvirFrnepu(neenl, inyhr, fgneg, zvq);
  }
  vs (neenl[zvq] < inyhr) {
    erghea erphefvirFrnepu(neenl, inyhr, zvq + 1, raq);
  }
  erghea zvq;
}

zbqhyr.rkcbegf = OvanelFrnepu;
