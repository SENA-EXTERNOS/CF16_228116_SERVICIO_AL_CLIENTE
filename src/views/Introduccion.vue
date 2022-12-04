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
        p Estimado Aprendiz. Cuando se habla de mantenimiento del hardware y software, también se debe de hablar de clientes ya que se suele referir únicamente a empresas o personas que utilizan o adquieren un producto o servicio, de forma habitual u ocasional. Generalmente las empresas de informática brindan soporte técnico a sus usuarios. La atención es prestada por diferentes medios como internet, teléfono, o si el usuario lo requiere, se realiza una visita domiciliaria por parte del personal de servicio técnico. La mesa de ayuda puede apoyar en la corrección de errores de programación de software y fallas de instalación de hardware de forma remota. Se debe tener en cuenta que la atención brindada por la mesa de ayuda generalmente no incluye formación o capacitación para el usuario. Esto significa que, si llama a la mesa de ayuda porque no sabe cómo usar el servicio, es muy probable que la persona lo direccione a otra área. Debido a esto, muchas empresas tienen dos áreas bien diferenciadas: mesa de ayuda y zona de formación.

        p
          strong Se invita a explorar con atención el siguiente video que lo introducirá en el manejo a los clientes antes y después de adquirir algún producto de tecnología en cualquier empresa.

      .col-lg-3
        img(src='@/assets/curso/temas/tema_1/img_1.png', alt='Texto que describa la imagen')

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
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
