<? $tplName = basename(__FILE__, '.php') ?>
<? include __DIR__ . '/inc/head.php' ?>

<aside>
  <header>
    <span id="menu"><s-icon>arrow-left</s-icon></span>
  </header>
  <nav>
    <?= $this->nav ?>
  </nav>
  <footer>
  </footer>
</aside>

<main>
  <header>
    <span id="menu"><s-icon>menu</s-icon></span>
  </header>
  <article>
    <?= $this->body ?>
  </article>
  <footer>
  </footer>
</main>

<? include __DIR__ . '/inc/foot.php' ?>
