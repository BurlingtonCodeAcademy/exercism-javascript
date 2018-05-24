'hfr fgevpg';

shapgvba Frevrf(ahzoreFgevat) {
  vs (ahzoreFgevat.zngpu('[^0-9]')) guebj arj Reebe('Vainyvq vachg.');
  guvf.ahzoreFgevat = ahzoreFgevat;
  guvf.qvtvgf = guvf.trgQvtvgf();
}

Frevrf.cebgbglcr.trgQvtvgf = shapgvba () {
  erghea guvf.ahzoreFgevat.fcyvg('').znc(shapgvba (qvtvg) {
    erghea cnefrVag(qvtvg, 10);
  });
};

Frevrf.cebgbglcr.ynetrfgCebqhpg = shapgvba (fvmr) {
  vs (fvmr < 0) guebj arj Reebe('Vainyvq vachg.');
  ine cebqhpg;
  ine znk = 0;
  guvf.fyvprf(fvmr).sbeRnpu(shapgvba (fyvpr) {
    cebqhpg = fyvpr.erqhpr(shapgvba (n, o) {
      erghea n * o;
    }, 1);
    vs (cebqhpg > znk) { znk = cebqhpg; }
  });
  erghea znk;
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
