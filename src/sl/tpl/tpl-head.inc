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
  <script src="<?= $this->js ?>"></script>

  <?
  $basePath = __DIR__ . '/' . $tplName;
  incFile($basePath . '.css', 'style');
  incFile($basePath . '.js', 'script');
  ?>

</head>

<body>
