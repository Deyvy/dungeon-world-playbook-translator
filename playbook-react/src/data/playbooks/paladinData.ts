import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';

export const paladinData: PlaybookData = {
  meta: { name: 'El Paladín', classIcon },

  raceNames: [
    {
      race: 'HUMANO',
      names: [
        'Thaddeus',
        'Augustine',
        'Lux',
        'Cassius',
        'Hadrian',
        'Lucia',
        'Octavia',
        'Regulus',
        'Valeria',
        'Sanguinus',
        'Titanius',
      ],
    },
  ],

  appearance: {
    prompt: '<em>Elige una de cada o escribe una propia:</em>',
    fields: [
      { label: 'CUERPO', options: 'En forma, corpulento, delgado' },
      { label: 'OJOS', options: 'Amables, intensos, brillantes' },
      { label: 'PELO', options: 'Arreglado, calvo, yelmo' },
      { label: 'SÍMBOLO SAGRADO', options: 'Nuevo, desgastado' },
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
    {
      label: 'Legal',
      description: 'Negar la piedad a un criminal o no creyente.',
    },
    {
      label: 'Bueno',
      description: 'Ponerse en peligro para proteger a alguien más débil que tú.',
    },
  ],

  bonds: [
    '¡La mala conducta de _______________ pone en peligro su alma!',
    '_______________ ha permanecido junto a mí en la batalla y es alguien en quien puedo confiar plenamente.',
    'Respeto las creencias de _______________ pero espero que algún día vea la verdad.',
    '_______________ es un espíritu valeroso, tengo mucho que aprender de él/ella.',
  ],

  moves: [
    {
      title: 'Gesta',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>te embarcas en una misión consagrándote a través de la oración y la limpieza espiritual</strong>, indica lo que pretendes hacer:',
      detailBullets: [
        'Ajusticiar a _______________, una gran plaga para estas tierras.',
        'Defender _______________ de las iniquidades que le/la asedian.',
        'Descubrir la verdad sobre _______________.',
      ],
      choiceGroups: [
        {
          heading: 'Luego elige dos bendiciones:',
          headingItalic: false,
          items: [
            { label: 'Un inquebrantable sentido de la dirección para llegar a _______________.' },
            { label: 'Invulnerabilidad a _______________ (armas de filo, fuego, encantamientos, etc.)' },
            { label: 'Una marca de autoridad divina.' },
            { label: 'Sentidos que ven a través de las mentiras.' },
            { label: 'Una voz que trasciende las lenguas.' },
            { label: 'No sufrir hambre, sed ni sueño.' },
          ],
        },
        {
          heading: 'El DJ te dirá qué voto o votos debes cumplir para mantener tu bendición:',
          headingItalic: false,
          items: [
            { label: '<strong>Honor</strong> (prohibición: tácticas cobardes, celadas y otros engaños).' },
            { label: '<strong>Templanza</strong> (prohibición: placeres carnales y excesos con la comida y la bebida).' },
            { label: '<strong>Piedad</strong> (requisito: cumplir los servicios sagrados diarios).' },
            { label: '<strong>Valor</strong> (prohibición: tolerar que viva una criatura malvada).' },
            { label: '<strong>Verdad</strong> (prohibición: mentir).' },
            { label: '<strong>Hospitalidad</strong> (requisito: confortar a los necesitados, sin importar quiénes sean).' },
          ],
        },
      ],
    },
    {
      title: 'Imposición de Manos',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando <strong>tocas a alguien, piel con piel, y rezas pidiendo su bienestar</strong>, tira+CAR.',
      detailBullets: [
        'Con un 10+ le curas 1d8 de daño o eliminas una enfermedad.',
        'Entre 7 y 9 también curas, pero el daño o la enfermedad se transfieren a ti.',
      ],
    },
    {
      title: 'Yo Soy la Ley',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando <strong>le das una orden a un PNJ amparándote en tu autoridad divina</strong>, tira+CAR. • Con un 7+, el PNJ elige una:',
      detailBullets: [
        'Hace lo que dices.',
        'Se aparta con cuidado y luego huye.',
        'Te ataca.',
      ],
      postText:
        'Con un 10+, recibes también +1 a la siguiente tirada contra el PNJ.\n\nSi fallas, hace lo que le da la gana y recibes –1 a la siguiente tirada contra el PNJ.',
    },
    {
      title: 'Blindado',
      hasXMark: true,
      column: 'right',
      description:
        'Ignoras la etiqueta de <em>incómoda</em> en cualquier armadura que lleves.',
    },
  ],

  races: [
    {
      name: 'Humano',
      description:
        'Cuando <strong>rezas en busca de orientación, aunque sea por un instante, y preguntas «¿Qué hay de maldad aquí?»</strong>, el DJ te responderá sinceramente.',
    },
  ],

  page2: {
    gear: {
      maxLoadBase: 12,
      fixedItems: [
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
        '<strong>Armadura de escamas</strong> (armadura 2, incómoda, peso 3).',
        'Alguna <strong>marca de fe</strong> (peso 0). Descríbela: ________________',
      ],
      defenseGroup: {
        prompt: '<em>Elige tu arma:</em>',
        items: [
          {
            text: '<strong>Alabarda</strong> (corto alcance, +1 daño, a dos manos, peso 2).',
            checkbox: true,
          },
          {
            text: '<strong>Espada larga</strong> (cerca, daño +1, peso 2).<br><strong>Escudo</strong> (+1 armadura, peso 2).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: '<em>Elige uno:</em>',
        items: [
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Raciones de viaje</strong> (5 usos, peso 1).<br><strong>Poción curativa</strong> (cura 10 PG o debilidad, peso 0).',
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
            title: 'Favor Divino',
            hasXMark: false,
            description:
              'Conságrate a una deidad (pon nombre a una nueva o elige de entre las que ya hayan sido establecidas). Obtienes los movimientos de <em>Comunicación</em> y <em>Lanzar conjuros</em> del clérigo. Cuando elijas este movimiento, considérate un clérigo de nivel 1 para utilizar conjuros. Cada vez que ganes un nivel, aumenta tu nivel efectivo de clérigo en 1.',
            subtext:
              '<strong>Deidad:</strong> ______________________\nDominio: ______________________\nPrecepto: ______________________',
          },
          {
            title: 'Tutela Divina',
            hasXMark: false,
            description:
              'Cuando <strong>recibes daño puedes apretar los dientes y encajar el golpe</strong>. Si lo haces no sufres daño, pero sí una debilidad a tu elección. No puedes usar este movimiento si ya tienes las seis debilidades.',
          },
          {
            title: 'Aniquilar',
            hasXMark: false,
            description: 'Mientras estés en una <em>Gesta</em> haces +1d4 de daño.',
          },
          {
            title: 'Protección Sagrada',
            hasXMark: false,
            description: 'Recibes armadura +1 mientras estés en una <em>Gesta</em>.',
          },
          {
            title: 'Voz de la Autoridad',
            hasXMark: false,
            description: 'Recibes +1 al hacer el movimiento de <em>Comandar mercenarios</em>.',
          },
          {
            title: 'Hospitalario',
            hasXMark: false,
            description: 'Cuando <strong>curas a un compañero</strong>, curas +1d8 de daño.',
          },
          {
            title: 'Exterminatus',
            hasXMark: false,
            description:
              'Cuando <strong>haces en voz alta la promesa de derrotar a un enemigo</strong>, causas +2d4 de daño contra ese enemigo y –4 de daño contra cualquier otro. Este efecto dura hasta que derrotes al enemigo elegido. Si no consigues derrotar a tu enemigo o te rindes, puedes admitir tu fracaso, pero el efecto continuará hasta que encuentres una forma de redimirte.',
          },
          {
            title: '¡Cargad!',
            hasXMark: false,
            description:
              'Cuando <strong>diriges la carga en combate</strong>, aquellos a los que lideras reciben +1 a la siguiente tirada.',
          },
          {
            title: 'Defensor Acérrimo',
            hasXMark: false,
            description:
              'Cuando <strong>hagas el movimiento de <em>Defender</em></strong> recibes siempre +1 punto, incluso aunque saques un 6–.',
          },
          {
            title: 'Organizar Ataque',
            hasXMark: false,
            description:
              'Cuando <strong>hagas el movimiento de <em>Saja-Raja</em></strong>, elige un compañero. Su siguiente ataque contra tu objetivo hace +1d4 de daño.',
          },
        ],
      },
      {
        instruction:
          '<em>Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.</em>',
        moves: [
          {
            title: 'Prueba de Fe',
            hasXMark: false,
            relationships: '<em>Requiere: Favor divino</em>',
            description:
              'Cuando <strong>seas testigo de algún tipo de magia divina</strong> puedes preguntar al DJ qué deidad ha concedido el conjuro y qué efectos tiene. Recibes +1 si actúas de manera acorde a la respuesta.',
          },
          {
            title: 'Aniquilación Sagrada',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Aniquilar</em>',
            description: 'Mientras estés en una <strong><em>Gesta</em></strong> haces +1d8 de daño.',
          },
          {
            title: 'Siempre en la Vanguardia',
            hasXMark: false,
            relationships: '<em>Reemplaza a: ¡Cargad!</em>',
            description:
              'Cuando <strong>diriges la carga en combate</strong>, aquellos a los que lideras reciben +1 a la siguiente tirada y su armadura tendrá +2 en la siguiente tirada.',
          },
          {
            title: 'Defensor Insuperable',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Defensor acérrimo</em>',
            description:
              'Cuando <strong>hagas el movimiento de <em>Defender</em></strong> recibes siempre +1 punto, incluso aunque saques un 6–. Cuando sacas 12+ en la tirada, en lugar de recibir puntos, haces que la posición de la criatura atacante más cercana te ofrezca una clara ventaja. El DJ te explicará cómo.',
          },
          {
            title: 'Caballero Perfecto',
            hasXMark: false,
            description: 'Cuando <strong>estás en una <em>Gesta</em></strong> recibes tres bonificadores, en vez de dos.',
          },
          {
            title: 'Ataque Combinado',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Organizar ataque</em>',
            description:
              'Cuando <strong>hagas el movimiento de <em>Saja-Raja</em></strong>, elige un compañero. Su siguiente ataque contra tu objetivo hace +1d4 de daño y además recibe +1 a la siguiente tirada contra el mismo objetivo.',
          },
          {
            title: 'Protección Divina',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Protección sagrada</em>',
            description: 'Recibes armadura +2 mientras estés en una <strong><em>Gesta</em></strong>.',
          },
          {
            title: 'Autoridad Divina',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Voz de la autoridad</em>',
            description:
              'Recibes +1 al hacer el movimiento de <em>Comandar mercenarios</em>. Con un 12+, los mercenarios superan sus miedos y dudas y hacen lo que les ordenas con especial eficacia y eficiencia.',
          },
          {
            title: 'Hospitalario Perfecto',
            hasXMark: false,
            relationships: '<em>Reemplaza a: Hospitalario</em>',
            description: 'Cuando <strong>curas a un compañero</strong>, curas +2d8 de daño.',
          },
          {
            title: 'Indómito',
            hasXMark: false,
            description:
              'Cuando sufres una debilidad (aunque sea a través de <em>Tutela divina</em>) recibes +1 a la siguiente tirada contra aquello que la causó.',
          },
        ],
      },
    ],
  },
};
