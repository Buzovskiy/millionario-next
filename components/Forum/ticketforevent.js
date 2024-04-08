const initTicketForEvent = () => {
   (function () {
      "use strict";

      if (window.tfeEmbed)
         return;

      var
         document = window.document,
         wrappers = {},
         buttons = {},
         popup = {
            wrapper: null,
            overlay: null,
            body: null,
            bodyWidget: null,
            bodyContent: null,
            closePopup: null,
            isOpen: function (b) {
            },
            open: function (b) {
            },
            wait: function (b) {
            },
         },
         buttonNewIds = 0
      ;

      const
         VERSION = "1.01",
         WRAPPER_ID_PREFIX = 'tfe-embed-',
         HASH_PREFIX = 'tfe-embed-',
         HASH_COMMAND_SEPARATOR = '@',
         WRAPPER_SELECTOR = '[id^="' + WRAPPER_ID_PREFIX + '"]',
         BUTTON_CLASS = 'tfe-embed-popup',
         BUTTON_ID_PREFIX = BUTTON_CLASS + '-id',
         POPUP_ID = "tfePopup",
         POPUP_BODY_WIDGET_ID = "tfePopupBodyWidget",
         SHOP_HOST = '[ALIAS].ticketforevent.com',//default
         WIDGET_URI = '/[LANG]/widget/[PRE]?bt=5&template=material&wrapperId=' + POPUP_BODY_WIDGET_ID,
         WIDGET_SCHEME_URI = '/[LANG]/seat/mobile/[PRE]?bt=4&wrapperId=' + POPUP_BODY_WIDGET_ID,
         TEST_STRING = '<span style="font-size: 22px; color: indianRed">It works!</span>',

         LEAD_BUTTON_CLASS = 'tfe-lead-popup',
         LEAD_WIDGET_URI = '/[LANG]/lead/?wrapperId=' + POPUP_BODY_WIDGET_ID
      ;

      // private methods
      var parseQueryString = function (queryString) {
         var params = {};
         if (typeof queryString !== "string")
            return params;

         var paramsArray = queryString.substring(queryString.indexOf('?') + 1).split('&');

         for (let i = 0; i < paramsArray.length; i++) {
            let param = paramsArray[i].split('=', 2);

            if (param.length !== 2)
               continue;

            params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
         }

         return params;
      };

      var shopHost;
      var getShopHost = function () {
         if (shopHost)
            return shopHost;

         //stackoverflow 3548857
         var scripts = document.getElementsByTagName('script'),
            len = scripts.length,
            re = /embreg\.js/,
            src, currentScriptSrc
         ;

         while (len--) {
            src = scripts[len].src;

            if (src && src.match(re)) {
               currentScriptSrc = src;
               break;
            }
         }
         //

         if (!currentScriptSrc)
            return shopHost = SHOP_HOST;

         var aElement = document.createElement('a');
         aElement.href = currentScriptSrc;

         return shopHost = '[ALIAS].' + aElement.hostname.split('.').slice(1).join('.');
      };

      var getWrapper = function (id) {
         var wrapper;

         if (wrappers[id])
            return wrappers[id];
         else if (WRAPPER_ID_PREFIX === id.substring(0, WRAPPER_ID_PREFIX.length)) {

            //if wrapper added after load page
            if (wrapper = document.getElementById(id)) {
               wrappers[id] = wrapper;
               return wrapper;
            }

            //no strict search
            //for(var idFull in wrappers)
            //    if(idFull.indexOf(id)!==-1)
            //        return wrappers[idFull];
         }

         return false;
      };

      var doHashCommand = function (target, command) {
         let wrapper, popup;

         if (target === HASH_PREFIX + 'popup' || !(wrapper = getWrapper(target))) {
            popup = getPopup();
            wrapper = popup.bodyContent;
         }

         if (command === 'test') {
            wrapper.innerHTML = TEST_STRING;
            wrapper.scrollIntoView({behavior: "smooth"});
            if (popup)
               popup.open(true);
            return;
         }

         var params = parseQueryString(command);

         if (params.alias && params.uri) {
            openUrl(popup ? 'popup' : target, params.alias, params.uri);
         }
      };

      var checkHash = function () {
         let hash = window.location.hash ? window.location.hash.substring(1) : false;
         if (!hash || (HASH_PREFIX !== hash.substring(0, HASH_PREFIX.length)))
            return;

         let hashParts = hash.split(HASH_COMMAND_SEPARATOR, 2);

         if (hashParts[0] && hashParts[1])
            doHashCommand(hashParts[0], hashParts[1]);
      };

      var findWrappers = function () {
         var wrapperList = document.querySelectorAll(WRAPPER_SELECTOR);

         for (var i = 0; i < wrapperList.length; i++) {
            wrappers[wrapperList[i].id] = wrapperList[i];
         }
      };

      var getIframeElement = function (wrapper) {
         if (wrapper.lastChild && wrapper.lastChild.tagName === 'IFRAME')
            return wrapper.lastChild;

         wrapper.innerHTML = '';
         var iframe = document.createElement('iframe');
         iframe.setAttribute('frameborder', '0');
         iframe.setAttribute('scrolling', 'no');
         iframe.setAttribute('width', '100%');
         iframe.style.overflow = "hidden";

         wrapper.appendChild(iframe);

         return iframe;
      };

      var getPopup = function () {
         if (popup.wrapper !== null)
            return popup;

         for (let i in popup) {
            if (typeof popup[i] !== 'function')
               popup[i] = document.createElement('span');
         }

         popup.wrapper.id = POPUP_ID;
         popup.overlay.classList.add("tfePopupOverlay");
         popup.body.classList.add("tfePopupBody");
         popup.closePopup.classList.add("tfePopupCloseWrap");
         popup.bodyWidget.classList.add("tfePopupBodyWidget");
         popup.bodyWidget.id = POPUP_BODY_WIDGET_ID;
         popup.bodyContent.classList.add("tfePopupBodyContent");

         popup.open = function (b) {
            if (b)
               popup.wrapper.classList.add("tfePopupShow");
            else
               popup.wrapper.classList.remove("tfePopupShow");
         };
         popup.isOpen = function (b) {
            return popup.wrapper.classList.contains("tfePopupShow");
         };
         popup.wait = function (b) {
            if (b)
               popup.body.classList.add("tfePopupWait");
            else
               popup.body.classList.remove("tfePopupWait");
         };

         popup.closePopup.innerHTML = '<span class="tfePopupClose"></span>';
         popup.closePopup.childNodes[0].onclick = function (e) {
            popup.open(false);
         };
         document.addEventListener('keyup', function (event) {
            if (event.key === "Escape")
               popup.open(false);
         });

         popup.body.appendChild(popup.bodyWidget);
         popup.body.appendChild(popup.bodyContent);
         popup.wrapper.appendChild(popup.closePopup);
         popup.wrapper.appendChild(popup.overlay);
         popup.wrapper.appendChild(popup.body);

         document.body.appendChild(popup.wrapper);

         return popup;
      };

      //stackoverflow 50456089
      var getFrameByEvent = function (event) {
         return [].slice.call(document.getElementsByTagName('iframe')).filter(function (iframe) {
            return iframe.contentWindow === event.source;
         })[0];
      };

      var buttonClick = function (event) {
         event.preventDefault();
         var popup = getPopup();
         popup.wrapper.classList.remove('tfePopupLead');//ref.me

         let
            alias = this.getAttribute('data-alias'),
            lang = this.getAttribute('data-lang'),
            isPre = this.getAttribute('data-pre'),
            isScheme = this.getAttribute('data-scheme'),
            uri = isScheme ? WIDGET_SCHEME_URI : WIDGET_URI,
            url,
            source = this.getAttribute('data-source'),
            promocode = this.getAttribute('data-promocode'),
            affiliateId = this.getAttribute('data-aid'),
            defTickets = this.getAttribute('data-tickets'),
            headerText = this.getAttribute('data-headertext'),
            leadId = this.getAttribute('data-leadId'),
            defTicketsObj,
            queryStringParams = '',
            widgetElement
         ;

         if (!lang || lang.length !== 2)
            lang = 'en';

         if (alias.indexOf('.') !== -1)
            return;

         if (source)
            queryStringParams += '&source=' + source;

         if (promocode)
            queryStringParams += '&promocode=' + promocode;

         if (affiliateId)
            queryStringParams += '&aid=' + affiliateId;

         if (leadId)
            queryStringParams += '&leadId=' + leadId;

         if (typeof JSON === 'object' && defTickets) {
            try {
               defTicketsObj = JSON.parse(defTickets);
               let ticketId, ticketCount;
               for (ticketId in defTicketsObj) {
                  if (ticketCount = parseInt(defTicketsObj[ticketId]))
                     queryStringParams += '&tickets[' + ticketId + ']=' + defTicketsObj[ticketId];
               }
            } catch (e) {
            }
         }

         if (headerText)
            queryStringParams += '&sh=1&ht=' + headerText;

         url = 'https://' + getShopHost().replace('[ALIAS]', alias)
            + uri.replace('[LANG]', lang).replace('[PRE]', isPre ? 'pre/' : '')
            + queryStringParams
         ;

         if (isScheme) {
            widgetElement = document.createElement('iframe');
            widgetElement.setAttribute('frameborder', '0');
            widgetElement.setAttribute('scrolling', 'no');
         } else {
            widgetElement = document.createElement("script");
            widgetElement.async = 0;
         }
         widgetElement.src = url;

         popup.wait(true);
         widgetElement.addEventListener("load", function () {
            popup.wait(false);
         });

         popup.bodyWidget.innerHTML = popup.bodyContent.innerHTML = "";
         popup.bodyWidget.appendChild(widgetElement);

         //console.log(this);

         popup.open(true);
      };

      var leadButtonClick = function (event) {
         event.preventDefault();
         var popup = getPopup();
         popup.wrapper.classList.add('tfePopupLead');

         let
            alias = this.getAttribute('data-alias'),
            lang = this.getAttribute('data-lang'),
            action = this.getAttribute('data-action'),
            phoneOnlyCountries = this.getAttribute('data-phoneOnlyCountries'),
            phonePreferredCountries = this.getAttribute('data-phonePreferredCountries'),
            href = this.getAttribute('data-href') || this.getAttribute('href'),
            uri = LEAD_WIDGET_URI,
            url,
            queryStringParams = '',
            formTitle = this.getAttribute('data-leadFormTitle'),
            formSubtitle = this.getAttribute('data-leadFormSubtitle'),
            formSubmit = this.getAttribute('data-leadFormSubmit'),
            formSuccessTitle = this.getAttribute('data-leadFormSuccessTitle'),
            widgetElement
         ;

         if (!lang || lang.length !== 2)
            lang = 'en';

         if (alias.indexOf('.') !== -1)
            return;

         if (action) {
            queryStringParams += '&action=' + action;
            if (action === 'link')
               queryStringParams += '&url=' + href;
         }
         if (formTitle)
            queryStringParams += '&title=' + formTitle;
         if (formSubtitle)
            queryStringParams += '&subtitle=' + formSubtitle;
         if (formSubmit)
            queryStringParams += '&submit=' + formSubmit;
         if (formSuccessTitle)
            queryStringParams += '&success_title=' + formSuccessTitle;
         if (phoneOnlyCountries)
            queryStringParams += '&phone_only_countries=' + phoneOnlyCountries;
         if (phonePreferredCountries)
            queryStringParams += '&phone_preferred_countries=' + phonePreferredCountries;

         url = 'https://' + getShopHost().replace('[ALIAS]', alias)
            + uri.replace('[LANG]', lang)
            + queryStringParams
         ;

         widgetElement = document.createElement("script");
         widgetElement.async = 0;
         widgetElement.src = url;

         popup.wait(true);
         widgetElement.addEventListener("load", function () {
            popup.wait(false);
         });

         popup.bodyWidget.innerHTML = popup.bodyContent.innerHTML = "";
         popup.bodyWidget.appendChild(widgetElement);

         //console.log(this);

         popup.open(true);

      };

      var messageEventStored = [], messageStored = function (e) {
         messageEventStored.push(e);
      };
      var messageEvent = function (event) {
         if (!event.data || !event.data.action || !(event.origin.indexOf(getShopHost().replace('[ALIAS]', '')) > 0))
            return;

         if (event.data.action === 'openUrl' && event.data.id && event.data.alias && event.data.uri) {
            openUrl(event.data.id, event.data.alias, event.data.uri);
            return true;
         }

         var iframe = getFrameByEvent(event);

         if (iframe && event.data.action === 'resize' && event.data.height) {
            let
               windowTopOffset = window.pageYOffset,
               iframeHeight = parseInt(iframe.style.height),
               bodyRect = document.body.getBoundingClientRect(),
               iframeRect = iframe.getBoundingClientRect(),
               iframeOffsetTop = iframeRect.top - bodyRect.top
            ;

            iframe.style.height = event.data.height + 'px';

            //correct windowTopOffset after resize
            if (windowTopOffset !== window.pageYOffset) {
               window.scrollTo(window.pageXOffset, windowTopOffset);
            }
            //after reducing height if iframe will hide from window
            if (iframeHeight && (iframeHeight > event.data.height) && (iframeOffsetTop + event.data.height) < windowTopOffset) {
               window.scrollTo(window.pageXOffset, windowTopOffset - (iframeHeight - event.data.height));
            }
            //first open
            if (!iframeHeight && event.data.height) {
               iframe.parentNode.scrollIntoView({behavior: "smooth"});
            }

            return true;
         }

         if (iframe && event.data.action === 'billingForm' && event.data.form) {
            let
               html = event.data.form,
               htmlCleaned
            ;
            var script = '';
            htmlCleaned = html.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function () {
               script += arguments[1] + '\n';
               return '';
            }).trim();

            if (script) {
               let scriptElement = document.createElement("script");
               scriptElement.text = script;
               document.head.appendChild(scriptElement).parentNode.removeChild(scriptElement);
            }

            if (event.data.formIncomplete) {

            } else {
               if (htmlCleaned) {
                  let formWrapper = document.createElement('div');
                  formWrapper.innerHTML = htmlCleaned;
                  let form = iframe.parentNode.insertBefore(formWrapper.firstChild, iframe);
                  if (form.tagName === "FORM")
                     form.submit();
               }
            }
         }

         if (event.data.action === 'execute' && typeof event.data.func === 'function') {
            event.data.func();
         }
      };

      var init = function () {
         //ready, go
         window.setTimeout(function () {
            findWrappers();
            findButtons();
            checkHash();
            window.addEventListener("hashchange", checkHash);
            window.removeEventListener("message", messageStored);//if long load page
            //console.log( messageEventStored );
            messageEventStored.forEach(messageEvent);
            window.addEventListener("message", messageEvent);
         });
      };

      // public methods
      var openUrl = function (target, alias, uri, callback) {
         var wrapper, popup;

         if (target === 'popupWithWidget' || target === 'popup' || !(wrapper = getWrapper(target))) {
            popup = getPopup();
            if (!popup.isOpen())
               popup.open(true);

            if (target !== 'popupWithWidget') {
               popup.bodyWidget.innerHTML = '';
            }
            wrapper = popup.bodyContent;
         }

         if (!wrapper)
            return false;

         var
            iframe = getIframeElement(wrapper),
            url = 'https://' + getShopHost().replace('[ALIAS]', alias) + uri
         ;

         iframe.setAttribute('src', url);
//console.log(iframe);
         if (typeof callback === "function")
            iframe.addEventListener("load", callback);

         if (popup) {
            popup.wait(true);
            iframe.addEventListener("load", function () {
               popup.wait(false);
            });
         }

         wrapper.scrollIntoView({behavior: "smooth"});
      };

      var findButtons = function () {
         let buttonList = document.getElementsByClassName(BUTTON_CLASS);

         for (var i = 0; i < buttonList.length; i++) {
            addButton(buttonList[i]);
         }

         buttonList = document.getElementsByClassName(LEAD_BUTTON_CLASS);

         for (i = 0; i < buttonList.length; i++) {
            addButton(buttonList[i], 'lead');
         }

      };

      var addButton = function (element, form) {
         if (!element.getAttribute('data-alias'))
            return;
         if (!element.id)
            element.id = BUTTON_ID_PREFIX + ++buttonNewIds;
         if (buttons[element.id] === undefined) {
            buttons[element.id] = element;
            element.onclick = form === 'lead' ? leadButtonClick : buttonClick;
         }
      };

      //create object tfeEmbed
      var tfeEmbed = {
         version: VERSION,
         wrappers: wrappers,
         findButtons: findButtons,
         addButton: addButton,
         openUrl: openUrl
      };

      //init
      // document.addEventListener( "DOMContentLoaded", tfeEmbed.init );
      // window.addEventListener("load", init);
      // console.log(document.readyState === "complete");
      if (document.readyState === 'complete') {
         init();
      } else {
         window.addEventListener('load', init);
      }
      window.addEventListener("message", messageStored);

      window.tfeEmbed = tfeEmbed;
   }());
}

export {initTicketForEvent};