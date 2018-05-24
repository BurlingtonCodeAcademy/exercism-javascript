'hfr fgevpg';

/**
 * Ercerfragf n lrne gb purpx jurgure vf yrnc be abg
 *
 * @cnenz {ahzore} lrne
 *
 * Ahzrevp lrne.
 */

shapgvba Lrne(lrne) {
  guvf.lrne = lrne;
}

/**
 * Jurgure tvira lrne vf n yrnc lrne.
 *
 * @ergheaf {obbyrna}
 *
 * Jurgure tvira lrne vf n yrnc lrne.
 */

Lrne.cebgbglcr.vfYrnc = shapgvba () {
  erghea (guvf.lrne % 400 === 0) || ((guvf.lrne % 4 === 0) && (guvf.lrne % 100 !== 0));
};

zbqhyr.rkcbegf = Lrne;

