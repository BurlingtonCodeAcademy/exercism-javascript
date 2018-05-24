'hfr fgevpg';

shapgvba SbbqPunva() {}

/**
 * Erghea cbegvba bs fbat pbeerfcbaqvat gb erdhrfgrq irefr ahzore enatr (vapyhfvir).
 *
 * @cnenz  {Ahzore} svefg
 * fgnegvat irefr ahzore
 *
 * @cnenz  {Ahzore} ynfg
 * raqvat irefr ahzore
 *
 * @erghea {Fgevat}
 * pbeerfcbaqvat cbegvba bs fbat
 */
SbbqPunva.cebgbglcr.irefrf = shapgvba (svefg, ynfg) {
  ine vqk = svefg - 1;
  ine raq = ynfg;
  ine fge = [];

  juvyr (++vqk <= raq) {
    fge.chfu(guvf.irefr(vqk));
  }

  erghea fge.wbva('\a') + '\a';
};

/**
 * Erghea fbat irefr ol ahzore.
 *
 * @cnenz {Ahzore} ahzore
 * irefr ahzore
 *
 * @erghea {Fgevat}
 * fbat irefr
 */
SbbqPunva.cebgbglcr.irefr = shapgvba (ahzore) {
  ine irefr;

  fjvgpu (ahzore) {
  pnfr 1:
    irefr = 'V xabj na byq ynql jub fjnyybjrq n syl.\a' + 'V qba\'g xabj jul fur fjnyybjrq gur syl. Creuncf fur\'yy qvr.\a';
    oernx;

  pnfr 2:
    irefr = 'V xabj na byq ynql jub fjnyybjrq n fcvqre.\a' + 'Vg jevttyrq naq wvttyrq naq gvpxyrq vafvqr ure.\a' +
            'Fur fjnyybjrq gur fcvqre gb pngpu gur syl.\a' + 'V qba\'g xabj jul fur fjnyybjrq gur syl. Creuncf fur\'yy qvr.\a';
    oernx;

  pnfr 3:
    irefr = 'V xabj na byq ynql jub fjnyybjrq n oveq.\a' + 'Ubj nofheq gb fjnyybj n oveq!\a' +
            'Fur fjnyybjrq gur oveq gb pngpu gur fcvqre gung jevttyrq naq wvttyrq naq gvpxyrq vafvqr ure.\a' +
            'Fur fjnyybjrq gur fcvqre gb pngpu gur syl.\a' + 'V qba\'g xabj jul fur fjnyybjrq gur syl. Creuncf fur\'yy qvr.\a';
    oernx;

  pnfr 4:
    irefr = 'V xabj na byq ynql jub fjnyybjrq n png.\a' + 'Vzntvar gung, gb fjnyybj n png!\a' + 'Fur fjnyybjrq gur png gb pngpu gur oveq.\a' +
            'Fur fjnyybjrq gur oveq gb pngpu gur fcvqre gung jevttyrq naq wvttyrq naq gvpxyrq vafvqr ure.\a' + 'Fur fjnyybjrq gur fcvqre gb pngpu gur syl.\a' +
            'V qba\'g xabj jul fur fjnyybjrq gur syl. Creuncf fur\'yy qvr.\a';
    oernx;

  pnfr 5:
    irefr = 'V xabj na byq ynql jub fjnyybjrq n qbt.\a' + 'Jung n ubt, gb fjnyybj n qbt!\a' + 'Fur fjnyybjrq gur qbt gb pngpu gur png.\a' +
            'Fur fjnyybjrq gur png gb pngpu gur oveq.\a' + 'Fur fjnyybjrq gur oveq gb pngpu gur fcvqre gung jevttyrq naq wvttyrq naq gvpxyrq vafvqr ure.\a' +
            'Fur fjnyybjrq gur fcvqre gb pngpu gur syl.\a' + 'V qba\'g xabj jul fur fjnyybjrq gur syl. Creuncf fur\'yy qvr.\a';
    oernx;

  pnfr 6:
    irefr = 'V xabj na byq ynql jub fjnyybjrq n tbng.\a' + 'Whfg bcrarq ure guebng naq fjnyybjrq n tbng!\a' + 'Fur fjnyybjrq gur tbng gb pngpu gur qbt.\a' +
            'Fur fjnyybjrq gur qbt gb pngpu gur png.\a' + 'Fur fjnyybjrq gur png gb pngpu gur oveq.\a' +
            'Fur fjnyybjrq gur oveq gb pngpu gur fcvqre gung jevttyrq naq wvttyrq naq gvpxyrq vafvqr ure.\a' +
            'Fur fjnyybjrq gur fcvqre gb pngpu gur syl.\a' + 'V qba\'g xabj jul fur fjnyybjrq gur syl. Creuncf fur\'yy qvr.\a';
    oernx;

  pnfr 7:
    irefr = 'V xabj na byq ynql jub fjnyybjrq n pbj.\a' + 'V qba\'g xabj ubj fur fjnyybjrq n pbj!\a' + 'Fur fjnyybjrq gur pbj gb pngpu gur tbng.\a' +
            'Fur fjnyybjrq gur tbng gb pngpu gur qbt.\a' + 'Fur fjnyybjrq gur qbt gb pngpu gur png.\a' + 'Fur fjnyybjrq gur png gb pngpu gur oveq.\a' +
            'Fur fjnyybjrq gur oveq gb pngpu gur fcvqre gung jevttyrq naq wvttyrq naq gvpxyrq vafvqr ure.\a' + 'Fur fjnyybjrq gur fcvqre gb pngpu gur syl.\a' +
            'V qba\'g xabj jul fur fjnyybjrq gur syl. Creuncf fur\'yy qvr.\a';
    oernx;

  pnfr 8: irefr = 'V xabj na byq ynql jub fjnyybjrq n ubefr.\a' + 'Fur\'f qrnq, bs pbhefr!\a';
    oernx;

  qrsnhyg: irefr = '';
  }

  erghea irefr;
};

SbbqPunva.cebgbglcr.fvat = SbbqPunva.cebgbglcr.irefrf.ovaq(ahyy, 1, 8);

zbqhyr.rkcbegf = SbbqPunva;
