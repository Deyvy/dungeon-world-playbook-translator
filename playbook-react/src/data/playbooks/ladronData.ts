import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';

export const ladronData: PlaybookData = {
  meta: { name: 'El Ladrón', classIcon },

  raceNames: [
    {
      race: 'MEDIANO',
      names: ['Felix', 'Rook', 'Mouse', 'Sketch', 'Trixie', 'Robin', 'Omar', 'Brynn', 'Bug'],
    },
    {
      race: 'HUMANO',
      names: ['Sparrow', 'Shank', 'Jack', 'Marlow', 'Dodge', 'Rat', 'Pox', 'Humble', 'Farley'],
    },
  ],

  appearance: {
    prompt: '<em>Elige una de cada o escribe una propia:</em>',
    fields: [
      { label: 'CUERPO', options: 'Bajo, esbelto, rechoncho' },
      { label: 'OJOS', options: 'Furtivos, brillantes, rápidos' },
      { label: 'PELO', options: 'Desgreñado, con capucha, despeinado' },
      { label: 'ROPA', options: 'Cuero oscuro, harapos, ropa común' },
    ],
  },

  stats: [
    { name: 'Fuerza', abbr: 'FUE', debuff: 'Debilitado -1' },
    { name: 'Destreza', abbr: 'DES', debuff: 'Tembloroso -1' },
    { name: 'Constitución', abbr: 'CON', debuff: 'Enfermo -1' },
    { name: 'Inteligencia', abbr: 'INT', debuff: 'Aturdido -1' },
    { name: 'Sabiduría', abbr: 'SAB', debuff: 'Confundido -1' },
    { name: 'Carisma', abbr: 'CAR', debuff: 'Marcado -1' },
  ],

  statValuesHint:
    'Asigna estos valores a tus Características: 16(+2), 15(+1), 13(+1), 12(-), 9(-), 8(-1)',
  statModifiers:
    'Modificadores: 1-3: -3 || 4-5: -2 || 6-8: -1 || 9-12: 0 || 13-15: +1 || 16-17: +2 || 18: +3',

  hpBase: 6,
  damageDie: 'd8',

  alignment: [
    { label: 'Caótico', description: 'Lanzarte al peligro sin tener un plan.' },
    { label: 'Neutral', description: 'Evitar ser detectado o colarte en algún lugar.' },
    { label: 'Malvado', description: 'Hacer que sea otro el que se enfrente al peligro o cargue con tus culpas.' },
  ],

  bonds: [
    'He robado algo a _______________.',
    '_______________ me cubre la espalda cuando las cosas se complican.',
    '_______________ conoce detalles incriminatorios sobre mí.',
    '_______________ y yo tenemos una estafa en marcha.',
  ],

  moves: [
    {
      title: 'Experto en Trampas',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>te paras un momento a examinar un área peligrosa</strong>, tira+DES. * Con un 10+, recibes 3 puntos. * Entre 7 y 9, recibes 1 punto.',
      postText:
        'Gasta esos puntos a medida que caminas por la zona para realizar las siguientes preguntas:\n* ¿Hay una trampa aquí? Si es así, ¿cómo se activa?\n* ¿Qué hace la trampa cuando se activa?\n* ¿Qué más hay oculto por aquí?',
    },
    {
      title: 'Trucos del Oficio',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>abres cerraduras, vacías bolsillos o desarmas trampas</strong>, tira+DES. * Con un 10+, lo haces sin problema. * Entre 7 y 9 lo haces, pero el DJ te dará a elegir dos opciones entre <em>sospecha</em>, <em>peligro</em> o <em>un coste</em>.',
    },
    {
      title: 'Apuñalar por la Espalda',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>atacas a un enemigo sorprendido o indefenso con un arma cuerpo a cuerpo</strong>, puedes elegir entre hacer tu daño o tirar+DES. * Con un 10+ elige dos de las siguientes opciones. * Entre 7 y 9, elige una de las siguientes opciones.',
      detailBullets: [
        'No te quedas enzarzado en combate de melee.',
        'Le haces tu daño +1d6.',
        'Creas una ventaja; +1 a la siguiente tirada para ti o un compañero que actúe contigo.',
        'Reduce su armadura en 1 hasta que la repare.',
      ],
    },
    {
      title: 'Principios Flexibles',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando <strong>alguien intenta detectar tu alineamiento</strong>, puedes decir el que quieras.',
    },
    {
      title: 'Envenenador',
      hasXMark: true,
      column: 'right',
      description:
        'Has dominado el arte de manejar y utilizar venenos. Elige un veneno de la siguiente lista, el cual ya no es <em>peligroso</em> para ti, y del que tienes tres dosis. Cada vez que tengas tiempo para reunir materiales y un lugar seguro en el que prepararlo puedes hacer gratuitamente tres dosis del veneno que has elegido. Ten en cuenta que algunos venenos son <em>aplicados</em>, lo que significa que tendrás que aplicarlo sobre algo que beba o ingiera la persona que quieras envenenar. Los venenos de <em>contacto</em> solo necesitan tocar al objetivo, pudiendo ser usados incluso en el filo de una espada.',
      choiceGroups: [
        {
          heading: '',
          items: [
            { label: '<strong>Aceite de Tagit</strong> (<em>aplicado</em>): El objetivo cae en un sueño ligero.' },
            { label: '<strong>Yerbasangre</strong> (<em>contacto</em>): El objetivo inflige -1d4 de daño hasta que sea curado.' },
            { label: '<strong>Raizdorada</strong> (<em>aplicado</em>): El objetivo trata a la siguiente criatura que vea como si fuera un aliado de confianza hasta que se demuestre lo contrario.' },
            { label: '<strong>Lágrimas de serpiente</strong> (<em>contacto</em>): Cualquiera que haga daño al objetivo tira dos veces y se queda con el mejor resultado.' },
          ],
        },
      ],
    },
  ],

  races: [
    {
      name: 'Mediano',
      description:
        'Cuando <strong>atacas con un arma a distancia</strong>, haces daño +2.',
    },
    {
      name: 'Humano',
      description:
        'Eres un profesional. Recibes +1 cuando <strong><em>exhibes conocimientos</em> o <em>disciernes la realidad</em> acerca de actividades criminales</strong>.',
    },
  ],

  page2: {
    gear: {
      maxLoadBase: 9,
      fixedItems: [
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
        '<strong>Armadura de cuero</strong> (armadura 1, peso 1).',
        '3 dosis del <strong>veneno</strong> elegido.',
        '<strong>10 monedas.</strong>',
      ],
      defenseGroup: {
        prompt: '<em>Elige tus armas:</em>',
        items: [
          {
            text: '<strong>Daga</strong> (toque, peso 1) y <strong>Espada corta</strong> (cerca, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Estoque</strong> (cerca, preciso, peso 1).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: '<em>Elige un arma a distancia y un objeto adicional:</em>',
        items: [
          {
            text: '<strong>3 Dagas arrojadizas</strong> (arrojadiza, medio alcance, peso 0).',
            checkbox: true,
          },
          {
            text: '<strong>Arco ajado</strong> (medio alcance, peso 2) y <strong>Fajo de flechas</strong> (munición 3, peso 1).',
            checkbox: true,
          },
          {
            text: '<em>Elige uno:</em>',
            checkbox: false,
          },
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Poción curativa</strong> (cura 10 PG o debilidad, peso 0).',
            checkbox: true,
          },
        ],
      },
      blankLineCount: 18,
      consumableRows: CONSUMABLE_ROWS,
    },

    advancedMoves: [
      {
        instruction:
          '<em>Cuando subas a un nivel entre 2 y 5, elige uno de los siguientes movimientos.</em>',
        moves: [
          {
            title: 'Golpe Bajo',
            hasXMark: false,
            description:
              'Cuando <strong>usas un arma con la etiqueta precisa o toque</strong> haces un daño extra de +1d6 al <em>Apuñalar por la espalda</em>.',
          },
          {
            title: 'Cauto',
            hasXMark: false,
            description:
              'Cuando usas <strong><em>Experto en trampas</em></strong> siempre consigues +1 punto, aunque saques un 6–.',
          },
          {
            title: 'Opulencia y Distinción',
            hasXMark: false,
            description:
              'Cuando <strong>exhibes ostentosamente tu posesión más valiosa</strong>, elige a uno de los presentes. Harán todo lo que puedan para obtener ese objeto o uno como ese.',
          },
          {
            title: 'Yo Disparé Primero',
            hasXMark: false,
            description:
              'Nunca te cogen por sorpresa. Cuando un enemigo pudiera anticiparse, tú actúas primero.',
          },
          {
            title: 'El que Lleva las de Perder',
            hasXMark: false,
            description:
              'Cuando <strong>te ves superado en número</strong>, recibes +1 armadura.',
          },
          {
            title: 'Maestro Envenenador',
            hasXMark: false,
            description:
              'Tras usar un veneno una vez ya no te resulta <em>peligroso</em> usarlo.',
          },
          {
            title: 'Envenenar',
            hasXMark: false,
            description:
              'Puedes aplicar los venenos, incluso los más complejos, con un solo pinchazo. Se considera que el veneno es de <em>contacto</em>, en lugar de <em>aplicado</em>, cuando <strong>usas un veneno que no sería <em>peligroso</em> al aplicarlo en tu arma</strong>.',
          },
          {
            title: 'Destilador',
            hasXMark: false,
            description:
              'Cada vez que <strong>tengas tiempo para reunir materiales y un lugar seguro en el que prepararlo</strong>, puedes hacer tres dosis de un veneno que hayas utilizado anteriormente.',
          },
          {
            title: 'Contactos',
            hasXMark: false,
            description:
              'Cuando <strong>haces saber en el submundo criminal que quieres o necesitas algo</strong>, tira+CAR.',
            detailBullets: [
              'Con un 10+, alguien lo tiene y está dispuesto a ofrecértelo.',
              'Entre 7 y 9, tienes que llegar a un acuerdo para conseguir algo similar o lo obtienes con condiciones, tú decides.',
            ],
          },
        ],
      },
      {
        instruction:
          '<em>Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.</em>',
        moves: [
          {
            title: 'Jugar Sucio',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Golpe bajo</em>',
            description:
              'Cuando <strong>usas un arma con la etiqueta precisa o toque</strong> haces un daño extra de +1d4, excepto con el movimiento de <em>Apuñalar por la espalda</em>, que hace un daño extra de +1d8.',
          },
          {
            title: 'Extremadamente Cauto',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Cauto</em>',
            description:
              'Cuando usas <strong><em>Experto en trampas</em></strong> siempre consigues +1 punto, aunque saques un 6–. Con un 12+, recibes 3 puntos y la próxima vez que te acerques a una trampa el DJ te dirá inmediatamente lo que hace, cómo se activa, quién la puso y cómo puedes usarla en tu beneficio.',
          },
          {
            title: 'El que Lleva Todas las de Perder',
            hasXMark: false,
            relationships: '<em>Reemplaza a: El que lleva las de perder</em>',
            description:
              'Recibes +1 armadura. Cuando <strong>te ves superado en número</strong>, recibes +2 armadura.',
          },
          {
            title: 'Evasión',
            hasXMark: false,
            description:
              'Cuando <strong>desafías el peligro y obtienes un 12+</strong>, no solo haces lo que pretendías, sino mucho más: el DJ te ofrecerá un resultado aún mejor, de auténtica belleza, un instante de gracia.',
          },
          {
            title: 'Asalto',
            hasXMark: false,
            description:
              'Cuando <strong>te tomas tu tiempo para planear un robo</strong>, nombra aquello que quieres robar y hazle las siguientes preguntas al DJ. Cuando actúes de acuerdo con las respuestas que te dé, tus compañeros y tú recibís +1 a la siguiente tirada.',
            detailBullets: [
              '¿Quién se dará cuenta de que falta?',
              '¿Cuál es la defensa más poderosa?',
              '¿Quién vendrá a buscarlo?',
              '¿Quién más lo quiere?',
            ],
          },
          {
            title: 'Alquimista',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Destilador</em>',
            description:
              'Cada vez que <strong>tengas tiempo para reunir materiales y un lugar seguro en el que prepararlo</strong>, puedes hacer tres dosis de cualquier veneno que hayas utilizado anteriormente. También puedes describir los efectos de un veneno que deseas crear. El DJ te dirá que puedes fabricarlo, pero con una o más de las siguientes advertencias:',
            detailBullets: [
              'Solo funcionará bajo unas circunstancias concretas.',
              'Lo mejor que puedes conseguir es una versión más débil.',
              'Tardará un poco en hacer efecto.',
              'Tendrá efectos secundarios evidentes.',
            ],
          },
          {
            title: 'Ruta de Escape',
            hasXMark: false,
            description:
              'Cuando <strong>estás metido hasta el cuello y necesitas una ruta de escape</strong>, di cuál es y tira+DES. * Con un 10+ te has ido. * Entre 7 y 9 puedes quedarte o irte, pero a costa de dejar algo atrás o llevarte algo contigo. El DJ te dirá de qué se trata.',
          },
          {
            title: 'Disfraz',
            hasXMark: false,
            description:
              'Cuando <strong>tienes el tiempo y los materiales necesarios</strong> puedes crear un disfraz que engañaría a cualquiera, haciéndole creer que eres otra criatura de aproximadamente tu mismo tamaño y forma. Tus acciones pueden delatarte, pero tu apariencia no.',
          },
          {
            title: 'Brazo Fuerte, Excelente Puntería',
            hasXMark: false,
            description:
              'Puedes arrojar cualquier arma cuerpo a cuerpo usando el movimiento de Disparar. Siempre pierdes el arma arrojada y no puedes elegir reducir la munición sacando entre 7 y 9.',
          },
        ],
      },
    ],
  },
};
