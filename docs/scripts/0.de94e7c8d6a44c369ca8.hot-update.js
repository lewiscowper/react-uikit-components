webpackHotUpdate(0,{

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(75);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(155);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(89);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitButton = __webpack_require__(253);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Dialog = function Dialog(props) {\n  // CSS classes\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-modal-dialog', props.blank ? 'uk-modal-dialog-blank uk-height-viewport' : null, props.large ? 'uk-modal-dialog-large' : null, props.lightbox ? 'uk-modal-dialog-lightbox' : null]);\n\n  var closeCSSClasses = _reactUikitBase2.default.helpers.cleanClasses(['uk-modal-close uk-close', props.lightbox ? 'uk-close-alt' : null]);\n\n  // Elements\n  var caption = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-caption' }, props.caption))(props.caption);\n\n  var close = _ufunc2.default.maybeIf(_react2.default.createElement('a', {\n    href: '#',\n    className: closeCSSClasses,\n    'data-kitid': props.kitid ? props.kitid : 'close-' + props.kitid,\n    onClick: props.onClose,\n    float: 'right' }))(props.onClose);\n\n  var footer = function footer(children) {\n    return _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-footer' }, children))(props.footer || props.type !== 'block');\n  };\n\n  var header = _ufunc2.default.maybeIf(_react2.default.createElement('div', { className: 'uk-modal-header' }, _react2.default.createElement('h2', null, props.header)))(props.header);\n\n  var type = {\n    block: _react2.default.createElement('div', {\n      className: cssClassNames,\n      'data-kitid': props.kitid ? props.kitid : 'dialog-' + props.kitid\n    }, close, header, props.children, caption, footer(props.footer)),\n\n    alert: _react2.default.createElement('div', {\n      className: cssClassNames,\n      'data-kitid': props.kitid ? props.kitid : 'dialog-' + props.kitid\n    }, props.children, footer(_react2.default.createElement(_reactUikitButton2.default, { body: 'ok', float: 'right' })))\n  };\n\n  // Return Component\n  return type[props.type] || type['block'];\n};\n\nDialog.propTypes = {\n  blank: _react2.default.PropTypes.bool,\n  caption: _react2.default.PropTypes.string,\n  children: _react2.default.PropTypes.any,\n  close: _react2.default.PropTypes.bool,\n  footer: _react2.default.PropTypes.node,\n  header: _react2.default.PropTypes.node,\n  kitid: _react2.default.PropTypes.string,\n  large: _react2.default.PropTypes.bool,\n  lightbox: _react2.default.PropTypes.bool,\n  onClose: _react2.default.PropTypes.func,\n  spinner: _react2.default.PropTypes.bool,\n  type: _react2.default.PropTypes.oneOf(['block', 'alert', 'propmt'])\n};\n\nexports.default = _reactUikitBase2.default.base(Dialog);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1tb2RhbC9saWIvZGlhbG9nLmpzP2YxY2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEVBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsSUFBSSxlQUFlLEdBQUcsbUJBQU8sQ0FBQyxHQUFrQixDQUFDLENBQUM7O0FBRWxELElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRS9ELElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsRUFBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLGlCQUFpQixHQUFHLG1CQUFPLENBQUMsR0FBb0IsQ0FBQyxDQUFDOztBQUV0RCxJQUFJLGtCQUFrQixHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRW5FLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FBRTs7QUFFL0YsSUFBSSxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFOztBQUVsQyxNQUFJLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsMENBQTBDLEdBQUcsSUFBSSxFQUFFLEtBQUss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cm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZSA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LWJhc2UnKTtcblxudmFyIF9yZWFjdFVpa2l0QmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QmFzZSk7XG5cbnZhciBfdWZ1bmMgPSByZXF1aXJlKCd1ZnVuYycpO1xuXG52YXIgX3VmdW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VmdW5jKTtcblxudmFyIF9yZWFjdFVpa2l0QnV0dG9uID0gcmVxdWlyZSgncmVhY3QtdWlraXQtYnV0dG9uJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFVpa2l0QnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERpYWxvZyA9IGZ1bmN0aW9uIERpYWxvZyhwcm9wcykge1xuICAvLyBDU1MgY2xhc3Nlc1xuICB2YXIgY3NzQ2xhc3NOYW1lcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbJ3VrLW1vZGFsLWRpYWxvZycsIHByb3BzLmJsYW5rID8gJ3VrLW1vZGFsLWRpYWxvZy1ibGFuayB1ay1oZWlnaHQtdmlld3BvcnQnIDogbnVsbCwgcHJvcHMubGFyZ2UgPyAndWstbW9kYWwtZGlhbG9nLWxhcmdlJyA6IG51bGwsIHByb3BzLmxpZ2h0Ym94ID8gJ3VrLW1vZGFsLWRpYWxvZy1saWdodGJveCcgOiBudWxsXSk7XG5cbiAgdmFyIGNsb3NlQ1NTQ2xhc3NlcyA9IF9yZWFjdFVpa2l0QmFzZTIuZGVmYXVsdC5oZWxwZXJzLmNsZWFuQ2xhc3NlcyhbJ3VrLW1vZGFsLWNsb3NlIHVrLWNsb3NlJywgcHJvcHMubGlnaHRib3ggPyAndWstY2xvc2UtYWx0JyA6IG51bGxdKTtcblxuICAvLyBFbGVtZW50c1xuICB2YXIgY2FwdGlvbiA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiAndWstbW9kYWwtY2FwdGlvbicgfSxcbiAgICBwcm9wcy5jYXB0aW9uXG4gICkpKHByb3BzLmNhcHRpb24pO1xuXG4gIHZhciBjbG9zZSA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgIGhyZWY6ICcjJyxcbiAgICBjbGFzc05hbWU6IGNsb3NlQ1NTQ2xhc3NlcyxcbiAgICAnZGF0YS1raXRpZCc6IHByb3BzLmtpdGlkID8gcHJvcHMua2l0aWQgOiAnY2xvc2UtJyArIHByb3BzLmtpdGlkLFxuICAgIG9uQ2xpY2s6IHByb3BzLm9uQ2xvc2UsXG4gICAgZmxvYXQ6ICdyaWdodCcgfSkpKHByb3BzLm9uQ2xvc2UpO1xuXG4gIHZhciBmb290ZXIgPSBmdW5jdGlvbiBmb290ZXIoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAndWstbW9kYWwtZm9vdGVyJyB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApKShwcm9wcy5mb290ZXIgfHwgcHJvcHMudHlwZSAhPT0gJ2Jsb2NrJyk7XG4gIH07XG5cbiAgdmFyIGhlYWRlciA9IF91ZnVuYzIuZGVmYXVsdC5tYXliZUlmKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiAndWstbW9kYWwtaGVhZGVyJyB9LFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2gyJyxcbiAgICAgIG51bGwsXG4gICAgICBwcm9wcy5oZWFkZXJcbiAgICApXG4gICkpKHByb3BzLmhlYWRlcik7XG5cbiAgdmFyIHR5cGUgPSB7XG4gICAgYmxvY2s6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY3NzQ2xhc3NOYW1lcyxcbiAgICAgICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZCA/IHByb3BzLmtpdGlkIDogJ2RpYWxvZy0nICsgcHJvcHMua2l0aWRcbiAgICAgIH0sXG4gICAgICBjbG9zZSxcbiAgICAgIGhlYWRlcixcbiAgICAgIHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2FwdGlvbixcbiAgICAgIGZvb3Rlcihwcm9wcy5mb290ZXIpXG4gICAgKSxcblxuICAgIGFsZXJ0OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgICAgICdkYXRhLWtpdGlkJzogcHJvcHMua2l0aWQgPyBwcm9wcy5raXRpZCA6ICdkaWFsb2ctJyArIHByb3BzLmtpdGlkXG4gICAgICB9LFxuICAgICAgcHJvcHMuY2hpbGRyZW4sXG4gICAgICBmb290ZXIoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0VWlraXRCdXR0b24yLmRlZmF1bHQsIHsgYm9keTogJ29rJywgZmxvYXQ6ICdyaWdodCcgfSkpXG4gICAgKVxuICB9O1xuXG4gIC8vIFJldHVybiBDb21wb25lbnRcbiAgcmV0dXJuIHR5cGVbcHJvcHMudHlwZV0gfHwgdHlwZVsnYmxvY2snXTtcbn07XG5cbkRpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIGJsYW5rOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGNhcHRpb246IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5hbnksXG4gIGNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gIGZvb3RlcjogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ub2RlLFxuICBoZWFkZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMubm9kZSxcbiAga2l0aWQ6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsYXJnZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBsaWdodGJveDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICBvbkNsb3NlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmMsXG4gIHNwaW5uZXI6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2Jsb2NrJywgJ2FsZXJ0JywgJ3Byb3BtdCddKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmJhc2UoRGlhbG9nKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LW1vZGFsL2xpYi9kaWFsb2cuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})