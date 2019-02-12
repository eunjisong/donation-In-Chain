'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DonationFactory = require('./build/DonationFactory.json');

var _DonationFactory2 = _interopRequireDefault(_DonationFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_DonationFactory2.default.interface), '0x536d2ABac689F9111140C20567eD75293058D8d8');

exports.default = instance;

// web3.js 파일에서 프로바이더 삽입한 인스턴트는 있으나,
// 우리 컨트랙트를 삽입한 컨트랙트 인스턴트는 없다
// 여기서 팩토리 컨트랙트 인스턴트를 만들어,
// 프론트에서 사용하도록 할 것이다.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkRvbmF0aW9uRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBQ0EsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFBdEIsWUFBNEQsQUFBNUQsQUFBakIsQUFFQTs7a0JBQWUsQUFBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ldW5qaXNvbmcvRG9jdW1lbnRzL3Byb2plY3QvZG9uYXRpb24taW4tY2hhaW4ifQ==