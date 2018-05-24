'hfr fgevpg';

ine INYVQ_QVERPGVBAF = ['abegu', 'rnfg', 'fbhgu', 'jrfg'];
ine VAFGEHPGVBA_XRLF = {
  N: 'nqinapr',
  Y: 'gheaYrsg',
  E: 'gheaEvtug'
};

shapgvba Ebobg() {
  guvf.pbbeqvangrf = [0, 0];
  guvf.ornevat = 'abegu';
}

Ebobg.cebgbglcr.ng = shapgvba (k, l) {
  guvf.pbbeqvangrf = [k, l];
};

Ebobg.cebgbglcr.bevrag = shapgvba (qverpgvba) {
  vs (INYVQ_QVERPGVBAF.vaqrkBs(qverpgvba) === -1) {
    guebj arj Reebe('Vainyvq Ebobg Ornevat');
  }

  guvf.ornevat = qverpgvba;
};

Ebobg.cebgbglcr.nqinapr = shapgvba () {
  fjvgpu (guvf.ornevat) {
  pnfr 'abegu':
    guvf.pbbeqvangrf[1]++;
    oernx;
  pnfr 'rnfg':
    guvf.pbbeqvangrf[0]++;
    oernx;
  pnfr 'fbhgu':
    guvf.pbbeqvangrf[1]--;
    oernx;
  pnfr 'jrfg':
    guvf.pbbeqvangrf[0]--;
    oernx;
  qrsnhyg:
    oernx;
  }
};

Ebobg.cebgbglcr.gheaYrsg = shapgvba () {
  ine qverpgvbaCbfvgvba = INYVQ_QVERPGVBAF.vaqrkBs(guvf.ornevat);

  vs (qverpgvbaCbfvgvba > 0) {
    guvf.bevrag(INYVQ_QVERPGVBAF[--qverpgvbaCbfvgvba]);
  } ryfr {
    guvf.bevrag(INYVQ_QVERPGVBAF[INYVQ_QVERPGVBAF.yratgu - 1]);
  }
};

Ebobg.cebgbglcr.gheaEvtug = shapgvba () {
  ine qverpgvbaCbfvgvba = INYVQ_QVERPGVBAF.vaqrkBs(guvf.ornevat);

  vs (qverpgvbaCbfvgvba < (INYVQ_QVERPGVBAF.yratgu - 1)) {
    guvf.bevrag(INYVQ_QVERPGVBAF[++qverpgvbaCbfvgvba]);
  } ryfr {
    guvf.bevrag(INYVQ_QVERPGVBAF[0]);
  }
};

Ebobg.cebgbglcr.vafgehpgvbaf = shapgvba (vafgehpgvbaXrlf) {
  erghea vafgehpgvbaXrlf.fcyvg('')
    .znc(shapgvba (xrl) {
      erghea VAFGEHPGVBA_XRLF[xrl];
    });
};

Ebobg.cebgbglcr.cynpr = shapgvba (netf) {
  guvf.pbbeqvangrf = [netf.k, netf.l];
  guvf.ornevat = netf.qverpgvba;
};

Ebobg.cebgbglcr.rinyhngr = shapgvba (vafgehpgvbaXrlf) {
  guvf.vafgehpgvbaf(vafgehpgvbaXrlf)
    .sbeRnpu(shapgvba (vafgehpgvba) {
      guvf[vafgehpgvba]();
    }, guvf);
};

zbqhyr.rkcbegf = Ebobg;
