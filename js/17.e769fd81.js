(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{2713:function(t,s,e){"use strict";e("7816")},7816:function(t,s,e){},9777:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"400px"}},[e("q-card",{staticClass:"mycard",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"text-h5 text-center"},[t._v("Please ratify")]),e("div",{staticClass:"text-subtitle2 text-center"},[t._v("Ratification iteration   "+t._s(t.iteration))]),e("div",{staticClass:"text-subtitle2 bg-grey-4 text-center"},[t._v("Closes in: "+t._s(t.secondsToDHms(this.displaytimer)))])]),e("q-card-section",[e("q-separator",{staticClass:"grey6",attrs:{inset:""}}),e("q-expansion-item",{attrs:{"expand-separator":"",icon:"perm_identity",label:"FAQ's"}},[e("q-card",[e("q-card-section",[t._v("\n            "+t._s(t.lorem)+"\n          ")])],1)],1),e("q-separator",{staticClass:"grey6",attrs:{inset:""}})],1)],1),e("q-card",{staticClass:"mycard",attrs:{flat:"",bordered:""}},[e("q-card-section",{staticClass:"bg-grey-6 tx-white"},[e("div",{staticClass:"text-h6 text-white text-center"},[t._v("Start ratifying this weeks vote")])]),e("q-card-section",[e("div",{staticClass:"text-body2 text-black text-left"},[t._v("Issuance")]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col text-body1"},[t._v("\n          "+t._s(t.issuance)+"\n        ")]),e("div",{staticClass:"col"}),e("div",{staticClass:"col text-right"},[e("q-icon",{staticClass:"text-black",attrs:{name:"arrow_downward"}}),e("q-badge",{attrs:{color:"grey-6"}},[t._v("\n            "+t._s(t.issuatrend)+"\n          ")])],1)]),e("br"),e("q-separator",{staticClass:"grey6"})],1),e("q-card-section",[e("div",{staticClass:"text-body2 text-black text-left"},[t._v("Mint Fees")]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col text-body1"},[t._v("\n          "+t._s(t.mintfees)+"%\n        ")]),e("div",{staticClass:"col"}),e("div",{staticClass:"col text-right"},[e("q-icon",{staticClass:"text-black",attrs:{name:"arrow_upward"}}),e("q-badge",{attrs:{color:"grey-6"}},[t._v("\n            "+t._s(t.minttrend)+"%\n          ")])],1)]),e("br"),e("q-separator",{staticClass:"grey6"})],1),e("q-card-section",[e("div",{staticClass:"text-body2 text-black text-left"},[t._v("Locking threshold")]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col text-body1"},[t._v("\n          "+t._s(t.lockfees)+"%\n        ")]),e("div",{staticClass:"col"}),e("div",{staticClass:"col text-right"},[e("q-icon",{staticClass:"text-black",attrs:{name:"arrow_right_alt"}}),e("q-badge",{attrs:{color:"grey-6"}},[t._v("\n            "+t._s(t.locktrend)+"%\n          ")])],1)]),e("br"),e("q-separator",{staticClass:"grey6"})],1),e("q-card-section",[e("div",{staticClass:"text-body2 text-black text-left"},[t._v("Pool or Burn")]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col text-body1"},[t._v("\n          "+t._s(t.poolburn)+"\n        ")]),e("div",{staticClass:"col"}),e("div",{staticClass:"col text-right"},[t._v(" Last Week:\n          "),e("q-badge",{attrs:{color:"grey-6"}},[t._v("\n            "+t._s(t.pooltrend)+"\n          ")])],1)]),e("br"),e("q-separator",{staticClass:"grey6"})],1),e("q-card-section",[e("div",{staticClass:"text-body2 text-black text-left"},[t._v("Reserve Pool % to be released")]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col text-body1"},[t._v("\n          "+t._s(t.reserve)+"%\n        ")]),e("div",{staticClass:"col"}),e("div",{staticClass:"col text-right"},[e("q-icon",{staticClass:"text-black",attrs:{name:"arrow_upward"}}),e("q-badge",{attrs:{color:"grey-6"}},[t._v("\n            "+t._s(t.reservetrend)+"%\n          ")])],1)]),e("br"),e("q-separator",{staticClass:"grey6"})],1),e("q-card-section",[e("div",{staticClass:"text-body2 text-black text-left"},[t._v("Allocation to partners")]),e("br"),t._v("\n      "+t._s(t.P1)),e("br"),t._v("\n      "+t._s(t.P2)),e("br"),t._v("\n      "+t._s(t.P3)),e("br"),e("br"),e("q-separator",{staticClass:"grey6"})],1),e("q-card-section",[e("div",{staticClass:"text-h5 text-center"},[t._v("Accept this vote?")]),e("div",{staticClass:"q-pa-md text-center"},[e("div",[t._v(" The ratification vote is to ensure whatever ipsum sophghia lokjren ala ma kokota whatever again?")]),e("br"),e("div",{staticClass:"q-gutter-sm"},[e("q-btn",{staticClass:"btn-fixed-width width=45%",attrs:{size:"30px",align:"left","no-caps":"",color:"grey-6",label:"Yes"},on:{click:function(s){return t.submit(!0)}}}),e("q-btn",{staticClass:"btn-fixed-width width=45%",attrs:{size:"30px",align:"right",color:"grey-6",label:"No"},on:{click:function(s){return t.submit(!1)}}})],1)])])],1)],1)},i=[],r=e("ded3"),o=e.n(r),n=e("3939"),c=e("2f62"),l={name:"Vote",data(){return{displaytimer:0,issuance:"12,235,167",issuatrend:"-0.2%",mintfees:"7.33",minttrend:"0.63",lockfees:"21.25",locktrend:"0.00",poolburn:"Pooled",pooltrend:"Burn",reserve:"31.25",reservetrend:"0.52",P1:"ABC",P2:"DEF",P3:"FGH",version:"",iteration:0,submitData:{currentAccountName:"",answer:!1},expiration_timer:"2 days 10 hours 30 min",lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},computed:o()({},Object(c["e"])({accountName:t=>t.account.accountName,inittime:t=>t.svr.initUTC,scan_interval:t=>t.svr.scan_interval,ratifyend:t=>t.svr.ratifyend,ratifystart:t=>t.svr.ratifystart,iterationSize:t=>t.svr.iterationSize})),methods:o()(o()({},Object(c["b"])("svr",["addRatifyResult"])),{},{submit(t){const s=this;t?Object(n["a"])("success","You have ratified the presented information."):Object(n["a"])("warning","You not ratified the presented information."),console.log("### Ratify results:",s.accountName,t),this.submitData.answer=t,this.submitData.currentAccountName=s.accountName,console.log("@Ratify submitData=",s.currentAccountName," submitData=",this.submitData),this.addRatifyResult(this.submitData),this.$router.push("/congs")},secondsToDHms(t){t=Number(t);const s=Math.floor(t/86400),e=Math.floor(t%86400/3600),a=Math.floor(t%3600/60),i=s>0?s+(1===e?" day, ":" days, "):"",r=e>0?e+(1===e?" hour, ":" hours, "):"",o=a>0?a+(1===a?" minute, ":" minutes, "):"";return i+r+o},localtimer(){let t=!1;const s=Math.floor((new Date).getTime()/1e3),e=(s-this.inittime)%this.iterationSize;return t=this.ratifystart<=e&&e<=this.ratifyend,console.log("isRatifyActive (?) = ",t),console.log("currentoffset (?) = ",e),this.displaytimer=this.ratifyend-e,t},ver(){this.version="v0.0.1"}}),created(){this.setIntervalId=setInterval((()=>{this.localtimer()||(clearInterval(this.setIntervalId),this.$router.push("/congs"))}),this.scan_interval),document.addEventListener("beforeunload",this.handler)},beforeDestroy(){clearInterval(this.setIntervalId)}},d=l,v=(e("2713"),e("2877")),u=e("f09f"),b=e("a370"),m=e("eb85"),h=e("3b73"),x=e("0016"),C=e("58a81"),f=e("9c40"),_=e("eebe"),y=e.n(_),g=Object(v["a"])(d,a,i,!1,null,"71c3a53f",null);s["default"]=g.exports;y()(g,"components",{QCard:u["a"],QCardSection:b["a"],QSeparator:m["a"],QExpansionItem:h["a"],QIcon:x["a"],QBadge:C["a"],QBtn:f["a"]})}}]);