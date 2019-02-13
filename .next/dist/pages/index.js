"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _factory = require("../ethereum/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../component/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/eunjisong/Documents/project/donation-in-chain/pages/index.js?entry";


// factory: 0x536d2ABac689F9111140C20567eD75293058D8d8
// donation [0x2c1A1E40c84aeAc83Eb0d8fC341D517569bc509e,0xaB5a52Aa77eDfc2C698a7059A5833B9fD457Acf8,0xB7e6B1C36565cf1691DfED8d9e5443D09Bd70B37,0xA8DeA73C0C1EF45F729bf10bfC4d4f64975c7993
//          ]

var AllDonations = function (_React$Component) {
  (0, _inherits3.default)(AllDonations, _React$Component);

  function AllDonations() {
    (0, _classCallCheck3.default)(this, AllDonations);

    return (0, _possibleConstructorReturn3.default)(this, (AllDonations.__proto__ || (0, _getPrototypeOf2.default)(AllDonations)).apply(this, arguments));
  }

  (0, _createClass3.default)(AllDonations, [{
    key: "donationsList",
    value: function donationsList() {
      var items = this.props.donations.map(function (donation, id) {

        return {
          href: "/donations/" + donation,
          image: "/static/" + id + ".png",
          header: "here",
          description: donation,
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, itemsPerRow: 3, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var donations = this.props.donations;

      console.log(donations);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.donationsList(), _react2.default.createElement(_routes.Link, { route: "/donations/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "new"))), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_routes.Link, { route: "/donations/" + donations[0], __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Go to one"))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var donations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedDonations().call();

              case 2:
                donations = _context.sent;
                return _context.abrupt("return", { donations: donations });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AllDonations;
}(_react2.default.Component);

exports.default = AllDonations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQWxsRG9uYXRpb25zIiwiaXRlbXMiLCJwcm9wcyIsImRvbmF0aW9ucyIsIm1hcCIsImRvbmF0aW9uIiwiaWQiLCJocmVmIiwiaW1hZ2UiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsImRvbmF0aW9uc0xpc3QiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWREb25hdGlvbnMiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztBQUVyQjtBQUNBO0FBQ0E7O0lBRU0sQTs7Ozs7Ozs7Ozs7b0NBTVcsQUFDYjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFLLFVBQUEsQUFBQyxVQUFELEFBQVcsSUFBTyxBQUV4RDs7O2dDQUFPLEFBQ2UsQUFDcEI7OEJBQUEsQUFBa0IsS0FGYixBQUdMO2tCQUhLLEFBR0csQUFDUjt1QkFKSyxBQUlRLEFBQ2I7aUJBTEYsQUFBTyxBQUtFLEFBRVY7QUFQUSxBQUNMO0FBSEosQUFBYyxBQVVkLE9BVmM7MkNBVVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sVUFBWixNQUFxQixhQUFyQixBQUFrQyxHQUFHLE9BQXJDLEFBQTRDO29CQUE1QztzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBO1VBQUEsQUFDQyxZQUFjLEtBRGYsQUFDb0IsTUFEcEIsQUFDQyxBQUNSOztjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNLO0FBREw7QUFBQSxjQUFBLEFBQ0ssQUFBSyxBQUNOLGlDQUFBLEFBQUMsOEJBQUssT0FBTjtvQkFBQTtzQkFBQSxBQUErQjtBQUEvQjt5QkFBK0IsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBRnRDLEFBRUksQUFBK0IsQUFBRyxBQUNsQywwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSx5QkFBSyxBQUFDLDhCQUFLLHVCQUFxQixVQUEzQixBQUEyQixBQUFVO29CQUFyQztzQkFBQSxBQUEyQztBQUEzQzt5QkFBMkMsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBTHpELEFBQ0UsQUFDQSxBQUdJLEFBQUssQUFBMkMsQUFBRyxBQUkxRDs7Ozs7MkdBL0I0QixBOzs7Ozs7O3VCQUNILGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7bUJBQXpEO0E7aURBQ0MsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFIZ0IsZ0JBQU0sQSxBQW1DakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V1bmppc29uZy9Eb2N1bWVudHMvcHJvamVjdC9kb25hdGlvbi1pbi1jaGFpbiJ9