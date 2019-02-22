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
      navigationBarTitleText: '创建圈子',
      usingComponents: {
        'wxc-flex': '../../packages/@minui/wxc-flex/dist/index',
        'wxc-tab-label': '../../packages/@minui/wxc-tab/dist/label',
        'wxc-tab-panel': '../../packages/@minui/wxc-tab/dist/panel',
        'wxc-input': '../../packages/@minui/wxc-input/dist/index'
      }
    }, _this.components = {}, _this.data = {
      tempFilePaths: [],
      inputVal: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log(e);
      _wepy2.default.uploadFile({
        url: this.$parent.globalData.serverUrl + 'circle/insert', // 仅为示例，非真实的接口地址
        filePath: this.tempFilePaths[0],
        name: 'file',
        formData: {
          openId: this.$parent.globalData.openId,
          name: e.detail.value.name,
          attributes: '属性1,属性2,属性3'
        },
        success: function success(res) {
          if (res.data === 'success') {
            console.log('upload success');
            _wepy2.default.navigateBack({
              delta: 1
            });
          } else {
            _wepy2.default.showModal({
              title: '提示',
              content: '图片格式不正确',
              showCancel: false
            });
          }
        }
      });
    }
  }, {
    key: 'chooseImage',
    value: function chooseImage(e) {
      var that = this;
      _wepy2.default.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          console.log(res);
          that.tempFilePaths = res.tempFilePaths;
          that.$apply();
        }
      });
    }
  }, {
    key: 'previewImage',
    value: function previewImage(e) {
      _wepy2.default.previewImage({
        current: '', // 当前显示图片的http链接
        urls: this.tempFilePaths // 需要预览的图片http链接列表
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(p) {
      console.log(this.inputVal);
      if (typeof this.inputVal !== 'undefined') {
        this.inputVal = p.inputVal;
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/addcircle'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNpcmNsZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsInRlbXBGaWxlUGF0aHMiLCJpbnB1dFZhbCIsIm1ldGhvZHMiLCJlIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJ1cGxvYWRGaWxlIiwidXJsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzZXJ2ZXJVcmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJmb3JtRGF0YSIsIm9wZW5JZCIsImRldGFpbCIsInZhbHVlIiwiYXR0cmlidXRlcyIsInN1Y2Nlc3MiLCJyZXMiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJ0aGF0IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsIiRhcHBseSIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwicCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSwyQ0FERztBQUVmLHlCQUFpQiwwQ0FGRjtBQUdmLHlCQUFpQiwwQ0FIRjtBQUlmLHFCQUFhO0FBSkU7QUFGVixLLFFBVVRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUtQQyxPLEdBQVUsRTs7Ozs7K0JBRUNDLEMsRUFBRztBQUNaQyxjQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQUcscUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsYUFBSyxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFNBQXhCLEdBQW9DLGVBRDNCLEVBQzRDO0FBQzFEQyxrQkFBVSxLQUFLWixhQUFMLENBQW1CLENBQW5CLENBRkk7QUFHZGEsY0FBTSxNQUhRO0FBSWRDLGtCQUFVO0FBQ1JDLGtCQUFRLEtBQUtOLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkssTUFEeEI7QUFFUkYsZ0JBQU1WLEVBQUVhLE1BQUYsQ0FBU0MsS0FBVCxDQUFlSixJQUZiO0FBR1JLLHNCQUFZO0FBSEosU0FKSTtBQVNkQyxlQVRjLG1CQVNOQyxHQVRNLEVBU0Q7QUFDWCxjQUFJQSxJQUFJckIsSUFBSixLQUFhLFNBQWpCLEVBQTRCO0FBQzFCSyxvQkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0FDLDJCQUFLZSxZQUFMLENBQWtCO0FBQ2hCQyxxQkFBTztBQURTLGFBQWxCO0FBR0QsV0FMRCxNQUtPO0FBQ0xoQiwyQkFBS2lCLFNBQUwsQ0FBZTtBQUNiQyxxQkFBTyxJQURNO0FBRWJDLHVCQUFTLFNBRkk7QUFHYkMsMEJBQVk7QUFIQyxhQUFmO0FBS0Q7QUFDRjtBQXRCYSxPQUFoQjtBQXdCRDs7O2dDQUVZdkIsQyxFQUFHO0FBQ2QsVUFBSXdCLE9BQU8sSUFBWDtBQUNBckIscUJBQUtzQixXQUFMLENBQWlCO0FBQ2ZDLGVBQU8sQ0FEUTtBQUVmQyxrQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRks7QUFHZkMsb0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHO0FBSWZaLGVBSmUsbUJBSVBDLEdBSk8sRUFJRjtBQUNYaEIsa0JBQVFDLEdBQVIsQ0FBWWUsR0FBWjtBQUNBTyxlQUFLM0IsYUFBTCxHQUFxQm9CLElBQUlwQixhQUF6QjtBQUNBMkIsZUFBS0ssTUFBTDtBQUNEO0FBUmMsT0FBakI7QUFVRDs7O2lDQUNhN0IsQyxFQUFHO0FBQ2ZHLHFCQUFLMkIsWUFBTCxDQUFrQjtBQUNoQkMsaUJBQVMsRUFETyxFQUNIO0FBQ2JDLGNBQU0sS0FBS25DLGFBRkssQ0FFUztBQUZULE9BQWxCO0FBSUQ7OzsyQkFFTW9DLEMsRUFBRztBQUNSaEMsY0FBUUMsR0FBUixDQUFZLEtBQUtKLFFBQWpCO0FBQ0EsVUFBSSxPQUFRLEtBQUtBLFFBQWIsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUMsYUFBS0EsUUFBTCxHQUFnQm1DLEVBQUVuQyxRQUFsQjtBQUNEO0FBQ0Y7Ozs7RUF6RWdDSyxlQUFLK0IsSTs7a0JBQW5CM0MsSyIsImZpbGUiOiJhZGRjaXJjbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliJvlu7rlnIjlrZAnLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3d4Yy1mbGV4JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtZmxleC9kaXN0L2luZGV4JyxcbiAgICAgICd3eGMtdGFiLWxhYmVsJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtdGFiL2Rpc3QvbGFiZWwnLFxuICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy10YWIvZGlzdC9wYW5lbCcsXG4gICAgICAnd3hjLWlucHV0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaW5wdXQvZGlzdC9pbmRleCdcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRzID0ge31cblxuICBkYXRhID0ge1xuICAgIHRlbXBGaWxlUGF0aHM6IFtdLFxuICAgIGlucHV0VmFsOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZm9ybVN1Ym1pdChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICB3ZXB5LnVwbG9hZEZpbGUoe1xuICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmwgKyAnY2lyY2xlL2luc2VydCcsIC8vIOS7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxuICAgICAgZmlsZVBhdGg6IHRoaXMudGVtcEZpbGVQYXRoc1swXSxcbiAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIG9wZW5JZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkLFxuICAgICAgICBuYW1lOiBlLmRldGFpbC52YWx1ZS5uYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzOiAn5bGe5oCnMSzlsZ7mgKcyLOWxnuaApzMnXG4gICAgICB9LFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgaWYgKHJlcy5kYXRhID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkIHN1Y2Nlc3MnKVxuICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICBjb250ZW50OiAn5Zu+54mH5qC85byP5LiN5q2j56GuJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjaG9vc2VJbWFnZSAoZSkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgY291bnQ6IDEsXG4gICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB0aGF0LnRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcmV2aWV3SW1hZ2UgKGUpIHtcbiAgICB3ZXB5LnByZXZpZXdJbWFnZSh7XG4gICAgICBjdXJyZW50OiAnJywgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgdXJsczogdGhpcy50ZW1wRmlsZVBhdGhzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICB9KVxuICB9XG5cbiAgb25Mb2FkKHApIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0VmFsKVxuICAgIGlmICh0eXBlb2YgKHRoaXMuaW5wdXRWYWwpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5pbnB1dFZhbCA9IHAuaW5wdXRWYWxcbiAgICB9XG4gIH1cbn1cbiJdfQ==