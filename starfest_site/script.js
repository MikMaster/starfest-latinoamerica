const header=document.querySelector('.site-header');
const navToggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.main-nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
navToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');navToggle?.setAttribute('aria-expanded','false')}));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const modal=document.getElementById('modal');
const modalContent=modal.querySelector('.modal-content');
const forms={
  expositor:{kicker:'PARTICIPA',title:'EXHIBE EN STARFEST',body:'Cuéntanos si quieres exhibir una colección cultural o reservar un espacio comercial. En el sitio final, esta solicitud se enviará al equipo del país seleccionado.',type:'Tipo de participación'},
  sponsor:{kicker:'ALIANZAS',title:'LLEVA TU MARCA A STARFEST',body:'Conversemos sobre patrocinio, activaciones, experiencias, publicaciones y presencia de marca. Este formulario es demostrativo.',type:'Interés comercial'},
  contacto:{kicker:'CONTACTO',title:'HABLEMOS DE STARFEST',body:'Selecciona el país y el motivo del contacto. Este prototipo no envía datos todavía.',type:'Motivo'}
};
function openForm(key){const d=forms[key];modalContent.innerHTML=`<small>${d.kicker}</small><h2>${d.title}</h2><p>${d.body}</p><form onsubmit="event.preventDefault(); alert('Prototipo: formulario recibido visualmente.');"><label>Nombre<input required placeholder="Tu nombre"></label><label>Organización<input placeholder="Empresa / comunidad / proyecto"></label><label>País<select><option>Venezuela</option><option>Colombia</option><option>Chile</option></select></label><label>${d.type}<select><option>Selecciona una opción</option><option>Expositor cultural</option><option>Expositor comercial</option><option>Patrocinio</option><option>Prensa / creador</option><option>Voluntariado</option></select></label><label class="full">Correo<input type="email" required placeholder="correo@ejemplo.com"></label><label class="full">Mensaje<textarea placeholder="Cuéntanos qué quieres hacer en StarFest"></textarea></label><button class="btn btn-primary" type="submit">Enviar solicitud</button></form>`;modal.showModal()}
document.querySelectorAll('.modal-open').forEach(b=>b.addEventListener('click',()=>openForm(b.dataset.modal)));
modal.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const countryCopy={
 venezuela:{title:'STARFEST VENEZUELA',body:'Capítulo activo. El prototipo lo presenta como próxima edición 2027 en Caracas, pendiente de fecha, sede y programación oficiales.'},
 colombia:{title:'STARFEST COLOMBIA',body:'Capítulo activo de la organización regional. Aquí vivirán la próxima edición, sus convocatorias, expositores, archivo y contactos locales.'},
 chile:{title:'STARFEST CHILE',body:'El sitio conserva el valor histórico de Chile dentro de StarFest sin inventar una edición futura. Puede funcionar como página de legado hasta que exista una nueva convocatoria.'}
};
document.querySelectorAll('.country-open').forEach(b=>b.addEventListener('click',()=>{const d=countryCopy[b.dataset.country];modalContent.innerHTML=`<small>CAPÍTULO NACIONAL</small><h2>${d.title}</h2><p>${d.body}</p><div class="archive-tags"><span>HISTORIA</span><span>EDICIONES</span><span>GALERÍA</span><span>CONTACTO</span></div><p>En una segunda iteración esta vista puede convertirse en una página independiente con programación, plan de visita, noticias y convocatoria propias.</p>`;modal.showModal()}));
