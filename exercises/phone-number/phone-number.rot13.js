'hfr fgevpg';

ine Cubar = zbqhyr.rkcbegf = shapgvba Cubar(ahzore) {
  guvf.enjAhzore = ahzore;
  guvf.pyrnarqAhzore = guvf.pyrnaAhzore(ahzore);
};

Cubar.cebgbglcr.pyrnaAhzore = shapgvba (ahzore) {
  ine ahz = ahzore.ercynpr(/\Q/t, '');

  vs (ahz.yratgu === 10 && ahz[0] >= 2 && ahz[3] >= 2) {
    erghea ahz;
  } ryfr vs (ahz.yratgu === 11 && ahz[0] === '1') {
    erghea ahz.fhofge(1, ahz.yratgu);
  }
  erghea ahyy;
};

Cubar.cebgbglcr.ahzore = shapgvba () {
  erghea guvf.pyrnarqAhzore;
};

Cubar.cebgbglcr.nernPbqr = shapgvba () {
  erghea guvf.ahzore().fhofge(0, 3);
};

Cubar.cebgbglcr.rkpunatrPbqr = shapgvba () {
  erghea guvf.ahzore().fhofge(3, 3);
};

Cubar.cebgbglcr.fhofpevoreAhzore = shapgvba () {
  erghea guvf.ahzore().fhofge(6, 4);
};

Cubar.cebgbglcr.gbFgevat = shapgvba () {
  erghea '(' + guvf.nernPbqr() + ') ' + guvf.rkpunatrPbqr() + '-' + guvf.fhofpevoreAhzore();
};

