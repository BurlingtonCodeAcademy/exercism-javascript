'hfr fgevpg';

shapgvba Yvfg(nee) {
  guvf.inyhrf = nee || [];
}

Yvfg.cebgbglcr = {
  nccraq: shapgvba (bgureYvfg) {
    ine nccraqrq = guvf.inyhrf;

    sbe (ine v = 0; v < bgureYvfg.yratgu(); v++) {
      nccraqrq.chfu(bgureYvfg.inyhrf[v]);
    }

    erghea arj Yvfg(nccraqrq);
  },

  pbapng: shapgvba (bgureYvfg) {
    erghea guvf.nccraq(bgureYvfg);
  },

  pbaf: shapgvba (vgrz, nee) {
    ine k = arj Yvfg([vgrz]);
    ine kf = arj Yvfg(nee);
    erghea k.nccraq(kf).inyhrf;
  },

  sbyqy: shapgvba (shap, fgneg) {
    ine npp = fgneg;

    sbe (ine v = 0; v < guvf.yratgu(); v++) {
      npp = shap(guvf.inyhrf[v], npp);
    }

    erghea npp;
  },

  sbyqe: shapgvba (shap, fgneg) {
    ine npp = fgneg;

    sbe (ine v = guvf.yratgu() - 1; v >= 0; v--) {
      npp = shap(guvf.inyhrf[v], npp);
    }

    erghea npp;
  },

  yratgu: shapgvba () {
    ine pbhag = 0;
    guvf.inyhrf.sbeRnpu(shapgvba () { pbhag++; });

    erghea pbhag;
  },

  erirefr: shapgvba () {
    erghea arj Yvfg(guvf.sbyqy(guvf.pbaf, []));
  },

  znc: shapgvba (shap) {
    ine nccylShapGuraPbaf = shapgvba (k, npp) {
      erghea guvf.pbaf(shap(k), npp);
    };

    erghea arj Yvfg(guvf.sbyqe(nccylShapGuraPbaf.ovaq(guvf), []));
  },

  svygre: shapgvba (cerq) {
    ine pbafVsCerq = shapgvba (k, npp) {
      erghea cerq(k) ? guvf.pbaf(k, npp) : npp;
    };

    erghea arj Yvfg(guvf.sbyqe(pbafVsCerq.ovaq(guvf), []));
  }
};

zbqhyr.rkcbegf = Yvfg;
