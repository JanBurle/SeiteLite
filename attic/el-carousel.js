defElem(
  class extends LightElem {
    connectedCallback() {
      let imgs = this.querySelectorAll('img')

      let dots = this.addRootEl('span')
      dots.id = 'dots'
      imgs.forEach(() => addEl(dots, 'i'))

      dots = dots.querySelectorAll('i')

      let i = 0,
        li = 0,
        tid = 0

      let seti = () => {
        imgs[li].classList.remove('active')

        /*menim text dle aktualniho banneru*/
        let textDiv = this.querySelector('#text');
        textDiv.innerHTML = imgs[i].getAttribute('data-html');

        dots[li].classList.remove('active')
        imgs[i].classList.add('active')
        dots[i].classList.add('active')
        li = i
        clearTimeout(tid)
        tid = setTimeout(nexti, 6789)
      }

      let nexti = () => {
        i = (i + 1) % imgs.length
        seti()
      }

      dots.forEach((dot, ii) => {
        dot.onclick = () => {
          i = ii
          seti()
        }
      })

      seti()
    }
  },
)
