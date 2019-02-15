'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);

    this._header = {
      token: null
    };
    this._baseUrl = null;
    this.interceptors = {
      request: null,
      response: null
    };

    var token = wx.getStorageSync('token');
    if (token) {
      this._header.token = token;
    }
  }

  _createClass(Request, [{
    key: 'request',
    value: function request(params) {
      var _this = this;

      var _ref = this.interceptors.request ? this.interceptors.request(params) : params,
          url = _ref.url,
          method = _ref.method,
          header = _ref.header,
          data = _ref.data;

      return _wepy2.default.request({
        url: (this._baseUrl || '') + url,
        method: method || METHOD.GET,
        data: data,
        header: _extends({}, this._header, header)
      }).then(function (res) {
        return _this.interceptors.response ? _this.interceptors.response(res) : res;
      });
    }
  }, {
    key: 'get',
    value: function get(url, data, header) {
      return this.request({ url: url, method: METHOD.GET, header: header, data: data });
    }
  }, {
    key: 'post',
    value: function post(url, data, header) {
      return this.request({ url: url, method: METHOD.POST, header: header, data: data });
    }
  }, {
    key: 'put',
    value: function put(url, data, header) {
      return this.request({ url: url, method: METHOD.PUT, header: header, data: data });
    }
  }, {
    key: 'delete',
    value: function _delete(url, data, header) {
      return this.request({ url: url, method: METHOD.DELETE, header: header, data: data });
    }
  }, {
    key: 'token',
    value: function token(_token) {
      this._header.token = _token;
      return this;
    }
  }, {
    key: 'header',
    value: function header(_header) {
      this._header = _header;
      return this;
    }
  }, {
    key: 'baseUrl',
    value: function baseUrl(_baseUrl) {
      this._baseUrl = _baseUrl;
      return this;
    }
  }, {
    key: 'interceptor',
    value: function interceptor(request, response) {
      if (typeof request === 'function') {
        this.interceptors.request = request;
      }
      if (typeof request === 'function') {
        this.interceptors.response = response;
      }
      return this;
    }
  }]);

  return Request;
}();

