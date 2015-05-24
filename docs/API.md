#API
Read the whole documentation to fully understand ezoJS application programming interface. The following documentation provides all the methods and classes found in ezoJS

## eColor
eColor is an object with flat design UI colors.
colors listed below.
* turquoise
* emerald
* peterRiver
* amethyst
* wetAsphalt
* greenSea
* nephretis
* belizeHole
* wisteria
* midnightBlue
* sunFlower
* carrot
* alizarin
* clouds
* concrete
* orange
* pumpkin
* silver
* asbestos

##eCon
eCon is an object with constants for CSS. Use it during CSS

example:
```javascript
var line = {
   text_align: eCon.center,
   text_decoration: eCon.none
};
```
* full (100%)
* half (50%)
* quarter (25%)
* smallFont (10px)
* medFont (25px)
* bigFont (35px)
* largeFont (50px)
* center
* left
* right
* none
* block
* inline
* block_inline
* auto

##eSyntax
eSyntax is an object with constant for hljs **(highlight.js)**. HighlightJS is a syntax highliter that highlight anything between `<pre><code class="java"></code></pre>`.

eSyntax provide languages syntax highlight:
* apache
* css
* http
* javascript
* objectiveC
* ruby
* bash
* coffeeScript
* lni
* makeFile
* php
* sql
* cSharp
* diff
* json
* markDown
* perl
* cpp
* html
* xml
* java
* nginx
* python
* scala
* delphi
* fortan
* lisp
* haskell
* init (function)

init() initialize highlighting

## eCSS eNode ePage
use eCSS to store css varibales
use eNode to store node variables
use ePage to store pages **(recommended using eManager)**

To add css and node variables just use `eCss.push()` and `eNode.push()`.
##eManager
eManager is the page manager for ezoJS that runs the website. 
####add(page,name)
Add the page as function and set its name for execution
####run(name)
clear the page **(delete nodes)**
call the page function with the name provided
####append(name)
called for the first page or to merge and append a page with another
####remove(name)
search for a page with the name provided and delete it from the array **(set as null)**
####get(name)
get the page as function rather than calling it

##eData
eData is a data manager that saves nodes, css , and pages locally for later use. 

*Note: this feature is currently in pending stage and maybe removed if not fixed. Only css data saves.*
#### saveCSS()
Saves all css stylesheets in the **eCSS** array
#### loadCSS()
Loads all css styles from local storage to the **eCSS** array

##PX
`px(num)` is a function that returns a string with pixel. Used in CSS. 
example : `px(10)` returns `"10px"`

##eDom
eDom is a DomCreator **(see the source code)** object that creates the node and elements.It is used by ezoJS selector for manipulation.

*Note: If an arguments is not satisfied with a parameter, ezoJS will not return undefined since it uses arguments like Java. **(check source code)** *
####defText()
return a default header with a text `"Hello World!"`
####header(num,id,cl)
return a header with an id and class and the number of the header.

example:
```javascript
 var i = eDom.header(1,"title","text");
````














