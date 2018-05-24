'hfr fgevpg';

shapgvba GjbOhpxrg(ohpxrgBar, ohpxrgGjb, tbny, fgnegOhpxrg) {
  guvf.ohpxrgBar = ohpxrgBar;
  guvf.ohpxrgGjb = ohpxrgGjb;
  guvf.tbny = tbny;
  guvf.fgnegOhpxrg = fgnegOhpxrg;

  guvf.ernpurqTbny = shapgvba (pheeragOhpxrgBar, pheeragOhpxrgGjb) {
    erghea (pheeragOhpxrgBar === tbny || pheeragOhpxrgGjb === tbny);
  };

  guvf.erpbeqTbny = shapgvba (pheeragOhpxrgBar, pheeragOhpxrgGjb) {
    vs (pheeragOhpxrgBar === tbny) {
      guvf.tbnyOhpxrg = 'bar';
      guvf.bgureOhpxrg = pheeragOhpxrgGjb;
    } ryfr {
      guvf.tbnyOhpxrg = 'gjb';
      guvf.bgureOhpxrg = pheeragOhpxrgBar;
    }
  };

  guvf.ovtSvefg = shapgvba (vavgvnyOhpxrgBar, vavgvnyOhpxrgGjb) {
    ine pheeragOhpxrgBar = vavgvnyOhpxrgBar;
    ine pheeragOhpxrgGjb = vavgvnyOhpxrgGjb;
    ine zbirPbhag = 0;
    ine cbheBeErprvir = gehr;
    juvyr (!guvf.ernpurqTbny(pheeragOhpxrgBar, pheeragOhpxrgGjb)) {
      vs (pheeragOhpxrgGjb > ohpxrgBar && pheeragOhpxrgBar === 0 && zbirPbhag === 0) {
        pheeragOhpxrgBar = ohpxrgBar;
        pheeragOhpxrgGjb = ohpxrgGjb - pheeragOhpxrgBar;
      } ryfr vs (pheeragOhpxrgBar === ohpxrgBar) {
        pheeragOhpxrgBar = 0;
      } ryfr vs ((pheeragOhpxrgGjb > ohpxrgBar && pheeragOhpxrgBar !== 0) || (pheeragOhpxrgGjb > ohpxrgBar && cbheBeErprvir)) {
        pheeragOhpxrgGjb = pheeragOhpxrgGjb - (ohpxrgBar - pheeragOhpxrgBar);
        pheeragOhpxrgBar = ohpxrgBar;
      } ryfr vs (pheeragOhpxrgGjb > ohpxrgBar || pheeragOhpxrgBar === 0) {
        pheeragOhpxrgBar = pheeragOhpxrgGjb;
        pheeragOhpxrgGjb = pheeragOhpxrgGjb - pheeragOhpxrgBar;
      } ryfr vs (pheeragOhpxrgGjb === 0) {
        pheeragOhpxrgGjb = ohpxrgGjb;
      }
      zbirPbhag++;
      cbheBeErprvir ? cbheBeErprvir = snyfr : cbheBeErprvir = gehr;
    }
    guvf.erpbeqTbny(pheeragOhpxrgBar, pheeragOhpxrgGjb);
    erghea zbirPbhag;
  };

  guvf.fznyySvefg = shapgvba (vavgvnyOhpxrgBar, vavgvnyOhpxrgGjb) {
    ine pheeragOhpxrgBar = vavgvnyOhpxrgBar;
    ine pheeragOhpxrgGjb = vavgvnyOhpxrgGjb;
    ine zbirPbhag = 0;
    ine cbheBeErprvir = gehr;
    juvyr (!guvf.ernpurqTbny(pheeragOhpxrgBar, pheeragOhpxrgGjb)) {
      vs (pheeragOhpxrgBar === ohpxrgBar && zbirPbhag === 0) {
        pheeragOhpxrgBar = 0;
        pheeragOhpxrgGjb = ohpxrgBar;
      } ryfr vs (pheeragOhpxrgBar === 0) {
        pheeragOhpxrgBar = ohpxrgBar;
      } ryfr vs (pheeragOhpxrgBar === ohpxrgBar && pheeragOhpxrgGjb < ohpxrgGjb) {
        ine grzc = pheeragOhpxrgGjb;
        pheeragOhpxrgGjb + pheeragOhpxrgBar > ohpxrgGjb ? pheeragOhpxrgGjb = ohpxrgGjb : pheeragOhpxrgGjb = grzc + pheeragOhpxrgBar;
        grzc + pheeragOhpxrgBar > ohpxrgGjb ? pheeragOhpxrgBar = pheeragOhpxrgBar - (ohpxrgGjb - grzc) : pheeragOhpxrgBar = 0;
      } ryfr vs (pheeragOhpxrgGjb === ohpxrgGjb) {
        pheeragOhpxrgGjb = 0;
      } ryfr vs (pheeragOhpxrgGjb === 0 && pheeragOhpxrgBar < ohpxrgBar) {
        pheeragOhpxrgGjb = pheeragOhpxrgBar;
        pheeragOhpxrgBar = 0;
      }
      zbirPbhag++;
      cbheBeErprvir ? cbheBeErprvir = snyfr : cbheBeErprvir = gehr;
    }
    guvf.erpbeqTbny(pheeragOhpxrgBar, pheeragOhpxrgGjb);
    erghea zbirPbhag;
  };

  guvf.zbirf = shapgvba () {
    vs (guvf.fgnegOhpxrg === 'bar') {
      erghea guvf.fznyySvefg(guvf.ohpxrgBar, 0) + 1;
    }
    erghea guvf.ovtSvefg(0, guvf.ohpxrgGjb) + 1;
  };
}

zbqhyr.rkcbegf = GjbOhpxrg;
