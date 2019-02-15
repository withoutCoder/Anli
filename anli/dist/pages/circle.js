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
      name: '',
      circleInfo: null,
      itemList: null,
      hasCircle: false,
      isManager: false
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      openSheet: function openSheet() {
        var that = this;
        _wepy2.default.showActionSheet({
          itemList: this.itemList,
          success: function success(res) {
            if (res.tapIndex === 2) {
              console.log('取消操作');
            }
            if (that.isManager) {
              if (res.tapIndex === 0) {
                console.log('管理圈子');
              } else if (res.tapIndex === 1) {
                console.log('管理员查看详情');
              }
            } else {
              if (that.hasCircle) {
                if (res.tapIndex === 0) {
                  that.removeCircle();
                  console.log('退出圈子');
                } else if (res.tapIndex === 1) {
                  console.log('圈内人士查看详情');
                }
              } else {
                if (res.tapIndex === 0) {
                  that.addCircle();
                  console.log('添加圈子');
                } else if (res.tapIndex === 1) {
                  console.log('圈外人士查看详情');
                }
              }
            }
          },
          fail: function fail(res) {
            console.log('???');
            console.log(res.errMsg);
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'addCircle',
    value: function addCircle() {
      var that = this;
      _wepy2.default.request({
        url: 'http://192.168.0.106:8080/users/addCircle',
        data: {
          openId: this.$parent.globalData.openId,
          name: this.circleInfo.name
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(this.globalData.userInfo.circleList);
          this.globalData.userInfo.circleList.push(that.circleInfo.name);
          console.log(this.globalData.userInfo.circleList);
          that.hasCircle = true;
          that.itemList = ['退出圈子', '查看详情', '取消操作'];
          that.$apply();
          _wepy2.default.showToast({
            title: '添加成功'
          });
        }
      });
    }
  }, {
    key: 'removeCircle',
    value: function removeCircle() {
      var that = this;
      _wepy2.default.request({
        url: 'http://192.168.0.106:8080/users/removeCircle',
        data: {
          openId: this.$parent.globalData.openId,
          name: this.circleInfo.name
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          var index = this.globalData.userInfo.circleList.indexOf(that.circleInfo.name);
          console.log(this.globalData.userInfo.circleList);
          this.globalData.userInfo.circleList.splice(index, 1);
          that.hasCircle = false;
          that.itemList = ['加入圈子', '查看详情', '取消操作'];
          that.$apply();
          console.log(this.globalData.userInfo.circleList);
          _wepy2.default.showToast({
            title: '删除成功'
          });
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(p) {
      var _this2 = this;

      console.log('进入圈子：' + p.circleName);
      this.name = p.circleName;
      var initCircles = new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/circle/getByName',
          data: {
            name: p.circleName
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            console.log(res.data);
            resolve(res.data);
          }
        });
      });
      initCircles.then(function (r) {
        _this2.circleInfo = r;
        if (_this2.$parent.globalData.userInfo.circleList === null) {
          _this2.$parent.globalData.userInfo.circleList = [];
        }
        if (_this2.$parent.globalData.userInfo.circleList.indexOf(_this2.circleInfo.name) !== -1) {
          _this2.hasCircle = true;
        }
        if (_this2.circleInfo.openId === _this2.$parent.globalData.userInfo.openId) {
          _this2.isManager = true;
          _this2.itemList = ['管理圈子', '查看详情', '取消操作'];
        } else {
          if (_this2.hasCircle) {
            _this2.itemList = ['退出圈子', '查看详情', '取消操作'];
          } else {
            _this2.itemList = ['加入圈子', '查看详情', '取消操作'];
          }
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/circle'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwibWl4aW5zIiwidGVzdE1peGluIiwiZGF0YSIsIm5hbWUiLCJjaXJjbGVJbmZvIiwiaXRlbUxpc3QiLCJoYXNDaXJjbGUiLCJpc01hbmFnZXIiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjb21wb25lbnRJZCIsImtleSIsIm9wZW5TaGVldCIsInRoYXQiLCJ3ZXB5Iiwic2hvd0FjdGlvblNoZWV0Iiwic3VjY2VzcyIsInJlcyIsInRhcEluZGV4IiwicmVtb3ZlQ2lyY2xlIiwiYWRkQ2lyY2xlIiwiZmFpbCIsImVyck1zZyIsImV2ZW50cyIsInJlcXVlc3QiLCJ1cmwiLCJvcGVuSWQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImhlYWRlciIsInVzZXJJbmZvIiwiY2lyY2xlTGlzdCIsInB1c2giLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInAiLCJjaXJjbGVOYW1lIiwiaW5pdENpcmNsZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksMkNBREc7QUFFZixvQkFBWSwyQ0FGRztBQUdmLG9CQUFZLDJDQUhHO0FBSWYsc0JBQWMsNkNBSkM7QUFLZixxQkFBYSw0Q0FMRTtBQU1mLGtCQUFVLHlDQU5LO0FBT2YseUJBQWlCLDBDQVBGO0FBUWYseUJBQWlCLDBDQVJGO0FBU2YsbUJBQVcsMENBVEk7QUFV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QUksT0FBS0MsU0FBVCxFQUFvQjtBQUNsQixtQkFBS0QsUUFBTCxHQUFnQixDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBQWhCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQUtBLFFBQUwsR0FBZ0IsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixDQUFoQjtBQUNEO0FBQ0Y7QUFDRixPQWxCRDtBQW1CRDs7OztFQWhLZ0NjLGVBQUtpQyxJOztrQkFBbkJ6RCxLIiwiZmlsZSI6ImNpcmNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQW5saWEnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtYXZhdGFyJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYXZhdGFyL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtY2MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAnd3hjLXRhYic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgY2lyY2xlSW5mbzogbnVsbCxcbiAgICAgIGl0ZW1MaXN0OiBudWxsLFxuICAgICAgaGFzQ2lyY2xlOiBmYWxzZSxcbiAgICAgIGlzTWFuYWdlcjogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG4gICAgYWRkQ2lyY2xlKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjEwNjo4MDgwL3VzZXJzL2FkZENpcmNsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcGVuSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZCxcbiAgICAgICAgICBuYW1lOiB0aGlzLmNpcmNsZUluZm8ubmFtZVxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0KVxuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0LnB1c2godGhhdC5jaXJjbGVJbmZvLm5hbWUpXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpcmNsZUxpc3QpXG4gICAgICAgICAgdGhhdC5oYXNDaXJjbGUgPSB0cnVlXG4gICAgICAgICAgdGhhdC5pdGVtTGlzdCA9IFsn6YCA5Ye65ZyI5a2QJywgJ+afpeeci+ivpuaDhScsICflj5bmtojmk43kvZwnXVxuICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOaIkOWKnydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZW1vdmVDaXJjbGUoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMTA2OjgwODAvdXNlcnMvcmVtb3ZlQ2lyY2xlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkLFxuICAgICAgICAgIG5hbWU6IHRoaXMuY2lyY2xlSW5mby5uYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpcmNsZUxpc3QuaW5kZXhPZih0aGF0LmNpcmNsZUluZm8ubmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdClcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgdGhhdC5oYXNDaXJjbGUgPSBmYWxzZVxuICAgICAgICAgIHRoYXQuaXRlbUxpc3QgPSBbJ+WKoOWFpeWciOWtkCcsICfmn6XnnIvor6bmg4UnLCAn5Y+W5raI5pON5L2cJ11cbiAgICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpcmNsZUxpc3QpXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfliKDpmaTmiJDlip8nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKVxuICAgICAgfSxcbiAgICAgIG9wZW5TaGVldCgpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogdGhpcy5pdGVtTGlzdCxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iOaTjeS9nCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhhdC5pc01hbmFnZXIpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnrqHnkIblnIjlrZAnKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50YXBJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnrqHnkIblkZjmn6XnnIvor6bmg4UnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodGhhdC5oYXNDaXJjbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGF0LnJlbW92ZUNpcmNsZSgpXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6YCA5Ye65ZyI5a2QJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50YXBJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WciOWGheS6uuWjq+afpeeci+ivpuaDhScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHRoYXQuYWRkQ2lyY2xlKClcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmt7vliqDlnIjlrZAnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLnRhcEluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5ZyI5aSW5Lq65aOr5p+l55yL6K+m5oOFJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJz8/PycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge31cblxuICAgIG9uTG9hZChwKSB7XG4gICAgICBjb25zb2xlLmxvZygn6L+b5YWl5ZyI5a2Q77yaJyArIHAuY2lyY2xlTmFtZSlcbiAgICAgIHRoaXMubmFtZSA9IHAuY2lyY2xlTmFtZVxuICAgICAgbGV0IGluaXRDaXJjbGVzID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMTA2OjgwODAvY2lyY2xlL2dldEJ5TmFtZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmFtZTogcC5jaXJjbGVOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBpbml0Q2lyY2xlcy50aGVuKChyKSA9PiB7XG4gICAgICAgIHRoaXMuY2lyY2xlSW5mbyA9IHJcbiAgICAgICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpcmNsZUxpc3QgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0ID0gW11cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdC5pbmRleE9mKHRoaXMuY2lyY2xlSW5mby5uYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmhhc0NpcmNsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaXJjbGVJbmZvLm9wZW5JZCA9PT0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8ub3BlbklkKSB7XG4gICAgICAgICAgdGhpcy5pc01hbmFnZXIgPSB0cnVlXG4gICAgICAgICAgdGhpcy5pdGVtTGlzdCA9IFsn566h55CG5ZyI5a2QJywgJ+afpeeci+ivpuaDhScsICflj5bmtojmk43kvZwnXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmhhc0NpcmNsZSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdCA9IFsn6YCA5Ye65ZyI5a2QJywgJ+afpeeci+ivpuaDhScsICflj5bmtojmk43kvZwnXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0ID0gWyfliqDlhaXlnIjlrZAnLCAn5p+l55yL6K+m5oOFJywgJ+WPlua2iOaTjeS9nCddXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19