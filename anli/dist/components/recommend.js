'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupItem = function (_wepy$component) {
  _inherits(GroupItem, _wepy$component);

  function GroupItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GroupItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
    }, _this.methods = {}, _this.data = {
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
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJtZXRob2RzIiwiZGF0YSIsIml0ZW1zIiwiaXRlbV9pZCIsImxhYmVscyIsInRpdGxlIiwiY29sb3IiLCJsYWJlbF9jbGFzcyIsInVzZXJfaWQiLCJ1c2VyX25hbWUiLCJiYWNrZ3JvdW5kIiwidXNlcl9pbWFnZSIsImV4aGliaXRzX2ltYWdlIiwiY29tbWVudCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixtQkFBVywwQ0FESTtBQUVmLG9CQUFZLDJDQUZHO0FBR2YseUJBQWlCLDBDQUhGO0FBSWYseUJBQWlCLDBDQUpGO0FBS2Ysb0JBQVksMkNBTEc7QUFNZixxQkFBYSw0Q0FORTtBQU9mLG9CQUFZLDJDQVBHO0FBUWYscUJBQWEsNENBUkU7QUFTZixzQkFBYyw2Q0FUQztBQVVmLHFCQUFhLDRDQVZFO0FBV2Ysb0JBQVk7QUFYRztBQURWLEssUUFlVEMsTyxHQUFVLEUsUUFDVkMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTDtBQUNFQyxpQkFBUyxHQURYO0FBRUVDLGdCQUFRLENBQ04sRUFBQ0MsT0FBTyxJQUFSLEVBQWNDLE9BQU8sU0FBckIsRUFETSxFQUVOLEVBQUNELE9BQU8sSUFBUixFQUFjQyxPQUFPLFNBQXJCLEVBRk0sRUFHTixFQUFDRCxPQUFPLElBQVIsRUFBY0MsT0FBTyxTQUFyQixFQUhNLENBRlY7QUFPRUMscUJBQWEsSUFQZjtBQVFFQyxpQkFBUyxPQVJYO0FBU0VDLG1CQUFXLElBVGI7QUFVRUMsb0JBQVksU0FWZDtBQVdFQyxvQkFBWSwrREFYZDtBQVlFQyx3QkFBZ0IsbUZBWmxCO0FBYUVDLGlCQUFTO0FBYlgsT0FESyxFQWdCTDtBQUNFVixpQkFBUyxHQURYO0FBRUVDLGdCQUFRLENBQ04sRUFBQ0MsT0FBTyxJQUFSLEVBQWNDLE9BQU8sU0FBckIsRUFETSxFQUVOLEVBQUNELE9BQU8sSUFBUixFQUFjQyxPQUFPLFNBQXJCLEVBRk0sRUFHTixFQUFDRCxPQUFPLElBQVIsRUFBY0MsT0FBTyxTQUFyQixFQUhNLENBRlY7QUFPRUMscUJBQWEsSUFQZjtBQVFFQyxpQkFBUyxPQVJYO0FBU0VDLG1CQUFXLElBVGI7QUFVRUMsb0JBQVksU0FWZDtBQVdFQyxvQkFBWSxzRUFYZDtBQVlFQyx3QkFBZ0Isa0ZBWmxCO0FBYUVDLGlCQUFTO0FBYlgsT0FoQkssRUErQkw7QUFDRVYsaUJBQVMsR0FEWDtBQUVFQyxnQkFBUSxDQUNOLEVBQUNDLE9BQU8sSUFBUixFQUFjQyxPQUFPLFNBQXJCLEVBRE0sRUFFTixFQUFDRCxPQUFPLElBQVIsRUFBY0MsT0FBTyxTQUFyQixFQUZNLEVBR04sRUFBQ0QsT0FBTyxJQUFSLEVBQWNDLE9BQU8sU0FBckIsRUFITSxFQUlOLEVBQUNELE9BQU8sSUFBUixFQUFjQyxPQUFPLFNBQXJCLEVBSk0sRUFLTixFQUFDRCxPQUFPLElBQVIsRUFBY0MsT0FBTyxTQUFyQixFQUxNLENBRlY7QUFTRUMscUJBQWEsSUFUZjtBQVVFQyxpQkFBUyxPQVZYO0FBV0VDLG1CQUFXLFlBWGI7QUFZRUMsb0JBQVksU0FaZDtBQWFFQyxvQkFBWSxzRUFiZDtBQWNFQyx3QkFBZ0IseUVBZGxCO0FBZUVDLGlCQUFTO0FBZlgsT0EvQks7QUFERixLOzs7O0VBakI4QkMsZUFBS0MsUzs7a0JBQXZCbEIsUyIsImZpbGUiOiJyZWNvbW1lbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtaWNvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWljb24vZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy10YWItbGFiZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9sYWJlbCcsXHJcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXHJcbiAgICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLXBhbmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtcGFuZWwvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1lbGlwJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZWxpcC9kaXN0L2luZGV4JyxcclxuICAgICAgICAnd3hjLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGFiZWwvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1idXR0b24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1idXR0b24vZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1wb3B1cCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXBvcHVwL2Rpc3QvaW5kZXgnLFxyXG4gICAgICAgICd3eGMtbGlzdCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxpc3QvZGlzdC9pbmRleCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHt9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGl0ZW1faWQ6ICcxJyxcclxuICAgICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICB7dGl0bGU6ICfliqjnlLsnLCBjb2xvcjogJyMxOWJlNmInfSxcclxuICAgICAgICAgICAge3RpdGxlOiAn5ryr55S7JywgY29sb3I6ICcjZmY5OTAwJ30sXHJcbiAgICAgICAgICAgIHt0aXRsZTogJ+eUu+mbhicsIGNvbG9yOiAnI2VkM2YxNCd9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgbGFiZWxfY2xhc3M6ICfnlLXlvbEnLFxyXG4gICAgICAgICAgdXNlcl9pZDogJzIzMTIzJyxcclxuICAgICAgICAgIHVzZXJfbmFtZTogJ+Wwj+WFsCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ5NTA2MCcsXHJcbiAgICAgICAgICB1c2VyX2ltYWdlOiAnaHR0cDovL3d3dy5neDg4OTkuY29tL3VwbG9hZHMvYWxsaW1nLzE2MDgwNC8zLTE2MFA0MTExNjM5LmpwZycsXHJcbiAgICAgICAgICBleGhpYml0c19pbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVpaWl1aWlpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9pdHotcG9zdGVyMjAxNzEwMDYtMi04LmpwZycsXHJcbiAgICAgICAgICBjb21tZW50OiAn5oiR5o6o6I2Q6L+Z5Liq5L2c5ZOB5piv5Zug5Li66L+Z5Liq5L2c5ZOBLOaMieWunumZheaJk+W8gOaIv+mXtOeIseS4iuWwseeIseS4iuemu+W8gC7miL/pl7TniLHnprvlvIDmiL/pl7TovqPmpJLpo5Lpo5Llj5HvvIzmiYDku6XmmpfnpLrms5XljaHop4bop5LmiZPlvIDmlrnkuobop6PpmL/mlq/liKnlurfnmoTlj5HnlJ/lv6vkuZDnu53lnLDlj43lh7vmjInml7bjgIInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpdGVtX2lkOiAnMicsXHJcbiAgICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAge3RpdGxlOiAn55S15b2xJywgY29sb3I6ICcjZmYwMDc3J30sXHJcbiAgICAgICAgICAgIHt0aXRsZTogJ+WKqOa8qycsIGNvbG9yOiAnIzc0N2JiMSd9LFxyXG4gICAgICAgICAgICB7dGl0bGU6ICfliqjnlLsnLCBjb2xvcjogJyMxOWJlNmInfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGxhYmVsX2NsYXNzOiAn5Yqo5ryrJyxcclxuICAgICAgICAgIHVzZXJfaWQ6ICcyMzEyNCcsXHJcbiAgICAgICAgICB1c2VyX25hbWU6ICflsI/ng5gnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZjk5MDAnLFxyXG4gICAgICAgICAgdXNlcl9pbWFnZTogJ2h0dHBzOi8vcGljMy56aGltZy5jb20vODAvdjItOTkzNTFiODdiMWUwYTlhYTlhOWQwN2JiYTAzMTgzNzZfaGQuanBnJyxcclxuICAgICAgICAgIGV4aGliaXRzX2ltYWdlOiAnaHR0cDovL2ltZzIubXRpbWUuY24vdXAvODg1LzExMTQ4ODUvMjdDRjkzOEYtNDE4Mi00MUY1LUJCQkEtNDNCODREQzM5ODI2XzUwMC5qcGcnLFxyXG4gICAgICAgICAgY29tbWVudDogJ+acgOWWnOasou+8jOS4jeino+mHiuOAgidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGl0ZW1faWQ6ICczJyxcclxuICAgICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICB7dGl0bGU6ICfnlLXlvbEnLCBjb2xvcjogJyNmZjAwNzcnfSxcclxuICAgICAgICAgICAge3RpdGxlOiAn5Yqo5ryrJywgY29sb3I6ICcjNzQ3YmIxJ30sXHJcbiAgICAgICAgICAgIHt0aXRsZTogJ+WKqOeUuycsIGNvbG9yOiAnIzE5YmU2Yid9LFxyXG4gICAgICAgICAgICB7dGl0bGU6ICfmvKvnlLsnLCBjb2xvcjogJyNmZjk5MDAnfSxcclxuICAgICAgICAgICAge3RpdGxlOiAn55S76ZuGJywgY29sb3I6ICcjZWQzZjE0J31cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBsYWJlbF9jbGFzczogJ+WKqOa8qycsXHJcbiAgICAgICAgICB1c2VyX2lkOiAnMjMxMjUnLFxyXG4gICAgICAgICAgdXNlcl9uYW1lOiAnY29sb3Itfn5+ficsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzVjYWRmZicsXHJcbiAgICAgICAgICB1c2VyX2ltYWdlOiAnaHR0cHM6Ly9waWMzLnpoaW1nLmNvbS84MC92Mi0wZWY4ODY0Y2EzMTkxYzhjMWY3Yzg4NWQ2MDJlY2VkNl9oZC5qcGcnLFxyXG4gICAgICAgICAgZXhoaWJpdHNfaW1hZ2U6ICdodHRwOi8vd3d3LnNpbmFpbWcuY24vZHkvc2xpZGVuZXdzLzRfaW1nLzIwMTZfMDUvNzA0XzE4NDQ1NjZfNzA4MzQ5LmpwZycsXHJcbiAgICAgICAgICBjb21tZW50OiAn5oiR6K+05ZWK55yL6KeB5ZWl5byA5aeL5pS+5a+S5YGH5Y2h6K6+6K6h6LS55p2l5b6X5Y+K5Y+R5ZOI5byA5aeL55qE5oGi5aSN562U5aSN6ZiW5a625a6J5bq35YiG57G75aSn5a+M6LGq54ix56m66Ze055qE5YiS5YiG6Zi/6YGT5aSrJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH1cclxuIl19