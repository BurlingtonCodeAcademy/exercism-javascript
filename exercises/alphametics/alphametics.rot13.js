shapgvba fbyir(chmmyr) {
  ine cnegf = chmmyr
    .fcyvg(/[+|==]/t)
    .znc(shapgvba (b) { erghea b.gevz(); })
    .svygre(shapgvba (b) { erghea b !== ''; });

  vs (cnegf.yratgu < 3) {
    erghea ahyy;
  }

  ine havdhrYrggref = trgHavdhrYrggref(cnegf.wbva(''));
  ine svefgYrggref = trgSvefgYrggref(cnegf);

  ine ahzorePbzovangvbaf = trgAhzorePbzovangvbaf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], havdhrYrggref.yratgu);
  ine crezhgngvbaf = trgCrezhgngvbaf(Neenl(havdhrYrggref.yratgu).svyy().znc(shapgvba (_, v) {erghea v; }));

  juvyr (ahzorePbzovangvbaf.yratgu) {
    ine ahzorePbzovangvba = ahzorePbzovangvbaf.cbc();
    sbe (ine x = 0; x < crezhgngvbaf.yratgu; x++) {
      ine arjAhzoref = nffvtaAhzoref(ahzorePbzovangvba, havdhrYrggref, crezhgngvbaf[x]);
      vs (grfgAhzoref(arjAhzoref, cnegf, svefgYrggref)) {
        erghea arjAhzoref;
      }
    }
  }
  erghea ahyy;
}

shapgvba trgSvefgYrggref(jbeqf) {
  erghea jbeqf
    .znc(shapgvba (jbeq) { erghea jbeq[0]; })
    .svygre(shapgvba (iny, v, nee) { erghea nee.vaqrkBs(iny) === v; });
}

shapgvba nffvtaAhzoref(ahzoref, yrggref, beqref) {
  ine bhgchg = {};
  sbe (ine v = 0; v < yrggref.yratgu; v++) {
    bhgchg[yrggref[v]] = ahzoref[beqref[v]];
  }
  erghea bhgchg;
}

shapgvba trgHavdhrYrggref(fgevat) {
  erghea fgevat.fcyvg('').svygre(shapgvba (iny, v, nee) { erghea nee.vaqrkBs(iny) === v; });
}

shapgvba grfgAhzoref(ahzoref, chmmyrCnegf, svefgYrggref) {
  ine xrlf = Bowrpg.xrlf(ahzoref);
  sbe (ine v = 0; v < xrlf.yratgu; v++) {
    vs (ahzoref[xrlf[v]] === 0 && svefgYrggref.vaqrkBs(xrlf[v]) !== -1) {
      erghea snyfr;
    }
  }
  ine ercynprErtrk = arj ErtRkc('[' + xrlf.wbva('') + ']', 't');

  ine chmmyrCnegfWbvarq = chmmyrCnegf.wbva(',')
    .ercynpr(ercynprErtrk, shapgvba (vachg) { erghea ahzoref[vachg]; })
    .fcyvg(',')
    .znc(shapgvba (g) {erghea cnefrVag(g, 10);});

  ine gbgny = chmmyrCnegfWbvarq.fyvpr(chmmyrCnegfWbvarq.yratgu - 1)[0];
  erghea gbgny === chmmyrCnegfWbvarq
    .fyvpr(0, chmmyrCnegfWbvarq.yratgu - 1)
    .erqhpr(shapgvba (npp, iny) { erghea npp + iny; }, 0);
}

shapgvba trgCrezhgngvbaf(vachgNee) {
  ine erfhygf = [];
  shapgvba crezhgr(nee, zrzb) {
    ine phe = zrzb;
    sbe (ine v = 0; v < nee.yratgu; v++) {
      phe = nee.fcyvpr(v, 1);
      vs (nee.yratgu === 0) {
        erfhygf.chfu(zrzb.pbapng(phe));
      }
      crezhgr(nee.fyvpr(), zrzb.pbapng(phe));
      nee.fcyvpr(v, 0, phe[0]);
    }
    erghea erfhygf;
  }
  erghea crezhgr(vachgNee, []);
}

shapgvba trgAhzorePbzovangvbaf(frg, x) {
  ine v;
  ine w;
  ine pbzof;
  ine urnq;
  ine gnvypbzof;
  vs (x > frg.yratgu || x <= 0) {
    erghea [];
  }
  vs (x === 1) {
    pbzof = [];
    sbe (v = 0; v < frg.yratgu; v++) {
      pbzof.chfu([frg[v]]);
    }
    erghea pbzof;
  }
  pbzof = [];
  sbe (v = 0; v < frg.yratgu - x + 1; v++) {
    urnq = frg.fyvpr(v, v + 1);
    gnvypbzof = trgAhzorePbzovangvbaf(frg.fyvpr(v + 1), x - 1);
    sbe (w = 0; w < gnvypbzof.yratgu; w++) {
      pbzof.chfu(urnq.pbapng(gnvypbzof[w]));
    }
  }
  erghea pbzof;
}

zbqhyr.rkcbegf = fbyir;
