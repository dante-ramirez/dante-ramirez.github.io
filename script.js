document.addEventListener('DOMContentLoaded',()=>{let count=0;let index=0;let currentText='';let letter='';let isDeleting=!1;let typingInterval;let typeSpeed=50;const subtitle=document.getElementById('hero_subtitle');const loadingOverlay=document.querySelector('.loading_overlay');const header=document.querySelector('header');setTimeout(()=>{loadingOverlay.classList.add('hidden');document.body.classList.remove('loading');header.classList.add('visible')},800);const scrollLinks=document.querySelectorAll('nav ul li a');scrollLinks.forEach(link=>{link.addEventListener('click',(event)=>{event.preventDefault();const targetId=event.target.getAttribute('href').substring(1);const targetSection=document.getElementById(targetId);window.scrollTo({top:targetSection.offsetTop,behavior:'smooth'})})});const logo=document.getElementById('logo');const heroSection=document.getElementById('hero');logo.addEventListener('click',(event)=>{event.preventDefault();heroSection.scrollIntoView({behavior:'smooth'})});const heroBtn=document.getElementById('hero_btn');const projectsSection=document.getElementById('projects');heroBtn.addEventListener('click',(event)=>{event.preventDefault();window.scrollTo({top:projectsSection.offsetTop,behavior:'smooth'})})
const sections=document.querySelectorAll('section');const navSections=document.querySelectorAll('.links');const options={root:null,threshold:0.3,rootMargin:"100px 0px 100px 0px"};const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const sectionId=entry.target.id;navSections.forEach(link=>{link.classList.remove('section_active')});document.querySelector(`#section_${sectionId}`).classList.add('section_active')}})},options);sections.forEach(section=>observer.observe(section));const buttons=document.querySelectorAll('.btn');buttons.forEach(button=>{button.addEventListener('mouseenter',()=>{button.style.transform='scale(1.05)'});button.addEventListener('mouseleave',()=>{button.style.transform='scale(1)'})});const translations={es:{language_text:"ES",theme_text:"Cambiar tema:",hero_title:"¡Hola! Soy Dante Ramírez.",hero_subtitle:["Ingeniero en Sistemas Computacionales.","Desarrollador Backend.","Especialidad de base de datos.","Node | Express | TS | SQL | SCRUM"],about_title:"Sobre Mí",skills_title:"Lenguajes y Herramientas",links_title:"Enlaces Profesionales",projects_title:"Proyectos",project_title_1:"Calculadora Nutrimental para CECSA Enterprise Solutions SC",project_1_desc_1:`API diseñada para una calculadora nutrimental conforme a la Norma Oficial Mexicana 051 para el 
        etiquetado de alimentos y bebidas no alcohólicas. La API maneja cálculos complejos y permite el almacenamiento de datos de 
        manera eficiente, además de enviar correos automatizados.`,project_1_desc_2:`Incluye validaciones estrictas, autenticación segura y fue gestionado mediante la metodología Scrum 
        en ciclos iterativos de desarrollo.`,project_1_desc_3:`Tecnologías: Node.js, Express, TypeScript, PostgreSQL, AJV, JWT, Nodemailer y Pug.`,project_title_2:"Sistema de Gestión de Información para Alumnos",project_2_desc_1:`Desarrollo de un sistema de escritorio para la gestión integral de información estudiantil, diseñado para 
        facilitar el acceso y manejo seguro de datos académicos. El sistema proporciona autenticación biométrica mediante la captura 
        de huellas dactilares para una mayor seguridad en el acceso a la información de los alumnos.`,project_2_desc_2:`La aplicación permite la generación de archivos PDF para reportes académicos, justificantes y otros documentos.`,project_2_desc_3:`Tecnologías: Java, MySQL y un sensor DigitalPersona.`,project_title_3:"Ferretería API",project_3_desc_1:`Backend desarrollado para la gestión integral de productos, inventarios, pedidos y clientes, optimizando la 
        eficiencia y la experiencia del usuario en operaciones comerciales. El sistema incluye funciones avanzadas como un sistema 
        de puntos de recompensa y envíos automatizados de correos electrónicos.`,project_3_desc_2:`La API incluye autenticación segura, manejo de archivos y automatización de tareas.`,project_3_desc_3:`Tecnologías: Node.js, Express, PostgreSQL, Multer, AJV, JWT, Node-cron, Nodemailer y Pug.`,projects_note:`Nota: Los proyectos marcados con una "⭐" son trabajos desarrollados para empresas privadas,
        razón por la cual no puedo compartir enlaces o más detalles públicos sobre estos proyectos.`,certification_title:"Certificados y Reconocimientos",certification_title_1:"Título de Ingeniero en Sistemas Computacionales",certification_title_2:"Diploma Especialidad de Base de Datos",certification_title_3:"Testimonio de Desempeño Sobresaliente EGEL-ICOMPU",certification_title_4:"Diploma Mejor Promedio de la Carrera",certification_title_5:"Certificado Inglés B1",certification_title_6:"Node.js - Creando API con Express y MongoDB (Incl. Deno)",certification_title_7:"Curso Profesional de Backend",certification_title_8:"Certificación en TypeScript",certification_title_9:"JavaScript 2020 Curso desde Principiante hasta Profesional",certification_title_10:"Introducción al Desarrollo Web Front-End HTML y CSS desde cero",certification_title_11:"Curso de React con Typescript",certification_title_12:"MongoDB: Aprende desde cero a experto",certification_title_13:"Curso de MongoDB y Node.js con Mongoose",certification_title_14:"Curso a fondo de GitHub",certification_title_15:"Depuración de Software: Depura tus aplicaciones web",certification_title_16:"Reconocimiento de Huella Digital en Java FingerPrint",certification_title_17:"Curso de PHP 2020",issued_by:"Emitido por:",zoom_instruction:"Toque una imagen para ampliarla o reducirla.",contact_title:"Contacto",contact_desc:"¿Tienes un proyecto en mente? ¡Hablemos!",placeholder_name:"Tu nombre",placeholder_email:"Tu email",placeholder_message:"Escribe tu mensaje",copyright:"© 2024 Dante Ramírez. Todos los derechos reservados."},en:{language_text:"EN",theme_text:"Change theme:",hero_title:"Hello! I'm Dante Ramírez.",hero_subtitle:["Computer Systems Engineer.","Backend Developer.","Database Specialization.","Node | Express | TS | SQL | SCRUM"],about_title:"About Me",skills_title:"Languages and Tools",links_title:"Professional Links",projects_title:"Projects",project_title_1:"Nutritional Calculator for CECSA Enterprise Solutions SC",project_1_desc_1:`API designed for a nutritional calculator aligned with the Mexican Official Standard 051 for labeling food and 
        non-alcoholic beverages. The API performs complex calculations and enables efficient data storage, as well as automated email notifications.`,project_1_desc_2:`It includes strict validations, secure authentication, and was managed using the Scrum methodology in iterative development cycles.`,project_1_desc_3:`Technologies: Node.js, Express, TypeScript, PostgreSQL, AJV, JWT, Nodemailer and Pug.`,project_title_2:"Student Information Management System",project_2_desc_1:`Development of a desktop system for comprehensive management of student information, designed to facilitate safe access 
        and handling of academic data. The system provides biometric authentication through fingerprint capture for increased security in accessing 
        student information.`,project_2_desc_2:`The application allows the generation of PDF files for academic reports, justifications and other documents.`,project_2_desc_3:`Technologies: Java, MySQL and a DigitalPersona sensor.`,project_title_3:"Ferretería API",project_3_desc_1:`Backend developed for comprehensive management of products, inventory, orders, and clients, optimizing efficiency and 
        user experience in commercial operations. The system includes advanced features such as a reward points system and automated email 
        notifications.`,project_3_desc_2:`The API includes secure authentication, file handling and task automation.`,project_3_desc_3:`Technologies: Node.js, Express, PostgreSQL, Multer, AJV, JWT, Node-cron, Nodemailer and Pug.`,projects_note:`Note: Projects marked with an "⭐" are works developed for private companies, 
        reason why I cannot share links or further public details about these projects.`,certification_title:"Certificates and Recognitions",certification_title_1:"Bachelor's Degree in Computer Systems Engineering",certification_title_2:"Diploma in Database Specialization",certification_title_3:"Outstanding Performance Testimony EGEL-ICOMPU",certification_title_4:"Diploma for Best GPA in the Program",certification_title_5:"B1 English Certificate",certification_title_6:"Node.js - Creating API with Express and MongoDB (Incl. Deno)",certification_title_7:"Professional Backend Course",certification_title_8:"TypeScript Certification",certification_title_9:"JavaScript 2020 Course from Beginner to Professional",certification_title_10:"Introduction to Front-End Web Development HTML and CSS from Zero",certification_title_11:"React with TypeScript Course",certification_title_12:"MongoDB: From Zero to Expert",certification_title_13:"MongoDB and Node.js with Mongoose Course",certification_title_14:"In-depth GitHub Course",certification_title_15:"Software Debugging: Debug your web applications",certification_title_16:"Digital Fingerprint Recognition in Java FingerPrint",certification_title_17:"The PHP Course 2020",issued_by:"Issued by:",zoom_instruction:"Tap an image to enlarge or reduce it.",contact_title:"Contact",contact_desc:"Do you have a project in mind? Let's talk!",placeholder_name:"Your name",placeholder_email:"Your email",placeholder_message:"Write your message",copyright:"© 2024 Dante Ramírez. All rights reserved."}};function updateAbout(language){const about_1=document.getElementById('about_desc_1');const about_2=document.getElementById('about_desc_2');const about_3=document.getElementById('about_desc_3');if(language==='es'){about_1.innerHTML=`Soy un 
      <span class="bold">Ingeniero en Sistemas Computacionales</span> enfocado en el desarrollo 
      <span class="tech bold">Backend</span>, donde he trabajado en  
      <span class="italic">proyectos empresariales y freelance</span> utilizando tecnologías como 
      <span class="tech">Node.js</span>, 
      <span class="tech">Express</span>, 
      <span class="tech">TypeScript</span> y 
      <span class="tech">SQL</span>. Mi enfoque es ofrecer 
      <span class="italic">soluciones eficientes</span> mediante 
      <span class="color">metodologías ágiles</span> como 
      <span class="color bold">SCRUM</span>, junto con una sólida capacidad para la 
      <span class="highlight">resolución de problemas</span>.`;about_2.innerHTML=`En mi trayectoria, tuve la oportunidad de trabajar en un proyecto de
      <span class="tech bold">API</span> para una calculadora nutrimental alineada con la 
      <span class="bold">Norma Oficial Mexicana 051</span>, donde implementé un sistema de 
      <span class="italic">gestión de datos</span> en 
      <span class="tech">PostgreSQL</span>, siguiendo 
      <span class="highlight">buenas prácticas de desarrollo</span> y manteniendo un 
      <span class="color">código limpio</span> y 
      <span class="italic">organizado</span>. Esta experiencia me permitió 
      <span class="highlight">profundizar en el desarrollo backend</span> y mejorar mis habilidades técnicas, además de consolidar mi capacidad para trabajar en 
      <span class="italic">entornos colaborativos.</span>`;about_3.innerHTML=`Mi objetivo es continuar desarrollándome en el ámbito del backend, donde he encontrado una de mis fortalezas; sin 
      embargo, mi interés por la tecnología es amplio y me adapto fácilmente a nuevos entornos. A lo largo de mi carrera, he enfrentado desafíos con una 
      <span class="italic">mentalidad de crecimiento</span>, permitiéndome 
      <span class="highlight">sobresalir académicamente</span> y 
      <span class="highlight">afrontar proyectos complejos</span> con una estructura organizada y lógica.`}else if(language==='en'){about_1.innerHTML=`I am a 
      <span class="bold">Computer Systems Engineer</span> focused on 
      <span class="tech bold">Backend</span> development, where I have worked on both 
      <span class="italic">corporate</span> and 
      <span class="italic">freelance projects</span> using technologies like 
      <span class="tech">Node.js</span>, 
      <span class="tech">Express</span>, 
      <span class="tech">TypeScript</span>, and 
      <span class="tech">SQL</span>. My approach is to provide 
      <span class="italic">efficient solutions</span> through 
      <span class="color">agile methodologies</span> such as 
      <span class="color bold">SCRUM</span>, along with a solid ability for 
      <span class="highlight">problem-solving</span>.`;about_2.innerHTML=`In my professional journey, I had the opportunity to work on an 
      <span class="tech bold">API</span> project for a nutritional calculator aligned with the 
      <span class="bold">Mexican Official Standard NOM-051</span>, where I implemented a 
      <span class="italic">data management</span> system using
      <span class="tech">PostgreSQL</span>, following 
      <span class="highlight">best development practices</span> and maintaining 
      <span class="color">clean code</span>. This experience allowed me to 
      <span class="highlight">deepen my backend development skills</span> and strengthen my technical abilities, as well as my capacity to work in
      <span class="italic">collaborative environments</span>.`;about_3.innerHTML=`My goal is to continue growing in backend development, where I have found one of my strengths; however, my interest in 
      technology is broad, and I adapt easily to new environments. Throughout my career, I have faced challenges with a 
      <span class="italic">growth mindset</span>, allowing me to 
      <span class="highlight">excel academically</span> and 
      <span class="highlight">tackle complex projects</span> with an organized and logical structure.`}}
