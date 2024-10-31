(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,n=window.wc.wcBlocksRegistry,l=window.wp.htmlEntities,a=window.wc.wcSettings,r=({settings:t,name:n,props:l})=>{const a=t?.translations;var r=parseFloat(t?.oney_response[n].down_payment_amount),s=r;t?.oney_response[n].installments.forEach((e=>{s+=parseFloat(e.amount)}));let c=void 0!==a["3rd_monthly_payment"];return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"payplug-oney-flex"},(0,e.createElement)("div",null,a.bring," :"),(0,e.createElement)("div",null,r," ",l.billing.currency.symbol)),(0,e.createElement)("div",{className:"payplug-oney-flex"},(0,e.createElement)("small",null,"( ",a.oney_financing_cost,(0,e.createElement)("b",null,t?.oney_response[n].total_cost," ",l.billing.currency.symbol)," TAEG : ",(0,e.createElement)("b",null,t?.oney_response[n].effective_annual_percentage_rate," %")," )")),(0,e.createElement)("div",{className:"payplug-oney-flex"},(0,e.createElement)("div",null,a["1st_monthly_payment"],":"),(0,e.createElement)("div",null,t?.oney_response[n].installments[0].amount," ",l.billing.currency.symbol)),(0,e.createElement)("div",{className:"payplug-oney-flex"},(0,e.createElement)("div",null,a["2nd_monthly_payment"],":"),(0,e.createElement)("div",null,t?.oney_response[n].installments[1].amount," ",l.billing.currency.symbol)),c?(0,e.createElement)("div",{className:"payplug-oney-flex"},(0,e.createElement)("div",null,a["3rd_monthly_payment"],":"),(0,e.createElement)("div",null,t?.oney_response[n].installments[2].amount," ",l.billing.currency.symbol)):(0,e.createElement)(e.Fragment,null),(0,e.createElement)("div",{className:"payplug-oney-flex"},(0,e.createElement)("div",null,(0,e.createElement)("b",null,a.oney_total)),(0,e.createElement)("div",null,(0,e.createElement)("b",null,s.toFixed(2)," ",l.billing.currency.symbol)))))},s=(0,a.getSetting)("oney_x3_with_fees_data",{}),c=(0,t.__)("Gateway method title","payplug"),m=(0,l.decodeEntities)(s?.title)||c,i=t=>(0,e.createElement)(r,{settings:s,name:"x3_with_fees",props:t}),o=()=>(0,e.createElement)("img",{src:s?.icon.src,alt:s?.icon.alt,className:s.icon.class,style:{float:"right"}});let u={name:"oney_x3_with_fees",label:(0,e.createElement)((()=>(0,e.createElement)("span",{style:{width:"100%"}},m,(0,e.createElement)(o,null))),null),content:(0,e.createElement)(i,null),edit:(0,e.createElement)(i,null),canMakePayment:e=>!(e.cart.cartItemsCount>s?.requirements.max_quantity||e.cartTotals.total_price>s?.requirements.max_threshold||e.cartTotals.total_price<s?.requirements.min_threshold||-1===s?.requirements.allowed_country_codes.indexOf(e.shippingAddress.country)),ariaLabel:m,supports:{features:s.supports}};(0,n.registerPaymentMethod)(u)})();