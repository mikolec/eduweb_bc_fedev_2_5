function Toggler(selector) {
    
    if(!(this instanceof Toggler)) {
        return new Toggler(selector);
    }
    
    this._elem = document.querySelector(selector);
}

Toggler.prototype.getElem = function() {
    return this._elem;
} 

Toggler.prototype.hide = function() {
    this._elem.style.display = "none";
}

Toggler.prototype.show = function() {
    this._elem.style.display = "block";
}


/********** oryginalny kod **********/

var elem = new Toggler("#section");
var button = document.querySelector("#button");

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);

/********** oryginalny kod **********/

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        this.textContent = "Pokaż";
    } else {
        this.textContent = "Ukryj";
    }

}, false);