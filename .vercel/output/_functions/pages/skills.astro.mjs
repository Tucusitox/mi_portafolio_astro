import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as renderScript, e as createAstro, b as addAttribute } from '../chunks/astro/server_BqhY6rtG.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$Layout } from '../chunks/Layout_CqNutD1w.mjs';
export { renderers } from '../renderers.mjs';

const skillsTechnical = [
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
	},
	{
		IdIcon: 9,
		IconTitulo: "Git",
		RutaImg: "/SkillsIcons/git.ico",
		IconWeb: "https://git-scm.com/doc"
	},
	{
		IdIcon: 10,
		IconTitulo: "Github",
		RutaImg: "/SkillsIcons/github.ico",
		IconWeb: "https://docs.github.com/es"
	}
];

const $$Astro = createAstro();
const $$SkillsComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillsComponent;
  const skillsTech = skillsTechnical;
  return renderTemplate`${maybeRenderHead()}<section class="card-body bg-transparent"> ${renderComponent($$result, "astro-heart", "astro-heart", {}, { "default": () => renderTemplate` <div class="container-fluid"> <div class="d-flex justify-content-center tabs mb-3"> <button class="active me-3 fs-4">Habilidades Técnicas</button> <button class="fs-4">Habilidades Blandas</button> </div> <div class="tab-content bg-transparent text-success"> <div class="IconsSkills text-center active"> ${skillsTech.map((item) => renderTemplate`<a class="btn btn-outline-success"${addAttribute(item.IconTitulo, "title")}${addAttribute(item.IconWeb, "href")} target="_blank"> <img class="iconImg"${addAttribute(item.RutaImg, "src")}${addAttribute(item.IconTitulo, "alt")}> </a>`)} </div> <div class="SoftSkills mt-5"> <h2> <i class="bx bx-circle"></i>
Comunicación efectiva
</h2> <h2> <i class="bx bx-circle"></i>
Atención al detalle
</h2> <h2> <i class="bx bx-circle"></i>
Trabajo en equipo
</h2> <h2> <i class="bx bx-circle"></i>
Resolución de problemas
</h2> <h2> <i class="bx bx-circle"></i>
Proactividad
</h2> <h2> <i class="bx bx-circle"></i>
Pensamiento crítico y analítico
</h2> </div> </div> </div> ` })} </section> <!-- SCRIPT PARA ANIMACION DE LAS TABS --> ${renderScript($$result, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/components/skills/SkillsComponent.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/components/skills/SkillsComponent.astro", undefined);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Habilidades" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SkillsComponent", $$SkillsComponent, {})} ` })}`;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/pages/skills.astro", undefined);

const $$file = "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/pages/skills.astro";
const $$url = "/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Skills,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
