(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Slider=e():t.Slider=e()})(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);n.n(r);e.default={props:{loop:{type:Boolean,default:!1},selected:{type:Number,default:0},showArrows:{type:Boolean,default:!0},showNav:{type:Boolean,default:!0}},data:function(){return{dragStart:0,dragStartTime:new Date,transition:!1,index:this.$props.selected||0,lastIndex:this.$props.selected||0,mouseDown:!1}},methods:{goToSlide:function(t,e){var n=this.$slots.default,r=this.$props.loop;e&&(e.preventDefault(),e.stopPropagation()),t<0?t=r?n.length-1:0:t>=n.length&&(t=r?0:n.length-1),this.index=t,this.lastIndex=t,this.transition=!0},getDragX:function(t,e){return e?t.touches[0].pageX:t.pageX},handleDragStart:function(t,e){var n=this.getDragX(t,e);this.dragStart=n,this.dragStartTime=new Date,this.transition=!1,this.slideWidth=this.$refs.slider.offsetWidth,this.mouseDown=!0},handleDragMove:function(t,e){var n=this.dragStart,r=this.lastIndex,o=this.slideWidth,i=this.getDragX(t,e),s=n-i,a=s/o,l=r+a;Math.abs(s)>30&&t.stopPropagation(),this.index=l},handleDragEnd:function(){var t=this.$slots.default,e=this.dragStartTime,n=this.index,r=this.lastIndex,o=(new Date).getTime()-e.getTime(),i=r-n,s=Math.round(i/o*1e4),a=Math.round(n);Math.abs(s)>5&&(a=s<0?r+1:r-1),a<0?a=0:a>=t.length&&(a=t.length-1),this.dragStart=0,this.index=a,this.lastIndex=a,this.transition=!0,this.mouseDown=!1},renderArrows:function(t){var e=this,n=this.$slots.default,r=this.$props,o=r.loop,i=r.showNav,s=this.lastIndex,a=i?"Slider-arrows":"Slider-arrows Slider-arrows--noNav",l=t("button",{class:"Slider-arrow Slider-arrow--left",on:{click:function(t){return e.goToSlide(s-1,t)}}}),d=t("button",{class:"Slider-arrow Slider-arrow--right",on:{click:function(t){return e.goToSlide(s+1,t)}}});return t("div",{class:a},[o||s>0?l:null,o||s<n.length-1?d:null])},renderNav:function(t){var e=this,n=this.$slots.default,r=this.lastIndex,o=n.map(function(n,o){return t("button",{class:o===r?"Slider-navButton Slider-navButton--active":"Slider-navButton",key:o,on:{click:function(t){return e.goToSlide(o,t)}}},[])});return t("div",{class:"Slider-nav"},[o])}},render:function(t){var e=this,n=this.$slots.default,r=this.$props,o=r.showArrows,i=r.showNav,s=this.index,a=this.transition,l=this.mouseDown,d={width:100*n.length+"%",transform:"translateX("+-1*s*(100/n.length)+"%)"},u=a?"Slider-slides Slider-slides--transition":"Slider-slides";return t("div",{class:"Slider",ref:"slider"},[o?this.renderArrows(t):null,i?this.renderNav(t):null,t("div",{class:"Slider-inner",on:{touchstart:function(t){return e.handleDragStart(t,!0)},touchmove:function(t){return e.handleDragMove(t,!0)},touchend:function(){return e.handleDragEnd()},mousedown:function(t){return e.handleDragStart(t,!1)},mousemove:function(t){return l?e.handleDragMove(t,!1):null},mouseup:function(t){return e.handleDragEnd()},mouseout:function(t){return e.handleDragEnd()}}},[t("div",{class:u,style:d},[n])])])}}},function(t,e){},function(t,e,n){t.exports=n(0)}])});
//# sourceMappingURL=Slider.js.map