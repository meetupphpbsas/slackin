require('slackin')({
  token: 'xoxp-5108888872-5108888878-5130468579-c30317', // required
  interval: 1000,
  org: 'meetupphpbuenosaires', // required
  //channels: 'channel,channel,...' // for single channel mode
  silent: true // suppresses warnings
}).listen(process.env.PORT);