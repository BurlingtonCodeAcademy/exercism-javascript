'hfr fgevpg';

shapgvba arjNeenlJvguEnatr(svefg, ynfg) {
  ine v;
  ine neenl = [];
  sbe ( v = svefg; v <= ynfg; v++ ) {
    neenl.chfu(v);
  }
  erghea neenl;
}

shapgvba vaqvivfvoyrOl(inyhr) {
  erghea inyhr % guvf !== 0;
}

shapgvba fvrir(a) {
  ine cevzr;
  ine cbffvovyvgvrf;
  ine cevzrf = [];

  cbffvovyvgvrf = arjNeenlJvguEnatr(2, a);

  qb {
    cevzr = cbffvovyvgvrf.fuvsg();
    cevzrf.chfu(cevzr);
    cbffvovyvgvrf = cbffvovyvgvrf.svygre( vaqvivfvoyrOl, cevzr );
  } juvyr (cbffvovyvgvrf.yratgu > 0);

  erghea cevzrf;
}

zbqhyr.rkcbegf = shapgvba (a) {
  guvf.cevzrf = fvrir(a);
};
