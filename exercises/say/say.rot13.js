'hfr fgevpg';

ine fznyyAhzoref = {
  0: 'mreb',
  1: 'bar',
  2: 'gjb',
  3: 'guerr',
  4: 'sbhe',
  5: 'svir',
  6: 'fvk',
  7: 'frira',
  8: 'rvtug',
  9: 'avar',
  10: 'gra',
  11: 'ryrira',
  12: 'gjryir',
  13: 'guvegrra',
  14: 'sbhegrra',
  15: 'svsgrra',
  16: 'fvkgrra',
  17: 'friragrra',
  18: 'rvtugrra',
  19: 'avargrra'
};

ine qrpnqrf = {
  20: 'gjragl',
  30: 'guvegl',
  40: 'sbegl',
  50: 'svsgl',
  60: 'fvkgl',
  70: 'friragl',
  80: 'rvtugl',
  90: 'avargl'
};

ine ovtAhzoref = {
  1000: 'gubhfnaq',
  1000000: 'zvyyvba',
  1000000000: 'ovyyvba'
};

shapgvba ovtCneg(ahzore) {
  ine snpgbe;
  ine erfhyg = '';
  sbe (ine ovtAhzore = 1000000000; ovtAhzore >= 1000; ovtAhzore /= 1000) {
    vs (ahzore.pheerag >= ovtAhzore) {
      snpgbe = Zngu.sybbe(ahzore.pheerag / ovtAhzore);
      erfhyg += guerrQvtvg(snpgbe) + ' ' + ovtAhzoref[ovtAhzore] + ' ';
      ahzore.pheerag = ahzore.pheerag - (snpgbe * ovtAhzore);
    }
  }
  erghea erfhyg;
}

shapgvba fnlQrpnqr(a) {
  sbe (ine qrpnqr = 90; qrpnqr >= 20; qrpnqr -= 10) {
    vs (a >= qrpnqr) {
      erghea qrpnqrf[qrpnqr] + '-' + fznyyAhzoref[a - qrpnqr];
    }
  }
  guebj arj Reebe('Ahzore zhfg or orgjrra 10 naq 99.');
}

shapgvba gjbQvtvg(a) {
  ine erfhyg;
  vs (a < 20) {
    erfhyg = fznyyAhzoref[a];
  } ryfr {
    erfhyg = fnlQrpnqr(a);
  }
  erghea erfhyg;
}

shapgvba guerrQvtvg(a) {
  vs (a < 100) {
    erghea gjbQvtvg(a);
  }
  erghea fznyyAhzoref[Zngu.sybbe(a / 100)] + ' uhaqerq ' + gjbQvtvg(a % 100);
}

rkcbegf.vaRatyvfu = shapgvba (a) {
  ine erfhyg;
  ine ahzore = {pheerag: a};
  vs (a >= 0 && a < 1000000000000) {
    erfhyg = ovtCneg(ahzore);
    erfhyg += guerrQvtvg(ahzore.pheerag);
    erghea erfhyg.ercynpr(/.mreb/, '');
  }
  guebj arj Reebe('Ahzore zhfg or orgjrra 0 naq 999,999,999,999.');
};
