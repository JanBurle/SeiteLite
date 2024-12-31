// shortcut
let arrFrom = (...as) => Array.from(...as)

let matchMedia = () => {
  // breakpoints
  let mobile = '650px'
  let tablet = '1023px'

  // queries
  let mobileMatch = window.matchMedia(`(max-width: ${mobile})`)
  let tabletMatch = window.matchMedia(`(max-width: ${tablet})`)

  // class names
  let clsMobile = 'MOBILE'
  let clsTablet = 'TABLET'

  // body class
  let set = (cls, val) => {
    doc.body.classList.toggle(cls, val)
  }

  // initial match
  set(clsMobile, mobileMatch.matches)
  set(clsTablet, tabletMatch.matches)

  // width changes
  mobileMatch.addEventListener('change', (e) => set(clsMobile, e.matches))
  tabletMatch.addEventListener('change', (e) => set(clsTablet, e.matches))
}

docDo(matchMedia)

// base classes for custom html elements
let _Elem = class extends HTMLElement {
  constructor() {
    super()
    this.cmnAttr()
  }

  // toggle class
  tglCls(cls, on = null) {
    this.classList.toggle(cls, on)
  }

  // get attribute value
  attr(attr, def = '') {
    return this.getAttribute(attr) ?? def
  }

  // get attribute value as num
  numAttr(attr, def = 0) {
    let num = parseFloat(this.attr(attr))
    return isNaN(num) ? def : num
  }

  // get attribute value as int
  intAttr(attr, def = 0) {
    let int = parseInt(this.attr(attr))
    return isNaN(int) ? def : int
  }

  // get attribute value as object
  objAttr(attr, def = null) {
    try {
      return JSON.parse(this.attr(attr))
    } catch (err) {
      return def
    }
  }

  // test attribute presence
  hasAttr(attr) {
    return this.hasAttribute(attr)
  }

  // set attribute value
  setAttr(attr, val = '') {
    this.setAttribute(attr, val)
  }

  // remove attribute
  remAttr(attr, val) {
    this.removeAttribute(attr)
  }

  // toggle attribute
  tglAttr(attr, on = null) {
    if (null === on) on = !this.hasAttr(attr)
    if (on) this.setAttr(attr)
    else this.remAttr(attr)
  }

  // selector
  qSel(sel) {
    return this.root.querySelector(sel)
  }

  // selector - slot
  slotSel(sel) {
    return this.querySelector(sel)
  }

  // selector
  qSelAll(sel) {
    return this.root.querySelectorAll(sel)
  }

  static _iconCache = {}

  // fetch icon and set it as innerHTML
  _iconFromCache(svgEl, icon) {
    let html = _Elem._iconCache[icon]
    if (html) svgEl.replaceWith(elFromHTML(html))

    return !!html
  }

  fetchIcon(svgEl, icon) {
    if (!icon) return
    this._iconFromCache(svgEl, icon) ||
      fetch(SLU + `icon/${icon}.svg`)
        .then((res) => res.text())
        .then((html) => {
          _Elem._iconCache[icon] = html
            .replace('<svg', `<svg class='icon' fill='currentColor'`)
            .replace('</svg>', `<title></title></svg>`)
          this._iconFromCache(svgEl, icon)
        })
  }

  // create root element
  addRootEl(elTag) {
    return addEl(this.root, elTag)
  }

  slotNodes() {
    return this.qSel('slot').assignedNodes()
  }

  slotTag(tag) {
    tag = tag.toUpperCase()
    let nodes = this.slotNodes()
    return nodes.filter((node) => tag == node.nodeName)
  }

  slotText(tag = '', def = '') {
    return (tag ? this.slotTag(tag) : this.slotNodes())[0]?.textContent || def
  }

  slotTextMX(tag = '', def = '') {
    return mx(this.slotText(tag, def))
  }

  slotNum(tag = '', def = 0) {
    let num = parseFloat(this.slotText(tag))
    return isNaN(num) ? def : num
  }

  slotInt(tag = '', def = 0) {
    let int = parseInt(this.slotText(tag))
    return isNaN(int) ? def : int
  }

  slotObj(tag = '', def = null) {
    try {
      return JSON.parse(this.slotText(tag))
    } catch (err) {
      return def
    }
  }

  // tag or element
  _el(elTag) {
    return 'string' == typeof elTag ? this.qSel(elTag) : elTag
  }

  _slotEl(elTag) {
    return 'string' == typeof elTag ? this.slotSel(elTag) : elTag
  }

  move(toElTag, el) {
    this._el(toElTag).appendChild(this._slotEl(el))
  }

  set(elTag, html) {
    this._el(elTag).innerHTML = html
  }

  // shortcuts
  pName(def = '') {
    return this.slotTextMX('p-name', def)
  }

  pText(def = '') {
    return this.slotTextMX('p-text', def)
  }

  pText1(def = '') {
    return this.slotTextMX('p-text1', def)
  }

  pText2(def = '') {
    return this.slotTextMX('p-text2', def)
  }

  pImg(def = '') {
    return this.slotText('p-img', def).split('~')[0]
  }

  pImgAlt(def = 'Image') {
    let parts = this.slotText('p-img', def).split('~')
    return parts.length > 1 ? parts[1] : def
  }

  pDetail() {
    return this.slotTag('p-detail')[0]
  }

  pDetail1() {
    return this.slotTag('p-detail1')[0]
  }

  pDetail2() {
    return this.slotTag('p-detail2')[0]
  }

  setPos(left, top) {
    this.style.left = left + 'px'
    this.style.top = top + 'px'
  }

  // make visible as much as possible
  intoViewport(left, top) {
    let vw = window.innerWidth || document.documentElement.clientWidth
    let vh = window.innerHeight || document.documentElement.clientHeight

    let r = this.getBoundingClientRect()

    // into range
    let realLeft = limit(left, 0, vw - r.width)
    let realTop = limit(top, 0, vh - r.height)

    this.setPos(realLeft, realTop)

    // shifted by:
    return [realLeft - left, realTop - top]
  }

  // common attributes
  cmnAttr() {
    let attr
    if ((attr = this.attr('min-height'))) this.style.minHeight = attr
    if ((attr = this.attr('max-height'))) this.style.maxHeight = attr
    if ((attr = this.attr('go')))
      this.onclick = (e) => go(attr, e.ctrlKey || this.hasAttr('blank'))
  }

  // fire when client width changes
  onWidth(cb) {
    new ResizeObserver((els) => {
      let {clientWidth} = els[0].target
      cb(clientWidth)
    }).observe(this)
  }

  // fire when element comes into view, only once
  onView(cb) {
    new IntersectionObserver((els, observer) => {
      if (0 < els[0].intersectionRatio) {
        observer.disconnect()
        cb()
      }
    }).observe(this)
  }

  // monitor number of columns of the parent k-* tag
  onKN(cb) {
    new ResizeObserver(() => {
      let n = parseInt(getCssVar(this, '--kn'))
      if (0 < n) cb(n)
    }).observe(this.parentElement)
  }
}

