webpackHotUpdate(0,{

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitButton = __webpack_require__(69);\n\nvar _reactUikitButton2 = _interopRequireDefault(_reactUikitButton);\n\nvar _reactUikitCodeblock = __webpack_require__(15);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(16);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitModal = __webpack_require__(608);\n\nvar _reactUikitModal2 = _interopRequireDefault(_reactUikitModal);\n\nvar _velocityAnimate = __webpack_require__(242);\n\nvar _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar animateIn = function animateIn(modal, dialog) {\n  console.log(modal);\n  (0, _velocityAnimate2.default)(modal, { opacity: 1 }, { display: 'block' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: 1, opacity: 1 }, { display: 'block' }, 200);\n};\n\nvar animateOut = function animateOut(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 0 }, { display: 'none' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: -100, opacity: 0 }, { display: 'none' }, 200);\n};\n\nvar blankAnimateIn = function blankAnimateIn(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 1 }, { display: 'block' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: [0, 0], opacity: 1 }, { display: 'block' }, 200);\n};\n\nvar blankAnimateOut = function blankAnimateOut(modal, dialog) {\n  (0, _velocityAnimate2.default)(modal, { opacity: 0 }, { display: 'none' }, 300);\n  (0, _velocityAnimate2.default)(dialog, { translateY: [0, 0], opacity: 0 }, { display: 'none' }, 200);\n};\n\nvar ModalDoc = function ModalDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Modal'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Displays dialogs prompts.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-modal' },\n          'react-uikit-modal'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-modal --save;\\n// ES6\\nimport Modal from \\'react-uikit-modal\\';\\n\\n// ES5\\nvar Modal = require(\\'react-uikit-modal\\');'\n      ),\n      _react2.default.createElement('hr', { className: 'uk-article-divider' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Headline'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <h2>Headline</h2>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal header and footer'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          header: 'Modal with header and footer',\n          footer: _react2.default.createElement(_reactUikitButton2.default, { body: 'Save' }),\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n\n        },\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  close\\n  header=\\'Modal with header and footer\\'\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n  footer={<Button body=\\'Save\\' />}\\n>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal Caption'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          caption: 'This is a caption',\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Modal with caption'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        ' <Modal\\n  caption=\\'this is a caption\\'\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <h2>With caption</h2>\\n  <p>\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\n    ea commodo consequat. Duis aute irure dolor in reprehenderit in\\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\\n    mollit anim id est laborum.\\n  </p>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal lightbox'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          lightbox: true,\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement('img', {\n          src: '../docs/images/placeholder_600x400.svg',\n          alt: 'Image place holder',\n          width: '100%',\n          height: '400' })\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Modal\\n  lightbox\\n  close\\n  trigger={{\\n    body: \\'Open\\',\\n    animate: {\\n      \\'in\\': (modal, dialog) => animateIn(modal, dialog),\\n      out: (modal, dialog) => animateOut(modal, dialog)\\n    }\\n  }}\\n>\\n  <img\\n    src=\\'../docs/images/placeholder_600x400.svg\\'\\n    alt=\\'Image place holder\\'\\n    width=\"100%\"\\n    height=\"400\"/>\\n</Modal>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal blank'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          blank: true,\n          close: true,\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return blankAnimateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return blankAnimateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Blank modal'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal types'\n      ),\n      _react2.default.createElement('p', null),\n      _react2.default.createElement(\n        'h3',\n        null,\n        'Alert'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitModal2.default,\n        {\n          ok: {\n            context: 'primary',\n            onClick: function onClick(modal, dialog) {\n              return animateOut(modal, dialog);\n            }\n          },\n          type: 'alert',\n          trigger: {\n            body: 'Open',\n            animate: {\n              'in': function _in(modal, dialog) {\n                return animateIn(modal, dialog);\n              },\n              out: function out(modal, dialog) {\n                return animateOut(modal, dialog);\n              }\n            }\n          }\n        },\n        _react2.default.createElement(\n          'p',\n          null,\n          'Attention!'\n        )\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Modal Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Modal>'\n        ),\n        ' props and their types.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement('code', null)\n            ),\n            _react2.default.createElement('td', { className: 'uk-text-left' }),\n            _react2.default.createElement('td', { className: 'uk-text-left' })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ModalDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RhbC1kb2MuanN4P2YzZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdiLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFJLEtBQUssRUFBRSxNQUFNLEVBQUs7QUFDbkMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixpQ0FBUyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkQsaUNBQVMsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDeEUsQ0FBQzs7QUFFRixJQUFNLFVBQVUsR0FBRyxTQUFiLFVBQVUsQ0FBSSxLQUFLLEVBQUUsTUFBTSxFQUFLO0FBQ3BDLGlDQUFTLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxpQ0FBUyxNQUFNLEVBQUUsRUFBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzVFLENBQUM7O0FBR0YsSUFBTSxjQUFjLEdBQUcsU0FBakIsY0FBYyxDQUFJLEtBQUssRUFBRSxNQUFNLEVBQUs7QUFDeEMsaUNBQVMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELGlDQUFT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IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtdWlraXQtYnV0dG9uJztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAncmVhY3QtdWlraXQtY29kZWJsb2NrJztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC11aWtpdC10YWJsZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1tb2RhbCc7XG5pbXBvcnQgdmVsb2NpdHkgZnJvbSAndmVsb2NpdHktYW5pbWF0ZSc7XG5cblxuY29uc3QgYW5pbWF0ZUluID0gKG1vZGFsLCBkaWFsb2cpID0+IHtcbiAgY29uc29sZS5sb2cobW9kYWwpO1xuICB2ZWxvY2l0eShtb2RhbCwge29wYWNpdHk6IDF9LCB7ZGlzcGxheTogJ2Jsb2NrJ30sIDMwMCk7XG4gIHZlbG9jaXR5KGRpYWxvZywge3RyYW5zbGF0ZVk6IDEsIG9wYWNpdHk6IDF9LCB7ZGlzcGxheTogJ2Jsb2NrJ30sIDIwMCk7XG59O1xuXG5jb25zdCBhbmltYXRlT3V0ID0gKG1vZGFsLCBkaWFsb2cpID0+IHtcbiAgdmVsb2NpdHkobW9kYWwsIHtvcGFjaXR5OjB9LCB7IGRpc3BsYXk6ICdub25lJyB9LCAzMDApO1xuICB2ZWxvY2l0eShkaWFsb2csIHt0cmFuc2xhdGVZOiAtMTAwLCBvcGFjaXR5OiAwfSwgeyBkaXNwbGF5OiAnbm9uZScgfSwgMjAwKTtcbn07XG5cblxuY29uc3QgYmxhbmtBbmltYXRlSW4gPSAobW9kYWwsIGRpYWxvZykgPT4ge1xuICB2ZWxvY2l0eShtb2RhbCwge29wYWNpdHk6IDF9LCB7ZGlzcGxheTogJ2Jsb2NrJ30sIDMwMCk7XG4gIHZlbG9jaXR5KGRpYWxvZywge3RyYW5zbGF0ZVk6IFswLCAwXSwgb3BhY2l0eTogMX0sIHtkaXNwbGF5OiAnYmxvY2snfSwgMjAwKTtcbn07XG5cbmNvbnN0IGJsYW5rQW5pbWF0ZU91dCA9IChtb2RhbCwgZGlhbG9nKSA9PiB7XG4gIHZlbG9jaXR5KG1vZGFsLCB7b3BhY2l0eTowfSwgeyBkaXNwbGF5OiAnbm9uZScgfSwgMzAwKTtcbiAgdmVsb2NpdHkoZGlhbG9nLCB7dHJhbnNsYXRlWTogWzAsIDBdLCBvcGFjaXR5OiAwfSwgeyBkaXNwbGF5OiAnbm9uZScgfSwgMjAwKTtcbn07XG5cblxuY29uc3QgTW9kYWxEb2MgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5Nb2RhbDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3VrLWFydGljbGUtbGVhZCc+XG4gICAgICAgIERpc3BsYXlzIGRpYWxvZ3MgcHJvbXB0cy5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9vdGlzc3YvcmVhY3QtdWlraXQtbW9kYWwnPnJlYWN0LXVpa2l0LW1vZGFsPC9hPiBvbiBnaXRodWIuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VXNhZ2U8L2gyPlxuICAgICAgPENvZGVibG9jaz5cbntgbnBtIGluc3RhbGwgcmVhY3QtdWlraXQtbW9kYWwgLS1zYXZlO1xuLy8gRVM2XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtdWlraXQtbW9kYWwnO1xuXG4vLyBFUzVcbnZhciBNb2RhbCA9IHJlcXVpcmUoJ3JlYWN0LXVpa2l0LW1vZGFsJyk7YH1cbiAgICAgIDwvQ29kZWJsb2NrPlxuXG4gICAgICA8aHIgY2xhc3NOYW1lPSd1ay1hcnRpY2xlLWRpdmlkZXInIC8+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuXG4gICAgICA8TW9kYWxcbiAgICAgICAgY2xvc2VcbiAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgIGJvZHk6ICdPcGVuJyxcbiAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGgyPkhlYWRsaW5lPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICAgICAgICB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleFxuICAgICAgICAgIGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgICAgICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICAgICAgICBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnRcbiAgICAgICAgICBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Nb2RhbD5cblxuICAgICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgPE1vZGFsXG4gIGNsb3NlXG4gIHRyaWdnZXI9e3tcbiAgICBib2R5OiAnT3BlbicsXG4gICAgYW5pbWF0ZToge1xuICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICB9XG4gIH19XG4+XG4gIDxoMj5IZWFkbGluZTwvaDI+XG4gIDxwPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltXG4gICAgdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXhcbiAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyXG4gICAgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50XG4gICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gIDwvcD5cbjwvTW9kYWw+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Nb2RhbCBoZWFkZXIgYW5kIGZvb3RlcjwvaDI+XG4gICAgICA8cD5cblxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaGVhZGVyPSdNb2RhbCB3aXRoIGhlYWRlciBhbmQgZm9vdGVyJ1xuICAgICAgICAgIGZvb3Rlcj17PEJ1dHRvbiBib2R5PSdTYXZlJyAvPn1cbiAgICAgICAgICBjbG9zZVxuICAgICAgICAgIHRyaWdnZXI9e3tcbiAgICAgICAgICAgIGJvZHk6ICdPcGVuJyxcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgICAgICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG5cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXG4gICAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbVxuICAgICAgICAgICAgdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXhcbiAgICAgICAgICAgIGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgICAgICAgICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1clxuICAgICAgICAgICAgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50XG4gICAgICAgICAgICBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2A8TW9kYWxcbiAgY2xvc2VcbiAgaGVhZGVyPSdNb2RhbCB3aXRoIGhlYWRlciBhbmQgZm9vdGVyJ1xuICB0cmlnZ2VyPXt7XG4gICAgYm9keTogJ09wZW4nLFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICdpbic6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlSW4obW9kYWwsIGRpYWxvZyksXG4gICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBhbmltYXRlT3V0KG1vZGFsLCBkaWFsb2cpXG4gICAgfVxuICB9fVxuICBmb290ZXI9ezxCdXR0b24gYm9keT0nU2F2ZScgLz59XG4+XG4gIDxwPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltXG4gICAgdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXhcbiAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyXG4gICAgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50XG4gICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gIDwvcD5cbjwvTW9kYWw+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Nb2RhbCBDYXB0aW9uPC9oMj5cbiAgICAgIDxwPlxuXG4gICAgICA8L3A+XG5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBjYXB0aW9uPSdUaGlzIGlzIGEgY2FwdGlvbidcbiAgICAgICAgICBjbG9zZVxuICAgICAgICAgIHRyaWdnZXI9e3tcbiAgICAgICAgICAgIGJvZHk6ICdPcGVuJyxcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgICAgICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDI+TW9kYWwgd2l0aCBjYXB0aW9uPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICAgICAgICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgICAgICAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICAgICAgICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICAgICAgICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgICAgICAgICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgIDxNb2RhbFxuICBjYXB0aW9uPSd0aGlzIGlzIGEgY2FwdGlvbidcbiAgY2xvc2VcbiAgdHJpZ2dlcj17e1xuICAgIGJvZHk6ICdPcGVuJyxcbiAgICBhbmltYXRlOiB7XG4gICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgIH1cbiAgfX1cbj5cbiAgPGgyPldpdGggY2FwdGlvbjwvaDI+XG4gIDxwPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltXG4gICAgdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXhcbiAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyXG4gICAgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50XG4gICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gIDwvcD5cbjwvTW9kYWw+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Nb2RhbCBsaWdodGJveDwvaDI+XG4gICAgICA8cD5cblxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgbGlnaHRib3hcbiAgICAgICAgICBjbG9zZVxuICAgICAgICAgIHRyaWdnZXI9e3tcbiAgICAgICAgICAgIGJvZHk6ICdPcGVuJyxcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgICAgICAgICAgb3V0OiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9Jy4uL2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzYwMHg0MDAuc3ZnJ1xuICAgICAgICAgICAgYWx0PSdJbWFnZSBwbGFjZSBob2xkZXInXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNDAwXCIvPlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgPE1vZGFsXG4gIGxpZ2h0Ym94XG4gIGNsb3NlXG4gIHRyaWdnZXI9e3tcbiAgICBib2R5OiAnT3BlbicsXG4gICAgYW5pbWF0ZToge1xuICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVJbihtb2RhbCwgZGlhbG9nKSxcbiAgICAgIG91dDogKG1vZGFsLCBkaWFsb2cpID0+IGFuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICB9XG4gIH19XG4+XG4gIDxpbWdcbiAgICBzcmM9Jy4uL2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzYwMHg0MDAuc3ZnJ1xuICAgIGFsdD0nSW1hZ2UgcGxhY2UgaG9sZGVyJ1xuICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgaGVpZ2h0PVwiNDAwXCIvPlxuPC9Nb2RhbD5cbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Nb2RhbCBibGFuazwvaDI+XG4gICAgICA8cD5cblxuICAgICAgPC9wPlxuXG4gICAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgYmxhbmtcbiAgICAgICAgICBjbG9zZVxuICAgICAgICAgIHRyaWdnZXI9e3tcbiAgICAgICAgICAgIGJvZHk6ICdPcGVuJyxcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICAgICAgJ2luJzogKG1vZGFsLCBkaWFsb2cpID0+IGJsYW5rQW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgICAgICAgICBvdXQ6IChtb2RhbCwgZGlhbG9nKSA9PiBibGFua0FuaW1hdGVPdXQobW9kYWwsIGRpYWxvZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgyPkJsYW5rIG1vZGFsPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW1cbiAgICAgICAgICAgIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4XG4gICAgICAgICAgICBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW5cbiAgICAgICAgICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXJcbiAgICAgICAgICAgIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudFxuICAgICAgICAgICAgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntgXG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Nb2RhbCB0eXBlczwvaDI+XG4gICAgICA8cD5cblxuICAgICAgPC9wPlxuXG4gICAgICA8aDM+QWxlcnQ8L2gzPlxuICAgICAgPGg0IGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDQ+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIG9rPXt7XG4gICAgICAgICAgICBjb250ZXh0OiAncHJpbWFyeScsXG4gICAgICAgICAgICBvbkNsaWNrOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgIH19XG4gICAgICAgICAgdHlwZT0nYWxlcnQnXG4gICAgICAgICAgdHJpZ2dlcj17e1xuICAgICAgICAgICAgYm9keTogJ09wZW4nLFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAnaW4nOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZUluKG1vZGFsLCBkaWFsb2cpLFxuICAgICAgICAgICAgICBvdXQgOiAobW9kYWwsIGRpYWxvZykgPT4gYW5pbWF0ZU91dChtb2RhbCwgZGlhbG9nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEF0dGVudGlvbiFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue2BcbmB9XG4gICAgICA8L0NvZGVibG9jaz5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Nb2RhbCBQcm9wczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGNvZGU+Jmx0O01vZGFsJmd0OzwvY29kZT4gcHJvcHMgYW5kIHRoZWlyIHR5cGVzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+PC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21vZGFsLWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})