function irA(s){var e=document.querySelector(s);if(e)e.scrollIntoView({behavior:'smooth',block:'start'});}
function mostrarToast(msg,dur){
  dur=dur||4000;var t=document.getElementById('toast');
  t.innerHTML=msg;t.classList.add('vis');
  clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('vis');},dur);
}

// MODAL lightbox
function abrirModal(titulo, imgSrc){
  document.getElementById('modal-title').textContent=titulo;
  document.getElementById('modal-img').innerHTML='<img src="'+imgSrc+'" alt="'+titulo+'" style="width:100%;height:auto;display:block;">';
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}
document.getElementById('modal-close').addEventListener('click',cerrarModal);
document.getElementById('modal').addEventListener('click',function(e){if(e.target===this)cerrarModal();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')cerrarModal();});
function cerrarModal(){
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal-img').innerHTML='';
  document.body.style.overflow='';
}

// LOADER
window.addEventListener('load',function(){
  setTimeout(function(){
    document.getElementById('loader').classList.add('out');
    document.querySelectorAll('#inicio .rv').forEach(function(el){el.classList.add('on');});
  },2100);
});

// CURSOR
(function(){
  if(window.innerWidth<=600)return;
  var dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
  var mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  (function tick(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(tick);})();
  var hs='a,button,.svc-card,.port-item,.paso,.red,.lb-item,.flayer-full';
  document.addEventListener('mouseover',function(e){if(e.target.closest(hs))document.body.classList.add('hov');});
  document.addEventListener('mouseout',function(e){if(e.target.closest(hs))document.body.classList.remove('hov');});
})();

// NAVBAR
(function(){
  var nav=document.getElementById('nav');
  function chk(){nav.classList.toggle('stick',window.scrollY>60);document.getElementById('top-btn').classList.toggle('vis',window.scrollY>450);}
  window.addEventListener('scroll',chk,{passive:true});chk();
})();

// HAMBURGER
(function(){
  var btn=document.getElementById('ham'),menu=document.getElementById('mob-menu'),open=false;
  function cerrar(){open=false;btn.classList.remove('abierto');btn.setAttribute('aria-expanded','false');menu.classList.remove('abierto');document.body.style.overflow='';setTimeout(function(){menu.style.display='';},380);}
  btn.addEventListener('click',function(){open=!open;btn.classList.toggle('abierto',open);btn.setAttribute('aria-expanded',open);if(open){menu.style.display='flex';requestAnimationFrame(function(){menu.classList.add('abierto');});document.body.style.overflow='hidden';}else cerrar();});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',cerrar);});
})();

// SCROLL REVEAL
(function(){
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target);}});},{threshold:0.07,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv').forEach(function(el){if(!el.closest('#inicio'))obs.observe(el);});
})();

// CONTADORES
(function(){
  var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,meta=parseInt(el.dataset.meta),suf=el.dataset.suf||'',dur=1800,t0=performance.now();(function anim(t){var p=Math.min((t-t0)/dur,1),ease=1-Math.pow(1-p,3);el.textContent=Math.round(ease*meta)+suf;if(p<1)requestAnimationFrame(anim);})(t0);obs.unobserve(el);});},{threshold:0.7});
  document.querySelectorAll('[data-meta]').forEach(function(el){obs.observe(el);});
})();

// TILT
document.querySelectorAll('.port-item').forEach(function(item){
  item.addEventListener('mousemove',function(e){var r=this.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*7,y=((e.clientY-r.top)/r.height-.5)*7;this.style.transform='perspective(800px) rotateY('+x+'deg) rotateX('+(-y)+'deg) scale(1.02)';});
  item.addEventListener('mouseleave',function(){this.style.transition='transform .5s ease';this.style.transform='';});
});

// FORMULARIO
document.getElementById('form-btn').addEventListener('click',function(){
  var val=document.getElementById('email-inp').value.trim();
  if(!val||!val.includes('@')){mostrarToast('⚠️ Ingresa un correo electrónico válido.');return;}
  this.textContent='...';this.disabled=true;
  setTimeout(function(){document.getElementById('form-row').style.display='none';document.getElementById('exito-msg').style.display='flex';mostrarToast('<strong>✦ Recibido.</strong> Nos pondremos en contacto pronto.');},900);
});

document.getElementById('top-btn').addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var d=document.querySelector(this.getAttribute('href'));if(d){e.preventDefault();d.scrollIntoView({behavior:'smooth',block:'start'});}});});
if(window.innerWidth>768){window.addEventListener('scroll',function(){var hg=document.querySelector('.hero-grid');if(hg)hg.style.transform='translateY('+window.scrollY*.06+'px)';},{passive:true});}
console.log('%c✦ LEMUR PRODUCTION','color:#C8A45A;font-size:20px;font-family:Georgia,serif;letter-spacing:.3em;');

