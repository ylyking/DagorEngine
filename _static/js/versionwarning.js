!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){const n=t(1);function o(e){console.debug("checkVersion");var r=e.version;console.debug("Running version: "+r.slug);var t={project__slug:e.project.slug,active:"true"};$.ajax({url:e.meta.api_url+"version/",data:t,success:function(t){highest_version=function(e){var r;return console.debug("getHighestVersion"),$.each(e,function(e,t){n.valid(n.coerce(t.slug))&&(r?n.valid(n.coerce(t.slug))&&n.valid(n.coerce(r.slug))&&n.gt(n.coerce(t.slug),n.coerce(r.slug))&&(r=t):r=t)}),r}(t.results),n.valid(n.coerce(r.slug))&&n.valid(n.coerce(highest_version.slug))&&n.lt(n.coerce(r.slug),n.coerce(highest_version.slug))&&(console.debug("Highest version: "+highest_version.slug),function(e,r,t){console.debug("injectVersionWarningBanner");var n=window.location.pathname.replace(e.slug,r.slug),o=$(t.banner.html);o.find("a").attr("href",n).text(r.slug),$(t.banner.body_selector).prepend(o)}(r,highest_version,e))},error:function(){console.error("Error loading Read the Docs active versions.")}})}function i(){console.debug("init");var e=$("script[src*=versionwarning]").attr("src");e=e.replace("versionwarning.js",""),$.ajax({url:e+"../../_static/data/versionwarning-data.json",success:function(e){document.getElementById(e.banner.id_div)?console.debug("There is already a banner added. No checking versions."):e.banner.custom?function(e){console.debug("injectCustomWarningBanner");var r=$(e.banner.html);$(e.banner.body_selector).prepend(r)}(e):o(e)},error:function(){console.error("Error loading versionwarning-data.json")}})}$(document).ready(function(){i()})},function(e,r,t){(function(t){var n;r=e.exports=W,n="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var o=256,i=Number.MAX_SAFE_INTEGER||9007199254740991,s=r.re=[],a=r.src=[],u=0,c=u++;a[c]="0|[1-9]\\d*";var l=u++;a[l]="[0-9]+";var p=u++;a[p]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var h=u++;a[h]="("+a[c]+")\\.("+a[c]+")\\.("+a[c]+")";var f=u++;a[f]="("+a[l]+")\\.("+a[l]+")\\.("+a[l]+")";var v=u++;a[v]="(?:"+a[c]+"|"+a[p]+")";var m=u++;a[m]="(?:"+a[l]+"|"+a[p]+")";var g=u++;a[g]="(?:-("+a[v]+"(?:\\."+a[v]+")*))";var d=u++;a[d]="(?:-?("+a[m]+"(?:\\."+a[m]+")*))";var w=u++;a[w]="[0-9A-Za-z-]+";var y=u++;a[y]="(?:\\+("+a[w]+"(?:\\."+a[w]+")*))";var b=u++,j="v?"+a[h]+a[g]+"?"+a[y]+"?";a[b]="^"+j+"$";var E="[v=\\s]*"+a[f]+a[d]+"?"+a[y]+"?",T=u++;a[T]="^"+E+"$";var $=u++;a[$]="((?:<|>)?=?)";var _=u++;a[_]=a[l]+"|x|X|\\*";var k=u++;a[k]=a[c]+"|x|X|\\*";var x=u++;a[x]="[v=\\s]*("+a[k]+")(?:\\.("+a[k]+")(?:\\.("+a[k]+")(?:"+a[g]+")?"+a[y]+"?)?)?";var P=u++;a[P]="[v=\\s]*("+a[_]+")(?:\\.("+a[_]+")(?:\\.("+a[_]+")(?:"+a[d]+")?"+a[y]+"?)?)?";var S=u++;a[S]="^"+a[$]+"\\s*"+a[x]+"$";var R=u++;a[R]="^"+a[$]+"\\s*"+a[P]+"$";var I=u++;a[I]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var V=u++;a[V]="(?:~>?)";var O=u++;a[O]="(\\s*)"+a[V]+"\\s+",s[O]=new RegExp(a[O],"g");var A=u++;a[A]="^"+a[V]+a[x]+"$";var M=u++;a[M]="^"+a[V]+a[P]+"$";var C=u++;a[C]="(?:\\^)";var N=u++;a[N]="(\\s*)"+a[C]+"\\s+",s[N]=new RegExp(a[N],"g");var L=u++;a[L]="^"+a[C]+a[x]+"$";var B=u++;a[B]="^"+a[C]+a[P]+"$";var D=u++;a[D]="^"+a[$]+"\\s*("+E+")$|^$";var q=u++;a[q]="^"+a[$]+"\\s*("+j+")$|^$";var X=u++;a[X]="(\\s*)"+a[$]+"\\s*("+E+"|"+a[x]+")",s[X]=new RegExp(a[X],"g");var z=u++;a[z]="^\\s*("+a[x]+")\\s+-\\s+("+a[x]+")\\s*$";var G=u++;a[G]="^\\s*("+a[P]+")\\s+-\\s+("+a[P]+")\\s*$";var Z=u++;a[Z]="(<|>)?=?\\s*\\*";for(var H=0;H<u;H++)n(H,a[H]),s[H]||(s[H]=new RegExp(a[H]));function U(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof W)return e;if("string"!=typeof e)return null;if(e.length>o)return null;if(!(r.loose?s[T]:s[b]).test(e))return null;try{return new W(e,r)}catch(e){return null}}function W(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof W){if(e.loose===r.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>o)throw new TypeError("version is longer than "+o+" characters");if(!(this instanceof W))return new W(e,r);n("SemVer",e,r),this.options=r,this.loose=!!r.loose;var t=e.trim().match(r.loose?s[T]:s[b]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<i)return r}return e}):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}r.parse=U,r.valid=function(e,r){var t=U(e,r);return t?t.version:null},r.clean=function(e,r){var t=U(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null},r.SemVer=W,W.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},W.prototype.toString=function(){return this.version},W.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof W||(e=new W(e,this.options)),this.compareMain(e)||this.comparePre(e)},W.prototype.compareMain=function(e){return e instanceof W||(e=new W(e,this.options)),J(this.major,e.major)||J(this.minor,e.minor)||J(this.patch,e.patch)},W.prototype.comparePre=function(e){if(e instanceof W||(e=new W(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],o=e.prerelease[r];if(n("prerelease compare",r,t,o),void 0===t&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===t)return-1;if(t!==o)return J(t,o)}while(++r)},W.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new W(e,t).inc(r,n).version}catch(e){return null}},r.diff=function(e,r){if(ee(e,r))return null;var t=U(e),n=U(r);if(t.prerelease.length||n.prerelease.length){for(var o in t)if(("major"===o||"minor"===o||"patch"===o)&&t[o]!==n[o])return"pre"+o;return"prerelease"}for(var o in t)if(("major"===o||"minor"===o||"patch"===o)&&t[o]!==n[o])return o},r.compareIdentifiers=J;var F=/^[0-9]+$/;function J(e,r){var t=F.test(e),n=F.test(r);return t&&n&&(e=+e,r=+r),t&&!n?-1:n&&!t?1:e<r?-1:e>r?1:0}function K(e,r,t){return new W(e,t).compare(new W(r,t))}function Q(e,r,t){return K(e,r,t)>0}function Y(e,r,t){return K(e,r,t)<0}function ee(e,r,t){return 0===K(e,r,t)}function re(e,r,t){return 0!==K(e,r,t)}function te(e,r,t){return K(e,r,t)>=0}function ne(e,r,t){return K(e,r,t)<=0}function oe(e,r,t,n){var o;switch(r){case"===":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e===t;break;case"!==":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e!==t;break;case"":case"=":case"==":o=ee(e,t,n);break;case"!=":o=re(e,t,n);break;case">":o=Q(e,t,n);break;case">=":o=te(e,t,n);break;case"<":o=Y(e,t,n);break;case"<=":o=ne(e,t,n);break;default:throw new TypeError("Invalid operator: "+r)}return o}function ie(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ie){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof ie))return new ie(e,r);n("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===se?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}r.rcompareIdentifiers=function(e,r){return J(r,e)},r.major=function(e,r){return new W(e,r).major},r.minor=function(e,r){return new W(e,r).minor},r.patch=function(e,r){return new W(e,r).patch},r.compare=K,r.compareLoose=function(e,r){return K(e,r,!0)},r.rcompare=function(e,r,t){return K(r,e,t)},r.sort=function(e,t){return e.sort(function(e,n){return r.compare(e,n,t)})},r.rsort=function(e,t){return e.sort(function(e,n){return r.rcompare(e,n,t)})},r.gt=Q,r.lt=Y,r.eq=ee,r.neq=re,r.gte=te,r.lte=ne,r.cmp=oe,r.Comparator=ie;var se={};function ae(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ae)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new ae(e.raw,r);if(e instanceof ie)return new ae(e.value,r);if(!(this instanceof ae))return new ae(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function ue(e){return!e||"x"===e.toLowerCase()||"*"===e}function ce(e,r,t,n,o,i,s,a,u,c,l,p,h){return((r=ue(t)?"":ue(n)?">="+t+".0.0":ue(o)?">="+t+"."+n+".0":">="+r)+" "+(a=ue(u)?"":ue(c)?"<"+(+u+1)+".0.0":ue(l)?"<"+u+"."+(+c+1)+".0":p?"<="+u+"."+c+"."+l+"-"+p:"<="+a)).trim()}function le(e,r,t){for(var o=0;o<e.length;o++)if(!e[o].test(r))return!1;if(t||(t={}),r.prerelease.length&&!t.includePrerelease){for(o=0;o<e.length;o++)if(n(e[o].semver),e[o].semver!==se&&e[o].semver.prerelease.length>0){var i=e[o].semver;if(i.major===r.major&&i.minor===r.minor&&i.patch===r.patch)return!0}return!1}return!0}function pe(e,r,t){try{r=new ae(r,t)}catch(e){return!1}return r.test(e)}function he(e,r,t,n){var o,i,s,a,u;switch(e=new W(e,n),r=new ae(r,n),t){case">":o=Q,i=ne,s=Y,a=">",u=">=";break;case"<":o=Y,i=te,s=Q,a="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(pe(e,r,n))return!1;for(var c=0;c<r.set.length;++c){var l=null,p=null;if(r.set[c].forEach(function(e){e.semver===se&&(e=new ie(">=0.0.0")),l=l||e,p=p||e,o(e.semver,l.semver,n)?l=e:s(e.semver,p.semver,n)&&(p=e)}),l.operator===a||l.operator===u)return!1;if((!p.operator||p.operator===a)&&i(e,p.semver))return!1;if(p.operator===u&&s(e,p.semver))return!1}return!0}ie.prototype.parse=function(e){var r=this.options.loose?s[D]:s[q],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new W(t[2],this.options.loose):this.semver=se},ie.prototype.toString=function(){return this.value},ie.prototype.test=function(e){return n("Comparator.test",e,this.options.loose),this.semver===se||("string"==typeof e&&(e=new W(e,this.options)),oe(e,this.operator,this.semver,this.options))},ie.prototype.intersects=function(e,r){if(!(e instanceof ie))throw new TypeError("a Comparator is required");var t;if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return t=new ae(e.value,r),pe(this.value,t,r);if(""===e.operator)return t=new ae(this.value,r),pe(e.semver,t,r);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),o=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=oe(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=oe(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||o||i&&s||a||u},r.Range=ae,ae.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},ae.prototype.toString=function(){return this.range},ae.prototype.parseRange=function(e){var r=this.options.loose;e=e.trim();var t=r?s[G]:s[z];e=e.replace(t,ce),n("hyphen replace",e),e=e.replace(s[X],"$1$2$3"),n("comparator trim",e,s[X]),e=(e=(e=e.replace(s[O],"$1~")).replace(s[N],"$1^")).split(/\s+/).join(" ");var o=r?s[D]:s[q],i=e.split(" ").map(function(e){return function(e,r){return n("comp",e,r),e=function(e,r){return e.trim().split(/\s+/).map(function(e){return function(e,r){n("caret",e,r),r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1});var t=r.loose?s[B]:s[L];return e.replace(t,function(r,t,o,i,s){var a;return n("caret",e,r,t,o,i,s),ue(t)?a="":ue(o)?a=">="+t+".0.0 <"+(+t+1)+".0.0":ue(i)?a="0"===t?">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":">="+t+"."+o+".0 <"+(+t+1)+".0.0":s?(n("replaceCaret pr",s),"-"!==s.charAt(0)&&(s="-"+s),a="0"===t?"0"===o?">="+t+"."+o+"."+i+s+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+s+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+s+" <"+(+t+1)+".0.0"):(n("no pr"),a="0"===t?"0"===o?">="+t+"."+o+"."+i+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+" <"+(+t+1)+".0.0"),n("caret return",a),a})}(e,r)}).join(" ")}(e,r),n("caret",e),e=function(e,r){return e.trim().split(/\s+/).map(function(e){return function(e,r){r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1});var t=r.loose?s[M]:s[A];return e.replace(t,function(r,t,o,i,s){var a;return n("tilde",e,r,t,o,i,s),ue(t)?a="":ue(o)?a=">="+t+".0.0 <"+(+t+1)+".0.0":ue(i)?a=">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":s?(n("replaceTilde pr",s),"-"!==s.charAt(0)&&(s="-"+s),a=">="+t+"."+o+"."+i+s+" <"+t+"."+(+o+1)+".0"):a=">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0",n("tilde return",a),a})}(e,r)}).join(" ")}(e,r),n("tildes",e),e=function(e,r){return n("replaceXRanges",e,r),e.split(/\s+/).map(function(e){return function(e,r){e=e.trim(),r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1});var t=r.loose?s[R]:s[S];return e.replace(t,function(r,t,o,i,s,a){n("xRange",e,r,t,o,i,s,a);var u=ue(o),c=u||ue(i),l=c||ue(s),p=l;return"="===t&&p&&(t=""),u?r=">"===t||"<"===t?"<0.0.0":"*":t&&p?(c&&(i=0),l&&(s=0),">"===t?(t=">=",c?(o=+o+1,i=0,s=0):l&&(i=+i+1,s=0)):"<="===t&&(t="<",c?o=+o+1:i=+i+1),r=t+o+"."+i+"."+s):c?r=">="+o+".0.0 <"+(+o+1)+".0.0":l&&(r=">="+o+"."+i+".0 <"+o+"."+(+i+1)+".0"),n("xRange return",r),r})}(e,r)}).join(" ")}(e,r),n("xrange",e),e=function(e,r){return n("replaceStars",e,r),e.trim().replace(s[Z],"")}(e,r),n("stars",e),e}(e,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter(function(e){return!!e.match(o)})),i=i.map(function(e){return new ie(e,this.options)},this)},ae.prototype.intersects=function(e,r){if(!(e instanceof ae))throw new TypeError("a Range is required");return this.set.some(function(t){return t.every(function(t){return e.set.some(function(e){return e.every(function(e){return t.intersects(e,r)})})})})},r.toComparators=function(e,r){return new ae(e,r).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},ae.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new W(e,this.options));for(var r=0;r<this.set.length;r++)if(le(this.set[r],e,this.options))return!0;return!1},r.satisfies=pe,r.maxSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ae(r,t)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(n&&-1!==o.compare(e)||(o=new W(n=e,t)))}),n},r.minSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ae(r,t)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(n&&1!==o.compare(e)||(o=new W(n=e,t)))}),n},r.validRange=function(e,r){try{return new ae(e,r).range||"*"}catch(e){return null}},r.ltr=function(e,r,t){return he(e,r,"<",t)},r.gtr=function(e,r,t){return he(e,r,">",t)},r.outside=he,r.prerelease=function(e,r){var t=U(e,r);return t&&t.prerelease.length?t.prerelease:null},r.intersects=function(e,r,t){return e=new ae(e,t),r=new ae(r,t),e.intersects(r)},r.coerce=function(e){if(e instanceof W)return e;if("string"!=typeof e)return null;var r=e.match(s[I]);return null==r?null:U((r[1]||"0")+"."+(r[2]||"0")+"."+(r[3]||"0"))}}).call(this,t(2))},function(e,r){var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,p=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var r=c.length;r;){for(u=c,c=[];++p<r;)u&&u[p].run();p=-1,r=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function v(e,r){this.fun=e,this.array=r}function m(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new v(e,r)),1!==c.length||l||a(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);