// common shadow DOM style
let shadowStyle = new CSSStyleSheet()

for (let sheet of doc.styleSheets) {
  // find the sheet
  if ('shadowElem' == sheet.title) {
    // transfer rules
    for (let rule of sheet.cssRules) shadowStyle.insertRule(rule.cssText)
    // remove the sheet - no, leave it there
    // let owner = sheet.ownerNode
    // owner.parentNode.removeChild(owner)
  }
}

// shadow DOM element
let ShadowElem = class extends _Elem {
  constructor() {
    super()
    // create shadow DOM
    this.root = this.attachShadow({mode: 'open'})
    // clone template
    let tplId = this.constructor.tag
    let tpl = selId(tplId).content
    this.root.appendChild(tpl.cloneNode(true))
    // style
    this.root.adoptedStyleSheets = [shadowStyle]
  }
}

// light DOM element
let LightElem = class extends _Elem {
  constructor() {
    super()
    // light DOM root
    this.root = this
    // use template
    let tplId = this.constructor.tag
    // a template is optional for light DOM elements
    let tpl = selId(tplId)?.content
    tpl && document.body.appendChild(tpl)
  }
}

// define custom element
let defElem = (tag, /** @type {CustomElementConstructor} */ cls) => {
  cls.tag = tag
  customElements.define(tag, cls)
}
