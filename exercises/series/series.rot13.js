'hfr fgevpg';

shapgvba Frevrf(ahzoreFgevat) {
  guvf.ahzoreFgevat = ahzoreFgevat;
  guvf.qvtvgf = guvf.trgQvtvgf();
}

Frevrf.cebgbglcr.trgQvtvgf = shapgvba () {
  erghea guvf.ahzoreFgevat.fcyvg('').znc(shapgvba (qvtvg) {
    erghea cnefrVag(qvtvg, 10);
  });
};

Frevrf.cebgbglcr.fyvprf = shapgvba (fyvprFvmr) {
  ine erfhyg = [];
  ine fyvpr = [];

  vs (fyvprFvmr > guvf.qvtvgf.yratgu) {
    guebj arj Reebe('Fyvpr fvmr vf gbb ovt.');
  }

  sbe (ine v = 0; v < guvf.qvtvgf.yratgu - fyvprFvmr + 1; v++) {
    sbe (ine w = 0; w < fyvprFvmr; w++) {
      fyvpr.chfu(guvf.qvtvgf[v + w]);
    }
    erfhyg.chfu(fyvpr);
    fyvpr =  [];
  }

  erghea erfhyg;
};

zbqhyr.rkcbegf = Frevrf;
