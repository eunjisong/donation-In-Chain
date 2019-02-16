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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: "DonationInChain" }, _this.handleClick = function (e, _ref2) {
      var name = _ref2.name;

      _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;

      return _react2.default.createElement(_semanticUiReact.Menu, { pointing: true, secondary: true, style: { marginTop: "30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        href: "/",
        name: "DonationInChain",
        active: activeItem === "DonationInChain",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Donation In Chain"), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        href: "/donations/inprocess",
        name: "InProcess",
        active: activeItem === "InProcess",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "In Process"), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        href: "/donations/completed",
        name: "completed",
        active: activeItem === "completed",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Completed"), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "MyPage",
        href: "/mypage",
        active: activeItem === "MyPage",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "My Page")));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9IZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiU2VnbWVudCIsIkxpbmsiLCJIZWFkZXIiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVDbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTTs7QUFDZixBQUFRLEFBQVc7Ozs7Ozs7SUFFRSxBOzs7Ozs7Ozs7Ozs7Ozs0TSxBQUNuQixRQUFRLEVBQUUsWUFBRixBLEFBQWMsMkJBRXRCLEEsY0FBYyxVQUFBLEFBQUMsVUFBZ0I7VUFBWCxBQUFXLGFBQVgsQUFBVyxBQUM3Qjs7WUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFoQixBQUFjLEFBQWMsQUFFN0I7QTs7Ozs7NkJBQ1E7VUFBQSxBQUNDLGFBQWUsS0FEaEIsQUFDcUIsTUFEckIsQUFDQyxBQUNSOzs2QkFDRSxBQUFDLHVDQUFLLFVBQU4sTUFBZSxXQUFmLE1BQXlCLE9BQU8sRUFBRSxXQUFsQyxBQUFnQyxBQUFhO29CQUE3QztzQkFBQSxBQUVFO0FBRkY7T0FBQSxrQkFFRyxjQUFELHNCQUFBLEFBQU07Y0FBTixBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7Z0JBQVEsZUFIVixBQUd5QixBQUN2QjtpQkFBUyxLQUpYLEFBSWdCOztvQkFKaEI7c0JBQUE7QUFBQTtBQUNFLFNBSEosQUFFRSxBQVNBLHNDQUFDLGNBQUQsc0JBQUEsQUFBTTtjQUFOLEFBQ08sQUFDTDtjQUZGLEFBRU8sQUFDTDtnQkFBUSxlQUhWLEFBR3lCLEFBQ3ZCO2lCQUFTLEtBSlgsQUFJZ0I7O29CQUpoQjtzQkFBQTtBQUFBO0FBQ0UsU0FaSixBQVdFLEFBU0EsK0JBQUMsY0FBRCxzQkFBQSxBQUFNO2NBQU4sQUFDTyxBQUNMO2NBRkYsQUFFTyxBQUNMO2dCQUFRLGVBSFYsQUFHeUIsQUFDdkI7aUJBQVMsS0FKWCxBQUlnQjs7b0JBSmhCO3NCQUFBO0FBQUE7QUFDRSxTQXJCSixBQW9CRSxBQVNBLDhCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQyxjQUFELHNCQUFBLEFBQU07Y0FBTixBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7Z0JBQVEsZUFIVixBQUd5QixBQUN2QjtpQkFBUyxLQUpYLEFBSWdCOztvQkFKaEI7c0JBQUE7QUFBQTtBQUNFLFNBaENOLEFBQ0UsQUE2QkUsQUFDQSxBQWFMOzs7OztFQXJEaUMsZ0JBQU0sQTs7a0JBQXJCLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ldW5qaXNvbmcvRG9jdW1lbnRzL3Byb2plY3QvZG9uYXRpb24taW4tY2hhaW4ifQ==