"use strict";(self.webpackChunkfooday_docs=self.webpackChunkfooday_docs||[]).push([[8022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={slug:"/foodie-interactions",sidebar_position:1,title:"Foodie Interactions"},a="Foodie Interactions",s={unversionedId:"Community Systems/foodie-interactions",id:"Community Systems/foodie-interactions",title:"Foodie Interactions",description:"In the Fooday app, users can interact with other Foodies through actions such as liking, commenting, and bookmarking.",source:"@site/docs/06-Community Systems/01-foodie-interactions.md",sourceDirName:"06-Community Systems",slug:"/foodie-interactions",permalink:"/foodie-interactions",draft:!1,editUrl:"https://github.com/foodaylabs/fooday-docs/tree/main/docs/docs/06-Community Systems/01-foodie-interactions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/foodie-interactions",sidebar_position:1,title:"Foodie Interactions"},sidebar:"tutorialSidebar",previous:{title:"Deposit & Withdrawal",permalink:"/deposit-and-withdrawal"},next:{title:"Referral System",permalink:"/referral-system"}},l={},c=[{value:"Hearts and Bookmarks",id:"hearts-and-bookmarks",level:2},{value:"Commenting",id:"commenting",level:2},{value:"Reporting and Voting",id:"reporting-and-voting",level:2},{value:"Marking as &quot;Helpful&quot; or &quot;Not Helpful&quot; (Planning)",id:"marking-as-helpful-or-not-helpful-planning",level:2},{value:"Community Guidelines",id:"community-guidelines",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"foodie-interactions"},"Foodie Interactions"),(0,r.kt)("p",null,"In the Fooday app, users can interact with other Foodies through actions such as liking, commenting, and bookmarking."),(0,r.kt)("h2",{id:"hearts-and-bookmarks"},"Hearts and Bookmarks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hearts")),(0,r.kt)("p",null,"Users can show their support for reviews they like by giving them a heart."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bookmarks")),(0,r.kt)("p",null,"For spots they want to visit or reviews they find interesting, users can bookmark them for future reference. (In development)"),(0,r.kt)("p",null,"Fooday collects user preferences and uses algorithms to recommend more high-quality reviews and similar restaurants, enhancing the user browsing experience. (In development)"),(0,r.kt)("h2",{id:"commenting"},"Commenting"),(0,r.kt)("p",null,"Users can leave comments below reviews to engage with other Foodies and the authors. These comments will be publicly visible."),(0,r.kt)("h2",{id:"reporting-and-voting"},"Reporting and Voting"),(0,r.kt)("p",null,"If inappropriate content is found on Fooday, users can report reviews/spot information using the reporting feature. The system will activate a community verification system, allowing other users to participate in content verification and voting, creating a fair and community-driven verification system. This system aims to deter users from providing false information or reviews and encourages the community to provide authentic and accurate information and experiences."),(0,r.kt)("p",null,"Read the full details: ",(0,r.kt)("a",{parentName:"p",href:"/report-and-voting"},"Reporting and Verification Voting"),"."),(0,r.kt)("h2",{id:"marking-as-helpful-or-not-helpful-planning"},'Marking as "Helpful" or "Not Helpful" (Planning)'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This full feature is still in planning.")),(0,r.kt)("p",null,'Fooday is committed to providing the most genuine and helpful reviews, allowing users to receive and search for firsthand experiences at any time, helping them make better choices for dining and other experiences. With the "Helpful" feature introduced by Fooday, users can give immediate feedback based on their current feelings after reading a review, and they can also choose to send FOOD as a reward to encourage Foodies who write valuable reviews.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Helpful:")),(0,r.kt)("p",null,'Users can mark as "Helpful" on reviews they find useful, choose an amount to send as a reward in FOOD to the Foodie who wrote the review. The review will have a reward badge to let more people know that the review has been appreciated.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not Helpful:")),(0,r.kt)("p",null,'If users find a review unhelpful, they can mark as "Not Helpful" and select the reason. The system will then activate a verification voting mechanism. Read the full details: ',(0,r.kt)("a",{parentName:"p",href:"/report-and-voting"},"Reporting and Verification Voting"),"."),(0,r.kt)("h2",{id:"community-guidelines"},"Community Guidelines"),(0,r.kt)("p",null,"All interactions and information provided in the Fooday app must comply with the ",(0,r.kt)("a",{parentName:"p",href:"/tos"},"Fooday Application Terms of Service"),". In case of any violations or concerns, Fooday reserves the right to take appropriate actions, including immediate account suspension and legal action if necessary."))}d.isMDXComponent=!0}}]);