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
        'wxc-cc': '../../packages/@minui/wxc-cc/dist/index'
      }
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      canIUse: _wepy2.default.canIUse('button.open-type.getUserInfo'),
      isSign: false
    }, _this.computed = {}, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var getopen = new Promise(function (resolve, reject) {
        _wepy2.default.login({
          success: function success(e) {
            _wepy2.default.request({
              url: 'http://192.168.0.106:8080/users/getOpenId',
              data: {
                code: e.code
              },
              header: {
                'content-type': 'application/json'
              },
              success: function success(result) {
                resolve(result);
                console.log('get open id status:' + result.statusCode);
                this.globalData.openId = result.data.openid;
                console.log('openId:' + this.globalData.openId);
              }
            });
          }
        });
      });
      getopen.then(function (r) {
        console.log('正在获取用户<' + r.data.openid + '>的个人信息');
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/users/login',
          data: {
            openId: r.data.openid
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(result) {
            if (result.data !== '') {
              console.log('登陆用户昵称:' + result.data.nickName);
              this.globalData.userInfo = result.data;
              _wepy2.default.switchTab({
                url: 'user'
              });
            }
          }
        });
      });
    }
  }, {
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(e) {
      console.log('bindGetUserInfo');
      if (e.detail.userInfo) {
        console.log('正在授权' + e.detail.userInfo.nickName);
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/users/signUp',
          data: {
            openId: this.$parent.globalData.openId,
            nickName: e.detail.userInfo.nickName,
            gender: e.detail.userInfo.gender,
            avatarUrl: e.detail.userInfo.avatarUrl,
            circleList: ''
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            console.log('status:' + res.statusCode);
            console.log('nickName:' + e.detail.userInfo.nickName);
            this.globalData.userInfo = e.detail.userInfo;
            this.globalData.userInfo.circleList = [];
            _wepy2.default.switchTab({
              url: 'user'
            });
          }
        });
      } else {
        console.log('拒绝授权');
        _wepy2.default.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击了“返回授权”');
            }
          }
        });
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/authorize'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwidGVzdE1peGluIiwiZGF0YSIsImNhbklVc2UiLCJ3ZXB5IiwiaXNTaWduIiwiY29tcHV0ZWQiLCJldmVudHMiLCJtZXRob2RzIiwiZ2V0b3BlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9naW4iLCJzdWNjZXNzIiwiZSIsInJlcXVlc3QiLCJ1cmwiLCJjb2RlIiwiaGVhZGVyIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJnbG9iYWxEYXRhIiwib3BlbklkIiwib3BlbmlkIiwidGhlbiIsInIiLCJuaWNrTmFtZSIsInVzZXJJbmZvIiwic3dpdGNoVGFiIiwiZGV0YWlsIiwiJHBhcmVudCIsImdlbmRlciIsImF2YXRhclVybCIsImNpcmNsZUxpc3QiLCJyZXMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJjb25maXJtIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysa0JBQVU7QUFESztBQUZWLEssUUFNVEMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUVUQyxJLEdBQU87QUFDTEMsZUFBU0MsZUFBS0QsT0FBTCxDQUFhLDhCQUFiLENBREo7QUFFTEUsY0FBUTtBQUZILEssUUFJUEMsUSxHQUFXLEUsUUFFWEMsTSxHQUFTLEUsUUF3RlRDLE8sR0FBVSxFOzs7Ozs2QkF0RkQ7QUFDUCxVQUFJQyxVQUFVLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVD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QyxtQkFBUywrQkFGSTtBQUdiQyxzQkFBWSxLQUhDO0FBSWJDLHVCQUFhLE1BSkE7QUFLYjVCLGlCQUxhLG1CQUtMdUIsR0FMSyxFQUtBO0FBQ1gsZ0JBQUlBLElBQUlNLE9BQVIsRUFBaUI7QUFDZnRCLHNCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNEO0FBQ0Y7QUFUWSxTQUFmO0FBV0Q7QUFDRjs7OztFQXhHZ0NsQixlQUFLd0MsSTs7a0JBQW5CakQsSyIsImZpbGUiOiJhdXRob3JpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FubGlhJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7fVxyXG5cclxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY2FuSVVzZTogd2VweS5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICAgIGlzU2lnbjogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbXB1dGVkID0ge31cclxuXHJcbiAgICBldmVudHMgPSB7fVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IGdldG9wZW4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VweS5sb2dpbih7XHJcbiAgICAgICAgICBzdWNjZXNzIChlKSB7XHJcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzE5Mi4xNjguMC4xMDY6ODA4MC91c2Vycy9nZXRPcGVuSWQnLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvZGU6IGUuY29kZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBvcGVuIGlkIHN0YXR1czonICsgcmVzdWx0LnN0YXR1c0NvZGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbERhdGEub3BlbklkID0gcmVzdWx0LmRhdGEub3BlbmlkXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbklkOicgKyB0aGlzLmdsb2JhbERhdGEub3BlbklkKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBnZXRvcGVuLnRoZW4oKHIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5q2j5Zyo6I635Y+W55So5oi3PCcgKyByLmRhdGEub3BlbmlkICsgJz7nmoTkuKrkurrkv6Hmga8nKVxyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjEwNjo4MDgwL3VzZXJzL2xvZ2luJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgb3BlbklkOiByLmRhdGEub3BlbmlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhICE9PSAnJykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvpmYbnlKjmiLfmmLXnp7A6JyArIHJlc3VsdC5kYXRhLm5pY2tOYW1lKVxyXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAndXNlcidcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBiaW5kR2V0VXNlckluZm8oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnYmluZEdldFVzZXJJbmZvJylcclxuICAgICAgaWYgKGUuZGV0YWlsLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ato+WcqOaOiOadgycgKyBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZSlcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cDovLzE5Mi4xNjguMC4xMDY6ODA4MC91c2Vycy9zaWduVXAnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBvcGVuSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZCxcclxuICAgICAgICAgICAgbmlja05hbWU6IGUuZGV0YWlsLnVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICBnZW5kZXI6IGUuZGV0YWlsLnVzZXJJbmZvLmdlbmRlcixcclxuICAgICAgICAgICAgYXZhdGFyVXJsOiBlLmRldGFpbC51c2VySW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgIGNpcmNsZUxpc3Q6ICcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1czonICsgcmVzLnN0YXR1c0NvZGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduaWNrTmFtZTonICsgZS5kZXRhaWwudXNlckluZm8ubmlja05hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0ID0gW11cclxuICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgIHVybDogJ3VzZXInXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5ouS57ud5o6I5p2DJylcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+itpuWRiicsXHJcbiAgICAgICAgICBjb250ZW50OiAn5oKo54K55Ye75LqG5ouS57ud5o6I5p2D77yM5bCG5peg5rOV6L+b5YWl5bCP56iL5bqP77yM6K+35o6I5p2D5LmL5ZCO5YaN6L+b5YWlISEhJyxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfov5Tlm57mjojmnYMnLFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+S6huKAnOi/lOWbnuaOiOadg+KAnScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge31cclxuICB9XHJcbiJdfQ==