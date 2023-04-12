<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-9.mb-4.mb-md-0
        p Estimado aprendiz, en este componente formativo se hablará sobre el mantenimiento del hardware y el software y su relación con los clientes, que son las empresas o personas que utilizan o adquieren un producto o servicio, de forma habitual u ocasional, se abordará el tema del soporte técnico a los usuarios y a partir de eso se desarrollará el tema de la mesa de ayuda como apoyo en la corrección de errores de programación de software y fallas de instalación de hardware. Además, se explorará la importancia de la medición y los diagramas como método para revisar la relación de la empresa con sus clientes, evaluar el grado de satisfacción, estudiar procesos y, también, interpretar información recopilada.

        p
          strong En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-lg-3
        img(src='@/assets/curso/temas/tema_1/img_1.svg', alt='Texto que describa la imagen')

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/25H158W7iqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
