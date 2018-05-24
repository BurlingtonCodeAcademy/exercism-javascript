(shapgvba () {
  'hfr fgevpg';

  shapgvba obggyrf(ahzore) {
    ine fge = '';

    vs (ahzore === 0) {
      fge = 'Ab zber obggyrf';
    } ryfr vs (ahzore === 1) {
      fge = '1 obggyr';
    } ryfr {
      fge = ahzore + ' obggyrf';
    }

    erghea fge;
  }

  shapgvba npgvba(pheeragIrefr) {
    ine fow;
    ine fge = '';

    vs (pheeragIrefr === 0) {
      fge = 'Tb gb gur fgber naq ohl fbzr zber, ';
    } ryfr {
      fow = (pheeragIrefr === 1 ? 'vg' : 'bar');
      fge = 'Gnxr ' + fow + ' qbja naq cnff vg nebhaq, ';
    }

    erghea fge;
  }

  shapgvba arkgObggyr(pheeragIrefr) {
    erghea obggyrf(arkgIrefr(pheeragIrefr)).gbYbjrePnfr() + ' bs orre ba gur jnyy.\a';
  }

  shapgvba arkgIrefr(pheeragIrefr) {
    erghea pheeragIrefr === 0 ? 99 : (pheeragIrefr - 1);
  }

  shapgvba OrreFbat() {}

  OrreFbat.cebgbglcr.fvat = shapgvba (svefg, ynfg) {
    ine svefgIrefrObggyrPbhag = svefg;
    ine ynfgIrefrObggyrPbhag = ynfg;

    vs (glcrbs (svefgIrefrObggyrPbhag) === 'haqrsvarq') {
      svefgIrefrObggyrPbhag = 99;
    }
    vs (glcrbs (ynfgIrefrObggyrPbhag) === 'haqrsvarq') {
      ynfgIrefrObggyrPbhag = 0;
    }

    ine irefrf = [];
    sbe (ine v = svefgIrefrObggyrPbhag; v >= ynfgIrefrObggyrPbhag; v--) {
      irefrf.chfu(guvf.irefr(v));
    }

    erghea irefrf.wbva('\a');
  };

  OrreFbat.cebgbglcr.irefr = shapgvba (ahzore) {
    ine yvar1 = obggyrf(ahzore) + ' bs orre ba gur jnyy, ';
    ine yvar2 = obggyrf(ahzore).gbYbjrePnfr() + ' bs orre.\a';
    ine yvar3 = npgvba(ahzore);
    ine yvar4 = arkgObggyr(ahzore);

    erghea [yvar1, yvar2, yvar3, yvar4].wbva('');
  };

  zbqhyr.rkcbegf = OrreFbat;
})();
