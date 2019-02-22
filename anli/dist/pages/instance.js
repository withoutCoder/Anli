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
        'wxc-elip': '../../packages/@minui/wxc-elip/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-button': '../../packages/@minui/wxc-button/dist/index'
      }
    }, _this.components = {}, _this.data = {
      instance: null,
      instanceId: null,
      anlis: null,
      urls: []
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      classRecommend: function classRecommend(classname) {
        this.$navigate({ url: 'anliByClass?classname=' + classname });
      },
      openSheet: function openSheet() {
        _wepy2.default.showActionSheet({
          itemList: ['收藏', '举报'],
          success: function success(res) {
            if (res.tapIndex === 0) {
              _wepy2.default.showToast({
                title: '收藏'
              });
            } else if (res.tapIndex === 1) {
              _wepy2.default.showToast({
                title: '举报'
              });
            }
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getInstance',
    value: function getInstance() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this2.$parent.globalData.serverUrl + 'instances/getInstanceById',
          data: {
            instanceId: _this2.instanceId
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            resolve(res.data);
          }
        });
      }).then(function (result) {
        _this2.instance = result;
        _this2.urls.push(_this2.instance.picturePath);
        _this2.$apply();
        console.log(_this2.instance);
      });
    }
  }, {
    key: 'getAnliByInstanceId',
    value: function getAnliByInstanceId() {
      var _this3 = this;

      new Promise(function (resolve, reject) {
        var that = _this3;
        _wepy2.default.request({
          url: _this3.$parent.globalData.serverUrl + 'anli/getAnliByInstanceId',
          data: {
            instanceId: _this3.instanceId
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            var a = res.data;
            for (var i in a) {
              if (a[i].instanceId2 === that.instanceId) {
                a[i].instanceId2 = a[i].instanceId1;
                a[i].instanceImage2 = a[i].instanceImage1;
                a[i].instanceName2 = a[i].instanceName1;
              }
            }
            resolve(a);
          }
        });
      }).then(function (result) {
        _this3.anlis = result;
        _this3.$apply();
      });
    }
  }, {
    key: 'previewImage',
    value: function previewImage(e) {
      _wepy2.default.previewImage({
        current: '', // 当前显示图片的http链接
        urls: this.urls // 需要预览的图片http链接列表
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(p) {
      this.instanceId = p.instanceId;
      this.getInstance();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getAnliByInstanceId();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/instance'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbmNlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW5zdGFuY2UiLCJpbnN0YW5jZUlkIiwiYW5saXMiLCJ1cmxzIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29tcG9uZW50SWQiLCJrZXkiLCJjbGFzc1JlY29tbWVuZCIsImNsYXNzbmFtZSIsIiRuYXZpZ2F0ZSIsInVybCIsIm9wZW5TaGVldCIsIndlcHkiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInN1Y2Nlc3MiLCJyZXMiLCJ0YXBJbmRleCIsInNob3dUb2FzdCIsInRpdGxlIiwiZXZlbnRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzZXJ2ZXJVcmwiLCJoZWFkZXIiLCJ0aGVuIiwicmVzdWx0IiwicHVzaCIsInBpY3R1cmVQYXRoIiwiJGFwcGx5IiwidGhhdCIsImEiLCJpIiwiaW5zdGFuY2VJZDIiLCJpbnN0YW5jZUlkMSIsImluc3RhbmNlSW1hZ2UyIiwiaW5zdGFuY2VJbWFnZTEiLCJpbnN0YW5jZU5hbWUyIiwiaW5zdGFuY2VOYW1lMSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJwIiwiZ2V0SW5zdGFuY2UiLCJnZXRBbmxpQnlJbnN0YW5jZUlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDJDQURHO0FBRWYsb0JBQVksMkNBRkc7QUFHZixvQkFBWSwyQ0FIRztBQUlmLHNCQUFjLDZDQUpDO0FBS2YscUJBQWEsNENBTEU7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QUYsRUFBS0ksY0FBM0I7QUFDQUwsa0JBQUVDLENBQUYsRUFBS0ssYUFBTCxHQUFxQk4sRUFBRUMsQ0FBRixFQUFLTSxhQUExQjtBQUNEO0FBQ0Y7QUFDRHBCLG9CQUFRYSxDQUFSO0FBQ0Q7QUFsQlUsU0FBYjtBQW9CRCxPQXRCRCxFQXNCR04sSUF0QkgsQ0FzQlEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCLGVBQUtsQyxLQUFMLEdBQWFrQyxNQUFiO0FBQ0EsZUFBS0csTUFBTDtBQUNELE9BekJEO0FBMEJEOzs7aUNBQ2FoQyxDLEVBQUc7QUFDZlcscUJBQUsrQixZQUFMLENBQWtCO0FBQ2hCQyxpQkFBUyxFQURPLEVBQ0g7QUFDYi9DLGNBQU0sS0FBS0EsSUFGSyxDQUVBO0FBRkEsT0FBbEI7QUFJRDs7OzJCQUlNZ0QsQyxFQUFHO0FBQ1IsV0FBS2xELFVBQUwsR0FBa0JrRCxFQUFFbEQsVUFBcEI7QUFDQSxXQUFLbUQsV0FBTDtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLQyxtQkFBTDtBQUNEOzs7O0VBdEhnQ25DLGVBQUtvQyxJOztrQkFBbkI1RCxLIiwiZmlsZSI6Imluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdBbmxpYScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1saXN0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGlzdC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1hdmF0YXInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1hdmF0YXIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sYWJlbC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWVsaXAnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1lbGlwL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWJ1dHRvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJ1dHRvbi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgIGluc3RhbmNlSWQ6IG51bGwsXG4gICAgICBhbmxpczogbnVsbCxcbiAgICAgIHVybHM6IFtdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKVxuICAgICAgfSxcbiAgICAgIGNsYXNzUmVjb21tZW5kIChjbGFzc25hbWUpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDogJ2FubGlCeUNsYXNzP2NsYXNzbmFtZT0nICsgY2xhc3NuYW1lfSlcbiAgICAgIH0sXG4gICAgICBvcGVuU2hlZXQoKSB7XG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyfmlLbol48nLCAn5Li+5oqlJ10sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtuiXjydcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLnRhcEluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+S4vuaKpSdcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAnaW5zdGFuY2VzL2dldEluc3RhbmNlQnlJZCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHJlc3VsdFxuICAgICAgICB0aGlzLnVybHMucHVzaCh0aGlzLmluc3RhbmNlLnBpY3R1cmVQYXRoKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5zdGFuY2UpXG4gICAgICB9KVxuICAgIH1cbiAgICBnZXRBbmxpQnlJbnN0YW5jZUlkKCkge1xuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdhbmxpL2dldEFubGlCeUluc3RhbmNlSWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHZhciBhID0gcmVzLmRhdGFcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gYSkge1xuICAgICAgICAgICAgICBpZiAoYVtpXS5pbnN0YW5jZUlkMiA9PT0gdGhhdC5pbnN0YW5jZUlkKSB7XG4gICAgICAgICAgICAgICAgYVtpXS5pbnN0YW5jZUlkMiA9IGFbaV0uaW5zdGFuY2VJZDFcbiAgICAgICAgICAgICAgICBhW2ldLmluc3RhbmNlSW1hZ2UyID0gYVtpXS5pbnN0YW5jZUltYWdlMVxuICAgICAgICAgICAgICAgIGFbaV0uaW5zdGFuY2VOYW1lMiA9IGFbaV0uaW5zdGFuY2VOYW1lMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKGEpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuYW5saXMgPSByZXN1bHRcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgcHJldmlld0ltYWdlIChlKSB7XG4gICAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICAgIGN1cnJlbnQ6ICcnLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAgIHVybHM6IHRoaXMudXJscyAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgICB9KVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBvbkxvYWQocCkge1xuICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcC5pbnN0YW5jZUlkXG4gICAgICB0aGlzLmdldEluc3RhbmNlKClcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICB0aGlzLmdldEFubGlCeUluc3RhbmNlSWQoKVxuICAgIH1cbiAgfVxuIl19