import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as createAstro, a as renderComponent } from '../chunks/astro/server_BqhY6rtG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_CqNutD1w.mjs';
export { renderers } from '../renderers.mjs';

const skillsData = [
	{
		IdIcon: 1,
		IconTitulo: "HTML",
		RutaImg: "/SkillsIcons/html5.ico",
		IconWeb: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
	},
	{
		IdIcon: 2,
		IconTitulo: "CSS",
		RutaImg: "/SkillsIcons/ccs3.ico",
		IconWeb: "https://developer.mozilla.org/en-US/docs/Web/CSS"
	},
	{
		IdIcon: 3,
		IconTitulo: "JavaScript",
		RutaImg: "/SkillsIcons/js.ico",
		IconWeb: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
	},
	{
		IdIcon: 4,
		IconTitulo: "Bootstrap",
		RutaImg: "/SkillsIcons/boostrap.ico",
		IconWeb: "https://getbootstrap.com"
	},
	{
		IdIcon: 5,
		IconTitulo: "PHP",
		RutaImg: "/SkillsIcons/php-removebg-preview.ico",
		IconWeb: "https://www.php.net/docs.php"
	},
	{
		IdIcon: 6,
		IconTitulo: "MySQL",
		RutaImg: "/SkillsIcons/mysql2.ico",
		IconWeb: "https://dev.mysql.com/doc/"
	},
	{
		IdIcon: 7,
		IconTitulo: "Laravel",
		RutaImg: "/SkillsIcons/laravel.ico",
		IconWeb: "https://laravel.com/docs/11.x/readme"
	},
	{
		IdIcon: 8,
		IconTitulo: "Livewire",
		RutaImg: "/SkillsIcons/livewire.ico",
		IconWeb: "https://livewire.laravel.com/docs/installation"
	}
];

const $$Astro$1 = createAstro();
const $$SectionsProyects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionsProyects;
  const {
    TittleProyect,
    DescripProyect,
    BtnViewPlus,
    ViewCode,
    IdCarrousel,
    DataTargetCarrousel,
    ImgProyect1,
    ImgProyect2,
    ImgProyect3
  } = Astro2.props;
  const skills = skillsData;
  return renderTemplate`${maybeRenderHead()}<section class="d-flex justify-content-center row"> <div class="carousel slide col-lg-4 mx-3 mb-3"${addAttribute(IdCarrousel, "id")}> <div class="carousel-inner border border-2 border-success rounded"> <div class="carousel-item active"> <img${addAttribute(ImgProyect1, "src")} class="ImgProyectsCarrousel"> </div> <div class="carousel-item"> <img${addAttribute(ImgProyect2, "src")} class="ImgProyectsCarrousel"> </div> <div class="carousel-item"> <img${addAttribute(ImgProyect3, "src")} class="ImgProyectsCarrousel"> </div> </div> <button class="carousel-control-prev" type="button"${addAttribute(DataTargetCarrousel, "data-bs-target")} data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </button> <button class="carousel-control-next" type="button"${addAttribute(DataTargetCarrousel, "data-bs-target")} data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </button> </div> <div class="col-lg-6 text-start"> <h3 class="text-success custom-shadow d-none d-md-block"> <b>${TittleProyect}</b> </h3> <p class="text-white my-3 d-none d-md-block" style="width: 650px; height: 215px;"> ${DescripProyect} </p> <div class="text-start d-none d-md-block"> <h3 class="text-success custom-shadow mb-3"><b>Tecnologías utilizadas</b></h3> <div class="bg-transparent"> ${skills.map((item) => renderTemplate`<a class="btn btn-outline-success me-3 p-2"${addAttribute(item.IconTitulo, "title")}${addAttribute(item.IconWeb, "href")} target="_blank"> <img class="iconImg"${addAttribute(item.RutaImg, "src")}${addAttribute(item.IconTitulo, "alt")}> </a>`)} </div> </div> <div class="btnVerMas bg-transparent mt-3"> <button type="button" class="btn btn-success fs-4 me-2" data-bs-toggle="modal"${addAttribute(BtnViewPlus, "data-bs-target")}>
Ver más
</button> <a class="btn btn-outline-success"${addAttribute(ViewCode, "href")} title="Ver código" target="_blank"> <img class="iconImg" src="/SkillsIcons/github.ico" alt="Ver código"> </a> </div> </div> </section>`;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/components/proyects/SectionsProyects.astro", undefined);

