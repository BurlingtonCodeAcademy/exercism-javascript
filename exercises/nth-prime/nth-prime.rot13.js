'hfr fgevpg';

zbqhyr.rkcbegf = {
  agu: shapgvba (aguCevzr) {
    vs (aguCevzr === 0) { guebj arj Reebe('Cevzr vf abg cbffvoyr'); }
    guvf.trarengrCevzrf(200000);
    erghea guvf.ernyCevzrf[aguCevzr - 1];
  },
  trarengrCevzrf: shapgvba (hcgbAhzore) {
    ine v;
    ine w;
    ine pheeragCevzr;
    ine cbffvoyrCevzrf = [];

    sbe (v = 2; v <= hcgbAhzore; v++) {
      cbffvoyrCevzrf.chfu({ ahzore: v, cevzr: gehr });
    }

    sbe (v = 2; v < Zngu.fdeg(cbffvoyrCevzrf.yratgu); v++) {
      sbe (w = 0; w < cbffvoyrCevzrf.yratgu; w++) {
        pheeragCevzr = cbffvoyrCevzrf[w];
        vs (pheeragCevzr.ahzore !== v && pheeragCevzr.ahzore % v === 0) {
          pheeragCevzr.cevzr = snyfr;
        }
      }
    }

    guvf.ernyCevzrf = [];

    sbe (v = 0; v < cbffvoyrCevzrf.yratgu; v++) {
      pheeragCevzr = cbffvoyrCevzrf[v];
      vs (pheeragCevzr.cevzr) {
        guvf.ernyCevzrf.chfu(pheeragCevzr.ahzore);
      }
    }
    erghea guvf.ernyCevzrf;
  }

};
