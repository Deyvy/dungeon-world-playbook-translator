import type { SpellSheetData } from '../spellsData';

export const clerigoSpellsData: SpellSheetData = {
  bannerLabel: 'Conjuros de Clérigo',

  page1: [
    {
      header: 'Movimientos',
      headerRight: 'casterLevel',
      markX: true,
      columns: [
        [
          {
            title: 'Lanzar Conjuro (SAB)',
            levelLabel: '',
            description:
              'Cuando <strong>lanzas un conjuro concedido por tu deidad</strong>, tira+SAB. • Con un 10+, el conjuro es lanzado con éxito y tu deidad no revoca el conjuro, así que puedes lanzarlo de nuevo. • Entre 7 y 9, el conjuro tiene efecto, pero elige una cosa de la siguiente lista:',
            detailBullets: [
              'Atraes atención no deseada o te pones en riesgo. El DJ te dirá cómo.',
              'El lanzamiento del conjuro te aleja de tu deidad. Recibes -1 a <em>Lanzar conjuros</em> hasta que vuelvas a entrar en comunión.',
              'Después de lanzarlo, el conjuro es revocado por tu deidad. No puedes volver a lanzarlo hasta que no te vuelva a ser concedido.',
            ],
          },
        ],
        [
          {
            title: 'Comunión',
            levelLabel: '',
            description:
              'Cuando <strong>pasas un tiempo ininterrumpido (una hora o así) en tranquila comunión con tu deidad</strong>:',
            detailBullets: [
              'Pierdes todos los conjuros que se te habían concedido.',
              'Recibes nuevos conjuros a tu elección, cuyo nivel total no supere tu propio nivel de conjurador divino +1, siempre que ninguno sea de nivel superior a tu propio nivel.',
              'Prepara todas tus plegarias, que no cuentan para el límite de conjuros.',
            ],
          },
        ],
        [
          {
            title: 'Deidad',
            levelLabel: '',
            description:
              'Sirves y adoras a alguna deidad o poder que te concede conjuros. Dale un nombre a tu dios (como Helferth, Sucellus, Zorica o Krugon el Tenebroso) y elige su dominio:',
            postText: '<strong>Nombre:</strong> ____________\nEsferas: ____________\nPrecepto: ____________',
          },
        ],
      ],
    },
    {
      header: 'Plegarias',
      subtext:
        'Cada vez que entras en <span style="font-weight:700;color:#6c6e70">comunión</span> tienes acceso a todas las plegarias sin necesidad de elegirlas y no cuentan para el total de conjuros.',
      columns: [
        [
          {
            title: 'Luz',
            levelLabel: 'Plegaria',
            description:
              'Toca un objeto, el cual obtendrá un brillo divino similar al de una antorcha.\nNo proporciona calor ni hace ruido y no requiere de ningún tipo de combustible, pero por lo demás funciona como una antorcha normal y corriente. Tienes control completo sobre el color de la llama.\nEl conjuro permanece mientras el objeto esté en tu presencia.',
          },
        ],
        [
          {
            title: 'Santificar',
            levelLabel: 'Plegaria',
            description:
              'El agua y la comida que sostengas en tus manos mientras lanzas este conjuro queda consagrada a tu deidad. Además de pasar a ser sagrada o impía, la sustancia afectada queda purificada de cualquier impureza de origen mundano.',
          },
        ],
        [
          {
            title: 'Guía',
            levelLabel: 'Plegaria',
            description:
              'El símbolo de tu dios aparece ante ti, señalándote la dirección o el curso de acción que debes tomar, para luego desaparecer. El mensaje es únicamente un gesto y tu comunicación a través de este conjuro es muy limitada.',
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 1',
      columns: [
        [
          {
            title: 'Bendición',
            levelLabel: 'Nivel 1 (mantenido)',
            description:
              'Tu dios sonríe a un combatiente a tu elección. Recibe +1 hasta que termine la batalla siempre que continúe luchando.\nCuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
          {
            title: 'Curar Heridas Leves',
            levelLabel: 'Nivel 1',
            description:
              'Tu tacto hace que las heridas cicatricen y los huesos dejen de doler. Curas 1d8 de daño a un compañero que estés tocando.',
          },
          {
            title: 'Detectar Alineamiento',
            levelLabel: 'Nivel 1',
            description:
              'Elige un alineamiento cuando lances este conjuro: Bueno, Malvado, Legal o Caótico. Serás capaz de detectar brevemente con uno de tus sentidos ese alineamiento.\nEl DJ te dirá quién o qué hay en el entorno que tenga dicho alineamiento.',
          },
        ],
        [
          {
            title: 'Provocar Miedo',
            levelLabel: 'Nivel 1 (mantenido)',
            description:
              'Elige a un objetivo al que puedas ver y un objeto cercano. El objetivo tendrá miedo del objeto mientras mantengas el conjuro. La reacción depende del objetivo: huir, entrar en pánico, rogar, luchar...\nCuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>. No puedes elegir como objetivo a entidades con inteligencia inferior a la animal (constructos mágicos, muertos vivientes, autómatas y cosas por el estilo).',
          },
          {
            title: 'Arma Mágica',
            levelLabel: 'Nivel 1 (mantenido)',
            description:
              'El arma que empuñes cuando lanzas este conjuro hace +1d4 de daño hasta que lo disipes. Cuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
        ],
        [
          {
            title: 'Santuario',
            levelLabel: 'Nivel 1',
            description:
              'Cuando lanzas este conjuro marcas con tu paso el perímetro de una zona, que queda consagrada a tu dios. Mientras estés en dicha zona serás alertado cuando alguien actúe con malicia dentro del santuario (incluyendo a los que entren con intenciones dañinas). Cualquiera que reciba curación dentro del santuario cura +1d4 PG.',
          },
          {
            title: 'Hablar con los Muertos',
            levelLabel: 'Nivel 1',
            description:
              'Un cadáver habla brevemente contigo. Responderá lo mejor que pueda a cualesquiera tres preguntas que le hagas con el conocimiento que tuviera en vida y el que ha obtenido después de la muerte.',
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 3',
      columns: [
        [
          {
            title: 'Animar a los Muertos',
            levelLabel: 'Nivel 3 (mantenido)',
            description:
              'Invocas a un espíritu hambriento para que posea un cadáver reciente y lo ponga a tu servicio. Eso crea un zombi que sigue tus órdenes hasta donde le permiten sus limitadas capacidades. Trata al zombi como a un personaje, pero con acceso solo a los movimientos básicos. Tiene un modificador de <strong>+1</strong> a todas las características y 1 PG. El zombi también recibe 1d4 rasgos de entre los siguientes, a tu elección:',
            detailBullets: [
              'Tiene talento. Dale a una característica un modificador de +2.',
              'Es duro. Tiene +2 PG por cada nivel que tengas.',
              'Tiene un cerebro funcional y puede llevar a cabo tareas complejas.',
              'No parece estar muerto, al menos durante uno o dos días.',
            ],
          },
        ],
        [
          {
            title: 'Resurrección',
            levelLabel: 'Nivel 3',
            description:
              'Dile al DJ que quieres resucitar a una persona cuya alma no haya abandonado este mundo por completo. La resurrección siempre es posible, pero el DJ puede pedir que cumplas una o más de las siguientes condiciones (posiblemente todas):',
            detailBullets: [
              'Vas a tardar días/semanas/meses.',
              'Vas a necesitar la ayuda de _____.',
              'Vas a necesitar un montón de dinero.',
              'Vas a tener que sacrificar ______ para conseguirlo.',
            ],
          },
        ],
        [
          {
            title: 'Curar Heridas Moderadas',
            levelLabel: 'Nivel 3',
            description:
              'Detienes hemorragias y recompones huesos usando tu magia. Curas 2d8 a un compañero que estés tocando.',
          },
          {
            title: 'Oscuridad',
            levelLabel: 'Nivel 3 (mantenido)',
            description:
              'Elige un área que puedas ver para llenarla de sombras y oscuridad sobrenatural. Cuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
          {
            title: 'Retener Persona',
            levelLabel: 'Nivel 3',
            description:
              'Elige a una persona a la que puedas ver. No podrá actuar, salvo para hablar, hasta que no lances otro conjuro o abandones su presencia. El efecto termina de manera inmediata si el objetivo recibe algún tipo de daño.',
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
            title: 'Revelación',
            levelLabel: 'Nivel 5',
            description:
              'Tu deidad responde a tus oraciones a través de un instante de perfecta lucidez. El DJ arrojará luz sobre la situación actual. Si actúas de acuerdo con esa información, recibes +1 a la siguiente tirada.',
          },
          {
            title: 'Curar Heridas Críticas',
            levelLabel: 'Nivel 5',
            description: 'Curas 3d8 a un compañero que estés tocando.',
          },
          {
            title: 'Adivinación',
            levelLabel: 'Nivel 5',
            description:
              'Nombra a una persona, lugar o cosa sobre la que quieras saber más. Tu deidad te proporcionará visiones sobre aquello que has nombrado, tan claras como si estuvieras ahí.',
          },
        ],
        [
          {
            title: 'Visión Verdadera',
            levelLabel: 'Nivel 5 (mantenido)',
            description:
              'Tu visión se abre a la verdadera naturaleza de las cosas sobre las que posas tus ojos. Puedes atravesar las ilusiones y ver lo que se oculta tras ellas. El DJ describirá el área ante ti, ignorando cualquier ilusión o falsedad, sea o no mágica.\nCuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
          {
            title: 'Contagio',
            levelLabel: 'Nivel 5 (mantenido)',
            description:
              'Elige a una criatura que puedas ver. El objetivo sufrirá una enfermedad a tu elección hasta que termine el conjuro.\nCuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
        ],
        [
          {
            title: 'Atrapar el Alma',
            levelLabel: 'Nivel 5',
            description:
              'Atrapas el alma de una criatura moribunda en una gema. La criatura atrapada es consciente de su aprisionamiento, pero todavía puede ser manipulada mediante conjuros, se puede parlamentar con ella y otros efectos. Todos los movimientos contra la criatura atrapada se hacen con +1. Puedes liberar el alma en cualquier momento, pero no puedes volver a capturarla una vez la liberes.',
          },
          {
            title: 'Palabras de los Silentes',
            levelLabel: 'Nivel 5',
            description:
              'Cuando tocas un objeto puedes hablar con los espíritus que lo habitan. El objeto inerte al que toques te responderá lo mejor que pueda a tres preguntas que hagas.',
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 7',
      columns: [
        [
          {
            title: 'Palabra del Recuerdo',
            levelLabel: 'Nivel 7',
            description:
              'Elige una palabra. La primera vez que la pronuncies tras lanzar el conjuro, tú y los compañeros que te estuvieran tocando mientras se lanzó el conjuro volveréis inmediatamente al mismo lugar donde lanzaste el conjuro. Solo puedes mantener una misma localización en la memoria. Si vuelves a lanzar Palabra del Recuerdo antes de pronunciar la palabra, la nueva palabra remplazará a la anterior.',
          },
          {
            title: 'Curar',
            levelLabel: 'Nivel 7',
            description:
              'Curas todo el daño recibido a un compañero que estés tocando, hasta sus PG máximos.',
          },
        ],
        [
          {
            title: 'Dañar',
            levelLabel: 'Nivel 7',
            description:
              'Puedes azotar con la ira divina a un enemigo que toques. Le haces 2d8 puntos de daño y tú recibes 1d6 puntos de daño. Este daño atraviesa armadura.',
          },
          {
            title: 'Amputar',
            levelLabel: 'Nivel 7 (mantenido)',
            description:
              'Elige un apéndice del objetivo como un brazo, tentáculo o ala. El apéndice será mágicamente amputado de su cuerpo sin causar daño, aunque sí un considerable dolor. El apéndice faltante puede, por ejemplo, evitar que una criatura voladora vuele o que un toro te ensarte en su cornamenta.\nCuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
        ],
        [
          {
            title: 'Marca de la Muerte',
            levelLabel: 'Nivel 7',
            description:
              'Elige una criatura de la que conozcas su verdadero nombre. Este conjuro crea unas runas permanentes en una superficie elegida por ti que, si son leídas por la criatura, la matarán.',
          },
          {
            title: 'Controlar el Clima',
            levelLabel: 'Nivel 7',
            description:
              'Reza para que llueva, haga sol, viento o nieve. En un plazo de un día tu dios responderá a tus oraciones. El tiempo cambiará de acuerdo con tus deseos y durará unos cuantos días.',
          },
        ],
      ],
    },
    {
      header: 'Conjuros de nivel 9',
      columns: [
        [
          {
            title: 'Tormenta de Venganza',
            levelLabel: 'Nivel 9',
            description:
              'Tu deidad hace que se produzca la tormenta no natural que tú prefieras. Una lluvia de sangre o ácido, nubes de almas, vientos que levantan edificios o cualquier temporal que puedas imaginar: pídelo y aparecerá.',
          },
          {
            title: 'Reparar',
            levelLabel: 'Nivel 9',
            description:
              'Elige un evento del pasado del objetivo. Todos los efectos de aquel evento, incluyendo el daño, veneno, enfermedad y efectos mágicos, terminan y son reparados. Los PG se curan y las enfermedades sanan, los venenos son neutralizados y los efectos mágicos cesan.',
          },
        ],
        [
          {
            title: 'Consumir a los Muertos',
            levelLabel: 'Nivel 9',
            description:
              'Destruyes a una criatura muerta viviente sin mente al tocarla y robas su energía para curarte a ti mismo o al próximo compañero al que toques. La cantidad de daño sanada es igual a los PG que le quedaran a la criatura antes de que la destruyeses de esta forma.',
          },
          {
            title: 'Plaga',
            levelLabel: 'Nivel 9 (mantenido)',
            description:
              'Nombra una ciudad, pueblo, campamento u otro lugar en el que viva gente. Mientras este conjuro esté activo, ese lugar es asolado por una plaga adecuada al dominio de tu deidad (langostas, muertes de primogénitos, etcétera).\nCuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
        ],
        [
          {
            title: 'Presencia Divina',
            levelLabel: 'Nivel 9 (mantenido)',
            description:
              'Todas las criaturas deben pedir tu permiso expreso para abandonar tu presencia o presentarse ante ti. Cualquier criatura que actúe sin tu permiso recibe 1d10 de daño adicional si es dañada en tu presencia.\nCuando mantienes este conjuro recibes -1 a <em>Lanzar conjuros</em>.',
          },
        ],
      ],
    },
  ],
};