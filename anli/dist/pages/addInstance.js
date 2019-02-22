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
      navigationBarTitleText: '添加实例',
      usingComponents: {
        'wxc-input': '../../packages/@minui/wxc-input/dist/index',
        'wxc-button': '../../packages/@minui/wxc-button/dist/index'
      }
    }, _this.components = {}, _this.data = {
      tempFilePaths: [],
      name: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
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
    key: 'formSubmit',
    value: function formSubmit(e) {
      console.log(e);
      _wepy2.default.uploadFile({
        url: this.$parent.globalData.serverUrl + 'instances/insert', // 仅为示例，非真实的接口地址
        filePath: this.tempFilePaths[0],
        name: 'file',
        formData: {
          name: e.detail.value.name,
          classId: e.detail.value.classId,
          detail: e.detail.value.detail,
          creatorId: this.$parent.globalData.openId,
          labelList: '默认值1, 默认值2',
          decs: ''
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
    key: 'onLoad',
    value: function onLoad(p) {
      this.name = p.name;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/addInstance'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZEluc3RhbmNlLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwidGVtcEZpbGVQYXRocyIsIm5hbWUiLCJtZXRob2RzIiwiZSIsInRoYXQiLCJ3ZXB5IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJ1cGxvYWRGaWxlIiwidXJsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJzZXJ2ZXJVcmwiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwiZGV0YWlsIiwidmFsdWUiLCJjbGFzc0lkIiwiY3JlYXRvcklkIiwib3BlbklkIiwibGFiZWxMaXN0IiwiZGVjcyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWEsNENBREU7QUFFZixzQkFBYztBQUZDO0FBRlYsSyxRQVFUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMscUJBQWUsRUFEVjtBQUVMQyxZQUFNO0FBRkQsSyxRQUtQQyxPLEdBQVUsRTs7Ozs7Z0NBRUdDLEMsRUFBRztBQUNkLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLENBRFE7QUFFZkMsa0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLO0FBR2ZDLG9CQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRztBQUlmQyxlQUplLG1CQUlQQyxHQUpPLEVBSUY7QUFDWEMsa0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBUCxlQUFLSixhQUFMLEdBQXFCVyxJQUFJWCxhQUF6QjtBQUNBSSxlQUFLVSxNQUFMO0FBQ0Q7QUFSYyxPQUFqQjtBQVVEOzs7aUNBQ2FYLEMsRUFBRztBQUNmRSxxQkFBS1UsWUFBTCxDQUFrQjtBQUNoQkMsaUJBQVMsRUFETyxFQUNIO0FBQ2JDLGNBQU0sS0FBS2pCLGFBRkssQ0FFUztBQUZULE9BQWxCO0FBSUQ7OzsrQkFFVUcsQyxFQUFHO0FBQ1pTLGNBQVFDLEdBQVIsQ0FBWVYsQ0FBWjtBQUNBRSxxQkFBS2EsVUFBTCxDQUFnQjtBQUNkQyxhQUFLLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsU0FBeEIsR0FBb0Msa0JBRDNCLEVBQytDO0FBQzdEQyxrQkFBVSxLQUFLdkIsYUFBTCxDQUFtQixDQUFuQixDQUZJO0FBR2RDLGNBQU0sTUFIUTtBQUlkdUIsa0JBQVU7QUFDUnZCLGdCQUFNRSxFQUFFc0IsTUFBRixDQUFTQyxLQUFULENBQWV6QixJQURiO0FBRVIwQixtQkFBU3hCLEVBQUVzQixNQUFGLENBQVNDLEtBQVQsQ0FBZUMsT0FGaEI7QUFHUkYsa0JBQVF0QixFQUFFc0IsTUFBRixDQUFTQyxLQUFULENBQWVELE1BSGY7QUFJUkcscUJBQVcsS0FBS1IsT0FBTCxDQUFhQyxVQUFiLENBQXdCUSxNQUozQjtBQUtSQyxxQkFBVyxZQUxIO0FBTVJDLGdCQUFNO0FBTkUsU0FKSTtBQVlkckIsZUFaYyxtQkFZTkMsR0FaTSxFQVlEO0FBQ1gsY0FBSUEsSUFBSVosSUFBSixLQUFhLFNBQWpCLEVBQTRCO0FBQzFCYSxvQkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0FSLDJCQUFLMkIsWUFBTCxDQUFrQjtBQUNoQkMscUJBQU87QUFEUyxhQUFsQjtBQUdELFdBTEQsTUFLTztBQUNMNUIsMkJBQUs2QixTQUFMLENBQWU7QUFDYkMscUJBQU8sSUFETTtBQUViQyx1QkFBUyxTQUZJO0FBR2JDLDBCQUFZO0FBSEMsYUFBZjtBQUtEO0FBQ0Y7QUF6QmEsT0FBaEI7QUEyQkQ7OzsyQkFDTUMsQyxFQUFHO0FBQ1IsV0FBS3JDLElBQUwsR0FBWXFDLEVBQUVyQyxJQUFkO0FBQ0Q7Ozs7RUF0RWdDSSxlQUFLa0MsSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJhZGRJbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a3u+WKoOWunuS+iycsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnd3hjLWlucHV0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaW5wdXQvZGlzdC9pbmRleCcsXG4gICAgICAnd3hjLWJ1dHRvbic6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWJ1dHRvbi9kaXN0L2luZGV4J1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudHMgPSB7fVxuXG4gIGRhdGEgPSB7XG4gICAgdGVtcEZpbGVQYXRoczogW10sXG4gICAgbmFtZTogJydcbiAgfVxuXG4gIG1ldGhvZHMgPSB7fVxuXG4gIGNob29zZUltYWdlIChlKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgd2VweS5jaG9vc2VJbWFnZSh7XG4gICAgICBjb3VudDogMSxcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHRoYXQudGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgIHRoYXQuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHByZXZpZXdJbWFnZSAoZSkge1xuICAgIHdlcHkucHJldmlld0ltYWdlKHtcbiAgICAgIGN1cnJlbnQ6ICcnLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICB1cmxzOiB0aGlzLnRlbXBGaWxlUGF0aHMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgIH0pXG4gIH1cblxuICBmb3JtU3VibWl0KGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlcnZlclVybCArICdpbnN0YW5jZXMvaW5zZXJ0JywgLy8g5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG4gICAgICBmaWxlUGF0aDogdGhpcy50ZW1wRmlsZVBhdGhzWzBdLFxuICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgbmFtZTogZS5kZXRhaWwudmFsdWUubmFtZSxcbiAgICAgICAgY2xhc3NJZDogZS5kZXRhaWwudmFsdWUuY2xhc3NJZCxcbiAgICAgICAgZGV0YWlsOiBlLmRldGFpbC52YWx1ZS5kZXRhaWwsXG4gICAgICAgIGNyZWF0b3JJZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3BlbklkLFxuICAgICAgICBsYWJlbExpc3Q6ICfpu5jorqTlgLwxLCDpu5jorqTlgLwyJyxcbiAgICAgICAgZGVjczogJydcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBpZiAocmVzLmRhdGEgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWQgc3VjY2VzcycpXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICflm77niYfmoLzlvI/kuI3mraPnoa4nLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvbkxvYWQocCkge1xuICAgIHRoaXMubmFtZSA9IHAubmFtZVxuICB9XG59XG4iXX0=