import{r as t,c as i,h as a,g as e}from"./p-01ad4c17.js";import{u as s}from"./p-7b97aed3.js";import{a as n,s as o,c}from"./p-04967691.js";import{c as r}from"./p-e6be3162.js";import{I as l}from"./p-523967dc.js";import{m as d,d as h,a as m,s as p,h as f,b as u,g as b,k as g,i as y,c as w,e as x,f as k,r as v,j,l as I,n as L,o as _,p as D,L as z}from"./p-4a27d53a.js";import"./p-985ef3b4.js";import"./p-ca562010.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-26ace40d.js";import"./p-58421494.js";const C="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:1}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}";const H=class{constructor(a){t(this,a);this.calciteListChange=i(this,"calciteListChange",6);this.calciteListFilter=i(this,"calciteListFilter",6);this.lastSelectedItem=null;this.mutationObserver=r("mutation",d.bind(this));this.setFilterEl=t=>{this.filterEl=t};this.setFilteredItems=t=>{this.filteredItems=t};this.deselectRemovedItems=h.bind(this);this.deselectSiblingItems=m.bind(this);this.selectSiblings=p.bind(this);this.handleFilter=f.bind(this);this.handleFilterEvent=u.bind(this);this.getItemData=b.bind(this);this.keyDownHandler=g.bind(this);this.disabled=false;this.filteredItems=[];this.filteredData=[];this.filterEnabled=false;this.filterPlaceholder=undefined;this.filterText=undefined;this.headingLevel=undefined;this.loading=false;this.multiple=false;this.selectionFollowsFocus=false;this.selectedValues=new Map;this.dataForFilter=[]}connectedCallback(){y.call(this);w.call(this)}disconnectedCallback(){x.call(this)}componentWillLoad(){n(this)}componentDidLoad(){o(this);k.call(this)}componentDidRender(){s(this)}calciteListItemRemoveHandler(t){v.call(this,t)}calciteListItemChangeHandler(t){j.call(this,t)}calciteInternalListItemPropsChangeHandler(t){t.stopPropagation();this.setUpFilter()}calciteInternalListItemValueChangeHandler(t){I.call(this,t);t.stopPropagation()}calciteListFocusOutHandler(t){L.call(this,t)}setUpItems(){_.call(this,"calcite-pick-list-item")}setUpFilter(){if(this.filterEnabled){this.dataForFilter=this.getItemData()}}async getSelectedItems(){return this.selectedValues}async setFocus(t){await c(this);return D.call(this,t)}getIconType(){return this.multiple?l.square:l.circle}render(){return a(z,{onKeyDown:this.keyDownHandler,props:this})}get el(){return e(this)}};H.style=C;export{H as calcite_pick_list};
//# sourceMappingURL=p-9c552089.entry.js.map