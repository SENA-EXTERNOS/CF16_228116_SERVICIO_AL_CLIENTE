<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Medición

    p.mb-5 Es un método que utilizan las empresas para averiguar cómo se sienten sus clientes acerca de sus servicios y recopilar comentarios sobre su satisfacción para que puedan mejorar.

    .row.justify-content-center.mb-5.d-none.d-lg-block
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-3.p-md-4.mb-5
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La satisfacción del cliente es fundamental para cualquier empresa, independientemente del tipo de negocio. De hecho, una mala experiencia de servicio hace que el 90% de los consumidores terminen su relación con una organización. Medir el servicio al cliente proporciona un punto de referencia que impulsa la prestación óptima del servicio, la lealtad y, en última instancia, el crecimiento y la rentabilidad de la marca. Hay muchas formas de medir el servicio, estas deben aplicarse teniendo en cuenta las necesidades y preferencias del cliente y las particularidades de cada empresa. En la medición del servicio al cliente se aplican una variedad de métodos para impulsar su negocio, incluidos <i>Mystery Shopper, Training, QuarteR y Rate Now</i>. Además, a medida que se esfuerzan por crear una experiencia de servicio única, se han implementado una variedad de métodos para ayudar a medir y mejorar la satisfacción del cliente, incluyendo el análisis de la competencia, el diseño del modelo de servicio, las aplicaciones de investigación de mercado y las encuestas.

    h3 Tipos de instrumentos de medición

    p.mb-5 Siguiendo con la atención al cliente, existen diferentes tipos de instrumentos de medición para la calidad de la atención prestada:

    .fondo-3.p-5
      .row
        .col-lg-4.mb-4.mb-md-0(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema_2/img_3.png', alt='Texto que describa la imagen')
        .col-lg-8(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
            div(titulo="<i>Net Promoter Score (NPS)</i>")
              p Se utiliza para medir cuánto les gusta el servicio prestado a los clientes y para recomendarla a otras personas (o promoverla). Esta es una puntuación calculada a partir de las preguntas que se envían a los usuarios para saber si recomendarían una marca determinada. Esta medida va de cero (0) a 10 y se basa en la calificación final otorgada. NPS es un indicador simple pero muy efectivo de cuán satisfechos están los clientes, siendo promotores o detractores de la marca, determinando así el grado de lealtad.

              p.mb-0 A NPS le interesa que sea fácil de calcular, que este número se comparta en toda la empresa y que sea una herramienta que difunda la cultura del cliente.
            div(titulo="Encuesta de satisfacción del cliente")
              p Las encuestas de satisfacción son estudios empíricos, es la forma más económica y efectiva de recopilar información que permita tomar decisiones con base a información cuantitativa obtenida a través de esta acción. Las encuestas deben utilizarse para la toma de decisiones a corto, mediano y largo plazo. Sus principales objetivos son:

              ul.lista-ul--color.mb-0
                li 
                  span.lista-ul__vineta
                  | Conocer la satisfacción del cliente. 
                  li 
                    span.lista-ul__vineta
                    | Probar y comprender sus necesidades.
                  li 
                    span.lista-ul__vineta
                    | Obtener la información que se necesita para satisfacerle. 
                  li 
                    span.lista-ul__vineta
                    | Detectar áreas específicas para mejorar.
                  li 
                    span.lista-ul__vineta
                    | Conocer los factores que fortalecen las relaciones con los clientes.
                  li 
                    span.lista-ul__vineta
                    | Probar objetivos más específicos: comprender las expectativas del cliente, saber si recomiendan un producto o servicio, conocer fortalezas y debilidades, recopilar información descriptiva sobre los clientes para segmentarlos.

            div(titulo="Escala de Satisfacción al cliente (<i>Customer Satisfaction Score – CSAT</i>)")
              p.mb-0 Esta es una métrica destinada a medir qué tan satisfechos están los clientes con sus productos, servicios, atención y otros aspectos del proceso de compra. Los resultados se pueden utilizar para mejorar las experiencias de los consumidores, las relaciones comerciales y la imagen de marca.
            div(titulo="<i>Customer Effort Score (CES)</i>")
              p.mb-0 Este es uno de los muchos indicadores de satisfacción del cliente. Entre otras cosas, proporciona información sobre cómo los clientes complejos o simples, perciben sus interacciones con su negocio. CES se está convirtiendo en una métrica cada vez más importante en la gestión de la experiencia del cliente.
            div(titulo="<i>Consistency Score</i>")
              p.mb-0 Este instrumento es similar al CES, ya que ayuda a evaluar la consistencia de la información dada y la conexión entre todos los canales utilizados.

    .row.bg_2
      .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          div(titulo="<i>First Contact Resolution (FCR)</i>")
            p Es una métrica clave de servicio al cliente que se utiliza para medir la eficiencia del centro de llamadas. Su sigla corresponde a la resolución de primer contacto o <i>First Contact Resolution</i> en inglés. FCR mide el porcentaje de casos o asuntos resueltos en primera convocatoria, significando menos interacciones entre empresas y clientes, menos fricción y una mayor satisfacción del cliente. Pero al igual que el tiempo promedio de interacciones (<i>Average Handling Time – AHT</i>), la optimización de este también tiene un impacto significativo en el ahorro de costos, ya sea del propio centro o los asociados con las llamadas de servicio. De hecho, algunos estudios muestran que el 66% de todos los costos del centro de contacto se deben a las devoluciones de llamadas. Es decir, una llamada para resolver las cuestiones que no se resolvieron en el contacto inicial.

            p Hay varias formas de definir un FCR, por ejemplo:
            p Número total de llamadas resueltas en el primer intento, dividido por el número total de llamadas durante un período de tiempo. 
            p FCR sobre el número total de primeras llamadas. 
            p Es importante que la definición se ajuste a la situación en la que se quiere hacer la medición. Depende del tipo de industria, mercado o tamaño. También hay otros criterios, que deben adaptarse a las necesidades del centro de llamadas. La capacidad para extraer, analizar y dar sentido a los datos ayuda a definir la FCR y medir con precisión la resolución en la primera llamada.
          div(titulo="<i>Customer Loyalty Index (CLI)</i>")
            p Es la encargada de evaluar la satisfacción del cliente con los servicios proporcionados.
          div(titulo="<i>Brand Advocacy Index (BAI)</i>")
            p Permite medir el sentimiento positivo del servicio y lleva a convertirse en un defensor de esta.
          div(titulo="<i>Customer Advocacy (CA)</i>")
            p Es una forma especializada de servicio al cliente en la que una empresa se enfoca en lo que es mejor para el comprador. Se trata de un cambio de cultura empresarial basado en técnicas de marketing y atención al cliente centradas en el usuario.
          div(titulo="Indicador de Compromiso (ISCX)")
            p Permite visualizar el porcentaje de clientes satisfechos con el servicio prestado, mostrando quiénes son fieles y qué recomiendan del servicio.


      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema_2/img_4.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema2',
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
