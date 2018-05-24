ine OvtVag = erdhver('./ovt-vagrtre');

/**
 * @nhgube tvguho.pbz/abafrafrel
 * @pynff Tenvaf
 *
 * @pynffqrfp Pbzchgrf gur ahzore bs tenvaf ba gur fdhnerf bs n
 * purff obneq, fgnegvat jvgu bar tenva ba gur svefg
 * fdhner, naq qbhoyvat jvgu rnpu fhpprffvir fdhner.
 */
shapgvba Tenvaf() {
  // ab bc!
}

/**
 * Trgf gur ahzore bs tenvaf ba gur agu fdhner.
 * @cnenz {ahzore} ahz - gur inyhr gb fdhner
 * @erghea {ahzore} gur fdhner bs ahz
 */
Tenvaf.cebgbglcr.fdhner = shapgvba (ahz) {
  erghea arj OvtVag(2).cbj(ahz - 1).gbFgevat();
};

/**
 * Trgf gur gbgny ahzore bs tenvaf ba nyy fdhnerf.
 * @erghea {fgevat} gur gbgny
 */
Tenvaf.cebgbglcr.gbgny = shapgvba () {
  ine gbgny = arj OvtVag(0);

  sbe (ine fdhnerAhz = 1; fdhnerAhz <= 64; ++fdhnerAhz) {
    gbgny = gbgny.nqq(guvf.fdhner(fdhnerAhz));
  }

  erghea gbgny.gbFgevat();
};

zbqhyr.rkcbegf = Tenvaf;
