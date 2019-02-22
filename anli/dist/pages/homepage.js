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
        'wxc-tab': '../../packages/@minui/wxc-tab/dist/index',
        'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
        'wxc-panel': '../../packages/@minui/wxc-panel/dist/index',
        'wxc-elip': '../../packages/@minui/wxc-elip/dist/index',
        'wxc-label': '../../packages/@minui/wxc-label/dist/index',
        'wxc-button': '../../packages/@minui/wxc-button/dist/index',
        'wxc-popup': '../../packages/@minui/wxc-popup/dist/index',
        'wxc-list': '../../packages/@minui/wxc-list/dist/index'
      }
    }, _this.components = {}, _this.data = {
      circles: null,
      inputShowed: false,
      inputVal: '',
      anlis: null,
      userAnliLikeList: [],
      myCirlces: null
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log(e.detail);
      },
      openSheet: function openSheet() {
        _wepy2.default.showActionSheet({
          itemList: ['收藏', '不感兴趣', '举报'],
          success: function success(res) {
            if (res.tapIndex === 0) {
              _wepy2.default.showToast({
                title: '收藏'
              });
            } else if (res.tapIndex === 1) {
              _wepy2.default.showToast({
                title: '不感兴趣'
              });
            } else if (res.tapIndex === 2) {
              _wepy2.default.showToast({
                title: '举报'
              });
            }
          }
        });
      },
      showInput: function showInput() {
        this.inputShowed = true;
      },
      hideInput: function hideInput() {
        this.inputVal = '';
        this.inputShowed = false;
      },
      clearInput: function clearInput() {
        this.inputVal = '';
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
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
      share: function share(id) {
        _wepy2.default.showToast({
          title: '分享' + id
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
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
    key: 'getCircles',
    value: function getCircles() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this2.$parent.globalData.serverUrl + 'circle/getListByOpenId',
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
        _this2.$apply();
      });
    }
  }, {
    key: 'getAnlis',
    value: function getAnlis() {
      var _this3 = this;

      var that = this;
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
      }).then(function (result) {
        _this3.anlis = result;
        _this3.$apply();
      });
    }
  }, {
    key: 'getUserLikeList',
    value: function getUserLikeList() {
      var _this4 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: _this4.$parent.globalData.serverUrl + 'users/getAnliLikeList',
          data: {
            openId: _this4.$parent.globalData.openId
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            resolve(res.data);
          }
        });
      }).then(function (userAnliLikeList) {
        _this4.userAnliLikeList = userAnliLikeList;
        _this4.$apply();
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.myCirlces = this.$parent.globalData.userInfo.circleList;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getAnlis();
      this.getUserLikeList();
      this.getCircles();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/homepage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiY2lyY2xlcyIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJhbmxpcyIsInVzZXJBbmxpTGlrZUxpc3QiLCJteUNpcmxjZXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJvcGVuU2hlZXQiLCJ3ZXB5Iiwic2hvd0FjdGlvblNoZWV0IiwiaXRlbUxpc3QiLCJzdWNjZXNzIiwicmVzIiwidGFwSW5kZXgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsInNob3dJbnB1dCIsImhpZGVJbnB1dCIsImNsZWFySW5wdXQiLCJpbnB1dFR5cGluZyIsInZhbHVlIiwiX2xpa2UiLCJpZCIsImluZGV4IiwiZmluZEluZGV4IiwiYW5saSIsImlzbGlrZSIsImxpa2VOdW0iLCJsaWtlIiwiY2FuY2VsTGlrZSIsIiRhcHBseSIsInNoYXJlIiwiZXZlbnRzIiwicmVxdWVzdCIsInVybCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwic2VydmVyVXJsIiwib3BlbklkIiwiaGVhZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwiciIsInRoYXQiLCJpIiwiaW5kZXhPZiIsInJlc3VsdCIsInVzZXJJbmZvIiwiY2lyY2xlTGlzdCIsImdldEFubGlzIiwiZ2V0VXNlckxpa2VMaXN0IiwiZ2V0Q2lyY2xlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyx1QkFBaUI7QUFDZixtQkFBVywwQ0FESTtBQUVmLG9CQUFZLDJDQUZHO0FBR2YseUJBQWlCLDBDQUhGO0FBSWYseUJB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YjtBQUNBLGVBQUtsQixNQUFMO0FBQ0QsT0F2QkQ7QUF3QkQ7OztzQ0FDaUI7QUFBQTs7QUFDaEIsVUFBSVUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQmxDLHVCQUFLeUIsT0FBTCxDQUFhO0FBQ1hDLGVBQUssT0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxTQUF4QixHQUFvQyx1QkFEOUI7QUFFWDVDLGdCQUFNO0FBQ0o2QyxvQkFBUSxPQUFLSCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JFO0FBRDVCLFdBRks7QUFLWEMsa0JBQVE7QUFDTiw0QkFBZ0I7QUFEVixXQUxHO0FBUVg1QixpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1o2QixvQkFBUTdCLElBQUluQixJQUFaO0FBQ0Q7QUFWVSxTQUFiO0FBWUQsT0FiRCxFQWFHa0QsSUFiSCxDQWFRLFVBQUM3QyxnQkFBRCxFQUFzQjtBQUM1QixlQUFLQSxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsZUFBS2dDLE1BQUw7QUFDRCxPQWhCRDtBQWlCRDs7OzZCQUNRO0FBQ1AsV0FBSy9CLFNBQUwsR0FBaUIsS0FBS29DLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmEsUUFBeEIsQ0FBaUNDLFVBQWxEO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtDLFFBQUw7QUFDQSxXQUFLQyxlQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUNEOzs7O0VBaE1nQzdDLGVBQUs4QyxJOztrQkFBbkJsRSxLIiwiZmlsZSI6ImhvbWVwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdBbmxpYScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXBhbmVsL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWVsaXAnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1lbGlwL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtYnV0dG9uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYnV0dG9uL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXBvcHVwJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcG9wdXAvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG4gICAgZGF0YSA9IHtcbiAgICAgIGNpcmNsZXM6IG51bGwsXG4gICAgICBpbnB1dFNob3dlZDogZmFsc2UsXG4gICAgICBpbnB1dFZhbDogJycsXG4gICAgICBhbmxpczogbnVsbCxcbiAgICAgIHVzZXJBbmxpTGlrZUxpc3Q6IFtdLFxuICAgICAgbXlDaXJsY2VzOiBudWxsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbClcbiAgICAgIH0sXG4gICAgICBvcGVuU2hlZXQoKSB7XG4gICAgICAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyfmlLbol48nLCAn5LiN5oSf5YW06LajJywgJ+S4vuaKpSddLFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy50YXBJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmlLbol48nXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50YXBJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuI3mhJ/lhbTotqMnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy50YXBJbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuL7miqUnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHNob3dJbnB1dCAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSB0cnVlXG4gICAgICB9LFxuICAgICAgaGlkZUlucHV0ICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnXG4gICAgICAgIHRoaXMuaW5wdXRTaG93ZWQgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNsZWFySW5wdXQgKCkge1xuICAgICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICAgIH0sXG4gICAgICBpbnB1dFR5cGluZyAoZSkge1xuICAgICAgICB0aGlzLmlucHV0VmFsID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBfbGlrZShpZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFubGlzLmZpbmRJbmRleChmdW5jdGlvbihhbmxpKSB7XG4gICAgICAgICAgcmV0dXJuIGFubGkuaWQgPT09IGlkXG4gICAgICAgIH0pXG4gICAgICAgIGlmICghdGhpcy5hbmxpc1tpbmRleF0uaXNsaWtlKSB7XG4gICAgICAgICAgdGhpcy5hbmxpc1tpbmRleF0ubGlrZU51bSA9IHRoaXMuYW5saXNbaW5kZXhdLmxpa2VOdW0gKyAxXG4gICAgICAgICAgdGhpcy5saWtlKHRoaXMuYW5saXNbaW5kZXhdLmlkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5saXNbaW5kZXhdLmxpa2VOdW0gPSB0aGlzLmFubGlzW2luZGV4XS5saWtlTnVtIC0gMVxuICAgICAgICAgIHRoaXMuY2FuY2VsTGlrZSh0aGlzLmFubGlzW2luZGV4XS5pZClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFubGlzW2luZGV4XS5pc2xpa2UgPSAhdGhpcy5hbmxpc1tpbmRleF0uaXNsaWtlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sXG4gICAgICBzaGFyZShpZCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfliIbkuqsnICsgaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7fVxuXG4gICAgbGlrZShpZCkge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAnYW5saS9saWtlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkLFxuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdsaWtlIHN1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBjYW5jZWxMaWtlKGlkKSB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdhbmxpL2NhbmNlbExpa2UnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3BlbklkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSWQsXG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCBzdWNjZXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgZ2V0Q2lyY2xlcygpIHtcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdjaXJjbGUvZ2V0TGlzdEJ5T3BlbklkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBvcGVuSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICB0aGlzLmNpcmNsZXMgPSByXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIGdldEFubGlzKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAnYW5saS9nZXRMaXN0QnlPcGVuSWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiByZXMuZGF0YSkge1xuICAgICAgICAgICAgICBpZiAodGhhdC51c2VyQW5saUxpa2VMaXN0LmluZGV4T2YocmVzLmRhdGFbaV0uaWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlcy5kYXRhW2ldLmlzbGlrZSA9IHRydWVcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXMuZGF0YVtpXS5pc2xpa2UgPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmFubGlzID0gcmVzdWx0XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICAgIGdldFVzZXJMaWtlTGlzdCgpIHtcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICd1c2Vycy9nZXRBbmxpTGlrZUxpc3QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KS50aGVuKCh1c2VyQW5saUxpa2VMaXN0KSA9PiB7XG4gICAgICAgIHRoaXMudXNlckFubGlMaWtlTGlzdCA9IHVzZXJBbmxpTGlrZUxpc3RcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5teUNpcmxjZXMgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mby5jaXJjbGVMaXN0XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgdGhpcy5nZXRBbmxpcygpXG4gICAgICB0aGlzLmdldFVzZXJMaWtlTGlzdCgpXG4gICAgICB0aGlzLmdldENpcmNsZXMoKVxuICAgIH1cbiAgfVxuIl19