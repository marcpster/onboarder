var b0 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var BO = b0((Ye, Qe) => {
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
  var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Vs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var Gp = { exports: {} }, $s = {}, Yp = { exports: {} }, H = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var to = Symbol.for("react.element"), L0 = Symbol.for("react.portal"), V0 = Symbol.for("react.fragment"), $0 = Symbol.for("react.strict_mode"), I0 = Symbol.for("react.profiler"), z0 = Symbol.for("react.provider"), U0 = Symbol.for("react.context"), B0 = Symbol.for("react.forward_ref"), H0 = Symbol.for("react.suspense"), W0 = Symbol.for("react.memo"), K0 = Symbol.for("react.lazy"), $f = Symbol.iterator;
  function G0(e) {
    return e === null || typeof e != "object" ? null : (e = $f && e[$f] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Qp = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Xp = Object.assign, Zp = {};
  function Gr(e, t, n) {
    this.props = e, this.context = t, this.refs = Zp, this.updater = n || Qp;
  }
  Gr.prototype.isReactComponent = {};
  Gr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Gr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function qp() {
  }
  qp.prototype = Gr.prototype;
  function Bu(e, t, n) {
    this.props = e, this.context = t, this.refs = Zp, this.updater = n || Qp;
  }
  var Hu = Bu.prototype = new qp();
  Hu.constructor = Bu;
  Xp(Hu, Gr.prototype);
  Hu.isPureReactComponent = !0;
  var If = Array.isArray, Jp = Object.prototype.hasOwnProperty, Wu = { current: null }, em = { key: !0, ref: !0, __self: !0, __source: !0 };
  function tm(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
      for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        Jp.call(t, r) && !em.hasOwnProperty(r) && (i[r] = t[r]);
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
    return { $$typeof: to, type: e, key: o, ref: s, props: i, _owner: Wu.current };
  }
  function Y0(e, t) {
    return { $$typeof: to, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function Ku(e) {
    return typeof e == "object" && e !== null && e.$$typeof === to;
  }
  function Q0(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var zf = /\/+/g;
  function ja(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Q0("" + e.key) : t.toString(36);
  }
  function $o(e, t, n, r, i) {
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
            case to:
            case L0:
              s = !0;
          }
      }
    if (s)
      return s = e, i = i(s), e = r === "" ? "." + ja(s, 0) : r, If(i) ? (n = "", e != null && (n = e.replace(zf, "$&/") + "/"), $o(i, t, n, "", function(u) {
        return u;
      })) : i != null && (Ku(i) && (i = Y0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(zf, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", If(e))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + ja(o, a);
        s += $o(o, t, n, l, i);
      }
    else if (l = G0(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        o = o.value, l = r + ja(o, a++), s += $o(o, t, n, l, i);
    else if (o === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function yo(e, t, n) {
    if (e == null)
      return e;
    var r = [], i = 0;
    return $o(e, r, "", "", function(o) {
      return t.call(n, o, i++);
    }), r;
  }
  function X0(e) {
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
  var Le = { current: null }, Io = { transition: null }, Z0 = { ReactCurrentDispatcher: Le, ReactCurrentBatchConfig: Io, ReactCurrentOwner: Wu };
  function nm() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  H.Children = { map: yo, forEach: function(e, t, n) {
    yo(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return yo(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return yo(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!Ku(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } };
  H.Component = Gr;
  H.Fragment = V0;
  H.Profiler = I0;
  H.PureComponent = Bu;
  H.StrictMode = $0;
  H.Suspense = H0;
  H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0;
  H.act = nm;
  H.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Xp({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, s = Wu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
      for (l in t)
        Jp.call(t, l) && !em.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
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
    return { $$typeof: to, type: e.type, key: i, ref: o, props: r, _owner: s };
  };
  H.createContext = function(e) {
    return e = { $$typeof: U0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: z0, _context: e }, e.Consumer = e;
  };
  H.createElement = tm;
  H.createFactory = function(e) {
    var t = tm.bind(null, e);
    return t.type = e, t;
  };
  H.createRef = function() {
    return { current: null };
  };
  H.forwardRef = function(e) {
    return { $$typeof: B0, render: e };
  };
  H.isValidElement = Ku;
  H.lazy = function(e) {
    return { $$typeof: K0, _payload: { _status: -1, _result: e }, _init: X0 };
  };
  H.memo = function(e, t) {
    return { $$typeof: W0, type: e, compare: t === void 0 ? null : t };
  };
  H.startTransition = function(e) {
    var t = Io.transition;
    Io.transition = {};
    try {
      e();
    } finally {
      Io.transition = t;
    }
  };
  H.unstable_act = nm;
  H.useCallback = function(e, t) {
    return Le.current.useCallback(e, t);
  };
  H.useContext = function(e) {
    return Le.current.useContext(e);
  };
  H.useDebugValue = function() {
  };
  H.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e);
  };
  H.useEffect = function(e, t) {
    return Le.current.useEffect(e, t);
  };
  H.useId = function() {
    return Le.current.useId();
  };
  H.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n);
  };
  H.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t);
  };
  H.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t);
  };
  H.useMemo = function(e, t) {
    return Le.current.useMemo(e, t);
  };
  H.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n);
  };
  H.useRef = function(e) {
    return Le.current.useRef(e);
  };
  H.useState = function(e) {
    return Le.current.useState(e);
  };
  H.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n);
  };
  H.useTransition = function() {
    return Le.current.useTransition();
  };
  H.version = "18.3.1";
  Yp.exports = H;
  var w = Yp.exports;
  const fn = /* @__PURE__ */ Vs(w);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var q0 = w, J0 = Symbol.for("react.element"), e1 = Symbol.for("react.fragment"), t1 = Object.prototype.hasOwnProperty, n1 = q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r1 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rm(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t)
      t1.call(t, r) && !r1.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: J0, type: e, key: o, ref: s, props: i, _owner: n1.current };
  }
  $s.Fragment = e1;
  $s.jsx = rm;
  $s.jsxs = rm;
  Gp.exports = $s;
  var O = Gp.exports, El = {}, im = { exports: {} }, Je = {}, om = { exports: {} }, sm = {};
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
    function t(A, N) {
      var U = A.length;
      A.push(N);
      e:
        for (; 0 < U; ) {
          var q = U - 1 >>> 1, te = A[q];
          if (0 < i(te, N))
            A[q] = N, A[U] = te, U = q;
          else
            break e;
        }
    }
    function n(A) {
      return A.length === 0 ? null : A[0];
    }
    function r(A) {
      if (A.length === 0)
        return null;
      var N = A[0], U = A.pop();
      if (U !== N) {
        A[0] = U;
        e:
          for (var q = 0, te = A.length, Mn = te >>> 1; q < Mn; ) {
            var ft = 2 * (q + 1) - 1, wt = A[ft], xt = ft + 1, Zt = A[xt];
            if (0 > i(wt, U))
              xt < te && 0 > i(Zt, wt) ? (A[q] = Zt, A[xt] = U, q = xt) : (A[q] = wt, A[ft] = U, q = ft);
            else if (xt < te && 0 > i(Zt, U))
              A[q] = Zt, A[xt] = U, q = xt;
            else
              break e;
          }
      }
      return N;
    }
    function i(A, N) {
      var U = A.sortIndex - N.sortIndex;
      return U !== 0 ? U : A.id - N.id;
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
    var l = [], u = [], c = 1, f = null, d = 3, y = !1, g = !1, v = !1, T = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(A) {
      for (var N = n(u); N !== null; ) {
        if (N.callback === null)
          r(u);
        else if (N.startTime <= A)
          r(u), N.sortIndex = N.expirationTime, t(l, N);
        else
          break;
        N = n(u);
      }
    }
    function S(A) {
      if (v = !1, m(A), !g)
        if (n(l) !== null)
          g = !0, I(P);
        else {
          var N = n(u);
          N !== null && K(S, N.startTime - A);
        }
    }
    function P(A, N) {
      g = !1, v && (v = !1, p(k), k = -1), y = !0;
      var U = d;
      try {
        for (m(N), f = n(l); f !== null && (!(f.expirationTime > N) || A && !z()); ) {
          var q = f.callback;
          if (typeof q == "function") {
            f.callback = null, d = f.priorityLevel;
            var te = q(f.expirationTime <= N);
            N = e.unstable_now(), typeof te == "function" ? f.callback = te : f === n(l) && r(l), m(N);
          } else
            r(l);
          f = n(l);
        }
        if (f !== null)
          var Mn = !0;
        else {
          var ft = n(u);
          ft !== null && K(S, ft.startTime - N), Mn = !1;
        }
        return Mn;
      } finally {
        f = null, d = U, y = !1;
      }
    }
    var E = !1, C = null, k = -1, b = 5, R = -1;
    function z() {
      return !(e.unstable_now() - R < b);
    }
    function he() {
      if (C !== null) {
        var A = e.unstable_now();
        R = A;
        var N = !0;
        try {
          N = C(!0, A);
        } finally {
          N ? oe() : (E = !1, C = null);
        }
      } else
        E = !1;
    }
    var oe;
    if (typeof h == "function")
      oe = function() {
        h(he);
      };
    else if (typeof MessageChannel < "u") {
      var D = new MessageChannel(), $ = D.port2;
      D.port1.onmessage = he, oe = function() {
        $.postMessage(null);
      };
    } else
      oe = function() {
        T(he, 0);
      };
    function I(A) {
      C = A, E || (E = !0, oe());
    }
    function K(A, N) {
      k = T(function() {
        A(e.unstable_now());
      }, N);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, e.unstable_continueExecution = function() {
      g || y || (g = !0, I(P));
    }, e.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < A ? Math.floor(1e3 / A) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return d;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(l);
    }, e.unstable_next = function(A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var U = d;
      d = N;
      try {
        return A();
      } finally {
        d = U;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(A, N) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var U = d;
      d = A;
      try {
        return N();
      } finally {
        d = U;
      }
    }, e.unstable_scheduleCallback = function(A, N, U) {
      var q = e.unstable_now();
      switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? q + U : q) : U = q, A) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return te = U + te, A = { id: c++, callback: N, priorityLevel: A, startTime: U, expirationTime: te, sortIndex: -1 }, U > q ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (v ? (p(k), k = -1) : v = !0, K(S, U - q))) : (A.sortIndex = te, t(l, A), g || y || (g = !0, I(P))), A;
    }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(A) {
      var N = d;
      return function() {
        var U = d;
        d = N;
        try {
          return A.apply(this, arguments);
        } finally {
          d = U;
        }
      };
    };
  })(sm);
  om.exports = sm;
  var i1 = om.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var o1 = w, Ze = i1;
  function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var am = /* @__PURE__ */ new Set(), ji = {};
  function rr(e, t) {
    Lr(e, t), Lr(e + "Capture", t);
  }
  function Lr(e, t) {
    for (ji[e] = t, e = 0; e < t.length; e++)
      am.add(t[e]);
  }
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pl = Object.prototype.hasOwnProperty, s1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Uf = {}, Bf = {};
  function a1(e) {
    return Pl.call(Bf, e) ? !0 : Pl.call(Uf, e) ? !1 : s1.test(e) ? Bf[e] = !0 : (Uf[e] = !0, !1);
  }
  function l1(e, t, n, r) {
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
  function u1(e, t, n, r) {
    if (t === null || typeof t > "u" || l1(e, t, n, r))
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
  function Ve(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var _e = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _e[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    _e[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _e[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _e[e] = new Ve(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _e[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _e[e] = new Ve(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function(e) {
    _e[e] = new Ve(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function(e) {
    _e[e] = new Ve(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function(e) {
    _e[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Gu = /[\-:]([a-z])/g;
  function Yu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Gu,
      Yu
    );
    _e[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Gu, Yu);
    _e[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Gu, Yu);
    _e[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function(e) {
    _e[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  _e.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
  ["src", "href", "action", "formAction"].forEach(function(e) {
    _e[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Qu(e, t, n, r) {
    var i = _e.hasOwnProperty(t) ? _e[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (u1(t, n, i, r) && (n = null), r || i === null ? a1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Qt = o1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, go = Symbol.for("react.element"), pr = Symbol.for("react.portal"), mr = Symbol.for("react.fragment"), Xu = Symbol.for("react.strict_mode"), Cl = Symbol.for("react.profiler"), lm = Symbol.for("react.provider"), um = Symbol.for("react.context"), Zu = Symbol.for("react.forward_ref"), kl = Symbol.for("react.suspense"), _l = Symbol.for("react.suspense_list"), qu = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), cm = Symbol.for("react.offscreen"), Hf = Symbol.iterator;
  function qr(e) {
    return e === null || typeof e != "object" ? null : (e = Hf && e[Hf] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var fe = Object.assign, Fa;
  function ui(e) {
    if (Fa === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Fa = t && t[1] || "";
      }
    return `
` + Fa + e;
  }
  var Ra = !1;
  function Da(e, t) {
    if (!e || Ra)
      return "";
    Ra = !0;
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
      Ra = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? ui(e) : "";
  }
  function c1(e) {
    switch (e.tag) {
      case 5:
        return ui(e.type);
      case 16:
        return ui("Lazy");
      case 13:
        return ui("Suspense");
      case 19:
        return ui("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Da(e.type, !1), e;
      case 11:
        return e = Da(e.type.render, !1), e;
      case 1:
        return e = Da(e.type, !0), e;
      default:
        return "";
    }
  }
  function Al(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case mr:
        return "Fragment";
      case pr:
        return "Portal";
      case Cl:
        return "Profiler";
      case Xu:
        return "StrictMode";
      case kl:
        return "Suspense";
      case _l:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case um:
          return (e.displayName || "Context") + ".Consumer";
        case lm:
          return (e._context.displayName || "Context") + ".Provider";
        case Zu:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case qu:
          return t = e.displayName || null, t !== null ? t : Al(e.type) || "Memo";
        case tn:
          t = e._payload, e = e._init;
          try {
            return Al(e(t));
          } catch {
          }
      }
    return null;
  }
  function f1(e) {
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
        return Al(t);
      case 8:
        return t === Xu ? "StrictMode" : "Mode";
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
  function fm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function d1(e) {
    var t = fm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function vo(e) {
    e._valueTracker || (e._valueTracker = d1(e));
  }
  function dm(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = fm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function ns(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Wf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = En(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function hm(e, t) {
    t = t.checked, t != null && Qu(e, "checked", t, !1);
  }
  function jl(e, t) {
    hm(e, t);
    var n = En(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, En(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Kf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Fl(e, t, n) {
    (t !== "number" || ns(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ci = Array.isArray;
  function Fr(e, t, n, r) {
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
  function Rl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(_(91));
    return fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Gf(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(_(92));
        if (ci(n)) {
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
  function pm(e, t) {
    var n = En(t.value), r = En(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Yf(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function mm(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? mm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var So, ym = function(e) {
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
  function Fi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var mi = {
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
  }, h1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(mi).forEach(function(e) {
    h1.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), mi[t] = mi[e];
    });
  });
  function gm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mi.hasOwnProperty(e) && mi[e] ? ("" + t).trim() : t + "px";
  }
  function vm(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = gm(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var p1 = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, t) {
    if (t) {
      if (p1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Nl(e, t) {
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
  var bl = null;
  function Ju(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ll = null, Rr = null, Dr = null;
  function Qf(e) {
    if (e = io(e)) {
      if (typeof Ll != "function")
        throw Error(_(280));
      var t = e.stateNode;
      t && (t = Hs(t), Ll(e.stateNode, e.type, t));
    }
  }
  function Sm(e) {
    Rr ? Dr ? Dr.push(e) : Dr = [e] : Rr = e;
  }
  function wm() {
    if (Rr) {
      var e = Rr, t = Dr;
      if (Dr = Rr = null, Qf(e), t)
        for (e = 0; e < t.length; e++)
          Qf(t[e]);
    }
  }
  function xm(e, t) {
    return e(t);
  }
  function Tm() {
  }
  var Ma = !1;
  function Em(e, t, n) {
    if (Ma)
      return e(t, n);
    Ma = !0;
    try {
      return xm(e, t, n);
    } finally {
      Ma = !1, (Rr !== null || Dr !== null) && (Tm(), wm());
    }
  }
  function Ri(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Hs(n);
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
  var Vl = !1;
  if (Wt)
    try {
      var Jr = {};
      Object.defineProperty(Jr, "passive", { get: function() {
        Vl = !0;
      } }), window.addEventListener("test", Jr, Jr), window.removeEventListener("test", Jr, Jr);
    } catch {
      Vl = !1;
    }
  function m1(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var yi = !1, rs = null, is = !1, $l = null, y1 = { onError: function(e) {
    yi = !0, rs = e;
  } };
  function g1(e, t, n, r, i, o, s, a, l) {
    yi = !1, rs = null, m1.apply(y1, arguments);
  }
  function v1(e, t, n, r, i, o, s, a, l) {
    if (g1.apply(this, arguments), yi) {
      if (yi) {
        var u = rs;
        yi = !1, rs = null;
      } else
        throw Error(_(198));
      is || (is = !0, $l = u);
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
  function Pm(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Xf(e) {
    if (ir(e) !== e)
      throw Error(_(188));
  }
  function S1(e) {
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
            return Xf(i), e;
          if (o === r)
            return Xf(i), t;
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
  function Cm(e) {
    return e = S1(e), e !== null ? km(e) : null;
  }
  function km(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = km(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var _m = Ze.unstable_scheduleCallback, Zf = Ze.unstable_cancelCallback, w1 = Ze.unstable_shouldYield, x1 = Ze.unstable_requestPaint, me = Ze.unstable_now, T1 = Ze.unstable_getCurrentPriorityLevel, ec = Ze.unstable_ImmediatePriority, Am = Ze.unstable_UserBlockingPriority, os = Ze.unstable_NormalPriority, E1 = Ze.unstable_LowPriority, Om = Ze.unstable_IdlePriority, Is = null, kt = null;
  function P1(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function")
      try {
        kt.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var yt = Math.clz32 ? Math.clz32 : _1, C1 = Math.log, k1 = Math.LN2;
  function _1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (C1(e) / k1 | 0) | 0;
  }
  var wo = 64, xo = 4194304;
  function fi(e) {
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
  function ss(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? r = fi(a) : (o &= s, o !== 0 && (r = fi(o)));
    } else
      s = n & ~i, s !== 0 ? r = fi(s) : o !== 0 && (r = fi(o));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - yt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function A1(e, t) {
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
  function O1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - yt(o), a = 1 << s, l = i[s];
      l === -1 ? (!(a & n) || a & r) && (i[s] = A1(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function Il(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function jm() {
    var e = wo;
    return wo <<= 1, !(wo & 4194240) && (wo = 64), e;
  }
  function Na(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function no(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n;
  }
  function j1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - yt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function tc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - yt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Q = 0;
  function Fm(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Rm, nc, Dm, Mm, Nm, zl = !1, To = [], dn = null, hn = null, pn = null, Di = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), sn = [], F1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qf(e, t) {
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
        Di.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mi.delete(t.pointerId);
    }
  }
  function ei(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = io(t), t !== null && nc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function R1(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return dn = ei(dn, e, t, n, r, i), !0;
      case "dragenter":
        return hn = ei(hn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = ei(pn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Di.set(o, ei(Di.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Mi.set(o, ei(Mi.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function bm(e) {
    var t = Un(e.target);
    if (t !== null) {
      var n = ir(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Pm(n), t !== null) {
            e.blockedOn = t, Nm(e.priority, function() {
              Dm(n);
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
  function zo(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        bl = r, n.target.dispatchEvent(r), bl = null;
      } else
        return t = io(n), t !== null && nc(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Jf(e, t, n) {
    zo(e) && n.delete(t);
  }
  function D1() {
    zl = !1, dn !== null && zo(dn) && (dn = null), hn !== null && zo(hn) && (hn = null), pn !== null && zo(pn) && (pn = null), Di.forEach(Jf), Mi.forEach(Jf);
  }
  function ti(e, t) {
    e.blockedOn === t && (e.blockedOn = null, zl || (zl = !0, Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, D1)));
  }
  function Ni(e) {
    function t(i) {
      return ti(i, e);
    }
    if (0 < To.length) {
      ti(To[0], e);
      for (var n = 1; n < To.length; n++) {
        var r = To[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (dn !== null && ti(dn, e), hn !== null && ti(hn, e), pn !== null && ti(pn, e), Di.forEach(t), Mi.forEach(t), n = 0; n < sn.length; n++)
      r = sn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && (n = sn[0], n.blockedOn === null); )
      bm(n), n.blockedOn === null && sn.shift();
  }
  var Mr = Qt.ReactCurrentBatchConfig, as = !0;
  function M1(e, t, n, r) {
    var i = Q, o = Mr.transition;
    Mr.transition = null;
    try {
      Q = 1, rc(e, t, n, r);
    } finally {
      Q = i, Mr.transition = o;
    }
  }
  function N1(e, t, n, r) {
    var i = Q, o = Mr.transition;
    Mr.transition = null;
    try {
      Q = 4, rc(e, t, n, r);
    } finally {
      Q = i, Mr.transition = o;
    }
  }
  function rc(e, t, n, r) {
    if (as) {
      var i = Ul(e, t, n, r);
      if (i === null)
        Wa(e, t, r, ls, n), qf(e, r);
      else if (R1(i, e, t, n, r))
        r.stopPropagation();
      else if (qf(e, r), t & 4 && -1 < F1.indexOf(e)) {
        for (; i !== null; ) {
          var o = io(i);
          if (o !== null && Rm(o), o = Ul(e, t, n, r), o === null && Wa(e, t, r, ls, n), o === i)
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else
        Wa(e, t, r, null, n);
    }
  }
  var ls = null;
  function Ul(e, t, n, r) {
    if (ls = null, e = Ju(r), e = Un(e), e !== null)
      if (t = ir(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = Pm(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return ls = e, null;
  }
  function Lm(e) {
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
        switch (T1()) {
          case ec:
            return 1;
          case Am:
            return 4;
          case os:
          case E1:
            return 16;
          case Om:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ln = null, ic = null, Uo = null;
  function Vm() {
    if (Uo)
      return Uo;
    var e, t = ic, n = t.length, r, i = "value" in ln ? ln.value : ln.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
      ;
    return Uo = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Bo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Eo() {
    return !0;
  }
  function ed() {
    return !1;
  }
  function et(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var a in e)
        e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Eo : ed, this.isPropagationStopped = ed, this;
    }
    return fe(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Eo);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Eo);
    }, persist: function() {
    }, isPersistent: Eo }), t;
  }
  var Yr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, oc = et(Yr), ro = fe({}, Yr, { view: 0, detail: 0 }), b1 = et(ro), ba, La, ni, zs = fe({}, ro, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sc, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ni && (ni && e.type === "mousemove" ? (ba = e.screenX - ni.screenX, La = e.screenY - ni.screenY) : La = ba = 0, ni = e), ba);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : La;
  } }), td = et(zs), L1 = fe({}, zs, { dataTransfer: 0 }), V1 = et(L1), $1 = fe({}, ro, { relatedTarget: 0 }), Va = et($1), I1 = fe({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), z1 = et(I1), U1 = fe({}, Yr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), B1 = et(U1), H1 = fe({}, Yr, { data: 0 }), nd = et(H1), W1 = {
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
  }, K1 = {
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
  }, G1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Y1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = G1[e]) ? !!t[e] : !1;
  }
  function sc() {
    return Y1;
  }
  var Q1 = fe({}, ro, { key: function(e) {
    if (e.key) {
      var t = W1[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = Bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K1[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sc, charCode: function(e) {
    return e.type === "keypress" ? Bo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), X1 = et(Q1), Z1 = fe({}, zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rd = et(Z1), q1 = fe({}, ro, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sc }), J1 = et(q1), eS = fe({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tS = et(eS), nS = fe({}, zs, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rS = et(nS), iS = [9, 13, 27, 32], ac = Wt && "CompositionEvent" in window, gi = null;
  Wt && "documentMode" in document && (gi = document.documentMode);
  var oS = Wt && "TextEvent" in window && !gi, $m = Wt && (!ac || gi && 8 < gi && 11 >= gi), id = " ", od = !1;
  function Im(e, t) {
    switch (e) {
      case "keyup":
        return iS.indexOf(t.keyCode) !== -1;
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
  function zm(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var yr = !1;
  function sS(e, t) {
    switch (e) {
      case "compositionend":
        return zm(t);
      case "keypress":
        return t.which !== 32 ? null : (od = !0, id);
      case "textInput":
        return e = t.data, e === id && od ? null : e;
      default:
        return null;
    }
  }
  function aS(e, t) {
    if (yr)
      return e === "compositionend" || !ac && Im(e, t) ? (e = Vm(), Uo = ic = ln = null, yr = !1, e) : null;
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
        return $m && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lS[e.type] : t === "textarea";
  }
  function Um(e, t, n, r) {
    Sm(r), t = us(t, "onChange"), 0 < t.length && (n = new oc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var vi = null, bi = null;
  function uS(e) {
    Jm(e, 0);
  }
  function Us(e) {
    var t = Sr(e);
    if (dm(t))
      return e;
  }
  function cS(e, t) {
    if (e === "change")
      return t;
  }
  var Bm = !1;
  if (Wt) {
    var $a;
    if (Wt) {
      var Ia = "oninput" in document;
      if (!Ia) {
        var ad = document.createElement("div");
        ad.setAttribute("oninput", "return;"), Ia = typeof ad.oninput == "function";
      }
      $a = Ia;
    } else
      $a = !1;
    Bm = $a && (!document.documentMode || 9 < document.documentMode);
  }
  function ld() {
    vi && (vi.detachEvent("onpropertychange", Hm), bi = vi = null);
  }
  function Hm(e) {
    if (e.propertyName === "value" && Us(bi)) {
      var t = [];
      Um(t, bi, e, Ju(e)), Em(uS, t);
    }
  }
  function fS(e, t, n) {
    e === "focusin" ? (ld(), vi = t, bi = n, vi.attachEvent("onpropertychange", Hm)) : e === "focusout" && ld();
  }
  function dS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Us(bi);
  }
  function hS(e, t) {
    if (e === "click")
      return Us(t);
  }
  function pS(e, t) {
    if (e === "input" || e === "change")
      return Us(t);
  }
  function mS(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : mS;
  function Li(e, t) {
    if (vt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Pl.call(t, i) || !vt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function ud(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function cd(e, t) {
    var n = ud(e);
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
      n = ud(n);
    }
  }
  function Wm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Km() {
    for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = ns(e.document);
    }
    return t;
  }
  function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function yS(e) {
    var t = Km(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Wm(n.ownerDocument.documentElement, n)) {
      if (r !== null && lc(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = cd(n, o);
          var s = cd(
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
  var gS = Wt && "documentMode" in document && 11 >= document.documentMode, gr = null, Bl = null, Si = null, Hl = !1;
  function fd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hl || gr == null || gr !== ns(r) || (r = gr, "selectionStart" in r && lc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Si && Li(Si, r) || (Si = r, r = us(Bl, "onSelect"), 0 < r.length && (t = new oc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gr)));
  }
  function Po(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var vr = { animationend: Po("Animation", "AnimationEnd"), animationiteration: Po("Animation", "AnimationIteration"), animationstart: Po("Animation", "AnimationStart"), transitionend: Po("Transition", "TransitionEnd") }, za = {}, Gm = {};
  Wt && (Gm = document.createElement("div").style, "AnimationEvent" in window || (delete vr.animationend.animation, delete vr.animationiteration.animation, delete vr.animationstart.animation), "TransitionEvent" in window || delete vr.transitionend.transition);
  function Bs(e) {
    if (za[e])
      return za[e];
    if (!vr[e])
      return e;
    var t = vr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Gm)
        return za[e] = t[n];
    return e;
  }
  var Ym = Bs("animationend"), Qm = Bs("animationiteration"), Xm = Bs("animationstart"), Zm = Bs("transitionend"), qm = /* @__PURE__ */ new Map(), dd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, t) {
    qm.set(e, t), rr(t, [e]);
  }
  for (var Ua = 0; Ua < dd.length; Ua++) {
    var Ba = dd[Ua], vS = Ba.toLowerCase(), SS = Ba[0].toUpperCase() + Ba.slice(1);
    On(vS, "on" + SS);
  }
  On(Ym, "onAnimationEnd");
  On(Qm, "onAnimationIteration");
  On(Xm, "onAnimationStart");
  On("dblclick", "onDoubleClick");
  On("focusin", "onFocus");
  On("focusout", "onBlur");
  On(Zm, "onTransitionEnd");
  Lr("onMouseEnter", ["mouseout", "mouseover"]);
  Lr("onMouseLeave", ["mouseout", "mouseover"]);
  Lr("onPointerEnter", ["pointerout", "pointerover"]);
  Lr("onPointerLeave", ["pointerout", "pointerover"]);
  rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wS = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));
  function hd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, v1(r, t, void 0, e), e.currentTarget = null;
  }
  function Jm(e, t) {
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
            hd(i, a, u), o = l;
          }
        else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped())
              break e;
            hd(i, a, u), o = l;
          }
      }
    }
    if (is)
      throw e = $l, is = !1, $l = null, e;
  }
  function ne(e, t) {
    var n = t[Ql];
    n === void 0 && (n = t[Ql] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ey(t, e, 2, !1), n.add(r));
  }
  function Ha(e, t, n) {
    var r = 0;
    t && (r |= 4), ey(n, e, r, t);
  }
  var Co = "_reactListening" + Math.random().toString(36).slice(2);
  function Vi(e) {
    if (!e[Co]) {
      e[Co] = !0, am.forEach(function(n) {
        n !== "selectionchange" && (wS.has(n) || Ha(n, !1, e), Ha(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Co] || (t[Co] = !0, Ha("selectionchange", !1, t));
    }
  }
  function ey(e, t, n, r) {
    switch (Lm(t)) {
      case 1:
        var i = M1;
        break;
      case 4:
        i = N1;
        break;
      default:
        i = rc;
    }
    n = i.bind(null, t, n, e), i = void 0, !Vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Wa(e, t, n, r, i) {
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
              if (s = Un(a), s === null)
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
    Em(function() {
      var u = o, c = Ju(n), f = [];
      e: {
        var d = qm.get(e);
        if (d !== void 0) {
          var y = oc, g = e;
          switch (e) {
            case "keypress":
              if (Bo(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              y = X1;
              break;
            case "focusin":
              g = "focus", y = Va;
              break;
            case "focusout":
              g = "blur", y = Va;
              break;
            case "beforeblur":
            case "afterblur":
              y = Va;
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
              y = td;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = V1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = J1;
              break;
            case Ym:
            case Qm:
            case Xm:
              y = z1;
              break;
            case Zm:
              y = tS;
              break;
            case "scroll":
              y = b1;
              break;
            case "wheel":
              y = rS;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = B1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = rd;
          }
          var v = (t & 4) !== 0, T = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
          v = [];
          for (var h = u, m; h !== null; ) {
            m = h;
            var S = m.stateNode;
            if (m.tag === 5 && S !== null && (m = S, p !== null && (S = Ri(h, p), S != null && v.push($i(h, S, m)))), T)
              break;
            h = h.return;
          }
          0 < v.length && (d = new y(d, g, null, n, c), f.push({ event: d, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && n !== bl && (g = n.relatedTarget || n.fromElement) && (Un(g) || g[Kt]))
            break e;
          if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = u, g = g ? Un(g) : null, g !== null && (T = ir(g), g !== T || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = u), y !== g)) {
            if (v = td, S = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = rd, S = "onPointerLeave", p = "onPointerEnter", h = "pointer"), T = y == null ? d : Sr(y), m = g == null ? d : Sr(g), d = new v(S, h + "leave", y, n, c), d.target = T, d.relatedTarget = m, S = null, Un(c) === u && (v = new v(p, h + "enter", g, n, c), v.target = m, v.relatedTarget = T, S = v), T = S, y && g)
              t: {
                for (v = y, p = g, h = 0, m = v; m; m = dr(m))
                  h++;
                for (m = 0, S = p; S; S = dr(S))
                  m++;
                for (; 0 < h - m; )
                  v = dr(v), h--;
                for (; 0 < m - h; )
                  p = dr(p), m--;
                for (; h--; ) {
                  if (v === p || p !== null && v === p.alternate)
                    break t;
                  v = dr(v), p = dr(p);
                }
                v = null;
              }
            else
              v = null;
            y !== null && pd(f, d, y, v, !1), g !== null && T !== null && pd(f, T, g, v, !0);
          }
        }
        e: {
          if (d = u ? Sr(u) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file")
            var P = cS;
          else if (sd(d))
            if (Bm)
              P = pS;
            else {
              P = dS;
              var E = fS;
            }
          else
            (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (P = hS);
          if (P && (P = P(e, u))) {
            Um(f, P, n, c);
            break e;
          }
          E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Fl(d, "number", d.value);
        }
        switch (E = u ? Sr(u) : window, e) {
          case "focusin":
            (sd(E) || E.contentEditable === "true") && (gr = E, Bl = u, Si = null);
            break;
          case "focusout":
            Si = Bl = gr = null;
            break;
          case "mousedown":
            Hl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Hl = !1, fd(f, n, c);
            break;
          case "selectionchange":
            if (gS)
              break;
          case "keydown":
          case "keyup":
            fd(f, n, c);
        }
        var C;
        if (ac)
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
          yr ? Im(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
        k && ($m && n.locale !== "ko" && (yr || k !== "onCompositionStart" ? k === "onCompositionEnd" && yr && (C = Vm()) : (ln = c, ic = "value" in ln ? ln.value : ln.textContent, yr = !0)), E = us(u, k), 0 < E.length && (k = new nd(k, e, null, n, c), f.push({ event: k, listeners: E }), C ? k.data = C : (C = zm(n), C !== null && (k.data = C)))), (C = oS ? sS(e, n) : aS(e, n)) && (u = us(u, "onBeforeInput"), 0 < u.length && (c = new nd("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = C));
      }
      Jm(f, t);
    });
  }
  function $i(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function us(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = Ri(e, n), o != null && r.unshift($i(e, o, i)), o = Ri(e, t), o != null && r.push($i(e, o, i))), e = e.return;
    }
    return r;
  }
  function dr(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function pd(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var a = n, l = a.alternate, u = a.stateNode;
      if (l !== null && l === r)
        break;
      a.tag === 5 && u !== null && (a = u, i ? (l = Ri(n, o), l != null && s.unshift($i(n, l, a))) : i || (l = Ri(n, o), l != null && s.push($i(n, l, a)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var xS = /\r\n?/g, TS = /\u0000|\uFFFD/g;
  function md(e) {
    return (typeof e == "string" ? e : "" + e).replace(xS, `
`).replace(TS, "");
  }
  function ko(e, t, n) {
    if (t = md(t), md(e) !== t && n)
      throw Error(_(425));
  }
  function cs() {
  }
  var Wl = null, Kl = null;
  function Gl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Yl = typeof setTimeout == "function" ? setTimeout : void 0, ES = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, PS = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(e) {
    return yd.resolve(null).then(e).catch(CS);
  } : Yl;
  function CS(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ka(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), Ni(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Ni(t);
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
  function gd(e) {
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
  var Qr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Qr, Ii = "__reactProps$" + Qr, Kt = "__reactContainer$" + Qr, Ql = "__reactEvents$" + Qr, kS = "__reactListeners$" + Qr, _S = "__reactHandles$" + Qr;
  function Un(e) {
    var t = e[Ct];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Kt] || n[Ct]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = gd(e); e !== null; ) {
            if (n = e[Ct])
              return n;
            e = gd(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function io(e) {
    return e = e[Ct] || e[Kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Sr(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(_(33));
  }
  function Hs(e) {
    return e[Ii] || null;
  }
  var Xl = [], wr = -1;
  function jn(e) {
    return { current: e };
  }
  function ie(e) {
    0 > wr || (e.current = Xl[wr], Xl[wr] = null, wr--);
  }
  function ee(e, t) {
    wr++, Xl[wr] = e.current, e.current = t;
  }
  var Pn = {}, Me = jn(Pn), Be = jn(!1), Xn = Pn;
  function Vr(e, t) {
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
  function fs() {
    ie(Be), ie(Me);
  }
  function vd(e, t, n) {
    if (Me.current !== Pn)
      throw Error(_(168));
    ee(Me, t), ee(Be, n);
  }
  function ty(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(_(108, f1(e) || "Unknown", i));
    return fe({}, n, r);
  }
  function ds(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pn, Xn = Me.current, ee(Me, e), ee(Be, Be.current), !0;
  }
  function Sd(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(_(169));
    n ? (e = ty(e, t, Xn), r.__reactInternalMemoizedMergedChildContext = e, ie(Be), ie(Me), ee(Me, e)) : ie(Be), ee(Be, n);
  }
  var Nt = null, Ws = !1, Ga = !1;
  function ny(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  function AS(e) {
    Ws = !0, ny(e);
  }
  function Fn() {
    if (!Ga && Nt !== null) {
      Ga = !0;
      var e = 0, t = Q;
      try {
        var n = Nt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Nt = null, Ws = !1;
      } catch (i) {
        throw Nt !== null && (Nt = Nt.slice(e + 1)), _m(ec, Fn), i;
      } finally {
        Q = t, Ga = !1;
      }
    }
    return null;
  }
  var xr = [], Tr = 0, hs = null, ps = 0, ot = [], st = 0, Zn = null, Lt = 1, Vt = "";
  function Ln(e, t) {
    xr[Tr++] = ps, xr[Tr++] = hs, hs = e, ps = t;
  }
  function ry(e, t, n) {
    ot[st++] = Lt, ot[st++] = Vt, ot[st++] = Zn, Zn = e;
    var r = Lt;
    e = Vt;
    var i = 32 - yt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - yt(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Lt = 1 << 32 - yt(t) + i | n << i | r, Vt = o + e;
    } else
      Lt = 1 << o | n << i | r, Vt = e;
  }
  function uc(e) {
    e.return !== null && (Ln(e, 1), ry(e, 1, 0));
  }
  function cc(e) {
    for (; e === hs; )
      hs = xr[--Tr], xr[Tr] = null, ps = xr[--Tr], xr[Tr] = null;
    for (; e === Zn; )
      Zn = ot[--st], ot[st] = null, Vt = ot[--st], ot[st] = null, Lt = ot[--st], ot[st] = null;
  }
  var Xe = null, Ge = null, ae = !1, mt = null;
  function iy(e, t) {
    var n = at(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function wd(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ge = mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ge = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zn !== null ? { id: Lt, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = at(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ge = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Zl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ql(e) {
    if (ae) {
      var t = Ge;
      if (t) {
        var n = t;
        if (!wd(e, t)) {
          if (Zl(e))
            throw Error(_(418));
          t = mn(n.nextSibling);
          var r = Xe;
          t && wd(e, t) ? iy(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, Xe = e);
        }
      } else {
        if (Zl(e))
          throw Error(_(418));
        e.flags = e.flags & -4097 | 2, ae = !1, Xe = e;
      }
    }
  }
  function xd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Xe = e;
  }
  function _o(e) {
    if (e !== Xe)
      return !1;
    if (!ae)
      return xd(e), ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Gl(e.type, e.memoizedProps)), t && (t = Ge)) {
      if (Zl(e))
        throw oy(), Error(_(418));
      for (; t; )
        iy(e, t), t = mn(t.nextSibling);
    }
    if (xd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(_(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ge = mn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ge = null;
      }
    } else
      Ge = Xe ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function oy() {
    for (var e = Ge; e; )
      e = mn(e.nextSibling);
  }
  function $r() {
    Ge = Xe = null, ae = !1;
  }
  function fc(e) {
    mt === null ? mt = [e] : mt.push(e);
  }
  var OS = Qt.ReactCurrentBatchConfig;
  function ri(e, t, n) {
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
  function Td(e) {
    var t = e._init;
    return t(e._payload);
  }
  function sy(e) {
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
      return p = Sn(p, h), p.index = 0, p.sibling = null, p;
    }
    function o(p, h, m) {
      return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h);
    }
    function s(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, h, m, S) {
      return h === null || h.tag !== 6 ? (h = el(m, p.mode, S), h.return = p, h) : (h = i(h, m), h.return = p, h);
    }
    function l(p, h, m, S) {
      var P = m.type;
      return P === mr ? c(p, h, m.props.children, S, m.key) : h !== null && (h.elementType === P || typeof P == "object" && P !== null && P.$$typeof === tn && Td(P) === h.type) ? (S = i(h, m.props), S.ref = ri(p, h, m), S.return = p, S) : (S = Xo(m.type, m.key, m.props, null, p.mode, S), S.ref = ri(p, h, m), S.return = p, S);
    }
    function u(p, h, m, S) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = tl(m, p.mode, S), h.return = p, h) : (h = i(h, m.children || []), h.return = p, h);
    }
    function c(p, h, m, S, P) {
      return h === null || h.tag !== 7 ? (h = Gn(m, p.mode, S, P), h.return = p, h) : (h = i(h, m), h.return = p, h);
    }
    function f(p, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
        return h = el("" + h, p.mode, m), h.return = p, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case go:
            return m = Xo(h.type, h.key, h.props, null, p.mode, m), m.ref = ri(p, null, h), m.return = p, m;
          case pr:
            return h = tl(h, p.mode, m), h.return = p, h;
          case tn:
            var S = h._init;
            return f(p, S(h._payload), m);
        }
        if (ci(h) || qr(h))
          return h = Gn(h, p.mode, m, null), h.return = p, h;
        Ao(p, h);
      }
      return null;
    }
    function d(p, h, m, S) {
      var P = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number")
        return P !== null ? null : a(p, h, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case go:
            return m.key === P ? l(p, h, m, S) : null;
          case pr:
            return m.key === P ? u(p, h, m, S) : null;
          case tn:
            return P = m._init, d(
              p,
              h,
              P(m._payload),
              S
            );
        }
        if (ci(m) || qr(m))
          return P !== null ? null : c(p, h, m, S, null);
        Ao(p, m);
      }
      return null;
    }
    function y(p, h, m, S, P) {
      if (typeof S == "string" && S !== "" || typeof S == "number")
        return p = p.get(m) || null, a(h, p, "" + S, P);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case go:
            return p = p.get(S.key === null ? m : S.key) || null, l(h, p, S, P);
          case pr:
            return p = p.get(S.key === null ? m : S.key) || null, u(h, p, S, P);
          case tn:
            var E = S._init;
            return y(p, h, m, E(S._payload), P);
        }
        if (ci(S) || qr(S))
          return p = p.get(m) || null, c(h, p, S, P, null);
        Ao(h, S);
      }
      return null;
    }
    function g(p, h, m, S) {
      for (var P = null, E = null, C = h, k = h = 0, b = null; C !== null && k < m.length; k++) {
        C.index > k ? (b = C, C = null) : b = C.sibling;
        var R = d(p, C, m[k], S);
        if (R === null) {
          C === null && (C = b);
          break;
        }
        e && C && R.alternate === null && t(p, C), h = o(R, h, k), E === null ? P = R : E.sibling = R, E = R, C = b;
      }
      if (k === m.length)
        return n(p, C), ae && Ln(p, k), P;
      if (C === null) {
        for (; k < m.length; k++)
          C = f(p, m[k], S), C !== null && (h = o(C, h, k), E === null ? P = C : E.sibling = C, E = C);
        return ae && Ln(p, k), P;
      }
      for (C = r(p, C); k < m.length; k++)
        b = y(C, p, k, m[k], S), b !== null && (e && b.alternate !== null && C.delete(b.key === null ? k : b.key), h = o(b, h, k), E === null ? P = b : E.sibling = b, E = b);
      return e && C.forEach(function(z) {
        return t(p, z);
      }), ae && Ln(p, k), P;
    }
    function v(p, h, m, S) {
      var P = qr(m);
      if (typeof P != "function")
        throw Error(_(150));
      if (m = P.call(m), m == null)
        throw Error(_(151));
      for (var E = P = null, C = h, k = h = 0, b = null, R = m.next(); C !== null && !R.done; k++, R = m.next()) {
        C.index > k ? (b = C, C = null) : b = C.sibling;
        var z = d(p, C, R.value, S);
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
        ), ae && Ln(p, k), P;
      if (C === null) {
        for (; !R.done; k++, R = m.next())
          R = f(p, R.value, S), R !== null && (h = o(R, h, k), E === null ? P = R : E.sibling = R, E = R);
        return ae && Ln(p, k), P;
      }
      for (C = r(p, C); !R.done; k++, R = m.next())
        R = y(C, p, k, R.value, S), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? k : R.key), h = o(R, h, k), E === null ? P = R : E.sibling = R, E = R);
      return e && C.forEach(function(he) {
        return t(p, he);
      }), ae && Ln(p, k), P;
    }
    function T(p, h, m, S) {
      if (typeof m == "object" && m !== null && m.type === mr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case go:
            e: {
              for (var P = m.key, E = h; E !== null; ) {
                if (E.key === P) {
                  if (P = m.type, P === mr) {
                    if (E.tag === 7) {
                      n(p, E.sibling), h = i(E, m.props.children), h.return = p, p = h;
                      break e;
                    }
                  } else if (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === tn && Td(P) === E.type) {
                    n(p, E.sibling), h = i(E, m.props), h.ref = ri(p, E, m), h.return = p, p = h;
                    break e;
                  }
                  n(p, E);
                  break;
                } else
                  t(p, E);
                E = E.sibling;
              }
              m.type === mr ? (h = Gn(m.props.children, p.mode, S, m.key), h.return = p, p = h) : (S = Xo(m.type, m.key, m.props, null, p.mode, S), S.ref = ri(p, h, m), S.return = p, p = S);
            }
            return s(p);
          case pr:
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
              h = tl(m, p.mode, S), h.return = p, p = h;
            }
            return s(p);
          case tn:
            return E = m._init, T(p, h, E(m._payload), S);
        }
        if (ci(m))
          return g(p, h, m, S);
        if (qr(m))
          return v(p, h, m, S);
        Ao(p, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, m), h.return = p, p = h) : (n(p, h), h = el(m, p.mode, S), h.return = p, p = h), s(p)) : n(p, h);
    }
    return T;
  }
  var Ir = sy(!0), ay = sy(!1), ms = jn(null), ys = null, Er = null, dc = null;
  function hc() {
    dc = Er = ys = null;
  }
  function pc(e) {
    var t = ms.current;
    ie(ms), e._currentValue = t;
  }
  function Jl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function Nr(e, t) {
    ys = e, dc = Er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
  }
  function ut(e) {
    var t = e._currentValue;
    if (dc !== e)
      if (e = { context: e, memoizedValue: t, next: null }, Er === null) {
        if (ys === null)
          throw Error(_(308));
        Er = e, ys.dependencies = { lanes: 0, firstContext: e };
      } else
        Er = Er.next = e;
    return t;
  }
  var Bn = null;
  function mc(e) {
    Bn === null ? Bn = [e] : Bn.push(e);
  }
  function ly(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, mc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Gt(e, r);
  }
  function Gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var nn = !1;
  function yc(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function uy(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function zt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function yn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, W & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Gt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, mc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Gt(e, n);
  }
  function Ho(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, tc(e, n);
    }
  }
  function Ed(e, t) {
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
            var g = e, v = a;
            switch (d = t, y = n, v.tag) {
              case 1:
                if (g = v.payload, typeof g == "function") {
                  f = g.call(y, f, d);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = g.flags & -65537 | 128;
              case 0:
                if (g = v.payload, d = typeof g == "function" ? g.call(y, f, d) : g, d == null)
                  break e;
                f = fe({}, f, d);
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
  function Pd(e, t, n) {
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
  var oo = {}, _t = jn(oo), zi = jn(oo), Ui = jn(oo);
  function Hn(e) {
    if (e === oo)
      throw Error(_(174));
    return e;
  }
  function gc(e, t) {
    switch (ee(Ui, t), ee(zi, e), ee(_t, oo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Dl(t, e);
    }
    ie(_t), ee(_t, t);
  }
  function zr() {
    ie(_t), ie(zi), ie(Ui);
  }
  function cy(e) {
    Hn(Ui.current);
    var t = Hn(_t.current), n = Dl(t, e.type);
    t !== n && (ee(zi, e), ee(_t, n));
  }
  function vc(e) {
    zi.current === e && (ie(_t), ie(zi));
  }
  var le = jn(0);
  function vs(e) {
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
  var Ya = [];
  function Sc() {
    for (var e = 0; e < Ya.length; e++)
      Ya[e]._workInProgressVersionPrimary = null;
    Ya.length = 0;
  }
  var Wo = Qt.ReactCurrentDispatcher, Qa = Qt.ReactCurrentBatchConfig, qn = 0, ce = null, ge = null, we = null, Ss = !1, wi = !1, Bi = 0, jS = 0;
  function Ae() {
    throw Error(_(321));
  }
  function wc(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!vt(e[n], t[n]))
        return !1;
    return !0;
  }
  function xc(e, t, n, r, i, o) {
    if (qn = o, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wo.current = e === null || e.memoizedState === null ? MS : NS, e = n(r, i), wi) {
      o = 0;
      do {
        if (wi = !1, Bi = 0, 25 <= o)
          throw Error(_(301));
        o += 1, we = ge = null, t.updateQueue = null, Wo.current = bS, e = n(r, i);
      } while (wi);
    }
    if (Wo.current = ws, t = ge !== null && ge.next !== null, qn = 0, we = ge = ce = null, Ss = !1, t)
      throw Error(_(300));
    return e;
  }
  function Tc() {
    var e = Bi !== 0;
    return Bi = 0, e;
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return we === null ? ce.memoizedState = we = e : we = we.next = e, we;
  }
  function ct() {
    if (ge === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ge.next;
    var t = we === null ? ce.memoizedState : we.next;
    if (t !== null)
      we = t, ge = e;
    else {
      if (e === null)
        throw Error(_(310));
      ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, we === null ? ce.memoizedState = we = e : we = we.next = e;
    }
    return we;
  }
  function Hi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xa(e) {
    var t = ct(), n = t.queue;
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
          l === null ? (a = l = f, s = r) : l = l.next = f, ce.lanes |= c, Jn |= c;
        }
        u = u.next;
      } while (u !== null && u !== o);
      l === null ? s = r : l.next = a, vt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, ce.lanes |= o, Jn |= o, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Za(e) {
    var t = ct(), n = t.queue;
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
      vt(o, t.memoizedState) || (Ue = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function fy() {
  }
  function dy(e, t) {
    var n = ce, r = ct(), i = t(), o = !vt(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ue = !0), r = r.queue, Ec(my.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || we !== null && we.memoizedState.tag & 1) {
      if (n.flags |= 2048, Wi(9, py.bind(null, n, r, i, t), void 0, null), xe === null)
        throw Error(_(349));
      qn & 30 || hy(n, t, i);
    }
    return i;
  }
  function hy(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function py(e, t, n, r) {
    t.value = n, t.getSnapshot = r, yy(t) && gy(e);
  }
  function my(e, t, n) {
    return n(function() {
      yy(t) && gy(e);
    });
  }
  function yy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !vt(e, n);
    } catch {
      return !0;
    }
  }
  function gy(e) {
    var t = Gt(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Cd(e) {
    var t = Et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hi, lastRenderedState: e }, t.queue = e, e = e.dispatch = DS.bind(null, ce, e), [t.memoizedState, e];
  }
  function Wi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function vy() {
    return ct().memoizedState;
  }
  function Ko(e, t, n, r) {
    var i = Et();
    ce.flags |= e, i.memoizedState = Wi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ks(e, t, n, r) {
    var i = ct();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ge !== null) {
      var s = ge.memoizedState;
      if (o = s.destroy, r !== null && wc(r, s.deps)) {
        i.memoizedState = Wi(t, n, o, r);
        return;
      }
    }
    ce.flags |= e, i.memoizedState = Wi(1 | t, n, o, r);
  }
  function kd(e, t) {
    return Ko(8390656, 8, e, t);
  }
  function Ec(e, t) {
    return Ks(2048, 8, e, t);
  }
  function Sy(e, t) {
    return Ks(4, 2, e, t);
  }
  function wy(e, t) {
    return Ks(4, 4, e, t);
  }
  function xy(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Ty(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ks(4, 4, xy.bind(null, t, e), n);
  }
  function Pc() {
  }
  function Ey(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Py(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Cy(e, t, n) {
    return qn & 21 ? (vt(n, t) || (n = jm(), ce.lanes |= n, Jn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
  }
  function FS(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Qa.transition;
    Qa.transition = {};
    try {
      e(!1), t();
    } finally {
      Q = n, Qa.transition = r;
    }
  }
  function ky() {
    return ct().memoizedState;
  }
  function RS(e, t, n) {
    var r = vn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, _y(e))
      Ay(t, n);
    else if (n = ly(e, t, n, r), n !== null) {
      var i = be();
      gt(n, e, r, i), Oy(n, t, r);
    }
  }
  function DS(e, t, n) {
    var r = vn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (_y(e))
      Ay(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
          var s = t.lastRenderedState, a = o(s, n);
          if (i.hasEagerState = !0, i.eagerState = a, vt(a, s)) {
            var l = t.interleaved;
            l === null ? (i.next = i, mc(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = ly(e, t, i, r), n !== null && (i = be(), gt(n, e, r, i), Oy(n, t, r));
    }
  }
  function _y(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce;
  }
  function Ay(e, t) {
    wi = Ss = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Oy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, tc(e, n);
    }
  }
  var ws = { readContext: ut, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: !1 }, MS = { readContext: ut, useCallback: function(e, t) {
    return Et().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ut, useEffect: kd, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ko(
      4194308,
      4,
      xy.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ko(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ko(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Et();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Et();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = RS.bind(null, ce, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Et();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Cd, useDebugValue: Pc, useDeferredValue: function(e) {
    return Et().memoizedState = e;
  }, useTransition: function() {
    var e = Cd(!1), t = e[0];
    return e = FS.bind(null, e[1]), Et().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ce, i = Et();
    if (ae) {
      if (n === void 0)
        throw Error(_(407));
      n = n();
    } else {
      if (n = t(), xe === null)
        throw Error(_(349));
      qn & 30 || hy(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, kd(my.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Wi(9, py.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Et(), t = xe.identifierPrefix;
    if (ae) {
      var n = Vt, r = Lt;
      n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Bi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = jS++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, NS = {
    readContext: ut,
    useCallback: Ey,
    useContext: ut,
    useEffect: Ec,
    useImperativeHandle: Ty,
    useInsertionEffect: Sy,
    useLayoutEffect: wy,
    useMemo: Py,
    useReducer: Xa,
    useRef: vy,
    useState: function() {
      return Xa(Hi);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e) {
      var t = ct();
      return Cy(t, ge.memoizedState, e);
    },
    useTransition: function() {
      var e = Xa(Hi)[0], t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: fy,
    useSyncExternalStore: dy,
    useId: ky,
    unstable_isNewReconciler: !1
  }, bS = { readContext: ut, useCallback: Ey, useContext: ut, useEffect: Ec, useImperativeHandle: Ty, useInsertionEffect: Sy, useLayoutEffect: wy, useMemo: Py, useReducer: Za, useRef: vy, useState: function() {
    return Za(Hi);
  }, useDebugValue: Pc, useDeferredValue: function(e) {
    var t = ct();
    return ge === null ? t.memoizedState = e : Cy(t, ge.memoizedState, e);
  }, useTransition: function() {
    var e = Za(Hi)[0], t = ct().memoizedState;
    return [e, t];
  }, useMutableSource: fy, useSyncExternalStore: dy, useId: ky, unstable_isNewReconciler: !1 };
  function ht(e, t) {
    if (e && e.defaultProps) {
      t = fe({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function eu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : fe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Gs = { isMounted: function(e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = be(), i = vn(e), o = zt(r, i);
    o.payload = t, n != null && (o.callback = n), t = yn(e, o, i), t !== null && (gt(t, e, i, r), Ho(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = be(), i = vn(e), o = zt(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = yn(e, o, i), t !== null && (gt(t, e, i, r), Ho(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = be(), r = vn(e), i = zt(n, r);
    i.tag = 2, t != null && (i.callback = t), t = yn(e, i, r), t !== null && (gt(t, e, r, n), Ho(t, e, r));
  } };
  function _d(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Li(n, r) || !Li(i, o) : !0;
  }
  function jy(e, t, n) {
    var r = !1, i = Pn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ut(o) : (i = He(t) ? Xn : Me.current, r = t.contextTypes, o = (r = r != null) ? Vr(e, i) : Pn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Gs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Ad(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Gs.enqueueReplaceState(t, t.state, null);
  }
  function tu(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, yc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ut(o) : (o = He(t) ? Xn : Me.current, i.context = Vr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (eu(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Gs.enqueueReplaceState(i, i.state, null), gs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ur(e, t) {
    try {
      var n = "", r = t;
      do
        n += c1(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function qa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function nu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var LS = typeof WeakMap == "function" ? WeakMap : Map;
  function Fy(e, t, n) {
    n = zt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Ts || (Ts = !0, du = r), nu(e, t);
    }, n;
  }
  function Ry(e, t, n) {
    n = zt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        nu(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      nu(e, t), typeof r != "function" && (gn === null ? gn = /* @__PURE__ */ new Set([this]) : gn.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function Od(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new LS();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = ZS.bind(null, e, t, n), t.then(e, e));
  }
  function jd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fd(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, yn(n, t, 1))), n.lanes |= 1), e);
  }
  var VS = Qt.ReactCurrentOwner, Ue = !1;
  function Ne(e, t, n, r) {
    t.child = e === null ? ay(t, null, n, r) : Ir(t, e.child, n, r);
  }
  function Rd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Nr(t, i), r = xc(e, t, n, r, o, i), n = Tc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Yt(e, t, i)) : (ae && n && uc(t), t.flags |= 1, Ne(e, t, r, i), t.child);
  }
  function Dd(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Rc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Dy(e, t, o, r, i)) : (e = Xo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Li, n(s, r) && e.ref === t.ref)
        return Yt(e, t, i);
    }
    return t.flags |= 1, e = Sn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Dy(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Li(o, r) && e.ref === t.ref)
        if (Ue = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ue = !0);
        else
          return t.lanes = e.lanes, Yt(e, t, i);
    }
    return ru(e, t, n, r, i);
  }
  function My(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ee(Cr, Ke), Ke |= n;
      else {
        if (!(n & 1073741824))
          return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ee(Cr, Ke), Ke |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ee(Cr, Ke), Ke |= r;
      }
    else
      o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ee(Cr, Ke), Ke |= r;
    return Ne(e, t, i, n), t.child;
  }
  function Ny(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ru(e, t, n, r, i) {
    var o = He(n) ? Xn : Me.current;
    return o = Vr(t, o), Nr(t, i), n = xc(e, t, n, r, o, i), r = Tc(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Yt(e, t, i)) : (ae && r && uc(t), t.flags |= 1, Ne(e, t, n, i), t.child);
  }
  function Md(e, t, n, r, i) {
    if (He(n)) {
      var o = !0;
      ds(t);
    } else
      o = !1;
    if (Nr(t, i), t.stateNode === null)
      Go(e, t), jy(t, n, r), tu(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, a = t.memoizedProps;
      s.props = a;
      var l = s.context, u = n.contextType;
      typeof u == "object" && u !== null ? u = ut(u) : (u = He(n) ? Xn : Me.current, u = Vr(t, u));
      var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Ad(t, s, r, u), nn = !1;
      var d = t.memoizedState;
      s.state = d, gs(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Be.current || nn ? (typeof c == "function" && (eu(t, n, c, r), l = t.memoizedState), (a = nn || _d(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, uy(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : ht(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ut(l) : (l = He(n) ? Xn : Me.current, l = Vr(t, l));
      var y = n.getDerivedStateFromProps;
      (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Ad(t, s, r, l), nn = !1, d = t.memoizedState, s.state = d, gs(t, r, s, i);
      var g = t.memoizedState;
      a !== f || d !== g || Be.current || nn ? (typeof y == "function" && (eu(t, n, y, r), g = t.memoizedState), (u = nn || _d(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return iu(e, t, n, r, o, i);
  }
  function iu(e, t, n, r, i, o) {
    Ny(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
      return i && Sd(t, n, !1), Yt(e, t, o);
    r = t.stateNode, VS.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ir(t, e.child, null, o), t.child = Ir(t, null, a, o)) : Ne(e, t, a, o), t.memoizedState = r.state, i && Sd(t, n, !0), t.child;
  }
  function by(e) {
    var t = e.stateNode;
    t.pendingContext ? vd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vd(e, t.context, !1), gc(e, t.containerInfo);
  }
  function Nd(e, t, n, r, i) {
    return $r(), fc(i), t.flags |= 256, Ne(e, t, n, r), t.child;
  }
  var ou = { dehydrated: null, treeContext: null, retryLane: 0 };
  function su(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ly(e, t, n) {
    var r = t.pendingProps, i = le.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ee(le, i & 1), e === null)
      return ql(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Xs(s, r, 0, null), e = Gn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = su(n), t.memoizedState = ou, e) : Cc(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
      return $S(e, t, s, r, a, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
      var l = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Sn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Sn(a, o) : (o = Gn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? su(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = ou, r;
    }
    return o = e.child, e = o.sibling, r = Sn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Cc(e, t) {
    return t = Xs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Oo(e, t, n, r) {
    return r !== null && fc(r), Ir(t, e.child, null, n), e = Cc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function $S(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = qa(Error(_(422))), Oo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Xs({ mode: "visible", children: r.children }, i, 0, null), o = Gn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ir(t, e.child, null, s), t.child.memoizedState = su(s), t.memoizedState = ou, o);
    if (!(t.mode & 1))
      return Oo(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
      return r = a, o = Error(_(419)), r = qa(o, r, void 0), Oo(e, t, s, r);
    }
    if (a = (s & e.childLanes) !== 0, Ue || a) {
      if (r = xe, r !== null) {
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
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Gt(e, i), gt(r, e, i, -1));
      }
      return Fc(), r = qa(Error(_(421))), Oo(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qS.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ge = mn(i.nextSibling), Xe = t, ae = !0, mt = null, e !== null && (ot[st++] = Lt, ot[st++] = Vt, ot[st++] = Zn, Lt = e.id, Vt = e.overflow, Zn = t), t = Cc(t, r.children), t.flags |= 4096, t);
  }
  function bd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Jl(e.return, t, n);
  }
  function Ja(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Vy(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Ne(e, t, r.children, n), r = le.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && bd(e, n, t);
            else if (e.tag === 19)
              bd(e, n, t);
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
    if (ee(le, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && vs(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ja(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && vs(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          Ja(t, !0, n, null, o);
          break;
        case "together":
          Ja(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Go(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Jn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(_(153));
    if (t.child !== null) {
      for (e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Sn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function IS(e, t, n) {
    switch (t.tag) {
      case 3:
        by(t), $r();
        break;
      case 5:
        cy(t);
        break;
      case 1:
        He(t.type) && ds(t);
        break;
      case 4:
        gc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        ee(ms, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ee(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ly(e, t, n) : (ee(le, le.current & 1), e = Yt(e, t, n), e !== null ? e.sibling : null);
        ee(le, le.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Vy(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ee(le, le.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, My(e, t, n);
    }
    return Yt(e, t, n);
  }
  var $y, au, Iy, zy;
  $y = function(e, t) {
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
  au = function() {
  };
  Iy = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Hn(_t.current);
      var o = null;
      switch (n) {
        case "input":
          i = Ol(e, i), r = Ol(e, r), o = [];
          break;
        case "select":
          i = fe({}, i, { value: void 0 }), r = fe({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Rl(e, i), r = Rl(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cs);
      }
      Ml(n, r);
      var s;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (s in a)
              a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
          } else
            u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ji.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
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
            u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ji.hasOwnProperty(u) ? (l != null && u === "onScroll" && ne("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
      }
      n && (o = o || []).push("style", n);
      var u = o;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  zy = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ii(e, t) {
    if (!ae)
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
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function zS(e, t, n) {
    var r = t.pendingProps;
    switch (cc(t), t.tag) {
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
        return Oe(t), null;
      case 1:
        return He(t.type) && fs(), Oe(t), null;
      case 3:
        return r = t.stateNode, zr(), ie(Be), ie(Me), Sc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_o(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mt !== null && (mu(mt), mt = null))), au(e, t), Oe(t), null;
      case 5:
        vc(t);
        var i = Hn(Ui.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Iy(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(_(166));
            return Oe(t), null;
          }
          if (e = Hn(_t.current), _o(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Ct] = t, r[Ii] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ne("cancel", r), ne("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < di.length; i++)
                  ne(di[i], r);
                break;
              case "source":
                ne("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ne(
                  "error",
                  r
                ), ne("load", r);
                break;
              case "details":
                ne("toggle", r);
                break;
              case "input":
                Wf(r, o), ne("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ne("invalid", r);
                break;
              case "textarea":
                Gf(r, o), ne("invalid", r);
            }
            Ml(n, o), i = null;
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ko(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ko(
                  r.textContent,
                  a,
                  e
                ), i = ["children", "" + a]) : ji.hasOwnProperty(s) && a != null && s === "onScroll" && ne("scroll", r);
              }
            switch (n) {
              case "input":
                vo(r), Kf(r, o, !0);
                break;
              case "textarea":
                vo(r), Yf(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = cs);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ct] = t, e[Ii] = r, $y(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Nl(n, r), n) {
                case "dialog":
                  ne("cancel", e), ne("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ne("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < di.length; i++)
                    ne(di[i], e);
                  i = r;
                  break;
                case "source":
                  ne("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ne(
                    "error",
                    e
                  ), ne("load", e), i = r;
                  break;
                case "details":
                  ne("toggle", e), i = r;
                  break;
                case "input":
                  Wf(e, r), i = Ol(e, r), ne("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = fe({}, r, { value: void 0 }), ne("invalid", e);
                  break;
                case "textarea":
                  Gf(e, r), i = Rl(e, r), ne("invalid", e);
                  break;
                default:
                  i = r;
              }
              Ml(n, i), a = i;
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style" ? vm(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ym(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Fi(e, l) : typeof l == "number" && Fi(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ji.hasOwnProperty(o) ? l != null && o === "onScroll" && ne("scroll", e) : l != null && Qu(e, o, l, s));
                }
              switch (n) {
                case "input":
                  vo(e), Kf(e, r, !1);
                  break;
                case "textarea":
                  vo(e), Yf(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + En(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Fr(e, !!r.multiple, o, !1) : r.defaultValue != null && Fr(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = cs);
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
        return Oe(t), null;
      case 6:
        if (e && t.stateNode != null)
          zy(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(_(166));
          if (n = Hn(Ui.current), Hn(_t.current), _o(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (o = r.nodeValue !== n) && (e = Xe, e !== null))
              switch (e.tag) {
                case 3:
                  ko(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && ko(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
        }
        return Oe(t), null;
      case 13:
        if (ie(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ae && Ge !== null && t.mode & 1 && !(t.flags & 128))
            oy(), $r(), t.flags |= 98560, o = !1;
          else if (o = _o(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(_(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(_(317));
              o[Ct] = t;
            } else
              $r(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Oe(t), o = !1;
          } else
            mt !== null && (mu(mt), mt = null), o = !0;
          if (!o)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ve === 0 && (ve = 3) : Fc())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
      case 4:
        return zr(), au(e, t), e === null && Vi(t.stateNode.containerInfo), Oe(t), null;
      case 10:
        return pc(t.type._context), Oe(t), null;
      case 17:
        return He(t.type) && fs(), Oe(t), null;
      case 19:
        if (ie(le), o = t.memoizedState, o === null)
          return Oe(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
          if (r)
            ii(o, !1);
          else {
            if (ve !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (s = vs(e), s !== null) {
                  for (t.flags |= 128, ii(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return ee(le, le.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && me() > Br && (t.flags |= 128, r = !0, ii(o, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = vs(s), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ii(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ae)
                return Oe(t), null;
            } else
              2 * me() - o.renderingStartTime > Br && n !== 1073741824 && (t.flags |= 128, r = !0, ii(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = me(), t.sibling = null, n = le.current, ee(le, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
      case 22:
      case 23:
        return jc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ke & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, t.tag));
  }
  function US(e, t) {
    switch (cc(t), t.tag) {
      case 1:
        return He(t.type) && fs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return zr(), ie(Be), ie(Me), Sc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return vc(t), null;
      case 13:
        if (ie(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(_(340));
          $r();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ie(le), null;
      case 4:
        return zr(), null;
      case 10:
        return pc(t.type._context), null;
      case 22:
      case 23:
        return jc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var jo = !1, Fe = !1, BS = typeof WeakSet == "function" ? WeakSet : Set, F = null;
  function Pr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          de(e, t, r);
        }
      else
        n.current = null;
  }
  function lu(e, t, n) {
    try {
      n();
    } catch (r) {
      de(e, t, r);
    }
  }
  var Ld = !1;
  function HS(e, t) {
    if (Wl = as, e = Km(), lc(e)) {
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
    for (Kl = { focusedElem: e, selectionRange: n }, as = !1, F = t; F !== null; )
      if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, F = e;
      else
        for (; F !== null; ) {
          t = F;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var v = g.memoizedProps, T = g.memoizedState, p = t.stateNode, h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ht(t.type, v), T);
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
          } catch (S) {
            de(t, t.return, S);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, F = e;
            break;
          }
          F = t.return;
        }
    return g = Ld, Ld = !1, g;
  }
  function xi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && lu(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ys(e, t) {
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
  function uu(e) {
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
  function Uy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Uy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[Ii], delete t[Ql], delete t[kS], delete t[_S])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function By(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vd(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || By(e.return))
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
  function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cs));
    else if (r !== 4 && (e = e.child, e !== null))
      for (cu(e, t, n), e = e.sibling; e !== null; )
        cu(e, t, n), e = e.sibling;
  }
  function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (fu(e, t, n), e = e.sibling; e !== null; )
        fu(e, t, n), e = e.sibling;
  }
  var Ee = null, pt = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; )
      Hy(e, t, n), n = n.sibling;
  }
  function Hy(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(Is, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        Fe || Pr(n, t);
      case 6:
        var r = Ee, i = pt;
        Ee = null, qt(e, t, n), Ee = r, pt = i, Ee !== null && (pt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
        break;
      case 18:
        Ee !== null && (pt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? Ka(e.parentNode, n) : e.nodeType === 1 && Ka(e, n), Ni(e)) : Ka(Ee, n.stateNode));
        break;
      case 4:
        r = Ee, i = pt, Ee = n.stateNode.containerInfo, pt = !0, qt(e, t, n), Ee = r, pt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Fe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && lu(n, t, s), i = i.next;
          } while (i !== r);
        }
        qt(e, t, n);
        break;
      case 1:
        if (!Fe && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (a) {
            de(n, t, a);
          }
        qt(e, t, n);
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null, qt(e, t, n), Fe = r) : qt(e, t, n);
        break;
      default:
        qt(e, t, n);
    }
  }
  function $d(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new BS()), t.forEach(function(r) {
        var i = JS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function dt(e, t) {
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
                  Ee = a.stateNode, pt = !1;
                  break e;
                case 3:
                  Ee = a.stateNode.containerInfo, pt = !0;
                  break e;
                case 4:
                  Ee = a.stateNode.containerInfo, pt = !0;
                  break e;
              }
              a = a.return;
            }
          if (Ee === null)
            throw Error(_(160));
          Hy(o, s, i), Ee = null, pt = !1;
          var l = i.alternate;
          l !== null && (l.return = null), i.return = null;
        } catch (u) {
          de(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Wy(t, e), t = t.sibling;
  }
  function Wy(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dt(t, e), Tt(e), r & 4) {
          try {
            xi(3, e, e.return), Ys(3, e);
          } catch (v) {
            de(e, e.return, v);
          }
          try {
            xi(5, e, e.return);
          } catch (v) {
            de(e, e.return, v);
          }
        }
        break;
      case 1:
        dt(t, e), Tt(e), r & 512 && n !== null && Pr(n, n.return);
        break;
      case 5:
        if (dt(t, e), Tt(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            Fi(i, "");
          } catch (v) {
            de(e, e.return, v);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
          if (e.updateQueue = null, l !== null)
            try {
              a === "input" && o.type === "radio" && o.name != null && hm(i, o), Nl(a, s);
              var u = Nl(a, o);
              for (s = 0; s < l.length; s += 2) {
                var c = l[s], f = l[s + 1];
                c === "style" ? vm(i, f) : c === "dangerouslySetInnerHTML" ? ym(i, f) : c === "children" ? Fi(i, f) : Qu(i, c, f, u);
              }
              switch (a) {
                case "input":
                  jl(i, o);
                  break;
                case "textarea":
                  pm(i, o);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var y = o.value;
                  y != null ? Fr(i, !!o.multiple, y, !1) : d !== !!o.multiple && (o.defaultValue != null ? Fr(
                    i,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : Fr(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[Ii] = o;
            } catch (v) {
              de(e, e.return, v);
            }
        }
        break;
      case 6:
        if (dt(t, e), Tt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(_(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (v) {
            de(e, e.return, v);
          }
        }
        break;
      case 3:
        if (dt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Ni(t.containerInfo);
          } catch (v) {
            de(e, e.return, v);
          }
        break;
      case 4:
        dt(t, e), Tt(e);
        break;
      case 13:
        dt(t, e), Tt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ac = me())), r & 4 && $d(e);
        break;
      case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Fe = (u = Fe) || c, dt(t, e), Fe = u) : dt(t, e), Tt(e), r & 8192) {
          if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
            for (F = e, c = e.child; c !== null; ) {
              for (f = F = c; F !== null; ) {
                switch (d = F, y = d.child, d.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    xi(4, d, d.return);
                    break;
                  case 1:
                    Pr(d, d.return);
                    var g = d.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      r = d, n = d.return;
                      try {
                        t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                      } catch (v) {
                        de(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    Pr(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      zd(f);
                      continue;
                    }
                }
                y !== null ? (y.return = d, F = y) : zd(f);
              }
              c = c.sibling;
            }
          e:
            for (c = null, f = e; ; ) {
              if (f.tag === 5) {
                if (c === null) {
                  c = f;
                  try {
                    i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = gm("display", s));
                  } catch (v) {
                    de(e, e.return, v);
                  }
                }
              } else if (f.tag === 6) {
                if (c === null)
                  try {
                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                  } catch (v) {
                    de(e, e.return, v);
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
        dt(t, e), Tt(e), r & 4 && $d(e);
        break;
      case 21:
        break;
      default:
        dt(
          t,
          e
        ), Tt(e);
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (By(n)) {
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
            r.flags & 32 && (Fi(i, ""), r.flags &= -33);
            var o = Vd(e);
            fu(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, a = Vd(e);
            cu(e, a, s);
            break;
          default:
            throw Error(_(161));
        }
      } catch (l) {
        de(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function WS(e, t, n) {
    F = e, Ky(e);
  }
  function Ky(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
      var i = F, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || jo;
        if (!s) {
          var a = i.alternate, l = a !== null && a.memoizedState !== null || Fe;
          a = jo;
          var u = Fe;
          if (jo = s, (Fe = l) && !u)
            for (F = i; F !== null; )
              s = F, l = s.child, s.tag === 22 && s.memoizedState !== null ? Ud(i) : l !== null ? (l.return = s, F = l) : Ud(i);
          for (; o !== null; )
            F = o, Ky(o), o = o.sibling;
          F = i, jo = a, Fe = u;
        }
        Id(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, F = o) : Id(e);
    }
  }
  function Id(e) {
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
                Fe || Ys(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Fe)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && Pd(t, o, r);
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
                  Pd(t, s, n);
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
                      f !== null && Ni(f);
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
          Fe || t.flags & 512 && uu(t);
        } catch (d) {
          de(t, t.return, d);
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
  function zd(e) {
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
  function Ud(e) {
    for (; F !== null; ) {
      var t = F;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ys(4, t);
            } catch (l) {
              de(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                de(t, i, l);
              }
            }
            var o = t.return;
            try {
              uu(t);
            } catch (l) {
              de(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              uu(t);
            } catch (l) {
              de(t, s, l);
            }
        }
      } catch (l) {
        de(t, t.return, l);
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
  var KS = Math.ceil, xs = Qt.ReactCurrentDispatcher, kc = Qt.ReactCurrentOwner, lt = Qt.ReactCurrentBatchConfig, W = 0, xe = null, ye = null, ke = 0, Ke = 0, Cr = jn(0), ve = 0, Ki = null, Jn = 0, Qs = 0, _c = 0, Ti = null, Ie = null, Ac = 0, Br = 1 / 0, Mt = null, Ts = !1, du = null, gn = null, Fo = !1, un = null, Es = 0, Ei = 0, hu = null, Yo = -1, Qo = 0;
  function be() {
    return W & 6 ? me() : Yo !== -1 ? Yo : Yo = me();
  }
  function vn(e) {
    return e.mode & 1 ? W & 2 && ke !== 0 ? ke & -ke : OS.transition !== null ? (Qo === 0 && (Qo = jm()), Qo) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lm(e.type)), e) : 1;
  }
  function gt(e, t, n, r) {
    if (50 < Ei)
      throw Ei = 0, hu = null, Error(_(185));
    no(e, n, r), (!(W & 2) || e !== xe) && (e === xe && (!(W & 2) && (Qs |= n), ve === 4 && an(e, ke)), We(e, r), n === 1 && W === 0 && !(t.mode & 1) && (Br = me() + 500, Ws && Fn()));
  }
  function We(e, t) {
    var n = e.callbackNode;
    O1(e, t);
    var r = ss(e, e === xe ? ke : 0);
    if (r === 0)
      n !== null && Zf(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Zf(n), t === 1)
        e.tag === 0 ? AS(Bd.bind(null, e)) : ny(Bd.bind(null, e)), PS(function() {
          !(W & 6) && Fn();
        }), n = null;
      else {
        switch (Fm(r)) {
          case 1:
            n = ec;
            break;
          case 4:
            n = Am;
            break;
          case 16:
            n = os;
            break;
          case 536870912:
            n = Om;
            break;
          default:
            n = os;
        }
        n = eg(n, Gy.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Gy(e, t) {
    if (Yo = -1, Qo = 0, W & 6)
      throw Error(_(327));
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
      return null;
    var r = ss(e, e === xe ? ke : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = Ps(e, r);
    else {
      t = r;
      var i = W;
      W |= 2;
      var o = Qy();
      (xe !== e || ke !== t) && (Mt = null, Br = me() + 500, Kn(e, t));
      do
        try {
          QS();
          break;
        } catch (a) {
          Yy(e, a);
        }
      while (!0);
      hc(), xs.current = o, W = i, ye !== null ? t = 0 : (xe = null, ke = 0, t = ve);
    }
    if (t !== 0) {
      if (t === 2 && (i = Il(e), i !== 0 && (r = i, t = pu(e, i))), t === 1)
        throw n = Ki, Kn(e, 0), an(e, r), We(e, me()), n;
      if (t === 6)
        an(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !GS(i) && (t = Ps(e, r), t === 2 && (o = Il(e), o !== 0 && (r = o, t = pu(e, o))), t === 1))
          throw n = Ki, Kn(e, 0), an(e, r), We(e, me()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            Vn(e, Ie, Mt);
            break;
          case 3:
            if (an(e, r), (r & 130023424) === r && (t = Ac + 500 - me(), 10 < t)) {
              if (ss(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                be(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = Yl(Vn.bind(null, e, Ie, Mt), t);
              break;
            }
            Vn(e, Ie, Mt);
            break;
          case 4:
            if (an(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - yt(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * KS(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Yl(Vn.bind(null, e, Ie, Mt), r);
              break;
            }
            Vn(e, Ie, Mt);
            break;
          case 5:
            Vn(e, Ie, Mt);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return We(e, me()), e.callbackNode === n ? Gy.bind(null, e) : null;
  }
  function pu(e, t) {
    var n = Ti;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = Ps(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && mu(t)), e;
  }
  function mu(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e);
  }
  function GS(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], o = i.getSnapshot;
            i = i.value;
            try {
              if (!vt(o(), i))
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
    for (t &= ~_c, t &= ~Qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - yt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Bd(e) {
    if (W & 6)
      throw Error(_(327));
    br();
    var t = ss(e, 0);
    if (!(t & 1))
      return We(e, me()), null;
    var n = Ps(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Il(e);
      r !== 0 && (t = r, n = pu(e, r));
    }
    if (n === 1)
      throw n = Ki, Kn(e, 0), an(e, t), We(e, me()), n;
    if (n === 6)
      throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, Ie, Mt), We(e, me()), null;
  }
  function Oc(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      W = n, W === 0 && (Br = me() + 500, Ws && Fn());
    }
  }
  function er(e) {
    un !== null && un.tag === 0 && !(W & 6) && br();
    var t = W;
    W |= 1;
    var n = lt.transition, r = Q;
    try {
      if (lt.transition = null, Q = 1, e)
        return e();
    } finally {
      Q = r, lt.transition = n, W = t, !(W & 6) && Fn();
    }
  }
  function jc() {
    Ke = Cr.current, ie(Cr);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ES(n)), ye !== null)
      for (n = ye.return; n !== null; ) {
        var r = n;
        switch (cc(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && fs();
            break;
          case 3:
            zr(), ie(Be), ie(Me), Sc();
            break;
          case 5:
            vc(r);
            break;
          case 4:
            zr();
            break;
          case 13:
            ie(le);
            break;
          case 19:
            ie(le);
            break;
          case 10:
            pc(r.type._context);
            break;
          case 22:
          case 23:
            jc();
        }
        n = n.return;
      }
    if (xe = e, ye = e = Sn(e.current, null), ke = Ke = t, ve = 0, Ki = null, _c = Qs = Jn = 0, Ie = Ti = null, Bn !== null) {
      for (t = 0; t < Bn.length; t++)
        if (n = Bn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, o = n.pending;
          if (o !== null) {
            var s = o.next;
            o.next = i, r.next = s;
          }
          n.pending = r;
        }
      Bn = null;
    }
    return e;
  }
  function Yy(e, t) {
    do {
      var n = ye;
      try {
        if (hc(), Wo.current = ws, Ss) {
          for (var r = ce.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ss = !1;
        }
        if (qn = 0, we = ge = ce = null, wi = !1, Bi = 0, kc.current = null, n === null || n.return === null) {
          ve = 1, Ki = t, ye = null;
          break;
        }
        e: {
          var o = e, s = n.return, a = n, l = t;
          if (t = ke, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            var u = l, c = a, f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
            }
            var y = jd(s);
            if (y !== null) {
              y.flags &= -257, Fd(y, s, a, o, t), y.mode & 1 && Od(o, u, t), t = y, l = u;
              var g = t.updateQueue;
              if (g === null) {
                var v = /* @__PURE__ */ new Set();
                v.add(l), t.updateQueue = v;
              } else
                g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Od(o, u, t), Fc();
                break e;
              }
              l = Error(_(426));
            }
          } else if (ae && a.mode & 1) {
            var T = jd(s);
            if (T !== null) {
              !(T.flags & 65536) && (T.flags |= 256), Fd(T, s, a, o, t), fc(Ur(l, a));
              break e;
            }
          }
          o = l = Ur(l, a), ve !== 4 && (ve = 2), Ti === null ? Ti = [o] : Ti.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = Fy(o, l, t);
                Ed(o, p);
                break e;
              case 1:
                a = l;
                var h = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (gn === null || !gn.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var S = Ry(o, a, t);
                  Ed(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Zy(n);
      } catch (P) {
        t = P, ye === n && n !== null && (ye = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qy() {
    var e = xs.current;
    return xs.current = ws, e === null ? ws : e;
  }
  function Fc() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4), xe === null || !(Jn & 268435455) && !(Qs & 268435455) || an(xe, ke);
  }
  function Ps(e, t) {
    var n = W;
    W |= 2;
    var r = Qy();
    (xe !== e || ke !== t) && (Mt = null, Kn(e, t));
    do
      try {
        YS();
        break;
      } catch (i) {
        Yy(e, i);
      }
    while (!0);
    if (hc(), W = n, xs.current = r, ye !== null)
      throw Error(_(261));
    return xe = null, ke = 0, ve;
  }
  function YS() {
    for (; ye !== null; )
      Xy(ye);
  }
  function QS() {
    for (; ye !== null && !w1(); )
      Xy(ye);
  }
  function Xy(e) {
    var t = Jy(e.alternate, e, Ke);
    e.memoizedProps = e.pendingProps, t === null ? Zy(e) : ye = t, kc.current = null;
  }
  function Zy(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = US(n, t), n !== null) {
          n.flags &= 32767, ye = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ve = 6, ye = null;
          return;
        }
      } else if (n = zS(n, t, Ke), n !== null) {
        ye = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ye = t;
        return;
      }
      ye = t = e;
    } while (t !== null);
    ve === 0 && (ve = 5);
  }
  function Vn(e, t, n) {
    var r = Q, i = lt.transition;
    try {
      lt.transition = null, Q = 1, XS(e, t, n, r);
    } finally {
      lt.transition = i, Q = r;
    }
    return null;
  }
  function XS(e, t, n, r) {
    do
      br();
    while (un !== null);
    if (W & 6)
      throw Error(_(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (j1(e, o), e === xe && (ye = xe = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Fo || (Fo = !0, eg(os, function() {
      return br(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = lt.transition, lt.transition = null;
      var s = Q;
      Q = 1;
      var a = W;
      W |= 4, kc.current = null, HS(e, n), Wy(n, e), yS(Kl), as = !!Wl, Kl = Wl = null, e.current = n, WS(n), x1(), W = a, Q = s, lt.transition = o;
    } else
      e.current = n;
    if (Fo && (Fo = !1, un = e, Es = i), o = e.pendingLanes, o === 0 && (gn = null), P1(n.stateNode), We(e, me()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Ts)
      throw Ts = !1, e = du, du = null, e;
    return Es & 1 && e.tag !== 0 && br(), o = e.pendingLanes, o & 1 ? e === hu ? Ei++ : (Ei = 0, hu = e) : Ei = 0, Fn(), null;
  }
  function br() {
    if (un !== null) {
      var e = Fm(Es), t = lt.transition, n = Q;
      try {
        if (lt.transition = null, Q = 16 > e ? 16 : e, un === null)
          var r = !1;
        else {
          if (e = un, un = null, Es = 0, W & 6)
            throw Error(_(331));
          var i = W;
          for (W |= 4, F = e.current; F !== null; ) {
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
                        xi(8, c, o);
                    }
                    var f = c.child;
                    if (f !== null)
                      f.return = c, F = f;
                    else
                      for (; F !== null; ) {
                        c = F;
                        var d = c.sibling, y = c.return;
                        if (Uy(c), c === u) {
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
                var g = o.alternate;
                if (g !== null) {
                  var v = g.child;
                  if (v !== null) {
                    g.child = null;
                    do {
                      var T = v.sibling;
                      v.sibling = null, v = T;
                    } while (v !== null);
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
                        xi(9, o, o.return);
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
                          Ys(9, a);
                      }
                    } catch (P) {
                      de(a, a.return, P);
                    }
                  if (a === s) {
                    F = null;
                    break e;
                  }
                  var S = a.sibling;
                  if (S !== null) {
                    S.return = a.return, F = S;
                    break e;
                  }
                  F = a.return;
                }
          }
          if (W = i, Fn(), kt && typeof kt.onPostCommitFiberRoot == "function")
            try {
              kt.onPostCommitFiberRoot(Is, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        Q = n, lt.transition = t;
      }
    }
    return !1;
  }
  function Hd(e, t, n) {
    t = Ur(n, t), t = Fy(e, t, 1), e = yn(e, t, 1), t = be(), e !== null && (no(e, 1, t), We(e, t));
  }
  function de(e, t, n) {
    if (e.tag === 3)
      Hd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gn === null || !gn.has(r))) {
            e = Ur(n, e), e = Ry(t, e, 1), t = yn(t, e, 1), e = be(), t !== null && (no(t, 1, e), We(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function ZS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (ke & n) === n && (ve === 4 || ve === 3 && (ke & 130023424) === ke && 500 > me() - Ac ? Kn(e, 0) : _c |= n), We(e, t);
  }
  function qy(e, t) {
    t === 0 && (e.mode & 1 ? (t = xo, xo <<= 1, !(xo & 130023424) && (xo = 4194304)) : t = 1);
    var n = be();
    e = Gt(e, t), e !== null && (no(e, t, n), We(e, n));
  }
  function qS(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qy(e, n);
  }
  function JS(e, t) {
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
    r !== null && r.delete(t), qy(e, n);
  }
  var Jy;
  Jy = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Be.current)
        Ue = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ue = !1, IS(e, t, n);
        Ue = !!(e.flags & 131072);
      }
    else
      Ue = !1, ae && t.flags & 1048576 && ry(t, ps, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Go(e, t), e = t.pendingProps;
        var i = Vr(t, Me.current);
        Nr(t, n), i = xc(null, t, r, e, i, n);
        var o = Tc();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (o = !0, ds(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, yc(t), i.updater = Gs, t.stateNode = i, i._reactInternals = t, tu(t, r, e, n), t = iu(null, t, r, !0, o, n)) : (t.tag = 0, ae && o && uc(t), Ne(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Go(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = tw(r), e = ht(r, e), i) {
            case 0:
              t = ru(null, t, r, e, n);
              break e;
            case 1:
              t = Md(null, t, r, e, n);
              break e;
            case 11:
              t = Rd(null, t, r, e, n);
              break e;
            case 14:
              t = Dd(null, t, r, ht(r.type, e), n);
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
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), ru(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), Md(e, t, r, i, n);
      case 3:
        e: {
          if (by(t), e === null)
            throw Error(_(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, uy(e, t), gs(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
              i = Ur(Error(_(423)), t), t = Nd(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = Ur(Error(_(424)), t), t = Nd(e, t, r, n, i);
              break e;
            } else
              for (Ge = mn(t.stateNode.containerInfo.firstChild), Xe = t, ae = !0, mt = null, n = ay(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if ($r(), r === i) {
              t = Yt(e, t, n);
              break e;
            }
            Ne(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return cy(t), e === null && ql(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Gl(r, i) ? s = null : o !== null && Gl(r, o) && (t.flags |= 32), Ny(e, t), Ne(e, t, s, n), t.child;
      case 6:
        return e === null && ql(t), null;
      case 13:
        return Ly(e, t, n);
      case 4:
        return gc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ir(t, null, r, n) : Ne(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), Rd(e, t, r, i, n);
      case 7:
        return Ne(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, ee(ms, r._currentValue), r._currentValue = s, o !== null)
            if (vt(o.value, s)) {
              if (o.children === i.children && !Be.current) {
                t = Yt(e, t, n);
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
                        l = zt(-1, n & -n), l.tag = 2;
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                        }
                      }
                      o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Jl(
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
                  s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Jl(s, n, t), s = o.sibling;
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
          Ne(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, Nr(t, n), i = ut(i), r = r(i), t.flags |= 1, Ne(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = ht(r, t.pendingProps), i = ht(r.type, i), Dd(e, t, r, i, n);
      case 15:
        return Dy(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ht(r, i), Go(e, t), t.tag = 1, He(r) ? (e = !0, ds(t)) : e = !1, Nr(t, n), jy(t, r, i), tu(t, r, i, n), iu(null, t, r, !0, e, n);
      case 19:
        return Vy(e, t, n);
      case 22:
        return My(e, t, n);
    }
    throw Error(_(156, t.tag));
  };
  function eg(e, t) {
    return _m(e, t);
  }
  function ew(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function at(e, t, n, r) {
    return new ew(e, t, n, r);
  }
  function Rc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function tw(e) {
    if (typeof e == "function")
      return Rc(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Zu)
        return 11;
      if (e === qu)
        return 14;
    }
    return 2;
  }
  function Sn(e, t) {
    var n = e.alternate;
    return n === null ? (n = at(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Xo(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function")
      Rc(e) && (s = 1);
    else if (typeof e == "string")
      s = 5;
    else
      e:
        switch (e) {
          case mr:
            return Gn(n.children, i, o, t);
          case Xu:
            s = 8, i |= 8;
            break;
          case Cl:
            return e = at(12, n, t, i | 2), e.elementType = Cl, e.lanes = o, e;
          case kl:
            return e = at(13, n, t, i), e.elementType = kl, e.lanes = o, e;
          case _l:
            return e = at(19, n, t, i), e.elementType = _l, e.lanes = o, e;
          case cm:
            return Xs(n, i, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case lm:
                  s = 10;
                  break e;
                case um:
                  s = 9;
                  break e;
                case Zu:
                  s = 11;
                  break e;
                case qu:
                  s = 14;
                  break e;
                case tn:
                  s = 16, r = null;
                  break e;
              }
            throw Error(_(130, e == null ? e : typeof e, ""));
        }
    return t = at(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Gn(e, t, n, r) {
    return e = at(7, e, r, t), e.lanes = n, e;
  }
  function Xs(e, t, n, r) {
    return e = at(22, e, r, t), e.elementType = cm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function el(e, t, n) {
    return e = at(6, e, null, t), e.lanes = n, e;
  }
  function tl(e, t, n) {
    return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function nw(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Na(0), this.expirationTimes = Na(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Na(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Dc(e, t, n, r, i, o, s, a, l) {
    return e = new nw(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = at(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yc(o), e;
  }
  function rw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: pr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function tg(e) {
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
        return ty(e, n, t);
    }
    return t;
  }
  function ng(e, t, n, r, i, o, s, a, l) {
    return e = Dc(n, r, !0, e, i, o, s, a, l), e.context = tg(null), n = e.current, r = be(), i = vn(n), o = zt(r, i), o.callback = t ?? null, yn(n, o, i), e.current.lanes = i, no(e, i, r), We(e, r), e;
  }
  function Zs(e, t, n, r) {
    var i = t.current, o = be(), s = vn(i);
    return n = tg(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yn(i, t, s), e !== null && (gt(e, i, s, o), Ho(e, i, s)), s;
  }
  function Cs(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Wd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Mc(e, t) {
    Wd(e, t), (e = e.alternate) && Wd(e, t);
  }
  function iw() {
    return null;
  }
  var rg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Nc(e) {
    this._internalRoot = e;
  }
  qs.prototype.render = Nc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(_(409));
    Zs(e, t, null, null);
  };
  qs.prototype.unmount = Nc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      er(function() {
        Zs(null, e, null, null);
      }), t[Kt] = null;
    }
  };
  function qs(e) {
    this._internalRoot = e;
  }
  qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Mm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++)
        ;
      sn.splice(n, 0, e), n === 0 && bm(e);
    }
  };
  function bc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Js(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Kd() {
  }
  function ow(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var u = Cs(s);
          o.call(u);
        };
      }
      var s = ng(t, r, e, 0, null, !1, !1, "", Kd);
      return e._reactRootContainer = s, e[Kt] = s.current, Vi(e.nodeType === 8 ? e.parentNode : e), er(), s;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var u = Cs(l);
        a.call(u);
      };
    }
    var l = Dc(e, 0, !1, null, null, !1, !1, "", Kd);
    return e._reactRootContainer = l, e[Kt] = l.current, Vi(e.nodeType === 8 ? e.parentNode : e), er(function() {
      Zs(t, l, n, r);
    }), l;
  }
  function ea(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function() {
          var l = Cs(s);
          a.call(l);
        };
      }
      Zs(t, s, e, i);
    } else
      s = ow(n, t, e, i, r);
    return Cs(s);
  }
  Rm = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = fi(t.pendingLanes);
          n !== 0 && (tc(t, n | 1), We(t, me()), !(W & 6) && (Br = me() + 500, Fn()));
        }
        break;
      case 13:
        er(function() {
          var r = Gt(e, 1);
          if (r !== null) {
            var i = be();
            gt(r, e, 1, i);
          }
        }), Mc(e, 1);
    }
  };
  nc = function(e) {
    if (e.tag === 13) {
      var t = Gt(e, 134217728);
      if (t !== null) {
        var n = be();
        gt(t, e, 134217728, n);
      }
      Mc(e, 134217728);
    }
  };
  Dm = function(e) {
    if (e.tag === 13) {
      var t = vn(e), n = Gt(e, t);
      if (n !== null) {
        var r = be();
        gt(n, e, t, r);
      }
      Mc(e, t);
    }
  };
  Mm = function() {
    return Q;
  };
  Nm = function(e, t) {
    var n = Q;
    try {
      return Q = e, t();
    } finally {
      Q = n;
    }
  };
  Ll = function(e, t, n) {
    switch (t) {
      case "input":
        if (jl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Hs(r);
              if (!i)
                throw Error(_(90));
              dm(r), jl(r, i);
            }
          }
        }
        break;
      case "textarea":
        pm(e, n);
        break;
      case "select":
        t = n.value, t != null && Fr(e, !!n.multiple, t, !1);
    }
  };
  xm = Oc;
  Tm = er;
  var sw = { usingClientEntryPoint: !1, Events: [io, Sr, Hs, Sm, wm, Oc] }, oi = { findFiberByHostInstance: Un, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, aw = { bundleType: oi.bundleType, version: oi.version, rendererPackageName: oi.rendererPackageName, rendererConfig: oi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Cm(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: oi.findFiberByHostInstance || iw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ro.isDisabled && Ro.supportsFiber)
      try {
        Is = Ro.inject(aw), kt = Ro;
      } catch {
      }
  }
  Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sw;
  Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bc(t))
      throw Error(_(200));
    return rw(e, t, null, n);
  };
  Je.createRoot = function(e, t) {
    if (!bc(e))
      throw Error(_(299));
    var n = !1, r = "", i = rg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Dc(e, 1, !1, null, null, n, !1, r, i), e[Kt] = t.current, Vi(e.nodeType === 8 ? e.parentNode : e), new Nc(t);
  };
  Je.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = Cm(t), e = e === null ? null : e.stateNode, e;
  };
  Je.flushSync = function(e) {
    return er(e);
  };
  Je.hydrate = function(e, t, n) {
    if (!Js(t))
      throw Error(_(200));
    return ea(null, e, t, !0, n);
  };
  Je.hydrateRoot = function(e, t, n) {
    if (!bc(e))
      throw Error(_(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = rg;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ng(t, null, e, 1, n ?? null, i, !1, o, s), e[Kt] = t.current, Vi(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new qs(t);
  };
  Je.render = function(e, t, n) {
    if (!Js(t))
      throw Error(_(200));
    return ea(null, e, t, !1, n);
  };
  Je.unmountComponentAtNode = function(e) {
    if (!Js(e))
      throw Error(_(40));
    return e._reactRootContainer ? (er(function() {
      ea(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Kt] = null;
      });
    }), !0) : !1;
  };
  Je.unstable_batchedUpdates = Oc;
  Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Js(n))
      throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(_(38));
    return ea(e, t, n, !1, r);
  };
  Je.version = "18.3.1-next-f1338f8080-20240426";
  function ig() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig);
      } catch (e) {
        console.error(e);
      }
  }
  ig(), im.exports = Je;
  var lw = im.exports, Gd = lw;
  El.createRoot = Gd.createRoot, El.hydrateRoot = Gd.hydrateRoot;
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
  var uw = /[^.^\]^[]+|(?=\[\]|\.\.)/g, og = /^\d+$/, cw = /^\d/, fw = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, dw = /^\s*(['"]?)(.*?)(\1)\s*$/, Lc = 512, Yd = new or(Lc), Qd = new or(Lc), Xd = new or(Lc), Yn = {
    Cache: or,
    split: yu,
    normalizePath: nl,
    setter: function(e) {
      var t = nl(e);
      return Qd.get(e) || Qd.set(e, function(r, i) {
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
      var n = nl(e);
      return Xd.get(e) || Xd.set(e, function(i) {
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
        return t + (Vc(n) || og.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function(e, t, n) {
      hw(Array.isArray(e) ? e : yu(e), t, n);
    }
  };
  function nl(e) {
    return Yd.get(e) || Yd.set(
      e,
      yu(e).map(function(t) {
        return t.replace(dw, "$2");
      })
    );
  }
  function yu(e) {
    return e.match(uw) || [""];
  }
  function hw(e, t, n) {
    var r = e.length, i, o, s, a;
    for (o = 0; o < r; o++)
      i = e[o], i && (yw(i) && (i = '"' + i + '"'), a = Vc(i), s = !a && /^\d+$/.test(i), t.call(n, i, a, s, o, e));
  }
  function Vc(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function pw(e) {
    return e.match(cw) && !e.match(og);
  }
  function mw(e) {
    return fw.test(e);
  }
  function yw(e) {
    return !Vc(e) && (pw(e) || mw(e));
  }
  const gw = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, ta = (e) => e.match(gw) || [], na = (e) => e[0].toUpperCase() + e.slice(1), $c = (e, t) => ta(e).join(t).toLowerCase(), sg = (e) => ta(e).reduce(
    (t, n) => `${t}${t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()}`,
    ""
  ), vw = (e) => na(sg(e)), Sw = (e) => $c(e, "_"), ww = (e) => $c(e, "-"), xw = (e) => na($c(e, " ")), Tw = (e) => ta(e).map(na).join(" ");
  var rl = {
    words: ta,
    upperFirst: na,
    camelCase: sg,
    pascalCase: vw,
    snakeCase: Sw,
    kebabCase: ww,
    sentenceCase: xw,
    titleCase: Tw
  }, Ic = { exports: {} };
  Ic.exports = function(e) {
    return ag(Ew(e), e);
  };
  Ic.exports.array = ag;
  function ag(e, t) {
    var n = e.length, r = new Array(n), i = {}, o = n, s = Pw(t), a = Cw(e);
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
            var g = y[--c];
            l(g, a.get(g), f);
          } while (c);
          f.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function Ew(e) {
    for (var t = /* @__PURE__ */ new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function Pw(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], /* @__PURE__ */ new Set()), t.has(i[1]) || t.set(i[1], /* @__PURE__ */ new Set()), t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function Cw(e) {
    for (var t = /* @__PURE__ */ new Map(), n = 0, r = e.length; n < r; n++)
      t.set(e[n], n);
    return t;
  }
  var kw = Ic.exports;
  const _w = /* @__PURE__ */ Vs(kw), Aw = Object.prototype.toString, Ow = Error.prototype.toString, jw = RegExp.prototype.toString, Fw = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Rw = /^Symbol\((.*)\)(.*)$/;
  function Dw(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function Zd(e, t = !1) {
    if (e == null || e === !0 || e === !1)
      return "" + e;
    const n = typeof e;
    if (n === "number")
      return Dw(e);
    if (n === "string")
      return t ? `"${e}"` : e;
    if (n === "function")
      return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol")
      return Fw.call(e).replace(Rw, "Symbol($1)");
    const r = Aw.call(e).slice(8, -1);
    return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + Ow.call(e) + "]" : r === "RegExp" ? jw.call(e) : null;
  }
  function wn(e, t) {
    let n = Zd(e, t);
    return n !== null ? n : JSON.stringify(e, function(r, i) {
      let o = Zd(this[r], t);
      return o !== null ? o : i;
    }, 2);
  }
  function lg(e) {
    return e == null ? [] : [].concat(e);
  }
  let ug, cg, fg, Mw = /\$\{\s*(\w+)\s*\}/g;
  ug = Symbol.toStringTag;
  class qd {
    constructor(t, n, r, i) {
      this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[ug] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], lg(t).forEach((o) => {
        if (ze.isError(o)) {
          this.errors.push(...o.errors);
          const s = o.inner.length ? o.inner : [o];
          this.inner.push(...s);
        } else
          this.errors.push(o);
      }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    }
  }
  cg = Symbol.hasInstance;
  fg = Symbol.toStringTag;
  class ze extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return r !== n.path && (n = Object.assign({}, n, {
        path: r
      })), typeof t == "string" ? t.replace(Mw, (i, o) => wn(n[o])) : typeof t == "function" ? t(n) : t;
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i, o) {
      const s = new qd(t, n, r, i);
      if (o)
        return s;
      super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[fg] = "Error", this.name = s.name, this.message = s.message, this.type = s.type, this.value = s.value, this.path = s.path, this.errors = s.errors, this.inner = s.inner, Error.captureStackTrace && Error.captureStackTrace(this, ze);
    }
    static [cg](t) {
      return qd[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
    }
  }
  let Pt = {
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
      const i = r != null && r !== n ? ` (cast from the value \`${wn(r, !0)}\`).` : ".";
      return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${wn(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${wn(n, !0)}\`` + i;
    }
  }, $e = {
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
  }, Jt = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
  }, gu = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
  }, Nw = {
    isValue: "${path} field must be ${value}"
  }, vu = {
    noUnknown: "${path} field has unspecified keys: ${unknown}"
  }, bw = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
  }, Lw = {
    notType: (e) => {
      const {
        path: t,
        value: n,
        spec: r
      } = e, i = r.types.length;
      if (Array.isArray(n)) {
        if (n.length < i)
          return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${wn(n, !0)}\``;
        if (n.length > i)
          return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${wn(n, !0)}\``;
      }
      return ze.formatError(Pt.notType, e);
    }
  };
  Object.assign(/* @__PURE__ */ Object.create(null), {
    mixed: Pt,
    string: $e,
    number: Jt,
    date: gu,
    object: vu,
    array: bw,
    boolean: Nw,
    tuple: Lw
  });
  const zc = (e) => e && e.__isYupSchema__;
  class ks {
    static fromOptions(t, n) {
      if (!n.then && !n.otherwise)
        throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
      let {
        is: r,
        then: i,
        otherwise: o
      } = n, s = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
      return new ks(t, (a, l) => {
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
      if (!zc(i))
        throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const Do = {
    context: "$",
    value: "."
  };
  class sr {
    constructor(t, n = {}) {
      if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string")
        throw new TypeError("ref must be a string, got: " + t);
      if (this.key = t.trim(), t === "")
        throw new TypeError("ref must be a non-empty string");
      this.isContext = this.key[0] === Do.context, this.isValue = this.key[0] === Do.value, this.isSibling = !this.isContext && !this.isValue;
      let r = this.isContext ? Do.context : this.isValue ? Do.value : "";
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
  const $t = (e) => e == null;
  function hr(e) {
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
        parent: g,
        context: v,
        abortEarly: T = s.spec.abortEarly,
        disableStackTrace: p = s.spec.disableStackTrace
      } = i;
      function h(z) {
        return sr.isRef(z) ? z.getValue(n, g, v) : z;
      }
      function m(z = {}) {
        const he = Object.assign({
          value: n,
          originalValue: o,
          label: s.spec.label,
          path: z.path || r,
          spec: s.spec,
          disableStackTrace: z.disableStackTrace || p
        }, f, z.params);
        for (const D of Object.keys(he))
          he[D] = h(he[D]);
        const oe = new ze(ze.formatError(z.message || d, he), n, he.path, z.type || u, he.disableStackTrace);
        return oe.params = he, oe;
      }
      const S = T ? a : l;
      let P = {
        path: r,
        parent: g,
        type: u,
        from: i.from,
        createError: m,
        resolve: h,
        options: i,
        originalValue: o,
        schema: s
      };
      const E = (z) => {
        ze.isError(z) ? S(z) : z ? l(null) : S(m());
      }, C = (z) => {
        ze.isError(z) ? S(z) : a(z);
      };
      if (y && $t(n))
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
  function Vw(e, t, n, r = n) {
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
  class _s extends Set {
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
      return new _s(this.values());
    }
    merge(t, n) {
      const r = this.clone();
      return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
    }
  }
  function kr(e, t = /* @__PURE__ */ new Map()) {
    if (zc(e) || !e || typeof e != "object")
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
        n[r] = kr(e[r], t);
    } else if (e instanceof Map) {
      n = /* @__PURE__ */ new Map(), t.set(e, n);
      for (const [r, i] of e.entries())
        n.set(r, kr(i, t));
    } else if (e instanceof Set) {
      n = /* @__PURE__ */ new Set(), t.set(e, n);
      for (const r of e)
        n.add(kr(r, t));
    } else if (e instanceof Object) {
      n = {}, t.set(e, n);
      for (const [r, i] of Object.entries(e))
        n[r] = kr(i, t);
    } else
      throw Error(`Unable to clone ${e}`);
    return n;
  }
  class St {
    constructor(t) {
      this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new _s(), this._blacklist = new _s(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
        this.typeError(Pt.notType);
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
      return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = kr(Object.assign({}, this.spec, t)), n;
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
        if (i && $t(o))
          return o;
        let s = wn(t), a = wn(o);
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
      } = t, c = (v) => {
        i || (i = !0, n(v, s));
      }, f = (v) => {
        i || (i = !0, r(v, s));
      }, d = o.length, y = [];
      if (!d)
        return f([]);
      let g = {
        value: s,
        originalValue: a,
        path: l,
        options: u,
        schema: this
      };
      for (let v = 0; v < o.length; v++) {
        const T = o[v];
        T(g, c, function(h) {
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
        ze.isError(l) && (l.value = u), a(l);
      }, (l, u) => {
        l.length ? a(new ze(l, u, void 0, void 0, o)) : s(u);
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
        throw ze.isError(a) && (a.value = l), a;
      }, (a, l) => {
        if (a.length)
          throw new ze(a, t, void 0, void 0, s);
        o = l;
      }), o;
    }
    isValid(t, n) {
      return this.validate(t, n).then(() => !0, (r) => {
        if (ze.isError(r))
          return !1;
        throw r;
      });
    }
    isValidSync(t, n) {
      try {
        return this.validateSync(t, n), !0;
      } catch (r) {
        if (ze.isError(r))
          return !1;
        throw r;
      }
    }
    _getDefault(t) {
      let n = this.spec.default;
      return n == null ? n : typeof n == "function" ? n.call(this, t) : kr(n);
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
      return r.internalTests.nullable = hr({
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
      return r.internalTests.optionality = hr({
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
    defined(t = Pt.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = Pt.notNull) {
      return this.nullability(!1, t);
    }
    required(t = Pt.required) {
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
      }, n.message === void 0 && (n.message = Pt.default), typeof n.test != "function")
        throw new TypeError("`test` is a required parameters");
      let r = this.clone(), i = hr(n), o = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
      if (n.exclusive && !n.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
      return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((s) => !(s.OPTIONS.name === n.name && (o || s.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
      let r = this.clone(), i = lg(t).map((o) => new sr(o));
      return i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }), r.conditions.push(typeof n == "function" ? new ks(i, n) : ks.fromOptions(i, n)), r;
    }
    typeError(t) {
      let n = this.clone();
      return n.internalTests.typeError = hr({
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
    oneOf(t, n = Pt.oneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._whitelist.add(i), r._blacklist.delete(i);
      }), r.internalTests.whiteList = hr({
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
    notOneOf(t, n = Pt.notOneOf) {
      let r = this.clone();
      return t.forEach((i) => {
        r._blacklist.add(i), r._whitelist.delete(i);
      }), r.internalTests.blacklist = hr({
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
      } = Vw(this, t, n, r.context);
      return s[e](i && i[o], Object.assign({}, r, {
        parent: i,
        path: t
      }));
    };
  for (const e of ["equals", "is"])
    St.prototype[e] = St.prototype.oneOf;
  for (const e of ["not", "nope"])
    St.prototype[e] = St.prototype.notOneOf;
  const $w = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function Iw(e) {
    const t = Su(e);
    if (!t)
      return Date.parse ? Date.parse(e) : Number.NaN;
    if (t.z === void 0 && t.plusMinus === void 0)
      return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
    let n = 0;
    return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
  }
  function Su(e) {
    var t, n;
    const r = $w.exec(e);
    return r ? {
      year: Dt(r[1]),
      month: Dt(r[2], 1) - 1,
      day: Dt(r[3], 1),
      hour: Dt(r[4]),
      minute: Dt(r[5]),
      second: Dt(r[6]),
      millisecond: r[7] ? (
        // allow arbitrary sub-second precision beyond milliseconds
        Dt(r[7].substring(0, 3))
      ) : 0,
      precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
      z: r[8] || void 0,
      plusMinus: r[9] || void 0,
      hourOffset: Dt(r[10]),
      minuteOffset: Dt(r[11])
    } : null;
  }
  function Dt(e, t = 0) {
    return Number(e) || t;
  }
  let zw = (
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ), Uw = (
    // eslint-disable-next-line
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  ), Bw = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Hw = "^\\d{4}-\\d{2}-\\d{2}", Ww = "\\d{2}:\\d{2}:\\d{2}", Kw = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Gw = new RegExp(`${Hw}T${Ww}(\\.\\d+)?${Kw}$`), Yw = (e) => $t(e) || e === e.trim(), Qw = {}.toString();
  function Zo() {
    return new dg();
  }
  class dg extends St {
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
          return i === Qw ? t : i;
        });
      });
    }
    required(t) {
      return super.required(t).withMutation((n) => n.test({
        message: t || Pt.required,
        name: "required",
        skipAbsent: !0,
        test: (r) => !!r.length
      }));
    }
    notRequired() {
      return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
    }
    length(t, n = $e.length) {
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
    min(t, n = $e.min) {
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
    max(t, n = $e.max) {
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
        message: i || $e.matches,
        params: {
          regex: t
        },
        skipAbsent: !0,
        test: (s) => s === "" && r || s.search(t) !== -1
      });
    }
    email(t = $e.email) {
      return this.matches(zw, {
        name: "email",
        message: t,
        excludeEmptyString: !0
      });
    }
    url(t = $e.url) {
      return this.matches(Uw, {
        name: "url",
        message: t,
        excludeEmptyString: !0
      });
    }
    uuid(t = $e.uuid) {
      return this.matches(Bw, {
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
      } = t : n = t), this.matches(Gw, {
        name: "datetime",
        message: n || $e.datetime,
        excludeEmptyString: !0
      }).test({
        name: "datetime_offset",
        message: n || $e.datetime_offset,
        params: {
          allowOffset: r
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || r)
            return !0;
          const s = Su(o);
          return s ? !!s.z : !1;
        }
      }).test({
        name: "datetime_precision",
        message: n || $e.datetime_precision,
        params: {
          precision: i
        },
        skipAbsent: !0,
        test: (o) => {
          if (!o || i == null)
            return !0;
          const s = Su(o);
          return s ? s.precision === i : !1;
        }
      });
    }
    //-- transforms --
    ensure() {
      return this.default("").transform((t) => t === null ? "" : t);
    }
    trim(t = $e.trim) {
      return this.transform((n) => n != null ? n.trim() : n).test({
        message: t,
        name: "trim",
        test: Yw
      });
    }
    lowercase(t = $e.lowercase) {
      return this.transform((n) => $t(n) ? n : n.toLowerCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => $t(n) || n === n.toLowerCase()
      });
    }
    uppercase(t = $e.uppercase) {
      return this.transform((n) => $t(n) ? n : n.toUpperCase()).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => $t(n) || n === n.toUpperCase()
      });
    }
  }
  Zo.prototype = dg.prototype;
  let Xw = (e) => e != +e;
  function hg() {
    return new pg();
  }
  class pg extends St {
    constructor() {
      super({
        type: "number",
        check(t) {
          return t instanceof Number && (t = t.valueOf()), typeof t == "number" && !Xw(t);
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => {
          if (!r.spec.coerce)
            return t;
          let i = t;
          if (typeof i == "string") {
            if (i = i.replace(/\s/g, ""), i === "")
              return NaN;
            i = +i;
          }
          return r.isType(i) || i === null ? i : parseFloat(i);
        });
      });
    }
    min(t, n = Jt.min) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          min: t
        },
        skipAbsent: !0,
        test(r) {
          return r >= this.resolve(t);
        }
      });
    }
    max(t, n = Jt.max) {
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: {
          max: t
        },
        skipAbsent: !0,
        test(r) {
          return r <= this.resolve(t);
        }
      });
    }
    lessThan(t, n = Jt.lessThan) {
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: {
          less: t
        },
        skipAbsent: !0,
        test(r) {
          return r < this.resolve(t);
        }
      });
    }
    moreThan(t, n = Jt.moreThan) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: {
          more: t
        },
        skipAbsent: !0,
        test(r) {
          return r > this.resolve(t);
        }
      });
    }
    positive(t = Jt.positive) {
      return this.moreThan(0, t);
    }
    negative(t = Jt.negative) {
      return this.lessThan(0, t);
    }
    integer(t = Jt.integer) {
      return this.test({
        name: "integer",
        message: t,
        skipAbsent: !0,
        test: (n) => Number.isInteger(n)
      });
    }
    truncate() {
      return this.transform((t) => $t(t) ? t : t | 0);
    }
    round(t) {
      var n;
      let r = ["ceil", "floor", "round", "trunc"];
      if (t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round", t === "trunc")
        return this.truncate();
      if (r.indexOf(t.toLowerCase()) === -1)
        throw new TypeError("Only valid options for round() are: " + r.join(", "));
      return this.transform((i) => $t(i) ? i : Math[t](i));
    }
  }
  hg.prototype = pg.prototype;
  let Zw = /* @__PURE__ */ new Date(""), qw = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class ra extends St {
    constructor() {
      super({
        type: "date",
        check(t) {
          return qw(t) && !isNaN(t.getTime());
        }
      }), this.withMutation(() => {
        this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = Iw(t), isNaN(t) ? ra.INVALID_DATE : new Date(t)));
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
    min(t, n = gu.min) {
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
    max(t, n = gu.max) {
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
  ra.INVALID_DATE = Zw;
  ra.prototype;
  function Jw(e, t = []) {
    let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([s, a]) => `${s}-${a}`));
    function o(s, a) {
      let l = Yn.split(s)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const s of Object.keys(e)) {
      let a = e[s];
      r.add(s), sr.isRef(a) && a.isSibling ? o(a.path, s) : zc(a) && "deps" in a && a.deps.forEach((l) => o(l, s));
    }
    return _w.array(Array.from(r), n).reverse();
  }
  function Jd(e, t) {
    let n = 1 / 0;
    return e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r))
        return n = i, !0;
    }), n;
  }
  function mg(e) {
    return (t, n) => Jd(e, t) - Jd(e, n);
  }
  const ex = (e, t, n) => {
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
  const tx = (e, t) => {
    const n = [...Yn.normalizePath(t)];
    if (n.length === 1)
      return n[0] in e;
    let r = n.pop(), i = Yn.getter(Yn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let eh = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function nx(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const rx = mg([]);
  function yg(e) {
    return new gg(e);
  }
  class gg extends St {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return eh(n) || typeof n == "function";
        }
      }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = rx, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
          let g, v = i[f];
          u.path = (n.path ? `${n.path}.` : "") + f, d = d.resolve({
            value: v,
            context: n.context,
            parent: l
          });
          let T = d instanceof St ? d.spec : void 0, p = T == null ? void 0 : T.strict;
          if (T != null && T.strip) {
            c = c || f in i;
            continue;
          }
          g = !n.__validating || !p ? (
            // TODO: use _cast, this is double resolving
            d.cast(i[f], u)
          ) : i[f], g !== void 0 && (l[f] = g);
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
        if (!a || !eh(u)) {
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
      return r.fields = t, r._nodes = Jw(t, n), r._sortErrors = mg(Object.keys(t)), n && (r._excludedEdges = n), r;
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
        return tx(o, t) && (s = Object.assign({}, o), r || delete s[t], s[n] = i(o)), s;
      });
    }
    /** Parse an input JSON string to an object */
    json() {
      return this.transform(ex);
    }
    noUnknown(t = !0, n = vu.noUnknown) {
      typeof t != "boolean" && (n = t, t = !0);
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null)
            return !0;
          const o = nx(this.schema, i);
          return !t || o.length === 0 || this.createError({
            params: {
              unknown: o.join(", ")
            }
          });
        }
      });
      return r.spec.noUnknown = t, r;
    }
    unknown(t = !0, n = vu.noUnknown) {
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
      return this.transformKeys(rl.camelCase);
    }
    snakeCase() {
      return this.transformKeys(rl.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => rl.snakeCase(t).toUpperCase());
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
  yg.prototype = gg.prototype;
  const ix = yg({
    firstName: Zo().required("This field is required"),
    lastName: Zo().required("This field is required"),
    age: hg().min(0).positive().max(125).required("This field is required"),
    email: Zo().email()
    // useSlack: Yup.string().required('You must join slack!')
  });
  function ox(e, t) {
    const n = {};
    return e.username ? e.username.toLowerCase().includes(t.StepSlack.firstName.toLowerCase()) || (n.username = `Username should contain your first name (${t.StepSlack.firstName})`) : n.username = "This field is required", n;
  }
  var sx = function(t) {
    return ax(t) && !lx(t);
  };
  function ax(e) {
    return !!e && typeof e == "object";
  }
  function lx(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || fx(e);
  }
  var ux = typeof Symbol == "function" && Symbol.for, cx = ux ? Symbol.for("react.element") : 60103;
  function fx(e) {
    return e.$$typeof === cx;
  }
  function dx(e) {
    return Array.isArray(e) ? [] : {};
  }
  function As(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Gi(dx(e), e, t) : e;
  }
  function hx(e, t, n) {
    return e.concat(t).map(function(r) {
      return As(r, n);
    });
  }
  function px(e, t, n) {
    var r = {};
    return n.isMergeableObject(e) && Object.keys(e).forEach(function(i) {
      r[i] = As(e[i], n);
    }), Object.keys(t).forEach(function(i) {
      !n.isMergeableObject(t[i]) || !e[i] ? r[i] = As(t[i], n) : r[i] = Gi(e[i], t[i], n);
    }), r;
  }
  function Gi(e, t, n) {
    n = n || {}, n.arrayMerge = n.arrayMerge || hx, n.isMergeableObject = n.isMergeableObject || sx;
    var r = Array.isArray(t), i = Array.isArray(e), o = r === i;
    return o ? r ? n.arrayMerge(e, t, n) : px(e, t, n) : As(t, n);
  }
  Gi.all = function(t, n) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(r, i) {
      return Gi(r, i, n);
    }, {});
  };
  var wu = Gi, vg = typeof global == "object" && global && global.Object === Object && global, mx = typeof self == "object" && self && self.Object === Object && self, Ft = vg || mx || Function("return this")(), Cn = Ft.Symbol, Sg = Object.prototype, yx = Sg.hasOwnProperty, gx = Sg.toString, si = Cn ? Cn.toStringTag : void 0;
  function vx(e) {
    var t = yx.call(e, si), n = e[si];
    try {
      e[si] = void 0;
      var r = !0;
    } catch {
    }
    var i = gx.call(e);
    return r && (t ? e[si] = n : delete e[si]), i;
  }
  var Sx = Object.prototype, wx = Sx.toString;
  function xx(e) {
    return wx.call(e);
  }
  var Tx = "[object Null]", Ex = "[object Undefined]", th = Cn ? Cn.toStringTag : void 0;
  function ar(e) {
    return e == null ? e === void 0 ? Ex : Tx : th && th in Object(e) ? vx(e) : xx(e);
  }
  function wg(e, t) {
    return function(n) {
      return e(t(n));
    };
  }
  var Uc = wg(Object.getPrototypeOf, Object);
  function lr(e) {
    return e != null && typeof e == "object";
  }
  var Px = "[object Object]", Cx = Function.prototype, kx = Object.prototype, xg = Cx.toString, _x = kx.hasOwnProperty, Ax = xg.call(Object);
  function nh(e) {
    if (!lr(e) || ar(e) != Px)
      return !1;
    var t = Uc(e);
    if (t === null)
      return !0;
    var n = _x.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && xg.call(n) == Ax;
  }
  function Ox() {
    this.__data__ = [], this.size = 0;
  }
  function Tg(e, t) {
    return e === t || e !== e && t !== t;
  }
  function ia(e, t) {
    for (var n = e.length; n--; )
      if (Tg(e[n][0], t))
        return n;
    return -1;
  }
  var jx = Array.prototype, Fx = jx.splice;
  function Rx(e) {
    var t = this.__data__, n = ia(t, e);
    if (n < 0)
      return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Fx.call(t, n, 1), --this.size, !0;
  }
  function Dx(e) {
    var t = this.__data__, n = ia(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Mx(e) {
    return ia(this.__data__, e) > -1;
  }
  function Nx(e, t) {
    var n = this.__data__, r = ia(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
  }
  function Xt(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Xt.prototype.clear = Ox;
  Xt.prototype.delete = Rx;
  Xt.prototype.get = Dx;
  Xt.prototype.has = Mx;
  Xt.prototype.set = Nx;
  function bx() {
    this.__data__ = new Xt(), this.size = 0;
  }
  function Lx(e) {
    var t = this.__data__, n = t.delete(e);
    return this.size = t.size, n;
  }
  function Vx(e) {
    return this.__data__.get(e);
  }
  function $x(e) {
    return this.__data__.has(e);
  }
  function so(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var Ix = "[object AsyncFunction]", zx = "[object Function]", Ux = "[object GeneratorFunction]", Bx = "[object Proxy]";
  function Eg(e) {
    if (!so(e))
      return !1;
    var t = ar(e);
    return t == zx || t == Ux || t == Ix || t == Bx;
  }
  var il = Ft["__core-js_shared__"], rh = function() {
    var e = /[^.]+$/.exec(il && il.keys && il.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function Hx(e) {
    return !!rh && rh in e;
  }
  var Wx = Function.prototype, Kx = Wx.toString;
  function ur(e) {
    if (e != null) {
      try {
        return Kx.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var Gx = /[\\^$.*+?()[\]{}|]/g, Yx = /^\[object .+?Constructor\]$/, Qx = Function.prototype, Xx = Object.prototype, Zx = Qx.toString, qx = Xx.hasOwnProperty, Jx = RegExp(
    "^" + Zx.call(qx).replace(Gx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function eT(e) {
    if (!so(e) || Hx(e))
      return !1;
    var t = Eg(e) ? Jx : Yx;
    return t.test(ur(e));
  }
  function tT(e, t) {
    return e == null ? void 0 : e[t];
  }
  function cr(e, t) {
    var n = tT(e, t);
    return eT(n) ? n : void 0;
  }
  var Yi = cr(Ft, "Map"), Qi = cr(Object, "create");
  function nT() {
    this.__data__ = Qi ? Qi(null) : {}, this.size = 0;
  }
  function rT(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var iT = "__lodash_hash_undefined__", oT = Object.prototype, sT = oT.hasOwnProperty;
  function aT(e) {
    var t = this.__data__;
    if (Qi) {
      var n = t[e];
      return n === iT ? void 0 : n;
    }
    return sT.call(t, e) ? t[e] : void 0;
  }
  var lT = Object.prototype, uT = lT.hasOwnProperty;
  function cT(e) {
    var t = this.__data__;
    return Qi ? t[e] !== void 0 : uT.call(t, e);
  }
  var fT = "__lodash_hash_undefined__";
  function dT(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Qi && t === void 0 ? fT : t, this;
  }
  function tr(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  tr.prototype.clear = nT;
  tr.prototype.delete = rT;
  tr.prototype.get = aT;
  tr.prototype.has = cT;
  tr.prototype.set = dT;
  function hT() {
    this.size = 0, this.__data__ = {
      hash: new tr(),
      map: new (Yi || Xt)(),
      string: new tr()
    };
  }
  function pT(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function oa(e, t) {
    var n = e.__data__;
    return pT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function mT(e) {
    var t = oa(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function yT(e) {
    return oa(this, e).get(e);
  }
  function gT(e) {
    return oa(this, e).has(e);
  }
  function vT(e, t) {
    var n = oa(this, e), r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
  }
  function Rn(e) {
    var t = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Rn.prototype.clear = hT;
  Rn.prototype.delete = mT;
  Rn.prototype.get = yT;
  Rn.prototype.has = gT;
  Rn.prototype.set = vT;
  var ST = 200;
  function wT(e, t) {
    var n = this.__data__;
    if (n instanceof Xt) {
      var r = n.__data__;
      if (!Yi || r.length < ST - 1)
        return r.push([e, t]), this.size = ++n.size, this;
      n = this.__data__ = new Rn(r);
    }
    return n.set(e, t), this.size = n.size, this;
  }
  function Xr(e) {
    var t = this.__data__ = new Xt(e);
    this.size = t.size;
  }
  Xr.prototype.clear = bx;
  Xr.prototype.delete = Lx;
  Xr.prototype.get = Vx;
  Xr.prototype.has = $x;
  Xr.prototype.set = wT;
  function xT(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
      ;
    return e;
  }
  var ih = function() {
    try {
      var e = cr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  function Pg(e, t, n) {
    t == "__proto__" && ih ? ih(e, t, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[t] = n;
  }
  var TT = Object.prototype, ET = TT.hasOwnProperty;
  function Cg(e, t, n) {
    var r = e[t];
    (!(ET.call(e, t) && Tg(r, n)) || n === void 0 && !(t in e)) && Pg(e, t, n);
  }
  function sa(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = void 0;
      l === void 0 && (l = e[a]), i ? Pg(n, a, l) : Cg(n, a, l);
    }
    return n;
  }
  function PT(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
      r[n] = t(n);
    return r;
  }
  var CT = "[object Arguments]";
  function oh(e) {
    return lr(e) && ar(e) == CT;
  }
  var kg = Object.prototype, kT = kg.hasOwnProperty, _T = kg.propertyIsEnumerable, AT = oh(/* @__PURE__ */ function() {
    return arguments;
  }()) ? oh : function(e) {
    return lr(e) && kT.call(e, "callee") && !_T.call(e, "callee");
  }, ao = Array.isArray;
  function OT() {
    return !1;
  }
  var _g = typeof Ye == "object" && Ye && !Ye.nodeType && Ye, sh = _g && typeof Qe == "object" && Qe && !Qe.nodeType && Qe, jT = sh && sh.exports === _g, ah = jT ? Ft.Buffer : void 0, FT = ah ? ah.isBuffer : void 0, Ag = FT || OT, RT = 9007199254740991, DT = /^(?:0|[1-9]\d*)$/;
  function MT(e, t) {
    var n = typeof e;
    return t = t ?? RT, !!t && (n == "number" || n != "symbol" && DT.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var NT = 9007199254740991;
  function Og(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= NT;
  }
  var bT = "[object Arguments]", LT = "[object Array]", VT = "[object Boolean]", $T = "[object Date]", IT = "[object Error]", zT = "[object Function]", UT = "[object Map]", BT = "[object Number]", HT = "[object Object]", WT = "[object RegExp]", KT = "[object Set]", GT = "[object String]", YT = "[object WeakMap]", QT = "[object ArrayBuffer]", XT = "[object DataView]", ZT = "[object Float32Array]", qT = "[object Float64Array]", JT = "[object Int8Array]", eE = "[object Int16Array]", tE = "[object Int32Array]", nE = "[object Uint8Array]", rE = "[object Uint8ClampedArray]", iE = "[object Uint16Array]", oE = "[object Uint32Array]", re = {};
  re[ZT] = re[qT] = re[JT] = re[eE] = re[tE] = re[nE] = re[rE] = re[iE] = re[oE] = !0;
  re[bT] = re[LT] = re[QT] = re[VT] = re[XT] = re[$T] = re[IT] = re[zT] = re[UT] = re[BT] = re[HT] = re[WT] = re[KT] = re[GT] = re[YT] = !1;
  function sE(e) {
    return lr(e) && Og(e.length) && !!re[ar(e)];
  }
  function Bc(e) {
    return function(t) {
      return e(t);
    };
  }
  var jg = typeof Ye == "object" && Ye && !Ye.nodeType && Ye, Pi = jg && typeof Qe == "object" && Qe && !Qe.nodeType && Qe, aE = Pi && Pi.exports === jg, ol = aE && vg.process, Hr = function() {
    try {
      var e = Pi && Pi.require && Pi.require("util").types;
      return e || ol && ol.binding && ol.binding("util");
    } catch {
    }
  }(), lh = Hr && Hr.isTypedArray, lE = lh ? Bc(lh) : sE, uE = Object.prototype, cE = uE.hasOwnProperty;
  function Fg(e, t) {
    var n = ao(e), r = !n && AT(e), i = !n && !r && Ag(e), o = !n && !r && !i && lE(e), s = n || r || i || o, a = s ? PT(e.length, String) : [], l = a.length;
    for (var u in e)
      (t || cE.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
      (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
      MT(u, l))) && a.push(u);
    return a;
  }
  var fE = Object.prototype;
  function Hc(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || fE;
    return e === n;
  }
  var dE = wg(Object.keys, Object), hE = Object.prototype, pE = hE.hasOwnProperty;
  function mE(e) {
    if (!Hc(e))
      return dE(e);
    var t = [];
    for (var n in Object(e))
      pE.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function Rg(e) {
    return e != null && Og(e.length) && !Eg(e);
  }
  function Wc(e) {
    return Rg(e) ? Fg(e) : mE(e);
  }
  function yE(e, t) {
    return e && sa(t, Wc(t), e);
  }
  function gE(e) {
    var t = [];
    if (e != null)
      for (var n in Object(e))
        t.push(n);
    return t;
  }
  var vE = Object.prototype, SE = vE.hasOwnProperty;
  function wE(e) {
    if (!so(e))
      return gE(e);
    var t = Hc(e), n = [];
    for (var r in e)
      r == "constructor" && (t || !SE.call(e, r)) || n.push(r);
    return n;
  }
  function Kc(e) {
    return Rg(e) ? Fg(e, !0) : wE(e);
  }
  function xE(e, t) {
    return e && sa(t, Kc(t), e);
  }
  var Dg = typeof Ye == "object" && Ye && !Ye.nodeType && Ye, uh = Dg && typeof Qe == "object" && Qe && !Qe.nodeType && Qe, TE = uh && uh.exports === Dg, ch = TE ? Ft.Buffer : void 0, fh = ch ? ch.allocUnsafe : void 0;
  function EE(e, t) {
    if (t)
      return e.slice();
    var n = e.length, r = fh ? fh(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function Mg(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r; )
      t[n] = e[n];
    return t;
  }
  function PE(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
      var s = e[n];
      t(s, n, e) && (o[i++] = s);
    }
    return o;
  }
  function Ng() {
    return [];
  }
  var CE = Object.prototype, kE = CE.propertyIsEnumerable, dh = Object.getOwnPropertySymbols, Gc = dh ? function(e) {
    return e == null ? [] : (e = Object(e), PE(dh(e), function(t) {
      return kE.call(e, t);
    }));
  } : Ng;
  function _E(e, t) {
    return sa(e, Gc(e), t);
  }
  function bg(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
      e[i + n] = t[n];
    return e;
  }
  var AE = Object.getOwnPropertySymbols, Lg = AE ? function(e) {
    for (var t = []; e; )
      bg(t, Gc(e)), e = Uc(e);
    return t;
  } : Ng;
  function OE(e, t) {
    return sa(e, Lg(e), t);
  }
  function Vg(e, t, n) {
    var r = t(e);
    return ao(e) ? r : bg(r, n(e));
  }
  function jE(e) {
    return Vg(e, Wc, Gc);
  }
  function FE(e) {
    return Vg(e, Kc, Lg);
  }
  var xu = cr(Ft, "DataView"), Tu = cr(Ft, "Promise"), Eu = cr(Ft, "Set"), Pu = cr(Ft, "WeakMap"), hh = "[object Map]", RE = "[object Object]", ph = "[object Promise]", mh = "[object Set]", yh = "[object WeakMap]", gh = "[object DataView]", DE = ur(xu), ME = ur(Yi), NE = ur(Tu), bE = ur(Eu), LE = ur(Pu), bt = ar;
  (xu && bt(new xu(new ArrayBuffer(1))) != gh || Yi && bt(new Yi()) != hh || Tu && bt(Tu.resolve()) != ph || Eu && bt(new Eu()) != mh || Pu && bt(new Pu()) != yh) && (bt = function(e) {
    var t = ar(e), n = t == RE ? e.constructor : void 0, r = n ? ur(n) : "";
    if (r)
      switch (r) {
        case DE:
          return gh;
        case ME:
          return hh;
        case NE:
          return ph;
        case bE:
          return mh;
        case LE:
          return yh;
      }
    return t;
  });
  var VE = Object.prototype, $E = VE.hasOwnProperty;
  function IE(e) {
    var t = e.length, n = new e.constructor(t);
    return t && typeof e[0] == "string" && $E.call(e, "index") && (n.index = e.index, n.input = e.input), n;
  }
  var vh = Ft.Uint8Array;
  function Yc(e) {
    var t = new e.constructor(e.byteLength);
    return new vh(t).set(new vh(e)), t;
  }
  function zE(e, t) {
    var n = t ? Yc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var UE = /\w*$/;
  function BE(e) {
    var t = new e.constructor(e.source, UE.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var Sh = Cn ? Cn.prototype : void 0, wh = Sh ? Sh.valueOf : void 0;
  function HE(e) {
    return wh ? Object(wh.call(e)) : {};
  }
  function WE(e, t) {
    var n = t ? Yc(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var KE = "[object Boolean]", GE = "[object Date]", YE = "[object Map]", QE = "[object Number]", XE = "[object RegExp]", ZE = "[object Set]", qE = "[object String]", JE = "[object Symbol]", eP = "[object ArrayBuffer]", tP = "[object DataView]", nP = "[object Float32Array]", rP = "[object Float64Array]", iP = "[object Int8Array]", oP = "[object Int16Array]", sP = "[object Int32Array]", aP = "[object Uint8Array]", lP = "[object Uint8ClampedArray]", uP = "[object Uint16Array]", cP = "[object Uint32Array]";
  function fP(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case eP:
        return Yc(e);
      case KE:
      case GE:
        return new r(+e);
      case tP:
        return zE(e, n);
      case nP:
      case rP:
      case iP:
      case oP:
      case sP:
      case aP:
      case lP:
      case uP:
      case cP:
        return WE(e, n);
      case YE:
        return new r();
      case QE:
      case qE:
        return new r(e);
      case XE:
        return BE(e);
      case ZE:
        return new r();
      case JE:
        return HE(e);
    }
  }
  var xh = Object.create, dP = /* @__PURE__ */ function() {
    function e() {
    }
    return function(t) {
      if (!so(t))
        return {};
      if (xh)
        return xh(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }();
  function hP(e) {
    return typeof e.constructor == "function" && !Hc(e) ? dP(Uc(e)) : {};
  }
  var pP = "[object Map]";
  function mP(e) {
    return lr(e) && bt(e) == pP;
  }
  var Th = Hr && Hr.isMap, yP = Th ? Bc(Th) : mP, gP = "[object Set]";
  function vP(e) {
    return lr(e) && bt(e) == gP;
  }
  var Eh = Hr && Hr.isSet, SP = Eh ? Bc(Eh) : vP, wP = 1, xP = 2, TP = 4, $g = "[object Arguments]", EP = "[object Array]", PP = "[object Boolean]", CP = "[object Date]", kP = "[object Error]", Ig = "[object Function]", _P = "[object GeneratorFunction]", AP = "[object Map]", OP = "[object Number]", zg = "[object Object]", jP = "[object RegExp]", FP = "[object Set]", RP = "[object String]", DP = "[object Symbol]", MP = "[object WeakMap]", NP = "[object ArrayBuffer]", bP = "[object DataView]", LP = "[object Float32Array]", VP = "[object Float64Array]", $P = "[object Int8Array]", IP = "[object Int16Array]", zP = "[object Int32Array]", UP = "[object Uint8Array]", BP = "[object Uint8ClampedArray]", HP = "[object Uint16Array]", WP = "[object Uint32Array]", J = {};
  J[$g] = J[EP] = J[NP] = J[bP] = J[PP] = J[CP] = J[LP] = J[VP] = J[$P] = J[IP] = J[zP] = J[AP] = J[OP] = J[zg] = J[jP] = J[FP] = J[RP] = J[DP] = J[UP] = J[BP] = J[HP] = J[WP] = !0;
  J[kP] = J[Ig] = J[MP] = !1;
  function Ci(e, t, n, r, i, o) {
    var s, a = t & wP, l = t & xP, u = t & TP;
    if (s !== void 0)
      return s;
    if (!so(e))
      return e;
    var c = ao(e);
    if (c) {
      if (s = IE(e), !a)
        return Mg(e, s);
    } else {
      var f = bt(e), d = f == Ig || f == _P;
      if (Ag(e))
        return EE(e, a);
      if (f == zg || f == $g || d && !i) {
        if (s = l || d ? {} : hP(e), !a)
          return l ? OE(e, xE(s, e)) : _E(e, yE(s, e));
      } else {
        if (!J[f])
          return i ? e : {};
        s = fP(e, f, a);
      }
    }
    o || (o = new Xr());
    var y = o.get(e);
    if (y)
      return y;
    o.set(e, s), SP(e) ? e.forEach(function(T) {
      s.add(Ci(T, t, n, T, e, o));
    }) : yP(e) && e.forEach(function(T, p) {
      s.set(p, Ci(T, t, n, p, e, o));
    });
    var g = u ? l ? FE : jE : l ? Kc : Wc, v = c ? void 0 : g(e);
    return xT(v || e, function(T, p) {
      v && (p = T, T = e[p]), Cg(s, p, Ci(T, t, n, p, e, o));
    }), s;
  }
  var KP = 1, GP = 4;
  function hi(e) {
    return Ci(e, KP | GP);
  }
  var Ph = Array.isArray, Ch = Object.keys, YP = Object.prototype.hasOwnProperty, QP = typeof Element < "u";
  function Cu(e, t) {
    if (e === t)
      return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = Ph(e), r = Ph(t), i, o, s;
      if (n && r) {
        if (o = e.length, o != t.length)
          return !1;
        for (i = o; i-- !== 0; )
          if (!Cu(e[i], t[i]))
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
      var f = Ch(e);
      if (o = f.length, o !== Ch(t).length)
        return !1;
      for (i = o; i-- !== 0; )
        if (!YP.call(t, f[i]))
          return !1;
      if (QP && e instanceof Element && t instanceof Element)
        return e === t;
      for (i = o; i-- !== 0; )
        if (s = f[i], !(s === "_owner" && e.$$typeof) && !Cu(e[s], t[s]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var XP = function(t, n) {
    try {
      return Cu(t, n);
    } catch (r) {
      if (r.message && r.message.match(/stack|recursion/i) || r.number === -2146828260)
        return console.warn("Warning: react-fast-compare does not handle circular references.", r.name, r.message), !1;
      throw r;
    }
  };
  const rn = /* @__PURE__ */ Vs(XP);
  var ZP = 4;
  function kh(e) {
    return Ci(e, ZP);
  }
  function Ug(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var qP = "[object Symbol]";
  function Qc(e) {
    return typeof e == "symbol" || lr(e) && ar(e) == qP;
  }
  var JP = "Expected a function";
  function Xc(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(JP);
    var n = function() {
      var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
      if (o.has(i))
        return o.get(i);
      var s = e.apply(this, r);
      return n.cache = o.set(i, s) || o, s;
    };
    return n.cache = new (Xc.Cache || Rn)(), n;
  }
  Xc.Cache = Rn;
  var eC = 500;
  function tC(e) {
    var t = Xc(e, function(r) {
      return n.size === eC && n.clear(), r;
    }), n = t.cache;
    return t;
  }
  var nC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rC = /\\(\\)?/g, iC = tC(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""), e.replace(nC, function(n, r, i, o) {
      t.push(i ? o.replace(rC, "$1") : r || n);
    }), t;
  }), oC = 1 / 0;
  function sC(e) {
    if (typeof e == "string" || Qc(e))
      return e;
    var t = e + "";
    return t == "0" && 1 / e == -oC ? "-0" : t;
  }
  var aC = 1 / 0, _h = Cn ? Cn.prototype : void 0, Ah = _h ? _h.toString : void 0;
  function Bg(e) {
    if (typeof e == "string")
      return e;
    if (ao(e))
      return Ug(e, Bg) + "";
    if (Qc(e))
      return Ah ? Ah.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -aC ? "-0" : t;
  }
  function lC(e) {
    return e == null ? "" : Bg(e);
  }
  function Hg(e) {
    return ao(e) ? Ug(e, sC) : Qc(e) ? [e] : Mg(iC(lC(e)));
  }
  var Wg = { exports: {} }, X = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Te = typeof Symbol == "function" && Symbol.for, Zc = Te ? Symbol.for("react.element") : 60103, qc = Te ? Symbol.for("react.portal") : 60106, aa = Te ? Symbol.for("react.fragment") : 60107, la = Te ? Symbol.for("react.strict_mode") : 60108, ua = Te ? Symbol.for("react.profiler") : 60114, ca = Te ? Symbol.for("react.provider") : 60109, fa = Te ? Symbol.for("react.context") : 60110, Jc = Te ? Symbol.for("react.async_mode") : 60111, da = Te ? Symbol.for("react.concurrent_mode") : 60111, ha = Te ? Symbol.for("react.forward_ref") : 60112, pa = Te ? Symbol.for("react.suspense") : 60113, uC = Te ? Symbol.for("react.suspense_list") : 60120, ma = Te ? Symbol.for("react.memo") : 60115, ya = Te ? Symbol.for("react.lazy") : 60116, cC = Te ? Symbol.for("react.block") : 60121, fC = Te ? Symbol.for("react.fundamental") : 60117, dC = Te ? Symbol.for("react.responder") : 60118, hC = Te ? Symbol.for("react.scope") : 60119;
  function tt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Zc:
          switch (e = e.type, e) {
            case Jc:
            case da:
            case aa:
            case ua:
            case la:
            case pa:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case fa:
                case ha:
                case ya:
                case ma:
                case ca:
                  return e;
                default:
                  return t;
              }
          }
        case qc:
          return t;
      }
    }
  }
  function Kg(e) {
    return tt(e) === da;
  }
  X.AsyncMode = Jc;
  X.ConcurrentMode = da;
  X.ContextConsumer = fa;
  X.ContextProvider = ca;
  X.Element = Zc;
  X.ForwardRef = ha;
  X.Fragment = aa;
  X.Lazy = ya;
  X.Memo = ma;
  X.Portal = qc;
  X.Profiler = ua;
  X.StrictMode = la;
  X.Suspense = pa;
  X.isAsyncMode = function(e) {
    return Kg(e) || tt(e) === Jc;
  };
  X.isConcurrentMode = Kg;
  X.isContextConsumer = function(e) {
    return tt(e) === fa;
  };
  X.isContextProvider = function(e) {
    return tt(e) === ca;
  };
  X.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zc;
  };
  X.isForwardRef = function(e) {
    return tt(e) === ha;
  };
  X.isFragment = function(e) {
    return tt(e) === aa;
  };
  X.isLazy = function(e) {
    return tt(e) === ya;
  };
  X.isMemo = function(e) {
    return tt(e) === ma;
  };
  X.isPortal = function(e) {
    return tt(e) === qc;
  };
  X.isProfiler = function(e) {
    return tt(e) === ua;
  };
  X.isStrictMode = function(e) {
    return tt(e) === la;
  };
  X.isSuspense = function(e) {
    return tt(e) === pa;
  };
  X.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === aa || e === da || e === ua || e === la || e === pa || e === uC || typeof e == "object" && e !== null && (e.$$typeof === ya || e.$$typeof === ma || e.$$typeof === ca || e.$$typeof === fa || e.$$typeof === ha || e.$$typeof === fC || e.$$typeof === dC || e.$$typeof === hC || e.$$typeof === cC);
  };
  X.typeOf = tt;
  Wg.exports = X;
  var pC = Wg.exports, ef = pC, mC = {
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
  }, yC = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, gC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, Gg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, tf = {};
  tf[ef.ForwardRef] = gC;
  tf[ef.Memo] = Gg;
  function Oh(e) {
    return ef.isMemo(e) ? Gg : tf[e.$$typeof] || mC;
  }
  var vC = Object.defineProperty, SC = Object.getOwnPropertyNames, jh = Object.getOwnPropertySymbols, wC = Object.getOwnPropertyDescriptor, xC = Object.getPrototypeOf, Fh = Object.prototype;
  function Yg(e, t, n) {
    if (typeof t != "string") {
      if (Fh) {
        var r = xC(t);
        r && r !== Fh && Yg(e, r, n);
      }
      var i = SC(t);
      jh && (i = i.concat(jh(t)));
      for (var o = Oh(e), s = Oh(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!yC[l] && !(n && n[l]) && !(s && s[l]) && !(o && o[l])) {
          var u = wC(t, l);
          try {
            vC(e, l, u);
          } catch {
          }
        }
      }
    }
    return e;
  }
  var TC = Yg;
  const EC = /* @__PURE__ */ Vs(TC);
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
  function Qg(e, t) {
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
  function Rh(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  var ga = /* @__PURE__ */ w.createContext(void 0);
  ga.displayName = "FormikContext";
  var PC = ga.Provider, CC = ga.Consumer;
  function lo() {
    var e = w.useContext(ga);
    return e;
  }
  var Dh = function(t) {
    return Array.isArray(t) && t.length === 0;
  }, Ce = function(t) {
    return typeof t == "function";
  }, uo = function(t) {
    return t !== null && typeof t == "object";
  }, kC = function(t) {
    return String(Math.floor(Number(t))) === t;
  }, sl = function(t) {
    return Object.prototype.toString.call(t) === "[object String]";
  }, Xg = function(t) {
    return w.Children.count(t) === 0;
  }, al = function(t) {
    return uo(t) && Ce(t.then);
  };
  function se(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = Hg(t); e && r < i.length; )
      e = e[i[r++]];
    return r !== i.length && !e || e === void 0 ? n : e;
  }
  function At(e, t, n) {
    for (var r = kh(e), i = r, o = 0, s = Hg(t); o < s.length - 1; o++) {
      var a = s[o], l = se(e, s.slice(0, o + 1));
      if (l && (uo(l) || Array.isArray(l)))
        i = i[a] = kh(l);
      else {
        var u = s[o + 1];
        i = i[a] = kC(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (o === 0 ? e : i)[s[o]] === n ? e : (n === void 0 ? delete i[s[o]] : i[s[o]] = n, o === 0 && n === void 0 && delete r[s[o]], r);
  }
  function Zg(e, t, n, r) {
    n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, o = Object.keys(e); i < o.length; i++) {
      var s = o[i], a = e[s];
      uo(a) ? n.get(a) || (n.set(a, !0), r[s] = Array.isArray(a) ? [] : {}, Zg(a, t, n, r[s])) : r[s] = t;
    }
    return r;
  }
  function _C(e, t) {
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
          touched: Zg(e.values, !0),
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
  var Nn = {}, Mo = {};
  function AC(e) {
    var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, o = e.validateOnMount, s = o === void 0 ? !1 : o, a = e.isInitialValid, l = e.enableReinitialize, u = l === void 0 ? !1 : l, c = e.onSubmit, f = cn(e, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]), d = Y({
      validateOnChange: n,
      validateOnBlur: i,
      validateOnMount: s,
      onSubmit: c
    }, f), y = w.useRef(d.initialValues), g = w.useRef(d.initialErrors || Nn), v = w.useRef(d.initialTouched || Mo), T = w.useRef(d.initialStatus), p = w.useRef(!1), h = w.useRef({});
    w.useEffect(function() {
      return p.current = !0, function() {
        p.current = !1;
      };
    }, []);
    var m = w.useState(0), S = m[1], P = w.useRef({
      values: hi(d.initialValues),
      errors: hi(d.initialErrors) || Nn,
      touched: hi(d.initialTouched) || Mo,
      status: hi(d.initialStatus),
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0
    }), E = P.current, C = w.useCallback(function(x) {
      var j = P.current;
      P.current = _C(j, x), j !== P.current && S(function(M) {
        return M + 1;
      });
    }, []), k = w.useCallback(function(x, j) {
      return new Promise(function(M, L) {
        var B = d.validate(x, j);
        B == null ? M(Nn) : al(B) ? B.then(function(G) {
          M(G || Nn);
        }, function(G) {
          L(G);
        }) : M(B);
      });
    }, [d.validate]), b = w.useCallback(function(x, j) {
      var M = d.validationSchema, L = Ce(M) ? M(j) : M, B = j && L.validateAt ? L.validateAt(j, x) : FC(x, L);
      return new Promise(function(G, Se) {
        B.then(function() {
          G(Nn);
        }, function(Rt) {
          Rt.name === "ValidationError" ? G(jC(Rt)) : Se(Rt);
        });
      });
    }, [d.validationSchema]), R = w.useCallback(function(x, j) {
      return new Promise(function(M) {
        return M(h.current[x].validate(j));
      });
    }, []), z = w.useCallback(function(x) {
      var j = Object.keys(h.current).filter(function(L) {
        return Ce(h.current[L].validate);
      }), M = j.length > 0 ? j.map(function(L) {
        return R(L, se(x, L));
      }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
      return Promise.all(M).then(function(L) {
        return L.reduce(function(B, G, Se) {
          return G === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || G && (B = At(B, j[Se], G)), B;
        }, {});
      });
    }, [R]), he = w.useCallback(function(x) {
      return Promise.all([z(x), d.validationSchema ? b(x) : {}, d.validate ? k(x) : {}]).then(function(j) {
        var M = j[0], L = j[1], B = j[2], G = wu.all([M, L, B], {
          arrayMerge: RC
        });
        return G;
      });
    }, [d.validate, d.validationSchema, z, k, b]), oe = nt(function(x) {
      return x === void 0 && (x = E.values), C({
        type: "SET_ISVALIDATING",
        payload: !0
      }), he(x).then(function(j) {
        return p.current && (C({
          type: "SET_ISVALIDATING",
          payload: !1
        }), C({
          type: "SET_ERRORS",
          payload: j
        })), j;
      });
    });
    w.useEffect(function() {
      s && p.current === !0 && rn(y.current, d.initialValues) && oe(y.current);
    }, [s, oe]);
    var D = w.useCallback(function(x) {
      var j = x && x.values ? x.values : y.current, M = x && x.errors ? x.errors : g.current ? g.current : d.initialErrors || {}, L = x && x.touched ? x.touched : v.current ? v.current : d.initialTouched || {}, B = x && x.status ? x.status : T.current ? T.current : d.initialStatus;
      y.current = j, g.current = M, v.current = L, T.current = B;
      var G = function() {
        C({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!x && !!x.isSubmitting,
            errors: M,
            touched: L,
            status: B,
            values: j,
            isValidating: !!x && !!x.isValidating,
            submitCount: x && x.submitCount && typeof x.submitCount == "number" ? x.submitCount : 0
          }
        });
      };
      if (d.onReset) {
        var Se = d.onReset(E.values, Lf);
        al(Se) ? Se.then(G) : G();
      } else
        G();
    }, [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]);
    w.useEffect(function() {
      p.current === !0 && !rn(y.current, d.initialValues) && u && (y.current = d.initialValues, D(), s && oe(y.current));
    }, [u, d.initialValues, D, s, oe]), w.useEffect(function() {
      u && p.current === !0 && !rn(g.current, d.initialErrors) && (g.current = d.initialErrors || Nn, C({
        type: "SET_ERRORS",
        payload: d.initialErrors || Nn
      }));
    }, [u, d.initialErrors]), w.useEffect(function() {
      u && p.current === !0 && !rn(v.current, d.initialTouched) && (v.current = d.initialTouched || Mo, C({
        type: "SET_TOUCHED",
        payload: d.initialTouched || Mo
      }));
    }, [u, d.initialTouched]), w.useEffect(function() {
      u && p.current === !0 && !rn(T.current, d.initialStatus) && (T.current = d.initialStatus, C({
        type: "SET_STATUS",
        payload: d.initialStatus
      }));
    }, [u, d.initialStatus, d.initialTouched]);
    var $ = nt(function(x) {
      if (h.current[x] && Ce(h.current[x].validate)) {
        var j = se(E.values, x), M = h.current[x].validate(j);
        return al(M) ? (C({
          type: "SET_ISVALIDATING",
          payload: !0
        }), M.then(function(L) {
          return L;
        }).then(function(L) {
          C({
            type: "SET_FIELD_ERROR",
            payload: {
              field: x,
              value: L
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
        }), b(E.values, x).then(function(L) {
          return L;
        }).then(function(L) {
          C({
            type: "SET_FIELD_ERROR",
            payload: {
              field: x,
              value: se(L, x)
            }
          }), C({
            type: "SET_ISVALIDATING",
            payload: !1
          });
        });
      return Promise.resolve();
    }), I = w.useCallback(function(x, j) {
      var M = j.validate;
      h.current[x] = {
        validate: M
      };
    }, []), K = w.useCallback(function(x) {
      delete h.current[x];
    }, []), A = nt(function(x, j) {
      C({
        type: "SET_TOUCHED",
        payload: x
      });
      var M = j === void 0 ? i : j;
      return M ? oe(E.values) : Promise.resolve();
    }), N = w.useCallback(function(x) {
      C({
        type: "SET_ERRORS",
        payload: x
      });
    }, []), U = nt(function(x, j) {
      var M = Ce(x) ? x(E.values) : x;
      C({
        type: "SET_VALUES",
        payload: M
      });
      var L = j === void 0 ? n : j;
      return L ? oe(M) : Promise.resolve();
    }), q = w.useCallback(function(x, j) {
      C({
        type: "SET_FIELD_ERROR",
        payload: {
          field: x,
          value: j
        }
      });
    }, []), te = nt(function(x, j, M) {
      C({
        type: "SET_FIELD_VALUE",
        payload: {
          field: x,
          value: j
        }
      });
      var L = M === void 0 ? n : M;
      return L ? oe(At(E.values, x, j)) : Promise.resolve();
    }), Mn = w.useCallback(function(x, j) {
      var M = j, L = x, B;
      if (!sl(x)) {
        x.persist && x.persist();
        var G = x.target ? x.target : x.currentTarget, Se = G.type, Rt = G.name, Aa = G.id, Oa = G.value, M0 = G.checked, HO = G.outerHTML, Vf = G.options, N0 = G.multiple;
        M = j || Rt || Aa, L = /number|range/.test(Se) ? (B = parseFloat(Oa), isNaN(B) ? "" : B) : /checkbox/.test(Se) ? MC(se(E.values, M), M0, Oa) : Vf && N0 ? DC(Vf) : Oa;
      }
      M && te(M, L);
    }, [te, E.values]), ft = nt(function(x) {
      if (sl(x))
        return function(j) {
          return Mn(j, x);
        };
      Mn(x);
    }), wt = nt(function(x, j, M) {
      j === void 0 && (j = !0), C({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: x,
          value: j
        }
      });
      var L = M === void 0 ? i : M;
      return L ? oe(E.values) : Promise.resolve();
    }), xt = w.useCallback(function(x, j) {
      x.persist && x.persist();
      var M = x.target, L = M.name, B = M.id, G = M.outerHTML, Se = j || L || B;
      wt(Se, !0);
    }, [wt]), Zt = nt(function(x) {
      if (sl(x))
        return function(j) {
          return xt(j, x);
        };
      xt(x);
    }), Mf = w.useCallback(function(x) {
      Ce(x) ? C({
        type: "SET_FORMIK_STATE",
        payload: x
      }) : C({
        type: "SET_FORMIK_STATE",
        payload: function() {
          return x;
        }
      });
    }, []), Nf = w.useCallback(function(x) {
      C({
        type: "SET_STATUS",
        payload: x
      });
    }, []), bf = w.useCallback(function(x) {
      C({
        type: "SET_ISSUBMITTING",
        payload: x
      });
    }, []), ka = nt(function() {
      return C({
        type: "SUBMIT_ATTEMPT"
      }), oe().then(function(x) {
        var j = x instanceof Error, M = !j && Object.keys(x).length === 0;
        if (M) {
          var L;
          try {
            if (L = _0(), L === void 0)
              return;
          } catch (B) {
            throw B;
          }
          return Promise.resolve(L).then(function(B) {
            return p.current && C({
              type: "SUBMIT_SUCCESS"
            }), B;
          }).catch(function(B) {
            if (p.current)
              throw C({
                type: "SUBMIT_FAILURE"
              }), B;
          });
        } else if (p.current && (C({
          type: "SUBMIT_FAILURE"
        }), j))
          throw x;
      });
    }), k0 = nt(function(x) {
      x && x.preventDefault && Ce(x.preventDefault) && x.preventDefault(), x && x.stopPropagation && Ce(x.stopPropagation) && x.stopPropagation(), ka().catch(function(j) {
        console.warn("Warning: An unhandled error was caught from submitForm()", j);
      });
    }), Lf = {
      resetForm: D,
      validateForm: oe,
      validateField: $,
      setErrors: N,
      setFieldError: q,
      setFieldTouched: wt,
      setFieldValue: te,
      setStatus: Nf,
      setSubmitting: bf,
      setTouched: A,
      setValues: U,
      setFormikState: Mf,
      submitForm: ka
    }, _0 = nt(function() {
      return c(E.values, Lf);
    }), A0 = nt(function(x) {
      x && x.preventDefault && Ce(x.preventDefault) && x.preventDefault(), x && x.stopPropagation && Ce(x.stopPropagation) && x.stopPropagation(), D();
    }), O0 = w.useCallback(function(x) {
      return {
        value: se(E.values, x),
        error: se(E.errors, x),
        touched: !!se(E.touched, x),
        initialValue: se(y.current, x),
        initialTouched: !!se(v.current, x),
        initialError: se(g.current, x)
      };
    }, [E.errors, E.touched, E.values]), j0 = w.useCallback(function(x) {
      return {
        setValue: function(M, L) {
          return te(x, M, L);
        },
        setTouched: function(M, L) {
          return wt(x, M, L);
        },
        setError: function(M) {
          return q(x, M);
        }
      };
    }, [te, wt, q]), F0 = w.useCallback(function(x) {
      var j = uo(x), M = j ? x.name : x, L = se(E.values, M), B = {
        name: M,
        value: L,
        onChange: ft,
        onBlur: Zt
      };
      if (j) {
        var G = x.type, Se = x.value, Rt = x.as, Aa = x.multiple;
        G === "checkbox" ? Se === void 0 ? B.checked = !!L : (B.checked = !!(Array.isArray(L) && ~L.indexOf(Se)), B.value = Se) : G === "radio" ? (B.checked = L === Se, B.value = Se) : Rt === "select" && Aa && (B.value = B.value || [], B.multiple = !0);
      }
      return B;
    }, [Zt, ft, E.values]), _a = w.useMemo(function() {
      return !rn(y.current, E.values);
    }, [y.current, E.values]), R0 = w.useMemo(function() {
      return typeof a < "u" ? _a ? E.errors && Object.keys(E.errors).length === 0 : a !== !1 && Ce(a) ? a(d) : a : E.errors && Object.keys(E.errors).length === 0;
    }, [a, _a, E.errors, d]), D0 = Y({}, E, {
      initialValues: y.current,
      initialErrors: g.current,
      initialTouched: v.current,
      initialStatus: T.current,
      handleBlur: Zt,
      handleChange: ft,
      handleReset: A0,
      handleSubmit: k0,
      resetForm: D,
      setErrors: N,
      setFormikState: Mf,
      setFieldTouched: wt,
      setFieldValue: te,
      setFieldError: q,
      setStatus: Nf,
      setSubmitting: bf,
      setTouched: A,
      setValues: U,
      submitForm: ka,
      validateForm: oe,
      validateField: $,
      isValid: R0,
      dirty: _a,
      unregisterField: K,
      registerField: I,
      getFieldProps: F0,
      getFieldMeta: O0,
      getFieldHelpers: j0,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: s
    });
    return D0;
  }
  function OC(e) {
    var t = AC(e), n = e.component, r = e.children, i = e.render, o = e.innerRef;
    return w.useImperativeHandle(o, function() {
      return t;
    }), w.createElement(PC, {
      value: t
    }, n ? w.createElement(n, t) : i ? i(t) : r ? Ce(r) ? r(t) : Xg(r) ? null : w.Children.only(r) : null);
  }
  function jC(e) {
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
        se(t, s.path) || (t = At(t, s.path, s.message));
      }
    }
    return t;
  }
  function FC(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = ku(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: i
    });
  }
  function ku(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(i) {
          return Array.isArray(i) === !0 || nh(i) ? ku(i) : i !== "" ? i : void 0;
        }) : nh(e[r]) ? t[r] = ku(e[r]) : t[r] = e[r] !== "" ? e[r] : void 0;
      }
    return t;
  }
  function RC(e, t, n) {
    var r = e.slice();
    return t.forEach(function(o, s) {
      if (typeof r[s] > "u") {
        var a = n.clone !== !1, l = a && n.isMergeableObject(o);
        r[s] = l ? wu(Array.isArray(o) ? [] : {}, o, n) : o;
      } else
        n.isMergeableObject(o) ? r[s] = wu(e[s], o, n) : e.indexOf(o) === -1 && r.push(o);
    }), r;
  }
  function DC(e) {
    return Array.from(e).filter(function(t) {
      return t.selected;
    }).map(function(t) {
      return t.value;
    });
  }
  function MC(e, t, n) {
    if (typeof e == "boolean")
      return !!t;
    var r = [], i = !1, o = -1;
    if (Array.isArray(e))
      r = e, o = e.indexOf(n), i = o >= 0;
    else if (!n || n == "true" || n == "false")
      return !!t;
    return t && n && !i ? r.concat(n) : i ? r.slice(0, o).concat(r.slice(o + 1)) : r;
  }
  var NC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? w.useLayoutEffect : w.useEffect;
  function nt(e) {
    var t = w.useRef(e);
    return NC(function() {
      t.current = e;
    }), w.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, []);
  }
  function bC(e) {
    var t = e.validate, n = e.name, r = e.render, i = e.children, o = e.as, s = e.component, a = e.className, l = cn(e, ["validate", "name", "render", "children", "as", "component", "className"]), u = lo(), c = cn(u, ["validate", "validationSchema"]), f = c.registerField, d = c.unregisterField;
    w.useEffect(function() {
      return f(n, {
        validate: t
      }), function() {
        d(n);
      };
    }, [f, d, n, t]);
    var y = c.getFieldProps(Y({
      name: n
    }, l)), g = c.getFieldMeta(n), v = {
      field: y,
      form: c
    };
    if (r)
      return r(Y({}, v, {
        meta: g
      }));
    if (Ce(i))
      return i(Y({}, v, {
        meta: g
      }));
    if (s) {
      if (typeof s == "string") {
        var T = l.innerRef, p = cn(l, ["innerRef"]);
        return w.createElement(s, Y({
          ref: T
        }, y, p, {
          className: a
        }), i);
      }
      return w.createElement(s, Y({
        field: y,
        form: c
      }, l, {
        className: a
      }), i);
    }
    var h = o || "input";
    if (typeof h == "string") {
      var m = l.innerRef, S = cn(l, ["innerRef"]);
      return w.createElement(h, Y({
        ref: m
      }, y, S, {
        className: a
      }), i);
    }
    return w.createElement(h, Y({}, y, l, {
      className: a
    }), i);
  }
  var qg = /* @__PURE__ */ w.forwardRef(function(e, t) {
    var n = e.action, r = cn(e, ["action"]), i = n ?? "#", o = lo(), s = o.handleReset, a = o.handleSubmit;
    return w.createElement("form", Y({
      onSubmit: a,
      ref: t,
      onReset: s,
      action: i
    }, r));
  });
  qg.displayName = "Form";
  function LC(e) {
    var t = function(i) {
      return w.createElement(CC, null, function(o) {
        return w.createElement(e, Y({}, i, {
          formik: o
        }));
      });
    }, n = e.displayName || e.name || e.constructor && e.constructor.name || "Component";
    return t.WrappedComponent = e, t.displayName = "FormikConnect(" + n + ")", EC(
      t,
      e
      // cast type to ComponentClass (even if SFC)
    );
  }
  var VC = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i.splice(n, 1), i.splice(r, 0, o), i;
  }, $C = function(t, n, r) {
    var i = nr(t), o = i[n];
    return i[n] = i[r], i[r] = o, i;
  }, ll = function(t, n, r) {
    var i = nr(t);
    return i.splice(n, 0, r), i;
  }, IC = function(t, n, r) {
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
  }, Mh = function(t, n) {
    var r = typeof t == "function" ? t : n;
    return function(i) {
      if (Array.isArray(i) || uo(i)) {
        var o = nr(i);
        return r(o);
      }
      return i;
    };
  }, zC = /* @__PURE__ */ function(e) {
    Qg(t, e);
    function t(r) {
      var i;
      return i = e.call(this, r) || this, i.updateArrayField = function(o, s, a) {
        var l = i.props, u = l.name, c = l.formik.setFormikState;
        c(function(f) {
          var d = Mh(a, o), y = Mh(s, o), g = At(f.values, u, o(se(f.values, u))), v = a ? d(se(f.errors, u)) : void 0, T = s ? y(se(f.touched, u)) : void 0;
          return Dh(v) && (v = void 0), Dh(T) && (T = void 0), Y({}, f, {
            values: g,
            errors: a ? At(f.errors, u, v) : f.errors,
            touched: s ? At(f.touched, u, T) : f.touched
          });
        });
      }, i.push = function(o) {
        return i.updateArrayField(function(s) {
          return [].concat(nr(s), [hi(o)]);
        }, !1, !1);
      }, i.handlePush = function(o) {
        return function() {
          return i.push(o);
        };
      }, i.swap = function(o, s) {
        return i.updateArrayField(function(a) {
          return $C(a, o, s);
        }, !0, !0);
      }, i.handleSwap = function(o, s) {
        return function() {
          return i.swap(o, s);
        };
      }, i.move = function(o, s) {
        return i.updateArrayField(function(a) {
          return VC(a, o, s);
        }, !0, !0);
      }, i.handleMove = function(o, s) {
        return function() {
          return i.move(o, s);
        };
      }, i.insert = function(o, s) {
        return i.updateArrayField(function(a) {
          return ll(a, o, s);
        }, function(a) {
          return ll(a, o, null);
        }, function(a) {
          return ll(a, o, null);
        });
      }, i.handleInsert = function(o, s) {
        return function() {
          return i.insert(o, s);
        };
      }, i.replace = function(o, s) {
        return i.updateArrayField(function(a) {
          return IC(a, o, s);
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
      }, i.remove = i.remove.bind(Rh(i)), i.pop = i.pop.bind(Rh(i)), i;
    }
    var n = t.prototype;
    return n.componentDidUpdate = function(i) {
      this.props.validateOnChange && this.props.formik.validateOnChange && !rn(se(i.formik.values, i.name), se(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
    }, n.remove = function(i) {
      var o;
      return this.updateArrayField(
        // so this gets call 3 times
        function(s) {
          var a = s ? nr(s) : [];
          return o || (o = a[i]), Ce(a.splice) && a.splice(i, 1), Ce(a.every) && a.every(function(l) {
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
      return s ? w.createElement(s, d) : a ? a(d) : l ? typeof l == "function" ? l(d) : Xg(l) ? null : w.Children.only(l) : null;
    }, t;
  }(w.Component);
  zC.defaultProps = {
    validateOnChange: !0
  };
  var UC = /* @__PURE__ */ function(e) {
    Qg(t, e);
    function t() {
      return e.apply(this, arguments) || this;
    }
    var n = t.prototype;
    return n.shouldComponentUpdate = function(i) {
      return se(this.props.formik.errors, this.props.name) !== se(i.formik.errors, this.props.name) || se(this.props.formik.touched, this.props.name) !== se(i.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(i).length;
    }, n.render = function() {
      var i = this.props, o = i.component, s = i.formik, a = i.render, l = i.children, u = i.name, c = cn(i, ["component", "formik", "render", "children", "name"]), f = se(s.touched, u), d = se(s.errors, u);
      return f && d ? a ? Ce(a) ? a(d) : null : l ? Ce(l) ? l(d) : null : o ? w.createElement(o, c, d) : d : null;
    }, t;
  }(w.Component), BC = /* @__PURE__ */ LC(UC), Nh, Jg = { exports: {} }, ai = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  Jg.exports = function() {
    if (Nh)
      return ai;
    Nh = 1;
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
    return ai.Fragment = n, ai.jsx = s, ai.jsxs = s, ai;
  }();
  var No = Jg.exports;
  const ev = w.createContext(void 0);
  function co() {
    const e = w.useContext(ev);
    if (e === void 0)
      throw new Error("useWizard must be used within the Wizard app!");
    return e;
  }
  function HC({ step: e }) {
    const { submitForm: t, setFieldValue: n } = lo();
    return w.useEffect(() => {
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
  function bh(e) {
    return e[window.location.hash.slice(1)];
  }
  function WC({ steps: e, onCompleted: t, onStepChanged: n, enableHash: r, header: i, wrapper: o, footer: s }) {
    let a = e[0], l = {};
    r && (l = function(D) {
      const $ = {};
      return D.forEach((I) => {
        const K = I.id.replace(/[A-Z]/g, (A, N) => (N > 0 ? "-" : "") + A.toLowerCase());
        $[K] = I;
      }), $;
    }(e), a = bh(l) || a);
    const [u, c] = w.useState(a), [f, d] = w.useState(!1), [y, g] = w.useState({}), v = w.useRef(null), T = e.findIndex((D) => D.id === u.id), p = T + 1, h = e.length, m = p === 1, S = p === h;
    function P() {
      const D = bh(l);
      (D == null ? void 0 : D.id) !== u.id && k(D, v.current);
    }
    async function E(D, $, I) {
      let K;
      for (let A = 0; A < D.length; ++A) {
        const N = D[A];
        if (N.shouldSkip === void 0) {
          K = N;
          break;
        }
        if (!await N.shouldSkip($, I)) {
          K = N;
          break;
        }
      }
      return K;
    }
    function C(D) {
      t && (D = function($) {
        let I = {};
        return Object.keys($).forEach((K) => {
          I = { ...I, ...$[K] };
        }), I;
      }(D), t(D));
    }
    function k(D, $) {
      c(D), $.resetForm({ values: he(D) });
    }
    async function b(D, $) {
      try {
        u.onSubmit && ($.setStatus(""), d(!0), D = await u.onSubmit(D, y, $), d(!1));
        const I = { ...y, [u.id]: D };
        g(I);
        const K = await async function(A) {
          const N = e.slice(T + 1);
          return await E(N, A, 1);
        }(I);
        if (!K)
          return void C(I);
        n && n(u, K, I), k(K, $);
      } catch (I) {
        console.log(I), d(!1), $.setStatus(I.message);
      }
    }
    async function R(D, $) {
      let I = null;
      (u.keepValuesOnPrevious ?? 1) && (I = { ...y, [u.id]: D }, g(I)), I = I || y;
      const K = await async function(A) {
        const N = e.slice(0, T).reverse();
        return await E(N, A, -1);
      }(I);
      K && (n && n(u, K, I), k(K, $));
    }
    function z(D, $) {
      c({ ...u, [D]: $ });
    }
    function he(D) {
      return y[D.id] || D.initialValues || {};
    }
    function oe(D) {
      return { values: y, setValues: g, setIsLoading: d, updateStep: z, goToPreviousStep: () => R(D.values, D), goToNextStep: () => b(D.values, D), goToStep: ($) => function(I, K) {
        k(e[I], K);
      }($, D), activeStep: u, stepNumber: p, totalSteps: h, isLoading: f, isFirstStep: m, isLastStep: S };
    }
    return w.useEffect(() => {
      if (r)
        return window.addEventListener("hashchange", P), function(D, $) {
          const I = Object.keys(D).find((K) => D[K].id === $.id);
          window.location.hash = I || window.location.hash;
        }(l, u), () => window.removeEventListener("hashchange", P);
    }, [u]), No.jsx(OC, { initialValues: he(u), validationSchema: u.validationSchema, validate: function(D) {
      if (D)
        return ($) => D($, y);
    }(u.validate), validateOnChange: u.validateOnChange ?? !0, validateOnBlur: u.validateOnBlur ?? !0, onSubmit: b, innerRef: v, children: (D) => {
      const $ = oe(D), I = o || u.component;
      return No.jsx(ev.Provider, { value: $, children: No.jsxs(qg, { children: [i, u.submitOnChange && No.jsx(HC, { step: u }), I, s] }) });
    } });
  }
  function KC() {
    const { goToStep: e } = co();
    return /* @__PURE__ */ O.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: "Warning" }),
      /* @__PURE__ */ O.jsx("p", { children: "Seems like you did not fill your email. Would you like to do it?" }),
      /* @__PURE__ */ O.jsxs("p", { children: [
        /* @__PURE__ */ O.jsx("b", { children: "Note:" }),
        " This step is automatically skipped if user filled their email in the first step."
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ O.jsx("button", { className: "btn", type: "submit", children: "No" }),
        /* @__PURE__ */ O.jsx("button", { className: "btn", type: "button", onClick: () => e(0), children: "Yes" })
      ] })
    ] });
  }
  function GC() {
    return /* @__PURE__ */ O.jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: "Async" }),
      /* @__PURE__ */ O.jsx("p", { children: 'Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.' })
    ] });
  }
  function YC() {
    const { values: e, updateStep: t } = co(), [n, r] = w.useState(!0);
    function i() {
      const s = !n;
      r(s), t("hideNext", s);
    }
    let o = {};
    return Object.keys(e).forEach((s) => {
      o = {
        ...o,
        ...e[s]
      };
    }), /* @__PURE__ */ O.jsxs("div", { className: "prose prose-neutral max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: "Congratulations!" }),
      /* @__PURE__ */ O.jsxs("div", { className: "flex flex-wrap gap-4 justify-between", children: [
        /* @__PURE__ */ O.jsxs("p", { className: "my-0", children: [
          "You did it ",
          /* @__PURE__ */ O.jsx("b", { children: e.Username.username }),
          "! 🎉",
          /* @__PURE__ */ O.jsx("br", {}),
          "Here's your input:"
        ] }),
        /* @__PURE__ */ O.jsx("button", { className: "btn", onClick: i, type: "button", children: "Toggle hideNext" })
      ] }),
      /* @__PURE__ */ O.jsx("code", { className: "text-sm sm:text-base bg-transparent", children: /* @__PURE__ */ O.jsx("pre", { className: "mt-0", children: JSON.stringify(o, null, 2) }) })
    ] });
  }
  const QC = [
    {
      id: "StepSlack",
      initialValues: {
        useSlack: "false",
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: ""
      },
      // attrs defined under "fields" are for custom step renderer made
      // just for this demo folder, otherwise these aren't part of
      // the step config object
      fields: {
        inputTypes: {
          useSlack: "checkbox",
          firstName: "text",
          lastName: "text",
          age: "number",
          email: "email"
        },
        placeholders: {
          firstName: "e.g. John",
          lastName: "e.g. Doe",
          age: "e.g. 18",
          email: "e.g. john@doe.com"
        }
      },
      validationSchema: ix,
      disableNextOnErrors: !0
    },
    {
      id: "Username",
      helpText: "Username should include your first name. This step is to demonstrate that we can validate field based on what user typed in the previous step.",
      initialValues: {
        username: ""
      },
      fields: {
        inputTypes: {
          username: "text"
        }
      },
      validate: ox,
      disableNextOnErrors: !0
    },
    {
      id: "EmailCheck",
      component: /* @__PURE__ */ O.jsx(KC, {}),
      hideNext: !0,
      hidePrevious: !0,
      shouldSkip: (e, t) => t === -1 ? !0 : !!e.StepSlack.email
    },
    {
      id: "Async",
      component: /* @__PURE__ */ O.jsx(GC, {}),
      onSubmit: async (e, t, n) => (await ((i) => new Promise((o) => setTimeout(o, i)))(2e3), e)
    },
    {
      id: "Final",
      component: /* @__PURE__ */ O.jsx(YC, {}),
      hideNext: !0,
      hidePrevious: !1
    }
  ], nf = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never"
  }), va = w.createContext({}), Sa = w.createContext(null), rf = typeof document < "u", of = rf ? w.useLayoutEffect : w.useEffect, tv = w.createContext({ strict: !1 }), sf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), XC = "framerAppearId", nv = "data-" + sf(XC), ZC = {
    skipAnimations: !1,
    useManualTiming: !1
  };
  class Lh {
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
  function qC(e) {
    let t = new Lh(), n = new Lh(), r = 0, i = !1, o = !1;
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
  const bo = [
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
  ], JC = 40;
  function rv(e, t) {
    let n = !1, r = !0;
    const i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    }, o = bo.reduce((f, d) => (f[d] = qC(() => n = !0), f), {}), s = (f) => {
      o[f].process(i);
    }, a = () => {
      const f = performance.now();
      n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, JC), 1), i.timestamp = f, i.isProcessing = !0, bo.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(a));
    }, l = () => {
      n = !0, r = !0, i.isProcessing || e(a);
    };
    return { schedule: bo.reduce((f, d) => {
      const y = o[d];
      return f[d] = (g, v = !1, T = !1) => (n || l(), y.schedule(g, v, T)), f;
    }, {}), cancel: (f) => bo.forEach((d) => o[d].cancel(f)), state: i, steps: o };
  }
  const { schedule: af, cancel: KO } = rv(queueMicrotask, !1);
  function ek(e, t, n, r) {
    const { visualElement: i } = w.useContext(va), o = w.useContext(tv), s = w.useContext(Sa), a = w.useContext(nf).reducedMotion, l = w.useRef();
    r = r || o.renderer, !l.current && r && (l.current = r(e, {
      visualState: t,
      parent: i,
      props: n,
      presenceContext: s,
      blockInitialAnimation: s ? s.initial === !1 : !1,
      reducedMotionConfig: a
    }));
    const u = l.current;
    w.useInsertionEffect(() => {
      u && u.update(n, s);
    });
    const c = w.useRef(!!(n[nv] && !window.HandoffComplete));
    return of(() => {
      u && (af.postRender(u.render), c.current && u.animationState && u.animationState.animateChanges());
    }), w.useEffect(() => {
      u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
    }), u;
  }
  function _r(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
  }
  function tk(e, t, n) {
    return w.useCallback(
      (r) => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : _r(n) && (n.current = r));
      },
      /**
       * Only pass a new ref callback to React if we've received a visual element
       * factory. Otherwise we'll be mounting/remounting every time externalRef
       * or other dependencies change.
       */
      [t]
    );
  }
  function Xi(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function wa(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
  }
  const lf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ], uf = ["initial", ...lf];
  function xa(e) {
    return wa(e.animate) || uf.some((t) => Xi(e[t]));
  }
  function iv(e) {
    return !!(xa(e) || e.variants);
  }
  function nk(e, t) {
    if (xa(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || Xi(n) ? n : void 0,
        animate: Xi(r) ? r : void 0
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function rk(e) {
    const { initial: t, animate: n } = nk(e, w.useContext(va));
    return w.useMemo(() => ({ initial: t, animate: n }), [Vh(t), Vh(n)]);
  }
  function Vh(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const $h = {
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
  }, Zi = {};
  for (const e in $h)
    Zi[e] = {
      isEnabled: (t) => $h[e].some((n) => !!t[n])
    };
  function ik(e) {
    for (const t in e)
      Zi[t] = {
        ...Zi[t],
        ...e[t]
      };
  }
  const cf = w.createContext({}), ov = w.createContext({}), ok = Symbol.for("motionComponentSymbol");
  function sk({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && ik(e);
    function o(a, l) {
      let u;
      const c = {
        ...w.useContext(nf),
        ...a,
        layoutId: ak(a)
      }, { isStatic: f } = c, d = rk(a), y = r(a, f);
      if (!f && rf) {
        d.visualElement = ek(i, y, c, t);
        const g = w.useContext(ov), v = w.useContext(tv).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(
          // Note: Pass the full new combined props to correctly re-render dynamic feature components.
          c,
          v,
          e,
          g
        ));
      }
      return O.jsxs(va.Provider, { value: d, children: [u && d.visualElement ? O.jsx(u, { visualElement: d.visualElement, ...c }) : null, n(i, a, tk(y, d.visualElement, l), y, f, d.visualElement)] });
    }
    const s = w.forwardRef(o);
    return s[ok] = i, s;
  }
  function ak({ layoutId: e }) {
    const t = w.useContext(cf).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function lk(e) {
    function t(r, i = {}) {
      return sk(e(r, i));
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
  const uk = [
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
  function ff(e) {
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
        !!(uk.indexOf(e) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/u.test(e))
      )
    );
  }
  const Os = {};
  function ck(e) {
    Object.assign(Os, e);
  }
  const fo = [
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
  ], fr = new Set(fo);
  function sv(e, { layout: t, layoutId: n }) {
    return fr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Os[e] || e === "opacity");
  }
  const Re = (e) => !!(e && e.getVelocity), fk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  }, dk = fo.length;
  function hk(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < dk; s++) {
      const a = fo[s];
      if (e[a] !== void 0) {
        const l = fk[a] || a;
        o += `${l}(${e[a]}) `;
      }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o;
  }
  const av = (e) => (t) => typeof t == "string" && t.startsWith(e), lv = av("--"), pk = av("var(--"), df = (e) => pk(e) ? mk.test(e.split("/*")[0].trim()) : !1, mk = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, yk = (e, t) => t && typeof e == "number" ? t.transform(e) : e, kn = (e, t, n) => n > t ? t : n < e ? e : n, Zr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e
  }, ki = {
    ...Zr,
    transform: (e) => kn(0, 1, e)
  }, Lo = {
    ...Zr,
    default: 1
  }, _i = (e) => Math.round(e * 1e5) / 1e5, hf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, gk = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, vk = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
  function ho(e) {
    return typeof e == "string";
  }
  const po = (e) => ({
    test: (t) => ho(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }), en = po("deg"), Ot = po("%"), V = po("px"), Sk = po("vh"), wk = po("vw"), Ih = {
    ...Ot,
    parse: (e) => Ot.parse(e) / 100,
    transform: (e) => Ot.transform(e * 100)
  }, zh = {
    ...Zr,
    transform: Math.round
  }, uv = {
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
    scale: Lo,
    scaleX: Lo,
    scaleY: Lo,
    scaleZ: Lo,
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
    opacity: ki,
    originX: Ih,
    originY: Ih,
    originZ: V,
    // Misc
    zIndex: zh,
    backgroundPositionX: V,
    backgroundPositionY: V,
    // SVG
    fillOpacity: ki,
    strokeOpacity: ki,
    numOctaves: zh
  };
  function pf(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1, u = !1, c = !0;
    for (const f in t) {
      const d = t[f];
      if (lv(f)) {
        o[f] = d;
        continue;
      }
      const y = uv[f], g = yk(d, y);
      if (fr.has(f)) {
        if (l = !0, s[f] = g, !c)
          continue;
        d !== (y.default || 0) && (c = !1);
      } else
        f.startsWith("origin") ? (u = !0, a[f] = g) : i[f] = g;
    }
    if (t.transform || (l || r ? i.transform = hk(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
      const { originX: f = "50%", originY: d = "50%", originZ: y = 0 } = a;
      i.transformOrigin = `${f} ${d} ${y}`;
    }
  }
  const mf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });
  function cv(e, t, n) {
    for (const r in t)
      !Re(t[r]) && !sv(r, n) && (e[r] = t[r]);
  }
  function xk({ transformTemplate: e }, t, n) {
    return w.useMemo(() => {
      const r = mf();
      return pf(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
    }, [t]);
  }
  function Tk(e, t, n) {
    const r = e.style || {}, i = {};
    return cv(i, r, e), Object.assign(i, xk(e, t, n)), i;
  }
  function Ek(e, t, n) {
    const r = {}, i = Tk(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r;
  }
  const Pk = /* @__PURE__ */ new Set([
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
  function js(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Pk.has(e);
  }
  let fv = (e) => !js(e);
  function Ck(e) {
    e && (fv = (t) => t.startsWith("on") ? !js(t) : e(t));
  }
  try {
    Ck(require("@emotion/is-prop-valid").default);
  } catch {
  }
  function kk(e, t, n) {
    const r = {};
    for (const i in e)
      i === "values" && typeof e.values == "object" || (fv(i) || n === !0 && js(i) || !t && !js(i) || // If trying to use native HTML drag events, forward drag listeners
      e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
  }
  function Uh(e, t, n) {
    return typeof e == "string" ? e : V.transform(t + n * e);
  }
  function _k(e, t, n) {
    const r = Uh(t, e.x, e.width), i = Uh(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const Ak = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  }, Ok = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function jk(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? Ak : Ok;
    e[o.offset] = V.transform(-r);
    const s = V.transform(t), a = V.transform(n);
    e[o.array] = `${s} ${a}`;
  }
  function yf(e, {
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
    if (pf(e, u, c, d), f) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    e.attrs = e.style, e.style = {};
    const { attrs: y, style: g, dimensions: v } = e;
    y.transform && (v && (g.transform = y.transform), delete y.transform), v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = _k(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (y.x = t), n !== void 0 && (y.y = n), r !== void 0 && (y.scale = r), s !== void 0 && jk(y, s, a, l, !1);
  }
  const dv = () => ({
    ...mf(),
    attrs: {}
  }), gf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function Fk(e, t, n, r) {
    const i = w.useMemo(() => {
      const o = dv();
      return yf(o, t, { enableHardwareAcceleration: !1 }, gf(r), e.transformTemplate), {
        ...o.attrs,
        style: { ...o.style }
      };
    }, [t]);
    if (e.style) {
      const o = {};
      cv(o, e.style, e), i.style = { ...o, ...i.style };
    }
    return i;
  }
  function Rk(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
      const l = (ff(n) ? Fk : Ek)(r, o, s, n), u = kk(r, typeof n == "string", e), c = n !== w.Fragment ? { ...u, ...l, ref: i } : {}, { children: f } = r, d = w.useMemo(() => Re(f) ? f.get() : f, [f]);
      return w.createElement(n, {
        ...c,
        children: d
      });
    };
  }
  function hv(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
      e.style.setProperty(o, n[o]);
  }
  const pv = /* @__PURE__ */ new Set([
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
  function mv(e, t, n, r) {
    hv(e, t, void 0, r);
    for (const i in t.attrs)
      e.setAttribute(pv.has(i) ? i : sf(i), t.attrs[i]);
  }
  function vf(e, t, n) {
    var r;
    const { style: i } = e, o = {};
    for (const s in i)
      (Re(i[s]) || t.style && Re(t.style[s]) || sv(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o;
  }
  function yv(e, t, n) {
    const r = vf(e, t, n);
    for (const i in e)
      if (Re(e[i]) || Re(t[i])) {
        const o = fo.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
        r[o] = e[i];
      }
    return r;
  }
  function Sf(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t;
  }
  function gv(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const _u = (e) => Array.isArray(e), Dk = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Mk = (e) => _u(e) ? e[e.length - 1] || 0 : e;
  function Jo(e) {
    const t = Re(e) ? e.get() : e;
    return Dk(t) ? t.toValue() : t;
  }
  function Nk({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
      latestValues: bk(r, i, o, e),
      renderState: t()
    };
    return n && (s.mount = (a) => n(r, a, s)), s;
  }
  const vv = (e) => (t, n) => {
    const r = w.useContext(va), i = w.useContext(Sa), o = () => Nk(e, t, r, i);
    return n ? o() : gv(o);
  };
  function bk(e, t, n, r) {
    const i = {}, o = r(e, {});
    for (const d in o)
      i[d] = Jo(o[d]);
    let { initial: s, animate: a } = e;
    const l = xa(e), u = iv(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !wa(f) && (Array.isArray(f) ? f : [f]).forEach((y) => {
      const g = Sf(e, y);
      if (!g)
        return;
      const { transitionEnd: v, transition: T, ...p } = g;
      for (const h in p) {
        let m = p[h];
        if (Array.isArray(m)) {
          const S = c ? m.length - 1 : 0;
          m = m[S];
        }
        m !== null && (i[h] = m);
      }
      for (const h in v)
        i[h] = v[h];
    }), i;
  }
  const De = (e) => e, { schedule: Z, cancel: _n, state: Pe, steps: ul } = rv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0), Lk = {
    useVisualState: vv({
      scrapeMotionValuesFromProps: yv,
      createRenderState: dv,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Z.read(() => {
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
        }), Z.render(() => {
          yf(n, r, { enableHardwareAcceleration: !1 }, gf(t.tagName), e.transformTemplate), mv(t, n);
        });
      }
    })
  }, Vk = {
    useVisualState: vv({
      scrapeMotionValuesFromProps: vf,
      createRenderState: mf
    })
  };
  function $k(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...ff(e) ? Lk : Vk,
      preloadedFeatures: n,
      useRender: Rk(t),
      createVisualElement: r,
      Component: e
    };
  }
  function It(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const Sv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
  function Ta(e, t = "page") {
    return {
      point: {
        x: e[`${t}X`],
        y: e[`${t}Y`]
      }
    };
  }
  const Ik = (e) => (t) => Sv(t) && e(t, Ta(t));
  function Ut(e, t, n, r) {
    return It(e, t, Ik(n), r);
  }
  const zk = (e, t) => (n) => t(e(n)), Bt = (...e) => e.reduce(zk);
  function wv(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? (t = e, n) : !1;
    };
  }
  const Bh = wv("dragHorizontal"), Hh = wv("dragVertical");
  function xv(e) {
    let t = !1;
    if (e === "y")
      t = Hh();
    else if (e === "x")
      t = Bh();
    else {
      const n = Bh(), r = Hh();
      n && r ? t = () => {
        n(), r();
      } : (n && n(), r && r());
    }
    return t;
  }
  function Tv() {
    const e = xv(!0);
    return e ? (e(), !1) : !0;
  }
  class Dn {
    constructor(t) {
      this.isMounted = !1, this.node = t;
    }
    update() {
    }
  }
  function Wh(e, t) {
    const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => {
      if (o.pointerType === "touch" || Tv())
        return;
      const a = e.getProps();
      e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && Z.postRender(() => l(o, s));
    };
    return Ut(e.current, n, i, {
      passive: !e.getProps()[r]
    });
  }
  class Uk extends Dn {
    mount() {
      this.unmount = Bt(Wh(this.node, !0), Wh(this.node, !1));
    }
    unmount() {
    }
  }
  class Bk extends Dn {
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
      this.unmount = Bt(It(this.node.current, "focus", () => this.onFocus()), It(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  }
  const Ev = (e, t) => t ? e === t ? !0 : Ev(e, t.parentElement) : !1;
  function cl(e, t) {
    if (!t)
      return;
    const n = new PointerEvent("pointer" + e);
    t(n, Ta(n));
  }
  class Hk extends Dn {
    constructor() {
      super(...arguments), this.removeStartListeners = De, this.removeEndListeners = De, this.removeAccessibleListeners = De, this.startPointerPress = (t, n) => {
        if (this.isPressing)
          return;
        this.removeEndListeners();
        const r = this.node.getProps(), o = Ut(window, "pointerup", (a, l) => {
          if (!this.checkPressEnd())
            return;
          const { onTap: u, onTapCancel: c, globalTapTarget: f } = this.node.getProps(), d = !f && !Ev(this.node.current, a.target) ? c : u;
          d && Z.update(() => d(a, l));
        }, {
          passive: !(r.onTap || r.onPointerUp)
        }), s = Ut(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
          passive: !(r.onTapCancel || r.onPointerCancel)
        });
        this.removeEndListeners = Bt(o, s), this.startPress(t, n);
      }, this.startAccessiblePress = () => {
        const t = (o) => {
          if (o.key !== "Enter" || this.isPressing)
            return;
          const s = (a) => {
            a.key !== "Enter" || !this.checkPressEnd() || cl("up", (l, u) => {
              const { onTap: c } = this.node.getProps();
              c && Z.postRender(() => c(l, u));
            });
          };
          this.removeEndListeners(), this.removeEndListeners = It(this.node.current, "keyup", s), cl("down", (a, l) => {
            this.startPress(a, l);
          });
        }, n = It(this.node.current, "keydown", t), r = () => {
          this.isPressing && cl("cancel", (o, s) => this.cancelPress(o, s));
        }, i = It(this.node.current, "blur", r);
        this.removeAccessibleListeners = Bt(n, i);
      };
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Z.postRender(() => r(t, n));
    }
    checkPressEnd() {
      return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Tv();
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd())
        return;
      const { onTapCancel: r } = this.node.getProps();
      r && Z.postRender(() => r(t, n));
    }
    mount() {
      const t = this.node.getProps(), n = Ut(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart)
      }), r = It(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Bt(n, r);
    }
    unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
    }
  }
  const Au = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap(), Wk = (e) => {
    const t = Au.get(e.target);
    t && t(e);
  }, Kk = (e) => {
    e.forEach(Wk);
  };
  function Gk({ root: e, ...t }) {
    const n = e || document;
    fl.has(n) || fl.set(n, {});
    const r = fl.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Kk, { root: e, ...t })), r[i];
  }
  function Yk(e, t, n) {
    const r = Gk(t);
    return Au.set(e, n), r.observe(e), () => {
      Au.delete(e), r.unobserve(e);
    };
  }
  const Qk = {
    some: 0,
    all: 1
  };
  class Xk extends Dn {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Qk[i]
      }, a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
          return;
        u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
        d && d(l);
      };
      return Yk(this.node.current, s, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u")
        return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(Zk(t, n)) && this.startObserver();
    }
    unmount() {
    }
  }
  function Zk({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const qk = {
    inView: {
      Feature: Xk
    },
    tap: {
      Feature: Hk
    },
    focus: {
      Feature: Bk
    },
    hover: {
      Feature: Uk
    }
  };
  function Pv(e, t) {
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
  function Jk(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t;
  }
  function e_(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
  }
  function Ea(e, t, n) {
    const r = e.getProps();
    return Sf(r, t, n !== void 0 ? n : r.custom, Jk(e), e_(e));
  }
  const xn = (e) => e * 1e3, Ht = (e) => e / 1e3, t_ = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }, n_ = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }), r_ = {
    type: "keyframes",
    duration: 0.8
  }, i_ = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  }, o_ = (e, { keyframes: t }) => t.length > 2 ? r_ : fr.has(e) ? e.startsWith("scale") ? n_(t[1]) : t_ : i_;
  function s_({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length;
  }
  function wf(e, t) {
    return e[t] || e.default || e;
  }
  const a_ = (e) => e !== null;
  function Pa(e, { repeat: t, repeatType: n = "loop" }, r) {
    const i = e.filter(a_), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r;
  }
  let es;
  function l_() {
    es = void 0;
  }
  const Tn = {
    now: () => (es === void 0 && Tn.set(Pe.isProcessing || ZC.useManualTiming ? Pe.timestamp : performance.now()), es),
    set: (e) => {
      es = e, queueMicrotask(l_);
    }
  }, Cv = (e) => /^0[^.\s]+$/u.test(e);
  function u_(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Cv(e) : !0;
  }
  let Ou = De;
  const kv = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), c_ = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function f_(e) {
    const t = c_.exec(e);
    if (!t)
      return [,];
    const [, n, r, i] = t;
    return [`--${n ?? r}`, i];
  }
  function _v(e, t, n = 1) {
    const [r, i] = f_(e);
    if (!r)
      return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const s = o.trim();
      return kv(s) ? parseFloat(s) : s;
    }
    return df(i) ? _v(i, t, n + 1) : i;
  }
  const d_ = /* @__PURE__ */ new Set([
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
  ]), Kh = (e) => e === Zr || e === V, Gh = (e, t) => parseFloat(e.split(", ")[t]), Yh = (e, t) => (n, { transform: r }) => {
    if (r === "none" || !r)
      return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
      return Gh(i[1], t);
    {
      const o = r.match(/^matrix\((.+)\)$/u);
      return o ? Gh(o[1], e) : 0;
    }
  }, h_ = /* @__PURE__ */ new Set(["x", "y", "z"]), p_ = fo.filter((e) => !h_.has(e));
  function m_(e) {
    const t = [];
    return p_.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t;
  }
  const Wr = {
    // Dimensions
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    // Transform
    x: Yh(4, 13),
    y: Yh(5, 14)
  };
  Wr.translateX = Wr.x;
  Wr.translateY = Wr.y;
  const Av = (e) => (t) => t.test(e), y_ = {
    test: (e) => e === "auto",
    parse: (e) => e
  }, Ov = [Zr, V, Ot, en, wk, Sk, y_], Qh = (e) => Ov.find(Av(e)), Qn = /* @__PURE__ */ new Set();
  let ju = !1, Fu = !1;
  function jv() {
    if (Fu) {
      const e = Array.from(Qn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
      t.forEach((r) => {
        const i = m_(r);
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
    Fu = !1, ju = !1, Qn.forEach((e) => e.complete()), Qn.clear();
  }
  function Fv() {
    Qn.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (Fu = !0);
    });
  }
  function g_() {
    Fv(), jv();
  }
  class xf {
    constructor(t, n, r, i, o, s = !1) {
      this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
    }
    scheduleResolve() {
      this.isScheduled = !0, this.isAsync ? (Qn.add(this), ju || (ju = !0, Z.read(Fv), Z.resolveKeyframes(jv))) : (this.readKeyframes(), this.complete());
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
  const Tf = (e, t) => (n) => !!(ho(n) && vk.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Rv = (e, t, n) => (r) => {
    if (!ho(r))
      return r;
    const [i, o, s, a] = r.match(hf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  }, v_ = (e) => kn(0, 255, e), dl = {
    ...Zr,
    transform: (e) => Math.round(v_(e))
  }, Wn = {
    test: Tf("rgb", "red"),
    parse: Rv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + dl.transform(e) + ", " + dl.transform(t) + ", " + dl.transform(n) + ", " + _i(ki.transform(r)) + ")"
  };
  function S_(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    };
  }
  const Ru = {
    test: Tf("#"),
    parse: S_,
    transform: Wn.transform
  }, Ar = {
    test: Tf("hsl", "hue"),
    parse: Rv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ot.transform(_i(t)) + ", " + Ot.transform(_i(n)) + ", " + _i(ki.transform(r)) + ")"
  }, je = {
    test: (e) => Wn.test(e) || Ru.test(e) || Ar.test(e),
    parse: (e) => Wn.test(e) ? Wn.parse(e) : Ar.test(e) ? Ar.parse(e) : Ru.parse(e),
    transform: (e) => ho(e) ? e : e.hasOwnProperty("red") ? Wn.transform(e) : Ar.transform(e)
  };
  function w_(e) {
    var t, n;
    return isNaN(e) && ho(e) && (((t = e.match(hf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(gk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
  }
  const Dv = "number", Mv = "color", x_ = "var", T_ = "var(", Xh = "${}", E_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function qi(e) {
    const t = e.toString(), n = [], r = {
      color: [],
      number: [],
      var: []
    }, i = [];
    let o = 0;
    const a = t.replace(E_, (l) => (je.test(l) ? (r.color.push(o), i.push(Mv), n.push(je.parse(l))) : l.startsWith(T_) ? (r.var.push(o), i.push(x_), n.push(l)) : (r.number.push(o), i.push(Dv), n.push(parseFloat(l))), ++o, Xh)).split(Xh);
    return { values: n, split: a, indexes: r, types: i };
  }
  function Nv(e) {
    return qi(e).values;
  }
  function bv(e) {
    const { split: t, types: n } = qi(e), r = t.length;
    return (i) => {
      let o = "";
      for (let s = 0; s < r; s++)
        if (o += t[s], i[s] !== void 0) {
          const a = n[s];
          a === Dv ? o += _i(i[s]) : a === Mv ? o += je.transform(i[s]) : o += i[s];
        }
      return o;
    };
  }
  const P_ = (e) => typeof e == "number" ? 0 : e;
  function C_(e) {
    const t = Nv(e);
    return bv(e)(t.map(P_));
  }
  const An = {
    test: w_,
    parse: Nv,
    createTransformer: bv,
    getAnimatableNone: C_
  }, k_ = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function __(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
      return e;
    const [r] = n.match(hf) || [];
    if (!r)
      return e;
    const i = n.replace(r, "");
    let o = k_.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const A_ = /\b([a-z-]*)\(.*?\)/gu, Du = {
    ...An,
    getAnimatableNone: (e) => {
      const t = e.match(A_);
      return t ? t.map(__).join(" ") : e;
    }
  }, O_ = {
    ...uv,
    // Color props
    color: je,
    backgroundColor: je,
    outlineColor: je,
    fill: je,
    stroke: je,
    // Border props
    borderColor: je,
    borderTopColor: je,
    borderRightColor: je,
    borderBottomColor: je,
    borderLeftColor: je,
    filter: Du,
    WebkitFilter: Du
  }, Ef = (e) => O_[e];
  function Lv(e, t) {
    let n = Ef(e);
    return n !== Du && (n = An), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
  }
  const j_ = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function F_(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
      const o = e[r];
      typeof o == "string" && !j_.has(o) && qi(o).values.length && (i = e[r]), r++;
    }
    if (i && n)
      for (const o of t)
        e[o] = Lv(n, i);
  }
  class Vv extends xf {
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
        if (typeof u == "string" && df(u)) {
          const c = _v(u, n.current);
          c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
        }
      }
      if (this.resolveNoneKeyframes(), !d_.has(r) || t.length !== 2)
        return;
      const [i, o] = t, s = Qh(i), a = Qh(o);
      if (s !== a)
        if (Kh(s) && Kh(a))
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
        u_(t[i]) && r.push(i);
      r.length && F_(t, r, n);
    }
    measureInitialState() {
      const { element: t, unresolvedKeyframes: n, name: r } = this;
      if (!t.current)
        return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Wr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
      i[s] = Wr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
        n.getValue(l).set(u);
      }), this.resolveNoneKeyframes();
    }
  }
  function R_(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const Zh = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
  (An.test(e) || e === "0") && // And it contains numbers and/or colors
  !e.startsWith("url("));
  function D_(e) {
    const t = e[0];
    if (e.length === 1)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (e[n] !== t)
        return !0;
  }
  function M_(e, t, n, r) {
    const i = e[0];
    if (i === null)
      return !1;
    if (t === "display" || t === "visibility")
      return !0;
    const o = e[e.length - 1], s = Zh(i, t), a = Zh(o, t);
    return !s || !a ? !1 : D_(e) || n === "spring" && r;
  }
  class $v {
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
      return !this._resolved && !this.hasAttemptedResolve && g_(), this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(t, n) {
      this.hasAttemptedResolve = !0;
      const { name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
      if (!u && !M_(t, r, i, o))
        if (s)
          this.options.duration = 0;
        else {
          l == null || l(Pa(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
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
  function Iv(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const N_ = 5;
  function zv(e, t, n) {
    const r = Math.max(t - N_, 0);
    return Iv(n - e(r), t - r);
  }
  const hl = 1e-3, b_ = 0.01, L_ = 10, V_ = 0.05, $_ = 1;
  function I_({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
    let i, o, s = 1 - t;
    s = kn(V_, $_, s), e = kn(b_, L_, Ht(e)), s < 1 ? (i = (u) => {
      const c = u * s, f = c * e, d = c - n, y = Mu(u, s), g = Math.exp(-f);
      return hl - d / y * g;
    }, o = (u) => {
      const f = u * s * e, d = f * n + n, y = Math.pow(s, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), v = Mu(Math.pow(u, 2), s);
      return (-i(u) + hl > 0 ? -1 : 1) * ((d - y) * g) / v;
    }) : (i = (u) => {
      const c = Math.exp(-u * e), f = (u - n) * e + 1;
      return -hl + c * f;
    }, o = (u) => {
      const c = Math.exp(-u * e), f = (n - u) * (e * e);
      return c * f;
    });
    const a = 5 / e, l = U_(i, o, a);
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
  const z_ = 12;
  function U_(e, t, n) {
    let r = n;
    for (let i = 1; i < z_; i++)
      r = r - e(r) / t(r);
    return r;
  }
  function Mu(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const B_ = ["duration", "bounce"], H_ = ["stiffness", "damping", "mass"];
  function qh(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function W_(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e
    };
    if (!qh(e, H_) && qh(e, B_)) {
      const n = I_(e);
      t = {
        ...t,
        ...n,
        mass: 1
      }, t.isResolvedFromDuration = !0;
    }
    return t;
  }
  function Uv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, duration: c, velocity: f, isResolvedFromDuration: d } = W_({
      ...r,
      velocity: -Ht(r.velocity || 0)
    }), y = f || 0, g = l / (2 * Math.sqrt(a * u)), v = o - i, T = Ht(Math.sqrt(a / u)), p = Math.abs(v) < 5;
    n || (n = p ? 0.01 : 2), t || (t = p ? 5e-3 : 0.5);
    let h;
    if (g < 1) {
      const m = Mu(T, g);
      h = (S) => {
        const P = Math.exp(-g * T * S);
        return o - P * ((y + g * T * v) / m * Math.sin(m * S) + v * Math.cos(m * S));
      };
    } else if (g === 1)
      h = (m) => o - Math.exp(-T * m) * (v + (y + T * v) * m);
    else {
      const m = T * Math.sqrt(g * g - 1);
      h = (S) => {
        const P = Math.exp(-g * T * S), E = Math.min(m * S, 300);
        return o - P * ((y + g * T * v) * Math.sinh(E) + m * v * Math.cosh(E)) / m;
      };
    }
    return {
      calculatedDuration: d && c || null,
      next: (m) => {
        const S = h(m);
        if (d)
          s.done = m >= c;
        else {
          let P = y;
          m !== 0 && (g < 1 ? P = zv(h, m, S) : P = 0);
          const E = Math.abs(P) <= n, C = Math.abs(o - S) <= t;
          s.done = E && C;
        }
        return s.value = s.done ? o : S, s;
      }
    };
  }
  function Jh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
    const f = e[0], d = {
      done: !1,
      value: f
    }, y = (k) => a !== void 0 && k < a || l !== void 0 && k > l, g = (k) => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let v = n * t;
    const T = f + v, p = s === void 0 ? T : s(T);
    p !== T && (v = p - f);
    const h = (k) => -v * Math.exp(-k / r), m = (k) => p + h(k), S = (k) => {
      const b = h(k), R = m(k);
      d.done = Math.abs(b) <= u, d.value = d.done ? p : R;
    };
    let P, E;
    const C = (k) => {
      y(d.value) && (P = k, E = Uv({
        keyframes: [d.value, g(d.value)],
        velocity: zv(m, k, d.value),
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
        return !E && P === void 0 && (b = !0, S(k), C(k)), P !== void 0 && k >= P ? E.next(k - P) : (!b && S(k), d);
      }
    };
  }
  const Bv = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, K_ = 1e-7, G_ = 12;
  function Y_(e, t, n, r, i) {
    let o, s, a = 0;
    do
      s = t + (n - t) / 2, o = Bv(s, r, i) - e, o > 0 ? n = s : t = s;
    while (Math.abs(o) > K_ && ++a < G_);
    return s;
  }
  function mo(e, t, n, r) {
    if (e === t && n === r)
      return De;
    const i = (o) => Y_(o, 0, 1, e, n);
    return (o) => o === 0 || o === 1 ? o : Bv(i(o), t, r);
  }
  const Q_ = mo(0.42, 0, 1, 1), X_ = mo(0, 0, 0.58, 1), Hv = mo(0.42, 0, 0.58, 1), Z_ = (e) => Array.isArray(e) && typeof e[0] != "number", Wv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Kv = (e) => (t) => 1 - e(1 - t), Pf = (e) => 1 - Math.sin(Math.acos(e)), Gv = Kv(Pf), q_ = Wv(Pf), Yv = mo(0.33, 1.53, 0.69, 0.99), Cf = Kv(Yv), J_ = Wv(Cf), e2 = (e) => (e *= 2) < 1 ? 0.5 * Cf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), ep = {
    linear: De,
    easeIn: Q_,
    easeInOut: Hv,
    easeOut: X_,
    circIn: Pf,
    circInOut: q_,
    circOut: Gv,
    backIn: Cf,
    backInOut: J_,
    backOut: Yv,
    anticipate: e2
  }, tp = (e) => {
    if (Array.isArray(e)) {
      Ou(e.length === 4);
      const [t, n, r, i] = e;
      return mo(t, n, r, i);
    } else if (typeof e == "string")
      return Ou(ep[e] !== void 0), ep[e];
    return e;
  }, Ji = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  }, ue = (e, t, n) => e + (t - e) * n;
  function pl(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
  }
  function t2({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t)
      i = o = s = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
      i = pl(l, a, e + 1 / 3), o = pl(l, a, e), s = pl(l, a, e - 1 / 3);
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(o * 255),
      blue: Math.round(s * 255),
      alpha: r
    };
  }
  const ml = (e, t, n) => {
    const r = e * e, i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  }, n2 = [Ru, Wn, Ar], r2 = (e) => n2.find((t) => t.test(e));
  function np(e) {
    const t = r2(e);
    let n = t.parse(e);
    return t === Ar && (n = t2(n)), n;
  }
  const rp = (e, t) => {
    const n = np(e), r = np(t), i = { ...n };
    return (o) => (i.red = ml(n.red, r.red, o), i.green = ml(n.green, r.green, o), i.blue = ml(n.blue, r.blue, o), i.alpha = ue(n.alpha, r.alpha, o), Wn.transform(i));
  }, Nu = /* @__PURE__ */ new Set(["none", "hidden"]);
  function i2(e, t) {
    return Nu.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
  }
  function bu(e, t) {
    return (n) => n > 0 ? t : e;
  }
  function o2(e, t) {
    return (n) => ue(e, t, n);
  }
  function kf(e) {
    return typeof e == "number" ? o2 : typeof e == "string" ? df(e) ? bu : je.test(e) ? rp : l2 : Array.isArray(e) ? Qv : typeof e == "object" ? je.test(e) ? rp : s2 : bu;
  }
  function Qv(e, t) {
    const n = [...e], r = n.length, i = e.map((o, s) => kf(o)(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++)
        n[s] = i[s](o);
      return n;
    };
  }
  function s2(e, t) {
    const n = { ...e, ...t }, r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = kf(e[i])(e[i], t[i]));
    return (i) => {
      for (const o in r)
        n[o] = r[o](i);
      return n;
    };
  }
  function a2(e, t) {
    var n;
    const r = [], i = { color: 0, var: 0, number: 0 };
    for (let o = 0; o < t.values.length; o++) {
      const s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
      r[o] = l, i[s]++;
    }
    return r;
  }
  const l2 = (e, t) => {
    const n = An.createTransformer(t), r = qi(e), i = qi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Nu.has(e) && !i.values.length || Nu.has(t) && !r.values.length ? i2(e, t) : Bt(Qv(a2(r, i), i.values), n) : bu(e, t);
  };
  function Xv(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ue(e, t, n) : kf(e)(e, t);
  }
  function u2(e, t, n) {
    const r = [], i = n || Xv, o = e.length - 1;
    for (let s = 0; s < o; s++) {
      let a = i(e[s], e[s + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[s] || De : t;
        a = Bt(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function c2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (Ou(o === t.length), o === 1)
      return () => t[0];
    if (o === 2 && e[0] === e[1])
      return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = u2(t, r, i), a = s.length, l = (u) => {
      let c = 0;
      if (a > 1)
        for (; c < e.length - 2 && !(u < e[c + 1]); c++)
          ;
      const f = Ji(e[c], e[c + 1], u);
      return s[c](f);
    };
    return n ? (u) => l(kn(e[0], e[o - 1], u)) : l;
  }
  function f2(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = Ji(0, t, r);
      e.push(ue(n, 1, i));
    }
  }
  function d2(e) {
    const t = [0];
    return f2(t, e.length - 1), t;
  }
  function h2(e, t) {
    return e.map((n) => n * t);
  }
  function p2(e, t) {
    return e.map(() => t || Hv).splice(0, e.length - 1);
  }
  function Fs({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = Z_(r) ? r.map(tp) : tp(r), o = {
      done: !1,
      value: t[0]
    }, s = h2(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : d2(t),
      e
    ), a = c2(s, t, {
      ease: Array.isArray(i) ? i : p2(t, i)
    });
    return {
      calculatedDuration: e,
      next: (l) => (o.value = a(l), o.done = l >= e, o)
    };
  }
  const ip = 2e4;
  function m2(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < ip; )
      t += n, r = e.next(t);
    return t >= ip ? 1 / 0 : t;
  }
  const y2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Z.update(t, !0),
      stop: () => _n(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => Pe.isProcessing ? Pe.timestamp : Tn.now()
    };
  }, g2 = {
    decay: Jh,
    inertia: Jh,
    tween: Fs,
    keyframes: Fs,
    spring: Uv
  }, v2 = (e) => e / 100;
  class _f extends $v {
    constructor({ KeyframeResolver: t = xf, ...n }) {
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
      const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, a = g2[n] || Fs;
      let l, u;
      a !== Fs && typeof t[0] != "number" && (l = Bt(v2, Xv(t[0], t[1])), t = [0, 100]);
      const c = a({ ...this.options, keyframes: t });
      o === "mirror" && (u = a({
        ...this.options,
        keyframes: [...t].reverse(),
        velocity: -s
      })), c.calculatedDuration === null && (c.calculatedDuration = m2(c));
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
      const { delay: d, repeat: y, repeatType: g, repeatDelay: v, onUpdate: T } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
      const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? p < 0 : p > c;
      this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
      let m = this.currentTime, S = o;
      if (y) {
        const k = Math.min(this.currentTime, c) / f;
        let b = Math.floor(k), R = k % 1;
        !R && k >= 1 && (R = 1), R === 1 && b--, b = Math.min(b, y + 1), !!(b % 2) && (g === "reverse" ? (R = 1 - R, v && (R -= v / f)) : g === "mirror" && (S = s)), m = kn(0, 1, R) * f;
      }
      const P = h ? { done: !1, value: l[0] } : S.next(m);
      a && (P.value = a(P.value));
      let { done: E } = P;
      !h && u !== null && (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
      return C && i !== void 0 && (P.value = Pa(l, this.options, i)), T && T(P.value), C && this.finish(), P;
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
      const { driver: t = y2, onPlay: n } = this.options;
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
  const Zv = (e) => Array.isArray(e) && typeof e[0] == "number";
  function qv(e) {
    return !!(!e || typeof e == "string" && e in Af || Zv(e) || Array.isArray(e) && e.every(qv));
  }
  const pi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Af = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: pi([0, 0.65, 0.55, 1]),
    circOut: pi([0.55, 0, 1, 0.45]),
    backIn: pi([0.31, 0.01, 0.66, -0.59]),
    backOut: pi([0.33, 1.53, 0.69, 0.99])
  };
  function S2(e) {
    return Jv(e) || Af.easeOut;
  }
  function Jv(e) {
    if (e)
      return Zv(e) ? pi(e) : Array.isArray(e) ? e.map(S2) : Af[e];
  }
  function w2(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = { [t]: n };
    l && (u.offset = l);
    const c = Jv(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal"
    });
  }
  const x2 = R_(() => Object.hasOwnProperty.call(Element.prototype, "animate")), T2 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]), Rs = 10, E2 = 2e4;
  function P2(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !qv(e.ease);
  }
  function C2(e, t) {
    const n = new _f({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0
    });
    let r = { done: !1, value: e[0] };
    const i = [];
    let o = 0;
    for (; !r.done && o < E2; )
      r = n.sample(o), i.push(r.value), o += Rs;
    return {
      times: void 0,
      keyframes: i,
      duration: o - Rs,
      ease: "linear"
    };
  }
  class op extends $v {
    constructor(t) {
      super(t);
      const { name: n, motionValue: r, keyframes: i } = this.options;
      this.resolver = new Vv(i, (o, s) => this.onKeyframesResolved(o, s), n, r), this.resolver.scheduleResolve();
    }
    initPlayback(t, n) {
      var r;
      let { duration: i = 300, times: o, ease: s, type: a, motionValue: l, name: u } = this.options;
      if (!(!((r = l.owner) === null || r === void 0) && r.current))
        return !1;
      if (P2(this.options)) {
        const { onComplete: f, onUpdate: d, motionValue: y, ...g } = this.options, v = C2(t, g);
        t = v.keyframes, t.length === 1 && (t[1] = t[0]), i = v.duration, o = v.times, s = v.ease, a = "keyframes";
      }
      const c = w2(l.owner.current, u, t, { ...this.options, duration: i, times: o, ease: s });
      return c.startTime = Tn.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
        const { onComplete: f } = this.options;
        l.set(Pa(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
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
          return De;
        const { animation: r } = n;
        r.timeline = t, r.onfinish = null;
      }
      return De;
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
          const { motionValue: l, onUpdate: u, onComplete: c, ...f } = this.options, d = new _f({
            ...f,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a,
            isGenerator: !0
          }), y = xn(this.time);
          l.setWithVelocity(d.sample(y - Rs).value, d.sample(y).value, Rs);
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
      return x2() && r && T2.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
       * If we're outputting values to onUpdate then we can't use WAAPI as there's
       * no way to read the value from WAAPI every frame.
       */
      !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && a !== "inertia";
    }
  }
  const Of = (e, t, n, r = {}, i, o) => (s) => {
    const a = wf(r, e) || {}, l = a.delay || r.delay || 0;
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
    s_(a) || (c = {
      ...c,
      ...o_(e, c)
    }), c.duration && (c.duration = xn(c.duration)), c.repeatDelay && (c.repeatDelay = xn(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
      const d = Pa(c.keyframes, a);
      if (d !== void 0) {
        Z.update(() => {
          c.onUpdate(d), c.onComplete();
        });
        return;
      }
    }
    return !o && op.supports(c) ? new op(c) : new _f(c);
  };
  function Ds(e) {
    return !!(Re(e) && e.add);
  }
  function jf(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Ff(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class Rf {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return jf(this.subscriptions, t), () => Ff(this.subscriptions, t);
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
  const sp = 30, k2 = (e) => !isNaN(parseFloat(e));
  class _2 {
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
      }, this.hasAnimated = !1, this.setCurrent(t), this.canTrackVelocity = k2(this.current), this.owner = n.owner;
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
      this.events[t] || (this.events[t] = new Rf());
      const r = this.events[t].add(n);
      return t === "change" ? () => {
        r(), Z.read(() => {
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
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > sp)
        return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, sp);
      return Iv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  function eo(e, t) {
    return new _2(e, t);
  }
  function A2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, eo(n));
  }
  function O2(e, t) {
    const n = Ea(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
    o = { ...o, ...r };
    for (const s in o) {
      const a = Mk(o[s]);
      A2(e, s, a);
    }
  }
  function j2({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
  }
  function e0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    var o;
    let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
    const u = e.getValue("willChange");
    r && (s = r);
    const c = [], f = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
      const y = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null), g = l[d];
      if (g === void 0 || f && j2(f, d))
        continue;
      const v = {
        delay: n,
        elapsed: 0,
        ...wf(s || {}, d)
      };
      let T = !1;
      if (window.HandoffAppearAnimations) {
        const m = e.getProps()[nv];
        if (m) {
          const S = window.HandoffAppearAnimations(m, d);
          S !== null && (v.elapsed = S, T = !0);
        }
      }
      y.start(Of(d, y, g, e.shouldReduceMotion && fr.has(d) ? { type: !1 } : v, e, T));
      const p = y.animation;
      p && (Ds(u) && (u.add(d), p.then(() => u.remove(d))), c.push(p));
    }
    return a && Promise.all(c).then(() => {
      Z.update(() => {
        a && O2(e, a);
      });
    }), c;
  }
  function Lu(e, t, n = {}) {
    var r;
    const i = Ea(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let { transition: o = e.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(e0(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
      const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = o;
      return F2(e, t, c + u, f, d, n);
    } : () => Promise.resolve(), { when: l } = o;
    if (l) {
      const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
      return u().then(() => c());
    } else
      return Promise.all([s(), a(n.delay)]);
  }
  function F2(e, t, n = 0, r = 0, i = 1, o) {
    const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(R2).forEach((u, c) => {
      u.notify("AnimationStart", t), s.push(Lu(u, t, {
        ...o,
        delay: n + l(c)
      }).then(() => u.notify("AnimationComplete", t)));
    }), Promise.all(s);
  }
  function R2(e, t) {
    return e.sortNodePosition(t);
  }
  function D2(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((o) => Lu(e, o, n));
      r = Promise.all(i);
    } else if (typeof t == "string")
      r = Lu(e, t, n);
    else {
      const i = typeof t == "function" ? Ea(e, t, n.custom) : t;
      r = Promise.all(e0(e, i, n));
    }
    return r.then(() => {
      Z.postRender(() => {
        e.notify("AnimationComplete", t);
      });
    });
  }
  const M2 = [...lf].reverse(), N2 = lf.length;
  function b2(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => D2(e, n, r)));
  }
  function L2(e) {
    let t = b2(e);
    const n = $2();
    let r = !0;
    const i = (l) => (u, c) => {
      var f;
      const d = Ea(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
      if (d) {
        const { transition: y, transitionEnd: g, ...v } = d;
        u = { ...u, ...v, ...g };
      }
      return u;
    };
    function o(l) {
      t = l(e);
    }
    function s(l) {
      const u = e.getProps(), c = e.getVariantContext(!0) || {}, f = [], d = /* @__PURE__ */ new Set();
      let y = {}, g = 1 / 0;
      for (let T = 0; T < N2; T++) {
        const p = M2[T], h = n[p], m = u[p] !== void 0 ? u[p] : c[p], S = Xi(m), P = p === l ? h.isActive : null;
        P === !1 && (g = T);
        let E = m === c[p] && m !== u[p] && S;
        if (E && r && e.manuallyAnimateOnMount && (E = !1), h.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
        !h.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
        !m && !h.prevProp || // Or if the prop doesn't define an animation
        wa(m) || typeof m == "boolean")
          continue;
        let k = V2(h.prevProp, m) || // If we're making this variant active, we want to always make it active
        p === l && h.isActive && !E && S || // If we removed a higher-priority variant (i is in reverse order)
        T > g && S, b = !1;
        const R = Array.isArray(m) ? m : [m];
        let z = R.reduce(i(p), {});
        P === !1 && (z = {});
        const { prevResolvedValues: he = {} } = h, oe = {
          ...he,
          ...z
        }, D = ($) => {
          k = !0, d.has($) && (b = !0, d.delete($)), h.needsAnimating[$] = !0;
          const I = e.getValue($);
          I && (I.liveStyle = !1);
        };
        for (const $ in oe) {
          const I = z[$], K = he[$];
          if (y.hasOwnProperty($))
            continue;
          let A = !1;
          _u(I) && _u(K) ? A = !Pv(I, K) : A = I !== K, A ? I != null ? D($) : d.add($) : I !== void 0 && d.has($) ? D($) : h.protectedKeys[$] = !0;
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
      let v = !!f.length;
      return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
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
  function V2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Pv(t, e) : !1;
  }
  function bn(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function $2() {
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
  class I2 extends Dn {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
      super(t), t.animationState || (t.animationState = L2(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), wa(t) && (this.unmount = t.subscribe(this.node));
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
  let z2 = 0;
  class U2 extends Dn {
    constructor() {
      super(...arguments), this.id = z2++;
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
  const B2 = {
    animation: {
      Feature: I2
    },
    exit: {
      Feature: U2
    }
  }, ap = (e, t) => Math.abs(e - t);
  function H2(e, t) {
    const n = ap(e.x, t.x), r = ap(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class t0 {
    constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const f = gl(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, y = H2(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !y)
          return;
        const { point: g } = f, { timestamp: v } = Pe;
        this.history.push({ ...g, timestamp: v });
        const { onStart: T, onMove: p } = this.handlers;
        d || (T && T(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, f);
      }, this.handlePointerMove = (f, d) => {
        this.lastMoveEvent = f, this.lastMoveEventInfo = yl(d, this.transformPagePoint), Z.update(this.updatePoint, !0);
      }, this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: y, onSessionEnd: g, resumeAnimation: v } = this.handlers;
        if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const T = gl(f.type === "pointercancel" ? this.lastMoveEventInfo : yl(d, this.transformPagePoint), this.history);
        this.startEvent && y && y(f, T), g && g(f, T);
      }, !Sv(t))
        return;
      this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
      const s = Ta(t), a = yl(s, this.transformPagePoint), { point: l } = a, { timestamp: u } = Pe;
      this.history = [{ ...l, timestamp: u }];
      const { onSessionStart: c } = n;
      c && c(t, gl(a, this.history)), this.removeListeners = Bt(Ut(this.contextWindow, "pointermove", this.handlePointerMove), Ut(this.contextWindow, "pointerup", this.handlePointerUp), Ut(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), _n(this.updatePoint);
    }
  }
  function yl(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function lp(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function gl({ point: e }, t) {
    return {
      point: e,
      delta: lp(e, n0(t)),
      offset: lp(e, W2(t)),
      velocity: K2(t, 0.1)
    };
  }
  function W2(e) {
    return e[0];
  }
  function n0(e) {
    return e[e.length - 1];
  }
  function K2(e, t) {
    if (e.length < 2)
      return { x: 0, y: 0 };
    let n = e.length - 1, r = null;
    const i = n0(e);
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
  function qe(e) {
    return e.max - e.min;
  }
  function Vu(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function up(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = ue(t.min, t.max, e.origin), e.scale = qe(n) / qe(t), (Vu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ue(n.min, n.max, e.origin) - e.originPoint, (Vu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function Ai(e, t, n, r) {
    up(e.x, t.x, n.x, r ? r.originX : void 0), up(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function cp(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + qe(t);
  }
  function G2(e, t, n) {
    cp(e.x, t.x, n.x), cp(e.y, t.y, n.y);
  }
  function fp(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + qe(t);
  }
  function Oi(e, t, n) {
    fp(e.x, t.x, n.x), fp(e.y, t.y, n.y);
  }
  function Y2(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ue(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ue(n, e, r.max) : Math.min(e, n)), e;
  }
  function dp(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
  }
  function Q2(e, { top: t, left: n, bottom: r, right: i }) {
    return {
      x: dp(e.x, n, i),
      y: dp(e.y, t, r)
    };
  }
  function hp(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
  }
  function X2(e, t) {
    return {
      x: hp(e.x, t.x),
      y: hp(e.y, t.y)
    };
  }
  function Z2(e, t) {
    let n = 0.5;
    const r = qe(e), i = qe(t);
    return i > r ? n = Ji(t.min, t.max - r, e.min) : r > i && (n = Ji(e.min, e.max - i, t.min)), kn(0, 1, n);
  }
  function q2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
  }
  const $u = 0.35;
  function J2(e = $u) {
    return e === !1 ? e = 0 : e === !0 && (e = $u), {
      x: pp(e, "left", "right"),
      y: pp(e, "top", "bottom")
    };
  }
  function pp(e, t, n) {
    return {
      min: mp(e, t),
      max: mp(e, n)
    };
  }
  function mp(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const yp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }), Or = () => ({
    x: yp(),
    y: yp()
  }), gp = () => ({ min: 0, max: 0 }), pe = () => ({
    x: gp(),
    y: gp()
  });
  function it(e) {
    return [e("x"), e("y")];
  }
  function r0({ top: e, left: t, right: n, bottom: r }) {
    return {
      x: { min: t, max: n },
      y: { min: e, max: r }
    };
  }
  function eA({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function tA(e, t) {
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
  function vl(e) {
    return e === void 0 || e === 1;
  }
  function Iu({ scale: e, scaleX: t, scaleY: n }) {
    return !vl(e) || !vl(t) || !vl(n);
  }
  function $n(e) {
    return Iu(e) || i0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
  }
  function i0(e) {
    return vp(e.x) || vp(e.y);
  }
  function vp(e) {
    return e && e !== "0%";
  }
  function Ms(e, t, n) {
    const r = e - n, i = t * r;
    return n + i;
  }
  function Sp(e, t, n, r, i) {
    return i !== void 0 && (e = Ms(e, i, r)), Ms(e, n, r) + t;
  }
  function zu(e, t = 0, n = 1, r, i) {
    e.min = Sp(e.min, t, n, r, i), e.max = Sp(e.max, t, n, r, i);
  }
  function o0(e, { x: t, y: n }) {
    zu(e.x, t.translate, t.scale, t.originPoint), zu(e.y, n.translate, n.scale, n.originPoint);
  }
  function nA(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
      return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
      o = n[a], s = o.projectionDelta;
      const l = o.instance;
      l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && jr(e, {
        x: -o.scroll.offset.x,
        y: -o.scroll.offset.y
      }), s && (t.x *= s.x.scale, t.y *= s.y.scale, o0(e, s)), r && $n(o.latestValues) && jr(e, o.latestValues));
    }
    t.x = wp(t.x), t.y = wp(t.y);
  }
  function wp(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
  }
  function on(e, t) {
    e.min = e.min + t, e.max = e.max + t;
  }
  function xp(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : 0.5, s = ue(e.min, e.max, o);
    zu(e, t[n], t[r], s, t.scale);
  }
  const rA = ["x", "scaleX", "originX"], iA = ["y", "scaleY", "originY"];
  function jr(e, t) {
    xp(e.x, t, rA), xp(e.y, t, iA);
  }
  function s0(e, t) {
    return r0(tA(e.getBoundingClientRect(), t));
  }
  function oA(e, t, n) {
    const r = s0(e, n), { scroll: i } = t;
    return i && (on(r.x, i.offset.x), on(r.y, i.offset.y)), r;
  }
  const a0 = ({ current: e }) => e ? e.ownerDocument.defaultView : null, sA = /* @__PURE__ */ new WeakMap();
  class aA {
    constructor(t) {
      this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = pe(), this.visualElement = t;
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1)
        return;
      const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ta(c, "page").point);
      }, o = (c, f) => {
        const { drag: d, dragPropagation: y, onDragStart: g } = this.getProps();
        if (d && !y && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = xv(d), !this.openGlobalLock))
          return;
        this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), it((T) => {
          let p = this.getAxisMotionValue(T).get() || 0;
          if (Ot.test(p)) {
            const { projection: h } = this.visualElement;
            if (h && h.layout) {
              const m = h.layout.layoutBox[T];
              m && (p = qe(m) * (parseFloat(p) / 100));
            }
          }
          this.originPoint[T] = p;
        }), g && Z.postRender(() => g(c, f));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      }, s = (c, f) => {
        const { dragPropagation: d, dragDirectionLock: y, onDirectionLock: g, onDrag: v } = this.getProps();
        if (!d && !this.openGlobalLock)
          return;
        const { offset: T } = f;
        if (y && this.currentDirection === null) {
          this.currentDirection = lA(T), this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, T), this.updateAxis("y", f.point, T), this.visualElement.render(), v && v(c, f);
      }, a = (c, f) => this.stop(c, f), l = () => it((c) => {
        var f;
        return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
      }), { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new t0(t, {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: a0(this.visualElement)
      });
    }
    stop(t, n) {
      const r = this.isDragging;
      if (this.cancel(), !r)
        return;
      const { velocity: i } = n;
      this.startAnimation(i);
      const { onDragEnd: o } = this.getProps();
      o && Z.postRender(() => o(t, n));
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
      if (!r || !Vo(t, i, this.currentDirection))
        return;
      const o = this.getAxisMotionValue(t);
      let s = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (s = Y2(s, this.constraints[t], this.elastic[t])), o.set(s);
    }
    resolveConstraints() {
      var t;
      const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
      n && _r(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Q2(i.layoutBox, n) : this.constraints = !1, this.elastic = J2(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && it((s) => {
        this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = q2(i.layoutBox[s], this.constraints[s]));
      });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !_r(t))
        return !1;
      const r = t.current, { projection: i } = this.visualElement;
      if (!i || !i.layout)
        return !1;
      const o = oA(r, i.root, this.visualElement.getTransformPagePoint());
      let s = X2(i.layout.layoutBox, o);
      if (n) {
        const a = n(eA(s));
        this.hasMutatedConstraints = !!a, a && (s = r0(a));
      }
      return s;
    }
    startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = it((c) => {
        if (!Vo(c, n, this.currentDirection))
          return;
        let f = l && l[c] || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6, y = i ? 40 : 1e7, g = {
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
        return this.startAxisValueAnimation(c, g);
      });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return r.start(Of(t, r, 0, n, this.visualElement));
    }
    stopAnimation() {
      it((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
      it((t) => {
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
      it((n) => {
        const { drag: r } = this.getProps();
        if (!Vo(n, r, this.currentDirection))
          return;
        const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: s, max: a } = i.layout.layoutBox[n];
          o.set(t[n] - ue(s, a, 0.5));
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
      if (!_r(n) || !r || !this.constraints)
        return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      it((s) => {
        const a = this.getAxisMotionValue(s);
        if (a && this.constraints !== !1) {
          const l = a.get();
          i[s] = Z2({ min: l, max: l }, this.constraints[s]);
        }
      });
      const { transformTemplate: o } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), it((s) => {
        if (!Vo(s, t, null))
          return;
        const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
        a.set(ue(l, u, i[s]));
      });
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      sA.set(this.visualElement, this);
      const t = this.visualElement.current, n = Ut(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }), r = () => {
        const { dragConstraints: l } = this.getProps();
        _r(l) && (this.constraints = this.resolveRefConstraints());
      }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
      const s = It(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
        this.isDragging && u && (it((c) => {
          const f = this.getAxisMotionValue(c);
          f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
        }), this.visualElement.render());
      });
      return () => {
        s(), n(), o(), a && a();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = $u, dragMomentum: a = !0 } = t;
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
  function Vo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function lA(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
  }
  class uA extends Dn {
    constructor(t) {
      super(t), this.removeGroupControls = De, this.removeListeners = De, this.controls = new aA(t);
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || De;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const Tp = (e) => (t, n) => {
    e && Z.postRender(() => e(t, n));
  };
  class cA extends Dn {
    constructor() {
      super(...arguments), this.removePointerDownListener = De;
    }
    onPointerDown(t) {
      this.session = new t0(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: a0(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
      return {
        onSessionStart: Tp(t),
        onStart: Tp(n),
        onMove: r,
        onEnd: (o, s) => {
          delete this.session, i && Z.postRender(() => i(o, s));
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
  function fA() {
    const e = w.useContext(Sa);
    if (e === null)
      return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e, i = w.useId();
    return w.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
  }
  const ts = {
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
  function Ep(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
  }
  const li = {
    correct: (e, t) => {
      if (!t.target)
        return e;
      if (typeof e == "string")
        if (V.test(e))
          e = parseFloat(e);
        else
          return e;
      const n = Ep(e, t.target.x), r = Ep(e, t.target.y);
      return `${n}% ${r}%`;
    }
  }, dA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e, i = An.parse(e);
      if (i.length > 5)
        return r;
      const o = An.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
      i[0 + s] /= a, i[1 + s] /= l;
      const u = ue(a, l, 0.5);
      return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
    }
  };
  class hA extends w.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
      ck(pA), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), ts.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
      return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || Z.postRender(() => {
        const a = s.getStack();
        (!a || !a.members.length) && this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t && (t.root.didUpdate(), af.postRender(() => {
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
  function l0(e) {
    const [t, n] = fA(), r = w.useContext(cf);
    return O.jsx(hA, { ...e, layoutGroup: r, switchLayoutGroup: w.useContext(ov), isPresent: t, safeToRemove: n });
  }
  const pA = {
    borderRadius: {
      ...li,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: li,
    borderTopRightRadius: li,
    borderBottomLeftRadius: li,
    borderBottomRightRadius: li,
    boxShadow: dA
  }, u0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], mA = u0.length, Pp = (e) => typeof e == "string" ? parseFloat(e) : e, Cp = (e) => typeof e == "number" || V.test(e);
  function yA(e, t, n, r, i, o) {
    i ? (e.opacity = ue(
      0,
      // TODO Reinstate this if only child
      n.opacity !== void 0 ? n.opacity : 1,
      gA(r)
    ), e.opacityExit = ue(t.opacity !== void 0 ? t.opacity : 1, 0, vA(r))) : o && (e.opacity = ue(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < mA; s++) {
      const a = `border${u0[s]}Radius`;
      let l = kp(t, a), u = kp(n, a);
      if (l === void 0 && u === void 0)
        continue;
      l || (l = 0), u || (u = 0), l === 0 || u === 0 || Cp(l) === Cp(u) ? (e[a] = Math.max(ue(Pp(l), Pp(u), r), 0), (Ot.test(u) || Ot.test(l)) && (e[a] += "%")) : e[a] = u;
    }
    (t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r));
  }
  function kp(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const gA = c0(0, 0.5, Gv), vA = c0(0.5, 0.95, De);
  function c0(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n(Ji(e, t, r));
  }
  function _p(e, t) {
    e.min = t.min, e.max = t.max;
  }
  function rt(e, t) {
    _p(e.x, t.x), _p(e.y, t.y);
  }
  function Ap(e, t, n, r, i) {
    return e -= t, e = Ms(e, 1 / n, r), i !== void 0 && (e = Ms(e, 1 / i, r)), e;
  }
  function SA(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
    if (Ot.test(t) && (t = parseFloat(t), t = ue(s.min, s.max, t / 100) - s.min), typeof t != "number")
      return;
    let a = ue(o.min, o.max, r);
    e === o && (a -= t), e.min = Ap(e.min, t, n, a, i), e.max = Ap(e.max, t, n, a, i);
  }
  function Op(e, t, [n, r, i], o, s) {
    SA(e, t[n], t[r], t[i], t.scale, o, s);
  }
  const wA = ["x", "scaleX", "originX"], xA = ["y", "scaleY", "originY"];
  function jp(e, t, n, r) {
    Op(e.x, t, wA, n ? n.x : void 0, r ? r.x : void 0), Op(e.y, t, xA, n ? n.y : void 0, r ? r.y : void 0);
  }
  function Fp(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function f0(e) {
    return Fp(e.x) && Fp(e.y);
  }
  function TA(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
  }
  function d0(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
  }
  function Rp(e) {
    return qe(e.x) / qe(e.y);
  }
  class EA {
    constructor() {
      this.members = [];
    }
    add(t) {
      jf(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (Ff(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
  function Dp(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x, o = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
      const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: g } = n;
      u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), y && (r += `skewX(${y}deg) `), g && (r += `skewY(${g}deg) `);
    }
    const a = e.x.scale * t.x, l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
  }
  const PA = (e, t) => e.depth - t.depth;
  class CA {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(t) {
      jf(this.children, t), this.isDirty = !0;
    }
    remove(t) {
      Ff(this.children, t), this.isDirty = !0;
    }
    forEach(t) {
      this.isDirty && this.children.sort(PA), this.isDirty = !1, this.children.forEach(t);
    }
  }
  function kA(e, t) {
    const n = Tn.now(), r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (_n(r), e(o - t));
    };
    return Z.read(r, !0), () => _n(r);
  }
  function _A(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function AA(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function OA(e, t, n) {
    const r = Re(e) ? e : eo(e);
    return r.start(Of("", r, t, n)), r.animation;
  }
  const Sl = ["", "X", "Y", "Z"], jA = { visibility: "hidden" }, Mp = 1e3;
  let FA = 0;
  const In = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  };
  function wl(e, t, n, r) {
    const { latestValues: i } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function h0({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
      constructor(s = {}, a = t == null ? void 0 : t()) {
        this.id = FA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = !1, In.totalNodes = In.resolvedTargetDeltas = In.recalculatedProjection = 0, this.nodes.forEach(MA), this.nodes.forEach($A), this.nodes.forEach(IA), this.nodes.forEach(NA), _A(In);
        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new CA());
      }
      addEventListener(s, a) {
        return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Rf()), this.eventHandlers.get(s).add(a);
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
        this.isSVG = AA(s), this.instance = s;
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
          let f;
          const d = () => this.root.updateBlockedByResize = !1;
          e(s, () => {
            this.root.updateBlockedByResize = !0, f && f(), f = kA(d, 250), ts.hasAnimatedSinceResize && (ts.hasAnimatedSinceResize = !1, this.nodes.forEach(bp));
          });
        }
        l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: y, layout: g }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          const v = this.options.transition || c.getDefaultTransition() || WA, { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } = c.getProps(), h = !this.targetLayout || !d0(this.targetLayout, g) || y, m = !d && y;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
            const S = {
              ...wf(v, "layout"),
              onPlay: T,
              onComplete: p
            };
            (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
          } else
            d || bp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = g;
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
        this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(zA), this.animationId++);
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
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Np);
          return;
        }
        this.isUpdating || this.nodes.forEach(LA), this.isUpdating = !1, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes.forEach(VA), this.nodes.forEach(RA), this.nodes.forEach(DA), this.clearAllSnapshots();
        const a = Tn.now();
        Pe.delta = kn(0, 1e3 / 60, a - Pe.timestamp), Pe.timestamp = a, Pe.isProcessing = !0, ul.update.process(Pe), ul.preRender.process(Pe), ul.render.process(Pe), Pe.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, af.read(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(bA), this.sharedNodes.forEach(UA);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Z.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        Z.postRender(() => {
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
        this.layout = this.measure(!1), this.layoutCorrected = pe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
        const s = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !f0(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
        s && (a || $n(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(s = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return s && (l = this.removeTransform(l)), KA(l), {
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
          return pe();
        const a = s.measureViewportBox(), { scroll: l } = this.root;
        return l && (on(a.x, l.offset.x), on(a.y, l.offset.y)), a;
      }
      removeElementScroll(s) {
        const a = pe();
        rt(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l], { scroll: c, options: f } = u;
          if (u !== this.root && c && f.layoutScroll) {
            if (c.isRoot) {
              rt(a, s);
              const { scroll: d } = this.root;
              d && (on(a.x, -d.offset.x), on(a.y, -d.offset.y));
            }
            on(a.x, c.offset.x), on(a.y, c.offset.y);
          }
        }
        return a;
      }
      applyTransform(s, a = !1) {
        const l = pe();
        rt(l, s);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a && c.options.layoutScroll && c.scroll && c !== c.root && jr(l, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
          }), $n(c.latestValues) && jr(l, c.latestValues);
        }
        return $n(this.latestValues) && jr(l, this.latestValues), l;
      }
      removeTransform(s) {
        const a = pe();
        rt(a, s);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !$n(u.latestValues))
            continue;
          Iu(u.latestValues) && u.updateSnapshot();
          const c = pe(), f = u.measurePageBox();
          rt(c, f), jp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
        }
        return $n(this.latestValues) && jp(a, this.latestValues), a;
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
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pe.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
          if (this.resolvedRelativeTargetAt = Pe.timestamp, !this.targetDelta && !this.relativeTarget) {
            const y = this.getClosestProjectingParent();
            y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Oi(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (this.target || (this.target = pe(), this.targetWithTransforms = pe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), G2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rt(this.target, this.layout.layoutBox), o0(this.target, this.targetDelta)) : rt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              const y = this.getClosestProjectingParent();
              y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), Oi(this.relativeTargetOrigin, this.target, y.target), rt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            In.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || Iu(this.parent.latestValues) || i0(this.parent.latestValues)))
          return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var s;
        const a = this.getLead(), l = !!this.resumingFrom || this !== a;
        let u = !0;
        if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Pe.timestamp && (u = !1), u)
          return;
        const { layout: c, layoutId: f } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
          return;
        rt(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x, y = this.treeScale.y;
        nA(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = pe());
        const { target: g } = a;
        if (!g) {
          this.projectionTransform && (this.projectionDelta = Or(), this.projectionTransform = "none", this.scheduleRender());
          return;
        }
        this.projectionDelta || (this.projectionDelta = Or(), this.projectionDeltaWithTransform = Or());
        const v = this.projectionTransform;
        Ai(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = Dp(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== y) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), In.recalculatedProjection++;
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
        const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Or();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
        const d = pe(), y = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = y !== g, T = this.getStack(), p = !T || T.members.length <= 1, h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(HA));
        this.animationProgress = 0;
        let m;
        this.mixTargetDelta = (S) => {
          const P = S / 1e3;
          Lp(f.x, s.x, P), Lp(f.y, s.y, P), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Oi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), BA(this.relativeTarget, this.relativeTargetOrigin, d, P), m && TA(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = pe()), rt(m, this.relativeTarget)), v && (this.animationValues = c, yA(c, u, this.latestValues, P, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P;
        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(s) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (_n(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Z.update(() => {
          ts.hasAnimatedSinceResize = !0, this.currentAnimation = OA(0, Mp, {
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
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Mp), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        const s = this.getLead();
        let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
        if (!(!a || !l || !u)) {
          if (this !== s && this.layout && u && p0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
            l = this.target || pe();
            const f = qe(this.layout.layoutBox.x);
            l.x.min = s.target.x.min, l.x.max = l.x.min + f;
            const d = qe(this.layout.layoutBox.y);
            l.y.min = s.target.y.min, l.y.max = l.y.min + d;
          }
          rt(a, l), jr(a, c), Ai(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(s, a) {
        this.sharedNodes.has(s) || this.sharedNodes.set(s, new EA()), this.sharedNodes.get(s).add(a);
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
        l.z && wl("z", s, u, this.animationValues);
        for (let c = 0; c < Sl.length; c++)
          wl(`rotate${Sl[c]}`, s, u, this.animationValues), wl(`skew${Sl[c]}`, s, u, this.animationValues);
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
          return jA;
        const u = {
          visibility: ""
        }, c = this.getTransformTemplate();
        if (this.needsReset)
          return this.needsReset = !1, u.opacity = "", u.pointerEvents = Jo(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
          const v = {};
          return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Jo(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !$n(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(), u.transform = Dp(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
        const { x: y, y: g } = this.projectionDelta;
        u.transformOrigin = `${y.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
        for (const v in Os) {
          if (d[v] === void 0)
            continue;
          const { correct: T, applyTo: p } = Os[v], h = u.transform === "none" ? d[v] : T(d[v], f);
          if (p) {
            const m = p.length;
            for (let S = 0; S < m; S++)
              u[p[S]] = h;
          } else
            u[v] = h;
        }
        return this.options.layoutId && (u.pointerEvents = f === this ? Jo(s == null ? void 0 : s.pointerEvents) || "" : "none"), u;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((s) => {
          var a;
          return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
        }), this.root.nodes.forEach(Np), this.root.sharedNodes.clear();
      }
    };
  }
  function RA(e) {
    e.updateLayout();
  }
  function DA(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
      o === "size" ? it((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], y = qe(d);
        d.min = r[f].min, d.max = d.min + y;
      }) : p0(o, n.layoutBox, r) && it((f) => {
        const d = s ? n.measuredBox[f] : n.layoutBox[f], y = qe(r[f]);
        d.max = d.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y);
      });
      const a = Or();
      Ai(a, r, n.layoutBox);
      const l = Or();
      s ? Ai(l, e.applyTransform(i, !0), n.measuredBox) : Ai(l, r, n.layoutBox);
      const u = !f0(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: y } = f;
          if (d && y) {
            const g = pe();
            Oi(g, n.layoutBox, d.layoutBox);
            const v = pe();
            Oi(v, r, y.layoutBox), d0(g, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = f);
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
  function MA(e) {
    In.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function NA(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function bA(e) {
    e.clearSnapshot();
  }
  function Np(e) {
    e.clearMeasurements();
  }
  function LA(e) {
    e.isLayoutDirty = !1;
  }
  function VA(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
  }
  function bp(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
  }
  function $A(e) {
    e.resolveTargetDelta();
  }
  function IA(e) {
    e.calcProjection();
  }
  function zA(e) {
    e.resetSkewAndRotation();
  }
  function UA(e) {
    e.removeLeadSnapshot();
  }
  function Lp(e, t, n) {
    e.translate = ue(t.translate, 0, n), e.scale = ue(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
  }
  function Vp(e, t, n, r) {
    e.min = ue(t.min, n.min, r), e.max = ue(t.max, n.max, r);
  }
  function BA(e, t, n, r) {
    Vp(e.x, t.x, n.x, r), Vp(e.y, t.y, n.y, r);
  }
  function HA(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const WA = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  }, $p = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ip = $p("applewebkit/") && !$p("chrome/") ? Math.round : De;
  function zp(e) {
    e.min = Ip(e.min), e.max = Ip(e.max);
  }
  function KA(e) {
    zp(e.x), zp(e.y);
  }
  function p0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Vu(Rp(t), Rp(n), 0.2);
  }
  const GA = h0({
    attachResizeListener: (e, t) => It(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }), xl = {
    current: void 0
  }, m0 = h0({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!xl.current) {
        const e = new GA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), xl.current = e;
      }
      return xl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
  }), YA = {
    pan: {
      Feature: cA
    },
    drag: {
      Feature: uA,
      ProjectionNode: m0,
      MeasureLayout: l0
    }
  }, Uu = { current: null }, y0 = { current: !1 };
  function QA() {
    if (y0.current = !0, !!rf)
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Uu.current = e.matches;
        e.addListener(t), t();
      } else
        Uu.current = !1;
  }
  function XA(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const o = t[i], s = n[i];
      if (Re(o))
        e.addValue(i, o), Ds(r) && r.add(i);
      else if (Re(s))
        e.addValue(i, eo(o, { owner: e })), Ds(r) && r.remove(i);
      else if (s !== o)
        if (e.hasValue(i)) {
          const a = e.getValue(i);
          a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
        } else {
          const a = e.getStaticValue(i);
          e.addValue(i, eo(a !== void 0 ? a : o, { owner: e }));
        }
    }
    for (const i in n)
      t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const Up = /* @__PURE__ */ new WeakMap(), ZA = [...Ov, je, An], qA = (e) => ZA.find(Av(e)), g0 = Object.keys(Zi), JA = g0.length, Bp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ], eO = uf.length;
  function v0(e) {
    if (e)
      return e.options.allowProjection !== !1 ? e.projection : v0(e.parent);
  }
  class tO {
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
      this.resolveKeyframes = (d, y, g, v) => new this.KeyframeResolver(d, y, g, v, this), this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = xf, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.scheduleRender = () => Z.render(this.render, !1, !0);
      const { latestValues: l, renderState: u } = s;
      this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = xa(n), this.isVariantNode = iv(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
      for (const d in f) {
        const y = f[d];
        l[d] !== void 0 && Re(y) && (y.set(l[d], !1), Ds(c) && c.add(d));
      }
    }
    mount(t) {
      this.current = t, Up.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), y0.current || QA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Uu.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      var t;
      Up.delete(this.current), this.projection && this.projection.unmount(), _n(this.notifyUpdate), _n(this.render), this.valueSubscriptions.forEach((n) => n()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
      for (const n in this.events)
        this.events[n].clear();
      for (const n in this.features)
        (t = this.features[n]) === null || t === void 0 || t.unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = fr.has(t), i = n.on("change", (s) => {
        this.latestValues[t] = s, this.props.onUpdate && Z.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
      for (let l = 0; l < JA; l++) {
        const u = g0[l], { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: y } = Zi[u];
        d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), y && (a = y));
      }
      if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
        this.projection = new s(this.latestValues, v0(this.parent));
        const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: y } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || f && _r(f),
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
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pe();
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
      for (let r = 0; r < Bp.length; r++) {
        const i = Bp[r];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const o = "on" + i, s = t[o];
        s && (this.propEventSubscriptions[i] = this.on(i, s));
      }
      this.prevMotionValues = XA(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      for (let r = 0; r < eO; r++) {
        const i = uf[r], o = this.props[i];
        (Xi(o) || o === !1) && (n[i] = o);
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
      return r === void 0 && n !== void 0 && (r = eo(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(t, n) {
      var r;
      let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
      return i != null && (typeof i == "string" && (kv(i) || Cv(i)) ? i = parseFloat(i) : !qA(i) && An.test(n) && (i = Lv(t, n)), this.setBaseTarget(t, Re(i) ? i.get() : i)), Re(i) ? i.get() : i;
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
        const s = Sf(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
        s && (i = s[t]);
      }
      if (r && i !== void 0)
        return i;
      const o = this.getBaseTargetFromProps(this.props, t);
      return o !== void 0 && !Re(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
      return this.events[t] || (this.events[t] = new Rf()), this.events[t].add(n);
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class S0 extends tO {
    constructor() {
      super(...arguments), this.KeyframeResolver = Vv;
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
  function nO(e) {
    return window.getComputedStyle(e);
  }
  class rO extends S0 {
    constructor() {
      super(...arguments), this.type = "html";
    }
    readValueFromInstance(t, n) {
      if (fr.has(n)) {
        const r = Ef(n);
        return r && r.default || 0;
      } else {
        const r = nO(t), i = (lv(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return s0(t, n);
    }
    build(t, n, r, i) {
      pf(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return vf(t, n, r);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Re(t) && (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
    }
    renderInstance(t, n, r, i) {
      hv(t, n, r, i);
    }
  }
  class iO extends S0 {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1;
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (fr.has(n)) {
        const r = Ef(n);
        return r && r.default || 0;
      }
      return n = pv.has(n) ? n : sf(n), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return pe();
    }
    scrapeMotionValuesFromProps(t, n, r) {
      return yv(t, n, r);
    }
    build(t, n, r, i) {
      yf(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      mv(t, n, r, i);
    }
    mount(t) {
      this.isSVGTag = gf(t.tagName), super.mount(t);
    }
  }
  const oO = (e, t) => ff(e) ? new iO(t, { enableHardwareAcceleration: !1 }) : new rO(t, {
    allowProjection: e !== w.Fragment,
    enableHardwareAcceleration: !0
  }), sO = {
    layout: {
      ProjectionNode: m0,
      MeasureLayout: l0
    }
  }, aO = {
    ...B2,
    ...qk,
    ...YA,
    ...sO
  }, lO = /* @__PURE__ */ lk((e, t) => $k(e, t, aO, oO));
  function w0() {
    const e = w.useRef(!1);
    return of(() => (e.current = !0, () => {
      e.current = !1;
    }), []), e;
  }
  function uO() {
    const e = w0(), [t, n] = w.useState(0), r = w.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
    return [w.useCallback(() => Z.postRender(r), [r]), t];
  }
  class cO extends w.Component {
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
  function fO({ children: e, isPresent: t }) {
    const n = w.useId(), r = w.useRef(null), i = w.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }), { nonce: o } = w.useContext(nf);
    return w.useInsertionEffect(() => {
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
    }, [t]), O.jsx(cO, { isPresent: t, childRef: r, sizeRef: i, children: w.cloneElement(e, { ref: r }) });
  }
  const Tl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = gv(dO), l = w.useId(), u = w.useMemo(
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
    return w.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]), w.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]), s === "popLayout" && (e = O.jsx(fO, { isPresent: n, children: e })), O.jsx(Sa.Provider, { value: u, children: e });
  };
  function dO() {
    return /* @__PURE__ */ new Map();
  }
  function hO(e) {
    return w.useEffect(() => () => e(), []);
  }
  const zn = (e) => e.key || "";
  function pO(e, t) {
    e.forEach((n) => {
      const r = zn(n);
      t.set(r, n);
    });
  }
  function mO(e) {
    const t = [];
    return w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }), t;
  }
  const yO = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = w.useContext(cf).forceRender || uO()[0], l = w0(), u = mO(e);
    let c = u;
    const f = w.useRef(/* @__PURE__ */ new Map()).current, d = w.useRef(c), y = w.useRef(/* @__PURE__ */ new Map()).current, g = w.useRef(!0);
    if (of(() => {
      g.current = !1, pO(u, y), d.current = c;
    }), hO(() => {
      g.current = !0, y.clear(), f.clear();
    }), g.current)
      return O.jsx(O.Fragment, { children: c.map((h) => O.jsx(Tl, { isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: s, children: h }, zn(h))) });
    c = [...c];
    const v = d.current.map(zn), T = u.map(zn), p = v.length;
    for (let h = 0; h < p; h++) {
      const m = v[h];
      T.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
    }
    return s === "wait" && f.size && (c = []), f.forEach((h, m) => {
      if (T.indexOf(m) !== -1)
        return;
      const S = y.get(m);
      if (!S)
        return;
      const P = v.indexOf(m);
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
        E = O.jsx(Tl, { isPresent: !1, onExitComplete: C, custom: t, presenceAffectsLayout: o, mode: s, children: S }, zn(S)), f.set(m, E);
      }
      c.splice(P, 0, E);
    }), c = c.map((h) => {
      const m = h.key;
      return f.has(m) ? h : O.jsx(Tl, { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h }, zn(h));
    }), O.jsx(O.Fragment, { children: f.size ? c : c.map((h) => w.cloneElement(h)) });
  };
  function gO({
    activeStep: e,
    initialValues: t,
    values: n
  }) {
    function r(a) {
      return a = a[0].toUpperCase() + a.slice(1), a.replace(/[A-Z]/g, " $&");
    }
    function i(a, l) {
      const u = {};
      return l === "number" && (u.onKeyDown = (f) => {
        ["e", "E", "+", "-", ".", ","].includes(f.key) && f.preventDefault();
      }), ((a == null ? void 0 : a.tests) || []).forEach((f) => {
        switch (f.OPTIONS.name) {
          case "min":
            u.min = f.OPTIONS.params.min || f.OPTIONS.params.more;
            break;
          case "max":
            u.max = f.OPTIONS.params.max;
            break;
        }
      }), u;
    }
    const { validationSchema: o, fields: s } = e;
    return /* @__PURE__ */ O.jsxs("div", { id: "default", className: "prose max-w-none", children: [
      /* @__PURE__ */ O.jsx("h2", { children: r(e.id) }),
      /* @__PURE__ */ O.jsx("p", { children: e.helpText }),
      /* @__PURE__ */ O.jsx("div", { className: "flex flex-row gap-6 flex-wrap", children: Object.keys(t || {}).map((a) => {
        var l, u;
        return /* @__PURE__ */ O.jsxs("div", { className: "grow shrink-0 basis-72", children: [
          /* @__PURE__ */ O.jsx("label", { htmlFor: a, className: "block mb-2 text-sm font-medium text-white", children: r(a) }),
          /* @__PURE__ */ O.jsx(
            bC,
            {
              id: a,
              name: a,
              value: (s == null ? void 0 : s.inputTypes[a]) === "checkbox" ? void 0 : n[a],
              type: s == null ? void 0 : s.inputTypes[a],
              placeholder: (l = s == null ? void 0 : s.placeholders) == null ? void 0 : l[a],
              ...i((u = o == null ? void 0 : o.fields) == null ? void 0 : u[a], s == null ? void 0 : s.inputTypes[a]),
              className: "checkbox bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
            }
          ),
          /* @__PURE__ */ O.jsx(BC, { name: a, children: (c) => /* @__PURE__ */ O.jsx("div", { className: "text-red-400", children: c }) })
        ] }, a);
      }) })
    ] });
  }
  function vO() {
    const { isAnimated: e } = w.useContext(Df), { activeStep: t } = co(), { initialValues: n, values: r } = lo();
    let i = {};
    return e && (i = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    }), /* @__PURE__ */ O.jsx(yO, { initial: !1, mode: "wait", children: /* @__PURE__ */ O.jsx(
      lO.div,
      {
        variants: i,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: { type: "tween", duration: 0.25 },
        children: /* @__PURE__ */ O.jsx("div", { className: "py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32", children: /* @__PURE__ */ O.jsx("div", { className: "container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl", children: t.component || /* @__PURE__ */ O.jsx(
          gO,
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
  var x0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, Hp = fn.createContext && /* @__PURE__ */ fn.createContext(x0), SO = ["attr", "size", "title"];
  function wO(e, t) {
    if (e == null)
      return {};
    var n = xO(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
        r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function xO(e, t) {
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
  function Wp(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function bs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Wp(Object(n), !0).forEach(function(r) {
        TO(e, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wp(Object(n)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
    }
    return e;
  }
  function TO(e, t, n) {
    return t = EO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }
  function EO(e) {
    var t = PO(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function PO(e, t) {
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
  function T0(e) {
    return e && e.map((t, n) => /* @__PURE__ */ fn.createElement(t.tag, bs({
      key: n
    }, t.attr), T0(t.child)));
  }
  function E0(e) {
    return (t) => /* @__PURE__ */ fn.createElement(CO, Ns({
      attr: bs({}, e.attr)
    }, t), T0(e.child));
  }
  function CO(e) {
    var t = (n) => {
      var {
        attr: r,
        size: i,
        title: o
      } = e, s = wO(e, SO), a = i || n.size || "1em", l;
      return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ fn.createElement("svg", Ns({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n.attr, r, s, {
        className: l,
        style: bs(bs({
          color: e.color || n.color
        }, n.style), e.style),
        height: a,
        width: a,
        xmlns: "http://www.w3.org/2000/svg"
      }), o && /* @__PURE__ */ fn.createElement("title", null, o), e.children);
    };
    return Hp !== void 0 ? /* @__PURE__ */ fn.createElement(Hp.Consumer, null, (n) => t(n)) : t(x0);
  }
  function kO(e) {
    return E0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" }, child: [] }] })(e);
  }
  function _O(e) {
    return E0({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" }, child: [] }] })(e);
  }
  var P0 = {}, Kr = {};
  Object.defineProperty(Kr, "__esModule", { value: !0 });
  Kr.cssValue = Kr.parseLengthAndUnit = void 0;
  var AO = {
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
  function C0(e) {
    if (typeof e == "number")
      return {
        value: e,
        unit: "px"
      };
    var t, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return AO[r] ? {
      value: t,
      unit: r
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
      value: t,
      unit: "px"
    });
  }
  Kr.parseLengthAndUnit = C0;
  function OO(e) {
    var t = C0(e);
    return "".concat(t.value).concat(t.unit);
  }
  Kr.cssValue = OO;
  var Ca = {};
  Object.defineProperty(Ca, "__esModule", { value: !0 });
  Ca.createAnimation = void 0;
  var jO = function(e, t, n) {
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
  Ca.createAnimation = jO;
  var Ls = jt && jt.__assign || function() {
    return Ls = Object.assign || function(e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        t = arguments[n];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
      return e;
    }, Ls.apply(this, arguments);
  }, FO = jt && jt.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  } : function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  }), RO = jt && jt.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: !0, value: t });
  } : function(e, t) {
    e.default = t;
  }), DO = jt && jt.__importStar || function(e) {
    if (e && e.__esModule)
      return e;
    var t = {};
    if (e != null)
      for (var n in e)
        n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && FO(t, e, n);
    return RO(t, e), t;
  }, MO = jt && jt.__rest || function(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
  Object.defineProperty(P0, "__esModule", { value: !0 });
  var NO = DO(w), Kp = Kr, bO = Ca, LO = (0, bO.createAnimation)("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
  function VO(e) {
    var t = e.loading, n = t === void 0 ? !0 : t, r = e.color, i = r === void 0 ? "#000000" : r, o = e.speedMultiplier, s = o === void 0 ? 1 : o, a = e.cssOverride, l = a === void 0 ? {} : a, u = e.size, c = u === void 0 ? 35 : u, f = MO(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = Ls({ background: "transparent !important", width: (0, Kp.cssValue)(c), height: (0, Kp.cssValue)(c), borderRadius: "100%", border: "2px solid", borderTopColor: i, borderBottomColor: "transparent", borderLeftColor: i, borderRightColor: i, display: "inline-block", animation: "".concat(LO, " ").concat(0.75 / s, "s 0s infinite linear"), animationFillMode: "both" }, l);
    return n ? NO.createElement("span", Ls({ style: d }, f)) : null;
  }
  var $O = P0.default = VO;
  function IO() {
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
    } = co();
    const { isValid: a, submitForm: l } = lo();
    return o = n || o || s && !a, /* @__PURE__ */ O.jsx("div", { className: "navigation", children: /* @__PURE__ */ O.jsxs("div", { className: "navigation-wrapper " + (r ? "justify-end" : "justify-between"), children: [
      !r && /* @__PURE__ */ O.jsxs(
        "button",
        {
          className: "btn",
          onClick: e,
          disabled: t,
          type: "button",
          children: [
            /* @__PURE__ */ O.jsx(kO, { className: "w-8 h-8 fill-current" }),
            /* @__PURE__ */ O.jsx("span", { children: "Previous" })
          ]
        }
      ),
      !i && // Still possible to trigger submit even though button is disabled.
      // Main reason is to display validation errors.
      /* @__PURE__ */ O.jsx("div", { onClick: o ? l : void 0, children: /* @__PURE__ */ O.jsxs(
        "button",
        {
          className: "btn",
          disabled: o,
          type: "submit",
          children: [
            n && /* @__PURE__ */ O.jsx("span", { className: "mr-1 loading", children: /* @__PURE__ */ O.jsx($O, { size: 11, color: "#757575" }) }),
            /* @__PURE__ */ O.jsx("span", { children: "Next" }),
            /* @__PURE__ */ O.jsx(_O, { className: "w-8 h-8 fill-current" })
          ]
        }
      ) })
    ] }) });
  }
  function zO() {
    const { isAnimated: e, setIsAnimated: t } = w.useContext(Df), { stepNumber: n, totalSteps: r } = co(), i = `${(n - 1) / (r - 1) * 100}%`;
    return /* @__PURE__ */ O.jsxs("header", { className: "pt-4 pb-3", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "px-5 flex justify-between items-center prose max-w-none", children: [
        /* @__PURE__ */ O.jsx("h3", { className: "mb-0 text-base sm:text-xl", children: "onboardatron-1" }),
        /* @__PURE__ */ O.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ O.jsxs("div", { className: "mr-3 text-sm", children: [
            /* @__PURE__ */ O.jsx("span", { className: "hidden min-[400px]:inline", children: "Step" }),
            " ",
            n,
            " / ",
            r
          ] }),
          /* @__PURE__ */ O.jsx("a", { href: "https://github.com/kennyhei/react-formik-step-wizard", target: "_blank", children: /* @__PURE__ */ O.jsx("img", { src: "/onboarder/github-mark-white.svg", className: "rounded-md w-9 my-0" }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("div", { className: "w-full bg-gray-600 h-1 mt-[17px]", children: /* @__PURE__ */ O.jsx(
        "div",
        {
          style: { width: i },
          className: "h-full bg-success transition-all " + (e ? "duration-500" : "")
        }
      ) }),
      /* @__PURE__ */ O.jsx("div", { className: "flex justify-end pr-5 prose max-w-none pt-1", children: /* @__PURE__ */ O.jsxs("label", { className: "label cursor-pointer px-0", children: [
        /* @__PURE__ */ O.jsx("span", { className: "label-text pr-2 " + (e ? "text-success" : "text-gray-300"), children: "Animate" }),
        /* @__PURE__ */ O.jsx(
          "input",
          {
            type: "checkbox",
            className: "toggle toggle-sm bg-gray-300 toggle-success",
            checked: e,
            onChange: () => t(!e)
          }
        )
      ] }) })
    ] });
  }
  const Df = w.createContext({});
  function UO() {
    const [e, t] = w.useState(!0);
    return /* @__PURE__ */ O.jsx(Df.Provider, { value: { isAnimated: e, setIsAnimated: t }, children: /* @__PURE__ */ O.jsx(
      WC,
      {
        enableHash: !0,
        steps: QC,
        onStepChanged: (n, r, i) => {
          console.log("step changed", n.id, r.id, i);
        },
        header: /* @__PURE__ */ O.jsx(zO, {}),
        wrapper: /* @__PURE__ */ O.jsx(vO, {}),
        footer: /* @__PURE__ */ O.jsx(IO, {})
      }
    ) });
  }
  El.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ O.jsx(UO, {})
  );
});
export default BO();
