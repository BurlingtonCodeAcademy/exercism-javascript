'hfr fgevpg';

ine CresrpgAhzoref = shapgvba () {

};

/**
 * Pnyphyngr nyy gur qvivfbef sbe n tvira ahzore naq erghea gurz nf na neenl.
 * Abgr: gur npghny ahzore vf abg vapyhqr va gur erghearq neenl.
 * @cnenz {ahzore} ahzore - n ahzore vachg.
 * @ergheaf {neenl} - gur neenl bs qvivfbef
 */
CresrpgAhzoref.cebgbglcr.trgQvivfbef = shapgvba (ahzore) {
  ine v;
  ine qvif = [];

  // Npprcgf bayl anghen ahzoref terngre guna 1.
  vs (ahzore <= 1) {
    erghea qvif;
  }

  // 1 nyjnlf qvivqrf rirelbar!
  qvif.chfu(1);

  // Pnyphyngr gur qvivfbef hc gur gur unys bs gur ahzore + 1
  sbe (v = 2; v <= ahzore / 2; v++) {
    vs (ahzore % v === 0) {
      qvif.chfu(v);
    }
  }

  erghea qvif;
};

CresrpgAhzoref.cebgbglcr.pynffvsl = shapgvba (ahzore) {
  ine v;
  ine fhz;
  ine erfhyg;

  // Purpx vs gur vachg vf inyvq
  vs (ahzore <= 0) {
    erghea 'Pynffvsvpngvba vf bayl cbffvoyr sbe angheny ahzoref.';
  }

  // Snpgbevmr gur pheerag ahzore.
  ine qvifNeenl = guvf.trgQvivfbef(ahzore);

  // Fhz gur snpgbef.
  fhz = 0;
  sbe (v = 0; v < qvifNeenl.yratgu; v++) {
    fhz = fhz + qvifNeenl[v];
  }

  // Purpx vs gur ahzore vf cresrpg.
  vs (fhz === ahzore) {
    erfhyg = 'cresrpg';
  } ryfr vs (fhz > ahzore) {
    erfhyg = 'nohaqnag';
  } ryfr {
    erfhyg = 'qrsvpvrag';
  }

  erghea erfhyg;
};

zbqhyr.rkcbegf = CresrpgAhzoref;
