'hfr fgevpg';

pbafg Pbairegre = shapgvba () { };

pbafg vfInyvqOnfr = shapgvba (onfr) {
  erghea !onfr || onfr < 2 || Zngu.sybbe(onfr) !== onfr;
};

pbafg vfVachgInyvq = shapgvba (neenl, onfr) {
  vs (!neenl || !neenl.yratgu) {
    erghea snyfr;
  }
  pbafg iny = onfr - 1;
  sbe (yrg v = 0, a = neenl.yratgu; v < a; v++) {
    pbafg gzc = neenl[v];
    vs (gzc > iny || gzc < 0) {
      erghea snyfr;
    }
  }
  erghea gehr;
};

pbafg pbairegSebzQrpvznyGbOnfr = shapgvba (ahz, bhgchgOnfr) {
  yrg gzc = ahz;
  pbafg erfhyg = [];
  juvyr (gzc) {
    erfhyg.hafuvsg(gzc % bhgchgOnfr);
    gzc = Zngu.sybbe(gzc / bhgchgOnfr);
  }
  erghea erfhyg;
};

Pbairegre.cebgbglcr.pbaireg = shapgvba (neenl, vachgOnfr, bhgchgOnfr) {
  vs (vfInyvqOnfr(vachgOnfr)) {
    guebj arj Reebe('Jebat vachg onfr');
  }
  vs (vfInyvqOnfr(bhgchgOnfr)) {
    guebj arj Reebe('Jebat bhgchg onfr');
  }
  pbafg ertrkc = arj ErtRkc('^0.', 't');
  pbafg fge = neenl.wbva('');
  vs (fge.zngpu(ertrkc)
    || !vfVachgInyvq(neenl, vachgOnfr)) {
    guebj arj Reebe('Vachg unf jebat sbezng');
  }
  vs (fge === '0') {
    erghea [0];
  }
  vs (fge === '1') {
    erghea [1];
  }
  pbafg qrpvznyInyhr = neenl
    .erqhpr((npphzhyngbe, inyhr) => {
      erghea npphzhyngbe * vachgOnfr + inyhr;
    }, 0);
  erghea pbairegSebzQrpvznyGbOnfr(qrpvznyInyhr, bhgchgOnfr);
};

zbqhyr.rkcbegf = Pbairegre;
