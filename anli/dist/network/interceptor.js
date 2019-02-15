"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;
exports.response = response;
/**
 * request 拦截器
 * 可以全局拦截请求参数
 */
function request(params) {
  return params;
}

/**
 * response 拦截器
 * 可以全局拦截请求返回结果
 */
function response(res) {
  if (res.statusCode === 200) {
    res = res.data;
    if (!res.err_code) {
      return res;
    } else {
      return Promise.reject(res);
    }
  } else {
    return Promise.reject(res);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyY2VwdG9yLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJyZXNwb25zZSIsInBhcmFtcyIsInJlcyIsInN0YXR1c0NvZGUiLCJkYXRhIiwiZXJyX2NvZGUiLCJQcm9taXNlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsTyxHQUFBQSxPO1FBUUFDLFEsR0FBQUEsUTtBQVpoQjs7OztBQUlPLFNBQVNELE9BQVQsQ0FBaUJFLE1BQWpCLEVBQXlCO0FBQzlCLFNBQU9BLE1BQVA7QUFDRDs7QUFFRDs7OztBQUlPLFNBQVNELFFBQVQsQ0FBa0JFLEdBQWxCLEVBQXVCO0FBQzVCLE1BQUlBLElBQUlDLFVBQUosS0FBbUIsR0FBdkIsRUFBNEI7QUFDMUJELFVBQU1BLElBQUlFLElBQVY7QUFDQSxRQUFJLENBQUNGLElBQUlHLFFBQVQsRUFBbUI7QUFDakIsYUFBT0gsR0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9JLFFBQVFDLE1BQVIsQ0FBZUwsR0FBZixDQUFQO0FBQ0Q7QUFDRixHQVBELE1BT087QUFDTCxXQUFPSSxRQUFRQyxNQUFSLENBQWVMLEdBQWYsQ0FBUDtBQUNEO0FBQ0YiLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogcmVxdWVzdCDmi6bmiKrlmahcclxuICog5Y+v5Lul5YWo5bGA5oum5oiq6K+35rGC5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcGFyYW1zXHJcbn1cclxuXHJcbi8qKlxyXG4gKiByZXNwb25zZSDmi6bmiKrlmahcclxuICog5Y+v5Lul5YWo5bGA5oum5oiq6K+35rGC6L+U5Zue57uT5p6cXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2UocmVzKSB7XHJcbiAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuICAgIHJlcyA9IHJlcy5kYXRhXHJcbiAgICBpZiAoIXJlcy5lcnJfY29kZSkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKVxyXG4gIH1cclxufSJdfQ==