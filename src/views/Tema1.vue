<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cliente

    .fondo-1.p-5
      .row.align-items-center(data-aos="fade-up")
        .col-lg-3.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema_1/img_3.svg', alt='Texto que describa la imagen')
        .col-lg-8
          p Es la persona que recibe los servicios de quien los presta, a cambio de un pago, por esta razón, los clientes valoran sus compras y pedidos y las manejan con mucho cuidado. Existen distintos tipos de clientes y dependen de la clase de compra o servicio que se piense adquirir.

    h3 Atención al cliente

    .cajon.color-primario.mb-4
      .row.h-100.d-flex.align-items-center.d-flex.mb-0
        .col-lg-9.mb-4.mb-md-0.h-100.d-flex
          .p-3
            p.mb-0 La atención al cliente se encarga de identificar todas las acciones que los clientes realizan antes y después del proceso de compra, también se le atribuye evaluar la aprobación de un producto o servicio. Su labor no se da únicamente cuando los clientes obtienen el artículo, sino que sucede antes, durante y después de la adquisición del producto o servicio. Además, un buen servicio al cliente no solo responde las preguntas del comprador, los apoya, aunque no soliciten su ayuda, atiende sus requerimientos y, satisface sus necesidades de manera efectiva. Asimismo, se debe caracterizar por otros aspectos como la amabilidad, la calidad y el calor humano, lo cual afectará, también, el servicio prestado.
        .col-lg-3.h-100.d-flex
          img(src='@/assets/curso/temas/tema_1/img_4.svg', alt='Texto que describa la imagen')


    h3 Clasificación de mesa de ayuda

    p.mb-5 Teniendo en cuenta lo anterior, se realizarán mesas de ayuda para la orientación y apoyo a las necesidades del cliente, en las cuales se detallará la asistencia o soporte por niveles, dependiendo de los tipos de problemas que puedan presentar los usuarios, así:

    .fondo-2.p-5
      .row
        .col-lg-4.mb-4.mb-md-0(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema_1/img_6.png', alt='Texto que describa la imagen')
        .col-lg-8(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
            div(titulo="Soporte nivel 1")
              p.mb-0 También llamado <em>help desk</em> o mesa de ayuda. Es el responsable de recibir una cantidad de casos y reunir la mayor cantidad de información sobre lo ocurrido. En este punto se determina la raíz del problema y, en caso de no resolverlo, se manda al técnico adecuado. 
            div(titulo="Soporte nivel 2")
              p Es el <i>service desk</i> (mesa de servicio) o soporte técnico. Se encarga de las tareas que se deben resolver y diagnosticar problemas más complejos que no se solucionarón en la mesa de ayuda. 
              p.mb-0 Proporciona asistencia en temas especializados. Quienes realizan este tipo de soportes tienen por lo menos un año de experiencia en la mesa de ayuda y son profesionales en los temas de software, redes de comunicación y bases de datos. 
            div(titulo="Soporte nivel 3")
              p.mb-0 Es el soporte de <em>back-end</em> y su responsabilidad es dar solución a problemas que requieren de un trabajo minucioso y más especializado, desde la configuración del <em>software</em> y la asistencia técnica en la instalación, hasta la puesta en marcha de nuevas instalaciones del producto y correcciones de fallas del sistema. Este soporte incluye a proveedores, fabricantes de <em>hardware</em> y <em>software</em>, así como a profesionales externos.

    h3 Metodologías para la mesa de ayuda

    p.mb-5 Para implementar una correcta metodología de mesa de ayuda, se deben tener en cuenta lo siguiente:

    .row
      .col-lg-8.mb-4.mb-md-0
        .bg_1
          TabsA.color-primario.mb-5
            .tarjeta.tarj-bg_2.p-4(titulo="Informes de <br>atención")
              p.mb-0 El trabajo principal de la mesa de ayuda es obtener informes de los clientes y su producto o servicio. Por medio de una plataforma digital, se registra al cliente en un ticket de soporte con el asunto del pedido. Lo mejor es darle una solución instantánea. Si esto no es posible, lo ayudará a rastrear su estado a tiempo.
            .tarjeta.tarj-bg_2.p-4.tb(titulo="Capacitación y <br>recomendaciones")
              p.mb-0 Una opción muy efectiva para aclarar las dudas de los clientes sobre el producto o servicio. En este punto se crea contenido a modo de guía para su correcto uso u operación. Esto puede ser a través de folletos, videos instructivos, tutoriales, artículos instructivos o cualquier otro material explicativo.
            .tarjeta.tarj-bg_2.p-4.tb_1(titulo="Soporte técnico")
              p.mb-0 En este campo, es fundamental contar con personal capacitado para dar soluciones concisas a las fallas técnicas que puedan presentarse. Lo proporciona una empresa para cerciorarse de que sus clientes utilicen sus productos y servicios, de la manera en que se ofrecen para la venta. El soporte técnico tiene como objetivo ayudar a los usuarios a resolver problemas específicos; la atención se brinda por teléfono, internet y, en algunos casos, visitas del personal a la casa del cliente; puede ayudar a resolver errores de programación de <i>software</i> o fallas de instalación de <i>hardware</i> de forma remota. En general, es importante señalar que la atención que brinda el soporte técnico no suele incluir la capacitación o educación de los usuarios, esto significa que, si llama al soporte técnico porque no sabe cómo usar el servicio, lo más probable es que el personal de soporte lo redirija a otra ubicación y no lo capacite. Por este motivo, muchas empresas cuentan con dos áreas diferenciadas, soporte técnico y capacitación.
            .tarjeta.tarj-bg_2.p-4.tb_2(titulo="<i>Call center</i>")
              p.mb-0 En algunos casos, la atención al cliente requiere más contacto presencial, por lo que la mesa de ayuda también cuenta con una línea telefónica para atender las consultas y reclamos de los clientes de manera personal y profesional.
            .tarjeta.tarj-bg_2.p-4.tb_3(titulo="<i>Blog</i>")
              p.mb-0 Es la mesa de ayuda que también sirve como base de conocimientos, en la cual, los clientes pueden encontrar artículos relacionados con las preguntas más frecuentes, de esta manera no se tendrá que consultar por otros medios y se ahorrará tiempo a los empleados.
            .tarjeta.tarj-bg_2.p-4.tb_4(titulo="Comunidad")
              p.mb-0 Las comunidades de mesa de ayuda permiten a los usuarios interactuar o leer a otros clientes de la marca que tienen las mismas dudas o contratiempos que ellos. Las respuestas dadas por los mismos usuarios serán útiles para otros. Siempre que esta información provenga de la experiencia con el producto, es bastante confiable.




      .col-lg-4
        img(src='@/assets/curso/temas/tema_1/img_7.png', alt='Texto que describa la imagen')





      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
