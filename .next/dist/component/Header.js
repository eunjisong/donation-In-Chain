"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/eunjisong/Documents/project/donation-in-chain/component/Header.js";


var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: '' }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: "render",
    value: function render() {

      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_routes.Link, { to: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Donation In Chain")), _react2.default.createElement(_routes.Link, { to: "/donations/inprogress", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "In Progress")), _react2.default.createElement(_routes.Link, { to: "/donations/completed", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Complete")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_routes.Link, { to: "/mypage", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("a", { className: "item", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "My Page"))));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9IZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiTGluayIsIkhlYWRlciIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFRLEFBQVc7Ozs7Ozs7SUFHRSxBOzs7Ozs7Ozs7Ozs7Ozs0TUFDbkIsQSxRQUFRLEVBQUUsWSxBQUFGLEFBQWM7Ozs7OzZCQUViLEFBR1A7OzZCQUNFLEFBQUMsdUNBQU0sT0FBTyxFQUFFLFdBQWhCLEFBQWMsQUFBYTtvQkFBM0I7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyw4QkFBSyxJQUFOLEFBQVM7b0JBQVQ7c0JBQUEsQUFBYTtBQUFiO3lCQUFhLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUE7QUFBQTtTQURmLEFBQ0UsQUFBYSxBQUNiLHVDQUFBLEFBQUMsOEJBQUssSUFBTixBQUFTO29CQUFUO3NCQUFBLEFBQWlDO0FBQWpDO3lCQUFpQyxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FGbkMsQUFFRSxBQUFpQyxBQUNqQyxpQ0FBQSxBQUFDLDhCQUFLLElBQU4sQUFBUztvQkFBVDtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQTtBQUFBO1NBSGxDLEFBR0UsQUFBZ0MsQUFDaEMsOEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtvQkFBcEI7c0JBQUEsQUFBNEI7QUFBNUI7eUJBQTRCLEFBQUMsOEJBQUssSUFBTixBQUFTO29CQUFUO3NCQUFBLEFBQW1CO0FBQW5CO3lCQUFtQixjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FMbkQsQUFDRSxBQUlFLEFBQTRCLEFBQW1CLEFBR3BEOzs7OztFQWRpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V1bmppc29uZy9Eb2N1bWVudHMvcHJvamVjdC9kb25hdGlvbi1pbi1jaGFpbiJ9