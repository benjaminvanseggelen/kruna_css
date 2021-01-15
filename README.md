# Kruna.css

A minimal CSS library, mostly for personal use.
Currently, only a grid-system is included.
This will grow however, when I find I need certain functionalities.

Normalize.css is used as a base, available on its own [here](https://github.com/necolas/normalize.css). This normalizes styles between browsers, while still retaining useful defaults.

Suggestions are welcome. Do note that this is not supposed to be a 'component' library like Bootstrap, or a full-blown 'utility' library like Tailwind CSS.

## Base

Kruna.css currently sets only one default: the font stack. Currently this is:

> Segoe UI, Tahoma, Geneva, Verdana, sans-serif

However, this is likely to change.

## Grid System

The grid system is similar to what is commonly seen in frameworks such as Bootstrap. However, Kruna.css uses the CSS grid instead of Flexbox. Keep this in mind for compatibility reasons.

Read about its usage [here](https://github.com/benjaminvanseggelen/kruna_css/wiki/Grid-System) in the wiki.

---

## Installation for Usage

Do not use something like `jsdelivr` to import this. This repo might be subject to massive changes. Instead, download the [kruna.css](https://github.com/benjaminvanseggelen/kruna_css/blob/master/dist/kruna.css) and (optionally) the [kruna.css.map](https://github.com/benjaminvanseggelen/kruna_css/blob/master/dist/kruna.css.map) files. Place these together in one directory, and import `kruna.css`.

## Installation for Development

To run:

> git clone https://github.com/benjaminvanseggelen/kruna_css

> npm run build

If there are any dependencies missing, run:

> npm install

Gulp is used to build Kruna.css, you might have to install this globally:

> npm install --global gulp-cli

If these instructions do not work for you, please let me know :)
