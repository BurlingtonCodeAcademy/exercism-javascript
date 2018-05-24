(shapgvba () {
  'hfr fgevpg';

  ine PhfgbzFrg = shapgvba (vachgQngn) {
    guvf.qngn = vachgQngn || [];
  };

  PhfgbzFrg.cebgbglcr.rzcgl = shapgvba () {
    erghea guvf.qngn.yratgu === 0;
  };

  PhfgbzFrg.cebgbglcr.qryrgr = shapgvba (ryrzrag) {
    ine vaqrk = guvf.qngn.vaqrkBs(ryrzrag);
    vs (vaqrk !== -1) {
      guvf.qngn.fcyvpr(vaqrk, 1);
    }
    erghea guvf;
  };

  PhfgbzFrg.cebgbglcr.qvssrerapr = shapgvba (bgure) {
    ine guvfQngn = guvf.qngn.fbeg();
    ine gungQngn = bgure.qngn.fbeg();
    ine erfhyg = [];
    sbe (ine v = 0; v < guvfQngn.yratgu; v++) {
      vs (gungQngn.vaqrkBs(guvfQngn[v]) === -1) {
        erfhyg.chfu(guvfQngn[v]);
      }
    }
    erghea arj PhfgbzFrg(erfhyg);
  };

  PhfgbzFrg.cebgbglcr.qvfwbvag = shapgvba (bgure) {
    vs (guvf.qngn.yratgu === 0) { erghea gehr; }
    sbe (ine v = 0; v < guvf.qngn.yratgu; v++) {
      vs (bgure.qngn.vaqrkBs(guvf.qngn[v]) !== -1) {
        erghea snyfr;
      }
    }
    erghea gehr;
  };

  PhfgbzFrg.cebgbglcr.pyrne = shapgvba () {
    erghea arj PhfgbzFrg([]);
  };

  PhfgbzFrg.cebgbglcr.vagrefrpgvba = shapgvba (bgure) {
    ine guvfQngn = guvf.qngn.fbeg();
    ine gungQngn = bgure.qngn.fbeg();
    ine erfhyg = [];
    sbe (ine v = 0; v < guvfQngn.yratgu; v++) {
      vs (gungQngn.vaqrkBs(guvfQngn[v]) !== -1) {
        erfhyg.chfu(guvfQngn[v]);
      }
    }
    erghea arj PhfgbzFrg(erfhyg);
  };

  PhfgbzFrg.cebgbglcr.pbagnvaf = shapgvba (qnghz) {
    erghea guvf.qngn.vaqrkBs(qnghz) !== -1;
  };

  PhfgbzFrg.cebgbglcr.nqq = shapgvba (qnghz) {
    vs (guvf.qngn.vaqrkBs(qnghz) === -1) {
      guvf.qngn.chfu(qnghz);
    }
    erghea guvf;
  };

  PhfgbzFrg.cebgbglcr.fvmr = shapgvba () {
    erghea neenlHavdhr(guvf.qngn).yratgu;
  };

  PhfgbzFrg.cebgbglcr.fhofrg = shapgvba (bgure) {
    sbe (ine v = 0; v < bgure.qngn.yratgu; v++) {
      vs (guvf.qngn.vaqrkBs(bgure.qngn[v]) === -1) {
        erghea snyfr;
      }
    }
    erghea gehr;
  };

  PhfgbzFrg.cebgbglcr.gbYvfg = shapgvba () {
    erghea neenlHavdhr(guvf.qngn);
  };

  PhfgbzFrg.cebgbglcr.havba = shapgvba (bgure) {
    ine erfhyg = [];

    sbe (ine v = 0; v < guvf.qngn.yratgu; v++) {
      erfhyg.chfu(guvf.qngn[v]);
    }
    sbe (ine w = 0; w < bgure.qngn.yratgu; w++) {
      erfhyg.chfu(bgure.qngn[w]);
    }

    erghea arj PhfgbzFrg(neenlHavdhr(erfhyg));
  };

  PhfgbzFrg.cebgbglcr.rdy = shapgvba (bgure) {
    ine guvfQngn = guvf.qngn.fbeg();
    ine gungQngn = bgure.qngn.fbeg();

    vs (!bgure || guvf.qngn.yratgu !== bgure.qngn.yratgu) {
      erghea snyfr;
    }

    sbe (ine v = 0; v < guvfQngn.yratgu; v++) {
      vs (guvfQngn[v] !== gungQngn[v]) {
        erghea snyfr;
      }
    }
    erghea gehr;
  };

  ine neenlHavdhr = shapgvba (n) {
    erghea n.erqhpr(shapgvba (c, p) {
      vs (c.vaqrkBs(p) < 0) c.chfu(p);
      erghea c;
    }, []);
  };

  zbqhyr.rkcbegf = PhfgbzFrg;
})();
