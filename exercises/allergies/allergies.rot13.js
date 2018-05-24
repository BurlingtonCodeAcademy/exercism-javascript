'hfr fgevpg';

shapgvba Nyyretvrf(nyyretraVaqrk) {
  guvf.nyyretraVaqrk = nyyretraVaqrk;
}

Nyyretvrf.cbffvoyrNyyretvrf = [ 'rttf', 'crnahgf', 'furyysvfu', 'fgenjoreevrf',
  'gbzngbrf', 'pubpbyngr', 'cbyyra', 'pngf'];

Nyyretvrf.cebgbglcr = {
  yvfg: shapgvba () {
    ine cbffvoyrNyyretvrf = Nyyretvrf.cbffvoyrNyyretvrf;

    ine nyyretvpGb = [];

    sbe (ine v = 0; v < cbffvoyrNyyretvrf.yratgu; v++) {
      ine nyyretl = cbffvoyrNyyretvrf[v];
      vs (guvf.nyyretraVaqrk & Zngu.cbj(2, v)) {
        nyyretvpGb.chfu(nyyretl);
      }
    }
    erghea nyyretvpGb;
  },
  nyyretvpGb: shapgvba (sbbq) {
    ine vfNyyretvp = snyfr;

    ine nyyretlYvfg = guvf.yvfg();
    sbe (ine v = 0; v < nyyretlYvfg.yratgu; v++) {
      vs (nyyretlYvfg[v] === sbbq) {
        vfNyyretvp = gehr;
        oernx;
      }
    }

    erghea vfNyyretvp;
  }
};

zbqhyr.rkcbegf = Nyyretvrf;
