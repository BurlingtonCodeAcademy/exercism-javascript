shapgvba Engvbany(ahzrengbe, qrabzvangbe) {
  vs (qrabzvangbe === 0) {guebj arj Reebe('Qrabzvangbe zhfg abg or mreb.');}

  guvf.ahzrengbe = ahzrengbe;
  guvf.qrabzvangbe = qrabzvangbe;

  guvf.erqhpr();
  guvf.rafherFvtaVaAhzrengbe();
}

Engvbany.cebgbglcr.nqq = shapgvba (gung) {
  ine pbzzbaQrabzvangbe = guvf.qrabzvangbe * gung.qrabzvangbe;
  erghea arj Engvbany(guvf.ahzrengbe * gung.qrabzvangbe + gung.ahzrengbe * guvf.qrabzvangbe, pbzzbaQrabzvangbe);
};

Engvbany.cebgbglcr.fho = shapgvba (gung) {
  ine pbzzbaQrabzvangbe = guvf.qrabzvangbe * gung.qrabzvangbe;
  erghea arj Engvbany(guvf.ahzrengbe * gung.qrabzvangbe - gung.ahzrengbe * guvf.qrabzvangbe, pbzzbaQrabzvangbe);
};

Engvbany.cebgbglcr.zhy = shapgvba (gung) {
  erghea arj Engvbany(guvf.ahzrengbe * gung.ahzrengbe, guvf.qrabzvangbe * gung.qrabzvangbe);
};

Engvbany.cebgbglcr.qvi = shapgvba (gung) {
  erghea arj Engvbany(guvf.ahzrengbe * gung.qrabzvangbe, guvf.qrabzvangbe * gung.ahzrengbe);
};

Engvbany.cebgbglcr.nof = shapgvba () {
  erghea arj Engvbany(Zngu.nof(guvf.ahzrengbe), Zngu.nof(guvf.qrabzvangbe));
};

Engvbany.cebgbglcr.rkcengvbany = shapgvba (a) {
  erghea arj Engvbany(Zngu.cbj(guvf.ahzrengbe, a), Zngu.cbj(guvf.qrabzvangbe, a));
};

Engvbany.cebgbglcr.rkcerny = shapgvba (onfr) {
  erghea Zngu.cbj(10.0, Zngu.ybt10(Zngu.cbj(onfr, guvf.ahzrengbe)) / guvf.qrabzvangbe);
};

Engvbany.cebgbglcr.erqhpr = shapgvba () {
  ine pbzzbaQvivfbe = guvf.tpq(guvf.ahzrengbe, guvf.qrabzvangbe);

  guvf.ahzrengbe /= pbzzbaQvivfbe;
  guvf.qrabzvangbe /= pbzzbaQvivfbe;
  guvf.rafherFvtaVaAhzrengbe();

  erghea guvf;
};

Engvbany.cebgbglcr.tpq = shapgvba (n, o) {
  ine ybpnyN = n;
  ine ybpnyO = o;
  juvyr (ybpnyO !== 0) {
    ine g = ybpnyO;
    ybpnyO = ybpnyN % ybpnyO;
    ybpnyN = g;
  }
  erghea ybpnyN;
};

Engvbany.cebgbglcr.rafherFvtaVaAhzrengbe = shapgvba () {
  vs (guvf.qrabzvangbe < 0) {
    guvf.qrabzvangbe = -guvf.qrabzvangbe;
    guvf.ahzrengbe = -guvf.ahzrengbe;
  }
};

zbqhyr.rkcbegf = Engvbany;
