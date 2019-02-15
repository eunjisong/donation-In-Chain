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
    key: "donationsList",
    value: function donationsList() {
      var _this2 = this;

      var items = this.props.donationsInstances.map(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(donation, id) {
          var theDonation;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return donation.methods.requests(0).call();

                case 2:
                  theDonation = _context.sent;
                  return _context.abrupt("return", {
                    href: "/donations/" + donation.options.address,
                    image: "/static/" + id + ".png",
                    header: theDonation.description,
                    description: theDonation.description,
                    fluid: true
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, itemsPerRow: 3, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          donationsAddresses = _props.donationsAddresses,
          donationsInstances = _props.donationsInstances;

      console.log(donationsInstances);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.donationsList(), _react2.default.createElement(_routes.Link, { route: "/donations/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "new"))), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_routes.Link, { route: "/donations/" + donationsAddresses[0], __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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

      function getInitialProps(_x3) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return AllDonations;
}(_react2.default.Component);

exports.default = AllDonations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsImRvbmF0aW9uIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJBbGxEb25hdGlvbnMiLCJpdGVtcyIsInByb3BzIiwiZG9uYXRpb25zSW5zdGFuY2VzIiwibWFwIiwiaWQiLCJtZXRob2RzIiwicmVxdWVzdHMiLCJjYWxsIiwidGhlRG9uYXRpb24iLCJocmVmIiwib3B0aW9ucyIsImFkZHJlc3MiLCJpbWFnZSIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJkb25hdGlvbnNBZGRyZXNzZXMiLCJjb25zb2xlIiwibG9nIiwiZG9uYXRpb25zTGlzdCIsImdldERlcGxveWVkRG9uYXRpb25zIiwiYWxsIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwiZWxlIiwiaWR4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0FBRXJCO0FBQ0E7QUFDQTs7SSxBQUVNOzs7Ozs7Ozs7OztvQ0FlVzttQkFDYjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLG1CQUFYLEFBQThCLGdCQUE5Qjs0RkFBbUMsaUJBQUEsQUFBTyxVQUFQLEFBQWlCLElBQWpCO2NBQUE7d0VBQUE7c0JBQUE7K0NBQUE7cUJBQUE7a0NBQUE7eUJBQ3JCLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLEdBREwsQUFDckIsQUFBNkI7O3FCQUFqRDtBQUR5Qyx5Q0FBQTs7MENBR3pCLFNBQUEsQUFBUyxRQUR4QixBQUNnQyxBQUNyQzt3Q0FBQSxBQUFrQixLQUZiLEFBR0w7NEJBQVEsWUFISCxBQUdlLEFBQ3BCO2lDQUFhLFlBSlIsQUFJb0IsQUFDekI7MkJBUDZDLEFBRXhDLEFBS0U7QUFMRixBQUNMOztxQkFINkM7cUJBQUE7a0NBQUE7O0FBQUE7c0JBQUE7QUFBbkM7O2tDQUFBO2tDQUFBO0FBQUE7QUFBZCxBQVVBLFNBVmM7MkNBVVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sVUFBWixNQUFxQixhQUFyQixBQUFrQyxHQUFHLE9BQXJDLEFBQTRDO29CQUE1QztzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBO21CQUM2QyxLQUQ3QyxBQUNrRDtVQURsRCxBQUNDLDRCQURELEFBQ0M7VUFERCxBQUNxQiw0QkFEckIsQUFDcUIsQUFDNUI7O2NBQUEsQUFBUSxJQUFSLEFBQWEsQUFDYjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0s7QUFETDtBQUFBLGNBQUEsQUFDSyxBQUFLLEFBQ04saUNBQUEsQUFBQyw4QkFBSyxPQUFOO29CQUFBO3NCQUFBLEFBQStCO0FBQS9CO3lCQUErQixjQUFBOztvQkFBQTtzQkFBQSxBQUFHO0FBQUg7QUFBQSx5QkFBRyxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FGdEMsQUFFSSxBQUErQixBQUFHLEFBQ2xDLDBCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLHlCQUFLLEFBQUMsOEJBQUssdUJBQXFCLG1CQUEzQixBQUEyQixBQUFtQjtvQkFBOUM7c0JBQUEsQUFBb0Q7QUFBcEQ7eUJBQW9ELGNBQUE7O29CQUFBO3NCQUFBLEFBQUc7QUFBSDtBQUFBLHlCQUFHLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQUxsRSxBQUNFLEFBQ0EsQUFHSSxBQUFLLEFBQW9ELEFBQUcsQUFJbkU7Ozs7OzZHLEFBeEM0Qjs7Ozs7Ozt1QkFDTSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O21CQUFsRTtBOzt5Q0FFMkIsQUFBUSxVQUNqQyxtQkFBTixBQUF5QixRQUF6QixBQUNHLE9BREgsQUFFRyxJQUFLLFVBQUEsQUFBQyxLQUFELEFBQU0sS0FBTjt5QkFBYyxBQUFJLHVCQUFTLG1CQUEzQixBQUFjLEFBQWEsQUFBbUI7QSxBQUh2QixBQUMvQixpQkFBQSxDQUQrQjs7bUJBQTNCO0E7a0RBT0MsRUFBRSxvQkFBRixvQkFBdUIsb0IsQUFBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFYZ0IsZ0JBQU0sQSxBQTRDakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V1bmppc29uZy9Eb2N1bWVudHMvcHJvamVjdC9kb25hdGlvbi1pbi1jaGFpbiJ9