function E_(a, b, c, d) {
    T.call(this);
    this.F = a;
    this.B = b;
    this.D = c;
    this.k = this.o = null;
    this.H = new KZ(a, b);
    this.j = null;
    this.C = new PZ(this.H, b, this.D, d);
    this.A = this.ka = this.ja = this.V = this.W = NaN;
    this.K = !1;
    this.O = NaN;
    this.ba = 0;
    this.ea = this.G = !1;
    this.la = {};
    this.S = "";
    this.ga = !1;
    this.X = this.I = 0
}
inherit(E_, T);
E_.B = !1;
E_.j = 2 / 24;
E_.o = 1E3;
E_.k = .2;
E_.A = 1E4;
f = E_.prototype;
f.initialize = function (a, b, c) {
    a = a || 0;
    var d = this.C;
    d.B = "i";
    RZ(d, b);
    ZZ(d);
    d.G = d.A;
    $Z(d);
    d.o = d.C;
    b = YZ(d);
    this.o = new b_(this.B, b.j);
    this.k = new b_(this.B, b.video);
    this.publish("videoformatchange", b);
    this.A = a;
    c ? (this.G = !0, F_(this)) : G_(this)
};
function G_(a) {
    0 == a.A && (a.o.o.o || H_(a, a.o, !0), a.k.o.o || H_(a, a.k, !0));
    a.seek(a.A);
    I_(a, "gv")
}
f.resume = function () {
    this.G && (this.G = !1)
};
f.ow = function (a) {
    this.resume();
    this.j = a;
    mu(a) && (a.j.addEventListener("updateend", x(this.qc, this), !1), a.k.addEventListener("updateend", x(this.qc, this), !1));
    I_(this, "msa");
    this.R && this.M && Tw();
    this.qc();
    this.ja = Qf(x(this.qc, this), E_.A)
};
function J_(a) {
    a.j && a.j.j && a.j.j.removeEventListener && (a.j.j.removeEventListener("updateend", x(a.qc, a), !1), a.j.k.removeEventListener("updateend", x(a.qc, a), !1));
    a.j = null;
    a.G = !0;
    a.o && (k_(a.k, !1), k_(a.o, !1))
}
function K_(a) {
    a.j && ku(a.j) && J_(a)
}
function L_(a, b, c) {
    if (!b.D.k || !c.remove)
        return !1;
    if (c.updating)
        return !0;
    if (!b.D.j && c.buffered.length)
        return a = c.buffered.end(c.buffered.length - 1), c.remove(0, a), b.D.j = !0;
    b = b.D;
    b.k = !1;
    b.j = !1;
    a.publish("seekrequired");
    return !1
}
function M_(a, b, c) {
    if (a.G)
        return !1;
    if (!b.k) {
        if (!b.o.Nc())
            return b.o.o || H_(a, b, !1), !1;
        h_(b, a.A)
    }
    var d = b.B.length + c.B.length;
    (r_(b) || r_(c) || a.D.isLive) && --d;
    if (2 <= d + 1)
        return !1;
    d = b.k;
    4 == d.type && d.j.Nc() && (b.k = bb(d.j.ij(d)), d = b.k);
    !d.F && !d.j.rh(d) || d.j.info.j && 4 == d.type ? a = !1 : t_(b) && !a.B.o ? a = !0 : (!(c = d.F || b.C + c.C > a.B.j || !!(c.k && !c.k.F && c.k.D < d.D)) && (c = 3 == d.type) && (d = d.D, b = N_(a, b, !0), Jt(a.C.j) || (c = (y() - a.ba) / 1E3, b = Math.min(b, 30 + 2 * c)), c = d > a.A + b), a = c ? !1 : !0);
    return a
}
function O_(a, b, c) {
    if (!a.j || ju(a.j) || mu(a.j)) {
        var d = a.A, e;
        e = a.H;
        c = LZ(e, b.o.info.ra, c.o.info.ra, 0);
        e = NF(e.j) + c * OF(e.j) + c / PF(e.j);
        e = Math.max(e, e + 5 - c / b.o.info.ra);
        d = d + e;
        a = a.C;
        t: {
            a = !a.o || !a.C || a.o.info.ra >= a.C.info.ra ? !1 : a.C.info.video.width > 1.6 * a.o.info.video.width ? !0 : "r" == a.B;
            if (b.B.length) {
                if (b.B[0].info.j[0].startTime <= d)
                    break t;
                l_(b)
            }
            for (e = b.j.length - 1; 0 <= e; e--)
                c = b.j[e], c.info.startTime > d && (b.j.pop(), b.j.length && b.j[e - 1].buffer == c.buffer || (b.C -= c.buffer.byteLength));
            b.B.length ? b.k = bb(b.B[b.B.length -
            1].info.j) : b.j.length ? b.k = bb(b.j).info : b.k = b.A;
            a && b.k && d < b.k.startTime && (b.k = b.o.ki(d, !0).j[0])
        }
    }
}
function P_(a, b, c) {
    M_(a, b, c);
    var d = b.k;
    if (b.k.j.Nc()) {
        t_(b) && !a.B.o && (O_(a, b, c), b.k || h_(b, a.A));
        var d = b.k, e = d.D - a.A, g = !d.aa || 0 == d.k && 0 == d.o ? 0 : d.aa.length - (d.o + d.k);
        s_(b) && (t_(b) || 25 >= e) && 0 == g && (g = d.startTime + E_.j, d.k && (g += d.duration), h_(b, g), d = b.k);
        d.j.Qh() ? (c = LZ(a.H, d.j.info.ra, c.o.info.ra, e), e = s_(b), c = mH(d.j, d, c), c
    .
        aa && 1 < c.j.length && (e ? c = mH(d.j, d, c.j[0].k) : (e = c.j[c.j.length - 1], g = e.k / c.aa.length,
        !e.C && .4 > g && (c = mH(d.j, d, c.aa.length - e.k))
    )),
        d = c
    ) :
        d = LC(d.j, d)
    } else
        d.j.Qh() ? (c = LZ(a.H, b.o.info.ra, c.o.info.ra,
            0), d = mH(d.j, d, c)):d = LC(d.j, d);
    c_(b, Q_(a, d))
}
function Q_(a, b) {
    if (3 == b.j[b.j.length - 1].type) {
        var c;
        t: {
            c = a.C;
            var d = b.j[0].j;
            if (d.info.video) {
                if (c.o != d) {
                    c.o = d;
                    c = YZ(c);
                    break t
                }
            } else
                c.G = d;
            c = null
        }
        c && a.publish("videoformatchange", c)
    }
    c = yG(b);
    var d = a.F;
    var f = a.H;
    var g = Math.min(2.5, NF(f.j))
    var e = MZ(f);
    c = new v_(a.B, b, new D_(d, c, c - g * e));
    c.H = a.xB.bind(a);
    c.start();
    return c
}
f.xB = function (a) {
    if (this.ha() || 3 > a.state) return;
    var b = a.info.j[0].j, c = !this.R && b.info.video, d = !this.M && b.info.j;
    4 == a.state ? (c ? I_(this, "vrr") : d && I_(this, "arr"), a.start()) : 5 == a.state ? (c ? (this.R = a.k ? MC(a.k) : "", Vw()) : d && (this.M = a.k ? MC(a.k) : ""), D(a.B, function (a) {
        tG(a.info) && a.info.j.kp(a)
    }), ib(a.B, function (a) {
        return $G(a, this.B.X)
    }, this) && !a.B[0].info.j.Nl() ? this.qc() : this.Ie(!0, "fmt.unparseable", x_(a))) : 3 == a.state ? (this.qc(), c && Vw()) : 6 == a.state && y_(a) ? (this.Ie(!1, a.getErrorCode(), x_(a)), (c = b.info.video &&
    0 < a.A && 90 && !WZ(this.C)) && VZ(this.C, b.info), 6 == a.state && "net.timeout" == a.C || c ? (n_(b.info.video ? this.k : this.o, a), this.qc()) : a.start()) : tG(a.info.j[0]) ? (b.B = !0, this.qc()) : this.Ie(!0, "net.retryexhausted", x_(a))
};
function R_(a) {
    if (isNaN(a.W)) {
        var b = x(a.qc, a);
        a.W = L(b, 0)
    }
}
function F_(a) {
    if (isNaN(a.V)) {
        var b = x(function () {
            this.V = NaN;
            this.qc()
        }, a);
        a.V = L(b, E_.o)
    }
}
f.qc = function () {
    this.W = NaN;
    K_(this);
    if (this.j && !lu(this.j))
        if (this.D.isLive)
            Infinity != this.O && (this.O = Infinity, this.j.Qf(Infinity));
        else if (!isFinite(this.O)) {
            var a = Math.floor(Math.max(this.o.o.index.$f(), this.k.o.index.$f()));
            0 < a && (this.j.Qf(a), this.O = a)
        }
    if (!this.ha())
        if (a = this.D, y() - a.H >= a.C) {
            if (3 == this.D.A && (this.Ie(!(3 > this.D.k), this.D.getErrorCode(), {rc: this.D.K.toString()}), !(3 > this.D.k)))
                return;
            a = this.D;
            if (3 != a.A || y() - a.G >= 1E3 * Math.pow(2, a.k))
                if (a = this.D, 1 != a.A) {
                    var b;
                    t: {
                        var c = a.j;
                        for (b in c) {
                            b =
                                c[b];
                            break t
                        }
                        b = void 0
                    }
                    b = Re(a.I, {start_seq: (b.index.Gb() + 1).toString()});
                    a.G = y();
                    uH(a, b)
                }
            F_(this)
        } else if (this.D.isLive && (u_(this.k) || u_(this.o)) && (b = S_(this), isNaN(b) || this.seek(b)), "prerender" == window.document.webkitVisibilityState)
            F_(this);
        else if (K_(this), d_(this.k), d_(this.o), this.o.o.o || (!this.G || SF(this.F) ? G_(this) : F_(this)), !this.j || L_(this, this.o, this.j.j) || L_(this, this.k, this.j.k) || ((b = T_(this, this.k, this.j.k)) && !this.I && (this.I = y(), I_(this, "vda"), this.X && Vw()), a = Qr(this.j.k.buffered, this.A +
            E_.j), isNaN(a) && !j_(this.k) && this.j.j.buffered.length || (j_(this.k) && (a = NaN), a = T_(this, this.o, this.j.j, a), b |= a, a && !this.X && (this.X = y(), I_(this, "ada"), this.I && Vw())), j_(this.k) && j_(this.o) && ju(this.j) && !lu(this.j) && (a = this.j, ju(a) && a.o.endOfStream(), a = this.F, uq(QF(a)), a.o = y()), b && !mu(this.j) && R_(this)), U_(this, this.k, TZ(this.C)), U_(this, this.o, UZ(this.C)), this.k.o.B || this.o.o.B)
            this.Ie(!0, "net.retryexhausted");
        else {
            b = this.I ? y() - this.I : 0;
            if (this.ga || b >= this.B.G)
                M_(this, this.k, this.o) && P_(this, this.k,
                    this.o), M_(this, this.o, this.k) && P_(this, this.o, this.k);
            this.B.M && this.S && !this.G && SF(this.F) && (b = this.S, this.S = "", a = rj(b), Bj(b, {
                format: "RAW",
                responseType: "arraybuffer",
                timeout: 15E3,
                onError: x(this.Ie, this, !1, "pathprobe.net", {shost: a})
            }))
        }
};
function T_(a, b, c, d) {
    if (c.updating)
        return !0;
    var e = b.j.length ? b.j[0] : null;
    if (!e)
        return !1;
    !b.A || b.A.C || uG(b.A, e.info) || (b.A = null, ju(a.j) && c.abort(), c.j = null);
    var g;
    if (g = a.D.isLive) {
        var h = BG(e);
        g = !!LG(h, 0, 1718909296)
    }
    h = !(!b.I.I || !b.j.length || 1 != b.j[0].info.j.info.o || 0 != b.j[0].info.o) && !a.D.B;
    if (g)
        c.j = null;
    else {
        if (g = h || !e.j)
            g = e.info.j.j, c.j == g ? g = !1 : (V_(a, c, g), c.j = g, a.publish("initsegment", c.j), g = c.updating);
        if (g)
            return !0
    }
    g = N_(a, b, !1);
    g = a.A + g;
    0 <= d && (g = Math.min(g, d));
    d = f_(b, g);
    if (!d)
        return !1;
    if (h) {
        if (e_(b))
            return !1;
        var k;
        t: {
            e_(b);
            var h = b.j[0], l = BG(h);
            g = l.getInt32(0);
            if (g > l.byteLength) {
                var p = b.j[1];
                if (p.aa.length + l.byteLength < g) {
                    k = null;
                    break t
                }
                k = new Uint8Array(g);
                l = new Uint8Array(h.buffer, h.aa.start, h.aa.length);
                k.set(l);
                l = new Uint8Array(p.buffer, p.aa.start, g - h.aa.length);
                k.set(l, h.aa.length);
                l = new DataView(k.buffer)
            }
            var r = h.info.j.index.Vk(h.info.A);
            (l = KG(l, r)) ? (k ? (g_(b, h.aa), g_(b, dG(p.aa.start, g - h.aa.length))) : g_(b, dG(h.aa.start, g)), k = l) : k = null
        }
        if (k)
            return V_(a, c, new Uint8Array(k)), !0
    }
    k = new Uint8Array(e.buffer,
        d.start, d.length);
    h = e.info.j.info.j ? "audio" : "video";
    if (a.D.B && 3 == e.info.type) {
        p = a.B.K && !b.F ? 0 : null === b.H ? e.info.startTime : b.H;
        if (!a.B.K || b.F)
            isNaN(p) || aH(e), b.H = p + aH(e);
        if (a.D.isLive) {
            g = e.info.j.j;
            for (var l = NaN, r = 0, u = new DataView(e.buffer); SG(u, r);) {
                var C = TG(u, r);
                if (1936286840 == C.type)
                    l = XG(C);
                else if (1836476516 == C.type)
                    l = UG(C);
                else if (1952867444 == C.type) {
                    var V = C;
                    V.data.getUint8(V.offset + 8) ? YG(V.data, V.offset + 12) : V.data.getUint32(V.offset + 12)
                }
                r = VG(C.type) ? r + 8 : r + C.size
            }
            !l && g && RG(g);
            Or("audio" == h ? a.j.j.buffered :
                a.j.k.buffered)
        }
        g = e.info.j.j;
        for (var h = NaN, O, l = 0, r = new DataView(e.buffer); SG(r, l);)
            u = TG(r, l), 1936286840 == u.type ? h = XG(u) : 1836476516 == u.type ? h = UG(u) : 1952867444 == u.type && (O = u), l = VG(u.type) ? l + 8 : l + u.size;
        !h && g && (h = RG(g));
        O.data.getUint8(O.offset + 8) ? (g = O.data, O = O.offset + 12, p = Math.round(p * h), g
    .
        setUint32(O, Math.round(p / 4294967296)), g.setUint32(O + 4, Math.round(p & 4294967295))
    ) :
        O.data.setUint32(O.offset + 12, Math.round(p * h))
    }
    if (!V_(a, c, k))
        return m_(b), !0;
    a.D.B && a.B.K && !b.F || g_(b, d);
    b.F || (b.F = !0);
    e.j && (c.j = e.info.j.j,
        a.publish("initsegment", c.j));
    return !0
}
function V_(a, b, c) {
    try {
        mu(a.j) ? b.appendBuffer(c) : b.append(c)
    } catch (d) {
        return !1
    }
    return !ku(a.j)
}
function N_(a, b, c) {
    var d;
    d = !a.B.o && (Jt(a.C.j) || a.B.R && a.ea) ? b.o.info.j ? 10485760 : 62914560 : b.o.info.j ? a.B.B : a.B.C;
    c && (d += a.B.j);
    return d / (Jt(a.C.j) ? b.k ? b.k.j.info.ra : b.o.info.ra : b.ra)
}
function S_(a) {
    if (a.D.isLive) {
        var b = a.k.o.index.wg(), c = a.k.o.index.Gb(), d = a.k.o.index;
        if (1 > a.B.liveChunkReadahead)
            return d.Ve(c) + d.qh(c) - E_.k;
        a = Math.max(b, c - a.B.liveChunkReadahead + 1);
        return d.Ve(a) + E_.k
    }
    return Math.floor(Math.min(a.o.o.index.$f(), a.k.o.index.$f()))
}
f.seek = function (a) {
    if (!this.ha()) {
        K_(this);
        this.ba = y();
        this.k.o = TZ(this.C);
        var b = W_(this, this.k, a, this.j && this.j.k);
        this.o.o = UZ(this.C);
        var c = W_(this, this.o, b, this.j && this.j.j);
        this.A = Math.max(a, b, c);
        this.K = !0;
        R_(this)
    }
};
function W_(a, b, c, d) {
    if (b.o.Nc())
        if (d) {
            var e = Qr(d.buffered, c), g = NaN, h = b.A;
            h && (g = Qr(d.buffered, h.j.index.Ve(h.A)));
            if (e == g && q_(b))
                return c;
            d = i_(b, c);
            if (0 <= d)
                return d;
            k_(b, !0);
            b.o.info.video && b.A && !b.A.C && !o_(b) && (d = b.A, b.j.length && (d = bb(b.j).info), d = b.k || d, d = mH(d.j, d, d.aa.length - (d.k + d.o)), c_(b, Q_(a, d)));
            if (isNaN(e))
                return h_(b, c);
            h_(b, e + E_.j)
        } else
            h_(b, c);
    else
        b.o.o || H_(a, b, !1), 0 != c && l_(b);
    return c
}
function U_(a, b, c) {
    b.o != c && (b.o = c, c.o || H_(a, b, !1))
}
function H_(a, b, c) {
    var d = t("ytplayer.playback_delay");
    d ? (a.Ie(!1, "playback.delay", {ms: d}), a.ka = L(x(a.Jo, a, b, c), d)) : a.Jo(b, c);
    b.o.o = !0
}
f.Jo = function (a, b) {
    var c = b ? 65536 : 0;
    b && !isNaN(2) && (c = Math.floor(Math.max(c, 2 * a.o.info.ra)));
    c = a.o.$o(c);
    D(c, function (b) {
        var c = Q_(this, b);
        !tG(b.j[b.j.length - 1]) && c_(a, c)
    }, this)
};
f.L = function () {
    J_(this);
    this.o && (l_(this.o), l_(this.k));
    Rf(this.ja);
    M(this.ka);
    this.k = this.o = null;
    E_.J.L.call(this)
};
f.Ie = function (a, b, c) {
    var d;
    if (c)
        for (var e in c)
            d = (d ? d + ";" : "") + e + "." + c[e];
    this.publish("error", new xq(b, a, d));
    a && (this.j && ju(this.j) && (a = this.j, ju(a) && a.o.endOfStream("network")), this.dispose())
};
E_.prototype.getDebugInfo = function () {
    var a = {
        lct: this.A.toFixed(3),
        lsk: this.K,
        lmf: Jt(this.C.j),
        lbw: PF(this.F).toFixed(3),
        lhd: NF(this.F).toFixed(3),
        ltd: (1E9 * OF(this.F)).toFixed(3),
        laa: this.o.A ? wG(this.o.A) : "",
        lva: this.k.A ? wG(this.k.A) : "",
        lar: this.o.k ? wG(this.o.k) : "",
        lvr: this.k.k ? wG(this.k.k) : ""
    };
    this.j && !ku(this.j) && (a.lab = Or(this.j.j.buffered), a.lvb = Or(this.j.k.buffered));
    return a
};
function I_(a, b, c) {
    a.la[b] = c ? window.performance.timing.navigationStart + c : y()
}

function X_(a, b, c, d) {
    R.call(this);
    this.o = a;
    this.H = b;
    this.C = c;
    this.j = d;
    this.B = "";
    this.k = this.D = this.F = this.G = null;
    this.A = new eu(this);
    S(this, this.A);
    this.j && (fu(this.A, this.j, ["message", "mskeymessage"], this.Kq), fu(this.A, this.j, ["error", "mskeyerror"], this.Jq), fu(this.A, this.j, ["ready", "mskeyadded"], this.Iq))
}
inherit(X_, R);
f = X_.prototype;
f.setCallbacks = function (a, b, c, d) {
    this.G = a;
    this.F = b;
    this.D = c;
    this.k = d
};
f.Kq = function (a) {
    this.G.call(this.k, a)
};
f.Jq = function (a) {
    var b;
    this.j ? (b = this.j.error.code, a = this.j.error.systemCode): (b = a.errorCode.code, a = a.systemCode);
    this.F.call(this.k, b, a)
};
f.Iq = function (a) {
    this.D.call(this.k, a)
};
f.update = function (a) {
    this.j ? this.j.update(a) : this.o.addKey ? this.o.addKey(this.H.j, a, this.C, this.B) : this.o.webkitAddKey(this.H.j, a, this.C, this.B)
};
f.L = function () {
    this.o = null;
    X_.J.L.call(this)
};
function Y_(a, b) {
    R.call(this);
    this.j = a;
    this.A = b;
    this.C = {};
    this.o = null;
    this.B = new eu(this);
    S(this, this.B);
    mt() || (fu(this.B, this.j, ["keymessage", "webkitkeymessage"], this.G), fu(this.B, this.j, ["keyerror", "webkitkeyerror"], this.F), fu(this.B, this.j, ["keyadded", "webkitkeyadded"], this.D));
    this.k = null
}
inherit(Y_, R);
function Z_(a) {
    a.k = new (mt())(a.A.j);
    a.j && (a.j.msSetMediaKeys ? a.j.msSetMediaKeys(a.k) : a.j.setMediaKeys(a.k))
}
function $_(a, b) {
    var c = a.C[b.sessionId];
    !c && a.o && (c = a.o, a.o = null, c.B = b.sessionId, a.C[b.sessionId] = c);
    return c
}
Y_.prototype.G = function (a) {
    var b = $_(this, a);
    b && b.Kq(a)
};
Y_.prototype.F = function (a) {
    var b = $_(this, a);
    b && b.Jq(a)
};
Y_.prototype.D = function (a) {
    var b = $_(this, a);
    b && b.Iq(a)
};
Y_.prototype.L = function () {
    this.j = null;
    Y_.J.L.call(this)
};
function a0(a, b, c) {
    this.url = a;
    this.interval = b;
    this.j = c
}

function b0(a, b, c) {
    this.j = a;
    this.headers = b;
    this.message = c
}

function c0(a, b, c, d, e) {
    R.call(this);
    this.H = a;
    this.k = d;
    this.k.subscribe("oauthtoken", this.ht, this);
    this.B = {session_id: e};
    yr(this, a.o);
    this.j = [];
    this.A = this.D = this.G = !1;
    var g;
    try {
        var h = c.j;
        if (mt()) {
            b.k || Z_(b);
            var k = c.k || "video/mp4", l;
            if ("com.microsoft.playready" == b.A.j) {
                var p = new Uint8Array(270);
                for (a = 0; 135 > a; a++)
                    p[2 * a] = '<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(a);
                l = b.k.createSession(k, h, p)
            } else
                l =
                    b.k.createSession(k, h);
            g = new X_(null, null, null, l)
        } else
            b.j.generateKeyRequest ? b.j.generateKeyRequest(b.A.j, h) : b.j.webkitGenerateKeyRequest(b.A.j, h), b.o = new X_(b.j, b.A, h, null), g = b.o
    } catch (r) {
        b = "g", r instanceof DOMException && (b += r.code), this.k.publish("licenseerror", "drm.unavailable", b, "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK"), g = null
    }
    if (this.o = g)
        this.o.setCallbacks(this.Cn, this.WE, this.VE, this), S(this, this.o)
}
inherit(c0, R);
f = c0.prototype;
f.ht = function (a) {
    this.F = a
};
function yr(a, b) {
    if (Yf(b)) {
        for (var c in a.B)
            b = Xe(b, c, a.B[c]);
        a.C = b
    } else
        d0(a, "drm.net", "u")
}
f.start = function () {
    this.ha() || (this.G = !0, this.j.length && this.Cn(this.j.shift()))
};
f.Cn = function (a) {
    if (!this.ha()) {
        var b = a.defaultURL || a.destinationURL;
        this.A && b && yr(this, b);
        if (this.G) {
            a = a.message;
            if ("com.microsoft.playready" == this.H.j) {
                for (var b = "", c = 0; c < a.length; c += 2)
                    b += String.fromCharCode(a[c]);
                b = (new DOMParser).parseFromString(b, "text/xml").querySelector("Challenge");
                a = Uint8Array;
                b = b.childNodes[0].data;
                if (!oL)
                    for (oL = {}, pL = {}, c = 0; 65 > c; c++)
                        oL[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), pL[oL[c]] = c, 62 <= c && (pL["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)] =
                            c);
                for (var c = pL, d = [], e = 0; e < b.length;) {
                    var g = c[b.charAt(e++)], h = e < b.length ? c[b.charAt(e)] : 0;
                    ++e;
                    var k = e < b.length ? c[b.charAt(e)] : 64;
                    ++e;
                    var l = e < b.length ? c[b.charAt(e)] : 64;
                    ++e;
                    if (null == g || null == h || null == k || null == l)
                        throw Error();
                    d.push(g << 2 | h >> 4);
                    64 != k && (d.push(h << 4 & 240 | k >> 2), 64 != l && d.push(k << 6 & 192 | l))
                }
                a = new a(d)
            }
            a = {
                format: "RAW",
                method: "POST",
                JC: a,
                responseType: "arraybuffer",
                withCredentials: !0,
                fb: this.QA,
                onError: this.Lq,
                context: this
            };
            b = this.C;
            this.F && (b = Xe(b, "access_token", this.F));
            Bj(b, a)
        } else
            this.j.push(a),
            this.D || (this.D = !0, this.k.publish("newsession", this))
    }
};
f.VE = function () {
    this.ha() || (this.A || (this.k.publish("sessionready"), this.A = !0), this.j.length && this.Cn(this.j.shift()))
};
f.QA = function (a) {
    if (!this.ha())
        if (0 != a.status && a.response) {
            t: {
                a = new Uint8Array(a.response);
                var b = 0, c = String.fromCharCode.apply(String, a.subarray(0, 16384)).split("\r\n"), d = c[0];
                qb(c, 0);
                c.pop();
                var b = b + (d.length + 2), e = d.match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);
                if (null != e)
                    for (var d = Za(e[1]), g = {}, h = 0; h < c.length; h++) {
                        e = c[h];
                        b += e.length + 2;
                        if (0 == e.length) {
                            a = new b0(d, g, a.subarray(b));
                            break t
                        }
                        e = e.match(/([^:]+):\s+([^]+)/);
                        if (null == e)
                            break;
                        g[e[1]] = e[2]
                    }
                a = null
            }
            a ? 0 != a.j ? d0(this, "drm.auth", "f" + a.j, ft(a.j)) : (b =
                                                                           (b = a.headers["Authorized-Format-Types"]) ? b.split(",") : null, c = null, (d = a.headers["Heartbeat-Url"]) && (c = new a0(d, parseInt(a.headers["Heartbeat-Interval-Secs"], 10) || 60, parseInt(a.headers["Heartbeat-Num-Retries"], 10) || 4)), (b || c) && this.k.publish("newlicense", b, c), this.o.update(a.message)
        ) :
            d0(this, "drm.net", "p", "YTP_ERROR_SERVER_ERROR")
        } else
            this.Lq(a)
};
f.WE = function (a, b) {
    this.ha() || d0(this, "drm.keyerror", "s" + a + "." + b)
};
f.Lq = function (a) {
    d0(this, "drm.net", "r" + a.status)
};
function d0(a, b, c, d) {
    a.ha() || a.k.publish("licenseerror", b, c, d);
    a.dispose()
}
f.L = function () {
    this.k = null;
    c0.J.L.call(this)
};
function e0(a, b) {
    this.j = a;
    this.k = b || null
}

function f0(a, b) {
    T.call(this);
    this.G = a;
    this.j = b;
    this.subscribe("newlicense", this.cB, this);
    this.subscribe("newsession", this.dB, this);
    this.subscribe("sessionready", this.EB, this);
    this.M = vD();
    this.A = null;
    this.F = {};
    this.k = [];
    this.o = Gt;
    this.K = new Y_("com.microsoft.playready" == b.j ? null : a, b);
    S(this, this.K);
    this.C = new Y_(a, b);
    S(this, this.C);
    this.D = 2;
    this.H = new eu(this);
    S(this, this.H);
    this.B = !1;
    this.I = null;
    fu(this.H, this.G, mt() ? ["needkey", "msneedkey"] : ["needkey", "webkitneedkey"], this.bB)
}
inherit(f0, T);
f = f0.prototype;
f.bB = function (a) {
    g0(this, new e0(a.initData, a.contentType), !0)
};
function g0(a, b, c) {
    if (!(a.ha() || "com.microsoft.playready" == a.j.j ^ !c || (c = b.j, a.B && "widevine" == a.j.k))) {
        var d = String.fromCharCode.apply(String, c);
        if (!a.F[d]) {
            a.F[d] = !0;
            d = "clearkey" == a.j.k;
            if (112 == c[4] && 115 == c[5] && 115 == c[6] && 104 == c[7] && d) {
                t: {
                    for (var e = new DataView(c.buffer), d = 0; d < e.byteLength;) {
                        var g = e.getUint32(d, !1);
                        if (1886614376 != e.getUint32(d + 4, !1))
                            break;
                        if (1477738184 == e.getUint32(d + 12, !1) && 69420633 == e.getUint32(d + 16, !1) && 2464609580 == e.getUint32(d + 20, !1) && 1558758348 == e.getUint32(d + 24, !1)) {
                            e = e.getUint32(d +
                            28, !1);
                            if (16 != e)
                                break;
                            c = c.subarray(d + 32, d + 32 + e);
                            break t
                        }
                        d += g
                    }
                    c = null
                }
                if (!c)
                    return
            }
            a.k.push(b);
            1 < a.k.length || (h0(a, b), a.B = !0)
        }
    }
}
function h0(a, b) {
    var c = new c0(a.j, a.K, b, a, a.M);
    c.ht(a.A);
    S(a, c)
}
f.cB = function (a, b) {
    a && G(a, "HD") && !It(this.o) && "com.microsoft.playready" != this.j.j && (this.o = Ht, this.publish("qualitychange"));
    b && !this.I && (this.I = b, this.publish("heartbeatparams", b))
};
f.dB = function () {
    this.ha() || (this.k.shift(), this.k.length && h0(this, this.k[0]))
};
f.EB = function () {
    this.D--;
    0 == this.D && Z_(this.C)
};
f.L = function () {
    this.G = null;
    this.k = [];
    f0.J.L.call(this)
};
function i0(a) {
    this.k = {};
    this.k.c1a = x(this.A, this);
    this.k.c3a = x(this.B, this);
    (this.j = a) && this.j.ba ? this.o = oj(this.j.ba) : this.o = []
}
i0.prototype.A = function () {
    var a = t("yt.abuse.botguardInitialized");
    return a && a() ? (a = t("yt.abuse.invokeBotguard")()) ? "r1a=" + a : null : null
};
i0.prototype.B = function (a) {
    return "r3a=" + Math.floor(this.j.lengthSeconds % Wa(a.c3a))
};
function j0(a, b, c) {
    this.j = a;
    this.reason = b;
    this.k = c
}

function k0(a, b) {
    this.j = a;
    this.k = b
}
function l0(a, b) {
    return Kt(Kt(a.j.lm, b.Dm), b.vj)
}
function m0(a, b) {
    var c;
    c = !!b.j.j;
    var d;
    Qh && !a.j.I && (d = window.screen && window.screen.width ? new H(window.screen.width, window.screen.height) : null);
    d || (d = a.j.gh ? a.j.gh.clone() : a.k.kb());
    (Qh || fd || c) && d.scale(window.devicePixelRatio || 1);
    c = d;
    var e;
    d = b.j.k;
    if (d.length) {
        for (var g = 0; g < d.length && !(e = d[g].video, null === c || .85 * e.width < c.width && .85 * e.height < c.height); g++)
            ;
        e = Rq("auto", e.quality, !1)
    } else
        e = Ht;
    c = e.j;
    bs() && (c = Math.max(c, Dt.hd1080));
    if (d = ($r("armv7") || $r("android")) && !iD(a.j))
        d = b.j.k[0], d = "9" == d.k || "(" ==
        d.k;
    d && (c = Math.min(c, Dt.large));
    c = Math.max(c, Dt.medium);
    e.j != c && (e = new Ft(e.k, c, e.o));
    return e
}

function n0() {
    this.A = this.j = NaN;
    this.o = this.k = !1
}
function rs(a, b, c, d) {
    if (d = 1 < d)
        a.o = !0;
    if (a.k)
        b != a.j && (a.k = !1);
    else if (0 < b && a.j == b)
        return c - a.A > (d || !a.o ? 1500 : 400);
    a.j = b;
    a.A = c;
    return !1
}

function o0() {
    this.k = 0;
    this.j = this.B = this.o = this.A = NaN
}

function p0(a) {
    this.k = a;
    this.j = 0;
    this.B = NaN;
    this.o = 0;
    this.ia = [];
    this.A = q0(this.k);
    this.C = this.D = 0
}
function r0(a) {
    a.A.startTime = a.o;
    a.A.endTime = a.j;
    a.ia.length && bb(a.ia).isEmpty() ? a.ia[a.ia.length - 1] = a.A : a.ia.length && a.A.isEmpty() || a.ia.push(a.A);
    a.D += a.j - a.o;
    a.A = q0(a.k);
    a.o = a.j
}
function s0(a) {
    return a.D + a.k.k() - a.o
}
function t0(a) {
    a.ia.length && a.j == a.o || r0(a);
    var b = a.ia;
    a.ia = [];
    return b
}
p0.prototype.update = function () {
    var a = this.k.k() || 0, b = u0(this.k);
    if (a != this.j || v0(this, a, b)) {
        if (a < this.j || a - this.j > b - this.B + .5 || v0(this, a, b))
            r0(this), this.o = a;
        this.B = b;
        this.j = a
    }
};
function v0(a, b, c) {
    c -= a.B;
    return b == a.j && .5 < c
}

function w0(a, b) {
    this.Z = b;
    this.o = !1;
    this.j = a
}
w0.prototype.k = function () {
    return {ps: this.Z.j, el: this.Z.da}
};
w0.prototype.send = function () {
    this.o || (hg(Re(this.Z.A + "set_awesome", this.k())), this.o = !0)
};
function x0(a, b, c) {
    w0.call(this, b, c);
    this.A = a
}
inherit(x0, w0);
x0.prototype.k = function () {
    var a = x0.J.k.call(this);
    qa(a, this.Z.o);
    var b = Pc(this.j.Mj / this.j.lengthSeconds, 0, 1);
    qa(a, {
        html5: "1",
        video_id: this.j.videoId,
        eurl: this.Z.F,
        framer: this.Z.S,
        feature: this.Z.O,
        list: this.j.playlistId,
        w: b,
        l: this.j.lengthSeconds,
        plid: this.j.playbackId,
        ei: this.j.G,
        access_token: this.j.B,
        tpmt: s0(this.A),
        cpn: this.j.ya
    });
    this.Z.D && (a.adformat = this.Z.D);
    this.Z.referrer && (a.referrer = FZ(this.Z));
    this.Z.autoplay && (a.autoplay = "1");
    this.Z.Za && (a.authuser = this.Z.Za);
    this.Z.pageId && (a.pageid =
        this.Z.pageId);
    this.j.Zd && (a.splay = "1");
    this.j.subscribed && (a.subscribed = this.j.subscribed);
    qa(a, x0.J.k.call(this));
    qa(a, this.Z.o);
    return a
};
function y0(a) {
    R.call(this);
    this.j = a;
    this.o = {};
    this.M = NaN;
    this.B = new Jv(this.LA, 3E4, this);
    S(this, this.B);
    this.C = new Jv(this.dj, 100, this);
    S(this, this.C);
    this.k = "N";
    this.A = 0;
    this.P = NaN;
    this.H = 0;
    this.G = this.S = "";
    this.F = this.I = 0;
    this.K = this.D = !1
}
inherit(y0, R);
var z0 = {5: "N", "-1": "N", 3: "B", 0: "EN", 2: "PA", 1: "PL"};
function A0(a, b, c, d) {
    var e = a.o[b];
    e || (e = [], a.o[b] = e);
    a = 0 <= d ? d : u0(a.j);
    e.push(a.toFixed(3) + ":" + c.join(":"))
}
f = y0.prototype;
f.dj = function (a) {
    a = a || u0(this.j);
    var b = this.j.C();
    if (!isNaN(this.O) && !isNaN(b.o)) {
        var c = b.o - this.O;
        0 < c && A0(this, "bwm", [c, (b.B - this.R).toFixed(3)], a)
    }
    this.O = b.o;
    this.R = b.B;
    isNaN(b.j) || A0(this, "bwe", [b.j.toFixed(0)], a);
    isNaN(b.k) || (c = b.k, b.A < c && (c = b.A), this.P != c && (A0(this, "bh", [c.toFixed(3)], a), this.P = c), this.j.Z.experiments.A && 3 > c && ("PL" == this.k || "B" == this.k) && this.C.start());
    A0(this, "cmt", [this.j.k()], a)
};
function B0(a) {
    var b = {event: "streamingstats"};
    if (a.j.j.o) {
        b.fmt = a.j.j.o.id;
        var c = a.j.j.D;
        c && c.id != b.fmt && (b.afmt = c.id)
    }
    b.cpn = a.j.j.ya;
    b.ei = a.j.j.G;
    b.el = a.j.Z.da;
    b.docid = a.j.j.videoId;
    b.ns = a.j.Z.Rc;
    b.fexp = a.j.Z.experiments.experimentIds.toString();
    b.cl = a.j.j.ac;
    a.j.Z.D && (b.adformat = a.j.Z.D);
    a.j.j.Na && (b.live = a.j.j.rb ? "dvr" : "live");
    b.html5 = "1";
    return b
}
f.Sg = function (a) {
    if (!this.ha() && !Vb(this.o)) {
        this.C.isActive() || this.dj(a);
        a = IZ(this.j.Z).hmewdrop;
        a > this.H && A0(this, "df", [a - this.H]);
        this.H = a;
        a = B0(this);
        cc(a, this.j.Z.o);
        a = Re(this.j.Z.ob, a);
        for (var b in this.o)
            a += "&" + b + "=" + this.o[b].join(",");
        hg(a);
        this.o = {};
        this.B.start()
    }
};
f.Tf = function () {
    A0(this, "vps", ["N"]);
    this.j.j.Ma && (this.o.cat = ["preload"]);
    this.M = Qf(x(this.Sg, this), 1E4);
    this.B.start()
};
f.onError = function (a, b) {
    var c = this.j.k(), c = [a, c.toFixed(3)];
    b && c.push(b);
    var d = u0(this.j);
    A0(this, "error", c, d);
    this.dj(d)
};
f.LA = function () {
    "PL" == this.k && (A0(this, "vps", [this.k]), this.Sg())
};
f.L = function () {
    y0.J.L.call(this);
    Rf(this.M)
};
function C0(a, b, c, d) {
    this.Z = b;
    this.segments = [];
    this.experimentIds = [];
    this.I = !1;
    this.j = "watchtime" == c;
    this.ba = "playback" == c;
    this.W = "delayplay" == c;
    this.H = "atr" == c;
    this.ea = "engage" == c;
    this.oa = this.H ? "/api/stats/" + c : "//" + b.cf + "/api/stats/" + c;
    d && (this.hu = d.fs, d.rtn && (this.Ug = d.rtn), this.j ? (this.Xa = d.state, 0 < d.rti && (this.jj = d.rti)) : (this.ga = d.mos, this.ka = d.volume, d.at && (this.adType = d.at), d.allowed && (this.A = d.allowed), d.ex_ads && (this.G = d.ex_ads)), d.autonav && (this.Nh = d.autonav));
    this.pa = b.D;
    this.autoplay =
        b.autoplay;
    this.xa = b.M;
    this.Aa = $b(b.o);
    this.Ua = b.F;
    this.Ia = b.da;
    this.experimentIds = b.experiments.experimentIds;
    this.P = b.P;
    this.qq = b.Rc;
    this.referrer = b.referrer;
    this.region = b.region;
    this.k = b.O;
    this.searchQuery = b.searchQuery;
    this.userAge = b.userAge;
    this.X = b.lc;
    this.na = tZ();
    this.autoplay = a.Jg || this.autoplay;
    this.Nh = a.Rp || this.Nh;
    this.R = a.Oj;
    this.va = a.ya;
    this.D = a.Tn;
    this.V = a.Zm;
    this.o = a.Mj;
    this.M = a.Ue;
    a.o && (this.Ga = a.o.id, a.D && a.D.id != this.Ga && (this.C = a.D.id));
    this.iu = a.Zd;
    this.Ma = a.Nj;
    a.Na && (this.ja =
        a.rb ? "dvr" : "live");
    this.Va = a.rn;
    this.playbackId = a.playbackId;
    this.Ea = a.G;
    this.playlistId = a.playlistId;
    this.k = a.Va || this.k;
    this.O = a.ob;
    this.S = a.Kb;
    this.ob = a.Wn;
    this.subscribed = a.subscribed;
    this.nb = a.ac;
    this.videoId = a.videoId;
    this.Kb = a.hw;
    this.ib = a.nb;
    this.Wa = a.gw
}
f = C0.prototype;
f.Nh = !1;
f.autoplay = !1;
f.hz = !1;
f.Tp = !1;
f.hu = !1;
f.iz = !1;
f.iu = !1;
f.qq = "yt";
f.jj = null;
f.Ug = null;
f.send = function () {
    if (!this.I) {
        var a = D0(this), a = Re(this.oa, a);
        this.H ? this.B && Bj(a, {method: "POST", Eb: {atr: this.B}}) : hg(a);
        this.I = !0
    }
};
function D0(a) {
    var b = {
        ns: a.qq,
        el: a.Ia,
        cpn: a.va,
        docid: a.videoId,
        ver: 2,
        referrer: a.referrer,
        cmt: a.mf(a.o),
        plid: a.playbackId,
        ei: a.Ea,
        fmt: a.Ga,
        fs: a.hu ? "1" : "0",
        rt: a.mf(a.la),
        of: a.Wa,
        adformat: a.pa,
        content_v: a.xa,
        euri: a.Ua,
        subscribed: a.subscribed,
        lact: a.na,
        live: a.ja,
        cl: a.nb,
        mos: a.ga,
        q: a.searchQuery,
        osid: a.ib,
        state: a.Xa,
        vm: a.Kb,
        volume: a.ka
    };
    qa(b, a.Aa);
    a.Nh && (b.autonav = "1");
    a.autoplay && (b.autoplay = "1");
    a.Tp && (b["final"] = "1");
    a.iu && (b.splay = "1");
    a.M && (b.delay = a.M);
    a.P && (b.hl = a.P);
    a.region && (b.cr = a.region);
    n(a.userAge) &&
    a.X && (b.uga = a.X + a.userAge);
    n(a.K) && (b.len = a.mf(a.K));
    !a.j && 0 < a.experimentIds.length && (b.fexp = a.experimentIds.toString());
    null != a.Ug && (b.rtn = a.mf(a.Ug));
    a.k && (b.feature = a.k);
    a.playlistId && (b.list = a.playlistId);
    a.O && (b.ctrl = a.O);
    a.S && (b.ytr = a.S);
    a.ob && (b.ssrt = "1");
    a.C && (b.afmt = a.C);
    a.j ? (b.idpj = a.Ma, b.ldpj = a.Va, null != a.jj && (b.rti = a.mf(a.jj))) : (n(a.adType) && (b.at = a.adType), n(a.A) && (b.allowed = a.A), n(a.G) && (b.ex_ads = a.G));
    (a.ba || a.W) && a.R && (b.tst = a.R);
    a.j && (b.st = E0(a, E(a.segments, function (a) {
        return a.startTime
    })),
        b.et = E0(a, E(a.segments, function (a) {
            return a.endTime
        })));
    hb(a.segments, function (a) {
        return 0 != a.visibilityState
    }) && (b.vis = E0(a, E(a.segments, function (a) {
        return a.visibilityState
    })));
    hb(a.segments, function (a) {
        return 1 != a.playbackRate
    }) && (b.rate = E0(a, E(a.segments, function (a) {
        return a.playbackRate
    })));
    hb(a.segments, function (a) {
        return "-" != a.Ak
    }) && (b.cc = E(a.segments, function (a) {
        return a.Ak
    }).join(","));
    uj() && a.D && (b.ctt = a.D, b.cttype = a.V);
    a.ea && (b.etype = n(a.F) ? a.F : 0);
    return b
}
f.mf = function (a) {
    return (1 * a.toFixed(3)).toString()
};
function E0(a, b) {
    return E(b, a.mf).join(",")
}

function F0(a) {
    R.call(this);
    this.j = a;
    this.A = new y0(a);
    S(this, this.A);
    this.k = new p0(a);
    this.C = "paused";
    this.D = NaN;
    this.G = [10, 10, 10, 40];
    this.H = this.F = 0;
    this.M = this.P = this.K = this.I = this.o = !1;
    this.B = NaN;
    this.O = new x0(this.k, this.j.j, this.j.Z)
}
inherit(F0, R);
function G0(a, b, c) {
    var d = u0(a.j);
    c = isNaN(c) ? d : c;
    c = Math.ceil(c);
    var e = a.G[a.F];
    a.F + 1 < a.G.length && a.F++;
    c = c + e;
    d = 1E3 * (c - d);
    a.D = L(x(a.wA, a, c, b), d);
    return c
}
f = F0.prototype;
f.wA = function (a, b) {
    if (!this.ha()) {
        this.D = NaN;
        this.k.update();
        var c = t0(this.k), d = H0(this, c);
        b && (d.jj = a);
        var e = 400 < this.H;
        !(1 < c.length) && c[0].isEmpty() || e || (d.Ug = G0(this, !0, a));
        d.send();
        this.H++
    }
};
function Fr(a, b) {
    var c = I0(a.j);
    qa(c, {state: a.C});
    c = new C0(a.j.j, a.j.Z, b, c);
    c.o = a.j.k();
    c.K = a.j.B();
    c.la = u0(a.j);
    c.segments = [q0(a.j)];
    return c
}
function H0(a, b) {
    var c = Fr(a, "watchtime");
    c.segments = b;
    c.o = a.k.j;
    return c
}
function J0(a) {
    a.k.update();
    return H0(a, t0(a.k))
}
function K0(a) {
    var b = a.j.Z;
    a = a.j.j;
    var c = a.Va || b.O, c = {
        ns: b.Rc,
        html5: "1",
        el: b.da,
        ps: b.j,
        fexp: b.experiments.experimentIds.join(",") || void 0,
        feature: c || void 0,
        ctrl: a.ob || void 0,
        ytr: a.Kb || void 0,
        list: a.playlistId,
        d: b.va,
        f: b.ja
    };
    b.autoplay && (c.autoplay = "1");
    a.subscribed && (c.subscribed = a.subscribed);
    return c
}
function L0(a) {
    a.j.j.remarketingUrl && !a.P && (hg(a.j.j.remarketingUrl), a.P = !0);
    a.j.j.ppvRemarketingUrl && !a.M && (hg(a.j.j.ppvRemarketingUrl), a.M = !0);
    M0(a)
}
f.Tf = function () {
    this.A.Tf()
};
f.onError = function (a, b) {
    this.A.onError(a, b)
};
function N0(a, b) {
    if (!a.ha()) {
        X(b.state, 2) ? (a.C = "paused", 0 < Dv(b, 2) && a.o && J0(a).send()) : X(b.state, 8) ? (a.C = "playing", a.o && isNaN(a.D) && G0(a, !1)) : a.C = "paused";
        var c = a.A, d = b.state, e;
        e = b.state;
        if (X(e, 128))
            e = "ER";
        else if (X(e, 16) || X(e, 32))
            e = "S";
        else {
            var g = z0[vs(e)];
            "B" == g && X(e, 4) && (g = "PB");
            e = g
        }
        if (e != c.k) {
            var g = e, h = u0(c.j);
            if (!(h < c.A)) {
                if ("PL" == c.k)
                    c.F += h - c.A;
                else if ("B" == c.k && c.D && (c.D = !1, c.I += h - c.A, !c.K && 10 <= c.I && 180 >= c.F)) {
                    c.j.D();
                    if (!c.ha()) {
                        var k = B0(c);
                        k.qoealert = "1";
                        k = Re(c.j.Z.ob, k);
                        hg(k)
                    }
                    c.K = !0
                }
                "B" !=
                g || "PL" != c.k && "PB" != c.k || (c.D = !0);
                c.A = h
            }
            !c.j.Z.experiments.A || "B" != e && "PB" != e ? A0(c, "cmt", [c.j.k().toFixed(3)]) : c.dj();
            A0(c, "vps", [e]);
            c.k = e
        }
        if (X(d, 128))
            c.onError(d.j.errorCode, d.j.errorDetail);
        (X(d, 2) || X(d, 128)) && c.Sg();
        a.B && X(b.state, 128) && (a.lj("error-100"), M(a.B))
    }
}
function O0(a) {
    a.B = Qf(x(a.lj, a, "heartbeat"), 3E4)
}
f.lj = function (a) {
    var b = this.j.Z, c = this.j.j, d = {
        ns: b.Rc,
        el: b.da,
        eurl: b.F,
        fmt: c.o ? c.o.id : 0,
        html5: 1,
        list: c.playlistId,
        plid: c.playbackId,
        cpn: c.ya,
        ei: c.G,
        ps: b.j,
        noflv: 1,
        st: this.j.k(),
        video_id: c.videoId,
        metric: a
    };
    b.autoplay && (d.autoplay = "1");
    c.Ci && (d.tmi = "1");
    "heartbeat" == a && (d.tpmt = s0(this.k));
    qa(d, b.o);
    hg(Re("//www.youtube.com/live_204", d))
};
f.L = function () {
    F0.J.L.call(this);
    M(this.D);
    this.D = NaN;
    var a = this.k;
    Rf(a.C);
    a.C = NaN
};
F0.prototype.getDebugInfo = function () {
    return D0(Fr(this, "playback"))
};
function M0(a) {
    a.j.j.C.eventLabel = a.j.Z.da;
    a.j.j.C.playerStyle = a.j.Z.j;
    a.j.j.ja && (a.j.j.C.feature = "pyv");
    a.j.j.C.vid = a.j.j.videoId;
    a.j.j.C.isAd = !("adunit" != a.j.Z.da && !a.j.j.ja)
}

function P0() {
    this.endTime = this.startTime = -1;
    this.Ak = "-";
    this.playbackRate = 1;
    this.visibilityState = 0
}
P0.prototype.isEmpty = function () {
    return this.endTime == this.startTime
};
function Q0(a, b, c, d, e, g, h, k) {
    this.j = a;
    this.Z = b;
    this.A = c;
    this.B = d;
    this.k = e;
    this.C = g;
    this.F = h;
    this.D = k || function () {
    };
    this.o = -1
}
function u0(a) {
    var b = window.performance && window.performance.now ? window.performance.now() : y();
    0 > a.o && (a.o = b);
    return Math.round(b - a.o) / 1E3
}
function I0(a) {
    var b = a.A();
    a = a.j;
    var c = {};
    a.o && (c.fmt = a.o.id, a.D && a.D.id != a.o.id && (c.afmt = a.D.id));
    a.na && (c.threed = a.bw);
    c.plid = a.playbackId;
    c.ei = a.G;
    c.list = a.playlistId;
    c.cpn = a.ya;
    a.videoId && (c.v = a.videoId);
    a.vk && (c.infringe = 1);
    a.Zd && (c.splay = 1);
    a.Na && (c.live = a.rb ? "dvr" : "live");
    a.Jg && (c.autoplay = 1);
    a.Vn && (c.sdetail = a.Vn);
    a.X && (c.partnerid = a.X);
    a.nb && (c.osid = a.nb);
    qa(b, c);
    return b
}
function q0(a) {
    var b = new P0;
    b.Ak = a.A().cc || "-";
    var c = a.Z;
    b.playbackRate = c.wb && c.wb.playbackRate || 1;
    (c = th("visibilityState", document)) && "visible" != c && (b.visibilityState = 3);
    a.Z.bb ? b.visibilityState = 2 : a.Z.Vp && (b.visibilityState = 1);
    return b
}

function R0(a, b) {
    this.state = a;
    this.j = b
}
function Dv(a, b) {
    return X(a.state, b) && !X(a.j, b) ? 1 : !X(a.state, b) && X(a.j, b) ? -1 : 0
}

function S0(a, b, c, d) {
    T.call(this);
    this.va = new n0;
    this.G = c;
    this.pa = d;
    this.C = new As(x(this.getCurrentTime, this), x(this.ZD, this), x(this.getPlayerState, this), x(this.ub, this));
    S(this, this.C);
    this.V = NaN;
    this.K = this.F = null;
    this.D = a;
    this.ka = new k0(a, this.pa);
    this.la = !1;
    this.H = this.o = null;
    this.M = [];
    this.R = new a_;
    this.O = new a_;
    this.Ea = this.na = !1;
    this.oa = NaN;
    this.B = new ns;
    this.Ma = b;
    this.X = this.ea = null;
    this.I = NaN;
    this.W = new Hv(this);
    this.j = new vr;
    this.k = this.S = null;
    this.ga = NaN;
    this.A = null;
    this.Aa = !1;
    this.ba =
        0;
    this.Ia = null;
    this.ja = !1
}
inherit(S0, T);
function tr(a) {
    Pw() ? Sw(a.ba) : M(a.ba)
}
f = S0.prototype;
f.L = function () {
    M(this.ga);
    Rf(this.oa);
    sr(this);
    T0(this);
    tr(this);
    WD(this);
    vi(this.X, this.W, this.j);
    this.W = this.K = null;
    this.ja = !1
};
function U0(a, b, c) {
    a.M.length = 0;
    var d = a.R;
    d.k = !1;
    d.j = !1;
    d = a.O;
    d.k = !1;
    d.j = !1;
    a.V = NaN;
    a.I = NaN;
    a.S = null;
    a.Aa = !1;
    a.k && ls(a.k);
    V0(a);
    sr(a);
    T0(a);
    tr(a);
    ti(a.j);
    d = a.C;
    d.Ii = !1;
    d.Td = !1;
    Fs(d);
    d.j.j = [];
    d.k = [];
    d.nc();
    d.B = null;
    if (2 == a.Ma || bg(a.D.G))
        b.Wp = !0;
    b.ne = a.j.ne;
    a.j = b;
    a.j.subscribe("dataupdated", a.hC, a);
    a.j.subscribe("dataloaded", a.Bo, a);
    a.j.subscribe("dataloaderror", a.Qj, a);
    a.j.subscribe("onStatusFail", a.gC, a);
    b.lf && b.lf > b.startSeconds && (b = b.lf, a.K && (a.C.mh(a.K), a.K = null), a.K = new ws(1E3 * b, 2147483646), a.K.Ya.subscribe("onEnter",
        a.Rf, a), Bs(a.C, [a.K]));
    sr(a);
    a.j.Me || (c = new Q0(a.j, a.D, c, x(a.Sc, a), x(a.getCurrentTime, a), x(a.Yw, a), x(a.pa.xb, a.pa), x(a.rx, a)), a.A = new F0(c));
    a.ja = !1;
    W0(a, "newdata");
    X0(a, new ns)
}
function sr(a) {
    if (a.A) {
        var b = a.A;
        if (!b.ha() && b.o) {
            b.C = "paused";
            var c = J0(b);
            c.Tp = !0;
            c.send();
            c = b.A;
            "PL" == c.k && (c.k = "N");
            A0(c, "vps", [c.k]);
            c.Sg();
            M(b.B);
            b.dispose()
        }
        ti(a.A);
        a.A = null
    }
}
f.getVideoData = function () {
    return this.j
};
f.T = function () {
    return this.D
};
function Y0(a) {
    return !(!a.j.j || !a.j.j.k.length)
}
function Z0(a) {
    if (GI(a.j))
        return !0;
    Cv(a, "api.invalidparam");
    return !1
}
function $0(a, b) {
    a.na = !!b;
    Z0(a) && !a.R.k && (a.R.start(), a.A && a.A.Tf(), a.Bo())
}
f.Bo = function () {
    if (CI(this.j)) {
        CI(this.j);
        this.R.j = !0;
        this.M = tb(this.j.H);
        QE(this.j);
        Y0(this) && (this.j.rb && (a1(this, this.j.lengthSeconds), g1(this, !0)), this.j.j.j && h1(this), Sq(this, "i"));
        W0(this, "dataloaded");
        this.O.k && i1(this);
    }
    else if (this.j.ga) {
        var a = this.j, b = this.D.experiments.M;
        a.ga = !1;
        var c = a.O, d = rj(c), c = 0 > vr.o.indexOf(d) ? cg(c) : dg(c), d = x(a.uA, a), a = x(a.tn, a);
        uH(new nH(c, b), c, d, a);
        WH("mrs")
    } else
        this.j.Hf || (b = DZ(this.D, this.j, this.pa.xb()), HI(this.j, b, this.D.experiments.Ua))
};
function j1(a) {
    $0(a);
    Z0(a) && !X(a.B, 128) && (a.O.k || (a.O.start(), X0(a, ss(a.B, 8))), i1(a))
}
function i1(a) {
    if (!(a.O.j || !a.R.j || X(a.B, 128) || a.M.length || (a.C.Td || a.C.Tf(), a.M.length || 0 < Lr(a.C.j, -2147483648).length))) {
        if (a.o) {
            var b = a.o;
            a.Ea = !!b.M && !!b.R
        }
        a.O.j = !0;
        a.j.Na && k1(a, Infinity, !0);
        a.A && (b = a.A, b.j.j.ai && b.j.j.Nk && (b.lj("connected"), O0(b)));
        a.publish("playbackready", a)
    }
}
f.Rf = function (a) {
    this.pauseVideo();
    a = 0 == a ? new ns : new ns(14);
    X0(this, a)
};
function l1(a, b, c, d) {
    a.j.o = c;
    a.j.D = d || c;
    if (a.A) {
        var e = a.j, g = m0(a.ka, e), e = F(e.j.k, x(g.A, g)), e = new j0(c, b, e ? e.id : "");
        d && "i" == b && m1(a, b, d);
        d = a.A.A;
        c = u0(d.j);
        A0(d, "vfs", [e.j.id, e.k, d.S, e.reason], c);
        d.S = e.j.id;
        e = d.j.F();
        0 < e.width && 0 < e.height && (e = [Math.round(e.width), Math.round(e.height)], 1 < window.devicePixelRatio && e.push(window.devicePixelRatio), A0(d, "view", e, c));
        A0(d, "vps", [d.k], c);
        d.Sg(c)
    }
    a.publish("internalvideoformatchange", a.j, "m" == b)
}
function m1(a, b, c) {
    a.j.D = c;
    if (a.A) {
        var d = a.A.A;
        c = new j0(c, b, "");
        var e = u0(d.j);
        c.j.id != d.G && (A0(d, "afs", [c.j.id, d.G, c.reason], e), d.G = c.j.id)
    }
    "i" != b && a.publish("internalaudioformatchange", a.j, "m" == b)
}
function Cv(a, b, c, d) {
    if (Ob(dt, c))
        var e = c;
    else
        var g = c;
    X0(a, qs(a.B, 128, {errorCode: b, errorDetail: d, message: g, messageKey: e}));
    tr(a);
    T0(a);
    n1(a)
}
function o1(a, b) {
    a.M = a.M.filter(function (a) {
        return b != a
    });
    a.O.k && i1(a)
}
f.ub = function () {
    return this.B.ub()
};
f.getPlayerState = function () {
    return this.B
};
f.getPlayerType = function () {
    return this.Ma
};
function p1(a, b) {
    a.k && WD(a);
    a.k = b;
    q1(a)
}
function WD(a) {
    a.H = null;
    a.o && (R_(a.o), a.o.G = !0);
    a.k && (a.A && a.R.k && X(a.B, 64) && r1(a), V0(a), a.W.removeAll(), ls(a.k), a.k = null)
}
function s1(a) {
    j1(a);
    X(a.B, 64) && X0(a, ss(a.B, 8));
    if (a.O.j && a.k)
        if (a.j.j) {
            a.j.Na && (0 == a.getCurrentTime() || a.getCurrentTime() < Dr(a.j)) && k1(a, Cr(a), !0);
            var b;
            if (a.j.j.j)
                t1(a), b = a.Ia, a.o.resume();
            else {
                T0(a);
                b = a.j.R.k;
                var c = a.j, d = {};
                c.K && (d.ptk = c.K, d.oid = c.$e, d.ptchn = c.ie, d.pltype = c.af);
                qa(b.k, d);
                qa(b.k, {c: a.D.o.c, cver: a.D.o.cver})
            }
            a.k.sd != b ? u1(a, b) : js(a.k)
        } else
            Cv(a, "fmt.noneavailable", "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK")
}
function Tq(a) {
    if (!a.j.j)
        return [];
    var b = v1(a);
    a = Nt(a.j.j, b);
    a.length && (a = a.concat(["auto"]));
    return a
}
function w1(a) {
    return Kt(Kt(l0(a.ka, a.j), m0(a.ka, a.j)), v1(a))
}
function v1(a) {
    return a.j.Ok ? Ht : a.F ? a.F.o : Y0(a) && a.j.j.j && oH(a.j.k) ? Gt : Ht
}
function Sq(a, b, c) {
    if (!a.ha() && !X(a.B, 128) && (c && (a.j.vj = c), Y0(a))) {
        "m" == b && c && It(c) && (b = "a");
        var d = w1(a);
        a.j.j.j ? "i" != b && (c = a.o, c.ha() || ((d = QZ(c.C, d, b)) && c.publish("videoformatchange", d), U_(c, c.k, TZ(c.C)), Jt(c.C.j) && "m" == b && m_(c.k), t_(c.k) && O_(c, c.k, c.o), R_(c))) : (a.j.R = Gu(a.j.I, d), l1(a, b, a.j.R.getInfo()));
        a.ub() && s1(a)
    }
}
function x1(a) {
    var b = a.getVideoData().D;
    if (!b)
        return a.getVideoData().V;
    var c = F(a.j.j ? a.j.j.audioTracks : [], function (a) {
        return a.id == b.id
    });
    return c ? c : a.getVideoData().V
}
function h1(a) {
    yH(a.j.k, {c: a.D.o.c, cver: a.D.o.cver});
    var b = a.D, c = new EC;
    if (as() || b.experiments.W)
        c.I = !0;
    as() && (c.F = -1);
    0 <= b.ea && (c.liveChunkReadahead = b.ea);
    b.experiments.S && (c.G = 300);
    b.experiments.ja && (c.S = !0);
    b.experiments.ka && (c.R = !0);
    b.experiments.ga && (c.O = !0);
    b.experiments.la && (c.X = !0);
    if (iD(b)) {
        var d = b.experiments;
        c.C = 8388608;
        c.B = 524288;
        c.j = 2097152;
        c.D = 1048576;
        c.H = 1.5;
        c.P = 15;
        c.o = !0;
        c.M = !1;
        c.G = 0;
        c.A = Dt.hd720;
        $r("(ps4; leanback shell)") && (c.ra = d.X ? 625E3 : 562500)
    }
    bs() && (c.C = 20971520, c.B = 1572864,
        c.ra = 812500, c.j = 20971520, c.k = 1E3);
    var d = b.gh || new H(window.screen.width, window.screen.height), e = window.devicePixelRatio || 1;
    2560 <= d.width * e && 1440 <= d.height * e && (c.C = 52428800, c.B = 5242880, c.j = 20971520, c.D = 8388608, c.A = Dt.auto);
    b.experiments.P && (c.ra = NaN);
    b.experiments.Ga && (c.j = 1.5 * c.D);
    a.o = new E_(a.ea, c, a.j.k, a.j.j);
    a.o.subscribe("initsegment", a.NA, a);
    a.o.subscribe("videoformatchange", a.XA, a);
    a.o.subscribe("audioformatchange", a.WA, a);
    a.o.subscribe("error", a.Qj, a);
    a.o.subscribe("seekrequired", a.RC, a);
    b =
        G(a.M, "spacecast") || a.na;
    a.o.initialize(a.j.startSeconds, w1(a), b);
    a.j.probeUrl && (a.o.S = a.j.probeUrl);
    if (a.M.length || a.na)
        a.o.G = !0;
    a.na && r1(a)
}
function r1(a) {
    var b = new R0(new ns(4), a.B);
    N0(a.A, b)
}
function T0(a) {
    a.o && (a.o.dispose(), a.o = null);
    a.H && (a.H.dispose(), a.H = null)
}
function t1(a) {
    if (!a.H) {
        a.o ? a.o.seek(a.getCurrentTime()) : h1(a);
        a.H = new gu(a.k, a.j.lengthSeconds, a.j.j.k[0].mimeType, a.j.j.j[0].mimeType);
        try {
            var b = iu(a.H)
        } catch (c) {
            c.message = "window.URL object overwritten by external code";
            window.setTimeout(function () {
                throw c;
            }, 0);
            Cv(a, "html5.missingapi", "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK");
            return
        }
        a.Ia = new ou(b, !0);
        hu(a.H, x(a.o.ow, a.o))
    }
}
f.NA = function (a) {
    if (this.F) {
        var b = this.F;
        if ("com.microsoft.playready" == b.j.j) {
            for (var c = new Uint8Array(0), d = new DataView(a.buffer, a.byteOffset, a.length), e = 0; e < a.length - 8;) {
                var g = d.getUint32(e);
                if (1 > g)
                    break;
                var h = d.getUint32(e + 4);
                if (1836019574 == h)
                    e += 8;
                else {
                    if (1886614376 == h) {
                        var h = a.subarray(e, e + g), k = new Uint8Array(c.length + h.length);
                        k.set(c);
                        k.set(h, c.length);
                        c = k
                    }
                    e += g
                }
            }
            a = c;
            0 != a.length && g0(b, new e0(a), !1)
        }
    }
};
f.XA = function (a) {
    l1(this, a.reason, a.video.info, a.j.info);
    var b = EI(this.j);
    b && b.B(a.video)
};
f.WA = function (a) {
    m1(this, a.reason, a.j.info)
};
f.Qj = function (a) {
    if (a.k)
        Cv(this, a.errorCode, void 0, a.j);
    else {
        var b;
        if (b = this.D.experiments.o && ("net.badstatus" == a.errorCode || "manifest.net" == a.errorCode))
            b = this.j, b = y() - b.dw > vr.B;
        if (this.A && (this.A.onError(a.errorCode, a.j), b))
            this.A.onError("staleconfig");
        b && this.publish("signatureexpired")
    }
};
f.pauseVideo = function (a) {
    X(this.B, 64) && !a && X0(this, ts(this.B, 8));
    this.k && (a && !X(this.B, 128) && X0(this, ss(this.B, 256)), this.k.pauseVideo())
};
function n1(a) {
    a.pauseVideo(!0);
    a.k && (V0(a), a.H && (a.H.dispose(), a.H = null), a.j && (a.j.startSeconds = a.getCurrentTime()), a.I = NaN, ks(a.k), X(a.B, 128) || X0(a, qs(a.B)))
}
function k1(a, b, c, d) {
    if (a.k && a.O.j) {
        b = Pc(b || 0, Dr(a.j), Cr(a));
        b >= Cr(a) ? g1(a, !0) : g1(a, !1);
        a.j.startSeconds = b;
        a.I = b;
        var e = a.va;
        e.j = b;
        e.k = !0;
        c ? a.Pj() : (y1(a), d && (a.X || (a.X = new Jv(a.Pj, d, a)), a.X.start()), z1(a, !0));
        a.K && b > a.j.lf && (a.C.mh(a.K), a.K = null);
        b < a.Sc() && X0(a, ts(a.B, 2));
        a.publish("seekto", a, b)
    } else
        a.j.startSeconds = b || 0
}
function y1(a) {
    X(a.B, 32) || (X0(a, ss(a.B, 32)), X(a.B, 8) && a.pauseVideo(!0), a.publish("beginseeking", a))
}
f.Pj = function () {
    if (!isNaN(this.I) && this.k) {
        var a = this.Sc();
        !this.j.Na && this.I >= Math.floor(a) ? (this.I = a, this.publish("endseeking", this), this.pauseVideo(!0), this.Rf()) : (this.o && this.o.seek(this.I), hs(this.k, this.I))
    }
    this.X && (this.X.dispose(), this.X = null);
    X(this.B, 32) && (X0(this, ss(ts(this.B, 32), 16)), this.publish("endseeking", this))
};
f.getCurrentTime = function () {
    if (!isNaN(this.I))
        return this.I;
    var a = 0;
    this.k && 1 <= this.k.readyState ? a = this.k.getCurrentTime() : this.j && (a = this.j.Mj || this.j.startSeconds || 0);
    return a
};
f.Sc = function () {
    return II(this.j) ? Infinity : this.j && this.j.lengthSeconds ? this.j.lengthSeconds : Cr(this) ? Cr(this) : 0
};
f.Yw = function () {
    var a = new o0;
    if (this.ea && this.o) {
        var b = this.ea;
        a.o = b.C;
        a.B = b.D;
        a.j = PF(b);
        b = this.o;
        b.j && !ku(b.j) && (a.k = Sr(b.j.k.buffered, b.A), a.A = Sr(b.j.j.buffered, b.A));
        a.j = MZ(b.H);
        PF(b.F);
        NF(b.F);
        OF(b.F)
    } else
        this.k && (a.k = Sr(this.k.buffered, this.getCurrentTime()));
    return a
};
function A1(a) {
    if (a.k)
        if (II(a.j))
            a = 1;
        else if (JI(a.j))
            if (a.la)
                a = 0;
            else {
                var b = a.k;
                a = (0 < Rr(b.buffered) && b.duration ? b.buffered.end(b.buffered.length - 1) : 0) / a.Sc()
            }
        else
            a = Uq(a.k);
    else
        a = 0;
    return a
}
S0.prototype.getDebugInfo = function (a) {
    var b = {};
    a && (this.A ? qa(b, this.A.getDebugInfo()) : this.j && (b.cpn = this.j.ya), this.k && qa(b, this.k.getDebugInfo()), this.o && qa(b, this.o.getDebugInfo()), X(this.B, 128) && (b.debug_error = this.B.j), (this.M.length || 0 < Lr(this.C.j, -2147483648).length) && (b.preroll = "1"));
    b.debug_videoId = this.j.videoId;
    return b
};
f = S0.prototype;
f.hC = function () {
    if (this.F) {
        var a = this.F, b = this.j.B;
        a.A = b;
        a.publish("oauthtoken", b)
    }
    W0(this)
};
f.gC = function (a) {
    Cv(this, "auth", unescape(a.reason), a.errordetail || "sec." + a.errorcode)
};
function W0(a, b) {
    a.publish("internalvideodatachange", b || "dataupdated", a, a.j)
}
function q1(a) {
    D("loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange ratechange error waiting abort".split(" "), function (a) {
        this.W.listen(this.k, a, this.bE)
    }, a)
}
f.bE = function (a) {
    var b = a.target;
    if (b == this.k && b.currentSrc) {
        switch (a.type) {
            case "error":
                if (this.D.zm && b.error && b.error.errorCode == b.error.MEDIA_ERR_NETWORK) {
                    setTimeout(x(function () {
                        this.k && (this.j.R && this.k.load(), s1(this))
                    }, this), 500);
                    if (this.A)
                        this.A.onError("progressive.net");
                    return
                }
                break;
            case "durationchange":
                if (!this.j.rb || this.j.k && !this.j.k.isLive)
                    b = b.duration || 0, (!this.H || isFinite(b) && 0 < b) && 1 != b && a1(this, b);
                break;
            case "ratechange":
                this.o && (this.o.H.o = Math.max(1, this.k.playbackRate));
                this.C.Tf();
                break;
            case "ended":
                X0(this, qs(this.B, 4));
                this.Am();
                break;
            case "loadedmetadata":
                this.j.startSeconds && (this.k.currentTime = this.j.startSeconds), this.D.$e && this.j.startSeconds && (this.V = this.j.startSeconds, this.pauseVideo(!0));
            case "loadstart":
                Rf(this.oa);
                this.Ck() || (this.oa = Qf(x(this.Ck, this), 100));
                break;
            case "progress":
                this.V && this.k.seekable.length && this.k.seekable.end(0) > this.V && (this.k.currentTime = this.V, this.V = NaN, this.xa = this.W.listen(this.k, "canplay", this.vA));
            case "suspend":
                z1(this);
                this.publish("onLoadProgress",
                    this, A1(this));
                break;
            case "seeked":
                B1(this);
                break;
            case "seeking":
                this.o && this.o.seek(b.currentTime);
                break;
            case "playing":
                qZ(this.G, "plev");
                break;
            case "timeupdate":
                this.Aa = !0;
                this.Ck();
                B1(this);
                z1(this);
                this.publish("onVideoProgress", this, b.getCurrentTime());
                break;
            case "waiting":
                if (0 < b.played.length && 0 == b.buffered.length && 0 < b.currentTime && 5 > b.currentTime && this.o)
                    return
        }
        this.publish("videoelementevent", a);
        a = os(this.B, a, this.va);
        X0(this, a)
    }
};
f.Ck = function () {
    var a = this.k;
    a && this.Aa && !this.j.Nm && !$H("vfp", this.G.j) && 2 <= a.readyState && !a.ended && 0 < Rr(a.buffered) && qZ(this.G, "vfp");
    if ((a = this.k) && !this.j.Nm && 0 < (a.duration || 0) && (!$H("pbr", this.G.j) && is(a) && 2 <= a.readyState && 0 < Rr(a.buffered) && qZ(this.G, "pbr", void 0), 0 < a.getCurrentTime())) {
        Rf(this.oa);
        M(this.ga);
        this.j.Nm = !0;
        C1(this);
        if (this.A) {
            a = this.A;
            if (!a.o) {
                var b = Fr(a, "playback");
                a.G = [10 + a.j.j.Nj, 10, 10, 40 + a.j.j.rn - a.j.j.Nj, 40];
                var c = a.k;
                Rf(c.C);
                c.C = NaN;
                c.C = Qf(x(c.update, c), 100);
                c.B = u0(c.k);
                c.A = q0(c.k);
                b.Ug = G0(a, !0);
                b.iz = !0;
                b.send();
                !a.j.Z.$g || a.j.Z.Di || a.o || (b = a.j.Z, c = a.j.j, b = {
                    noflv: "1",
                    html5: "1",
                    video_id: c.videoId,
                    cpn: c.ya,
                    plid: c.playbackId,
                    ei: c.G,
                    referrer: FZ(b),
                    eurl: b.F,
                    framer: b.S,
                    feature: b.O,
                    fmt: c.o ? c.o.id : 0,
                    ptk: c.K,
                    skl: c.Wr,
                    access_token: c.B,
                    ucid: c.Gh
                }, qa(b, K0(a)), delete b.fexp, b = Re(a.j.Z.A + "user_watch", b), hg(b));
                a.j.j.K && (b = a.j.Z, c = a.j.j, b = Re(b.A + "ptracking", {
                    html5: "1",
                    video_id: c.videoId,
                    cpn: c.ya,
                    plid: c.playbackId,
                    ei: c.G,
                    ptk: c.K,
                    oid: c.$e,
                    ptchn: c.ie,
                    pltype: c.af,
                    content_v: b.M
                }), hg(b));
                if (a.j.j.Up && a.j.Z.Ma && !a.o) {
                    var b = a.j.Z, c = a.j.j, d = {
                        noflv: 1,
                        video_id: c.videoId,
                        cpn: c.ya,
                        el: b.da,
                        ps: b.j,
                        referrer: FZ(b),
                        eurl: b.F,
                        framer: b.S,
                        fmt: c.o ? c.o.id : 0,
                        ptk: c.K,
                        subscribed: c.subscribed,
                        t: c.Iv
                    };
                    b.autoplay && (d.autoplay = "1");
                    c.Zd && (d.splay = "1");
                    0 < c.startSeconds && (d.start = 1E3 * c.startSeconds);
                    c.Ci && (d.tmi = "1");
                    b = Re(a.j.Z.A + "get_video", d);
                    hg(b)
                }
                a.j.j.ai && (a.lj("playback"), a.B || O0(a));
                a.j.j.Ue || L0(a);
                a.o = !0;
                a = a.k;
                a.j = a.k.k();
                a.B = u0(a.k);
                .5 < a.j - a.o && (a.o = a.j)
            }
            L(x(this.Am, this), 4500)
        }
        this.publish("playbackstarted");
        this.o && (this.o.ga = !0);
        Pw() && Tw();
        return !0
    }
    return !1
};
function C1(a) {
    var b = a.getCurrentTime(), c = a.j;
    !$H("pbs", a.G.j) && TH.measure && TH.getEntriesByName && (TH.getEntriesByName("mark_navigation_requested")[0] ? TH.measure("measure_above_the_fold", "mark_navigation_requested") : TH.measure("measure_above_the_fold"));
    c.videoId && a.G.info("docid", c.videoId);
    c.G && a.G.info("ei", c.G);
    c.ya && a.G.info("cpn", c.ya);
    0 < c.startSeconds && a.G.info("start", c.startSeconds.toString());
    a.k && is(a.k) && a.G.info("paused", 1);
    c.o ? a.G.info("fmt", c.o.id) : a.G.info("fmt", "-1");
    c.Ma && a.G.info("yt_pre",
        a.Ea ? "2" : "1");
    a.D.bb && a.G.info("yt_fs", "1");
    a.G.info("tds", Math.round(A1(a) * a.Sc()).toString());
    a.G.info("cmt", b.toFixed(3));
    if (a.o) {
        b = a.o;
        window && window.performance && window.performance.getEntriesByName && (c = window.performance.getEntriesByName(b.R), c.length && (c = c[0], I_(b, "vri", c.fetchStart), I_(b, "vdns", c.domainLookupEnd), I_(b, "vreq", c.requestStart), I_(b, "fvb", c.responseStart), I_(b, "vrc", c.responseEnd)), c = window.performance.getEntriesByName(b.M), c.length && (c = c[0], I_(b, "ari", c.fetchStart), I_(b, "adns",
            c.domainLookupEnd), I_(b, "areq", c.requestStart), I_(b, "avb", c.responseStart), I_(b, "arc", c.responseEnd)));
        var b = b.la, d;
        for (d in b)
            qZ(a.G, d, b[d])
    }
}
f.vA = function () {
    this.xa && (this.W.Da(this.xa), this.xa = void 0, js(this.k))
};
function z1(a, b) {
    if (a.k && a.j) {
        var c = a.getCurrentTime();
        if (c < Dr(a.j))
            k1(a, Cr(a), !0);
        else {
            if (a.o) {
                var d = a.o;
                if (d.j) {
                    d.resume();
                    if (d.K && !ku(d.j)) {
                        var e = d.A <= c && c < d.A + 10, g = 0 <= Pr(d.j.j.buffered, d.A + E_.j) && 0 <= Pr(d.j.k.buffered, d.A + E_.j);
                        e && g && (d.K = !1)
                    }
                    d.K || (d.A = c);
                    F_(d)
                }
            }
            JI(a.j) && c > a.Sc() && (d = a.Sc(), 0 == d && (d = c), a1(a, 1.2 * d));
            5 < c && (a.j.startSeconds = c);
            (d = Pw()) ? Sw(a.ba) : M(a.ba);
            is(a.k) || (e = x(a.$x, a), a.ba = a.k.played && 0 == a.k.played.length ? d ? Qw(e, 100) : L(e, 100) : d ? Qw(e, 500) : L(e, 500));
            a.j.Mj = c;
            !b && a.ub() && a.A &&
            (d = a.A, d.k.update(), d.j.j.lengthSeconds && d.j.j.Ue && !d.K && s0(d.k) >= d.j.j.Ue && (d.o && d.j.j.Ue && (e = Fr(d, "delayplay"), e.hz = !0, e.send(), d.K = !0), L0(d)), e = d.O, !e.o && e.Z.Ma && !e.Z.Di && e.j.lengthSeconds && s0(e.A) >= e.j.Rr && d.O.send());
            a.publish("progresssync", a, b);
            a.j.nz = c
        }
    }
}
f.$x = function () {
    if (this.k) {
        var a = this.getCurrentTime();
        if (X(this.B, 8) && rs(this.va, a, Date.now(), Sr(this.k.buffered, a))) {
            var b = this.Sc();
            b && 1 > Math.abs(b - a) ? this.Rf() : X0(this, ss(this.B, 1))
        }
        z1(this)
    }
};
function X0(a, b) {
    var c = a.B;
    if (b.k != c.k || b.j != c.j) {
        c = new R0(b, a.B);
        a.B = b;
        0 > Dv(c, 8) && (M(a.ga), g1(a, !1));
        0 < Dv(c, 32) && g1(a, !1);
        a.o && (0 > Dv(c, 8) && 0 < Dv(c, 4) ? a.o.ea = !0 : X(b, 4) || (a.o.ea = !1));
        JI(a.j) && X(c.state, 2) && (a1(a, a.getCurrentTime()), z1(a, !0));
        a.A && N0(a.A, c);
        var d = a.C;
        if (d.Td && !d.Ii)
            if (Fs(d), X(c.state, 2)) {
                d.B = null;
                for (var e = [], g = 0; g < d.k.length; g++) {
                    var h = d.k[g];
                    h.active && 2147483647 > h.end && e.push(h)
                }
                g = Lr(d.j, 2147483646);
                g = g.concat(Mr(d.j, 2147483646));
                e = Es(d, e).concat(Ds(d, g));
                Hs(d, e)
            } else
                X(c.state, 16) ?
                    (d.o = Cs(d), d.A.stop(), d.A.start(), d.nc()) : (d.A.stop(), X(c.j, 16) ? (d.o = Cs(d), null != Nr(d.j, Math.max(d.o - 2E3, 0)) && (d.Mg = gn(x(d.nc, d)))) : d.nc());
        a.publish("statechange", c)
    }
}
f.rx = function () {
    this.j.Na || this.publish("connectionissue")
};
f.RC = function () {
    hs(this.k, Math.max(0, this.k.currentTime + .1))
};
function B1(a) {
    X(a.B, 2) || X(a.B, 32) || (a.I = NaN)
}
function g1(a, b) {
    a.j.rb && a.la != b && (a.la = b, a.publish("liveviewshift", b))
}
function u1(a, b) {
    D1(a, b);
    a.D.de ? L(x(function () {
        js(this.k)
    }, a), 0) : js(a.k)
}
function D1(a, b) {
    qZ(a.G, "vta");
    fs(a.k, b);
    a.H && !b.j && (a.H = null);
    if (DD(a.j)) {
        var c = DD(a.j);
        if (c && !a.F && a.k) {
            var d = a.j.o.mimeType;
            if (c = ot(a.k, d, c)) {
                a.F = new f0(a.k, c);
                a.F.subscribe("newsession", a.aE, a);
                a.F.subscribe("licenseerror", a.OA, a);
                a.F.subscribe("qualitychange", a.PA, a);
                a.F.subscribe("heartbeatparams", a.$D, a);
                var e = a.F, g = a.j.B;
                e.A = g;
                e.publish("oauthtoken", g);
                S(a, a.F);
                a.k.canPlayType(d, c.j)
            } else
                Cv(a, "fmt.unplayable", "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK")
        }
    }
    a.H && Vw();
    M(a.ga);
    a.ga = L(x(a.VA, a),
        15E3)
}
function V0(a) {
    a.F && (a.F.dispose(), a.F = null)
}
f.aE = function (a) {
    var b = {};
    qa(b, this.D.o);
    b.cpn = this.j.ya;
    this.j.F && (b.vvt = this.j.F);
    this.D.Za && (b.authuser = this.D.Za);
    this.D.pageId && (b.pageid = this.D.pageId);
    cc(a.B, b);
    yr(a, a.C);
    this.publish("newlicensesession", a)
};
f.OA = function (a, b, c) {
    Cv(this, a, n(c) ? c : "YTP_ERROR_LICENSE", b)
};
f.PA = function () {
    Sq(this, "r");
    W0(this)
};
f.$D = function (a) {
    this.publish("heartbeatparams", a)
};
f.VA = function () {
    if (this.A)
        this.A.onError("qoe.start15s");
    this.publish("loadsofttimeout")
};
function a1(a, b) {
    a.j.lengthSeconds != b && (a.j.lengthSeconds = b, W0(a))
}
f.Am = function () {
    if (!this.ja) {
        var a = new i0(this.j), b;
        "c1a" in a.o ? (b = t("yt.abuse.botguardInitialized"), b = !(b && b())):b = !1;
        if (b)
            L(x(this.Am, this), 4500);
        else {
            var c;
            if (a.j && a.j.ba) {
                b = [a.j.ba];
                for (c in a.k)
                    if (a.o[c] && a.k[c]) {
                        var d = a.k[c](a.o);
                        d && b.push(d)
                    }
                c = b.join("&")
            } else
                c = null;
            c && this.A && (a = this.A, a.I || (b = Fr(a, "atr"), b.B = c, b.send(), a.I = !0), this.ja = !0)
        }
    }
};
function Cr(a) {
    if (!a.k)
        return 0;
    if (!a.j.Na)
        return a = a.j, a.k && !isNaN(wH(a.k)) ? wH(a.k) : a.lengthSeconds;
    if (!a.j.rb)
        return a.getCurrentTime();
    if (a.o) {
        var b = S_(a.o), b = Math.max(b, Dr(a.j));
        return Math.max(b, a.getCurrentTime())
    }
    a = a.k;
    return (1 > a.seekable.length ? NaN : a.seekable.end(a.seekable.length - 1)) || 0
}
f.ZD = function () {
    return this.k ? this.k.playbackRate : 1
};
var E1 = {gJ: 0, fJ: -1, zH: -2};
function F1(a) {
    this.j = a
}
f = F1.prototype;
f.Uk = function () {
    return gQ(this.j)
};
f.Yk = function () {
    return this.j.A
};
f.uf = function () {
    return this.j.A
};
f.ti = function () {
    var a = this.j.o;
    return null != a ? a : new JP
};
f.wi = function () {
    var a = this.j;
    null != a.j && a.j.show()
};
f.rj = function () {
};
f.vl = function () {
    return this.j.C
};
f.wl = function () {
    return !1
};
f.xi = function () {
    return this.j.F
};
f.hide = function () {
};
function fX(a, b) {
    $l.call(this, "adsManagerLoaded");
    this.o = a;
    this.A = b
}
inherit(fX, $l);
function G1(a, b, c, d) {
    a.o.Hc(new F1(b), c, d);
    return a.o
}

function H1(a) {
    return a ? -1 != a.toString().search(/(?:true|1)/i) : !1
}
function I1(a, b) {
    if (a) {
        var c = "getErrorCode" in a ? a.getErrorCode() : null, d = "";
        c ? b.error_code = c : (c = "getMessage" in a && ia(a.getMessage) ? a.getMessage() : a.message, d = Ma(c || "", 50), b
    .
        error_message = d
    )
    }
}
function J1(a, b) {
    if (a) {
        var c = TT(a);
        if (c) {
            var d = UT(a) || [];
            b.ad_id = sb(d, c).join(",");
            if (c = NT(a))
                d = WT(a) || [], b.ad_sys = sb(d, c).join(",");
            kU(a) ? b.survey = 1 : KT(a) && (b.skip = 1)
        }
    }
}
function K1(a, b) {
    if (a[b])
        return H1(a[b]);
    var c = b.toLowerCase(), d;
    for (d in a)
        if (d && d.toLowerCase() == c)
            return H1(a[d]);
    return !1
}
function L1(a) {
    var b = "";
    a & 2 && a & 1 ? b = "video" : a & 2 ? b = "skippablevideo" : a & 1 && (b = "standardvideo");
    a & 4 && (b && (b += "_"), b += "text_image_flash");
    return b
}

function M1(a, b, c, d) {
    this.A = a;
    this.B = b;
    this.j = c;
    this.C = d
}
M1.prototype.o = "";
M1.prototype.k = "";
function N1(a) {
    var b = {};
    b.l_ns = a.B;
    b.l_state = a.C;
    b.sst = a.A;
    b.sidx = 0;
    a.o && (b.at = a.o);
    a.k && (b.ad_id = a.k);
    return b
}

var O1 = !1;
function P1() {
    window.google_ad_output = "html";
    window.google_ad_height = "250";
    window.google_ad_format = "300x250_as";
    window.google_container_id = "google_companion_ad_div"
}
function Q1() {
    var a = t("window.google_show_companion_ad");
    ia(a) ? a() : O1 = !0
}
function R1() {
    var a = t("yt.www.watch.ads.setCompanion");
    a && a()
}
function S1(a) {
    var b = t("yt.www.watch.ads.showForcedMpu");
    b && b(a)
}
Ci("showCompanionAdLoaded", function () {
    O1 && (Q1(), O1 = !1)
});
function T1(a, b) {
    this.k = a;
    this.j = b
}
function U1(a) {
    return a.j - a.k
}
function V1(a, b) {
    return a.k + b * U1(a)
}
function W1(a, b) {
    return U1(a) ? Pc((b - a.k) / U1(a), 0, 1) : Infinity
}

function X1(a, b) {
    T.call(this);
    this.A = !!b;
    this.k = a;
    this.j = new Hv(this);
    this.o = this.B = null;
    b && dd && a.setAttribute("draggable", "true");
    Y1(this)
}
inherit(X1, T);
function Y1(a) {
    a.o = null;
    a.B = null;
    a.j.listen(a.k, Z1("over"), a.dG);
    a.j.listen(a.k, "touchstart", a.gG)
}
f = X1.prototype;
f.dG = function (a) {
    this.j.removeAll();
    this.j.listen(this.k, Z1("move"), this.Yt);
    this.j.listen(this.k, Z1("out"), this.Zt);
    this.A && this.j.listen(this.k, Z1("down"), this.Xt);
    this.publish("hoverstart", yh(a), zh(a), a.target);
    this.publish("hovermove", yh(a), zh(a), a.target)
};
f.Yt = function (a) {
    this.o && yh(this.o) == yh(a) && zh(this.o) == zh(a) && this.o.relatedTarget == a.target || this.publish("hovermove", yh(a), zh(a), a.target);
    this.o = null
};
f.Zt = function (a) {
    a.relatedTarget && Zd(this.k, a.relatedTarget) ? (this.o = a, this.publish("hovermove", yh(a), zh(a), a.relatedTarget)) : (this.j.removeAll(), Y1(this), this.publish("hoverend", yh(a), zh(a), a.relatedTarget))
};
f.Xt = function (a) {
    ha(a.button) && 0 != a.button || (this.j.removeAll(), this.j.listen(document, Z1("move"), this.Az), this.j.listen(document, Z1("up"), this.eG), dd ? this.j.listen(this.k, "dragstart", this.Lw) : a.preventDefault(), this.publish("dragstart", yh(a), zh(a), a.target), this.publish("dragmove", yh(a), zh(a), a.target))
};
f.Lw = function (a) {
    a.preventDefault()
};
f.Az = function (a) {
    var b = a.target == document ? null : a.target;
    this.publish("hovermove", yh(a), zh(a), b);
    this.publish("dragmove", yh(a), zh(a), b)
};
f.eG = function (a) {
    this.j.removeAll();
    a.target && Zd(this.k, a.target) ? (this.j.listen(this.k, Z1("move"), this.Yt), this.j.listen(this.k, Z1("out"), this.Zt), this.j.listen(this.k, Z1("down"), this.Xt), this.publish("dragend", yh(a), zh(a), a.target)) : (Y1(this), this.publish("dragend", yh(a), zh(a), a.target), this.publish("hoverend", yh(a), zh(a), a.target))
};
f.gG = function (a) {
    var b = a.changedTouches[0];
    b && (this.j.removeAll(), this.j.listen(this.k, "touchmove", this.fG), this.j.listen(this.k, "touchend", this.au), this.j.listen(this.k, "touchcancel", this.au), this.B = b.identifier, this.publish("hoverstart", b.pageX, b.pageY, a.target), this.publish("hovermove", b.pageX, b.pageY, a.target), this.A && (this.publish("dragstart", b.pageX, b.pageY, a.target), this.publish("dragmove", b.pageX, b.pageY, a.target)))
};
f.fG = function (a) {
    var b = $1(this, a);
    b && (a.preventDefault(), this.publish("hovermove", b.pageX, b.pageY, a.target), this.A && this.publish("dragmove", b.pageX, b.pageY, a.target))
};
f.au = function (a) {
    var b = $1(this, a);
    b && (a.preventDefault(), this.j.removeAll(), Y1(this), this.A && this.publish("dragend", b.pageX, b.pageY, a.target), this.publish("hoverend", b.pageX, b.pageY, a.target))
};
function $1(a, b) {
    for (var c = 0; c < b.changedTouches.length; c++) {
        var d = b.changedTouches[c];
        if (d.identifier == a.B)
            return d
    }
    return null
}
function Z1(a) {
    return window.navigator.msPointerEnabled ? "MSPointer" + a.charAt(0).toUpperCase() + a.substr(1) : "mouse" + a
}
f.L = function () {
    this.j.removeAll();
    X1.J.L.call(this)
};
function a2(a, b, c, d) {
    this.width = b;
    this.k = c;
    this.B = d;
    this.j = b - c - d;
    this.A = Pc(a - c, 0, this.j);
    this.position = this.A + c;
    this.o = this.A / this.j
}

function b2(a, b, c, d) {
    var e = Math.min(c / (b.mq / b.Ab), d / (b.kq / b.rows)), g = b.mq * e, e = b.kq * e, g = Math.floor(g / b.Ab) * b.Ab, e = Math.floor(e / b.rows) * b.rows, h = g / b.Ab, k = e / b.rows, l = Math.floor((c - h) / 2);
    c = Math.ceil((c - h) / 2);
    var p = Math.floor((d - k) / 2);
    d = b.Fw * h * -1;
    var r = b.row * k * -1;
    a = a.style;
    a.width = h + "px";
    a.height = k + "px";
    h = p + "px";
    a.marginTop = h;
    a.marginBottom = h;
    a.marginLeft = l + "px";
    a.marginRight = c + "px";
    a.backgroundImage = "url(" + b.url + ")";
    a.backgroundPosition = d + "px " + r + "px";
    a.backgroundSize = g + "px " + e + "px"
}

function c2() {
    Y.call(this, ["div", "ytp-progress-tooltip", ["div", "ytp-progress-tooltip-thumbnail-container", ["div", "ytp-progress-tooltip-thumbnail"]], ["div", "ytp-progress-tooltip-text-container", ["div", "ytp-progress-tooltip-text", "{{text}}"]], ["div", "ytp-progress-tooltip-timestamp-container", ["div", "ytp-progress-tooltip-timestamp", "{{timestamp}}"]], ["div", "ytp-progress-tooltip-arrow"]]);
    this.o = this.template.j["ytp-progress-tooltip-arrow"];
    this.j = -1;
    this.ea = "";
    this.k = new T1(0, 0);
    this.hide()
}
inherit(c2, Y);
f = c2.prototype;
f.Zh = !1;
f.Ye = null;
f.Bh = null;
f.disable = function () {
    this.Zh = !0
};
f.show = function () {
    this.Zh || c2.J.show.call(this)
};
function d2(a) {
    lh(a.N(), "with-thumbnail");
    a.Ye = null;
    a.Bh = null;
    a.template.j["ytp-progress-tooltip-thumbnail"].removeAttribute("style")
}
f.pG = function (a, b) {
    a <= this.j && this.j <= b && e2(this)
};
function e2(a) {
    var b = pI(a.Bh, a.j, 108);
    b2(a.template.j["ytp-progress-tooltip-thumbnail"], b, 108, 60)
}
f.L = function () {
    this.o = this.Bh = this.Ye = null;
    c2.J.L.call(this)
};
function f2(a, b) {
    var c = ["div", "ytp-progress-bar-container", ["div", ["html5-progress-bar", "ytp-force-transform"], {
        tabindex: 6250,
        role: "slider",
        "aria-label": Uf("YTP_SEEK_SLIDER"),
        "aria-valuemin": "{{ariamin}}",
        "aria-valuemax": "{{ariamax}}",
        "aria-valuenow": "{{arianow}}",
        "aria-valuetext": "{{arianowtext}}"
    }, ["div", "ytp-progress-bar-padding"], ["div", "ytp-progress-list", ["div", "ytp-unloaded-progress"], ["div", "ytp-play-progress"], ["div", "ytp-load-progress"], ["div", "ytp-clip-start-exclude"], ["div", "ytp-clip-end-exclude"],
        ["div", "html5-ad-progress-list"], ["div", "ytp-marker-crenellation-list"], ["div", "ytp-marker-progress-list"]], ["div", "ytp-scrubber-pull-indicator"]], ["div", "ytp-bound-time-left", "{{boundTimeLeft}}"], ["div", "ytp-bound-time-right", "{{boundTimeRight}}"], ["div", ["ytp-clip-start", "html5-clip-marker", "yt-uix-tooltip"], {title: Uf("YTP_TOOLTIP_CLIP_MARKER")}], ["div", ["ytp-clip-end", "html5-clip-marker", "yt-uix-tooltip"], {title: Uf("YTP_TOOLTIP_CLIP_MARKER")}]];
    GD.call(this, c);
    this.o = a.xb().width;
    this.D = 1;
    this.A =
        this.Wa = this.H = 0;
    this.Va = !1;
    this.I = this.X = 0;
    this.la = this.template.j["html5-ad-progress-list"];
    this.nb = this.template.j["ytp-marker-progress-list"];
    this.Ma = this.template.j["ytp-marker-crenellation-list"];
    this.F = {};
    this.R = {};
    this.K = Infinity;
    this.ba = this.template.j["ytp-clip-end"];
    this.oa = new X1(this.ba, !0);
    S(this, this.oa);
    this.oa.subscribe("hoverstart", this.eu, this);
    this.oa.subscribe("hoverend", this.du, this);
    pv(this, this.ba, "click", this.Pn);
    this.na = this.template.j["ytp-clip-end-exclude"];
    this.Ia = this.template.j["ytp-clip-start-exclude"];
    this.M = 0;
    this.ga = this.template.j["ytp-clip-start"];
    this.pa = new X1(this.ga, !0);
    S(this, this.pa);
    this.pa.subscribe("hoverstart", this.eu, this);
    this.pa.subscribe("hoverend", this.du, this);
    pv(this, this.ga, "click", this.Pn);
    this.Aa = this.template.j["ytp-unloaded-progress"];
    this.ja = this.template.j["ytp-load-progress"];
    this.O = 0;
    this.xa = this.template.j["ytp-play-progress"];
    this.B = 0;
    this.G = this.template.j["html5-progress-bar"];
    this.k = this.C = null;
    this.V = new Y(["div", "html5-scrubber-button"]);
    S(this, this.V);
    this.V.Y(this.G);
    this.ob = this.template.j["ytp-scrubber-pull-indicator"];
    this.Ea = 0;
    this.ka = !1;
    this.va = new Qc;
    this.j = new T1(0, 0);
    this.Xa = !1;
    this.W = b;
    g2(this)
}
inherit(f2, GD);
f = f2.prototype;
f.kG = function () {
    this.k && this.k.show()
};
f.mG = function (a, b, c) {
    var d = Ng(this.N()), e = h2(this).j, g = c ? c.getAttribute("data-tooltip") : void 0;
    g && (a = W1(this.j, Number(c.getAttribute("data-position"))) * e + Ng(this.G).x);
    this.va.x = a - d.x;
    this.va.y = b - d.y;
    b = this.Xa ? this.j.j : 0;
    d = h2(this);
    this.k && (a = this.k, a.Zh || (c = 50, a.Ye ? (c = 108, g && (c *= 2))
    :
    g && (c = 108), a.N().style.padding = "2px", a.N().style.width = c + "px", e = c / 2 + 2, e = (new a2(d.position, d.width, e, e)).position - e, a.N().style.left = e + "px", a.o.style.left = Pc(d.position, 0, d.width) - e - 5 + "px", d = V1(a.k, d.o), a.ta(qv(d - b),
        "timestamp"), a.Ye && (b = DH(a.Ye, c), b = a.Ye.j[b].Tj(d), 0 < b && b != a.j && (a.j = b, e2(a))), g ? (N(a.N(), "with-text"), a.ta(g, "text")) : lh(a.N(), "with-text")
    ))
};
f.lG = function () {
    this.k && this.k.hide()
};
f.jG = function (a, b, c) {
    a = i2(this);
    this.Ea = a.k - h2(this).o * (a.k + a.B);
    this.k && this.k.hide();
    this.A && (Rf(this.A), this.A = 0);
    this.Wa = b;
    this.ka = !0;
    this.publish("beginseeking", parseFloat(c.getAttribute("data-position")))
};
f.nG = function () {
    this.X = 0;
    lh(this.N(), "ytp-pull-ui");
    lh(this.N(), "ytp-pulling");
    if (0 < this.H) {
        var a = y(), b = this.H, c = h2(this).position;
        this.A && Rf(this.A);
        this.A = nv(x(this.gu, this, a, b, c), 0)
    }
    this.k && this.k.show();
    this.ka = !1;
    this.publish("endseeking")
};
f.gu = function (a, b, c) {
    var d;
    d = (y() - a) / 200;
    d = 1 - Math.pow(1 - d, 3);
    var e = c + d * (this.B * this.o - c);
    if (0 > d || 1 < d)
        d = 1;
    j2(this, (1 - d) * b, e, this.B);
    this.A = 1 > d ? nv(x(this.gu, this, a, b, c), 0) : 0
};
function j2(a, b, c, d) {
    b = Pc(b, 0, 40);
    a.H = b;
    var e = a.D, g = Math.max(U1(a.j) / a.o, 1);
    a.D = b / 40 * (g - 1) + 1;
    b = a.o * a.D;
    a.I = Pc(d * b - c, 0, b - a.o);
    e != a.D && g2(a)
}
f.oG = function (a, b) {
    var c = !1, d = !1, e = h2(this);
    3600 <= U1(this.j) && (j2(this, this.Wa - b - 10, e.position, e.o), d = !0, c = 4 < this.H, e = h2(this));
    P(this.N(), "ytp-pull-ui", d);
    c && N(this.N(), "ytp-pulling");
    c = 0;
    e.k && 0 >= e.position ? c = -1 : e.B && e.position >= e.width && (c = 1);
    !this.A || c && c == this.X || M(this.A);
    c && (this.A = nv(x(this.fu, this, y(), this.I), 0));
    this.X = c;
    this.publish("seekto", V1(this.j, e.o), !1)
};
f.fu = function (a, b) {
    if (this.X) {
        var c = this.o * (this.D - 1);
        this.I = Pc(b + this.X * (y() - a) * .3, 0, c);
        g2(this);
        this.publish("seekto", V1(this.j, h2(this).o), !1);
        0 < this.I && this.I < c && (this.A = nv(x(this.fu, this, a, b), 0))
    }
};
function g2(a) {
    var b = h2(a), c = Ud(a.Ma), d = 0;
    if (8 < a.H)
        for (var e = (-b.k + b.width) / b.j * (U1(a.j) / 60), g = Math.ceil(-b.k / b.j * (U1(a.j) / 60)); g < e; g++) {
            var h = c[d];
            h || (h = document.createElement("div"), a.Ma.appendChild(h));
            d++;
            h.className = 0 == g % 60 ? "ytp-60m-progress" : 0 == g % 30 ? "ytp-30m-progress" : 0 == g % 15 ? "ytp-15m-progress" : "ytp-1m-progress";
            h.style.left = 60 * g / U1(a.j) * b.j + "px"
        }
    for (e = c.length - 1; e >= d; e--)
        Sd(c[e]);
    c = (-b.k + b.width) / b.j;
    a.ta(qv(V1(a.j, -b.k / b.j)), "boundTimeLeft");
    a.ta(qv(V1(a.j, c)), "boundTimeRight");
    a.G.style.width =
        b.j + "px";
    a.N().style.height = a.H + (a.W ? 20 : 8) + "px";
    b = b.k;
    Bg(a.G, "transform", b ? "translatex(" + b + "px)" : "");
    a.V.N().style.height = a.H + (a.W ? 12 : 6) + "px";
    for (var k in a.F)
        k2(a, a.F[k], a.R[k]);
    l2(a);
    m2(a, a.B, a.O)
}
function n2(a) {
    var b = Math.floor(a.j.j), c = Math.floor(V1(a.j, a.B));
    a.template.update({
        ariamin: Math.floor(a.j.k),
        ariamax: b,
        arianow: c,
        arianowtext: Uf("YTP_PROGRESS_LABEL", {PLAY_PROGRESS: c, DURATION: b})
    })
}
function h2(a) {
    var b = a.va.x;
    if (a.ka)
        var c = a.W ? 32 : 16, b = (b + a.Ea - c / 2) / (a.o - c) * a.o;
    c = a.o * a.D;
    b = Pc(b, 0, a.o);
    return new a2(b, a.o, -a.I, -(c - a.I - a.o))
}
function i2(a) {
    var b = a.W ? 32 : 16, c = a.o * a.D;
    return new a2(a.B * (c - b) + b / 2, c, b / 2, b / 2)
}
function m2(a, b, c) {
    if (b < a.M || b > a.K)
        a.Pn();
    else {
        a.B = b;
        a.O = Math.max(a.B, c);
        n2(a);
        var d = W1(a.j, a.M), e = W1(a.j, a.K), g = Pc(b, d, e);
        c = a.Va ? 1 : Pc(c, d, e);
        var h = g;
        g < e && (h = a.o * a.D, h = (g * h - g) / h);
        a.xa.style.left = rv(d) + "%";
        Bg(a.xa, "transform", "scalex(" + (h - d) + ")");
        Bg(a.V.N(), "transformOrigin", rv(b) + "%");
        b = i2(a).position + "px";
        a.V.N().style.left = b;
        a.ob.style.left = b;
        a.ja.style.left = rv(d) + "%";
        Bg(a.ja, "transform", "scalex(" + (c - d) + ")");
        a.Aa.style.left = rv(d) + "%";
        Bg(a.Aa, "transform", "scalex(" + (e - d) + ")")
    }
}
function l2(a) {
    var b = a.M > a.j.k, c = 0 < a.j.j && a.K < a.j.j;
    P(a.N(), "ytp-clip-start-enabled", b);
    P(a.N(), "ytp-clip-end-enabled", c);
    b = b ? W1(a.j, a.M) : 0;
    c = c ? W1(a.j, a.K) : 1;
    a.ga.style.left = rv(b) + "%";
    a.ba.style.left = rv(c) + "%";
    a.Ia.style.width = rv(b) + "%";
    a.na.style.left = rv(c) + "%";
    a.na.style.width = rv(1 - c) + "%"
}
f.eu = function () {
    N(this.N(), "ytp-clip-hover")
};
f.du = function () {
    lh(this.N(), "ytp-clip-hover")
};
f.Pn = function () {
    this.M = 0;
    this.K = Infinity;
    l2(this);
    m2(this, this.B, this.O)
};
function k2(a, b, c) {
    var d = h2(a).j, e = W1(a.j, b.start / 1E3) * d;
    switch (b.style) {
        case "ytp-chapter-marker":
            a = ys(b);
            var g = a / 2, d = Pc(e, g, d - g) - g;
            break;
        default:
            a = Math.min(Math.min(W1(a.j, b.end / 1E3) * d, d) - e, ys(b)), d = Pc(e, 0, d - a)
    }
    c.style.width = a + "px";
    c.style.left = d + "px";
    c.className = b.style
}
function o2(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c];
        if (d.visible) {
            var e = a, g = d.getId();
            if (!e.F[g]) {
                var h = document.createElement("div");
                d.tooltip && (h.setAttribute("data-tooltip", d.tooltip), h.setAttribute("data-position", d.start / 1E3));
                e.F[g] = d;
                e.R[g] = h;
                k2(e, d, h);
                "ytp-chapter-marker" == d.style ? e.nb.appendChild(h) : e.la.appendChild(h)
            }
        } else
            p2(a, d)
    }
}
function p2(a, b) {
    var c = b.getId();
    a.F[c] == b && (Sd(a.R[c]), delete a.F[c], delete a.R[c])
}
function q2(a, b) {
    b ? a.C || (a.C = new X1(a.G, !0), a.C.subscribe("hoverstart", a.kG, a), a.C.subscribe("hovermove", a.mG, a), a.C.subscribe("hoverend", a.lG, a), a.C.subscribe("dragstart", a.jG, a), a.C.subscribe("dragmove", a.oG, a), a.C.subscribe("dragend", a.nG, a)) : a.C && (a.C.dispose(), a.C = null)
}
f.L = function () {
    this.A && (M(this.A), this.A = 0);
    q2(this, !1);
    this.ja = this.ga = this.Ia = this.ba = this.na = this.la = null;
    this.R = {};
    this.Aa = this.G = this.xa = null;
    this.W = !1;
    f2.J.L.call(this)
};
function r2(a, b, c, d) {
    T.call(this);
    this.j = a;
    this.type = b + "_" + c;
    this.k = d;
    this.o = null;
    this.I = c
}
inherit(r2, T);
r2.prototype.B = function () {
    return this.type
};
r2.prototype.getCurrentAd = function () {
    return this.k ? this.k.getCurrentAd() : null
};
function s2() {
    this.clickThroughUrl = "";
    this.isSkippable = !1;
    this.skipShown = this.skip = v;
    this.skipTime = 0;
    this.videoUrl = this.videoId = ""
}

function t2(a) {
    this.j = a
}
var u2 = [1, 2];
function v2(a) {
    switch (parseInt(a.toString(), 10)) {
        case 12:
            return 2;
        case 13:
        case 53:
            return 3;
        case 14:
            return 4;
        case 15:
            return 5;
        case 22:
        case 52:
        case 61:
            return 7;
        case 30:
            return 8;
        case 32:
        case 33:
            return 9;
        case 51:
        case 55:
        case 60:
        case 90:
            return 10;
        case 54:
            return 1;
        case 56:
            return 11;
        case 57:
            return 12;
        case 58:
            return 13
    }
    return 0
}
function w2(a) {
    switch (parseInt(a.toString(), 10)) {
        case 2:
            return 1;
        case 3:
        case 4:
            return 2;
        case 5:
            return 3;
        case 6:
            return 4;
        case 7:
            return 5;
        case 15:
        case 100:
            return 6;
        case 14:
            return 7;
        case 777:
            return 8;
        default:
            return 0
    }
}

function x2(a, b) {
    this.j = a;
    this.A = b
}
x2.prototype.B = null;
x2.prototype.k = NaN;
function y2(a, b, c) {
    a.j.publish("AD_LOGGING_EVENT", b, c)
}
function z2(a) {
    A2(a);
    var b = B2(a);
    if (a.o) {
        var c = C2(a.A), d = a.o.y - c.top, d = Math.round(a.o.x - c.left) + "x" + Math.round(d);
        b.ck_xy = d;
        b.ck_wh = c.width + "x" + c.height
    }
    y2(a, 15, b)
}
function D2(a) {
    A2(a);
    var b = B2(a);
    if (isNaN(a.k))
        A2(a);
    else {
        var c = y() - a.k;
        b.ad_stl = c
    }
    y2(a, 4, b)
}
function E2(a) {
    A2(a);
    var b = B2(a), c = a.j.Rk();
    c ? b.ad_fmt = c : A2(a);
    y2(a, 5, b)
}
function F2(a) {
    var b = B2(a), c = a.j.Rk();
    c ? b.ad_fmt = c : A2(a);
    y2(a, 14, b)
}
function B2(a) {
    var b = {}, c = a.j.o, d = a.j.gi(), e = a.j.Sk();
    J1(a.j.getCurrentAd(), b);
    d && 0 < d && (b.ad_len = d);
    b.ad_v = "0";
    c && c.videoId ? b.ad_v = c.videoId : e && (c = rj(e), b.ad_dom = c, a.A.fa.A && (b.ad_v_url = e.substr(0, 512)));
    e = a.j;
    (e = e.k ? e.k.qf() : null) && (b.ad_cpn = e);
    b.at = a.j.B();
    return b
}
function A2(a) {
    a.B || (a.B = "InstreamAdDisplay (" + a.j.B() + ")")
}

function G2(a, b, c, d, e, g) {
    r2.call(this, b, a, 2, c);
    this.j.subscribe("onVolumeChange", this.Gt, this);
    this.j.subscribe("control_toggle_play_pause", this.Ht, this);
    this.j.subscribe("control_play", this.In, this);
    this.j.subscribe("control_pause", this.Hn, this);
    this.H = d;
    this.C = new x2(this, this.j);
    this.A = new Hv(this);
    this.G = this.D = !1;
    this.F = 0;
    this.M = e;
    this.K = !!g
}
inherit(G2, r2);
G2.j = 2E3;
f = G2.prototype;
f.Ub = null;
f.gg = !1;
f.xh = null;
f.wh = null;
f.uh = null;
f.show = function () {
    this.C.k = y();
    var a;
    if (a = this.H) {
        var b = qj(a), b = b.v || b.video_id;
        if (!b) {
            var c = Ie(Fe(a)[5] || null).match(/^\/watch\/([^\/]*)$/i);
            c && (b = c[1])
        }
        b || (a = a.match(/yt_vid\/([a-zA-Z0-9_-]{11})/), null != a && 1 < a.length && (b = a[1]));
        a = b ? new vr({video_id: b, dash: "0"}) : null
    } else
        a = null;
    this.o = a;
    var d;
    a = new s2;
    a.isSkippable = this.M;
    a.skip = x(this.iD, this);
    a.skipShown = x(this.k.Bm, this.k);
    if (b = this.getCurrentAd())
        a.clickThroughUrl = hU(b) || "", a.skipTime = dU(b, iU(b)) || 0;
    this.o ? (this.o.Zd = !0, d = {video_id: this.o.videoId},
        a.videoId = this.o.videoId, this.o.subscribe("onStatusFail", this.Dt, this), this.o.subscribe("dataloaded", this.rr, this), b = this.j.T(), b = $b(b.B), b.autoplay = "1", b = new AZ(b), b.da = "adunit", b.D = this.type, b = DZ(b, this.o, this.j.app.o.xb()), HI(this.o, b)) : (this.H && (a.videoUrl = this.H), H2(this));
    this.D || (I2(this.j, -1, d, a), this.yq())
};
f.iD = function () {
    this.j.A.o.U("skip")
};
function J2(a) {
    a.o && (a.o.unsubscribe("onStatusFail", a.Dt, a), a.o.unsubscribe("dataloaded", a.rr, a))
}
f.rr = function () {
    J2(this);
    QE(this.o);
    var a = new k0(this.j.T(), this.j.app.o), b = this.o;
    b.j && b.j.k.length ? (a = Gu(this.o.I, m0(a, this.o))) ? (a = a.k) ? (a = new J(gs(a)), a
    .
    j.set("autoplay", "1"), this.k.setMediaUrl(a.toString()), H2(this)
    ) :
    K2(this, Error("Failed to determine ad media resource."))
    :
    K2(this, Error("Failed to determine ad media format."))
    :
    K2(this, Error("No selectable formats."))
};
function H2(a) {
    if (Qh || 2.2 <= Qt && 3 > Qt || (Qh || Rh) && !Uh) {
        var b = y() - a.C.k, b = G2.j - b;
        a.F = L(x(a.Xr, a), Math.max(0, b));
        N(a.j.Ja(), "ad-interstitial-showing")
    } else
        a.Xr()
}
f.Xr = function () {
    L2(this);
    this.Ub = M2(this.j, !0);
    this.uh = this.j.Ja();
    if (this.j.fa.D)
        Sd(Dd("video-ad-status-bar"));
    else {
        var a = this.j.Ja();
        this.xh = Dd("video-ad-time-left", a);
        var a = Dd("html5-ad-progress-list", a), b = Nd("div");
        N(b, "ytp-ad-progress");
        a.appendChild(b);
        this.wh = b;
        this.A.listen(this.Ub, "timeupdate", this.zF)
    }
    kh(this.uh, ["ad-showing", "ad-interrupting"]);
    this.A.listen(UD(this.j.k), "mouseup", this.xF);
    this.A.listen(this.Ub, "waiting", this.yq);
    this.j.subscribe("onResize", this.Jn, this);
    try {
        this.A.listen(this.k,
            "adError", this.wF);
        this.A.listen(this.k, "click", this.vF);
        this.A.listen(this.k, "complete", this.fm);
        this.A.listen(this.k, "pause", this.Et);
        this.A.listen(this.k, "start", this.Ft);
        this.A.listen(this.k, "skip", this.yF);
        this.Jn();
        var c = this.j, d = c.k, e = N2(c);
        d.$.T().C && (Rg(d.j, e), Hg(d.j, 0, 0));
        this.K || this.k.start()
    } catch (g) {
        K2(this, g)
    }
};
f.Ft = function () {
    this.gg = !0;
    this.D = !1;
    this.G || (this.G = !0, D2(this.C), O2(this.j, 1));
    Xs(this.j, !0);
    I2(this.j, 1);
    this.publish("adPlay", this)
};
f.Et = function () {
    this.gg = !1;
    Xs(this.j, !1);
    I2(this.j, 2)
};
f.yF = function () {
    F2(this.C);
    this.fm()
};
f.fm = function () {
    this.D || (E2(this.C), this.gg = !1, this.D = !0, this.G = !1, I2(this.j, 0), O2(this.j, 0), this.publish("adEnd", this))
};
f.wF = function (a) {
    K2(this, a.o)
};
function K2(a, b) {
    a.gg = !1;
    a.D = !0;
    I2(a.j, 0);
    a.publish("adError", b)
}
f.Dt = function () {
    J2(this);
    K2(this, Error("Request to get video data failed."))
};
f.vF = function () {
    z2(this.C);
    this.publish("select")
};
f.xF = function (a) {
    a = new Qc(yh(a), zh(a));
    this.C.o = a
};
f.zF = function (a) {
    var b = qv(this.k.getRemainingTime());
    this.xh.innerHTML = b;
    b = this.gi() ? this.Ub.getCurrentTime() / this.gi() : 0;
    b = rv(b);
    this.wh.style.width = b + "%";
    this.Ub.ended && L(x(this.fm, this, a), 50)
};
f.yq = function () {
    !this.gg && this.G || I2(this.j, 3)
};
f.L = function () {
    this.j.unsubscribe("control_toggle_play_pause", this.Ht, this);
    this.j.unsubscribe("control_play", this.In, this);
    this.j.unsubscribe("control_pause", this.Hn, this);
    this.j.unsubscribe("onResize", this.Jn, this);
    this.j.unsubscribe("onVolumeChange", this.Gt, this);
    this.A.removeAll();
    J2(this);
    this.K || this.k.destroy();
    this.Ub && (SD(this.j.k), this.Ub = null);
    L2(this);
    this.xh && (this.xh.innerHTML = "", this.xh = null);
    this.wh && (Sd(this.wh), this.wh = null);
    this.uh && (mh(this.uh, ["ad-showing", "ad-interrupting"]),
        this.uh = null);
    this.D = !0;
    G2.J.L.call(this)
};
function L2(a) {
    a.F && (M(a.F), a.F = 0, lh(a.j.Ja(), "ad-interstitial-showing"))
}
f.gi = function () {
    return this.Ub ? this.Ub.duration || 0 : null
};
f.Rk = function () {
    return null
};
f.Sk = function () {
    return this.Ub && this.Ub.currentSrc ? this.Ub.currentSrc : null
};
f.Gt = function (a) {
    a = a.muted ? 0 : a.volume;
    isNaN(a) || (a = Pc(a / 100, 0, 1), this.k.setVolume(a))
};
f.Ht = function () {
    this.gg ? this.Hn() : this.In()
};
f.In = function () {
    this.Ub && (this.k.resume(), this.Ft())
};
f.Hn = function () {
    this.Ub && (this.k.pause(), this.Et())
};
f.Jn = function () {
    RD(this.j.k) && Rg(RD(this.j.k), N2(this.j))
};
function P2() {
    this.o = !1;
    this.k = 0;
    this.j = ""
}

function Q2(a, b, c, d, e) {
    r2.call(this, b, a, 2, c);
    this.j.subscribe("control_toggle_play_pause", this.Lt, this);
    this.j.subscribe("control_play", this.Ln, this);
    this.j.subscribe("control_pause", this.Kn, this);
    this.F = new x2(this, this.j);
    this.A = new Hv(this);
    this.C = R2(b);
    this.C.subscribe("statechange", this.Ui, this);
    this.C.subscribe("internalvideodatachange", this.Kt, this);
    this.D = this.G = !1;
    this.K = d;
    this.H = !!e
}
inherit(Q2, r2);
f = Q2.prototype;
f.Zj = !1;
f.Ah = null;
f.zh = null;
f.yh = null;
f.show = function () {
    var a = this.j, b = R2(a);
    S2(a.app, b);
    this.F.k = y();
    this.yh = this.j.Ja();
    this.C.subscribe("progresssync", this.wq, this);
    this.j.fa.D ? Sd(Dd("video-ad-status-bar")) : (a = this.j.Ja(),
    this.Ah = Dd("video-ad-time-left", a), a = Dd("html5-ad-progress-list", a), b = Nd("div"), N(b, "ytp-ad-progress"), a.appendChild(b), this.zh = b
    )
    ;
    kh(this.yh, ["ad-showing", "ad-interrupting"]);
    this.j.subscribe("onResize", this.Mn, this);
    try {
        this.A.listen(this.k, "adError", this.BF), this.A.listen(this.k, "click", this.AF), this.A.listen(this.k,
            "complete", this.lA), this.A.listen(this.k, "engagedview", this.EA), this.A.listen(this.k, "pause", this.It), this.A.listen(this.k, "start", this.Jt), this.A.listen(this.k, "skip", this.CF), this.A.listen(this.k, "youTubeChannelMetadata", this.aB), this.Mn(), this.H || this.k.start()
    } catch (c) {
        T2(this, c)
    }
};
f.Kt = function (a, b, c) {
    if ("newdata" == a && this.o != c) {
        a = {video_id: c.videoId};
        b = new s2;
        b.isSkippable = this.K;
        b.skip = x(this.k.skip, this.k);
        b.skipShown = x(this.k.Bm, this.k);
        var d = this.getCurrentAd();
        d && (b.clickThroughUrl = hU(d) || "", b.skipTime = dU(d, c.lengthSeconds) || 0);
        b.videoId = c.videoId;
        b.videoId || (b.videoUrl = this.Sk() || "");
        I2(this.j, -1, a, b)
    }
    this.o = c
};
f.Ui = function (a) {
    a = a.state;
    X(a, 128) && T2(this, Error(a.j.message || "Video player error."))
};
f.Jt = function () {
    this.Zj = !0;
    this.D = !1;
    if (!this.G) {
        this.G = !0;
        D2(this.F);
        O2(this.j, 1);
        var a = this.j.T();
        this.j.fa.D && "3" == a.k && (a = this.j.app.o, "3" == a.app.T().k && (a.j.controls = !1))
    }
    I2(this.j, 1);
    this.publish("adPlay", this)
};
f.It = function () {
    this.Zj && (this.Zj = !1, I2(this.j, 2))
};
f.lA = function () {
    this.D || (E2(this.F), U2(this), this.D = this.G = !1)
};
function U2(a) {
    var b = new P2;
    b.o = a.D;
    b.k = y();
    a.o && a.o.ya && (b.j = a.o.ya);
    n1(R2(a.j));
    I2(a.j, 0, b);
    O2(a.j, 0);
    a.publish("adEnd", a);
    b = a.j.T();
    a.j.fa.D && "3" == b.k && (a = a.j.app.o, "3" == a.app.T().k && (a.j.controls = !0))
}
f.EA = function () {
    var a = this.F;
    a.j.publish("AD_LOGGING_EVENT", 777, B2(a))
};
f.CF = function () {
    this.D = !0;
    F2(this.F);
    U2(this)
};
f.aB = function () {
    var a = this.getCurrentAd();
    if (a) {
        var b = a.K;
        if ((a = a.H) && b) {
            var c = {};
            c.videoTitle = b.title;
            c.channelThumbnailUrl = a.j;
            c.channelTitle = a.k;
            c.channelVideoCount = a.videoCount;
            this.j.publish("publish_external_event", "onAdMetadataAvailable", c)
        }
    }
};
f.BF = function (a) {
    var b = {};
    try {
        b.error_code = a.o.getErrorCode()
    } catch (c) {
        b.error_code = 900, b.error_message = c.toString()
    }
    var d = this.F;
    A2(d);
    var e = B2(d);
    b && qa(e, b);
    e.ad_error = 32;
    y2(d, 7, e);
    T2(this, a.o)
};
function T2(a, b) {
    a.C.Rf();
    I2(a.j, 0);
    a.publish("adError", b)
}
f.AF = function () {
    z2(this.F);
    this.k.pause();
    this.publish("select")
};
f.wq = function () {
    var a = this.j.j.ph();
    this.j.fa.D || (this.Ah.innerHTML = qv(a.duration - a.current), a = rv(a.current / a.duration), this.zh.style.width = a + "%")
};
f.L = function () {
    this.j.unsubscribe("control_toggle_play_pause", this.Lt, this);
    this.j.unsubscribe("control_play", this.Ln, this);
    this.j.unsubscribe("control_pause", this.Kn, this);
    this.j.unsubscribe("onResize", this.Mn, this);
    this.A.removeAll();
    this.C.subscribe("statechange", this.Ui, this);
    this.C.unsubscribe("internalvideodatachange", this.Kt, this);
    this.C.unsubscribe("progresssync", this.wq, this);
    this.H || this.k.destroy();
    this.Ah && (this.Ah.innerHTML = "", this.Ah = null);
    this.zh && (Sd(this.zh), this.zh = null);
    this.yh &&
    (mh(this.yh, ["ad-showing", "ad-interrupting"]), this.yh = null);
    this.D = !1;
    var a = this.j;
    if (a.o) {
        var b = a.app, a = a.o;
        V2(b);
        a != b.k && S2(b, b.k)
    }
    Q2.J.L.call(this)
};
f.gi = function () {
    return this.C.Sc()
};
f.Rk = function () {
    return this.o && this.o.o ? this.o.o.mimeType : null
};
f.Sk = function () {
    return this.o && this.o.R ? gs(this.o.R.k) : null
};
f.Lt = function () {
    this.Zj ? this.Kn() : this.Ln()
};
f.Ln = function () {
    this.k.resume();
    this.Jt()
};
f.Kn = function () {
    this.k.pause();
    this.It()
};
f.Mn = function () {
    Rg(RD(this.j.k), N2(this.j))
};
function W2(a, b) {
    this.o = a;
    this.k = b
}
function X2(a, b, c) {
    a.o.publish("AD_LOGGING_EVENT", b, c)
}
function Y2(a) {
    var b = {};
    J1(a.o.getCurrentAd(), b);
    a.B && a.j && (b.ot = a.j - a.B);
    var c;
    c = a.k.isFullscreen() ? 2 : a.k.T().Id ? 1 : 0;
    b.ad_ps = c;
    b.at = a.o.B();
    return b
}

function Z2(a, b, c, d) {
    r2.call(this, b, a, 1, c);
    this.C = new W2(this, b);
    this.A = new Hv(this);
    this.D = !!d
}
inherit(Z2, r2);
f = Z2.prototype;
f.ld = null;
f.Rl = !1;
f.show = function () {
    if (!this.Rl || !$2(this.j)) {
        var a = this.j.Ja();
        N(a, "ad-showing");
        this.ld = RD(this.j.k);
        a = this.k.getCurrentAd().getHeight();
        this.ld.style.height = Ig(a, !0);
        N(this.ld, "ad-overlay");
        this.A.listen(this.ld, "mouseup", this.FF);
        try {
            this.A.listen(this.k, "userClose", this.bC);
            this.A.listen(this.k, "click", this.EF);
            this.A.listen(this.k, "adError", this.DF);
            a3(this, "normal");
            this.D || this.k.start();
            var b = this.C;
            b.B = y();
            var c = Y2(b);
            X2(b, 3, c);
            this.j.subscribe("onResize", this.$j, this);
            this.j.subscribe("onStateChange",
                this.Mt, this);
            this.publish("adEnd", this)
        } catch (d) {
            this.publish("adError", d)
        }
    }
};
f.L = function () {
    this.A.removeAll();
    this.j.unsubscribe("onResize", this.$j, this);
    this.j.unsubscribe("onStateChange", this.Mt, this);
    var a = this.j.Ja();
    lh(a, "ad-showing");
    this.k && (this.D || this.k.destroy(), this.k = null);
    this.ld && lh(this.ld, "ad-overlay");
    this.ld = null;
    this.Rl = !1;
    Z2.J.L.call(this)
};
f.bC = function () {
    this.ld && this.k && this.k.getCurrentAd() && (this.ld.style.height = Ig(0, !0));
    this.Rl = !0;
    var a = this.C;
    a.j = y();
    var b = Y2(a);
    X2(a, 6, b)
};
f.EF = function () {
    this.j.pauseVideo();
    var a = this.C;
    a.j = y();
    var b = Y2(a);
    if (a.A) {
        var c = C2(a.k), d = a.A.y - c.top, d = Math.round(a.A.x - c.left) + "x" + Math.round(d);
        b.ck_xy = d;
        b.ck_wh = c.width + "x" + c.height
    }
    X2(a, 100, b)
};
f.FF = function (a) {
    this.C.A = a.target == a.currentTarget ? null : new Qc(a.pageX, a.pageY)
};
f.DF = function (a) {
    this.publish("adError", a.o)
};
f.Mt = function (a) {
    X(a.state, 16) && a3(this, "normal")
};
function a3(a, b) {
    a.F != b && (a.F = b)
}
f.$j = function () {
};
function b3(a, b, c, d) {
    R.call(this);
    this.M = a;
    this.k = b.j;
    this.F = b;
    this.I = b.getId();
    this.j = c;
    this.o = d;
    this.B = new M1(this.k, this.We(), c, d);
    this.C = null;
    this.K = new mn(this);
    this.A = new mn(this)
}
inherit(b3, R);
b3.j = "rm";
b3.k = 10;
b3.C = 200;
b3.A = 200;
b3.B = 190;
b3.o = 100;
f = b3.prototype;
f.Gn = null;
f.load = function () {
    var a;
    a = this.j;
    a = a.fa.A ? N2(a) : a.app.o.k.xb();
    var b;
    this.j.fa.j ? b = !1 : (b = 0 < (this.o & 3) ? b3.B : b3.A, b = a.width < b3.C || a.height < b);
    if (b) {
        b = this.B;
        var c = N1(b);
        c.ck_wh = a.width + "x" + a.height;
        c3(b.j, 14, c);
        R1();
        this.Ae(Error("The player size is too small."))
    } else if (this.C = this.j.fg) {
        a = this.B;
        d3(a.j, 9, N1(a));
        a = new kV;
        (b = this.j.fa.serverPrefetchedVast) && 0 < (this.o & 3) ? (a.adsResponse = b, this.j.fa.serverPrefetchedVast = void 0) : a.adTagUrl = this.pf();
        b = N2(this.j);
        a.linearAdSlotWidth = b.width;
        a.linearAdSlotHeight =
            b.height;
        a.nonLinearAdSlotWidth = b.width;
        a.nonLinearAdSlotHeight = b3.o;
        a.Lo = EZ(this.j.T());
        a.j = this.j.T().experiments.experimentIds;
        if (b = a.Lo ? JZ(this.j.T()) : -1)
            a.lastActivity = b;
        this.j.fa.tagForChildDirected && (a.tagForChildDirectedContent = !0);
        OD(this.j.T(), "937420") && (a.fh = !0);
        b = nr(this.j.app);
        a.Kc = {"[CONTENT_V]": b.videoId, "[CPN]": b.ya, "[LACT]": e3(this)};
        EZ(this.j.T()) || (a.Kc["[LACT]"] = "-1");
        this.C.listen("adsManagerLoaded", this.At, !1, this);
        this.C.listen("adError", this.zt, !1, this);
        this.hj(this.C, a)
    }
};
f.Tk = function () {
    var a = new VK, b = this.j.fa, c = this.j.T();
    a.baseYouTubeUrl = c.A;
    a.contentId = nr(this.j.app).videoId;
    a.tl = OD(c, "927622");
    a.showContentThumbnail = b.showContentThumbnail;
    a.surveyCreativeData = b.surveyCreativeData;
    a.useShareButton = !0;
    a.useStyledNonLinearAds = !0;
    a.useVideoAdUi = b.D;
    a.youTubeAdNamespace = this.We();
    b.O && (a.ho = !0, a.Jw = !0, a.showContentThumbnail = !1, a.Xm = !0, a.ts = !0, a.useShareButton = !1);
    return a
};
f.We = function () {
    return this.M
};
function f3(a) {
    var b = b3.k;
    a.k = b;
    a.B.A = b
}
function g3(a, b) {
    a.Gn = b;
    a.B.o = b.B()
}
function h3(a, b) {
    var c = t("yt.www.watch.ads.setAdId");
    c && c(b);
    a.B.k = b
}
function i3(a) {
    a = a.k;
    return 0 == a || -1 == a ? a : 1E3 * a
}
function e3(a) {
    var b = a.j;
    return {
        toString: function () {
            return null == b || b.ha() ? b = null : JZ(b.T()).toString()
        }
    }
}
f.At = function (a) {
    if (a.A === this) {
        WH("aml");
        try {
            var b = this.Tk(), c = a.o
        } catch (d) {
            this.Md(d);
            return
        }
        this.A.listen(c, "companionBackfill", x(this.uF, this, c));
        this.A.listen(c, "loaded", x(this.tF, this, c));
        this.A.listen(c, "adError", x(this.sF, this, c));
        this.A.listen(c, "allAdsCompleted", v);
        this.A.listen(c, "contentPauseRequested", v);
        this.A.listen(c, "contentResumeRequested", v);
        c = G1(a, this.j.A, {}, b);
        try {
            c.init("normal")
        } catch (e) {
            c.destroy(), this.Md(e)
        }
    }
};
f.tF = function (a, b) {
    this.A.removeAll();
    var c = b.getAd(), d = IT(c), e = this.B, g = N1(e);
    g.ad_man = d ? "instream" : "overlay";
    d3(e.j, 12, g);
    e = a.getMediaUrl();
    switch (d ? this.Cg(a, c, e) : this.Gd(a, c)) {
        case 0:
            j3(this.F, this.Gn, this.k);
            break;
        case 1:
            a.destroy();
            this.Ae(Error("Unable to create a display state."));
            break;
        case 2:
            c = this.B;
            c3(c.j, 21, N1(c));
            a.destroy();
            this.Ae(Error("Fallback to next ad."));
            break;
        default:
            a.destroy()
    }
};
f.sF = function (a, b) {
    this.A.removeAll();
    a.destroy();
    this.Md(b.o)
};
f.zt = function (a) {
    var b = a.o;
    "adLoadError" == b.o && a.A === this && this.Md(b)
};
f.uF = function () {
    Q1()
};
f.Cg = function (a, b, c) {
    h3(this, TT(b));
    var d;
    this.j.fa.P ? d = new Q2(this.We(), this.j, a, KT(b)) : d = new G2(this.We(), this.j, a, c, KT(b));
    g3(this, d);
    return 0
};
f.Gd = function (a, b) {
    h3(this, TT(b));
    g3(this, new Z2(this.We(), this.j, a));
    return 0
};
f.Md = function (a) {
    if (a) {
        var b = this.B, c = N1(b);
        a && I1(a, c);
        c3(b.j, 32, c);
        this.Ae(a)
    }
};
f.Ae = function () {
    k3(this.F)
};
f.L = function () {
    this.C && (this.C.Da("adsManagerLoaded", this.At, !1, this), this.C.Da("adError", this.zt, !1, this));
    this.K.removeAll();
    this.A.removeAll();
    b3.J.L.call(this)
};
f.hj = function (a, b) {
    try {
        mZ(a, b, this), WH("ar")
    } catch (c) {
        this.Md(c)
    }
};
function l3(a) {
    this.j = a
}

function m3(a) {
    r2.call(this, a, 2, 3, null);
    this.A = this.C = 0
}
inherit(m3, r2);
m3.prototype.show = function () {
    var a = t("yt.www.watch.ads.loadAfc");
    a && a();
    this.publish("adEnd", this);
    this.C = Qf(x(this.D, this), 1E3)
};
m3.prototype.L = function () {
    n3(this);
    m3.J.L.call(this)
};
function n3(a) {
    a.C && (Rf(a.C), a.A = 0)
}
m3.prototype.D = function () {
    var a = t("yt.www.watch.ads.isAfcAdVisible");
    this.A++;
    var b = {};
    b.at = this.B();
    10 <= this.A || !a ? (n3(this), this.publish("AD_LOGGING_EVENT", 2, b)) : a() && (n3(this), this.publish("AD_LOGGING_EVENT", 3, b))
};
function o3(a, b, c) {
    b3.call(this, 2, a, b, c);
    this.D = new l3(this.j.fa);
    P1()
}
inherit(o3, b3);
o3.prototype.Tk = function () {
    var a = o3.J.Tk.call(this);
    a.fo = 0 == this.I;
    a.mw = $2(this.j) ? a.fo : !0;
    return a
};
o3.prototype.pf = function () {
    var a;
    var b = this.D;
    a = i3(this);
    (b = 4 == this.o && b.j.afvInvideoAdTag ? b.j.afvInvideoAdTag : b.j.afvAdTag) ? (va(b, "http:") && (b = b.substr(5)), a = tj(b, {videoad_start_delay: a})) : a = "";
    return a
};
o3.prototype.Gd = function (a, b) {
    if (this.j.fa.j)
        return 1;
    0 == this.k && (f3(this), d3(this.j, 1));
    return o3.J.Gd.call(this, a, b)
};
o3.prototype.Ae = function (a) {
    var b = this.j.fa;
    b.j ? o3.J.Ae.call(this, a) : b.ka || this.o & 4 ? (g3(this, new m3(this.j)), j3(this.F, this.Gn, this.k)) : o3.J.Ae.call(this, a)
};
function p3(a, b) {
    if (a) {
        this.Bt = a;
        this.lp = b;
        var c, d = this.Bt, e = d.indexOf(";sz=");
        c = mj(d.substring(e), ";");
        d = d.substring(0, e).split("pfadx");
        if (c = 2 != d.length ? null : {tw: d[0], KC: d[1], MC: c})
            this.ro = c.tw, this.xr = c.KC, this.Ct = c.MC
    }
}
f = p3.prototype;
f.Bt = "";
f.ro = "";
f.lp = !1;
f.km = "";
f.xr = "";
f.Ct = null;
f.hi = function (a, b) {
    var c, d = [];
    b & 1 && (c = 0 == a ? "pre" : -1 == a ? "post" : "mid;pos=0", d.push("480x360"));
    b & 2 && (c = 0 == a ? "pre" : -1 == a ? "post" : "mid;pos=0", d.push("480x361"));
    b & 12 && d.push("480x70");
    var e = [], g, h;
    b & 12 && (e.push("300x250"), g = "watch-channel-brand-div", h = 1);
    0 < (b & 3) && (e.push("300x60"), g = "watch-longform-ad", h = 1);
    var k = ac(this.Ct);
    c && (k.pos = c);
    h && (k.tile = h.toString());
    g && (k.kmyd = g);
    e && 0 < e.length && this.lp && (k.ciu_szs = e.join(","));
    k.dcmt = "text/xml";
    this.km || (this.km = Math.floor(999999999 * Math.random()).toString());
    k.ord = this.km;
    d && d.length && Xb(k, "sz");
    e = nj(k, ";");
    d && d.length && (e = "sz=" + d.join(",") + ";" + e);
    return [this.ro, "pfadx", this.xr, ";", e, "?"].join("")
};
function q3(a) {
    this.j = a ? a : ""
}
q3.prototype.hi = function (a, b) {
    if (b & 1) {
        var c = "mid", d = "midroll";
        0 == a ? (c = "pre", d = "preroll"): -1 == a && (c = "post", d = "postroll");
        var e = new J(this.j), g = e.j, h = g.get("scp", ""), c = (h ? h + "&" : "") + ("pos=" + c);
        g.set("scp", c);
        g.set("vpos", d);
        return e.toString()
    }
    return this.j
};
function r3(a, b, c) {
    Z2.call(this, 1, a, b, c)
}
inherit(r3, Z2);
r3.prototype.$j = function () {
};
r3.prototype.B = function () {
    return "1_3"
};
function s3(a, b, c) {
    b3.call(this, 1, a, b, c);
    a = this.j.fa;
    this.P = a.Kg ? new q3(a.adTag) : new p3(a.adTag, a.ja)
}
inherit(s3, b3);
s3.prototype.pf = function () {
    return this.P.hi(this.k, this.o)
};
s3.prototype.Gd = function (a, b) {
    h3(this, TT(b));
    var c = null != b.j ? b.j.F : {};
    if (K1(c, b3.j))
        return 1 == this.o || $2(this.j) || R1(), a.sendImpressionUrls(), this.j.fa.oi ? (g3(this, new m3(this.j)), 0) : 2;
    if (K1(c, "blockAllAds"))
        return a.sendImpressionUrls(), g3(this, new r3(this.j, a)), 0;
    if (K1(c, "hideMaster"))
        return g3(this, new r3(this.j, a)), 0;
    if (this.j.fa.j)
        return 1;
    g3(this, new Z2(this.We(), this.j, a));
    return 0
};
function t3(a, b, c, d) {
    s3.call(this, a, b, c | d);
    this.H = c;
    this.G = d;
    this.D = null;
    P1()
}
inherit(t3, s3);
var u3 = {GDFP: 1, DART: 1, DART_DFP: 1, DART_DFA: 1, ADSENSE: 2, "ADSENSE/ADX": 2};
f = t3.prototype;
f.pf = function () {
    if (this.j.fa.Kg) {
        var a = new q3(this.j.fa.dynamicAllocationAdTag);
        return a.hi(this.k, this.H)
    }
    a = new p3(this.j.fa.dynamicAllocationAdTag, this.j.fa.ja);
    return a.hi(this.k, this.H)
};
f.hj = function (a, b) {
    if (this.G) {
        b.youTubeAdType = L1(this.G);
        var c = this.j.fa.ea;
        c && (b.youTubeExperimentIds = c);
        b.jh = i3(this)
    }
    t3.J.hj.call(this, a, b)
};
f.Cg = function (a, b, c) {
    v3(this, a);
    return 1 != this.D && 2 != this.D ? 1 : t3.J.Cg.call(this, a, b, c)
};
f.Gd = function (a, b) {
    v3(this, a);
    switch (this.D) {
        case 1:
            return t3.J.Gd.call(this, a, b);
        case 2:
            var c;
            this.j.fa.j ? c = 1 : (0 == this.k && (f3(this), d3(this.j, 1)), h3(this, TT(b)), g3(this, new Z2(2, this.j, a)), c = 0);
            return c;
        default:
            return 1
    }
};
f.We = function () {
    return this.D || 0
};
function v3(a, b) {
    var c = b.getCurrentAd(), d = WT(c);
    d.unshift(NT(c));
    for (c = 0; c < d.length; ++c) {
        var e = u3[d[c].toUpperCase()];
        if (e) {
            a.D = e;
            return
        }
    }
    a.D = 0
}

function w3(a, b) {
    var c = b.fa;
    this.D = c.Ia;
    var d = 0, c = c.ga.toUpperCase();
    "INVIDEO" == c ? d = 4 : "INSTREAM" == c ? d = 1 : "MPU" == c && (d = 8);
    b3.call(this, 2, a, b, d)
}
inherit(w3, b3);
w3.k = "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBbSB-E7SYd1iggX6r2b5C7ljvO6fVqaj0&shortUrl=";
w3.o = "43";
w3.j = function (a) {
    var b = new Ju;
    Bj(a, {
        format: "RAW", method: "GET", timeout: 5E3, withCredentials: !0, Ge: function () {
            Ku(b, Error(a + " timed out"))
        }, onError: function (c) {
            Ku(b, Error("Problem loading " + a + " with status code " + c.status))
        }, fb: function (a) {
            Ou(b);
            Mu(b, !0, a)
        }
    });
    return b
};
w3.prototype.pf = function () {
    return ""
};
w3.prototype.hj = function (a, b) {
    var c = this.o;
    c & 1 || c & 4 || c & 8 ? this.D ? c & 8 ? S1(this.D) : ("goo.gl" == rj(this.D) ? (c = w3.j(w3.k + this.D), Qu(c, function (a) {
        a = jg(a.responseText);
        if (!a)
            throw Error("Invalid expanded forced ad URL.");
        if (!a.longUrl)
            throw Error("Missing forced ad URL information.");
        a = new J(a.longUrl);
        K(a, "video_format", w3.o);
        return w3.j(a.toString())
    }, this
    )) :
    c = w3.j(this.D), Qu(c, function (c) {
        b.adsResponse = c.responseText;
        mZ(a, b, this)
    }, this), Ru(c, null, this.Md, this)
    ) :
    this.Md(Error("Invalid empty URL"))
    :
    this.Md(Error("Invalid request type: " +
    c))
};
function x3(a, b, c, d) {
    this.j = a;
    this.A = c;
    this.o = d;
    this.B = b;
    Qh || Rh ? this.k = "html5_ios" : Sh ? this.k = "html5_android" : Zr() ? this.k = "html5_ps3" : "leanback" == this.A.da ? (a = (Rb(window, "environment", "brand") || "").toLowerCase(), this.k = "roku" == a || "bskyb" == a ? "roku" : "html5_tv_leanback"
) :
    y3(this) ? this.k = "html5_desktop" : this.k = "html5"
}
var z3 = "kyvDG3GPNY0 F_HOziu_duk T8uOdgwGUvc Ojs8LzuieSI JzTfd-RlK4M bfHSqiuB_QA b2nJxZl0xEk Bj9O5BESM1o tu3C_TjRpGM FQYmOyuKtwg FEWg27qS_aY 9_edKusM2j0 SbL08XsN9rk u31pf-9Rsjc 64J_K7R7Bu8 wDzg2Eh-TiQ qERY1A8AnM0 B5uvc8NhkwI".split(" ");
function y3(a) {
    return G(z3, a.j.V) || PD(a.A, "952600", "952605") && !a.j.ib
}

function A3(a, b) {
    Z2.call(this, 4, a, b)
}
inherit(A3, Z2);
A3.prototype.$j = function () {
};
A3.prototype.B = function () {
    return "4_3"
};
function B3(a, b, c) {
    b3.call(this, 4, a, b, c);
    this.D = new x3(this.j.fa, nr(this.j.app).lengthSeconds, this.j.T(), c)
}
inherit(B3, b3);
B3.prototype.pf = function () {
    var a;
    var b = this.D;
    if (b.j.Ga && b.j.V) {
        a = {};
        var c = "youtube_watch_" + b.k;
        a.nw = "10613";
        a.asnw = b.j.Ga;
        a.ssnw = b.j.Ga;
        a.caid = b.j.V;
        a.vdur = b.B;
        a.csid = c;
        a.resp = "vast2";
        c = {};
        isNaN(b.j.oa) || (c._fw_d_001 = b.j.oa);
        b.j.va && (c._fw_d_002 = b.j.va);
        b.j.na && (c["_fwu:10613:lang"] = b.j.na);
        b.j.ba && (c._fw_dbp = b.j.ba);
        b.j.pa && (c._fw_distributorvideoassetid = b.j.pa);
        c._fw_yt_type = b.j.B ? "short" : "long";
        if (y3(b)) {
            a.prof = "10613:10613_youtube_html5_2014";
            a.crtp = "youtube";
            a.flag = "+slcb+qtcb+amcb+exvt+emcr";
            var d = "", e;
            b.o & 1 && (e = {
                slid: "preroll",
                ptgt: "a",
                slau: "preroll",
                tpos: "0"
            }, d = nj(e, "&") + ";", e = {
                slid: "page_display1",
                w: "300",
                h: "60",
                ptgt: "s",
                slau: "display",
                flag: "+cmpn"
            }, d += nj(e, "&") + ";");
            b.o & 4 && (e = {
                slid: "overlay",
                ptgt: "a",
                slau: "overlay",
                tpos: "10"
            }, d += nj(e, "&") + ";", e = {
                slid: "page_display2",
                w: "300",
                h: "250",
                ptgt: "s",
                slau: "display",
                flag: "+cmpn"
            }, d += nj(e, "&") + ";");
            b.o & 8 && (e = {slid: "dis", w: "300", h: "250", ptgt: "s", slau: "display"}, d += nj(e, "&") + ";");
            b = d.substr(0, d.length - 1);
            a = "//2975c.v.fwmrm.net/ad/g/1?" + nj(a, "&") +
            ";" + nj(c, "&") + ";" + b
        } else {
            d = "10613:10613_youtube_" + b.k.split("_")[0];
            a.prof = "10613:10613_youtube_" + b.k;
            a.crtp = "vast2s";
            a.flag = "+emcr";
            e = {ptgt: "a", slid: "preroll"};
            var g = "";
            b.j.C && !b.j.o ? g = ";linear-skippable" : !b.j.C && b.j.o && (g = ";video");
            e.slau = "preroll" + g;
            e.w = "480";
            e.h = "360";
            e.tpos = "0";
            e.tpcl = "preroll";
            e.envp = d;
            e.cd = "1440,900";
            a = "//2975c.v.fwmrm.net/ad/g/1?" + nj(a, "&") + ";" + nj(c, "&") + ";" + nj(e, "&")
        }
    } else
        a = "";
    return a
};
B3.prototype.Cg = function (a, b) {
    return 0 != this.k ? 1 : B3.J.Cg.call(this, a, b, null)
};
B3.prototype.Gd = function (a, b) {
    var c = null != b.j ? b.j.F : {};
    if (K1(c, b3.j))
        return this.F.A = $b(a), 2;
    if (this.j.fa.j)
        return 1;
    if (K1(c, "hideMaster")) {
        if (a.C && a.C.se()) {
            var c = a.C.se(), d;
            d = a.getCurrentAd();
            if (EK()) {
                var e = d.S;
                d.S = [];
                d = e
            } else
                d = [];
            c.impressionUrls = d
        }
        g3(this, new A3(this.j, a));
        return 0
    }
    return B3.J.Gd.call(this, a, b)
};
function C3(a, b, c) {
    b3.call(this, 13, a, b, c)
}
inherit(C3, b3);
var D3 = [{ym: 4, size: "480x70", Co: "300x250"}, {ym: 1, size: "480x360", Co: "300x60"}];
C3.prototype.pf = function () {
    var a = new J(this.j.fa.Wa, !0), b = this.o, c = D3.filter(function (a) {
        return (b & a.ym) == a.ym
    }), d = c.map(function (a) {
        return a.size
    }).join("|");
    K(a, "sz", d);
    c = c.map(function (a) {
        return a.Co
    }).join(",");
    K(a, "ciu_szs", c);
    c = 4 == (this.o & 4);
    1 == (this.o & 1) ? (c || K(a, "vad_type", "linear"), c = "midroll", 0 == this.k ? c = "preroll" : -1 == this.k && (c = "postroll"), K(a, "vpos", c)) : c && K(a, "vad_type", "nonlinear");
    return a.toString()
};
function E3(a, b, c) {
    this.o = a;
    this.j = b;
    this.k = c || 0
}
E3.prototype.create = function (a, b) {
    switch (this.o) {
        case 1:
            return new o3(a, b, this.j);
        case 2:
            return new s3(a, b, this.j);
        case 3:
            return new t3(a, b, this.j, this.k);
        case 5:
            return new B3(a, b, this.j);
        case 4:
            return new w3(a, b);
        case 6:
            return new C3(a, b, this.j);
        default:
            return null
    }
};
function F3(a) {
    return 0 < ((a.j | a.k) & 3)
}

function G3(a, b, c, d, e) {
    T.call(this);
    this.wa = b;
    this.o = a;
    this.j = c;
    this.B = d;
    this.A = this.k = null;
    this.C = !!e;
    this.D = NaN
}
inherit(G3, T);
f = G3.prototype;
f.Ym = !0;
f.tb = !1;
f.isVisible = !0;
f.Gc = "unloaded";
f.an = !1;
function H3(a) {
    return 0 == a.j ? I3(a) && J3(a) ? -2147483648 : 0 : -1 == a.j || -2 == a.j ? 2147483647 : 1E3 * a.j
}
function K3(a) {
    return 0 == a.j || -2 == a.j ? !1 : ib(a.B, function (a) {
        switch (a.o) {
            case 1:
            case 2:
            case 3:
            case 6:
                return !0;
            default:
                return !1
        }
    })
}
function I3(a) {
    return "loaded" == a.Gc || "error" == a.Gc
}
function J3(a) {
    if (!I3(a))
        throw Error("Preroll status is undefined before ad load.");
    return 0 == a.j && a.tb
}
function k3(a) {
    a.Gc = "loading";
    0 == a.j && !hb(a.B, F3) && Ms(a.o);
    if (a.C)
        a.Gc = "loaded", a.tb = !0, L3(a);
    else {
        var b = a.B.shift();
        if (b) {
            0 == a.j && M3(a.o, "nl");
            b = b.create(a, a.o);
            S(a, b);
            var c = t("ytplayer.playback_delay");
            c ? a.D = L(x(b.load, b), c) : b.load()
        } else
            d3(a.o, 2, N3(a, {})), O3(a, !1), a.Gc = "error", L3(a)
    }
}
f.getId = function () {
    return this.wa
};
function P3(a) {
    a.k && (a.k.unsubscribe("adEnd", a.uq, a), a.k.unsubscribe("adError", a.xt, a), a.k.unsubscribe("AD_LOGGING_EVENT", a.Oq, a), a.k.unsubscribe("select", a.wt, a))
}
function j3(a, b, c) {
    a.k = b;
    a.j = c;
    S(a, a.k);
    0 == a.wa && (a.o.C.at = a.k.B());
    a.k instanceof G2 || a.k instanceof Q2 ? a.tb = !0 : a.k instanceof m3 ? a.isVisible = !1 : a.k instanceof A3 ? a.isVisible = !1 : a.k instanceof r3 && (a.isVisible = !1);
    a.Gc = "loaded";
    L3(a)
}
function L3(a) {
    a.publish("adBreakComplete", a)
}
f.show = function () {
    this.an ? this.k instanceof Z2 && a3(this.k, "normal") : (this.an = !0, (this.k instanceof G2 || this.k instanceof Q2) && M3(this.o, "bs"), this.k.subscribe("adEnd", this.uq, this), this.k.subscribe("adError", this.xt, this), this.k.subscribe("AD_LOGGING_EVENT", this.Oq, this), this.k.subscribe("select", this.wt, this), this.k.show(), O3(this, !0))
};
function O3(a, b) {
    a.A && (a.A.sendImpressionUrls({"[FILLED_OPPORTUNITY]": b ? 1 : 0}), a.A.dispose(), a.A = null)
}
f.uq = function () {
    if (this.tb) {
        P3(this);
        var a = this.o;
        if (a.fa.la && !a.Ll) {
            var b = a.T().A;
            hg(b + "mac_204?action_fcts=1");
            a.Ll = !0
        }
    }
    L3(this)
};
f.xt = function (a) {
    if (a) {
        var b = {};
        I1(a, b);
        N3(this, b);
        c3(this.o, 32, b)
    }
    P3(this);
    L3(this)
};
f.Oq = function (a, b) {
    N3(this, b);
    d3(this.o, a, b)
};
f.wt = function () {
    this.Ym = !1
};
function N3(a, b) {
    b.sst = a.j;
    b.sidx = 0;
    return b
}
f.L = function () {
    P3(this);
    this.k = null;
    null != this.A && (this.A.dispose(), this.A = null);
    M(this.D);
    G3.J.L.call(this)
};
function Q3(a) {
    this.sw = a
}
function R3(a) {
    try {
        var b = PB(a).getElementsByTagName("AdBreak"), c = E(b, function (a) {
            a = a.getAttribute("time");
            return Wa(a)
        });
        return new Q3(c)
    } catch (d) {
        return new Q3([0])
    }
}

function S3(a) {
    var b = 0;
    if (a.K || a.I)
        a.K && (b |= 1), a.I && (b |= 2);
    var c = 0;
    a.B && (a.H && (a.afvMergeEnabled && b ? b |= 4 : c = 4), b || (b = c, c = 0));
    a = new ue;
    a.set(3, b);
    a.set(4, c);
    return a
}
function T3(a) {
    var b = [];
    if (a.X)
        return b.push(new E3(4, 0)), b;
    if (a.S) {
        var c = 0;
        if (a.o || a.C)
            c |= 1;
        a.G && (c |= 4);
        a.R && (c |= 8);
        b.push(new E3(5, c))
    }
    a.Sl && (c = 0, a.o && (c |= 1), a.G && a.B && (c |= 4), b.push(new E3(6, c)));
    c = 0;
    a.M && (a.o && (c |= 1), a.C && (c |= 2), a.G && a.B && (c |= 4), a.R && a.B && (c |= 8));
    var d = S3(a);
    a.Va && c && d.get(3) ? b.push(new E3(3, c, d.get(3))) : (c && b.push(new E3(2, c)), d.get(3) && b.push(new E3(1, d.get(3))));
    d.get(4) && b.push(new E3(1, d.get(4)));
    return b
}

function U3(a) {
    this.j = a
}

function V3(a, b) {
    this.F = a;
    this.O = this.F.isMobile;
    this.A = "leanback" == this.F.da;
    this.j = this.O || this.A;
    this.D = !this.A && !(Qh && !a.I);
    this.P = a.C && (!this.j || this.A) || this.O && !(Qh && !a.I);
    this.apply(b);
    if (this.C && !this.P)
        throw "Skippable instreams were enabled without FullPlayerApiSupport";
}
var W3 = {uv: "m", cv: "f"};
f = V3.prototype;
f.apply = function (a) {
    var b = H1(a.instream), c = H1(a.trueview), d = H1(a.aftv);
    this.Ua = a.ad_slots;
    this.W = a.ad_breaks;
    this.adFlags = a.ad_flags || 0;
    this.ea = a.cafe_experiment_id;
    this.adTag = a.ad_tag;
    this.nb = !!a.adtest;
    this.afvAdTag = a.afv_ad_tag;
    this.Aa = X3(this.afvAdTag);
    this.afvInvideoAdTag = a.afv_invideo_ad_tag;
    this.afvMergeEnabled = !!a.afv_merge_enabled;
    this.oa = parseInt(a.ad_age, 10);
    this.amsBaseTag = a.ams_base_tag;
    this.applyFadeOnMidrolls = !!a.apply_fade_on_midrolls;
    this.Ea = a.cid;
    this.pa = a.docid || a.video_id || a.videoId;
    this.dynamicAllocationAdTag = a.dynamic_allocation_ad_tag;
    this.excludedAds = a.excluded_ads;
    this.fadeInDurationMilliseconds = parseInt(a.fade_in_duration_milliseconds, 10) || 0;
    this.fadeInStartMilliseconds = parseInt(a.fade_in_start_milliseconds, 10) || 0;
    this.fadeOutDurationMilliseconds = parseInt(a.fade_out_duration_milliseconds, 10) || 0;
    this.fadeOutStartMilliseconds = parseInt(a.fade_out_start_milliseconds, 10) || 0;
    this.ga = a.force_ad_type;
    this.Ia = a.force_ad_url;
    this.va = Sb(W3, function (b) {
        return b == a.ad_gender
    });
    this.ba =
        a.dbp;
    this.oi = H1(a.afc_rm_fallback);
    this.ja = !!a.mpu;
    this.H = H1(a.afv) && !this.j;
    this.I = d && c;
    this.K = d && b && !H1(a.no_afv_instream);
    this.M = H1(a.dclk);
    this.Kg = H1(a.gpt_migration);
    this.xa = 1 == a.livestream;
    this.X = H1(a.forced_ad) && !this.j;
    this.S = 1 == parseInt(a.tpas_ad_type_id, 10);
    this.ob = !!a.fqsf;
    this.o = b;
    this.G = H1(a.invideo) && !this.j;
    this.R = H1(a.mpu) && !this.j;
    this.ib = G(this.Aa, "yt_mabv");
    this.la = H1(a.shortform);
    this.B = H1(a.sffb);
    this.Sl = H1(a.xfp);
    this.Wa = a.xfp_tag;
    this.Pp = OD(this.F, "961401");
    b = ND(this.F, this.A);
    this.ko = (!this.j || b) && !this.S;
    this.C = c;
    this.na = a.ad_language_iso639_2;
    c = parseInt(a.max_dynamic_allocation_ad_tag_length, 10);
    isNaN(c) && (c = 2E3);
    this.maxDynamicAllocationAdTagLength = c;
    this.k = parseInt(a.midroll_freqcap, 10);
    isNaN(this.k) && (this.k = -1);
    this.midrollPrefetchSize = parseInt(a.midroll_prefetch_size, 10) || 0;
    "boolean" == typeof a.show_content_thumbnail && (this.showContentThumbnail = a.show_content_thumbnail);
    this.tagForChildDirected = H1(a.tag_for_child_directed);
    this.serverPrefetchedVast = a.server_prefetched_vast;
    this.surveyCreativeData = a.surveyCreativeData;
    this.ka = d && this.B && !this.H;
    this.Ma = this.H || this.ka;
    this.Xa = parseInt(a.ad_device, 10);
    this.V = a.tpas_video_id;
    this.Ga = a.tpas_partner_id;
    this.vmap = a.vmap;
    this.Va = Y3(this);
    this.Jb = this.F.Jb
};
function Y3(a) {
    if (A(B(a.dynamicAllocationAdTag)))
        return !1;
    if (OD(a.F, "942306") && null != a.F.da && "embedded" != a.F.da)
        return !0;
    var b = (a.o || a.C) && a.M;
    a.B && a.M && (b = b || a.G || a.R);
    if (!b)
        return !1;
    b = a.I || a.K;
    if (!(b || a.B && a.H))
        return !1;
    if (a.serverPrefetchedVast)
        return !0;
    var c = a.dynamicAllocationAdTag.length + 330 + (a.Kg ? 25 : 102);
    window.document.referrer && (c += ya("ref=" + ya(window.document.referrer)).length);
    b || (c += 41);
    return c <= a.maxDynamicAllocationAdTagLength
}
function X3(a) {
    if (A(B(a)))
        return [];
    a = qf(new J(a), "channel");
    return null != a ? a.split("+") : []
}
f.applyFadeOnMidrolls = !1;
f.ko = !0;
f.Pp = !1;
f.oi = !1;
f.Kg = !1;
f.Sl = !1;
f.showContentThumbnail = !0;
function Z3(a) {
    R.call(this);
    this.j = a;
    this.k = 0;
    this.B = {};
    a = a.fa;
    this.C = a.fadeInDurationMilliseconds;
    this.D = a.fadeInStartMilliseconds;
    this.o = a.fadeOutDurationMilliseconds;
    this.A = a.fadeOutStartMilliseconds;
    this.bs()
}
inherit(Z3, R);
f = Z3.prototype;
f.bs = function () {
    this.j.subscribe("beginseeking", this.Th, this)
};
f.Vr = function (a, b) {
    return a.tb && 0 < a.j ? b + this.A + this.o : b
};
f.Ur = function (a, b) {
    return a.tb && -1 != a.j && 2147483646 != b && 2147483647 != b ? b + this.A + this.o : b
};
f.eo = function (a) {
    if (a.tb && 0 < a.j && !(0 >= this.o)) {
        var b = {
            priority: 2,
            id: String(a.getId()),
            style: "ytp-ad-fadeout"
        }, c = H3(a) + this.A, b = new ws(c, c + this.o - 1, b);
        this.B[a.getId()] = b;
        Js(this.j, [b])
    }
};
function $3(a, b) {
    a.B[b] && (Ks(a.j, [a.B[b]]), delete a.B[b])
}
f.ir = function (a) {
    a.tb && 0 < a.j && ($3(this, a.getId()), this.Th())
};
f.Th = function () {
    this.k && (M(this.k), this.k = 0);
    var a = M2(this.j, !1);
    a.volume = Eq(this.j.app) / 100;
    Bg(a, "transition", "");
    Bg(a, "opacity", "1")
};
f.Kr = function (a) {
    var b = H3(a) + this.A + this.o, b = 50 >= 1E3 * this.j.j.getCurrentTime() - b;
    a.tb && 0 < a.j && b && (a = .001 * (H3(a) + this.D), this.j.publish("command_seek", a), 0 >= this.C || (a = M2(this.j, !1), Bg(a, "opacity", "0"), a.volume = 0, L(x(this.Pw, this), 0)))
};
f.Pw = function () {
    var a = M2(this.j, !1);
    Bg(a, "transition", "opacity " + String(this.C) + "ms linear");
    Bg(a, "opacity", "1");
    a4(this, a, this.C, 1)
};
function a4(a, b, c, d) {
    0 >= c || (a.k && M(a.k), c = y() + c, a.k = 0 == d ? nv(x(a.No, a, b, c, 100), 0) : nv(x(a.Mo, a, b, c, 100), 0))
}
f.No = function (a, b, c) {
    if (this.k) {
        var d = Math.max(1, b - y()), d = Math.max(0, a.volume + -1 * a.volume * c / d);
        a.volume = d;
        this.k = 0 < d ? nv(x(this.No, this, a, b, c), c) : 0
    }
};
f.Mo = function (a, b, c) {
    if (this.k) {
        var d = Math.max(1, b - y()), e = Eq(this.j.app) / 100, d = Math.min(e, a.volume + (e - a.volume) * c / d);
        a.volume = d;
        this.k = d < e ? nv(x(this.Mo, this, a, b, c), c) : 0
    }
};
f.L = function () {
    this.Th();
    this.j.unsubscribe("beginseeking", this.Th, this)
};
function b4(a) {
    Z3.call(this, a)
}
inherit(b4, Z3);
f = b4.prototype;
f.bs = v;
f.Vr = function (a, b) {
    return b
};
f.Ur = function (a, b) {
    return b
};
f.eo = v;
f.ir = v;
f.Kr = v;
f.L = v;
function c4(a, b) {
    return b ? new Z3(a) : new b4(a)
}

function d4(a, b, c) {
    R.call(this);
    this.j = a;
    this.C = b;
    this.o = c;
    this.B = this.k = -1;
    this.o && 0 < this.j.fa.k && this.j.subscribe("endseeking", this.A, this)
}
inherit(d4, R);
function e4(a, b) {
    f4(a);
    0 < b && (a.B = L(x(a.A, a), 1E3 * b))
}
function f4(a) {
    -1 != a.B && (M(a.B), a.B = -1)
}
d4.prototype.A = function () {
    var a = this.j.fa.k;
    if (this.o && !(0 >= a)) {
        var b = this.j.j.getCurrentTime(), c = [], d = null, e = Number.MAX_VALUE;
        Ib(this.C.o, function (a) {
            if (a.isVisible && !(0 >= g4(this, a))) {
                var g;
                g = a.getId();
                g = this.C.B[g];
                if (g4(this, a) > b) {
                    var l = !h4(this, a);
                    l != g.visible && (g.visible = l, c.push(g));
                    l || (g = g4(this, a) - b, g < e && (e = g, d = a))
                } else
                    g.visible || (g.visible = !0, c.push(g))
            }
        }, this);
        0 < c.length && i4(this.j, c);
        if (d) {
            var g = 0;
            0 < this.k && (g = y() / 1E3 - this.k);
            e4(this, a - g - e + 2)
        } else
            f4(this)
    }
};
function h4(a, b) {
    if (!a.o || !(0 < b.j) && -1 != b.j)
        return !1;
    var c = a.j.fa.k;
    if (0 >= c || 0 >= a.k)
        return !1;
    var d = y() / 1E3, e = g4(a, b) - a.j.j.getCurrentTime();
    0 < e && (d += e);
    return d - a.k <= c
}
function g4(a, b) {
    return -1 == b.j ? a.j.j.getVideoData().lengthSeconds : b.j
}
d4.prototype.L = function () {
    f4(this)
};
function j4(a, b) {
    R.call(this);
    this.k = b;
    this.C = [];
    this.o = {};
    this.B = {};
    this.j = a;
    var c = a.fa, d = !c.xa && hb(this.k, function (a) {
            return 0 < a.j || -1 == a.j
        });
    this.F = new d4(this.j, this, d);
    c = c.applyFadeOnMidrolls && (c.o || c.C) && hb(this.k, function (a) {
        return 0 < a.j
    });
    this.A = c4(this.j, c);
    this.M = hb(this.k, function (a) {
        return 0 == a.j
    })
}
inherit(j4, R);
f = j4.prototype;
f.zb = null;
function k4(a) {
    a.C.length || (a.C = fb(a.k, function (a) {
        return "unloaded" == a.Gc
    }), 0 == a.C.length ? Ms(a.j) : (a.M || Ms(a.j), l4(a)))
}
function l4(a) {
    if (a.C.length) {
        var b = a.C.shift();
        b.subscribe("adBreakComplete", a.Jf, a);
        k3(b)
    }
}
f.Jf = function (a) {
    a.unsubscribe("adBreakComplete", this.Jf, this);
    L(x(this.Fz, this, a), 0)
};
f.Fz = function (a) {
    var b = db(this.k, a), c = this.k[b + 1], b = this.k[b - 1], d = 2147483646;
    -2 == a.j || -1 == a.j ? d = 2147483647 : c && 2147483647 != c.j && (d = H3(c) - 1);
    0 == a.wa && (M3(this.j, "bl"), J3(a) || M3(this.j, "fb"));
    if (c = "loaded" != a.Gc || 0 == a.wa && J3(a) && c && 1E3 * this.j.j.getCurrentTime() > H3(c)) {
        if (b && I3(b)) {
            var e = H3(b);
            e > d && (d = e);
            m4(this, b);
            n4(this, b, d)
        }
    } else
        this.o[a.getId()] = a, n4(this, a, d);
    Ms(this.j);
    c && this.re(a);
    Mb(this.o) == this.k.length && this.F.A();
    l4(this)
};
function n4(a, b, c) {
    var d = H3(b);
    if (!isNaN(d)) {
        var e = {};
        e.priority = -2 != b.j ? 2 : 3;
        e.id = String(b.getId());
        e.visible = b.isVisible;
        d = a.A.Vr(b, d);
        c = a.A.Ur(b, c);
        c = new ws(d, c, e);
        a.B[b.getId()] = c;
        Js(a.j, [c]);
        a.A.eo(b)
    }
}
function m4(a, b) {
    var c = b.getId();
    a.B[c] && ($3(a.A, c), Ks(a.j, [a.B[c]]), delete a.B[c])
}
f.re = function (a) {
    a.unsubscribe("adBreakComplete", this.Jf, this);
    this.zb && a == this.zb && (this.zb = null);
    m4(this, a);
    pb(this.k, a);
    delete this.o[a.getId()];
    ti(a)
};
f.Yj = function (a) {
    return this.o[a]
};
f.bm = function (a) {
    if (a.tb) {
        if (-1 != a.j && a.Ym) {
            var b = this.j;
            o4(b);
            Ws(b);
            this.A.Kr(a)
        } else
            J3(a) && !a.Ym ? (b = this.j, o4(b), Ws(b)
    ) :
        (o4(this.j), Xs(this.j, !1));
        this.re(a);
        a = this.F;
        a.o && 0 < a.j.fa.k && (a.k = y() / 1E3, a.A())
    } else
        a.isVisible || this.re(a)
};
f.L = function () {
    ti(this.A);
    ti(this.F);
    D(this.k, this.re, this);
    j4.J.L.call(this)
};
function p4(a, b, c) {
    j4.call(this, a, b);
    this.H = [];
    this.I = [];
    this.D = [];
    this.P = c;
    this.G = 0;
    this.K = a.fa.k;
    if (1 <= c)
        for (a = 0; a < b.length; a++)
            if (c = b[a], K3(c)) {
                var d = new G3(c.o, c.wa, c.j, c.B, !0);
                b[a] = d;
                this.H.push(c)
            }
    this.M || this.Kf()
}
inherit(p4, j4);
f = p4.prototype;
f.Yj = function (a) {
    a = p4.J.Yj.call(this, a);
    if (!a)
        return null;
    if (!a.C)
        return a;
    var b;
    b = null;
    if (this.D.length) {
        var c = b = this.D.shift();
        c.j = a.j;
        c.wa = a.getId()
    }
    b && "loaded" == b.Gc ? (a.unsubscribe("adBreakComplete", this.Jf, this), this.o[a.getId()] = b, this.k[this.k.indexOf(a)] = b, ti(a)) : (this.Kf(), b && (ti(b), b = null), this.re(a));
    b && !b.tb && this.Kf();
    return b
};
f.Jf = function (a) {
    0 != a.j || "loaded" == a.Gc && a.tb || this.Kf();
    p4.J.Jf.call(this, a)
};
f.bm = function (a) {
    a.tb && 10 < this.K ? (q4(this), this.G = L(x(this.Kf, this), 1E3 * (this.K - 10))) : this.Kf();
    p4.J.bm.call(this, a)
};
f.Kf = function () {
    for (q4(this); this.H.length && this.I.length + this.D.length < this.P;) {
        var a = this.H.shift();
        a.subscribe("adBreakComplete", this.tq, this);
        this.I.push(a);
        k3(a)
    }
};
f.tq = function (a) {
    a.unsubscribe("adBreakComplete", this.tq, this);
    pb(this.I, a);
    this.D.push(a)
};
f.L = function () {
    q4(this);
    D(this.I, ti);
    D(this.D, ti);
    D(this.H, ti);
    p4.J.L.call(this)
};
function q4(a) {
    a.G && M(a.G);
    a.G = 0
}

function r4(a, b) {
    j4.call(this, a, b);
    this.I = a;
    this.D = [];
    this.O = 1
}
inherit(r4, j4);
r4.prototype.getVideoData = function () {
    return null
};
r4.prototype.K = function (a) {
    this.D.push(a);
    a.unsubscribe("adBreakComplete", this.K, this)
};
r4.prototype.G = function () {
    if (null != this.zb && 0 < this.D.length) {
        var a = this.D.shift();
        delete this.o[a.j];
        var b = Math.floor((new Date).getTime() / 1E3) - this.P;
        this.P = null;
        a.unsubscribe("adBreakComplete", this.G, this);
        this.re(a);
        this.zb = null
    }
    a = this.I;
    o4(a);
    Ws(a);
    isFinite(b) && k1(this.H, this.H.getCurrentTime() + b)
};
function s4(a, b) {
    this.F = a;
    this.$ = b;
    this.D = y();
    this.j = a.fa;
    this.A = {};
    this.C = new t2(a);
    var c = [];
    this.j.S && this.j.o && c.push("4_2");
    this.j.Sl && (this.j.o && c.push("13_2"), this.j.G && c.push("13_1"));
    this.j.M && (this.j.o && c.push("1_2"), this.j.C && c.push("1_2_1"), this.j.G && c.push("1_1"), this.j.R && c.push("1_3"));
    this.j.I && c.push("2_2_1");
    this.j.K && c.push("2_2");
    this.j.H && c.push("2_1");
    (this.j.Ma || this.j.oi) && c.push("2_3");
    this.o = c.join(",");
    this.k = "";
    this.A.allowed = this.o;
    (c = this.j.excludedAds) && (this.A.ex_ads =
        c)
}
s4.prototype.B = 0;
function t4(a) {
    if (!/^\d+?(:\d+){0,2}(\.\d+)?$/.test(a))
        return null;
    var b = 0;
    D(a.split(":"), function (a) {
        b = 60 * b + Math.abs(parseFloat(a))
    });
    return 1E3 * b
}

function u4(a, b, c) {
    R.call(this);
    this.j = a;
    this.o = b;
    this.D = c;
    this.A = this.C = -1;
    this.k = v4(this.o.Be());
    a = this.o.Be();
    a.length && (a = a[a.length - 1], -1 == a && Js(this.j, [this.k[a]]));
    0 < this.j.fa.k && this.j.subscribe("endseeking", this.B, this)
}
inherit(u4, R);
function w4(a, b) {
    x4(a);
    0 < b && (a.A = L(x(a.B, a), 1E3 * b))
}
function x4(a) {
    -1 != a.A && (M(a.A), a.A = -1)
}
function y4(a) {
    a.k || (a.k = v4(a.o.Be()));
    i4(a.j, Pb(a.k))
}
function v4(a) {
    if (!a.length)
        return {};
    for (var b = {}, c = 0; c < a.length - 1; c++) {
        var d = a[c], e;
        e = a[c + 1];
        e = -1 == e ? 2147483647 : 1E3 * e;
        b[d] = new ws(-1 == d ? 2147483647 : 1E3 * d, 2147483647 == e ? e : e - 1, {id: String(d), visible: !0})
    }
    d = a[a.length - 1];
    b[d] = new ws(-1 == d ? 2147483647 : 1E3 * d, 2147483647, {id: String(d), visible: !0});
    return b
}
u4.prototype.B = function () {
    var a = this.j.fa.k;
    if (!(0 >= a) && this.k) {
        var b = this.j.j.getCurrentTime(), c = [], d = null, e = Number.MAX_VALUE;
        D(this.o.Be(), function (a) {
            var g = this.k[a];
            if (g) {
                var l = this.o.H.get(a);
                l && l.ud > b ? (a = !$Y(this.D, l), a
            !=
                g.visible && (g.visible = a, c.push(g)), a || (g = l.ud - b, g < e && (e = g, d = l))
            ) :
                !l || l.ub() ? (Ks(this.j, [g]), delete this.k[a]) : !g.visible && l && (g.visible = !0, c.push(g))
            }
        }, this);
        0 < c.length && i4(this.j, c);
        if (d) {
            var g = 0;
            0 < this.C && (g = y() / 1E3 - this.C);
            w4(this, a - g - e + 2)
        } else
            x4(this)
    }
};
u4.prototype.L = function () {
    u4.J.L.call(this);
    x4(this)
};
function z4(a) {
    R.call(this);
    this.j = a;
    this.A = null;
    this.C = new mn(this);
    this.o = new mn(this)
}
inherit(z4, R);
f = z4.prototype;
f.Ta = null;
f.Xh = null;
f.yb = null;
f.Xb = null;
f.ak = null;
function A4(a, b, c) {
    a = a.cloneNode(!0);
    a.setAttribute("timeOffset", b);
    D(a.getElementsByTagName("VASTAdTagURI"), function (a) {
        var e, g;
        "end" == b ? (e = "post", g = -1): (e = "mid", g = t4(b).toString());
        var h = {"[INDEX]": c.toString(), "[POSITION]": e, "[START]": g};
        a.innerHTML = a.innerHTML.replace(/\[[A-Z_]+\]/g, function (a) {
            return h[a] || a
        })
    });
    return a
}
function B4(a) {
    var b = PB(a), c = b.childNodes[0];
    if (!c)
        return a;
    var d = F(c.childNodes, function (a) {
        return "#1" == a.getAttribute("timeOffset")
    });
    if (d) {
        a = F(d.childNodes, function (a) {
            return "Extensions" == a.localName
        });
        var e = F(a ? a.childNodes : [], function (a) {
            return "YTBreakTime" == a.getAttribute("type")
        });
        a = a.removeChild(e);
        var g = d, h = 1;
        D(a ? a.childNodes : [], function (a) {
            a = a.getAttribute("timeOffset");
            a = A4(d, a, h);
            h++;
            c.insertBefore(a, g.nextSibling);
            g = a
        });
        c.removeChild(d);
        return RB(b)
    }
    return a
}
f.load = function (a) {
    if (this.A = this.j.fg) {
        var b = new kV;
        b.adsResponse = B4(a);
        a = N2(this.j);
        b.linearAdSlotWidth = a.width;
        b.linearAdSlotHeight = a.height;
        b.nonLinearAdSlotWidth = a.width;
        b.nonLinearAdSlotHeight = 100;
        b.j = this.j.T().experiments.experimentIds;
        b.ri = this.j.A.A;
        if (a = JZ(this.j.T()))
            b.lastActivity = a;
        this.j.fa.tagForChildDirected && (b.tagForChildDirectedContent = !0);
        OD(this.j.T(), "937420") && (b.fh = !0);
        a = S3(this.j.fa);
        b.youTubeAdType = L1(a.get(3));
        if (a = this.j.fa.ea)
            b.youTubeExperimentIds = a;
        a = nr(this.j.app);
        var c = this.j;
        b.Kc = {
            "[CONTENT_V]": a.videoId, "[CPN]": a.ya, "[LACT]": {
                toString: function () {
                    return null == c || c.ha() ? c = null : JZ(c.T()).toString()
                }
            }
        };
        this.A.listen("adsManagerLoaded", this.Ot, !1, this);
        this.A.listen("adError", this.Nt, !1, this);
        try {
            mZ(this.A, b, this)
        } catch (d) {
        }
    }
};
function C4(a) {
    var b = new VK;
    b.baseYouTubeUrl = a.j.T().A;
    b.contentId = nr(a.j.app).videoId;
    b.useShareButton = !0;
    b.useStyledNonLinearAds = !0;
    b.useVideoAdUi = a.j.fa.D;
    b.showContentThumbnail = a.j.fa.showContentThumbnail;
    b.Kw = !0;
    return b
}
f.Ot = function (a) {
    if (a.A === this) {
        var b = {};
        Object.defineProperty(b, "currentTime", {
            get: x(function () {
                return this.j.j.getCurrentTime()
            }, this), enumerable: !0
        });
        Object.defineProperty(b, "duration", {
            get: x(function () {
                return this.j.j.getVideoData().lengthSeconds
            }, this), enumerable: !0
        });
        try {
            var c = C4(this);
            this.Ta = G1(a, this.j.A, b, c)
        } catch (d) {
            return
        }
        if (this.ak = this.Ta.Cp(b, this.j.fa.k)) {
            this.Xh = new u4(this.j, this.Ta, this.ak);
            y4(this.Xh);
            G(this.Ta.Be(), 0) || D4(this);
            this.o.listen(this.Ta, "companionBackfill", x(this.IF,
                this));
            this.o.listen(this.Ta, "loaded", x(this.HF, this));
            this.o.listen(this.Ta, "adError", x(this.GF, this));
            this.o.listen(this.Ta, "start", x(this.Kz, this));
            this.o.listen(this.Ta, "complete", x(this.Hz, this));
            this.o.listen(this.Ta, "contentPauseRequested", x(this.JF, this));
            this.o.listen(this.Ta, "contentResumeRequested", x(this.KF, this));
            this.o.listen(this.Ta, "allAdsCompleted", v);
            try {
                this.Ta.init("normal"), this.Ta.start()
            } catch (e) {
                this.Ta.destroy(), this.k = null
            }
        }
    }
};
f.JF = function (a) {
    this.yb && this.yb.dispose();
    (this.Xb = a.getAd()) && IT(this.Xb) && (a = E4(this.Xb), this.j.fa.P ? this.yb = new Q2(a, this.j, this.Ta, KT(this.Xb), !0) : this.yb = new G2(a, this.j, this.Ta, this.Ta.getMediaUrl(), KT(this.Xb), !0), F4(this.j), this.yb.show())
};
function G4(a, b) {
    var c = null != b.j ? b.j.F : {};
    if (K1(c, b3.j) && a.j.fa.oi)
        return a.yb = new m3(a.j), a.yb.show(), !1;
    if (K1(c, "blockAllAds"))
        return a.Ta.sendImpressionUrls(), a.yb = new r3(a.j, a.Ta, !0), !1;
    if (K1(c, "hideMaster"))
        return a.yb = new r3(a.j, a.Ta, !0), !1;
    a.yb = new Z2(E4(b), a.j, a.Ta, !0);
    a.yb.show();
    return !0
}
f.KF = function (a) {
    this.yb && this.yb.dispose();
    D4(this);
    if (this.j.j.getCurrentTime() < this.j.j.getVideoData().lengthSeconds) {
        var b = this.j;
        o4(b);
        Ws(b)
    }
    a = a.getAd();
    b = !0;
    a && a !== this.Xb && !IT(a) && (b = G4(this, a));
    if (this.Xb && IT(this.Xb) || a && a !== this.Xb && !IT(a) && b)
        b = this.ak, 0 < b.j && (b.k = y() / 1E3), b = this.Xh, 0 < b.j.fa.k && (b.C = y() / 1E3, b.B());
    y4(this.Xh);
    this.Xb = a
};
f.Kz = function (a) {
    if ((a = a.getAd()) && this.yb) {
        a = E4(a);
        var b = this.yb;
        b.type = a + "_" + b.I;
        2 == a && P1();
        Q1()
    }
};
f.Hz = function (a) {
    IT(a.getAd()) || this.Xb !== a.getAd() || (this.yb && this.yb.dispose(), this.Xb = null)
};
f.HF = function (a) {
    a.getAd().B.o || IT(a.getAd()) || D4(this)
};
f.GF = function () {
};
f.Nt = function () {
};
f.IF = function () {
    Q1()
};
f.L = function () {
    this.A && (this.A.Da("adsManagerLoaded", this.Ot, !1, this), this.A.Da("adError", this.Nt, !1, this));
    this.C.removeAll();
    this.o.removeAll();
    this.B = !1;
    this.Ta && (this.Ta.destroy(), this.Ta = null);
    z4.J.L.call(this)
};
function E4(a) {
    switch (NT(a).toUpperCase()) {
        case "ADSENSE":
            return 2;
        case "DOUBLECLICK":
            return 1;
        case "FREEWHEEL":
            return 4;
        case "XFP":
            return 13;
        default:
            return 0
    }
}
function D4(a) {
    a.B || (Ms(a.j), a.B = !0)
}

function H4(a) {
    oZ.call(this, a);
    FK.j = !0;
    FK.A = !1;
    FK.C = !0;
    this.A = null;
    this.D = {};
    this.C = {at: "0"};
    this.k = new QD(0, this.j);
    Hr(this.j, this.k.N());
    this.F = this.o = null;
    this.B = -1
}
inherit(H4, oZ);
f = H4.prototype;
f.ua = "ad";
f.sc = "ad";
f.ke = null;
f.$a = null;
f.fa = null;
f.Ll = !1;
f.pl = !1;
f.fg = null;
f.Wf = null;
H4.Ca = function (a) {
    return !!a.mc.getVideoData().adModule
};
f = H4.prototype;
f.Ca = function () {
    return H4.Ca(this.app)
};
f.create = function () {
    H4.J.create.call(this);
    M3(this, "i");
    this.fa = new V3(this.T(), this.j.getVideoData().A || {});
    this.ke = new s4(this, this.j);
    this.Ll = !1;
    if (this.fg)
        this.fg.j.o.C = tQ();
    else {
        var a = this.fa.D ? void 0 : UD(this.k);
        if (this.fa.P) {
            var b = new nZ(this.app, 2), c = RD(this.k);
            b.j || (b.j = $b(b.Mf), b.j.addEventListener = x(b.Nw, b), b.j.removeEventListener = x(b.Ow, b));
            this.A = new hQ(c, void 0, a, b.j)
        } else {
            b = M2(this, !1);
            if (!b)
                throw "initAdsLoader_: getVideoElement returned a null element";
            this.A = new hQ(RD(this.k), b, a,
                void 0)
        }
        a = this.A;
        b = a.k;
        null != b && (b.style.right = 0, b.style.left = 0, b.style.bottom = 0, b.style.top = 0);
        null != a.D && (a = a.D, a.k.width = "100%", a.k.height = "100%");
        this.fg = new lZ(this.A)
    }
    var d;
    t: {
        a = new U3(this);
        b = [];
        try {
            var e = a.j.fa, g;
            if (e.ko) {
                var h;
                if (e.W)
                    h = R3(e.W);
                else {
                    var k;
                    if (e.Ua) {
                        var l = E(e.Ua.split(","), Wa);
                        k = new Q3(l)
                    } else
                        k = new Q3([0]);
                    h = k
                }
                g = h
            } else
                g = new Q3([0]);
            d = g.sw;
            for (e = 0; e < d.length; e++) {
                var p = new G3(a.j, e, d[e], T3(a.j.fa));
                b.push(p)
            }
        } catch (r) {
        } finally {
            d = b;
            break t
        }
    }
    !this.fa.vmap || this.fa.j || this.fa.X ||
    this.fa.Kg || 1 != d.length || 0 != d[0].j ? (M3(this, "bd"), p = this.fa, e = p.midrollPrefetchSize, this.$a = p.xa && p.Pp ? new r4(this, d) : 0 < e ? new p4(this, d, e) : new j4(this, d), k4(this.$a)) : (this.Wf = new z4(this), this.Wf.load(this.fa.vmap));
    d = {};
    d.allowed = this.ke.o;
    Qs(this, {}, d)
};
f.destroy = function () {
    this.pl && o4(this);
    if (this.o) {
        var a = this.app, b = this.o;
        V2(a);
        b != a.k && S2(a, a.k)
    }
    vi(this.$a, this.o, this.Wf);
    this.ke = this.Wf = this.o = this.$a = null;
    SD(this.k);
    O1 = !1;
    this.be && H4.J.destroy.call(this)
};
f.T = function () {
    return this.app.T()
};
f.isFullscreen = function () {
    return this.j.isFullscreen() || this.fa.A
};
function d3(a, b, c) {
    a = a.ke;
    c = c || {};
    var d = (y() - a.D) / 1E3;
    c.art = d;
    d = a.F.T();
    d.O && (c.feature = d.ja);
    c.ad_flags = a.j.adFlags;
    (d = a.j.Ea) && (c.cid = d);
    c.mt = a.$.getCurrentTime();
    (d = tZ()) && (c.lact = d);
    (d = a.$.nh()) && (c.len = d);
    a.j.ob && (c.fqsf = 1);
    c.sdkv = "3";
    c.ad_event = b;
    if (3 == b || 4 == b)
        a.k = c.at;
    b = a.C;
    t: {
        if (7 == c.ad_event && (a = c.ad_error, 21 == a || 30 == a || 54 == a || 32 == a && (1009 == c.error_code || !c.ad_id))) {
            a = !1;
            break t
        }
        a = c && c.ad_event ? w2(c.ad_event) : 0;
        a = 8 == a || 0 != a ? !0 : !1
    }
    if (a) {
        var e;
        c.at && (e = c.at);
        var g;
        c.sst && (g = c.sst);
        "2_1" == e &&
        10 == g && (c.sst = 0);
        e = {};
        e.device = b.j.fa.Xa;
        e.ns = 1;
        e.sdkv = "h.3.0";
        e.ver = "2.0";
        for (var h in c) {
            g = e;
            a = h;
            var d = c[h], k = c;
            switch (a) {
                case "at":
                    g.format = d;
                    k.survey ? g.format += "_3" : k.skip && (g.format += "_1");
                    break;
                case "sst":
                    0 == d ? g.break_type = 1 : -1 == d || -2 == E1 ? g.break_type = 3 : (g.break_type = 2, g.m_pos = d);
                    break;
                case "trsp":
                    g.slot_pos = d;
                    break;
                case "ad_id":
                case "ad_v":
                case "ad_cpn":
                case "ad_sys":
                    g[a] = d;
                    break;
                case "ad_len":
                    g[a] = Math.round(1E3 * d);
                    break;
                case "ad_error":
                    g.error_code = v2(d);
                    break;
                case "error_code":
                    g.ima_error =
                        d;
                case "error_message":
                    g.error_msg = d;
                    break;
                case "ad_event":
                    g.event = w2(d);
                    break;
                case "ck_xy":
                    a = d.split("x"), 2 == a.length && (g.i_x = a[0], g.i_y = a[1])
            }
        }
        g = R2(b.j);
        h = nr(b.j.app);
        e.cpn = h.ya;
        e.content_v = h.videoId;
        c.at && c.at.match(/\d+_2.*/g) ? (c = b.j.$a, e
    .
        mt = null != c && null != c.zb ? 1E3 * c.zb.j : 0
    ) :
        e.mt = Math.round(1E3 * g.getCurrentTime());
        e.ei = h.G;
        e.lact = JZ(b.j.T());
        c = C2(b.j);
        e.p_w = c.width;
        e.p_h = c.height;
        e.rt = (new Date).getTime();
        h = Be(e);
        if ("undefined" == typeof h)
            throw Error("Keys are undefined");
        c = new df(null, 0, void 0);
        g = Ae(e);
        for (a = 0; a < h.length; a++)
            d = h[a], k = g[a], ea(k) ? pf(c, d, k) : c.add(d, k);
        h = b.j.T().A + "api/stats/ads";
        h = new J(h);
        bf(h, c);
        hg(h.toString());
        c = e.event;
        h = -1 != u2.indexOf(c);
        g = b.j.fa.amsBaseTag;
        b = PD(b.j.T(), "932015", "932016");
        h && !A(B(g)) && b && (b = new J(g), h = b.j, h.set("ad_break_id", Zb(e, "m_pos", "0")), h.set("ad_slot_id", Zb(e, "slot_pos", "0")), h.set("ad_break_rel_start_time", Zb(e, "m_pos", "0")), h.set("ad_break_type", Zb(e, "break_type", "")), h.set("rel_time", Zb(e, "mt", "")), h.set("wall_time", Zb(e, "rt", "")), 2 == c && (h.set("served",
            Zb(e, "format", "")), h.set("ad_id", Zb(e, "ad_id", "")), h.set("ad_len", Zb(e, "ad_len", ""))), hg(b.toString()))
    }
}
function c3(a, b, c) {
    c = c || {};
    c.ad_error = b;
    d3(a, 7, c)
}
f.sh = function () {
    var a;
    if (this.ke) {
        a = this.ke;
        var b = {allowed: a.o};
        a.j.excludedAds && (b.ex_ad = a.j.excludedAds);
        a.k && (b.at = a.k);
        a = b
    } else
        a = H4.J.sh.call(this);
    return a
};
f.Ja = function () {
    return this.j.Ja()
};
function I4(a) {
    return a.$a instanceof r4 ? a.$a : null
}
function M2(a, b) {
    var c;
    if (b) {
        c = a.k;
        var d = VD(c);
        c.$.T().C || Yd(d) || RD(c).appendChild(d);
        c = d
    } else
        c = a.k, c = c.$.T().C ? c.$.app.o.j : VD(c);
    return c
}
function R2(a) {
    if (!a.o) {
        var b = $b(a.T().B);
        b.autoplay = "1";
        b = new AZ(b);
        b.da = "adunit";
        var c = M2(a, !1);
        b.wb = c;
        a.o = new S0(b, 2, new pZ(b, ""), a.app.o)
    }
    return a.o
}
f.getVideoData = function () {
    return this.F
};
function C2(a) {
    return a.fa.A ? (a = N2(a), new sg(0, 0, a.width, a.height)
) :
    Wg(a.Ja())
}
function N2(a) {
    return a.app.o.dp()
}
function F4(a) {
    a.pl = !0;
    a.publish("command_redirect_controls", a, ["play_pause"], void 0);
    Ts(a, ["seek"]);
    a.T().Wd && Ts(a, ["audio"]);
    a.Wf || a.pauseVideo()
}
function o4(a) {
    SD(a.k);
    a.pl = !1;
    Vs(a);
    Us(a, ["seek"]);
    a.T().Wd && Us(a, ["audio"])
}
f.getAdState = function () {
    return this.B
};
function O2(a, b) {
    switch (b) {
        case 1:
            a.B = 1;
            a.publish("publish_external_event", "onAdStart");
            break;
        case 0:
            a.B = 0, a.publish("publish_external_event", "onAdEnd")
    }
}
function I2(a, b, c, d) {
    d && a.publish("publish_external_event", "onAdInfoChange", d);
    a.publish("publish_external_event", "onAdStateChange", b, M2(a, !1), c)
}
f.zc = function (a) {
    H4.J.zc.call(this, a);
    var b = parseInt(a.getId(), 10);
    if (this.$a && !isNaN(b))
        if ("ytp-ad-fadeout" == a.style) {
            var c = this.$a, d = c.Yj(b);
            if (d && !h4(c.F, d) && (c = c.A, d.tb)) {
                var e = M2(c.j, !1), d = Math.max(0, H3(d) + c.A + c.o - 1E3 * c.j.j.getCurrentTime());
                Bg(e, "transition", "opacity " + String(d) + "ms linear");
                Bg(e, "opacity", "0");
                a4(c, e, d, 0)
            }
        } else if (d = this.$a, n(b) && (c = d.Yj(b)))
            d.zb == c && !c.tb && c.isVisible ? c.show() : (d.zb && d.re(d.zb), h4(d.F, c) ? (d.zb = null, c = d.B[c.getId()], c.visible || (c.visible = !0, i4(d.j, [c]))) : (d.zb =
                c, c.subscribe("adBreakComplete", d.bm, d), c.tb && F4(d.j), d.A.ir(c), c.show()));
    !isNaN(b) && 0 > b && this.Wf && (b = this.fg.j, d = new gR("contentComplete"), b.U(d), d.A && (b.o.clear(), null != b.k && (d = b.k.se(), null != d && JQ(d, b.o.j))));
    "livead" === a.getId() && null != I4(this) && (b = I4(this), a = a.start, Math.round(a), n(b.o[a]) || (d = b.O++, d = new G3(b.I, d, a, T3(b.I.fa), !1), b.o[a] = d, d.subscribe("adBreakComplete", b.K, b), k3(d)))
};
f.Oc = function (a) {
    H4.J.Oc.call(this, a);
    var b = parseInt(a.getId(), 10), c = 1E3 * this.j.getCurrentTime();
    this.$a && !isNaN(b) && c > a.start && (2147483647 == a.end || 2147483646 == a.end) && (c = this.$a, (b = c.o[b]) && c.zb == b && !b.tb && b.isVisible && b.an && b.k instanceof Z2 && a3(b.k, "fullscreen"));
    "livead" === a.getId() && null != I4(this) && 1E3 * this.j.getCurrentTime() >= a.start && (Ks(this, [a]), a = I4(this), null == a.zb && 0 < a.D.length ? (b = a.D[0], b.isVisible ? (a.P = Math.ceil(y() / 1E3), b.subscribe("adBreakComplete", a.G, a), a.zb = b, b.show()) : a.G()
    ) :
    a.G()
    )
};
function M3(a, b) {
    var c = b;
    "nl" == b && (c = a.ke, c.B++, c = c.B.toString());
    a.D[c] = y();
    "bs" != c && "fb" != c || Qs(a, a.D, a.C)
}
function i4(a, b) {
    a.publish("command_update_cuerange_markers", b, a.j.getPlayerType())
}
function $2(a) {
    return Boolean(a.fa.B && a.$a && 1 < a.$a.k.length)
}
f.Od = function (a) {
    this.publish(a)
};
f.tA = function (a) {
    var b = I4(this);
    if (null != b && null != b.H) {
        var c = I4(this).H.getCurrentTime();
        D(a, function (a) {
            a.Sd - 10 > c && (a = new ws(1E3 * Math.floor(c + Math.random() * (a.Sd - 10 - c)), 1E3 * a.Sd, {
                id: "livead",
                priority: 2
            }), Js(this, [a]))
        }, this)
    }
};
f.cg = function (a) {
    switch (a) {
        case "addata":
            var b = this.fa;
            return {
                adTag: b.adTag,
                adTest: b.nb,
                forceAdType: b.ga,
                isAfvSkippableInstreamEnabled: b.I,
                isAfvStandardInstreamEnabled: b.K,
                isBlazer: b.O,
                isDoubleClickEnabled: b.M,
                isForcedAd: b.X,
                isFreeWheelEnabled: b.S,
                isHouseBrandPlayer: b.Jb,
                isLeanback: b.A,
                isShortform: b.la,
                tagForChildDirected: b.tagForChildDirected
            };
        case "adstate":
            return this.getAdState();
        case "midrollfreqcap":
            return b = this.$a instanceof p4 ? this.$a : null, null != b ? b.K : 0;
        case "breakscount":
            return this.$a ?
                this.$a.k.length : 0;
        case "displaystate":
            return b = null, this.$a && this.$a.zb && (b = this.$a.zb.k), {
                adFormat: b instanceof r2 ? b.I : !1,
                adSkipped: b instanceof Q2 ? b.D : !1,
                hasVideoStarted: b instanceof Q2 ? b.G : !1,
                skippable: b instanceof Q2 ? b.K : !1
            };
        case "getContentVideoData":
            return b = nr(this.app), {
                adModule: b.adModule,
                isGetVideoThirdPartyOnly: b.Ci,
                partnerTrackingToken: b.K,
                title: b.title,
                videoId: b.videoId
            };
        case "loadedadbreaks":
            if (this.$a) {
                a = this.$a.o;
                var c = [];
                for (b in a)
                    a.hasOwnProperty(b) && c.push({isInterruptive: a[Number(b)].tb});
                return c
            }
            return 0
    }
};
f.dg = function () {
    return "addata adstate breakscount displaystate getContentVideoData loadedadbreaks midrollfreqcap".split(" ")
};
function J4(a, b) {
    var c = ["ytp-large-play-button", "html5-center-overlay", "ytp-scalable-icon-shrink"], d;
    b && c.push("ytp-housebrand-large-play-button");
    a ? b ? c.push("ytp-housebrand-large-play-button-image") : c.push("ytp-large-play-button-image") : d = b ? '<svg><path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-housebrand-large-play-button-svg" d="M59.6,1.35c0.267,0.5,0.4,1.133,0.4,1.9v53.5c0,0.767-0.133,1.4-0.4,1.9c-0.5,0.9-1.45,1.35-2.85,1.35H3.25c-1.4,0-2.333-0.433-2.8-1.3C0.15,58.167,0,57.517,0,56.75V3.25c0-0.833,0.167-1.5,0.5-2C1,0.417,1.917,0,3.25,0h53.5C58.15,0,59.1,0.45,59.6,1.35z M21,41.65l22.7-11.8L21,18V41.65z"/><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="21,41.65 21,18 43.7,29.85"/></svg>' :
        '<svg><path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"/><polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"/></svg>';
    Y.call(this, ["div", c]);
    d && (this.element.innerHTML = d)
}
inherit(J4, Y);
function K4(a) {
    this.k = a || 30;
    $D.call(this, this.k, this.k);
    this.A = this.width / 2;
    this.o = this.height / 2;
    this.D = 0;
    this.context.translate(this.A, this.o);
    this.hide()
}
inherit(K4, $D);
K4.prototype.show = function () {
    K4.J.show.call(this);
    var a = this.F;
    this.B = new Date;
    this.C(a, 125)
};
K4.prototype.F = function () {
    this.context.clearRect(-this.A, -this.o, this.width, this.height);
    for (var a = this.D++ % 8, b = 0; 8 > b; b++) {
        var c = 2 * Math.PI / 8 * (a + b), d = 11 / 30 * this.k, e = d * Math.cos(c), c = d * Math.sin(c), d = (b + 1) / 9;
        this.context.beginPath();
        this.context.arc(e, c, 4 / 30 * this.k, 0, 2 * Math.PI, !1);
        this.context.fillStyle = "rgba(189, 189, 189, " + d + ")";
        this.context.fill()
    }
};
K4.prototype.hide = function () {
    M(this.j);
    K4.J.hide.call(this)
};
function L4(a, b, c) {
    GD.call(this, ["div", "html5-remote-module", ["div", "ytp-remote-display-thumbnail"], ["div", "", "{{largeplaybutton}}"], ["div", "ytp-remote-display-controls", ["div", ["ytp-remote-display-error", "html5-center-overlay"], ["div", "ytp-remote-display-error-icon"], ["p", "ytp-remote-display-error-text", "{{error}}"], ["div", "", "{{reconnectbutton}}"]], ["div", "", "{{loadingicon}}"]], ["div", "ytp-remote-display-status", ["div", "ytp-remote-display-status-icon"], ["div", "ytp-remote-display-status-text", "{{statustext}}"],
        ["div", "ytp-remote-display-status-receiver", "{{receiver}}"]]]);
    this.B = c;
    this.A = this.template.j["ytp-remote-display-thumbnail"];
    this.j = this.k = this.o = null;
    M4(this, a, b)
}
inherit(L4, GD);
function N4(a) {
    O4(a, Z(0, "YTP_MDX_STATUS_CONNECTING"));
    P4(a, 2)
}
function Q4(a, b) {
    O4(a, Z(0, "YTP_MDX_STATUS_ERROR"));
    kv(a.template, "error", b);
    P4(a, 0)
}
function P4(a, b) {
    var c = a.template.j["ytp-remote-display-error"], d = a.template.j["ytp-remote-display-status"];
    Ow(c);
    Ow(d);
    a.o.hide();
    a.j.hide();
    a.k.hide();
    switch (b) {
        case 0:
            Nw(d);
            Nw(c);
            break;
        case 1:
            Nw(d);
            break;
        case 2:
            Nw(d);
            a.j.show();
            break;
        case 3:
            a.o.show()
    }
}
function M4(a, b, c) {
    var d = b.j.T();
    a.o = new J4(d.isMobile, d.Jb);
    S(a, a.o);
    a.j = new K4(60);
    N(a.j.element, "html5-video-loader");
    N(a.j.element, "html5-center-overlay");
    N(a.j.element, "ytp-scalable-icon-grow");
    S(a, a.j);
    a.k = new Qz(a.B, "ytp-button-remote-reconnect");
    a.k.ta(Z(0, "YTP_MDX_PLAYER_RECONNECT_BUTTON"));
    S(a, a.k);
    b = b.j.getVideoData();
    a.A.style.backgroundImage = b.videoId ? "url(" + b.Fd("hqdefault.jpg") + ")" : "";
    kv(a.template, "largeplaybutton", a.o);
    kv(a.template, "reconnectbutton", a.k);
    kv(a.template, "loadingicon",
        a.j);
    a.k.listen("click", function () {
        this.publish("reconnect-button-click")
    }, a);
    N4(a);
    kv(a.template, "receiver", c)
}
function O4(a, b) {
    kv(a.template, "statustext", b)
}

function R4(a, b, c) {
    R.call(this);
    this.k = a;
    a.subscribe("onVolumeChange", this.Nq, this);
    this.H = x(this.YA, this);
    a.j.addEventListener("onCaptionsTrackListChanged", this.H);
    this.C = !1;
    this.o = b;
    b.subscribe("reconnect-button-click", this.Vq, this);
    this.j = c;
    c.subscribe("proxyStateChange", this.Xq, this);
    c.subscribe("remotePlayerChange", this.hm, this);
    c.subscribe("remoteQueueChange", this.im, this);
    this.K = new ns;
    this.F = this.D = NaN;
    this.I = 0;
    this.B = {};
    this.G = new jn(this.qD, 1E3, this);
    S(this, this.G);
    this.M = 0;
    this.A = !1;
    a =
        this.k.j.Rj("captions", "track");
    Vb(a) || S4(this, a);
    this.im();
    this.hm()
}
inherit(R4, R);
f = R4.prototype;
f.L = function () {
    T4(this, new ns);
    U4(this);
    V4(this);
    this.k.unsubscribe("onVolumeChange", this.Nq, this);
    this.k.j.removeEventListener("onCaptionsTrackListChanged", this.H);
    ui(this.o) || this.o.unsubscribe("reconnect-button-click", this.Vq, this);
    ui(this.j) || (this.j.unsubscribe("proxyStateChange", this.Xq, this), this.j.unsubscribe("remotePlayerChange", this.hm, this), this.j.unsubscribe("remoteQueueChange", this.im, this));
    W4(this, this.B);
    this.j = this.o = this.k = null
};
f.LF = function (a, b) {
    2 == this.j.o || (X4(this) ? this.Xx.apply(this, arguments) : this.A && this.Sx.apply(this, arguments))
};
function Y4(a, b) {
    a.k.Fj(b, a.k.j.getVideoData().lengthSeconds)
}
f.Sx = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    switch (a) {
        case "control_toggle_play_pause":
        case "control_play":
        case "control_pause":
            Z4(this, this.k.j.getCurrentTime());
            break;
        case "control_seek":
            Z4(this, c[0])
    }
};
f.Xx = function (a, b) {
    if (1081 == ep(this.j).j)
        switch (a) {
            case "control_toggle_play_pause":
            case "control_play":
            case "control_pause":
            case "control_seek":
                return
        }
    var c = Array.prototype.slice.call(arguments, 1);
    switch (a) {
        case "control_toggle_play_pause":
            ep(this.j).ub() ? $4(this) : a5(this);
            break;
        case "control_play":
            a5(this);
            break;
        case "control_pause":
            $4(this);
            break;
        case "control_seek":
            this.M = c[0];
            kn(this.G);
            break;
        case "control_subtitles_set_track":
            S4(this, c[0])
    }
};
f.Nq = function (a) {
    if (X4(this)) {
        var b = Math.round(a.volume);
        a = !!a.muted;
        var c = ep(this.j);
        b == c.volume && a == c.muted || this.j.setVolume(b, a)
    }
};
f.YA = function () {
    Vb(this.B) || W4(this, this.B);
    this.C = !1
};
f.Vq = function () {
    V4(this);
    this.j.A.reconnect();
    N4(this.o);
    this.A = !1
};
f.Xq = function (a, b) {
    V4(this);
    2 == b && this.as()
};
f.hm = function () {
    if (X4(this)) {
        U4(this);
        var a = ep(this.j);
        switch (a.j) {
            case 1:
                b5(this);
                T4(this, new ns(8));
                break;
            case 3:
                T4(this, new ns(1));
                break;
            case 0:
                T4(this, new ns(2));
                this.G.stop();
                var b = this.k.j;
                (b = Qq(b.app, b.playerType || 1)) && b.Rf(!0);
                Y4(this, this.k.j.getVideoData().lengthSeconds);
                break;
            case 2:
                T4(this, new ns(4));
                Y4(this, Yo(a));
                break;
            case -1:
                T4(this, new ns);
                break;
            case -1E3:
                T4(this, new ns(128, {}))
        }
        0 == this.I && (b = this.k.j, (b = Qq(b.app, b.playerType || 1)) && b.Rf(!1));
        this.I = a.j;
        a = ep(this.j).o;
        b = this.B;
        (a ||
        b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.format == b.format && a.kind == b.kind : 1) || (this.B = a, W4(this, a));
        a = ep(this.j);
        -1 == a.volume || Math.round(this.k.j.Ts()) == a.volume && this.k.j.Us() == a.muted || (this.k.j.setVolume(a.volume), a.muted ? this.k.j.Xs() : this.k.j.bt())
    } else
        c5(this)
};
function c5(a) {
    a.A || (Y4(a, 0), U4(a), T4(a, new ns));
    "detailpage" != a.k.app.mc.T().da && (P4(a.o, 3), a.A = !0)
}
f.im = function () {
    X4(this) || c5(this)
};
function S4(a, b) {
    if (X4(a) && !a.C) {
        if (b) {
            var c = {style: a.k.j.Rj("captions", "displaySettings")};
            cc(c, b);
            a.j.Im(d5(a), c)
        } else
            a.j.Im(d5(a), null);
        a.B = ep(a.j).o
    }
}
function $4(a) {
    a.j.pause();
    var b = ep(a.j);
    Y4(a, Yo(b));
    U4(a);
    T4(a, new ns(4))
}
function a5(a) {
    a.j.play();
    b5(a);
    T4(a, new ns(8))
}
function Z4(a, b) {
    var c = a.k.j.rd();
    c ? lp(a.j, d5(a), b, c.Sa, a.k.j.getVideoData().playlistId) : lp(a.j, d5(a), b);
    T4(a, new ns(1))
}
function W4(a, b) {
    if (b) {
        var c = a.k.j.Rj("captions", "tracklist", {Qp: 1});
        c && c.length ? a.k.j.yn("captions", "track", b) : (a.k.j.Vs("captions"), a.C = !0)
    } else
        a.k.j.yn("captions", "track", {})
}
f.qD = function () {
    var a = this.M;
    U4(this);
    Y4(this, a);
    -1 == ep(this.j).j ? Z4(this, a) : this.j.Cs(a);
    T4(this, new ns(1))
};
function X4(a) {
    return Wo(ep(a.j)) == d5(a)
}
function d5(a) {
    return a.k.j.getVideoData().videoId
}
function b5(a) {
    U4(a);
    if (!a.j.ha()) {
        var b = ep(a.j);
        b.ub() && T4(a, new ns(8));
        Y4(a, Yo(b));
        a.D = L(x(function () {
            b5(this)
        }, a), 500)
    }
}
function U4(a) {
    M(a.D);
    a.D = NaN
}
f.as = function () {
    V4(this);
    U4(this);
    var a = this.j.A.getReconnectTimeout();
    if (2 != this.j.o || isNaN(a))
        N4(this.o), this.A = !1;
    else {
        var b = this.o;
        Q4(b, Z(0, "YTP_MDX_PLAYER_RECONNECT_TIME", {FORMATTED_TIME: qv(a / 1E3)}));
        b.k.show();
        this.F = L(x(this.as, this), 1E3)
    }
};
function V4(a) {
    M(a.F);
    a.F = NaN
}
function T4(a, b) {
    V4(a);
    var c = a.K;
    a.K = b;
    var d = a.o;
    O4(d, Z(0, "YTP_MDX_STATUS_CONNECTED"));
    P4(d, 1);
    X(b, 1) && (d = a.o, O4(d, Z(0, "YTP_MDX_STATUS_CONNECTED")), P4(d, 2));
    X(b, 128) && Q4(a.o, Uf("YTP_MDX_PLAYER_ERROR"));
    a.A = !1;
    d = a.k;
    d.S = b;
    Xs(d, X(b, 8));
    d.app.publish("presentingplayerstatechange", new R0(b, c))
}

function e5(a) {
    oZ.call(this, a);
    this.M = a.o.k;
    this.B = {key: Lj(), name: Z(0, "YTP_MDX_MY_COMPUTER")};
    this.A = this.o = null;
    this.H = [];
    this.I = this.K = this.k = null;
    this.R = [this.B];
    this.F = this.B;
    this.D = new jB(this.M, "ytp-remote-button", Z(0, "YTP_MDX_TOOLTIP"), "ytp-remote-button-active");
    S(this, this.D);
    Sz(this.D, 6950);
    this.D.listen("click", this.rF, this);
    this.D.N().id = "remote_button";
    this.C = new zB(this.M, x(this.Xw, this), x(this.BA, this));
    N(this.C.N(), "ytp-drop-down-background");
    S(this, this.C);
    this.G = new Pz;
    this.G.label =
        Z(0, "YTP_MDX_TITLE");
    this.G.element = this.C;
    this.G.o = this.ua;
    S(this, this.G);
    this.C.gb(this.G.label);
    this.S = new ns;
    this.O = 0
}
inherit(e5, oZ);
var f5 = ["play_pause", "seek"], g5 = ["captions"];
f = e5.prototype;
f.ua = "remote";
f.sc = "remote";
f.Ca = function () {
    return this.app.mc.T().pg
};
f.create = function () {
    e5.J.create.call(this);
    this.H.push(Ci("yt-remote-before-disconnect", this.$z, this));
    this.H.push(Ci("yt-remote-connection-change", this.Yq, this));
    this.Yq();
    Zs(this, this.ua, this.D);
    at(this, this.G);
    var a = this.j.app.I;
    this.F && this.F != this.B && 1 != a && 3 != a && this.load()
};
f.destroy = function () {
    Ei(this.H);
    this.H.length = 0;
    ti(this.k);
    this.k = null;
    e5.J.destroy.call(this)
};
f.load = function () {
    if (!this.loaded) {
        e5.J.load.call(this);
        mB(this.D, "ytp-remote-button-active");
        this.A = new L4(this, this.F.name, this.M);
        Hr(this.j, this.A.N());
        this.k && (this.o = new R4(this, this.A, this.k));
        this.j.pauseVideo();
        this.publish("command_redirect_controls", this, f5, g5);
        var a = oq();
        if (0 != a) {
            var b = this.k ? Wo(ep(this.k)) : null;
            b && b != this.j.getVideoData().videoId || L(x(function () {
                this.Fj(a)
            }, this), 0)
        }
    }
};
f.unload = function () {
    this.loaded && (mB(this.D, "ytp-remote-button"), this.C.Ba(this.B), Vs(this), vi(this.o, this.A), this.A = this.o = null, e5.J.unload.call(this))
};
f.L = function () {
    this.destroy();
    vi(this.o, this.A, this.k);
    this.k = this.A = this.o = null;
    e5.J.L.call(this)
};
f.Od = function (a, b) {
    this.o && this.o.LF.apply(this.o, arguments)
};
function or(a, b, c) {
    var d = c || a.B;
    b.unshift(a.B);
    a.R = b || [a.B];
    d = F(b, function (a) {
        return a.key == d.key
    });
    h5(a, b);
    a.C.Ba(d);
    a.F = d || a.B;
    a.A && kv(a.A.template, "receiver", d.name);
    a.publish("publish_external_event", "onMdxReceiversChange")
}
f.Fj = function (a, b) {
    this.O = a || 0;
    e5.J.Fj.call(this, a, b)
};
f.getCurrentTime = function () {
    return this.O
};
f.$z = function (a) {
    1 == a && (this.K = this.k ? ep(this.k) : null);
    this.I = a
};
f.Yq = function () {
    var a = qq();
    a ? (this.k = a, this.I = this.K = null, this.load(), this.o || (this.o = new R4(this, this.A, this.k))) : (ti(this.k), this.k = null, this.loaded && 1 == this.I && (this.unload(), (a = this.K) && Wo(a) == this.j.getVideoData().videoId ? this.j.oh(Yo(a)) : this.j.oh(0)))
};
f.BA = function (a) {
    ct(this);
    a != this.C.getSelected() && (this.C.Ba(a), i5(this, a))
};
function i5(a, b) {
    a.F = b || a.B;
    if (b.key == a.B.key)
        jq();
    else {
        var c = 0, d = "", e = a.j.rd();
        e && (c = e.Sa, d = a.j.getVideoData().playlistId);
        if (e = a.j.rd()) {
            for (var g = [], h = 0; h < e.kc; h++)
                g[h] = ir(e, h).videoId;
            e = g
        } else
            e = [a.j.getVideoData().videoId];
        c = {videoIds: e, listId: d, videoId: a.j.getVideoData().videoId, index: c, currentTime: a.j.getCurrentTime()};
        gq(b, c);
        a.A && kv(a.A.template, "receiver", b.name);
        ti(a.o);
        a.o = null;
        a.load()
    }
}
function h5(a, b) {
    D(b, function (a) {
        a.toString = function () {
            return a.key
        }
    }, a);
    AB(a.C, b)
}
f.rF = function (a) {
    var b = Yp();
    1 == b.length && "cast-selector-receiver" == b[0].key && (a.stopImmediatePropagation(), a.preventDefault(), yl())
};
f.Xw = function (a) {
    return a.name
};
f.cg = function (a, b) {
    switch (a) {
        case "casting":
            return !!this.k && !!this.o;
        case "receivers":
            return this.R;
        case "currentReceiver":
            return b && ("cast-selector-receiver" == b.key ? yl() : i5(this, b)), this.F;
        case "castSelector":
            var c = Yp(), c = 1 == c.length && "cast-selector-receiver" == c[0].key;
            b && c && yl();
            return c
    }
};
f.dg = function () {
    return ["casting", "receivers", "currentReceiver", "castSelector"]
};
function j5(a) {
    this.addEventListener = x(a.addEventListener, a);
    this.removeEventListener = x(a.removeEventListener, a);
    this.dispatchEvent = x(a.dispatchEvent, a)
}
function k5(a, b, c) {
    T.call(this);
    this.D = a;
    this.K = x(b, null);
    this.G = c;
    this.j = 0;
    this.A = new Qc(NaN, NaN);
    b = c ? 4E3 : 3E3;
    this.B = new Jv(pa(this.Fb, 1, !1), b, this);
    S(this, this.B);
    this.C = new Jv(pa(this.Fb, 2, !1), b, this);
    S(this, this.C);
    c || (this.o = Q(a, "mouseover", x(this.Qt, this)), this.H = Q(a, "mousemove", x(this.MF, this)), this.I = Q(a, "mouseleave", x(this.Bz, this)));
    this.F = cd ? Q(a, "keypress", x(this.mz, this)) : Q(a, "focusin", x(this.Sw, this));
    this.k = Q(a, "mousedown", x(this.Pt, this));
    this.Fb(130, !0)
}
inherit(k5, T);
f = k5.prototype;
f.MF = function (a) {
    a = new Qc(yh(a), zh(a));
    Rc(a, this.A) || (this.A = a, this.Fb(2, !0))
};
f.Bz = function () {
    this.Fb(2, !1)
};
f.Qt = function (a) {
    var b = new Qc(yh(a), zh(a));
    Rc(b, this.A) || (this.A = b, this.j & 2 && this.K(a.target) && (this.Fb(4, !0), Eh(this.o), this.o = Q(this.D, "mouseout", x(this.NF, this))))
};
f.NF = function () {
    this.Fb(4, !1);
    Eh(this.o);
    this.o = Q(this.D, "mouseover", x(this.Qt, this))
};
f.mz = function () {
    this.Fb(1, !0)
};
f.Sw = function () {
    this.Fb(1, !0)
};
f.Pt = function () {
    var a = 8;
    this.G && (a |= 2);
    this.Fb(a, !0);
    Eh(this.k);
    this.k = Q(document, "mouseup", x(this.OF, this))
};
f.OF = function () {
    this.Fb(8, !1);
    Eh(this.k);
    this.k = Q(this.D, "mousedown", x(this.Pt, this))
};
f.Fb = function (a, b) {
    var c = !this.j;
    b ? (this.j |= a, a & 1 && this.B.start(), a & 2 && this.C.start()) : (this.j &= ~a, a & 1 && this.B.stop(), a & 2 && this.C.stop());
    var d = !this.j;
    c != d && this.publish("autohideupdate", d)
};
f.L = function () {
    Eh(this.o);
    Eh(this.H);
    Eh(this.I);
    Eh(this.F);
    Eh(this.k);
    k5.J.L.call(this)
};
function l5() {
    this.k = this.j = null
}
function Z(a, b, c) {
    return Uf(b, c, void 0)
}
f = l5.prototype;
f.ig = function (a, b) {
    this.j && this.j.ig(a, b)
};
f.kg = function (a, b, c) {
    this.j && this.j.kg(a, b, c)
};
f.wm = function (a) {
    this.j && this.j.wm(a)
};
f.xb = function () {
    return this.k.xb()
};
f.kb = function () {
    return this.k.kb()
};
function m5(a, b) {
    Y.call(this, ["span", "", "{{sparkline_container}}"]);
    this.o = a;
    this.k = b;
    this.j = new TE("");
    S(this, this.j);
    kv(this.template, "sparkline_container", this.j)
}
inherit(m5, Y);
function n5(a) {
    Y.call(this, ["div", "html5-video-info-panel", ["span", "html5-video-info-panel-close", {
        role: "button",
        title: "close"
    }, "[x]"], ["div", "html5-video-info-panel-content", ["table", "html5-video-info-table", ["tr", "", ["th", "", "Video ID:"], ["td", "", "{{video_id}}"]], ["tr", "", ["th", "", "Dimensions:"], ["td", "", "{{dimensions}}"]], ["tr", "", ["th", "", "Resolution:"], ["td", "", "{{resolution}}"]], ["tr", "", ["th", "", "Volume:"], ["td", "", "{{volume}}"]], ["tr", "", ["th", "", "Stream Type:"], ["td", "", "{{stream_type}}"]],
        ["tr", {style: "{{cpn_style}}"}, ["th", "", "CPN:"], ["td", "", "{{cpn}}"]], ["tr", "", ["th", "", "Mime Type:"], ["td", "", "{{mime}}"]], ["tr", "", ["th", "", "DASH:"], ["td", "", "{{dash}}"]], ["tr", {style: "{{drm_style}}"}, ["th", "", "Protected:"], ["td", "", "{{drm}}"]], ["tr", "", ["th", "", "Bandwidth:"], ["td", "", ["span", "", "{{bandwidth_sparkline}}"], ["span", "", "{{bandwidth_kbps}}"]]]], ["table", ["html5-video-info-table", "html5-video-element-info-table"], ["tr", "", ["th", "", "Decoded Frames"], ["th", "", "Dropped Frames"], ["th", "",
        "Parsed Frames"], ["th", "", "Presented Frames"]], ["tr", "", ["td", "", "{{decoded_frames}}"], ["td", "", "{{dropped_frames}}"], ["td", "", "{{parsed_frames}}"], ["td", "", "{{presented_frames}}"]], ["tr", "", ["th", "", "Video Bytes Decoded"], ["th", "", "Audio Bytes Decoded"], ["th", "", "Painted Frames"], ["th", "", "Paint Delay"]], ["tr", "", ["td", "", "{{video_bytes_decoded}}"], ["td", "", "{{audio_bytes_decoded}}"], ["td", "", "{{painted_frames}}"], ["td", "", "{{paint_delay}}"]]]]]);
    pv(this, this.template.j["html5-video-info-panel-close"],
        "click", this.hide);
    this.k = new m5(200, 14);
    S(this, this.k);
    kv(this.template, "bandwidth_sparkline", this.k);
    this.o = new Jv(this.A, 500, this);
    S(this, this.o);
    this.j = a
}
inherit(n5, Y);
n5.prototype.show = function () {
    n5.J.show.call(this);
    this.A()
};
n5.prototype.hide = function () {
    n5.J.hide.call(this);
    this.o.stop()
};
n5.prototype.A = function () {
    var a = Qq(this.j), b = this.j.getVideoData(), c = this.j.lh(), d = this.j.o.j, e = this.j.T(), g;
    g = this.j;
    if (g.oa) {
        var h = [];
        g.oa.G.forEach(x(h.push, h));
        g = h
    } else
        g = [0];
    var h = (a = a.F ? a.F.j : null) && a.k, k = b.videoId, l = b.ya, p = b.ya ? "" : "display:none", r;
    t: {
        if (b.Ne && (r = b.Ne.match(/url=(https?)/)) && 2 == r.length) {
            r = r[1];
            break t
        }
        r = ""
    }
    c = {
        video_id: k,
        cpn: l,
        cpn_style: p,
        mime: "",
        dash: "no",
        stream_type: r || e.protocol,
        decoded_frames: c.hmewdfc || c.hmemdf || "-",
        dropped_frames: c.hmewdrop || "-",
        parsed_frames: c.hmempf ||
        "-",
        presented_frames: c.hmempresented || "-",
        video_bytes_decoded: c.hmewvdbc || "-",
        audio_bytes_decoded: c.hmewadbc || "-",
        painted_frames: c.hmempainted || "-",
        paint_delay: c.hmempaintdelay || "-",
        dimensions: d.clientWidth + " x " + d.clientHeight + (window.devicePixelRatio ? " * " + window.devicePixelRatio : ""),
        resolution: d.videoWidth + " x " + d.videoHeight,
        volume: Math.round(Eq(this.j)) + "%",
        bandwidth_kbps: (8 * bb(g) / 1024).toFixed(0) + " Kbps",
        drm_style: h ? "" : "display:none",
        drm: h ? a.k + " / " + a.j : ""
    };
    b.o && (d = tt(b.o) ? "yes" : "no", d += " (" +
    b.o.id, b.D && tt(b.o) && (d += "/" + b.D.id), c.dash = d + ")", c.mime = b.o.mimeType, b = b.o.video.fps, 1 < b && (c.resolution += "@" + b));
    d = this.k;
    b = d.j;
    e = Math.max.apply(Math, g) || 1;
    a = [];
    for (h = 0; h < g.length; h++)
        a.push(h / g.length * d.o + "," + d.k * (1 - g[h] / e));
    g = '<svg width="' + d.o + '" height="' + d.k + '" viewbox="0 0 ' + d.o + " " + d.k + '"><g><polyline stroke="white" fill="none" points="' + a.join(" ") + '"/></g></svg>';
    b.element.innerHTML = g;
    this.template.update(c);
    this.o.start()
};
function o5(a) {
    var b = ["div", "html5-video-container"], c = ["div", "html5-video-player", {tabindex: -1, id: a.X.attrs.id}, b];
    b.push(["div", "html5-video-content"]);
    GD.call(this, c);
    oi(this.element, "version", a.X.assets.js);
    this.app = a;
    this.la = null;
    this.o = this.template.j["html5-video-container"];
    this.H = new sg(0, 0, 0, 0);
    this.j = null;
    this.V = new sg(0, 0, 0, 0);
    this.na = this.template.j["html5-video-content"];
    this.xa = this.Va = 0;
    this.X = null;
    this.R = 0;
    this.ka = null;
    b = a.T();
    this.Ma = b.Ea || "blazer" == b.j;
    this.K = new n5(a);
    S(this, this.K);
    this.K.Y(this.element);
    this.k = new l5;
    this.Jm();
    Tf({
        YTP_ADVERTISEMENT: "Advertisement",
        YTP_AUDIO_TRACK_TITLE: "Audio track",
        YTP_AUTO: "Auto",
        YTP_AUTO_WITH_QUALITY_2: "Auto ($VIDEO_QUALITY)",
        YTP_CHANGE_QUALITY_WITH_QUALITY_2: "Change quality ($VIDEO_QUALITY)",
        YTP_COPY_DEBUG_INFO: "Copy debug info",
        YTP_COPY_VIDEO_URL: "Copy video URL",
        YTP_COPY_VIDEO_URL_AT_TIME: "Copy video URL at current time",
        YTP_DRAWER_HEADER_TEXT: "In this video",
        YTP_DRAWER_POLL_SUBMIT: "Submit",
        YTP_GET_DEBUG_INFO: "Get debug info",
        YTP_GET_VIDEO_URL: "Get video URL",
        YTP_GET_VIDEO_URL_AT_TIME: "Get video URL at current time",
        YTP_GET_EMBED: "Get embed code",
        YTP_DECREASE_PLAYBACK_SPEED: "Decrease playback speed",
        YTP_DEFAULT_VIEW: "Default view",
        YTP_EMBED_COPY: "Copy embed code",
        YTP_ERROR_GENERIC: "An error occurred, please try again later.",
        YTP_ERROR_GENERIC_WITH_LINK_2: "An error occurred, please try again later. $BEGIN_LINKLearn More$END_LINK",
        YTP_EXIT_FULLSCREEN: "Exit full screen",
        YTP_FEATURED: "Featured",
        YTP_FULLSCREEN: "Full screen",
        YTP_INCREASE_PLAYBACK_SPEED: "Increase playback speed",
        YTP_GOTO_LIVE_TOOLTIP: "Skip ahead to live broadcast.",
        YTP_KEYBOARD_SHORTCUTS: "Keyboard shortcuts",
        YTP_LIVE: "Live",
        YTP_LIVE_NOW: "LIVE NOW",
        YTP_MIX: "Mix",
        YTP_MORE: "More",
        YTP_MDX_TITLE: "Play on",
        YTP_MDX_TOOLTIP: "Play on TV",
        YTP_MDX_MY_COMPUTER: "This computer",
        YTP_MUTE: "Mute",
        YTP_NEXT: "Next",
        YTP_NEXT_VIDEO_IN: "Next video in $TIME_LEFT",
        YTP_NORMAL_SPEED: "Normal",
        YTP_ON: "On",
        YTP_OFF: "Off",
        YTP_OPTIONS: "Options",
        YTP_PLAY_ALL: "Play all",
        YTP_PLAY_PAUSE: "Toggle play/pause",
        YTP_PREVIOUS: "Previous",
        YTP_PLAYLIST: "Playlist",
        YTP_PLAYLIST_UP_NEXT: "Up Next",
        YTP_QUALITY_TITLE: "Quality",
        YTP_REPLAY: "Replay",
        YTP_REPORT_ISSUE: "Report playback issue",
        YTP_SEEK_BACK: "Seek back 10 seconds",
        YTP_SEEK_FORWARD: "Seek forward 10 seconds",
        YTP_SEEK_PERCENT: "Seek to 0%-90%.",
        YTP_SETTINGS: "Settings",
        YTP_SHARE: "Share",
        YTP_SHARE_WITH_PLAYLIST: "Share with playlist",
        YTP_SHOW_VIDEO_INFO: "Stats for nerds",
        YTP_SPEED_TITLE: "Speed",
        YTP_ST_COLLAPSE: "Collapse",
        YTP_ST_EXPAND: "Expand",
        YTP_SUBTITLES: "Subtitles/CC",
        YTP_THREED_SHORT: "3D",
        YTP_THEATER_MODE: "Theater mode",
        YTP_TOGGLE_FULLSCREEN: "Toggle fullscreen.",
        YTP_TOGGLE_MUTE: "Toggle mute",
        YTP_UNMUTE: "Unmute",
        YTP_URL_NAVIGATE: "Watch on YouTube.com",
        YTP_WATCH_ALL: "Watch entire video",
        YTP_WATCH_LATER: "Watch Later",
        YTP_WATCH_LATER_AS_2: "Watch later as $USER_NAME",
        YTP_WEBGL_3D_ANAGLYPH: "Anaglyph",
        YTP_WEBGL_3D_2D: "2D",
        YTP_SUBSCRIBE_AS: "Subscribe as $USER_NAME",
        YTP_LIKE_AS: "Like as $USER_NAME",
        YTP_DISLIKE_AS: "Dislike as $USER_NAME",
        YTP_WATCH_NEXT: "Watch next",
        YTP_PLAY: "Play",
        YTP_WATERMARK: "Watermark",
        YTP_ERROR_STREAMING_UNAVAILABLE: "Video playback is unavailable right now because this video has been downloaded for offline viewing.",
        YTP_ERROR_LICENSE: "Sorry, there was an error licensing this video.",
        YTP_ERROR_VIDEO_NOT_FOUND: "This video can not be found.",
        YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE: "This video has already been downloaded on the maximum number of devices allowed by the copyright holder. Before you can play the video here, it needs to be unpinned on another device.",
        YTP_ERROR_CANNOT_ACTIVATE_RENTAL: "An error occurred when activating your rental. Please reload this page or try again later.",
        YTP_ERROR_PURCHASE_NOT_FOUND: "This video requires payment.",
        YTP_ERROR_PURCHASE_REFUNDED: "This video's purchase has been refunded.",
        YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK: "Your account is playing this video in another location. Please reload this page to resume watching.",
        YTP_ERROR_TOO_MANY_STREAMS_PER_USER: "Playback stopped because too many videos belonging to the same account are playing.",
        YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT: "Playback stopped because this video has been played on too many devices.",
        YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED: "Too many devices/IP addresses have been used over the 24 hour period.",
        YTP_ERROR_UNUSUAL_ACTIVITY: "Due to unusual account activity, this video is not currently available.",
        YTP_ERROR_NOT_SIGNED_IN: "Please sign in to resume watching.",
        YTP_CLOSE: "Close",
        YTP_ANNOTATIONS: "Annotations",
        YTP_DONE: "Done",
        YTP_SHARE_THIS_PLAYLIST: "Share this playlist",
        YTP_UPLOADED_BY_2: "by $AUTHOR",
        YTP_SEEK_SLIDER: "Seek slider",
        YTP_PAUSE: "Pause",
        YTP_AUTOPLAY: "Autoplay",
        YTP_AUTOPLAY_COUNTDOWN_2: "Next video in $SECONDS_LEFT",
        YTP_AUTOPLAY_PAUSED: "Busy? We've paused autoplay.",
        YTP_AUTOPLAY_PAUSED_2: "Autoplay is paused.",
        YTP_AUTOPLAY_CANCEL: "Cancel autoplay",
        YTP_WATCH_VIDEO_OR_PLAYLIST: "Watch $TITLE",
        YTP_CANCEL: "Cancel",
        YTP_ON_GOOGLE_PLUS: "On Google+",
        YTP_STILL_THERE: "Are you still there? If so, please click the button below to continue watching the playlist.",
        YTP_DISMISS: "OK",
        YTP_RESET: "Reset",
        YTP_STOP: "Stop live playback",
        YTP_LIKE: "Like",
        YTP_DISLIKE: "Dislike",
        YTP_SCREENREADER_VOLUME_SETTING: "volume",
        YTP_SCREENREADER_VOLUME_MUTED: "muted",
        YTP_SCREENREADER_VOLUME_MUTE: "mute",
        YTP_SCREENREADER_VOLUME_UNMUTE: "unmute",
        YTP_SCREENREADER_CONTROL_TOGGLE: "toggle",
        YTP_SAMPLE_SUBTITLES: "Captions look like this",
        YTP_HTML5_CONTEXT_MENU_LINK: "About the HTML5 player",
        YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK: "This video format is not supported.",
        YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK: "Your browser does not currently recognize any of the video formats available. $BEGIN_LINKClick here to visit our frequently asked questions about HTML5 video.$END_LINK",
        YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH: "The Adobe Flash Player is required for video playback. $BEGIN_LINKGet the latest Flash Player$END_LINK.",
        YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED: "The device in the cast session doesn't match the requested one.",
        YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED: "The video in the cast session doesn't match the requested one.",
        YTP_ERROR_CAST_TOKEN_EXPIRED: "Cast session was expired. Please refresh.",
        YTP_ERROR_CAST_TOKEN_FAILED: "Cast session not available. Please refresh or try again later.",
        YTP_ERROR_CAST_TOKEN_MALFORMED: "Invalid cast session. Please refresh or try again later.",
        YTP_ERROR_GEO_FAILURE: "This video isn't available in your country.",
        YTP_ERROR_INVALID_DRM_MESSAGE: "The DRM system specific message is invalid.",
        YTP_ERROR_RENTAL_EXPIRED: "This video's rental has expired.",
        YTP_ERROR_RETRYABLE_ERROR: "There was a temporary server error. Please try again later.",
        YTP_ERROR_SERVER_ERROR: "There was an internal server error. Please try again later.",
        YTP_ERROR_STREAMING_NOT_ALLOWED: "Playback not allowed because this video is pinned on another device.",
        YTP_ERROR_UNSUPPORTED_DEVICE: "Playback isn't supported on this device.",
        YTP_ERROR_VIDEO_FORBIDDEN: "Access to this video is forbidden.",
        YTP_MDX_STATUS_CONNECTED: "Playing on",
        YTP_MDX_STATUS_CONNECTING: "Connecting to",
        YTP_MDX_STATUS_ERROR: "Error on",
        YTP_MDX_PLAYER_ERROR: "This video is not available for remote playback.",
        YTP_MDX_PLAYER_RECONNECT_TIME: "Please check your Internet connection. Retrying in $FORMATTED_TIME...",
        YTP_MDX_PLAYER_RECONNECT_BUTTON: "Reconnect",
        YTP_DEVICE_FALLBACK: "Sorry, this video is not available on this device.",
        YTP_AD_INTERRUPT_MESSAGE: "Your video will play after this ad.",
        YTP_VISIT_ADVERTISERS_SITE: "Visit advertiser's site",
        YTP_PROGRESS_LABEL: "$PLAY_PROGRESS of $DURATION seconds",
        YTP_PLAYLIST_NAME: "Playlist: $PLAYLIST_NAME",
        YTP_PLAYLIST_POSITION: "$CURRENT_POSITION/$PLAYLIST_LENGTH"
    });
    this.lk()
}
inherit(o5, GD);
f = o5.prototype;
f.lk = function () {
    this.app.subscribe("initializingmode", this.ny, this);
    this.app.subscribe("videoplayerreset", this.SF, this);
    this.app.subscribe("videodatachange", this.RF, this);
    this.app.subscribe("presentingplayerstatechange", this.ll, this)
};
f.initialize = function (a) {
    this.la = Ad(a);
    this.Y(this.la)
};
f.ny = function () {
    this.V = new sg(0, 0, 0, 0);
    this.H = new sg(0, 0, 0, 0)
};
f.addClass = function (a) {
    kh(this.element, arguments)
};
f.removeClass = function (a) {
    mh(this.element, arguments)
};
f.Nn = function () {
    var a = this.app.T();
    this.addClass("el-" + a.da);
    this.addClass("ps-" + a.j);
    P(this.element, "html5-native-controls", "3" == a.k);
    P(this.element, "html5-mobile", a.isMobile);
    this.Yg(!0);
    a.C || this.addClass("tag-pool-enabled");
    a.Jb && this.addClass("house-brand");
    this.Ma ? this.X = Q(window, "resize", x(this.Sh, this)) : (a = Pw() ? x(this.kw, this) : x(this.Sh, this),
    this.X = Qf(a, 250)
    )
};
f.Yg = function (a) {
    var b = this.app.T();
    P(this.element, "ytp-no-controls", !a || "0" == b.k)
};
f.kw = function () {
    this.R && Sw(this.R);
    this.R = Rw(x(this.Sh, this), 0)
};
f.Sh = function () {
    Tc(this.kb(), xg(this.H)) || this.Xe()
};
f.Xe = function () {
    if (this.j) {
        var a = this.kb();
        if (!a.isEmpty()) {
            var b = !Tc(a, xg(this.H)), c = p5(this);
            b && (this.H.width = a.width, this.H.height = a.height, this.Dg(a));
            (c || b) && this.publish("resize")
        }
    }
};
f.Dg = function () {
};
f.nl = function () {
};
f.RF = function (a, b) {
    this.bk(b)
};
f.SF = function (a) {
    a.getVideoData() && this.bk(a.getVideoData())
};
f.bk = function (a) {
    if (this.j) {
        var b = this.app.T();
        Yr && (this.j.setAttribute("x-webkit-airplay", "allow"), b.ie && this.j.setAttribute("data-youtube-id", a.videoId), a.title ? this.j.setAttribute("title", a.title) : this.j.removeAttribute("title"));
        b.af && (this.j.poster = a.videoId ? a.Fd("default.jpg") : "")
    }
    b = a.vc("yt:bgcolor");
    this.o.style.backgroundColor = b ? b : "";
    this.Va = OH(a.vc("yt:stretch"));
    a = a.vc("yt:crop");
    this.xa = "fullwidth" == a ? Infinity : OH(a)
};
f.hg = function () {
};
f.Gm = function () {
};
f.xb = function () {
    var a = this.app.T();
    return a.Ea || a.bb ? new H(window.innerWidth, window.innerHeight) : new H(this.element.clientWidth, this.element.clientHeight)
};
f.kb = function () {
    return this.xb()
};
f.dp = function () {
    return this.kb()
};
function mD(a) {
    return a.j ? new H(0 < a.j.style.width.indexOf("px") ? parseInt(a.j.style.width, 10) : a.j.clientWidth, 0 < a.j.style.height.indexOf("px") ? parseInt(a.j.style.height, 10) : a.j.clientHeight) : new H(0, 0)
}
function q5(a) {
    return a.j ? new H(a.j.videoWidth, a.j.videoHeight) : new H(0, 0)
}
function r5(a, b, c, d, e) {
    c.isEmpty() ? d = b : d ? (c = a.Va || s5(c), a = a.xa || c, d = s5(b), d = a > d ? new H(b.width, b.width / (isFinite(a) ? a : c)) : a < d ? new H(b.height * a, b.height) : b.clone(), e
||
    (c > a ? d.width = d.height * c : c < a && (d.height = d.width / c))
) :
    (e = c.clone(), d = e.scale(e.width / e.height > b.width / b.height ? b.width / e.width : b.height / e.height));
    return new sg((b.width - d.width) / 2, (b.height - d.height) / 2, d.width, d.height)
}
function s5(a) {
    return 1 > Math.abs(Gw * a.height - a.width) || 1 > Math.abs(Gw / a.width - a.height) ? Gw : a.width / a.height
}
function t5(a) {
    return "3" != a.app.T().k && !q5(a).isEmpty()
}
function p5(a) {
    var b = q5(a), c = a.kb(), d = 1, e = t5(a), g = !1, h;
    h = (h = Qq(a.app)) && h.getPlayerState();
    !h || X(h, 2) || X(h, 64) ? h = 0 == b.width && 0 == b.height ? new sg(0, -c.height, c.width, c.height) : new sg(0, -b.height, b.width, b.height) : e ? (h = r5(a, c, b, e, !1), d = s5(new H(h.width, h.height)) / s5(b), h = new sg(h.left + h.width / 2 * (1 - 1 / d), h.top, h.width / d, h.height)):h = new sg(0, 0, c.width, c.height);
    vg(a.V, h) || (a.V = h, Rg(a.j, xg(h)), Hg(a.j, new Qc(h.left, h.top)), g = !0);
    b = r5(a, c, b, e);
    vg(a.H, b) || (a.H = b, Rg(a.na, b.width, b.height), Hg(a.na, b.left, b.top),
        g = !0);
    Bg(a.j, "transform", 1 == d ? "none" : "scaleX(" + d + ")");
    return g
}
f.On = function () {
};
f.Jm = function () {
    this.k.k = this
};
f.ll = function () {
    this.Xe()
};
f.L = function () {
    this.X && (this.Ma ? Eh(this.X) : Rf(this.X), this.R && Sw(this.R));
    this.ka && Eh(this.ka);
    this.K.hide();
    this.j = this.o = this.la = null;
    o5.J.L.call(this)
};
function u5(a, b, c) {
    R.call(this);
    this.B = Q(a, "click", x(this.H, this));
    this.C = Q(a, "dblclick", x(this.F, this));
    this.G = b;
    this.o = c;
    this.k = new Jv(this.D, 200, this);
    S(this, this.k);
    this.j = !0;
    this.A = null
}
inherit(u5, R);
u5.prototype.H = function (a) {
    this.k.isActive() ? (this.k.stop(), this.o(a), this.j = !1) : (this.A = a, this.k.start(), this.j = !0)
};
u5.prototype.F = function (a) {
    this.j && this.o(a)
};
u5.prototype.D = function () {
    this.G(this.A);
    this.j = !0
};
u5.prototype.L = function () {
    Eh(this.B);
    Eh(this.C);
    u5.J.L.call(this)
};
var v5 = new H(1720, 980), w5 = new H(1294, 630), x5 = new H(640, 560), y5 = new H(1320, 870), z5 = {
    gk: new H(1280, 720),
    j: new H(960, 540),
    fk: new H(854, 480),
    Zn: new H(640, 360),
    Yn: new H(426, 240)
}, A5 = {gk: new H(1280, 750), j: new H(960, 570), fk: new H(854, 510), Zn: new H(640, 390), Yn: new H(426, 270)};
function B5(a, b) {
    var c = new H(window.innerWidth, window.innerHeight), d = b && !a.experiments.H ? A5 : z5;
    return a.Id ? c.width >= y5.width && c.height >= y5.height ? d.gk.clone() : d.fk.clone() : c.width >= v5.width && c.height >= v5.height ? d.gk.clone() : c.width >= w5.width && c.height >= w5.height ? d.fk.clone() : !a.experiments.V || c.width >= x5.width ? d.Zn.clone() : d.Yn.clone()
}

function C5(a) {
    Y.call(this, ["div", "ytp-action-buttons"]);
    this.shareButton = new Qz(a, "ytp-button-share", Z(0, "YTP_SHARE"));
    S(this, this.shareButton);
    this.shareButton.Y(this.element);
    Sz(this.shareButton, 3400);
    this.j = new Qz(a, "ytp-button-dislike", Z(0, "YTP_DISLIKE"));
    S(this, this.j);
    this.j.Y(this.element);
    Sz(this.j, 3300);
    oi(this.j.N(), "tooltip-below", "1");
    a.kg(this.j.N(), "YTP_DISLIKE_AS", Z(0, "YTP_DISLIKE"));
    this.likeButton = new Qz(a, "ytp-button-like", Z(0, "YTP_LIKE"));
    S(this, this.likeButton);
    this.likeButton.Y(this.element);
    Sz(this.likeButton, 3200);
    oi(this.likeButton.N(), "tooltip-below", "1");
    a.kg(this.likeButton.N(), "YTP_LIKE_AS", Z(0, "YTP_LIKE"))
}
inherit(C5, Y);
function D5(a, b, c) {
    R.call(this);
    this.o = a;
    c || (E5(this, !0), a.hide());
    this.B = b;
    this.j = null;
    this.A = !1;
    this.k = new Jv(this.Wm, 0, this);
    S(this, this.k)
}
inherit(D5, R);
f = D5.prototype;
f.show = function (a, b) {
    this.A = !!a;
    1 == this.j || 2 == this.j || 3 == this.j && a || (4 == this.j || 3 == this.j ? a || (this.o.show(), E5(this, !1), this.j = null, this.k.stop()) : (E5(this, !this.A), this.j = 1, b ? this.k.start(b) : this.Wm()))
};
f.hide = function () {
    3 != this.j && (1 == this.j || 2 == this.j ? (this.o.hide(), this.j = null, this.k.stop()) : (E5(this, !0), this.j = 3, this.k.start(this.B)))
};
f.Wm = function () {
    switch (this.j) {
        case 1:
            this.o.show();
            this.j = 2;
            this.k.start(10);
            break;
        case 2:
            E5(this, this.A);
            this.A ? (this.j = 3, this.k.start(this.B)) : this.j = null;
            break;
        case 3:
            this.o.hide();
            E5(this, !1);
            this.j = 4;
            this.k.start(0);
            break;
        case 4:
            this.j = null
    }
};
function E5(a, b) {
    var c = a.o.N();
    b ? c.setAttribute("aria-hidden", !0) : c.removeAttribute("aria-hidden")
}
f.stop = function () {
    for (; null != this.j && 4 != this.j;)
        this.k.stop(), this.Wm()
};
f.L = function () {
    this.o.ha() || this.o.N().removeAttribute("aria-hidden");
    D5.J.L.call(this)
};
function F5() {
    Y.call(this, ["div", ["html5-bezel", "html5-center-overlay"], ["div", "{{icon}}"]]);
    this.j = new D5(this, 500);
    S(this, this.j)
}
inherit(F5, Y);
function G5(a, b, c, d, e, g) {
    var h, k;
    if (h = c.offsetParent) {
        var l = "HTML" == h.tagName || "BODY" == h.tagName;
        l && "static" == Gg(h, "position") || (k = Ng(h), l || (l = (l = Zg(h)) && cd ? -h.scrollLeft : !l || bd && od("8") || "visible" == Gg(h, "overflowX") ? h.scrollLeft : h.scrollWidth - h.clientWidth - h.scrollLeft, k = Sc(k, new Qc(l, h.scrollTop))))
    }
    h = k || new Qc;
    k = Wg(a);
    (l = Mg(a)) && wg(k, ug(l));
    var l = xd(a), p = xd(c);
    if (l.j != p.j) {
        var r = l.j.body, p = Og(r, ne(p)), p = Sc(p, Ng(r));
        !bd || pd(9) || me(l) || (p = Sc(p, oe(l)));
        k.left += p.x;
        k.top += p.y
    }
    a = H5(a, b);
    b = new Qc(a &
    2 ? k.left + k.width : k.left, a & 1 ? k.top + k.height : k.top);
    b = Sc(b, h);
    e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
    if (e = Mg(c))
        e.top -= h.y, e.right -= h.x, e.bottom -= h.y, e.left -= h.x;
    I5(b, c, d, g, e, 197, void 0)
}
function I5(a, b, c, d, e, g, h) {
    a = a.clone();
    var k = H5(b, c);
    c = Ug(b);
    h = h ? h.clone() : c.clone();
    a = a.clone();
    h = h.clone();
    var l = 0;
    if (d || 0 != k)
        k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
    if (g) {
        if (e) {
            d = a;
            k = h;
            l = 0;
            65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
            132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
            d.x < e.left && g & 1 && (d.x = e.left, l |= 1);
            if (g & 16) {
                var p = d.x;
                d.x < e.left && (d.x = e.left, l |= 4);
                d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, p + k.width - e.left), k.width =
                    Math.max(k.width, 0), l |= 4)
            }
            d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
            g & 2 && (l = l | (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
            d.y < e.top && g & 4 && (d.y = e.top, l |= 2);
            g & 32 && (p = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, p + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
            d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
            g & 8 && (l = l | (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
            e = l
        } else
            e = 256;
        l = e
    }
    e = new sg(0, 0, 0,
        0);
    e.left = a.x;
    e.top = a.y;
    e.width = h.width;
    e.height = h.height;
    l & 496 || (Hg(b, new Qc(e.left, e.top)), h = xg(e), Tc(c, h) || (c = h, e = zd(b), h = me(xd(e)), !bd || od("10") || h && od("8") ? (b = b.style, cd ? b.MozBoxSizing = "border-box" : dd ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px")
:
    (e = b.style, h
    ? (bd ? (h = ah(b, "paddingLeft"), a = ah(b, "paddingRight"), g = ah(b, "paddingTop"), d = ah(b, "paddingBottom"), h = new rg(g, a, d, h)): (h = Fg(b, "paddingLeft"), a = Fg(b, "paddingRight"),
                                                                                                                                                 g = Fg(b, "paddingTop"), d = Fg(b, "paddingBottom"), h = new rg(parseFloat(g), parseFloat(a), parseFloat(d), parseFloat(h))), b = dh(b), e.pixelWidth = c.width - b.left - h.left - h.right - b.right, e.pixelHeight = c.height - b.top - h.top - h.bottom - b.bottom) : (e.pixelWidth = c.width, e.pixelHeight = c.height)
)))
}
function H5(a, b) {
    return (b & 4 && Zg(a) ? b ^ 2 : b) & -5
}

function J5(a) {
    Y.call(this, ["div", ["ytp-dialog", "html5-stop-propagation"], ["div", "ytp-dialog-body", "{{content}}"], ["div", "ytp-dialog-buttons", "{{buttons}}"]]);
    this.j = new Y(["input", "html5-modal-panel-input", {type: "text", readonly: "readonly"}]);
    S(this, this.j);
    ed && this.j.N().removeAttribute("readonly");
    this.j.listen("click", this.o, this);
    var b = Z(0, "YTP_CLOSE");
    this.k = new Qz(a, "ytp-dialog-button", b);
    this.k.ta(b);
    S(this, this.k);
    this.template.update({content: this.j, buttons: this.k});
    this.listen("contextmenu",
        this.A)
}
inherit(J5, oB);
J5.prototype.A = function (a) {
    a.stopPropagation()
};
J5.prototype.o = function () {
    this.j.N().select()
};
function K5(a, b, c) {
    Y.call(this, ["ul", ["html5-context-menu", "yt-uix-button-menu"], ["li", "", ["span", ["yt-uix-button-menu-item", "html5-context-menu-copy-video-url"], Z(0, "YTP_GET_VIDEO_URL")]], ["li", "", ["span", ["yt-uix-button-menu-item", "html5-context-menu-copy-video-url-at-current-time"], Z(0, "YTP_GET_VIDEO_URL_AT_TIME")]], ["li", "", ["span", ["yt-uix-button-menu-item", "html5-context-menu-copy-embed-html"], Z(0, "YTP_GET_EMBED")]], ["li", "", ["span", ["yt-uix-button-menu-item", "html5-context-menu-report-playback-issue"],
        Z(0, "YTP_REPORT_ISSUE")]], ["li", "", ["span", ["yt-uix-button-menu-item", "html5-context-menu-copy-debug-info"], Z(0, "YTP_GET_DEBUG_INFO")]], ["li", "", ["span", ["yt-uix-button-menu-item", "html5-context-menu-show-video-info"], Z(0, "YTP_SHOW_VIDEO_INFO")]], ["li", "", ["a", ["yt-uix-button-menu-item", "html5-context-menu-link"], {
        target: "_blank",
        href: "/html5"
    }, Z(0, "YTP_HTML5_CONTEXT_MENU_LINK")]]]);
    this.$ = a;
    this.$.subscribe("internalvideodatachange", this.St, this);
    this.o = new Hv(this);
    this.o.listen(b, "contextmenu",
        this.rA);
    this.j = new Hv(this);
    this.k = new J5(c);
    S(this, this.k);
    this.k.k.listen("click", this.zy, this);
    a = {
        Eu: this.UF,
        Fu: this.VF,
        Gu: x(this.Rt, this, !1),
        Hu: x(this.Rt, this, !0),
        Ju: this.WF,
        Ku: this.XF,
        Iu: this.SA
    };
    for (var d in a)
        L5(this, d, a[d]);
    this.hide()
}
inherit(K5, Y);
f = K5.prototype;
f.zy = function () {
    this.$.o.hg()
};
function M5(a, b) {
    var c = a.k;
    c.j.N().value = b;
    c.j.N().focus();
    L(x(c.o, c), 100);
    a.$.o.hg(a.k)
}
function L5(a, b, c) {
    a.o.listen(a.template.j[tv[b]], "click", function (a) {
        a.stopImmediatePropagation();
        a.preventDefault();
        c.call(this, a);
        this.hide();
        a = b.replace("CONTEXT_MENU_", "").toLowerCase();
        N5(this.$, "contextmenu." + a)
    })
}
f.St = function (a, b) {
    Lw(this.template.j["html5-context-menu-copy-embed-html"], b.allowEmbed)
};
f.Rt = function (a) {
    M5(this, Zq(this.$, a))
};
f.VF = function () {
    M5(this, ar(this.$))
};
f.SA = function (a) {
    O5(this.$, a.target.getAttribute("href"))
};
f.WF = function () {
    var a = Qq(this.$);
    a && a.Qj(new xq("feedback", !1));
    var a = this.$.T(), b = !0;
    "detailpage" == a.da && (b = t("yt.player.exports.feedbackStart")(void 0, {as3: !1, html5: !0, player: !0}));
    b && (this.$.pauseVideo(), window.open(HZ(a, this.$.getVideoData())))
};
f.UF = function () {
    M5(this, $q(this.$, !0))
};
f.XF = function () {
    this.$.o.K.show()
};
f.rA = function (a) {
    a.preventDefault();
    var b = yh(a);
    a = zh(a);
    var c = Mg(document.body);
    I5(new Qc(b, a), this.element, 0, null, c, 5);
    this.show()
};
f.qA = function (a) {
    !1 === a.Mb.returnValue || this.hide()
};
f.show = function () {
    this.P || (this.j.removeAll(), this.j.listen(window, "blur", this.hide), this.j.listen(document, "click", this.TF), this.j.listen(document, "contextmenu", this.qA), K5.J.show.call(this))
};
f.TF = function (a) {
    2 == a.button || a.target && Zd(this.element, a.target) || this.hide()
};
f.hide = function () {
    K5.J.hide.call(this);
    this.j.removeAll()
};
f.L = function () {
    this.o.removeAll();
    this.j.removeAll();
    this.$.unsubscribe("internalvideodatachange", this.St, this);
    this.$ = null;
    K5.J.L.call(this)
};
function P5() {
    var a = ["button", "ytp-button-share-more", {tabIndex: 3800}, ["div", ["ytp-button-share-more-icon", "yt-uix-button-icon-new-window"]], ["span", "ytp-button-share-more-content", Z(0, "YTP_MORE")]];
    Y.call(this, a)
}
inherit(P5, Y);
function Q5(a, b, c, d) {
    Qz.call(this, a, "share-service-icon-" + d + "-sharebar", b, c);
    N(this.element, "share-service-icon-sharebar");
    Sz(this, 3700)
}
inherit(Q5, Qz);
function R5() {
    Y.call(this, ["div", "ytp-share-url-container", {tabIndex: 3600}, ["input", "ytp-share-url"]]);
    this.j = this.template.j["ytp-share-url"]
}
inherit(R5, Y);
R5.prototype.focus = function () {
    this.j.focus();
    this.j.select()
};
R5.prototype.L = function () {
    this.j = null;
    R5.J.L.call(this)
};
function S5(a, b) {
    var c = ["div", "share-bar", ["div", "share-bar-content"], ["div", "share-bar-playlist", ["input", ["ytp-share-bar-checkbox", "ytp-share-bar-checked"], {
        type: "checkbox",
        checked: "checked"
    }], ["div", "share-bar-playlist-message", Z(0, "YTP_SHARE_WITH_PLAYLIST")]]];
    GD.call(this, c);
    this.Z = b;
    this.A = a;
    this.shareUrl = null;
    this.o = [];
    this.k = this.j = null;
    this.closeButton = new Qz(this.A, "yt-uix-button-icon-share-bar-close", Z(0, "YTP_CLOSE"), Z(0, "YTP_CLOSE"));
    this.closeButton.Y(this.template.j["share-bar-content"]);
    Sz(this.closeButton, 3900)
}
inherit(S5, GD);
function T5(a) {
    var b = {action_get_share_info: 1, feature: "player_embedded", video_id: a.k ? a.k.videoId : void 0};
    a.Z.Za && (b.authuser = a.Z.Za);
    a.Z.pageId && (b.pageid = a.Z.pageId);
    var c;
    U5(a) ? (c = Dd("ytp-share-bar-checkbox"), c = !c || jh(c, "ytp-share-bar-checked")):c = !1;
    c && (b.list = U5(a));
    Bj("/share_ajax", {context: a, method: "GET", onError: a.C, fb: a.D, Vf: b})
}
S5.prototype.D = function (a, b) {
    if (!this.ha()) {
        V5(this);
        var c = this.template.j["share-bar-content"];
        this.shareUrl = new R5;
        S(this, this.shareUrl);
        Ed(this.shareUrl.j, {value: b.url_short});
        this.shareUrl.Y(c);
        for (var d = b.links, e = 0; e < Math.min(3, d.length); e++) {
            var g = new Q5(this.A, d[e].name, d[e].sname, d[e].img);
            S(this, g);
            g.Y(c);
            g.listen("click", pa(vF, d[e].url, {}));
            this.o.push(g)
        }
        this.j = new P5;
        S(this, this.j);
        this.j.listen("click", x(this.F, this, b.more));
        this.j.Y(c);
        pv(this, this.template.j["ytp-share-bar-checkbox"],
            "click", this.B, this);
        this.publish("menu_show")
    }
};
S5.prototype.C = function () {
};
S5.prototype.F = function (a) {
    uF(a)
};
function U5(a) {
    return a.k ? a.k.playlistId : void 0
}
S5.prototype.B = function () {
    var a = Dd("ytp-share-bar-checkbox");
    nh(a, "ytp-share-bar-checked");
    T5(this)
};
function V5(a) {
    a.shareUrl && (a.shareUrl.detach(), a.shareUrl = null);
    a.j && (a.j.detach(), a.j = null);
    D(a.o, function (a) {
        Sd(a.N())
    });
    a.o = []
}

function W5(a, b) {
    var c = ["div", "html5-info-bar", ["div", "html5-title", ["div", ["html5-like-dislike-buttons", "hid"]], ["a", "html5-title-logo", {
        tabIndex: 3550,
        href: "{{logolink}}",
        "aria-label": Z(0, "YTP_URL_NAVIGATE")
    }, "YouTube"], ["div", "html5-title-text-wrapper", ["a", "html5-title-text", {
        tabIndex: 3100,
        href: "{{titlelink}}"
    }, "{{titletext}}"]]]];
    GD.call(this, c);
    this.Z = b;
    this.B = a;
    this.k = null;
    pv(this, this.template.j["html5-title-text"], "click", this.nr);
    c = this.template.j["html5-title-logo"];
    oi(c, "tooltip", Z(0, "YTP_URL_NAVIGATE"));
    oi(c, "tooltip-below", "1");
    a.ig(c);
    pv(this, c, "click", this.nr);
    c = this.template.j["html5-title"];
    this.actionButtons = new C5(this.B);
    S(this, this.actionButtons);
    this.actionButtons.Y(c, 1);
    this.actionButtons.shareButton.listen("click", this.Um, this);
    this.j = null
}
inherit(W5, GD);
f = W5.prototype;
f.update = function (a) {
    this.k = a;
    if (this.j) {
        var b = this.j;
        b.k = a;
        T5(b)
    }
    b = a.title || "";
    a = this.Z.getVideoUrl(a);
    this.template.update({titletext: b, titlelink: a, logolink: a})
};
f.nr = function (a) {
    sv(a) && (this.mr(), a.preventDefault())
};
f.mr = function () {
    this.Wt()
};
function X5(a) {
    return jh(a.element, "show-share")
}
f.Um = function () {
    Y5(this, !X5(this))
};
function Y5(a, b) {
    if (b && !a.j) {
        a.j = new S5(a.B, a.Z);
        var c = a.j;
        c.k = a.k;
        T5(c);
        a.j.Y(a.template.j["html5-info-bar"]);
        a.j.closeButton.listen("click", a.Um, a);
        a.j.subscribe("menu_show", x(a.gr, a))
    }
    P(a.element, "show-share", b);
    P(a.element, "share-with-playlist", b && !!U5(a.j));
    a.gr()
}
f.gr = function () {
    X5(this) && this.j.shareUrl && this.j.shareUrl.N().focus()
};
f.Vt = function (a) {
    uF(a)
};
f.Wt = function () {
    this.Vt(this.Z.getVideoUrl(this.k))
};
f.L = function () {
    this.k = this.Z = null;
    W5.J.L.call(this)
};
function Z5(a, b) {
    W5.call(this, a, b.T());
    this.$ = b;
    this.A = 2;
    this.o = !1;
    this.actionButtons.likeButton.listen("click", this.RA, this);
    this.actionButtons.j.listen("click", this.yA, this)
}
inherit(Z5, W5);
f = Z5.prototype;
f.update = function (a) {
    Z5.J.update.call(this, a);
    $5(this, a.Cm);
    a = !(!a || !a.zs || this.$.A);
    var b = !this.$.T().wj;
    P(this.element, "ytp-can-share", b);
    P(this.element, "ytp-can-sentiment", a)
};
f.Um = function () {
    this.publish("share-click")
};
f.mr = function () {
    this.publish("title-click")
};
f.RA = function () {
    a6(this, 0)
};
f.yA = function () {
    a6(this, 1)
};
function a6(a, b) {
    if (!a.o && (a.A == b && (b = 2), $5(a, b), a.k)) {
        if ("detailpage" != a.Z.da) {
            a.o = !0;
            var c = {
                playbackId: a.k.playbackId, fb: x(function () {
                    this.o = !1
                }, a), onError: x(function () {
                    this.o = !1
                }, a), Za: a.Z.Za, pageId: a.Z.pageId
            };
            iI(a.k.videoId, b, c)
        }
        a.$.publish("RATE_SENTIMENT", {videoId: a.k.videoId, sentiment: b})
    }
}
function $5(a, b) {
    a.A = b;
    P(a.element, "sentiment-like", 0 == b);
    P(a.element, "sentiment-dislike", 1 == b)
}
f.Vt = function (a) {
    O5(this.$, a)
};
f.Wt = function () {
    b6(this.$)
};
f.L = function () {
    this.$ = null;
    Z5.J.L.call(this)
};
function c6(a) {
    var b = ["div", ["ytp-dialog", "html5-stop-propagation"], {tabindex: 1E3}, ["div", "ytp-dialog-title", Z(0, "YTP_KEYBOARD_SHORTCUTS")], ["div", "ytp-dialog-body", "{{content}}"], ["div", "ytp-dialog-buttons", "{{buttons}}"]];
    Y.call(this, b);
    b = Z(0, "YTP_DONE");
    this.j = new Qz(a, "ytp-dialog-button", b);
    this.j.ta(b);
    S(this, this.j);
    Sz(this.j, 1400);
    this.j.listen("click", this.k, this);
    this.template.update({content: d6(), buttons: this.j})
}
inherit(c6, oB);
function d6() {
    var a = [{key: "K", message: Z(0, "YTP_PLAY_PAUSE")}, {key: "J", message: Z(0, "YTP_SEEK_BACK")}, {
        key: "L",
        message: Z(0, "YTP_SEEK_FORWARD")
    }, {key: "0-9", message: Z(0, "YTP_SEEK_PERCENT")}, {
        key: ">",
        message: Z(0, "YTP_INCREASE_PLAYBACK_SPEED")
    }, {key: "<", message: Z(0, "YTP_DECREASE_PLAYBACK_SPEED")}, {
        key: "F",
        message: Z(0, "YTP_TOGGLE_FULLSCREEN")
    }, {key: "M", message: Z(0, "YTP_TOGGLE_MUTE")}], b = [];
    D(a, function (a) {
        a = new Y(["p", null, a.key + ": " + a.message]);
        b.push(a)
    });
    return b
}
c6.prototype.k = function () {
    this.Vb("done")
};
c6.prototype.focus = function () {
    this.element.focus()
};
function e6(a, b, c, d, e, g, h, k) {
    this.B = [];
    D(Hb(b), function (b) {
        this.B.push(Q(a, b, x(this.MB, this)))
    }, this);
    D(Hb(d), function (b) {
        this.B.push(Q(a, b, x(this.CA, this)))
    }, this);
    this.C = g || null;
    this.H = c;
    this.G = h || 0;
    this.o = 0;
    this.A = !1;
    this.F = e;
    this.D = k || 0;
    this.j = 0;
    this.k = !1
}
f = e6.prototype;
f.MB = function (a) {
    M(this.j);
    this.j = 0;
    this.o = L(x(this.Rw, this, a), this.G)
};
f.CA = function (a) {
    M(this.o);
    this.o = 0;
    this.j = L(x(this.Qw, this, a), this.D)
};
f.Rw = function (a) {
    this.k || this.A || (this.A = !0, this.H.call(this.C || m, a))
};
f.Qw = function (a) {
    !this.k && this.A && (this.A = !1, this.F.call(this.C || m, a))
};
f.dispose = function () {
    this.k = !0;
    M(this.o);
    M(this.j);
    Eh(this.B)
};
f.ha = function () {
    return this.k
};
function f6() {
    Y.call(this, ["div", "ytp-tooltip", ["div", "ytp-tooltip-body", "{{content}}"], ["div", "ytp-tooltip-arrow"]]);
    this.j = this.template.j["ytp-tooltip-body"]
}
inherit(f6, Y);
f6.prototype.hide = function () {
    f6.J.hide.call(this);
    Hg(this.j, 0)
};
f6.prototype.L = function () {
    Rd(this.j);
    this.j = null;
    f6.J.L.call(this)
};
function g6(a, b) {
    R.call(this);
    this.j = {};
    this.Qn = a;
    this.k = b
}
inherit(g6, R);
g6.prototype.ig = function (a, b) {
    var c, d = new e6(a, "mouseover", function () {
        if (this.Qn) {
            var d = new f6;
            d.Y(this.Qn);
            c = d
        } else
            c = null;
        if (c && (d = b && b(a), !b || d)) {
            d = d || qi(a, "tooltip") || "";
            if (w(d)) {
                var g = Od(d), d = Nd("span");
                d.className = "ytp-text-tooltip";
                d.appendChild(g)
            }
            kv(c.template, "content", d);
            var g = !!qi(a, "tooltip-below"), d = c, h = Ug(a), h = new Qc(h.width / 2, g ? h.height : 0), k = Ng(a), h = new Qc(k.x + h.x, k.y + h.y), g = !!g;
            P(d.element, "ytp-tooltip-below", g);
            if (k = Lg(d.element))
                var l = Ng(k), p = dh(k), h = Sc(h, new Qc(l.x + p.left, l.y +
                p.top));
            I5(h, d.element, g ? 1 : 0);
            d.show();
            var p = Ug(d.j), g = p.width / 2 * -1, r = Gd(window), u = Hd(document), h = u.x, r = r.width + u.x, u = h, C = r;
            k && (k = Ug(k), u = l.x, C = k.width + l.x);
            k = Ng(d.j);
            l = k.x + g;
            k = k.x + p.width + g;
            l < Math.max(h, u) ? g -= l - Math.max(h, u) : k > Math.min(r, C) && (g -= k - Math.min(r, C));
            Hg(d.j, g)
        }
    }, ["mouseout", "mousedown"], function () {
        c && (c.hide(), ti(c), c = null)
    }, this, 10, 50);
    this.j[ka(a)] = d
};
g6.prototype.kg = function (a, b, c) {
    var d = this.k;
    this.ig(a, function () {
        if (d) {
            var a = "detailpage" == d.da;
            if (!d.ka || a)
                return c
        } else
            return c;
        var g = d.ka, h = d.X, a = Nd("div");
        N(a, "ytp-identity-tooltip");
        var k = Nd("img");
        k.src = h;
        h = Nd("span");
        g = Od(Uf(b, {USER_NAME: g}));
        Qd(h, g);
        Qd(a, k, h);
        return a
    })
};
g6.prototype.wm = function (a) {
    a = ka(a);
    ti(this.j[a]);
    this.j[a] = null
};
g6.prototype.L = function () {
    this.k = this.Qn = null;
    for (var a in this.j)
        ti(this.j[a]);
    this.j = {};
    g6.J.L.call(this)
};
function h6() {
    this.j = [];
    this.k = []
}
ba(h6);
var XD = t("yt.player.utils.VideoTagPool.instance_") || h6.getInstance();
q("yt.player.utils.VideoTagPool.instance_", XD, void 0);
f = h6.prototype;
f.Ro = function (a) {
    if (!(this.j.length >= a)) {
        a -= this.j.length;
        for (var b = 0; b < a; b++) {
            var c = i6(this);
            this.j.push(c)
        }
    }
};
function i6(a, b) {
    var c = document.createElement("video");
    qa(c, es);
    Q(c, "loadeddata", x(c.zw, c));
    Q(c, "volumechange", x(c.Bw, c));
    Qh && 6 <= Tr && Q(c, "webkitbeginfullscreen", x(c.play, c));
    b || fs(c);
    a.k.push(c);
    return c
}
f.FG = function (a) {
    return this.j.length ? this.j.pop() : i6(this, a)
};
f.OC = function (a) {
    a && G(this.k, a) && (ls(a), Hh(a), pb(this.k, a))
};
f.mp = function (a) {
    return this.j.length >= (a || 1)
};
f.iw = function () {
    this.j = [];
    this.mp(4) ? D(this.k, function (a) {
        fs(a);
        this.j.push(a)
    }, this) : this.Ro(4)
};
h6.prototype.fillPool = h6.prototype.Ro;
h6.prototype.getTag = h6.prototype.FG;
h6.prototype.releaseTag = h6.prototype.OC;
h6.prototype.hasTags = h6.prototype.mp;
h6.prototype.activateTags = h6.prototype.iw;
function j6(a) {
    Y.call(this, ["div", "ytp-dialog-holder", "{{content}}"]);
    this.k = a;
    this.j = null
}
inherit(j6, Y);
j6.prototype.show = function () {
    j6.J.show.call(this);
    k6(this);
    this.j.focus()
};
j6.prototype.hide = function () {
    j6.J.hide.call(this);
    var a = Yd(this.element);
    a && a.focus()
};
function k6(a) {
    if (a.j) {
        a.j.Ut();
        var b = a.k.xb(), c = Tg(a.j.N());
        a = a.j;
        b = new Qc(Math.floor((b.width - c.width) / 2), Math.floor((b.height - c.height) / 2));
        a.N().style.marginLeft = b.x + "px";
        a.N().style.marginTop = b.y + "px"
    }
}
j6.prototype.L = function () {
    this.j = null;
    j6.J.L.call(this)
};
function l6(a, b) {
    $D.call(this, a, b);
    this.D = null;
    this.F = this.G = this.o = this.k = 0;
    this.A = -75;
    N(this.element, "ytp-tv-static");
    m6(this, a, b)
}
inherit(l6, $D);
function n6(a) {
    for (var b = Math.floor(.6 * a), c = b; c < a; ++c) {
        for (var d = !1, e = 2; e < Math.sqrt(c); e++) {
            if (!(c % e)) {
                d = !1;
                break
            }
            d = !0
        }
        if (d)
            return c
    }
    return b
}
function m6(a, b, c) {
    if (b && c) {
        a.width = a.element.width = b;
        a.height = a.element.height = c;
        var d = document.createElement("canvas");
        d.width = b;
        d.height = c;
        for (var e = d.getContext("2d"), g = e.getImageData(0, 0, b, c), h = b * c, k = 0; k < h; k++) {
            var l = 4 * k;
            g.data[l] = g.data[l + 1] = g.data[l + 2] = Math.floor(35 * Math.random());
            g.data[l + 3] = 255
        }
        e.putImageData(g, 0, 0);
        a.D = d;
        a.G = n6(b);
        a.F = n6(c / 10);
        a.context.scale(1.5, 1.5);
        a.context.fillStyle = "rgba(255, 255, 255, 0.02)"
    }
}
l6.prototype.show = function () {
    l6.J.show.call(this);
    var a = this.H;
    this.B = new Date;
    this.C(a, 75)
};
l6.prototype.H = function () {
    var a = 1 - 1 / 1.5;
    this.k = (this.k + this.G) % (this.width * a);
    this.o = (this.o + this.F) % (this.height * a);
    this.context.drawImage(this.D, -1 * this.k, -1 * this.o);
    this.context.fillRect(0, this.A, this.width, 75);
    this.A = (this.A + 75 + 7) % this.height - 75
};
l6.prototype.hide = function () {
    M(this.j);
    l6.J.hide.call(this)
};
function o6(a) {
    var b = ["ytp-error"];
    b.push("html5-stop-propagation");
    Y.call(this, ["div", b, ["div", "ytp-error-content", ["div", "ytp-error-content-wrap", "{{content}}"]]]);
    this.ea = "table";
    this.o = a;
    this.k = [];
    void 0 == Xt && (a = document.createElement("canvas"), Xt = !(!a.getContext || !a.getContext("2d")));
    Xt && (this.j = new l6(1, 1), this.j.Y(this.element, 0), S(this, this.j))
}
inherit(o6, Y);
o6.prototype.show = function () {
    o6.J.show.call(this);
    p6(this);
    this.j && this.j.show()
};
o6.prototype.hide = function () {
    o6.J.hide.call(this);
    this.j && this.j.hide()
};
function p6(a) {
    var b, c;
    a.j && (c = a.element.clientWidth, b = a.element.clientHeight, m6(a.j, c, b))
}
o6.prototype.A = function (a) {
    var b = t("yt.player.exports.feedbackShowArticle"), c = {
        as3: !1,
        html5: !0,
        player: !0,
        cpn: this.o.getVideoData().ya
    };
    b(3037019, "player_error", c) || (a = a || window.event, a.returnValue = !1, a.preventDefault && a.preventDefault())
};
o6.prototype.L = function () {
    Eh(this.k);
    this.k = [];
    o6.J.L.call(this)
};
function q6(a) {
    GD.call(this, ["div", "html5-storyboard", ["div", "html5-storyboard-filmstrip", ["img", "html5-storyboard-thumbnail", {src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}]], ["div", "html5-storyboard-lens", ["img", "html5-storyboard-lens-thumbnail", {src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}], ["div", "ytp-storyboard-lens-timestamp-wrapper", ["span", "html5-storyboard-lens-timestamp"]]]]);
    this.V = !1;
    this.O = new jn(this.sz,
        250, this);
    S(this, this.O);
    this.A = 0;
    this.A = a;
    this.o = this.template.j["html5-storyboard-filmstrip"];
    this.X = this.template.j["html5-storyboard-lens"];
    this.W = this.template.j["html5-storyboard-lens-thumbnail"];
    this.ba = this.template.j["html5-storyboard-lens-timestamp"];
    this.K = this.template.j["html5-storyboard-thumbnail"];
    Sd(this.K);
    this.C = 0;
    this.F = new T1(0, 0);
    this.R = !1;
    this.I = this.H = 0;
    this.M = 10;
    this.G = this.D = this.j = 0;
    this.B = this.k = null;
    this.hide()
}
inherit(q6, GD);
q6.k = 12;
q6.j = 20;
q6.o = 10;
q6.A = 72;
f = q6.prototype;
f.lw = function () {
    for (var a = this.o.cloneNode(!0), b = this.k.j[0].Dn(), c, d, e = this.k.j[0].jt(); e <= b; e++)
        d = this.K.cloneNode(!1), c = pI(this.B, e, this.j), b2(d, c, this.j, this.D), a.appendChild(d);
    Td(a, this.o);
    this.o = a
};
f.rs = function (a, b) {
    Yg(this.o, !1);
    for (var c, d, e = a; e <= b; e++)
        if (d = this.o.children[e])
            c = pI(this.B, e, this.j), b2(d, c, this.j, this.D);
    Yg(this.o, !0)
};
function r6(a, b) {
    if (b != a.G) {
        var c = pI(a.B, b, 2 * a.j), d = Math.round(2 * a.j), e = Math.round(2 * a.D);
        b2(a.W, c, d, e);
        a.G = b
    }
}
f.sz = function () {
    for (var a = this.H, b = Math.max(Math.floor(a / this.j), 0), a = Math.min(Math.ceil((a + this.A) / this.j), this.k.j[0].tf() - 1); b <= a; b++)
        qI(this.B, b, 2 * this.j)
};
function s6(a, b) {
    a.M = Math.min(q6.o, Math.ceil(a.A / q6.A));
    a.j = Math.floor(a.A / a.M);
    a.D = .555 * a.j;
    a.I = a.j * a.k.j[0].tf();
    Sg(a.o, a.I);
    var c = Math.round(2 * a.j), d;
    d = .555 * c + q6.k;
    Rg(a.X, c, d);
    Hg(a.X, (a.A - c) / 2);
    c = d + q6.j;
    a.N().style.height = Ig(c, !0);
    b && (a.rs(0, a.k.j[0].tf() - 1), r6(a, a.G), a.V = !0)
}
f.show = function () {
    this.k && q6.J.show.call(this)
};
f.L = function () {
    this.B = this.k = null;
    Sw(this.C);
    q6.J.L.call(this)
};
function t6(a) {
    Y.call(this, ["div", "html5-storyboard-framepreview", ["img", "html5-storyboard-framepreview-img", {src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}]]);
    this.D = this.template.j["html5-storyboard-framepreview-img"];
    this.C = a;
    this.j = this.C.kb();
    this.o = this.k = null;
    this.A = 0;
    this.B = new T1(0, 0);
    this.hide()
}
inherit(t6, Y);
function u6(a) {
    var b = pI(a.o, a.A, a.j.width);
    b2(a.D, b, a.j.width, a.j.height);
    qI(a.o, a.A, a.j.width)
}
t6.prototype.show = function () {
    this.k && t6.J.show.call(this)
};
function v6(a, b, c) {
    Y.call(this, ["div", ["ytp-thumbnail", "html5-stop-propagation"]]);
    this.o = a;
    this.j = null;
    c && (this.j = new J4(a, b), S(this, this.j), this.j.Y(this.element))
}
inherit(v6, Y);
v6.prototype.k = function (a) {
    for (var b, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (!(!d || d instanceof vr && !d.videoId)) {
            if (!this.o) {
                var e = this.element.clientWidth, g = this.element.clientHeight;
                if (900 < e || 600 < g)
                    if (b = d.Fd("maxresdefault.jpg"))
                        break;
                if (430 < e || 320 < g)
                    if (b = d.Fd("sddefault.jpg") || d.Fd("hqdefault.jpg"))
                        break
            }
            if (b = d.Fd("default.jpg"))
                break
        }
    }
    this.element.style.backgroundImage = b ? "url(" + b + ")" : ""
};
function w6() {
    mx.call(this);
    this.j = {}
}
inherit(w6, mx);
ba(w6);
f = w6.prototype;
f.Wh = "tooltip";
f.Fi = 0;
f.register = function () {
    ox(this, "mouseover", this.oq);
    ox(this, "mouseout", this.Li);
    ox(this, "click", this.Li);
    ox(this, "touchstart", this.tD);
    ox(this, "touchend", this.ks);
    ox(this, "touchcancel", this.ks)
};
f.dispose = function () {
    for (var a in this.j)
        this.Li(this.j[a]);
    this.j = {}
};
f.oq = function (a) {
    if (!(this.Fi && 1E3 > y() - this.Fi)) {
        var b = parseInt(qi(a, "tooltip-hide-timer"), 10);
        b && (this.removeData(a, "tooltip-hide-timer"), M(b));
        var b = x(function () {
            x6(this, a);
            this.removeData(a, "tooltip-show-timer")
        }, this), c = parseInt(qi(a, "tooltip-show-delay"), 10) || 0, b = L(b, c);
        oi(a, "tooltip-show-timer", b.toString());
        a.title && (px(a, y6(a)), a.title = "");
        b = ka(a).toString();
        this.j[b] = a
    }
};
f.Li = function (a) {
    var b = parseInt(qi(a, "tooltip-show-timer"), 10);
    b && (M(b), this.removeData(a, "tooltip-show-timer"));
    b = x(function () {
        z6(this, a);
        this.removeData(a, "tooltip-hide-timer")
    }, this);
    b = L(b, 50);
    oi(a, "tooltip-hide-timer", b.toString());
    if (b = qi(a, "tooltip-text"))
        a.title = b;
    b = ka(a).toString();
    delete this.j[b]
};
f.tD = function (a, b, c) {
    this.Fi = 0;
    a = kx(b, nx(this), c.changedTouches[0].target);
    this.oq(a)
};
f.ks = function (a, b, c) {
    this.Fi = y();
    a = kx(b, nx(this), c.changedTouches[0].target);
    this.Li(a)
};
function A6(a, b) {
    px(a, b);
    var c = qi(a, "content-id");
    (c = Ad(c)) && ae(c, b)
}
function y6(a) {
    return qi(a, "tooltip-text") || a.title
}
function x6(a, b) {
    if (b) {
        var c = y6(b);
        if (c) {
            var d = Ad(B6(a, b));
            if (!d) {
                d = document.createElement("div");
                d.id = B6(a, b);
                d.className = nx(a, "tip");
                var e = document.createElement("div");
                e.className = nx(a, "tip-body");
                var g = document.createElement("div");
                g.className = nx(a, "tip-arrow");
                var h = document.createElement("div");
                h.className = nx(a, "tip-content");
                var k = C6(a, b), l = B6(a, b, "content");
                h.id = l;
                oi(b, "content-id", l);
                e.appendChild(h);
                k && d.appendChild(k);
                d.appendChild(e);
                d.appendChild(g);
                (Kh() || document.body).appendChild(d);
                A6(b, c);
                (c = parseInt(qi(b, "tooltip-max-width"), 10)) && e.offsetWidth > c && (e.style.width = c + "px", N(h, nx(a, "normal-wrap")));
                h = jh(b, nx(a, "reverse"));
                D6(a, b, d, e, k, h) || D6(a, b, d, e, k, !h);
                var p = nx(a, "tip-visible");
                L(function () {
                    N(d, p)
                }, 0)
            }
        }
    }
}
function D6(a, b, c, d, e, g) {
    P(c, nx(a, "tip-reverse"), g);
    a = 0;
    g && (a = 1);
    var h = Ug(b);
    g = new Qc((h.width - 10) / 2, g ? h.height : 0);
    var k = Ng(b);
    I5(new Qc(k.x + g.x, k.y + g.y), c, a);
    var k = Gd(window), l = Qg(c);
    c = Ug(d);
    var p = Math.floor(c.width / 2);
    a = !!(k.height < l.y + h.height);
    h = !!(l.y < h.height);
    g = !!(l.x < p);
    k = !!(k.width < l.x + p);
    l = (c.width + 3) / -2 - -5;
    b = qi(b, "force-tooltip-direction");
    if ("left" == b || g)
        l = -5;
    else if ("right" == b || k)
        l = 20 - c.width - 3;
    b = Math.floor(l) + "px";
    d.style.left = b;
    e && (e.style.left = b, e.style.height = c.height + "px", e.style.width =
        c.width + "px");
    return !(a || h)
}
function z6(a, b) {
    if (b) {
        var c = Ad(B6(a, b));
        c && (E6(c), Sd(c), a.removeData(b, "content-id"))
    }
}
function B6(a, b, c) {
    a = nx(a) + ph(b);
    c && (a += "-" + c);
    return a
}
function C6(a, b) {
    var c = null;
    gd && jh(b, nx(a, "masked")) && ((c = Ad("yt-uix-tooltip-shared-mask")) ? (c.parentNode.removeChild(c), Nw(c)) : (c = document.createElement("iframe"), c.src = 'javascript:""', c.id = "yt-uix-tooltip-shared-mask", c.className = nx(a, "tip-mask")
))
    ;
    return c
}
function E6(a) {
    var b = Ad("yt-uix-tooltip-shared-mask"), c = b && le(b, function (b) {
            return b == a
        }, !1, 2);
    b && c && (b.parentNode.removeChild(b), Ow(b), document.body.appendChild(b))
}

function F6(a, b) {
    mh(a, ["html5-async-progress", "html5-async-success", "html5-async-error"]);
    b && N(a, b);
    z6(w6.getInstance(), a)
}

function G6(a) {
    Pz.call(this);
    this.k = null;
    this.j = new zB(a, x(this.C, this), x(this.D, this));
    S(this, this.j);
    this.label = Z(0, "YTP_AUDIO_TRACK_TITLE");
    this.element = new uB(a, void 0, this.j);
    S(this, this.element);
    wB(this.element, 100);
    this.element.gb(this.label);
    this.priority = 0;
    this.A = !0
}
inherit(G6, Pz);
function H6(a, b) {
    a.k != b && (a.k = b, a.j.Ba(b), a.element.Qd(a.C(b)))
}
G6.prototype.C = function (a) {
    return a.name
};
G6.prototype.D = function (a) {
    this.element.ce();
    H6(this, a);
    this.element.Vb("change")
};
function I6(a) {
    Pz.call(this);
    this.label = Z(0, "YTP_AUTOPLAY");
    this.element = new Tz(a, [Z(0, "YTP_OFF"), Z(0, "YTP_ON")]);
    S(this, this.element);
    this.element.gb(this.label);
    Vz(this.element, 2050);
    this.priority = 4;
    this.Ba(0)
}
inherit(I6, Pz);
I6.prototype.getSelected = function () {
    return this.element.getSelected()
};
I6.prototype.Ba = function (a) {
    this.element.Ba(a)
};
function J6(a) {
    Qz.call(this, a);
    Sz(this, 6900);
    K6(this)
}
inherit(J6, Qz);
function K6(a) {
    Rz(a, "ytp-button-fullscreen-enter");
    var b = Z(0, "YTP_FULLSCREEN");
    a.gb(b);
    a.o = b
}

function L6(a, b, c) {
    Y.call(this, ["div", "ytp-menu-container", {
        tabIndex: -1,
        role: "menu",
        "aria-labelledby": b
    }, ["div", "ytp-menu", ["div", "ytp-menu-content", "{{content}}"]]]);
    this.A = a;
    this.o = c || !1;
    this.j = [];
    this.k = []
}
inherit(L6, Y);
f = L6.prototype;
f.add = function (a) {
    for (var b = this.j.length, c = 0; c < this.j.length; c++) {
        if (this.j[c] == a)
            return;
        if (c < b && this.j[c].priority < a.priority) {
            b = c;
            break
        }
    }
    vb(this.j, b, 0, a);
    M6(this)
};
f.remove = function (a) {
    pb(this.j, a);
    M6(this)
};
function M6(a) {
    vi(a.k);
    a.k = [];
    var b, c, d = [], e = 1 == a.j.length || a.o;
    e && a.j.length && (c = new Y(["div", "ytp-menu-row", ["div", "ytp-menu-cell", a.j[0].label]]), d.push(c));
    var g = !1;
    for (b = 0; b < a.j.length; b++)
        g = g || a.j[b].B;
    var h = g ? ["ytp-menu-cell", "ytp-menu-cell-span"] : "ytp-menu-cell";
    for (b = 0; b < a.j.length; b++) {
        var k = a.j[b];
        c = k.A;
        c = e ? !g || c ? new Y(["div", "ytp-menu-row", ["div", h, "{{content}}"]]) : new Y(["div", "ytp-menu-row", ["div", "ytp-menu-cell", "{{content}}"], ["div", "ytp-menu-cell", "{{more}}"]]) : !g || k.A ? new Y(["div",
            "ytp-menu-row", ["div", ["ytp-menu-cell", "ytp-menu-title"], k.label], ["div", h, "{{content}}"]]) : new Y(["div", "ytp-menu-row", ["div", ["ytp-menu-cell", "ytp-menu-title"], k.label], ["div", "ytp-menu-cell", "{{content}}"], ["div", "ytp-menu-cell", "{{more}}"]]);
        c.ta(k.element);
        c.ta(N6(a, k), "more");
        d.push(c)
    }
    a.ta(d)
}
function N6(a, b) {
    if (b.B) {
        var c = Z(0, "YTP_OPTIONS"), d = new Qz(a.A, "ytp-menu-more-options", c);
        Sz(d, 2700);
        d.ta(c);
        a.k.push(d);
        d.listen("click", b.G, b);
        return d
    }
    return null
}
f.focus = function () {
    this.N().focus()
};
f.Mi = function () {
    return this.j.length
};
f.L = function () {
    this.j = [];
    M6(this);
    L6.J.L.call(this)
};
function O6(a) {
    Qz.call(this, a, "ytp-button-next", Z(0, "YTP_NEXT"), Z(0, "YTP_NEXT"));
    Sz(this, 6051)
}
inherit(O6, Qz);
function P6(a) {
    Qz.call(this, a);
    Sz(this, 6E3);
    Q6(this)
}
inherit(P6, Qz);
function Q6(a) {
    Rz(a, "ytp-button-play");
    var b = Z(0, "YTP_PLAY");
    a.gb(b)
}

function R6(a) {
    Qz.call(this, a, "ytp-button-prev", Z(0, "YTP_PREVIOUS"), Z(0, "YTP_PREVIOUS"));
    Sz(this, 6050)
}
inherit(R6, Qz);
function S6(a) {
    Pz.call(this);
    this.D = this.F = "unknown";
    this.H = {};
    this.label = Z(0, "YTP_QUALITY_TITLE");
    this.k = new zB(a, x(this.C, this), x(this.I, this), !0);
    S(this, this.k);
    this.j = NaN;
    this.element = new uB(a, void 0, this.k);
    S(this, this.element);
    wB(this.element, 100);
    this.element.gb(this.label);
    this.priority = -1;
    this.A = !0
}
inherit(S6, Pz);
S6.prototype.Wk = function () {
    return this.F
};
function T6(a, b, c) {
    a.F = b;
    a.D = c;
    a.k.Ba(c);
    var d = a.k;
    null != d.j && yB(BB(d, d.j), !1);
    null != b && yB(BB(d, b), !0);
    d.j = b;
    "auto" == c && c != b ? (b = Z(0, "YTP_AUTO_WITH_QUALITY_2", {VIDEO_QUALITY: U6(a, b)}), b = new TE(b)):b = a.C(b);
    isNaN(a.j) || (Pw() ? Sw(a.j) : M(a.j));
    Pw() ? a.j = Rw(x(a.element.Qd, a.element, b), 0) : a.j = L(x(a.element.Qd, a.element, b), 0)
}
function U6(a, b) {
    var c = Dt[b], c = c ? c + "p" : Uf("YTP_AUTO"), d = a.H[b];
    return d && 30 < d ? c + d.toString() : c
}
S6.prototype.C = function (a) {
    var b = ["span", "", U6(this, a)], c;
    "highres" == a ? c = "8K" : "hd2880" == a ? c = "5K" : "hd2160" == a ? c = "4K" : 0 == a.indexOf("hd") && (c = "HD");
    c && (b.push(" "), b.push(["sup", "", c]));
    return new fv(b)
};
S6.prototype.I = function (a) {
    this.element.ce();
    if ("auto" != this.D || "auto" != a)
        T6(this, a, a), this.element.Vb("change")
};
S6.prototype.L = function () {
    Pw() ? Sw(this.j) : M(this.j);
    S6.J.L.call(this)
};
function V6(a) {
    jB.call(this, a, "ytp-size-toggle-large", Z(0, "YTP_THEATER_MODE"), "ytp-size-toggle-small", Z(0, "YTP_DEFAULT_VIEW"));
    Sz(this, 6800)
}
inherit(V6, jB);
V6.prototype.update = function () {
    V6.J.update.call(this);
    this.element.removeAttribute("aria-pressed")
};
function W6(a) {
    Pz.call(this);
    this.k = 2;
    this.label = Z(0, "YTP_SPEED_TITLE");
    this.j = new zB(a, x(this.C, this), x(this.D, this));
    S(this, this.j);
    this.element = new uB(a, void 0, this.j);
    S(this, this.element);
    wB(this.element, 100);
    this.element.gb(this.label);
    X6(this, this.k);
    this.priority = 1;
    this.A = !0
}
inherit(W6, Pz);
function X6(a, b) {
    a.k = b;
    a.j.Ba(b);
    a.element.Qd(a.C(b))
}
W6.prototype.C = function (a) {
    return 1 == a ? Z(0, "YTP_NORMAL_SPEED") : a.toString()
};
W6.prototype.D = function (a) {
    this.element.ce();
    X6(this, a);
    this.element.Vb("change")
};
function Y6() {
    Y.call(this, ["div", ["ytp-time-display", "html5-control"], {"aria-hidden": "true"}, ["span", "ytp-time-current", "{{current}}"], ["span", "ytp-time-separator", " / "], ["span", "ytp-time-duration", "{{duration}}"], ["span", "ytp-time-live-badge", "Live"]]);
    this.liveBadge = this.template.j["ytp-time-live-badge"]
}
inherit(Y6, Y);
Y6.prototype.Qf = function (a) {
    kv(this.template, "duration", qv(a))
};
function Z6(a, b, c) {
    P(a.element, "ytp-time-liveonly", b && !c);
    P(a.element, "ytp-time-live", b && c)
}
Y6.prototype.L = function () {
    this.liveBadge = null;
    Y6.J.L.call(this)
};
function $6(a, b) {
    this.C = a;
    Y.call(this, ["div", "ytp-volume-control", ["div", "ytp-volume-panel", {
        role: "slider",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": "{{valuenow}}",
        "aria-valuetext": "{{valuetext}}",
        tabindex: 6200
    }, ["div", "ytp-volume-slider", ["div", "ytp-volume-slider-foreground"]]]]);
    this.j = new Qz(this.C, "ytp-button-volume", Z(0, "YTP_BUTTON_VOLUME"));
    S(this, this.j);
    this.j.Y(this.element, 0);
    Sz(this.j, 6100);
    this.A = this.template.j["ytp-volume-panel"];
    this.o = this.template.j["ytp-volume-slider"];
    this.B = this.template.j["ytp-volume-slider-foreground"];
    this.k = b
}
inherit($6, Y);
$6.prototype.gb = function (a) {
    this.j.gb(a)
};
$6.prototype.setVolume = function (a, b) {
    var c = Z(0, b ? "YTP_UNMUTE" : "YTP_MUTE");
    this.j.o = c;
    var c = Math.round(a), d = c + "% " + Z(0, "YTP_SCREENREADER_VOLUME_SETTING") + (b ? " " + Z(0, "YTP_SCREENREADER_VOLUME_MUTED") : "");
    this.gb(Z(0, b ? "YTP_SCREENREADER_VOLUME_UNMUTE" : "YTP_SCREENREADER_VOLUME_MUTE") + " " + Z(0, "YTP_SCREENREADER_CONTROL_TOGGLE"));
    kv(this.template, "valuenow", c);
    kv(this.template, "valuetext", d);
    c = "max";
    b || 0 == a ? c = "off" : 20 > a ? c = "min" : 40 > a ? c = "quiet" : 60 > a ? c = "normal" : 80 > a && (c = "loud");
    oi(this.j.N(), "value", c);
    c = (this.k ?
        85 : 54) - (this.k ? 7 : 5);
    d = b ? 0 : a;
    0 >= d ? c = 0 : 100 <= d || (d = (c - 0) * d / 100, c = 0 >= d ? 0 : d >= c ? c : 0 + Math.round(d));
    this.B.style.left = c + "px"
};
function a7(a, b) {
    GD.call(this, ["div", "html5-video-controls"]);
    this.xa = a;
    this.oa = new Hv(this);
    this.D = {};
    this.B = null;
    this.W = new Hv(this);
    this.la = -1;
    this.ka = null;
    this.ga = new f2(a, b);
    S(this, this.ga);
    this.ga.Y(this.element);
    var c = new fv(["div", "html5-player-chrome"]);
    S(this, c);
    c.Y(this.element);
    c = c.N();
    this.ja = this.R = !1;
    this.X = new R6(a);
    S(this, this.X);
    this.X.listen("click", pa(this.publish, "previousvideo"), this);
    this.X.Y(c);
    this.A = new P6(a);
    S(this, this.A);
    this.A.Y(c);
    this.A.listen("click", this.GC, this);
    this.ba = new O6(a);
    S(this, this.ba);
    this.ba.listen("click", pa(this.publish, "nextvideo"), this);
    this.ba.Y(c);
    var d = new fv(["span", "ytp-volume-hover-area"]);
    S(this, d);
    d.Y(c);
    this.j = new $6(a, b);
    S(this, this.j);
    this.j.Y(d.N());
    this.j.j.listen("click", this.sD, this);
    this.V = new X1(this.j.o, !0);
    S(this, this.V);
    this.V.subscribe("dragstart", this.wC, this);
    this.V.subscribe("dragmove", this.vC, this);
    this.V.subscribe("dragend", this.uC, this);
    this.C = new Y6;
    S(this, this.C);
    this.C.Y(d.N());
    this.oa.listen(this.C.liveBadge,
        "click", pa(this.publish, "seekto", Infinity));
    this.va = new X1(this.j.N());
    S(this, this.va);
    this.va.subscribe("hoverstart", this.AG, this);
    this.pa = new X1(d.N());
    S(this, this.pa);
    this.pa.subscribe("hoverend", this.zG, this);
    this.H = new J6(a);
    S(this, this.H);
    this.H.Y(c);
    this.H.listen("click", this.SB, this);
    this.o = new V6(a);
    S(this, this.o);
    this.o.hide();
    this.o.Y(c);
    this.o.listen("click", this.KB, this);
    this.G = new Qz(a, "ytp-button-watch-on-youtube", Z(0, "YTP_URL_NAVIGATE"), Z(0, "YTP_URL_NAVIGATE"));
    S(this, this.G);
    Sz(this.G,
        6700);
    this.G.Y(c);
    this.G.listen("click", this.BC, this);
    this.I = new IB(a);
    S(this, this.I);
    b7(this, "__default__", this.I, this.G.N());
    this.na = new Qz(a, "ytp-button-playlist", Z(0, "YTP_PLAYLIST"), Z(0, "YTP_PLAYLIST"));
    Sz(this.na, 6400);
    this.na.Y(c);
    S(this, this.na);
    this.k = new Qz(a, "ytp-button-watch-later", Z(0, "YTP_WATCH_LATER"));
    a.kg(this.k.N(), "YTP_WATCH_LATER_AS_2", Z(0, "YTP_WATCH_LATER"));
    this.k.Y(c);
    Sz(this.k, 6300);
    this.k.gb(Z(0, "YTP_WATCH_LATER"));
    S(this, this.k);
    this.k.listen("click", this.zC, this);
    this.F =
        new S6(a);
    S(this, this.F);
    this.F.listen("change", this.rB, this);
    this.M = new W6(a);
    S(this, this.M);
    this.M.listen("change", this.LB, this);
    this.K = new G6(a);
    S(this, this.K);
    this.K.listen("change", this.Vz, this);
    this.O = new I6(a);
    S(this, this.O);
    this.O.listen("change", this.Yz, this)
}
inherit(a7, GD);
f = a7.prototype;
f.Tu = "__default__";
f.Wl = !1;
f.disable = function (a) {
    c7(this, a, !0)
};
f.enable = function (a) {
    c7(this, a, !1)
};
function c7(a, b, c) {
    for (var d = 0; d < b.length; d++)
        switch (b[d]) {
            case "audio":
                P(a.element, "disabled-control-audio", c);
                break;
            case "play_pause":
                var e = a.A;
                c ? e.disable() : e.enable();
                break;
            case "seek":
                P(a.element, "disabled-control-seek", c)
        }
}
f.setVolume = function (a, b) {
    if (this.la != a || this.ka != b)
        this.j.setVolume(a, b), this.la = a, this.ka = b
};
f.Qf = function (a) {
    this.C.Qf(a)
};
f.sD = function () {
    this.publish("mutetoggled")
};
function d7(a, b) {
    if (b) {
        if (a.Wl) {
            var c = a.A;
            Rz(c, "ytp-button-stop");
            var d = Z(0, "YTP_STOP")
        } else
            c = a.A, Rz(c, "ytp-button-pause"), d = Z(0, "YTP_PAUSE");
        c.gb(d)
    } else
        Q6(a.A)
}
function e7(a) {
    var b = a.ba;
    a.R || a.ja ? b.show() : b.hide();
    b = a.X;
    a.R ? b.show() : b.hide()
}
f.GC = function () {
    this.publish("playpausetoggled")
};
f.AG = function () {
    N(this.j.N(), "ytp-volume-control-hover")
};
f.zG = function () {
    lh(this.j.N(), "ytp-volume-control-hover")
};
f.wC = function () {
    N(this.j.N(), "ytp-volume-slider-active");
    this.publish("volumechangestart")
};
f.vC = function (a) {
    a = (a - Ng(this.j.o).x) / (this.j.k ? 85 : 54) * 100;
    a = {volume: Pc(a, 0, 100), muted: !1};
    this.publish("volumechanged", a)
};
f.uC = function () {
    lh(this.j.N(), "ytp-volume-slider-active");
    this.publish("volumechangeend");
    this.j.A.blur()
};
f.SB = function () {
    this.publish("fullscreentoggled")
};
function f7(a, b) {
    var c = a.D[b.o || "__default__"].menu;
    c && c.add(b)
}
function g7(a, b) {
    var c = a.D[b.o || "__default__"].menu;
    c && c.remove(b)
}
function b7(a, b, c, d) {
    if (!a.D[b]) {
        if ("remote" == b) {
            var e = Yd(a.I.N());
            d = c.N();
            e.insertBefore(d, e.childNodes[0] || null)
        } else
            e = c.N(), d = d || a.I.N(), d.parentNode && d.parentNode.insertBefore(e, d.nextSibling);
        e = c.listen("click", pa(a.yG, b), a);
        c.N().getAttribute("aria-label");
        d = c.N().id;
        d = new L6(a.xa, d, "__default__" != b);
        d.hide();
        d.Y(a.element);
        a.D[b] = {menu: d, button: c, Ew: e}
    }
}
function h7(a, b) {
    var c = a.D[b];
    c && (c.button.detach(), c.button.Da(c.Ew), c.menu.dispose(), delete a.D[b])
}
f.zC = function () {
    var a = this.k.N();
    if (!jh(a, "html5-async-progress")) {
        var b = jh(a, "html5-async-success");
        F6(a, "html5-async-progress");
        this.publish("watchlater", b)
    }
};
f.BC = function () {
    this.publish("watchonyoutube")
};
f.xG = function (a) {
    a.target && (Zd(this.B.button.N(), a.target) || Zd(this.B.menu.N(), a.target)) || this.xf()
};
f.xf = function () {
    this.publish("menu_show")
};
f.yG = function (a) {
    var b = this.D[a];
    b && b.menu.Mi() && (b.button.j ? this.xf() : this.publish("menu_show", a))
};
f.Vz = function () {
    this.publish("audiotrackchanged", this.K.k);
    this.xf()
};
f.rB = function () {
    var a = this.F.Wk();
    this.publish("qualitychanged", a);
    this.publish("controlclick", "quality-" + a);
    this.xf()
};
f.KB = function () {
    var a = this.o;
    a.j ? lB(a) : kB(a);
    this.o.N().focus();
    this.publish("sizechangerequested", 1 == this.o.j)
};
f.LB = function () {
    var a = this.M.k;
    this.publish("speedchanged", a);
    this.publish("controlclick", "speed-" + a);
    this.xf()
};
f.Yz = function () {
    this.publish("autonavchangerequest", 1 == this.O.getSelected() ? 2 : 1)
};
f.sA = function (a) {
    var b = a.target;
    a = b == this.A.N() ? "playpause" : b == this.j ? "volume" : b == this.C ? "time" : b == this.I ? "settings" : b == this.k ? "watchlater" : b == this.G ? "youtube" : b == this.H.N() ? "fullscreen" : b == this.o ? "size" : a.target.className;
    this.publish("controlclick", a)
};
f.focus = function () {
    this.A.N().focus()
};
f.L = function () {
    this.oa.removeAll();
    this.W.removeAll();
    this.B = null;
    for (var a in this.D)
        h7(this, a);
    this.la = -1;
    this.ka = null;
    a7.J.L.call(this)
};
function i7(a) {
    j7("add_to_watch_later_list", a)
}
function k7(a) {
    j7("delete_from_watch_later_list", a)
}
function j7(a, b) {
    Bj("/playlist_video_ajax?action_" + a + "=1", {
        method: "POST",
        Vf: {feature: b.QK || null, authuser: b.Za || null, pageid: b.pageId || null},
        Eb: {
            video_ids: b.videoIds || null,
            source_playlist_id: b.sourcePlaylistId || null,
            full_list_id: b.RK || null,
            delete_from_playlists: b.YK || null,
            add_to_playlists: b.LK || null,
            plid: Of("PLAYBACK_ID") || null
        },
        context: b.context,
        onError: b.onError,
        fb: b.fb,
        $b: b.$b
    })
}

function l7(a, b) {
    R.call(this);
    this.G = a;
    this.D = [];
    this.H = b;
    this.F = []
}
inherit(l7, R);
function m7(a, b, c) {
    a.D.push(a.G.subscribe(b, c, a))
}
function n7(a, b, c) {
    a.F.push(a.H.subscribe(b, c, a))
}
function o7(a) {
    for (var b = 0; b < a.D.length; b++)
        a.G.Lb(a.D[b]);
    for (b = 0; b < a.F.length; b++)
        a.H.Lb(a.F[b])
}
l7.prototype.L = function () {
    o7(this);
    l7.J.L.call(this)
};
function p7(a, b, c, d) {
    l7.call(this, a, b);
    this.C = !1;
    this.B = a;
    this.j = b;
    this.A = c;
    this.k = 0;
    this.o = d;
    a = a.T();
    a.color && N(this.j.G, a.color);
    a.Pe && (a = this.j, a.k = new c2, a.k.Y(a.N()), S(a, a.k));
    q7(this)
}
inherit(p7, l7);
function q7(a) {
    o7(a);
    a.C = !0;
    m7(a, "cuerangesadded", a.yx);
    m7(a, "cuerangesremoved", a.zx);
    m7(a, "cuerangemarkersupdated", a.xx);
    m7(a, "progresssync", a.cu);
    m7(a, "resize", a.fy);
    m7(a, "seekto", a.hG);
    m7(a, "videodatachange", a.iG);
    m7(a, "videoplayerreset", a.bu);
    m7(a, "videoready", a.my);
    n7(a, "beginseeking", a.mx);
    n7(a, "endseeking", a.Bx);
    n7(a, "seekto", a.kx)
}
f = p7.prototype;
f.yx = function (a) {
    o2(this.j, a)
};
f.zx = function (a) {
    for (var b = this.j, c = 0; c < a.length; c++)
        p2(b, a[c])
};
f.xx = function (a) {
    o2(this.j, a)
};
f.fy = function (a) {
    var b = this.j;
    b.o = a.width;
    g2(b);
    b = this.A;
    b.j = b.C.kb();
    b.k && b.o && u6(b);
    b = this.o;
    a = a.width;
    !b.k || b.A == a && b.V || (b.A = a, s6(b, !0))
};
f.hG = function (a) {
    var b = this.B.mc.ph();
    a = W1(new T1(b.seekableStart, b.seekableEnd), a);
    b = this.j;
    m2(b, n(a) ? a : b.B, n(void 0) ? void 0 : b.O);
    b = this.o;
    if (b.k) {
        b.H = b.I * a - b.A / 2;
        Hg(b.o, -1 * b.H);
        var c = V1(b.F, a), d = DH(b.k, b.j), d = b.k.j[d].Tj(c);
        r6(b, d);
        ae(b.ba, qv(b.R ? c - b.F.j : c));
        kn(b.O)
    }
    b = this.A;
    b.k && b.o && (a = V1(b.B, a), c = DH(b.k, b.j.width), b.A = b.k.j[c].Tj(a), u6(b))
};
f.bu = function (a) {
    if (1 != a.getPlayerType()) {
        if (!this.C)
            return;
        o7(this);
        this.C = !1;
        m7(this, "videoplayerreset", this.bu)
    } else if (!this.C) {
        q7(this);
        var b = this.j;
        Rd(b.la);
        b.F = {};
        b.R = {};
        o2(this.j, a.C.j.j || [])
    }
    this.j.k && d2(this.j.k);
    this.k && (M(this.k), this.k = 0);
    this.o.hide();
    this.A.hide();
    this.cu()
};
f.iG = function (a, b) {
    var c = new T1(0, b.lengthSeconds), d = this.j;
    d.j = c;
    n2(d);
    g2(d);
    this.j.k && (this.j.k.k = c);
    this.o.F = c;
    this.A.B = c;
    c = this.j;
    d = b.clipEnd;
    c.M = b.clipStart;
    c.K = d;
    l2(c);
    m2(c, c.B, c.O);
    c = this.j;
    d = !!b.ea;
    c.Va = d;
    P(c.ja, "ytp-fast-load", d)
};
f.my = function (a) {
    if (this.j.k) {
        var b = this.j.k;
        b.Zh || (EI(a) ? (N(b.N(), "with-thumbnail"), b.Ye = EI(a), b.Bh = FI(a), b.Bh.subscribe("l", b.pG, b)) : d2(b))
    }
    b = this.o;
    b.K && Rd(b.o);
    lh(b.N(), "enabled");
    Sw(b.C);
    b.k = EI(a);
    b.B = FI(a);
    b.R = a.Na;
    b.k && (N(b.N(), "enabled"), b.B.subscribe("l", b.rs, b), s6(b), Sw(b.C), b.C = Rw(x(b.lw, b)));
    b = this.A;
    b.k = EI(a);
    b.o = FI(a);
    this.j.Xa = a.rb;
    q2(this.j, !II(a))
};
f.cu = function (a, b) {
    var c = this.B.mc.ph(), d = n(a) ? a : c.current, e = new T1(c.seekableStart, n(b) ? b : c.seekableEnd), c = W1(e, c.loaded), d = W1(e, d), g = this.j;
    g.j = e;
    n2(g);
    g2(g);
    g = this.j;
    m2(g, n(d) ? d : g.B, n(c) ? c : g.O);
    this.j.k && (this.j.k.k = e);
    this.o.F = e;
    this.A.B = e
};
f.mx = function (a) {
    y1(this.B.k);
    null == a || isNaN(a) || this.B.Lj("chaptermarker", {position: a});
    this.k && M(this.k);
    this.k = L(x(this.eD, this), 200)
};
f.Bx = function () {
    this.B.k.Pj();
    this.o.hide();
    this.A.hide();
    this.k && (M(this.k), this.k = 0)
};
f.kx = function (a, b) {
    Cq(this.B, a, b)
};
f.eD = function () {
    this.o.show();
    this.A.show()
};
f.L = function () {
    p7.J.L.call(this)
};
function r7(a, b, c, d) {
    l7.call(this, a, b);
    m7(this, "applicationplayerstatechange", this.hx);
    m7(this, "controlsdisabled", this.ux);
    m7(this, "controlsenabled", this.vx);
    m7(this, "liveviewshift", this.Ex);
    m7(this, "fullscreentoggled", this.Cx);
    m7(this, "presentingplayerstatechange", this.Wx);
    m7(this, "progresssync", this.wG);
    m7(this, "videoplayerreset", this.vG);
    m7(this, "videodatachange", this.uG);
    m7(this, "onPlaybackQualityChange", this.ay);
    m7(this, "onVolumeChange", this.uy);
    m7(this, "menu_button_add", this.Ix);
    m7(this, "menu_button_remove",
        this.Jx);
    m7(this, "menu_item_add", this.Kx);
    m7(this, "menu_item_remove", this.Lx);
    m7(this, "menu_show", this.sG);
    m7(this, "onPlaybackRateChange", this.Vx);
    m7(this, "onPlaylistUpdate", this.Yx);
    m7(this, "autonavchange", this.rG);
    n7(this, "fullscreentoggled", this.wx);
    n7(this, "mutetoggled", this.Qx);
    n7(this, "nextvideo", this.Rx);
    n7(this, "playpausetoggled", this.Ux);
    n7(this, "previousvideo", this.Zx);
    n7(this, "qualitychanged", this.by);
    n7(this, "audiotrackchanged", this.jx);
    n7(this, "seekto", this.tG);
    n7(this, "sizechangerequested",
        this.jy);
    n7(this, "speedchanged", this.ky);
    n7(this, "volumechanged", this.vy);
    n7(this, "volumechangestart", this.ty);
    n7(this, "volumechangeend", this.ry);
    n7(this, "watchlater", this.wy);
    n7(this, "watchonyoutube", this.xy);
    n7(this, "controlclick", this.tx);
    n7(this, "showdialog", this.cD);
    n7(this, "menu_show", x(a.Ki, a));
    n7(this, "autonavchangerequest", this.qG);
    this.j = a;
    this.k = b;
    this.o = NaN;
    this.A = new p7(a, b.ga, c, d);
    S(this, this.A);
    a = a.T();
    a.Xa && (b = this.k, this.j.T().Id ? kB(b.o) : lB(b.o), b.o.show());
    a.ge || this.k.k.hide();
    a.la && this.k.H.show();
    a.K && (b = this.k, c = b.M, AB(c.j, this.j.j.K ? Oq : [1]), d = 2300, DB(c.j, d++), d = d++, Sz(c.element.j, d), f7(b, b.M));
    if (a.experiments.j)
        for (b = this.k, c = [b.A, b.j, b.C, b.k, b.G, b.H, b.I, b.o], d = 0; d < c.length; d++)
            b.oa.listen(c[d].N(), "click", b.sA, b);
    Jq(a) && this.k.G.hide()
}
inherit(r7, l7);
f = r7.prototype;
f.ux = function (a) {
    this.k.disable(a)
};
f.vx = function (a) {
    this.k.enable(a)
};
f.Ex = function (a) {
    P(this.k.C.element, "ytp-time-live-dvr", !a)
};
f.Cx = function (a) {
    var b = this.k;
    this.j.T();
    a ? (a = b.H, Rz(a,
    "ytp-button-fullscreen-exit"
    ),
    b = Z(0, "YTP_EXIT_FULLSCREEN"), a.gb(b), a.o = b
    ) :
    K6(b.H);
    s7(this)
};
f.Wx = function (a) {
    X(a.state, 2) || (0 < Dv(a, 8) ? d7(this.k, !0) : 0 > Dv(a, 8) ? d7(this.k, !1) : 0 > Dv(a, 2) && d7(this.k, X(a.state, 8)));
    0 > Dv(a, 16) && t7(this, this.j.getCurrentTime())
};
f.hx = function (a) {
    if (X(a.state, 2) && !uE(this.j)) {
        a = this.k.A;
        Rz(a, "ytp-button-replay");
        var b = Z(0, "YTP_REPLAY");
        a.gb(b)
    }
};
f.vG = function (a) {
    u7(this) && (t7(this, a.getCurrentTime()), F6(this.k.k.N()), X6(this.k.M, 1), a.getVideoData() && v7(this, a.getVideoData()))
};
f.uG = function (a, b) {
    u7(this) && v7(this, b)
};
function s7(a) {
    a.j.A ? (a = a.k, a
.
    R = !0
) :
    (a = a.k, a
.
    R = !1
)
    ;
    e7(a)
}
function w7(a) {
    !nE(a.j.T()) || a.j.A || a.j.getVideoData().Na ? (a = a.k, a
.
    ja = !1, e7(a), g7(a, a.O)
) :
    (a = a.k, a
.
    ja = !0, e7(a), f7(a, a.O)
)
}
function v7(a, b) {
    a.k.Qf(b.lengthSeconds);
    var c = Qq(a.j), d = a.k, e = Tq(c), g = c.j.j ? Ot(c.j.j) : {}, h = d.F;
    h.H = g;
    AB(h.k, e);
    DB(h.k, 2600);
    Sz(h.element.j, 2601);
    e.length ? f7(d, d.F) : g7(d, d.F);
    d = a.k;
    e = Pq(a.j);
    g = x7(a.j);
    T6(d.F, e, g);
    JB(d.I, e);
    d = a.k;
    c = c.j.j ? c.j.j.audioTracks : [];
    AB(d.K.j, c);
    1 < c.length ? f7(d, d.K) : g7(d, d.K);
    (c = cD(a.j)) && H6(a.k.K, c);
    c = a.k;
    d = b.Na;
    e = b.rb;
    c.Wl = d && !e;
    Z6(c.C, d, e);
    c = Qq(a.j, 1).getPlayerState();
    X(c, 2) || d7(a.k, X(c, 8));
    s7(a);
    w7(a)
}
f.ay = function (a) {
    if (u7(this)) {
        var b = this.k, c = x7(this.j);
        T6(b.F, a, c);
        JB(b.I, a)
    }
};
f.uy = function (a) {
    this.k.setVolume(a.volume, a.muted)
};
f.Kx = function (a) {
    f7(this.k, a)
};
f.Lx = function (a) {
    g7(this.k, a)
};
f.Ix = function (a, b) {
    b7(this.k, a, b)
};
f.Jx = function (a) {
    h7(this.k, a)
};
f.sG = function (a) {
    if (a == a7.prototype.Tu && this.j.F.isAvailable("captions")) {
        var b = Vq(this.j.F, "captions");
        b && !b.loaded && b.load()
    }
    b = this.k;
    b.W.removeAll();
    b.B && (document.activeElement && Zd(b.B.menu.N(), document.activeElement) && Yd(b.element).focus(), b.B.menu.hide(), lB(b.B.button), b.B = null);
    a && (a = b.D[a]) && (b.publish("showdialog"), b.B = a, kB(a.button), a.menu.show(), a.menu.focus(), b.W.listen(window, "blur", b.xf), b.W.listen(document, "click", b.xG))
};
f.wG = function (a) {
    t7(this, n(a) ? a : this.j.mc.ph().current)
};
f.wx = function () {
    Kq(this.j, !this.j.T().bb)
};
f.Qx = function () {
    this.j.H.muted ? Gq(this.j) : Fq(this.j)
};
f.Rx = function () {
    er(this.j)
};
f.Ux = function () {
    y7(this.j)
};
f.Zx = function () {
    fr(this.j)
};
f.by = function (a) {
    Er(this.j, a, 1)
};
f.jx = function (a) {
    var b = Qq(this.j, 1);
    if (b && !b.ha() && !X(b.B, 128) && b.j.j.j && (b = b.o, !b.ha())) {
        var c = b.C;
        a = a.id;
        c.B = "m";
        c.A = c.F.j[a];
        c.G = UZ(c);
        b.publish("audioformatchange", new OZ(c.G, c.o, c.B));
        U_(b, b.o, UZ(b.C));
        m_(b.o);
        R_(b)
    }
};
f.cD = function (a) {
    this.j.qn(a)
};
f.tG = function (a) {
    Cq(this.j, a, !0)
};
f.jy = function (a) {
    var b = this.j;
    Kq(b, !1);
    a != b.j.Id && (b.j.Id = a, b.publish("SIZE_CLICKED", a))
};
f.ky = function (a) {
    Nq(this.j, a)
};
f.ty = function () {
    this.o = Eq(this.j)
};
f.vy = function (a) {
    z7(this.j, a)
};
f.ry = function () {
    Eq(this.j) || z7(this.j, {muted: !0, volume: this.o})
};
f.xy = function () {
    b6(this.j)
};
f.tx = function (a) {
    N5(this.j, a)
};
f.wy = function (a) {
    (a ? k7 : i7).call(this, A7(this, a ? this.NB : this.OB))
};
f.Vx = function (a) {
    X6(this.k.M, a)
};
f.Yx = function () {
    s7(this);
    w7(this)
};
f.rG = function (a) {
    this.k.O.Ba(1 == a ? 0 : 1)
};
f.qG = function (a) {
    this.j.publish("onAutonavChangeRequest", 1 != a)
};
function A7(a, b) {
    return {videoIds: nr(a.j).videoId, Za: a.j.T().Za, pageId: a.j.T().pageId, fb: b, onError: a.FA, context: a}
}
f.OB = function () {
    var a = this.k.k.N();
    F6(a, "html5-async-success");
    this.j.publish("WATCH_LATER_VIDEO_ADDED")
};
f.NB = function () {
    F6(this.k.k.N());
    this.j.publish("WATCH_LATER_VIDEO_REMOVED")
};
f.FA = function (a, b) {
    var c = b && b.error_message, d = this.k.k.N();
    F6(d, "html5-async-error");
    if (c) {
        var e = w6.getInstance(), g = y6(d);
        A6(d, c);
        x6(e, d);
        px(d, g)
    }
};
function u7(a) {
    return 1 == Qq(a.j).getPlayerType()
}
function t7(a, b) {
    if (u7(a) && (kv(a.k.C.template, "current", qv(b)), 14400 < b && a.j.getVideoData().rb)) {
        var c = a.k;
        c.Wl = !0;
        Z6(c.C, !0, !1)
    }
}

var B7 = {
    0: [],
    1: ["autohide-controls"],
    2: ["autohide-controls-aspect", "autohide-controls-fullscreen", "autominimize-progress-bar-non-aspect"],
    3: ["autominimize-progress-bar"]
};
function C7(a) {
    o5.call(this, a);
    this.va = this.W = this.ba = this.F = this.Ia = this.C = null;
    this.ga = this.Xa = this.Ea = !1;
    a = a.T();
    if ("1" == a.k) {
        this.F = new a7(this.k, a.Qc);
        S(this, this.F);
        this.F.Y(this.element);
        this.ba = new t6(this.k);
        var b = this.ba.N();
        this.o.appendChild(b);
        S(this, this.ba);
        this.W = new q6(this.k.xb().width);
        this.W.Y(this.F.ga.N(), 0);
        S(this, this.W);
        this.va = new r7(this.app, this.F, this.ba, this.W);
        S(this, this.va)
    }
    this.I = new K4(60);
    S(this, this.I);
    N(this.I.element, "html5-video-loader");
    N(this.I.element, "html5-center-overlay");
    N(this.I.element, "ytp-scalable-icon-grow");
    this.I.Y(this.o);
    this.Wa = new Y(["div", "ytp-clickguard"]);
    S(this, this.Wa);
    this.Wa.Y(this.element);
    this.O = new v6(a.isMobile, a.Jb, a.fe);
    S(this, this.O);
    this.O.Y(this.o);
    this.O.listen("click", this.Oi, this);
    this.pa = null;
    this.G = new k5(new j5(this.element), x(this.BG, this), a.Qc);
    this.G.subscribe("autohideupdate", x(this.DG, this));
    this.Aa = !0;
    this.A = new j6(this.k);
    S(this, this.A);
    this.A.hide();
    this.A.Y(this.element)
}
inherit(C7, o5);
f = C7.prototype;
f.lk = function () {
    C7.J.lk.call(this);
    this.app.subscribe("appstatechange", this.ix, this);
    this.app.subscribe("initializingmode", this.yy, this);
    this.app.subscribe("onDetailedError", this.dD, this);
    this.app.subscribe("clearvideooverlays", this.jl, this);
    this.app.subscribe("menu_show", this.CG, this)
};
f.Nn = function () {
    C7.J.Nn.call(this);
    this.Kk(this.app.T());
    this.mk()
};
f.BG = function (a) {
    if (Zd(this.o, a))
        return !1;
    for (; !a || !fe(a);) {
        if (!a || a == this.element)
            return !1;
        a = Yd(a)
    }
    return !0
};
f.DG = function (a) {
    P(this.element, "ytp-block-autohide", !a);
    this.app.Qa(a ? "onHideControls" : "onShowControls")
};
f.Kk = function (a) {
    "light" == a.theme && this.addClass("light-theme");
    (a.Va || "0" == a.k) && this.addClass("modest-branding");
    a.wj && this.addClass("html5-hide-share");
    a.Re || this.addClass("html5-hide-volume");
    a.Qc && (this.addClass("html5-tablet"), N(document.body, "html5-tablet-body"));
    D7(this) && this.addClass("ideal-aspect");
    !this.G.j || this.addClass("ytp-block-autohide")
};
f.Yg = function (a) {
    C7.J.Yg.call(this, a);
    var b = this.app.T();
    P(this.element, "hide-info-bar", !a || !b.Wa);
    var c = B7[b.oa];
    a && "1" == b.k ? kh(this.element, c) : mh(this.element, c)
};
f.Dg = function (a) {
    C7.J.Dg.call(this, a);
    E7(this, a);
    this.C && p6(this.C);
    P(this.element, "ideal-aspect", D7(this));
    this.A.P && k6(this.A)
};
f.nl = function () {
    C7.J.nl.call(this);
    E7(this, this.kb())
};
f.ix = function (a) {
    (this.Aa = 2 == a) ? (this.addClass("cued-mode"), this.O.k(this.app.A, this.app.getVideoData())) : this.removeClass("cued-mode")
};
f.ll = function (a) {
    C7.J.ll.call(this, a);
    if (this.element) {
        X(a.state, 2) && this.O.k(this.app.A, this.app.getVideoData());
        this.G.Fb(128, !(X(a.state, 8) && !X(a.state, 32) && !X(a.state, 2)));
        var b;
        b = a.state;
        if (X(b, 2))
            b = ["ended-mode"];
        else {
            var c = [];
            X(b, 8) ? c.push("playing-mode") : X(b, 4) && c.push("paused-mode");
            X(b, 1) && !X(b, 32) && c.push("buffering-mode");
            X(b, 32) && c.push("seeking-mode");
            X(b, 64) && c.push("unstarted-mode");
            b = c
        }
        G(b, "ended-mode") && ((c = F7()) && c.autoPlay || uE(this.app)) && pb(b, "ended-mode");
        this.pa && mh(this.element,
            this.pa);
        kh(this.element, b);
        this.pa = b;
        b = Qq(this.app);
        c = b.getPlayerState();
        if (c = X(c, 1) && !X(c, 2))
            c = b.getPlayerState(), c = !X(c, 4);
        c && 2 != b.getPlayerType() ? this.I.show() : this.I.hide();
        0 > Dv(a, 64) && G7(this.app)
    }
};
f.mk = function () {
    this.app.T().Qc && (pv(this, this.element, "gesturechange", this.mC), pv(this, this.element, "gestureend", this.nC));
    Yr ? this.o.onclick = x(function (a) {
        this.jm(new vh(a))
    }, this) : this.nk();
    var a, b = x(function () {
        var b = this.j;
        b && (fs(b), XD.fillPool(4), this.Da(a))
    }, this);
    a = pv(this, this.element, "click", b, void 0, !0)
};
f.nk = function () {
    pv(this, this.o, "click", this.jm);
    pv(this, this.o, "dblclick", this.sr)
};
f.Oi = function () {
    y7(this.app)
};
f.jm = function (a) {
    ke(a.target, "html5-stop-propagation") || (this.element.focus(), "3" != this.app.T().k && this.Oi());
    N5(this.app, "screenclick")
};
f.sr = function (a) {
    6 != this.app.I && this.app.T().la && (!ke(a.target, "html5-stop-propagation") && Gx(this.app), N5(this.app, "screendoubleclick"))
};
f.mC = function (a) {
    var b = a.scale, c = this.app.T().bb;
    b * (c ? -1 : 1) > (c ? -.7 : 1.3) && Gx(this.app);
    a.preventDefault()
};
f.nC = function (a) {
    a = a.scale;
    var b = this.app.T().bb;
    a * (b ? -1 : 1) > (b ? -.9 : 1.1) && Gx(this.app)
};
function D7(a) {
    a = new H(a.element.clientWidth, a.element.clientHeight);
    a = (a.width / a.height).toFixed(1);
    return "1.3" == a || "1.8" == a
}
f.hg = function (a) {
    if (a) {
        var b = this.A;
        b.j = a;
        b.ta(a);
        this.A.show();
        this.G.Fb(32, !0)
    } else
        b = this.A, b.j = null, b.ta(null), this.A.hide(), this.G.Fb(32, !1);
    this.Ea = !!a;
    H7(this)
};
f.CG = function (a) {
    a = !!a;
    P(this.element, "ytp-menu-shown", a);
    this.G.Fb(64, a);
    this.Xa = a;
    H7(this)
};
function H7(a) {
    var b = a.Xa || a.Ea;
    a.ga != b && (a.ga = b, a.app.publish("onAutonavPauseRequest", a.ga))
}
f.dD = function (a) {
    if (this.element) {
        this.C || (this.C = new o6(this.app.mc), this.C.Y(this.element), S(this, this.C));
        var b = this.C, c = b.o.T(), d = a.message, e = "embedded" == c.da;
        a = a.messageKey;
        var g, h = !1;
        "YTP_ERROR_GENERIC" != a || c.Jb ? "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH" == a ? (g = "https://get.adobe.com/flashplayer/", e = !0): "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK" != a || c.Jb || (g = "/html5", a = "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK") : (g = "//support.google.com/youtube/?p=player_error1", a = "YTP_ERROR_GENERIC_WITH_LINK_2",
                                                                                                                                                                                                                                                                                           Jq
        (c) && (h = !0)
    )
        ;
        g && (d = Uf(a, {
            BEGIN_LINK: '<br/><a href="' + g + '"' + (e ? ' target="_blank"' : "") + ">",
            END_LINK: "</a>"
        }));
        Eh(b.k);
        b.k = [];
        kv(b.template, "content", new TE(d));
        if (h)
            for (c = x(b.A, b), d = b.element.getElementsByTagName("a"), e = 0; e < d.length; e++)
                g = Q(d[e], "click", c), b.k.push(g);
        this.C.show()
    }
};
f.kb = function () {
    var a = this.app.T();
    return "0" == a.k || "3" == a.k || "1" == a.oa && (a = Qq(this.app), !a || 2 != a.getPlayerType()) ? this.xb() : new H(this.o.clientWidth, this.o.clientHeight)
};
f.yy = function () {
    this.C && this.C.hide()
};
f.Xe = function () {
    var a = this.app.T();
    oi(document.documentElement, "player-size", a.bb ? "fullscreen" : a.Id ? "large" : "small");
    C7.J.Xe.call(this)
};
f.jl = function (a) {
    this.G.Fb(16, a)
};
function E7(a, b) {
    if (!b.isEmpty()) {
        var c = b.width, d = b.height, e = 0, g = 0;
        c / d > 480 / 360 ? (e = d, g = 360): (e = c, g = 480);
        for (var c = Pc(e / g, .5, 1), d = Bd("ytp-scalable-icon-shrink", a.element), h = 0; h < d.length; h++) {
            var k = 1 == c ? "" : "scale(" + c + ")";
            Bg(d[h], "transform", k)
        }
        c = Pc(e / g * .33, .5, 1);
        d = Bd("ytp-scalable-icon-grow", a.element);
        for (h = 0; h < d.length; h++)
            k = 1 == c ? "" : "scale(" + c + ")", Bg(d[h], "transform", k)
    }
}
f.On = function (a) {
    this.F && d7(this.F, a)
};
f.L = function () {
    this.G.dispose();
    Hh(this.element);
    Sd(this.Ia);
    C7.J.L.call(this);
    this.O = this.Ia = null
};
function I7(a) {
    C7.call(this, a);
    this.M = new Y(["img", ["html5-watermark", "ytp-scalable-icon-shrink"], {
        src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        alt: Z(0, "YTP_WATERMARK")
    }]);
    S(this, this.M);
    this.M.hide();
    this.M.Y(this.element);
    this.M.listen("click", this.Tt, this);
    this.B = new K5(this.app, this.element, this.k);
    S(this, this.B);
    this.B.Y(document.body);
    a.T().Jb && N(this.B.N(), "house-brand");
    this.oa = null;
    this.D = new Z5(this.k, this.app);
    this.D.Y(this.element);
    S(this, this.D);
    this.D.subscribe("title-click", x(this.Tt, this));
    this.D.subscribe("share-click", x(this.HB, this));
    this.ja = new F5;
    S(this, this.ja);
    this.ja.Y(this.o);
    this.xs(I7.k / I7.j)
}
inherit(I7, C7);
I7.k = 3E4;
I7.j = 50;
f = I7.prototype;
f.Zg = null;
f.xs = function (a) {
    var b;
    if (!(b = 0 >= a)) {
        b = I("div", {"class": "html5-player-css-loaded"});
        document.body.appendChild(b);
        var c = "none" == Fg(b, "display");
        Sd(b);
        b = c
    }
    b ? 0 >= a && Sf(Error("Warning: Player CSS missing.")) : L(x(this.xs, this, a - 1), I7.j)
};
f.Kk = function (a) {
    I7.J.Kk.call(this, a);
    J7(this);
    a.Xa && this.Xe()
};
function J7(a) {
    P(a.element, "ytp-tiny-mode", 290 > a.xb().width)
}
f.nk = function () {
    this.app.T().la ? this.oa || (this.oa = new u5(this.o, x(this.jm, this), x(this.sr, this)), S(this, this.oa)) : I7.J.nk.call(this)
};
f.bk = function (a) {
    I7.J.bk.call(this, a);
    this.D && this.D.update(a);
    var b = this.app;
    if (b.j.he ? 0 : b.getVideoData().W || b.j.nb) {
        if (a = a.W)
            this.M.N().src = a;
        this.M.show()
    }
};
f.mk = function () {
    I7.J.mk.call(this);
    var a = this.app.T();
    a.Qc || (pv(this, this.element, "mousedown", this.YF, void 0, !0), pv(this, this.element, "keydown", this.vz, void 0, !0));
    a.Mk || (pv(this, this.element, "keypress", this.$F), pv(this, this.element, "keydown", this.ZF), pv(this, this.element, "keyup", this.aG))
};
f.vz = function (a) {
    var b = !1;
    switch (a.keyCode) {
        case 32:
        case 13:
            if (b = a.target)
                a = a.target, b = "BUTTON" == a.tagName || "A" == a.tagName || "button" == a.getAttribute("role");
            break;
        case 9:
            b = !0
    }
    b && N(this.element, "ytp-keyboard-focus")
};
f.YF = function () {
    lh(this.element, "ytp-keyboard-focus")
};
f.$F = function (a) {
    var b = !1 === a.Mb.returnValue, c = a.keyCode;
    if (!b) {
        if (179 == c || 178 == c)
            179 == c && (this.publish("playpausetoggled", !0), b = !0), 178 == c && (Iq(this.app), b = !0);
        98 == c && (this.app.Fc("onBackgroundChange"), b = !0);
        111 == c && (this.app.Fc("onTextOpacityChange"), b = !0);
        119 == c && (this.app.Fc("onWindowOpacityChange"), b = !0);
        if (61 == c || 43 == c)
            this.app.Fc("onFontSizeIncrease"), b = !0;
        if (45 == c || 95 == c)
            this.app.Fc("onFontSizeDecrease"), b = !0;
        99 == c && (this.app.Fc("onCaptionsToggle"), b = !0);
        102 == c && (Gx(this.app), b = !0);
        109 == c &&
        (this.app.H.muted ? Gq(this.app) : Fq(this.app), b = !0);
        32 == c && (K7(this), y7(this.app), b = !0);
        48 <= c && 57 >= c && (Cq(this.app, (c - 48) / 10 * Dq(this.app)), b = !0);
        if (60 == c || 62 == c) {
            var b = this.app.j.K ? Oq : [1], d = b.indexOf(this.app.ja);
            60 == c && 0 < d ? Nq(this.app, b[d - 1]) : 62 == c && d < b.length - 1 && Nq(this.app, b[d + 1]);
            b = !0
        }
        if (d = 63 == c)
            d = this.app.T(), d = d.experiments.O ? !Jq(d) || d.bb : !0;
        d && (this.Zg || (this.Zg = new c6(this.k), S(this, this.Zg), this.Zg.listen("done", this.rl, this)), this.A.P ? this.rl() : this.hg(this.Zg), b = !0);
        b && a.preventDefault()
    }
    this.app.Fc("onKeyPress",
        a);
    this.app.T().Db() && this.app.Rg("onKeyPress", {keyCode: c, handled: b})
};
f.ZF = function (a) {
    var b = !1 === a.Mb.returnValue, c = a.keyCode;
    if (!b) {
        if (38 == c || 40 == c || 37 == c || 39 == c) {
            b = 5;
            a.ctrlKey && (b *= 2);
            if (38 == c)
                b = this.app, z7(b, {volume: b.H.volume + 5, muted: !1});
            else if (40 == c)
                b = this.app, z7(b, {volume: b.H.volume - 5, muted: !1});
            else if (37 == c) {
                var d = this.app, b = -1 * b;
                Cq(d, d.getCurrentTime() + b, !1, 250, void 0)
            } else
                39 == c && (d = this.app, Cq(d, d.getCurrentTime() + b, !1, 250, void 0));
            b = !0
        }
        36 == c && (Cq(this.app, 0), b = !0);
        35 == c && (Cq(this.app, Infinity), b = !0);
        27 == c && (Kh() ? (Kq(this.app, !1), b = !0) : this.B && this.B.P ?
            (this.B.hide(), b = !0) : "1" == this.app.T().k && null != this.F.B ? (this.app.Ki(), b = !0) : this.A.P && (this.rl(), b = !0));
        b && a.preventDefault()
    }
    this.app.Fc("onKeyDown", a);
    this.app.T().Db() && this.app.Rg("onKeyPress", {
        keyCode: c,
        altKey: a.altKey,
        ctrlKey: a.ctrlKey,
        metaKey: a.metaKey,
        shiftKey: a.shiftKey,
        handled: b,
        fullscreen: this.app.T().bb
    })
};
f.aG = function (a) {
    this.app.Fc("onKeyUp", a)
};
f.Tt = function () {
    b6(this.app)
};
f.HB = function () {
    if ("detailpage" == this.app.T().da) {
        Kq(this.app, !1);
        var a = this.app, b = a.getVideoData();
        a.publish("SHARE_CLICKED", {videoId: b.videoId, listId: b.playlistId, feature: "player_" + a.j.da})
    } else
        a = !X5(this.D), this.app.Ek(a), a && Y5(this.D, !0)
};
f.jl = function (a) {
    I7.J.jl.call(this, a);
    Y5(this.D, !1)
};
f.rl = function () {
    this.hg()
};
f.Gm = function (a) {
    I7.J.Gm.call(this, a);
    this.B && (a ? this.B.Y(this.N()) : this.B.Y(document.body), this.B.hide());
    a && "1" == this.app.T().k && this.F.focus()
};
function K7(a) {
    var b = Qq(a.app).getPlayerState(), c = a.app.getVideoData(), d = "html5-bezel-pause";
    X(b, 8) ? c.Na && !c.rb && (d = "html5-bezel-stop") : d = "html5-bezel-play";
    a = a.ja;
    d && kv(a.template, "icon", d);
    a.j.show(!0)
}
f.Oi = function () {
    K7(this);
    I7.J.Oi.call(this)
};
f.Dg = function (a) {
    I7.J.Dg.call(this, a);
    J7(this)
};
f.Jm = function () {
    I7.J.Jm.call(this);
    if (!this.app.T().isMobile) {
        var a = new g6(this.element, this.app.T());
        S(this, a);
        this.k.j = a;
        var b = Bd("ytp-tooltip-anchor", this.element);
        D(b, function (b) {
            a.ig(b)
        })
    }
};
f.xb = function () {
    var a = this.app.T();
    return "detailpage" != a.da || a.bb ? I7.J.xb.call(this) : B5(a, !0)
};
f.kb = function () {
    var a = this.app.T();
    return "detailpage" != a.da || a.bb ? I7.J.kb.call(this) : B5(a)
};
f.dp = function () {
    var a = this.kb();
    "1" == this.app.T().k && (a = a.clone(), a.height += 3);
    return a
};
var L7 = t("yt.prefs.UserPrefs.prefs_") || {};
q("yt.prefs.UserPrefs.prefs_", L7, void 0);
var mr = {
    "api.invalidparam": 2,
    auth: 150,
    "drm.auth": 150,
    heartbeat: 150,
    "html5.unsupportedads": 5,
    "fmt.noneavailable": 5,
    "fmt.decode": 5,
    "fmt.unplayable": 5,
    "html5.missingapi": 5,
    "drm.unavailable": 5
};
function M7(a, b) {
    T.call(this);
    var c = b;
    c instanceof Lh || (c = new Lh(c));
    this.X = c;
    this.j = new AZ(this.X.args || {});
    S(this, this.j);
    this.o = new I7(this);
    S(this, this.o);
    this.o.subscribe("resize", this.UD, this);
    this.I = 1;
    this.xa = {};
    this.W = null;
    this.H = this.j.Pm ? tq() : {volume: 100, muted: !1};
    this.Cc = this.j.Db() ? new ur(this, 1) : new yq(this, 1);
    S(this, this.Cc);
    this.ob = new Gr(this);
    S(this, this.ob);
    this.mc = new Gr(this, 1);
    S(this, this.mc);
    this.ba = this.B = null;
    this.na = {};
    c = new TF;
    iD(this.j) && (c.k = !0, c.j = .1);
    this.oa = new JF(c);
    this.Aa = {
        internalvideodatachange: this.Qz,
        liveviewshift: this.QD,
        playbackready: this.Rz,
        playbackstarted: this.Sz,
        statechange: this.Tz,
        signatureexpired: this.JB
    };
    var c = new YI, d = this.ob;
    c.k != d && (ZI(c), c.C = {}, c.k = d);
    d = {};
    d.loaded = x(this.Pq, this);
    d.unloaded = x(this.Qq, this);
    d.command_pause = N7(this.pauseVideo, this);
    d.command_play = N7(this.Yd, this);
    d.command_seek = N7(this.Zf, this);
    d.command_disable_controls = x(this.kh, this);
    d.command_enable_controls = x(this.Kj, this);
    d.command_redirect_controls = x(this.Js, this);
    d.command_stop_redirect_controls =
        x(this.tj, this);
    d.command_redirected_show_is_playing = x(this.o.On, this.o);
    d.command_progress = x(this.sm, this);
    d.command_add_cuerange = x(this.Is, this);
    d.command_remove_cuerange = x(this.Ks, this);
    d.command_remove_cuerange_all = x(this.zr, this);
    d.command_preroll_ready = x(this.Ls, this);
    d.command_update_cuerange_markers = x(this.Ms, this);
    d.command_show_dialog = x(this.qn, this);
    d.command_clear_video_overlays = x(this.Ek, this);
    d.command_navigate_to_url = x(this.pn, this);
    d.command_log = x(this.Lj, this);
    d.publish_external_event =
        x(this.Rg, this);
    d.module_menu_button_add = x(this.dq, this);
    d.module_menu_button_remove = x(this.fq, this);
    d.module_menu_item_add = x(this.gq, this);
    d.module_menu_item_remove = x(this.hq, this);
    d.module_menu_show = x(this.Ki, this);
    d.vss_segment = x(this.YD, this);
    c.D = d;
    this.F = c;
    S(this, this.F);
    this.K = new pZ(this.j, "", this.F);
    c = new S0(this.j, 1, this.K, this.o);
    O7(this, c, this.Aa);
    this.k = c;
    this.k.ea = this.oa;
    this.ac = {
        beginseeking: this.aA,
        endseeking: this.DA,
        internalaudioformatchange: this.Uz,
        internalvideodatachange: this.WD,
        internalvideoformatchange: this.kC,
        progresssync: this.TD,
        seekto: this.VD,
        onLoadProgress: this.UA,
        onVideoProgress: this.oC,
        newlicensesession: this.RD,
        playbackready: this.lB,
        statechange: this.SD,
        connectionissue: this.nA,
        heartbeatparams: this.PD,
        videoelementevent: this.XD
    };
    this.M = this.C = null;
    this.Ea = this.Ia = -1;
    this.D = this.G = null;
    this.O = {};
    this.ea = null;
    this.V = {};
    this.ka = null;
    this.Xa = 0;
    this.va = !1;
    this.list = null;
    this.S = !0;
    this.la = this.A = null;
    this.ja = 1;
    this.lc = this.ga = this.Ma = null;
    this.Wa = this.ib = !1;
    this.pa = null;
    this.nb =
        0;
    this.od = !1;
    this.Kb = null;
    this.Va = this.R = 0;
    c = new vr(this.X.args);
    if (GI(c)) {
        U0(this.k, c, x(this.lh, this));
        if ("detailpage" == this.j.da) {
            var d = c.videoId, e = Zi("yt-player-restore-playhead"), d = e ? e[d] : void 0;
            d && (c.startSeconds = d)
        }
        $i("yt-player-restore-playhead");
        (this.j.ba || this.j.ac && this.j.experiments.R) && $0(this.k)
    }
    qZ(this.K, "fs", void 0);
    this.o.initialize(a);
    this.o.Nn();
    c = this.Cc;
    d = this.o.N();
    c.$d = d;
    for (var g in c.Mf)
        c.$d[g] = c.Mf[g];
    for (g in c.Ig)
        c.$d[g] = c.Ig[g];
    g = x(this.JA, this);
    c = document;
    "onfullscreenchange" in
    c ? d = "fullscreenchange" : (d = oh + "fullscreenchange", d = "on" + d in c ? d : null);
    "msfullscreenchange" == d && (d = "MSFullscreenChange");
    this.Ma = d ? Q(c, d, g) : null;
    this.lc = Q(window, "resize", x(this.yB, this));
    c = this.X.args;
    if (Zt()) {
        P7(this);
        g = nr(this);
        d = this.o.kb();
        this.j.Ij = d;
        this.Qa("onVolumeChange", this.H);
        "detailpage" == this.j.da ? xr(this, g) : c && (c.playlist || c.list || c.api) && (Q7(this, c), GI(g) || (c = this.A, d = x(this.Sq, this), c.Je = d, c.ae && L(c.Je, 0)));
        if (c = this.X.args.jsapicallback)
            ia(c) || (c = t(c)), c && N7(x(c, m, this.j.nm), m);
        this.j.xa || (Qp("embedded" == this.j.da), this.j.pg = pr(this.j) && !mb(Yp()));
        S2(this, this.k);
        this.j.ba && GI(g) ? R7(this) : "leanback" != this.j.da && S7(this)
    } else
        Cv(this.k, "html5.missingapi", "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK", void 0);
    this.o.nl();
    N5(this, "init")
}
inherit(M7, T);
M7.k = "defaultcontext";
M7.j = {};
M7.create = function (a, b) {
    try {
        var c = M7.A(a);
        if (M7.j[c]) {
            try {
                M7.j[c].dispose()
            } catch (d) {
                Sf(d)
            }
            M7.j[c] = null
        }
        var e = new M7(a, b);
        si(e, function () {
            M7.j[c] = null
        });
        return M7.j[c] = e
    } catch (g) {
        throw Sf(g), g;
    }
};
M7.o = function (a, b) {
    WH("pwc");
    var c = document.querySelector(a);
    document.registerElement(a, {});
    var d = c.querySelector("template"), c = c.createShadowRoot(), d = document.importNode(d.content, !0);
    c.appendChild(d);
    c = c.getElementById(b);
    d = t("ytplayer.config");
    c = M7.create(c, d);
    d.loaded = !0;
    return c
};
M7.A = function (a) {
    return w(a) ? a : "player" + ka(a)
};
function P7(a) {
    a.B = XD.getTag(!0);
    a.ba = a.B;
    a.C && p1(a.C, a.B);
    ms(a.B, a.ja);
    a.j.Wd ? (a.ga && Eh(a.ga), a.ga = Q(a.B, "volumechange", x(a.$A, a), !1)) : a.B.setVolume(a.H.volume, a.H.muted);
    var b = a.o;
    b.j = a.B;
    if (!b.j.parentNode) {
        var c = b.o;
        c.insertBefore(b.j, c.childNodes[0] || null)
    }
    b.V = new sg(0, 0, 0, 0);
    p5(b);
    N(b.j, "video-stream");
    N(b.j, "html5-main-video");
    c = b.app.T();
    "3" == c.k && b.j.setAttribute("controls", !0);
    c.I && b.j.setAttribute("webkit-playsinline", "");
    c.Ze && (b.ka = Q(b.j, "click", x(b.j.play, b.j)));
    a.j.wb = a.B;
    fs(a.B)
}
function T7(a) {
    if (a.B) {
        a.ga && (Eh(a.ga), a.ga = null);
        a.C && WD(a.C);
        var b = a.o;
        b.j && (Sd(b.j), b.j = null);
        a.j.wb = null;
        XD.releaseTag(a.B);
        a.B = null
    }
}
function TD(a, b) {
    a.j.C ? (a.ea && (Hg(a.B, a.ea.left, a.ea.top), Rg(a.B, xg(a.ea)), a.ea = null), ls(a.B), WD(a.C), p1(a.C, a.B), ms(a.B, a.ja)) : XD.releaseTag(b)
}
function S2(a, b) {
    if (a.C != b) {
        a.C && (ZI(a.F), V2(a));
        if (b != a.k) {
            var c = b.getPlayerType();
            a.na[c] = b
        }
        a.C = b;
        b.ea = a.oa;
        a.B && p1(b, a.B);
        O7(a, b, a.ac);
        U7(a, b, b.getVideoData());
        b.R.j && V7(a, "dataloaded", b, b.getVideoData())
    }
}
function O7(a, b, c) {
    for (var d in c)
        b.subscribe(d, c[d], a)
}
function V2(a) {
    WD(a.C);
    var b = a.C, c = a.ac, d;
    for (d in c)
        b.unsubscribe(d, c[d], a);
    b = a.C;
    b != a.k && (c = b.getPlayerType(), a.na[c] == b && delete a.na[c]);
    a.C = null
}
f = M7.prototype;
f.subscribe = function (a, b, c) {
    return M7.J.subscribe.call(this, a, b, c)
};
function Qq(a, b) {
    return b ? 1 == b ? a.k : a.na[b] || null : a.C
}
function W7(a) {
    var b = a.F, c = [DA.k, vE, Gv, OE, qD, XE, pF.j, sF, zD, BF];
    c.push(CE.j);
    D(c, b.Do, b);
    a.publish("videoready", a.getVideoData())
}
f.Rz = function () {
    X7(this) || Y7(this, 5)
};
f.lB = function (a) {
    X7(this) || (Z7(this), us(a.getPlayerState()) && this.Yd())
};
function rr(a) {
    !a.D && a.mc.T().pg && (a.D = new e5(a), $7(a, a.D));
    if (a.D) {
        var b = dq();
        or(a.D, Yp(), b);
        var c = a.D;
        c && !c.be && c.Ca(a.mc) && c.create();
        b && a.D.load()
    }
}
function $7(a, b) {
    S(a, b);
    b.subscribe("loaded", a.Pq, a);
    b.subscribe("unloaded", a.Qq, a);
    b.subscribe("command_pause", N7(a.pauseVideo, a));
    b.subscribe("command_play", N7(a.Yd, a));
    b.subscribe("command_seek", N7(a.Zf, a));
    b.subscribe("command_disable_controls", a.kh, a);
    b.subscribe("command_enable_controls", a.Kj, a);
    b.subscribe("command_redirect_controls", a.Js, a);
    b.subscribe("command_stop_redirect_controls", a.tj, a);
    b.subscribe("command_redirected_show_is_playing", a.o.On, a.o);
    b.subscribe("command_progress", a.sm,
        a);
    b.subscribe("command_add_cuerange", a.Is, a);
    b.subscribe("command_remove_cuerange", a.Ks, a);
    b.subscribe("command_remove_cuerange_all", a.zr, a);
    b.subscribe("command_update_cuerange_markers", a.Ms, a);
    b.subscribe("command_preroll_ready", a.Ls, a);
    b.subscribe("command_show_dialog", a.qn, a);
    b.subscribe("command_clear_video_overlays", a.Ek, a);
    b.subscribe("command_log", a.Lj, a);
    b.subscribe("command_navigate_to_url", a.pn, a);
    b.subscribe("publish_external_event", a.Rg, a);
    b.subscribe("module_menu_button_add", a.dq, a);
    b.subscribe("module_menu_button_remove", a.fq, a);
    b.subscribe("module_menu_item_add", a.gq, a);
    b.subscribe("module_menu_item_remove", a.hq, a);
    b.subscribe("module_menu_show", a.Ki, a);
    b.subscribe("command_log_timing", a.F.G, a.F)
}
function qr(a) {
    a && a.be && a.destroy()
}
f.Qa = function (a, b) {
    this.publish.apply(this, arguments);
    this.Fc.apply(this, arguments)
};
f.Nf = function (a, b) {
    var c = tb(arguments);
    this.j.Db() && this.C && c.push(this.C.getPlayerType());
    this.publish.apply(this, c)
};
f.canPlayType = function (a) {
    return !!Yt().canPlayType(a)
};
f.T = function () {
    return this.j
};
f.getVideoData = function () {
    return this.C.getVideoData()
};
function nr(a) {
    return a.k.getVideoData()
}
f.lh = function () {
    var a = IZ(this.j);
    qa(a, cJ(this.F));
    this.G && qa(a, this.G.sh());
    a.fs = this.j.bb;
    a.volume = Math.round(Eq(this));
    a.mos = this.H.muted ? 1 : 0;
    return a
};
f.qn = function (a) {
    this.o.hg(a)
};
function S7(a) {
    a.publish("initializingmode");
    Y7(a, 2)
}
function R7(a) {
    if (X(a.k.getPlayerState(), 128))
        return !1;
    a.publish("initializingmode");
    S2(a, a.k);
    Y7(a, 3);
    var b;
    (b = !a.j.C) || (t("yt.mobile.blazer.blazer_config.isMobilePersistentUniplayer"), b = !1);
    b && (T7(a), P7(a), p1(a.k, a.B));
    j1(a.k);
    if (X(a.k.getPlayerState(), 128))
        return !1;
    a8(a, 3);
    return a.od = !0
}
function X7(a) {
    return pr(a.j) && !!dq()
}
function N7(a, b) {
    return function () {
        var c = Array.prototype.slice.call(arguments);
        L(function () {
            a.apply(b || this, c)
        }, 0)
    }
}
f.pn = function (a, b) {
    b ? O5(this, a) : (window.ytspf || {}).enabled ? spf.navigate(a) : tF(a)
};
f.Lj = function (a, b, c) {
    var d = Qq(this);
    b.event = a;
    this.j.bb && (b.fs = 1);
    d.A && (a = d.A, b.rt = u0(a.j).toFixed(3), qa(b, I0(a.j)), qa(b, K0(a)), delete b.fexp, b = tj(a.j.Z.A + "player_204", b), hg(b, c))
};
function Nq(a, b) {
    if (!isNaN(b) && a.B) {
        var c = 1, c = a.j.K ? Oq : [1], c = 1 > b ? F(c, function (a) {
            return a >= b
        }) : kb(c, function (a) {
            return a <= b
        });
        a.ja != c && (a.ja = c, a.k == a.C && ms(a.B, c), a.publish("onPlaybackRateChange", c))
    }
}
function Pq(a, b) {
    var c = Qq(a, b);
    return c && c.getVideoData().o ? c.getVideoData().o.video.quality : "unknown"
}
function cD(a, b) {
    var c = Qq(a, b);
    return c ? x1(c) : a.getVideoData().V
}
function x7(a) {
    return (a = Qq(a, void 0)) ? Lt(l0(a.ka, a.j)) : "unknown"
}
function Er(a, b, c, d) {
    if (a = Qq(a, c))
        b = Rq(b, d || b, !0), Sq(a, "m", b)
}
f.getCurrentTime = function (a) {
    return 3 == this.vf() ? this.D.getCurrentTime() : (a = Qq(this, a)) ? a.getCurrentTime() : 0
};
function Dq(a, b) {
    var c = Qq(a, b);
    return c ? c.Sc() : 0
}
function $q(a, b) {
    var c = a.k.getDebugInfo(b);
    if (a.C && a.C != a.k) {
        var d = a.C.getDebugInfo(b), e;
        for (e in d)
            c["ad_" + e] = d[e]
    }
    c.debug_playbackQuality = Pq(a);
    c.debug_date = (new Date).toString();
    delete c.uga;
    return lg(c)
}
function WE(a, b) {
    var c = a.getVideoData(), d = !!c.na || !!c.eh || !b;
    d && a.B.setAttribute("mozStereoMode", "1");
    RE() && (a.B.setAttribute("mozStereoMode", d ? "1" : "0"), c = GH[d ? c.la : 0], d = document.createElement("NvStereoExtDataElement"), d.setAttribute("stereoMode", c), Qd(document.documentElement, d), Ih(d, "3DModeEvent"))
}
f.vf = function () {
    var a;
    if (a = this.D)
        a = this.D, a = !!a.k && !!a.o;
    return a ? 3 : Qq(this).getPlayerType()
};
function Aq(a, b) {
    return 3 == a.vf() ? vs(a.D.S) : 2 == b ? a.Ea : a.Ia
}
f.XD = function (a) {
    var b = a.target;
    switch (a.type) {
        case "loadedmetadata":
            qZ(this.K, "fvb", void 0);
            this.Xa = L(x(this.o.Xe, this.o), 16);
            break;
        case "loadstart":
            qZ(this.K, "gv", void 0);
            break;
        case "progress":
        case "timeupdate":
            qZ(this.K, "1pb", void 0), 2 <= Rr(b.buffered) && qZ(this.K, "l2s", void 0)
    }
};
f.RD = function (a) {
    if (this.Wa) {
        var b = this.nb.toString();
        this.nb++;
        this.pa[b] = a;
        a = {request: tb(a.j[0] ? a.j[0].message : null), sessionId: b, system: a.H.j, url: a.C};
        this.publish("onNewLicenseSession", a)
    } else
        a.start()
};
f.UA = function (a, b) {
    this.Nf("onLoadProgress", b)
};
f.oC = function (a, b) {
    this.Nf("onVideoProgress", b)
};
f.TD = function () {
    this.sm()
};
f.sm = function (a, b) {
    this.publish("progresssync", a, b)
};
f.Tz = function (a) {
    var b;
    if (b = 0 < Dv(a, 2))
        this.A && ("embedded" == this.j.da || this.j.bb) && uE(this) ? (er(this), b = !0) : b = !1, b = !b;
    b && (this.pauseVideo(), X(a.j, 32) && this.k.Pj(), this.j.isMobile && Kq(this, !1));
    X(a.state, 128) && (b = a.state, Mq(this), b = b.j, b.message || b.messageKey || (b.messageKey = "YTP_ERROR_GENERIC"), b.message || (b.message = Uf(b.messageKey)), this.publish("onError", mr[b.errorCode] || 5), this.publish("onDetailedError", b));
    this.publish("applicationplayerstatechange", a);
    X(a.state, 2) && (a = this.getVideoData(), a.Na && !a.rb && this.kh(["play_pause"]))
};
f.SD = function (a) {
    !X(a.state, 32) && 0 > Dv(a, 16) && (!X(a.state, 8) || X(a.state, 64) || this.B.ended || X(a.state, 2) || this.Yd());
    this.publish("presentingplayerstatechange", a);
    this.Fc("onStateChange", a);
    a8(this, vs(a.state))
};
function b8(a) {
    qr(a.G);
    qr(a.D);
    a.ib = !1;
    var b = [], c;
    for (c in a.O)
        Lq(a, c) && b.push(c);
    a.O = {};
    0 < b.length && a.publish("controlsenabled", b);
    a.tj();
    a.xa = {};
    a = a.K;
    b = a.k;
    b.A = {};
    b.o = {};
    a.o = !1
}
function U7(a, b) {
    ZI(a.F);
    Nq(a, 1);
    a.Qa("videoplayerreset", b)
}
function V7(a, b, c, d) {
    if (a.B) {
        if ("dataloaded" == b)
            if (BZ(c.T(), d.A), a.C == a.k) {
                a.j.xa || Qp("embedded" == a.j.da);
                var e = X7(a), g;
                if (g = !e)
                    g = nr(a).np && !a.j.isMobile;
                if (g) {
                    var h = "YTP_DEVICE_FALLBACK";
                    ed || $r("iemobile") || $r("xbox") && $r("trident") || $r("nintendo wiiu") || (h = "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH");
                    Cv(a.k, "html5.unsupportedads", h, void 0)
                } else if (g = nr(a), !(g.k || g.Ne || g.Me || g.ea || g.S) || e || Y0(a.k)) {
                    CI(g);
                    e && Y7(a, 6);
                    e = !1;
                    !a.G && H4.Ca(a) && (a.G = new H4(a), a.G && $7(a, a.G), e = !0);
                    try {
                        (h = a.G) && !h.be &&
                        h.Ca(a.mc) && h.create()
                    } catch (k) {
                        Sf(k), a.k && o1(a.k, "ad")
                    }
                    e && (e = a.G, g = nr(a), h = Qq(a), g.subscribe("cuepointupdated", e.tA, e), e.F = g, e = I4(e), null != e && (e.H = h));
                    rr(a);
                    W7(a)
                } else
                    Cv(a.k, "fmt.noneavailable", "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK", void 0)
            } else
                W7(a);
        1 == c.getPlayerType() && (a.getVideoData().vk ? (a.W = $b(a.H), a.kh(["audio"]), h = a.B, h.uk = !0, h.muted = !0) : (Lq(a, "audio") && a.Kj(["audio"]), a.B.uk = !1, a.W && (z7(a, a.W), a.W = null)), h = a.getVideoData(), h.Na && !a.j.Mm ? Cv(a.k, "html5.unsupportedlive", "YTP_DEVICE_FALLBACK",
            void 0) : h.Na && !h.rb ? a.kh(["seek"]) : a.Kj(["seek"]), d.ja || d.Ia || d.C.focEnabled || d.C.rmktEnabled || a.j.jg) && (h = a.getVideoData(), e = 1E3 * h.lengthSeconds, c8(a, "part2viewed", 1, e), c8(a, "engagedview", Math.max(1, 1E3 * h.Ue), e), c8(a, "videoplaytime25", .25 * e, e), c8(a, "videoplaytime50", .5 * e, e), c8(a, "videoplaytime75", .75 * e, e), c8(a, "videoplaytime100", e, 2147483647), c8(a, "conversionview", e, 2147483647));
        a.Qa("videodatachange", b, d, c.getPlayerType())
    }
}
f.Qz = function (a) {
    "newdata" == a && b8(this)
};
f.Uz = function (a, b) {
    var c = this.C.getVideoData();
    a == c && this.Qa("onPlaybackAudioChange", cD(this).name, b)
};
f.WD = function (a, b, c) {
    "newdata" == a ? U7(this, b) : V7(this, a, b, c)
};
f.kC = function (a, b) {
    var c = this.C.getVideoData();
    a == c && this.publish("onPlaybackQualityChange", a.o.video.quality, b)
};
function xr(a, b) {
    if (b.playlistId) {
        var c = F7();
        if (c && !c.list)
            a.Dk();
        else if (c && 0 <= c.index) {
            var d = [];
            D(c.videoIds, function (a) {
                if (a = c.videoData && c.videoData[a])
                    a.video_id = a.id, a.author = a.us, d.push(a)
            });
            Q7(a, {
                videoList: d,
                loop: c.autoPlay,
                index: c.index,
                list: c.list,
                playlist_title: c.listTitle,
                playlist_description: c.listDescription,
                author: c.author,
                fetch: 0
            });
            a.la && d8(a, a.la)
        } else
            Q7(a, {videoList: [b.videoId], list: b.playlistId, fetch: 0}), a.la = null
    }
}
function Q7(a, b) {
    if (a.A) {
        a.A.unsubscribe("error", a.Dk, a);
        ti(a.A);
        a.A = null;
        var c = Vq(a.F, "playlist");
        if (c) {
            var d = a.F;
            if (!d.k || c.Lm(d.k))
                c.destroy(), pb(d.j, c)
        }
    }
    b && (a.A = new KI(b), a.A.subscribe("error", a.Dk, a), a.F && (c = a.F, D([CE.j], c.Do, c)))
}
f.Dk = function () {
    Q7(this, null);
    this.Qa("onPlaylistUpdate")
};
function c8(a, b, c, d) {
    b in a.xa || (c = new ws(c, d, {
        id: b,
        priority: 1
    }), c.Ya.subscribe("onEnter", a.xq, a), c.Ya.subscribe("onExit", a.xq, a), Bs(a.k.C, [c]), a.xa[b] = c)
}
f.xq = function (a) {
    var b = a.getId(), c = nr(this);
    if ("part2viewed" == b)
        c.bf && hg(c.bf), c.Ia && hg(c.Ia);
    else if ("conversionview" == b) {
        var d = this.k;
        d.A && M0(d.A)
    } else
        "engagedview" == b && hg(c.ja);
    c.ka && (d = a.getId(), d = tj(c.ka, {label: d}), hg(d));
    switch (b) {
        case "videoplaytime25":
            c.fe && hg(c.fe);
            hg(c.Vv);
            break;
        case "videoplaytime50":
            c.ge && hg(c.ge);
            hg(c.Xv);
            break;
        case "videoplaytime75":
            c.he && hg(c.he);
            hg(c.$v);
            break;
        case "videoplaytime100":
            c.ee && hg(c.ee), hg(c.Sv)
    }
    this.j.jg && this.j.jg[a.getId()] && (b = this.j.jg[a.getId()],
        c = A(B(b)) ? !1 : -1 != b.search(Ff) || -1 != b.search(Df), hg(b, void 0, c));
    this.k.C.mh(a)
};
function Y7(a, b) {
    b != a.I && (2 == b && (a8(a, -1), a8(a, 5)), a.I = b, a.publish("appstatechange", b))
}
function a8(a, b) {
    a.C && 2 == a.C.getPlayerType() ? a.Ea != b && (a.Ea = b, a.Nf("onAdStateChange", b)) : a.Ia != b && (a.Ia = b, a.Nf("onStateChange", b))
}
function N5(a, b) {
    a.j.experiments.j && a.Lj("controlclicked", {controlClicked: b})
}
f.Zf = function (a, b, c, d) {
    b = 0 != b;
    if (d = Qq(this, d))
        2 == this.I && R7(this), k1(d, a, b, c)
};
f.VD = function (a, b) {
    var c = a.getVideoData();
    if (1 == this.I || 2 == this.I)
        c.startSeconds = b;
    2 == this.I ? R7(this) : this.Qa("seekto", b)
};
f.aA = function () {
    this.Qa("beginseeking")
};
f.DA = function () {
    this.Qa("endseeking")
};
function Eq(a) {
    return a.H.volume
}
f.setVolume = function (a) {
    var b = this.H;
    b.volume = a;
    z7(this, b)
};
function z7(a, b) {
    a.H = b;
    b.volume = Pc(b.volume, 0, 100);
    if (a.j.Pm && !a.j.Wd) {
        var c = {};
        c.volume = isNaN(b.volume) ? tq().volume : Pc(b.volume, 0, 100);
        c.muted = void 0 == b.muted ? tq().muted : b.muted;
        Xi("yt-player-volume", c, 2592E3)
    }
    Lq(a, "audio") ? a.W && (a.W = $b(b), a.Qa("onVolumeChange", b)) : (Z7(a), a.j.Wd || a.Qa("onVolumeChange", b))
}
function Fq(a) {
    var b = a.H;
    b.muted = !0;
    z7(a, b)
}
function Gq(a) {
    var b = a.H;
    b.muted = !1;
    5 > b.volume && (b.volume = 5);
    z7(a, b)
}
function Wq(a, b, c) {
    b.list = b.list || a.list;
    b = new vr(b);
    nr(a).playlistId != b.playlistId && Q7(a, null);
    "detailpage" == a.j.da && xr(a, b);
    return e8(a, b, c)
}
function wr(a, b) {
    a.M && a.M.getVideoData().videoId == b.videoId || (b.Ma = !0, a.M || (a.M = new S0(a.j, 1, a.K, a.o), a.M.ea = a.oa), U0(a.M, b, x(a.lh, a)), $0(a.M, !0))
}
function e8(a, b, c) {
    if (!$H("_start", a.K.j)) {
        var d = a.K.j;
        aI("yt_sts", "p", d);
        WH("_start", void 0, d);
        a.K.info("srt", 0)
    }
    if (a.M && a.M.getVideoData().videoId == b.videoId) {
        d = a.M;
        a.M = null;
        b = d;
        c = a.k;
        var e = a.Aa, g;
        for (g in e)
            c.unsubscribe(g, e[g], a);
        a.k.dispose();
        a.k = b;
        O7(a, b, a.Aa);
        b8(a)
    } else {
        d = Qq(a, c);
        if (!d)
            return !1;
        M(a.Xa);
        Mq(a, c);
        U0(d, b, x(a.lh, a))
    }
    if (!Z0(d))
        return !1;
    if (d == a.k)
        return Y7(a, 1), R7(a);
    j1(d);
    return !0
}
function Bq(a, b, c) {
    c = Qq(a, c);
    b && c == a.k && (c.getVideoData().Zd = !0)
}
function Xq(a, b, c) {
    b.list = b.list || a.list;
    f8(a, new vr(b), c)
}
function f8(a, b, c) {
    var d = Qq(a, c);
    d && (Mq(a, c), U0(d, b, x(a.lh, a)), Z0(d) && (BZ(d.T(), b.A), d == a.k && (Y7(a, 1), S7(a))))
}
function gE(a, b, c, d, e) {
    if (!b && !d)
        throw Error("Playback source is invalid");
    b = {video_id: b, list: d};
    a.j.bb || "detailpage" != a.j.da ? (c = a.K, e = c.k, e
.
    A = {}, e.o = {}, c.o = !1, fI(a.K.j), UH(), d ? (a.S = !1, dr(a, b, void 0, void 0, void 0)) : Wq(a, b, 1)
) :
    (d = new vr(b), d = a.j.getVideoUrl(d, {}),
    (c || {}).lact = tZ(), t("yt.player.exports.navigate")(d, c, !0), a.pn(d, e)
)
}
function dr(a, b, c, d, e) {
    if (ja(b) && !ea(b)) {
        c = "playlist list listType index startSeconds suggestedQuality".split(" ");
        d = {};
        for (e = 0; e < c.length; e++) {
            var g = c[e];
            b[g] && (d[g] = b[g])
        }
        b = d
    } else
        d = {
            index: c,
            startSeconds: d,
            suggestedQuality: e
        }, w(b) && 16 == b.length ? d.list = "PL" + b : d.playlist = b, b = d;
    Q7(a, b);
    b = a.A;
    a = x(a.Sq, a);
    b.Je = a;
    b.ae && L(b.Je, 0)
}
f.Sq = function () {
    var a = ir(this.A);
    if (this.getVideoData().Jg || !this.S) {
        var b = this.getVideoData().Zd, a = e8(this, a);
        b && Bq(this, a)
    } else
        a && f8(this, a)
};
function uE(a) {
    var b = F7();
    return !(!a.A || !RI(a.A) || b && !b.autoPlay)
}
function er(a) {
    if (a.A)
        "detailpage" != a.j.da || a.j.bb ? a.A.ae ? RI(a.A) && e8(a, TI(a.A), 1) : (TI(a.A), a.S = !1) : d8(a, "yt.www.watch.lists.next");
    else if (nE(a.j) && Qq(a, 1).getVideoData().M) {
        var b = Qq(a, 1).getVideoData().M[0], c = b.id || b.video_id || "", d = b.session_data ? mj(b.session_data, "&") : null;
        gE(a, c, d, b.list || void 0)
    }
}
function fr(a) {
    if (a.A)
        if ("detailpage" != a.j.da || a.j.bb)
            if (a.A.ae) {
                var b = a.A;
                (b.ag || 0 <= b.Sa - 1) && e8(a, VI(a.A), 1)
            } else
                VI(a.A), a.S = !1;
        else
            d8(a, "yt.www.watch.lists.prev")
}
function d8(a, b) {
    var c = t(b);
    if (c) {
        var d = F7();
        d && d.list && c();
        a.la = null
    } else
        a.la = b
}
function gr(a, b) {
    a.A && (a.A.ae ? e8(a, ir(a.A, b), 1) : a.S = !1, UI(a.A, b))
}
function F7() {
    var a = t("yt.www.watch.lists.getState");
    return a ? a() : null
}
function jr(a) {
    return a.A && a.A.o ? a.A.o.toString() : null
}
function ar(a) {
    var b = nr(a), c = a.o.xb();
    a = "https://" + GZ(a.j) + "/embed/" + b.videoId;
    b.playlistId && (a = Re(a, {list: b.playlistId}));
    return '<iframe width="' + c.width + '" height="' + c.height + '" src="' + Aa(a) + '" frameborder="0" allowfullscreen></iframe>'
}
function Zq(a, b) {
    var c = null;
    if (b) {
        var d = a.getCurrentTime(1), e = Dq(a, 1);
        10 < d && 10 < e - d && (c = {t: Math.floor(d)})
    }
    return a.j.getVideoUrl(nr(a), null, c)
}
function br(a, b, c, d, e, g) {
    b = {id: b};
    "chapter" == g ? (b.style = "ytp-chapter-marker", b.visible = !0) : isNaN(e) || (b.style = "ytp-ad-progress", b.visible = !0);
    c = new ws(1E3 * c, 1E3 * d, b);
    c.Ya.subscribe("onEnter", a.Oz, a);
    c.Ya.subscribe("onExit", a.Pz, a);
    Bs(a.k.C, [c]);
    cr(a, "cuerangesadded", [c]);
    return !0
}
f.Oz = function (a) {
    this.publish("onCueRangeEnter", a.getId())
};
f.Pz = function (a) {
    this.publish("onCueRangeExit", a.getId())
};
f.Is = function (a, b) {
    var c = Qq(this, b);
    c && (Bs(c.C, a), cr(this, "cuerangesadded", a))
};
f.Ks = function (a, b) {
    var c = Qq(this, b);
    c && (c.C.mh.apply(c.C, a), cr(this, "cuerangesremoved", a))
};
f.zr = function (a, b) {
    var c = Qq(this, b);
    if (c) {
        for (var c = c.C, d = [], e = c.j.j, g = e.length - 1; 0 <= g; g--) {
            var h = e[g];
            if (h.namespace == a) {
                var k = c.k.indexOf(h);
                0 <= k && c.k.splice(k, 1);
                var k = c.j.j, l = yb(k, h, Jr);
                0 <= l && qb(k, l);
                d.push(h)
            }
        }
        c.nc();
        cr(this, "cuerangesremoved", d)
    }
};
f.Ms = function (a) {
    cr(this, "cuerangemarkersupdated", a)
};
f.Ls = function (a, b) {
    var c = Qq(this, b);
    c && o1(c, a)
};
f.Sz = function () {
    this.R || (this.R = gx(this.Aq, this));
    rZ(this.K, g8(this));
    if (!this.ib && "detailpage" == this.j.da) {
        this.ib = !0;
        var a = this.k;
        if (a.S && a.S.j) {
            var b = {}, c = {};
            a.j.videoId && (b.docid = a.j.videoId);
            a.j.playbackId && (b.plid = a.j.playbackId);
            b.cpn = a.j.ya;
            b.ad_cpn = a.S.j;
            var d = y() - a.S.k;
            a.S.o ? c.astv = d : c.actv = d;
            a = {v: 2, s: "youtube", action: "watch,ad2video_html5"};
            c.aft = c.pbs = c.astv || c.actv;
            var d = [], e;
            for (e in c)
                "_" != e.charAt(0) && d.push(e + "." + c[e]);
            a.rt = d.join(",");
            for (var g in b)
                "_" != g.charAt(0) && (a[g] = b[g]);
            b = Of("TIMING_INFO") || {};
            "e" in b && (a.e = b.e);
            "ei" in b && (a.ei = b.ei);
            eI(a)
        }
    }
    if (this.va && (b = this.k, b.A))
        b.A.onError("html5.reboot");
    this.va = !1;
    this.j.experiments.C && uE(this) && (b = ir(this.A, SI(this.A))) && wr(this, b)
};
f.Aq = function (a) {
    a = a.j;
    if (!isNaN(a) && 0 < a && this.k) {
        var b = this.k;
        b.A && 0 < a && (b.A.A.o.aft = [a])
    }
};
function g8(a) {
    var b = y(), c = a.getCurrentTime();
    a = a.getVideoData();
    return b - Math.max(1E3 * (c - a.startSeconds), 0)
}
f.Pq = function (a) {
    "remote" == a ? (2 == this.I && R7(this), Y7(this, 6), qr(this.G)) : this.Nf("onApiChange")
};
f.Qq = function (a) {
    "remote" != a || X7(this) || (this.Yd(), this.pauseVideo());
    this.Nf("onApiChange")
};
f.$A = function () {
    if (!Lq(this, "audio")) {
        var a = {volume: 100 * this.B.volume, muted: this.B.muted};
        this.H = $b(a);
        this.Qa("onVolumeChange", a)
    }
};
function Z7(a) {
    var b = a.j.Wd ? vr.k : a.getVideoData().no;
    a.B.setVolume(a.H.volume * b, a.H.muted)
}
f.JA = function () {
    h8(this, Kh() ? 1 : 0)
};
function h8(a, b) {
    var c = !!b, d = !!a.Va != c;
    a.Va = b;
    if (d) {
        a.o.Gm(c);
        if ("detailpage" == a.j.da && !c && (d = nr(a), Of("VIDEO_ID") != d.videoId)) {
            var e = a.getCurrentTime(), g = {};
            g[d.videoId] = e;
            Xi("yt-player-restore-playhead", g, 172800);
            a.pauseVideo()
        }
        qZ(a.K, "fsc");
        a.j.bb = c;
        a.o.Xe();
        a.Qa("fullscreentoggled", c);
        c = {fullscreen: c, videoId: nr(a).videoId};
        jr(a) && (c.listId = jr(a));
        a.publish("onFullscreenChange", c)
    }
}
f.UD = function () {
    G7(this)
};
f.yB = function () {
    2 != this.Va && h8(this, Kh() ? 1 : 0)
};
f.Ek = function (a) {
    this.Qa("clearvideooverlays", !!a)
};
f.dq = function (a, b) {
    this.Qa("menu_button_add", a, b)
};
f.fq = function (a) {
    this.Qa("menu_button_remove", a)
};
f.gq = function (a) {
    this.Qa("menu_item_add", a)
};
f.hq = function (a) {
    this.Qa("menu_item_remove", a)
};
f.Ki = function (a) {
    this.Qa("menu_show", a)
};
f.YD = function (a) {
    (a = Qq(this, a)) && a.A && r0(a.A.k)
};
f.QD = function (a) {
    this.Qa("liveviewshift", a)
};
function cr(a, b, c) {
    a.publish(b, c);
    var d;
    switch (b) {
        case "cuerangemarkersupdated":
            d = "onCueRangeMarkersUpdated";
            break;
        case "cuerangesadded":
            d = "onCueRangesAdded";
            break;
        case "cuerangesremoved":
            d = "onCueRangesRemoved"
    }
    d && c && a.Rg(d, E(c, xs))
}
f.Rg = function (a, b) {
    if ("onAdStateChange" == a) {
        var c = arguments[1], d = arguments[2], e = arguments[3] || {};
        1 == c && (qZ(this.K, "vr", void 0), this.R || (this.R = gx(this.Aq, this)), C1(this.C), rZ(this.K, g8(this)));
        0 == c && e && (this.k.S = e);
        var g = this.j;
        "leanback" == g.da && g.Db() && (0 == c ? this.ba = this.B : this.ba = d, this.publish("onAdStateChange", c, e.video_id))
    } else
        this.publish.apply(this, arguments)
};
f.Fc = function (a, b) {
    this.F.H.apply(this.F, arguments);
    this.G && this.G.publish.apply(this.G, arguments);
    this.D && this.D.publish.apply(this.D, arguments)
};
f.Yd = function (a) {
    (a = Qq(this, a)) && (2 == this.I ? R7(this) : X(a.getPlayerState(), 2) ? this.Zf(0) : s1(a))
};
f.pauseVideo = function (a) {
    (a = Qq(this, a)) && a.pauseVideo()
};
function Mq(a, b) {
    hx(a.R);
    a.R = 0;
    var c = Qq(a, b);
    c && 1 != a.I && 2 != a.I && (ZI(a.F), 1 == b && qr(a.G), n1(c))
}
function Hq(a, b) {
    if (!Lq(a, "play_pause")) {
        var c = a.V.play_pause ? a.ka : null;
        c ? c.Od("control_play") : a.Yd(b)
    }
}
function Iq(a, b) {
    if (!Lq(a, "play_pause")) {
        var c = a.V.play_pause ? a.ka : null;
        c ? c.Od("control_pause") : a.pauseVideo(b)
    }
}
function y7(a) {
    var b;
    if (b = !Lq(a, "play_pause"))
        (b = !a.j.Qc || 2 != a.I) || (b = XD.hasTags(void 0));
    b && ((b = a.V.play_pause ? a.ka : null) ? b.Od("control_toggle_play_pause") : (b = Qq(a, void 0)) && (us(b.getPlayerState()) ? a.pauseVideo(void 0) : a.Yd(void 0)))
}
function Cq(a, b, c, d, e) {
    if (!Lq(a, "seek")) {
        var g = a.V.seek ? a.ka : null;
        g ? g.Od("control_seek", b) : a.Zf(b, c, d, e)
    }
}
function Kq(a, b) {
    if (a.j.bb != b)
        if (Jh())
            if (b) {
                var c = a.o.N(), d = uh(["requestFullscreen", "requestFullScreen"], c);
                d && d.apply(c)
            } else
                (c = uh(["exitFullscreen", "cancelFullscreen", "cancelFullScreen"], document)) && c.call(document);
        else
            h8(a, b ? 2 : 0)
}
function Gx(a) {
    Kq(a, !a.j.bb)
}
function O5(a, b) {
    Kq(a, !1);
    a.pauseVideo();
    uF(b)
}
function b6(a) {
    var b = a.getVideoData();
    "detailpage" == a.j.da && a.j.bb && Of("VIDEO_ID") == b.videoId ? Kq(a, !1) : O5(a, Zq(a, !0))
}
f.getAdState = function () {
    return this.G ? this.G.getAdState() : -1
};
function G7(a) {
    var b = a.o.kb();
    a.j.Ij = b;
    if (a.B) {
        b = !1;
        if (0 != a.B.readyState && a.C) {
            var c = new H(a.B.videoWidth, a.B.videoHeight), d = a.getVideoData();
            Tc(d.Hh, c) || (d.Hh = c, b = !0)
        }
        c = a.o;
        c = r5(c, c.kb(), q5(c), t5(c), void 0);
        vg(a.Kb, c) || (a.Kb = c, a.j.Bj = c, b = !0);
        b && (a.C && Sq(a.C, "r"), a.publish("resize", a.o.xb()), a.Qa("onResize"))
    }
}
function Lq(a, b) {
    return !(!a.O[b] || !a.O[b].length)
}
f.kh = function (a, b) {
    b = b || M7.k;
    var c = [];
    D(a, function (a) {
        this.O[a] ? 0 > this.O[a].indexOf(b) && this.O[a].push(b) : (this.O[a] = [b], c.push(a))
    }, this);
    0 < c.length && this.publish("controlsdisabled", c)
};
f.Kj = function (a, b) {
    b = b || M7.k;
    var c = [];
    D(a, function (a) {
        if (Lq(this, a)) {
            var e = this.O[a].indexOf(b);
            0 <= e && this.O[a].splice(e, 1);
            0 == this.O[a].length && c.push(a)
        }
    }, this);
    0 < c.length && this.publish("controlsenabled", c)
};
f.Js = function (a, b, c) {
    this.tj();
    this.ka = a;
    b && D(b, function (a) {
        this.V[a] = !0
    }, this);
    c && $I(this.F, a, c)
};
f.tj = function () {
    this.ka = null;
    this.V = {};
    aJ(this.F)
};
function kr(a, b, c, d) {
    if (a.j.Db()) {
        if (a.G && b == a.G.ua)
            return a.G.cg(c, d);
        if (a.D && b == a.D.ua)
            return a.D.cg(c, d)
    }
    c = b && c ? (a = Vq(a.F, b)) ? a.cg(c, d) : null : null;
    return c
}
function lr(a, b) {
    if (!b) {
        var c = bJ(a.F);
        a.j.Db() && (a.G && c.push(a.G.ua), a.D && c.push(a.D.ua));
        return c
    }
    if (a.j.Db()) {
        if (a.G && b == a.G.ua)
            return a.G.dg();
        if (a.D && b == a.D.ua)
            return a.D.dg()
    }
    return bJ(a.F, b)
}
f.JB = function () {
    if (this.j.experiments.o && !this.va) {
        this.va = !0;
        var a = this.getVideoData(), b = Qq(this).getCurrentTime();
        Wq(this, {video_id: a.videoId, start: b, autoplay: 1, splay: 1, resume: 1, feature: "resume"})
    }
};
f.nA = function () {
    this.Qa("CONNECTION_ISSUE")
};
f.PD = function (a) {
    this.Qa("heartbeatparams", a)
};
f.L = function () {
    Vp();
    this.k.dispose();
    this.M && this.M.dispose();
    T7(this);
    this.Ma && Eh(this.Ma);
    Eh(this.lc);
    vi(Pb(this.na), this.A);
    this.ba = null;
    M(this.Xa);
    hx(this.R);
    this.R = 0;
    M7.J.L.call(this)
};
function i8() {
    mx.call(this);
    this.j = [];
    this.o = {}
}
inherit(i8, mx);
ba(i8);
f = i8.prototype;
f.Wh = "button";
f.Ef = null;
f.register = function () {
    ox(this, "click", this.Dw);
    ox(this, "keydown", this.kz);
    ox(this, "keypress", this.lz);
    this.tm.push(Ci("page-scroll", this.Tx, this))
};
f.Dw = function (a) {
    a && !a.disabled && (j8(this, a), this.click(a))
};
f.kz = function (a, b, c) {
    if (!(c.altKey || c.ctrlKey || c.shiftKey) && (b = k8(this, a))) {
        var d = function (a) {
            var b = "";
            a.tagName && (b = a.tagName.toLowerCase());
            return "ul" == b || "table" == b
        }, e;
        d(b) ? e = b : e = be(b, d);
        if (e) {
            e = e.tagName.toLowerCase();
            var g;
            "ul" == e ? g = this.yz : "table" == e && (g = this.xz);
            g && l8(this, a, b, c, x(g, this))
        }
    }
};
f.Tx = function () {
    var a = this.o;
    if (0 != Mb(a))
        for (var b in a) {
            var c = a[b], d = ke(c.activeButtonNode || c.parentNode, nx(this));
            if (void 0 == d || void 0 == c)
                break;
            m8(this, d, c, !0)
        }
};
function l8(a, b, c, d, e) {
    var g = Mw(c), h = 9 == d.keyCode;
    h || 32 == d.keyCode || 13 == d.keyCode ? (d = n8(a, c)) ? (b = Vd(d), "a" == b.tagName.toLowerCase() ? tF(b.href) : Ih(b, "click")
) :
    h && o8(a, b)
:
    g ? 27 == d.keyCode ? (n8(a, c), o8(a, b)) : e(b, c, d) : (a = jh(b, nx(a, "reverse")) ? 38 : 40, d
.
    keyCode == a && (Ih(b, "click"), d.preventDefault())
)
}
f.lz = function (a, b, c) {
    c.altKey || c.ctrlKey || c.shiftKey || (a = k8(this, a), Mw(a) && c.preventDefault())
};
function n8(a, b) {
    var c = nx(a, "menu-item-highlight"), d = Dd(c, b);
    d && lh(d, c);
    return d
}
function p8(a, b, c) {
    N(c, nx(a, "menu-item-highlight"));
    var d = c.getAttribute("id");
    d || (d = nx(a, "item-id-" + ka(c)), c.setAttribute("id", d));
    b.setAttribute("aria-activedescendant", d)
}
f.xz = function (a, b, c) {
    var d = n8(this, b);
    b = sh("table", b);
    var e = sh("tr", b), e = Cd("td", null, e).length;
    b = Cd("td", null, b);
    d = q8(d, b, e, c);
    -1 != d && (p8(this, a, b[d]), c.preventDefault())
};
f.yz = function (a, b, c) {
    if (40 == c.keyCode || 38 == c.keyCode) {
        var d = n8(this, b);
        b = fb(Cd("li", null, b), Mw);
        d = q8(d, b, 1, c);
        p8(this, a, b[d]);
        c.preventDefault()
    }
};
function q8(a, b, c, d) {
    var e = b.length;
    a = db(b, a);
    if (-1 == a)
        if (38 == d.keyCode)
            a = e - c;
        else {
            if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode)
                a = 0
        }
    else
        39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), --a) : 38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e), a += c);
    return a
}
function r8(a, b) {
    var c = b.iframeMask;
    c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = nx(a, "menu-mask"), b.iframeMask = c);
    return c
}
function m8(a, b, c, d) {
    var e = ke(b, nx(a, "group")), g = !!qi(b, "button-menu-ignore-group"), e = e && !g ? e : b, g = 5, h = 4, k = Wg(b);
    if (jh(b, nx(a, "reverse"))) {
        g = 4;
        h = 5;
        k = k.top + "px";
        try {
            c.style.maxHeight = k
        } catch (l) {
        }
    }
    jh(b, "flip") && (jh(b, nx(a, "reverse")) ? (g = 6, h = 7): (g = 7, h = 6));
    var p;
    qi(b, "button-has-sibling-menu") ? p = Lg(e) : qi(b, "button-menu-root-container") && (p = s8(b));
    bd && !od("8") && (p = null);
    var r;
    p && (r = Wg(p), r = new rg(-r.top, r.left, r.top, -r.left));
    p = new Qc(0, 1);
    jh(b, nx(a, "center-menu")) && (p.x -= Math.round((Ug(c).width - Ug(b).width) /
    2));
    d && (p.y += Hd(document).y);
    if (a = r8(a, b))
        b = Ug(c), a.style.width = b.width + "px", a.style.height = b.height + "px", G5(e, g, a, h, p, r), d && Bg(a, "position", "fixed");
    G5(e, g, c, h, p, r)
}
function s8(a) {
    if (qi(a, "button-menu-root-container")) {
        var b = qi(a, "button-menu-root-container");
        return ke(a, b)
    }
    return document.body
}
f.ju = function (a) {
    if (a) {
        var b = k8(this, a);
        if (b) {
            a.setAttribute("aria-pressed", "true");
            a.setAttribute("aria-expanded", "true");
            b.originalParentNode = b.parentNode;
            b.activeButtonNode = a;
            b.parentNode.removeChild(b);
            var c;
            qi(a, "button-has-sibling-menu") ? c = a.parentNode : c = s8(a);
            c.appendChild(b);
            b.style.minWidth = a.offsetWidth - 2 + "px";
            var d = r8(this, a);
            d && c.appendChild(d);
            (c = !!qi(a, "button-menu-fixed")) && (this.o[ph(a).toString()] = b);
            m8(this, a, b, c);
            Gi("yt-uix-button-menu-before-show", a, b);
            Nw(b);
            this.k(a, "button-menu-action",
                !0);
            N(a, nx(this, "active"));
            b = x(this.cq, this, a, !1);
            c = x(this.cq, this, a, !0);
            d = x(this.vD, this, a, void 0);
            this.Ef && k8(this, this.Ef) == k8(this, a) || this.Ef && o8(this, this.Ef);
            Fi("yt-uix-button-menu-show", a);
            Eh(this.j);
            this.j = [Q(document, "click", c), Q(document, "contextmenu", b), Q(window, "resize", d)];
            this.Ef = a
        }
    }
};
function o8(a, b) {
    if (b) {
        var c = k8(a, b);
        if (c) {
            a.Ef = null;
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-expanded", "false");
            b.removeAttribute("aria-activedescendant");
            Ow(c);
            a.k(b, "button-menu-action", !1);
            var d = r8(a, b), e = ph(c).toString();
            delete a.o[e];
            L(function () {
                d && d.parentNode && d.parentNode.removeChild(d);
                c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = null, c.activeButtonNode = null)
            }, 1)
        }
        var e = ke(b, nx(a, "group")), g = [nx(a, "active")];
        e && g.push(nx(a, "group-active"));
        mh(b, g);
        Fi("yt-uix-button-menu-hide", b);
        Eh(a.j);
        a.j.length = 0
    }
}
f.vD = function (a, b) {
    var c = k8(this, a);
    if (c) {
        b && (c.innerHTML = b);
        var d = !!qi(a, "button-menu-fixed");
        m8(this, a, c, d)
    }
};
f.getContent = function (a) {
    return Dd(nx(this, "content"), a)
};
f.cq = function (a, b, c) {
    c = c || window.event;
    c = c.target || c.srcElement;
    3 == c.nodeType && (c = c.parentNode);
    var d = ke(c, nx(this));
    if (d) {
        var d = k8(this, d), e = k8(this, a);
        if (d == e)
            return
    }
    var d = ke(c, nx(this, "menu")), e = d == k8(this, a), g = jh(c, nx(this, "menu-item")), h = jh(c, nx(this, "menu-close"));
    if (!d || e && (g || h))
        if (o8(this, a), d && b && qi(a, "button-menu-indicate-selected")) {
            if (a = Dd(nx(this, "content"), a))
                vd && "innerText" in c ? b = c.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (b = [], ie
            (c, b,
            !0
        ),
            b = b.join("")
        ),
            b = b.replace(/ \xAD /g, " ").replace(/\xAD/g,
                ""), b = b.replace(/\u200B/g, ""), vd || (b = b.replace(/ +/g, " ")), " " != b && (b = b.replace(/^\s*/, "")), ae(a, b);
            t8(this, d, c)
        }
};
function t8(a, b, c) {
    var d = nx(a, "menu-item-selected");
    a = Bd(d, b);
    D(a, function (a) {
        lh(a, d)
    });
    N(c.parentNode, d)
}
function k8(a, b) {
    if (!b.widgetMenu) {
        var c = qi(b, "button-menu-id"), c = c && Ad(c), d = nx(a, "menu");
        c ? kh(c, [d, nx(a, "menu-external")]) : c = Dd(d, b);
        b.widgetMenu = c
    }
    return b.widgetMenu
}
function j8(a, b) {
    if (qi(b, "button-toggle")) {
        var c = ke(b, nx(a, "group")), d = nx(a, "toggled"), e = jh(b, d);
        if (c && qi(c, "button-toggle-group")) {
            var g = qi(c, "button-toggle-group"), c = Bd(nx(a), c);
            D(c, function (a) {
                a != b || "optional" == g && e ? (lh(a, d), a.removeAttribute("aria-pressed")) : (N(b, d), a.setAttribute("aria-pressed", "true"))
            })
        } else
            e ? b.removeAttribute("aria-pressed") : b.setAttribute("aria-pressed", "true"), nh(b, d)
    }
}
f.click = function (a) {
    if (k8(this, a)) {
        var b = k8(this, a), c = ke(b.activeButtonNode || b.parentNode, nx(this));
        c && c != a ? (o8(this, c), L(x(this.ju, this, a), 1)) : Mw(b) ? o8(this, a) : this.ju(a);
        a.focus()
    }
    this.k(a, "button-action")
};
sx(i8);
sx(w6);
t("yt.tracking.share") || q("yt.tracking.share", FE, void 0);
t("yt.net.ping") || q("yt.net.ping.send", hg, void 0);
t("yt.window.popup") || (q("yt.window.popup", vF, void 0), q("yt.window.open", uF, void 0));
q("yt.player.Application.create", M7.create, void 0);
q("yt.player.Application.createWebComponent", M7.o, void 0);
