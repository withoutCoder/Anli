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
        'wxc-elip': '../../packages/@minui/wxc-elip/dist/index',
        'wxc-cc': '../../packages/@minui/wxc-cc/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-button': '../../packages/@minui/wxc-button/dist/index'
      }
    }, _this.components = {}, _this.data = {
      userInfo: null,
      circles: null,
      anlis: null,
      cards: [{
        cardId: '',
        question: '你最爱的动画是？',
        instanceId: '5c695f1e5ef7ee3850828477',
        class: '动漫',
        instanceImage: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166915083.webp',
        answer: '中二病也要谈恋爱',
        reason: '很好看，很纯情。'
      }, {
        cardId: '',
        question: '你最喜欢的电影是？',
        class: '电影',
        instanceId: '5c695f155ef7ee3850825e4b',
        instanceImage: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p909265336.webp',
        answer: '夺宝奇兵',
        reason: '霍比特人最好看了！长原因测试，长句子就是这么任性。'
      }]
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {}
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getCircleList',
    value: function getCircleList() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this2.$parent.globalData.serverUrl + 'users/getCircleList',
          data: {
            openId: _this2.$parent.globalData.openId
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            resolve(res.data);
          }
        });
      }).then(function (r) {
        _this2.circles = r;
      });
    }
  }, {
    key: 'getAnlis',
    value: function getAnlis() {
      var _this3 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this3.$parent.globalData.serverUrl + 'anli/getListByOpenId',
          data: {
            openId: _this3.$parent.globalData.openId
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            resolve(res.data);
          }
        });
      }).then(function (result) {
        _this3.anlis = result;
        console.log(_this3.anlis);
        _this3.$apply();
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getAnlis();
      this.getCircleList();
      this.userInfo = this.$parent.globalData.userInfo;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VySW5mbyIsImNpcmNsZXMiLCJhbmxpcyIsImNhcmRzIiwiY2FyZElkIiwicXVlc3Rpb24iLCJpbnN0YW5jZUlkIiwiY2xhc3MiLCJpbnN0YW5jZUltYWdlIiwiYW5zd2VyIiwicmVhc29uIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJldmVudHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzZXJ2ZXJVcmwiLCJvcGVuSWQiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwidGhlbiIsInIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwiZ2V0QW5saXMiLCJnZXRDaXJjbGVMaXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDJDQURHO0FBRWYsb0JBQVksMkNBRkc7QUFHZixvQkFBWSwyQ0FIRztBQUlmLHNCQUFjLDZDQUpDO0FBS2YscUJBQWEsNENBTEU7QUFNZixvQkFBWSwyQ0FORztBQU9mLGtCQUFVLHlDQVBLO0FBUWYseUJBQWlCLDBDQVJGO0FBU2YseUJBQWlCLDBDQVRGO0FBVWYsbUJBQVcsMENBVkk7QUFXZixzQkFBYztBQVhDO0FBRlYsSyxRQWdCVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsZUFBUyxJQUZKO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxhQUFPLENBQ0w7QUFDRUMsZ0JBQVEsRUFEVjtBQUVFQyxrQkFBVSxVQUZaO0FBR0VDLG9CQUFZLDBCQUhkO0FBSUVDLGVBQU8sSUFKVDtBQUtFQyx1QkFBZSw2RUFMakI7QUFNRUMsZ0JBQVEsVUFOVjtBQU9FQyxnQkFBUTtBQVBWLE9BREssRUFVTDtBQUNFTixnQkFBUSxFQURWO0FBRUVDLGtCQUFVLFdBRlo7QUFHRUUsZUFBTyxJQUhUO0FBSUVELG9CQUFZLDBCQUpkO0FBS0VFLHVCQUFlLDRFQUxqQjtBQU1FQyxnQkFBUSxNQU5WO0FBT0VDLGdCQUFRO0FBUFYsT0FWSztBQUpGLEssUUEwQlBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0csQ0FBRTtBQURMLEssUUFxQlZDLE0sR0FBUyxFOzs7OztvQ0FsQlE7QUFBQTs7QUFDZixVQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQy9CQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssT0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxTQUF4QixHQUFvQyxxQkFEOUI7QUFFWHpCLGdCQUFNO0FBQ0owQixvQkFBUSxPQUFLSCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JFO0FBRDVCLFdBRks7QUFLWEMsa0JBQVE7QUFDTiw0QkFBZ0I7QUFEVixXQUxHO0FBUVhDLGlCQVJXLG1CQVFGQyxHQVJFLEVBUUc7QUFDWlgsb0JBQVFXLElBQUk3QixJQUFaO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiRCxFQWFHOEIsSUFiSCxDQWFRLFVBQUNDLENBQUQsRUFBTztBQUNiLGVBQUs3QixPQUFMLEdBQWU2QixDQUFmO0FBQ0QsT0FmRDtBQWdCRDs7OytCQUdVO0FBQUE7O0FBQ1QsVUFBSWQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLE9BQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsU0FBeEIsR0FBb0Msc0JBRDlCO0FBRVh6QixnQkFBTTtBQUNKMEIsb0JBQVEsT0FBS0gsT0FBTCxDQUFhQyxVQUFiLENBQXdCRTtBQUQ1QixXQUZLO0FBS1hDLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FMRztBQVFYQyxpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1pYLG9CQUFRVyxJQUFJN0IsSUFBWjtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYkQsRUFhRzhCLElBYkgsQ0FhUSxVQUFDRSxNQUFELEVBQVk7QUFDbEIsZUFBSzdCLEtBQUwsR0FBYTZCLE1BQWI7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFLL0IsS0FBakI7QUFDQSxlQUFLZ0MsTUFBTDtBQUNELE9BakJEO0FBa0JEOzs7NkJBQ1EsQ0FBRTs7OzZCQUVGO0FBQ1AsV0FBS0MsUUFBTDtBQUNBLFdBQUtDLGFBQUw7QUFDQSxXQUFLcEMsUUFBTCxHQUFnQixLQUFLc0IsT0FBTCxDQUFhQyxVQUFiLENBQXdCdkIsUUFBeEM7QUFDRDs7OztFQWhHZ0NtQixlQUFLa0IsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdBbmxpYScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1saXN0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGlzdC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1hdmF0YXInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1hdmF0YXIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sYWJlbC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1lbGlwJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZWxpcC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWJ1dHRvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJ1dHRvbi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICAgIGNpcmNsZXM6IG51bGwsXG4gICAgICBhbmxpczogbnVsbCxcbiAgICAgIGNhcmRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkSWQ6ICcnLFxuICAgICAgICAgIHF1ZXN0aW9uOiAn5L2g5pyA54ix55qE5Yqo55S75piv77yfJyxcbiAgICAgICAgICBpbnN0YW5jZUlkOiAnNWM2OTVmMWU1ZWY3ZWUzODUwODI4NDc3JyxcbiAgICAgICAgICBjbGFzczogJ+WKqOa8qycsXG4gICAgICAgICAgaW5zdGFuY2VJbWFnZTogJ2h0dHBzOi8vaW1nMy5kb3ViYW5pby5jb20vdmlldy9waG90by9zX3JhdGlvX3Bvc3Rlci9wdWJsaWMvcDIxNjY5MTUwODMud2VicCcsXG4gICAgICAgICAgYW5zd2VyOiAn5Lit5LqM55eF5Lmf6KaB6LCI5oGL54ixJyxcbiAgICAgICAgICByZWFzb246ICflvojlpb3nnIvvvIzlvojnuq/mg4XjgIInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXJkSWQ6ICcnLFxuICAgICAgICAgIHF1ZXN0aW9uOiAn5L2g5pyA5Zac5qyi55qE55S15b2x5piv77yfJyxcbiAgICAgICAgICBjbGFzczogJ+eUteW9sScsXG4gICAgICAgICAgaW5zdGFuY2VJZDogJzVjNjk1ZjE1NWVmN2VlMzg1MDgyNWU0YicsXG4gICAgICAgICAgaW5zdGFuY2VJbWFnZTogJ2h0dHBzOi8vaW1nMy5kb3ViYW5pby5jb20vdmlldy9waG90by9zX3JhdGlvX3Bvc3Rlci9wdWJsaWMvcDkwOTI2NTMzNi53ZWJwJyxcbiAgICAgICAgICBhbnN3ZXI6ICflpLrlrp3lpYflhbUnLFxuICAgICAgICAgIHJlYXNvbjogJ+mcjeavlOeJueS6uuacgOWlveeci+S6hu+8gemVv+WOn+WboOa1i+ivle+8jOmVv+WPpeWtkOWwseaYr+i/meS5iOS7u+aAp+OAgidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkNsaWNrKGUpIHt9XG4gICAgfVxuICAgIGdldENpcmNsZUxpc3QgKCkge1xuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2VydmVyVXJsICsgJ3VzZXJzL2dldENpcmNsZUxpc3QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgIHRoaXMuY2lyY2xlcyA9IHJcbiAgICAgIH0pXG4gICAgfVxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBnZXRBbmxpcygpIHtcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdhbmxpL2dldExpc3RCeU9wZW5JZCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgb3BlbklkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmFubGlzID0gcmVzdWx0XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYW5saXMpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIG9uTG9hZCgpIHt9XG5cbiAgICBvblNob3coKSB7XG4gICAgICB0aGlzLmdldEFubGlzKClcbiAgICAgIHRoaXMuZ2V0Q2lyY2xlTGlzdCgpXG4gICAgICB0aGlzLnVzZXJJbmZvID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm9cbiAgICB9XG4gIH1cbiJdfQ==