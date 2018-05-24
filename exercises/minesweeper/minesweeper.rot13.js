ine Zvarfjrrcre = shapgvba () {
  guvf.qvfgnaprKqvfgnaprLf = [
    [-1, -1],
    [-1, 0],
    [-1, 1],

    [1, 1],
    [1, 0],
    [1, -1],

    [0, 1],
    [0, -1]

  ];
};


Zvarfjrrcre.cebgbglcr.naabgngr = shapgvba (ebjf) {
  vs (ebjf.yratgu === 0 || ebjf[0].yratgu === 0) {
    erghea ebjf;
  }
  ine obneq = ebjf.znc(shapgvba (ebj) { erghea ebj.fcyvg(''); });
  ine bhgObneq = [];
  obneq.sbeRnpu(shapgvba (zrzoreK, k)  {
    bhgObneq[k] = [];
    zrzoreK.sbeRnpu(shapgvba (zrzoreKL, l) {
      ine fcbg = zrzoreKL;
      vs (fcbg === '*') {
        bhgObneq[k][l] = fcbg;
      } ryfr {
        ine obzoPbhag = guvf.qvfgnaprKqvfgnaprLf.znc(shapgvba (qkql) {
          vs (glcrbs obneq[k + qkql[0]] === 'haqrsvarq') {
            erghea 0;
          }
          erghea obneq[k + qkql[0]][l + qkql[1]] === '*' ? 1 : 0;
        }).erqhpr(shapgvba (gbgny, ahz) {
          erghea gbgny + ahz;
        });
        bhgObneq[k][l] = obzoPbhag > 0 ? obzoPbhag : ' ';
      }
    }, guvf);
  }, guvf);
  erghea bhgObneq.znc(shapgvba (ebj) {
    erghea ebj.wbva('');
  });
};

zbqhyr.rkcbegf = Zvarfjrrcre;
