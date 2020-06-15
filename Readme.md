# localStorage In Javascript

localStorage is a type of web storage that allows JavaScript sites to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window has been closed.

## Installation

By simply cloning this repository.

## To use localstorage, there are five methods :
```javascript 
setItem(): Add key and value to localStorage
getItem(): Get value using key
removeItem(): Remove item passing key as an argument
clear(): Clears the whole localstorage
key(): Passed a number to retrieve nth key of a localStorage
```

## Usage

```javascript
//Adds a data item
localStorage.setItem('myCat', 'Tom');

//Retrieve a data item
var cat = localStorage.getItem('myCat');

//Remove a data item
localStorage.removeItem('myCat');

//Clears whole localStorage
localStorage.clear();


```



## License
[MIT](https://choosealicense.com/licenses/mit/)