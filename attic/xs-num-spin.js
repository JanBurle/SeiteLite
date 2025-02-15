defElem(
  class extends ShadowElem {
    constructor() {
      super()

      let num = this.slotInt()
      let digits = [...num.toString()]
      let n = digits.length

      let div = this.qSel('div')
      this.ds = []
      this.spans = []

      let wheel = ' 1234567890'.split('').join('<br>')

      digits.forEach((d, i) => {
        d = 0 != d ? d : 10
        let span = addEl(div, 'span')
        span.classList.toggle('space', !((n - i) % 3))
        span.innerHTML = wheel
        this.ds.push(d)
        this.spans.push(span)
      })

      // animate
      this.onView(() => this.animate())
    }

    animate() {
      this.spans.forEach((span, i) => {
        // 1.1 = line-height
        span.style.marginTop = -this.ds[i] * 1.1 + 'em'
      })
    }
  },
)
