import{r as t,h as s,H as e}from"./p-b018321c.js";import{b as i,a as l}from"./p-db75c0d1.js";const o=":host{display:block}#status-history-list{overflow:hidden;transition:max-height 0.2s ease-out;transition:0.4s}.status-day::before{position:absolute;top:0;left:19px;display:block;content:\"\";width:3px;height:100%;background-color:#e6ebf1}.status-day,#st2atus-history-list{position:relative;padding-top:1.5rem;padding-bottom:1.5rem;padding-left:3rem;margin-top:0 !important}.status-day .date::before{position:absolute;top:1rem;left:0rem;display:block;content:\"\";width:2.5rem;height:2.5rem;background:#24292e url(\"data:image/svg+xml;charset=utf8,%3Csvg width='14' height='16' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13 2H12V3.5C12 3.78 11.78 4 11.5 4H9.5C9.22 4 9 3.78 9 3.5V2H6V3.5C6 3.78 5.78 4 5.5 4H3.5C3.22 4 3 3.78 3 3.5V2H2C1.45 2 1 2.45 1 3V14C1 14.55 1.45 15 2 15H13C13.55 15 14 14.55 14 14V3C14 2.45 13.55 2 13 2ZM13 14H2V5H13V14ZM5 3H4V1H5V3ZM11 3H10V1H11V3ZM6 7H5V6H6V7ZM8 7H7V6H8V7ZM10 7H9V6H10V7ZM12 7H11V6H12V7ZM4 9H3V8H4V9ZM6 9H5V8H6V9ZM8 9H7V8H8V9ZM10 9H9V8H10V9ZM12 9H11V8H12V9ZM4 11H3V10H4V11ZM6 11H5V10H6V11ZM8 11H7V10H8V11ZM10 11H9V10H10V11ZM12 11H11V10H12V11ZM4 13H3V12H4V13ZM6 13H5V12H6V13ZM8 13H7V12H8V13ZM10 13H9V12H10V13Z' fill='%23fff'/%3E%3C/svg%3e\") no-repeat center center;border-radius:50%}.status-event-none{font-style:italic;color:#666666}";const r=class{constructor(s){t(this,s);this.history=null;this.days=30;this.events=null}componentWillLoad(){this.events=i(this.history)}render(){var t=(new Date).getDate();var i=new Intl.DateTimeFormat("en",{year:"numeric",month:"long",day:"2-digit"});return s(e,null,s("slot",null),s("div",{id:"status-history-list"},[...Array(30).keys()].map((s=>{var e=(new Date).setDate(t-s);var l=i.format(e);return this.renderDay(l,this.events[l])}))))}renderDay(t,e){var i;if(!!e){i=e.map((t=>s("div",{class:"status-event"},l(t.details.status,t.details.message).message,s("br",null),s("em",null,"at ",t.timestamp))))}else{i=[s("div",{class:"status-event status-event-none"},"No incidents reported.")]}return s("div",{class:"status-day"},s("div",{class:"date"},t),s("br",null),i)}};r.style=o;const a=":host{display:block}.services-list{display:grid;grid-template-rows:auto;grid-gap:1rem}";const n=class{constructor(s){t(this,s);this.services=null}render(){console.debug("services",this.services);return s(e,null,s("slot",null),s("div",{class:"services-list"},this.services.map((t=>s("hub-status-service",{service:t}," ")))))}};n.style=a;const d=":host{display:block}";const u=class{constructor(s){t(this,s);this.status=null}render(){var t,i,o;return s(e,null,s("slot",null),s("em",{id:"current-timestamp"}),s("calcite-notice",{open:true,id:"status-notice",icon:l((t=this.status)===null||t===void 0?void 0:t.status).icon,width:"full",scale:"m",kind:"success"},s("div",{id:"status-title",slot:"title"},(i=this.status)===null||i===void 0?void 0:i.title),s("div",{id:"status-message",slot:"message"},(o=this.status)===null||o===void 0?void 0:o.message),s("calcite-link",{href:"http://support.esri.com/contact-tech-support",slot:"link",title:"my action"},"Report an Issue")))}};u.style=d;export{r as hub_status_history,n as hub_status_service_list,u as hub_status_summary};
//# sourceMappingURL=p-5ed61541.entry.js.map