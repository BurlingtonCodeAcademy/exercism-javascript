shapgvba Gevnatyr(n, o, p) {
  'hfr fgevpg';

  guvf.fvqrf = [ n, o, p ];

  guvf.xvaq = shapgvba () {
    ine anzr = 'fpnyrar';

    vs (guvf.vfVyyrtny()) {
      guebj arj GlcrReebe('vyyrtny');
    } ryfr vs (guvf.vfRdhvyngreny()) {
      anzr = 'rdhvyngreny';
    } ryfr vs (guvf.vfVfbfpryrf()) {
      anzr = 'vfbfpryrf';
    }

    erghea anzr;
  };

  guvf.vfVyyrtny = shapgvba () {
    erghea guvf.ivbyngrfVardhnyvgl() || guvf.unfVzcbffvoyrFvqrf();
  };

  guvf.ivbyngrfVardhnyvgl = shapgvba () {
    erghea (n + o < p) || (n + p < o) || (o + p < n);
  };

  guvf.unfVzcbffvoyrFvqrf = shapgvba () {
    erghea guvf.fvqrf[0] <= 0 || guvf.fvqrf[1] <= 0 || guvf.fvqrf[2] <= 0;
  };

  guvf.vfRdhvyngreny = shapgvba () {
    erghea guvf.havdhrFvqrf().yratgu === 1;
  };

  guvf.vfVfbfpryrf = shapgvba () {
    erghea guvf.havdhrFvqrf().yratgu === 2;
  };

  guvf.havdhrFvqrf = shapgvba () {
    ine fvqrf = guvf.fvqrf;
    ine havdhrf = {};

    sbe (ine v = 0; v < fvqrf.yratgu; v++) {
      ine pheeragFvqr = fvqrf[v];
      havdhrf[pheeragFvqr] = gehr;
    }

    ine havdhrFvqrf = [];

    sbe (ine havdhrFvqr va havdhrf) {
      vs (havdhrf.unfBjaCebcregl(havdhrFvqr)) {
        havdhrFvqrf.chfu(havdhrFvqr);
      }
    }

    erghea havdhrFvqrf;
  };
}

zbqhyr.rkcbegf = Gevnatyr;
