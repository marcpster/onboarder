var J0 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var hj = J0((Qe, Xe) => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
      return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(i) {
      if (i.ep)
        return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o);
    }
  })();
  var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Is(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var tm = { exports: {} }, zs = {}, nm = { exports: {} }, W = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var io = Symbol.for("react.element"), e1 = Symbol.for("react.portal"), t1 = Symbol.for("react.fragment"), n1 = Symbol.for("react.strict_mode"), r1 = Symbol.for("react.profiler"), i1 = Symbol.for("react.provider"), o1 = Symbol.for("react.context"), s1 = Symbol.for("react.forward_ref"), a1 = Symbol.for("react.suspense"), l1 = Symbol.for("react.memo"), u1 = Symbol.for("react.lazy"), Hf = Symbol.iterator;
  function c1(e) {
    return e === null || typeof e != "object" ? null : (e = Hf && e[Hf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var rm = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, im = Object.assign, om = {};
  function Qr(e, t, n) {
    this.props = e, this.context = t, this.refs = om, this.updater = n || rm;
  }
  Qr.prototype.isReactComponent = {};
  Qr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Qr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function sm() {
  }
  sm.prototype = Qr.prototype;
  function Qu(e, t, n) {
    this.props = e, this.context = t, this.refs = om, this.updater = n || rm;
  }
  var Xu = Qu.prototype = new sm();
  Xu.constructor = Qu;
  im(Xu, Qr.prototype);
  Xu.isPureReactComponent = !0;
  var Kf = Array.isArray, am = Object.prototype.hasOwnProperty, Zu = { current: null }, lm = { key: !0, ref: !0, __self: !0, __source: !0 };
  function um(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        am.call(t, r) && !lm.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
      i.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++)
        l[u] = arguments[u + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (r in a = e.defaultProps, a)
        i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: io, type: e, key: o, ref: s, props: i, _owner: Zu.current };
  }
  function f1(e, t) {
    return { $$typeof: io, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function qu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === io;
  }
  function d1(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var Gf = /\/+/g;
  function La(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? d1("" + e.key) : t.toString(36);
  }
  function Io(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
      s = !0;
    else
      switch (o) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case io:
            case e1:
              s = !0;
          }
      }
    if (s)
      return s = e, i = i(s), e = r === "" ? "." + La(s, 0) : r, Kf(i) ? (n = "", e != null && (n = e.replace(Gf, "$&/") + "/"), Io(i, t, n, "", function(u) {
        return u;
      })) : i != null && (qu(i) && (i = f1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Gf, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Kf(e))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + La(o, a);
        s += Io(o, t, n, l, i);
      }
    else if (l = c1(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        o = o.value, l = r + La(o, a++), s += Io(o, t, n, l, i);
    else if (o === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function vo(e, t, n) {
    if (e == null)
      return e;
    var r = [], i = 0;
    return Io(e, r, "", "", function(o) {
      return t.call(n, o, i++);
    }), r;
  }
  function h1(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var Ve = { current: null }, zo = { transition: null }, p1 = { ReactCurrentDispatcher: Ve, ReactCurrentBatchConfig: zo, ReactCurrentOwner: Zu };
  function cm() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  W.Children = { map: vo, forEach: function(e, t, n) {
    vo(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return vo(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return vo(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!qu(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  W.Component = Qr;
  W.Fragment = t1;
  W.Profiler = r1;
  W.PureComponent = Qu;
  W.StrictMode = n1;
  W.Suspense = a1;
  W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p1;
  W.act = cm;
  W.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = im({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = Zu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
      for (l in t)
        am.call(t, l) && !lm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1)
      r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++)
        a[u] = arguments[u + 2];
      r.children = a;
    }
    return { $$typeof: io, type: e.type, key: i, ref: o, props: r, _owner: s };
  };
  W.createContext = function(e) {
    return e = { $$typeof: o1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: i1, _context: e }, e.Consumer = e;
  };
  W.createElement = um;
  W.createFactory = function(e) {
    var t = um.bind(null, e);
    return t.type = e, t;
  };
  W.createRef = function() {
    return { current: null };
  };
  W.forwardRef = function(e) {
    return { $$typeof: s1, render: e };
  };
  W.isValidElement = qu;
  W.lazy = function(e) {
    return { $$typeof: u1, _payload: { _status: -1, _result: e }, _init: h1 };
  };
  W.memo = function(e, t) {
    return { $$typeof: l1, type: e, compare: t === void 0 ? null : t };
  };
  W.startTransition = function(e) {
    var t = zo.transition;
    zo.transition = {};
    try {
      e();
    } finally {
      zo.transition = t;
    }
  };
  W.unstable_act = cm;
  W.useCallback = function(e, t) {
    return Ve.current.useCallback(e, t);
  };
  W.useContext = function(e) {
    return Ve.current.useContext(e);
  };
  W.useDebugValue = function() {
  };
  W.useDeferredValue = function(e) {
    return Ve.current.useDeferredValue(e);
  };
  W.useEffect = function(e, t) {
    return Ve.current.useEffect(e, t);
  };
  W.useId = function() {
    return Ve.current.useId();
  };
  W.useImperativeHandle = function(e, t, n) {
    return Ve.current.useImperativeHandle(e, t, n);
  };
  W.useInsertionEffect = function(e, t) {
    return Ve.current.useInsertionEffect(e, t);
  };
  W.useLayoutEffect = function(e, t) {
    return Ve.current.useLayoutEffect(e, t);
  };
  W.useMemo = function(e, t) {
    return Ve.current.useMemo(e, t);
  };
  W.useReducer = function(e, t, n) {
    return Ve.current.useReducer(e, t, n);
  };
  W.useRef = function(e) {
    return Ve.current.useRef(e);
  };
  W.useState = function(e) {
    return Ve.current.useState(e);
  };
  W.useSyncExternalStore = function(e, t, n) {
    return Ve.current.useSyncExternalStore(e, t, n);
  };
  W.useTransition = function() {
    return Ve.current.useTransition();
  };
  W.version = "18.3.1";
  nm.exports = W;
  var S = nm.exports;
  const fn = /* @__PURE__ */ Is(S);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var m1 = S, y1 = Symbol.for("react.element"), v1 = Symbol.for("react.fragment"), g1 = Object.prototype.hasOwnProperty, w1 = m1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S1 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fm(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      g1.call(t, r) && !S1.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: y1, type: e, key: o, ref: s, props: i, _owner: w1.current };
  }
  zs.Fragment = v1;
  zs.jsx = fm;
  zs.jsxs = fm;
  tm.exports = zs;
  var A = tm.exports, _l = {}, dm = { exports: {} }, et = {}, hm = { exports: {} }, pm = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(e) {
    function t(O, D) {
      var B = O.length;
      O.push(D);
      e:
        for (; 0 < B; ) {
          var J = B - 1 >>> 1, ne = O[J];
          if (0 < i(ne, D))
            O[J] = D, O[B] = ne, B = J;
          else
            break e;
        }
    }
    function n(O) {
      return O.length === 0 ? null : O[0];
    }
    function r(O) {
      if (O.length === 0)
        return null;
      var D = O[0], B = O.pop();
      if (B !== D) {
        O[0] = B;
        e:
          for (var J = 0, ne = O.length, Mn = ne >>> 1; J < Mn; ) {
            var dt = 2 * (J + 1) - 1, xt = O[dt], Tt = dt + 1, qt = O[Tt];
            if (0 > i(xt, B))
              Tt < ne && 0 > i(qt, xt) ? (O[J] = qt, O[Tt] = B, J = Tt) : (O[J] = xt, O[dt] = B, J = dt);
            else if (Tt < ne && 0 > i(qt, B))
              O[J] = qt, O[Tt] = B, J = Tt;
            else
              break e;
          }
      }
      return D;
    }
    function i(O, D) {
      var B = O.sortIndex - D.sortIndex;
      return B !== 0 ? B : O.id - D.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var s = Date, a = s.now();
      e.unstable_now = function() {
        return s.now() - a;
      };
    }
    var l = [], u = [], c = 1, f = null, d = 3, y = !1, v = !1, g = !1, T = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(O) {
      for (var D = n(u); D !== null; ) {
        if (D.callback === null)
          r(u);
        else if (D.startTime <= O)
          r(u), D.sortIndex = D.expirationTime, t(l, D);
        else
          break;
        D = n(u);
      }
    }
    function w(O) {
      if (g = !1, m(O), !v)
        if (n(l) !== null)
          v = !0, I(P);
        else {
          var D = n(u);
          D !== null && K(w, D.startTime - O);
        }
    }
    function P(O, D) {
      v = !1, g && (g = !1, p(k), k = -1), y = !0;
      var B = d;
      try {
        for (m(D), f = n(l); f !== null && (!(f.expirationTime > D) || O && !z()); ) {
          var J = f.callback;
          if (typeof J == "function") {
            f.callback = null, d = f.priorityLevel;
            var ne = J(f.expirationTime <= D);
            D = e.unstable_now(), typeof ne == "function" ? f.callback = ne : f === n(l) && r(l), m(D);
          } else
            r(l);
          f = n(l);
        }
        if (f !== null)
          var Mn = !0;
        else {
          var dt = n(u);
          dt !== null && K(w, dt.startTime - D), Mn = !1;
        }
        return Mn;
      } finally {
        f = null, d = B, y = !1;
      }
    }
    var E = !1, C = null, k = -1, b = 5, R = -1;
    function z() {
      return !(e.unstable_now() - R < b);
    }
    function pe() {
      if (C !== null) {
        var O = e.unstable_now();
        R = O;
        var D = !0;
        try {
          D = C(!0, O);
        } finally {
          D ? se() : (E = !1, C = null);
        }
      } else
        E = !1;
    }
    var se;
    if (typeof h == "function")
      se = function() {
        h(pe);
      };
    else if (typeof MessageChannel < "u") {
      var L = new MessageChannel(), $ = L.port2;
      L.port1.onmessage = pe, se = function() {
        $.postMessage(null);
      };
    } else
      se = function() {
        T(pe, 0);
      };
    function I(O) {
      C = O, E || (E = !0, se());
    }
    function K(O, D) {
      k = T(function() {
        O(e.unstable_now());
      }, D);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, e.unstable_continueExecution = function() {
      v || y || (v = !0, I(P));
    }, e.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < O ? Math.floor(1e3 / O) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(l);
    }, e.unstable_next = function(O) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var B = d;
      d = D;
      try {
        return O();
      } finally {
        d = B;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(O, D) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var B = d;
      d = O;
      try {
        return D();
      } finally {
        d = B;
      }
    }, e.unstable_scheduleCallback = function(O, D, B) {
      var J = e.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? J + B : J) : B = J, O) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = B + ne, O = { id: c++, callback: D, priorityLevel: O, startTime: B, expirationTime: ne, sortIndex: -1 }, B > J ? (O.sortIndex = B, t(u, O), n(l) === null && O === n(u) && (g ? (p(k), k = -1) : g = !0, K(w, B - J))) : (O.sortIndex = ne, t(l, O), v || y || (v = !0, I(P))), O;
    }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(O) {
      var D = d;
      return function() {
        var B = d;
        d = D;
        try {
          return O.apply(this, arguments);
        } finally {
          d = B;
        }
      };
    };
  })(pm);
  hm.exports = pm;
  var x1 = hm.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var T1 = S, qe = x1;
  function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var mm = /* @__PURE__ */ new Set(), Li = {};
  function rr(e, t) {
    $r(e, t), $r(e + "Capture", t);
  }
  function $r(e, t) {
    for (Li[e] = t, e = 0; e < t.length; e++)
      mm.add(t[e]);
  }
  var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ol = Object.prototype.hasOwnProperty, E1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Yf = {}, Qf = {};
  function P1(e) {
    return Ol.call(Qf, e) ? !0 : Ol.call(Yf, e) ? !1 : E1.test(e) ? Qf[e] = !0 : (Yf[e] = !0, !1);
  }
  function C1(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function k1(e, t, n, r) {
    if (t === null || typeof t > "u" || C1(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $e(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var Oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Oe[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Oe[t] = new $e(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Oe[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Oe[e] = new $e(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Oe[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Oe[e] = new $e(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function(e) {
    Oe[e] = new $e(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    Oe[e] = new $e(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function(e) {
    Oe[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ju = /[\-:]([a-z])/g;
  function ec(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Ju,
      ec
    );
    Oe[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ju, ec);
    Oe[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ju, ec);
    Oe[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    Oe[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Oe.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    Oe[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function tc(e, t, n, r) {
    var i = Oe.hasOwnProperty(t) ? Oe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (k1(t, n, i, r) && (n = null), r || i === null ? P1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Xt = T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, go = Symbol.for("react.element"), mr = Symbol.for("react.portal"), yr = Symbol.for("react.fragment"), nc = Symbol.for("react.strict_mode"), Al = Symbol.for("react.profiler"), ym = Symbol.for("react.provider"), vm = Symbol.for("react.context"), rc = Symbol.for("react.forward_ref"), jl = Symbol.for("react.suspense"), Fl = Symbol.for("react.suspense_list"), ic = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), gm = Symbol.for("react.offscreen"), Xf = Symbol.iterator;
  function ti(e) {
    return e === null || typeof e != "object" ? null : (e = Xf && e[Xf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var de = Object.assign, Ma;
  function di(e) {
    if (Ma === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ma = t && t[1] || "";
      }
    return `
` + Ma + e;
  }
  var Da = !1;
  function ba(e, t) {
    if (!e || Da)
      return "";
    Da = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
          a--;
        for (; 1 <= s && 0 <= a; s--, a--)
          if (i[s] !== o[a]) {
            if (s !== 1 || a !== 1)
              do
                if (s--, a--, 0 > a || i[s] !== o[a]) {
                  var l = `
` + i[s].replace(" at new ", " at ");
                  return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                }
              while (1 <= s && 0 <= a);
            break;
          }
      }
    } finally {
      Da = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? di(e) : "";
  }
  function _1(e) {
    switch (e.tag) {
      case 5:
        return di(e.type);
      case 16:
        return di("Lazy");
      case 13:
        return di("Suspense");
      case 19:
        return di("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ba(e.type, !1), e;
      case 11:
        return e = ba(e.type.render, !1), e;
      case 1:
        return e = ba(e.type, !0), e;
      default:
        return "";
    }
  }
  function Rl(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case yr:
        return "Fragment";
      case mr:
        return "Portal";
      case Al:
        return "Profiler";
      case nc:
        return "StrictMode";
      case jl:
        return "Suspense";
      case Fl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vm:
          return (e.displayName || "Context") + ".Consumer";
        case ym:
          return (e._context.displayName || "Context") + ".Provider";
        case rc:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ic:
          return t = e.displayName || null, t !== null ? t : Rl(e.type) || "Memo";
        case tn:
          t = e._payload, e = e._init;
          try {
            return Rl(e(t));
          } catch {
          }
      }
    return null;
  }
  function O1(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Rl(t);
      case 8:
        return t === nc ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function En(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function wm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function A1(e) {
    var t = wm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(s) {
        r = "" + s, o.call(this, s);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(s) {
        r = "" + s;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function wo(e) {
    e._valueTracker || (e._valueTracker = A1(e));
  }
  function Sm(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = wm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function rs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ll(e, t) {
    var n = t.checked;
    return de({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Zf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = En(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function xm(e, t) {
    t = t.checked, t != null && tc(e, "checked", t, !1);
  }
  function Ml(e, t) {
    xm(e, t);
    var n = En(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Dl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Dl(e, t.type, En(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function qf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Dl(e, t, n) {
    (t !== "number" || rs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var hi = Array.isArray;
  function Rr(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + En(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(_(91));
    return de({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Jf(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(_(92));
        if (hi(n)) {
          if (1 < n.length)
            throw Error(_(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: En(n) };
  }
  function Tm(e, t) {
    var n = En(t.value), r = En(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ed(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Em(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Nl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Em(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var So, Pm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (So = So || document.createElement("div"), So.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = So.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function Mi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var gi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, j1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(gi).forEach(function(e) {
    j1.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), gi[t] = gi[e];
    });
  });
  function Cm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gi.hasOwnProperty(e) && gi[e] ? ("" + t).trim() : t + "px";
  }
  function km(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Cm(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var F1 = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Vl(e, t) {
    if (t) {
      if (F1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(_(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(_(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(_(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(_(62));
    }
  }
  function $l(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Il = null;
  function oc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var zl = null, Lr = null, Mr = null;
  function td(e) {
    if (e = ao(e)) {
      if (typeof zl != "function")
        throw Error(_(280));
      var t = e.stateNode;
      t && (t = Ks(t), zl(e.stateNode, e.type, t));
    }
  }
  function _m(e) {
    Lr ? Mr ? Mr.push(e) : Mr = [e] : Lr = e;
  }
  function Om() {
    if (Lr) {
      var e = Lr, t = Mr;
      if (Mr = Lr = null, td(e), t)
        for (e = 0; e < t.length; e++)
          td(t[e]);
    }
  }
  function Am(e, t) {
    return e(t);
  }
  function jm() {
  }
  var Na = !1;
  function Fm(e, t, n) {
    if (Na)
      return e(t, n);
    Na = !0;
    try {
      return Am(e, t, n);
    } finally {
      Na = !1, (Lr !== null || Mr !== null) && (jm(), Om());
    }
  }
  function Di(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Ks(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(_(231, t, typeof n));
    return n;
  }
  var Bl = !1;
  if (Kt)
    try {
      var ni = {};
      Object.defineProperty(ni, "passive", { get: function() {
        Bl = !0;
      } }), window.addEventListener("test", ni, ni), window.removeEventListener("test", ni, ni);
    } catch {
      Bl = !1;
    }
  function R1(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var wi = !1, is = null, os = !1, Ul = null, L1 = { onError: function(e) {
    wi = !0, is = e;
  } };
  function M1(e, t, n, r, i, o, s, a, l) {
    wi = !1, is = null, R1.apply(L1, arguments);
  }
  function D1(e, t, n, r, i, o, s, a, l) {
    if (M1.apply(this, arguments), wi) {
      if (wi) {
        var u = is;
        wi = !1, is = null;
      } else
        throw Error(_(198));
      os || (os = !0, Ul = u);
    }
  }
  function ir(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Rm(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function nd(e) {
    if (ir(e) !== e)
      throw Error(_(188));
  }
  function b1(e) {
    var t = e.alternate;
    if (!t) {
      if (t = ir(e), t === null)
        throw Error(_(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null)
        break;
      var o = i.alternate;
      if (o === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n)
            return nd(i), e;
          if (o === r)
            return nd(i), t;
          o = o.sibling;
        }
        throw Error(_(188));
      }
      if (n.return !== r.return)
        n = i, r = o;
      else {
        for (var s = !1, a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s) {
          for (a = o.child; a; ) {
            if (a === n) {
              s = !0, n = o, r = i;
              break;
            }
            if (a === r) {
              s = !0, r = o, n = i;
              break;
            }
            a = a.sibling;
          }
          if (!s)
            throw Error(_(189));
        }
      }
      if (n.alternate !== r)
        throw Error(_(190));
    }
    if (n.tag !== 3)
      throw Error(_(188));
    return n.stateNode.current === n ? e : t;
  }
  function Lm(e) {
    return e = b1(e), e !== null ? Mm(e) : null;
  }
  function Mm(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = Mm(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var Dm = qe.unstable_scheduleCallback, rd = qe.unstable_cancelCallback, N1 = qe.unstable_shouldYield, V1 = qe.unstable_requestPaint, ye = qe.unstable_now, $1 = qe.unstable_getCurrentPriorityLevel, sc = qe.unstable_ImmediatePriority, bm = qe.unstable_UserBlockingPriority, ss = qe.unstable_NormalPriority, I1 = qe.unstable_LowPriority, Nm = qe.unstable_IdlePriority, Bs = null, _t = null;
  function z1(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function")
      try {
        _t.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var vt = Math.clz32 ? Math.clz32 : W1, B1 = Math.log, U1 = Math.LN2;
  function W1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (B1(e) / U1 | 0) | 0;
  }
  var xo = 64, To = 4194304;
  function pi(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function as(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? r = pi(a) : (o &= s, o !== 0 && (r = pi(o)));
    } else
      s = n & ~i, s !== 0 ? r = pi(s) : o !== 0 && (r = pi(o));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - vt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function H1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function K1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - vt(o), a = 1 << s, l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = H1(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function Wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Vm() {
    var e = xo;
    return xo <<= 1, !(xo & 4194240) && (xo = 64), e;
  }
  function Va(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function oo(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n;
  }
  function G1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - vt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function ac(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - vt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Q = 0;
  function $m(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Im, lc, zm, Bm, Um, Hl = !1, Eo = [], dn = null, hn = null, pn = null, bi = /* @__PURE__ */ new Map(), Ni = /* @__PURE__ */ new Map(), sn = [], Y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function id(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        bi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ni.delete(t.pointerId);
    }
  }
  function ri(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = ao(t), t !== null && lc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Q1(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return dn = ri(dn, e, t, n, r, i), !0;
      case "dragenter":
        return hn = ri(hn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = ri(pn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return bi.set(o, ri(bi.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Ni.set(o, ri(Ni.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Wm(e) {
    var t = Bn(e.target);
    if (t !== null) {
      var n = ir(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Rm(n), t !== null) {
            e.blockedOn = t, Um(e.priority, function() {
              zm(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Bo(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Kl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Il = r, n.target.dispatchEvent(r), Il = null;
      } else
        return t = ao(n), t !== null && lc(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function od(e, t, n) {
    Bo(e) && n.delete(t);
  }
  function X1() {
    Hl = !1, dn !== null && Bo(dn) && (dn = null), hn !== null && Bo(hn) && (hn = null), pn !== null && Bo(pn) && (pn = null), bi.forEach(od), Ni.forEach(od);
  }
  function ii(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Hl || (Hl = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, X1)));
  }
  function Vi(e) {
    function t(i) {
      return ii(i, e);
    }
    if (0 < Eo.length) {
      ii(Eo[0], e);
      for (var n = 1; n < Eo.length; n++) {
        var r = Eo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && ii(dn, e), hn !== null && ii(hn, e), pn !== null && ii(pn, e), bi.forEach(t), Ni.forEach(t), n = 0; n < sn.length; n++)
      r = sn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && (n = sn[0], n.blockedOn === null); )
      Wm(n), n.blockedOn === null && sn.shift();
  }
  var Dr = Xt.ReactCurrentBatchConfig, ls = !0;
  function Z1(e, t, n, r) {
    var i = Q, o = Dr.transition;
    Dr.transition = null;
    try {
      Q = 1, uc(e, t, n, r);
    } finally {
      Q = i, Dr.transition = o;
    }
  }
  function q1(e, t, n, r) {
    var i = Q, o = Dr.transition;
    Dr.transition = null;
    try {
      Q = 4, uc(e, t, n, r);
    } finally {
      Q = i, Dr.transition = o;
    }
  }
  function uc(e, t, n, r) {
    if (ls) {
      var i = Kl(e, t, n, r);
      if (i === null)
        Ya(e, t, r, us, n), id(e, r);
      else if (Q1(i, e, t, n, r))
        r.stopPropagation();
      else if (id(e, r), t & 4 && -1 < Y1.indexOf(e)) {
        for (; i !== null; ) {
          var o = ao(i);
          if (o !== null && Im(o), o = Kl(e, t, n, r), o === null && Ya(e, t, r, us, n), o === i)
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else
        Ya(e, t, r, null, n);
    }
  }
  var us = null;
  function Kl(e, t, n, r) {
    if (us = null, e = oc(r), e = Bn(e), e !== null)
      if (t = ir(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = Rm(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return us = e, null;
  }
  function Hm(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($1()) {
          case sc:
            return 1;
          case bm:
            return 4;
          case ss:
          case I1:
            return 16;
          case Nm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ln = null, cc = null, Uo = null;
  function Km() {
    if (Uo)
      return Uo;
    var e, t = cc, n = t.length, r, i = "value" in ln ? ln.value : ln.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
      ;
    return Uo = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Wo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Po() {
    return !0;
  }
  function sd() {
    return !1;
  }
  function tt(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e)
        e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Po : sd, this.isPropagationStopped = sd, this;
    }
    return de(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Po);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Po);
    }, persist: function() {
    }, isPersistent: Po }), t;
  }
  var Xr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fc = tt(Xr), so = de({}, Xr, { view: 0, detail: 0 }), J1 = tt(so), $a, Ia, oi, Us = de({}, so, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dc, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== oi && (oi && e.type === "mousemove" ? ($a = e.screenX - oi.screenX, Ia = e.screenY - oi.screenY) : Ia = $a = 0, oi = e), $a);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ia;
  } }), ad = tt(Us), ew = de({}, Us, { dataTransfer: 0 }), tw = tt(ew), nw = de({}, so, { relatedTarget: 0 }), za = tt(nw), rw = de({}, Xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), iw = tt(rw), ow = de({}, Xr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), sw = tt(ow), aw = de({}, Xr, { data: 0 }), ld = tt(aw), lw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, uw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, cw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function fw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = cw[e]) ? !!t[e] : !1;
  }
  function dc() {
    return fw;
  }
  var dw = de({}, so, { key: function(e) {
    if (e.key) {
      var t = lw[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = Wo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uw[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dc, charCode: function(e) {
    return e.type === "keypress" ? Wo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Wo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), hw = tt(dw), pw = de({}, Us, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ud = tt(pw), mw = de({}, so, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dc }), yw = tt(mw), vw = de({}, Xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gw = tt(vw), ww = de({}, Us, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sw = tt(ww), xw = [9, 13, 27, 32], hc = Kt && "CompositionEvent" in window, Si = null;
  Kt && "documentMode" in document && (Si = document.documentMode);
  var Tw = Kt && "TextEvent" in window && !Si, Gm = Kt && (!hc || Si && 8 < Si && 11 >= Si), cd = " ", fd = !1;
  function Ym(e, t) {
    switch (e) {
      case "keyup":
        return xw.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var vr = !1;
  function Ew(e, t) {
    switch (e) {
      case "compositionend":
        return Qm(t);
      case "keypress":
        return t.which !== 32 ? null : (fd = !0, cd);
      case "textInput":
        return e = t.data, e === cd && fd ? null : e;
      default:
        return null;
    }
  }
  function Pw(e, t) {
    if (vr)
      return e === "compositionend" || !hc && Ym(e, t) ? (e = Km(), Uo = cc = ln = null, vr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Cw = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function dd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cw[e.type] : t === "textarea";
  }
  function Xm(e, t, n, r) {
    _m(r), t = cs(t, "onChange"), 0 < t.length && (n = new fc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var xi = null, $i = null;
  function kw(e) {
    ay(e, 0);
  }
  function Ws(e) {
    var t = Sr(e);
    if (Sm(t))
      return e;
  }
  function _w(e, t) {
    if (e === "change")
      return t;
  }
  var Zm = !1;
  if (Kt) {
    var Ba;
    if (Kt) {
      var Ua = "oninput" in document;
      if (!Ua) {
        var hd = document.createElement("div");
        hd.setAttribute("oninput", "return;"), Ua = typeof hd.oninput == "function";
      }
      Ba = Ua;
    } else
      Ba = !1;
    Zm = Ba && (!document.documentMode || 9 < document.documentMode);
  }
  function pd() {
    xi && (xi.detachEvent("onpropertychange", qm), $i = xi = null);
  }
  function qm(e) {
    if (e.propertyName === "value" && Ws($i)) {
      var t = [];
      Xm(t, $i, e, oc(e)), Fm(kw, t);
    }
  }
  function Ow(e, t, n) {
    e === "focusin" ? (pd(), xi = t, $i = n, xi.attachEvent("onpropertychange", qm)) : e === "focusout" && pd();
  }
  function Aw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ws($i);
  }
  function jw(e, t) {
    if (e === "click")
      return Ws(t);
  }
  function Fw(e, t) {
    if (e === "input" || e === "change")
      return Ws(t);
  }
  function Rw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var wt = typeof Object.is == "function" ? Object.is : Rw;
  function Ii(e, t) {
    if (wt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Ol.call(t, i) || !wt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function md(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function yd(e, t) {
    var n = md(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = md(n);
    }
  }
  function Jm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ey() {
    for (var e = window, t = rs(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = rs(e.document);
    }
    return t;
  }
  function pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Lw(e) {
    var t = ey(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Jm(n.ownerDocument.documentElement, n)) {
      if (r !== null && pc(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = yd(n, o);
          var s = yd(
            n,
            r
          );
          i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Mw = Kt && "documentMode" in document && 11 >= document.documentMode, gr = null, Gl = null, Ti = null, Yl = !1;
  function vd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yl || gr == null || gr !== rs(r) || (r = gr, "selectionStart" in r && pc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ti && Ii(Ti, r) || (Ti = r, r = cs(Gl, "onSelect"), 0 < r.length && (t = new fc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gr)));
  }
  function Co(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var wr = { animationend: Co("Animation", "AnimationEnd"), animationiteration: Co("Animation", "AnimationIteration"), animationstart: Co("Animation", "AnimationStart"), transitionend: Co("Transition", "TransitionEnd") }, Wa = {}, ty = {};
  Kt && (ty = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
  function Hs(e) {
    if (Wa[e])
      return Wa[e];
    if (!wr[e])
      return e;
    var t = wr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in ty)
        return Wa[e] = t[n];
    return e;
  }
  var ny = Hs("animationend"), ry = Hs("animationiteration"), iy = Hs("animationstart"), oy = Hs("transitionend"), sy = /* @__PURE__ */ new Map(), gd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function An(e, t) {
    sy.set(e, t), rr(t, [e]);
  }
  for (var Ha = 0; Ha < gd.length; Ha++) {
    var Ka = gd[Ha], Dw = Ka.toLowerCase(), bw = Ka[0].toUpperCase() + Ka.slice(1);
    An(Dw, "on" + bw);
  }
  An(ny, "onAnimationEnd");
  An(ry, "onAnimationIteration");
  An(iy, "onAnimationStart");
  An("dblclick", "onDoubleClick");
  An("focusin", "onFocus");
  An("focusout", "onBlur");
  An(oy, "onTransitionEnd");
  $r("onMouseEnter", ["mouseout", "mouseover"]);
  $r("onMouseLeave", ["mouseout", "mouseover"]);
  $r("onPointerEnter", ["pointerout", "pointerover"]);
  $r("onPointerLeave", ["pointerout", "pointerover"]);
  rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nw = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
  function wd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, D1(r, t, void 0, e), e.currentTarget = null;
  }
  function ay(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var a = r[s], l = a.instance, u = a.currentTarget;
            if (a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            wd(i, a, u), o = l;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            wd(i, a, u), o = l;
          }
      }
    }
    if (os)
      throw e = Ul, os = !1, Ul = null, e;
  }
  function re(e, t) {
    var n = t[Jl];
    n === void 0 && (n = t[Jl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ly(t, e, 2, !1), n.add(r));
  }
  function Ga(e, t, n) {
    var r = 0;
    t && (r |= 4), ly(n, e, r, t);
  }
  var ko = "_reactListening" + Math.random().toString(36).slice(2);
  function zi(e) {
    if (!e[ko]) {
      e[ko] = !0, mm.forEach(function(n) {
        n !== "selectionchange" && (Nw.has(n) || Ga(n, !1, e), Ga(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ko] || (t[ko] = !0, Ga("selectionchange", !1, t));
    }
  }
  function ly(e, t, n, r) {
    switch (Hm(t)) {
      case 1:
        var i = Z1;
        break;
      case 4:
        i = q1;
        break;
      default:
        i = uc;
    }
    n = i.bind(null, t, n, e), i = void 0, !Bl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Ya(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i)
              break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i))
                  return;
                s = s.return;
              }
            for (; a !== null; ) {
              if (s = Bn(a), s === null)
                return;
              if (l = s.tag, l === 5 || l === 6) {
                r = o = s;
                continue e;
              }
              a = a.parentNode;
            }
          }
          r = r.return;
        }
    Fm(function() {
      var u = o, c = oc(n), f = [];
      e: {
        var d = sy.get(e);
        if (d !== void 0) {
          var y = fc, v = e;
          switch (e) {
            case "keypress":
              if (Wo(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              y = hw;
              break;
            case "focusin":
              v = "focus", y = za;
              break;
            case "focusout":
              v = "blur", y = za;
              break;
            case "beforeblur":
            case "afterblur":
              y = za;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = ad;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = tw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = yw;
              break;
            case ny:
            case ry:
            case iy:
              y = iw;
              break;
            case oy:
              y = gw;
              break;
            case "scroll":
              y = J1;
              break;
            case "wheel":
              y = Sw;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = sw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = ud;
          }
          var g = (t & 4) !== 0, T = !g && e === "scroll", p = g ? d !== null ? d + "Capture" : null : d;
          g = [];
          for (var h = u, m; h !== null; ) {
            m = h;
            var w = m.stateNode;
            if (m.tag === 5 && w !== null && (m = w, p !== null && (w = Di(h, p), w != null && g.push(Bi(h, w, m)))), T)
              break;
            h = h.return;
          }
          0 < g.length && (d = new y(d, v, null, n, c), f.push({ event: d, listeners: g }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && n !== Il && (v = n.relatedTarget || n.fromElement) && (Bn(v) || v[Gt]))
            break e;
          if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = u, v = v ? Bn(v) : null, v !== null && (T = ir(v), v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
            if (g = ad, w = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = ud, w = "onPointerLeave", p = "onPointerEnter", h = "pointer"), T = y == null ? d : Sr(y), m = v == null ? d : Sr(v), d = new g(w, h + "leave", y, n, c), d.target = T, d.relatedTarget = m, w = null, Bn(c) === u && (g = new g(p, h + "enter", v, n, c), g.target = m, g.relatedTarget = T, w = g), T = w, y && v)
              t: {
                for (g = y, p = v, h = 0, m = g; m; m = hr(m))
                  h++;
                for (m = 0, w = p; w; w = hr(w))
                  m++;
                for (; 0 < h - m; )
                  g = hr(g), h--;
                for (; 0 < m - h; )
                  p = hr(p), m--;
                for (; h--; ) {
                  if (g === p || p !== null && g === p.alternate)
                    break t;
                  g = hr(g), p = hr(p);
                }
                g = null;
              }
            else
              g = null;
            y !== null && Sd(f, d, y, g, !1), v !== null && T !== null && Sd(f, T, v, g, !0);
          }
        }
        e: {
          if (d = u ? Sr(u) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file")
            var P = _w;
          else if (dd(d))
            if (Zm)
              P = Fw;
            else {
              P = Aw;
              var E = Ow;
            }
          else
            (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (P = jw);
          if (P && (P = P(e, u))) {
            Xm(f, P, n, c);
            break e;
          }
          E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Dl(d, "number", d.value);
        }
        switch (E = u ? Sr(u) : window, e) {
          case "focusin":
            (dd(E) || E.contentEditable === "true") && (gr = E, Gl = u, Ti = null);
            break;
          case "focusout":
            Ti = Gl = gr = null;
            break;
          case "mousedown":
            Yl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yl = !1, vd(f, n, c);
            break;
          case "selectionchange":
            if (Mw)
              break;
          case "keydown":
          case "keyup":
            vd(f, n, c);
        }
        var C;
        if (hc)
          e: {
            switch (e) {
              case "compositionstart":
                var k = "onCompositionStart";
                break e;
              case "compositionend":
                k = "onCompositionEnd";
                break e;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break e;
            }
            k = void 0;
          }
        else
          vr ? Ym(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
        k && (Gm && n.locale !== "ko" && (vr || k !== "onCompositionStart" ? k === "onCompositionEnd" && vr && (C = Km()) : (ln = c, cc = "value" in ln ? ln.value : ln.textContent, vr = !0)), E = cs(u, k), 0 < E.length && (k = new ld(k, e, null, n, c), f.push({ event: k, listeners: E }), C ? k.data = C : (C = Qm(n), C !== null && (k.data = C)))), (C = Tw ? Ew(e, n) : Pw(e, n)) && (u = cs(u, "onBeforeInput"), 0 < u.length && (c = new ld("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = C));
      }
      ay(f, t);
    });
  }
  function Bi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function cs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = Di(e, n), o != null && r.unshift(Bi(e, o, i)), o = Di(e, t), o != null && r.push(Bi(e, o, i))), e = e.return;
    }
    return r;
  }
  function hr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Sd(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n, l = a.alternate, u = a.stateNode;
      if (l !== null && l === r)
        break;
      a.tag === 5 && u !== null && (a = u, i ? (l = Di(n, o), l != null && s.unshift(Bi(n, l, a))) : i || (l = Di(n, o), l != null && s.push(Bi(n, l, a)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Vw = /\r\n?/g, $w = /\u0000|\uFFFD/g;
  function xd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vw, `
`).replace($w, "");
  }
  function _o(e, t, n) {
    if (t = xd(t), xd(e) !== t && n)
      throw Error(_(425));
  }
  function fs() {
  }
  var Ql = null, Xl = null;
  function Zl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ql = typeof setTimeout == "function" ? setTimeout : void 0, Iw = typeof clearTimeout == "function" ? clearTimeout : void 0, Td = typeof Promise == "function" ? Promise : void 0, zw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Td < "u" ? function(e) {
    return Td.resolve(null).then(e).catch(Bw);
  } : ql;
  function Bw(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qa(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), Vi(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Vi(t);
  }
  function mn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function Ed(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Zr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Zr, Ui = "__reactProps$" + Zr, Gt = "__reactContainer$" + Zr, Jl = "__reactEvents$" + Zr, Uw = "__reactListeners$" + Zr, Ww = "__reactHandles$" + Zr;
  function Bn(e) {
    var t = e[kt];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Gt] || n[kt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ed(e); e !== null; ) {
            if (n = e[kt])
              return n;
            e = Ed(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ao(e) {
    return e = e[kt] || e[Gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Sr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(_(33));
  }
  function Ks(e) {
    return e[Ui] || null;
  }
  var eu = [], xr = -1;
  function jn(e) {
    return { current: e };
  }
  function oe(e) {
    0 > xr || (e.current = eu[xr], eu[xr] = null, xr--);
  }
  function te(e, t) {
    xr++, eu[xr] = e.current, e.current = t;
  }
  var Pn = {}, De = jn(Pn), We = jn(!1), Xn = Pn;
  function Ir(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return Pn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
      i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function He(e) {
    return e = e.childContextTypes, e != null;
  }
  function ds() {
    oe(We), oe(De);
  }
  function Pd(e, t, n) {
    if (De.current !== Pn)
      throw Error(_(168));
    te(De, t), te(We, n);
  }
  function uy(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(_(108, O1(e) || "Unknown", i));
    return de({}, n, r);
  }
  function hs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pn, Xn = De.current, te(De, e), te(We, We.current), !0;
  }
  function Cd(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(_(169));
    n ? (e = uy(e, t, Xn), r.__reactInternalMemoizedMergedChildContext = e, oe(We), oe(De), te(De, e)) : oe(We), te(We, n);
  }
  var bt = null, Gs = !1, Xa = !1;
  function cy(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  function Hw(e) {
    Gs = !0, cy(e);
  }
  function Fn() {
    if (!Xa && bt !== null) {
      Xa = !0;
      var e = 0, t = Q;
      try {
        var n = bt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        bt = null, Gs = !1;
      } catch (i) {
        throw bt !== null && (bt = bt.slice(e + 1)), Dm(sc, Fn), i;
      } finally {
        Q = t, Xa = !1;
      }
    }
    return null;
  }
  var Tr = [], Er = 0, ps = null, ms = 0, st = [], at = 0, Zn = null, Vt = 1, $t = "";
  function Nn(e, t) {
    Tr[Er++] = ms, Tr[Er++] = ps, ps = e, ms = t;
  }
  function fy(e, t, n) {
    st[at++] = Vt, st[at++] = $t, st[at++] = Zn, Zn = e;
    var r = Vt;
    e = $t;
    var i = 32 - vt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - vt(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Vt = 1 << 32 - vt(t) + i | n << i | r, $t = o + e;
    } else
      Vt = 1 << o | n << i | r, $t = e;
  }
  function mc(e) {
    e.return !== null && (Nn(e, 1), fy(e, 1, 0));
  }
  function yc(e) {
    for (; e === ps; )
      ps = Tr[--Er], Tr[Er] = null, ms = Tr[--Er], Tr[Er] = null;
    for (; e === Zn; )
      Zn = st[--at], st[at] = null, $t = st[--at], st[at] = null, Vt = st[--at], st[at] = null;
  }
  var Ze = null, Ye = null, le = !1, yt = null;
  function dy(e, t) {
    var n = lt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function kd(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ye = mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ye = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zn !== null ? { id: Vt, overflow: $t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, Ye = null, !0) : !1;
      default:
        return !1;
    }
  }
  function tu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function nu(e) {
    if (le) {
      var t = Ye;
      if (t) {
        var n = t;
        if (!kd(e, t)) {
          if (tu(e))
            throw Error(_(418));
          t = mn(n.nextSibling);
          var r = Ze;
          t && kd(e, t) ? dy(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Ze = e);
        }
      } else {
        if (tu(e))
          throw Error(_(418));
        e.flags = e.flags & -4097 | 2, le = !1, Ze = e;
      }
    }
  }
  function _d(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Ze = e;
  }
  function Oo(e) {
    if (e !== Ze)
      return !1;
    if (!le)
      return _d(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps)), t && (t = Ye)) {
      if (tu(e))
        throw hy(), Error(_(418));
      for (; t; )
        dy(e, t), t = mn(t.nextSibling);
    }
    if (_d(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(_(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ye = mn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else
      Ye = Ze ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function hy() {
    for (var e = Ye; e; )
      e = mn(e.nextSibling);
  }
  function zr() {
    Ye = Ze = null, le = !1;
  }
  function vc(e) {
    yt === null ? yt = [e] : yt.push(e);
  }
  var Kw = Xt.ReactCurrentBatchConfig;
  function si(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(_(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(_(147, e));
        var i = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
          var a = i.refs;
          s === null ? delete a[o] : a[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string")
        throw Error(_(284));
      if (!n._owner)
        throw Error(_(290, e));
    }
    return e;
  }
  function Ao(e, t) {
    throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Od(e) {
    var t = e._init;
    return t(e._payload);
  }
  function py(e) {
    function t(p, h) {
      if (e) {
        var m = p.deletions;
        m === null ? (p.deletions = [h], p.flags |= 16) : m.push(h);
      }
    }
    function n(p, h) {
      if (!e)
        return null;
      for (; h !== null; )
        t(p, h), h = h.sibling;
      return null;
    }
    function r(p, h) {
      for (p = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
      return p;
    }
    function i(p, h) {
      return p = wn(p, h), p.index = 0, p.sibling = null, p;
    }
    function o(p, h, m) {
      return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h);
    }
    function s(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, h, m, w) {
      return h === null || h.tag !== 6 ? (h = rl(m, p.mode, w), h.return = p, h) : (h = i(h, m), h.return = p, h);
    }
    function l(p, h, m, w) {
      var P = m.type;
      return P === yr ? c(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === P || typeof P == "object" && P !== null && P.$$typeof === tn && Od(P) === h.type) ? (w = i(h, m.props), w.ref = si(p, h, m), w.return = p, w) : (w = Zo(m.type, m.key, m.props, null, p.mode, w), w.ref = si(p, h, m), w.return = p, w);
    }
    function u(p, h, m, w) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = il(m, p.mode, w), h.return = p, h) : (h = i(h, m.children || []), h.return = p, h);
    }
    function c(p, h, m, w, P) {
      return h === null || h.tag !== 7 ? (h = Gn(m, p.mode, w, P), h.return = p, h) : (h = i(h, m), h.return = p, h);
    }
    function f(p, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
        return h = rl("" + h, p.mode, m), h.return = p, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case go:
            return m = Zo(h.type, h.key, h.props, null, p.mode, m), m.ref = si(p, null, h), m.return = p, m;
          case mr:
            return h = il(h, p.mode, m), h.return = p, h;
          case tn:
            var w = h._init;
            return f(p, w(h._payload), m);
        }
        if (hi(h) || ti(h))
          return h = Gn(h, p.mode, m, null), h.return = p, h;
        Ao(p, h);
      }
      return null;
    }
    function d(p, h, m, w) {
      var P = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return P !== null ? null : a(p, h, "" + m, w);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case go:
            return m.key === P ? l(p, h, m, w) : null;
          case mr:
            return m.key === P ? u(p, h, m, w) : null;
          case tn:
            return P = m._init, d(
              p,
              h,
              P(m._payload),
              w
            );
        }
        if (hi(m) || ti(m))
          return P !== null ? null : c(p, h, m, w, null);
        Ao(p, m);
      }
      return null;
    }
    function y(p, h, m, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return p = p.get(m) || null, a(h, p, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case go:
            return p = p.get(w.key === null ? m : w.key) || null, l(h, p, w, P);
          case mr:
            return p = p.get(w.key === null ? m : w.key) || null, u(h, p, w, P);
          case tn:
            var E = w._init;
            return y(p, h, m, E(w._payload), P);
        }
        if (hi(w) || ti(w))
          return p = p.get(m) || null, c(h, p, w, P, null);
        Ao(h, w);
      }
      return null;
    }
    function v(p, h, m, w) {
      for (var P = null, E = null, C = h, k = h = 0, b = null; C !== null && k < m.length; k++) {
        C.index > k ? (b = C, C = null) : b = C.sibling;
        var R = d(p, C, m[k], w);
        if (R === null) {
          C === null && (C = b);
          break;
        }
        e && C && R.alternate === null && t(p, C), h = o(R, h, k), E === null ? P = R : E.sibling = R, E = R, C = b;
      }
      if (k === m.length)
        return n(p, C), le && Nn(p, k), P;
      if (C === null) {
        for (; k < m.length; k++)
          C = f(p, m[k], w), C !== null && (h = o(C, h, k), E === null ? P = C : E.sibling = C, E = C);
        return le && Nn(p, k), P;
      }
      for (C = r(p, C); k < m.length; k++)
        b = y(C, p, k, m[k], w), b !== null && (e && b.alternate !== null && C.delete(b.key === null ? k : b.key), h = o(b, h, k), E === null ? P = b : E.sibling = b, E = b);
      return e && C.forEach(function(z) {
        return t(p, z);
      }), le && Nn(p, k), P;
    }
    function g(p, h, m, w) {
      var P = ti(m);
      if (typeof P != "function")
        throw Error(_(150));
      if (m = P.call(m), m == null)
        throw Error(_(151));
      for (var E = P = null, C = h, k = h = 0, b = null, R = m.next(); C !== null && !R.done; k++, R = m.next()) {
        C.index > k ? (b = C, C = null) : b = C.sibling;
        var z = d(p, C, R.value, w);
        if (z === null) {
          C === null && (C = b);
          break;
        }
        e && C && z.alternate === null && t(p, C), h = o(z, h, k), E === null ? P = z : E.sibling = z, E = z, C = b;
      }
      if (R.done)
        return n(
          p,
          C
        ), le && Nn(p, k), P;
      if (C === null) {
        for (; !R.done; k++, R = m.next())
          R = f(p, R.value, w), R !== null && (h = o(R, h, k), E === null ? P = R : E.sibling = R, E = R);
        return le && Nn(p, k), P;
      }
      for (C = r(p, C); !R.done; k++, R = m.next())
        R = y(C, p, k, R.value, w), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? k : R.key), h = o(R, h, k), E === null ? P = R : E.sibling = R, E = R);
      return e && C.forEach(function(pe) {
        return t(p, pe);
      }), le && Nn(p, k), P;
    }
    function T(p, h, m, w) {
      if (typeof m == "object" && m !== null && m.type === yr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case go:
            e: {
              for (var P = m.key, E = h; E !== null; ) {
                if (E.key === P) {
                  if (P = m.type, P === yr) {
                    if (E.tag === 7) {
                      n(p, E.sibling), h = i(E, m.props.children), h.return = p, p = h;
                      break e;
                    }
                  } else if (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === tn && Od(P) === E.type) {
                    n(p, E.sibling), h = i(E, m.props), h.ref = si(p, E, m), h.return = p, p = h;
                    break e;
                  }
                  n(p, E);
                  break;
                } else
                  t(p, E);
                E = E.sibling;
              }
              m.type === yr ? (h = Gn(m.props.children, p.mode, w, m.key), h.return = p, p = h) : (w = Zo(m.type, m.key, m.props, null, p.mode, w), w.ref = si(p, h, m), w.return = p, p = w);
            }
            return s(p);
          case mr:
            e: {
              for (E = m.key; h !== null; ) {
                if (h.key === E)
                  if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                    n(p, h.sibling), h = i(h, m.children || []), h.return = p, p = h;
                    break e;
                  } else {
                    n(p, h);
                    break;
                  }
                else
                  t(p, h);
                h = h.sibling;
              }
              h = il(m, p.mode, w), h.return = p, p = h;
            }
            return s(p);
          case tn:
            return E = m._init, T(p, h, E(m._payload), w);
        }
        if (hi(m))
          return v(p, h, m, w);
        if (ti(m))
          return g(p, h, m, w);
        Ao(p, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, m), h.return = p, p = h) : (n(p, h), h = rl(m, p.mode, w), h.return = p, p = h), s(p)) : n(p, h);
    }
    return T;
  }
  var Br = py(!0), my = py(!1), ys = jn(null), vs = null, Pr = null, gc = null;
  function wc() {
    gc = Pr = vs = null;
  }
  function Sc(e) {
    var t = ys.current;
    oe(ys), e._currentValue = t;
  }
  function ru(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function br(e, t) {
    vs = e, gc = Pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
  }
  function ct(e) {
    var t = e._currentValue;
    if (gc !== e)
      if (e = { context: e, memoizedValue: t, next: null }, Pr === null) {
        if (vs === null)
          throw Error(_(308));
        Pr = e, vs.dependencies = { lanes: 0, firstContext: e };
      } else
        Pr = Pr.next = e;
    return t;
  }
  var Un = null;
  function xc(e) {
    Un === null ? Un = [e] : Un.push(e);
  }
  function yy(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, xc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Yt(e, r);
  }
  function Yt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var nn = !1;
  function Tc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function vy(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, H & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Yt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, xc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Yt(e, n);
  }
  function Ho(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ac(e, n);
    }
  }
  function Ad(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? i = o = s : o = o.next = s, n = n.next;
        } while (n !== null);
        o === null ? i = o = t : o = o.next = t;
      } else
        i = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function gs(e, t, n, r) {
    var i = e.updateQueue;
    nn = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a, u = l.next;
      l.next = null, s === null ? o = u : s.next = u, s = l;
      var c = e.alternate;
      c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
    }
    if (o !== null) {
      var f = i.baseState;
      s = 0, c = u = l = null, a = o;
      do {
        var d = a.lane, y = a.eventTime;
        if ((r & d) === d) {
          c !== null && (c = c.next = {
            eventTime: y,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
          });
          e: {
            var v = e, g = a;
            switch (d = t, y = n, g.tag) {
              case 1:
                if (v = g.payload, typeof v == "function") {
                  f = v.call(y, f, d);
                  break e;
                }
                f = v;
                break e;
              case 3:
                v.flags = v.flags & -65537 | 128;
              case 0:
                if (v = g.payload, d = typeof v == "function" ? v.call(y, f, d) : v, d == null)
                  break e;
                f = de({}, f, d);
                break e;
              case 2:
                nn = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
        } else
          y = { eventTime: y, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = y, l = f) : c = c.next = y, s |= d;
        if (a = a.next, a === null) {
          if (a = i.shared.pending, a === null)
            break;
          d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
        }
      } while (!0);
      if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else
        o === null && (i.shared.lanes = 0);
      Jn |= s, e.lanes = s, e.memoizedState = f;
    }
  }
  function jd(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = n, typeof i != "function")
            throw Error(_(191, i));
          i.call(r);
        }
      }
  }
  var lo = {}, Ot = jn(lo), Wi = jn(lo), Hi = jn(lo);
  function Wn(e) {
    if (e === lo)
      throw Error(_(174));
    return e;
  }
  function Ec(e, t) {
    switch (te(Hi, t), te(Wi, e), te(Ot, lo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Nl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Nl(t, e);
    }
    oe(Ot), te(Ot, t);
  }
  function Ur() {
    oe(Ot), oe(Wi), oe(Hi);
  }
  function gy(e) {
    Wn(Hi.current);
    var t = Wn(Ot.current), n = Nl(t, e.type);
    t !== n && (te(Wi, e), te(Ot, n));
  }
  function Pc(e) {
    Wi.current === e && (oe(Ot), oe(Wi));
  }
  var ue = jn(0);
  function ws(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Za = [];
  function Cc() {
    for (var e = 0; e < Za.length; e++)
      Za[e]._workInProgressVersionPrimary = null;
    Za.length = 0;
  }
  var Ko = Xt.ReactCurrentDispatcher, qa = Xt.ReactCurrentBatchConfig, qn = 0, fe = null, ge = null, xe = null, Ss = !1, Ei = !1, Ki = 0, Gw = 0;
  function Ae() {
    throw Error(_(321));
  }
  function kc(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wt(e[n], t[n]))
        return !1;
    return !0;
  }
  function _c(e, t, n, r, i, o) {
    if (qn = o, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? Zw : qw, e = n(r, i), Ei) {
      o = 0;
      do {
        if (Ei = !1, Ki = 0, 25 <= o)
          throw Error(_(301));
        o += 1, xe = ge = null, t.updateQueue = null, Ko.current = Jw, e = n(r, i);
      } while (Ei);
    }
    if (Ko.current = xs, t = ge !== null && ge.next !== null, qn = 0, xe = ge = fe = null, Ss = !1, t)
      throw Error(_(300));
    return e;
  }
  function Oc() {
    var e = Ki !== 0;
    return Ki = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xe === null ? fe.memoizedState = xe = e : xe = xe.next = e, xe;
  }
  function ft() {
    if (ge === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ge.next;
    var t = xe === null ? fe.memoizedState : xe.next;
    if (t !== null)
      xe = t, ge = e;
    else {
      if (e === null)
        throw Error(_(310));
      ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, xe === null ? fe.memoizedState = xe = e : xe = xe.next = e;
    }
    return xe;
  }
  function Gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ja(e) {
    var t = ft(), n = t.queue;
    if (n === null)
      throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = ge, i = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = o.next, o.next = s;
      }
      r.baseQueue = i = o, n.pending = null;
    }
    if (i !== null) {
      o = i.next, r = r.baseState;
      var a = s = null, l = null, u = o;
      do {
        var c = u.lane;
        if ((qn & c) === c)
          l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
        else {
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          l === null ? (a = l = f, s = r) : l = l.next = f, fe.lanes |= c, Jn |= c;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, wt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, fe.lanes |= o, Jn |= o, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function el(e) {
    var t = ft(), n = t.queue;
    if (n === null)
      throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        o = e(o, s.action), s = s.next;
      while (s !== i);
      wt(o, t.memoizedState) || (Ue = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function wy() {
  }
  function Sy(e, t) {
    var n = fe, r = ft(), i = t(), o = !wt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ue = !0), r = r.queue, Ac(Ey.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || xe !== null && xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Yi(9, Ty.bind(null, n, r, i, t), void 0, null), Te === null)
        throw Error(_(349));
      qn & 30 || xy(n, t, i);
    }
    return i;
  }
  function xy(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ty(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Py(t) && Cy(e);
  }
  function Ey(e, t, n) {
    return n(function() {
      Py(t) && Cy(e);
    });
  }
  function Py(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !wt(e, n);
    } catch {
      return !0;
    }
  }
  function Cy(e) {
    var t = Yt(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Fd(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gi, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xw.bind(null, fe, e), [t.memoizedState, e];
  }
  function Yi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ky() {
    return ft().memoizedState;
  }
  function Go(e, t, n, r) {
    var i = Pt();
    fe.flags |= e, i.memoizedState = Yi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ys(e, t, n, r) {
    var i = ft();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ge !== null) {
      var s = ge.memoizedState;
      if (o = s.destroy, r !== null && kc(r, s.deps)) {
        i.memoizedState = Yi(t, n, o, r);
        return;
      }
    }
    fe.flags |= e, i.memoizedState = Yi(1 | t, n, o, r);
  }
  function Rd(e, t) {
    return Go(8390656, 8, e, t);
  }
  function Ac(e, t) {
    return Ys(2048, 8, e, t);
  }
  function _y(e, t) {
    return Ys(4, 2, e, t);
  }
  function Oy(e, t) {
    return Ys(4, 4, e, t);
  }
  function Ay(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function jy(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ys(4, 4, Ay.bind(null, t, e), n);
  }
  function jc() {
  }
  function Fy(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && kc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ry(e, t) {
    var n = ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && kc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ly(e, t, n) {
    return qn & 21 ? (wt(n, t) || (n = Vm(), fe.lanes |= n, Jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
  }
  function Yw(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = qa.transition;
    qa.transition = {};
    try {
      e(!1), t();
    } finally {
      Q = n, qa.transition = r;
    }
  }
  function My() {
    return ft().memoizedState;
  }
  function Qw(e, t, n) {
    var r = gn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Dy(e))
      by(t, n);
    else if (n = yy(e, t, n, r), n !== null) {
      var i = Ne();
      gt(n, e, r, i), Ny(n, t, r);
    }
  }
  function Xw(e, t, n) {
    var r = gn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Dy(e))
      by(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, a = o(s, n);
          if (i.hasEagerState = !0, i.eagerState = a, wt(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, xc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = yy(e, t, i, r), n !== null && (i = Ne(), gt(n, e, r, i), Ny(n, t, r));
    }
  }
  function Dy(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function by(e, t) {
    Ei = Ss = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ny(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ac(e, n);
    }
  }
  var xs = { readContext: ct, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: !1 }, Zw = { readContext: ct, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ct, useEffect: Rd, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Go(
      4194308,
      4,
      Ay.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Go(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Go(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Qw.bind(null, fe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Fd, useDebugValue: jc, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = Fd(!1), t = e[0];
    return e = Yw.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = fe, i = Pt();
    if (le) {
      if (n === void 0)
        throw Error(_(407));
      n = n();
    } else {
      if (n = t(), Te === null)
        throw Error(_(349));
      qn & 30 || xy(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, Rd(Ey.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Yi(9, Ty.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = Te.identifierPrefix;
    if (le) {
      var n = $t, r = Vt;
      n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ki++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = Gw++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, qw = {
    readContext: ct,
    useCallback: Fy,
    useContext: ct,
    useEffect: Ac,
    useImperativeHandle: jy,
    useInsertionEffect: _y,
    useLayoutEffect: Oy,
    useMemo: Ry,
    useReducer: Ja,
    useRef: ky,
    useState: function() {
      return Ja(Gi);
    },
    useDebugValue: jc,
    useDeferredValue: function(e) {
      var t = ft();
      return Ly(t, ge.memoizedState, e);
    },
    useTransition: function() {
      var e = Ja(Gi)[0], t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: wy,
    useSyncExternalStore: Sy,
    useId: My,
    unstable_isNewReconciler: !1
  }, Jw = { readContext: ct, useCallback: Fy, useContext: ct, useEffect: Ac, useImperativeHandle: jy, useInsertionEffect: _y, useLayoutEffect: Oy, useMemo: Ry, useReducer: el, useRef: ky, useState: function() {
    return el(Gi);
  }, useDebugValue: jc, useDeferredValue: function(e) {
    var t = ft();
    return ge === null ? t.memoizedState = e : Ly(t, ge.memoizedState, e);
  }, useTransition: function() {
    var e = el(Gi)[0], t = ft().memoizedState;
    return [e, t];
  }, useMutableSource: wy, useSyncExternalStore: Sy, useId: My, unstable_isNewReconciler: !1 };
  function pt(e, t) {
    if (e && e.defaultProps) {
      t = de({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function iu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : de({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Qs = { isMounted: function(e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ne(), i = gn(e), o = Bt(r, i);
    o.payload = t, n != null && (o.callback = n), t = yn(e, o, i), t !== null && (gt(t, e, i, r), Ho(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ne(), i = gn(e), o = Bt(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = yn(e, o, i), t !== null && (gt(t, e, i, r), Ho(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ne(), r = gn(e), i = Bt(n, r);
    i.tag = 2, t != null && (i.callback = t), t = yn(e, i, r), t !== null && (gt(t, e, r, n), Ho(t, e, r));
  } };
  function Ld(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ii(n, r) || !Ii(i, o) : !0;
  }
  function Vy(e, t, n) {
    var r = !1, i = Pn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ct(o) : (i = He(t) ? Xn : De.current, r = t.contextTypes, o = (r = r != null) ? Ir(e, i) : Pn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Md(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
  }
  function ou(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Tc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ct(o) : (o = He(t) ? Xn : De.current, i.context = Ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (iu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Qs.enqueueReplaceState(i, i.state, null), gs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Wr(e, t) {
    try {
      var n = "", r = t;
      do
        n += _1(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function tl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function su(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var eS = typeof WeakMap == "function" ? WeakMap : Map;
  function $y(e, t, n) {
    n = Bt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Es || (Es = !0, yu = r), su(e, t);
    }, n;
  }
  function Iy(e, t, n) {
    n = Bt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        su(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      su(e, t), typeof r != "function" && (vn === null ? vn = /* @__PURE__ */ new Set([this]) : vn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function Dd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new eS();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = pS.bind(null, e, t, n), t.then(e, e));
  }
  function bd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Nd(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, yn(n, t, 1))), n.lanes |= 1), e);
  }
  var tS = Xt.ReactCurrentOwner, Ue = !1;
  function be(e, t, n, r) {
    t.child = e === null ? my(t, null, n, r) : Br(t, e.child, n, r);
  }
  function Vd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return br(t, i), r = _c(e, t, n, r, o, i), n = Oc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Qt(e, t, i)) : (le && n && mc(t), t.flags |= 1, be(e, t, r, i), t.child);
  }
  function $d(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Vc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, zy(e, t, o, r, i)) : (e = Zo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ii, n(s, r) && e.ref === t.ref)
        return Qt(e, t, i);
    }
    return t.flags |= 1, e = wn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function zy(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Ii(o, r) && e.ref === t.ref)
        if (Ue = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ue = !0);
        else
          return t.lanes = e.lanes, Qt(e, t, i);
    }
    return au(e, t, n, r, i);
  }
  function By(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(kr, Ge), Ge |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(kr, Ge), Ge |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, te(kr, Ge), Ge |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, te(kr, Ge), Ge |= r;
    return be(e, t, i, n), t.child;
  }
  function Uy(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function au(e, t, n, r, i) {
    var o = He(n) ? Xn : De.current;
    return o = Ir(t, o), br(t, i), n = _c(e, t, n, r, o, i), r = Oc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Qt(e, t, i)) : (le && r && mc(t), t.flags |= 1, be(e, t, n, i), t.child);
  }
  function Id(e, t, n, r, i) {
    if (He(n)) {
      var o = !0;
      hs(t);
    } else
      o = !1;
    if (br(t, i), t.stateNode === null)
      Yo(e, t), Vy(t, n, r), ou(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, a = t.memoizedProps;
      s.props = a;
      var l = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = ct(u) : (u = He(n) ? Xn : De.current, u = Ir(t, u));
      var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Md(t, s, r, u), nn = !1;
      var d = t.memoizedState;
      s.state = d, gs(t, r, s, i), l = t.memoizedState, a !== r || d !== l || We.current || nn ? (typeof c == "function" && (iu(t, n, c, r), l = t.memoizedState), (a = nn || Ld(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, vy(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : pt(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ct(l) : (l = He(n) ? Xn : De.current, l = Ir(t, l));
      var y = n.getDerivedStateFromProps;
      (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Md(t, s, r, l), nn = !1, d = t.memoizedState, s.state = d, gs(t, r, s, i);
      var v = t.memoizedState;
      a !== f || d !== v || We.current || nn ? (typeof y == "function" && (iu(t, n, y, r), v = t.memoizedState), (u = nn || Ld(t, n, u, r, d, v, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return lu(e, t, n, r, o, i);
  }
  function lu(e, t, n, r, i, o) {
    Uy(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return i && Cd(t, n, !1), Qt(e, t, o);
    r = t.stateNode, tS.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Br(t, e.child, null, o), t.child = Br(t, null, a, o)) : be(e, t, a, o), t.memoizedState = r.state, i && Cd(t, n, !0), t.child;
  }
  function Wy(e) {
    var t = e.stateNode;
    t.pendingContext ? Pd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pd(e, t.context, !1), Ec(e, t.containerInfo);
  }
  function zd(e, t, n, r, i) {
    return zr(), vc(i), t.flags |= 256, be(e, t, n, r), t.child;
  }
  var uu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hy(e, t, n) {
    var r = t.pendingProps, i = ue.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), te(ue, i & 1), e === null)
      return nu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = qs(s, r, 0, null), e = Gn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = cu(n), t.memoizedState = uu, e) : Fc(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
      return nS(e, t, s, r, a, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = wn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = wn(a, o) : (o = Gn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? cu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = uu, r;
    }
    return o = e.child, e = o.sibling, r = wn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Fc(e, t) {
    return t = qs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function jo(e, t, n, r) {
    return r !== null && vc(r), Br(t, e.child, null, n), e = Fc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function nS(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = tl(Error(_(422))), jo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = qs({ mode: "visible", children: r.children }, i, 0, null), o = Gn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Br(t, e.child, null, s), t.child.memoizedState = cu(s), t.memoizedState = uu, o);
    if (!(t.mode & 1))
      return jo(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
      return r = a, o = Error(_(419)), r = tl(o, r, void 0), jo(e, t, s, r);
    }
    if (a = (s & e.childLanes) !== 0, Ue || a) {
      if (r = Te, r !== null) {
        switch (s & -s) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Yt(e, i), gt(r, e, i, -1));
      }
      return Nc(), r = tl(Error(_(421))), jo(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mS.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ye = mn(i.nextSibling), Ze = t, le = !0, yt = null, e !== null && (st[at++] = Vt, st[at++] = $t, st[at++] = Zn, Vt = e.id, $t = e.overflow, Zn = t), t = Fc(t, r.children), t.flags |= 4096, t);
  }
  function Bd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ru(e.return, t, n);
  }
  function nl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Ky(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (be(e, t, r.children, n), r = ue.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Bd(e, n, t);
            else if (e.tag === 19)
              Bd(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (te(ue, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && ws(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), nl(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && ws(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          nl(t, !0, n, null, o);
          break;
        case "together":
          nl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Yo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Jn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(_(153));
    if (t.child !== null) {
      for (e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = wn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rS(e, t, n) {
    switch (t.tag) {
      case 3:
        Wy(t), zr();
        break;
      case 5:
        gy(t);
        break;
      case 1:
        He(t.type) && hs(t);
        break;
      case 4:
        Ec(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        te(ys, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (te(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hy(e, t, n) : (te(ue, ue.current & 1), e = Qt(e, t, n), e !== null ? e.sibling : null);
        te(ue, ue.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Ky(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), te(ue, ue.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, By(e, t, n);
    }
    return Qt(e, t, n);
  }
  var Gy, fu, Yy, Qy;
  Gy = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  fu = function() {
  };
  Yy = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Wn(Ot.current);
      var o = null;
      switch (n) {
        case "input":
          i = Ll(e, i), r = Ll(e, r), o = [];
          break;
        case "select":
          i = de({}, i, { value: void 0 }), r = de({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = bl(e, i), r = bl(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fs);
      }
      Vl(n, r);
      var s;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (s in a)
              a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else
            u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Li.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
          if (u === "style")
            if (a) {
              for (s in a)
                !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
              for (s in l)
                l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
            } else
              n || (o || (o = []), o.push(
                u,
                n
              )), n = l;
          else
            u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Li.hasOwnProperty(u) ? (l != null && u === "onScroll" && re("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  Qy = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ai(e, t) {
    if (!le)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function iS(e, t, n) {
    var r = t.pendingProps;
    switch (yc(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return He(t.type) && ds(), je(t), null;
      case 3:
        return r = t.stateNode, Ur(), oe(We), oe(De), Cc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Oo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, yt !== null && (wu(yt), yt = null))), fu(e, t), je(t), null;
      case 5:
        Pc(t);
        var i = Wn(Hi.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Yy(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(_(166));
            return je(t), null;
          }
          if (e = Wn(Ot.current), Oo(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[kt] = t, r[Ui] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                re("cancel", r), re("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mi.length; i++)
                  re(mi[i], r);
                break;
              case "source":
                re("error", r);
                break;
              case "img":
              case "image":
              case "link":
                re(
                  "error",
                  r
                ), re("load", r);
                break;
              case "details":
                re("toggle", r);
                break;
              case "input":
                Zf(r, o), re("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, re("invalid", r);
                break;
              case "textarea":
                Jf(r, o), re("invalid", r);
            }
            Vl(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && _o(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && _o(
                  r.textContent,
                  a,
                  e
                ), i = ["children", "" + a]) : Li.hasOwnProperty(s) && a != null && s === "onScroll" && re("scroll", r);
              }
            switch (n) {
              case "input":
                wo(r), qf(r, o, !0);
                break;
              case "textarea":
                wo(r), ed(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = fs);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Em(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[kt] = t, e[Ui] = r, Gy(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = $l(n, r), n) {
                case "dialog":
                  re("cancel", e), re("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  re("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < mi.length; i++)
                    re(mi[i], e);
                  i = r;
                  break;
                case "source":
                  re("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  re(
                    "error",
                    e
                  ), re("load", e), i = r;
                  break;
                case "details":
                  re("toggle", e), i = r;
                  break;
                case "input":
                  Zf(e, r), i = Ll(e, r), re("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = de({}, r, { value: void 0 }), re("invalid", e);
                  break;
                case "textarea":
                  Jf(e, r), i = bl(e, r), re("invalid", e);
                  break;
                default:
                  i = r;
              }
              Vl(n, i), a = i;
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style" ? km(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Pm(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Mi(e, l) : typeof l == "number" && Mi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Li.hasOwnProperty(o) ? l != null && o === "onScroll" && re("scroll", e) : l != null && tc(e, o, l, s));
                }
              switch (n) {
                case "input":
                  wo(e), qf(e, r, !1);
                  break;
                case "textarea":
                  wo(e), ed(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + En(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Rr(e, !!r.multiple, o, !1) : r.defaultValue != null && Rr(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = fs);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return je(t), null;
      case 6:
        if (e && t.stateNode != null)
          Qy(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(_(166));
          if (n = Wn(Hi.current), Wn(Ot.current), Oo(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (o = r.nodeValue !== n) && (e = Ze, e !== null))
              switch (e.tag) {
                case 3:
                  _o(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && _o(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
        }
        return je(t), null;
      case 13:
        if (oe(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (le && Ye !== null && t.mode & 1 && !(t.flags & 128))
            hy(), zr(), t.flags |= 98560, o = !1;
          else if (o = Oo(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(_(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(_(317));
              o[kt] = t;
            } else
              zr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            je(t), o = !1;
          } else
            yt !== null && (wu(yt), yt = null), o = !0;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? we === 0 && (we = 3) : Nc())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
      case 4:
        return Ur(), fu(e, t), e === null && zi(t.stateNode.containerInfo), je(t), null;
      case 10:
        return Sc(t.type._context), je(t), null;
      case 17:
        return He(t.type) && ds(), je(t), null;
      case 19:
        if (oe(ue), o = t.memoizedState, o === null)
          return je(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            ai(o, !1);
          else {
            if (we !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = ws(e), s !== null) {
                  for (t.flags |= 128, ai(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return te(ue, ue.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && ye() > Hr && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = ws(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ai(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !le)
                return je(t), null;
            } else
              2 * ye() - o.renderingStartTime > Hr && n !== 1073741824 && (t.flags |= 128, r = !0, ai(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ye(), t.sibling = null, n = ue.current, te(ue, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
      case 22:
      case 23:
        return bc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ge & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, t.tag));
  }
  function oS(e, t) {
    switch (yc(t), t.tag) {
      case 1:
        return He(t.type) && ds(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ur(), oe(We), oe(De), Cc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Pc(t), null;
      case 13:
        if (oe(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(_(340));
          zr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return oe(ue), null;
      case 4:
        return Ur(), null;
      case 10:
        return Sc(t.type._context), null;
      case 22:
      case 23:
        return bc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fo = !1, Re = !1, sS = typeof WeakSet == "function" ? WeakSet : Set, F = null;
  function Cr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          he(e, t, r);
        }
      else
        n.current = null;
  }
  function du(e, t, n) {
    try {
      n();
    } catch (r) {
      he(e, t, r);
    }
  }
  var Ud = !1;
  function aS(e, t) {
    if (Ql = ls, e = ey(), pc(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset, o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0, a = -1, l = -1, u = 0, c = 0, f = e, d = null;
            t:
              for (; ; ) {
                for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null; )
                  d = f, f = y;
                for (; ; ) {
                  if (f === e)
                    break t;
                  if (d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (y = f.nextSibling) !== null)
                    break;
                  f = d, d = f.parentNode;
                }
                f = y;
              }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Xl = { focusedElem: e, selectionRange: n }, ls = !1, F = t; F !== null; )
      if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, F = e;
      else
        for (; F !== null; ) {
          t = F;
          try {
            var v = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var g = v.memoizedProps, T = v.memoizedState, p = t.stateNode, h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : pt(t.type, g), T);
                    p.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var m = t.stateNode.containerInfo;
                  m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(_(163));
              }
          } catch (w) {
            he(t, t.return, w);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, F = e;
            break;
          }
          F = t.return;
        }
    return v = Ud, Ud = !1, v;
  }
  function Pi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && du(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Xs(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function hu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Xy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[Ui], delete t[Jl], delete t[Uw], delete t[Ww])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Zy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Wd(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Zy(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fs));
    else if (r !== 4 && (e = e.child, e !== null))
      for (pu(e, t, n), e = e.sibling; e !== null; )
        pu(e, t, n), e = e.sibling;
  }
  function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (mu(e, t, n), e = e.sibling; e !== null; )
        mu(e, t, n), e = e.sibling;
  }
  var Pe = null, mt = !1;
  function Jt(e, t, n) {
    for (n = n.child; n !== null; )
      qy(e, t, n), n = n.sibling;
  }
  function qy(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function")
      try {
        _t.onCommitFiberUnmount(Bs, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        Re || Cr(n, t);
      case 6:
        var r = Pe, i = mt;
        Pe = null, Jt(e, t, n), Pe = r, mt = i, Pe !== null && (mt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
        break;
      case 18:
        Pe !== null && (mt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? Qa(e.parentNode, n) : e.nodeType === 1 && Qa(e, n), Vi(e)) : Qa(Pe, n.stateNode));
        break;
      case 4:
        r = Pe, i = mt, Pe = n.stateNode.containerInfo, mt = !0, Jt(e, t, n), Pe = r, mt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && du(n, t, s), i = i.next;
          } while (i !== r);
        }
        Jt(e, t, n);
        break;
      case 1:
        if (!Re && (Cr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (a) {
            he(n, t, a);
          }
        Jt(e, t, n);
        break;
      case 21:
        Jt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, Jt(e, t, n), Re = r) : Jt(e, t, n);
        break;
      default:
        Jt(e, t, n);
    }
  }
  function Hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new sS()), t.forEach(function(r) {
        var i = yS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e, s = t, a = s;
          e:
            for (; a !== null; ) {
              switch (a.tag) {
                case 5:
                  Pe = a.stateNode, mt = !1;
                  break e;
                case 3:
                  Pe = a.stateNode.containerInfo, mt = !0;
                  break e;
                case 4:
                  Pe = a.stateNode.containerInfo, mt = !0;
                  break e;
              }
              a = a.return;
            }
          if (Pe === null)
            throw Error(_(160));
          qy(o, s, i), Pe = null, mt = !1;
          var l = i.alternate;
          l !== null && (l.return = null), i.return = null;
        } catch (u) {
          he(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Jy(t, e), t = t.sibling;
  }
  function Jy(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), Et(e), r & 4) {
          try {
            Pi(3, e, e.return), Xs(3, e);
          } catch (g) {
            he(e, e.return, g);
          }
          try {
            Pi(5, e, e.return);
          } catch (g) {
            he(e, e.return, g);
          }
        }
        break;
      case 1:
        ht(t, e), Et(e), r & 512 && n !== null && Cr(n, n.return);
        break;
      case 5:
        if (ht(t, e), Et(e), r & 512 && n !== null && Cr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Mi(i, "");
          } catch (g) {
            he(e, e.return, g);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
          if (e.updateQueue = null, l !== null)
            try {
              a === "input" && o.type === "radio" && o.name != null && xm(i, o), $l(a, s);
              var u = $l(a, o);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s], f = l[s + 1];
                c === "style" ? km(i, f) : c === "dangerouslySetInnerHTML" ? Pm(i, f) : c === "children" ? Mi(i, f) : tc(i, c, f, u);
              }
              switch (a) {
                case "input":
                  Ml(i, o);
                  break;
                case "textarea":
                  Tm(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var y = o.value;
                  y != null ? Rr(i, !!o.multiple, y, !1) : d !== !!o.multiple && (o.defaultValue != null ? Rr(
                    i,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : Rr(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[Ui] = o;
            } catch (g) {
              he(e, e.return, g);
            }
        }
        break;
      case 6:
        if (ht(t, e), Et(e), r & 4) {
          if (e.stateNode === null)
            throw Error(_(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (g) {
            he(e, e.return, g);
          }
        }
        break;
      case 3:
        if (ht(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Vi(t.containerInfo);
          } catch (g) {
            he(e, e.return, g);
          }
        break;
      case 4:
        ht(t, e), Et(e);
        break;
      case 13:
        ht(t, e), Et(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Mc = ye())), r & 4 && Hd(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (u = Re) || c, ht(t, e), Re = u) : ht(t, e), Et(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
            for (F = e, c = e.child; c !== null; ) {
              for (f = F = c; F !== null; ) {
                switch (d = F, y = d.child, d.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pi(4, d, d.return);
                    break;
                  case 1:
                    Cr(d, d.return);
                    var v = d.stateNode;
                    if (typeof v.componentWillUnmount == "function") {
                      r = d, n = d.return;
                      try {
                        t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                      } catch (g) {
                        he(r, n, g);
                      }
                    }
                    break;
                  case 5:
                    Cr(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Gd(f);
                      continue;
                    }
                }
                y !== null ? (y.return = d, F = y) : Gd(f);
              }
              c = c.sibling;
            }
          e:
            for (c = null, f = e; ; ) {
              if (f.tag === 5) {
                if (c === null) {
                  c = f;
                  try {
                    i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Cm("display", s));
                  } catch (g) {
                    he(e, e.return, g);
                  }
                }
              } else if (f.tag === 6) {
                if (c === null)
                  try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                  } catch (g) {
                    he(e, e.return, g);
                  }
              } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e)
                break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break e;
                c === f && (c = null), f = f.return;
              }
              c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
            }
        }
        break;
      case 19:
        ht(t, e), Et(e), r & 4 && Hd(e);
        break;
      case 21:
        break;
      default:
        ht(
          t,
          e
        ), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Zy(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(_(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Mi(i, ""), r.flags &= -33);
            var o = Wd(e);
            mu(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, a = Wd(e);
            pu(e, a, s);
            break;
          default:
            throw Error(_(161));
        }
      } catch (l) {
        he(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function lS(e, t, n) {
    F = e, ev(e);
  }
  function ev(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
      var i = F, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || Fo;
        if (!s) {
          var a = i.alternate, l = a !== null && a.memoizedState !== null || Re;
          a = Fo;
          var u = Re;
          if (Fo = s, (Re = l) && !u)
            for (F = i; F !== null; )
              s = F, l = s.child, s.tag === 22 && s.memoizedState !== null ? Yd(i) : l !== null ? (l.return = s, F = l) : Yd(i);
          for (; o !== null; )
            F = o, ev(o), o = o.sibling;
          F = i, Fo = a, Re = u;
        }
        Kd(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, F = o) : Kd(e);
    }
  }
  function Kd(e) {
    for (; F !== null; ) {
      var t = F;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Re || Xs(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Re)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && jd(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  jd(t, s, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && Vi(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(_(163));
            }
          Re || t.flags & 512 && hu(t);
        } catch (d) {
          he(t, t.return, d);
        }
      }
      if (t === e) {
        F = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, F = n;
        break;
      }
      F = t.return;
    }
  }
  function Gd(e) {
    for (; F !== null; ) {
      var t = F;
      if (t === e) {
        F = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, F = n;
        break;
      }
      F = t.return;
    }
  }
  function Yd(e) {
    for (; F !== null; ) {
      var t = F;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xs(4, t);
            } catch (l) {
              he(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                he(t, i, l);
              }
            }
            var o = t.return;
            try {
              hu(t);
            } catch (l) {
              he(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              hu(t);
            } catch (l) {
              he(t, s, l);
            }
        }
      } catch (l) {
        he(t, t.return, l);
      }
      if (t === e) {
        F = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, F = a;
        break;
      }
      F = t.return;
    }
  }
  var uS = Math.ceil, Ts = Xt.ReactCurrentDispatcher, Rc = Xt.ReactCurrentOwner, ut = Xt.ReactCurrentBatchConfig, H = 0, Te = null, ve = null, _e = 0, Ge = 0, kr = jn(0), we = 0, Qi = null, Jn = 0, Zs = 0, Lc = 0, Ci = null, ze = null, Mc = 0, Hr = 1 / 0, Dt = null, Es = !1, yu = null, vn = null, Ro = !1, un = null, Ps = 0, ki = 0, vu = null, Qo = -1, Xo = 0;
  function Ne() {
    return H & 6 ? ye() : Qo !== -1 ? Qo : Qo = ye();
  }
  function gn(e) {
    return e.mode & 1 ? H & 2 && _e !== 0 ? _e & -_e : Kw.transition !== null ? (Xo === 0 && (Xo = Vm()), Xo) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hm(e.type)), e) : 1;
  }
  function gt(e, t, n, r) {
    if (50 < ki)
      throw ki = 0, vu = null, Error(_(185));
    oo(e, n, r), (!(H & 2) || e !== Te) && (e === Te && (!(H & 2) && (Zs |= n), we === 4 && an(e, _e)), Ke(e, r), n === 1 && H === 0 && !(t.mode & 1) && (Hr = ye() + 500, Gs && Fn()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    K1(e, t);
    var r = as(e, e === Te ? _e : 0);
    if (r === 0)
      n !== null && rd(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && rd(n), t === 1)
        e.tag === 0 ? Hw(Qd.bind(null, e)) : cy(Qd.bind(null, e)), zw(function() {
          !(H & 6) && Fn();
        }), n = null;
      else {
        switch ($m(r)) {
          case 1:
            n = sc;
            break;
          case 4:
            n = bm;
            break;
          case 16:
            n = ss;
            break;
          case 536870912:
            n = Nm;
            break;
          default:
            n = ss;
        }
        n = lv(n, tv.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function tv(e, t) {
    if (Qo = -1, Xo = 0, H & 6)
      throw Error(_(327));
    var n = e.callbackNode;
    if (Nr() && e.callbackNode !== n)
      return null;
    var r = as(e, e === Te ? _e : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Cs(e, r);
    else {
      t = r;
      var i = H;
      H |= 2;
      var o = rv();
      (Te !== e || _e !== t) && (Dt = null, Hr = ye() + 500, Kn(e, t));
      do
        try {
          dS();
          break;
        } catch (a) {
          nv(e, a);
        }
      while (!0);
      wc(), Ts.current = o, H = i, ve !== null ? t = 0 : (Te = null, _e = 0, t = we);
    }
    if (t !== 0) {
      if (t === 2 && (i = Wl(e), i !== 0 && (r = i, t = gu(e, i))), t === 1)
        throw n = Qi, Kn(e, 0), an(e, r), Ke(e, ye()), n;
      if (t === 6)
        an(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !cS(i) && (t = Cs(e, r), t === 2 && (o = Wl(e), o !== 0 && (r = o, t = gu(e, o))), t === 1))
          throw n = Qi, Kn(e, 0), an(e, r), Ke(e, ye()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            Vn(e, ze, Dt);
            break;
          case 3:
            if (an(e, r), (r & 130023424) === r && (t = Mc + 500 - ye(), 10 < t)) {
              if (as(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Ne(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = ql(Vn.bind(null, e, ze, Dt), t);
              break;
            }
            Vn(e, ze, Dt);
            break;
          case 4:
            if (an(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - vt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * uS(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ql(Vn.bind(null, e, ze, Dt), r);
              break;
            }
            Vn(e, ze, Dt);
            break;
          case 5:
            Vn(e, ze, Dt);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return Ke(e, ye()), e.callbackNode === n ? tv.bind(null, e) : null;
  }
  function gu(e, t) {
    var n = Ci;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = Cs(e, t), e !== 2 && (t = ze, ze = n, t !== null && wu(t)), e;
  }
  function wu(e) {
    ze === null ? ze = e : ze.push.apply(ze, e);
  }
  function cS(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], o = i.getSnapshot;
            i = i.value;
            try {
              if (!wt(o(), i))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function an(e, t) {
    for (t &= ~Lc, t &= ~Zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - vt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Qd(e) {
    if (H & 6)
      throw Error(_(327));
    Nr();
    var t = as(e, 0);
    if (!(t & 1))
      return Ke(e, ye()), null;
    var n = Cs(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Wl(e);
      r !== 0 && (t = r, n = gu(e, r));
    }
    if (n === 1)
      throw n = Qi, Kn(e, 0), an(e, t), Ke(e, ye()), n;
    if (n === 6)
      throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, ze, Dt), Ke(e, ye()), null;
  }
  function Dc(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      H = n, H === 0 && (Hr = ye() + 500, Gs && Fn());
    }
  }
  function er(e) {
    un !== null && un.tag === 0 && !(H & 6) && Nr();
    var t = H;
    H |= 1;
    var n = ut.transition, r = Q;
    try {
      if (ut.transition = null, Q = 1, e)
        return e();
    } finally {
      Q = r, ut.transition = n, H = t, !(H & 6) && Fn();
    }
  }
  function bc() {
    Ge = kr.current, oe(kr);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Iw(n)), ve !== null)
      for (n = ve.return; n !== null; ) {
        var r = n;
        switch (yc(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && ds();
            break;
          case 3:
            Ur(), oe(We), oe(De), Cc();
            break;
          case 5:
            Pc(r);
            break;
          case 4:
            Ur();
            break;
          case 13:
            oe(ue);
            break;
          case 19:
            oe(ue);
            break;
          case 10:
            Sc(r.type._context);
            break;
          case 22:
          case 23:
            bc();
        }
        n = n.return;
      }
    if (Te = e, ve = e = wn(e.current, null), _e = Ge = t, we = 0, Qi = null, Lc = Zs = Jn = 0, ze = Ci = null, Un !== null) {
      for (t = 0; t < Un.length; t++)
        if (n = Un[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = i, r.next = s;
          }
          n.pending = r;
        }
      Un = null;
    }
    return e;
  }
  function nv(e, t) {
    do {
      var n = ve;
      try {
        if (wc(), Ko.current = xs, Ss) {
          for (var r = fe.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ss = !1;
        }
        if (qn = 0, xe = ge = fe = null, Ei = !1, Ki = 0, Rc.current = null, n === null || n.return === null) {
          we = 1, Qi = t, ve = null;
          break;
        }
        e: {
          var o = e, s = n.return, a = n, l = t;
          if (t = _e, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            var u = l, c = a, f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var y = bd(s);
            if (y !== null) {
              y.flags &= -257, Nd(y, s, a, o, t), y.mode & 1 && Dd(o, u, t), t = y, l = u;
              var v = t.updateQueue;
              if (v === null) {
                var g = /* @__PURE__ */ new Set();
                g.add(l), t.updateQueue = g;
              } else
                v.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Dd(o, u, t), Nc();
                break e;
              }
              l = Error(_(426));
            }
          } else if (le && a.mode & 1) {
            var T = bd(s);
            if (T !== null) {
              !(T.flags & 65536) && (T.flags |= 256), Nd(T, s, a, o, t), vc(Wr(l, a));
              break e;
            }
          }
          o = l = Wr(l, a), we !== 4 && (we = 2), Ci === null ? Ci = [o] : Ci.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = $y(o, l, t);
                Ad(o, p);
                break e;
              case 1:
                a = l;
                var h = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (vn === null || !vn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var w = Iy(o, a, t);
                  Ad(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ov(n);
      } catch (P) {
        t = P, ve === n && n !== null && (ve = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rv() {
    var e = Ts.current;
    return Ts.current = xs, e === null ? xs : e;
  }
  function Nc() {
    (we === 0 || we === 3 || we === 2) && (we = 4), Te === null || !(Jn & 268435455) && !(Zs & 268435455) || an(Te, _e);
  }
  function Cs(e, t) {
    var n = H;
    H |= 2;
    var r = rv();
    (Te !== e || _e !== t) && (Dt = null, Kn(e, t));
    do
      try {
        fS();
        break;
      } catch (i) {
        nv(e, i);
      }
    while (!0);
    if (wc(), H = n, Ts.current = r, ve !== null)
      throw Error(_(261));
    return Te = null, _e = 0, we;
  }
  function fS() {
    for (; ve !== null; )
      iv(ve);
  }
  function dS() {
    for (; ve !== null && !N1(); )
      iv(ve);
  }
  function iv(e) {
    var t = av(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps, t === null ? ov(e) : ve = t, Rc.current = null;
  }
  function ov(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = oS(n, t), n !== null) {
          n.flags &= 32767, ve = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          we = 6, ve = null;
          return;
        }
      } else if (n = iS(n, t, Ge), n !== null) {
        ve = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function Vn(e, t, n) {
    var r = Q, i = ut.transition;
    try {
      ut.transition = null, Q = 1, hS(e, t, n, r);
    } finally {
      ut.transition = i, Q = r;
    }
    return null;
  }
  function hS(e, t, n, r) {
    do
      Nr();
    while (un !== null);
    if (H & 6)
      throw Error(_(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (G1(e, o), e === Te && (ve = Te = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ro || (Ro = !0, lv(ss, function() {
      return Nr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ut.transition, ut.transition = null;
      var s = Q;
      Q = 1;
      var a = H;
      H |= 4, Rc.current = null, aS(e, n), Jy(n, e), Lw(Xl), ls = !!Ql, Xl = Ql = null, e.current = n, lS(n), V1(), H = a, Q = s, ut.transition = o;
    } else
      e.current = n;
    if (Ro && (Ro = !1, un = e, Ps = i), o = e.pendingLanes, o === 0 && (vn = null), z1(n.stateNode), Ke(e, ye()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Es)
      throw Es = !1, e = yu, yu = null, e;
    return Ps & 1 && e.tag !== 0 && Nr(), o = e.pendingLanes, o & 1 ? e === vu ? ki++ : (ki = 0, vu = e) : ki = 0, Fn(), null;
  }
  function Nr() {
    if (un !== null) {
      var e = $m(Ps), t = ut.transition, n = Q;
      try {
        if (ut.transition = null, Q = 16 > e ? 16 : e, un === null)
          var r = !1;
        else {
          if (e = un, un = null, Ps = 0, H & 6)
            throw Error(_(331));
          var i = H;
          for (H |= 4, F = e.current; F !== null; ) {
            var o = F, s = o.child;
            if (F.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (F = u; F !== null; ) {
                    var c = F;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pi(8, c, o);
                    }
                    var f = c.child;
                    if (f !== null)
                      f.return = c, F = f;
                    else
                      for (; F !== null; ) {
                        c = F;
                        var d = c.sibling, y = c.return;
                        if (Xy(c), c === u) {
                          F = null;
                          break;
                        }
                        if (d !== null) {
                          d.return = y, F = d;
                          break;
                        }
                        F = y;
                      }
                  }
                }
                var v = o.alternate;
                if (v !== null) {
                  var g = v.child;
                  if (g !== null) {
                    v.child = null;
                    do {
                      var T = g.sibling;
                      g.sibling = null, g = T;
                    } while (g !== null);
                  }
                }
                F = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null)
              s.return = o, F = s;
            else
              e:
                for (; F !== null; ) {
                  if (o = F, o.flags & 2048)
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pi(9, o, o.return);
                    }
                  var p = o.sibling;
                  if (p !== null) {
                    p.return = o.return, F = p;
                    break e;
                  }
                  F = o.return;
                }
          }
          var h = e.current;
          for (F = h; F !== null; ) {
            s = F;
            var m = s.child;
            if (s.subtreeFlags & 2064 && m !== null)
              m.return = s, F = m;
            else
              e:
                for (s = h; F !== null; ) {
                  if (a = F, a.flags & 2048)
                    try {
                      switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Xs(9, a);
                      }
                    } catch (P) {
                      he(a, a.return, P);
                    }
                  if (a === s) {
                    F = null;
                    break e;
                  }
                  var w = a.sibling;
                  if (w !== null) {
                    w.return = a.return, F = w;
                    break e;
                  }
                  F = a.return;
                }
          }
          if (H = i, Fn(), _t && typeof _t.onPostCommitFiberRoot == "function")
            try {
              _t.onPostCommitFiberRoot(Bs, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        Q = n, ut.transition = t;
      }
    }
    return !1;
  }
  function Xd(e, t, n) {
    t = Wr(n, t), t = $y(e, t, 1), e = yn(e, t, 1), t = Ne(), e !== null && (oo(e, 1, t), Ke(e, t));
  }
  function he(e, t, n) {
    if (e.tag === 3)
      Xd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vn === null || !vn.has(r))) {
            e = Wr(n, e), e = Iy(t, e, 1), t = yn(t, e, 1), e = Ne(), t !== null && (oo(t, 1, e), Ke(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function pS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (_e & n) === n && (we === 4 || we === 3 && (_e & 130023424) === _e && 500 > ye() - Mc ? Kn(e, 0) : Lc |= n), Ke(e, t);
  }
  function sv(e, t) {
    t === 0 && (e.mode & 1 ? (t = To, To <<= 1, !(To & 130023424) && (To = 4194304)) : t = 1);
    var n = Ne();
    e = Yt(e, t), e !== null && (oo(e, t, n), Ke(e, n));
  }
  function mS(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), sv(e, n);
  }
  function yS(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(_(314));
    }
    r !== null && r.delete(t), sv(e, n);
  }
  var av;
  av = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current)
        Ue = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ue = !1, rS(e, t, n);
        Ue = !!(e.flags & 131072);
      }
    else
      Ue = !1, le && t.flags & 1048576 && fy(t, ms, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Yo(e, t), e = t.pendingProps;
        var i = Ir(t, De.current);
        br(t, n), i = _c(null, t, r, e, i, n);
        var o = Oc();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (o = !0, hs(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Tc(t), i.updater = Qs, t.stateNode = i, i._reactInternals = t, ou(t, r, e, n), t = lu(null, t, r, !0, o, n)) : (t.tag = 0, le && o && mc(t), be(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Yo(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = gS(r), e = pt(r, e), i) {
            case 0:
              t = au(null, t, r, e, n);
              break e;
            case 1:
              t = Id(null, t, r, e, n);
              break e;
            case 11:
              t = Vd(null, t, r, e, n);
              break e;
            case 14:
              t = $d(null, t, r, pt(r.type, e), n);
              break e;
          }
          throw Error(_(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), au(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), Id(e, t, r, i, n);
      case 3:
        e: {
          if (Wy(t), e === null)
            throw Error(_(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, vy(e, t), gs(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = Wr(Error(_(423)), t), t = zd(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = Wr(Error(_(424)), t), t = zd(e, t, r, n, i);
              break e;
            } else
              for (Ye = mn(t.stateNode.containerInfo.firstChild), Ze = t, le = !0, yt = null, n = my(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (zr(), r === i) {
              t = Qt(e, t, n);
              break e;
            }
            be(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return gy(t), e === null && nu(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Zl(r, i) ? s = null : o !== null && Zl(r, o) && (t.flags |= 32), Uy(e, t), be(e, t, s, n), t.child;
      case 6:
        return e === null && nu(t), null;
      case 13:
        return Hy(e, t, n);
      case 4:
        return Ec(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Br(t, null, r, n) : be(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), Vd(e, t, r, i, n);
      case 7:
        return be(e, t, t.pendingProps, n), t.child;
      case 8:
        return be(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return be(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, te(ys, r._currentValue), r._currentValue = s, o !== null)
            if (wt(o.value, s)) {
              if (o.children === i.children && !We.current) {
                t = Qt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  s = o.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (o.tag === 1) {
                        l = Bt(-1, n & -n), l.tag = 2;
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                        }
                      }
                      o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ru(
                        o.return,
                        n,
                        t
                      ), a.lanes |= n;
                      break;
                    }
                    l = l.next;
                  }
                } else if (o.tag === 10)
                  s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (s = o.return, s === null)
                    throw Error(_(341));
                  s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ru(s, n, t), s = o.sibling;
                } else
                  s = o.child;
                if (s !== null)
                  s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (o = s.sibling, o !== null) {
                      o.return = s.return, s = o;
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          be(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, br(t, n), i = ct(i), r = r(i), t.flags |= 1, be(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = pt(r, t.pendingProps), i = pt(r.type, i), $d(e, t, r, i, n);
      case 15:
        return zy(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : pt(r, i), Yo(e, t), t.tag = 1, He(r) ? (e = !0, hs(t)) : e = !1, br(t, n), Vy(t, r, i), ou(t, r, i, n), lu(null, t, r, !0, e, n);
      case 19:
        return Ky(e, t, n);
      case 22:
        return By(e, t, n);
    }
    throw Error(_(156, t.tag));
  };
  function lv(e, t) {
    return Dm(e, t);
  }
  function vS(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(e, t, n, r) {
    return new vS(e, t, n, r);
  }
  function Vc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gS(e) {
    if (typeof e == "function")
      return Vc(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === rc)
        return 11;
      if (e === ic)
        return 14;
    }
    return 2;
  }
  function wn(e, t) {
    var n = e.alternate;
    return n === null ? (n = lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Zo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function")
      Vc(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case yr:
            return Gn(n.children, i, o, t);
          case nc:
            s = 8, i |= 8;
            break;
          case Al:
            return e = lt(12, n, t, i | 2), e.elementType = Al, e.lanes = o, e;
          case jl:
            return e = lt(13, n, t, i), e.elementType = jl, e.lanes = o, e;
          case Fl:
            return e = lt(19, n, t, i), e.elementType = Fl, e.lanes = o, e;
          case gm:
            return qs(n, i, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ym:
                  s = 10;
                  break e;
                case vm:
                  s = 9;
                  break e;
                case rc:
                  s = 11;
                  break e;
                case ic:
                  s = 14;
                  break e;
                case tn:
                  s = 16, r = null;
                  break e;
              }
            throw Error(_(130, e == null ? e : typeof e, ""));
        }
    return t = lt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Gn(e, t, n, r) {
    return e = lt(7, e, r, t), e.lanes = n, e;
  }
  function qs(e, t, n, r) {
    return e = lt(22, e, r, t), e.elementType = gm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function rl(e, t, n) {
    return e = lt(6, e, null, t), e.lanes = n, e;
  }
  function il(e, t, n) {
    return t = lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function wS(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Va(0), this.expirationTimes = Va(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Va(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function $c(e, t, n, r, i, o, s, a, l) {
    return e = new wS(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = lt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tc(o), e;
  }
  function SS(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: mr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function uv(e) {
    if (!e)
      return Pn;
    e = e._reactInternals;
    e: {
      if (ir(e) !== e || e.tag !== 1)
        throw Error(_(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (He(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(_(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (He(n))
        return uy(e, n, t);
    }
    return t;
  }
  function cv(e, t, n, r, i, o, s, a, l) {
    return e = $c(n, r, !0, e, i, o, s, a, l), e.context = uv(null), n = e.current, r = Ne(), i = gn(n), o = Bt(r, i), o.callback = t ?? null, yn(n, o, i), e.current.lanes = i, oo(e, i, r), Ke(e, r), e;
  }
  function Js(e, t, n, r) {
    var i = t.current, o = Ne(), s = gn(i);
    return n = uv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yn(i, t, s), e !== null && (gt(e, i, s, o), Ho(e, i, s)), s;
  }
  function ks(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Zd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ic(e, t) {
    Zd(e, t), (e = e.alternate) && Zd(e, t);
  }
  function xS() {
    return null;
  }
  var fv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function zc(e) {
    this._internalRoot = e;
  }
  ea.prototype.render = zc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(_(409));
    Js(e, t, null, null);
  };
  ea.prototype.unmount = zc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      er(function() {
        Js(null, e, null, null);
      }), t[Gt] = null;
    }
  };
  function ea(e) {
    this._internalRoot = e;
  }
  ea.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Bm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++)
        ;
      sn.splice(n, 0, e), n === 0 && Wm(e);
    }
  };
  function Bc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function qd() {
  }
  function TS(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = ks(s);
          o.call(u);
        };
      }
      var s = cv(t, r, e, 0, null, !1, !1, "", qd);
      return e._reactRootContainer = s, e[Gt] = s.current, zi(e.nodeType === 8 ? e.parentNode : e), er(), s;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = ks(l);
        a.call(u);
      };
    }
    var l = $c(e, 0, !1, null, null, !1, !1, "", qd);
    return e._reactRootContainer = l, e[Gt] = l.current, zi(e.nodeType === 8 ? e.parentNode : e), er(function() {
      Js(t, l, n, r);
    }), l;
  }
  function na(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var l = ks(s);
          a.call(l);
        };
      }
      Js(t, s, e, i);
    } else
      s = TS(n, t, e, i, r);
    return ks(s);
  }
  Im = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = pi(t.pendingLanes);
          n !== 0 && (ac(t, n | 1), Ke(t, ye()), !(H & 6) && (Hr = ye() + 500, Fn()));
        }
        break;
      case 13:
        er(function() {
          var r = Yt(e, 1);
          if (r !== null) {
            var i = Ne();
            gt(r, e, 1, i);
          }
        }), Ic(e, 1);
    }
  };
  lc = function(e) {
    if (e.tag === 13) {
      var t = Yt(e, 134217728);
      if (t !== null) {
        var n = Ne();
        gt(t, e, 134217728, n);
      }
      Ic(e, 134217728);
    }
  };
  zm = function(e) {
    if (e.tag === 13) {
      var t = gn(e), n = Yt(e, t);
      if (n !== null) {
        var r = Ne();
        gt(n, e, t, r);
      }
      Ic(e, t);
    }
  };
  Bm = function() {
    return Q;
  };
  Um = function(e, t) {
    var n = Q;
    try {
      return Q = e, t();
    } finally {
      Q = n;
    }
  };
  zl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ml(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Ks(r);
              if (!i)
                throw Error(_(90));
              Sm(r), Ml(r, i);
            }
          }
        }
        break;
      case "textarea":
        Tm(e, n);
        break;
      case "select":
        t = n.value, t != null && Rr(e, !!n.multiple, t, !1);
    }
  };
  Am = Dc;
  jm = er;
  var ES = { usingClientEntryPoint: !1, Events: [ao, Sr, Ks, _m, Om, Dc] }, li = { findFiberByHostInstance: Bn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, PS = { bundleType: li.bundleType, version: li.version, rendererPackageName: li.rendererPackageName, rendererConfig: li.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Xt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Lm(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: li.findFiberByHostInstance || xS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lo.isDisabled && Lo.supportsFiber)
      try {
        Bs = Lo.inject(PS), _t = Lo;
      } catch {
      }
  }
  et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ES;
  et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Bc(t))
      throw Error(_(200));
    return SS(e, t, null, n);
  };
  et.createRoot = function(e, t) {
    if (!Bc(e))
      throw Error(_(299));
    var n = !1, r = "", i = fv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = $c(e, 1, !1, null, null, n, !1, r, i), e[Gt] = t.current, zi(e.nodeType === 8 ? e.parentNode : e), new zc(t);
  };
  et.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = Lm(t), e = e === null ? null : e.stateNode, e;
  };
  et.flushSync = function(e) {
    return er(e);
  };
  et.hydrate = function(e, t, n) {
    if (!ta(t))
      throw Error(_(200));
    return na(null, e, t, !0, n);
  };
  et.hydrateRoot = function(e, t, n) {
    if (!Bc(e))
      throw Error(_(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = fv;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = cv(t, null, e, 1, n ?? null, i, !1, o, s), e[Gt] = t.current, zi(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new ea(t);
  };
  et.render = function(e, t, n) {
    if (!ta(t))
      throw Error(_(200));
    return na(null, e, t, !1, n);
  };
  et.unmountComponentAtNode = function(e) {
    if (!ta(e))
      throw Error(_(40));
    return e._reactRootContainer ? (er(function() {
      na(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Gt] = null;
      });
    }), !0) : !1;
  };
  et.unstable_batchedUpdates = Dc;
  et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ta(n))
      throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(_(38));
    return na(e, t, n, !1, r);
  };
  et.version = "18.3.1-next-f1338f8080-20240426";
  function dv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv);
      } catch (e) {
        console.error(e);
      }
  }
  dv(), dm.exports = et;
  var CS = dm.exports, Jd = CS;
  _l.createRoot = Jd.createRoot, _l.hydrateRoot = Jd.hydrateRoot;
  function or(e) {
    this._maxSize = e, this.clear();
  }
  or.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  };
  or.prototype.get = function(e) {
    return this._values[e];
  };
  or.prototype.set = function(e, t) {
    return this._size >= this._maxSize && this.clear(), e in this._values || this._size++, this._values[e] = t;
  };
  var kS = /[^.^\]^[]+|(?=\[\]|\.\.)/g, hv = /^\d+$/, _S = /^\d/, OS = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, AS = /^\s*(['"]?)(.*?)(\1)\s*$/, Uc = 512, eh = new or(Uc), th = new or(Uc), nh = new or(Uc), Yn = {
    Cache: or,
    split: Su,
    normalizePath: ol,
    setter: function(e) {
      var t = ol(e);
      return th.get(e) || th.set(e, function(r, i) {
        for (var o = 0, s = t.length, a = r; o < s - 1; ) {
          var l = t[o];
          if (l === "__proto__" || l === "constructor" || l === "prototype")
            return r;
          a = a[t[o++]];
        }
        a[t[o]] = i;
      });
    },
    getter: function(e, t) {
      var n = ol(e);
      return nh.get(e) || nh.set(e, function(i) {
        for (var o = 0, s = n.length; o < s; )
          if (i != null || !t)
            i = i[n[o++]];
          else
            return;
        return i;
      });
    },
    join: function(e) {
      return e.reduce(function(t, n) {
        return t + (Wc(n) || hv.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function(e, t, n) {
      jS(Array.isArray(e) ? e : Su(e), t, n);
    }
  };
  function ol(e) {
    return eh.get(e) || eh.set(
      e,
      Su(e).map(function(t) {
        return t.replace(AS, "$2");
      })
    );
  }
  function Su(e) {
    return e.match(kS) || [""];
  }
  function jS(e, t, n) {
    var r = e.length, i, o, s, a;
    for (o = 0; o < r; o++)
      i = e[o], i && (LS(i) && (i = '"' + i + '"'), a = Wc(i), s = !a && /^\d+$/.test(i), t.call(n, i, a, s, o, e));
  }
  function Wc(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function FS(e) {
    return e.match(_S) && !e.match(hv);
  }
  function RS(e) {
    return OS.test(e);
  }
  function LS(e) {
    return !Wc(e) && (FS(e) || RS(e));
  }
  const MS = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, ra = (e) => e.match(MS) || [], ia = (e) => e[0].toUpperCase() + e.slice(1), Hc = (e, t) => ra(e).join(t).toLowerCase(), pv = (e) => ra(e).reduce(
    (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
    ""
  ), DS = (e) => ia(pv(e)), bS = (e) => Hc(e, "_"), NS = (e) => Hc(e, "-"), VS = (e) => ia(Hc(e, " ")), $S = (e) => ra(e).map(ia).join(" ");
  var sl = {
    words: ra,
    upperFirst: ia,
    camelCase: pv,
    pascalCase: DS,
    snakeCase: bS,
    kebabCase: NS,
    sentenceCase: VS,
    titleCase: $S
  }, Kc = { exports: {} };
  Kc.exports = function(e) {
    return mv(IS(e), e);
  };
  Kc.exports.array = mv;
  function mv(e, t) {
    var n = e.length, r = new Array(n), i = {}, o = n, s = zS(t), a = BS(e);
    for (t.forEach(function(u) {
      if (!a.has(u[0]) || !a.has(u[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); o--; )
      i[o] || l(e[o], o, /* @__PURE__ */ new Set());
    return r;
    function l(u, c, f) {
      if (f.has(u)) {
        var d;
        try {
          d = ", node was:" + JSON.stringify(u);
        } catch {
          d = "";
        }
        throw new Error("Cyclic dependency" + d);
      }
      if (!a.has(u))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(u));
      if (!i[c]) {
        i[c] = !0;
        var y = s.get(u) || /* @__PURE__ */ new Set();
        if (y = Array.from(y), c = y.length) {
          f.add(u);
          do {
            var v = y[--c];
            l(v, a.get(v), f);
          } while (c);
          f.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function IS(e) {
    for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function zS(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function BS(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
      t.set(e[n], n);
    return t;
  }
  var US = Kc.exports;
  const WS = /* @__PURE__ */ Is(US), HS = Object.prototype.toString, KS = Error.prototype.toString, GS = RegExp.prototype.toString, YS = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", QS = /^Symbol\((.*)\)(.*)$/;
  function XS(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function rh(e, t = !1) {
    if (e == null || e === !0 || e === !1)
      return "" + e;
    const n = typeof e;
    if (n === "number")
      return XS(e);
    if (n === "string")
      return t ? `"${e}"` : e;
    if (n === "function")
      return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol")
      return YS.call(e).replace(QS, "Symbol($1)");
    const r = HS.call(e).slice(8, -1);
    return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + KS.call(e) + "]" : r === "RegExp" ? GS.call(e) : null;
  }
  function Sn(e, t) {
    let n = rh(e, t);
    return n !== null ? n : JSON.stringify(e, function(r, i) {
      let o = rh(this[r], t);
      return o !== null ? o : i;
    }, 2);
  }
  function yv(e) {
    return e == null ? [] : [].concat(e);
  }
  let vv, gv, wv, ZS = /\$\{\s*(\w+)\s*\}/g;
  vv = Symbol.toStringTag;
  class ih {
    constructor(t, n, r, i) {
      this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[vv] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], yv(t).forEach((o) => {
        if (Be.isError(o)) {
          this.errors.push(...o.errors);
          const s = o.inner.length ? o.inner : [o];
          this.inner.push(...s);
        } else
          this.errors.push(o);
      }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    }
  }
  gv = Symbol.hasInstance;
  wv = Symbol.toStringTag;
  class Be extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return r !== n.path && (n = Object.assign({}, n, {
        path: r
      })), typeof t == "string" ? t.replace(ZS, (i, o) => Sn(n[o])) : typeof t == "function" ? t(n) : t;
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i, o) {
      const s = new ih(t, n, r, i);
      if (o)
        return s;
      super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[wv] = "Error", this.name = s.name, this.message = s.message, this.type = s.type, this.value = s.value, this.path = s.path, this.errors = s.errors, this.inner = s.inner, Error.captureStackTrace && Error.captureStackTrace(this, Be);
    }
    static [gv](t) {
      return ih[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
    }
  }
  let Ct = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({
      path: e,
      type: t,
      value: n,
      originalValue: r
    }) => {
      const i = r != null && r !== n ? ` (cast from the value \`${Sn(r, !0)}\`).` : ".";
      return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Sn(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${Sn(n, !0)}\`` + i;
    }
  }, Ie = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    datetime: "${path} must be a valid ISO date-time",
    datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
    datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string"
  }, qS = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  }, xu = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  }, Tu = {
    isValue: "${path} field must be ${value}"
  }, Eu = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  }, JS = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  }, ex = {
    notType: (e) => {
      const {
        path: t,
        value: n,
        spec: r
      } = e, i = r.types.length;
      if (Array.isArray(n)) {
        if (n.length < i)
          return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Sn(n, !0)}\``;
        if (n.length > i)
          return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Sn(n, !0)}\``;
      }
      return Be.formatError(Ct.notType, e);
    }
  };
  Object.assign(/* @__PURE__ */ Object.create(null), {
    mixed: Ct,
    string: Ie,
    number: qS,
    date: xu,
    object: Eu,
    array: JS,
    boolean: Tu,
    tuple: ex
  });
  const Gc = (e) => e && e.__isYupSchema__;
  class _s {
    static fromOptions(t, n) {
      if (!n.then && !n.otherwise)
        throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
      let {
        is: r,
        then: i,
        otherwise: o
      } = n, s = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
      return new _s(t, (a, l) => {
        var u;
        let c = s(...a) ? i : o;
        return (u = c == null ? void 0 : c(l)) != null ? u : l;
      });
    }
    constructor(t, n) {
      this.fn = void 0, this.refs = t, this.refs = t, this.fn = n;
    }
    resolve(t, n) {
      let r = this.refs.map((o) => (
        // TODO: ? operator here?
        o.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
      )), i = this.fn(r, t, n);
      if (i === void 0 || // @ts-ignore this can be base
      i === t)
        return t;
      if (!Gc(i))
        throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const Mo = {
    context: "$",
    value: "."
  };
  class sr {
    constructor(t, n = {}) {
      if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
        throw new TypeError("ref must be a string, got: " + t);
      if (this.key = t.trim(), t === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === Mo.context, this.isValue = this.key[0] === Mo.value, this.isSibling = !this.isContext && !this.isValue;
      let r = this.isContext ? Mo.context : this.isValue ? Mo.value : "";
      this.path = this.key.slice(r.length), this.getter = this.path && Yn.getter(this.path, !0), this.map = n.map;
    }
    getValue(t, n, r) {
      let i = this.isContext ? r : this.isValue ? t : n;
      return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
    }
    /**
     *
     * @param {*} value
     * @param {Object} options
     * @param {Object=} options.context
     * @param {Object=} options.parent
     */
    cast(t, n) {
      return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context);
    }
    resolve() {
      return this;
    }
    describe() {
      return {
        type: "ref",
        key: this.key
      };
    }
    toString() {
      return `Ref(${this.key})`;
    }
    static isRef(t) {
      return t && t.__isYupRef;
    }
  }
  sr.prototype.__isYupRef = !0;
  const It = (e) => e == null;
  function pr(e) {
    function t({
      value: n,
      path: r = "",
      options: i,
      originalValue: o,
      schema: s
    }, a, l) {
      const {
        name: u,
        test: c,
        params: f,
        message: d,
        skipAbsent: y
      } = e;
      let {
        parent: v,
        context: g,
        abortEarly: T = s.spec.abortEarly,
        disableStackTrace: p = s.spec.disableStackTrace
      } = i;
      function h(z) {
        return sr.isRef(z) ? z.getValue(n, v, g) : z;
      }
      function m(z = {}) {
        const pe = Object.assign({
          value: n,
          originalValue: o,
          label: s.spec.label,
          path: z.path || r,
          spec: s.spec,
          disableStackTrace: z.disableStackTrace || p
        }, f, z.params);
        for (const L of Object.keys(pe))
          pe[L] = h(pe[L]);
        const se = new Be(Be.formatError(z.message || d, pe), n, pe.path, z.type || u, pe.disableStackTrace);
        return se.params = pe, se;
      }
      const w = T ? a : l;
      let P = {
        path: r,
        parent: v,
        type: u,
        from: i.from,
        createError: m,
        resolve: h,
        options: i,
        originalValue: o,
        schema: s
      };
      const E = (z) => {
        Be.isError(z) ? w(z) : z ? l(null) : w(m());
      }, C = (z) => {
        Be.isError(z) ? w(z) : a(z);
      };
      if (y && It(n))
        return E(!0);
      let b;
      try {
        var R;
        if (b = c.call(P, n, P), typeof ((R = b) == null ? void 0 : R.then) == "function") {
          if (i.sync)
            throw new Error(`Validation test of type: "${P.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
          return Promise.resolve(b).then(E, C);
        }
      } catch (z) {
        C(z);
        return;
      }
      E(b);
    }
    return t.OPTIONS = e, t;
  }
  function tx(e, t, n, r = n) {
    let i, o, s;
    return t ? (Yn.forEach(t, (a, l, u) => {
      let c = l ? a.slice(1, a.length - 1) : a;
      e = e.resolve({
        context: r,
        parent: i,
        value: n
      });
      let f = e.type === "tuple", d = u ? parseInt(c, 10) : 0;
      if (e.innerType || f) {
        if (f && !u)
          throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);
        if (n && d >= n.length)
          throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);
        i = n, n = n && n[d], e = f ? e.spec.types[d] : e.innerType;
      }
      if (!u) {
        if (!e.fields || !e.fields[c])
          throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);
        i = n, n = n && n[c], e = e.fields[c];
      }
      o = c, s = l ? "[" + a + "]" : "." + a;
    }), {
      schema: e,
      parent: i,
      parentPath: o
    }) : {
      parent: i,
      parentPath: t,
      schema: e
    };
  }
  class Os extends Set {
    describe() {
      const t = [];
      for (const n of this.values())
        t.push(sr.isRef(n) ? n.describe() : n);
      return t;
    }
    resolveAll(t) {
      let n = [];
      for (const r of this.values())
        n.push(t(r));
      return n;
    }
    clone() {
      return new Os(this.values());
    }
    merge(t, n) {
      const r = this.clone();
      return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
    }
  }
  function _r(e, t = /* @__PURE__ */ new Map()) {
    if (Gc(e) || !e || typeof e != "object")
      return e;
    if (t.has(e))
      return t.get(e);
    let n;
    if (e instanceof Date)
      n = new Date(e.getTime()), t.set(e, n);
    else if (e instanceof RegExp)
      n = new RegExp(e), t.set(e, n);
    else if (Array.isArray(e)) {
      n = new Array(e.length), t.set(e, n);
      for (let r = 0; r < e.length; r++)
        n[r] = _r(e[r], t);
    } else if (e instanceof Map) {
      n = /* @__PURE__ */ new Map(), t.set(e, n);
      for (const [r, i] of e.entries())
        n.set(r, _r(i, t));
    } else if (e instanceof Set) {
      n = /* @__PURE__ */ new Set(), t.set(e, n);
      for (const r of e)
        n.add(_r(r, t));
    } else if (e instanceof Object) {
      n = {}, t.set(e, n);
      for (const [r, i] of Object.entries(e))
        n[r] = _r(i, t);
    } else
      throw Error(`Unable to clone ${e}`);
    return n;
  }
  class St {
    constructor(t) {
      this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Os(), this._blacklist = new Os(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
        this.typeError(Ct.notType);
      }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
        strip: !1,
        strict: !1,
        abortEarly: !0,
        recursive: !0,
        disableStackTrace: !1,
        nullable: !1,
        optional: !0,
        coerce: !0
      }, t == null ? void 0 : t.spec), this.withMutation((n) => {
        n.nonNullable();
      });
    }
    // TODO: remove
    get _type() {
      return this.type;
    }
    clone(t) {
      if (this._mutate)
        return t && Object.assign(this.spec, t), this;
      const n = Object.create(Object.getPrototypeOf(this));
      return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = _r(Object.assign({}, this.spec, t)), n;
    }
    label(t) {
      let n = this.clone();
      return n.spec.label = t, n;
    }
    meta(...t) {
      if (t.length === 0)
        return this.spec.meta;
      let n = this.clone();
      return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n;
    }
    withMutation(t) {
      let n = this._mutate;
      this._mutate = !0;
      let r = t(this);
      return this._mutate = n, r;
    }
    concat(t) {
      if (!t || t === this)
        return this;
      if (t.type !== this.type && this.type !== "mixed")
        throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
      let n = this, r = t.clone();
      const i = Object.assign({}, n.spec, r.spec);
      return r.spec = i, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation((o) => {
        t.tests.forEach((s) => {
          o.test(s.OPTIONS);
        });
      }), r.transforms = [...n.transforms, ...r.transforms], r;
    }
    isType(t) {
      return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
    }
    resolve(t) {
      let n = this;
      if (n.conditions.length) {
        let r = n.conditions;
        n = n.clone(), n.conditions = [], n = r.reduce((i, o) => o.resolve(i, t), n), n = n.resolve(t);
      }
      return n;
    }
    resolveOptions(t) {
      var n, r, i, o;
      return Object.assign({}, t, {
        from: t.from || [],
        strict: (n = t.strict) != null ? n : this.spec.strict,
        abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
        recursive: (i = t.recursive) != null ? i : this.spec.recursive,
        disableStackTrace: (o = t.disableStackTrace) != null ? o : this.spec.disableStackTrace
      });
    }
    /**
     * Run the configured transform pipeline over an input value.
     */
    cast(t, n = {}) {
      let r = this.resolve(Object.assign({
        value: t
      }, n)), i = n.assert === "ignore-optionality", o = r._cast(t, n);
      if (n.assert !== !1 && !r.isType(o)) {
        if (i && It(o))
          return o;
        let s = Sn(t), a = Sn(o);
        throw new TypeError(`The value of ${n.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
` + (a !== s ? `result of cast: ${a}` : ""));
      }
      return o;
    }
    _cast(t, n) {
      let r = t === void 0 ? t : this.transforms.reduce((i, o) => o.call(this, i, t, this), t);
      return r === void 0 && (r = this.getDefault(n)), r;
    }
    _validate(t, n = {}, r, i) {
      let {
        path: o,
        originalValue: s = t,
        strict: a = this.spec.strict
      } = n, l = t;
      a || (l = this._cast(l, Object.assign({
        assert: !1
      }, n)));
      let u = [];
      for (let c of Object.values(this.internalTests))
        c && u.push(c);
      this.runTests({
        path: o,
        value: l,
        originalValue: s,
        options: n,
        tests: u
      }, r, (c) => {
        if (c.length)
          return i(c, l);
        this.runTests({
          path: o,
          value: l,
          originalValue: s,
          options: n,
          tests: this.tests
        }, r, i);
      });
    }
    /**
     * Executes a set of validations, either schema, produced Tests or a nested
     * schema validate result.
     */
    runTests(t, n, r) {
      let i = !1, {
        tests: o,
        value: s,
        originalValue: a,
        path: l,
        options: u
      } = t, c = (g) => {
        i || (i = !0, n(g, s));
      }, f = (g) => {
        i || (i = !0, r(g, s));
      }, d = o.length, y = [];
      if (!d)
        return f([]);
      let v = {
        value: s,
        originalValue: a,
        path: l,
        options: u,
        schema: this
      };
      for (let g = 0; g < o.length; g++) {
        const T = o[g];
        T(v, c, function(h) {
          h && (Array.isArray(h) ? y.push(...h) : y.push(h)), --d <= 0 && f(y);
        });
      }
    }
    asNestedTest({
      key: t,
      index: n,
      parent: r,
      parentPath: i,
      originalParent: o,
      options: s
    }) {
      const a = t ?? n;
      if (a == null)
        throw TypeError("Must include `key` or `index` for nested validations");
      const l = typeof a == "number";
      let u = r[a];
      const c = Object.assign({}, s, {
        // Nested validations fields are always strict:
        //    1. parent isn't strict so the casting will also have cast inner values
        //    2. parent is strict in which case the nested values weren't cast either
        strict: !0,
        parent: r,
        value: u,
        originalValue: o[a],
        // FIXME: tests depend on `index` being passed around deeply,
        //   we should not let the options.key/index bleed through
        key: void 0,
        // index: undefined,
        [l ? "index" : "key"]: a,
        path: l || a.includes(".") ? `${i || ""}[${l ? a : `"${a}"`}]` : (i ? `${i}.` : "") + t
      });
      return (f, d, y) => this.resolve(c)._validate(u, c, d, y);
    }
    validate(t, n) {
      var r;
      let i = this.resolve(Object.assign({}, n, {
        value: t
      })), o = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
      return new Promise((s, a) => i._validate(t, n, (l, u) => {
        Be.isError(l) && (l.value = u), a(l);
      }, (l, u) => {
        l.length ? a(new Be(l, u, void 0, void 0, o)) : s(u);
      }));
    }
    validateSync(t, n) {
      var r;
      let i = this.resolve(Object.assign({}, n, {
        value: t
      })), o, s = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
      return i._validate(t, Object.assign({}, n, {
        sync: !0
      }), (a, l) => {
        throw Be.isError(a) && (a.value = l), a;
      }, (a, l) => {
        if (a.length)
          throw new Be(a, t, void 0, void 0, s);
        o = l;
      }), o;
    }
    isValid(t, n) {
      return this.validate(t, n).then(() => !0, (r) => {
        if (Be.isError(r))
          return !1;
        throw r;
      });
    }
    isValidSync(t, n) {
      try {
        return this.validateSync(t, n), !0;
      } catch (r) {
        if (Be.isError(r))
          return !1;
        throw r;
      }
    }
    _getDefault(t) {
      let n = this.spec.default;
      return n == null ? n : typeof n == "function" ? n.call(this, t) : _r(n);
    }
    getDefault(t) {
      return this.resolve(t || {})._getDefault(t);
    }
    default(t) {
      return arguments.length === 0 ? this._getDefault() : this.clone({
        default: t
      });
    }
    strict(t = !0) {
      return this.clone({
        strict: t
      });
    }
    nullability(t, n) {
      const r = this.clone({
        nullable: t
      });
      return r.internalTests.nullable = pr({
        message: n,
        name: "nullable",
        test(i) {
          return i === null ? this.schema.spec.nullable : !0;
        }
      }), r;
    }
    optionality(t, n) {
      const r = this.clone({
        optional: t
      });
      return r.internalTests.optionality = pr({
        message: n,
        name: "optionality",
        test(i) {
          return i === void 0 ? this.schema.spec.optional : !0;
        }
      }), r;
    }
    optional() {
      return this.optionality(!0);
    }
    defined(t = Ct.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = Ct.notNull) {
      return this.nullability(!1, t);
    }
    required(t = Ct.required) {
      return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
    }
    notRequired() {
      return this.clone().withMutation((t) => t.nullable().optional());
    }
    transform(t) {
      let n = this.clone();
      return n.transforms.push(t), n;
    }
    /**
     * Adds a test function to the schema's queue of tests.
     * tests can be exclusive or non-exclusive.
     *
     * - exclusive tests, will replace any existing tests of the same name.
     * - non-exclusive: can be stacked
     *
     * If a non-exclusive test is added to a schema with an exclusive test of the same name
     * the exclusive test is removed and further tests of the same name will be stacked.
     *
     * If an exclusive test is added to a schema with non-exclusive tests of the same name
     * the previous tests are removed and further tests of the same name will replace each other.
     */
    test(...t) {
      let n;
      if (t.length === 1 ? typeof t[0] == "function" ? n = {
        test: t[0]
      } : n = t[0] : t.length === 2 ? n = {
        name: t[0],
        test: t[1]
      } : n = {
        name: t[0],
        message: t[1],
        test: t[2]
      }, n.message === void 0 && (n.message = Ct.default), typeof n.test != "function")
        throw new TypeError("`test` is a required parameters");
      let r = this.clone(), i = pr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
      if (n.exclusive && !n.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((s) => !(s.OPTIONS.name === n.name && (o || s.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
      let r = this.clone(), i = yv(t).map((o) => new sr(o));
      return i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }), r.conditions.push(typeof n == "function" ? new _s(i, n) : _s.fromOptions(i, n)), r;
    }
    typeError(t) {
      let n = this.clone();
      return n.internalTests.typeError = pr({
        message: t,
        name: "typeError",
        skipAbsent: !0,
        test(r) {
          return this.schema._typeCheck(r) ? !0 : this.createError({
            params: {
              type: this.schema.type
            }
          });
        }
      }), n;
    }
    oneOf(t, n = Ct.oneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._whitelist.add(i), r._blacklist.delete(i);
      }), r.internalTests.whiteList = pr({
        message: n,
        name: "oneOf",
        skipAbsent: !0,
        test(i) {
          let o = this.schema._whitelist, s = o.resolveAll(this.resolve);
          return s.includes(i) ? !0 : this.createError({
            params: {
              values: Array.from(o).join(", "),
              resolved: s
            }
          });
        }
      }), r;
    }
    notOneOf(t, n = Ct.notOneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._blacklist.add(i), r._whitelist.delete(i);
      }), r.internalTests.blacklist = pr({
        message: n,
        name: "notOneOf",
        test(i) {
          let o = this.schema._blacklist, s = o.resolveAll(this.resolve);
          return s.includes(i) ? this.createError({
            params: {
              values: Array.from(o).join(", "),
              resolved: s
            }
          }) : !0;
        }
      }), r;
    }
    strip(t = !0) {
      let n = this.clone();
      return n.spec.strip = t, n;
    }
    /**
     * Return a serialized description of the schema including validations, flags, types etc.
     *
     * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
     */
    describe(t) {
      const n = (t ? this.resolve(t) : this).clone(), {
        label: r,
        meta: i,
        optional: o,
        nullable: s
      } = n.spec;
      return {
        meta: i,
        label: r,
        optional: o,
        nullable: s,
        default: n.getDefault(t),
        type: n.type,
        oneOf: n._whitelist.describe(),
        notOneOf: n._blacklist.describe(),
        tests: n.tests.map((l) => ({
          name: l.OPTIONS.name,
          params: l.OPTIONS.params
        })).filter((l, u, c) => c.findIndex((f) => f.name === l.name) === u)
      };
    }
  }
  St.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    St.prototype[`${e}At`] = function(t, n, r = {}) {
      const {
        parent: i,
        parentPath: o,
        schema: s
      } = tx(this, t, n, r.context);
      return s[e](i && i[o], Object.assign({}, r, {
        parent: i,
        path: t
      }));
    };
  for (const e of ["equals", "is"])
    St.prototype[e] = St.prototype.oneOf;
  for (const e of ["not", "nope"])
    St.prototype[e] = St.prototype.notOneOf;
  function Sv() {
    return new xv();
  }
  class xv extends St {
    constructor() {
      super({
        type: "boolean",
        check(t) {
          return t instanceof Boolean && (t = t.valueOf()), typeof t == "boolean";
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => {
          if (r.spec.coerce && !r.isType(t)) {
            if (/^(true|1)$/i.test(String(t)))
              return !0;
            if (/^(false|0)$/i.test(String(t)))
              return !1;
          }
          return t;
        });
      });
    }
    isTrue(t = Tu.isValue) {
      return this.test({
        message: t,
        name: "is-value",
        exclusive: !0,
        params: {
          value: "true"
        },
        test(n) {
          return It(n) || n === !0;
        }
      });
    }
    isFalse(t = Tu.isValue) {
      return this.test({
        message: t,
        name: "is-value",
        exclusive: !0,
        params: {
          value: "false"
        },
        test(n) {
          return It(n) || n === !1;
        }
      });
    }
    default(t) {
      return super.default(t);
    }
    defined(t) {
      return super.defined(t);
    }
    optional() {
      return super.optional();
    }
    required(t) {
      return super.required(t);
    }
    notRequired() {
      return super.notRequired();
    }
    nullable() {
      return super.nullable();
    }
    nonNullable(t) {
      return super.nonNullable(t);
    }
    strip(t) {
      return super.strip(t);
    }
  }
  Sv.prototype = xv.prototype;
  const nx = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function rx(e) {
    const t = Pu(e);
    if (!t)
      return Date.parse ? Date.parse(e) : Number.NaN;
    if (t.z === void 0 && t.plusMinus === void 0)
      return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
    let n = 0;
    return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
  }
  function Pu(e) {
    var t, n;
    const r = nx.exec(e);
    return r ? {
      year: Mt(r[1]),
      month: Mt(r[2], 1) - 1,
      day: Mt(r[3], 1),
      hour: Mt(r[4]),
      minute: Mt(r[5]),
      second: Mt(r[6]),
      millisecond: r[7] ? (
        // allow arbitrary sub-second precision beyond milliseconds
        Mt(r[7].substring(0, 3))
      ) : 0,
      precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
      z: r[8] || void 0,
      plusMinus: r[9] || void 0,
      hourOffset: Mt(r[10]),
      minuteOffset: Mt(r[11])
    } : null;
  }
  function Mt(e, t = 0) {
    return Number(e) || t;
  }
  let ix = (
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ), ox = (
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  ), sx = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, ax = "^\\d{4}-\\d{2}-\\d{2}", lx = "\\d{2}:\\d{2}:\\d{2}", ux = "(([+-]\\d{2}(:?\\d{2})?)|Z)", cx = new RegExp(`${ax}T${lx}(\\.\\d+)?${ux}$`), fx = (e) => It(e) || e === e.trim(), dx = {}.toString();
  function Cu() {
    return new Tv();
  }
  class Tv extends St {
    constructor() {
      super({
        type: "string",
        check(t) {
          return t instanceof String && (t = t.valueOf()), typeof t == "string";
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => {
          if (!r.spec.coerce || r.isType(t) || Array.isArray(t))
            return t;
          const i = t != null && t.toString ? t.toString() : t;
          return i === dx ? t : i;
        });
      });
    }
    required(t) {
      return super.required(t).withMutation((n) => n.test({
        message: t || Ct.required,
        name: "required",
        skipAbsent: !0,
        test: (r) => !!r.length
      }));
    }
    notRequired() {
      return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
    }
    length(t, n = Ie.length) {
      return this.test({
        message: n,
        name: "length",
        exclusive: !0,
        params: {
          length: t
        },
        skipAbsent: !0,
        test(r) {
          return r.length === this.resolve(t);
        }
      });
    }
    min(t, n = Ie.min) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          min: t
        },
        skipAbsent: !0,
        test(r) {
          return r.length >= this.resolve(t);
        }
      });
    }
    max(t, n = Ie.max) {
      return this.test({
        name: "max",
        exclusive: !0,
        message: n,
        params: {
          max: t
        },
        skipAbsent: !0,
        test(r) {
          return r.length <= this.resolve(t);
        }
      });
    }
    matches(t, n) {
      let r = !1, i, o;
      return n && (typeof n == "object" ? {
        excludeEmptyString: r = !1,
        message: i,
        name: o
      } = n : i = n), this.test({
        name: o || "matches",
        message: i || Ie.matches,
        params: {
          regex: t
        },
        skipAbsent: !0,
        test: (s) => s === "" && r || s.search(t) !== -1
      });
    }
    email(t = Ie.email) {
      return this.matches(ix, {
        name: "email",
        message: t,
        excludeEmptyString: !0
      });
    }
    url(t = Ie.url) {
      return this.matches(ox, {
        name: "url",
        message: t,
        excludeEmptyString: !0
      });
    }
    uuid(t = Ie.uuid) {
      return this.matches(sx, {
        name: "uuid",
        message: t,
        excludeEmptyString: !1
      });
    }
    datetime(t) {
      let n = "", r, i;
      return t && (typeof t == "object" ? {
        message: n = "",
        allowOffset: r = !1,
        precision: i = void 0
      } = t : n = t), this.matches(cx, {
        name: "datetime",
        message: n || Ie.datetime,
        excludeEmptyString: !0
      }).test({
        name: "datetime_offset",
        message: n || Ie.datetime_offset,
        params: {
          allowOffset: r
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || r)
            return !0;
          const s = Pu(o);
          return s ? !!s.z : !1;
        }
      }).test({
        name: "datetime_precision",
        message: n || Ie.datetime_precision,
        params: {
          precision: i
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || i == null)
            return !0;
          const s = Pu(o);
          return s ? s.precision === i : !1;
        }
      });
    }
    //-- transforms --
    ensure() {
      return this.default("").transform((t) => t === null ? "" : t);
    }
    trim(t = Ie.trim) {
      return this.transform((n) => n != null ? n.trim() : n).test({
        message: t,
        name: "trim",
        test: fx
      });
    }
    lowercase(t = Ie.lowercase) {
      return this.transform((n) => It(n) ? n : n.toLowerCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => It(n) || n === n.toLowerCase()
      });
    }
    uppercase(t = Ie.uppercase) {
      return this.transform((n) => It(n) ? n : n.toUpperCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => It(n) || n === n.toUpperCase()
      });
    }
  }
  Cu.prototype = Tv.prototype;
  let hx = /* @__PURE__ */ new Date(""), px = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class oa extends St {
    constructor() {
      super({
        type: "date",
        check(t) {
          return px(t) && !isNaN(t.getTime());
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = rx(t), isNaN(t) ? oa.INVALID_DATE : new Date(t)));
      });
    }
    prepareParam(t, n) {
      let r;
      if (sr.isRef(t))
        r = t;
      else {
        let i = this.cast(t);
        if (!this._typeCheck(i))
          throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
        r = i;
      }
      return r;
    }
    min(t, n = xu.min) {
      let r = this.prepareParam(t, "min");
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          min: t
        },
        skipAbsent: !0,
        test(i) {
          return i >= this.resolve(r);
        }
      });
    }
    max(t, n = xu.max) {
      let r = this.prepareParam(t, "max");
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: {
          max: t
        },
        skipAbsent: !0,
        test(i) {
          return i <= this.resolve(r);
        }
      });
    }
  }
  oa.INVALID_DATE = hx;
  oa.prototype;
  function mx(e, t = []) {
    let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, a]) => `${s}-${a}`));
    function o(s, a) {
      let l = Yn.split(s)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const s of Object.keys(e)) {
      let a = e[s];
      r.add(s), sr.isRef(a) && a.isSibling ? o(a.path, s) : Gc(a) && "deps" in a && a.deps.forEach((l) => o(l, s));
    }
    return WS.array(Array.from(r), n).reverse();
  }
  function oh(e, t) {
    let n = 1 / 0;
    return e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r))
        return n = i, !0;
    }), n;
  }
  function Ev(e) {
    return (t, n) => oh(e, t) - oh(e, n);
  }
  const yx = (e, t, n) => {
    if (typeof e != "string")
      return e;
    let r = e;
    try {
      r = JSON.parse(e);
    } catch {
    }
    return n.isType(r) ? r : e;
  };
  function qo(e) {
    if ("fields" in e) {
      const t = {};
      for (const [n, r] of Object.entries(e.fields))
        t[n] = qo(r);
      return e.setFields(t);
    }
    if (e.type === "array") {
      const t = e.optional();
      return t.innerType && (t.innerType = qo(t.innerType)), t;
    }
    return e.type === "tuple" ? e.optional().clone({
      types: e.spec.types.map(qo)
    }) : "optional" in e ? e.optional() : e;
  }
  const vx = (e, t) => {
    const n = [...Yn.normalizePath(t)];
    if (n.length === 1)
      return n[0] in e;
    let r = n.pop(), i = Yn.getter(Yn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let sh = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function gx(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const wx = Ev([]);
  function Pv(e) {
    return new Cv(e);
  }
  class Cv extends St {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return sh(n) || typeof n == "function";
        }
      }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = wx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
        t && this.shape(t);
      });
    }
    _cast(t, n = {}) {
      var r;
      let i = super._cast(t, n);
      if (i === void 0)
        return this.getDefault(n);
      if (!this._typeCheck(i))
        return i;
      let o = this.fields, s = (r = n.stripUnknown) != null ? r : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(i).filter((f) => !this._nodes.includes(f))), l = {}, u = Object.assign({}, n, {
        parent: l,
        __validating: n.__validating || !1
      }), c = !1;
      for (const f of a) {
        let d = o[f], y = f in i;
        if (d) {
          let v, g = i[f];
          u.path = (n.path ? `${n.path}.` : "") + f, d = d.resolve({
            value: g,
            context: n.context,
            parent: l
          });
          let T = d instanceof St ? d.spec : void 0, p = T == null ? void 0 : T.strict;
          if (T != null && T.strip) {
            c = c || f in i;
            continue;
          }
          v = !n.__validating || !p ? (
            // TODO: use _cast, this is double resolving
            d.cast(i[f], u)
          ) : i[f], v !== void 0 && (l[f] = v);
        } else
          y && !s && (l[f] = i[f]);
        (y !== f in l || l[f] !== i[f]) && (c = !0);
      }
      return c ? l : i;
    }
    _validate(t, n = {}, r, i) {
      let {
        from: o = [],
        originalValue: s = t,
        recursive: a = this.spec.recursive
      } = n;
      n.from = [{
        schema: this,
        value: s
      }, ...o], n.__validating = !0, n.originalValue = s, super._validate(t, n, r, (l, u) => {
        if (!a || !sh(u)) {
          i(l, u);
          return;
        }
        s = s || u;
        let c = [];
        for (let f of this._nodes) {
          let d = this.fields[f];
          !d || sr.isRef(d) || c.push(d.asNestedTest({
            options: n,
            key: f,
            parent: u,
            parentPath: n.path,
            originalParent: s
          }));
        }
        this.runTests({
          tests: c,
          value: u,
          originalValue: s,
          options: n
        }, r, (f) => {
          i(f.sort(this._sortErrors).concat(l), u);
        });
      });
    }
    clone(t) {
      const n = super.clone(t);
      return n.fields = Object.assign({}, this.fields), n._nodes = this._nodes, n._excludedEdges = this._excludedEdges, n._sortErrors = this._sortErrors, n;
    }
    concat(t) {
      let n = super.concat(t), r = n.fields;
      for (let [i, o] of Object.entries(this.fields)) {
        const s = r[i];
        r[i] = s === void 0 ? o : s;
      }
      return n.withMutation((i) => (
        // XXX: excludes here is wrong
        i.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
      ));
    }
    _getDefault(t) {
      if ("default" in this.spec)
        return super._getDefault(t);
      if (!this._nodes.length)
        return;
      let n = {};
      return this._nodes.forEach((r) => {
        var i;
        const o = this.fields[r];
        let s = t;
        (i = s) != null && i.value && (s = Object.assign({}, s, {
          parent: s.value,
          value: s.value[r]
        })), n[r] = o && "getDefault" in o ? o.getDefault(s) : void 0;
      }), n;
    }
    setFields(t, n) {
      let r = this.clone();
      return r.fields = t, r._nodes = mx(t, n), r._sortErrors = Ev(Object.keys(t)), n && (r._excludedEdges = n), r;
    }
    shape(t, n = []) {
      return this.clone().withMutation((r) => {
        let i = r._excludedEdges;
        return n.length && (Array.isArray(n[0]) || (n = [n]), i = [...r._excludedEdges, ...n]), r.setFields(Object.assign(r.fields, t), i);
      });
    }
    partial() {
      const t = {};
      for (const [n, r] of Object.entries(this.fields))
        t[n] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
      return this.setFields(t);
    }
    deepPartial() {
      return qo(this);
    }
    pick(t) {
      const n = {};
      for (const r of t)
        this.fields[r] && (n[r] = this.fields[r]);
      return this.setFields(n, this._excludedEdges.filter(([r, i]) => t.includes(r) && t.includes(i)));
    }
    omit(t) {
      const n = [];
      for (const r of Object.keys(this.fields))
        t.includes(r) || n.push(r);
      return this.pick(n);
    }
    from(t, n, r) {
      let i = Yn.getter(t, !0);
      return this.transform((o) => {
        if (!o)
          return o;
        let s = o;
        return vx(o, t) && (s = Object.assign({}, o), r || delete s[t], s[n] = i(o)), s;
      });
    }
    /** Parse an input JSON string to an object */
    json() {
      return this.transform(yx);
    }
    noUnknown(t = !0, n = Eu.noUnknown) {
      typeof t != "boolean" && (n = t, t = !0);
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null)
            return !0;
          const o = gx(this.schema, i);
          return !t || o.length === 0 || this.createError({
            params: {
              unknown: o.join(", ")
            }
          });
        }
      });
      return r.spec.noUnknown = t, r;
    }
    unknown(t = !0, n = Eu.noUnknown) {
      return this.noUnknown(!t, n);
    }
    transformKeys(t) {
      return this.transform((n) => {
        if (!n)
          return n;
        const r = {};
        for (const i of Object.keys(n))
          r[t(i)] = n[i];
        return r;
      });
    }
    camelCase() {
      return this.transformKeys(sl.camelCase);
    }
    snakeCase() {
      return this.transformKeys(sl.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => sl.snakeCase(t).toUpperCase());
    }
    describe(t) {
      const n = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
      r.fields = {};
      for (const [o, s] of Object.entries(n.fields)) {
        var i;
        let a = t;
        (i = a) != null && i.value && (a = Object.assign({}, a, {
          parent: a.value,
          value: a.value[o]
        })), r.fields[o] = s.describe(a);
      }
      return r;
    }
  }
  Pv.prototype = Cv.prototype;
  const Sx = Pv({
    area: Cu().required("This field is required"),
    //lastName: Yup.string().required('This custom field is required'),
    //age: Yup.number().min(0).positive().max(125).required('This field is required'),
    email: Cu().email(),
    useSlack: Sv().oneOf([!0], "Testing checkbox validation")
  });
  var xx = function(t) {
    return Tx(t) && !Ex(t);
  };
  function Tx(e) {
    return !!e && typeof e == "object";
  }
  function Ex(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || kx(e);
  }
  var Px = typeof Symbol == "function" && Symbol.for, Cx = Px ? Symbol.for("react.element") : 60103;
  function kx(e) {
    return e.$$typeof === Cx;
  }
  function _x(e) {
    return Array.isArray(e) ? [] : {};
  }
  function As(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Xi(_x(e), e, t) : e;
  }
  function Ox(e, t, n) {
    return e.concat(t).map(function(r) {
      return As(r, n);
    });
  }
  function Ax(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Object.keys(e).forEach(function(i) {
      r[i] = As(e[i], n);
    }), Object.keys(t).forEach(function(i) {
      !n.isMergeableObject(t[i]) || !e[i] ? r[i] = As(t[i], n) : r[i] = Xi(e[i], t[i], n);
    }), r;
  }
  function Xi(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || Ox, n.isMergeableObject = n.isMergeableObject || xx;
    var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : Ax(e, t, n) : As(t, n);
  }
  Xi.all = function(t, n) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
      return Xi(r, i, n);
    }, {});
  };
  var ku = Xi, kv = typeof global == "object" && global && global.Object === Object && global, jx = typeof self == "object" && self && self.Object === Object && self, Rt = kv || jx || Function("return this")(), Cn = Rt.Symbol, _v = Object.prototype, Fx = _v.hasOwnProperty, Rx = _v.toString, ui = Cn ? Cn.toStringTag : void 0;
  function Lx(e) {
    var t = Fx.call(e, ui), n = e[ui];
    try {
      e[ui] = void 0;
      var r = !0;
    } catch {
    }
    var i = Rx.call(e);
    return r && (t ? e[ui] = n : delete e[ui]), i;
  }
  var Mx = Object.prototype, Dx = Mx.toString;
  function bx(e) {
    return Dx.call(e);
  }
  var Nx = "[object Null]", Vx = "[object Undefined]", ah = Cn ? Cn.toStringTag : void 0;
  function ar(e) {
    return e == null ? e === void 0 ? Vx : Nx : ah && ah in Object(e) ? Lx(e) : bx(e);
  }
  function Ov(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Yc = Ov(Object.getPrototypeOf, Object);
  function lr(e) {
    return e != null && typeof e == "object";
  }
  var $x = "[object Object]", Ix = Function.prototype, zx = Object.prototype, Av = Ix.toString, Bx = zx.hasOwnProperty, Ux = Av.call(Object);
  function lh(e) {
    if (!lr(e) || ar(e) != $x)
      return !1;
    var t = Yc(e);
    if (t === null)
      return !0;
    var n = Bx.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Av.call(n) == Ux;
  }
  function Wx() {
    this.__data__ = [], this.size = 0;
  }
  function jv(e, t) {
    return e === t || e !== e && t !== t;
  }
  function sa(e, t) {
    for (var n = e.length; n--; )
      if (jv(e[n][0], t))
        return n;
    return -1;
  }
  var Hx = Array.prototype, Kx = Hx.splice;
  function Gx(e) {
    var t = this.__data__, n = sa(t, e);
    if (n < 0)
      return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Kx.call(t, n, 1), --this.size, !0;
  }
  function Yx(e) {
    var t = this.__data__, n = sa(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Qx(e) {
    return sa(this.__data__, e) > -1;
  }
  function Xx(e, t) {
    var n = this.__data__, r = sa(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
  }
  function Zt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Zt.prototype.clear = Wx;
  Zt.prototype.delete = Gx;
  Zt.prototype.get = Yx;
  Zt.prototype.has = Qx;
  Zt.prototype.set = Xx;
  function Zx() {
    this.__data__ = new Zt(), this.size = 0;
  }
  function qx(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Jx(e) {
    return this.__data__.get(e);
  }
  function eT(e) {
    return this.__data__.has(e);
  }
  function uo(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var tT = "[object AsyncFunction]", nT = "[object Function]", rT = "[object GeneratorFunction]", iT = "[object Proxy]";
  function Fv(e) {
    if (!uo(e))
      return !1;
    var t = ar(e);
    return t == nT || t == rT || t == tT || t == iT;
  }
  var al = Rt["__core-js_shared__"], uh = function() {
    var e = /[^.]+$/.exec(al && al.keys && al.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function oT(e) {
    return !!uh && uh in e;
  }
  var sT = Function.prototype, aT = sT.toString;
  function ur(e) {
    if (e != null) {
      try {
        return aT.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var lT = /[\\^$.*+?()[\]{}|]/g, uT = /^\[object .+?Constructor\]$/, cT = Function.prototype, fT = Object.prototype, dT = cT.toString, hT = fT.hasOwnProperty, pT = RegExp(
    "^" + dT.call(hT).replace(lT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function mT(e) {
    if (!uo(e) || oT(e))
      return !1;
    var t = Fv(e) ? pT : uT;
    return t.test(ur(e));
  }
  function yT(e, t) {
    return e == null ? void 0 : e[t];
  }
  function cr(e, t) {
    var n = yT(e, t);
    return mT(n) ? n : void 0;
  }
  var Zi = cr(Rt, "Map"), qi = cr(Object, "create");
  function vT() {
    this.__data__ = qi ? qi(null) : {}, this.size = 0;
  }
  function gT(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var wT = "__lodash_hash_undefined__", ST = Object.prototype, xT = ST.hasOwnProperty;
  function TT(e) {
    var t = this.__data__;
    if (qi) {
      var n = t[e];
      return n === wT ? void 0 : n;
    }
    return xT.call(t, e) ? t[e] : void 0;
  }
  var ET = Object.prototype, PT = ET.hasOwnProperty;
  function CT(e) {
    var t = this.__data__;
    return qi ? t[e] !== void 0 : PT.call(t, e);
  }
  var kT = "__lodash_hash_undefined__";
  function _T(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = qi && t === void 0 ? kT : t, this;
  }
  function tr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  tr.prototype.clear = vT;
  tr.prototype.delete = gT;
  tr.prototype.get = TT;
  tr.prototype.has = CT;
  tr.prototype.set = _T;
  function OT() {
    this.size = 0, this.__data__ = {
      hash: new tr(),
      map: new (Zi || Zt)(),
      string: new tr()
    };
  }
  function AT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function aa(e, t) {
    var n = e.__data__;
    return AT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function jT(e) {
    var t = aa(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function FT(e) {
    return aa(this, e).get(e);
  }
  function RT(e) {
    return aa(this, e).has(e);
  }
  function LT(e, t) {
    var n = aa(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function Rn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Rn.prototype.clear = OT;
  Rn.prototype.delete = jT;
  Rn.prototype.get = FT;
  Rn.prototype.has = RT;
  Rn.prototype.set = LT;
  var MT = 200;
  function DT(e, t) {
    var n = this.__data__;
    if (n instanceof Zt) {
      var r = n.__data__;
      if (!Zi || r.length < MT - 1)
        return r.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new Rn(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function qr(e) {
    var t = this.__data__ = new Zt(e);
    this.size = t.size;
  }
  qr.prototype.clear = Zx;
  qr.prototype.delete = qx;
  qr.prototype.get = Jx;
  qr.prototype.has = eT;
  qr.prototype.set = DT;
  function bT(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  var ch = function() {
    try {
      var e = cr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  function Rv(e, t, n) {
    t == "__proto__" && ch ? ch(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }
  var NT = Object.prototype, VT = NT.hasOwnProperty;
  function Lv(e, t, n) {
    var r = e[t];
    (!(VT.call(e, t) && jv(r, n)) || n === void 0 && !(t in e)) && Rv(e, t, n);
  }
  function la(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = void 0;
      l === void 0 && (l = e[a]), i ? Rv(n, a, l) : Lv(n, a, l);
    }
    return n;
  }
  function $T(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var IT = "[object Arguments]";
  function fh(e) {
    return lr(e) && ar(e) == IT;
  }
  var Mv = Object.prototype, zT = Mv.hasOwnProperty, BT = Mv.propertyIsEnumerable, UT = fh(/* @__PURE__ */ function() {
    return arguments;
  }()) ? fh : function(e) {
    return lr(e) && zT.call(e, "callee") && !BT.call(e, "callee");
  }, co = Array.isArray;
  function WT() {
    return !1;
  }
  var Dv = typeof Qe == "object" && Qe && !Qe.nodeType && Qe, dh = Dv && typeof Xe == "object" && Xe && !Xe.nodeType && Xe, HT = dh && dh.exports === Dv, hh = HT ? Rt.Buffer : void 0, KT = hh ? hh.isBuffer : void 0, bv = KT || WT, GT = 9007199254740991, YT = /^(?:0|[1-9]\d*)$/;
  function QT(e, t) {
    var n = typeof e;
    return t = t ?? GT, !!t && (n == "number" || n != "symbol" && YT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var XT = 9007199254740991;
  function Nv(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XT;
  }
  var ZT = "[object Arguments]", qT = "[object Array]", JT = "[object Boolean]", eE = "[object Date]", tE = "[object Error]", nE = "[object Function]", rE = "[object Map]", iE = "[object Number]", oE = "[object Object]", sE = "[object RegExp]", aE = "[object Set]", lE = "[object String]", uE = "[object WeakMap]", cE = "[object ArrayBuffer]", fE = "[object DataView]", dE = "[object Float32Array]", hE = "[object Float64Array]", pE = "[object Int8Array]", mE = "[object Int16Array]", yE = "[object Int32Array]", vE = "[object Uint8Array]", gE = "[object Uint8ClampedArray]", wE = "[object Uint16Array]", SE = "[object Uint32Array]", ie = {};
  ie[dE] = ie[hE] = ie[pE] = ie[mE] = ie[yE] = ie[vE] = ie[gE] = ie[wE] = ie[SE] = !0;
  ie[ZT] = ie[qT] = ie[cE] = ie[JT] = ie[fE] = ie[eE] = ie[tE] = ie[nE] = ie[rE] = ie[iE] = ie[oE] = ie[sE] = ie[aE] = ie[lE] = ie[uE] = !1;
  function xE(e) {
    return lr(e) && Nv(e.length) && !!ie[ar(e)];
  }
  function Qc(e) {
    return function(t) {
      return e(t);
    };
  }
  var Vv = typeof Qe == "object" && Qe && !Qe.nodeType && Qe, _i = Vv && typeof Xe == "object" && Xe && !Xe.nodeType && Xe, TE = _i && _i.exports === Vv, ll = TE && kv.process, Kr = function() {
    try {
      var e = _i && _i.require && _i.require("util").types;
      return e || ll && ll.binding && ll.binding("util");
    } catch {
    }
  }(), ph = Kr && Kr.isTypedArray, EE = ph ? Qc(ph) : xE, PE = Object.prototype, CE = PE.hasOwnProperty;
  function $v(e, t) {
    var n = co(e), r = !n && UT(e), i = !n && !r && bv(e), o = !n && !r && !i && EE(e), s = n || r || i || o, a = s ? $T(e.length, String) : [], l = a.length;
    for (var u in e)
      (t || CE.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      QT(u, l))) && a.push(u);
    return a;
  }
  var kE = Object.prototype;
  function Xc(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || kE;
    return e === n;
  }
  var _E = Ov(Object.keys, Object), OE = Object.prototype, AE = OE.hasOwnProperty;
  function jE(e) {
    if (!Xc(e))
      return _E(e);
    var t = [];
    for (var n in Object(e))
      AE.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function Iv(e) {
    return e != null && Nv(e.length) && !Fv(e);
  }
  function Zc(e) {
    return Iv(e) ? $v(e) : jE(e);
  }
  function FE(e, t) {
    return e && la(t, Zc(t), e);
  }
  function RE(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  var LE = Object.prototype, ME = LE.hasOwnProperty;
  function DE(e) {
    if (!uo(e))
      return RE(e);
    var t = Xc(e), n = [];
    for (var r in e)
      r == "constructor" && (t || !ME.call(e, r)) || n.push(r);
    return n;
  }
  function qc(e) {
    return Iv(e) ? $v(e, !0) : DE(e);
  }
  function bE(e, t) {
    return e && la(t, qc(t), e);
  }
  var zv = typeof Qe == "object" && Qe && !Qe.nodeType && Qe, mh = zv && typeof Xe == "object" && Xe && !Xe.nodeType && Xe, NE = mh && mh.exports === zv, yh = NE ? Rt.Buffer : void 0, vh = yh ? yh.allocUnsafe : void 0;
  function VE(e, t) {
    if (t)
      return e.slice();
    var n = e.length, r = vh ? vh(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function Bv(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  function $E(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (o[i++] = s);
    }
    return o;
  }
  function Uv() {
    return [];
  }
  var IE = Object.prototype, zE = IE.propertyIsEnumerable, gh = Object.getOwnPropertySymbols, Jc = gh ? function(e) {
    return e == null ? [] : (e = Object(e), $E(gh(e), function(t) {
      return zE.call(e, t);
    }));
  } : Uv;
  function BE(e, t) {
    return la(e, Jc(e), t);
  }
  function Wv(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
      e[i + n] = t[n];
    return e;
  }
  var UE = Object.getOwnPropertySymbols, Hv = UE ? function(e) {
    for (var t = []; e; )
      Wv(t, Jc(e)), e = Yc(e);
    return t;
  } : Uv;
  function WE(e, t) {
    return la(e, Hv(e), t);
  }
  function Kv(e, t, n) {
    var r = t(e);
    return co(e) ? r : Wv(r, n(e));
  }
  function HE(e) {
    return Kv(e, Zc, Jc);
  }
  function KE(e) {
    return Kv(e, qc, Hv);
  }
  var _u = cr(Rt, "DataView"), Ou = cr(Rt, "Promise"), Au = cr(Rt, "Set"), ju = cr(Rt, "WeakMap"), wh = "[object Map]", GE = "[object Object]", Sh = "[object Promise]", xh = "[object Set]", Th = "[object WeakMap]", Eh = "[object DataView]", YE = ur(_u), QE = ur(Zi), XE = ur(Ou), ZE = ur(Au), qE = ur(ju), Nt = ar;
  (_u && Nt(new _u(new ArrayBuffer(1))) != Eh || Zi && Nt(new Zi()) != wh || Ou && Nt(Ou.resolve()) != Sh || Au && Nt(new Au()) != xh || ju && Nt(new ju()) != Th) && (Nt = function(e) {
    var t = ar(e), n = t == GE ? e.constructor : void 0, r = n ? ur(n) : "";
    if (r)
      switch (r) {
        case YE:
          return Eh;
        case QE:
          return wh;
        case XE:
          return Sh;
        case ZE:
          return xh;
        case qE:
          return Th;
      }
    return t;
  });
  var JE = Object.prototype, eP = JE.hasOwnProperty;
  function tP(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && eP.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var Ph = Rt.Uint8Array;
  function ef(e) {
    var t = new e.constructor(e.byteLength);
    return new Ph(t).set(new Ph(e)), t;
  }
  function nP(e, t) {
    var n = t ? ef(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var rP = /\w*$/;
  function iP(e) {
    var t = new e.constructor(e.source, rP.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var Ch = Cn ? Cn.prototype : void 0, kh = Ch ? Ch.valueOf : void 0;
  function oP(e) {
    return kh ? Object(kh.call(e)) : {};
  }
  function sP(e, t) {
    var n = t ? ef(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var aP = "[object Boolean]", lP = "[object Date]", uP = "[object Map]", cP = "[object Number]", fP = "[object RegExp]", dP = "[object Set]", hP = "[object String]", pP = "[object Symbol]", mP = "[object ArrayBuffer]", yP = "[object DataView]", vP = "[object Float32Array]", gP = "[object Float64Array]", wP = "[object Int8Array]", SP = "[object Int16Array]", xP = "[object Int32Array]", TP = "[object Uint8Array]", EP = "[object Uint8ClampedArray]", PP = "[object Uint16Array]", CP = "[object Uint32Array]";
  function kP(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case mP:
        return ef(e);
      case aP:
      case lP:
        return new r(+e);
      case yP:
        return nP(e, n);
      case vP:
      case gP:
      case wP:
      case SP:
      case xP:
      case TP:
      case EP:
      case PP:
      case CP:
        return sP(e, n);
      case uP:
        return new r();
      case cP:
      case hP:
        return new r(e);
      case fP:
        return iP(e);
      case dP:
        return new r();
      case pP:
        return oP(e);
    }
  }
  var _h = Object.create, _P = /* @__PURE__ */ function() {
    function e() {
    }
    return function(t) {
      if (!uo(t))
        return {};
      if (_h)
        return _h(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }();
  function OP(e) {
    return typeof e.constructor == "function" && !Xc(e) ? _P(Yc(e)) : {};
  }
  var AP = "[object Map]";
  function jP(e) {
    return lr(e) && Nt(e) == AP;
  }
  var Oh = Kr && Kr.isMap, FP = Oh ? Qc(Oh) : jP, RP = "[object Set]";
  function LP(e) {
    return lr(e) && Nt(e) == RP;
  }
  var Ah = Kr && Kr.isSet, MP = Ah ? Qc(Ah) : LP, DP = 1, bP = 2, NP = 4, Gv = "[object Arguments]", VP = "[object Array]", $P = "[object Boolean]", IP = "[object Date]", zP = "[object Error]", Yv = "[object Function]", BP = "[object GeneratorFunction]", UP = "[object Map]", WP = "[object Number]", Qv = "[object Object]", HP = "[object RegExp]", KP = "[object Set]", GP = "[object String]", YP = "[object Symbol]", QP = "[object WeakMap]", XP = "[object ArrayBuffer]", ZP = "[object DataView]", qP = "[object Float32Array]", JP = "[object Float64Array]", eC = "[object Int8Array]", tC = "[object Int16Array]", nC = "[object Int32Array]", rC = "[object Uint8Array]", iC = "[object Uint8ClampedArray]", oC = "[object Uint16Array]", sC = "[object Uint32Array]", ee = {};
  ee[Gv] = ee[VP] = ee[XP] = ee[ZP] = ee[$P] = ee[IP] = ee[qP] = ee[JP] = ee[eC] = ee[tC] = ee[nC] = ee[UP] = ee[WP] = ee[Qv] = ee[HP] = ee[KP] = ee[GP] = ee[YP] = ee[rC] = ee[iC] = ee[oC] = ee[sC] = !0;
  ee[zP] = ee[Yv] = ee[QP] = !1;
  function Oi(e, t, n, r, i, o) {
    var s, a = t & DP, l = t & bP, u = t & NP;
    if (s !== void 0)
      return s;
    if (!uo(e))
      return e;
    var c = co(e);
    if (c) {
      if (s = tP(e), !a)
        return Bv(e, s);
    } else {
      var f = Nt(e), d = f == Yv || f == BP;
      if (bv(e))
        return VE(e, a);
      if (f == Qv || f == Gv || d && !i) {
        if (s = l || d ? {} : OP(e), !a)
          return l ? WE(e, bE(s, e)) : BE(e, FE(s, e));
      } else {
        if (!ee[f])
          return i ? e : {};
        s = kP(e, f, a);
      }
    }
    o || (o = new qr());
    var y = o.get(e);
    if (y)
      return y;
    o.set(e, s), MP(e) ? e.forEach(function(T) {
      s.add(Oi(T, t, n, T, e, o));
    }) : FP(e) && e.forEach(function(T, p) {
      s.set(p, Oi(T, t, n, p, e, o));
    });
    var v = u ? l ? KE : HE : l ? qc : Zc, g = c ? void 0 : v(e);
    return bT(g || e, function(T, p) {
      g && (p = T, T = e[p]), Lv(s, p, Oi(T, t, n, p, e, o));
    }), s;
  }
  var aC = 1, lC = 4;
  function yi(e) {
    return Oi(e, aC | lC);
  }
  var jh = Array.isArray, Fh = Object.keys, uC = Object.prototype.hasOwnProperty, cC = typeof Element < "u";
  function Fu(e, t) {
    if (e === t)
      return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = jh(e), r = jh(t), i, o, s;
      if (n && r) {
        if (o = e.length, o != t.length)
          return !1;
        for (i = o; i-- !== 0; )
          if (!Fu(e[i], t[i]))
            return !1;
        return !0;
      }
      if (n != r)
        return !1;
      var a = e instanceof Date, l = t instanceof Date;
      if (a != l)
        return !1;
      if (a && l)
        return e.getTime() == t.getTime();
      var u = e instanceof RegExp, c = t instanceof RegExp;
      if (u != c)
        return !1;
      if (u && c)
        return e.toString() == t.toString();
      var f = Fh(e);
      if (o = f.length, o !== Fh(t).length)
        return !1;
      for (i = o; i-- !== 0; )
        if (!uC.call(t, f[i]))
          return !1;
      if (cC && e instanceof Element && t instanceof Element)
        return e === t;
      for (i = o; i-- !== 0; )
        if (s = f[i], !(s === "_owner" && e.$$typeof) && !Fu(e[s], t[s]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var fC = function(t, n) {
    try {
      return Fu(t, n);
    } catch (r) {
      if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
      throw r;
    }
  };
  const rn = /* @__PURE__ */ Is(fC);
  var dC = 4;
  function Rh(e) {
    return Oi(e, dC);
  }
  function Xv(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var hC = "[object Symbol]";
  function tf(e) {
    return typeof e == "symbol" || lr(e) && ar(e) == hC;
  }
  var pC = "Expected a function";
  function nf(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(pC);
    var n = function() {
      var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
      if (o.has(i))
        return o.get(i);
      var s = e.apply(this, r);
      return n.cache = o.set(i, s) || o, s;
    };
    return n.cache = new (nf.Cache || Rn)(), n;
  }
  nf.Cache = Rn;
  var mC = 500;
  function yC(e) {
    var t = nf(e, function(r) {
      return n.size === mC && n.clear(), r;
    }), n = t.cache;
    return t;
  }
  var vC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gC = /\\(\\)?/g, wC = yC(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(vC, function(n, r, i, o) {
      t.push(i ? o.replace(gC, "$1") : r || n);
    }), t;
  }), SC = 1 / 0;
  function xC(e) {
    if (typeof e == "string" || tf(e))
      return e;
    var t = e + "";
    return t == "0" && 1 / e == -SC ? "-0" : t;
  }
  var TC = 1 / 0, Lh = Cn ? Cn.prototype : void 0, Mh = Lh ? Lh.toString : void 0;
  function Zv(e) {
    if (typeof e == "string")
      return e;
    if (co(e))
      return Xv(e, Zv) + "";
    if (tf(e))
      return Mh ? Mh.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -TC ? "-0" : t;
  }
  function EC(e) {
    return e == null ? "" : Zv(e);
  }
  function qv(e) {
    return co(e) ? Xv(e, xC) : tf(e) ? [e] : Bv(wC(EC(e)));
  }
  var Jv = { exports: {} }, X = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Ee = typeof Symbol == "function" && Symbol.for, rf = Ee ? Symbol.for("react.element") : 60103, of = Ee ? Symbol.for("react.portal") : 60106, ua = Ee ? Symbol.for("react.fragment") : 60107, ca = Ee ? Symbol.for("react.strict_mode") : 60108, fa = Ee ? Symbol.for("react.profiler") : 60114, da = Ee ? Symbol.for("react.provider") : 60109, ha = Ee ? Symbol.for("react.context") : 60110, sf = Ee ? Symbol.for("react.async_mode") : 60111, pa = Ee ? Symbol.for("react.concurrent_mode") : 60111, ma = Ee ? Symbol.for("react.forward_ref") : 60112, ya = Ee ? Symbol.for("react.suspense") : 60113, PC = Ee ? Symbol.for("react.suspense_list") : 60120, va = Ee ? Symbol.for("react.memo") : 60115, ga = Ee ? Symbol.for("react.lazy") : 60116, CC = Ee ? Symbol.for("react.block") : 60121, kC = Ee ? Symbol.for("react.fundamental") : 60117, _C = Ee ? Symbol.for("react.responder") : 60118, OC = Ee ? Symbol.for("react.scope") : 60119;
  function nt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case rf:
          switch (e = e.type, e) {
            case sf:
            case pa:
            case ua:
            case fa:
            case ca:
            case ya:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case ha:
                case ma:
                case ga:
                case va:
                case da:
                  return e;
                default:
                  return t;
              }
          }
        case of:
          return t;
      }
    }
  }
  function eg(e) {
    return nt(e) === pa;
  }
  X.AsyncMode = sf;
  X.ConcurrentMode = pa;
  X.ContextConsumer = ha;
  X.ContextProvider = da;
  X.Element = rf;
  X.ForwardRef = ma;
  X.Fragment = ua;
  X.Lazy = ga;
  X.Memo = va;
  X.Portal = of;
  X.Profiler = fa;
  X.StrictMode = ca;
  X.Suspense = ya;
  X.isAsyncMode = function(e) {
    return eg(e) || nt(e) === sf;
  };
  X.isConcurrentMode = eg;
  X.isContextConsumer = function(e) {
    return nt(e) === ha;
  };
  X.isContextProvider = function(e) {
    return nt(e) === da;
  };
  X.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === rf;
  };
  X.isForwardRef = function(e) {
    return nt(e) === ma;
  };
  X.isFragment = function(e) {
    return nt(e) === ua;
  };
  X.isLazy = function(e) {
    return nt(e) === ga;
  };
  X.isMemo = function(e) {
    return nt(e) === va;
  };
  X.isPortal = function(e) {
    return nt(e) === of;
  };
  X.isProfiler = function(e) {
    return nt(e) === fa;
  };
  X.isStrictMode = function(e) {
    return nt(e) === ca;
  };
  X.isSuspense = function(e) {
    return nt(e) === ya;
  };
  X.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === ua || e === pa || e === fa || e === ca || e === ya || e === PC || typeof e == "object" && e !== null && (e.$$typeof === ga || e.$$typeof === va || e.$$typeof === da || e.$$typeof === ha || e.$$typeof === ma || e.$$typeof === kC || e.$$typeof === _C || e.$$typeof === OC || e.$$typeof === CC);
  };
  X.typeOf = nt;
  Jv.exports = X;
  var AC = Jv.exports, af = AC, jC = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, FC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, RC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, tg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, lf = {};
  lf[af.ForwardRef] = RC;
  lf[af.Memo] = tg;
  function Dh(e) {
    return af.isMemo(e) ? tg : lf[e.$$typeof] || jC;
  }
  var LC = Object.defineProperty, MC = Object.getOwnPropertyNames, bh = Object.getOwnPropertySymbols, DC = Object.getOwnPropertyDescriptor, bC = Object.getPrototypeOf, Nh = Object.prototype;
  function ng(e, t, n) {
    if (typeof t != "string") {
      if (Nh) {
        var r = bC(t);
        r && r !== Nh && ng(e, r, n);
      }
      var i = MC(t);
      bh && (i = i.concat(bh(t)));
      for (var o = Dh(e), s = Dh(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!FC[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
          var u = DC(t, l);
          try {
            LC(e, l, u);
          } catch {
          }
        }
      }
    }
    return e;
  }
  var NC = ng;
  const VC = /* @__PURE__ */ Is(NC);
  function Y() {
    return Y = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Y.apply(this, arguments);
  }
  function rg(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  }
  function cn(e, t) {
    if (e == null)
      return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
      i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function Vh(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var wa = /* @__PURE__ */ S.createContext(void 0);
  wa.displayName = "FormikContext";
  var $C = wa.Provider, IC = wa.Consumer;
  function fr() {
    var e = S.useContext(wa);
    return e;
  }
  var $h = function(t) {
    return Array.isArray(t) && t.length === 0;
  }, ke = function(t) {
    return typeof t == "function";
  }, Jr = function(t) {
    return t !== null && typeof t == "object";
  }, zC = function(t) {
    return String(Math.floor(Number(t))) === t;
  }, ul = function(t) {
    return Object.prototype.toString.call(t) === "[object String]";
  }, ig = function(t) {
    return S.Children.count(t) === 0;
  }, cl = function(t) {
    return Jr(t) && ke(t.then);
  };
  function ae(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = qv(t); e && r < i.length; )
      e = e[i[r++]];
    return r !== i.length && !e || e === void 0 ? n : e;
  }
  function At(e, t, n) {
    for (var r = Rh(e), i = r, o = 0, s = qv(t); o < s.length - 1; o++) {
      var a = s[o], l = ae(e, s.slice(0, o + 1));
      if (l && (Jr(l) || Array.isArray(l)))
        i = i[a] = Rh(l);
      else {
        var u = s[o + 1];
        i = i[a] = zC(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[s[o]] === n ? e : (n === void 0 ? delete i[s[o]] : i[s[o]] = n, o === 0 && n === void 0 && delete r[s[o]], r);
  }
  function og(e, t, n, r) {
    n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var s = o[i], a = e[s];
      Jr(a) ? n.get(a) || (n.set(a, !0), r[s] = Array.isArray(a) ? [] : {}, og(a, t, n, r[s])) : r[s] = t;
    }
    return r;
  }
  function BC(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return Y({}, e, {
          values: t.payload
        });
      case "SET_TOUCHED":
        return Y({}, e, {
          touched: t.payload
        });
      case "SET_ERRORS":
        return rn(e.errors, t.payload) ? e : Y({}, e, {
          errors: t.payload
        });
      case "SET_STATUS":
        return Y({}, e, {
          status: t.payload
        });
      case "SET_ISSUBMITTING":
        return Y({}, e, {
          isSubmitting: t.payload
        });
      case "SET_ISVALIDATING":
        return Y({}, e, {
          isValidating: t.payload
        });
      case "SET_FIELD_VALUE":
        return Y({}, e, {
          values: At(e.values, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_TOUCHED":
        return Y({}, e, {
          touched: At(e.touched, t.payload.field, t.payload.value)
        });
      case "SET_FIELD_ERROR":
        return Y({}, e, {
          errors: At(e.errors, t.payload.field, t.payload.value)
        });
      case "RESET_FORM":
        return Y({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return Y({}, e, {
          touched: og(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1
        });
      case "SUBMIT_FAILURE":
        return Y({}, e, {
          isSubmitting: !1
        });
      case "SUBMIT_SUCCESS":
        return Y({}, e, {
          isSubmitting: !1
        });
      default:
        return e;
    }
  }
  var Dn = {}, Do = {};
  function UC(e) {
    var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, o = e.validateOnMount, s = o === void 0 ? !1 : o, a = e.isInitialValid, l = e.enableReinitialize, u = l === void 0 ? !1 : l, c = e.onSubmit, f = cn(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = Y({
      validateOnChange: n,
      validateOnBlur: i,
      validateOnMount: s,
      onSubmit: c
    }, f), y = S.useRef(d.initialValues), v = S.useRef(d.initialErrors || Dn), g = S.useRef(d.initialTouched || Do), T = S.useRef(d.initialStatus), p = S.useRef(!1), h = S.useRef({});
    S.useEffect(function() {
      return p.current = !0, function() {
        p.current = !1;
      };
    }, []);
    var m = S.useState(0), w = m[1], P = S.useRef({
      values: yi(d.initialValues),
      errors: yi(d.initialErrors) || Dn,
      touched: yi(d.initialTouched) || Do,
      status: yi(d.initialStatus),
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0
    }), E = P.current, C = S.useCallback(function(x) {
      var j = P.current;
      P.current = BC(j, x), j !== P.current && w(function(M) {
        return M + 1;
      });
    }, []), k = S.useCallback(function(x, j) {
      return new Promise(function(M, N) {
        var U = d.validate(x, j);
        U == null ? M(Dn) : cl(U) ? U.then(function(G) {
          M(G || Dn);
        }, function(G) {
          N(G);
        }) : M(U);
      });
    }, [d.validate]), b = S.useCallback(function(x, j) {
      var M = d.validationSchema, N = ke(M) ? M(j) : M, U = j && N.validateAt ? N.validateAt(j, x) : KC(x, N);
      return new Promise(function(G, Se) {
        U.then(function() {
          G(Dn);
        }, function(Lt) {
          Lt.name === "ValidationError" ? G(HC(Lt)) : Se(Lt);
        });
      });
    }, [d.validationSchema]), R = S.useCallback(function(x, j) {
      return new Promise(function(M) {
        return M(h.current[x].validate(j));
      });
    }, []), z = S.useCallback(function(x) {
      var j = Object.keys(h.current).filter(function(N) {
        return ke(h.current[N].validate);
      }), M = j.length > 0 ? j.map(function(N) {
        return R(N, ae(x, N));
      }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
      return Promise.all(M).then(function(N) {
        return N.reduce(function(U, G, Se) {
          return G === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || G && (U = At(U, j[Se], G)), U;
        }, {});
      });
    }, [R]), pe = S.useCallback(function(x) {
      return Promise.all([z(x), d.validationSchema ? b(x) : {}, d.validate ? k(x) : {}]).then(function(j) {
        var M = j[0], N = j[1], U = j[2], G = ku.all([M, N, U], {
          arrayMerge: GC
        });
        return G;
      });
    }, [d.validate, d.validationSchema, z, k, b]), se = rt(function(x) {
      return x === void 0 && (x = E.values), C({
        type: "SET_ISVALIDATING",
        payload: !0
      }), pe(x).then(function(j) {
        return p.current && (C({
          type: "SET_ISVALIDATING",
          payload: !1
        }), C({
          type: "SET_ERRORS",
          payload: j
        })), j;
      });
    });
    S.useEffect(function() {
      s && p.current === !0 && rn(y.current, d.initialValues) && se(y.current);
    }, [s, se]);
    var L = S.useCallback(function(x) {
      var j = x && x.values ? x.values : y.current, M = x && x.errors ? x.errors : v.current ? v.current : d.initialErrors || {}, N = x && x.touched ? x.touched : g.current ? g.current : d.initialTouched || {}, U = x && x.status ? x.status : T.current ? T.current : d.initialStatus;
      y.current = j, v.current = M, g.current = N, T.current = U;
      var G = function() {
        C({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!x && !!x.isSubmitting,
            errors: M,
            touched: N,
            status: U,
            values: j,
            isValidating: !!x && !!x.isValidating,
            submitCount: x && x.submitCount && typeof x.submitCount == "number" ? x.submitCount : 0
          }
        });
      };
      if (d.onReset) {
        var Se = d.onReset(E.values, Uf);
        cl(Se) ? Se.then(G) : G();
      } else
        G();
    }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
    S.useEffect(function() {
      p.current === !0 && !rn(y.current, d.initialValues) && u && (y.current = d.initialValues, L(), s && se(y.current));
    }, [u, d.initialValues, L, s, se]), S.useEffect(function() {
      u && p.current === !0 && !rn(v.current, d.initialErrors) && (v.current = d.initialErrors || Dn, C({
        type: "SET_ERRORS",
        payload: d.initialErrors || Dn
      }));
    }, [u, d.initialErrors]), S.useEffect(function() {
      u && p.current === !0 && !rn(g.current, d.initialTouched) && (g.current = d.initialTouched || Do, C({
        type: "SET_TOUCHED",
        payload: d.initialTouched || Do
      }));
    }, [u, d.initialTouched]), S.useEffect(function() {
      u && p.current === !0 && !rn(T.current, d.initialStatus) && (T.current = d.initialStatus, C({
        type: "SET_STATUS",
        payload: d.initialStatus
      }));
    }, [u, d.initialStatus, d.initialTouched]);
    var $ = rt(function(x) {
      if (h.current[x] && ke(h.current[x].validate)) {
        var j = ae(E.values, x), M = h.current[x].validate(j);
        return cl(M) ? (C({
          type: "SET_ISVALIDATING",
          payload: !0
        }), M.then(function(N) {
          return N;
        }).then(function(N) {
          C({
            type: "SET_FIELD_ERROR",
            payload: {
              field: x,
              value: N
            }
          }), C({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        })) : (C({
          type: "SET_FIELD_ERROR",
          payload: {
            field: x,
            value: M
          }
        }), Promise.resolve(M));
      } else if (d.validationSchema)
        return C({
          type: "SET_ISVALIDATING",
          payload: !0
        }), b(E.values, x).then(function(N) {
          return N;
        }).then(function(N) {
          C({
            type: "SET_FIELD_ERROR",
            payload: {
              field: x,
              value: ae(N, x)
            }
          }), C({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        });
      return Promise.resolve();
    }), I = S.useCallback(function(x, j) {
      var M = j.validate;
      h.current[x] = {
        validate: M
      };
    }, []), K = S.useCallback(function(x) {
      delete h.current[x];
    }, []), O = rt(function(x, j) {
      C({
        type: "SET_TOUCHED",
        payload: x
      });
      var M = j === void 0 ? i : j;
      return M ? se(E.values) : Promise.resolve();
    }), D = S.useCallback(function(x) {
      C({
        type: "SET_ERRORS",
        payload: x
      });
    }, []), B = rt(function(x, j) {
      var M = ke(x) ? x(E.values) : x;
      C({
        type: "SET_VALUES",
        payload: M
      });
      var N = j === void 0 ? n : j;
      return N ? se(M) : Promise.resolve();
    }), J = S.useCallback(function(x, j) {
      C({
        type: "SET_FIELD_ERROR",
        payload: {
          field: x,
          value: j
        }
      });
    }, []), ne = rt(function(x, j, M) {
      C({
        type: "SET_FIELD_VALUE",
        payload: {
          field: x,
          value: j
        }
      });
      var N = M === void 0 ? n : M;
      return N ? se(At(E.values, x, j)) : Promise.resolve();
    }), Mn = S.useCallback(function(x, j) {
      var M = j, N = x, U;
      if (!ul(x)) {
        x.persist && x.persist();
        var G = x.target ? x.target : x.currentTarget, Se = G.type, Lt = G.name, Fa = G.id, Ra = G.value, Z0 = G.checked, pj = G.outerHTML, Wf = G.options, q0 = G.multiple;
        M = j || Lt || Fa, N = /number|range/.test(Se) ? (U = parseFloat(Ra), isNaN(U) ? "" : U) : /checkbox/.test(Se) ? QC(ae(E.values, M), Z0, Ra) : Wf && q0 ? YC(Wf) : Ra;
      }
      M && ne(M, N);
    }, [ne, E.values]), dt = rt(function(x) {
      if (ul(x))
        return function(j) {
          return Mn(j, x);
        };
      Mn(x);
    }), xt = rt(function(x, j, M) {
      j === void 0 && (j = !0), C({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: x,
          value: j
        }
      });
      var N = M === void 0 ? i : M;
      return N ? se(E.values) : Promise.resolve();
    }), Tt = S.useCallback(function(x, j) {
      x.persist && x.persist();
      var M = x.target, N = M.name, U = M.id, G = M.outerHTML, Se = j || N || U;
      xt(Se, !0);
    }, [xt]), qt = rt(function(x) {
      if (ul(x))
        return function(j) {
          return Tt(j, x);
        };
      Tt(x);
    }), If = S.useCallback(function(x) {
      ke(x) ? C({
        type: "SET_FORMIK_STATE",
        payload: x
      }) : C({
        type: "SET_FORMIK_STATE",
        payload: function() {
          return x;
        }
      });
    }, []), zf = S.useCallback(function(x) {
      C({
        type: "SET_STATUS",
        payload: x
      });
    }, []), Bf = S.useCallback(function(x) {
      C({
        type: "SET_ISSUBMITTING",
        payload: x
      });
    }, []), Aa = rt(function() {
      return C({
        type: "SUBMIT_ATTEMPT"
      }), se().then(function(x) {
        var j = x instanceof Error, M = !j && Object.keys(x).length === 0;
        if (M) {
          var N;
          try {
            if (N = W0(), N === void 0)
              return;
          } catch (U) {
            throw U;
          }
          return Promise.resolve(N).then(function(U) {
            return p.current && C({
              type: "SUBMIT_SUCCESS"
            }), U;
          }).catch(function(U) {
            if (p.current)
              throw C({
                type: "SUBMIT_FAILURE"
              }), U;
          });
        } else if (p.current && (C({
          type: "SUBMIT_FAILURE"
        }), j))
          throw x;
      });
    }), U0 = rt(function(x) {
      x && x.preventDefault && ke(x.preventDefault) && x.preventDefault(), x && x.stopPropagation && ke(x.stopPropagation) && x.stopPropagation(), Aa().catch(function(j) {
        console.warn("Warning: An unhandled error was caught from submitForm()", j);
      });
    }), Uf = {
      resetForm: L,
      validateForm: se,
      validateField: $,
      setErrors: D,
      setFieldError: J,
      setFieldTouched: xt,
      setFieldValue: ne,
      setStatus: zf,
      setSubmitting: Bf,
      setTouched: O,
      setValues: B,
      setFormikState: If,
      submitForm: Aa
    }, W0 = rt(function() {
      return c(E.values, Uf);
    }), H0 = rt(function(x) {
      x && x.preventDefault && ke(x.preventDefault) && x.preventDefault(), x && x.stopPropagation && ke(x.stopPropagation) && x.stopPropagation(), L();
    }), K0 = S.useCallback(function(x) {
      return {
        value: ae(E.values, x),
        error: ae(E.errors, x),
        touched: !!ae(E.touched, x),
        initialValue: ae(y.current, x),
        initialTouched: !!ae(g.current, x),
        initialError: ae(v.current, x)
      };
    }, [E.errors, E.touched, E.values]), G0 = S.useCallback(function(x) {
      return {
        setValue: function(M, N) {
          return ne(x, M, N);
        },
        setTouched: function(M, N) {
          return xt(x, M, N);
        },
        setError: function(M) {
          return J(x, M);
        }
      };
    }, [ne, xt, J]), Y0 = S.useCallback(function(x) {
      var j = Jr(x), M = j ? x.name : x, N = ae(E.values, M), U = {
        name: M,
        value: N,
        onChange: dt,
        onBlur: qt
      };
      if (j) {
        var G = x.type, Se = x.value, Lt = x.as, Fa = x.multiple;
        G === "checkbox" ? Se === void 0 ? U.checked = !!N : (U.checked = !!(Array.isArray(N) && ~N.indexOf(Se)), U.value = Se) : G === "radio" ? (U.checked = N === Se, U.value = Se) : Lt === "select" && Fa && (U.value = U.value || [], U.multiple = !0);
      }
      return U;
    }, [qt, dt, E.values]), ja = S.useMemo(function() {
      return !rn(y.current, E.values);
    }, [y.current, E.values]), Q0 = S.useMemo(function() {
      return typeof a < "u" ? ja ? E.errors && Object.keys(E.errors).length === 0 : a !== !1 && ke(a) ? a(d) : a : E.errors && Object.keys(E.errors).length === 0;
    }, [a, ja, E.errors, d]), X0 = Y({}, E, {
      initialValues: y.current,
      initialErrors: v.current,
      initialTouched: g.current,
      initialStatus: T.current,
      handleBlur: qt,
      handleChange: dt,
      handleReset: H0,
      handleSubmit: U0,
      resetForm: L,
      setErrors: D,
      setFormikState: If,
      setFieldTouched: xt,
      setFieldValue: ne,
      setFieldError: J,
      setStatus: zf,
      setSubmitting: Bf,
      setTouched: O,
      setValues: B,
      submitForm: Aa,
      validateForm: se,
      validateField: $,
      isValid: Q0,
      dirty: ja,
      unregisterField: K,
      registerField: I,
      getFieldProps: Y0,
      getFieldMeta: K0,
      getFieldHelpers: G0,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: s
    });
    return X0;
  }
  function WC(e) {
    var t = UC(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
    return S.useImperativeHandle(o, function() {
      return t;
    }), S.createElement($C, {
      value: t
    }, n ? S.createElement(n, t) : i ? i(t) : r ? ke(r) ? r(t) : ig(r) ? null : S.Children.only(r) : null);
  }
  function HC(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0)
        return At(t, e.path, e.message);
      for (var i = e.inner, n = Array.isArray(i), r = 0, i = n ? i : i[Symbol.iterator](); ; ) {
        var o;
        if (n) {
          if (r >= i.length)
            break;
          o = i[r++];
        } else {
          if (r = i.next(), r.done)
            break;
          o = r.value;
        }
        var s = o;
        ae(t, s.path) || (t = At(t, s.path, s.message));
      }
    }
    return t;
  }
  function KC(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = Ru(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: i
    });
  }
  function Ru(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(i) {
          return Array.isArray(i) === !0 || lh(i) ? Ru(i) : i !== "" ? i : void 0;
        }) : lh(e[r]) ? t[r] = Ru(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0;
      }
    return t;
  }
  function GC(e, t, n) {
    var r = e.slice();
    return t.forEach(function(o, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1, l = a && n.isMergeableObject(o);
        r[s] = l ? ku(Array.isArray(o) ? [] : {}, o, n) : o;
      } else
        n.isMergeableObject(o) ? r[s] = ku(e[s], o, n) : e.indexOf(o) === -1 && r.push(o);
    }), r;
  }
  function YC(e) {
    return Array.from(e).filter(function(t) {
      return t.selected;
    }).map(function(t) {
      return t.value;
    });
  }
  function QC(e, t, n) {
    if (typeof e == "boolean")
      return !!t;
    var r = [], i = !1, o = -1;
    if (Array.isArray(e))
      r = e, o = e.indexOf(n), i = o >= 0;
    else if (!n || n == "true" || n == "false")
      return !!t;
    return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r;
  }
  var XC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? S.useLayoutEffect : S.useEffect;
  function rt(e) {
    var t = S.useRef(e);
    return XC(function() {
      t.current = e;
    }), S.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, []);
  }
  function ZC(e) {
    var t = fr(), n = t.getFieldProps, r = t.getFieldMeta, i = t.getFieldHelpers, o = t.registerField, s = t.unregisterField, a = Jr(e), l = a ? e : {
      name: e
    }, u = l.name, c = l.validate;
    S.useEffect(function() {
      return u && o(u, {
        validate: c
      }), function() {
        u && s(u);
      };
    }, [o, s, u, c]);
    var f = S.useMemo(function() {
      return i(u);
    }, [i, u]);
    return [n(l), r(u), f];
  }
  function fl(e) {
    var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, s = e.component, a = e.className, l = cn(e, ["validate", "name", "render", "children", "as", "component", "className"]), u = fr(), c = cn(u, ["validate", "validationSchema"]), f = c.registerField, d = c.unregisterField;
    S.useEffect(function() {
      return f(n, {
        validate: t
      }), function() {
        d(n);
      };
    }, [f, d, n, t]);
    var y = c.getFieldProps(Y({
      name: n
    }, l)), v = c.getFieldMeta(n), g = {
      field: y,
      form: c
    };
    if (r)
      return r(Y({}, g, {
        meta: v
      }));
    if (ke(i))
      return i(Y({}, g, {
        meta: v
      }));
    if (s) {
      if (typeof s == "string") {
        var T = l.innerRef, p = cn(l, ["innerRef"]);
        return S.createElement(s, Y({
          ref: T
        }, y, p, {
          className: a
        }), i);
      }
      return S.createElement(s, Y({
        field: y,
        form: c
      }, l, {
        className: a
      }), i);
    }
    var h = o || "input";
    if (typeof h == "string") {
      var m = l.innerRef, w = cn(l, ["innerRef"]);
      return S.createElement(h, Y({
        ref: m
      }, y, w, {
        className: a
      }), i);
    }
    return S.createElement(h, Y({}, y, l, {
      className: a
    }), i);
  }
  var sg = /* @__PURE__ */ S.forwardRef(function(e, t) {
    var n = e.action, r = cn(e, ["action"]), i = n ?? "#", o = fr(), s = o.handleReset, a = o.handleSubmit;
    return S.createElement("form", Y({
      onSubmit: a,
      ref: t,
      onReset: s,
      action: i
    }, r));
  });
  sg.displayName = "Form";
  function qC(e) {
    var t = function(i) {
      return S.createElement(IC, null, function(o) {
        return S.createElement(e, Y({}, i, {
          formik: o
        }));
      });
    }, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
    return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", VC(
      t,
      e
      // cast type to ComponentClass (even if SFC)
    );
  }
  var JC = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i.splice(n, 1), i.splice(r, 0, o), i;
  }, ek = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i[n] = i[r], i[r] = o, i;
  }, dl = function(t, n, r) {
    var i = nr(t);
    return i.splice(n, 0, r), i;
  }, tk = function(t, n, r) {
    var i = nr(t);
    return i[n] = r, i;
  }, nr = function(t) {
    if (t) {
      if (Array.isArray(t))
        return [].concat(t);
      var n = Object.keys(t).map(function(r) {
        return parseInt(r);
      }).reduce(function(r, i) {
        return i > r ? i : r;
      }, 0);
      return Array.from(Y({}, t, {
        length: n + 1
      }));
    } else
      return [];
  }, Ih = function(t, n) {
    var r = typeof t == "function" ? t : n;
    return function(i) {
      if (Array.isArray(i) || Jr(i)) {
        var o = nr(i);
        return r(o);
      }
      return i;
    };
  }, nk = /* @__PURE__ */ function(e) {
    rg(t, e);
    function t(r) {
      var i;
      return i = e.call(this, r) || this, i.updateArrayField = function(o, s, a) {
        var l = i.props, u = l.name, c = l.formik.setFormikState;
        c(function(f) {
          var d = Ih(a, o), y = Ih(s, o), v = At(f.values, u, o(ae(f.values, u))), g = a ? d(ae(f.errors, u)) : void 0, T = s ? y(ae(f.touched, u)) : void 0;
          return $h(g) && (g = void 0), $h(T) && (T = void 0), Y({}, f, {
            values: v,
            errors: a ? At(f.errors, u, g) : f.errors,
            touched: s ? At(f.touched, u, T) : f.touched
          });
        });
      }, i.push = function(o) {
        return i.updateArrayField(function(s) {
          return [].concat(nr(s), [yi(o)]);
        }, !1, !1);
      }, i.handlePush = function(o) {
        return function() {
          return i.push(o);
        };
      }, i.swap = function(o, s) {
        return i.updateArrayField(function(a) {
          return ek(a, o, s);
        }, !0, !0);
      }, i.handleSwap = function(o, s) {
        return function() {
          return i.swap(o, s);
        };
      }, i.move = function(o, s) {
        return i.updateArrayField(function(a) {
          return JC(a, o, s);
        }, !0, !0);
      }, i.handleMove = function(o, s) {
        return function() {
          return i.move(o, s);
        };
      }, i.insert = function(o, s) {
        return i.updateArrayField(function(a) {
          return dl(a, o, s);
        }, function(a) {
          return dl(a, o, null);
        }, function(a) {
          return dl(a, o, null);
        });
      }, i.handleInsert = function(o, s) {
        return function() {
          return i.insert(o, s);
        };
      }, i.replace = function(o, s) {
        return i.updateArrayField(function(a) {
          return tk(a, o, s);
        }, !1, !1);
      }, i.handleReplace = function(o, s) {
        return function() {
          return i.replace(o, s);
        };
      }, i.unshift = function(o) {
        var s = -1;
        return i.updateArrayField(function(a) {
          var l = a ? [o].concat(a) : [o];
          return s = l.length, l;
        }, function(a) {
          return a ? [null].concat(a) : [null];
        }, function(a) {
          return a ? [null].concat(a) : [null];
        }), s;
      }, i.handleUnshift = function(o) {
        return function() {
          return i.unshift(o);
        };
      }, i.handleRemove = function(o) {
        return function() {
          return i.remove(o);
        };
      }, i.handlePop = function() {
        return function() {
          return i.pop();
        };
      }, i.remove = i.remove.bind(Vh(i)), i.pop = i.pop.bind(Vh(i)), i;
    }
    var n = t.prototype;
    return n.componentDidUpdate = function(i) {
      this.props.validateOnChange && this.props.formik.validateOnChange && !rn(ae(i.formik.values, i.name), ae(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
    }, n.remove = function(i) {
      var o;
      return this.updateArrayField(
        // so this gets call 3 times
        function(s) {
          var a = s ? nr(s) : [];
          return o || (o = a[i]), ke(a.splice) && a.splice(i, 1), ke(a.every) && a.every(function(l) {
            return l === void 0;
          }) ? [] : a;
        },
        !0,
        !0
      ), o;
    }, n.pop = function() {
      var i;
      return this.updateArrayField(
        // so this gets call 3 times
        function(o) {
          var s = o.slice();
          return i || (i = s && s.pop && s.pop()), s;
        },
        !0,
        !0
      ), i;
    }, n.render = function() {
      var i = {
        push: this.push,
        pop: this.pop,
        swap: this.swap,
        move: this.move,
        insert: this.insert,
        replace: this.replace,
        unshift: this.unshift,
        remove: this.remove,
        handlePush: this.handlePush,
        handlePop: this.handlePop,
        handleSwap: this.handleSwap,
        handleMove: this.handleMove,
        handleInsert: this.handleInsert,
        handleReplace: this.handleReplace,
        handleUnshift: this.handleUnshift,
        handleRemove: this.handleRemove
      }, o = this.props, s = o.component, a = o.render, l = o.children, u = o.name, c = o.formik, f = cn(c, ["validate", "validationSchema"]), d = Y({}, i, {
        form: f,
        name: u
      });
      return s ? S.createElement(s, d) : a ? a(d) : l ? typeof l == "function" ? l(d) : ig(l) ? null : S.Children.only(l) : null;
    }, t;
  }(S.Component);
  nk.defaultProps = {
    validateOnChange: !0
  };
  var rk = /* @__PURE__ */ function(e) {
    rg(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return n.shouldComponentUpdate = function(i) {
      return ae(this.props.formik.errors, this.props.name) !== ae(i.formik.errors, this.props.name) || ae(this.props.formik.touched, this.props.name) !== ae(i.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(i).length;
    }, n.render = function() {
      var i = this.props, o = i.component, s = i.formik, a = i.render, l = i.children, u = i.name, c = cn(i, ["component", "formik", "render", "children", "name"]), f = ae(s.touched, u), d = ae(s.errors, u);
      return f && d ? a ? ke(a) ? a(d) : null : l ? ke(l) ? l(d) : null : o ? S.createElement(o, c, d) : d : null;
    }, t;
  }(S.Component), ik = /* @__PURE__ */ qC(rk), zh, ag = { exports: {} }, ci = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  ag.exports = function() {
    if (zh)
      return ci;
    zh = 1;
    var e = fn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(a, l, u) {
      var c, f = {}, d = null, y = null;
      for (c in u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (y = l.ref), l)
        r.call(l, c) && !o.hasOwnProperty(c) && (f[c] = l[c]);
      if (a && a.defaultProps)
        for (c in l = a.defaultProps)
          f[c] === void 0 && (f[c] = l[c]);
      return { $$typeof: t, type: a, key: d, ref: y, props: f, _owner: i.current };
    }
    return ci.Fragment = n, ci.jsx = s, ci.jsxs = s, ci;
  }();
  var bo = ag.exports;
  const lg = S.createContext(void 0);
  function fo() {
    const e = S.useContext(lg);
    if (e === void 0)
      throw new Error("useWizard must be used within the Wizard app!");
    return e;
  }
  function ok({ step: e }) {
    const { submitForm: t, setFieldValue: n } = fr();
    return S.useEffect(() => {
      const r = function(i) {
        return i.initialValues ? Object.keys(i.initialValues) : [];
      }(e);
      r && r.forEach((i) => {
        const o = document.querySelectorAll(`input[name='${i}']`);
        for (let s = 0; s < o.length; ++s)
          o[s].addEventListener("click", (a) => {
            const l = a.target.value;
            n(i, l), setTimeout(t, 0);
          });
      });
    }, []), null;
  }
  function Bh(e) {
    return e[window.location.hash.slice(1)];
  }
  function sk({ steps: e, onCompleted: t, onStepChanged: n, enableHash: r, header: i, wrapper: o, footer: s }) {
    let a = e[0], l = {};
    r && (l = function(L) {
      const $ = {};
      return L.forEach((I) => {
        const K = I.id.replace(/[A-Z]/g, (O, D) => (D > 0 ? "-" : "") + O.toLowerCase());
        $[K] = I;
      }), $;
    }(e), a = Bh(l) || a);
    const [u, c] = S.useState(a), [f, d] = S.useState(!1), [y, v] = S.useState({}), g = S.useRef(null), T = e.findIndex((L) => L.id === u.id), p = T + 1, h = e.length, m = p === 1, w = p === h;
    function P() {
      const L = Bh(l);
      (L == null ? void 0 : L.id) !== u.id && k(L, g.current);
    }
    async function E(L, $, I) {
      let K;
      for (let O = 0; O < L.length; ++O) {
        const D = L[O];
        if (D.shouldSkip === void 0) {
          K = D;
          break;
        }
        if (!await D.shouldSkip($, I)) {
          K = D;
          break;
        }
      }
      return K;
    }
    function C(L) {
      t && (L = function($) {
        let I = {};
        return Object.keys($).forEach((K) => {
          I = { ...I, ...$[K] };
        }), I;
      }(L), t(L));
    }
    function k(L, $) {
      c(L), $.resetForm({ values: pe(L) });
    }
    async function b(L, $) {
      try {
        u.onSubmit && ($.setStatus(""), d(!0), L = await u.onSubmit(L, y, $), d(!1));
        const I = { ...y, [u.id]: L };
        v(I);
        const K = await async function(O) {
          const D = e.slice(T + 1);
          return await E(D, O, 1);
        }(I);
        if (!K)
          return void C(I);
        n && n(u, K, I), k(K, $);
      } catch (I) {
        console.log(I), d(!1), $.setStatus(I.message);
      }
    }
    async function R(L, $) {
      let I = null;
      (u.keepValuesOnPrevious ?? 1) && (I = { ...y, [u.id]: L }, v(I)), I = I || y;
      const K = await async function(O) {
        const D = e.slice(0, T).reverse();
        return await E(D, O, -1);
      }(I);
      K && (n && n(u, K, I), k(K, $));
    }
    function z(L, $) {
      c({ ...u, [L]: $ });
    }
    function pe(L) {
      return y[L.id] || L.initialValues || {};
    }
    function se(L) {
      return { values: y, setValues: v, setIsLoading: d, updateStep: z, goToPreviousStep: () => R(L.values, L), goToNextStep: () => b(L.values, L), goToStep: ($) => function(I, K) {
        k(e[I], K);
      }($, L), activeStep: u, stepNumber: p, totalSteps: h, isLoading: f, isFirstStep: m, isLastStep: w };
    }
    return S.useEffect(() => {
      if (r)
        return window.addEventListener("hashchange", P), function(L, $) {
          const I = Object.keys(L).find((K) => L[K].id === $.id);
          window.location.hash = I || window.location.hash;
        }(l, u), () => window.removeEventListener("hashchange", P);
    }, [u]), bo.jsx(WC, { initialValues: pe(u), validationSchema: u.validationSchema, validate: function(L) {
      if (L)
        return ($) => L($, y);
    }(u.validate), validateOnChange: u.validateOnChange ?? !0, validateOnBlur: u.validateOnBlur ?? !0, onSubmit: b, innerRef: g, children: (L) => {
      const $ = se(L), I = o || u.component;
      return bo.jsx(lg.Provider, { value: $, children: bo.jsxs(sg, { children: [i, u.submitOnChange && bo.jsx(ok, { step: u }), I, s] }) });
    } });
  }
  function ak() {
    const { goToStep: e } = fo();
    return /* @__PURE__ */ A.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "Warning" }),
      /* @__PURE__ */ A.jsx("p", { children: "Seems like this may be your business email. Will you always have access to this email or would you like to change to a personal email?" }),
      /* @__PURE__ */ A.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ A.jsx("button", { className: "btn", type: "button", onClick: () => e(0), children: "Change Email" }),
        /* @__PURE__ */ A.jsx("button", { className: "btn", type: "submit", children: "Continue" })
      ] })
    ] });
  }
  function lk() {
    const {
      values: e
      /*, updateStep*/
    } = fo();
    let t = {};
    return Object.keys(e).forEach((n) => {
      t = {
        ...t,
        ...e[n]
      };
    }), /* @__PURE__ */ A.jsxs("div", { className: "prose prose-neutral max-w-none", children: [
      /* @__PURE__ */ A.jsx("h2", { children: "Congratulations!" }),
      /* @__PURE__ */ A.jsx("div", { className: "flex flex-wrap gap-4 justify-between", children: /* @__PURE__ */ A.jsx("p", { className: "my-0", children: "🎉 Here's your input:" }) }),
      /* @__PURE__ */ A.jsx("code", { className: "text-sm sm:text-base bg-transparent", children: /* @__PURE__ */ A.jsx("pre", { className: "mt-0", children: JSON.stringify(t, null, 2) }) })
    ] });
  }
  var uf = { exports: {} }, Vr = typeof Reflect == "object" ? Reflect : null, Uh = Vr && typeof Vr.apply == "function" ? Vr.apply : function(t, n, r) {
    return Function.prototype.apply.call(t, n, r);
  }, Jo;
  Vr && typeof Vr.ownKeys == "function" ? Jo = Vr.ownKeys : Object.getOwnPropertySymbols ? Jo = function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
  } : Jo = function(t) {
    return Object.getOwnPropertyNames(t);
  };
  function uk(e) {
    console && console.warn && console.warn(e);
  }
  var ug = Number.isNaN || function(t) {
    return t !== t;
  };
  function Z() {
    Z.init.call(this);
  }
  uf.exports = Z;
  uf.exports.once = hk;
  Z.EventEmitter = Z;
  Z.prototype._events = void 0;
  Z.prototype._eventsCount = 0;
  Z.prototype._maxListeners = void 0;
  var Wh = 10;
  function Sa(e) {
    if (typeof e != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
  }
  Object.defineProperty(Z, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return Wh;
    },
    set: function(e) {
      if (typeof e != "number" || e < 0 || ug(e))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
      Wh = e;
    }
  });
  Z.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  };
  Z.prototype.setMaxListeners = function(t) {
    if (typeof t != "number" || t < 0 || ug(t))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t, this;
  };
  function cg(e) {
    return e._maxListeners === void 0 ? Z.defaultMaxListeners : e._maxListeners;
  }
  Z.prototype.getMaxListeners = function() {
    return cg(this);
  };
  Z.prototype.emit = function(t) {
    for (var n = [], r = 1; r < arguments.length; r++)
      n.push(arguments[r]);
    var i = t === "error", o = this._events;
    if (o !== void 0)
      i = i && o.error === void 0;
    else if (!i)
      return !1;
    if (i) {
      var s;
      if (n.length > 0 && (s = n[0]), s instanceof Error)
        throw s;
      var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      throw a.context = s, a;
    }
    var l = o[t];
    if (l === void 0)
      return !1;
    if (typeof l == "function")
      Uh(l, this, n);
    else
      for (var u = l.length, c = mg(l, u), r = 0; r < u; ++r)
        Uh(c[r], this, n);
    return !0;
  };
  function fg(e, t, n, r) {
    var i, o, s;
    if (Sa(n), o = e._events, o === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit(
      "newListener",
      t,
      n.listener ? n.listener : n
    ), o = e._events), s = o[t]), s === void 0)
      s = o[t] = n, ++e._eventsCount;
    else if (typeof s == "function" ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = cg(e), i > 0 && s.length > i && !s.warned) {
      s.warned = !0;
      var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = s.length, uk(a);
    }
    return e;
  }
  Z.prototype.addListener = function(t, n) {
    return fg(this, t, n, !1);
  };
  Z.prototype.on = Z.prototype.addListener;
  Z.prototype.prependListener = function(t, n) {
    return fg(this, t, n, !0);
  };
  function ck() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function dg(e, t, n) {
    var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, i = ck.bind(r);
    return i.listener = n, r.wrapFn = i, i;
  }
  Z.prototype.once = function(t, n) {
    return Sa(n), this.on(t, dg(this, t, n)), this;
  };
  Z.prototype.prependOnceListener = function(t, n) {
    return Sa(n), this.prependListener(t, dg(this, t, n)), this;
  };
  Z.prototype.removeListener = function(t, n) {
    var r, i, o, s, a;
    if (Sa(n), i = this._events, i === void 0)
      return this;
    if (r = i[t], r === void 0)
      return this;
    if (r === n || r.listener === n)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
    else if (typeof r != "function") {
      for (o = -1, s = r.length - 1; s >= 0; s--)
        if (r[s] === n || r[s].listener === n) {
          a = r[s].listener, o = s;
          break;
        }
      if (o < 0)
        return this;
      o === 0 ? r.shift() : fk(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, a || n);
    }
    return this;
  };
  Z.prototype.off = Z.prototype.removeListener;
  Z.prototype.removeAllListeners = function(t) {
    var n, r, i;
    if (r = this._events, r === void 0)
      return this;
    if (r.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
    if (arguments.length === 0) {
      var o = Object.keys(r), s;
      for (i = 0; i < o.length; ++i)
        s = o[i], s !== "removeListener" && this.removeAllListeners(s);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (n = r[t], typeof n == "function")
      this.removeListener(t, n);
    else if (n !== void 0)
      for (i = n.length - 1; i >= 0; i--)
        this.removeListener(t, n[i]);
    return this;
  };
  function hg(e, t, n) {
    var r = e._events;
    if (r === void 0)
      return [];
    var i = r[t];
    return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? dk(i) : mg(i, i.length);
  }
  Z.prototype.listeners = function(t) {
    return hg(this, t, !0);
  };
  Z.prototype.rawListeners = function(t) {
    return hg(this, t, !1);
  };
  Z.listenerCount = function(e, t) {
    return typeof e.listenerCount == "function" ? e.listenerCount(t) : pg.call(e, t);
  };
  Z.prototype.listenerCount = pg;
  function pg(e) {
    var t = this._events;
    if (t !== void 0) {
      var n = t[e];
      if (typeof n == "function")
        return 1;
      if (n !== void 0)
        return n.length;
    }
    return 0;
  }
  Z.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Jo(this._events) : [];
  };
  function mg(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r)
      n[r] = e[r];
    return n;
  }
  function fk(e, t) {
    for (; t + 1 < e.length; t++)
      e[t] = e[t + 1];
    e.pop();
  }
  function dk(e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n)
      t[n] = e[n].listener || e[n];
    return t;
  }
  function hk(e, t) {
    return new Promise(function(n, r) {
      function i(s) {
        e.removeListener(t, o), r(s);
      }
      function o() {
        typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
      }
      yg(e, t, o, { once: !0 }), t !== "error" && pk(e, i, { once: !0 });
    });
  }
  function pk(e, t, n) {
    typeof e.on == "function" && yg(e, "error", t, n);
  }
  function yg(e, t, n, r) {
    if (typeof e.on == "function")
      r.once ? e.once(t, n) : e.on(t, n);
    else if (typeof e.addEventListener == "function")
      e.addEventListener(t, function i(o) {
        r.once && e.removeEventListener(t, i), n(o);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
  }
  var mk = uf.exports;
  const js = new mk.EventEmitter();
  async function yk(e) {
    const t = await fetch(e.url, {
      method: "POST",
      headers: e.headers,
      body: JSON.stringify(e.bodyJson)
    }).catch((r) => console.error("fetch() error", r));
    let n = null;
    try {
      n = await (t == null ? void 0 : t.json());
    } catch {
    }
    return {
      status: t == null ? void 0 : t.status,
      json: n
    };
  }
  const vk = [
    {
      id: "StepEmail",
      title: "Getting Your Details",
      helpText: "Please enter your email",
      titles: {},
      initialValues: {
        email: ""
        //linkedin: ''
      },
      fields: {
        inputTypes: {
          email: "email",
          linkedin: "hidden",
          emailChecked: !1
        },
        placeholders: {
          email: "e.g. john@doe.com"
        }
      },
      disableNextOnErrors: !0,
      validate: async (e) => {
        var r;
        console.log("test2");
        const t = {};
        if (!e.email)
          return t.email = "Please enter your email", t;
        js.emit("wait", { waiting: !0 });
        const n = await yk(
          {
            url: "/api/v2/contact_enrichment",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer YYv8gvrl55fVPmJDQAWz8JLmhtpZpWF1MlqOrv8dfs7yPfMHPLHTdAlUeJcDiIUe"
            },
            bodyJson: {
              clearbit: !0,
              apollo: !0,
              proxycurl: !0,
              email: e.email
            }
          }
        );
        return js.emit("wait", { waiting: !1 }), console.log(n.json), n.status === 400 ? t.email = (r = n.json) == null ? void 0 : r.message : n.status !== 200 && (t.email = `Server response: ${n == null ? void 0 : n.status}`), t;
      },
      validateOnBlur: !1,
      validateOnChange: !1,
      onSubmit: async (e, t, n) => (console.log(e), e)
    },
    {
      id: "StepLinkedIn",
      titles: {},
      initialValues: {
        linkedin: ""
      },
      fields: {
        inputTypes: {
          linkedin: "url"
        },
        placeholders: {
          linkedin: "e.g. https://www.linkedin.com/in/williamhgates/"
        }
      },
      //hideNext: true,
      //hidePrevious: true,
      shouldSkip: (e) => !!e.StepEmail.linkedin
    },
    {
      id: "EmailCheck",
      component: /* @__PURE__ */ A.jsx(ak, {}),
      hideNext: !0,
      hidePrevious: !0,
      shouldSkip: (e, t) => {
        if (e.StepEmail.emailChecked || (e.StepEmail.emailChecked = !0, t === -1))
          return !0;
        return !1;
        //!!values.StepGeneral.email
      }
    },
    {
      id: "StepGeneral",
      title: "General Settings",
      helpText: "Select whether you would like to join our Slack channel and newsletter.",
      titles: {
        useSlack: "Join Our Slack Channel"
        // area: 'Area of Interest'
      },
      initialValues: {
        useSlack: !0,
        useNewsletter: !0,
        area: ""
        // lastName: 'Doe',
        // age: 30,
      },
      // attrs defined under "fields" are for custom step renderer made
      // just for this demo folder, otherwise these aren't part of
      // the step config object
      fields: {
        inputTypes: {
          useSlack: "checkbox",
          useNewsletter: "checkbox",
          area: "select",
          lastName: "custom-text"
          // age: 'number',
          // email: 'email'
        },
        placeholders: {
          area: "e.g. John",
          lastName: "e.g. Doe"
          // age: 'e.g. 18',
          // email: 'e.g. john@doe.com'
        }
      },
      validationSchema: Sx,
      disableNextOnErrors: !0
    },
    // {
    //   id: 'Step2',
    //   helpText: 'Username should include your first name. This step is to demonstrate that we can validate field based on what user typed in the previous step.',
    //   initialValues: {
    //     username: 'mrjohn',
    //   },
    //   fields: {
    //     inputTypes: {
    //       username: 'text',
    //     }
    //   },
    //   validate: validateUsername,
    //   disableNextOnErrors: true
    // },
    // {
    //   id: 'Async',
    //   component: <StepAsync />,
    //   onSubmit: async (stepValues: Values, _allValues: WizardValues, _actions: FormikHelpers<any>) => {
    //     const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
    //     await delay(2000)
    //     return stepValues
    //   }
    // },
    {
      id: "Final",
      component: /* @__PURE__ */ A.jsx(lk, {}),
      hideNext: !0,
      hidePrevious: !1
    }
  ], cf = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never"
  }), xa = S.createContext({}), Ta = S.createContext(null), ff = typeof document < "u", df = ff ? S.useLayoutEffect : S.useEffect, vg = S.createContext({ strict: !1 }), hf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), gk = "framerAppearId", gg = "data-" + hf(gk), wk = {
    skipAnimations: !1,
    useManualTiming: !1
  };
  class Hh {
    constructor() {
      this.order = [], this.scheduled = /* @__PURE__ */ new Set();
    }
    add(t) {
      if (!this.scheduled.has(t))
        return this.scheduled.add(t), this.order.push(t), !0;
    }
    remove(t) {
      const n = this.order.indexOf(t);
      n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
    }
    clear() {
      this.order.length = 0, this.scheduled.clear();
    }
  }
  function Sk(e) {
    let t = new Hh(), n = new Hh(), r = 0, i = !1, o = !1;
    const s = /* @__PURE__ */ new WeakSet(), a = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (l, u = !1, c = !1) => {
        const f = c && i, d = f ? t : n;
        return u && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      /**
       * Cancel the provided callback from running on the next frame.
       */
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      /**
       * Execute all schedule callbacks.
       */
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            s.has(c) && (a.schedule(c), e()), c(l);
          }
        i = !1, o && (o = !1, a.process(l));
      }
    };
    return a;
  }
  const No = [
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
    // Compute
  ], xk = 40;
  function wg(e, t) {
    let n = !1, r = !0;
    const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    }, o = No.reduce((f, d) => (f[d] = Sk(() => n = !0), f), {}), s = (f) => {
      o[f].process(i);
    }, a = () => {
      const f = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, xk), 1), i.timestamp = f, i.isProcessing = !0, No.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(a));
    }, l = () => {
      n = !0, r = !0, i.isProcessing || e(a);
    };
    return { schedule: No.reduce((f, d) => {
      const y = o[d];
      return f[d] = (v, g = !1, T = !1) => (n || l(), y.schedule(v, g, T)), f;
    }, {}), cancel: (f) => No.forEach((d) => o[d].cancel(f)), state: i, steps: o };
  }
  const { schedule: pf, cancel: yj } = wg(queueMicrotask, !1);
  function Tk(e, t, n, r) {
    const { visualElement: i } = S.useContext(xa), o = S.useContext(vg), s = S.useContext(Ta), a = S.useContext(cf).reducedMotion, l = S.useRef();
    r = r || o.renderer, !l.current && r && (l.current = r(e, {
      visualState: t,
      parent: i,
      props: n,
      presenceContext: s,
      blockInitialAnimation: s ? s.initial === !1 : !1,
      reducedMotionConfig: a
    }));
    const u = l.current;
    S.useInsertionEffect(() => {
      u && u.update(n, s);
    });
    const c = S.useRef(!!(n[gg] && !window.HandoffComplete));
    return df(() => {
      u && (pf.postRender(u.render), c.current && u.animationState && u.animationState.animateChanges());
    }), S.useEffect(() => {
      u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
    }), u;
  }
  function Or(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function Ek(e, t, n) {
    return S.useCallback(
      (r) => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Or(n) && (n.current = r));
      },
      /**
       * Only pass a new ref callback to React if we've received a visual element
       * factory. Otherwise we'll be mounting/remounting every time externalRef
       * or other dependencies change.
       */
      [t]
    );
  }
  function Ji(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function Ea(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
  }
  const mf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], yf = ["initial", ...mf];
  function Pa(e) {
    return Ea(e.animate) || yf.some((t) => Ji(e[t]));
  }
  function Sg(e) {
    return !!(Pa(e) || e.variants);
  }
  function Pk(e, t) {
    if (Pa(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || Ji(n) ? n : void 0,
        animate: Ji(r) ? r : void 0
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function Ck(e) {
    const { initial: t, animate: n } = Pk(e, S.useContext(xa));
    return S.useMemo(() => ({ initial: t, animate: n }), [Kh(t), Kh(n)]);
  }
  function Kh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const Gh = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  }, eo = {};
  for (const e in Gh)
    eo[e] = {
      isEnabled: (t) => Gh[e].some((n) => !!t[n])
    };
  function kk(e) {
    for (const t in e)
      eo[t] = {
        ...eo[t],
        ...e[t]
      };
  }
  const vf = S.createContext({}), xg = S.createContext({}), _k = Symbol.for("motionComponentSymbol");
  function Ok({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && kk(e);
    function o(a, l) {
      let u;
      const c = {
        ...S.useContext(cf),
        ...a,
        layoutId: Ak(a)
      }, { isStatic: f } = c, d = Ck(a), y = r(a, f);
      if (!f && ff) {
        d.visualElement = Tk(i, y, c, t);
        const v = S.useContext(xg), g = S.useContext(vg).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          c,
          g,
          e,
          v
        ));
      }
      return A.jsxs(xa.Provider, { value: d, children: [u && d.visualElement ? A.jsx(u, { visualElement: d.visualElement, ...c }) : null, n(i, a, Ek(y, d.visualElement, l), y, f, d.visualElement)] });
    }
    const s = S.forwardRef(o);
    return s[_k] = i, s;
  }
  function Ak({ layoutId: e }) {
    const t = S.useContext(vf).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function jk(e) {
    function t(r, i = {}) {
      return Ok(e(r, i));
    }
    if (typeof Proxy > "u")
      return t;
    const n = /* @__PURE__ */ new Map();
    return new Proxy(t, {
      /**
       * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
       * The prop name is passed through as `key` and we can use that to generate a `motion`
       * DOM component with that name.
       */
      get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
    });
  }
  const Fk = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];
  function gf(e) {
    return (
      /**
       * If it's not a string, it's a custom React component. Currently we only support
       * HTML custom React components.
       */
      typeof e != "string" || /**
       * If it contains a dash, the element is a custom HTML webcomponent.
       */
      e.includes("-") ? !1 : (
        /**
         * If it's in our list of lowercase SVG tags, it's an SVG component
         */
        !!(Fk.indexOf(e) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/u.test(e))
      )
    );
  }
  const Fs = {};
  function Rk(e) {
    Object.assign(Fs, e);
  }
  const ho = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ], dr = new Set(ho);
  function Tg(e, { layout: t, layoutId: n }) {
    return dr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Fs[e] || e === "opacity");
  }
  const Le = (e) => !!(e && e.getVelocity), Lk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, Mk = ho.length;
  function Dk(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < Mk; s++) {
      const a = ho[s];
      if (e[a] !== void 0) {
        const l = Lk[a] || a;
        o += `${l}(${e[a]}) `;
      }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o;
  }
  const Eg = (e) => (t) => typeof t == "string" && t.startsWith(e), Pg = Eg("--"), bk = Eg("var(--"), wf = (e) => bk(e) ? Nk.test(e.split("/*")[0].trim()) : !1, Nk = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Vk = (e, t) => t && typeof e == "number" ? t.transform(e) : e, kn = (e, t, n) => n > t ? t : n < e ? e : n, ei = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e
  }, Ai = {
    ...ei,
    transform: (e) => kn(0, 1, e)
  }, Vo = {
    ...ei,
    default: 1
  }, ji = (e) => Math.round(e * 1e5) / 1e5, Sf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, $k = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Ik = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  function po(e) {
    return typeof e == "string";
  }
  const mo = (e) => ({
    test: (t) => po(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }), en = mo("deg"), jt = mo("%"), V = mo("px"), zk = mo("vh"), Bk = mo("vw"), Yh = {
    ...jt,
    parse: (e) => jt.parse(e) / 100,
    transform: (e) => jt.transform(e * 100)
  }, Qh = {
    ...ei,
    transform: Math.round
  }, Cg = {
    // Border props
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    // Positioning props
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    // Spacing props
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    // Transform props
    rotate: en,
    rotateX: en,
    rotateY: en,
    rotateZ: en,
    scale: Vo,
    scaleX: Vo,
    scaleY: Vo,
    scaleZ: Vo,
    skew: en,
    skewX: en,
    skewY: en,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Ai,
    originX: Yh,
    originY: Yh,
    originZ: V,
    // Misc
    zIndex: Qh,
    backgroundPositionX: V,
    backgroundPositionY: V,
    // SVG
    fillOpacity: Ai,
    strokeOpacity: Ai,
    numOctaves: Qh
  };
  function xf(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1, u = !1, c = !0;
    for (const f in t) {
      const d = t[f];
      if (Pg(f)) {
        o[f] = d;
        continue;
      }
      const y = Cg[f], v = Vk(d, y);
      if (dr.has(f)) {
        if (l = !0, s[f] = v, !c)
          continue;
        d !== (y.default || 0) && (c = !1);
      } else
        f.startsWith("origin") ? (u = !0, a[f] = v) : i[f] = v;
    }
    if (t.transform || (l || r ? i.transform = Dk(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
      const { originX: f = "50%", originY: d = "50%", originZ: y = 0 } = a;
      i.transformOrigin = `${f} ${d} ${y}`;
    }
  }
  const Tf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function kg(e, t, n) {
    for (const r in t)
      !Le(t[r]) && !Tg(r, n) && (e[r] = t[r]);
  }
  function Uk({ transformTemplate: e }, t, n) {
    return S.useMemo(() => {
      const r = Tf();
      return xf(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
  }
  function Wk(e, t, n) {
    const r = e.style || {}, i = {};
    return kg(i, r, e), Object.assign(i, Uk(e, t, n)), i;
  }
  function Hk(e, t, n) {
    const r = {}, i = Wk(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
  }
  const Kk = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport"
  ]);
  function Rs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Kk.has(e);
  }
  let _g = (e) => !Rs(e);
  function Gk(e) {
    e && (_g = (t) => t.startsWith("on") ? !Rs(t) : e(t));
  }
  try {
    Gk(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function Yk(e, t, n) {
    const r = {};
    for (const i in e)
      i === "values" && typeof e.values == "object" || (_g(i) || n === !0 && Rs(i) || !t && !Rs(i) || // If trying to use native HTML drag events, forward drag listeners
      e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function Xh(e, t, n) {
    return typeof e == "string" ? e : V.transform(t + n * e);
  }
  function Qk(e, t, n) {
    const r = Xh(t, e.x, e.width), i = Xh(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const Xk = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, Zk = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function qk(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? Xk : Zk;
    e[o.offset] = V.transform(-r);
    const s = V.transform(t), a = V.transform(n);
    e[o.array] = `${s} ${a}`;
  }
  function Ef(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    // This is object creation, which we try to avoid per-frame.
    ...u
  }, c, f, d) {
    if (xf(e, u, c, d), f) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: y, style: v, dimensions: g } = e;
    y.transform && (g && (v.transform = y.transform), delete y.transform), g && (i !== void 0 || o !== void 0 || v.transform) && (v.transformOrigin = Qk(g, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (y.x = t), n !== void 0 && (y.y = n), r !== void 0 && (y.scale = r), s !== void 0 && qk(y, s, a, l, !1);
  }
  const Og = () => ({
    ...Tf(),
    attrs: {}
  }), Pf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function Jk(e, t, n, r) {
    const i = S.useMemo(() => {
      const o = Og();
      return Ef(o, t, { enableHardwareAcceleration: !1 }, Pf(r), e.transformTemplate), {
        ...o.attrs,
        style: { ...o.style }
      };
    }, [t]);
    if (e.style) {
      const o = {};
      kg(o, e.style, e), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function e_(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
      const l = (gf(n) ? Jk : Hk)(r, o, s, n), u = Yk(r, typeof n == "string", e), c = n !== S.Fragment ? { ...u, ...l, ref: i } : {}, { children: f } = r, d = S.useMemo(() => Le(f) ? f.get() : f, [f]);
      return S.createElement(n, {
        ...c,
        children: d
      });
    };
  }
  function Ag(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
      e.style.setProperty(o, n[o]);
  }
  const jg = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);
  function Fg(e, t, n, r) {
    Ag(e, t, void 0, r);
    for (const i in t.attrs)
      e.setAttribute(jg.has(i) ? i : hf(i), t.attrs[i]);
  }
  function Cf(e, t, n) {
    var r;
    const { style: i } = e, o = {};
    for (const s in i)
      (Le(i[s]) || t.style && Le(t.style[s]) || Tg(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o;
  }
  function Rg(e, t, n) {
    const r = Cf(e, t, n);
    for (const i in e)
      if (Le(e[i]) || Le(t[i])) {
        const o = ho.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
        r[o] = e[i];
      }
    return r;
  }
  function kf(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
  }
  function Lg(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const Lu = (e) => Array.isArray(e), t_ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), n_ = (e) => Lu(e) ? e[e.length - 1] || 0 : e;
  function es(e) {
    const t = Le(e) ? e.get() : e;
    return t_(t) ? t.toValue() : t;
  }
  function r_({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
      latestValues: i_(r, i, o, e),
      renderState: t()
    };
    return n && (s.mount = (a) => n(r, a, s)), s;
  }
  const Mg = (e) => (t, n) => {
    const r = S.useContext(xa), i = S.useContext(Ta), o = () => r_(e, t, r, i);
    return n ? o() : Lg(o);
  };
  function i_(e, t, n, r) {
    const i = {}, o = r(e, {});
    for (const d in o)
      i[d] = es(o[d]);
    let { initial: s, animate: a } = e;
    const l = Pa(e), u = Sg(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !Ea(f) && (Array.isArray(f) ? f : [f]).forEach((y) => {
      const v = kf(e, y);
      if (!v)
        return;
      const { transitionEnd: g, transition: T, ...p } = v;
      for (const h in p) {
        let m = p[h];
        if (Array.isArray(m)) {
          const w = c ? m.length - 1 : 0;
          m = m[w];
        }
        m !== null && (i[h] = m);
      }
      for (const h in g)
        i[h] = g[h];
    }), i;
  }
  const Me = (e) => e, { schedule: q, cancel: _n, state: Ce, steps: hl } = wg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Me, !0), o_ = {
    useVisualState: Mg({
      scrapeMotionValuesFromProps: Rg,
      createRenderState: Og,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        q.read(() => {
          try {
            n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
          } catch {
            n.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
        }), q.render(() => {
          Ef(n, r, { enableHardwareAcceleration: !1 }, Pf(t.tagName), e.transformTemplate), Fg(t, n);
        });
      }
    })
  }, s_ = {
    useVisualState: Mg({
      scrapeMotionValuesFromProps: Cf,
      createRenderState: Tf
    })
  };
  function a_(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...gf(e) ? o_ : s_,
      preloadedFeatures: n,
      useRender: e_(t),
      createVisualElement: r,
      Component: e
    };
  }
  function zt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const Dg = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
  function Ca(e, t = "page") {
    return {
      point: {
        x: e[`${t}X`],
        y: e[`${t}Y`]
      }
    };
  }
  const l_ = (e) => (t) => Dg(t) && e(t, Ca(t));
  function Ut(e, t, n, r) {
    return zt(e, t, l_(n), r);
  }
  const u_ = (e, t) => (n) => t(e(n)), Wt = (...e) => e.reduce(u_);
  function bg(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? (t = e, n) : !1;
    };
  }
  const Zh = bg("dragHorizontal"), qh = bg("dragVertical");
  function Ng(e) {
    let t = !1;
    if (e === "y")
      t = qh();
    else if (e === "x")
      t = Zh();
    else {
      const n = Zh(), r = qh();
      n && r ? t = () => {
        n(), r();
      } : (n && n(), r && r());
    }
    return t;
  }
  function Vg() {
    const e = Ng(!0);
    return e ? (e(), !1) : !0;
  }
  class Ln {
    constructor(t) {
      this.isMounted = !1, this.node = t;
    }
    update() {
    }
  }
  function Jh(e, t) {
    const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => {
      if (o.pointerType === "touch" || Vg())
        return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && q.postRender(() => l(o, s));
    };
    return Ut(e.current, n, i, {
      passive: !e.getProps()[r]
    });
  }
  class c_ extends Ln {
    mount() {
      this.unmount = Wt(Jh(this.node, !0), Jh(this.node, !1));
    }
    unmount() {
    }
  }
  class f_ extends Ln {
    constructor() {
      super(...arguments), this.isActive = !1;
    }
    onFocus() {
      let t = !1;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch {
        t = !0;
      }
      !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
    }
    onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
    }
    mount() {
      this.unmount = Wt(zt(this.node.current, "focus", () => this.onFocus()), zt(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  const $g = (e, t) => t ? e === t ? !0 : $g(e, t.parentElement) : !1;
  function pl(e, t) {
    if (!t)
      return;
    const n = new PointerEvent("pointer" + e);
    t(n, Ca(n));
  }
  class d_ extends Ln {
    constructor() {
      super(...arguments), this.removeStartListeners = Me, this.removeEndListeners = Me, this.removeAccessibleListeners = Me, this.startPointerPress = (t, n) => {
        if (this.isPressing)
          return;
        this.removeEndListeners();
        const r = this.node.getProps(), o = Ut(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd())
            return;
          const { onTap: u, onTapCancel: c, globalTapTarget: f } = this.node.getProps(), d = !f && !$g(this.node.current, a.target) ? c : u;
          d && q.update(() => d(a, l));
        }, {
          passive: !(r.onTap || r.onPointerUp)
        }), s = Ut(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
          passive: !(r.onTapCancel || r.onPointerCancel)
        });
        this.removeEndListeners = Wt(o, s), this.startPress(t, n);
      }, this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const s = (a) => {
            a.key !== "Enter" || !this.checkPressEnd() || pl("up", (l, u) => {
              const { onTap: c } = this.node.getProps();
              c && q.postRender(() => c(l, u));
            });
          };
          this.removeEndListeners(), this.removeEndListeners = zt(this.node.current, "keyup", s), pl("down", (a, l) => {
            this.startPress(a, l);
          });
        }, n = zt(this.node.current, "keydown", t), r = () => {
          this.isPressing && pl("cancel", (o, s) => this.cancelPress(o, s));
        }, i = zt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Wt(n, i);
      };
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && q.postRender(() => r(t, n));
    }
    checkPressEnd() {
      return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Vg();
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd())
        return;
      const { onTapCancel: r } = this.node.getProps();
      r && q.postRender(() => r(t, n));
    }
    mount() {
      const t = this.node.getProps(), n = Ut(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart)
      }), r = zt(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Wt(n, r);
    }
    unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
  }
  const Mu = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap(), h_ = (e) => {
    const t = Mu.get(e.target);
    t && t(e);
  }, p_ = (e) => {
    e.forEach(h_);
  };
  function m_({ root: e, ...t }) {
    const n = e || document;
    ml.has(n) || ml.set(n, {});
    const r = ml.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(p_, { root: e, ...t })), r[i];
  }
  function y_(e, t, n) {
    const r = m_(t);
    return Mu.set(e, n), r.observe(e), () => {
      Mu.delete(e), r.unobserve(e);
    };
  }
  const v_ = {
    some: 0,
    all: 1
  };
  class g_ extends Ln {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : v_[i]
      }, a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
        d && d(l);
      };
      return y_(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u")
        return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(w_(t, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function w_({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const S_ = {
    inView: {
      Feature: g_
    },
    tap: {
      Feature: d_
    },
    focus: {
      Feature: f_
    },
    hover: {
      Feature: c_
    }
  };
  function Ig(e, t) {
    if (!Array.isArray(t))
      return !1;
    const n = t.length;
    if (n !== e.length)
      return !1;
    for (let r = 0; r < n; r++)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
  function x_(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t;
  }
  function T_(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
  }
  function ka(e, t, n) {
    const r = e.getProps();
    return kf(r, t, n !== void 0 ? n : r.custom, x_(e), T_(e));
  }
  const xn = (e) => e * 1e3, Ht = (e) => e / 1e3, E_ = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, P_ = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), C_ = {
    type: "keyframes",
    duration: 0.8
  }, k_ = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  }, __ = (e, { keyframes: t }) => t.length > 2 ? C_ : dr.has(e) ? e.startsWith("scale") ? P_(t[1]) : E_ : k_;
  function O_({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  function _f(e, t) {
    return e[t] || e.default || e;
  }
  const A_ = (e) => e !== null;
  function _a(e, { repeat: t, repeatType: n = "loop" }, r) {
    const i = e.filter(A_), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r;
  }
  let ts;
  function j_() {
    ts = void 0;
  }
  const Tn = {
    now: () => (ts === void 0 && Tn.set(Ce.isProcessing || wk.useManualTiming ? Ce.timestamp : performance.now()), ts),
    set: (e) => {
      ts = e, queueMicrotask(j_);
    }
  }, zg = (e) => /^0[^.\s]+$/u.test(e);
  function F_(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || zg(e) : !0;
  }
  let Du = Me;
  const Bg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), R_ = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function L_(e) {
    const t = R_.exec(e);
    if (!t)
      return [,];
    const [, n, r, i] = t;
    return [`--${n ?? r}`, i];
  }
  function Ug(e, t, n = 1) {
    const [r, i] = L_(e);
    if (!r)
      return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const s = o.trim();
      return Bg(s) ? parseFloat(s) : s;
    }
    return wf(i) ? Ug(i, t, n + 1) : i;
  }
  const M_ = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY"
  ]), ep = (e) => e === ei || e === V, tp = (e, t) => parseFloat(e.split(", ")[t]), np = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
      return tp(i[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/u);
      return o ? tp(o[1], e) : 0;
    }
  }, D_ = /* @__PURE__ */ new Set(["x", "y", "z"]), b_ = ho.filter((e) => !D_.has(e));
  function N_(e) {
    const t = [];
    return b_.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t;
  }
  const Gr = {
    // Dimensions
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    // Transform
    x: np(4, 13),
    y: np(5, 14)
  };
  Gr.translateX = Gr.x;
  Gr.translateY = Gr.y;
  const Wg = (e) => (t) => t.test(e), V_ = {
    test: (e) => e === "auto",
    parse: (e) => e
  }, Hg = [ei, V, jt, en, Bk, zk, V_], rp = (e) => Hg.find(Wg(e)), Qn = /* @__PURE__ */ new Set();
  let bu = !1, Nu = !1;
  function Kg() {
    if (Nu) {
      const e = Array.from(Qn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
      t.forEach((r) => {
        const i = N_(r);
        i.length && (n.set(r, i), r.render());
      }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i && i.forEach(([o, s]) => {
          var a;
          (a = r.getValue(o)) === null || a === void 0 || a.set(s);
        });
      }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
    }
    Nu = !1, bu = !1, Qn.forEach((e) => e.complete()), Qn.clear();
  }
  function Gg() {
    Qn.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (Nu = !0);
    });
  }
  function $_() {
    Gg(), Kg();
  }
  class Of {
    constructor(t, n, r, i, o, s = !1) {
      this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
    }
    scheduleResolve() {
      this.isScheduled = !0, this.isAsync ? (Qn.add(this), bu || (bu = !0, q.read(Gg), q.resolveKeyframes(Kg))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
      for (let o = 0; o < t.length; o++)
        if (t[o] === null)
          if (o === 0) {
            const s = i == null ? void 0 : i.get(), a = t[t.length - 1];
            if (s !== void 0)
              t[0] = s;
            else if (r && n) {
              const l = r.readValue(n, a);
              l != null && (t[0] = l);
            }
            t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
          } else
            t[o] = t[o - 1];
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete() {
      this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Qn.delete(this);
    }
    cancel() {
      this.isComplete || (this.isScheduled = !1, Qn.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  const Af = (e, t) => (n) => !!(po(n) && Ik.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Yg = (e, t, n) => (r) => {
    if (!po(r))
      return r;
    const [i, o, s, a] = r.match(Sf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  }, I_ = (e) => kn(0, 255, e), yl = {
    ...ei,
    transform: (e) => Math.round(I_(e))
  }, Hn = {
    test: Af("rgb", "red"),
    parse: Yg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + yl.transform(e) + ", " + yl.transform(t) + ", " + yl.transform(n) + ", " + ji(Ai.transform(r)) + ")"
  };
  function z_(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    };
  }
  const Vu = {
    test: Af("#"),
    parse: z_,
    transform: Hn.transform
  }, Ar = {
    test: Af("hsl", "hue"),
    parse: Yg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + jt.transform(ji(t)) + ", " + jt.transform(ji(n)) + ", " + ji(Ai.transform(r)) + ")"
  }, Fe = {
    test: (e) => Hn.test(e) || Vu.test(e) || Ar.test(e),
    parse: (e) => Hn.test(e) ? Hn.parse(e) : Ar.test(e) ? Ar.parse(e) : Vu.parse(e),
    transform: (e) => po(e) ? e : e.hasOwnProperty("red") ? Hn.transform(e) : Ar.transform(e)
  };
  function B_(e) {
    var t, n;
    return isNaN(e) && po(e) && (((t = e.match(Sf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match($k)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  const Qg = "number", Xg = "color", U_ = "var", W_ = "var(", ip = "${}", H_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function to(e) {
    const t = e.toString(), n = [], r = {
      color: [],
      number: [],
      var: []
    }, i = [];
    let o = 0;
    const a = t.replace(H_, (l) => (Fe.test(l) ? (r.color.push(o), i.push(Xg), n.push(Fe.parse(l))) : l.startsWith(W_) ? (r.var.push(o), i.push(U_), n.push(l)) : (r.number.push(o), i.push(Qg), n.push(parseFloat(l))), ++o, ip)).split(ip);
    return { values: n, split: a, indexes: r, types: i };
  }
  function Zg(e) {
    return to(e).values;
  }
  function qg(e) {
    const { split: t, types: n } = to(e), r = t.length;
    return (i) => {
      let o = "";
      for (let s = 0; s < r; s++)
        if (o += t[s], i[s] !== void 0) {
          const a = n[s];
          a === Qg ? o += ji(i[s]) : a === Xg ? o += Fe.transform(i[s]) : o += i[s];
        }
      return o;
    };
  }
  const K_ = (e) => typeof e == "number" ? 0 : e;
  function G_(e) {
    const t = Zg(e);
    return qg(e)(t.map(K_));
  }
  const On = {
    test: B_,
    parse: Zg,
    createTransformer: qg,
    getAnimatableNone: G_
  }, Y_ = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function Q_(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
      return e;
    const [r] = n.match(Sf) || [];
    if (!r)
      return e;
    const i = n.replace(r, "");
    let o = Y_.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const X_ = /\b([a-z-]*)\(.*?\)/gu, $u = {
    ...On,
    getAnimatableNone: (e) => {
      const t = e.match(X_);
      return t ? t.map(Q_).join(" ") : e;
    }
  }, Z_ = {
    ...Cg,
    // Color props
    color: Fe,
    backgroundColor: Fe,
    outlineColor: Fe,
    fill: Fe,
    stroke: Fe,
    // Border props
    borderColor: Fe,
    borderTopColor: Fe,
    borderRightColor: Fe,
    borderBottomColor: Fe,
    borderLeftColor: Fe,
    filter: $u,
    WebkitFilter: $u
  }, jf = (e) => Z_[e];
  function Jg(e, t) {
    let n = jf(e);
    return n !== $u && (n = On), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  const q_ = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function J_(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
      const o = e[r];
      typeof o == "string" && !q_.has(o) && to(o).values.length && (i = e[r]), r++;
    }
    if (i && n)
      for (const o of t)
        e[o] = Jg(n, i);
  }
  class e0 extends Of {
    constructor(t, n, r, i) {
      super(t, n, r, i, i == null ? void 0 : i.owner, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, element: n, name: r } = this;
      if (!n.current)
        return;
      super.readKeyframes();
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (typeof u == "string" && wf(u)) {
          const c = Ug(u, n.current);
          c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
        }
      }
      if (this.resolveNoneKeyframes(), !M_.has(r) || t.length !== 2)
        return;
      const [i, o] = t, s = rp(i), a = rp(o);
      if (s !== a)
        if (ep(s) && ep(a))
          for (let l = 0; l < t.length; l++) {
            const u = t[l];
            typeof u == "string" && (t[l] = parseFloat(u));
          }
        else
          this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: t, name: n } = this, r = [];
      for (let i = 0; i < t.length; i++)
        F_(t[i]) && r.push(i);
      r.length && J_(t, r, n);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: n, name: r } = this;
      if (!t.current)
        return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Gr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
      const i = n[n.length - 1];
      i !== void 0 && t.getValue(r, i).jump(i, !1);
    }
    measureEndState() {
      var t;
      const { element: n, name: r, unresolvedKeyframes: i } = this;
      if (!n.current)
        return;
      const o = n.getValue(r);
      o && o.jump(this.measuredOrigin, !1);
      const s = i.length - 1, a = i[s];
      i[s] = Gr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
        n.getValue(l).set(u);
      }), this.resolveNoneKeyframes();
    }
  }
  function e2(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const op = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
  (On.test(e) || e === "0") && // And it contains numbers and/or colors
  !e.startsWith("url("));
  function t2(e) {
    const t = e[0];
    if (e.length === 1)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t)
        return !0;
  }
  function n2(e, t, n, r) {
    const i = e[0];
    if (i === null)
      return !1;
    if (t === "display" || t === "visibility")
      return !0;
    const o = e[e.length - 1], s = op(i, t), a = op(o, t);
    return !s || !a ? !1 : t2(e) || n === "spring" && r;
  }
  class t0 {
    constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", ...a }) {
      this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a
      }, this.updateFinishedPromise();
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved() {
      return !this._resolved && !this.hasAttemptedResolve && $_(), this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(t, n) {
      this.hasAttemptedResolve = !0;
      const { name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
      if (!u && !n2(t, r, i, o))
        if (s)
          this.options.duration = 0;
        else {
          l == null || l(_a(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
          return;
        }
      const c = this.initPlayback(t, n);
      c !== !1 && (this._resolved = {
        keyframes: t,
        finalKeyframe: n,
        ...c
      }, this.onPostResolved());
    }
    onPostResolved() {
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(t, n) {
      return this.currentFinishedPromise.then(t, n);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((t) => {
        this.resolveFinishedPromise = t;
      });
    }
  }
  function n0(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const r2 = 5;
  function r0(e, t, n) {
    const r = Math.max(t - r2, 0);
    return n0(n - e(r), t - r);
  }
  const vl = 1e-3, i2 = 0.01, o2 = 10, s2 = 0.05, a2 = 1;
  function l2({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o, s = 1 - t;
    s = kn(s2, a2, s), e = kn(i2, o2, Ht(e)), s < 1 ? (i = (u) => {
      const c = u * s, f = c * e, d = c - n, y = Iu(u, s), v = Math.exp(-f);
      return vl - d / y * v;
    }, o = (u) => {
      const f = u * s * e, d = f * n + n, y = Math.pow(s, 2) * Math.pow(u, 2) * e, v = Math.exp(-f), g = Iu(Math.pow(u, 2), s);
      return (-i(u) + vl > 0 ? -1 : 1) * ((d - y) * v) / g;
    }) : (i = (u) => {
      const c = Math.exp(-u * e), f = (u - n) * e + 1;
      return -vl + c * f;
    }, o = (u) => {
      const c = Math.exp(-u * e), f = (n - u) * (e * e);
      return c * f;
    });
    const a = 5 / e, l = c2(i, o, a);
    if (e = xn(e), isNaN(l))
      return {
        stiffness: 100,
        damping: 10,
        duration: e
      };
    {
      const u = Math.pow(l, 2) * r;
      return {
        stiffness: u,
        damping: s * 2 * Math.sqrt(r * u),
        duration: e
      };
    }
  }
  const u2 = 12;
  function c2(e, t, n) {
    let r = n;
    for (let i = 1; i < u2; i++)
      r = r - e(r) / t(r);
    return r;
  }
  function Iu(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const f2 = ["duration", "bounce"], d2 = ["stiffness", "damping", "mass"];
  function sp(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function h2(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e
    };
    if (!sp(e, d2) && sp(e, f2)) {
      const n = l2(e);
      t = {
        ...t,
        ...n,
        mass: 1
      }, t.isResolvedFromDuration = !0;
    }
    return t;
  }
  function i0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, duration: c, velocity: f, isResolvedFromDuration: d } = h2({
      ...r,
      velocity: -Ht(r.velocity || 0)
    }), y = f || 0, v = l / (2 * Math.sqrt(a * u)), g = o - i, T = Ht(Math.sqrt(a / u)), p = Math.abs(g) < 5;
    n || (n = p ? 0.01 : 2), t || (t = p ? 5e-3 : 0.5);
    let h;
    if (v < 1) {
      const m = Iu(T, v);
      h = (w) => {
        const P = Math.exp(-v * T * w);
        return o - P * ((y + v * T * g) / m * Math.sin(m * w) + g * Math.cos(m * w));
      };
    } else if (v === 1)
      h = (m) => o - Math.exp(-T * m) * (g + (y + T * g) * m);
    else {
      const m = T * Math.sqrt(v * v - 1);
      h = (w) => {
        const P = Math.exp(-v * T * w), E = Math.min(m * w, 300);
        return o - P * ((y + v * T * g) * Math.sinh(E) + m * g * Math.cosh(E)) / m;
      };
    }
    return {
      calculatedDuration: d && c || null,
      next: (m) => {
        const w = h(m);
        if (d)
          s.done = m >= c;
        else {
          let P = y;
          m !== 0 && (v < 1 ? P = r0(h, m, w) : P = 0);
          const E = Math.abs(P) <= n, C = Math.abs(o - w) <= t;
          s.done = E && C;
        }
        return s.value = s.done ? o : w, s;
      }
    };
  }
  function ap({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = e[0], d = {
      done: !1,
      value: f
    }, y = (k) => a !== void 0 && k < a || l !== void 0 && k > l, v = (k) => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let g = n * t;
    const T = f + g, p = s === void 0 ? T : s(T);
    p !== T && (g = p - f);
    const h = (k) => -g * Math.exp(-k / r), m = (k) => p + h(k), w = (k) => {
      const b = h(k), R = m(k);
      d.done = Math.abs(b) <= u, d.value = d.done ? p : R;
    };
    let P, E;
    const C = (k) => {
      y(d.value) && (P = k, E = i0({
        keyframes: [d.value, v(d.value)],
        velocity: r0(m, k, d.value),
        // TODO: This should be passing * 1000
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c
      }));
    };
    return C(0), {
      calculatedDuration: null,
      next: (k) => {
        let b = !1;
        return !E && P === void 0 && (b = !0, w(k), C(k)), P !== void 0 && k >= P ? E.next(k - P) : (!b && w(k), d);
      }
    };
  }
  const o0 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, p2 = 1e-7, m2 = 12;
  function y2(e, t, n, r, i) {
    let o, s, a = 0;
    do
      s = t + (n - t) / 2, o = o0(s, r, i) - e, o > 0 ? n = s : t = s;
    while (Math.abs(o) > p2 && ++a < m2);
    return s;
  }
  function yo(e, t, n, r) {
    if (e === t && n === r)
      return Me;
    const i = (o) => y2(o, 0, 1, e, n);
    return (o) => o === 0 || o === 1 ? o : o0(i(o), t, r);
  }
  const v2 = yo(0.42, 0, 1, 1), g2 = yo(0, 0, 0.58, 1), s0 = yo(0.42, 0, 0.58, 1), w2 = (e) => Array.isArray(e) && typeof e[0] != "number", a0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, l0 = (e) => (t) => 1 - e(1 - t), Ff = (e) => 1 - Math.sin(Math.acos(e)), u0 = l0(Ff), S2 = a0(Ff), c0 = yo(0.33, 1.53, 0.69, 0.99), Rf = l0(c0), x2 = a0(Rf), T2 = (e) => (e *= 2) < 1 ? 0.5 * Rf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), lp = {
    linear: Me,
    easeIn: v2,
    easeInOut: s0,
    easeOut: g2,
    circIn: Ff,
    circInOut: S2,
    circOut: u0,
    backIn: Rf,
    backInOut: x2,
    backOut: c0,
    anticipate: T2
  }, up = (e) => {
    if (Array.isArray(e)) {
      Du(e.length === 4);
      const [t, n, r, i] = e;
      return yo(t, n, r, i);
    } else if (typeof e == "string")
      return Du(lp[e] !== void 0), lp[e];
    return e;
  }, no = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  }, ce = (e, t, n) => e + (t - e) * n;
  function gl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function E2({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t)
      i = o = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
      i = gl(l, a, e + 1 / 3), o = gl(l, a, e), s = gl(l, a, e - 1 / 3);
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
    };
  }
  const wl = (e, t, n) => {
    const r = e * e, i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  }, P2 = [Vu, Hn, Ar], C2 = (e) => P2.find((t) => t.test(e));
  function cp(e) {
    const t = C2(e);
    let n = t.parse(e);
    return t === Ar && (n = E2(n)), n;
  }
  const fp = (e, t) => {
    const n = cp(e), r = cp(t), i = { ...n };
    return (o) => (i.red = wl(n.red, r.red, o), i.green = wl(n.green, r.green, o), i.blue = wl(n.blue, r.blue, o), i.alpha = ce(n.alpha, r.alpha, o), Hn.transform(i));
  }, zu = /* @__PURE__ */ new Set(["none", "hidden"]);
  function k2(e, t) {
    return zu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
  }
  function Bu(e, t) {
    return (n) => n > 0 ? t : e;
  }
  function _2(e, t) {
    return (n) => ce(e, t, n);
  }
  function Lf(e) {
    return typeof e == "number" ? _2 : typeof e == "string" ? wf(e) ? Bu : Fe.test(e) ? fp : j2 : Array.isArray(e) ? f0 : typeof e == "object" ? Fe.test(e) ? fp : O2 : Bu;
  }
  function f0(e, t) {
    const n = [...e], r = n.length, i = e.map((o, s) => Lf(o)(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++)
        n[s] = i[s](o);
      return n;
    };
  }
  function O2(e, t) {
    const n = { ...e, ...t }, r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Lf(e[i])(e[i], t[i]));
    return (i) => {
      for (const o in r)
        n[o] = r[o](i);
      return n;
    };
  }
  function A2(e, t) {
    var n;
    const r = [], i = { color: 0, var: 0, number: 0 };
    for (let o = 0; o < t.values.length; o++) {
      const s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
      r[o] = l, i[s]++;
    }
    return r;
  }
  const j2 = (e, t) => {
    const n = On.createTransformer(t), r = to(e), i = to(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? zu.has(e) && !i.values.length || zu.has(t) && !r.values.length ? k2(e, t) : Wt(f0(A2(r, i), i.values), n) : Bu(e, t);
  };
  function d0(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ce(e, t, n) : Lf(e)(e, t);
  }
  function F2(e, t, n) {
    const r = [], i = n || d0, o = e.length - 1;
    for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || Me : t;
        a = Wt(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function R2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (Du(o === t.length), o === 1)
      return () => t[0];
    if (o === 2 && e[0] === e[1])
      return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = F2(t, r, i), a = s.length, l = (u) => {
      let c = 0;
      if (a > 1)
        for (; c < e.length - 2 && !(u < e[c + 1]); c++)
          ;
      const f = no(e[c], e[c + 1], u);
      return s[c](f);
    };
    return n ? (u) => l(kn(e[0], e[o - 1], u)) : l;
  }
  function L2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = no(0, t, r);
      e.push(ce(n, 1, i));
    }
  }
  function M2(e) {
    const t = [0];
    return L2(t, e.length - 1), t;
  }
  function D2(e, t) {
    return e.map((n) => n * t);
  }
  function b2(e, t) {
    return e.map(() => t || s0).splice(0, e.length - 1);
  }
  function Ls({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = w2(r) ? r.map(up) : up(r), o = {
      done: !1,
      value: t[0]
    }, s = D2(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : M2(t),
      e
    ), a = R2(s, t, {
      ease: Array.isArray(i) ? i : b2(t, i)
    });
    return {
      calculatedDuration: e,
      next: (l) => (o.value = a(l), o.done = l >= e, o)
    };
  }
  const dp = 2e4;
  function N2(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < dp; )
      t += n, r = e.next(t);
    return t >= dp ? 1 / 0 : t;
  }
  const V2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => q.update(t, !0),
      stop: () => _n(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => Ce.isProcessing ? Ce.timestamp : Tn.now()
    };
  }, $2 = {
    decay: ap,
    inertia: ap,
    tween: Ls,
    keyframes: Ls,
    spring: i0
  }, I2 = (e) => e / 100;
  class Mf extends t0 {
    constructor({ KeyframeResolver: t = Of, ...n }) {
      super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      };
      const { name: r, motionValue: i, keyframes: o } = this.options, s = (a, l) => this.onKeyframesResolved(a, l);
      r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, s, r, i) : this.resolver = new t(o, s, r, i), this.resolver.scheduleResolve();
    }
    initPlayback(t) {
      const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, a = $2[n] || Ls;
      let l, u;
      a !== Ls && typeof t[0] != "number" && (l = Wt(I2, d0(t[0], t[1])), t = [0, 100]);
      const c = a({ ...this.options, keyframes: t });
      o === "mirror" && (u = a({
        ...this.options,
        keyframes: [...t].reverse(),
        velocity: -s
      })), c.calculatedDuration === null && (c.calculatedDuration = N2(c));
      const { calculatedDuration: f } = c, d = f + i, y = d * (r + 1) - i;
      return {
        generator: c,
        mirroredGenerator: u,
        mapPercentToKeyframes: l,
        calculatedDuration: f,
        resolvedDuration: d,
        totalDuration: y
      };
    }
    onPostResolved() {
      const { autoplay: t = !0 } = this.options;
      this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
    }
    tick(t, n = !1) {
      const { resolved: r } = this;
      if (!r) {
        const { keyframes: k } = this.options;
        return { done: !0, value: k[k.length - 1] };
      }
      const { finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
      if (this.startTime === null)
        return o.next(0);
      const { delay: d, repeat: y, repeatType: v, repeatDelay: g, onUpdate: T } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
      const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? p < 0 : p > c;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
      let m = this.currentTime, w = o;
      if (y) {
        const k = Math.min(this.currentTime, c) / f;
        let b = Math.floor(k), R = k % 1;
        !R && k >= 1 && (R = 1), R === 1 && b--, b = Math.min(b, y + 1), !!(b % 2) && (v === "reverse" ? (R = 1 - R, g && (R -= g / f)) : v === "mirror" && (w = s)), m = kn(0, 1, R) * f;
      }
      const P = h ? { done: !1, value: l[0] } : w.next(m);
      a && (P.value = a(P.value));
      let { done: E } = P;
      !h && u !== null && (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
      return C && i !== void 0 && (P.value = _a(l, this.options, i)), T && T(P.value), C && this.finish(), P;
    }
    get duration() {
      const { resolved: t } = this;
      return t ? Ht(t.calculatedDuration) : 0;
    }
    get time() {
      return Ht(this.currentTime);
    }
    set time(t) {
      t = xn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      const n = this.playbackSpeed !== t;
      this.playbackSpeed = t, n && (this.time = Ht(this.currentTime));
    }
    play() {
      if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped)
        return;
      const { driver: t = V2, onPlay: n } = this.options;
      this.driver || (this.driver = t((i) => this.tick(i))), n && n();
      const r = this.driver.now();
      this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      var t;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
    }
    complete() {
      this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.teardown(), this.state = "finished";
      const { onComplete: t } = this.options;
      t && t();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t) {
      return this.startTime = 0, this.tick(t, !0);
    }
  }
  const h0 = (e) => Array.isArray(e) && typeof e[0] == "number";
  function p0(e) {
    return !!(!e || typeof e == "string" && e in Df || h0(e) || Array.isArray(e) && e.every(p0));
  }
  const vi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Df = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vi([0, 0.65, 0.55, 1]),
    circOut: vi([0.55, 0, 1, 0.45]),
    backIn: vi([0.31, 0.01, 0.66, -0.59]),
    backOut: vi([0.33, 1.53, 0.69, 0.99])
  };
  function z2(e) {
    return m0(e) || Df.easeOut;
  }
  function m0(e) {
    if (e)
      return h0(e) ? vi(e) : Array.isArray(e) ? e.map(z2) : Df[e];
  }
  function B2(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = m0(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
    });
  }
  const U2 = e2(() => Object.hasOwnProperty.call(Element.prototype, "animate")), W2 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]), Ms = 10, H2 = 2e4;
  function K2(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !p0(e.ease);
  }
  function G2(e, t) {
    const n = new Mf({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0
    });
    let r = { done: !1, value: e[0] };
    const i = [];
    let o = 0;
    for (; !r.done && o < H2; )
      r = n.sample(o), i.push(r.value), o += Ms;
    return {
      times: void 0,
      keyframes: i,
      duration: o - Ms,
      ease: "linear"
    };
  }
  class hp extends t0 {
    constructor(t) {
      super(t);
      const { name: n, motionValue: r, keyframes: i } = this.options;
      this.resolver = new e0(i, (o, s) => this.onKeyframesResolved(o, s), n, r), this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
      var r;
      let { duration: i = 300, times: o, ease: s, type: a, motionValue: l, name: u } = this.options;
      if (!(!((r = l.owner) === null || r === void 0) && r.current))
        return !1;
      if (K2(this.options)) {
        const { onComplete: f, onUpdate: d, motionValue: y, ...v } = this.options, g = G2(t, v);
        t = g.keyframes, t.length === 1 && (t[1] = t[0]), i = g.duration, o = g.times, s = g.ease, a = "keyframes";
      }
      const c = B2(l.owner.current, u, t, { ...this.options, duration: i, times: o, ease: s });
      return c.startTime = Tn.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
        const { onComplete: f } = this.options;
        l.set(_a(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
      }, {
        animation: c,
        duration: i,
        times: o,
        type: a,
        ease: s,
        keyframes: t
      };
    }
    get duration() {
      const { resolved: t } = this;
      if (!t)
        return 0;
      const { duration: n } = t;
      return Ht(n);
    }
    get time() {
      const { resolved: t } = this;
      if (!t)
        return 0;
      const { animation: n } = t;
      return Ht(n.currentTime || 0);
    }
    set time(t) {
      const { resolved: n } = this;
      if (!n)
        return;
      const { animation: r } = n;
      r.currentTime = xn(t);
    }
    get speed() {
      const { resolved: t } = this;
      if (!t)
        return 1;
      const { animation: n } = t;
      return n.playbackRate;
    }
    set speed(t) {
      const { resolved: n } = this;
      if (!n)
        return;
      const { animation: r } = n;
      r.playbackRate = t;
    }
    get state() {
      const { resolved: t } = this;
      if (!t)
        return "idle";
      const { animation: n } = t;
      return n.playState;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(t) {
      if (!this._resolved)
        this.pendingTimeline = t;
      else {
        const { resolved: n } = this;
        if (!n)
          return Me;
        const { animation: r } = n;
        r.timeline = t, r.onfinish = null;
      }
      return Me;
    }
    play() {
      if (this.isStopped)
        return;
      const { resolved: t } = this;
      if (!t)
        return;
      const { animation: n } = t;
      n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
      const { resolved: t } = this;
      if (!t)
        return;
      const { animation: n } = t;
      n.pause();
    }
    stop() {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      const { resolved: t } = this;
      if (!t)
        return;
      const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: a } = t;
      if (!(n.playState === "idle" || n.playState === "finished")) {
        if (this.time) {
          const { motionValue: l, onUpdate: u, onComplete: c, ...f } = this.options, d = new Mf({
            ...f,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a,
            isGenerator: !0
          }), y = xn(this.time);
          l.setWithVelocity(d.sample(y - Ms).value, d.sample(y).value, Ms);
        }
        this.cancel();
      }
    }
    complete() {
      const { resolved: t } = this;
      t && t.animation.finish();
    }
    cancel() {
      const { resolved: t } = this;
      t && t.animation.cancel();
    }
    static supports(t) {
      const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: a } = t;
      return U2() && r && W2.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
       * If we're outputting values to onUpdate then we can't use WAAPI as there's
       * no way to read the value from WAAPI every frame.
       */
      !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && a !== "inertia";
    }
  }
  const bf = (e, t, n, r = {}, i, o) => (s) => {
    const a = _f(r, e) || {}, l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - xn(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        t.set(d), a.onUpdate && a.onUpdate(d);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i
    };
    O_(a) || (c = {
      ...c,
      ...__(e, c)
    }), c.duration && (c.duration = xn(c.duration)), c.repeatDelay && (c.repeatDelay = xn(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
      const d = _a(c.keyframes, a);
      if (d !== void 0) {
        q.update(() => {
          c.onUpdate(d), c.onComplete();
        });
        return;
      }
    }
    return !o && hp.supports(c) ? new hp(c) : new Mf(c);
  };
  function Ds(e) {
    return !!(Le(e) && e.add);
  }
  function Nf(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Vf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class $f {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return Nf(this.subscriptions, t), () => Vf(this.subscriptions, t);
    }
    notify(t, n, r) {
      const i = this.subscriptions.length;
      if (i)
        if (i === 1)
          this.subscriptions[0](t, n, r);
        else
          for (let o = 0; o < i; o++) {
            const s = this.subscriptions[o];
            s && s(t, n, r);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const pp = 30, Y2 = (e) => !isNaN(parseFloat(e));
  class Q2 {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(t, n = {}) {
      this.version = "11.2.0", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
        const o = Tn.now();
        this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.hasAnimated = !1, this.setCurrent(t), this.canTrackVelocity = Y2(this.current), this.owner = n.owner;
    }
    setCurrent(t) {
      this.current = t, this.updatedAt = Tn.now();
    }
    setPrevFrameValue(t = this.current) {
      this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(t) {
      return this.on("change", t);
    }
    on(t, n) {
      this.events[t] || (this.events[t] = new $f());
      const r = this.events[t].add(n);
      return t === "change" ? () => {
        r(), q.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : r;
    }
    clearListeners() {
      for (const t in this.events)
        this.events[t].clear();
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(t, n) {
      this.passiveEffect = t, this.stopPassiveEffect = n;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(t, n = !0) {
      !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
      this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(t, n = !0) {
      this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
      return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
      const t = Tn.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > pp)
        return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, pp);
      return n0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(t) {
      return this.stop(), new Promise((n) => {
        this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function ro(e, t) {
    return new Q2(e, t);
  }
  function X2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ro(n));
  }
  function Z2(e, t) {
    const n = ka(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
    o = { ...o, ...r };
    for (const s in o) {
      const a = n_(o[s]);
      X2(e, s, a);
    }
  }
  function q2({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
  }
  function y0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    var o;
    let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
    const u = e.getValue("willChange");
    r && (s = r);
    const c = [], f = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
      const y = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null), v = l[d];
      if (v === void 0 || f && q2(f, d))
        continue;
      const g = {
        delay: n,
        elapsed: 0,
        ..._f(s || {}, d)
      };
      let T = !1;
      if (window.HandoffAppearAnimations) {
        const m = e.getProps()[gg];
        if (m) {
          const w = window.HandoffAppearAnimations(m, d);
          w !== null && (g.elapsed = w, T = !0);
        }
      }
      y.start(bf(d, y, v, e.shouldReduceMotion && dr.has(d) ? { type: !1 } : g, e, T));
      const p = y.animation;
      p && (Ds(u) && (u.add(d), p.then(() => u.remove(d))), c.push(p));
    }
    return a && Promise.all(c).then(() => {
      q.update(() => {
        a && Z2(e, a);
      });
    }), c;
  }
  function Uu(e, t, n = {}) {
    var r;
    const i = ka(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let { transition: o = e.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(y0(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
      const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = o;
      return J2(e, t, c + u, f, d, n);
    } : () => Promise.resolve(), { when: l } = o;
    if (l) {
      const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
      return u().then(() => c());
    } else
      return Promise.all([s(), a(n.delay)]);
  }
  function J2(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(eO).forEach((u, c) => {
      u.notify("AnimationStart", t), s.push(Uu(u, t, {
        ...o,
        delay: n + l(c)
      }).then(() => u.notify("AnimationComplete", t)));
    }), Promise.all(s);
  }
  function eO(e, t) {
    return e.sortNodePosition(t);
  }
  function tO(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((o) => Uu(e, o, n));
      r = Promise.all(i);
    } else if (typeof t == "string")
      r = Uu(e, t, n);
    else {
      const i = typeof t == "function" ? ka(e, t, n.custom) : t;
      r = Promise.all(y0(e, i, n));
    }
    return r.then(() => {
      q.postRender(() => {
        e.notify("AnimationComplete", t);
      });
    });
  }
  const nO = [...mf].reverse(), rO = mf.length;
  function iO(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => tO(e, n, r)));
  }
  function oO(e) {
    let t = iO(e);
    const n = aO();
    let r = !0;
    const i = (l) => (u, c) => {
      var f;
      const d = ka(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
      if (d) {
        const { transition: y, transitionEnd: v, ...g } = d;
        u = { ...u, ...g, ...v };
      }
      return u;
    };
    function o(l) {
      t = l(e);
    }
    function s(l) {
      const u = e.getProps(), c = e.getVariantContext(!0) || {}, f = [], d = /* @__PURE__ */ new Set();
      let y = {}, v = 1 / 0;
      for (let T = 0; T < rO; T++) {
        const p = nO[T], h = n[p], m = u[p] !== void 0 ? u[p] : c[p], w = Ji(m), P = p === l ? h.isActive : null;
        P === !1 && (v = T);
        let E = m === c[p] && m !== u[p] && w;
        if (E && r && e.manuallyAnimateOnMount && (E = !1), h.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
        !h.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
        !m && !h.prevProp || // Or if the prop doesn't define an animation
        Ea(m) || typeof m == "boolean")
          continue;
        let k = sO(h.prevProp, m) || // If we're making this variant active, we want to always make it active
        p === l && h.isActive && !E && w || // If we removed a higher-priority variant (i is in reverse order)
        T > v && w, b = !1;
        const R = Array.isArray(m) ? m : [m];
        let z = R.reduce(i(p), {});
        P === !1 && (z = {});
        const { prevResolvedValues: pe = {} } = h, se = {
          ...pe,
          ...z
        }, L = ($) => {
          k = !0, d.has($) && (b = !0, d.delete($)), h.needsAnimating[$] = !0;
          const I = e.getValue($);
          I && (I.liveStyle = !1);
        };
        for (const $ in se) {
          const I = z[$], K = pe[$];
          if (y.hasOwnProperty($))
            continue;
          let O = !1;
          Lu(I) && Lu(K) ? O = !Ig(I, K) : O = I !== K, O ? I != null ? L($) : d.add($) : I !== void 0 && d.has($) ? L($) : h.protectedKeys[$] = !0;
        }
        h.prevProp = m, h.prevResolvedValues = z, h.isActive && (y = { ...y, ...z }), r && e.blockInitialAnimation && (k = !1), k && (!E || b) && f.push(...R.map(($) => ({
          animation: $,
          options: { type: p }
        })));
      }
      if (d.size) {
        const T = {};
        d.forEach((p) => {
          const h = e.getBaseTarget(p), m = e.getValue(p);
          m && (m.liveStyle = !0), T[p] = h ?? null;
        }), f.push({ animation: T });
      }
      let g = !!f.length;
      return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(f) : Promise.resolve();
    }
    function a(l, u) {
      var c;
      if (n[l].isActive === u)
        return Promise.resolve();
      (c = e.variantChildren) === null || c === void 0 || c.forEach((d) => {
        var y;
        return (y = d.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u);
      }), n[l].isActive = u;
      const f = s(l);
      for (const d in n)
        n[d].protectedKeys = {};
      return f;
    }
    return {
      animateChanges: s,
      setActive: a,
      setAnimateFunction: o,
      getState: () => n
    };
  }
  function sO(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ig(t, e) : !1;
  }
  function bn(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function aO() {
    return {
      animate: bn(!0),
      whileInView: bn(),
      whileHover: bn(),
      whileTap: bn(),
      whileDrag: bn(),
      whileFocus: bn(),
      exit: bn()
    };
  }
  class lO extends Ln {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
      super(t), t.animationState || (t.animationState = oO(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), Ea(t) && (this.unmount = t.subscribe(this.node));
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
    }
  }
  let uO = 0;
  class cO extends Ln {
    constructor() {
      super(...arguments), this.id = uO++;
    }
    update() {
      if (!this.node.presenceContext)
        return;
      const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === r)
        return;
      const i = this.node.animationState.setActive("exit", !t);
      n && !t && i.then(() => n(this.id));
    }
    mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {
    }
  }
  const fO = {
    animation: {
      Feature: lO
    },
    exit: {
      Feature: cO
    }
  }, mp = (e, t) => Math.abs(e - t);
  function dO(e, t) {
    const n = mp(e.x, t.x), r = mp(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class v0 {
    constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const f = xl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, y = dO(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !y)
          return;
        const { point: v } = f, { timestamp: g } = Ce;
        this.history.push({ ...v, timestamp: g });
        const { onStart: T, onMove: p } = this.handlers;
        d || (T && T(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, f);
      }, this.handlePointerMove = (f, d) => {
        this.lastMoveEvent = f, this.lastMoveEventInfo = Sl(d, this.transformPagePoint), q.update(this.updatePoint, !0);
      }, this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: g } = this.handlers;
        if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const T = xl(f.type === "pointercancel" ? this.lastMoveEventInfo : Sl(d, this.transformPagePoint), this.history);
        this.startEvent && y && y(f, T), v && v(f, T);
      }, !Dg(t))
        return;
      this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
      const s = Ca(t), a = Sl(s, this.transformPagePoint), { point: l } = a, { timestamp: u } = Ce;
      this.history = [{ ...l, timestamp: u }];
      const { onSessionStart: c } = n;
      c && c(t, xl(a, this.history)), this.removeListeners = Wt(Ut(this.contextWindow, "pointermove", this.handlePointerMove), Ut(this.contextWindow, "pointerup", this.handlePointerUp), Ut(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), _n(this.updatePoint);
    }
  }
  function Sl(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function yp(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function xl({ point: e }, t) {
    return {
      point: e,
      delta: yp(e, g0(t)),
      offset: yp(e, hO(t)),
      velocity: pO(t, 0.1)
    };
  }
  function hO(e) {
    return e[0];
  }
  function g0(e) {
    return e[e.length - 1];
  }
  function pO(e, t) {
    if (e.length < 2)
      return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = g0(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > xn(t))); )
      n--;
    if (!r)
      return { x: 0, y: 0 };
    const o = Ht(i.timestamp - r.timestamp);
    if (o === 0)
      return { x: 0, y: 0 };
    const s = {
      x: (i.x - r.x) / o,
      y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
  }
  function Je(e) {
    return e.max - e.min;
  }
  function Wu(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function vp(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = ce(t.min, t.max, e.origin), e.scale = Je(n) / Je(t), (Wu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ce(n.min, n.max, e.origin) - e.originPoint, (Wu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function Fi(e, t, n, r) {
    vp(e.x, t.x, n.x, r ? r.originX : void 0), vp(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function gp(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Je(t);
  }
  function mO(e, t, n) {
    gp(e.x, t.x, n.x), gp(e.y, t.y, n.y);
  }
  function wp(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Je(t);
  }
  function Ri(e, t, n) {
    wp(e.x, t.x, n.x), wp(e.y, t.y, n.y);
  }
  function yO(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ce(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)), e;
  }
  function Sp(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
  }
  function vO(e, { top: t, left: n, bottom: r, right: i }) {
    return {
      x: Sp(e.x, n, i),
      y: Sp(e.y, t, r)
    };
  }
  function xp(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function gO(e, t) {
    return {
      x: xp(e.x, t.x),
      y: xp(e.y, t.y)
    };
  }
  function wO(e, t) {
    let n = 0.5;
    const r = Je(e), i = Je(t);
    return i > r ? n = no(t.min, t.max - r, e.min) : r > i && (n = no(e.min, e.max - i, t.min)), kn(0, 1, n);
  }
  function SO(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  const Hu = 0.35;
  function xO(e = Hu) {
    return e === !1 ? e = 0 : e === !0 && (e = Hu), {
      x: Tp(e, "left", "right"),
      y: Tp(e, "top", "bottom")
    };
  }
  function Tp(e, t, n) {
    return {
      min: Ep(e, t),
      max: Ep(e, n)
    };
  }
  function Ep(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const Pp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), jr = () => ({
    x: Pp(),
    y: Pp()
  }), Cp = () => ({ min: 0, max: 0 }), me = () => ({
    x: Cp(),
    y: Cp()
  });
  function ot(e) {
    return [e("x"), e("y")];
  }
  function w0({ top: e, left: t, right: n, bottom: r }) {
    return {
      x: { min: t, max: n },
      y: { min: e, max: r }
    };
  }
  function TO({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function EO(e, t) {
    if (!t)
      return e;
    const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
    return {
      top: n.y,
      left: n.x,
      bottom: r.y,
      right: r.x
    };
  }
  function Tl(e) {
    return e === void 0 || e === 1;
  }
  function Ku({ scale: e, scaleX: t, scaleY: n }) {
    return !Tl(e) || !Tl(t) || !Tl(n);
  }
  function $n(e) {
    return Ku(e) || S0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
  }
  function S0(e) {
    return kp(e.x) || kp(e.y);
  }
  function kp(e) {
    return e && e !== "0%";
  }
  function bs(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function _p(e, t, n, r, i) {
    return i !== void 0 && (e = bs(e, i, r)), bs(e, n, r) + t;
  }
  function Gu(e, t = 0, n = 1, r, i) {
    e.min = _p(e.min, t, n, r, i), e.max = _p(e.max, t, n, r, i);
  }
  function x0(e, { x: t, y: n }) {
    Gu(e.x, t.translate, t.scale, t.originPoint), Gu(e.y, n.translate, n.scale, n.originPoint);
  }
  function PO(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
      return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
      o = n[a], s = o.projectionDelta;
      const l = o.instance;
      l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Fr(e, {
        x: -o.scroll.offset.x,
        y: -o.scroll.offset.y
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, x0(e, s)), r && $n(o.latestValues) && Fr(e, o.latestValues));
    }
    t.x = Op(t.x), t.y = Op(t.y);
  }
  function Op(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
  }
  function on(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function Ap(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5, s = ce(e.min, e.max, o);
    Gu(e, t[n], t[r], s, t.scale);
  }
  const CO = ["x", "scaleX", "originX"], kO = ["y", "scaleY", "originY"];
  function Fr(e, t) {
    Ap(e.x, t, CO), Ap(e.y, t, kO);
  }
  function T0(e, t) {
    return w0(EO(e.getBoundingClientRect(), t));
  }
  function _O(e, t, n) {
    const r = T0(e, n), { scroll: i } = t;
    return i && (on(r.x, i.offset.x), on(r.y, i.offset.y)), r;
  }
  const E0 = ({ current: e }) => e ? e.ownerDocument.defaultView : null, OO = /* @__PURE__ */ new WeakMap();
  class AO {
    constructor(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = me(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1)
        return;
      const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ca(c, "page").point);
      }, o = (c, f) => {
        const { drag: d, dragPropagation: y, onDragStart: v } = this.getProps();
        if (d && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ng(d), !this.openGlobalLock))
          return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ot((T) => {
          let p = this.getAxisMotionValue(T).get() || 0;
          if (jt.test(p)) {
            const { projection: h } = this.visualElement;
            if (h && h.layout) {
              const m = h.layout.layoutBox[T];
              m && (p = Je(m) * (parseFloat(p) / 100));
            }
          }
          this.originPoint[T] = p;
        }), v && q.postRender(() => v(c, f));
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      }, s = (c, f) => {
        const { dragPropagation: d, dragDirectionLock: y, onDirectionLock: v, onDrag: g } = this.getProps();
        if (!d && !this.openGlobalLock)
          return;
        const { offset: T } = f;
        if (y && this.currentDirection === null) {
          this.currentDirection = jO(T), this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, T), this.updateAxis("y", f.point, T), this.visualElement.render(), g && g(c, f);
      }, a = (c, f) => this.stop(c, f), l = () => ot((c) => {
        var f;
        return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
      }), { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new v0(t, {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: E0(this.visualElement)
      });
    }
    stop(t, n) {
      const r = this.isDragging;
      if (this.cancel(), !r)
        return;
      const { velocity: i } = n;
      this.startAnimation(i);
      const { onDragEnd: o } = this.getProps();
      o && q.postRender(() => o(t, n));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: t, animationState: n } = this.visualElement;
      t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
      const { dragPropagation: r } = this.getProps();
      !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
      const { drag: i } = this.getProps();
      if (!r || !$o(t, i, this.currentDirection))
        return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = yO(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
      n && Or(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = vO(i.layoutBox, n) : this.constraints = !1, this.elastic = xO(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ot((s) => {
        this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = SO(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !Or(t))
        return !1;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout)
        return !1;
      const o = _O(r, i.root, this.visualElement.getTransformPagePoint());
      let s = gO(i.layout.layoutBox, o);
      if (n) {
        const a = n(TO(s));
        this.hasMutatedConstraints = !!a, a && (s = w0(a));
      }
      return s;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = ot((c) => {
        if (!$o(c, n, this.currentDirection))
          return;
        let f = l && l[c] || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6, y = i ? 40 : 1e7, v = {
          type: "inertia",
          velocity: r ? t[c] : 0,
          bounceStiffness: d,
          bounceDamping: y,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...o,
          ...f
        };
        return this.startAxisValueAnimation(c, v);
      });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return r.start(bf(t, r, 0, n, this.visualElement));
    }
    stopAnimation() {
      ot((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      ot((t) => {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
      });
    }
    getAnimationState(t) {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(t) {
      const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
      return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
    }
    snapToCursor(t) {
      ot((n) => {
        const { drag: r } = this.getProps();
        if (!$o(n, r, this.currentDirection))
          return;
        const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: s, max: a } = i.layout.layoutBox[n];
          o.set(t[n] - ce(s, a, 0.5));
        }
      });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
      if (!this.visualElement.current)
        return;
      const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
      if (!Or(n) || !r || !this.constraints)
        return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      ot((s) => {
        const a = this.getAxisMotionValue(s);
        if (a && this.constraints !== !1) {
          const l = a.get();
          i[s] = wO({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ot((s) => {
        if (!$o(s, t, null))
          return;
        const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
        a.set(ce(l, u, i[s]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      OO.set(this.visualElement, this);
      const t = this.visualElement.current, n = Ut(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }), r = () => {
        const { dragConstraints: l } = this.getProps();
        Or(l) && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
      const s = zt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging && u && (ot((c) => {
          const f = this.getAxisMotionValue(c);
          f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
        }), this.visualElement.render());
      });
      return () => {
        s(), n(), o(), a && a();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Hu, dragMomentum: a = !0 } = t;
      return {
        ...t,
        drag: n,
        dragDirectionLock: r,
        dragPropagation: i,
        dragConstraints: o,
        dragElastic: s,
        dragMomentum: a
      };
    }
  }
  function $o(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function jO(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  class FO extends Ln {
    constructor(t) {
      super(t), this.removeGroupControls = Me, this.removeListeners = Me, this.controls = new AO(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Me;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const jp = (e) => (t, n) => {
    e && q.postRender(() => e(t, n));
  };
  class RO extends Ln {
    constructor() {
      super(...arguments), this.removePointerDownListener = Me;
    }
    onPointerDown(t) {
      this.session = new v0(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: E0(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return {
        onSessionStart: jp(t),
        onStart: jp(n),
        onMove: r,
        onEnd: (o, s) => {
          delete this.session, i && q.postRender(() => i(o, s));
        }
      };
    }
    mount() {
      this.removePointerDownListener = Ut(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  function LO() {
    const e = S.useContext(Ta);
    if (e === null)
      return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e, i = S.useId();
    return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
  }
  const ns = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: !0,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: !1
  };
  function Fp(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  const fi = {
    correct: (e, t) => {
      if (!t.target)
        return e;
      if (typeof e == "string")
        if (V.test(e))
          e = parseFloat(e);
        else
          return e;
      const n = Fp(e, t.target.x), r = Fp(e, t.target.y);
      return `${n}% ${r}%`;
    }
  }, MO = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e, i = On.parse(e);
      if (i.length > 5)
        return r;
      const o = On.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
      i[0 + s] /= a, i[1 + s] /= l;
      const u = ce(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    }
  };
  class DO extends S.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
      Rk(bO), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), ns.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
      return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || q.postRender(() => {
        const a = s.getStack();
        (!a || !a.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t && (t.root.didUpdate(), pf.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
      i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
    }
    safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  }
  function P0(e) {
    const [t, n] = LO(), r = S.useContext(vf);
    return A.jsx(DO, { ...e, layoutGroup: r, switchLayoutGroup: S.useContext(xg), isPresent: t, safeToRemove: n });
  }
  const bO = {
    borderRadius: {
      ...fi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: fi,
    borderTopRightRadius: fi,
    borderBottomLeftRadius: fi,
    borderBottomRightRadius: fi,
    boxShadow: MO
  }, C0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], NO = C0.length, Rp = (e) => typeof e == "string" ? parseFloat(e) : e, Lp = (e) => typeof e == "number" || V.test(e);
  function VO(e, t, n, r, i, o) {
    i ? (e.opacity = ce(
      0,
      // TODO Reinstate this if only child
      n.opacity !== void 0 ? n.opacity : 1,
      $O(r)
    ), e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, IO(r))) : o && (e.opacity = ce(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < NO; s++) {
      const a = `border${C0[s]}Radius`;
      let l = Mp(t, a), u = Mp(n, a);
      if (l === void 0 && u === void 0)
        continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Lp(l) === Lp(u) ? (e[a] = Math.max(ce(Rp(l), Rp(u), r), 0), (jt.test(u) || jt.test(l)) && (e[a] += "%")) : e[a] = u;
    }
    (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r));
  }
  function Mp(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const $O = k0(0, 0.5, u0), IO = k0(0.5, 0.95, Me);
  function k0(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(no(e, t, r));
  }
  function Dp(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function it(e, t) {
    Dp(e.x, t.x), Dp(e.y, t.y);
  }
  function bp(e, t, n, r, i) {
    return e -= t, e = bs(e, 1 / n, r), i !== void 0 && (e = bs(e, 1 / i, r)), e;
  }
  function zO(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (jt.test(t) && (t = parseFloat(t), t = ce(s.min, s.max, t / 100) - s.min), typeof t != "number")
      return;
    let a = ce(o.min, o.max, r);
    e === o && (a -= t), e.min = bp(e.min, t, n, a, i), e.max = bp(e.max, t, n, a, i);
  }
  function Np(e, t, [n, r, i], o, s) {
    zO(e, t[n], t[r], t[i], t.scale, o, s);
  }
  const BO = ["x", "scaleX", "originX"], UO = ["y", "scaleY", "originY"];
  function Vp(e, t, n, r) {
    Np(e.x, t, BO, n ? n.x : void 0, r ? r.x : void 0), Np(e.y, t, UO, n ? n.y : void 0, r ? r.y : void 0);
  }
  function $p(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function _0(e) {
    return $p(e.x) && $p(e.y);
  }
  function WO(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
  }
  function O0(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
  }
  function Ip(e) {
    return Je(e.x) / Je(e.y);
  }
  class HO {
    constructor() {
      this.members = [];
    }
    add(t) {
      Nf(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (Vf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(t) {
      const n = this.members.findIndex((i) => t === i);
      if (n === 0)
        return !1;
      let r;
      for (let i = n; i >= 0; i--) {
        const o = this.members[i];
        if (o.isPresent !== !1) {
          r = o;
          break;
        }
      }
      return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
      const r = this.lead;
      if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
        const { crossfade: i } = t.options;
        i === !1 && r.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        const { options: n, resumingFrom: r } = t;
        n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(!1);
      });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  function zp(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: v } = n;
      u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), y && (r += `skewX(${y}deg) `), v && (r += `skewY(${v}deg) `);
    }
    const a = e.x.scale * t.x, l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
  }
  const KO = (e, t) => e.depth - t.depth;
  class GO {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(t) {
      Nf(this.children, t), this.isDirty = !0;
    }
    remove(t) {
      Vf(this.children, t), this.isDirty = !0;
    }
    forEach(t) {
      this.isDirty && this.children.sort(KO), this.isDirty = !1, this.children.forEach(t);
    }
  }
  function YO(e, t) {
    const n = Tn.now(), r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (_n(r), e(o - t));
    };
    return q.read(r, !0), () => _n(r);
  }
  function QO(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function XO(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function ZO(e, t, n) {
    const r = Le(e) ? e : ro(e);
    return r.start(bf("", r, t, n)), r.animation;
  }
  const El = ["", "X", "Y", "Z"], qO = { visibility: "hidden" }, Bp = 1e3;
  let JO = 0;
  const In = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function Pl(e, t, n, r) {
    const { latestValues: i } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function A0({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        this.id = JO++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = !1, In.totalNodes = In.resolvedTargetDeltas = In.recalculatedProjection = 0, this.nodes.forEach(nA), this.nodes.forEach(aA), this.nodes.forEach(lA), this.nodes.forEach(rA), QO(In);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new GO());
      }
      addEventListener(s, a) {
        return this.eventHandlers.has(s) || this.eventHandlers.set(s, new $f()), this.eventHandlers.get(s).add(a);
      }
      notifyListeners(s, ...a) {
        const l = this.eventHandlers.get(s);
        l && l.notify(...a);
      }
      hasListeners(s) {
        return this.eventHandlers.has(s);
      }
      /**
       * Lifecycles
       */
      mount(s, a = this.root.hasTreeAnimated) {
        if (this.instance)
          return;
        this.isSVG = XO(s), this.instance = s;
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
          let f;
          const d = () => this.root.updateBlockedByResize = !1;
          e(s, () => {
            this.root.updateBlockedByResize = !0, f && f(), f = YO(d, 250), ns.hasAnimatedSinceResize && (ns.hasAnimatedSinceResize = !1, this.nodes.forEach(Wp));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: y, layout: v }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const g = this.options.transition || c.getDefaultTransition() || hA, { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } = c.getProps(), h = !this.targetLayout || !O0(this.targetLayout, v) || y, m = !d && y;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
            const w = {
              ..._f(g, "layout"),
              onPlay: T,
              onComplete: p
            };
            (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
          } else
            d || Wp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = v;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        const s = this.getStack();
        s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, _n(this.updateProjection);
      }
      // only on the root
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
      }
      // Note: currently only running on root node
      startUpdate() {
        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(uA), this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: s } = this.options;
        return s && s.getProps().transformTemplate;
      }
      willUpdate(s = !0) {
        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
          return;
        this.isLayoutDirty = !0;
        for (let c = 0; c < this.path.length; c++) {
          const f = this.path[c];
          f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
        }
        const { layoutId: a, layout: l } = this.options;
        if (a === void 0 && !l)
          return;
        const u = this.getTransformTemplate();
        this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Up);
          return;
        }
        this.isUpdating || this.nodes.forEach(oA), this.isUpdating = !1, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes.forEach(sA), this.nodes.forEach(eA), this.nodes.forEach(tA), this.clearAllSnapshots();
        const a = Tn.now();
        Ce.delta = kn(0, 1e3 / 60, a - Ce.timestamp), Ce.timestamp = a, Ce.isProcessing = !0, hl.update.process(Ce), hl.preRender.process(Ce), hl.render.process(Ce), Ce.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, pf.read(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(iA), this.sharedNodes.forEach(cA);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, q.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        q.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      /**
       * Update measurements
       */
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let l = 0; l < this.path.length; l++)
            this.path[l].updateScroll();
        const s = this.layout;
        this.layout = this.measure(!1), this.layoutCorrected = me(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: a } = this.options;
        a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
      }
      updateScroll(s = "measure") {
        let a = !!(this.options.layoutScroll && this.instance);
        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && (this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: r(this.instance),
          offset: n(this.instance)
        });
      }
      resetTransform() {
        if (!i)
          return;
        const s = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !_0(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        s && (a || $n(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return s && (l = this.removeTransform(l)), pA(l), {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        const { visualElement: s } = this.options;
        if (!s)
          return me();
        const a = s.measureViewportBox(), { scroll: l } = this.root;
        return l && (on(a.x, l.offset.x), on(a.y, l.offset.y)), a;
      }
      removeElementScroll(s) {
        const a = me();
        it(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          if (u !== this.root && c && f.layoutScroll) {
            if (c.isRoot) {
              it(a, s);
              const { scroll: d } = this.root;
              d && (on(a.x, -d.offset.x), on(a.y, -d.offset.y));
            }
            on(a.x, c.offset.x), on(a.y, c.offset.y);
          }
        }
        return a;
      }
      applyTransform(s, a = !1) {
        const l = me();
        it(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a && c.options.layoutScroll && c.scroll && c !== c.root && Fr(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), $n(c.latestValues) && Fr(l, c.latestValues);
        }
        return $n(this.latestValues) && Fr(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = me();
        it(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !$n(u.latestValues))
            continue;
          Ku(u.latestValues) && u.updateSnapshot();
          const c = me(), f = u.measurePageBox();
          it(c, f), Vp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return $n(this.latestValues) && Vp(a, this.latestValues), a;
      }
      setTargetDelta(s) {
        this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
      }
      setOptions(s) {
        this.options = {
          ...this.options,
          ...s,
          crossfade: s.crossfade !== void 0 ? s.crossfade : !0
        };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ce.timestamp && this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(s = !1) {
        var a;
        const l = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
        const u = !!this.resumingFrom || this !== l;
        if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
          return;
        const { layout: f, layoutId: d } = this.options;
        if (!(!this.layout || !(f || d))) {
          if (this.resolvedRelativeTargetAt = Ce.timestamp, !this.targetDelta && !this.relativeTarget) {
            const y = this.getClosestProjectingParent();
            y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = me(), this.relativeTargetOrigin = me(), Ri(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = me(), this.targetWithTransforms = me()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), mO(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : it(this.target, this.layout.layoutBox), x0(this.target, this.targetDelta)) : it(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              const y = this.getClosestProjectingParent();
              y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = me(), this.relativeTargetOrigin = me(), Ri(this.relativeTargetOrigin, this.target, y.target), it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            In.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Ku(this.parent.latestValues) || S0(this.parent.latestValues)))
          return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var s;
        const a = this.getLead(), l = !!this.resumingFrom || this !== a;
        let u = !0;
        if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ce.timestamp && (u = !1), u)
          return;
        const { layout: c, layoutId: f } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
          return;
        it(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x, y = this.treeScale.y;
        PO(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = me());
        const { target: v } = a;
        if (!v) {
          this.projectionTransform && (this.projectionDelta = jr(), this.projectionTransform = "none", this.scheduleRender());
          return;
        }
        this.projectionDelta || (this.projectionDelta = jr(), this.projectionDeltaWithTransform = jr());
        const g = this.projectionTransform;
        Fi(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = zp(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== d || this.treeScale.y !== y) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), In.recalculatedProjection++;
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(s = !0) {
        if (this.options.scheduleRender && this.options.scheduleRender(), s) {
          const a = this.getStack();
          a && a.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      setAnimationOrigin(s, a = !1) {
        const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = jr();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const d = me(), y = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = y !== v, T = this.getStack(), p = !T || T.members.length <= 1, h = !!(g && !p && this.options.crossfade === !0 && !this.path.some(dA));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (w) => {
          const P = w / 1e3;
          Hp(f.x, s.x, P), Hp(f.y, s.y, P), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ri(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), fA(this.relativeTarget, this.relativeTargetOrigin, d, P), m && WO(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = me()), it(m, this.relativeTarget)), g && (this.animationValues = c, VO(c, u, this.latestValues, P, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (_n(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = q.update(() => {
          ns.hasAnimatedSinceResize = !0, this.currentAnimation = ZO(0, Bp, {
            ...s,
            onUpdate: (a) => {
              this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
            },
            onComplete: () => {
              s.onComplete && s.onComplete(), this.completeAnimation();
            }
          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        const s = this.getStack();
        s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Bp), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
        if (!(!a || !l || !u)) {
          if (this !== s && this.layout && u && j0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || me();
            const f = Je(this.layout.layoutBox.x);
            l.x.min = s.target.x.min, l.x.max = l.x.min + f;
            const d = Je(this.layout.layoutBox.y);
            l.y.min = s.target.y.min, l.y.max = l.y.min + d;
          }
          it(a, l), Fr(a, c), Fi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new HO()), this.sharedNodes.get(s).add(a);
        const u = a.options.initialPromotionConfig;
        a.promote({
          transition: u ? u.transition : void 0,
          preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
        });
      }
      isLead() {
        const s = this.getStack();
        return s ? s.lead === this : !0;
      }
      getLead() {
        var s;
        const { layoutId: a } = this.options;
        return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
      }
      getPrevLead() {
        var s;
        const { layoutId: a } = this.options;
        return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
      }
      getStack() {
        const { layoutId: s } = this.options;
        if (s)
          return this.root.sharedNodes.get(s);
      }
      promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
      }
      relegate() {
        const s = this.getStack();
        return s ? s.relegate(this) : !1;
      }
      resetSkewAndRotation() {
        const { visualElement: s } = this.options;
        if (!s)
          return;
        let a = !1;
        const { latestValues: l } = s;
        if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
          return;
        const u = {};
        l.z && Pl("z", s, u, this.animationValues);
        for (let c = 0; c < El.length; c++)
          Pl(`rotate${El[c]}`, s, u, this.animationValues), Pl(`skew${El[c]}`, s, u, this.animationValues);
        s.render();
        for (const c in u)
          s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
        s.scheduleRender();
      }
      getProjectionStyles(s) {
        var a, l;
        if (!this.instance || this.isSVG)
          return;
        if (!this.isVisible)
          return qO;
        const u = {
          visibility: ""
        }, c = this.getTransformTemplate();
        if (this.needsReset)
          return this.needsReset = !1, u.opacity = "", u.pointerEvents = es(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
          const g = {};
          return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = es(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !$n(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(), u.transform = zp(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
        const { x: y, y: v } = this.projectionDelta;
        u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
        for (const g in Fs) {
          if (d[g] === void 0)
            continue;
          const { correct: T, applyTo: p } = Fs[g], h = u.transform === "none" ? d[g] : T(d[g], f);
          if (p) {
            const m = p.length;
            for (let w = 0; w < m; w++)
              u[p[w]] = h;
          } else
            u[g] = h;
        }
        return this.options.layoutId && (u.pointerEvents = f === this ? es(s == null ? void 0 : s.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(Up), this.root.sharedNodes.clear();
      }
    };
  }
  function eA(e) {
    e.updateLayout();
  }
  function tA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
      o === "size" ? ot((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], y = Je(d);
        d.min = r[f].min, d.max = d.min + y;
      }) : j0(o, n.layoutBox, r) && ot((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], y = Je(r[f]);
        d.max = d.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y);
      });
      const a = jr();
      Fi(a, r, n.layoutBox);
      const l = jr();
      s ? Fi(l, e.applyTransform(i, !0), n.measuredBox) : Fi(l, r, n.layoutBox);
      const u = !_0(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: y } = f;
          if (d && y) {
            const v = me();
            Ri(v, n.layoutBox, d.layoutBox);
            const g = me();
            Ri(g, r, y.layoutBox), O0(v, g) || (c = !0), f.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = f);
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: r,
        snapshot: n,
        delta: l,
        layoutDelta: a,
        hasLayoutChanged: u,
        hasRelativeTargetChanged: c
      });
    } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
    }
    e.options.transition = void 0;
  }
  function nA(e) {
    In.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function rA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function iA(e) {
    e.clearSnapshot();
  }
  function Up(e) {
    e.clearMeasurements();
  }
  function oA(e) {
    e.isLayoutDirty = !1;
  }
  function sA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function Wp(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
  }
  function aA(e) {
    e.resolveTargetDelta();
  }
  function lA(e) {
    e.calcProjection();
  }
  function uA(e) {
    e.resetSkewAndRotation();
  }
  function cA(e) {
    e.removeLeadSnapshot();
  }
  function Hp(e, t, n) {
    e.translate = ce(t.translate, 0, n), e.scale = ce(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function Kp(e, t, n, r) {
    e.min = ce(t.min, n.min, r), e.max = ce(t.max, n.max, r);
  }
  function fA(e, t, n, r) {
    Kp(e.x, t.x, n.x, r), Kp(e.y, t.y, n.y, r);
  }
  function dA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const hA = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  }, Gp = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Yp = Gp("applewebkit/") && !Gp("chrome/") ? Math.round : Me;
  function Qp(e) {
    e.min = Yp(e.min), e.max = Yp(e.max);
  }
  function pA(e) {
    Qp(e.x), Qp(e.y);
  }
  function j0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Wu(Ip(t), Ip(n), 0.2);
  }
  const mA = A0({
    attachResizeListener: (e, t) => zt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }), Cl = {
    current: void 0
  }, F0 = A0({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!Cl.current) {
        const e = new mA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), Cl.current = e;
      }
      return Cl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
  }), yA = {
    pan: {
      Feature: RO
    },
    drag: {
      Feature: FO,
      ProjectionNode: F0,
      MeasureLayout: P0
    }
  }, Yu = { current: null }, R0 = { current: !1 };
  function vA() {
    if (R0.current = !0, !!ff)
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Yu.current = e.matches;
        e.addListener(t), t();
      } else
        Yu.current = !1;
  }
  function gA(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const o = t[i], s = n[i];
      if (Le(o))
        e.addValue(i, o), Ds(r) && r.add(i);
      else if (Le(s))
        e.addValue(i, ro(o, { owner: e })), Ds(r) && r.remove(i);
      else if (s !== o)
        if (e.hasValue(i)) {
          const a = e.getValue(i);
          a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
        } else {
          const a = e.getStaticValue(i);
          e.addValue(i, ro(a !== void 0 ? a : o, { owner: e }));
        }
    }
    for (const i in n)
      t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const Xp = /* @__PURE__ */ new WeakMap(), wA = [...Hg, Fe, On], SA = (e) => wA.find(Wg(e)), L0 = Object.keys(eo), xA = L0.length, Zp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], TA = yf.length;
  function M0(e) {
    if (e)
      return e.options.allowProjection !== !1 ? e.projection : M0(e.parent);
  }
  class EA {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(t, n, r) {
      return {};
    }
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, a = {}) {
      this.resolveKeyframes = (d, y, v, g) => new this.KeyframeResolver(d, y, v, g, this), this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Of, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.scheduleRender = () => q.render(this.render, !1, !0);
      const { latestValues: l, renderState: u } = s;
      this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Pa(n), this.isVariantNode = Sg(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const d in f) {
        const y = f[d];
        l[d] !== void 0 && Le(y) && (y.set(l[d], !1), Ds(c) && c.add(d));
      }
    }
    mount(t) {
      this.current = t, Xp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), R0.current || vA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Yu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      var t;
      Xp.delete(this.current), this.projection && this.projection.unmount(), _n(this.notifyUpdate), _n(this.render), this.valueSubscriptions.forEach((n) => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const n in this.events)
        this.events[n].clear();
      for (const n in this.features)
        (t = this.features[n]) === null || t === void 0 || t.unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = dr.has(t), i = n.on("change", (s) => {
        this.latestValues[t] = s, this.props.onUpdate && q.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
      }), o = n.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(t, () => {
        i(), o(), n.owner && n.stop();
      });
    }
    sortNodePosition(t) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
    }
    loadFeatures({ children: t, ...n }, r, i, o) {
      let s, a;
      for (let l = 0; l < xA; l++) {
        const u = L0[l], { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: y } = eo[u];
        d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), y && (a = y));
      }
      if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
        this.projection = new s(this.latestValues, M0(this.parent));
        const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: y } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || f && Or(f),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          /**
           * TODO: Update options in an effect. This could be tricky as it'll be too late
           * to update by the time layout animations run.
           * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
           * ensuring it gets called if there's no potential layout animations.
           *
           */
          animationType: typeof u == "string" ? u : "both",
          initialPromotionConfig: o,
          layoutScroll: d,
          layoutRoot: y
        });
      }
      return a;
    }
    updateFeatures() {
      for (const t in this.features) {
        const n = this.features[t];
        n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : me();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
      for (let r = 0; r < Zp.length; r++) {
        const i = Zp[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const o = "on" + i, s = t[o];
        s && (this.propEventSubscriptions[i] = this.on(i, s));
      }
      this.prevMotionValues = gA(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    getVariantContext(t = !1) {
      if (t)
        return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        const r = this.parent ? this.parent.getVariantContext() || {} : {};
        return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
      }
      const n = {};
      for (let r = 0; r < TA; r++) {
        const i = yf[r], o = this.props[i];
        (Ji(o) || o === !1) && (n[i] = o);
      }
      return n;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n)
        return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(t, n) {
      const r = this.values.get(t);
      n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, n) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let r = this.values.get(t);
      return r === void 0 && n !== void 0 && (r = ro(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(t, n) {
      var r;
      let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
      return i != null && (typeof i == "string" && (Bg(i) || zg(i)) ? i = parseFloat(i) : !SA(i) && On.test(n) && (i = Jg(t, n)), this.setBaseTarget(t, Le(i) ? i.get() : i)), Le(i) ? i.get() : i;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(t, n) {
      this.baseTarget[t] = n;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(t) {
      var n;
      const { initial: r } = this.props;
      let i;
      if (typeof r == "string" || typeof r == "object") {
        const s = kf(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
        s && (i = s[t]);
      }
      if (r && i !== void 0)
        return i;
      const o = this.getBaseTargetFromProps(this.props, t);
      return o !== void 0 && !Le(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
      return this.events[t] || (this.events[t] = new $f()), this.events[t].add(n);
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class D0 extends EA {
    constructor() {
      super(...arguments), this.KeyframeResolver = e0;
    }
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
      delete n[t], delete r[t];
    }
  }
  function PA(e) {
    return window.getComputedStyle(e);
  }
  class CA extends D0 {
    constructor() {
      super(...arguments), this.type = "html";
    }
    readValueFromInstance(t, n) {
      if (dr.has(n)) {
        const r = jf(n);
        return r && r.default || 0;
      } else {
        const r = PA(t), i = (Pg(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return T0(t, n);
    }
    build(t, n, r, i) {
      xf(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return Cf(t, n, r);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Le(t) && (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
    renderInstance(t, n, r, i) {
      Ag(t, n, r, i);
    }
  }
  class kA extends D0 {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (dr.has(n)) {
        const r = jf(n);
        return r && r.default || 0;
      }
      return n = jg.has(n) ? n : hf(n), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return me();
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return Rg(t, n, r);
    }
    build(t, n, r, i) {
      Ef(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      Fg(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = Pf(t.tagName), super.mount(t);
    }
  }
  const _A = (e, t) => gf(e) ? new kA(t, { enableHardwareAcceleration: !1 }) : new CA(t, {
    allowProjection: e !== S.Fragment,
    enableHardwareAcceleration: !0
  }), OA = {
    layout: {
      ProjectionNode: F0,
      MeasureLayout: P0
    }
  }, AA = {
    ...fO,
    ...S_,
    ...yA,
    ...OA
  }, jA = /* @__PURE__ */ jk((e, t) => a_(e, t, AA, _A));
  function b0() {
    const e = S.useRef(!1);
    return df(() => (e.current = !0, () => {
      e.current = !1;
    }), []), e;
  }
  function FA() {
    const e = b0(), [t, n] = S.useState(0), r = S.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
    return [S.useCallback(() => q.postRender(r), [r]), t];
  }
  class RA extends S.Component {
    getSnapshotBeforeUpdate(t) {
      const n = this.props.childRef.current;
      if (n && t.isPresent && !this.props.isPresent) {
        const r = this.props.sizeRef.current;
        r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
      }
      return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }
  function LA({ children: e, isPresent: t }) {
    const n = S.useId(), r = S.useRef(null), i = S.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }), { nonce: o } = S.useContext(cf);
    return S.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !s || !a)
        return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
        document.head.removeChild(c);
      };
    }, [t]), A.jsx(RA, { isPresent: t, childRef: r, sizeRef: i, children: S.cloneElement(e, { ref: r }) });
  }
  const kl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = Lg(MA), l = S.useId(), u = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const f of a.values())
            if (!f)
              return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c))
      }),
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      o ? [Math.random()] : [n]
    );
    return S.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]), S.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]), s === "popLayout" && (e = A.jsx(LA, { isPresent: n, children: e })), A.jsx(Ta.Provider, { value: u, children: e });
  };
  function MA() {
    return /* @__PURE__ */ new Map();
  }
  function DA(e) {
    return S.useEffect(() => () => e(), []);
  }
  const zn = (e) => e.key || "";
  function bA(e, t) {
    e.forEach((n) => {
      const r = zn(n);
      t.set(r, n);
    });
  }
  function NA(e) {
    const t = [];
    return S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }), t;
  }
  const VA = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = S.useContext(vf).forceRender || FA()[0], l = b0(), u = NA(e);
    let c = u;
    const f = S.useRef(/* @__PURE__ */ new Map()).current, d = S.useRef(c), y = S.useRef(/* @__PURE__ */ new Map()).current, v = S.useRef(!0);
    if (df(() => {
      v.current = !1, bA(u, y), d.current = c;
    }), DA(() => {
      v.current = !0, y.clear(), f.clear();
    }), v.current)
      return A.jsx(A.Fragment, { children: c.map((h) => A.jsx(kl, { isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s, children: h }, zn(h))) });
    c = [...c];
    const g = d.current.map(zn), T = u.map(zn), p = g.length;
    for (let h = 0; h < p; h++) {
      const m = g[h];
      T.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
    }
    return s === "wait" && f.size && (c = []), f.forEach((h, m) => {
      if (T.indexOf(m) !== -1)
        return;
      const w = y.get(m);
      if (!w)
        return;
      const P = g.indexOf(m);
      let E = h;
      if (!E) {
        const C = () => {
          f.delete(m);
          const k = Array.from(y.keys()).filter((b) => !T.includes(b));
          if (k.forEach((b) => y.delete(b)), d.current = u.filter((b) => {
            const R = zn(b);
            return (
              // filter out the node exiting
              R === m || // filter out the leftover children
              k.includes(R)
            );
          }), !f.size) {
            if (l.current === !1)
              return;
            a(), r && r();
          }
        };
        E = A.jsx(kl, { isPresent: !1, onExitComplete: C, custom: t, presenceAffectsLayout: o, mode: s, children: w }, zn(w)), f.set(m, E);
      }
      c.splice(P, 0, E);
    }), c = c.map((h) => {
      const m = h.key;
      return f.has(m) ? h : A.jsx(kl, { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h }, zn(h));
    }), A.jsx(A.Fragment, { children: f.size ? c : c.map((h) => S.cloneElement(h)) });
  }, $A = (e) => {
    const [t, n] = ZC(e);
    return /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx("input", { ...t, ...e }),
      n.touched && n.error ? /* @__PURE__ */ A.jsx("div", { className: "error", children: n.error }) : null
    ] });
  };
  function IA({
    activeStep: e,
    initialValues: t,
    values: n
  }) {
    function r(l) {
      return l = l[0].toUpperCase() + l.slice(1), l.replace(/[A-Z]/g, " $&");
    }
    function i(l) {
      var u;
      return ((u = e == null ? void 0 : e.titles) == null ? void 0 : u[l]) || r(l);
    }
    function o(l, u) {
      const c = {};
      return u === "number" && (c.onKeyDown = (d) => {
        ["e", "E", "+", "-", ".", ","].includes(d.key) && d.preventDefault();
      }), ((l == null ? void 0 : l.tests) || []).forEach((d) => {
        switch (d.OPTIONS.name) {
          case "min":
            c.min = d.OPTIONS.params.min || d.OPTIONS.params.more;
            break;
          case "max":
            c.max = d.OPTIONS.params.max;
            break;
        }
      }), c;
    }
    const { validationSchema: s, fields: a } = e;
    return /* @__PURE__ */ A.jsxs("div", { id: "default", className: "prose max-w-none", children: [
      /* @__PURE__ */ A.jsx("h2", { children: e.title }),
      /* @__PURE__ */ A.jsx("p", { children: e.helpText }),
      /* @__PURE__ */ A.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(t || {}).map((l) => {
        var u, c;
        return /* @__PURE__ */ A.jsxs("div", { className: "grow shrink-0 basis-72", children: [
          /* @__PURE__ */ A.jsx("label", { htmlFor: l, className: "block mb-2 text-sm font-medium text-white", children: i(l) }),
          /* @__PURE__ */ A.jsx(ik, { name: l, children: (f) => /* @__PURE__ */ A.jsx("div", { className: "text-red-400", children: f }) }),
          /* @__PURE__ */ A.jsx(
            zA,
            {
              id: l,
              name: l,
              value: n[l],
              type: a == null ? void 0 : a.inputTypes[l],
              placeholder: (u = a == null ? void 0 : a.placeholders) == null ? void 0 : u[l],
              constraints: o((c = s == null ? void 0 : s.fields) == null ? void 0 : c[l], a == null ? void 0 : a.inputTypes[l])
            }
          )
        ] }, l);
      }) })
    ] });
  }
  function zA(e) {
    const { id: t, type: n, value: r, placeholder: i, constraints: o } = e;
    if (n === "checkbox") {
      const s = t === "useSlack" ? "checkbox" : "toggle toggle-sm bg-gray-300 toggle-success";
      return /* @__PURE__ */ A.jsx(
        fl,
        {
          id: t,
          name: t,
          className: s,
          type: "checkbox"
        }
      );
    } else {
      if (n === "custom-text")
        return /* @__PURE__ */ A.jsx($A, { label: t, name: t, type: "text" });
      if (n === "select") {
        const { setFieldValue: s } = fr();
        let a = [
          { id: "", title: "(Select an Area)", disabled: !0 },
          { id: "student", title: "Student", disabled: !1 },
          { id: "eng", title: "Engineering", disabled: !1 },
          { id: "mlops", title: "MLOps", disabled: !1 }
        ];
        return /* @__PURE__ */ A.jsx(
          fl,
          {
            as: "select",
            name: t,
            onChange: (l) => s(t, l.target.value),
            children: a && a.map(
              (l) => /* @__PURE__ */ A.jsx("option", { disabled: l.disabled, value: l.id, children: l.title }, l.id)
            )
          }
        );
      } else
        return /* @__PURE__ */ A.jsx(
          fl,
          {
            id: t,
            name: t,
            value: r,
            type: n,
            placeholder: i,
            className: "bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400",
            ...o
          }
        );
    }
  }
  function BA() {
    const { isAnimated: e } = S.useContext(B0), { activeStep: t } = fo(), { initialValues: n, values: r } = fr();
    let i = {};
    return e && (i = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }), /* @__PURE__ */ A.jsx(VA, { initial: !1, mode: "wait", children: /* @__PURE__ */ A.jsx(
      jA.div,
      {
        variants: i,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { type: "tween", duration: 0.25 },
        children: /* @__PURE__ */ A.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ A.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ A.jsx(
          IA,
          {
            activeStep: t,
            initialValues: n,
            values: r
          }
        ) }) })
      },
      t.id
    ) });
  }
  var N0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, qp = fn.createContext && /* @__PURE__ */ fn.createContext(N0), UA = ["attr", "size", "title"];
  function WA(e, t) {
    if (e == null)
      return {};
    var n = HA(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function HA(e, t) {
    if (e == null)
      return {};
    var n = {};
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        if (t.indexOf(r) >= 0)
          continue;
        n[r] = e[r];
      }
    return n;
  }
  function Ns() {
    return Ns = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, Ns.apply(this, arguments);
  }
  function Jp(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function Vs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Jp(Object(n), !0).forEach(function(r) {
        KA(e, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jp(Object(n)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
    }
    return e;
  }
  function KA(e, t, n) {
    return t = GA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  function GA(e) {
    var t = YA(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function YA(e, t) {
    if (typeof e != "object" || !e)
      return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object")
        return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function V0(e) {
    return e && e.map((t, n) => /* @__PURE__ */ fn.createElement(t.tag, Vs({
      key: n
    }, t.attr), V0(t.child)));
  }
  function $0(e) {
    return (t) => /* @__PURE__ */ fn.createElement(QA, Ns({
      attr: Vs({}, e.attr)
    }, t), V0(e.child));
  }
  function QA(e) {
    var t = (n) => {
      var {
        attr: r,
        size: i,
        title: o
      } = e, s = WA(e, UA), a = i || n.size || "1em", l;
      return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ fn.createElement("svg", Ns({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n.attr, r, s, {
        className: l,
        style: Vs(Vs({
          color: e.color || n.color
        }, n.style), e.style),
        height: a,
        width: a,
        xmlns: "http://www.w3.org/2000/svg"
      }), o && /* @__PURE__ */ fn.createElement("title", null, o), e.children);
    };
    return qp !== void 0 ? /* @__PURE__ */ fn.createElement(qp.Consumer, null, (n) => t(n)) : t(N0);
  }
  function XA(e) {
    return $0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" }, child: [] }] })(e);
  }
  function ZA(e) {
    return $0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" }, child: [] }] })(e);
  }
  var I0 = {}, Yr = {};
  Object.defineProperty(Yr, "__esModule", { value: !0 });
  Yr.cssValue = Yr.parseLengthAndUnit = void 0;
  var qA = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0
  };
  function z0(e) {
    if (typeof e == "number")
      return {
        value: e,
        unit: "px"
      };
    var t, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return qA[r] ? {
      value: t,
      unit: r
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
      value: t,
      unit: "px"
    });
  }
  Yr.parseLengthAndUnit = z0;
  function JA(e) {
    var t = z0(e);
    return "".concat(t.value).concat(t.unit);
  }
  Yr.cssValue = JA;
  var Oa = {};
  Object.defineProperty(Oa, "__esModule", { value: !0 });
  Oa.createAnimation = void 0;
  var ej = function(e, t, n) {
    var r = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window > "u" || !window.document)
      return r;
    var i = document.createElement("style");
    document.head.appendChild(i);
    var o = i.sheet, s = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
    return o && o.insertRule(s, 0), r;
  };
  Oa.createAnimation = ej;
  var $s = Ft && Ft.__assign || function() {
    return $s = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, $s.apply(this, arguments);
  }, tj = Ft && Ft.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  } : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  }), nj = Ft && Ft.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: !0, value: t });
  } : function(e, t) {
    e.default = t;
  }), rj = Ft && Ft.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var n in e)
        n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && tj(t, e, n);
    return nj(t, e), t;
  }, ij = Ft && Ft.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  Object.defineProperty(I0, "__esModule", { value: !0 });
  var oj = rj(S), em = Yr, sj = Oa, aj = (0, sj.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function lj(e) {
    var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, o = e.speedMultiplier, s = o === void 0 ? 1 : o, a = e.cssOverride, l = a === void 0 ? {} : a, u = e.size, c = u === void 0 ? 35 : u, f = ij(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = $s({ background: "transparent !important", width: (0, em.cssValue)(c), height: (0, em.cssValue)(c), borderRadius: "100%", border: "2px solid", borderTopColor: i, borderBottomColor: "transparent", borderLeftColor: i, borderRightColor: i, display: "inline-block", animation: "".concat(aj, " ").concat(0.75 / s, "s 0s infinite linear"), animationFillMode: "both" }, l);
    return n ? oj.createElement("span", $s({ style: d }, f)) : null;
  }
  var uj = I0.default = lj;
  function cj() {
    let {
      goToPreviousStep: e,
      isFirstStep: t,
      isLoading: n,
      activeStep: {
        hidePrevious: r,
        hideNext: i,
        disableNext: o,
        disableNextOnErrors: s
      }
    } = fo();
    const { isValid: a, submitForm: l } = fr();
    o = n || o || s && !a;
    const [u, c] = S.useState(!1);
    return S.useEffect(() => (js.on("wait", (f) => {
      console.log("WAIT Event received:", f), c(f.waiting);
    }), () => {
      js.removeAllListeners("myEvent");
    }), []), /* @__PURE__ */ A.jsx("div", { className: "navigation", children: /* @__PURE__ */ A.jsxs("div", { className: "navigation-wrapper " + (r ? "justify-end" : "justify-between"), children: [
      !r && /* @__PURE__ */ A.jsxs(
        "button",
        {
          className: "btn",
          onClick: e,
          disabled: t,
          type: "button",
          children: [
            /* @__PURE__ */ A.jsx(XA, { className: "w-8 h-8 fill-current" }),
            /* @__PURE__ */ A.jsx("span", { children: "Previous" })
          ]
        }
      ),
      !i && // Still possible to trigger submit even though button is disabled.
      // Main reason is to display validation errors.
      /* @__PURE__ */ A.jsx("div", { onClick: o ? l : void 0, children: /* @__PURE__ */ A.jsxs(
        "button",
        {
          className: "btn",
          type: "submit",
          children: [
            (n || u) && /* @__PURE__ */ A.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ A.jsx(uj, { size: 11, color: "#757575" }) }),
            /* @__PURE__ */ A.jsx("span", { children: "Next Bit" }),
            /* @__PURE__ */ A.jsx(ZA, { className: "w-8 h-8 fill-current" })
          ]
        }
      ) })
    ] }) });
  }
  function fj() {
    const { stepNumber: e, totalSteps: t } = fo(), n = `${(e - 1) / (t - 1) * 100}%`;
    return /* @__PURE__ */ A.jsxs("header", { className: "pt-4 pb-3", children: [
      /* @__PURE__ */ A.jsxs("div", { className: "px-5 flex justify-between items-center prose max-w-none", children: [
        /* @__PURE__ */ A.jsx("h3", { className: "mb-0 text-base sm:text-xl", children: "onboardatron" }),
        /* @__PURE__ */ A.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ A.jsxs("div", { className: "mr-3 text-sm", children: [
          /* @__PURE__ */ A.jsx("span", { className: "hidden min-[400px]:inline", children: "Step" }),
          " ",
          e,
          " / ",
          t
        ] }) })
      ] }),
      /* @__PURE__ */ A.jsx("div", { className: "w-full bg-gray-600 h-1 mt-[17px]", children: /* @__PURE__ */ A.jsx(
        "div",
        {
          style: { width: n },
          className: "h-full bg-success transition-all duration-500"
        }
      ) })
    ] });
  }
  const B0 = S.createContext({});
  function dj() {
    const [e, t] = S.useState(!0);
    return /* @__PURE__ */ A.jsx(B0.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ A.jsx(
      sk,
      {
        enableHash: !0,
        steps: vk,
        onStepChanged: (n, r, i) => {
          console.log("step changed", n.id, r.id, i);
        },
        header: /* @__PURE__ */ A.jsx(fj, {}),
        wrapper: /* @__PURE__ */ A.jsx(BA, {}),
        footer: /* @__PURE__ */ A.jsx(cj, {})
      }
    ) });
  }
  _l.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ A.jsx(dj, {})
  );
});
export default hj();
