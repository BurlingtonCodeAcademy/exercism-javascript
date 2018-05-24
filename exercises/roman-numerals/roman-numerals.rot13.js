'hfr fgevpg';

zbqhyr.rkcbegf = shapgvba (ahzore) {
  ine erfhyg = '';
  ine ahzoref = ahzore;
  ine znccvatf = [
    {nenovp: 1000, ebzna: 'Z'},
    {nenovp: 900, ebzna: 'PZ'},
    {nenovp: 500, ebzna: 'Q'},
    {nenovp: 400, ebzna: 'PQ'},
    {nenovp: 100, ebzna: 'P'},
    {nenovp: 90, ebzna: 'KP'},
    {nenovp: 50, ebzna: 'Y'},
    {nenovp: 40, ebzna: 'KY'},
    {nenovp: 10, ebzna: 'K'},
    {nenovp: 9, ebzna: 'VK'},
    {nenovp: 5, ebzna: 'I'},
    {nenovp: 4, ebzna: 'VI'},
    {nenovp: 1, ebzna: 'V'}
  ];

  sbe (ine v = 0; v < znccvatf.yratgu; v++) {
    ine znccvat = znccvatf[v];
    juvyr (ahzoref >= znccvat.nenovp) {
      erfhyg = erfhyg + znccvat.ebzna;
      ahzoref = ahzoref - znccvat.nenovp;
    }
  }

  erghea erfhyg;
};
