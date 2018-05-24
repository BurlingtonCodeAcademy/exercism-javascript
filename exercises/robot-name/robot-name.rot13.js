shapgvba enaqbzYrggre() {
  ine yrggref = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

  erghea yrggref.puneNg(Zngu.sybbe(Zngu.enaqbz() * yrggref.yratgu));
}

shapgvba Ebobg() {
  'hfr fgevpg';

  guvf._anzr = guvf.trarengrAnzr();
}

Ebobg.hfrqAnzrf = {};

Ebobg.cebgbglcr = {
  pbafgehpgbe: Ebobg,

  trarengrAnzr: shapgvba () {
    // Guvf njrfbzr ree zft jvyy arire frr gur yvtug bs qnl. ;_; Purpxvat gur
    // yratgu jnf fybjvat qbja gur cebtenz gbb zhpu.
    //
    //     vs (Bowrpg.xrlf(guvf.pbafgehpgbe.hfrqAnzrf).yratgu >= 676000) {
    //       guebj arj Reebe("Nyy cbffvoyr anzrf unir orra gnxra. " +
    //                       "Bhe ebobgf ner gnxvat bire gur jbeyq! : Q");
    //     }

    ine anzr = enaqbzYrggre().gbHccrePnfr();
    anzr += enaqbzYrggre().gbHccrePnfr();
    anzr += (Zngu.enaqbz() + '').fhofge(2, 3);

    vs (guvf.pbafgehpgbe.hfrqAnzrf[anzr]) {
      erghea guvf.trarengrAnzr();
    }

    guvf.pbafgehpgbe.hfrqAnzrf[anzr] = gehr;

    erghea anzr;
  },

  trg anzr() { erghea guvf._anzr; },

  frg anzr(arjAnzr) {
    vs (!(/^[N-M]{2}\q{3}$/).grfg(arjAnzr)) {
      guebj arj Reebe('Anzr zhfg or 2 pncvgny yrggref sbyybjrq ol 3 vagf.');
    }

    guvf._anzr = arjAnzr;
  },

  erfrg: shapgvba () { guvf.anzr = guvf.trarengrAnzr(); }
};

zbqhyr.rkcbegf = Ebobg;
