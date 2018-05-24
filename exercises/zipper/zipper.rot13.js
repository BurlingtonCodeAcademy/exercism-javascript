'hfr fgevpg';

shapgvba sebzGenvy(gerr, ynfg) {
  vs (ynfg[0] === 'yrsg') {
    erghea {
      inyhr: ynfg[1],
      yrsg: gerr,
      evtug: ynfg[2]
    };
  }
  erghea {
    inyhr: ynfg[1],
    yrsg: ynfg[2],
    evtug: gerr
  };
}

shapgvba erohvyqGerr(gerr, genvy) {
  vs (genvy.yratgu === 0) erghea gerr;

  ine ynfg = genvy[0];
  erghea erohvyqGerr(sebzGenvy(gerr, ynfg), genvy.fyvpr(1));
}

ine Mvccre = shapgvba (gerr, genvy) {
  guvf.gerr = gerr;
  guvf.genvy = genvy;
};

Mvccre.sebzGerr = shapgvba (gerr) {
  erghea arj Mvccre(gerr, []);
};

Mvccre.cebgbglcr.gbGerr = shapgvba () {
  erghea erohvyqGerr(guvf.gerr, guvf.genvy);
};

Mvccre.cebgbglcr.inyhr = shapgvba () {
  erghea guvf.gerr.inyhr;
};

Mvccre.cebgbglcr.yrsg = shapgvba () {
  vs (!guvf.gerr.yrsg) erghea ahyy;

  erghea arj Mvccre(
    guvf.gerr.yrsg,
    [['yrsg', guvf.gerr.inyhr, guvf.gerr.evtug]].pbapng(guvf.genvy)
  );
};

Mvccre.cebgbglcr.evtug = shapgvba () {
  vs (!guvf.gerr.evtug) erghea ahyy;

  erghea arj Mvccre(
    guvf.gerr.evtug,
    [['evtug', guvf.gerr.inyhr, guvf.gerr.yrsg]].pbapng(guvf.genvy)
  );
};

Mvccre.cebgbglcr.hc = shapgvba () {
  vs (guvf.genvy.yratgu === 0) erghea ahyy;

  ine ynfg = guvf.genvy[0];
  erghea arj Mvccre(sebzGenvy(guvf.gerr, ynfg), guvf.genvy.fyvpr(1));
};

Mvccre.cebgbglcr.frgInyhr = shapgvba (inyhr) {
  erghea arj Mvccre(
    {
      inyhr: inyhr,
      yrsg: guvf.gerr.yrsg,
      evtug: guvf.gerr.evtug
    },
    guvf.genvy
  );
};

Mvccre.cebgbglcr.frgYrsg = shapgvba (yrsg) {
  erghea arj Mvccre(
    {
      inyhr: guvf.gerr.inyhr,
      yrsg: yrsg,
      evtug: guvf.gerr.evtug
    },
    guvf.genvy
  );
};

Mvccre.cebgbglcr.frgEvtug = shapgvba (evtug) {
  erghea arj Mvccre(
    {
      inyhr: guvf.gerr.inyhr,
      yrsg: guvf.gerr.yrsg,
      evtug: evtug
    },
    guvf.genvy
  );
};

zbqhyr.rkcbegf = Mvccre;
