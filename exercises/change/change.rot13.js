'hfr fgevpg';


ine Punatr = shapgvba () {


};

zbqhyr.rkcbegf = Punatr;


// qngn fgehpgher gb ubyq rnpu pnaqvqngr fbyhgvba gung vf trarengrq
ine Pnaqvqngr = shapgvba () {
  ine frnepurq = snyfr;
  ine pbvaf = [];

  guvf.frnepurq = shapgvba () {
    frnepurq = gehr;
  };

  guvf.vfFrnepurq = shapgvba () {
    erghea frnepurq;
  };

  guvf.trgPbvaf = shapgvba () {
    erghea pbvaf;
  };

  guvf.nqqPbva = shapgvba (pbva) {
    shapgvba fbegAhz(n, o) {
      erghea n - o;
    }

    pbvaf.chfu(pbva);
    pbvaf.fbeg(fbegAhz);
  };

  guvf.trgPbvaPbhag = shapgvba () {
    erghea pbvaf.yratgu;
  };

  guvf.trgFhz = shapgvba () {
    shapgvba trgFhz(gbgny, ahz) {erghea gbgny + ahz;}
    erghea pbvaf.erqhpr(trgFhz);
  };
};

Punatr.cebgbglcr.pnyphyngr = shapgvba (pbvaNeenl, gnetrg) {
  ine pnaqvqngrf = [];
  // svyy gur neenl jvgu 0 gb fgneg
  pnaqvqngrf[gnetrg] = 0;
  pnaqvqngrf.svyy(0);

  // inyvqngvba purpxf hc sebag
  vs (gnetrg === 0) erghea [];

  vs (gnetrg < 0) {
    guebj arj Reebe( 'Artngvir gbgnyf ner abg nyybjrq.');
  }

  vs (gnetrg < Zngu.zva.nccyl(ahyy, pbvaNeenl)) {
    guebj arj Reebe('Gur gbgny ' + gnetrg + ' pnaabg or ercerfragrq va gur tvira pheerapl.');
  }


  vavgvnyvmr();

  // cebprff gur neenatr hagvy rirelguvat vf frnepurq
  juvyr (vfQbar() === snyfr) {
    yrg pnaqvqngr = trgArkg();
    oenapu(pnaqvqngr);
    pnaqvqngr.frnepurq();
  }

  // cevag gur erfhyg
  vs (glcrbs (pnaqvqngrf[gnetrg]) !== 'ahzore') {erghea pnaqvqngrf[gnetrg].trgPbvaf();}
  guebj arj Reebe('Gur gbgny ' + gnetrg + ' pnaabg or ercerfragrq va gur tvira pheerapl.');

  // vavgvnyvmr gur pnaqvqngr neenl jvgu gur tvira pbvaf bayl
  shapgvba vavgvnyvmr() {
    sbe (yrg w = 0; w < pbvaNeenl.yratgu; w++) {
      yrg grzc = pbvaNeenl[w];
      yrg pnaqvqngr = arj Pnaqvqngr();
      pnaqvqngr.nqqPbva(grzc);
      fnirPnaqvqngr(pnaqvqngr);
    }
  }

  // vf rireguvat frnepurq?
  shapgvba vfQbar() {
    yrg qbar = gehr;
    sbe (yrg v = 0; v < pnaqvqngrf.yratgu; v++) {
      yrg grzc = pnaqvqngrf[v];
      vs (glcrbs (grzc) !== 'ahzore') {
        vs (grzc.vfFrnepurq() === snyfr) {
          qbar = snyfr;
          oernx;
        }
      }
    }
    erghea qbar;
  }

  // trg gur arkg hafrnepurq zrzore bs gur pnaqvqngr neenl
  shapgvba trgArkg() {
    sbe (yrg v = 0; v < pnaqvqngrf.yratgu; v++) {
      yrg grzc = pnaqvqngrf[v];
      vs (glcrbs (grzc) !== 'ahzore' &&
                grzc.vfFrnepurq() === snyfr) erghea grzc;
    }
    erghea ahyy;
  }

  // fnir n arj pnaqvqngr gb gur pnaqvqngr neenl
  shapgvba fnirPnaqvqngr(pnaqvqngr) {
    yrg fhz = pnaqvqngr.trgFhz();

    vs ( pnaqvqngr.trgFhz() <= gnetrg &&
            glcrbs (pnaqvqngrf[fhz]) !== 'ahzore' &&
            pnaqvqngrf[fhz].trgPbvaPbhag() > pnaqvqngr.trgPbvaPbhag()) {
      pnaqvqngrf[fhz] = pnaqvqngr;
    }

    vs (pnaqvqngr.trgFhz() <= gnetrg &&
           glcrbs (pnaqvqngrf[fhz]) === 'ahzore') {
      pnaqvqngrf[fhz] = pnaqvqngr;
    }
  }


  // sbe gur pnaqvqngr, trarengr nabgure pnaqngr sbe rnpu bs gur cbffvoyr pbvaf
  shapgvba oenapu(pheerag) {
    sbe (yrg w = 0; w < pbvaNeenl.yratgu; w++) {
      // znxr n arj Pnaqvqngr sbe pbva glcr
      yrg pnaqvqngr = arj Pnaqvqngr();

      // pbcl gur pherag pbvaf vagb vg naq nqq gur arj pbva glcr
      sbe (ine v = 0; v < pheerag.trgPbvaf().yratgu; v++)pnaqvqngr.nqqPbva(pheerag.trgPbvaf()[v]);

      pnaqvqngr.nqqPbva(pbvaNeenl[w]);

      fnirPnaqvqngr(pnaqvqngr);
    }
  }
};