exports.default = new Request();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1FVEhPRCIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJSZXF1ZXN0IiwiX2hlYWRlciIsInRva2VuIiwiX2Jhc2VVcmwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicGFyYW1zIiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwiZGF0YSIsIndlcHkiLCJ0aGVuIiwicmVzIiwiYmFzZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVM7QUFDYkMsT0FBSyxLQURRO0FBRWJDLFFBQU0sTUFGTztBQUdiQyxPQUFLLEtBSFE7QUFJYkMsVUFBUTtBQUpLLENBQWY7O0lBTU1DLE87QUFXSixxQkFBYztBQUFBOztBQUFBLFNBVmRDLE9BVWMsR0FWSjtBQUNSQyxhQUFPO0FBREMsS0FVSTtBQUFBLFNBUGRDLFFBT2MsR0FQSCxJQU9HO0FBQUEsU0FMZEMsWUFLYyxHQUxDO0FBQ2JDLGVBQVMsSUFESTtBQUViQyxnQkFBVTtBQUZHLEtBS0Q7O0FBQ1osUUFBTUosUUFBUUssR0FBR0MsY0FBSCxDQUFrQixPQUFsQixDQUFkO0FBQ0EsUUFBSU4sS0FBSixFQUFXO0FBQ1QsV0FBS0QsT0FBTCxDQUFhQyxLQUFiLEdBQXFCQSxLQUFyQjtBQUNEO0FBQ0Y7Ozs7NEJBRU9PLE0sRUFBUTtBQUFBOztBQUFBLGlCQUN3QixLQUFLTCxZQUFMLENBQWtCQyxPQUFsQixHQUE0QixLQUFLRCxZQUFMLENBQWtCQyxPQUFsQixDQUEwQkksTUFBMUIsQ0FBNUIsR0FBZ0VBLE1BRHhGO0FBQUEsVUFDTkMsR0FETSxRQUNOQSxHQURNO0FBQUEsVUFDREMsTUFEQyxRQUNEQSxNQURDO0FBQUEsVUFDT0MsTUFEUCxRQUNPQSxNQURQO0FBQUEsVUFDZUMsSUFEZixRQUNlQSxJQURmOztBQUdkLGFBQU9DLGVBQUtULE9BQUwsQ0FBYTtBQUNsQkssYUFBSyxDQUFDLEtBQUtQLFFBQUwsSUFBaUIsRUFBbEIsSUFBd0JPLEdBRFg7QUFFbEJDLGdCQUFRQSxVQUFVaEIsT0FBT0MsR0FGUDtBQUdsQmlCLGNBQU1BLElBSFk7QUFJbEJELDZCQUNLLEtBQUtYLE9BRFYsRUFFS1csTUFGTDtBQUprQixPQUFiLEVBUUpHLElBUkksQ0FRQztBQUFBLGVBQU8sTUFBS1gsWUFBTCxDQUFrQkUsUUFBbEIsR0FBNkIsTUFBS0YsWUFBTCxDQUFrQkUsUUFBbEIsQ0FBMkJVLEdBQTNCLENBQTdCLEdBQStEQSxHQUF0RTtBQUFBLE9BUkQsQ0FBUDtBQVNEOzs7d0JBRUdOLEcsRUFBS0csSSxFQUFNRCxNLEVBQVE7QUFDckIsYUFBTyxLQUFLUCxPQUFMLENBQWEsRUFBRUssUUFBRixFQUFPQyxRQUFRaEIsT0FBT0MsR0FBdEIsRUFBMkJnQixjQUEzQixFQUFtQ0MsVUFBbkMsRUFBYixDQUFQO0FBQ0Q7Ozt5QkFDSUgsRyxFQUFLRyxJLEVBQU1ELE0sRUFBUTtBQUN0QixhQUFPLEtBQUtQLE9BQUwsQ0FBYSxFQUFFSyxRQUFGLEVBQU9DLFFBQVFoQixPQUFPRSxJQUF0QixFQUE0QmUsY0FBNUIsRUFBb0NDLFVBQXBDLEVBQWIsQ0FBUDtBQUNEOzs7d0JBQ0dILEcsRUFBS0csSSxFQUFNRCxNLEVBQVE7QUFDckIsYUFBTyxLQUFLUCxPQUFMLENBQWEsRUFBRUssUUFBRixFQUFPQyxRQUFRaEIsT0FBT0csR0FBdEIsRUFBMkJjLGNBQTNCLEVBQW1DQyxVQUFuQyxFQUFiLENBQVA7QUFDRDs7OzRCQUNNSCxHLEVBQUtHLEksRUFBTUQsTSxFQUFRO0FBQ3hCLGFBQU8sS0FBS1AsT0FBTCxDQUFhLEVBQUVLLFFBQUYsRUFBT0MsUUFBUWhCLE9BQU9JLE1BQXRCLEVBQThCYSxjQUE5QixFQUFzQ0MsVUFBdEMsRUFBYixDQUFQO0FBQ0Q7OzswQkFFS1gsTSxFQUFPO0FBQ1gsV0FBS0QsT0FBTCxDQUFhQyxLQUFiLEdBQXFCQSxNQUFyQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7MkJBQ01VLE8sRUFBUTtBQUNiLFdBQUtYLE9BQUwsR0FBZVcsT0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7NEJBQ09LLFEsRUFBUztBQUNmLFdBQUtkLFFBQUwsR0FBZ0JjLFFBQWhCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztnQ0FDV1osTyxFQUFTQyxRLEVBQVU7QUFDN0IsVUFBSSxPQUFPRCxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDLGFBQUtELFlBQUwsQ0FBa0JDLE9BQWxCLEdBQTRCQSxPQUE1QjtBQUNEO0FBQ0QsVUFBSSxPQUFPQSxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDLGFBQUtELFlBQUwsQ0FBa0JFLFFBQWxCLEdBQTZCQSxRQUE3QjtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztrQkFFWSxJQUFJTixPQUFKLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuY29uc3QgTUVUSE9EID0ge1xyXG4gIEdFVDogJ0dFVCcsXHJcbiAgUE9TVDogJ1BPU1QnLFxyXG4gIFBVVDogJ1BVVCcsXHJcbiAgREVMRVRFOiAnREVMRVRFJ1xyXG59XHJcbmNsYXNzIFJlcXVlc3Qge1xyXG4gIF9oZWFkZXIgPSB7XHJcbiAgICB0b2tlbjogbnVsbFxyXG4gIH1cclxuICBfYmFzZVVybCA9IG51bGxcclxuXHJcbiAgaW50ZXJjZXB0b3JzID0ge1xyXG4gICAgcmVxdWVzdDogbnVsbCxcclxuICAgIHJlc3BvbnNlOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICB0aGlzLl9oZWFkZXIudG9rZW4gPSB0b2tlblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChwYXJhbXMpIHtcclxuICAgIGNvbnN0IHsgdXJsLCBtZXRob2QsIGhlYWRlciwgZGF0YSB9ID0gdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdCA/IHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QocGFyYW1zKSA6IHBhcmFtc1xyXG5cclxuICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICh0aGlzLl9iYXNlVXJsIHx8ICcnKSArIHVybCxcclxuICAgICAgbWV0aG9kOiBtZXRob2QgfHwgTUVUSE9ELkdFVCxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgLi4udGhpcy5faGVhZGVyLFxyXG4gICAgICAgIC4uLmhlYWRlclxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlcyA9PiB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZSA/IHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlKHJlcykgOiByZXMpXHJcbiAgfVxyXG5cclxuICBnZXQodXJsLCBkYXRhLCBoZWFkZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyB1cmwsIG1ldGhvZDogTUVUSE9ELkdFVCwgaGVhZGVyLCBkYXRhIH0pXHJcbiAgfVxyXG4gIHBvc3QodXJsLCBkYXRhLCBoZWFkZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyB1cmwsIG1ldGhvZDogTUVUSE9ELlBPU1QsIGhlYWRlciwgZGF0YSB9KVxyXG4gIH1cclxuICBwdXQodXJsLCBkYXRhLCBoZWFkZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoeyB1cmwsIG1ldGhvZDogTUVUSE9ELlBVVCwgaGVhZGVyLCBkYXRhIH0pXHJcbiAgfVxyXG4gIGRlbGV0ZSh1cmwsIGRhdGEsIGhlYWRlcikge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7IHVybCwgbWV0aG9kOiBNRVRIT0QuREVMRVRFLCBoZWFkZXIsIGRhdGEgfSlcclxuICB9XHJcblxyXG4gIHRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLl9oZWFkZXIudG9rZW4gPSB0b2tlblxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbiAgaGVhZGVyKGhlYWRlcikge1xyXG4gICAgdGhpcy5faGVhZGVyID0gaGVhZGVyXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICBiYXNlVXJsKGJhc2VVcmwpIHtcclxuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuICBpbnRlcmNlcHRvcihyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QgPSByZXF1ZXN0XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3QgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UgPSByZXNwb25zZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFJlcXVlc3QoKSJdfQ==