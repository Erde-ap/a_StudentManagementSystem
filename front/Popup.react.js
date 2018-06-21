//node_modules/react-popup/dist 内に配置、置き換えてください

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _keymaster = _interopRequireDefault(require("keymaster"));

var _Store = _interopRequireDefault(require("./Store"));

var _Header = _interopRequireDefault(require("./Header.react"));

var _Footer = _interopRequireDefault(require("./Footer.react"));

var _Constants = _interopRequireDefault(require("./Constants"));

var _Bem = require("./Bem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var defaultKeyFilter = _keymaster.default.filter;
var Store = new _Store.default();

var handleClose = function handleClose() {
  _keymaster.default.deleteScope('react-popup');

  _keymaster.default.filter = defaultKeyFilter;
  Store.close();
};

var initialState = {
  id: null,
  title: null,
  buttons: null,
  content: null,
  visible: false,
  className: null,
  noOverlay: false,
  position: false,
  closeOnOutsideClick: true
};

var Popup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popup, _React$Component);

  _createClass(Popup, null, [{
    key: "addShowListener",
    value: function addShowListener(callback) {
      Store.on(_Constants.default.SHOW, callback);
    }
  }, {
    key: "removeShowListener",
    value: function removeShowListener(callback) {
      Store.removeListener(_Constants.default.SHOW, callback);
    }
  }, {
    key: "addCloseListener",
    value: function addCloseListener(callback) {
      Store.on(_Constants.default.CLOSE, callback);
    }
  }, {
    key: "removeCloseListener",
    value: function removeCloseListener(callback) {
      Store.removeListener(_Constants.default.CLOSE, callback);
    }
  }, {
    key: "register",
    value: function register(data) {
      var id = Store.getId();
      Store.popups[id] = Object.assign({}, initialState, data);
      return id;
    }
  }, {
    key: "queue",
    value: function queue(id) {
      if (!Object.prototype.hasOwnProperty.call(Store.popups, id)) {
        return false;
      }
      /** Add popup to queue */


      Store.queue.push(id);
      /** Dispatch queue */

      Store.dispatch();
      return id;
    }
  }, {
    key: "create",
    value: function create(data, bringToFront) {
      /** Register popup */
      var id = this.register(data);
      /** Queue popup */

      if (bringToFront === true) {
        var currentlyActive = Store.active;
        Store.active = null;
        this.queue(id);
        this.queue(currentlyActive);
        Store.dispatch();
      } else {
        this.queue(id);
      }

      return id;
    }
  }, {
    key: "alert",
    value: function alert(text, title, bringToFront) {
      var data = {
        title: title,
        content: text
      };
      return this.create(data, bringToFront);
    }
  }, {
    key: "close",
    value: function close() {
      Store.close();
    }
  }, {
    key: "registerPlugin",
    value: function registerPlugin(name, callback) {
      Store.plugins[name] = callback.bind(this);
    }
  }, {
    key: "plugins",
    value: function plugins() {
      return Store.plugins;
    }
  }, {
    key: "refreshPosition",
    value: function refreshPosition(position) {
      return Store.refreshPosition(position);
    }
  }, {
    key: "clearQueue",
    value: function clearQueue() {
      return Store.clearQueue();
    }
  }]);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));
    initialState.closeOnOutsideClick = _this.props.closeOnOutsideClick;
    _this.state = initialState;
    _this.bound = {
      onShow: _this.onShow.bind(_assertThisInitialized(_this)),
      onClose: _this.onClose.bind(_assertThisInitialized(_this)),
      onRefresh: _this.onRefresh.bind(_assertThisInitialized(_this)),
      containerClick: _this.containerClick.bind(_assertThisInitialized(_this)),
      handleButtonClick: _this.handleButtonClick.bind(_assertThisInitialized(_this))
    };
    _this.boxRef = null;
    _this.defaultKeyBindings = {
      ok: _this.props.defaultOkKey,
      cancel: _this.props.defaultCancelKey
    };
    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Store.on(_Constants.default.SHOW, this.bound.onShow);
      Store.on(_Constants.default.CLOSE, this.bound.onClose);
      Store.on(_Constants.default.REFRESH, this.bound.onRefresh);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.boxRef) {
        this.boxRef.focus();
      }

      this.setPosition(this.state.position);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Store.removeListener(_Constants.default.SHOW, this.bound.onShow);
      Store.removeListener(_Constants.default.CLOSE, this.bound.onClose);
      Store.removeListener(_Constants.default.REFRESH, this.bound.onRefresh);

      _keymaster.default.deleteScope('react-popup');

      _keymaster.default.filter = defaultKeyFilter;
    }
    /**
     * Refresh popup position
     * @param position
     * @private
     */

  }, {
    key: "onRefresh",
    value: function onRefresh(position) {
      this.setPosition(position);
    }
    /**
     * On popup close
     * @private
     */

  }, {
    key: "onClose",
    value: function onClose() {
      _keymaster.default.deleteScope('react-popup');

      _keymaster.default.filter = defaultKeyFilter;
      this.setState(initialState);
    }
    /**
     * On popup show
     * @private
     */

  }, {
    key: "onShow",
    value: function onShow(id) {
      var _this2 = this;

      _keymaster.default.deleteScope('react-popup');

      _keymaster.default.filter = function () {
        return true;
      };

      var popup = Store.activePopup();

      if (popup.buttons && !Object.prototype.hasOwnProperty.call(popup.buttons, 'left')) {
        popup.buttons.left = [];
      }

      if (popup.buttons && !Object.prototype.hasOwnProperty.call(popup.buttons, 'right')) {
        popup.buttons.right = [];
      }

      this.setState({
        id: id,
        title: popup.title,
        content: popup.content,
        buttons: popup.buttons,
        visible: true,
        className: popup.className,
        noOverlay: popup.noOverlay,
        position: popup.position,
        closeOnOutsideClick: popup.closeOnOutsideClick
      }, function () {
        _keymaster.default.setScope('react-popup');

        if (_this2.props.escToClose) {
          (0, _keymaster.default)('esc', 'react-popup', _this2.handleKeyEvent.bind(_this2, 'cancel', _this2.state.id));
        }

        if (_this2.state.buttons) {
          if (_this2.state.buttons.left.length) {
            _this2.state.buttons.left.forEach(function (button) {
              return _this2.bindKeyEvents(button);
            });
          }

          if (_this2.state.buttons.right.length) {
            _this2.state.buttons.right.forEach(function (button) {
              return _this2.bindKeyEvents(button);
            });
          }
        }
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      var box = this.boxRef;
      var boxPosition = position;

      if (!box) {
        return;
      }

      if (!boxPosition) {
        boxPosition = this.state.position;
      }

      if (!boxPosition) {
        box.style.opacity = 1;
        box.style.top = null;
        box.style.left = null;
        box.style.margin = null;
        return;
      }

      if (typeof boxPosition === 'function') {
        boxPosition.call(null, box);
        return;
      }

      box.style.top = "".concat(parseInt(boxPosition.y, 10), "px");
      box.style.left = "".concat(parseInt(boxPosition.x, 10), "px");
      box.style.margin = 0;
      box.style.opacity = 1;
    }
    /**
     * Handle container click
     * @param e
     * @private
     */

  }, {
    key: "containerClick",
    value: function containerClick() {
      if (this.state.closeOnOutsideClick) {
        handleClose();
      }
    }
  }, {
    key: "bindKeyEvents",
    value: function bindKeyEvents(button) {
      var code = null;

      if (typeof button === 'string') {
        code = this.defaultKeyBindings[button];
      } else if (Object.prototype.hasOwnProperty.call(button, 'key')) {
        code = button.key;
      }

      if (this.props.escToClose && code === 'esc') {
        return;
      }

      if (code) {
        (0, _keymaster.default)(code, 'react-popup', this.handleKeyEvent.bind(this, button, this.state.id));
      }
    }
  }, {
    key: "handleKeyEvent",
    value: function handleKeyEvent(button, id, e) {
      var excludeTags = ['INPUT', 'TEXTAREA', 'BUTTON'];

      if (this.state.id !== id || button.key === 'enter' && excludeTags.indexOf(e.target.tagName) >= 0) {
        return true;
      }

      if (typeof button === 'string') {
        handleClose();
      } else if (Object.prototype.hasOwnProperty.call(button, 'action')) {
        this.handleButtonClick(button.action);
      }

      return false;
    }
    /**
     * Handle button clicks
     * @param action
     * @returns {*}
     * @private
     */

  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(action) {
      if (typeof action === 'function') {
        return action.call(this, Store);
      }

      return null;
    }
  }, {
    key: "className",
    value: function className(_className) {
      return (0, _Bem.element)(_className, this.props.className);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = this.props.className;
      var box = null;
      var overlayStyle = {};

      if (this.state.visible) {
        var closeBtn = null;
        className += " ".concat(this.props.className, "--visible");

        if (this.props.closeBtn) {
          closeBtn = _react.default.createElement("button", {
            onClick: handleClose,
            className: "".concat(this.props.className, "__close")
          }, this.props.closeHtml);
        }

        var boxClass = this.className('box');

        if (this.state.className) {
          boxClass += " ".concat((0, _Bem.modifier)(this.state.className, boxClass));
        }

        box = _react.default.createElement("article", {
          role: "dialog",
          tabIndex: "-1",
          ref: function ref(el) {
            _this3.boxRef = el;
          },
          style: {
            opacity: 0,
            outline: 'none'
          },
          className: boxClass
        }, closeBtn, _react.default.createElement(_Header.default, {
          title: this.state.title,
          className: this.className('box__header')
        }), _react.default.createElement("div", {
          className: this.className('box__body')
        }, this.state.content), _react.default.createElement(_Footer.default, {
          className: this.className('box__footer'),
          btnClass: this.props.btnClass,
          buttonClick: this.bound.handleButtonClick,
          onClose: handleClose,
          onOk: handleClose,
          defaultOk: this.props.defaultOk,
          defaultCancel: this.props.defaultCancel,
          buttons: this.state.buttons
        }));
      }

      if (this.state.noOverlay) {
        overlayStyle.background = 'transparent';
      }

      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("div", {
        role: "presentation",
        onClick: this.bound.containerClick,
        className: this.className('overlay'),
        style: overlayStyle
      }), box);
    }
  }]);

  return Popup;
}(_react.default.Component);

Object.defineProperty(Popup, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: 'mm-popup',
    btnClass: 'mm-popup__btn',
    closeBtn: true,
    closeHtml: null,
    defaultOk: 'Ok',
    defaultOkKey: 'enter',
    defaultCancel: 'Cancel',
    defaultCancelKey: 'esc',
    closeOnOutsideClick: true,
    escToClose: true
  }
});
Popup.propTypes = {
  className: _propTypes.default.string,
  btnClass: _propTypes.default.string,
  closeBtn: _propTypes.default.bool,
  closeHtml: _propTypes.default.node,
  defaultOk: _propTypes.default.string,
  defaultOkKey: _propTypes.default.string,
  defaultCancel: _propTypes.default.string,
  defaultCancelKey: _propTypes.default.string,
  closeOnOutsideClick: _propTypes.default.bool,
  escToClose: _propTypes.default.bool
};
var _default = Popup;
exports.default = _default;