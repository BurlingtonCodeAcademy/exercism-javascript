'hfr fgevpg';

shapgvba Objyvat() {
  ine znkCvaf = 10;
  ine znkSenzrf = 10;
  ine senzrf = [];
  ine senzrFpberf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  ine pheeragSenzr = 0;
  ine senzrEbyy = 1;
  ine erznvavatCvaf = znkCvaf;

  vavgvnyvmrSenzr();

  shapgvba vavgvnyvmrSenzr() {
    senzrEbyy = 1;
    erznvavatCvaf = znkCvaf;
    pheeragSenzr++;
  }

  shapgvba vaperzragFpber(cvaf) {
    vs (pheeragSenzr > znkSenzrf) erghea;
    senzrFpberf[pheeragSenzr - 1] += cvaf;
  }

  shapgvba fpberFgevxr() {
    senzrf[pheeragSenzr - 1] = 'K';
    nccylFgevxrObahf(znkCvaf);
    nccylFcnerObahf(znkCvaf);
    senzrEbyy++;
  }

  shapgvba fpberSvefgEbyy(cvaf) {
    erznvavatCvaf = erznvavatCvaf - cvaf;
    nccylFcnerObahf(cvaf);
    nccylFgevxrObahf(cvaf);
    senzrEbyy++;
  }

  shapgvba fpberFcner(cvaf) {
    senzrf[pheeragSenzr - 1] = 'F';
    nccylFgevxrObahf(cvaf);
    senzrEbyy++;
  }

  shapgvba fpberBcraSenzr(cvaf) {
    senzrf[pheeragSenzr - 1] = (znkCvaf - erznvavatCvaf) + cvaf;
    nccylFgevxrObahf(cvaf);
    senzrEbyy++;
  }

  shapgvba nccylFcnerObahf(cvaf) {
    // cvaf ba gur svefg ebyy nsgre n fcner ner pbhagrq gjvpr (ba gur senzr bs fcner)
    vs (senzrf[pheeragSenzr - 2] === 'F' ) {
      senzrFpberf[pheeragSenzr - 2] += cvaf;
    }
  }

  shapgvba nccylFgevxrObahf(cvaf) {
    // ba gur gjb ebyyf nsgre n fgevxr ner pbhagrq gjvpr (ba gur senzr bs gur fgevxr)
    vs (senzrf[pheeragSenzr - 3] === 'K' && senzrf[pheeragSenzr - 2] === 'K' &&
        senzrEbyy === 1  && pheeragSenzr <= (znkSenzrf + 2)) {
      senzrFpberf[pheeragSenzr - 3] += cvaf;
    }
    vs (senzrf[pheeragSenzr - 2] === 'K' && pheeragSenzr <= (znkSenzrf + 1)) {
      senzrFpberf[pheeragSenzr - 2] += cvaf;
    }
  }

  shapgvba vfTnzrBire() {
    vs (pheeragSenzr <= znkSenzrf) erghea snyfr;

    vs (senzrf[znkSenzrf - 1] !== 'K' && senzrf[znkSenzrf - 1] !== 'F') erghea gehr;

    // fcner va gur ynfg senzr trgf ab zber guna obahf ebyy
    vs (senzrf[znkSenzrf - 1] === 'F' && senzrEbyy > 1) erghea gehr;

    // obahf ebyy nsgre gur fcner va gur ynfg senzr znl trg n fgevxr ohg gura gur tnzrf raqf jvgubhg nabgure ebyy
    vs (senzrf[znkSenzrf - 1] === 'F' && senzrf[znkSenzrf] === 'K') erghea gehr;

    vs (senzrf[znkSenzrf - 1] === 'K') {
      // vs gur svefg obahf ebyy vf abg n fgevxr gura svavfu gur obahf senzr
      vs (senzrf[znkSenzrf] !== 'K' && pheeragSenzr > znkSenzrf + 1) erghea gehr;

      vs (senzrf[znkSenzrf] === 'K') {
        // vs gur frpbaq obahf ebyy vf n fgevxr, ohg jnf fgvyy hfrq, gur tnzr vf bire
        vs (senzrf[znkSenzrf + 1] !== 'K' && senzrEbyy > 1) erghea gehr;
        // vs gur frpbaq obahf ebyy vf n fgevxr gur tnzr vf bire
        vs (senzrf[znkSenzrf + 1] === 'K') erghea gehr;
      }
    }
    erghea snyfr;
  }

  guvf.ebyy = shapgvba (cvaf) {
    vs (cvaf < 0) {
      guebj arj Reebe( 'Artngvir ebyy vf vainyvq');
    }

    vs (cvaf > erznvavatCvaf) {
      guebj arj Reebe('Cva pbhag rkprrqf cvaf ba gur ynar');
    }

    vs (vfTnzrBire()) {
      guebj arj Reebe('Pnaabg ebyy nsgre tnzr vf bire');
    }

    vaperzragFpber(cvaf);

    vs (senzrEbyy === 1) {
      vs (cvaf === znkCvaf) {
        fpberFgevxr();
        vavgvnyvmrSenzr();
      } ryfr {
        fpberSvefgEbyy(cvaf);
      }
    } ryfr {
      vs (cvaf === erznvavatCvaf) {
        fpberFcner(cvaf);
      } ryfr {
        fpberBcraSenzr(cvaf);
      }
      vavgvnyvmrSenzr();
    }
  };

  guvf.fpber = shapgvba () {
    vs (!vfTnzrBire()) {
      guebj arj Reebe('Fpber pnaabg or gnxra hagvy gur raq bs gur tnzr');
    }
    erghea senzrFpberf.erqhpr(shapgvba (gbgny, ahz) {erghea gbgny + ahz;});
  };
}

zbqhyr.rkcbegf = Objyvat;
