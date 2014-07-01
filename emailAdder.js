/************** Email Adder ****************
 *                                         *
 * Plugin JQuery qui permettant la gestion *
 *           d'une liste d'envoi           *
 *                                         *
 *         Auteur : DUMONT Kevin           *
 *              License MIT                *
 *******************************************/
(function($){
	$.fn.emailAdder = function(){
		$(this).addClass="emailAdder";
		defaultValues = $(this).attr('data-default');
		$(this).after('<div class="emailAdderContainer"></div><style type="text/css">.emailAdder {font-family:Helvetica, Arial;color:#333;text-shadow: 0 1px 0 #fff;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;display: inline-block;font-size: 13px;border: 1px solid #E0E0E0;background-color: #F0F0F0;padding: 2px 5px 2px 5px; margin: 5px;}.crossEmailAdder {cursor:pointer;margin-left:8px;}</style>');

		if(defaultValues){
			defaultValues = defaultValues.split(",");
			for(var b in defaultValues){
				var c=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(c.test(trim(defaultValues[b]))){
					email=trim(defaultValues[b]);
					$(this).attr('value','');
					$(this).next().append('<div class="emailAdder">'+email+'<span class="crossEmailAdder">&times;</span>'+'<input type="hidden" name="'+$(this).attr('name')+'[]" value="'+email+'" /></div>')
				}
			}
		}

		$(this).bind('keyup paste',function(b){
			if(b.type=='paste'){
				value = b.originalEvent.clipboardData.getData('Text');
				var a=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(a.test(value)){
					if($(this).next().find("input[value=\""+value+"\"]").length==0){
						$(this).attr('value','');
						email = value;
						$(this).next().append('<div class="emailAdder">'+email+'<span class="crossEmailAdder">&times;</span>'+'<input type="hidden" name="'+$(this).attr('name')+'[]" value="'+email+'" /></div>')
					}
					return false
				}
			}else{
				value = $(this).val();
				var a=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))[ \-\,\._]{1}$/;
				if(a.test(value)){
					email = value.substr(0,value.length-1);
					$(this).attr('value','');
					if($(this).next().find("input[type=hidden][value=\""+email+"\"]").length==0)
					{
						$(this).next().append('<div class="emailAdder">'+email+'<span class="crossEmailAdder">&times;</span>'+'<input type="hidden" name="'+$(this).attr('name')+'[]" value="'+email+'" /></div>')
					}
				}
			}
		});

		$('.emailAdder .crossEmailAdder').live('click',function(){
			$(this).parent().remove()
		});

		function trim(a){
			return a.replace(/^\s+/g,'').replace(/\s+$/g,'')
		}
		return this
	}

	$.fn.emailAdderData = function(){
		tab = [];
		$(this).next().find(".emailAdder input[type=hidden]").each(function() {
			tab.push($(this).val());
		});
		return tab;
	}
})(jQuery);