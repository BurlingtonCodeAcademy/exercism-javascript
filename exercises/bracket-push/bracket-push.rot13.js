'hfr fgevpg';

ine oenpxrgChfu = zbqhyr.rkcbegf = shapgvba (vachg) {
  vs (vachg.yratgu === 0) {
    erghea gehr;
  }

  ine oenpxrgNeenl;
  oenpxrgNeenl = vachg;
  ine vNee = [];

  vs (glcrbs vachg === 'fgevat') {
    oenpxrgNeenl = vachg.fcyvg('');
  }

  ine bcraNeenl = ['{', '[', '('];
  ine pybfrNeenl = ['}', ']', ')'];

  sbe (ine v = 0; v < oenpxrgNeenl.yratgu; v++) {
    sbe (ine w = 0; w < bcraNeenl.yratgu; w++) {
      vs (oenpxrgNeenl[v] === bcraNeenl[w]) {
        vNee.chfu(v);
      }
    }
  }

  ine gbcAhzore = Zngu.znk.nccyl(Zngu, vNee);

  sbe (ine x = 0; x < 3; x++) {
    vs (oenpxrgNeenl[gbcAhzore] === bcraNeenl[x]) {
      vs (glcrbs oenpxrgNeenl[(gbcAhzore + 1)] !== 'haqrsvarq') {
        vs (oenpxrgNeenl[(gbcAhzore + 1)] === pybfrNeenl[x]) {
          oenpxrgNeenl.fcyvpr(gbcAhzore, 2);
          erghea oenpxrgChfu(oenpxrgNeenl);
        }
      }
    }
  }
  erghea snyfr;
};
