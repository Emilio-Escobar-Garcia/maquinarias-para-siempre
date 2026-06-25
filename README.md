# Maquinarias para Siempre

Sitio estático en Astro para un catálogo de maquinaria forestal en español.

## Requisitos

- Node.js compatible con `package.json`: `>=22.12.0`.
- npm.

## Instalar

```sh
npm install
```

## Ejecutar en desarrollo

Según las reglas del proyecto, usa el servidor en segundo plano:

```sh
npm run astro -- dev --background
```

También puedes administrarlo con:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Compilar

```sh
npm run build
```

## Previsualizar la compilación

```sh
npm run preview
```

## Estructura principal

```text
src/
  components/        Componentes reutilizables.
  content/           Contenido de marcas, categorías y productos.
  layouts/           Layout base del sitio.
  pages/             Rutas estáticas y dinámicas de Astro.
  content.config.ts  Esquemas validados de Content Collections.
  site.config.ts     Datos generales de la empresa.
```

## Datos generales de la empresa

Edita `src/site.config.ts` para cambiar nombre, descripción, ubicación, WhatsApp, correo, Instagram, horario y avisos provisionales.

## Añadir una marca

Crea un archivo Markdown en `src/content/brands/`, por ejemplo:

```md
---
name: Nombre de marca
slug: nombre-de-marca
shortDescription: Descripción corta validada.
description: Descripción ampliada opcional.
countryOfOrigin: País o región si está confirmado.
draft: false
seoTitle: Título SEO opcional
seoDescription: Descripción SEO opcional
---
```

No afirmes representaciones comerciales sin confirmación.

## Añadir una categoría

Crea un archivo Markdown en `src/content/categories/`, por ejemplo:

```md
---
name: Nombre de categoría
slug: nombre-de-categoria
shortDescription: Descripción corta validada.
description: Descripción ampliada opcional.
alternativeTerms:
  - término alternativo
order: 2
draft: false
seoTitle: Título SEO opcional
seoDescription: Descripción SEO opcional
---
```

## Añadir un producto

Crea un archivo Markdown en `src/content/products/`, por ejemplo:

```md
---
name: Nombre del producto
slug: nombre-del-producto
brand: krpan
category: winches-forestales
shortDescription: Descripción corta validada.
mainDescription: Descripción principal validada.
features:
  - Ventaja o característica validada.
applications:
  - Aplicación validada.
specifications:
  - name: Nombre del dato
    value: Valor validado
alternativeTerms:
  - término alternativo
availability: consultar
featured: false
draft: false
seoTitle: Título SEO opcional
seoDescription: Descripción SEO opcional
---
```

Las especificaciones técnicas son variables por producto. No todos los productos deben tener los mismos campos.

## Borradores

Para ocultar una marca, categoría o producto de las páginas públicas, usa:

```md
draft: true
```

El contenido provisional debe indicarlo claramente en sus textos.
