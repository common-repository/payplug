(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,n=window.wc.wcBlocksRegistry,a=window.wp.htmlEntities,l=(0,window.wc.wcSettings.getSetting)("apple_pay_data",{}),p=(0,t.__)("Pay With Apple Pay","woo-gutenberg-products-block"),o=(0,a.decodeEntities)(l.title)||p,c=()=>{let t=l.local;return(0,e.createElement)("div",{id:"apple-pay-button-wrapper"},(0,e.createElement)("apple-pay-button",{buttonstyle:"black",type:"pay",locale:t}))},r={name:"apple_pay",label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n}=t.components;return(0,e.createElement)(n,{text:o})}),null),content:(0,e.createElement)(c,null),edit:(0,e.createElement)(c,null),canMakePayment:()=>!0,ariaLabel:o,supports:{features:l.supports}};(0,n.registerPaymentMethod)(r)})();