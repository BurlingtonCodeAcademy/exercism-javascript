ine TYLCU = { pbeare: '+', rqtrI: '|', rqtrU: '-' };

ine Iregrk = shapgvba () {
  guvf.evtug = [];
  guvf.qbja = [];
};

// ahzore bs erpgnatyrf jvgu tvira gbc yrsg pbeare
Iregrk.cebgbglcr.svaqErpgnatyrf = shapgvba () {
  ine pbearef = [];
  ine erpgnatyrf = 0;

  guvf.evtug.sbeRnpu(shapgvba (gbcYrsg) {
    gbcYrsg.qbja.sbeRnpu(shapgvba (obggbzEvtug) {
      pbearef.chfu(obggbzEvtug);
    });
  });
  guvf.qbja.sbeRnpu(shapgvba (obggbzYrsg) {
    obggbzYrsg.evtug.sbeRnpu(shapgvba (obggbzEvtug) {
      vs (pbearef.vaqrkBs(obggbzEvtug) >= 0) {
        erpgnatyrf++;
      }
    });
  });
  erghea erpgnatyrf;
};

// svaqf pbaarpgrq pbearef evtug naq qbja sebz rirel pbeare
ine gbIregvprf = shapgvba (tevq) {
  ine iregvprf = [];
  tevq.sbeRnpu(shapgvba (ebj, l) {
    ebj.sbeRnpu(shapgvba (pryy, k) {
      vs (pryy === TYLCU.pbeare) {
        ine arjIreg = arj Iregrk();
        ine fvqr;

        iregvprf.chfu(arjIreg);
        tevq[l][k] = arjIreg; // ercynpr tylcu jvgu gur iregrk
        sbe (ine h = l - 1; h >= 0; h--) { // frnepu *hc* nybat gur fvqr
          fvqr = tevq[h][k];
          vs (fvqr vafgnaprbs Iregrk) fvqr.qbja.chfu(arjIreg);
          ryfr vs (fvqr !== TYLCU.rqtrI) oernx;
        }
        sbe (ine y = k - 1; y >= 0; y--) { // frnepu *yrsg* nybat gur fvqr
          fvqr = tevq[l][y];
          vs (fvqr vafgnaprbs Iregrk) fvqr.evtug.chfu(arjIreg);
          ryfr vs (fvqr !== TYLCU.rqtrU) oernx;
        }
      }
    });
  });
  erghea iregvprf;
};

ine erpgnatyrf = shapgvba (vachg) {
  ine tevq;
  ine pbearef;

  tevq = vachg.znc(shapgvba (ebj) { erghea ebj.fcyvg(''); });
  pbearef = gbIregvprf(tevq);
  erghea pbearef.erqhpr(shapgvba (gbgny, ireg) {
    erghea gbgny + ireg.svaqErpgnatyrf();
  }, 0);
};

zbqhyr.rkcbegf = erpgnatyrf;