function updateCvLink(language){const downloadCvButton=document.getElementById('download_cv');if(language==='es'){downloadCvButton.href="./_CV_Dante_Rafael_Ramírez_Ramírez_ES.pdf";downloadCvButton.innerHTML=`<i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir CV`}else if(language==='en'){downloadCvButton.href="./_CV_Dante_Rafael_Ramírez_Ramírez_EN.pdf";downloadCvButton.innerHTML=`<i class="fa-solid fa-arrow-up-right-from-square"></i> Open CV`}}
function updateIcons(language){const viewProjectsButton=document.getElementById('view_projects_btn');const viewProjectButton=document.getElementById('view_project_btn');const sendButton=document.getElementById('send');if(language==='es'){viewProjectsButton.innerHTML=`<i class="fa-solid fa-arrow-down"></i> Ver Proyectos`;viewProjectButton.innerHTML=`<i class="fa-solid fa-link"></i> Ver Proyecto`;sendButton.innerHTML=`<i class="fa-solid fa-envelope"></i> Enviar`}else if(language==='en'){viewProjectsButton.innerHTML=`<i class="fa-solid fa-arrow-down"></i> View Projects`;viewProjectButton.innerHTML=`<i class="fa-solid fa-link"></i> View Project`;sendButton.innerHTML=`<i class="fa-solid fa-envelope"></i> Send`}}
function updateCredits(language){const credits=document.getElementById('credits');if(language==='es'){credits.innerHTML=`Iconos proporcionados por 
        <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome</a>
        y
        <a href="https://github.com/tandpfun/skill-icons" target="_blank" rel="noopener noreferrer">Skill Icons</a>
        para la representación de habilidades técnicas.`}else if(language==='en'){credits.innerHTML=`Icons provided by 
      <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome</a>
      and
      <a href="https://github.com/tandpfun/skill-icons" target="_blank" rel="noopener noreferrer">Skill Icons</a>
      for representing technical skills.`}}
