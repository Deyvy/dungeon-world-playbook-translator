import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/mago-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';
import { magoSpellsData } from './magoSpellsData';

export const magoData: PlaybookData = {
  meta: { name: 'El Mago', classIcon },
  spells: magoSpellsData,

  raceNames: [
    {
      race: 'ELFO',
      names: ['Galadiir', 'Fenfaril', 'Lilliastre', 'Phirosalle', 'Enkirash', 'Halwyr'],
    },
    {
      race: 'HUMANO',
      names: ['Avon', 'Morgan', 'Rath', 'Ysolde', 'Ovid', 'Vitus', 'Aldara', 'Xeno', 'Lira'],
    },
  ],

  appearance: {
    prompt: '<em>Elige una de cada o escribe una propia:</em>',
    fields: [
      { label: 'CUERPO', options: 'Rechoncho, perturbador, delgado' },
      { label: 'OJOS', options: 'Atormentados, penetrantes, locos' },
      { label: 'PELO', options: 'Arreglado, salvaje, sombrero puntiagudo' },
      { label: 'ROPA', options: 'Toga desgastada, elegante, rara' },
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

  hpBase: 4,
  damageDie: 'd4',

  alignment: [
    { label: 'Bueno', description: 'Utilizar la magia para ayudar directamente a otro.' },
    { label: 'Neutral', description: 'Descubrir algo acerca de un misterio mágico.' },
    { label: 'Malvado', description: 'Utilizar la magia para infundir el miedo y el terror.' },
  ],

  bonds: [
    '_______________ jugará un papel importante en futuros acontecimientos. ¡Lo he predicho!',
    '_______________ me esconde un secreto importante.',
    '_______________ desgraciadamente está mal informado sobre cómo funciona el mundo. Le enseñaré todo lo que pueda.',
  ],

  moves: [
    {
      title: 'Lanzar un Conjuro',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>lanzas un conjuro</strong> que tenías <strong>preparado</strong>, <strong>tira+INT</strong>. · Con un 10+, el conjuro es lanzado con éxito y puedes volver a usarlo otra vez posteriormente. · Entre 7 y 9, el conjuro tiene efecto, pero elige una cosa de la siguiente lista:',
      detailBullets: [
        'Atraes atención no deseada o te pones en riesgo. El DJ te dirá cómo.',
        'Tu conjuro perturba el tejido de la realidad al ser lanzado. Recibes -1 a <em>Lanzar conjuros</em> hasta que vuelvas a <em>Preparar conjuros</em>.',
        '"Olvidas" el conjuro después de lanzarlo. No puedes volver a lanzar ese conjuro hasta que vuelvas a prepararlo.',
      ],
      subtext:
        'Ten en cuenta que mantener conjuros con efectos continuados hará que a veces recibas una penalización a tu tirada de <em>Lanzar conjuros</em>.',
    },
    {
      title: 'Preparar Conjuros',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>pasas un tiempo ininterrumpido</strong> (una hora o así) en tranquila contemplación de tu <strong>libro de conjuros</strong>:',
      detailBullets: [
        'Pierdes todos los conjuros que tenías preparados.',
        'Prepara los nuevos conjuros que elijas de tu libro de conjuros cuyos niveles en total no superen tu propio nivel+1.',
        'Prepara todos tus trucos, que no cuentan para el límite de conjuros.',
      ],
    },
    {
      title: 'Libro de Conjuros',
      hasXMark: true,
      column: 'right',
      description:
        'Has dominado varios conjuros que has transcrito en tu <strong>libro de conjuros</strong>. Comienzas con tres conjuros de primer nivel en tu libro de conjuros, además de todos los <strong>trucos</strong>. Cada vez que subas de nivel, añade en tu libro un nuevo conjuro de un nivel igual o inferior al tuyo. Tu libro de conjuros tiene peso 1.',
    },
    {
      title: 'Defensa Mágica',
      hasXMark: true,
      column: 'right',
      description:
        'Puedes hacer que un conjuro mantenido termine inmediatamente y utilizar la energía que libera al disiparlo para desviar un ataque. El conjuro termina y puedes sustraer su nivel del daño recibido.',
    },
    {
      title: 'Ritual',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando <strong>aprovechas un lugar de poder para crear un efecto mágico</strong>, dile al DJ lo que estás intentando conseguir. Es posible lograr cualquier efecto con un ritual, pero el DJ te impondrá entre una y cuatro condiciones:',
      detailBullets: [
        'Te va a llevar días/semanas/meses.',
        'Primero debes _______________.',
        'Necesitarás ayuda de _______________.',
        'Hará falta mucho dinero.',
        'Lo mejor que puedes conseguir es una versión menor, poco fiable y limitada.',
        'Tus compañeros y tú os arriesgáis a _______________.',
        'Tienes que desencantar _______________ para lograrlo.',
      ],
    },
  ],

  races: [
    {
      name: 'Elfo',
      description:
        'La magia es para ti tan natural como respirar. Trata <em>Detectar magia</em> como un <em>truco</em>.',
    },
    {
      name: 'Humano',
      description:
        'Elige un conjuro de <em>clérigo</em>. Puedes lanzarlo como si fuera un conjuro de <em>mago</em>.',
    },
  ],

  page2: {
    gear: {
      maxLoadBase: 7,
      fixedItems: [
        '<strong>Libro de conjuros</strong> (<strong>peso 1</strong>)',
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
      ],
      defenseGroup: {
        prompt: '<em>Elige tus defensas:</em>',
        items: [
          {
            text: '<strong>Armadura de cuero</strong> (armadura 1, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Bolsa de libros</strong> (5 usos, peso 2).<br><strong>3 Pociones curativas</strong> (cura 10 PG o debilidad, peso 0).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: '',
        items: [
          { text: '<em>Elige tu arma:</em>', checkbox: false },
          {
            text: '<strong>Daga</strong> (toque, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Báculo</strong> (cerca, a dos manos, peso 1).',
            checkbox: true,
          },
          { text: '<em>Elige uno:</em>', checkbox: false },
          {
            text: '<strong>Poción curativa</strong> (cura 10 PG o debilidad, peso 0).',
            checkbox: true,
          },
          {
            text: '<strong>3 Antídotos</strong> (peso 0).',
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
            title: 'Prodigio',
            hasXMark: false,
            description:
              'Elige un conjuro. Puedes preparar ese conjuro como si fuera de un nivel inferior.',
          },
          {
            title: 'Magia Poderosa',
            hasXMark: false,
            description:
              'Cuando <strong>lanzas un conjuro</strong>, con un 10+ tienes la opción de elegir de la lista correspondiente al resultado de entre 7 y 9. Si lo haces, puedes elegir uno de los siguientes efectos:',
            detailBullets: [
              'Los efectos del conjuro se maximizan.',
              'El número de objetivos del conjuro se dobla.',
            ],
          },
          {
            title: 'Fuente de Sabiduría',
            hasXMark: false,
            description:
              'Cuando <strong>exhibes conocimientos sobre un tema del que nadie más tenga la menor idea</strong>, recibes +1.',
          },
          {
            title: 'Sabelotodo',
            hasXMark: false,
            description:
              'Cuando <strong>otro personaje busca tu consejo y le dices lo que crees que es mejor</strong>, recibe +1 a la siguiente tirada, siempre y cuando siga tus consejos. Márcate experiencia si lo hace.',
          },
          {
            title: 'Libro de Conjuros Avanzado',
            hasXMark: false,
            description:
              'Añade un nuevo conjuro a tu <em>libro de conjuros</em> de la lista de conjuros de cualquier clase de personaje.',
          },
          {
            title: 'Encantador',
            hasXMark: false,
            description:
              'Cuando <strong>dispongas de tiempo y un entorno seguro para estudiar un objeto mágico</strong> podrás preguntarle al DJ para qué sirve. El DJ te contestará con sinceridad.',
          },
          {
            title: 'Lógico',
            hasXMark: false,
            description:
              'Cuando <strong>utilices la deducción para analizar tu entorno</strong>, puedes <em>Discernir la realidad</em> con INT en lugar de SAB.',
          },
          {
            title: 'Guardia Arcana',
            hasXMark: false,
            description:
              'Mientras tengas preparado al menos un conjuro de primer nivel o superior, recibes armadura +2.',
          },
          {
            title: 'Contrahechizo',
            hasXMark: false,
            description:
              'Cuando <strong>intentas contrarrestar un conjuro arcano que te podría afectar</strong> puedes interponer uno de tus conjuros preparados para defenderte. <strong>Tira+INT</strong>:',
            detailBullets: [
              'Con un 10+, el hechizo ha sido contrarrestado y no te afecta.',
              'Entre 7 y 9, el hechizo ha sido contrarrestado, pero olvidas el conjuro que habías usado para interceptarlo. Este contrahechizo solo te protege a ti; si el hechizo tenía otros objetivos, les afecta normalmente.',
            ],
          },
          {
            title: 'Estudio Rápido',
            hasXMark: false,
            description:
              'Cuando <strong>ves los efectos de un conjuro arcano</strong>, pregúntale al DJ el nombre del hechizo y sus efectos. Recibes +1 cuando actúes de acuerdo con esas respuestas.',
          },
        ],
      },
      {
        instruction:
          '<em>Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.</em>',
        moves: [
          {
            title: 'Maestro',
            hasXMark: false,
            relationships: '<em>Requiere: Prodigio</em>',
            description:
              'Elige un conjuro más, distinto al que seleccionaste para Prodigio. Puedes preparar ese conjuro como si fuera de un nivel inferior.',
          },
          {
            title: 'Magia Poderosa Mayor',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Magia poderosa</em>',
            description:
              'Cuando <strong>lanzas un conjuro</strong>, con un 10-11 tienes la opción de elegir de la lista correspondiente al resultado de entre 7 y 9 y elegir uno de los siguientes efectos. Con un 12+, puedes elegir uno de los siguientes efectos sin elegir nada de la lista de entre 7 y 9.',
            detailBullets: [
              'Los efectos del conjuro se doblan.',
              'El número de objetivos del conjuro se dobla.',
            ],
          },
          {
            title: 'Alma del Encantador',
            hasXMark: false,
            relationships: '<em>Requiere: Encantador</em>',
            description:
              'Cuando <strong>dispongas de tiempo y un entorno seguro para estudiar un objeto mágico que esté en un lugar de poder</strong>, puedes amplificar la magia del objeto para que sus efectos sean mayores la próxima vez que lo uses. El DJ te dirá en qué sentido exactamente.',
          },
          {
            title: 'Altamente Lógico',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Lógico</em>',
            description:
              'Cuando <strong>utilices la deducción para analizar tu entorno</strong>, puedes <em>Discernir la realidad</em> con INT en lugar de SAB. Con un 12+ puedes hacerle al DJ hasta tres preguntas cualesquiera, sin restringirte a las de la lista.',
          },
          {
            title: 'Hilos de Marioneta Místicos',
            hasXMark: false,
            description:
              'Cuando <strong>utilices tu magia para controlar los actos de una persona</strong>, no recordará luego lo que le obligaste a hacer y no tendrá nada en contra tuya.',
          },
          {
            title: 'Armadura Arcana',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Guardia arcana</em>',
            description:
              'Mientras tengas preparado un conjuro de primer nivel o superior, recibes armadura +4.',
          },
          {
            title: 'Contrahechizo Protector',
            hasXMark: false,
            relationships: '<em>Requiere: Contrahechizo</em>',
            description:
              'Cuando un compañero en tu línea de visión sea afectado por un conjuro arcano puedes contrarrestarlo como si te afectase a ti. Si el conjuro afecta a varios compañeros debe ser contrarrestado por separado para cada uno de ellos.',
          },
          {
            title: 'Atadura Etérea',
            hasXMark: false,
            description:
              'Cuando <strong>dispones de tiempo con un objetivo voluntario o indefenso</strong> puedes crear una atadura etérea con él. Percibes lo que él percibe y puedes <em>Discernir la realidad</em> sobre alguien al que tengas atado y su entorno, no importa a qué distancia se encuentre. Alguien que se ate a ti voluntariamente puede comunicarse contigo a través del vínculo como si estuvieseis en la misma habitación.',
          },
          {
            title: 'Mejorar Conjuro',
            hasXMark: false,
            description:
              'Cuando <strong>haces daño a una criatura</strong> puedes desviar la energía de uno de tus conjuros activos para hacer más daño. Dispersa uno de tus conjuros activos y añade el nivel de ese conjuro a la cantidad de daño provocado.',
          },
          {
            title: 'Autopotenciar',
            hasXMark: false,
            description:
              'Cuando <strong>dispones de tiempo, materiales arcanos y un entorno seguro</strong>, puedes crear tu propio lugar de poder. Describe al DJ qué tipo de poder posee y cómo estás atándolo al lugar. El DJ te dirá un tipo de criatura que puede estar interesada en tus trabajos.',
          },
        ],
      },
    ],
  },
};
