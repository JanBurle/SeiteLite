# SeiteLite /ˈzaɪtəˌlaɪt/

_**Under construction**_

A framework for building websites with just vanilla PHP, HTML, CSS, and Type/JavaScript.

ASAPPLE 🍎: As simple as possible, practical, lightweight, efficient.

This repository serves as an example. The core part of the framework is in
[SL-core](https://github.com/JanBurle/SL-core). SL-core is a submodule of this repository.

## Directory structure

```plaintext
/
├── build/            # the built *.d.ts files
├── public/           # website root directory
│   ├── index.php     # entry point
│   ├── dist/         # TS -> JS transpiled files
│   ├── pages/        # php page files
│   ├── sl/           # SeiteLite framework (submodule)
│   └── ...           # etc.
├── tools/            # development tools
└── ...               # etc.
```

## Getting started

1. Clone this repository.
2. Run `git submodule init` and `git submodule update`.
3. Start a web server in the `public/` directory.

## Development

### Docker

A development environment is provided in the `docker-compose.yml` and `tools/Dockerfile`
files.

Start the environment with

```bash
docker-compose up -d
```

### TypeScript

Run `pnpm build` to build the JavaScript files in `dist/`. During development, run
`pnpm watch` to build the files continuously, as needed.
