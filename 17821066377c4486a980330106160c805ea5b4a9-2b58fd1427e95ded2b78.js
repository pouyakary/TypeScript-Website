(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[414],{6705:function(e,t){t.D=function(e,t,n){var r,i;void 0===t&&(t=50),void 0===n&&(n={});var o=null!=(r=n.isImmediate)&&r,s=n.maxWait,a=Date.now();function l(){if(void 0!==s){var e=Date.now()-a;if(e+t>=s)return s-e}return t}var c=function(){var t=[].slice.call(arguments),n=this,r=function(){i=void 0,a=Date.now(),o||e.apply(n,t)},s=o&&void 0===i;void 0!==i&&clearTimeout(i),i=setTimeout(r,l()),s&&e.apply(n,t)};return c.cancel=function(){void 0!==i&&clearTimeout(i)},c}},8639:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(8447),i=function(){return{sandboxRoot:(0,r.withPrefix)("/js/3798d09/sandbox"),playgroundRoot:(0,r.withPrefix)("/js/3798d09/playground")}}},2057:function(e,t,n){"use strict";n.d(t,{k:function(){return j}});var r=n(3415),i=n(6108),o=n(2332);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return(u=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&l(i,n.prototype),i}).apply(null,arguments)}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)})(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function h(e,t){switch(t){case"number":return+e;case"string":return e;case"boolean":return"true"===e.toLowerCase()||0===e.length}throw new y("Unknown primitive value in compiler flag","The only recognized primitives are number, string and boolean. Got "+t+" with "+e+".","This is likely a typo.")}var g=!1;try{g="undefined"!=typeof localStorage}catch(T){}var m=void 0!==i,v=g&&localStorage.getItem("DEBUG")||m&&{}.DEBUG?o.log:function(e){return""},y=function(e){var t,n;function r(t,n,r,i){var o,s="\n## "+t+"\n\n"+n+"\n";return r&&(s+="\n"+r),i&&(s+="\n"+i),(o=e.call(this,s)||this).title=void 0,o.description=void 0,o.recommendation=void 0,o.code=void 0,o.title=t,o.description=n,o.recommendation=r,o.code=i,o}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r}(f(Error));function b(e){for(var t=[],n=[],r=0,i=0,o=0,s=function(s){var l=e[s],c=function(){i=r,r+=l.length+1},u=function(t){v("Removing line "+s+" for "+t),o++,e.splice(s,1),s--};if(l.includes("//")){var f=/^\s*\/\/\s*\^+( .+)?$/.exec(l),p=/^\s*\/\/\s*\^\?\s*$/.exec(l),d=/^\s*\/\/ prettier-ignore$/.exec(l),h=/^\s*\/\/\s*\^\|$/.exec(l);if(null!==p){var g=l.indexOf("^");n.push({kind:"query",offset:g,text:void 0,docs:void 0,line:s+o-1}),u("having a query")}else if(null!==f){var m=l.indexOf("^"),y=l.lastIndexOf("^")-m+1,b=f[1]?f[1].trim():"";t.push({kind:"highlight",offset:m+i,length:y,text:b,line:s+o-1,start:m}),u("having a highlight")}else if(null!==d)u("being a prettier ignore");else if(null!==h){var w=l.indexOf("^");n.push({kind:"completion",offset:w,text:void 0,docs:void 0,line:s+o-1}),u("having a completion query")}else c()}else c();a=s},a=0;a<e.length;a++)s(a);return{highlights:t,queries:n}}function w(e,t,n){var r=n.get(t.toLowerCase());if(v("Get "+e+" mapped option: "+t+" => "+r),void 0===r){var i=Array.from(n.keys());throw new y("Invalid inline compiler value","Got "+t+" for "+e+" but it is not a supported value by the TS compiler.","Allowed values: "+i.join(","))}return r}function x(e,t,n,r){v("Setting "+e+" to "+t);for(var i,o=function(){var r=i.value;if(r.name.toLowerCase()===e.toLowerCase()){switch(r.type){case"number":case"string":case"boolean":n[r.name]=h(t,r.type);break;case"list":var o=r.element.type,s=t.split(",");n[r.name]="string"==typeof o?s.map((function(e){return h(e,o)})):s.map((function(e){return w(r.name,e,o)}));break;default:var a=r.type;n[r.name]=w(r.name,t,a)}return{v:void 0}}},s=d(r.optionDeclarations);!(i=s()).done;){var a=o();if("object"==typeof a)return a.v}throw new y("Invalid inline compiler flag","There isn't a TypeScript compiler flag called '"+e+"'.","This is likely a typo, you can check all the compiler flags in the TSConfig reference, or check the additional Twoslash flags in the npm page for @typescript/twoslash.")}var S=/^\/\/\s?@(\w+)$/,E=/^\/\/\s?@(\w+):\s?(.+)$/;var F={errors:[],noErrors:!1,showEmit:!1,showEmittedFile:void 0,noStaticSemanticInfo:!1,emit:!1,noErrorValidation:!1};function j(e,t,o){var a,l,c;void 0===o&&(o={});var u=null!=(a=o.tsModule)?a:n(9809),f=null!=(l=o.lzstringModule)?l:n(5472),p=e,h=function(e){var t={js:"js",javascript:"js",ts:"ts",typescript:"ts",tsx:"tsx",jsx:"jsx",json:"json",jsn:"json"};if(t[e])return t[e];throw new y("Unknown TypeScript extension given to Twoslash","Received "+e+" but Twoslash only accepts: "+Object.keys(t)+" ","")}(t),g="index."+h;v("\n\nLooking at code: \n```"+h+"\n"+e+"\n```\n");var m=s({strict:!0,target:u.ScriptTarget.ES2016,allowJs:!0},null!=(c=o.defaultCompilerOptions)?c:{});!function(e){if(e.includes("// @errors "))throw new y("You have '// @errors ' (with a space)","You want '// @errors: ' (with a colon)","This is a pretty common typo");if(e.includes("// @filename "))throw new y("You have '// @filename ' (with a space)","You want '// @filename: ' (with a colon)","This is a pretty common typo")}(e);var w=(e=function(e){return(e=e.replace(/¨D/g,"$")).replace(/¨T/g,"~")}(e)).split(/\r\n?|\n/g),j=o.customTags?function(e,t){for(var n=[],r=0;r<e.length;){var i;(i=E.exec(e[r]))&&t.includes(i[1])&&(n.push({name:i[1],line:r,annotation:e[r].split("@"+i[1]+": ")[1]}),e.splice(r,1)),r++}return n}(w,o.customTags):[],T=s({},function(e){for(var t=s({},F),n=0;n<e.length;n++){var r=void 0;(r=S.exec(e[n]))?r[1]in t&&(t[r[1]]=!0,v("Setting options."+r[1]+" to true"),e.splice(n,1),n--):(r=E.exec(e[n]))&&r[1]in t&&(t[r[1]]=r[2],v("Setting options."+r[1]+" to "+r[2]),e.splice(n,1),n--)}return"errors"in t&&"string"==typeof t.errors&&(t.errors=t.errors.split(" ").map(Number),v("Setting options.error to ",t.errors)),t}(w),o.defaultOptions),O=function(e,t,n){for(var r=s({},t),i=0;i<e.length;){var o=void 0;if(o=S.exec(e[i]))r[o[1]]=!0,x(o[1],"true",r,n);else{if(!(o=E.exec(e[i]))){i++;continue}if("filename"===o[1]){i++;continue}x(o[1],o[2],r,n)}e.splice(i,1)}return r}(w,m,u);T.showEmittedFile||(T.showEmittedFile=O.jsx&&O.jsx===u.JsxEmit.Preserve?"index.jsx":"index.js");var C=function(){var e=n(3768)("path");return(o.vfsRoot||i.cwd()).split(e.sep).join(e.posix.sep)},D=!!o.fsMap,P=D&&o.fsMap?o.fsMap:new Map,L=D?(0,r.FI)(P):(0,r.Lk)(P,C(),u),N=D?"/":C()+"/",I=(0,r.sE)(L,[],u,O,o.customTransformers),A=I.languageService;e=w.join("\n");for(var M,q=[],R=[],U=[],_=k(e,g,N),W=["js","jsx","ts","tsx"],$=_.map((function(e){return e[0]})),G=function(){var e=M.value,t=e[0],n=e[1],r=t.split(".").pop()||"",i=O.resolveJsonModule&&"json"===r;if(!W.includes(r)&&!i)return"continue";var o=n.join("\n");I.createFile(t,o);var s=b(n);U=U.concat(s.highlights);var a=s.queries.map((function(e,n){var r=I.getSourceFile(t),i=u.getPositionOfLineAndCharacter(r,e.line,e.offset);switch(e.kind){case"query":var o=A.getQuickInfoAtPosition(t,i);if(!o||!o.displayParts)throw new y("Invalid QuickInfo query","The request on line "+e.line+" in "+t+" for quickinfo via ^? returned no from the compiler.","This is likely that the x positioning is off.");return{kind:"query",text:o.displayParts.map((function(e){return e.text})).join(""),docs:o.documentation?o.documentation.map((function(e){return e.text})).join("<br/>"):void 0,line:e.line-n,offset:e.offset,file:t};case"completion":var s=A.getCompletionsAtPosition(t,i-1,{});if(!s&&!T.noErrorValidation)throw new y("Invalid completion query","The request on line "+e.line+" in "+t+" for completions via ^| returned no completions from the compiler.","This is likely that the positioning is off.");var a=function(e,t){e=String(e),t=Number(t)>>>0;var n=e.slice(0,t+1).search(/\S+$/),r=e.slice(t).search(/\s/);return r<0?{word:e.slice(n),startPos:n}:{word:e.slice(n,r+t),startPos:n}}(r.text,i-1),l=r.text.slice(a.startPos,i).split(".").pop()||"";return{kind:"completions",completions:(null==s?void 0:s.entries)||[],completionPrefix:l,line:e.line-n,offset:e.offset,file:t}}}));q=q.concat(a);var l=n.join("\n");I.updateFile(t,l)},V=d(_);!(M=V()).done;)G();var B=e.split(/\r\n?|\n/g);b(B),e=B.join("\n"),T.emit&&$.forEach((function(e){var t=e.split(".").pop()||"";W.includes(t)&&A.getEmitOutput(e).outputFiles.forEach((function(e){L.writeFile(e.name,e.text)}))}));var H=[],J=[];$.forEach((function(t){var n=t.split(".").pop()||"";if(W.includes(n)){T.noErrors||(H=H.concat(A.getSemanticDiagnostics(t),A.getSyntacticDiagnostics(t)));var r=I.sys.readFile(t),i=I.getSourceFile(t);if(!i)throw new y("Could not find a  TypeScript sourcefile for '"+t+"' in the Twoslash vfs","It's a little hard to provide useful advice on this error. Maybe you imported something which the compiler doesn't think is a source file?","");if(!T.showEmit){for(var o,s=-1==e.indexOf(r)?0:e.indexOf(r),a=e.slice(0,s).split("\n").length-1,l=d(T.noStaticSemanticInfo?[]:function(e,t){var n=[];return function r(i){e.forEachChild(i,(function(i){if(e.isIdentifier(i)){var o=i.getStart(t,!1);n.push({span:e.createTextSpan(o,i.end-o),text:i.getText(t)})}r(i)}))}(t),n}(u,i));!(o=l()).done;){var c=o.value,f=c.span,p=A.getQuickInfoAtPosition(t,f.start);if(p&&p.displayParts){var h=p.displayParts.map((function(e){return e.text})).join(""),g=c.text,m=p.documentation?p.documentation.map((function(e){return e.text})).join("\n"):void 0,v=f.start+s,b=u.createSourceFile("_.ts",e,u.ScriptTarget.ES2015),w=u.getLineAndCharacterOfPosition(b,v),x=w.line,S=w.character;J.push({text:h,docs:m,start:v,length:f.length,line:x,character:S,targetString:g})}}q.filter((function(e){return e.file===t})).forEach((function(e){var t=u.getPositionOfLineAndCharacter(i,e.line,e.offset)+s;switch(e.kind){case"query":R.push({docs:e.docs,kind:"query",start:t+s,length:e.text.length,text:e.text,offset:e.offset,line:e.line+a+1});break;case"completions":R.push({completions:e.completions,kind:"completions",start:t+s,completionsPrefix:e.completionPrefix,length:1,offset:e.offset,line:e.line+a+1})}}))}}}));var Y=H.filter((function(e){return e.file&&$.includes(e.file.fileName)}));!T.noErrorValidation&&Y.length&&function(e,t,n,r,i){var o=e.filter((function(e){return!t.errors.includes(e.code)})),s=Array.from(new Set(o.map((function(e){return e.code})))).join(" ");if(o.length){var a=new Set(e.map((function(e){return e.code}))),l="// @errors: "+Array.from(a).join(" "),c=t.errors.length?"\nThe existing annotation specified "+t.errors.join(" "):"\nExpected: "+l,u={},f=[];o.forEach((function(e){var t,n=(null==(t=e.file)?void 0:t.fileName)&&e.file.fileName.replace(i,"");if(n){var r=u[n];r?r.push(e):u[n]=[e]}else f.push(e)}));var p=function(e,t){return e+"\n  "+t.map((function(e){var t="string"==typeof e.messageText?e.messageText:e.messageText.messageText;return"["+e.code+"] "+e.start+" - "+t})).join("\n  ")},d=[];f.length&&d.push(p("Ambient Errors",f)),Object.keys(u).forEach((function(e){d.push(p(e,u[e]))}));var h=d.join("\n\n"),g=new y("Errors were thrown in the sample, but not included in an errors tag","These errors were not marked as being expected: "+s+". "+c,"Compiler Errors:\n\n"+h);throw g.code="## Code\n\n'''"+n+"\n"+r+"\n'''",g}}(Y,T,t,p,N);for(var Q,z=[],K=d(Y);!(Q=K()).done;){var X=Q.value,Z=I.sys.readFile(X.file.fileName),ee=e.indexOf(Z),te=u.flattenDiagnosticMessageText(X.messageText,"\n"),ne="err-"+X.code+"-"+X.start+"-"+X.length,re=u.getLineAndCharacterOfPosition(X.file,X.start),ie=re.line,oe=re.character;z.push({category:X.category,code:X.code,length:X.length,start:X.start?X.start+ee:void 0,line:ie,character:oe,renderedMessage:te,id:ne})}if(T.showEmit){var se=T.showEmittedFile||g,ae=N+se.replace(".jsx","").replace(".js","").replace(".d.ts","").replace(".map",""),le=$.find((function(e){return e===ae+".ts"||e===ae+".tsx"}));if(!le&&!O.outFile){var ce=$.join(", ");throw new y("Could not find source file to show the emit for","Cannot find the corresponding **source** file  "+se+" for completions via ^| returned no quickinfo from the compiler.","Looked for: "+ae+" in the vfs - which contains: "+ce)}O.outFile&&(le=$[0]);var ue=A.getEmitOutput(le),fe=ue.outputFiles.find((function(e){return e.name===N+T.showEmittedFile||e.name===T.showEmittedFile}));if(!fe){var pe=ue.outputFiles.map((function(e){return e.name})).join(", ");throw new y("Cannot find the output file in the Twoslash VFS","Looking for "+T.showEmittedFile+" in the Twoslash vfs after compiling",'Looked for" '+(N+T.showEmittedFile)+" in the vfs - which contains "+pe+".")}e=fe.text,t=fe.name.split(".").pop(),U=[],q=[],J=[]}var de="https://www.typescriptlang.org/play/#code/"+f.compressToEncodedURIComponent(p),he="// ---cut---\n";if(e.includes(he)){var ge=e.indexOf(he)+he.length,me=e.substr(0,ge).split("\n").length-1;e=e.split(he).pop(),J.forEach((function(e){e.start-=ge,e.line-=me})),J=J.filter((function(e){return e.start>-1})),z.forEach((function(e){e.start&&(e.start-=ge),e.line&&(e.line-=me)})),z=z.filter((function(e){return e.start&&e.start>-1})),U.forEach((function(e){e.start-=ge,e.line-=me})),U=U.filter((function(e){return e.start>-1})),R.forEach((function(e){return e.line-=me})),R=R.filter((function(e){return e.line>-1})),j.forEach((function(e){return e.line-=me})),j=j.filter((function(e){return e.line>-1}))}return{code:e,extension:t,highlights:U,queries:R,staticQuickInfos:J,errors:z,playgroundURL:de,tags:j}}var k=function(e,t,n){for(var r,i=e.split(/\r\n?|\n/g),o=e.includes("@filename: "+t)?"global.ts":t,s=[],a=[],l=d(i);!(r=l()).done;){var c=r.value;c.includes("// @filename: ")?(a.push([n+o,s]),o=c.split("// @filename: ")[1].trim(),s=[]):s.push(c)}return a.push([n+o,s]),a.filter((function(e){return e[1].length>0&&(e[1].length>1||""!==e[1][0])}))}},3415:function(e,t,n){"use strict";n.d(t,{yp:function(){return f},Lk:function(){return v},FI:function(){return m},sE:function(){return c}});var r=n(6108),i=n(2332);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=!1;try{s="undefined"!=typeof localStorage}catch(w){}var a=void 0!==r,l=s&&localStorage.getItem("DEBUG")||a&&{}.DEBUG?i.log:function(e){return""};function c(e,t,n,r,i){void 0===r&&(r={});var s=o({},h(n),r),a=function(e,t,n,r,i){var s=[].concat(t),a=y(e,n,r),l=a.compilerHost,c=a.updateFile,u=new Map,f=0;return{languageServiceHost:o({},l,{getProjectVersion:function(){return f.toString()},getCompilationSettings:function(){return n},getCustomTransformers:function(){return i},getScriptFileNames:function(){return s},getScriptSnapshot:function(t){var n=e.readFile(t);if(n)return r.ScriptSnapshot.fromString(n)},getScriptVersion:function(e){return u.get(e)||"0"},writeFile:e.writeFile}),updateFile:function(e){f++,u.set(e.fileName,f.toString()),s.includes(e.fileName)||s.push(e.fileName),c(e)}}}(e,t,s,n,i),l=a.languageServiceHost,c=a.updateFile,u=n.createLanguageService(l),f=u.getCompilerOptionsDiagnostics();if(f.length){var p=y(e,r,n);throw new Error(n.formatDiagnostics(f,p.compilerHost))}return{name:"vfs",sys:e,languageService:u,getSourceFile:function(e){var t;return null==(t=u.getProgram())?void 0:t.getSourceFile(e)},createFile:function(e,t){c(n.createSourceFile(e,t,s.target,!1))},updateFile:function(e,t,r){var i=u.getProgram().getSourceFile(e);if(!i)throw new Error("Did not find a source file for "+e);var o=i.text,s=null!=r?r:n.createTextSpan(0,o.length),a=o.slice(0,s.start)+t+o.slice(s.start+s.length),l=n.updateSourceFile(i,a,{span:s,newLength:t.length});c(l)}}}var u=function(e,t){var n,r=e.target||t.ScriptTarget.ES5,i=e.lib||[],o=["lib.d.ts","lib.dom.d.ts","lib.dom.iterable.d.ts","lib.webworker.d.ts","lib.webworker.importscripts.d.ts","lib.scripthost.d.ts","lib.es5.d.ts","lib.es6.d.ts","lib.es2015.collection.d.ts","lib.es2015.core.d.ts","lib.es2015.d.ts","lib.es2015.generator.d.ts","lib.es2015.iterable.d.ts","lib.es2015.promise.d.ts","lib.es2015.proxy.d.ts","lib.es2015.reflect.d.ts","lib.es2015.symbol.d.ts","lib.es2015.symbol.wellknown.d.ts","lib.es2016.array.include.d.ts","lib.es2016.d.ts","lib.es2016.full.d.ts","lib.es2017.d.ts","lib.es2017.full.d.ts","lib.es2017.intl.d.ts","lib.es2017.object.d.ts","lib.es2017.sharedmemory.d.ts","lib.es2017.string.d.ts","lib.es2017.typedarrays.d.ts","lib.es2018.asyncgenerator.d.ts","lib.es2018.asynciterable.d.ts","lib.es2018.d.ts","lib.es2018.full.d.ts","lib.es2018.intl.d.ts","lib.es2018.promise.d.ts","lib.es2018.regexp.d.ts","lib.es2019.array.d.ts","lib.es2019.d.ts","lib.es2019.full.d.ts","lib.es2019.object.d.ts","lib.es2019.string.d.ts","lib.es2019.symbol.d.ts","lib.es2020.d.ts","lib.es2020.full.d.ts","lib.es2020.string.d.ts","lib.es2020.symbol.wellknown.d.ts","lib.es2020.bigint.d.ts","lib.es2020.promise.d.ts","lib.es2020.sharedmemory.d.ts","lib.es2020.intl.d.ts","lib.esnext.array.d.ts","lib.esnext.asynciterable.d.ts","lib.esnext.bigint.d.ts","lib.esnext.d.ts","lib.esnext.full.d.ts","lib.esnext.intl.d.ts","lib.esnext.symbol.d.ts"],s=t.ScriptTarget[r],a=o.filter((function(e){return e.startsWith("lib."+s.toLowerCase())})),l=o.indexOf(a.pop()),c=i.map((function(e){var t=o.filter((function(t){return t.startsWith("lib."+e.toLowerCase())}));return 0===t.length?0:o.indexOf(t.pop())})),u=((n=c)&&n.length?n.reduce((function(e,t){return t>e?t:e})):void 0)||0,f=Math.max(l,u);return o.slice(0,f+1)},f=function(e,t,n,r,i,o,s){var a=o||fetch,l=s||localStorage,c=new Map,f=u(e,r),p="https://typescript.azureedge.net/cdn/"+t+"/typescript/lib/";return(n?function(){return Object.keys(localStorage).forEach((function(e){e.startsWith("ts-lib-")&&!e.startsWith("ts-lib-"+t)&&l.removeItem(e)})),Promise.all(f.map((function(e){var n,r="ts-lib-"+t+"-"+e,o=l.getItem(r);return o?Promise.resolve((n=o,i?i.decompressFromUTF16(n):n)):a(p+e).then((function(e){return e.text()})).then((function(e){var t;return l.setItem(r,(t=e,i?i.compressToUTF16(t):t)),e}))}))).then((function(e){e.forEach((function(e,t){var n="/"+f[t];c.set(n,e)}))}))}:function(){return Promise.all(f.map((function(e){return a(p+e).then((function(e){return e.text()}))}))).then((function(e){e.forEach((function(e,t){return c.set("/"+f[t],e)}))}))})().then((function(){return c}))};function p(e){throw new Error("Method '"+e+"' is not implemented.")}function d(e,t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=t.apply(void 0,r),s="string"==typeof o?o.slice(0,80)+"...":o;return l.apply(void 0,["> "+e].concat(r)),l("< "+s),o}}var h=function(e){return o({},e.getDefaultCompilerOptions(),{jsx:e.JsxEmit.React,strict:!0,esModuleInterop:!0,module:e.ModuleKind.ESNext,suppressOutputPathCheck:!0,skipLibCheck:!0,skipDefaultLibCheck:!0,moduleResolution:e.ModuleResolutionKind.NodeJs})},g=function(e){return e.replace("/","/lib.").toLowerCase()};function m(e){return{args:[],createDirectory:function(){return p("createDirectory")},directoryExists:d("directoryExists",(function(t){return Array.from(e.keys()).some((function(e){return e.startsWith(t)}))})),exit:function(){return p("exit")},fileExists:d("fileExists",(function(t){return e.has(t)||e.has(g(t))})),getCurrentDirectory:function(){return"/"},getDirectories:function(){return[]},getExecutingFilePath:function(){return p("getExecutingFilePath")},readDirectory:d("readDirectory",(function(t){return"/"===t?Array.from(e.keys()):[]})),readFile:d("readFile",(function(t){return e.get(t)||e.get(g(t))})),resolvePath:function(e){return e},newLine:"\n",useCaseSensitiveFileNames:!0,write:function(){return p("write")},writeFile:function(t,n){e.set(t,n)}}}function v(e,t,n){var r=t+"/vfs",i=b(),o=n.sys,s=i.dirname(4026);return{name:"fs-vfs",root:r,args:[],createDirectory:function(){return p("createDirectory")},directoryExists:d("directoryExists",(function(t){return Array.from(e.keys()).some((function(e){return e.startsWith(t)}))||o.directoryExists(t)})),exit:o.exit,fileExists:d("fileExists",(function(t){if(e.has(t))return!0;if(t.includes("tsconfig.json")||t.includes("tsconfig.json"))return!1;if(t.startsWith("/lib")){var n=s+"/"+t.replace("/","");return o.fileExists(n)}return o.fileExists(t)})),getCurrentDirectory:function(){return r},getDirectories:o.getDirectories,getExecutingFilePath:function(){return p("getExecutingFilePath")},readDirectory:d("readDirectory",(function(){return"/"===(arguments.length<=0?void 0:arguments[0])?Array.from(e.keys()):o.readDirectory.apply(o,arguments)})),readFile:d("readFile",(function(t){if(e.has(t))return e.get(t);if(t.startsWith("/lib")){var n=s+"/"+t.replace("/",""),r=o.readFile(n);if(!r){var i=o.readDirectory(s);throw new Error("TSVFS: A request was made for "+n+" but there wasn't a file found in the file map. You likely have a mismatch in the compiler options for the CDN download vs the compiler program. Existing Libs: "+i+".")}return r}return o.readFile(t)})),resolvePath:function(t){return e.has(t)?t:o.resolvePath(t)},newLine:"\n",useCaseSensitiveFileNames:!0,write:function(){return p("write")},writeFile:function(t,n){e.set(t,n)}}}function y(e,t,n){var r=new Map;return{compilerHost:o({},e,{getCanonicalFileName:function(e){return e},getDefaultLibFileName:function(){return"/"+n.getDefaultLibFileName(t)},getDirectories:function(){return[]},getNewLine:function(){return e.newLine},getSourceFile:function(i){return r.get(i)||(o=n.createSourceFile(i,e.readFile(i),t.target||h(n).target,!1),r.set(o.fileName,o),o);var o},useCaseSensitiveFileNames:function(){return e.useCaseSensitiveFileNames}}),updateFile:function(t){var n=r.has(t.fileName);return e.writeFile(t.fileName,t.text),r.set(t.fileName,t),n}}}var b=function(){return n(3204)(String.fromCharCode(112,97,116,104))}},3768:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=3768,e.exports=t},3204:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=3204,e.exports=t},5472:function(){},9809:function(){},4026:function(){}}]);
//# sourceMappingURL=17821066377c4486a980330106160c805ea5b4a9-2b58fd1427e95ded2b78.js.map