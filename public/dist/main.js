var doc = document;
var win = window;
var SLG;
SLG.go = (loc, newTab = false) => {
    if (newTab)
        win.open(loc, '_blank');
    else {
        let [path, id] = loc.split('#');
        if (location.pathname == path) {
            let q = doc.qId(id);
            q
                ? q.scrollIntoView({
                    behavior: 'smooth',
                })
                : win.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
        }
        else {
            location.assign(loc);
        }
    }
};
var cl = (...args) => {
    if (SLG.isDev)
        console.log(...args);
    return args[0];
};
;
(() => {
    let p = Object.prototype;
    p.isStr = function () {
        return this instanceof String;
    };
    p.isFun = function () {
        return this instanceof Function;
    };
    p.asArr = function () {
        return Array.isArray(this) ? this : [this];
    };
    p.toArr = function () {
        return Array.from(this);
    };
})();
;
(() => {
    let p = Number.prototype;
    p.isInt = function () {
        return Number.isInteger(this.valueOf());
    };
    p.clamp = function (min, max) {
        return Math.max(min, Math.min(this, max));
    };
    p.genArr = function (f) {
        return Array.from({ length: this }, (_, i) => f(i, this));
    };
    p.loop = function (f) {
        for (let i = 0; i < this; i++)
            f(i, this);
    };
})();
;
(() => {
    let p = String.prototype;
    p.toNum = function (def = 0) {
        let int = parseFloat(this);
        return isNaN(int) ? def : int;
    };
    p.toInt = function (def = 0) {
        let int = parseInt(this);
        return (isNaN(int) ? def : int);
    };
    p.toObj = function (def) {
        try {
            return JSON.parse(this);
        }
        catch (err) {
            return def;
        }
    };
    p.toEl = function () {
        let div = doc.createElement('div');
        div.innerHTML = this;
        return div.firstChild;
    };
})();
;
(() => {
    let p = Set.prototype;
    p.dif = function (that) {
        return new Set([...this].filter((x) => !that.has(x)));
    };
    p.uni = function (that) {
        return new Set([...this, ...that]);
    };
})();
;
(() => {
    let p = Node.prototype;
    p.apd = function (elTag) {
        let el = elTag.isStr() ? doc.createElement(elTag) : elTag;
        return this.appendChild(el);
    };
})();
;
(() => {
    let p = Element.prototype;
    p.cls = function () {
        return this.classList.toArr();
    };
    p.cla = function (cs) {
        for (let c of cs.asArr())
            this.classList.add(c);
        return this;
    };
    p.tgl = function (cls, on) {
        this.classList.toggle(cls, on);
        return this;
    };
    p.clk = function (f) {
        this.addEventListener('click', f);
        return this;
    };
})();
;
(() => {
    let p = Document.prototype;
    p.whenDone = (fn) => doc.addEventListener('DOMContentLoaded', fn);
    p.qSel = (sel) => doc.body.querySelector(sel);
    p.qAll = (sel) => doc.body.querySelectorAll(sel);
    p.qId = (id) => p.qSel('#' + id);
})();
doc.whenDone(() => {
    let mobile = '650px';
    let tablet = '1023px';
    let mobileMatch = win.matchMedia(`(max-width: ${mobile})`);
    let tabletMatch = win.matchMedia(`(max-width: ${tablet})`);
    let clsMobile = 'MBL';
    let clsTablet = 'TBL';
    let set = (cls, val) => doc.body.tgl(cls, val);
    set(clsMobile, mobileMatch.matches);
    set(clsTablet, tabletMatch.matches);
    mobileMatch.addEventListener('change', (e) => set(clsMobile, e.matches));
    tabletMatch.addEventListener('change', (e) => set(clsTablet, e.matches));
});
class ReVar {
    _val;
    constructor(val) {
        this._val = val;
    }
    get val() {
        return this._val;
    }
    set val(val) {
        if (this._val != val)
            this._val = val;
        this.notify();
    }
    _subd = new Set();
    sub(f) {
        this._subd.add(f);
    }
    unsub(f) {
        this._subd.delete(f);
    }
    notify() {
        this._subd.forEach((f) => f.isFun() ? f(this._val) : f.revar());
    }
}
SLG.reVars = {};
class _Elem extends HTMLElement {
    root;
    rv;
    constructor() {
        super();
        this.rv = SLG.reVars[this.attr('$')] || new ReVar(0);
        let attr;
        if ((attr = this.attr('go')))
            this.onclick = (e) => SLG.go(attr, e.ctrlKey || this.hasAttr('blank'));
    }
    connectedCallback() {
        this.rv.sub(this);
        this.init();
        this.revar();
    }
    disconnectedCallback() {
        this.rv.unsub(this);
        this.done();
    }
    init() { }
    done() { }
    revar() { }
    hasAttr(attr) {
        return this.hasAttribute(attr);
    }
    attr(attr, def = '') {
        return this.getAttribute(attr) ?? def;
    }
    attr0() {
        for (let attr of this.attributes)
            if (!attr.value)
                return attr.name;
        return '';
    }
    numAttr(attr, def = 0) {
        return this.attr(attr).toNum(def);
    }
    intAttr(attr, def = 0) {
        return this.attr(attr).toInt(def);
    }
    objAttr(attr, def = null) {
        return this.attr(attr).toObj(def);
    }
    setAttr(attr, val = '') {
        this.setAttribute(attr, val);
    }
    remAttr(attr) {
        this.removeAttribute(attr);
    }
    tglAttr(attr, on) {
        if (undefined === on)
            on = !this.hasAttr(attr);
        on ? this.setAttr(attr) : this.remAttr(attr);
    }
    qSel(sel) {
        return this.root.querySelector(sel);
    }
    qAll(sel) {
        return this.root.querySelectorAll(sel);
    }
    qId(id) {
        return this.qSel('#' + id);
    }
    slotNodes() {
        return this.qSel('slot').assignedNodes();
    }
    slotTagNodes(tag) {
        let nodes = this.slotNodes();
        tag = tag.toUpperCase();
        return nodes.filter((node) => tag == node.nodeName);
    }
    slotText(tag = '', def = '') {
        return (tag ? this.slotTagNodes(tag) : this.slotNodes())[0]?.textContent || def;
    }
    slotNum(tag = '', def = 0) {
        return this.slotText(tag).toNum(def);
    }
    slotInt(tag = '', def = 0) {
        return this.slotText(tag).toInt(def);
    }
    slotObj(tag = '', def = null) {
        return this.slotText(tag).toObj(def);
    }
    qSlot(sel) {
        return this.querySelector(sel);
    }
    _el(elTag) {
        return elTag.isStr() ? this.qSel(elTag) : elTag;
    }
    _slotEl(elTag) {
        return elTag.isStr() ? this.qSlot(elTag) : elTag;
    }
    apdRoot(elTag) {
        return this.root.apd(elTag);
    }
    move(toElTag, el) {
        this._el(toElTag).appendChild(this._slotEl(el));
    }
    setHtml(elTag, html) {
        this._el(elTag).innerHTML = html;
    }
    setPos(left, top) {
        this.style.left = left + 'px';
        this.style.top = top + 'px';
    }
    onWidth(cb) {
        new ResizeObserver((els) => {
            let { clientWidth } = els[0].target;
            cb(clientWidth);
        }).observe(this);
    }
    onView(cb) {
        new IntersectionObserver((els, observer) => {
            if (0 < els[0].intersectionRatio) {
                observer.disconnect();
                cb();
            }
        }).observe(this);
    }
    static reAttrs = [];
    static get observedAttributes() {
        return this.reAttrs;
    }
    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal != newVal)
            this.reatr(name, newVal);
    }
    reatr(name, val) { }
}
let shadowStyle = new CSSStyleSheet();
for (let sheet of doc.styleSheets) {
    if ('shadow' == sheet.title)
        for (let rule of sheet.cssRules)
            shadowStyle.insertRule(rule.cssText);
}
class ShadowElem extends _Elem {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        let tplId = this.constructor.tag;
        let tpl = doc.qId(tplId).content;
        this.root.appendChild(tpl.cloneNode(true));
        this.root.adoptedStyleSheets = [shadowStyle];
    }
}
class LightElem extends _Elem {
    constructor() {
        super();
        this.root = this;
        let tplId = this.constructor.tag;
        let tpl = doc.qId(tplId)?.content;
        tpl && doc.body.appendChild(tpl);
    }
}
let defElem = (tag, cls) => {
    cls.tag = tag;
    customElements.define(tag, cls);
};
;
(() => {
    let iconCache = {};
    let iconFromCache = (el, icon) => {
        let html = iconCache[icon];
        if (html)
            el.replaceWith(html.toEl().cla(el.cls()));
        return !!html;
    };
    let p = Element.prototype;
    p.fetchIcon = function (icon) {
        if (!icon)
            return;
        iconFromCache(this, icon) ||
            fetch(SLG.SL + `assets/icons/${icon}.svg` + SLG.bust)
                .then((res) => res.text())
                .then((html) => {
                iconCache[icon] = html
                    .replace(' class="', ' class="icon ')
                    .replace('</svg>', `<title></title></svg>`);
                iconFromCache(this, icon);
            });
    };
})();
doc.whenDone(() => doc.body.cla('ready'));
