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
      navigationBarTitleText: '添加新卡片',
      usingComponents: {
        'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-input': '../../packages/@minui/wxc-input/dist/index'
      }
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {}, _this.methods = {
      formSubmit: function formSubmit(e) {
        var that = this;
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/circle/insert',
          data: {
            openId: this.$parent.globalData.openId,
            name: e.detail.value.name,
            color: e.detail.value.color,
            attributes: '属性1,属性2,属性3'
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            that.addCircle(e.detail.value.name);
            console.log('创建新圈子：', e.detail.value);
          }
        });
      },
      formReset: function formReset() {
        console.log('form发生了reset事件');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'addCircle',
    value: function addCircle(name) {
      var that = this;
      _wepy2.default.request({
        url: 'http://192.168.0.106:8080/users/addCircle',
        data: {
          openId: this.$parent.globalData.openId,
          name: name
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          this.globalData.userInfo.circleList.push(name);
          that.$apply();
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/addcircle'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNpcmNsZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwidGVzdE1peGluIiwiZGF0YSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsInRoYXQiLCJ3ZXB5IiwicmVxdWVzdCIsInVybCIsIm9wZW5JZCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwibmFtZSIsImRldGFpbCIsInZhbHVlIiwiY29sb3IiLCJhdHRyaWJ1dGVzIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImFkZENpcmNsZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtUmVzZXQiLCJ1c2VySW5mbyIsImNpcmNsZUxpc3QiLCJwdXNoIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksMkNBREc7QUFFZix5QkFBaUIsMENBRkY7QUFHZix5QkFBaUIsMENBSEY7QUFJZixxQkFBYTtBQUpFO0FBRlYsSyxRQVVUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTyxFLFFBbUJQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dDLENBREgsRUFDTTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUsseUNBRE07QUFFWFAsZ0JBQU07QUFDSlEsb0JBQVEsS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCRixNQUQ1QjtBQUVKRyxrQkFBTVIsRUFBRVMsTUFBRixDQUFTQyxLQUFULENBQWVGLElBRmpCO0FBR0pHLG1CQUFPWCxFQUFFUyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsS0FIbEI7QUFJSkMsd0JBQVk7QUFKUixXQUZLO0FBUVhDLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FSRztBQVdYQyxpQkFYVyxtQkFXRkMsR0FYRSxFQVdHO0FBQ1pkLGlCQUFLZSxTQUFMLENBQWVoQixFQUFFUyxNQUFGLENBQVNDLEtBQVQsQ0FBZUYsSUFBOUI7QUFDQVMsb0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCbEIsRUFBRVMsTUFBRixDQUFTQyxLQUEvQjtBQUNEO0FBZFUsU0FBYjtBQWdCRCxPQW5CTztBQW9CUlMsZUFwQlEsdUJBb0JJO0FBQ1ZGLGdCQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDtBQXRCTyxLOzs7Ozs4QkFqQkFWLEksRUFBTTtBQUNkLFVBQUlQLE9BQU8sSUFBWDtBQUNBQyxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGFBQUssMkNBRE07QUFFWFAsY0FBTTtBQUNKUSxrQkFBUSxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JGLE1BRDVCO0FBRUpHLGdCQUFNQTtBQUZGLFNBRks7QUFNWEssZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQU5HO0FBU1hDLGVBVFcsbUJBU0ZDLEdBVEUsRUFTRztBQUNaLGVBQUtSLFVBQUwsQ0FBZ0JhLFFBQWhCLENBQXlCQyxVQUF6QixDQUFvQ0MsSUFBcEMsQ0FBeUNkLElBQXpDO0FBQ0FQLGVBQUtzQixNQUFMO0FBQ0Q7QUFaVSxPQUFiO0FBY0Q7Ozs2QkEwQlEsQ0FBRTs7OztFQTNEc0JyQixlQUFLc0IsSTs7a0JBQW5CbEMsSyIsImZpbGUiOiJhZGRjaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5re75Yqg5paw5Y2h54mHJyxcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxyXG4gICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcclxuICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICd3eGMtaW5wdXQnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pbnB1dC9kaXN0L2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50cyA9IHt9XHJcblxyXG4gIG1peGlucyA9IFt0ZXN0TWl4aW5dXHJcblxyXG4gIGRhdGEgPSB7fVxyXG5cclxuICBhZGRDaXJjbGUobmFtZSkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjEwNjo4MDgwL3VzZXJzL2FkZENpcmNsZScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBvcGVuSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZCxcclxuICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgIH0sXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpcmNsZUxpc3QucHVzaChuYW1lKVxyXG4gICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGZvcm1TdWJtaXQoZSkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXNcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjEwNjo4MDgwL2NpcmNsZS9pbnNlcnQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkLFxyXG4gICAgICAgICAgbmFtZTogZS5kZXRhaWwudmFsdWUubmFtZSxcclxuICAgICAgICAgIGNvbG9yOiBlLmRldGFpbC52YWx1ZS5jb2xvcixcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6ICflsZ7mgKcxLOWxnuaApzIs5bGe5oCnMydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICB0aGF0LmFkZENpcmNsZShlLmRldGFpbC52YWx1ZS5uYW1lKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+WIm+W7uuaWsOWciOWtkO+8micsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge31cclxufVxyXG4iXX0=