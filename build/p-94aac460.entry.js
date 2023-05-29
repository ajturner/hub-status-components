import{r as t,c as i,h as e,g as s}from"./p-01ad4c17.js";import{n as a,i as n}from"./p-62d90ff5.js";import{i as r,c as o,d as c}from"./p-1ddddc69.js";import{u as l,c as h,s as u,d}from"./p-991758d4.js";import{i as m,p,a as f,g as b,b as k,c as w,d as v,e as g,m as x}from"./p-0723a518.js";import{c as y,a as D,s as I}from"./p-04967691.js";import"./p-ca562010.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const M={button:"button",buttonBottomLeft:"button--bottom-left",buttonBottomRight:"button--bottom-right",buttonHourDown:"button--hour-down",buttonHourUp:"button--hour-up",buttonMeridiemDown:"button--meridiem-down",buttonMeridiemUp:"button--meridiem-up",buttonMinuteDown:"button--minute-down",buttonMinuteUp:"button--minute-up",buttonSecondDown:"button--second-down",buttonSecondUp:"button--second-up",buttonTopLeft:"button--top-left",buttonTopRight:"button--top-right",column:"column",delimiter:"delimiter",hour:"hour",input:"input",meridiem:"meridiem",minute:"minute",second:"second",showMeridiem:"show-meridiem",showSecond:"show-second","scale-s":"scale-s","scale-m":"scale-m","scale-l":"scale-l",timePicker:"time-picker",meridiemStart:"meridiem--start"};const A="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:400;outline-offset:0}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);z-index:400}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);z-index:400;outline-offset:0}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}";function z(t){return t.charAt(0).toUpperCase()+t.slice(1)}const S=class{constructor(e){t(this,e);this.calciteInternalTimePickerBlur=i(this,"calciteInternalTimePickerBlur",6);this.calciteInternalTimePickerChange=i(this,"calciteInternalTimePickerChange",6);this.calciteInternalTimePickerFocus=i(this,"calciteInternalTimePickerFocus",6);this.decrementHour=()=>{const t=!this.hour?0:this.hour==="00"?23:parseInt(this.hour)-1;this.setValuePart("hour",t)};this.decrementMeridiem=()=>{const t=this.meridiem==="PM"?"AM":"PM";this.setValuePart("meridiem",t)};this.decrementMinuteOrSecond=t=>{let i;if(r(this[t])){const e=parseInt(this[t]);i=e===0?59:e-1}else{i=59}this.setValuePart(t,i)};this.decrementMinute=()=>{this.decrementMinuteOrSecond("minute")};this.decrementSecond=()=>{this.decrementMinuteOrSecond("second")};this.focusHandler=t=>{this.activeEl=t.currentTarget};this.hourDownButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.decrementHour()}};this.hourKeyDownHandler=t=>{const{key:i}=t;if(a.includes(i)){const t=parseInt(i);let e;if(r(this.hour)){switch(this.hourCycle){case"12":e=this.hour==="01"&&t>=0&&t<=2?`1${t}`:t;break;case"24":if(this.hour==="01"){e=`1${t}`}else if(this.hour==="02"&&t>=0&&t<=3){e=`2${t}`}else{e=t}break}}else{e=t}this.setValuePart("hour",e)}else{switch(i){case"Backspace":case"Delete":this.setValuePart("hour",null);break;case"ArrowDown":t.preventDefault();this.decrementHour();break;case"ArrowUp":t.preventDefault();this.incrementHour();break;case" ":t.preventDefault();break}}};this.hourUpButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.incrementHour()}};this.incrementMeridiem=()=>{const t=this.meridiem==="AM"?"PM":"AM";this.setValuePart("meridiem",t)};this.incrementHour=()=>{const t=r(this.hour)?this.hour==="23"?0:parseInt(this.hour)+1:1;this.setValuePart("hour",t)};this.incrementMinuteOrSecond=t=>{const i=r(this[t])?this[t]==="59"?0:parseInt(this[t])+1:0;this.setValuePart(t,i)};this.incrementMinute=()=>{this.incrementMinuteOrSecond("minute")};this.incrementSecond=()=>{this.incrementMinuteOrSecond("second")};this.meridiemDownButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.decrementMeridiem()}};this.meridiemKeyDownHandler=t=>{switch(t.key){case"a":this.setValuePart("meridiem","AM");break;case"p":this.setValuePart("meridiem","PM");break;case"Backspace":case"Delete":this.setValuePart("meridiem",null);break;case"ArrowUp":t.preventDefault();this.incrementMeridiem();break;case"ArrowDown":t.preventDefault();this.decrementMeridiem();break;case" ":t.preventDefault();break}};this.meridiemUpButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.incrementMeridiem()}};this.minuteDownButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.decrementMinute()}};this.minuteKeyDownHandler=t=>{const{key:i}=t;if(a.includes(i)){const t=parseInt(i);let e;if(r(this.minute)&&this.minute.startsWith("0")){const i=parseInt(this.minute);e=i>x?t:`${i}${t}`}else{e=t}this.setValuePart("minute",e)}else{switch(i){case"Backspace":case"Delete":this.setValuePart("minute",null);break;case"ArrowDown":t.preventDefault();this.decrementMinute();break;case"ArrowUp":t.preventDefault();this.incrementMinute();break;case" ":t.preventDefault();break}}};this.minuteUpButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.incrementMinute()}};this.secondDownButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.decrementSecond()}};this.secondKeyDownHandler=t=>{const{key:i}=t;if(a.includes(i)){const t=parseInt(i);let e;if(r(this.second)&&this.second.startsWith("0")){const i=parseInt(this.second);e=i>x?t:`${i}${t}`}else{e=t}this.setValuePart("second",e)}else{switch(i){case"Backspace":case"Delete":this.setValuePart("second",null);break;case"ArrowDown":t.preventDefault();this.decrementSecond();break;case"ArrowUp":t.preventDefault();this.incrementSecond();break;case" ":t.preventDefault();break}}};this.secondUpButtonKeyDownHandler=t=>{if(this.buttonActivated(t)){this.incrementSecond()}};this.setHourEl=t=>this.hourEl=t;this.setMeridiemEl=t=>this.meridiemEl=t;this.setMinuteEl=t=>this.minuteEl=t;this.setSecondEl=t=>this.secondEl=t;this.setValue=(t,i=true)=>{if(m(t)){const{hour:i,minute:e,second:s}=p(t);const{effectiveLocale:a,numberingSystem:n}=this;const{localizedHour:r,localizedHourSuffix:o,localizedMinute:c,localizedMinuteSuffix:l,localizedSecond:h,localizedSecondSuffix:u,localizedMeridiem:d}=f({value:t,locale:a,numberingSystem:n});this.localizedHour=r;this.localizedHourSuffix=o;this.localizedMinute=c;this.localizedMinuteSuffix=l;this.localizedSecond=h;this.localizedSecondSuffix=u;this.hour=i;this.minute=e;this.second=s;if(d){this.localizedMeridiem=d;this.meridiem=b(this.hour);const i=k({value:t,locale:a,numberingSystem:n});this.meridiemOrder=this.getMeridiemOrder(i)}}else{this.hour=null;this.localizedHour=null;this.localizedHourSuffix=null;this.localizedMeridiem=null;this.localizedMinute=null;this.localizedMinuteSuffix=null;this.localizedSecond=null;this.localizedSecondSuffix=null;this.meridiem=null;this.minute=null;this.second=null;this.value=null}if(i){this.calciteInternalTimePickerChange.emit()}};this.setValuePart=(t,i,e=true)=>{var s;const{effectiveLocale:a,numberingSystem:n}=this;if(t==="meridiem"){this.meridiem=i;if(r(this.hour)){const t=parseInt(this.hour);switch(i){case"AM":if(t>=12){this.hour=w(t-12)}break;case"PM":if(t<12){this.hour=w(t+12)}break}this.localizedHour=v({value:this.hour,part:"hour",locale:a,numberingSystem:n})}}else{this[t]=typeof i==="number"?w(i):i;this[`localized${z(t)}`]=v({value:this[t],part:t,locale:a,numberingSystem:n})}if(this.hour&&this.minute){const t=this.second&&this.showSecond;this.value=`${this.hour}:${this.minute}:${t?this.second:"00"}`}else{this.value=null}this.localizedMeridiem=this.value?((s=f({value:this.value,locale:a,numberingSystem:n}))===null||s===void 0?void 0:s.localizedMeridiem)||null:v({value:this.meridiem,part:"meridiem",locale:a,numberingSystem:n});if(e){this.calciteInternalTimePickerChange.emit()}};this.scale="m";this.step=60;this.numberingSystem=undefined;this.value=null;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.hour=undefined;this.hourCycle=undefined;this.localizedHour=undefined;this.localizedHourSuffix=undefined;this.localizedMeridiem=undefined;this.localizedMinute=undefined;this.localizedMinuteSuffix=undefined;this.localizedSecond=undefined;this.localizedSecondSuffix=undefined;this.meridiem=undefined;this.minute=undefined;this.second=undefined;this.showSecond=this.step<60;this.defaultMessages=undefined}valueWatcher(t){this.setValue(t,false)}onMessagesChange(){}effectiveLocaleWatcher(){this.updateLocale()}hostBlurHandler(){this.calciteInternalTimePickerBlur.emit()}hostFocusHandler(){this.calciteInternalTimePickerFocus.emit()}keyDownHandler(t){const{defaultPrevented:i,key:e}=t;if(i){return}switch(this.activeEl){case this.hourEl:if(e==="ArrowRight"){this.focusPart("minute");t.preventDefault()}break;case this.minuteEl:switch(e){case"ArrowLeft":this.focusPart("hour");t.preventDefault();break;case"ArrowRight":if(this.step!==60){this.focusPart("second");t.preventDefault()}else if(this.hourCycle==="12"){this.focusPart("meridiem");t.preventDefault()}break}break;case this.secondEl:switch(e){case"ArrowLeft":this.focusPart("minute");t.preventDefault();break;case"ArrowRight":if(this.hourCycle==="12"){this.focusPart("meridiem");t.preventDefault()}break}break;case this.meridiemEl:switch(e){case"ArrowLeft":if(this.step!==60){this.focusPart("second");t.preventDefault()}else{this.focusPart("minute");t.preventDefault()}break}break}}async setFocus(){var t;await y(this);(t=this.el)===null||t===void 0?void 0:t.focus()}async focusPart(t){var i;await y(this);(i=this[`${t||"hour"}El`])===null||i===void 0?void 0:i.focus()}buttonActivated(t){const{key:i}=t;if(i===" "){t.preventDefault()}return n(i)}getMeridiemOrder(t){const i=this.effectiveLocale;const e=i==="ar"||i==="he";if(t&&!e){const i=t.findIndex((t=>t.value===this.localizedMeridiem));return i}return 0}updateLocale(){l(this,this.effectiveLocale);this.hourCycle=g(this.effectiveLocale,this.numberingSystem);this.setValue(this.value,false)}connectedCallback(){o(this);this.updateLocale();h(this);this.meridiemOrder=this.getMeridiemOrder(k({value:"0:00:00",locale:this.effectiveLocale,numberingSystem:this.numberingSystem}))}async componentWillLoad(){D(this);await u(this)}componentDidLoad(){I(this)}disconnectedCallback(){c(this);d(this)}render(){const t=r(this.hour);const i=this.scale==="s"||this.scale==="m"?"s":"m";const s=r(this.minute);const a=r(this.second);const n=this.hourCycle==="12";return e("div",{class:{[M.timePicker]:true,[M.showMeridiem]:n,[M.showSecond]:this.showSecond,[M[`scale-${this.scale}`]]:true},dir:"ltr"},e("div",{class:M.column,role:"group"},e("span",{"aria-label":this.messages.hourUp,class:{[M.button]:true,[M.buttonHourUp]:true,[M.buttonTopLeft]:true},onClick:this.incrementHour,onKeyDown:this.hourUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.messages.hour,"aria-valuemax":"23","aria-valuemin":"1","aria-valuenow":t&&parseInt(this.hour)||"0","aria-valuetext":this.hour,class:{[M.input]:true,[M.hour]:true},onFocus:this.focusHandler,onKeyDown:this.hourKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setHourEl},this.localizedHour||"--"),e("span",{"aria-label":this.messages.hourDown,class:{[M.button]:true,[M.buttonHourDown]:true,[M.buttonBottomLeft]:true},onClick:this.decrementHour,onKeyDown:this.hourDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))),e("span",{class:M.delimiter},this.localizedHourSuffix),e("div",{class:M.column,role:"group"},e("span",{"aria-label":this.messages.minuteUp,class:{[M.button]:true,[M.buttonMinuteUp]:true},onClick:this.incrementMinute,onKeyDown:this.minuteUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.messages.minute,"aria-valuemax":"12","aria-valuemin":"1","aria-valuenow":s&&parseInt(this.minute)||"0","aria-valuetext":this.minute,class:{[M.input]:true,[M.minute]:true},onFocus:this.focusHandler,onKeyDown:this.minuteKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setMinuteEl},this.localizedMinute||"--"),e("span",{"aria-label":this.messages.minuteDown,class:{[M.button]:true,[M.buttonMinuteDown]:true},onClick:this.decrementMinute,onKeyDown:this.minuteDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))),this.showSecond&&e("span",{class:M.delimiter},this.localizedMinuteSuffix),this.showSecond&&e("div",{class:M.column,role:"group"},e("span",{"aria-label":this.messages.secondUp,class:{[M.button]:true,[M.buttonSecondUp]:true},onClick:this.incrementSecond,onKeyDown:this.secondUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.messages.second,"aria-valuemax":"59","aria-valuemin":"0","aria-valuenow":a&&parseInt(this.second)||"0","aria-valuetext":this.second,class:{[M.input]:true,[M.second]:true},onFocus:this.focusHandler,onKeyDown:this.secondKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setSecondEl},this.localizedSecond||"--"),e("span",{"aria-label":this.messages.secondDown,class:{[M.button]:true,[M.buttonSecondDown]:true},onClick:this.decrementSecond,onKeyDown:this.secondDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))),this.localizedSecondSuffix&&e("span",{class:M.delimiter},this.localizedSecondSuffix),n&&e("div",{class:{[M.column]:true,[M.meridiemStart]:this.meridiemOrder===0},role:"group"},e("span",{"aria-label":this.messages.meridiemUp,class:{[M.button]:true,[M.buttonMeridiemUp]:true,[M.buttonTopRight]:true},onClick:this.incrementMeridiem,onKeyDown:this.meridiemUpButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-up",scale:i})),e("span",{"aria-label":this.messages.meridiem,"aria-valuemax":"2","aria-valuemin":"1","aria-valuenow":this.meridiem==="PM"&&"2"||"1","aria-valuetext":this.meridiem,class:{[M.input]:true,[M.meridiem]:true},onFocus:this.focusHandler,onKeyDown:this.meridiemKeyDownHandler,role:"spinbutton",tabIndex:0,ref:this.setMeridiemEl},this.localizedMeridiem||"--"),e("span",{"aria-label":this.messages.meridiemDown,class:{[M.button]:true,[M.buttonMeridiemDown]:true,[M.buttonBottomRight]:true},onClick:this.decrementMeridiem,onKeyDown:this.meridiemDownButtonKeyDownHandler,role:"button",tabIndex:-1},e("calcite-icon",{icon:"chevron-down",scale:i}))))}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{value:["valueWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleWatcher"]}}};S.style=A;export{S as calcite_time_picker};
//# sourceMappingURL=p-94aac460.entry.js.map