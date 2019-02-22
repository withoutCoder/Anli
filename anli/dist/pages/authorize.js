'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var authorize = function (_wepy$page) {
  _inherits(authorize, _wepy$page);

  function authorize() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, authorize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = authorize.__proto__ || Object.getPrototypeOf(authorize)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Anlia',
      usingComponents: {
        'wxc-cc': '../../packages/@minui/wxc-cc/dist/index'
      }
    }, _this.components = {}, _this.data = {
      canIUse: _wepy2.default.canIUse('button.open-type.getUserInfo'),
      isSign: false
    }, _this.computed = {}, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(authorize, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        var that = _this2;
        _wepy2.default.login({
          success: function success(e) {
            _wepy2.default.request({
              url: that.$parent.globalData.serverUrl + 'users/getOpenId',
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
      }).then(function (r) {
        var that = _this2;
        console.log('正在获取用户<' + r.data.openid + '>的个人信息');
        _wepy2.default.request({
          url: that.$parent.globalData.serverUrl + 'users/login',
          data: {
            openId: r.data.openid
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(result) {
            if (result.data !== '') {
              that.$parent.globalData.userInfo = result.data;
              if (typeof this.globalData.userInfo.circleList === 'undefined') {
                that.globalData.userInfo.circleList = [];
              }
              console.log(result);
              _wepy2.default.switchTab({
                url: 'user'
              });
            }
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.load();
    }
  }, {
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(e) {
      console.log(e.detail.userInfo);
      if (e.detail.userInfo) {
        var that = this;
        console.log('正在授权' + e.detail.userInfo.nickName);
        _wepy2.default.request({
          url: that.$parent.globalData.serverUrl + 'users/signUp',
          data: {
            openId: that.$parent.globalData.openId,
            nickName: e.detail.userInfo.nickName,
            gender: e.detail.userInfo.gender,
            avatarUrl: e.detail.userInfo.avatarUrl,
            circleList: ''
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            console.log(res);
            this.globalData.userInfo = res.data;
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

  return authorize;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(authorize , 'pages/authorize'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS5qcyJdLCJuYW1lcyI6WyJhdXRob3JpemUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjYW5JVXNlIiwid2VweSIsImlzU2lnbiIsImNvbXB1dGVkIiwiZXZlbnRzIiwibWV0aG9kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhhdCIsImxvZ2luIiwic3VjY2VzcyIsImUiLCJyZXF1ZXN0IiwidXJsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzZXJ2ZXJVcmwiLCJjb2RlIiwiaGVhZGVyIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXR1c0NvZGUiLCJvcGVuSWQiLCJvcGVuaWQiLCJ0aGVuIiwiciIsInVzZXJJbmZvIiwiY2lyY2xlTGlzdCIsInN3aXRjaFRhYiIsImxvYWQiLCJkZXRhaWwiLCJuaWNrTmFtZSIsImdlbmRlciIsImF2YXRhclVybCIsInJlcyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysa0JBQVU7QUFESztBQUZWLEssUUFNVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGVBQVNDLGVBQUtELE9BQUwsQ0FBYSw4QkFBYixDQURKO0FBRUxFLGNBQVE7QUFGSCxLLFFBSVBDLFEsR0FBVyxFLFFBRVhDLE0sR0FBUyxFLFFBZ0dUQyxPLEdBQVUsRTs7Ozs7MkJBOUZIO0FBQUE7O0FBQ0wsVUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQixZQUFJQyxPQUFPLE1BQVg7QUFDQVIs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R0FBMkJRLElBQUlyQyxJQUEvQjtBQUNBLGlCQUFLaUIsVUFBTCxDQUFnQlksUUFBaEIsQ0FBeUJDLFVBQXpCLEdBQXNDLEVBQXRDO0FBQ0E1QiwyQkFBSzZCLFNBQUwsQ0FBZTtBQUNiaEIsbUJBQUs7QUFEUSxhQUFmO0FBR0Q7QUFuQlUsU0FBYjtBQXFCRCxPQXhCRCxNQXdCTztBQUNMTyxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQXJCLHVCQUFLb0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPLElBRE07QUFFYkMsbUJBQVMsK0JBRkk7QUFHYkMsc0JBQVksS0FIQztBQUliQyx1QkFBYSxNQUpBO0FBS2I5QixpQkFMYSxtQkFLTHlCLEdBTEssRUFLQTtBQUNYLGdCQUFJQSxJQUFJTSxPQUFSLEVBQWlCO0FBQ2ZyQixzQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDRDtBQUNGO0FBVFksU0FBZjtBQVdEO0FBQ0Y7Ozs7RUE5R29DckIsZUFBSzBDLEk7O2tCQUF2QmpELFMiLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGF1dGhvcml6ZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FubGlhJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBkYXRhID0ge1xuICAgICAgY2FuSVVzZTogd2VweS5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgICBpc1NpZ246IGZhbHNlXG4gICAgfVxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBsb2FkKCkge1xuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgd2VweS5sb2dpbih7XG4gICAgICAgICAgc3VjY2VzcyAoZSkge1xuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAndXNlcnMvZ2V0T3BlbklkJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNvZGU6IGUuY29kZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgb3BlbiBpZCBzdGF0dXM6JyArIHJlc3VsdC5zdGF0dXNDb2RlKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5vcGVuSWQgPSByZXN1bHQuZGF0YS5vcGVuaWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbklkOicgKyB0aGlzLmdsb2JhbERhdGEub3BlbklkKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjojrflj5bnlKjmiLc8JyArIHIuZGF0YS5vcGVuaWQgKyAnPueahOS4quS6uuS/oeaBrycpXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAndXNlcnMvbG9naW4nLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5JZDogci5kYXRhLm9wZW5pZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXN1bHQuZGF0YVxuICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdCkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpcmNsZUxpc3QgPSBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgIHVybDogJ3VzZXInXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLmxvYWQoKVxuICAgIH1cblxuICAgIGJpbmRHZXRVc2VySW5mbyhlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC51c2VySW5mbylcbiAgICAgIGlmIChlLmRldGFpbC51c2VySW5mbykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgY29uc29sZS5sb2coJ+ato+WcqOaOiOadgycgKyBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZSlcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICd1c2Vycy9zaWduVXAnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5JZDogdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkLFxuICAgICAgICAgICAgbmlja05hbWU6IGUuZGV0YWlsLnVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgZ2VuZGVyOiBlLmRldGFpbC51c2VySW5mby5nZW5kZXIsXG4gICAgICAgICAgICBhdmF0YXJVcmw6IGUuZGV0YWlsLnVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgIGNpcmNsZUxpc3Q6ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLmRhdGFcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0ID0gW11cbiAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiAndXNlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+aLkue7neaOiOadgycpXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+itpuWRiicsXG4gICAgICAgICAgY29udGVudDogJ+aCqOeCueWHu+S6huaLkue7neaOiOadg++8jOWwhuaXoOazlei/m+WFpeWwj+eoi+W6j++8jOivt+aOiOadg+S5i+WQjuWGjei/m+WFpSEhIScsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgY29uZmlybVRleHQ6ICfov5Tlm57mjojmnYMnLFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+S6huKAnOi/lOWbnuaOiOadg+KAnScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge31cbiAgfVxuIl19