import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BqhY6rtG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CqNutD1w.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Sobre mi", "data-astro-cid-5dka24tf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="d-flex justify-content-center bg-transparent row mt-2" data-astro-cid-5dka24tf> <div class="cajaImgAbout col-lg-3 mx-5 mb-5" data-astro-cid-5dka24tf> <img src="/imgAbout.jpeg" class="rounded" data-astro-cid-5dka24tf> </div> <div class="col-lg-6 mx-5 text-white" data-astro-cid-5dka24tf> <div class="titulos" data-astro-cid-5dka24tf> <h2 data-astro-cid-5dka24tf> <i class="bx bxs-hand" data-astro-cid-5dka24tf></i>
Hola soy <span data-astro-cid-5dka24tf>José</span> </h2> <h2 data-astro-cid-5dka24tf> <i class="bx bxs-data" data-astro-cid-5dka24tf></i>
Desarrollador <span data-astro-cid-5dka24tf>backend</span> </h2> </div> <hr class="text-success mx-2" data-astro-cid-5dka24tf> <div class="cajaParrafoAbout" data-astro-cid-5dka24tf> <p data-astro-cid-5dka24tf>
Soy estudiante de informática apasionado por la 
                    tecnología y la innovación en el desarrollo 
                    de software. Deseoso de aplicar lo aprendido 
                    en mi carrera para generar soluciones a problemas 
                    de negocio y la experiencia práctica en proyectos tecnológicos. 
                    Fuera de los estudios, disfruto mucho el hacer ejercicio continuo, 
                    los videojuegos y el cuidado de mi mascota, lo que ha contribuido 
                    a mi enfoque integral de la vida y el trabajo, fomentando la disciplina 
                    y la perseverancia en todas mis actividades.
</p> </div> <hr class="text-success mx-2" data-astro-cid-5dka24tf> <div class="mx-2 my-3" data-astro-cid-5dka24tf> <h3 data-astro-cid-5dka24tf> <span data-astro-cid-5dka24tf> <i class="bx bxs-dashboard" data-astro-cid-5dka24tf></i> </span>
Medios de <span data-astro-cid-5dka24tf>contacto</span>
y mi <span data-astro-cid-5dka24tf>CV</span> </h3> <a class="btn btn-outline-success me-2" href="https://w.app/xyFsib" title="Whatsapp" target="_blank" data-astro-cid-5dka24tf> <i class="bx bxl-whatsapp fs-2" data-astro-cid-5dka24tf></i> </a> <a class="btn btn-outline-success me-2" href="https://mail.google.com/mail/?view=cm&to=jdmorianperez@gmail.com" title="Correo electrónico" target="_blank" data-astro-cid-5dka24tf> <i class="bx bxl-gmail fs-2" data-astro-cid-5dka24tf></i> </a> <a class="btn btn-outline-success me-2" href="https://github.com/Tucusitox" title="Github" target="_blank" data-astro-cid-5dka24tf> <i class="bx bxl-github fs-2" data-astro-cid-5dka24tf></i> </a> <a class="btn btn-outline-success me-2" href="/José_Daniel_Morian_CV.pdf" title="Curriculum" target="_blank" data-astro-cid-5dka24tf> <i class="bx bxs-file fs-2" data-astro-cid-5dka24tf></i> </a> </div> </div> </section> ` })} `;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/pages/about.astro", undefined);

const $$file = "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
