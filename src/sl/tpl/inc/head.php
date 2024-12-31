<!DOCTYPE html>
<html lang="<?= $this->lang ?>">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title><?= $this->title ?></title>
  <link rel="icon" type="image/svg+xml" href="<?= $this->logo ?>" />

  <meta name="description" content="<?= $this->description ?>" />
  <meta name="robots" content="<?= $this->robots ?>" />

  <link rel="stylesheet" href="<?= $this->css ?>" />
  <link rel="stylesheet" href="<?= $this->theme ?>" />

  <script>
    let doc = document
    let docDo = (fn) => doc.addEventListener('DOMContentLoaded', fn)

    let sel = (id) => doc.body.querySelector(id)
    let selAll = (id) => doc.body.querySelectorAll(id)
    let selId = (id) => sel('#' + id)

    let addEl = (parent, elTag) => {
      let el = 'string' == typeof elTag ? doc.createElement(elTag) : elTag
      parent.appendChild(el)
      return el
    }

    let elFromHTML = (html) => {
      let div = doc.createElement('div')
      div.innerHTML = html
      return div.firstChild
    }

    let SLU = '<?= SLU ?>'
  </script>

  <script src="<?= $this->headjs . bust() ?>"></script>

  <?
  $basePath = __DIR__ . '/../' . $tplName;
  incFile($basePath . '.css', 'style');
  incFile($basePath . '.js', 'script');
  ?>
</head>
