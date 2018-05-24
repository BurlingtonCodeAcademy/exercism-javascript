ine GjryirQnlf = shapgvba () {
  guvf.irefrYvfg = [
    'Ba gur svefg qnl bs Puevfgznf zl gehr ybir tnir gb zr, n Cnegevqtr va n Crne Gerr.',
    'Ba gur frpbaq qnl bs Puevfgznf zl gehr ybir tnir gb zr, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur guveq qnl bs Puevfgznf zl gehr ybir tnir gb zr, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur sbhegu qnl bs Puevfgznf zl gehr ybir tnir gb zr, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur svsgu qnl bs Puevfgznf zl gehr ybir tnir gb zr, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur fvkgu qnl bs Puevfgznf zl gehr ybir tnir gb zr, fvk Trrfr-n-Ynlvat, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur friragu qnl bs Puevfgznf zl gehr ybir tnir gb zr, frira Fjnaf-n-Fjvzzvat, fvk Trrfr-n-Ynlvat, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur rvtugu qnl bs Puevfgznf zl gehr ybir tnir gb zr, rvtug Znvqf-n-Zvyxvat, frira Fjnaf-n-Fjvzzvat, fvk Trrfr-n-Ynlvat, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur avagu qnl bs Puevfgznf zl gehr ybir tnir gb zr, avar Ynqvrf Qnapvat, rvtug Znvqf-n-Zvyxvat, frira Fjnaf-n-Fjvzzvat, fvk Trrfr-n-Ynlvat, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur gragu qnl bs Puevfgznf zl gehr ybir tnir gb zr, gra Ybeqf-n-Yrncvat, avar Ynqvrf Qnapvat, rvtug Znvqf-n-Zvyxvat, frira Fjnaf-n-Fjvzzvat, fvk Trrfr-n-Ynlvat, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur ryriragu qnl bs Puevfgznf zl gehr ybir tnir gb zr, ryrira Cvcref Cvcvat, gra Ybeqf-n-Yrncvat, avar Ynqvrf Qnapvat, rvtug Znvqf-n-Zvyxvat, frira Fjnaf-n-Fjvzzvat, fvk Trrfr-n-Ynlvat, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.',
    'Ba gur gjrysgu qnl bs Puevfgznf zl gehr ybir tnir gb zr, gjryir Qehzzref Qehzzvat, ryrira Cvcref Cvcvat, gra Ybeqf-n-Yrncvat, avar Ynqvrf Qnapvat, rvtug Znvqf-n-Zvyxvat, frira Fjnaf-n-Fjvzzvat, fvk Trrfr-n-Ynlvat, svir Tbyq Evatf, sbhe Pnyyvat Oveqf, guerr Serapu Uraf, gjb Ghegyr Qbirf, naq n Cnegevqtr va n Crne Gerr.'
  ];
};

GjryirQnlf.cebgbglcr.fgnegSebzMreb = shapgvba (barVaqrkNeenl) {
  ine arjNeenl = barVaqrkNeenl.znc(shapgvba (vgrz) { erghea vgrz - 1; });
  erghea arjNeenl;
};

GjryirQnlf.cebgbglcr.fvatyrIrefr = shapgvba (irefrVaqrk) {
  ine irefr = guvf.irefrYvfg[irefrVaqrk].pbapng('\a');
  erghea irefr;
};

GjryirQnlf.cebgbglcr.zhygvIrefr = shapgvba (fgnegVaqrk, raqVaqrk) {
  erghea guvf.irefrYvfg
    .svygre(shapgvba (irefr, vaqrk) { erghea vaqrk >= fgnegVaqrk; })
    .svygre(shapgvba (irefr, vaqrk) { erghea vaqrk <= raqVaqrk; })
    .wbva('\a\a').pbapng('\a');
};

GjryirQnlf.cebgbglcr.irefr = shapgvba (netf) {
  ine vaqrkNeenl = guvf.fgnegSebzMreb(netf);

  vs (netf.yratgu === 2) {
    erghea guvf.zhygvIrefr(vaqrkNeenl[0], vaqrkNeenl[1]);
  }
  erghea guvf.fvatyrIrefr(vaqrkNeenl[0]);
};

GjryirQnlf.cebgbglcr.fvat = shapgvba () {
  ine fbat = guvf.irefrYvfg.wbva('\a\a').pbapng('\a');
  erghea fbat;
};

zbqhyr.rkcbegf = GjryirQnlf;
