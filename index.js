require('slackin')({
  token: 'SLACK_KEY', // required
  interval: 1000,
  org: 'meetupphpbuenosaires', // required
  //channels: 'channel,channel,...' // for single channel mode
  silent: true // suppresses warnings
}).listen(process.env.PORT);