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
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      circles: null,
      inputShowed: false,
      inputVal: '',
      items: [{
        item_id: '1',
        labels: [{ title: '动画', color: '#19be6b' }, { title: '漫画', color: '#ff9900' }, { title: '画集', color: '#ed3f14' }],
        label_class: '电影',
        user_id: '23123',
        user_name: '小兰',
        background: '#495060',
        user_image: 'http://www.gx8899.com/uploads/allimg/160804/3-160P4111639.jpg',
        exhibits_image: 'https://images.uiiiuiii.com/wp-content/uploads/2017/10/itz-poster20171006-2-8.jpg',
        comment: '我推荐这个作品是因为这个作品,按实际打开房间爱上就爱上离开.房间爱离开房间辣椒飒飒发，所以暗示法卡视角打开方了解阿斯利康的发生快乐绝地反击按时。'
      }, {
        item_id: '2',
        labels: [{ title: '电影', color: '#ff0077' }, { title: '动漫', color: '#747bb1' }, { title: '动画', color: '#19be6b' }],
        label_class: '动漫',
        user_id: '23124',
        user_name: '小烘',
        background: '#ff9900',
        user_image: 'https://pic3.zhimg.com/80/v2-99351b87b1e0a9aa9a9d07bba0318376_hd.jpg',
        exhibits_image: 'http://img2.mtime.cn/up/885/1114885/27CF938F-4182-41F5-BBBA-43B84DC39826_500.jpg',
        comment: '最喜欢，不解释。'
      }, {
        item_id: '3',
        labels: [{ title: '电影', color: '#ff0077' }, { title: '动漫', color: '#747bb1' }, { title: '动画', color: '#19be6b' }, { title: '漫画', color: '#ff9900' }, { title: '画集', color: '#ed3f14' }],
        label_class: '动漫',
        user_id: '23125',
        user_name: 'color-~~~~',
        background: '#5cadff',
        user_image: 'https://pic3.zhimg.com/80/v2-0ef8864ca3191c8c1f7c885d602eced6_hd.jpg',
        exhibits_image: 'http://www.sinaimg.cn/dy/slidenews/4_img/2016_05/704_1844566_708349.jpg',
        comment: '我说啊看见啥开始放寒假卡设计费来得及发哈开始的恢复答复阖家安康分类大富豪爱空间的划分阿道夫'
      }],
      items_gc: [{
        item_id: '2',
        labels: [{ title: '电影', color: '#ff0077' }, { title: '动漫', color: '#747bb1' }, { title: '动画', color: '#19be6b' }],
        label_class: '动漫',
        user_id: '23124',
        user_name: '小烘',
        background: '#ff9900',
        user_image: 'https://pic3.zhimg.com/80/v2-99351b87b1e0a9aa9a9d07bba0318376_hd.jpg',
        exhibits_image: 'http://img2.mtime.cn/up/885/1114885/27CF938F-4182-41F5-BBBA-43B84DC39826_500.jpg',
        comment: '最喜欢，不解释。'
      }, {
        item_id: '1',
        labels: [{ title: '动画', color: '#19be6b' }, { title: '漫画', color: '#ff9900' }, { title: '画集', color: '#ed3f14' }],
        label_class: '电影',
        user_id: '23123',
        user_name: '小兰',
        background: '#495060',
        user_image: 'http://www.gx8899.com/uploads/allimg/160804/3-160P4111639.jpg',
        exhibits_image: 'https://images.uiiiuiii.com/wp-content/uploads/2017/10/itz-poster20171006-2-8.jpg',
        comment: '我推荐这个作品是因为这个作品,按实际打开房间爱上就爱上离开.房间爱离开房间辣椒飒飒发，所以暗示法卡视角打开方了解阿斯利康的发生快乐绝地反击按时。'
      }, {
        item_id: '3',
        labels: [{ title: '电影', color: '#ff0077' }, { title: '动漫', color: '#747bb1' }, { title: '动画', color: '#19be6b' }, { title: '漫画', color: '#ff9900' }, { title: '画集', color: '#ed3f14' }],
        label_class: '动漫',
        user_id: '23125',
        user_name: 'color-~~~~',
        background: '#5cadff',
        user_image: 'https://pic3.zhimg.com/80/v2-0ef8864ca3191c8c1f7c885d602eced6_hd.jpg',
        exhibits_image: 'http://www.sinaimg.cn/dy/slidenews/4_img/2016_05/704_1844566_708349.jpg',
        comment: '我说啊看见啥开始放寒假卡设计费来得及发哈开始的恢复答复阖家安康分类大富豪爱空间的划分阿道夫'
      }]
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      preventD: function preventD() {},
      recommend: function recommend(id, image) {
        this.$navigate({ url: 'anli?id=' + id + '&image=' + image });
      },
      userinfo: function userinfo(id, name, image) {
        this.$navigate({ url: 'userinfo?id=' + id + '&name=' + name + '&image=' + image });
      },
      accept: function accept(id) {
        _wepy2.default.showToast({
          title: '接受安利id=' + id,
          icon: 'success',
          duration: 2000
        });
      },
      toCircle: function toCircle(circleName) {
        this.$navigate({ url: 'circle?circleName=' + circleName });
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
          },
          fail: function fail(res) {
            console.log(res.errMsg);
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
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      var initCircles = new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/circle/getListByOpenId',
          data: {
            openId: _this2.$parent.globalData.openId
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
        _this2.circles = r;
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this3 = this;

      var initCircles = new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/circle/getListByOpenId',
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
      });
      initCircles.then(function (r) {
        _this3.circles = r;
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/homepage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwiY2lyY2xlcyIsImlucHV0U2hvd2VkIiwiaW5wdXRWYWwiLCJpdGVtcyIsIml0ZW1faWQiLCJsYWJlbHMiLCJ0aXRsZSIsImNvbG9yIiwibGFiZWxfY2xhc3MiLCJ1c2VyX2lkIiwidXNlcl9uYW1lIiwiYmFja2dyb3VuZCIsInVzZXJfaW1hZ2UiLCJleGhpYml0c19pbWFnZSIsImNvbW1lbnQiLCJpdGVtc19nYyIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbXBvbmVudElkIiwia2V5IiwicHJldmVudEQiLCJyZWNvbW1lbmQiLCJpZCIsImltYWdlIiwiJG5hdmlnYXRlIiwidXJsIiwidXNlcmluZm8iLCJuYW1lIiwiYWNjZXB0Iiwid2VweSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInRvQ2lyY2xlIiwiY2lyY2xlTmFtZSIsIm9wZW5TaGVldCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0Iiwic3VjY2VzcyIsInJlcyIsInRhcEluZGV4IiwiZmFpbCIsImVyck1zZyIsInNob3dJbnB1dCIsImhpZGVJbnB1dCIsImNsZWFySW5wdXQiLCJpbnB1dFR5cGluZyIsInZhbHVlIiwiZXZlbnRzIiwiaW5pdENpcmNsZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJvcGVuSWQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImhlYWRlciIsInRoZW4iLCJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQ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RFYsV0FMRztBQVFYbkIsaUJBUlcsbUJBUUZDLEdBUkUsRUFRRztBQUNaWSxvQkFBUVosSUFBSTdDLElBQVo7QUFDRDtBQVZVLFNBQWI7QUFZRCxPQWJpQixDQUFsQjtBQWNBdUQsa0JBQVlTLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RCLGVBQUtoRSxPQUFMLEdBQWVnRSxDQUFmO0FBQ0QsT0FGRDtBQUdEOzs7O0VBbk9nQzlCLGVBQUsrQixJOztrQkFBbkJ6RSxLIiwiZmlsZSI6ImhvbWVwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdBbmxpYScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXBhbmVsL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWVsaXAnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1lbGlwL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtYnV0dG9uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYnV0dG9uL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXBvcHVwJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcG9wdXAvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGNpcmNsZXM6IG51bGwsXG4gICAgICBpbnB1dFNob3dlZDogZmFsc2UsXG4gICAgICBpbnB1dFZhbDogJycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgaXRlbV9pZDogJzEnLFxuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAge3RpdGxlOiAn5Yqo55S7JywgY29sb3I6ICcjMTliZTZiJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfmvKvnlLsnLCBjb2xvcjogJyNmZjk5MDAnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+eUu+mbhicsIGNvbG9yOiAnI2VkM2YxNCd9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBsYWJlbF9jbGFzczogJ+eUteW9sScsXG4gICAgICAgICAgdXNlcl9pZDogJzIzMTIzJyxcbiAgICAgICAgICB1c2VyX25hbWU6ICflsI/lhbAnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDk1MDYwJyxcbiAgICAgICAgICB1c2VyX2ltYWdlOiAnaHR0cDovL3d3dy5neDg4OTkuY29tL3VwbG9hZHMvYWxsaW1nLzE2MDgwNC8zLTE2MFA0MTExNjM5LmpwZycsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwczovL2ltYWdlcy51aWlpdWlpaS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTAvaXR6LXBvc3RlcjIwMTcxMDA2LTItOC5qcGcnLFxuICAgICAgICAgIGNvbW1lbnQ6ICfmiJHmjqjojZDov5nkuKrkvZzlk4HmmK/lm6DkuLrov5nkuKrkvZzlk4Es5oyJ5a6e6ZmF5omT5byA5oi/6Ze054ix5LiK5bCx54ix5LiK56a75byALuaIv+mXtOeIseemu+W8gOaIv+mXtOi+o+akkumjkumjkuWPke+8jOaJgOS7peaal+ekuuazleWNoeinhuinkuaJk+W8gOaWueS6huino+mYv+aWr+WIqeW6t+eahOWPkeeUn+W/q+S5kOe7neWcsOWPjeWHu+aMieaXtuOAgidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1faWQ6ICcyJyxcbiAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgIHt0aXRsZTogJ+eUteW9sScsIGNvbG9yOiAnI2ZmMDA3Nyd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5Yqo5ryrJywgY29sb3I6ICcjNzQ3YmIxJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfliqjnlLsnLCBjb2xvcjogJyMxOWJlNmInfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGFiZWxfY2xhc3M6ICfliqjmvKsnLFxuICAgICAgICAgIHVzZXJfaWQ6ICcyMzEyNCcsXG4gICAgICAgICAgdXNlcl9uYW1lOiAn5bCP54OYJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmOTkwMCcsXG4gICAgICAgICAgdXNlcl9pbWFnZTogJ2h0dHBzOi8vcGljMy56aGltZy5jb20vODAvdjItOTkzNTFiODdiMWUwYTlhYTlhOWQwN2JiYTAzMTgzNzZfaGQuanBnJyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHA6Ly9pbWcyLm10aW1lLmNuL3VwLzg4NS8xMTE0ODg1LzI3Q0Y5MzhGLTQxODItNDFGNS1CQkJBLTQzQjg0REMzOTgyNl81MDAuanBnJyxcbiAgICAgICAgICBjb21tZW50OiAn5pyA5Zac5qyi77yM5LiN6Kej6YeK44CCJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaXRlbV9pZDogJzMnLFxuICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAge3RpdGxlOiAn55S15b2xJywgY29sb3I6ICcjZmYwMDc3J30sXG4gICAgICAgICAgICB7dGl0bGU6ICfliqjmvKsnLCBjb2xvcjogJyM3NDdiYjEnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+WKqOeUuycsIGNvbG9yOiAnIzE5YmU2Yid9LFxuICAgICAgICAgICAge3RpdGxlOiAn5ryr55S7JywgY29sb3I6ICcjZmY5OTAwJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfnlLvpm4YnLCBjb2xvcjogJyNlZDNmMTQnfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGFiZWxfY2xhc3M6ICfliqjmvKsnLFxuICAgICAgICAgIHVzZXJfaWQ6ICcyMzEyNScsXG4gICAgICAgICAgdXNlcl9uYW1lOiAnY29sb3Itfn5+ficsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyM1Y2FkZmYnLFxuICAgICAgICAgIHVzZXJfaW1hZ2U6ICdodHRwczovL3BpYzMuemhpbWcuY29tLzgwL3YyLTBlZjg4NjRjYTMxOTFjOGMxZjdjODg1ZDYwMmVjZWQ2X2hkLmpwZycsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwOi8vd3d3LnNpbmFpbWcuY24vZHkvc2xpZGVuZXdzLzRfaW1nLzIwMTZfMDUvNzA0XzE4NDQ1NjZfNzA4MzQ5LmpwZycsXG4gICAgICAgICAgY29tbWVudDogJ+aIkeivtOWViueci+ingeWVpeW8gOWni+aUvuWvkuWBh+WNoeiuvuiuoei0ueadpeW+l+WPiuWPkeWTiOW8gOWni+eahOaBouWkjeetlOWkjemYluWutuWuieW6t+WIhuexu+Wkp+WvjOixqueIseepuumXtOeahOWIkuWIhumYv+mBk+WkqydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGl0ZW1zX2djOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpdGVtX2lkOiAnMicsXG4gICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfnlLXlvbEnLCBjb2xvcjogJyNmZjAwNzcnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+WKqOa8qycsIGNvbG9yOiAnIzc0N2JiMSd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5Yqo55S7JywgY29sb3I6ICcjMTliZTZiJ31cbiAgICAgICAgICBdLFxuICAgICAgICAgIGxhYmVsX2NsYXNzOiAn5Yqo5ryrJyxcbiAgICAgICAgICB1c2VyX2lkOiAnMjMxMjQnLFxuICAgICAgICAgIHVzZXJfbmFtZTogJ+Wwj+eDmCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZjk5MDAnLFxuICAgICAgICAgIHVzZXJfaW1hZ2U6ICdodHRwczovL3BpYzMuemhpbWcuY29tLzgwL3YyLTk5MzUxYjg3YjFlMGE5YWE5YTlkMDdiYmEwMzE4Mzc2X2hkLmpwZycsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwOi8vaW1nMi5tdGltZS5jbi91cC84ODUvMTExNDg4NS8yN0NGOTM4Ri00MTgyLTQxRjUtQkJCQS00M0I4NERDMzk4MjZfNTAwLmpwZycsXG4gICAgICAgICAgY29tbWVudDogJ+acgOWWnOasou+8jOS4jeino+mHiuOAgidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGl0ZW1faWQ6ICcxJyxcbiAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgIHt0aXRsZTogJ+WKqOeUuycsIGNvbG9yOiAnIzE5YmU2Yid9LFxuICAgICAgICAgICAge3RpdGxlOiAn5ryr55S7JywgY29sb3I6ICcjZmY5OTAwJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfnlLvpm4YnLCBjb2xvcjogJyNlZDNmMTQnfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbGFiZWxfY2xhc3M6ICfnlLXlvbEnLFxuICAgICAgICAgIHVzZXJfaWQ6ICcyMzEyMycsXG4gICAgICAgICAgdXNlcl9uYW1lOiAn5bCP5YWwJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ5NTA2MCcsXG4gICAgICAgICAgdXNlcl9pbWFnZTogJ2h0dHA6Ly93d3cuZ3g4ODk5LmNvbS91cGxvYWRzL2FsbGltZy8xNjA4MDQvMy0xNjBQNDExMTYzOS5qcGcnLFxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudWlpaXVpaWkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzEwL2l0ei1wb3N0ZXIyMDE3MTAwNi0yLTguanBnJyxcbiAgICAgICAgICBjb21tZW50OiAn5oiR5o6o6I2Q6L+Z5Liq5L2c5ZOB5piv5Zug5Li66L+Z5Liq5L2c5ZOBLOaMieWunumZheaJk+W8gOaIv+mXtOeIseS4iuWwseeIseS4iuemu+W8gC7miL/pl7TniLHnprvlvIDmiL/pl7TovqPmpJLpo5Lpo5Llj5HvvIzmiYDku6XmmpfnpLrms5XljaHop4bop5LmiZPlvIDmlrnkuobop6PpmL/mlq/liKnlurfnmoTlj5HnlJ/lv6vkuZDnu53lnLDlj43lh7vmjInml7bjgIInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpdGVtX2lkOiAnMycsXG4gICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICB7dGl0bGU6ICfnlLXlvbEnLCBjb2xvcjogJyNmZjAwNzcnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+WKqOa8qycsIGNvbG9yOiAnIzc0N2JiMSd9LFxuICAgICAgICAgICAge3RpdGxlOiAn5Yqo55S7JywgY29sb3I6ICcjMTliZTZiJ30sXG4gICAgICAgICAgICB7dGl0bGU6ICfmvKvnlLsnLCBjb2xvcjogJyNmZjk5MDAnfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ+eUu+mbhicsIGNvbG9yOiAnI2VkM2YxNCd9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBsYWJlbF9jbGFzczogJ+WKqOa8qycsXG4gICAgICAgICAgdXNlcl9pZDogJzIzMTI1JyxcbiAgICAgICAgICB1c2VyX25hbWU6ICdjb2xvci1+fn5+JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzVjYWRmZicsXG4gICAgICAgICAgdXNlcl9pbWFnZTogJ2h0dHBzOi8vcGljMy56aGltZy5jb20vODAvdjItMGVmODg2NGNhMzE5MWM4YzFmN2M4ODVkNjAyZWNlZDZfaGQuanBnJyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHA6Ly93d3cuc2luYWltZy5jbi9keS9zbGlkZW5ld3MvNF9pbWcvMjAxNl8wNS83MDRfMTg0NDU2Nl83MDgzNDkuanBnJyxcbiAgICAgICAgICBjb21tZW50OiAn5oiR6K+05ZWK55yL6KeB5ZWl5byA5aeL5pS+5a+S5YGH5Y2h6K6+6K6h6LS55p2l5b6X5Y+K5Y+R5ZOI5byA5aeL55qE5oGi5aSN562U5aSN6ZiW5a625a6J5bq35YiG57G75aSn5a+M6LGq54ix56m66Ze055qE5YiS5YiG6Zi/6YGT5aSrJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvbXBvbmVudElkOiR7ZS5kZXRhaWwuY29tcG9uZW50SWR9LHlvdSBzZWxlY3RlZDoke2UuZGV0YWlsLmtleX1gKVxuICAgICAgfSxcbiAgICAgIHByZXZlbnREKCkge30sXG4gICAgICByZWNvbW1lbmQgKGlkLCBpbWFnZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnYW5saT9pZD0nICsgaWQgKyAnJmltYWdlPScgKyBpbWFnZX0pXG4gICAgICB9LFxuICAgICAgdXNlcmluZm8gKGlkLCBuYW1lLCBpbWFnZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAndXNlcmluZm8/aWQ9JyArIGlkICsgJyZuYW1lPScgKyBuYW1lICsgJyZpbWFnZT0nICsgaW1hZ2V9KVxuICAgICAgfSxcbiAgICAgIGFjY2VwdCAoaWQpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5o6l5Y+X5a6J5YipaWQ9JyArIGlkLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvQ2lyY2xlIChjaXJjbGVOYW1lKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6ICdjaXJjbGU/Y2lyY2xlTmFtZT0nICsgY2lyY2xlTmFtZX0pXG4gICAgICB9LFxuICAgICAgb3BlblNoZWV0KCkge1xuICAgICAgICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgaXRlbUxpc3Q6IFsn5pS26JePJywgJ+S4jeaEn+WFtOi2oycsICfkuL7miqUnXSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS26JePJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMudGFwSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5LiN5oSf5YW06LajJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMudGFwSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Li+5oqlJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCAocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBzaG93SW5wdXQgKCkge1xuICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIGhpZGVJbnB1dCAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRWYWwgPSAnJ1xuICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBjbGVhcklucHV0ICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbCA9ICcnXG4gICAgICB9LFxuICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge31cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBpbml0Q2lyY2xlcyA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjEwNjo4MDgwL2NpcmNsZS9nZXRMaXN0QnlPcGVuSWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBpbml0Q2lyY2xlcy50aGVuKChyKSA9PiB7XG4gICAgICAgIHRoaXMuY2lyY2xlcyA9IHJcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgbGV0IGluaXRDaXJjbGVzID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMTA2OjgwODAvY2lyY2xlL2dldExpc3RCeU9wZW5JZCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgb3BlbklkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vcGVuSWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBpbml0Q2lyY2xlcy50aGVuKChyKSA9PiB7XG4gICAgICAgIHRoaXMuY2lyY2xlcyA9IHJcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=