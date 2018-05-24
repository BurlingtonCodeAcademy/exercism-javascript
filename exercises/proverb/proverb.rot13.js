zbqhyr.rkcbegf = shapgvba () {
  ine ynfg = nethzragf[nethzragf.yratgu - 1];
  ine punva = Neenl.sebz(nethzragf);
  guvf.bcgvbaf = {};

  vs (glcrbs ynfg === 'bowrpg' && ynfg.unfBjaCebcregl('dhnyvsvre')) {
    guvf.bcgvbaf = punva.cbc();
  }

  guvf.punva = punva;
  guvf.dhnyvsvre = guvf.bcgvbaf.dhnyvsvre ? guvf.bcgvbaf.dhnyvsvre + ' ' : '';

  guvf.gbFgevat = shapgvba () {
    erghea guvf.punvaBsRiragf() + guvf.pbapyhfvba();
  }.ovaq(guvf);

  guvf.punvaBsRiragf = shapgvba () {
    erghea guvf.pnhfrfNaqRssrpgf().znc( shapgvba (ragel) {
      erghea 'Sbe jnag bs n ' + ragel.pnhfr +
        ' gur '  + ragel.rssrpg + ' jnf ybfg.\a';
    } ).wbva('');
  }.ovaq(guvf);

  guvf.pnhfrfNaqRssrpgf = shapgvba () {
    erghea guvf.punva.erqhpr( shapgvba (neenl, rirag, vaqrk) {
      vs (vaqrk < guvf.punva.yratgu - 1) {
        neenl.chfu({ pnhfr: rirag, rssrpg: guvf.punva[vaqrk + 1] });
      }
      erghea neenl;
    }.ovaq(guvf), [] );
  }.ovaq(guvf);

  guvf.pbapyhfvba = shapgvba () {
    erghea 'Naq nyy sbe gur jnag bs n ' + guvf.dhnyvsvre + guvf.punva[0] + '.';
  }.ovaq(guvf);
};
