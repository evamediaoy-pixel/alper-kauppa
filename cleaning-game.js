/* Alper Kauppa - sale-triggered floor cleaning mini-game */
(function(){
 "use strict";
 const $=id=>document.getElementById(id);
 const produce=["🍎","🥕","🍌","🥦","🍐","🍅","🥒","🍓","🍊","🌽","🍇","🥬","🥔","🧃","📦","🧻","🍂","🥤"];
 let litter=[],running=false,audio=null,oscillators=[],finishTimer=null;
 const css=document.createElement("style");
 css.textContent=`
 .ak-floor-item{position:fixed;z-index:86;font-size:clamp(26px,6vw,40px);line-height:1;pointer-events:none;filter:drop-shadow(0 3px 2px #0003);transition:opacity .28s,transform .28s;transform:rotate(var(--tilt));user-select:none}
 .ak-floor-item.ak-picked{opacity:0;transform:scale(.1) rotate(40deg)}
 .ak-clean-unit{z-index:89!important}
 #ak-clean-btn.ak-ready{box-shadow:0 0 0 4px #ffd55c77}
 @media(prefers-reduced-motion:reduce){.ak-floor-item{transition:none!important}.ak-clean-unit{transition-duration:.1s!important}}
 `;
 document.head.appendChild(css);
 function hint(){
  const b=$("ak-clean-btn");if(!b)return;
  b.classList.toggle("ak-ready",litter.length>0);
  b.textContent=litter.length?"🧹 Siivoa lattia":"🧼 Siivoa kauppa";
 }
 function dropProduce(){
  // Do not create overlapping rounds or leak DOM nodes.
  if(running)return;
  litter.forEach(x=>x.remove());litter=[];
  const count=Math.min(30,Math.max(18,Math.floor(innerWidth/18))),width=innerWidth;
  for(let i=0;i<count;i++){
   const item=document.createElement("span");
   item.className="ak-floor-item";
   item.textContent=produce[(i+Math.floor(Math.random()*produce.length))%produce.length];
   item.style.left=(8+((i+.37)%count)*(Math.max(10,width-60)/count))+"px";
   item.style.bottom=(68+(i%5)*27)+"px";
   item.style.setProperty("--tilt",((i*37)%64-32)+"deg");
   item.setAttribute("aria-hidden","true");
   document.body.appendChild(item);litter.push(item);
  }
  hint();
  try{if(typeof speak==="function")speak("Voi ei! Hedelmiä ja vihanneksia putosi lattialle. Siivotaan!");}catch(e){}
 }
 function engineStart(){
  try{
   const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
   audio=new C();audio.resume?.();
   const o=audio.createOscillator(),g=audio.createGain();
   o.type="triangle";o.frequency.value=85;g.gain.value=.018;
   o.connect(g);g.connect(audio.destination);o.start();oscillators.push(o);
  }catch(e){}
 }
 function engineStop(){oscillators.forEach(o=>{try{o.stop()}catch(e){}});oscillators=[];if(audio){audio.close().catch(()=>{});audio=null}}
 function newMachine(color,offset){
  const e=document.createElement("div");
  e.className="ak-clean-unit "+color;
  e.style.transition="none";
  e.style.bottom="calc("+(15+offset*8)+"px + env(safe-area-inset-bottom))";
  e.style.transform="translateX(-170px)";
  e.innerHTML='<div class="ak-shine">✨</div><div class="ak-light"></div><div class="ak-body"></div><div class="ak-brush"></div><div class="ak-wheel ak-w1"></div><div class="ak-wheel ak-w2"></div>';
  document.body.appendChild(e);return e;
 }
 function collectUnder(machine){
  const rect=machine.getBoundingClientRect();
  litter=litter.filter(item=>{
   if(!item.isConnected)return false;
   const r=item.getBoundingClientRect();
   if(rect.right>r.left+7&&rect.left<r.right-7){
    item.classList.add("ak-picked");setTimeout(()=>item.remove(),300);return false;
   }
   return true;
  });
 }
 function clean(old,btn){
  if(running)return;
  running=true;btn.disabled=true;
  old?.classList.remove("running");
  const machines=[newMachine("ak-blue",0),newMachine("ak-orange",1),newMachine("ak-green",2)];
  const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const span=reduced?800:5900,delay=reduced?140:550;
  engineStart();
  let raf,stopped=false;
  const tick=()=>{machines.forEach(collectUnder);if(!stopped)raf=requestAnimationFrame(tick)};
  raf=requestAnimationFrame(tick);
  const timers=[];
  machines.forEach((m,i)=>{
   timers.push(setTimeout(()=>{
    m.style.transition="transform "+span+"ms linear";
    m.style.transform="translateX("+(innerWidth+190)+"px)";
   },40+i*delay));
  });
  const returnAt=reduced?1650:7300;
  machines.forEach((m,i)=>timers.push(setTimeout(()=>{
   m.classList.add("ak-reverse");
   m.style.transition="transform "+span+"ms linear";
   m.style.transform="translateX(-180px)";
  },returnAt+i*delay)));
  finishTimer=setTimeout(()=>{
   stopped=true;cancelAnimationFrame(raf);
   // Any floor item missed at the viewport edge is cleared as the last machine leaves.
   litter.forEach(e=>{e.classList.add("ak-picked");setTimeout(()=>e.remove(),300)});litter=[];
   machines.forEach(e=>e.remove());engineStop();running=false;btn.disabled=false;hint();
   try{if(typeof speak==="function")speak("Siivous valmis! Kauppa on taas puhdas.")}catch(e){}
  },reduced?3200:15000);
 }
 // Integrate after receipt: the mess appears only when the customer leaves checkout.
 const originalFinish=window.finish;
 if(typeof originalFinish==="function"){
  window.finish=function(){
   const paid=typeof paymentFinalized!=="undefined"&&paymentFinalized;
   const result=originalFinish.apply(this,arguments);
   if(paid)dropProduce();
   return result;
  };
 }
 window.akStartCleaningParade=clean;
 hint();
 window.addEventListener("pagehide",()=>{engineStop();if(finishTimer)clearTimeout(finishTimer)});
})();