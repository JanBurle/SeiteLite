defElem(
  class extends ShadowElem {
    connectedCallback() {
      let bl = this.qSel('#btnLeft')
      let br = this.qSel('#btnRight')
      let div = this.qSel('div')

      bl.onclick = () => (div.scrollLeft -= 40)
      br.onclick = () => (div.scrollLeft += 40)

      new ResizeObserver((els) => {
        let {clientWidth, scrollWidth} = els[0].target
        let scroll = clientWidth < scrollWidth
        this.classList.toggle('scroll', scroll)
        if (scroll) div.scrollLeft = (scrollWidth - clientWidth) / 2
      }).observe(div)
    }
  },
)
