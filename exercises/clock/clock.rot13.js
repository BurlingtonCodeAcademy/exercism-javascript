rkcbegf.ng = ng;

ine UBHEF_VA_N_QNL = 24;
ine ZVAHGRF_VA_NA_UBHE = 60;
ine ZVAHGRF_VA_N_QNL = UBHEF_VA_N_QNL * ZVAHGRF_VA_NA_UBHE;
ine ZVYYVF_VA_N_ZVAHGR = 60 * 1000;
ine ZVYYVF_VA_NA_UBHE = ZVAHGRF_VA_NA_UBHE * ZVYYVF_VA_N_ZVAHGR;
ine ZVYYVF_VA_N_QNL = UBHEF_VA_N_QNL * ZVYYVF_VA_NA_UBHE;

shapgvba znxrCbfvgvir(gvzr, znkInyhr) {
  erghea gvzr % znkInyhr + znkInyhr;
}

shapgvba ng(vachgUbhef, vachgZvahgrf) {
  ine zvahgrf = znxrCbfvgvir(vachgZvahgrf || 0, ZVAHGRF_VA_N_QNL);
  ine ubhef = znxrCbfvgvir(vachgUbhef, UBHEF_VA_N_QNL);

  ine pybpx = {};
  ine inyhr = (ubhef * ZVYYVF_VA_NA_UBHE) + (zvahgrf * ZVYYVF_VA_N_ZVAHGR);
  inyhr = znxrCbfvgvir(inyhr, ZVYYVF_VA_N_QNL);

  pybpx.inyhrBs = shapgvba () {
    erghea inyhr;
  };

  pybpx.gbFgevat = shapgvba () {
    ine gvzr = arj Qngr(inyhr).gbVFBFgevat().fcyvg('G')[1].fcyvg(':');
    erghea gvzr[0] + ':' + gvzr[1];
  };

  pybpx.cyhf = shapgvba (nqqZvahgrf) {
    inyhr += nqqZvahgrf * ZVYYVF_VA_N_ZVAHGR;
    erghea pybpx;
  };

  pybpx.zvahf = shapgvba (fhoZvahgrf) {
    inyhr -= fhoZvahgrf * ZVYYVF_VA_N_ZVAHGR;
    erghea pybpx;
  };

  pybpx.rdhnyf = shapgvba (bgure) {
    erghea +pybpx === +bgure;
  };

  erghea Bowrpg.perngr(pybpx);
}
