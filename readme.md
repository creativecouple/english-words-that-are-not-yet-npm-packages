# german-words-that-are-not-yet-npm-packages

A CLI for finding available package names in the npm registry.

Inspired/forked from [english-words-that-are-not-yet-npm-packages](https://github.com/zeke/english-words-that-are-not-yet-npm-packages) by [zeke](https://github.com/zeke/).


## Installation

This is a command line tool, so it should be installed globally:

```sh
yarn global add german-words-that-are-not-yet-npm-packages
```

## Usage

This thing prints all available words to stdout, one word per line:

```sh
german-words-that-are-not-yet-npm-packages | grep käse | tail -n 6
# weißkäse
# weißschimmelkäse
# weißschimmelkäses
# zentralkäserei
# zentralkäsereien
# ziegenkäse

german-words-that-are-not-yet-npm-packages | wc -l
# 1670187
```

For context, you can also install the two datasets depended on by this package:

[all-the-german-words](http://ghub.io/all-the-german-words):

```sh
yarn global 'add all-the-german-words'

woerter | wc -l
# 1648437
```

[all-the-package-names](http://ghub.io/all-the-package-names):

```sh
yarn global add all-the-package-names

all-the-package-names | wc -l
# 416043
```

## Keeping Up to Date

The [all-the-package-names](http://ghub.io/all-the-package-names) module
is updated daily by a bot. To be sure you're getting up-to-date results,
all you have to do is reinstall this package:

```sh
yarn global add german-words-that-are-not-yet-npm-packages
```

## License

MIT