const $$Astro = createAstro();
const $$ModalsProyects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ModalsProyects;
  const { TittleProyect, ViewProyectMp4 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="modal fade" id="section-1" data-astro-cid-4yekzhkn> <div class="modal-dialog modal-dialog-centered modal-fullscreen p-2" data-astro-cid-4yekzhkn> <div class="modal-content bg-transparent" style="backdrop-filter: blur(3rem);" data-astro-cid-4yekzhkn> <div class="modal-header d-flex justify-content-between border border-0" data-astro-cid-4yekzhkn> <h1 class="modal-title text-success custom-shadow fs-4" data-astro-cid-4yekzhkn><b data-astro-cid-4yekzhkn>${TittleProyect}</b></h1> <b data-astro-cid-4yekzhkn> <i class="bx bx-x text-danger fs-2" data-bs-dismiss="modal" title="Ver menos" data-astro-cid-4yekzhkn></i> </b> </div> <div class="modal-body d-flex justify-content-center" data-astro-cid-4yekzhkn> <video controls muted class="rounded" data-astro-cid-4yekzhkn> <source${addAttribute(ViewProyectMp4, "src")} type="video/mp4" data-astro-cid-4yekzhkn> </video> </div> </div> </div> </div> `;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/components/proyects/ModalsProyects.astro", undefined);

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- PROYECTO N1 -->${renderComponent($$result, "SectionsProyects", $$SectionsProyects, { "TittleProyect": "Sistema de supervisi\xF3n de empleados", "DescripProyect": `El sistema se encarga de gestionar la supervisi\xF3n del restaurante, 
		posee tres interfaces divididas en secciones las cuales son Empleados, 
		Procesos e Infraestructura cada uno divido en diversas secciones. 
		El sistema permite las operaciones CRUD en las tres interfaces como 
		tambi\xE9n generar evaluaciones de cada una de las interfaces y realizar 
		diversos c\xE1lculos para obtener el rendimiento de cada interfaz del 
		restaurante como por ejemplo cuanto tarda un platillo en ser cocinado 
		o las horas trabajadas por un empelado. Este sistema fue creado para 
		la feria de ciencias del Instituto Universitario Jes\xFAs Obrero, Caracas, 
		Venezuela. Dicho sistema a\xFAn tiene un amplio margen de mejora.`, ";": true, "BtnViewPlus": "#section-1", "ViewCode": "https://github.com/Tucusitox/Laravel_Supervision.git", "IdCarrousel": "1", "DataTargetCarrousel": "#1", "ImgProyect1": "/onePiece.jpg", "ImgProyect2": "/5.jpg", "ImgProyect3": "/kamehouse.png" })} <!-- MODAL PARA PROYECTO N1 --> ${renderComponent($$result, "ModalsProyects", $$ModalsProyects, { "TittleProyect": "Sistema de supervisi\xF3n de empleados", "ViewProyectMp4": "/proyectsMp4/daniela.mp4" })} ${renderComponent($$result, "SectionsProyects", $$SectionsProyects, { "TittleProyect": "M\xF3dulo ", "DescripProyect": `El sistema se encarga de gestionar la supervisi\xF3n del restaurante, .`, ";": true, "BtnViewPlus": "#section-2", "ViewCode": "https://github.com/Tucusitox/Laravel_Supervision.git", "IdCarrousel": "2", "DataTargetCarrousel": "#2", "ImgProyect1": "/onePiece.jpg", "ImgProyect2": "/5.jpg", "ImgProyect3": "/kamehouse.png" })} ${renderComponent($$result, "SectionsProyects", $$SectionsProyects, { "TittleProyect": "M\xF3dulo ", "DescripProyect": `El sistema se encarga de gestionar la supervisi\xF3n del restaurante, .`, ";": true, "BtnViewPlus": "#section-2", "ViewCode": "https://github.com/Tucusitox/Laravel_Supervision.git", "IdCarrousel": "3", "DataTargetCarrousel": "#3", "ImgProyect1": "/onePiece.jpg", "ImgProyect2": "/5.jpg", "ImgProyect3": "/kamehouse.png" })}`;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/components/proyects/Proyectos.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Proyectos", $$Proyectos, {})} ` })}`;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/pages/index.astro", undefined);

const $$file = "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
