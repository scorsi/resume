import{_ as e}from"./preload-helper-5f3a618f.js";import{J as t,C as r}from"./vendor-b635c8c7.js";const l={loaders:[{locale:"en",key:"common",loader:async()=>(await e(()=>import("./common-8fd32aff.js"),[])).default},{locale:"fr",key:"common",loader:async()=>(await e(()=>import("./common-4b142c45.js"),[])).default},{locale:"fr",key:"competences",loader:async()=>(await e(()=>import("./competences-ab9b6471.js"),[])).default},{locale:"fr",key:"hobbies",loader:async()=>(await e(()=>import("./hobbies-41da20b6.js"),[])).default},{locale:"fr",key:"career",loader:async()=>(await e(()=>import("./career-050bf52c.js"),[])).default}]},{t:i,locale:m,locales:_,loading:f,loadTranslations:u}=new t(l),s=()=>localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches,o=r(s()),k=o.set,c=o.update,p=()=>c(a=>!a);o.subscribe(a=>{a?(document.documentElement.classList.add("dark"),localStorage.theme="dark"):(document.documentElement.classList.remove("dark"),localStorage.theme="light")});export{p as a,o as d,u as l,k as s,i as t};
