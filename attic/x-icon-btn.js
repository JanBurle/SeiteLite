/*
A styled round button.

Style attributes:
  clear: transparent
  blue: color
  qlt: quarter, left-top
  small: size
  icon: the icon to display
*/
defElem(
  class extends ShadowElem {
    constructor() {
      super()
      let name = this.textContent
      this.fetchIcon(this.qSel('svg'), name)
    }
  },
)
