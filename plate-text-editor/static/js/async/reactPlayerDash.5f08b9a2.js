/*! For license information please see reactPlayerDash.5f08b9a2.js.LICENSE.txt */
"use strict";(self.webpackChunkplate_text_editor=self.webpackChunkplate_text_editor||[]).push([["280"],{61121(t,e,i){i.d(e,{lB:()=>d});let s=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],n=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function r(t){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${o(t)}></audio>
    </slot>
    <slot></slot>
  `}function a(t){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${o(t)}></video>
    </slot>
    <slot></slot>
  `}function l(t,{tag:e,is:i}){let l=globalThis.document?.createElement?.(e,{is:i}),o=l?function(t){let e=[];for(let i=Object.getPrototypeOf(t);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let t=Object.getOwnPropertyNames(i);e.push(...t)}return e}(l):[];return class d extends t{static getTemplateHTML=e.endsWith("audio")?r:a;static shadowRootOptions={mode:"open"};static Events=s;static #t=!1;static get observedAttributes(){return d.#e(),[...l?.constructor?.observedAttributes??[],...n]}static #e(){if(this.#t)return;this.#t=!0;let t=new Set(this.observedAttributes);for(let e of(t.delete("muted"),o))if(!(e in this.prototype))if("function"==typeof l[e])this.prototype[e]=function(...t){return this.#i(),(()=>{if(this.call)return this.call(e,...t);let i=this.nativeEl?.[e];return i?.apply(this.nativeEl,t)})()};else{let i={get(){this.#i();let i=e.toLowerCase();if(t.has(i)){let t=this.getAttribute(i);return null!==t&&(""===t||t)}return this.get?.(e)??this.nativeEl?.[e]}};e!==e.toUpperCase()&&(i.set=function(i){this.#i();let s=e.toLowerCase();t.has(s)?!0===i||!1===i||null==i?this.toggleAttribute(s,!!i):this.setAttribute(s,i):this.set?this.set(e,i):this.nativeEl&&(this.nativeEl[e]=i)}),Object.defineProperty(this.prototype,e,i)}}#s=!1;#n=null;#r=new Map;#a;get;set;call;get nativeEl(){return this.#i(),this.#n??this.querySelector(":scope > [slot=media]")??this.querySelector(e)??this.shadowRoot?.querySelector(e)??null}set nativeEl(t){this.#n=t}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(t){this.toggleAttribute("muted",t)}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",`${t}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(t){this.setAttribute("preload",`${t}`)}#i(){this.#s||(this.#s=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let t=function(t){let e={};for(let i of t)e[i.name]=i.value;return e}(this.attributes);i&&(t.is=i),e&&(t.part=e),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}for(let t of(this.nativeEl.muted=this.hasAttribute("muted"),o))this.#l(t);for(let t of(this.#a=new MutationObserver(this.#o.bind(this)),this.shadowRoot.addEventListener("slotchange",()=>this.#d()),this.#d(),this.constructor.Events))this.shadowRoot.addEventListener(t,this,!0)}handleEvent(t){t.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(t.type,{detail:t.detail}))}#d(){let t=new Map(this.#r),e=this.shadowRoot?.querySelector("slot:not([name])");(e?.assignedElements({flatten:!0}).filter(t=>["track","source"].includes(t.localName))).forEach(e=>{t.delete(e);let i=this.#r.get(e);i||(i=e.cloneNode(),this.#r.set(e,i),this.#a?.observe(e,{attributes:!0})),this.nativeEl?.append(i),this.#u(i)}),t.forEach((t,e)=>{t.remove(),this.#r.delete(e)})}#o(t){for(let e of t)if("attributes"===e.type){let{target:t,attributeName:i}=e,s=this.#r.get(t);s&&i&&(s.setAttribute(i,t.getAttribute(i)??""),this.#u(s))}}#u(t){t&&"track"===t.localName&&t.default&&("chapters"===t.kind||"metadata"===t.kind)&&"disabled"===t.track.mode&&(t.track.mode="hidden")}#l(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(t,e,i){this.#i(),this.#c(t,e,i)}#c(t,e,i){["id","class"].includes(t)||!d.observedAttributes.includes(t)&&this.constructor.observedAttributes.includes(t)||(null===i?this.nativeEl?.removeAttribute(t):this.nativeEl?.getAttribute(t)!==i&&this.nativeEl?.setAttribute(t,i))}connectedCallback(){this.#i()}}}function o(t){let e="";for(let i in t){if(!n.includes(i))continue;let s=t[i];""===s?e+=` ${i}`:e+=` ${i}="${s}"`}return e}let d=l(globalThis.HTMLElement??class{},{tag:"video"});l(globalThis.HTMLElement??class{},{tag:"audio"})},10309(t,e,i){i.r(e),i.d(e,{default:()=>c});var s=i(43272),n=i(61121);class r extends n.lB{static shadowRootOptions={...n.lB.shadowRootOptions};static getTemplateHTML=t=>{let{src:e,...i}=t;return n.lB.getTemplateHTML(i)};#h;attributeChangedCallback(t,e,i){"src"!==t&&super.attributeChangedCallback(t,e,i),"src"===t&&e!=i&&this.load()}async load(){if(this.#h)this.api.attachSource(this.src);else{this.#h=!0;let t=await i.e("588").then(i.bind(i,20303));this.api=t.MediaPlayer().create(),this.api.initialize(this.nativeEl,this.src,this.autoplay)}}}globalThis.customElements&&!globalThis.customElements.get("dash-video")&&globalThis.customElements.define("dash-video",r);var a=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),l={className:"class",htmlFor:"for"};function o(t){return t.toLowerCase()}function d(t){return"boolean"==typeof t?t?"":void 0:"function"==typeof t?void 0:"object"!=typeof t||null===t?t:void 0}function u(t,e,i){var s;t[e]=i,null==i&&e in((null==(s=globalThis.HTMLElement)?void 0:s.prototype)??{})&&t.removeAttribute(e)}var c=function({react:t,tagName:e,elementClass:i,events:s,displayName:n,defaultProps:r,toAttributeName:c=o,toAttributeValue:h=d}){let p=Number.parseInt(t.version)>=19,f=t.forwardRef((n,o)=>{var f,b;let m=t.useRef(null),v=t.useRef(new Map),g={},y={},w={},E={};for(let[t,e]of Object.entries(n)){if(a.has(t)){w[t]=e;continue}let s=c(l[t]??t);if(t in i.prototype&&!(t in((null==(f=globalThis.HTMLElement)?void 0:f.prototype)??{}))&&!(null==(b=i.observedAttributes)?void 0:b.some(t=>t===s))){E[t]=e;continue}if(t.startsWith("on")){g[t]=e;continue}let n=h(e);s&&null!=n&&(y[s]=String(n),p||(w[s]=n)),s&&p&&(n!==d(e)?w[s]=n:w[s]=e)}if("u">typeof window){for(let e in g){let i=g[e],n=e.endsWith("Capture"),r=((null==s?void 0:s[e])??e.slice(2).toLowerCase()).slice(0,n?-7:void 0);t.useLayoutEffect(()=>{let t=null==m?void 0:m.current;if(t&&"function"==typeof i)return t.addEventListener(r,i,n),()=>{t.removeEventListener(r,i,n)}},[null==m?void 0:m.current,i])}t.useLayoutEffect(()=>{if(null===m.current)return;let t=new Map;for(let e in E)u(m.current,e,E[e]),v.current.delete(e),t.set(e,E[e]);for(let[t,e]of v.current)u(m.current,t,void 0);v.current=t})}if("u"<typeof window&&(null==i?void 0:i.getTemplateHTML)&&(null==i?void 0:i.shadowRootOptions)){let{mode:e,delegatesFocus:s}=i.shadowRootOptions;w.children=[t.createElement("template",{shadowrootmode:e,shadowrootdelegatesfocus:s,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(y,n)}}),w.children]}return t.createElement(e,{...r,...w,ref:t.useCallback(t=>{m.current=t,"function"==typeof o?o(t):null!==o&&(o.current=t)},[o])})});return f.displayName=n??i.name,f}({react:s,tagName:"dash-video",elementClass:r,toAttributeName:t=>"muted"===t?"":"defaultMuted"===t?"muted":o(t)})}}]);