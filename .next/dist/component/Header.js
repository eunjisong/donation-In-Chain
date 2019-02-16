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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: '' }, _this.handleClick = function (e, _ref2) {
      var name = _ref2.name;

      if (name !== 'MyPage' || name !== 'index') _routes.Router.pushRoute("/donations/" + name);
      _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;

      console.log(this.props);
      return _react2.default.createElement(_semanticUiReact.Menu, { pointing: true, secondary: true, style: { marginTop: "30px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        href: "/",
        name: "index",
        active: activeItem === "index",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Donation In Chain"), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "inprogress",
        active: activeItem === "inprogress",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "In Progress"), _react2.default.createElement(_semanticUiReact.Menu.Item, {

        name: "completed",
        active: activeItem === "completed",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Completed"), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: "MyPage",
        href: "/mypage",
        active: activeItem === "MyPage",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "My Page")));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9IZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiU2VnbWVudCIsIkxpbmsiLCJSb3V0ZXIiLCJIZWFkZXIiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVDbGljayIsImUiLCJuYW1lIiwicHVzaFJvdXRlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTTs7QUFDZixBQUFRLEFBQU0sQUFBYTs7Ozs7OztJLEFBR047Ozs7Ozs7Ozs7Ozs7OzRNLEFBQ25CLFFBQVEsRUFBRSxZLEFBQUYsQUFBYyxZQUV0QixBLGNBQWMsVUFBQSxBQUFDLFVBQWdCO1VBQVgsQUFBVyxhQUFYLEFBQVcsQUFDN0I7O1VBQUcsU0FBQSxBQUFTLFlBQVksU0FBeEIsQUFBaUMsU0FBVSxlQUFBLEFBQU8sMEJBQVAsQUFBK0IsQUFDMUU7WUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFoQixBQUFjLEFBQWMsQUFDN0I7QTs7Ozs7NkJBQ1E7VUFBQSxBQUNDLGFBQWUsS0FEaEIsQUFDcUIsTUFEckIsQUFDQyxBQUNSOztjQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2pCOzZCQUNFLEFBQUMsdUNBQUssVUFBTixNQUFlLFdBQWYsTUFBeUIsT0FBTyxFQUFFLFdBQWxDLEFBQWdDLEFBQWE7b0JBQTdDO3NCQUFBLEFBRUU7QUFGRjtPQUFBLGtCQUVHLGNBQUQsc0JBQUEsQUFBTTtjQUFOLEFBQ08sQUFDTDtjQUZGLEFBRU8sQUFDTDtnQkFBUSxlQUhWLEFBR3lCLEFBQ3ZCO2lCQUFTLEtBSlgsQUFJZ0I7O29CQUpoQjtzQkFBQTtBQUFBO0FBQ0UsU0FISixBQUVFLEFBU0Esc0NBQUMsY0FBRCxzQkFBQSxBQUFNO2NBQU4sQUFDTyxBQUNMO2dCQUFRLGVBRlYsQUFFeUIsQUFDdkI7aUJBQVMsS0FIWCxBQUdnQjs7b0JBSGhCO3NCQUFBO0FBQUE7QUFDRSxTQVpKLEFBV0UsQUFRQSxnQ0FBQyxjQUFELHNCQUFBLEFBQU07O2NBQU4sQUFFTyxBQUNMO2dCQUFRLGVBSFYsQUFHeUIsQUFDdkI7aUJBQVMsS0FKWCxBQUlnQjs7b0JBSmhCO3NCQUFBO0FBQUE7QUFFRSxTQXJCSixBQW1CRSxBQVNBLDhCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQyxjQUFELHNCQUFBLEFBQU07Y0FBTixBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7Z0JBQVEsZUFIVixBQUd5QixBQUN2QjtpQkFBUyxLQUpYLEFBSWdCOztvQkFKaEI7c0JBQUE7QUFBQTtBQUNFLFNBL0JOLEFBQ0UsQUE0QkUsQUFDQSxBQWFMOzs7OztFQXJEaUMsZ0JBQU0sQTs7a0JBQXJCLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ldW5qaXNvbmcvRG9jdW1lbnRzL3Byb2plY3QvZG9uYXRpb24taW4tY2hhaW4ifQ==