import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';

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
      ],
    },
    {
      title: 'Arma Distintiva (cont.)',
      hasXMark: false,
      choiceGroups: [
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
        'Cuando compartes una bebida con alguien, puedes Parlamentar usando CON en lugar de CAR.',
    },
    {
      name: 'Elfo',
      description:
        'Elige un arma. Puedes tratar las armas de ese tipo como si tuvieran la etiqueta precisa.',
    },
    {
      name: 'Mediano',
      description:
        'Cuando Desafías el peligro utilizando tu pequeño tamaño a tu favor, recibes +1.',
    },
    {
      name: 'Humano',
      description: 'Puedes repetir una tirada de daño (tuya o de otro) una vez por batalla.',
    },
  ],
};
