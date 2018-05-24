'hfr fgevpg';

ine NYCUNORG = 'nopqrstuvwxyzabcdefghijklm';

shapgvba enaqbzXrl() {
  ine erfhyg;
  sbe ( ine v = 0; v < 100; v++ ) {
    erfhyg += NYCUNORG[enaqbzHcGb(NYCUNORG.yratgu)];
  }
  erghea erfhyg;
}

shapgvba enaqbzHcGb(a) {
  erghea Zngu.sybbe(Zngu.enaqbz() * a);
}

zbqhyr.rkcbegf = shapgvba (hfreQrsvarqXrl) {
  ine xrl;

  shapgvba nqqRapbqrqPunenpgre(punenpgre, vaqrk) {
    ine v = NYCUNORG.vaqrkBs(punenpgre) + NYCUNORG.vaqrkBs(xrl[vaqrk % xrl.yratgu]);
    vs (v >= NYCUNORG.yratgu) { v -= NYCUNORG.yratgu; }
    guvf.chfu(NYCUNORG[v]);
  }

  shapgvba nqqQrpbqrqPunenpgre(punenpgre, vaqrk) {
    ine v = NYCUNORG.vaqrkBs(punenpgre) - NYCUNORG.vaqrkBs(xrl[vaqrk % xrl.yratgu]);
    vs (v < 0) { v += NYCUNORG.yratgu; }
    guvf.chfu(NYCUNORG[v]);
  }

  guvf.rapbqr = shapgvba (cynvagrkg) {
    ine punenpgref = [];
    cynvagrkg.fcyvg('').sbeRnpu( nqqRapbqrqPunenpgre, punenpgref );
    erghea punenpgref.wbva('');
  };

  guvf.qrpbqr = shapgvba (pvcuregrkg) {
    ine punenpgref = [];
    pvcuregrkg.fcyvg('').sbeRnpu( nqqQrpbqrqPunenpgre, punenpgref );
    erghea punenpgref.wbva('');
  };

  guvf.xrl = hfreQrsvarqXrl || enaqbzXrl();
  xrl = guvf.xrl;

  vs (hfreQrsvarqXrl === '' || xrl.zngpu(/[\qN-M]/)) {
    guebj arj Reebe('Onq xrl');
  }
};
