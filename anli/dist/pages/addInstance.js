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
        'wxc-input': '../../packages/@minui/wxc-input/dist/index'
      }
    }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {
      cards: [{
        cardId: '0',
        userId: '',
        question: '',
        picturePath: '',
        answer: ''
      }, {
        cardId: '1',
        userId: '',
        question: '',
        picturePath: '',
        answer: ''
      }, {
        cardId: '2',
        userId: '',
        question: '',
        picturePath: '',
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/addInstance'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZEluc3RhbmNlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwiY2FyZHMiLCJjYXJkSWQiLCJ1c2VySWQiLCJxdWVzdGlvbiIsInBpY3R1cmVQYXRoIiwiYW5zd2VyIiwibWV0aG9kcyIsInAiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwiaW5zdGFuY2VJZCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsImNpcmNsZUxpc3QiLCJkZWNzIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHFCQUFhO0FBREU7QUFGVixLLFFBT1RDLFUsR0FBYSxFLFFBRWJDLE0sR0FBUyxDQUFDQyxjQUFELEMsUUFFVEMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTDtBQUNFQyxnQkFBUSxHQURWO0FBRUVDLGdCQUFRLEVBRlY7QUFHRUMsa0JBQVUsRUFIWjtBQUlFQyxxQkFBYSxFQUpmO0FBS0VDLGdCQUFRO0FBTFYsT0FESyxFQVFMO0FBQ0VKLGdCQUFRLEdBRFY7QUFFRUMsZ0JBQVEsRUFGVjtBQUdFQyxrQkFBVSxFQUhaO0FBSUVDLHFCQUFhLEVBSmY7QUFLRUMsZ0JBQVE7QUFMVixPQVJLLEVBZUw7QUFDRUosZ0JBQVEsR0FEVjtBQUVFQyxnQkFBUSxFQUZWO0FBR0VDLGtCQUFVLEVBSFo7QUFJRUMscUJBQWEsRUFKZjtBQUtFQyxnQkFBUTtBQUxWLE9BZks7QUFERixLLFFBMEJQQyxPLEdBQVUsRTs7Ozs7cUNBRU87QUFDZixXQUFLLElBQUlDLENBQVQsSUFBYyxLQUFLUCxLQUFuQixFQUEwQjtBQUN4QlEsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLVCxLQUFMLENBQVdPLENBQVgsRUFBY0csSUFBMUI7QUFDQUMsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLDRDQURNO0FBRVhkLGdCQUFNO0FBQ0plLHdCQUFZQyxTQUFTQyxLQUFLQyxNQUFMLEtBQWdCLEtBQXpCLENBRFI7QUFFSlAsa0JBQU0sS0FBS1YsS0FBTCxDQUFXTyxDQUFYLEVBQWNHLElBRmhCO0FBR0pRLHdCQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FIUjtBQUlKZCx5QkFBYSxLQUFLSixLQUFMLENBQVdPLENBQVgsRUFBY0gsV0FKdkI7QUFLSmUsa0JBQU0sQ0FDSixRQURJLEVBRUosU0FGSSxFQUdKLFFBSEksRUFJSixnQkFKSSxFQUtKLFdBTEksRUFNSixXQU5JLEVBT0osMFFBUEk7QUFMRixXQUZLO0FBaUJYQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBakJHO0FBb0JYQyxpQkFwQlcsbUJBb0JGQyxHQXBCRSxFQW9CRztBQUNaZCxvQkFBUUMsR0FBUixDQUFZYSxJQUFJdkIsSUFBaEI7QUFDRDtBQXRCVSxTQUFiO0FBd0JEO0FBQ0Y7OzsrQkFFVXdCLEMsRUFBRztBQUNaZixjQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NjLEVBQUVDLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRDs7OzZCQUVRLENBQUU7Ozs7RUExRXNCZCxlQUFLZSxJOztrQkFBbkJsQyxLIiwiZmlsZSI6ImFkZEluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a3u+WKoOaWsOWNoeeJhycsXHJcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgJ3d4Yy1pbnB1dCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWlucHV0L2Rpc3QvaW5kZXgnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRzID0ge31cclxuXHJcbiAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGNhcmRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjYXJkSWQ6ICcwJyxcclxuICAgICAgICB1c2VySWQ6ICcnLFxyXG4gICAgICAgIHF1ZXN0aW9uOiAnJyxcclxuICAgICAgICBwaWN0dXJlUGF0aDogJycsXHJcbiAgICAgICAgYW5zd2VyOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2FyZElkOiAnMScsXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICBxdWVzdGlvbjogJycsXHJcbiAgICAgICAgcGljdHVyZVBhdGg6ICcnLFxyXG4gICAgICAgIGFuc3dlcjogJydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNhcmRJZDogJzInLFxyXG4gICAgICAgIHVzZXJJZDogJycsXHJcbiAgICAgICAgcXVlc3Rpb246ICcnLFxyXG4gICAgICAgIHBpY3R1cmVQYXRoOiAnJyxcclxuICAgICAgICBhbnN3ZXI6ICcnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7fVxyXG5cclxuICBjcmVhdGVJbnN0YW5jZSgpIHtcclxuICAgIGZvciAodmFyIHAgaW4gdGhpcy5jYXJkcykge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmRzW3BdLm5hbWUpXHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovLzE5Mi4xNjguMC4xMDY6ODA4MC9pbnN0YW5jZXMvaW5zZXJ0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpbnN0YW5jZUlkOiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwMDApLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5jYXJkc1twXS5uYW1lLFxyXG4gICAgICAgICAgY2lyY2xlTGlzdDogWzEsIDIsIDMsIDQsIDVdLFxyXG4gICAgICAgICAgcGljdHVyZVBhdGg6IHRoaXMuY2FyZHNbcF0ucGljdHVyZVBhdGgsXHJcbiAgICAgICAgICBkZWNzOiBbXHJcbiAgICAgICAgICAgICflr7zmvJQ6IOeOi+iOvScsXHJcbiAgICAgICAgICAgICfnvJbliac6IOWRqOaYn+mpsCcsXHJcbiAgICAgICAgICAgICfkuLvmvJQ6IOeUtemzlycsXHJcbiAgICAgICAgICAgICfkuIrmmKDml7bpl7Q6IDIwMTgtOS02JyxcclxuICAgICAgICAgICAgJ+eJh+mVvzogMTUy5YiG6ZKfJyxcclxuICAgICAgICAgICAgJ+exu+Weizog5oGQ5oCWL+aCrOeWkScsXHJcbiAgICAgICAgICAgICfku4vnu406IOWwj+S4keS4reiuoeeOsOi6q+aDs+adgOatu+S4ueeJue+8jOWNtOiiq+mrmOeZu+WSjOidmeidoOS+oOmYu+atouW5tuiiq+mAruaNleOAguidmeidoOS+oOW8gOWni+WuoemXruWwj+S4ke+8jOS7lumAj+mcsueRnueni+WSjOS4ueeJueW3suiiq+W4puWIsOWfjuW4gueahOS4pOerr++8jOW5tuaUvue9ruS6huS4pOS4qumBpeaOp+eIhuijgueJqe+8jOS5i+mXtOeahOi3neemu+iuqeidmeidoOS+oOaXoOazleWQjOaXtuaVkeS7luS7rOOAguidmeidoOS+oOeri+WNs+WHuuWPkeWOu+aVkeeRnueni++8jOWQjOaXtumrmOeZu+WSjOitpuWvn+WOu+aVkeS4ueeJueOAguS9huWwj+S4keaVheaEj+WwhueRnueni+S4juS4ueeJueeahOS9jee9ruivtOWPje+8jOiuqeS4pOS6uuaVkeeahOWvueixoeebuOWPjeOAgumAmui/h+eCuOW8ueeahOaOqeaKpO+8jOWwj+S4keWSjOWImOWFiOeUn+mhuuWIqemAg+WHuuitpuWxgOOAguidmeidoOS+oOWNs+aXtuaVkeWIsOS4ueeJue+8jOS9huS4ueeJueiiq+eBq+eDp+aOieS6huW3puWNiuW8oOiEuO+8jOiiq+mAgeW+gOWMu+mZouOAgumrmOeZu+WNtOayoeaVkeWIsOeRnueni++8jOiuqeWlueWcqOeIhueCuOS4rei6q+S6oeOAguS4ueeJueWboOeRnueni+eahOatu+mZt+WFpeeWr+eLguOAguatpOaXtuWwj+S4keadpeWIsOWMu+mZoumHiuaUvuS6huS4ueeJue+8jOW5tuivtOacjeS7luW/hemhu+WQkeitpuWvn+OAgem7keW4ruOAgemrmOeZu+WSjOidmeidoOS+oOWkjeS7h++8jOS4ueeJueaIkOS4uuS6huWPjOmdouS6uuOAgidcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtU3VibWl0KGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGc3VibWl05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7fVxyXG59XHJcbiJdfQ==