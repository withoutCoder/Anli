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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJpbmZvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJjaXJjbGVzIiwibGFiZWxzIiwidGl0bGUiLCJjb2xvciIsImFubGlzIiwiYW5saV9pZCIsImFubGlfY2xhc3MiLCJ1c2VyX2lkIiwidXNlcl9uYW1lIiwiYmFja2dyb3VuZCIsImV4aGliaXRzX2ltYWdlIiwiY29tbWVudCIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiY2xhc3MiLCJpbnN0YW5jZWlkIiwiZGVzYyIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImNvbXBvbmVudElkIiwia2V5IiwicmVjb21tZW5kIiwiJG5hdmlnYXRlIiwidXJsIiwic2hvd19pbnN0YW5jZSIsImluc3RhbmNlaW1hZ2UiLCJjbGFzc1JlY29tbWVuZCIsImNsYXNzbmFtZSIsImV2ZW50cyIsInAiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksMkNBREc7QUFFZixvQkFBWSwyQ0FGRztBQUdmLG9CQUFZLDJDQUhHO0FBSWYsc0JBQWMsNkNBSkM7QUFLZixxQkFBYSw0Q0FMRTtBQU1mLGtCQUFVLHlDQU5LO0FBT2YseUJBQWlCLDBDQVBGO0FBUWYseUJBQWlCLDBDQVJGO0FBU2YsbUJBQVcsMENBVEk7QUFVZixzQkFBYztBQVZDO0FBRlYsSyxRQWVUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTztBQUNMQyxV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cG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdBbmxpYScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1saXN0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGlzdC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1hdmF0YXInOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1hdmF0YXIvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sYWJlbC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1jYyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWNjL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWJ1dHRvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJ1dHRvbi9kaXN0L2luZGV4J1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRzID0ge31cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBpbWFnZTogJycsXG4gICAgICBjaXJjbGVzOiBudWxsLFxuICAgICAgbGFiZWxzOiBbXG4gICAgICAgIHt0aXRsZTogJ+eUteW9sScsIGNvbG9yOiAnI2ZmMDA3Nyd9LFxuICAgICAgICB7dGl0bGU6ICfliqjmvKsnLCBjb2xvcjogJyM3NDdiYjEnfSxcbiAgICAgICAge3RpdGxlOiAn5Yqo55S7JywgY29sb3I6ICcjMTliZTZiJ30sXG4gICAgICAgIHt0aXRsZTogJ+a8q+eUuycsIGNvbG9yOiAnI2ZmOTkwMCd9LFxuICAgICAgICB7dGl0bGU6ICfnlLvpm4YnLCBjb2xvcjogJyNlZDNmMTQnfVxuICAgICAgXSxcbiAgICAgIGFubGlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhbmxpX2lkOiAnMScsXG4gICAgICAgICAgYW5saV9jbGFzczogJ+eUteW9sScsXG4gICAgICAgICAgdXNlcl9pZDogJzIzMTIzJyxcbiAgICAgICAgICB1c2VyX25hbWU6ICflsI/lhbAnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDk1MDYwJyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVpaWl1aWlpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9pdHotcG9zdGVyMjAxNzEwMDYtMi04LmpwZycsXG4gICAgICAgICAgY29tbWVudDogJ+aIkeaOqOiNkOi/meS4quS9nOWTgeaYr+WboOS4uui/meS4quS9nOWTgSzmjInlrp7pmYXmiZPlvIDmiL/pl7TniLHkuIrlsLHniLHkuIrnprvlvIAu5oi/6Ze054ix56a75byA5oi/6Ze06L6j5qSS6aOS6aOS5Y+R77yM5omA5Lul5pqX56S65rOV5Y2h6KeG6KeS5omT5byA5pa55LqG6Kej6Zi/5pav5Yip5bq355qE5Y+R55Sf5b+r5LmQ57ud5Zyw5Y+N5Ye75oyJ5pe244CCJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYW5saV9pZDogJzInLFxuICAgICAgICAgIGFubGlfY2xhc3M6ICfnlLXlvbEnLFxuICAgICAgICAgIHVzZXJfaWQ6ICcyMzEyNCcsXG4gICAgICAgICAgdXNlcl9uYW1lOiAn5bCP5YWwJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ5NTA2MCcsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwOi8vaW1nMi5tdGltZS5jbi91cC84ODUvMTExNDg4NS8yN0NGOTM4Ri00MTgyLTQxRjUtQkJCQS00M0I4NERDMzk4MjZfNTAwLmpwZycsXG4gICAgICAgICAgY29tbWVudDogJ+ayoeS7gOS5iOWlveivtOeahCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGFubGlfaWQ6ICczJyxcbiAgICAgICAgICBhbmxpX2NsYXNzOiAn55S15b2xJyxcbiAgICAgICAgICB1c2VyX2lkOiAnMjMxMjUnLFxuICAgICAgICAgIHVzZXJfbmFtZTogJ+Wwj+WFsCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyM1Y2FkZmYnLFxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cDovL3d3dy5zaW5haW1nLmNuL2R5L3NsaWRlbmV3cy80X2ltZy8yMDE2XzA1LzcwNF8xODQ0NTY2XzcwODM0OS5qcGcnLFxuICAgICAgICAgIGNvbW1lbnQ6ICflvojlpb3nnIvlk6YnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBxdWVzdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHF1ZXN0aW9uOiAn5L2g5pyA5Zac5qyi55qE5LiA6YOo55S15b2x5piv77yfJyxcbiAgICAgICAgICBjbGFzczogJ+eUteW9sScsXG4gICAgICAgICAgaW5zdGFuY2VpZDogJzEnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjNDk1MDYwJyxcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVpaWl1aWlpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9pdHotcG9zdGVyMjAxNzEwMDYtMi04LmpwZycsXG4gICAgICAgICAgZGVzYzogJ+i/meaYr+S4gOmDqGJ1bGFidWxhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcXVlc3Rpb246ICfkvaDmnIDllpzmrKLnmoTnlLXlvbHmmI7mmJ/mmK/vvJ8nLFxuICAgICAgICAgIGNsYXNzOiAn5piO5pifJyxcbiAgICAgICAgICBpbnN0YW5jZWlkOiAnMicsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyM0NTY3MzQnLFxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cDovL2ltZzIubXRpbWUuY24vdXAvODg1LzExMTQ4ODUvMjdDRjkzOEYtNDE4Mi00MUY1LUJCQkEtNDNCODREQzM5ODI2XzUwMC5qcGcnLFxuICAgICAgICAgIGRlc2M6ICfniZ/lpKfpgIPmnYDnlLXlvbHnmoTnlLfkuLvop5LjgILjgIInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBxdWVzdGlvbjogJ+S9oOeci+i/h+acgOiAgeeahOeUteW9seaYr++8nycsXG4gICAgICAgICAgY2xhc3M6ICfnlLXlvbEnLFxuICAgICAgICAgIGluc3RhbmNlaWQ6ICczJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzVjYWRmZicsXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwOi8vd3d3LnNpbmFpbWcuY24vZHkvc2xpZGVuZXdzLzRfaW1nLzIwMTZfMDUvNzA0XzE4NDQ1NjZfNzA4MzQ5LmpwZycsXG4gICAgICAgICAgZGVzYzogJ+i/meaYr+S4gOmDqOmYv+Wjq+Wkp+Wkq+iJsOiLpuWli+aWlydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge31cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDb21wb25lbnRJZDoke2UuZGV0YWlsLmNvbXBvbmVudElkfSx5b3Ugc2VsZWN0ZWQ6JHtlLmRldGFpbC5rZXl9YClcbiAgICAgIH0sXG4gICAgICByZWNvbW1lbmQgKGlkLCBpbWFnZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnYW5saT9pZD0nICsgaWQgKyAnJmltYWdlPScgKyBpbWFnZX0pXG4gICAgICB9LFxuICAgICAgc2hvd19pbnN0YW5jZSAoaW5zdGFuY2VpZCwgaW5zdGFuY2VpbWFnZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnaW5zdGFuY2U/aW5zdGFuY2VpZD0nICsgaW5zdGFuY2VpZCArICcmaW5zdGFuY2VpbWFnZT0nICsgaW5zdGFuY2VpbWFnZX0pXG4gICAgICB9LFxuICAgICAgY2xhc3NSZWNvbW1lbmQgKGNsYXNzbmFtZSkge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnYW5saUJ5Q2xhc3M/Y2xhc3NuYW1lPScgKyBjbGFzc25hbWV9KVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHMgPSB7fVxuXG4gICAgb25Mb2FkKHApIHtcbiAgICAgIHRoaXMuaWQgPSBwLmlkXG4gICAgICB0aGlzLm5hbWUgPSBwLm5hbWVcbiAgICAgIHRoaXMuaW1hZ2UgPSBwLmltYWdlXG4gICAgfVxuICAgIG9uc2hvdygpIHt9XG4gIH1cbiJdfQ==