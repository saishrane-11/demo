class strongValidation{constructor(s){this.form=jQuery(s).find("form"),this.formID=this.form.data("formid"),this.defaults={ajaxUrl:"",display:{successMessage:!1},scroll:{onError:!0,onErrorOffset:100,onSuccess:!0,onSuccessOffset:100},fields:{}},this.settings={},this.rules={},this.init()}setOpts(s){this.settings=jQuery.extend({},this.defaults,s)}setRules(){for(var s=0;s<this.settings.fields.length;s++)"rating"===this.settings.fields[s].type&&1===this.settings.fields[s].required&&(this.rules[this.settings.fields[s].name]={ratingRequired:!0})}init(){var s={};void 0!==window.strongForm&&(s=this.form.data("config")),this.setOpts(s),this.settings.display.successMessage?this.scrollOnSuccess():(this.setRules(),this.changeEvents(),this.customValidators(),this.validateForm())}changeEvents(){jQuery('input[type="text"], input[type="url"], input[type="email"], textarea',".wpmtst-submission-form").on("change blur",function(s){s.target.value=s.target.value.trim()}),jQuery("input[type=url]").on("change",function(){this.value.length&&!/^https*:\/\//.test(this.value)&&(this.value="https://"+this.value)});for(var s=document.getElementsByClassName("strong-rating"),e=0;e<s.length;e++)s[e].addEventListener("click",this.handleRadioEvent,!0),s[e].addEventListener("keyup",this.handleRadioEvent,!0),s[e].addEventListener("change",function(){jQuery(this).valid()},!0)}disableForm(){jQuery('.strong-form-wait[data-formid="'+this.formID+'"]').show(),this.form.find(".wpmtst_submit_testimonial").prop("disabled",!0)}enableForm(){jQuery('.strong-form-wait[data-formid="'+this.formID+'"]').hide(),this.form.find(".wpmtst_submit_testimonial").prop("disabled",!1)}handleRadioEvent(s){if(s.keyCode>=48&&s.keyCode<=53){var e=s.keyCode-48;jQuery(this).find('input[type="radio"][value='+e+"]").trigger("click")}}customValidators(){jQuery.validator.addMethod("ratingRequired",function(s,e){return jQuery(e).find("input:checked").val()>0},jQuery.validator.messages.required)}validateForm(){var s=this;this.form.validate({onfocusout:!1,focusInvalid:!1,invalidHandler:function(e,t){if(t.numberOfInvalids())if(s.settings.scroll.onError){if(void 0!==t.errorList[0]){var i=jQuery(t.errorList[0].element),r=i.closest(".form-field").offset().top-s.settings.scroll.onErrorOffset;jQuery("html, body").animate({scrollTop:r},800,function(){i.focus()})}}else t.errorList[0].element.focus()},submitHandler:function(){if(s.disableForm(),""!==s.settings.ajaxUrl){window.onbeforeunload=function(){return"Please wait while the form is submitted."};var e={url:s.settings.ajaxUrl,data:{action:"wpmtst_form2"},success:function(e){s.showResponse(e)}};s.form.ajaxSubmit(e)}else s.form.get(0).submit()},rules:this.rules,errorPlacement:function(s,e){s.appendTo(e.closest("div.form-field"))},highlight:function(s,e,t){"checkbox"===s.type?jQuery(s).closest(".field-wrap").addClass(e).removeClass(t):"rating"===jQuery(s).data("fieldType")?jQuery(s).closest(".field-wrap").addClass(e).removeClass(t):jQuery(s).addClass(e).removeClass(t)},unhighlight:function(s,e,t){"checkbox"===s.type?jQuery(s).closest(".field-wrap").removeClass(e).addClass(t):"rating"===jQuery(s).data("fieldType")?jQuery(s).closest(".field-wrap").removeClass(e).addClass(t):jQuery(s).removeClass(e).addClass(t)}})}showResponse(s){window.onbeforeunload=null,this.enableForm();var e=JSON.parse(s);if(e.success)this.form.parent().html(e.message),this.scrollOnSuccess();else for(var t in e.errors)e.errors.hasOwnProperty(t)&&this.form.children(".field-"+t).find("span.error").remove().end().append('<span class="error">'+e.errors[t]+"</span>")}scrollOnSuccess(){var s,e;this.settings.scroll.onSuccess&&((s=jQuery(".wpmtst-form-id-"+this.formID).find(".wpmtst-testimonial-success").offset())&&(e=s.top-this.settings.scroll.onSuccessOffset,jQuery("#wpadminbar").length&&(e-=32),jQuery("html, body").animate({scrollTop:e},800)))}}