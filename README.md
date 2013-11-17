#README 
----------------
1. description and demo
2. requirement
3. example
4. contact
5. license

#descrption
very simple jQuery plugin for fixing elements on top\with padding wile scrolling the page.
* Demo 1: http://git.rzrbld.ru/fixDivOnScroll/demo/demo1.html 
* Demo 2: http://git.rzrbld.ru/fixDivOnScroll/demo/demo2.html

#requirements
jQuery

#example:
```html
<html>
    <!-- ... -->
    <head>
        <!-- ... -->
        <script src="js/jquery-1.10.2.min.js"></script>
        <script src="js/jquery.fix-div-on-scroll-0.0.3.js"></script>
        <script>
            $(function(){
                $('.title').fixDivOnScroll({
                        topPadding: 0, //in pixels, if you using fixed-to-top nav-bar or somthing like that
                        anchorPrefix: 'anchor__', //default id prefix for anchor id
                        defaultScrollerPrefix: 'scroller__index__', //default pattern for div id, only if div doesn't have an id
                        zIndexInitial: 110, //initial z-index, by default set 100
                        fixWidth: true, //if width of element is broke, try set to false
                        customClass: false, //class for fixed element
                        role: 'simple', //simple - by default or 'menu' - for menue-like 
                    });
            });
        </script>
        <!-- ... -->
    </head>
    <body>
        <!-- ... -->
        <div id="container">
            <div id="title">general title here</div>
            <div id="text">
                <div class="title">simple title</div>
                <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a 
                    <!-- ... -->
                </p>
                <div class="title">other simple title</div>
                <p>
                    Drops of rain could be heard hitting the pane, which made him feel quite sad. "How about if I sleep a little bit longer and forget all this nonsense
                </p>
                <!-- .... -->
            </div>
        </div>
    </body>
</html>
```
Supported methods:
<pre>
    init:
        $('.title').fixDivOnScroll({ /* options here */ });

    destroy:
        just remove plugin magic.
        $('.title').fixDivOnScroll('destroy');

    reload:
        simple call destroy and then init, need if number of titles dunamicly changes
        $('.title').fixDivOnScroll('reload',{ /* options here */ })
</pre>

#contact
razblade@gmail.com

#license
The MIT License (MIT)

Copyright (c) 2012,2013

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


