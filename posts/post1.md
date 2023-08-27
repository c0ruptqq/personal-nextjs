---
title: 'Using vim, markdown and mhchem for chemistry notes'
date: '2023-08-27'
---

Transcribing old notes by hand is both time consuming and hard to look back on. The messier the notes, the more likely I will never look at them again. The obvious solution is use something like Microsoft Word or Google Docs, however when talking about chemistry where writing elements and equations is a core part of notes those tools become more of a hassle than actually usefull.

That is why I used [mhchem](https://mhchem.github.io/MathJax-mhchem/) a LaTeX extension which includes all the necessary chemistry notation through simple notation.
To include a chemical expression in a document the snippet
>#### \ce{}
is used.

An example for water:
>#### \ce{H2O}
>#### $\ce{H2O}$

Further examples can be found in the official [mhchem documentation](https://mhchem.github.io/MathJax-mhchem/), LaTeX and mhchem can be used in any text editor as in the core it is a simple text file. I personally prefer neovim, an extension of vim,  because of its and multitude of shortcuts and many plugins. For my note taking I specifically use the shortcuts: [markdown-preview](https://github.com/iamcco/markdown-preview.nvim), [LuaSnip](https://github.com/L3MON4D3/LuaSnip) paired with custom vim snippets and [tree-sitter](https://github.com/tree-sitter/tree-sitter) . My full vim config is written out in [this post](nvim).

### Using mhchem effeciently

To speed up the process of writing out chemical equations I use multiple snippets:
> ` z -> $[$1]$`

> `zz -> $$[$1]$$`

> `ce -> \ce{$1}`

The '$1' symbolises where the input ends up after the snippet is complete.

Along with snippets my config utilises tree-sitter to provide autocomplete of words using the text in the document.  
