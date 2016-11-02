# Tags
Custom field for entering tags in the form.

##How to use
Add tags.min.css file in your document's head
````html
<link rel="stylesheet" href="tags.min.css">
````
Add tags.min.js file in your page at the bottom of the body
````html
<link rel="stylesheet" href="tags.min.js">
````
Plugin initialization
````javascript
var tags = new Tags('#tagged'); // <input id="tagged">
````
##Methods
Available methods after initialization
* `tags.getTags()` return a list of all tags in the field
* `tags.addTags('string' || [array] )` You can add a single tag or array tag
* `tags.clearTags()` clear the field tags
* `tags.destroy()` destroy, if necessary

##Example
````javascript
var tags = new Tags('#tagged');
tags.addTags(['one', 'two', 'three']);
tags.getTags(); // return one,two,three
````
