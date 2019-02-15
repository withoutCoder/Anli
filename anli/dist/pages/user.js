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
      userInfo: null,
      circles: null,
      anlis: [{
        anli_id: '1',
        anli_class: '电影',
        user_id: '23123',
        user_name: '小兰',
        background: '#495060',
        exhibits_image: 'https://images.uiiiuiii.com/wp-content/uploads/2017/10/itz-poster20171006-2-8.jpg',
        comment: '我推荐这个作品是因为这个作品,按实际打开房间爱上就爱上离开.房间爱离开房间辣椒飒飒发，所以暗示法卡视角打开方了解阿斯利康的发生快乐绝地反击按时。'
      }, {
        anli_id: '2',
        anli_class: '电影',
        user_id: '23124',
        user_name: '小兰',
        background: '#495060',
        exhibits_image: 'http://img2.mtime.cn/up/885/1114885/27CF938F-4182-41F5-BBBA-43B84DC39826_500.jpg',
        comment: '没什么好说的'
      }, {
        anli_id: '3',
        anli_class: '电影',
        user_id: '23125',
        user_name: '小兰',
        background: '#5cadff',
        exhibits_image: 'http://www.sinaimg.cn/dy/slidenews/4_img/2016_05/704_1844566_708349.jpg',
        comment: '很好看哦'
      }],
      questions: [{
        question: '你最喜欢的一部电影是？',
        class: '电影',
        instanceid: '1',
        background: '#495060',
        exhibits_image: 'https://images.uiiiuiii.com/wp-content/uploads/2017/10/itz-poster20171006-2-8.jpg',
        desc: '这是一部bulabula'
      }, {
        question: '你最喜欢的电影明星是？',
        class: '明星',
        instanceid: '2',
        background: '#456734',
        exhibits_image: 'http://img2.mtime.cn/up/885/1114885/27CF938F-4182-41F5-BBBA-43B84DC39826_500.jpg',
        desc: '牟大逃杀电影的男主角。。'
      }, {
        question: '你看过最老的电影是？',
        class: '电影',
        instanceid: '3',
        background: '#5cadff',
        exhibits_image: 'http://www.sinaimg.cn/dy/slidenews/4_img/2016_05/704_1844566_708349.jpg',
        desc: '这是一部阿士大夫艰苦奋斗'
      }]
    }, _this.computed = {}, _this.methods = {
      onClick: function onClick(e) {
        console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      },
      recommend: function recommend(id, image) {
        this.$navigate({ url: 'anli?id=' + id + '&image=' + image });
      },
      show_instance: function show_instance(instanceid, instanceimage) {
        this.$navigate({ url: 'instance?instanceid=' + instanceid + '&instanceimage=' + instanceimage });
      },
      toCircle: function toCircle(circleName) {
        this.$navigate({ url: 'circle?circleName=' + circleName });
      },
      addNewCard: function addNewCard() {
        this.$navigate({ url: 'addcard' });
      },
      addNewInstance: function addNewInstance() {
        this.$navigate({ url: 'addInstance' });
      },
      addNewCircle: function addNewCircle() {
        this.$navigate({ url: 'addcircle' });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getCircleList',
    value: function getCircleList() {
      var _this2 = this;

      new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/users/getCircleList',
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
    key: 'onLoad',
    value: function onLoad() {
      this.userInfo = this.$parent.globalData.userInfo;
    }
  }, {
    key: 'onshow',
    value: function onshow() {
      this.userInfo = this.$parent.globalData.userInfo;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsInRlc3RNaXhpbiIsImRhdGEiLCJ1c2VySW5mbyIsImNpcmNsZXMiLCJhbmxpcyIsImFubGlfaWQiLCJhbmxpX2NsYXNzIiwidXNlcl9pZCIsInVzZXJfbmFtZSIsImJhY2tncm91bmQiLCJleGhpYml0c19pbWFnZSIsImNvbW1lbnQiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImNsYXNzIiwiaW5zdGFuY2VpZCIsImRlc2MiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJjb21wb25lbnRJZCIsImtleSIsInJlY29tbWVuZCIsImlkIiwiaW1hZ2UiLCIkbmF2aWdhdGUiLCJ1cmwiLCJzaG93X2luc3RhbmNlIiwiaW5zdGFuY2VpbWFnZSIsInRvQ2lyY2xlIiwiY2lyY2xlTmFtZSIsImFkZE5ld0NhcmQiLCJhZGROZXdJbnN0YW5jZSIsImFkZE5ld0NpcmNsZSIsImV2ZW50cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2VweSIsInJlcXVlc3QiLCJvcGVuSWQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJ0aGVuIiwiciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDJDQURHO0FBRWYsb0JBQVksMkNBRkc7QUFHZixvQkFBWSwyQ0FIRztBQUlmLHNCQUFjLDZDQUpDO0FBS2YscUJBQWEsNENBTEU7QUFNZixrQkFBVSx5Q0FOSztBQU9mLHlCQUFpQiwwQ0FQRjtBQVFmLHlCQUFpQiwwQ0FSRjtBQVNmLG1CQUFXLDBDQVRJO0FBVWYsc0JBQWM7QUFWQztBQUZWLEssUUFlVEMsVSxHQUFhLEUsUUFFYkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMQyxlQUFTLElBRko7QUFHTEMsYUFBTyxDQUNMO0FBQ0VDLGlCQUFTLEdBRFg7QUFFRUMsb0JBQVksSUFGZDtBQUdFQyxpQkFBUyxPQUhYO0FBSUVDLG1CQUFXLElBSmI7QUFLRUMsb0JBQVksU0FMZDtBQU1FQyx3QkFBZ0IsbUZBTmxCO0FBT0VDLGlCQUFTO0FBUFgsT0FESyxFQVVMO0FBQ0VOLGlCQUFTLEdBRFg7QUFFRUMsb0JBQVksSUFGZDtBQUdFQyxpQkFBUyxPQUhYO0FBSUVDLG1CQUFXLElBSmI7QUFLRUMsb0JBQVksU0FMZDtBQU1FQyx3QkFBZ0Isa0ZBTmxCO0FBT0VDLGlCQUFTO0FBUFgsT0FWSyxFQW1CTDtBQUNFTixpQkFBUyxHQURYO0FBRUVDLG9CQUFZLElBRmQ7QUFHRUMsaUJBQVMsT0FIWDtBQUlFQyxtQkFBVyxJQUpiO0FBS0VDLG9CQUFZLFNBTGQ7QUFNRUMsd0JBQWdCLHlFQU5sQjtBQU9FQyxpQkFBUztBQVBYLE9BbkJLLENBSEY7QUFnQ0xDLGlCQUFXLENBQ1Q7QUFDRUMsa0JBQVUsYUFEWjtBQUVFQyxlQUFPLElBRlQ7QUFHRUMsb0JBQVksR0FIZDtBQUlFTixvQkFBWSxTQUpkO0FBS0VDLHdCQUFnQixtRkFMbEI7QUFNRU0sY0FBTTtBQU5SLE9BRFMsRUFTVDtBQUNFSCxrQkFBVSxhQURaO0FBRUVDLGVBQU8sSUFGVDtBQUdFQyxvQkFBWSxHQUhkO0FBSUVOLG9CQUFZLFNBSmQ7QUFLRUMsd0JBQWdCLGtGQUxsQjtBQU1FTSxjQUFNO0FBTlIsT0FUUyxFQWlCVDtBQUNFSCxrQkFBVSxZQURaO0FBRUVDLGVBQU8sSUFGVDtBQUdFQyxvQkFBWSxHQUhkO0FBSUVOLG9CQUFZLFNBSmQ7QUFLRUMsd0JBQWdCLHlFQUxsQjtBQU1FTSxjQUFNO0FBTlIsT0FqQlM7QUFoQ04sSyxRQTREUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGVBQVMsaUJBQVNDLENBQVQsRUFBWTtBQUNuQkMsZ0JBQVFDLEdBQVIsa0JBQTJCRixFQUFFRyxNQUFGLENBQVNDLFdBQXBDLHNCQUFnRUosRUFBRUcsTUFBRixDQUFTRSxHQUF6RTtBQUNELE9BSE87QUFJUkMsZUFKUSxxQkFJR0MsRUFKSCxFQUlPQyxLQUpQLEVBSWM7QUFDcEIsYUFBS0MsU0FBTCxDQUFlLEVBQUNDLEtBQUssYUFBYUgsRUFBYixHQUFrQixTQUFsQixHQUE4QkMsS0FBcEMsRUFBZjtBQUNELE9BTk87QUFPUkcsbUJBUFEseUJBT09oQixVQVBQLEVBT21CaUIsYUFQbkIsRUFPa0M7QUFDeEMsYUFBS0gsU0FBTCxDQUFlLEVBQUNDLEtBQUsseUJBQXlCZixVQUF6QixHQUFzQyxpQkFBdEMsR0FBMERpQixhQUFoRSxFQUFmO0FBQ0QsT0FUTztBQVVSQyxjQVZRLG9CQVVFQyxVQVZGLEVBVWM7QUFDcEIsYUFBS0wsU0FBTCxDQUFlLEVBQUNDLEtBQUssdUJBQXVCSSxVQUE3QixFQUFmO0FBQ0QsT0FaTztBQWFSQyxnQkFiUSx3QkFhTTtBQUNaLGFBQUtOLFNBQUwsQ0FBZSxFQUFDQyxLQUFLLFNBQU4sRUFBZjtBQUNELE9BZk87QUFnQlJNLG9CQWhCUSw0QkFnQlU7QUFDaEIsYUFBS1AsU0FBTCxDQUFlLEVBQUNDLEtBQUssYUFBTixFQUFmO0FBQ0QsT0FsQk87QUFtQlJPLGtCQW5CUSwwQkFtQlE7QUFDZCxhQUFLUixTQUFMLENBQWUsRUFBQ0MsS0FBSyxXQUFOLEVBQWY7QUFDRDtBQXJCTyxLLFFBeUNWUSxNLEdBQVMsRTs7Ozs7b0NBbEJRO0FBQUE7O0FBQ2YsVUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYYixlQUFLLCtDQURNO0FBRVg3QixnQkFBTTtBQUNKMkMsb0JBQVEsT0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCRjtBQUQ1QixXQUZLO0FBS1hHLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FMRztBQVFYQyxpQkFSVyxtQkFRRkMsR0FSRSxFQVFHO0FBQ1pULG9CQUFRUyxJQUFJaEQsSUFBWjtBQUNEO0FBVlUsU0FBYjtBQVlELE9BYkQsRUFhR2lELElBYkgsQ0FhUSxVQUFDQyxDQUFELEVBQU87QUFDYixlQUFLaEQsT0FBTCxHQUFlZ0QsQ0FBZjtBQUNELE9BZkQ7QUFnQkQ7Ozs2QkFHUTtBQUNQLFdBQUtqRCxRQUFMLEdBQWdCLEtBQUsyQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0I1QyxRQUF4QztBQUNEOzs7NkJBRVE7QUFDUCxXQUFLQSxRQUFMLEdBQWdCLEtBQUsyQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0I1QyxRQUF4QztBQUNEOzs7O0VBbklnQ3dDLGVBQUtVLEk7O2tCQUFuQjFELEsiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQW5saWEnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtYXZhdGFyJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYXZhdGFyL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtY2MnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1jYy9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAgICd3eGMtdGFiLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvcGFuZWwnLFxuICAgICAgICAnd3hjLXRhYic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCdcbiAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgICAgY2lyY2xlczogbnVsbCxcbiAgICAgIGFubGlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhbmxpX2lkOiAnMScsXG4gICAgICAgICAgYW5saV9jbGFzczogJ+eUteW9sScsXG4gICAgICAgICAgdXNlcl9pZDogJzIzMTIzJyxcbiAgICAgICAgICB1c2VyX25hbWU6ICflsI/lhbAnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDk1MDYwJyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVpaWl1aWlpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9pdHotcG9zdGVyMjAxNzEwMDYtMi04LmpwZycsXG4gICAgICAgICAgY29tbWVudDogJ+aIkeaOqOiNkOi/meS4quS9nOWTgeaYr+WboOS4uui/meS4quS9nOWTgSzmjInlrp7pmYXmiZPlvIDmiL/pl7TniLHkuIrlsLHniLHkuIrnprvlvIAu5oi/6Ze054ix56a75byA5oi/6Ze06L6j5qSS6aOS6aOS5Y+R77yM5omA5Lul5pqX56S65rOV5Y2h6KeG6KeS5omT5byA5pa55LqG6Kej6Zi/5pav5Yip5bq355qE5Y+R55Sf5b+r5LmQ57ud5Zyw5Y+N5Ye75oyJ5pe244CCJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYW5saV9pZDogJzInLFxuICAgICAgICAgIGFubGlfY2xhc3M6ICfnlLXlvbEnLFxuICAgICAgICAgIHVzZXJfaWQ6ICcyMzEyNCcsXG4gICAgICAgICAgdXNlcl9uYW1lOiAn5bCP5YWwJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ5NTA2MCcsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwOi8vaW1nMi5tdGltZS5jbi91cC84ODUvMTExNDg4NS8yN0NGOTM4Ri00MTgyLTQxRjUtQkJCQS00M0I4NERDMzk4MjZfNTAwLmpwZycsXG4gICAgICAgICAgY29tbWVudDogJ+ayoeS7gOS5iOWlveivtOeahCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGFubGlfaWQ6ICczJyxcbiAgICAgICAgICBhbmxpX2NsYXNzOiAn55S15b2xJyxcbiAgICAgICAgICB1c2VyX2lkOiAnMjMxMjUnLFxuICAgICAgICAgIHVzZXJfbmFtZTogJ+Wwj+WFsCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyM1Y2FkZmYnLFxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cDovL3d3dy5zaW5haW1nLmNuL2R5L3NsaWRlbmV3cy80X2ltZy8yMDE2XzA1LzcwNF8xODQ0NTY2XzcwODM0OS5qcGcnLFxuICAgICAgICAgIGNvbW1lbnQ6ICflvojlpb3nnIvlk6YnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBxdWVzdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHF1ZXN0aW9uOiAn5L2g5pyA5Zac5qyi55qE5LiA6YOo55S15b2x5piv77yfJyxcbiAgICAgICAgICBjbGFzczogJ+eUteW9sScsXG4gICAgICAgICAgaW5zdGFuY2VpZDogJzEnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDk1MDYwJyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVpaWl1aWlpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9pdHotcG9zdGVyMjAxNzEwMDYtMi04LmpwZycsXG4gICAgICAgICAgZGVzYzogJ+i/meaYr+S4gOmDqGJ1bGFidWxhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcXVlc3Rpb246ICfkvaDmnIDllpzmrKLnmoTnlLXlvbHmmI7mmJ/mmK/vvJ8nLFxuICAgICAgICAgIGNsYXNzOiAn5piO5pifJyxcbiAgICAgICAgICBpbnN0YW5jZWlkOiAnMicsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyM0NTY3MzQnLFxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cDovL2ltZzIubXRpbWUuY24vdXAvODg1LzExMTQ4ODUvMjdDRjkzOEYtNDE4Mi00MUY1LUJCQkEtNDNCODREQzM5ODI2XzUwMC5qcGcnLFxuICAgICAgICAgIGRlc2M6ICfniZ/lpKfpgIPmnYDnlLXlvbHnmoTnlLfkuLvop5LjgILjgIInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbjogJ+S9oOeci+i/h+acgOiAgeeahOeUteW9seaYr++8nycsXG4gICAgICAgICAgY2xhc3M6ICfnlLXlvbEnLFxuICAgICAgICAgIGluc3RhbmNlaWQ6ICczJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzVjYWRmZicsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwOi8vd3d3LnNpbmFpbWcuY24vZHkvc2xpZGVuZXdzLzRfaW1nLzIwMTZfMDUvNzA0XzE4NDQ1NjZfNzA4MzQ5LmpwZycsXG4gICAgICAgICAgZGVzYzogJ+i/meaYr+S4gOmDqOmYv+Wjq+Wkp+Wkq+iJsOiLpuWli+aWlydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb21wb25lbnRJZDoke2UuZGV0YWlsLmNvbXBvbmVudElkfSx5b3Ugc2VsZWN0ZWQ6JHtlLmRldGFpbC5rZXl9YClcbiAgICAgIH0sXG4gICAgICByZWNvbW1lbmQgKGlkLCBpbWFnZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnYW5saT9pZD0nICsgaWQgKyAnJmltYWdlPScgKyBpbWFnZX0pXG4gICAgICB9LFxuICAgICAgc2hvd19pbnN0YW5jZSAoaW5zdGFuY2VpZCwgaW5zdGFuY2VpbWFnZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnaW5zdGFuY2U/aW5zdGFuY2VpZD0nICsgaW5zdGFuY2VpZCArICcmaW5zdGFuY2VpbWFnZT0nICsgaW5zdGFuY2VpbWFnZX0pXG4gICAgICB9LFxuICAgICAgdG9DaXJjbGUgKGNpcmNsZU5hbWUpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDogJ2NpcmNsZT9jaXJjbGVOYW1lPScgKyBjaXJjbGVOYW1lfSlcbiAgICAgIH0sXG4gICAgICBhZGROZXdDYXJkICgpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDogJ2FkZGNhcmQnfSlcbiAgICAgIH0sXG4gICAgICBhZGROZXdJbnN0YW5jZSAoKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6ICdhZGRJbnN0YW5jZSd9KVxuICAgICAgfSxcbiAgICAgIGFkZE5ld0NpcmNsZSAoKSB7XG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHt1cmw6ICdhZGRjaXJjbGUnfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q2lyY2xlTGlzdCAoKSB7XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cDovLzE5Mi4xNjguMC4xMDY6ODA4MC91c2Vycy9nZXRDaXJjbGVMaXN0JyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBvcGVuSWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm9wZW5JZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSkudGhlbigocikgPT4ge1xuICAgICAgICB0aGlzLmNpcmNsZXMgPSByXG4gICAgICB9KVxuICAgIH1cbiAgICBldmVudHMgPSB7fVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuXG4gICAgb25zaG93KCkge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICB9XG4iXX0=