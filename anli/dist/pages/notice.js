'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Anlia',
      usingComponents: {
        'wxc-list': '../../packages/@minui/wxc-list/dist/index',
        'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
      }
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      check: true
    }, _this.computed = {}, _this.methods = {
      onCheck: function onCheck() {
        var check = this.data.check;
        this.setData({
          check: !check
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/notice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwidGVzdE1peGluIiwiZGF0YSIsImNoZWNrIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwib25DaGVjayIsInNldERhdGEiLCJldmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksMkNBREc7QUFFZixvQkFBWTtBQUZHO0FBRlYsSyxRQU9UQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPO0FBREYsSyxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLFlBQUlILFFBQVEsS0FBS0QsSUFBTCxDQUFVQyxLQUF0QjtBQUNBLGFBQUtJLE9BQUwsQ0FBYTtBQUNYSixpQkFBTyxDQUFDQTtBQURHLFNBQWI7QUFHRDtBQU5PLEssUUFRVkssTSxHQUFTLEU7Ozs7OzZCQUVBLENBQUU7Ozs7RUE1QnNCQyxlQUFLQyxJOztrQkFBbkJmLEsiLCJmaWxlIjoibm90aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdBbmxpYScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1saXN0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGlzdC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgY2hlY2s6IHRydWVcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25DaGVjaygpIHtcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5kYXRhLmNoZWNrXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgY2hlY2s6ICFjaGVja1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7fVxuXG4gICAgb25Mb2FkKCkge31cbiAgfVxuIl19