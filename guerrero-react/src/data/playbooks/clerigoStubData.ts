import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';

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
};
