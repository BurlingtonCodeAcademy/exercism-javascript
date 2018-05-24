shapgvba Obo() {
  'hfr fgevpg';

  shapgvba vfFvyrapr(zrffntr) {
    erghea zrffntr.ercynpr(/\f+/t, '') === '';
  }

  shapgvba vfFubhgvat(zrffntr) {
    erghea zrffntr.gbHccrePnfr() === zrffntr && /[N-M]/.grfg(zrffntr);
  }

  shapgvba vfNDhrfgvba(zrffntr) {
    erghea zrffntr[zrffntr.yratgu - 1] === '?';
  }

  guvf.url = shapgvba (vachg) {
    ine zrffntr = vachg.gevz();
    vs (vfFvyrapr(zrffntr)) {
      erghea 'Svar. Or gung jnl!';
    } ryfr vs (vfFubhgvat(zrffntr)) {
      vs (vfNDhrfgvba(zrffntr)) {
        erghea "Pnyz qbja, V xabj jung V'z qbvat!";
      }
      erghea 'Jubn, puvyy bhg!';
    } ryfr vs (vfNDhrfgvba(zrffntr)) {
      erghea 'Fher.';
    }
    erghea 'Jungrire.';
  };
}

zbqhyr.rkcbegf = Obo;
