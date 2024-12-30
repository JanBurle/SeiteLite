<? $tplName = basename(__FILE__, '.php') ?>
<? include __DIR__ . '/tpl-head.inc' ?>

<aside>
  <header>
    <span id="menu">⬅️</span>
  </header>
  <nav>
  </nav>
  <footer>
  </footer>
</aside>

<main>
  <header>
    <span id="menu">☰</span>
  </header>
  <article>
    <?= $this->body ?>
  </article>
  <footer>
  </footer>
</main>


<? include __DIR__ . '/tpl-foot.inc' ?>
