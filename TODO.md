# TODO — landing page

## Página de soporte para App Store / Play Store

Apple y Google piden una **Support URL** al enviar la app a revisión: una
página donde el usuario encuentre ayuda o una forma de contactarte. No exige
un formulario "de verdad" (que envíe correo sin abrir el cliente de mail) —
un FAQ + un contacto visible ya cumple el requisito.

- [x] Sección `#soporte` con FAQ (4 preguntas) y formulario de contacto.
- [x] El formulario usa `mailto:` (`action="mailto:..." enctype="text/plain"`)
      — abre el cliente de correo del usuario con el mensaje ya armado. Cero
      backend, cero cuentas externas.
- [ ] **Decidir si migrar el formulario a un envío silencioso real.** Requiere
      una de estas dos cosas (ninguna la puedo crear yo, necesitan que tú
      abras la cuenta):
  - Un servicio externo tipo [Formspree](https://formspree.io) o
    [Web3Forms](https://web3forms.com) (cuenta gratis, te dan un endpoint o
    access key, se lo paso al `<form action="...">` y ya).
  - Una función propia en Cloudflare (`functions/api/contacto.ts`, ya que el
    proyecto tiene el adapter de Cloudflare) que llame a un servicio de envío
    de correos (Resend, SendGrid, Mailgun) — necesita su API key en las
    variables de entorno de Cloudflare Pages.
- [ ] Confirmar con Apple/Google si piden la Support URL apuntando al dominio
      raíz o pueden aceptar `https://tudominio.com/#soporte` — algunos
      formularios de las tiendas no siguen anchors (`#...`), en ese caso usar
      solo `https://tudominio.com/`.
- [ ] Una vez que la landing tenga dominio propio (ver abajo), poner esa URL
      en App Store Connect (App Information → Support URL) y en Play Console
      (Presencia en la tienda → Detalles de la app → Correo electrónico /
      sitio web de asistencia).

## Antes de mandar el link a las tiendas

- [ ] Desplegar a Cloudflare (`wrangler login` + `wrangler deploy`, o conectar
      el repo a Cloudflare Pages desde su dashboard para deploy automático en
      cada push).
- [ ] Dominio propio (o subdominio) en vez del `*.pages.dev` que da Cloudflare
      por defecto — se ve más profesional en las fichas de las tiendas.
- [ ] Reemplazar los botones "Próximamente" del hero por los links reales de
      App Store / Google Play una vez que la app esté publicada.
- [ ] Actualizar `og:image` con una imagen pensada para redes (1200×630) en
      vez del ícono cuadrado — hoy se ve recortado al compartir el link.