var serviciosData = [
  {num:'01', titulo:'Producción Audiovisual', desc:'Creamos contenido audiovisual de alto impacto: desde spots publicitarios y videos corporativos hasta documentales y coberturas de eventos. Combinamos narrativa visual con técnica cinematográfica para contar historias que conectan marcas con audiencias.', tags:['Video Corporativo','Spot Publicitario','Documental','Videoclip','Cobertura de Eventos','Cortometraje'], lista:['Dirección de fotografía','Dirección creativa','Equipo técnico completo','Postproducción profesional','Edición y colorización','Entrega en múltiples formatos']},
  {num:'02', titulo:'Contenido Digital', desc:'Diseñamos y producimos contenido estratégico para redes sociales que genera engagement real. Reels, TikToks, fotografía de producto y campañas digitales adaptadas a cada plataforma y audiencia.', tags:['Reels','TikTok','Fotografía Comercial','Contenido para RRSS','Fotografía de Producto','Campañas Digitales'], lista:['Estrategia de contenido','Producción de Reels/TikToks','Fotografía comercial','Calendario editorial','Copy creativo','Optimización por plataforma']},
  {num:'03', titulo:'Diseño & Branding', desc:'Construimos identidades visuales que perduran. Desde el logotipo hasta el manual de marca completo, diseñamos sistemas visuales coherentes que diferencian a tu marca y la hacen memorable.', tags:['Identidad Visual','Logotipo','Manual de Marca','Packaging','Diseño Gráfico','Brand System'], lista:['Investigación y estrategia de marca','Diseño de logotipo','Manual de identidad visual','Paleta de colores y tipografía','Diseño de packaging','Aplicaciones y materiales']},
  {num:'04', titulo:'Estrategia Visual', desc:'Traducimos la esencia de tu marca en una estrategia visual integral. Storytelling de marca, campañas digitales y posicionamiento audiovisual con propósito y dirección creativa estratégica.', tags:['Storytelling','Dirección de Arte','Campañas 360°','Posicionamiento','Marketing Audiovisual','Concepto Creativo'], lista:['Consultoría de marca','Dirección de arte','Concepto creativo','Planificación de campaña','Integración multiplataforma','Métricas y seguimiento']},
  {num:'05', titulo:'Motion & Animación', desc:'Damos vida a ideas a través del movimiento. Motion graphics, animaciones 2D/3D y postproducción profesional para proyectos que necesitan comunicar con dinamismo e impacto visual.', tags:['Motion Graphics','Animación 2D','Animación 3D','VFX','Postproducción','Títulos Animados'], lista:['Motion graphics para redes','Intros y outros animados','Animación de logos','Infografías animadas','Efectos visuales (VFX)','Postproducción y colorización']}
];

function abrirServicio(i) {
  var s = serviciosData[i];
  document.getElementById('svc-num-big').textContent = s.num;
  document.getElementById('svc-title-big').textContent = s.titulo;
  document.getElementById('svc-desc-big').textContent = s.desc;
  var tagsEl = document.getElementById('svc-tags');
  tagsEl.innerHTML = '';
  s.tags.forEach(function(t){
    var span = document.createElement('span');
    span.textContent = t;
    span.style.cssText = 'background:rgba(200,164,90,.08);border:1px solid rgba(200,164,90,.2);color:rgba(200,164,90,.8);padding:6px 14px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;';
    tagsEl.appendChild(span);
  });
  var listEl = document.getElementById('svc-list');
  listEl.innerHTML = '';
  s.lista.forEach(function(item){
    var li = document.createElement('li');
    li.style.cssText = 'font-size:13px;color:rgba(240,235,225,.55);display:flex;align-items:center;gap:10px;';
    li.innerHTML = '<span style="color:var(--dorado);font-size:16px;line-height:1;">✦</span>' + item;
    listEl.appendChild(li);
  });
  var modal = document.getElementById('svc-modal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  var inner = document.getElementById('svc-modal-inner');
  inner.style.opacity = '0';
  inner.style.transform = 'translateY(24px)';
  setTimeout(function(){
    inner.style.transition = 'opacity .35s ease, transform .35s ease';
    inner.style.opacity = '1';
    inner.style.transform = 'translateY(0)';
  }, 10);
}

function cerrarServicio(e) {
  if (e && e.target !== document.getElementById('svc-modal')) return;
  var modal = document.getElementById('svc-modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e){ if(e.key === 'Escape') { cerrarServicio(); } });

// Función WhatsApp - Contacto
function contactarWhatsApp() {
  var numero = '+593995497494'; // Número de WhatsApp de LEMUR Production
  var mensaje = document.getElementById('msg-inp') ? document.getElementById('msg-inp').value.trim() : '';
  var textoBase = 'Hola, me contacto desde la web de LEMUR Production.';
  var textoFinal = mensaje ? textoBase + ' ' + mensaje : textoBase;
  var url = 'https://wa.me/' + numero.replace(/\D/g, '') + '?text=' + encodeURIComponent(textoFinal);

  // Mostrar mensaje de éxito
  var formRow = document.getElementById('form-row');
  var exitoMsg = document.getElementById('exito-msg');
  if (formRow) formRow.style.display = 'none';
  if (exitoMsg) exitoMsg.style.display = 'flex';

  // Abrir WhatsApp después de un breve delay
  setTimeout(function() {
    window.open(url, '_blank');
    // Restaurar el formulario después de 3 segundos
    setTimeout(function() {
      if (formRow) formRow.style.display = '';
      if (exitoMsg) exitoMsg.style.display = 'none';
      if (document.getElementById('msg-inp')) document.getElementById('msg-inp').value = '';
    }, 3000);
  }, 600);
}
