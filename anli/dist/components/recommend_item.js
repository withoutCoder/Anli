'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
    }, _this.components = {}, _this.data = {}, _this.props = {
      item: {}
    }, _this.computed = {}, _this.methods = {
      showPopup: function showPopup() {
        var popupComponent = this.$wxpage.selectComponent('.J_Popup');
        popupComponent && popupComponent.show();
      },
      hidePopup: function hidePopup() {
        var popupComponent = this.$wxpage.selectComponent('.J_Popup');
        popupComponent && popupComponent.hide();
      },
      preventD: function preventD() {}
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZF9pdGVtLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwicHJvcHMiLCJpdGVtIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwic2hvd1BvcHVwIiwicG9wdXBDb21wb25lbnQiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsImhpZGVQb3B1cCIsImhpZGUiLCJwcmV2ZW50RCIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YsbUJBQVcsMENBREk7QUFFZixvQkFBWSwyQ0FGRztBQUdmLHlCQUFpQiwwQ0FIRjtBQUlmLHlCQUFpQiwwQ0FKRjtBQUtmLG9CQUFZLDJDQUxHO0FBTWYscUJBQWEsNENBTkU7QUFPZixvQkFBWSwyQ0FQRztBQVFmLHFCQUFhLDRDQVJFO0FBU2Ysc0JBQWMsNkNBVEM7QUFVZixxQkFBYSw0Q0FWRTtBQVdmLG9CQUFZO0FBWEc7QUFGVixLLFFBZ0JUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU8sRSxRQUVQQyxLLEdBQVE7QUFDTkMsWUFBTTtBQURBLEssUUFJUkMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxpQkFBaUIsS0FBS0MsT0FBTCxDQUFhQyxlQUFiLENBQTZCLFVBQTdCLENBQXJCO0FBQ0FGLDBCQUFrQkEsZUFBZUcsSUFBZixFQUFsQjtBQUNELE9BSk87QUFLUkMsZUFMUSx1QkFLSTtBQUNWLFlBQUlKLGlCQUFpQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsVUFBN0IsQ0FBckI7QUFDQUYsMEJBQWtCQSxlQUFlSyxJQUFmLEVBQWxCO0FBQ0QsT0FSTztBQVNSQyxjQVRRLHNCQVNHLENBQUU7QUFUTCxLLFFBWVZDLE0sR0FBUyxFOzs7Ozs2QkFFQSxDQUFFOzs7O0VBekNzQkMsZUFBS0MsSTs7a0JBQW5CcEIsSyIsImZpbGUiOiJyZWNvbW1lbmRfaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQW5saWEnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtdGFiJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLXRhYi1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXRhYi9kaXN0L2xhYmVsJyxcbiAgICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAgICd3eGMtZmxleCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWZsZXgvZGlzdC9pbmRleCcsXG4gICAgICAgICd3eGMtcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1wYW5lbC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1lbGlwJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZWxpcC9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1sYWJlbCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxhYmVsL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWJ1dHRvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJ1dHRvbi9kaXN0L2luZGV4JyxcbiAgICAgICAgJ3d4Yy1wb3B1cCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXBvcHVwL2Rpc3QvaW5kZXgnLFxuICAgICAgICAnd3hjLWxpc3QnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1saXN0L2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7fVxuXG4gICAgZGF0YSA9IHt9XG5cbiAgICBwcm9wcyA9IHtcbiAgICAgIGl0ZW06IHt9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7fVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHNob3dQb3B1cCgpIHtcbiAgICAgICAgbGV0IHBvcHVwQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLkpfUG9wdXAnKVxuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5zaG93KClcbiAgICAgIH0sXG4gICAgICBoaWRlUG9wdXAoKSB7XG4gICAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy5KX1BvcHVwJylcbiAgICAgICAgcG9wdXBDb21wb25lbnQgJiYgcG9wdXBDb21wb25lbnQuaGlkZSgpXG4gICAgICB9LFxuICAgICAgcHJldmVudEQoKSB7fVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHt9XG5cbiAgICBvbkxvYWQoKSB7fVxuICB9XG4iXX0=