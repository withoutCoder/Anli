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
      navigationBarTitleText: '添加新卡片',
      usingComponents: {
        'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-input': '../../packages/@minui/wxc-input/dist/index'
      }
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNhcmQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsInRlc3RNaXhpbiIsImRhdGEiLCJjYXJkcyIsImNhcmRJZCIsInVzZXJJZCIsInF1ZXN0aW9uIiwiaW5zdGFuY2VJZCIsInBpY3R1cmVQYXRoIiwiYW5zd2VyIiwibWV0aG9kcyIsInAiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiY2lyY2xlTGlzdCIsImRlY3MiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZSIsImRldGFpbCIsInZhbHVlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksMkNBREc7QUFFZix5QkFBaUIsMENBRkY7QUFHZix5QkFBaUIsMENBSEY7QUFJZixxQkFBYTtBQUpFO0FBRlYsSyxRQVVUQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPLENBQ0w7QUFDRUMsZ0JBQVEsR0FEVjtBQUVFQyxnQkFBUSxFQUZWO0FBR0VDLGtCQUFVLGFBSFo7QUFJRUMsb0JBQVksTUFKZDtBQUtFQyxxQkFBYSxtRkFMZjtBQU1FQyxnQkFBUTtBQU5WLE9BREssRUFTTDtBQUNFTCxnQkFBUSxHQURWO0FBRUVDLGdCQUFRLEVBRlY7QUFHRUMsa0JBQVUsYUFIWjtBQUlFQyxvQkFBWSxNQUpkO0FBS0VDLHFCQUFhLGtGQUxmO0FBTUVDLGdCQUFRO0FBTlYsT0FUSyxFQWlCTDtBQUNFTCxnQkFBUSxHQURWO0FBRUVDLGdCQUFRLEVBRlY7QUFHRUMsa0JBQVUsWUFIWjtBQUlFQyxvQkFBWSxNQUpkO0FBS0VDLHFCQUFhLHlFQUxmO0FBTUVDLGdCQUFRO0FBTlYsT0FqQks7QUFERixLLFFBNkJQQyxPLEdBQVUsRTs7Ozs7cUNBRU87QUFDZixXQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLUixLQUFuQixFQUEwQjtBQUN4QlMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLVixLQUFMLENBQVdRLENBQVgsRUFBY0csSUFBMUI7QUFDQUMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDRDQURNO0FBRVhmLGdCQUFNO0FBQ0pLLHdCQUFZVyxTQUFTQyxLQUFLQyxNQUFMLEtBQWdCLEtBQXpCLENBRFI7QUFFSk4sa0JBQU0sS0FBS1gsS0FBTCxDQUFXUSxDQUFYLEVBQWNHLElBRmhCO0FBR0pPLHdCQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FIUjtBQUlKYix5QkFBYSxLQUFLTCxLQUFMLENBQVdRLENBQVgsRUFBY0gsV0FKdkI7QUFLSmMsa0JBQU0sQ0FDSixRQURJLEVBRUosU0FGSSxFQUdKLFFBSEksRUFJSixnQkFKSSxFQUtKLFdBTEksRUFNSixXQU5JLEVBT0osMFFBUEk7QUFMRixXQUZLO0FBaUJYQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBakJHO0FBb0JYQyxpQkFwQlcsbUJBb0JGQyxHQXBCRSxFQW9CRztBQUNaYixvQkFBUUMsR0FBUixDQUFZWSxJQUFJdkIsSUFBaEI7QUFDRDtBQXRCVSxTQUFiO0FBd0JEO0FBQ0Y7OzsrQkFFVXdCLEMsRUFBRztBQUNaZCxjQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NhLEVBQUVDLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRDs7OzZCQUVRLENBQUU7Ozs7RUFoRnNCYixlQUFLYyxJOztrQkFBbkJsQyxLIiwiZmlsZSI6ImFkZGNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5re75Yqg5paw5Y2h54mHJyxcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnd3hjLWZsZXgnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1mbGV4L2Rpc3QvaW5kZXgnLFxyXG4gICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcclxuICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICd3eGMtaW5wdXQnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pbnB1dC9kaXN0L2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50cyA9IHt9XHJcblxyXG4gIG1peGlucyA9IFt0ZXN0TWl4aW5dXHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBjYXJkczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2FyZElkOiAnMCcsXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICBxdWVzdGlvbjogJ+S9oOacgOWWnOasoueahOS4gOmDqOeUteW9seaYr++8nycsXHJcbiAgICAgICAgaW5zdGFuY2VJZDogJzQxMjMnLFxyXG4gICAgICAgIHBpY3R1cmVQYXRoOiAnaHR0cHM6Ly9pbWFnZXMudWlpaXVpaWkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzEwL2l0ei1wb3N0ZXIyMDE3MTAwNi0yLTguanBnJyxcclxuICAgICAgICBhbnN3ZXI6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkSWQ6ICcyJyxcclxuICAgICAgICB1c2VySWQ6ICcnLFxyXG4gICAgICAgIHF1ZXN0aW9uOiAn5L2g5pyA5Zac5qyi55qE55S15b2x5piO5pif5piv77yfJyxcclxuICAgICAgICBpbnN0YW5jZUlkOiAnMTIzMScsXHJcbiAgICAgICAgcGljdHVyZVBhdGg6ICdodHRwOi8vaW1nMi5tdGltZS5jbi91cC84ODUvMTExNDg4NS8yN0NGOTM4Ri00MTgyLTQxRjUtQkJCQS00M0I4NERDMzk4MjZfNTAwLmpwZycsXHJcbiAgICAgICAgYW5zd2VyOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2FyZElkOiAnMScsXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICBxdWVzdGlvbjogJ+S9oOeci+i/h+acgOiAgeeahOeUteW9seaYr++8nycsXHJcbiAgICAgICAgaW5zdGFuY2VJZDogJzEyMzEnLFxyXG4gICAgICAgIHBpY3R1cmVQYXRoOiAnaHR0cDovL3d3dy5zaW5haW1nLmNuL2R5L3NsaWRlbmV3cy80X2ltZy8yMDE2XzA1LzcwNF8xODQ0NTY2XzcwODM0OS5qcGcnLFxyXG4gICAgICAgIGFuc3dlcjogJydcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHt9XHJcblxyXG4gIGNyZWF0ZUluc3RhbmNlKCkge1xyXG4gICAgZm9yICh2YXIgcCBpbiB0aGlzLmNhcmRzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FyZHNbcF0ubmFtZSlcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjEwNjo4MDgwL2luc3RhbmNlcy9pbnNlcnQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGluc3RhbmNlSWQ6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwMCksXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLmNhcmRzW3BdLm5hbWUsXHJcbiAgICAgICAgICBjaXJjbGVMaXN0OiBbMSwgMiwgMywgNCwgNV0sXHJcbiAgICAgICAgICBwaWN0dXJlUGF0aDogdGhpcy5jYXJkc1twXS5waWN0dXJlUGF0aCxcclxuICAgICAgICAgIGRlY3M6IFtcclxuICAgICAgICAgICAgJ+WvvOa8lDog546L6I69JyxcclxuICAgICAgICAgICAgJ+e8luWJpzog5ZGo5pif6amwJyxcclxuICAgICAgICAgICAgJ+S4u+a8lDog55S16bOXJyxcclxuICAgICAgICAgICAgJ+S4iuaYoOaXtumXtDogMjAxOC05LTYnLFxyXG4gICAgICAgICAgICAn54mH6ZW/OiAxNTLliIbpkp8nLFxyXG4gICAgICAgICAgICAn57G75Z6LOiDmgZDmgJYv5oKs55aRJyxcclxuICAgICAgICAgICAgJ+S7i+e7jTog5bCP5LiR5Lit6K6h546w6Lqr5oOz5p2A5q275Li554m577yM5Y206KKr6auY55m75ZKM6J2Z6J2g5L6g6Zi75q2i5bm26KKr6YCu5o2V44CC6J2Z6J2g5L6g5byA5aeL5a6h6Zeu5bCP5LiR77yM5LuW6YCP6Zyy55Ge56eL5ZKM5Li554m55bey6KKr5bim5Yiw5Z+O5biC55qE5Lik56uv77yM5bm25pS+572u5LqG5Lik5Liq6YGl5o6n54iG6KOC54mp77yM5LmL6Ze055qE6Led56a76K6p6J2Z6J2g5L6g5peg5rOV5ZCM5pe25pWR5LuW5Lus44CC6J2Z6J2g5L6g56uL5Y2z5Ye65Y+R5Y675pWR55Ge56eL77yM5ZCM5pe26auY55m75ZKM6K2m5a+f5Y675pWR5Li554m544CC5L2G5bCP5LiR5pWF5oSP5bCG55Ge56eL5LiO5Li554m555qE5L2N572u6K+05Y+N77yM6K6p5Lik5Lq65pWR55qE5a+56LGh55u45Y+N44CC6YCa6L+H54K45by555qE5o6p5oqk77yM5bCP5LiR5ZKM5YiY5YWI55Sf6aG65Yip6YCD5Ye66K2m5bGA44CC6J2Z6J2g5L6g5Y2z5pe25pWR5Yiw5Li554m577yM5L2G5Li554m56KKr54Gr54On5o6J5LqG5bem5Y2K5byg6IS477yM6KKr6YCB5b6A5Yy76Zmi44CC6auY55m75Y205rKh5pWR5Yiw55Ge56eL77yM6K6p5aW55Zyo54iG54K45Lit6Lqr5Lqh44CC5Li554m55Zug55Ge56eL55qE5q276Zm35YWl55av54uC44CC5q2k5pe25bCP5LiR5p2l5Yiw5Yy76Zmi6YeK5pS+5LqG5Li554m577yM5bm26K+05pyN5LuW5b+F6aG75ZCR6K2m5a+f44CB6buR5biu44CB6auY55m75ZKM6J2Z6J2g5L6g5aSN5LuH77yM5Li554m55oiQ5Li65LqG5Y+M6Z2i5Lq644CCJ1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1TdWJtaXQoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHt9XHJcbn1cclxuIl19