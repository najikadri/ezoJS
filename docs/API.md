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
* monza
* flamingo
* waxFlower
* cabaret
* dodgerBlue
* pictonBlue
* malibu
* gossip
* shamrock
* capeHoney

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
* relative
* bottom
* top
* no_repeat

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
####onLoad (func)
set a function that is called when a page is ran or appended by default.

example:
```javascript
eManager.onLoad(function () {
  alert("page successfully loaded!");
})
eManager.add(homePage,"index");
eManager.append("index");
```
Once the `"index"` page is loaded , the function onLoad will be called and it will alert the user

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

*Note: If an arguments is not satisfied with a parameter, ezoJS will not return undefined since it uses arguments like Java. **(check code below)** *
```javascript
this.header = function (num,id,cl) {
		if (arguments[2] != undefined) {
			
			return '<h'+num+' id='+id+' class='+cl+'></h'+num+'>';
		}
		else if (arguments[1] != undefined) {
			
			return '<h'+num+' id='+id+'></h'+num+'>';
		}
		else {
			
			return '<h'+num+'>'+'</h'+num+'>'
		}
	};
```

####defText()
return a default header with a text `"Hello World!"`
####heading(num,id,cl)
return a header with an id and class and the number of the header.

example:
```javascript
 var i = eDom.header(1,"title","text");
````
####par(id,cl)
return a header with id and class
####clone(n,id)
clone an existing node and return the node with a new id
####lnBreak()
return a line break
####horRule()
return a horizontal rule
####oList(id)
return an ordered list with an id
####uList(id)
return an unordered list with an id
####link(id,link,txt)
returns a link with an id and a href and a text
####img(id,src,alt)
returns an image with id and src and alt
####toListItems(arr)
convert array into li elements for the lists `<ul> & <ol>`
####addListItems(id,it)
finds list with the  id passed and add list items to it
####div(id,cl)
returns a div wit id and class
####form(id,action,method)
returns a form with id and its action and method
####input(id,type,name,value)
return an input with id and its type, name and value
####footer(id,cl)
add a footer to the document
####pre(id,cl)
returns a preview
####code(id,lng)
returns code with id and its language. Use eSyntax to set the language of the code for syntax highlighting
####button(id,type,cl,name,value)
returns a button with id and its type and class with name and value
####script(src,type,async)
returns a script `<script></script>` with its source , type and boolean if async or defer
####stylesheet(href,rel,type)
returns a link with href and rel and type
####style(data)
returns a style tag with its content
####span(id,cl)
returns a span with its id and class passed

*Note: It is a `<link></link>` thus it can be used for things other than stylesheet. But in ezoJS is named stylesheet since it is commonly used.*
####custom(tag,id,cls)
returns a custom tag for you.

example:
```javascript
var i = eDom.custom('td',"table");
```
returns
```html
<td id="table>"></td>
```
####meta(name,cont)
returns meta with its name and content
####init(n)
initialize a node with ezoJS functioniality

##e$(doc)
functions found are in initDoc variable. This selection provides the functioniality for the document. Since e$("doc") selector uses eDom to create the nodes, the functions below are those who is not found in eDom or different from them

*Note: To add any element in the document just use `e$("doc").addX` where **X** is the name of the element found in eDom.*

example:
```javascript
var i = eDom.header(1,"title"); //returns a header
e$("doc").addHeader(1,"title");
/**uses eDomto create element 
and append it to the body of the document.
Thus functions found in eDom can be found in e$("doc") by adding add
*/
```
####addStyleArray(arr,cl)
adds a style array for  elements with class passed
####setCSS(styelsheet,cl)
adds a style for elemnts with class passed
####cloneNode(n,id)
clones a node with a new id passed and append it to the body
####addSyntax(id,id2,lang)
creates a full functioning syntax highlighting in a pre code elements.
`e$("doc").addSyntax("code","timer",eSyntax.java)`

`<pre id="code"><code id="timer" class="java"></code>
</pre>`
####insert(n) 
insert a node. It is used most by eDom if the programmer didn't want to use pre-made functions.
####insertAll(n)
insert nodes through array
####bodyCSS(stylesheet)
set the document's body CSS
####bodyCSSArray(arr)
set the document's body CSS by array
####init()
initialize all elements in the document for example:
```html
<!DOCTYPE html>
<html>
  <head lang="en">
     <title> ezoJS Demo </title>
     <script src="ezo.min.js"></script>
     <script src="script.js"></script>
  </head>
  <body>
    <div id="empty"></div>
  </body>
 </html>
```
This div is not created by ezoJS thus it does not have ezoJS functions. when we call `e$("doc").init()` it initialize the div with ezoJS functioniality thus being usable for  development.
####setTitle(title)
set title of the document
####destroy()
destroy the website **(close tab)**
####clear()
set the body of the document with zero elements

## e$(dom)
also known as `e$(node)`. This selects a node from the body by its id and adds ezoJS functions. Some function replace CSS styling for fast manipulation.
####setText(string)
set text of the node
####appendText(string)
append text of the node
####setSize(width,height)
set height and width of the node
####setBGColor(color)
change the color of the background of the node
####setFontSize(size)
set font size of the text in node
####alignText(align)
set alignment of the text in the node
####getNodeName()
returns the tag of the node
####addStyleArray(arr)
set style of the node by array
####setCSS(stylesheet)
set style of the node
####addClass(cl)
add a class for the node
####removeClass(cl)
remove class from the node
####setID(id)
change or set id of the node
####setAction(function)
set an action when the node is clicked
####insert(n)
insert a node inside the node **(child node)**
####insertAll (n)
insert nodes isnide node through array
####getChild(num)
select child node with number passed
####insertAt(index,n)
insert a child node at the index
####insertAll(n)
insert all nodes array to the node
####setLink(link)
set link of the node
####setName(name)
set name attribute of the node
####setValue(val)
set value attribute of the node
####destory()
remove the node from the body
####move(id)
move the node from its place and place it inside another node of the id passed
####moveOut()
move the node outside the parent node after it

##parseCSS(val)
function used to parse keys of an object to be compatible for CSS styling




























































