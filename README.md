# Tags
Custom field for entering tags in the form.

## How to use
Add tags.min.css file in your document's head
````html
<link rel="stylesheet" href="tags.min.css">
````
Add tags.min.js file in your page at the bottom of the body
````html
<script src="tags.min.js"></script>
````
Plugin initialization
````javascript
var tags = new Tags('#tagged'); // <input id="tagged">
````
## API Methods
Available public methods after initialization
* `.getTags()` return a list of all tags in the field
* `.addTags('string' || [array] )` You can add a single tag or array tag
* `.clearTags()` clear the field tags
* `.destroy()` destroy, if necessary

## Example
````javascript
var tags = new Tags('#tagged');
tags.addTags(['one', 'two', 'three']);
tags.getTags(); // return one,two,three
````
