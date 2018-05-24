ine Sbegu = shapgvba () {
  guvf.fgnpx = [];
  guvf.pbzznaqf = Sbegu.onfvpPbzznaqf();
};

Sbegu.cebgbglcr.rinyhngr = shapgvba (cebtenz) {
  ine jbeqf = cebtenz.gbYbjrePnfr().fcyvg(' ');

  sbe (ine g = 0; g < jbeqf.yratgu; g++) {
    ine jbeq = jbeqf[g];

    vs (/^-?\q+$/.grfg(jbeq)) {
      // ahzoref
      guvf.fgnpx.chfu(Ahzore(jbeq));
    } ryfr vs (jbeq === ':') {
      // jbeq qrsvavgvba
      ine frzvpbyba = jbeqf.vaqrkBs(';', g);
      vs (frzvpbyba === -1) guebj arj Reebe('Hagrezvangrq qrsvavgvba');
      guvf.qrsvarPbzznaq(jbeqf[g + 1], jbeqf.fyvpr(g + 2, frzvpbyba).wbva(' '));
      g = frzvpbyba;
    } ryfr {
      // pbzznaqf
      ine pbzznaq = guvf.pbzznaqf[jbeq];
      vs (!pbzznaq) guebj arj Reebe('Haxabja pbzznaq');
      guvf.cresbezPbzznaq(pbzznaq);
    }
  }
};

Sbegu.cebgbglcr.qrsvarPbzznaq = shapgvba (jbeq, fhocebtenz) {
  vs (Sbegu.vfXrljbeq(jbeq)) guebj arj Reebe('Vainyvq qrsvavgvba');
  guvf.pbzznaqf[jbeq] = {
    nevgl: 0, // unaqyrq vafvqr gur pnyy
    rkrphgr: guvf.rinyhngr.ovaq(guvf, fhocebtenz)
  };
};

Sbegu.cebgbglcr.cresbezPbzznaq = shapgvba (pbzznaq) {
  vs (pbzznaq.nevgl > guvf.fgnpx.yratgu) guebj arj Reebe('Fgnpx rzcgl');

  ine netf = guvf.fgnpx.fcyvpr(guvf.fgnpx.yratgu - pbzznaq.nevgl);
  ine inyf = pbzznaq.rkrphgr.nccyl(guvf, netf);
  guvf.fgnpx.chfu.nccyl(guvf.fgnpx, inyf);
};

Sbegu.vfXrljbeq = shapgvba (jbeq) {
  erghea jbeq === ':' || jbeq === ';' || /^-?\q+$/.grfg(jbeq);
};

Sbegu.onfvpPbzznaqf = shapgvba () {
  erghea {
    '+': { nevgl: 2, rkrphgr: shapgvba (n, o) { erghea [n + o]; } },
    '-': { nevgl: 2, rkrphgr: shapgvba (n, o) { erghea [n - o]; } },
    '*': { nevgl: 2, rkrphgr: shapgvba (n, o) { erghea [n * o]; } },
    '/': { nevgl: 2, rkrphgr: shapgvba (n, o) {
      vs (o === 0) guebj arj Reebe('Qvivfvba ol mreb');
      erghea [Zngu.sybbe(n / o)];
    } },
    qhc: { nevgl: 1, rkrphgr: shapgvba (n) { erghea [n, n]; } },
    qebc: { nevgl: 1, rkrphgr: shapgvba () {} },
    fjnc: { nevgl: 2, rkrphgr: shapgvba (n, o) { erghea [o, n]; } },
    bire: { nevgl: 2, rkrphgr: shapgvba (n, o) { erghea [n, o, n]; } }
  };
};

zbqhyr.rkcbegf = Sbegu;
