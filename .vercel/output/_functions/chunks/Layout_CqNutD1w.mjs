import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderScript, e as createAstro, f as renderSlot, a as renderComponent, g as renderHead } from './astro/server_BqhY6rtG.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$HeaderNavbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-transparent px-5" data-astro-cid-wsaxdeyf> <nav class="navbar navbar-expand-lg" data-astro-cid-wsaxdeyf> <div class="container-fluid" data-astro-cid-wsaxdeyf> <a class="navbar-brand text-white fs-3" data-astro-cid-wsaxdeyf><b data-astro-cid-wsaxdeyf>José <span data-astro-cid-wsaxdeyf>Morian</span></b></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-wsaxdeyf> <span class="text-success fs-1" data-astro-cid-wsaxdeyf>&#9776</span> </button> <div class="container-fluid" data-astro-cid-wsaxdeyf> <div class="nav-container collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" data-astro-cid-wsaxdeyf> <div class="links navbar-nav nav-container fs-5" data-astro-cid-wsaxdeyf> <a class="nav-link" href="/about" data-astro-cid-wsaxdeyf>Sobre mi</a> <a class="nav-link" href="/" data-astro-cid-wsaxdeyf>Proyectos</a> <a class="nav-link" href="/skills" data-astro-cid-wsaxdeyf>Habilidades</a> <a class="nav-link" href="#" data-astro-cid-wsaxdeyf>Contactame</a> </div> </div> </div> </div> </nav> </header> `;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/components/HeaderNavbar.astro", undefined);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/node_modules/astro/components/ClientRouter.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titulo } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><link rel="icon" href="/logo-page.ico"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"><title>', "</title>", "", "</head> <body> ", ' <main class="MainSections p-4"> ', ' </main> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">\n	<\/script> </body></html>'])), addAttribute(Astro2.generator, "content"), titulo ?? "Astro Basics", renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "HeaderNavbar", $$HeaderNavbar, {}), renderSlot($$result, $$slots["default"]));
}, "C:/Users/pc/Desktop/Proyectos_serios/portafolio_morian/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
