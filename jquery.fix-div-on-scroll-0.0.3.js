/*
* scrolltotop.js v0.0.3 by @rzrbld 
*
* Authors:
* rzrbld (Aleksandr Petruhin)
* Released under the MIT license
* 
* 
* The MIT License (MIT)
* Copyright (c) 2012,2013

*  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

*  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function( $ ){
	var methods = {
		init : function( options ) { 
		    var defaults = {
		        topPadding: 0, 
		        anchorPrefix: 'anchor__', 
		        defaultScrollerPrefix: 'scroller__index__', 
		        zIndexInitial: 100,
		        fixWidth: false,
		        customClass: false,
		        role: 'simple', 
		    };

		    var settings = $.extend( {}, defaults, options );

		    var allScrollersId = new Array();

			$(this).each(function( index ) {

				var scrollerId=$( this ).attr('id');

				if(scrollerId===undefined || scrollerId == null || scrollerId==''){
					var scrollerId=settings.defaultScrollerPrefix+''+index;
					$( this ).attr({'id':scrollerId});
				}

				allScrollersId[index]=scrollerId;

				$( this ).before('<div id="'+settings.anchorPrefix+''+scrollerId+'" ></div>');


				var widthScroller = $(this).outerWidth();

				if(settings.fixWidth){
					var widthScroller = $(this).width();
				}
				$( '#'+settings.anchorPrefix+''+scrollerId).css({'width':widthScroller});
				switch(settings.role){
					case 'menu':
						$( this ).css({'z-index':settings.zIndexInitial+index+5});
					break;
					default:
						$( this ).css({'width':widthScroller,'z-index':settings.zIndexInitial+index+5});
					break;
				}
			});

			var scrollerCounter=allScrollersId.length;

			var scrollerWindowEvent = function(){
				for (var i = 0; i < scrollerCounter; i++) {
					var currentScrollerId = allScrollersId[i];

					var currentAnchorId= settings.anchorPrefix+''+currentScrollerId;

					var anchorCurrentPosition = $( '#'+currentAnchorId).offset().top-settings.topPadding;

					var scrollerHeight = $('#'+currentScrollerId).outerHeight(true);

					var scrollerPosition = $('#'+currentScrollerId).css('position');

					var windowScroll = $(window).scrollTop();
					if ( windowScroll >= anchorCurrentPosition &&  scrollerPosition != 'fixed' ){
						if(settings.role=='menu'){
				        	menuElementMarginLeft=0;
							for (var g = 0; g < i; g++){
								menuElementMarginLeft=menuElementMarginLeft+$('#'+allScrollersId[i-g-1]).outerWidth();
							};
							$('#'+currentScrollerId).css({'margin-left': menuElementMarginLeft+'px'});
						}

				 		$('#'+currentScrollerId).css({
				            'position': 'fixed',
				            'top': settings.topPadding+'px'
				        });

				        if(settings.customClass){
				        	$('#'+currentScrollerId).addClass(settings.customClass)
				        }
				        
						$( '#'+currentAnchorId).css({'height': scrollerHeight+'px'});
					}
					else if ( windowScroll < anchorCurrentPosition && scrollerPosition != 'relative' ) 
					{  
						if(settings.role=='menu'){
							$('#'+currentScrollerId).css({'margin-left': '0px'});
						}

						$('#'+currentScrollerId).css({
						    'position': 'relative',
						    'top':'0px'
						});
						
						if(settings.customClass){
				        	$('#'+currentScrollerId).removeClass(settings.customClass)
				        }
						$( '#'+currentAnchorId ).css('height', '0px');
				    }
				};
			}

			$(window).scroll(scrollerWindowEvent); 
		},
		reload : function() {
			methods.destroy.apply( this );
		    methods.init.apply(  this, arguments );
		    $(window).scrollTop($(window).scrollTop()+1);
		},
		destroy : function (){
			$( this ).each(function( index ){
				$( this ).css({
					'position': 'relative',
					'top':'0px'
				});
				$( this ).prev().remove();
			});

			$(window).off("scroll");
		}
	};

	$.fn.fixDivOnScroll = function( method ) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist for jQuery.fixDivOnScroll plugin. Supported methods: init, destroy, reload' );
		} 
  	};

	})( jQuery );