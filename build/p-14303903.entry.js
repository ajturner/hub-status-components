import{r as i,c as t,h as e,H as s,g as a}from"./p-01ad4c17.js";import{f as n}from"./p-cae403e7.js";import{i as o,t as r}from"./p-ca562010.js";import{d as l,f as c,c as h,u as d,r as p,a as u,F as f}from"./p-2380a0d9.js";import{s as m,c as b,a as g,d as v,H as x}from"./p-38f738a6.js";import{g as w}from"./p-30b0f762.js";import{u as y}from"./p-7b97aed3.js";import{c as C,d as k,g as I}from"./p-bd9dda02.js";import{c as z,a as $,s as H}from"./p-04967691.js";import{c as j,d as D}from"./p-1ddddc69.js";import{c as A}from"./p-e6be3162.js";import{c as E,d as P}from"./p-0671807e.js";import{c as L,s as F,d as _,u as M}from"./p-991758d4.js";import{C as O,g as B,a as R,h as S,b as T,c as U}from"./p-5c2f6cb4.js";import{d as X}from"./p-58421494.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";const Y="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-block:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const G=i=>i.tagName===U;const K="combobox-item-";const N="combobox-chip-";const V="combobox-label-";const W="combobox-listbox-";const q="combobox-input-";const J=class{constructor(e){i(this,e);this.calciteComboboxChange=t(this,"calciteComboboxChange",6);this.calciteComboboxFilterChange=t(this,"calciteComboboxFilterChange",6);this.calciteComboboxChipClose=t(this,"calciteComboboxChipClose",6);this.calciteComboboxBeforeClose=t(this,"calciteComboboxBeforeClose",6);this.calciteComboboxClose=t(this,"calciteComboboxClose",6);this.calciteComboboxBeforeOpen=t(this,"calciteComboboxBeforeOpen",6);this.calciteComboboxOpen=t(this,"calciteComboboxOpen",6);this.placement=l;this.internalValueChangeFlag=false;this.textInput=null;this.mutationObserver=A("mutation",(()=>this.updateItems()));this.resizeObserver=A("resize",(()=>this.setMaxScrollerHeight()));this.guid=w();this.inputHeight=0;this.ignoreSelectedEventsFlag=false;this.openTransitionProp="opacity";this.setFilteredPlacements=()=>{const{el:i,flipPlacements:t}=this;this.filteredFlipPlacements=t?c(t,i):null};this.getValue=()=>{const i=this.selectedItems.map((i=>{var t;return(t=i===null||i===void 0?void 0:i.value)===null||t===void 0?void 0:t.toString()}));return(i===null||i===void 0?void 0:i.length)?i.length>1?i:i[0]:""};this.onLabelClick=()=>{this.setFocus()};this.keydownHandler=i=>{const{key:t}=i;switch(t){case"Tab":this.activeChipIndex=-1;this.activeItemIndex=-1;if(this.allowCustomValues&&this.text){this.addCustomChip(this.text,true);i.preventDefault()}else if(this.open){this.open=false;i.preventDefault()}break;case"ArrowLeft":this.previousChip();i.preventDefault();break;case"ArrowRight":this.nextChip();i.preventDefault();break;case"ArrowUp":i.preventDefault();this.shiftActiveItemIndex(-1);if(!this.comboboxInViewport()){this.el.scrollIntoView()}break;case"ArrowDown":i.preventDefault();if(!this.open){this.open=true}this.shiftActiveItemIndex(1);if(!this.comboboxInViewport()){this.el.scrollIntoView()}break;case" ":if(!this.textInput.value){i.preventDefault();this.open=true;this.shiftActiveItemIndex(1)}break;case"Home":if(!this.open){return}i.preventDefault();this.updateActiveItemIndex(0);this.scrollToActiveItem();if(!this.comboboxInViewport()){this.el.scrollIntoView()}break;case"End":if(!this.open){return}i.preventDefault();this.updateActiveItemIndex(this.filteredItems.length-1);this.scrollToActiveItem();if(!this.comboboxInViewport()){this.el.scrollIntoView()}break;case"Escape":this.open=false;i.preventDefault();break;case"Enter":if(this.activeItemIndex>-1){this.toggleSelection(this.filteredItems[this.activeItemIndex]);i.preventDefault()}else if(this.activeChipIndex>-1){this.removeActiveChip();i.preventDefault()}else if(this.allowCustomValues&&this.text){this.addCustomChip(this.text,true);i.preventDefault()}else if(!i.defaultPrevented){if(m(this)){i.preventDefault()}}break;case"Delete":case"Backspace":if(this.activeChipIndex>-1){i.preventDefault();this.removeActiveChip()}else if(!this.text&&this.isMulti()){i.preventDefault();this.removeLastChip()}break}};this.toggleCloseEnd=()=>{this.open=false;this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)};this.toggleOpenEnd=()=>{this.open=false;this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)};this.setMaxScrollerHeight=async()=>{const{listContainerEl:i,open:t,referenceEl:e}=this;if(!i||!t){return}await this.reposition(true);const s=this.getMaxScrollerHeight();i.style.maxHeight=s>0?`${s}px`:"";i.style.minWidth=`${e.clientWidth}px`;await this.reposition(true)};this.calciteChipCloseHandler=i=>{this.open=false;const t=this.items.find((t=>t===i));if(t){this.toggleSelection(t,false)}this.calciteComboboxChipClose.emit()};this.clickHandler=i=>{if(i.composedPath().some((i=>i.tagName==="CALCITE-CHIP"))){return}this.open=!this.open;this.updateActiveItemIndex(0);this.setFocus()};this.setInactiveIfNotContained=i=>{const t=i.composedPath();if(!this.open||t.includes(this.el)||t.includes(this.referenceEl)){return}if(this.allowCustomValues&&this.text.trim().length){this.addCustomChip(this.text)}if(this.selectionMode==="single"){if(this.textInput){this.textInput.value=""}this.text="";this.filterItems("");this.updateActiveItemIndex(-1)}this.open=false};this.setFloatingEl=i=>{this.floatingEl=i;h(this,this.referenceEl,this.floatingEl)};this.setContainerEl=i=>{this.resizeObserver.observe(i);this.listContainerEl=i;this.transitionEl=i;E(this)};this.setReferenceEl=i=>{this.referenceEl=i;h(this,this.referenceEl,this.floatingEl)};this.inputHandler=i=>{const t=i.target.value;this.text=t;this.filterItems(t);if(t){this.activeChipIndex=-1}};this.filterItems=(()=>{const i=(i,t)=>i&&t.some((({label:t,value:e})=>{if(G(i)){return e===i.label}return e===i.textLabel||e===i.value||t===i.textLabel||t===i.value}));return X((t=>{const e=n(this.data,t);const s=this.getCombinedItems();s.forEach((t=>{const s=!i(t,e);t.hidden=s;const[a,n]=t.ancestors;if(i(a,e)||i(n,e)){t.hidden=false}if(!s){t.ancestors.forEach((i=>i.hidden=false))}}));this.filteredItems=this.getfilteredItems();this.calciteComboboxFilterChange.emit()}),100)})();this.internalComboboxChangeEvent=()=>{this.calciteComboboxChange.emit()};this.emitComboboxChange=X(this.internalComboboxChangeEvent,0);this.updateItems=()=>{this.items=this.getItems();this.groupItems=this.getGroupItems();this.data=this.getData();this.selectedItems=this.getSelectedItems();this.filteredItems=this.getfilteredItems();this.needsIcon=this.getNeedsIcon();if(!this.allowCustomValues){this.setMaxScrollerHeight()}};this.scrollToActiveItem=()=>{const i=this.filteredItems[this.activeItemIndex];if(!i){return}const t=this.calculateSingleItemHeight(i);const{offsetHeight:e,scrollTop:s}=this.listContainerEl;if(e+s<i.offsetTop+t){this.listContainerEl.scrollTop=i.offsetTop-e+t}else if(i.offsetTop<s){this.listContainerEl.scrollTop=i.offsetTop}};this.comboboxFocusHandler=()=>{var i;(i=this.textInput)===null||i===void 0?void 0:i.focus()};this.comboboxBlurHandler=i=>{this.setInactiveIfNotContained(i)};this.open=false;this.disabled=false;this.form=undefined;this.label=undefined;this.placeholder=undefined;this.placeholderIcon=undefined;this.placeholderIconFlipRtl=false;this.maxItems=0;this.name=undefined;this.allowCustomValues=undefined;this.overlayPositioning="absolute";this.required=false;this.selectionMode="multiple";this.scale="m";this.value=null;this.flipPlacements=undefined;this.messages=undefined;this.messageOverrides=undefined;this.selectedItems=[];this.filteredItems=[];this.items=[];this.groupItems=[];this.needsIcon=undefined;this.activeItemIndex=-1;this.activeChipIndex=-1;this.activeDescendant="";this.text="";this.effectiveLocale=undefined;this.defaultMessages=undefined}openHandler(i){if(!i){d(this.floatingEl)}if(this.disabled){this.open=false;return}this.setMaxScrollerHeight()}handleDisabledChange(i){if(!i){this.open=false}}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(true)}valueHandler(i){if(!this.internalValueChangeFlag){const t=this.getItems();if(Array.isArray(i)){t.forEach((t=>t.selected=i.includes(t.value)))}else if(i){t.forEach((t=>t.selected=i===t.value))}else{t.forEach((i=>i.selected=false))}this.updateItems()}}onMessagesChange(){}flipPlacementsHandler(){this.setFilteredPlacements();this.reposition(true)}selectedItemsHandler(){this.internalValueChangeFlag=true;this.value=this.getValue();this.internalValueChangeFlag=false}documentClickHandler(i){if(!o(i)){return}this.setInactiveIfNotContained(i)}calciteComboboxItemChangeHandler(i){if(this.ignoreSelectedEventsFlag){return}const t=i.target;const e=this.filteredItems.indexOf(t);this.updateActiveItemIndex(e);this.toggleSelection(t,t.selected)}async reposition(i=false){const{floatingEl:t,referenceEl:e,placement:s,overlayPositioning:a,filteredFlipPlacements:n}=this;return p(this,{floatingEl:t,referenceEl:e,overlayPositioning:a,placement:s,flipPlacements:n,type:"menu"},i)}async setFocus(){var i;await z(this);(i=this.textInput)===null||i===void 0?void 0:i.focus();this.activeChipIndex=-1;this.activeItemIndex=-1}connectedCallback(){var i;j(this);L(this);this.internalValueChangeFlag=true;this.value=this.getValue();this.internalValueChangeFlag=false;(i=this.mutationObserver)===null||i===void 0?void 0:i.observe(this.el,{childList:true,subtree:true});C(this);b(this);E(this);this.setFilteredPlacements();this.reposition(true);if(this.open){this.openHandler(this.open)}}async componentWillLoad(){$(this);this.updateItems();await F(this)}componentDidLoad(){g(this,this.getValue());this.reposition(true);H(this)}componentDidRender(){if(this.el.offsetHeight!==this.inputHeight){this.reposition(true);this.inputHeight=this.el.offsetHeight}y(this)}disconnectedCallback(){var i,t;(i=this.mutationObserver)===null||i===void 0?void 0:i.disconnect();(t=this.resizeObserver)===null||t===void 0?void 0:t.disconnect();k(this);v(this);u(this,this.referenceEl,this.floatingEl);P(this);D(this);_(this)}textHandler(){this.updateActiveItemIndex(-1)}effectiveLocaleChange(){M(this,this.effectiveLocale)}comboboxInViewport(){const i=this.el.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.right<=(window.innerWidth||document.documentElement.clientWidth)&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}getMaxScrollerHeight(){const i=this.getCombinedItems().filter((i=>!i.hidden));const{maxItems:t}=this;let e=0;let s=0;if(i.length>t){i.forEach((i=>{if(e<t&&t>0){const t=this.calculateSingleItemHeight(i);if(t>0){s+=t;e++}}}))}return s}calculateSingleItemHeight(i){if(!i){return}let t=i.offsetHeight;const e=Array.from(i.querySelectorAll(O));e.map((i=>i===null||i===void 0?void 0:i.offsetHeight)).forEach((i=>{t-=i}));return t}getCombinedItems(){return[...this.groupItems,...this.items]}toggleSelection(i,t=!i.selected){if(!i){return}if(this.isMulti()){i.selected=t;this.updateAncestors(i);this.selectedItems=this.getSelectedItems();this.emitComboboxChange();this.resetText();this.filterItems("")}else{this.ignoreSelectedEventsFlag=true;this.items.forEach((e=>e.selected=e===i?t:false));this.ignoreSelectedEventsFlag=false;this.selectedItems=this.getSelectedItems();this.emitComboboxChange();if(this.textInput){this.textInput.value=i.textLabel}this.open=false;this.updateActiveItemIndex(-1);this.resetText();this.filterItems("")}}updateAncestors(i){if(this.selectionMode!=="ancestors"){return}const t=B(i);const e=R(i);if(i.selected){t.forEach((i=>{i.selected=true}))}else{e.forEach((i=>i.selected=false));[...t].forEach((i=>{if(!S(i)){i.selected=false}}))}}getfilteredItems(){return this.items.filter((i=>!i.hidden))}getSelectedItems(){if(!this.isMulti()){const i=this.items.find((({selected:i})=>i));return i?[i]:[]}return this.items.filter((i=>i.selected&&(this.selectionMode!=="ancestors"||!S(i)))).sort(((i,t)=>{const e=this.selectedItems.indexOf(i);const s=this.selectedItems.indexOf(t);if(e>-1&&s>-1){return e-s}return s-e}))}getData(){return this.items.map((i=>({filterDisabled:i.filterDisabled,value:i.value,label:i.textLabel})))}getNeedsIcon(){return this.selectionMode==="single"&&this.items.some((i=>i.icon))}resetText(){if(this.textInput){this.textInput.value=""}this.text=""}getItems(){const i=Array.from(this.el.querySelectorAll(T));return i.filter((i=>!i.disabled))}getGroupItems(){return Array.from(this.el.querySelectorAll(U))}addCustomChip(i,t){const e=this.items.find((t=>t.textLabel===i));if(e){this.toggleSelection(e,true)}else{if(!this.isMulti()){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],false)}const e=document.createElement(T);e.value=i;e.textLabel=i;e.selected=true;this.el.appendChild(e);this.resetText();if(t){this.setFocus()}this.updateItems();this.filterItems("");this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],false);this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],false);this.setFocus()}previousChip(){if(this.text){return}const i=this.selectedItems.length-1;const t=this.activeChipIndex;this.activeChipIndex=t===-1?i:Math.max(t-1,0);this.updateActiveItemIndex(-1);this.focusChip()}nextChip(){if(this.text||this.activeChipIndex===-1){return}const i=this.selectedItems.length-1;const t=this.activeChipIndex+1;if(t>i){this.activeChipIndex=-1;this.setFocus()}else{this.activeChipIndex=t;this.focusChip()}this.updateActiveItemIndex(-1)}focusChip(){var i;const t=(i=this.selectedItems[this.activeChipIndex])===null||i===void 0?void 0:i.guid;const e=t?this.referenceEl.querySelector(`#${N}${t}`):null;e===null||e===void 0?void 0:e.setFocus()}shiftActiveItemIndex(i){const{length:t}=this.filteredItems;const e=(this.activeItemIndex+t+i)%t;this.updateActiveItemIndex(e);this.scrollToActiveItem()}updateActiveItemIndex(i){this.activeItemIndex=i;let t=null;this.filteredItems.forEach(((e,s)=>{if(s===i){e.active=true;t=`${K}${e.guid}`}else{e.active=false}}));this.activeDescendant=t;if(this.activeItemIndex>-1){this.activeChipIndex=-1}}isMulti(){return this.selectionMode!=="single"}renderChips(){const{activeChipIndex:i,scale:t,selectionMode:s,messages:a}=this;return this.selectedItems.map(((n,o)=>{const r={chip:true,"chip--active":i===o};const l=[...B(n)].reverse();const c=[...l,n].map((i=>i.textLabel));const h=s!=="ancestors"?n.textLabel:c.join(" / ");return e("calcite-chip",{class:r,closable:true,icon:n.icon,iconFlipRtl:n.iconFlipRtl,id:n.guid?`${N}${n.guid}`:null,key:n.textLabel,messageOverrides:{dismissLabel:a.removeTag},onCalciteChipClose:()=>this.calciteChipCloseHandler(n),scale:t,title:h,value:n.value},h)}))}renderInput(){const{guid:i,disabled:t,placeholder:s,selectionMode:a,selectedItems:n,open:o}=this;const r=a==="single";const l=n[0];const c=!o&&r&&!!l;return e("span",{class:{"input-wrap":true,"input-wrap--single":r}},c&&e("span",{class:{label:true,"label--icon":!!(l===null||l===void 0?void 0:l.icon)},key:"label"},l.textLabel),e("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":`${W}${i}`,"aria-label":I(this),class:{input:true,"input--single":true,"input--transparent":this.activeChipIndex>-1,"input--hidden":c,"input--icon":!!this.placeholderIcon},disabled:t,id:`${q}${i}`,key:"input",onBlur:this.comboboxBlurHandler,onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:s,type:"text",ref:i=>this.textInput=i}))}renderListBoxOptions(){return this.filteredItems.map((i=>e("li",{"aria-selected":r(i.selected),id:i.guid?`${K}${i.guid}`:null,role:"option",tabindex:"-1"},i.textLabel)))}renderFloatingUIContainer(){const{setFloatingEl:i,setContainerEl:t,open:s}=this;const a={"list-container":true,[f.animation]:true,[f.animationActive]:s};return e("div",{"aria-hidden":"true",class:{"floating-ui-container":true,"floating-ui-container--active":s},ref:i},e("div",{class:a,ref:t},e("ul",{class:{list:true,"list--hide":!s}},e("slot",null))))}renderIconStart(){const{selectedItems:i,placeholderIcon:t,selectionMode:s,placeholderIconFlipRtl:a}=this;const n=i[0];const o=n===null||n===void 0?void 0:n.icon;const r=s==="single";const l=!this.open&&n?!!o&&r:!!this.placeholderIcon&&(!n||r);return l&&e("span",{class:"icon-start"},e("calcite-icon",{class:"selected-icon",flipRtl:this.open&&n?n.iconFlipRtl:a,icon:!this.open&&n?o:t,scale:"s"}))}renderIconEnd(){const{open:i}=this;return e("span",{class:"icon-end"},e("calcite-icon",{icon:i?"chevron-up":"chevron-down",scale:"s"}))}render(){const{guid:i,label:t,open:a}=this;const n=this.selectionMode==="single";return e(s,{onClick:this.comboboxFocusHandler},e("div",{"aria-autocomplete":"list","aria-controls":`${W}${i}`,"aria-expanded":r(a),"aria-haspopup":"listbox","aria-label":I(this),"aria-live":"polite","aria-owns":`${W}${i}`,class:{wrapper:true,"wrapper--single":n||!this.selectedItems.length,"wrapper--active":a},onClick:this.clickHandler,onKeyDown:this.keydownHandler,role:"combobox",ref:this.setReferenceEl},e("div",{class:"grid-input"},this.renderIconStart(),!n&&this.renderChips(),e("label",{class:"screen-readers-only",htmlFor:`${q}${i}`,id:`${V}${i}`},t),this.renderInput()),this.renderIconEnd()),e("ul",{"aria-labelledby":`${V}${i}`,"aria-multiselectable":"true",class:"screen-readers-only",id:`${W}${i}`,role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),e(x,{component:this}))}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"],effectiveLocale:["effectiveLocaleChange"]}}};J.style=Y;export{J as calcite_combobox};
//# sourceMappingURL=p-14303903.entry.js.map