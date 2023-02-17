<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manual

    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-md-0
        img(src='@/assets/curso/temas/tema_4/img_1.png', alt='Texto que describa la imagen')
      .col-lg-9
        p Los manuales son publicaciones que cubren aspectos básicos de un tema. Es una guía que puede ayudarlo a comprender cómo funcionan las cosas o presentar a sus lectores un tema de manera organizada y concisa.

    h3 Tipos de manuales

    p.mb-5 A continuación, podrá conocer diferentes tipos de manuales.

    .tarjeta-avatar-b.mb-0
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/temas/tema_4/img_2.svg' alt='AvatarTop')
      .tarjeta.tar_color
        .p-4
          h3 Manuales del usuario:
          p Son documentos que permite a los usuarios de un sistema de información, comprender y utilizar sus funciones. También es una guía de ayuda al usuario final para ejecutar el programa y solucionar los problemas más comunes.
          p.mb-0 Por lo tanto, el manual del usuario es un documento de comunicación técnica para ayudar a quienes utilizan el sistema. Además de la originalidad, los autores del folleto deben intentar encontrar un lenguaje cortés y sencillo para atraer a la mayor cantidad de compradores posible.
    .tarjeta-avatar-b.mb-0
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/temas/tema_4/img_3.svg' alt='AvatarTop')
      .tarjeta.tar_color_1
        .p-4
          h3 Manuales técnicos: 
          p Son una guía para una audiencia con experiencia técnica en un área temática en particular.

          p Estos manuales contienen la documentación del proyecto en el que se esté trabajando, esto es importante para facilitar la identificación de los aspectos y funciones que forman parte de él. La información adecuada le da iniciativa, identidad y originalidad, para que innumerables usuarios puedan comprender más fácilmente las ventajas, desventajas, características, capacidades y funciones, así como los costos y beneficios asociados con el desarrollo de cualquier proyecto.

          p.mb-0 Por lo tanto, el manual técnico es un documento de comunicación técnica para ayudar a quienes utilizan el sistema. Además de la originalidad, los autores del folleto intentan encontrar un lenguaje cortés y sencillo para atraer a la mayor cantidad de compradores posible. Debido a la complejidad, todos los productos electrónicos o informáticos suelen tener sus propios manuales de ténicos. 

    .tarjeta-avatar-b.mb-0
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/temas/tema_4/img_4.svg' alt='AvatarTop')
      .tarjeta.tar_color
        .p-4
          h3 Manuales del fabricante: 
          p Se debe elaborar para cualquier producto, modelo, serie, especificación, entre otros. Es un folleto o libro que describe las características del producto, incluye la mejor manera de manipularlo, cómo hacerlo funcionar y mantenerlo en buenas condiciones.

          p La mejor parte es que el manual está hecho por el fabricante del producto, por lo que no tendrá una mejor indicación de cómo usarlo correctamente. Casi todos los electrodomésticos nuevos vienen con un manual del fabricante que brinda instrucciones simples sobre cómo cuidarlos y qué hacer si fallan.

          p.mb-0 Cualquier fabricante bueno y de buena reputación incluirá un manual del fabricante con su producto, es lo primero que debe consultar cualquier persona que compre un dispositivo nuevo, de lo contrario, existe el riesgo de cometer error. Estos riesgos llevan a otro riesgo: daño del producto y pérdida de la garantía por mala manipulación.
    .tarjeta-avatar-b.mb-0
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/temas/tema_4/img_5.svg' alt='AvatarTop')
      .tarjeta.tar_color_1
        .p-4
          h3 Ficha técnica: 
          p Es una herramienta para que los exportadores comuniquen las especificaciones técnicas de sus productos de forma estándar y sencilla. Esta información es muy útil a nivel comercial y logístico. En lo comercial el cliente comprende las características, composición y apariencia del producto; a nivel logístico atiende a empresas que brindan información sobre transporte, peso, dimensiones, especificaciones, almacenamiento y manejo. Tiene una aplicación única en exposiciones y misiones comerciales. 
          p El documento debe estar escrito con elementos de comunicación, debe ser visualmente atractivo y fácil de leer, debe estar libre de información y no contener información innecesaria.
          p Los documentos técnicos no son documentos fijos; su contenido se ajusta a medida que se dispone de nueva información y debe adaptarse al mercado al que desean dirigirse.

          p.mb-0 La ficha técnica debe incluir:
          ul.lista-ul--color.mb-0
            li 
              span.lista-ul__vineta
              | Identificación del producto: nombre comercial, nombre técnico y nombre científico (si es un producto de origen vegetal o animal); condiciones aduaneras para el país exportador.
            li 
              span.lista-ul__vineta
              | Datos técnicos: composición, propiedades fisicoquímicas y densidad.
            li 
              span.lista-ul__vineta
              | Informe comercial: presentación, variedades, usos, empaque, embalaje, unidades por caja.
            li 
              span.lista-ul__vineta
              | Aspectos arancelarios: Si el producto se acoge a algún tratado de libre comercio (TLC). 


    .cajon.color-acento-botones.mb-4.p-5.mt-5
      p.mb-0 Estimado aprendiz, ha llegado al final de este componente formativo. Recuerde explorar los demás recursos que se encuentran disponibles en el menú principal como son la síntesis, la actividad didáctica, el material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
