# Soluciones Peña · Sistema de cotizaciones

App web de un solo archivo (`index.html`). Código de acceso inicial: **101314** (se cambia con `node build.js NUEVOCODIGO` desde `index.src.html`).

## Uso
1. Abrir `index.html` o el enlace publicado.
2. Cargar el Excel de inventario (opcional: ya trae los 39 equipos del Anexo B). **No subir el Excel al repositorio.**
3. En cada fila: *Mantener precio* o *Modificar precio*.
4. *Generar cotización* → pide la **fecha de entrega** (se escribe en letras en el cierre) → *Descargar PDF / Imprimir* → «Guardar como PDF».

Precios y decisiones se guardan en el navegador (localStorage).

## Publicar
- Netlify / Vercel / Cloudflare Pages (gratis, repo privado): importar este repositorio, sin build.
- GitHub Pages con repo privado requiere plan de pago.
- Incluye `noindex` y `robots.txt`.
