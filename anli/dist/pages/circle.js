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
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-button': '../../packages/@minui/wxc-button/dist/index'
      }
    }, _this.components = {}, _this.data = {
      userAnliLikeList: [],
      name: '',
      circleInfo: null,
      itemList: null,
      hasCircle: false,
      isManager: false,
      anlis: null,
      nickName: ''
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      _like: function _like(id) {
        var index = this.anlis.findIndex(function (anli) {
          return anli.id === id;
        });
        if (!this.anlis[index].islike) {
          this.anlis[index].likeNum = this.anlis[index].likeNum + 1;
          this.like(this.anlis[index].id);
        } else {
          this.anlis[index].likeNum = this.anlis[index].likeNum - 1;
          this.cancelLike(this.anlis[index].id);
        }
        this.anlis[index].islike = !this.anlis[index].islike;
        this.$apply();
      },
      openSheet: function openSheet() {
        var that = this;
        _wepy2.default.showActionSheet({
          itemList: this.itemList,
          success: function success(res) {
            if (res.tapIndex === 2) {
              console.log('取消操作');
            } else if (res.tapIndex === 1) {
              _wepy2.default.navigateTo({
                url: 'addanli?anliType=1&circleName=' + that.name
              });
            }
            if (that.isManager) {
              if (res.tapIndex === 0) {
                console.log('管理圈子');
              }
            } else {
              if (that.hasCircle) {
                if (res.tapIndex === 0) {
                  that.removeCircle();
                  console.log('退出圈子');
                }
              } else {
                if (res.tapIndex === 0) {
                  that.addCircle();
                  console.log('添加圈子');
                }
              }
            }
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
        url: this.$parent.globalData.serverUrl + 'users/addCircle',
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
        url: this.$parent.globalData.serverUrl + 'users/removeCircle',
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
    key: 'like',
    value: function like(id) {
      _wepy2.default.request({
        url: this.$parent.globalData.serverUrl + 'anli/like',
        data: {
          openId: this.$parent.globalData.openId,
          id: id
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('like success');
        }
      });
    }
  }, {
    key: 'cancelLike',
    value: function cancelLike(id) {
      _wepy2.default.request({
        url: this.$parent.globalData.serverUrl + 'anli/cancelLike',
        data: {
          openId: this.$parent.globalData.openId,
          id: id
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('cancel success');
        }
      });
    }
  }, {
    key: 'getUserLikeList',
    value: function getUserLikeList() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this2.$parent.globalData.serverUrl + 'users/getAnliLikeList',
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
      }).then(function (userAnliLikeList) {
        _this2.userAnliLikeList = userAnliLikeList;
        _this2.$apply();
      });
    }
  }, {
    key: 'initCircle',
    value: function initCircle() {
      var _this3 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this3.$parent.globalData.serverUrl + 'circle/getByName',
          data: {
            name: _this3.name
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            console.log(res.data);
            resolve(res.data);
          }
        });
      }).then(function (r) {
        _this3.circleInfo = r;
        _this3.$apply();
        if (_this3.$parent.globalData.userInfo.circleList === null) {
          _this3.$parent.globalData.userInfo.circleList = [];
        }
        if (_this3.$parent.globalData.userInfo.circleList.indexOf(_this3.circleInfo.name) !== -1) {
          _this3.hasCircle = true;
        }
        if (_this3.circleInfo.openId === _this3.$parent.globalData.userInfo.openId) {
          _this3.isManager = true;
          _this3.itemList = ['管理圈子', '添加新安利', '取消操作'];
        } else {
          if (_this3.hasCircle) {
            _this3.itemList = ['退出圈子', '添加新安利', '取消操作'];
          } else {
            _this3.itemList = ['加入圈子', '添加新安利', '取消操作'];
          }
        }
      });
    }
  }, {
    key: 'getAnlisByCircleName',
    value: function getAnlisByCircleName(circleName) {
      var _this4 = this;

      var that = this;
      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this4.$parent.globalData.serverUrl + 'anli/getAnlisByCircleName',
          data: {
            circleName: circleName
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            for (var i in res.data) {
              if (that.userAnliLikeList.indexOf(res.data[i].id) !== -1) {
                res.data[i].islike = true;
              } else {
                res.data[i].islike = false;
              }
            }
            resolve(res.data);
          }
        });
      }).then(function (r) {
        _this4.anlis = r;
        _this4.$apply();
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(p) {
      console.log('进入圈子：' + p.circleName);
      this.name = p.circleName;
      this.nickName = this.$parent.globalData.userInfo.nickName;
      this.initCircle();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getUserLikeList();
      this.getAnlisByCircleName(this.name);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/circle'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsInVzZXJBbmxpTGlrZUxpc3QiLCJuYW1lIiwiY2lyY2xlSW5mbyIsIml0ZW1MaXN0IiwiaGFzQ2lyY2xlIiwiaXNNYW5hZ2VyIiwiYW5saXMiLCJuaWNrTmFtZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbXBvbmVudElkIiwia2V5IiwiX2xpa2UiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwiYW5saSIsImlzbGlrZSIsImxpa2VOdW0iLCJsaWtlIiwiY2FuY2VsTGlrZSIsIiRhcHBseSIsIm9wZW5TaGVldCIsInRoYXQiLCJ3ZXB5Iiwic2hvd0FjdGlvblNoZWV0Iiwic3VjY2VzcyIsInJlcyIsInRhcEluZGV4IiwibmF2aWdhdGVUbyIsInVybCIsInJlbW92ZUNpcmNsZSIsImFkZENpcmNsZSIsImV2ZW50cyIsInJlcXVlc3QiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInNlcnZlclVybCIsIm9wZW5JZCIsImhlYWRlciIsInVzZXJJbmZvIiwiY2lyY2xlTGlzdCIsInB1c2giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImluZGV4T2YiLCJzcGxpY2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyIiwiY2lyY2xlTmFtZSIsImkiLCJwIiwiaW5pdENpcmNsZSIsImdldFVzZXJMaWtlTGlzdCIsImdldEFubGlzQnlDaXJjbGVOYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDJDQURHO0FBRWYsb0JB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Q3RDLFFBQWpEO0FBQ0EsV0FBS3FELFVBQUw7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS0MsZUFBTDtBQUNBLFdBQUtDLG9CQUFMLENBQTBCLEtBQUs3RCxJQUEvQjtBQUNEOzs7O0VBaFFnQzRCLGVBQUtrQyxJOztrQkFBbkJyRSxLIiwiZmlsZSI6ImNpcmNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQW5saWEnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtYXZhdGFyJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYXZhdGFyL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtY2MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAnd3hjLXRhYic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckFubGlMaWtlTGlzdDogW10sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGNpcmNsZUluZm86IG51bGwsXG4gICAgICBpdGVtTGlzdDogbnVsbCxcbiAgICAgIGhhc0NpcmNsZTogZmFsc2UsXG4gICAgICBpc01hbmFnZXI6IGZhbHNlLFxuICAgICAgYW5saXM6IG51bGwsXG4gICAgICBuaWNrTmFtZTogJydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG4gICAgYWRkQ2lyY2xlKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICd1c2Vycy9hZGRDaXJjbGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbklkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSWQsXG4gICAgICAgICAgbmFtZTogdGhpcy5jaXJjbGVJbmZvLm5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdClcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdC5wdXNoKHRoYXQuY2lyY2xlSW5mby5uYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0KVxuICAgICAgICAgIHRoYXQuaGFzQ2lyY2xlID0gdHJ1ZVxuICAgICAgICAgIHRoYXQuaXRlbUxpc3QgPSBbJ+mAgOWHuuWciOWtkCcsICfmn6XnnIvor6bmg4UnLCAn5Y+W5raI5pON5L2cJ11cbiAgICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICfmt7vliqDmiJDlip8nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVtb3ZlQ2lyY2xlKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICd1c2Vycy9yZW1vdmVDaXJjbGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbklkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSWQsXG4gICAgICAgICAgbmFtZTogdGhpcy5jaXJjbGVJbmZvLm5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdC5pbmRleE9mKHRoYXQuY2lyY2xlSW5mby5uYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0KVxuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICB0aGF0Lmhhc0NpcmNsZSA9IGZhbHNlXG4gICAgICAgICAgdGhhdC5pdGVtTGlzdCA9IFsn5Yqg5YWl5ZyI5a2QJywgJ+afpeeci+ivpuaDhScsICflj5bmtojmk43kvZwnXVxuICAgICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdClcbiAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnydcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBsaWtlKGlkKSB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdhbmxpL2xpa2UnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbklkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSWQsXG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2xpa2Ugc3VjY2VzcycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGNhbmNlbExpa2UoaWQpIHtcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2VydmVyVXJsICsgJ2FubGkvY2FuY2VsTGlrZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcGVuSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZCxcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsIHN1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBnZXRVc2VyTGlrZUxpc3QoKSB7XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAndXNlcnMvZ2V0QW5saUxpa2VMaXN0JyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBvcGVuSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSkudGhlbigodXNlckFubGlMaWtlTGlzdCkgPT4ge1xuICAgICAgICB0aGlzLnVzZXJBbmxpTGlrZUxpc3QgPSB1c2VyQW5saUxpa2VMaXN0XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKVxuICAgICAgfSxcbiAgICAgIF9saWtlKGlkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYW5saXMuZmluZEluZGV4KGZ1bmN0aW9uKGFubGkpIHtcbiAgICAgICAgICByZXR1cm4gYW5saS5pZCA9PT0gaWRcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCF0aGlzLmFubGlzW2luZGV4XS5pc2xpa2UpIHtcbiAgICAgICAgICB0aGlzLmFubGlzW2luZGV4XS5saWtlTnVtID0gdGhpcy5hbmxpc1tpbmRleF0ubGlrZU51bSArIDFcbiAgICAgICAgICB0aGlzLmxpa2UodGhpcy5hbmxpc1tpbmRleF0uaWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbmxpc1tpbmRleF0ubGlrZU51bSA9IHRoaXMuYW5saXNbaW5kZXhdLmxpa2VOdW0gLSAxXG4gICAgICAgICAgdGhpcy5jYW5jZWxMaWtlKHRoaXMuYW5saXNbaW5kZXhdLmlkKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5saXNbaW5kZXhdLmlzbGlrZSA9ICF0aGlzLmFubGlzW2luZGV4XS5pc2xpa2VcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIG9wZW5TaGVldCgpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogdGhpcy5pdGVtTGlzdCxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iOaTjeS9nCcpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50YXBJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJ2FkZGFubGk/YW5saVR5cGU9MSZjaXJjbGVOYW1lPScgKyB0aGF0Lm5hbWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGF0LmlzTWFuYWdlcikge1xuICAgICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+euoeeQhuWciOWtkCcpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGF0Lmhhc0NpcmNsZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHRoYXQucmVtb3ZlQ2lyY2xlKClcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfpgIDlh7rlnIjlrZAnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnRhcEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGF0LmFkZENpcmNsZSgpXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5re75Yqg5ZyI5a2QJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBpbml0Q2lyY2xlKCkge1xuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2VydmVyVXJsICsgJ2NpcmNsZS9nZXRCeU5hbWUnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgIHRoaXMuY2lyY2xlSW5mbyA9IHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8uY2lyY2xlTGlzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpcmNsZUxpc3QgPSBbXVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0LmluZGV4T2YodGhpcy5jaXJjbGVJbmZvLm5hbWUpICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuaGFzQ2lyY2xlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNpcmNsZUluZm8ub3BlbklkID09PSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mby5vcGVuSWQpIHtcbiAgICAgICAgICB0aGlzLmlzTWFuYWdlciA9IHRydWVcbiAgICAgICAgICB0aGlzLml0ZW1MaXN0ID0gWyfnrqHnkIblnIjlrZAnLCAn5re75Yqg5paw5a6J5YipJywgJ+WPlua2iOaTjeS9nCddXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzQ2lyY2xlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0ID0gWyfpgIDlh7rlnIjlrZAnLCAn5re75Yqg5paw5a6J5YipJywgJ+WPlua2iOaTjeS9nCddXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QgPSBbJ+WKoOWFpeWciOWtkCcsICfmt7vliqDmlrDlronliKknLCAn5Y+W5raI5pON5L2cJ11cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0QW5saXNCeUNpcmNsZU5hbWUoY2lyY2xlTmFtZSkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAnYW5saS9nZXRBbmxpc0J5Q2lyY2xlTmFtZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2lyY2xlTmFtZTogY2lyY2xlTmFtZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcmVzLmRhdGEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoYXQudXNlckFubGlMaWtlTGlzdC5pbmRleE9mKHJlcy5kYXRhW2ldLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXMuZGF0YVtpXS5pc2xpa2UgPSB0cnVlXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLmRhdGFbaV0uaXNsaWtlID0gZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgIHRoaXMuYW5saXMgPSByXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Mb2FkKHApIHtcbiAgICAgIGNvbnNvbGUubG9nKCfov5vlhaXlnIjlrZDvvJonICsgcC5jaXJjbGVOYW1lKVxuICAgICAgdGhpcy5uYW1lID0gcC5jaXJjbGVOYW1lXG4gICAgICB0aGlzLm5pY2tOYW1lID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8ubmlja05hbWVcbiAgICAgIHRoaXMuaW5pdENpcmNsZSgpXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgdGhpcy5nZXRVc2VyTGlrZUxpc3QoKVxuICAgICAgdGhpcy5nZXRBbmxpc0J5Q2lyY2xlTmFtZSh0aGlzLm5hbWUpXG4gICAgfVxuICB9XG4iXX0=