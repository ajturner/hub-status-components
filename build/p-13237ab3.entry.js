import{r as e,c as t,h as a,H as r,g as i,F as o}from"./p-01ad4c17.js";import{b as n,f as s,e as c,i as l,h as d,n as h,p as u}from"./p-78cee83a.js";import{c as f,b as p}from"./p-ca562010.js";import{u as g}from"./p-7b97aed3.js";import{i as v}from"./p-62d90ff5.js";import{n as m}from"./p-1ddddc69.js";import{C as w}from"./p-5f83161a.js";import{H as y}from"./p-cf7b3948.js";import"./p-30b0f762.js";import"./p-e6be3162.js";const x="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;min-inline-size:0px;cursor:pointer;justify-content:center;color:var(--calcite-ui-text-3);inline-size:14.2857142857%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.day-v-wrapper{flex:1 1 auto}.day-wrapper{display:flex;flex-direction:column;align-items:center}.day{display:flex;align-items:center;justify-content:center;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background:none;box-shadow:0 0 0 2px transparent}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]) .day-v-wrapper{padding-block:0.125rem}:host([scale=s]) .day-wrapper{padding:0px}:host([scale=s]) .day{block-size:27px;inline-size:27px;font-size:var(--calcite-font-size--2)}:host([scale=m]) .day-v-wrapper{padding-block:0.25rem}:host([scale=m]) .day-wrapper{padding-inline:0.25rem}:host([scale=m]) .day{block-size:33px;inline-size:33px;font-size:var(--calcite-font-size--1)}:host([scale=l]) .day-v-wrapper{padding-block:0.25rem}:host([scale=l]) .day-wrapper{padding-inline:0.25rem}:host([scale=l]) .day{block-size:43px;inline-size:43px;font-size:var(--calcite-font-size-0)}:host([current-month]) .day{opacity:1}:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){outline:2px solid transparent;outline-offset:2px}:host(:focus:not([disabled])) .day{outline:2px solid var(--calcite-ui-brand);outline-offset:2px;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-ui-brand) !important;color:var(--calcite-ui-foreground-1) !important}:host([range][selected]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([start-of-range]) .day-wrapper{border-start-start-radius:40%;border-end-start-radius:40%}:host([end-of-range]) .day-wrapper{border-start-end-radius:40%;border-end-end-radius:40%}:host([start-of-range]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range]) .calcite--rtl .day-wrapper{box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range]) .day{opacity:1}:host([end-of-range]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range]) .calcite--rtl .day-wrapper{box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range]) .day{opacity:1}:host([start-of-range]:not(:focus)) :not(.calcite--rtl) .day,:host([end-of-range]:not(:focus)) :not(.calcite--rtl) .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([start-of-range]:not(:focus)) .calcite--rtl .day,:host([end-of-range]:not(:focus)) .calcite--rtl .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([start-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset 8px 0 var(--calcite-ui-foreground-1)}:host([start-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset 8px 0 var(--calcite-ui-foreground-1)}:host([highlighted]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([highlighted]) .day-wrapper .day{color:var(--calcite-ui-text-1)}:host([highlighted]:not([active]:focus)) .day{color:var(--calcite-ui-text-1)}:host([range-hover]:not([selected])) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([range-hover]:not([selected])) .day{border-radius:0px}:host([start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[range-hover]:not([selected]).focused--start) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current))}:host(:hover[range-hover]:not([selected]).focused--start) .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current))}:host(:hover[range-hover]:not([selected]).focused--end) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--end) .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1))}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[start-of-range].hover--inside-range.focused--end) .day-wrapper,:host(:hover[end-of-range].hover--inside-range.focused--start) .day-wrapper{background-image:none}:host([start-of-range].hover--inside-range.focused--end) .day-wrapper,:host([end-of-range].hover--inside-range.focused--start) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([highlighted]:first-child) .calcite--rtl .day-wrapper,:host([range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([highlighted]:last-child) .calcite--rtl .day-wrapper,:host([range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted]:first-child) .calcite--rtl .day-wrapper,:host([scale=s][range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted]:last-child) .calcite--rtl .day-wrapper,:host([scale=s][range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=l][highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted]:last-child) .calcite--rtl .day-wrapper,:host([scale=l][range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 6px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([highlighted]:first-child) .day-wrapper,:host([range-hover]:first-child) .day-wrapper{border-start-start-radius:45%;border-end-start-radius:45%}:host([highlighted]:last-child) .day-wrapper,:host([range-hover]:last-child) .day-wrapper{border-start-end-radius:45%;border-end-end-radius:45%}:host([scale=l][highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted]:first-child) .calcite--rtl .day-wrapper,:host([scale=l][range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -6px 0px 0px 0px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{border-radius:0px}:host([selected]){outline:2px solid canvasText}:host([selected]) .day{border-radius:0px;background-color:highlight}:host([range][selected]) .day-wrapper,:host([highlighted]) .day-wrapper,:host([range-hover]:not([selected])) .day-wrapper{background-color:highlight}:host([range][selected][start-of-range]) .day-wrapper,:host([range][selected][end-of-range]) .day-wrapper{background-color:canvas}}";const b=class{constructor(a){e(this,a);this.calciteDaySelect=t(this,"calciteDaySelect",6);this.calciteInternalDayHover=t(this,"calciteInternalDayHover",6);this.onClick=()=>{!this.disabled&&this.calciteDaySelect.emit()};this.keyDownHandler=e=>{if(v(e.key)){!this.disabled&&this.calciteDaySelect.emit();e.preventDefault()}};this.day=undefined;this.disabled=false;this.currentMonth=false;this.selected=false;this.highlighted=false;this.range=false;this.startOfRange=false;this.endOfRange=false;this.rangeHover=false;this.active=false;this.scale=undefined;this.value=undefined}mouseoverHandler(){this.calciteInternalDayHover.emit()}componentWillLoad(){this.parentDatePickerEl=f(this.el,"calcite-date-picker")}render(){const e=n(this.value).replaceAll("-","");if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;m.numberFormatOptions=Object.assign(Object.assign({useGrouping:false},e&&{numberingSystem:e}),t&&{locale:t})}const t=m.localize(String(this.day));const i=p(this.el);return a(r,{id:e,onClick:this.onClick,onKeyDown:this.keyDownHandler,role:"gridcell"},a("div",{class:{"day-v-wrapper":true,[w.rtl]:i==="rtl"}},a("div",{class:"day-wrapper"},a("span",{class:"day"},a("span",{class:"text"},t)))))}componentDidRender(){g(this,this.isTabbable)}isTabbable(){return this.active}get el(){return i(this)}};b.style=x;const k="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}.calender{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-3);inline-size:14.2857142857%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:flex;flex-direction:row;padding-block:0px;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}";const D=7;const z=6;const _=class{constructor(a){e(this,a);this.calciteInternalDatePickerSelect=t(this,"calciteInternalDatePickerSelect",6);this.calciteInternalDatePickerHover=t(this,"calciteInternalDatePickerHover",6);this.calciteInternalDatePickerActiveDateChange=t(this,"calciteInternalDatePickerActiveDateChange",6);this.calciteInternalDatePickerMouseOut=t(this,"calciteInternalDatePickerMouseOut",6);this.keyDownHandler=e=>{if(e.defaultPrevented){return}const t=this.el.dir==="rtl";switch(e.key){case"ArrowUp":e.preventDefault();this.addDays(-7);break;case"ArrowRight":e.preventDefault();this.addDays(t?-1:1);break;case"ArrowDown":e.preventDefault();this.addDays(7);break;case"ArrowLeft":e.preventDefault();this.addDays(t?1:-1);break;case"PageUp":e.preventDefault();this.addMonths(-1);break;case"PageDown":e.preventDefault();this.addMonths(1);break;case"Home":e.preventDefault();this.activeDate.setDate(1);this.addDays();break;case"End":e.preventDefault();this.activeDate.setDate(new Date(this.activeDate.getFullYear(),this.activeDate.getMonth()+1,0).getDate());this.addDays();break;case"Enter":case" ":e.preventDefault();break;case"Tab":this.activeFocus=false}};this.disableActiveFocus=()=>{this.activeFocus=false};this.dayHover=e=>{const t=e.target;if(t.disabled){this.calciteInternalDatePickerMouseOut.emit()}else{this.calciteInternalDatePickerHover.emit(t.value)}e.stopPropagation()};this.daySelect=e=>{const t=e.target;this.calciteInternalDatePickerSelect.emit(t.value)};this.selectedDate=undefined;this.activeDate=new Date;this.startDate=undefined;this.endDate=undefined;this.min=undefined;this.max=undefined;this.scale=undefined;this.localeData=undefined;this.hoverRange=undefined}mouseoutHandler(){this.calciteInternalDatePickerMouseOut.emit()}render(){const e=this.activeDate.getMonth();const t=this.activeDate.getFullYear();const i=this.localeData.weekStart%7;const{abbreviated:o,short:n,narrow:c}=this.localeData.days;const l=this.scale==="s"?c||n||o:n||o||c;const d=[...l.slice(i,7),...l.slice(0,i)];const h=this.getCurrentMonthDays(e,t);const u=this.getPreviousMonthDays(e,t,i);const f=this.getNextMonthDays(e,t,i);const p=[...u.map((a=>{const r=new Date(t,e-1,a);return this.renderDateDay(false,a,r)})),...h.map((a=>{const r=new Date(t,e,a);const i=s(r,this.activeDate);return this.renderDateDay(i,a,r,true,true)})),...f.map((a=>{const r=new Date(t,e+1,a);return this.renderDateDay(false,a,r)}))];const g=[];for(let e=0;e<p.length;e+=7){g.push(p.slice(e,e+7))}return a(r,{onFocusOut:this.disableActiveFocus,onKeyDown:this.keyDownHandler},a("div",{class:"calender",role:"grid"},a("div",{class:"week-headers",role:"row"},d.map((e=>a("span",{class:"week-header",role:"columnheader"},e)))),g.map((e=>a("div",{class:"week-days",role:"row"},e)))))}addMonths(e){const t=new Date(this.activeDate);t.setMonth(this.activeDate.getMonth()+e);this.calciteInternalDatePickerActiveDateChange.emit(c(t,this.min,this.max));this.activeFocus=true}addDays(e=0){const t=new Date(this.activeDate);t.setDate(this.activeDate.getDate()+e);this.calciteInternalDatePickerActiveDateChange.emit(c(t,this.min,this.max));this.activeFocus=true}getPreviousMonthDays(e,t,a){const r=new Date(t,e,0);const i=r.getDate();const o=r.getDay();const n=[];if(o===(a+z)%D){return n}if(o===a){return[i]}for(let e=(D+o-a)%D;e>=0;e--){n.push(i-e)}return n}getCurrentMonthDays(e,t){const a=new Date(t,e+1,0).getDate();const r=[];for(let e=0;e<a;e++){r.push(e+1)}return r}getNextMonthDays(e,t,a){const r=new Date(t,e+1,0).getDay();const i=[];if(r===(a+z)%D){return i}for(let e=0;e<(z-(r-a))%D;e++){i.push(e+1)}return i}betweenSelectedRange(e){return!!(this.startDate&&this.endDate&&e>this.startDate&&e<this.endDate&&!this.isRangeHover(e))}isSelected(e){return!!(s(e,this.selectedDate)||this.startDate&&s(e,this.startDate)||this.endDate&&s(e,this.endDate))}isStartOfRange(e){return!!(this.startDate&&!s(this.startDate,this.endDate)&&s(this.startDate,e)&&!this.isEndOfRange(e))}isEndOfRange(e){return!!(this.endDate&&!s(this.startDate,this.endDate)&&s(this.endDate,e)||!this.endDate&&this.hoverRange&&s(this.startDate,this.hoverRange.end)&&s(e,this.hoverRange.end))}renderDateDay(e,t,r,i,o){var n;const c=this.isFocusedOnStart();const d=this.isHoverInRange()||!this.endDate&&this.hoverRange&&s((n=this.hoverRange)===null||n===void 0?void 0:n.end,this.startDate);return a("calcite-date-picker-day",{active:e,class:{"hover--inside-range":this.startDate&&d,"hover--outside-range":this.startDate&&!d,"focused--start":c,"focused--end":!c},currentMonth:i,day:t,disabled:!l(r,this.min,this.max),endOfRange:this.isEndOfRange(r),highlighted:this.betweenSelectedRange(r),key:r.toDateString(),onCalciteDaySelect:this.daySelect,onCalciteInternalDayHover:this.dayHover,range:!!this.startDate&&!!this.endDate&&!s(this.startDate,this.endDate),rangeHover:this.isRangeHover(r),scale:this.scale,selected:this.isSelected(r),startOfRange:this.isStartOfRange(r),value:r,ref:t=>{if(o&&e&&this.activeFocus){t===null||t===void 0?void 0:t.focus()}}})}isFocusedOnStart(){var e;return((e=this.hoverRange)===null||e===void 0?void 0:e.focused)==="start"}isHoverInRange(){if(!this.hoverRange){return false}const{start:e,end:t}=this.hoverRange;return!!(!this.isFocusedOnStart()&&this.startDate&&(!this.endDate||t<this.endDate)||this.isFocusedOnStart()&&this.startDate&&e>this.startDate)}isRangeHover(e){if(!this.hoverRange){return false}const{start:t,end:a}=this.hoverRange;const r=this.isFocusedOnStart();const i=this.isHoverInRange();const o=i&&(!r&&e>this.startDate&&(e<a||s(e,a))||r&&e<this.endDate&&(e>t||s(e,t)));const n=!i&&(!r&&e>=this.endDate&&(e<a||s(e,a))||r&&(this.startDate&&e<this.startDate||this.endDate&&s(e,this.startDate))&&(t&&e>t||s(e,t)));return o||n}get el(){return i(this)}};_.style=k;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const j=543;const S={header:"header",month:"month",chevron:"chevron",suffix:"suffix",yearSuffix:"year--suffix",yearWrap:"year-wrap",textReverse:"text--reverse"};const C={chevronLeft:"chevron-left",chevronRight:"chevron-right"};const O="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-inline:0.25rem;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.chevron:hover,.chevron:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}";const P=class{constructor(a){e(this,a);this.calciteInternalDatePickerSelect=t(this,"calciteInternalDatePickerSelect",6);this.onYearKey=e=>{const t=this.parseCalendarYear(e.target.value);switch(e.key){case"ArrowDown":e.preventDefault();this.setYear({localizedYear:t,offset:-1});break;case"ArrowUp":e.preventDefault();this.setYear({localizedYear:t,offset:1});break}};this.onYearChange=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value)})};this.onYearInput=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value),commit:false})};this.prevMonthClick=e=>{this.handleArrowClick(e,this.prevMonthDate)};this.prevMonthKeydown=e=>{if(v(e.key)){this.prevMonthClick(e)}};this.nextMonthClick=e=>{this.handleArrowClick(e,this.nextMonthDate)};this.nextMonthKeydown=e=>{if(v(e.key)){this.nextMonthClick(e)}};this.handleArrowClick=(e,t)=>{e.preventDefault();this.calciteInternalDatePickerSelect.emit(t)};this.selectedDate=undefined;this.activeDate=undefined;this.headingLevel=undefined;this.min=undefined;this.max=undefined;this.scale=undefined;this.localeData=undefined;this.messages=undefined;this.globalAttributes={};this.nextMonthDate=undefined;this.prevMonthDate=undefined}componentWillLoad(){this.parentDatePickerEl=f(this.el,"calcite-date-picker")}connectedCallback(){this.setNextPrevMonthDates()}render(){return a("div",{class:S.header},this.renderContent())}renderContent(){var e;const{messages:t,localeData:r,activeDate:i}=this;if(!i||!r){return null}if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;m.numberFormatOptions=Object.assign(Object.assign({useGrouping:false},e&&{numberingSystem:e}),t&&{locale:t})}const n=i.getMonth();const{months:s,unitOrder:c}=r;const l=(s.wide||s.narrow||s.abbreviated)[n];const h=this.formatCalendarYear(i.getFullYear());const u=this.scale==="l"?"m":"s";const f=d(c);const p=f.indexOf("y")<f.indexOf("m");const g=(e=r.year)===null||e===void 0?void 0:e.suffix;return a(o,null,a("a",{"aria-disabled":`${this.prevMonthDate.getMonth()===n}`,"aria-label":t.prevMonth,class:S.chevron,href:"#",onClick:this.prevMonthClick,onKeyDown:this.prevMonthKeydown,role:"button",tabindex:this.prevMonthDate.getMonth()===n?-1:0},a("calcite-icon",{"flip-rtl":true,icon:C.chevronLeft,scale:u})),a("div",{class:{text:true,[S.textReverse]:p}},a(y,{class:S.month,level:this.headingLevel},l),a("span",{class:S.yearWrap},a("input",{"aria-label":t.year,class:{year:true,[S.yearSuffix]:!!g},inputmode:"numeric",maxlength:"4",minlength:"1",onChange:this.onYearChange,onInput:this.onYearInput,onKeyDown:this.onYearKey,pattern:"\\d*",type:"text",value:h,ref:e=>this.yearInput=e}),g&&a("span",{class:S.suffix},g))),a("a",{"aria-disabled":`${this.nextMonthDate.getMonth()===n}`,"aria-label":t.nextMonth,class:S.chevron,href:"#",onClick:this.nextMonthClick,onKeyDown:this.nextMonthKeydown,role:"button",tabindex:this.nextMonthDate.getMonth()===n?-1:0},a("calcite-icon",{"flip-rtl":true,icon:C.chevronRight,scale:u})))}setNextPrevMonthDates(){if(!this.activeDate){return}this.nextMonthDate=c(h(this.activeDate),this.min,this.max);this.prevMonthDate=c(u(this.activeDate),this.min,this.max)}formatCalendarYear(e){const{localeData:t}=this;const a=t["default-calendar"]==="buddhist";const r=a?j:0;return m.localize(`${e+r}`)}parseCalendarYear(e){const{localeData:t}=this;const a=t["default-calendar"]==="buddhist";const r=a?j:0;const i=Number(m.delocalize(e))-r;return m.localize(`${i}`)}getInRangeDate({localizedYear:e,offset:t=0}){const{min:a,max:r,activeDate:i}=this;const o=Number(m.delocalize(e));const n=o.toString().length;const s=isNaN(o)?false:o+t;const l=s&&(!a||a.getFullYear()<=s)&&(!r||r.getFullYear()>=s);if(s&&l&&n===e.length){const e=new Date(i);e.setFullYear(s);return c(e,a,r)}}setYear({localizedYear:e,commit:t=true,offset:a=0}){const{yearInput:r,activeDate:i}=this;const o=this.getInRangeDate({localizedYear:e,offset:a});if(o){this.calciteInternalDatePickerSelect.emit(o)}if(t){r.value=this.formatCalendarYear((o||i).getFullYear())}}get el(){return i(this)}static get watchers(){return{min:["setNextPrevMonthDates"],max:["setNextPrevMonthDates"],activeDate:["setNextPrevMonthDates"]}}};P.style=O;export{b as calcite_date_picker_day,_ as calcite_date_picker_month,P as calcite_date_picker_month_header};
//# sourceMappingURL=p-13237ab3.entry.js.map