/*
Copyright (c) 2008-2020, www.redips.net All rights reserved.
Code licensed under the BSD License: http://www.redips.net/license/
http://www.redips.net/javascript/drag-and-drop-table-content/
Version 5.3.1
Dec 1, 2020.
*/
var REDIPS = REDIPS || {};
REDIPS.drag = (function () {
  var t = null,
    T = /\bredips-drag\b/i,
    B = 0,
    P = 0,
    ua = null,
    va = null,
    U = [],
    C = null,
    W = 0,
    X = 0,
    Z = 0,
    aa = 0,
    ba = 0,
    ca = 0,
    ka,
    g = [],
    la,
    wa,
    A,
    da = [],
    w = [],
    H = null,
    M = null,
    ea = 0,
    fa = 0,
    Sa = 0,
    Ta = 0,
    oa = !1,
    Ea = !1,
    ma = !1,
    xa = [],
    ya,
    O,
    l = null,
    F = null,
    K = null,
    q = null,
    I = null,
    V = null,
    y = null,
    L = null,
    ha = null,
    k = !1,
    z = !1,
    D = "cell",
    pa = { div: {}, divClass: {}, cname: "redips-only", other: "deny" },
    Fa = {
      action: "deny",
      cname: "redips-mark",
      exception: {},
      exceptionClass: {},
    },
    p = {},
    Ua = { keyDiv: !1, keyRow: !1, sendBack: !1, drop: !1 };
  var Va = function () {
    return !1;
  };
  var na = function (a) {
    var b, c;
    g.length = 0;
    var d =
      void 0 === a
        ? H.getElementsByTagName("table")
        : document.querySelectorAll(a);
    for (b = a = 0; a < d.length; a++)
      if (
        !(
          "redips_clone" === d[a].parentNode.id ||
          -1 < d[a].className.indexOf("redips-nolayout")
        )
      ) {
        var e = d[a].parentNode;
        var f = 0;
        do "TD" === e.nodeName && f++, (e = e.parentNode);
        while (e && e !== H);
        g[b] = d[a];
        g[b].redips || (g[b].redips = {});
        g[b].redips.container = H;
        g[b].redips.nestedLevel = f;
        g[b].redips.idx = b;
        xa[b] = 0;
        f = g[b].getElementsByTagName("td");
        e = 0;
        for (c = !1; e < f.length; e++)
          if (1 < f[e].rowSpan) {
            c = !0;
            break;
          }
        g[b].redips.rowspan = c;
        b++;
      }
    a = 0;
    for (d = la = 1; a < g.length; a++)
      if (0 === g[a].redips.nestedLevel) {
        g[a].redips.nestedGroup = d;
        g[a].redips.sort = 100 * la;
        e = g[a].getElementsByTagName("table");
        for (b = 0; b < e.length; b++)
          -1 < e[b].className.indexOf("redips-nolayout") ||
            ((e[b].redips.nestedGroup = d),
            (e[b].redips.sort = 100 * la + e[b].redips.nestedLevel));
        d++;
        la++;
      }
  };
  var Ya = function (a) {
    var b = a || window.event;
    if (!0 === this.redips.animated) return !0;
    b.cancelBubble = !0;
    b.stopPropagation && b.stopPropagation();
    Ea = b.shiftKey;
    a = b.which ? b.which : b.button;
    if (Wa(b) || (!b.touches && 1 !== a)) return !0;
    if (window.getSelection) window.getSelection().removeAllRanges();
    else if (document.selection && "Text" === document.selection.type)
      try {
        document.selection.empty();
      } catch (e) {}
    if (b.touches) {
      a = ea = b.touches[0].clientX;
      var c = (fa = b.touches[0].clientY);
    } else (a = ea = b.clientX), (c = fa = b.clientY);
    Sa = a;
    Ta = c;
    oa = !1;
    REDIPS.drag.objOld = z = k || this;
    REDIPS.drag.obj = k = this;
    ma = -1 < k.className.indexOf("redips-clone");
    REDIPS.drag.tableSort && ib(k);
    H !== k.redips.container && ((H = k.redips.container), na());
    J();
    ma || "cell" !== D || (k.style.zIndex = 999);
    REDIPS.drag.td.source = p.source = E("TD", k) || E("TH", k);
    REDIPS.drag.td.current = p.current = p.source;
    REDIPS.drag.td.previous = p.previous = p.source;
    l = K = F = g.indexOf(E("TABLE", p.source));
    q = V = I = E("TR", p.source).rowIndex;
    y = ha = L = p.source.cellIndex;
    var d = Q(g[K], "position");
    "fixed" !== d && (d = Q(g[K].parentNode, "position"));
    w = N(p.current, d);
    -1 === k.className.indexOf("row")
      ? ((REDIPS.drag.mode = D = "cell"), REDIPS.drag.event.clicked(p.current))
      : ((REDIPS.drag.mode = D = "row"),
        (REDIPS.drag.obj = k = za(k)),
        REDIPS.drag.event.rowClicked(p.current));
    if (!1 === g[l].redips.enabled) return !0;
    wa = A = !1;
    REDIPS.event.add(document, "mousemove", Aa);
    REDIPS.event.add(document, "touchmove", Aa);
    REDIPS.event.add(document, "mouseup", Ba);
    REDIPS.event.add(document, "touchend", Ba);
    k.setCapture && k.setCapture();
    null !== l && null !== q && null !== y && (ka = Xa(l, q, y));
    d = N(k, d);
    t = [c - d[0], d[1] - a, d[2] - c, a - d[3]];
    H.onselectstart = function (e) {
      b = e || window.event;
      if (!Wa(b)) return b.shiftKey && document.selection.clear(), !1;
    };
    return !1;
  };
  var jb = function (a) {
    REDIPS.drag.event.dblClicked();
  };
  var ib = function (a) {
    var b = E("TABLE", a).redips.nestedGroup;
    for (a = 0; a < g.length; a++)
      g[a].redips.nestedGroup === b &&
        (g[a].redips.sort = 100 * la + g[a].redips.nestedLevel);
    g.sort(function (c, d) {
      return d.redips.sort - c.redips.sort;
    });
    la++;
  };
  var za = function (a, b) {
    var c, d;
    if ("DIV" === a.nodeName) {
      var e = a;
      a = E("TR", a);
      void 0 === a.redips && (a.redips = {});
      a.redips.div = e;
      return a;
    }
    var f = a;
    void 0 === f.redips && (f.redips = {});
    a = E("TABLE", a);
    ma &&
      A &&
      ((e = f.redips.div),
      (e.className = qa(e.className.replace("redips-clone", ""))));
    var h = a.cloneNode(!0);
    ma && A && (e.className += " redips-clone");
    var m = h.rows.length - 1;
    e = "animated" === b ? 0 === m : !0;
    for (c = m; 0 <= c; c--)
      if (c !== f.rowIndex) {
        if (!0 === e && void 0 === b)
          for (m = h.rows[c], d = 0; d < m.cells.length; d++)
            if (-1 < m.cells[d].className.indexOf("redips-rowhandler")) {
              e = !1;
              break;
            }
        h.deleteRow(c);
      }
    A || (f.redips.emptyRow = e);
    h.redips = {};
    h.redips.container = a.redips.container;
    h.redips.sourceRow = f;
    kb(f, h.rows[0]);
    Za(f, h.rows[0]);
    document.getElementById("redips_clone").appendChild(h);
    a = N(f, "fixed");
    h.style.position = "fixed";
    h.style.top = a[0] + "px";
    h.style.left = a[3] + "px";
    h.style.width = a[1] - a[3] + "px";
    return h;
  };
  var $a = function (a, b, c) {
    var d = !1;
    var e = function (v) {
      if (void 0 !== v.redips && v.redips.emptyRow)
        Ga(v, "empty", REDIPS.drag.style.rowEmptyColor);
      else {
        var R = E("TABLE", v);
        R.deleteRow(v.rowIndex);
      }
    };
    void 0 === c ? (c = k) : (d = !0);
    var f = c.redips.sourceRow;
    var h = f.rowIndex;
    var m = E("TABLE", f);
    var r = f.parentNode;
    a = g[a];
    b > a.rows.length - 1 && (b = a.rows.length - 1);
    var n = a.rows[b];
    var u = b;
    var x = n.parentNode;
    b = c.getElementsByTagName("tr")[0];
    c.remove();
    !1 !== REDIPS.drag.event.rowDroppedBefore(m, h) &&
      (!d && -1 < p.target.className.indexOf(REDIPS.drag.trash.className)
        ? A
          ? REDIPS.drag.event.rowDeleted()
          : REDIPS.drag.trash.questionRow
            ? confirm(REDIPS.drag.trash.questionRow)
              ? (e(f), REDIPS.drag.event.rowDeleted())
              : (delete z.redips.emptyRow, REDIPS.drag.event.rowUndeleted())
            : (e(f), REDIPS.drag.event.rowDeleted())
        : (u < a.rows.length
            ? l === K
              ? h > u
                ? x.insertBefore(b, n)
                : x.insertBefore(b, n.nextSibling)
              : "after" === REDIPS.drag.rowDropMode
                ? x.insertBefore(b, n.nextSibling)
                : x.insertBefore(b, n)
            : (x.appendChild(b), (n = a.rows[0])),
          n && n.redips && n.redips.emptyRow
            ? a.deleteRow(n.rowIndex)
            : "overwrite" === REDIPS.drag.rowDropMode
              ? e(n)
              : "switch" !== REDIPS.drag.rowDropMode ||
                A ||
                (r.insertBefore(n, f),
                void 0 !== f.redips && delete f.redips.emptyRow),
          (!d && A) || e(f),
          delete b.redips.emptyRow,
          d || REDIPS.drag.event.rowDropped(b, m, h)),
      0 < b.getElementsByTagName("table").length && na());
  };
  var kb = function (a, b) {
    var c = [],
      d = [];
    c[0] = a.getElementsByTagName("input");
    c[1] = a.getElementsByTagName("textarea");
    c[2] = a.getElementsByTagName("select");
    d[0] = b.getElementsByTagName("input");
    d[1] = b.getElementsByTagName("textarea");
    d[2] = b.getElementsByTagName("select");
    for (a = 0; a < c.length; a++)
      for (b = 0; b < c[a].length; b++) {
        var e = c[a][b].type;
        switch (e) {
          case "text":
          case "textarea":
          case "password":
            d[a][b].value = c[a][b].value;
            break;
          case "radio":
          case "checkbox":
            d[a][b].checked = c[a][b].checked;
            break;
          case "select-one":
            d[a][b].selectedIndex = c[a][b].selectedIndex;
            break;
          case "select-multiple":
            for (e = 0; e < c[a][b].options.length; e++)
              d[a][b].options[e].selected = c[a][b].options[e].selected;
        }
      }
  };
  var Ba = function (a) {
    var b = a || window.event;
    a = b.clientX;
    var c = b.clientY;
    ba = ca = 0;
    k.releaseCapture && k.releaseCapture();
    REDIPS.event.remove(document, "mousemove", Aa);
    REDIPS.event.remove(document, "touchmove", Aa);
    REDIPS.event.remove(document, "mouseup", Ba);
    REDIPS.event.remove(document, "touchend", Ba);
    H.onselectstart = null;
    ab(k);
    ua = document.documentElement.scrollWidth;
    va = document.documentElement.scrollHeight;
    ba = ca = 0;
    if (!A || "cell" !== D || (null !== l && null !== q && null !== y))
      if (null === l || null === q || null === y) REDIPS.drag.event.notMoved();
      else {
        if (l < g.length) {
          b = g[l];
          REDIPS.drag.td.target = p.target = b.rows[q].cells[y];
          ra(l, q, y, ka);
          var d = l;
          var e = q;
        } else
          null === F || null === I || null === L
            ? ((b = g[K]),
              (REDIPS.drag.td.target = p.target = b.rows[V].cells[ha]),
              ra(K, V, ha, ka),
              (d = K),
              (e = V))
            : ((b = g[F]),
              (REDIPS.drag.td.target = p.target = b.rows[I].cells[L]),
              ra(F, I, L, ka),
              (d = F),
              (e = I));
        if ("row" === D)
          if (wa)
            if (K === d && V === e) {
              b = k.getElementsByTagName("tr")[0];
              z.style.backgroundColor = b.style.backgroundColor;
              for (a = 0; a < b.cells.length; a++)
                z.cells[a].style.backgroundColor =
                  b.cells[a].style.backgroundColor;
              k.remove();
              delete z.redips.emptyRow;
              A
                ? REDIPS.drag.event.rowNotCloned()
                : REDIPS.drag.event.rowDroppedSource(p.target);
            } else $a(d, e);
          else REDIPS.drag.event.rowNotMoved();
        else if (A || oa)
          if (A && K === l && V === q && ha === y)
            k.remove(), G(k, !1), --da[z.id], REDIPS.drag.event.notCloned();
          else if (
            A &&
            !1 === REDIPS.drag.clone.drop &&
            (a < b.redips.offset[3] ||
              a > b.redips.offset[1] ||
              c < b.redips.offset[0] ||
              c > b.redips.offset[2])
          )
            k.remove(), G(k, !1), --da[z.id], REDIPS.drag.event.notCloned();
          else if (-1 < p.target.className.indexOf(REDIPS.drag.trash.className))
            k.remove(),
              REDIPS.drag.trash.question
                ? setTimeout(function () {
                    confirm(REDIPS.drag.trash.question)
                      ? (G(k, !1), bb())
                      : (A || (g[K].rows[V].cells[ha].appendChild(k), J()),
                        REDIPS.drag.event.undeleted());
                  }, 20)
                : (G(k, !1), bb());
          else if ("switch" === REDIPS.drag.dropMode)
            if (((a = REDIPS.drag.event.droppedBefore(p.target)), !1 === a))
              Ha(!1);
            else {
              k.remove();
              G(k, !1);
              b = p.target.getElementsByTagName("div");
              d = b.length;
              for (a = 0; a < d; a++)
                void 0 !== b[0] &&
                  ((REDIPS.drag.objOld = z = b[0]),
                  p.source.appendChild(z),
                  G(z));
              Ha();
              d && REDIPS.drag.event.switched();
            }
          else
            "overwrite" === REDIPS.drag.dropMode
              ? ((a = REDIPS.drag.event.droppedBefore(p.target)),
                !1 !== a && Ca(p.target))
              : (a = REDIPS.drag.event.droppedBefore(p.target)),
              Ha(a);
        else REDIPS.drag.event.notMoved();
        "cell" === D && 0 < k.getElementsByTagName("table").length && na();
        J();
        REDIPS.drag.event.finish();
      }
    else k.remove(), G(k, !1), --da[z.id], REDIPS.drag.event.notCloned();
    F = I = L = null;
  };
  var Ha = function (a) {
    var b = null,
      c;
    if (!1 !== a) {
      if (!0 === Ua.sendBack) {
        a = p.target.getElementsByTagName("DIV");
        for (c = 0; c < a.length; c++)
          if (k !== a[c] && 0 === k.id.indexOf(a[c].id)) {
            b = a[c];
            break;
          }
        if (b) {
          Ia(b, 1);
          k.remove();
          G(k, !1);
          return;
        }
      }
      "shift" !== REDIPS.drag.dropMode ||
        (!lb(p.target) && "always" !== REDIPS.drag.shift.after) ||
        Ja(p.source, p.target);
      "top" === REDIPS.drag.multipleDrop && p.target.hasChildNodes()
        ? p.target.insertBefore(k, p.target.firstChild)
        : p.target.appendChild(k);
      G(k);
      REDIPS.drag.event.dropped(p.target);
      A && (REDIPS.drag.event.clonedDropped(p.target), Ia(z, -1));
    } else A && k.parentNode && (k.remove(), G(k, !1));
  };
  var G = function (a, b) {
    !1 === b
      ? ((a.onmousedown = null), (a.ontouchstart = null), (a.ondblclick = null))
      : ((a.onmousedown = Ya), (a.ontouchstart = Ya), (a.ondblclick = jb));
  };
  var ab = function (a) {
    a.style.top = "";
    a.style.left = "";
    a.style.position = "";
    a.style.zIndex = "";
  };
  var bb = function () {
    A && Ia(z, -1);
    if (
      "shift" === REDIPS.drag.dropMode &&
      ("delete" === REDIPS.drag.shift.after ||
        "always" === REDIPS.drag.shift.after)
    ) {
      switch (REDIPS.drag.shift.mode) {
        case "vertical2":
          var a = "lastInColumn";
          break;
        case "horizontal2":
          a = "lastInRow";
          break;
        default:
          a = "last";
      }
      Ja(p.source, cb(a, p.source)[2]);
    }
    REDIPS.drag.event.deleted(A);
  };
  var Aa = function (a) {
    a = a || window.event;
    var b = REDIPS.drag.scroll.bound;
    if (a.touches) {
      var c = (ea = a.touches[0].clientX);
      var d = (fa = a.touches[0].clientY);
    } else (c = ea = a.clientX), (d = fa = a.clientY);
    var e = Math.abs(Sa - c);
    var f = Math.abs(Ta - d);
    if (!wa) {
      if ("cell" === D && (ma || (!0 === REDIPS.drag.clone.keyDiv && Ea)))
        (REDIPS.drag.objOld = z = k),
          (REDIPS.drag.obj = k = Ka(k, !0)),
          (A = !0),
          REDIPS.drag.event.cloned();
      else {
        if ("row" === D) {
          if (ma || (!0 === REDIPS.drag.clone.keyRow && Ea)) A = !0;
          REDIPS.drag.objOld = z = k;
          REDIPS.drag.obj = k = za(k);
          k.style.zIndex = 999;
        }
        k.setCapture && k.setCapture();
        k.style.position = "fixed";
        J();
        sa();
        "row" === D &&
          (A ? REDIPS.drag.event.rowCloned() : REDIPS.drag.event.rowMoved());
      }
      La();
      c > B - t[1] && (k.style.left = B - (t[1] + t[3]) + "px");
      d > P - t[2] && (k.style.top = P - (t[0] + t[2]) + "px");
    }
    wa = !0;
    "cell" === D &&
      (7 < e || 7 < f) &&
      !oa &&
      ((oa = !0), La(), REDIPS.drag.event.moved(A));
    c > t[3] && c < B - t[1] && (k.style.left = c - t[3] + "px");
    d > t[0] && d < P - t[2] && (k.style.top = d - t[0] + "px");
    c < M[1] &&
      c > M[3] &&
      d < M[2] &&
      d > M[0] &&
      0 === ba &&
      0 === ca &&
      (w.containTable || c < w[3] || c > w[1] || d < w[0] || d > w[2]) &&
      (sa(), Ma());
    if (REDIPS.drag.scroll.enable)
      for (
        W = b - (B / 2 > c ? c - t[3] : B - c - t[1]),
          0 < W
            ? (W > b && (W = b),
              (e = Y()[0]),
              (W *= c < B / 2 ? -1 : 1),
              (0 > W && 0 >= e) ||
                (0 < W && e >= ua - B) ||
                0 !== ba++ ||
                (REDIPS.event.remove(window, "scroll", J), Na(window)))
            : (W = 0),
          X = b - (P / 2 > d ? d - t[0] : P - d - t[2]),
          0 < X
            ? (X > b && (X = b),
              (e = Y()[1]),
              (X *= d < P / 2 ? -1 : 1),
              (0 > X && 0 >= e) ||
                (0 < X && e >= va - P) ||
                0 !== ca++ ||
                (REDIPS.event.remove(window, "scroll", J), Oa(window)))
            : (X = 0),
          f = 0;
        f < U.length;
        f++
      )
        if (
          ((e = U[f]),
          e.autoscroll &&
            c < e.offset[1] &&
            c > e.offset[3] &&
            d < e.offset[2] &&
            d > e.offset[0])
        ) {
          Z =
            b -
            (e.midstX > c ? c - t[3] - e.offset[3] : e.offset[1] - c - t[1]);
          0 < Z
            ? (Z > b && (Z = b),
              (Z *= c < e.midstX ? -1 : 1),
              0 === ba++ &&
                (REDIPS.event.remove(e.div, "scroll", J), Na(e.div)))
            : (Z = 0);
          aa =
            b -
            (e.midstY > d ? d - t[0] - e.offset[0] : e.offset[2] - d - t[2]);
          0 < aa
            ? (aa > b && (aa = b),
              (aa *= d < e.midstY ? -1 : 1),
              0 === ca++ &&
                (REDIPS.event.remove(e.div, "scroll", J), Oa(e.div)))
            : (aa = 0);
          break;
        } else Z = aa = 0;
    a.cancelBubble = !0;
    a.stopPropagation && a.stopPropagation();
  };
  var Ma = function () {
    l < g.length &&
      (l !== F || q !== I || y !== L) &&
      (null !== F &&
        null !== I &&
        null !== L &&
        (ra(F, I, L, ka),
        (REDIPS.drag.td.previous = p.previous = g[F].rows[I].cells[L]),
        (REDIPS.drag.td.current = p.current = g[l].rows[q].cells[y]),
        "switching" === REDIPS.drag.dropMode &&
          "cell" === D &&
          (Da(p.current, p.previous), J(), sa()),
        "cell" === D
          ? REDIPS.drag.event.changed(p.current)
          : "row" !== D ||
            (l === F && q === I) ||
            REDIPS.drag.event.rowChanged(p.current)),
      La());
  };
  var db = function () {
    "number" === typeof window.innerWidth
      ? ((B = window.innerWidth), (P = window.innerHeight))
      : document.documentElement &&
          (document.documentElement.clientWidth ||
            document.documentElement.clientHeight)
        ? ((B = document.documentElement.clientWidth),
          (P = document.documentElement.clientHeight))
        : document.body &&
          (document.body.clientWidth || document.body.clientHeight) &&
          ((B = document.body.clientWidth), (P = document.body.clientHeight));
    ua = document.documentElement.scrollWidth;
    va = document.documentElement.scrollHeight;
    J();
  };
  var sa = function () {
    var a;
    var b = [];
    var c = function () {
      null !== F && null !== I && null !== L && ((l = F), (q = I), (y = L));
    };
    var d = function (r, n, u) {
      var x = null,
        v;
      for (v in u)
        if (-1 < r.indexOf(v) && ((x = !1), -1 < n.indexOf(u[v]))) {
          x = !0;
          break;
        }
      return x;
    };
    var e = ea;
    var f = fa;
    for (l = 0; l < g.length; l++)
      if (
        !1 !== g[l].redips.enabled &&
        ((b[0] = g[l].redips.offset[0]),
        (b[1] = g[l].redips.offset[1]),
        (b[2] = g[l].redips.offset[2]),
        (b[3] = g[l].redips.offset[3]),
        void 0 !== g[l].sca &&
          ((b[0] = b[0] > g[l].sca.offset[0] ? b[0] : g[l].sca.offset[0]),
          (b[1] = b[1] < g[l].sca.offset[1] ? b[1] : g[l].sca.offset[1]),
          (b[2] = b[2] < g[l].sca.offset[2] ? b[2] : g[l].sca.offset[2]),
          (b[3] = b[3] > g[l].sca.offset[3] ? b[3] : g[l].sca.offset[3])),
        b[3] < e && e < b[1] && b[0] < f && f < b[2])
      ) {
        var h = g[l].redips.rowOffset;
        for (q = 0; q < h.length - 1; q++)
          if (void 0 !== h[q]) {
            w[0] = h[q][0];
            if (void 0 !== h[q + 1]) w[2] = h[q + 1][0];
            else
              for (a = q + 2; a < h.length; a++)
                if (void 0 !== h[a]) {
                  w[2] = h[a][0];
                  break;
                }
            if (f <= w[2]) break;
          }
        a = q;
        q === h.length - 1 &&
          ((w[0] = h[q][0]), (w[2] = g[l].redips.offset[2]));
        do
          for (y = b = g[l].rows[q].cells.length - 1; 0 <= y; y--) {
            b = g[l].rows[q].cells[y];
            w[3] = h[q][3] + b.offsetLeft;
            w[1] = w[3] + b.offsetWidth;
            var m = w[0] + (b.offsetTop - g[l].rows[q].offsetTop);
            if (w[3] <= e && e <= w[1] && m <= f && f <= m + b.offsetHeight) {
              w[0] = m;
              w[2] = m + b.offsetHeight;
              break;
            }
          }
        while (g[l].redips.rowspan && -1 === y && 0 < q--);
        0 > q || 0 > y
          ? c()
          : q !== a &&
            ((w[0] = h[q][0]),
            (w[2] = w[0] + g[l].rows[q].cells[y].offsetHeight),
            (f < w[0] || f > w[2]) && c());
        b = g[l].rows[q].cells[y];
        w.containTable =
          0 < b.childNodes.length && 0 < b.getElementsByTagName("table").length;
        if (-1 === b.className.indexOf(REDIPS.drag.trash.className))
          if (
            ((e = d(k.className, b.className, pa.divClass)),
            -1 < b.className.indexOf(REDIPS.drag.only.cname))
          ) {
            if (-1 === b.className.indexOf(pa.div[k.id]) && !0 !== e) {
              c();
              break;
            }
          } else if (
            (void 0 === pa.div[k.id] && null === e) ||
            "deny" !== pa.other
          ) {
            if (
              ((e = -1 < b.className.indexOf(REDIPS.drag.mark.cname)),
              (!0 === e && "deny" === REDIPS.drag.mark.action) ||
                (!1 === e && "allow" === REDIPS.drag.mark.action))
            )
              if (
                ((e = d(k.className, b.className, Fa.exceptionClass)),
                -1 === b.className.indexOf(Fa.exception[k.id]) && !0 !== e)
              ) {
                c();
                break;
              }
          } else {
            c();
            break;
          }
        d = -1 < b.className.indexOf("redips-single");
        if ("cell" === D) {
          if (
            ("single" === REDIPS.drag.dropMode || d) &&
            0 < b.childNodes.length
          ) {
            if (1 === b.childNodes.length && 3 === b.firstChild.nodeType) break;
            d = !0;
            for (a = b.childNodes.length - 1; 0 <= a; a--)
              if (
                b.childNodes[a].className &&
                -1 < b.childNodes[a].className.indexOf("redips-drag")
              ) {
                d = !1;
                break;
              }
            if (
              !d &&
              null !== F &&
              null !== I &&
              null !== L &&
              (K !== l || V !== q || ha !== y)
            ) {
              c();
              break;
            }
          }
          if (-1 < b.className.indexOf("redips-rowhandler")) {
            c();
            break;
          }
          if (b.parentNode.redips && b.parentNode.redips.emptyRow) {
            c();
            break;
          }
        }
        break;
      }
  };
  var La = function () {
    l < g.length &&
      null !== l &&
      null !== q &&
      null !== y &&
      ((ka = Xa(l, q, y)), ra(l, q, y), (F = l), (I = q), (L = y));
  };
  var ra = function (a, b, c, d) {
    if ("cell" === D && oa)
      (c = g[a].rows[b].cells[c].style),
        (c.backgroundColor =
          void 0 === d ? REDIPS.drag.hover.colorTd : d.color[0].toString()),
        void 0 !== REDIPS.drag.hover.borderTd &&
          (void 0 === d
            ? (c.border = REDIPS.drag.hover.borderTd)
            : ((c.borderTopWidth = d.top[0][0]),
              (c.borderTopStyle = d.top[0][1]),
              (c.borderTopColor = d.top[0][2]),
              (c.borderRightWidth = d.right[0][0]),
              (c.borderRightStyle = d.right[0][1]),
              (c.borderRightColor = d.right[0][2]),
              (c.borderBottomWidth = d.bottom[0][0]),
              (c.borderBottomStyle = d.bottom[0][1]),
              (c.borderBottomColor = d.bottom[0][2]),
              (c.borderLeftWidth = d.left[0][0]),
              (c.borderLeftStyle = d.left[0][1]),
              (c.borderLeftColor = d.left[0][2])));
    else if ("row" === D)
      for (a = g[a].rows[b], b = 0; b < a.cells.length; b++)
        (c = a.cells[b].style),
          (c.backgroundColor =
            void 0 === d ? REDIPS.drag.hover.colorTr : d.color[b].toString()),
          void 0 !== REDIPS.drag.hover.borderTr &&
            (void 0 === d
              ? l === K
                ? q < V
                  ? (c.borderTop = REDIPS.drag.hover.borderTr)
                  : (c.borderBottom = REDIPS.drag.hover.borderTr)
                : "before" === REDIPS.drag.rowDropMode
                  ? (c.borderTop = REDIPS.drag.hover.borderTr)
                  : (c.borderBottom = REDIPS.drag.hover.borderTr)
              : ((c.borderTopWidth = d.top[b][0]),
                (c.borderTopStyle = d.top[b][1]),
                (c.borderTopColor = d.top[b][2]),
                (c.borderBottomWidth = d.bottom[b][0]),
                (c.borderBottomStyle = d.bottom[b][1]),
                (c.borderBottomColor = d.bottom[b][2])));
  };
  var Xa = function (a, b, c) {
    var d = { color: [], top: [], right: [], bottom: [], left: [] },
      e = function (f, h) {
        var m = "border" + h + "Style",
          r = "border" + h + "Color";
        return [Q(f, "border" + h + "Width"), Q(f, m), Q(f, r)];
      };
    if ("cell" === D)
      (c = g[a].rows[b].cells[c]),
        (d.color[0] = c.style.backgroundColor),
        void 0 !== REDIPS.drag.hover.borderTd &&
          ((d.top[0] = e(c, "Top")),
          (d.right[0] = e(c, "Right")),
          (d.bottom[0] = e(c, "Bottom")),
          (d.left[0] = e(c, "Left")));
    else
      for (a = g[a].rows[b], b = 0; b < a.cells.length; b++)
        (c = a.cells[b]),
          (d.color[b] = c.style.backgroundColor),
          void 0 !== REDIPS.drag.hover.borderTr &&
            ((d.top[b] = e(c, "Top")), (d.bottom[b] = e(c, "Bottom")));
    return d;
  };
  var N = function (a, b, c) {
    var d = 0,
      e = 0,
      f = a;
    "fixed" !== b && ((d = 0 - ya[0]), (e = 0 - ya[1]));
    if (void 0 === c || !0 === c) {
      do
        (d += a.offsetLeft - a.scrollLeft),
          (e += a.offsetTop - a.scrollTop),
          (a = a.offsetParent);
      while (a && "BODY" !== a.nodeName);
    } else {
      do (d += a.offsetLeft), (e += a.offsetTop), (a = a.offsetParent);
      while (a && "BODY" !== a.nodeName);
    }
    return [e, d + f.offsetWidth, e + f.offsetHeight, d];
  };
  var J = function () {
    var a, b;
    ya = Y();
    for (a = 0; a < g.length; a++) {
      var c = [];
      var d = Q(g[a], "position");
      "fixed" !== d && (d = Q(g[a].parentNode, "position"));
      for (b = g[a].rows.length - 1; 0 <= b; b--)
        "none" !== g[a].rows[b].style.display && (c[b] = N(g[a].rows[b], d));
      g[a].redips.offset = N(g[a], d);
      g[a].redips.rowOffset = c;
    }
    M = N(H);
    for (a = 0; a < U.length; a++)
      (d = Q(U[a].div, "position")),
        (b = N(U[a].div, d, !1)),
        (U[a].offset = b),
        (U[a].midstX = (b[1] + b[3]) / 2),
        (U[a].midstY = (b[0] + b[2]) / 2);
  };
  var Y = function () {
    if ("number" === typeof window.pageYOffset) {
      var a = window.pageXOffset;
      var b = window.pageYOffset;
    } else
      document.body && (document.body.scrollLeft || document.body.scrollTop)
        ? ((a = document.body.scrollLeft), (b = document.body.scrollTop))
        : document.documentElement &&
            (document.documentElement.scrollLeft ||
              document.documentElement.scrollTop)
          ? ((a = document.documentElement.scrollLeft),
            (b = document.documentElement.scrollTop))
          : (a = b = 0);
    return [a, b];
  };
  var Na = function (a) {
    var b = ea;
    var c = fa;
    0 < ba && (J(), sa(), b < M[1] && b > M[3] && c < M[2] && c > M[0] && Ma());
    "object" === typeof a && (C = a);
    C === window
      ? ((a = Y()[0]), (b = ua - B), (c = W))
      : ((a = C.scrollLeft), (b = C.scrollWidth - C.clientWidth), (c = Z));
    0 < ba && ((0 > c && 0 < a) || (0 < c && a < b))
      ? (C === window
          ? (window.scrollBy(c, 0),
            Y(),
            (a = parseInt(k.style.left, 10)),
            isNaN(a))
          : (C.scrollLeft += c),
        setTimeout(Na, REDIPS.drag.scroll.speed))
      : (REDIPS.event.add(C, "scroll", J), (ba = 0), (w = [0, 0, 0, 0]));
  };
  var Oa = function (a) {
    var b = ea;
    var c = fa;
    0 < ca && (J(), sa(), b < M[1] && b > M[3] && c < M[2] && c > M[0] && Ma());
    "object" === typeof a && (C = a);
    C === window
      ? ((a = Y()[1]), (b = va - P), (c = X))
      : ((a = C.scrollTop), (b = C.scrollHeight - C.clientHeight), (c = aa));
    0 < ca && ((0 > c && 0 < a) || (0 < c && a < b))
      ? (C === window
          ? (window.scrollBy(0, c),
            Y(),
            (a = parseInt(k.style.top, 10)),
            isNaN(a))
          : (C.scrollTop += c),
        setTimeout(Oa, REDIPS.drag.scroll.speed))
      : (REDIPS.event.add(C, "scroll", J), (ca = 0), (w = [0, 0, 0, 0]));
  };
  var Ka = function (a, b) {
    var c = a.cloneNode(!0),
      d = c.className;
    if (!0 === b) {
      document.getElementById("redips_clone").appendChild(c);
      c.style.zIndex = 999;
      c.style.position = "fixed";
      b = N(a);
      var e = N(c);
      c.style.top = b[0] - e[0] + "px";
      c.style.left = b[3] - e[3] + "px";
    }
    c.setCapture && c.setCapture();
    d = d.replace("redips-clone", "");
    d = d.replace(/climit(\d)_(\d+)/, "");
    c.className = qa(d);
    void 0 === da[a.id] && (da[a.id] = 0);
    c.id = a.id + "c" + da[a.id];
    da[a.id] += 1;
    Za(a, c);
    return c;
  };
  var Za = function (a, b) {
    var c = [];
    c[0] = function (e, f) {
      e.redips &&
        ((f.redips = {}),
        (f.redips.enabled = e.redips.enabled),
        (f.redips.container = e.redips.container),
        e.redips.enabled && G(f));
    };
    c[1] = function (e, f) {
      e.redips && ((f.redips = {}), (f.redips.emptyRow = e.redips.emptyRow));
    };
    var d = function (e) {
      var f;
      var h = ["DIV", "TR"];
      var m = a.getElementsByTagName(h[e]);
      h = b.getElementsByTagName(h[e]);
      for (f = 0; f < h.length; f++) c[e](m[f], h[f]);
    };
    if ("DIV" === a.nodeName) c[0](a, b);
    else if ("TR" === a.nodeName) c[1](a, b);
    d(0);
    d(1);
  };
  var Ia = function (a, b) {
    var c = a.className;
    var d = c.match(/climit(\d)_(\d+)/);
    if (null !== d) {
      var e = parseInt(d[1], 10);
      d = parseInt(d[2], 10);
      0 === d && 1 === b && ((c += " redips-clone"), 2 === e && ta(!0, a));
      d += b;
      c = c.replace(/climit\d_\d+/g, "climit" + e + "_" + d);
      0 >= d &&
        ((c = c.replace("redips-clone", "")),
        2 === e
          ? (ta(!1, a), REDIPS.drag.event.clonedEnd2())
          : REDIPS.drag.event.clonedEnd1());
      a.className = qa(c);
    }
  };
  var Wa = function (a) {
    var b = /\bredips-nodrag\b/i;
    if (a.srcElement) {
      var c = a.srcElement.nodeName;
      a = a.srcElement.className;
    } else (c = a.target.nodeName), (a = a.target.className);
    switch (c) {
      case "A":
      case "INPUT":
      case "SELECT":
      case "OPTION":
      case "TEXTAREA":
        c = !0;
        break;
      default:
        c = b.test(a);
    }
    return c;
  };
  var ta = function (a, b) {
    var c,
      d = [],
      e = /\bredips-noautoscroll\b/i;
    var f = REDIPS.drag.style.opacityDisabled;
    if (!0 === a || "init" === a) {
      var h = REDIPS.drag.style.borderEnabled;
      var m = "grab";
      var r = !0;
    } else (h = REDIPS.drag.style.borderDisabled), (m = "auto"), (r = !1);
    void 0 === b
      ? (d = H.getElementsByTagName("div"))
      : "string" === typeof b
        ? (d = document.querySelectorAll(b))
        : "object" !== typeof b ||
            ("DIV" === b.nodeName && -1 !== b.className.indexOf("redips-drag"))
          ? (d[0] = b)
          : (d = b.getElementsByTagName("div"));
    for (c = b = 0; b < d.length; b++)
      if (T.test(d[b].className))
        "init" === a || void 0 === d[b].redips
          ? ((d[b].redips = {}), (d[b].redips.container = H))
          : !0 === a && "number" === typeof f
            ? ((d[b].style.opacity = ""), (d[b].style.filter = ""))
            : !1 === a &&
              "number" === typeof f &&
              ((d[b].style.opacity = f / 100),
              (d[b].style.filter = "alpha(opacity=" + f + ")")),
          G(d[b], r),
          (d[b].style.borderStyle = h),
          (d[b].style.cursor = m),
          (d[b].redips.enabled = r);
      else if ("init" === a) {
        var n = Q(d[b], "overflow");
        if ("visible" !== n) {
          REDIPS.event.add(d[b], "scroll", J);
          n = Q(d[b], "position");
          var u = N(d[b], n, !1);
          n = !e.test(d[b].className);
          U[c] = {
            div: d[b],
            offset: u,
            midstX: (u[1] + u[3]) / 2,
            midstY: (u[0] + u[2]) / 2,
            autoscroll: n,
          };
          u = d[b].getElementsByTagName("table");
          for (n = 0; n < u.length; n++) u[n].sca = U[c];
          c++;
        }
      }
  };
  var eb = function (a) {
    "object" === typeof a && "DIV" === a.nodeName
      ? (a.remove(), G(a, !1))
      : "string" === typeof a &&
        (a = document.getElementById(a)) &&
        (a.remove(), G(a, !1));
  };
  var Q = function (a, b) {
    var c;
    a && a.currentStyle
      ? (c = a.currentStyle[b])
      : a &&
        window.getComputedStyle &&
        (c = document.defaultView.getComputedStyle(a, null)[b]);
    return c;
  };
  var E = function (a, b, c) {
    b = b.parentNode;
    for (void 0 === c && (c = 0); b; ) {
      if (b.nodeName === a)
        if (0 < c) c--;
        else break;
      b = b.parentNode;
    }
    return b;
  };
  var cb = function (a, b) {
    var c = E("TABLE", b);
    switch (a) {
      case "firstInColumn":
        a = 0;
        b = b.cellIndex;
        break;
      case "firstInRow":
        a = b.parentNode.rowIndex;
        b = 0;
        break;
      case "lastInColumn":
        a = c.rows.length - 1;
        b = b.cellIndex;
        break;
      case "lastInRow":
        a = b.parentNode.rowIndex;
        b = c.rows[a].cells.length - 1;
        break;
      case "last":
        a = c.rows.length - 1;
        b = c.rows[a].cells.length - 1;
        break;
      default:
        a = b = 0;
    }
    return [a, b, c.rows[a].cells[b]];
  };
  var mb = function (a, b) {
    200 === a.status
      ? Pa(b.targetTable, a.responseText)
      : REDIPS.drag.error.loadContent({
          type: 0,
          message: "AJAX error: [" + a.status + "] " + a.statusText,
          content: null,
          rowIndex: null,
          cellIndex: null,
        });
  };
  var Pa = function (a, b) {
    "string" === typeof a && (a = document.getElementById(a));
    if (void 0 === a || null === a || "TABLE" !== a.nodeName)
      REDIPS.drag.error.loadContent({
        type: 0,
        message: "Target table does not exist",
        content: null,
        rowIndex: null,
        cellIndex: null,
      });
    else {
      if (Array.isArray(b)) var c = b;
      else
        try {
          c = JSON.parse(b);
        } catch (n) {
          REDIPS.drag.error.loadContent({
            type: 0,
            message: n.message,
            content: null,
            rowIndex: null,
            cellIndex: null,
          });
          return;
        }
      for (b = 0; b < c.length; b++) {
        var d = c[b][0];
        var e = c[b][1];
        var f = c[b][2];
        var h = c[b][3];
        var m = c[b][4];
        var r = document.createElement("div");
        r.id = d;
        r.className = qa("redips-drag " + h);
        r.innerHTML = m;
        if (void 0 === a.rows[e]) {
          if (
            ((r = REDIPS.drag.error.loadContent({
              type: 1,
              message: "Target TR [" + e + "] does not exist",
              content: m,
              rowIndex: e,
              cellIndex: f,
            })),
            !1 === r)
          )
            break;
        } else if (void 0 === a.rows[e].cells[f]) {
          if (
            ((r = REDIPS.drag.error.loadContent({
              type: 2,
              message: "Target TD [" + e + "," + f + "] does not exist",
              content: m,
              rowIndex: e,
              cellIndex: f,
            })),
            !1 === r)
          )
            break;
        } else a.rows[e].cells[f].appendChild(r), ta(!0, r);
      }
    }
  };
  var fb = function (a, b, c) {
    var d = "GET",
      e = "",
      f;
    void 0 === O && (O = new XMLHttpRequest());
    "object" === typeof c &&
      ("string" === typeof c.method && "POST" === c.method && (d = "POST"),
      "string" === typeof c.data && (e = c.data));
    O.open(d, a, !0);
    O.onreadystatechange = function () {
      if (O.readyState === XMLHttpRequest.DONE) {
        if (200 !== O.status && ((f = REDIPS.drag.error.ajax(O, c)), !1 === f))
          return;
        "function" === typeof b && b.call(this, O, c);
      }
    };
    O.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    "GET" === d
      ? O.send(null)
      : (O.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded",
        ),
        O.send(e));
  };
  var Da = function (a, b, c) {
    var d = function (h, m) {
      REDIPS.drag.event.relocateBefore(h, m);
      var r = REDIPS.drag.getPosition(m);
      REDIPS.drag.moveObject({
        obj: h,
        target: r,
        callback: function (n) {
          var u = REDIPS.drag.findParent("TABLE", n),
            x = u.redips.idx;
          REDIPS.drag.event.relocateAfter(n, m);
          xa[x]--;
          0 === xa[x] &&
            (REDIPS.drag.event.relocateEnd(), REDIPS.drag.enableTable(!0, u));
        },
      });
    };
    if (a !== b && "object" === typeof a && "object" === typeof b) {
      var e = a.childNodes.length;
      if ("animation" === c) {
        if (0 < e) {
          c = E("TABLE", b);
          var f = c.redips.idx;
          REDIPS.drag.enableTable(!1, c);
          for (c = 0; c < e; c++)
            1 === a.childNodes[c].nodeType &&
              "DIV" === a.childNodes[c].nodeName &&
              (xa[f]++, d(a.childNodes[c], b));
        }
      } else
        for (d = c = 0; c < e; c++)
          1 === a.childNodes[d].nodeType && "DIV" === a.childNodes[d].nodeName
            ? ((f = a.childNodes[d]),
              REDIPS.drag.event.relocateBefore(f, b),
              b.appendChild(f),
              f.redips && !1 !== f.redips.enabled && G(f),
              REDIPS.drag.event.relocateAfter(f))
            : d++;
    }
  };
  var Ca = function (a, b) {
    var c = [],
      d;
    if ("TD" === a.nodeName) {
      var e = a.childNodes.length;
      if ("test" === b)
        return (a =
          p.source === a
            ? void 0
            : 0 === a.childNodes.length ||
              (1 === a.childNodes.length && 3 === a.firstChild.nodeType));
      for (d = 0; d < e; d++)
        (b = a.childNodes[0]), c.push(b), b.remove(), G(b, !1);
      return c;
    }
  };
  var Ja = function (a, b) {
    var c,
      d,
      e,
      f = !1;
    var h = function (ia, gb) {
      REDIPS.drag.shift.animation ? Da(ia, gb, "animation") : Da(ia, gb);
    };
    var m = function (ia) {
      "delete" === REDIPS.drag.shift.overflow
        ? Ca(ia)
        : "source" === REDIPS.drag.shift.overflow
          ? h(ia, p.source)
          : "object" === typeof REDIPS.drag.shift.overflow &&
            h(ia, REDIPS.drag.shift.overflow);
      f = !1;
      REDIPS.drag.event.shiftOverflow(ia);
    };
    if (a !== b) {
      var r = REDIPS.drag.shift.mode;
      var n = E("TABLE", a);
      var u = E("TABLE", b);
      var x = nb(u);
      var v = n === u ? [a.redips.rowIndex, a.redips.cellIndex] : [-1, -1];
      var R = [b.redips.rowIndex, b.redips.cellIndex];
      var S = u.rows.length;
      var ja = ob(u);
      switch (r) {
        case "vertical2":
          a =
            n === u && a.redips.cellIndex === b.redips.cellIndex
              ? v
              : [S, b.redips.cellIndex];
          break;
        case "horizontal2":
          a =
            n === u && a.parentNode.rowIndex === b.parentNode.rowIndex
              ? v
              : [b.redips.rowIndex, ja];
          break;
        default:
          a = n === u ? v : [S, ja];
      }
      "vertical1" === r || "vertical2" === r
        ? ((r = 1e3 * a[1] + a[0] < 1e3 * R[1] + R[0] ? 1 : -1),
          (b = S),
          (S = 0),
          (ja = 1))
        : ((r = 1e3 * a[0] + a[1] < 1e3 * R[0] + R[1] ? 1 : -1),
          (b = ja),
          (S = 1),
          (ja = 0));
      for (
        a[0] !== v[0] && a[1] !== v[1] && (f = !0);
        a[0] !== R[0] || a[1] !== R[1];

      )
        (n = x[a[0] + "-" + a[1]]),
          (a[S] += r),
          0 > a[S] ? ((a[S] = b), a[ja]--) : a[S] > b && ((a[S] = 0), a[ja]++),
          (v = x[a[0] + "-" + a[1]]),
          void 0 !== v && (c = v),
          void 0 !== n && (d = n),
          (void 0 !== v && void 0 !== d) || (void 0 !== c && void 0 !== n)
            ? ((v = -1 === c.className.indexOf(REDIPS.drag.mark.cname) ? 0 : 1),
              (n = -1 === d.className.indexOf(REDIPS.drag.mark.cname) ? 0 : 1),
              f && 0 === v && 1 === n && m(c),
              1 === v
                ? 0 === n && (e = d)
                : (0 === v && 1 === n && (d = e), h(c, d)))
            : f &&
              void 0 !== c &&
              void 0 === d &&
              ((v = -1 === c.className.indexOf(REDIPS.drag.mark.cname) ? 0 : 1),
              0 === v && m(c));
    }
  };
  var nb = function (a) {
    var b = [],
      c = {},
      d,
      e,
      f,
      h;
    var m = a.rows;
    for (d = 0; d < m.length; d++)
      for (e = 0; e < m[d].cells.length; e++) {
        var r = m[d].cells[e];
        a = r.parentNode.rowIndex;
        var n = r.rowSpan || 1;
        var u = r.colSpan || 1;
        b[a] = b[a] || [];
        for (f = 0; f < b[a].length + 1; f++)
          if ("undefined" === typeof b[a][f]) {
            var x = f;
            break;
          }
        c[a + "-" + x] = r;
        void 0 === r.redips && (r.redips = {});
        r.redips.rowIndex = a;
        r.redips.cellIndex = x;
        for (f = a; f < a + n; f++)
          for (b[f] = b[f] || [], r = b[f], h = x; h < x + u; h++) r[h] = "x";
      }
    return c;
  };
  var ob = function (a) {
    "string" === typeof a && (a = document.getElementById(a));
    a = a.rows;
    var b,
      c = 0,
      d,
      e;
    for (d = 0; d < a.length; d++) {
      for (e = b = 0; e < a[d].cells.length; e++)
        b += a[d].cells[e].colSpan || 1;
      b > c && (c = b);
    }
    return c;
  };
  var hb = function (a, b) {
    var c = (b.k1 - b.k2 * a) * (b.k1 - b.k2 * a);
    a += REDIPS.drag.animation.step * (4 - 3 * c) * b.direction;
    var d = b.m * a + b.b;
    "horizontal" === b.type
      ? ((b.obj.style.left = a + "px"), (b.obj.style.top = d + "px"))
      : ((b.obj.style.left = d + "px"), (b.obj.style.top = a + "px"));
    (a < b.last && 0 < b.direction) || (a > b.last && 0 > b.direction)
      ? setTimeout(function () {
          hb(a, b);
        }, REDIPS.drag.animation.pause * c)
      : (ab(b.obj),
        b.obj.redips && (b.obj.redips.animated = !1),
        "cell" === b.mode
          ? (!0 === b.overwrite && Ca(b.targetCell),
            b.targetCell.appendChild(b.obj),
            b.obj.redips && !1 !== b.obj.redips.enabled && G(b.obj))
          : $a(Qa(b.target[0]), b.target[1], b.obj),
        "function" === typeof b.callback && b.callback(b.obj));
  };
  var Ra = function (a) {
    var b, c;
    var d = (b = c = -1);
    if (void 0 === a)
      (d =
        l < g.length
          ? g[l].redips.idx
          : null === F || null === I || null === L
            ? g[K].redips.idx
            : g[F].redips.idx),
        (b = g[K].redips.idx),
        (d = [d, q, y, b, V, ha]);
    else {
      if ((a = "string" === typeof a ? document.getElementById(a) : a))
        "TD" !== a.nodeName && (a = E("TD", a)),
          a &&
            "TD" === a.nodeName &&
            ((d = a.cellIndex),
            (b = a.parentNode.rowIndex),
            (c = E("TABLE", a)),
            (c = c.redips.idx));
      d = [c, b, d];
    }
    return d;
  };
  var Qa = function (a) {
    var b;
    for (b = 0; b < g.length && g[b].redips.idx !== a; b++);
    return b;
  };
  var qa = function (a) {
    void 0 !== a && (a = a.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " "));
    return a;
  };
  var lb = function (a) {
    var b;
    for (b = 0; b < a.childNodes.length; b++)
      if (1 === a.childNodes[b].nodeType) return !0;
    return !1;
  };
  var Ga = function (a, b, c) {
    var d, e;
    "string" === typeof a &&
      ((a = document.getElementById(a)), (a = E("TABLE", a)));
    if ("TR" === a.nodeName)
      for (a = a.getElementsByTagName("td"), d = 0; d < a.length; d++)
        if (((a[d].style.backgroundColor = c || ""), "empty" === b))
          a[d].innerHTML = "";
        else
          for (e = 0; e < a[d].childNodes.length; e++)
            1 === a[d].childNodes[e].nodeType &&
              ((a[d].childNodes[e].style.opacity = b / 100),
              (a[d].childNodes[e].style.filter = "alpha(opacity=" + b + ")"));
    else
      (a.style.opacity = b / 100),
        (a.style.filter = "alpha(opacity=" + b + ")"),
        (a.style.backgroundColor = c || "");
  };
  return {
    obj: k,
    objOld: z,
    mode: D,
    td: p,
    hover: { colorTd: "#E7AB83", colorTr: "#E7AB83" },
    scroll: { enable: !0, bound: 25, speed: 20 },
    only: pa,
    mark: Fa,
    style: {
      /*borderEnabled:"solid",borderDisabled:"solid",*/ opacityDisabled: "",
      rowEmptyColor: "white",
    },
    trash: { className: "redips-trash", question: null, questionRow: null },
    saveParamName: "p",
    dropMode: "multiple",
    multipleDrop: "bottom",
    clone: Ua,
    animation: { pause: 20, step: 2, shift: !1 },
    shift: { mode: "horizontal1", after: "default", overflow: "bunch" },
    rowDropMode: "before",
    tableSort: !0,
    init: function (a) {
      if (void 0 === a || "string" !== typeof a) a = "redips-drag";
      H = document.getElementById(a);
      if (null === H) throw Error("REDIPS.drag: drag container is not set");
      ya = Y();
      document.getElementById("redips_clone") ||
        ((a = document.createElement("div")),
        (a.id = "redips_clone"),
        (a.style.width = a.style.height = "1px"),
        H.appendChild(a));
      ta("init");
      na();
      db();
      REDIPS.event.add(window, "resize", db);
      var b = H.getElementsByTagName("img");
      for (a = 0; a < b.length; a++)
        REDIPS.event.add(b[a], "mousemove", Va),
          REDIPS.event.add(b[a], "touchmove", Va);
      REDIPS.event.add(window, "scroll", J);
    },
    initTables: na,
    enableDrag: ta,
    clearTable: function (a) {
      var b;
      "string" === typeof a && (a = document.getElementById(a));
      if ("object" !== typeof a || "TABLE" !== a.nodeName)
        console.log("REDIPS.drag.clearTable: input element is not HTML table");
      else
        for (a = a.getElementsByTagName("DIV"), b = a.length - 1; 0 <= b; b--)
          T.test(a[b].className) && eb(a[b]);
    },
    enableTable: function (a, b) {
      var c;
      if ("object" === typeof b && "TABLE" === b.nodeName) b.redips.enabled = a;
      else
        for (c = 0; c < g.length; c++)
          -1 < g[c].className.indexOf(b) && (g[c].redips.enabled = a);
    },
    cloneObject: Ka,
    saveContent: function (a, b) {
      var c = "",
        d,
        e,
        f,
        h = [],
        m = REDIPS.drag.saveParamName;
      "string" === typeof a && (a = document.getElementById(a));
      if (void 0 !== a && "object" === typeof a && "TABLE" === a.nodeName) {
        var r = a.rows.length;
        for (d = 0; d < r; d++) {
          var n = a.rows[d].cells.length;
          for (e = 0; e < n; e++) {
            var u = a.rows[d].cells[e];
            if (0 < u.childNodes.length)
              for (f = 0; f < u.childNodes.length; f++) {
                var x = u.childNodes[f];
                if (
                  "DIV" === x.nodeName &&
                  -1 < x.className.indexOf("redips-drag")
                ) {
                  var v = x.className.replace(/redips-\w+/g, "");
                  v = qa(v);
                  var R = x.innerText || x.textContent;
                  c +=
                    m +
                    "[]=" +
                    x.id +
                    "_" +
                    d +
                    "_" +
                    e +
                    "_" +
                    v +
                    "_" +
                    R +
                    "&";
                  h.push([x.id, d, e, v, R]);
                }
              }
          }
        }
        c =
          "json" === b && 0 < h.length
            ? JSON.stringify(h)
            : c.substring(0, c.length - 1);
      }
      return c;
    },
    loadContent: function (a, b) {
      if (Array.isArray(b)) Pa(a, b);
      else if ("string" === typeof b)
        try {
          JSON.parse(b), Pa(a, b);
        } catch (c) {
          fb(b, mb, { targetTable: a });
        }
      else
        REDIPS.drag.error.loadContent({
          type: 0,
          message: "Invalid input parameter (URL or JSON is expected)",
          content: null,
          rowIndex: null,
          cellIndex: null,
        });
    },
    ajaxCall: fb,
    relocate: Da,
    emptyCell: Ca,
    moveObject: function (a) {
      var b = { direction: 1 };
      b.callback = a.callback;
      b.overwrite = a.overwrite;
      "string" === typeof a.id
        ? (b.obj = b.objOld = document.getElementById(a.id))
        : "object" === typeof a.obj &&
          "DIV" === a.obj.nodeName &&
          (b.obj = b.objOld = a.obj);
      if ("row" === a.mode) {
        b.mode = "row";
        var c = Qa(a.source[0]);
        var d = a.source[1];
        z = b.objOld = g[c].rows[d];
        if (z.redips && !0 === z.redips.emptyRow) return !1;
        b.obj = za(b.objOld, "animated");
      } else if (b.obj && -1 < b.obj.className.indexOf("redips-row")) {
        b.mode = "row";
        b.obj = b.objOld = z = E("TR", b.obj);
        if (z.redips && !0 === z.redips.emptyRow) return !1;
        b.obj = za(b.objOld, "animated");
      } else b.mode = "cell";
      if ("object" === typeof b.obj && null !== b.obj) {
        b.obj.style.zIndex = 999;
        b.obj.redips &&
          H !== b.obj.redips.container &&
          ((H = b.obj.redips.container), na());
        c = N(b.obj);
        var e = c[1] - c[3];
        var f = c[2] - c[0];
        var h = c[3];
        var m = c[0];
        !0 === a.clone &&
          "cell" === b.mode &&
          ((b.obj = Ka(b.obj, !0)), REDIPS.drag.event.cloned(b.obj));
        void 0 === a.target
          ? (a.target = Ra())
          : "object" === typeof a.target &&
            "TD" === a.target.nodeName &&
            (a.target = Ra(a.target));
        b.target = a.target;
        c = Qa(a.target[0]);
        d = a.target[1];
        a = a.target[2];
        d > g[c].rows.length - 1 && (d = g[c].rows.length - 1);
        b.targetCell = g[c].rows[d].cells[a];
        "cell" === b.mode
          ? ((c = N(b.targetCell)),
            (d = c[1] - c[3]),
            (a = c[2] - c[0]),
            (e = c[3] + (d - e) / 2),
            (f = c[0] + (a - f) / 2))
          : ((c = N(g[c].rows[d])), (e = c[3]), (f = c[0]));
        c = e - h;
        a = f - m;
        b.obj.style.position = "fixed";
        Math.abs(c) > Math.abs(a)
          ? ((b.type = "horizontal"),
            (b.m = a / c),
            (b.b = m - b.m * h),
            (b.k1 = (h + e) / (h - e)),
            (b.k2 = 2 / (h - e)),
            h > e && (b.direction = -1),
            (c = h),
            (b.last = e))
          : ((b.type = "vertical"),
            (b.m = c / a),
            (b.b = h - b.m * m),
            (b.k1 = (m + f) / (m - f)),
            (b.k2 = 2 / (m - f)),
            m > f && (b.direction = -1),
            (c = m),
            (b.last = f));
        b.obj.redips && (b.obj.redips.animated = !0);
        hb(c, b);
        return [b.obj, b.objOld];
      }
    },
    shiftCells: Ja,
    deleteObject: eb,
    getPosition: Ra,
    rowOpacity: Ga,
    rowEmpty: function (a, b, c) {
      a = document.getElementById(a).rows[b];
      void 0 === c && (c = REDIPS.drag.style.rowEmptyColor);
      void 0 === a.redips && (a.redips = {});
      a.redips.emptyRow = !0;
      Ga(a, "empty", c);
    },
    getScrollPosition: Y,
    getStyle: Q,
    findParent: E,
    findCell: cb,
    event: {
      changed: function () {},
      clicked: function () {},
      cloned: function () {},
      clonedDropped: function () {},
      clonedEnd1: function () {},
      clonedEnd2: function () {},
      dblClicked: function () {},
      deleted: function () {},
      dropped: function () {},
      droppedBefore: function () {},
      finish: function () {},
      moved: function () {},
      notCloned: function () {},
      notMoved: function () {},
      shiftOverflow: function () {},
      relocateBefore: function () {},
      relocateAfter: function () {},
      relocateEnd: function () {},
      rowChanged: function () {},
      rowClicked: function () {},
      rowCloned: function () {},
      rowDeleted: function () {},
      rowDropped: function () {},
      rowDroppedBefore: function () {},
      rowDroppedSource: function () {},
      rowMoved: function () {},
      rowNotCloned: function () {},
      rowNotMoved: function () {},
      rowUndeleted: function () {},
      switched: function () {},
      undeleted: function () {},
    },
    error: { ajax: function () {}, loadContent: function () {} },
  };
})();
REDIPS.event ||
  (REDIPS.event = (function () {
    return {
      add: function (t, T, B) {
        t.addEventListener
          ? t.addEventListener(T, B, !1)
          : t.attachEvent
            ? t.attachEvent("on" + T, B)
            : (t["on" + T] = B);
      },
      remove: function (t, T, B) {
        t.removeEventListener
          ? t.removeEventListener(T, B, !1)
          : t.detachEvent
            ? t.detachEvent("on" + T, B)
            : (t["on" + T] = null);
      },
    };
  })());
