import{r as t,h as s,H as e}from"./p-01ad4c17.js";import{g as o}from"./p-db75c0d1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const n="calcite-mode-auto";const c="calcite-mode-dark";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */function i(){const{classList:t}=document.body;const s=window.matchMedia("(prefers-color-scheme: dark)").matches;const e=()=>t.contains(c)||t.contains(n)&&s?"dark":"light";const o=t=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:t}}));const i=t=>{a!==t&&o(t);a=t};let a=e();o(a);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>i(t.matches?"dark":"light")));new MutationObserver((()=>i(e()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function a(){const t=typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;if(t){if(document.readyState==="interactive"){i()}else{document.addEventListener("DOMContentLoaded",(()=>i()),{once:true})}}}const u=a;u();const r=":host{display:block}";const d=class{constructor(s){t(this,s);this.statusData=undefined}async componentWillLoad(){this.statusData=await o("./data/status.json");console.debug("statusData",this.statusData)}render(){return s(e,null,s("slot",null),s("h3",null,"Current Status"),s("hub-status-summary",{status:this.statusData.overview}," "),s("h3",null,"Details"),s("hub-status-service-list",{services:this.statusData.services}," "),s("h3",null,"History"),s("hub-status-history",{history:this.statusData.history}," "))}};d.style=r;export{d as hub_status_view};
//# sourceMappingURL=p-ef9ee99d.entry.js.map