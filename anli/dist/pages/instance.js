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
      isFold: true,
      instanceid: '',
      instanceimage: '',
      labels: [{ title: '电影', color: '#ff0077' }, { title: 'dc', color: '#747bb1' }, { title: '漫改', color: '#19be6b' }, { title: '蝙蝠侠', color: '#ff9900' }, { title: '超级英雄', color: '#ed3f14' }]
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      classRecommend: function classRecommend(classname) {
        this.$navigate({ url: 'anliByClass?classname=' + classname });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'showAll',
    value: function showAll() {
      this.isFold = !this.isFold;
      console.log(this.data.isFold);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(p) {
      console.log(p.instanceid);
      console.log(p.instanceimage);
      this.instanceid = p.instanceid;
      this.instanceimage = p.instanceimage;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/instance'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwiaXNGb2xkIiwiaW5zdGFuY2VpZCIsImluc3RhbmNlaW1hZ2UiLCJsYWJlbHMiLCJ0aXRsZSIsImNvbG9yIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29tcG9uZW50SWQiLCJrZXkiLCJjbGFzc1JlY29tbWVuZCIsImNsYXNzbmFtZSIsIiRuYXZpZ2F0ZSIsInVybCIsImV2ZW50cyIsInAiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksMkNBREc7QUFFZixvQkFBWSwyQ0FGRztBQUdmLG9CQUFZLDJDQUhHO0FBSWYsc0JBQWMsNkNBSkM7QUFLZixxQkFBYSw0Q0FMRTtBQU1mLGtCQUFVLHlDQU5LO0FBT2YseUJBQWlCLDBDQVBGO0FBUWYseUJBQWlCLDBDQVJGO0FBU2YsbUJBQVcsMENBVEk7QUFVZixzQkFBYztBQVZDO0FBRlYsSyxRQWVUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTztBQUNMQyxjQUFRLElBREg7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxxQkFBZSxFQUhWO0FBSUxDLGNBQVEsQ0FDTixFQUFDQyxPQUFPLElBQVIsRUFBY0MsT0FBTyxTQUFyQixFQURNLEVBRU4sRUFBQ0QsT0FBTyxJQUFSLEVBQWNDLE9BQU8sU0FBckIsRUFGTSxFQUdOLEVBQUNELE9BQU8sSUFBUixFQUFjQyxPQUFPLFNBQXJCLEVBSE0sRUFJTixFQUFDRCxPQUFPLEtBQVIsRUFBZUMsT0FBTyxTQUF0QixFQUpNLEVBS04sRUFBQ0QsT0FBTyxNQUFSLEVBQWdCQyxPQUFPLFNBQXZCLEVBTE07QUFKSCxLLFFBYVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxlQUFTLGlCQUFTQyxDQUFULEVBQVk7QUFDbkJDLGdCQUFRQyxHQUFSLGtCQUEyQkYsRUFBRUcsTUFBRixDQUFTQyxXQUFwQyxzQkFBZ0VKLEVBQUVHLE1BQUYsQ0FBU0UsR0FBekU7QUFDRCxPQUhPO0FBSVJDLG9CQUpRLDBCQUlRQyxTQUpSLEVBSW1CO0FBQ3pCLGFBQUtDLFNBQUwsQ0FBZSxFQUFDQyxLQUFLLDJCQUEyQkYsU0FBakMsRUFBZjtBQUNEO0FBTk8sSyxRQVFWRyxNLEdBQVMsRTs7Ozs7OEJBRUU7QUFDVCxXQUFLbkIsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDQVUsY0FBUUMsR0FBUixDQUFZLEtBQUtaLElBQUwsQ0FBVUMsTUFBdEI7QUFDRDs7OzJCQUVNb0IsQyxFQUFHO0FBQ1JWLGNBQVFDLEdBQVIsQ0FBWVMsRUFBRW5CLFVBQWQ7QUFDQVMsY0FBUUMsR0FBUixDQUFZUyxFQUFFbEIsYUFBZDtBQUNBLFdBQUtELFVBQUwsR0FBa0JtQixFQUFFbkIsVUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCa0IsRUFBRWxCLGFBQXZCO0FBQ0Q7Ozs7RUF2RGdDbUIsZUFBS0MsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQW5saWEnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtYXZhdGFyJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYXZhdGFyL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtY2MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAnd3hjLXRhYic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlzRm9sZDogdHJ1ZSxcbiAgICAgIGluc3RhbmNlaWQ6ICcnLFxuICAgICAgaW5zdGFuY2VpbWFnZTogJycsXG4gICAgICBsYWJlbHM6IFtcbiAgICAgICAge3RpdGxlOiAn55S15b2xJywgY29sb3I6ICcjZmYwMDc3J30sXG4gICAgICAgIHt0aXRsZTogJ2RjJywgY29sb3I6ICcjNzQ3YmIxJ30sXG4gICAgICAgIHt0aXRsZTogJ+a8q+aUuScsIGNvbG9yOiAnIzE5YmU2Yid9LFxuICAgICAgICB7dGl0bGU6ICfonZnonaDkvqAnLCBjb2xvcjogJyNmZjk5MDAnfSxcbiAgICAgICAge3RpdGxlOiAn6LaF57qn6Iux6ZuEJywgY29sb3I6ICcjZWQzZjE0J31cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25DbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApXG4gICAgICB9LFxuICAgICAgY2xhc3NSZWNvbW1lbmQgKGNsYXNzbmFtZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnYW5saUJ5Q2xhc3M/Y2xhc3NuYW1lPScgKyBjbGFzc25hbWV9KVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7fVxuXG4gICAgc2hvd0FsbCAoKSB7XG4gICAgICB0aGlzLmlzRm9sZCA9ICF0aGlzLmlzRm9sZFxuICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmlzRm9sZClcbiAgICB9XG5cbiAgICBvbkxvYWQocCkge1xuICAgICAgY29uc29sZS5sb2cocC5pbnN0YW5jZWlkKVxuICAgICAgY29uc29sZS5sb2cocC5pbnN0YW5jZWltYWdlKVxuICAgICAgdGhpcy5pbnN0YW5jZWlkID0gcC5pbnN0YW5jZWlkXG4gICAgICB0aGlzLmluc3RhbmNlaW1hZ2UgPSBwLmluc3RhbmNlaW1hZ2VcbiAgICB9XG4gIH1cbiJdfQ==