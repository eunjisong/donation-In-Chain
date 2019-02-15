webpackHotUpdate(5,{

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(739);

var _factory2 = _interopRequireDefault(_factory);

var _donation = __webpack_require__(1182);

var _donation2 = _interopRequireDefault(_donation);

var _semanticUiReact = __webpack_require__(591);

var _Layout = __webpack_require__(1165);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(1166);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/eunjisong/Documents/project/donation-in-chain/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eunjisong/Documents/project/donation-in-chain/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xNjAyZDU1Y2QzNDljNjZhZWE1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzVjZDUyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IGRvbmF0aW9uIGZyb20gJy4uL2V0aGVyZXVtL2RvbmF0aW9uLmpzJztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L0xheW91dCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcblxuLy8gZmFjdG9yeTogMHg1MzZkMkFCYWM2ODlGOTExMTE0MEMyMDU2N2VENzUyOTMwNThEOGQ4XG4vLyBkb25hdGlvbiBbMHgyYzFBMUU0MGM4NGFlQWM4M0ViMGQ4ZkMzNDFENTE3NTY5YmM1MDllLDB4YUI1YTUyQWE3N2VEZmMyQzY5OGE3MDU5QTU4MzNCOWZENDU3QWNmOCwweEI3ZTZCMUMzNjU2NWNmMTY5MURmRUQ4ZDllNTQ0M0QwOUJkNzBCMzcsMHhBOERlQTczQzBDMUVGNDVGNzI5YmYxMGJmQzRkNGY2NDk3NWM3OTkzXG4vLyAgICAgICAgICBdXG5cbmNsYXNzIEFsbERvbmF0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBkb25hdGlvbnNBZGRyZXNzZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWREb25hdGlvbnMoKS5jYWxsKCk7XG5cbiAgICBjb25zdCBkb25hdGlvbnNJbnN0YW5jZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIEFycmF5KGRvbmF0aW9uc0FkZHJlc3Nlcy5sZW5ndGgpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCggKGVsZSwgaWR4KSA9PiBuZXcgZG9uYXRpb24oZG9uYXRpb25zQWRkcmVzc2VzW2lkeF0pKVxuICAgICAgICApXG5cblxuICAgIHJldHVybiB7IGRvbmF0aW9uc0FkZHJlc3NlcywgIGRvbmF0aW9uc0luc3RhbmNlcyB9O1xuXG4gIH1cblxuICBkb25hdGlvbnNMaXN0KCl7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmRvbmF0aW9uc0luc3RhbmNlcy5tYXAoIGFzeW5jIChkb25hdGlvbiwgaWQpID0+IHtcbiAgICAgIGNvbnN0IHRoZURvbmF0aW9uID0gYXdhaXQgZG9uYXRpb24ubWV0aG9kcy5yZXF1ZXN0cygwKS5jYWxsKClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IGAvZG9uYXRpb25zLyR7ZG9uYXRpb24ub3B0aW9ucy5hZGRyZXNzfWAsXG4gICAgICAgIGltYWdlOiBgL3N0YXRpYy8ke2lkfS5wbmdgLFxuICAgICAgICBoZWFkZXI6IHRoZURvbmF0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhlRG9uYXRpb24uZGVzY3JpcHRpb24sXG4gICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zUGVyUm93PXszfSBpdGVtcz17aXRlbXN9Lz5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRvbmF0aW9uc0FkZHJlc3NlcywgZG9uYXRpb25zSW5zdGFuY2VzICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyggZG9uYXRpb25zSW5zdGFuY2VzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCA+XG4gICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLmRvbmF0aW9uc0xpc3QoKX1cbiAgICAgICAgICA8TGluayByb3V0ZT17YC9kb25hdGlvbnMvbmV3YH0+PGE+PEJ1dHRvbj5uZXc8L0J1dHRvbj48L2E+PC9MaW5rPlxuICAgICAgICAgIDxkaXY+PExpbmsgcm91dGU9e2AvZG9uYXRpb25zLyR7ZG9uYXRpb25zQWRkcmVzc2VzWzBdfWB9PjxhPjxCdXR0b24+R28gdG8gb25lPC9CdXR0b24+PC9hPjwvTGluaz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGxEb25hdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQW5DQTtBQUNBO0FBREE7OztBQUVBO0FBR0E7QUFGQTtBQUNBO0FBRkE7O0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWkE7QUFDQTtBQTJDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9