defElem(
  class extends ShadowElem {
    connectedCallback() {
      this.onclick = this.close
    }

    open(anchor, html) {
      this.qSel('p').innerHTML = mx(html)

      let r = anchor.getBoundingClientRect()

      let left = r.left + r.width / 2 + window.scrollX
      //let top = r.top + window.scrollY - 44 -> PB posun souradnic presunut do CSS
      let top = r.top + window.scrollY 
      this.setPos(left, top)

      this.setAttr('active')

      this.keepOpen = true
      setTimeout(() => {
        this.keepOpen = false
      }, 678)
    }

    close() {
      this.remAttr('active')
    }

    mayBeClose() {
      this.keepOpen || this.close()
    }
  },
)
