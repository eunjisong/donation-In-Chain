'use strict';

var routes = require('next-routes')();

routes.add('/donations/new', '/donations/new').add('/donations/inprogress', '/donations/inprogress').add('/donations/completed', '/donations/completed').add('/donations/:address', 'donations/SingleDonation');

// routes
//   .add('/campaigns/new', '/campaigns/new')
//   .add('/campaigns/:address', '/campaigns/show')
//   .add('/campaigns/:address/requests', '/campaigns/requests/index')
//   .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

//   // arguments: url, location of the file
// // campaigns/new 도 campaigns/show로 가는건 new===address로 판단해서 곧장 캠페인/쇼로 가는 것


module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QixrQkFFRyxBQUZILElBRU8sQUFGUCx5QkFFZ0MsQUFGaEMseUJBR0csQUFISCxJQUdPLEFBSFAsd0JBRytCLEFBSC9CLHdCQUlHLEFBSkgsSUFJTyxBQUpQLHVCQUk4QixBQUo5Qjs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUlBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V1bmppc29uZy9Eb2N1bWVudHMvcHJvamVjdC9kb25hdGlvbi1pbi1jaGFpbiJ9