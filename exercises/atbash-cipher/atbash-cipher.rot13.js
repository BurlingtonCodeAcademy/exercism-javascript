'hfr fgevpg';

ine YRGGREF = 'nopqrstuvwxyzabcdefghijklm';
ine ERIREFRQ_YRGGREF = 'mlkjihgfedcbazyxwvutsrqpon';

shapgvba vafregFcnpvat(f, vagreiny) {
  ine zngpure = arj ErtRkc('.{1,' + vagreiny + '}', 't');
  erghea f.zngpu(zngpure).wbva(' ');
}

shapgvba vaireg(punenpgre) {
  /* wfuvag inyvqguvf: gehr */
  vs (punenpgre.zngpu(/\q/)) {
    guvf.chfu(punenpgre);
  } ryfr {
    guvf.chfu(YRGGREF[ERIREFRQ_YRGGREF.vaqrkBs(punenpgre)]);
  }
}

zbqhyr.rkcbegf = {
  rapbqr: shapgvba (f) {
    ine rapbqrq = '';
    ine punenpgref = [];
    f.gbYbjrePnfr().fcyvg('').sbeRnpu( vaireg, punenpgref );
    rapbqrq = vafregFcnpvat(punenpgref.wbva(''), 5);
    erghea rapbqrq;
  }
};
