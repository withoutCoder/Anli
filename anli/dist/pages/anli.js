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
        'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
        'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
        'wxc-avatar': '../../packages/@minui/wxc-avatar/dist/index',
        'wxc-label': '../../packages/@minui/wxc-label/dist/index',
        'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-button': '../../packages/@minui/wxc-button/dist/index'
      }
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      id: '',
      image: ''
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      show_instance: function show_instance(instanceid, instanceimage) {
        this.$navigate({ url: 'instance?instanceid=' + instanceid + '&instanceimage=' + instanceimage });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(p) {
      console.log(p.id);
      console.log(p.image);
      this.id = p.id;
      this.image = p.image;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/anli'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubGkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsInRlc3RNaXhpbiIsImRhdGEiLCJpZCIsImltYWdlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29tcG9uZW50SWQiLCJrZXkiLCJzaG93X2luc3RhbmNlIiwiaW5zdGFuY2VpZCIsImluc3RhbmNlaW1hZ2UiLCIkbmF2aWdhdGUiLCJ1cmwiLCJldmVudHMiLCJwIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDJDQURHO0FBRWYsb0JBQVksMkNBRkc7QUFHZixvQkFBWSwyQ0FIRztBQUlmLHNCQUFjLDZDQUpDO0FBS2YscUJBQWEsNENBTEU7QUFNZixrQkFBVSx5Q0FOSztBQU9mLHlCQUFpQiwwQ0FQRjtBQVFmLHlCQUFpQiwwQ0FSRjtBQVNmLG1CQUFXLDBDQVRJO0FBVWYsc0JBQWM7QUFWQztBQUZWLEssUUFlVEMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUVUQyxJLEdBQU87QUFDTEMsVUFBSSxFQURDO0FBRUxDLGFBQU87QUFGRixLLFFBS1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxlQUFTLGlCQUFTQyxDQUFULEVBQVk7QUFDbkJDLGdCQUFRQyxHQUFSLGtCQUEyQkYsRUFBRUcsTUFBRixDQUFTQyxXQUFwQyxzQkFBZ0VKLEVBQUVHLE1BQUYsQ0FBU0UsR0FBekU7QUFDRCxPQUhPO0FBSVJDLG1CQUpRLHlCQUlPQyxVQUpQLEVBSW1CQyxhQUpuQixFQUlrQztBQUN4QyxhQUFLQyxTQUFMLENBQWUsRUFBQ0MsS0FBSyx5QkFBeUJILFVBQXpCLEdBQXNDLGlCQUF0QyxHQUEwREMsYUFBaEUsRUFBZjtBQUNEO0FBTk8sSyxRQVFWRyxNLEdBQVMsRTs7Ozs7MkJBRUZDLEMsRUFBRztBQUNSWCxjQUFRQyxHQUFSLENBQVlVLEVBQUVqQixFQUFkO0FBQ0FNLGNBQVFDLEdBQVIsQ0FBWVUsRUFBRWhCLEtBQWQ7QUFDQSxXQUFLRCxFQUFMLEdBQVVpQixFQUFFakIsRUFBWjtBQUNBLFdBQUtDLEtBQUwsR0FBYWdCLEVBQUVoQixLQUFmO0FBQ0Q7Ozs7RUExQ2dDaUIsZUFBS0MsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJhbmxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FubGlhJyxcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCcsXG4gICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICd3eGMtYXZhdGFyJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYXZhdGFyL2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCdcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50cyA9IHt9XG5cbiAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICBkYXRhID0ge1xuICAgIGlkOiAnJyxcbiAgICBpbWFnZTogJydcbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDb21wb25lbnRJZDoke2UuZGV0YWlsLmNvbXBvbmVudElkfSx5b3Ugc2VsZWN0ZWQ6JHtlLmRldGFpbC5rZXl9YClcbiAgICB9LFxuICAgIHNob3dfaW5zdGFuY2UgKGluc3RhbmNlaWQsIGluc3RhbmNlaW1hZ2UpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6ICdpbnN0YW5jZT9pbnN0YW5jZWlkPScgKyBpbnN0YW5jZWlkICsgJyZpbnN0YW5jZWltYWdlPScgKyBpbnN0YW5jZWltYWdlfSlcbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQocCkge1xuICAgIGNvbnNvbGUubG9nKHAuaWQpXG4gICAgY29uc29sZS5sb2cocC5pbWFnZSlcbiAgICB0aGlzLmlkID0gcC5pZFxuICAgIHRoaXMuaW1hZ2UgPSBwLmltYWdlXG4gIH1cbn1cbiJdfQ==