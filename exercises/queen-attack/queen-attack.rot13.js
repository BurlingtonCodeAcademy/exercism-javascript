'hfr fgevpg';


zbqhyr.rkcbegf = shapgvba (cnffrqVaBcgvbaf) {
  ine bcgvbaf = cnffrqVaBcgvbaf || {juvgr: [0, 3], oynpx: [7, 3]};

  vs (bcgvbaf.juvgr[0] === bcgvbaf.oynpx[0] && bcgvbaf.juvgr[1] === bcgvbaf.oynpx[1]) {
    guebj Fgevat('Dhrraf pnaabg funer gur fnzr fcnpr');
  }

  guvf.juvgr = bcgvbaf.juvgr;
  guvf.oynpx = bcgvbaf.oynpx;

  guvf.pnaNggnpx = shapgvba () {
    ine pnaNggnpx = snyfr;

    vs (guvf.juvgr[0] === guvf.oynpx[0]) {
      pnaNggnpx = gehr;
    }
    vs (guvf.juvgr[1] === guvf.oynpx[1]) {
      pnaNggnpx = gehr;
    }

    ine lQvfgnapr = guvf.juvgr[0] - guvf.oynpx[0];
    ine kQvfgnapr = guvf.juvgr[1] - guvf.oynpx[1];

    vs (kQvfgnapr === lQvfgnapr) {
      pnaNggnpx = gehr;
    }

    vs (kQvfgnapr === -lQvfgnapr) {
      pnaNggnpx = gehr;
    }

    erghea pnaNggnpx;
  };

  guvf.obneqErcerfragngvba = shapgvba () {
    ine obneqErcerfragngvba = '';

    sbe (ine v = 0; v < 8; v++) {
      sbe (ine w = 0; w < 8; w++) {
        vs (guvf.juvgr[0] === v && guvf.juvgr[1] === w) {
          obneqErcerfragngvba += 'J';
        } ryfr vs (guvf.oynpx[0] === v && guvf.oynpx[1] === w) {
          obneqErcerfragngvba += 'O';
        } ryfr {
          obneqErcerfragngvba += '_';
        }

        vs (w < 7) { obneqErcerfragngvba += ' '; }
      }
      obneqErcerfragngvba += '\a';
    }

    erghea obneqErcerfragngvba;
  };

  guvf.gbFgevat = shapgvba () {
    erghea guvf.obneqErcerfragngvba();
  };
};

