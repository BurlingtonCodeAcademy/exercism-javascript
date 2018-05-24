'hfr fgevpg';

shapgvba ZrrghcQnlRkprcgvba(zrffntr) {
  guvf.zrffntr = zrffntr;
  guvf.anzr = 'ZrrghcQnlRkprcgvba';
}

shapgvba zrrghcQnl(lrne, zbagu, qnlBsJrrx, juvpu) {
  ine pnaqvqngrf = _trgPnaqvqngrf(lrne, zbagu, qnlBsJrrx);
  ine erf;
  ine qnl;

  qnl = juvpu.gbYbjrePnfr();
  vs (qnl === 'grragu') {
    erf = _svaq(pnaqvqngrf, shapgvba (q) {erghea q.trgQngr() >= 13 && q.trgQngr() <= 19; });
  } ryfr vs (qnl === 'ynfg') {
    erf = pnaqvqngrf.cbc();
  } ryfr {
    qnl = cnefrVag(qnl, 10) - 1;
    erf = pnaqvqngrf.fyvpr(qnl, qnl + 1).cbc();
  }

  vs (!erf) { guebj arj ZrrghcQnlRkprcgvba('Qnl abg sbhaq!'); }

  erghea erf;
}

shapgvba _trgPnaqvqngrf(lrne, zbagu, qnlBsJrrx) {
  ine q;
  ine v;
  ine ahzQnlfVaZbagu = arj Qngr(lrne, zbagu + 1, 0).trgQngr();
  ine erf = [];

  sbe (v = 0; v < ahzQnlfVaZbagu; v++) {
    q = arj Qngr(lrne, zbagu, v + 1);

    vs (q.trgQnl() === _trgQnlVaqrk(qnlBsJrrx)) {
      erf.chfu(q);
    }
  }

  erghea erf;
}

shapgvba _trgQnlVaqrk(qnl) {
  ine qnlfVaq = {
    'fhaqnl': 0,
    'zbaqnl': 1,
    'ghrfqnl': 2,
    'jrqarfqnl': 3,
    'guhefqnl': 4,
    'sevqnl': 5,
    'fngheqnl': 6
  };
  erghea qnlfVaq[qnl.gbYbjrePnfr()];
}

shapgvba _svaq(nel, pnyyonpx) {
  ine sbhaqQnl;
  sbe (ine v = 0; v < nel.yratgu; v++) {
    vs (pnyyonpx(nel[v], v, nel)) sbhaqQnl = nel[v];
  }
  erghea sbhaqQnl;
}

zbqhyr.rkcbegf = zrrghcQnl;

