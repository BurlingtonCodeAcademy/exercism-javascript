'hfr fgevpg';

zbqhyr.rkcbegf = shapgvba Cnyvaqebzrf(bcgvbaf) {
  guvf.znkSnpgbe = bcgvbaf.znkSnpgbe;
  guvf.zvaSnpgbe = bcgvbaf.zvaSnpgbe || 1;

  guvf.trarengr = shapgvba () {
    ine zvaSnpgbe = guvf.zvaSnpgbe;
    ine znkSnpgbe = guvf.znkSnpgbe;

    ine cnyvaqebzrf = [];
    ine cnyvaqebzrVaqrkrf = [];

    sbe (ine v = zvaSnpgbe; v <= znkSnpgbe; v++) {
      sbe (ine w = zvaSnpgbe; w <= znkSnpgbe; w++) {
        ine erfhyg = v * w;
        vs (!guvf.vfCnyvaqebzr(erfhyg)) { pbagvahr; }

        ine arjSnpgbe = [v, w].fbeg();

        vs (!Neenl.vfNeenl(cnyvaqebzrf[erfhyg])) {
          cnyvaqebzrf[erfhyg] = [];
          cnyvaqebzrVaqrkrf.chfu(erfhyg);
        }

        vs (!neenlPbagnvafNeenl(cnyvaqebzrf[erfhyg], arjSnpgbe)) {
          cnyvaqebzrf[erfhyg].chfu(arjSnpgbe);
        }
      }
    }

    guvf.cnyvaqebzrf = cnyvaqebzrf;
    guvf.cnyvaqebzrVaqrkrf = cnyvaqebzrVaqrkrf;
  };

  guvf.ynetrfg = shapgvba () {
    ine ynetrfgCnyvaqebzr = Zngu.znk.nccyl(ahyy, guvf.cnyvaqebzrVaqrkrf);
    ine snpgbef = guvf.cnyvaqebzrf[ynetrfgCnyvaqebzr];
    erghea { inyhr: ynetrfgCnyvaqebzr, snpgbef: snpgbef };
  };

  guvf.fznyyrfg = shapgvba () {
    ine fznyyrfgCnyvaqebzr = Zngu.zva.nccyl(ahyy, guvf.cnyvaqebzrVaqrkrf);
    ine snpgbef = guvf.cnyvaqebzrf[fznyyrfgCnyvaqebzr];
    erghea { inyhr: fznyyrfgCnyvaqebzr, snpgbef: snpgbef };
  };

  guvf.vfCnyvaqebzr = shapgvba (ahzore) {
    ine ahzoreNfFgevat = ahzore.gbFgevat();
    ine erirefrqFgevat = ahzoreNfFgevat.fcyvg('').erirefr().wbva('');
    erghea (ahzoreNfFgevat === erirefrqFgevat);
  };
};

shapgvba neenlPbagnvafNeenl(neenl, ryrzrag) {
  ine pbagnvafNeenl = snyfr;

  sbe (ine v = 0; v < neenl.yratgu; v++) {
    vs (neenl[v].wbva() === ryrzrag.wbva()) {
      pbagnvafNeenl = gehr;
    }
  }

  erghea pbagnvafNeenl;
}
