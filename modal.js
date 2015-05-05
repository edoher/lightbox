/**
 * Lightbox/modal Plugin
 */

(function($){

	// Defining our jQuery plugin init
	$.fn.lightbox = function(p){

		// default options
		var options = $.extend({
			modalWindow : '.modal',
			modalClass : 'lightbox_window',
			customStyle : {},
			width: false,
			height: false,
			center : false
		}, p);
		
		//add class and button to modal
		var init = function(){
			create();
		}
		
		init();
		
		//Open modal
		return this.click(function(e){
            e.preventDefault();
            blocking();
		});
		
		//creates a new lightbox window with functionality
		 function create(){
             //add close button to new modal (if doesn't exist)
            if(!$(options.modalWindow + ' .close_lt').length){
				 var lt = "<a href='#' class='close_lt'>x</a>";
				 $(options.modalWindow).append(lt).addClass(options.modalClass).css(options.customStyle);
			 } 
			 //should i set width?
			 if(options.width) $(options.modalWindow).css('width', options.width);
			 //should i set height?
			 if(options.height) $(options.modalWindow).css('height', options.height);
			 //will i center?
			 if(options.center) center();
		}
		
		//center modal. Usually you'll use this if you set the width and height of the modal via parameters, or if you didn't use the CSS file to set position
		 function center(){
            $(options.modalWindow).css({
				'position' : 'fixed',
				'left' : '50%',
				'top' : '50%',
				'marginTop' : -1 * parseInt( ( $( options.modalWindow ).outerHeight() / 2 )),
				'marginLeft' : -1 * parseInt( ( $( options.modalWindow ).outerWidth() / 2 ))
			}); 
		}

		 //block window
        function blocking(){
			//create modal window
			create();
            //save scroll position
            var sc = $(document).scrollTop();
            //add blocker to DOM (if doesn't exist)
            if(!$('.blocker').length){
				$('body').append('<div class="blocker"></div>');
			}
			//if it has been hidden, show it
			$('.blocker').removeAttr('style');
			//block ui
            $('html,body').addClass('modal').scrollTop(sc);
            
            //show modal
            $(options.modalWindow).fadeIn('fast');
            
            //listeners
            events();
        }
        
        function destroy(){
            //delete previous modal and blocker
            $('html,body').removeClass('modal');
            $(options.modalWindow + ', .blocker').hide();
        }
        
        //init event listeners
        function events(){
            //events to close modal
            $('body').on( "click", 'a.close_lt, .blocker', function(e){
                e.preventDefault();
                $(options.modalWindow).fadeOut('fast', function(e){
                    destroy();
                });
            });           
        }

		return this;
	};
	
})(jQuery);
