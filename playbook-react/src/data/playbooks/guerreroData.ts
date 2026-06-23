import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';

export const guerreroData: PlaybookData = {
  meta: { name: 'El Guerrero', classIcon },

  raceNames: [
    {
      race: 'ENANO',
      names: ['Ozruk', 'Surtur', 'Brunhilda', 'Annika', 'Janos', 'Greta', 'Dim', 'Rundrig', 'Jari', 'Xotoq'],
    },
    {
      race: 'MEDIANO',
      names: ['Finnegan', 'Olive', 'Randolph', 'Bartleby', 'Aubrey', 'Baldwin', 'Becca'],
    },
    {
      race: 'ELFO',
      names: ['Elobiir', 'Sharaseth', 'Hasrith', 'Shevaral', 'Cadeus', 'Eldar', 'Kithracet', 'Thelian'],
    },
    {
      race: 'HUMANO',
      names: ['Hawke', 'Rudiger', 'Gregor', 'Brianne', 'Walton', 'Castor', 'Shanna', 'Ajax', 'Hob'],
    },
  ],

  appearance: {
    prompt: 'Elige una de cada o escribe una propia:',
    fields: [
      { label: 'CUERPO', options: 'Macizo, flexible, desfigurado' },
      { label: 'OJOS', options: 'Severos, muertos, ansiosos' },
      { label: 'PELO', options: 'Revuelto, rapado, yelmo magullado' },
      { label: 'PIEL', options: 'Callosa, bronceada, cubierta de cicatrices' },
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

  hpBase: 10,
  damageDie: 'd10',

  alignment: [
    { label: 'Bueno', description: 'Defender a los que son más débiles que tú.' },
    { label: 'Neutral', description: 'Derrotar a un enemigo digno.' },
    { label: 'Malvado', description: 'Matar a un enemigo indefenso o rendido.' },
  ],

  bonds: [
    '_______________ me debe la vida, lo quiera reconocer o no.',
    'He jurado proteger a _______________.',
    'Me preocupa la capacidad de _______________ para sobrevivir en una mazmorra.',
    '_______________ es débil, pero haré que sea tan fuerte como yo.',
  ],

  moves: [
    {
      title: 'Arma Distintiva',
      hasXMark: true,
      span: 'full',
      splitColumnAt: 2,
      description:
        'Esta es tu arma. Hay muchas como ella, pero esta es la tuya. Tu arma es tu mejor amiga. Es tu vida. Eres tan dueño de ella como de tu vida. Sin ti, tu arma es inútil. Sin tu arma, también lo eres tú. Debes empuñarla fielmente.',
      subtext: '¿Tiene nombre?: ______________________',
      choiceGroups: [
        {
          heading: 'Elige una descripción básica; todas tienen peso 2:',
          columns: 2,
          items: [
            { label: 'Espada' },
            { label: 'Lanza' },
            { label: 'Hacha' },
            { label: 'Mayal' },
            { label: 'Martillo' },
            { label: 'Puños' },
          ],
        },
        {
          heading: 'Elige la distancia que mejor se ajuste a tu arma:',
          columns: 2,
          items: [{ label: 'Toque' }, { label: 'Corto alcance' }, { label: 'Cerca' }],
        },
        {
          heading: 'Elige dos mejoras:',
          columns: 1,
          items: [
            { label: 'Garfios y púas. +1 daño, pero también +1 peso.' },
            { label: 'Afilada. Añade penetrante 2.' },
            { label: 'Perfectamente equilibrada. Añade precisa.' },
            { label: 'Filo exótico (sierra, élfico, etc). +1 daño.' },
            { label: 'Brilla en presencia de un tipo de criatura a tu elección.' },
            { label: 'Enorme. Añade escabrosa y contundente.' },
            { label: 'Versátil. Elige un alcance adicional.' },
            { label: 'Bien forjada. -1 peso.' },
          ],
        },
        {
          heading: 'Elige un aspecto:',
          columns: 2,
          items: [
            { label: 'Antigua' },
            { label: 'Siniestra' },
            { label: 'Inmaculada' },
            { label: 'Ornamentada' },
            { label: 'Manchada de sangre' },
          ],
        },
      ],
    },
    {
      title: 'Doblar Barras, Alzar Puertas',
      hasXMark: true,
      description: 'Cuando usas la fuerza bruta para destruir un obstáculo inanimado, tira+FUE.',
      subtext: '• Con un 10+, elige 3 de las siguientes opciones.\n• Entre 7 y 9, elige 2.',
      choiceGroups: [
        {
          heading: '',
          items: [
            { label: 'No te lleva mucho tiempo.' },
            { label: 'No resulta dañado nada de valor.' },
            { label: 'No hace una cantidad desorbitada de ruido.' },
            { label: 'Puedes volver a repararlo después sin mucho esfuerzo.' },
          ],
        },
      ],
    },
    {
      title: 'Blindado',
      hasXMark: true,
      description: 'Ignoras la etiqueta incómoda de cualquier armadura que lleves.',
    },
  ],

  races: [
    {
      name: 'Enano',
      description:
        'Cuando compartas una bebida con alguien, puedes Parlamentar usando CON en lugar de CAR.',
    },
    {
      name: 'Elfo',
      description:
        'Elige un arma. Puedes tratar las armas de ese tipo como si tuvieran la etiqueta precisa.',
    },
    {
      name: 'Mediano',
      description:
        'Cuando Desafíes el peligro utilizando tu pequeño tamaño a tu favor, recibes +1.',
    },
    {
      name: 'Humano',
      description: 'Puedes repetir una tirada de daño (tuya o de otro) una vez por batalla.',
    },
  ],

  // --- Page 2: Advanced Moves + Equipment ---
  page2: {
    gear: {
      fixedItems: [
        'Llevas tu <strong>arma distintiva</strong> (peso &nbsp;&nbsp;&nbsp;&nbsp;).',
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
      ],
      defenseGroup: {
        prompt: 'Elige tus defensas:',
        items: [
          {
            text: '<strong>Cota de mallas</strong> (armadura 1, peso 1).<br><strong>Equipo de aventurero</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Armadura de escamas</strong> (armadura 2, incómoda, peso 3).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: 'Elige dos:',
        items: [
          {
            text: '<strong>2 Pociones curativas</strong> (cura 10 PG o debilidad, peso 0).',
            checkbox: true,
          },
          {
            text: '<strong>Escudo</strong> (+1 armadura, peso 2).',
            checkbox: true,
          },
          {
            text: '<strong>Antídoto</strong> (peso 0)<br><strong>Raciones de viaje</strong> (5 usos, peso 1),<br><strong>Hierbas y cataplasma</strong> (2 usos, cura 7 PG, lenta, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>22 monedas.</strong>',
            checkbox: true,
          },
        ],
      },
      blankLineCount: 18,
      consumableRows: CONSUMABLE_ROWS,
    },

    advancedMoves: [
      // Level 2-5 group
      {
        instruction: 'Cuando subas a un nivel entre 2 y 5, elige uno de los siguientes movimientos.',
        moves: [
          {
            title: 'Despiadado',
            hasXMark: true,
            description: 'Cuando <strong>haces daño</strong>, suma +1d4.',
          },
          {
            title: 'Reliquia Familiar',
            hasXMark: true,
            description:
              'Cuando <strong>consultes a los espíritus que habitan en tu <em>arma distintiva</em></strong>, te darán orientación relativa a la situación actual y, a cambio, podrán hacerte algunas preguntas. Tira+CAR.',
            detailBullets: [
              'Con un 10+, el DJ te dará muchos detalles.',
              'Entre 7 y 9, el DJ te comunicará una sensación.',
            ],
          },
          {
            title: 'Arma Mejorada',
            hasXMark: true,
            description:
              'Elige una mejora adicional para tu <em>arma distintiva</em>.',
          },
          {
            title: 'Herrero',
            hasXMark: true,
            description:
              'Cuando <strong>tienes acceso a una forja</strong> puedes injertar los poderes mágicos de un arma en tu arma distintiva. Este proceso destruye el arma mágica. Tu arma distintiva gana los poderes mágicos del arma destruida.',
          },
          {
            title: 'Piel de Hierro',
            hasXMark: true,
            description: 'Recibes +1 armadura.',
          },
          {
            title: 'Maestría con la Armadura',
            hasXMark: true,
            description:
              'Cuando <strong>elijas que tu armadura se lleve la peor parte del daño que te corresponde</strong>, el daño se anula, pero debes reducir el valor de la armadura o escudo (a tu elección) en 1. El valor se reduce cada vez que decides hacerlo. El objeto es destruido si la reducción lo deja con armadura 0.',
          },
          {
            title: 'Señales de Peligro',
            hasXMark: true,
            description:
              'Cuando <strong>disciernes la realidad</strong> durante el combate, recibes +1.',
          },
          {
            title: 'Interrogador',
            hasXMark: true,
            description:
              'Cuando <strong>parlamentes con amenazas o la violencia inminente como ventaja</strong>, puedes usar FUE en lugar de CAR.',
          },
          {
            title: 'Olor a Sangre',
            hasXMark: true,
            description:
              'Cuando <strong>hagas <em>Saja-Raja</em></strong> a un enemigo <strong>con éxito</strong>, tu siguiente ataque contra el mismo objetivo hace +1d4 de daño.',
          },
          {
            title: 'Multiclase Aficionado',
            hasXMark: true,
            description:
              'Recibes un movimiento de otra clase. Trata tu nivel como si fuera inferior en uno al actual para elegir el movimiento.',
          },
        ],
      },
      // Level 6-10 group
      {
        instruction:
          'Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.',
        moves: [
          {
            title: 'Sed de Sangre',
            hasXMark: true,
            relationships: 'Reemplaza a: Despiadado',
            description: 'Cuando <strong>haces daño</strong>, suma +1d8.',
          },
          {
            title: 'Con los Ojos de la Muerte',
            hasXMark: true,
            description:
              'Cuando <strong>entres en combate</strong>, tira+SAB.',
            detailBullets: [
              'Con un 10+, nombra alguien que saldrá con vida y alguien que morirá.',
              'Entre 7 y 9, nombra alguien que morirá o alguien que vivirá. Nombra PNJ, no personajes jugadores. El DJ hará que tu visión se vuelva realidad, incluso aunque sea remotamente posible.',
              'Si fallas, ves tu propia muerte y recibes -1 hasta que termine la batalla.',
            ],
          },
          {
            title: 'Buen Ojo para las Armas',
            hasXMark: true,
            description:
              'Cuando <strong>eches un vistazo a las armas del enemigo</strong>, puedes preguntar al DJ cuánto daño hacen.',
          },
          {
            title: 'Guerrero Supremo',
            hasXMark: true,
            description:
              'Cuando <strong>hagas <em>Saja-Raja</em></strong> y sacas un 12+, haces daño, evitas el ataque y además impresionas, acobardas o asustas a tu enemigo.',
          },
          {
            title: 'Piel de Acero',
            hasXMark: true,
            relationships: 'Reemplaza a: Piel de hierro',
            description: 'Recibes +2 armadura.',
          },
          {
            title: 'Armadura Perfecta',
            hasXMark: true,
            relationships: 'Reemplaza a: Maestría con la armadura',
            description:
              'Cuando <strong>elijas que tu armadura se lleve la peor parte del daño que te corresponde</strong>, el daño se cancela y recibes +1 a la siguiente tirada contra el atacante, pero debes reducir el valor de la armadura o escudo (a tu elección) en 1. El valor se reduce cada vez que decides hacerlo. El objeto es destruido si la reducción lo deja con armadura 0.',
          },
          {
            title: 'Mirada Amenazadora',
            hasXMark: true,
            relationships: 'Requiere: Señales de peligro',
            description:
              'Cuando <strong>entras en combate</strong>, tira+CAR.',
            detailBullets: [
              'Con un 10+, recibes 2 puntos.',
              'Entre 7 y 9, recibes 1 punto.',
              'Gasta estos puntos para establecer contacto visual con un PNJ presente, que quedará paralizado o acobardado y no podrá actuar mientras no dejes de mirarlo.',
              'Si fallas, tus enemigos te identifican inmediatamente como la mayor amenaza.',
            ],
          },
          {
            title: 'Sabor a Sangre',
            hasXMark: true,
            relationships: 'Reemplaza a: Olor a sangre',
            description:
              'Cuando <strong>hagas <em>Saja-Raja</em> a un enemigo con éxito</strong>, tu siguiente ataque contra el mismo objetivo hace +1d8 de daño.',
          },
          {
            title: 'Multiclase Aguerrido',
            hasXMark: true,
            description:
              'Recibes un movimiento de otra clase. Trata tu nivel como si fuera inferior en uno al actual para elegir el movimiento.',
          },
        ],
      },
    ],
  },
};
