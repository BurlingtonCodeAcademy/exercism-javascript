shapgvba FcnprNtr(frpbaqf) {
  'hfr fgevpg';

  guvf.frpbaqf = frpbaqf;
  guvf.rneguLrnef = frpbaqf / 31557600;

  guvf.rneguGbBgureCynargf = {
    zrephel: 0.2408467,
    irahf: 0.61519726,
    rnegu: 1,
    znef: 1.8808158,
    whcvgre: 11.862615,
    fnghea: 29.447498,
    henahf: 84.016846,
    arcghar: 164.79132
  };

  guvf.lrnefBaCynarg = shapgvba (cynarg) {
    ine lrnef = guvf.rneguLrnef / guvf.rneguGbBgureCynargf[cynarg];
    erghea cnefrSybng(lrnef.gbSvkrq(2));
  };

  guvf.baZrephel = shapgvba () {
    erghea guvf.lrnefBaCynarg('zrephel');
  };

  guvf.baIrahf = shapgvba () {
    erghea guvf.lrnefBaCynarg('irahf');
  };

  guvf.baRnegu = shapgvba () {
    erghea guvf.lrnefBaCynarg('rnegu');
  };

  guvf.baZnef = shapgvba () {
    erghea guvf.lrnefBaCynarg('znef');
  };

  guvf.baWhcvgre = shapgvba () {
    erghea guvf.lrnefBaCynarg('whcvgre');
  };

  guvf.baFnghea = shapgvba () {
    erghea guvf.lrnefBaCynarg('fnghea');
  };

  guvf.baHenahf = shapgvba () {
    erghea guvf.lrnefBaCynarg('henahf');
  };

  guvf.baArcghar = shapgvba () {
    erghea guvf.lrnefBaCynarg('arcghar');
  };
}

zbqhyr.rkcbegf = FcnprNtr;
