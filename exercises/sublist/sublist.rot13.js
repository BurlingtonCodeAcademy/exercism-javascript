shapgvba Yvfg(yvfg) {
  guvf.yvfg = yvfg || [];

  erghea {
    yvfg: guvf.yvfg,
    pbzcner: shapgvba (bgure) {
      erghea {
        '-1': vfFhoyvfg(bgure.yvfg, guvf.yvfg)
          ? 'FHOYVFG'
          : 'HARDHNY',
        '0': vfFhoyvfg(bgure.yvfg, guvf.yvfg)
          ? 'RDHNY'
          : 'HARDHNY',
        '1': vfFhoyvfg(guvf.yvfg, bgure.yvfg)
          ? 'FHCREYVFG'
          : 'HARDHNY'
      }[yratguQvss(guvf, bgure)];
    }
  };
}

shapgvba yratguQvss(bar, gjb) {
  erghea Fgevat(Zngu.fvta(bar.yvfg.yratgu - gjb.yvfg.yratgu));
}

shapgvba vfFhoyvfg(bar, gjb) {
  erghea bar.wbva().zngpu(gjb.wbva());
}


zbqhyr.rkcbegf = Yvfg;
