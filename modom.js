// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function() {
    'use strict'
    var one = function(selector) {
        return document.querySelector(selector)
    }//one(): Find one matching element using any CSS selector
    var all = function(selectors) {
        return document.querySelectorAll(selectors)
    }//all(): Find all matching elements using any CSS selector
    var remove = function(selector) {
         return document.querySelector(selector).remove()
    }//remove(): Remove an element
    var addClass = function (selector, className) {
           return document.querySelector(selector).classList.add(className)
   }
    } //addClass(): Add a CSS class to an element
    var removeClass = function(selector, className){
        return document.querySelector(selector).classList.remove(className)
    }//removeClass(): Remove a CSS class from an element
    var hasClass = function(selector, className){
        return document.querySelector(selector).classList.contains(className)
    } //Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
    var getAttr = function(selector, attribute){
        return document.querySelector(selector).getAttribute(attribute)
    }//getAttr(): Get an HTML attribute from an element
    var setAttr = function(selector, name, value){
        return document.querySelecotr(selector).setAttribute(name, value)
    } //setAttr(): Set an HTML attribute on an element
    var setHTML = function(selector, value){
        return document.querySelector(selector).innerHTML = value
    }//setHTML(): Set the innerHTML of an element
    var getHTML = function(selector){
        return document.querySelector(selector).innerHTML
    }//getHTML(): Get the innerHTML of an element

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
    }
}())
// remove, addclass, remove class, has class, get attribute, set attribute, set html, get html
