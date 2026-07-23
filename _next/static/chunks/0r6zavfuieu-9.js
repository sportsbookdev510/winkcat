(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  50327,
  (e, t, i) => {
    "use strict";
    function r({
      widthInt: e,
      heightInt: t,
      blurWidth: i,
      blurHeight: n,
      blurDataURL: s,
      objectFit: o,
    }) {
      let a = i ? 40 * i : e,
        l = n ? 40 * n : t,
        u = a && l ? `viewBox='0 0 ${a} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        u
          ? "none"
          : "contain" === o
          ? "xMidYMid"
          : "cover" === o
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
  },
  85266,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      VALID_LOADERS: function () {
        return s;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  92132,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "getImgProps", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      e.r(91199);
    let r = e.r(13378),
      n = e.r(50327),
      s = e.r(85266),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function a(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function u(
      {
        src: e,
        sizes: t,
        unoptimized: i = !1,
        priority: h = !1,
        preload: d = !1,
        loading: c,
        className: p,
        quality: m,
        width: f,
        height: g,
        fill: y = !1,
        style: v,
        overrideSrc: x,
        onLoad: b,
        onLoadingComplete: w,
        placeholder: k = "empty",
        blurDataURL: S,
        fetchPriority: P,
        decoding: T = "async",
        layout: E,
        objectFit: j,
        objectPosition: C,
        lazyBoundary: M,
        lazyRoot: A,
        ...R
      },
      V
    ) {
      var D;
      let L,
        O,
        I,
        { imgConf: B, showAltText: N, blurComplete: z, defaultLoader: F } = V,
        _ = B || s.imageConfigDefault;
      if ("allSizes" in _) L = _;
      else {
        let e = [..._.deviceSizes, ..._.imageSizes].sort((e, t) => e - t),
          t = _.deviceSizes.sort((e, t) => e - t),
          i = _.qualities?.sort((e, t) => e - t);
        L = { ..._, allSizes: e, deviceSizes: t, qualities: i };
      }
      if (void 0 === F)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let $ = R.loader || F;
      delete R.loader, delete R.srcSet;
      let U = "__next_img_default" in $;
      if (U) {
        if ("custom" === L.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = $;
        $ = (t) => {
          let { config: i, ...r } = t;
          return e(r);
        };
      }
      if (E) {
        "fill" === E && (y = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[E];
        e && (v = { ...v, ...e });
        let i = { responsive: "100vw", fill: "100vw" }[E];
        i && !t && (t = i);
      }
      let W = "",
        H = l(f),
        X = l(g);
      if ((D = e) && "object" == typeof D && (a(D) || void 0 !== D.src)) {
        let t = a(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((O = t.blurWidth),
          (I = t.blurHeight),
          (S = S || t.blurDataURL),
          (W = t.src),
          !y)
        )
          if (H || X) {
            if (H && !X) {
              let e = H / t.width;
              X = Math.round(t.height * e);
            } else if (!H && X) {
              let e = X / t.height;
              H = Math.round(t.width * e);
            }
          } else (H = t.width), (X = t.height);
      }
      let G = !h && !d && ("lazy" === c || void 0 === c);
      (!(e = "string" == typeof e ? e : W) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((i = !0), (G = !1)),
        L.unoptimized && (i = !0),
        U &&
          !L.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (i = !0);
      let Y = l(m),
        K = Object.assign(
          y
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: C,
              }
            : {},
          N ? {} : { color: "transparent" },
          v
        ),
        q =
          z || "empty" === k
            ? null
            : "blur" === k
            ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({
                widthInt: H,
                heightInt: X,
                blurWidth: O,
                blurHeight: I,
                blurDataURL: S || "",
                objectFit: K.objectFit,
              })}")`
            : `url("${k}")`,
        Z = o.includes(K.objectFit)
          ? "fill" === K.objectFit
            ? "100% 100%"
            : "cover"
          : K.objectFit,
        J = q
          ? {
              backgroundSize: Z,
              backgroundPosition: K.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: q,
            }
          : {},
        Q = (function ({
          config: e,
          src: t,
          unoptimized: i,
          width: n,
          quality: s,
          sizes: o,
          loader: a,
        }) {
          if (i) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, r.getDeploymentId)();
              if (e) {
                let i = t.indexOf("?");
                if (-1 !== i) {
                  let r = new URLSearchParams(t.slice(i + 1));
                  r.get("dpl") ||
                    (r.append("dpl", e),
                    (t = t.slice(0, i) + "?" + r.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: u } = (function (
              { deviceSizes: e, allSizes: t },
              i,
              r
            ) {
              if (r) {
                let i = /(^|\s)(1?\d?\d)vw/g,
                  n = [];
                for (let e; (e = i.exec(r)); ) n.push(parseInt(e[2]));
                if (n.length) {
                  let i = 0.01 * Math.min(...n);
                  return { widths: t.filter((t) => t >= e[0] * i), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof i
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [i, 2 * i].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, n, o),
            h = l.length - 1;
          return {
            sizes: o || "w" !== u ? o : "100vw",
            srcSet: l
              .map(
                (i, r) =>
                  `${a({ config: e, src: t, quality: s, width: i })} ${
                    "w" === u ? i : r + 1
                  }${u}`
              )
              .join(", "),
            src: a({ config: e, src: t, quality: s, width: l[h] }),
          };
        })({
          config: L,
          src: e,
          unoptimized: i,
          width: H,
          quality: Y,
          sizes: t,
          loader: $,
        }),
        ee = G ? "lazy" : c;
      return {
        props: {
          ...R,
          loading: ee,
          fetchPriority: P,
          width: H,
          height: X,
          decoding: T,
          className: p,
          style: { ...K, ...J },
          sizes: Q.sizes,
          srcSet: Q.srcSet,
          src: x || Q.src,
        },
        meta: { unoptimized: i, preload: d || h, placeholder: k, fill: y },
      };
    }
  },
  45557,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let r = e.r(96505),
      n = "u" < typeof window,
      s = n ? () => {} : r.useLayoutEffect,
      o = n ? () => {} : r.useEffect;
    function a(e) {
      let { headManager: t, reduceComponentsToState: i } = e;
      function a() {
        if (t && t.mountedInstances) {
          let e = r.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(i(e));
        }
      }
      return (
        n && (t?.mountedInstances?.add(e.children), a()),
        s(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        s(
          () => (
            t && (t._pendingUpdate = a),
            () => {
              t && (t._pendingUpdate = a);
            }
          )
        ),
        o(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  94557,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return f;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let s = e.r(81258),
      o = e.r(44066),
      a = e.r(76172),
      l = o._(e.r(96505)),
      u = s._(e.r(45557)),
      h = e.r(76663);
    function d() {
      return [
        (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, a.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function c(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(91199);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
      let t, i, r, n;
      return e
        .reduce(c, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (i = new Set()),
          (r = new Set()),
          (n = {}),
          (e) => {
            let s = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let i = e.key.slice(e.key.indexOf("$") + 1);
              t.has(i) ? (s = !1) : t.add(i);
            }
            switch (e.type) {
              case "title":
              case "base":
                i.has(e.type) ? (s = !1) : i.add(e.type);
                break;
              case "meta":
                for (let t = 0, i = p.length; t < i; t++) {
                  let i = p[t];
                  if (e.props.hasOwnProperty(i))
                    if ("charSet" === i) r.has(i) ? (s = !1) : r.add(i);
                    else {
                      let t = e.props[i],
                        r = n[i] || new Set();
                      ("name" !== i || !o) && r.has(t)
                        ? (s = !1)
                        : (r.add(t), (n[i] = r));
                    }
                }
            }
            return s;
          })
        )
        .reverse()
        .map((e, t) => {
          let i = e.key || t;
          return l.default.cloneElement(e, { key: i });
        });
    }
    let f = function ({ children: e }) {
      let t = (0, l.useContext)(h.HeadManagerContext);
      return (0, a.jsx)(u.default, {
        reduceComponentsToState: m,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  92555,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let r = e.r(81258)._(e.r(96505)),
      n = e.r(85266),
      s = r.default.createContext(n.imageConfigDefault);
  },
  76019,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "RouterContext", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
    let r = e.r(81258)._(e.r(96505)).default.createContext(null);
  },
  20379,
  (e, t, i) => {
    "use strict";
    function r(e, t) {
      let i = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e),
            t.qualities[0]
          )
        : i;
    }
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
  },
  74467,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let r = e.r(20379),
      n = e.r(13378);
    function s({ config: e, src: t, width: i, quality: o }) {
      let a = (0, n.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
        let e = t.indexOf("?");
        if (-1 !== e) {
          let i = new URLSearchParams(t.slice(e + 1)),
            r = i.get("dpl");
          if (r) {
            (a = r), i.delete("dpl");
            let n = i.toString();
            t = t.slice(0, e) + (n ? "?" + n : "");
          }
        }
      }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let l = (0, r.findClosestQuality)(o, e);
      return `${t}`;
    }
    s.__next_img_default = !0;
    let o = s;
  },
  87021,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let r = e.r(96505);
    function n(e, t) {
      let i = (0, r.useRef)(null),
        n = (0, r.useRef)(null);
      return (0, r.useCallback)(
        (r) => {
          if (null === r) {
            let e = i.current;
            e && ((i.current = null), e());
            let t = n.current;
            t && ((n.current = null), t());
          } else e && (i.current = s(e, r)), t && (n.current = s(t, r));
        },
        [e, t]
      );
    }
    function s(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let i = e(t);
        return "function" == typeof i ? i : () => e(null);
      }
    }
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  83754,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "Image", {
        enumerable: !0,
        get: function () {
          return b;
        },
      });
    let r = e.r(81258),
      n = e.r(44066),
      s = e.r(76172),
      o = n._(e.r(96505)),
      a = r._(e.r(87640)),
      l = r._(e.r(94557)),
      u = e.r(92132),
      h = e.r(85266),
      d = e.r(92555);
    e.r(91199);
    let c = e.r(76019),
      p = r._(e.r(74467)),
      m = e.r(87021),
      f = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function g(e, t, i, r, n, s, o) {
      let a = e?.src;
      e &&
        e["data-loaded-src"] !== a &&
        ((e["data-loaded-src"] = a),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && n(!0), i?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let r = !1,
                  n = !1;
                i.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => r,
                  isPropagationStopped: () => n,
                  persist: () => {},
                  preventDefault: () => {
                    (r = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (n = !0), t.stopPropagation();
                  },
                });
              }
              r?.current && r.current(e);
            }
          }));
    }
    function y(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0, o.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: i,
          height: r,
          width: n,
          decoding: a,
          className: l,
          style: u,
          fetchPriority: h,
          placeholder: d,
          loading: c,
          unoptimized: p,
          fill: f,
          onLoadRef: v,
          onLoadingCompleteRef: x,
          setBlurComplete: b,
          setShowAltText: w,
          sizesInput: k,
          onLoad: S,
          onError: P,
          ...T
        },
        E
      ) => {
        let j = (0, o.useCallback)(
            (e) => {
              e && (P && (e.src = e.src), e.complete && g(e, d, v, x, b, p, k));
            },
            [e, d, v, x, b, P, p, k]
          ),
          C = (0, m.useMergedRef)(E, j);
        return (0, s.jsx)("img", {
          ...T,
          ...y(h),
          loading: c,
          width: n,
          height: r,
          decoding: a,
          "data-nimg": f ? "fill" : "1",
          className: l,
          style: u,
          sizes: i,
          srcSet: t,
          src: e,
          ref: C,
          onLoad: (e) => {
            g(e.currentTarget, d, v, x, b, p, k);
          },
          onError: (e) => {
            w(!0), "empty" !== d && b(!0), P && P(e);
          },
        });
      }
    );
    function x({ isAppRouter: e, imgAttributes: t }) {
      let i = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...y(t.fetchPriority),
      };
      return e && a.default.preload
        ? (a.default.preload(t.src, i), null)
        : (0, s.jsx)(l.default, {
            children: (0, s.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...i },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let b = (0, o.forwardRef)((e, t) => {
      let i = (0, o.useContext)(c.RouterContext),
        r = (0, o.useContext)(d.ImageConfigContext),
        n = (0, o.useMemo)(() => {
          let e = f || r || h.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            i = e.deviceSizes.sort((e, t) => e - t),
            n = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: i,
            qualities: n,
            localPatterns:
              "u" < typeof window ? r?.localPatterns : e.localPatterns,
          };
        }, [r]),
        { onLoad: a, onLoadingComplete: l } = e,
        m = (0, o.useRef)(a);
      (0, o.useEffect)(() => {
        m.current = a;
      }, [a]);
      let g = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        g.current = l;
      }, [l]);
      let [y, b] = (0, o.useState)(!1),
        [w, k] = (0, o.useState)(!1),
        { props: S, meta: P } = (0, u.getImgProps)(e, {
          defaultLoader: p.default,
          imgConf: n,
          blurComplete: y,
          showAltText: w,
        });
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(v, {
            ...S,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: m,
            onLoadingCompleteRef: g,
            setBlurComplete: b,
            setShowAltText: k,
            sizesInput: e.sizes,
            ref: t,
          }),
          P.preload
            ? (0, s.jsx)(x, { isAppRouter: !i, imgAttributes: S })
            : null,
        ],
      });
    });
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  2323,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return h;
      },
      getImageProps: function () {
        return u;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let s = e.r(81258),
      o = e.r(92132),
      a = e.r(83754),
      l = s._(e.r(74467));
    function u(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
      return { props: t };
    }
    let h = a.Image;
  },
  92877,
  (e, t, i) => {
    t.exports = e.r(2323);
  },
  24714,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      formatUrl: function () {
        return a;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let s = e.r(44066)._(e.r(88476)),
      o = /https?|ftp|gopher|file/;
    function a(e) {
      let { auth: t, hostname: i } = e,
        r = e.protocol || "",
        n = e.pathname || "",
        a = e.hash || "",
        l = e.query || "",
        u = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : i &&
            ((u = t + (~i.indexOf(":") ? `[${i}]` : i)),
            e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l)));
      let h = e.search || (l && `?${l}`) || "";
      return (
        r && !r.endsWith(":") && (r += ":"),
        e.slashes || ((!r || o.test(r)) && !1 !== u)
          ? ((u = "//" + (u || "")), n && "/" !== n[0] && (n = "/" + n))
          : u || (u = ""),
        a && "#" !== a[0] && (a = "#" + a),
        h && "?" !== h[0] && (h = "?" + h),
        (n = n.replace(/[?#]/g, encodeURIComponent)),
        (h = h.replace("#", "%23")),
        `${r}${u}${n}${h}${a}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function u(e) {
      return a(e);
    }
  },
  22522,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let r = e.r(8633),
      n = e.r(59475);
    function s(e) {
      if (!(0, r.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, r.getLocationOrigin)(),
          i = new URL(e, t);
        return i.origin === t && (0, n.hasBasePath)(i.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  54318,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "errorOnce", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
    let r = (e) => {};
  },
  48847,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return y;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let s = e.r(44066),
      o = e.r(76172),
      a = s._(e.r(96505)),
      l = e.r(24714),
      u = e.r(633),
      h = e.r(87021),
      d = e.r(8633),
      c = e.r(5);
    e.r(91199);
    let p = e.r(66360),
      m = e.r(27270),
      f = e.r(22522),
      g = e.r(21821);
    function y(t) {
      var i, r;
      let n,
        s,
        y,
        [x, b] = (0, a.useOptimistic)(m.IDLE_LINK_STATUS),
        w = (0, a.useRef)(null),
        {
          href: k,
          as: S,
          children: P,
          prefetch: T = null,
          passHref: E,
          replace: j,
          shallow: C,
          scroll: M,
          onClick: A,
          onMouseEnter: R,
          onTouchStart: V,
          legacyBehavior: D = !1,
          onNavigate: L,
          transitionTypes: O,
          ref: I,
          unstable_dynamicOnHover: B,
          ...N
        } = t;
      (n = P),
        D &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, o.jsx)("a", { children: n }));
      let z = a.default.useContext(u.AppRouterContext),
        F = !1 !== T,
        _ =
          !1 !== T
            ? null === (r = T) || "auto" === r
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        $ = "string" == typeof (i = S || k) ? i : (0, l.formatUrl)(i);
      if (D) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        s = a.default.Children.only(n);
      }
      let U = D ? s && "object" == typeof s && s.ref : I,
        W = a.default.useCallback(
          (e) => (
            null !== z &&
              (w.current = (0, m.mountLinkInstance)(e, $, z, _, F, b)),
            () => {
              w.current &&
                ((0, m.unmountLinkForCurrentNavigation)(w.current),
                (w.current = null)),
                (0, m.unmountPrefetchableInstance)(e);
            }
          ),
          [F, $, z, _, b]
        ),
        H = {
          ref: (0, h.useMergedRef)(W, U),
          onClick(t) {
            D || "function" != typeof A || A(t),
              D &&
                s.props &&
                "function" == typeof s.props.onClick &&
                s.props.onClick(t),
              !z ||
                t.defaultPrevented ||
                (function (t, i, r, n, s, o, l) {
                  if ("u" > typeof window) {
                    let u,
                      { nodeName: h } = t.currentTarget;
                    if (
                      ("A" === h.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, f.isLocalURL)(i)) {
                      n && (t.preventDefault(), location.replace(i));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(56513);
                    a.default.startTransition(() => {
                      d(
                        i,
                        n ? "replace" : "push",
                        !1 === s
                          ? p.ScrollBehavior.NoScroll
                          : p.ScrollBehavior.Default,
                        r.current,
                        l
                      );
                    });
                  }
                })(t, $, w, j, M, L, O);
          },
          onMouseEnter(e) {
            D || "function" != typeof R || R(e),
              D &&
                s.props &&
                "function" == typeof s.props.onMouseEnter &&
                s.props.onMouseEnter(e),
              z && F && (0, m.onNavigationIntent)(e.currentTarget, !0 === B);
          },
          onTouchStart: function (e) {
            D || "function" != typeof V || V(e),
              D &&
                s.props &&
                "function" == typeof s.props.onTouchStart &&
                s.props.onTouchStart(e),
              z && F && (0, m.onNavigationIntent)(e.currentTarget, !0 === B);
          },
        };
      return (
        (0, d.isAbsoluteUrl)($)
          ? (H.href = $)
          : (D && !E && ("a" !== s.type || "href" in s.props)) ||
            (H.href = (0, c.addBasePath)($)),
        (y = D
          ? a.default.cloneElement(s, H)
          : (0, o.jsx)("a", { ...N, ...H, children: n })),
        (0, o.jsx)(v.Provider, { value: x, children: y })
      );
    }
    e.r(54318);
    let v = (0, a.createContext)(m.IDLE_LINK_STATUS),
      x = () => (0, a.useContext)(v);
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  93440,
  84654,
  3940,
  31737,
  8647,
  65493,
  71108,
  56122,
  (e) => {
    "use strict";
    let t,
      i,
      r,
      n = [
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
        "skewY",
      ],
      s = new Set(n),
      o = (e, t, i) => (i > t ? t : i < e ? e : i),
      a = {
        test: (e) => "number" == typeof e,
        parse: parseFloat,
        transform: (e) => e,
      },
      l = { ...a, transform: (e) => o(0, 1, e) },
      u = { ...a, default: 1 },
      h = (e) => Math.round(1e5 * e) / 1e5,
      d = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
      c =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      p = (e, t) => (i) =>
        !!(
          ("string" == typeof i && c.test(i) && i.startsWith(e)) ||
          (t && null != i && Object.prototype.hasOwnProperty.call(i, t))
        ),
      m = (e, t, i) => (r) => {
        if ("string" != typeof r) return r;
        let [n, s, o, a] = r.match(d);
        return {
          [e]: parseFloat(n),
          [t]: parseFloat(s),
          [i]: parseFloat(o),
          alpha: void 0 !== a ? parseFloat(a) : 1,
        };
      },
      f = { ...a, transform: (e) => Math.round(o(0, 255, e)) },
      g = {
        test: p("rgb", "red"),
        parse: m("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: i, alpha: r = 1 }) =>
          "rgba(" +
          f.transform(e) +
          ", " +
          f.transform(t) +
          ", " +
          f.transform(i) +
          ", " +
          h(l.transform(r)) +
          ")",
      },
      y = {
        test: p("#"),
        parse: function (e) {
          let t = "",
            i = "",
            r = "",
            n = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (i = e.substring(3, 5)),
                (r = e.substring(5, 7)),
                (n = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (i = e.substring(2, 3)),
                (r = e.substring(3, 4)),
                (n = e.substring(4, 5)),
                (t += t),
                (i += i),
                (r += r),
                (n += n)),
            {
              red: parseInt(t, 16),
              green: parseInt(i, 16),
              blue: parseInt(r, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: g.transform,
      },
      v = (e) => ({
        test: (t) =>
          "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      }),
      x = v("deg"),
      b = v("%"),
      w = v("px"),
      k = v("vh"),
      S = v("vw"),
      P = {
        ...b,
        parse: (e) => b.parse(e) / 100,
        transform: (e) => b.transform(100 * e),
      },
      T = {
        test: p("hsl", "hue"),
        parse: m("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: i, alpha: r = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          b.transform(h(t)) +
          ", " +
          b.transform(h(i)) +
          ", " +
          h(l.transform(r)) +
          ")",
      },
      E = {
        test: (e) => g.test(e) || y.test(e) || T.test(e),
        parse: (e) =>
          g.test(e) ? g.parse(e) : T.test(e) ? T.parse(e) : y.parse(e),
        transform: (e) =>
          "string" == typeof e
            ? e
            : e.hasOwnProperty("red")
            ? g.transform(e)
            : T.transform(e),
        getAnimatableNone: (e) => {
          let t = E.parse(e);
          return (t.alpha = 0), E.transform(t);
        },
      },
      j =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
      C = "number",
      M = "color",
      A =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function R(e) {
      let t = e.toString(),
        i = [],
        r = { color: [], number: [], var: [] },
        n = [],
        s = 0,
        o = t
          .replace(
            A,
            (e) => (
              E.test(e)
                ? (r.color.push(s), n.push(M), i.push(E.parse(e)))
                : e.startsWith("var(")
                ? (r.var.push(s), n.push("var"), i.push(e))
                : (r.number.push(s), n.push(C), i.push(parseFloat(e))),
              ++s,
              "${}"
            )
          )
          .split("${}");
      return { values: i, split: o, indexes: r, types: n };
    }
    function V({ split: e, types: t }) {
      let i = e.length;
      return (r) => {
        let n = "";
        for (let s = 0; s < i; s++)
          if (((n += e[s]), void 0 !== r[s])) {
            let e = t[s];
            e === C
              ? (n += h(r[s]))
              : e === M
              ? (n += E.transform(r[s]))
              : (n += r[s]);
          }
        return n;
      };
    }
    let D = {
        test: function (e) {
          return (
            isNaN(e) &&
            "string" == typeof e &&
            (e.match(d)?.length || 0) + (e.match(j)?.length || 0) > 0
          );
        },
        parse: function (e) {
          return R(e).values;
        },
        createTransformer: function (e) {
          return V(R(e));
        },
        getAnimatableNone: function (e) {
          let t = R(e);
          return V(t)(
            t.values.map((e, i) =>
              ((e, t) =>
                "number" == typeof e
                  ? t?.trim().endsWith("/")
                    ? e
                    : 0
                  : "number" == typeof e
                  ? 0
                  : E.test(e)
                  ? E.getAnimatableNone(e)
                  : e)(e, t.split[i])
            )
          );
        },
      },
      L = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function O(e) {
      let [t, i] = e.slice(0, -1).split("(");
      if ("drop-shadow" === t) return e;
      let [r] = i.match(d) || [];
      if (!r) return e;
      let n = i.replace(r, ""),
        s = +!!L.has(t);
      return r !== i && (s *= 100), t + "(" + s + n + ")";
    }
    let I = /\b([a-z-]*)\(.*?\)/gu,
      B = {
        ...D,
        getAnimatableNone: (e) => {
          let t = e.match(I);
          return t ? t.map(O).join(" ") : e;
        },
      },
      N = {
        ...D,
        getAnimatableNone: (e) => {
          let t = D.parse(e);
          return D.createTransformer(e)(
            t.map((e) =>
              "number" == typeof e
                ? 0
                : "object" == typeof e
                ? { ...e, alpha: 1 }
                : e
            )
          );
        },
      },
      z = { ...a, transform: Math.round },
      F = {
        borderWidth: w,
        borderTopWidth: w,
        borderRightWidth: w,
        borderBottomWidth: w,
        borderLeftWidth: w,
        borderRadius: w,
        borderTopLeftRadius: w,
        borderTopRightRadius: w,
        borderBottomRightRadius: w,
        borderBottomLeftRadius: w,
        width: w,
        maxWidth: w,
        height: w,
        maxHeight: w,
        top: w,
        right: w,
        bottom: w,
        left: w,
        inset: w,
        insetBlock: w,
        insetBlockStart: w,
        insetBlockEnd: w,
        insetInline: w,
        insetInlineStart: w,
        insetInlineEnd: w,
        padding: w,
        paddingTop: w,
        paddingRight: w,
        paddingBottom: w,
        paddingLeft: w,
        paddingBlock: w,
        paddingBlockStart: w,
        paddingBlockEnd: w,
        paddingInline: w,
        paddingInlineStart: w,
        paddingInlineEnd: w,
        margin: w,
        marginTop: w,
        marginRight: w,
        marginBottom: w,
        marginLeft: w,
        marginBlock: w,
        marginBlockStart: w,
        marginBlockEnd: w,
        marginInline: w,
        marginInlineStart: w,
        marginInlineEnd: w,
        fontSize: w,
        backgroundPositionX: w,
        backgroundPositionY: w,
        rotate: x,
        rotateX: x,
        rotateY: x,
        rotateZ: x,
        scale: u,
        scaleX: u,
        scaleY: u,
        scaleZ: u,
        skew: x,
        skewX: x,
        skewY: x,
        distance: w,
        translateX: w,
        translateY: w,
        translateZ: w,
        x: w,
        y: w,
        z: w,
        perspective: w,
        transformPerspective: w,
        opacity: l,
        originX: P,
        originY: P,
        originZ: w,
        zIndex: z,
        fillOpacity: l,
        strokeOpacity: l,
        numOctaves: z,
      },
      _ = {
        ...F,
        color: E,
        backgroundColor: E,
        outlineColor: E,
        fill: E,
        stroke: E,
        borderColor: E,
        borderTopColor: E,
        borderRightColor: E,
        borderBottomColor: E,
        borderLeftColor: E,
        filter: B,
        WebkitFilter: B,
        mask: N,
        WebkitMask: N,
      },
      $ = (e) => _[e],
      U = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      W = () => ({ x: U(), y: U() }),
      H = () => ({ min: 0, max: 0 }),
      X = () => ({ x: H(), y: H() }),
      G = (e) => !!(e && e.getVelocity),
      Y = new Set(["width", "height", "top", "left", "right", "bottom", ...n]),
      K = (e) => (t) => t.test(e),
      q = [a, w, b, x, S, k, { test: (e) => "auto" === e, parse: (e) => e }],
      Z = (e) => q.find(K(e));
    var J,
      Q = e.i(24290);
    let ee = () => {},
      et = () => {};
    Q.default;
    let ei = (e) => (t) => "string" == typeof t && t.startsWith(e),
      er = ei("--"),
      en = ei("var(--"),
      es = (e) => !!en(e) && eo.test(e.split("/*")[0].trim()),
      eo =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function ea(e) {
      return "string" == typeof e && e.split("/*")[0].includes("var(--");
    }
    let el = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
      eu = (e) => (180 * e) / Math.PI,
      eh = (e) => ec(eu(Math.atan2(e[1], e[0]))),
      ed = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: eh,
        rotateZ: eh,
        skewX: (e) => eu(Math.atan(e[1])),
        skewY: (e) => eu(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      },
      ec = (e) => ((e %= 360) < 0 && (e += 360), e),
      ep = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
      em = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
      ef = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: ep,
        scaleY: em,
        scale: (e) => (ep(e) + em(e)) / 2,
        rotateX: (e) => ec(eu(Math.atan2(e[6], e[5]))),
        rotateY: (e) => ec(eu(Math.atan2(-e[2], e[0]))),
        rotateZ: eh,
        rotate: eh,
        skewX: (e) => eu(Math.atan(e[4])),
        skewY: (e) => eu(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      };
    function eg(e) {
      return +!!e.includes("scale");
    }
    function ey(e, t) {
      let i, r;
      if (!e || "none" === e) return eg(t);
      let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      if (n) (i = ef), (r = n);
      else {
        let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        (i = ed), (r = t);
      }
      if (!r) return eg(t);
      let s = i[t],
        o = r[1].split(",").map(ev);
      return "function" == typeof s ? s(o) : o[s];
    }
    function ev(e) {
      return parseFloat(e.trim());
    }
    let ex = (e) => e === a || e === w,
      eb = new Set(["x", "y", "z"]),
      ew = n.filter((e) => !eb.has(e)),
      ek = {
        width: (
          { x: e },
          { paddingLeft: t = "0", paddingRight: i = "0", boxSizing: r }
        ) => {
          let n = e.max - e.min;
          return "border-box" === r ? n : n - parseFloat(t) - parseFloat(i);
        },
        height: (
          { y: e },
          { paddingTop: t = "0", paddingBottom: i = "0", boxSizing: r }
        ) => {
          let n = e.max - e.min;
          return "border-box" === r ? n : n - parseFloat(t) - parseFloat(i);
        },
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: (e, { transform: t }) => ey(t, "x"),
        y: (e, { transform: t }) => ey(t, "y"),
      };
    (ek.translateX = ek.x), (ek.translateY = ek.y);
    let eS = (e) => e,
      eP = {},
      eT = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
    function eE(e, t) {
      let i = !1,
        r = !0,
        n = { delta: 0, timestamp: 0, isProcessing: !1 },
        s = () => (i = !0),
        o = eT.reduce(
          (e, i) => (
            (e[i] = (function (e, t) {
              let i = new Set(),
                r = new Set(),
                n = !1,
                s = !1,
                o = new WeakSet(),
                a = { delta: 0, timestamp: 0, isProcessing: !1 },
                l = 0;
              function u(t) {
                o.has(t) && (h.schedule(t), e()), l++, t(a);
              }
              let h = {
                schedule: (e, t = !1, s = !1) => {
                  let a = s && n ? i : r;
                  return t && o.add(e), a.add(e), e;
                },
                cancel: (e) => {
                  r.delete(e), o.delete(e);
                },
                process: (e) => {
                  if (((a = e), n)) {
                    s = !0;
                    return;
                  }
                  n = !0;
                  let o = i;
                  (i = r),
                    (r = o),
                    i.forEach(u),
                    t,
                    (l = 0),
                    i.clear(),
                    (n = !1),
                    s && ((s = !1), h.process(e));
                },
              };
              return h;
            })(s, t ? i : void 0)),
            e
          ),
          {}
        ),
        {
          setup: a,
          read: l,
          resolveKeyframes: u,
          preUpdate: h,
          update: d,
          preRender: c,
          render: p,
          postRender: m,
        } = o,
        f = () => {
          let s = eP.useManualTiming,
            o = s ? n.timestamp : performance.now();
          (i = !1),
            s ||
              (n.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(o - n.timestamp, 40), 1)),
            (n.timestamp = o),
            (n.isProcessing = !0),
            a.process(n),
            l.process(n),
            u.process(n),
            h.process(n),
            d.process(n),
            c.process(n),
            p.process(n),
            m.process(n),
            (n.isProcessing = !1),
            i && t && ((r = !1), e(f));
        };
      return {
        schedule: eT.reduce((t, s) => {
          let a = o[s];
          return (
            (t[s] = (t, s = !1, o = !1) => (
              !i && ((i = !0), (r = !0), n.isProcessing || e(f)),
              a.schedule(t, s, o)
            )),
            t
          );
        }, {}),
        cancel: (e) => {
          for (let t = 0; t < eT.length; t++) o[eT[t]].cancel(e);
        },
        state: n,
        steps: o,
      };
    }
    let {
        schedule: ej,
        cancel: eC,
        state: eM,
        steps: eA,
      } = eE(
        "u" > typeof requestAnimationFrame ? requestAnimationFrame : eS,
        !0
      ),
      eR = new Set(),
      eV = !1,
      eD = !1,
      eL = !1;
    function eO() {
      if (eD) {
        let e = Array.from(eR).filter((e) => e.needsMeasurement),
          t = new Set(e.map((e) => e.element)),
          i = new Map();
        t.forEach((e) => {
          let t,
            r =
              ((t = []),
              ew.forEach((i) => {
                let r = e.getValue(i);
                void 0 !== r &&
                  (t.push([i, r.get()]), r.set(+!!i.startsWith("scale")));
              }),
              t);
          r.length && (i.set(e, r), e.render());
        }),
          e.forEach((e) => e.measureInitialState()),
          t.forEach((e) => {
            e.render();
            let t = i.get(e);
            t &&
              t.forEach(([t, i]) => {
                e.getValue(t)?.set(i);
              });
          }),
          e.forEach((e) => e.measureEndState()),
          e.forEach((e) => {
            void 0 !== e.suspendedScrollY &&
              window.scrollTo(0, e.suspendedScrollY);
          });
      }
      (eD = !1), (eV = !1), eR.forEach((e) => e.complete(eL)), eR.clear();
    }
    function eI() {
      eR.forEach((e) => {
        e.readKeyframes(), e.needsMeasurement && (eD = !0);
      });
    }
    class eB {
      constructor(e, t, i, r, n, s = !1) {
        (this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...e]),
          (this.onComplete = t),
          (this.name = i),
          (this.motionValue = r),
          (this.element = n),
          (this.isAsync = s);
      }
      scheduleResolve() {
        (this.state = "scheduled"),
          this.isAsync
            ? (eR.add(this),
              eV || ((eV = !0), ej.read(eI), ej.resolveKeyframes(eO)))
            : (this.readKeyframes(), this.complete());
      }
      readKeyframes() {
        let {
          unresolvedKeyframes: e,
          name: t,
          element: i,
          motionValue: r,
        } = this;
        if (null === e[0]) {
          let n = r?.get(),
            s = e[e.length - 1];
          if (void 0 !== n) e[0] = n;
          else if (i && t) {
            let r = i.readValue(t, s);
            null != r && (e[0] = r);
          }
          void 0 === e[0] && (e[0] = s), r && void 0 === n && r.set(e[0]);
        }
        for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(e = !1) {
        (this.state = "complete"),
          this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
          eR.delete(this);
      }
      cancel() {
        "scheduled" === this.state &&
          (eR.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    let eN = new Set([B, N]);
    function ez(e, t) {
      let i = $(e);
      return (
        eN.has(i) || (i = D),
        i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
      );
    }
    let eF = new Set(["auto", "none", "0"]);
    class e_ extends eB {
      constructor(e, t, i, r, n) {
        super(e, t, i, r, n, !0);
      }
      readKeyframes() {
        let { unresolvedKeyframes: e, element: t, name: i } = this;
        if (!t || !t.current) return;
        super.readKeyframes();
        for (let i = 0; i < e.length; i++) {
          let r = e[i];
          if ("string" == typeof r && es((r = r.trim()))) {
            let n = (function e(t, i, r = 1) {
              et(
                r <= 4,
                `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
                "max-css-var-depth"
              );
              let [n, s] = (function (e) {
                let t = el.exec(e);
                if (!t) return [,];
                let [, i, r, n] = t;
                return [`--${i ?? r}`, n];
              })(t);
              if (!n) return;
              let o = window.getComputedStyle(i).getPropertyValue(n);
              if (o) {
                let e = o.trim();
                return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
                  ? parseFloat(e)
                  : e;
              }
              return es(s) ? e(s, i, r + 1) : s;
            })(r, t.current);
            void 0 !== n && (e[i] = n),
              i === e.length - 1 && (this.finalKeyframe = r);
          }
        }
        if ((this.resolveNoneKeyframes(), !Y.has(i) || 2 !== e.length)) return;
        let [r, n] = e,
          s = Z(r),
          o = Z(n);
        if (ea(r) !== ea(n) && ek[i]) {
          this.needsMeasurement = !0;
          return;
        }
        if (s !== o)
          if (ex(s) && ex(o))
            for (let t = 0; t < e.length; t++) {
              let i = e[t];
              "string" == typeof i && (e[t] = parseFloat(i));
            }
          else ek[i] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        let { unresolvedKeyframes: e, name: t } = this,
          i = [];
        for (let t = 0; t < e.length; t++)
          (null === e[t] ||
            (function (e) {
              if ("number" == typeof e) return 0 === e;
              if (null === e) return !0;
              return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e);
            })(e[t])) &&
            i.push(t);
        i.length &&
          (function (e, t, i) {
            let r,
              n = 0;
            for (; n < e.length && !r; ) {
              let t = e[n];
              "string" == typeof t &&
                !eF.has(t) &&
                R(t).values.length &&
                (r = e[n]),
                n++;
            }
            if (r && i) for (let n of t) e[n] = ez(i, r);
          })(e, i, t);
      }
      measureInitialState() {
        let { element: e, unresolvedKeyframes: t, name: i } = this;
        if (!e || !e.current) return;
        "height" === i && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = ek[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
          (t[0] = this.measuredOrigin);
        let r = t[t.length - 1];
        void 0 !== r && e.getValue(i, r).jump(r, !1);
      }
      measureEndState() {
        let { element: e, name: t, unresolvedKeyframes: i } = this;
        if (!e || !e.current) return;
        let r = e.getValue(t);
        r && r.jump(this.measuredOrigin, !1);
        let n = i.length - 1,
          s = i[n];
        (i[n] = ek[t](
          e.measureViewportBox(),
          window.getComputedStyle(e.current)
        )),
          null !== s &&
            void 0 === this.finalKeyframe &&
            (this.finalKeyframe = s),
          this.removedTransforms?.length &&
            this.removedTransforms.forEach(([t, i]) => {
              e.getValue(t).set(i);
            }),
          this.resolveNoneKeyframes();
      }
    }
    let e$ = (e) => 1e3 * e;
    function eU(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function eW(e, t) {
      let i = e.indexOf(t);
      i > -1 && e.splice(i, 1);
    }
    class eH {
      constructor() {
        this.subscriptions = [];
      }
      add(e) {
        return eU(this.subscriptions, e), () => eW(this.subscriptions, e);
      }
      notify(e, t, i) {
        let r = this.subscriptions.length;
        if (r)
          if (1 === r) this.subscriptions[0](e, t, i);
          else
            for (let n = 0; n < r; n++) {
              let r = this.subscriptions[n];
              r && r(e, t, i);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    function eX(e, t, i) {
      t.startsWith("--") ? e.style.setProperty(t, i) : (e.style[t] = i);
    }
    function eG(e) {
      let t;
      return () => (void 0 === t && (t = e()), t);
    }
    let eY = {};
    function eK(e, t) {
      let i = eG(e);
      return () => eY[t] ?? i();
    }
    let eq = eK(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
      eZ = (e) => null !== e;
    function eJ(e, { repeat: t, repeatType: i = "loop" }, r, n = 1) {
      let s = e.filter(eZ),
        o = n < 0 || (t && "loop" !== i && t % 2 == 1) ? 0 : s.length - 1;
      return o && void 0 !== r ? r : s[o];
    }
    class eQ {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((e) => {
          this.resolve = e;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
    }
    let e0 = { layout: 0, mainThread: 0, waapi: 0 },
      e1 = (e) => Array.isArray(e) && "number" == typeof e[0],
      e2 = eK(() => {
        try {
          document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch (e) {
          return !1;
        }
        return !0;
      }, "linearEasing"),
      e3 = (e, t, i = 10) => {
        let r = "",
          n = Math.max(Math.round(t / i), 2);
        for (let t = 0; t < n; t++)
          r += Math.round(1e4 * e(t / (n - 1))) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
      },
      e5 = ([e, t, i, r]) => `cubic-bezier(${e}, ${t}, ${i}, ${r})`,
      e4 = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: e5([0, 0.65, 0.55, 1]),
        circOut: e5([0.55, 0, 1, 0.45]),
        backIn: e5([0.31, 0.01, 0.66, -0.59]),
        backOut: e5([0.33, 1.53, 0.69, 0.99]),
      };
    function e6(e) {
      return "function" == typeof e && "applyToOptions" in e;
    }
    class e8 extends eQ {
      constructor(e) {
        if (
          (super(),
          (this.finishedTime = null),
          (this.isStopped = !1),
          (this.manualStartTime = null),
          !e)
        )
          return;
        const {
          element: t,
          name: i,
          keyframes: r,
          pseudoElement: n,
          allowFlatten: s = !1,
          finalKeyframe: o,
          onComplete: a,
        } = e;
        (this.isPseudoElement = !!n),
          (this.allowFlatten = s),
          (this.options = e),
          et(
            "string" != typeof e.type,
            'Mini animate() doesn\'t support "type" as a string.',
            "mini-spring"
          );
        const l = (function ({ type: e, ...t }) {
          return e6(e) && e2()
            ? e.applyToOptions(t)
            : (t.duration ?? (t.duration = 300),
              t.ease ?? (t.ease = "easeOut"),
              t);
        })(e);
        (this.animation = (function (
          e,
          t,
          i,
          {
            delay: r = 0,
            duration: n = 300,
            repeat: s = 0,
            repeatType: o = "loop",
            ease: a = "easeOut",
            times: l,
          } = {},
          u
        ) {
          let h = { [t]: i };
          l && (h.offset = l);
          let d = (function e(t, i) {
            if (t)
              return "function" == typeof t
                ? e2()
                  ? e3(t, i)
                  : "ease-out"
                : e1(t)
                ? e5(t)
                : Array.isArray(t)
                ? t.map((t) => e(t, i) || e4.easeOut)
                : e4[t];
          })(a, n);
          Array.isArray(d) && (h.easing = d);
          let c = {
            delay: r,
            duration: n,
            easing: Array.isArray(d) ? "linear" : d,
            fill: "both",
            iterations: s + 1,
            direction: "reverse" === o ? "alternate" : "normal",
          };
          u && (c.pseudoElement = u);
          let p = e.animate(h, c);
          return p;
        })(t, i, r, l, n)),
          !1 === l.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !n)) {
              let e = eJ(r, this.options, o, this.speed);
              this.updateMotionValue && this.updateMotionValue(e),
                eX(t, i, e),
                this.animation.cancel();
            }
            a?.(), this.notifyFinished();
          });
      }
      play() {
        this.isStopped ||
          ((this.manualStartTime = null),
          this.animation.play(),
          "finished" === this.state && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.finish?.();
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (e) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        let { state: e } = this;
        "idle" !== e &&
          "finished" !== e &&
          (this.updateMotionValue
            ? this.updateMotionValue()
            : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        let e = this.options?.element;
        !this.isPseudoElement &&
          e?.isConnected &&
          this.animation.commitStyles?.();
      }
      get duration() {
        return (
          Number(this.animation.effect?.getComputedTiming?.().duration || 0) /
          1e3
        );
      }
      get iterationDuration() {
        let { delay: e = 0 } = this.options || {};
        return this.duration + e / 1e3;
      }
      get time() {
        return (Number(this.animation.currentTime) || 0) / 1e3;
      }
      set time(e) {
        let t = null !== this.finishedTime;
        (this.manualStartTime = null),
          (this.finishedTime = null),
          (this.animation.currentTime = e$(e)),
          t && this.animation.pause();
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(e) {
        e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e);
      }
      get state() {
        return null !== this.finishedTime
          ? "finished"
          : this.animation.playState;
      }
      get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
      }
      set startTime(e) {
        this.manualStartTime = this.animation.startTime = e;
      }
      attachTimeline({ timeline: e, rangeStart: t, rangeEnd: i, observe: r }) {
        return (this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        e && eq())
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            i && (this.animation.rangeEnd = i),
            eS)
          : r(this);
      }
    }
    let e9 = new Set(["opacity", "clipPath", "filter", "transform"]),
      { schedule: e7 } = eE(queueMicrotask, !1);
    function te() {
      t = void 0;
    }
    let tt = {
        now: () => (
          void 0 === t &&
            tt.set(
              eM.isProcessing || eP.useManualTiming
                ? eM.timestamp
                : performance.now()
            ),
          t
        ),
        set: (e) => {
          (t = e), queueMicrotask(te);
        },
      },
      ti = (e, t) => (t ? (1e3 / t) * e : 0),
      tr;
    class tn {
      constructor(e, t = {}) {
        (this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (e) => {
            let t = tt.now();
            if (
              (this.updatedAt !== t && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(e),
              this.current !== this.prev &&
                (this.events.change?.notify(this.current), this.dependents))
            )
              for (let e of this.dependents) e.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(e),
          (this.owner = t.owner);
      }
      setCurrent(e) {
        (this.current = e),
          (this.updatedAt = tt.now()),
          null === this.canTrackVelocity &&
            void 0 !== e &&
            (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
      }
      setPrevFrameValue(e = this.current) {
        (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
      }
      onChange(e) {
        return this.on("change", e);
      }
      on(e, t) {
        this.events[e] || (this.events[e] = new eH());
        let i = this.events[e].add(t);
        return "change" === e
          ? () => {
              i(),
                ej.read(() => {
                  this.events.change.getSize() || this.stop();
                });
            }
          : i;
      }
      clearListeners() {
        for (let e in this.events) this.events[e].clear();
      }
      attach(e, t) {
        (this.passiveEffect = e), (this.stopPassiveEffect = t);
      }
      set(e) {
        this.passiveEffect
          ? this.passiveEffect(e, this.updateAndNotify)
          : this.updateAndNotify(e);
      }
      setWithVelocity(e, t, i) {
        this.set(t),
          (this.prev = void 0),
          (this.prevFrameValue = e),
          (this.prevUpdatedAt = this.updatedAt - i);
      }
      jump(e, t = !0) {
        this.updateAndNotify(e),
          (this.prev = e),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          t && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
      dirty() {
        this.events.change?.notify(this.current);
      }
      addDependent(e) {
        this.dependents || (this.dependents = new Set()),
          this.dependents.add(e);
      }
      removeDependent(e) {
        this.dependents && this.dependents.delete(e);
      }
      get() {
        return tr && tr.push(this), this.current;
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        let e = tt.now();
        if (
          !this.canTrackVelocity ||
          void 0 === this.prevFrameValue ||
          e - this.updatedAt > 30
        )
          return 0;
        let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return ti(
          parseFloat(this.current) - parseFloat(this.prevFrameValue),
          t
        );
      }
      start(e) {
        return (
          this.stop(),
          new Promise((t) => {
            (this.hasAnimated = !0),
              (this.animation = e(t)),
              this.events.animationStart && this.events.animationStart.notify();
          }).then(() => {
            this.events.animationComplete &&
              this.events.animationComplete.notify(),
              this.clearAnimation();
          })
        );
      }
      stop() {
        this.animation &&
          (this.animation.stop(),
          this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation();
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        this.dependents?.clear(),
          this.events.destroy?.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
    }
    function ts(e, t) {
      return new tn(e, t);
    }
    let to = [...q, E, D],
      ta = new WeakMap();
    function tl(e) {
      return null !== e && "object" == typeof e && "function" == typeof e.start;
    }
    function tu(e) {
      return "string" == typeof e || Array.isArray(e);
    }
    let th = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ],
      td = ["initial", ...th];
    function tc(e) {
      return tl(e.animate) || td.some((t) => tu(e[t]));
    }
    function tp(e) {
      return !!(tc(e) || e.variants);
    }
    let tm = { current: null },
      tf = { current: !1 },
      tg = "u" > typeof window;
    function ty(e) {
      let t = [{}, {}];
      return (
        e?.values.forEach((e, i) => {
          (t[0][i] = e.get()), (t[1][i] = e.getVelocity());
        }),
        t
      );
    }
    function tv(e, t, i, r) {
      if ("function" == typeof t) {
        let [n, s] = ty(r);
        t = t(void 0 !== i ? i : e.custom, n, s);
      }
      if (
        ("string" == typeof t && (t = e.variants && e.variants[t]),
        "function" == typeof t)
      ) {
        let [n, s] = ty(r);
        t = t(void 0 !== i ? i : e.custom, n, s);
      }
      return t;
    }
    let tx = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ],
      tb = {};
    class tw {
      scrapeMotionValuesFromProps(e, t, i) {
        return {};
      }
      constructor(
        {
          parent: e,
          props: t,
          presenceContext: i,
          reducedMotionConfig: r,
          skipAnimations: n,
          blockInitialAnimation: s,
          visualState: o,
        },
        a = {}
      ) {
        (this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.shouldSkipAnimations = !1),
          (this.values = new Map()),
          (this.KeyframeResolver = eB),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.hasBeenMounted = !1),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection
              ));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            let e = tt.now();
            this.renderScheduledAt < e &&
              ((this.renderScheduledAt = e), ej.render(this.render, !1, !0));
          });
        const { latestValues: l, renderState: u } = o;
        (this.latestValues = l),
          (this.baseTarget = { ...l }),
          (this.initialValues = t.initial ? { ...l } : {}),
          (this.renderState = u),
          (this.parent = e),
          (this.props = t),
          (this.presenceContext = i),
          (this.depth = e ? e.depth + 1 : 0),
          (this.reducedMotionConfig = r),
          (this.skipAnimationsConfig = n),
          (this.options = a),
          (this.blockInitialAnimation = !!s),
          (this.isControllingVariants = tc(t)),
          (this.isVariantNode = tp(t)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(e && e.current));
        const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(
          t,
          {},
          this
        );
        for (const e in d) {
          const t = d[e];
          void 0 !== l[e] && G(t) && t.set(l[e]);
        }
      }
      mount(e) {
        if (this.hasBeenMounted)
          for (let e in this.initialValues)
            this.values.get(e)?.jump(this.initialValues[e]),
              (this.latestValues[e] = this.initialValues[e]);
        (this.current = e),
          ta.set(e, this),
          this.projection &&
            !this.projection.instance &&
            this.projection.mount(e),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
          "never" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !1)
            : "always" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !0)
            : (tf.current ||
                (function () {
                  if (((tf.current = !0), tg))
                    if (window.matchMedia) {
                      let e = window.matchMedia("(prefers-reduced-motion)"),
                        t = () => (tm.current = e.matches);
                      e.addEventListener("change", t), t();
                    } else tm.current = !1;
                })(),
              (this.shouldReduceMotion = tm.current)),
          (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
          this.parent?.addChild(this),
          this.update(this.props, this.presenceContext),
          (this.hasBeenMounted = !0);
      }
      unmount() {
        for (let e in (this.projection && this.projection.unmount(),
        eC(this.notifyUpdate),
        eC(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this),
        this.events))
          this.events[e].clear();
        for (let e in this.features) {
          let t = this.features[e];
          t && (t.unmount(), (t.isMounted = !1));
        }
        this.current = null;
      }
      addChild(e) {
        this.children.add(e),
          this.enteringChildren ?? (this.enteringChildren = new Set()),
          this.enteringChildren.add(e);
      }
      removeChild(e) {
        this.children.delete(e),
          this.enteringChildren && this.enteringChildren.delete(e);
      }
      bindToMotionValue(e, t) {
        let i;
        if (
          (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
          t.accelerate && e9.has(e) && this.current instanceof HTMLElement)
        ) {
          let {
              factory: i,
              keyframes: r,
              times: n,
              ease: s,
              duration: o,
            } = t.accelerate,
            a = new e8({
              element: this.current,
              name: e,
              keyframes: r,
              times: n,
              ease: s,
              duration: e$(o),
            }),
            l = i(a);
          this.valueSubscriptions.set(e, () => {
            l(), a.cancel();
          });
          return;
        }
        let r = s.has(e);
        r && this.onBindTransform && this.onBindTransform();
        let n = t.on("change", (t) => {
          (this.latestValues[e] = t),
            this.props.onUpdate && ej.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender();
        });
        "u" > typeof window &&
          window.MotionCheckAppearSync &&
          (i = window.MotionCheckAppearSync(this, e, t)),
          this.valueSubscriptions.set(e, () => {
            n(), i && i();
          });
      }
      sortNodePosition(e) {
        return this.current &&
          this.sortInstanceNodePosition &&
          this.type === e.type
          ? this.sortInstanceNodePosition(this.current, e.current)
          : 0;
      }
      updateFeatures() {
        let e = "animation";
        for (e in tb) {
          let t = tb[e];
          if (!t) continue;
          let { isEnabled: i, Feature: r } = t;
          if (
            (!this.features[e] &&
              r &&
              i(this.props) &&
              (this.features[e] = new r(this)),
            this.features[e])
          ) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current
          ? this.measureInstanceViewportBox(this.current, this.props)
          : X();
      }
      getStaticValue(e) {
        return this.latestValues[e];
      }
      setStaticValue(e, t) {
        this.latestValues[e] = t;
      }
      update(e, t) {
        (e.transformTemplate || this.props.transformTemplate) &&
          this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = e),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = t);
        for (let t = 0; t < tx.length; t++) {
          let i = tx[t];
          this.propEventSubscriptions[i] &&
            (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
          let r = e["on" + i];
          r && (this.propEventSubscriptions[i] = this.on(i, r));
        }
        (this.prevMotionValues = (function (e, t, i) {
          for (let r in t) {
            let n = t[r],
              s = i[r];
            if (G(n)) e.addValue(r, n);
            else if (G(s)) e.addValue(r, ts(n, { owner: e }));
            else if (s !== n)
              if (e.hasValue(r)) {
                let t = e.getValue(r);
                !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n);
              } else {
                let t = e.getStaticValue(r);
                e.addValue(r, ts(void 0 !== t ? t : n, { owner: e }));
              }
          }
          for (let r in i) void 0 === t[r] && e.removeValue(r);
          return t;
        })(
          this,
          this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
          this.prevMotionValues
        )),
          this.handleChildMotionValue && this.handleChildMotionValue();
      }
      getProps() {
        return this.props;
      }
      getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode
          ? this
          : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
      }
      addVariantChild(e) {
        let t = this.getClosestVariantNode();
        if (t)
          return (
            t.variantChildren && t.variantChildren.add(e),
            () => t.variantChildren.delete(e)
          );
      }
      addValue(e, t) {
        let i = this.values.get(e);
        t !== i &&
          (i && this.removeValue(e),
          this.bindToMotionValue(e, t),
          this.values.set(e, t),
          (this.latestValues[e] = t.get()));
      }
      removeValue(e) {
        this.values.delete(e);
        let t = this.valueSubscriptions.get(e);
        t && (t(), this.valueSubscriptions.delete(e)),
          delete this.latestValues[e],
          this.removeValueFromRenderState(e, this.renderState);
      }
      hasValue(e) {
        return this.values.has(e);
      }
      getValue(e, t) {
        if (this.props.values && this.props.values[e])
          return this.props.values[e];
        let i = this.values.get(e);
        return (
          void 0 === i &&
            void 0 !== t &&
            ((i = ts(null === t ? void 0 : t, { owner: this })),
            this.addValue(e, i)),
          i
        );
      }
      readValue(e, t) {
        let i =
          void 0 === this.latestValues[e] && this.current
            ? this.getBaseTargetFromProps(this.props, e) ??
              this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        if (null != i) {
          let r, n;
          if (
            "string" == typeof i &&
            ((r = i),
            /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r) ||
              ((n = i), /^0[^.\s]+$/u.test(n)))
          )
            i = parseFloat(i);
          else {
            let r;
            (r = i), !to.find(K(r)) && D.test(t) && (i = ez(e, t));
          }
          this.setBaseTarget(e, G(i) ? i.get() : i);
        }
        return G(i) ? i.get() : i;
      }
      setBaseTarget(e, t) {
        this.baseTarget[e] = t;
      }
      getBaseTarget(e) {
        let t,
          { initial: i } = this.props;
        if ("string" == typeof i || "object" == typeof i) {
          let r = tv(this.props, i, this.presenceContext?.custom);
          r && (t = r[e]);
        }
        if (i && void 0 !== t) return t;
        let r = this.getBaseTargetFromProps(this.props, e);
        return void 0 === r || G(r)
          ? void 0 !== this.initialValues[e] && void 0 === t
            ? void 0
            : this.baseTarget[e]
          : r;
      }
      on(e, t) {
        return (
          this.events[e] || (this.events[e] = new eH()), this.events[e].add(t)
        );
      }
      notify(e, ...t) {
        this.events[e] && this.events[e].notify(...t);
      }
      scheduleRenderMicrotask() {
        e7.render(this.render);
      }
    }
    class tk extends tw {
      constructor() {
        super(...arguments), (this.KeyframeResolver = e_);
      }
      sortInstanceNodePosition(e, t) {
        return 2 & e.compareDocumentPosition(t) ? 1 : -1;
      }
      getBaseTargetFromProps(e, t) {
        let i = e.style;
        return i ? i[t] : void 0;
      }
      removeValueFromRenderState(e, { vars: t, style: i }) {
        delete t[e], delete i[e];
      }
      handleChildMotionValue() {
        this.childSubscription &&
          (this.childSubscription(), delete this.childSubscription);
        let { children: e } = this.props;
        G(e) &&
          (this.childSubscription = e.on("change", (e) => {
            this.current && (this.current.textContent = `${e}`);
          }));
      }
    }
    function tS(e) {
      return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
    }
    let tP = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
      tT = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      },
      tE = n.length;
    function tj(e, t, i) {
      let { style: r, vars: o, transformOrigin: a } = e,
        l = !1,
        u = !1;
      for (let e in t) {
        let i = t[e];
        if (s.has(e)) {
          l = !0;
          continue;
        }
        if (er(e)) {
          o[e] = i;
          continue;
        }
        {
          let t = tP(i, F[e]);
          e.startsWith("origin") ? ((u = !0), (a[e] = t)) : (r[e] = t);
        }
      }
      if (
        (!t.transform &&
          (l || i
            ? (r.transform = (function (e, t, i) {
                let r = "",
                  s = !0;
                for (let o = 0; o < tE; o++) {
                  let a = n[o],
                    l = e[a];
                  if (void 0 === l) continue;
                  let u = !0;
                  if ("number" == typeof l) u = l === +!!a.startsWith("scale");
                  else {
                    let e = parseFloat(l);
                    u = a.startsWith("scale") ? 1 === e : 0 === e;
                  }
                  if (!u || i) {
                    let e = tP(l, F[a]);
                    if (!u) {
                      s = !1;
                      let t = tT[a] || a;
                      r += `${t}(${e}) `;
                    }
                    i && (t[a] = e);
                  }
                }
                return (
                  (r = r.trim()),
                  i ? (r = i(t, s ? "" : r)) : s && (r = "none"),
                  r
                );
              })(t, e.transform, i))
            : r.transform && (r.transform = "none")),
        u)
      ) {
        let { originX: e = "50%", originY: t = "50%", originZ: i = 0 } = a;
        r.transformOrigin = `${e} ${t} ${i}`;
      }
    }
    let tC = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      tM = { offset: "strokeDashoffset", array: "strokeDasharray" },
      tA = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    function tR(
      e,
      {
        attrX: t,
        attrY: i,
        attrScale: r,
        pathLength: n,
        pathSpacing: s = 1,
        pathOffset: o = 0,
        ...a
      },
      l,
      u,
      h
    ) {
      if ((tj(e, a, u), l)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
      }
      (e.attrs = e.style), (e.style = {});
      let { attrs: d, style: c } = e;
      for (let e of (d.transform &&
        ((c.transform = d.transform), delete d.transform),
      (c.transform || d.transformOrigin) &&
        ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
        delete d.transformOrigin),
      c.transform &&
        ((c.transformBox = h?.transformBox ?? "fill-box"),
        delete d.transformBox),
      tA))
        void 0 !== d[e] && ((c[e] = d[e]), delete d[e]);
      void 0 !== t && (d.x = t),
        void 0 !== i && (d.y = i),
        void 0 !== r && (d.scale = r),
        void 0 !== n &&
          (function (e, t, i = 1, r = 0, n = !0) {
            e.pathLength = 1;
            let s = n ? tC : tM;
            (e[s.offset] = `${-r}`), (e[s.array] = `${t} ${i}`);
          })(d, n, s, o, !1);
    }
    let tV = new Set([
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
        "lengthAdjust",
      ]),
      tD = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    function tL(e, { style: t, vars: i }, r, n) {
      let s,
        o = e.style;
      for (s in t) o[s] = t[s];
      for (s in (n?.applyProjectionStyles(o, r), i)) o.setProperty(s, i[s]);
    }
    function tO(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    let tI = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e)
            if (!w.test(e)) return e;
            else e = parseFloat(e);
          let i = tO(e, t.target.x),
            r = tO(e, t.target.y);
          return `${i}% ${r}%`;
        },
      },
      tB = (e, t, i) => e + (t - e) * i,
      tN = {
        borderRadius: {
          ...tI,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tI,
        borderTopRightRadius: tI,
        borderBottomLeftRadius: tI,
        borderBottomRightRadius: tI,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: i }) => {
            let r = D.parse(e);
            if (r.length > 5) return e;
            let n = D.createTransformer(e),
              s = +("number" != typeof r[0]),
              o = i.x.scale * t.x,
              a = i.y.scale * t.y;
            (r[0 + s] /= o), (r[1 + s] /= a);
            let l = tB(o, a, 0.5);
            return (
              "number" == typeof r[2 + s] && (r[2 + s] /= l),
              "number" == typeof r[3 + s] && (r[3 + s] /= l),
              n(r)
            );
          },
        },
      };
    function tz(e, { layout: t, layoutId: i }) {
      return (
        s.has(e) ||
        e.startsWith("origin") ||
        ((t || void 0 !== i) && (!!tN[e] || "opacity" === e))
      );
    }
    function tF(e, t, i) {
      let r = e.style,
        n = t?.style,
        s = {};
      if (!r) return s;
      for (let t in r)
        (G(r[t]) ||
          (n && G(n[t])) ||
          tz(t, e) ||
          i?.getValue(t)?.liveStyle !== void 0) &&
          (s[t] = r[t]);
      return s;
    }
    function t_(e, t, i) {
      let r = tF(e, t, i);
      for (let i in e)
        (G(e[i]) || G(t[i])) &&
          (r[
            -1 !== n.indexOf(i)
              ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
              : i
          ] = e[i]);
      return r;
    }
    class t$ extends tk {
      constructor() {
        super(...arguments),
          (this.type = "svg"),
          (this.isSVGTag = !1),
          (this.measureInstanceViewportBox = X);
      }
      getBaseTargetFromProps(e, t) {
        return e[t];
      }
      readValueFromInstance(e, t) {
        if (s.has(t)) {
          let e = $(t);
          return (e && e.default) || 0;
        }
        return (t = tV.has(t) ? t : tS(t)), e.getAttribute(t);
      }
      scrapeMotionValuesFromProps(e, t, i) {
        return t_(e, t, i);
      }
      build(e, t, i) {
        tR(e, t, this.isSVGTag, i.transformTemplate, i.style);
      }
      renderInstance(e, t, i, r) {
        for (let i in (tL(e, t, void 0, r), t.attrs))
          e.setAttribute(tV.has(i) ? i : tS(i), t.attrs[i]);
      }
      mount(e) {
        (this.isSVGTag = tD(e.tagName)), super.mount(e);
      }
    }
    function tU({ top: e, left: t, right: i, bottom: r }) {
      return { x: { min: t, max: i }, y: { min: e, max: r } };
    }
    function tW(e) {
      return void 0 === e || 1 === e;
    }
    function tH({ scale: e, scaleX: t, scaleY: i }) {
      return !tW(e) || !tW(t) || !tW(i);
    }
    function tX(e) {
      return (
        tH(e) ||
        tG(e) ||
        e.z ||
        e.rotate ||
        e.rotateX ||
        e.rotateY ||
        e.skewX ||
        e.skewY
      );
    }
    function tG(e) {
      var t, i;
      return ((t = e.x) && "0%" !== t) || ((i = e.y) && "0%" !== i);
    }
    function tY(e, t, i, r, n) {
      return void 0 !== n && (e = r + n * (e - r)), r + i * (e - r) + t;
    }
    function tK(e, t = 0, i = 1, r, n) {
      (e.min = tY(e.min, t, i, r, n)), (e.max = tY(e.max, t, i, r, n));
    }
    function tq(e, { x: t, y: i }) {
      tK(e.x, t.translate, t.scale, t.originPoint),
        tK(e.y, i.translate, i.scale, i.originPoint);
    }
    function tZ(e, t) {
      (e.min += t), (e.max += t);
    }
    function tJ(e, t, i, r, n = 0.5) {
      let s = tB(e.min, e.max, n);
      tK(e, t, i, s, r);
    }
    function tQ(e, t) {
      return "string" == typeof e ? (parseFloat(e) / 100) * (t.max - t.min) : e;
    }
    function t0(e, t, i) {
      let r = i ?? e;
      tJ(e.x, tQ(t.x, r.x), t.scaleX, t.scale, t.originX),
        tJ(e.y, tQ(t.y, r.y), t.scaleY, t.scale, t.originY);
    }
    function t1(e, t) {
      return tU(
        (function (e, t) {
          if (!t) return e;
          let i = t({ x: e.left, y: e.top }),
            r = t({ x: e.right, y: e.bottom });
          return { top: i.y, left: i.x, bottom: r.y, right: r.x };
        })(e.getBoundingClientRect(), t)
      );
    }
    class t2 extends tk {
      constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = tL);
      }
      readValueFromInstance(e, t) {
        if (s.has(t))
          return this.projection?.isProjecting
            ? eg(t)
            : ((e, t) => {
                let { transform: i = "none" } = getComputedStyle(e);
                return ey(i, t);
              })(e, t);
        {
          let i = window.getComputedStyle(e),
            r = (er(t) ? i.getPropertyValue(t) : i[t]) || 0;
          return "string" == typeof r ? r.trim() : r;
        }
      }
      measureInstanceViewportBox(e, { transformPagePoint: t }) {
        return t1(e, t);
      }
      build(e, t, i) {
        tj(e, t, i.transformTemplate);
      }
      scrapeMotionValuesFromProps(e, t, i) {
        return tF(e, t, i);
      }
    }
    var t3 = e.i(96505);
    let t5 = [
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
      "view",
    ];
    function t4(e) {
      if ("string" != typeof e || e.includes("-"));
      else if (t5.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
      return !1;
    }
    var t6 = e.i(76172);
    let t8 = (0, t3.createContext)({});
    e.s(["LayoutGroupContext", 0, t8], 84654);
    let t9 = (0, t3.createContext)({ strict: !1 }),
      t7 = (0, t3.createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    e.s(["MotionConfigContext", 0, t7], 3940);
    let ie = (0, t3.createContext)({});
    function it(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    let ii = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    });
    function ir(e, t, i) {
      for (let r in t) G(t[r]) || tz(r, i) || (e[r] = t[r]);
    }
    let is = () => ({ ...ii(), attrs: {} }),
      io = new Set([
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
        "propagate",
        "ignoreStrict",
        "viewport",
      ]);
    function ia(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && "draggable" !== e) ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        io.has(e)
      );
    }
    let il = (e) => !ia(e);
    try {
      (J = (() => {
        let e = Error("Cannot find module '@emotion/is-prop-valid'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      })().default),
        "function" == typeof J &&
          (il = (e) => (e.startsWith("on") ? !ia(e) : J(e)));
    } catch {}
    function iu(e) {
      return G(e) ? e.get() : e;
    }
    let ih = (0, t3.createContext)(null);
    function id(e) {
      let t = (0, t3.useRef)(null);
      return null === t.current && (t.current = e()), t.current;
    }
    e.s(["PresenceContext", 0, ih], 31737), e.s(["useConstant", 0, id], 8647);
    let ic = (e) => (t, i) => {
        let r = (0, t3.useContext)(ie),
          n = (0, t3.useContext)(ih),
          s = () =>
            (function (
              { scrapeMotionValuesFromProps: e, createRenderState: t },
              i,
              r,
              n
            ) {
              return {
                latestValues: (function (e, t, i, r) {
                  let n = {},
                    s = r(e, {});
                  for (let e in s) n[e] = iu(s[e]);
                  let { initial: o, animate: a } = e,
                    l = tc(e),
                    u = tp(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === o && (o = t.initial),
                    void 0 === a && (a = t.animate));
                  let h = !!i && !1 === i.initial,
                    d = (h = h || !1 === o) ? a : o;
                  if (d && "boolean" != typeof d && !tl(d)) {
                    let t = Array.isArray(d) ? d : [d];
                    for (let i = 0; i < t.length; i++) {
                      let r = tv(e, t[i]);
                      if (r) {
                        let { transitionEnd: e, transition: t, ...i } = r;
                        for (let e in i) {
                          let t = i[e];
                          if (Array.isArray(t)) {
                            let e = h ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (n[e] = t);
                        }
                        for (let t in e) n[t] = e[t];
                      }
                    }
                  }
                  return n;
                })(i, r, n, e),
                renderState: t(),
              };
            })(e, t, r, n);
        return i ? s() : id(s);
      },
      ip = ic({ scrapeMotionValuesFromProps: tF, createRenderState: ii }),
      im = ic({ scrapeMotionValuesFromProps: t_, createRenderState: is }),
      ig = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      },
      iy = !1;
    function iv() {
      return (
        !(function () {
          if (iy) return;
          let e = {};
          for (let t in ig)
            e[t] = { isEnabled: (e) => ig[t].some((t) => !!e[t]) };
          (tb = e), (iy = !0);
        })(),
        tb
      );
    }
    let ix = Symbol.for("motionComponentSymbol"),
      ib = "data-" + tS("framerAppearId"),
      iw = (0, t3.createContext)({});
    function ik(e) {
      return (
        e &&
        "object" == typeof e &&
        Object.prototype.hasOwnProperty.call(e, "current")
      );
    }
    let iS = "u" > typeof window ? t3.useLayoutEffect : t3.useEffect;
    function iP(e, { forwardMotionProps: t = !1, type: i } = {}, r, n) {
      r &&
        (function (e) {
          let t = iv();
          for (let i in e) t[i] = { ...t[i], ...e[i] };
          tb = t;
        })(r);
      let s = i ? "svg" === i : t4(e),
        o = s ? im : ip;
      function a(i, r) {
        var a;
        let l,
          u,
          h,
          d = {
            ...(0, t3.useContext)(t7),
            ...i,
            layoutId: (function ({ layoutId: e }) {
              let t = (0, t3.useContext)(t8).id;
              return t && void 0 !== e ? t + "-" + e : e;
            })(i),
          },
          { isStatic: c } = d,
          p = (function (e) {
            let { initial: t, animate: i } = (function (e, t) {
              if (tc(e)) {
                let { initial: t, animate: i } = e;
                return {
                  initial: !1 === t || tu(t) ? t : void 0,
                  animate: tu(i) ? i : void 0,
                };
              }
              return !1 !== e.inherit ? t : {};
            })(e, (0, t3.useContext)(ie));
            return (0, t3.useMemo)(
              () => ({ initial: t, animate: i }),
              [it(t), it(i)]
            );
          })(i),
          m = o(i, c);
        if (!c && "u" > typeof window) {
          (0, t3.useContext)(t9).strict;
          let t = (function (e) {
            let { drag: t, layout: i } = iv();
            if (!t && !i) return {};
            let r = { ...t, ...i };
            return {
              MeasureLayout:
                t?.isEnabled(e) || i?.isEnabled(e) ? r.MeasureLayout : void 0,
              ProjectionNode: r.ProjectionNode,
            };
          })(d);
          (l = t.MeasureLayout),
            (p.visualElement = (function (e, t, i, r, n, s) {
              let { visualElement: o } = (0, t3.useContext)(ie),
                a = (0, t3.useContext)(t9),
                l = (0, t3.useContext)(ih),
                u = (0, t3.useContext)(t7),
                h = u.reducedMotion,
                d = u.skipAnimations,
                c = (0, t3.useRef)(null),
                p = (0, t3.useRef)(!1);
              (r = r || a.renderer),
                !c.current &&
                  r &&
                  ((c.current = r(e, {
                    visualState: t,
                    parent: o,
                    props: i,
                    presenceContext: l,
                    blockInitialAnimation: !!l && !1 === l.initial,
                    reducedMotionConfig: h,
                    skipAnimations: d,
                    isSVG: s,
                  })),
                  p.current &&
                    c.current &&
                    (c.current.manuallyAnimateOnMount = !0));
              let m = c.current,
                f = (0, t3.useContext)(iw);
              m &&
                !m.projection &&
                n &&
                ("html" === m.type || "svg" === m.type) &&
                (function (e, t, i, r) {
                  let {
                    layoutId: n,
                    layout: s,
                    drag: o,
                    dragConstraints: a,
                    layoutScroll: l,
                    layoutRoot: u,
                    layoutAnchor: h,
                    layoutCrossfade: d,
                  } = t;
                  (e.projection = new i(
                    e.latestValues,
                    t["data-framer-portal-id"]
                      ? void 0
                      : (function e(t) {
                          if (t)
                            return !1 !== t.options.allowProjection
                              ? t.projection
                              : e(t.parent);
                        })(e.parent)
                  )),
                    e.projection.setOptions({
                      layoutId: n,
                      layout: s,
                      alwaysMeasureLayout: !!o || (a && ik(a)),
                      visualElement: e,
                      animationType: "string" == typeof s ? s : "both",
                      initialPromotionConfig: r,
                      crossfade: d,
                      layoutScroll: l,
                      layoutRoot: u,
                      layoutAnchor: h,
                    });
                })(c.current, i, n, f);
              let g = (0, t3.useRef)(!1);
              (0, t3.useInsertionEffect)(() => {
                m && g.current && m.update(i, l);
              });
              let y = i[ib],
                v = (0, t3.useRef)(
                  !!y &&
                    "u" > typeof window &&
                    !window.MotionHandoffIsComplete?.(y) &&
                    window.MotionHasOptimisedAnimation?.(y)
                );
              return (
                iS(() => {
                  (p.current = !0),
                    m &&
                      ((g.current = !0),
                      (window.MotionIsMounted = !0),
                      m.updateFeatures(),
                      m.scheduleRenderMicrotask(),
                      v.current &&
                        m.animationState &&
                        m.animationState.animateChanges());
                }),
                (0, t3.useEffect)(() => {
                  m &&
                    (!v.current &&
                      m.animationState &&
                      m.animationState.animateChanges(),
                    v.current &&
                      (queueMicrotask(() => {
                        window.MotionHandoffMarkAsComplete?.(y);
                      }),
                      (v.current = !1)),
                    (m.enteringChildren = void 0));
                }),
                m
              );
            })(e, m, d, n, t.ProjectionNode, s));
        }
        return (0, t6.jsxs)(ie.Provider, {
          value: p,
          children: [
            l && p.visualElement
              ? (0, t6.jsx)(l, { visualElement: p.visualElement, ...d })
              : null,
            (function (e, t, i, { latestValues: r }, n, s = !1, o) {
              let a = (
                  o ?? t4(e)
                    ? function (e, t, i, r) {
                        let n = (0, t3.useMemo)(() => {
                          let i = is();
                          return (
                            tR(i, t, tD(r), e.transformTemplate, e.style),
                            { ...i.attrs, style: { ...i.style } }
                          );
                        }, [t]);
                        if (e.style) {
                          let t = {};
                          ir(t, e.style, e), (n.style = { ...t, ...n.style });
                        }
                        return n;
                      }
                    : function (e, t) {
                        let i,
                          r,
                          n = {},
                          s =
                            ((i = e.style || {}),
                            ir((r = {}), i, e),
                            Object.assign(
                              r,
                              (function ({ transformTemplate: e }, t) {
                                return (0, t3.useMemo)(() => {
                                  let i = ii();
                                  return (
                                    tj(i, t, e),
                                    Object.assign({}, i.vars, i.style)
                                  );
                                }, [t]);
                              })(e, t)
                            ),
                            r);
                        return (
                          e.drag &&
                            !1 !== e.dragListener &&
                            ((n.draggable = !1),
                            (s.userSelect =
                              s.WebkitUserSelect =
                              s.WebkitTouchCallout =
                                "none"),
                            (s.touchAction =
                              !0 === e.drag
                                ? "none"
                                : `pan-${"x" === e.drag ? "y" : "x"}`)),
                          void 0 === e.tabIndex &&
                            (e.onTap || e.onTapStart || e.whileTap) &&
                            (n.tabIndex = 0),
                          (n.style = s),
                          n
                        );
                      }
                )(t, r, n, e),
                l = (function (e, t, i) {
                  let r = {};
                  for (let n in e)
                    ("values" !== n || "object" != typeof e.values) &&
                      !G(e[n]) &&
                      (il(n) ||
                        (!0 === i && ia(n)) ||
                        (!t && !ia(n)) ||
                        (e.draggable && n.startsWith("onDrag"))) &&
                      (r[n] = e[n]);
                  return r;
                })(t, "string" == typeof e, s),
                u = e !== t3.Fragment ? { ...l, ...a, ref: i } : {},
                { children: h } = t,
                d = (0, t3.useMemo)(() => (G(h) ? h.get() : h), [h]);
              return (0, t3.createElement)(e, { ...u, children: d });
            })(
              e,
              i,
              ((a = p.visualElement),
              (u = (0, t3.useRef)(r)),
              (0, t3.useInsertionEffect)(() => {
                u.current = r;
              }),
              (h = (0, t3.useRef)(null)),
              (0, t3.useCallback)(
                (e) => {
                  e && m.onMount?.(e), a && (e ? a.mount(e) : a.unmount());
                  let t = u.current;
                  if ("function" == typeof t)
                    if (e) {
                      let i = t(e);
                      "function" == typeof i && (h.current = i);
                    } else h.current ? (h.current(), (h.current = null)) : t(e);
                  else t && (t.current = e);
                },
                [a]
              )),
              m,
              c,
              t,
              s
            ),
          ],
        });
      }
      a.displayName = `motion.${
        "string" == typeof e ? e : `create(${e.displayName ?? e.name ?? ""})`
      }`;
      let l = (0, t3.forwardRef)(a);
      return (l[ix] = e), l;
    }
    e.s(["useIsomorphicLayoutEffect", 0, iS], 65493);
    class iT {
      constructor(e) {
        (this.isMounted = !1), (this.node = e);
      }
      update() {}
    }
    function iE(e, t, i) {
      let r = e.getProps();
      return tv(r, t, void 0 !== i ? i : r.custom, e);
    }
    function ij(e, t) {
      if (e?.inherit && t) {
        let { inherit: i, ...r } = e;
        return { ...t, ...r };
      }
      return e;
    }
    function iC(e, t) {
      let i = e?.[t] ?? e?.default ?? e;
      return i !== e ? ij(i, e) : i;
    }
    let iM = (e) => Array.isArray(e);
    function iA(e, t) {
      let i = e.getValue("willChange");
      if (G(i) && i.add) return i.add(t);
      if (!i && eP.WillChange) {
        let i = new eP.WillChange("auto");
        e.addValue("willChange", i), i.add(t);
      }
    }
    let iR = (...e) => e.reduce((e, t) => (i) => t(e(i)));
    function iV(e, t, i) {
      return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
        ? e + (t - e) * 6 * i
        : i < 0.5
        ? t
        : i < 2 / 3
        ? e + (t - e) * (2 / 3 - i) * 6
        : e;
    }
    function iD(e, t) {
      return (i) => (i > 0 ? t : e);
    }
    let iL = (e, t, i) => {
        let r = e * e,
          n = i * (t * t - r) + r;
        return n < 0 ? 0 : Math.sqrt(n);
      },
      iO = [y, g, T];
    function iI(e) {
      let t = iO.find((t) => t.test(e));
      if (
        (ee(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`,
          "color-not-animatable"
        ),
        !t)
      )
        return !1;
      let i = t.parse(e);
      return (
        t === T &&
          (i = (function ({ hue: e, saturation: t, lightness: i, alpha: r }) {
            (e /= 360), (i /= 100);
            let n = 0,
              s = 0,
              o = 0;
            if ((t /= 100)) {
              let r = i < 0.5 ? i * (1 + t) : i + t - i * t,
                a = 2 * i - r;
              (n = iV(a, r, e + 1 / 3)),
                (s = iV(a, r, e)),
                (o = iV(a, r, e - 1 / 3));
            } else n = s = o = i;
            return {
              red: Math.round(255 * n),
              green: Math.round(255 * s),
              blue: Math.round(255 * o),
              alpha: r,
            };
          })(i)),
        i
      );
    }
    let iB = (e, t) => {
        let i = iI(e),
          r = iI(t);
        if (!i || !r) return iD(e, t);
        let n = { ...i };
        return (e) => (
          (n.red = iL(i.red, r.red, e)),
          (n.green = iL(i.green, r.green, e)),
          (n.blue = iL(i.blue, r.blue, e)),
          (n.alpha = tB(i.alpha, r.alpha, e)),
          g.transform(n)
        );
      },
      iN = new Set(["none", "hidden"]);
    function iz(e, t) {
      return (i) => tB(e, t, i);
    }
    function iF(e) {
      return "number" == typeof e
        ? iz
        : "string" == typeof e
        ? es(e)
          ? iD
          : E.test(e)
          ? iB
          : iU
        : Array.isArray(e)
        ? i_
        : "object" == typeof e
        ? E.test(e)
          ? iB
          : i$
        : iD;
    }
    function i_(e, t) {
      let i = [...e],
        r = i.length,
        n = e.map((e, i) => iF(e)(e, t[i]));
      return (e) => {
        for (let t = 0; t < r; t++) i[t] = n[t](e);
        return i;
      };
    }
    function i$(e, t) {
      let i = { ...e, ...t },
        r = {};
      for (let n in i)
        void 0 !== e[n] && void 0 !== t[n] && (r[n] = iF(e[n])(e[n], t[n]));
      return (e) => {
        for (let t in r) i[t] = r[t](e);
        return i;
      };
    }
    let iU = (e, t) => {
      let i = D.createTransformer(t),
        r = R(e),
        n = R(t);
      if (
        !(
          r.indexes.var.length === n.indexes.var.length &&
          r.indexes.color.length === n.indexes.color.length &&
          r.indexes.number.length >= n.indexes.number.length
        )
      )
        return (
          ee(
            !0,
            `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different"
          ),
          iD(e, t)
        );
      if ((iN.has(e) && !n.values.length) || (iN.has(t) && !r.values.length))
        return iN.has(e) ? (i) => (i <= 0 ? e : t) : (i) => (i >= 1 ? t : e);
      return iR(
        i_(
          (function (e, t) {
            let i = [],
              r = { color: 0, var: 0, number: 0 };
            for (let n = 0; n < t.values.length; n++) {
              let s = t.types[n],
                o = e.indexes[s][r[s]],
                a = e.values[o] ?? 0;
              (i[n] = a), r[s]++;
            }
            return i;
          })(r, n),
          n.values
        ),
        i
      );
    };
    function iW(e, t, i) {
      return "number" == typeof e &&
        "number" == typeof t &&
        "number" == typeof i
        ? tB(e, t, i)
        : iF(e)(e, t);
    }
    let iH = (e) => {
      let t = ({ timestamp: t }) => e(t);
      return {
        start: (e = !0) => ej.update(t, e),
        stop: () => eC(t),
        now: () => (eM.isProcessing ? eM.timestamp : tt.now()),
      };
    };
    function iX(e) {
      let t = 0,
        i = e.next(t);
      for (; !i.done && t < 2e4; ) (t += 50), (i = e.next(t));
      return t >= 2e4 ? 1 / 0 : t;
    }
    let iG = 0.01,
      iY = 2,
      iK = 0.005,
      iq = 0.5;
    function iZ(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    let iJ = ["duration", "bounce"],
      iQ = ["stiffness", "damping", "mass"];
    function i0(e, t) {
      return t.some((t) => void 0 !== e[t]);
    }
    function i1(e = 0.3, t = 0.3) {
      let i,
        r,
        n,
        s,
        a,
        l,
        u =
          "object" != typeof e
            ? { visualDuration: e, keyframes: [0, 1], bounce: t }
            : e,
        { restSpeed: h, restDelta: d } = u,
        c = u.keyframes[0],
        p = u.keyframes[u.keyframes.length - 1],
        m = { done: !1, value: c },
        {
          stiffness: f,
          damping: g,
          mass: y,
          duration: v,
          velocity: x,
          isResolvedFromDuration: b,
        } = (function (e) {
          let t = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...e,
          };
          if (!i0(e, iQ) && i0(e, iJ))
            if (((t.velocity = 0), e.visualDuration)) {
              let i = (2 * Math.PI) / (1.2 * e.visualDuration),
                r = i * i,
                n = 2 * o(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
              t = { ...t, mass: 1, stiffness: r, damping: n };
            } else {
              let i = (function ({
                duration: e = 800,
                bounce: t = 0.3,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let n, s;
                ee(
                  e <= e$(10),
                  "Spring duration must be 10 seconds or less",
                  "spring-duration-limit"
                );
                let a = 1 - t;
                (a = o(0.05, 1, a)),
                  (e = o(0.01, 10, e / 1e3)),
                  a < 1
                    ? ((n = (t) => {
                        let r = t * a,
                          n = r * e;
                        return 0.001 - ((r - i) / iZ(t, a)) * Math.exp(-n);
                      }),
                      (s = (t) => {
                        let r = t * a * e,
                          s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          o = Math.exp(-r),
                          l = iZ(Math.pow(t, 2), a);
                        return (
                          ((r * i + i - s) * o * (-n(t) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((n = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - i) * e + 1)),
                      (s = (t) => e * e * (i - t) * Math.exp(-t * e)));
                let l = (function (e, t, i) {
                  let r = i;
                  for (let i = 1; i < 12; i++) r -= e(r) / t(r);
                  return r;
                })(n, s, 5 / e);
                if (((e = e$(e)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(l, 2) * r;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(r * t),
                    duration: e,
                  };
                }
              })({ ...e, velocity: 0 });
              (t = { ...t, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
          return t;
        })({ ...u, velocity: -((u.velocity || 0) / 1e3) }),
        w = x || 0,
        k = g / (2 * Math.sqrt(f * y)),
        S = p - c,
        P = Math.sqrt(f / y) / 1e3,
        T = 5 > Math.abs(S);
      if ((h || (h = T ? iG : iY), d || (d = T ? iK : iq), k < 1))
        (n = iZ(P, k)),
          (s = (w + k * P * S) / n),
          (i = (e) =>
            p -
            Math.exp(-k * P * e) * (s * Math.sin(n * e) + S * Math.cos(n * e))),
          (a = k * P * s + S * n),
          (l = k * P * S - s * n),
          (r = (e) =>
            Math.exp(-k * P * e) * (a * Math.sin(n * e) + l * Math.cos(n * e)));
      else if (1 === k) {
        i = (e) => p - Math.exp(-P * e) * (S + (w + P * S) * e);
        let e = w + P * S;
        r = (t) => Math.exp(-P * t) * (P * e * t - w);
      } else {
        let e = P * Math.sqrt(k * k - 1);
        i = (t) => {
          let i = Math.exp(-k * P * t),
            r = Math.min(e * t, 300);
          return (
            p -
            (i * ((w + k * P * S) * Math.sinh(r) + e * S * Math.cosh(r))) / e
          );
        };
        let t = (w + k * P * S) / e,
          n = k * P * t - S * e,
          s = k * P * S - t * e;
        r = (t) => {
          let i = Math.exp(-k * P * t),
            r = Math.min(e * t, 300);
          return i * (n * Math.sinh(r) + s * Math.cosh(r));
        };
      }
      let E = {
        calculatedDuration: (b && v) || null,
        velocity: (e) => e$(r(e)),
        next: (e) => {
          if (!b && k < 1) {
            let t = Math.exp(-k * P * e),
              i = Math.sin(n * e),
              r = Math.cos(n * e),
              o = p - t * (s * i + S * r);
            return (
              (m.done =
                Math.abs(e$(t * (a * i + l * r))) <= h && Math.abs(p - o) <= d),
              (m.value = m.done ? p : o),
              m
            );
          }
          let t = i(e);
          return (
            b
              ? (m.done = e >= v)
              : (m.done = Math.abs(e$(r(e))) <= h && Math.abs(p - t) <= d),
            (m.value = m.done ? p : t),
            m
          );
        },
        toString: () => {
          let e = Math.min(iX(E), 2e4),
            t = e3((t) => E.next(e * t).value, e, 30);
          return e + "ms " + t;
        },
        toTransition: () => {},
      };
      return E;
    }
    function i2(e, t, i) {
      let r = Math.max(t - 5, 0);
      return ti(i - e(r), t - r);
    }
    function i3({
      keyframes: e,
      velocity: t = 0,
      power: i = 0.8,
      timeConstant: r = 325,
      bounceDamping: n = 10,
      bounceStiffness: s = 500,
      modifyTarget: o,
      min: a,
      max: l,
      restDelta: u = 0.5,
      restSpeed: h,
    }) {
      let d,
        c,
        p = e[0],
        m = { done: !1, value: p },
        f = i * t,
        g = p + f,
        y = void 0 === o ? g : o(g);
      y !== g && (f = y - p);
      let v = (e) => -f * Math.exp(-e / r),
        x = (e) => y + v(e),
        b = (e) => {
          let t = v(e),
            i = x(e);
          (m.done = Math.abs(t) <= u), (m.value = m.done ? y : i);
        },
        w = (e) => {
          let t;
          if (
            ((t = m.value), (void 0 !== a && t < a) || (void 0 !== l && t > l))
          ) {
            var i;
            (d = e),
              (c = i1({
                keyframes: [
                  m.value,
                  ((i = m.value),
                  void 0 === a
                    ? l
                    : void 0 === l || Math.abs(a - i) < Math.abs(l - i)
                    ? a
                    : l),
                ],
                velocity: i2(x, e, m.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              }));
          }
        };
      return (
        w(0),
        {
          calculatedDuration: null,
          next: (e) => {
            let t = !1;
            return (c || void 0 !== d || ((t = !0), b(e), w(e)),
            void 0 !== d && e >= d)
              ? c.next(e - d)
              : (t || b(e), m);
          },
        }
      );
    }
    i1.applyToOptions = (e) => {
      let t = (function (e, t = 100, i) {
        let r = i({ ...e, keyframes: [0, t] }),
          n = Math.min(iX(r), 2e4);
        return {
          type: "keyframes",
          ease: (e) => r.next(n * e).value / t,
          duration: n / 1e3,
        };
      })(e, 100, i1);
      return (
        (e.ease = t.ease),
        (e.duration = e$(t.duration)),
        (e.type = "keyframes"),
        e
      );
    };
    let i5 = (e, t, i) =>
      (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
    function i4(e, t, i, r) {
      return e === t && i === r
        ? eS
        : (n) =>
            0 === n || 1 === n
              ? n
              : i5(
                  (function (e, t, i, r, n) {
                    let s,
                      o,
                      a = 0;
                    do
                      (s = i5((o = t + (i - t) / 2), r, n) - e) > 0
                        ? (i = o)
                        : (t = o);
                    while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o;
                  })(n, 0, 1, e, i),
                  t,
                  r
                );
    }
    let i6 = i4(0.42, 0, 1, 1),
      i8 = i4(0, 0, 0.58, 1),
      i9 = i4(0.42, 0, 0.58, 1),
      i7 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
      re = (e) => (t) => 1 - e(1 - t),
      rt = i4(0.33, 1.53, 0.69, 0.99),
      ri = re(rt),
      rr = i7(ri),
      rn = (e) =>
        e >= 1
          ? 1
          : (e *= 2) < 1
          ? 0.5 * ri(e)
          : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
      rs = (e) => 1 - Math.sin(Math.acos(e)),
      ro = re(rs),
      ra = i7(rs),
      rl = {
        linear: eS,
        easeIn: i6,
        easeInOut: i9,
        easeOut: i8,
        circIn: rs,
        circInOut: ra,
        circOut: ro,
        backIn: ri,
        backInOut: rr,
        backOut: rt,
        anticipate: rn,
      },
      ru = (e) => {
        if (e1(e)) {
          et(
            4 === e.length,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length"
          );
          let [t, i, r, n] = e;
          return i4(t, i, r, n);
        }
        return "string" == typeof e
          ? (et(
              void 0 !== rl[e],
              `Invalid easing type '${e}'`,
              "invalid-easing-type"
            ),
            rl[e])
          : e;
      },
      rh = (e, t, i) => {
        let r = t - e;
        return r ? (i - e) / r : 1;
      };
    function rd({
      duration: e = 300,
      keyframes: t,
      times: i,
      ease: r = "easeInOut",
    }) {
      var n;
      let s,
        a = Array.isArray(r) && "number" != typeof r[0] ? r.map(ru) : ru(r),
        l = { done: !1, value: t[0] },
        u = (function (e, t, { clamp: i = !0, ease: r, mixer: n } = {}) {
          let s = e.length;
          if (
            (et(
              s === t.length,
              "Both input and output ranges must be the same length",
              "range-length"
            ),
            1 === s)
          )
            return () => t[0];
          if (2 === s && t[0] === t[1]) return () => t[1];
          let a = e[0] === e[1];
          e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
          let l = (function (e, t, i) {
              let r = [],
                n = i || eP.mix || iW,
                s = e.length - 1;
              for (let i = 0; i < s; i++) {
                let s = n(e[i], e[i + 1]);
                t && (s = iR(Array.isArray(t) ? t[i] || eS : t, s)), r.push(s);
              }
              return r;
            })(t, r, n),
            u = l.length,
            h = (i) => {
              if (a && i < e[0]) return t[0];
              let r = 0;
              if (u > 1) for (; r < e.length - 2 && !(i < e[r + 1]); r++);
              let n = rh(e[r], e[r + 1], i);
              return l[r](n);
            };
          return i ? (t) => h(o(e[0], e[s - 1], t)) : h;
        })(
          ((n =
            i && i.length === t.length
              ? i
              : (!(function (e, t) {
                  let i = e[e.length - 1];
                  for (let r = 1; r <= t; r++) {
                    let n = rh(0, t, r);
                    e.push(tB(i, 1, n));
                  }
                })((s = [0]), t.length - 1),
                s)),
          n.map((t) => t * e)),
          t,
          {
            ease: Array.isArray(a)
              ? a
              : t.map(() => a || i9).splice(0, t.length - 1),
          }
        );
      return {
        calculatedDuration: e,
        next: (t) => ((l.value = u(t)), (l.done = t >= e), l),
      };
    }
    let rc = { decay: i3, inertia: i3, tween: rd, keyframes: rd, spring: i1 };
    function rp(e) {
      "string" == typeof e.type && (e.type = rc[e.type]);
    }
    let rm = (e) => e / 100;
    class rf extends eQ {
      constructor(e) {
        super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.delayState = { done: !1, value: void 0 }),
          (this.stop = () => {
            let { motionValue: e } = this.options;
            e && e.updatedAt !== tt.now() && this.tick(tt.now()),
              (this.isStopped = !0),
              "idle" !== this.state &&
                (this.teardown(), this.options.onStop?.());
          }),
          e0.mainThread++,
          (this.options = e),
          this.initAnimation(),
          this.play(),
          !1 === e.autoplay && this.pause();
      }
      initAnimation() {
        let { options: e } = this;
        rp(e);
        let {
            type: t = rd,
            repeat: i = 0,
            repeatDelay: r = 0,
            repeatType: n,
            velocity: s = 0,
          } = e,
          { keyframes: o } = e,
          a = t || rd;
        a !== rd &&
          "number" != typeof o[0] &&
          ((this.mixKeyframes = iR(rm, iW(o[0], o[1]))), (o = [0, 100]));
        let l = a({ ...e, keyframes: o });
        "mirror" === n &&
          (this.mirroredGenerator = a({
            ...e,
            keyframes: [...o].reverse(),
            velocity: -s,
          })),
          null === l.calculatedDuration && (l.calculatedDuration = iX(l));
        let { calculatedDuration: u } = l;
        (this.calculatedDuration = u),
          (this.resolvedDuration = u + r),
          (this.totalDuration = this.resolvedDuration * (i + 1) - r),
          (this.generator = l);
      }
      updateTime(e) {
        let t = Math.round(e - this.startTime) * this.playbackSpeed;
        null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = t);
      }
      tick(e, t = !1) {
        let i,
          {
            generator: r,
            totalDuration: n,
            mixKeyframes: s,
            mirroredGenerator: a,
            resolvedDuration: l,
            calculatedDuration: u,
          } = this;
        if (null === this.startTime) return r.next(0);
        let {
          delay: h = 0,
          keyframes: d,
          repeat: c,
          repeatType: p,
          repeatDelay: m,
          type: f,
          onUpdate: g,
          finalKeyframe: y,
        } = this.options;
        this.speed > 0
          ? (this.startTime = Math.min(this.startTime, e))
          : this.speed < 0 &&
            (this.startTime = Math.min(e - n / this.speed, this.startTime)),
          t ? (this.currentTime = e) : this.updateTime(e);
        let v = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
          x = this.playbackSpeed >= 0 ? v < 0 : v > n;
        (this.currentTime = Math.max(v, 0)),
          "finished" === this.state &&
            null === this.holdTime &&
            (this.currentTime = n);
        let b = this.currentTime,
          w = r;
        if (c) {
          let e = Math.min(this.currentTime, n) / l,
            t = Math.floor(e),
            i = e % 1;
          !i && e >= 1 && (i = 1),
            1 === i && t--,
            (t = Math.min(t, c + 1)) % 2 &&
              ("reverse" === p
                ? ((i = 1 - i), m && (i -= m / l))
                : "mirror" === p && (w = a)),
            (b = o(0, 1, i) * l);
        }
        x
          ? ((this.delayState.value = d[0]), (i = this.delayState))
          : (i = w.next(b)),
          s && !x && (i.value = s(i.value));
        let { done: k } = i;
        x ||
          null === u ||
          (k =
            this.playbackSpeed >= 0
              ? this.currentTime >= n
              : this.currentTime <= 0);
        let S =
          null === this.holdTime &&
          ("finished" === this.state || ("running" === this.state && k));
        return (
          S && f !== i3 && (i.value = eJ(d, this.options, y, this.speed)),
          g && g(i.value),
          S && this.finish(),
          i
        );
      }
      then(e, t) {
        return this.finished.then(e, t);
      }
      get duration() {
        return this.calculatedDuration / 1e3;
      }
      get iterationDuration() {
        let { delay: e = 0 } = this.options || {};
        return this.duration + e / 1e3;
      }
      get time() {
        return this.currentTime / 1e3;
      }
      set time(e) {
        (e = e$(e)),
          (this.currentTime = e),
          null === this.startTime ||
          null !== this.holdTime ||
          0 === this.playbackSpeed
            ? (this.holdTime = e)
            : this.driver &&
              (this.startTime = this.driver.now() - e / this.playbackSpeed),
          this.driver
            ? this.driver.start(!1)
            : ((this.startTime = 0),
              (this.state = "paused"),
              (this.holdTime = e),
              this.tick(e));
      }
      getGeneratorVelocity() {
        let e = this.currentTime;
        if (e <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(e);
        let t = this.generator.next(e).value;
        return i2((e) => this.generator.next(e).value, e, t);
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(e) {
        let t = this.playbackSpeed !== e;
        t && this.driver && this.updateTime(tt.now()),
          (this.playbackSpeed = e),
          t && this.driver && (this.time = this.currentTime / 1e3);
      }
      play() {
        if (this.isStopped) return;
        let { driver: e = iH, startTime: t } = this.options;
        this.driver || (this.driver = e((e) => this.tick(e))),
          this.options.onPlay?.();
        let i = this.driver.now();
        "finished" === this.state
          ? (this.updateFinished(), (this.startTime = i))
          : null !== this.holdTime
          ? (this.startTime = i - this.holdTime)
          : this.startTime || (this.startTime = t ?? i),
          "finished" === this.state &&
            this.speed < 0 &&
            (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start();
      }
      pause() {
        (this.state = "paused"),
          this.updateTime(tt.now()),
          (this.holdTime = this.currentTime);
      }
      complete() {
        "running" !== this.state && this.play(),
          (this.state = "finished"),
          (this.holdTime = null);
      }
      finish() {
        this.notifyFinished(),
          this.teardown(),
          (this.state = "finished"),
          this.options.onComplete?.();
      }
      cancel() {
        (this.holdTime = null),
          (this.startTime = 0),
          this.tick(0),
          this.teardown(),
          this.options.onCancel?.();
      }
      teardown() {
        (this.state = "idle"),
          this.stopDriver(),
          (this.startTime = this.holdTime = null),
          e0.mainThread--;
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(e) {
        return (this.startTime = 0), this.tick(e, !0);
      }
      attachTimeline(e) {
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"),
            (this.options.ease = "linear"),
            this.initAnimation()),
          this.driver?.stop(),
          e.observe(this)
        );
      }
    }
    let rg = { anticipate: rn, backInOut: rr, circInOut: ra };
    class ry extends e8 {
      constructor(e) {
        !(function (e) {
          "string" == typeof e.ease && e.ease in rg && (e.ease = rg[e.ease]);
        })(e),
          rp(e),
          super(e),
          void 0 !== e.startTime &&
            !1 !== e.autoplay &&
            (this.startTime = e.startTime),
          (this.options = e);
      }
      updateMotionValue(e) {
        let {
          motionValue: t,
          onUpdate: i,
          onComplete: r,
          element: n,
          ...s
        } = this.options;
        if (!t) return;
        if (void 0 !== e) return void t.set(e);
        let a = new rf({ ...s, autoplay: !1 }),
          l = Math.max(10, tt.now() - this.startTime),
          u = o(0, 10, l - 10),
          h = a.sample(l).value,
          { name: d } = this.options;
        n && d && eX(n, d, h),
          t.setWithVelocity(a.sample(Math.max(0, l - u)).value, h, u),
          a.stop();
      }
    }
    let rv = (e, t) =>
      "zIndex" !== t &&
      !!(
        "number" == typeof e ||
        Array.isArray(e) ||
        ("string" == typeof e &&
          (D.test(e) || "0" === e) &&
          !e.startsWith("url("))
      );
    function rx(e) {
      (e.duration = 0), (e.type = "keyframes");
    }
    let rb = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
      rw = new Set([
        "color",
        "backgroundColor",
        "outlineColor",
        "fill",
        "stroke",
        "borderColor",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
      ]),
      rk = eG(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class rS extends eQ {
      constructor({
        autoplay: e = !0,
        delay: t = 0,
        type: i = "keyframes",
        repeat: r = 0,
        repeatDelay: n = 0,
        repeatType: s = "loop",
        keyframes: o,
        name: a,
        motionValue: l,
        element: u,
        ...h
      }) {
        super(),
          (this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()),
              this.keyframeResolver?.cancel();
          }),
          (this.createdAt = tt.now());
        const d = {
            autoplay: e,
            delay: t,
            type: i,
            repeat: r,
            repeatDelay: n,
            repeatType: s,
            name: a,
            motionValue: l,
            element: u,
            ...h,
          },
          c = u?.KeyframeResolver || eB;
        (this.keyframeResolver = new c(
          o,
          (e, t, i) => this.onKeyframesResolved(e, t, d, !i),
          a,
          l,
          u
        )),
          this.keyframeResolver?.scheduleResolve();
      }
      onKeyframesResolved(e, t, i, r) {
        let n;
        this.keyframeResolver = void 0;
        let {
          name: s,
          type: o,
          velocity: a,
          delay: l,
          isHandoff: u,
          onUpdate: h,
        } = i;
        this.resolvedAt = tt.now();
        let d = !0;
        !(function (e, t, i, r) {
          let n = e[0];
          if (null === n) return !1;
          if ("display" === t || "visibility" === t) return !0;
          let s = e[e.length - 1],
            o = rv(n, t),
            a = rv(s, t);
          return (
            ee(
              o === a,
              `You are trying to animate ${t} from "${n}" to "${s}". "${
                o ? s : n
              }" is not an animatable value.`,
              "value-not-animatable"
            ),
            !!o &&
              !!a &&
              ((function (e) {
                let t = e[0];
                if (1 === e.length) return !0;
                for (let i = 0; i < e.length; i++) if (e[i] !== t) return !0;
              })(e) ||
                (("spring" === i || e6(i)) && r))
          );
        })(e, s, o, a) &&
          ((d = !1),
          (eP.instantAnimations || !l) && h?.(eJ(e, i, t)),
          (e[0] = e[e.length - 1]),
          rx(i),
          (i.repeat = 0));
        let c = {
            startTime: r
              ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                ? this.resolvedAt
                : this.createdAt
              : void 0,
            finalKeyframe: t,
            ...i,
            keyframes: e,
          },
          p =
            d &&
            !u &&
            (function (e) {
              let {
                motionValue: t,
                name: i,
                repeatDelay: r,
                repeatType: n,
                damping: s,
                type: o,
                keyframes: a,
              } = e;
              if (!(t?.owner?.current instanceof HTMLElement)) return !1;
              let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
              return (
                rk() &&
                i &&
                (e9.has(i) ||
                  (rw.has(i) &&
                    (function (e) {
                      for (let t = 0; t < e.length; t++)
                        if ("string" == typeof e[t] && rb.test(e[t])) return !0;
                      return !1;
                    })(a))) &&
                ("transform" !== i || !u) &&
                !l &&
                !r &&
                "mirror" !== n &&
                0 !== s &&
                "inertia" !== o
              );
            })(c),
          m = c.motionValue?.owner?.current;
        if (p)
          try {
            n = new ry({ ...c, element: m });
          } catch {
            n = new rf(c);
          }
        else n = new rf(c);
        n.finished
          .then(() => {
            this.notifyFinished();
          })
          .catch(eS),
          this.pendingTimeline &&
            ((this.stopTimeline = n.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
          (this._animation = n);
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(e, t) {
        return this.finished.finally(e).then(() => {});
      }
      get animation() {
        return (
          this._animation ||
            (this.keyframeResolver?.resume(), (eL = !0), eI(), eO(), (eL = !1)),
          this._animation
        );
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(e) {
        this.animation.time = e;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(e) {
        this.animation.speed = e;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(e) {
        return (
          this._animation
            ? (this.stopTimeline = this.animation.attachTimeline(e))
            : (this.pendingTimeline = e),
          () => this.stop()
        );
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        this._animation && this.animation.cancel(),
          this.keyframeResolver?.cancel();
      }
    }
    let rP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      rT = { type: "keyframes", duration: 0.8 },
      rE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      rj = new Set([
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ]),
      rC =
        (e, t, i, r = {}, n, o) =>
        (a) => {
          let l = iC(r, e) || {},
            u = l.delay || r.delay || 0,
            { elapsed: h = 0 } = r;
          h -= e$(u);
          let d = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...l,
            delay: -h,
            onUpdate: (e) => {
              t.set(e), l.onUpdate && l.onUpdate(e);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete();
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : n,
          };
          !(function (e) {
            for (let t in e) if (!rj.has(t)) return !0;
            return !1;
          })(l) &&
            Object.assign(
              d,
              ((e, { keyframes: t }) =>
                t.length > 2
                  ? rT
                  : s.has(e)
                  ? e.startsWith("scale")
                    ? {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10,
                      }
                    : rP
                  : rE)(e, d)
            ),
            d.duration && (d.duration = e$(d.duration)),
            d.repeatDelay && (d.repeatDelay = e$(d.repeatDelay)),
            void 0 !== d.from && (d.keyframes[0] = d.from);
          let c = !1;
          if (
            ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) ||
              (rx(d), 0 === d.delay && (c = !0)),
            (eP.instantAnimations ||
              eP.skipAnimations ||
              n?.shouldSkipAnimations ||
              l.skipAnimations) &&
              ((c = !0), rx(d), (d.delay = 0)),
            (d.allowFlatten = !l.type && !l.ease),
            c && !o && void 0 !== t.get())
          ) {
            let e = eJ(d.keyframes, l);
            if (void 0 !== e)
              return void ej.update(() => {
                d.onUpdate(e), d.onComplete();
              });
          }
          return l.isSync ? new rf(d) : new rS(d);
        };
    function rM(e, t, { delay: i = 0, transitionOverride: r, type: n } = {}) {
      let { transition: s, transitionEnd: o, ...a } = t,
        l = e.getDefaultTransition();
      s = s ? ij(s, l) : l;
      let u = s?.reduceMotion,
        h = s?.skipAnimations;
      r && (s = r);
      let d = [],
        c = n && e.animationState && e.animationState.getState()[n];
      for (let t in a) {
        let r = e.getValue(t, e.latestValues[t] ?? null),
          n = a[t];
        if (
          void 0 === n ||
          (c &&
            (function ({ protectedKeys: e, needsAnimating: t }, i) {
              let r = e.hasOwnProperty(i) && !0 !== t[i];
              return (t[i] = !1), r;
            })(c, t))
        )
          continue;
        let o = { delay: i, ...iC(s || {}, t) };
        h && (o.skipAnimations = !0);
        let l = r.get();
        if (
          void 0 !== l &&
          !r.isAnimating() &&
          !Array.isArray(n) &&
          n === l &&
          !o.velocity
        ) {
          ej.update(() => r.set(n));
          continue;
        }
        let p = !1;
        if (window.MotionHandoffAnimation) {
          let i = e.props[ib];
          if (i) {
            let e = window.MotionHandoffAnimation(i, t, ej);
            null !== e && ((o.startTime = e), (p = !0));
          }
        }
        iA(e, t);
        let m = u ?? e.shouldReduceMotion;
        r.start(rC(t, r, n, m && Y.has(t) ? { type: !1 } : o, e, p));
        let f = r.animation;
        f && d.push(f);
      }
      if (o) {
        let t = () =>
          ej.update(() => {
            o &&
              (function (e, t) {
                let {
                  transitionEnd: i = {},
                  transition: r = {},
                  ...n
                } = iE(e, t) || {};
                for (let t in (n = { ...n, ...i })) {
                  var s;
                  let i = iM((s = n[t])) ? s[s.length - 1] || 0 : s;
                  e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, ts(i));
                }
              })(e, o);
          });
        d.length ? Promise.all(d).then(t) : t();
      }
      return d;
    }
    function rA(e, t, i, r = 0, n = 1) {
      let s = Array.from(e)
          .sort((e, t) => e.sortNodePosition(t))
          .indexOf(t),
        o = e.size,
        a = (o - 1) * r;
      return "function" == typeof i ? i(s, o) : 1 === n ? s * r : a - s * r;
    }
    function rR(e, t, i = {}) {
      let r = iE(e, t, "exit" === i.type ? e.presenceContext?.custom : void 0),
        { transition: n = e.getDefaultTransition() || {} } = r || {};
      i.transitionOverride && (n = i.transitionOverride);
      let s = r ? () => Promise.all(rM(e, r, i)) : () => Promise.resolve(),
        o =
          e.variantChildren && e.variantChildren.size
            ? (r = 0) => {
                let {
                  delayChildren: s = 0,
                  staggerChildren: o,
                  staggerDirection: a,
                } = n;
                return (function (e, t, i = 0, r = 0, n = 0, s = 1, o) {
                  let a = [];
                  for (let l of e.variantChildren)
                    l.notify("AnimationStart", t),
                      a.push(
                        rR(l, t, {
                          ...o,
                          delay:
                            i +
                            ("function" == typeof r ? 0 : r) +
                            rA(e.variantChildren, l, r, n, s),
                        }).then(() => l.notify("AnimationComplete", t))
                      );
                  return Promise.all(a);
                })(e, t, r, s, o, a, i);
              }
            : () => Promise.resolve(),
        { when: a } = n;
      if (!a) return Promise.all([s(), o(i.delay)]);
      {
        let [e, t] = "beforeChildren" === a ? [s, o] : [o, s];
        return e().then(() => t());
      }
    }
    let rV = td.length;
    function rD(e, t) {
      if (!Array.isArray(t)) return !1;
      let i = t.length;
      if (i !== e.length) return !1;
      for (let r = 0; r < i; r++) if (t[r] !== e[r]) return !1;
      return !0;
    }
    let rL = [...th].reverse(),
      rO = th.length;
    function rI(e = !1) {
      return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    function rB() {
      return {
        animate: rI(!0),
        whileInView: rI(),
        whileHover: rI(),
        whileTap: rI(),
        whileDrag: rI(),
        whileFocus: rI(),
        exit: rI(),
      };
    }
    let rN = 0;
    function rz(e) {
      return [e("x"), e("y")];
    }
    function rF(e, t, i, r = { passive: !0 }) {
      return e.addEventListener(t, i, r), () => e.removeEventListener(t, i);
    }
    let r_ = { x: !1, y: !1 };
    function r$(e) {
      return e.max - e.min;
    }
    function rU(e, t, i, r = 0.5) {
      (e.origin = r),
        (e.originPoint = tB(t.min, t.max, e.origin)),
        (e.scale = r$(i) / r$(t)),
        (e.translate = tB(i.min, i.max, e.origin) - e.originPoint),
        ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
          (e.scale = 1),
        ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
          (e.translate = 0);
    }
    function rW(e, t, i, r) {
      rU(e.x, t.x, i.x, r ? r.originX : void 0),
        rU(e.y, t.y, i.y, r ? r.originY : void 0);
    }
    function rH(e, t, i, r = 0) {
      (e.min = (r ? tB(i.min, i.max, r) : i.min) + t.min),
        (e.max = e.min + r$(t));
    }
    function rX(e, t, i, r = 0) {
      let n = r ? tB(i.min, i.max, r) : i.min;
      (e.min = t.min - n), (e.max = e.min + r$(t));
    }
    function rG(e, t, i, r) {
      rX(e.x, t.x, i.x, r?.x), rX(e.y, t.y, i.y, r?.y);
    }
    let rY = (e) => "object" == typeof e && null !== e;
    function rK(e) {
      return rY(e) && "ownerSVGElement" in e;
    }
    function rq(e, t, i) {
      if (null == e) return [];
      if (e instanceof EventTarget) return [e];
      if ("string" == typeof e) {
        let r = document;
        t && (r = t.current);
        let n = i?.[e] ?? r.querySelectorAll(e);
        return n ? Array.from(n) : [];
      }
      return Array.from(e).filter((e) => null != e);
    }
    let rZ = new WeakMap(),
      rJ = (e, t, i) => (r, n) =>
        n && n[0]
          ? n[0][e + "Size"]
          : rK(r) && "getBBox" in r
          ? r.getBBox()[t]
          : r[i],
      rQ = rJ("inline", "width", "offsetWidth"),
      r0 = rJ("block", "height", "offsetHeight");
    function r1({ target: e, borderBoxSize: t }) {
      rZ.get(e)?.forEach((i) => {
        i(e, {
          get width() {
            return rQ(e, t);
          },
          get height() {
            return r0(e, t);
          },
        });
      });
    }
    function r2(e) {
      e.forEach(r1);
    }
    let r3 = new Set();
    function r5(e, t) {
      let n;
      return "function" == typeof e
        ? (r3.add(e),
          r ||
            ((r = () => {
              let e = {
                get width() {
                  return window.innerWidth;
                },
                get height() {
                  return window.innerHeight;
                },
              };
              r3.forEach((t) => t(e));
            }),
            window.addEventListener("resize", r)),
          () => {
            r3.delete(e),
              r3.size ||
                "function" != typeof r ||
                (window.removeEventListener("resize", r), (r = void 0));
          })
        : (!i && "u" > typeof ResizeObserver && (i = new ResizeObserver(r2)),
          (n = rq(e)).forEach((e) => {
            let r = rZ.get(e);
            r || ((r = new Set()), rZ.set(e, r)), r.add(t), i?.observe(e);
          }),
          () => {
            n.forEach((e) => {
              let r = rZ.get(e);
              r?.delete(t), r?.size || i?.unobserve(e);
            });
          });
    }
    let r4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
      r6 = new Set(["INPUT", "SELECT", "TEXTAREA"]),
      r8 = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
    function r9(e) {
      return { point: { x: e.pageX, y: e.pageY } };
    }
    function r7(e, t, i, r) {
      return rF(e, t, (e) => r8(e) && i(e, r9(e)), r);
    }
    let ne = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
      nt = (e, t) => Math.abs(e - t),
      ni = new Set(["auto", "scroll"]);
    class nr {
      constructor(
        e,
        t,
        {
          transformPagePoint: i,
          contextWindow: r = window,
          dragSnapToOrigin: n = !1,
          distanceThreshold: s = 3,
          element: o,
        } = {}
      ) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.lastRawMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.scrollPositions = new Map()),
          (this.removeScrollListeners = null),
          (this.onElementScroll = (e) => {
            this.handleScroll(e.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            var e, t;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            this.lastRawMoveEventInfo &&
              (this.lastMoveEventInfo = nn(
                this.lastRawMoveEventInfo,
                this.transformPagePoint
              ));
            let i = no(this.lastMoveEventInfo, this.history),
              r = null !== this.startEvent,
              n =
                ((e = i.offset),
                (t = { x: 0, y: 0 }),
                Math.sqrt(nt(e.x, t.x) ** 2 + nt(e.y, t.y) ** 2) >=
                  this.distanceThreshold);
            if (!r && !n) return;
            let { point: s } = i,
              { timestamp: o } = eM;
            this.history.push({ ...s, timestamp: o });
            let { onStart: a, onMove: l } = this.handlers;
            r ||
              (a && a(this.lastMoveEvent, i),
              (this.startEvent = this.lastMoveEvent)),
              l && l(this.lastMoveEvent, i);
          }),
          (this.handlePointerMove = (e, t) => {
            (this.lastMoveEvent = e),
              (this.lastRawMoveEventInfo = t),
              (this.lastMoveEventInfo = nn(t, this.transformPagePoint)),
              ej.update(this.updatePoint, !0);
          }),
          (this.handlePointerUp = (e, t) => {
            this.end();
            let {
              onEnd: i,
              onSessionEnd: r,
              resumeAnimation: n,
            } = this.handlers;
            if (
              ((this.dragSnapToOrigin || !this.startEvent) && n && n(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
            )
              return;
            let s = no(
              "pointercancel" === e.type
                ? this.lastMoveEventInfo
                : nn(t, this.transformPagePoint),
              this.history
            );
            this.startEvent && i && i(e, s), r && r(e, s);
          }),
          !r8(e))
        )
          return;
        (this.dragSnapToOrigin = n),
          (this.handlers = t),
          (this.transformPagePoint = i),
          (this.distanceThreshold = s),
          (this.contextWindow = r || window);
        const a = nn(r9(e), this.transformPagePoint),
          { point: l } = a,
          { timestamp: u } = eM;
        this.history = [{ ...l, timestamp: u }];
        const { onSessionStart: h } = t;
        h && h(e, no(a, this.history)),
          (this.removeListeners = iR(
            r7(this.contextWindow, "pointermove", this.handlePointerMove),
            r7(this.contextWindow, "pointerup", this.handlePointerUp),
            r7(this.contextWindow, "pointercancel", this.handlePointerUp)
          )),
          o && this.startScrollTracking(o);
      }
      startScrollTracking(e) {
        let t = e.parentElement;
        for (; t; ) {
          let e = getComputedStyle(t);
          (ni.has(e.overflowX) || ni.has(e.overflowY)) &&
            this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
            (t = t.parentElement);
        }
        this.scrollPositions.set(window, {
          x: window.scrollX,
          y: window.scrollY,
        }),
          window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
          }),
          window.addEventListener("scroll", this.onWindowScroll),
          (this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
              window.removeEventListener("scroll", this.onWindowScroll);
          });
      }
      handleScroll(e) {
        let t = this.scrollPositions.get(e);
        if (!t) return;
        let i = e === window,
          r = i
            ? { x: window.scrollX, y: window.scrollY }
            : { x: e.scrollLeft, y: e.scrollTop },
          n = { x: r.x - t.x, y: r.y - t.y };
        (0 !== n.x || 0 !== n.y) &&
          (i
            ? this.lastMoveEventInfo &&
              ((this.lastMoveEventInfo.point.x += n.x),
              (this.lastMoveEventInfo.point.y += n.y))
            : this.history.length > 0 &&
              ((this.history[0].x -= n.x), (this.history[0].y -= n.y)),
          this.scrollPositions.set(e, r),
          ej.update(this.updatePoint, !0));
      }
      updateHandlers(e) {
        this.handlers = e;
      }
      end() {
        this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          eC(this.updatePoint);
      }
    }
    function nn(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function ns(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function no({ point: e }, t) {
      return {
        point: e,
        delta: ns(e, na(t)),
        offset: ns(e, t[0]),
        velocity: (function (e) {
          if (e.length < 2) return { x: 0, y: 0 };
          let t = e.length - 1,
            i = null,
            r = na(e);
          for (
            ;
            t >= 0 && ((i = e[t]), !(r.timestamp - i.timestamp > e$(0.1)));

          )
            t--;
          if (!i) return { x: 0, y: 0 };
          i === e[0] &&
            e.length > 2 &&
            r.timestamp - i.timestamp > 2 * e$(0.1) &&
            (i = e[1]);
          let n = (r.timestamp - i.timestamp) / 1e3;
          if (0 === n) return { x: 0, y: 0 };
          let s = { x: (r.x - i.x) / n, y: (r.y - i.y) / n };
          return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
        })(t),
      };
    }
    function na(e) {
      return e[e.length - 1];
    }
    function nl(e, t, i) {
      return {
        min: void 0 !== t ? e.min + t : void 0,
        max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0,
      };
    }
    function nu(e, t) {
      let i = t.min - e.min,
        r = t.max - e.max;
      return (
        t.max - t.min < e.max - e.min && ([i, r] = [r, i]), { min: i, max: r }
      );
    }
    function nh(e, t, i) {
      return { min: nd(e, t), max: nd(e, i) };
    }
    function nd(e, t) {
      return "number" == typeof e ? e : e[t] || 0;
    }
    let nc = new WeakMap();
    class np {
      constructor(e) {
        (this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = X()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = e);
      }
      start(e, { snapToCursor: t = !1, distanceThreshold: i } = {}) {
        let { presenceContext: r } = this.visualElement;
        if (r && !1 === r.isPresent) return;
        let n = (e) => {
            t && this.snapToCursor(r9(e).point), this.stopAnimation();
          },
          s = (e, t) => {
            let {
              drag: i,
              dragPropagation: r,
              onDragStart: n,
            } = this.getProps();
            if (
              i &&
              !r &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (e) {
                if ("x" === e || "y" === e)
                  if (r_[e]) return null;
                  else
                    return (
                      (r_[e] = !0),
                      () => {
                        r_[e] = !1;
                      }
                    );
                return r_.x || r_.y
                  ? null
                  : ((r_.x = r_.y = !0),
                    () => {
                      r_.x = r_.y = !1;
                    });
              })(i)),
              !this.openDragLock)
            )
              return;
            (this.latestPointerEvent = e),
              (this.latestPanInfo = t),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              rz((e) => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (b.test(t)) {
                  let { projection: i } = this.visualElement;
                  if (i && i.layout) {
                    let r = i.layout.layoutBox[e];
                    r && (t = r$(r) * (parseFloat(t) / 100));
                  }
                }
                this.originPoint[e] = t;
              }),
              n && ej.update(() => n(e, t), !1, !0),
              iA(this.visualElement, "transform");
            let { animationState: s } = this.visualElement;
            s && s.setActive("whileDrag", !0);
          },
          o = (e, t) => {
            (this.latestPointerEvent = e), (this.latestPanInfo = t);
            let {
              dragPropagation: i,
              dragDirectionLock: r,
              onDirectionLock: n,
              onDrag: s,
            } = this.getProps();
            if (!i && !this.openDragLock) return;
            let { offset: o } = t;
            if (r && null === this.currentDirection) {
              (this.currentDirection = (function (e, t = 10) {
                let i = null;
                return (
                  Math.abs(e.y) > t
                    ? (i = "y")
                    : Math.abs(e.x) > t && (i = "x"),
                  i
                );
              })(o)),
                null !== this.currentDirection && n && n(this.currentDirection);
              return;
            }
            this.updateAxis("x", t.point, o),
              this.updateAxis("y", t.point, o),
              this.visualElement.render(),
              s && ej.update(() => s(e, t), !1, !0);
          },
          a = (e, t) => {
            (this.latestPointerEvent = e),
              (this.latestPanInfo = t),
              this.stop(e, t),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null);
          },
          l = () => {
            let { dragSnapToOrigin: e } = this.getProps();
            (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
          },
          { dragSnapToOrigin: u } = this.getProps();
        this.panSession = new nr(
          e,
          {
            onSessionStart: n,
            onStart: s,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l,
          },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            distanceThreshold: i,
            contextWindow: ne(this.visualElement),
            element: this.visualElement.current,
          }
        );
      }
      stop(e, t) {
        let i = e || this.latestPointerEvent,
          r = t || this.latestPanInfo,
          n = this.isDragging;
        if ((this.cancel(), !n || !r || !i)) return;
        let { velocity: s } = r;
        this.startAnimation(s);
        let { onDragEnd: o } = this.getProps();
        o && ej.postRender(() => o(i, r));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: e, animationState: t } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.endPanSession();
        let { dragPropagation: i } = this.getProps();
        !i &&
          this.openDragLock &&
          (this.openDragLock(), (this.openDragLock = null)),
          t && t.setActive("whileDrag", !1);
      }
      endPanSession() {
        this.panSession && this.panSession.end(), (this.panSession = void 0);
      }
      updateAxis(e, t, i) {
        let { drag: r } = this.getProps();
        if (!i || !nf(e, r, this.currentDirection)) return;
        let n = this.getAxisMotionValue(e),
          s = this.originPoint[e] + i[e];
        this.constraints &&
          this.constraints[e] &&
          (s = (function (e, { min: t, max: i }, r) {
            return (
              void 0 !== t && e < t
                ? (e = r ? tB(t, e, r.min) : Math.max(e, t))
                : void 0 !== i &&
                  e > i &&
                  (e = r ? tB(i, e, r.max) : Math.min(e, i)),
              e
            );
          })(s, this.constraints[e], this.elastic[e])),
          n.set(s);
      }
      resolveConstraints() {
        let { dragConstraints: e, dragElastic: t } = this.getProps(),
          i =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : this.visualElement.projection?.layout,
          r = this.constraints;
        e && ik(e)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : e && i
          ? (this.constraints = (function (
              e,
              { top: t, left: i, bottom: r, right: n }
            ) {
              return { x: nl(e.x, i, n), y: nl(e.y, t, r) };
            })(i.layoutBox, e))
          : (this.constraints = !1),
          (this.elastic = (function (e = 0.35) {
            return (
              !1 === e ? (e = 0) : !0 === e && (e = 0.35),
              { x: nh(e, "left", "right"), y: nh(e, "top", "bottom") }
            );
          })(t)),
          r !== this.constraints &&
            !ik(e) &&
            i &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            rz((e) => {
              var t, r;
              let n;
              !1 !== this.constraints &&
                this.getAxisMotionValue(e) &&
                (this.constraints[e] =
                  ((t = i.layoutBox[e]),
                  (r = this.constraints[e]),
                  (n = {}),
                  void 0 !== r.min && (n.min = r.min - t.min),
                  void 0 !== r.max && (n.max = r.max - t.min),
                  n));
            });
      }
      resolveRefConstraints() {
        var e;
        let { dragConstraints: t, onMeasureDragConstraints: i } =
          this.getProps();
        if (!t || !ik(t)) return !1;
        let r = t.current;
        et(
          null !== r,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref"
        );
        let { projection: n } = this.visualElement;
        if (!n || !n.layout) return !1;
        n.root && ((n.root.scroll = void 0), n.root.updateScroll());
        let s = (function (e, t, i) {
            let r = t1(e, i),
              { scroll: n } = t;
            return n && (tZ(r.x, n.offset.x), tZ(r.y, n.offset.y)), r;
          })(r, n.root, this.visualElement.getTransformPagePoint()),
          o = ((e = n.layout.layoutBox), { x: nu(e.x, s.x), y: nu(e.y, s.y) });
        if (i) {
          let e = i(
            (function ({ x: e, y: t }) {
              return { top: t.min, right: e.max, bottom: t.max, left: e.min };
            })(o)
          );
          (this.hasMutatedConstraints = !!e), e && (o = tU(e));
        }
        return o;
      }
      startAnimation(e) {
        let {
            drag: t,
            dragMomentum: i,
            dragElastic: r,
            dragTransition: n,
            dragSnapToOrigin: s,
            onDragTransitionEnd: o,
          } = this.getProps(),
          a = this.constraints || {};
        return Promise.all(
          rz((o) => {
            if (!nf(o, t, this.currentDirection)) return;
            let l = (a && a[o]) || {};
            (!0 === s || s === o) && (l = { min: 0, max: 0 });
            let u = {
              type: "inertia",
              velocity: i ? e[o] : 0,
              bounceStiffness: r ? 200 : 1e6,
              bounceDamping: r ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...n,
              ...l,
            };
            return this.startAxisValueAnimation(o, u);
          })
        ).then(o);
      }
      startAxisValueAnimation(e, t) {
        let i = this.getAxisMotionValue(e);
        return (
          iA(this.visualElement, e),
          i.start(rC(e, i, 0, t, this.visualElement, !1))
        );
      }
      stopAnimation() {
        rz((e) => this.getAxisMotionValue(e).stop());
      }
      getAxisMotionValue(e) {
        let t = `_drag${e.toUpperCase()}`;
        return (
          this.visualElement.getProps()[t] ||
          this.visualElement.getValue(
            e,
            this.visualElement.latestValues[e] ?? 0
          )
        );
      }
      snapToCursor(e) {
        rz((t) => {
          let { drag: i } = this.getProps();
          if (!nf(t, i, this.currentDirection)) return;
          let { projection: r } = this.visualElement,
            n = this.getAxisMotionValue(t);
          if (r && r.layout) {
            let { min: i, max: s } = r.layout.layoutBox[t],
              o = n.get() || 0;
            n.set(e[t] - tB(i, s, 0.5) + o);
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: e, dragConstraints: t } = this.getProps(),
          { projection: i } = this.visualElement;
        if (!ik(t) || !i || !this.constraints) return;
        this.stopAnimation();
        let r = { x: 0, y: 0 };
        rz((e) => {
          let t = this.getAxisMotionValue(e);
          if (t && !1 !== this.constraints) {
            var i, n;
            let s,
              a,
              l,
              u = t.get();
            r[e] =
              ((i = { min: u, max: u }),
              (n = this.constraints[e]),
              (s = 0.5),
              (a = r$(i)),
              (l = r$(n)) > a
                ? (s = rh(n.min, n.max - a, i.min))
                : a > l && (s = rh(i.min, i.max - l, n.min)),
              o(0, 1, s));
          }
        });
        let { transformTemplate: n } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
          i.root && i.root.updateScroll(),
          i.updateLayout(),
          (this.constraints = !1),
          this.resolveConstraints(),
          rz((t) => {
            if (!nf(t, e, null)) return;
            let i = this.getAxisMotionValue(t),
              { min: n, max: s } = this.constraints[t];
            i.set(tB(n, s, r[t]));
          }),
          this.visualElement.render();
      }
      addListeners() {
        let e;
        if (!this.visualElement.current) return;
        nc.set(this.visualElement, this);
        let t = this.visualElement.current,
          i = r7(t, "pointerdown", (e) => {
            let { drag: i, dragListener: r = !0 } = this.getProps(),
              n = e.target,
              s = n !== t && (r6.has(n.tagName) || !0 === n.isContentEditable);
            i && r && !s && this.start(e);
          }),
          r = () => {
            var i, r, n;
            let s,
              o,
              { dragConstraints: a } = this.getProps();
            ik(a) &&
              a.current &&
              ((this.constraints = this.resolveRefConstraints()),
              e ||
                ((i = t),
                (r = a.current),
                (s = r5(
                  i,
                  nm((n = () => this.scalePositionWithinConstraints()))
                )),
                (o = r5(r, nm(n))),
                (e = () => {
                  s(), o();
                })));
          },
          { projection: n } = this.visualElement,
          s = n.addEventListener("measure", r);
        n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
          ej.read(r);
        let o = rF(window, "resize", () =>
            this.scalePositionWithinConstraints()
          ),
          a = n.addEventListener(
            "didUpdate",
            ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (rz((t) => {
                  let i = this.getAxisMotionValue(t);
                  i &&
                    ((this.originPoint[t] += e[t].translate),
                    i.set(i.get() + e[t].translate));
                }),
                this.visualElement.render());
            }
          );
        return () => {
          o(), i(), s(), a && a(), e && e();
        };
      }
      getProps() {
        let e = this.visualElement.getProps(),
          {
            drag: t = !1,
            dragDirectionLock: i = !1,
            dragPropagation: r = !1,
            dragConstraints: n = !1,
            dragElastic: s = 0.35,
            dragMomentum: o = !0,
          } = e;
        return {
          ...e,
          drag: t,
          dragDirectionLock: i,
          dragPropagation: r,
          dragConstraints: n,
          dragElastic: s,
          dragMomentum: o,
        };
      }
    }
    function nm(e) {
      let t = !0;
      return () => {
        if (t) {
          t = !1;
          return;
        }
        e();
      };
    }
    function nf(e, t, i) {
      return (!0 === t || t === e) && (null === i || i === e);
    }
    let ng = (e) => (t, i) => {
        e && ej.update(() => e(t, i), !1, !0);
      },
      ny = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    var nv = t3;
    function nx(e = !0) {
      let t = (0, t3.useContext)(ih);
      if (null === t) return [!0, null];
      let { isPresent: i, onExitComplete: r, register: n } = t,
        s = (0, t3.useId)();
      (0, t3.useEffect)(() => {
        if (e) return n(s);
      }, [e]);
      let o = (0, t3.useCallback)(() => e && r && r(s), [s, r, e]);
      return !i && r ? [!1, o] : [!0];
    }
    e.s(["usePresence", 0, nx], 71108);
    let nb = !1;
    class nw extends nv.Component {
      componentDidMount() {
        let {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: i,
            layoutId: r,
          } = this.props,
          { projection: n } = e;
        n &&
          (t.group && t.group.add(n),
          i && i.register && r && i.register(n),
          nb && n.root.didUpdate(),
          n.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          n.setOptions({
            ...n.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove(),
          })),
          (ny.hasEverUpdated = !0);
      }
      getSnapshotBeforeUpdate(e) {
        let {
            layoutDependency: t,
            visualElement: i,
            drag: r,
            isPresent: n,
          } = this.props,
          { projection: s } = i;
        return (
          s &&
            ((s.isPresent = n),
            e.layoutDependency !== t &&
              s.setOptions({ ...s.options, layoutDependency: t }),
            (nb = !0),
            r || e.layoutDependency !== t || void 0 === t || e.isPresent !== n
              ? s.willUpdate()
              : this.safeToRemove(),
            e.isPresent !== n &&
              (n
                ? s.promote()
                : s.relegate() ||
                  ej.postRender(() => {
                    let e = s.getStack();
                    (e && e.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { visualElement: e, layoutAnchor: t } = this.props,
          { projection: i } = e;
        i &&
          ((i.options.layoutAnchor = t),
          i.root.didUpdate(),
          e7.postRender(() => {
            !i.currentAnimation && i.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: i,
          } = this.props,
          { projection: r } = e;
        (nb = !0),
          r &&
            (r.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(r),
            i && i.deregister && i.deregister(r));
      }
      safeToRemove() {
        let { safeToRemove: e } = this.props;
        e && e();
      }
      render() {
        return null;
      }
    }
    function nk(e) {
      let [t, i] = nx(),
        r = (0, nv.useContext)(t8);
      return (0, t6.jsx)(nw, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: (0, nv.useContext)(iw),
        isPresent: t,
        safeToRemove: i,
      });
    }
    let nS = [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
      nP = nS.length,
      nT = (e) => ("string" == typeof e ? parseFloat(e) : e),
      nE = (e) => "number" == typeof e || w.test(e);
    function nj(e, t) {
      return void 0 !== e[t] ? e[t] : e.borderRadius;
    }
    let nC = nA(0, 0.5, ro),
      nM = nA(0.5, 0.95, eS);
    function nA(e, t, i) {
      return (r) => (r < e ? 0 : r > t ? 1 : i(rh(e, t, r)));
    }
    function nR(e, t) {
      (e.min = t.min), (e.max = t.max);
    }
    function nV(e, t) {
      nR(e.x, t.x), nR(e.y, t.y);
    }
    function nD(e, t) {
      (e.translate = t.translate),
        (e.scale = t.scale),
        (e.originPoint = t.originPoint),
        (e.origin = t.origin);
    }
    function nL(e, t, i, r, n) {
      return (
        (e -= t),
        (e = r + (1 / i) * (e - r)),
        void 0 !== n && (e = r + (1 / n) * (e - r)),
        e
      );
    }
    function nO(e, t, [i, r, n], s, o) {
      !(function (e, t = 0, i = 1, r = 0.5, n, s = e, o = e) {
        if (
          (b.test(t) &&
            ((t = parseFloat(t)), (t = tB(o.min, o.max, t / 100) - o.min)),
          "number" != typeof t)
        )
          return;
        let a = tB(s.min, s.max, r);
        e === s && (a -= t),
          (e.min = nL(e.min, t, i, a, n)),
          (e.max = nL(e.max, t, i, a, n));
      })(e, t[i], t[r], t[n], t.scale, s, o);
    }
    let nI = ["x", "scaleX", "originX"],
      nB = ["y", "scaleY", "originY"];
    function nN(e, t, i, r) {
      nO(e.x, t, nI, i ? i.x : void 0, r ? r.x : void 0),
        nO(e.y, t, nB, i ? i.y : void 0, r ? r.y : void 0);
    }
    function nz(e) {
      return 0 === e.translate && 1 === e.scale;
    }
    function nF(e) {
      return nz(e.x) && nz(e.y);
    }
    function n_(e, t) {
      return e.min === t.min && e.max === t.max;
    }
    function n$(e, t) {
      return (
        Math.round(e.min) === Math.round(t.min) &&
        Math.round(e.max) === Math.round(t.max)
      );
    }
    function nU(e, t) {
      return n$(e.x, t.x) && n$(e.y, t.y);
    }
    function nW(e) {
      return r$(e.x) / r$(e.y);
    }
    function nH(e, t) {
      return (
        e.translate === t.translate &&
        e.scale === t.scale &&
        e.originPoint === t.originPoint
      );
    }
    class nX {
      constructor() {
        this.members = [];
      }
      add(e) {
        eU(this.members, e);
        for (let t = this.members.length - 1; t >= 0; t--) {
          let i = this.members[t];
          if (i === e || i === this.lead || i === this.prevLead) continue;
          let r = i.instance;
          (r && !1 !== r.isConnected) ||
            i.snapshot ||
            (eW(this.members, i), i.unmount());
        }
        e.scheduleRender();
      }
      remove(e) {
        if (
          (eW(this.members, e),
          e === this.prevLead && (this.prevLead = void 0),
          e === this.lead)
        ) {
          let e = this.members[this.members.length - 1];
          e && this.promote(e);
        }
      }
      relegate(e) {
        for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
          let e = this.members[t];
          if (!1 !== e.isPresent && e.instance?.isConnected !== !1)
            return this.promote(e), !0;
        }
        return !1;
      }
      promote(e, t) {
        let i = this.lead;
        if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
          i.updateSnapshot(), e.scheduleRender();
          let { layoutDependency: r } = i.options,
            { layoutDependency: n } = e.options;
          (void 0 === r || r !== n) &&
            ((e.resumeFrom = i),
            t && (i.preserveOpacity = !0),
            i.snapshot &&
              ((e.snapshot = i.snapshot),
              (e.snapshot.latestValues = i.animationValues || i.latestValues)),
            e.root?.isUpdating && (e.isLayoutDirty = !0)),
            !1 === e.options.crossfade && i.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((e) => {
          e.options.onExitComplete?.(),
            e.resumingFrom?.options.onExitComplete?.();
        });
      }
      scheduleRender() {
        this.members.forEach((e) => e.instance && e.scheduleRender(!1));
      }
      removeLeadSnapshot() {
        this.lead?.snapshot && (this.lead.snapshot = void 0);
      }
    }
    let nG = (e, t) => e.depth - t.depth;
    class nY {
      constructor() {
        (this.children = []), (this.isDirty = !1);
      }
      add(e) {
        eU(this.children, e), (this.isDirty = !0);
      }
      remove(e) {
        eW(this.children, e), (this.isDirty = !0);
      }
      forEach(e) {
        this.isDirty && this.children.sort(nG),
          (this.isDirty = !1),
          this.children.forEach(e);
      }
    }
    let nK = ["", "X", "Y", "Z"],
      nq = 0;
    function nZ(e, t, i, r) {
      let { latestValues: n } = t;
      n[e] && ((i[e] = n[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
    }
    function nJ({
      attachResizeListener: e,
      defaultParent: t,
      measureScroll: i,
      checkIsScrollRoot: r,
      resetTransform: n,
    }) {
      return class {
        constructor(e = {}, i = t?.()) {
          (this.id = nq++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.layoutVersion = 0),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              (this.projectionUpdateScheduled = !1),
                this.nodes.forEach(n1),
                this.nodes.forEach(se),
                this.nodes.forEach(st),
                this.nodes.forEach(n2);
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = e),
            (this.root = i ? i.root || i : this),
            (this.path = i ? [...i.path, i] : []),
            (this.parent = i),
            (this.depth = i ? i.depth + 1 : 0);
          for (let e = 0; e < this.path.length; e++)
            this.path[e].shouldResetTransform = !0;
          this.root === this && (this.nodes = new nY());
        }
        addEventListener(e, t) {
          return (
            this.eventHandlers.has(e) || this.eventHandlers.set(e, new eH()),
            this.eventHandlers.get(e).add(t)
          );
        }
        notifyListeners(e, ...t) {
          let i = this.eventHandlers.get(e);
          i && i.notify(...t);
        }
        hasListeners(e) {
          return this.eventHandlers.has(e);
        }
        mount(t) {
          if (this.instance) return;
          (this.isSVG = rK(t) && !(rK(t) && "svg" === t.tagName)),
            (this.instance = t);
          let { layoutId: i, layout: r, visualElement: n } = this.options;
          if (
            (n && !n.current && n.mount(t),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (r || i) && (this.isLayoutDirty = !0),
            e)
          ) {
            let i,
              r = 0,
              n = () => (this.root.updateBlockedByResize = !1);
            ej.read(() => {
              r = window.innerWidth;
            }),
              e(t, () => {
                let e = window.innerWidth;
                if (e !== r) {
                  let t, s;
                  (r = e),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (t = tt.now()),
                    (s = ({ timestamp: e }) => {
                      let i = e - t;
                      i >= 250 && (eC(s), n(i - 250));
                    }),
                    ej.setup(s, !0),
                    (i = () => eC(s)),
                    ny.hasAnimatedSinceResize &&
                      ((ny.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(n7));
                }
              });
          }
          i && this.root.registerSharedNode(i, this),
            !1 !== this.options.animate &&
              n &&
              (i || r) &&
              this.addEventListener(
                "didUpdate",
                ({
                  delta: e,
                  hasLayoutChanged: t,
                  hasRelativeLayoutChanged: i,
                  layout: r,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    (this.target = void 0), (this.relativeTarget = void 0);
                    return;
                  }
                  let s =
                      this.options.transition || n.getDefaultTransition() || sa,
                    {
                      onLayoutAnimationStart: o,
                      onLayoutAnimationComplete: a,
                    } = n.getProps(),
                    l = !this.targetLayout || !nU(this.targetLayout, r),
                    u = !t && i;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    u ||
                    (t && (l || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0));
                    let t = { ...iC(s, "layout"), onPlay: o, onComplete: a };
                    (n.shouldReduceMotion || this.options.layoutRoot) &&
                      ((t.delay = 0), (t.type = !1)),
                      this.startAnimation(t),
                      this.setAnimationOrigin(e, u);
                  } else
                    t || n7(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = r;
                }
              );
        }
        unmount() {
          this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
          let e = this.getStack();
          e && e.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            eC(this.updateProjection);
        }
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
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          !this.isUpdateBlocked() &&
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(si),
            this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: e } = this.options;
          return e && e.getProps().transformTemplate;
        }
        willUpdate(e = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function e(t) {
                if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
                let { visualElement: i } = t.options;
                if (!i) return;
                let r = i.props[ib];
                if (window.MotionHasOptimisedAnimation(r, "transform")) {
                  let { layout: e, layoutId: i } = t.options;
                  window.MotionCancelOptimisedAnimation(
                    r,
                    "transform",
                    ej,
                    !(e || i)
                  );
                }
                let { parent: n } = t;
                n && !n.hasCheckedOptimisedAppear && e(n);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let e = 0; e < this.path.length; e++) {
            let t = this.path[e];
            (t.shouldResetTransform = !0),
              ("string" == typeof t.latestValues.x ||
                "string" == typeof t.latestValues.y) &&
                (t.isLayoutDirty = !0),
              t.updateScroll("snapshot"),
              t.options.layoutRoot && t.willUpdate(!1);
          }
          let { layoutId: t, layout: i } = this.options;
          if (void 0 === t && !i) return;
          let r = this.getTransformTemplate();
          (this.prevTransformTemplateValue = r
            ? r(this.latestValues, "")
            : void 0),
            this.updateSnapshot(),
            e && this.notifyListeners("willUpdate");
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            let e = this.updateBlockedByResize;
            this.unblockUpdate(),
              (this.updateBlockedByResize = !1),
              this.clearAllSnapshots(),
              e && this.nodes.forEach(n4),
              this.nodes.forEach(n5);
            return;
          }
          if (this.animationId <= this.animationCommitId)
            return void this.nodes.forEach(n6);
          (this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1),
                this.nodes.forEach(n8),
                this.nodes.forEach(n9),
                this.nodes.forEach(nQ),
                this.nodes.forEach(n0))
              : this.nodes.forEach(n6),
            this.clearAllSnapshots();
          let e = tt.now();
          (eM.delta = o(0, 1e3 / 60, e - eM.timestamp)),
            (eM.timestamp = e),
            (eM.isProcessing = !0),
            eA.update.process(eM),
            eA.preRender.process(eM),
            eA.render.process(eM),
            (eM.isProcessing = !1);
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), e7.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          this.nodes.forEach(n3), this.sharedNodes.forEach(sr);
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
            ej.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          ej.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot ||
              r$(this.snapshot.measuredBox.x) ||
              r$(this.snapshot.measuredBox.y) ||
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
              !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let e = 0; e < this.path.length; e++)
              this.path[e].updateScroll();
          let e = this.layout;
          (this.layout = this.measure(!1)),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = X()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox);
          let { visualElement: t } = this.options;
          t &&
            t.notify(
              "LayoutMeasure",
              this.layout.layoutBox,
              e ? e.layoutBox : void 0
            );
        }
        updateScroll(e = "measure") {
          let t = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
            t && this.instance)
          ) {
            let t = r(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: e,
              isRoot: t,
              offset: i(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : t,
            };
          }
        }
        resetTransform() {
          if (!n) return;
          let e =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout,
            t = this.projectionDelta && !nF(this.projectionDelta),
            i = this.getTransformTemplate(),
            r = i ? i(this.latestValues, "") : void 0,
            s = r !== this.prevTransformTemplateValue;
          e &&
            this.instance &&
            (t || tX(this.latestValues) || s) &&
            (n(this.instance, r),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure(e = !0) {
          var t;
          let i = this.measurePageBox(),
            r = this.removeElementScroll(i);
          return (
            e && (r = this.removeTransform(r)),
            sh((t = r).x),
            sh(t.y),
            {
              animationId: this.root.animationId,
              measuredBox: i,
              layoutBox: r,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          let { visualElement: e } = this.options;
          if (!e) return X();
          let t = e.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(sc))) {
            let { scroll: e } = this.root;
            e && (tZ(t.x, e.offset.x), tZ(t.y, e.offset.y));
          }
          return t;
        }
        removeElementScroll(e) {
          let t = X();
          if ((nV(t, e), this.scroll?.wasRoot)) return t;
          for (let i = 0; i < this.path.length; i++) {
            let r = this.path[i],
              { scroll: n, options: s } = r;
            r !== this.root &&
              n &&
              s.layoutScroll &&
              (n.wasRoot && nV(t, e), tZ(t.x, n.offset.x), tZ(t.y, n.offset.y));
          }
          return t;
        }
        applyTransform(e, t = !1, i) {
          let r = i || X();
          nV(r, e);
          for (let e = 0; e < this.path.length; e++) {
            let i = this.path[e];
            !t &&
              i.options.layoutScroll &&
              i.scroll &&
              i !== i.root &&
              (tZ(r.x, -i.scroll.offset.x), tZ(r.y, -i.scroll.offset.y)),
              tX(i.latestValues) && t0(r, i.latestValues, i.layout?.layoutBox);
          }
          return (
            tX(this.latestValues) &&
              t0(r, this.latestValues, this.layout?.layoutBox),
            r
          );
        }
        removeTransform(e) {
          let t = X();
          nV(t, e);
          for (let e = 0; e < this.path.length; e++) {
            let i,
              r = this.path[e];
            tX(r.latestValues) &&
              (r.instance &&
                (tH(r.latestValues) && r.updateSnapshot(),
                nV((i = X()), r.measurePageBox())),
              nN(t, r.latestValues, r.snapshot?.layoutBox, i));
          }
          return tX(this.latestValues) && nN(t, this.latestValues), t;
        }
        setTargetDelta(e) {
          (this.targetDelta = e),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0);
        }
        setOptions(e) {
          this.options = {
            ...this.options,
            ...e,
            crossfade: void 0 === e.crossfade || e.crossfade,
          };
        }
        clearMeasurements() {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== eM.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(e = !1) {
          let t = this.getLead();
          this.isProjectionDirty ||
            (this.isProjectionDirty = t.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = t.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
          let i = !!this.resumingFrom || this !== t;
          if (
            !(
              e ||
              (i && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          let { layout: r, layoutId: n } = this.options;
          if (!this.layout || !(r || n)) return;
          this.resolvedRelativeTargetAt = eM.timestamp;
          let s = this.getClosestProjectingParent();
          if (
            (s &&
              this.linkedParentVersion !== s.layoutVersion &&
              !s.options.layoutRoot &&
              this.removeRelativeTarget(),
            this.targetDelta ||
              this.relativeTarget ||
              (!1 !== this.options.layoutAnchor && s && s.layout
                ? this.createRelativeTarget(
                    s,
                    this.layout.layoutBox,
                    s.layout.layoutBox
                  )
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta)
          ) {
            if (
              (this.target ||
                ((this.target = X()), (this.targetWithTransforms = X())),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target)
            ) {
              var o, a, l, u;
              this.forceRelativeParentToResolveTarget(),
                (o = this.target),
                (a = this.relativeTarget),
                (l = this.relativeParent.target),
                (u = this.options.layoutAnchor || void 0),
                rH(o.x, a.x, l.x, u?.x),
                rH(o.y, a.y, l.y, u?.y);
            } else
              this.targetDelta
                ? (this.resumingFrom
                    ? this.applyTransform(
                        this.layout.layoutBox,
                        !1,
                        this.target
                      )
                    : nV(this.target, this.layout.layoutBox),
                  tq(this.target, this.targetDelta))
                : nV(this.target, this.layout.layoutBox);
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              !1 !== this.options.layoutAnchor &&
              s &&
              !!s.resumingFrom == !!this.resumingFrom &&
              !s.options.layoutScroll &&
              s.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(s, this.target, s.target)
                : (this.relativeParent = this.relativeTarget = void 0));
          }
        }
        getClosestProjectingParent() {
          if (
            !(
              !this.parent ||
              tH(this.parent.latestValues) ||
              tG(this.parent.latestValues)
            )
          )
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
            this.layout
          );
        }
        createRelativeTarget(e, t, i) {
          (this.relativeParent = e),
            (this.linkedParentVersion = e.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = X()),
            (this.relativeTargetOrigin = X()),
            rG(
              this.relativeTargetOrigin,
              t,
              i,
              this.options.layoutAnchor || void 0
            ),
            nV(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          let e = this.getLead(),
            t = !!this.resumingFrom || this !== e,
            i = !0;
          if (
            ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
              (i = !1),
            t &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (i = !1),
            this.resolvedRelativeTargetAt === eM.timestamp && (i = !1),
            i)
          )
            return;
          let { layout: r, layoutId: n } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(r || n))
          )
            return;
          nV(this.layoutCorrected, this.layout.layoutBox);
          let s = this.treeScale.x,
            o = this.treeScale.y;
          !(function (e, t, i, r = !1) {
            let n,
              s,
              o = i.length;
            if (o) {
              t.x = t.y = 1;
              for (let a = 0; a < o; a++) {
                s = (n = i[a]).projectionDelta;
                let { visualElement: o } = n.options;
                (!o ||
                  !o.props.style ||
                  "contents" !== o.props.style.display) &&
                  (r &&
                    n.options.layoutScroll &&
                    n.scroll &&
                    n !== n.root &&
                    (tZ(e.x, -n.scroll.offset.x), tZ(e.y, -n.scroll.offset.y)),
                  s && ((t.x *= s.x.scale), (t.y *= s.y.scale), tq(e, s)),
                  r &&
                    tX(n.latestValues) &&
                    t0(e, n.latestValues, n.layout?.layoutBox));
              }
              t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
            }
          })(this.layoutCorrected, this.treeScale, this.path, t),
            e.layout &&
              !e.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((e.target = e.layout.layoutBox), (e.targetWithTransforms = X()));
          let { target: a } = e;
          if (!a) {
            this.prevProjectionDelta &&
              (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          this.projectionDelta && this.prevProjectionDelta
            ? (nD(this.prevProjectionDelta.x, this.projectionDelta.x),
              nD(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            rW(
              this.projectionDelta,
              this.layoutCorrected,
              a,
              this.latestValues
            ),
            (this.treeScale.x === s &&
              this.treeScale.y === o &&
              nH(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              nH(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", a));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(e = !0) {
          if ((this.options.visualElement?.scheduleRender(), e)) {
            let e = this.getStack();
            e && e.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          (this.prevProjectionDelta = W()),
            (this.projectionDelta = W()),
            (this.projectionDeltaWithTransform = W());
        }
        setAnimationOrigin(e, t = !1) {
          let i,
            r = this.snapshot,
            n = r ? r.latestValues : {},
            s = { ...this.latestValues },
            o = W();
          (this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !t);
          let a = X(),
            l =
              (r ? r.source : void 0) !==
              (this.layout ? this.layout.source : void 0),
            u = this.getStack(),
            h = !u || u.members.length <= 1,
            d = !!(
              l &&
              !h &&
              !0 === this.options.crossfade &&
              !this.path.some(so)
            );
          (this.animationProgress = 0),
            (this.mixTargetDelta = (t) => {
              let r = t / 1e3;
              if (
                (sn(o.x, e.x, r),
                sn(o.y, e.y, r),
                this.setTargetDelta(o),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var u, c, p, m, f, g;
                rG(
                  a,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                  this.options.layoutAnchor || void 0
                ),
                  (p = this.relativeTarget),
                  (m = this.relativeTargetOrigin),
                  (f = a),
                  (g = r),
                  ss(p.x, m.x, f.x, g),
                  ss(p.y, m.y, f.y, g),
                  i &&
                    ((u = this.relativeTarget),
                    (c = i),
                    n_(u.x, c.x) && n_(u.y, c.y)) &&
                    (this.isProjectionDirty = !1),
                  i || (i = X()),
                  nV(i, this.relativeTarget);
              }
              l &&
                ((this.animationValues = s),
                (function (e, t, i, r, n, s) {
                  n
                    ? ((e.opacity = tB(0, i.opacity ?? 1, nC(r))),
                      (e.opacityExit = tB(t.opacity ?? 1, 0, nM(r))))
                    : s && (e.opacity = tB(t.opacity ?? 1, i.opacity ?? 1, r));
                  for (let n = 0; n < nP; n++) {
                    let s = nS[n],
                      o = nj(t, s),
                      a = nj(i, s);
                    (void 0 !== o || void 0 !== a) &&
                      (o || (o = 0),
                      a || (a = 0),
                      0 === o || 0 === a || nE(o) === nE(a)
                        ? ((e[s] = Math.max(tB(nT(o), nT(a), r), 0)),
                          (b.test(a) || b.test(o)) && (e[s] += "%"))
                        : (e[s] = a));
                  }
                  (t.rotate || i.rotate) &&
                    (e.rotate = tB(t.rotate || 0, i.rotate || 0, r));
                })(s, n, this.latestValues, r, d, h)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = r);
            }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
        }
        startAnimation(e) {
          this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation &&
              (eC(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = ej.update(() => {
              var t, i, r;
              let n;
              (ny.hasAnimatedSinceResize = !0),
                e0.layout++,
                this.motionValue || (this.motionValue = ts(0)),
                this.motionValue.jump(0, !1),
                (this.currentAnimation =
                  ((t = this.motionValue),
                  (i = [0, 1e3]),
                  (r = {
                    ...e,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onStop: () => {
                      e0.layout--;
                    },
                    onComplete: () => {
                      e0.layout--,
                        e.onComplete && e.onComplete(),
                        this.completeAnimation();
                    },
                  }),
                  (n = G(t) ? t : ts(t)).start(rC("", n, i, r)),
                  n.animation)),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0);
            }));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          let e = this.getStack();
          e && e.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
          this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation();
        }
        applyTransformsToTarget() {
          let e = this.getLead(),
            {
              targetWithTransforms: t,
              target: i,
              layout: r,
              latestValues: n,
            } = e;
          if (t && i && r) {
            if (
              this !== e &&
              this.layout &&
              r &&
              sd(this.options.animationType, this.layout.layoutBox, r.layoutBox)
            ) {
              i = this.target || X();
              let t = r$(this.layout.layoutBox.x);
              (i.x.min = e.target.x.min), (i.x.max = i.x.min + t);
              let r = r$(this.layout.layoutBox.y);
              (i.y.min = e.target.y.min), (i.y.max = i.y.min + r);
            }
            nV(t, i),
              t0(t, n),
              rW(this.projectionDeltaWithTransform, this.layoutCorrected, t, n);
          }
        }
        registerSharedNode(e, t) {
          this.sharedNodes.has(e) || this.sharedNodes.set(e, new nX()),
            this.sharedNodes.get(e).add(t);
          let i = t.options.initialPromotionConfig;
          t.promote({
            transition: i ? i.transition : void 0,
            preserveFollowOpacity:
              i && i.shouldPreserveFollowOpacity
                ? i.shouldPreserveFollowOpacity(t)
                : void 0,
          });
        }
        isLead() {
          let e = this.getStack();
          return !e || e.lead === this;
        }
        getLead() {
          let { layoutId: e } = this.options;
          return (e && this.getStack()?.lead) || this;
        }
        getPrevLead() {
          let { layoutId: e } = this.options;
          return e ? this.getStack()?.prevLead : void 0;
        }
        getStack() {
          let { layoutId: e } = this.options;
          if (e) return this.root.sharedNodes.get(e);
        }
        promote({
          needsReset: e,
          transition: t,
          preserveFollowOpacity: i,
        } = {}) {
          let r = this.getStack();
          r && r.promote(this, i),
            e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            t && this.setOptions({ transition: t });
        }
        relegate() {
          let e = this.getStack();
          return !!e && e.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: e } = this.options;
          if (!e) return;
          let t = !1,
            { latestValues: i } = e;
          if (
            ((i.z ||
              i.rotate ||
              i.rotateX ||
              i.rotateY ||
              i.rotateZ ||
              i.skewX ||
              i.skewY) &&
              (t = !0),
            !t)
          )
            return;
          let r = {};
          i.z && nZ("z", e, r, this.animationValues);
          for (let t = 0; t < nK.length; t++)
            nZ(`rotate${nK[t]}`, e, r, this.animationValues),
              nZ(`skew${nK[t]}`, e, r, this.animationValues);
          for (let t in (e.render(), r))
            e.setStaticValue(t, r[t]),
              this.animationValues && (this.animationValues[t] = r[t]);
          e.scheduleRender();
        }
        applyProjectionStyles(e, t) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            e.visibility = "hidden";
            return;
          }
          let i = this.getTransformTemplate();
          if (this.needsReset) {
            (this.needsReset = !1),
              (e.visibility = ""),
              (e.opacity = ""),
              (e.pointerEvents = iu(t?.pointerEvents) || ""),
              (e.transform = i ? i(this.latestValues, "") : "none");
            return;
          }
          let r = this.getLead();
          if (!this.projectionDelta || !this.layout || !r.target) {
            this.options.layoutId &&
              ((e.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (e.pointerEvents = iu(t?.pointerEvents) || "")),
              this.hasProjected &&
                !tX(this.latestValues) &&
                ((e.transform = i ? i({}, "") : "none"),
                (this.hasProjected = !1));
            return;
          }
          e.visibility = "";
          let n = r.animationValues || r.latestValues;
          this.applyTransformsToTarget();
          let s = (function (e, t, i) {
            let r = "",
              n = e.x.translate / t.x,
              s = e.y.translate / t.y,
              o = i?.z || 0;
            if (
              ((n || s || o) && (r = `translate3d(${n}px, ${s}px, ${o}px) `),
              (1 !== t.x || 1 !== t.y) &&
                (r += `scale(${1 / t.x}, ${1 / t.y}) `),
              i)
            ) {
              let {
                transformPerspective: e,
                rotate: t,
                rotateX: n,
                rotateY: s,
                skewX: o,
                skewY: a,
              } = i;
              e && (r = `perspective(${e}px) ${r}`),
                t && (r += `rotate(${t}deg) `),
                n && (r += `rotateX(${n}deg) `),
                s && (r += `rotateY(${s}deg) `),
                o && (r += `skewX(${o}deg) `),
                a && (r += `skewY(${a}deg) `);
            }
            let a = e.x.scale * t.x,
              l = e.y.scale * t.y;
            return (
              (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`), r || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, n);
          i && (s = i(n, s)), (e.transform = s);
          let { x: o, y: a } = this.projectionDelta;
          for (let t in ((e.transformOrigin = `${100 * o.origin}% ${
            100 * a.origin
          }% 0`),
          r.animationValues
            ? (e.opacity =
                r === this
                  ? n.opacity ?? this.latestValues.opacity ?? 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : n.opacityExit)
            : (e.opacity =
                r === this
                  ? void 0 !== n.opacity
                    ? n.opacity
                    : ""
                  : void 0 !== n.opacityExit
                  ? n.opacityExit
                  : 0),
          tN)) {
            if (void 0 === n[t]) continue;
            let { correct: i, applyTo: o, isCSSVariable: a } = tN[t],
              l = "none" === s ? n[t] : i(n[t], r);
            if (o) {
              let t = o.length;
              for (let i = 0; i < t; i++) e[o[i]] = l;
            } else
              a
                ? (this.options.visualElement.renderState.vars[t] = l)
                : (e[t] = l);
          }
          this.options.layoutId &&
            (e.pointerEvents =
              r === this ? iu(t?.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
            this.root.nodes.forEach(n5),
            this.root.sharedNodes.clear();
        }
      };
    }
    function nQ(e) {
      e.updateLayout();
    }
    function n0(e) {
      let t = e.resumeFrom?.snapshot || e.snapshot;
      if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        let { layoutBox: i, measuredBox: r } = e.layout,
          { animationType: n } = e.options,
          s = t.source !== e.layout.source;
        if ("size" === n)
          rz((e) => {
            let r = s ? t.measuredBox[e] : t.layoutBox[e],
              n = r$(r);
            (r.min = i[e].min), (r.max = r.min + n);
          });
        else if ("x" === n || "y" === n) {
          let e = "x" === n ? "y" : "x";
          nR(s ? t.measuredBox[e] : t.layoutBox[e], i[e]);
        } else
          sd(n, t.layoutBox, i) &&
            rz((r) => {
              let n = s ? t.measuredBox[r] : t.layoutBox[r],
                o = r$(i[r]);
              (n.max = n.min + o),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0),
                  (e.relativeTarget[r].max = e.relativeTarget[r].min + o));
            });
        let o = W();
        rW(o, i, t.layoutBox);
        let a = W();
        s
          ? rW(a, e.applyTransform(r, !0), t.measuredBox)
          : rW(a, i, t.layoutBox);
        let l = !nF(o),
          u = !1;
        if (!e.resumeFrom) {
          let r = e.getClosestProjectingParent();
          if (r && !r.resumeFrom) {
            let { snapshot: n, layout: s } = r;
            if (n && s) {
              let o = e.options.layoutAnchor || void 0,
                a = X();
              rG(a, t.layoutBox, n.layoutBox, o);
              let l = X();
              rG(l, i, s.layoutBox, o),
                nU(a, l) || (u = !0),
                r.options.layoutRoot &&
                  ((e.relativeTarget = l),
                  (e.relativeTargetOrigin = a),
                  (e.relativeParent = r));
            }
          }
        }
        e.notifyListeners("didUpdate", {
          layout: i,
          snapshot: t,
          delta: a,
          layoutDelta: o,
          hasLayoutChanged: l,
          hasRelativeLayoutChanged: u,
        });
      } else if (e.isLead()) {
        let { onExitComplete: t } = e.options;
        t && t();
      }
      e.options.transition = void 0;
    }
    function n1(e) {
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = !!(
            e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function n2(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function n3(e) {
      e.clearSnapshot();
    }
    function n5(e) {
      e.clearMeasurements();
    }
    function n4(e) {
      (e.isLayoutDirty = !0), e.updateLayout();
    }
    function n6(e) {
      e.isLayoutDirty = !1;
    }
    function n8(e) {
      e.isAnimationBlocked &&
        e.layout &&
        !e.isLayoutDirty &&
        ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
    }
    function n9(e) {
      let { visualElement: t } = e.options;
      t &&
        t.getProps().onBeforeLayoutMeasure &&
        t.notify("BeforeLayoutMeasure"),
        e.resetTransform();
    }
    function n7(e) {
      e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
    }
    function se(e) {
      e.resolveTargetDelta();
    }
    function st(e) {
      e.calcProjection();
    }
    function si(e) {
      e.resetSkewAndRotation();
    }
    function sr(e) {
      e.removeLeadSnapshot();
    }
    function sn(e, t, i) {
      (e.translate = tB(t.translate, 0, i)),
        (e.scale = tB(t.scale, 1, i)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
    }
    function ss(e, t, i, r) {
      (e.min = tB(t.min, i.min, r)), (e.max = tB(t.max, i.max, r));
    }
    function so(e) {
      return e.animationValues && void 0 !== e.animationValues.opacityExit;
    }
    let sa = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      sl = (e) =>
        "u" > typeof navigator &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(e),
      su = sl("applewebkit/") && !sl("chrome/") ? Math.round : eS;
    function sh(e) {
      (e.min = su(e.min)), (e.max = su(e.max));
    }
    function sd(e, t, i) {
      return (
        "position" === e ||
        ("preserve-aspect" === e && !(0.2 >= Math.abs(nW(t) - nW(i))))
      );
    }
    function sc(e) {
      return e !== e.root && e.scroll?.wasRoot;
    }
    let sp = nJ({
        attachResizeListener: (e, t) => rF(e, "resize", t),
        measureScroll: () => ({
          x:
            document.documentElement.scrollLeft ||
            document.body?.scrollLeft ||
            0,
          y:
            document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      }),
      sm = { current: void 0 },
      sf = nJ({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!sm.current) {
            let e = new sp({});
            e.mount(window),
              e.setOptions({ layoutScroll: !0 }),
              (sm.current = e);
          }
          return sm.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = void 0 !== t ? t : "none";
        },
        checkIsScrollRoot: (e) =>
          "fixed" === window.getComputedStyle(e).position,
      });
    function sg(e, t) {
      let i = rq(e),
        r = new AbortController();
      return [i, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
    }
    function sy(e, t, i) {
      let { props: r } = e;
      e.animationState &&
        r.whileHover &&
        e.animationState.setActive("whileHover", "Start" === i);
      let n = r["onHover" + i];
      n && ej.postRender(() => n(t, r9(t)));
    }
    function sv(e) {
      return rY(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
    }
    e.s(["isHTMLElement", 0, sv], 56122);
    let sx = (e, t) => !!t && (e === t || sx(e, t.parentElement)),
      sb = new WeakSet();
    function sw(e) {
      return (t) => {
        "Enter" === t.key && e(t);
      };
    }
    function sk(e, t) {
      e.dispatchEvent(
        new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
      );
    }
    function sS(e) {
      return r8(e) && !(r_.x || r_.y);
    }
    let sP = new WeakSet();
    function sT(e, t, i) {
      let { props: r } = e;
      if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
      e.animationState &&
        r.whileTap &&
        e.animationState.setActive("whileTap", "Start" === i);
      let n = r["onTap" + ("End" === i ? "" : i)];
      n && ej.postRender(() => n(t, r9(t)));
    }
    let sE = new WeakMap(),
      sj = new WeakMap(),
      sC = (e) => {
        let t = sE.get(e.target);
        t && t(e);
      },
      sM = (e) => {
        e.forEach(sC);
      },
      sA = { some: 0, all: 1 },
      sR = (function (e, t) {
        if ("u" < typeof Proxy) return iP;
        let i = new Map(),
          r = (i, r) => iP(i, r, e, t);
        return new Proxy((e, t) => r(e, t), {
          get: (n, s) =>
            "create" === s
              ? r
              : (i.has(s) || i.set(s, iP(s, void 0, e, t)), i.get(s)),
        });
      })(
        {
          animation: {
            Feature: class extends iT {
              constructor(e) {
                super(e),
                  e.animationState ||
                    (e.animationState = (function (e) {
                      let t = (t) =>
                          Promise.all(
                            t.map(({ animation: t, options: i }) =>
                              (function (e, t, i = {}) {
                                let r;
                                if (
                                  (e.notify("AnimationStart", t),
                                  Array.isArray(t))
                                )
                                  r = Promise.all(t.map((t) => rR(e, t, i)));
                                else if ("string" == typeof t) r = rR(e, t, i);
                                else {
                                  let n =
                                    "function" == typeof t
                                      ? iE(e, t, i.custom)
                                      : t;
                                  r = Promise.all(rM(e, n, i));
                                }
                                return r.then(() => {
                                  e.notify("AnimationComplete", t);
                                });
                              })(e, t, i)
                            )
                          ),
                        i = rB(),
                        r = !0,
                        n = !1,
                        s = (t) => (i, r) => {
                          let n = iE(
                            e,
                            r,
                            "exit" === t ? e.presenceContext?.custom : void 0
                          );
                          if (n) {
                            let { transition: e, transitionEnd: t, ...r } = n;
                            i = { ...i, ...r, ...t };
                          }
                          return i;
                        };
                      function o(o) {
                        let { props: a } = e,
                          l =
                            (function e(t) {
                              if (!t) return;
                              if (!t.isControllingVariants) {
                                let i = (t.parent && e(t.parent)) || {};
                                return (
                                  void 0 !== t.props.initial &&
                                    (i.initial = t.props.initial),
                                  i
                                );
                              }
                              let i = {};
                              for (let e = 0; e < rV; e++) {
                                let r = td[e],
                                  n = t.props[r];
                                (tu(n) || !1 === n) && (i[r] = n);
                              }
                              return i;
                            })(e.parent) || {},
                          u = [],
                          h = new Set(),
                          d = {},
                          c = 1 / 0;
                        for (let t = 0; t < rO; t++) {
                          var p, m;
                          let f = rL[t],
                            g = i[f],
                            y = void 0 !== a[f] ? a[f] : l[f],
                            v = tu(y),
                            x = f === o ? g.isActive : null;
                          !1 === x && (c = t);
                          let b = y === l[f] && y !== a[f] && v;
                          if (
                            (b &&
                              (r || n) &&
                              e.manuallyAnimateOnMount &&
                              (b = !1),
                            (g.protectedKeys = { ...d }),
                            (!g.isActive && null === x) ||
                              (!y && !g.prevProp) ||
                              tl(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          if ("exit" === f && g.isActive && !0 !== x) {
                            g.prevResolvedValues &&
                              (d = { ...d, ...g.prevResolvedValues });
                            continue;
                          }
                          let w =
                              ((p = g.prevProp),
                              "string" == typeof (m = y)
                                ? m !== p
                                : !!Array.isArray(m) && !rD(m, p)),
                            k =
                              w ||
                              (f === o && g.isActive && !b && v) ||
                              (t > c && v),
                            S = !1,
                            P = Array.isArray(y) ? y : [y],
                            T = P.reduce(s(f), {});
                          !1 === x && (T = {});
                          let { prevResolvedValues: E = {} } = g,
                            j = { ...E, ...T },
                            C = (t) => {
                              (k = !0),
                                h.has(t) && ((S = !0), h.delete(t)),
                                (g.needsAnimating[t] = !0);
                              let i = e.getValue(t);
                              i && (i.liveStyle = !1);
                            };
                          for (let e in j) {
                            let t = T[e],
                              i = E[e];
                            if (!d.hasOwnProperty(e))
                              (iM(t) && iM(i) ? !rD(t, i) || w : t !== i)
                                ? null != t
                                  ? C(e)
                                  : h.add(e)
                                : void 0 !== t && h.has(e)
                                ? C(e)
                                : (g.protectedKeys[e] = !0);
                          }
                          (g.prevProp = y),
                            (g.prevResolvedValues = T),
                            g.isActive && (d = { ...d, ...T }),
                            (r || n) && e.blockInitialAnimation && (k = !1);
                          let M = b && w,
                            A = !M || S;
                          k &&
                            A &&
                            u.push(
                              ...P.map((t) => {
                                let i = { type: f };
                                if (
                                  "string" == typeof t &&
                                  (r || n) &&
                                  !M &&
                                  e.manuallyAnimateOnMount &&
                                  e.parent
                                ) {
                                  let { parent: r } = e,
                                    n = iE(r, t);
                                  if (r.enteringChildren && n) {
                                    let { delayChildren: t } =
                                      n.transition || {};
                                    i.delay = rA(r.enteringChildren, e, t);
                                  }
                                }
                                return { animation: t, options: i };
                              })
                            );
                        }
                        if (h.size) {
                          let t = {};
                          if ("boolean" != typeof a.initial) {
                            let i = iE(
                              e,
                              Array.isArray(a.initial)
                                ? a.initial[0]
                                : a.initial
                            );
                            i && i.transition && (t.transition = i.transition);
                          }
                          h.forEach((i) => {
                            let r = e.getBaseTarget(i),
                              n = e.getValue(i);
                            n && (n.liveStyle = !0), (t[i] = r ?? null);
                          }),
                            u.push({ animation: t });
                        }
                        let f = !!u.length;
                        return (
                          r &&
                            (!1 === a.initial || a.initial === a.animate) &&
                            !e.manuallyAnimateOnMount &&
                            (f = !1),
                          (r = !1),
                          (n = !1),
                          f ? t(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: o,
                        setActive: function (t, r) {
                          if (i[t].isActive === r) return Promise.resolve();
                          e.variantChildren?.forEach((e) =>
                            e.animationState?.setActive(t, r)
                          ),
                            (i[t].isActive = r);
                          let n = o(t);
                          for (let e in i) i[e].protectedKeys = {};
                          return n;
                        },
                        setAnimateFunction: function (i) {
                          t = i(e);
                        },
                        getState: () => i,
                        reset: () => {
                          (i = rB()), (n = !0);
                        },
                      };
                    })(e));
              }
              updateAnimationControlsSubscription() {
                let { animate: e } = this.node.getProps();
                tl(e) && (this.unmountControls = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {
                this.node.animationState.reset(), this.unmountControls?.();
              }
            },
          },
          exit: {
            Feature: class extends iT {
              constructor() {
                super(...arguments),
                  (this.id = rN++),
                  (this.isExitComplete = !1);
              }
              update() {
                if (!this.node.presenceContext) return;
                let { isPresent: e, onExitComplete: t } =
                    this.node.presenceContext,
                  { isPresent: i } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === i) return;
                if (e && !1 === i) {
                  if (this.isExitComplete) {
                    let { initial: e, custom: t } = this.node.getProps();
                    if (
                      "string" == typeof e ||
                      ("object" == typeof e && null !== e && !Array.isArray(e))
                    ) {
                      let i = iE(this.node, e, t);
                      if (i) {
                        let { transition: e, transitionEnd: t, ...r } = i;
                        for (let e in r) this.node.getValue(e)?.jump(r[e]);
                      }
                    }
                    this.node.animationState.reset(),
                      this.node.animationState.animateChanges();
                  } else this.node.animationState.setActive("exit", !1);
                  this.isExitComplete = !1;
                  return;
                }
                let r = this.node.animationState.setActive("exit", !e);
                t &&
                  !e &&
                  r.then(() => {
                    (this.isExitComplete = !0), t(this.id);
                  });
              }
              mount() {
                let { register: e, onExitComplete: t } =
                  this.node.presenceContext || {};
                t && t(this.id), e && (this.unmount = e(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends iT {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                var e;
                let t;
                this.stopObserver?.();
                let { viewport: i = {} } = this.node.getProps(),
                  { root: r, margin: n, amount: s = "some", once: o } = i,
                  a = {
                    root: r ? r.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof s ? s : sA[s],
                  },
                  l = (e) => {
                    let { isIntersecting: t } = e;
                    if (
                      this.isInView === t ||
                      ((this.isInView = t), o && !t && this.hasEnteredView)
                    )
                      return;
                    t && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", t);
                    let { onViewportEnter: i, onViewportLeave: r } =
                        this.node.getProps(),
                      n = t ? i : r;
                    n && n(e);
                  };
                this.stopObserver =
                  ((e = this.node.current),
                  (t = (function ({ root: e, ...t }) {
                    let i = e || document;
                    sj.has(i) || sj.set(i, {});
                    let r = sj.get(i),
                      n = JSON.stringify(t);
                    return (
                      r[n] ||
                        (r[n] = new IntersectionObserver(sM, {
                          root: e,
                          ...t,
                        })),
                      r[n]
                    );
                  })(a)),
                  sE.set(e, l),
                  t.observe(e),
                  () => {
                    sE.delete(e), t.unobserve(e);
                  });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("u" < typeof IntersectionObserver) return;
                let { props: e, prevProps: t } = this.node;
                ["amount", "margin", "root"].some(
                  (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                    return (i) => e[i] !== t[i];
                  })(e, t)
                ) && this.startObserver();
              }
              unmount() {
                this.stopObserver?.(),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
            },
          },
          tap: {
            Feature: class extends iT {
              mount() {
                let { current: e } = this.node;
                if (!e) return;
                let { globalTapTarget: t, propagate: i } = this.node.props;
                this.unmount = (function (e, t, i = {}) {
                  let [r, n, s] = sg(e, i),
                    o = (e) => {
                      let r = e.currentTarget;
                      if (!sS(e) || sP.has(e)) return;
                      sb.add(r), i.stopPropagation && sP.add(e);
                      let s = t(r, e),
                        o = (e, t) => {
                          window.removeEventListener("pointerup", a),
                            window.removeEventListener("pointercancel", l),
                            sb.has(r) && sb.delete(r),
                            sS(e) &&
                              "function" == typeof s &&
                              s(e, { success: t });
                        },
                        a = (e) => {
                          o(
                            e,
                            r === window ||
                              r === document ||
                              i.useGlobalTarget ||
                              sx(r, e.target)
                          );
                        },
                        l = (e) => {
                          o(e, !1);
                        };
                      window.addEventListener("pointerup", a, n),
                        window.addEventListener("pointercancel", l, n);
                    };
                  return (
                    r.forEach((e) => {
                      ((i.useGlobalTarget ? window : e).addEventListener(
                        "pointerdown",
                        o,
                        n
                      ),
                      sv(e)) &&
                        (e.addEventListener("focus", (e) =>
                          ((e, t) => {
                            let i = e.currentTarget;
                            if (!i) return;
                            let r = sw(() => {
                              if (sb.has(i)) return;
                              sk(i, "down");
                              let e = sw(() => {
                                sk(i, "up");
                              });
                              i.addEventListener("keyup", e, t),
                                i.addEventListener(
                                  "blur",
                                  () => sk(i, "cancel"),
                                  t
                                );
                            });
                            i.addEventListener("keydown", r, t),
                              i.addEventListener(
                                "blur",
                                () => i.removeEventListener("keydown", r),
                                t
                              );
                          })(e, n)
                        ),
                        r4.has(e.tagName) ||
                          !0 === e.isContentEditable ||
                          e.hasAttribute("tabindex") ||
                          (e.tabIndex = 0));
                    }),
                    s
                  );
                })(
                  e,
                  (e, t) => (
                    sT(this.node, t, "Start"),
                    (e, { success: t }) =>
                      sT(this.node, e, t ? "End" : "Cancel")
                  ),
                  { useGlobalTarget: t, stopPropagation: i?.tap === !1 }
                );
              }
              unmount() {}
            },
          },
          focus: {
            Feature: class extends iT {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (t) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = iR(
                  rF(this.node.current, "focus", () => this.onFocus()),
                  rF(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends iT {
              mount() {
                let { current: e } = this.node;
                e &&
                  (this.unmount = (function (e, t, i = {}) {
                    let [r, n, s] = sg(e, i);
                    return (
                      r.forEach((e) => {
                        let i,
                          r = !1,
                          s = !1,
                          o = (t) => {
                            i && (i(t), (i = void 0)),
                              e.removeEventListener("pointerleave", l);
                          },
                          a = (e) => {
                            (r = !1),
                              window.removeEventListener("pointerup", a),
                              window.removeEventListener("pointercancel", a),
                              s && ((s = !1), o(e));
                          },
                          l = (e) => {
                            if ("touch" !== e.pointerType) {
                              if (r) {
                                s = !0;
                                return;
                              }
                              o(e);
                            }
                          };
                        e.addEventListener(
                          "pointerenter",
                          (r) => {
                            if ("touch" === r.pointerType || r_.x || r_.y)
                              return;
                            s = !1;
                            let o = t(e, r);
                            "function" == typeof o &&
                              ((i = o),
                              e.addEventListener("pointerleave", l, n));
                          },
                          n
                        ),
                          e.addEventListener(
                            "pointerdown",
                            () => {
                              (r = !0),
                                window.addEventListener("pointerup", a, n),
                                window.addEventListener("pointercancel", a, n);
                            },
                            n
                          );
                      }),
                      s
                    );
                  })(
                    e,
                    (e, t) => (
                      sy(this.node, t, "Start"), (e) => sy(this.node, e, "End")
                    )
                  ));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends iT {
              constructor() {
                super(...arguments), (this.removePointerDownListener = eS);
              }
              onPointerDown(e) {
                this.session = new nr(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: ne(this.node),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: i,
                  onPanEnd: r,
                } = this.node.getProps();
                return {
                  onSessionStart: ng(e),
                  onStart: ng(t),
                  onMove: ng(i),
                  onEnd: (e, t) => {
                    delete this.session, r && ej.postRender(() => r(e, t));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = r7(
                  this.node.current,
                  "pointerdown",
                  (e) => this.onPointerDown(e)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends iT {
              constructor(e) {
                super(e),
                  (this.removeGroupControls = eS),
                  (this.removeListeners = eS),
                  (this.controls = new np(e));
              }
              mount() {
                let { dragControls: e } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || eS);
              }
              update() {
                let { dragControls: e } = this.node.getProps(),
                  { dragControls: t } = this.node.prevProps || {};
                e !== t &&
                  (this.removeGroupControls(),
                  e && (this.removeGroupControls = e.subscribe(this.controls)));
              }
              unmount() {
                this.removeGroupControls(),
                  this.removeListeners(),
                  this.controls.isDragging || this.controls.endPanSession();
              }
            },
            ProjectionNode: sf,
            MeasureLayout: nk,
          },
          layout: { ProjectionNode: sf, MeasureLayout: nk },
        },
        (e, t) =>
          t.isSVG ?? t4(e)
            ? new t$(t)
            : new t2(t, { allowProjection: e !== t3.Fragment })
      );
    e.s(["motion", 0, sR], 93440);
  },
  90883,
  (e) => {
    "use strict";
    let t = (e = new Map(), t = null, i) => ({
        nextPart: e,
        validators: t,
        classGroupId: i,
      }),
      i = [],
      r = (e, t, i) => {
        if (0 == e.length - t) return i.classGroupId;
        let n = e[t],
          s = i.nextPart.get(n);
        if (s) {
          let i = r(e, t + 1, s);
          if (i) return i;
        }
        let o = i.validators;
        if (null === o) return;
        let a = 0 === t ? e.join("-") : e.slice(t).join("-"),
          l = o.length;
        for (let e = 0; e < l; e++) {
          let t = o[e];
          if (t.validator(a)) return t.classGroupId;
        }
      },
      n = (e, i) => {
        let r = t();
        for (let t in e) s(e[t], r, t, i);
        return r;
      },
      s = (e, t, i, r) => {
        let n = e.length;
        for (let s = 0; s < n; s++) o(e[s], t, i, r);
      },
      o = (e, t, i, r) => {
        "string" == typeof e
          ? a(e, t, i)
          : "function" == typeof e
          ? l(e, t, i, r)
          : u(e, t, i, r);
      },
      a = (e, t, i) => {
        ("" === e ? t : h(t, e)).classGroupId = i;
      },
      l = (e, t, i, r) => {
        d(e)
          ? s(e(r), t, i, r)
          : (null === t.validators && (t.validators = []),
            t.validators.push({ classGroupId: i, validator: e }));
      },
      u = (e, t, i, r) => {
        let n = Object.entries(e),
          o = n.length;
        for (let e = 0; e < o; e++) {
          let [o, a] = n[e];
          s(a, h(t, o), i, r);
        }
      },
      h = (e, i) => {
        let r = e,
          n = i.split("-"),
          s = n.length;
        for (let e = 0; e < s; e++) {
          let i = n[e],
            s = r.nextPart.get(i);
          s || ((s = t()), r.nextPart.set(i, s)), (r = s);
        }
        return r;
      },
      d = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      c = [],
      p = (e, t, i, r, n) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: i,
        maybePostfixModifierPosition: r,
        isExternal: n,
      }),
      m = /\s+/,
      f = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let i = "";
        for (let r = 0; r < e.length; r++)
          e[r] && (t = f(e[r])) && (i && (i += " "), (i += t));
        return i;
      },
      g = [],
      y = (e) => {
        let t = (t) => t[e] || g;
        return (t.isThemeGetter = !0), t;
      },
      v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      x = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      b = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
      w = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      k =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      P = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      T =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      E = (e) => b.test(e),
      j = (e) => !!e && !Number.isNaN(Number(e)),
      C = (e) => !!e && Number.isInteger(Number(e)),
      M = (e) => e.endsWith("%") && j(e.slice(0, -1)),
      A = (e) => w.test(e),
      R = () => !0,
      V = (e) => k.test(e) && !S.test(e),
      D = () => !1,
      L = (e) => P.test(e),
      O = (e) => T.test(e),
      I = (e) => !z(e) && !G(e),
      B = (e) =>
        e.startsWith("@container") &&
        (("/" === e[10] && void 0 !== e[11]) ||
          ("s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10)) ||
          ("n" === e[11] && void 0 !== e[18] && e.startsWith("-normal/", 10))),
      N = (e) => et(e, es, D),
      z = (e) => v.test(e),
      F = (e) => et(e, eo, V),
      _ = (e) => et(e, ea, j),
      $ = (e) => et(e, eu, R),
      U = (e) => et(e, el, D),
      W = (e) => et(e, er, D),
      H = (e) => et(e, en, O),
      X = (e) => et(e, eh, L),
      G = (e) => x.test(e),
      Y = (e) => ei(e, eo),
      K = (e) => ei(e, el),
      q = (e) => ei(e, er),
      Z = (e) => ei(e, es),
      J = (e) => ei(e, en),
      Q = (e) => ei(e, eh, !0),
      ee = (e) => ei(e, eu, !0),
      et = (e, t, i) => {
        let r = v.exec(e);
        return !!r && (r[1] ? t(r[1]) : i(r[2]));
      },
      ei = (e, t, i = !1) => {
        let r = x.exec(e);
        return !!r && (r[1] ? t(r[1]) : i);
      },
      er = (e) => "position" === e || "percentage" === e,
      en = (e) => "image" === e || "url" === e,
      es = (e) => "length" === e || "size" === e || "bg-size" === e,
      eo = (e) => "length" === e,
      ea = (e) => "number" === e,
      el = (e) => "family-name" === e,
      eu = (e) => "number" === e || "weight" === e,
      eh = (e) => "shadow" === e,
      ed = ((e, ...t) => {
        let s,
          o,
          a,
          l,
          u = (e) => {
            let t = o(e);
            if (t) return t;
            let i = ((e, t) => {
              let {
                  parseClassName: i,
                  getClassGroupId: r,
                  getConflictingClassGroupIds: n,
                  sortModifiers: s,
                  postfixLookupClassGroupIds: o,
                } = t,
                a = [],
                l = e.trim().split(m),
                u = "";
              for (let e = l.length - 1; e >= 0; e -= 1) {
                let t,
                  h = l[e],
                  {
                    isExternal: d,
                    modifiers: c,
                    hasImportantModifier: p,
                    baseClassName: m,
                    maybePostfixModifierPosition: f,
                  } = i(h);
                if (d) {
                  u = h + (u.length > 0 ? " " + u : u);
                  continue;
                }
                let g = !!f;
                if (g) {
                  let e = (t = r(m.substring(0, f))) && o[t] ? r(m) : void 0;
                  e && e !== t && ((t = e), (g = !1));
                } else t = r(m);
                if (!t) {
                  if (!g || !(t = r(m))) {
                    u = h + (u.length > 0 ? " " + u : u);
                    continue;
                  }
                  g = !1;
                }
                let y =
                    0 === c.length
                      ? ""
                      : 1 === c.length
                      ? c[0]
                      : s(c).join(":"),
                  v = p ? y + "!" : y,
                  x = v + t;
                if (a.indexOf(x) > -1) continue;
                a.push(x);
                let b = n(t, g);
                for (let e = 0; e < b.length; ++e) {
                  let t = b[e];
                  a.push(v + t);
                }
                u = h + (u.length > 0 ? " " + u : u);
              }
              return u;
            })(e, s);
            return a(e, i), i;
          };
        return (
          (l = (h) => {
            var d;
            let m;
            return (
              (o = (s = {
                cache: ((e) => {
                  if (e < 1) return { get: () => void 0, set: () => {} };
                  let t = 0,
                    i = Object.create(null),
                    r = Object.create(null),
                    n = (n, s) => {
                      (i[n] = s),
                        ++t > e &&
                          ((t = 0), (r = i), (i = Object.create(null)));
                    };
                  return {
                    get(e) {
                      let t = i[e];
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = r[e])
                        ? (n(e, t), t)
                        : void 0;
                    },
                    set(e, t) {
                      e in i ? (i[e] = t) : n(e, t);
                    },
                  };
                })((d = t.reduce((e, t) => t(e), e())).cacheSize),
                parseClassName: ((e) => {
                  let { prefix: t, experimentalParseClassName: i } = e,
                    r = (e) => {
                      let t,
                        i = [],
                        r = 0,
                        n = 0,
                        s = 0,
                        o = e.length;
                      for (let a = 0; a < o; a++) {
                        let o = e[a];
                        if (0 === r && 0 === n) {
                          if (":" === o) {
                            i.push(e.slice(s, a)), (s = a + 1);
                            continue;
                          }
                          if ("/" === o) {
                            t = a;
                            continue;
                          }
                        }
                        "[" === o
                          ? r++
                          : "]" === o
                          ? r--
                          : "(" === o
                          ? n++
                          : ")" === o && n--;
                      }
                      let a = 0 === i.length ? e : e.slice(s),
                        l = a,
                        u = !1;
                      return (
                        a.endsWith("!")
                          ? ((l = a.slice(0, -1)), (u = !0))
                          : a.startsWith("!") && ((l = a.slice(1)), (u = !0)),
                        p(i, u, l, t && t > s ? t - s : void 0)
                      );
                    };
                  if (t) {
                    let e = t + ":",
                      i = r;
                    r = (t) =>
                      t.startsWith(e)
                        ? i(t.slice(e.length))
                        : p(c, !1, t, void 0, !0);
                  }
                  if (i) {
                    let e = r;
                    r = (t) => i({ className: t, parseClassName: e });
                  }
                  return r;
                })(d),
                sortModifiers:
                  ((m = new Map()),
                  d.orderSensitiveModifiers.forEach((e, t) => {
                    m.set(e, 1e6 + t);
                  }),
                  (e) => {
                    let t = [],
                      i = [];
                    for (let r = 0; r < e.length; r++) {
                      let n = e[r],
                        s = "[" === n[0],
                        o = m.has(n);
                      s || o
                        ? (i.length > 0 && (i.sort(), t.push(...i), (i = [])),
                          t.push(n))
                        : i.push(n);
                    }
                    return i.length > 0 && (i.sort(), t.push(...i)), t;
                  }),
                postfixLookupClassGroupIds: ((e) => {
                  let t = Object.create(null),
                    i = e.postfixLookupClassGroups;
                  if (i) for (let e = 0; e < i.length; e++) t[i[e]] = !0;
                  return t;
                })(d),
                ...((e) => {
                  let t = ((e) => {
                      let { theme: t, classGroups: i } = e;
                      return n(i, t);
                    })(e),
                    {
                      conflictingClassGroups: s,
                      conflictingClassGroupModifiers: o,
                    } = e;
                  return {
                    getClassGroupId: (e) => {
                      if (e.startsWith("[") && e.endsWith("]")) {
                        var i;
                        let t, r, n;
                        return -1 === (i = e).slice(1, -1).indexOf(":")
                          ? void 0
                          : ((r = (t = i.slice(1, -1)).indexOf(":")),
                            (n = t.slice(0, r)) ? "arbitrary.." + n : void 0);
                      }
                      let n = e.split("-"),
                        s = +("" === n[0] && n.length > 1);
                      return r(n, s, t);
                    },
                    getConflictingClassGroupIds: (e, t) => {
                      if (t) {
                        let t = o[e],
                          r = s[e];
                        if (t) {
                          if (r) {
                            let e = Array(r.length + t.length);
                            for (let t = 0; t < r.length; t++) e[t] = r[t];
                            for (let i = 0; i < t.length; i++)
                              e[r.length + i] = t[i];
                            return e;
                          }
                          return t;
                        }
                        return r || i;
                      }
                      return s[e] || i;
                    },
                  };
                })(d),
              }).cache.get),
              (a = s.cache.set),
              (l = u),
              u(h)
            );
          }),
          (...e) =>
            l(
              ((...e) => {
                let t,
                  i,
                  r = 0,
                  n = "";
                for (; r < e.length; )
                  (t = e[r++]) && (i = f(t)) && (n && (n += " "), (n += i));
                return n;
              })(...e)
            )
        );
      })(() => {
        let e = y("color"),
          t = y("font"),
          i = y("text"),
          r = y("font-weight"),
          n = y("tracking"),
          s = y("leading"),
          o = y("breakpoint"),
          a = y("container"),
          l = y("spacing"),
          u = y("radius"),
          h = y("shadow"),
          d = y("inset-shadow"),
          c = y("text-shadow"),
          p = y("drop-shadow"),
          m = y("blur"),
          f = y("perspective"),
          g = y("aspect"),
          v = y("ease"),
          x = y("animate"),
          b = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          w = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          k = () => [...w(), G, z],
          S = () => ["auto", "hidden", "clip", "visible", "scroll"],
          P = () => ["auto", "contain", "none"],
          T = () => [G, z, l],
          V = () => [E, "full", "auto", ...T()],
          D = () => [C, "none", "subgrid", G, z],
          L = () => ["auto", { span: ["full", C, G, z] }, C, G, z],
          O = () => [C, "auto", G, z],
          et = () => ["auto", "min", "max", "fr", G, z],
          ei = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          er = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          en = () => ["auto", ...T()],
          es = () => [
            E,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...T(),
          ],
          eo = () => [
            E,
            "screen",
            "full",
            "dvw",
            "lvw",
            "svw",
            "min",
            "max",
            "fit",
            ...T(),
          ],
          ea = () => [
            E,
            "screen",
            "full",
            "lh",
            "dvh",
            "lvh",
            "svh",
            "min",
            "max",
            "fit",
            ...T(),
          ],
          el = () => [e, G, z],
          eu = () => [...w(), q, W, { position: [G, z] }],
          eh = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          ed = () => ["auto", "cover", "contain", Z, N, { size: [G, z] }],
          ec = () => [M, Y, F],
          ep = () => ["", "none", "full", u, G, z],
          em = () => ["", j, Y, F],
          ef = () => ["solid", "dashed", "dotted", "double"],
          eg = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          ey = () => [j, M, q, W],
          ev = () => ["", "none", m, G, z],
          ex = () => ["none", j, G, z],
          eb = () => ["none", j, G, z],
          ew = () => [j, G, z],
          ek = () => [E, "full", ...T()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [A],
            breakpoint: [A],
            color: [R],
            container: [A],
            "drop-shadow": [A],
            ease: ["in", "out", "in-out"],
            font: [I],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [A],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [A],
            shadow: [A],
            spacing: ["px", j],
            text: [A],
            "text-shadow": [A],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", E, z, G, g] }],
            container: ["container"],
            "container-type": [{ "@container": ["", "normal", "size", G, z] }],
            "container-named": [B],
            columns: [{ columns: [j, z, G, a] }],
            "break-after": [{ "break-after": b() }],
            "break-before": [{ "break-before": b() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: k() }],
            overflow: [{ overflow: S() }],
            "overflow-x": [{ "overflow-x": S() }],
            "overflow-y": [{ "overflow-y": S() }],
            overscroll: [{ overscroll: P() }],
            "overscroll-x": [{ "overscroll-x": P() }],
            "overscroll-y": [{ "overscroll-y": P() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: V() }],
            "inset-x": [{ "inset-x": V() }],
            "inset-y": [{ "inset-y": V() }],
            start: [{ "inset-s": V(), start: V() }],
            end: [{ "inset-e": V(), end: V() }],
            "inset-bs": [{ "inset-bs": V() }],
            "inset-be": [{ "inset-be": V() }],
            top: [{ top: V() }],
            right: [{ right: V() }],
            bottom: [{ bottom: V() }],
            left: [{ left: V() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [C, "auto", G, z] }],
            basis: [{ basis: [E, "full", "auto", a, ...T()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [j, E, "auto", "initial", "none", z] }],
            grow: [{ grow: ["", j, G, z] }],
            shrink: [{ shrink: ["", j, G, z] }],
            order: [{ order: [C, "first", "last", "none", G, z] }],
            "grid-cols": [{ "grid-cols": D() }],
            "col-start-end": [{ col: L() }],
            "col-start": [{ "col-start": O() }],
            "col-end": [{ "col-end": O() }],
            "grid-rows": [{ "grid-rows": D() }],
            "row-start-end": [{ row: L() }],
            "row-start": [{ "row-start": O() }],
            "row-end": [{ "row-end": O() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": et() }],
            "auto-rows": [{ "auto-rows": et() }],
            gap: [{ gap: T() }],
            "gap-x": [{ "gap-x": T() }],
            "gap-y": [{ "gap-y": T() }],
            "justify-content": [{ justify: [...ei(), "normal"] }],
            "justify-items": [{ "justify-items": [...er(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...er()] }],
            "align-content": [{ content: ["normal", ...ei()] }],
            "align-items": [{ items: [...er(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...er(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": ei() }],
            "place-items": [{ "place-items": [...er(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...er()] }],
            p: [{ p: T() }],
            px: [{ px: T() }],
            py: [{ py: T() }],
            ps: [{ ps: T() }],
            pe: [{ pe: T() }],
            pbs: [{ pbs: T() }],
            pbe: [{ pbe: T() }],
            pt: [{ pt: T() }],
            pr: [{ pr: T() }],
            pb: [{ pb: T() }],
            pl: [{ pl: T() }],
            m: [{ m: en() }],
            mx: [{ mx: en() }],
            my: [{ my: en() }],
            ms: [{ ms: en() }],
            me: [{ me: en() }],
            mbs: [{ mbs: en() }],
            mbe: [{ mbe: en() }],
            mt: [{ mt: en() }],
            mr: [{ mr: en() }],
            mb: [{ mb: en() }],
            ml: [{ ml: en() }],
            "space-x": [{ "space-x": T() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": T() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: es() }],
            "inline-size": [{ inline: ["auto", ...eo()] }],
            "min-inline-size": [{ "min-inline": ["auto", ...eo()] }],
            "max-inline-size": [{ "max-inline": ["none", ...eo()] }],
            "block-size": [{ block: ["auto", ...ea()] }],
            "min-block-size": [{ "min-block": ["auto", ...ea()] }],
            "max-block-size": [{ "max-block": ["none", ...ea()] }],
            w: [{ w: [a, "screen", ...es()] }],
            "min-w": [{ "min-w": [a, "screen", "none", ...es()] }],
            "max-w": [
              {
                "max-w": [
                  a,
                  "screen",
                  "none",
                  "prose",
                  { screen: [o] },
                  ...es(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...es()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...es()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...es()] }],
            "font-size": [{ text: ["base", i, Y, F] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [r, ee, $] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  M,
                  z,
                ],
              },
            ],
            "font-family": [{ font: [K, U, t] }],
            "font-features": [{ "font-features": [z] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [n, G, z] }],
            "line-clamp": [{ "line-clamp": [j, "none", G, _] }],
            leading: [{ leading: [s, ...T()] }],
            "list-image": [{ "list-image": ["none", G, z] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", G, z] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: el() }],
            "text-color": [{ text: el() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...ef(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [j, "from-font", "auto", G, F] },
            ],
            "text-decoration-color": [{ decoration: el() }],
            "underline-offset": [{ "underline-offset": [j, "auto", G, z] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: T() }],
            "tab-size": [{ tab: [C, G, z] }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  G,
                  z,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", G, z] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: eu() }],
            "bg-repeat": [{ bg: eh() }],
            "bg-size": [{ bg: ed() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      C,
                      G,
                      z,
                    ],
                    radial: ["", G, z],
                    conic: [C, G, z],
                  },
                  J,
                  H,
                ],
              },
            ],
            "bg-color": [{ bg: el() }],
            "gradient-from-pos": [{ from: ec() }],
            "gradient-via-pos": [{ via: ec() }],
            "gradient-to-pos": [{ to: ec() }],
            "gradient-from": [{ from: el() }],
            "gradient-via": [{ via: el() }],
            "gradient-to": [{ to: el() }],
            rounded: [{ rounded: ep() }],
            "rounded-s": [{ "rounded-s": ep() }],
            "rounded-e": [{ "rounded-e": ep() }],
            "rounded-t": [{ "rounded-t": ep() }],
            "rounded-r": [{ "rounded-r": ep() }],
            "rounded-b": [{ "rounded-b": ep() }],
            "rounded-l": [{ "rounded-l": ep() }],
            "rounded-ss": [{ "rounded-ss": ep() }],
            "rounded-se": [{ "rounded-se": ep() }],
            "rounded-ee": [{ "rounded-ee": ep() }],
            "rounded-es": [{ "rounded-es": ep() }],
            "rounded-tl": [{ "rounded-tl": ep() }],
            "rounded-tr": [{ "rounded-tr": ep() }],
            "rounded-br": [{ "rounded-br": ep() }],
            "rounded-bl": [{ "rounded-bl": ep() }],
            "border-w": [{ border: em() }],
            "border-w-x": [{ "border-x": em() }],
            "border-w-y": [{ "border-y": em() }],
            "border-w-s": [{ "border-s": em() }],
            "border-w-e": [{ "border-e": em() }],
            "border-w-bs": [{ "border-bs": em() }],
            "border-w-be": [{ "border-be": em() }],
            "border-w-t": [{ "border-t": em() }],
            "border-w-r": [{ "border-r": em() }],
            "border-w-b": [{ "border-b": em() }],
            "border-w-l": [{ "border-l": em() }],
            "divide-x": [{ "divide-x": em() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": em() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...ef(), "hidden", "none"] }],
            "divide-style": [{ divide: [...ef(), "hidden", "none"] }],
            "border-color": [{ border: el() }],
            "border-color-x": [{ "border-x": el() }],
            "border-color-y": [{ "border-y": el() }],
            "border-color-s": [{ "border-s": el() }],
            "border-color-e": [{ "border-e": el() }],
            "border-color-bs": [{ "border-bs": el() }],
            "border-color-be": [{ "border-be": el() }],
            "border-color-t": [{ "border-t": el() }],
            "border-color-r": [{ "border-r": el() }],
            "border-color-b": [{ "border-b": el() }],
            "border-color-l": [{ "border-l": el() }],
            "divide-color": [{ divide: el() }],
            "outline-style": [{ outline: [...ef(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [j, G, z] }],
            "outline-w": [{ outline: ["", j, Y, F] }],
            "outline-color": [{ outline: el() }],
            shadow: [{ shadow: ["", "none", h, Q, X] }],
            "shadow-color": [{ shadow: el() }],
            "inset-shadow": [{ "inset-shadow": ["none", d, Q, X] }],
            "inset-shadow-color": [{ "inset-shadow": el() }],
            "ring-w": [{ ring: em() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: el() }],
            "ring-offset-w": [{ "ring-offset": [j, F] }],
            "ring-offset-color": [{ "ring-offset": el() }],
            "inset-ring-w": [{ "inset-ring": em() }],
            "inset-ring-color": [{ "inset-ring": el() }],
            "text-shadow": [{ "text-shadow": ["none", c, Q, X] }],
            "text-shadow-color": [{ "text-shadow": el() }],
            opacity: [{ opacity: [j, G, z] }],
            "mix-blend": [
              { "mix-blend": [...eg(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": eg() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [j] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": ey() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": ey() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": el() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": el() }],
            "mask-image-t-from-pos": [{ "mask-t-from": ey() }],
            "mask-image-t-to-pos": [{ "mask-t-to": ey() }],
            "mask-image-t-from-color": [{ "mask-t-from": el() }],
            "mask-image-t-to-color": [{ "mask-t-to": el() }],
            "mask-image-r-from-pos": [{ "mask-r-from": ey() }],
            "mask-image-r-to-pos": [{ "mask-r-to": ey() }],
            "mask-image-r-from-color": [{ "mask-r-from": el() }],
            "mask-image-r-to-color": [{ "mask-r-to": el() }],
            "mask-image-b-from-pos": [{ "mask-b-from": ey() }],
            "mask-image-b-to-pos": [{ "mask-b-to": ey() }],
            "mask-image-b-from-color": [{ "mask-b-from": el() }],
            "mask-image-b-to-color": [{ "mask-b-to": el() }],
            "mask-image-l-from-pos": [{ "mask-l-from": ey() }],
            "mask-image-l-to-pos": [{ "mask-l-to": ey() }],
            "mask-image-l-from-color": [{ "mask-l-from": el() }],
            "mask-image-l-to-color": [{ "mask-l-to": el() }],
            "mask-image-x-from-pos": [{ "mask-x-from": ey() }],
            "mask-image-x-to-pos": [{ "mask-x-to": ey() }],
            "mask-image-x-from-color": [{ "mask-x-from": el() }],
            "mask-image-x-to-color": [{ "mask-x-to": el() }],
            "mask-image-y-from-pos": [{ "mask-y-from": ey() }],
            "mask-image-y-to-pos": [{ "mask-y-to": ey() }],
            "mask-image-y-from-color": [{ "mask-y-from": el() }],
            "mask-image-y-to-color": [{ "mask-y-to": el() }],
            "mask-image-radial": [{ "mask-radial": [G, z] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": ey() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": ey() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": el() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": el() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": w() }],
            "mask-image-conic-pos": [{ "mask-conic": [j] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": ey() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": ey() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": el() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": el() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: eu() }],
            "mask-repeat": [{ mask: eh() }],
            "mask-size": [{ mask: ed() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", G, z] }],
            filter: [{ filter: ["", "none", G, z] }],
            blur: [{ blur: ev() }],
            brightness: [{ brightness: [j, G, z] }],
            contrast: [{ contrast: [j, G, z] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, Q, X] }],
            "drop-shadow-color": [{ "drop-shadow": el() }],
            grayscale: [{ grayscale: ["", j, G, z] }],
            "hue-rotate": [{ "hue-rotate": [j, G, z] }],
            invert: [{ invert: ["", j, G, z] }],
            saturate: [{ saturate: [j, G, z] }],
            sepia: [{ sepia: ["", j, G, z] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", G, z] }],
            "backdrop-blur": [{ "backdrop-blur": ev() }],
            "backdrop-brightness": [{ "backdrop-brightness": [j, G, z] }],
            "backdrop-contrast": [{ "backdrop-contrast": [j, G, z] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", j, G, z] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [j, G, z] }],
            "backdrop-invert": [{ "backdrop-invert": ["", j, G, z] }],
            "backdrop-opacity": [{ "backdrop-opacity": [j, G, z] }],
            "backdrop-saturate": [{ "backdrop-saturate": [j, G, z] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", j, G, z] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": T() }],
            "border-spacing-x": [{ "border-spacing-x": T() }],
            "border-spacing-y": [{ "border-spacing-y": T() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  G,
                  z,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [j, "initial", G, z] }],
            ease: [{ ease: ["linear", "initial", v, G, z] }],
            delay: [{ delay: [j, G, z] }],
            animate: [{ animate: ["none", x, G, z] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [f, G, z] }],
            "perspective-origin": [{ "perspective-origin": k() }],
            rotate: [{ rotate: ex() }],
            "rotate-x": [{ "rotate-x": ex() }],
            "rotate-y": [{ "rotate-y": ex() }],
            "rotate-z": [{ "rotate-z": ex() }],
            scale: [{ scale: eb() }],
            "scale-x": [{ "scale-x": eb() }],
            "scale-y": [{ "scale-y": eb() }],
            "scale-z": [{ "scale-z": eb() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: ew() }],
            "skew-x": [{ "skew-x": ew() }],
            "skew-y": [{ "skew-y": ew() }],
            transform: [{ transform: [G, z, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: k() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: ek() }],
            "translate-x": [{ "translate-x": ek() }],
            "translate-y": [{ "translate-y": ek() }],
            "translate-z": [{ "translate-z": ek() }],
            "translate-none": ["translate-none"],
            zoom: [{ zoom: [C, G, z] }],
            accent: [{ accent: el() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: el() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  G,
                  z,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scrollbar-thumb-color": [{ "scrollbar-thumb": el() }],
            "scrollbar-track-color": [{ "scrollbar-track": el() }],
            "scrollbar-gutter": [
              { "scrollbar-gutter": ["auto", "stable", "both"] },
            ],
            "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
            "scroll-m": [{ "scroll-m": T() }],
            "scroll-mx": [{ "scroll-mx": T() }],
            "scroll-my": [{ "scroll-my": T() }],
            "scroll-ms": [{ "scroll-ms": T() }],
            "scroll-me": [{ "scroll-me": T() }],
            "scroll-mbs": [{ "scroll-mbs": T() }],
            "scroll-mbe": [{ "scroll-mbe": T() }],
            "scroll-mt": [{ "scroll-mt": T() }],
            "scroll-mr": [{ "scroll-mr": T() }],
            "scroll-mb": [{ "scroll-mb": T() }],
            "scroll-ml": [{ "scroll-ml": T() }],
            "scroll-p": [{ "scroll-p": T() }],
            "scroll-px": [{ "scroll-px": T() }],
            "scroll-py": [{ "scroll-py": T() }],
            "scroll-ps": [{ "scroll-ps": T() }],
            "scroll-pe": [{ "scroll-pe": T() }],
            "scroll-pbs": [{ "scroll-pbs": T() }],
            "scroll-pbe": [{ "scroll-pbe": T() }],
            "scroll-pt": [{ "scroll-pt": T() }],
            "scroll-pr": [{ "scroll-pr": T() }],
            "scroll-pb": [{ "scroll-pb": T() }],
            "scroll-pl": [{ "scroll-pl": T() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  G,
                  z,
                ],
              },
            ],
            fill: [{ fill: ["none", ...el()] }],
            "stroke-w": [{ stroke: [j, Y, F, _] }],
            stroke: [{ stroke: ["none", ...el()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            "container-named": ["container-type"],
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "inset-bs",
              "inset-be",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-bs",
              "border-w-be",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-bs",
              "border-color-be",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mbs",
              "scroll-mbe",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pbs",
              "scroll-pbe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          postfixLookupClassGroups: ["container-type"],
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    e.s(
      [
        "cn",
        0,
        function (...e) {
          return ed(
            (function () {
              for (var e, t, i = 0, r = "", n = arguments.length; i < n; i++)
                (e = arguments[i]) &&
                  (t = (function e(t) {
                    var i,
                      r,
                      n = "";
                    if ("string" == typeof t || "number" == typeof t) n += t;
                    else if ("object" == typeof t)
                      if (Array.isArray(t)) {
                        var s = t.length;
                        for (i = 0; i < s; i++)
                          t[i] && (r = e(t[i])) && (n && (n += " "), (n += r));
                      } else for (r in t) t[r] && (n && (n += " "), (n += r));
                    return n;
                  })(e)) &&
                  (r && (r += " "), (r += t));
              return r;
            })(e)
          );
        },
      ],
      90883
    );
  },
  37677,
  4404,
  (e) => {
    "use strict";
    e.i(24290);
    let t = "0xa1fd36e7e342de691f103a8490f496c48d889e3e",
      i = `https://app.uniswap.org/swap?chain=robinhood&outputCurrency=${t}`;
    e.s(
      [
        "site",
        0,
        {
          name: "Vladhood",
          ticker: "$VLAD",
          tagline: "The official Robinhood chain mascot.",
          description:
            "Vladhood ($VLAD) the official Robinhood chain mascot. 🏹",
          contract: t,
          chain: "Robinhood",
          links: {
            buy: i,
            twitter: "https://x.com/vladhood_X",
          },
          nav: [
            { label: "Lore", href: "#about" },
            { label: "How to Buy", href: "#how-to-buy" },
          ],
        },
      ],
      37677
    );
    var r = e.i(76172),
      n = e.i(90883);
    let s = {
        gold: "bg-gold-gradient text-black hover:brightness-110 active:brightness-95 shadow-[0_8px_30px_-8px_rgba(212,162,74,0.7)]",
        outline:
          "bg-transparent text-gold border border-gold/50 hover:border-gold hover:bg-gold/10",
        ghost: "bg-transparent text-foreground hover:bg-foreground/5",
      },
      o = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      };
    e.s(
      [
        "LinkButton",
        0,
        function ({ className: e, variant: t = "gold", size: i = "md", ...a }) {
          return (0, r.jsx)("a", {
            className: (0, n.cn)(
              "inline-flex max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
              s[t],
              o[i],
              e
            ),
            ...a,
          });
        },
      ],
      4404
    );
  },
  94639,
  (e) => {
    "use strict";
    var t = e.i(76172),
      i = e.i(96505),
      r = e.i(92877),
      n = e.i(48847);
    e.i(24290);
    var s = e.i(84654),
      o = e.i(8647),
      a = e.i(65493),
      l = e.i(31737),
      u = e.i(56122),
      h = i,
      d = e.i(3940);
    function c(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class p extends h.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (
          (0, u.isHTMLElement)(t) &&
          e.isPresent &&
          !this.props.isPresent &&
          !1 !== this.props.pop
        ) {
          let e = t.offsetParent,
            i = ((0, u.isHTMLElement)(e) && e.offsetWidth) || 0,
            r = ((0, u.isHTMLElement)(e) && e.offsetHeight) || 0,
            n = getComputedStyle(t),
            s = this.props.sizeRef.current;
          (s.height = parseFloat(n.height)),
            (s.width = parseFloat(n.width)),
            (s.top = t.offsetTop),
            (s.left = t.offsetLeft),
            (s.right = i - s.width - s.left),
            (s.bottom = r - s.height - s.top),
            (s.direction = n.direction);
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function m({
      children: e,
      isPresent: r,
      anchorX: n,
      anchorY: s,
      root: o,
      pop: a,
    }) {
      let l = (0, h.useId)(),
        u = (0, h.useRef)(null),
        f = (0, h.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          direction: "ltr",
        }),
        { nonce: g } = (0, h.useContext)(d.MotionConfigContext),
        y = (function (...e) {
          return i.useCallback(
            (function (...e) {
              return (t) => {
                let i = !1,
                  r = e.map((e) => {
                    let r = c(e, t);
                    return i || "function" != typeof r || (i = !0), r;
                  });
                if (i)
                  return () => {
                    for (let t = 0; t < r.length; t++) {
                      let i = r[t];
                      "function" == typeof i ? i() : c(e[t], null);
                    }
                  };
              };
            })(...e),
            e
          );
        })(u, e.props?.ref ?? e?.ref);
      return (
        (0, h.useInsertionEffect)(() => {
          let {
            width: e,
            height: t,
            top: i,
            left: h,
            right: d,
            bottom: c,
            direction: p,
          } = f.current;
          if (r || !1 === a || !u.current || !e || !t) return;
          let m = "rtl" === p,
            y =
              "left" === n
                ? m
                  ? `right: ${d}`
                  : `left: ${h}`
                : m
                ? `left: ${h}`
                : `right: ${d}`,
            v = "bottom" === s ? `bottom: ${c}` : `top: ${i}`;
          u.current.dataset.motionPopId = l;
          let x = document.createElement("style");
          g && (x.nonce = g);
          let b = o ?? document.head;
          return (
            b.appendChild(x),
            x.sheet &&
              x.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${y}px !important;
            ${v}px !important;
          }
        `),
            () => {
              u.current?.removeAttribute("data-motion-pop-id"),
                b.contains(x) && b.removeChild(x);
            }
          );
        }, [r]),
        (0, t.jsx)(p, {
          isPresent: r,
          childRef: u,
          sizeRef: f,
          pop: a,
          children: !1 === a ? e : h.cloneElement(e, { ref: y }),
        })
      );
    }
    let f = ({
      children: e,
      initial: r,
      isPresent: n,
      onExitComplete: s,
      custom: a,
      presenceAffectsLayout: u,
      mode: h,
      anchorX: d,
      anchorY: c,
      root: p,
    }) => {
      let f = (0, o.useConstant)(g),
        y = (0, i.useId)(),
        v = !0,
        x = (0, i.useMemo)(
          () => (
            (v = !1),
            {
              id: y,
              initial: r,
              isPresent: n,
              custom: a,
              onExitComplete: (e) => {
                for (let t of (f.set(e, !0), f.values())) if (!t) return;
                s && s();
              },
              register: (e) => (f.set(e, !1), () => f.delete(e)),
            }
          ),
          [n, f, s]
        );
      return (
        u && v && (x = { ...x }),
        (0, i.useMemo)(() => {
          f.forEach((e, t) => f.set(t, !1));
        }, [n]),
        i.useEffect(() => {
          n || f.size || !s || s();
        }, [n]),
        (e = (0, t.jsx)(m, {
          pop: "popLayout" === h,
          isPresent: n,
          anchorX: d,
          anchorY: c,
          root: p,
          children: e,
        })),
        (0, t.jsx)(l.PresenceContext.Provider, { value: x, children: e })
      );
    };
    function g() {
      return new Map();
    }
    var y = e.i(71108);
    let v = (e) => e.key || "";
    function x(e) {
      let t = [];
      return (
        i.Children.forEach(e, (e) => {
          (0, i.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    let b = ({
      children: e,
      custom: r,
      initial: n = !0,
      onExitComplete: l,
      presenceAffectsLayout: u = !0,
      mode: h = "sync",
      propagate: d = !1,
      anchorX: c = "left",
      anchorY: p = "top",
      root: m,
    }) => {
      let [g, b] = (0, y.usePresence)(d),
        w = (0, i.useMemo)(() => x(e), [e]),
        k = d && !g ? [] : w.map(v),
        S = (0, i.useRef)(!0),
        P = (0, i.useRef)(w),
        T = (0, o.useConstant)(() => new Map()),
        E = (0, i.useRef)(new Set()),
        [j, C] = (0, i.useState)(w),
        [M, A] = (0, i.useState)(w);
      (0, a.useIsomorphicLayoutEffect)(() => {
        (S.current = !1), (P.current = w);
        for (let e = 0; e < M.length; e++) {
          let t = v(M[e]);
          k.includes(t)
            ? (T.delete(t), E.current.delete(t))
            : !0 !== T.get(t) && T.set(t, !1);
        }
      }, [M, k.length, k.join("-")]);
      let R = [];
      if (w !== j) {
        let e = [...w];
        for (let t = 0; t < M.length; t++) {
          let i = M[t],
            r = v(i);
          k.includes(r) || (e.splice(t, 0, i), R.push(i));
        }
        return "wait" === h && R.length && (e = R), A(x(e)), C(w), null;
      }
      let { forceRender: V } = (0, i.useContext)(s.LayoutGroupContext);
      return (0, t.jsx)(t.Fragment, {
        children: M.map((e) => {
          let i = v(e),
            s = (!d || !!g) && (w === M || k.includes(i));
          return (0, t.jsx)(
            f,
            {
              isPresent: s,
              initial: (!S.current || !!n) && void 0,
              custom: r,
              presenceAffectsLayout: u,
              mode: h,
              root: m,
              onExitComplete: s
                ? void 0
                : () => {
                    if (E.current.has(i) || !T.has(i)) return;
                    E.current.add(i), T.set(i, !0);
                    let e = !0;
                    T.forEach((t) => {
                      t || (e = !1);
                    }),
                      e && (V?.(), A(P.current), d && b?.(), l && l());
                  },
              anchorX: c,
              anchorY: p,
              children: e,
            },
            i
          );
        }),
      });
    };
    var w = e.i(93440),
      k = e.i(37677),
      S = e.i(4404);
    e.s(
      [
        "Header",
        0,
        function () {
          let [e, s] = (0, i.useState)(!1);
          return (0, t.jsxs)(w.motion.header, {
            initial: { y: -60, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            className:
              "sticky top-0 z-50 border-b border-gold/15 bg-background/70 backdrop-blur-md",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8",
                children: [
                  (0, t.jsxs)(n.default, {
                    href: "#",
                    className: "flex items-center gap-2 sm:gap-3",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "ring-gold relative h-8 w-8 overflow-hidden rounded-full sm:h-9 sm:w-9",
                        children: (0, t.jsx)(r.default, {
                          src: "/images/img-toes.jpeg",
                          alt: "Vladhood logo",
                          fill: !0,
                          sizes: "36px",
                          className: "object-cover",
                        }),
                      }),
                      (0, t.jsx)("span", {
                        className:
                          "text-base font-black tracking-widest text-gold-gradient sm:text-lg",
                        children: k.site.ticker,
                      }),
                    ],
                  }),
                  (0, t.jsx)("nav", {
                    className: "hidden items-center gap-8 md:flex",
                    children: k.site.nav.map((e) =>
                      (0, t.jsx)(
                        "a",
                        {
                          href: e.href,
                          className:
                            "text-sm font-semibold uppercase tracking-wider text-muted transition-colors hover:text-gold",
                          children: e.label,
                        },
                        e.href
                      )
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, t.jsxs)(S.LinkButton, {
                        href: k.site.links.buy,
                        target: "_blank",
                        rel: "noreferrer",
                        size: "sm",
                        className: "hidden px-4 sm:inline-flex",
                        children: ["Buy ", k.site.ticker],
                      }),
                      (0, t.jsx)(S.LinkButton, {
                        href: k.site.links.buy,
                        target: "_blank",
                        rel: "noreferrer",
                        size: "sm",
                        className: "px-3 text-xs sm:hidden",
                        children: "Buy",
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => s((e) => !e),
                        "aria-label": "Toggle menu",
                        "aria-expanded": e,
                        className:
                          "ring-gold flex h-9 w-9 items-center justify-center rounded-full bg-card text-gold md:hidden",
                        children: (0, t.jsxs)("span", {
                          className: "relative block h-3 w-4",
                          children: [
                            (0, t.jsx)("span", {
                              className: `absolute left-0 right-0 top-0 h-0.5 bg-current transition-transform ${
                                e ? "translate-y-1.5 rotate-45" : ""
                              }`,
                            }),
                            (0, t.jsx)("span", {
                              className: `absolute bottom-0 left-0 right-0 h-0.5 bg-current transition-transform ${
                                e ? "-translate-y-1 -rotate-45" : ""
                              }`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(b, {
                children: e
                  ? (0, t.jsx)(
                      w.motion.nav,
                      {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.25, ease: "easeOut" },
                        className:
                          "overflow-hidden border-t border-gold/15 md:hidden",
                        children: (0, t.jsx)("div", {
                          className:
                            "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
                          children: k.site.nav.map((e) =>
                            (0, t.jsx)(
                              "a",
                              {
                                href: e.href,
                                onClick: () => s(!1),
                                className:
                                  "rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-wider text-muted transition-colors hover:bg-gold/10 hover:text-gold",
                                children: e.label,
                              },
                              e.href
                            )
                          ),
                        }),
                      },
                      "mobile-nav"
                    )
                  : null,
              }),
            ],
          });
        },
      ],
      94639
    );
  },
  29228,
  86553,
  (e) => {
    "use strict";
    var t = e.i(76172),
      i = e.i(96505);
    function r(e) {
      return (0, t.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: [
          (0, t.jsx)("rect", {
            x: "9",
            y: "9",
            width: "13",
            height: "13",
            rx: "2",
            ry: "2",
          }),
          (0, t.jsx)("path", {
            d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
          }),
        ],
      });
    }
    function n(e) {
      return (0, t.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
        children: (0, t.jsx)("polyline", { points: "20 6 9 17 4 12" }),
      });
    }
    e.s(
      [
        "CheckIcon",
        0,
        n,
        "CopyIcon",
        0,
        r,
        "SparkleIcon",
        0,
        function (e) {
          return (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, t.jsx)("path", {
              d: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z",
            }),
          });
        },
        "TelegramIcon",
        0,
        function (e) {
          return (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, t.jsx)("path", {
              d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.146.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.242-.213-.054-.333-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.643.135-.953l11.566-4.458c.538-.196 1.006.128.832.938z",
            }),
          });
        },
        "XIcon",
        0,
        function (e) {
          return (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, t.jsx)("path", {
              d: "M18.244 2H21l-6.52 7.45L22 22h-6.844l-4.74-6.2L4.8 22H2l7.02-8.03L2 2h6.914l4.31 5.75L18.244 2zm-1.2 18h1.62L7.05 4H5.32l11.724 16z",
            }),
          });
        },
      ],
      86553
    );
    var s = e.i(90883);
    e.s(
      [
        "ContractAddress",
        0,
        function ({ address: e, className: o }) {
          let [a, l] = (0, i.useState)(!1);
          return (0, t.jsxs)("button", {
            type: "button",
            onClick: function () {
              navigator.clipboard.writeText(e).then(() => {
                l(!0), setTimeout(() => l(!1), 1500);
              });
            },
            className: (0, s.cn)(
              "ring-gold group flex w-full max-w-xl items-center gap-2 rounded-full bg-card/80 px-3 py-2.5 text-left transition-all hover:bg-card sm:gap-3 sm:px-5 sm:py-3",
              o
            ),
            children: [
              (0, t.jsx)("span", {
                className:
                  "shrink-0 text-[10px] font-bold uppercase tracking-widest text-gold sm:text-xs",
                children: "CA",
              }),
              (0, t.jsx)("span", {
                className:
                  "min-w-0 flex-1 truncate font-mono text-xs text-foreground/90 sm:text-sm",
                children: e,
              }),
              (0, t.jsx)("span", {
                className:
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold/25",
                children: a
                  ? (0, t.jsx)(n, { className: "h-4 w-4" })
                  : (0, t.jsx)(r, { className: "h-4 w-4" }),
              }),
            ],
          });
        },
      ],
      29228
    );
  },
  11189,
  (e) => {
    "use strict";
    var t = e.i(76172),
      i = e.i(93440);
    let r = {
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
      },
      n = {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      };
    e.s([
      "FadeIn",
      0,
      function ({
        from: e = "up",
        delay: r = 0,
        duration: n = 0.6,
        distance: s = 24,
        once: o = !0,
        children: a,
        ...l
      }) {
        let u = ((e, t = 24) => {
          switch (e) {
            case "up":
              return { y: t };
            case "down":
              return { y: -t };
            case "left":
              return { x: t };
            case "right":
              return { x: -t };
            default:
              return {};
          }
        })(e, s);
        return (0, t.jsx)(i.motion.div, {
          initial: { opacity: 0, ...u },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: o, amount: 0.2 },
          transition: { duration: n, delay: r, ease: [0.22, 1, 0.36, 1] },
          ...l,
          children: a,
        });
      },
      "Stagger",
      0,
      function ({ once: e = !0, children: n, ...s }) {
        return (0, t.jsx)(i.motion.div, {
          variants: r,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: e, amount: 0.15 },
          ...s,
          children: n,
        });
      },
      "StaggerItem",
      0,
      function ({ children: e, ...r }) {
        return (0, t.jsx)(i.motion.div, { variants: n, ...r, children: e });
      },
    ]);
  },
  4183,
  (e) => {
    "use strict";
    var t = e.i(11189),
      i = e.i(93440);
    e.s([
      "FadeIn",
      () => t.FadeIn,
      "Stagger",
      () => t.Stagger,
      "StaggerItem",
      () => t.StaggerItem,
      "motion",
      () => i.motion,
    ]);
  },
  53510,
  (e) => {
    "use strict";
    var t = e.i(76172),
      i = e.i(92877),
      r = e.i(93440),
      n = e.i(37677),
      s = e.i(4404),
      o = e.i(29228),
      a = e.i(86553),
      l = e.i(11189);
    e.s([
      "Hero",
      0,
      function () {
        return (0, t.jsxs)("section", {
          className:
            "relative flex min-h-svh items-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-20 lg:pb-20",
          children: [
            (0, t.jsx)("div", {
              className: "pointer-events-none absolute inset-0 -z-10",
              children: (0, t.jsx)(r.motion.div, {
                "aria-hidden": !0,
                initial: { opacity: 0, scale: 0.6 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                className:
                  "absolute left-1/2 top-1/2 h-[60vw] max-h-[600px] w-[60vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl",
              }),
            }),
            (0, t.jsx)("div", {
              className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
              children: (0, t.jsxs)("div", {
                className:
                  "grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10",
                children: [
                  (0, t.jsxs)(l.Stagger, {
                    className:
                      "order-2 flex w-full min-w-0 flex-col items-start gap-3 sm:gap-4 lg:order-1",
                    children: [
                      (0, t.jsx)(l.StaggerItem, {
                        children: (0, t.jsxs)("span", {
                          className:
                            "ring-gold inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold sm:px-4 sm:text-xs",
                          children: [
                            (0, t.jsx)(a.SparkleIcon, {
                              className: "h-3.5 w-3.5",
                            }),
                            "Live on ",
                            n.site.chain,
                          ],
                        }),
                      }),
                      (0, t.jsx)(l.StaggerItem, {
                        children: (0, t.jsxs)("h1", {
                          className:
                            "text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl",
                          children: [
                            (0, t.jsx)("span", {
                              className: "block",
                              children: "Vladhood",
                            }),
                            (0, t.jsx)("span", {
                              className: "block text-gold-gradient",
                              children: "$VLAD",
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(l.StaggerItem, {
                        children: (0, t.jsx)("p", {
                          className:
                            "max-w-xl whitespace-pre-line text-sm text-muted sm:text-base lg:text-lg",
                          children: n.site.description,
                        }),
                      }),
                      (0, t.jsx)(l.StaggerItem, {
                        className: "w-full",
                        children: (0, t.jsxs)("div", {
                          className:
                            "flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center",
                          children: [
                            (0, t.jsxs)(s.LinkButton, {
                              href: n.site.links.buy,
                              target: "_blank",
                              rel: "noreferrer",
                              size: "md",
                              className: "w-full sm:w-auto",
                              children: ["Buy ", n.site.ticker, " Now"],
                            }),
                            (0, t.jsx)("div", {
                              className: "hidden items-center gap-3 sm:flex",
                              children: (0, t.jsx)("a", {
                                href: n.site.links.twitter,
                                target: "_blank",
                                rel: "noreferrer",
                                "aria-label": "Follow on X",
                                className:
                                  "ring-gold flex h-11 w-11 items-center justify-center rounded-full bg-card/60 text-gold transition-colors hover:bg-gold hover:text-black",
                                children: (0, t.jsx)(a.XIcon, {
                                  className: "h-4 w-4",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(l.StaggerItem, {
                        className: "w-full",
                        children: (0, t.jsx)(o.ContractAddress, {
                          address: n.site.contract,
                          className: "mt-2",
                        }),
                      }),
                      (0, t.jsx)(l.StaggerItem, {
                        className: "w-full sm:hidden",
                        children: (0, t.jsx)("div", {
                          className: "flex items-center justify-center gap-3",
                          children: (0, t.jsx)("a", {
                            href: n.site.links.twitter,
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": "Follow on X",
                            className:
                              "ring-gold flex h-11 w-11 items-center justify-center rounded-full bg-card/60 text-gold transition-colors hover:bg-gold hover:text-black",
                            children: (0, t.jsx)(a.XIcon, {
                              className: "h-4 w-4",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(r.motion.div, {
                    initial: { opacity: 0, scale: 0.85 },
                    animate: { opacity: 1, scale: 1 },
                    transition: {
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1,
                    },
                    className:
                      "order-1 flex justify-center lg:order-2 lg:justify-end",
                    children: (0, t.jsxs)(r.motion.div, {
                      animate: { y: [0, -12, 0] },
                      transition: {
                        duration: 6,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      className:
                        "relative aspect-square w-full max-w-56 sm:max-w-xs lg:max-w-sm xl:max-w-md",
                      children: [
                        (0, t.jsx)(r.motion.div, {
                          animate: { rotate: 360 },
                          transition: {
                            duration: 60,
                            repeat: 1 / 0,
                            ease: "linear",
                          },
                          className:
                            "glow-gold absolute inset-0 overflow-hidden rounded-full",
                          children: (0, t.jsx)(i.default, {
                            src: "/images/img-toes.jpeg",
                            alt: "Vladhood logo",
                            fill: !0,
                            priority: !0,
                            sizes:
                              "(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw",
                            className: "object-cover",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-gold/40",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      },
    ]);
  },
  45259,
  (e) => {
    "use strict";
    var t = e.i(76172),
      i = e.i(93440),
      r = e.i(11189);
    let n = [
      {
        n: "01",
        title: "Get a wallet",
        body: "Download MetaMask or Rabby. Takes 30 seconds. Save your seed phrase. Do not screenshot it. We see you.",
      },
      {
        n: "02",
        title: "Add Robinhood chain",
        body: "Connect your wallet and switch to Robinhood chain. Fund it with whatever you need to swap.",
      },
      {
        n: "03",
        title: "Swap for $VLAD",
        body: "Head to Uniswap, make sure you're on Robinhood chain, paste the contract address, hit swap. Congrats, you now own Vladhood.",
      },
    ];
    e.s([
      "HowToBuy",
      0,
      function () {
        return (0, t.jsx)("section", {
          id: "how-to-buy",
          className:
            "relative flex min-h-screen items-center py-16 sm:py-24 lg:py-32",
          children: (0, t.jsxs)("div", {
            className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsxs)(r.FadeIn, {
                className: "mb-10 text-center sm:mb-14",
                children: [
                  (0, t.jsx)("p", {
                    className:
                      "mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold sm:text-sm",
                    children: "Step by step",
                  }),
                  (0, t.jsxs)("h2", {
                    className:
                      "text-3xl font-black uppercase sm:text-5xl lg:text-6xl",
                    children: [
                      "How to get ",
                      (0, t.jsx)("span", {
                        className: "text-gold-gradient",
                        children: "your $VLAD.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(r.Stagger, {
                className: "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
                children: n.map((e) =>
                  (0, t.jsx)(
                    r.StaggerItem,
                    {
                      children: (0, t.jsxs)(i.motion.div, {
                        whileHover: { y: -6 },
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        },
                        className:
                          "ring-gold relative h-full overflow-hidden rounded-3xl bg-card/80 p-6 sm:p-7",
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "text-5xl font-black text-gold-gradient sm:text-6xl",
                            children: e.n,
                          }),
                          (0, t.jsx)("h3", {
                            className:
                              "mt-3 text-lg font-black uppercase tracking-wide sm:mt-4 sm:text-xl",
                            children: e.title,
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "mt-2 text-sm text-muted sm:mt-3 sm:text-base",
                            children: e.body,
                          }),
                        ],
                      }),
                    },
                    e.n
                  )
                ),
              }),
            ],
          }),
        });
      },
    ]);
  },
]);
