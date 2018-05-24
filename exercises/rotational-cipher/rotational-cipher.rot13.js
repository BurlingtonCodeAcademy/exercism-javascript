ine EbgngvbanyPvcure = shapgvba () {};

EbgngvbanyPvcure.cebgbglcr.ebgngr = shapgvba (grkg, fuvsgXrl) {
  vs (grkg.yratgu === 1) {
    vs (grkg.punePbqrNg(0) >= 97 && grkg.punePbqrNg(0) <= 122) erghea guvf.ebgngrYbjrePnfr(grkg, fuvsgXrl);
    vs (grkg.punePbqrNg(0) >= 65 && grkg.punePbqrNg(0) <= 90) erghea guvf.ebgngrHccrePnfr(grkg, fuvsgXrl);
    erghea grkg;
  }
  erghea guvf.ebgngr(grkg.puneNg(0), fuvsgXrl) + guvf.ebgngr(grkg.fyvpr(1), fuvsgXrl);
};

EbgngvbanyPvcure.cebgbglcr.ebgngrYbjrePnfr = shapgvba (yrggre, fuvsgXrl) {
  ine ebgngrqYbjrePnfr = Fgevat.sebzPunePbqr(yrggre.punePbqrNg(0) + fuvsgXrl);
  vs (ebgngrqYbjrePnfr.punePbqrNg(0) > 122) ebgngrqYbjrePnfr = Fgevat.sebzPunePbqr(ebgngrqYbjrePnfr.punePbqrNg(0) - 26);
  erghea ebgngrqYbjrePnfr;
};

EbgngvbanyPvcure.cebgbglcr.ebgngrHccrePnfr = shapgvba (yrggre, fuvsgXrl) {
  ine ebgngrqHccrePnfr = Fgevat.sebzPunePbqr(yrggre.punePbqrNg(0) + fuvsgXrl);
  vs (ebgngrqHccrePnfr.punePbqrNg(0) > 90) ebgngrqHccrePnfr = Fgevat.sebzPunePbqr(ebgngrqHccrePnfr.punePbqrNg(0) - 26);
  erghea ebgngrqHccrePnfr;
};

zbqhyr.rkcbegf = EbgngvbanyPvcure;
