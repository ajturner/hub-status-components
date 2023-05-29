import{r as t,c as i,h as a,H as n,g as e}from"./p-01ad4c17.js";import{g as o}from"./p-ca562010.js";import"./p-30b0f762.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const r={containerSmall:"container--s",containerMedium:"container--m",containerLarge:"container--l"};const c="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-ui-border-3)}";const l=class{constructor(a){t(this,a);this.calciteInternalDropdownItemChange=i(this,"calciteInternalDropdownItemChange",6);this.groupTitle=undefined;this.selectionMode="single";this.scale=undefined}componentWillLoad(){this.groupPosition=this.getGroupPosition()}render(){const t=this.scale||o(this.el,"scale","m");const i=this.groupTitle?a("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null;const e=this.groupPosition>0?a("div",{class:"dropdown-separator",role:"separator"}):null;return a(n,{"aria-label":this.groupTitle,role:"group"},a("div",{class:{container:true,[r.containerSmall]:t==="s",[r.containerMedium]:t==="m",[r.containerLarge]:t==="l"},title:this.groupTitle},e,i,a("slot",null)))}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup;this.requestedDropdownItem=t.detail.requestedDropdownItem;this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return true}get el(){return e(this)}};l.style=c;export{l as calcite_dropdown_group};
//# sourceMappingURL=p-fa4c2475.entry.js.map