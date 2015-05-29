require('slackin')({
  token: 'xoxp-2978261920-2980861454-5108392512-7d0bb1', // required
  interval: 1000,
  org: 'meetPHPar', // required
  //channels: 'channel,channel,...' // for single channel mode
  silent: false // suppresses warnings
}).listen(process.env.PORT);