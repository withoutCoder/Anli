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

var Index = function (_wepy$app) {
  _inherits(Index, _wepy$app);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/authorize', 'pages/user', 'pages/homepage', 'pages/notice', 'pages/anli', 'pages/userinfo', 'pages/circle', 'pages/instance', 'pages/addcard', 'pages/addInstance', 'pages/addcircle'],
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
      userInfo: null,
      urlPath: 'https://www.baidu.com/',
      openId: ''
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(Index, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclN0eWxlIiwibGlzdCIsInBhZ2VQYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImljb25QYXRoIiwidGV4dCIsImNvbXBvbmVudHMiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1cmxQYXRoIiwib3BlbklkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZXZlbnRzIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGlCQURLLEVBRUwsWUFGSyxFQUdMLGdCQUhLLEVBSUwsY0FKSyxFQUtMLFlBTEssRUFNTCxnQkFOSyxFQU9MLGNBUEssRUFRTCxnQkFSSyxFQVNMLGVBVEssRUFVTCxtQkFWSyxFQVdMLGlCQVhLLENBREE7QUFjUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQWREO0FBb0JQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHlCQUFpQixNQUhYO0FBSU5DLHFCQUFhLE9BSlA7QUFLTkMsY0FBTSxDQUFDO0FBQ0xDLG9CQUFVLGdCQURMO0FBRUxDLDRCQUFrQixpQ0FGYjtBQUdMQyxvQkFBVSx3QkFITDtBQUlMQyxnQkFBTTtBQUpELFNBQUQsRUFLSDtBQUNESCxvQkFBVSxjQURUO0FBRURDLDRCQUFrQixtQ0FGakI7QUFHREMsb0JBQVUsMEJBSFQ7QUFJREMsZ0JBQU07QUFKTCxTQUxHLEVBVUg7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyw0QkFBa0IsaUNBRmpCO0FBR0RDLG9CQUFVLHdCQUhUO0FBSURDLGdCQUFNO0FBSkwsU0FWRztBQUxBO0FBcEJELEssUUEyQ1RDLFUsR0FBYSxFLFFBSWJDLFUsR0FBYTtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGVBQVMsd0JBRkU7QUFHWEMsY0FBUTtBQUhHLEssUUFLYkMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OytCQVhFLENBQUU7Ozs2QkFhSixDQUFFOzs7O0VBM0RzQkMsZUFBS0MsRzs7a0JBQW5CM0IsSyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9hdXRob3JpemUnLFxuICAgICAgJ3BhZ2VzL3VzZXInLFxuICAgICAgJ3BhZ2VzL2hvbWVwYWdlJyxcbiAgICAgICdwYWdlcy9ub3RpY2UnLFxuICAgICAgJ3BhZ2VzL2FubGknLFxuICAgICAgJ3BhZ2VzL3VzZXJpbmZvJyxcbiAgICAgICdwYWdlcy9jaXJjbGUnLFxuICAgICAgJ3BhZ2VzL2luc3RhbmNlJyxcbiAgICAgICdwYWdlcy9hZGRjYXJkJyxcbiAgICAgICdwYWdlcy9hZGRJbnN0YW5jZScsXG4gICAgICAncGFnZXMvYWRkY2lyY2xlJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzcwNzA3MCcsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzAwNWI5ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJvcmRlclN0eWxlOiAnYmxhY2snLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lcGFnZScsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9pY29uL2hvbWVfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9pY29uL2hvbWUucG5nJyxcbiAgICAgICAgdGV4dDogJ2hvbWUnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbm90aWNlJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2ljb24vbm90aWNlX3NlbGVjdGVkLnBuZycsXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvaWNvbi9ub3RpY2UucG5nJyxcbiAgICAgICAgdGV4dDogJ21lc3NhZ2UnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdXNlcicsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9pY29uL3VzZXJfc2VsZWN0ZWQucG5nJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9pY29uL3VzZXIucG5nJyxcbiAgICAgICAgdGV4dDogJ3VzZXInXG4gICAgICB9XVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRzID0ge31cblxuICBvbkxhdW5jaCgpIHt9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICB1cmxQYXRoOiAnaHR0cHM6Ly93d3cuYmFpZHUuY29tLycsXG4gICAgb3BlbklkOiAnJ1xuICB9XG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge31cblxuICBldmVudHMgPSB7fVxuXG4gIG9uTG9hZCgpIHt9XG59XG4iXX0=