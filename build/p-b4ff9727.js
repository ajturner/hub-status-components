/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
function n(n){const{r,g:t,b:s}=n;return`#${r.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}`.toLowerCase()}const r=/^[0-9A-F]$/i;const t=/^#[0-9A-F]{3}$/i;const s=/^#[0-9A-F]{6}$/i;function e(n){return u(n)||i(n)}function u(n){return n&&n.length===4&&t.test(n)}function i(n){return n&&n.length===7&&s.test(n)}function c(r){r=r.toLowerCase();if(!r.startsWith("#")){r=`#${r}`}if(u(r)){return n(o(r))}return r}function o(n){if(!e(n)){return null}n=n.replace("#","");if(n.length===3){const[r,t,s]=n.split("");const e=parseInt(`${r}${r}`,16);const u=parseInt(`${t}${t}`,16);const i=parseInt(`${s}${s}`,16);return{r:e,g:u,b:i}}const r=parseInt(n.slice(0,2),16);const t=parseInt(n.slice(2,4),16);const s=parseInt(n.slice(4,6),16);return{r,g:t,b:s}}const a=n=>n;const f=a({HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"});const h=a({RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"});function S(n){if(typeof n==="string"){if(n.startsWith("#")){const{length:r}=n;if(r===4||r===7){return f.HEX}if(r===5||r===9){return f.HEXA}}if(n.startsWith("rgba(")){return f.RGBA_CSS}if(n.startsWith("rgb(")){return f.RGB_CSS}if(n.startsWith("hsl(")){return f.HSL_CSS}if(n.startsWith("hsla(")){return f.HSLA_CSS}}if(typeof n==="object"){if($(n,"r","g","b")){return $(n,"a")?h.RGBA:h.RGB}if($(n,"h","s","l")){return $(n,"a")?h.HSLA:h.HSL}if($(n,"h","s","v")){return $(n,"a")?h.HSVA:h.HSV}}return null}function $(n,...r){return r.every((r=>r&&n&&`${r}`in n))}function b(n,r){return n?.rgbNumber()===r?.rgbNumber()}export{f as C,i as a,r as b,b as c,o as h,e as i,c as n,S as p,n as r};
//# sourceMappingURL=p-b4ff9727.js.map