import{r as t,c as i,h as a,H as e,g as s}from"./p-01ad4c17.js";import{g as o}from"./p-985ef3b4.js";import{b as n,h as r,t as c}from"./p-ca562010.js";import{c as d,d as l,H as h}from"./p-38f738a6.js";import{g as u}from"./p-30b0f762.js";import{u as f}from"./p-7b97aed3.js";import{c as m,d as p,g as b}from"./p-bd9dda02.js";import{c as v,a as k,s as g}from"./p-04967691.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const w={container:"container"};const x='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}';const y=class{constructor(a){t(this,a);this.calciteInternalRadioButtonBlur=i(this,"calciteInternalRadioButtonBlur",6);this.calciteRadioButtonChange=i(this,"calciteRadioButtonChange",6);this.calciteInternalRadioButtonCheckedChange=i(this,"calciteInternalRadioButtonCheckedChange",6);this.calciteInternalRadioButtonFocus=i(this,"calciteInternalRadioButtonFocus",6);this.selectItem=(t,i)=>{t[i].click()};this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((t=>t.name===this.name));this.isDefaultSelectable=()=>{const t=this.queryButtons();return!t.some((t=>t.checked))&&t[0]===this.el};this.check=()=>{if(this.disabled){return}this.uncheckAllRadioButtonsInGroup();this.checked=true;this.focused=true;this.calciteRadioButtonChange.emit();this.setFocus()};this.clickHandler=()=>{this.check()};this.setContainerEl=t=>{this.containerEl=t};this.handleKeyDown=t=>{const i=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "];const{key:a}=t;const{el:e}=this;if(i.indexOf(a)===-1){return}if(a===" "){this.check();t.preventDefault();return}let s=a;if(n(e)==="rtl"){if(a==="ArrowRight"){s="ArrowLeft"}if(a==="ArrowLeft"){s="ArrowRight"}}const r=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((t=>t.name===this.name));let c=0;const d=r.length;r.some(((t,i)=>{if(t.checked){c=i;return true}}));switch(s){case"ArrowLeft":case"ArrowUp":t.preventDefault();this.selectItem(r,o(Math.max(c-1,-1),d));return;case"ArrowRight":case"ArrowDown":t.preventDefault();this.selectItem(r,o(c+1,d));return;default:return}};this.onContainerBlur=()=>{this.focused=false;this.calciteInternalRadioButtonBlur.emit()};this.onContainerFocus=()=>{if(!this.disabled){this.focused=true;this.calciteInternalRadioButtonFocus.emit()}};this.checked=false;this.disabled=false;this.focused=false;this.form=undefined;this.guid=undefined;this.hidden=false;this.hovered=false;this.label=undefined;this.name=undefined;this.required=false;this.scale="m";this.value=undefined}checkedChanged(t){if(t){this.uncheckOtherRadioButtonsInGroup()}this.calciteInternalRadioButtonCheckedChange.emit()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await v(this);if(!this.disabled){r(this.containerEl)}}syncHiddenFormInput(t){t.type="radio"}onLabelClick(t){if(!this.disabled&&!this.hidden){this.uncheckOtherRadioButtonsInGroup();const i=t.currentTarget;const a=i.for?this.rootNode.querySelector(`calcite-radio-button[id="${i.for}"]`):i.querySelector(`calcite-radio-button[name="${this.name}"]`);if(a){a.checked=true;a.focused=true}this.calciteRadioButtonChange.emit();this.setFocus()}}checkLastRadioButton(){const t=this.queryButtons();const i=t.filter((t=>t.checked));if((i===null||i===void 0?void 0:i.length)>1){const t=i[i.length-1];i.filter((i=>i!==t)).forEach((t=>{t.checked=false;t.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){const t=this.queryButtons();t.forEach((t=>{if(t.checked){t.checked=false;t.focused=false}}))}uncheckOtherRadioButtonsInGroup(){const t=this.queryButtons();const i=t.filter((t=>t.guid!==this.guid));i.forEach((t=>{if(t.checked){t.checked=false;t.focused=false}}))}getTabIndex(){if(this.disabled){return undefined}return this.checked||this.isDefaultSelectable()?0:-1}mouseenter(){this.hovered=true}mouseleave(){this.hovered=false}connectedCallback(){this.rootNode=this.el.getRootNode();this.guid=this.el.id||`calcite-radio-button-${u()}`;if(this.name){this.checkLastRadioButton()}m(this);d(this)}componentWillLoad(){k(this)}componentDidLoad(){g(this);if(this.focused&&!this.disabled){this.setFocus()}}disconnectedCallback(){p(this);l(this)}componentDidRender(){f(this)}render(){const t=this.getTabIndex();return a(e,{onClick:this.clickHandler,onKeyDown:this.handleKeyDown},a("div",{"aria-checked":c(this.checked),"aria-label":b(this),class:w.container,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"radio",tabIndex:t,ref:this.setContainerEl},a("div",{class:"radio"})),a(h,{component:this}))}get el(){return s(this)}static get watchers(){return{checked:["checkedChanged"],name:["nameChanged"]}}};y.style=x;export{y as calcite_radio_button};
//# sourceMappingURL=p-c7f9b646.entry.js.map