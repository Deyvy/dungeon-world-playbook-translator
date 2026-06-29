import type { SpellSheetData } from '../spellsData';

export const magoSpellsData: SpellSheetData = {
  bannerLabel: 'Conjuros de Mago',

  page1: [
    {
      header: 'Movimientos',
      headerRight: 'casterLevel',
      markX: true,
      columns: [
        [
          {
            title: 'Lanzar un Conjuro (INT)',
            levelLabel: '',
            description:
              'Cuando <strong>lanzas un conjuro que tenías preparado</strong>, tira+INT. • Con un 10+, el conjuro es lanzado con éxito y puedes volver a usarlo otra vez posteriormente. • Entre 7 y 9, el conjuro tiene efecto, pero elige una cosa de la siguiente lista:',
            detailBullets: [
              'Atraes atención no deseada o te pones en riesgo. El DJ te dirá cómo.',
              'Tu conjuro perturba el tejido de la realidad al ser lanzado. Recibes -1 a <em>Lanzar conjuros</em> hasta que vuelvas a <em>Preparar conjuros</em>.',
              '"Olvidas" el conjuro después de lanzarlo. No puedes volver a lanzar ese conjuro hasta que vuelvas a prepararlo.',
            ],
            postText:
              'Ten en cuenta que mantener conjuros con efectos continuados hará que a veces recibas una penalización a tu tirada de <em>Lanzar conjuros</em>.',
          },
        ],
        [
          {
            title: 'Preparar Conjuros',
            levelLabel: '',
            description:
              'Cuando <strong>pasas un tiempo ininterrumpido (una hora o así) en tranquila contemplación de tu libro de conjuros:</strong>',
            detailBullets: [
              'Pierdes todos los conjuros que tenías preparados.',
              'Prepara los nuevos conjuros que elijas de tu libro de conjuros cuyos niveles en total no superen tu propio nivel de conjurador arcano +1.',
              'Prepara todos tus trucos, que no cuentan para el límite de conjuros.',
            ],
          },
        ],
        [
          {
            title: 'Libro de Conjuros',
            levelLabel: '',
            description:
              'Has dominado varios conjuros que has transcrito en tu libro de conjuros. Comienzas con tres conjuros de primer nivel en tu libro de conjuros, además de todos los <strong>trucos</strong>. Cada vez que subas de nivel, añade en tu libro un nuevo conjuro de un nivel igual o inferior al tuyo. Tu libro de conjuros tiene peso 1.',
          },
        ],
      ],
    },
    {
      header: 'Trucos',
      subtext:
        'Todos los trucos se preparan cada vez que <span style="font-weight:700;color:#6c6e70">preparas conjuros</span>, sin necesidad de elegirlos ni contarlos para el total de conjuros.',
      columns: [
        [
          {
            title: 'Luz',
            levelLabel: 'Truco',
            description:
              'Un objeto que toques brilla con una luz arcana más o menos igual de resplandeciente que una antorcha. No produce calor ni sonido y no requiere combustible, pero por lo demás funciona como una antorcha normal. Tienes control completo sobre el color de la llama. El conjuro dura tanto tiempo como el objeto esté en tu presencia.',
          },
        ],
        [
          {
            title: 'Sirviente Invisible',
            levelLabel: 'Truco',
            description:
              'Convocas un constructo sencillo e invisible que no puede hacer nada salvo acarrear objetos. Tiene Carga 3 y puede llevar cualquier cosa que le entregues. No puede coger objetos por su cuenta, solo tomarlos de tu mano. Los objetos transportados por un sirviente invisible parecen flotar en el aire unos cuantos pasos tras de ti. Un sirviente invisible que recibe daño o abandona tu presencia es desconvocado inmediatamente, dejando caer todos los objetos que transportase. Por lo demás, el sirviente invisible te sirve hasta que decides finalizar este conjuro.',
          },
        ],
        [
          {
            title: 'Prestidigitación',
            levelLabel: 'Truco',
            description:
              'Puedes realizar truquitos menores de magia real. Si tocas un objeto como parte del lanzamiento del conjuro puedes hacerle cambios cosméticos: limpiarlo, ensuciarlo, calentarlo, darle sabor o cambiar su color. Si lanzas este conjuro sin tocar ningún objeto puedes crear ilusiones menores de un tamaño no superior a ti. La naturaleza ilusoria de los efectos creados con prestidigitación resultan evidentes y no engañarán a nadie, pero pueden distraerles.',
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 1',
      columns: [
        [
          {
            title: 'Contactar con Espíritus',
            levelLabel: 'Invocación Nivel 1',
            description:
              'Nombra al espíritu con el que quieres contactar (o déjaselo al DJ). Atraerás a esa criatura de entre los planos, lo bastante como para hablar con ella. Está obligada a responder lo mejor que pueda a una pregunta que le hagas.',
          },
          {
            title: 'Detectar Magia',
            levelLabel: 'Adivinación Nivel 1',
            description:
              'Uno de tus sentidos se sintoniza brevemente con la magia. El DJ te dirá qué es mágico en las inmediaciones.',
          },
          {
            title: 'Proyectil Mágico',
            levelLabel: 'Evocación Nivel 1',
            description: 'De tus dedos surgen proyectiles de pura magia. Haces 2d4 de daño a un objetivo.',
          },
        ],
        [
          {
            title: 'Encantar Persona',
            levelLabel: 'Encantamiento Nivel 1 (mantenido)',
            description:
              'La persona (no animal ni monstruo) a la que toques mientras lanzas el conjuro te creerá un amigo hasta que le hagas daño o se demuestre lo contrario.',
          },
          {
            title: 'Invisibilidad',
            levelLabel: 'Ilusión Nivel 1 (mantenido)',
            description:
              'Toca a un compañero y nadie podrá verle. ¡Es invisible! El conjuro persiste hasta que el objetivo ataca o canceles el efecto. No puedes lanzar otros conjuros mientras mantengas este.',
          },
        ],
        [
          {
            title: 'Telepatía',
            levelLabel: 'Adivinación Nivel 1 (mantenido)',
            description:
              'Creas un vínculo telepático con una única persona a la que toques, permitiéndote conversar con ella a través del pensamiento. Solo puedes mantener un vínculo telepático al mismo tiempo.',
          },
          {
            title: 'Alarma',
            levelLabel: 'Nivel 1',
            description:
              'Camina trazando un círculo mientras lanzas este conjuro. Desde ahora, y hasta que vuelvas a preparar conjuros, tu magia te alertará si una criatura cruza el círculo que has trazado. Incluso aunque estés dormido, el conjuro te sacará de tu sueño.',
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 3',
      columns: [
        [
          {
            title: 'Disipar Magia',
            levelLabel: 'Nivel 3',
            description:
              'Elige un conjuro o efecto mágico en tu presencia y la magia que lo alimenta se dispersará. Los conjuros menores son cancelados y la magia poderosa se queda reducida o disminuida mientras estés cerca.',
          },
          {
            title: 'Visiones A Través del Tiempo',
            levelLabel: 'Adivinación Nivel 3',
            description:
              'Lanza este conjuro mientras contemplas una superficie reflectante para ver a través de las profundidades del tiempo. El DJ te revelará detalles de un presagio oscuro que tenga relación contigo, un acontecimiento aciago que tendrá lugar sin tu intervención, pero también te dirá algo útil sobre cómo puedes interferir en el oscuro desenlace del presagio. Son pocos los presagios que afirman que «viviréis felices y comeréis perdices». Lo siento.',
          },
        ],
        [
          {
            title: 'Bola de Fuego',
            levelLabel: 'Evocación Nivel 3',
            description:
              'Conjuras una poderosa esfera de llamas que envuelve a tu objetivo y a todos los que estén cerca, infligiendo 2d6 de daño que ignora armadura.',
          },
          {
            title: 'Mimético',
            levelLabel: 'Nivel 3 (mantenido)',
            description:
              'Asumes la forma de otra persona que estés tocando mientras lanzas este conjuro. Tus características físicas son idénticas a las suyas, pero tu comportamiento puede ser distinto. Este cambio persiste hasta que recibas daño o elijas volver a tu propia forma. No puedes usar movimientos del libreto del mago mientras mantengas este conjuro.',
          },
        ],
        [
          {
            title: 'Imagen Especular',
            levelLabel: 'Ilusión Nivel 3',
            description:
              'Creas una imagen ilusoria de ti mismo. Tira 1d6 cuando eres atacado. Si sacas 4, 5 o 6, el ataque impacta en la ilusión, la imagen se disipa y el conjuro termina.',
          },
          {
            title: 'Dormir',
            levelLabel: 'Encantamiento Nivel 3',
            description:
              'Haces que 1d4 enemigos a los que puedas ver, elegidos por el DJ, caigan dormidos. Este conjuro solo afecta a criaturas capaces de dormir y se despertarán por cosas que les despertarían en condiciones normales: ruidos fuertes, golpes o dolor.',
          },
        ],
      ],
    },
  ],

  page2: [
    {
      header: 'Conjuros de nivel 5',
      columns: [
        [
          {
            title: 'Celda',
            levelLabel: 'Evocación Nivel 5 (mantenido)',
            description:
              'El objetivo es retenido en una celda mágica, de la que nada puede entrar ni salir. Este conjuro permanece activo hasta que lances otro conjuro o lo disipes. Mientras mantienes este conjuro no puedes perder de vista la celda, y además la criatura enjaulada puede escuchar tus pensamientos.',
          },
          {
            title: 'Contactar con Otro Plano',
            levelLabel: 'Adivinación Nivel 5',
            description:
              'Envías una petición a otro plano. Especifica con quién o con qué quieres contactar, indicando su localización, el tipo de criatura, su nombre o título, y se abrirá una vía de comunicación en ambos sentidos con esa criatura. La comunicación puede ser cortada por ti o por la criatura en cualquier momento.',
          },
        ],
        [
          {
            title: 'Invocar Monstruo',
            levelLabel: 'Invocación Nivel 5 (mantenido)',
            description:
              'Un monstruo aparece y te ayuda lo mejor que puede. Trátalo como si fuera tu personaje, pero con acceso únicamente a los movimientos básicos. El monstruo tiene un modificador de +1 en todas las características, 1 PG y utiliza tu dado de daño. El monstruo también recibe 1d6 de los siguientes rasgos:',
            detailBullets: [
              'Tiene un modificador de +2 en vez de +1 en una característica.',
              'No es imprudente.',
              'Hace 1d8 de daño.',
              'Su vínculo con este plano es fuerte: +2 PG por cada nivel que tengas.',
              'Posee alguna adaptación útil.',
            ],
            postText:
              'El DJ te dirá qué tipo de monstruo aparece en función de los rasgos que elijas. La criatura permanece en este plano hasta que muera o tú la disperses de nuevo a su plano de origen. Recibes un -1 a <em>Lanzar conjuros</em> mientras mantengas este.',
          },
        ],
        [
          {
            title: 'Polimorfizar',
            levelLabel: 'Encantamiento Nivel 5',
            description:
              'Puedes cambiar completamente de forma a una criatura que toques, permaneciendo así hasta que lances otro conjuro. Describe la nueva forma, incluyendo los cambios en características, adaptaciones importantes y debilidades principales. El DJ añadirá una o más de las siguientes opciones:',
            detailBullets: [
              'La forma será inestable y temporal.',
              'La mente de la criatura también será alterada.',
              'La forma tiene un beneficio o debilidad inesperada.',
            ],
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 7',
      columns: [
        [
          {
            title: 'Contingencia',
            levelLabel: 'Evocación Nivel 7',
            description:
              'Elige un conjuro de nivel 5 o inferior que conozcas y describe una condición desencadenante con un número de palabras igual a tu nivel. El conjuro elegido quedará retenido hasta que decidas liberarlo o la condición desencadenante tenga lugar, lo que ocurra primero. No tienes que hacer ninguna tirada para lanzar el conjuro retenido, simplemente tiene efecto. Solo puedes tener un conjuro retenido al mismo tiempo, así que si lanzas <em>Contingencia</em> mientras existe otro conjuro retenido, el nuevo conjuro reemplaza al anterior.',
          },
          {
            title: 'Visión Verdadera',
            levelLabel: 'Adivinación Nivel 7 (mantenido)',
            description:
              'Puedes ver las cosas como realmente son. Este efecto se mantiene hasta que dices una mentira o cancelas el conjuro. Mientras este conjuro está activo tienes -1 a <em>Lanzar conjuros</em>.',
          },
        ],
        [
          {
            title: 'Atajo Sombrío',
            levelLabel: 'Ilusión Nivel 7',
            description:
              'Elige una sombra y se convertirá en un portal para ti y tus compañeros. Este portal llevará a un lugar que tendrás que describir con un número de palabras igual a tu nivel. Atravesar el portal te llevará a ti, y a los compañeros presentes cuando lanzaste el conjuro, al lugar que has descrito. El portal puede ser utilizado solo una vez por cada compañero.',
          },
          {
            title: 'Niebla Letal',
            levelLabel: 'Invocación Nivel 7 (mantenido)',
            description:
              'Una nube de niebla se arrastra hasta este mundo desde más allá de las Puertas Negras de la Muerte, cubriendo las inmediaciones. Cada vez que una criatura sufra daño en la zona cubierta por la niebla, recibe 1d6 de daño adicional que ignora armadura. El conjuro persiste mientras puedas ver el área afectada o hasta que lo canceles.',
          },
        ],
        [
          {
            title: 'Dominar',
            levelLabel: 'Encantamiento Nivel 7 (mantenido)',
            description:
              'Puedes trasladar tu mente al interior de otra persona que toques. Tira 1d4: el número que saques son puntos que puedes gastar para hacer que el objetivo lleve a cabo una de estas acciones, a razón de 1 punto por acción:',
            detailBullets: [
              'Decir unas cuantas palabras a tu elección.',
              'Entregarte algo que sujeta.',
              'Hacer un ataque coordinado contra un objetivo a tu elección.',
              'Responder con sinceridad a una pregunta.',
            ],
            postText:
              'El conjuro termina cuando te quedas sin puntos. Si el objetivo recibe daño, pierdes 1 punto. No puedes lanzar otros conjuros mientras mantienes este.',
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 9',
      columns: [
        [
          {
            title: 'Alerta',
            levelLabel: 'Adivinación Nivel 9',
            description:
              'Describe un suceso y el DJ te dirá cuándo tendrá lugar sin importar dónde estés o lo lejos que te encuentres del lugar del suceso. Si lo deseas, puedes ver la localización en la que tendrá lugar el suceso como si estuvieras allí mismo. Solo puedes tener una Alerta activa al mismo tiempo.',
          },
          {
            title: 'Gema del Alma',
            levelLabel: 'Nivel 9',
            description:
              'Puedes atrapar el alma de una criatura moribunda en una gema. La criatura atrapada es consciente de su aprisionamiento y sigue pudiendo ser manipulada por conjuros, movimientos como <em>Parlamentar</em> y otros efectos. Todos los movimientos contra la criatura atrapada se realizan con +1. Puedes liberar el alma cuando quieras, pero no podrá volver a ser capturada una vez la liberes.',
          },
        ],
        [
          {
            title: 'Refugio',
            levelLabel: 'Evocación Nivel 9 (mantenido)',
            description:
              'Puedes crear una estructura de poder mágico puro que puede ser tan grande como un castillo o tan pequeña como una choza, inmune a todo daño no mágico. La estructura aguanta hasta que salgas de ella o anules el conjuro.',
          },
          {
            title: 'Invocaciones Perfectas',
            levelLabel: 'Invocación Nivel 9',
            description:
              'Puedes teletransportar a una criatura a tu presencia. Nombra una criatura o describe brevemente un tipo de criatura. Si nombras a una criatura, esa criatura aparecerá ante ti. Si describiste un tipo de criatura, aparecerá ante ti una criatura de ese tipo.',
          },
        ],
        [
          {
            title: 'Antipatía',
            levelLabel: 'Encantamiento Nivel 9 (mantenido)',
            description:
              'Elige un objetivo y describe un tipo de criatura o un alineamiento. Las criaturas del tipo o alineamiento descrito no pueden entrar en la línea de visión del objetivo. En caso de hacerlo, tendrá que huir inmediatamente. Este efecto perdura hasta que abandones la presencia del objetivo o anules el conjuro. Mientras mantienes este conjuro recibes un -1 a <em>Lanzar conjuros</em>.',
          },
        ],
      ],
    },
  ],
};
