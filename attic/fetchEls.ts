/* already fetched elements */
let doneEls: Set<str> = new Set()

let fetchEls = (els: str[]) => {
  /* global SL */
  let slElDir = SL + 'elems/'
  // group/custom elem prefix -> elem location
  let elGrps = {
    l: slElDir, // light DOM
    s: slElDir, // shadow DOM
  }

  let prefix = (tag: str) => tag.split('-')[0] || ''
  let elGrp = (tag: str) => elGrps[prefix(tag)]

  /* filtered by custom tags */
  let elSet = (tags: str[]) => new Set(tags.filter((tag) => elGrp(tag)))
  let todo = elSet(els).dif(doneEls)

  // custom tags
  let tagSet = (nodeList: NodeListOf<Element>) => {
    let allTags = nodeList.toArr().map((el) => el.tagName.toLowerCase())
    // custom elements
    let custTags = allTags.filter((tag) => elGrp(tag))
    // make a set
    return new Set(custTags) as Set<str>
  }

  // add template to document body
  let addTpl = (id: str, html: str) => {
    let tpl = doc.body.apd('template') as HTMLTemplateElement
    tpl.id = id
    tpl.innerHTML = html
    // add tags in tpl to todo
    todo = todo.uni(tagSet(tpl.content.querySelectorAll('*')))
  }

  let stripComments = (s: str) => s.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '')

  // add script to document body
  let addCls = (tag: str, js: str) => {
    // insert elem name (tag)
    let script = doc.body.apd('script') as HTMLScriptElement
    script.type = 'module'
    script.textContent = stripComments(js).replace('defElem(', `defElem('${tag}',`)
  }

  let elemLoc = (tag: str) => elGrp(tag) + tag

  let doFetch = (tagSet: Set<str>) => {
    let tags = [...tagSet]
    if (!tags.length) return Promise.resolve()
    return fetch(SL + 'elems/fetch.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tags.map((tag) => elemLoc(tag))),
    })
      .then((res) => res.json())
      .then((json) => {
        let [tpls, clss] = json
        for (let [i, tag] of tags.entries()) {
          todo.delete(tag)
          doneEls.add(tag)
          addTpl(tag, tpls[i])
          addCls(tag, clss[i])
        }
      })
  }

  // while (todo.size)
  let lastPromise = Promise.resolve()
  while (todo.size) {
    lastPromise = lastPromise.then(() => doFetch(todo))
  }
  return lastPromise
}
