'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/authorize', 'pages/user', 'pages/homepage', 'pages/notice', 'pages/anli', 'pages/userinfo', 'pages/circle', 'pages/instance', 'pages/addcard', 'pages/addInstance', 'pages/addcircle', 'pages/search', 'pages/addanli', 'pages/addanlipage', 'pages/searchCircle'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#707070',
        selectedColor: '#005b9e',
        backgroundColor: '#fff',
        borderStyle: 'black',
        list: [{
          pagePath: 'pages/homepage',
          selectedIconPath: './images/icon/home_selected.png',
          iconPath: './images/icon/home.png',
          text: 'home'
        }, {
          pagePath: 'pages/notice',
          selectedIconPath: './images/icon/notice_selected.png',
          iconPath: './images/icon/notice.png',
          text: 'message'
        }, {
          pagePath: 'pages/user',
          selectedIconPath: './images/icon/user_selected.png',
          iconPath: './images/icon/user.png',
          text: 'user'
        }]
      }
    }, _this.components = {}, _this.globalData = {
      serverUrl: 'http://192.168.0.102:8080/',
      userInfo: null,
      openId: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJpY29uUGF0aCIsInRleHQiLCJjb21wb25lbnRzIiwiZ2xvYmFsRGF0YSIsInNlcnZlclVybCIsInVzZXJJbmZvIiwib3BlbklkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGlCQURLLEVBRUwsWUFGSyxFQUdMLGdCQUhLLEVBSUwsY0FKSyxFQUtMLFlBTEssRUFNTCxnQkFOSyxFQU9MLGNBUEssRUFRTCxnQkFSSyxFQVNMLGVBVEssRUFVTCxtQkFWSyxFQVdMLGlCQVhLLEVBWUwsY0FaSyxFQWFMLGVBYkssRUFjTCxtQkFkSyxFQWVMLG9CQWZLLENBREE7QUFrQlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FsQkQ7QUF3QlBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMseUJBQWlCLE1BSFg7QUFJTkMscUJBQWEsT0FKUDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsZ0JBREw7QUFFTEMsNEJBQWtCLGlDQUZiO0FBR0xDLG9CQUFVLHdCQUhMO0FBSUxDLGdCQUFNO0FBSkQsU0FBRCxFQUtIO0FBQ0RILG9CQUFVLGNBRFQ7QUFFREMsNEJBQWtCLG1DQUZqQjtBQUdEQyxvQkFBVSwwQkFIVDtBQUlEQyxnQkFBTTtBQUpMLFNBTEcsRUFVSDtBQUNESCxvQkFBVSxZQURUO0FBRURDLDRCQUFrQixpQ0FGakI7QUFHREMsb0JBQVUsd0JBSFQ7QUFJREMsZ0JBQU07QUFKTCxTQVZHO0FBTEE7QUF4QkQsSyxRQStDVEMsVSxHQUFhLEUsUUFJYkMsVSxHQUFhO0FBQ1hDLGlCQUFXLDRCQURBO0FBRVhDLGdCQUFVLElBRkM7QUFHWEMsY0FBUTtBQUhHLEssUUFLYkMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OytCQVhFLENBQUU7Ozs2QkFhSixDQUFFOzs7O0VBL0RnQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9hdXRob3JpemUnLFxuICAgICAgJ3BhZ2VzL3VzZXInLFxuICAgICAgJ3BhZ2VzL2hvbWVwYWdlJyxcbiAgICAgICdwYWdlcy9ub3RpY2UnLFxuICAgICAgJ3BhZ2VzL2FubGknLFxuICAgICAgJ3BhZ2VzL3VzZXJpbmZvJyxcbiAgICAgICdwYWdlcy9jaXJjbGUnLFxuICAgICAgJ3BhZ2VzL2luc3RhbmNlJyxcbiAgICAgICdwYWdlcy9hZGRjYXJkJyxcbiAgICAgICdwYWdlcy9hZGRJbnN0YW5jZScsXG4gICAgICAncGFnZXMvYWRkY2lyY2xlJyxcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxuICAgICAgJ3BhZ2VzL2FkZGFubGknLFxuICAgICAgJ3BhZ2VzL2FkZGFubGlwYWdlJyxcbiAgICAgICdwYWdlcy9zZWFyY2hDaXJjbGUnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjNzA3MDcwJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMDA1YjllJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXG4gICAgICBsaXN0OiBbe1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWVwYWdlJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2ljb24vaG9tZV9zZWxlY3RlZC5wbmcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL2ljb24vaG9tZS5wbmcnLFxuICAgICAgICB0ZXh0OiAnaG9tZSdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ub3RpY2UnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvaWNvbi9ub3RpY2Vfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9pY29uL25vdGljZS5wbmcnLFxuICAgICAgICB0ZXh0OiAnbWVzc2FnZSdcbiAgICAgIH0sIHtcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy91c2VyJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2ljb24vdXNlcl9zZWxlY3RlZC5wbmcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL2ljb24vdXNlci5wbmcnLFxuICAgICAgICB0ZXh0OiAndXNlcidcbiAgICAgIH1dXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudHMgPSB7fVxuXG4gIG9uTGF1bmNoKCkge31cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHNlcnZlclVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMTAyOjgwODAvJyxcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBvcGVuSWQ6ICcnXG4gIH1cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7fVxuXG4gIGV2ZW50cyA9IHt9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==