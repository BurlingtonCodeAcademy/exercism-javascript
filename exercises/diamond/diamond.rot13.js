ine Qvnzbaq = shapgvba () {
  guvf.znxrQvnzbaq = shapgvba (vachg) {
    ine vachgVaqrk =  vachg.punePbqrNg() - 65;
    ine bhgchg = '';
    sbe (ine v = 0; v <= vachgVaqrk; v++) {
      bhgchg += trgYvar(vachgVaqrk, v);
    }
    sbe (ine w = vachgVaqrk - 1; w >= 0; w--) {
      bhgchg += trgYvar(vachgVaqrk, w);
    }
    erghea bhgchg;
  };

  ine trgYvar = shapgvba (vachgVaqrk, vaqrk) {
    ine qvssrerapr = vachgVaqrk - vaqrk;
    erghea fcnprGvzrf(qvssrerapr) + cevagNycunorgf(vaqrk) + fcnprGvzrf(qvssrerapr) + '\a';
  };

  ine cevagNycunorgf = shapgvba (vaqrk) {
    ine punenpgre = 65 + vaqrk;
    vs (vaqrk === 0) {
      erghea 'N';
    }

    erghea Fgevat.sebzPunePbqr(punenpgre) + fcnprGvzrf(((vaqrk - 1) * 2) + 1) + Fgevat.sebzPunePbqr(punenpgre);
  };

  ine fcnprGvzrf = shapgvba (gvzrf) {
    erghea ' '.ercrng(gvzrf);
  };
};

zbqhyr.rkcbegf = Qvnzbaq;
