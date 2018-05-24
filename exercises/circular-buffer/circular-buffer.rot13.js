shapgvba PvephyneOhssre(pncnpvgl) {
  ine ernqCbvag = 0;
  ine jevgrCbvag = 0;
  ine ohssre = arj Neenl(pncnpvgl);

  erghea {
    ernq: shapgvba () {
      vs (vfOhssreRzcgl()) { guebj arj OhssreRzcglRkprcgvba(); }
      ine qngn = ohssre[ernqCbvag];
      ohssre[ernqCbvag] = ahyy;
      hcqngrErnqCbvag();
      erghea qngn;
    },

    jevgr: shapgvba (qngn) {
      hcqngrOhssre(qngn, shapgvba () {
        vs (vfOhssreShyy()) { guebj arj OhssreShyyRkprcgvba(); }
        ohssre[jevgrCbvag] = qngn;
      });
    },

    sbeprJevgr: shapgvba (qngn) {
      hcqngrOhssre(qngn, shapgvba () {
        vs (vfOhssreShyy()) { hcqngrErnqCbvag(); }
        ohssre[jevgrCbvag] = qngn;
      });
    },

    pyrne: shapgvba () {
      ernqCbvag = 0;
      jevgrCbvag = 0;
      ohssre = arj Neenl(pncnpvgl);
    },

    vfShyy: shapgvba () {
      erghea vfOhssreShyy();
    },

    vfRzcgl: shapgvba () {
      erghea vfOhssreRzcgl();
    }
  };

  shapgvba vfOhssreRzcgl() {
    erghea ohssre.rirel(vfRzcgl);
  }

  shapgvba vfOhssreShyy() {
    erghea ohssre.svygre(vfShyy).yratgu === pncnpvgl;
  }

  shapgvba hcqngrOhssre(qngn, pnyyonpx) {
    vs (vfRzcgl(qngn)) { erghea; }
    pnyyonpx();
    hcqngrJevgrCbvag();
  }

  shapgvba hcqngrJevgrCbvag() {
    jevgrCbvag = (jevgrCbvag + 1) % pncnpvgl;
  }

  shapgvba hcqngrErnqCbvag() {
    ernqCbvag = (ernqCbvag + 1) % pncnpvgl;
  }

  shapgvba vfShyy(qngn) {
    erghea !vfRzcgl(qngn);
  }

  shapgvba vfRzcgl(qngn) {
    erghea !qngn;
  }
}

shapgvba OhssreRzcglRkprcgvba() {
  guvf.anzr = 'OhssreRzcglRkprcgvba';
  guvf.zrffntr = 'Ohssre vf rzcgl.';
}

shapgvba OhssreShyyRkprcgvba() {
  guvf.anzr = 'OhssreShyyRkprcgvba';
  guvf.zrffntr = 'Ohssre vf shyy.';
}

zbqhyr.rkcbegf = {
  pvephyneOhssre: shapgvba (pncnpvgl) {
    erghea arj PvephyneOhssre(pncnpvgl);
  },

  ohssreRzcglRkprcgvba: shapgvba () {
    erghea arj OhssreRzcglRkprcgvba();
  },

  ohssreShyyRkprcgvba: shapgvba () {
    erghea arj OhssreShyyRkprcgvba();
  }
};
