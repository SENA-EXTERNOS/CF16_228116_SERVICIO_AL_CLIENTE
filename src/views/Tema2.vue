<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Medición

    p.mb-5 Es un método que utilizan las empresas para averiguar cómo se sienten sus clientes acerca de sus servicios y recopilar comentarios sobre su satisfacción para que puedan mejorar.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-3.p-md-4.mb-5
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La satisfacción del cliente es fundamental para cualquier empresa, independientemente del tipo de negocio. De hecho, una mala experiencia de servicio hace que el 90% de los consumidores terminen su relación con una organización. Medir el servicio al cliente proporciona un punto de referencia que impulsa la prestación óptima del servicio, la lealtad y, en última instancia, el crecimiento y la rentabilidad de la marca. Hay muchas formas de medir el servicio, estas deben aplicarse teniendo en cuenta las necesidades y preferencias del cliente y las particularidades de cada empresa. #[.text_col En la medición del servicio al cliente se aplican una variedad de métodos para impulsar su negocio, incluidos Mystery Shopper, Training, QuarteR y Rate Now]. Además, a medida que se esfuerzan por crear una experiencia de servicio única, se han implementado una variedad de métodos para ayudar a medir y mejorar la satisfacción del cliente, incluyendo el análisis de la competencia, el diseño del modelo de servicio, las aplicaciones de investigación de mercado y las encuestas.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Tipo de instrumentos de medición

    p.mb-5 Siguiendo con la atención al cliente, existen diferentes tipos de instrumentos de medición para la calidad de la atención prestada:

    .fondo-3.p-5
      .row
        .col-lg-4.mb-4.mb-md-0(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema_2/img_3.png', alt='Texto que describa la imagen')
        .col-lg-8(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Net Promoter Score (NPS)")
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
                    | Probar objetivos más específicos: comprender las expectativas del cliente, saber si recomendar un producto o servicio, conocer fortalezas y debilidades, recopilar información descriptiva sobre los clientes para segmentarlos.

            div(titulo="Escala de Satisfacción al cliente (Customer Satisfaction Score – CSAT)")
              p.mb-0 Esta es una métrica destinada a medir qué tan satisfechos están los clientes con sus productos, servicios, atención y otros aspectos del proceso de compra. Los resultados se pueden utilizar para mejorar las experiencias de los consumidores, las relaciones comerciales y la imagen de marca.
            div(titulo="Customer Effort Score (CES)")
              p.mb-0 Este es uno de los muchos indicadores de satisfacción del cliente. Entre otras cosas, proporciona información sobre cómo los clientes complejos o simples, perciben sus interacciones con su negocio. CES se está convirtiendo en una métrica cada vez más importante en la gestión de la experiencia del cliente.
            div(titulo="Consistency Score")
              p.mb-0 Este instrumento es similar al CES, ya que ayuda a evaluar la consistencia de la información dada y la conexión entre todos los canales utilizados.

    .row.bg_2
      .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="First Contact Resolution (FCR)")
            p Es una métrica clave de servicio al cliente que se utiliza para medir la eficiencia del centro de llamadas. Su sigla corresponde a la resolución de primer contacto o First Contact Resolution en inglés. FCR mide el porcentaje de casos o asuntos resueltos en primera convocatoria, significando menos interacciones entre empresas y clientes, menos fricción y una mayor satisfacción del cliente. Pero al igual que el tiempo promedio de interacciones (Average Handling Time – AHT), la optimización de este también tiene un impacto significativo en el ahorro de costos, ya sea del propio centro o los asociados con las llamadas de servicio. De hecho, algunos estudios muestran que el 66% de todos los costos del centro de contacto se deben a las devoluciones de llamadas. Es decir, una llamada para resolver las cuestiones que no se resolvieron en el contacto inicial.

            p.mb-0 Más específicamente, hay varias formas de definir un FCR, por ejemplo:
            p.mb-0 Número total de llamadas resueltas en el primer intento, dividido por el número total de llamadas durante un período de tiempo. 
            p.mb-0 FCR sobre el número total de primeras llamadas. 
            p.mb-0 Es importante que la definición se ajuste a la situación en la que se quiere hacer la medición. Depende del tipo de industria, mercado o tamaño. También hay otros criterios, que deben adaptarse a las necesidades del centro de llamadas. La capacidad para extraer, analizar y dar sentido a los datos ayuda a definir la FRC y medir con precisión la resolución en la primera llamada.
          div(titulo="Customer Loyalty Index (CLI)")
            p Es la encargada de evaluar la satisfacción del cliente con los servicios proporcionados.
          div(titulo="Brand Advocacy Index (BAI)")
            p Permite medir el sentimiento positivo del servicio y lleva a convertirse en un defensor de esta.
          div(titulo="Customer Advocacy (CA)")
            p Es una forma especializada de servicio al cliente en la que una empresa se enfoca en lo que es mejor para el comprador. Se trata de un cambio de cultura empresarial basado en técnicas de marketing y atención al cliente centradas en el usuario.
          div(titulo="Indicador de Compromiso (ISCX)")
            p Permite visualizar el porcentaje de clientes satisfechos con el servicio prestado, mostrando quienes son fieles y que recomiendan el servicio.


      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema_2/img_4.png', alt='Texto que describa la imagen')
      

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Clasificación de instrumentos de medición

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.mb-4.p-4
          p.mb-0 Un indicador no es más que un dispositivo que compara un objeto con un determinado modelo a escala. Esta herramienta solo permite comparar los tamaños de los objetos en la naturaleza para determinar si uno de ellos cabe en el vacío, si se puede hacer otro del mismo tamaño o si se puede reducir. Los instrumentos se clasifican de acuerdo con los estándares y en realidad se dividen en instrumentos de medición directos e indirectos.

    p.mb-5 <strong>Medición directa</strong>: se obtiene cuando se toma una medición clara de la característica del servicio que se va a medir. Por ejemplo, puede comparar directamente su servicio con otros prestados, o medir con un cronómetro, cuánto tiempo toma el servicio.

    img.img-a.mb-5(src='@/assets/curso/temas/tema_2/img_5.svg', alt='Texto que describa la imagen')

    p.mb-5 <strong>Mediciones indirectas</strong>: las dimensiones se miden utilizando instrumentos de medición como los comparadores de cuadrante, que observan la diferencia entre los objetos y dispositivos de referencia. Estas por su lado, se determinan por:

    .fondo-4.p-5
      .row.bg_3
        .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            div(titulo="Por métodos de aplicación")
              p.mb-0 En este caso, se hace referencia a instrumentos de medida que se utilizan para aumentar el tamaño de los objetos o para realizar medidas aproximadas en el espacio, aunque en un caso u otro permiten realizar mediciones.
            div(titulo="Mecánica")
              p.mb-0 Son las que miden dimensiones muy pequeñas, en las cuales se pueden ver miles de centímetros. Son las que más se utilizan en la fabricación de motores.
            div(titulo="Neumática")
              p.mb-0 Determinan la cantidad de líquido que circula en el cuerpo.
            div(titulo="Electricidad")
              p.mb-0 Son útiles para obtener datos sobre la cantidad de corriente que puede fluir en un cable, equipo o entorno.
            div(titulo="Electrónica")
              p.mb-0 Es similar a un electrómetro, excepto que compara dos corrientes o intensidades que se pueden encontrar entre dos puntos en ellos, lo que permite mediciones más selectivas.
            div(titulo="Óptica")
              p.mb-0 Incluye instrumentos muy sofisticados que proporcionan datos de referencia sobre sí mismos al medir la velocidad y el volumen del sonido, así como la velocidad de las ondas de luz durante un período de tiempo o en un área específica.


        .col-lg-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema_2/img_6.png', alt='Texto que describa la imagen')
        


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
