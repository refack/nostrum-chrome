function JE(a, b) {
    var c = {a: "spacecast", module: "cache", request: "meta", status: a};
    cc(c, b);
    EE(Pe(c))
}
GE.prototype.L = function () {
    this.j = null;
    GE.J.L.call(this)
};
function LE(a) {
    R.call(this);
    (this.j = a) && KE("//" + a)
}
inherit(LE, R);
function IE(a) {
    var b;
    (b = (b = Zi("yt-spacecast-uri")) && b.hasOwnProperty("uri") ? b.uri : null) ? "__notfound__" == b && (b = null) : b = a.j ? "//" + a.j : null;
    return b
}
function KE(a) {
    var b = Zi("yt-spacecast-uri");
    b || (b = {});
    a ? b.uri = a : delete b.uri;
    Xi("yt-spacecast-uri", b)
}

function ME() {
    R.call(this);
    this.k = this.j = null
}
inherit(ME, R);
ba(ME);
ME.prototype.init = function (a) {
    this.j || (this.j = new LE(a || null), this.k = new GE(this.j))
};
ME.prototype.L = function () {
    this.k && (this.k.dispose(), this.k = null);
    this.j && (this.j.dispose(), this.j = null);
    ME.J.L.call(this);
    delete ME.Cb
};
function NE(a) {
    Is.call(this, a);
    this.sc = this.ua = "spacecast";
    this.k = null
}
inherit(NE, Is);
f = NE.prototype;
f.Ca = function () {
    return !!this.j.getVideoData().ib
};
function OE(a) {
    return a.getVideoData().ib ? new NE(a) : null
}
f.create = function () {
    NE.J.create.call(this);
    var a = this.j.getVideoData().ib, b = ME.getInstance();
    b && b.init(a);
    this.k = b;
    this.load()
};
f.destroy = function () {
    NE.J.destroy.call(this);
    this.k = null
};
f.load = function () {
    NE.J.load.call(this);
    var a = this.j.getVideoData().videoId, b = this.k.k, c = y(), c = x(this.oy, this, a, c), d = window.spacecastMeta;
    d && d.id && d.id == a ? (c(d), JE("prefetch", {v: a})) : HE(b, a, c)
};
f.oy = function (a, b, c) {
    b = y() - b;
    var d = 0;
    if (c) {
        var e = c.id;
        c = c.fmt_list;
        if (e && c) {
            var g = {};
            D(c, function (a) {
                a.itag && (g[a.itag.toString()] = !0)
            });
            if (c = PE(this, IE(this.k.j), e, g))
                d = this.j.getVideoData(), d.ea = c, QE(d), this.j.zn("auto"), d = 1
        }
    }
    Ms(this);
    EE(Pe({a: "spacecast", module: "player", v: a, docid: a, cached: d, "cache-latency": b}))
};
function PE(a, b, c, d) {
    if (!b)
        return null;
    a = a.j.getVideoData();
    a = pj(a.Ne);
    a = fb(a, function (a) {
        return !!d[a.itag]
    });
    if (!a.length)
        return null;
    var e = rj(b) || "", g = Number(Fe(b)[4] || null) || null;
    return E(a, function (a) {
        var b = K(K($e(Ze(sf(a.url), e), g), "orig_host", sj(a.url)), "scid", c);
        a.url = b.toString();
        return Pe(a)
    }).join(",")
}

function RE() {
    var a = Uc, b;
    if (b = Zt())
        t: {
            if (navigator.plugins && 0 < navigator.plugins.length)
                for (b = 0; b < navigator.plugins.length; b++)
                    if (0 <= navigator.plugins[b].name.indexOf("NVIDIA 3D Vision")) {
                        b = !0;
                        break t
                    }
            b = !1
        }
    if (b)
        t: {
            var c = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
            if (c && 1 < c.length && 4 <= c[1]) {
                c = document.createElement("embed");
                c.setAttribute("id", "NvImageDetectionFFID");
                c.setAttribute("style", "visibility: hidden");
                c.setAttribute("width", 25);
                c.setAttribute("height", 25);
                c.setAttribute("type", "image/jps");
                Qd(document.documentElement, c);
                c = Ad("NvImageDetectionFFID");
                try {
                    if (null != c) {
                        b = 27527 <= c.NvGetDriverVersion();
                        break t
                    }
                } catch (d) {
                }
            }
            b = !1
        }
    return b || !(!a || -1 == a.indexOf("Sony"))
}

function SE(a) {
    Pz.call(this);
    this.label = Z(0, "YTP_THREED_SHORT");
    this.element = new Tz(a, [Z(0, "YTP_OFF"), Z(0, "YTP_ON")]);
    S(this, this.element);
    this.element.gb(this.label);
    Vz(this.element, 2100);
    this.priority = 10;
    this.B = !0;
    this.Ba(0)
}
inherit(SE, Pz);
SE.prototype.G = function () {
    this.element.Vb("select")
};
SE.prototype.getSelected = function () {
    return this.element.getSelected()
};
SE.prototype.Ba = function (a) {
    this.element.Ba(a)
};
function TE(a) {
    Y.call(this, ["span"]);
    this.element.innerHTML = a
}
inherit(TE, Y);
function UE(a) {
    var b = ["div", ["ytp-dialog", "html5-stop-propagation"], ["div", "ytp-dialog-title", Z(0, "YTP_THREED_HTML5_WARNING_DIALOG_TITLE")], ["div", "ytp-dialog-body", "{{content}}"], ["div", "ytp-dialog-buttons", "{{buttons}}"]];
    Y.call(this, b);
    b = Z(0, "YTP_THREED_HTML5_WARNING_DIALOG_CHANGE_MODE");
    this.j = new Qz(a, "ytp-dialog-button", b);
    S(this, this.j);
    this.j.ta(b);
    b = Z(0, "YTP_CLOSE");
    this.k = new Qz(a, "ytp-dialog-button", b);
    this.k.ta(b);
    S(this, this.k);
    this.template.update({
        content: new TE(Z(0, "YTP_THREED_HTML5_WARNING_DIALOG_MESSAGE",
            {BEGIN_LINK: '<a href="//support.google.com/youtube/bin/answer.py?answer=1229982">', END_LINK: "</a>"})),
        buttons: [this.j, this.k]
    })
}
inherit(UE, oB);
function VE(a) {
    Is.call(this, a);
    Tf({
        YTP_THREED_HTML5_WARNING_DIALOG_TITLE: "No HTML5 3D hardware detected",
        YTP_THREED_HTML5_WARNING_DIALOG_MESSAGE: "Get $BEGIN_LINKhelp setting up HTML5 3D$END_LINK, or change 3D viewing modes.",
        YTP_THREED_HTML5_WARNING_DIALOG_CHANGE_MODE: "Change 3D viewing mode"
    });
    this.k = new SE(Ys(this));
    S(this, this.k);
    this.k.Ba(1);
    this.k.listen("change", this.aF, this);
    this.k.listen("select", this.bF, this);
    this.o = new UE(Ys(this));
    S(this, this.o);
    this.o.j.listen("click", this.xo, this);
    this.o.k.listen("click",
        this.Eg, this)
}
inherit(VE, Is);
f = VE.prototype;
f.Km = "threeDModuleData";
f.ua = "threed";
f.sc = "threed";
f.create = function () {
    WE(this.j.app, void 0);
    at(this, this.k);
    VE.J.create.call(this)
};
f.destroy = function () {
    bt(this, this.k);
    WE(this.j.app, !0);
    VE.J.destroy.call(this)
};
function XE(a) {
    return VE.prototype.Ca(a) ? new VE(a) : null
}
f.Ca = function (a) {
    a = a.getVideoData();
    return RE() ? !!a.na || !!a.ds : !1
};
function YE(a, b) {
    if (a.j.getVideoData().eh != b)
        if (Os(a), RE()) {
            var c = a.j.app, d = Qq(c);
            d.j.j && d.j.j.j || (d.j.eh = !d.j.eh, QE(d.j), Sq(d, "r"));
            WE(c)
        } else
            b && (Os(a, a.o), a.k.Ba(0), ct(a))
}
f.xo = function () {
    Ps(this, "/select_3d_mode?video_id=" + this.j.getVideoData().videoId)
};
f.aF = function () {
    1 == this.k.getSelected() ? YE(this, !0) : YE(this, !1)
};
f.bF = function () {
    ct(this);
    this.xo()
};
function ZE(a) {
    Pz.call(this);
    this.j = 2;
    this.label = Z(0, "YTP_THREED_SHORT");
    this.menu = new zB(a, x(this.k, this), x(this.C, this));
    S(this, this.menu);
    this.element = new uB(a, Z(0, "YTP_WEBGL_ANAGLYPH"), this.menu);
    S(this, this.element);
    wB(this.element, 100);
    AB(this.menu, [0, 1, 2]);
    a = 2100;
    DB(this.menu, a++);
    a = a++;
    Sz(this.element.j, a);
    $E(this, this.j);
    this.priority = 1;
    this.A = !0
}
inherit(ZE, Pz);
function $E(a, b) {
    a.j = b;
    a.menu.Ba(b);
    a.element.Qd(a.k(b))
}
ZE.prototype.k = function (a) {
    switch (a) {
        case 0:
            return Z(0, "YTP_OFF");
        case 1:
            return Z(0, "YTP_WEBGL_3D_2D");
        case 2:
            return Z(0, "YTP_WEBGL_3D_ANAGLYPH")
    }
    return "."
};
ZE.prototype.C = function (a) {
    this.element.ce();
    $E(this, a);
    this.element.Vb("change")
};
function aF(a, b, c) {
    this.B = null;
    this.A = -1;
    this.o = a.getVideoData().la;
    0 != this.o || "LR" != a.getVideoData().vc("yt3d:enable") && "true" != a.getVideoData().vc("yt3d:enable") || (this.o = 1);
    this.j = new ZE(a.app.o.k);
    this.j.listen("change", this.qF, this);
    this.j.listen("change", c, this);
    this.k = null;
    this.C = !0;
    at(b, this.j);
    S(b, this.j)
}
function bF(a) {
    if (RE())
        return !1;
    a = a.getVideoData();
    var b;
    (b = 1 == a.la || 2 == a.la) || (b = a.vc["3D"]) || (a = a.vc("yt3d:enable"), b = "true" == a || "LR" == a || "RL" == a);
    return b ? !0 : !1
}
f = aF.prototype;
f.mi = function () {
    return "attribute vec3 aVertPos;attribute vec2 aTexCrd;varying vec2 vTexCrd;void main(void) {  vTexCrd = aTexCrd;  gl_Position = vec4(aVertPos, 1.0);}"
};
f.ii = function () {
    return "precision mediump float;\nuniform sampler2D uSplr;\nuniform int mode;\nvarying vec2 vTexCrd;\nuniform mat4 mLt;\nuniform mat4 mRt;\nvoid anaglyph(float x, float y) {\n  x *= 0.5;\n  vec4 cLt = texture2D(uSplr, vec2(x, y));\n  vec4 cRt = texture2D(uSplr, vec2(0.5 + x, y));\n  gl_FragColor = mLt * cLt + mRt * cRt;\n}\nvoid main(void) {\n  if (mode == 2)\n    anaglyph(vTexCrd.x, vTexCrd.y);\n  else if (mode == 0)\n    gl_FragColor = texture2D(uSplr, vTexCrd);\n  else if (mode == 1)\n    gl_FragColor = texture2D(uSplr, vec2(vTexCrd.x * 0.5, vTexCrd.y));\n}"
};
f.Ri = function (a, b) {
    b.j = a.getUniformLocation(b, "uSplr");
    a.uniform1i(b.j, 0);
    this.A = a.getAttribLocation(b, "aTexCrd");
    a.enableVertexAttribArray(this.A);
    this.k = a.getUniformLocation(b, "mode");
    a.uniform1i(this.k, this.j.j);
    var c = 1 == this.o;
    a.uniformMatrix4fv(a.getUniformLocation(b, c ? "mLt" : "mRt"), !1, new Float32Array([.456, -.04, -.015, 0, .5, -.038, -.021, 0, .176, -.016, -.005, 0, 0, 0, 0, 1]));
    a.uniformMatrix4fv(a.getUniformLocation(b, c ? "mRt" : "mLt"), !1, new Float32Array([-.043, .378, -.072, 0, -.088, .734, -.113, 0, 0, -.018, 1.226,
        0, 0, 0, 0, 1]))
};
f.Pi = function (a) {
    var b = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, b);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), a.STATIC_DRAW);
    b.j = 2;
    b.Mi = 4;
    this.B = b
};
f.Qi = function (a) {
    a.bindBuffer(a.ARRAY_BUFFER, this.B);
    a.vertexAttribPointer(this.A, this.B.j, a.FLOAT, !1, 0, 0)
};
f.Xj = function () {
};
f.Wj = function () {
};
f.Vj = function () {
};
f.$h = function (a, b) {
    this.C && a.uniform1i(this.k, this.j.j);
    a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
    a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
};
f.Yi = function () {
    return !0
};
f.gj = function () {
    return !1
};
f.qF = function () {
    this.C = !0
};
f.destroy = function (a) {
    bt(a, this.j)
};
function cF() {
    this.j = new Float32Array(16);
    this.o = new Float32Array(16);
    this.k = new Float32Array(16);
    this.identity()
}
cF.prototype.identity = function () {
    this.j.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
};
cF.prototype.get = function () {
    return this.j
};
function dF(a, b) {
    for (var c = 0; 16 > c; c += 4)
        a.k[c + 0] = a.j[c + 0] * b[0] + a.j[c + 1] * b[4] + a.j[c + 2] * b[8] + a.j[c + 3] * b[12], a.k[c + 1] = a.j[c + 0] * b[1] + a.j[c + 1] * b[5] + a.j[c + 2] * b[9] + a.j[c + 3] * b[13], a.k[c + 2] = a.j[c + 0] * b[2] + a.j[c + 1] * b[6] + a.j[c + 2] * b[10] + a.j[c + 3] * b[14], a.k[c + 3] = a.j[c + 0] * b[3] + a.j[c + 1] * b[7] + a.j[c + 2] * b[11] + a.j[c + 3] * b[15];
    c = a.j;
    a.j = a.k;
    a.k = c
}

function eF() {
    this.C = new cF;
    this.I = this.H = this.K = this.G = this.M = null;
    this.j = .872;
    this.D = !0;
    this.B = 3.14;
    this.F = this.A = this.o = 0;
    this.k = null
}
function fF(a) {
    if (!a.k)
        return !1;
    for (var b in a.k.j) {
        var c = a.k.j[b].info.video;
        if (c && 2 == c.projectionType)
            return !0
    }
    return !1
}
f = eF.prototype;
f.mi = function () {
    return "attribute vec3 aVertPos;\nvarying vec3 pos;\nvoid main() {\n  gl_Position = vec4(aVertPos.xyz, 1.0);\n  pos = aVertPos;\n}"
};
f.ii = function () {
    return "precision mediump float;varying vec3 pos;uniform sampler2D uSplr;uniform mat4 uVMat;uniform float uFOVx;uniform float uFOVy;\n#define INV_PI 0.3183\nvoid main() {  vec3 ray = vec3(sin(pos.x * uFOVx), sin(pos.y * uFOVy),                  -cos(pos.x * uFOVx));  ray = (uVMat * vec4(ray, 1.0)).xyz;  ray = normalize(ray);  vec2 texCrd = vec2(0.5 - atan(ray.x, ray.z) * INV_PI * 0.5,                     acos(ray.y) * INV_PI);  gl_FragColor = vec4(texture2D(uSplr, texCrd).xyz, 1.0);}"
};
f.Ri = function (a, b, c) {
    this.M = a.getUniformLocation(b, "uVMat");
    this.H = a.getUniformLocation(b, "uFOVx");
    this.I = a.getUniformLocation(b, "uFOVy");
    this.K = a.getUniformLocation(b, "uSplr");
    a.uniform1i(this.K, 0);
    this.k = new Y(["span", "webgl-pan-button"]);
    this.k.Y(c);
    this.k.listen("mousedown", this.iB.bind(this));
    this.k.listen("mouseup", this.jB.bind(this));
    this.k.listen("click", this.hB.bind(this))
};
f.Pi = function (a) {
    this.G = a.createBuffer();
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.G);
    a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 2, 3]), a.STATIC_DRAW)
};
f.Qi = function () {
};
f.hB = function (a) {
    a.stopPropagation()
};
f.iB = function (a) {
    a.offsetX > a.offsetY ? this.k.N().offsetWidth - a.offsetX > a.offsetY ? gF(this, 1) : gF(this, 4) : this.k.N().offsetHeight - a.offsetY < a.offsetX ? gF(this, 2) : gF(this, 3)
};
f.jB = function () {
    this.A = 0
};
var hF = {65: 3, 97: 3, 68: 4, 100: 4, 87: 1, 119: 1, 83: 2, 115: 2, 187: 5, 107: 5, 109: 6, 189: 6};
f = eF.prototype;
f.Wj = function (a) {
    a = hF[a.keyCode];
    void 0 != a && gF(this, a)
};
function gF(a, b) {
    0 == a.A && (a.F = Date.now());
    a.A = b
}
f.Xj = function () {
    this.A = 0
};
f.Vj = function (a, b) {
    this.B += 3.1415 * a * this.j;
    this.o += 3.1415 * b * this.j;
    this.D = !0
};
f.$h = function (a, b, c, d) {
    if (0 != this.A) {
        c = Date.now();
        var e = .003 * this.j * (c - this.F);
        switch (this.A) {
            case 3:
                this.B += e;
                break;
            case 4:
                this.B -= e;
                break;
            case 1:
                this.o += e;
                break;
            case 2:
                this.o -= e;
                break;
            case 6:
                this.j += e;
                this.j = Math.min(this.j, 1.05);
                break;
            case 5:
                this.j -= e, this.j = Math.max(this.j, .32)
        }
        this.F = c;
        this.D = !0
    }
    if (this.D) {
        a.uniform1f(this.H, this.j);
        a.uniform1f(this.I, this.j / Gw);
        this.o = Pc(this.o, -1.57075, 1.57075);
        this.C.identity();
        c = this.C;
        var g = this.o, e = Math.sin(g), g = Math.cos(g);
        c.o.set([1, 0, 0, 0, 0, g, e, 0, 0, -e,
            g, 0, 0, 0, 0, 1]);
        dF(c, c.o);
        c = this.C;
        g = this.B;
        e = Math.sin(g);
        g = Math.cos(g);
        c.o.set([g, 0, -e, 0, 0, 1, 0, 0, e, 0, g, 0, 0, 0, 0, 1]);
        dF(c, c.o);
        a.uniformMatrix4fv(this.M, !1, this.C.get());
        this.D = !1
    }
    a.clearColor(0, 0, 0, 1);
    a.clear(a.DEPTH_BUFFER_BIT | a.COLOR_BUFFER_BIT);
    a.activeTexture(a.TEXTURE0);
    a.bindTexture(a.TEXTURE_2D, d);
    a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.G);
    a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0)
};
f.Yi = function () {
    return !1
};
f.gj = function () {
    return 0 != this.A
};
f.destroy = function () {
    this.k && this.k.dispose()
};
function iF() {
    this.k = null;
    this.j = -1
}
f = iF.prototype;
f.mi = function () {
    return "attribute vec3 aVertPos;\nattribute vec2 aTexCrd;\nvarying vec2 vTexCrd;\nvoid main(void) {\n  vTexCrd = aTexCrd;\n  gl_Position = vec4(aVertPos, 1.0);\n}"
};
f.ii = function () {
    return "precision mediump float;\nuniform sampler2D uSplr;\nvarying vec2 vTexCrd;\nvoid main(void) {\n  gl_FragColor = texture2D(uSplr, vTexCrd);\n}"
};
f.Ri = function (a, b) {
    b.j = a.getUniformLocation(b, "uSplr");
    a.uniform1i(b.j, 0);
    this.j = a.getAttribLocation(b, "aTexCrd");
    a.enableVertexAttribArray(this.j)
};
f.Pi = function (a) {
    var b = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, b);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), a.STATIC_DRAW);
    b.j = 2;
    b.Mi = 4;
    this.k = b
};
f.Qi = function (a) {
    a.bindBuffer(a.ARRAY_BUFFER, this.k);
    a.vertexAttribPointer(this.j, this.k.j, a.FLOAT, !1, 0, 0)
};
f.Xj = function () {
};
f.Wj = function () {
};
f.Vj = function () {
};
f.$h = function (a, b) {
    a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
    a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
};
f.Yi = function () {
    return !0
};
f.gj = function () {
    return !1
};
f.destroy = function () {
};
function jF() {
    this.A = null;
    this.o = -1;
    this.j = 43758.5453;
    this.k = null
}
f = jF.prototype;
f.mi = function () {
    return "attribute vec3 aVertPos;\nattribute vec2 aTexCrd;\nvarying vec2 vTexCrd;\nvoid main(void) {\n  vTexCrd = aTexCrd;\n  gl_Position = vec4(aVertPos, 1.0);\n}"
};
f.ii = function () {
    return "precision mediump float;\nuniform sampler2D uSplr;\nuniform float seed;\nvarying vec2 vTexCrd;\nfloat noise(float n)\n{\n    return fract(sin(n) * seed);\n}\nvoid main(void) {\n  vec4 col = vec4(texture2D(uSplr,\n      vec2(vTexCrd.x, 1.0 - vTexCrd.y)).xyz, 1.0);\n  float amt = 0.035;\n  float maxCol = max(max(col.x, col.y), col.z);\n  amt = amt * smoothstep(0.0, 0.1, maxCol);\n  amt = amt * smoothstep(0.0, 0.1, 1.0 - maxCol);\n  float noiseL = noise(gl_FragCoord.x + gl_FragCoord.y * 2000.0) * amt;\n  col.xyz = col.xyz + noiseL;\n  gl_FragColor = col;\n}"
};
f.Ri = function (a, b) {
    b.j = a.getUniformLocation(b, "uSplr");
    a.uniform1i(b.j, 0);
    this.k = a.getUniformLocation(b, "seed");
    a.uniform1f(this.k, this.j);
    this.o = a.getAttribLocation(b, "aTexCrd");
    a.enableVertexAttribArray(this.o)
};
f.Pi = function (a) {
    var b = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, b);
    a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), a.STATIC_DRAW);
    b.j = 2;
    b.Mi = 4;
    this.A = b
};
f.Qi = function (a) {
    a.bindBuffer(a.ARRAY_BUFFER, this.A);
    a.vertexAttribPointer(this.o, this.A.j, a.FLOAT, !1, 0, 0)
};
f.Xj = function () {
};
f.Wj = function () {
};
f.Vj = function () {
};
f.$h = function (a, b) {
    this.j += 1;
    a.uniform1f(this.k, this.j);
    a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
    a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
};
f.Yi = function () {
    return !0
};
f.gj = function () {
    return !1
};
f.destroy = function () {
};
function kF(a, b, c, d) {
    this.S = c;
    this.o = a.app.o.j;
    this.G = 10;
    this.B = !0;
    this.O = this.K = this.M = this.A = this.k = null;
    this.D = b;
    this.j = null;
    this.R = a;
    this.I = d;
    this.F = this.C = -1;
    this.H = !1
}
function lF(a) {
    a.k = document.createElement("canvas");
    if (!a.k)
        return 1;
    a.S.appendChild(a.k);
    try {
        a.A = a.k.getContext("webgl")
    } catch (b) {
        return 2
    }
    if (null == a.A)
        return 3;
    mF(a);
    var c = nF(a);
    if (0 != c)
        return c;
    a.k.addEventListener("click", a.mF.bind(a), !0);
    a.k.addEventListener("mousedown", a.nF.bind(a));
    a.k.addEventListener("mousemove", a.oF.bind(a));
    a.k.addEventListener("mouseup", a.pF.bind(a));
    var c = a.A, d = c.createBuffer();
    c.bindBuffer(c.ARRAY_BUFFER, d);
    c.bufferData(c.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 1, -1,
        0, -1, 1, 0, 1, 1, 0]), c.STATIC_DRAW);
    a.K = d;
    a.j.Pi(c);
    c = a.A;
    d = c.createTexture();
    c.bindTexture(c.TEXTURE_2D, d);
    c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
    c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR);
    c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
    c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
    a.M = d;
    c = a.A;
    c.clearColor(0, 0, 0, 1);
    c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
    c.bindBuffer(c.ARRAY_BUFFER, a.K);
    c.vertexAttribPointer(a.P, 3, c.FLOAT,
        !1, 0, 0);
    c.activeTexture(c.TEXTURE0);
    c.bindTexture(c.TEXTURE_2D, a.M);
    a.j.Qi(c);
    a.Nd();
    a.o.crossOrigin = "use-credentials";
    return 0
}
function nF(a) {
    var b = a.A, c = b.createShader(b.VERTEX_SHADER);
    b.shaderSource(c, a.j.mi());
    b.compileShader(c);
    if (!b.getShaderParameter(c, b.COMPILE_STATUS))
        return 4;
    var d = b.createShader(b.FRAGMENT_SHADER);
    b.shaderSource(d, a.j.ii());
    b.compileShader(d);
    if (!b.getShaderParameter(c, b.COMPILE_STATUS))
        return 5;
    var e = b.createProgram();
    b.attachShader(e, c);
    if (1 != b.getProgramParameter(e, b.ATTACHED_SHADERS))
        return 6;
    b.attachShader(e, d);
    if (2 != b.getProgramParameter(e, b.ATTACHED_SHADERS))
        return 7;
    b.linkProgram(e);
    if (0 ==
        b.getProgramParameter(e, b.LINK_STATUS))
        return 8;
    b.validateProgram(e);
    b.useProgram(e);
    if (0 == b.getProgramParameter(e, b.VALIDATE_STATUS))
        return 9;
    a.P = b.getAttribLocation(e, "aVertPos");
    b.enableVertexAttribArray(a.P);
    a.O = e;
    a.j.Ri(b, a.O, a.S);
    return 0
}
f = kF.prototype;
f.Nd = function () {
    this.A && (this.o.videoWidth || this.o.videoHeight) && (mF(this), this.j.$h(this.A, this.o, this.K, this.M));
    (this.B || this.j.gj()) && requestAnimationFrame(this.Nd.bind(this))
};
function mF(a) {
    if (0 == a.G && null != a.o.offsetParent) {
        if (a.j.Yi())
            var b = a.o.offsetWidth, c = a.o.offsetHeight, d = a.o.offsetTop;
        else
            b = a.o.offsetParent.offsetWidth, d = a.o.offsetParent.offsetHeight;
        c = 9 * b / 16;
        a.k.top = d;
        a.k.width = b;
        a.k.height = c;
        a.A.k = b;
        a.A.j = c;
        a.A.viewport(0, 0, b, c)
    }
}
f.mF = function (a) {
    this.H && (a.stopPropagation(), this.H = !1)
};
f.nF = function (a) {
    this.C = a.x;
    this.F = a.y
};
f.oF = function (a) {
    -1 != this.C && this.j && (this.j.Vj((a.x - this.C) / this.k.width, (a.y - this.F) / this.k.height), this.C = a.x, this.F = a.y, this.H = !0, this.B || requestAnimationFrame(this.Nd.bind(this)))
};
f.pF = function () {
    this.F = this.C = -1
};
f.GB = function () {
    this.B || requestAnimationFrame(this.Nd.bind(this));
    ct(this.I)
};
function oF(a) {
    a.k && (Sd(a.k), a.k = null);
    a.A = null;
    a.B = !1;
    a.j && a.j.destroy(a.I);
    a.j = null;
    a.o.removeAttribute("crossorigin");
    a.o.hidden = !1;
    a.G = 10
}

function pF(a) {
    Is.call(this, a);
    this.Uj = !0;
    this.ua = "webgl";
    this.subscribe("onResize", this.fF, this);
    this.subscribe("onKeyPress", this.dF, this);
    this.subscribe("onKeyDown", this.cF, this);
    this.subscribe("onKeyUp", this.eF, this);
    this.subscribe("onStateChange", this.Ui, this);
    this.B = I("DIV", qF.vu);
    Ns(this, this.B);
    this.A = a;
    a = window.localStorage["yt-html5-player-module-webgl-shadertype"];
    if (void 0 == a || null == a)
        if (a = "", bF(this.A))
            a = "Anaglyph3D";
        else {
            var b = this.A.getVideoData();
            fF(b) && this.A.T().experiments.spherical ?
                a = "Spherical" : this.A.T().experiments.B && (a = "NoOp")
        }
    this.k = new kF(this.A, a.toString(), this.B, this);
    this.o = !1
}
inherit(pF, Is);
var qF = {vu: "video-annotations"};
pF.j = function (a) {
    return pF.Ca(a) ? new pF(a) : null
};
pF.prototype.Ca = function () {
    return pF.Ca(this.j)
};
pF.Ca = function (a) {
    var b;
    (b = bF(a) && a.T().experiments.ba) || (b = a.getVideoData(), b = fF(b) && a.T().experiments.spherical);
    return b || a.T().experiments.B ? !0 : !1
};
f = pF.prototype;
f.fF = function () {
    this.o && mF(this.k)
};
f.dF = function () {
    if (this.o) {
        var a = this.k;
        a.j && (a.B || requestAnimationFrame(a.Nd.bind(a)))
    }
};
f.eF = function (a) {
    if (this.o) {
        var b = this.k;
        b.j && (b.j.Xj(a), b.B || requestAnimationFrame(b.Nd.bind(b)))
    }
};
f.cF = function (a) {
    if (this.o) {
        var b = this.k;
        b.j && (b.j.Wj(a), b.B || requestAnimationFrame(b.Nd.bind(b)))
    }
};
f.Ui = function (a) {
    if (this.o) {
        var b = this.k, c = b.B;
        b.B = X(a.state, 8);
        b.B && !c && requestAnimationFrame(b.Nd.bind(b))
    }
};
f.L = function () {
    pF.J.L.call(this)
};
f.create = function () {
    var a = this.k;
    a.j = null;
    null != a.D && ("Anaglyph3D" == a.D ? a.j = new aF(a.R, a.I, a.GB.bind(a)) : "Spherical" == a.D ? a.j = new eF : "WhiteNoise" == a.D ? a.j = new jF : "NoOp" == a.D && (a.j = new iF));
    a.j && (a.G = lF(a), 0 == a.G ? a.o.hidden = !0 : (a.R.app.k.Qj(new xq("html5.missingapi.webgl", !1)), oF(a)));
    this.o = null != this.k.j;
    pF.J.create.call(this)
};
f.destroy = function () {
    oF(this.k);
    this.o = !1;
    pF.J.destroy.call(this)
};
function rF(a) {
    Is.call(this, a);
    Tf({
        YTP_YPC_START_RENTAL_HEADER: "Would you like to start this rental?",
        YTP_YPC_START_RENTAL_BUTTON: "Start rental period"
    });
    this.o = this.k = null
}
inherit(rF, Is);
f = rF.prototype;
f.ua = "ypc_clickwrap";
f.sc = "ypc-clickwrap";
f.Ca = function () {
    return Bv(this.j.getVideoData(), "ypc_clickwrap_module")
};
function sF(a) {
    return Bv(a.getVideoData(), "ypc_clickwrap_module") ? new rF(a) : null
}
f.create = function () {
    rF.J.create.call(this);
    this.load()
};
f.load = function () {
    rF.J.load.call(this);
    this.k = new fv(["div", ["ytp-ypc-clickwrap-overlay", "ytp-player-content"], ["h2", "ytp-ypc-clickwrap-header", Uf("YTP_YPC_START_RENTAL_HEADER")], ["div", "ytp-ypc-clickwrap-description", this.j.getVideoData().A.ypc_clickwrap_message], ["button", "ytp-ypc-clickwrap-confirm", Uf("YTP_YPC_START_RENTAL_BUTTON")]]);
    this.k.Y(this.j.Ja());
    S(this, this.k);
    this.o = this.k.j["ytp-ypc-clickwrap-confirm"];
    Q(this.o, "click", x(this.mA, this))
};
f.unload = function () {
    rF.J.unload.call(this);
    Hh(this.o);
    this.k.detach();
    this.k.dispose();
    this.k = null
};
f.mA = function () {
    Ms(this);
    this.destroy()
};
function tF(a) {
    var b = window.location;
    a = Re(a, {}) + "";
    if (!(a instanceof yc || a instanceof yc)) {
        a = a.Ce ? a.ue() : String(a);
        a = Bc.test(a) ? Cc(a) : "about:invalid#zClosurez";
        var c = new yc;
        c.j = a;
        a = c
    }
    b.href = Ac(a)
}
function uF(a, b, c) {
    b || (b = {});
    var d = c || window;
    c = "undefined" != typeof a.href ? a.href : String(a);
    a = b.target || a.target;
    var e = [], g;
    for (g in b)
        switch (g) {
            case "width":
            case "height":
            case "top":
            case "left":
                e.push(g + "=" + b[g]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                e.push(g + "=" + (b[g] ? 1 : 0))
        }
    g = e.join(",");
    if (b.noreferrer) {
        if (b = d.open("", a, g))
            bd && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), b.opener = null, c = Aa(c), b.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), b.document.close()
    } else
        b =
            d.open(c, a, g);
    return b
}
function vF(a, b) {
    var c;
    c = b || {};
    c.target = c.target || a.target || "YouTube";
    c.width = c.width || 600;
    c.height = c.height || 600;
    (c = uF(a, c)) ? (c.opener || (c.opener = window), c.focus()) : c = null;
    return !c
}

function wF(a) {
    a = a.A;
    this.o = a.ypc_offer_button_text;
    this.description = a.ypc_offer_description;
    this.B = a.ypc_offer_headline;
    this.A = a.ypc_full_video_message;
    this.offerId = a.ypc_offer_id;
    this.j = a.ypc_buy_url;
    this.thumbnail = a.ypc_item_thumbnail;
    ag(this.thumbnail) || (this.thumbnail = "");
    this.title = a.ypc_item_title;
    this.k = a.ypc_item_url;
    this.videoId = a.ypc_vid
}

function xF() {
    Y.call(this, ["div", ["ytp-drawer", "html5-stop-propagation"], ["div", "ytp-drawer-content", "{{content}}"], ["a", "ytp-drawer-close-button"], ["a", "ytp-drawer-open-button"]]);
    var a = this.template.j["ytp-drawer-open-button"];
    pv(this, this.template.j["ytp-drawer-close-button"], "click", this.hide);
    pv(this, a, "click", this.show);
    this.j = new Jv(pa(lh, this.element, "ytp-drawer-closed"), 0);
    S(this, this.j);
    this.ta(null);
    this.hide()
}
inherit(xF, Y);
xF.prototype.hide = function () {
    this.j.stop();
    N(this.element, "ytp-drawer-closed")
};
xF.prototype.ta = function (a) {
    a ? (xF.J.ta.call(this, a), mv(this.element, "block")) : mv(this.element, "none")
};
xF.prototype.show = function () {
    this.j.start()
};
function yF(a, b) {
    T.call(this);
    this.j = new xF;
    S(this, this.j);
    this.k = document.createElement("div");
    N(this.k, "html5-ypc-endscreen");
    this.A = document.createElement("div");
    N(this.A, "html5-ypc-overlay");
    this.o = new fv(["div", "html5-ypc-module", ["div", "html5-ypc-action-heading", "{{heading}}"], ["div", "html5-ypc-thumbnail", "{{thumbnail_element}}"], ["div", "html5-ypc-title", "{{title}}"], ["div", "html5-ypc-description", "{{description}}"], ["button", "html5-ypc-purchase", "{{button_label}}"]]);
    S(this, this.o);
    this.B =
        this.o.j["html5-ypc-purchase"];
    Q(this.B, "click", x(this.C, this));
    ae(this.A, b.A);
    var c = b.title;
    b.k && (c = ["a", {href: b.k, target: "blank_"}, b.title]);
    var d = "";
    b.thumbnail && (d = ["img", {src: b.thumbnail}]);
    this.o.update({heading: b.B, title: c, thumbnail_element: d, description: b.description, button_label: b.o});
    this.Y(a)
}
inherit(yF, T);
yF.prototype.L = function () {
    yF.J.L.call(this);
    this.B && Hh(this.B);
    Sd(this.k);
    Sd(this.A)
};
yF.prototype.Y = function (a) {
    this.j.Y(a);
    this.j.ta(this.o.N());
    a.appendChild(this.k)
};
function zF(a) {
    var b = a.o.N();
    a.k.appendChild(b);
    a.j.ta(null);
    mv(a.k, "block")
}
yF.prototype.C = function () {
    this.publish("ypcContentRequest")
};
function AF(a) {
    Is.call(this, a);
    this.o = this.k = null;
    this.B = NaN;
    this.A = null
}
inherit(AF, Is);
f = AF.prototype;
f.ua = "ypc";
f.sc = "ypc";
f.Ca = function () {
    return Bv(this.j.getVideoData(), "ypc_module")
};
function BF(a) {
    return Bv(a.getVideoData(), "ypc_module") ? new AF(a) : null
}
f.create = function () {
    AF.J.create.call(this);
    this.k = new wF(this.j.getVideoData());
    L(x(this.iF, this), 0);
    this.A = new Y(["div", ["ytp-player-content", "ytp-ypc-player-content"]]);
    this.A.Y(this.j.Ja())
};
f.destroy = function () {
    AF.J.destroy.call(this);
    this.k = null;
    this.A.detach();
    this.A.dispose();
    this.A = null
};
f.iF = function () {
    this.be && !this.loaded && this.load()
};
f.load = function () {
    AF.J.load.call(this);
    var a = this.j.getVideoData();
    if (this.k.videoId && !a.oa)
        this.j.ct({video_id: this.k.videoId, ypc_preview: 1});
    else {
        this.o = new yF(this.A.N(), this.k);
        this.o.subscribe("ypcContentRequest", this.pA, this);
        this.k.videoId && Pd(this.A.N(), this.o.A);
        if (sE(this.j.T())) {
            var b = new ws(2147483647, 2147483647, {priority: 2});
            Js(this, [b])
        }
        this.o.j.show();
        M(this.B);
        this.B = L(x(function () {
            this.o.j.hide()
        }, this), 1E4);
        this.k.videoId ? a.oa && Ms(this) : zF(this.o)
    }
};
f.unload = function () {
    Ls(this);
    vi(this.o);
    this.o = null;
    AF.J.unload.call(this)
};
f.zc = function (a) {
    AF.J.zc.call(this, a);
    zF(this.o)
};
f.Oc = function (a) {
    AF.J.Oc.call(this, a);
    a = this.o;
    mv(a.k, "none");
    a.j.ta(a.o.N())
};
f.pA = function () {
    if (this.k.j)
        "embedded" == this.j.T().da ? uF(this.k.j) : tF(this.k.j);
    else if (this.k.offerId) {
        var a = t("yt.www.watch.player.handleEndPreview");
        a && (this.j.isFullscreen() && Gx(this.j.app), a(this.k.offerId))
    }
};
function CF(a) {
    this.A = Math.exp(Math.log(.5) / a);
    this.j = this.o = 0
}
CF.prototype.k = function (a, b) {
    var c = Math.pow(this.A, a);
    this.j = b * (1 - c) + c * this.j;
    this.o += a
};
CF.prototype.B = function () {
    return this.j / (1 - Math.pow(this.A, this.o))
};
function DF(a) {
    this.k = window.Float32Array ? new Float32Array(a) : Array(a);
    this.j = a - 1
}
DF.prototype.add = function (a) {
    this.j = (this.j + 1) % this.k.length;
    this.k[this.j] = a
};
DF.prototype.forEach = function (a) {
    for (var b = this.j + 1; b < this.k.length; b++)
        a(this.k[b] || 0);
    for (b = 0; b <= this.j; b++)
        a(this.k[b] || 0)
};
function EF(a, b, c) {
    this.G = 0;
    this.D = a;
    this.A = b || .5;
    this.C = c || 0;
    this.F = "index";
    this.j = 0;
    this.o = []
}
EF.prototype.k = function (a, b) {
    FF(this, "index");
    this.o.push({index: this.G++, weight: a, value: b});
    this.j += a;
    for (FF(this, "index"); this.j > this.D;) {
        var c = this.j - this.D, d = this.o[0];
        d.weight <= c ? (this.j -= d.weight, this.o.shift()) : (this.j -= c, d.weight -= c)
    }
};
function GF(a, b) {
    FF(a, "value");
    var c = b * a.j, d = 0, e = NaN;
    a.o.some(function (a) {
        d += a.weight;
        e = a.value;
        if (d >= c)
            return !0
    });
    return e
}
EF.prototype.B = function () {
    return this.C ? (GF(this, this.A - this.C) + GF(this, this.A) + GF(this, this.A + this.C)) / 3 : GF(this, this.A)
};
function FF(a, b) {
    a.F != b && (a.F = b, Cb(a.o, b))
}

function HF() {
    this.j = {}
}
function IF(a, b) {
    var c = a.j[b] || {Td: 0, done: 0, hs: 0, Qo: 0};
    return a.j[b] = c
}

function JF(a) {
    this.policy = a;
    this.j = new HF;
    this.o = this.C = this.D = 0;
    this.G = new DF(100);
    this.F = 0;
    this.H = y();
    this.B = new EF(16, .6);
    this.A = new CF(4);
    this.policy.k ? this.k = new CF(17) : this.k = new EF(17, .5, .1);
    a = Zi("yt-player-bandwidth") || {};
    this.k.k(this.policy.j, 0 < a.byterate ? a.byterate : 13E4);
    0 < a.delay && this.B.k(1, Math.min(+a.delay, 2));
    0 < a.tailDelay && this.A.k(1, +a.tailDelay);
    this.o = y()
}
function KF(a, b, c) {
    b = Math.max(b, .05);
    a.k.k(b, c / b);
    LF(a)
}
function MF(a, b, c) {
    isNaN(c) || (a.C += c);
    isNaN(b) || (a.D += b / 1E3);
    LF(a)
}
function NF(a) {
    a = a.B.B();
    a = isNaN(a) ? .5 : a;
    return a = Math.min(a, 5)
}
function OF(a) {
    return a.A.B() || 0
}
function PF(a) {
    a = a.k.B();
    return 0 < a ? a : 1
}
function QF(a) {
    var b = {};
    b.delay = NF(a);
    b.tailDelay = OF(a);
    b.byterate = PF(a);
    return b
}
function RF(a) {
    3E4 < y() - a.o && (uq(QF(a)), a.o = y())
}
function LF(a) {
    var b = y();
    a.H = b;
    500 < b - a.F && (a.G.add(1 / (1 / PF(a) + OF(a))), a.F = b)
}
function SF(a) {
    return 4E3 <= y() - a.H
}

function TF() {
    this.j = .5;
    this.k = !1
}

function UF(a, b, c, d) {
    this.name = a;
    this.language = b;
    this.tk = c;
    this.isDefault = d
}
UF.prototype.toString = function () {
    return this.name
};
function VideoFile(a) {
    this.k = a;
    this.B = this.A = this.C = "";
    Object.defineProperty(this, 'j', {
        get: function() {
            return this.__j;
        },
        set: function(newValue) {
            this.__j = newValue;
        },
        enumerable: true,
        configurable: true
    });
    var obj = {};
    Object.defineProperty(obj, 'signature', {
        get: function() {
            return this.__signature;
        },
        set: function(newValue) {
            this.__signature = newValue;
        },
        enumerable: true,
        configurable: true
    });
    this.j = obj;
    this.o = ""
}
VideoFile.prototype.set = function (a, b) {
    this.j[a] !== b && (this.j[a] = b, this.o = "")
};
VideoFile.prototype.get = function (a) {
    WF(this);
    return this.j[a] || null
};
function XF(a) {
    a.o || (a.o = YF(a));
    return a.o
}
function ZF(a) {
    WF(a);
    return Kb(a.j, function (a) {
        return null !== a
    })
}
function WF(a) {
    if (a.k) {
        var b = a.k;
        if (!b || -1 == b.search(Gf))
            throw Error("Untrusted URL: " + a.k);
        b = sf(a.k);
        a.C = b.Ib;
        a.B = b.mb + (null != b.md ? ":" + b.md : "");
        var c = b.Hb;
        if (0 == c.indexOf("/videoplayback"))
            a.A = "/videoplayback", c = c.substr(14);
        else if (0 == c.indexOf("/api/manifest/")) {
            var d = c.indexOf("/", 14);
            0 < d ? (a.A = c.substr(0, d), c = c.substr(d + 1)) : (a.A = c, c = "")
        }
        d = a.j;
        a.j = $F(c);
        qa(a.j, aG(b.ep()));
        qa(a.j, d);
        a.k = "";
        a.o = ""
    }
}
function YF(a) {
    WF(a);
    var b = a.C + (a.C ? "://" : "//") + a.B + a.A;
    if (ZF(a)) {
        var c = [];
        Ib(a.j, function (a, b) {
            null !== a && c.push(b + "=" + a)
        });
        a = c.join("&");
        b += "?" + a
    }
    return b
}
function $F(a) {
    a = a.split("/");
    var b = 0;
    a[0] || b++;
    for (var c = {}; b < a.length; b += 2)
        a[b] && (c[a[b]] = a[b + 1]);
    return c
}
function aG(a) {
    a = a.split("&");
    for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c], e = d.indexOf("=");
        0 < e ? b[d.substr(0, e)] = d.substr(e + 1) : d && (b[d] = "")
    }
    return b
}

function bG(a, b) {
    this.start = a;
    this.end = b;
    this.length = b - a + 1
}
function cG(a) {
    a = a.split("-");
    return 2 == a.length && (a = new bG(parseInt(a[0], 10), parseInt(a[1], 10)), !isNaN(a.start) && !isNaN(a.end) && !isNaN(a.length) && 0 < a.length) ? a : null
}
function dG(a, b) {
    return new bG(a, a + b - 1)
}
bG.prototype.toString = function () {
    return this.start + "-" + (null == this.end ? "" : this.end)
};
function eG(a, b) {
    for (var c = a; c; c = c.parentNode)
        if (c.attributes) {
            var d = c.attributes[b];
            if (d)
                return d.value
        }
    return ""
}
function fG(a, b) {
    for (var c = a; c; c = c.parentNode) {
        var d = c.getElementsByTagName(b);
        if (0 < d.length)
            return d[0]
    }
    return null
}

function gG(a, b, c, d, e) {
    this.duration = c;
    this.endTime = b + c;
    this.j = a;
    this.sourceURL = d;
    this.startTime = b;
    this.aa = e || null
}

function hG() {
    this.ia = []
}
f = hG.prototype;
f.qh = function (a) {
    return (a = iG(this, a)) ? a.duration : 0
};
f.Vk = function (a) {
    return this.qh(a)
};
f.wg = function () {
    return this.ia[0].j
};
f.Gb = function () {
    return this.ia[this.ia.length - 1].j
};
f.$f = function () {
    var a = this.ia[this.ia.length - 1];
    return a ? a.endTime : NaN
};
f.gt = function () {
    return this.ia[0].startTime
};
f.ap = function () {
    return this.ia.length
};
f.Sj = function () {
    return 0
};
f.yg = function (a) {
    return (a = jG(this, a)) ? a.j : -1
};
f.bp = function (a) {
    return iG(this, a).sourceURL
};
f.Ve = function (a) {
    return (a = iG(this, a)) ? a.startTime : 0
};
f.An = function () {
    return 0 < this.ia.length
};
function iG(a, b) {
    var c = yb(a.ia, new gG(b, 0, 0, ""), function (a, b) {
        return a.j - b.j
    });
    return 0 <= c ? a.ia[c] : null
}
function jG(a, b) {
    var c = yb(a.ia, {startTime: b}, function (a, b) {
        return a.startTime - b.startTime
    });
    return 0 <= c ? a.ia[c] : a.ia[Math.max(0, -c - 2)]
}
f.append = function (a) {
    if (0 != a.length)
        if (a = tb(a), 0 == this.ia.length)
            this.ia = a;
        else {
            var b = this.ia.length ? bb(this.ia).endTime : 0, c = a[0].j - this.Gb();
            1 < c && nb(this.ia);
            for (c = 0 < c ? 0 : -c + 1; c < a.length; c++) {
                var d = a[c];
                d.startTime = b;
                d.endTime = d.startTime + d.duration;
                b += a[c].duration;
                this.ia.push(a[c])
            }
        }
};
function kG(a, b) {
    var c = jb(a.ia, function (a) {
        return a.j >= b
    }, a);
    0 < c && a.ia.splice(0, c)
}

function lG(a) {
    this.j = a;
    this.k = {};
    this.o = ""
}
lG.prototype.set = function (a, b) {
    this.j.get(a);
    this.k[a] = b;
    this.o = ""
};
lG.prototype.get = function (a) {
    return this.k[a] || this.j.get(a)
};
function mG(a, b) {
    var c = b.indexOf("?");
    if (0 < c) {
        var d = aG(b.substr(c + 1));
        Ib(d, function (a, b) {
            this.set(b, a)
        }, a);
        b = b.substr(0, c)
    }
    d = $F(b);
    Ib(d, function (a, b) {
        this.set(b, a)
    }, a)
}
function MC(a) {
    a.o || (a.o = nG(a));
    return a.o
}
function nG(a) {
    var b = XF(a.j);
    var c = [];
    Ib(a.k, function (a, b) {
        c.push(b + "=" + a)
    });
    if (!c.length)
        return b;
    var d = c.join("&");
    a = ZF(a.j) ? "&" : "?";
    return b + a + d
}
function oG(a, b) {
    var c = new VideoFile(b);
    Ib(a.k, function (a, b) {
        c.set(b, null)
    });
    return c
}

function pG(a) {
    this.j = a;
    this.k = 0;
    this.o = -1
}
var qG = 0;
function rG(a, b) {
    this.index = null;
    this.info = b;
    this.j = null;
    this.B = this.o = !1;
    this.C = new pG(a)
}
rG.prototype.Nl = function () {
    return !1
};
rG.prototype.Nc = function () {
    return !1
};
rG.prototype.Er = function (a) {
    return [a]
};
rG.prototype.ij = function (a) {
    return [a]
};
function sG(a, b, c, d, e, g, h, k, l) {
    this.j = b;
    this.aa = c;
    this.type = a;
    this.A = 0 <= d ? d : -1;
    this.startTime = e || 0;
    this.duration = g || 0;
    this.o = h || 0;
    this.k = 0 <= k ? k : this.aa ? this.aa.length : NaN;
    this.F = !!l;
    this.aa ? (this.C = this.o + this.k == this.aa.length, this.B = this.startTime + this.duration * this.o / this.aa.length, this.G = this.duration * this.k / this.aa.length) : (this.C = 0 != this.k, this.B = this.startTime, this.G = this.duration);
    this.D = this.B + this.G
}
function tG(a) {
    return 1 == a.type || 2 == a.type
}
function uG(a, b) {
    return a.j == b.j && a.aa.start + a.o + a.k == b.aa.start + b.o
}
function vG(a) {
    ab(1 == a.length || ib(a, function (a) {
        return !!a.aa
    }));
    for (var b = 1; b < a.length; b++)
        ;
    b = a[a.length - 1];
    return new bG(a[0].aa.start + a[0].o, b.aa.start + b.o + b.k - 1)
}
function wG(a) {
    var b = "i=" + a.j.info.id + ",s=" + a.A;
    a.aa && (b = b + ",r=" + (a.aa.start + a.o) + "-" + (a.aa.start + a.o + a.k - 1));
    return b = b + ",t=" + a.B.toFixed(1) + "," + (a.B + a.G).toFixed(1)
}

function xG(a, b) {
    this.k = a[0].j.C;
    this.o = b || "";
    this.j = a;
    this.aa = this.j[0].aa && 0 < this.j[0].k ? vG(this.j) : null
}
function NC(a) {
    var b;
    /http[s]?:\/\//.test(a.o) ? b = new lG(new VideoFile(a.o)) : (b = new lG(a.k.j), a
.
    o && mG(b, a.o)
)
    ;
    a.aa && b.set("range", a.aa.toString());
    return b
}
function yG(a) {
    if (a.aa)
        return a.aa.length;
    a = a.j[0];
    return Math.round(a.G * a.j.info.ra)
}

function zG(a, b, c, d, e) {
    rG.call(this, a, b);
    this.index = e || new hG;
    this.A = d || null;
    this.D = c;
    this.k = !0
}
inherit(zG, rG);
f = zG.prototype;
f.Qh = function () {
    return !1
};
f.$o = function () {
    var a = new sG(1, this, this.A);
    return [new xG([a], this.D)]
};
function LC(a, b) {
    a.rh(b);
    return AG(a, b.C ? b.A + 1 : b.A, !1)
}
f.ki = function (a, b) {
    var c = this.index.yg(a);
    b && (c = Math.min(this.index.Gb(), c + 1));
    return AG(this, c, !0)
};
f.kp = function (a) {
    this.j = new Uint8Array(BG(a).buffer)
};
f.Nl = function () {
    return !1
};
f.Nc = function () {
    return null !== this.j && this.index.An()
};
f.rh = function (a) {
    return 0 == a.k ? !0 : this.index.Gb() > a.A && this.index.wg() <= a.A + 1
};
f.update = function (a, b, c) {
    this.index.append(a);
    kG(this.index, c);
    this.k = b
};
function AG(a, b, c) {
    var d = a.index.bp(b), e = a.index.Ve(b), g = a.index.qh(b);
    c ? g = c = 0 : c = 0 < a.info.ra ? a.info.ra * g : 1E3;
    a = new sG(3, a, null, b, e, g, 0, c, b == a.index.Gb() && !a.k && 0 < c);
    return new xG([a], d)
}

function CG(a, b) {
    this.Sd = a;
    this.context = b
}

function DG(a, b, c) {
    this.k = a;
    this.Sd = b;
    this.j = c
}
function EG() {
    this.j = [];
    this.k = null;
    this.A = 0;
    this.o = []
}
EG.prototype.update = function (a) {
    var b = void 0;
    this.k && (b = this.k);
    var c = b, b = +eG(a, "timescale") || 1, d = +eG(a, "startNumber") || 0, e = 0, g = 1;
    c && (e = c.Sd + c.j, g = d - c.k);
    c = new EG;
    g = 0 < g ? 0 : -g + 1;
    c.A = g;
    for (a = a.getElementsByTagName("S"); g < a.length; g++) {
        var h = a[g], k = +h.getAttribute("d") / b, l = new DG(d + g, e, k);
        c.j.push(l);
        var e = e + k, k = h.getAttribute("yt:cuepointTimeOffset"), p = h.getAttribute("yt:cuepointDuration"), h = h.getAttribute("yt:cuepointContext") || null;
        k && p && c.o.push(new CG(+k / b + l.Sd, h))
    }
    c.j.length && (c.k = bb(c.j));
    this.A =
        c.A;
    this.k = c.k || this.k;
    this.j = c.j;
    ub(this.o, c.o)
};
function FG(a) {
    var b = a.o;
    a.o = [];
    return b
}

function GG() {
    this.A = [];
    this.B = !1;
    this.j = null;
    this.k = {};
    this.o = {}
}
function HG(a, b) {
    for (var c = b.getElementsByTagName("SegmentTimeline"), d = 0; d < c.length; d++) {
        var e = c[d].parentNode.parentNode;
        "Period" == e.nodeName ? a.j = new EG : "AdaptationSet" == e.nodeName ? a.k[e.attributes.mimeType.value] = new EG : "Representation" == e.nodeName && (a.o[e.attributes.id.value] = new EG)
    }
    a.B = !0
}
function IG(a, b) {
    a.B || HG(a, b);
    for (var c = [], d = b.getElementsByTagName("SegmentTimeline"), e = 0; e < d.length; e++) {
        var g = d[e].parentNode.parentNode, h = null;
        "Period" == g.nodeName ? h = a.j : "AdaptationSet" == g.nodeName ? h = a.k[g.attributes.mimeType.value] : "Representation" == g.nodeName && (h = a.o[g.attributes.id.value]);
        if (null == h)
            return;
        h.update(d[e]);
        ub(c, FG(h))
    }
    Bb(c, function (a) {
        return a.Sd
    });
    ub(a.A, c)
}
function JG(a) {
    a.j && (a.j.j = []);
    Ib(a.k, function (a) {
        a.j = []
    });
    Ib(a.o, function (a) {
        a.j = []
    })
}

function KG(a, b) {
    var c = LG(a, 0, 1836019558);
    if (!c)
        return null;
    var d = LG(a, c.offset + 8, 1835427940), e = LG(a, c.offset + 8, 1953653094);
    if (!d || !e)
        return null;
    var g = LG(a, e.offset + 8, 1952868452), h = LG(a, e.offset + 8, 1953658222), k = LG(a, e.offset + 8, 1952867444);
    if (!g || !h || !k)
        return null;
    var l = LG(a, e.offset + 8, 1935763823), e = LG(a, e.offset + 8, 1935763834);
    if (l) {
        var p = MG(l), r = MG(l);
        if (0 != p || 1 != r)
            return null;
        p = MG(l)
    }
    for (var u = MG(g), C = MG(g), V = u & 2, O = u & 1 ? NG(g) : 0, fa = V ? MG(g) : 0, sa = u & 8 ? MG(g) : 0, r = u & 16 ? MG(g) : 0, Ne = u & 32 ? MG(g) : 0, u = MG(h),
             je = u & 1, Gs = u & 4, Nz = u & 256, g = u & 512, b1 = u & 1024, c1 = u & 2048, u = MG(h), d1 = je ? MG(h) : 0, e1 = Gs ? MG(h) : 0, je = [], jN = [], gB = [], hB = [], kN = 0, Ue = 0, Yb = 0; Yb < u; Yb++) {
        var f1 = Nz ? MG(h) : sa;
        g && je.push(MG(h));
        var rd = Ne;
        Gs && 0 == Yb ? rd = e1 : b1 && (rd = MG(h));
        jN.push(rd);
        rd = c1 ? MG(h) : 0;
        0 == Yb && (kN = rd);
        gB.push(Ue + rd);
        hB.push(Yb);
        Ue += f1
    }
    Ab(hB, function (a, b) {
        return gB[a] - gB[b]
    });
    h = [];
    for (Yb = 0; Yb < u; Yb++)
        h[hB[Yb]] = Yb;
    Ue = V ? 4 : 0;
    Yb = 16 * u;
    rd = 68 + Ue + k.size + Yb + (l ? l.size : 0) + (e ? e.size : 0);
    c = rd - c.size;
    sa = new OG(rd);
    PG(sa, rd);
    PG(sa, 1836019558);
    QG(sa, d);
    PG(sa, rd -
    24);
    PG(sa, 1953653094);
    PG(sa, 16 + Ue);
    PG(sa, 1952868452);
    PG(sa, 131072 | (V ? 2 : 0));
    PG(sa, C);
    V && PG(sa, fa);
    QG(sa, k);
    PG(sa, 20 + Yb);
    PG(sa, 1953658222);
    PG(sa, 16781057);
    PG(sa, u);
    PG(sa, O + d1 + c);
    for (Yb = Ue = 0; Yb < u; Yb++)
        k = h[Yb], d = Math.round(b * k / u), k = Math.round(b * (k + 1) / u) - d, rd = d - Ue + kN, PG(sa, k), PG(sa, g ? je[Yb] : r), PG(sa, jN[Yb]), PG(sa, rd), Ue += k;
    l && (PG(sa, l.size), PG(sa, 1935763823), PG(sa, 0), PG(sa, 1), PG(sa, p + c));
    e && QG(sa, e);
    return sa.data.buffer
}
function RG(a) {
    a = new DataView(a.buffer, a.byteOffset, a.byteLength);
    for (var b = 0; SG(a, b);) {
        var c = TG(a, b);
        if (1836476516 == c.type)
            return UG(c);
        b = VG(c.type) ? b + 8 : b + c.size
    }
    return NaN
}
function LG(a, b, c) {
    for (; SG(a, b);) {
        var d = TG(a, b);
        if (d.type == c)
            return d;
        b += d.size
    }
    return null
}
function TG(a, b) {
    var c = a.getUint32(b), d = a.getUint32(b + 4);
    return new WG(a, b, c, d)
}
function UG(a) {
    var b = a.data.getUint8(a.offset + 8) ? 28 : 20;
    return a.data.getUint32(a.offset + b)
}
function XG(a) {
    return a.data.getUint32(a.offset + 16)
}
function YG(a, b) {
    return 4294967296 * a.getUint32(b) + a.getUint32(b + 4)
}
function SG(a, b) {
    if (8 > a.byteLength - b)
        return !1;
    var c = a.getUint32(b);
    if (8 > c)
        return !1;
    for (var d = 4; 8 > d; d++) {
        var e = a.getInt8(b + d);
        if (97 > e || 122 < e)
            return !1
    }
    return a.byteLength - b >= c
}
function VG(a) {
    return 1836019558 == a || 1836019574 == a || 1953653094 == a
}
function WG(a, b, c, d) {
    this.data = a;
    this.offset = b;
    this.size = c;
    this.type = d;
    this.j = 8
}
function MG(a) {
    var b = a.data.getInt32(a.offset + a.j);
    a.j += 4;
    return b
}
function NG(a) {
    var b = YG(a.data, a.offset + a.j);
    a.j += 8;
    return b
}
WG.prototype.skip = function (a) {
    this.j += a
};
function OG(a) {
    this.data = new DataView(new ArrayBuffer(a));
    this.j = 0
}
function PG(a, b) {
    a.data.setInt32(a.j, b);
    a.j += 4
}
function QG(a, b) {
    for (var c = 0; c + 4 <= b.size;)
        PG(a, b.data.getUint32(b.offset + c)), c += 4;
    for (; c < b.size;)
        a.data.setUint8(a.j++, b.data.getUint8(b.offset + c++))
}

function ZG(a, b, c, d) {
    this.info = a;
    this.buffer = b;
    this.aa = c;
    this.j = d
}
function BG(a) {
    return a.aa ? new DataView(a.buffer, a.aa.start, a.aa.length) : new DataView(a.buffer)
}
function $G(a, b) {
    if (a.info.k != a.aa.length)
        return !1;
    if (1 == a.info.j.info.o) {
        if (8 > a.info.k || 4 == a.info.type)
            return !0;
        var c = BG(a), d = c.getUint32(0, !1), c = c.getUint32(4, !1);
        if (2 == a.info.type)
            return d == a.info.k && 1936286840 == c;
        if (3 == a.info.type && 0 == a.info.o)
            return 1836019558 == c || 1936286840 == c || 1937013104 == c || 1718909296 == c
    } else if (2 == a.info.j.info.o && b) {
        if (4 > a.info.k || 4 == a.info.type)
            return !0;
        c = BG(a);
        d = c.getUint32(0, !1);
        if (3 == a.info.type && 0 == a.info.o)
            return 524531317 == d
    }
    return !0
}
function aH(a) {
    var b;
    t: {
        for (var c = 0, d = new DataView(a.buffer); SG(d, c);) {
            b = TG(d, c);
            if (1936286840 == b.type) {
                c = XG(b);
                d = b.data.getUint8(b.offset + 8);
                b.data.getUint16(b.offset + (0 == d ? 30 : 38));
                b = b.data.getUint32(b.offset + (0 == d ? 36 : 42)) / c;
                break t
            }
            c = VG(b.type) ? c + 8 : c + b.size
        }
        b = NaN
    }
    if (!(0 <= b)) {
        c = a.info.j.j;
        d = 0;
        b = new DataView(a.buffer);
        for (var e, g; SG(b, d);) {
            var h = TG(b, d);
            1936286840 == h.type ? e = XG(h) : 1836476516 == h.type ? e = UG(h) : 1836019558 == h.type && (g = h);
            d = VG(h.type) ? d + 8 : d + h.size
        }
        !e && c && (e = RG(c));
        if (g && e) {
            g = LG(b, g.offset +
            8, 1953653094);
            c = LG(b, g.offset + 8, 1952868452);
            g = LG(b, g.offset + 8, 1953658222);
            b = MG(c);
            MG(c);
            b & 2 && MG(c);
            b = b & 8 ? MG(c) : 0;
            var k = MG(g), l = k & 1, c = k & 4, d = k & 256, h = k & 512, p = k & 1024, k = k & 2048, r = g.data.getUint32(g.offset + g.j);
            g.j += 4;
            l && MG(g);
            c && MG(g);
            for (var u = l = 0; u < r; u++) {
                var C = d ? MG(g) : b;
                h && MG(g);
                c && 0 == u || !p || MG(g);
                k && MG(g);
                l += C
            }
            b = l / e
        } else
            b = NaN
    }
    return b || a.info.G
}

function bH() {
    this.ma = 0;
    this.j = new Float64Array(128);
    this.k = new Float64Array(128);
    this.A = 1;
    this.o = !1
}
f = bH.prototype;
f.Sj = function (a) {
    return this.j[a]
};
f.Ve = function (a) {
    return this.k[a] / this.A
};
f.qh = function (a) {
    a = this.Vk(a);
    return 0 <= a ? a / this.A : -1
};
f.Vk = function (a) {
    return a + 1 < this.ma || this.o ? this.k[a + 1] - this.k[a] : -1
};
f.wg = function () {
    return 0
};
f.Gb = function () {
    return this.ma - 1
};
f.$f = function () {
    return this.o ? this.k[this.ma] / this.A : NaN
};
f.gt = function () {
    return 0
};
f.ap = function () {
    return this.ma
};
f.bp = function () {
    return ""
};
f.yg = function (a) {
    a = yb(this.k.subarray(0, this.ma), a * this.A);
    return 0 <= a ? a : Math.max(0, -a - 2)
};
f.An = function () {
    return 0 <= this.Gb()
};
function cH(a) {
    if (a.j.length < a.ma + 1) {
        var b = 2 * a.j.length, b = b + 2, c = a.j;
        a.j = new Float64Array(b + 1);
        var d = a.k;
        a.k = new Float64Array(b + 1);
        for (b = 0; b < a.ma + 1; b++)
            a.j[b] = c[b], a.k[b] = d[b]
    }
}
function dH(a, b) {
    this.k = a;
    this.j = 0;
    this.o = b || 0
}
function eH(a) {
    for (var b = fH(a, !1); 236 == b;)
        gH(a), b = fH(a, !1);
    return b
}
function hH(a) {
    var b = fH(a, !0), c = a.k.byteOffset + a.j, d = Math.min(b, a.k.buffer.byteLength - c), c = new DataView(a.k.buffer, c, d), c = new dH(c, a.o + a.j);
    a.j += b;
    return c
}
function iH(a) {
    for (var b = fH(a, !0), c = jH(a), d = 1; d < b; d++)
        c = 256 * c + jH(a);
    return c
}
function gH(a) {
    var b = fH(a, !0);
    a.j += b
}
function fH(a, b) {
    var c = jH(a);
    if (1 == c) {
        for (var d = c = 0; 7 > d; d++)
            c = 256 * c + jH(a);
        return c
    }
    for (var e = 128, d = 0; 6 > d && e > c; d++)
        c = 256 * c + jH(a), e *= 128;
    return b ? c - e : c
}
function jH(a) {
    return a.k.getUint8(a.j++)
}

function kH(a, b, c, d, e, g) {
    rG.call(this, a, b);
    this.initRange = c;
    this.indexRange = d;
    this.A = null;
    this.index = new bH;
    this.k = e;
    this.lastModified = g
}
inherit(kH, rG);
kH.prototype.Nc = function () {
    return !(!this.j || !this.index.An())
};
kH.prototype.$o = function (a) {
    var b = new sG(1, this, this.initRange);
    var c = new sG(2, this, this.indexRange);
    var d = [], e = [b];
    if (uG(b, c)) {
        e.push(c)
    } else {
        d.push(new xG([c]));
        a = 0;
    }
    isNaN(this.k) ? a = 0 : a > this.k && (a = this.k);
    b = e[e.length - 1];
    c = b.aa.end - e[0].aa.start + 1;
    a > c && (a = dG(b.aa.end + 1, a - c), e.push(new sG(4, this, a)));
    d.push(new xG(e));
    return d
};
kH.prototype.kp = function (a) {
    if (1 == a.info.type) {
        if (this.j)
            return;
        this.j = new Uint8Array(a.buffer, a.aa.start, a.aa.length)
    } else if (2 == a.info.type) {
        if (this.A || 0 <= this.index.Gb())
            return;
        if (1 == this.info.o) {
            var b = this.index, c = BG(a), d = a.info.aa.start;
            a = 0;
            var e = c.getUint32(0, !1), g = c.getUint8(a + 8);
            a += 12;
            var h = c.getUint32(a + 4, !1);
            b.A = h;
            a += 8;
            0 == g ? (g = c.getUint32(a, !1), h = c.getUint32(a + 4, !1), a += 8
        ) :
            (g = 4294967296 * c.getUint32(a, !1) + c.getUint32(a + 4, !1), h = 4294967296 * c.getUint32(a + 8, !1) + c.getUint32(a + 12, !1), a
            += 16
        )
            ;
            b.j[0] = h + (e + d);
            b.k[0] = g;
            b.o = !0;
            d = c.getUint16(a + 2, !1);
            a += 4;
            for (e = 0; e < d; e++) {
                var k = c.getUint32(a, !1), h = c.getUint32(a + 4, !1);
                a += 12;
                g = b;
                g.ma++;
                cH(g);
                g.j[g.ma] = g.j[g.ma - 1] + k;
                g.k[g.ma] = g.k[g.ma - 1] + h
            }
        } else
            this.A = BG(a)
    }
    if (st(this.info) && this.j && this.A) {
        a = new DataView(this.j.buffer, this.j.byteOffset, this.j.byteLength);
        b = this.index;
        h = this.A;
        c = "o" == this.info.k ? this.indexRange.end : void 0;
        a = new dH(a);
        if (440786851 == eH(a) && (gH(a), 408125543 == eH(a))) {
            e = a;
            g = e.j;
            d = fH(e, !0);
            e.j = g;
            a = hH(a);
            for (var e = a.o + a.j, l = eH(a); 357149030 != l;)
                gH(a),
                    l = eH(a);
            a = hH(a);
            for (var k = 1E6, p = 1E9, g = 0; !(a.j >= a.k.byteLength);)
                if (l = eH(a), 2807729 == l)
                    k = iH(a);
                else if (2807730 == l)
                    p = iH(a);
                else if (17545 == l) {
                    var g = a, l = fH(g, !0), r = 0;
                    4 == l ? r = g.k.getFloat32(g.j) : 8 == l && (r = g.k.getFloat64(g.j));
                    g.j += l;
                    g = r
                } else
                    gH(a);
            b.A = p / k;
            a = new dH(h);
            if (475249515 == eH(a)) {
                a = hH(a);
                h = !0;
                for (k = !1; !(a.j >= a.k.byteLength);)
                    if (l = eH(a), 187 == l) {
                        p = hH(a);
                        l = e;
                        if (179 != eH(p))
                            r = null;
                        else if (r = iH(p), 183 != eH(p))
                            r = null;
                        else {
                            for (var p = hH(p), u = l; !(p.j >= p.k.byteLength);)
                                241 == eH(p) ? u = iH(p) + l : gH(p);
                            r = [u, r]
                        }
                        h &&
                        c == r[0] && (k = !0);
                        h = !1;
                        k && (r[0] += 1);
                        p = b;
                        l = r[0];
                        r = r[1];
                        cH(p);
                        p.j[p.ma] = l;
                        p.k[p.ma] = r;
                        p.ma++
                    } else
                        gH(a);
                c = d + e;
                a = g;
                cH(b);
                b.o = !0;
                b.k[b.ma] = a;
                b.j[b.ma] = c
            }
        }
        this.A = null
    }
};
function lH(a, b, c, d) {
    for (var e = []; b <= a.index.Gb(); b++) {
        var g;
        g = a.index;
        var h = b;
        g = dG(g.Sj(h), h + 1 < g.ma || g.o ? g.j[h + 1] - g.j[h] : -1);
        var h = a.index.Ve(b), k = a.index.qh(b), l = Math.max(0, c - g.start), p = Math.min(g.end + 1, c + d) - (g.start + l);
        e.push(new sG(3, a, g, b, h, k, l, p, b == a.index.Gb() && l + p == g.length));
        if (g.start + l + p >= c + d)
            break
    }
    return new xG(e)
}
kH.prototype.Er = function (a) {
    for (var b = this.ij(a.info), c = [], d = a.j, e = 0; e < b.length; e++) {
        var g = dG(b[e].aa.start + b[e].o - a.info.aa.start + a.aa.start, b[e].k);
        c.push(new ZG(b[e], a.buffer, g, d));
        d = !1
    }
    return c
};
kH.prototype.ij = function (a) {
    for (var b = 0; b < this.index.Gb() && a.aa.start >= this.index.Sj(b + 1);)
        b++;
    return lH(this, b, a.aa.start, a.aa.length).j
};
kH.prototype.rh = function (a) {
    return this.Nc() ? !0 : isNaN(this.k) ? !1 : a.aa.end + 1 < this.k
};
function mH(a, b, c) {
    a.rh(b);
    if (!a.Nc())
        return c = dG(b.aa.end + 1, c), c.end + 1 > a.k && (c = new bG(c.start, a.k - 1)), a = [new sG(4, b.j, c)], new xG(a);
    4 == b.type && (b = a.ij(b), b = b[b.length - 1]);
    var d = 0, e = b.aa.start + b.o + b.k;
    3 == b.type && (d = b.A, e == b.aa.end + 1 && (d += 1));
    return lH(a, d, e, c)
}
kH.prototype.ki = function (a, b) {
    var c = this.index.yg(a);
    b && (c = Math.min(this.index.Gb(), c + 1));
    return lH(this, c, this.index.Sj(c), 0)
};
kH.prototype.Nl = function () {
    var a;
    if (a = this.Nc() && !isNaN(this.k))
        a = this.index, a = (a.o ? a.j[a.ma] : -1) != this.k;
    return a
};
kH.prototype.Qh = function () {
    return !0
};



function nH(a, b) {
    T.call(this);
    this.M = !!b;
    this.F = this.duration = 0;
    this.isLive = this.B = !1;
    this.H = y();
    this.C = Infinity;
    this.j = {};
    this.I = a || "";
    this.K = this.G = 0;
    this.D = !1;
    this.k = this.A = 0;
    this.o = null
}
inherit(nH, T);
nH.prototype.getErrorCode = function () {
    return 3 > this.k ? "manifest.net" : "manifest.net.retryexhausted"
};
function oH(a) {
    return Kb(a.j, function (a) {
        return !!a.info.A
    }, a)
}
var pH = /PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/;
function qH(a, b) {
    var c = new nH;
    D(a, function (a) {
        var e = a.type, g = a.itag, h = null;
        vt(e) && (h = a.size.split("x"), h = new Pt(+h[0], +h[1], +a.fps, +a.projection_type));
        var k = null, l = null;
        if (ut(e) && (k = new pt, a.name)) {
            var l = a.name, p = a.lang, r = a.acont;
            if (a.url) {
                var u = qj(a.url);
                u.xtags && (u = mj(u.xtags, ":"), u.lang && (p = u.lang), u.acont && (r = u.acont))
            }
            l = new UF(l, p, r, "1" == a.isDefault)
        }
        a.xtags && (g = a.itag + ";" + a.xtags);
        var p = parseInt(a.bitrate, 10) / 8, C = null;
        b && a.drm_families && (C = {}, D(a.drm_families.split(","), function (a) {
            C[a] = b[a]
        }));
        e = new qt(g, e, k, h, l, C, p);
        h = cG(a.init);
        k = cG(a.index);
        l = rH(a.url, e, a.s);
        p = parseInt(a.clen, 10);
        a = parseInt(a.lmt, 10);
        l && (c.j[g] = new kH(l, e, h, k, p, a))
    });
    return c
}
function sH(a) {
    if (!a)
        return 0;
    var b = pH.exec(a);
    return b ? 3600 * parseFloat(b[2] || 0) + 60 * parseFloat(b[4] || 0) + parseFloat(b[6] || 0) : parseFloat(a)
}
function rH(a, b, c) {
    a = new VideoFile(a);
    a.set("alr", "yes");
    a.set("keepalive", "yes");
    a.set("ratebypass", "yes");
    a.set("mime", encodeURIComponent(b.mimeType.split(";")[0]));
    c && a.set("signature", ht(c));
    return a
}
function tH(a) {
    var b = eG(a, "id"), b = b.replace(":", ";");
    "captions" == b && (b = eG(a, "lang"));
    var c = eG(a, "mimeType"), d = eG(a, "codecs"), c = d ? c + '; codecs="' + d + '"' : c, d = parseInt(eG(a, "bandwidth"), 10) / 8, e = null;
    vt(c) && (e = new Pt(parseInt(eG(a, "width"), 10), parseInt(eG(a, "height"), 10), parseInt(eG(a, "frameRate"), 10)));
    var g = null, h = null;
    if (ut(c)) {
        g = new pt;
        var h = eG(a, "lang") || "", k = fG(a, "Role");
        if (k) {
            var k = eG(k, "value") || "", l = "invalid";
            "main" == k ? l = "original" : "dub" == k ? l = "dubbed" : "descriptive" == k ? l = "descriptive" : "commentary" ==
            k && (l = "commentary");
            h = "invalid" != l && h ? new UF(eG(a, "yt:langName") || h + " - " + l, h, l, "original" == l) : null
        } else
            h = null
    }
    k = null;
    if (a = fG(a, "ContentProtection"))
        if ((k = a.attributes.schemeIdUri) && "http://youtube.com/drm/2012/10/10" == k.textContent)
            for (k = {}, a = a.firstChild; null != a; a = a.nextSibling)
                "yt:SystemURL" == a.nodeName && (k[a.attributes.type.textContent] = a.textContent.trim());
        else
            k = null;
    return new qt(b, c, g, e, h, k, d)
}
function uH(a, b, c, d) {
    a.A = 1;
    b = b || a.I;
    c = {format: "RAW", method: "GET", $b: x(a.O, a, c, d || null)};
    a.M && (c.timeout = 15E3);
    Bj(b, c)
}
nH.prototype.O = function (a, b, c) {
    this.K = c.status;
    if (200 <= c.status && 400 > c.status) {
        b = c.responseText;
        c = (new DOMParser).parseFromString(b, "text/xml").getElementsByTagName("MPD")[0];
        b = c.getElementsByTagName("Representation");
        if (0 < c.getElementsByTagName("SegmentList").length) {
            this.C = 1E3 * sH(eG(c, "minimumUpdatePeriod")) || Infinity;
            this.isLive = Infinity > this.C;
            this.B = !0;
            this.F = parseInt(eG(c, "yt:earliestMediaSequence"), 10);
            this.o || (this.o = new GG);
            IG(this.o, c);
            this.publish("refresh");
            for (c = 0; c < b.length; c++) {
                var d =
                    tH(b[c]);
                if (!this.j[d.id]) {
                    var e = rH(fG(b[c], "BaseURL").textContent, d), g = fG(b[c], "Initialization"), h = eG(g, "sourceURL"), g = cG(eG(g, "range"));
                    this.j[d.id] = new zG(e, d, h, null === g ? void 0 : g)
                }
                for (var d = this.j[d.id], e = this.o, h = d, g = $a(h.info.mimeType, ";", 1)[0], h = e.o[h.info.id] || e.k[g] || e.j || null, e = wb(fG(b[c], "SegmentList").getElementsByTagName("SegmentURL"), h.A), h = h.j, g = [], k = 0; k < e.length; k++)
                    g.push(vH(e[k], h[k]));
                d.update(g, this.isLive, this.F)
            }
            JG(this.o)
        } else
            i: for (this.duration = sH(eG(c, "mediaPresentationDuration")),
                        c = 0; c < b.length; c++) {
                g = b[c];
                d = tH(g);
                h = fG(g, "BaseURL");
                e = rH(h.textContent, d);
                k = fG(g, "SegmentBase");
                g = cG(k.attributes.indexRange.value);
                k = cG(k.getElementsByTagName("Initialization")[0].attributes.range.value);
                h = parseInt(h.getAttribute("yt:contentLength"), 10);
                d = new kH(e, d, k, g, h, NaN);
                if (!d)
                    break i;
                this.j[d.info.id] = d
            }
        this.H = y();
        this.A = 2;
        this.D = !1;
        this.k = 0;
        a && a(this);
        this.publish("loaded")
    } else
        this.A = 3, this.D ? this.k += 1 : this.D = !0, b && b(c), this.publish("load_error")
};
function vH(a, b) {
    var c = a.getAttribute("media"), d = null, e = a.getAttribute("mediaRange");
    null != e && (0 <= parseInt(e.split("-")[1], 10) ? d = cG(e) : c = c + "?range=" + e);
    return new gG(b.k, b.Sd, b.j, c, d)
}
function wH(a) {
    for (var b in a.j)
        if (a.j[b].index)
            return a.j[b].index.$f();
    return NaN
}
function xH(a) {
    for (var b in a.j)
        if (a.j[b].index)
            return a.j[b].index.gt();
    return 0
}
function yH(a, b) {
    Ib(a.j, function (a) {
        Ib(b, function (b, e) {
            a.C.j.set(e, b)
        })
    })
}

function zH(a, b, c, d) {
    this.o = {};
    this.K = a;
    this.H = b;
    a = c.split("#");
    this.F = parseInt(a[0], 10);
    this.D = parseInt(a[1], 10);
    this.k = parseInt(a[2], 10);
    this.Ab = parseInt(a[3], 10);
    this.rows = parseInt(a[4], 10);
    this.B = parseInt(a[5], 10);
    this.A = a[6];
    this.C = a[7];
    this.I = d
}
f = zH.prototype;
f.getHeight = function () {
    return this.D
};
f.tf = function () {
    return this.k
};
f.isDefault = function () {
    return -1 != this.A.indexOf("default")
};
function AH(a, b) {
    var c = a.H, c = c.replace("$N", a.A), c = c.replace("$L", a.K.toString()), c = c.replace("$M", b.toString());
    a.C && (c = Re(c, {sigh: a.C}));
    return c
}
function BH(a, b) {
    var c = Math.floor(b / (a.Ab * a.rows)), d = a.Ab * a.rows, e = b % d, g = e % a.Ab, e = Math.floor(e / a.Ab), h = a.rows, k = a.Dn() + 1 - d * c;
    k < d && (h = Math.ceil(k / a.Ab));
    return {url: AH(a, c), Fw: g, Ab: a.Ab, row: e, rows: h, mq: a.F * a.Ab, kq: a.D * h}
}
f.Tj = function (a) {
    var b = this.tf() - 1;
    a = 0 == this.B ? Math.round(a * this.k / this.I) : Math.round(1E3 * a / this.B);
    return Pc(a, 0, b)
};
f.Dn = function () {
    return this.k - 1
};
f.jt = function () {
    return this.k ? 0 : -1
};
f.kt = function () {
};
function CH(a, b) {
    this.j = this.k(a, b);
    this.o = {};
    1 < this.j.length && this.j[0].isDefault() && this.j.splice(0, 1)
}
CH.prototype.k = function (a, b) {
    for (var c = [], d = a.split("|"), e = d[0], g = 1; g < d.length; g++) {
        var h = this.A(g - 1, e, d[g], b);
        180 > h.getHeight() && c.push(h)
    }
    return c
};
CH.prototype.A = function (a, b, c, d) {
    return new zH(a, b, c, d)
};
function DH(a, b) {
    var c = a.o[b];
    if (c)
        return c;
    for (var c = a.j.length, d = 0; d < c; d++)
        if (a.j[d].F >= b)
            return a.o[b] = d;
    a.o[b] = c - 1;
    return c - 1
}
CH.prototype.B = function () {
};
function EH(a, b, c, d) {
    c = c.split("#");
    c = [c[1], c[2], 0, c[3], c[4], -1, c[0], ""].join("#");
    zH.call(this, a, b, c, 0);
    this.j = null;
    this.G = d ? 3 : 0
}
inherit(EH, zH);
f = EH.prototype;
f.tf = function () {
    return this.j ? this.j.ap() : -1
};
f.Tj = function (a) {
    var b = this.rows * this.Ab * this.G, c = -1, d = -1, e = this.j;
    e && (c = e.Gb(), d = e.yg(a));
    return d > c - b ? -1 : d
};
f.Dn = function () {
    return this.j ? this.j.Gb() : -1
};
f.jt = function () {
    return this.j ? this.j.wg() : -1
};
f.kt = function (a) {
    this.j = a ? a.index : null
};
function FH(a, b) {
    this.C = b;
    CH.call(this, a, 0)
}
inherit(FH, CH);
FH.prototype.k = function (a, b) {
    return FH.J.k.call(this, "$N|" + a, b)
};
FH.prototype.A = function (a, b, c) {
    return new EH(a, b, c, this.C.isLive)
};
FH.prototype.B = function (a) {
    for (var b = 0; b < this.j.length; b++)
        this.j[b].kt(a)
};
var GH = {0: "MONO", 1: "LEFT_RIGHT", 2: "RIGHT_LEFT", 3: "TOP_BOTTOM", 4: "BOTTOM_TOP"};
function HH(a, b, c) {
    b = {cpn: b};
    c && (b.ibw = "1369843");
    return {url: Re(a, b), type: "application/x-mpegURL", quality: "auto", itag: "93"}
}

function IH(a, b) {
    return void 0 == b ? a : "1" == b ? !0 : !1
}
function JH(a, b, c) {
    for (var d in c)
        if (c[d] == b)
            return c[d];
    return a
}
function KH(a, b) {
    return void 0 == b ? a : Number(b)
}
function LH(a, b) {
    return void 0 == b ? a : b.toString()
}
function MH(a, b) {
    var c = LH(a, b);
    c && (c = cg(c));
    return c
}
var NH = /^([0-9\.]+)\:([0-9\.]+)$/;
function OH(a) {
    if (a && (a = a.match(NH))) {
        var b = parseFloat(a[2]);
        if (0 < b)
            return parseFloat(a[1]) / b
    }
    return NaN
}
function PH(a, b) {
    var c = Dt.auto, d = Dt[b];
    return d >= Dt.medium ? new Ft(d, c, !1) : d >= c ? new Ft(c, d, !1) : a
}

var QH, RH;
function SH(a) {
    Ww.call(this, 1, arguments);
    this.j = a
}
inherit(SH, Ww);
var ex = new Zw("timing-sent", SH);
var TH = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}, UH = x(TH.clearResourceTimings || TH.webkitClearResourceTimings || TH.mozClearResourceTimings || TH.msClearResourceTimings || TH.oClearResourceTimings || v, TH), VH = TH.mark ? function (a) {
    TH.mark(a)
} : v;
function WH(a, b, c) {
    XH(c)[a] = b || y();
    b || VH(a);
    if (Of("CSI_LOG_ON_TICK") && (b = Of("TIMING_ACTION"), a = XH(c), b && a._start && YH(c))) {
        b = !0;
        var d = Of("TIMING_WAIT", []);
        if (d.length)
            for (var e = 0, g = d.length; e < g; ++e)
                if (!(d[e] in a)) {
                    b = !1;
                    break
                }
        (b || c) && ZH(c)
    }
}
function $H(a, b) {
    var c = XH(b);
    return a in c
}
function aI(a, b, c) {
    bI(c).info[a] = b
}
function YH(a) {
    a = XH(a);
    if (a.aft)
        return a.aft;
    for (var b = Of("TIMING_AFT_KEYS", ["ol"]), c = b.length, d = 0; d < c; d++) {
        var e = a[b[d]];
        if (e)
            return e
    }
    return NaN
}
function cI(a) {
    return Math.round(TH.timing.navigationStart + a)
}
function dI(a) {
    var b = window.location.protocol, c = TH.getEntriesByType("resource"), d = c.filter(function (a) {
        return 0 == a.name.indexOf(b + "//fonts.googleapis.com/css?family=")
    })[0], c = c.filter(function (a) {
        return 0 == a.name.indexOf(b + "//fonts.gstatic.com/s/")
    }).reduce(function (a, b) {
        return b.duration > a.duration ? b : a
    }, {duration: 0});
    d && 0 < d.startTime && 0 < d.responseEnd && (a.wfcs = cI(d.startTime), a.wfce = cI(d.responseEnd));
    c && 0 < c.startTime && 0 < c.responseEnd && (a.wffs = cI(c.startTime), a.wffe = cI(c.responseEnd))
}
function ZH(a) {
    var b = XH(a), c = bI(a).span, d = bI(a).info, e = t("yt.timing.reportbuilder_");
    if (e) {
        if (e = e(b, c, d, a))
            eI(e), fI(a), UH()
    } else {
        e = {v: 2, s: "youtube", action: Of("TIMING_ACTION")};
        if (TH.now && TH.timing) {
            var g = TH.timing.navigationStart + TH.now(), g = Math.round(y() - g);
            d.yt_hrd = g
        }
        var g = Of("TIMING_INFO") || {}, h;
        for (h in g)
            d[h] = g[h];
        h = d.srt;
        delete d.srt;
        var k;
        h || 0 === h || (k = TH.timing || {}, h = Math.max(0, k.responseStart - k.navigationStart), isNaN(h) && d.pt && (h = d.pt));
        if (h || 0 === h)
            d.srt = h;
        d.h5jse && (g = window.location.protocol +
        t("ytplayer.config.assets.js"), (g = TH.getEntriesByName ? TH.getEntriesByName(g)[0] : null) ? d.h5jse = Math.round(d.h5jse - g.responseEnd) : delete d.h5jse);
        b.aft = YH(a);
        g = b._start;
        if ("cold" == d.yt_lt) {
            k || (k = TH.timing || {});
            var l;
            t: if (l = k, l.msFirstPaint)
                l = Math.max(0, l.msFirstPaint);
            else {
                var p = window.chrome;
                if (p && (p = p.loadTimes, ia(p))) {
                    var p = p(), r = 1E3 * Math.min(p.requestTime || Infinity, p.startLoadTime || Infinity), r = Infinity === r ? 0 : l.navigationStart - r;
                    l = Math.max(0, Math.round(1E3 * p.firstPaintTime + r) || 0);
                    break t
                }
                l = 0
            }
            0 < l &&
            l > g && (b.fpt = l);
            l = bI(a).span;
            p = k.redirectEnd - k.redirectStart;
            0 < p && (l.rtime_ = p);
            p = k.domainLookupEnd - k.domainLookupStart;
            0 < p && (l.dns_ = p);
            p = k.connectEnd - k.connectStart;
            0 < p && (l.tcp_ = p);
            p = k.connectEnd - k.secureConnectionStart;
            k.secureConnectionStart >= k.navigationStart && 0 < p && (l.stcp_ = p);
            p = k.responseStart - k.requestStart;
            0 < p && (l.req_ = p);
            p = k.responseEnd - k.responseStart;
            0 < p && (l.rcv_ = p);
            Of("EXP_WEBFONT_ENABLED") && TH.getEntriesByType && dI(b)
        }
        Of("CSI_MORE") && (d.p = Of("CLIENT_PROTOCOL") || "unknown", d.t = Of("CLIENT_TRANSPORT") ||
        "unknown");
        for (var u in d)
            "_" != u.charAt(0) && (e[u] = d[u]);
        d = {};
        u = [];
        for (var C in b)
            "_" != C.charAt(0) && (l = Math.max(Math.round(b[C] - g), 0), d[C] = l, u.push(C + "." + l));
        e.rt = u.join(",");
        b = {};
        C = [];
        for (var V in c)
            "_" != V.charAt(0) && (b[V] = c[V], C.push(V + "." + c[V]));
        e.it = C.join(",");
        (c = t("ytdebug.logTiming")) && c(e, d, b);
        fI(a);
        UH();
        Of("EXP_DEFER_CSI_PING") ? (gI(), QH = e, RH = L(gI, 0)) : eI(e);
        a = new SH(d.aft + (h || 0));
        c = ex;
        (e = fx()) && e.publish.call(e, c.toString(), c, a)
    }
}
function eI(a) {
    Of("EXP_DEFER_CSI_PING") && (M(RH), QH = null);
    var b = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", c = "", d;
    for (d in a)
        c += "&" + d + "=" + a[d];
    hg(b + "?" + c.substring(1))
}
function gI(a) {
    QH && (a && (QH.yt_fss = a), eI(QH))
}
function XH(a) {
    return bI(a).tick
}
function bI(a) {
    return t("ytcsi." + (a || "") + "data_") || fI(a)
}
function fI(a) {
    var b = {tick: {}, span: {}, info: {}};
    q("ytcsi." + (a || "") + "data_", b, void 0);
    return b
}

var hI = {oI: 0, xH: 1, cI: 2};
function iI(a, b, c) {
    c = c || {};
    Hj(c.Za, c.pageId, x(jI, m, a, b, c), c.onError)
}
function jI(a, b, c) {
    var d = {};
    0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
    d.video_id = a;
    d.plid = c.playbackId;
    c.playlistId && (d.list = c.playlistId);
    c.Za && (d.authuser = c.Za);
    c.pageId && (d.pageid = c.pageId);
    a = {screen: Pe({h: screen.height, w: screen.width, d: screen.colorDepth})};
    c.kD && (a.station_id = c.kD);
    Bj("/watch_actions_ajax", {format: "XML", method: "POST", Vf: d, Eb: a, fb: c.fb, onError: c.onError, $b: c.$b})
}

function kI(a, b) {
    this.j = a;
    this.k = b
}
kI.prototype.getValue = function () {
    return this.k
};
kI.prototype.clone = function () {
    return new kI(this.j, this.k)
};
function lI(a) {
    this.j = [];
    if (a)
        t: {
            var b, c;
            if (a instanceof lI) {
                if (b = a.Ha(), c = a.Ka(), 0 >= a.Pa()) {
                    a = this.j;
                    for (var d = 0; d < b.length; d++)
                        a.push(new kI(b[d], c[d]));
                    break t
                }
            } else
                b = Qb(a), c = Pb(a);
            for (d = 0; d < b.length; d++)
                mI(this, b[d], c[d])
        }
}
function mI(a, b, c) {
    var d = a.j;
    d.push(new kI(b, c));
    b = d.length - 1;
    a = a.j;
    for (c = a[b]; 0 < b;)
        if (d = b - 1 >> 1, a[d].j > c.j)
            a[b] = a[d], b = d;
        else
            break;
    a[b] = c
}
f = lI.prototype;
f.remove = function () {
    var a = this.j, b = a.length, c = a[0];
    if (!(0 >= b)) {
        if (1 == b)
            nb(a);
        else {
            a[0] = a.pop();
            for (var a = 0, b = this.j, d = b.length, e = b[a]; a < d >> 1;) {
                var g = 2 * a + 1, h = 2 * a + 2, g = h < d && b[h].j < b[g].j ? h : g;
                if (b[g].j > e.j)
                    break;
                b[a] = b[g];
                a = g
            }
            b[a] = e
        }
        return c.getValue()
    }
};
f.Ka = function () {
    for (var a = this.j, b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d].getValue());
    return b
};
f.Ha = function () {
    for (var a = this.j, b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d].j);
    return b
};
f.jf = function (a) {
    return hb(this.j, function (b) {
        return b.getValue() == a
    })
};
f.clone = function () {
    return new lI(this)
};
f.Pa = function () {
    return this.j.length
};
f.isEmpty = function () {
    return mb(this.j)
};
f.clear = function () {
    nb(this.j)
};
function nI() {
    lI.call(this)
}
inherit(nI, lI);
function oI(a, b) {
    T.call(this);
    this.j = a;
    this.o = new nI;
    this.B = {};
    this.A = b || ""
}
inherit(oI, T);
oI.prototype.k = !1;
function pI(a, b, c) {
    var d;
    for (c = DH(a.j, c); 0 <= c;) {
        d = a.j.j[c];
        if (d = d.o[Math.floor(b / (d.Ab * d.rows))] ? BH(d, b) : null)
            return d;
        c--
    }
    return BH(a.j.j[0], b)
}
function qI(a, b, c) {
    c = DH(a.j, c);
    for (var d, e; 0 <= c; c--)
        if (d = a.j.j[c], e = Math.floor(b / (d.Ab * d.rows)), !d.o[e]) {
            d = a;
            var g = c, h = g + "-" + e;
            d.B[h] || (d.B[h] = !0, mI(d.o, g, {Zp: g, lq: e}))
        }
    rI(a)
}
function rI(a) {
    if (!a.k)
        if (a.o.isEmpty())
            a.k = !1;
        else {
            a.k = !0;
            var b = a.o.remove(), c = new Image;
            a.A && (c.crossOrigin = a.A);
            c.src = dg(AH(a.j.j[b.Zp], b.lq));
            c.onload = x(a.C, a, b.Zp, b.lq)
        }
}
oI.prototype.C = function (a, b) {
    this.k = !1;
    var c = this.j.j[a];
    c.o[b] = !0;
    rI(this);
    var d, e = c.Ab * c.rows;
    d = b * e;
    c = Math.min(d + e - 1, c.tf() - 1);
    d = [d, c];
    this.publish("l", d[0], d[1])
};
function vr(a) {
    T.call(this);
    this.Hh = new H(0, 0);
    this.Ma = this.ga = !1;
    this.Se = "";
    this.Re = this.va = !1;
    this.Xa = {};
    this.captionTracks = [];
    this.xa = [];
    this.od = [];
    this.V = new Ct("und", "Default", "und", "und", !0);
    this.Ea = 0;
    this.cf = new Jv(this.Or, 5E3, this);
    S(this, this.cf);
    this.H = [];
    this.A = {};
    this.keywords = {};
    this.C = {};
    sI(this, a)
}
inherit(vr, T);
vr.D = /\/img\/watermark\/youtube_(hd_)?watermark(-vfl\S{6})?.png$/;
vr.k = 1;
vr.A = -21;
vr.B = 18E3;
vr.C = "author cc_asr cc_load_policy iv_load_policy iv_new_window keywords oauth_token requires_purchase rvs sentiment subscribed title ttsurl ypc_buy_url ypc_full_video_length ypc_item_thumbnail ypc_item_title ypc_item_url ypc_offer_button_text ypc_offer_description ypc_offer_headline ypc_offer_id ypc_preview ypc_price_string ypc_video_rental_bar_text".split(" ");
vr.j = {
    iurl: "default.jpg",
    iurlmq: "mqdefault.jpg",
    iurlhq: "hqdefault.jpg",
    iurlsd: "sddefault.jpg",
    iurlmaxres: "maxresdefault.jpg"
};
vr.o = ["www.youtube.com", "manifest.googlevideo.com"];
f = vr.prototype;
f.adModule = !1;
f.adaptiveFormats = "";
f.Os = null;
f.allowEmbed = !0;
f.rb = !1;
f.Mh = "";
f.jo = !1;
f.qk = "";
f.vk = !1;
f.no = vr.k;
f.Oj = null;
f.zs = null;
f.author = "";
f.Mj = 0;
f.Rh = !1;
f.to = 3;
f.Ho = !1;
f.ef = "";
f.ya = "";
f.contentCheckOk = !1;
f.Ue = 0;
f.Ok = !1;
f.ai = !1;
f.Nk = !1;
f.lf = 0;
f.Hf = !1;
f.np = !1;
f.Nj = 0;
f.Rp = !1;
f.Jg = !1;
f.Up = !0;
f.Ci = !1;
f.Ml = !1;
f.Ol = !1;
f.Na = !1;
f.Pl = !1;
f.Ql = !1;
f.Zd = !1;
f.Wp = !1;
f.Ul = !1;
f.nz = 0;
f.lengthSeconds = 0;
f.rn = 0;
f.wr = !1;
f.racyCheckOk = !1;
f.ne = 1;
f.Dm = Ht;
f.Rr = 0;
f.Nm = !1;
f.startSeconds = 0;
f.uj = null;
f.Cm = 2;
f.vj = Ht;
f.ds = !1;
f.eh = !1;
f.Me = null;
f.title = "";
f.Ne = "";
f.Jj = null;
f.Zm = "vvt";
f.Dr = !1;
f.Wr = !1;
f.clipStart = 0;
f.clipEnd = Infinity;
function Ar(a, b) {
    var c = b || {};
    c.iv_invideo_url && (a.Mh = cg(c.iv_invideo_url));
    c.iv_cta_url && (a.qk = cg(c.iv_cta_url));
    c.iv_ads_only && (a.jo = "1" == c.iv_ads_only);
    c.cta_conversion_urls && (a.lc = c.cta_conversion_urls);
    a.author = LH(a.author, c.author);
    a.Rh = IH(a.Rh, c.cc_asr);
    var d = c.ttsurl || a.ef;
    d && Yf(d) ? a.ef = d : a.ef = MH(a.ef, c.ttsurl);
    c.caption_tracks && c.caption_audio_tracks && (tI(a, c.caption_tracks), a.xa = pj(c.caption_audio_tracks), c.caption_translation_languages && uI(a, c.caption_translation_languages));
    a.ya = LH(a.ya,
        c.cpn);
    a.subscribed = LH(a.subscribed, c.subscribed);
    a.Cm = JH(a.Cm, c.sentiment, hI);
    a.title = LH(a.title, c.title);
    a.oa = LH(a.oa, c.ypc_preview);
    a.wr = IH(a.wr, c.paygated);
    a.Dr = IH(a.Dr, c.requires_purchase);
    c.keywords && (a.keywords = vI(c.keywords));
    c.rvs && (a.M = pj(c.rvs));
    a.contentCheckOk = IH(a.contentCheckOk, "1" == c.cco);
    a.racyCheckOk = IH(a.racyCheckOk, "1" == c.rco);
    a.B = LH(a.B, c.oauth_token);
    D(vr.C, function (a) {
        a in c && (this.A[a] = c[a])
    }, a)
}
function sI(a, b) {
    var c = b || {};
    a.rb = "1" != c.hlsdvr || Uh || Rh && 5 > Tr ? !1 : !0;
    a.vk = "1" == c.infringe || "1" == c.muted;
    a.Cc = c.authkey;
    a.Za = c.authuser;
    a.ya || (a.ya = c.cpn || uD());
    a.dw = y();
    a.Iv = c.t;
    a.Ok = IH(a.Ok, c.cenchd);
    a.ai = IH(a.ai, c.enable_cardio);
    a.Nk = IH(a.Nk, c.enable_cardio_before_playback);
    a.lf = KH(a.lf, c.end || c.endSeconds);
    a.Aa = LH(a.Aa, c.itct);
    a.Up = "1" != c.no_get_video_log;
    a.Ci = "1" == c.tmi;
    a.Ml = IH(a.Ml, c.noiba);
    a.Ol = "1" == c.livemonitor;
    a.Na = "1" == c.live_playback;
    a.Pl = IH(a.Pl, c.mdx);
    a.Ql = IH(a.Ql, c.on3g);
    a.Ul = IH(a.Ul,
        c.utpsa);
    for (var d in vr.j) {
        var e = c[d + "_webp"] || c[d];
        ag(e) && (a.Xa[vr.j[d]] = e)
    }
    a.F = LH(a.F, c.vvt);
    a.Mv = c.osig;
    a.ie = c.ptchn;
    a.$e = c.oid;
    a.K = c.ptk;
    a.af = c.pltype;
    a.playbackId = c.plid;
    a.G = c.eventid;
    a.nb = c.osid;
    a.hw = c.vm;
    a.gw = c.of;
    a.playlistId = LH(a.playlistId, c.list);
    a.bf = c.pyv_view_beacon_url;
    a.Vv = c.pyv_quartile25_beacon_url;
    a.Xv = c.pyv_quartile50_beacon_url;
    a.$v = c.pyv_quartile75_beacon_url;
    a.Sv = c.pyv_quartile100_beacon_url;
    c.remarketing_url && (a.remarketingUrl = c.remarketing_url);
    c.ppv_remarketing_url && (a.ppvRemarketingUrl =
        c.ppv_remarketing_url);
    a.purchaseId = c.purchase_id;
    a.Vn = c.sdetail;
    !a.Va && c.session_data && (a.Va = mj(c.session_data, "&").feature);
    a.de = 1 == KH(a.de ? 1 : 0, c.is_fling);
    a.ob = LH(a.ob, c.ctrl);
    a.Kb = LH(a.Kb, c.ytr);
    a.Pe = c.ytrcc;
    a.Wr = "1" == c.skip_kansas_logging;
    a.ac = LH(a.ac, c.cl);
    a.Dm = PH(a.Dm, c.vq);
    a.vj = PH(a.vj, c.suggestedQuality);
    a.la = c.approx_threed_layout || 0;
    a.ds = "1" == c.threed_converted;
    a.startSeconds = KH(a.startSeconds, c.start || c.startSeconds);
    a.Wn = IH(a.Wn, c.ssrt);
    a.videoId = c.docid || c.video_id || c.videoId || a.videoId;
    a.Tn = LH(a.Tn, c.vss_credentials_token);
    a.Zm = LH(a.Zm, c.vss_credentials_token_type);
    wI(a, c.watermark);
    a.Un = LH(a.Un, c.ypc_gid);
    a.Wa = LH(a.Wa, c.ypc_license_session_token);
    a.heartbeatToken = LH(a.heartbeatToken, c.heartbeat_token);
    a.Te = KH(a.Te, c.heartbeat_interval);
    a.Ze = KH(a.Ze, c.heartbeat_retries);
    if (c.ad3_module || c.ad_module)
        "1" == c.allow_html5_ads ? (a.adModule = !0, "1" == c.ad_preroll && a.H.push("ad")) : "1" != c.supported_without_ads && (a.np = !0);
    c.adaptive_fmts && (a.adaptiveFormats = c.adaptive_fmts);
    void 0 != c.atc && (a.ba =
        c.atc);
    c.license_info && (a.Os = xI(c.license_info));
    c.allow_embed && (a.allowEmbed = "1" == c.allow_embed);
    c.autonav && (a.Rp = "1" == c.autonav);
    c.autoplay && (a.Jg = "1" == c.autoplay);
    c.iv_load_policy && (a.pa = yI(c.iv_load_policy, a.pa));
    c.cc_load_policy && (a.to = yI(c.cc_load_policy, 2));
    "0" == c.dash && (a.Ho = !0);
    c.dashmpd && (a.O = Re(c.dashmpd, {cpn: a.ya}), d = /\/s\/([0-9A-F.]+)/, e = d.exec(a.O)) && (e = ht(e[1]), a.O = a.O.replace(d, "/signature/" + e));
    c.delay && (a.Ue = Wa(c.delay));
    void 0 != c.end && (a.clipEnd = c.end);
    c.fresca_preroll && a.H.push("fresca");
    c.idpj && (a.Nj = Wa(c.idpj));
    c.url_encoded_fmt_stream_map && (a.Ne = c.url_encoded_fmt_stream_map);
    c.hlsvp && (a.S = c.hlsvp);
    c.length_seconds && (a.lengthSeconds = Wa(c.length_seconds));
    !a.lengthSeconds && a.Na && (a.lengthSeconds = a.rb ? 3600 : Infinity);
    c.ldpj && (a.rn = Wa(c.ldpj));
    c.loudness && (a.perceptualLoudnessDb = c.loudness, a.no = zI(a));
    c.partnerid && (a.X = Wa(c.partnerid));
    c.probe_url && (a.probeUrl = dg(Re(c.probe_url, {cpn: a.ya})));
    c.pyv_billable_url && -1 != c.pyv_billable_url.search(Ef) && (a.ja = c.pyv_billable_url);
    c.pyv_conv_url &&
    -1 != c.pyv_conv_url.search(Ef) && (a.ka = c.pyv_conv_url);
    c.video_masthead_ad_quartile_urls && (d = c.video_masthead_ad_quartile_urls, a.Ia = d.quartile_0_url, a.fe = d.quartile_25_url, a.ge = d.quartile_50_url, a.he = d.quartile_75_url, a.ee = d.quartile_100_url);
    c.spacecast_address && (a.H.push("spacecast"), a.ib = c.spacecast_address);
    void 0 == c.start || "1" == c.resume || a.Na || (a.clipStart = c.start);
    c.threed_module && !c.threed_converted && (a.na = c.threed_module, a.bw = 6);
    c.two_stage_token && (a.Oj = c.two_stage_token);
    c.url_encoded_third_party_media &&
    (a.Me = pj(c.url_encoded_third_party_media));
    c.watch_ajax_token && (a.zs = c.watch_ajax_token);
    c.ypc_module && a.H.push("ypc");
    c.ypc_clickwrap_module && a.H.push("ypc_clickwrap");
    a.Gh = LH(a.Gh, c.ucid);
    D("baseUrl uid oeid ieid ppe engaged subscribed".split(" "), function (a) {
        c[a] && (this.C[a] = c[a])
    }, a);
    a.C.focEnabled = IH(a.C.focEnabled, c.focEnabled);
    a.C.rmktEnabled = IH(a.C.rmktEnabled, c.rmktEnabled);
    a.A = c;
    Ar(a, c);
    AI(a)
}
function AI(a) {
    (a.Na || a.Ol) && "1" == a.A.as3fb || !Bu() || a.Ho || (a.adaptiveFormats ? a.k = qH(BI(a, a.adaptiveFormats), a.Os) : a.O && (a.Hf = !0, a.ga = !0))
}
f.uA = function (a) {
    this.ha() || (this.k = a, this.k.subscribe("refresh", this.Cq, this), WH("mrc"), this.k && (this.lengthSeconds = this.k.duration || wH(this.k) || this.lengthSeconds), this.tn())
};
f.Cq = function () {
    this.k.isLive || this.k.unsubscribe("refresh", this.Cq, this);
    var a = wb(this.k.o.A, this.Ea);
    0 < a.length && (this.publish("cuepointupdated", a), this.Ea += a.length)
};
f.tn = function () {
    this.ha() || (this.Hf = !1, this.va && !CI(this) ? this.publish("dataloaderror", new xq("fmt.noneavailable", !0)) : this.publish("dataloaded", this.A))
};
function QE(a) {
    if (!a.ha()) {
        a.j = null;
        a.R = null;
        a.I = null;
        if (a.ea) {
            var b = BI(a, a.ea);
            a.I = Eu(b, !1);
            a.j = new Mt(E(a.I, function (a) {
                return a.getInfo()
            }))
        }
        !a.j && a.k && (a.j = Hu(a.k));
        if (!a.j) {
            if (a.Me && a.Wp)
                a.I = Fu(a.Me);
            else {
                b = BI(a, a.Ne);
                if (a.S) {
                    var c = HH(a.S, a.ya, -1 == a.S.indexOf("/ibw/") && !a.Ql);
                    b.push(c)
                }
                a.I = Eu(b, !!a.na || a.eh)
            }
            a.I.length && (a.j = new Mt(E(a.I, function (a) {
                return a.getInfo()
            })))
        }
        DI(a);
        a.Rr = Math.min(.8 * a.lengthSeconds, 180)
    }
}
function DD(a) {
    return a.o && a.o.A || null
}
f.vc = function (a) {
    return w(this.keywords[a]) ? this.keywords[a] : null
};
function EI(a) {
    a.Jj || (a.A.storyboard_spec ? a.Jj = new CH(a.A.storyboard_spec, Wa(a.A.length_seconds)) : a.A.live_storyboard_spec && a.k && (a.Jj = new FH(a.A.live_storyboard_spec, a.k)));
    return a.Jj
}
function FI(a) {
    var b = EI(a);
    !a.uj && b && (a.uj = new oI(b), S(a, a.uj));
    return a.uj
}
function Dr(a) {
    return a.k && !isNaN(xH(a.k)) ? xH(a.k) : 0
}
function GI(a) {
    return !a.ha() && !(!a.videoId && !a.Me)
}
function CI(a) {
    return GI(a) && !a.Hf && !a.ga && (!!(a.k || a.Ne || a.Me || a.ea || a.S) || G(a.H, "fresca") || G(a.H, "ypc"))
}
function HI(a, b, c) {
    a.ha() || (a.Se = b, a.va = !!c, a.Hf = !0, a.Or())
}
f.Or = function () {
    Bj(this.Se, {format: "RAW", method: "GET", context: this, fb: this.KA, onError: this.Hq});
    WH("vir")
};
f.Fd = function (a) {
    if (30 == this.X)
        return (a = this.Xa["default.jpg"]) ? a : this.videoId ? Re("//docs.google.com/vt", {
            id: this.videoId,
            authuser: this.Za,
            authkey: this.Cc
        }) : "//docs.google.com/images/doclist/cleardot.gif";
    a || (a = "hqdefault.jpg");
    var b = this.Xa[a];
    return b || "sddefault.jpg" == a || "maxresdefault.jpg" == a ? b : rA(this.videoId, a)
};
f.KA = function (a) {
    if (!this.ha()) {
        var b = a.responseText;
        b ? (this.Hf = !1, a = oj(b), "fail" == a.status ? this.publish("onStatusFail", a) : (WH("virc"), sI(this, a), this.tn())) : this.Hq(a)
    }
};
f.Hq = function (a) {
    if (!this.ha()) {
        var b = "manifest.net", c = !0, d = "rc." + a.status;
        this.va && (this.Re ? b = "manifest.net.retryexhausted" : (this.Re = !0, c = !1, b = a.status ? "manifest.net.badstatus" : "manifest.net.connect", this.cf.start()));
        this.publish("dataloaderror", new xq(b, c, d))
    }
};
function zI(a) {
    return a.perceptualLoudnessDb ? (a = Math.min(vr.A - a.perceptualLoudnessDb, 0), Math
.
    pow(10, a / 20)
) :
    vr.k
}
function yI(a, b) {
    var c = parseInt(a, 10);
    return Ob(bz, c) ? c : b
}
function BI(a, b) {
    var c = pj(b);
    D(c, function (a) {
        a.url && (a.url = Re(a.url, {cpn: this.ya}))
    }, a);
    return c
}
function vI(a) {
    var b = {};
    D(a.split(","), function (a) {
        var d = a.split("=");
        2 == d.length ? b[d[0]] = d[1] : b[a] = !0
    });
    return b
}
function wI(a, b) {
    if (b) {
        var c = b.split(",");
        2 <= c.length && (a.W = c[1], ag(a.W) && -1 == a.W.search(vr.D) || (a.W = ""))
    }
}
function xI(a) {
    a = pj(a);
    var b = {};
    D(a, function (a) {
        var d = a.family;
        a = a.url;
        d && a && (b[d] = a)
    });
    return b
}
function tI(a, b) {
    for (var c = pj(b), d = 0; d < c.length; d++) {
        var e = c[d];
        a.captionTracks.push(new xt({
            UK: e.is_translatable,
            languageCode: e.language_code,
            languageName: e.name,
            url: e.base_url,
            $K: e.vss_id,
            kind: e.kind
        }))
    }
}
function uI(a, b) {
    for (var c = pj(b), d = 0; d < c.length; d++) {
        var e = c[d];
        a.od.push(new wt({languageCode: e.language_code, languageName: e.language_name}))
    }
}
function DI(a) {
    for (var b = a.j ? a.j.audioTracks : [], b = b.concat(a.V), c = 0; c < a.xa.length; c++)
        for (var d = a.xa[c], e = 0; e < b.length; e++) {
            var g = b[e], h = d.audio_content_type, k = g.tk == h && g.language == d.language_code;
            if (g == a.V && "original" == h || k) {
                h = d.caption_track_indices.split(",");
                for (k = 0; k < h.length; k++)
                    g.captionTracks[k] = a.captionTracks[parseInt(h[k], 10)];
                d.default_caption_track_index && (g.Lk = a.captionTracks[parseInt(d.default_caption_track_index, 10)]);
                d.forced_caption_track_index && (g.di = a.captionTracks[parseInt(d.forced_caption_track_index,
                    10)]);
                g.uo = parseInt(d.visibility, 10)
            }
        }
}
function Bv(a, b) {
    return !!a.A[b]
}
function II(a) {
    return a.Na && !a.rb
}
function JI(a) {
    return a.Na && a.rb
}

function KI(a) {
    T.call(this);
    this.views = 0;
    this.j = [];
    this.k = [];
    this.Sa = Math.max(0, a.index || 0);
    this.ag = !!a.loop;
    this.startSeconds = a.startSeconds || 0;
    this.pq = "1" == a.mob;
    this.title = a.playlist_title || "";
    this.description = a.playlist_description || "";
    this.author = a.author || "";
    this.B = {};
    a.video_id && (this.j[this.Sa] = a);
    a.api && ("string" == typeof a.api && 16 == a.api.length ? a.list = "PL" + a.api : a.playlist = a.api);
    this.A = 0;
    if (a.list)
        switch (a.listType) {
            case "user_uploads":
                LI(this, a.list);
                break;
            case "user_favorites":
                MI(this,
                    a.list);
                break;
            case "search":
                NI(this, a.list);
                break;
            default:
                a.playlist_length && (this.kc = a.playlist_length), this.o = ZD(a.list), 0 == a.fetch && a.videoList ? OI(this, a.videoList) : PI(this)
        }
    else if (a.playlist) {
        var b = a.playlist.toString().split(",");
        0 < this.Sa && (this.j = []);
        D(b, function (a) {
            a && this.j.push({video_id: a})
        }, this);
        this.kc = this.j.length;
        b = E(this.j, function (a) {
            return a.video_id
        });
        QI(this, "/list_ajax?style=json&action_get_templist=1", {video_ids: b.join(",")});
        this.ae = !0
    } else
        a.videoList && OI(this, a.videoList);
    hr(this, !!a.shuffle);
    a.suggestedQuality && (this.quality = a.suggestedQuality);
    for (var c in vr.j)
        b = "playlist_" + c, b = a[b + "_webp"] || a[b], ag(b) && (this.B[vr.j[c]] = b)
}
inherit(KI, T);
f = KI.prototype;
f.ag = !1;
f.startSeconds = 0;
f.$r = !1;
f.Sa = 0;
f.title = "";
f.kc = 0;
f.pq = !1;
f.ae = !1;
f.Lg = !1;
f.Je = null;
function RI(a) {
    return a.ag || a.Sa + 1 < a.kc
}
function SI(a) {
    var b = a.Sa + 1;
    b >= a.kc && (b = a.ag ? 0 : -1);
    return b
}
function TI(a) {
    var b = SI(a);
    if (-1 == b)
        return null;
    UI(a, b);
    return ir(a, b)
}
function VI(a) {
    var b;
    b = a.Sa - 1;
    0 > b && (b = a.ag ? a.kc - 1 : -1);
    if (-1 == b)
        return null;
    UI(a, b);
    return ir(a, a.Sa)
}
function ir(a, b) {
    var c = void 0 != b ? b : a.Sa, c = a.j && c in a.j ? a.j[a.k[c]] : null, d = null;
    c && (d = new vr(c), d.startSeconds = a.startSeconds || d.clipStart || 0, a.o && (d.playlistId = a.o.toString()));
    return d
}
function hr(a, b) {
    a.$r = b;
    var c = a.k && null != a.k[a.Sa] ? a.k[a.Sa] : a.Sa;
    a.k = [];
    for (var d = 0; d < a.j.length; d++)
        a.k.push(d);
    a.Sa = c;
    a.A++;
    if (a.$r) {
        c = a.k[a.Sa];
        for (d = 1; d < a.k.length; d++) {
            var e = Math.floor(Math.random() * (d + 1)), g = a.k[d];
            a.k[d] = a.k[e];
            a.k[e] = g
        }
        for (d = 0; d < a.k.length; d++)
            a.k[d] == c && (a.Sa = d);
        a.A++
    }
    a.publish("shuffle")
}
f.Fd = function (a) {
    return this.B[a || "hqdefault.jpg"]
};
function UI(a, b) {
    a.Sa = Pc(b, 0, a.kc - 1);
    a.startSeconds = 0
}
function LI(a, b) {
    a.Lg || (a.o = new YD("UU", "PLAYER_" + b), QI(a, "/list_ajax?style=json&action_get_user_uploads_by_user=1", {username: b}))
}
function MI(a, b) {
    a.Lg || (a.o = new YD("FL", "PLAYER_" + b), QI(a, "/list_ajax?style=json&action_get_favorited_by_user=1", {username: b}))
}
function NI(a, b) {
    if (!a.Lg) {
        a.o = new YD("SR", b);
        var c = {search_query: b};
        a.pq && (c.mob = "1");
        QI(a, "/search_ajax?style=json&embeddable=1", c)
    }
}
function PI(a) {
    if (!a.Lg) {
        var b = {list: a.o}, c = ir(a);
        c && c.videoId && (b.v = c.videoId);
        QI(a, "/list_ajax?style=json&action_get_list=1", b)
    }
}
function QI(a, b, c) {
    Bj(Re(b, c), {
        format: "JSON", fb: function (a, b) {
            WI(this, b)
        }, onError: function () {
            this.publish("error")
        }, context: a
    })
}
function WI(a, b) {
    if (b.video && b.video.length) {
        a.title = b.title;
        a.description = b.description;
        a.views = b.views;
        a.author = b.author;
        var c = ir(a);
        a.j = [];
        D(b.video, function (a) {
            a && (a.video_id = a.encrypted_id, this.j.push(a))
        }, a);
        a.kc = a.j.length;
        XI(a, c);
        hr(a, !1);
        a.Lg = !1;
        a.ae = !0;
        a.A++;
        a.Je && a.Je()
    }
}
function OI(a, b) {
    0 < a.Sa && (a.j = []);
    D(b, function (a) {
        this.j.push(a)
    }, a);
    a.kc = a.j.length;
    a.ae = !0
}
function XI(a, b) {
    if (b) {
        var c = b.videoId;
        if (!a.j[a.Sa] || a.j[a.Sa].video_id != c)
            for (var d = 0; d < a.j.length; d++)
                if (a.j[d].video_id == c) {
                    a.Sa = d;
                    break
                }
    }
}
f.L = function () {
    this.Je = null;
    vi(this.j);
    KI.J.L.call(this)
};
function YI() {
    R.call(this);
    this.j = [];
    this.C = {};
    this.o = {};
    this.A = {};
    this.k = this.D = null;
    this.B = [];
    this.F = null
}
inherit(YI, R);
YI.prototype.Do = function (a) {
    if (this.k) {
        var b;
        var c = ka(a);
        b = this.C[c];
        if (!b)
            if (this.k) {
                if (b = a(this.k)) {
                    a = this.C[c] = b;
                    for (var d in this.D)
                        a.subscribe(d, this.D[d]);
                    a.subscribe("command_log_timing", this.G, this);
                    S(this, b)
                }
            } else
                b = null;
        b && b.Ca(this.k) && !G(this.j, b) && (b.create(), this.j.push(b), G(this.B, b.ua) && (b.Tb = this.F, b.Ti(!!b.Tb)))
    }
};
function ZI(a) {
    a.j = fb(a.j, function (a) {
        if (!this.k || a.Lm(this.k)) {
            try {
                a.destroy()
            } catch (c) {
                Sf(c)
            }
            return !1
        }
        return !0
    }, a)
}
function $I(a, b, c) {
    aJ(a);
    a.F = b;
    a.B = tb(c);
    D(a.j, function (a) {
        0 <= db(c, a.ua) && (a.Tb = b, a.Ti(!!a.Tb))
    })
}
function aJ(a) {
    D(a.B, function (a) {
        if (a = Vq(this, a))
            a.Tb = null, a.Ti(!1)
    }, a);
    a.F = null;
    a.B = []
}
function bJ(a, b) {
    if (!b)
        return E(a.j, function (a) {
            return a.ua
        });
    var c = Vq(a, b);
    return c ? c.dg() : []
}
function Vq(a, b) {
    return F(a.j, function (a) {
        return a.ua == b
    })
}
YI.prototype.H = function (a, b) {
    D(this.j, function (c) {
        c.publish(a, b)
    })
};
function cJ(a) {
    var b = {};
    D(a.j, function (a) {
        qa(b, a.sh())
    });
    return b
}
YI.prototype.G = function (a, b) {
    qa(this.A, a || null);
    qa(this.o, b || null)
};
YI.prototype.isAvailable = function (a) {
    a = Vq(this, a);
    return !(!a || !a.Uj)
};
function dJ(a, b, c) {
    this.A = b;
    this.j = c;
    this.o = a
}
dJ.prototype.getMessage = function () {
    return this.A
};
dJ.prototype.getErrorCode = function () {
    return this.j
};
dJ.prototype.toString = function () {
    return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.k ? " Caused by: " + this.k : "")
};
function eJ(a, b) {
    $l.call(this, "adError");
    this.o = a;
    this.A = b ? b : null
}
inherit(eJ, $l);
var fJ = "acceptinvitation acceptinvitationlinear click close collapse complete creativeview engagedview exitfullscreen expand firstquartile fullscreen midpoint mute pause progress replay resume rewind skipshown skip start stop thirdquartile unmute userClose videoShareClicked videoShareShown measurable_impression viewable_impression".split(" "), gJ = "acceptinvitation click collapse creativeview expand progress close".split(" ");
function hJ(a, b, c) {
    $l.call(this, a);
    this.A = b;
    this.o = null != c ? c : null
}
inherit(hJ, $l);
hJ.prototype.getAd = function () {
    return this.A
};
var iJ = {
    CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
    CONTENT_RESUME_REQUESTED: "contentResumeRequested",
    CLICK: "click",
    mK: "videoClicked",
    BH: "engagedview",
    EH: "expandedChanged",
    STARTED: "start",
    Sn: "impression",
    yI: "measurable_impression",
    co: "viewable_impression",
    PAUSED: "pause",
    qJ: "resume",
    FIRST_QUARTILE: "firstquartile",
    MIDPOINT: "midpoint",
    THIRD_QUARTILE: "thirdquartile",
    COMPLETE: "complete",
    USER_CLOSE: "userClose",
    LOADED: "loaded",
    ALL_ADS_COMPLETED: "allAdsCompleted",
    SKIPPED: "skip",
    Qv: "skipshown",
    GJ: "skippableStateChanged",
    JG: "adMetadata",
    IG: "adBreakReady",
    vI: "log",
    VOLUME_CHANGED: "volumeChange",
    yK: "mute",
    pH: "companionBackfill",
    HK: "youTubeVideoMetadata",
    GK: "youTubeChannelMetadata",
    kK: "urlNavigationRequested"
};
var jJ = ["://secure-...imrworldwide.com/", "://cdn.imrworldwide.com/", "://aksecure.imrworldwide.com/", "www.google.com/pagead/sul", "www.youtube.com/gen_204\\?a=sul"], kJ = /\bocr\b/, lJ = 0, mJ = {};
function nJ(a) {
    return A(B(a)) ? !1 : (new J(a)).sf().match(kJ) ? !0 : null != F(jJ, function (b) {
        return null != a.match(b)
    })
}
function oJ(a) {
    if (a) {
        var b = I("iframe", {
            src: 'javascript:"data:text/html,<body><img src=\\"' + a + '\\"></body>"',
            style: "display:none"
        });
        a = zd(b).body;
        var c, d = gn(function () {
            Am(c);
            Sd(b)
        }, 15E3);
        c = ym(b, ["load", "error"], function () {
            gn(function () {
                hn(d);
                Sd(b)
            }, 5E3)
        });
        a.appendChild(b)
    }
}
function pJ(a) {
    if (a) {
        var b = new Image, c = "" + lJ++;
        mJ[c] = b;
        b.onload = b.onerror = function () {
            delete mJ[c]
        };
        b.src = a
    }
}

var qJ = {
    "application/flash": "Flash",
    "application/shockwave-flash": "Flash",
    "application/x-shockwave-flash": "Flash",
    "image/jpeg": "Image",
    "image/jpg": "Image",
    "image/png": "Image",
    "image/gif": "Image",
    text: "Text"
}, rJ = ["ADSENSE", "ADSENSE/ADX"], sJ = ["DART", "DART_DFA", "DART_DFP"], tJ = ["FREEWHEEL"], uJ = ["GDFP"], vJ = {
    HI: "video/mp4",
    JI: "video/mpeg",
    wI: "application/x-mpegURL",
    UI: "video/ogg",
    TJ: "video/3gpp",
    BK: "video/webm",
    GI: "audio/mpeg",
    II: "audio/mp4"
};
var wJ = ["google-developers.appspot.com", "devsite.googleplex.com"], xJ = ["*.googlesyndication.com"], yJ = ["*.youtu.be", "*.youtube.com"], zJ = "ad.doubleclick.net bid.g.doubleclick.net corp.google.com ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
    AJ = ["googleads.g.doubleclick.net", "pubads.g.doubleclick.net"];
function BJ(a, b) {
    try {
        var c = kf(new J(b)), c = c.replace(/^www./i, "");
        return hb(a, function (a) {
            return CJ(a, c)
        })
    } catch (d) {
        return !1
    }
}
function CJ(a, b) {
    if (A(B(b)))
        return !1;
    a = a.toLowerCase();
    b = b.toLowerCase();
    return "*." == a.substr(0, 2) ? (a = a.substr(2), a
.
    length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))
) :
    a == b
}
function DJ(a) {
    var b;
    if (b = "https:" == window.location.protocol)
        b = (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + zJ.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a);
    return b ? (a = new J(a), Ye(a,
    "https"
),
    a.toString()
) :
    a
}

function EJ(a) {
    window.open(DJ(a), "_blank")
}
function FJ(a, b, c) {
    null != a ? (K(a, "label", b), null != c && K(a, "value", c.join(";")), a = a.toString()) : a = "";
    GJ(a)
}
function GJ(a, b, c, d, e) {
    null != b && (a = HJ(a, b));
    null != c && (A(B(c)) || (b = new J(a), xf(b.j, "label") && (K(b, "acvw", c), a = b.toString().replace(/%2C/g, ","))));
    null != e && (a = IJ(a, e));
    a = DJ(a);
    null != d && d ? oJ(a) : (c = a) && (nJ(c) ? oJ(c) : pJ(c))
}
function JJ(a, b) {
    null != a && D(a, function (a) {
        GJ(a, b)
    })
}
function IJ(a, b, c) {
    if (A(B(b)))
        return a;
    var d = new J(a);
    return c || xf(d.j, "label") ? (K(d, "ged", b), d.toString()) : a
}
function HJ(a, b) {
    return a.replace(/\[[a-zA-Z0-9_]+\]/g, function (a) {
        try {
            var d = Zb(b, a), d = d.toString();
            if (!A(B(d)))
                return encodeURIComponent(d).replace(/%2C/g, ",")
        } catch (e) {
        }
        return a
    })
}

function KJ(a, b) {
    this.message = a;
    this.errorCode = b
}
KJ.prototype.getErrorCode = function () {
    return this.errorCode
};
KJ.prototype.getMessage = function () {
    return this.message
};
var LJ = new KJ("Unable to request ads from server. Cause: {0}.", 1005), MJ = new KJ("Unable to request ads from server due to network error.", 1012), NJ = new KJ("Cannot parse the {0} value for the adslist response: {1}.", 900), OJ = new KJ("Invalid usage of the API. Cause: {0}", 900), PJ = new KJ("Unable to display one or more required companions.", 602), QJ = new KJ("There was a problem requesting ads from the server.", 1005), RJ = new KJ("Ad tag URI {0} is invalid. It must be properly encoded before being passed.", 1013),
    SJ = new KJ("The provided ad type: {0} is not supported.", 1005), TJ = new KJ("The provided {0} information: {1} is invalid.", 1101), UJ = new KJ("The response does not contain any valid ads.", 1009), VJ = new KJ("The overlay ad content could not be displayed since creative dimensions do not align with display area.", 501), WJ = new KJ("The ad playlist response was malformed or empty.", 1010), XJ = new KJ("The ad response was not understood and cannot be parsed.", 1010), YJ = new KJ("An unexpected error occurred and the cause is not known. Refer to the inner error for more info.",
        900), ZJ = new KJ("The ad response contains unexpected element. Cause {0}.", 1010), $J = new KJ("No assets were found in the VAST ad response.", 200), aK = new KJ("Duplicate node in <{0}>: {1}", 101), bK = new KJ("The VAST response document is empty.", 1009), cK = new KJ("Linear assets were found in the VAST ad response, but none of them matched the video player's capabilities.", 403), dK = new KJ("Ad request reached a timeout.", 301), eK = new KJ("VAST response was malformed and could not be parsed.", 100), fK = new KJ("VAST media file loading reached a timeout of {0} seconds.",
        402), gK = new KJ("Ad request could not be completed due to a network error.", 301), hK = new KJ("Non linear assets were found in the VAST ad response, but none of them matched the video player's capabilities.", 503), iK = new KJ("The maximum number of VAST wrappers ({0}) has been reached.", 302), jK = new KJ("VAST media file duration differs from the VAST response duration by {0} seconds.", 202), kK = new KJ("Video player received an ad with unexpected or incompatible linearity", 201), lK = new KJ("Unknown node in <{0}>: {1}",
        101), mK = new KJ("Invalid VAST resource type: {0}", 101), nK = new KJ("Invalid VAST version", 102), oK = new KJ("No additional VAST wrappers allowed.", 300), pK = new KJ("No Ads VAST response after one or more Wrappers", 303), qK = new KJ("There was an error playing the video ad.", 400), rK = new KJ("VMAP unsupported node in <{0}>: {1}", 1010), sK = new KJ("An unexpected error occurred within the VPAID creative. Refer to the inner error for more info.", 901);
function tK(a, b, c) {
    return uK("adLoadError", a, b || null, wb(arguments, 2))
}
function vK(a, b, c) {
    return uK("adPlayError", a, b || null, wb(arguments, 2))
}
function wK(a, b, c, d, e) {
    var g = a.apply(null, sb([c, d], wb(arguments, 3)));
    b.U(new hJ("log", null, g))
}
function uK(a, b, c, d) {
    if (c instanceof dJ)
        return c;
    var e = b.errorCode;
    b = b.message;
    if (0 < d.length)
        for (var g = 0; g < d.length; g++)
            b = b.replace(new RegExp("\\{" + g + "\\}", "ig"), d[g]);
    a = new dJ(a, b, e);
    a.k = c;
    return a
}
function xK(a, b, c, d) {
    var e = vK.apply(null, sb([b, c], wb(arguments, 3)));
    a.U(new eJ(e))
}

function yK(a) {
    this.j = a
}
function zK() {
    var a = AK();
    return BK(a, "disableExperiments")
}
function BK(a, b) {
    if (b in a.j) {
        var c = a.j[b];
        if ("boolean" == typeof c)
            return c
    }
    return !1
}

function CK(a) {
    return (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : ""
}

function DK() {
    this.k = "always";
    this.j = !1;
    this.A = !0;
    this.C = !1;
    this.B = null
}
function EK() {
    return FK.C
}
DK.prototype.getPlayerType = function () {
    return ""
};
function AK() {
    var a = FK;
    if (null == a.B) {
        var b = {}, c = nf(new J(Jd().location.href));
        if (xf(c, "tcnfp"))
            try {
                b = jg(c.get("tcnfp"))
            } catch (d) {
            }
        a.B = new yK(b)
    }
    return a.B
}
var FK = new DK;
var GK = {}, HK = "", IK = /OS (\S+) like/, JK = /Android (\S+);/;
function KK() {
    return id || Na(Uc, "Mobile")
}
function LK() {
    return jd && !kd || Na(Uc, "iPod")
}
function MK() {
    return LK() || kd
}
function NK(a, b) {
    if (null == GK[b]) {
        var c;
        A(HK) && (c = a.exec(Uc)) && (HK = c[1]);
        (c = HK) ? (c = c.replace(/_/g, "."), GK[b] = 0 <= Sa(c, b)
    ) :
        GK[b] = !1
    }
    return GK[b]
}
function OK() {
    var a = Uc;
    return a ? Na(a, "AppleTV") || Na(a, "GoogleTV") || Na(a, "HbbTV") || Na(a, "NetCast.TV") || Na(a, "POV_TV") || Na(a, "SMART-TV") || Na(a, "SmartTV") || id && Na(a, "AFT") : !1
}
function PK() {
    return Na(Uc, "PlayStation")
}
function QK() {
    return LK() || id && (!id || !NK(JK, 4)) || !EK() && (Na(Uc, "CrKey") || PK() || Na(Uc, "Roku") || OK() || Na(Uc, "Xbox")) ? !1 : !0
}

function RK() {
    this.j = .05 > Math.random();
    this.k = Math.floor(4503599627370496 * Math.random())
}
ba(RK);
function SK(a, b, c, d) {
    if (a.j || d) {
        c = c || {};
        c.lid = b;
        c = TK(a, c);
        var e = new J("http://pagead2.googlesyndication.com/pagead/gen_204");
        Ib(c, function (a, b) {
            K(e, b, null != a ? "boolean" == typeof a ? a ? "t" : "f" : "" + a : "")
        }, a);
        a = UK();
        Ye(e, a.Ib);
        GJ(e.toString())
    }
}
function TK(a, b) {
    b.id = "";
    var c = UK();
    b.c = a.k;
    b.domain = c.mb;
    return b
}
function UK() {
    var a = Jd(), b = document;
    return new J(a.parent == a ? a.location.href : b.referrer)
}

function VK() {
}
f = VK.prototype;
f.mw = !1;
f.fo = !1;
f.oo = !0;
f.baseYouTubeUrl = null;
f.bitrate = -1;
f.contentId = null;
f.Jw = !1;
f.tl = !1;
f.mimeTypes = null;
f.surveyCreativeData = null;
f.wD = !0;
f.ts = !1;
f.useShareButton = !1;
f.useStyledNonLinearAds = !1;
f.useVideoAdUi = !0;
f.xD = !0;
f.ho = !1;
f.Kw = !1;
f.youTubeAdNamespace = 0;
f.showContentThumbnail = !0;
f.Xm = !1;
f.loadVideoTimeout = 15E3;
window.console && "function" === typeof window.console.log && x(window.console.log, window.console);
function WK(a) {
    return window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing[a] ? (a = y() - window.performance.timing[a], Math
.
    round(a / 1E3)
) :
    null
}
function XK() {
    this.domLoading = WK("domLoading");
    this.domComplete = WK("domComplete");
    this.unloadEventStart = WK("unloadEventStart")
}
XK.prototype.toString = function () {
    function a(a) {
        a = Zb(c, a);
        null != a ? b.push("" + a) : b.push("u")
    }

    var b = [], c = this;
    a("domLoading");
    a("domComplete");
    a("unloadEventStart");
    return b.join(".")
};
function YK(a) {
    var b = {}, c = new XK, d = null;
    null != c.domLoading && (d = c.domLoading);
    null == d && null != a && (d = a);
    b.pt = c;
    b.td = d;
    return b
}

function ZK(a) {
    for (var b = [], c = a = Jd(a.ownerDocument); c != a.top; c = c.parent)
        if (c.frameElement)
            b.push(c.frameElement);
        else
            break;
    return b
}

var $K = null;
function aL() {
    this.j = {};
    this.k = 0
}
function bL(a, b) {
    this.A = a;
    this.o = !0;
    this.j = b
}
bL.prototype.getValue = function () {
    return this.j
};
bL.prototype.D = function () {
    return this.o ? this.k() : ""
};
bL.prototype.k = function () {
    return String(this.j)
};
function cL(a, b) {
    bL.call(this, a, b);
    this.j = !!b
}
inherit(cL, bL);
cL.prototype.k = function () {
    return this.j ? "1" : "0"
};
function dL(a) {
    bL.call(this, "sv", a);
    this.j = null == a ? "1" : "2"
}
inherit(dL, bL);
dL.prototype.k = function () {
    return String(this.j)
};
function eL(a, b) {
    bL.call(this, a, b)
}
inherit(eL, bL);
eL.prototype.k = function () {
    return this.j ? Math.round(this.j.top) + "." + Math.round(this.j.left) + "." + (Math.round(this.j.top) + Math.round(this.j.height)) + "." + (Math.round(this.j.left) + Math.round(this.j.width)) : ""
};
function fL(a) {
    if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
        a = a.split(".");
        var b = Number(a[0]), c = Number(a[1]);
        return new eL("", new sg(c, b, Number(a[3]) - c, Number(a[2]) - b))
    }
    return new eL("", new sg(0, 0, 0, 0))
}
function gL() {
    $K || ($K = new aL);
    return $K
}
aL.prototype.setItem = function (a) {
    this.j[a.A] = a
};
aL.prototype.getItem = function (a) {
    return Zb(this.j, a, null)
};
aL.prototype.D = function () {
    var a = [], b;
    for (b in this.j) {
        var c = this.j[b].D();
        c && a.push(b + c)
    }
    return a.join("_")
};
function hL(a) {
    var b = null;
    a && (b = a());
    if (b) {
        a = gL();
        a.j = {};
        var c = new cL("ef", !0);
        c.o = !1;
        a.setItem(c);
        c = Jd().document;
        c = c.webkitVisibilityState || c.mozVisibilityState || c.visibilityState || c.msVisibilityState || "";
        c = "hidden" != c.toLowerCase().substring(c.length - 6) ? !0 : !1;
        a.setItem(new cL("tv", c));
        var d;
        try {
            var e;
            var g = Jd().top;
            try {
                e = !!g.location.href || "" === g.location.href
            } catch (h) {
                e = !1
            }
            if (e) {
                var k = ZK(b);
                d = k && 0 != k.length ? "1" : "0"
            } else
                d = "2"
        } catch (l) {
            d = "2"
        }
        a.setItem(new bL("is", d));
        if (c) {
            k = e = Jd().top;
            "2" == d &&
            (k = Jd());
            g = iL(b, k);
            a.setItem(new eL("er", g));
            var p;
            try {
                p = k.document && !k.document.body ? null : Gd(k || window)
            } catch (r) {
                p = null
            }
            a.setItem(new dL(p));
            p ? (k = oe(xd(k.document)), a
        .
            setItem(new cL("sp", !!k)), p = k ? new sg(k.x, k.y, p.width, p.height) : null
        ) :
            p = null;
            a.setItem(new eL("vi", p));
            if (p && "1" == d) {
                d = ZK(b);
                b = [];
                for (k = 0; k < d.length; k++)
                    (c = iL(d[k], e)) && b.push(c);
                b.push(p);
                p = jL(b)
            }
            kL(a, g, p)
        }
        a.k && (d = Math.round(y() / 1E3) - a.k, a.setItem(new bL("ts", d)));
        a.k = Math.round(y() / 1E3)
    } else
        a = gL(), a.j = {}, a.k = Math.round(y() / 1E3), a.setItem(new cL("ef",
            !1));
    return a
}
function jL(a) {
    var b = new sg(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE), c = new sg(0, 0, 0, 0);
    if (!a || 0 == a.length)
        return c;
    for (var d = 0; d < a.length; d++)
        if (!wg(b, a[d]))
            return c;
    return b
}
function iL(a, b) {
    var c = a.getBoundingClientRect(), d = Og(a, b);
    return new sg(Math.round(d.x), Math.round(d.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
}
function kL(a, b, c) {
    if (b && c) {
        var d;
        t: {
            d = Math.max(b.left, c.left);
            var e = Math.min(b.left + b.width, c.left + c.width);
            if (d <= e) {
                var g = Math.max(b.top, c.top), h = Math.min(b.top + b.height, c.top + c.height);
                if (g <= h) {
                    d = new sg(d, g, e - d, h - g);
                    break t
                }
            }
            d = null
        }
        e = d ? d.height * d.width : 0;
        g = d ? b.height * b.width : 0;
        d = d && g ? Math.round(e / g * 100) : 0;
        a.setItem(new bL("vp", d));
        d && 0 < d ? (e = tg(b), g = tg(c), e = e.top >= g.top && e.top < g.bottom):e = !1;
        a.setItem(new cL("ct", e));
        d && 0 < d ? (e = tg(b), g = tg(c), e = e.bottom <= g.bottom && e.bottom > g.top):e = !1;
        a.setItem(new cL("vb",
            e));
        d && 0 < d ? (e = tg(b), g = tg(c), e = e.left >= g.left && e.left < g.right):e = !1;
        a.setItem(new cL("vl", e));
        d && 0 < d ? (b = tg(b), c = tg(c), c = b.right <= c.right && b.right > c.left):c = !1;
        a.setItem(new cL("vr", c))
    }
}
function lL(a, b, c) {
    if (b && c) {
        b = fL(b).getValue();
        c = fL(c).getValue();
        var d = null;
        a.getItem("er") && (d = a.getItem("er").getValue(), d.top += b.top, d.left += b.left, a.setItem(new eL("er", d)));
        if (a.getItem("vi")) {
            var e = a.getItem("vi").getValue();
            e.top += b.top;
            e.left += b.left;
            var g = [];
            g.push(e);
            g.push(b);
            g.push(c);
            b = jL(g);
            kL(a, d, b);
            a.setItem(new eL("vi", c))
        }
    }
}

ec("m", "c", "s", "t");
function mL(a) {
    this.j = dc.apply(null, arguments);
    return this
}
mL.prototype.set = function (a, b) {
    this.j[a] = b
};
function nL(a, b) {
    var c = Zb(a.j, "eb", 0);
    a.j.eb = c | b
}
mL.prototype.get = function (a) {
    return Zb(this.j, a, null)
};
mL.prototype.extend = function (a) {
    cc(this.j, a)
};
mL.prototype.D = function () {
    var a = [], b;
    for (b in this.j)
        a.push(b + this.j[b]);
    return a.join("_")
};
var oL = null, pL = null;
function qL(a, b) {
    var c = 0;
    Rb(Jd(), "ima", "video", "client", "tagged") && (c = 1);
    this.o = hL(a);
    this.k = new mL("ta", c, "ve", 2);
    c && nL(this.k, 1);
    Rb(Jd(), "ima", "video", "client", "periscopeTag") && nL(this.k, 4);
    Rb(Jd(), "ima", "video", "client", "sdkTag") && nL(this.k, 8);
    Rb(Jd(), "ima", "video", "client", "jsTag") && nL(this.k, 2);
    b && Zb(b, "fullscreen", !1) && nL(this.k, 16);
    var d = null;
    this.j = null;
    if (c && (c = Rb(Jd(), "ima", "video", "client"), c.getEData)) {
        this.j = c.getEData();
        if (!("getTimeSinceTagLoadSeconds" in this.j)) {
            var e = this;
            this.j.extendWithDataFromTopIframe = void 0;
            this.j.getTimeSinceTagLoadSeconds = function () {
                return Zb(e.j, "tt", null)
            };
            this.j.serialize = function () {
                var a = "", b;
                for (b in e.j)
                    "serialize" != b && "getTimeSinceTagLoadSeconds" != b && (a = a ? a + ("_" + b + e.j[b]) : b + e.j[b]);
                return a
            }
        }
        if (d = Rb(Jd(), "ima", "video", "client", "getLastSnapshotFromTop"))
            if (d = d())
                this.j.extendWithDataFromTopIframe(d.buckets, d.tt, d.pd), lL(this.o, d.er, d.vi);
        d = this.j.getTimeSinceTagLoadSeconds()
    }
    this.k.extend(YK(d))
}
qL.prototype.D = function () {
    var a = [], b = this.k.D();
    b && a.push(b);
    this.j && (b = this.j.serialize()) && a.push(b);
    (b = this.o.D()) && a.push(b);
    return a.join("_")
};
function rL(a, b) {
    try {
        return (new qL(a, b)).D()
    } catch (c) {
        return "tle;" + Ma(c.name, 12) + ";" + Ma(c.message, 40)
    }
}

var sL = {
    $n: "start",
    FIRST_QUARTILE: "firstquartile",
    MIDPOINT: "midpoint",
    THIRD_QUARTILE: "thirdquartile",
    COMPLETE: "complete",
    METRIC: "metric",
    PAUSE: "pause",
    Kv: "resume",
    SKIPPED: "skip",
    co: "viewable_impression",
    Bv: "mute",
    Wv: "unmute",
    FULLSCREEN: "fullscreen",
    Xu: "exitfullscreen"
}, tL = {
    UNKNOWN: -1,
    $n: 0,
    FIRST_QUARTILE: 1,
    MIDPOINT: 2,
    THIRD_QUARTILE: 3,
    COMPLETE: 4,
    METRIC: 5,
    PAUSE: 6,
    Kv: 7,
    SKIPPED: 8,
    co: 9,
    Bv: 10,
    Wv: 11,
    FULLSCREEN: 12,
    Xu: 13
};
function uL(a) {
    try {
        return !!a && null != a.location.href && zg(a, "foo")
    } catch (b) {
        return !1
    }
}
function vL() {
    var a = [1, 2];
    if (!(1E-4 > Math.random())) {
        var b = Math.random();
        if (.1 > b) {
            try {
                var c = new Uint16Array(1);
                window.crypto.getRandomValues(c);
                b = c[0] / 65536
            } catch (d) {
                b = Math.random()
            }
            return a[Math.floor(b * a.length)]
        }
    }
    return null
}

var wL = document, xL = window;
function yL(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
        a = a.stack;
        var c = b;
        try {
            -1 == a.indexOf(c) && (a = c + "\n" + a);
            for (var d; a != d;)
                d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            b = a.replace(/\n */g, "\n")
        } catch (e) {
            b = c
        }
    }
    return b
}
function zL(a) {
    xL.google_image_requests || (xL.google_image_requests = []);
    var b = xL.document.createElement("img");
    b.src = a;
    xL.google_image_requests.push(b)
}

function AL(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
}
function BL(a) {
    return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
}

var CL = !0, DL = {};
function EL(a, b, c, d) {
    var e = FL, g, h = CL;
    try {
        g = b()
    } catch (k) {
        try {
            var l = yL(k);
            b = "";
            k.fileName && (b = k.fileName);
            var p = -1;
            k.lineNumber && (p = k.lineNumber);
            h = e(a, l, b, p, c)
        } catch (r) {
            try {
                var u = yL(r);
                a = "";
                r.fileName && (a = r.fileName);
                c = -1;
                r.lineNumber && (c = r.lineNumber);
                FL("pAR", u, a, c, void 0, void 0)
            } catch (C) {
                GL({context: "mRE", msg: C.toString() + "\n" + (C.stack || "")}, void 0)
            }
        }
        if (!h)
            throw k;
    } finally {
        if (d)
            try {
                d()
            } catch (V) {
            }
    }
    return g
}
function FL(a, b, c, d, e, g) {
    var h = {};
    if (e)
        try {
            e(h)
        } catch (k) {
        }
    h.context = a;
    h.msg = b.substring(0, 512);
    c && (h.file = c);
    0 < d && (h.line = d.toString());
    h.url = wL.URL.substring(0, 512);
    h.ref = wL.referrer.substring(0, 512);
    HL(h);
    GL(h, g);
    return CL
}
function GL(a, b) {
    try {
        if (Math.random() < (b || .01)) {
            var c = "/pagead/gen_204?id=jserror" + IL(a), d = "http" + ("http:" == xL.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c, d = d.substring(0, 2E3);
            zL(d)
        }
    } catch (e) {
    }
}
function HL(a) {
    var b = a || {};
    AL(DL, function (a, d) {
        b[d] = xL[a]
    })
}
function JL(a, b, c, d, e) {
    return function () {
        var g = arguments;
        return EL(a, function () {
            return b.apply(c, g)
        }, d, e)
    }
}
function KL(a, b) {
    return JL(a, b, void 0, void 0, void 0)
}
function IL(a) {
    var b = "";
    AL(a, function (a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + BL(a)
    });
    return b
}

function LL() {
    for (var a = xL, b = a, c = 0; a && a != a.parent;)
        a = a.parent, c++, uL(a) && (b = a);
    return b
}

var ML = !1, NL = "";
function OL(a) {
    a = a.match(/[\d]+/g);
    if (!a)
        return "";
    a.length = 3;
    return a.join(".")
}
if (navigator.plugins && navigator.plugins.length) {
    var PL = navigator.plugins["Shockwave Flash"];
    PL && (ML = !0, PL.description && (NL = OL(PL.description)));
    navigator.plugins["Shockwave Flash 2.0"] && (ML = !0, NL = "2.0.0.11")
} else if (navigator.mimeTypes && navigator.mimeTypes.length) {
    var QL = navigator.mimeTypes["application/x-shockwave-flash"];
    (ML = QL && QL.enabledPlugin) && (NL = OL(QL.enabledPlugin.description))
} else
    try {
        var RL = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), ML = !0, NL = OL(RL.GetVariable("$version"))
    } catch (SL) {
        try {
            RL =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), ML = !0, NL = "6.0.21"
        } catch (TL) {
            try {
                RL = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), ML = !0, NL = OL(RL.GetVariable("$version"))
            } catch (UL) {
            }
        }
    }
var VL = ML, WL = NL;
if (wL && wL.URL)
    var XL = wL.URL, CL = !(XL && (0 < XL.indexOf("?google_debug") || 0 < XL.indexOf("&google_debug")));
function YL(a, b, c, d) {
    c = JL(d || "osd_or_lidar::" + b, c, void 0, void 0, void 0);
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c);
    return c
}

function ZL(a, b) {
    var c = a || xL;
    c.top != c && (c = c.top);
    try {
        return c.document && !c.document.body ? new H(-1, -1) : b ? new H(c.innerWidth, c.innerHeight) : Gd(c || window)
    } catch (d) {
        return new H(-12245933, -12245933)
    }
}
var $L = 0;
function aM() {
    var a = bM, b = 0 <= cM ? dM() - cM : -1, c = eM ? dM() - fM : -1, d = 0 <= gM ? dM() - gM : -1, e;
    if (79463068 == a)
        return 500;
    947190538 == a ? (a = [4E3], e = [250, 1E3]): 947190541 == a ? (a = [4E3], e = [100, 1E3]): 947190542 == a ? (a = [], e = [100]): (a = [2E3, 4E3], e = [250, 500, 1E3]);
    var g = b;
    -1 != c && c < b && (g = c);
    for (var h, b = 0; b < a.length; ++b)
        if (g < a[b]) {
            h = e[b];
            break
        }
    void 0 === h && (h = e[a.length]);
    return -1 != d && 1500 < d && 4E3 > d ? 500 : h
}
var hM = (new Date).getTime(), cM = -1, eM = !1, fM = -1, gM = -1;
function dM() {
    return (new Date).getTime() - hM
}
function iM(a) {
    var b = [];
    Ib(a, function (a, d) {
        d in Object.prototype || "undefined" == typeof a || (ea(a) && (a = a.join(",")), b.push([d, "=", a].join("")))
    });
    return b.join("&")
}
function jM() {
    var a = I("div");
    a.style.cssText = "position:relative;left:0px;top:0px;width:0;height:0;";
    return a
}
function kM(a) {
    for (var b; a && a != a.parentElement;) {
        if (a.style && "none" == Eg(a, "display"))
            return !0;
        b = a;
        a = a.parentElement
    }
    if (b && (a = zd(b))) {
        var c, d;
        try {
            if (c = Jd(a))
                d = c.frameElement
        } catch (e) {
            return !1
        }
        if (c && d && c != c.parent)
            return kM(d)
    }
    return !1
}

function lM(a, b) {
    this.G = a || 3E3;
    this.F = b || 3E3;
    this.k = "u";
    this.B = null;
    this.j = [];
    this.C = !1;
    this.o = -1;
    this.A = 0
}
function mM(a, b, c) {
    this.snapshot = a;
    this.k = b;
    this.j = c
}
function nM(a, b, c) {
    if (!(b && b.getBoundingClientRect && 0 <= Sa(WL, "11") && c) || bd && 9 > md || 0 < a.j.length)
        return !1;
    try {
        var d = b.getBoundingClientRect()
    } catch (e) {
        return !1
    }
    var g = "DIV" == b.tagName, h = zd(b), k = [];
    if (g) {
        var l = jM(), d = oM(d);
        D(d, function (a, b) {
            var d = new pM("e", h, c, String(b));
            this.j.push(d);
            k.push(x(d.F, d, l, a))
        }, a);
        b.insertBefore(l, b.childNodes[0] || null)
    } else
        d = qM(a, d), D(d, function (a, d) {
            var e = new pM("e", h, c, String(d));
            this.j.push(e);
            k.push(x(e.D, e, b, a))
        }, a);
    var p = !0;
    D(k, function (a) {
        p = p && a()
    });
    p ? (a.k = "l",
        a.B = b, a.C = !g) : (D(a.j, function (a) {
        a.remove()
    }), a.j = []);
    return p
}
function oM(a) {
    return [new Qc(Math.floor((a.right - a.left) / 2), Math.floor((a.bottom - a.top) / 2))]
}
function qM(a, b) {
    var c;
    try {
        c = b || a.B.getBoundingClientRect()
    } catch (d) {
        c = new rg(0, 0, 0, 0)
    }
    var e = oM(c);
    D(e, function (a) {
        a.x += c.left;
        a.y += c.top
    });
    return e
}
function rM(a) {
    if (a.B && a.C) {
        var b = qM(a);
        D(b, function (a, b) {
            this.j[b] && sM(this.j[b], a)
        }, a)
    }
}
function tM(a) {
    D(a.j, function (a) {
        a.remove()
    });
    a.j = [];
    a.k = "d"
}
function uM(a) {
    var b = (new Date).getTime(), c = a.D ? b - a.D : 0, d = -1;
    4 == a.j.length ? (d = E(a.j, function (a) {
        return vM(a, b)
    }), d = wM(d)): 1 == a.j.length && (d = [-1, 0, 1, 2, 3, 5][vM(a.j[0], b) + 1]);
    a.A = d == a.o ? a.A + c : 0;
    c = new mM(d, a.o, c);
    a.o = d;
    a.D = b;
    xM(a, d);
    rM(a);
    return c
}
function wM(a) {
    var b = Gb(Mb(yM));
    D(a, function (a) {
        0 <= a && ++b[a]
    });
    return 4 == b[4] ? 6 : 3 <= b[4] ? 5 : 0 < b[4] ? 4 : 4 == b[2] ? 2 : 4 == b[1] ? 1 : 4 == b[0] ? 0 : 3
}
function xM(a, b) {
    0 == b && zM(a) ? a.k = "n" : a.k = "dlfcrrrr".split("")[b + 1]
}
lM.prototype.getStatus = function () {
    return this.k
};
function zM(a) {
    return "n" == a.k ? !0 : "l" == a.k && a.A >= a.F
}
function pM(a, b, c, d) {
    this.module = null;
    this.A = a;
    this.wa = "e" == a ? String(c) + "~" + String(d) : "";
    this.j = [];
    this.k = -1;
    this.B = 0;
    this.o = Gb(Mb(AM));
    this.G = Gb(Mb(yM));
    "e" == this.A && (BM[this.wa] = x(this.C, this));
    bd ? (a = b.createElement("div"), a
.
    innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" style="opacity:0;-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity=0)\';filter:alpha(opacity=0)"><param name="movie" value="' + CM(this, !0) + '"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="transparent"></param></object>', a =
        a.firstChild, a.id = String(Math.random())
) :
    a = DM(this, b);
    a.width = 1;
    a.height = 1;
    a.style.zIndex = -999999;
    this.module = a
}
var yM = {hK: -1, LOADING: 0, hv: 1, Nu: 2, iI: 3, VISIBLE: 4}, AM = {
    LOADING: 0,
    hv: 1,
    Nu: 2,
    $J: 3,
    TI: 4,
    eK: 5,
    fK: 6,
    dK: 7,
    WI: 8,
    ZJ: 9
}, BM = {};
function DM(a, b) {
    function c(a, c, d) {
        var e = b.createElement("param");
        e.name = c;
        e.value = d;
        a.appendChild(e)
    }

    var d = CM(a), e = b.createElement("object");
    e.type = "application/x-shockwave-flash";
    e.data = d;
    c(e, "movie", d);
    c(e, "allowscriptaccess", "always");
    c(e, "wmode", "opaque");
    e.style.visibility = "hidden";
    e.style.opacity = 0;
    return e
}
function CM(a, b) {
    var c = "//www.gstatic.com/osd/hbt.swf";
    "e" == a.A && (c = Qe("//www.gstatic.com/osd/hbe.swf", "id", a.wa));
    b && (c = Qe(c, "delay", "1"));
    return c
}
pM.prototype.F = function (a, b) {
    if (!this.module)
        return !1;
    this.module.style.position = "absolute";
    sM(this, b);
    var c = !0;
    try {
        a.appendChild(this.module)
    } catch (d) {
        c = !1
    }
    return c
};
pM.prototype.D = function (a, b) {
    if (!this.module || !a.parentNode)
        return !1;
    this.module.style.position = "fixed";
    sM(this, b);
    var c = !0;
    try {
        a.parentNode && a.parentNode.insertBefore(this.module, a.nextSibling)
    } catch (d) {
        c = !1
    }
    return c
};
function sM(a, b) {
    a.module && !Rc(b, Jg(a.module)) && Hg(a.module, b)
}
pM.prototype.remove = function () {
    if (this.module)
        try {
            Sd(this.module)
        } catch (a) {
        }
    this.module = null
};
pM.prototype.C = function (a) {
    this.k = a ? 3 : 4
};
function vM(a, b) {
    if ("e" == a.A) {
        var c = null;
        try {
            c = a.module.it()
        } catch (d) {
        }
        null === c ? (c = 0, 0 < a.k && (c = 2)
    ) :
        c = c ? 3 : 4;
        ++a.G[c + 1];
        a.k = c
    } else {
        var e = Number(b), g = null;
        try {
            g = a.module.fc()
        } catch (h) {
        }
        EM(a, g, e);
        c = a.j[a.j.length - 1];
        if (null === g) {
            if (g = e = 0, 0 < a.k || ha(c.zj))
                g = e = 2
        } else
            null === c.zj || c.Tm >= e ? (e = 10 <= g ? 4 : 0, g = 0):g
    >
        c.zj ? (c = (g - c.zj) / (e - c.Tm) * 1E3, e = 10 <= c ? 4 : 3, c = 0 == c ? 1 : 1 > c ? 3 : 4 > c ? 4 : 23 > c ? 6 : 26 > c ? 8 : 9, 6 == a.B && 6 == c && (c = 7), g = c
    ) :
        g = e = 1;
        6 == a.B && (--a.o[6], 4 == g || 8 == g ? ++a.o[5] : ++a.o[7]);
        ++a.o[g];
        a.k = e;
        a.B = g
    }
    return a.k
}
function EM(a, b, c) {
    var d = c - 1E3, e = a.j.length;
    D(a.j, function (a, b) {
        a.Tm <= d && (e = Math.min(e, b + 1))
    });
    var g = a.j.length - e;
    0 < g && a.j.splice(e, g);
    a.j.unshift({zj: b, Tm: c})
}
q("gteh", JL("osd_or_lidar::gteh_ex", function (a, b) {
    var c = BM[a];
    ia(c) && c(b)
}), void 0);
function FM(a, b, c, d, e, g, h, k) {
    this.j = GM.clone();
    this.A = this.R = 0;
    this.nb = this.ob = this.ea = -1;
    this.M = [0, 0, 0, 0, 0];
    this.I = [0, 0, 0, 0, 0];
    this.G = [0, 0, 0, 0, 0];
    this.ja = [0, 0, 0, 0, 0];
    this.S = d;
    this.X = this.W = -1;
    this.H = e;
    this.od = h || "";
    this.de = k || "";
    this.va = function () {
    };
    this.ge = function () {
    };
    this.K = this.element = c;
    this.Se = 0;
    this.af = -1;
    this.bf = b ? -1 != b.indexOf("dcopt=anid") : !1;
    this.B = "";
    this.Pe = c ? String(c._avi_ || "") : "";
    this.Xa = null;
    this.Cc = "";
    this.C = {};
    this.C.le = 0;
    this.C.nt = 2;
    this.C.Fr = 3;
    this.k = this.Va = null;
    this.na = !1;
    this.P =
        this.Ze = this.Re = null;
    this.la = 0;
    this.ka = !1;
    this.Ua = null;
    this.Te = this.oa = this.ib = !1;
    this.cf = .01 > Math.random();
    this.ee = null;
    this.ac = void 0;
    this.he = !1;
    this.Aa = [];
    this.ga = void 0;
    this.lc = this.xa = !1;
    this.F = void 0;
    this.Kb = 0;
    this.ba = -1;
    this.Wa = this.V = 0;
    this.pa = void 0;
    this.Ma = this.Ea = this.Ga = 0;
    this.Ia = !1;
    this.o = 0;
    this.O = !1;
    this.fe = 5 == e ? .02 > Math.random() : Boolean(c && c._tos_);
    this.$e = 1 != this.H ? 0 : vL() || 0;
    HM(this, a, g)
}
var GM = new rg(0, 0, 0, 0);
function IM(a, b, c, d, e) {
    if (!(0 > a.S)) {
        var g = xL.innerWidth, h = xL.innerHeight, k = new rg(Math.round(xL.mozInnerScreenY), Math.round(xL.mozInnerScreenX + g), Math.round(xL.mozInnerScreenY + h), Math.round(xL.mozInnerScreenX));
        c = new rg(xL.screenY + d, xL.screenX + c.width, xL.screenY + c.height, xL.screenX);
        e || (d = new rg(k.top - c.top, k.right - c.left, k.bottom - c.top, k.left - c.left), d.top > a.j.top ? a.j = d : (a.j.right = a.j.left + g, a.j.bottom = a.j.top + h), a.R = g * h);
        JM(a, k, c, b, e, !0)
    }
}
function KM(a, b, c) {
    var d = LM(a, xL && xL.document);
    if (d) {
        c || HM(a, xL, !0);
        var e = Math.floor((a.j.left + a.j.right) / 2), g = Math.floor((a.j.top + a.j.bottom) / 2), h = Hd(document), d = d(e - h.x, g - h.y) ? .5 : 0;
        JM(a, a.j, d, b, c, !0)
    }
}
function LM(a, b) {
    MM(a);
    if (!a.Va) {
        var c = [];
        D(Qb(a.C), function (a) {
            c[this.C[a] + 1] = a
        }, a);
        var d = c.join(""), d = b && b[d];
        a.Va = d && x(d, b)
    }
    return a.Va
}
function MM(a) {
    a.C.e = -1;
    a.C.i = 6;
    a.C.n = 7;
    a.C.t = 8
}
FM.prototype.update = function (a, b, c, d, e) {
    if (0 > this.S)
        return null;
    c || HM(this, d, e);
    Boolean(null) && c && (d.clearInterval(this.Re), this.Re = null);
    Boolean(null) && c && (d.clearInterval(this.Ze), this.Ze = null);
    null != this.Ua && (c ? (d.clearInterval(this.P), this.P = null, this.ka = !1) : this.ib && !this.P && (this.P = d.setInterval(KL("osd_or_lidar::adblock::iem_int", x(this.ie, this, d, 1E3)), 1E3), this.ie(d)));
    return JM(this, this.j, b, a, c, !1)
};
function JM(a, b, c, d, e, g) {
    var h = d - a.S || 1, k = null;
    ha(c) ? b = NM(a, c) : (k = c, b = NM(a, b, k));
    a.ga || OM(a, b, h, a.W, g, e, k, void 0);
    a.W = e ? -1 : b;
    a.S = d;
    -1 != b && (0 > a.ea && (a.ea = d), a.nb = d);
    -1 == a.ob && 1E3 <= Math.max(a.G[2], a.I[2]) && (a.ob = d);
    a.va(a, k || GM);
    return a.A
}
function NM(a, b, c) {
    if (a.O && 7 == a.H)
        return a.A = 1, PM(a.A);
    var d = null;
    if (ha(b))
        a.A = b;
    else {
        c = new rg(Math.max(b.top, c.top), Math.min(b.right, c.right), Math.min(b.bottom, c.bottom), Math.max(b.left, c.left));
        if (0 >= a.R || c.top >= c.bottom || c.left >= c.right)
            return a.A = 0, -1;
        var d = c.clone(), e = -b.left;
        b = -b.top;
        e instanceof Qc ? (d.left += e.x, d.right += e.x, d.top += e.y, d.bottom += e.y) : (d.left += e, d.right += e, ha(b) && (d.top += b, d.bottom += b));
        d = (c.bottom - c.top) * (c.right - c.left);
        a.A = d / a.R
    }
    return PM(a.A)
}
function PM(a) {
    var b = -1;
    1 <= a ? b = 0 : .75 <= a ? b = 1 : .5 <= a ? b = 2 : .25 <= a ? b = 3 : 0 < a && (b = 4);
    return b
}
function OM(a, b, c, d, e, g, h, k) {
    e = e && -1 != d && 2 >= d;
    var l = -1 == d || -1 == b ? -1 : Math.max(d, b);
    d = e ? l : d;
    -1 != d && (a.M[d] += c);
    (h = h || null) ? (-1 != d && 2 >= d && -1 != a.X && (a.ja[a.X] += c), h = 100 * a.R / ((h.bottom - h.top) * (h.right - h.left)), a.X = 20 <= h ? 0 : 10 <= h ? 1 : 5 <= h ? 2 : 2.5 <= h ? 3 : 4) : a.X = -1;
    if (7 == a.H) {
        k = n(k) ? k : QM(a);
        h = -1 != d && 2 >= d;
        e = .1 <= k && .1 <= a.pa;
        e && 0 == d || (a.Ia = !1);
        a.Ga += c;
        e && (a.Ea += c, h ? a.Ma += c : a.V += c);
        a.V > a.Wa && (a.Wa = a.V);
        if (h || !n(k) || .1 > k)
            a.V = 0;
        k = n(k) ? Number(k) ? RM(k, 3) : 0 : k;
        a.pa = k
    }
    for (k = d; 0 <= k && 4 >= k; k++)
        a.G[k] += c, a.G[k] > a.I[k] && (a.I[k] =
            a.G[k]);
    for (k = 0; k < a.G.length; ++k)
        if (k < b || g || -1 == b)
            a.G[k] = 0
}
function SM(a, b, c) {
    if (!Boolean(Boolean(a.K && !!c && !Uh) && !Uh))
        return a.na = !0, !1;
    var d = new lM;
    (c = nM(d, a.K, c)) ? (a.ge = b, a.k = d) : a.na = !0;
    return c
}
FM.prototype.ie = function (a, b) {
    var c = LM(this, a && a.document);
    if (c) {
        HM(this, a, !0);
        var d = Math.floor((this.j.left + this.j.right) / 2), e = Math.floor((this.j.top + this.j.bottom) / 2), g = Hd(document), c = Boolean(c(d - g.x, e - g.y)), d = b || 0;
        c ? (this.la += this.ka ? d : 0, this.ka = !0) : (this.la = 0, this.ka = !1);
        1E3 <= this.la && (a.clearInterval(this.P), this.P = null, this.ib = !1, this.Ua = "v");
        HM(this, a, !1)
    } else
        a.clearInterval(this.P), this.P = null, this.ib = !1, this.Ua = "i"
};
FM.prototype.D = function () {
    var a = this.j, a = ["p:", a.top, a.left, a.bottom, a.right];
    a.push("tos:", this.M.join(","));
    a.push("mtos:", this.I.join(","));
    a.push("rs:", this.H);
    var b = 5 === this.H || 6 === this.H;
    b || (a.push("zoom:", this.ja.join(",")), a.push("ht:", this.Se));
    0 <= this.ea && a.push("tfs:", this.ea, "tls:", this.nb);
    a.push("vt:", this.ob);
    7 === this.H && a.push("qid:", this.B);
    this.Pe && a.push("avi:", this.Pe);
    this.Ua && a.push("iemv:", this.Ua);
    this.k ? a.push("swf:", this.k.getStatus()) : this.na && a.push("swf:", "-");
    b && (this.de &&
    a.push("ord:", this.de), this.od && a.push("amd:", this.od, ";"), this.bf && a.push("anid:", "1"), this.Cc && a.push("xbid:", this.Cc));
    null !== this.Xa && a.push("tp:" + this.Xa);
    null != this.ac && a.push("vl:" + this.ac);
    return a.join(",")
};
function HM(a, b, c) {
    b = c ? b : b.top;
    try {
        var d = GM.clone(), e = new Qc(0, 0);
        if (a.K) {
            if (c || 2 != a.$e || !kM(a.K))
                d = a.K.getBoundingClientRect();
            if (c || !b.frameElement)
                e = Og(a.K, b)
        }
        var g = e.x, h = e.y, k = d.right - d.left, l = d.bottom - d.top;
        a.j = new rg(Math.round(h), Math.round(g + k), Math.round(h + l), Math.round(g))
    } catch (p) {
        a.j = GM.clone()
    } finally {
        a.C.Po = 5, a.C.me = 1, a.C.om = 4
    }
    a.R = (a.j.bottom - a.j.top) * (a.j.right - a.j.left);
    2 != a.H && 3 != a.H && 6 != a.H || 0 != a.R ? (a.Te = !1, a.ee = null) : (a.Te = !0, a.K && a.K.parentElement && a.cf && (c = a.K.parentElement.getBoundingClientRect(),
        a.ee = new rg(c.top, c.right, c.bottom, c.left)))
}
function TM(a, b) {
    var c = a.Kb;
    eM || a.ga || -1 == a.ba || (c += b - a.ba);
    return c
}
function QM(a) {
    if ("as" == a.F && ia(a.element.sdkVolume))
        try {
            return Number(a.element.sdkVolume())
        } catch (b) {
            return -1
        }
    if ("h" == a.F) {
        var c = t("ima.common.sdkVolume");
        if (ia(c))
            try {
                return Number(c(a.B))
            } catch (d) {
                return -1
            }
    }
}
function UM(a, b) {
    ub(a.Aa, Gb(b - a.Aa.length + 1));
    a.Aa[b] = (100 * a.A | 0) / 100
}
function VM(a) {
    if (a.oa)
        return {"if": 0};
    var b = a.j.clone();
    b.round();
    var c = E(a.Aa, function (a) {
        return 100 * a | 0
    }), b = {
        "if": WM ? 1 : void 0,
        sdk: a.F ? a.F : void 0,
        p: [b.top, b.left, b.bottom, b.right],
        tos: a.M,
        mtos: a.I,
        ps: void 0,
        pt: c,
        vht: TM(a, dM()),
        mut: a.Wa,
        a: a.pa
    };
    XM(a, b);
    YM && (b.ps = [YM.width, YM.height]);
    a.xa && (b.ven = "1");
    a.o && (b.vds = a.o);
    ZM() ? b.c = (100 * a.A | 0) / 100 : b.tth = dM() - $L;
    return b
}
function XM(a, b) {
    b.avss = a.Ia;
    if (0 == a.Ga)
        b.aoc = 0, b.voc = 0, b.avoc = 0;
    else {
        var c = a.M[0] + a.M[1] + a.M[2];
        b.aoc = RM(a.Ea / a.Ga, 2);
        b.voc = RM(c / a.Ga, 2);
        b.avoc = RM(a.Ma / a.Ga, 2)
    }
}
function RM(a, b) {
    var c = Math.pow(10, b);
    return Math.round(a * c) / c
}

function $M() {
    return !aN() && (Xc("iPod") || Xc("iPhone") || Xc("Android") || Xc("IEMobile"))
}
function aN() {
    return Xc("iPad") || Xc("Android") && !Xc("Mobile") || Xc("Silk")
}

var bN = null, cN = null, dN = null, eN = !1, bM = void 0;
function fN() {
    if (!eN) {
        eN = !0;
        bN = bN || YL(xL, "scroll", gN, "osd_or_lidar::scroll");
        cN = cN || YL(xL, "resize", hN, "osd_or_lidar::resize");
        var a = iN, b;
        wL.mozVisibilityState ? b = "mozvisibilitychange" : wL.webkitVisibilityState ? b = "webkitvisibilitychange" : wL.visibilityState && (b = "visibilitychange");
        b && (dN = dN || YL(wL, b, a, "osd_or_lidar::visibility"));
        iN()
    }
}
function hN() {
    lN(!1);
    gN()
}
function gN() {
    mN(nN, !1)
}
function oN() {
    var a;
    pN && (qN = ZL(xL, pN));
    a = qN;
    var b = rN, c = sN;
    if (tN) {
        a = b;
        lN(!1);
        var d = uN, e = d.height - a;
        0 >= e && (e = d.height, a = 0);
        qN = new H(d.width, e);
        e = new vN;
        e.C = !0;
        e.A = qN;
        e.o = d;
        e.k = a;
        return e
    }
    if (c)
        return a = new vN, a.B = !0, a;
    if (wN)
        return a = new vN, a.D = !0, a;
    if (xN)
        return a = new vN, a.G = !0, a;
    t: {
        b = new vN;
        b.A = a;
        b.j = !1;
        if (null != a && -1 != a.width && -1 != a.height && -12245933 != a.width && -12245933 != a.height) {
            try {
                var c = pN, g = xL || xL, g = g.top, e = a || ZL(g, c), h = oe(xd(g.document)), d = -1 == e.width || -12245933 == e.width ? new rg(e.width, e.width,
                    e.width, e.width) : new rg(h.y, h.x + e.width, h.y + e.height, h.x)
            } catch (k) {
                a = b;
                break t
            }
            b.F = d;
            b.j = !0
        }
        a = b
    }
    return a
}
function mN(a, b) {
    var c;
    if (!yN)
        if (window.clearTimeout(zN), zN = null, 0 == a.length)
            b || AN();
        else {
            var d = oN();
            try {
                var e = dM();
                if (d.C)
                    for (c = 0; c < a.length; c++)
                        IM(a[c], e, d.o, d.k, b);
                else if (d.B)
                    for (c = 0; c < a.length; c++)
                        KM(a[c], e, b);
                else if (xN)
                    D(a, function () {
                    });
                else if (d.D)
                    D(a, function (a) {
                        if (b) {
                            if (a.k) {
                                var c = a.k;
                                3 <= c.o && (c.o = 3);
                                a.W = -1
                            }
                        } else if (a.k && "d" != a.k.getStatus()) {
                            var c = uM(a.k), d = [-1, -1, -1, -1, -1, 4, 2, 0], e = d[c.snapshot + 1];
                            OM(a, e, c.j, d[c.k + 1], !0, !1);
                            a.W = e;
                            a.va(a, GM);
                            7 == a.H ? 2E3 <= Math.max(a.G[2], a.I[2]) && a.k && tM(a.k) :
                            1E3 <= Math.max(a.G[2], a.I[2]) && !a.fe && a.k && tM(a.k);
                            (c = 2 == c.snapshot || zM(a.k)) || (c = a.k, c = "f" == c.k && c.A >= c.G);
                            c && (a.ge(a), a.fe = !1, a.k && tM(a.k))
                        }
                    });
                else if (d.j)
                    for (c = 0; c < a.length; c++)
                        a[c].update(e, d.F, b, xL, WM);
                ++BN
            } finally {
                b ? D(a, function (a) {
                    a.A = 0
                }) : AN()
            }
        }
}
function iN() {
    var a = ZM();
    if (a) {
        if (!eM) {
            var b = dM();
            fM = b;
            D(nN, function (a) {
                a.Kb = TM(a, b)
            })
        }
        eM = !0;
        lN(!0)
    } else
        b = dM(), eM = !1, $L = b, D(nN, function (a) {
            0 <= a.S && (a.ba = b)
        });
    mN(nN, !a)
}
function ZM() {
    if (CN())
        return !0;
    var a;
    a = xL.document;
    a = {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4
    }[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0;
    return 1 == a || 0 == a
}
function AN() {
    xL && (zN = xL.setTimeout(KL("osd_or_lidar::psamp_to", function () {
        mN(nN, !1)
    }), aM()))
}
function DN(a) {
    return null != F(nN, function (b) {
            return b.element == a
        })
}
var nN = [], yN = !1, qN = null, uN = null, YM = null, zN = null, WM = !uL(xL.top), rN = 0, tN = !1, sN = !1, wN = !1, xN = !1, pN = aN() || $M(), BN = 0;
function EN() {
    var a = xL.document;
    return a.body && a.body.getBoundingClientRect ? !0 : !1
}
function lN(a) {
    qN = ZL(xL, pN);
    if (!a) {
        uN = xL.outerWidth ? new H(xL.outerWidth, xL.outerHeight) : new H(-12245933, -12245933);
        a = xL;
        a.top != a && (a = a.top);
        var b = 0, c = 0, d = qN;
        try {
            var e = a.document, g = e.body, h = e.documentElement;
            if ("CSS1Compat" == e.compatMode && h.scrollHeight)
                b = h.scrollHeight != d.height ? h.scrollHeight : h.offsetHeight, c = h.scrollWidth != d.width ? h.scrollWidth : h.offsetWidth;
            else {
                var k = h.scrollHeight, l = h.scrollWidth, p = h.offsetHeight, r = h.offsetWidth;
                h.clientHeight != p && (k = g.scrollHeight, l = g.scrollWidth, p = g.offsetHeight,
                    r = g.offsetWidth);
                k > d.height ? k > p ? (b = k, c = l): (b = p, c = r):k < p ? (b = k, c = l): (b = p, c = r)
            }
            YM = new H(c, b)
        } catch (u) {
            YM = new H(-12245933, -12245933)
        }
    }
}
function FN() {
    var a = GN, b = !1;
    D(nN, function (c, d) {
        if (1 > Math.random()) {
            var e = SM(c, a, String(d));
            b = b || e
        }
    });
    (wN = b) && D(nN, function (b) {
        Boolean(b.k) || a(b)
    });
    return b
}
function HN(a) {
    D(a, function (a) {
        DN(a.element) || nN.push(a)
    })
}
function CN() {
    return hb(nN, function (a) {
        return a.O
    })
}
function vN() {
    this.o = this.A = null;
    this.k = 0;
    this.F = null;
    this.j = this.G = this.D = this.B = this.C = !1
}

var IN = !bd;
function JN(a, b) {
    return IN && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
}

var KN = null, LN = "", MN = !1;
function NN() {
    var a = KN || xL;
    if (!a)
        return "";
    var b = a.document, c = [];
    c.push("url=" + BL(a.location.href.substring(0, 512)));
    b && b.referrer && c.push("referrer=" + BL(b.referrer.substring(0, 512)));
    b = a.location && a.location.ancestorOrigins;
    if (WM && b && 0 < b.length) {
        for (var d = [], a = b.length, e = a - 1; 0 <= e; --e)
            d.push(BL(b[e]));
        b = d.join(",");
        b = b.substring(0, 512);
        c.push("anc=" + b);
        c.push("adep=" + a)
    }
    return c.join("&")
}

var ON = !1, PN = !1, QN = !1;
function RN() {
    ON = !0;
    try {
        cM = dM(), .01 > Math.random() && (QN = !0), KN = LL(), lN(!1), EN() ? (window.setTimeout(function () {
        }, 1), WM ? SN() : fN()) : MN = !0
    } catch (a) {
        throw nN = [], a;
    }
}
function SN() {
    var a;
    if (cd && ha(xL.screenX) && ha(xL.mozInnerScreenX) && ha(xL.outerWidth) && 1 > Math.random()) {
        var b = xL.navigator.userAgent, c = b.indexOf("Firefox/");
        a = -1;
        if (0 <= c) {
            a = Math.floor(b.substr(c + 8)) || -1;
            var d = b.indexOf("Mac OS X 10."), c = -1;
            0 <= d && (c = Number(b.substr(d + 12, 1)) || -1);
            var e = 0 < c ? -1 : b.indexOf("Windows NT "), d = -1;
            0 <= e && (d = {"6.0": 0, "6.1": 1, "6.2": 2}[b.substr(e + 11, 3)] || -1);
            b = 148;
            5 <= c ? b = 4 <= a ? 108 : 3 <= a ? 127 : 108 : 0 <= d && (16 == a || 17 == a || 18 == a) && (b = [[146, 146, 146], [148, 147, 148], [131, 130, 136]][d][a - 16]);
            a =
                b
        } else
            a = null;
        null !== a && (rN = a, tN = !0);
        a = !0
    } else
        a = !1;
    a ? fN() : (a = bd && od(8) && 1 > Math.random() ? sN = !0 : !1, a
    ? fN() : FN() ? (fN(), PN = !0) : (window.clearTimeout(zN), zN = null, LN = "i", yN = !0)
)
}
function GN(a) {
    if (a) {
        if (!a.he) {
            var b = [];
            b.push("v=262v");
            b.push("r=fp");
            b.push("efm=" + (PN ? 1 : 0));
            b.push(Pe(VM(a)));
            b.push(NN());
            b = "&" + b.join("&");
            zL(("//pagead2.googlesyndication.com/pagead/gen_204?id=lidarvf" + b).substring(0, 2E3));
            a.he = !0
        }
        a.oa = !0
    }
}
function TN(a, b, c) {
    var d = {};
    cc(d, {
        opt_videoAdElement: void 0,
        opt_VideoAdLength: void 0,
        opt_fullscreen: void 0,
        opt_nativeMobile: !1
    }, c || {});
    var e = a.toLowerCase();
    if (a = Sb(sL, function (a) {
            return a == e
        })) {
        a = {e: tL[a], hd: yN ? "1" : "0", v: "262v", hdr: LN || void 0};
        if (d.opt_bounds)
            return a.msg = "ol", iM(a);
        if (MN)
            return a.msg = "ue", iM(a);
        b = UN(b, d);
        if (!b)
            return a.msg = "nf", iM(a);
        ON || RN();
        "i" == LN && (b.oa = !0);
        QN && VN(b);
        c = d.opt_fullscreen;
        n(c) && (b.O = Boolean(c));
        c = {};
        c.start = WN;
        c.firstquartile = XN;
        c.midpoint = YN;
        c.thirdquartile = ZN;
        c.complete = $N;
        c.metric = aO;
        c.pause = bO;
        c.resume = cO;
        c.skip = dO;
        c.viewable_impression = aO;
        c.mute = eO;
        c.unmute = fO;
        c.fullscreen = gO;
        c.exitfullscreen = hO;
        if (c = c[e]) {
            d = c(b, d);
            if (!n(d) || w(d))
                return d;
            cc(a, d);
            return iM(a)
        }
    }
}
function WN(a, b) {
    "i" != LN && (yN = !1);
    !PN || Boolean(a.k) || a.na || SM(a, GN, String(db(nN, a)));
    iO(a, b);
    UM(a, 0);
    1 <= (100 * a.A | 0) / 100 && .1 <= a.pa && (a.Ia = !0);
    return VM(a)
}
function XN(a) {
    UM(a, 1);
    mN([a], !ZM());
    return VM(a)
}
function YN(a) {
    UM(a, 2);
    mN([a], !ZM());
    return VM(a)
}
function ZN(a) {
    UM(a, 3);
    mN([a], !ZM());
    return VM(a)
}
function $N(a) {
    UM(a, 4);
    mN([a], !ZM());
    var b = VM(a);
    a.O = !1;
    jO(a.B);
    return b
}
function bO(a) {
    a.Kb = TM(a, dM());
    var b = !ZM();
    mN([a], b);
    a.ga = !0;
    return VM(a)
}
function cO(a) {
    var b = ZM();
    a.ga && !b && (a.ba = dM());
    mN([a], !b);
    a.ga = !1;
    return VM(a)
}
function aO(a) {
    a = VM(a);
    a.hvem = "1";
    return a
}
function dO(a) {
    var b = !ZM();
    mN([a], b);
    b = VM(a);
    a.O = !1;
    jO(a.B);
    return b
}
function eO(a) {
    mN([a], !ZM());
    return VM(a)
}
function fO(a) {
    mN([a], !ZM());
    return VM(a)
}
function gO(a) {
    a.O = !0;
    mN([a], !ZM());
    return VM(a)
}
function hO(a) {
    a.O = !1;
    mN([a], !ZM());
    return VM(a)
}
function iO(a, b) {
    b && b.opt_VideoAdLength && (a.ac = b.opt_VideoAdLength);
    var c = n(b) ? b.opt_nativeTime : void 0;
    gM = c = ha(c) ? c : dM();
    a.M = [0, 0, 0, 0, 0];
    a.I = [0, 0, 0, 0, 0];
    a.G = [0, 0, 0, 0, 0];
    a.ja = [0, 0, 0, 0, 0];
    a.S = -1;
    a.ea = -1;
    a.nb = -1;
    a.Se = 0;
    a.af = -1;
    a.W = -1;
    a.X = -1;
    a.A = 0;
    a.S = c;
    var d = !1;
    ZM() || (d = !0, a.ba = c);
    mN([a], d)
}
function jO(a) {
    if (w(a)) {
        var b = jb(nN, function (b) {
            return b.B == a
        });
        0 <= b && qb(nN, b)
    }
}
function UN(a, b) {
    if (b.opt_nativeMobile)
        return kO(a, b);
    if (b.opt_videoAdElement)
        return lO(a, b.opt_videoAdElement);
    var c = mO(a);
    return c ? c : c = F(nN, function (b) {
        return b.B == a
    })
}
function kO(a, b) {
    var c = F(nN, function (b) {
        return b.B == a
    });
    c || (c = new FM(window, "", null, b.opt_nativeTime, 7, !1), c.F = "n", c.va = nO, HN([c]), c.B = a);
    return c
}
function lO(a, b) {
    var c = F(nN, function (a) {
        return a.element == b
    });
    c || (c = oO(b), c.B = a, c.F = "h");
    return c
}
function mO(a) {
    var b = F(nN, function (b) {
        return b.element ? pO(b.element) == a : !1
    });
    if (b)
        return b;
    b = qO();
    b = F(b, function (b) {
        return pO(b) == a
    });
    if (!b)
        return null;
    b = oO(b);
    b.F = "as";
    rO(b);
    return b
}
function rO(a) {
    var b = pO(a.element);
    w(b) && (a.B = b)
}
function qO() {
    var a = xL.document, b = Hb(E(["embed", "object"], function (b) {
        return tb(a.getElementsByTagName(b))
    }));
    return b = fb(b, function (a) {
        if (!a || !Xd(a))
            return !1;
        var b = a.getBoundingClientRect();
        return 0 != b.width && 0 != b.height && a.metricID && ia(a.metricID) ? !0 : !1
    })
}
function pO(a) {
    if (!a || !a.metricID || !ia(a.metricID))
        return null;
    var b;
    try {
        b = a.metricID()
    } catch (c) {
        return null
    }
    return b.queryID
}
function oO(a) {
    var b = dM(), c = JN(a, "admeta") || JN(a, "admetaDfp") || "", d = JN(a, "ord") || "", e;
    t: if (d) {
        e = xL.document.getElementsByTagName("script");
        for (var g = new RegExp(".doubleclick.net/(N.+/)?(pf)?(ad[ijx])/.*;ord=" + Oa(d)), h = 0; h < e.length; h++) {
            var k = e[h];
            if (k && k.src && g.test(k.src)) {
                e = k.src;
                break t
            }
        }
        e = xL != xL.top && g.test(xL.location.href) ? xL.location.href : ""
    } else
        e = "";
    a = new FM(xL, e, a, b, 7, WM, c, d);
    b = e.match(/.doubleclick.net\/(N.+\/)?(pf)?(ad[ijx])\//);
    a.Xa = b ? {adi: "adi", adj: "adj", adx: "adx"}[b[3]] : "";
    if (e) {
        t: {
            if (e &&
                (b = e.match(/\/\/.*(;u=xb[^;\?]*)/i)) && (b = b[b.length - 1].split("=")) && 2 == b.length) {
                b = b[1];
                break t
            }
            b = null
        }
        a.Cc = b
    }
    a.va = nO;
    HN([a]);
    fN();
    return a
}
function nO(a) {
    if (2E3 <= Math.max(a.G[2], a.I[2]) && !a.xa) {
        var b = "as" == a.F, c = "h" == a.F, d = "n" == a.F, e = t("ima.common.triggerViewEvent"), g = VM(a);
        g.e = 9;
        try {
            var h = iM(g);
            c || d ? ia(e) ? (e(a.B, h), a.xa = !0) : a.o = 4 : b ? a.element && a.element.triggerViewEvent ? (a.element.triggerViewEvent(h), a.xa = !0) : a.o = 1 : a.o = 5
        } catch (k) {
            a.o = a.o || 2
        }
    } else
        a.o = 3
}
function VN(a) {
    if (a.lc || a.oa)
        a.o = a.o || 13;
    else {
        var b = "as" == a.F, c = "h" == a.F;
        try {
            if (c) {
                var d = t("ima.common.triggerMeasurableEvent");
                ia(d) ? (d(a.B), a.lc = !0) : a.o = a.o || 14
            } else
                b ? a.element && a.element.triggerMeasurableEvent ? (a.element.triggerMeasurableEvent(), a.lc = !0) : a.o = a.o || 11 : a.o = a.o || 15
        } catch (e) {
            a.o = a.o || 12
        }
    }
}
q("Goog_AdSense_Lidar_startMetricMeasurement", JL("lidar::startmm_ex", function (a, b) {
    var c = b || {};
    if (!w(a)) {
        var d = UN(a, c);
        d && iO(d, c)
    }
}), void 0);
q("Goog_AdSense_Lidar_stopMetricMeasurement", JL("lidar::stopmm_ex", jO), void 0);
q("Goog_AdSense_Lidar_getMetric", JL("lidar::getmetric_ex", function (a) {
    var b = F(nN, function (b) {
        return b.B === a
    });
    if (!b)
        return "-1";
    var c = {gm: 1, xsj: b.M, mkdj: b.I};
    ZM() ? c.c7 = (100 * b.A | 0) / 100 : c.ftr = dM() - $L;
    return lg(c)
}), void 0);
q("Goog_AdSense_Lidar_sendVastMessage", JL("lidar::handlevast_ex", TN), void 0);
function sO() {
    U.call(this);
    this.j = null;
    this.A = new mn(this);
    S(this, this.A);
    this.B = null;
    this.F = new ue;
    this.D = new ue;
    this.o = null;
    this.k = !1
}
inherit(sO, U);
var tO = null;
function uO() {
    null != tO || (tO = new sO);
    return tO
}
sO.prototype.destroy = function () {
    this.A.Da(this.j, "activityMonitor", this.C);
    this.k = !1
};
sO.prototype.init = function (a) {
    if (!this.k) {
        (this.j = a || null) && this.A.listen(this.j, "activityMonitor", this.C);
        if (FK.A && !(window.ima && window.ima.video && window.ima.video.client && window.ima.video.client.tagged)) {
            q("ima.video.client.sdkTag", !0, void 0);
            a = document.createElement("script");
            a.src = document.location.protocol + "//s0.2mdn.net/instream/video/client.js";
            a.async = !0;
            a.type = "text/javascript";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        }
        this.k = !0
    }
};
function vO(a) {
    if (null == a)
        return !1;
    if (LK() && null != a.webkitDisplayingFullscreen)
        return a.webkitDisplayingFullscreen;
    var b = window.screen.availWidth || window.screen.width, c = window.screen.availHeight || window.screen.height;
    a = wO(a);
    return 0 >= b - a.width && 42 >= c - a.height
}
function wO(a) {
    return ia(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
        left: a.offsetLeft,
        top: a.offsetTop,
        width: a.offsetWidth,
        height: a.offsetHeight
    }
}
function xO(a, b) {
    a.o = b
}
function yO(a, b, c, d, e) {
    if (a.k) {
        e = e || {};
        if (d = d ? a.D.get(d) : FK.o)
            null != e.opt_fullscreen || (e.opt_fullscreen = vO(d)), null != e.opt_videoAdElement || (e.opt_videoAdElement = d);
        null == e.opt_bounds && a.o && (e.opt_bounds = wO(a.o));
        return TN(b, c, e) || ""
    }
    return ""
}
sO.prototype.C = function (a) {
    var b = a.jd, c = b.queryId, d = {};
    d.eventId = b.eventId;
    switch (a.jc) {
        case "getViewability":
            d.viewabilityString = yO(this, "metric", c) || "";
            this.j.send("activityMonitor", "viewability", d);
            break;
        case "reportVastEvent":
            var e = b.vastEvent;
            a = b.osdId;
            var g = {};
            g.opt_fullscreen = b.isFullscreen;
            b.isOverlay && (g.opt_bounds = b.overlayBounds);
            var h = null;
            "isFullscreen" in b && (h = b.isFullscreen);
            d.viewabilityString = yO(this, e, c, a, g);
            d.engagementString = zO(this, a, h);
            this.j.send("activityMonitor", "viewability",
                d);
            break;
        case "fetchAdTagUrl":
            c = {}, c.eventId = b.eventId, a = b.osdId, h = null, "isFullscreen" in b && (h = b.isFullscreen), c.engagementString = zO(this, a, h), this.j.send("activityMonitor", "engagement", c)
    }
};
function zO(a, b, c) {
    if (!FK.A)
        return "";
    var d = b ? a.D.get(b) : FK.o;
    a = {};
    null != c && (a.fullscreen = c);
    return rL(function () {
        return d
    }, a)
}
q("ima.common.sdkVolume", function (a) {
    var b = uO();
    a = b.F.get(a) || b.B;
    return null != a ? a() : -1
}, void 0);
q("ima.common.triggerViewEvent", function (a, b) {
    var c = {};
    c.queryId = a;
    c.viewabilityString = b;
    var d = uO().j;
    d ? d.send("activityMonitor", "viewableImpression", c) : uO().U(new hJ("viewable_impression", null, c))
}, void 0);
q("ima.common.triggerMeasurableEvent", function (a) {
    var b = {};
    b.queryId = a;
    (a = uO().j) ? a.send("activityMonitor", "measurableImpression", b) : uO().U(new hJ("measurable_impression", null, b))
}, void 0);
function AO(a, b, c) {
    if (mb(a))
        return null;
    a = fb(a, function (a) {
        var b = a.A;
        return "application/x-mpegurl" == B(a.j).toLowerCase() || "progressive" == b
    });
    mb(c) || (c = E(c, function (a) {
        return a.toLowerCase()
    }), a = fb(a, function (a) {
        return G(c, B(a.j).toLowerCase())
    }));
    if (!ha(b) || 0 >= b)
        b = $M() ? 500 : 1E3;
    return BO(a, b)
}
function BO(a, b) {
    return CO(a, b) || DO(a, b) || EO(a, b)
}
function CO(a, b) {
    var c = null;
    D(a, function (a) {
        var e = a.Ld, g = a.Kd;
        e > b || g < b || !(null == c || c.Ld > e) || (c = a)
    });
    return c
}
function DO(a, b) {
    var c = null;
    D(a, function (a) {
        var e = a.Ld, g = a.Kd;
        g > b || (null == c || c.Kd < g ? c = a : null != c && c.Kd == g && c.Ld > e && (c = a))
    });
    return c
}
function EO(a, b) {
    var c = null;
    D(a, function (a) {
        var e = a.Ld, g = a.Kd;
        if (!(e < b))
            if (null != c && c.Ld == e && c.Kd < g)
                c = a;
            else if (null == c || c.Ld > e)
                c = a
    });
    return c
}

function FO() {
    U.call(this);
    this.C = this.F = this.H = this.D = !1;
    this.k = 0;
    this.A = [];
    this.I = !1;
    this.o = 0;
    this.B = new mn(this);
    this.G = {}
}
inherit(FO, U);
function GO(a, b) {
    null == b || a.D || (a.j = b, HO(a), a.D = !0)
}
function IO(a) {
    null != a.j && a.D && (JO(a), a.D = !1, a.F = !1, a.C = !1, a.k = 0, a.A = [], a.I = !1)
}
function HO(a) {
    JO(a);
    !(a.j instanceof U) && "ontouchstart" in document.documentElement && MK() ? (a.G = {
        touchstart: x(a.VB, a),
        touchmove: x(a.UB, a),
        touchend: x(a.TB, a)
    }, Ib(a.G, function (a, c) {
        this.j.addEventListener(c, a, !1)
    }, a)) : a.B.listen(a.j, "click", a.yp)
}
function JO(a) {
    a.B.Da(a.j, "click", a.yp);
    Ib(a.G, function (a, c) {
        this.j.removeEventListener(c, a, !1)
    }, a);
    a.G = {}
}
f = FO.prototype;
f.VB = function (a) {
    this.F = !0;
    this.k = a.touches.length;
    this.o && (window.clearTimeout(this.o), this.o = 0, this.H = !0);
    this.I = KO(this, a.touches) || 1 != a.touches.length;
    LO(this, a.touches)
};
f.UB = function (a) {
    this.k = a.touches.length;
    this.C = !0
};
f.TB = function (a) {
    !this.F || 1 != this.k || this.C || this.H || this.I || !KO(this, a.changedTouches) || (this.o = window.setTimeout(x(this.Io, this), 300));
    this.k = a.touches.length;
    0 == this.k && (this.C = this.F = !1, this.A = []);
    this.H = !1
};
f.yp = function () {
    this.Io()
};
function LO(a, b) {
    a.A = [];
    D(b, function (a) {
        ob(this.A, a.identifier)
    }, a)
}
function KO(a, b) {
    return hb(b, function (a) {
        return G(this.A, a.identifier)
    }, a)
}
f.Io = function () {
    this.o = 0;
    this.U(new $l("click"))
};
f.L = function () {
    IO(this);
    this.B.dispose();
    this.B = null;
    FO.J.L.call(this)
};
function MO(a) {
    null != a ? BJ(xJ, a) ? (a = a.match(/yt_vid\/([a-zA-Z0-9_-]{11})/), a = null != a && 1 < a.length ? a[1] : null):a = null != a && BJ(yJ, a) ? NO(a) : null : a = null;
    return a
}
function OO(a, b, c) {
    if (null == a)
        return null;
    c = new J((null != c ? c : "//www.youtube.com/") + "watch");
    var d = c.j;
    d.set("v", a);
    d.set("feature", b ? "trueview-instream" : "instream");
    bf(c, d);
    return c.toString()
}
function NO(a) {
    if (A(B(a)))
        return null;
    var b = a.match(/^https?:\/\/[^\/]*youtu\.be\/([a-zA-Z0-9_-]+)$/);
    if (null != b && 2 == b.length)
        return b[1];
    b = a.match(/^https?:\/\/[^\/]*youtube.com\/video\/([a-zA-Z0-9_-]+)$/);
    if (null != b && 2 == b.length)
        return b[1];
    b = a.match(/^https?:\/\/[^\/]*youtube.com\/watch\/([a-zA-Z0-9_-]+)$/);
    if (null != b && 2 == b.length)
        return b[1];
    a = nf(new J(a));
    return xf(a, "v") ? a.get("v").toString() : xf(a, "video_id") ? a.get("video_id").toString() : null
}

function PO(a, b, c, d, e, g, h, k, l) {
    this.A = a;
    this.j = b;
    isNaN(c) && isNaN(d) && isNaN(e) ? e = d = 0 : isNaN(d) && !isNaN(e) ? d = e : !isNaN(d) && isNaN(e) ? e = d : !isNaN(c) && isNaN(d) && isNaN(e) && (d = e = c);
    this.Ld = d;
    this.Kd = e;
    this.B = h;
    this.k = k;
    this.o = l
}
PO.prototype.getHeight = function () {
    return this.B
};
function QO() {
    U.call(this)
}
inherit(QO, U);
var RO = {
    ZG: "beginFullscreen",
    CLICK: "click",
    yH: "end",
    AH: "endFullscreen",
    ERROR: "error",
    zI: "mediaLoadTimeout",
    PAUSE: "pause",
    PLAY: "play",
    FJ: "skip",
    Qv: "skipShown",
    $n: "start",
    VJ: "timeUpdate",
    UJ: "timedMetadata",
    xK: "volumeChange"
};
QO.prototype.Pr = v;
QO.prototype.Ep = v;
QO.prototype.qf = function () {
    return null
};
function SO(a) {
    U.call(this);
    this.j = a;
    this.M = new Gm(4);
    this.A = 0;
    this.K = this.o = this.F = !1;
    this.H = this.bd();
    this.G = this.Hd();
    this.O = 15E3;
    this.I = !1
}
inherit(SO, QO);
f = SO.prototype;
f.Mr = function (a, b, c, d) {
    if (d && (d = F(a, function (a) {
            return !da(MO(a.k))
        }), null !== d))
        return d;
    a = fb(a, function (a) {
        var b = a.j;
        A(B(a.k)) || "progressive" != a.A && "application/x-mpegurl" != B(b).toLowerCase() ? a = !1 : (b = B(b).toLowerCase(), a = A(b) || id && NK(JK, 2.3) && -1 != b.indexOf("application/ogg") ? !1 : id && (-1 != b.indexOf("video/mp4") || -1 != b.indexOf("video/3gpp")) || MK() && (-1 != b.indexOf("application/x-mpegurl") || -1 != b.indexOf("application/vnd.apple.mpegurl")) ? !0 : !A(this.j.canPlayType(b)));
        return a
    }, this);
    return AO(a, b, c)
};
f.Xk = function () {
    return fb(Pb(vJ), function (a) {
        return !A(this.j.canPlayType(a))
    }, this)
};
f.Hm = function (a) {
    this.O = 0 < a.vb ? a.vb : 15E3
};
f.load = function (a) {
    TO(this);
    this.j.src = a;
    this.j.load()
};
f.getVideoUrl = function () {
    return this.j.src
};
f.setVolume = function (a) {
    this.j.volume = a
};
f.ed = function () {
    return this.j.volume
};
f.play = function () {
    this.I = !1;
    gn(this.j.play, 0, this.j);
    this.P = gn(this.Aw, this.O, this)
};
f.pause = function () {
    this.I = !0;
    this.j.pause()
};
f.Hg = function () {
    return this.j.paused ? MK() || Th ? this.j.currentTime < this.j.duration : !0 : !1
};
f.Gg = function () {
    return this.j.muted
};
f.Qk = function () {
    LK() && this.j.webkitDisplayingFullscreen && this.j.webkitExitFullscreen()
};
f.Hd = function () {
    return vO(this.j)
};
f.qg = function (a) {
    var b;
    t: {
        for (b = this.M.Ka(); b.length;) {
            var c = b.pop();
            if (0 < c) {
                b = c;
                break t
            }
        }
        b = -1
    }
    return b >= a
};
f.yf = function (a) {
    this.j.currentTime = a
};
f.getCurrentTime = function () {
    return this.j.currentTime
};
f.Wo = function () {
    return UO(this)
};
f.ad = function () {
    return isNaN(this.j.duration) ? -1 : this.j.duration
};
f.Ee = function () {
    return this.j.ended
};
f.bd = function () {
    return new H(this.j.offsetWidth, this.j.offsetHeight)
};
f.Gp = function () {
    return this.j.seeking
};
f.L = function () {
    this.zf();
    this.j = null;
    SO.J.L.call(this)
};
f.Fp = function () {
    return this.j.error
};
f.zi = function () {
    this.zf();
    this.k = new mn(this);
    this.k.listen(this.j, "canplay", this.bA);
    this.k.listen(this.j, "ended", this.My);
    this.k.listen(this.j, "webkitbeginfullscreen", this.xl);
    this.k.listen(this.j, "webkitendfullscreen", this.Ip);
    this.k.listen(this.j, "pause", this.Oy);
    this.k.listen(this.j, "playing", this.pB);
    this.k.listen(this.j, "timeupdate", this.PB);
    this.k.listen(this.j, "volumechange", this.Py);
    this.k.listen(this.j, "error", this.Hp);
    this.C = new FO;
    this.k.listen(this.C, "click", this.Ly);
    GO(this.C, this.j);
    this.D = new en(1E3);
    this.k.listen(this.D, "tick", this.Ny);
    this.D.start()
};
f.zf = function () {
    null != this.C && (IO(this.C), this.C = null);
    null != this.D && this.D.dispose();
    null != this.k && (this.k.dispose(), this.k = null);
    TO(this)
};
function TO(a) {
    a.o = !1;
    a.F = !1;
    a.A = 0;
    a.K = !1;
    a.M.clear();
    hn(a.P);
    ti(a.B)
}
function VO(a) {
    a.o || (a.o = !0, hn(a.P), a.U("start"), QK() || !id || id && NK(JK, 3) || LK() && (!MK() || !NK(IK, 4)) || a.xl())
}
f.bA = function () {
    var a;
    if (a = Uh)
        a = Uc, a = !(a && (Na(a, "SMART-TV") || Na(a, "SmartTV")));
    a && !this.K && (this.yf(.001), this.K = !0)
};
f.pB = function () {
    this.U("play");
    MK() || Sh || VO(this)
};
f.PB = function () {
    if (!this.o && (MK() || Sh)) {
        if (0 >= this.getCurrentTime())
            return;
        if (Sh && this.Ee() && 1 == this.ad()) {
            this.Hp();
            return
        }
        VO(this)
    }
    if (MK()) {
        if (1.5 < this.getCurrentTime() - this.A) {
            this.F = !0;
            this.yf(this.A);
            return
        }
        this.F = !1;
        this.getCurrentTime() > this.A && (this.A = this.getCurrentTime())
    }
    this.M.add(this.j.currentTime);
    this.U("timeUpdate")
};
f.Py = function () {
    this.U("volumeChange")
};
f.Oy = function () {
    var a;
    this.o && MK() && !this.I && 2 > UO(this) - this.j.currentTime ? (this.B = new en(250), this.k.listen(this.B, "tick", this.Xz), this.B.start(), a = !0) : a = !1;
    a || this.U("pause")
};
f.My = function () {
    var a = !0;
    MK() && (a = this.A >= this.j.duration - 1.5);
    !this.F && a && this.U("end")
};
f.xl = function () {
    this.U("beginFullscreen")
};
f.Ip = function () {
    this.U("endFullscreen")
};
f.Hp = function () {
    hn(this.P);
    this.U("error")
};
f.Ly = function () {
    this.U("click")
};
f.Ny = function () {
    var a = this.bd(), b = this.Hd();
    if (a.width != this.H.width || a.height != this.H.height)
        !this.G && b ? this.xl() : this.G && !b && this.Ip(), this.H = a, this.G = b
};
f.Aw = function () {
    if (!this.o) {
        try {
            SK(RK.getInstance(), 16)
        } catch (a) {
        }
        TO(this);
        this.U("mediaLoadTimeout")
    }
};
f.Xz = function () {
    if (this.Ee() || !this.Hg())
        ti(this.B);
    else {
        var a = this.j.duration - this.j.currentTime, b = UO(this) - this.j.currentTime;
        0 < b && (2 <= b || 2 > a) && (ti(this.B), this.play())
    }
};
function UO(a) {
    for (var b = a.j.buffered.length - 1; 0 <= b;) {
        if (a.j.buffered.start(b) <= a.j.currentTime)
            return a.j.buffered.end(b);
        b--
    }
    return 0
}

function WO() {
    U.call(this);
    this.j = new XO;
    this.k = new mn(this);
    var a = AK();
    if (a) {
        t: {
            if ("videoElementMockDuration" in a.j && (a = a.j.videoElementMockDuration, ha(a)))
                break t;
            a = NaN
        }
        this.duration = a
    }
}
inherit(WO, U);
function YO() {
    var a = ["video/mp4"], b = ["video/ogg"], c = new WO;
    c.canPlayType = function (c) {
        return G(a, c) ? "probably" : G(b, c) ? "maybe" : ""
    };
    c.width = 0;
    c.height = 0;
    c.offsetWidth = 0;
    c.offsetHeight = 0;
    return c
}
function ZO(a) {
    this.startTime = 0;
    this.endTime = a
}
function XO() {
    this.length = 0;
    this.j = []
}
XO.prototype.start = function (a) {
    return this.j[a].startTime
};
XO.prototype.end = function (a) {
    return this.j[a].endTime
};
f = WO.prototype;
f.readyState = 0;
f.currentTime = 0;
f.duration = NaN;
f.Bf = !0;
f.Np = !1;
f.autoplay = !1;
f.volume = 1;
f.muted = !1;
f.src = "";
f.Uy = 1;
f.playbackRate = 0;
f.Pc = null;
f.Gi = 0;
f.HC = 4;
f.lg = null;
f.xj = null;
f.play = function () {
    this.Np && (this.currentTime = 0, this.U("timeupdate"));
    this.Bf && (this.Bf = !1, this.U("play"), this.readyState = this.HC, 2 >= this.readyState ? this.U("waiting") : this.U("playing"));
    if (null === this.Pc || this.Pc.ha())
        this.Pc = new en(10), this.Pc.listen("tick", x(this.gs, this));
    this.Gi = y();
    this.Pc.start();
    this.autoplay = !1
};
f.pause = function () {
    this.autoplay = !1;
    this.Bf || (this.Pc.stop(), this.Bf = !0, this.U("timeupdate"), this.U("pause"))
};
f.load = function () {
    this.readyState = 0;
    this.Bf = !0;
    this.U("loadstart");
    this.setProperty("duration", isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration);
    var a = this.j;
    a.j.push(new ZO(this.duration));
    a.length = a.j.length;
    this.U("loadedmetadata");
    0 < this.currentTime && this.U("timeupdate");
    this.U("loadeddata");
    this.U("canplay");
    this.U("canplaythrough");
    this.U("progress");
    this.playbackRate = this.Uy
};
f.setProperty = function (a, b) {
    switch (a) {
        case "currentTime":
            var c = Number(b);
            this.U("seeking");
            this.currentTime = c;
            this.U("seeked");
            this.gs();
            break;
        case "duration":
            this.duration = Number(b);
            this.U("durationchange");
            break;
        case "volume":
            this.volume = Number(b), this.U("volumechange")
    }
};
f.gs = function () {
    var a = y() - this.Gi, b = this.currentTime + a / 1E3;
    this.Gi += a;
    2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
    this.U("timeupdate");
    this.currentTime == this.duration && (this.Np = this.Bf = !0, this.Pc.stop(), this.U("ended"))
};
f.L = function () {
    this.Pc && !this.Pc.ha() && this.Pc.dispose()
};
f.jC = function (a) {
    var b = null, c = null;
    switch (a.type) {
        case "loadeddata":
            b = "Loaded";
            break;
        case "playing":
            b = "Playing";
            c = "#00f";
            break;
        case "pause":
            b = "Paused";
            break;
        case "ended":
            b = "Ended", c = "#000"
    }
    b && this.xj && (this.xj.innerText = b);
    c && this.lg && (this.lg.style.backgroundColor = c)
};
bd && od(8);
function $O() {
}

var aP = {}, bP = {}, cP = {};
function dP() {
    throw Error("Do not instantiate directly");
}
dP.prototype.zd = null;
dP.prototype.getContent = function () {
    return this.content
};
dP.prototype.toString = function () {
    return this.content
};
function eP(a, b) {
    var c = xd().createElement("DIV"), d = fP(a(b || gP, void 0, void 0));
    c.innerHTML = d;
    return 1 == c.childNodes.length && (d = c.firstChild, 1 == d.nodeType) ? d : c
}
function fP(a) {
    if (!ja(a))
        return String(a);
    if (a instanceof dP) {
        if (a.Ic === aP)
            return a.getContent();
        if (a.Ic === cP)
            return Aa(a.getContent())
    }
    return "zSoyz"
}
var gP = {};
function hP(a) {
    if (null != a)
        switch (a.zd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
    return null
}
function iP() {
    dP.call(this)
}
inherit(iP, dP);
iP.prototype.Ic = aP;
function jP(a) {
    return null != a && a.Ic === aP ? a : a instanceof Hc ? kP(Jc(a), a.rf()) : kP(Aa(String(String(a))), hP(a))
}
function lP() {
    dP.call(this)
}
inherit(lP, dP);
lP.prototype.Ic = {};
lP.prototype.zd = 1;
function mP() {
    dP.call(this)
}
inherit(mP, dP);
mP.prototype.Ic = bP;
mP.prototype.zd = 1;
function nP() {
    dP.call(this)
}
inherit(nP, dP);
nP.prototype.Ic = {};
nP.prototype.zd = 1;
function oP() {
    dP.call(this)
}
inherit(oP, dP);
oP.prototype.Ic = {};
oP.prototype.zd = 1;
function pP(a, b) {
    this.content = String(a);
    this.zd = null != b ? b : null
}
inherit(pP, dP);
pP.prototype.Ic = cP;
function qP(a) {
    function b(a) {
        this.content = a
    }

    b.prototype = a.prototype;
    return function (a) {
        return new b(String(a))
    }
}
var kP = function (a) {
    function b(a) {
        this.content = a
    }

    b.prototype = a.prototype;
    return function (a, d) {
        var e = new b(String(a));
        void 0 !== d && (e.zd = d);
        return e
    }
}(iP);
qP(lP);
qP(mP);
var rP = qP(nP);
qP(oP);
(function (a) {
    function b(a) {
        this.content = a
    }

    b.prototype = a.prototype;
    return function (a, d) {
        var e = String(a);
        if (!e)
            return "";
        e = new b(e);
        void 0 !== d && (e.zd = d);
        return e
    }
})(iP);
function sP(a) {
    return jP(a)
}
var tP = /['()]/g;
function uP(a) {
    return "%" + a.charCodeAt(0).toString(16)
}
function vP(a) {
    if (null != a && a.Ic === bP)
        return String(a).replace(wP, xP);
    if (a instanceof yc)
        return a = Ac(a), String(a).replace(wP, xP);
    a = ya(String(a));
    tP.lastIndex = 0;
    return tP.test(a) ? a.replace(tP, uP) : a
}
var yP = {};
function zP(a) {
    yP[1] || (yP[1] = new $O);
    var b = hP(a);
    if (null == b) {
        var c = b = 0, d = !1;
        a = hc(a + "", null != a && a.Ic === aP).split(nc);
        for (var e = 0; e < a.length; e++) {
            var g = a[e];
            kc.test(hc(g, void 0)) ? (b++, c++) : lc.test(g) ? d = !0 : jc.test(hc(g, void 0)) ? c++ : oc.test(g) && (d = !0)
        }
        b = 0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1
    }
    return rP(1 != b ? -1 == b ? 'dir="rtl"' : 1 == b ? 'dir="ltr"' : "" : "")
}
var AP = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
};
function xP(a) {
    return AP[a]
}
var wP = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
function BP(a) {
    return '<div class="videoAdUi"><div class="videoAdUiTopBar videoAdUiTopBarWithGradients"><div class="videoAdUiAuthorIcon"></div><div class="videoAdUiTitle ellipsisText"></div><div class="videoAdUiAuthorName ellipsisText"></div><div class="videoAdUiLearnMore">' + jP(a.Gf) + '</div><div class="videoAdUiShare"></div></div><div class="videoAdUiBottomBar"><div class="videoAdUiLearnMoreText">' + jP(a.Gf) + '<div class="videoAdUiLearnMoreIcon"></div></div><div class="videoAdUiAttributionContainer"><div class="videoAdUiAttribution"' +
        sP(zP(a.wd)) + ">" + jP(a.wd) + '</div><div class="videoAdUiAttributionIconContainer"><div class="videoAdUiAttributionIcon" id="videoAdUiAttributionIcon"></div><div class="videoAdUiAdInfoPopup"><div class="videoAdUiAdInfoPopupCallout"></div><div class="videoAdUiAdInfoPopupText" ' + sP(zP(a.Lh)) + ">" + jP(a.Lh) + '</div></div></div></div></div><div class="videoAdUiProgressBar"><div class="videoAdUiBuffer"></div><div class="videoAdUiProgress"></div></div></div>'
}
function CP(a) {
    return '<div class="videoAdUi"><div class="videoAdUiTopBar"><div class="videoAdUiAttributionContainer videoAdUiAttributionContainer-gvn"><div class="videoAdUiAttribution"' + sP(zP(a.wd)) + ">" + jP(a.wd) + '</div></div></div><div class="videoAdUiProgressBar"><div class="videoAdUiProgress"></div></div></div>'
}
function DP(a) {
    return '<div class="videoAdUi"><div class="videoAdUiTopBar"><div class="videoAdUiAttributionContainer videoAdUiAttributionContainer-gvn"><div class="videoAdUiAttribution"' + sP(zP(a.wd)) + ">" + jP(a.wd) + '</div></div><div class="videoAdUiLearnMoreText videoAdUiLearnMoreText-gvn">' + jP(a.Gf) + '<div class="videoAdUiLearnMoreIcon"></div></div></div><div class="videoAdUiProgressBar"><div class="videoAdUiProgress"></div></div></div>'
}
function EP() {
    return '<div class="videoAdUiPreSkipContainer"><div class="videoAdUiPreSkipButton"><div class="videoAdUiPreSkipText"></div><div class="videoAdUiPreSkipThumbnail" aria-hidden="true"></div></div></div>'
}
function FP(a) {
    var b = "";
    a = ra("You can skip this ad in {$xSeconds}", {xSeconds: jP(a.As)});
    return b + a
}
function GP(a) {
    return '<div class="videoAdUiSkipContainer html5-stop-propagation"><button class="videoAdUiSkipButton">' + jP(a.jD) + '<div class="videoAdUiSkipIcon"></div></button></div>'
}
function HP(a) {
    var b = "";
    a = 2 <= a.Aj && 1 <= a.Jh ? ra("Ad {$adPosition} of {$totalAds} {$timeLeft}", {
        adPosition: jP(a.Jh),
        totalAds: jP(a.Aj),
        timeLeft: jP(a.yj)
    }) : ra("Ad {$timeLeft}", {timeLeft: jP(a.yj)});
    return b += a
}

function IP(a, b, c) {
    if (null == a || !Zd(zd(a), a))
        throw vK(TJ, null, "containerElement", "element");
    this.B = a;
    this.k = this.j = null;
    this.A = b;
    this.C = c;
    this.o = null;
    this.j = I("div", {style: "display:none;"});
    a = AK();
    BK(a, "useVideoElementMock") ? (a = YO(), b = I("div", {style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"}), qa(b, a), a.lg = I("div", {style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"}), a.xj = I("p", {style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"}),
        a.lg.appendChild(a.xj), b.appendChild(a.lg), a.k.listen(a, ["loadeddata", "playing", "pause", "ended"], a.jC), a = b
) :
    (a = "", b = ra("Advertisement"), a = I("video", {
        style: "background-color:#000;position:absolute;width:100%;height:100%;",
        title: a + b
    }));
    a.setAttribute("webkit-playsinline", !0);
    this.k = a;
    this.B.appendChild(this.j);
    this.j.appendChild(this.k);
    this.A && (a = I("div", {
        id: this.A,
        style: "display:none;background-color:#000;position:absolute;width:100%;height:100%;"
    }), this.j.appendChild(a));
    this.C && (this.o = I("div",
        {style: "position:absolute;width:100%;height:100%;"}), this.j.appendChild(this.o))
}
inherit(IP, R);
IP.prototype.initialize = function () {
    KK() && this.k.load()
};
IP.prototype.L = function () {
    Sd(this.j);
    IP.J.L.call(this)
};
IP.prototype.show = function () {
    var a = this.j;
    null != a && (a.style.display = "block")
};
IP.prototype.hide = function () {
    var a = this.j;
    null != a && (a.style.display = "none")
};
function JP(a) {
    U.call(this);
    this.H = "ima-chromeless-video";
    var b = null;
    null != a && (w(a) ? this.H = a : b = a);
    this.I = new mn(this);
    this.B = null;
    this.o = !1;
    this.V = this.bd();
    this.R = this.Hd();
    this.D = -1;
    this.P = !1;
    this.C = -1;
    this.k = this.M = this.F = null;
    this.S = "";
    this.j = !1;
    this.ea = null != b;
    this.G = this.O = this.$ = null;
    this.A = void 0;
    this.W = null;
    null != b ? (this.j = !0, this.$ = b, this.A = 2) : (a = x(this.Hw, this), KP
    ? a() : (LP.push(a), a = Nd("script"), a.src = "https://www.youtube.com/iframe_api", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a,
        b))
)
}
inherit(JP, QO);
var MP = ["video/mp4", "video/webm"], NP = {
    el: "adunit",
    controls: 0,
    html5: 1,
    playsinline: 1,
    showinfo: 0
}, LP = [], KP = !1;
f = JP.prototype;
f.Mr = function (a, b, c) {
    var d = F(a, function (a) {
        return !da(MO(a.k))
    });
    if (null !== d)
        return d;
    a = fb(a, function (a) {
        a = B(a.j);
        return this.j ? this.$.canPlayType(a) : G(MP, a)
    }, this);
    mb(c) || (d = AO(a, b, c));
    return null != d ? d : AO(a, b, [])
};
f.Hm = function (a) {
    this.k = a
};
f.load = function (a, b) {
    null !== a && (this.S = a, this.j ? OP(this, a, b) : (this.F = a, this.M = b))
};
f.getVideoUrl = function () {
    return this.S
};
f.setVolume = function (a) {
    this.ea ? this.U("volumeChange") : this.j ? (a = Pc(100 * a, 0, 100), this.$.setVolume(a), this.C = -1, this.U("volumeChange")
    ) :
    this.C = a
};
f.ed = function () {
    return this.j ? this.$.getVolume() / 100 : this.C
};
f.play = function () {
    if (!A(B(this.S))) {
        if (!this.o) {
            PP(this);
            var a = 15E3;
            null != this.k && 0 < this.k.vb && (a = this.k.vb);
            this.ba = gn(this.kB, a, this)
        }
        this.j ? (this.P = !1, !this.o && this.k && this.k.j ? this.$.loadVideoByPlayerVars(this.W) : this.$.playVideo()) : this.P = !0
    }
};
f.pause = function () {
    this.j && this.o && this.$.pauseVideo()
};
f.Hg = function () {
    return this.j ? 2 == this.$.getPlayerState(this.A) : !1
};
f.Gg = function () {
    return this.j ? this.$.isMuted() : 0 == this.ed()
};
f.Qk = function () {
};
f.Hd = function () {
    var a = FK.j ? FK.o : document.getElementById(this.H);
    return a ? vO(a) : !1
};
f.qg = function (a) {
    return this.j ? this.$.getCurrentTime(this.A) >= a : !1
};
f.yf = function (a) {
    this.j ? this.$.seekTo(a, !1) : this.D = a
};
f.getCurrentTime = function () {
    return this.j ? this.$.getCurrentTime(this.A) : -1
};
f.Wo = function () {
    return this.j && this.o ? this.$.getVideoLoadedFraction(this.A) * this.$.getDuration(this.A) : 0
};
f.ad = function () {
    return this.j && this.o ? this.$.getDuration(this.A) : -1
};
f.Fp = function () {
    return null
};
f.Xk = function () {
    return Pb(vJ)
};
f.Ee = function () {
    return this.j ? 0 == this.$.getPlayerState(this.A) : !1
};
f.bd = function () {
    var a = FK.j ? FK.o : document.getElementById(this.H);
    return a ? new H(a.offsetWidth, a.offsetHeight) : new H(0, 0)
};
f.Gp = function () {
    return !1
};
f.Ty = function () {
    var a = this.bd(), b = this.Hd();
    if (a.width != this.V.width || a.height != this.V.height)
        !this.R && b ? this.U("beginFullscreen") : this.R && !b && this.U("endFullscreen"), this.V = a, this.R = b
};
f.zi = function () {
    this.O = x(this.Rq, this);
    this.G = x(this.yl, this);
    this.ea && (this.$.addEventListener("onAdStateChange", this.G), this.$.addEventListener("onReady", this.O), this.$.addEventListener("onStateChange", this.G));
    this.K = new en(1E3);
    this.I.listen(this.K, "tick", this.Ty);
    this.K.start()
};
f.zf = function () {
    this.ea && (this.$.removeEventListener("onAdStateChange", this.G), this.$.removeEventListener("onReady", this.O), this.$.removeEventListener("onStateChange", this.G));
    null != this.K && this.K.dispose()
};
f.Hw = function () {
    var a = this.H, b = {
        playerVars: $b(NP),
        events: {
            onError: x(this.nB, this),
            onReady: x(this.Rq, this),
            onAdStateChange: x(this.yl, this),
            onStateChange: x(this.yl, this)
        }
    }, c = t("YT");
    this.$ = null != c && null != c.Player ? new c.Player(a, b) : null
};
function OP(a, b, c) {
    var d = {};
    if (null != a.k) {
        var e = a.k.k;
        null != e && (d.agcid = e);
        e = a.k.B;
        null != e && (d.adformat = e);
        (e = a.k.o) && (d.cta_conversion_urls = e);
        d.iv_load_policy = EK() && a.k.C ? 1 : 3;
        a.k.A && (d.noiba = 1);
        a.k.D && (d.utpsa = 1)
    }
    e = MO(b);
    null === e ? d.url_encoded_third_party_media = "url=" + encodeURIComponent(b) + "&type=" + encodeURIComponent(null === c ? "" : c) : d.videoId = e;
    a.o = !1;
    a.k && a.k.j ? (a.W = d, a.$.preloadVideoByPlayerVars(a.W)) : a.$.cueVideoByPlayerVars(d)
}
f.nB = function () {
    this.U("error")
};
f.Rq = function () {
    this.j = !0;
    -1 != this.C && (this.setVolume(this.C), this.C = -1);
    null != this.F && (OP(this, this.F, this.M), this.M = this.F = null);
    -1 != this.D && (this.yf(this.D), this.D = -1);
    this.P && this.play()
};
f.yl = function (a) {
    switch (a.data) {
        case 0:
            this.o ? this.U("end") : this.U("error");
            break;
        case 1:
            this.o || (PP(this), this.o = !0, this.U("start"));
            this.U("play");
            QP(this);
            this.B = new en(100);
            this.I.listen(this.B, "tick", this.Bq);
            this.B.start();
            break;
        case 2:
            this.U("pause"), QP(this)
    }
};
function QP(a) {
    a.I.Da(a.B, "tick", a.Bq);
    null != a.B && (a.B.stop(), a.B = null)
}
function PP(a) {
    null != a.ba && hn(a.ba)
}
f.Bq = function () {
    this.U("timeUpdate")
};
f.kB = function () {
    this.U("mediaLoadTimeout")
};
f.Ep = function (a, b) {
    this.j && this.$.addInfoCardXml(a, b)
};
f.qf = function () {
    if (!this.j)
        return null;
    var a = this.$.getVideoData();
    return a ? a.cpn : null
};
f.Pr = function (a) {
    this.j && MO(this.getVideoUrl()) && this.$.sendVideoStatsEngageEvent(a)
};
f.L = function () {
    QP(this);
    PP(this);
    this.zf();
    this.j = !1;
    this.I.dispose();
    this.D = -1;
    this.M = null;
    this.P = !1;
    this.F = null;
    this.C = -1;
    this.O = this.$ = this.k = null;
    this.o = !1;
    this.S = "";
    JP.J.L.call(this)
};
q("onYouTubeIframeAPIReady", function () {
    KP = !0;
    D(LP, function (a) {
        a()
    });
    nb(LP)
}, window);
function RP(a) {
    U.call(this);
    this.j = a || Va();
    this.k = []
}
inherit(RP, U);
RP.prototype.o = !1;
RP.prototype.connect = function () {
    for (this.o = !0; !mb(this.k);) {
        var a = this.k.shift();
        this.sendMessage(a.name, a.type, a.data)
    }
};
RP.prototype.send = function (a, b, c) {
    this.o ? this.sendMessage(a, b, c) : this.k.push({name: a, type: b, data: c})
};
function SP(a, b, c, d, e) {
    $l.call(this, a);
    this.jc = b;
    this.jd = c;
    this.xp = d;
    this.A = e
}
inherit(SP, $l);
SP.prototype.getOrigin = function () {
    return this.A
};
SP.prototype.toString = function () {
    return ""
};
function TP(a, b) {
    RP.call(this, b);
    this.A = a;
    this.Ac = null;
    this.B = new mn(this);
    this.logger = null;
    this.B.listen(Jd(), "message", this.receive)
}
inherit(TP, RP);
function UP(a) {
    if (null == a || !w(a) || !va(a, "ima://"))
        return null;
    a = a.substr(6);
    try {
        return jg(a)
    } catch (b) {
        return null
    }
}
TP.prototype.sendMessage = function (a, b, c) {
    null != this.Ac && null != this.Ac.postMessage && this.Ac.postMessage(VP(this, a, b, c), "*");
    null != this.Ac && null == this.Ac.postMessage && SK(RK.getInstance(), 11)
};
TP.prototype.L = function () {
    this.B.dispose();
    TP.J.L.call(this)
};
TP.prototype.receive = function (a) {
    a = a.j;
    var b = UP(a.data);
    if (null != b) {
        if (null == this.Ac)
            this.Ac = a.source;
        else if (this.Ac != a.source)
            return;
        var c = b.channel;
        null != c && c == this.A && (c = b.sid, null != c && ("*" != this.j && c != this.j || this.U(new SP(b.name, b.type, b.data || {}, b.sid, a.origin))))
    }
};
function VP(a, b, c, d) {
    var e = {};
    e.name = b;
    e.type = c;
    null != d && (e.data = d);
    e.sid = a.j;
    e.channel = a.A;
    return "ima://" + lg(e)
}

function WP(a, b) {
    U.call(this);
    this.A = a;
    this.o = b;
    this.j = {};
    this.k = new mn(this);
    this.k.listen(Jd(), "message", this.B)
}
inherit(WP, U);
WP.prototype.send = function (a) {
    var b = a.getChannelId();
    this.j.hasOwnProperty(b) ? this.j[b].send(a.type, a.jc, a.jd) : a.getChannelId()
};
function XP(a, b, c, d) {
    a.j.hasOwnProperty(b) || (c = new TP(b, c), a.k.listen(c, a.A, function (a) {
        a = new YP(a.type, a.jc, a.jd, a.xp, a.getOrigin(), b);
        this.U(a)
    }), c.Ac = d, c.connect(), a.j[b] = c)
}
WP.prototype.L = function () {
    this.k.dispose();
    for (var a in this.j)
        ti(this.j[a]);
    WP.J.L.call(this)
};
WP.prototype.B = function (a) {
    a = a.j;
    var b = UP(a.data);
    if (null != b) {
        var c = b.channel;
        if (this.o && !this.j.hasOwnProperty(c)) {
            var d = b.sid;
            XP(this, c, d, a.source);
            this.U(new YP(b.name, b.type, b.data || {}, d, a.origin, c))
        }
    }
};
function YP(a, b, c, d, e, g) {
    SP.call(this, a, b, c, d, e);
    this.o = g
}
inherit(YP, SP);
YP.prototype.getChannelId = function () {
    return this.o
};
function ZP() {
    var a = t("google.ima.gptProxyInstance", Jd());
    if (null != a)
        return a;
    mn.call(this);
    this.o = new WP("gpt", !0);
    S(this, this.o);
    this.listen(this.o, "gpt", this.C);
    this.j = null;
    $P() || Jd().top === Jd() || (this.j = new WP("gpt", !1), S(this, this.j), this.listen(this.j, "gpt", this.B))
}
inherit(ZP, mn);
function $P() {
    return !!t("googletag.cmd", Jd())
}
function aQ() {
    var a = t("googletag.console", Jd());
    return null != a ? a : null
}
ZP.prototype.C = function (a) {
    var b = a.getOrigin(), c = Fe("//imasdk.googleapis.com"), b = Fe(b);
    if (c[3] == b[3] && c[4] == b[4])
        if (null != this.j)
            XP(this.j, a.getChannelId(), a.xp, Jd().parent), null != this.j && this.j.send(a);
        else if (c = a.jd, null != c && n(c.scope)) {
            var b = c.scope, c = c.args, d;
            if ("proxy" == b)
                c = a.jc, "isGptPresent" == c ? d = $P() : "isConsolePresent" == c && (d = null != aQ());
            else if ($P())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.jc;
                    var e, g = Jd().googletag;
                    if (null != g && null != g[b] && (g = g[b](), null != g && (d = g[d], null != d)))
                        try {
                            e = d.apply(g,
                                c)
                        } catch (h) {
                        }
                    d = e
                } else if ("console" == b) {
                    if (g = a.jc, e = aQ(), null != e && (g = e[g], null != g))
                        try {
                            g.apply(e, c)
                        } catch (k) {
                        }
                } else if (null === b) {
                    e = a.jc;
                    d = Jd();
                    if (G(["googleGetCompanionAdSlots", "googleSetCompanionAdContents"], e) && (e = d[e], null != e))
                        try {
                            g = e.apply(d, c)
                        } catch (l) {
                        }
                    d = g
                }
            n(d) && (a.jd.returnValue = d, this.o.send(a))
        }
};
ZP.prototype.B = function (a) {
    this.o.send(a)
};
function bQ(a, b, c, d, e, g, h, k) {
    this.B = a;
    this.k = b;
    this.o = c;
    this.A = h;
    this.C = d;
    this.D = e;
    this.vb = g;
    this.j = k
}

function cQ(a, b) {
    var c = Array.prototype.slice.call(arguments), d = c.shift();
    if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, k, l, p, r, u) {
        if ("%" == p)
            return "%";
        var C = c.shift();
        if ("undefined" == typeof C)
            throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = C;
        return dQ[p].apply(null, arguments)
    })
}
var dQ = {
    s: function (a, b, c) {
        return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Pa(" ", c - a.length) : Pa(" ", c - a.length) + a
    }, f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = a.toFixed(e));
        var g;
        g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
        0 <= a && (d = g + d);
        if (isNaN(c) || d.length >= c)
            return d;
        d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
        a = c - d.length - g.length;
        return d = 0 <= b.indexOf("-", 0) ? g + d + Pa(" ", a) : g + Pa(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
    }, d: function (a, b, c, d, e, g, h, k) {
        return dQ.f(parseInt(a,
            10), b, c, d, 0, g, h, k)
    }
};
dQ.i = dQ.d;
dQ.u = dQ.d;
function eQ(a, b) {
    U.call(this);
    this.A = new mn(this);
    this.F = !1;
    this.G = Va();
    this.C = new ue;
    var c = this.G, c = I("iframe", {
        src: ("https:" == document.location.protocol ? "https:" : "http:") + cQ("//imasdk.googleapis.com/js/core/bridge0.0.0_%s.html", "en") + "#" + c,
        style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
    });
    qn(this.A, c, "load", this.Vw);
    a.appendChild(c);
    this.k = c;
    c = this.C.get("*");
    null == c && (c = new TP(this.G, "*"), this.F && (c.Ac = $d(this.k), c.connect()), this.C.set("*", c));
    this.B = c;
    this.D = b;
    this.j = this.D.o;
    this.o = null;
    this.A.listen(this.B, "mouse", this.Mx);
    this.A.listen(this.B, "touch", this.ly);
    null != this.j && (this.A.listen(this.B, "displayContainer", this.Ax), this.A.listen(this.B, "videoDisplay", this.iy), this.A.listen(this.j, Pb(RO), this.iC));
    var c = Jd(), d = t("google.ima.gptProxyInstance", c);
    null == d && (d = new ZP, q("google.ima.gptProxyInstance", d, c))
}
inherit(eQ, U);
f = eQ.prototype;
f.L = function () {
    this.A.dispose();
    null !== this.o && (this.o.dispose(), this.o = null);
    se(this.C.Wb(!1), function (a) {
        a.dispose()
    });
    this.C.clear();
    Sd(this.k);
    eQ.J.L.call(this)
};
f.Mx = function (a) {
    var b = a.jd, c = Ng(this.k), d = document.createEvent("MouseEvent");
    d.initMouseEvent(a.jc, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
    if (!Uh || MK() || 0 == document.webkitIsFullScreen)
        this.k.blur(), window.focus();
    this.k.dispatchEvent(d)
};
function fQ(a, b) {
    var c = Ng(a.k), d = E(b, function (a) {
        return document.createTouch(window, this.k, a.identifier, a.pageX + c.x, a.pageY + c.y, a.screenX, a.screenY)
    }, a);
    return document.createTouchList.apply(document, d)
}
f.ly = function (a) {
    var b = a.jd, c = Ng(this.k), d = document.createEvent("TouchEvent");
    d.initTouchEvent(a.jc, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, fQ(this, b.touches), fQ(this, b.targetTouches), fQ(this, b.changedTouches), b.scale, b.rotation);
    this.k.dispatchEvent(d)
};
f.iy = function (a) {
    if (null != this.j) {
        var b = a.jd;
        switch (a.jc) {
            case "startTracking":
                this.j.zi();
                break;
            case "stopTracking":
                this.j.zf();
                break;
            case "exitFullscreen":
                this.j.Qk();
                break;
            case "play":
                this.j.play();
                break;
            case "pause":
                this.j.pause();
                break;
            case "load":
                this.j.load(b.videoUrl, b.mimeType);
                break;
            case "setCurrentTime":
                this.j.yf(b.currentTime);
                break;
            case "setPlaybackOptions":
                a = b.playbackOptions, this.j.Hm(new bQ(a.adFormat, a.adSenseAgcid, a.ctaAnnotationTrackingEvents, a.showAnnotations, a.viewCountsDisabled,
                    a.loadVideoTimeout, a.ibaDisabled, a.enablePreloading))
        }
    }
};
f.iC = function (a) {
    var b = {};
    switch (a.type) {
        case "beginFullscreen":
            a = "fullscreen";
            break;
        case "endFullscreen":
            a = "exitFullscreen";
            break;
        case "click":
            a = "click";
            break;
        case "end":
            a = "end";
            break;
        case "error":
            a = "error";
            break;
        case "mediaLoadTimeout":
            a = "mediaLoadTimeout";
            break;
        case "pause":
            a = "pause";
            b.ended = this.j.Ee();
            break;
        case "play":
            a = "play";
            break;
        case "skip":
            a = "skip";
            break;
        case "start":
            a = "start";
            break;
        case "timeUpdate":
            a = "timeupdate";
            b.currentTime = this.j.getCurrentTime();
            b.duration = this.j.ad();
            break;
        case "volumeChange":
            a =
                "volumeChange";
            b.volume = this.j.ed();
            break;
        default:
            return
    }
    this.B.send("videoDisplay", a, b)
};
f.Ax = function (a) {
    switch (a.jc) {
        case "showVideo":
            null != this.o ? IO(this.o) : (this.o = new FO, this.A.listen(this.o, "click", this.eC));
            GO(this.o, gQ(this.D));
            a = this.D;
            null != a.j && a.j.show();
            break;
        case "hide":
            null !== this.o && (this.o.dispose(), this.o = null), this.D.hide()
    }
};
f.eC = function () {
    this.B.send("displayContainer", "videoClick")
};
f.Vw = function () {
    se(this.C.Wb(!1), function (a) {
        a.Ac = $d(this.k);
        a.connect()
    }, this);
    this.F = !0
};
function hQ(a, b, c, d) {
    if (null == a || !Zd(zd(a), a))
        throw vK(TJ, null, "containerElement", "element");
    this.A = a;
    var e = null != b || null != d, g = e, h = !1;
    FK.j || (MK() || id || Na(Uc, "CrKey") || PK() || Na(Uc, "Roku") || OK() || Na(Uc, "Xbox")) && e || (KK() || Na(Uc, "CrKey") || PK() || Na(Uc, "Roku") || OK() || Na(Uc, "Xbox") || (h = !0), g = !1);
    this.C = g;
    this.F = h || g && null != d;
    FK.j ? a = null : (e = I("div", {style: "position:absolute"}), a
.
    insertBefore(e, a.firstChild), a = e
)
    ;
    this.k = a;
    this.j = !this.C && this.k && !FK.j && KK() ? new IP(this.k, null, !0) : null;
    a = null;
    this.C ? b ? a = new SO(b) :
    d && (a = new JP(d)) : this.j && (a = new SO(this.j.k));
    this.B = (this.o = a) ? c || null : null;
    this.G = null != this.B;
    SK(RK.getInstance(), 8, {enabled: this.C, yt: null != d, customClick: null != this.B});
    FK.j && (b = this.A, FK.o = b);
    this.D = null == this.k || FK.j ? null : new eQ(this.k, this)
}
hQ.prototype.initialize = function () {
    null != this.j && this.j.initialize()
};
hQ.prototype.destroy = function () {
    ti(this.j);
    ti(this.D);
    ti(this.o);
    Sd(this.k)
};
hQ.prototype.hide = function () {
    null != this.j && this.j.hide()
};
function gQ(a) {
    return a.G && a.B ? a.B : null != a.j ? a.j.o : null
}

function iQ(a, b, c, d, e, g) {
    var h = [];
    h.push(b || "");
    h.push(c || "");
    h.push(d || "");
    h.push(e || "");
    c = b = "";
    if (null != g) {
        b = [];
        c = 0;
        for (d = g; d && 25 > c; d = d.parentNode, ++c)
            b.push(9 != d.nodeType && d.id || "");
        b = b.join();
        t: {
            if (g && g.nodeName && g.parentElement) {
                c = g.nodeName.toLowerCase();
                d = g.parentElement.childNodes;
                for (var k = e = 0; k < d.length; ++k) {
                    var l = d[k];
                    if (l.nodeName && l.nodeName.toLowerCase() == c) {
                        if (g == l) {
                            c = "." + e;
                            break t
                        }
                        ++e
                    }
                }
            }
            c = ""
        }
    }
    h.push(b, c);
    if (null != a)
        h.push(Ve(a, "ad_type") || ""), h.push(Ve(a, "videoad_start_delay") || ""),
            h.push(Ve(a, "sz") || ""), h.push(Ve(a, "vpos") || ""), h.push(Ve(a, "mridx") || ""), h.push(Ve(a, "vad_type") || "");
    else
        for (a = 0; 8 > a; ++a)
            h.push("");
    h.join(":");
    h = h.join(":");
    a = h.length;
    if (0 == a)
        h = 0;
    else {
        g = 305419896;
        for (b = 0; b < a; b++)
            g ^= (g << 5) + (g >> 2) + h.charCodeAt(b) & 4294967295;
        h = 0 < g ? g : 4294967296 + g
    }
    return h.toString()
}

function jQ() {
    U.call(this);
    this.currentTime = 0
}
inherit(jQ, U);
function kQ(a) {
    jQ.call(this);
    this.currentTime = a.currentTime;
    if (!("currentTime" in a) || isNaN(a.currentTime))
        throw vK(TJ, null, "content", "currentTime");
    this.k = a;
    this.j = new en(250);
    this.o = new mn(this);
    pn(this.o, this.j, "tick", this.A, this)
}
inherit(kQ, jQ);
kQ.prototype.start = function () {
    this.j.start()
};
kQ.prototype.stop = function () {
    this.j.stop()
};
kQ.prototype.L = function () {
    kQ.J.L.call(this);
    this.o.dispose();
    this.j.dispose()
};
kQ.prototype.A = function () {
    if ("currentTime" in this.k && !isNaN(this.k.currentTime)) {
        var a = this.currentTime;
        this.currentTime = this.k.currentTime;
        a != this.currentTime && this.U(new $l("currentTimeUpdate"))
    } else
        this.U(new $l("contentWrapperError")), this.stop()
};
function lQ() {
    this.j = 0;
    this.k = null
}

var mQ;
mQ = {
    B: ["BC", "AD"],
    A: ["Before Christ", "Anno Domini"],
    D: "JFMAMJJASOND".split(""),
    P: "JFMAMJJASOND".split(""),
    C: "January February March April May June July August September October November December".split(" "),
    M: "January February March April May June July August September October November December".split(" "),
    H: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    S: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    V: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    X: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    K: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    R: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    F: "SMTWTFS".split(""),
    O: "SMTWTFS".split(""),
    I: ["Q1", "Q2", "Q3", "Q4"],
    G: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    j: ["AM", "PM"],
    k: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    Ga: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    o: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    dv: 6,
    Ua: [5, 6],
    ev: 5
};
function nQ(a, b, c, d, e, g) {
    w(a) ? (this.o = "y" == a ? b : 0, this.k = "m" == a ? b : 0, this.j = "d" == a ? b : 0, this.A = "h" == a ? b : 0, this.B = "n" == a ? b : 0, this.C = "s" == a ? b : 0) : (this.o = a || 0, this.k = b || 0, this.j = c || 0, this.A = d || 0, this.B = e || 0, this.C = g || 0)
}
nQ.prototype.equals = function (a) {
    return a.o == this.o && a.k == this.k && a.j == this.j && a.A == this.A && a.B == this.B && a.C == this.C
};
nQ.prototype.clone = function () {
    return new nQ(this.o, this.k, this.j, this.A, this.B, this.C)
};
nQ.prototype.add = function (a) {
    this.o += a.o;
    this.k += a.k;
    this.j += a.j;
    this.A += a.A;
    this.B += a.B;
    this.C += a.C
};
function oQ(a, b, c) {
    ha(a) ? (this.date = pQ(a, b || 0, c || 1), qQ(this, c || 1)) : ja(a) ? (this.date = pQ(a.getFullYear(), a.getMonth(), a.getDate()), qQ(this, a.getDate())) : (this.date = new Date(y()), this.date.setHours(0), this.date.setMinutes(0), this.date.setSeconds(0), this.date.setMilliseconds(0))
}
function pQ(a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b
}
f = oQ.prototype;
f.So = mQ.dv;
f.To = mQ.ev;
f.clone = function () {
    var a = new oQ(this.date);
    a.So = this.So;
    a.To = this.To;
    return a
};
f.getFullYear = function () {
    return this.date.getFullYear()
};
f.getMonth = function () {
    return this.date.getMonth()
};
f.getDate = function () {
    return this.date.getDate()
};
f.getTime = function () {
    return this.date.getTime()
};
f.set = function (a) {
    this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
f.add = function (a) {
    if (a.o || a.k) {
        var b = this.getMonth() + a.k + 12 * a.o, c = this.getFullYear() + Math.floor(b / 12), b = b % 12;
        0 > b && (b += 12);
        var d;
        t: {
            switch (b) {
                case 1:
                    d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                    break t;
                case 5:
                case 8:
                case 10:
                case 3:
                    d = 30;
                    break t
            }
            d = 31
        }
        d = Math.min(d, this.getDate());
        this.date.setDate(1);
        this.date.setFullYear(c);
        this.date.setMonth(b);
        this.date.setDate(d)
    }
    a.j && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.j), this.date.setDate(1), this.date.setFullYear(a.getFullYear()),
        this.date.setMonth(a.getMonth()), this.date.setDate(a.getDate()), qQ(this, a.getDate()))
};
f.equals = function (a) {
    return !(!a || this.getFullYear() != a.getFullYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
};
f.toString = function () {
    return [this.getFullYear(), Qa(this.getMonth() + 1), Qa(this.getDate())].join("") + ""
};
function qQ(a, b) {
    a.getDate() != b && a.date.setUTCHours(a.date.getUTCHours() + (a.getDate() < b ? 1 : -1))
}
f.valueOf = function () {
    return this.date.valueOf()
};
function rQ() {
    this.k = this.j = null
}

function sQ() {
    this.j = tQ();
    this.G = -1;
    this.K = this.M = this.o = this.F = this.A = null;
    this.C = tQ();
    this.k = null;
    this.O = this.H = this.I = "";
    this.D = this.P = this.B = null
}
function tQ() {
    return Math.floor(4503599627370496 * Math.random())
}
var uQ = new sQ;
sQ.prototype.clear = function () {
    this.j = tQ();
    this.o = this.F = this.A = null;
    this.C = tQ();
    this.k = null;
    this.O = this.H = this.I = "";
    this.D = this.P = this.B = null
};
function vQ(a) {
    if (FK.j)
        return "h.3.0.0";
    var b = "h." + a.O;
    null != a.B && (b += "/n." + a.B, null != a.A && (b += "/" + a.A));
    return b
}

function wQ(a, b) {
    this.C = a;
    this.B = E(b, function (a) {
        return a.clone()
    });
    this.A = "";
    this.j = this.o = 0;
    this.k = !0
}
function xQ(a) {
    a.A = "";
    a.o = 0;
    a.j = 0;
    a.k = !0
}
wQ.prototype.getContent = function () {
    return this.A
};
wQ.prototype.clone = function () {
    var a = new wQ(this.C, this.B), b = this.o, c = this.j, d = this.k;
    a.A = this.A;
    a.o = b;
    a.j = c;
    a.k = d;
    return a
};
function yQ() {
    U.call(this);
    this.A = !1;
    this.impressionUrls = []
}
inherit(yQ, U);
function zQ(a) {
    $l.call(this, a)
}
inherit(zQ, $l);
function AQ() {
    yQ.call(this);
    this.F = [];
    this.B = !1;
    this.o = "not_loaded";
    this.k = null;
    this.C = 0;
    this.j = null;
    this.G = new yd
}
inherit(AQ, yQ);
ba(AQ);
function BQ(a) {
    var b = ["googletag", "googletag.cmd"];
    return F(a, function (a) {
            return ib(b, function (b) {
                return !da(t(b, a))
            })
        }) || null
}
f = AQ.prototype;
f.L = function () {
    this.k && this.k.dispose()
};
f.initialize = function () {
    if (!this.A) {
        var a;
        var b = ne(new yd);
        try {
            t("googletag"), BQ([b, b.top]), a = !0
        } catch (c) {
            a = !1
        }
        a ? CQ(this) : (this.A = !0, this.o = "not_available")
    }
};
function DQ(a) {
    return a.A ? E(a.F, function (a) {
        return a.clone()
    }) : []
}
function EQ(a) {
    a = DQ(a);
    return null != a ? E(a, function (a) {
        return a.B
    }) : void 0
}
function FQ(a, b, c) {
    var d = 0, e = 0;
    null != b && (b = new J(b.adTagUrl), d = Number(qf(b, "pod") || 0), e = Number(qf(b, "ppos") || 0));
    if (null != a.setVideoSession)
        try {
            a.setVideoSession(uQ.j, d, e, c)
        } catch (g) {
        }
}
function GQ(a, b) {
    var c = HQ(a);
    if (null !== c) {
        FQ(c, b, !0);
        try {
            c.refreshAllSlots()
        } catch (d) {
        }
    }
}
f.setVideoContent = function (a, b) {
    var c = IQ(this);
    if (null != c)
        try {
            c.setVideoContent(a, b)
        } catch (d) {
        }
};
function JQ(a, b) {
    a.D = b;
    a.setVideoContent("", "");
    var c = HQ(a);
    FQ(c, null, !1)
}
function HQ(a) {
    null == a.j && KQ(a);
    return null != a.j && null != a.j.googletag && null != a.j.googletag.companionAds ? a.j.googletag.companionAds() : null
}
function IQ(a) {
    null == a.j && KQ(a);
    return null != a.j && null != a.j.googletag && null != a.j.googletag.pubads ? a.j.googletag.pubads() : null
}
f.Tq = function () {
    0 < this.C && y() >= this.C ? (this.A = !0, LQ(this), MQ(this)) : CQ(this)
};
function LQ(a) {
    a.k && (a.k.stop(), a.k.Da("tick", a.Tq, !1, a), a.k.dispose(), a.k = null)
}
function CQ(a) {
    var b;
    if (b = !a.B)
        KQ(a), b = null != a.j && null != a.j.googleGetCompanionAdSlots;
    if (b) {
        var c;
        try {
            if (null == a.j)
                a.B = !0, c = [];
            else {
                var d = a.j.googleGetCompanionAdSlots();
                c = E(d, a.XC, a)
            }
        } catch (e) {
            a.B = !0, c = []
        }
        a.F = c;
        a.B = !0
    }
    if ("retrieved" != a.o && "not_available" != a.o && !da(HQ(a))) {
        var g;
        b = HQ(a);
        if (null !== b && null != b.getDisplayAdsCorrelator)
            try {
                g = b.getDisplayAdsCorrelator()
            } catch (h) {
                g = null
            }
        else
            g = null;
        switch (g) {
            case "not_loaded":
            case "not_available":
                a.o = g;
                break;
            default:
                g = Number(g), isNaN(g) ? a.o = "not_available" :
                    (a.D = g, a.o = "retrieved")
        }
    }
    a.B && "retrieved" == a.o ? (a.A = !0, LQ(a), a.U(new zQ("companions_success"))) : a.B && "not_available" == a.o ? (a.A = !0, LQ(a), MQ(a)) : a.k || (a.C = y() + 5E3, a.k = new en(100), a.k.listen("tick", a.Tq, !1, a), a.k.start())
}
function KQ(a) {
    var b = ne(a.G);
    try {
        a.j = BQ([b, b.top])
    } catch (c) {
        a.j = null
    }
}
function MQ(a) {
    a.U(new zQ("companion_initialization_failed"))
}
f.XC = function (a) {
    var b = E(a.adSizes, function (a) {
        return new H(a.adWidth, a.adHeight)
    });
    return new wQ(a.slotId, b)
};
f.jw = function (a) {
    var b = {};
    b.slotId = a.C;
    b.adContent = a.getContent();
    b.adWidth = a.o;
    b.adHeight = a.j;
    b.friendlyIframeRendering = a.k;
    return b
};
f.sendImpressionUrls = function (a) {
    JJ(this.impressionUrls, a)
};
function NQ(a) {
    $l.call(this, a)
}
inherit(NQ, $l);
function OQ() {
    U.call(this);
    this.o = []
}
inherit(OQ, U);
OQ.prototype.lo = function () {
    return !0
};
function PQ() {
    return new QQ("empty-ad", "GDFP", "GDFP", "", 0, 0, 0, [], [], [], [], new ue)
}
OQ.prototype.se = function () {
    return null
};
function RQ(a) {
    OQ.call(this);
    this.j = a;
    this.C = null;
    this.D = !1;
    this.k = null;
    this.B = new mn;
    pn(this.B, this.j, ["companions_success", "companion_initialization_failed"], this.DB, this);
    pn(this.B, this.j, "companion_display_error", this.kA, this);
    this.j.A ? this.D = !0 : this.j.initialize()
}
inherit(RQ, OQ);
f = RQ.prototype;
f.destroy = function () {
    null != this.B && this.B.dispose();
    this.k = null
};
function SQ(a, b) {
    a.k = b;
    a.A = !0;
    a.D ? TQ(a) : (a.A = UQ(VQ(b), []), a.A || (a.k = null))
}
function TQ(a) {
    var b = a.k;
    a.k = null;
    if (null != a.j)
        if (mb(a.o))
            WQ(a);
        else if (null != b) {
            var c = XQ(a, b), d = a.j;
            try {
                d.j.googleSetCompanionAdContents(E(a.o, d.jw, d)), d.sendImpressionUrls()
            } catch (e) {
                d.U(new zQ("companion_display_error"))
            }
            if (0 < c.length && b.ga && (d = a.j, 0 != c.length && "GDFP" == YQ(b)[0])) {
                a = [];
                for (var g = 0; g < c.length; g++)
                    a.push(c[g].C);
                b = b.o;
                c = HQ(d);
                if (null !== c) {
                    FQ(c, b, !1);
                    try {
                        c.notifyUnfilledSlots(a)
                    } catch (h) {
                    }
                }
            }
        } else
            WQ(a)
}
function WQ(a) {
    a.U(new NQ("companion_display_error"))
}
f.lo = function () {
    return this.A
};
f.DB = function () {
    null != this.C && (this.C.stop(), this.C.dispose(), this.C = null);
    if (null != this.j) {
        var a = DQ(this.j);
        null != a && (this.o = a)
    }
    this.D = !0;
    null != this.k && TQ(this);
    this.U(new $l("initialized"))
};
f.kA = function () {
    WQ(this)
};
function XQ(a, b) {
    var c = [], d = [];
    D(a.o, function (a) {
        xQ(a);
        hb(a.B, function (d) {
            t: {
                var e = ZQ(b);
                d = $Q(new aR(new H(d.width, d.height)), e);
                if (!mb(d) && (d = bR(d, c), null != d)) {
                    e = d.o;
                    if (null != e && 0 != a.C.indexOf(e)) {
                        d = !1;
                        break t
                    }
                    c.push(d);
                    var e = d.getContent(), l = d.j.fd(), p = d.getHeight();
                    d = "IFrame" != d.j.R;
                    a.A = e;
                    a.o = l;
                    a.j = p;
                    a.k = d;
                    d = !0;
                    break t
                }
                d = !1
            }
            return d
        }, this) || d.push(a)
    }, a);
    var e = VQ(b);
    a.A = UQ(e, c);
    a.A || D(a.o, function (a) {
        xQ(a)
    }, a);
    return d
}
function UQ(a, b) {
    if (null == a)
        return !0;
    var c = a.j;
    return "all" == a.k ? cR(c, b) : "any" == a.k ? dR(c, b) : !0
}
function VQ(a) {
    return null == a || null == a.j || isNaN(a.j.j) ? null : F(eR(a, !0), function (a) {
        a = a.j;
        return mb(a) ? !1 : isNaN(a[0].j.j) ? !1 : a[0].j.j == fR(a[0])
    })
}
function cR(a, b) {
    return ib(a, function (a) {
        return G(b, a)
    })
}
function dR(a, b) {
    return hb(a, function (a) {
        return G(b, a)
    })
}
function bR(a, b) {
    return F(a, function (a) {
        return !G(b, a)
    })
}
f.se = function () {
    return this.j
};
function gR(a) {
    $l.call(this, a);
    this.C = [];
    this.B = {};
    this.o = null;
    this.A = !0
}
inherit(gR, $l);
function hR() {
    this.k = new ue;
    this.j = .01 > Math.random() && !EK();
    this.o = 0
}
ba(hR);
hR.prototype.start = function (a) {
    this.j && this.k.set(a, y())
};
hR.prototype.end = function (a, b) {
    if (this.j && we(this.k, a)) {
        var c = y() - this.k.get(a), d = iR(this, a, c, b);
        GJ(d);
        this.k.remove(a);
        this.o += c
    }
};
function iR(a, b, c, d) {
    d = d || {};
    var e = new J("https://csi.gstatic.com/csi?v=2&s=ima_sdk&action=html5");
    d.it = b + "." + c;
    d.sdkv = vQ(uQ);
    Ib(d, function (a, b) {
        K(e, b, a)
    }, a);
    return e.toString()
}

function jR(a, b, c) {
    this.C = b;
    this.A = c;
    this.B = null;
    this.k = new mn(this);
    this.H = a;
    this.o = this.j = null;
    this.D = !1
}
jR.prototype.start = function (a, b) {
    this.B = a;
    this.G = b;
    kR(this);
    this.C.D ? this.F() : sn(this.k, this.C, "initialized", this.F, this)
};
jR.prototype.F = function () {
    var a = this.C.se(), b;
    b = a.A ? "retrieved" != a.o ? void 0 : a.D : void 0;
    a = EQ(a);
    null != b && (this.A.C = b);
    null != a && (this.A.D = a);
    lR(this)
};
function lR(a) {
    if (null === a.B)
        mR(a);
    else {
        var b = new J(a.B.adTagUrl), c = B(qf(b, "vid")), b = B(qf(b, "cmsid")), d = a.A.I, e = a.A.H;
        a.A.I = c;
        a.A.H = b;
        if (A(B(c)) || A(B(b)))
            mR(a);
        else if (c == d && b == e)
            mR(a);
        else {
            var g = a.C.se();
            g.setVideoContent(c, b);
            GQ(g, a.B);
            a.o = new en(100);
            pn(a.k, a.o, "tick", function () {
                var a;
                t: {
                    var b = IQ(g);
                    if (null != b)
                        try {
                            a = !1 !== b.isAdRequestFinished();
                            break t
                        } catch (c) {
                            a = !0;
                            break t
                        }
                    a = !1
                }
                a && mR(this)
            }, a);
            a.o.start()
        }
    }
}
function kR(a) {
    a.j = new en;
    sn(a.k, a.j, "tick", function () {
        mR(this)
    }, a);
    fn(a.j, a.H);
    a.j.start()
}
function mR(a) {
    null != a.k && (a.k.dispose(), a.k = null);
    null != a.j && (a.j.stop(), a.j = null);
    null != a.o && (a.o.stop(), a.o = null);
    a.D = !0;
    null === a.G || a.G()
}

function nR() {
    U.call(this);
    this.j = new ue;
    this.k = null;
    this.C = new mn(this);
    S(this, this.C);
    this.B = "";
    this.o = null
}
inherit(nR, U);
var oR = null;
function pR() {
    null != oR || (oR = new nR);
    return oR
}
function qR(a, b) {
    a.o = b
}
function rR(a, b) {
    if (a.k) {
        var c = a.j, d = window.setTimeout(function () {
            b("");
            D(c.Ha(), function (a) {
                c.get(a) === b && c.remove(a)
            })
        }, 200);
        a.j.set(d, b);
        var e = {};
        a.A && (e.isFullscreen = a.A.Hd());
        e.osdId = a.B;
        e.eventId = d;
        a.k.send("activityMonitor", "fetchAdTagUrl", e)
    } else
        b("")
}
function sR(a, b, c, d) {
    if (a.k) {
        var e = a.j, g = window.setTimeout(function () {
            d("");
            D(e.Ha(), function (a) {
                e.get(a) === d && e.remove(a)
            })
        }, 200);
        a.j.set(g, d);
        var h = {};
        a.A && (h.isFullscreen = a.A.Hd());
        a.B && (h.osdId = a.B);
        h.queryId = c;
        h.eventId = g;
        h.vastEvent = b;
        h.isOverlay = null != a.o;
        h.isOverlay && (h.overlayBounds = wO(a.o));
        a.k.send("activityMonitor", "reportVastEvent", h)
    } else
        d("")
}
nR.prototype.destroy = function () {
    this.C.Da(this.k, "activityMonitor", this.D);
    this.k = null
};
nR.prototype.D = function (a) {
    var b = a.jd, c = b.engagementString;
    switch (a.jc) {
        case "measurableImpression":
            c = {};
            c.queryId = b.queryId;
            pR().U(new hJ("measurable_impression", null, c));
            break;
        case "viewableImpression":
            c = b.viewabilityString;
            a = {};
            a.queryId = b.queryId;
            a.viewabilityString = c;
            pR().U(new hJ("viewable_impression", null, a));
            break;
        case "viewability":
            a = b.eventId;
            window.clearTimeout(a);
            var d = this.j.get(a);
            d && (this.j.remove(a), d(b.viewabilityString, c));
            break;
        case "engagement":
            if (a = b.eventId, window.clearTimeout(a),
                    d = this.j.get(a))
                this.j.remove(a), d(c)
    }
};
q("ima.bridge.getNativeViewability", function (a, b) {
    pR();
    b({})
}, void 0);
function tR() {
}

function uR(a) {
    return tK(lK, null, a.parentNode.nodeName, a.nodeName)
}
function vR(a) {
    return tK(aK, null, a.parentNode.nodeName, a.nodeName)
}
function wR(a, b) {
    return null != a ? fb(Ud(a), function (a) {
        return a.nodeName == b
    }) : []
}
function xR(a, b) {
    var c = a.getAttribute(b);
    return null != c ? c.toLowerCase() : null
}
function yR(a, b) {
    if (null == a)
        return null;
    var c = "";
    D(a.childNodes, function (a) {
        if (4 == a.nodeType || 3 == a.nodeType)
            c += a.nodeValue
    });
    c = xa(c);
    return b ? Ia(c) : c
}
function zR(a, b, c, d) {
    null != a && D(Ud(a), function (a) {
        if (a.nodeName == b)
            c.call(d, a);
        else
            throw uR(a);
    })
}
function AR(a) {
    return A(B(a)) ? NaN : Wa(B(a))
}
function BR(a, b) {
    if (null != a) {
        var c = a.split(":");
        if (3 == c.length)
            return c = new nQ(0, 0, 0, Wa(c[0]), Wa(c[1]), Wa(c[2])), 60 * (60 * (24 * c.j + c.A) + c.B) + c.C
    }
    return null != b ? b : -1
}
function CR(a, b) {
    if (!A(B(a)))
        switch (a.toLowerCase()) {
            case "true":
            case "1":
                return !0;
            case "false":
            case "0":
                return !1
        }
    return null != b ? b : !1
}

function DR(a, b, c) {
    this.k = a;
    this.j = c;
    this.o = b
}

function ER(a) {
    this.o = a
}

function FR(a) {
    this.o = a;
    this.k = this.j = !1
}
inherit(FR, ER);
function GR(a, b, c) {
    this.j = a;
    this.k = b;
    this.o = c
}

function HR() {
    this.j = new ue
}
function IR(a, b, c) {
    if (isNaN(c))
        throw Error("Incorrect time offset.");
    var d = [];
    we(a.j, c) && (d = a.j.get(c, []));
    D(b, function (a) {
        null != a && ob(d, a)
    });
    a.j.set(c, d)
}

function JR(a, b) {
    this.j = a;
    this.k = b
}
inherit(JR, tR);
JR.prototype.o = function () {
    return new DR(this.j, null, KR(this))
};
function KR(a) {
    var b = new HR;
    D(Ud(Vd(a.j)), function (a) {
        switch (a.nodeName) {
            case "Preroll":
                a = LR(this, a);
                IR(b, a, 0);
                break;
            case "Midroll":
                var d = xR(a, "timeOffset"), e = BR(d);
                if (-1 == e)
                    throw tK(NJ, null, "timeOffset", B(d));
                a = LR(this, a);
                IR(b, a, e);
                break;
            case "Postroll":
                a = LR(this, a);
                IR(b, a, -1);
                break;
            default:
                throw tK(XJ, null, a.parentNode.nodeName, a.nodeName);
        }
    }, a);
    if (0 == b.j.Ha().length)
        throw tK(WJ);
    return b
}
function LR(a, b) {
    var c = [];
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case "Ad":
                var b = B(yR(a));
                if (!A(b)) {
                    a = xR(a, "bumper");
                    var g = this.k.clone();
                    g.adTagUrl = b;
                    b = new FR(g);
                    b.j = null != a;
                    b.k = "always" == a;
                    ob(c, b)
                }
                break;
            default:
                throw tK(XJ, null, a.parentNode.nodeName, a.nodeName);
        }
    }, a);
    return c
}

function MR(a) {
    a = 0 > a ? 0 : Math.round(a);
    return 3600 <= a ? "" + Math.floor(a / 3600) + ":" + ("0" + Math.floor(a / 60) % 60).slice(-2) + ":" + ("0" + a % 60).slice(-2) : "" + Math.floor(a / 60) % 60 + ":" + ("0" + a % 60).slice(-2)
}
function NR(a) {
    var b = {};
    D(a.split(","), function (a) {
        var d = a.split("=");
        2 == d.length && (a = xa(d[0]), d = xa(d[1]), 0 < a.length && (b[a] = d))
    });
    return b
}

var OR = ["ai", "sigh"];
function PR(a, b) {
    if (b)
        return a;
    var c;
    c = null != a && /(doubleclick.net|googleadservices.com)/.test(a) ? -1 != a.indexOf("/pagead/adview") ? QR(a) ? 0 : 2 : -1 != a.indexOf("/pagead/conversion") ? QR(a) ? 1 : 2 : 2 : 2;
    if (0 == c || 1 == c) {
        c = "&sdkv=" + vQ(uQ);
        var d = a.indexOf("&adurl=");
        c = -1 != d ? Ra(a.substr(0, d), c, a.substr(d, a.length)) : a + c
    } else
        c = a;
    return c
}
function QR(a) {
    return ib(OR, function (b) {
        var c = a || "";
        return 0 <= Se(c, 0, b, c.search(Te))
    })
}

function RR(a, b) {
    this.j = a;
    this.k = b
}
function SR(a) {
    return a.k ? -1 : a.j
}
function TR(a, b) {
    a.k && (a.k = !1, a.j = a.j * b / 100)
}

function UR() {
    this.j = new ue
}
function VR(a, b) {
    this.o = a;
    this.j = b
}
function WR(a, b) {
    VR.call(this, "progress", a);
    this.k = b
}
inherit(WR, VR);
function XR(a, b) {
    D(b, function (a) {
        var b = a.o.toLowerCase(), e = YR(this, b);
        e.push(a);
        this.j.set(b, e)
    }, a)
}
function ZR(a, b, c, d) {
    b = b.toLowerCase();
    var e = YR(a, b);
    null != d ? (d = new WR(c, d), null != d ? e.push(d) : e.push(new VR(b, c))
) :
    e.push(new VR(b, c));
    a.j.set(b, e)
}
function YR(a, b) {
    return null != b ? a.j.get(b.toLowerCase()) || [] : []
}
function $R(a, b) {
    var c = YR(a, "progress");
    D(c, function (a) {
        TR(a.k, b)
    });
    Ab(c, function (a, b) {
        return SR(a.k) - SR(b.k)
    })
}
UR.prototype.isEmpty = function () {
    return this.j.isEmpty()
};
function aS(a, b) {
    return E(YR(a, b) || [], function (a) {
        return a.j
    })
}

function bS(a, b) {
    var c = new UR;
    zR(a, "Tracking", function (a) {
        var e = xR(a, "event"), g = PR(yR(a), b);
        cS(g) && null != e && ("progress" == e ? (a = xR(a, "offset"), a = dS(a), null != a && ZR(c, e, g, a))
        :
        ZR(c, e, g)
        )
    });
    return c
}
function eS(a) {
    if (A(B(a)))
        return null;
    a = new J(a);
    if ("thismessage" != a.Ib || "extensions" != a.mb)
        return null;
    a = a.Hb;
    if (!va(a, "/"))
        return null;
    a = a.substr(1);
    return A(B(a)) ? null : a
}
function dS(a) {
    if (A(B(a)))
        return null;
    var b = null;
    0 < a.indexOf("%") ? (a = Number(a.substr(0, a.indexOf("%"))), !isNaN(a) && 0 <= a && (b = new RR(a, !0))
) :
    (a = BR(a),
    0 <= a && (b = new RR(a, !1))
)
    ;
    return b
}
function cS(a) {
    var b = !0;
    if (A(B(a)))
        b = !1;
    else
        try {
            new J(a)
        } catch (c) {
            b = !1
        }
    return b
}

function fS(a, b) {
    this.j = null != a ? a : new UR;
    this.D = null != b ? b : []
}
function gS(a, b) {
    var c = b.j;
    D(c.Ha(), function (a) {
        XR(this.j, c.get(a))
    }, a)
}
function hS(a, b) {
    var c = aS(a.j, b);
    return null != c ? c : []
}

function iS() {
    this.j = "Ads by Google";
    this.k = "http://www.google.com/adsense/support";
    this.o = 0
}

function jS(a, b, c, d, e, g, h, k, l, p) {
    fS.call(this, l, p);
    this.A = a;
    this.B = b;
    this.k = c;
    this.F = h;
    this.C = g;
    this.o = e
}
inherit(jS, fS);
function kS() {
}
kS.prototype.parse = function (a) {
    var b;
    zR(a, "config", function (a) {
        null != b || (b = lS(this, a))
    }, this);
    return b
};
function lS(a, b) {
    var c;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case "context":
                c = "default" == a.getAttribute("data") ? new iS : null;
                break;
            case "params":
                null != c && mS(this, c, a)
        }
    }, a);
    return c
}
function mS(a, b, c) {
    D(Ud(c), function (a) {
        var c = a.attributes[0].value;
        switch (a.nodeName) {
            case "attribution_url":
                b.k = c;
                break;
            case "attribution_text":
                b.j = c;
                break;
            case "signals":
                b.o = parseInt(c, 10)
        }
    }, a)
}

function nS() {
}
nS.prototype.parse = function (a) {
    if (null == a)
        return null;
    var b, c, d, e, g, h, k, l = !1;
    D(Ud(a), function (a) {
        switch (a.nodeName) {
            case "AttributionText":
                c = yR(a);
                break;
            case "AttributionUrl":
                d = yR(a);
                break;
            case "ConversionUrl":
                g = yR(a);
                break;
            case "CustomTracking":
                null != Ud(a) && (e = bS(a));
                break;
            case "CheckedEvents":
                a = Ud(a);
                b = E(a, function (a) {
                    return xR(a, "id")
                });
                null != b || (b = []);
                break;
            case "PreviousAdInformation":
                yR(a);
                break;
            case "VisibleUrl":
                h = yR(a);
                break;
            case "UI":
                k = (new kS).parse(a);
                break;
            case "ShowYouTubeAnnotations":
                var r = yR(a);
                l = CR(B(r), !1);
            case "QueryId":
                yR(a)
        }
    }, this);
    null != k || (k = new iS);
    return new jS(c, d, g, 0, h, k, l, 0, e, b)
};
function oS(a, b) {
    fS.call(this, b);
    this.k = a
}
inherit(oS, fS);
function pS() {
}
pS.prototype.parse = function (a) {
    if (null == a)
        return null;
    var b;
    D(Ud(a), function (a) {
        switch (a.nodeName) {
            case "CustomTracking":
                null != Ud(a) && (b = bS(a))
        }
    });
    a = null;
    null != b && 0 < YR(b, "skip").length && (a = "Generic");
    return new oS(a, b)
};
function qS() {
}
qS.prototype.parse = function (a) {
    if (null == a)
        return null;
    var b, c;
    D(Ud(a), function (a) {
        switch (a.nodeName) {
            case "SkippableAdType":
                b = yR(a);
                break;
            case "CustomTracking":
                null != Ud(a) && (c = bS(a))
        }
    });
    return new oS(b, c)
};
function rS() {
}
rS.prototype.parse = function (a) {
    if (null == a)
        return null;
    var b;
    D(Ud(a), function (a) {
        switch (a.nodeName) {
            case "CustomTracking":
                null != Ud(a) && (b = bS(a))
        }
    }, this);
    return new fS(b)
};
function sS(a) {
    fS.call(this);
    this.k = a
}
inherit(sS, fS);
function tS() {
}
tS.prototype.parse = function (a) {
    a = RB(a);
    return A(B(a)) ? null : new sS(a)
};
function uS(a) {
    fS.call(this);
    this.k = a
}
inherit(uS, fS);
function vS() {
    fS.call(this)
}
inherit(vS, fS);
function wS() {
}
wS.prototype.j = {Tv: "TEMPLATE_PARAMETERS", Uv: "TEMPLATE_URL"};
wS.prototype.parse = function (a) {
    if (null == a)
        return null;
    D(Ud(a), function (a) {
        switch (a.nodeName) {
            case this.j.Tv:
                xS(this, a)
        }
    }, this);
    return new vS
};
function xS(a, b) {
    D(Ud(b), function (a) {
        a.nodeName == this.j.Uv && yR(a)
    }, a)
}

function yS(a, b, c, d) {
    fS.call(this);
    this.o = a;
    this.A = b;
    this.B = c;
    this.k = d
}
inherit(yS, fS);
function zS() {
}
zS.prototype.j = {qv: "Line1", rv: "Line2", sv: "Line3", ov: "ImageUrl"};
zS.prototype.parse = function (a) {
    if (null == a)
        return null;
    var b, c, d, e;
    D(Ud(a), function (a) {
        switch (a.nodeName) {
            case this.j.qv:
                b = yR(a, !0);
                break;
            case this.j.rv:
                c = yR(a, !0);
                break;
            case this.j.sv:
                d = yR(a, !0);
                break;
            case this.j.ov:
                e = yR(a)
        }
    }, this);
    return new yS(b, c, d, e)
};
function AS(a) {
    fS.call(this);
    this.k = a
}
inherit(AS, fS);
function BS() {
}
BS.prototype.parse = function (a) {
    if (null == a)
        return null;
    a = a.getAttribute("sequence");
    a = null != a ? Wa(a) : NaN;
    a = isNaN(a) ? -1 : a;
    return new AS(a)
};
function CS() {
    fS.call(this)
}
inherit(CS, fS);
function DS() {
}
DS.prototype.parse = function (a) {
    return null != a ? new CS : null
};
function ES(a) {
    fS.call(this);
    this.k = isNaN(a) ? -1 : a
}
inherit(ES, fS);
function FS() {
}
FS.prototype.parse = function (a) {
    if (null == a)
        return null;
    a = a.getAttribute("fallback_index");
    a = null != a ? Wa(a) : NaN;
    return new ES(a)
};
function GS(a, b, c, d) {
    this.wa = a;
    this.j = Pc(c || 0, 0, 1);
    this.k = null != d ? d : !0
}
GS.prototype.getId = function () {
    return this.wa
};
function HS(a) {
    this.wa = a;
    this.k = new ue;
    this.j = null
}
function IS(a) {
    var b = Math.random(), c = 0, d = a.k.Ka();
    D(d, function (a) {
        c += a.j
    }, a);
    var e = 1 < c ? c : 1;
    a.j = null;
    for (var g = 0, h = 0; h < d.length; ++h)
        if (g += d[h].j, g / e >= b) {
            a.j = d[h];
            break
        }
}

function JS() {
    this.j = new ue;
    KS(this, 41351020, .05);
    KS(this, 41351021, .05);
    KS(this, 41351090, .01);
    KS(this, 41351091, .01);
    LS(this)
}
var MS = null;
function NS() {
    MS || (MS = new JS);
    return MS
}
function KS(a, b, c) {
    A(B("GvnExternalLayer")) || isNaN(b) || 0 >= b || (b = new GS(b, 0, c), OS(a, "GvnExternalLayer").k.set(b.getId(), b))
}
function LS(a) {
    zK() || D(a.j.Ka(), function (a) {
        IS(a)
    }, a)
}
function PS(a, b, c) {
    D(b, function (a) {
        var b = Number(a), g = "forcedLayer" + a;
        isNaN(b) || 0 >= b || A(B(g)) || (a = null != c ? c : !0, g = OS(this, g), b = new GS(b, 0, 0, a), g.j = b)
    }, a)
}
function QS(a) {
    var b = NS();
    return hb(b.j.Ka(), function (b) {
        return !!b.j && b.j.getId() == a
    })
}
function RS(a) {
    var b = [];
    D(a.j.Ka(), function (a) {
        (a = a.j) && a.k && b.push(a.getId())
    });
    return b.sort().join(",")
}
function OS(a, b) {
    var c = a.j.get(b);
    null == c && (c = new HS(b), a.j.set(b, c));
    return c
}

function SS(a) {
    if (QS(947225)) {
        if (a && a.items && a.items.length) {
            a = a.items[0];
            this.channelId = a.id;
            var b = a.snippet;
            b && (this.k = b.title, this.j = Rb(b, "thumbnails", "default", "url"));
            if (a = a.statistics)
                this.videoCount = a.videoCount
        }
    } else
        TS(this, a)
}
SS.prototype.videoCount = 0;
function TS(a, b) {
    if (b) {
        var c = b.entry;
        if (c) {
            var d = c.id;
            d && hb(d.$t.split(":"), function (a, b, c) {
                return "channel" == a ? (this.channelId = c[b + 1], !0) : !1
            }, a);
            (d = c.author) && d[0] && d[0].name && (a.k = d[0].name.$t);
            (c = c.media$thumbnail) && c[0] && (a.j = c[0].url)
        }
    }
}

function US(a) {
    if (QS(947225)) {
        if (a && a.items && a.items.length) {
            a = a.items[0];
            this.videoId = a.id;
            var b = a.snippet;
            a.snippet && (this.channelId = b.channelId, this.title = b.title);
            if (a = a.status)
                this.j = "unlisted" != a.privacyStatus
        }
    } else
        VS(this, a)
}
US.prototype.j = !0;
function VS(a, b) {
    if (b) {
        var c = b.entry;
        if (c) {
            var d = c.id;
            d && hb(d.$t.split(":"), function (a, b, c) {
                return "video" == a ? (this.videoId = c[b + 1], !0) : !1
            }, a);
            if (d = c.title)
                a.title = d.$t;
            if (d = c.media$group)
                if (d = d.yt$uploaderId)
                    a.channelId = d.$t;
            c.yt$accessControl && (c = F(c.yt$accessControl, function (a) {
                return "list" == a.action
            })) && (a.j = "denied" != c.permission)
        }
    }
}

function WS() {
}
var XS = {Rn: "Image", fv: "Flash", ou: "All"}, YS = {
    HTML: "Html",
    aI: "IFrame",
    KJ: "Static",
    ou: "All"
}, ZS = {bI: "IgnoreSize", vJ: "SelectExactMatch", wJ: "SelectNearMatch"};
function aR(a) {
    if (null == a || 0 >= a.width || 0 >= a.height)
        throw vK(TJ, null, "ad slot size", a.toString());
    this.k = a;
    this.j = new WS;
    this.B = $S(YS, this.j.o) ? this.j.o : "All";
    this.A = $S(XS, this.j.creativeType) ? this.j.creativeType : "All";
    this.D = $S(ZS, this.j.A) ? this.j.A : "SelectExactMatch";
    this.o = null != this.j.k ? this.j.k : [];
    this.C = ha(this.j.j) && 0 < this.j.j && 100 >= this.j.j ? this.j.j : 90
}
function $Q(a, b) {
    var c = [];
    D(b, function (a) {
        !A(B(a.j.A)) && (isNaN(a.j.j) || isNaN(fR(a)) || fR(a) == a.j.j) && aT(this, a) ? c.push(a) : (a = bT(this, a),
        null != a && !A(B(a.j.A)) && c.push(a)
        )
    }, a);
    return c
}
function aT(a, b) {
    var c;
    if (c = "Flash" != b.getContentType() || VL) {
        if (c = "All" == a.B || a.B == b.j.R)
            c = b.getContentType(), c = null != c ? "All" == a.A || a.A == c : !0;
        c && (c = b.o, c = mb(a.o) ? !0 : null != c ? 0 <= db(a.o, c) : !1)
    }
    c ? (c = b.j.xc(), c = "IgnoreSize" == a.D || Tc(a.k, c) ? !0 : "SelectNearMatch" == a.D && (c.width > a.k.width || c.height > a.k.height || c.width < a.C / 100 * a.k.width || c.height < a.C / 100 * a.k.height ? !1 : !0)):c = !1;
    return c
}
function bT(a, b) {
    var c = b.k;
    return null != c ? F(c, function (a) {
        return aT(this, a)
    }, a) : null
}
function $S(a, b) {
    return null != b && Ob(a, b)
}

function cT(a) {
    J.call(this, a);
    this.k = new ue;
    a = this.Hb;
    var b = a.indexOf(";"), c = null;
    0 <= b ? (af(this, a.substring(0, b)), c = a.substring(b + 1)) : af(this, a);
    dT(this, c)
}
inherit(cT, J);
cT.prototype.toString = function () {
    return eT(this, cT.J.toString.call(this))
};
cT.prototype.ep = function () {
    return ""
};
cT.prototype.sf = function () {
    return ""
};
function dT(a, b) {
    A(B(b)) || D(b.split(";"), function (a) {
        var b = a.indexOf("=");
        if (0 < b) {
            var e = za(a.substring(0, b));
            a = za(a.substring(b + 1));
            b = this.k.get(e);
            null != b ? G(b, a) || b.push(a) : b = [B(a)];
            this.k.set(e, b)
        }
    }, a)
}
function fT(a) {
    if (A(B("ord")))
        return null;
    a = a.k.get("ord");
    return null != a ? a : null
}
function gT(a, b, c) {
    A(B(b)) || (c = E(c, B), a.k.set(b, c))
}
function eT(a, b) {
    var c = [B(b)];
    ub(c, hT(a));
    return c.join(";")
}
function hT(a) {
    var b = fT(a);
    null != b ? A(B("ord")) || a.k.remove("ord") : b = [B(y())];
    var c = [];
    D(a.k.Ha(), function (a) {
        D(this.k.get(a), function (b) {
            ub(c, a + "=" + b)
        })
    }, a);
    ub(c, "ord=" + b[0]);
    gT(a, "ord", b);
    return c
}
cT.prototype.clone = function () {
    return new cT(this.toString())
};
function iT(a) {
    a = a.adTagUrl;
    if (null == a)
        return !1;
    a = new J(a);
    var b = a.Hb;
    return wa(a.mb, "googleads.g.doubleclick.net") && jT("/pagead/ads", b)
}
function kT(a) {
    a = a.adTagUrl;
    return null != a ? "bid.g.doubleclick.net" == kf(new J(a)) : !1
}
function lT(a) {
    a = a.adTagUrl;
    if (null == a)
        return !1;
    var b = new cT(a);
    a = b.mb;
    b = eT(b, b.Hb);
    return !wa(a, ".g.doubleclick.net") && wa(a, "doubleclick.net") && jT("/(ad|pfad)[x|i|j]?/", b)
}
function mT(a) {
    a = a.adTagUrl;
    if (null == a)
        return !1;
    a = new J(a);
    var b = a.Hb;
    return wa(a.mb, "doubleclick.net") && jT("/gampad/ads", b)
}
function jT(a, b) {
    return A(B(b)) ? !1 : (new RegExp(a)).test(b)
}

function nT() {
    this.k = this.A = 1;
    this.j = this.o = 0;
    this.B = 1
}

function oT() {
    this.F = {};
    this.Ga = "";
    this.Cf = new UR
}
oT.prototype.Fl = function () {
    return null
};
function pT(a, b, c) {
    a.Ga = b;
    a.F = c
}
oT.prototype.Xg = function (a) {
    this.W = a
};
oT.prototype.getAd = function () {
    return this.W
};
function qT(a, b) {
    var c = [], d = a.K();
    D(d, function (a) {
        a = YR(a.Cf, b) || [];
        c = sb(a, c)
    }, a);
    return c
}
oT.prototype.K = function () {
    for (var a = [this], b = this.W.k; b;) {
        var c = rT(this, b) || rT(this, b, !0);
        null != c && a.push(c);
        b = b.k
    }
    return a
};
function rT(a, b, c) {
    var d = c || !1;
    return F(b.A, function (a) {
        var b = a.j == this.j;
        return a instanceof this.constructor && (d || b)
    }, a)
}

function sT(a, b, c, d, e, g) {
    oT.call(this);
    this.ea = a;
    this.o = b;
    this.k = c;
    this.H = tb(d);
    this.ja = this.ga = null;
    this.A = e;
    this.ba = tb(g);
    xb(this.ba, null, function (a) {
        return a.G
    })
}
inherit(sT, oT);
sT.prototype.Mc = function () {
    return this.o
};
function tT(a) {
    var b = new ue, c = a.K();
    D(c, function (a) {
        if (a instanceof sT) {
            var c = a.k;
            D(c.Ha(), function (a) {
                b.set(a, sb(c.get(a), b.get(a) || []))
            }, this)
        }
    }, a);
    return b
}
sT.prototype.getMediaUrl = function (a) {
    var b = "";
    hb(this.H, function (c) {
        var d = c.k;
        return !A(B(a)) && a != c.j || null == d || A(B(d)) ? !1 : (b = d,
        !0
        )
    }, this);
    return b
};
sT.prototype.setMediaUrl = function (a) {
    this.ja = a
};
sT.prototype.Fl = function () {
    var a = F(this.H, function (a) {
        return !A(B(a.j)) && -1 != a.j.indexOf("javascript") && ("VPAID" == a.o || "surveys" == a.o)
    });
    return null != a ? a.k : null
};
function uT(a, b, c) {
    R.call(this);
    this.k = a;
    this.o = b;
    this.A = c;
    this.C = 0;
    this.j = new mn(this);
    vT(this)
}
inherit(uT, R);
function vT(a) {
    a.A.forEach(function (a, c) {
        this.j.listen(c, "mousedown", this.D);
        this.j.listen(c, "mouseup", this.G)
    }, a);
    a.j.listen(a.o, "mouseover", a.F)
}
uT.prototype.D = function () {
    this.B = y()
};
uT.prototype.G = function (a) {
    var b = null != a.target.href ? a.target : a.target.parentNode, c = [];
    this.k & 1 && c.push("nm=" + this.C);
    this.k & 2 && c.push("nb=" + this.A.get(b));
    if (this.k & 8) {
        var d = Ng(this.o);
        c.push("nx=" + (a.clientX - d.x));
        c.push("ny=" + (a.clientY - d.y))
    }
    this.k & 16 && null != this.B && c.push("clkt=" + (y() - this.B));
    0 < c.length && (b.href += 0 <= b.href.indexOf("?") ? "&" + c.join("&") : "?" + c.join("&"))
};
uT.prototype.F = function () {
    this.C++
};
uT.prototype.L = function () {
    uT.J.L.call(this);
    this.j.dispose()
};
function wT(a, b, c, d, e) {
    oT.call(this);
    A(B(a)) && (a = Va() + "_ima");
    this.wa = B(a);
    this.na = b;
    this.R = c;
    this.S = d;
    this.A = e;
    this.V = [];
    null != this.S ? this.Ua = qJ[this.S] || "Other" : this.Ua = null
}
inherit(wT, oT);
f = wT.prototype;
f.getContent = function () {
    var a;
    a = this.te();
    if ("outerHTML" in a)
        a = a.outerHTML;
    else {
        var b = zd(a).createElement("div");
        b.appendChild(a.cloneNode(!0));
        a = b.innerHTML
    }
    return a
};
f.getContentType = function () {
    return this.Ua
};
f.xc = function () {
    return this.na
};
f.fd = function () {
    return this.xc().width
};
f.getHeight = function () {
    return this.xc().height
};
f.Fl = function () {
    return "VPAID" == this.G ? this.A : null
};
f.Mc = function () {
    return this.M
};
function xT(a, b, c, d, e) {
    wT.call(this, a, b, c, d, e);
    this.ka = -2;
    this.o = null;
    this.P = this.I = v;
    this.O = [];
    this.la = !0;
    this.X = [];
    this.D = !1
}
inherit(xT, wT);
function yT(a, b) {
    a.o = b;
    null != a.k && null != b && (zT(a, a.I), AT(a, a.P))
}
function zT(a, b) {
    null != a.o && null != a.k && D(a.O, function (a) {
        this.o.Da(a, "click", this.I);
        A(B(this.Mc())) || this.o.listen(a, "click", b)
    }, a);
    a.I = b
}
function AT(a, b) {
    null != a.o && null != a.k && (a.o.Da(a.k, "creativeview", a.P), a.o.listen(a.k, "creativeview", b));
    a.P = b
}
function BT(a) {
    D(a.X, function (a) {
        Sd(Ad(a))
    }, a);
    a.X = []
}
xT.prototype.B = function (a) {
    null == this.o || A(B(this.Mc())) || (this.o.listen(a, "click", this.I), this.O.push(a))
};
xT.prototype.te = function () {
    null == this.k && (this.k = this.hf(), Qd(this.k, CT(this)));
    null != this.o && this.o.listen(this.k, "creativeview", this.P);
    return this.k
};
function DT(a, b) {
    var c = a.wa, d = {};
    d.style = "cursor:default;position:relative;z-index:1001;height:" + a.getHeight() + "px;";
    "Text" != a.getContentType() && (d.style += "width:" + a.fd() + "px");
    A(B(c)) || (d.id = c);
    return I("div", d, b)
}
xT.prototype.Xo = function () {
    return 2
};
function CT(a) {
    if (!a.la)
        return null;
    var b = qT(a, "start");
    ub(b, qT(a, "creativeview"));
    if (null != b && !mb(b)) {
        var c = [];
        D(b, function (a) {
            if (!A(B(a))) {
                var b;
                b = xd().fx("iframe", {frameborder: 0, style: "border:0;vertical-align:bottom;", src: 'javascript:""'});
                Bg(b, {display: "block", height: "0px", width: "0px"});
                var g = "iframe" + Math.floor(1E9 * Math.random());
                b.setAttribute("height", 0);
                b.setAttribute("width", 0);
                b.setAttribute("src", DJ(a.j));
                b.setAttribute("id", g);
                this.X.push(g);
                ob(c, b)
            }
        }, a);
        return c
    }
    return null
}
function ET(a, b) {
    if (null != a.k) {
        var c = new ue;
        D(a.O, function (a) {
            c.set(a, this.Xo(a))
        }, a);
        new uT(b, a.k, c)
    }
}
function FT(a) {
    var b = [], c = a.K();
    D(c, function (a) {
        b = sb(b, a.V)
    }, a);
    return b
}
xT.prototype.K = function () {
    var a = [this], b;
    for (b = this.getAd().k; b;) {
        var c = this.D ? rT(this, b) || rT(this, b, !0) : GT(this, b) || GT(this, b, !0);
        null != c && a.push(c);
        b = b.k
    }
    return a
};
function GT(a, b, c) {
    var d = c || !1;
    return F(b.A, function (a) {
        var b = a.j == this.j;
        return this instanceof a.constructor && (d || b)
    }, a)
}

function QQ(a, b, c, d, e, g, h, k, l, p, r, u, C, V, O, fa) {
    U.call(this);
    this.V = a;
    this.M = b;
    this.W = c;
    this.Aa = d;
    this.O = new mn(this);
    HT(this);
    this.ka = isNaN(h) || "" == h || 0 == h ? -1 : h;
    this.P = k ? tb(k) : [];
    this.S = l ? tb(l) : [];
    this.A = p ? tb(p) : [];
    this.ea = r ? tb(r) : [];
    this.C = [];
    D(this.ea, function (a) {
        ub(this.C, tb(a.j))
    }, this);
    this.ga = !0;
    this.k = this.j = null;
    this.D = new ue(u);
    this.F = null != fa;
    this.va = (this.G = null != C) ? V || !1 : !1;
    this.xa = this.jz ? O || !1 : !1;
    this.Ea = B(C);
    this.Ia = B(fa);
    this.pa = this.o = null;
    this.B = new nT;
    this.ba = new H(0, 0);
    this.R = String(Math.floor(1E9 *
    Math.random()));
    this.H = this.K = this.I = null;
    this.oa = y();
    this.la = this.ja = 0;
    D(sb(this.A, this.C), function (a) {
        a.Xg(this)
    }, this);
    EK() && IT(this) && (this.C = fb(this.C, function (a) {
        return 60 >= a.getHeight()
    }))
}
inherit(QQ, U);
function JT(a) {
    var b;
    b = KT(a) ? LT(a) ? "2_1" : "2_2" : "2";
    return (MT(a, sJ) || MT(a, uJ) ? 1 : MT(a, rJ) ? 2 : 0) + "_" + b
}
function NT(a) {
    return null != a.M ? a.M : ""
}
function OT(a) {
    return null != a.k ? sb(OT(a.k), a.P) : a.P
}
function PT(a) {
    return null != a.k ? sb(PT(a.k), a.S) : a.S
}
f = QQ.prototype;
f.getContentType = function () {
    var a = this.j, b = "";
    if (null === a)
        return b;
    if (a instanceof sT)
        a = a.ga, null === a || (b = B(a.j));
    else if (a instanceof xT)
        switch (a.R) {
            case "IFrame":
            case "Html":
            case "Static":
                b = B(a.S)
        }
    return b
};
function ZQ(a) {
    return null != a.k ? sb(a.C, ZQ(a.k)) : a.C
}
function QT(a) {
    return null != a.j ? a.j.Ga : ""
}
f.getExtension = function (a) {
    return this.D.get(a)
};
function RT(a, b) {
    a.j = b;
    a.ba = null != a.j && a.j instanceof xT ? a.j.xc() : new H(0, 0)
}
function ST(a) {
    return a.j
}
f.Hx = function (a) {
    a.o.queryId == this.R && this.U(new hJ("measurable_impression", this, a.o))
};
f.qy = function (a) {
    a.o.queryId == this.R && this.U(new hJ("viewable_impression", this, a.o))
};
function TT(a) {
    return null != a.V ? a.V : ""
}
function UT(a) {
    if (null == a.k)
        return [];
    var b = [TT(a.k)];
    ub(b, UT(a.k));
    return b
}
function VT(a) {
    var b = UT(a).reverse();
    b.push(TT(a));
    return b
}
function WT(a) {
    if (null == a.k)
        return [];
    var b = [NT(a.k)];
    ub(b, WT(a.k));
    return b
}
function XT(a) {
    var b = WT(a).reverse();
    b.push(NT(a));
    return b
}
function YQ(a) {
    if (null == a.k)
        return [a.W];
    var b = YQ(a.k);
    b.push(a.W);
    return b
}
function ZT(a) {
    a = a.getExtension("waterfall");
    return null != a && -1 != a.k ? a.k : -1
}
function $T(a) {
    if (-1 != a.ka)
        return a.ka;
    a = a.getExtension("pod");
    return null != a && -1 != a.k ? a.k : -1
}
function eR(a, b) {
    return b || null == a.k ? a.ea : sb(a.ea, eR(a.k))
}
function aU(a, b) {
    return hb(a.A, function (a) {
        return a instanceof sT && "linear" == b || a instanceof xT && "nonlinear" == b ? !0 : !1
    })
}
function IT(a) {
    return bU(a) ? "video" == a.Aa : aU(a, "linear")
}
function KT(a) {
    return null != cU(a)
}
function dU(a, b) {
    var c = cU(a);
    if (!c)
        return null;
    TR(c, b);
    return SR(c)
}
function cU(a) {
    if (QS(919139) || QS(919140))
        return new RR(0, !1);
    var b = new RR(5, !1), c = eU(a);
    if ("implicit" == c)
        return b;
    a = a.j;
    var d = null;
    null != a && a instanceof sT && (d = a.A);
    null != d || "explicit" != c || (d = b);
    return null != d && EK() ? b : d
}
function eU(a) {
    if (null != F(a.D.Ka(), function (a) {
            return !mb(hS(a, "skip"))
        }))
        return "implicit";
    var b = a.D.get("DFP");
    if (b instanceof oS)
        switch (b.k) {
            case "InstreamSelect":
                return "implicit";
            case "Generic":
                return "explicit"
        }
    a = a.j;
    return null == a || (a = a.Cf, null == a || mb(YR(a, "skip"))) ? "none" : "explicit"
}
function fU(a) {
    return null != a.o && (iT(a.o) || mT(a.o) || lT(a.o))
}
function LT(a) {
    if (null == a.M || null == a.o)
        return !1;
    var b;
    (b = fU(a) || !1) && !(b = bU(a) && !gU(a, ["ADSENSE/ADX"])) && (gU(a, uJ) ? (b = a.D.get("DFP"), b = null != b ? "InstreamSelect" == b.k : !1):b = !1);
    if (b || a.k && a.k.F && fU(a.k))
        return !0;
    a = MT(a, ["ADSENSE/ADX"]) || a.k && MT(a, rJ);
    return EK() && !a
}
f.jz = function () {
    return this.G
};
function hU(a) {
    return null === a.j ? null : a.j.Mc()
}
function iU(a) {
    return null == a.j || a.j instanceof xT ? -1 : a.j.ea
}
function jU(a) {
    return null === a.j ? null : a.j.Fl()
}
function bU(a) {
    return gU(a, rJ)
}
function kU(a) {
    var b = jU(a);
    return gU(a, ["402"]) || w(b) && !da(b.match("//s0.2mdn.net/instream/html5/survey/survey.html"))
}
f.getHeight = function () {
    return this.ba.height
};
function lU(a) {
    return a.I
}
f.toString = function () {
    return "Ad: " + this.V
};
function gU(a, b) {
    return null != a.M ? G(b, a.W) : !1
}
function MT(a, b) {
    for (var c = YQ(a), d = c.length - 1; 0 <= d; d--)
        if ("UNKNOWN" != c[d]) {
            if (G(b, c[d]))
                return !0;
            break
        }
    return !1
}
function HT(a) {
    var b = FK.j ? uO() : pR();
    a.O.listen(b, "measurable_impression", a.Hx);
    a.O.listen(b, "viewable_impression", a.qy)
}
f.L = function () {
    null != this.O && this.O.dispose();
    QQ.J.L.call(this)
};
function mU(a, b) {
    this.j = a;
    this.k = b
}

function nU(a, b, c) {
    this.j = a;
    this.k = b;
    this.o = c
}
nU.prototype.getContent = function () {
    return this.j.getContent()
};
nU.prototype.getContentType = function () {
    return this.j.getContentType()
};
nU.prototype.getHeight = function () {
    return this.j.getHeight()
};
function fR(a) {
    a = ST(a.j.getAd());
    return null != a ? a.j : NaN
}
nU.prototype.Xg = function (a) {
    this.j.Xg(a);
    D(this.k, function (b) {
        b.Xg(a)
    }, this)
};
function oU(a, b, c) {
    this.k = a;
    this.j = b;
    this.o = c
}
oU.prototype.getContentType = function () {
    return null != this.j ? qJ[this.j] || "Other" : null
};
function pU(a) {
    return '<div class="text-container ' + (a.image ? "pyv" : "") + '"><div class="text-inner-container">' + (a.image ? '<a class="text-image-link" target="_blank" href="' + jP(a.Wc) + '"><img src="' + jP(a.image) + '" class="text-image">' + (a.duration ? '<div class="text-image-duration">' + jP(a.duration) + "</div>" : "") + "</a>" : "") + '<a class="text-title" href="' + jP(a.Wc) + '" target="_blank" dir=' + jP(a.dir) + ">" + jP(a.title) + '</a><div class="text-description" dir=' + jP(a.dir) + ">" + jP(a.text) + "</div>" + (a.ws ? '<a target="_blank" href="' +
        jP(a.Wc) + '" class="text-ad-channel">' + jP(a.ws) + "</a>" : "") + "</div></div>"
}
function qU(a) {
    return '<div class="flash-container ' + (a.ff ? "click-capture" : "") + '"><a class="click-layer" target="_blank" href="' + jP(a.Wc) + '"></a><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="' + jP(a.width) + '" height="' + jP(a.height) + '"><param name="movie" value="' + jP(a.url) + '"><param name="quality" value="high"><param name="wmode" value="transparent"><param name="AllowScriptAccess" value="never"><param name="FlashVars" value="clickTAG=' + vP(a.Wc) +
        '"><embed width="' + jP(a.width) + '" height="' + jP(a.height) + '" wmode="transparent" type="application/x-shockwave-flash" src="' + jP(a.url) + '" allowscriptaccess="never" pluginspage="//www.macromedia.com/go/getflashplayer" flashvars="clickTAG=' + vP(a.Wc) + '"></object></div>'
}
function rU(a) {
    return '<div class="image-container" id="' + jP(a.id) + '" style="width:' + jP(a.width) + ";height:" + jP(a.height) + '"><a target="_blank" href="' + jP(a.Wc) + '"><img src="' + jP(a.url) + '" border="0"></a></div>'
}

function sU(a, b, c, d) {
    xT.call(this, a, b, "Static", c, d);
    this.vo = !1
}
inherit(sU, xT);
sU.prototype.hf = function () {
    var a = this.G, a = null != a && "clicktag" == a.toLowerCase(), a = {
        url: DJ(B(this.A)),
        width: this.fd(),
        height: this.getHeight(),
        Wc: this.Mc(),
        ff: this.vo || !a
    }, a = eP(qU, a);
    a.style.width = this.fd() + "px";
    a.style.height = this.getHeight() + "px";
    a.id = this.wa;
    D(a.getElementsByTagName("object"), this.B, this);
    D(a.getElementsByTagName("a"), this.B, this);
    return a
};
function tU(a, b, c, d) {
    xT.call(this, a, b, "Html", c, d)
}
inherit(tU, xT);
tU.prototype.hf = function () {
    var a = I("div");
    a.innerHTML = this.A;
    this.B(a);
    return DT(this, a)
};
function uU(a, b, c, d) {
    xT.call(this, a, b, "Static", c, d)
}
inherit(uU, xT);
uU.prototype.getContent = function () {
    var a = uU.J.getContent.call(this);
    this.D && (a = a.replace('<img src=""', '<img src="' + DJ(B(this.A)) + '"'));
    return a
};
uU.prototype.hf = function () {
    var a = "";
    this.D || (a = DJ(B(this.A)));
    a = {id: this.wa, url: a, Wc: this.Mc(), width: this.fd() + "px", height: this.getHeight() + "px"};
    a = eP(rU, a);
    D(a.getElementsByTagName("a"), this.B, this);
    return a
};
function vU(a, b) {
    xT.call(this, a, b, "Static", "text", "")
}
inherit(vU, xT);
f = vU.prototype;
f.xc = function () {
    return new H(this.fd(), this.getHeight())
};
f.getHeight = function () {
    return 63
};
f.fd = function () {
    return null != this.C ? Wg(this.C).width : 0
};
f.Xo = function (a) {
    return jh(a, "text-image") ? 9 : jh(a, "text-ad-channel") ? 1 : 0
};
f.hf = function () {
    var a = this.getAd(), b = a.getExtension("AdSense"), c = a.getExtension("TextAd"), d = c.o, e = "rtl";
    null != d && (e = ic.test(hc(d, void 0)) ? "rtl" : "ltr");
    d = {title: d, text: c.A + " " + c.B, dir: e, Wc: this.Mc()};
    if (c = c.k)
        d.image = DJ(c), a = F(a.A, function (a) {
            return a instanceof sT
        }), null != a && (d.duration = MR(a.ea));
    b.o && (d.ws = b.o);
    this.C = eP(pU, d);
    D(this.C.getElementsByTagName("a"), this.B, this);
    this.C.id = this.wa;
    this.C.style.height = this.getHeight() + "px";
    return this.C
};
function wU(a, b, c, d, e) {
    xT.call(this, a, b, c, d, e)
}
inherit(wU, xT);
wU.prototype.hf = function () {
    var a = B(this.A);
    A(B(this.Mc())) || (a = new J(a), K(a, "clickTAG", ya(this.Mc())), a = a.toString());
    var b = I("iframe", {marginwidth: 0, marginheight: 0, hspace: 0, vspace: 0, frameborder: 0, scrolling: "no"}, null);
    b.height = this.getHeight();
    "Text" != this.getContentType() && (b.width = this.fd());
    b.setAttribute("src", DJ(a));
    this.B(b);
    return DT(this, b)
};
function xU(a, b, c) {
    if (mb(c))
        return new xT(a, b, "", null, "");
    var d = yU(c);
    c = d.k;
    var e = d.j, d = d.o;
    switch (c) {
        case "Html":
            return new tU(a, b, e, d);
        case "Static":
            switch (qJ[e]) {
                case "Image":
                    return new uU(a, b, e, d);
                case "Flash":
                    return new sU(a, b, e, d);
                case "Text":
                    return new vU(a, b)
            }
    }
    return new wU(a, b, c, e, d)
}
function yU(a) {
    var b = F(a, function (a) {
        return "Static" == a.k && "Flash" == qJ[a.j]
    }), c = F(a, function (a) {
        return "IFrame" == a.k
    }), d = F(a, function (a) {
        return "Html" == a.k
    }), e = F(a, function (a) {
        return "Static" == a.k && "Image" == qJ[a.j]
    }), g = F(a, function (a) {
        return "Static" == a.k && "Text" == qJ[a.j]
    });
    return VL && null != b ? b : null != c ? c : null != d ? d : null != e ? e : null != g ? g : a[0]
}

function zU(a, b, c, d, e) {
    var g = yU(e), h = xU(a.id, a.size, [g]);
    h.D = !0;
    h.G = a.apiFramework;
    h.M = b;
    h.j = c;
    d && (h.Cf = d);
    pb(e, g);
    var k = [];
    D(e, function (e) {
        e = xU(a.id, a.size, [e]);
        e.D = !0;
        e.G = a.apiFramework;
        e.M = b;
        e.j = c;
        d && (e.Cf = d);
        k.push(new nU(e, [], a.adSlotId))
    });
    return new nU(h, k, a.adSlotId)
}

function AU(a, b, c, d, e, g, h) {
    this.o = a;
    this.G = b;
    this.B = c;
    this.C = d;
    this.k = e;
    this.D = g;
    this.F = h;
    this.j = this.o.hf()
}
AU.prototype.te = function () {
    return this.j
};
AU.prototype.display = function (a) {
    this.A = a;
    this.A.appendChild(this.j);
    a = this.j;
    var b = Ug(this.A), b = "left" == this.B ? "0px" : "right" == this.B ? b.width - this.o.xc().width + "px" : this.B + "px", c;
    c = Ug(this.A);
    c = "bottom" == this.C ? "0px" : "top" == this.C ? c.height - this.o.xc().height + "px" : c.height - this.o.xc().height - Za(this.C) + "px";
    Bg(a, {position: "absolute", overflow: "hidden", left: b, bottom: c});
    Yg(this.j, !1)
};
AU.prototype.update = function (a, b) {
    var c = null != this.D ? SR(this.D) : 0;
    this.k = 0 <= this.k ? this.k : b;
    c <= a && c + this.k >= a ? BU(this) : Yg(this.j, !1)
};
function BU(a) {
    "none" == a.j.style.display && (Yg(a.j, !0), D(a.F, function (a) {
        GJ(a)
    }))
}

function CU(a, b, c, d, e, g, h, k, l, p) {
    b = xU("icon" + a, b, p);
    b.G = h;
    b.M = k.iconClickThrough;
    return new AU(b, a, c, d, e, g, l)
}

function DU(a) {
    this.A = a;
    this.logger = null
}
inherit(DU, tR);
DU.prototype.j = {
    ku: "Ad",
    ck: "AdParameters",
    mu: "AdSystem",
    nu: "AdTitle",
    HG: "Advertiser",
    ru: "AltText",
    yu: "ClickThrough",
    zu: "ClickTracking",
    Au: "Companion",
    Bu: "CompanionAds",
    Cu: "CompanionClickThrough",
    Du: "CompanionClickTracking",
    Ou: "Creative",
    tH: "CreativeExtensions",
    Pu: "Creatives",
    Su: "CustomClick",
    Vu: "Description",
    dk: "Duration",
    ERROR: "Error",
    $u: "Extension",
    av: "Extensions",
    Dh: "HTMLResource",
    iv: "Icon",
    jv: "Icons",
    kv: "IconClicks",
    lv: "IconClickThrough",
    mv: "IconClickTracking",
    nv: "IconViewTracking",
    Fh: "IFrameResource",
    Sn: "Impression",
    dI: "InLine",
    LINEAR: "Linear",
    wv: "MediaFile",
    xv: "MediaFiles",
    Cv: "NonLinear",
    Dv: "NonLinearAds",
    Ev: "NonLinearClickThrough",
    Fv: "NonLinearClickTracking",
    hJ: "Pricing",
    Ih: "StaticResource",
    ao: "Survey",
    cK: "Tracking",
    hk: "TrackingEvents",
    lK: "VAST",
    Yv: "VASTAdTagURI",
    Zv: "VideoClicks",
    aw: "Wrapper"
};
DU.prototype.k = {
    lu: "adSlotID",
    qu: "allowMultipleAds",
    Ch: "apiFramework",
    wu: "bitrate",
    Qu: "creativeType",
    Uu: "delivery",
    dk: "duration",
    DH: "event",
    gv: "followAdditionalWrappers",
    Yu: "expandedHeight",
    Zu: "expandedWidth",
    ek: "height",
    Eh: "id",
    tv: "maintainAspectRatio",
    vv: "maxBitrate",
    zv: "minBitrate",
    Av: "minSuggestedDuration",
    Gv: "offset",
    Hv: "program",
    Jv: "required",
    Nv: "scalable",
    Xn: "sequence",
    Pv: "skipoffset",
    bo: "type",
    VERSION: "version",
    ik: "width",
    cw: "xPosition",
    ew: "yPosition"
};
function EU(a) {
    if (null == a)
        return !1;
    a = Vd(a);
    return null != a && "VAST" == a.nodeName
}
function FU(a) {
    if (null == a)
        return 0;
    a = parseInt(a.getAttribute("version"), 10);
    return ha(a) && !isNaN(a) ? a : 0
}
function GU(a) {
    var b = [], c = Vd(a.A), d = FU(c);
    zR(c, a.j.ku, function (a) {
        var c;
        c = HU(a);
        if (null == c)
            throw uR(a);
        var h = a.getAttribute(this.k.Eh);
        a = Number(a.getAttribute(this.k.Xn));
        c = IU(this, c, h || null, a || 0);
        null != c && (c.la = d, b.push(c))
    }, a);
    return b
}
DU.prototype.o = function () {
    return new DR(this.A, GU(this), null)
};
function HU(a) {
    var b = null;
    D(Ud(a), function (a) {
        switch (a.nodeName) {
            case "InLine":
            case "Wrapper":
                b = a;
                break;
            default:
                throw uR(a);
        }
    });
    return b
}
function IU(a, b, c, d) {
    var e, g, h = [], k = [], l = [], p = [], r = new ue, u, C = b.nodeName == a.j.aw, V = C, O = C, fa;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.Yv:
                if (C) {
                    if (null != u)
                        throw vR(a);
                    u = yR(a);
                    fa = eS(u);
                    V = CR(b.getAttribute(this.k.qu), V);
                    O = CR(b.getAttribute(this.k.gv), O)
                } else
                    throw uR(a);
                break;
            case this.j.mu:
                e = yR(a);
                break;
            case this.j.nu:
                g = yR(a);
                break;
            case this.j.Vu:
                yR(a);
                break;
            case this.j.ao:
                yR(a);
                break;
            case this.j.Sn:
                a = yR(a);
                cS(a) && h.push(PR(a));
                break;
            case this.j.ERROR:
                a = yR(a);
                k.push(PR(a));
                break;
            case this.j.Pu:
                a =
                    JU(this, a);
                l = a.creatives;
                p = a.Gw;
                break;
            case this.j.av:
                r = KU(this, a, fa)
        }
    }, a);
    return new QQ(B(c), e, LU(e), g, 0, 0, d, k, h, l, p, r, u, V, O, MU(r))
}
function MU(a) {
    var b = null;
    a = a.get("AdSense");
    null != a && (a = hS(a, "vast2tracking"), null != a && !mb(a) && (b = a[0]));
    return b
}
function LU(a) {
    if (A(B(a)))
        return "UNKNOWN";
    a = a.toUpperCase();
    switch (a) {
        case "ADSENSE":
        case "ADSENSE/ADX":
        case "DART":
        case "DART_DFP":
        case "DART_DFA":
        case "FREEWHEEL":
        case "GDFP":
        case "402":
            return a;
        default:
            return "UNKNOWN"
    }
}
function NU(a) {
    if (A(B(a)))
        return "none";
    switch (a) {
        case "all":
        case "any":
        case "none":
            return a;
        default:
            return "none"
    }
}
function KU(a, b, c) {
    var d = new ue;
    try {
        var e = wR(b, a.j.$u);
        D(e, function (a) {
            var b = a.getAttribute(this.k.bo);
            null != b && (b = b.toLowerCase());
            switch (b) {
                case "geo":
                    a = (new DS).parse(a);
                    break;
                case "pod":
                    a = (new BS).parse(a);
                    break;
                case "waterfall":
                    a = (new FS).parse(a);
                    break;
                case "dart":
                    a = (new pS).parse(a);
                    break;
                case "dfp":
                    b = "DFP";
                    a = (new qS).parse(a);
                    break;
                case "adsense":
                    b = "AdSense";
                    a = (new nS).parse(a);
                    break;
                case "textad":
                    b = "TextAd";
                    a = (new zS).parse(a);
                    break;
                case "templatead":
                    b = "TemplateAd";
                    a = (new wS).parse(a);
                    break;
                case "infocards":
                    var b = "InfoCards", e = new tS;
                    a = e.parse(a);
                    break;
                case "infocardstracking":
                    b = "InfoCardsTracking";
                    e = new tS;
                    a = e.parse(a);
                    break;
                case c:
                    b = "LocalRedirect";
                    null != a ? (e = null, a = wR(a, "AdXml"), 1 == a.length && (e = '<?xml version="1.0" encoding="UTF-8"?>' + RB(Vd(a[0]))), a = new uS(e)
                ) :
                    a = null;
                    break;
                default:
                    e = new rS, b = "generic", a = e.parse(a)
            }
            null != a && (e = d.get(b), null != e ? "generic" == b && (gS(e, a.j), d.set(b, e)) : d.set(b, a))
        }, a)
    } catch (g) {
    }
    return d
}
function JU(a, b) {
    var c = [], d = [];
    zR(b, a.j.Ou, function (a) {
        var b = a.getAttribute(this.k.Xn), h;
        A(B(b)) || (h = parseFloat(b));
        a.getAttribute(this.k.Eh);
        var k = !1;
        D(Ud(a), function (a) {
            switch (a.nodeName) {
                case this.j.LINEAR:
                    if (k)
                        throw vR(a);
                    a = OU(this, a, isNaN(h) ? 0 : h);
                    ub(c, a);
                    k = !0;
                    break;
                case this.j.Bu:
                    if (k)
                        throw vR(a);
                    a = PU(this, a, isNaN(h) ? void 0 : h);
                    ub(d, a);
                    k = !0;
                    break;
                case this.j.Dv:
                    if (k)
                        throw vR(a);
                    a = QU(this, a, isNaN(h) ? 0 : h);
                    ub(c, a);
                    k = !0
            }
        }, this)
    }, a);
    return {creatives: c, Gw: d}
}
function QU(a, b, c) {
    var d = [], e = new UR;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.Cv:
                a = RU(this, a, c);
                null != a && d.push(a);
                break;
            case this.j.hk:
                e = bS(a);
                break;
            default:
                throw uR(a);
        }
    }, a);
    0 != d.length || e.isEmpty() || (a = new xT(null, new H(-1, -1), "", null, ""), a.j = c, d.push(a));
    D(d, function (a) {
        e && (a.Cf = e)
    });
    return d
}
function SU(a, b) {
    var c = {};
    c.id = b.getAttribute(a.k.Eh);
    c.adSlotId = b.getAttribute(a.k.lu);
    c.apiFramework = b.getAttribute(a.k.Ch);
    var d = Wa(b.getAttribute(a.k.ik)), e = Wa(b.getAttribute(a.k.ek));
    c.size = new H(d, e);
    d = b.getAttribute(a.k.Zu);
    e = b.getAttribute(a.k.Yu);
    A(B(d)) || A(B(e)) || (c.PK = new H(Wa(d), Wa(e)));
    return c
}
function RU(a, b, c) {
    var d = SU(a, b);
    b.getAttribute(a.k.Ch);
    b.getAttribute(a.k.Nv);
    b.getAttribute(a.k.tv);
    var e = b.getAttribute(a.k.Av), e = BR(e, -1), g = [];
    new ue;
    var h = {}, k = "", l, p = [];
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.Fv:
                p.push(yR(a));
                break;
            case this.j.Ev:
                l = yR(a);
                break;
            case this.j.ck:
                h = TU(a);
                k = B(yR(a));
                break;
            case this.j.Fh:
            case this.j.Ih:
            case this.j.Dh:
                g.push(UU(this, a));
                break;
            default:
                throw uR(a);
        }
    }, a);
    a = xU(d.id, d.size, g);
    pT(a, k, h);
    a.G = d.apiFramework;
    a.M = l;
    a.V = p;
    a.ka = e;
    a.j = c;
    return a
}
function UU(a, b) {
    var c = xR(b, a.k.Qu), d;
    t: switch (d = b.nodeName, d) {
        case a.j.Ih:
            d = "Static";
            break t;
        case a.j.Fh:
            d = "IFrame";
            break t;
        case a.j.Dh:
            d = "Html";
            break t;
        default:
            throw tK(mK, null, d);
    }
    var e = yR(b);
    null != e || (e = "");
    return new oU(d, c, e)
}
function PU(a, b, c) {
    var d = [], e = NU(xR(b, a.k.Jv));
    zR(b, a.j.Au, function (a) {
        a = VU(this, a, c);
        null != a && d.push(a)
    }, a);
    return new mU(d, e)
}
function VU(a, b, c) {
    var d = SU(a, b), e = [], g = new UR, h;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.Du:
                break;
            case this.j.hk:
                g = bS(a, !0);
                break;
            case this.j.Cu:
                h = yR(a);
                break;
            case this.j.ru:
                yR(a);
                break;
            case this.j.ck:
                yR(a);
                break;
            case this.j.Fh:
            case this.j.Ih:
            case this.j.Dh:
                e.push(UU(this, a));
                break;
            default:
                throw uR(a);
        }
    }, a);
    return mb(e) ? null : zU(d, h, c, g, e)
}
function OU(a, b, c) {
    var d = new UR, e = {}, g = "", h = [], k, l = new ue, p = [], r = [], u, C = dS(xR(b, a.k.Pv));
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.jv:
                r = WU(this, a);
                break;
            case this.j.ck:
                e = TU(a);
                g = B(yR(a));
                break;
            case this.j.dk:
                u = BR(yR(a), 0);
                break;
            case this.j.hk:
                d = bS(a);
                break;
            case this.j.xv:
                p = XU(this, a);
                break;
            case this.j.Zv:
                a = YU(this, a);
                l = a.customClicks;
                k = a.clickThrough;
                h = a.clickTrackingUrls;
                break;
            default:
                throw uR(a);
        }
    }, a);
    D(h, function (a) {
        ZR(d, "click", a)
    });
    a = new sT(u, k, l, p, C, r);
    pT(a, g, e);
    a.j = c;
    d && (a.Cf = d);
    return a
}
function YU(a, b) {
    var c, d = [], e = new ue;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.yu:
                c = yR(a);
                break;
            case this.j.zu:
                a = yR(a);
                d.push(a);
                break;
            case this.j.Su:
                var b = xR(a, this.k.Eh);
                null != b || (b = "");
                var k = e.get(b, []);
                k.push(yR(a));
                e.set(b, k);
                break;
            default:
                throw uR(a);
        }
    }, a);
    return {clickThrough: c, clickTrackingUrls: d, customClicks: e}
}
function XU(a, b) {
    var c = [];
    zR(b, a.j.wv, function (a) {
        var b = xR(a, this.k.Uu), g = xR(a, this.k.bo);
        a.getAttribute(this.k.ik);
        var h = Wa(a.getAttribute(this.k.ek)), k = a.getAttribute(this.k.Ch), l = yR(a), p = AR(a.getAttribute(this.k.wu)), r = AR(a.getAttribute(this.k.zv));
        a = AR(a.getAttribute(this.k.vv));
        c.push(new PO(b, g, p, r, a, 0, h, l, k))
    }, a);
    return c
}
function WU(a, b) {
    var c = [];
    zR(b, a.j.iv, function (a) {
        a = ZU(this, a);
        null != a && c.push(a)
    }, a);
    return c
}
function ZU(a, b) {
    var c = b.getAttribute(a.k.Hv), d = xR(b, a.k.cw), e = xR(b, a.k.ew), g = Wa(b.getAttribute(a.k.ik)), h = Wa(b.getAttribute(a.k.ek)), g = new H(g, h), h = b.getAttribute(a.k.Ch), k = dS(xR(b, a.k.Gv)), l = b.getAttribute(a.k.dk), l = BR(l, -1), p = [], r = [], u;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.nv:
                r.push(yR(a));
                break;
            case this.j.kv:
                u = $U(this, a);
                break;
            case this.j.Fh:
            case this.j.Ih:
            case this.j.Dh:
                p.push(UU(this, a));
                break;
            default:
                throw uR(a);
        }
    }, a);
    return mb(p) ? null : CU(c, g, d, e, l, k, h, u, r, p)
}
function $U(a, b) {
    var c = [], d;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case this.j.lv:
                d = yR(a);
                break;
            case this.j.mv:
                c.push(yR(a));
                break;
            default:
                throw uR(a);
        }
    }, a);
    return {iconClickThrough: d, SK: c}
}
function TU(a) {
    a = yR(a);
    return null != a ? NR(a) : {}
}

function aV(a, b) {
    this.k = a;
    this.j = b
}
inherit(aV, tR);
aV.prototype.o = function () {
    return new DR(this.k, null, bV(this))
};
function cV(a) {
    var b = TB(a);
    return mb(b) ? [xR(a, "timeOffset")] : E(b, function (a) {
        return xR(a, "timeOffset")
    })
}
function bV(a) {
    var b = new HR;
    D(Ud(Vd(a.k)), function (a) {
        if ("vmap:AdBreak" == a.nodeName) {
            var d = dV(this, a);
            a = cV(a);
            D(a, function (a, c) {
                var h = BR(a);
                0 < c && (d = eV(this, d));
                if ("start" == a || 0 == h)
                    IR(b, d, 0);
                else if ("end" == a)
                    IR(b, d, -1);
                else {
                    if (-1 == h)
                        throw tK(NJ, null, "timeOffset", B(a));
                    IR(b, d, h)
                }
            }, this)
        }
    }, a);
    if (0 == b.j.Ha().length)
        throw tK(UJ);
    return b
}
function eV(a, b) {
    return E(b, function (a) {
        var b = new FR(a.o.clone());
        b.j = a.j;
        b.k = a.k;
        return b
    }, a)
}
function fV(a) {
    a = xR(a, "timeOffset");
    var b = BR(a);
    return "start" == a || 0 == b ? 0 : "end" == a || -1 == b ? -1 : 1E3 * b
}
function dV(a, b) {
    var c = [], d = "", e = null, g = !1, h = !1;
    D(Ud(b), function (a) {
        switch (a.nodeName) {
            case "vmap:AdSource":
                if (!e && (e = SB(a, "vmap:VASTData/VAST") || SB(a, "vmap:VASTAdData/VAST"), !e)) {
                    var b = wR(a, "vmap:AdTagURI"), c = "";
                    b.length && (c = B(yR(b[0])));
                    if (A(c))
                        throw tK(rK, null, a.parentNode.nodeName, a.nodeName);
                    d = c
                }
                break;
            case "vmap:Extensions":
                a = wR(a, "vmap:Extension"), a = gV(this, a), null != a && (g = !0, a = xR(a, "suppress_bumper"), h = null != a ? "true" == a : !0)
        }
    }, a);
    var k = null;
    e ? k = hV(a, e) : A(d) || (k = iV(a, d));
    k && (EK() && (k.jh = fV(b)),
        k = new FR(k), k.j = g, k.k = g && !h, ob(c, k));
    return c
}
function gV(a, b) {
    return F(b, function (a) {
        return "bumper" == xR(a, "type")
    }, a)
}
function iV(a, b) {
    var c = a.j.clone();
    A(c.adsResponse) || (c.adsResponse = "");
    c.adTagUrl = b;
    return c
}
function hV(a, b) {
    var c = a.j.clone();
    c.adsResponse = RB(b);
    c.adTagUrl = "";
    return c
}

function jV(a, b) {
    if (null != a) {
        var c;
        null != a ? (c = Vd(a), c = null != c && "Playlist" == c.nodeName):c = !1;
        if (c)
            return hR.getInstance().j = !1, new JR(a, b);
        null != a ? (c = Vd(a), c = null != c && "vmap:VMAP" == c.nodeName):c = !1;
        if (c)
            return hR.getInstance().j = !1, new aV(a, b);
        if (EU(a)) {
            if (!EU(a))
                throw tK(XJ);
            c = Vd(a);
            var d = FU(c);
            if (1 > d || 3 < d)
                throw tK(nK);
            c = wR(c, "Ad");
            if (mb(c))
                throw tK(bK);
            c = HU(c[0]);
            if (null == c)
                throw tK(eK);
            if (1 != wR(c, "AdSystem").length)
                throw tK(eK);
            return new DU(a)
        }
    }
    return null
}

function kV() {
}
f = kV.prototype;
f.clone = function () {
    var a = new kV;
    "auto" == this.Qe ? a.Qe = "auto" : "click" == this.Qe && (a.Qe = "click");
    a.adTagUrl = this.adTagUrl;
    a.je = $b(this.je);
    a.adsResponse = this.adsResponse;
    a.Kc = $b(this.Kc);
    a.wp = this.wp;
    a.isYouTube = this.isYouTube;
    a.location = this.location;
    a.referrer = this.referrer;
    a.lastActivity = this.lastActivity;
    a.language = this.language;
    a.linearAdSlotWidth = this.linearAdSlotWidth;
    a.linearAdSlotHeight = this.linearAdSlotHeight;
    a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
    a.nonLinearAdSlotHeight = this.nonLinearAdSlotHeight;
    a.oc = this.oc;
    a.tagForChildDirectedContent = this.tagForChildDirectedContent;
    a.fh = this.fh;
    a.Qm = this.Qm;
    a.youTubeAdType = this.youTubeAdType;
    a.youTubeExperimentIds = this.youTubeExperimentIds;
    a.jh = this.jh;
    a.ri = this.ri;
    this.j && (a.j = tb(this.j));
    return a
};
f.je = null;
f.Kc = null;
f.Qe = "unknown";
f.wp = !1;
f.isYouTube = !1;
f.linearAdSlotWidth = 0;
f.linearAdSlotHeight = 0;
f.nonLinearAdSlotWidth = 0;
f.nonLinearAdSlotHeight = 0;
f.oc = null;
f.tagForChildDirectedContent = !1;
f.fh = !1;
f.Qm = !0;
f.jh = 0;
f.Lo = !0;
f.ri = null;
function lV(a, b) {
    this.k = a;
    this.o = b;
    var c = a.j;
    EK() && c && PS(NS(), c, !1)
}
function mV(a, b) {
    "auto" != a.k.Qe && "click" != a.k.Qe || b.set("vpa", a.k.Qe)
}
function nV(a) {
    A(FK.getPlayerType()) || (a.set("mpt", FK.getPlayerType()), A("") || a.set("mpv", ""))
}
function oV(a, b) {
    var c = a.o.B;
    null != c && b.set("js", "ima-" + c)
}
function pV(a, b) {
    b.set("osd", 2);
    -1 != a.o.G && b.set("frm", a.o.G)
}
lV.prototype.F = function () {
    return this.A(this.C()).toString()
};
function qV(a) {
    return FK.j ? "h.3.0.0" : null != a.o ? vQ(a.o) : null
}
lV.prototype.B = function () {
    var a;
    a = 1;
    QK() && (a += 4);
    return a
};
function rV() {
    this.j = ["video"]
}
var sV = {gK: "ultrahigh", TH: "high", yv: "medium"}, tV = {
    KG: 1E3,
    LG: 1001,
    MG: 1002,
    NG: 1003,
    OG: 1004,
    PG: 1005,
    QG: 1006
}, uV = {uv: 1, cv: 2}, vV = {qH: "content", CJ: "site", DJ: "site_content"};
f = rV.prototype;
f.Kh = "high";
f.zl = !1;
f.jk = 1;
f.kk = null;
f.adType = "video";
f.adBlock = 1;
f.Al = null;
f.ok = !0;
f.pk = null;
f.Ik = null;
f.sg = null;
f.experimentIds = null;
f.Bl = null;
f.host = null;
f.hostTierId = null;
f.Cl = !1;
f.language = null;
f.Kp = null;
f.Jp = null;
f.Ai = 1E5;
f.Ji = null;
f.Mp = null;
f.Lp = null;
f.Zl = 0;
f.Af = null;
f.$i = null;
f.kj = null;
f.Rm = null;
f.tagForChildDirectedTreatment = -1;
f.url = null;
f.Bi = null;
f.Dl = null;
f.El = null;
f.ln = null;
f.gn = null;
f.hn = null;
f.jn = null;
f.wk = null;
var wV = (new Date).getTime();
var xV = [202, 1009], yV = ["[CONTENT_V]", "[CPN]", "[DISALLOW]", "[LACT]"];
function zV(a, b, c) {
    var d = {};
    a = new AV(a, n(b) ? b : null, n(c) ? c : null);
    BV(d, a);
    b = a.error;
    d["[ERRORCODE]"] = 1E3 > b.j ? b.j : 900;
    CV(d, a);
    DV(d, a);
    EV(d, a);
    b = a.error.getErrorCode();
    d["[ERROR_MSG]"] = a.error.getMessage();
    d["[IMA_ERROR]"] = b;
    d["[INTERNAL_ID]"] = "0";
    a = -1 != db(xV, b);
    d["[BLOCKING_ERROR]"] = a ? "1" : "0";
    d["[YT_ERROR_CODE]"] = 3;
    return d
}
function FV(a, b) {
    var c = {}, d = new AV(null, a, n(b) ? b : null);
    BV(c, d);
    CV(c, d);
    DV(c, d);
    EV(c, d);
    c["[BREAK_TYPE]"] = "0";
    c["[SLOT_POS]"] = "0";
    c["[MIDROLL_POS]"] = "0";
    if (null != d.j) {
        var e = d.j.o;
        null != e && null != e.je && null != e.je.video_start_delay ? (e = e.je.video_start_delay, 0 == e ? c["[BREAK_TYPE]"] = "1" : -1 == e ? c["[BREAK_TYPE]"] = "3" : (c["[BREAK_TYPE]"] = "2", c["[MIDROLL_POS]"] = e)
    ) :
        (e = d.j.B, c
        ["[BREAK_TYPE]"] = 0 == e.o ? "1" : -1 == e.o ? "3" : "2", c["[SLOT_POS]"] = e.k - 1, 0 < e.j && (c["[MIDROLL_POS]"] = Math.round(1E3 * e.j))
    )
    }
    GV(c, d);
    HV(c, d);
    d = a.oa;
    for (e = a; null != e;)
        d = e.ja + "," + d, e = e.k;
    c["[RWT]"] = d;
    return c
}
function AV(a, b, c) {
    this.error = a;
    this.j = b;
    this.display = c
}
function IV(a, b) {
    null != b && (a["[VIEWABILITY]"] = b);
    return a
}
function BV(a, b) {
    a["[CACHEBUSTING]"] = {
        toString: function () {
            return Math.round(1E8 * Math.random() + 1E8).toString().slice(1)
        }
    };
    a["[ASSETURI]"] = {
        toString: function () {
            return null != b.display ? b.display.getVideoUrl() : ""
        }
    }
}
function HV(a, b) {
    a["[AD_CPN]"] = {
        toString: function () {
            return b.display.qf()
        }
    };
    a["[AD_MT]"] = {
        toString: function () {
            return Math.round(Math.max(0, 1E3 * b.display.getCurrentTime())).toString()
        }
    };
    var c = b.j.B;
    0 < c.j && (a["[MIDROLL_POS]"] = Math.round(1E3 * c.j));
    a["[MT]"] = {
        toString: function () {
            if (IT(b.j)) {
                var a = b.j.B;
                return 0 < a.j ? Math.round(1E3 * a.j).toString() : "0"
            }
            return b.display ? Math.round(Math.max(0, 1E3 * b.display.getCurrentTime())).toString() : "0"
        }
    };
    a["[P_W]"] = {
        toString: function () {
            return null != b.display && null != b.display.bd() ?
                b.display.bd().width.toString() : ""
        }
    };
    a["[P_H]"] = {
        toString: function () {
            return null != b.display && null != b.display.bd() ? b.display.bd().height.toString() : ""
        }
    }
}
function CV(a, b) {
    a["[SDKV]"] = FK.j ? "h.3.0.0" : "h.0.0.0";
    a["[EL]"] = "adunit";
    a["[CONN]"] = "0";
    null != b.j && (a["[VIEWABILITY]"] = {
        toString: function () {
            var a;
            FK.j ? (a = uO(), a = yO(a, "metric", b.j.R)): (pR(), a = "");
            return a
        }
    });
    a["[VIS]"] = "0";
    a["[WT]"] = {
        toString: function () {
            return Date.now()
        }
    }
}
function DV(a, b) {
    if (null != b.j && null != b.j.o && null != b.j.o.Kc && EK()) {
        var c = b.j.o.Kc;
        D(yV, function (b) {
            b in c && (a[b] = c[b])
        })
    }
}
function EV(a, b) {
    if (null != b.j) {
        a["[AD_ID]"] = VT(b.j);
        a["[AD_SYS]"] = XT(b.j);
        a["[AD_V]"] = {
            toString: function () {
                return null != b.display ? MO(b.display.getVideoUrl()) : ""
            }
        };
        a["[FORMAT_NAMESPACE]"] = "0";
        a["[FORMAT_TYPE]"] = "0";
        a["[FORMAT_SUBTYPE]"] = "0";
        var c = [];
        try {
            c = JT(b.j).split("_")
        } catch (d) {
        }
        1 <= c.length && (a["[FORMAT_NAMESPACE]"] = c[0]);
        2 <= c.length && (a["[FORMAT_TYPE]"] = c[1]);
        3 <= c.length && (a["[FORMAT_SUBTYPE]"] = c[2])
    }
}
function GV(a, b) {
    null != b.j && (a["[AD_LEN]"] = {
        toString: function () {
            var a = iU(b.j);
            return 0 > a ? "-1" : Math.round(1E3 * a).toString()
        }
    }, a["[VOL]"] = {
        toString: function () {
            return null != b.display ? Math.round(100 * b.display.ed()).toString() : ""
        }
    })
}

var JV = {
    fv: "flash",
    Rn: "image",
    HJ: "skippablevideo",
    JJ: "standardvideo",
    LJ: "staticimage",
    TEXT: "text",
    VIDEO: "video"
}, KV = ["flash", "image", "staticimage"], LV = [new H(200, 200), new H(250, 250), new H(300, 250), new H(336, 280), new H(450, 50), new H(468, 60), new H(480, 70), new H(728, 90)];
function MV(a, b) {
    var c = null != b.linearAdSlotHeight ? b.linearAdSlotHeight : 0, d = null != b.nonLinearAdSlotHeight ? b.nonLinearAdSlotHeight : 0;
    a.set("sz", Math.max(null != b.linearAdSlotWidth ? b.nonLinearAdSlotWidth : 0, null != b.nonLinearAdSlotWidth ? b.nonLinearAdSlotWidth : 0) + "x" + Math.max(c, d))
}
function NV(a) {
    var b = {};
    b.u_tz = -(new Date).getTimezoneOffset();
    var c;
    var d = window;
    try {
        c = d.history.length
    } catch (e) {
        c = 0
    }
    b.u_his = c;
    b.u_java = navigator.javaEnabled();
    window.screen && (b.u_h = window.screen.height, b.u_w = window.screen.width, b.u_ah = window.screen.availHeight, b.u_aw = window.screen.availWidth, b.u_cd = window.screen.colorDepth);
    navigator.plugins && (b.u_nplug = navigator.plugins.length);
    navigator.mimeTypes && (b.u_nmime = navigator.mimeTypes.length);
    for (var g in b)
        a.set(g, b[g]);
    a.set("dt", wV)
}
function OV(a) {
    if (a.Kc && a.Kc["[LACT]"]) {
        var b = a.Kc["[LACT]"].toString();
        if (b)
            return Za(b)
    }
    return a.lastActivity
}
function PV(a, b, c) {
    var d = new ue;
    d.set("ad_type", b.adType);
    VL && d.set("flash", WL);
    MV(d, a);
    QV(b) && (d.set("ea", "0"), null != a.nonLinearAdSlotWidth && null != a.nonLinearAdSlotHeight && d.set("image_size", RV(b, a.nonLinearAdSlotWidth, a.nonLinearAdSlotHeight)));
    SV(d, c);
    d.set("lact", OV(a));
    d.set("videoad_start_delay", a.jh);
    NV(d);
    TV(a, d, !0);
    return d
}
function TV(a, b, c) {
    A(B(a.referrer)) || (a = a.referrer, c && (a = ya(a)), UV("ref", a, b))
}
function VV(a, b) {
    var c = null != b ? b.split("_") : a;
    D(c, function (a) {
        if (!Ob(JV, a))
            throw tK(TJ, null, "ad_type", String(b));
    });
    if (!QK()) {
        var d = [];
        D(c, function (a) {
            "video" == a ? d.push("standardvideo") : "skippablevideo" != a && d.push(a)
        });
        if (0 == d.length)
            throw tK(SJ, null, "skippablevideo");
        return d
    }
    return c
}
function WV(a, b) {
    return null != b ? b.split(/[+, ]/) : a
}
function RV(a, b, c) {
    a.o && (c = Math.min(c, 90));
    var d = [];
    D(LV, function (a) {
        b >= a.width && c >= a.height && d.push(a.width + "x" + a.height)
    });
    return d.join(",")
}
function XV(a, b) {
    return null == b || isNaN(b) ? a : Number(b)
}
function YV(a, b) {
    return null != b ? String(b) : null != a ? a : null
}
function ZV(a, b) {
    if (null == b)
        return a;
    switch (b.toLowerCase()) {
        case "true":
        case "1":
            return !0;
        case "false":
        case "0":
            return !1
    }
    return a
}
function $V(a, b, c) {
    return null != b && Ob(c, b) ? b : a
}
function QV(a) {
    return hb(KV, function (b) {
        return G(a.j, b)
    })
}
function SV(a, b) {
    VL ? a.set("ca_type", "flash") : a.set("ca_type", "image");
    if (null != b) {
        var c = b.o;
        null != c && 0 < c.length && (c = c[0].B, 0 < c.length && (a.set("ca_w", c[0].width), a.set("ca_h", c[0].height)))
    }
}
function UV(a, b, c) {
    null != b && c.set(a, b)
}

function aW(a, b, c) {
    lV.call(this, a, b);
    b = new rV;
    a = nf(new J(a.adTagUrl));
    b.Al = $V(b.Al, a.get("cust_age"), tV);
    b.Kh = $V(b.Kh, a.get("adsafe"), sV);
    b.j = VV(b.j, a.get("ad_type"));
    b.adType = b.j.join("_");
    b.jk = XV(b.jk, a.get("videoad_start_delay"));
    b.kk = YV(b.kk, a.get("slotname"));
    b.zl = ZV(b.zl, a.get("adtest"));
    b.ok = ZV(b.ok, a.get("scs"));
    b.pk = YV(b.pk, a.get("alternate_ad_url"));
    b.channels = WV(b.channels, a.get("channel"));
    b.Ik = XV(b.Ik, a.get("cpm"));
    b.sg = YV(b.sg, a.get("description_url"));
    b.experimentIds = YV(b.experimentIds,
        a.get("eid"));
    b.Bl = $V(b.Bl, a.get("cust_gender"), uV);
    b.o = ZV(b.o, a.get("overlay"));
    b.host = YV(b.host, a.get("host"));
    b.k = WV(b.k, a.get("h_ch"));
    b.hostTierId = XV(b.hostTierId, a.get("ht_id"));
    b.Cl = ZV(b.Cl, a.get("lsv"));
    var d;
    null != this.k.language ? d = this.k.language : (d = m.navigator || null, d = CK(d.language || d.userLanguage || d.browserLanguage || d.systemLanguage || ""));
    var e = null != a.get("hl") ? String(a.get("hl")) : null;
    d = YV(e, d);
    var g;
    null != d && !A(B(d)) && (g = CK(d));
    b.language = YV(b.language, g);
    b.Kp = XV(b.Kp, a.get("linearAdSlotWidth"));
    b.Jp = XV(b.Jp, a.get("linearAdSlotHeight"));
    b.Ai = XV(b.Ai, a.get("max_ad_duration"));
    b.Zl = XV(b.Zl, a.get("min_ad_duration"));
    b.Ji = XV(b.Ji, a.get("sdmax"));
    b.Mp = XV(b.Mp, a.get("nonLinearAdSlotWidth"));
    b.Lp = XV(b.Lp, a.get("nonLinearAdSlotHeight"));
    b.Af = YV(b.Af, a.get("client"));
    b.$i = YV(b.$i, a.get("t_pyv"));
    b.kj = XV(b.kj, a.get("sdki"));
    b.tagForChildDirectedTreatment = XV(b.tagForChildDirectedTreatment, a.get("tfcd"));
    b.Rm = $V(b.Rm, a.get("targeting"), vV);
    b.Bi = XV(b.Bi, a.get("video_format"));
    b.Dl = XV(b.Dl, a.get("video_cpm"));
    b.El = YV(b.El, a.get("loeid"));
    b.ln = YV(b.ln, a.get("yt_pt"));
    b.gn = YV(b.gn, a.get("ytdevice"));
    b.hn = YV(b.hn, a.get("ytdevicever"));
    b.jn = YV(b.jn, a.get("dbp"));
    b.A = YV(b.A, a.get("ms"));
    b.adBlock = XV(b.adBlock, a.get("adBlock"));
    b.url = YV(b.url, a.get("url"));
    b.wk = YV(b.wk, a.get("avo"));
    this.j = b;
    this.G = c;
    A(B(this.j.experimentIds)) || (c = this.j.experimentIds.split(","), PS(NS(), c))
}
inherit(aW, lV);
var bW = ["skippablevideo", "standardvideo", "video"];
aW.prototype.D = {pu: "allow", Wu: "exclude", pJ: "require"};
aW.prototype.B = function () {
    var a = aW.J.B.call(this);
    this.j.kj && (a += this.j.kj & 2);
    return a
};
aW.prototype.A = function (a) {
    var b = new J("//googleads.g.doubleclick.net/pagead/ads"), c = a.Ha();
    D(c, function (c) {
        K(b, c, a.get(c))
    });
    return b
};
aW.prototype.C = function () {
    var a = new ue;
    a.set("sdkv", qV(this));
    a.set("sdki", this.B().toString(16));
    a.set("video_product_type", null != this.j.Af ? EK() ? 5 : va(this.j.Af, "ca-games-") ? 4 : va(this.j.Af, "ca-video-") ? 0 : -1 : -1);
    a.set("correlator", this.o.j);
    a.set("client", this.j.Af);
    EK() && !A(B(this.j.url)) ? a.set("url", this.j.url) : a.set("url", this.k.location ? this.k.location : this.k.referrer);
    null != this.k.oc && a.set("adk", this.k.oc);
    a.set("num_ads", cW(this));
    a.set("channel", dW(this));
    a.set("ad_type", this.j.adType);
    QS(41351020) ?
        a.set("output", "xml_vast3") : a.set("output", "xml_vast2");
    this.j.zl && a.set("adtest", "on");
    VL && a.set("flash", WL);
    UV("alternate_ad_url", this.j.pk, a);
    UV("cpm", this.j.Ik, a);
    MV(a, this.k);
    EK() || Ob(sV, this.j.Kh) && a.set("adsafe", this.j.Kh);
    this.j.host && (a.set("host", this.j.host), UV("ht_id", this.j.hostTierId, a), null != this.j.k && UV("h_ch", this.j.k.join("+"), a));
    UV("hl", this.j.language, a);
    UV("cust_age", this.j.Al, a);
    UV("cust_gender", this.j.Bl, a);
    -1 != this.j.tagForChildDirectedTreatment && UV("tfcd", this.j.tagForChildDirectedTreatment,
        a);
    UV("slotname", this.j.kk, a);
    var b = RS(NS());
    A(B(b)) || a.set("eid", b);
    NV(a);
    b = this.j.sg;
    if (null != b) {
        var c;
        c = this.o;
        null == c.o && (c.o = new lQ);
        c = c.o;
        var d;
        null != b && c.k != b ? (c.j = 1, c.k = b) : c.j = null != b ? c.j + 1 : 1;
        d = c.j;
        1 != d && a.set("ad_block", d);
        d = this.o;
        null == d.K && (d.K = new rQ);
        d = d.K;
        var e = b != this.o.M;
        (c = 0 == c.j % 100 || e) || (c = 36E5 < (null === d.j ? 0 : (new oQ).getTime() - d.j));
        c && (d.j = null, d.k = null);
        this.o.M = b;
        b = d.k;
        null !== b && a.set("tok", b)
    }
    a.set("unviewed_position_start", "1");
    b = this.j.jk;
    a.set("videoad_start_delay", null !=
    b ? b : 1);
    oV(this, a);
    pV(this, a);
    mV(this, a);
    QV(this.j) && (a.set("ea", "0"), null != this.k.nonLinearAdSlotWidth && null != this.k.nonLinearAdSlotHeight && a.set("image_size", RV(this.j, this.k.nonLinearAdSlotWidth, this.k.nonLinearAdSlotHeight)));
    eW(this) && a.set("video_format", null != this.j.Bi && EK() ? this.j.Bi : Th && 0 <= Sa(au, 6) || Ph && 0 <= Sa(au, 4) || id && NK(JK, 2.3) ? 43 : 18);
    b = null != this.j.$i ? this.j.$i : G(this.j.adType.split("_"), "text") ? this.D.pu : this.D.Wu;
    a.set("t_pyv", b);
    UV("min_ad_duration", this.j.Zl, a);
    0 < this.j.Ai && a.set("max_ad_duration",
        fW(this.j.Ai, cW(this)));
    0 < this.j.Ji && a.set("sdmax", fW(this.j.Ji, cW(this)));
    SV(a, this.G);
    EK() && (b = MO(this.j.sg), null != b && a.set("video_doc_id", "yt_" + b));
    UV("description_url", this.j.sg, a);
    EK() && (UV("lact", OV(this.k), a), UV("loeid", this.j.El, a), UV("lsv", this.j.Cl, a), this.j.ok || UV("scs", "false", a), UV("targeting", this.j.Rm, a), UV("video_cpm", this.j.Dl, a), UV("yt_pt", this.j.ln, a), UV("ytdevice", this.j.gn, a), UV("ytdevicever", this.j.hn, a), UV("dbp", this.j.jn, a), UV("avo", this.j.wk, a));
    UV("ms", this.j.A, a);
    nV(a);
    TV(this.k, a, !1);
    null != this.k.je && UV("loc", this.k.je.page_location, a);
    return a
};
function eW(a) {
    return hb(bW, function (a) {
        return G(this.j.j, a)
    }, a)
}
function cW(a) {
    return EK() ? 1 : G(a.j.adType.split("_"), "text") ? 3 : 1
}
function dW(a) {
    a = a.j.channels ? a.j.channels : [];
    xb(a);
    a = wb(a, 0, 30);
    return a.join("+")
}
function fW(a, b) {
    return Math.round(1.1 * (a || 0) + 0 * b)
}

function gW(a, b) {
    lV.call(this, a, b)
}
inherit(gW, lV);
gW.prototype.A = function (a) {
    var b = new J(this.k.adTagUrl);
    D(a.Ha(), function (c) {
        A(a.get(c)) ? b.j.remove(c) : K(b, c, a.get(c))
    });
    return b
};
gW.prototype.C = function () {
    var a = new ue;
    a.set("sdkv", qV(this));
    pV(this, a);
    mV(this, a);
    nV(a);
    null != this.k.oc && a.set("adk", this.k.oc);
    return a
};
function hW(a, b) {
    lV.call(this, a, b)
}
inherit(hW, lV);
hW.prototype.C = function () {
    return null
};
hW.prototype.A = function () {
    var a = new cT(this.k.adTagUrl), b = qV(this);
    b && gT(a, "dc_sdkv", [b]);
    (b = this.B().toString(16)) && gT(a, "dc_sdki", [b]);
    (b = this.o.F) && gT(a, "dc_submodel", [b]);
    null != this.k.oc && gT(a, "dc_adk", [this.k.oc]);
    b = new ue;
    oV(this, b);
    pV(this, b);
    mV(this, b);
    nV(b);
    we(b, "js") && gT(a, "dc_js", [b.get("js")]);
    we(b, "msid") && gT(a, "dc_msid", [b.get("msid")]);
    we(b, "frm") && gT(a, "dc_frm", [b.get("frm")]);
    we(b, "osd") && (gT(a, "osd", [b.get("osd")]), gT(a, "dc_osd", [b.get("osd")]));
    gT(a, "dcmt", ["text/xml"]);
    we(b, "vpa") &&
    gT(a, "vpa", [b.get("vpa")]);
    we(b, "mpt") && gT(a, "mpt", [b.get("mpt")]);
    we(b, "mpv") && gT(a, "mpv", [b.get("mpv")]);
    return a
};
function iW(a) {
    lV.call(this, a, null)
}
inherit(iW, lV);
iW.prototype.A = function (a) {
    return new J(a.get("adTagUrl"))
};
iW.prototype.F = function () {
    return B(this.C().get("adTagUrl"))
};
iW.prototype.C = function () {
    var a = new ue;
    a.set("adTagUrl", this.k.adTagUrl);
    a.set("adsResponse", this.k.adsResponse);
    return a
};
function jW(a) {
    lV.call(this, a, null)
}
inherit(jW, lV);
jW.prototype.A = function (a) {
    return new J(a.get("adTagUrl"))
};
jW.prototype.C = function () {
    var a = new ue;
    a.set("adTagUrl", this.k.adTagUrl);
    a.set("adsResponse", this.k.adsResponse);
    return a
};
function kW(a, b) {
    lV.call(this, a, b)
}
inherit(kW, lV);
kW.prototype.A = function (a) {
    var b = new J(this.k.adTagUrl);
    D(a.Ha(), function (c) {
        A(a.get(c)) ? b.j.remove(c) : K(b, c, a.get(c))
    });
    return b
};
kW.prototype.C = function () {
    var a = new ue;
    a.set("sdkv", qV(this));
    a.set("sdki", this.B().toString(16));
    a.set("correlator", this.o.C);
    a.set("scor", this.o.j);
    null != this.k.oc && a.set("adk", this.k.oc);
    oV(this, a);
    pV(this, a);
    mV(this, a);
    nV(a);
    var b = this.o.k;
    null != b && (this.o.k = null, a.set("fbidx", b));
    b = this.o.P;
    null != b && a.set("ppid", b);
    var b = "null", c = this.o.A;
    null != c ? b = c : lW(this.k.location) ? b = this.k.location : lW(this.k.referrer) && (b = this.k.referrer);
    a.set("url", b);
    b = this.o.F;
    null != b && a.set("submodel", b);
    b = this.o.D;
    null != b && (b = mW(b), a.set("ciu_szs", b));
    a.set("impl", "");
    return a
};
function lW(a) {
    if (A(B(a)))
        return !1;
    a = new J(a);
    if (!a.Ib || "http" != a.Ib && "https" != a.Ib)
        return !1;
    a = a.mb;
    return -1 == a.indexOf(".") || a.match(/^[\.0-9]*$/) ? !1 : !0
}
function mW(a) {
    var b = [];
    D(a, function (a) {
        0 < a.length && b.push(E(a, function (a) {
            return a.width + "x" + a.height
        }).join("|"))
    });
    return b.join(",")
}

function nW(a, b, c) {
    lV.call(this, a, b);
    this.G = A(B(a.youTubeAdType));
    a = new rV;
    a.j = VV(a.j, this.k.youTubeAdType);
    a.adType = a.j.join("_");
    a.experimentIds = YV(a.experimentIds, this.k.youTubeExperimentIds);
    this.j = a;
    this.D = c;
    A(B(this.j.experimentIds)) || (c = this.j.experimentIds.split(","), PS(NS(), c))
}
inherit(nW, kW);
nW.prototype.A = function (a) {
    a = nW.J.A.call(this, a);
    this.G || oW(this, a);
    return a
};
function pW(a) {
    var b = PV(a.k, a.j, a.D);
    b.set("sdkv", qV(a));
    b.set("sdki", a.B().toString(16));
    return b
}
function oW(a, b) {
    var c = pW(a), d = E(c.Ha(), function (a) {
        var b = c.get(a);
        return a + "=" + (null != b ? b : "")
    });
    K(b, "afvparams", d.join("&"))
}

function qW(a, b, c) {
    lV.call(this, a, b);
    this.G = A(B(a.youTubeAdType));
    a = new rV;
    a.j = VV(a.j, this.k.youTubeAdType);
    a.adType = a.j.join("_");
    a.experimentIds = YV(a.experimentIds, this.k.youTubeExperimentIds);
    this.j = a;
    this.D = c;
    A(B(this.j.experimentIds)) || (c = this.j.experimentIds.split(","), PS(NS(), c))
}
inherit(qW, hW);
qW.prototype.A = function (a) {
    a = qW.J.A.call(this, a);
    this.G || rW(this, a);
    return a
};
function sW(a) {
    var b = PV(a.k, a.j, a.D);
    b.set("sdkv", qV(a));
    b.set("sdki", a.B().toString(16));
    return b
}
function rW(a, b) {
    var c = sW(a), d = E(c.Ha(), function (a) {
        var b = c.get(a);
        return a + "=" + (null != b ? b : "")
    });
    gT(b, "afvparams", [ya(d.join("&"))])
}

function tW(a, b) {
    var c;
    !lT(a) && !mT(a) || A(B(a.youTubeAdType)) || null == a.adTagUrl || -1 == a.adTagUrl.search("afvbase=") ? lT(a) ? c = new hW(a, uQ) : iT(a) ? c = new aW(a, uQ, b) : mT(a) ? c = new kW(a, uQ) : kT(a) ? c = new gW(a, uQ) : (c = a.adTagUrl, null != c ? (c = kf(new J(c)), c = wa(c, ".fwmrm.net")):c = !1, c = c ? new iW(a) : new jW(a)
) :
    c = lT(a) ? new qW(a, uQ, b) : new nW(a, uQ, b);
    return c
}

function uW(a) {
    a = fb(a, function (a) {
        return 0 < $T(a)
    });
    Ab(a, function (a, c) {
        return $T(a) - $T(c)
    });
    return a
}
function vW(a) {
    return fb(a, function (a) {
        return -1 == $T(a)
    })
}

function wW(a) {
    this.j = a
}

function xW() {
    this.j = 0
}
function yW(a, b, c, d, e, g) {
    var h = x(function (a) {
        d(a, Error(tn(a)))
    }, a), k = x(function (a) {
        6 == a ? zW(this, b, !1, c, h, e, g) : h(a)
    }, a);
    zW(a, b, !0, c, k, e, g)
}
function zW(a, b, c, d, e, g, h) {
    var k = new bo;
    k.O = c;
    fo(k, AW(g));
    var l = new mn, p = x(function () {
        l.dispose();
        k.dispose()
    }, a);
    c = x(function () {
        e(k.k);
        p()
    }, a);
    sn(l, k, "success", function () {
        var a;
        try {
            a = k.j ? k.j.responseXML : null
        } catch (b) {
            a = null
        }
        if (null == a) {
            var c = In(k);
            try {
                a = PB(c)
            } catch (e) {
                t: if (document.implementation && document.implementation.createDocument)
                    a = document.implementation.createDocument("", "parsererror", null);
                else {
                    if ("undefined" != typeof ActiveXObject && (a = QB())) {
                        a.appendChild(a.createNode(1, "parsererror", ""));
                        break t
                    }
                    throw Error("Your browser does not support creating new documents");
                }
            }
        }
        d(a);
        p()
    }, a);
    sn(l, k, ["error", "timeout"], c, a);
    var r;
    "POST" == h && (b = new J(b), r = b.j.toString(), bf(b, ""), b = b.toString());
    a.j = y();
    k.send(DJ(b), h, r)
}

function BW(a, b, c) {
    var d = null, e = c + b;
    D(a.A, function (g) {
        if ("true" != g.F.rm || gU(a, tJ)) {
            var h;
            if (h = g instanceof xT)
                0 == c && 0 == b || g instanceof vU ? h = !0 : (h = g.xc(), h = h.width <= b && h.height <= c);
            if (h && (h = 0 == c && 0 == b ? 0 : c - g.xc().height + b - g.xc().width, "Flash" != g.getContentType() || VL))
                if (null == d)
                    d = g, e = h;
                else if (h == e && g.j < d.j || h < e)
                    d = g, e = h
        } else
            h = FV(a), JJ(PT(a), h), (h = a.o) && h.adTagUrl && -1 != h.adTagUrl.indexOf(";afc=1") && (d = g)
    });
    RT(a, d)
}
function CW(a) {
    var b = null;
    D(a.A, function (a) {
        a instanceof sT && (null === b || a.j < b.j) && (b = a)
    });
    RT(a, b)
}

function DW(a, b, c, d) {
    this.A = a;
    this.G = b;
    this.ads = 0 < this.A.length ? this.A : this.G;
    this.C = c;
    this.B = this.I = !0;
    this.k = -1;
    this.j = null;
    this.D = 0;
    this.M = d;
    this.logger = null
}
DW.prototype.$c = function () {
    return null != this.j && this.j.$c() ? !0 : 0 < this.ads.length && this.k < this.ads.length - 1
};
function EW(a, b, c) {
    null != a.j ? FW(a, b, c) : a.$c() ? GW(a, b, x(function (a) {
        this.$c() && 301 != a.getErrorCode() ? EW(this, b, c) : c(a)
    }, a)) : c(new dJ("adLoadError", "The ad source contains no more ads.", 1005))
}
DW.prototype.H = function (a, b) {
    return this.B ? 0 < a.length ? a : b : wb(b, 0, 1)
};
DW.prototype.o = function (a, b, c) {
    var d;
    if (!(d = null != a.j)) {
        var e = this.C;
        d = e.nonLinearAdSlotWidth || 0;
        e = e.nonLinearAdSlotHeight || 0;
        bU(a) && !a.G ? aU(a, "nonlinear") ? BW(a, d, e) : CW(a) : aU(a, "linear") ? CW(a) : aU(a, "nonlinear") && BW(a, d, e);
        d = null != a.j
    }
    d ? (this.D++, b(a)) : (b = mb(a.A) ? tK(eK) : IT(a) ? tK($J) : tK(hK), d = zV(b, a), JJ
    (a.P, d), c(b)
    )
};
DW.prototype.F = function (a, b, c) {
    var d = this.C.clone();
    d.adsResponse = "";
    d.adTagUrl = a.Ea;
    d.oc = iQ(d.adTagUrl, d.linearAdSlotWidth, d.linearAdSlotHeight, d.nonLinearAdSlotWidth, d.nonLinearAdSlotHeight, d.ri);
    HW(this, a, d, b, c)
};
function IW(a, b, c, d) {
    var e = a.C.clone();
    e.adsResponse = "";
    e.adTagUrl = b.Ia;
    HW(a, b, e, c, d)
}
function HW(a, b, c, d, e) {
    var g = b.getExtension("LocalRedirect");
    null != g && (g = g.k, null != g && (c.adsResponse = g));
    a.M.o(c, x(function (a) {
        if (a instanceof DW) {
            var c = this.B && b.va, g = b.xa, p;
            for (p in a.ads)
                a.ads[p].k = b;
            a.B = c;
            a.ads = a.H(a.A, a.G);
            a.k = -1;
            a.I = g;
            d(a)
        } else
            a instanceof wW ? e(new dJ("adLoadError", "Ad source cannot contain playlist response.", 2)) : e(new dJ("adLoadError", "Unknown ad source.", 2))
    }, a), e)
}
function JW(a) {
    var b = 0;
    for (a = a.k; null != a;)
        a = a.k, b++;
    return b
}
function FW(a, b, c) {
    a.j.$c() ? EW(a.j, x(function (a) {
        this.o(a, b, x(function (a) {
            this.$c() ? EW(this, b, c) : c(a)
        }, this))
    }, a), x(function (a) {
        KW(this.ads[this.k], a);
        this.j = null;
        301 == a.getErrorCode() ? c(a) : this.$c() ? EW(this, b, c) : c(a)
    }, a)) : (0 == a.j.D && KW(a.ads[a.k], tK(pK)), a.j = null, EW(a, b, c))
}
function KW(a, b) {
    1012 == b.getErrorCode() && (b = tK(gK));
    var c = zV(b, a);
    JJ(a.P, c)
}
function GW(a, b, c) {
    a.k++;
    var d = a.ads[a.k];
    d.G || d.F ? d.F ? IW(a, d, x(function (a) {
        this.j = a;
        EW(this, b, c)
    }, a), x(function (a) {
        a = LW(a);
        KW(d, a);
        c(a)
    }, a)) : 4 <= JW(d) ? (a = tK(iK, null, "4"), KW(d, a), c(a)
) :
    a.I ? a.F(d, x(function (a) {
        this.j = a;
        EW(this, b, c)
    }, a), x(function (a) {
        a = LW(a);
        KW(d, a);
        c(a)
    }, a)) : c(tK(oK))
:
    a.o(d, b, c)
}
function LW(a) {
    switch (a.getErrorCode()) {
        case 300:
        case 301:
        case 302:
        case 303:
        case 200:
        case 1012:
            break;
        default:
            a = tK(pK)
    }
    return a
}

function MW(a, b, c, d) {
    DW.call(this, [], a, b, c);
    this.K = d
}
inherit(MW, DW);
MW.prototype.$c = function () {
    return null != this.j && this.j.$c() ? !0 : 0 < this.ads.length && this.k < this.ads.length - 1 && 0 == this.D
};
MW.prototype.H = function (a, b) {
    return b
};
MW.prototype.o = function (a, b, c) {
    var d = -1, d = null == this.j ? ZT(a) : ZT(this.ads[this.k]);
    this.K.k = d;
    MW.J.o.call(this, a, b, c)
};
MW.prototype.F = function (a, b, c) {
    this.K.k = -1;
    MW.J.F.call(this, a, b, c)
};
function NW(a, b, c, d, e) {
    this.C = a;
    this.A = b;
    this.B = c;
    this.j = d;
    this.vb = e
}
NW.prototype.o = function (a, b, c) {
    A(B(a.adsResponse)) ? mT(a) && null != this.j && !this.j.D ? this.j.start(a, x(function () {
        OW(this, a, b, c)
    }, this)) : OW(this, a, b, c) : PW(this, a, b, c)
};
function PW(a, b, c, d) {
    var e;
    try {
        e = PB(b.adsResponse)
    } catch (g) {
        d(tK(XJ, g));
        return
    }
    null != e ? QW(a, e, b, c, d) : d(tK(XJ))
}
function OW(a, b, c, d) {
    var e;
    if (e = null != b.adTagUrl) {
        t: {
            try {
                za(b.adTagUrl)
            } catch (g) {
                e = !1;
                break t
            }
            e = !0
        }
        e = !e
    }
    e ? d(tK(RJ, null, b.adTagUrl)) : FK.A ? rR(pR(), x(a.k, a, b, c, d)) : a.k(b, c, d)
}
NW.prototype.k = function (a, b, c, d) {
    var e = tW(a, this.B).F(), e = IJ(e, d, !0);
    d = a.fh && BJ(AJ, e) ? "POST" : "GET";
    yW(this.A, e, x(function (d) {
        QW(this, d, a, b, c)
    }, this), x(function (b, d) {
        var e;
        e = 8 == b ? tK(dK) : 5 == b || 6 == b ? tK(MJ) : tK(QJ, d);
        c(e);
        e = "third_party";
        iT(a) ? e = "adsense" : lT(a) ? e = "dart" : mT(a) && (e = "xfp");
        e = {rt: e, ec: b};
        SK(RK.getInstance(), 18, e, !0)
    }, this), this.vb, d);
    RW(a)
};
function RW(a) {
    var b = "third_party";
    iT(a) ? b = "adsense" : lT(a) ? b = "dart" : mT(a) ? b = "xfp" : kT(a) && (b = "dbm");
    a = {rt: b};
    SK(RK.getInstance(), 17, a, !0)
}
function QW(a, b, c, d, e) {
    var g;
    try {
        var h = jV(b, c);
        if (!h)
            throw tK(XJ);
        g = h.o();
        SW(a, g, c, d)
    } catch (k) {
        k instanceof dJ ? e(k) : e(tK(YJ, k))
    }
}
function SW(a, b, c, d) {
    var e = b.j;
    if (null != e)
        d(new wW(e));
    else {
        var g = b.o;
        if (null == g)
            throw tK(bK);
        D(g, function (a) {
            a.o = c;
            a.ja = this.A.j;
            EK() && (a.pa = b.k)
        }, a);
        e = uW(g);
        g = vW(g);
        0 < g.length && 0 <= ZT(g[0]) ? d(new MW(g, c, a, a.C)) : d(new DW(e, g, c, a))
    }
}

function TW() {
    this.j = 8E3 + y()
}
function AW(a) {
    var b = y();
    a = a.j - b;
    return 0 < a ? a : 0
}

function UW(a, b) {
    this.j = a;
    this.k = b;
    FK.j && uO().init();
    var c;
    t: {
        try {
            c = window.top.location.href
        } catch (d) {
            c = 2;
            break t
        }
        c = null != c ? c == window.document.location.href ? 0 : 1 : 2
    }
    uQ.G = c
}
function VW(a, b, c, d) {
    var e = null;
    null != a.j && (e = new jR(1E3, a.j, a.k));
    (new NW(a.k, new xW, a.j, e, new TW)).o(b, x(function (a) {
        a instanceof wW ? c(a) : WW(this, a, c, d)
    }, a), d)
}
function WW(a, b, c, d) {
    var e = [], g = x(function (a, b) {
        a.$c() ? EW(a, x(function (b) {
            e.push(b);
            g(a, null)
        }, this), x(function (b) {
            301 == b.getErrorCode() ? d(tK(dK)) : g(a, b)
        }, this)) : 0 < e.length ? c(e) : (null == b && (b = tK(UJ)), 1012 == b.getErrorCode() && (b = tK(gK)), d(b))
    }, a);
    g(b, null)
}

function XW(a) {
    this.k = a;
    this.j = new No
}
function YW(a, b, c, d) {
    var e = x(function (a) {
        c(a);
        Qo(this.j);
        ZW(this)
    }, a), g = x(function (a) {
        d(a);
        Qo(this.j);
        ZW(this)
    }, a);
    Po(a.j, x(function () {
        VW(this.k, b, e, g)
    }, a));
    ZW(a)
}
function ZW(a) {
    1 == a.j.Pa() ? (a = a.j, Oo(a), a = bb(a.j), null != a && a()
) :
    a.j.Pa()
}

function $W(a, b, c) {
    U.call(this);
    this.A = new XW(new UW(b, c));
    this.B = a;
    this.k = b;
    this.j = !0;
    this.o = c
}
inherit($W, U);
function aX(a, b, c) {
    if (a.j) {
        var d = null != c ? c : {};
        hR.getInstance().end("rtr");
        hR.getInstance().start("vl");
        YW(a.A, b, x(function (a) {
            bX(this, a, d)
        }, a), x(function (a) {
            cX(this, a, d)
        }, a))
    }
}
function dX(a, b, c) {
    if (!a.j) {
        var d = null != c ? c : {};
        YW(a.A, b, x(function (a) {
            bX(this, a, d)
        }, a), x(function (a) {
            cX(this, a, d)
        }, a))
    }
}
function bX(a, b, c) {
    if (a.j)
        b instanceof wW ? (b = new eX(b.j, a), b
.
    C = a.k, a.U(new fX(b, c))
) :
    (b = gX(b), b
.
    C = a.k, null != b ? (a.U(new fX(b, c)), hR.getInstance().end("vl")) : cX(a, tK($J, null), c)
)
    ;
else
    if (b instanceof wW)
        cX(a, tK(LJ, null, "Unsupported ad format."), c);
    else {
        var d = new gR("adsLoaderSdkAdLoaded");
        d.C = b;
        d.B = c;
        a.U(d)
    }
}
function cX(a, b, c) {
    a.j ? ("always" == FK.k && null != a.k && SQ(a.k, PQ()), a.U(new eJ(b, c))) : (c = new gR("adsLoaderSdkAdError"), c
.
    o = b, a.U(c)
)
}

var hX = {NORMAL: "normal", FULLSCREEN: "fullscreen"};
function iX() {
    return '<div class="close-padding"><div class="close-button"></div></div>'
}
function jX() {
    return '<div class="recall-button"></div>'
}
function kX(a) {
    return '<a target="_blank" href="' + jP(a.url) + '" class="attribution-button">' + jP(a.text) + "</a>"
}

function lX(a, b) {
    this.G = a;
    this.j = I("div", {"class": "controls"});
    this.P = b || v;
    this.Lc = new mn(this)
}
inherit(lX, R);
f = lX.prototype;
f.gd = !1;
f.vp = 1E3;
f.iq = 30;
f.jq = 45E3;
f.yr = 15E3;
f.ys = !1;
function mX(a) {
    var b = I("div", {"class": "container"});
    Iw(b, "opacity 0.4s");
    a.Lc.listen(b, "mouseover", a.By);
    a.Lc.listen(b, "mouseout", a.uD);
    b.appendChild(a.j);
    return b
}
f.Hk = function () {
    var a = mX(this);
    this.j.appendChild(this.G);
    this.display(this.G);
    this.play();
    return a
};
f.N = function () {
    null == this.I && (this.I = this.Hk());
    return this.I
};
f.play = function () {
    null == this.k && (this.k = gn(function () {
        this.gd || (this.hide(), this.ys = !0);
        this.k = null
    }, this.ys ? this.yr : this.jq, this))
};
f.stop = function () {
    null != this.k && (hn(this.k), this.k = null)
};
f.display = function (a) {
    var b = document.createEvent("Event");
    b.initEvent("creativeview", !0, !0);
    a.dispatchEvent(b)
};
f.show = function () {
    Xg(this.N(), 1);
    null != this.o && (hn(this.o), this.o = null)
};
f.hide = function () {
    Xg(this.N(), this.iq / 100);
    null == this.o && (this.o = gn(function () {
        this.P();
        this.o = null
    }, 400, this))
};
f.By = function () {
    this.show();
    this.gd = !0;
    this.C = gn(function () {
        this.gd && this.stop();
        this.C = null
    }, this.vp, this)
};
f.uD = function () {
    null != this.C && (hn(this.C), this.C = null);
    this.gd && this.play();
    this.gd = !1
};
f.L = function () {
    lX.J.L.call(this);
    this.stop();
    ti(this.Lc)
};
function nX(a, b) {
    this.H = a;
    this.M = new ue;
    this.K = 15E3;
    this.D = I("span");
    lX.call(this, a[0], b);
    this.j.appendChild(this.D)
}
inherit(nX, lX);
nX.prototype.Hk = function () {
    var a = mX(this);
    N(a, "container-rotator");
    this.F = I("div");
    this.j.appendChild(this.F);
    D(this.H, function (a, c) {
        N(a, "container-highlight");
        var d = 63 / this.H.length * (c + .5) - 5, e = I("div", {id: Va(), "class": "container-selector"});
        e.style.top = d + "px";
        this.Lc.listen(e, "click", function (a) {
            oX(this, a.target)
        });
        this.M.set(e.id, a);
        this.D.appendChild(e)
    }, this);
    oX(this, Vd(this.D));
    this.play();
    return a
};
nX.prototype.play = function () {
    null == this.A && (this.A = new en(this.K), this.Lc.listen(this.A, "tick", this.O));
    nX.J.play.call(this);
    this.A.start()
};
nX.prototype.stop = function () {
    null != this.A && this.A.stop();
    nX.J.stop.call(this)
};
nX.prototype.O = function () {
    var a = this.B;
    oX(this, (void 0 != a.nextElementSibling ? a.nextElementSibling : Wd(a.nextSibling)) || Vd(this.B.parentNode))
};
function oX(a, b) {
    a.B && lh(a.B, "container-active");
    N(b, "container-active");
    var c = a.M.get(b.id);
    Td(c, a.F);
    a.B = b;
    a.F = c;
    a.display(c)
}

function pX(a, b) {
    lX.call(this, a[0], b);
    this.A = a;
    N(this.j, "container-stack")
}
inherit(pX, lX);
pX.prototype.hide = v;
pX.prototype.Hk = function () {
    var a = mX(this);
    D(this.A, function (a) {
        N(a, "container-highlight");
        this.j.appendChild(a);
        this.display(a)
    }, this);
    this.play();
    return a
};
function qX() {
    R.call(this);
    this.D = "";
    this.k = new UR;
    this.o = new ue;
    this.A = [];
    this.F = !1;
    this.j = {};
    this.C = -1;
    this.B = []
}
inherit(qX, R);
function rX(a, b) {
    if (FK.j) {
        var c = yO(uO(), b.type, a.D);
        a.G(b.type, c)
    } else
        sR(pR(), b.type, a.D, x(a.G, a, b.type))
}
qX.prototype.G = function (a, b, c) {
    null != b && IV(this.j, b);
    if ("impression" == a && !this.F && null != this.A && 0 < this.A.length) {
        var d = G(this.B, "impression");
        sX(this, this.A, "", d);
        this.F = !0
    }
    t: switch (a) {
        case "click":
            d = !0;
            break t;
        case "complete":
            d = !we(this.o, a) && !we(this.o, "skip");
            break t;
        default:
            d = !we(this.o, a)
    }
    if (d) {
        var d = G(this.B, a), e = aS(this.k, a);
        0 < e.length && (sX(this, e, b, d, c), this.o.set(a, !0))
    }
};
function tX(a, b) {
    null != b && D(b, function (a) {
        G(this.B, a) || this.B.push(a)
    }, a)
}
function sX(a, b, c, d, e) {
    D(b, function (a) {
        GJ(a, this.j, c, d, e)
    }, a)
}

function uX(a) {
    U.call(this);
    this.ads = a;
    this.G = null;
    this.I = "normal";
    this.A = this.volume = null;
    this.k = new VK;
    this.ga = !1;
    this.content = {};
    this.B = new qX;
    this.O = !1;
    D(a, function () {
    });
    D(a, function (b, c) {
        var d = b.B;
        d.A = a.length;
        var e = c + 1;
        d.k = e;
        d.B = e
    })
}
inherit(uX, U);
function vX(a) {
    if (wX(a)) {
        if (KT(a.G) && !QK())
            throw vK(SJ, null, "skippablevideo");
        return a.G
    }
    throw vK(OJ, null, "An ad has not been selected.");
}
function wX(a) {
    return null !== a.G
}
f = uX.prototype;
f.Vg = function () {
    var a = db(this.ads, this.G);
    -1 != a && ++a < this.ads.length ? this.G = this.ads[a] : this.G = null
};
f.Lr = function () {
    if (!wX(this)) {
        if (mb(this.ads))
            throw vK($J);
        this.G = this.ads[0];
        if (null == this.G.j)
            throw tK($J);
    }
};
f.qa = function (a) {
    wX(this) ? this.U(new hJ(a, vX(this))) : this.U(new hJ(a, null))
};
function xX(a) {
    null == a.F && (a.F = new mn(a));
    return a.F
}
function yX(a, b) {
    if (null != a.C && (qn(xX(a), a.C, "companion_display_error", function () {
        }), SQ(a.C, b), !a.C.lo()))
        throw vK(PJ);
}
f.destroy = function () {
    FK.j && (uO().B = null);
    this.dispose()
};
f.L = function () {
    wX(this) && (RT(this.G, null), this.G = null);
    ti(this.F);
    this.F = null;
    ti(this.C);
    this.C = null;
    this.O = !1;
    uX.J.L.call(this)
};
f.Be = function () {
    return []
};
f.getCurrentAd = function () {
    return this.ads[0]
};
f.init = function (a) {
    zX(this);
    this.yi(a);
    this.ga = !0;
    this.Si()
};
f.Si = function () {
    this.qa("loaded")
};
f.sendImpressionUrls = function (a) {
    wX(this) && EK() && JJ(PT(vX(this)), a)
};
f.Bm = function () {
};
f.Hc = function (a, b, c) {
    if (!this.O) {
        if (null == a)
            throw vK(TJ, null, "displayContainer");
        if (null != c) {
            var d = new Zj(Qb(this.k));
            if (!De(Qb(c), d.contains, d))
                throw vK(TJ, null, "opt_adsRenderingSettings should be instance of AdsRenderingSettings");
            d = this.k;
            if (null == c.bitrate || 0 >= c.bitrate)
                c.bitrate = -1;
            null == c.mimeTypes && (c.mimeTypes = []);
            AX(c.mimeTypes);
            ha(c.loadVideoTimeout) || (c.loadVideoTimeout = 15E3);
            cc(d, c)
        }
        this.content = b;
        this.A = a;
        this.Lr();
        FK.j && (a = uO(), b = x(this.Bp, this), a.B = b);
        this.O = !0
    }
};
f.Of = function (a) {
    D(PT(a), function (a) {
        ob(this.B.A, a)
    }, this)
};
f.Le = function (a, b) {
    D(b, function (b) {
        b = qT(a, b);
        XR(this.B.k, b)
    }, this)
};
f.fj = function (a) {
    if (a instanceof sT) {
        var b = tT(a);
        D(b.Ha(), function (a) {
            var d = b.get(a);
            D(d, function (b) {
                ZR(this.B.k, a, b)
            }, this)
        }, this)
    }
};
function BX(a, b) {
    rX(a.B, new $l(b))
}
f.Yb = function (a) {
    rX(this.B, new $l(a));
    this.qa(a)
};
f.getRemainingTime = function () {
    return -1
};
f.Fg = v;
f.pause = function () {
};
f.resume = function () {
};
f.skip = function () {
};
f.start = function () {
    zX(this);
    if (!this.ga)
        throw tK(OJ, null, "Must call init before start.");
};
f.stop = function () {
    this.destroy()
};
f.Bp = function () {
    return null != this.volume ? this.volume : 0
};
f.setVolume = function (a) {
    (isNaN(a) || 0 > a || 1 < a) && xK(this, TJ, null, "volume", String(a));
    this.volume = a
};
f.yi = function (a) {
    if (!Ob(hX, a))
        throw vK(TJ, null, "view mode", a);
    this.I = a
};
f.setMediaUrl = function () {
};
function zX(a) {
    if (!a.O)
        throw vK(OJ, null, "Ads manager is not correctly configured.");
}
f.getMediaUrl = function () {
    return null
};
f.Cp = function () {
    return null
};
f.qf = function () {
    return null
};
function AX(a) {
    if (!ea(a))
        throw vK(OJ, null, "adsRenderingSettings.mimeTypes should be an array");
    var b = sb(Pb(vJ), Pb(qJ));
    D(a, function (a) {
        if (!G(b, a))
            throw vK(OJ, null, "Invalid or unsuppoted mime type " + a);
    })
}

function CX(a) {
    uX.call(this, a);
    this.o = null;
    this.V = I("div", {style: "display:none;position:absolute;top:0;left:0;bottom:0;right:0;z-index:2000"});
    this.M = !1;
    this.P = []
}
inherit(CX, uX);
f = CX.prototype;
f.start = function () {
    CX.J.start.call(this);
    this.A.rj();
    this.o = this.A.uf();
    if (null != this.o) {
        Rd(this.o);
        var a = this.yk();
        FK.j ? xO(uO(), a) : qR(pR(), a);
        this.o.appendChild(a);
        DX(this);
        D(this.P, function (a) {
            a()
        });
        nb(this.P);
        this.M = !0;
        this.qa("start")
    }
};
f.Fg = function () {
    CX.J.Fg.call(this);
    DX(this)
};
f.L = function () {
    ti(this.j);
    this.A = this.j = null;
    this.M = !1;
    FK.j ? uO().o = null : pR().o = null;
    null != this.o && (Rd(this.o), this.o = null);
    CX.J.L.call(this)
};
function EX(a, b) {
    var c = FT(b);
    D(c, function (a) {
        ZR(this.B.k, "click", a)
    }, a)
}
f.yk = function () {
    var a = ST(vX(this));
    if (null == a)
        throw a = vK($J), FX(this, a), a;
    yT(a, xX(this));
    zT(a, this.nx);
    try {
        yX(this, vX(this))
    } catch (b) {
        throw FX(this, b), b;
    }
    var c = vX(this), d = FV(c);
    this.B.j = d;
    c.j && (this.Of(c), (c = c.j) && this.Le(c, gJ));
    EX(this, a);
    this.M ? this.Yb("impression") : this.P.push(x(this.Yb, this, "impression"));
    return GX(this, [a.te()])
};
f.Dp = function (a, b) {
    return new lX(a[0], b)
};
function GX(a, b) {
    null != a.j && a.j.stop();
    a.j = a.Dp(b, x(a.Oo, a));
    var c = a.j.N();
    if (FK.j) {
        var d = I("style", {type: "text/css"}, '.close-padding{color:#fff;cursor:pointer;margin:0;padding-bottom:10px;padding-left:10px;position:absolute;right:0;top:0;z-index:1001}.close-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAPAAAADwBjHBMTAAAAt0lEQVQY03XQMW7CQBAAwLmTlSp9JFpHiCYfiFzkCZbfkqfwjshPoEART6BwWmRQ5IrqikDB4QQFb7V7o7vd2/CiPr26F5/aEJan0lR8KUos7uJWKV6LTvcvo7gercHzn2zk6ADW+nzzYO4iKDS5vOBck5+NkAwas9xvpjFIv0yyscu8s8k4cmcFHsFqnD1zDxbe8w76249ViGrfah9+VLdM5cEgSd7GzhR7T7YTO9+LbThO4FEbzuewMmr11FxHAAAAAElFTkSuQmCC);float:right;height:15px;margin:5px 4px 0 0;width:15px}.yt-text-overlay .close-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAACgAAAAoATqZ25QAAAN1JREFUCNcB0gAt/wDbutvr23TbBAAA2wXbeNvs27UAAAHb9QAK+v3CoyBzJGAAhAAJ9vsvjgNuAftABgMUKvtBDlEBDvv9ouLGAAEAAJunMVIPBgAAAADx+aXjj90AoAAAAAAAwM/b/9v/2/+k6wCtAFUAAAIAANtxGxcAAAAAAAAlDX8LAKsAAAPbdgCDABH1+dDwEAUPBiggNCGxsQHb9AAL+/2c4KPZdQlNPwQC9vsvWwIAzff8ouGU3euhs1TJrvj82vQAXQEAAACRACMApwCpAPwABABaAFcA1sKJVOsU6fRuAAAAAElFTkSuQmCC);height:10px;margin:9px 9px 0 0;width:10px}.close-padding:hover .close-button{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAPAAAADwBjHBMTAAAAs0lEQVQY03XQLc7CQBAA0LdQjf8UQSCBcIHvAHgM6Wm4CB4kAk96g+IQhECCJATbUMy2NIGO2Mzs298JU/Py36/Y24SwKofa4ihkJYOfeEKnKnL5V0ZSTe3AqJHVHFzBzsUBXI2pDu9K4+pD3JnqfrjwkOrH+/pSD8WHKWTOkc+yiDXntqAHtvXbI1/AxNKkUdcfmyFYuFt4Kc0iN7qWoIhj1bXk5s+ppec3nXV4tuDTOrwBYQs0jH6JoccAAAAASUVORK5CYII=)}.yt-text-overlay .close-padding:hover .close-button{background-color:rgba(0,0,0,0.15);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAACgAAAAoATqZ25QAAALpJREFUCNclyL1Kw1AAgNFPqLh3cu/D+ARV8S0UEcFVoYOL4Kw4FSmClBZiB38WHZ10sQUnB6MR2hruTVI/h5zx4MjUXRvgsvt+OQT81VBdn7803THXWUEHD+JCf+L48e9bY9WZ0AcG3SyqahYO30jYBOD9uc67lCvaALjtR52f4TSpa89cp+E+nRYayuQMcK6xOhqvDi9ui4XOCtr4MC+PJys3rK81R728fMroLwEntOhySUWDLTZ4/QdyroIjdfxoFwAAAABJRU5ErkJggg==);background-position:center center;background-repeat:no-repeat;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:inset 0 -1px 3px rgba(0,0,0,0.3),0 1px 0 rgba(255,255,255,0.5);height:20px;margin:4px 4px 0 0;width:20px}.recall-button{background:rgba(200,200,200,0.2) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAACgAAAAgAfJAUZwAAAURJREFUGNMFwb1LAmEAB+Dfe+/daZ3aWX6k1WFmSElQUBYUVIsguTQ0BUm4VtDYFLT4b7hkYLQGDg5BtERkUIRDgX1oWg6deKl359vzEFZO0mwWJgAUjgr88fe7R/2BkVonXVOGOQRQAJSwcp4CWWhKhnI6Vg0TkWYbnc8G7hbCjlLM3SQOBZQDAPgyk3wP+/Vf2Oyu4JV/NHDf1CG/1NREdZuZVRUCeiaLal12iETBQ4E1iN4QaNLqAafMptlw6Yvtwh4cI5CiIm09BAh06fbDbEx7saXp0M9vkDtJELQ5jPQAK1i5Irb+mGwYbEfV2AHiZz7M7YVLNZZ6rLDYACac8xAkwjp6ROf4ePEV19EZmaCrdQXwbzq19V8W68qUH+Hx4OYFnp6ZjJWck4NlUYLVf5pOgpXzdAOCOIg+N1zLIQuPpX9L/XzfXOCrFgAAAABJRU5ErkJggg==) no-repeat center;border:1px solid rgba(255,255,255,0.498039);box-shadow:rgba(0,0,0,0.701961) 0 4px 3px;color:#fff;cursor:pointer;height:11px;width:26px;z-index:1001}.yt-text-overlay .recall-button{background:rgba(0,0,0,0.15) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAQAAAC7znxOAAAKPWlDQ1BpY2MAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4BUaaISkgChhBgSQOyIqMCIoiKCFRkUccDREZCxIoqFQbH3AXkIKOPgKDZU3g/eGn2z5r03b/avvfY5Z53vnH0+AEZgsESahaoBZEoV8ogAHzw2Lh4ndwMKVCCBA4BAmC0LifSPAgDg+/Hw7IgAH/gCBODNbUAAAG7YBIbhOPx/UBfK5AoAJAwApovE2UIApBAAMnIVMgUAMgoA7KR0mQIAJQAAWx4bFw+AagEAO2WSTwMAdtIk9wIAtihTKgJAowBAJsoUiQDQDgBYl6MUiwCwYAAoypGIcwGwmwBgkqHMlABg7wCAnSkWZAMQGABgohALUwEI9gDAkEdF8AAIMwEojJSveNJXXCHOUwAA8LJki+WSlFQFbiG0xB1cXbl4oDg3Q6xQ2IQJhOkCuQjnZWXKBNLFAJMzAwCARnZEgA/O9+M5O7g6O9s42jp8taj/GvyLiI2L/5c/r8IBAQCE0/VF+7O8rBoA7hgAtvGLlrQdoGUNgNb9L5rJHgDVQoDmq1/Nw+H78fBUhULmZmeXm5trKxELbYWpX/X5nwl/AV/1s+X78fDf14P7ipMFygwFHhHggwuzMrKUcjxbJhCKcZs/HvHfLvzzd0yLECeL5WKpUIxHS8S5EmkKzsuSiiQKSZYUl0j/k4l/s+wPmLxrAGDVfgb2QltQu8oG7JcuILDogCXsAgDkd9+CqdEQBgAxBoOTdw8AMPmb/x1oGQCg2ZIUHACAFxGFC5XynMkYAQCACDRQBTZogz4YgwXYgCO4gDt4gR/MhlCIgjhYAEJIhUyQQy4shVVQBCWwEbZCFeyGWqiHRjgCLXACzsIFuALX4BY8gF4YgOcwCm9gHEEQMsJEWIg2YoCYItaII8JFZiF+SDASgcQhiUgKIkWUyFJkNVKClCNVyF6kHvkeOY6cRS4hPcg9pA8ZRn5DPqAYykDZqB5qhtqhXNQbDUKj0PloCroIzUcL0Q1oJVqDHkKb0bPoFfQW2os+R8cwwOgYBzPEbDAuxsNCsXgsGZNjy7FirAKrwRqxNqwTu4H1YiPYewKJwCLgBBuCOyGQMJcgJCwiLCeUEqoIBwjNhA7CDUIfYZTwmcgk6hKtiW5EPjGWmELMJRYRK4h1xGPE88RbxAHiGxKJxCGZk1xIgaQ4UhppCamUtJPURDpD6iH1k8bIZLI22ZrsQQ4lC8gKchF5O/kQ+TT5OnmA/I5CpxhQHCn+lHiKlFJAqaAcpJyiXKcMUsapalRTqhs1lCqiLqaWUWupbdSr1AHqOE2dZk7zoEXR0miraJW0Rtp52kPaKzqdbkR3pYfTJfSV9Er6YfpFeh/9PUODYcXgMRIYSsYGxn7GGcY9xismk2nG9GLGMxXMDcx65jnmY+Y7FZaKrQpfRaSyQqVapVnlusoLVaqqqaq36gLVfNUK1aOqV1VH1KhqZmo8NYHacrVqteNqd9TG1FnqDuqh6pnqpeoH1S+pD2mQNcw0/DREGoUa+zTOafSzMJYxi8cSslazalnnWQNsEtuczWensUvY37G72aOaGpozNKM18zSrNU9q9nIwjhmHz8nglHGOcG5zPkzRm+I9RTxl/ZTGKdenvNWaquWlJdYq1mrSuqX1QRvX9tNO196k3aL9SIegY6UTrpOrs0vnvM7IVPZU96nCqcVTj0y9r4vqWulG6C7R3afbpTump68XoCfT2653Tm9En6PvpZ+mv0X/lP6wActgloHEYIvBaYNnuCbujWfglXgHPmqoaxhoqDTca9htOG5kbjTXqMCoyeiRMc2Ya5xsvMW43XjUxMAkxGSpSYPJfVOqKdc01XSbaafpWzNzsxiztWYtZkPmWuZ883zzBvOHFkwLT4tFFjUWNy1JllzLdMudltesUCsnq1Sraqur1qi1s7XEeqd1zzTiNNdp0mk10+7YMGy8bXJsGmz6bDm2wbYFti22L+xM7OLtNtl12n22d7LPsK+1f+Cg4TDbocChzeE3RytHoWO1483pzOn+01dMb53+cob1DPGMXTPuOrGcQpzWOrU7fXJ2cZY7NzoPu5i4JLrscLnDZXPDuKXci65EVx/XFa4nXN+7Obsp3I64/epu457uftB9aKb5TPHM2pn9HkYeAo+9Hr2z8FmJs/bM6vU09BR41ng+8TL2EnnVeQ16W3qneR/yfuFj7yP3OebzlufGW8Y744v5BvgW+3b7afjN9avye+xv5J/i3+A/GuAUsCTgTCAxMChwU+Advh5fyK/nj852mb1sdkcQIygyqCroSbBVsDy4LQQNmR2yOeThHNM50jktoRDKD90c+ijMPGxR2I/hpPCw8OrwpxEOEUsjOiNZkQsjD0a+ifKJKot6MNdirnJue7RqdEJ0ffTbGN+Y8pjeWLvYZbFX4nTiJHGt8eT46Pi6+LF5fvO2zhtIcEooSrg933x+3vxLC3QWZCw4uVB1oWDh0URiYkziwcSPglBBjWAsiZ+0I2lUyBNuEz4XeYm2iIbFHuJy8WCyR3J58lCKR8rmlOFUz9SK1BEJT1IleZkWmLY77W16aPr+9ImMmIymTEpmYuZxqYY0XdqRpZ+Vl9Ujs5YVyXoXuS3aumhUHiSvy0ay52e3KtgKmaJLaaFco+zLmZVTnfMuNzr3aJ56njSva7HV4vWLB/P9879dQlgiXNK+1HDpqqV9y7yX7V2OLE9a3r7CeEXhioGVASsPrKKtSl/1U4F9QXnB69Uxq9sK9QpXFvavCVjTUKRSJC+6s9Z97e51hHWSdd3rp6/fvv5zsaj4col9SUXJx1Jh6eVvHL6p/GZiQ/KG7jLnsl0bSRulG29v8tx0oFy9PL+8f3PI5uYt+JbiLa+3Ltx6qWJGxe5ttG3Kbb2VwZWt2022b9z+sSq16la1T3XTDt0d63e83SnaeX2X167G3Xq7S3Z/2CPZc3dvwN7mGrOain2kfTn7ntZG13Z+y/22vk6nrqTu037p/t4DEQc66l3q6w/qHixrQBuUDcOHEg5d+873u9ZGm8a9TZymksNwWHn42feJ398+EnSk/Sj3aOMPpj/sOMY6VtyMNC9uHm1JbeltjWvtOT77eHube9uxH21/3H/C8ET1Sc2TZadopwpPTZzOPz12RnZm5GzK2f72he0PzsWeu9kR3tF9Puj8xQv+F851eneevuhx8cQlt0vHL3Mvt1xxvtLc5dR17Cenn451O3c3X3W52nrN9Vpbz8yeU9c9r5+94Xvjwk3+zSu35tzquT339t07CXd674ruDt3LuPfyfs798QcrHxIfFj9Se1TxWPdxzc+WPzf1Ovee7PPt63oS+eRBv7D/+T+y//FxoPAp82nFoMFg/ZDj0Ilh/+Frz+Y9G3guez4+UvSL+i87Xli8+OFXr1+7RmNHB17KX078VvpK+9X+1zNet4+FjT1+k/lm/G3xO+13B95z33d+iPkwOJ77kfyx8pPlp7bPQZ8fTmROTPwTA5jz/CVjM6IAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAJAAAABgBkh0tHAAAALElEQVQI12P4zwCBv9JgLLjAr/8wQYTAf5ggsgBUEFXg/6//v9IYf/1nQAMAapVB10c/DEAAAAAASUVORK5CYII=) no-repeat center;border:1px solid rgba(0,0,0,0);box-shadow:none;height:17px;width:29px}.autoalign .recall-button{margin:auto}.yt-text-overlay.autoalign .recall-button{margin:auto auto 6px}.recall-button:hover{background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAAAAAAUx4O/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAl2cEFnAAAACgAAAAcA+wgIqAAAAEtJREFUCNcVi1kRwEAIQ3GAhEpAAhJWChKQsBIqBQlIQAIS0jQ/OeZFAIz70ARIjdDL2GYF1OMrxZ6JvUugjGoCG5rcJSHv+d/oMx893S/cqF2DpwAAAABJRU5ErkJggg==) no-repeat center}.yt-text-overlay .recall-button:hover{background:rgba(0,0,0,0.15) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAQAAAC7znxOAAAKPWlDQ1BpY2MAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4BUaaISkgChhBgSQOyIqMCIoiKCFRkUccDREZCxIoqFQbH3AXkIKOPgKDZU3g/eGn2z5r03b/avvfY5Z53vnH0+AEZgsESahaoBZEoV8ogAHzw2Lh4ndwMKVCCBA4BAmC0LifSPAgDg+/Hw7IgAH/gCBODNbUAAAG7YBIbhOPx/UBfK5AoAJAwApovE2UIApBAAMnIVMgUAMgoA7KR0mQIAJQAAWx4bFw+AagEAO2WSTwMAdtIk9wIAtihTKgJAowBAJsoUiQDQDgBYl6MUiwCwYAAoypGIcwGwmwBgkqHMlABg7wCAnSkWZAMQGABgohALUwEI9gDAkEdF8AAIMwEojJSveNJXXCHOUwAA8LJki+WSlFQFbiG0xB1cXbl4oDg3Q6xQ2IQJhOkCuQjnZWXKBNLFAJMzAwCARnZEgA/O9+M5O7g6O9s42jp8taj/GvyLiI2L/5c/r8IBAQCE0/VF+7O8rBoA7hgAtvGLlrQdoGUNgNb9L5rJHgDVQoDmq1/Nw+H78fBUhULmZmeXm5trKxELbYWpX/X5nwl/AV/1s+X78fDf14P7ipMFygwFHhHggwuzMrKUcjxbJhCKcZs/HvHfLvzzd0yLECeL5WKpUIxHS8S5EmkKzsuSiiQKSZYUl0j/k4l/s+wPmLxrAGDVfgb2QltQu8oG7JcuILDogCXsAgDkd9+CqdEQBgAxBoOTdw8AMPmb/x1oGQCg2ZIUHACAFxGFC5XynMkYAQCACDRQBTZogz4YgwXYgCO4gDt4gR/MhlCIgjhYAEJIhUyQQy4shVVQBCWwEbZCFeyGWqiHRjgCLXACzsIFuALX4BY8gF4YgOcwCm9gHEEQMsJEWIg2YoCYItaII8JFZiF+SDASgcQhiUgKIkWUyFJkNVKClCNVyF6kHvkeOY6cRS4hPcg9pA8ZRn5DPqAYykDZqB5qhtqhXNQbDUKj0PloCroIzUcL0Q1oJVqDHkKb0bPoFfQW2os+R8cwwOgYBzPEbDAuxsNCsXgsGZNjy7FirAKrwRqxNqwTu4H1YiPYewKJwCLgBBuCOyGQMJcgJCwiLCeUEqoIBwjNhA7CDUIfYZTwmcgk6hKtiW5EPjGWmELMJRYRK4h1xGPE88RbxAHiGxKJxCGZk1xIgaQ4UhppCamUtJPURDpD6iH1k8bIZLI22ZrsQQ4lC8gKchF5O/kQ+TT5OnmA/I5CpxhQHCn+lHiKlFJAqaAcpJyiXKcMUsapalRTqhs1lCqiLqaWUWupbdSr1AHqOE2dZk7zoEXR0miraJW0Rtp52kPaKzqdbkR3pYfTJfSV9Er6YfpFeh/9PUODYcXgMRIYSsYGxn7GGcY9xismk2nG9GLGMxXMDcx65jnmY+Y7FZaKrQpfRaSyQqVapVnlusoLVaqqqaq36gLVfNUK1aOqV1VH1KhqZmo8NYHacrVqteNqd9TG1FnqDuqh6pnqpeoH1S+pD2mQNcw0/DREGoUa+zTOafSzMJYxi8cSslazalnnWQNsEtuczWensUvY37G72aOaGpozNKM18zSrNU9q9nIwjhmHz8nglHGOcG5zPkzRm+I9RTxl/ZTGKdenvNWaquWlJdYq1mrSuqX1QRvX9tNO196k3aL9SIegY6UTrpOrs0vnvM7IVPZU96nCqcVTj0y9r4vqWulG6C7R3afbpTump68XoCfT2653Tm9En6PvpZ+mv0X/lP6wActgloHEYIvBaYNnuCbujWfglXgHPmqoaxhoqDTca9htOG5kbjTXqMCoyeiRMc2Ya5xsvMW43XjUxMAkxGSpSYPJfVOqKdc01XSbaafpWzNzsxiztWYtZkPmWuZ883zzBvOHFkwLT4tFFjUWNy1JllzLdMudltesUCsnq1Sraqur1qi1s7XEeqd1zzTiNNdp0mk10+7YMGy8bXJsGmz6bDm2wbYFti22L+xM7OLtNtl12n22d7LPsK+1f+Cg4TDbocChzeE3RytHoWO1483pzOn+01dMb53+cob1DPGMXTPuOrGcQpzWOrU7fXJ2cZY7NzoPu5i4JLrscLnDZXPDuKXci65EVx/XFa4nXN+7Obsp3I64/epu457uftB9aKb5TPHM2pn9HkYeAo+9Hr2z8FmJs/bM6vU09BR41ng+8TL2EnnVeQ16W3qneR/yfuFj7yP3OebzlufGW8Y744v5BvgW+3b7afjN9avye+xv5J/i3+A/GuAUsCTgTCAxMChwU+Advh5fyK/nj852mb1sdkcQIygyqCroSbBVsDy4LQQNmR2yOeThHNM50jktoRDKD90c+ijMPGxR2I/hpPCw8OrwpxEOEUsjOiNZkQsjD0a+ifKJKot6MNdirnJue7RqdEJ0ffTbGN+Y8pjeWLvYZbFX4nTiJHGt8eT46Pi6+LF5fvO2zhtIcEooSrg933x+3vxLC3QWZCw4uVB1oWDh0URiYkziwcSPglBBjWAsiZ+0I2lUyBNuEz4XeYm2iIbFHuJy8WCyR3J58lCKR8rmlOFUz9SK1BEJT1IleZkWmLY77W16aPr+9ImMmIymTEpmYuZxqYY0XdqRpZ+Vl9Ujs5YVyXoXuS3aumhUHiSvy0ay52e3KtgKmaJLaaFco+zLmZVTnfMuNzr3aJ56njSva7HV4vWLB/P9879dQlgiXNK+1HDpqqV9y7yX7V2OLE9a3r7CeEXhioGVASsPrKKtSl/1U4F9QXnB69Uxq9sK9QpXFvavCVjTUKRSJC+6s9Z97e51hHWSdd3rp6/fvv5zsaj4col9SUXJx1Jh6eVvHL6p/GZiQ/KG7jLnsl0bSRulG29v8tx0oFy9PL+8f3PI5uYt+JbiLa+3Ltx6qWJGxe5ttG3Kbb2VwZWt2022b9z+sSq16la1T3XTDt0d63e83SnaeX2X167G3Xq7S3Z/2CPZc3dvwN7mGrOain2kfTn7ntZG13Z+y/22vk6nrqTu037p/t4DEQc66l3q6w/qHixrQBuUDcOHEg5d+873u9ZGm8a9TZymksNwWHn42feJ398+EnSk/Sj3aOMPpj/sOMY6VtyMNC9uHm1JbeltjWvtOT77eHube9uxH21/3H/C8ET1Sc2TZadopwpPTZzOPz12RnZm5GzK2f72he0PzsWeu9kR3tF9Puj8xQv+F851eneevuhx8cQlt0vHL3Mvt1xxvtLc5dR17Cenn451O3c3X3W52nrN9Vpbz8yeU9c9r5+94Xvjwk3+zSu35tzquT339t07CXd674ruDt3LuPfyfs798QcrHxIfFj9Se1TxWPdxzc+WPzf1Ovee7PPt63oS+eRBv7D/+T+y//FxoPAp82nFoMFg/ZDj0Ilh/+Frz+Y9G3guez4+UvSL+i87Xli8+OFXr1+7RmNHB17KX078VvpK+9X+1zNet4+FjT1+k/lm/G3xO+13B95z33d+iPkwOJ77kfyx8pPlp7bPQZ8fTmROTPwTA5jz/CVjM6IAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAJAAAABgBkh0tHAAAALElEQVQI12P4zwCBv9JgLLjAr/8wQYTAf5ggsgBUEFXg/6//v9IYf/1nQAMAapVB10c/DEAAAAAASUVORK5CYII=) no-repeat center;border:1px solid rgba(255,255,255,0.5)}.auto-hide{display:none}body:hover .auto-hide{display:block}.attribution-button{bottom:12px;color:#fff;font:11px arial,sans-serif;position:absolute;right:5px;text-decoration:none;text-shadow:rgba(0,0,0,0.7) 0 4px 4px;z-index:1001}.yt-text-overlay .attribution-button{color:#888;text-shadow:none}.viewmode-fullscreen .attribution-button{bottom:auto;right:22px;top:5px}.yt-text-overlay.viewmode-fullscreen .attribution-button{right:5px;top:auto}.text-container .attribution-button{bottom:7px}.container{position:absolute;width:100%;z-index:1000}.container.autoalign{bottom:0;text-align:center}.container-stack{background-color:#666;border-radius:5px;display:block;padding:3px 0}.container-rotator .attribution-button{bottom:7px}.container-rotator .text-inner-container{left:20px}.container-selector{-webkit-box-shadow:0 4px 3px rgba(0,0,0,.7);-moz-box-shadow:0 4px 3px rgba(0,0,0,.7);box-shadow:0 4px 3px rgba(0,0,0,.7);background:#666;border-radius:2px;cursor:pointer;height:10px;left:5px;position:absolute;width:10px;z-index:1002}.container-selector:hover{background:#fff}.container-rotator .container-highlight:hover{border-color:#fff!important}.container-stack .container-highlight:hover{background-color:#999!important}.container-active{background:#fc0!important}.container-slider .attribution-button{bottom:7px}.container-slider .controls{max-width:100%!important}.container-slider .text-container{background-color:#000;border-radius:5px 5px 0 0;margin-bottom:0}.container-slider .text-title:hover{text-decoration:underline!important}.container-slider.hidden .controls{top:38px}.container-slider.animated .controls{-webkit-transition:top .4s;-moz-transition:top .4s;-o-transition:top .4s;transition:top .4s}.controls{display:inline-block;position:relative}.controls.scalable{display:block;min-width:320px;max-width:450px}.autoalign .controls.scalable{margin:auto}.flash-container,.image-container{display:inline-block;position:relative}.flash-container.click-capture .click-layer{display:block}.click-layer{background:rgba(0,0,0,0.0);bottom:0;left:0;position:absolute;right:0;top:0;z-index:100}.text-container{margin-bottom:5px;position:relative}.yt-text-overlay .text-container{margin-bottom:3px}.text-inner-container{background-image:-webkit-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:-moz-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:-ms-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:-o-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));border:1px solid rgba(102,102,102,0.7);border-radius:3px;box-shadow:rgba(0,0,0,0.7) 0 5px 5px;padding-left:10px;position:absolute;text-align:left;top:0;bottom:0;left:0;right:0}.yt-text-overlay .text-container .text-inner-container{background-color:rgba(0,0,0,0.6);background-image:none;border:1px solid rgba(0,0,0,0.6);border-radius:0;box-shadow:none;padding-left:10px}.viewmode-fullscreen .text-inner-container{background-image:none;border:none;box-shadow:none}.yt-text-overlay .controls:hover .text-inner-container{border:1px solid rgba(58,58,58,1.0)}.text-title{text-decoration:underline}.yt-text-overlay .text-title{text-decoration:none}.viewmode-fullscreen .text-title{text-decoration:none}.yt-text-overlay .controls:hover .text-container .text-title{text-decoration:underline}.text-image-link{float:left;position:relative}.text-image{box-shadow:rgba(0,0,0,0.498039) 0 3px 5px;height:57px;margin:3px 10px 0 0;width:79px}.yt-text-overlay .text-image{margin:2px 10px 0 0}.text-image-duration{background:#000;color:#fff;font:10px arial,sans-serif;padding:2px;position:absolute;right:10px;top:43px}.text-title{color:#fff;display:block;font:bold 14px arial,sans-serif;margin:7px 16px 0 0;overflow:hidden;padding-bottom:4px;text-overflow:ellipsis;text-shadow:rgba(0,0,0,0.7) 0 4px 4px;white-space:nowrap}.yt-text-overlay .text-title{margin-top:7px;text-shadow:#000 0 -1px 0}.text-description{color:#fff;font:12px arial,sans-serif;margin-top:-3px;overflow:hidden;text-overflow:ellipsis;text-shadow:rgba(0,0,0,0.7) 0 4px 4px;white-space:nowrap}.yt-text-overlay .text-description{text-align:left;text-shadow:none}.text-ad-channel{bottom:7px;color:#f9fcc0;font:bold 11px arial,sans-serif;left:10px;position:absolute;text-decoration:none;text-shadow:rgba(0,0,0,0.7) 0 4px 4px}.yt-text-overlay .text-ad-channel{bottom:9px;color:#eade90;font-weight:normal;left:10px;text-shadow:#000 0 -1px 0}.pyv .text-ad-channel{left:99px}.yt-text-overlay .pyv .text-ad-channel{left:99px}.viewmode-fullscreen .text-ad-channel{color:#ccc}.yt-text-overlay.viewmode-fullscreen .text-ad-channel{color:#eade90}.ima-sdk-frame body{background:transparent;height:100%;margin:0;overflow:hidden}.ima-sdk-frame{height:100%}.ima-sdk-frame-native body{background:#000}.ima-sdk-frame-native video{bottom:0;left:0;margin:auto;right:0;top:0}.ytp-iv-drawer-open .videoAdUiTopBar,.ytp-iv-drawer-open .videoAdUiPreSkipContainer,.ytp-iv-drawer-open .videoAdUiSkipContainer,.ytp-iv-drawer-open .ad-overlay .container{display:none}.videoAdUi{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;background-color:rgba(0,0,0,0);bottom:0;cursor:pointer;height:100%;left:0;min-height:100%;position:absolute;right:0;top:0;overflow:hidden}.videoAdUiTopBar{background:#000;border-bottom:1px solid #444;cursor:default;left:0;opacity:.8;padding:0;position:relative;top:0;right:0;z-index:1000}.videoAdUiTopBarWithGradients{background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:-moz-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:-ms-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:-o-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-color:rgba(0,0,0,0);border-bottom:none;height:40px}.videoAdUiTopBarTransitions{-webkit-transition:opacity ease-in .5s;-moz-transition:opacity ease-in .5s;-o-transition:opacity ease-in .5s;transition:opacity ease-in .5s;opacity:0}.videoAdUi:hover .videoAdUiTopBarTransitions{-webkit-transition:opacity ease-out .5s;-moz-transition:opacity ease-out .5s;-o-transition:opacity ease-out .5s;transition:opacity ease-out .5s;opacity:.8}.videoAdUiTopBarNoFade{opacity:.8!important}.videoAdUiBottomBar{background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:-moz-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:-ms-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:-o-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);bottom:5px;left:0;padding:0;position:absolute;width:100%;z-index:1000}.videoAdUiProgressBar{background-color:#fff;bottom:0;cursor:default;left:0;position:absolute;width:100%;z-index:1000}.videoAdUiProgress{background-image:-webkit-linear-gradient(top,#ffec7b,#dea405);background-image:-moz-linear-gradient(top,#ffec7b,#dea405);background-image:-ms-linear-gradient(top,#ffec7b,#dea405);background-image:-o-linear-gradient(top,#ffec7b,#dea405);background-image:linear-gradient(top,#ffec7b,#dea405);border-right:solid 1px #666;height:4px;opacity:.9;width:0%}.videoAdUiBuffer{height:4px;width:0%;display:none}.videoAdUiAuthorIcon{background:#000;display:inline-block;height:40px;margin:0 10px;position:absolute}.videoAdUiAuthorIconImage{cursor:pointer;width:40px;height:40px}.videoAdUiAuthorIconImage:hover{opacity:.6}.videoAdUiAuthorName{color:#ccc;cursor:pointer;display:inline-block;font:normal 12px arial,sans-serif;margin:10px 5px 5px;text-decoration:none;max-width:20%}.videoAdUiLearnMore{color:#fff;display:inline-block;float:right;font:normal 16px arial,sans-serif;padding:5px}.videoAdUiLearnMoreText{color:#e5bb00;cursor:pointer;font:normal 13px arial,sans-serif;margin-bottom:5px;opacity:.9;text-align:center}.videoAdUiLearnMoreText:hover{text-decoration:underline}.videoAdUiLearnMoreText-gvn{display:inline-block;float:right;padding:5px;padding-right:10px}.videoAdUiLearnMoreIcon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAl2cEFnAAAACgAAAAoATqZ25QAAAJdJREFUGNN1j70NwkAMRp+PMAXKBGmgvQWYAOYgMAjMQRZggoiOC0UWQFmAFoEp4EIOzGss+Ud+n2CggTWw6RtC7axFHJf0Ei/aUKH4/njKBEDPLHiwi/0Mxcdhwh0P7BGWryeW44ktI2qZUeJYRfFuEGKugU4Dx1/tlOJdcwBtqD6OQ8YcuAHKNaY1F6WgBVrLO/v2/McTvRgrpKpY5XsAAAAASUVORK5CYII=);display:inline-block;height:10px;margin-left:3px;width:10px}.videoAdUiTitle{color:#fff;cursor:pointer;display:inline-block;font:normal 13px arial,sans-serif;margin:10px 5px 5px;text-decoration:none;max-width:50%}.videoAdUiTitleWithAuthorIcon{margin-left:60px}.rtl .videoAdUiTitleWithAuthorIcon{margin-left:auto;margin-right:60px}.videoAdUiAuthorName:hover,.videoAdUiTitle:hover{text-decoration:underline}.ellipsisText{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.videoAdUiAttributionContainer{bottom:0;color:#fff;display:inline-block;font:normal 11px arial,sans-serif;padding:5px;padding-right:10px;position:absolute;text-shadow:0 0 5px rgba(0,0,0,0.8)}.videoAdUiAttributionContainer-gvn{color:#e5bb00;font-size:12px;position:relative;text-shadow:none}.videoAdUiAttribution{display:inline-block;opacity:.9}.videoAdUiAttributionContainer-gvn .videoAdUiAttribution{opacity:1}.videoAdUiAttributionIconContainer{display:inline-block;position:relative}.videoAdUiAttributionIcon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAAAoAAAAKAE6mduUAAACISURBVAjXPY6xDYJAAADPj0NQ27CAPBsYEztI2MGO6C4mbIAWdLbGglYbrUgMOsnZoNddrjlEXNr68OnRKDITKraceRFYsOHACTN7c3FwEHN7I3bWIhYWItZ2+DEVsbERMfU9BwIAK/4EbpOGKa65Y7Q3iqWlkyFWXtybmLjzaiWImNk6Ov7mvwScZI0STqHEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==);height:10px;margin:10px 10px 0;position:relative;width:10px}.videoAdUiAttributionIconContainer:hover .videoAdUiAdInfoPopup{display:inline-block}.videoAdUiAdInfoPopup{background:white;border:1px solid black;box-sizing:border-box;color:black;display:none;font-size:12px;left:-15px;padding:7px;position:absolute;text-align:left;text-shadow:none;bottom:20px;width:211px}.videoAdUiAdInfoPopupCallout{border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid white;box-sizing:border-box;display:inline-block;height:0;left:24px;overflow:visible;position:absolute;text-align:center;top:100%;width:0}.videoAdUiShare{color:#fff;display:inline-block;float:right;font:normal 13px arial,sans-serif;margin:10px 10px 5px}.rtl .videoAdUiShare{float:left}.videoAdUiShare:hover{text-decoration:underline;cursor:pointer}.videoAdUiPreSkipContainer{bottom:22px;cursor:default;padding:15px 0 15px 15px;position:absolute;right:0;z-index:1000}.videoAdUi-mobile .videoAdUiPreSkipContainer{bottom:11px;padding:8px 0 8px 8px}.videoAdUiSkipContainer{-webkit-tap-highlight-color:rgba(0,0,0,0);bottom:22px;cursor:pointer;padding:15px 0 15px 15px;position:absolute;right:0;z-index:1000}.videoAdUi-mobile .videoAdUiSkipContainer{bottom:11px;padding:8px 0 8px 8px}.videoAdUiPreSkipButton{background:rgba(0,0,0,0.8);min-width:155px;padding:6px}.videoAdUi-mobile .videoAdUiPreSkipButton{min-width:105px}.videoAdUiPreSkipText{color:#e6e6e6;font:normal 11px arial,helvetica,sans-serif;padding-right:8px;text-align:center;display:inline-block;width:70px;vertical-align:middle}.videoAdUiPreSkipText.videoAdUiPreSkipTextOnly{width:100%;padding-right:0;line-height:21px}.videoAdUiPreSkipThumbnail{cursor:pointer;display:inline-block;vertical-align:middle}.videoAdUiPreSkipThumbnailImage{display:block;max-width:78px;max-height:42px;width:auto;height:auto}.videoAdUiSkipButton{-webkit-tap-highlight-color:rgba(0,0,0,0);background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.5);border-right:0;box-sizing:content-box;color:#fff;font:normal 18px arial,helvetica,sans-serif;min-width:150px;padding:10px 7px;text-align:center;cursor:pointer}.videoAdUi-mobile .videoAdUiSkipButton{font:normal 16px arial,helvetica,sans-serif;min-width:100px;padding:6px 7px}.videoAdUiSkipButton:hover{border-color:rgba(255,255,255,1)}.videoAdUi-swipeable .videoAdUiSkipButton{background:rgba(255,255,255,0.8);border:1px solid rgba(0,0,0,0.8);color:#000}.videoAdUiSkipIcon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAQAAADs3AYjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAUAAAAFQC6IBuQAAAAUElEQVQoz93QwQkAIAwDwOIirtJNHM3RHCW+CqXG9q15hoNARB7KRAfrAeAoGKaQ4SuMOIUel9CwwZY9oaL8Bp+FUU8bSqFHVxgRhQxR+EM2fqKwh5sgSyYAAAAASUVORK5CYII=);display:inline-block;height:25px;margin-left:2px;vertical-align:middle;width:20px}@media all and (min-width:800px) and (min-height:400px){.videoAdUiTitle{font-size:15px}.videoAdUiAttribution{font-size:13px}.videoAdUiAttribution-gvn{font-size:16px!important}.videoAdUiPreSkipButton{min-width:200px}.videoAdUiPreSkipText{font-size:13px;width:105px;padding-right:6px}.videoAdUiPreSkipText.videoAdUiPreSkipTextOnly{font-size:13px}.videoAdUiPreSkipThumbnailImage{max-width:98px;max-height:52px}.videoAdUiShare{font-size:15px}.videoAdUiSkipButton{font-size:23px;min-width:200px}}.videoAdUi.blazer .videoAdUiProgressBar{background-color:#222;height:4px}.videoAdUi.blazer .videoAdUiProgress{background-image:none;background-color:#e6bc27;opacity:1;position:absolute}.videoAdUi.blazer .videoAdUiBuffer{background-color:#666;display:block;position:absolute}.videoAdUi.blazer .videoAdUiAuthorName{display:none}.videoAdUi.blazer .videoadUiTitle,.videoAdUi.blazer .videoAdUiLearnMore{font-family:"Helvetica Neue Light","Arial",sans-serif;font-size:14px;text-shadow:0 0 2px rgba(0,0,0,0.75)}.videoAdUi.blazer .videoAdUiAttribution{font-family:"Helvetica Neue Light","Arial",sans-serif;font-size:16px;text-shadow:0 0 2px rgba(0,0,0,0.5)}.videoAdUi.blazer .videoAdUiSkipButton,.videoAdUi.blazer .videoAdUiPreSkipButton{min-width:95px;width:95px;min-height:24px;font-size:13px}.videoAdUi.blazer .videoAdUiSkipButton{font-family:"Helvetica Neue Light","Arial",sans-serif;border:1px solid rgba(255,255,255,0.25);background-color:rgba(0,0,0,0.5)}.videoAdUi.blazer .videoAdUiPreSkipButton{font-family:"Helvetica Neue","Arial",sans-serif;background-color:rgba(0,0,0,0.25);text-shadow:1px 1px 1px rgba(0,0,0,0.75)}.videoAdUi.blazer .videoAdUiPreSkipText{padding:5px 0}.videoAdUi.blazer .videoAdUiPreSkipText.videoAdUiPreSkipTextOnly{line-height:inherit}.videoAdUi.blazer .videoAdUiLearnMore{text-shadow:1px 1px 1px rgba(0,0,0,0.75);margin:5px;margin-right:20px}.videoAdUi.blazer.phone .videoAdUiAuthorIcon,.videoAdUi.blazer.phone .videoadUiTitle{display:none}.videoAdUi.blazer.phone .videoAdUiAttribution{font-size:14px}.videoAdUi.blazer.phone .videoAdUiSkipButton{padding:6px 0}.videoAdUi.blazer.phone .videoAdUiSkipIcon{margin-left:6px}.videoAdUi.blazer.tablet .videoAdUiAuthorIcon,.videoAdUi.blazer.tablet .videoadUiTitle{left:0;position:absolute;margin-top:17px}.videoAdUi.blazer.tablet .videoAdUiAuthorIcon{margin:5px 10px}.videoAdUi.blazer.tablet .videoAdUiSkipButton,.videoAdUi.blazer.tablet .videoAdUiPreSkipButton{min-width:95px;width:95px;min-height:24px;font-family:"Helvetica Neue Light","Arial",sans-serif;font-size:13px;text-shadow:1px 1px 1px rgba(0,0,0,0.75)}.videoAdUi.blazer.tablet .videoAdUiPreSkipContainer,.videoAdUi.blazer.tablet .videoAdUiSkipContainer{bottom:55px}.videoAdUi.blazer.tablet .videoAdUiAttribution{left:0;bottom:0}.videoAdUi.blazer.tablet:hover .videoAdUiAttribution{right:84%;bottom:26px;text-align:right}.videoAdUi.blazer.tablet:hover .videoAdUiProgressBar{bottom:35px;left:16%;width:68%}.videoAdUi.blazer.tablet:hover .videoAdUiProgressBar,.videoAdUi.blazer.tablet:hover .videoAdUiBuffer,.videoAdUi.blazer.tablet:hover .videoAdUiProgress{height:20px}');
        c.appendChild(d)
    }
    P(c,
        "autoalign", a.k.oo);
    P(c, "viewmode-fullscreen", "fullscreen" == a.I);
    c.appendChild(a.V);
    xX(a).listen(c, "click", am);
    (wX(a) && bU(vX(a)) || a.k.useStyledNonLinearAds) && a.rk(a.j.j);
    return c
}
f.rk = function (a) {
    var b = xX(this);
    this.R = eP(jX);
    b.listen(this.R, "click", this.ey);
    var c = eP(iX);
    b.listen(c, "click", this.kl);
    a.appendChild(c)
};
function DX(a) {
    if (null != a.j) {
        var b = Ug(a.A.uf()), c = Ug(Vd(a.j.j));
        if (c.width > b.width || c.height > b.height)
            throw b = vK(VJ, null), FX(a, b), a.stop(), b;
    }
}
function FX(a, b) {
    var c = zV(b, vX(a)), d = OT(vX(a));
    JJ(d, c)
}
f.nx = function (a) {
    this.Yb("click");
    am(a)
};
f.kl = function () {
    this.Oo();
    this.qa("userClose");
    BX(this, "close")
};
f.Oo = function () {
    this.j.stop();
    var a = ST(vX(this));
    null != a && BT(a);
    Td(this.R, this.j.j)
};
f.ey = function (a) {
    am(a);
    this.j.show();
    this.j.play();
    Td(this.j.j, this.R);
    gn(function () {
        Yg(this.V, !1)
    }, 500, this);
    Yg(this.V, !0)
};
function HX(a) {
    CX.call(this, a);
    this.K = !1;
    this.D = this.W = null;
    mb(a) || null == a[0].o || (this.W = a[0].o, qf(new J(this.W.adTagUrl), "channel"))
}
inherit(HX, CX);
f = HX.prototype;
f.Dp = function (a, b) {
    if (this.K || null == b)
        b = v;
    var c;
    EK() && this.K ? c = new lX(a[0], b) : "fullscreen" == this.I ? c = new pX(a) : 1 < a.length ? (c = new nX(a), c
    .
    K = 15E3
    ) :
    c = new lX(a[0], b);
    c.vp = 100;
    this.K && (c.iq = 30);
    c.jq = 45E3;
    c.yr = 6E3;
    P(c.j, "scalable", this.K);
    P(c.N(), "yt-text-overlay", EK() && this.K);
    return c
};
f.SC = function (a) {
    var b = a.j;
    null != b ? (null == this.S && (this.S = a.getExtension("AdSense").C), AT(b, pa(this.Gy, a, b)), zT(b, pa(this.ox, a, b)), b.la = !1, "Text" == b.getContentType() && (this.K = !0), this.D.push(b)) : (b = tK($J), b = zV(b, a), JJ
    (OT(a), b)
    )
};
f.Hc = function (a, b, c) {
    HX.J.Hc.call(this, a, b, c);
    this.k.oo = !0;
    null != this.ads[0] && 0 < ZQ(this.ads[0]).length ? yX(this, this.ads[0]) : EK() && this.qa("companionBackfill")
};
f.yk = function () {
    null == this.D && (this.D = [], D(this.ads, this.SC, this));
    if (0 == this.D.length)
        throw vK($J);
    var a = [];
    D(this.D, function (b) {
        yT(b, xX(this));
        "Flash" != b.getContentType() || b.getAd().getExtension("TemplateAd") || (b.vo = !0);
        a.push(b.te());
        ET(b, this.S.o)
    }, this);
    if (0 == a.length)
        throw vK($J);
    return GX(this, a)
};
f.kl = function (a) {
    HX.J.kl.call(this, a);
    D(this.D, function (a) {
        var c = FV(a.getAd());
        this.B.j = c;
        this.Le(a, ["close"]);
        BX(this, "close");
        this.B = new qX
    }, this)
};
f.rk = function (a) {
    HX.J.rk.call(this, a);
    var b = this.ads[0].getExtension("AdSense"), c = b.A, b = b.B, c = eP(kX, {
        text: null != c ? c : this.S.j,
        url: null != b ? b : this.S.k
    });
    a.appendChild(c)
};
f.Gy = function (a, b) {
    this.M ? this.Br(a, b) : this.P.push(x(this.Br, this, a, b));
    AT(b, v)
};
f.Br = function (a, b) {
    var c = FV(a);
    this.B.j = c;
    this.Of(a);
    this.Le(b, ["creativeview"]);
    BX(this, "impression");
    BX(this, "creativeview");
    this.B = new qX
};
f.ox = function (a, b, c) {
    c = Qg(c);
    a = a.getExtension("AdSense");
    a = new J(a.k);
    var d = b.fd();
    isNaN(d) && (d = Tg(b.te()).width);
    var e = b.getHeight();
    isNaN(e) && (e = Tg(b.te()).height);
    b = NS();
    b = ["0", "aw=" + d, "ah=" + e, "nx=" + c.x, "ny=" + c.y, "viewMode=" + this.I, "sdkv=h.0.0.0", "eids=" + RS(b)];
    FJ(a, "elementclick", b);
    D(this.D, function (a) {
        var b = FV(a.getAd());
        this.B.j = b;
        EX(this, a);
        BX(this, "click");
        this.B = new qX
    }, this);
    this.qa("click")
};
f.yi = function (a) {
    this.I != a && (HX.J.yi.call(this, a), null != this.o && (Rd(this.o), a = this.yk(), this.o.appendChild(a)), this.qa("expandedChanged"))
};
function IX(a) {
    hJ.call(this, "adMetadata", a)
}
inherit(IX, hJ);
function JX(a, b, c) {
    var d = v, e;
    QS(947225) ? (e = new J("https://www.googleapis.com/youtube/v3/videos"), K(e,
    "id", a
),
    K(e, "part", "snippet,status"), K(e, "fields", "items/id,items/snippet/title,items/snippet/channelId,items/status/privacyStatus")
) :
    e = new J("https://gdata.youtube.com/feeds/api/videos/" + a);
    null != c && (b = x(b, c), d = x(d, c));
    KX(new bo, e, b, d)
}
function LX(a, b, c) {
    var d = v, e;
    QS(947225) ? (e = new J("https://www.googleapis.com/youtube/v3/channels"), K(e,
    "id", a
),
    K(e, "part", "snippet,statistics"), K(e, "fields", "items/id,items/snippet/title,items/snippet/thumbnails/default/url,items/statistics/videoCount")
) :
    e = new J("https://gdata.youtube.com/feeds/api/channels/" + a);
    null != c && (b = x(b, c), d = x(d, c));
    KX(new bo, e, b, d)
}
function KX(a, b, c, d) {
    MX(b);
    fo(a, 2E3);
    var e = new mn(a);
    qn(e, a, "success", function (a) {
        a = a.target;
        var b;
        b = a.j ? jg(a.j.responseText) : void 0;
        c(b || {});
        e.dispose();
        a.dispose()
    });
    qn(e, a, ["error", "timeout"], function (a) {
        a = a.target;
        var b = null;
        0 != a.k && (b = Error(tn(a.k)));
        d(b);
        e.dispose();
        a.dispose()
    });
    a.send(b)
}
function MX(a) {
    QS(947225) ? K(a, "key", "AIzaSyDykhSj35yFHOiDglTp-ZuD9HCUQf62oS0") : (K(a, "alt", "json"), K(a, "v", "2"))
}

function NX(a, b, c, d, e) {
    Tv.call(this);
    this.k = a;
    this.B = b;
    this.C = c;
    this.o = d;
    this.D = ea(e) ? e : [e]
}
inherit(NX, Tv);
f = NX.prototype;
f.play = function () {
    if (this.ub())
        return !1;
    this.Ni();
    this.uc("play");
    this.startTime = y();
    this.j = 1;
    if (Kw())
        return Bg(this.k, this.C), this.A = gn(this.gx, void 0, this), !0;
    this.Om(!1);
    return !1
};
f.gx = function () {
    Ug(this.k);
    Iw(this.k, this.D);
    Bg(this.k, this.o);
    this.A = gn(x(this.Om, this, !1), 1E3 * this.B)
};
f.stop = function () {
    this.ub() && this.Om(!0)
};
f.Om = function (a) {
    Jw(this.k, "");
    hn(this.A);
    Bg(this.k, this.o);
    this.endTime = y();
    this.j = 0;
    if (a)
        this.onStop();
    else
        this.$b();
    this.Pg()
};
f.L = function () {
    this.stop();
    NX.J.L.call(this)
};
f.pause = function () {
};
function OX(a, b, c, d) {
    return new NX(a, .5, {opacity: c}, {opacity: d}, {property: "opacity", duration: .5, timing: b, Go: 0})
}

function PX(a, b) {
    U.call(this);
    this.o = a;
    this.M = 0;
    this.G = !1;
    this.k = 1;
    this.j = this.R = this.I = this.O = this.A = null;
    this.B = new mn(this);
    this.S = !1;
    this.W = this.V = this.P = 0;
    this.C = this.F = this.D = null;
    this.K = !1;
    this.H = new FO;
    this.o.D && (this.B.listen(b, "touchstart", this.Sy), this.B.listen(b, "touchmove", this.Ry), this.B.listen(b, "touchend", this.Qy));
    this.A = eP(EP);
    this.O = Dd("videoAdUiPreSkipButton", this.A);
    this.I = Dd("videoAdUiPreSkipText", this.O);
    this.R = Dd("videoAdUiPreSkipThumbnail", this.O);
    ae(this.I, FP({As: QX(this)}));
    var c = this.o.Ga, c = (A(B(c)) ? null : "//i1.ytimg.com/vi/" + c + "/mqdefault.jpg") || "";
    if (this.o.showContentThumbnail && !A(B(c))) {
        var d = Nd("img");
        d.setAttribute("src", c);
        N(d, "videoAdUiPreSkipThumbnailImage");
        this.R.appendChild(d)
    } else
        N(this.I, "videoAdUiPreSkipTextOnly");
    this.o.D ? c = "\u00ab Swipe to Skip" : (c = "", d = ra("Skip Ad \u00bb"), c = c + d, d = new RegExp(Oa("\u00bb"), ""), c = c.replace(d, ""), c = xa(c));
    this.j = eP(GP, {jD: c});
    Yg(this.A, !1);
    b.appendChild(this.A);
    Yg(this.j, !1);
    Xg(this.j, 0);
    b.appendChild(this.j);
    this.B.listen(this.H,
        "click", this.hD);
    GO(this.H, this.j)
}
inherit(PX, U);
f = PX.prototype;
f.L = function () {
    null != this.D && (this.D.dispose(), this.D = null);
    null != this.F && (this.F.dispose(), this.F = null);
    RX(this);
    null != this.A && (Sd(this.A), this.A = null);
    null != this.j && (Sd(this.j), this.j = null);
    this.H.dispose();
    this.H = null;
    this.B.dispose();
    this.B = null;
    this.K = !1;
    PX.J.L.call(this)
};
f.update = function (a, b) {
    this.M = b;
    if (!(0 >= this.M || null == this.o.skipOffset || 0 > SR(this.o.skipOffset))) {
        var c = SR(this.o.skipOffset);
        c >= this.M || 3 == this.k || (0 > a ? this.k = 1 : a <= c ? (2 != this.k && (SX(this, 0), OX(this.A, "ease-out", 0, 1).play(), Yg(this.A, !0)), this.k = 2) : (3 != this.k && (Yg(this.j, !0), this.F = new NX(this.A, .5, {
            opacity: 1,
            visibility: "shown"
        }, {opacity: .9, visibility: "hidden"}, {
            property: "opacity",
            duration: .5,
            timing: "ease-out",
            Go: 0
        }), this.D = OX(this.j, "ease-out", 0, 1), this.F.play(), this.D.play(), this.B.listen(Yd(this.j),
            "mouseover", this.PC), this.B.listen(Yd(this.j), "mouseout", this.Sr), this.Sr()), this.k = 3, this.U("skipshown")))
    }
    2 == this.k && SX(this, a)
};
f.skip = function () {
    return null == this.o.skipOffset || 3 != this.k || this.G ? !1 : (this.G = !0, this.U("PUBLISHER_INVOKED_SKIP"), !0)
};
f.Sy = function (a) {
    var b = a.j;
    3 == this.k && 1 == b.touches.length && (this.S = !0, this.W = b.touches[0].pageX, a.preventDefault())
};
f.Ry = function (a) {
    var b = a.j;
    3 == this.k && 1 == b.touches.length && this.S && (b = b.touches[0].pageX, this.P = this.V - b, this.V = b, b = this.W - b, 0 < b && (this.j.style.right = b + "px"), a.preventDefault())
};
f.Qy = function () {
    this.S = !1;
    if (3 == this.k) {
        var a = Tg(Yd(this.j));
        if (parseInt(this.j.style.right, 10) + 4 * this.P > .25 * a.width && 0 < this.P) {
            Yg(this.j, !1);
            this.G = !0;
            this.U("skip");
            return
        }
    }
    this.j.style.right = 0
};
function QX(a) {
    return null != a.o.skipOffset && -1 != SR(a.o.skipOffset) ? SR(a.o.skipOffset) : -1
}
function SX(a, b) {
    var c = QX(a);
    if (!(0 > c)) {
        var c = Math.round(c - b), d = " " + c;
        60 <= c && (d = " " + MR(c));
        c = FP({As: d});
        ae(a.I, c)
    }
}
f.hD = function (a) {
    EK() || a.stopPropagation();
    3 != this.k || this.G || (this.G = !0, this.U("skip"))
};
f.Sr = function () {
    null == this.C && (this.C = gn(function () {
        this.K = !0;
        OX(this.j, "ease-in", 1, .5).play();
        this.C = null
    }, this.K ? 5E3 : 15E3, this))
};
f.PC = function () {
    Xg(this.j, 1);
    RX(this)
};
function RX(a) {
    null != a.C && (hn(a.C), a.C = null)
}

function TX(a, b, c) {
    U.call(this);
    this.j = a;
    this.W = c;
    this.S = this.M = this.K = this.F = this.D = this.O = this.P = this.k = null;
    this.V = !1;
    this.G = this.A = this.C = this.R = this.I = this.H = this.B = null;
    this.o = new mn(this);
    this.ea = [];
    this.k = eP(this.j.C, {wd: this.j.wd, Gf: this.j.Gf, Lh: this.j.Lh});
    this.o.listen(this.k, "touchmove", this.Ky);
    this.I = Dd("videoAdUiProgress", this.k);
    this.R = Dd("videoAdUiBuffer", this.k);
    this.P = Dd("videoAdUiAttributionContainer", this.k);
    this.O = Dd("videoAdUiAttribution", this.k);
    this.D = Dd("videoAdUiAuthorIcon",
        this.k);
    this.F = Dd("videoAdUiAuthorName", this.k);
    this.K = Dd("videoAdUiLearnMore", this.k);
    this.M = Dd("videoAdUiLearnMoreText", this.k);
    this.G = Dd("videoAdUiShare", this.k);
    this.B = Dd("videoAdUiTitle", this.k);
    this.H = Dd("videoAdUiTopBar", this.k);
    this.S = Dd("videoAdUiBottomBar", this.k);
    null != this.D && this.o.listen(this.D, "click", this.qw);
    null != this.F && this.o.listen(this.F, "click", this.rw);
    null != this.K && this.o.listen(this.K, "click", this.Yp);
    null != this.M && this.o.listen(this.M, "click", this.Yp);
    null != this.G && this.o.listen(this.G,
        "click", this.bD);
    null != this.B && this.o.listen(this.B, "click", this.rD);
    null != this.H && this.o.listen(this.k, "mouseover", this.aD);
    null != this.j.skipOffset && (this.A = new PX(this.j, this.k), this.A.nj(this));
    400 >= (parseInt(Fg(b, "width"), 10) || b.width) && N(this.k, "videoAdUi-mobile");
    this.j.F && (N(this.k, "blazer"), window.settings && window.settings.isTablet ? N(this.k, "tablet") : N(this.k, "phone"));
    this.j.D && N(this.k, "videoAdUi-swipeable");
    Yg(this.k, !1);
    b.appendChild(this.k);
    this.j.o || (this.C = I("div", {style: "width:100%;height:100%"}),
        this.k.appendChild(this.C));
    UX(this)
}
inherit(TX, U);
f = TX.prototype;
f.show = function () {
    null != this.k && Yg(this.k, !0)
};
f.skip = function () {
    var a;
    if (a = null != this.A)
        a = this.A, a = null != a.o.skipOffset && 3 == a.k;
    return a ? this.A.skip() : !1
};
f.L = function () {
    null != this.k && (Sd(this.k), this.k = null);
    null != this.A && (this.A.dispose(), this.A = null);
    this.C = null;
    this.o.dispose();
    this.o = null;
    this.V = !1;
    TX.J.L.call(this)
};
f.update = function (a, b, c, d, e) {
    this.V = !0;
    null != this.k && (null != this.O && VX(this, a, c, d, e), null != this.I && Sg(this.I, a / c * 100 + "%"), null != this.R && Sg(this.R, b / c * 100 + "%"), 0 < c && null != this.j.skipOffset && null != this.A && (TR(this.j.skipOffset, c), this.A.update(a, c)), this.j.B && 0 < c && 5 > c - a && N(this.H, "videoAdUiTopBarNoFade"), D(this.ea, function (b) {
        b.update(a, c)
    }, this))
};
function WX(a, b) {
    a.ea = b;
    D(b, function (a) {
        a.display(this.k)
    }, a)
}
function UX(a) {
    var b = a.j.M && (a.W > a.j.R || 0 == a.W), c = b && a.j.O, d = b && a.j.S, e = b && a.j.k, g = b && a.j.K, b = b && a.j.B, h = a.j.I && a.j.j, k = "0px";
    null != a.B && (Yg(a.B, b), null != a.D && Yg(a.D, c), null != a.F && Yg(a.F, d), null != a.K && Yg(a.K, e), null != a.G && (Yg(a.G, g), g && a.U("videoShareShown")), null != a.H && Yg(a.H, b || c || d || e));
    null != a.P && XX(a);
    null != a.I && (Yg(a.I, h), h && (k = Fg(a.I, "height")));
    null != a.S && Bg(a.S, "bottom", k);
    null != a.M && Yg(a.M, a.j.o)
}
function VX(a, b, c, d, e) {
    var g = HP({yj: "", Jh: 0, Aj: 0});
    a.j.j && a.j.H && (b = MR(c - b), g = HP({yj: a.j.F ? " \u2022 " + b : ": (" + b + ")", Jh: d, Aj: e}));
    ae(a.O, g);
    XX(a)
}
function XX(a) {
    Yg(a.P, a.j.A && (!a.j.j || a.V))
}
f.qw = function () {
    this.U("videoAuthorIconClicked")
};
f.rw = function () {
    this.U("videoAuthorClicked")
};
f.Yp = function () {
    this.U("videoLearnMoreClicked")
};
f.bD = function () {
    this.U("videoShareClicked")
};
f.rD = function () {
    this.U("videoTitleClicked")
};
f.Ky = function (a) {
    a.preventDefault()
};
f.vs = function () {
    this.j.G ? this.U("click") : this.U("videoClicked")
};
f.aD = function () {
    N(this.H, "videoAdUiTopBarTransitions")
};
function YX() {
    this.wd = HP({yj: "", Jh: 0, Aj: 0});
    var a = "", b = ra("Learn More {$suffix}", {suffix: jP("")});
    this.Gf = a + b;
    var b = kP('<a href="https://www.google.com/settings/ads/onweb">'), c = kP("</a>"), a = "", b = ra("Visit Google's {$beginFormat}Ad Settings{$endFormat} to learn more about how ads are targeted or to opt out of personalized ads.", {
        beginFormat: jP(b),
        endFormat: jP(c)
    });
    this.Lh = kP(a + b);
    this.skipOffset = null;
    this.R = 6E3;
    this.H = this.j = this.G = this.A = !0;
    this.K = this.I = this.k = !1;
    this.M = !0;
    this.B = this.S = this.O = this.P =
        this.o = !1;
    this.C = null;
    this.D = dm && QS(0);
    this.showContentThumbnail = !0;
    this.F = !1
}
function ZX(a, b, c, d) {
    var e = new YX;
    e.o = a;
    e.X = b;
    e.skipOffset = c;
    e.Ga = null != d ? d.contentId : null;
    e.C = BP;
    e.Ua = OO(b, null != c, d.baseYouTubeUrl);
    e.showContentThumbnail = null != d.contentId && d.showContentThumbnail;
    return e
}

function $X(a) {
    $l.call(this, a)
}
inherit($X, $l);
function aY(a) {
    U.call(this);
    this.B = a;
    this.H = new ue;
    this.F = -1;
    this.I = !1
}
inherit(aY, U);
function bY(a) {
    this.k = !1;
    this.j = a.Gg();
    this.volume = a.ed()
}
bY.prototype.muted = function (a, b) {
    return !this.j && a || 0 < this.volume && 0 == b
};
f = aY.prototype;
f.L = function () {
    cY(this);
    aY.J.L.call(this)
};
function cY(a) {
    null != a.k && a.k.dispose();
    null != a.j && a.j.zf();
    null != a.C && a.C.dispose();
    a.C = null;
    null != a.D && a.D.dispose();
    a.D = null;
    a.H.clear();
    a.F = -1;
    a.I = !1
}
function dY(a, b, c) {
    if (!c || null == a.H.get(b)) {
        a.H.set(b, !0);
        t: {
            if (a.o && a.o.j.k) {
                if ("click" == b)
                    break t;
                "videoLearnMoreClicked" == b && rX(a.B, new $l("click"))
            }
            c = "click" == b || "videoLearnMoreClicked" == b ? 3 : null;
            null != c && null != a.j && a.j.Pr(c);
            rX(a.B, new $l(b))
        }
        a.U(b)
    }
}
f.ZA = function () {
    dY(this, "measurable_impression", !1)
};
f.tC = function (a) {
    a = a.o;
    a = IV(this.B.j, null != a ? a.viewabilityString : null);
    this.B.j = a;
    dY(this, "viewable_impression", !1)
};
f.bz = function () {
    var a = this.j.ad();
    if (-1 != a) {
        this.j.qg(.25 * a) && dY(this, "firstquartile", !0);
        this.j.qg(.5 * a) && dY(this, "midpoint", !0);
        this.j.qg(.75 * a) && dY(this, "thirdquartile", !0);
        var b = this.B, c = this.j.getCurrentTime();
        0 > b.C && ($R(b.k, a), b.C = 0);
        for (var a = YR(b.k, "progress"), d = b.C; d < a.length; d++) {
            var e = a[d];
            if (SR(e.k) > c)
                break;
            b.C = d + 1;
            GJ(e.j, b.j)
        }
    }
    eY(this)
};
function eY(a) {
    0 > a.F || a.I || !a.j.qg(a.F) && !a.j.Ee() || (a.I = !0, dY(a, "engagedview", !0), a.U(new $X("viewCount")))
}
f.az = function () {
    dY(this, "impression", !0);
    dY(this, "creativeview", !0);
    null != this.G || null != this.o || this.k.listen(this.j, "click", this.Gl);
    null != this.G && (this.C = new FO, this.k.listen(this.C, "click", this.Gl, !1), GO(this.C, this.G));
    null != this.o && (this.D = new FO, this.k.listen(this.D, "click", this.Gl, !1), GO(this.D, this.o));
    dY(this, "start", !0);
    (this.j.Gg() || 0 == this.j.ed()) && dY(this, "mute", !1)
};
f.cz = function () {
    var a = this.j.Gg(), b = this.j.ed(), c = this.A;
    c.j && !a || !a && 0 == c.volume && 0 < b ? dY(this, "unmute", !1) : this.A.muted(a, b) && dY(this, "mute", !1);
    this.A.j = a;
    this.A.volume = b
};
f.Zy = function () {
    this.j.Ee() ? (eY(this), dY(this, "complete", !0)) : this.j.Hg() && !this.j.Gp() && (this.A.k = !0, dY(this, "pause", !1))
};
f.$y = function () {
    this.A.k && (this.A.k = !1, dY(this, "resume", !1))
};
f.Vy = function () {
    eY(this);
    dY(this, "complete", !0)
};
f.Gl = function () {
    dY(this, "click", !1)
};
f.Wy = function () {
    dY(this, "error", !1)
};
f.Yy = function () {
    dY(this, "mediaLoadTimeout", !1)
};
f.jr = function () {
    dY(this, "skipshown", !0)
};
f.dC = function () {
    dY(this, "videoAuthorIconClicked", !1)
};
f.cC = function () {
    dY(this, "videoAuthorClicked", !1)
};
f.fC = function () {
    dY(this, "videoClicked", !1)
};
f.lC = function () {
    dY(this, "videoLearnMoreClicked", !1)
};
f.pC = function () {
    dY(this, "videoShareClicked", !1)
};
f.qC = function () {
    dY(this, "videoShareShown", !0)
};
f.sC = function () {
    dY(this, "videoTitleClicked", !1)
};
f.Op = function () {
    dY(this, "skip", !0)
};
f.qB = function () {
    dY(this, "skip", !0)
};
f.Xy = function () {
    dY(this, "fullscreen", !1)
};
f.GA = function () {
    dY(this, "exitfullscreen", !1)
};
function fY(a) {
    uX.call(this, a);
    this.o = null;
    this.D = new aY(this.B);
    this.S = this.V = this.R = this.M = !1;
    this.P = 1;
    this.K = null
}
inherit(fY, uX);
f = fY.prototype;
f.L = function () {
    gY(this);
    var a = !1;
    null != this.A && (a = this.A.vl(), this.A.hide(), this.A = null);
    this.M && (this.M = !1, this.j.Hg() || this.j.Ee() || this.j.pause(), MK() && !a && (this.j.yf(.001), this.j.load("", "")), LK() && this.j.Hd() && !a && this.j.Qk(), this.qa("contentResumeRequested"), this.qa("allAdsCompleted"));
    fY.J.L.call(this)
};
function gY(a) {
    ti(a.o);
    a.o = null;
    ti(a.D);
    ti(a.B);
    ti(a.G);
    a.R = !1;
    a.S = !1
}
function hY(a) {
    a.Vg();
    wX(a) ? a.start() : a.stop()
}
f.Vg = function () {
    gY(this);
    fY.J.Vg.call(this);
    wX(this) && (this.B = new qX, this.D = new aY(this.B))
};
f.rz = function (a, b, c) {
    if (!this.R) {
        this.R = !0;
        var d = MO(b);
        if (this.k.useVideoAdUi) {
            var e = a.getExtension("AdSense"), g = this.k.tl && ((null === b ? !1 : "modules" == (new J(b)).sf().toLowerCase()) || null != e && e.F), h = !0, k = !0;
            if (QS(909720) || KT(a) && 30 < iU(a) && QS(909721))
                k = h = !1;
            e = -1 != iU(a) && 0 != iU(a) && 7 >= iU(a) ? null : cU(a);
            if (EK()) {
                var l = this.k, p = A(B(hU(a))) ? !1 : this.k.ts;
                MT(a, rJ);
                d = ZX(g, d, e, l);
                d.k = p;
                d.I = k;
                d.H = h;
                d.F = l.Xm;
                d.G = l.wD;
                d.K = l.useShareButton;
                d.P = l.xD;
                d.R = 0;
                l.Xm && (e = "", l = ra("Visit Advertiser"), d.Gf = e + l)
            } else
                MT(a, rJ) || !A(B(a.I)) ? (l = g, p = this.k, !A(B(d)) && null !== e && 0 < SR(e) && QS(41351090) && (l = !0), d = ZX(l, d, e, p), d.C = l ? DP : CP
        ) :
            (d = ZX(g, d, e, this.k), d
        .
            M = !1, d.A = !1, d.j = !1
        )
            ;
            e = this.A.Yk();
            null === e ? e = document.body : (Rd(e), l = I("style", {type: "text/css"}, '.close-padding{color:#fff;cursor:pointer;margin:0;padding-bottom:10px;padding-left:10px;position:absolute;right:0;top:0;z-index:1001}.close-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAPAAAADwBjHBMTAAAAt0lEQVQY03XQMW7CQBAAwLmTlSp9JFpHiCYfiFzkCZbfkqfwjshPoEART6BwWmRQ5IrqikDB4QQFb7V7o7vd2/CiPr26F5/aEJan0lR8KUos7uJWKV6LTvcvo7gercHzn2zk6ADW+nzzYO4iKDS5vOBck5+NkAwas9xvpjFIv0yyscu8s8k4cmcFHsFqnD1zDxbe8w76249ViGrfah9+VLdM5cEgSd7GzhR7T7YTO9+LbThO4FEbzuewMmr11FxHAAAAAElFTkSuQmCC);float:right;height:15px;margin:5px 4px 0 0;width:15px}.yt-text-overlay .close-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAACgAAAAoATqZ25QAAAN1JREFUCNcB0gAt/wDbutvr23TbBAAA2wXbeNvs27UAAAHb9QAK+v3CoyBzJGAAhAAJ9vsvjgNuAftABgMUKvtBDlEBDvv9ouLGAAEAAJunMVIPBgAAAADx+aXjj90AoAAAAAAAwM/b/9v/2/+k6wCtAFUAAAIAANtxGxcAAAAAAAAlDX8LAKsAAAPbdgCDABH1+dDwEAUPBiggNCGxsQHb9AAL+/2c4KPZdQlNPwQC9vsvWwIAzff8ouGU3euhs1TJrvj82vQAXQEAAACRACMApwCpAPwABABaAFcA1sKJVOsU6fRuAAAAAElFTkSuQmCC);height:10px;margin:9px 9px 0 0;width:10px}.close-padding:hover .close-button{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAPAAAADwBjHBMTAAAAs0lEQVQY03XQLc7CQBAA0LdQjf8UQSCBcIHvAHgM6Wm4CB4kAk96g+IQhECCJATbUMy2NIGO2Mzs298JU/Py36/Y24SwKofa4ihkJYOfeEKnKnL5V0ZSTe3AqJHVHFzBzsUBXI2pDu9K4+pD3JnqfrjwkOrH+/pSD8WHKWTOkc+yiDXntqAHtvXbI1/AxNKkUdcfmyFYuFt4Kc0iN7qWoIhj1bXk5s+ppec3nXV4tuDTOrwBYQs0jH6JoccAAAAASUVORK5CYII=)}.yt-text-overlay .close-padding:hover .close-button{background-color:rgba(0,0,0,0.15);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAACgAAAAoATqZ25QAAALpJREFUCNclyL1Kw1AAgNFPqLh3cu/D+ARV8S0UEcFVoYOL4Kw4FSmClBZiB38WHZ10sQUnB6MR2hruTVI/h5zx4MjUXRvgsvt+OQT81VBdn7803THXWUEHD+JCf+L48e9bY9WZ0AcG3SyqahYO30jYBOD9uc67lCvaALjtR52f4TSpa89cp+E+nRYayuQMcK6xOhqvDi9ui4XOCtr4MC+PJys3rK81R728fMroLwEntOhySUWDLTZ4/QdyroIjdfxoFwAAAABJRU5ErkJggg==);background-position:center center;background-repeat:no-repeat;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:inset 0 -1px 3px rgba(0,0,0,0.3),0 1px 0 rgba(255,255,255,0.5);height:20px;margin:4px 4px 0 0;width:20px}.recall-button{background:rgba(200,200,200,0.2) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAAAl2cEFnAAAACgAAAAgAfJAUZwAAAURJREFUGNMFwb1LAmEAB+Dfe+/daZ3aWX6k1WFmSElQUBYUVIsguTQ0BUm4VtDYFLT4b7hkYLQGDg5BtERkUIRDgX1oWg6deKl359vzEFZO0mwWJgAUjgr88fe7R/2BkVonXVOGOQRQAJSwcp4CWWhKhnI6Vg0TkWYbnc8G7hbCjlLM3SQOBZQDAPgyk3wP+/Vf2Oyu4JV/NHDf1CG/1NREdZuZVRUCeiaLal12iETBQ4E1iN4QaNLqAafMptlw6Yvtwh4cI5CiIm09BAh06fbDbEx7saXp0M9vkDtJELQ5jPQAK1i5Irb+mGwYbEfV2AHiZz7M7YVLNZZ6rLDYACac8xAkwjp6ROf4ePEV19EZmaCrdQXwbzq19V8W68qUH+Hx4OYFnp6ZjJWck4NlUYLVf5pOgpXzdAOCOIg+N1zLIQuPpX9L/XzfXOCrFgAAAABJRU5ErkJggg==) no-repeat center;border:1px solid rgba(255,255,255,0.498039);box-shadow:rgba(0,0,0,0.701961) 0 4px 3px;color:#fff;cursor:pointer;height:11px;width:26px;z-index:1001}.yt-text-overlay .recall-button{background:rgba(0,0,0,0.15) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAQAAAC7znxOAAAKPWlDQ1BpY2MAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4BUaaISkgChhBgSQOyIqMCIoiKCFRkUccDREZCxIoqFQbH3AXkIKOPgKDZU3g/eGn2z5r03b/avvfY5Z53vnH0+AEZgsESahaoBZEoV8ogAHzw2Lh4ndwMKVCCBA4BAmC0LifSPAgDg+/Hw7IgAH/gCBODNbUAAAG7YBIbhOPx/UBfK5AoAJAwApovE2UIApBAAMnIVMgUAMgoA7KR0mQIAJQAAWx4bFw+AagEAO2WSTwMAdtIk9wIAtihTKgJAowBAJsoUiQDQDgBYl6MUiwCwYAAoypGIcwGwmwBgkqHMlABg7wCAnSkWZAMQGABgohALUwEI9gDAkEdF8AAIMwEojJSveNJXXCHOUwAA8LJki+WSlFQFbiG0xB1cXbl4oDg3Q6xQ2IQJhOkCuQjnZWXKBNLFAJMzAwCARnZEgA/O9+M5O7g6O9s42jp8taj/GvyLiI2L/5c/r8IBAQCE0/VF+7O8rBoA7hgAtvGLlrQdoGUNgNb9L5rJHgDVQoDmq1/Nw+H78fBUhULmZmeXm5trKxELbYWpX/X5nwl/AV/1s+X78fDf14P7ipMFygwFHhHggwuzMrKUcjxbJhCKcZs/HvHfLvzzd0yLECeL5WKpUIxHS8S5EmkKzsuSiiQKSZYUl0j/k4l/s+wPmLxrAGDVfgb2QltQu8oG7JcuILDogCXsAgDkd9+CqdEQBgAxBoOTdw8AMPmb/x1oGQCg2ZIUHACAFxGFC5XynMkYAQCACDRQBTZogz4YgwXYgCO4gDt4gR/MhlCIgjhYAEJIhUyQQy4shVVQBCWwEbZCFeyGWqiHRjgCLXACzsIFuALX4BY8gF4YgOcwCm9gHEEQMsJEWIg2YoCYItaII8JFZiF+SDASgcQhiUgKIkWUyFJkNVKClCNVyF6kHvkeOY6cRS4hPcg9pA8ZRn5DPqAYykDZqB5qhtqhXNQbDUKj0PloCroIzUcL0Q1oJVqDHkKb0bPoFfQW2os+R8cwwOgYBzPEbDAuxsNCsXgsGZNjy7FirAKrwRqxNqwTu4H1YiPYewKJwCLgBBuCOyGQMJcgJCwiLCeUEqoIBwjNhA7CDUIfYZTwmcgk6hKtiW5EPjGWmELMJRYRK4h1xGPE88RbxAHiGxKJxCGZk1xIgaQ4UhppCamUtJPURDpD6iH1k8bIZLI22ZrsQQ4lC8gKchF5O/kQ+TT5OnmA/I5CpxhQHCn+lHiKlFJAqaAcpJyiXKcMUsapalRTqhs1lCqiLqaWUWupbdSr1AHqOE2dZk7zoEXR0miraJW0Rtp52kPaKzqdbkR3pYfTJfSV9Er6YfpFeh/9PUODYcXgMRIYSsYGxn7GGcY9xismk2nG9GLGMxXMDcx65jnmY+Y7FZaKrQpfRaSyQqVapVnlusoLVaqqqaq36gLVfNUK1aOqV1VH1KhqZmo8NYHacrVqteNqd9TG1FnqDuqh6pnqpeoH1S+pD2mQNcw0/DREGoUa+zTOafSzMJYxi8cSslazalnnWQNsEtuczWensUvY37G72aOaGpozNKM18zSrNU9q9nIwjhmHz8nglHGOcG5zPkzRm+I9RTxl/ZTGKdenvNWaquWlJdYq1mrSuqX1QRvX9tNO196k3aL9SIegY6UTrpOrs0vnvM7IVPZU96nCqcVTj0y9r4vqWulG6C7R3afbpTump68XoCfT2653Tm9En6PvpZ+mv0X/lP6wActgloHEYIvBaYNnuCbujWfglXgHPmqoaxhoqDTca9htOG5kbjTXqMCoyeiRMc2Ya5xsvMW43XjUxMAkxGSpSYPJfVOqKdc01XSbaafpWzNzsxiztWYtZkPmWuZ883zzBvOHFkwLT4tFFjUWNy1JllzLdMudltesUCsnq1Sraqur1qi1s7XEeqd1zzTiNNdp0mk10+7YMGy8bXJsGmz6bDm2wbYFti22L+xM7OLtNtl12n22d7LPsK+1f+Cg4TDbocChzeE3RytHoWO1483pzOn+01dMb53+cob1DPGMXTPuOrGcQpzWOrU7fXJ2cZY7NzoPu5i4JLrscLnDZXPDuKXci65EVx/XFa4nXN+7Obsp3I64/epu457uftB9aKb5TPHM2pn9HkYeAo+9Hr2z8FmJs/bM6vU09BR41ng+8TL2EnnVeQ16W3qneR/yfuFj7yP3OebzlufGW8Y744v5BvgW+3b7afjN9avye+xv5J/i3+A/GuAUsCTgTCAxMChwU+Advh5fyK/nj852mb1sdkcQIygyqCroSbBVsDy4LQQNmR2yOeThHNM50jktoRDKD90c+ijMPGxR2I/hpPCw8OrwpxEOEUsjOiNZkQsjD0a+ifKJKot6MNdirnJue7RqdEJ0ffTbGN+Y8pjeWLvYZbFX4nTiJHGt8eT46Pi6+LF5fvO2zhtIcEooSrg933x+3vxLC3QWZCw4uVB1oWDh0URiYkziwcSPglBBjWAsiZ+0I2lUyBNuEz4XeYm2iIbFHuJy8WCyR3J58lCKR8rmlOFUz9SK1BEJT1IleZkWmLY77W16aPr+9ImMmIymTEpmYuZxqYY0XdqRpZ+Vl9Ujs5YVyXoXuS3aumhUHiSvy0ay52e3KtgKmaJLaaFco+zLmZVTnfMuNzr3aJ56njSva7HV4vWLB/P9879dQlgiXNK+1HDpqqV9y7yX7V2OLE9a3r7CeEXhioGVASsPrKKtSl/1U4F9QXnB69Uxq9sK9QpXFvavCVjTUKRSJC+6s9Z97e51hHWSdd3rp6/fvv5zsaj4col9SUXJx1Jh6eVvHL6p/GZiQ/KG7jLnsl0bSRulG29v8tx0oFy9PL+8f3PI5uYt+JbiLa+3Ltx6qWJGxe5ttG3Kbb2VwZWt2022b9z+sSq16la1T3XTDt0d63e83SnaeX2X167G3Xq7S3Z/2CPZc3dvwN7mGrOain2kfTn7ntZG13Z+y/22vk6nrqTu037p/t4DEQc66l3q6w/qHixrQBuUDcOHEg5d+873u9ZGm8a9TZymksNwWHn42feJ398+EnSk/Sj3aOMPpj/sOMY6VtyMNC9uHm1JbeltjWvtOT77eHube9uxH21/3H/C8ET1Sc2TZadopwpPTZzOPz12RnZm5GzK2f72he0PzsWeu9kR3tF9Puj8xQv+F851eneevuhx8cQlt0vHL3Mvt1xxvtLc5dR17Cenn451O3c3X3W52nrN9Vpbz8yeU9c9r5+94Xvjwk3+zSu35tzquT339t07CXd674ruDt3LuPfyfs798QcrHxIfFj9Se1TxWPdxzc+WPzf1Ovee7PPt63oS+eRBv7D/+T+y//FxoPAp82nFoMFg/ZDj0Ilh/+Frz+Y9G3guez4+UvSL+i87Xli8+OFXr1+7RmNHB17KX078VvpK+9X+1zNet4+FjT1+k/lm/G3xO+13B95z33d+iPkwOJ77kfyx8pPlp7bPQZ8fTmROTPwTA5jz/CVjM6IAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAJAAAABgBkh0tHAAAALElEQVQI12P4zwCBv9JgLLjAr/8wQYTAf5ggsgBUEFXg/6//v9IYf/1nQAMAapVB10c/DEAAAAAASUVORK5CYII=) no-repeat center;border:1px solid rgba(0,0,0,0);box-shadow:none;height:17px;width:29px}.autoalign .recall-button{margin:auto}.yt-text-overlay.autoalign .recall-button{margin:auto auto 6px}.recall-button:hover{background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAAAAAAUx4O/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAl2cEFnAAAACgAAAAcA+wgIqAAAAEtJREFUCNcVi1kRwEAIQ3GAhEpAAhJWChKQsBIqBQlIQAIS0jQ/OeZFAIz70ARIjdDL2GYF1OMrxZ6JvUugjGoCG5rcJSHv+d/oMx893S/cqF2DpwAAAABJRU5ErkJggg==) no-repeat center}.yt-text-overlay .recall-button:hover{background:rgba(0,0,0,0.15) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAQAAAC7znxOAAAKPWlDQ1BpY2MAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4BUaaISkgChhBgSQOyIqMCIoiKCFRkUccDREZCxIoqFQbH3AXkIKOPgKDZU3g/eGn2z5r03b/avvfY5Z53vnH0+AEZgsESahaoBZEoV8ogAHzw2Lh4ndwMKVCCBA4BAmC0LifSPAgDg+/Hw7IgAH/gCBODNbUAAAG7YBIbhOPx/UBfK5AoAJAwApovE2UIApBAAMnIVMgUAMgoA7KR0mQIAJQAAWx4bFw+AagEAO2WSTwMAdtIk9wIAtihTKgJAowBAJsoUiQDQDgBYl6MUiwCwYAAoypGIcwGwmwBgkqHMlABg7wCAnSkWZAMQGABgohALUwEI9gDAkEdF8AAIMwEojJSveNJXXCHOUwAA8LJki+WSlFQFbiG0xB1cXbl4oDg3Q6xQ2IQJhOkCuQjnZWXKBNLFAJMzAwCARnZEgA/O9+M5O7g6O9s42jp8taj/GvyLiI2L/5c/r8IBAQCE0/VF+7O8rBoA7hgAtvGLlrQdoGUNgNb9L5rJHgDVQoDmq1/Nw+H78fBUhULmZmeXm5trKxELbYWpX/X5nwl/AV/1s+X78fDf14P7ipMFygwFHhHggwuzMrKUcjxbJhCKcZs/HvHfLvzzd0yLECeL5WKpUIxHS8S5EmkKzsuSiiQKSZYUl0j/k4l/s+wPmLxrAGDVfgb2QltQu8oG7JcuILDogCXsAgDkd9+CqdEQBgAxBoOTdw8AMPmb/x1oGQCg2ZIUHACAFxGFC5XynMkYAQCACDRQBTZogz4YgwXYgCO4gDt4gR/MhlCIgjhYAEJIhUyQQy4shVVQBCWwEbZCFeyGWqiHRjgCLXACzsIFuALX4BY8gF4YgOcwCm9gHEEQMsJEWIg2YoCYItaII8JFZiF+SDASgcQhiUgKIkWUyFJkNVKClCNVyF6kHvkeOY6cRS4hPcg9pA8ZRn5DPqAYykDZqB5qhtqhXNQbDUKj0PloCroIzUcL0Q1oJVqDHkKb0bPoFfQW2os+R8cwwOgYBzPEbDAuxsNCsXgsGZNjy7FirAKrwRqxNqwTu4H1YiPYewKJwCLgBBuCOyGQMJcgJCwiLCeUEqoIBwjNhA7CDUIfYZTwmcgk6hKtiW5EPjGWmELMJRYRK4h1xGPE88RbxAHiGxKJxCGZk1xIgaQ4UhppCamUtJPURDpD6iH1k8bIZLI22ZrsQQ4lC8gKchF5O/kQ+TT5OnmA/I5CpxhQHCn+lHiKlFJAqaAcpJyiXKcMUsapalRTqhs1lCqiLqaWUWupbdSr1AHqOE2dZk7zoEXR0miraJW0Rtp52kPaKzqdbkR3pYfTJfSV9Er6YfpFeh/9PUODYcXgMRIYSsYGxn7GGcY9xismk2nG9GLGMxXMDcx65jnmY+Y7FZaKrQpfRaSyQqVapVnlusoLVaqqqaq36gLVfNUK1aOqV1VH1KhqZmo8NYHacrVqteNqd9TG1FnqDuqh6pnqpeoH1S+pD2mQNcw0/DREGoUa+zTOafSzMJYxi8cSslazalnnWQNsEtuczWensUvY37G72aOaGpozNKM18zSrNU9q9nIwjhmHz8nglHGOcG5zPkzRm+I9RTxl/ZTGKdenvNWaquWlJdYq1mrSuqX1QRvX9tNO196k3aL9SIegY6UTrpOrs0vnvM7IVPZU96nCqcVTj0y9r4vqWulG6C7R3afbpTump68XoCfT2653Tm9En6PvpZ+mv0X/lP6wActgloHEYIvBaYNnuCbujWfglXgHPmqoaxhoqDTca9htOG5kbjTXqMCoyeiRMc2Ya5xsvMW43XjUxMAkxGSpSYPJfVOqKdc01XSbaafpWzNzsxiztWYtZkPmWuZ883zzBvOHFkwLT4tFFjUWNy1JllzLdMudltesUCsnq1Sraqur1qi1s7XEeqd1zzTiNNdp0mk10+7YMGy8bXJsGmz6bDm2wbYFti22L+xM7OLtNtl12n22d7LPsK+1f+Cg4TDbocChzeE3RytHoWO1483pzOn+01dMb53+cob1DPGMXTPuOrGcQpzWOrU7fXJ2cZY7NzoPu5i4JLrscLnDZXPDuKXci65EVx/XFa4nXN+7Obsp3I64/epu457uftB9aKb5TPHM2pn9HkYeAo+9Hr2z8FmJs/bM6vU09BR41ng+8TL2EnnVeQ16W3qneR/yfuFj7yP3OebzlufGW8Y744v5BvgW+3b7afjN9avye+xv5J/i3+A/GuAUsCTgTCAxMChwU+Advh5fyK/nj852mb1sdkcQIygyqCroSbBVsDy4LQQNmR2yOeThHNM50jktoRDKD90c+ijMPGxR2I/hpPCw8OrwpxEOEUsjOiNZkQsjD0a+ifKJKot6MNdirnJue7RqdEJ0ffTbGN+Y8pjeWLvYZbFX4nTiJHGt8eT46Pi6+LF5fvO2zhtIcEooSrg933x+3vxLC3QWZCw4uVB1oWDh0URiYkziwcSPglBBjWAsiZ+0I2lUyBNuEz4XeYm2iIbFHuJy8WCyR3J58lCKR8rmlOFUz9SK1BEJT1IleZkWmLY77W16aPr+9ImMmIymTEpmYuZxqYY0XdqRpZ+Vl9Ujs5YVyXoXuS3aumhUHiSvy0ay52e3KtgKmaJLaaFco+zLmZVTnfMuNzr3aJ56njSva7HV4vWLB/P9879dQlgiXNK+1HDpqqV9y7yX7V2OLE9a3r7CeEXhioGVASsPrKKtSl/1U4F9QXnB69Uxq9sK9QpXFvavCVjTUKRSJC+6s9Z97e51hHWSdd3rp6/fvv5zsaj4col9SUXJx1Jh6eVvHL6p/GZiQ/KG7jLnsl0bSRulG29v8tx0oFy9PL+8f3PI5uYt+JbiLa+3Ltx6qWJGxe5ttG3Kbb2VwZWt2022b9z+sSq16la1T3XTDt0d63e83SnaeX2X167G3Xq7S3Z/2CPZc3dvwN7mGrOain2kfTn7ntZG13Z+y/22vk6nrqTu037p/t4DEQc66l3q6w/qHixrQBuUDcOHEg5d+873u9ZGm8a9TZymksNwWHn42feJ398+EnSk/Sj3aOMPpj/sOMY6VtyMNC9uHm1JbeltjWvtOT77eHube9uxH21/3H/C8ET1Sc2TZadopwpPTZzOPz12RnZm5GzK2f72he0PzsWeu9kR3tF9Puj8xQv+F851eneevuhx8cQlt0vHL3Mvt1xxvtLc5dR17Cenn451O3c3X3W52nrN9Vpbz8yeU9c9r5+94Xvjwk3+zSu35tzquT339t07CXd674ruDt3LuPfyfs798QcrHxIfFj9Se1TxWPdxzc+WPzf1Ovee7PPt63oS+eRBv7D/+T+y//FxoPAp82nFoMFg/ZDj0Ilh/+Frz+Y9G3guez4+UvSL+i87Xli8+OFXr1+7RmNHB17KX078VvpK+9X+1zNet4+FjT1+k/lm/G3xO+13B95z33d+iPkwOJ77kfyx8pPlp7bPQZ8fTmROTPwTA5jz/CVjM6IAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAJAAAABgBkh0tHAAAALElEQVQI12P4zwCBv9JgLLjAr/8wQYTAf5ggsgBUEFXg/6//v9IYf/1nQAMAapVB10c/DEAAAAAASUVORK5CYII=) no-repeat center;border:1px solid rgba(255,255,255,0.5)}.auto-hide{display:none}body:hover .auto-hide{display:block}.attribution-button{bottom:12px;color:#fff;font:11px arial,sans-serif;position:absolute;right:5px;text-decoration:none;text-shadow:rgba(0,0,0,0.7) 0 4px 4px;z-index:1001}.yt-text-overlay .attribution-button{color:#888;text-shadow:none}.viewmode-fullscreen .attribution-button{bottom:auto;right:22px;top:5px}.yt-text-overlay.viewmode-fullscreen .attribution-button{right:5px;top:auto}.text-container .attribution-button{bottom:7px}.container{position:absolute;width:100%;z-index:1000}.container.autoalign{bottom:0;text-align:center}.container-stack{background-color:#666;border-radius:5px;display:block;padding:3px 0}.container-rotator .attribution-button{bottom:7px}.container-rotator .text-inner-container{left:20px}.container-selector{-webkit-box-shadow:0 4px 3px rgba(0,0,0,.7);-moz-box-shadow:0 4px 3px rgba(0,0,0,.7);box-shadow:0 4px 3px rgba(0,0,0,.7);background:#666;border-radius:2px;cursor:pointer;height:10px;left:5px;position:absolute;width:10px;z-index:1002}.container-selector:hover{background:#fff}.container-rotator .container-highlight:hover{border-color:#fff!important}.container-stack .container-highlight:hover{background-color:#999!important}.container-active{background:#fc0!important}.container-slider .attribution-button{bottom:7px}.container-slider .controls{max-width:100%!important}.container-slider .text-container{background-color:#000;border-radius:5px 5px 0 0;margin-bottom:0}.container-slider .text-title:hover{text-decoration:underline!important}.container-slider.hidden .controls{top:38px}.container-slider.animated .controls{-webkit-transition:top .4s;-moz-transition:top .4s;-o-transition:top .4s;transition:top .4s}.controls{display:inline-block;position:relative}.controls.scalable{display:block;min-width:320px;max-width:450px}.autoalign .controls.scalable{margin:auto}.flash-container,.image-container{display:inline-block;position:relative}.flash-container.click-capture .click-layer{display:block}.click-layer{background:rgba(0,0,0,0.0);bottom:0;left:0;position:absolute;right:0;top:0;z-index:100}.text-container{margin-bottom:5px;position:relative}.yt-text-overlay .text-container{margin-bottom:3px}.text-inner-container{background-image:-webkit-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:-moz-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:-ms-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:-o-linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));background-image:linear-gradient(top,rgba(20,20,20,0.6),rgba(209,209,209,0.6));border:1px solid rgba(102,102,102,0.7);border-radius:3px;box-shadow:rgba(0,0,0,0.7) 0 5px 5px;padding-left:10px;position:absolute;text-align:left;top:0;bottom:0;left:0;right:0}.yt-text-overlay .text-container .text-inner-container{background-color:rgba(0,0,0,0.6);background-image:none;border:1px solid rgba(0,0,0,0.6);border-radius:0;box-shadow:none;padding-left:10px}.viewmode-fullscreen .text-inner-container{background-image:none;border:none;box-shadow:none}.yt-text-overlay .controls:hover .text-inner-container{border:1px solid rgba(58,58,58,1.0)}.text-title{text-decoration:underline}.yt-text-overlay .text-title{text-decoration:none}.viewmode-fullscreen .text-title{text-decoration:none}.yt-text-overlay .controls:hover .text-container .text-title{text-decoration:underline}.text-image-link{float:left;position:relative}.text-image{box-shadow:rgba(0,0,0,0.498039) 0 3px 5px;height:57px;margin:3px 10px 0 0;width:79px}.yt-text-overlay .text-image{margin:2px 10px 0 0}.text-image-duration{background:#000;color:#fff;font:10px arial,sans-serif;padding:2px;position:absolute;right:10px;top:43px}.text-title{color:#fff;display:block;font:bold 14px arial,sans-serif;margin:7px 16px 0 0;overflow:hidden;padding-bottom:4px;text-overflow:ellipsis;text-shadow:rgba(0,0,0,0.7) 0 4px 4px;white-space:nowrap}.yt-text-overlay .text-title{margin-top:7px;text-shadow:#000 0 -1px 0}.text-description{color:#fff;font:12px arial,sans-serif;margin-top:-3px;overflow:hidden;text-overflow:ellipsis;text-shadow:rgba(0,0,0,0.7) 0 4px 4px;white-space:nowrap}.yt-text-overlay .text-description{text-align:left;text-shadow:none}.text-ad-channel{bottom:7px;color:#f9fcc0;font:bold 11px arial,sans-serif;left:10px;position:absolute;text-decoration:none;text-shadow:rgba(0,0,0,0.7) 0 4px 4px}.yt-text-overlay .text-ad-channel{bottom:9px;color:#eade90;font-weight:normal;left:10px;text-shadow:#000 0 -1px 0}.pyv .text-ad-channel{left:99px}.yt-text-overlay .pyv .text-ad-channel{left:99px}.viewmode-fullscreen .text-ad-channel{color:#ccc}.yt-text-overlay.viewmode-fullscreen .text-ad-channel{color:#eade90}.ima-sdk-frame body{background:transparent;height:100%;margin:0;overflow:hidden}.ima-sdk-frame{height:100%}.ima-sdk-frame-native body{background:#000}.ima-sdk-frame-native video{bottom:0;left:0;margin:auto;right:0;top:0}.ytp-iv-drawer-open .videoAdUiTopBar,.ytp-iv-drawer-open .videoAdUiPreSkipContainer,.ytp-iv-drawer-open .videoAdUiSkipContainer,.ytp-iv-drawer-open .ad-overlay .container{display:none}.videoAdUi{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;background-color:rgba(0,0,0,0);bottom:0;cursor:pointer;height:100%;left:0;min-height:100%;position:absolute;right:0;top:0;overflow:hidden}.videoAdUiTopBar{background:#000;border-bottom:1px solid #444;cursor:default;left:0;opacity:.8;padding:0;position:relative;top:0;right:0;z-index:1000}.videoAdUiTopBarWithGradients{background-image:-webkit-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:-moz-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:-ms-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:-o-linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-image:linear-gradient(top,rgba(0,0,0,0.8),rgba(0,0,0,0.7) 40%,rgba(0,0,0,0) 99%);background-color:rgba(0,0,0,0);border-bottom:none;height:40px}.videoAdUiTopBarTransitions{-webkit-transition:opacity ease-in .5s;-moz-transition:opacity ease-in .5s;-o-transition:opacity ease-in .5s;transition:opacity ease-in .5s;opacity:0}.videoAdUi:hover .videoAdUiTopBarTransitions{-webkit-transition:opacity ease-out .5s;-moz-transition:opacity ease-out .5s;-o-transition:opacity ease-out .5s;transition:opacity ease-out .5s;opacity:.8}.videoAdUiTopBarNoFade{opacity:.8!important}.videoAdUiBottomBar{background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:-moz-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:-ms-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:-o-linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);background-image:linear-gradient(bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.4) 60%,rgba(0,0,0,0) 99%);bottom:5px;left:0;padding:0;position:absolute;width:100%;z-index:1000}.videoAdUiProgressBar{background-color:#fff;bottom:0;cursor:default;left:0;position:absolute;width:100%;z-index:1000}.videoAdUiProgress{background-image:-webkit-linear-gradient(top,#ffec7b,#dea405);background-image:-moz-linear-gradient(top,#ffec7b,#dea405);background-image:-ms-linear-gradient(top,#ffec7b,#dea405);background-image:-o-linear-gradient(top,#ffec7b,#dea405);background-image:linear-gradient(top,#ffec7b,#dea405);border-right:solid 1px #666;height:4px;opacity:.9;width:0%}.videoAdUiBuffer{height:4px;width:0%;display:none}.videoAdUiAuthorIcon{background:#000;display:inline-block;height:40px;margin:0 10px;position:absolute}.videoAdUiAuthorIconImage{cursor:pointer;width:40px;height:40px}.videoAdUiAuthorIconImage:hover{opacity:.6}.videoAdUiAuthorName{color:#ccc;cursor:pointer;display:inline-block;font:normal 12px arial,sans-serif;margin:10px 5px 5px;text-decoration:none;max-width:20%}.videoAdUiLearnMore{color:#fff;display:inline-block;float:right;font:normal 16px arial,sans-serif;padding:5px}.videoAdUiLearnMoreText{color:#e5bb00;cursor:pointer;font:normal 13px arial,sans-serif;margin-bottom:5px;opacity:.9;text-align:center}.videoAdUiLearnMoreText:hover{text-decoration:underline}.videoAdUiLearnMoreText-gvn{display:inline-block;float:right;padding:5px;padding-right:10px}.videoAdUiLearnMoreIcon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAl2cEFnAAAACgAAAAoATqZ25QAAAJdJREFUGNN1j70NwkAMRp+PMAXKBGmgvQWYAOYgMAjMQRZggoiOC0UWQFmAFoEp4EIOzGss+Ud+n2CggTWw6RtC7axFHJf0Ei/aUKH4/njKBEDPLHiwi/0Mxcdhwh0P7BGWryeW44ktI2qZUeJYRfFuEGKugU4Dx1/tlOJdcwBtqD6OQ8YcuAHKNaY1F6WgBVrLO/v2/McTvRgrpKpY5XsAAAAASUVORK5CYII=);display:inline-block;height:10px;margin-left:3px;width:10px}.videoAdUiTitle{color:#fff;cursor:pointer;display:inline-block;font:normal 13px arial,sans-serif;margin:10px 5px 5px;text-decoration:none;max-width:50%}.videoAdUiTitleWithAuthorIcon{margin-left:60px}.rtl .videoAdUiTitleWithAuthorIcon{margin-left:auto;margin-right:60px}.videoAdUiAuthorName:hover,.videoAdUiTitle:hover{text-decoration:underline}.ellipsisText{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.videoAdUiAttributionContainer{bottom:0;color:#fff;display:inline-block;font:normal 11px arial,sans-serif;padding:5px;padding-right:10px;position:absolute;text-shadow:0 0 5px rgba(0,0,0,0.8)}.videoAdUiAttributionContainer-gvn{color:#e5bb00;font-size:12px;position:relative;text-shadow:none}.videoAdUiAttribution{display:inline-block;opacity:.9}.videoAdUiAttributionContainer-gvn .videoAdUiAttribution{opacity:1}.videoAdUiAttributionIconContainer{display:inline-block;position:relative}.videoAdUiAttributionIcon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAAAoAAAAKAE6mduUAAACISURBVAjXPY6xDYJAAADPj0NQ27CAPBsYEztI2MGO6C4mbIAWdLbGglYbrUgMOsnZoNddrjlEXNr68OnRKDITKraceRFYsOHACTN7c3FwEHN7I3bWIhYWItZ2+DEVsbERMfU9BwIAK/4EbpOGKa65Y7Q3iqWlkyFWXtybmLjzaiWImNk6Ov7mvwScZI0STqHEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==);height:10px;margin:10px 10px 0;position:relative;width:10px}.videoAdUiAttributionIconContainer:hover .videoAdUiAdInfoPopup{display:inline-block}.videoAdUiAdInfoPopup{background:white;border:1px solid black;box-sizing:border-box;color:black;display:none;font-size:12px;left:-15px;padding:7px;position:absolute;text-align:left;text-shadow:none;bottom:20px;width:211px}.videoAdUiAdInfoPopupCallout{border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid white;box-sizing:border-box;display:inline-block;height:0;left:24px;overflow:visible;position:absolute;text-align:center;top:100%;width:0}.videoAdUiShare{color:#fff;display:inline-block;float:right;font:normal 13px arial,sans-serif;margin:10px 10px 5px}.rtl .videoAdUiShare{float:left}.videoAdUiShare:hover{text-decoration:underline;cursor:pointer}.videoAdUiPreSkipContainer{bottom:22px;cursor:default;padding:15px 0 15px 15px;position:absolute;right:0;z-index:1000}.videoAdUi-mobile .videoAdUiPreSkipContainer{bottom:11px;padding:8px 0 8px 8px}.videoAdUiSkipContainer{-webkit-tap-highlight-color:rgba(0,0,0,0);bottom:22px;cursor:pointer;padding:15px 0 15px 15px;position:absolute;right:0;z-index:1000}.videoAdUi-mobile .videoAdUiSkipContainer{bottom:11px;padding:8px 0 8px 8px}.videoAdUiPreSkipButton{background:rgba(0,0,0,0.8);min-width:155px;padding:6px}.videoAdUi-mobile .videoAdUiPreSkipButton{min-width:105px}.videoAdUiPreSkipText{color:#e6e6e6;font:normal 11px arial,helvetica,sans-serif;padding-right:8px;text-align:center;display:inline-block;width:70px;vertical-align:middle}.videoAdUiPreSkipText.videoAdUiPreSkipTextOnly{width:100%;padding-right:0;line-height:21px}.videoAdUiPreSkipThumbnail{cursor:pointer;display:inline-block;vertical-align:middle}.videoAdUiPreSkipThumbnailImage{display:block;max-width:78px;max-height:42px;width:auto;height:auto}.videoAdUiSkipButton{-webkit-tap-highlight-color:rgba(0,0,0,0);background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.5);border-right:0;box-sizing:content-box;color:#fff;font:normal 18px arial,helvetica,sans-serif;min-width:150px;padding:10px 7px;text-align:center;cursor:pointer}.videoAdUi-mobile .videoAdUiSkipButton{font:normal 16px arial,helvetica,sans-serif;min-width:100px;padding:6px 7px}.videoAdUiSkipButton:hover{border-color:rgba(255,255,255,1)}.videoAdUi-swipeable .videoAdUiSkipButton{background:rgba(255,255,255,0.8);border:1px solid rgba(0,0,0,0.8);color:#000}.videoAdUiSkipIcon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAQAAADs3AYjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAACXZwQWcAAAAUAAAAFQC6IBuQAAAAUElEQVQoz93QwQkAIAwDwOIirtJNHM3RHCW+CqXG9q15hoNARB7KRAfrAeAoGKaQ4SuMOIUel9CwwZY9oaL8Bp+FUU8bSqFHVxgRhQxR+EM2fqKwh5sgSyYAAAAASUVORK5CYII=);display:inline-block;height:25px;margin-left:2px;vertical-align:middle;width:20px}@media all and (min-width:800px) and (min-height:400px){.videoAdUiTitle{font-size:15px}.videoAdUiAttribution{font-size:13px}.videoAdUiAttribution-gvn{font-size:16px!important}.videoAdUiPreSkipButton{min-width:200px}.videoAdUiPreSkipText{font-size:13px;width:105px;padding-right:6px}.videoAdUiPreSkipText.videoAdUiPreSkipTextOnly{font-size:13px}.videoAdUiPreSkipThumbnailImage{max-width:98px;max-height:52px}.videoAdUiShare{font-size:15px}.videoAdUiSkipButton{font-size:23px;min-width:200px}}.videoAdUi.blazer .videoAdUiProgressBar{background-color:#222;height:4px}.videoAdUi.blazer .videoAdUiProgress{background-image:none;background-color:#e6bc27;opacity:1;position:absolute}.videoAdUi.blazer .videoAdUiBuffer{background-color:#666;display:block;position:absolute}.videoAdUi.blazer .videoAdUiAuthorName{display:none}.videoAdUi.blazer .videoadUiTitle,.videoAdUi.blazer .videoAdUiLearnMore{font-family:"Helvetica Neue Light","Arial",sans-serif;font-size:14px;text-shadow:0 0 2px rgba(0,0,0,0.75)}.videoAdUi.blazer .videoAdUiAttribution{font-family:"Helvetica Neue Light","Arial",sans-serif;font-size:16px;text-shadow:0 0 2px rgba(0,0,0,0.5)}.videoAdUi.blazer .videoAdUiSkipButton,.videoAdUi.blazer .videoAdUiPreSkipButton{min-width:95px;width:95px;min-height:24px;font-size:13px}.videoAdUi.blazer .videoAdUiSkipButton{font-family:"Helvetica Neue Light","Arial",sans-serif;border:1px solid rgba(255,255,255,0.25);background-color:rgba(0,0,0,0.5)}.videoAdUi.blazer .videoAdUiPreSkipButton{font-family:"Helvetica Neue","Arial",sans-serif;background-color:rgba(0,0,0,0.25);text-shadow:1px 1px 1px rgba(0,0,0,0.75)}.videoAdUi.blazer .videoAdUiPreSkipText{padding:5px 0}.videoAdUi.blazer .videoAdUiPreSkipText.videoAdUiPreSkipTextOnly{line-height:inherit}.videoAdUi.blazer .videoAdUiLearnMore{text-shadow:1px 1px 1px rgba(0,0,0,0.75);margin:5px;margin-right:20px}.videoAdUi.blazer.phone .videoAdUiAuthorIcon,.videoAdUi.blazer.phone .videoadUiTitle{display:none}.videoAdUi.blazer.phone .videoAdUiAttribution{font-size:14px}.videoAdUi.blazer.phone .videoAdUiSkipButton{padding:6px 0}.videoAdUi.blazer.phone .videoAdUiSkipIcon{margin-left:6px}.videoAdUi.blazer.tablet .videoAdUiAuthorIcon,.videoAdUi.blazer.tablet .videoadUiTitle{left:0;position:absolute;margin-top:17px}.videoAdUi.blazer.tablet .videoAdUiAuthorIcon{margin:5px 10px}.videoAdUi.blazer.tablet .videoAdUiSkipButton,.videoAdUi.blazer.tablet .videoAdUiPreSkipButton{min-width:95px;width:95px;min-height:24px;font-family:"Helvetica Neue Light","Arial",sans-serif;font-size:13px;text-shadow:1px 1px 1px rgba(0,0,0,0.75)}.videoAdUi.blazer.tablet .videoAdUiPreSkipContainer,.videoAdUi.blazer.tablet .videoAdUiSkipContainer{bottom:55px}.videoAdUi.blazer.tablet .videoAdUiAttribution{left:0;bottom:0}.videoAdUi.blazer.tablet:hover .videoAdUiAttribution{right:84%;bottom:26px;text-align:right}.videoAdUi.blazer.tablet:hover .videoAdUiProgressBar{bottom:35px;left:16%;width:68%}.videoAdUi.blazer.tablet:hover .videoAdUiProgressBar,.videoAdUi.blazer.tablet:hover .videoAdUiBuffer,.videoAdUi.blazer.tablet:hover .videoAdUiProgress{height:20px}'),
                e.appendChild(l));
            l = 1E3 * iU(vX(this));
            this.o = new TX(d, e, l);
            e = d.X;
            null != e && (vX(this).I = e, d.P && iY(this, e));
            e = [];
            d.A && e.push("adAttribution");
            d.j && e.push("countdown")
        } else
            d && this.k.ho && (vX(this).I = d, iY(this, d));
        d = this.D;
        e = this.j;
        l = this.A.Uk();
        p = this.o;
        cY(d);
        d.B.D = a.R;
        d.j = e;
        d.o = p || null;
        d.j.zi();
        d.A = new bY(d.j);
        d.G = l || null;
        d.k = new mn(d);
        d.k.listen(a, "measurable_impression", d.ZA);
        d.k.listen(a, "viewable_impression", d.tC);
        d.k.listen(d.j, "timeUpdate", d.bz);
        d.k.listen(d.j, "volumeChange", d.cz);
        d.k.listen(d.j,
            "pause", d.Zy);
        d.k.listen(d.j, "play", d.$y);
        d.k.listen(d.j, "end", d.Vy);
        d.k.listen(d.j, "beginFullscreen", d.Xy);
        d.k.listen(d.j, "endFullscreen", d.GA);
        d.k.listen(d.j, "skip", d.Op);
        d.k.listen(d.j, "skipShown", d.jr);
        d.k.listen(d.j, "start", d.az);
        d.k.listen(d.j, "error", d.Wy);
        d.k.listen(d.j, "mediaLoadTimeout", d.Yy);
        null != d.o && (d.k.listen(d.o, "videoAuthorIconClicked", d.dC), d.k.listen(d.o, "videoAuthorClicked", d.cC), d.k.listen(d.o, "videoClicked", d.fC), d.k.listen(d.o, "videoLearnMoreClicked", d.lC), d.k.listen(d.o, "videoTitleClicked",
            d.sC), d.k.listen(d.o, "videoShareClicked", d.pC), d.k.listen(d.o, "videoShareShown", d.qC), d.k.listen(d.o, "skipshown", d.jr), d.k.listen(d.o, "skip", d.Op), d.k.listen(d.o, "PUBLISHER_INVOKED_SKIP", d.qB));
        xX(this).listen(this.D, "engagedview", this.kd);
        xX(this).listen(this.D, "videoAuthorIconClicked", this.kd);
        xX(this).listen(this.D, "videoAuthorClicked", this.kd);
        xX(this).listen(this.D, "videoClicked", this.kd);
        xX(this).listen(this.D, "videoLearnMoreClicked", this.kd);
        xX(this).listen(this.D, "videoShareClicked", this.kd);
        xX(this).listen(this.D, "videoShareShown", this.kd);
        xX(this).listen(this.D, "videoTitleClicked", this.kd);
        xX(this).listen(this.j, "timeUpdate", this.rC);
        xX(this).listen(this.j, "volumeChange", this.Jy);
        this.Of(a);
        d = FV(a, this.j);
        this.B.j = d;
        d = a.j;
        null != d && d instanceof sT && (this.Le(d, fJ), this.fj(d), d = xX(this), pn(d, this.D, "error", this.Hy, this), pn(d, this.D, "mediaLoadTimeout", this.Iy, this));
        jY(this, a);
        KT(a) && (this.D.F = 30);
        this.j.Hm(kY(this, a));
        this.j.load(b, c)
    }
};
f.FC = function (a, b, c) {
    this.V || (this.V = !0, this.qa("contentPauseRequested"));
    this.M = !0;
    this.rz(a, b, c);
    this.setVolume(this.P);
    this.o && (A(B(lY(a))) ? (b = this.o, null != b.C && (b.o.Da(b.C, "click", b.vs), Bg(b.C, "cursor", "default")))
    :
    (b = this.o,
    null != b.C && (b.o.listen(b.C, "click", b.vs), Bg(b.C, "cursor", "pointer"))
    ),
    b = a.j.ba, mb(b) || WX(this.o, b), this.o.show()
    )
    ;
    this.A.wi();
    try {
        yX(this, a)
    } catch (d) {
        mY(this, PJ, d);
        return
    }
    hR.getInstance().end("pi");
    hR.getInstance().start("bt");
    this.j.play()
};
function nY(a, b, c, d) {
    b = YR(b.j, c);
    mb(b) || (a[d] = b[0].j)
}
function oY(a, b, c) {
    b = c.getExtension(b);
    null != b && (nY(a, b, "annotation_click", "cta_annotation_clicked"), nY(a, b, "annotation_close", "cta_annotation_closed"), nY(a, b, "annotation_start", "cta_annotation_shown"))
}
function kY(a, b) {
    var c = bU(b) && !b.G ? TT(b) : null, d = KT(b) && !LT(b), e = null != a.o && a.k.tl && a.o.j.o, g = b.o, h = JT(b), k;
    a.o ? (k = {}, oY(k,
    "AdSense", b
),
    oY(k, "dart", b), oY(k, "DFP", b)
) :
    k = null;
    return new bQ(h, c, k, e, d, a.k.loadVideoTimeout, g ? g.tagForChildDirectedContent : !1, !1)
}
function pY(a) {
    var b = 0;
    D(a.ads, function (a) {
        !qY(a) || EK() && 0 != b || b++
    }, a);
    var c = 1;
    D(a.ads, function (a) {
        var e = a.B;
        e.A = b;
        qY(a) && (e.k = c, e.B = c, c++)
    }, a)
}
function qY(a) {
    a = a.j;
    return null != a && a instanceof sT
}
function rY(a) {
    return hb(a.ads, function (a) {
        return hb(sY(a), function (a) {
            return !A(B(MO(a.k)))
        })
    }, a)
}
function lY(a) {
    var b = a.k;
    return b && b.F && (b = b.A, !mb(b) && b[0] instanceof sT) ? b[0].Mc() : hU(a)
}
function sY(a) {
    var b = a.k;
    if (b && b.F && (b = b.A, !mb(b) && b[0] instanceof sT))
        return b[0].H;
    b = a.j;
    return qY(a) ? b.H : []
}
function tY(a, b) {
    if (RK.getInstance().j) {
        var c = new Zj, d = !1;
        D(sY(b), function (a) {
            c.add(a.j);
            "VPAID" == a.o && (d = !0)
        }, a);
        var e = a.j.Xk(), e = {aid: TT(b), mt: c.Ka().join(","), smt: e.join(","), hvp: d, st: YQ(b).join(",")};
        SK(RK.getInstance(), 28, e)
    }
}
function uY(a, b, c) {
    try {
        var d = E(a, function (a) {
            return a.Kd
        }), e = E(a, function (a) {
            return a.j
        }), g = {
            brs: d.join(","),
            mts: e.join(","),
            pubbr: b,
            selbr: null === c ? -1 : c.Kd,
            selmt: null === c ? "" : c.j,
            nat: !1
        };
        SK(RK.getInstance(), 22, g)
    } catch (h) {
    }
}
f.Si = function () {
    pY(this);
    this.qa("loaded");
    this.U(new IX(vX(this)))
};
f.Hc = function (a, b, c) {
    fY.J.Hc.call(this, a, b, c);
    a = rY(this);
    this.j = this.A.ti(a);
    t: {
        if (wX(this) && (b = this.G.getExtension("InfoCards"), b = null != b ? b.k : null, null != b))
            break t;
        b = ""
    }
    t: {
        if (wX(this) && (c = this.G.getExtension("InfoCardsTracking"), c = null != c ? c.k : null, null != c))
            break t;
        c = ""
    }
    a && (b || c) && this.j.Ep(b, c)
};
f.skip = function () {
    wX(this) && KT(vX(this)) && (null != this.o ? this.o.skip() : (BX(this, "skip"), vY(this)))
};
f.Bm = function () {
    this.Yb("skipshown")
};
f.start = function () {
    fY.J.start.call(this);
    hR.getInstance().start("pi");
    try {
        var a = vX(this), b;
        if (!qY(a))
            throw vK(kK);
        var c = a.j, d = c.ja;
        if (A(B(d))) {
            var e = sY(a), g = this.j.Mr(e, this.k.bitrate, this.k.mimeTypes || [], null != a && (EK() || this.A.xi() || this.A.wl() || id || Na(Uc, "Mobile")));
            uY(e, this.k.bitrate, g);
            if (null != g)
                b = c.ga = g;
            else {
                try {
                    tY(this, a)
                } catch (h) {
                }
                throw vK(cK);
            }
        } else
            b = new PO("", "", 0, 0, 0, 0, 0, d, "");
        this.K = b;
        gn(x(fY.prototype.FC, this, a, this.K.k, this.K.j))
    } catch (k) {
        wY(this, k), this.Vg(), wX(this) ? (wK(vK, this,
            qK, k, void 0), this.start()) : (this.M ? wK(vK, this, qK, k, void 0) : (null != this.C && SQ(this.C, PQ()), xK(this, qK, k)), this.stop())
    }
};
f.Bp = function () {
    zX(this);
    return this.j.Gg() ? 0 : this.j.ed()
};
f.setVolume = function (a) {
    zX(this);
    this.M ? this.j.setVolume(a) : this.P = a
};
f.setMediaUrl = function (a) {
    zX(this);
    var b;
    if (b = wX(this))
        b = null != vX(this).o;
    if (b) {
        b = vX(this);
        var c = b.o.location, d;
        if (d = null != c)
            (d = BJ(wJ, c)) || (d = kf(new J(c)), d = null != d ? wa(d, ".corp.google.com") || "corp.google.com" == d : !1), d = d || (null != c ? BJ(yJ, c) : !1);
        (d || EK()) && null != b.j && b.j instanceof sT && b.j.setMediaUrl(a)
    }
};
f.pause = function () {
    zX(this);
    this.j.pause()
};
f.resume = function () {
    zX(this);
    this.j.play()
};
f.getRemainingTime = function () {
    zX(this);
    var a = this.j.ad(), b = this.j.getCurrentTime();
    return 0 <= a && 0 <= b ? Math.max(0, a - b) : -1
};
f.qf = function () {
    return this.j.qf()
};
f.Hy = function () {
    mY(this, qK, vK(qK, this.j.Fp()))
};
f.Iy = function () {
    mY(this, fK, vK(fK, null, (this.k.loadVideoTimeout / 1E3).toString()))
};
function mY(a, b, c) {
    wY(a, c);
    a.Vg();
    wX(a) ? (wK(vK, a, b, c, void 0), a.start()) : (xK(a, b, c), a.stop())
}
function wY(a, b) {
    var c = vK(qK, b), c = zV(c, vX(a), a.j), d = OT(vX(a));
    JJ(d, c)
}
function xY(a) {
    if (FK.j) {
        var b = lY(vX(a));
        null != b && EJ(b)
    }
    a.qa("click")
}
function jY(a, b) {
    var c = b;
    do
        c.D.forEach(function (a) {
            D(fJ, function (b) {
                var c = YR(a.j, b);
                mb(c) || yY(this, b, c)
            }, this);
            tX(this.B, a.D)
        }, a), c = c.k;
    while (c)
}
function yY(a, b, c) {
    D(c, function (a) {
        ZR(this.B.k, a.o, a.j)
    }, a);
    zY(a, b)
}
function zY(a, b) {
    Ob(iJ, b) && pn(xX(a), a.D, b, a.kd, a)
}
f.kd = function (a) {
    switch (a.type) {
        case "start":
            a = hR.getInstance();
            if (a.j) {
                var b = {};
                if (null != this.K) {
                    var c = kf(new J(this.K.k));
                    if (null != c) {
                        var c = $a(c, ".", 10), d = c.length;
                        2 <= d && (b.dn = c[d - 2] + "." + c[d - 1])
                    }
                    b.br = this.K.Ld;
                    b.mt = this.K.j
                }
                a.end("bt", b)
            }
            a = hR.getInstance();
            a.j && (b = iR(a, "ff", a.o), GJ(b), a.o = 0);
            this.qa("start");
            break;
        case "impression":
            this.qa("impression");
            break;
        case "pause":
            this.qa("pause");
            break;
        case "resume":
            this.qa("resume");
            break;
        case "firstquartile":
            this.qa("firstquartile");
            break;
        case "midpoint":
            this.qa("midpoint");
            break;
        case "thirdquartile":
            this.qa("thirdquartile");
            break;
        case "complete":
            this.qa("complete");
            hY(this);
            break;
        case "click":
            this.o && this.o.j.k ? this.j.Hg() ? this.resume() : this.pause() : xY(this);
            break;
        case "engagedview":
            b = vX(this);
            a = b.I;
            LT(b) && !EK() && !this.A.xi() && a && (b = this.j.getCurrentTime(), c = this.j.ad(), d = new J("//s.youtube.com/s"), K(d, "ns", "yt"), K(d, "el", "adunit"), K(d, "docid", a), K(d, "eurl", document.URL), K(d, "len", c.toFixed(2)), K(d, "tv", "1"), K(d, "ps", "trueview-instream"), K(d, "st", b.toFixed(2)), K(d,
                "et", b.toFixed(2)), K(d, "rt", b.toFixed(2)), GJ(d.toString()));
            this.qa("engagedview");
            break;
        case "videoAuthorIconClicked":
            AY(this);
            break;
        case "videoAuthorClicked":
            AY(this);
            break;
        case "videoClicked":
            this.qa("videoClicked");
            break;
        case "videoLearnMoreClicked":
            this.j.pause();
            xY(this);
            break;
        case "videoShareClicked":
            a = vX(this).K;
            null != a && (a = a.videoId, b = this.k.baseYouTubeUrl, A(B(a)) ? a = null : (b = new J((null != b ? b : "//www.youtube.com/") + "watch"), c = b.j, c.set("v", a), bf(b, c), b.nf = "action=share", a = b.toString()
        ),
            null !=
            a && (EJ(a), a = BY(this), null != a && FJ(a, "sharebuttonclicked"))
        )
            ;
            break;
        case "videoShareShown":
            a = BY(this);
            null != a && FJ(a, "sharebuttondisplayed");
            break;
        case "videoTitleClicked":
            a = vX(this);
            b = a.K;
            null != b && (a = OO(b.videoId, null != cU(a), this.k.baseYouTubeUrl), null !== a && (this.j.pause(), EJ(a)));
            break;
        case "skipshown":
            this.qa("skippableStateChanged");
            break;
        case "skip":
            vY(this)
    }
};
function BY(a) {
    var b = vX(a).getExtension("AdSense");
    if (!(b = null != b ? new J(b.k) : null))
        t: {
            if (a = ST(vX(a)))
                if (a = qT(a, "start"), !mb(a)) {
                    b = new J(a[0].j);
                    break t
                }
            b = null
        }
    return b
}
function vY(a) {
    gn(function () {
        this.qa("skip");
        hY(this)
    }, 0, a)
}
f.Of = function (a) {
    fY.J.Of.call(this, a);
    zY(this, "impression")
};
f.Le = function (a, b) {
    fY.J.Le.call(this, a, b);
    D(b, function (a) {
        zY(this, a)
    }, this)
};
f.fj = function (a) {
    fY.J.fj.call(this, a);
    a instanceof sT && (a = tT(a), D(a.Ha(), function (a) {
        zY(this, a)
    }, this))
};
f.getMediaUrl = function () {
    if (!wX(this))
        return null;
    var a = vX(this);
    if (!qY(a))
        throw vK(kK);
    a = a.j.H;
    return mb(a) ? null : a[0].k
};
f.rC = function () {
    var a = this.j.ad(), b = this.j.Wo(), c = this.j.getCurrentTime(), d = 0, e = 0;
    wX(this) && (e = vX(this), d = e.B.k, e = e.B.A);
    if (null != this.o && 0 <= a && 0 <= c) {
        var g;
        if (g = !this.S)
            g = 3 == vX(this).la;
        if (g) {
            g = this.j.ad();
            var h = iU(vX(this));
            g = Math.abs(g - h);
            2 < g && (g = vK(jK, null, Number(g).toFixed(2)), g = zV(g, vX(this), this.j), h = OT(vX(this)), JJ(h, g));
            this.S = !0
        }
        this.o.update(c, b, a, d, e)
    }
};
f.Jy = function () {
    var a = this.j.ed();
    a != this.P && (this.P = a, this.qa("volumeChange"), 0 == a && this.qa("mute"))
};
function iY(a, b) {
    JX(b, function (a) {
        a = new US(a);
        lU(vX(this)) == a.videoId && (CY(this, a), !A(B(a.channelId)) && a.j && LX(a.channelId, function (a) {
            a = new SS(a);
            if (null != this.o) {
                var b = this.o, c = a.k;
                b.j.S = !A(B(c));
                b.j.V = c;
                if (null != b.F) {
                    var c = "", h = ra("by {$userDisplayName}", {userDisplayName: "" + b.j.V});
                    ae(b.F, (new pP(c + h, void 0)).getContent())
                }
                UX(b);
                b = this.o;
                c = a.j;
                b.j.O = !A(B(c));
                null != b.D && (h = Nd("img"), h.setAttribute("src", c), N(h, "videoAdUiAuthorIconImage"), b.D.appendChild(h), null != b.B && N(b.B, "videoAdUiTitleWithAuthorIcon"));
                UX(b)
            }
            vX(this).H = a;
            this.qa("youTubeChannelMetadata");
            if (a = this.o)
                a = vX(this), b = a.K, a = EK() && mb(ZQ(a)) && null != a.H && null != b && b.j;
            if (a) {
                a = vX(this);
                xX(this).listen(window, "message", this.qx);
                var b = vX(this), c = b.H.channelId, h = JT(b), k = this.k.contentId, l = this.k.baseYouTubeUrl, l = new J((null != l ? l : "//www.youtube.com/") + "ad_companion"), p = l.j;
                p.set("adformat", h);
                p.set("p", c);
                p.set("render", "video_wall_companion");
                k && p.set("content", k);
                c = new wU("1", new H(300, 250), "IFrame", null, l.toString());
                c.Xg(b);
                c.D = !0;
                a.C = [new nU(c,
                    [], null)];
                yX(this, a)
            }
        }, this))
    }, a)
}
f.qx = function (a) {
    var b = a.j;
    if ("companion-setup-complete" == b.data) {
        a = vX(this);
        var c = encodeURIComponent(B(hU(a))) + "," + encodeURIComponent(BY(this).toString());
        b.source.postMessage(c, "*");
        b = b.source.frameElement;
        b.parentNode.style.cssText = "";
        b.width = 370;
        b.height = null != hU(a) ? 210 : 185
    } else
        "pause-video" == b.data && this.pause()
};
function CY(a, b) {
    if (null != a.o && b.j) {
        var c = a.o, d = b.title;
        c.j.B = !A(B(d));
        c.j.title = d;
        ic.test(hc(c.j.title, void 0));
        null != c.B && ae(c.B, c.j.title);
        UX(c);
        c = a.o;
        if (null != c.G) {
            var c = c.G, d = "", e = ra("Share");
            ae(c, d + e)
        }
    }
    vX(a).K = b;
    a.qa("youTubeVideoMetadata")
}
function AY(a) {
    var b;
    b = vX(a).H;
    if (null != b) {
        var c;
        c = a.k.baseYouTubeUrl;
        b = B(b.channelId);
        c = A(b) ? null : (null != c ? c : "//www.youtube.com/") + "channel/" + (va(b, "UC") && 24 == b.length ? b : "UC" + b);
        null !== c && (a.j.pause(), EJ(c))
    }
}

function DY(a) {
    this.j = a
}
f = DY.prototype;
f.Uk = function () {
    return this.j.Uk()
};
f.Yk = function () {
    return this.j.Yk()
};
f.uf = function () {
    return this.j.uf()
};
f.ti = function (a) {
    return this.j.ti(a)
};
f.vl = function () {
    return this.j.vl()
};
f.wl = function () {
    return this.j.wl()
};
f.xi = function () {
    return this.j.xi()
};
f.hide = v;
f.wi = v;
f.rj = v;
function EY(a, b, c, d, e, g, h) {
    U.call(this);
    this.A = this.C = 0;
    this.D = a;
    this.ud = b;
    this.V = c;
    this.B = null;
    this.H = d;
    this.W = g;
    this.M = FK.k;
    this.j = null;
    this.S = "normal";
    this.K = null;
    this.G = e;
    this.o = [];
    this.R = this.O = this.I = !1;
    this.P = h;
    FY(this)
}
inherit(EY, U);
f = EY.prototype;
f.init = function (a, b, c) {
    GY(this, c);
    null == this.F && (this.F = new mn(this), pn(this.F, this.H, "adsLoaderSdkAdLoaded", this.Lz, this), pn(this.F, this.H, "adsLoaderSdkAdError", this.Iz, this));
    HY(this)
};
f.start = function () {
    this.I = !0;
    IY(this);
    0 < this.o.length ? JY(this) : ("always" == FK.k && null != this.P && SQ(this.P, PQ()), wK(tK, this, UJ, void 0, void 0), 0 == this.ud && this.U("contentResumeRequested"), KY(this))
};
f.destroy = function () {
    null != this.F && (this.F.dispose(), this.F = null);
    this.G.hide();
    LY(this);
    FK.k = this.M;
    this.I = !1
};
f.getCurrentAd = function () {
    return this.A < this.o.length ? this.o[this.A].j[0] : null
};
f.ub = function () {
    return this.I
};
f.pause = function () {
    null != this.j && this.j.pause()
};
f.resume = function () {
    null != this.j && this.j.resume()
};
f.skip = function () {
    null != this.j && this.j.skip()
};
f.getRemainingTime = function () {
    return null != this.j ? this.j.getRemainingTime() : -1
};
f.setVolume = function (a) {
    null != a && (this.K = a, null != this.j && this.j.setVolume(this.K))
};
function GY(a, b) {
    null != b && (a.S = b);
    null != a.j && (a.j.yi(b), a.j.Fg())
}
function FY(a) {
    D(a.D, function (a) {
        a = new J(a.o.adTagUrl);
        var c = qf(a, "max_ad_duration");
        n(c) || qf(a, "pmxd")
    })
}
f.Lz = function (a) {
    FK.k = this.M;
    var b = a.C;
    mb(b) || (a = a.B, a.j && D(b, function (a) {
        a.ga = !1
    }, this), ob(this.o, new GR(b, a.j, a.k)));
    this.C++;
    HY(this)
};
f.Iz = function (a) {
    a = a.o;
    FK.k = this.M;
    a.getMessage();
    wK(tK, this, UJ, void 0, void 0);
    this.C++;
    HY(this)
};
function HY(a) {
    a.C < a.D.length && null != a.D[a.C] && !(2 <= a.o.length - a.A) ? MY(a) : a.O || (a.U("adBreakInitialized"), a.O = !0)
}
function MY(a) {
    var b = a.D[a.C];
    FK.k = "on_master_ad";
    dX(a.H, b.o, b)
}
function IY(a) {
    null == a.ud || hb(a.o, function (a) {
        return !a.k
    }) || (a.o = fb(a.o, function (a) {
        return !(a.k && !a.o)
    }))
}
function JY(a) {
    if (a.A < a.o.length) {
        var b = a.o[a.A];
        LY(a);
        try {
            var c = b.j, b = null;
            if (null != a.H.B)
                b = gX(c);
            else if (IT(c[0]))
                b = new fY(c);
            else {
                var d = c[0];
                if (null != d && aU(d, "nonlinear"))
                    b = new CX(c);
                else
                    throw Error("No valid creative type found.");
            }
            b.C = a.P;
            b.Hc(new DY(a.G), {currentTime: 0}, a.W);
            a.j = b;
            if (null == a.j)
                throw Error("The current ads manager is not defined");
            null != a.k && (a.k.dispose(), a.k = null);
            a.k = new mn(a);
            var e = a.j;
            pn(a.k, e, "adError", a.Jz, a);
            pn(a.k, e, "click videoClicked start pause resume firstquartile midpoint thirdquartile complete skip loaded adMetadata log".split(" "),
                a.Mz, a);
            a.k.listen(e, ["allAdsCompleted"], v);
            pn(a.k, e, "contentPauseRequested", a.Ey, a);
            pn(a.k, e, "contentResumeRequested", a.Fy, a);
            if (NY(a.j)) {
                var g;
                g = ST(vX(a.j)).ka;
                g = 0 < g ? g : 15;
                null != a.B && a.B.dispose();
                a.B = new en(1E3 * g);
                sn(a.k, a.B, "tick", a.eB, a)
            }
            a.j.init(a.S);
            null != a.K && a.j.setVolume(a.K);
            if (NY(a.j))
                a.U("contentResumeRequested"), a.G.hide(), a.G.rj(), a.j.start(), null != a.B && a.B.start();
            else {
                var h = a.j;
                if (null != h && h instanceof fY)
                    a.G.wi(), a.j.start();
                else
                    throw Error("Unknown ads manager type.");
            }
        } catch (k) {
            a.A++,
                JY(a)
        }
        a.C < a.D.length && null != a.D[a.C] && MY(a)
    } else
        a.U("contentResumeRequested"), KY(a)
}
function LY(a) {
    null != a.B && (a.B.dispose(), a.B = null);
    null != a.k && (a.k.dispose(), a.k = null);
    null != a.j && (a.j.destroy(), a.j = null)
}
f.eB = function () {
    LY(this);
    KY(this)
};
f.Jz = function () {
    this.A++;
    JY(this)
};
f.Fy = function () {
    this.A++;
    JY(this)
};
f.Ey = function () {
    this.R || (this.U("contentPauseRequested"), this.R = !0)
};
function NY(a) {
    return null != a && a instanceof CX
}
function KY(a) {
    a.I = !1;
    a.U("allAdsCompleted")
}
f.Mz = function (a) {
    OY(this, a.type, a.getAd());
    this.U(a)
};
function OY(a, b, c) {
    if ("loaded" == b || "start" == b || "adMetadata" == b || "firstquartile" == b) {
        var d = 0, e = 0;
        D(a.o, function (a, b) {
            var g = a.j;
            db(g, c);
            d += g.length;
            b < this.A && (e += g.length)
        }, a);
        b = c.B;
        var g = e + b.B;
        b.A = d + (a.D.length - a.C);
        b.k = g;
        b.o = a.V;
        b.j = a.ud
    }
}

function PY(a) {
    $l.call(this, a);
    this.o = null
}
inherit(PY, $l);
function QY(a, b, c) {
    U.call(this);
    this.k = a;
    this.j = [];
    this.C = null != c && "boolean" == typeof c.backlog ? c.backlog : !1;
    this.F = null != c && ha(c.prefetch) && 0 <= c.prefetch ? c.prefetch : 0;
    this.o = null;
    this.A = !1;
    RY(this, b)
}
inherit(QY, U);
function SY(a) {
    this.j = a;
    this.o = this.k = !1
}
function TY(a) {
    null != a.o && (a.o.dispose(), a.o = null);
    a.k.stop();
    a.A = !1
}
function UY(a) {
    if (a.A) {
        var b = F(a.j, function (a) {
            return -1 == a.j
        }, a);
        null != b && VY(a, !0, b)
    }
}
function RY(a, b) {
    D(b, function (a) {
        if (isNaN(a))
            throw Error("The ad play time is not a number:" + a);
        Fb(this.j, new SY(a), function (a, b) {
            return zb(a.j, b.j)
        })
    }, a)
}
QY.prototype.B = function () {
    if (this.A) {
        var a = this.k.currentTime;
        if (isNaN(a) || 0 > a)
            WY(this);
        else {
            var b = XY(this, a);
            this.C ? D(b, function (a) {
                VY(this, !0, a)
            }, this) : VY(this, !0, bb(b));
            VY(this, !1, YY(this, a))
        }
    }
};
function XY(a, b) {
    for (var c = [], d = 0; d < a.j.length; d++) {
        var e = a.j[d];
        -1 != e.j && e.j <= b && ob(c, e)
    }
    return c
}
function YY(a, b) {
    for (var c = 0; c < a.j.length; c++) {
        var d = a.j[c];
        if (-1 != d.j && b >= d.j - a.F && b < d.j && !a.j[c].k)
            return d
    }
    return null
}
QY.prototype.D = function () {
    WY(this)
};
function WY(a) {
    a.U(new PY("contentTrackingError"))
}
function VY(a, b, c) {
    if (null != c) {
        if (!c.k) {
            var d = new PY("requestAds");
            d.o = c.j;
            a.U(d);
            c.k = !0
        }
        b && !c.o && (b = new PY("playAds"), b.o = c.j, a.U(b), c.o = !0)
    }
}

function ZY(a, b) {
    R.call(this);
    this.o = a;
    this.k = -1;
    this.j = b
}
inherit(ZY, R);
function $Y(a, b) {
    if (0 == b.ud || 0 >= a.j || 0 >= a.k)
        return !1;
    var c = y() / 1E3, d = b.ud - a.o.currentTime;
    0 < d && (c += d);
    return c - a.k <= a.j
}

function eX(a, b) {
    uX.call(this, []);
    this.P = a;
    this.H = new ue;
    this.o = this.j = null;
    this.W = new No;
    this.D = null;
    this.M = b;
    this.R = this.V = !1;
    this.K = null;
    this.ea = this.ba = -1;
    this.S = null
}
inherit(eX, uX);
f = eX.prototype;
f.Hc = function (a, b, c) {
    null != this.o && (TY(this.o), this.o.dispose(), this.o = null);
    eX.J.Hc.call(this, a, b, c);
    c = this.P.j.Ha();
    b = new kQ(b);
    this.o = new QY(b, c, {prefetch: 4});
    D(c, function (b, c) {
        if (isNaN(b))
            throw tK(NJ, null, "timeOffset", b + "");
        var g = ha(b) && !isNaN(b) ? this.P.j.get(b, []) : [];
        if (!mb(g)) {
            g = new EY(g, b, 0 == b || -1 == b ? b : c, this.M, a, this.k, this.C);
            if (we(this.H, b))
                throw tK(ZJ, null, "Multiple ad breaks cannot share same ad play time.");
            this.H.set(b, g)
        }
    }, this);
    this.K = bb(c);
    hb(c, function (a) {
        if (-1 == a)
            return this.K =
                a, !0;
        this.K = this.K < a ? a : this.K;
        return !1
    }, this)
};
f.init = function (a) {
    eX.J.init.call(this, a);
    null != this.o && (aZ(this), a = xX(this), pn(a, this.o, "requestAds", this, this), pn(a, this.o, "playAds", this, this), pn(a, this.o, "contentTrackingError", this, this), pn(a, this.o, "adBreakReady", this.Gz, this), pn(a, this.M, "contentComplete", this.oA, this), this.M.j = !1, a = this.o, a.A || (null == a.o && (a.o = new mn(a)), a.o.listen(a.k, "currentTimeUpdate", a.B, !1), a.o.listen(a.k, "contentWrapperError", a.D, !1)), a.k.start(), a.A = !0, this.o.B(), a = ha(0) && !isNaN(0) ? this.P.j.get(0, []) : [], mb(a) && this.qa("contentResumeRequested"))
};
f.Si = function () {
    this.Be();
    this.U(new IX(null))
};
f.destroy = function () {
    this.dispose()
};
f.L = function () {
    this.M.j = !0;
    if (0 < this.H.Pa()) {
        var a = this.H.Ka();
        D(a, this.Yh, this);
        this.H.clear()
    }
    aZ(this);
    bZ(this);
    null != this.A && (this.A.hide(), this.A = null);
    eX.J.L.call(this)
};
f.start = function () {
    eX.J.start.call(this)
};
f.stop = function () {
    null != this.j && this.j.destroy()
};
f.pause = function () {
    null != this.j && this.j.pause()
};
f.resume = function () {
    null != this.j && this.j.resume()
};
f.skip = function () {
    null != this.j && this.j.skip()
};
f.setVolume = function (a) {
    eX.J.setVolume.call(this, a);
    null != this.j && this.j.setVolume(a)
};
f.Fg = function () {
    eX.J.Fg.call(this);
    var a = Gd(window);
    this.ba = a.width;
    this.ea = a.height;
    null != this.j && GY(this.j, this.I)
};
f.getRemainingTime = function () {
    return null != this.j ? this.j.getRemainingTime() : -1
};
f.Be = function () {
    return this.P.j.Ha()
};
f.getCurrentAd = function () {
    return null != this.j ? this.j.getCurrentAd() : null
};
f.Lr = function () {
};
f.handleEvent = function (a) {
    "contentTrackingError" != a.type && (Po(this.W, a), cZ(this))
};
function aZ(a) {
    null != a.F && (a.F.dispose(), a.F = null);
    a.V = !1;
    null != a.o && TY(a.o)
}
function cZ(a) {
    if (null == a.D) {
        var b = Qo(a.W);
        if (null != b) {
            a.D = b;
            var c = a.H.get(a.D.o);
            null == c ? (a.D = null, cZ(a)) : "requestAds" != b.type && "playAds" != b.type ? (a.D = null, cZ(a)) : null != a.S && $Y(a.S, c) ? (a.D = null, cZ(a)) : "requestAds" == b.type ? (b = xX(a), pn(b, c,
            "click videoClicked start pause firstquartile midpoint thirdquartile complete skip loaded adMetadata pause resume log".split(" "), a.U, a
        ),
            pn(b, c, "allAdsCompleted", a.rq, a), pn(b, c, "contentPauseRequested", a.zp, a), pn(b, c, "contentResumeRequested", a.Ap, a), pn(b, c, "adBreakInitialized",
                a.sq, a), c.init(a.ba, a.ea, a.I)
        ) :
            "playAds" == b.type && (null != a.j && a.j.ub() && a.Yh(a.j), a.j = c, a.j.setVolume(a.volume), GY(a.j, a.I), a.j.start())
        }
    }
}
f.Yh = function (a) {
    a.destroy();
    this.H.remove(a.ud);
    this.j = null;
    null != this.F && (this.F.Da(a, "click videoClicked start pause firstquartile midpoint thirdquartile complete skip loaded adMetadata pause resume log".split(" "), this.U, !1, this), this.F.Da(a, "allAdsCompleted", this.rq, !1, this), this.F.Da(a, "contentPauseRequested", this.zp, !1, this), this.F.Da(a, "contentResumeRequested", this.Ap, !1, this), this.F.Da(a, "adBreakInitialized", this.sq, !1, this))
};
f.oA = function (a) {
    this.V = !0;
    -1 == this.K ? a.A = !1 : EK() && 0 != this.H.Ka().length || dZ(this);
    UY(this.o)
};
f.Gz = function (a) {
    var b = a.o;
    -1 == b ? gn(function () {
        var a = this.H.get(b);
        a && this.Yh(a);
        EK() && 0 != this.H.Ka().length || dZ(this)
    }, 500, this) : 0 == b && gn(function () {
        this.qa("contentResumeRequested")
    }, 100, this);
    this.U(new hJ("adBreakReady", null, {KK: b}))
};
f.rq = function (a) {
    this.Yh(a.target);
    (0 == this.H.Ka().length || !EK() && this.V) && dZ(this);
    this.D = null;
    cZ(this)
};
function dZ(a) {
    a.R || (a.R = !0, a.M.j = !0, a.qa("allAdsCompleted"), -1 == a.K && bZ(a))
}
function bZ(a) {
    uQ.clear();
    null != a.C && (a = a.C.se(), null != a && JQ(a, uQ.j))
}
f.zp = function () {
    var a = this.o;
    a.k.stop();
    a.A = !1;
    this.qa("contentPauseRequested")
};
f.Ap = function () {
    this.qa("contentResumeRequested");
    if (!this.R) {
        var a = this.o;
        a.k.start();
        a.A = !0
    }
    this.D = null
};
f.sq = function () {
    this.D = null;
    cZ(this)
};
f.qa = function (a) {
    var b = null;
    null != this.j && (b = this.j.getCurrentAd());
    this.U(new hJ(a, b))
};
f.Cp = function (a, b) {
    return this.S = new ZY(a, b)
};
function eZ(a) {
    uX.call(this, a);
    this.W = this.V = this.P = !1;
    this.M = [];
    this.R = Va();
    this.j = null;
    this.o = !0;
    this.S = -1;
    this.K = 1
}
inherit(eZ, uX);
f = eZ.prototype;
f.init = function (a) {
    eZ.J.init.call(this, a);
    a = jU(vX(this));
    if (/\.html(\?.*)?$/.test(a)) {
        if (a.match("//s0.2mdn.net/instream/html5/survey/survey.html")) {
            var b = "en".replace("-", "_");
            a = a.replace(".html", "_" + b + ".html");
            null != this.k.contentId && (a = Xe(a, "v", this.k.contentId))
        }
        a = B(a)
    } else {
        var b = new J(a), c = new J("http://tpc.googlesyndication.com/pagead/js/loader7.html");
        "https" == b.Ib && Ye(c, "https");
        a = bf(c, a || "", void 0).toString()
    }
    this.D = I("iframe", {
        src: DJ(a),
        allowtransparency: !0,
        background: "transparent",
        style: "border:0; opacity:0; margin:0; overflow:hidden;padding:0; width:100%; height:100%;position: absolute;"
    });
    xX(this).listen(window, "message", this.xC);
    xX(this).listen(this.D, "load", this.Iw);
    xX(this).listen(this.D, "error", this.TA);
    this.A.uf().appendChild(this.D)
};
f.Hc = function (a, b, c) {
    eZ.J.Hc.call(this, a, b, c);
    this.o = ST(vX(this)) instanceof sT;
    this.j = a.ti(!1);
    xX(this).listen(this.j, "click end error mediaLoadTimeout pause play timeUpdate volumeChange".split(" "), this.zA)
};
f.stop = function () {
    this.A.hide();
    eZ.J.stop.call(this)
};
f.start = function () {
    eZ.J.start.call(this);
    var a = vX(this), b = FV(a, this.j);
    this.B.j = b;
    if (b = a.j)
        this.Of(a), this.Le(b, fJ), this.fj(b);
    this.j.zi();
    this.A.rj();
    this.D.style.opacity = 1;
    this.W = !0;
    this.o && this.qa("contentPauseRequested");
    fZ(this)
};
f.pause = function () {
    gZ(this, "pauseAd")
};
f.resume = function () {
    gZ(this, "resumeAd")
};
f.setVolume = function (a) {
    eZ.J.setVolume.call(this, a);
    gZ(this, "setAdVolume", {value: a})
};
f.L = function () {
    var a = this.A.uf();
    null != a && Rd(a);
    this.o && this.qa("contentResumeRequested");
    this.qa("allAdsCompleted");
    this.P = !1;
    this.M = [];
    eZ.J.L.call(this)
};
f.Si = function () {
};
f.Iw = function () {
    var a = this.j.Xk();
    mb(a) && (a = this.k.mimeTypes);
    hZ(this, "wrapperCall", {messageType: "supportedMimeTypes", supportedMimeTypes: a});
    var a = QT(vX(this)), b = B(hU(vX(this))), b = {
        desiredBitrate: this.k.bitrate,
        creativeData: a,
        viewMode: this.I,
        clickThroughUrl: b
    };
    jU(vX(this)).match("//s0.2mdn.net/instream/html5/survey/survey.html") && 0 <= a.indexOf("yt_override") && null != this.k.surveyCreativeData && (b.creativeData = this.k.surveyCreativeData);
    hZ(this, "initAd", b);
    D(this.M, function (a) {
            hZ(this, a.type, a.params)
        },
        this);
    this.P = !0;
    this.M = []
};
function gZ(a, b, c) {
    a.P ? hZ(a, b, c) : a.M.push({type: b, params: c})
}
function hZ(a, b, c) {
    null != a.D ? (null != c || (c = {}), c.session = a.R, c.type = b, a.D.contentWindow.postMessage(lg(c), "*")) : (iZ(a, sK, null), a.stop())
}
f.xC = function (a) {
    a = a.j;
    if (a.source == this.D.contentWindow && (a = jg(a.data), a.session == this.R && w(a.type)))
        switch (a.type) {
            case "videoCall":
                switch (a.func) {
                    case "play":
                        this.A.wi();
                        this.j.getVideoUrl() != a.src && this.j.load(a.src, a.mimetype);
                        this.j.play();
                        break;
                    case "pause":
                        this.j.pause()
                }
                break;
            case "getAdRemainingTime":
                a = a.remainingTime;
                this.o || (hn(this.S), ha(a) && -1 != a || (a = 30), this.S = gn(this.fB, 1E3 * a, this));
                break;
            case "AdClickThru":
                BX(this, "click");
                this.qa("click");
                break;
            case "AdError":
                iZ(this, sK, null);
                this.stop();
                break;
            case "AdExpandedChange":
                this.qa("expandedChanged");
                break;
            case "AdImpression":
                this.qa("impression");
                break;
            case "AdLinearChange":
                a = a.isLinear;
                !this.o && a ? (this.qa("contentPauseRequested"), hn(this.S)) : !a && this.o && (this.qa("contentResumeRequested"), this.o = a, gZ(this, "getAdRemainingTime"));
                this.o = a;
                break;
            case "AdLoaded":
                this.V = !0;
                fZ(this);
                this.Yb("loaded");
                break;
            case "AdPaused":
                this.Yb("pause");
                break;
            case "AdPlaying":
                this.Yb("resume");
                break;
            case "AdRemainingTimeChange":
                this.o || gZ(this, "getAdRemainingTime");
                break;
            case "AdSkipped":
                this.Yb("skip");
                break;
            case "AdStarted":
                BX(this, "impression");
                BX(this, "creativeview");
                this.qa("start");
                break;
            case "AdStopped":
                BX(this, "stop");
                this.stop();
                break;
            case "AdUserAcceptInvitation":
                this.o ? BX(this, "acceptinvitationlinear") : BX(this, "acceptinvitation");
                break;
            case "AdUserMinimize":
                BX(this, "collapse");
                break;
            case "AdUserClose":
                this.Yb("userClose");
                break;
            case "AdVideoComplete":
                this.Yb("complete");
                break;
            case "AdVideoFirstQuartile":
                this.Yb("firstquartile");
                break;
            case "AdVideoMidpoint":
                this.Yb("midpoint");
                break;
            case "AdVideoStart":
                BX(this, "start");
                break;
            case "AdVideoThirdQuartile":
                this.Yb("thirdquartile");
                break;
            case "AdVolumeChange":
                a = a.volume;
                a != this.K && this.qa("volumeChange");
                0 == a && 0 != this.K ? (BX(this, "mute"), this.qa("mute")) : 0 == this.K && 0 != a && BX(this, "unmute");
                this.K = a;
                this.j.setVolume(a);
                break;
            case "Ping":
                GJ(a.url)
        }
};
f.TA = function (a) {
    iZ(this, $J, a);
    this.stop()
};
function iZ(a, b, c) {
    var d = vK(b, c), d = zV(d, vX(a)), e = OT(vX(a));
    JJ(e, d);
    xK(a, b, c)
}
f.zA = function (a) {
    switch (a.type) {
        case "timeUpdate":
            a = this.j.ad();
            var b = this.j.getCurrentTime();
            hZ(this, "wrapperCall", {messageType: "timeupdate", duration: a, currentTime: b});
            break;
        case "end":
            jZ(this, "ended");
            break;
        case "mediaLoadTimeout":
            jZ(this, "stalled");
            break;
        default:
            jZ(this, a.type)
    }
};
function jZ(a, b) {
    hZ(a, "wrapperCall", {messageType: b})
}
function fZ(a) {
    a.V && a.W && (gZ(a, "startAd"), a.o || gZ(a, "getAdRemainingTime"))
}
f.fB = function () {
    gZ(this, "stopAd")
};
function kZ() {
}
function gX(a) {
    if (!mb(a)) {
        var b = a[0], c = kU(b) && EK();
        switch (null != jU(b) && c ? "vpaid" : bU(b) && aU(b, "nonlinear") ? "overlay" : aU(b, "linear") ? "video" : aU(b, "nonlinear") ? "overlay" : null) {
            case "overlay":
                return bU(b) ? new HX(a) : new CX(a);
            case "video":
                return new fY(a);
            case "vpaid":
                return new eZ(a)
        }
    }
    return null
}

function lZ(a) {
    U.call(this);
    this.k = a;
    a = new RQ(new AQ);
    this.j = new $W(new kZ, a, uQ);
    this.j.listen("adsManagerLoaded", this.U, !1, this);
    this.j.listen("adError", this.U, !1, this);
    this.j.listen("adLoadError", this.U, !1, this)
}
inherit(lZ, U);
function mZ(a, b, c) {
    var d;
    try {
        d = window.top.location.href
    } catch (e) {
        d = window.location.href
    }
    b.location = d;
    b.referrer = window.document.referrer;
    b.oc = iQ(b.adTagUrl, b.linearAdSlotWidth, b.linearAdSlotHeight, b.nonLinearAdSlotWidth, b.nonLinearAdSlotHeight, a.k.A);
    b.Qm = a.k.F;
    aX(a.j, b, c)
}
lZ.prototype.L = function () {
    null != this.j && (this.j.Da("adsManagerLoaded", this.U), this.j.Da("adError", this.U), this.j.Da("adLoadError", this.U), this.j = null);
    lZ.J.L.call(this)
};
function nZ(a, b) {
    ur.call(this, a, b)
}
inherit(nZ, ur);
f = nZ.prototype;
f.wn = function () {
    Bq(this.app, !0, this.playerType);
    this.app.Yd(this.playerType)
};
f.pauseVideo = function () {
    this.app.pauseVideo(this.playerType)
};
f.ft = function (a, b, c) {
    Bq(this.app, !0, this.playerType);
    var d = this.app, e = this.playerType;
    d.Zf(d.getCurrentTime() + a, b, c, e)
};
f.oh = function (a, b) {
    Bq(this.app, !0, this.playerType);
    this.app.Zf(a, b, void 0, this.playerType)
};
f.$s = function () {
    Mq(this.app, this.playerType)
};
function oZ(a) {
    this.app = a;
    Is.call(this, a.mc)
}
inherit(oZ, Is);
oZ.prototype.getAdState = function () {
    return -1
};
oZ.prototype.subscribe = function (a, b, c) {
    return oZ.J.subscribe.call(this, a, b, c)
};
function pZ(a, b, c) {
    this.A = a;
    this.j = b || "";
    this.k = c || null;
    this.o = !1
}
function qZ(a, b, c) {
    WH(b, c, a.j)
}
pZ.prototype.info = function (a, b) {
    aI(a, b, this.j)
};
function rZ(a, b) {
    var c = a.A;
    if (c.ee && ("detailpage" == c.da || "leanback" == c.da || "embedded" == c.da && (c.ba || c.experiments.C)) && !a.o) {
        a.o = !0;
        Of("TIMING_ACTION") || Mf("TIMING_ACTION", a.A.pa);
        if (a.k) {
            var c = a.k.A, d;
            for (d in c)
                WH(d, c[d], a.j);
            d = a.k.o;
            for (var e in d)
                aI(e, d[e], a.j);
            e = a.k;
            e.A = {};
            e.o = {}
        }
        if (e = th("visibilityState", document)) {
            d = -1;
            switch (e) {
                case "hidden":
                    d = 0;
                    break;
                case "visible":
                    d = 1;
                    break;
                case "prerender":
                    d = 2;
                    break;
                case "unloaded":
                    d = 3
            }
            aI("yt_vis", d, a.j)
        }
        aI("yt_pt", "html5", a.j);
        b && !$H("pbs", a.j) && qZ(a,
            "pbs", b);
        $H("_start", a.j) && ZH(a.j)
    }
}
(function () {
    var a = window.document;
    if (a && "hidden" in a)
        return "hidden";
    var b = Ag();
    return b ? (b = b.toLowerCase(), b += Ya("hidden"), !n(a) || b in a ? b : null
    ) :
    null
})();
function sZ(a, b) {
    a = !!a;
    q("_lactCookie", a, window);
    if (null == t("_lact", window)) {
        if (Of("EXP_LACT_TEMPDATA")) {
            var c = parseInt(Of("LAST_ACTIVITY_TIME"), 10), c = isFinite(c) ? c : -1;
            q("_lact", c, window);
            -1 == c && zr()
        } else
            a && b ? (c = gk.get("ACTIVITY", "-1"), q("_lact", parseInt(c, 10), window)
    ) :
        (q("_lact", -1, window), zr());
        Q(document, "keydown", zr);
        Q(document, "keyup", zr);
        Q(document, "mousedown", zr);
        Q(document, "mouseup", zr)
    }
}
function zr() {
    var a = t("_lact", window);
    null == a && (sZ(), a = t("_lact", window));
    var b = y();
    q("_lact", b, window);
    Of("EXP_LACT_TEMPDATA") || t("_lactCookie", window) && 1E3 <= b - a && hk("ACTIVITY", "" + b);
    Fi("USER_ACTIVE")
}
function tZ() {
    var a = t("_lact", window);
    return null == a ? -1 : Math.max(y() - a, 0)
}

var uZ = {SI: "0", VI: "1", tu: "2", LI: "3"};
var vZ = {nJ: "red", WHITE: "white", $G: "blue"};
function wZ(a) {
    this.experimentIds = (a || "").split(",");
    var b = {};
    D(this.experimentIds, function (a) {
        b[a] = !0
    });
    this.j = !!b["913424"];
    this.A = !!b["932250"];
    this.W = !!b["945066"];
    this.C = !!b["945069"];
    this.Ua = !!b["945074"];
    this.M = !!b["945089"];
    this.P = !!b["945090"];
    this.X = !!b["934052"];
    this.Ga = !!b["945093"];
    this.R = !!b["945094"];
    this.ja = !!b["945097"];
    this.ka = !!b["945098"];
    this.ga = !!b["964602"];
    this.la = !!b["964603"];
    this.o = !!b["936926"];
    this.D = !!b["913430"];
    this.S = !!b["927877"];
    this.G = !!b["913444"] || !!b["934947"] || !!b["934952"] || !!b["934953"] || !!b["934954"] || !!b["937225"] || !!b["937226"] || !!b["948904"] || !!b["948905"] || !!b["948906"] || !!b["948907"] || !!b["948908"] || !!b["948909"] || !!b["948910"] || !!b["948911"] || !!b["948912"] || !!b["948913"] || !!b["937235"] || !!b["934959"];
    this.k = !!b["913444"] || !!b["934947"] || !!b["937225"] || !!b["937226"] || !!b["948904"] || !!b["948905"] || !!b["948906"] || !!b["948907"] || !!b["948908"] || !!b["948909"] || !!b["948910"] || !!b["948911"] || !!b["948912"] || !!b["948913"] || !!b["937235"] || this.j;
    this.F = !!b["953500"];
    this.ba = !!b["951502"];
    this.spherical = !!b["951503"];
    this.B = !!b["951506"];
    this.fz = !!b["943610"];
    this.Jl = !!b["943605"];
    this.gz = !!b["943606"];
    this.Kl = !!b["900720"];
    this.I = !!b["909722"];
    this.H = !!b["939977"] || !!b["930678"];
    this.O = !!b["937222"];
    this.V = !!b["905657"];
    this.K = !!b["909727"];
    this.ea = !!b["922333"]
}

var xZ = {"ad-trueview-indisplay-pv": 6, "ad-trueview-insearch": 7}, yZ = {
    "ad-trueview-indisplay-pv": 2,
    "ad-trueview-insearch": 2
}, zZ = "blogger books docs google-live play picasaweb".split(" ");
function AZ(a) {
    R.call(this);
    a = $b(a);
    this.B = {};
    this.experiments = new wZ(a.fexp);
    this.Ia = a.forced_experiments || null;
    this.origin = LH(this.origin, a.origin);
    this.G = LH("", a.loaderUrl);
    var b = document.location.toString();
    this.Te = (this.H = !!b && -1 != b.search(Af)) ? LH("", a.loaderUrl) : document.location.toString();
    "adunit" == a.el ? bg(this.G) ? this.da = "adunit" : this.da = "embedded" : this.da = a.el || this.da;
    sZ("detailpage" == this.da, a.autonav);
    var b = null, c = a.ps;
    !c || G(zZ, c) && !this.Db() || (b = c);
    this.j = b;
    switch (this.j) {
        case "blogger":
            this.Rc =
                "bl";
            break;
        case "books":
            this.Rc = "gb";
            break;
        case "docs":
            this.Rc = "gd";
            break;
        case "google-live":
            this.Rc = "gl";
            break;
        case "play":
            this.Rc = "gp";
            break;
        case "picasaweb":
            this.Rc = "pw"
    }
    this.Jb = G(zZ, this.j);
    b = "blogger" == this.j || "books" == this.j || "docs" == this.j || "google-live" == this.j || "picasaweb" == this.j;
    this.Ma = !b;
    this.$g = IH(!1, a.logwatch);
    this.ge = !b;
    this.o = {};
    this.o.c = "web";
    this.o.cver = "html5";
    this.o.cplayer = "UNIPLAYER";
    this.Aa = IH(!1, a.edu_mode);
    this.K = !(!Yt().defaultPlaybackRate || ad && !$r("chrome") || Rh || Qh || $r("android") ||
    $r("silk"));
    if (a.use_media_volume)
        c = !1;
    else {
        var c = Yt(), d = c.muted;
        c.muted = !d;
        c = c.muted != d
    }
    this.Re = c;
    this.de = Sh;
    this.$e = (Rh || Qh || Uh) && "blazer" != this.j && !iD(this);
    this.Wa = IH("adunit" != this.da && "detailpage" != this.da && !this.Jb, a.showinfo);
    this.isMobile = IH("blazer" == this.j, a.is_html5_mobile_device);
    this.I = IH(!1, a.playsinline);
    c = this.isMobile && Rt && 2.3 >= Qt;
    d = Qh && !this.I || !c && IH("native" == this.j, a.use_native_controls) ? "3" : "1";
    this.k = "0" != a.controls ? d : "0";
    this.Qc = IH("blazer" == this.j || "touch" == this.j, a.use_tablet_controls);
    this.oa = "1" != this.k ? "0" : this.Qc ? "blazer" == this.j ? "3" : "1" : JH("2", a.autohide, uZ);
    this.color = JH("red", a.color, vZ);
    this.Va = "3" == this.k || IH(!1, a.modestbranding) && "red" == this.color;
    if (d = IH(!1, a.nologo))
        var d = this.H ? this.G : document.location.toString(), e = !!d && -1 != d.search(If), d = $f(d) || e;
    this.he = d;
    d = !this.Va && "1" == this.k;
    this.nb = "embedded" == this.da && !this.Wa && !this.Jb && !d;
    this.af = this.Ze = c;
    this.C = Qh ? this.experiments.ea && 7 <= Tr : !0;
    this.Ea = this.H || !1;
    this.F = "detailpage" == this.da ? "" : this.Te.substring(0, 128);
    this.xa = !!a.disableCast;
    var g = "video.google.com";
    this.cf = g;
    this.ob = "//" + g + "/api/stats/qoe";
    this.autoplay = IH(!1, a.autoplay);
    this.od = IH(!1, a.autoplayoverride);
    this.ac = this.autoplay || "detailpage" == this.da;
    g = this.od || !this.isMobile && !$r("nintendo wiiu");
    this.ba = this.ac && g;
    g = "detailpage" == this.da && "blazer" == this.j;
    this.la = IH(!0, a.fs) && (g || Jh());
    this.ie = !!a.use_airplay_data_id;
    this.A = ((g = (g = a.BASE_YT_URL) && g.match(yf)) ? g[0] : "") || "/";
    this.Se = ((g = a.gdatabaseurl) && -1 != g.search(Bf) ? a.gdatabaseurl : null) || "//gdata.youtube.com/";
    this.ga = IH(!this.Jb, a.rel);
    this.Xa = IH("detailpage" == this.da && "blazer" != this.j || "books" == this.j, a.enablesizebutton);
    this.protocol = (this.bf = (this.ib = IH(!1, a.ssl_stream)) || IH(!1, a.ssl)) ? "https" : "http";
    this.fe = "adunit" != this.da;
    this.R = "profilepage" == this.da;
    this.theme = "light" != a.theme || this.Qc ? "dark" : "light";
    this.Pe = "blazer" != this.j && "native" != this.j && "touch" !=
    this.j;
    this.ee = IH("blazer" == this.j, a.enablecsi);
    this.Za = LH(this.Za, a.authuser);
    this.M = LH(this.M, a.content_v);
    this.Mk = IH(this.Mk, a.disablekb);
    this.S = LH(this.S, a.framer);
    this.na = JH(this.na, a.iv_load_policy, bz);
    this.P = LH(this.P, a.hl);
    this.Sp = IH(this.Sp, a.bwlogging);
    this.Id = IH(this.Id, a.player_wide);
    this.Di = IH(this.Di, a.privembed);
    this.ea = KH(this.ea, a.live_chunk_readahead || a.hls_live_chunk_readahead);
    this.Ns = IH(this.Ns, a.loop);
    this.pageId = LH(this.pageId, a.pageid);
    this.lm = PH(this.lm, a.vq);
    this.nm = LH(this.nm,
        a.playerapiid);
    this.region = LH(this.region, a.cr);
    this.Mm = IH(this.Mm, a.canplaylive);
    this.wj = IH(this.wj, a.ss);
    this.Db() && (this.zm = IH(this.zm, a.retryneterr));
    "3" == this.k && (this.na = 3);
    g = this.gh;
    if (b = a.video_container_override)
        c = b.split("x"), 2 == c.length && (b = parseInt(c[0], 10), c = parseInt(c[1], 10), g = isNaN(b) || isNaN(c) || 0 >= b * c ? g : new H(b, c));
    this.gh = g;
    this.Gh = LH(this.Gh, a.attrib);
    this.Hh = LH(this.Hh, a.sk);
    this.Pm = IH("0" != this.k, a.store_user_volume);
    this.Wd = IH(this.Wd, a.use_media_volume);
    BZ(this, a);
    this.B = a
}
inherit(AZ, R);
var CZ = {
    aH: "cbrand",
    cH: "cbr",
    dH: "cbrver",
    eI: "c",
    gI: "cver",
    fI: "cplayer",
    EI: "cmodel",
    NI: "cnetwork",
    YI: "cos",
    ZI: "cosver",
    $I: "cplatform"
};
f = AZ.prototype;
f.jg = null;
f.Za = "";
f.Mk = !1;
f.da = "detailpage";
f.Sp = !1;
f.bb = !1;
f.Vp = !1;
f.Id = !1;
f.Di = !1;
f.pg = !1;
f.Ns = !1;
f.lm = Ht;
f.nm = "";
f.pageId = "";
f.zm = !1;
f.Mm = !0;
f.Pm = !0;
f.Wd = !1;
f.wj = !1;
f.Ij = null;
f.gh = null;
f.Bj = null;
f.wb = null;
f.Rc = "yt";
function Yq(a, b) {
    a.va = b.get("d", a.va);
    a.ja = b.get("f", a.ja)
}
function BZ(a, b) {
    a.D = void 0;
    var c;
    (c = b.adformat) || (c = (c = b.attrib) && c in xZ && c in yZ ? yZ[c] + "_" + xZ[c] : void 0);
    if (c) {
        var d = c.match(/^(\d*)_((\d*)_?(\d*))$/);
        d && 5 == d.length && (d = d[3], d = 6 == d || 7 == d || 8 == d || 10 == d, a.Db() || d) && (a.D = c, a.B.adformat = b.adformat, d || (a.da = "adunit"))
    }
    a.jg = b && b.adpings ? oj(b.adpings) : null;
    c = b.agcid;
    a.Cc = c;
    a.B.agcid = c;
    c = b.feature;
    a.O = c;
    a.B.feature = c;
    c = b.referrer;
    a.referrer = c;
    a.B.referrer = c;
    a.searchQuery = b.q;
    for (var e in CZ)
        c = CZ[e], d = b[c], void 0 != d && (a.o[c] = d);
    a.$g = IH(a.$g, b.logwatch);
    a.userAge = KH(a.userAge, b.user_age);
    a.X = LH(a.X, b.user_display_image);
    ag(a.X) || (a.X = "");
    a.ka = LH(a.ka, b.user_display_name);
    a.lc = LH(a.lc, b.user_gender);
    a.W = LH(a.W, b.eventid);
    a.pa = LH(a.pa, b.csi_page_type)
}
function DZ(a, b, c) {
    switch (b.X) {
        case 38:
            return a = b.videoId.indexOf(":"), Re("//play.google.com/books/volumes/" + b.videoId.slice(0, a) + "/content/media", {
                aid: b.videoId.slice(a + 1),
                sig: b.Mv
            });
        case 30:
            return c = "//docs.google.com/", a.A != AZ.prototype.A && (c = a.A), Re(c + "get_video_info", {
                docid: b.videoId,
                authuser: b.Za,
                authkey: b.Cc,
                eurl: a.F
            });
        case 33:
            return Re("//google-liveplayer.appspot.com/get_video_info", {key: b.videoId});
        default:
            var d = {
                html5: "1", video_id: b.videoId, cpn: b.ya, eurl: a.F, ps: a.j, el: a.da, hl: a.P, list: b.playlistId,
                agcid: a.Cc, sts: 16475, lact: EZ(a) ? tZ() : "-1"
            };
            a.Ia && (d.forced_experiments = a.Ia);
            b.F ? d.vvt = b.F : b.B && (d.access_token = b.B);
            a.D && (d.adformat = a.D);
            b.pa && (d.iv_load_policy = b.pa);
            b.Aa && (d.itct = b.Aa);
            b.Jg && (d.autoplay = "1");
            b.Ml && (d.noiba = "1");
            b.Pl && (d.mdx = "1");
            b.Pe && (d.ytrcc = b.Pe);
            b.Ul && (d.utpsa = "1");
            b.de && (d.is_fling = "1");
            c.width && (d.width = c.width);
            c.height && (d.height = c.height);
            b.oa && (d.ypc_preview = "1");
            b.Zd && (d.splay = "1");
            a.M && (d.content_v = a.M);
            b.Ol && (d.livemonitor = 1);
            a.Za && (d.authuser = a.Za);
            a.pageId && (d.pageid =
                a.pageId);
            a.W && (d.ei = a.W);
            a.ib && (d.ssl_stream = "1");
            a.H && (d.iframe = "1");
            b.Oj && (d.tst = b.Oj);
            b.contentCheckOk && (d.cco = "1");
            b.racyCheckOk && (d.rco = "1");
            qa(d, a.o);
            return Re(a.A + "get_video_info", d)
    }
}
function FZ(a) {
    return a.referrer ? a.referrer.slice(0, 128) : ""
}
f.getVideoUrl = function (a, b, c) {
    return eE(this, a.videoId, a.playlistId, b, c)
};
function GZ(a) {
    return "www.youtube-nocookie.com" == window.location.host || a.Aa ? "www.youtube.com" : window.location.host
}
function eE(a, b, c, d, e) {
    b = {v: b, list: c};
    d && qa(b, d);
    a = Re(a.protocol + "://" + GZ(a) + "/watch", b);
    if (e) {
        d = "";
        d = "!" == "#".charAt(1) ? "#".substr(0, 2) : "#";
        b = "#";
        "#" == b.charAt(0) && (b = "!" == b.charAt(1) ? b.substr(2) : b.substr(1));
        b = oj(b);
        for (var g in e)
            b[g] = e[g];
        e = d + Pe(b);
        a = a + e
    }
    return a
}
function HZ(a, b) {
    if ("play" != a.j)
        return "https://support.google.com/youtube/?p=report_playback";
    var c = {contact_type: "playbackissue", html5: 1, plid: b.playbackId, ei: b.G, v: b.videoId, p: "movies_playback"};
    b.o && (c.fmt = b.o.id);
    b.ya && (c.cpn = b.ya);
    b.X && (c.partnerid = b.X);
    return Re("//support.google.com/googleplay/", c)
}
function IZ(a) {
    var b = {};
    if (!a.wb)
        return b;
    a.wb.webkitDecodedFrameCount && (b.hmewdfc = a.wb.webkitDecodedFrameCount, b.hmewdrop = a.wb.webkitDroppedFrameCount, b.hmewvdbc = a.wb.webkitVideoDecodedByteCount, b.hmewadbc = a.wb.webkitAudioDecodedByteCount);
    a.wb.mozParsedFrames && (b.hmempf = a.wb.mozParsedFrames, b.hmemdf = a.wb.mozDecodedFrames, b.hmempresented = a.wb.mozPresentedFrames, b.hmempainted = a.wb.mozPaintedFrames, b.hmempaintdelay = a.wb.mozPaintDelay);
    return b
}
function JZ() {
    return tZ()
}
function EZ(a) {
    return a.experiments.I ? "detailpage" == a.da || "leanback" == a.da : !0
}
function sE(a) {
    return "leanback" == a.da || a.Jb || !a.ga && !a.R ? !1 : !0
}
function pr(a) {
    return "detailpage" != a.da && "embedded" != a.da && "profilepage" != a.da ? !1 : !0
}
f.Db = function () {
    var a;
    a = document.location.toString();
    var b = (a = !!a && -1 != a.search(zf)) && !this.H;
    return a && this.H && $f(this.G) || b
};
function Jq(a) {
    var b = null != a.G && 0 == a.G.search("^https?://www.youtube.com");
    return "detailpage" == a.da || "profilepage" == a.da || b
}
function iD(a) {
    return bs() || "tv" == a.o.cplatform
}
function nE(a) {
    return a.experiments.G && "detailpage" == a.da && "blazer" != a.j
}
f.L = function () {
    this.wb = null;
    AZ.J.L.call(this)
};
function KZ(a, b) {
    this.j = a;
    this.k = b;
    this.o = 1
}
function LZ(a, b, c, d) {
    d /= a.o;
    var e = OF(a.j) + 1 / PF(a.j), g;
    g = Math.max(.9 * (d - 3), NF(a.j) + 8192 * e);
    c = g / e / (b + c);
    c = Math.min(c, d);
    c = Math.max(a.k.H, Math.min(a.k.P, c));
    a = Math.max(a.k.D, Math.ceil(a.k.H * b));
    return Math.min(a, Math.max(Math.ceil(c * b), 65536))
}
function MZ(a) {
    var b = PF(a.j);
    a = NF(a.j) + 1048576 * OF(a.j);
    return b * Math.min(1, 1048576 / (b * a))
}
function NZ(a) {
    return MZ(a) / a.o
}

function OZ(a, b, c) {
    this.j = a;
    this.video = b;
    this.reason = c
}

function PZ(a, b, c, d) {
    this.M = a;
    this.P = b;
    this.F = c;
    this.D = d;
    this.o = this.G = this.j = null;
    this.B = "i";
    this.I = -1;
    this.C = this.A = null;
    this.k = [];
    this.H = this.K = 0;
    this.O = null
}
function QZ(a, b, c) {
    "m" == c && Jt(a.j) && !Jt(b) && (c = "a");
    if ("m" == c && Jt(b))
        return a.B = c, RZ(a, b), SZ(a), a.o = TZ(a), new OZ(UZ(a), a.o, c);
    var d = a.j.equals(b);
    if ("m" == a.B && Jt(a.j) && d)
        return null;
    "r" != c || d || (a.I = -1);
    RZ(a, b);
    b = TZ(a);
    if ("r" == c && b == a.o) {
        if (d)
            return null;
        a.o = b;
        return new OZ(UZ(a), b, c)
    }
    a.B = c;
    return null
}
function VZ(a, b) {
    WZ(a);
    a.O = b;
    a.H = y();
    a.I = -1;
    RZ(a, a.j)
}
function WZ(a) {
    return !!a.H && 9E4 >= y() - a.H
}
function UZ(a) {
    XZ(a);
    return a.A
}
function TZ(a) {
    XZ(a);
    return a.C
}
function YZ(a) {
    var b = a.B;
    a.B = "a";
    a.I = y();
    return new OZ(a.G, a.o, b)
}
function XZ(a) {
    if (Jt(a.j) || !(8E3 > y() - a.I)) {
        a.H && !WZ(a) && (a.H = 0, RZ(a, a.j));
        SZ(a);
        var b = NZ(a.M);
        if (Jt(a.j))
            a.C = a.F.j[a.k[a.k.length - 1].id];
        else {
            for (var c = Math.min(a.K, a.k.length - 1), d = b / 1.05 - a.A.info.ra; 0 < c && !(a.k[c].ra <= d); c--)
                ;
            for (b = b / 1.15 - a.A.info.ra; c < a.k.length - 1 && !(a.k[c + 1].ra >= b); c++)
                ;
            a.K = c;
            a.C = a.F.j[a.k[c].id]
        }
    }
}
function RZ(a, b) {
    a.j = b;
    var c = a.D.k;
    if (!Jt(a.j) && (c = fb(c, function (a) {
            return a.ra > this.P.ra ? !1 : !this.F.j[a.id].B
        }, a), WZ(a))) {
        var c = fb(c, function (a) {
            return a.id != this.O.id
        }, a), d = fb(c, function (a) {
            a = rt(a);
            return "140" == a || "134" == a || "243" == a
        });
        d.length && (c = d)
    }
    c.length || (c = a.D.k);
    c = fb(c, a.j.A, a.j);
    c.length || (c = [a.D.k[0]]);
    c.sort(function (a, b) {
        return a.ra - b.ra
    });
    for (d = 1; d < c.length; d++) {
        var e = c[d - 1], g = c[d];
        e.video.width > g.video.width ? (qb(c, d), d--) : 1.15 * e.ra > g.ra && (qb(c, d - 1), d--)
    }
    a.k = c
}
function ZZ(a) {
    var b = F(a.D.j, function (a) {
        return !!a.Jd && a.Jd.isDefault
    }), b = b || a.D.j[0];
    a.A = a.F.j[b.id];
    SZ(a)
}
function SZ(a) {
    if (!a.A.info.Jd && (a.A = a.F.j[a.D.j[0].id], 1 < a.D.j.length)) {
        var b = !1;
        if (Jt(a.j))
            b = 240 > a.j.j;
        else {
            for (b = 0; b + 1 < a.k.length && "tiny" == a.k[b].video.quality;)
                b++;
            var c = NZ(a.M) / 1.15, b = a.A.info.ra + a.k[b].ra > c
        }
        b && (a.A = a.F.j[a.D.j[1].id])
    }
}
function $Z(a) {
    var b = NZ(a.M) / 1.05 - a.A.info.ra, c = lb(a.k, function (a) {
        return this.P.A && this.P.A < Dt[a.video.quality] ? !1 : a.ra < b
    }, a);
    0 > c && (c = 0);
    a.K = c;
    a.C = a.F.j[a.k[c].id]
}

function a_() {
    this.j = this.k = !1
}
a_.prototype.start = function () {
    this.k = !0
};
function b_(a, b) {
    this.I = a;
    this.o = b;
    this.B = [];
    this.j = [];
    this.A = this.k = null;
    this.C = 0;
    this.ra = b.info.ra;
    this.F = this.G = !1;
    this.D = new a_;
    this.H = null
}
function c_(a, b) {
    a.B.push(b);
    a.k = bb(b.info.j);
    a.C += yG(b.info)
}
function d_(a) {
    for (; a.B.length && 5 == a.B[0].state;) {
        var b = a.B.shift();
        a.C -= yG(b.info);
        a.C += bb(b.B).buffer.byteLength;
        D(b.B, a.M, a)
    }
}
b_.prototype.M = function (a) {
    if (4 == a.info.type) {
        var b = a.info.j.Er(a);
        a.info == this.k && (this.k = bb(b).info);
        D(b, this.M, this)
    } else
        3 == a.info.type && this.j.push(a)
};
function e_(a) {
    var b = BG(a.j[0]);
    return b.getInt32(0) > b.byteLength && 1 == a.j.length
}
function f_(a, b) {
    if (a.G)
        return a.j[0].aa;
    var c = a.o.info.j, d = a.o.Qh();
    if (a.j[0].info.B >= b)
        return null;
    var e;
    for (e = 1; e < a.j.length; e++) {
        var g = a.j[e].buffer != a.j[e - 1].buffer;
        if (a.j[e].info.B > b || g || a.I.I)
            break
    }
    e--;
    var g = a.j[e].aa.end, h = a.j[e].info.D - b;
    if (d && c && 0 <= a.I.F && h > a.I.F) {
        c = Math.floor((b - a.j[e].info.B) / a.j[e].info.G * a.j[e].info.k);
        if (0 == c)
            return null;
        g = a.j[e].aa.start + c - 1
    }
    return new bG(a.j[0].j ? 0 : a.j[0].aa.start, g)
}
function g_(a, b) {
    for (var c; a.j.length;) {
        if (a.j[0].aa.end > b.end) {
            var d;
            c = a.j[0];
            var e = b.end - a.j[0].aa.start + 1, e = Math.min(e, c.info.k), g = new sG(c.info.type, c.info.j, c.info.aa, c.info.A, c.info.startTime, c.info.duration, c.info.o, e, !1);
            d = dG(c.aa.start, e);
            g = new ZG(g, c.buffer, d, c.j);
            e = new sG(c.info.type, c.info.j, c.info.aa, c.info.A, c.info.startTime, c.info.duration, c.info.o + e, c.info.k - e, c.info.F);
            d = new bG(d.end + 1, c.aa.end);
            d = [g, new ZG(e, c.buffer, d, !1)];
            c = d[0];
            a.j[0] = d[1]
        } else
            c = a.j.shift();
        d = a;
        g = c.info;
        d.A =
            g;
        d.G && d.A.C && (d.G = !1);
        d.ra = Math.max(d.ra, g.j.info.ra);
        if (c.aa.end == b.end)
            break
    }
    a.j.length && c.buffer == a.j[0].buffer || (a.C -= c.buffer.byteLength)
}
function h_(a, b) {
    var c = i_(a, b);
    if (0 <= c)
        return c;
    a.k = a.o.ki(b).j[0];
    j_(a) && (a.A = null);
    a.H = null;
    return a.k.startTime
}
function k_(a, b) {
    l_(a);
    if (a.o.info.video && a.A && !a.A.C && b) {
        var c = jb(a.j, function (a) {
            return a.info.C
        });
        a.j = wb(a.j, 0, c + 1);
        a.G = !0
    } else
        a.j = [];
    if (a.j.length)
        for (a.C = a.j[0].buffer.byteLength, c = 1; c < a.j.length; c++)
            a.j[c].buffer != a.j[c - 1].buffer && (a.C += a.j[c].buffer.byteLength);
    else
        a.C = 0
}
function m_(a) {
    a.D.k || a.D.start();
    k_(a, !1);
    j_(a) && (a.A = null)
}
function n_(a, b) {
    for (var c = 0; c < a.B.length && b !== a.B[c]; c++)
        ;
    if (c == a.B.length)
        b.dispose();
    else {
        for (; c < a.B.length;)
            a.K(a.B.pop());
        3 == b.info.j[0].type ? (c = b.info.j[0], c = new sG(c.type, c.j, c.aa, c.A, c.startTime, 0, c.o, 0, !1), a
    .
        k = c
    ) :
        a.k = null
    }
}
function o_(a) {
    return hb(a.j, function (a) {
        return a.info.C
    })
}
function j_(a) {
    return !!a.A && a.A.F
}
function p_(a) {
    var b = [];
    a.A && b.push(a.A);
    D(a.j, function (a) {
        b.push(a.info)
    });
    D(a.B, function (a) {
        D(a.info.j, function (a) {
            3 != a.type && 4 != a.type || b.push(a)
        })
    });
    a.k && a.k != bb(b) && b.push(a.k);
    return b
}
function q_(a) {
    if (!a.k || !a.k.k)
        return !1;
    a = p_(a);
    if (!a.length)
        return !1;
    for (var b = 1; b < a.length; b++)
        if (!(1E-6 >= Math.abs(a[b].B - a[b - 1].D)))
            return !1;
    return !0
}
function i_(a, b) {
    if (q_(a)) {
        var c;
        t: {
            c = p_(a);
            for (var d = 0; d < c.length; d++)
                if (c[d].B <= b && c[d].startTime + c[d].duration >= b) {
                    c = c[d];
                    break t
                }
            c = null
        }
        if (c)
            return c.startTime
    }
    return NaN
}
function r_(a) {
    return hb(a.B, function (a) {
        return 3 <= a.state
    })
}
function s_(a) {
    return !(!a.k || !a.o.Nc() || a.k.j == a.o)
}
function t_(a) {
    return s_(a) && a.k.j.info.ra < a.o.info.ra
}
b_.prototype.K = function (a) {
    a.dispose();
    this.C -= yG(a.info)
};
function l_(a) {
    D(a.B, a.K, a);
    a.B = [];
    a.k = null
}
function u_(a) {
    return !!a.k && a.k.A < a.o.index.wg()
}

function v_(a, b, c) {
    this.D = a;
    this.info = b;
    this.timing = c;
    this.state = 1;
    this.j = this.B = null;
    this.F = this.A = this.G = 0;
    this.o = NaN;
    this.C = this.k = this.H = null;
    this.I = 0
}
v_.k = !1;
v_.j = 1E4;
function w_(a) {
    a.k ? (a = a.k.j, WF(a), a = a.B
) :
    a = "";
    return a
}
f = v_.prototype;
f.getErrorCode = function () {
    return this.C
};
function x_(a) {
    var b;
    b = a.timing;
    b = {rt: ((y() - b.o) / 1E3).toFixed(2), lb: b.k, pt: (b.M / 1E3).toFixed(2), pb: b.K};
    b.shost = w_(a);
    a.I && (b.rc = a.I.toString());
    return b
}
f.start = function () {
    var a = 1 == this.state, b = 6 == this.state;
    1 == this.state || 4 == this.state || b && y_(this);
    z_(this, 2);
    var c;
    (c = !this.D.S) || (c = this.info.k, c = this.G > c.o && 1 <= c.k);
    c ? c = !1 : (c = w_(this), c = ac(IF(this.timing.j.j, c)), c = 2 <= c.Td && 0 == c.done && (0 < c.hs || 0 < c.Qo));
    if (c || b && 2 <= this.A) {
        b = this.info.k;
        if (!(this.G <= b.o)) {
            b.k++;
            b.o = qG - 1;
            c = XF(b.j);
            var d = new J(c);
            if (d.mb.match("\\.googlevideo\\.com$")) {
                Ze(d, "redirector.googlevideo.com");
                c = d.toString()
            } else if (d.mb.match("r[1-9].*\\.c\\.youtube\\.com$")) {
                Ze(d, "www.youtube.com");
                c = d.toString();
            } else {
                c = cg(c);
            }
            b.j = new VideoFile(c);
            b.j.set("cmo", encodeURIComponent("pf=" + b.k))
        }
        this.A = 0
    } else if (b) {
        this.A++;
        a = v_.j * (.5 + Math.random());
        1 == this.A && (a = 2E3);
        L(x(this.Bn, this), a);
        return
    }
    a ? this.Bn() : L(x(this.Bn, this), 0)
};
f.Bn = function () {
    if (!this.ha()) {
        this.G = qG++;
        this.k = NC(this.info);
        this.A && this.k.set("playerretry", this.A.toString());
        var url = MC(this.k);
        this.j = new XMLHttpRequest;
        try {
            this.j.open("GET", url)
        } catch (b) {
            this.C = "net.ssl";
            z_(this, 6);
            return
        }
        this.j.responseType = "arraybuffer";
        this.j.withCredentials = !0;
        var handler = x(this.CC, this);
        this.j.addEventListener("load", handler, !1);
        this.j.addEventListener("error", handler, !1);
        this.j.send();
        this.F = 0;
        var a = this.timing;
        var c = w_(this);
        a.G = c;
        IF(a.j.j, c).Td += 1;
        a.o = y();
        a.C = a.o;
        a.k = 0;
        a.H = !1;
        a.I = !1;
        a.B = 0;
        a.F =
            QF(a.j);
        A_(a);
        a.M = a.D - a.o;
        this.j.addEventListener("progress", x(this.DC, this), !1);
        0 < this.D.k && (this.o = L(x(this.Cr, this), this.D.k));
        this.k.get("itag");
        this.k.get("range");
        Math.round(this.info.j[0].B);
        Math.round(bb(this.info.j).D);
        y()
    }
};
f.DC = function (a) {
    if (this.ha()) return;
    this.j && (this.I = this.j.status);
    var timing = this.timing;
    var timeStamp = a.timeStamp;
    c = timeStamp > timing.o && 4E12 > timeStamp ? timeStamp : y();
    20 > c - timing.C || B_(timing, c, a.loaded);
    if (timing.k > timing.P && 8192 < timing.k && 3 > this.state)
        z_(this, 3)
};
f.CC = function (e) {
    var b = this.j;
    if (this.ha() || e.target !== b) return
    this.o && (M(this.o), this.o = NaN);
    this.I = b.status;
    var a = !1;
    if (400 <= b.status) {
        a = !0
        this.C = "net.badstatus";
    } else if (null == b.response) {
        a = !0;
        this.C = "net.connect";
    }
    if (!a) {
        var b = b.response, c;
        t: {
            if (2048 > b.byteLength && (c = String.fromCharCode.apply(String, new Uint8Array(b))) && -1 != c.search(Gf))
                break t;
            c = ""
        }
        if (c) {
            var b = this.info.k, d = this.k;
            d.j === b.j && (b.j = oG(d, c));
            z_(this, 4)
        } else if (this.info.aa && b.byteLength != this.info.aa.length) {
            a = !0;
            this.C = "fmt.unparseable";
        } else {
            c = this.info.j;
            if (1 == c.length && !c[0].aa) {
                var d = c[0], e = dG(0, b.byteLength), d = new sG(d.type, d.j, e, d.A, d.startTime, d.duration, d.o, e.length, d.F);
                c[0] = d
            }
            for (var d = [], e = 0, g = !1, h = !1, k = 0; k < c.length; k++) {
                var l = c[k], p = b, r = dG(e, l.k), u = !1;
                if (1 == l.type)
                    b.slice ? p = b.slice(e, e + l.k) : (g = new Uint8Array(b, e, e + l.k), p = (new Uint8Array(g)).buffer), r = dG(0, l.k), g = !0;
                else if (3 == l.type || 4 == l.type)
                    u = g && !h, h = !0;
                d.push(new ZG(l, p, r, u));
                e += l.k
            }
            this.B = d;
            c = this.timing;
            d = y();
            b = b.byteLength;
            c.H || (c.H = !0, IF(c.j.j, c.G).done += 1, d = d > c.o && 4E12 > d ? d : y(),
                B_(c, d, b), e = (d - c.o) / 1E3, !c.I && 8192 <= c.k && KF(c.j, e, b), 8192 <= c.k && (e = c.j, h = c.B, b = Math.max(b, 8192), e.A.k(1, h / b), RF(e)), MF(c.j, d - c.o, c.k), c.A && (c.A = !1));
            y();
            z_(this, 5)
        }
    }
    if (a) {
        y_(this);
        z_(this, 6);
        var timing = this.timing;
        y();
        IF(timing.j.j, timing.G).Qo += 1;
    }
};
function y_(a) {
    if (2 > a.A)
        a = !0;
    else {
        var b = a.info.k;
        a = !(a.G > b.o && 1 <= b.k)
    }
    return a
}
function z_(a, b) {
    a.state = b;
    if (4 <= a.state) {
        var c = a.timing;
        c.A && (c.A = !1)
    }
    a.H && a.H(a)
}
f.Cr = function () {
    this.o = NaN;
    if (!(this.ha() || this.D.O && this.j && "quic" == this.j.getResponseHeader("client-protocol"))) {
        var a = y(), b = !1;
        if (8192 <= this.timing.k) {
            var c = this.timing.D;
            A_(this.timing);
            this.timing.D - c >= .8 * this.D.k ? (this.F++, b = 5 <= this.F) : this.F = 0
        } else
            b = this.timing, b = 5E3 < a - (b.o + 1E3 * b.F.delay);
        if (b) {
            b = this.timing;
            a = a > b.o && 4E12 > a ? a : y();
            b.B += (a - b.C) / 1E3;
            var c = b.j, d = b.K, e = b.B, d = Math.max(d, 8192);
            c.A.k(1, e / d);
            RF(c);
            MF(b.j, a - b.o, b.k);
            IF(b.j.j, b.G).hs += 1;
            C_(this);
            this.C = "net.timeout";
            z_(this, 6)
        } else
            this.o =
                L(x(this.Cr, this), this.D.k)
    }
};
f.ha = function () {
    return -1 == this.state
};
f.dispose = function () {
    tG(this.info.j[0]) && 5 != this.state && (this.info.j[0].j.o = !1);
    z_(this, -1);
    this.H = this.B = null;
    C_(this);
    M(this.o);
    this.o = NaN
};
function C_(a) {
    if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort()
    }
    a = a.timing;
    a.A && (a.A = !1)
}

function D_(a, b, c) {
    this.j = a;
    this.K = b;
    this.P = c;
    this.k = this.C = this.o = NaN;
    this.I = this.H = this.A = !1;
    this.B = 0;
    this.D = this.M = NaN
}
function B_(a, b, c) {
    if (a.A) {
        var d = (b - a.C) / 1E3, e = c - a.k;
        0 < e && (.2 < d || 1024 > e ? (a.B += d, .2 < d && KF(a.j, .05, e)) : KF(a.j, d, e), a.I = !0)
    } else
        8192 <= c && (d = a.j, d.B.k(1, (b - a.o) / 1E3), RF(d), a.A = !0);
    a.C = b;
    a.k = c
}
function A_(a) {
    var b = a.K - a.k, b = 1E3 * (b * a.F.tailDelay + b / a.F.byterate), c = y(), b = 8192 <= a.k ? b + c : b + Math.max(c, a.o + 1E3 * a.F.delay);
    a.D = b
}
