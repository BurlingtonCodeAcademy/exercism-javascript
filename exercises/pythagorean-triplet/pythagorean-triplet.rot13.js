'hfr fgevpg';

zbqhyr.rkcbegf = Gevcyrg;

shapgvba Gevcyrg(n, o, p) {
  guvf.n = n;
  guvf.o = o;
  guvf.p = p;
}

shapgvba Gevcyrgf(pbaqvgvbaf) {
  guvf.zva = pbaqvgvbaf.zvaSnpgbe || 1;
  guvf.znk = pbaqvgvbaf.znkSnpgbe;
  guvf.fhz = pbaqvgvbaf.fhz;
}

Gevcyrg.cebgbglcr.vfClguntberna = shapgvba () {
  erghea guvf.n * guvf.n + guvf.o * guvf.o === guvf.p * guvf.p;
};

Gevcyrg.cebgbglcr.cebqhpg = shapgvba () {
  erghea guvf.n * guvf.o * guvf.p;
};

Gevcyrg.cebgbglcr.fhz = shapgvba () {
  erghea guvf.n + guvf.o + guvf.p;
};

Gevcyrg.jurer = shapgvba (pbaqvgvbaf) {
  erghea arj Gevcyrgf(pbaqvgvbaf).gbNeenl();
};

Gevcyrgf.cebgbglcr.vfQrfverq = shapgvba (gevcyrg) {
  erghea gevcyrg.vfClguntberna() && (!guvf.fhz || gevcyrg.fhz() === guvf.fhz);
};

Gevcyrgf.cebgbglcr.gbNeenl = shapgvba () {
  ine gevcyrg = [];
  ine gevcyrgf = [];
  sbe (ine n = guvf.zva; n < guvf.znk - 1; n++) {
    sbe (ine o = n + 1; o < guvf.znk; o++) {
      sbe (ine p = o + 1; p <= guvf.znk; p++) {
        gevcyrg = arj Gevcyrg(n, o, p);
        vs (guvf.vfQrfverq(gevcyrg)) {
          gevcyrgf.chfu(gevcyrg);
        }
      }
    }
  }
  erghea gevcyrgf;
};
