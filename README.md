ngKeyboard
=========

Onscreen keyboard for textbox when native keyboard cannot be used on mobile devices - An AngularJS Directive

When you attach a secondary input device such as a barcode reader to your tablet or mobile device, the native keyboard gets disabled. If a barcode does not get scanned, it becomes a pain to detach it, type in with native keyboard and reattach it.

With ngKeyboard, a virtual onscreen keyboard appears as a replacement for the native keyboard

Markup
-------
ngKeyboard is an AngularJS directive which is extremely simple to use.
```
    <div keyboard></div>
```

That's it! You will get a textbox with a keyboard icon. Click on it to reveal the keyboard.

You can also attach a callback function that will get executed when the 'return' button is pressed, equivalent to barcode scan getting completed
```
    <div keyboard callback="myFunction()"></div>
```
    
Dependencies
---
Font Awesome for the icons - Should eventually not load entire file I guess



I have tested it on a bunch of mobile devices. If you are interested to improve the code - JS or CSS, please help out
