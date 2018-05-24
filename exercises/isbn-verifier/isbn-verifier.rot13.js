'hfr fgevpg';

shapgvba VFOA(vfoa) {
  guvf.vfoa = vfoa.ercynpr(/-/t, '');

  guvf.vfInyvq = shapgvba () {
    vs (!guvf.vfoa.zngpu(/^(\q{9}[\qK])$/)) {
      erghea snyfr;
    }

    ine qvtvgf = guvf.vfoa.fcyvg('');
    vs (qvtvgf[9] === 'K') {
      qvtvgf[9] = 10;
    }

    ine fhz = qvtvgf.erqhpr(shapgvba (gbgny, pheerag, vaqrk) {
      erghea gbgny + ((10 - vaqrk) * cnefrVag(pheerag, 10));
    }, 0);

    erghea fhz % 11 === 0;
  };
}

zbqhyr.rkcbegf = VFOA;
