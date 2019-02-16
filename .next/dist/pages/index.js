"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _donation = require("../ethereum/donation.js");

var _donation2 = _interopRequireDefault(_donation);

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
    key: "donationDetail",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var donationsInstances;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                donationsInstances = this.props.donationsInstances;

                donationsInstances.methods.requests(0).call();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function donationDetail() {
        return _ref.apply(this, arguments);
      }

      return donationDetail;
    }()
  }, {
    key: "donationsList",
    value: function donationsList() {
      var items = this.props.donationsInstances.map(function (donation, id) {
        return {
          href: "/donations/" + donation.options.address,
          image: "/static/" + id + ".png",
          header: 'description,',
          description: donation.options.address,
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, itemsPerRow: 3, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          donationsAddresses = _props.donationsAddresses,
          donationsInstances = _props.donationsInstances;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.donationsList(), _react2.default.createElement(_routes.Link, { route: "/donations/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "new"))), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_routes.Link, { route: "/donations/" + donationsAddresses[0], __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Go to one"))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var donationsAddresses, donationsInstances;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.getDeployedDonations().call();

              case 2:
                donationsAddresses = _context2.sent;
                _context2.next = 5;
                return _promise2.default.all(Array(donationsAddresses.length).fill().map(function (ele, idx) {
                  return new _donation2.default(donationsAddresses[idx]);
                }));

              case 5:
                donationsInstances = _context2.sent;
                return _context2.abrupt("return", { donationsAddresses: donationsAddresses, donationsInstances: donationsInstances });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AllDonations;
}(_react2.default.Component);

exports.default = AllDonations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsImRvbmF0aW9uIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJBbGxEb25hdGlvbnMiLCJkb25hdGlvbnNJbnN0YW5jZXMiLCJwcm9wcyIsIm1ldGhvZHMiLCJyZXF1ZXN0cyIsImNhbGwiLCJpdGVtcyIsIm1hcCIsImlkIiwiaHJlZiIsIm9wdGlvbnMiLCJhZGRyZXNzIiwiaW1hZ2UiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiZG9uYXRpb25zQWRkcmVzc2VzIiwiZG9uYXRpb25zTGlzdCIsImdldERlcGxveWVkRG9uYXRpb25zIiwiYWxsIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwiZWxlIiwiaWR4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0FBRXJCO0FBQ0E7QUFDQTs7SUFFTSxBOzs7Ozs7Ozs7Ozs7Ozs7OzttQkFnQkk7QSxxQ0FBc0IsS0FBSyxBLE1BQTNCLEFBQ1AsQTs7bUNBQUEsQUFBbUIsUUFBbkIsQUFBMkIsU0FBM0IsQUFBb0MsR0FBcEMsQUFBdUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHekIsQUFDYjtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsbUJBQVgsQUFBOEIsSUFBSyxVQUFBLEFBQUMsVUFBRCxBQUFXLElBQU8sQUFDakU7O2dDQUNzQixTQUFBLEFBQVMsUUFEeEIsQUFDZ0MsQUFDckM7OEJBQUEsQUFBa0IsS0FGYixBQUdMO2tCQUhLLEFBR0csQUFDUjt1QkFBYSxTQUFBLEFBQVMsUUFKakIsQUFJeUIsQUFDOUI7aUJBTEYsQUFBTyxBQUtFLEFBRVY7QUFQUSxBQUNMO0FBRkosQUFBYyxBQVNkLE9BVGM7MkNBU1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sVUFBWixNQUFxQixhQUFyQixBQUFrQyxHQUFHLE9BQXJDLEFBQTRDO29CQUE1QztzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBO21CQUM2QyxLQUQ3QyxBQUNrRDtVQURsRCxBQUNDLDRCQURELEFBQ0M7VUFERCxBQUNxQiw0QkFEckIsQUFDcUIsQUFFNUI7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFDSztBQURMO0FBQUEsY0FBQSxBQUNLLEFBQUssQUFDTixpQ0FBQSxBQUFDLDhCQUFLLE9BQU47b0JBQUE7c0JBQUEsQUFBK0I7QUFBL0I7eUJBQStCLGNBQUE7O29CQUFBO3NCQUFBLEFBQUc7QUFBSDtBQUFBLHlCQUFHLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQUZ0QyxBQUVJLEFBQStCLEFBQUcsQUFDbEMsMEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEseUJBQUssQUFBQyw4QkFBSyx1QkFBcUIsbUJBQTNCLEFBQTJCLEFBQW1CO29CQUE5QztzQkFBQSxBQUFvRDtBQUFwRDt5QkFBb0QsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBTGxFLEFBQ0UsQUFDQSxBQUdJLEFBQUssQUFBb0QsQUFBRyxBQUluRTs7Ozs7NkcsQUE1QzRCOzs7Ozs7O3VCQUNNLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF1Qzs7bUJBQWxFO0E7O3lDQUUyQixBQUFRLFVBQ2pDLG1CQUFOLEFBQXlCLFFBQXpCLEFBQ0csT0FESCxBQUVHLElBQUssVUFBQSxBQUFDLEtBQUQsQUFBTSxLQUFOO3lCQUFjLEFBQUksdUJBQVMsbUJBQTNCLEFBQWMsQUFBYSxBQUFtQjtBLEFBSHZCLEFBQy9CLGlCQUFBLENBRCtCOzttQkFBM0I7QTtrREFPQyxFQUFFLG9CQUFGLG9CQUF1QixvQixBQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVhnQixnQkFBTSxBLEFBZ0RqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXVuamlzb25nL0RvY3VtZW50cy9wcm9qZWN0L2RvbmF0aW9uLWluLWNoYWluIn0=