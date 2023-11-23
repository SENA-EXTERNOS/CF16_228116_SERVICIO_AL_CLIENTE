export default {
  global: {
    componenteFormativo: 'Servicio al cliente',
    descripcionCurso:
      'Este componente formativo está pensado en el manejo que se le debe de dar a los clientes antes y después de la adquisición de cualquier producto de tecnología que la empresa venda.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cliente',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diagramas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manuales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Servicio al cliente',
      referencia:
        'Arismendy A. (27 de abril de 2017). <i>Claves de la Atención y del Servicio al cliente</i>. [Archivo de video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/gIxRkx2IH3E',
    },
    {
      tema: 'Atención y servicio al cliente',
      referencia:
        'Grupo Proikos (24 de junio de 2015) <i>Atención y Servicio al Cliente</i>. [Archivo de vídeo] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/5xGoNUkHpZQ',
    },
    {
      tema: 'Como Dar Soporte Técnico Online a una PC - [Servicio Real].',
      referencia:
        'VillaTec (18 de marzo de 2017) <i>Como Dar Soporte Técnico Online a una PC </i>- [Servicio Real]. [Archivo de vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Pzr8n7dNgE0',
    },
  ],
  glosario: [
    {
      termino: 'Agente',
      significado:
        'es el miembro del equipo de soporte al que se le asignan <em>tickets</em> de atención y es el responsable de resolver las solicitudes de los clientes. Los agentes también pueden interactuar directamente con los clientes para atender las solicitudes de atención, a través de los canales de comunicación como el teléfono, el correo electrónico, el chat y las redes sociales.',
    },
    {
      termino: 'Centro de atención al usuario - CAU',
      significado:
        'conjunto de recursos tecnológicos y humanos, para prestar servicios con la posibilidad de gestionar y solucionar todas las posibles incidencias de manera integral, junto con la atención de requerimientos relacionados con las tecnologías de la información y la comunicación (TIC).',
    },
    {
      termino: '<em>Chatbots</em>',
      significado:
        'es un programa informático con el que es posible mantener una conversación y que funciona mediante inteligencia artificial.',
    },
    {
      termino: 'Cliente',
      significado:
        '“es la persona, empresa u organización que adquiere o compra de forma voluntaria productos o servicios que necesita o desea para sí mismo, para otra persona u organización; por lo cual, es el motivo principal por el que se crean, producen, fabrican y comercializan productos y servicios” (Instituto Tecnológico de Sonora. 2013, pág. 6).',
    },

    {
      termino: 'Competitividad',
      significado:
        'es la capacidad de un negocio o empresa para crear estrategias que lo ayuden a adquirir una posición vanguardista en el mercado. Se destaca la habilidad, recurso o conocimiento que dispone una empresa de la cual carecen sus competidores.',
    },
    {
      termino: 'Horario comercial',
      significado:
        'son los días y las horas en que los clientes de una compañía tienen acceso a un agente de soporte. Si bien los clientes pueden considerar que el soporte 24 horas del día, todos los días del año, es ideal, una compañía puede establecer su horario comercial en función de la demanda regional examinando los tipos de clientes, los canales de soporte disponibles y los comentarios de los clientes. Esos datos proporcionan información a la empresa sobre cuáles son las horas óptimas para tener agentes.',
    },
    {
      termino: 'Servicio',
      significado:
        'como “prestación que satisface alguna necesidad humana y que no consiste en la producción de bienes materiales”. Un servicio es una prestación, un activo de naturaleza económica pero que no tiene presencia física propia (es intangible), a diferencia de los bienes que sí la tienen.',
    },
    {
      termino: '<em>SMS</em>',
      significado:
        'servicio de mensaje corto. Disponible en redes digitales <em>(GSM)</em> permitiendo enviar y recibir hasta 160 caracteres a teléfonos móviles vía el centro de mensajes de un operador de red.',
    },
    {
      termino: '<em>VPC</em>',
      significado:
        '<em>virtual Private Cloud</em>, o nube privada virtual. Se refiere a un conjunto de recursos informáticos que se pueden escalar bajo demanda y residen en un entorno de nube pública.',
    },
    {
      termino: '<em>VPN</em>',
      significado:
        '<em>red privada virtual</em>, describe la oportunidad de establecer una conexión protegida al utilizar redes públicas. Las <em>VPN</em> cifran su tráfico en internet y disfrazan su identidad en línea. Esto le dificulta a terceros el seguimiento de sus actividades en línea y el robo de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arandasoft (2021). <i>La función de una Mesa de Ayuda dentro de la organización</i>. Aranda Software.',
      link:
        'https://arandasoft.com/blog/la-funcion-de-una-mesa-de-ayuda-dentro-de-la-organizacion/',
    },
    {
      referencia:
        'Quiroz, Angie. (4 de mayo de 2022). <i>Servicio al cliente: ¿Qué es y para qué sirve en tu empresa?</i> B2chat.',
      link:
        'https://www.b2chat.io/blog/servicio-al-cliente/servicio-al-cliente-que-es-para-que-sirve/',
    },
    {
      referencia:
        'Mintic. (julio de 2016). <i>Modelo de gestión it4+</i>. Ministerio de las TIC.',
      link:
        'https://mintic.gov.co/gestionti/615/w3-propertyvalue-6204.html?_noredirect=1',
    },

    {
      referencia: 'Cyta. <i>Diagrama de Causa y Efecto</i>. Cyta.com. ',
      link:
        'http://www.cyta.com.ar/biblioteca/bddoc/bdlibros/herramientas_calidad/causaefecto.htm#:~:text=El%20Diagrama%20de%20Causa%20y,determinar%20exactamente%20las%20posibles%20causas.',
    },
    {
      referencia:
        'Kotler Philip, Armstrong Gary, Cámara Dionisio y Cruz Ignacio. (2004). <i>Marketing</i> (Pág. 43). Prentice Hall',
    },
    {
      referencia:
        'Oracle. (2022). Página web institucional. <i>¿Qué es un WAF?</i> https://www.oracle.com.',
      link: 'https://www.oracle.com/es/database/security/que-es-un-waf.html',
    },

    {
      referencia:
        'Pérez Sánchez, Fernando A. Conferencia Internacional de Ciencias Empresariales - <i>La filosofía del servicio al cliente orientada a Latinoamérica</i>. Colombia: INPEFRA Ingenieros.',
      link:
        'https://es.scribd.com/document/466468200/08-filosofia-del-servicio-al-cliente',
    },
    {
      referencia:
        'POWERDATA. (2022). Página web empresarial. Consultado el 21 de noviembre de 2022. Recuperado de: ',
      link: 'https://www.powerdata.es/data-warehouse',
    },

    {
      referencia:
        'Corrales, Juan Andrés. (25 de Julio 2019).<i> Servicio al cliente: ¿qué es y por qué es un pilar de las empresas exitosas?</i>  Rockcontent.',
      link: 'https://rockcontent.com/es/blog/servicio-al-cliente/',
    },

    {
      referencia:
        'Rodríguez J. (2006, agosto). Seminario La importancia del servicio al Cliente. Guatemarmol.',
      link:
        'https://www.emagister.com/uploads_courses/Comunidad_Emagister_42682_42681.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
