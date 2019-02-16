const routes = require('next-routes')();

routes
  .add('/donations/new', '/donations/DonationForm')
  .add('/donations/inprocess', '/donations/InProcess')
  .add('/donations/completed', '/donations/Completed')
  .add('/donations/:address', 'donations/SingleDonation');


// routes
//   .add('/campaigns/new', '/campaigns/new')
//   .add('/campaigns/:address', '/campaigns/show')
//   .add('/campaigns/:address/requests', '/campaigns/requests/index')
//   .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

//   // arguments: url, location of the file
// // campaigns/new 도 campaigns/show로 가는건 new===address로 판단해서 곧장 캠페인/쇼로 가는 것



module.exports = routes;
