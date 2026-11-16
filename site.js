/* Interações visuais apenas. Nenhum dado do usuário é coletado ou enviado por este script. */
(()=>{'use strict';
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav-links');
 if(toggle&&nav){
  const close=()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');nav.classList.remove('open')};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open)});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 }
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const nodes=document.querySelectorAll('.reveal');
 if(!reduced&&'IntersectionObserver'in window){
  document.documentElement.classList.add('js-animate');
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.06,rootMargin:'0px 0px 35px 0px'});
  nodes.forEach(el=>observer.observe(el));
 }else{nodes.forEach(el=>el.classList.add('visible'))}
})();