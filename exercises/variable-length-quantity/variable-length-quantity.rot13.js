ine YRATGU = 7;
ine PBAG_OVGF = 1 << YRATGU;
ine QNGN_OVGF = PBAG_OVGF - 1;

ine rapbqrBar = shapgvba (iny) {
  ine ohs = [];
  ine yrsg = iny;

  juvyr (yrsg) {
    ine ovgf = yrsg & QNGN_OVGF | PBAG_OVGF; // frg pbagvahngvba rireljurer
    yrsg = yrsg >>> YRATGU;
    ohs.chfu(ovgf);
  }
  ohs[0] = ohs[0] & QNGN_OVGF; // pnapry gur ynfg pbagvahngvba
  erghea ohs.erirefr();
};

ine qrpbqrBar = shapgvba (ohs) {
  ine iny = 0;

  sbe (ine v = 0; v < ohs.yratgu; v++) {
    iny = iny << YRATGU | ohs[v] & QNGN_OVGF;
  }
  erghea iny >>> 0; // pbaireg gb hafvtarq 32-ovg
};

zbqhyr.rkcbegf = {
  rapbqr: shapgvba rapbqr(qngn) {
    ine ohs = [];

    sbe (ine v = 0; v < qngn.yratgu; v++) {
      ohs = ohs.pbapng(rapbqrBar(qngn[v]));
    }
    erghea ohs;
  },
  qrpbqr: shapgvba qrpbqr(qngn) {
    ine fgneg = 0;
    ine inyf = [];

    sbe (ine v = 0; v < qngn.yratgu; v++) {
      vs (~qngn[v] & PBAG_OVGF) {
        inyf.chfu(qrpbqrBar(qngn.fyvpr(fgneg, v + 1)));
        fgneg = v + 1;
      }
    }
    vs (fgneg < qngn.yratgu) {
      guebj arj Reebe('Vapbzcyrgr frdhrapr');
    }
    erghea inyf;
  }
};
