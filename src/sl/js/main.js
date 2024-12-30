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
    document.body.classList.toggle(cls, val)
  }

  // initial match
  set(clsMobile, mobileMatch.matches)
  set(clsTablet, tabletMatch.matches)

  // width changes
  mobileMatch.addEventListener('change', (e) => set(clsMobile, e.matches))
  tabletMatch.addEventListener('change', (e) => set(clsTablet, e.matches))
}

document.addEventListener('DOMContentLoaded', matchMedia)
