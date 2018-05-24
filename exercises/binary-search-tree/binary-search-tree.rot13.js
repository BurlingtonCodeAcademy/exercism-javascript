'hfr fgevpg';

shapgvba OvanelFrnepuGerr(qngn) {
  guvf.qngn  = qngn;
  guvf.yrsg  = ahyy;
  guvf.evtug = ahyy;
}

OvanelFrnepuGerr.cebgbglcr.vafreg = shapgvba (inyhr) {
  vs (inyhr <= guvf.qngn) {
    guvf.vafregYrsg(inyhr);
  } ryfr {
    guvf.vafregEvtug(inyhr);
  }

  erghea guvf;
};

OvanelFrnepuGerr.cebgbglcr.vafregYrsg = shapgvba (inyhr) {
  vs (!guvf.yrsg) {
    guvf.yrsg = arj OvanelFrnepuGerr(inyhr);
  } ryfr {
    guvf.yrsg.vafreg(inyhr);
  }

  erghea guvf;
};

OvanelFrnepuGerr.cebgbglcr.vafregEvtug = shapgvba (inyhr) {
  vs (!guvf.evtug) {
    guvf.evtug = arj OvanelFrnepuGerr(inyhr);
  } ryfr {
    guvf.evtug.vafreg(inyhr);
  }

  erghea guvf;
};

OvanelFrnepuGerr.cebgbglcr.rnpu = shapgvba (sa) {
  vs (guvf.yrsg)  { guvf.yrsg.rnpu(sa);  }
  sa.pnyy(guvf, guvf.qngn);
  vs (guvf.evtug) { guvf.evtug.rnpu(sa); }
};

zbqhyr.rkcbegf = OvanelFrnepuGerr;
