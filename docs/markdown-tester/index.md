---
view: home
title: Markdown tester
author: Daeraxa
---

## Markdown tester

Test file to check the types of syntax we support, correctly do not support or should support (see comments on content).
This is not exhaustive and does not check every single potential markdown rule, just checks if basic syntax works.

## Headings

### ATX style

# h1
## h2
### h3
#### h4
##### h5
###### h6

### Setex style

h1
===

h2
---

## Indented code

    this is indented
    code

## Code fence


```js
console.log("test");
```

### Named code block

```js:hello.js
console.log("Hello World!")
```

## Tables

Tables need to have fully surrounding pipes due to a [PR in markdown-it](https://github.com/markdown-it/markdown-it/pull/767) to "reduce ambiguity" which seems to be against CommonMark & GFM specs.

Works:

| A | B | C |
| - | - | - |
| 1 | 2 | 3 |

Does not work:

A | B | C
- | - | -
1 | 2 | 3

Column justification:

| Col A | Col B | Col C |
| :---: | :---: | :---: |
| This is a long string | This is a long string | This is a long string |

## Lists

Two separate lists, first using \- and second using \*  
- Item 1
- Item 2
  - Subitem 1
* Item 1
  * Subitem 1
---
"Normal" numbering with mixed symbols
1) Item 1
2. Item 2
3) Item 3
---
"1." numbering
1. Item 1
1. Item 2
1. Item 3
---
- [ ] Not done
- [x] Done
* [ ] Not done
* [x] Done
  - [ ] Child Not done
  - [x] Child done

## Blockquotes

> Level 1
>> Level 2
>>> Level 3

## Expandables

+++ Click Me!
This Hidden text is open by default.
+++

### Container

::: info
Some text
:::

### Codetabs

```js [g1:JavaScript]
console.log("hello");
```

```py [g1:Python3]
print("hello")
```

## Inlines

\# Backslash \*escape\*

`Inline code`

*Emphasis* **Strong** ***Strong Emphasis*** - \* type

_Emphasis_ __Strong__ ___Strong Emphasis___ - \_ type

_**mixed**_ - \_\*\* mix

*Nested **strong** word*

~~Strikethrough~~

^sup

~sub

[[kbd]]

:smiley:

:fa-flag:

++inserted++

--del--

Footnote[^1]

[^1]: Text

[website link](https://pulsar-edit.dev/)

![picture](https://pulsar-edit.dev/logo-name-navbar-light.svg)

## Breaks

This should be
one line

This should be  
two lines with a br

This should be

two lines with a p
