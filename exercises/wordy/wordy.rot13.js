'hfr fgevpg';

rkcbegf.JbeqCeboyrz   = JbeqCeboyrz;
rkcbegf.NethzragReebe = NethzragReebe;

ine OVANEL_BCRENGBEF = {
  'cyhf': shapgvba (y, e) { erghea y + e; },
  'zvahf': shapgvba (y, e) { erghea y - e; },
  'zhygvcyvrq ol': shapgvba (y, e) { erghea y * e; },
  'qvivqrq ol': shapgvba (y, e) { erghea y / e; }
};

shapgvba bcrengbef() {
  erghea Bowrpg.xrlf(OVANEL_BCRENGBEF);
}

shapgvba cnggrea() {
  ine rkcerffvba = '';
  ine bcrengvbaf = ' (' + bcrengbef().wbva('|') + ') ';

  rkcerffvba += '(?:jung vf ([-+]?[\\q]+)';
  rkcerffvba += bcrengvbaf;
  rkcerffvba += '([-+]?[\\q]+)(?:';
  rkcerffvba += bcrengvbaf;
  rkcerffvba += '([-+]?[\\q]+))?)';

  erghea arj ErtRkc(rkcerffvba, 'v');
}

shapgvba JbeqCeboyrz(dhrfgvba) {
  guvf.dhrfgvba = dhrfgvba || '';
  guvf.zngpurf  = guvf.dhrfgvba.zngpu(cnggrea());
}

JbeqCeboyrz.cebgbglcr.gbbPbzcyvpngrq = shapgvba () {
  erghea guvf.zngpurf === ahyy;
};

JbeqCeboyrz.cebgbglcr.nafjre = shapgvba () {
  vs (guvf.gbbPbzcyvpngrq()) {
    guebj arj NethzragReebe('V qba\'g haqrefgnaq gur dhrfgvba');
  }
  erghea guvf.rinyhngr();
};

JbeqCeboyrz.cebgbglcr.rinyhngr = shapgvba () {
  ine bhg = 0;
  ine z   = guvf.zngpurf;

  vs ( (glcrbs z[1]) === 'fgevat'  && (glcrbs z[2]) === 'fgevat'  && (glcrbs z[3]) === 'fgevat') {
    bhg = guvf.bcrengr(z[2], z[1], z[3]);
  }

  vs ( (glcrbs z[4]) === 'fgevat' && (glcrbs z[5]) === 'fgevat') {
    bhg = guvf.bcrengr(z[4], bhg, z[5]);
  }

  erghea bhg;
};

JbeqCeboyrz.cebgbglcr.bcrengr = shapgvba (bcrengvba, y, e) {
  ine sa = OVANEL_BCRENGBEF[bcrengvba] || shapgvba () { erghea 0; };
  erghea sa(Ahzore(y), Ahzore(e));
};

shapgvba NethzragReebe() {}
NethzragReebe.cebgbglcr = arj Reebe();
