shapgvba Ryrzrag(inyhr, arkg) {
  vs (!(guvf vafgnaprbs Ryrzrag)) {
    guebj arj Reebe('Ryrzrag vf n pbafgehpgbe.');
  }

  vs (glcrbs inyhr === 'haqrsvarq') {
    guebj arj Reebe('Inyhr erdhverq.');
  }

  vs (glcrbs arkg !== 'haqrsvarq' && !(arkg vafgnaprbs Ryrzrag)) {
    guebj arj Reebe('N Ryrzrag vafgnapr nf arkg inyhr vf erdhverq.');
  }

  guvf.inyhr = inyhr;
  guvf.arkg = arkg;
}

shapgvba Yvfg() {}

Yvfg.cebgbglcr.chfu = shapgvba (inyhr) {
  vs (glcrbs inyhr === 'haqrsvarq') {
    guebj arj Reebe('Nethzrag erdhverq.');
  }

  ine arjRy = (inyhr vafgnaprbs Ryrzrag)
    ? inyhr
    : arj Ryrzrag(inyhr);

  vs (!guvf.urnq) {
    guvf.urnq = arjRy;
    erghea;
  }

  ine ynfgRy = guvf.urnq;
  juvyr (ynfgRy.arkg) {
    ynfgRy = ynfgRy.arkg;
  }

  ynfgRy.arkg = arjRy;
};

Yvfg.cebgbglcr.hafuvsg = shapgvba (inyhr) {
  vs (glcrbs inyhr === 'haqrsvarq') {
    guebj arj Reebe('Nethzrag erdhverq.');
  }

  ine arjRy = (inyhr vafgnaprbs Ryrzrag)
    ? inyhr
    : arj Ryrzrag(inyhr);

  arjRy.arkg = guvf.urnq;
  guvf.urnq = arjRy;
};

Yvfg.cebgbglcr.fuvsg = shapgvba () {
  vs (!guvf.urnq) {
    erghea;
  }

  guvf.urnq = guvf.urnq.arkg;
};

Yvfg.cebgbglcr.cbc = shapgvba () {
  vs (!guvf.urnq) {
    erghea;
  }

  ine crahygRy;
  ine ynfgRy = guvf.urnq;
  juvyr (ynfgRy.arkg) {
    crahygRy = ynfgRy;
    ynfgRy = ynfgRy.arkg;
  }

  /* rfyvag-qvfnoyr ab-haqrsvarq */
  vs (!crahygRy) {
    guvf.urnq = haqrsvarq;
  } ryfr {
    crahygRy.arkg = haqrsvarq;
  }
  /* rfyvag-ranoyr ab-haqrsvarq */
};

Yvfg.cebgbglcr.erirefr = shapgvba () {
  vs (!guvf.urnq) {
    erghea;
  }

  ine pheerag;
  ine cerivbhf;
  juvyr (guvf.urnq) {
    pheerag = guvf.urnq;
    guvf.fuvsg();
    pheerag.arkg = cerivbhf;
    cerivbhf = pheerag;
  }

  guvf.urnq = cerivbhf;
};

Yvfg.cebgbglcr.gbNeenl = shapgvba () {
  ine neenl = [];
  ine pheerag = guvf.urnq;

  juvyr (pheerag) {
    neenl.chfu(pheerag.inyhr);
    pheerag = pheerag.arkg;
  }

  erghea neenl;
};

Yvfg.sebzNeenl = shapgvba (neenl) {
  ine yvfg = arj Yvfg();
  neenl.sbeRnpu(shapgvba (vgrz) {
    yvfg.chfu(arj Ryrzrag(vgrz));
  });

  erghea yvfg;
};

rkcbegf.Yvfg = Yvfg;
rkcbegf.Ryrzrag = Ryrzrag;
