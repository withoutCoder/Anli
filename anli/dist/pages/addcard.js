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
      navigationBarTitleText: '添加新卡片',
      usingComponents: {
        'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-input': '../../packages/@minui/wxc-input/dist/index'
      }
    }, _this.components = {}, _this.data = {
      cards: [{
        cardId: '0',
        userId: '',
        question: '你最喜欢的一部电影是？',
        instanceId: '4123',
        picturePath: 'https://images.uiiiuiii.com/wp-content/uploads/2017/10/itz-poster20171006-2-8.jpg',
        answer: ''
      }, {
        cardId: '2',
        userId: '',
        question: '你最喜欢的电影明星是？',
        instanceId: '1231',
        picturePath: 'http://img2.mtime.cn/up/885/1114885/27CF938F-4182-41F5-BBBA-43B84DC39826_500.jpg',
        answer: ''
      }, {
        cardId: '1',
        userId: '',
        question: '你看过最老的电影是？',
        instanceId: '1231',
        picturePath: 'http://www.sinaimg.cn/dy/slidenews/4_img/2016_05/704_1844566_708349.jpg',
        answer: ''
      }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'createInstance',
    value: function createInstance() {
      for (var p in this.cards) {
        console.log(this.cards[p].name);
        _wepy2.default.request({
          url: 'http://192.168.0.106:8080/instances/insert',
          data: {
            instanceId: parseInt(Math.random() * 10000),
            name: this.cards[p].name,
            circleList: [1, 2, 3, 4, 5],
            picturePath: this.cards[p].picturePath,
            decs: ['导演: 王莽', '编剧: 周星驰', '主演: 电鳗', '上映时间: 2018-9-6', '片长: 152分钟', '类型: 恐怖/悬疑', '介绍: 小丑中计现身想杀死丹特，却被高登和蝙蝠侠阻止并被逮捕。蝙蝠侠开始审问小丑，他透露瑞秋和丹特已被带到城市的两端，并放置了两个遥控爆裂物，之间的距离让蝙蝠侠无法同时救他们。蝙蝠侠立即出发去救瑞秋，同时高登和警察去救丹特。但小丑故意将瑞秋与丹特的位置说反，让两人救的对象相反。通过炸弹的掩护，小丑和刘先生顺利逃出警局。蝙蝠侠即时救到丹特，但丹特被火烧掉了左半张脸，被送往医院。高登却没救到瑞秋，让她在爆炸中身亡。丹特因瑞秋的死陷入疯狂。此时小丑来到医院释放了丹特，并说服他必须向警察、黑帮、高登和蝙蝠侠复仇，丹特成为了双面人。']
          },
          header: {
            'content-type': 'application/json'
          },
          success: function success(res) {
            console.log(res.data);
          }
        });
      }
    }
  }, {
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/addcard'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNhcmQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjYXJkcyIsImNhcmRJZCIsInVzZXJJZCIsInF1ZXN0aW9uIiwiaW5zdGFuY2VJZCIsInBpY3R1cmVQYXRoIiwiYW5zd2VyIiwibWV0aG9kcyIsInAiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiY2lyY2xlTGlzdCIsImRlY3MiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZSIsImRldGFpbCIsInZhbHVlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLDJDQURHO0FBRWYseUJBQWlCLDBDQUZGO0FBR2YseUJBQWlCLDBDQUhGO0FBSWYscUJBQWE7QUFKRTtBQUZWLEssUUFVVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTDtBQUNFQyxnQkFBUSxHQURWO0FBRUVDLGdCQUFRLEVBRlY7QUFHRUMsa0JBQVUsYUFIWjtBQUlFQyxvQkFBWSxNQUpkO0FBS0VDLHFCQUFhLG1GQUxmO0FBTUVDLGdCQUFRO0FBTlYsT0FESyxFQVNMO0FBQ0VMLGdCQUFRLEdBRFY7QUFFRUMsZ0JBQVEsRUFGVjtBQUdFQyxrQkFBVSxhQUhaO0FBSUVDLG9CQUFZLE1BSmQ7QUFLRUMscUJBQWEsa0ZBTGY7QUFNRUMsZ0JBQVE7QUFOVixPQVRLLEVBaUJMO0FBQ0VMLGdCQUFRLEdBRFY7QUFFRUMsZ0JBQVEsRUFGVjtBQUdFQyxrQkFBVSxZQUhaO0FBSUVDLG9CQUFZLE1BSmQ7QUFLRUMscUJBQWEseUVBTGY7QUFNRUMsZ0JBQVE7QUFOVixPQWpCSztBQURGLEssUUE2QlBDLE8sR0FBVSxFOzs7OztxQ0FFTztBQUNmLFdBQUssSUFBSUMsQ0FBVCxJQUFjLEtBQUtSLEtBQW5CLEVBQTBCO0FBQ3hCUyxnQkFBUUMsR0FBUixDQUFZLEtBQUtWLEtBQUwsQ0FBV1EsQ0FBWCxFQUFjRyxJQUExQjtBQUNBQyx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssNENBRE07QUFFWGYsZ0JBQU07QUFDSkssd0JBQVlXLFNBQVNDLEtBQUtDLE1BQUwsS0FBZ0IsS0FBekIsQ0FEUjtBQUVKTixrQkFBTSxLQUFLWCxLQUFMLENBQVdRLENBQVgsRUFBY0csSUFGaEI7QUFHSk8sd0JBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUhSO0FBSUpiLHlCQUFhLEtBQUtMLEtBQUwsQ0FBV1EsQ0FBWCxFQUFjSCxXQUp2QjtBQUtKYyxrQkFBTSxDQUNKLFFBREksRUFFSixTQUZJLEVBR0osUUFISSxFQUlKLGdCQUpJLEVBS0osV0FMSSxFQU1KLFdBTkksRUFPSiwwUUFQSTtBQUxGLFdBRks7QUFpQlhDLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FqQkc7QUFvQlhDLGlCQXBCVyxtQkFvQkZDLEdBcEJFLEVBb0JHO0FBQ1piLG9CQUFRQyxHQUFSLENBQVlZLElBQUl2QixJQUFoQjtBQUNEO0FBdEJVLFNBQWI7QUF3QkQ7QUFDRjs7OytCQUVVd0IsQyxFQUFHO0FBQ1pkLGNBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ2EsRUFBRUMsTUFBRixDQUFTQyxLQUEvQztBQUNEOzs7NkJBRVEsQ0FBRTs7OztFQTlFc0JiLGVBQUtjLEk7O2tCQUFuQmhDLEsiLCJmaWxlIjoiYWRkY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a3u+WKoOaWsOWNoeeJhycsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxuICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXG4gICAgICAnd3hjLXRhYi1wYW5lbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L3BhbmVsJyxcbiAgICAgICd3eGMtaW5wdXQnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pbnB1dC9kaXN0L2luZGV4J1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudHMgPSB7fVxuXG4gIGRhdGEgPSB7XG4gICAgY2FyZHM6IFtcbiAgICAgIHtcbiAgICAgICAgY2FyZElkOiAnMCcsXG4gICAgICAgIHVzZXJJZDogJycsXG4gICAgICAgIHF1ZXN0aW9uOiAn5L2g5pyA5Zac5qyi55qE5LiA6YOo55S15b2x5piv77yfJyxcbiAgICAgICAgaW5zdGFuY2VJZDogJzQxMjMnLFxuICAgICAgICBwaWN0dXJlUGF0aDogJ2h0dHBzOi8vaW1hZ2VzLnVpaWl1aWlpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9pdHotcG9zdGVyMjAxNzEwMDYtMi04LmpwZycsXG4gICAgICAgIGFuc3dlcjogJydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNhcmRJZDogJzInLFxuICAgICAgICB1c2VySWQ6ICcnLFxuICAgICAgICBxdWVzdGlvbjogJ+S9oOacgOWWnOasoueahOeUteW9seaYjuaYn+aYr++8nycsXG4gICAgICAgIGluc3RhbmNlSWQ6ICcxMjMxJyxcbiAgICAgICAgcGljdHVyZVBhdGg6ICdodHRwOi8vaW1nMi5tdGltZS5jbi91cC84ODUvMTExNDg4NS8yN0NGOTM4Ri00MTgyLTQxRjUtQkJCQS00M0I4NERDMzk4MjZfNTAwLmpwZycsXG4gICAgICAgIGFuc3dlcjogJydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNhcmRJZDogJzEnLFxuICAgICAgICB1c2VySWQ6ICcnLFxuICAgICAgICBxdWVzdGlvbjogJ+S9oOeci+i/h+acgOiAgeeahOeUteW9seaYr++8nycsXG4gICAgICAgIGluc3RhbmNlSWQ6ICcxMjMxJyxcbiAgICAgICAgcGljdHVyZVBhdGg6ICdodHRwOi8vd3d3LnNpbmFpbWcuY24vZHkvc2xpZGVuZXdzLzRfaW1nLzIwMTZfMDUvNzA0XzE4NDQ1NjZfNzA4MzQ5LmpwZycsXG4gICAgICAgIGFuc3dlcjogJydcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICBtZXRob2RzID0ge31cblxuICBjcmVhdGVJbnN0YW5jZSgpIHtcbiAgICBmb3IgKHZhciBwIGluIHRoaXMuY2FyZHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FyZHNbcF0ubmFtZSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMTA2OjgwODAvaW5zdGFuY2VzL2luc2VydCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpbnN0YW5jZUlkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwMDApLFxuICAgICAgICAgIG5hbWU6IHRoaXMuY2FyZHNbcF0ubmFtZSxcbiAgICAgICAgICBjaXJjbGVMaXN0OiBbMSwgMiwgMywgNCwgNV0sXG4gICAgICAgICAgcGljdHVyZVBhdGg6IHRoaXMuY2FyZHNbcF0ucGljdHVyZVBhdGgsXG4gICAgICAgICAgZGVjczogW1xuICAgICAgICAgICAgJ+WvvOa8lDog546L6I69JyxcbiAgICAgICAgICAgICfnvJbliac6IOWRqOaYn+mpsCcsXG4gICAgICAgICAgICAn5Li75ryUOiDnlLXps5cnLFxuICAgICAgICAgICAgJ+S4iuaYoOaXtumXtDogMjAxOC05LTYnLFxuICAgICAgICAgICAgJ+eJh+mVvzogMTUy5YiG6ZKfJyxcbiAgICAgICAgICAgICfnsbvlnos6IOaBkOaAli/mgqznlpEnLFxuICAgICAgICAgICAgJ+S7i+e7jTog5bCP5LiR5Lit6K6h546w6Lqr5oOz5p2A5q275Li554m577yM5Y206KKr6auY55m75ZKM6J2Z6J2g5L6g6Zi75q2i5bm26KKr6YCu5o2V44CC6J2Z6J2g5L6g5byA5aeL5a6h6Zeu5bCP5LiR77yM5LuW6YCP6Zyy55Ge56eL5ZKM5Li554m55bey6KKr5bim5Yiw5Z+O5biC55qE5Lik56uv77yM5bm25pS+572u5LqG5Lik5Liq6YGl5o6n54iG6KOC54mp77yM5LmL6Ze055qE6Led56a76K6p6J2Z6J2g5L6g5peg5rOV5ZCM5pe25pWR5LuW5Lus44CC6J2Z6J2g5L6g56uL5Y2z5Ye65Y+R5Y675pWR55Ge56eL77yM5ZCM5pe26auY55m75ZKM6K2m5a+f5Y675pWR5Li554m544CC5L2G5bCP5LiR5pWF5oSP5bCG55Ge56eL5LiO5Li554m555qE5L2N572u6K+05Y+N77yM6K6p5Lik5Lq65pWR55qE5a+56LGh55u45Y+N44CC6YCa6L+H54K45by555qE5o6p5oqk77yM5bCP5LiR5ZKM5YiY5YWI55Sf6aG65Yip6YCD5Ye66K2m5bGA44CC6J2Z6J2g5L6g5Y2z5pe25pWR5Yiw5Li554m577yM5L2G5Li554m56KKr54Gr54On5o6J5LqG5bem5Y2K5byg6IS477yM6KKr6YCB5b6A5Yy76Zmi44CC6auY55m75Y205rKh5pWR5Yiw55Ge56eL77yM6K6p5aW55Zyo54iG54K45Lit6Lqr5Lqh44CC5Li554m55Zug55Ge56eL55qE5q276Zm35YWl55av54uC44CC5q2k5pe25bCP5LiR5p2l5Yiw5Yy76Zmi6YeK5pS+5LqG5Li554m577yM5bm26K+05pyN5LuW5b+F6aG75ZCR6K2m5a+f44CB6buR5biu44CB6auY55m75ZKM6J2Z6J2g5L6g5aSN5LuH77yM5Li554m55oiQ5Li65LqG5Y+M6Z2i5Lq644CCJ1xuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmb3JtU3VibWl0KGUpIHtcbiAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICB9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==