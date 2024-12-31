// ikona: např. <x-icon>wifi</x-icon>
defElem(
  class extends ShadowElem {
    constructor() {
      super()
      let name = this.textContent
      this.fetchIcon(this.qSel('svg'), name)
    }
  },
)
