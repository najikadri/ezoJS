#Build
This document will show you step by step how to use ezoJS and build a ezoJS website.
##Index HTML
This is how a default html template must look like for ezoJS to work.
```html
<!DOCTYPE html>
<html>
  <head lang="en">
    <title> ezoJS Demo </title>
    <script src="script.js"></script>
    <script src="ezo.min.js"></script>
   </head>
  <body>
  </body>
 </html>
```
## CSS Syntax
In ezoJS the syntax for css is as same as the css syntax except that you must use _ **(underscore)** instead of - **(dash)**

**One CSS**
```javascript
//styleSheet
 var title = {
    background_color: "red",
    width: "100%",
    height: "70px"
 };
```
*Note: You will learn more about ezoJS CSS API in the API section*

**Multi CSS**
```javascript
//styleSheet
var styles = {
    title : {
       text_align:"center",
       color: "blue"
    },
    body : {
    margin: 0,
    padding: 0,
    border: 0
    }
}
```

There is a second way to make CSS styles using a **2D array**:
```javascript
var style = [["background-color","blue"],["text-align","center"]];
```
## Pages
In ezoJS pages are actually a function. eManager (learn more from API section) adds the pages with their name and runs them whenever needed.
```javascript
//pages
var mainPage = function () {
  e$("doc").setTitle("ezoJS | Home"); //set documents title
  e$("doc").addHeader(1,"title"); //add header to the body
  e$("title").setTitle("ezoJS Demo"); //set text for the header
  e$("title").setCSS(styles.title); //set CSS for the header
};
```
## Run
To Run The Website by eManager we will use jQuery for this.
```javascript
$(document).ready(function () {
  eManager.add(mainPage,"home"); //add page to website manager
  eManager.append("home"); //run page
});
```
Use eManager.append(page) when you run the fist page or when you need to merge two pages **(appending)**. Use eManager.run(page) when you run any page or when a link/element is clicked.




