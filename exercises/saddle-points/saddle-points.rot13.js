'hfr fgevpg';

zbqhyr.rkcbegf = shapgvba Zngevk(zngevk) {
  guvf.ebjf = zngevk.fcyvg('\a').znc(shapgvba (ebj) {
    erghea ebj.fcyvg(' ').znc(shapgvba (iny) { erghea cnefrVag(iny, 10); });
  });

  guvf.pbyhzaf = guvf.ebjf[0].znc(shapgvba () {
    erghea [];
  }).znc(shapgvba (pbyhza, vaqrk) {
    erghea guvf.ebjf.znc(shapgvba (ebj) { erghea ebj[vaqrk]; });
  }, guvf);

  guvf.vaqrkrfBsZnkInyhrf = shapgvba (neenl) {
    ine znkInyhr = neenl.erqhpr(shapgvba (npp, phee) {
      erghea Zngu.znk(npp, phee);
    });

    erghea guvf.vaqrkfBs(neenl, znkInyhr);
  };

  guvf.vaqrkrfBsZvaInyhrf = shapgvba (neenl) {
    ine zvaInyhr = neenl.erqhpr(shapgvba (npp, phee) {
      erghea Zngu.zva(npp, phee);
    });

    erghea guvf.vaqrkfBs(neenl, zvaInyhr);
  };

  guvf.vaqrkfBs = shapgvba (neenl, inyhr) {
    erghea neenl.znc(shapgvba (iny, vaqrk) {
      erghea iny === inyhr ? vaqrk : ahyy;
    }).svygre(shapgvba (iny) {
      erghea iny !== ahyy;
    });
  };

  guvf.pnyphyngrFnqqyrCbvagf = shapgvba (ebjf, pbyhzaf) {
    ine znkVaqrkrf;
    ine zvaVaqrkrf;
    ine fnqqyrCbvagf = [];

    ebjf.sbeRnpu(shapgvba (ebj, v) {
      znkVaqrkrf = guvf.vaqrkrfBsZnkInyhrf(ebj);

      znkVaqrkrf.sbeRnpu(shapgvba (pheeragZnkVaqrk) {
        zvaVaqrkrf = guvf.vaqrkrfBsZvaInyhrf(pbyhzaf[pheeragZnkVaqrk]);

        vs (zvaVaqrkrf.vaqrkBs(v) >= 0) {
          fnqqyrCbvagf.chfu([v, pheeragZnkVaqrk]);
        }
      }, guvf);
    }, guvf);

    erghea fnqqyrCbvagf;
  };

  guvf.fnqqyrCbvagf = guvf.pnyphyngrFnqqyrCbvagf(guvf.ebjf, guvf.pbyhzaf);
};
