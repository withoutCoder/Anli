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
        'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
        'wxc-label': '../../packages/@minui/wxc-label/dist/index',
        'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
        'wxc-elip': '../../packages/@minui/wxc-elip/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-button': '../../packages/@minui/wxc-button/dist/index'
      }
    }, _this.components = {}, _this.data = {
      id: '',
      image: '',
      anli: '',
      instance: null,
      circle: null,
      bar_index: 0, // 点进来显示评论还是详情
      urls: [] // 需要预览的图片http链接列表
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'previewImage',
    value: function previewImage(e) {
      _wepy2.default.previewImage({
        current: '', // 当前显示图片的http链接
        urls: this.urls // 需要预览的图片http链接列表
      });
    }
  }, {
    key: 'getAnliInfo',
    value: function getAnliInfo() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        console.log(_this2.id);
        _wepy2.default.request({
          url: _this2.$parent.globalData.serverUrl + 'anli/getAnliById',
          data: {
            id: _this2.id
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            resolve(res.data);
          }
        });
      }).then(function (result) {
        _this2.anli = result;
        _this2.$apply();
        _this2.init();
      });
    }
  }, {
    key: 'init',
    value: function init() {
      var _this3 = this;

      if (this.anli.anliType === 1) {
        new Promise(function (resolve, reject) {
          _wepy2.default.request({
            url: _this3.$parent.globalData.serverUrl + 'circle/getByName',
            data: {
              name: _this3.anli.circleName
            },
            header: {
              'content-type': 'application/json'
            },
            success: function success(res) {
              resolve(res.data);
            }
          });
        }).then(function (r) {
          _this3.circle = r;
          _this3.$apply();
        });
      } else if (this.anli.anliType === 2) {
        new Promise(function (resolve, reject) {
          _wepy2.default.request({
            url: _this3.$parent.globalData.serverUrl + 'instances/getInstanceById',
            data: {
              instanceId: _this3.anli.instanceId1
            },
            header: {
              'content-type': 'application/json'
            },
            success: function success(res) {
              resolve(res.data);
            }
          });
        }).then(function (result) {
          _this3.instance = result;
          _this3.$apply();
        });
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad(p) {
      this.id = p.id;
      this.image = p.image;
      this.urls.push(this.image);
      this.bar_index = p.bar_index;
      this.getAnliInfo();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/anli'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubGkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJpZCIsImltYWdlIiwiYW5saSIsImluc3RhbmNlIiwiY2lyY2xlIiwiYmFyX2luZGV4IiwidXJscyIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbXBvbmVudElkIiwia2V5IiwiZXZlbnRzIiwid2VweSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1cmwiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInNlcnZlclVybCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJ0aGVuIiwicmVzdWx0IiwiJGFwcGx5IiwiaW5pdCIsImFubGlUeXBlIiwibmFtZSIsImNpcmNsZU5hbWUiLCJyIiwiaW5zdGFuY2VJZCIsImluc3RhbmNlSWQxIiwicCIsInB1c2giLCJnZXRBbmxpSW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSwyQ0FERztBQUVmLHFCQUFhLDRDQUZFO0FBR2Ysa0JBQVUseUNBSEs7QUFJZixvQkFBWSwyQ0FKRztBQUtmLHlCQUFpQiwwQ0FMRjtBQU1mLHlCQUFpQiwwQ0FORjtBQU9mLG1CQUFXLDBDQVBJO0FBUWYsc0JBQWM7QUFSQztBQUZWLEssUUFhVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLFVBQUksRUFEQztBQUVMQyxhQUFPLEVBRkY7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLGdCQUFVLElBSkw7QUFLTEMsY0FBUSxJQUxIO0FBTUxD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LENBQVVvQyxJQUFWLENBQWUsS0FBS3pDLEtBQXBCO0FBQ0EsV0FBS0ksU0FBTCxHQUFpQm9DLEVBQUVwQyxTQUFuQjtBQUNBLFdBQUtzQyxXQUFMO0FBQ0Q7Ozs7RUE3R2dDMUIsZUFBSzJCLEk7O2tCQUFuQmxELEsiLCJmaWxlIjoiYW5saS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FubGlhJyxcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAnd3hjLWVsaXAnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1lbGlwL2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCdcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50cyA9IHt9XG4gIGRhdGEgPSB7XG4gICAgaWQ6ICcnLFxuICAgIGltYWdlOiAnJyxcbiAgICBhbmxpOiAnJyxcbiAgICBpbnN0YW5jZTogbnVsbCxcbiAgICBjaXJjbGU6IG51bGwsXG4gICAgYmFyX2luZGV4OiAwLCAvLyDngrnov5vmnaXmmL7npLror4Torrrov5jmmK/or6bmg4VcbiAgICB1cmxzOiBbXSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApXG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHt9XG5cbiAgcHJldmlld0ltYWdlIChlKSB7XG4gICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogJycsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgIHVybHM6IHRoaXMudXJscyAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgfSlcbiAgfVxuXG4gIGdldEFubGlJbmZvKCkge1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdhbmxpL2dldEFubGlCeUlkJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuYW5saSA9IHJlc3VsdFxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgdGhpcy5pbml0KClcbiAgICB9KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAodGhpcy5hbmxpLmFubGlUeXBlID09PSAxKSB7XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAnY2lyY2xlL2dldEJ5TmFtZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5hbmxpLmNpcmNsZU5hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgdGhpcy5jaXJjbGUgPSByXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLmFubGkuYW5saVR5cGUgPT09IDIpIHtcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdpbnN0YW5jZXMvZ2V0SW5zdGFuY2VCeUlkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmFubGkuaW5zdGFuY2VJZDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gcmVzdWx0XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKHApIHtcbiAgICB0aGlzLmlkID0gcC5pZFxuICAgIHRoaXMuaW1hZ2UgPSBwLmltYWdlXG4gICAgdGhpcy51cmxzLnB1c2godGhpcy5pbWFnZSlcbiAgICB0aGlzLmJhcl9pbmRleCA9IHAuYmFyX2luZGV4XG4gICAgdGhpcy5nZXRBbmxpSW5mbygpXG4gIH1cbn1cbiJdfQ==