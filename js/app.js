(() => {
  "use strict";
  const e = {};
  let t = (e, t = 500, n = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = n ? `${n}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !n),
            !n && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !n && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(
              new CustomEvent("slideUpDone", { detail: { target: e } })
            );
        }, t));
    },
    n = (e, t = 500, n = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          n && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideDownDone", { detail: { target: e } })
              );
          }, t);
      }
    },
    i = !0,
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    },
    s = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    };
  function o(e) {
    return e.filter(function (e, t, n) {
      return n.indexOf(e) === t;
    });
  }
  function a(e, t) {
    const n = Array.from(e).filter(function (e, n, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (n.length) {
      const e = [];
      n.forEach((n) => {
        const i = {},
          r = n.dataset[t].split(",");
        (i.value = r[0]),
          (i.type = r[1] ? r[1].trim() : "max"),
          (i.item = n),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = o(i);
      const r = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const n = t.split(","),
              i = n[1],
              s = n[2],
              o = window.matchMedia(n[0]),
              a = e.filter(function (e) {
                if (e.value === i && e.type === s) return !0;
              });
            r.push({ itemsArray: a, matchMedia: o });
          }),
          r
        );
    }
  }
  function l(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function c(e) {
    return e instanceof l(e).Element || e instanceof Element;
  }
  function d(e) {
    return e instanceof l(e).HTMLElement || e instanceof HTMLElement;
  }
  function p(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof l(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var u = Math.max,
    f = Math.min,
    h = Math.round;
  function m(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
      i = 1,
      r = 1;
    if (d(e) && t) {
      var s = e.offsetHeight,
        o = e.offsetWidth;
      o > 0 && (i = h(n.width) / o || 1), s > 0 && (r = h(n.height) / s || 1);
    }
    return {
      width: n.width / i,
      height: n.height / r,
      top: n.top / r,
      right: n.right / i,
      bottom: n.bottom / r,
      left: n.left / i,
      x: n.left / i,
      y: n.top / r,
    };
  }
  function g(e) {
    var t = l(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function v(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function b(e) {
    return ((c(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function w(e) {
    return m(b(e)).left + g(e).scrollLeft;
  }
  function y(e) {
    return l(e).getComputedStyle(e);
  }
  function x(e) {
    var t = y(e),
      n = t.overflow,
      i = t.overflowX,
      r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + i);
  }
  function E(e, t, n) {
    void 0 === n && (n = !1);
    var i,
      r,
      s = d(t),
      o =
        d(t) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            n = h(t.width) / e.offsetWidth || 1,
            i = h(t.height) / e.offsetHeight || 1;
          return 1 !== n || 1 !== i;
        })(t),
      a = b(t),
      c = m(e, o),
      p = { scrollLeft: 0, scrollTop: 0 },
      u = { x: 0, y: 0 };
    return (
      (s || (!s && !n)) &&
        (("body" !== v(t) || x(a)) &&
          (p =
            (i = t) !== l(i) && d(i)
              ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
              : g(i)),
        d(t)
          ? (((u = m(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
          : a && (u.x = w(a))),
      {
        x: c.left + p.scrollLeft - u.x,
        y: c.top + p.scrollTop - u.y,
        width: c.width,
        height: c.height,
      }
    );
  }
  function T(e) {
    var t = m(e),
      n = e.offsetWidth,
      i = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - i) <= 1 && (i = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
    );
  }
  function S(e) {
    return "html" === v(e)
      ? e
      : e.assignedSlot || e.parentNode || (p(e) ? e.host : null) || b(e);
  }
  function C(e) {
    return ["html", "body", "#document"].indexOf(v(e)) >= 0
      ? e.ownerDocument.body
      : d(e) && x(e)
      ? e
      : C(S(e));
  }
  function L(e, t) {
    var n;
    void 0 === t && (t = []);
    var i = C(e),
      r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
      s = l(i),
      o = r ? [s].concat(s.visualViewport || [], x(i) ? i : []) : i,
      a = t.concat(o);
    return r ? a : a.concat(L(S(o)));
  }
  function O(e) {
    return ["table", "td", "th"].indexOf(v(e)) >= 0;
  }
  function A(e) {
    return d(e) && "fixed" !== y(e).position ? e.offsetParent : null;
  }
  function k(e) {
    for (var t = l(e), n = A(e); n && O(n) && "static" === y(n).position; )
      n = A(n);
    return n &&
      ("html" === v(n) || ("body" === v(n) && "static" === y(n).position))
      ? t
      : n ||
          (function (e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              d(e) &&
              "fixed" === y(e).position
            )
              return null;
            for (var n = S(e); d(n) && ["html", "body"].indexOf(v(n)) < 0; ) {
              var i = y(n);
              if (
                "none" !== i.transform ||
                "none" !== i.perspective ||
                "paint" === i.contain ||
                -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                (t && "filter" === i.willChange) ||
                (t && i.filter && "none" !== i.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  var M = "top",
    P = "bottom",
    _ = "right",
    D = "left",
    $ = "auto",
    I = [M, P, _, D],
    j = "start",
    z = "end",
    W = "viewport",
    B = "popper",
    N = I.reduce(function (e, t) {
      return e.concat([t + "-" + j, t + "-" + z]);
    }, []),
    H = [].concat(I, [$]).reduce(function (e, t) {
      return e.concat([t, t + "-" + j, t + "-" + z]);
    }, []),
    G = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function q(e) {
    var t = new Map(),
      n = new Set(),
      i = [];
    function r(e) {
      n.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            if (!n.has(e)) {
              var i = t.get(e);
              i && r(i);
            }
          }),
        i.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        n.has(e.name) || r(e);
      }),
      i
    );
  }
  var V = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function R() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function F(e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      i = void 0 === n ? [] : n,
      r = t.defaultOptions,
      s = void 0 === r ? V : r;
    return function (e, t, n) {
      void 0 === n && (n = s);
      var r,
        o,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, V, s),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        l = [],
        d = !1,
        p = {
          state: a,
          setOptions: function (n) {
            var r = "function" == typeof n ? n(a.options) : n;
            u(),
              (a.options = Object.assign({}, s, a.options, r)),
              (a.scrollParents = {
                reference: c(e)
                  ? L(e)
                  : e.contextElement
                  ? L(e.contextElement)
                  : [],
                popper: L(t),
              });
            var o = (function (e) {
              var t = q(e);
              return G.reduce(function (e, n) {
                return e.concat(
                  t.filter(function (e) {
                    return e.phase === n;
                  })
                );
              }, []);
            })(
              (function (e) {
                var t = e.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {});
                return Object.keys(t).map(function (e) {
                  return t[e];
                });
              })([].concat(i, a.options.modifiers))
            );
            return (
              (a.orderedModifiers = o.filter(function (e) {
                return e.enabled;
              })),
              a.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  i = void 0 === n ? {} : n,
                  r = e.effect;
                if ("function" == typeof r) {
                  var s = r({ state: a, name: t, instance: p, options: i }),
                    o = function () {};
                  l.push(s || o);
                }
              }),
              p.update()
            );
          },
          forceUpdate: function () {
            if (!d) {
              var e = a.elements,
                t = e.reference,
                n = e.popper;
              if (R(t, n)) {
                (a.rects = {
                  reference: E(t, k(n), "fixed" === a.options.strategy),
                  popper: T(n),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (e) {
                    return (a.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var i = 0; i < a.orderedModifiers.length; i++)
                  if (!0 !== a.reset) {
                    var r = a.orderedModifiers[i],
                      s = r.fn,
                      o = r.options,
                      l = void 0 === o ? {} : o,
                      c = r.name;
                    "function" == typeof s &&
                      (a =
                        s({ state: a, options: l, name: c, instance: p }) || a);
                  } else (a.reset = !1), (i = -1);
              }
            }
          },
          update:
            ((r = function () {
              return new Promise(function (e) {
                p.forceUpdate(), e(a);
              });
            }),
            function () {
              return (
                o ||
                  (o = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (o = void 0), e(r());
                    });
                  })),
                o
              );
            }),
          destroy: function () {
            u(), (d = !0);
          },
        };
      if (!R(e, t)) return p;
      function u() {
        l.forEach(function (e) {
          return e();
        }),
          (l = []);
      }
      return (
        p.setOptions(n).then(function (e) {
          !d && n.onFirstUpdate && n.onFirstUpdate(e);
        }),
        p
      );
    };
  }
  var Y = { passive: !0 };
  const X = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var t = e.state,
        n = e.instance,
        i = e.options,
        r = i.scroll,
        s = void 0 === r || r,
        o = i.resize,
        a = void 0 === o || o,
        c = l(t.elements.popper),
        d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      return (
        s &&
          d.forEach(function (e) {
            e.addEventListener("scroll", n.update, Y);
          }),
        a && c.addEventListener("resize", n.update, Y),
        function () {
          s &&
            d.forEach(function (e) {
              e.removeEventListener("scroll", n.update, Y);
            }),
            a && c.removeEventListener("resize", n.update, Y);
        }
      );
    },
    data: {},
  };
  function U(e) {
    return e.split("-")[0];
  }
  function Q(e) {
    return e.split("-")[1];
  }
  function K(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Z(e) {
    var t,
      n = e.reference,
      i = e.element,
      r = e.placement,
      s = r ? U(r) : null,
      o = r ? Q(r) : null,
      a = n.x + n.width / 2 - i.width / 2,
      l = n.y + n.height / 2 - i.height / 2;
    switch (s) {
      case M:
        t = { x: a, y: n.y - i.height };
        break;
      case P:
        t = { x: a, y: n.y + n.height };
        break;
      case _:
        t = { x: n.x + n.width, y: l };
        break;
      case D:
        t = { x: n.x - i.width, y: l };
        break;
      default:
        t = { x: n.x, y: n.y };
    }
    var c = s ? K(s) : null;
    if (null != c) {
      var d = "y" === c ? "height" : "width";
      switch (o) {
        case j:
          t[c] = t[c] - (n[d] / 2 - i[d] / 2);
          break;
        case z:
          t[c] = t[c] + (n[d] / 2 - i[d] / 2);
      }
    }
    return t;
  }
  var J = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function ee(e) {
    var t,
      n = e.popper,
      i = e.popperRect,
      r = e.placement,
      s = e.variation,
      o = e.offsets,
      a = e.position,
      c = e.gpuAcceleration,
      d = e.adaptive,
      p = e.roundOffsets,
      u = e.isFixed,
      f =
        !0 === p
          ? (function (e) {
              var t = e.x,
                n = e.y,
                i = window.devicePixelRatio || 1;
              return { x: h(t * i) / i || 0, y: h(n * i) / i || 0 };
            })(o)
          : "function" == typeof p
          ? p(o)
          : o,
      m = f.x,
      g = void 0 === m ? 0 : m,
      v = f.y,
      w = void 0 === v ? 0 : v,
      x = o.hasOwnProperty("x"),
      E = o.hasOwnProperty("y"),
      T = D,
      S = M,
      C = window;
    if (d) {
      var L = k(n),
        O = "clientHeight",
        A = "clientWidth";
      if (
        (L === l(n) &&
          "static" !== y((L = b(n))).position &&
          "absolute" === a &&
          ((O = "scrollHeight"), (A = "scrollWidth")),
        (L = L),
        r === M || ((r === D || r === _) && s === z))
      )
        (S = P),
          (w -=
            (u && C.visualViewport ? C.visualViewport.height : L[O]) -
            i.height),
          (w *= c ? 1 : -1);
      if (r === D || ((r === M || r === P) && s === z))
        (T = _),
          (g -=
            (u && C.visualViewport ? C.visualViewport.width : L[A]) - i.width),
          (g *= c ? 1 : -1);
    }
    var $,
      I = Object.assign({ position: a }, d && J);
    return c
      ? Object.assign(
          {},
          I,
          ((($ = {})[S] = E ? "0" : ""),
          ($[T] = x ? "0" : ""),
          ($.transform =
            (C.devicePixelRatio || 1) <= 1
              ? "translate(" + g + "px, " + w + "px)"
              : "translate3d(" + g + "px, " + w + "px, 0)"),
          $)
        )
      : Object.assign(
          {},
          I,
          (((t = {})[S] = E ? w + "px" : ""),
          (t[T] = x ? g + "px" : ""),
          (t.transform = ""),
          t)
        );
  }
  const te = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
          i = t.attributes[e] || {},
          r = t.elements[e];
        d(r) &&
          v(r) &&
          (Object.assign(r.style, n),
          Object.keys(i).forEach(function (e) {
            var t = i[e];
            !1 === t
              ? r.removeAttribute(e)
              : r.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var i = t.elements[e],
              r = t.attributes[e] || {},
              s = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            d(i) &&
              v(i) &&
              (Object.assign(i.style, s),
              Object.keys(r).forEach(function (e) {
                i.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  const ne = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state,
        n = e.options,
        i = e.name,
        r = n.offset,
        s = void 0 === r ? [0, 0] : r,
        o = H.reduce(function (e, n) {
          return (
            (e[n] = (function (e, t, n) {
              var i = U(e),
                r = [D, M].indexOf(i) >= 0 ? -1 : 1,
                s =
                  "function" == typeof n
                    ? n(Object.assign({}, t, { placement: e }))
                    : n,
                o = s[0],
                a = s[1];
              return (
                (o = o || 0),
                (a = (a || 0) * r),
                [D, _].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
              );
            })(n, t.rects, s)),
            e
          );
        }, {}),
        a = o[t.placement],
        l = a.x,
        c = a.y;
      null != t.modifiersData.popperOffsets &&
        ((t.modifiersData.popperOffsets.x += l),
        (t.modifiersData.popperOffsets.y += c)),
        (t.modifiersData[i] = o);
    },
  };
  var ie = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function re(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ie[e];
    });
  }
  var se = { start: "end", end: "start" };
  function oe(e) {
    return e.replace(/start|end/g, function (e) {
      return se[e];
    });
  }
  function ae(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && p(n)) {
      var i = t;
      do {
        if (i && e.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function le(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function ce(e, t) {
    return t === W
      ? le(
          (function (e) {
            var t = l(e),
              n = b(e),
              i = t.visualViewport,
              r = n.clientWidth,
              s = n.clientHeight,
              o = 0,
              a = 0;
            return (
              i &&
                ((r = i.width),
                (s = i.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((o = i.offsetLeft), (a = i.offsetTop))),
              { width: r, height: s, x: o + w(e), y: a }
            );
          })(e)
        )
      : c(t)
      ? (function (e) {
          var t = m(e);
          return (
            (t.top = t.top + e.clientTop),
            (t.left = t.left + e.clientLeft),
            (t.bottom = t.top + e.clientHeight),
            (t.right = t.left + e.clientWidth),
            (t.width = e.clientWidth),
            (t.height = e.clientHeight),
            (t.x = t.left),
            (t.y = t.top),
            t
          );
        })(t)
      : le(
          (function (e) {
            var t,
              n = b(e),
              i = g(e),
              r = null == (t = e.ownerDocument) ? void 0 : t.body,
              s = u(
                n.scrollWidth,
                n.clientWidth,
                r ? r.scrollWidth : 0,
                r ? r.clientWidth : 0
              ),
              o = u(
                n.scrollHeight,
                n.clientHeight,
                r ? r.scrollHeight : 0,
                r ? r.clientHeight : 0
              ),
              a = -i.scrollLeft + w(e),
              l = -i.scrollTop;
            return (
              "rtl" === y(r || n).direction &&
                (a += u(n.clientWidth, r ? r.clientWidth : 0) - s),
              { width: s, height: o, x: a, y: l }
            );
          })(b(e))
        );
  }
  function de(e, t, n) {
    var i =
        "clippingParents" === t
          ? (function (e) {
              var t = L(S(e)),
                n = ["absolute", "fixed"].indexOf(y(e).position) >= 0,
                i = n && d(e) ? k(e) : e;
              return c(i)
                ? t.filter(function (e) {
                    return (
                      c(e) &&
                      ae(e, i) &&
                      "body" !== v(e) &&
                      (!n || "static" !== y(e).position)
                    );
                  })
                : [];
            })(e)
          : [].concat(t),
      r = [].concat(i, [n]),
      s = r[0],
      o = r.reduce(function (t, n) {
        var i = ce(e, n);
        return (
          (t.top = u(i.top, t.top)),
          (t.right = f(i.right, t.right)),
          (t.bottom = f(i.bottom, t.bottom)),
          (t.left = u(i.left, t.left)),
          t
        );
      }, ce(e, s));
    return (
      (o.width = o.right - o.left),
      (o.height = o.bottom - o.top),
      (o.x = o.left),
      (o.y = o.top),
      o
    );
  }
  function pe(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function ue(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function fe(e, t) {
    void 0 === t && (t = {});
    var n = t,
      i = n.placement,
      r = void 0 === i ? e.placement : i,
      s = n.boundary,
      o = void 0 === s ? "clippingParents" : s,
      a = n.rootBoundary,
      l = void 0 === a ? W : a,
      d = n.elementContext,
      p = void 0 === d ? B : d,
      u = n.altBoundary,
      f = void 0 !== u && u,
      h = n.padding,
      g = void 0 === h ? 0 : h,
      v = pe("number" != typeof g ? g : ue(g, I)),
      w = p === B ? "reference" : B,
      y = e.rects.popper,
      x = e.elements[f ? w : p],
      E = de(c(x) ? x : x.contextElement || b(e.elements.popper), o, l),
      T = m(e.elements.reference),
      S = Z({ reference: T, element: y, strategy: "absolute", placement: r }),
      C = le(Object.assign({}, y, S)),
      L = p === B ? C : T,
      O = {
        top: E.top - L.top + v.top,
        bottom: L.bottom - E.bottom + v.bottom,
        left: E.left - L.left + v.left,
        right: L.right - E.right + v.right,
      },
      A = e.modifiersData.offset;
    if (p === B && A) {
      var k = A[r];
      Object.keys(O).forEach(function (e) {
        var t = [_, P].indexOf(e) >= 0 ? 1 : -1,
          n = [M, P].indexOf(e) >= 0 ? "y" : "x";
        O[e] += k[n] * t;
      });
    }
    return O;
  }
  function he(e, t, n) {
    return u(e, f(t, n));
  }
  const me = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        i = e.name,
        r = n.mainAxis,
        s = void 0 === r || r,
        o = n.altAxis,
        a = void 0 !== o && o,
        l = n.boundary,
        c = n.rootBoundary,
        d = n.altBoundary,
        p = n.padding,
        h = n.tether,
        m = void 0 === h || h,
        g = n.tetherOffset,
        v = void 0 === g ? 0 : g,
        b = fe(t, { boundary: l, rootBoundary: c, padding: p, altBoundary: d }),
        w = U(t.placement),
        y = Q(t.placement),
        x = !y,
        E = K(w),
        S = "x" === E ? "y" : "x",
        C = t.modifiersData.popperOffsets,
        L = t.rects.reference,
        O = t.rects.popper,
        A =
          "function" == typeof v
            ? v(Object.assign({}, t.rects, { placement: t.placement }))
            : v,
        $ =
          "number" == typeof A
            ? { mainAxis: A, altAxis: A }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
        I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        z = { x: 0, y: 0 };
      if (C) {
        if (s) {
          var W,
            B = "y" === E ? M : D,
            N = "y" === E ? P : _,
            H = "y" === E ? "height" : "width",
            G = C[E],
            q = G + b[B],
            V = G - b[N],
            R = m ? -O[H] / 2 : 0,
            F = y === j ? L[H] : O[H],
            Y = y === j ? -O[H] : -L[H],
            X = t.elements.arrow,
            Z = m && X ? T(X) : { width: 0, height: 0 },
            J = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            ee = J[B],
            te = J[N],
            ne = he(0, L[H], Z[H]),
            ie = x
              ? L[H] / 2 - R - ne - ee - $.mainAxis
              : F - ne - ee - $.mainAxis,
            re = x
              ? -L[H] / 2 + R + ne + te + $.mainAxis
              : Y + ne + te + $.mainAxis,
            se = t.elements.arrow && k(t.elements.arrow),
            oe = se ? ("y" === E ? se.clientTop || 0 : se.clientLeft || 0) : 0,
            ae = null != (W = null == I ? void 0 : I[E]) ? W : 0,
            le = G + re - ae,
            ce = he(m ? f(q, G + ie - ae - oe) : q, G, m ? u(V, le) : V);
          (C[E] = ce), (z[E] = ce - G);
        }
        if (a) {
          var de,
            pe = "x" === E ? M : D,
            ue = "x" === E ? P : _,
            me = C[S],
            ge = "y" === S ? "height" : "width",
            ve = me + b[pe],
            be = me - b[ue],
            we = -1 !== [M, D].indexOf(w),
            ye = null != (de = null == I ? void 0 : I[S]) ? de : 0,
            xe = we ? ve : me - L[ge] - O[ge] - ye + $.altAxis,
            Ee = we ? me + L[ge] + O[ge] - ye - $.altAxis : be,
            Te =
              m && we
                ? (function (e, t, n) {
                    var i = he(e, t, n);
                    return i > n ? n : i;
                  })(xe, me, Ee)
                : he(m ? xe : ve, me, m ? Ee : be);
          (C[S] = Te), (z[S] = Te - me);
        }
        t.modifiersData[i] = z;
      }
    },
    requiresIfExists: ["offset"],
  };
  const ge = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        n = e.state,
        i = e.name,
        r = e.options,
        s = n.elements.arrow,
        o = n.modifiersData.popperOffsets,
        a = U(n.placement),
        l = K(a),
        c = [D, _].indexOf(a) >= 0 ? "height" : "width";
      if (s && o) {
        var d = (function (e, t) {
            return pe(
              "number" !=
                typeof (e =
                  "function" == typeof e
                    ? e(Object.assign({}, t.rects, { placement: t.placement }))
                    : e)
                ? e
                : ue(e, I)
            );
          })(r.padding, n),
          p = T(s),
          u = "y" === l ? M : D,
          f = "y" === l ? P : _,
          h =
            n.rects.reference[c] +
            n.rects.reference[l] -
            o[l] -
            n.rects.popper[c],
          m = o[l] - n.rects.reference[l],
          g = k(s),
          v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = h / 2 - m / 2,
          w = d[u],
          y = v - p[c] - d[f],
          x = v / 2 - p[c] / 2 + b,
          E = he(w, x, y),
          S = l;
        n.modifiersData[i] = (((t = {})[S] = E), (t.centerOffset = E - x), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        n = e.options.element,
        i = void 0 === n ? "[data-popper-arrow]" : n;
      null != i &&
        ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
        ae(t.elements.popper, i) &&
        (t.elements.arrow = i);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function ve(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function be(e) {
    return [M, _, P, D].some(function (t) {
      return e[t] >= 0;
    });
  }
  var we = F({
      defaultModifiers: [
        X,
        {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = Z({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        },
        {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              i = n.gpuAcceleration,
              r = void 0 === i || i,
              s = n.adaptive,
              o = void 0 === s || s,
              a = n.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: U(t.placement),
                variation: Q(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: r,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                ee(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: o,
                    roundOffsets: l,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  ee(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        te,
        ne,
        {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              i = e.name;
            if (!t.modifiersData[i]._skip) {
              for (
                var r = n.mainAxis,
                  s = void 0 === r || r,
                  o = n.altAxis,
                  a = void 0 === o || o,
                  l = n.fallbackPlacements,
                  c = n.padding,
                  d = n.boundary,
                  p = n.rootBoundary,
                  u = n.altBoundary,
                  f = n.flipVariations,
                  h = void 0 === f || f,
                  m = n.allowedAutoPlacements,
                  g = t.options.placement,
                  v = U(g),
                  b =
                    l ||
                    (v === g || !h
                      ? [re(g)]
                      : (function (e) {
                          if (U(e) === $) return [];
                          var t = re(e);
                          return [oe(e), t, oe(t)];
                        })(g)),
                  w = [g].concat(b).reduce(function (e, n) {
                    return e.concat(
                      U(n) === $
                        ? (function (e, t) {
                            void 0 === t && (t = {});
                            var n = t,
                              i = n.placement,
                              r = n.boundary,
                              s = n.rootBoundary,
                              o = n.padding,
                              a = n.flipVariations,
                              l = n.allowedAutoPlacements,
                              c = void 0 === l ? H : l,
                              d = Q(i),
                              p = d
                                ? a
                                  ? N
                                  : N.filter(function (e) {
                                      return Q(e) === d;
                                    })
                                : I,
                              u = p.filter(function (e) {
                                return c.indexOf(e) >= 0;
                              });
                            0 === u.length && (u = p);
                            var f = u.reduce(function (t, n) {
                              return (
                                (t[n] = fe(e, {
                                  placement: n,
                                  boundary: r,
                                  rootBoundary: s,
                                  padding: o,
                                })[U(n)]),
                                t
                              );
                            }, {});
                            return Object.keys(f).sort(function (e, t) {
                              return f[e] - f[t];
                            });
                          })(t, {
                            placement: n,
                            boundary: d,
                            rootBoundary: p,
                            padding: c,
                            flipVariations: h,
                            allowedAutoPlacements: m,
                          })
                        : n
                    );
                  }, []),
                  y = t.rects.reference,
                  x = t.rects.popper,
                  E = new Map(),
                  T = !0,
                  S = w[0],
                  C = 0;
                C < w.length;
                C++
              ) {
                var L = w[C],
                  O = U(L),
                  A = Q(L) === j,
                  k = [M, P].indexOf(O) >= 0,
                  z = k ? "width" : "height",
                  W = fe(t, {
                    placement: L,
                    boundary: d,
                    rootBoundary: p,
                    altBoundary: u,
                    padding: c,
                  }),
                  B = k ? (A ? _ : D) : A ? P : M;
                y[z] > x[z] && (B = re(B));
                var G = re(B),
                  q = [];
                if (
                  (s && q.push(W[O] <= 0),
                  a && q.push(W[B] <= 0, W[G] <= 0),
                  q.every(function (e) {
                    return e;
                  }))
                ) {
                  (S = L), (T = !1);
                  break;
                }
                E.set(L, q);
              }
              if (T)
                for (
                  var V = function (e) {
                      var t = w.find(function (t) {
                        var n = E.get(t);
                        if (n)
                          return n.slice(0, e).every(function (e) {
                            return e;
                          });
                      });
                      if (t) return (S = t), "break";
                    },
                    R = h ? 3 : 1;
                  R > 0;
                  R--
                ) {
                  if ("break" === V(R)) break;
                }
              t.placement !== S &&
                ((t.modifiersData[i]._skip = !0),
                (t.placement = S),
                (t.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        },
        me,
        ge,
        {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              i = t.rects.reference,
              r = t.rects.popper,
              s = t.modifiersData.preventOverflow,
              o = fe(t, { elementContext: "reference" }),
              a = fe(t, { altBoundary: !0 }),
              l = ve(o, i),
              c = ve(a, r, s),
              d = be(l),
              p = be(c);
            (t.modifiersData[n] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: c,
              isReferenceHidden: d,
              hasPopperEscaped: p,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": d,
                "data-popper-escaped": p,
              }));
          },
        },
      ],
    }),
    ye = "tippy-content",
    xe = "tippy-backdrop",
    Ee = "tippy-arrow",
    Te = "tippy-svg-arrow",
    Se = { passive: !0, capture: !0 },
    Ce = function () {
      return document.body;
    };
  function Le(e, t, n) {
    if (Array.isArray(e)) {
      var i = e[t];
      return null == i ? (Array.isArray(n) ? n[t] : n) : i;
    }
    return e;
  }
  function Oe(e, t) {
    var n = {}.toString.call(e);
    return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
  }
  function Ae(e, t) {
    return "function" == typeof e ? e.apply(void 0, t) : e;
  }
  function ke(e, t) {
    return 0 === t
      ? e
      : function (i) {
          clearTimeout(n),
            (n = setTimeout(function () {
              e(i);
            }, t));
        };
    var n;
  }
  function Me(e) {
    return [].concat(e);
  }
  function Pe(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function _e(e) {
    return e.split("-")[0];
  }
  function De(e) {
    return [].slice.call(e);
  }
  function $e(e) {
    return Object.keys(e).reduce(function (t, n) {
      return void 0 !== e[n] && (t[n] = e[n]), t;
    }, {});
  }
  function Ie() {
    return document.createElement("div");
  }
  function je(e) {
    return ["Element", "Fragment"].some(function (t) {
      return Oe(e, t);
    });
  }
  function ze(e) {
    return Oe(e, "MouseEvent");
  }
  function We(e) {
    return !(!e || !e._tippy || e._tippy.reference !== e);
  }
  function Be(e) {
    return je(e)
      ? [e]
      : (function (e) {
          return Oe(e, "NodeList");
        })(e)
      ? De(e)
      : Array.isArray(e)
      ? e
      : De(document.querySelectorAll(e));
  }
  function Ne(e, t) {
    e.forEach(function (e) {
      e && (e.style.transitionDuration = t + "ms");
    });
  }
  function He(e, t) {
    e.forEach(function (e) {
      e && e.setAttribute("data-state", t);
    });
  }
  function Ge(e) {
    var t,
      n = Me(e)[0];
    return null != n && null != (t = n.ownerDocument) && t.body
      ? n.ownerDocument
      : document;
  }
  function qe(e, t, n) {
    var i = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
      e[i](t, n);
    });
  }
  function Ve(e, t) {
    for (var n = t; n; ) {
      var i;
      if (e.contains(n)) return !0;
      n =
        null == n.getRootNode || null == (i = n.getRootNode())
          ? void 0
          : i.host;
    }
    return !1;
  }
  var Re = { isTouch: !1 },
    Fe = 0;
  function Ye() {
    Re.isTouch ||
      ((Re.isTouch = !0),
      window.performance && document.addEventListener("mousemove", Xe));
  }
  function Xe() {
    var e = performance.now();
    e - Fe < 20 &&
      ((Re.isTouch = !1), document.removeEventListener("mousemove", Xe)),
      (Fe = e);
  }
  function Ue() {
    var e = document.activeElement;
    if (We(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  var Qe =
    !!("undefined" != typeof window && "undefined" != typeof document) &&
    !!window.msCrypto;
  var Ke = {
      animateFill: !1,
      followCursor: !1,
      inlinePositioning: !1,
      sticky: !1,
    },
    Ze = Object.assign(
      {
        appendTo: Ce,
        aria: { content: "auto", expanded: "auto" },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function () {},
        onBeforeUpdate: function () {},
        onCreate: function () {},
        onDestroy: function () {},
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        onUntrigger: function () {},
        onClickOutside: function () {},
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null,
      },
      Ke,
      {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999,
      }
    ),
    Je = Object.keys(Ze);
  function et(e) {
    var t = (e.plugins || []).reduce(function (t, n) {
      var i,
        r = n.name,
        s = n.defaultValue;
      r && (t[r] = void 0 !== e[r] ? e[r] : null != (i = Ze[r]) ? i : s);
      return t;
    }, {});
    return Object.assign({}, e, t);
  }
  function tt(e, t) {
    var n = Object.assign(
      {},
      t,
      { content: Ae(t.content, [e]) },
      t.ignoreAttributes
        ? {}
        : (function (e, t) {
            return (
              t ? Object.keys(et(Object.assign({}, Ze, { plugins: t }))) : Je
            ).reduce(function (t, n) {
              var i = (e.getAttribute("data-tippy-" + n) || "").trim();
              if (!i) return t;
              if ("content" === n) t[n] = i;
              else
                try {
                  t[n] = JSON.parse(i);
                } catch (e) {
                  t[n] = i;
                }
              return t;
            }, {});
          })(e, t.plugins)
    );
    return (
      (n.aria = Object.assign({}, Ze.aria, n.aria)),
      (n.aria = {
        expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
        content:
          "auto" === n.aria.content
            ? t.interactive
              ? null
              : "describedby"
            : n.aria.content,
      }),
      n
    );
  }
  function nt(e, t) {
    e.innerHTML = t;
  }
  function it(e) {
    var t = Ie();
    return (
      !0 === e
        ? (t.className = Ee)
        : ((t.className = Te), je(e) ? t.appendChild(e) : nt(t, e)),
      t
    );
  }
  function rt(e, t) {
    je(t.content)
      ? (nt(e, ""), e.appendChild(t.content))
      : "function" != typeof t.content &&
        (t.allowHTML ? nt(e, t.content) : (e.textContent = t.content));
  }
  function st(e) {
    var t = e.firstElementChild,
      n = De(t.children);
    return {
      box: t,
      content: n.find(function (e) {
        return e.classList.contains(ye);
      }),
      arrow: n.find(function (e) {
        return e.classList.contains(Ee) || e.classList.contains(Te);
      }),
      backdrop: n.find(function (e) {
        return e.classList.contains(xe);
      }),
    };
  }
  function ot(e) {
    var t = Ie(),
      n = Ie();
    (n.className = "tippy-box"),
      n.setAttribute("data-state", "hidden"),
      n.setAttribute("tabindex", "-1");
    var i = Ie();
    function r(n, i) {
      var r = st(t),
        s = r.box,
        o = r.content,
        a = r.arrow;
      i.theme
        ? s.setAttribute("data-theme", i.theme)
        : s.removeAttribute("data-theme"),
        "string" == typeof i.animation
          ? s.setAttribute("data-animation", i.animation)
          : s.removeAttribute("data-animation"),
        i.inertia
          ? s.setAttribute("data-inertia", "")
          : s.removeAttribute("data-inertia"),
        (s.style.maxWidth =
          "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
        i.role ? s.setAttribute("role", i.role) : s.removeAttribute("role"),
        (n.content === i.content && n.allowHTML === i.allowHTML) ||
          rt(o, e.props),
        i.arrow
          ? a
            ? n.arrow !== i.arrow &&
              (s.removeChild(a), s.appendChild(it(i.arrow)))
            : s.appendChild(it(i.arrow))
          : a && s.removeChild(a);
    }
    return (
      (i.className = ye),
      i.setAttribute("data-state", "hidden"),
      rt(i, e.props),
      t.appendChild(n),
      n.appendChild(i),
      r(e.props, e.props),
      { popper: t, onUpdate: r }
    );
  }
  ot.$$tippy = !0;
  var at = 1,
    lt = [],
    ct = [];
  function dt(e, t) {
    var n,
      i,
      r,
      s,
      o,
      a,
      l,
      c,
      d = tt(e, Object.assign({}, Ze, et($e(t)))),
      p = !1,
      u = !1,
      f = !1,
      h = !1,
      m = [],
      g = ke(Y, d.interactiveDebounce),
      v = at++,
      b = (c = d.plugins).filter(function (e, t) {
        return c.indexOf(e) === t;
      }),
      w = {
        id: v,
        reference: e,
        popper: Ie(),
        popperInstance: null,
        props: d,
        state: {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1,
        },
        plugins: b,
        clearDelayTimeouts: function () {
          clearTimeout(n), clearTimeout(i), cancelAnimationFrame(r);
        },
        setProps: function (t) {
          0;
          if (w.state.isDestroyed) return;
          D("onBeforeUpdate", [w, t]), R();
          var n = w.props,
            i = tt(e, Object.assign({}, n, $e(t), { ignoreAttributes: !0 }));
          (w.props = i),
            V(),
            n.interactiveDebounce !== i.interactiveDebounce &&
              (j(), (g = ke(Y, i.interactiveDebounce)));
          n.triggerTarget && !i.triggerTarget
            ? Me(n.triggerTarget).forEach(function (e) {
                e.removeAttribute("aria-expanded");
              })
            : i.triggerTarget && e.removeAttribute("aria-expanded");
          I(), _(), E && E(n, i);
          w.popperInstance &&
            (K(),
            J().forEach(function (e) {
              requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
            }));
          D("onAfterUpdate", [w, t]);
        },
        setContent: function (e) {
          w.setProps({ content: e });
        },
        show: function () {
          0;
          var e = w.state.isVisible,
            t = w.state.isDestroyed,
            n = !w.state.isEnabled,
            i = Re.isTouch && !w.props.touch,
            r = Le(w.props.duration, 0, Ze.duration);
          if (e || t || n || i) return;
          if (A().hasAttribute("disabled")) return;
          if ((D("onShow", [w], !1), !1 === w.props.onShow(w))) return;
          (w.state.isVisible = !0), O() && (x.style.visibility = "visible");
          _(), N(), w.state.isMounted || (x.style.transition = "none");
          if (O()) {
            var s = M(),
              o = s.box,
              l = s.content;
            Ne([o, l], 0);
          }
          (a = function () {
            var e;
            if (w.state.isVisible && !h) {
              if (
                ((h = !0),
                x.offsetHeight,
                (x.style.transition = w.props.moveTransition),
                O() && w.props.animation)
              ) {
                var t = M(),
                  n = t.box,
                  i = t.content;
                Ne([n, i], r), He([n, i], "visible");
              }
              $(),
                I(),
                Pe(ct, w),
                null == (e = w.popperInstance) || e.forceUpdate(),
                D("onMount", [w]),
                w.props.animation &&
                  O() &&
                  (function (e, t) {
                    G(e, t);
                  })(r, function () {
                    (w.state.isShown = !0), D("onShown", [w]);
                  });
            }
          }),
            (function () {
              var e,
                t = w.props.appendTo,
                n = A();
              e =
                (w.props.interactive && t === Ce) || "parent" === t
                  ? n.parentNode
                  : Ae(t, [n]);
              e.contains(x) || e.appendChild(x);
              (w.state.isMounted = !0), K(), !1;
            })();
        },
        hide: function () {
          0;
          var e = !w.state.isVisible,
            t = w.state.isDestroyed,
            n = !w.state.isEnabled,
            i = Le(w.props.duration, 1, Ze.duration);
          if (e || t || n) return;
          if ((D("onHide", [w], !1), !1 === w.props.onHide(w))) return;
          (w.state.isVisible = !1),
            (w.state.isShown = !1),
            (h = !1),
            (p = !1),
            O() && (x.style.visibility = "hidden");
          if ((j(), H(), _(!0), O())) {
            var r = M(),
              s = r.box,
              o = r.content;
            w.props.animation && (Ne([s, o], i), He([s, o], "hidden"));
          }
          $(),
            I(),
            w.props.animation
              ? O() &&
                (function (e, t) {
                  G(e, function () {
                    !w.state.isVisible &&
                      x.parentNode &&
                      x.parentNode.contains(x) &&
                      t();
                  });
                })(i, w.unmount)
              : w.unmount();
        },
        hideWithInteractivity: function (e) {
          0;
          k().addEventListener("mousemove", g), Pe(lt, g), g(e);
        },
        enable: function () {
          w.state.isEnabled = !0;
        },
        disable: function () {
          w.hide(), (w.state.isEnabled = !1);
        },
        unmount: function () {
          0;
          w.state.isVisible && w.hide();
          if (!w.state.isMounted) return;
          Z(),
            J().forEach(function (e) {
              e._tippy.unmount();
            }),
            x.parentNode && x.parentNode.removeChild(x);
          (ct = ct.filter(function (e) {
            return e !== w;
          })),
            (w.state.isMounted = !1),
            D("onHidden", [w]);
        },
        destroy: function () {
          0;
          if (w.state.isDestroyed) return;
          w.clearDelayTimeouts(),
            w.unmount(),
            R(),
            delete e._tippy,
            (w.state.isDestroyed = !0),
            D("onDestroy", [w]);
        },
      };
    if (!d.render) return w;
    var y = d.render(w),
      x = y.popper,
      E = y.onUpdate;
    x.setAttribute("data-tippy-root", ""),
      (x.id = "tippy-" + w.id),
      (w.popper = x),
      (e._tippy = w),
      (x._tippy = w);
    var T = b.map(function (e) {
        return e.fn(w);
      }),
      S = e.hasAttribute("aria-expanded");
    return (
      V(),
      I(),
      _(),
      D("onCreate", [w]),
      d.showOnCreate && ee(),
      x.addEventListener("mouseenter", function () {
        w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
      }),
      x.addEventListener("mouseleave", function () {
        w.props.interactive &&
          w.props.trigger.indexOf("mouseenter") >= 0 &&
          k().addEventListener("mousemove", g);
      }),
      w
    );
    function C() {
      var e = w.props.touch;
      return Array.isArray(e) ? e : [e, 0];
    }
    function L() {
      return "hold" === C()[0];
    }
    function O() {
      var e;
      return !(null == (e = w.props.render) || !e.$$tippy);
    }
    function A() {
      return l || e;
    }
    function k() {
      var e = A().parentNode;
      return e ? Ge(e) : document;
    }
    function M() {
      return st(x);
    }
    function P(e) {
      return (w.state.isMounted && !w.state.isVisible) ||
        Re.isTouch ||
        (s && "focus" === s.type)
        ? 0
        : Le(w.props.delay, e ? 0 : 1, Ze.delay);
    }
    function _(e) {
      void 0 === e && (e = !1),
        (x.style.pointerEvents = w.props.interactive && !e ? "" : "none"),
        (x.style.zIndex = "" + w.props.zIndex);
    }
    function D(e, t, n) {
      var i;
      (void 0 === n && (n = !0),
      T.forEach(function (n) {
        n[e] && n[e].apply(n, t);
      }),
      n) && (i = w.props)[e].apply(i, t);
    }
    function $() {
      var t = w.props.aria;
      if (t.content) {
        var n = "aria-" + t.content,
          i = x.id;
        Me(w.props.triggerTarget || e).forEach(function (e) {
          var t = e.getAttribute(n);
          if (w.state.isVisible) e.setAttribute(n, t ? t + " " + i : i);
          else {
            var r = t && t.replace(i, "").trim();
            r ? e.setAttribute(n, r) : e.removeAttribute(n);
          }
        });
      }
    }
    function I() {
      !S &&
        w.props.aria.expanded &&
        Me(w.props.triggerTarget || e).forEach(function (e) {
          w.props.interactive
            ? e.setAttribute(
                "aria-expanded",
                w.state.isVisible && e === A() ? "true" : "false"
              )
            : e.removeAttribute("aria-expanded");
        });
    }
    function j() {
      k().removeEventListener("mousemove", g),
        (lt = lt.filter(function (e) {
          return e !== g;
        }));
    }
    function z(t) {
      if (!Re.isTouch || (!f && "mousedown" !== t.type)) {
        var n = (t.composedPath && t.composedPath()[0]) || t.target;
        if (!w.props.interactive || !Ve(x, n)) {
          if (
            Me(w.props.triggerTarget || e).some(function (e) {
              return Ve(e, n);
            })
          ) {
            if (Re.isTouch) return;
            if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
              return;
          } else D("onClickOutside", [w, t]);
          !0 === w.props.hideOnClick &&
            (w.clearDelayTimeouts(),
            w.hide(),
            (u = !0),
            setTimeout(function () {
              u = !1;
            }),
            w.state.isMounted || H());
        }
      }
    }
    function W() {
      f = !0;
    }
    function B() {
      f = !1;
    }
    function N() {
      var e = k();
      e.addEventListener("mousedown", z, !0),
        e.addEventListener("touchend", z, Se),
        e.addEventListener("touchstart", B, Se),
        e.addEventListener("touchmove", W, Se);
    }
    function H() {
      var e = k();
      e.removeEventListener("mousedown", z, !0),
        e.removeEventListener("touchend", z, Se),
        e.removeEventListener("touchstart", B, Se),
        e.removeEventListener("touchmove", W, Se);
    }
    function G(e, t) {
      var n = M().box;
      function i(e) {
        e.target === n && (qe(n, "remove", i), t());
      }
      if (0 === e) return t();
      qe(n, "remove", o), qe(n, "add", i), (o = i);
    }
    function q(t, n, i) {
      void 0 === i && (i = !1),
        Me(w.props.triggerTarget || e).forEach(function (e) {
          e.addEventListener(t, n, i),
            m.push({ node: e, eventType: t, handler: n, options: i });
        });
    }
    function V() {
      L() &&
        (q("touchstart", F, { passive: !0 }),
        q("touchend", X, { passive: !0 })),
        (function (e) {
          return e.split(/\s+/).filter(Boolean);
        })(w.props.trigger).forEach(function (e) {
          if ("manual" !== e)
            switch ((q(e, F), e)) {
              case "mouseenter":
                q("mouseleave", X);
                break;
              case "focus":
                q(Qe ? "focusout" : "blur", U);
                break;
              case "focusin":
                q("focusout", U);
            }
        });
    }
    function R() {
      m.forEach(function (e) {
        var t = e.node,
          n = e.eventType,
          i = e.handler,
          r = e.options;
        t.removeEventListener(n, i, r);
      }),
        (m = []);
    }
    function F(e) {
      var t,
        n = !1;
      if (w.state.isEnabled && !Q(e) && !u) {
        var i = "focus" === (null == (t = s) ? void 0 : t.type);
        (s = e),
          (l = e.currentTarget),
          I(),
          !w.state.isVisible &&
            ze(e) &&
            lt.forEach(function (t) {
              return t(e);
            }),
          "click" === e.type &&
          (w.props.trigger.indexOf("mouseenter") < 0 || p) &&
          !1 !== w.props.hideOnClick &&
          w.state.isVisible
            ? (n = !0)
            : ee(e),
          "click" === e.type && (p = !n),
          n && !i && te(e);
      }
    }
    function Y(e) {
      var t = e.target,
        n = A().contains(t) || x.contains(t);
      if ("mousemove" !== e.type || !n) {
        var i = J()
          .concat(x)
          .map(function (e) {
            var t,
              n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
            return n
              ? {
                  popperRect: e.getBoundingClientRect(),
                  popperState: n,
                  props: d,
                }
              : null;
          })
          .filter(Boolean);
        (function (e, t) {
          var n = t.clientX,
            i = t.clientY;
          return e.every(function (e) {
            var t = e.popperRect,
              r = e.popperState,
              s = e.props.interactiveBorder,
              o = _e(r.placement),
              a = r.modifiersData.offset;
            if (!a) return !0;
            var l = "bottom" === o ? a.top.y : 0,
              c = "top" === o ? a.bottom.y : 0,
              d = "right" === o ? a.left.x : 0,
              p = "left" === o ? a.right.x : 0,
              u = t.top - i + l > s,
              f = i - t.bottom - c > s,
              h = t.left - n + d > s,
              m = n - t.right - p > s;
            return u || f || h || m;
          });
        })(i, e) && (j(), te(e));
      }
    }
    function X(e) {
      Q(e) ||
        (w.props.trigger.indexOf("click") >= 0 && p) ||
        (w.props.interactive ? w.hideWithInteractivity(e) : te(e));
    }
    function U(e) {
      (w.props.trigger.indexOf("focusin") < 0 && e.target !== A()) ||
        (w.props.interactive &&
          e.relatedTarget &&
          x.contains(e.relatedTarget)) ||
        te(e);
    }
    function Q(e) {
      return !!Re.isTouch && L() !== e.type.indexOf("touch") >= 0;
    }
    function K() {
      Z();
      var t = w.props,
        n = t.popperOptions,
        i = t.placement,
        r = t.offset,
        s = t.getReferenceClientRect,
        o = t.moveTransition,
        l = O() ? st(x).arrow : null,
        c = s
          ? {
              getBoundingClientRect: s,
              contextElement: s.contextElement || A(),
            }
          : e,
        d = {
          name: "$$tippy",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function (e) {
            var t = e.state;
            if (O()) {
              var n = M().box;
              ["placement", "reference-hidden", "escaped"].forEach(function (
                e
              ) {
                "placement" === e
                  ? n.setAttribute("data-placement", t.placement)
                  : t.attributes.popper["data-popper-" + e]
                  ? n.setAttribute("data-" + e, "")
                  : n.removeAttribute("data-" + e);
              }),
                (t.attributes.popper = {});
            }
          },
        },
        p = [
          { name: "offset", options: { offset: r } },
          {
            name: "preventOverflow",
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: "flip", options: { padding: 5 } },
          { name: "computeStyles", options: { adaptive: !o } },
          d,
        ];
      O() &&
        l &&
        p.push({ name: "arrow", options: { element: l, padding: 3 } }),
        p.push.apply(p, (null == n ? void 0 : n.modifiers) || []),
        (w.popperInstance = we(
          c,
          x,
          Object.assign({}, n, { placement: i, onFirstUpdate: a, modifiers: p })
        ));
    }
    function Z() {
      w.popperInstance &&
        (w.popperInstance.destroy(), (w.popperInstance = null));
    }
    function J() {
      return De(x.querySelectorAll("[data-tippy-root]"));
    }
    function ee(e) {
      w.clearDelayTimeouts(), e && D("onTrigger", [w, e]), N();
      var t = P(!0),
        i = C(),
        r = i[0],
        s = i[1];
      Re.isTouch && "hold" === r && s && (t = s),
        t
          ? (n = setTimeout(function () {
              w.show();
            }, t))
          : w.show();
    }
    function te(e) {
      if (
        (w.clearDelayTimeouts(), D("onUntrigger", [w, e]), w.state.isVisible)
      ) {
        if (
          !(
            w.props.trigger.indexOf("mouseenter") >= 0 &&
            w.props.trigger.indexOf("click") >= 0 &&
            ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
            p
          )
        ) {
          var t = P(!1);
          t
            ? (i = setTimeout(function () {
                w.state.isVisible && w.hide();
              }, t))
            : (r = requestAnimationFrame(function () {
                w.hide();
              }));
        }
      } else H();
    }
  }
  function pt(e, t) {
    void 0 === t && (t = {});
    var n = Ze.plugins.concat(t.plugins || []);
    document.addEventListener("touchstart", Ye, Se),
      window.addEventListener("blur", Ue);
    var i = Object.assign({}, t, { plugins: n }),
      r = Be(e).reduce(function (e, t) {
        var n = t && dt(t, i);
        return n && e.push(n), e;
      }, []);
    return je(e) ? r[0] : r;
  }
  (pt.defaultProps = Ze),
    (pt.setDefaultProps = function (e) {
      Object.keys(e).forEach(function (t) {
        Ze[t] = e[t];
      });
    }),
    (pt.currentInput = Re);
  Object.assign({}, te, {
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
    },
  });
  pt.setDefaultProps({ render: ot });
  const ut = pt;
  function ft(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function ht(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      void 0 === e[n]
        ? (e[n] = t[n])
        : ft(t[n]) &&
          ft(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          ht(e[n], t[n]);
    });
  }
  e.tippy = ut("[data-tippy-content]", {});
  const mt = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function gt() {
    const e = "undefined" != typeof document ? document : {};
    return ht(e, mt), e;
  }
  const vt = {
    document: mt,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function bt() {
    const e = "undefined" != typeof window ? window : {};
    return ht(e, vt), e;
  }
  class wt extends Array {
    constructor(e) {
      super(...(e || [])),
        (function (e) {
          const t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get: () => t,
            set(e) {
              t.__proto__ = e;
            },
          });
        })(this);
    }
  }
  function yt(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...yt(e)) : t.push(e);
      }),
      t
    );
  }
  function xt(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function Et(e, t) {
    const n = bt(),
      i = gt();
    let r = [];
    if (!t && e instanceof wt) return e;
    if (!e) return new wt(r);
    if ("string" == typeof e) {
      const n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        let e = "div";
        0 === n.indexOf("<li") && (e = "ul"),
          0 === n.indexOf("<tr") && (e = "tbody"),
          (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
          0 === n.indexOf("<tbody") && (e = "table"),
          0 === n.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = n;
        for (let e = 0; e < t.childNodes.length; e += 1)
          r.push(t.childNodes[e]);
      } else
        r = (function (e, t) {
          if ("string" != typeof e) return [e];
          const n = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) n.push(i[e]);
          return n;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === n || e === i) r.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof wt) return e;
      r = e;
    }
    return new wt(
      (function (e) {
        const t = [];
        for (let n = 0; n < e.length; n += 1)
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      })(r)
    );
  }
  Et.fn = wt.prototype;
  const Tt = "resize scroll".split(" ");
  function St(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          Tt.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : Et(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  St("click"),
    St("blur"),
    St("focus"),
    St("focusin"),
    St("focusout"),
    St("keyup"),
    St("keydown"),
    St("keypress"),
    St("submit"),
    St("change"),
    St("mousedown"),
    St("mousemove"),
    St("mouseup"),
    St("mouseenter"),
    St("mouseleave"),
    St("mouseout"),
    St("mouseover"),
    St("touchstart"),
    St("touchend"),
    St("touchmove"),
    St("resize"),
    St("scroll");
  const Ct = {
    addClass: function (...e) {
      const t = yt(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = yt(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = yt(e.map((e) => e.split(" ")));
      return (
        xt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = yt(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let n = 0; n < this.length; n += 1)
        if (2 === arguments.length) this[n].setAttribute(e, t);
        else
          for (const t in e) (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, n, i, r] = e;
      function s(e) {
        const t = e.target;
        if (!t) return;
        const r = e.target.dom7EventData || [];
        if ((r.indexOf(e) < 0 && r.unshift(e), Et(t).is(n))) i.apply(t, r);
        else {
          const e = Et(t).parents();
          for (let t = 0; t < e.length; t += 1)
            Et(e[t]).is(n) && i.apply(e[t], r);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
        r || (r = !1);
      const a = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (n)
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: s }),
              t.addEventListener(e, s, r);
          }
        else
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
              t.addEventListener(e, o, r);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, n, i, r] = e;
      "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
        r || (r = !1);
      const s = t.split(" ");
      for (let e = 0; e < s.length; e += 1) {
        const t = s[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let o;
          if (
            (!n && s.dom7Listeners
              ? (o = s.dom7Listeners[t])
              : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
            o && o.length)
          )
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const n = o[e];
              (i && n.listener === i) ||
              (i &&
                n.listener &&
                n.listener.dom7proxy &&
                n.listener.dom7proxy === i)
                ? (s.removeEventListener(t, n.proxyListener, r), o.splice(e, 1))
                : i ||
                  (s.removeEventListener(t, n.proxyListener, r),
                  o.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = bt(),
        n = e[0].split(" "),
        i = e[1];
      for (let r = 0; r < n.length; r += 1) {
        const s = n[r];
        for (let n = 0; n < this.length; n += 1) {
          const r = this[n];
          if (t.CustomEvent) {
            const n = new t.CustomEvent(s, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (r.dom7EventData = e.filter((e, t) => t > 0)),
              r.dispatchEvent(n),
              (r.dom7EventData = []),
              delete r.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function n(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", n));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = bt();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = bt(),
          t = gt(),
          n = this[0],
          i = n.getBoundingClientRect(),
          r = t.body,
          s = n.clientTop || r.clientTop || 0,
          o = n.clientLeft || r.clientLeft || 0,
          a = n === e ? e.scrollY : n.scrollTop,
          l = n === e ? e.scrollX : n.scrollLeft;
        return { top: i.top + a - s, left: i.left + l - o };
      }
      return null;
    },
    css: function (e, t) {
      const n = bt();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, n) => {
            e.apply(t, [t, n]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = bt(),
        n = gt(),
        i = this[0];
      let r, s;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (r = Et(e), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
        return !1;
      }
      if (e === n) return i === n;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof wt) {
        for (r = e.nodeType ? [e] : e, s = 0; s < r.length; s += 1)
          if (r[s] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return Et([]);
      if (e < 0) {
        const n = t + e;
        return Et(n < 0 ? [] : [this[n]]);
      }
      return Et([this[e]]);
    },
    append: function (...e) {
      let t;
      const n = gt();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = n.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof wt)
            for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = gt();
      let n, i;
      for (n = 0; n < this.length; n += 1)
        if ("string" == typeof e) {
          const r = t.createElement("div");
          for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
            this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
        } else if (e instanceof wt)
          for (i = 0; i < e.length; i += 1)
            this[n].insertBefore(e[i], this[n].childNodes[0]);
        else this[n].insertBefore(e, this[n].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && Et(this[0].nextElementSibling).is(e)
            ? Et([this[0].nextElementSibling])
            : Et([])
          : this[0].nextElementSibling
          ? Et([this[0].nextElementSibling])
          : Et([])
        : Et([]);
    },
    nextAll: function (e) {
      const t = [];
      let n = this[0];
      if (!n) return Et([]);
      for (; n.nextElementSibling; ) {
        const i = n.nextElementSibling;
        e ? Et(i).is(e) && t.push(i) : t.push(i), (n = i);
      }
      return Et(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && Et(t.previousElementSibling).is(e)
            ? Et([t.previousElementSibling])
            : Et([])
          : t.previousElementSibling
          ? Et([t.previousElementSibling])
          : Et([]);
      }
      return Et([]);
    },
    prevAll: function (e) {
      const t = [];
      let n = this[0];
      if (!n) return Et([]);
      for (; n.previousElementSibling; ) {
        const i = n.previousElementSibling;
        e ? Et(i).is(e) && t.push(i) : t.push(i), (n = i);
      }
      return Et(t);
    },
    parent: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1)
        null !== this[n].parentNode &&
          (e
            ? Et(this[n].parentNode).is(e) && t.push(this[n].parentNode)
            : t.push(this[n].parentNode));
      return Et(t);
    },
    parents: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        let i = this[n].parentNode;
        for (; i; )
          e ? Et(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return Et(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? Et([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        const i = this[n].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return Et(t);
    },
    children: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        const i = this[n].children;
        for (let n = 0; n < i.length; n += 1)
          (e && !Et(i[n]).is(e)) || t.push(i[n]);
      }
      return Et(t);
    },
    filter: function (e) {
      return Et(xt(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(Ct).forEach((e) => {
    Object.defineProperty(Et.fn, e, { value: Ct[e], writable: !0 });
  });
  const Lt = Et;
  function Ot(e, t = 0) {
    return setTimeout(e, t);
  }
  function At() {
    return Date.now();
  }
  function kt(e, t = "x") {
    const n = bt();
    let i, r, s;
    const o = (function (e) {
      const t = bt();
      let n;
      return (
        t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
      );
    })(e);
    return (
      n.WebKitCSSMatrix
        ? ((r = o.transform || o.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
        : ((s =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      "x" === t &&
        (r = n.WebKitCSSMatrix
          ? s.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (r = n.WebKitCSSMatrix
          ? s.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      r || 0
    );
  }
  function Mt(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function Pt(...e) {
    const t = Object(e[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < e.length; r += 1) {
      const s = e[r];
      if (
        null != s &&
        ((i = s),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(s)).filter((e) => n.indexOf(e) < 0);
        for (let n = 0, i = e.length; n < i; n += 1) {
          const i = e[n],
            r = Object.getOwnPropertyDescriptor(s, i);
          void 0 !== r &&
            r.enumerable &&
            (Mt(t[i]) && Mt(s[i])
              ? s[i].__swiper__
                ? (t[i] = s[i])
                : Pt(t[i], s[i])
              : !Mt(t[i]) && Mt(s[i])
              ? ((t[i] = {}), s[i].__swiper__ ? (t[i] = s[i]) : Pt(t[i], s[i]))
              : (t[i] = s[i]));
        }
      }
    }
    var i;
    return t;
  }
  function _t(e, t, n) {
    e.style.setProperty(t, n);
  }
  function Dt({ swiper: e, targetPosition: t, side: n }) {
    const i = bt(),
      r = -e.translate;
    let s,
      o = null;
    const a = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > r ? "next" : "prev",
      c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
      d = () => {
        (s = new Date().getTime()), null === o && (o = s);
        const l = Math.max(Math.min((s - o) / a, 1), 0),
          p = 0.5 - Math.cos(l * Math.PI) / 2;
        let u = r + p * (t - r);
        if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [n]: u }), c(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [n]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  let $t, It, jt;
  function zt() {
    return (
      $t ||
        ($t = (function () {
          const e = bt(),
            t = gt();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const n = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, n);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      $t
    );
  }
  function Wt(e = {}) {
    return (
      It ||
        (It = (function ({ userAgent: e } = {}) {
          const t = zt(),
            n = bt(),
            i = n.navigator.platform,
            r = e || n.navigator.userAgent,
            s = { ios: !1, android: !1 },
            o = n.screen.width,
            a = n.screen.height,
            l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = r.match(/(iPad).*OS\s([\d_]+)/);
          const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            u = "Win32" === i;
          let f = "MacIntel" === i;
          return (
            !c &&
              f &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${o}x${a}`) >= 0 &&
              ((c = r.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (f = !1)),
            l && !u && ((s.os = "android"), (s.android = !0)),
            (c || p || d) && ((s.os = "ios"), (s.ios = !0)),
            s
          );
        })(e)),
      It
    );
  }
  function Bt() {
    return (
      jt ||
        (jt = (function () {
          const e = bt();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      jt
    );
  }
  const Nt = {
    on(e, t, n) {
      const i = this;
      if ("function" != typeof t) return i;
      const r = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][r](t);
        }),
        i
      );
    },
    once(e, t, n) {
      const i = this;
      if ("function" != typeof t) return i;
      function r(...n) {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, n);
      }
      return (r.__emitterProxy = t), i.on(e, r, n);
    },
    onAny(e, t) {
      const n = this;
      if ("function" != typeof e) return n;
      const i = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return n.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (n.eventsListeners[e] = [])
              : n.eventsListeners[e] &&
                n.eventsListeners[e].forEach((i, r) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    n.eventsListeners[e].splice(r, 1);
                });
          }),
          n)
        : n;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let n, i, r;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((n = e[0]), (i = e.slice(1, e.length)), (r = t))
        : ((n = e[0].events), (i = e[0].data), (r = e[0].context || t)),
        i.unshift(r);
      return (
        (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(r, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(r, i);
              });
        }),
        t
      );
    },
  };
  const Ht = {
    updateSize: function () {
      const e = this;
      let t, n;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (n =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === n && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (n =
            n -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(n) && (n = 0),
          Object.assign(e, {
            width: t,
            height: n,
            size: e.isHorizontal() ? t : n,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function n(e, n) {
        return parseFloat(e.getPropertyValue(t(n)) || 0);
      }
      const i = e.params,
        { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = e,
        l = e.virtual && i.virtual.enabled,
        c = l ? e.virtual.slides.length : e.slides.length,
        d = r.children(`.${e.params.slideClass}`),
        p = l ? e.virtual.slides.length : d.length;
      let u = [];
      const f = [],
        h = [];
      let m = i.slidesOffsetBefore;
      "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
      let g = i.slidesOffsetAfter;
      "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        b = e.slidesGrid.length;
      let w = i.spaceBetween,
        y = -m,
        x = 0,
        E = 0;
      if (void 0 === s) return;
      "string" == typeof w &&
        w.indexOf("%") >= 0 &&
        (w = (parseFloat(w.replace("%", "")) / 100) * s),
        (e.virtualSize = -w),
        o
          ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (_t(e.wrapperEl, "--swiper-centered-offset-before", ""),
          _t(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const T = i.grid && i.grid.rows > 1 && e.grid;
      let S;
      T && e.grid.initSlides(p);
      const C =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let r = 0; r < p; r += 1) {
        S = 0;
        const o = d.eq(r);
        if (
          (T && e.grid.updateSlide(r, o, p, t), "none" !== o.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            C && (d[r].style[t("width")] = "");
            const s = getComputedStyle(o[0]),
              a = o[0].style.transform,
              l = o[0].style.webkitTransform;
            if (
              (a && (o[0].style.transform = "none"),
              l && (o[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              S = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
            else {
              const e = n(s, "width"),
                t = n(s, "padding-left"),
                i = n(s, "padding-right"),
                r = n(s, "margin-left"),
                a = n(s, "margin-right"),
                l = s.getPropertyValue("box-sizing");
              if (l && "border-box" === l) S = e + r + a;
              else {
                const { clientWidth: n, offsetWidth: s } = o[0];
                S = e + t + i + r + a + (s - n);
              }
            }
            a && (o[0].style.transform = a),
              l && (o[0].style.webkitTransform = l),
              i.roundLengths && (S = Math.floor(S));
          } else
            (S = (s - (i.slidesPerView - 1) * w) / i.slidesPerView),
              i.roundLengths && (S = Math.floor(S)),
              d[r] && (d[r].style[t("width")] = `${S}px`);
          d[r] && (d[r].swiperSlideSize = S),
            h.push(S),
            i.centeredSlides
              ? ((y = y + S / 2 + x / 2 + w),
                0 === x && 0 !== r && (y = y - s / 2 - w),
                0 === r && (y = y - s / 2 - w),
                Math.abs(y) < 0.001 && (y = 0),
                i.roundLengths && (y = Math.floor(y)),
                E % i.slidesPerGroup == 0 && u.push(y),
                f.push(y))
              : (i.roundLengths && (y = Math.floor(y)),
                (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(y),
                f.push(y),
                (y = y + S + w)),
            (e.virtualSize += S + w),
            (x = S),
            (E += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, s) + g),
        o &&
          a &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        T && e.grid.updateWrapperSize(S, u, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let n = 0; n < u.length; n += 1) {
          let r = u[n];
          i.roundLengths && (r = Math.floor(r)),
            u[n] <= e.virtualSize - s && t.push(r);
        }
        (u = t),
          Math.floor(e.virtualSize - s) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - s);
      }
      if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
        const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
          [n]: `${w}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        h.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - s;
        u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < s)
        ) {
          const t = (s - e) / 2;
          u.forEach((e, n) => {
            u[n] = e - t;
          }),
            f.forEach((e, n) => {
              f[n] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: d,
          snapGrid: u,
          slidesGrid: f,
          slidesSizesGrid: h,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        _t(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          _t(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - h[h.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          n = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + n));
      }
      p !== c && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        f.length !== b && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function (e) {
      const t = this,
        n = [],
        i = t.virtual && t.params.virtual.enabled;
      let r,
        s = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            n.push(e);
          });
        else
          for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
            const e = t.activeIndex + r;
            if (e > t.slides.length && !i) break;
            n.push(o(e));
          }
      else n.push(o(t.activeIndex));
      for (r = 0; r < n.length; r += 1)
        if (void 0 !== n[r]) {
          const e = n[r].offsetHeight;
          s = e > s ? e : s;
        }
      (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let n = 0; n < t.length; n += 1)
        t[n].swiperSlideOffset = e.isHorizontal()
          ? t[n].offsetLeft
          : t[n].offsetTop;
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        n = t.params,
        { slides: i, rtlTranslate: r, snapGrid: s } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      r && (o = e),
        i.removeClass(n.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const a = i[e];
        let l = a.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
        const c =
            (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + n.spaceBetween),
          d =
            (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + n.spaceBetween),
          p = -(o - l),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(a),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(n.slideVisibleClass)),
          (a.progress = r ? -c : c),
          (a.originalProgress = r ? -d : d);
      }
      t.visibleSlides = Lt(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const n = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * n) || 0;
      }
      const n = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: r, isBeginning: s, isEnd: o } = t;
      const a = s,
        l = o;
      0 === i
        ? ((r = 0), (s = !0), (o = !0))
        : ((r = (e - t.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
        Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
          t.updateSlidesProgress(e),
        s && !a && t.emit("reachBeginning toEdge"),
        o && !l && t.emit("reachEnd toEdge"),
        ((a && !s) || (l && !o)) && t.emit("fromEdge"),
        t.emit("progress", r);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: n,
          $wrapperEl: i,
          activeIndex: r,
          realIndex: s,
        } = e,
        o = e.virtual && n.virtual.enabled;
      let a;
      t.removeClass(
        `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
      ),
        (a = o
          ? e.$wrapperEl.find(
              `.${n.slideClass}[data-swiper-slide-index="${r}"]`
            )
          : t.eq(r)),
        a.addClass(n.slideActiveClass),
        n.loop &&
          (a.hasClass(n.slideDuplicateClass)
            ? i
                .children(
                  `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                )
                .addClass(n.slideDuplicateActiveClass)
            : i
                .children(
                  `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                )
                .addClass(n.slideDuplicateActiveClass));
      let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
      n.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(n.slideNextClass));
      let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
      n.loop &&
        0 === c.length &&
        ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
        n.loop &&
          (l.hasClass(n.slideDuplicateClass)
            ? i
                .children(
                  `.${n.slideClass}:not(.${
                    n.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicateNextClass)
            : i
                .children(
                  `.${n.slideClass}.${
                    n.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicateNextClass),
          c.hasClass(n.slideDuplicateClass)
            ? i
                .children(
                  `.${n.slideClass}:not(.${
                    n.slideDuplicateClass
                  })[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicatePrevClass)
            : i
                .children(
                  `.${n.slideClass}.${
                    n.slideDuplicateClass
                  }[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: r,
          params: s,
          activeIndex: o,
          realIndex: a,
          snapIndex: l,
        } = t;
      let c,
        d = e;
      if (void 0 === d) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (d = e)
              : n >= i[e] && n < i[e + 1] && (d = e + 1)
            : n >= i[e] && (d = e);
        s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (r.indexOf(n) >= 0) c = r.indexOf(n);
      else {
        const e = Math.min(s.slidesPerGroupSkip, d);
        c = e + Math.floor((d - e) / s.slidesPerGroup);
      }
      if ((c >= r.length && (c = r.length - 1), d === o))
        return void (c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(d).attr("data-swiper-slide-index") || d,
        10
      );
      Object.assign(t, {
        snapIndex: c,
        realIndex: p,
        previousIndex: o,
        activeIndex: d,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        n = t.params,
        i = Lt(e).closest(`.${n.slideClass}`)[0];
      let r,
        s = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (s = !0), (r = e);
            break;
          }
      if (!i || !s)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              Lt(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = r),
        n.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const Gt = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: n, translate: i, $wrapperEl: r } = this;
      if (t.virtualTranslate) return n ? -i : i;
      if (t.cssMode) return i;
      let s = kt(r[0], e);
      return n && (s = -s), s || 0;
    },
    setTranslate: function (e, t) {
      const n = this,
        {
          rtlTranslate: i,
          params: r,
          $wrapperEl: s,
          wrapperEl: o,
          progress: a,
        } = n;
      let l,
        c = 0,
        d = 0;
      n.isHorizontal() ? (c = i ? -e : e) : (d = e),
        r.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
        r.cssMode
          ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
              ? -c
              : -d)
          : r.virtualTranslate ||
            s.transform(`translate3d(${c}px, ${d}px, 0px)`),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? c : d);
      const p = n.maxTranslate() - n.minTranslate();
      (l = 0 === p ? 0 : (e - n.minTranslate()) / p),
        l !== a && n.updateProgress(e),
        n.emit("setTranslate", n.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, n = !0, i = !0, r) {
      const s = this,
        { params: o, wrapperEl: a } = s;
      if (s.animating && o.preventInteractionOnTransition) return !1;
      const l = s.minTranslate(),
        c = s.maxTranslate();
      let d;
      if (
        ((d = i && e > l ? l : i && e < c ? c : e),
        s.updateProgress(d),
        o.cssMode)
      ) {
        const e = s.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!s.support.smoothScroll)
            return (
              Dt({ swiper: s, targetPosition: -d, side: e ? "left" : "top" }),
              !0
            );
          a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (s.setTransition(0),
            s.setTranslate(d),
            n &&
              (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd")))
          : (s.setTransition(t),
            s.setTranslate(d),
            n &&
              (s.emit("beforeTransitionStart", t, r),
              s.emit("transitionStart")),
            s.animating ||
              ((s.animating = !0),
              s.onTranslateToWrapperTransitionEnd ||
                (s.onTranslateToWrapperTransitionEnd = function (e) {
                  s &&
                    !s.destroyed &&
                    e.target === this &&
                    (s.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    n && s.emit("transitionEnd"));
                }),
              s.$wrapperEl[0].addEventListener(
                "transitionend",
                s.onTranslateToWrapperTransitionEnd
              ),
              s.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                s.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function qt({ swiper: e, runCallbacks: t, direction: n, step: i }) {
    const { activeIndex: r, previousIndex: s } = e;
    let o = n;
    if (
      (o || (o = r > s ? "next" : r < s ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && r !== s)
    ) {
      if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === o
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const Vt = {
    slideTo: function (e = 0, t = this.params.speed, n = !0, i, r) {
      if ("number" != typeof e && "string" != typeof e)
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const s = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: a,
        snapGrid: l,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: f,
        enabled: h,
      } = s;
      if ((s.animating && a.preventInteractionOnTransition) || (!h && !i && !r))
        return !1;
      const m = Math.min(s.params.slidesPerGroupSkip, o);
      let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1),
        (p || a.initialSlide || 0) === (d || 0) &&
          n &&
          s.emit("beforeSlideChangeStart");
      const v = -l[g];
      if ((s.updateProgress(v), a.normalizeSlideIndex))
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * v),
            n = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= n && t < i - (i - n) / 2
              ? (o = e)
              : t >= n && t < i && (o = e + 1)
            : t >= n && (o = e);
        }
      if (s.initialized && o !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
          return !1;
        if (
          !s.allowSlidePrev &&
          v > s.translate &&
          v > s.maxTranslate() &&
          (p || 0) !== o
        )
          return !1;
      }
      let b;
      if (
        ((b = o > p ? "next" : o < p ? "prev" : "reset"),
        (u && -v === s.translate) || (!u && v === s.translate))
      )
        return (
          s.updateActiveIndex(o),
          a.autoHeight && s.updateAutoHeight(),
          s.updateSlidesClasses(),
          "slide" !== a.effect && s.setTranslate(v),
          "reset" !== b && (s.transitionStart(n, b), s.transitionEnd(n, b)),
          !1
        );
      if (a.cssMode) {
        const e = s.isHorizontal(),
          n = u ? v : -v;
        if (0 === t) {
          const t = s.virtual && s.params.virtual.enabled;
          t &&
            ((s.wrapperEl.style.scrollSnapType = "none"),
            (s._immediateVirtual = !0)),
            (f[e ? "scrollLeft" : "scrollTop"] = n),
            t &&
              requestAnimationFrame(() => {
                (s.wrapperEl.style.scrollSnapType = ""),
                  (s._swiperImmediateVirtual = !1);
              });
        } else {
          if (!s.support.smoothScroll)
            return (
              Dt({ swiper: s, targetPosition: n, side: e ? "left" : "top" }), !0
            );
          f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
        }
        return !0;
      }
      return (
        s.setTransition(t),
        s.setTranslate(v),
        s.updateActiveIndex(o),
        s.updateSlidesClasses(),
        s.emit("beforeTransitionStart", t, i),
        s.transitionStart(n, b),
        0 === t
          ? s.transitionEnd(n, b)
          : s.animating ||
            ((s.animating = !0),
            s.onSlideToWrapperTransitionEnd ||
              (s.onSlideToWrapperTransitionEnd = function (e) {
                s &&
                  !s.destroyed &&
                  e.target === this &&
                  (s.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(n, b));
              }),
            s.$wrapperEl[0].addEventListener(
              "transitionend",
              s.onSlideToWrapperTransitionEnd
            ),
            s.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              s.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
      const r = this;
      let s = e;
      return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i);
    },
    slideNext: function (e = this.params.speed, t = !0, n) {
      const i = this,
        { animating: r, enabled: s, params: o } = i;
      if (!s) return i;
      let a = o.slidesPerGroup;
      "auto" === o.slidesPerView &&
        1 === o.slidesPerGroup &&
        o.slidesPerGroupAuto &&
        (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
      if (o.loop) {
        if (r && o.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return o.rewind && i.isEnd
        ? i.slideTo(0, e, t, n)
        : i.slideTo(i.activeIndex + l, e, t, n);
    },
    slidePrev: function (e = this.params.speed, t = !0, n) {
      const i = this,
        {
          params: r,
          animating: s,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: c,
        } = i;
      if (!c) return i;
      if (r.loop) {
        if (s && r.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = d(l ? i.translate : -i.translate),
        u = o.map((e) => d(e));
      let f = o[u.indexOf(p) - 1];
      if (void 0 === f && r.cssMode) {
        let e;
        o.forEach((t, n) => {
          p >= t && (e = n);
        }),
          void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
      }
      let h = 0;
      return (
        void 0 !== f &&
          ((h = a.indexOf(f)),
          h < 0 && (h = i.activeIndex - 1),
          "auto" === r.slidesPerView &&
            1 === r.slidesPerGroup &&
            r.slidesPerGroupAuto &&
            ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
            (h = Math.max(h, 0)))),
        r.rewind && i.isBeginning
          ? i.slideTo(i.slides.length - 1, e, t, n)
          : i.slideTo(h, e, t, n)
      );
    },
    slideReset: function (e = this.params.speed, t = !0, n) {
      return this.slideTo(this.activeIndex, e, t, n);
    },
    slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
      const r = this;
      let s = r.activeIndex;
      const o = Math.min(r.params.slidesPerGroupSkip, s),
        a = o + Math.floor((s - o) / r.params.slidesPerGroup),
        l = r.rtlTranslate ? r.translate : -r.translate;
      if (l >= r.snapGrid[a]) {
        const e = r.snapGrid[a];
        l - e > (r.snapGrid[a + 1] - e) * i && (s += r.params.slidesPerGroup);
      } else {
        const e = r.snapGrid[a - 1];
        l - e <= (r.snapGrid[a] - e) * i && (s -= r.params.slidesPerGroup);
      }
      return (
        (s = Math.max(s, 0)),
        (s = Math.min(s, r.slidesGrid.length - 1)),
        r.slideTo(s, e, t, n)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: n } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let r,
        s = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (r = parseInt(Lt(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? s < e.loopedSlides - i / 2 ||
              s > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (s = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                Ot(() => {
                  e.slideTo(s);
                }))
              : e.slideTo(s)
            : s > e.slides.length - i
            ? (e.loopFix(),
              (s = n
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              Ot(() => {
                e.slideTo(s);
              }))
            : e.slideTo(s);
      } else e.slideTo(s);
    },
  };
  const Rt = {
    loopCreate: function () {
      const e = this,
        t = gt(),
        { params: n, $wrapperEl: i } = e,
        r = i.children().length > 0 ? Lt(i.children()[0].parentNode) : i;
      r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
      let s = r.children(`.${n.slideClass}`);
      if (n.loopFillGroupWithBlank) {
        const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
        if (e !== n.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = Lt(t.createElement("div")).addClass(
              `${n.slideClass} ${n.slideBlankClass}`
            );
            r.append(e);
          }
          s = r.children(`.${n.slideClass}`);
        }
      }
      "auto" !== n.slidesPerView ||
        n.loopedSlides ||
        (n.loopedSlides = s.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(n.loopedSlides || n.slidesPerView, 10)
        )),
        (e.loopedSlides += n.loopAdditionalSlides),
        e.loopedSlides > s.length && (e.loopedSlides = s.length);
      const o = [],
        a = [];
      s.each((t, n) => {
        const i = Lt(t);
        n < e.loopedSlides && a.push(t),
          n < s.length && n >= s.length - e.loopedSlides && o.push(t),
          i.attr("data-swiper-slide-index", n);
      });
      for (let e = 0; e < a.length; e += 1)
        r.append(Lt(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      for (let e = o.length - 1; e >= 0; e -= 1)
        r.prepend(Lt(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: n,
        loopedSlides: i,
        allowSlidePrev: r,
        allowSlideNext: s,
        snapGrid: o,
        rtlTranslate: a,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const c = -o[t] - e.getTranslate();
      if (t < i) {
        (l = n.length - 3 * i + t), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      } else if (t >= n.length - i) {
        (l = -n.length + t + i), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      }
      (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: n } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        n.removeAttr("data-swiper-slide-index");
    },
  };
  function Ft(e) {
    const t = this,
      n = gt(),
      i = bt(),
      r = t.touchEventsData,
      { params: s, touches: o, enabled: a } = t;
    if (!a) return;
    if (t.animating && s.preventInteractionOnTransition) return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let c = Lt(l.target);
    if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
      return;
    if (
      ((r.isTouchEvent = "touchstart" === l.type),
      !r.isTouchEvent && "which" in l && 3 === l.which)
    )
      return;
    if (!r.isTouchEvent && "button" in l && l.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    !!s.noSwipingClass &&
      "" !== s.noSwipingClass &&
      l.target &&
      l.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (c = Lt(e.path[0]));
    const d = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      p = !(!l.target || !l.target.shadowRoot);
    if (
      s.noSwiping &&
      (p
        ? (function (e, t = this) {
            return (function t(n) {
              return n && n !== gt() && n !== bt()
                ? (n.assignedSlot && (n = n.assignedSlot),
                  n.closest(e) || t(n.getRootNode().host))
                : null;
            })(t);
          })(d, l.target)
        : c.closest(d)[0])
    )
      return void (t.allowClick = !0);
    if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
      (o.currentY =
        "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
    const u = o.currentX,
      f = o.currentY,
      h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
      m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (h && (u <= m || u >= i.innerWidth - m)) {
      if ("prevent" !== h) return;
      e.preventDefault();
    }
    if (
      (Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = u),
      (o.startY = f),
      (r.touchStartTime = At()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1),
      "touchstart" !== l.type)
    ) {
      let e = !0;
      c.is(r.focusableElements) && (e = !1),
        n.activeElement &&
          Lt(n.activeElement).is(r.focusableElements) &&
          n.activeElement !== c[0] &&
          n.activeElement.blur();
      const i = e && t.allowTouchMove && s.touchStartPreventDefault;
      (!s.touchStartForcePreventDefault && !i) ||
        c[0].isContentEditable ||
        l.preventDefault();
    }
    t.emit("touchStart", l);
  }
  function Yt(e) {
    const t = gt(),
      n = this,
      i = n.touchEventsData,
      { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
    if (!a) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        n.emit("touchMoveOpposite", l)
      );
    if (i.isTouchEvent && "touchmove" !== l.type) return;
    const c =
        "touchmove" === l.type &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      d = "touchmove" === l.type ? c.pageX : l.pageX,
      p = "touchmove" === l.type ? c.pageY : l.pageY;
    if (l.preventedByNestedSwiper) return (s.startX = d), void (s.startY = p);
    if (!n.allowTouchMove)
      return (
        (n.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(s, { startX: d, startY: p, currentX: d, currentY: p }),
          (i.touchStartTime = At()))
        )
      );
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
      if (n.isVertical()) {
        if (
          (p < s.startY && n.translate <= n.maxTranslate()) ||
          (p > s.startY && n.translate >= n.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (d < s.startX && n.translate <= n.maxTranslate()) ||
        (d > s.startX && n.translate >= n.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      l.target === t.activeElement &&
      Lt(l.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (n.allowClick = !1);
    if (
      (i.allowTouchCallbacks && n.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (s.currentX = d), (s.currentY = p);
    const u = s.currentX - s.startX,
      f = s.currentY - s.startY;
    if (n.params.threshold && Math.sqrt(u ** 2 + f ** 2) < n.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (n.isHorizontal() && s.currentY === s.startY) ||
      (n.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : u * u + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(u))) / Math.PI),
          (i.isScrolling = n.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && n.emit("touchMoveOpposite", l),
      void 0 === i.startMoving &&
        ((s.currentX === s.startX && s.currentY === s.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (n.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && n.loopFix(),
        (i.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating &&
          n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", l)),
      n.emit("sliderMove", l),
      (i.isMoved = !0);
    let h = n.isHorizontal() ? u : f;
    (s.diff = h),
      (h *= r.touchRatio),
      o && (h = -h),
      (n.swipeDirection = h > 0 ? "prev" : "next"),
      (i.currentTranslate = h + i.startTranslate);
    let m = !0,
      g = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (g = 0),
      h > 0 && i.currentTranslate > n.minTranslate()
        ? ((m = !1),
          r.resistance &&
            (i.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + i.startTranslate + h) ** g))
        : h < 0 &&
          i.currentTranslate < n.maxTranslate() &&
          ((m = !1),
          r.resistance &&
            (i.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - i.startTranslate - h) ** g)),
      m && (l.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        "next" === n.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !n.allowSlidePrev &&
        "prev" === n.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      n.allowSlidePrev ||
        n.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(h) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (i.currentTranslate = i.startTranslate),
          void (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
        r.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      n.params.freeMode &&
        r.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(i.currentTranslate),
      n.setTranslate(i.currentTranslate));
  }
  function Xt(e) {
    const t = this,
      n = t.touchEventsData,
      { params: i, touches: r, rtlTranslate: s, slidesGrid: o, enabled: a } = t;
    if (!a) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", l),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    )
      return (
        n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        void (n.startMoving = !1)
      );
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = At(),
      d = c - n.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        d < 300 &&
          c - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((n.lastClickTime = At()),
      Ot(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        n.currentTranslate === n.startTranslate)
    )
      return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
    let p;
    if (
      ((n.isTouched = !1),
      (n.isMoved = !1),
      (n.startMoving = !1),
      (p = i.followFinger
        ? s
          ? t.translate
          : -t.translate
        : -n.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== o[e + t]
        ? p >= o[e] && p < o[e + t] && ((u = e), (f = o[e + t] - o[e]))
        : p >= o[e] && ((u = e), (f = o[o.length - 1] - o[o.length - 2]));
    }
    const h = (p - o[u]) / f,
      m = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (h >= i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (h > 1 - i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(u + m)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(u + m),
          "prev" === t.swipeDirection && t.slideTo(u));
    }
  }
  function Ut() {
    const e = this,
      { params: t, el: n } = e;
    if (n && 0 === n.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = r),
      (e.allowSlideNext = i),
      e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
  }
  function Qt(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function Kt() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
    if (!i) return;
    let r;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const s = e.maxTranslate() - e.minTranslate();
    (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
      r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let Zt = !1;
  function Jt() {}
  const en = (e, t) => {
    const n = gt(),
      {
        params: i,
        touchEvents: r,
        el: s,
        wrapperEl: o,
        device: a,
        support: l,
      } = e,
      c = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (l.touch) {
      const t = !(
        "touchstart" !== r.start ||
        !l.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      s[d](r.start, e.onTouchStart, t),
        s[d](
          r.move,
          e.onTouchMove,
          l.passiveListener ? { passive: !1, capture: c } : c
        ),
        s[d](r.end, e.onTouchEnd, t),
        r.cancel && s[d](r.cancel, e.onTouchEnd, t);
    } else
      s[d](r.start, e.onTouchStart, !1),
        n[d](r.move, e.onTouchMove, c),
        n[d](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      s[d]("click", e.onClick, !0),
      i.cssMode && o[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[p](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Ut,
            !0
          )
        : e[p]("observerUpdate", Ut, !0);
  };
  const tn = {
      attachEvents: function () {
        const e = this,
          t = gt(),
          { params: n, support: i } = e;
        (e.onTouchStart = Ft.bind(e)),
          (e.onTouchMove = Yt.bind(e)),
          (e.onTouchEnd = Xt.bind(e)),
          n.cssMode && (e.onScroll = Kt.bind(e)),
          (e.onClick = Qt.bind(e)),
          i.touch && !Zt && (t.addEventListener("touchstart", Jt), (Zt = !0)),
          en(e, "on");
      },
      detachEvents: function () {
        en(this, "off");
      },
    },
    nn = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const rn = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: n,
          loopedSlides: i = 0,
          params: r,
          $el: s,
        } = e,
        o = r.breakpoints;
      if (!o || (o && 0 === Object.keys(o).length)) return;
      const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
      if (!a || e.currentBreakpoint === a) return;
      const l = (a in o ? o[a] : void 0) || e.originalParams,
        c = nn(e, r),
        d = nn(e, l),
        p = r.enabled;
      c && !d
        ? (s.removeClass(
            `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !c &&
          d &&
          (s.addClass(`${r.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === r.grid.fill)) &&
            s.addClass(`${r.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = l.direction && l.direction !== r.direction,
        f = r.loop && (l.slidesPerView !== r.slidesPerView || u);
      u && n && e.changeDirection(), Pt(e.params, l);
      const h = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !h ? e.disable() : !p && h && e.enable(),
        (e.currentBreakpoint = a),
        e.emit("_beforeBreakpoint", l),
        f &&
          n &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t = "window", n) {
      if (!e || ("container" === t && !n)) return;
      let i = !1;
      const r = bt(),
        s = "window" === t ? r.innerHeight : n.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: s * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: s, value: a } = o[e];
        "window" === t
          ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
          : a <= n.clientWidth && (i = s);
      }
      return i || "max";
    },
  };
  const sn = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: n, rtl: i, $el: r, device: s, support: o } = e,
        a = (function (e, t) {
          const n = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && n.push(t + i);
                  })
                : "string" == typeof e && n.push(t + e);
            }),
            n
          );
        })(
          [
            "initialized",
            n.direction,
            { "pointer-events": !o.touch },
            { "free-mode": e.params.freeMode && n.freeMode.enabled },
            { autoheight: n.autoHeight },
            { rtl: i },
            { grid: n.grid && n.grid.rows > 1 },
            {
              "grid-column":
                n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
            },
            { android: s.android },
            { ios: s.ios },
            { "css-mode": n.cssMode },
            { centered: n.cssMode && n.centeredSlides },
          ],
          n.containerModifierClass
        );
      t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const on = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function an(e, t) {
    return function (n = {}) {
      const i = Object.keys(n)[0],
        r = n[i];
      "object" == typeof r && null !== r
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in r
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              Pt(t, n))
            : Pt(t, n))
        : Pt(t, n);
    };
  }
  const ln = {
      eventsEmitter: Nt,
      update: Ht,
      translate: Gt,
      transition: {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode || n.$wrapperEl.transition(e),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const n = this,
            { params: i } = n;
          i.cssMode ||
            (i.autoHeight && n.updateAutoHeight(),
            qt({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const n = this,
            { params: i } = n;
          (n.animating = !1),
            i.cssMode ||
              (n.setTransition(0),
              qt({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: Vt,
      loop: Rt,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const n =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (n.style.cursor = "move"),
            (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (n.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: tn,
      breakpoints: rn,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: n } = e,
            { slidesOffsetBefore: i } = n;
          if (i) {
            const t = e.slides.length - 1,
              n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > n;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: sn,
      images: {
        loadImage: function (e, t, n, i, r, s) {
          const o = bt();
          let a;
          function l() {
            s && s();
          }
          Lt(e).parent("picture")[0] || (e.complete && r)
            ? l()
            : t
            ? ((a = new o.Image()),
              (a.onload = l),
              (a.onerror = l),
              i && (a.sizes = i),
              n && (a.srcset = n),
              t && (a.src = t))
            : l();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let n = 0; n < e.imagesToLoad.length; n += 1) {
            const i = e.imagesToLoad[n];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    cn = {};
  class dn {
    constructor(...e) {
      let t, n;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (n = e[0])
          : ([t, n] = e),
        n || (n = {}),
        (n = Pt({}, n)),
        t && !n.el && (n.el = t),
        n.el && Lt(n.el).length > 1)
      ) {
        const e = [];
        return (
          Lt(n.el).each((t) => {
            const i = Pt({}, n, { el: t });
            e.push(new dn(i));
          }),
          e
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = zt()),
        (i.device = Wt({ userAgent: n.userAgent })),
        (i.browser = Bt()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
      const r = {};
      i.modules.forEach((e) => {
        e({
          swiper: i,
          extendParams: an(n, r),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const s = Pt({}, on, r);
      return (
        (i.params = Pt({}, s, cn, n)),
        (i.originalParams = Pt({}, i.params)),
        (i.passedParams = Pt({}, n)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = Lt),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: t,
          classNames: [],
          slides: Lt(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: At(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = n.minTranslate(),
        r = (n.maxTranslate() - i) * e + i;
      n.translateTo(r, void 0 === t ? 0 : t),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((n) => {
        const i = e.getSlideClasses(n);
        t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: n,
        slides: i,
        slidesGrid: r,
        slidesSizesGrid: s,
        size: o,
        activeIndex: a,
      } = this;
      let l = 1;
      if (n.centeredSlides) {
        let e,
          t = i[a].swiperSlideSize;
        for (let n = a + 1; n < i.length; n += 1)
          i[n] &&
            !e &&
            ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        for (let n = a - 1; n >= 0; n -= 1)
          i[n] &&
            !e &&
            ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < i.length; e += 1) {
          (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
        }
      else
        for (let e = a - 1; e >= 0; e -= 1) {
          r[a] - r[e] < o && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: n } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let r;
      n.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((r =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            r || i()),
        n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const n = this,
        i = n.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (n.$el
            .removeClass(`${n.params.containerModifierClass}${i}`)
            .addClass(`${n.params.containerModifierClass}${e}`),
          n.emitContainerClasses(),
          (n.params.direction = e),
          n.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          n.emit("changeDirection"),
          t && n.update()),
        n
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const n = Lt(e || t.params.el);
      if (!(e = n[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = Lt(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => n.children(e)), t;
        }
        return n.children(i());
      })();
      if (0 === r.length && t.params.createElements) {
        const e = gt().createElement("div");
        (r = Lt(e)),
          (e.className = t.params.wrapperClass),
          n.append(e),
          n.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: n,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const n = this,
        { params: i, $el: r, $wrapperEl: s, slides: o } = n;
      return (
        void 0 === n.params ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          i.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            r.removeAttr("style"),
            s.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          !1 !== e &&
            ((n.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Pt(cn, e);
    }
    static get extendedDefaults() {
      return cn;
    }
    static get defaults() {
      return on;
    }
    static installModule(e) {
      dn.prototype.__modules__ || (dn.prototype.__modules__ = []);
      const t = dn.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => dn.installModule(e)), dn)
        : (dn.installModule(e), dn);
    }
  }
  Object.keys(ln).forEach((e) => {
    Object.keys(ln[e]).forEach((t) => {
      dn.prototype[t] = ln[e][t];
    });
  }),
    dn.use([
      function ({ swiper: e, on: t, emit: n }) {
        const i = bt();
        let r = null;
        const s = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (n("beforeResize"), n("resize"));
          },
          o = () => {
            e && !e.destroyed && e.initialized && n("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((r = new ResizeObserver((t) => {
                const { width: n, height: i } = e;
                let r = n,
                  o = i;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: n, target: i }) => {
                    (i && i !== e.el) ||
                      ((r = n ? n.width : (t[0] || t).inlineSize),
                      (o = n ? n.height : (t[0] || t).blockSize));
                  }
                ),
                  (r === n && o === i) || s();
              })),
              r.observe(e.el))
            : (i.addEventListener("resize", s),
              i.addEventListener("orientationchange", o));
        }),
          t("destroy", () => {
            r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)),
              i.removeEventListener("resize", s),
              i.removeEventListener("orientationchange", o);
          });
      },
      function ({ swiper: e, extendParams: t, on: n, emit: i }) {
        const r = [],
          s = bt(),
          o = (e, t = {}) => {
            const n = new (s.MutationObserver || s.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                  i("observerUpdate", e[0]);
                };
                s.requestAnimationFrame
                  ? s.requestAnimationFrame(t)
                  : s.setTimeout(t, 0);
              }
            );
            n.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              r.push(n);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          n("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) o(t[e]);
              }
              o(e.$el[0], { childList: e.params.observeSlideChildren }),
                o(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          n("destroy", () => {
            r.forEach((e) => {
              e.disconnect();
            }),
              r.splice(0, r.length);
          });
      },
    ]);
  const pn = dn;
  function un({ swiper: e, extendParams: t, on: n, emit: i }) {
    function r(t) {
      let n;
      return (
        t &&
          ((n = Lt(t)),
          e.params.uniqueNavElements &&
            "string" == typeof t &&
            n.length > 1 &&
            1 === e.$el.find(t).length &&
            (n = e.$el.find(t))),
        n
      );
    }
    function s(t, n) {
      const i = e.params.navigation;
      t &&
        t.length > 0 &&
        (t[n ? "addClass" : "removeClass"](i.disabledClass),
        t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n),
        e.params.watchOverflow &&
          e.enabled &&
          t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }
    function o() {
      if (e.params.loop) return;
      const { $nextEl: t, $prevEl: n } = e.navigation;
      s(n, e.isBeginning && !e.params.rewind),
        s(t, e.isEnd && !e.params.rewind);
    }
    function a(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
    }
    function l(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
    }
    function c() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = (function (e, t, n, i) {
          const r = gt();
          return (
            e.params.createElements &&
              Object.keys(i).forEach((s) => {
                if (!n[s] && !0 === n.auto) {
                  let o = e.$el.children(`.${i[s]}`)[0];
                  o ||
                    ((o = r.createElement("div")),
                    (o.className = i[s]),
                    e.$el.append(o)),
                    (n[s] = o),
                    (t[s] = o);
                }
              }),
            n
          );
        })(e, e.originalParams.navigation, e.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !t.nextEl && !t.prevEl)
      )
        return;
      const n = r(t.nextEl),
        i = r(t.prevEl);
      n && n.length > 0 && n.on("click", l),
        i && i.length > 0 && i.on("click", a),
        Object.assign(e.navigation, {
          $nextEl: n,
          nextEl: n && n[0],
          $prevEl: i,
          prevEl: i && i[0],
        }),
        e.enabled ||
          (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass));
    }
    function d() {
      const { $nextEl: t, $prevEl: n } = e.navigation;
      t &&
        t.length &&
        (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
        n &&
          n.length &&
          (n.off("click", a), n.removeClass(e.params.navigation.disabledClass));
    }
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      n("init", () => {
        c(), o();
      }),
      n("toEdge fromEdge lock unlock", () => {
        o();
      }),
      n("destroy", () => {
        d();
      }),
      n("enable disable", () => {
        const { $nextEl: t, $prevEl: n } = e.navigation;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          n &&
            n[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      n("click", (t, n) => {
        const { $nextEl: r, $prevEl: s } = e.navigation,
          o = n.target;
        if (e.params.navigation.hideOnClick && !Lt(o).is(s) && !Lt(o).is(r)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === o || e.pagination.el.contains(o))
          )
            return;
          let t;
          r
            ? (t = r.hasClass(e.params.navigation.hiddenClass))
            : s && (t = s.hasClass(e.params.navigation.hiddenClass)),
            i(!0 === t ? "navigationShow" : "navigationHide"),
            r && r.toggleClass(e.params.navigation.hiddenClass),
            s && s.toggleClass(e.params.navigation.hiddenClass);
        }
      }),
      Object.assign(e.navigation, { update: o, init: c, destroy: d });
  }
  function fn() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    fn(),
      document.querySelector(".main-block__slider") &&
        new pn(".main-block__slider", {
          modules: [un],
          effect: "fade",
          autoplay: { delay: 3e3, disableOnInteraction: !0 },
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 46,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          navigation: {
            nextEl: ".controll-arrow_next",
            prevEl: ".controll-arrow_prev",
          },
          on: {},
        }),
      document.querySelector(".products-slider") &&
        new pn(".products-slider", {
          modules: [un],
          effect: "fade",
          autoplay: { delay: 3e3, disableOnInteraction: !0 },
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 10,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          navigation: {
            nextEl: ".products-slider__arrow_next",
            prevEl: ".products-slider__arrow_prev",
          },
          on: {},
        }),
      document.querySelector(".collections-block__slider") &&
        new pn(".collections-block__slider", {
          modules: [un],
          effect: "fade",
          autoplay: { delay: 3e3, disableOnInteraction: !0 },
          observer: !0,
          observeParents: !0,
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: !0,
          speed: 800,
          loop: !0,
          navigation: {
            nextEl: ".collections-arrow_next",
            prevEl: ".collections-arrow_prev",
          },
          on: {},
        });
  });
  e.watcher = new (class {
    constructor(e) {
      (this.config = Object.assign({ logging: !0 }, e)),
        this.observer,
        !document.documentElement.classList.contains("watcher") &&
          this.scrollWatcherRun();
    }
    scrollWatcherUpdate() {
      this.scrollWatcherRun();
    }
    scrollWatcherRun() {
      document.documentElement.classList.add("watcher"),
        this.scrollWatcherConstructor(
          document.querySelectorAll("[data-watch]")
        );
    }
    scrollWatcherConstructor(e) {
      if (e.length) {
        this.scrollWatcherLogging(
          `Проснулся, слежу за объектами (${e.length})...`
        ),
          o(
            Array.from(e).map(function (e) {
              return `${
                e.dataset.watchRoot ? e.dataset.watchRoot : null
              }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
            })
          ).forEach((t) => {
            let n = t.split("|"),
              i = { root: n[0], margin: n[1], threshold: n[2] },
              r = Array.from(e).filter(function (e) {
                let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                  n = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                  r = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                if (
                  String(t) === i.root &&
                  String(n) === i.margin &&
                  String(r) === i.threshold
                )
                  return e;
              }),
              s = this.getScrollWatcherConfig(i);
            this.scrollWatcherInit(r, s);
          });
      } else
        this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
    }
    getScrollWatcherConfig(e) {
      let t = {};
      if (
        (document.querySelector(e.root)
          ? (t.root = document.querySelector(e.root))
          : "null" !== e.root &&
            this.scrollWatcherLogging(
              `Эмм... родительского объекта ${e.root} нет на странице`
            ),
        (t.rootMargin = e.margin),
        !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
      ) {
        if ("prx" === e.threshold) {
          e.threshold = [];
          for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
        } else e.threshold = e.threshold.split(",");
        return (t.threshold = e.threshold), t;
      }
      this.scrollWatcherLogging(
        "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
      );
    }
    scrollWatcherCreate(e) {
      this.observer = new IntersectionObserver((e, t) => {
        e.forEach((e) => {
          this.scrollWatcherCallback(e, t);
        });
      }, e);
    }
    scrollWatcherInit(e, t) {
      this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
    }
    scrollWatcherIntersecting(e, t) {
      e.isIntersecting
        ? (!t.classList.contains("_watcher-view") &&
            t.classList.add("_watcher-view"),
          this.scrollWatcherLogging(
            `Я вижу ${t.classList}, добавил класс _watcher-view`
          ))
        : (t.classList.contains("_watcher-view") &&
            t.classList.remove("_watcher-view"),
          this.scrollWatcherLogging(
            `Я не вижу ${t.classList}, убрал класс _watcher-view`
          ));
    }
    scrollWatcherOff(e, t) {
      t.unobserve(e),
        this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
    }
    scrollWatcherLogging(e) {
      this.config.logging &&
        (function (e) {
          setTimeout(() => {
            window.FLS && console.log(e);
          }, 0);
        })(`[Наблюдатель]: ${e}`);
    }
    scrollWatcherCallback(e, t) {
      const n = e.target;
      this.scrollWatcherIntersecting(e, n),
        n.hasAttribute("data-watch-once") &&
          e.isIntersecting &&
          this.scrollWatcherOff(n, t),
        document.dispatchEvent(
          new CustomEvent("watcherCallback", { detail: { entry: e } })
        );
    }
  })({});
  let hn = !1;
  function mn(e) {
    this.type = e;
  }
  setTimeout(() => {
    if (hn) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (mn.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          n = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(n[0].trim())),
          (i.breakpoint = n[1] ? n[1].trim() : "767"),
          (i.place = n[2] ? n[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, n) {
            return Array.prototype.indexOf.call(n, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const n = this.mediaQueries[t],
          i = String.prototype.split.call(n, ","),
          r = window.matchMedia(i[0]),
          s = i[1],
          o = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === s;
          });
        r.addListener(function () {
          e.mediaHandler(r, o);
        }),
          this.mediaHandler(r, o);
      }
    }),
    (mn.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          (n.index = this.indexInParent(n.parent, n.element)),
            this.moveTo(n.place, n.element, n.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          n.element.classList.contains(this.daClassname) &&
            this.moveBack(n.parent, n.element, n.index);
        }
    }),
    (mn.prototype.moveTo = function (e, t, n) {
      t.classList.add(this.daClassname),
        "last" === e || e >= n.children.length
          ? n.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? n.children[e].insertAdjacentElement("beforebegin", t)
          : n.insertAdjacentElement("afterbegin", t);
    }),
    (mn.prototype.moveBack = function (e, t, n) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[n]
          ? e.children[n].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (mn.prototype.indexInParent = function (e, t) {
      const n = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(n, t);
    }),
    (mn.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new mn("max").init(),
    (window.onload = function () {
      if (
        (document.addEventListener("click", function (e) {
          const t = e.target;
          t.classList.contains("search-header__icon")
            ? document
                .querySelector(".search-header")
                .classList.toggle("_active")
            : !t.closest(".search-header") &&
              document.querySelector(".search-header._active") &&
              document
                .querySelector(".search-header")
                .classList.remove("_active");
        }),
        document.documentElement.clientWidth < 1200)
      ) {
        var e = document.getElementsByClassName("item-catalog-cards");
        document.getElementById(".item-catalog-cards__button");
        for (let t = 3; t < e.length; t++) e[t].style.display = "none";
        var t = 3;
        document.addEventListener("click", function () {
          var e = document.getElementsByClassName("item-catalog-cards");
          if ((t += 3) <= e.length)
            for (let n = 0; n < t; n++) e[n].style.display = "block";
        });
      }
    });
  var gn = document.querySelector(".arrow-up"),
    vn = window.innerHeight;
  document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("scroll", function (e) {
      vn <= window.scrollY
        ? gn.classList.add("arrow-up__active")
        : e.target.scrollingElement.scrollTop <= vn &&
          (gn.classList.remove("arrow-up__active"),
          (gn.style.pointerEvents = "auto"));
    }),
      gn.addEventListener("click", function () {
        var e = window.scrollY,
          t = 0,
          n = e;
        (gn.style.pointerEvents = "none"),
          requestAnimationFrame(function e() {
            (n -= 5 * (t += 1)),
              window.scrollTo(0, n),
              n > 0 && requestAnimationFrame(e);
          });
      });
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          i &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? r(e) : s(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const i = Array.from(e).filter(function (e, t, n) {
          return !e.dataset.spollers.split(",")[0];
        });
        i.length && s(i);
        let r = a(e, "spollers");
        function s(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  o(e),
                  e.addEventListener("click", l))
                : (e.classList.remove("_spoller-init"),
                  o(e, !1),
                  e.removeEventListener("click", l));
          });
        }
        function o(e, t = !0) {
          let n = e.querySelectorAll("[data-spoller]");
          n.length &&
            ((n = Array.from(n).filter(
              (t) => t.closest("[data-spollers]") === e
            )),
            n.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            }));
        }
        function l(e) {
          const i = e.target;
          if (i.closest("[data-spoller]")) {
            const r = i.closest("[data-spoller]"),
              s = r.closest("[data-spollers]"),
              o = !!s.hasAttribute("data-one-spoller");
            s.querySelectorAll("._slide").length ||
              (o && !r.classList.contains("_spoller-active") && c(s),
              r.classList.toggle("_spoller-active"),
              ((e, i = 500) => {
                e.hidden ? n(e, i) : t(e, i);
              })(r.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function c(e) {
          const n = e.querySelector("[data-spoller]._spoller-active");
          n &&
            (n.classList.remove("_spoller-active"),
            t(n.nextElementSibling, 500));
        }
        r &&
          r.length &&
          r.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              s(e.itemsArray, e.matchMedia);
            }),
              s(e.itemsArray, e.matchMedia);
          });
      }
    })(),
    (function () {
      const e = document.querySelectorAll("[data-tabs]");
      let i = [];
      if (e.length > 0) {
        const t = (function () {
          if (location.hash) return location.hash.replace("#", "");
        })();
        t && t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
          e.forEach((e, t) => {
            e.classList.add("_tab-init"),
              e.setAttribute("data-tabs-index", t),
              e.addEventListener("click", o),
              (function (e) {
                let t = e.querySelectorAll("[data-tabs-titles]>*"),
                  n = e.querySelectorAll("[data-tabs-body]>*");
                const r = e.dataset.tabsIndex,
                  s = i[0] == r;
                if (s) {
                  const t = e.querySelector("[data-tabs-titles]>._tab-active");
                  t && t.classList.remove("_tab-active");
                }
                n.length &&
                  ((n = Array.from(n).filter(
                    (t) => t.closest("[data-tabs]") === e
                  )),
                  (t = Array.from(t).filter(
                    (t) => t.closest("[data-tabs]") === e
                  )),
                  n.forEach((e, n) => {
                    t[n].setAttribute("data-tabs-title", ""),
                      e.setAttribute("data-tabs-item", ""),
                      s && n == i[1] && t[n].classList.add("_tab-active"),
                      (e.hidden = !t[n].classList.contains("_tab-active"));
                  }));
              })(e);
          });
        let n = a(e, "tabs");
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              r(e.itemsArray, e.matchMedia);
            }),
              r(e.itemsArray, e.matchMedia);
          });
      }
      function r(e, t) {
        e.forEach((e) => {
          let n = (e = e.item).querySelector("[data-tabs-titles]"),
            i = e.querySelectorAll("[data-tabs-title]"),
            r = e.querySelector("[data-tabs-body]"),
            s = e.querySelectorAll("[data-tabs-item]");
          (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
            (s = Array.from(s).filter((t) => t.closest("[data-tabs]") === e)),
            s.forEach((s, o) => {
              t.matches
                ? (r.append(i[o]), r.append(s), e.classList.add("_tab-spoller"))
                : (n.append(i[o]), e.classList.remove("_tab-spoller"));
            });
        });
      }
      function s(e) {
        let i = e.querySelectorAll("[data-tabs-title]"),
          r = e.querySelectorAll("[data-tabs-item]");
        const s = e.dataset.tabsIndex;
        const o = (function (e) {
          if (e.hasAttribute("data-tabs-animate"))
            return e.dataset.tabsAnimate > 0
              ? Number(e.dataset.tabsAnimate)
              : 500;
        })(e);
        if (r.length > 0) {
          const a = e.hasAttribute("data-tabs-hash");
          (r = Array.from(r).filter((t) => t.closest("[data-tabs]") === e)),
            (i = Array.from(i).filter((t) => t.closest("[data-tabs]") === e)),
            r.forEach((e, r) => {
              i[r].classList.contains("_tab-active")
                ? (o ? n(e, o) : (e.hidden = !1),
                  a &&
                    !e.closest(".popup") &&
                    (function (e) {
                      (e = e ? `#${e}` : window.location.href.split("#")[0]),
                        history.pushState("", "", e);
                    })(`tab-${s}-${r}`))
                : o
                ? t(e, o)
                : (e.hidden = !0);
            });
        }
      }
      function o(e) {
        const t = e.target;
        if (t.closest("[data-tabs-title]")) {
          const n = t.closest("[data-tabs-title]"),
            i = n.closest("[data-tabs]");
          if (
            !n.classList.contains("_tab-active") &&
            !i.querySelector("._slide")
          ) {
            let e = i.querySelectorAll("[data-tabs-title]._tab-active");
            e.length &&
              (e = Array.from(e).filter((e) => e.closest("[data-tabs]") === i)),
              e.length && e[0].classList.remove("_tab-active"),
              n.classList.add("_tab-active"),
              s(i);
          }
          e.preventDefault();
        }
      }
    })();
})();
