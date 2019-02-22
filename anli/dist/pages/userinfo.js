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
      id: '',
      name: '',
      image: '',
      circles: null,
      labels: [{ title: '电影', color: '#ff0077' }, { title: '动漫', color: '#747bb1' }, { title: '动画', color: '#19be6b' }, { title: '漫画', color: '#ff9900' }, { title: '画集', color: '#ed3f14' }],
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
      classRecommend: function classRecommend(classname) {
        this.$navigate({ url: 'anliByClass?classname=' + classname });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(p) {
      this.id = p.id;
      this.name = p.name;
      this.image = p.image;
    }
  }, {
    key: 'onshow',
    value: function onshow() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/userinfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJpbmZvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJjaXJjbGVzIiwibGFiZWxzIiwidGl0bGUiLCJjb2xvciIsImFubGlzIiwiYW5saV9pZCIsImFubGlfY2xhc3MiLCJ1c2VyX2lkIiwidXNlcl9uYW1lIiwiYmFja2dyb3VuZCIsImV4aGliaXRzX2ltYWdlIiwiY29tbWVudCIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiY2xhc3MiLCJpbnN0YW5jZWlkIiwiZGVzYyIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbXBvbmVudElkIiwia2V5IiwicmVjb21tZW5kIiwiJG5hdmlnYXRlIiwidXJsIiwic2hvd19pbnN0YW5jZSIsImluc3RhbmNlaW1hZ2UiLCJjbGFzc1JlY29tbWVuZCIsImNsYXNzbmFtZSIsImV2ZW50cyIsInAiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDJDQURHO0FBRWYsb0JBQVksMkNBRkc7QUFHZixvQkFBWSwyQ0FIRztBQUlmLHNCQUFjLDZDQUpDO0FBS2YscUJBQWEsNENBTEU7QUFNZixrQkFBVSx5Q0FOSztBQU9mLHlCQUFpQiwwQ0FQRjtBQVFmLHlCQUFpQiwwQ0FSRjtBQVNmLG1CQUFXLDBDQVRJO0FBVWYsc0JBQWM7QUFWQztBQUZWLEssUUFlVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLFVBQUksRUFEQztBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGVBQVMsSUFKSjtBQUtMQyxjQUFRLENBQ04sRUFBQ0MsT0FBTyxJQUFSLEVBQWNDLE9BQU8sU0FBckIsRUFETSxFQUVOLEVBQUNELE9BQU8sSUFBUixFQUFjQyxPQUFPLFNBQXJCLEVBRk0sRUFHTixFQUFDRCxPQUFPLElBQVIsRUFBY0MsT0FBTyxTQUFyQixFQUhNLEVBSU4sRUFBQ0QsT0FBTyxJQUFSLEVBQWNDLE9BQU8sU0FBckIsRUFKTSxFQUtOLEVBQUNELE9BQU8sSUFBUixFQUFjQyxPQUFPLFNBQXJCLEVBTE0sQ0FMSDtBQVlMQyxhQUFPLENBQ0w7QUFDRUMsaUJBQVMsR0FEWDtBQUVFQyxvQkFBWSxJQUZkO0FBR0VDLGlCQUFTLE9BSFg7QUFJRUMsbUJBQVcsSUFKYjtBQUtFQyxvQkFBWSxTQUxkO0FBTUVDLHdCQUFnQixtRkFObEI7QUFPRUMsaUJBQVM7QUFQWCxPQURLLEVBVUw7QUFDRU4saUJBQVMsR0FEWDtBQUVFQyxvQkFBWSxJQUZkO0FBR0VDLGlCQUFTLE9BSFg7QUFJRUMsbUJBQVcsSUFKYjtBQUtFQyxvQkFBWSxTQUxkO0FBTUVDLHdCQUFnQixrRkFObEI7QUFPRUMsaUJBQVM7QUFQWCxPQVZLLEVBbUJMO0FBQ0VOLGlCQUFTLEdBRFg7QUFFRUMsb0JBQVksSUFGZDtBQUdFQyxpQkFBUyxPQUhYO0FBSUVDLG1CQUFXLElBSmI7QUFLRUMsb0JBQVksU0FMZDtBQU1FQyx3QkFBZ0IseUVBTmxCO0FBT0VDLGlCQUFTO0FBUFgsT0FuQkssQ0FaRjtBQXlDTEMsaUJBQVcsQ0FDVDtBQUNFQyxrQkFBVSxhQURaO0FBRUVDLGVBQU8sSUFGVDtBQUdFQyxvQkFBWSxHQUhkO0FBSUVOLG9CQUFZLFNBSmQ7QUFLRUMsd0JBQWdCLG1GQUxsQjtBQU1FTSxjQUFNO0FBTlIsT0FEUyxFQVNUO0FBQ0VILGtCQUFVLGFBRFo7QUFFRUMsZUFBTyxJQUZUO0FBR0VDLG9CQUFZLEdBSGQ7QUFJRU4sb0JBQVksU0FKZDtBQUtFQyx3QkFBZ0Isa0ZBTGxCO0FBTUVNLGNBQU07QUFOUixPQVRTLEVBaUJUO0FBQ0VILGtCQUFVLFlBRFo7QUFFRUMsZUFBTyxJQUZUO0FBR0VDLG9CQUFZLEdBSGQ7QUFJRU4sb0JBQVksU0FKZDtBQUtFQyx3QkFBZ0IseUVBTGxCO0FBTUVNLGNBQU07QUFOUixPQWpCUztBQXpDTixLLFFBcUVQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZUFBUyxpQkFBU0MsQ0FBVCxFQUFZO0FBQ25CQyxnQkFBUUMsR0FBUixrQkFBMkJGLEVBQUVHLE1BQUYsQ0FBU0MsV0FBcEMsc0JBQWdFSixFQUFFRyxNQUFGLENBQVNFLEdBQXpFO0FBQ0QsT0FITztBQUlSQyxlQUpRLHFCQUlHN0IsRUFKSCxFQUlPRSxLQUpQLEVBSWM7QUFDcEIsYUFBSzRCLFNBQUwsQ0FBZSxFQUFDQyxLQUFLLGFBQWEvQixFQUFiLEdBQWtCLFNBQWxCLEdBQThCRSxLQUFwQyxFQUFmO0FBQ0QsT0FOTztBQU9SOEIsbUJBUFEseUJBT09kLFVBUFAsRUFPbUJlLGFBUG5CLEVBT2tDO0FBQ3hDLGFBQUtILFNBQUwsQ0FBZSxFQUFDQyxLQUFLLHlCQUF5QmIsVUFBekIsR0FBc0MsaUJBQXRDLEdBQTBEZSxhQUFoRSxFQUFmO0FBQ0QsT0FUTztBQVVSQyxvQkFWUSwwQkFVUUMsU0FWUixFQVVtQjtBQUN6QixhQUFLTCxTQUFMLENBQWUsRUFBQ0MsS0FBSywyQkFBMkJJLFNBQWpDLEVBQWY7QUFDRDtBQVpPLEssUUFjVkMsTSxHQUFTLEU7Ozs7OzJCQUVGQyxDLEVBQUc7QUFDUixXQUFLckMsRUFBTCxHQUFVcUMsRUFBRXJDLEVBQVo7QUFDQSxXQUFLQyxJQUFMLEdBQVlvQyxFQUFFcEMsSUFBZDtBQUNBLFdBQUtDLEtBQUwsR0FBYW1DLEVBQUVuQyxLQUFmO0FBQ0Q7Ozs2QkFDUSxDQUFFOzs7O0VBOUdzQm9DLGVBQUtDLEk7O2tCQUFuQjdDLEsiLCJmaWxlIjoidXNlcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FubGlhJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWxpc3QnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1saXN0L2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWF2YXRhcic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWF2YXRhci9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWNjJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY2MvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICAgJ3d4Yy10YWInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtYnV0dG9uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtYnV0dG9uL2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7fVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlkOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgaW1hZ2U6ICcnLFxuICAgICAgY2lyY2xlczogbnVsbCxcbiAgICAgIGxhYmVsczogW1xuICAgICAgICB7dGl0bGU6ICfnlLXlvbEnLCBjb2xvcjogJyNmZjAwNzcnfSxcbiAgICAgICAge3RpdGxlOiAn5Yqo5ryrJywgY29sb3I6ICcjNzQ3YmIxJ30sXG4gICAgICAgIHt0aXRsZTogJ+WKqOeUuycsIGNvbG9yOiAnIzE5YmU2Yid9LFxuICAgICAgICB7dGl0bGU6ICfmvKvnlLsnLCBjb2xvcjogJyNmZjk5MDAnfSxcbiAgICAgICAge3RpdGxlOiAn55S76ZuGJywgY29sb3I6ICcjZWQzZjE0J31cbiAgICAgIF0sXG4gICAgICBhbmxpczogW1xuICAgICAgICB7XG4gICAgICAgICAgYW5saV9pZDogJzEnLFxuICAgICAgICAgIGFubGlfY2xhc3M6ICfnlLXlvbEnLFxuICAgICAgICAgIHVzZXJfaWQ6ICcyMzEyMycsXG4gICAgICAgICAgdXNlcl9uYW1lOiAn5bCP5YWwJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ5NTA2MCcsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwczovL2ltYWdlcy51aWlpdWlpaS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTAvaXR6LXBvc3RlcjIwMTcxMDA2LTItOC5qcGcnLFxuICAgICAgICAgIGNvbW1lbnQ6ICfmiJHmjqjojZDov5nkuKrkvZzlk4HmmK/lm6DkuLrov5nkuKrkvZzlk4Es5oyJ5a6e6ZmF5omT5byA5oi/6Ze054ix5LiK5bCx54ix5LiK56a75byALuaIv+mXtOeIseemu+W8gOaIv+mXtOi+o+akkumjkumjkuWPke+8jOaJgOS7peaal+ekuuazleWNoeinhuinkuaJk+W8gOaWueS6huino+mYv+aWr+WIqeW6t+eahOWPkeeUn+W/q+S5kOe7neWcsOWPjeWHu+aMieaXtuOAgidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGFubGlfaWQ6ICcyJyxcbiAgICAgICAgICBhbmxpX2NsYXNzOiAn55S15b2xJyxcbiAgICAgICAgICB1c2VyX2lkOiAnMjMxMjQnLFxuICAgICAgICAgIHVzZXJfbmFtZTogJ+Wwj+WFsCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyM0OTUwNjAnLFxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cDovL2ltZzIubXRpbWUuY24vdXAvODg1LzExMTQ4ODUvMjdDRjkzOEYtNDE4Mi00MUY1LUJCQkEtNDNCODREQzM5ODI2XzUwMC5qcGcnLFxuICAgICAgICAgIGNvbW1lbnQ6ICfmsqHku4DkuYjlpb3or7TnmoQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhbmxpX2lkOiAnMycsXG4gICAgICAgICAgYW5saV9jbGFzczogJ+eUteW9sScsXG4gICAgICAgICAgdXNlcl9pZDogJzIzMTI1JyxcbiAgICAgICAgICB1c2VyX25hbWU6ICflsI/lhbAnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjNWNhZGZmJyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHA6Ly93d3cuc2luYWltZy5jbi9keS9zbGlkZW5ld3MvNF9pbWcvMjAxNl8wNS83MDRfMTg0NDU2Nl83MDgzNDkuanBnJyxcbiAgICAgICAgICBjb21tZW50OiAn5b6I5aW955yL5ZOmJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcXVlc3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbjogJ+S9oOacgOWWnOasoueahOS4gOmDqOeUteW9seaYr++8nycsXG4gICAgICAgICAgY2xhc3M6ICfnlLXlvbEnLFxuICAgICAgICAgIGluc3RhbmNlaWQ6ICcxJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ5NTA2MCcsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwczovL2ltYWdlcy51aWlpdWlpaS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTAvaXR6LXBvc3RlcjIwMTcxMDA2LTItOC5qcGcnLFxuICAgICAgICAgIGRlc2M6ICfov5nmmK/kuIDpg6hidWxhYnVsYSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHF1ZXN0aW9uOiAn5L2g5pyA5Zac5qyi55qE55S15b2x5piO5pif5piv77yfJyxcbiAgICAgICAgICBjbGFzczogJ+aYjuaYnycsXG4gICAgICAgICAgaW5zdGFuY2VpZDogJzInLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDU2NzM0JyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHA6Ly9pbWcyLm10aW1lLmNuL3VwLzg4NS8xMTE0ODg1LzI3Q0Y5MzhGLTQxODItNDFGNS1CQkJBLTQzQjg0REMzOTgyNl81MDAuanBnJyxcbiAgICAgICAgICBkZXNjOiAn54mf5aSn6YCD5p2A55S15b2x55qE55S35Li76KeS44CC44CCJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcXVlc3Rpb246ICfkvaDnnIvov4fmnIDogIHnmoTnlLXlvbHmmK/vvJ8nLFxuICAgICAgICAgIGNsYXNzOiAn55S15b2xJyxcbiAgICAgICAgICBpbnN0YW5jZWlkOiAnMycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyM1Y2FkZmYnLFxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cDovL3d3dy5zaW5haW1nLmNuL2R5L3NsaWRlbmV3cy80X2ltZy8yMDE2XzA1LzcwNF8xODQ0NTY2XzcwODM0OS5qcGcnLFxuICAgICAgICAgIGRlc2M6ICfov5nmmK/kuIDpg6jpmL/lo6vlpKflpKvoibDoi6blpYvmlpcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHt9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgb25DbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29tcG9uZW50SWQ6JHtlLmRldGFpbC5jb21wb25lbnRJZH0seW91IHNlbGVjdGVkOiR7ZS5kZXRhaWwua2V5fWApXG4gICAgICB9LFxuICAgICAgcmVjb21tZW5kIChpZCwgaW1hZ2UpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDogJ2FubGk/aWQ9JyArIGlkICsgJyZpbWFnZT0nICsgaW1hZ2V9KVxuICAgICAgfSxcbiAgICAgIHNob3dfaW5zdGFuY2UgKGluc3RhbmNlaWQsIGluc3RhbmNlaW1hZ2UpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDogJ2luc3RhbmNlP2luc3RhbmNlaWQ9JyArIGluc3RhbmNlaWQgKyAnJmluc3RhbmNlaW1hZ2U9JyArIGluc3RhbmNlaW1hZ2V9KVxuICAgICAgfSxcbiAgICAgIGNsYXNzUmVjb21tZW5kIChjbGFzc25hbWUpIHtcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe3VybDogJ2FubGlCeUNsYXNzP2NsYXNzbmFtZT0nICsgY2xhc3NuYW1lfSlcbiAgICAgIH1cbiAgICB9XG4gICAgZXZlbnRzID0ge31cblxuICAgIG9uTG9hZChwKSB7XG4gICAgICB0aGlzLmlkID0gcC5pZFxuICAgICAgdGhpcy5uYW1lID0gcC5uYW1lXG4gICAgICB0aGlzLmltYWdlID0gcC5pbWFnZVxuICAgIH1cbiAgICBvbnNob3coKSB7fVxuICB9XG4iXX0=