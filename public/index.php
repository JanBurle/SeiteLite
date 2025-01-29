<?
// config
$conf = [
  'dev'   => true,    // development mode
  'pages' => 'pages/' // pages directory
];

// route
$route = [
  'book'    => 'book',
  'test'    => [
    'els'   => 'test/els',
    'icons' => 'test/icons',
  ],
];

require __DIR__ . '/sl/main.php';
