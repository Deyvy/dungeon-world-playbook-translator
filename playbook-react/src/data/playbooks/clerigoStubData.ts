import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';
import rationIcon from '../../assets/icons/ration-icon.png';
import potionIcon from '../../assets/icons/potion-icon.png';

export const clerigoStubData: PlaybookData = {
  meta: { name: 'El Clérigo', classIcon },

  raceNames: [
    { race: 'HUMANO', names: ['Aldric', 'Brenna', 'Caius', 'Daria', 'Edric', 'Fiona'] },
    { race: 'ELFO', names: ['Aelindra', 'Caelum', 'Faelwen', 'Thalindra'] },
  ],

  appearance: {
    prompt: 'Elige una de cada o escribe una propia:',
    fields: [
      { label: 'CUERPO', options: 'Delgado, robusto, etéreo' },
      { label: 'OJOS', options: 'Amables, penetrantes, ciegos' },
      { label: 'PIEL', options: 'Pálida, curtida, radiante' },
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
    { label: 'Bueno', description: 'Enseñar a alguien una verdad que no quería oír.' },
    { label: 'Neutral', description: 'Deshacer un error que has cometido.' },
  ],

  bonds: [
    '_______________ ha perdido el camino, debo guiarlo de vuelta.',
  ],

  moves: [
    {
      title: 'Canalizar Divinidad',
      hasXMark: true,
      span: 'full',
      description:
        'Cuando depositas tu fe en una deidad, puedes invocar su poder. Describiendo tu ritual, tira+SAB.',
      subtext: '• En un 10+, elige 2.\n• En un 7-9, elige 1.',
      choiceGroups: [
        {
          heading: '',
          items: [
            { label: 'Cura a un aliado de 1d8 daño.' },
            { label: 'Infliges 1d8 daño sagrado a un no-muerto.' },
            { label: 'Obtienes una visión breve del futuro.' },
            { label: 'Los aliados cercanos recuperan 1d4 puntos de golpe.' },
          ],
        },
      ],
    },
    {
      title: 'Sanador Experto',
      hasXMark: true,
      description:
        'Cuando realizas un Trato Herido con calma y tiempo suficiente, restauras 1d8+MOD puntos de golpe en lugar de 1d8.',
    },
  ],

  races: [
    {
      name: 'Humano',
      description:
        'Cuando entras en un santuario o templo, puedes Pedir ayuda y recibir +1 al resultado.',
    },
    {
      name: 'Elfo',
      description:
        'Puedes percibir la presencia de seres no-muertos a corta distancia sin realizar ninguna tirada.',
    },
  ],

  // --- Page 2: Advanced Moves + Equipment (stub) ---
  page2: {
    gear: {
      fixedItems: [
        'Llevas tu <strong>símbolo sagrado</strong> (peso 0).',
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
      ],
      defenseGroup: {
        prompt: 'Elige tus defensas:',
        items: [
          {
            text: '<strong>Túnica reforzada</strong> (armadura 1, peso 1).<br><strong>Equipo de aventurero</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Coraza</strong> (armadura 2, incómoda, peso 3).',
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
            text: '<strong>Incienso sagrado</strong> (3 usos, peso 0).',
            checkbox: true,
          },
          {
            text: '<strong>18 monedas.</strong>',
            checkbox: true,
          },
        ],
      },
      blankLineCount: 10,
      consumableRows: [
        { icon: rationIcon, groups: [5, 5] },
        { icon: potionIcon, groups: [3, 3], groupGap: 0.5 },
      ],
    },

    advancedMoves: [
      {
        instruction: 'Cuando subas a un nivel entre 2 y 5, elige uno de los siguientes movimientos.',
        moves: [
          {
            title: 'Bendición Divina',
            hasXMark: true,
            description: 'Cuando <strong>invocas la bendición de tu deidad</strong> sobre un aliado, este recibe +1 a su siguiente tirada.',
          },
          {
            title: 'Fe Inquebrantable',
            hasXMark: true,
            description: 'Cuando <strong>te enfrentas a un no-muerto o demonio</strong>, recibes +1 armadura contra sus ataques.',
          },
          {
            title: 'Toque Sanador',
            hasXMark: true,
            description: 'Tu <strong>Canalizar Divinidad</strong> ahora cura 2d8 en lugar de 1d8 al elegir la opción de curación.',
            relationships: 'Reemplaza a: Canalizar Divinidad (curación)',
          },
        ],
      },
      {
        instruction: 'Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos.',
        moves: [
          {
            title: 'Milagro',
            hasXMark: true,
            description: 'Una vez por sesión, puedes <strong>pedir un milagro a tu deidad</strong>. El DJ te dirá lo que ocurre.',
          },
          {
            title: 'Aura Protectora',
            hasXMark: true,
            description: 'Cuando <strong>alzas tu símbolo sagrado</strong>, todos los aliados cercanos reciben +1 a su siguiente tirada de <em>Desafiar el Peligro</em>.',
          },
        ],
      },
    ],
  },
};
