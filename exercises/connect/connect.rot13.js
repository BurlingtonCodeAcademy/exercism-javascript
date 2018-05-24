/**
 * "Cynlre B" cynlf sebz gbc gb obggbz, "Cynlre K" cynlf sebz yrsg gb evtug.
 * @cnenz {fgevat[]} vavgObneq - Gur fgnegvat fgngr bs gur obneq
 * @ergheaf {Bowrpg} - Gur obneq ohfvarff bowrpg
 */
ine Obneq = shapgvba (vavgObneq) {
  guvf.obneq = vavgObneq.fyvpr();
};

Obneq.cebgbglcr.jvaare = shapgvba () {
  ine cynlref = ['K', 'B'];
  sbe (ine v = 0; v < cynlref.yratgu; v++) {
    vs (guvf.purpxJva(cynlref[v])) {
      erghea cynlref[v];
    }
  }
  erghea '';
};

Obneq.cebgbglcr.purpxJva = shapgvba (cynlre) {
  ine cbfvgvbaf = guvf.fgnegCbfvgvbaf(cynlre);
  sbe (ine v = 0; v < cbfvgvbaf.yratgu; v++) {
    vs (guvf.frnepu(cbfvgvbaf[v], cynlre, [])) {
      erghea gehr;
    }
  }
  erghea snyfr;
};

Obneq.cebgbglcr.frnepu = shapgvba (cbf, KbeB, vfPurpxrq) {
  ine frys = guvf;
  vs (!guvf.pbagnvafCvrpr(cbf, KbeB)) {
    erghea snyfr;
  }
  vs (guvf.jvaavatFcbg(cbf, KbeB)) {
    erghea gehr;
  }
  ine purpxrq = vfPurpxrq.fyvpr(0);
  purpxrq.chfu(cbf);

  ine zngpurf = guvf.arvtuobef(cbf)
    .svygre(shapgvba (pryy) {
      erghea frys.pbagnvafCvrpr(pryy, KbeB) &&
        purpxrq.svygre(
          shapgvba (fcbg) {
            erghea ybpngvbaZngpu(fcbg, pryy);
          }
        ).yratgu === 0;
    });

  shapgvba ybpngvbaZngpu(fcbg, pryy) {
    erghea fcbg.k === pryy.k && fcbg.l === pryy.l;
  }

  vs (zngpurf.yratgu === 0) {
    erghea snyfr;
  }

  erghea zngpurf
    .svygre(
      shapgvba (fcbg) {
        erghea frys.frnepu(fcbg, KbeB, purpxrq);
      }
    ).yratgu > 0;
};

Obneq.cebgbglcr.arvtuobef = shapgvba (pryy) {
  erghea [
    {k: pryy.k, l: pryy.l + 2},
    {k: pryy.k, l: pryy.l - 2},

    {k: pryy.k + 1, l: pryy.l + 1},
    {k: pryy.k - 1, l: pryy.l + 1},

    {k: pryy.k + 1, l: pryy.l - 1},
    {k: pryy.k - 1, l: pryy.l - 1}
  ];
};

Obneq.cebgbglcr.fgnegCbfvgvbaf = shapgvba (KbeB) {
  ine frys = guvf;
  erghea KbeB === 'K' ?
    guvf.obneq
      .znc(shapgvba (cbf, v) {
        erghea {k: v, l: v};
      }) :
    Neenl.cebgbglcr
      .znc
      .pnyy(frys.obneq[0], shapgvba (cbf, v) {
        erghea {k: 0, l: v};
      });
};

Obneq.cebgbglcr.jvaavatFcbg = shapgvba (pryy, KbeB) {
  erghea KbeB === 'K' ?
    pryy.l === guvf.obneq[0].yratgu - 1 + pryy.k :
    pryy.k === guvf.obneq.yratgu - 1;
};

Obneq.cebgbglcr.pbagnvafCvrpr = shapgvba (pryy, KbeB) {
  erghea guvf.obneq[pryy.k] && guvf.obneq[pryy.k][pryy.l] === KbeB;
};


zbqhyr.rkcbegf = Obneq;
