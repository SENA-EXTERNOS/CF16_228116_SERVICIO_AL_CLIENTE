<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagramas

    p.mb-5 Un diagrama es una tabla simplificada que representa información sobre un proceso o sistema. Puede ser simple o complejo, con pocos o muchos elementos. Observe un ejemplo a continuación, de lo que es un completo resumen que ayudará a conocer e interpretar la información de una forma sencilla e intuitiva, con distintos tipos, conceptos, resúmenes, entre otros, dependiendo de las necesidades de comunicación y de lo que esté estudiando.

    img.img-a.mb-5(src='@/assets/curso/temas/tema_3/img_1.svg', alt='Texto que describa la imagen')(data-aos="fade-down-right")

    p(data-aos="fade-down-left") Se utilizan en educación, medios y otros campos y, a menudo, consisten en pequeños cuadros, globos y flechas que conectan partes para formar un todo. Es un mapa visual que muestra cómo interactúan los componentes de una infraestructura tecnológica, tanto interna como externamente. Normalmente, este mapeo incluye puntos de acceso, sistemas, aplicaciones, redes, bases de datos, máquinas virtuales, contenedores y cualquier medida de seguridad ya implementada en la infraestructura, como la virtual <i>private cloud </i>(VPC) o parte de la red, <i>virtual private network</i> (VPN), <i>web application firewall</i> (WAF), <i>firewall</i>.

    p.mb-5(data-aos="fade-down-left") Existen muchos tipos de diagramas, sus características dependen, como se dijo, del requerimiento de uso o el objetivo para el cual se cree. Examinemos los más representativos.

    h3 Diagramas causa y efecto

    .row.mb-5
      .col-lg-7.mb-4.mb-md-0(data-aos="fade-right")
        .cajon.color-primario.mb-4.p-4
          p Es la representación de varios elementos de un sistema que pueden contribuir a un problema. Debido a que se parece al esqueleto de un pez, también se le llama <i>Ishikawa</i> o espina de pescado. Es una herramienta efectiva para estudiar procesos, situaciones y para desarrollar un plan de recolección de datos. Se utilizan para identificar las posibles causas de algún caso particular. La naturaleza gráfica de estos permite que los equipos organicen grandes cantidades de información sobre una situación e identifiquen los posibles orígenes. En última instancia, aumenta la probabilidad de identificar las causas fundamentales. Los diagramas de causa y efecto deben usarse cuando pueda responder "sí" a una o ambas de las siguientes preguntas:
          ul.lista-ul--color.mb-0
            li 
              span.lista-ul__vineta
              | ¿Deben identificarse las principales causas del problema? 
            li 
              span.lista-ul__vineta
              | ¿Tiene alguna opinión y/o punto de vista sobre la causa del problema?
      .col-lg-5(data-aos="fade-left")
        img.img-a(src='@/assets/curso/temas/tema_3/img_2.png', alt='Texto que describa la imagen')

    h3 Diagramas de soluciones

    p.mb-5 Este esquema se enfoca principalmente en la solución y el logro de los objetivos, planificando la solución o resultado esperado, como se presentan, por ejemplo, en los contratos arquitectónicos.

    img.img-a.mb-5(src='@/assets/curso/temas/tema_3/img_3.svg', alt='Texto que describa la imagen')

    p.mb-5 Este esquema puede fusionar los objetivos, los requisitos y las principales restricciones de participación; también destacar los campos de trabajo que serán más detallados con el modelo arquitectónico oficial. Su finalidad es involucrar rápidamente a las partes interesadas en una iniciativa de cambio para que todos los participantes entiendan que se intenta lograr la arquitectura de participación y cómo debe demostrar que este enfoque de solución tiene sentido, especialmente para las necesidades comerciales.

    p.mb-5 Lo invitamos a ver el siguiente video para profundizar en la temática:
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MXVT057ix3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

    .row.mb-5
      .col-lg-4.mb-4.mb-md-0
        .cajon.color-primario.mb-4.p-4
          p Diagramas de flujo
          p.mb-0 Muestra un proceso, sistema o algoritmo informático. Se utilizan ampliamente en muchos campos para documentar, revisar, planificar, mejorar y, a menudo, comunicar procesos complejos en diagramas claros y fáciles de entender. Usan rectángulos, óvalos, rombos y muchas otras formas para definir tipos de pasos con flechas de enlace que definen el flujo y la secuencia. Estos pueden variar, desde diagramas simples dibujados a mano hasta diagramas complejos generados por computadora, que describen múltiples pasos y caminos.
      .col-lg-8
        img.img-a(src='@/assets/curso/temas/tema_3/img_4.svg', alt='Texto que describa la imagen')

    h4 Elementos de un diagrama de flujo:

    p.mb-5 Los analistas de sistemas suelen utilizar diagramas de flujo para visualizar las cadenas de procesos en los sistemas empresariales. Son herramientas útiles para desarrollar sistemas comerciales efectivos, así como para solucionar problemas o mejorar los existentes. Estos se componen de elementos tipo símbolos y tienen una función determinada como final, proceso, subproceso, decisión, flechas y conectores:

    .row.justify-content-center.mb-5
      .col-lg-11
        img.img-a(src='@/assets/curso/temas/tema_3/img_5.svg', alt='Texto que describa la imagen')

    h4 Diagrama de proceso: 

    p Es una representación gráfica de los procesos más importantes que tienen lugar en la empresa, su disposición e interrelaciones. Muestra la secuencia e interacción de los pasos con la ayuda de símbolos gráficos que brindan una mejor visualización de este; ayudan a comprender y hacen que la descripción sea más clara e intuitiva. Como resultado, el plan de proceso es una herramienta importante para analizar y comprender aspectos para aumentar la productividad de los empleados y, generalmente puede descubrir el flujo de trabajo en sí. En resumen, es una herramienta que ayuda a una gestión empresarial más completa. 
    p Algunos de los diagramas de flujo de gestión de proyectos más populares son los diagramas de Gantt y PERT. Ambos te permiten planificar y programar tareas y proyectos de una forma muy sencilla e intuitiva.
    p.mb-5 A continuación, se explorarán los elementos básicos que contiene un diagrama de procesos: 
    .row
      .col-lg-8.mb-4.mb-md-0
        .bg_3
          TabsA.color-secundario.mb-5
            .tarjeta.tarj-bg_2.p-4(titulo="Procesos o <br>actividades")
              p.mb-0 Se representan con rectángulos y simbolizan actividades en un proceso empresarial. Son, quizás, los elementos más importantes de un diagrama de flujo, son aquellos que siempre están presentes y, por lo tanto, deben definirse de manera clara y concisa. Debe ser redactado con un verbo y un sustantivo, por ejemplo: escribir un nuevo informe para que lo vean los accionistas del grupo.
            .tarjeta.tarj-bg_2.p-4.tb(titulo="Subprocesos")
              p.mb-0 Se representan como un rectángulo con rayas dobles a cada lado, por lo tanto, a menudo forman parte de tareas más complejas, con el fin de asignar tareas más simples a los diagramas de flujo.
            .tarjeta.tarj-bg_2.p-4.tb_1(titulo="Nodos de <br>decisión")
              p.mb-0 Estos están representados por diamantes y son nodos en el cual el árbol va en una dirección según la respuesta. Suelen responder con una decisión de “sí” o “no”.
            .tarjeta.tarj-bg_2.p-4.tb_2(titulo="Conectores")
              p.mb-0 Gráficamente, están conectados por pequeños círculos o cuadrados marcados con letras. Esto garantiza que todos los procesos estén conectados de forma lógica y precisa en varias páginas.
            .tarjeta.tarj-bg_2.p-4.tb_3(titulo="Líneas de flecha")
              p.mb-0 Su función es mantener la coherencia y la claridad en la visión general del proceso. Se dibujan en una u otra dirección y normalmente representan el camino por el que fluye el diagrama.
            .tarjeta.tarj-bg_2.p-4.tb_4(titulo="Terminadores")
              p.mb-0 Están representados por rectángulos con esquinas curvas. Aparecen al principio y al final del diagrama de enrutamiento e indican el final del diagrama.
      .col-lg-4
        img(src='@/assets/curso/temas/tema_3/img_6.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema3',
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
