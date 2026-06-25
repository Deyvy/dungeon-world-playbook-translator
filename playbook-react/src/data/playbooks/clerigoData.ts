import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';
import { clerigoSpellsData } from './clerigoSpellsData';

export const clerigoData: PlaybookData = {
  meta: { name: 'El Clérigo', classIcon },
  spells: clerigoSpellsData,

  raceNames: [
    {
      race: 'ENANO',
      names: ['Durga', 'Aelfar', 'Gerda', 'Rurgosh', 'Bjorn', 'Drummond', 'Helga', 'Siggrun', 'Freya'],
    },
    {
      race: 'HUMANO',
      names: ['Wesley', 'Brinton', 'Jon', 'Sara', 'Hawthorn', 'Elise', 'Clarke', 'Lenore', 'Piotr', 'Dahlia', 'Carmine'],
    },
  ],

  appearance: {
    prompt: '<em>Elige una de cada o escribe una propia:</em>',
    fields: [
      { label: 'CUERPO', options: 'Delgado, protuberante, fofo' },
      { label: 'OJOS', options: 'Amables, penetrantes, tristes' },
      { label: 'PELO', options: 'Tonsura, extraño, calvo' },
      { label: 'ROPA', options: 'Toga suelta, hábito, ropa común' },
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

  hpBase: 8,
  damageDie: 'd6',

  alignment: [
    { label: 'Bueno', description: 'Ponerte en peligro por sanar a otro.' },
    { label: 'Legal', description: 'Ponerte en peligro siguiendo los preceptos de tu iglesia o deidad.' },
    { label: 'Malvado', description: 'Dañar a otros para demostrar la superioridad de tu iglesia o deidad.' },
  ],

  bonds: [
    '_______________ ha insultado a mi deidad. No me fío.',
    '_______________ es una persona buena y fiel. Confío plenamente en ella (o él).',
    '_______________ siempre está en peligro. Le mantendré a salvo.',
    'Estoy intentando convertir a ________________ a mi fe.',
  ],

  moves: [
    {
      title: 'Deidad',
      hasXMark: true,
      description:
        'Sirves y adoras a alguna deidad o poder que te concede conjuros. Dale un nombre a tu dios (Helferth, Sucellus, Zorica o Krugon el Tenebroso) y elige su dominio:',
      subtext: 'Nombre de tu dios: ______________________',
      choiceGroups: [
        {
          heading: '',
          items: [
            { label: 'Curación y restauración' },
            { label: 'Conquista sangrienta' },
            { label: 'Civilización' },
            { label: 'Conocimiento y cosas ocultas' },
            { label: 'Los oprimidos y olvidados' },
            { label: 'Lo que yace en las profundidades' },
          ],
        },
        {
          heading: 'Elige un precepto religioso:',
          items: [
            { label: 'Predica la santidad y el sufrimiento, añade <strong><em>Petición:</em></strong> Sufrimiento' },
            { label: 'Se compone de sectas aisladas, añade <strong><em>Petición:</em></strong> Obtener Secretos' },
            { label: 'Tiene importantes ritos de sacrificio, añade <strong><em>Petición:</em></strong> Ofrenda' },
            { label: 'Cree en el juicio por combate, añade <strong><em>Petición:</em></strong> Victoria Personal' },
          ],
        },
      ],
    },
    {
      title: 'Lanzar Conjuro',
      hasXMark: true,
      description:
        'Cuando <strong>lanzas un conjuro concedido por tu deidad</strong>, tira+SAB. * Con un 10+, el conjuro es lanzado con éxito y tu deidad no revoca el conjuro, así que puedes lanzarlo de nuevo. * Entre 7 y 9, el conjuro tiene efecto, pero elige una cosa de la siguiente lista:',
      detailBullets: [
        'Atraes atención no deseada o te pones en riesgo. El DJ te dirá cómo.',
        'El lanzamiento del conjuro te aleja de tu deidad. Recibes –1 a <em>Lanzar conjuros</em> hasta que vuelvas a entrar en <em>comunión</em>.',
        'Después de lanzarlo, el conjuro es revocado por tu deidad. No puedes volver a lanzarlo hasta que no te vuelva a ser concedido.',
      ],
      subtext: '<em>Nota: Mantener algunos conjuros activos penalizará la tirada de tu movimiento de Lanzar Conjuro.</em>',
    },
    {
      title: 'Orientación divina',
      hasXMark: true,
      description:
        'Cuando haces una petición a tu deidad acorde con el precepto de tu religión, se te proporciona un conocimiento útil o un beneficio relacionado con el dominio de tu deidad. El DJ te dirá de qué se trata.',
    },
    {
      title: 'Comunión',
      hasXMark: true,
      description:
        'Cuando <strong>pasas un tiempo ininterrumpido (una hora o así) en tranquila comunión con tu deidad</strong>:',
      detailBullets: [
        'Pierdes todos los conjuros que se te habían concedido.',
        'Recibes nuevos conjuros a tu elección, cuyo nivel total no supere tu propio nivel +1, siempre que ninguno sea de nivel superior a tu propio nivel.',
        'Prepara todas tus plegarias, que no cuentan para el límite de conjuros.',
      ],
    },
  ],

  extraMove: {
    title: 'Expulsar muertos vivientes',
    hasXMark: true,
    description:
      'Cuando <strong>sostienes en alto tu símbolo sagrado y apelas a tu deidad para que te proteja</strong>, tira+SAB. * Con un 7+, ningún muerto viviente podrá ponerse a tu alcance mientras continúes rezando y blandiendo tu símbolo sagrado. * Con un 10+, también puedes aturdir momentáneamente a los muertos vivientes inteligentes y hacer huir a aquellos sin mente. Una agresión terminará el efecto y podrán reaccionar de manera normal. Los muertos vivientes dotados de inteligencia pueden encontrar formas de hostigarte a distancia. Son así de listos.',
  },

  races: [
    {
      name: 'Enano',
      description:
        'Eres uno con la roca. Cuando entras en <em>Comunión</em> también se te concede una plegaria especial, una versión del conjuro Palabras de los Silentes que solo tiene efecto sobre la piedra.',
    },
    {
      name: 'Humano',
      description:
        'Tu fe es heterogénea. Elige un conjuro de <em>mago</em>. Puedes lanzarlo y ser concedido como si fuera un conjuro de clérigo.',
    },
  ],

  page2: {
    gear: {
      maxLoadBase: 10,
      fixedItems: [
        'Algún <strong>símbolo de tu deidad</strong> (peso 0), descríbelo. ________________',
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
      ],
      defenseGroup: {
        prompt: '<em>Elige tus defensas:</em>',
        items: [
          {
            text: '<strong>Cota de mallas</strong> (armadura 1, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Escudo</strong> (+1 armadura, peso 2).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: '<em>Elige tu armamento:</em>',
        items: [
          {
            text: '<strong>Martillo de guerra</strong> (cerca, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Maza</strong> (cerca, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Báculo</strong> (cerca, a dos manos, peso 1).<br><strong>Vendajes</strong> (3 usos, cura 4 PG, lentos, peso 0).',
            checkbox: true,
          },
          {
            text: '<em>Elige uno:</em>',
            checkbox: false,
          },
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1).<br><strong>Raciones de viaje</strong> (5 usos, peso 1).',
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
        instruction: '<em>Cuando subas a un nivel entre 2 y 5, elige uno de los siguientes movimientos.</em>',
        moves: [
          {
            title: 'Curador devoto',
            hasXMark: false,
            description: 'Cuando <strong>cures a otra persona</strong>, suma tu nivel a la cantidad de daño curada.',
          },
          {
            title: 'Elegido',
            hasXMark: false,
            description: 'Elige un conjuro. Se te concede ese conjuro como si fuera de un nivel inferior.',
          },
          {
            title: 'Fortalecer',
            hasXMark: false,
            description: 'Cuando <strong>curas a alguien</strong>, también recibe +2 a la siguiente tirada de daño.',
          },
          {
            title: 'La Balanza de la Vida y la Muerte',
            hasXMark: false,
            description: 'Cuando <strong>alguien toma su <strong><em>Último aliento</em></strong> en tu presencia</strong>, recibe +1 a la tirada.',
          },
          {
            title: 'Serenidad',
            hasXMark: false,
            description: 'Cuando <strong>lanzas un conjuro</strong> ignora la primera penalización de –1 debida a conjuros activos.',
          },
          {
            title: 'Oración de Guía',
            hasXMark: false,
            description:
              'Cuando <strong>sacrifiques algo valioso a tu dios y le rezas pidiendo orientación</strong>, te contará lo que quiere que hagas. Si lo haces, marca experiencia.',
          },
          {
            title: 'Penitente',
            hasXMark: false,
            description:
              'Cuando <strong>recibes daño y te entregas al dolor</strong>, puedes sufrir +1d4 de daño (ignora armadura). Si lo haces, recibes +1 a la siguiente tirada de <em>Lanzar conjuros</em>.',
          },
          {
            title: 'Potenciar',
            hasXMark: false,
            description:
              'Cuando <strong>lanzas un conjuro</strong>, con un 10+ tienes la opción de elegir de la lista correspondiente al resultado de entre 7 y 9, y además elegir uno de los siguientes efectos:',
            detailBullets: [
              'Los efectos del conjuro se doblan.',
              'El número de objetivos del conjuro se dobla.',
            ],
          },
          {
            title: 'Primeros auxilios',
            hasXMark: false,
            description:
              'Usa <em>Curar Heridas Leves</em> como si fuera una <em>plegaria</em>. No cuenta para el límite de conjuros concedidos.',
          },
          {
            title: 'Protección divina',
            hasXMark: false,
            description: '<strong>Cuando no lleves armadura ni escudo</strong> tienes armadura 2.',
          },
          {
            title: 'Intervención divina',
            hasXMark: false,
            description:
              'Cuando <strong>entras en <strong><em>comunión</em></strong></strong>, recibes 1 punto y pierdes cualquier punto que ya tuvieras. Puedes gastarlo para invocar a tu deidad cuando tú o un compañero reciba daño. Tu deidad intervendrá mediante una manifestación apropiada (un súbito golpe de viento, una explosión de luz) y el daño no tendrá efecto.',
          },
        ],
      },
      {
        instruction:
          '<em>Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.</em>',
        moves: [
          {
            title: 'Apoteosis',
            hasXMark: false,
            description:
              'La primera vez que pases tiempo en oración de una forma adecuada para tu dios, después de elegir este movimiento, elige una característica asociada a él (garras afiladas, alas con plumas de zafiro, un tercer ojo que todo lo ve, etcétera). Cuando termines tus oraciones habrás ganado permanentemente esa característica física.',
          },
          {
            title: 'Armadura divina',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Protección Divina</em>',
            description: '<strong>Cuando no lleves armadura ni escudo</strong> tienes armadura 3.',
          },
          {
            title: 'Consagrado',
            hasXMark: false,
            relationships: '<em>Requiere: Elegido</em>',
            description:
              'Escoge un conjuro adicional distinto al que seleccionaste para Elegido. Se te concede ese conjuro como si fuera de un nivel inferior.',
          },
          {
            title: 'Invencibilidad divina',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Intervención Divina</em>',
            description:
              'Cuando <strong>entras en comunión</strong>, recibes 2 puntos y pierdes cualquier punto que ya tuvieras. Puedes gastarlos para invocar en dos ocasiones a tu deidad cuando tú o un compañero reciba daño. Tu deidad intervendrá mediante una manifestación apropiada (un súbito golpe de viento, un resbalón afortunado, una explosión de luz) y el daño no tendrá efecto.',
          },
          {
            title: 'Mártir',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Penitente</em>',
            description:
              'Cuando <strong>recibes daño y te entregas al dolor</strong>, puedes sufrir +1d4 de daño (ignora armadura). Si lo haces, recibes +1 a la siguiente tirada de <em>Lanzar conjuros</em> y sumas tu nivel al daño que el conjuro haga o cure.',
          },
          {
            title: 'Multiclase aficionado',
            hasXMark: false,
            description:
              'Recibes un movimiento de otra clase. Trata tu nivel como si fuera inferior en uno al actual para elegir el movimiento.',
          },
          {
            title: 'Primeros auxilios mejorados',
            hasXMark: false,
            relationships: '<em>Requiere: Primeros auxilios</em>',
            description:
              'Usa <em>Curar Heridas Moderadas</em> como si fuera una <em>plegaria</em>. No cuenta para el límite de conjuros concedidos.',
          },
          {
            title: 'Potenciar mejorado',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Potenciar</em>',
            description:
              'Cuando <strong>lanzas un conjuro</strong>, con un 10-11 tienes la opción de elegir de la lista correspondiente al resultado de entre 7 y 9, y elegir uno de los siguientes efectos. Con un 12+, puedes elegir uno de los siguientes efectos sin elegir nada de la lista de entre 7 y 9.',
            detailBullets: [
              'Los efectos del conjuro se doblan.',
              'El número de objetivos del conjuro se dobla.',
            ],
          },
          {
            title: 'Providencia',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Serenidad</em>',
            description: 'Ignora dos penalizaciones de –1 debidas a conjuros activos.',
          },
          {
            title: 'Segadora de almas',
            hasXMark: false,
            description:
              'Cuando <strong>te tomas un tiempo tras un conflicto para dedicar la victoria a tu deidad y atiendes apropiadamente a los muertos</strong>, recibes +1 a la siguiente tirada.',
          },
        ],
      },
    ],
  },
};
