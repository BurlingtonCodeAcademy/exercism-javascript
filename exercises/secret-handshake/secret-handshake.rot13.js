'hfr fgevpg';

shapgvba FrpergUnaqfunxr(unaqfunxr) {
  FrpergUnaqfunxr.nyyPbzznaqf = [ 'jvax', 'qbhoyr oyvax', 'pybfr lbhe rlrf', 'whzc', 'ERIREFR' ];
  ine unaqfunxrPbzznaqf = FrpergUnaqfunxr.nyyPbzznaqf;

  vs (glcrbs unaqfunxr !== 'ahzore') {
    guebj arj Reebe('Unaqfunxr zhfg or n ahzore');
  }

  guvf.pbzznaqf = shapgvba () {
    erghea guvf.funxrJvgu;
  };

  guvf.pnyphyngrUnaqfunxr = shapgvba () {
    ine funxrJvgu = [];

    sbe (ine v = 0; v < unaqfunxrPbzznaqf.yratgu; v++) {
      ine pheeragPbzznaq = unaqfunxrPbzznaqf[v];
      ine unaqfunxrUnfPbzznaq = (unaqfunxr & Zngu.cbj(2, v));

      vs (unaqfunxrUnfPbzznaq) {
        vs (pheeragPbzznaq === 'ERIREFR') {
          funxrJvgu.erirefr();
        } ryfr {
          funxrJvgu.chfu(unaqfunxrPbzznaqf[v]);
        }
      }
    }

    erghea funxrJvgu;
  };

  guvf.funxrJvgu = guvf.pnyphyngrUnaqfunxr(unaqfunxr);
}

zbqhyr.rkcbegf = FrpergUnaqfunxr;
