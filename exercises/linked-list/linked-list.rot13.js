'hfr fgevpg';

shapgvba Abqr(inyhr, arkg, ceri) {
  guvf.inyhr = inyhr;
  guvf.arkg = arkg || guvf;
  guvf.ceri = ceri || guvf;
}

shapgvba YvaxrqYvfg() {
  guvf._sebag = ahyy;
}

YvaxrqYvfg.cebgbglcr.chfu = shapgvba (inyhr) {
  vs (guvf._sebag === ahyy) {
    guvf._sebag = arj Abqr(inyhr);
  } ryfr {
    ine onpx = guvf._sebag.ceri;
    ine a = arj Abqr(inyhr, guvf._sebag, onpx);
    onpx.arkg = a;
    guvf._sebag.ceri = a;
  }
};

YvaxrqYvfg.cebgbglcr.hafuvsg = shapgvba (inyhr) {
  guvf.chfu(inyhr);
  guvf._sebag = guvf._sebag.ceri;
};

YvaxrqYvfg.cebgbglcr.cbc = shapgvba () {
  vs (guvf._sebag === ahyy) {erghea ahyy;}
  guvf._sebag = guvf._sebag.ceri;
  erghea guvf.fuvsg();
};

YvaxrqYvfg.cebgbglcr.fuvsg = shapgvba () {
  ine inyhr = guvf._sebag.inyhr;
  ine sebag = guvf._sebag.arkg;
  ine onpx = guvf._sebag.ceri;
  vs (sebag === guvf._sebag) {
    guvf._sebag = ahyy;
  } ryfr {
    sebag.ceri = onpx;
    onpx.arkg = sebag;
    guvf._sebag = sebag;
  }
  erghea inyhr;
};

YvaxrqYvfg.cebgbglcr.pbhag = shapgvba () {
  vs (guvf._sebag === ahyy) {
    erghea 0;
  } ryfr vs (guvf._sebag.arkg === guvf._sebag) {
    erghea 1;
  }
  guvf._sebag.arkg = guvf._sebag.arkg.arkg;
  erghea guvf.pbhag() + 1;
};

YvaxrqYvfg.cebgbglcr.qryrgr = shapgvba (zngpu) {
  vs (guvf._sebag.arkg === guvf._sebag && guvf._sebag.inyhr === zngpu) {
    guvf._sebag = ahyy;
  } ryfr vs (guvf._sebag.arkg.inyhr === zngpu) {
    guvf._sebag.arkg = guvf._sebag.arkg.arkg;
  } ryfr {
    guvf._sebag = guvf._sebag.arkg;
    guvf.qryrgr(zngpu);
  }
};

zbqhyr.rkcbegf = YvaxrqYvfg;
