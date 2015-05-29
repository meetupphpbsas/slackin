require('slackin')({
  token: 'xoxp-2978261920-2980861454-5108392512-7d0bb1', // required
  interval: 1000,
  org: 'meetphpar', // required
  //channels: 'channel,channel,...' // for single channel mode
  silent: true // suppresses warnings
}).listen(process.env.PORT);