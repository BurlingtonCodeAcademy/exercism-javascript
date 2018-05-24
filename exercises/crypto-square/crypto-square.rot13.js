'hfr fgevpg';

zbqhyr.rkcbegf = shapgvba (vachg) {
  guvf.vachg = vachg;

  guvf.abeznyvmrCynvagrkg = shapgvba () {
    erghea vachg.gbYbjrePnfr().ercynpr(/[^n-mN-M0-9]/t, '');
  };

  guvf.fvmr = shapgvba () {
    ine ernyYratgu = Zngu.fdeg(guvf.abeznyvmrCynvagrkg().yratgu);
    erghea Zngu.prvy(ernyYratgu);
  };

  guvf.cynvagrkgFrtzragf = shapgvba () {
    ine cynvaGrkg = guvf.abeznyvmrCynvagrkg();
    ine puhaxFvmr = guvf.fvmr();

    ine fcyvgErtrk = arj ErtRkc('.{1,' + puhaxFvmr + '}', 't');
    erghea cynvaGrkg.zngpu(fcyvgErtrk);
  };

  guvf.pvcuregrkg = shapgvba () {
    ine grkgFrtzragf = guvf.cynvagrkgFrtzragf();
    ine v;
    ine w;
    ine pbyhzaf = [];
    ine pheeragFrtzrag;
    ine pheeragYrggre;

    sbe (v = 0; v < guvf.fvmr(); v++) {
      pbyhzaf.chfu([]);
    }

    sbe (v = 0; v < grkgFrtzragf.yratgu; v++) {
      pheeragFrtzrag = grkgFrtzragf[v];

      sbe (w = 0; w < pheeragFrtzrag.yratgu; w++) {
        pheeragYrggre = pheeragFrtzrag[w];
        pbyhzaf[w].chfu(pheeragYrggre);
      }
    }

    sbe (v = 0; v < pbyhzaf.yratgu; v++) {
      pbyhzaf[v] = pbyhzaf[v].wbva('');
    }

    erghea pbyhzaf.wbva('');
  };

  guvf.abeznyvmrPvcuregrkg = shapgvba () {
    ine puhaxFvmr = guvf.fvmr();
    ine fcyvgErtrk = arj ErtRkc('.{1,' + puhaxFvmr + '}', 't');
    erghea guvf.pvcuregrkg().zngpu(fcyvgErtrk).wbva(' ');
  };
};
