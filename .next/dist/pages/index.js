"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _web = require("../ethereum/web3.js");

var _web2 = _interopRequireDefault(_web);

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
      var items = this.props.instanceDetail.map(function (donation, id) {
        return {
          image: "/static/" + id + ".png",
          header: " donation.product,",
          description: 'div',
          fluid: true,
          onClick: function onClick() {
            return _routes.Router.pushRoute("/donations/" + donation.address);
          }
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { centered: true, itemsPerRow: 3, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          donationsAddresses = _props.donationsAddresses,
          donationsInstances = _props.donationsInstances,
          instanceDetail = _props.instanceDetail;

      console.log(instanceDetail);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.donationsList(), _react2.default.createElement(_routes.Link, { route: "/donations/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "new"))), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_routes.Link, { route: "/donations/" + donationsAddresses[0], __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Go to one"))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var _this2 = this;

        var donationsAddresses, donationsInstances, instanceDetail;
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
                _context2.next = 8;
                return _promise2.default.all(Array(donationsAddresses.length).fill().map(function () {
                  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ele, idx) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return donationsInstances[idx].methods.requests(0).call();

                          case 2:
                            _context.t0 = _context.sent;
                            _context.next = 5;
                            return _web2.default.eth.getBalance(donationsInstances[idx].options.address);

                          case 5:
                            _context.t1 = _context.sent;
                            _context.t2 = donationsAddresses[idx];
                            return _context.abrupt("return", {
                              detail: _context.t0,
                              balance: _context.t1,
                              address: _context.t2
                            });

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, _this2);
                  }));

                  return function (_x2, _x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 8:
                instanceDetail = _context2.sent;
                return _context2.abrupt("return", { donationsAddresses: donationsAddresses, donationsInstances: donationsInstances, instanceDetail: instanceDetail });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsImRvbmF0aW9uIiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJSb3V0ZXIiLCJ3ZWIzIiwiQWxsRG9uYXRpb25zIiwiaXRlbXMiLCJwcm9wcyIsImluc3RhbmNlRGV0YWlsIiwibWFwIiwiaWQiLCJpbWFnZSIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJvbkNsaWNrIiwicHVzaFJvdXRlIiwiYWRkcmVzcyIsImRvbmF0aW9uc0FkZHJlc3NlcyIsImRvbmF0aW9uc0luc3RhbmNlcyIsImNvbnNvbGUiLCJsb2ciLCJkb25hdGlvbnNMaXN0IiwibWV0aG9kcyIsImdldERlcGxveWVkRG9uYXRpb25zIiwiY2FsbCIsImFsbCIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsImVsZSIsImlkeCIsInJlcXVlc3RzIiwiZXRoIiwiZ2V0QmFsYW5jZSIsIm9wdGlvbnMiLCJkZXRhaWwiLCJiYWxhbmNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQWM7O0FBQzdCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCO0FBQ0E7QUFDQTs7SUFFTSxBOzs7Ozs7Ozs7OztvQ0EwQlksQUFDZDtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsZUFBWCxBQUEwQixJQUFJLFVBQUEsQUFBQyxVQUFELEFBQVcsSUFBTyxBQUM1RDs7OEJBQ0UsQUFBa0IsS0FEYixBQUVMO2tCQUZLLEFBRUUsQUFDUDt1QkFISyxBQUdRLEFBQ2I7aUJBSkssQUFJRSxBQUNQO21CQUFTLG1CQUFBO21CQUNQLGVBQUEsQUFBTywwQkFBd0IsU0FEeEIsQUFDUCxBQUF3QztBQU41QyxBQUFPLEFBUVI7QUFSUSxBQUNMO0FBRkosQUFBYyxBQVVkLE9BVmM7MkNBVVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sVUFBWixNQUFxQixhQUFyQixBQUFrQyxHQUFHLE9BQXJDLEFBQTRDO29CQUE1QztzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBO21CQUtILEtBTEcsQUFLRTtVQUxGLEFBRUwsNEJBRkssQUFFTDtVQUZLLEFBR0wsNEJBSEssQUFHTDtVQUhLLEFBSUwsd0JBSkssQUFJTCxBQUVGOztjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUFBLEFBQ0csQUFBSyxBQUNOLGlDQUFBLEFBQUMsOEJBQUssT0FBTjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBSk4sQUFFRSxBQUNFLEFBQ0UsQUFHSiwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLHVCQUFxQixtQkFBM0IsQUFBMkIsQUFBbUI7b0JBQTlDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FaWixBQUNFLEFBQ0UsQUFPRSxBQUNFLEFBQ0UsQUFDRSxBQU9iOzs7Ozs0RyxBQWpFNEI7Ozs7Ozs7Ozt1QkFDTSxrQkFBQSxBQUFRLFFBQVIsQUFDOUIsdUJBQ0EsQSxBQUY4Qjs7bUJBQTNCO0E7O3lDQUkyQixBQUFRLFVBQ2pDLG1CQUFOLEFBQXlCLFFBQXpCLEFBQ0csT0FESCxBQUVHLElBQUksVUFBQSxBQUFDLEtBQUQsQUFBTSxLQUFOO3lCQUFjLEFBQUksdUJBQVMsbUJBQTNCLEFBQWMsQUFBYSxBQUFtQjtBQUh0QixBQUMvQixBLGlCQUFBLENBRCtCOzttQkFBM0I7QTs7eUNBTXVCLEFBQVEsVUFDN0IsbUJBQU4sQUFBeUIsUUFBekIsQUFDRyxPQURILEFBRUcsZ0JBRkg7dUdBRU8saUJBQUEsQUFBTyxLQUFQLEFBQVksS0FBWjtrRkFBQTtnQ0FBQTt5REFBQTsrQkFBQTs0Q0FBQTttQ0FFYSxtQkFBQSxBQUFtQixLQUFuQixBQUF3QixRQUF4QixBQUFnQyxTQUFoQyxBQUF5QyxHQUZ0RCxBQUVhLEFBQTRDOzsrQkFGekQ7bURBQUE7NENBQUE7bUNBR2MsY0FBQSxBQUFLLElBQUwsQUFBUyxXQUFXLG1CQUFBLEFBQW1CLEtBQW5CLEFBQXdCLFFBSDFELEFBR2MsQUFBb0Q7OytCQUhsRTttREFBQTswQ0FJUSxtQkFKUixBQUlRLEFBQW1COztBQUozQiwrQ0FHRDtBQUhDLGdEQUlEO0FBSkMsZ0RBQUE7QUFFRDs7K0JBRkM7K0JBQUE7NENBQUE7O0FBQUE7Z0NBQUE7QUFGUDs7NkNBQUE7NkNBQUE7QUFBQTtBLEFBRDJCLG1CQUMzQixDQUQyQjs7bUJBQXZCO0E7a0RBV0MsRUFBRSxvQkFBRixvQkFBc0Isb0JBQXRCLG9CQUEwQyxnQkFBMUMsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZCZ0IsZ0JBQU0sQSxBQXFFakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2V1bmppc29uZy9Eb2N1bWVudHMvcHJvamVjdC9kb25hdGlvbi1pbi1jaGFpbiJ9