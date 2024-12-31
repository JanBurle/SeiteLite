// fetch custom web elements

// custom element prefix -> its location
let sluElems = SLU + 'elems/'
let elemGroups = {
  l: sluElems, // light DOM
  s: sluElems, // shadow DOM
}

let prefixes = Object.keys(elemGroups)

let prefix = (tag) => {
  let pos = tag.indexOf('-')
  return pos < 0 ? '' : tag.substr(0, pos)
}

let elemLoc = (elem) => elemGroups[prefix(elem)] + elem

// custom tags
let tagSet = (nodeList) => {
  let allTags = arrFrom(nodeList).map((el) => el.tagName.toLowerCase())
  // custom elements
  let custTags = allTags.filter((tag) => prefixes.includes(prefix(tag)))
  // make a set
  return new Set(custTags)
}

// tag sets
let todo = new Set()
let done = new Set()

let fetchElems = (tags) => {
  let elems = []

  tags.forEach((tag) => elems.push(elemLoc(tag)))

  return fetch(SLU + 'elems/fetch.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(elems),
  })
    .then((res) => res.json())
    .then((json) => {
      let [tpls, clss] = json
      for (let i = 0; i < tags.length; ++i) {
        let tag = tags[i]
        addTpl(tag, tpls[i])
        addCls(tag, clss[i])
      }
    })
}

// add template to document body
let addTpl = (id, html) => {
  let tpl = addEl(doc.body, 'template')
  tpl.id = id
  tpl.innerHTML = html
  // add tags in tpl to todo
  tagSet(tpl.content.querySelectorAll('*')).forEach((tag) => todo.add(tag))
}

// add script to document body
let addCls = (elem, js) => {
  // insert elem name (tag)
  let script = addEl(doc.body, 'script')
  script.type = 'module'
  script.textContent = stripComments(js).replace('defElem(', `defElem('${elem}',`)
}

// strip JS comments
let stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, '')

// loop to get even the ones used in other custom elements
let fetchLoop = () => {
  let tags = [...todo].filter((tag) => !done.has(tag))
  done = new Set([...done, ...todo])
  todo = new Set()

  if (tags.length) {
    fetchElems(tags).then(fetchLoop)
  } else {
    // done, show body
    doc.body.classList.add('ready')
  }
}

todo = tagSet(selAll('*'))
fetchLoop()