const switchLanguage=(lang)=>{updateAbout(lang);updateCvLink(lang);updateIcons(lang);updateCredits(lang);document.querySelectorAll('[data_key]').forEach((element)=>{const key=element.getAttribute('data_key');if(element.tagName==='INPUT'||element.tagName==='TEXTAREA'){element.setAttribute('placeholder',translations[lang][key])}else if(key!=='hero_subtitle'){element.textContent=translations[lang][key]}});resetTyping();setTimeout(()=>{typeSubtitle(translations[lang].hero_subtitle)},3000)};const languageToggle=document.getElementById('language_toggle');const themeToggle=document.getElementById('theme_toggle');const languageIcon=document.getElementById('language_icon');const logoButton=document.getElementById('logo');languageToggle.addEventListener('click',()=>{const currentLang=languageIcon.getAttribute('data_lang');if(currentLang==='es'){languageIcon.setAttribute('data_lang','en');logoButton.title="Return to home";languageToggle.title="Switch to Spanish";themeToggle.title="Change mode";switchLanguage('en')}else{languageIcon.setAttribute('data_lang','es');logoButton.title="Volver al inicio";languageToggle.title="Cambiar a Inglés";themeToggle.title="Cambiar modo";switchLanguage('es')}});switchLanguage('es');const fadeInElements=document.querySelectorAll('.fade_in');const onScroll=()=>{fadeInElements.forEach(element=>{const rect=element.getBoundingClientRect();if(rect.top<window.innerHeight-100&&rect.bottom>100){element.classList.add('visible')}else{element.classList.remove('visible')}})};window.addEventListener('scroll',onScroll);onScroll();const scrollContainer=document.querySelector('.scroll_container');scrollContainer.addEventListener('scroll',()=>{if(scrollContainer.scrollLeft>0){scrollContainer.classList.add('scrolled')}else{scrollContainer.classList.remove('scrolled')}});const icons=document.querySelectorAll('.icon');const themeIcon=document.getElementById('theme_icon');themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light');if(document.body.classList.contains('light')){themeIcon.classList.replace('fa-sun','fa-moon')}else{themeIcon.classList.replace('fa-moon','fa-sun')}
icons.forEach(element=>{const src=element.getAttribute('src');if(src.includes('&theme=light')){element.setAttribute('src',src.replace('&theme=light',''))}else{element.setAttribute('src',`${src}&theme=light`)}})});const menuToggle=document.getElementById('menu_toggle');const navMenu=document.getElementById('nav_menu');menuToggle.addEventListener('click',()=>{menuToggle.classList.toggle('active');navMenu.classList.toggle('nav_active')});const navItems=document.querySelectorAll('.nav_menu');navItems.forEach(item=>{item.addEventListener('click',()=>{menuToggle.classList.toggle('active');navMenu.classList.toggle('nav_active')})});const thumbnails=document.querySelectorAll('.certificate_thumbnail');thumbnails.forEach((element,index)=>{element.onclick=function(){const thumbnail=thumbnails[index];if(thumbnail.classList.contains('expanded')){thumbnail.classList.remove('expanded')}else{thumbnail.classList.add('expanded')}}});document.addEventListener('contextmenu',function(e){if(e.target.tagName==='IMG'){e.preventDefault()}});const form=document.getElementById('contact_form');form.addEventListener('submit',async function(e){e.preventDefault();const formData=new FormData(form);const response=await fetch(form.action,{method:form.method,body:formData,headers:{'Accept':'application/json'}});if(response.ok){alert('¡Mensaje enviado con éxito!');form.reset()}else{alert('Error al enviar el mensaje. Inténtalo nuevamente.')}});function typeSubtitle(texts){if(count===texts.length){count=0}
currentText=texts[count];if(!isDeleting){letter=currentText.slice(0,index++);if(letter.length===currentText.length){setTimeout(()=>isDeleting=!0,1000)}}else{if(index>0){letter=currentText.slice(0,index--)}else{isDeleting=!1
count++}}
subtitle.textContent=letter;typeSpeed=isDeleting?20:50;typingInterval=setTimeout(()=>typeSubtitle(texts),typeSpeed)};function resetTyping(){count=0;index=0;currentText='';letter='';isDeleting=!1;clearTimeout(typingInterval);typeSpeed=50}})