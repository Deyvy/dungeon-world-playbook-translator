import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';

export const bardoData: PlaybookData = {
  meta: { name: 'El Bardo', classIcon },

  raceNames: [
    {
      race: 'ELFO',
      names: ['Astrafel', 'Daelwyn', 'Feliana', 'Damarra', 'Sistranalle', 'Pendrell', 'Melliandre', 'Dagoliir'],
    },
    {
      race: 'HUMANO',
      names: ['Baldric', 'Leena', 'Willem', 'Edwyn', 'Florian', 'Seraphine', 'Quorra', 'Charlotte', 'Lily', 'Ramonde', 'Cassandra'],
    },
  ],

  appearance: {
    prompt: 'Elige una de cada o escribe una propia:',
    fields: [
      { label: 'CUERPO', options: 'En forma, bien alimentado, delgado' },
      { label: 'OJOS', options: 'Sabios, fieros, alegres' },
      { label: 'PELO', options: 'A la moda, despeinado, sombrero elegante' },
      { label: 'ROPA', options: 'Elegante, de viaje, pobre' },
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
  damageDie: 'd6',

  alignment: [
    { label: 'Bueno', description: 'Ayudar a alguien con tu arte.' },
    { label: 'Neutral', description: 'Evitar un conflicto o calmar una situación tensa.' },
    { label: 'Caótico', description: 'Incitar a otros a llevar a cabo acciones decisivas e importantes no planeadas.' },
  ],

  bonds: [
    'No es mi primera aventura con _______________.',
    'Canté historias sobre _______________ mucho antes de conocerlo/la en persona.',
    '_______________ suele ser el objetivo de mis bromas.',
    'Estoy escribiendo una balada sobre las aventuras de _______________.',
    '_______________ me confió un secreto. _______________ no se fía de mi, y tiene un buen motivo.',
  ],

  moves: [
    {
      title: 'Artes Arcanas',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando imbuyes con magia una de tus actuaciones, elige un compañero y un efecto:',
      detailBullets: [
        'Cura 1d8 de daño.',
        '+1d4 a la siguiente tirada de daño.',
        'Su mente es liberada de un encantamiento.',
        'La próxima vez que alguien ayude con éxito al objetivo, recibe +2 en lugar de +1.',
      ],
      postText:
        'Luego tira+CAR. • Con un 10+, el compañero recibe el efecto seleccionado. • Entre 7 y 9, tu conjuro funciona, pero atraes una atención no deseada o tu magia resuena en otros objetivos, afectándoles también a ellos. El DJ elige cuál.',
    },
    {
      title: 'Abierto y Encantador',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando hablas sinceramente con alguien, puedes hacer a su jugador una pregunta de la siguiente lista. Debe responderte honestamente y luego puede hacerte una pregunta de la lista que tú deberás responder de forma sincera.',
      detailBullets: [
        '¿A quién sirves?',
        '¿Qué te gustaría que hiciera yo?',
        '¿Cómo puedo conseguir que hagas _______________?',
        '¿Qué es lo que sientes realmente ahora?',
        '¿Qué es lo que mas quieres?',
      ],
    },
    {
      title: 'Conocimiento de Bardo',
      hasXMark: true,
      column: 'right',
      description: 'Elige un área de conocimiento:',
      choiceGroups: [
        {
          heading: '',
          items: [
            { label: 'Conjuros y magia.' },
            { label: 'La Muerte y los no-muertos.' },
            { label: 'Grandes historias del mundo conocido.' },
            { label: 'Bestiario de criaturas inusuales.' },
            { label: 'Las Esferas Planares.' },
            { label: 'Leyendas de antiguos héroes.' },
            { label: 'Dioses y sus servidores.' },
          ],
        },
      ],
      postText:
        'Cuando encuentres por primera vez una criatura, lugar u objeto importante (tú decides) que entre dentro de tu conocimiento, puedes hacer al DJ una pregunta al respecto y te responderá con sinceridad. El DJ puede preguntarte luego de qué cuento, canción o leyenda has obtenido esa información.',
    },
    {
      title: 'Un Puerto en la Tormenta',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando vuelves a un asentamiento civilizado que has visitado con anterioridad, dile al DJ cuándo fue la última vez que estuviste aquí y él te dirá de qué forma ha cambiado desde entonces.',
    },
  ],

  races: [
    {
      name: 'Elfo',
      description:
        'Cuando llegas a un lugar importante (tú decides) puedes preguntar al DJ acerca de un hecho de la historia de dicho emplazamiento.',
    },
    {
      name: 'Humano',
      description:
        'Cuando llegas por primera vez a un asentamiento civilizado, alguien que respeta la costumbre de la hospitalidad hacia los juglares te acogerá como invitado.',
    },
  ],

  page2: {
    gear: {
      maxLoadBase: 9,
      fixedItems: [
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
      ],
      defenseGroup: {
        prompt: 'Elige un instrumento, todos pesan 0 para ti:',
        items: [
          {
            text: 'El <strong>mandolín</strong> restaurado de tu padre.',
            checkbox: true,
          },
          {
            text: 'Una bella <strong>flauta</strong> regalo de un noble.',
            checkbox: true,
          },
          {
            text: 'La <strong>gaita charra</strong> con la que cortejaste a tu primer amor.',
            checkbox: true,
          },
          {
            text: 'Un <strong>cuerno</strong> robado.',
            checkbox: true,
          },
          {
            text: 'Un <strong>rabel</strong> que nunca ha sido tocado.',
            checkbox: true,
          },
          {
            text: 'Un <strong>libro de canciones</strong> en una lengua olvidada.',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: '',
        items: [
          { text: '<em>Elige tus ropas:</em>', checkbox: false },
          {
            text: '<strong>Armadura de cuero</strong> (armadura 1, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Ropas ostentosas</strong> (peso 0).',
            checkbox: true,
          },
          { text: '<em>Elige tu armamento:</em>', checkbox: false },
          {
            text: '<strong>Estoque de duelista</strong> (cerca, preciso, penetrante 1, peso 2).',
            checkbox: true,
          },
          {
            text: '<strong>Arco desgastado</strong> (medio alcance, peso 2)<br><strong>Fajo de flechas</strong> (munición 3, peso 1)<br><strong>Espada corta</strong> (cerca, peso 1)',
            checkbox: true,
          },
          { text: '<em>Elige uno:</em>', checkbox: false },
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Vendajes</strong> (3 usos, cura 4 PG, lentos, peso 0).',
            checkbox: true,
          },
          {
            text: '<strong>Hierba para pipa de los medianos</strong> (6 usos, peso 0).',
            checkbox: true,
          },
          {
            text: '<strong>3 monedas.</strong>',
            checkbox: true,
          },
        ],
      },
      blankLineCount: 4,
      consumableRows: CONSUMABLE_ROWS,
    },

    advancedMoves: [
      {
        instruction: 'Cuando subas a un nivel entre 2 y 5, elige uno de los siguientes movimientos.',
        moves: [
          {
            title: 'Canción Sanadora',
            hasXMark: false,
            description:
              'Cuando <strong>sanes a alguien con tus <em>Artes arcanas</em></strong>, curas +1d8.',
          },
          {
            title: 'Cacofonía Feroz',
            hasXMark: false,
            description:
              'Cuando <strong>concedes una bonificación al daño usando tus <em>Artes arcanas</em></strong>, proporcionas +1d4.',
          },
          {
            title: 'Haz que Suene el Once',
            hasXMark: false,
            description:
              'Cuando <strong>lleves a cabo una actuación delirante</strong> (un solo de laúd perfecto o quizás un poderoso redoble de metales), elige un objetivo que pueda oírte y tira+CAR.',
            detailBullets: [
              'Con un 10+, el objetivo ataca a su compañero más cercano a su alcance.',
              'Entre 7 y 9 ataca a su compañero más cercano, pero tú también atraes su ira y atención.',
            ],
          },
          {
            title: 'Canción del Yunque',
            hasXMark: false,
            description:
              'Cuando <strong>grites a pleno pulmón o toques una nota desgarradora</strong>, elige un objetivo y tira+CON.',
            detailBullets: [
              'Con un 10+, el objetivo recibe 1d10 de daño y queda ensordecido durante unos minutos.',
              'Entre 7 y 9 haces el mismo daño, pero sin control: el DJ elegirá un objetivo adicional en las inmediaciones.',
            ],
          },
          {
            title: 'Con un Poco de Ayuda de Mis Amigos',
            hasXMark: false,
            description:
              'Cuando <strong>ayudas con éxito a alguien</strong>, tú también recibes +1 a la siguiente tirada.',
          },
          {
            title: 'Tonos Arcanos',
            hasXMark: false,
            description:
              'Tus <em>Artes arcanas</em> son poderosas y te permiten elegir dos efectos en lugar de uno.',
          },
          {
            title: 'Defensa del Duelista',
            hasXMark: false,
            description:
              'Cuando <strong>realices el movimiento de <em>Saja-Raja</em></strong> recibes +1 armadura en la siguiente tirada.',
          },
          {
            title: 'Engatusar',
            hasXMark: false,
            description:
              'Si <strong>sacas 7 o más cuando parlamentes con alguien</strong>, también recibes +1 a la siguiente tirada con tu objetivo.',
          },
          {
            title: 'Multiclase Aficionado',
            hasXMark: false,
            description:
              'Recibes un movimiento de otra clase. Trata tu nivel como si fuera inferior en uno al actual para elegir el movimiento.',
          },
          {
            title: 'Multiclase Aguerrido',
            hasXMark: false,
            description:
              'Recibes un movimiento de otra clase. Trata tu nivel como si fuera inferior en uno al actual para elegir el movimiento.',
          },
        ],
      },
      {
        instruction:
          'Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.',
        moves: [
          {
            title: 'Coro Sanador',
            hasXMark: false,
            relationships: 'Reemplaza a: Canción sanadora',
            description:
              'Cuando <strong>sanes a alguien con tus <em>Artes arcanas</em></strong>, curas +2d8.',
          },
          {
            title: 'Explosión Feroz',
            hasXMark: false,
            relationships: 'Reemplaza a: Cacofonía feroz',
            description:
              'Cuando <strong>concedes una bonificación al daño usando tus <em>Artes arcanas</em></strong>, proporcionas +2d4.',
          },
          {
            title: 'Rostro Inolvidable',
            hasXMark: false,
            description:
              'Cuando <strong>te reencuentres con alguien que ya hayas conocido</strong> (tú decides) y que hayas pasado un tiempo sin ver, recibes +1 a la siguiente tirada con él.',
          },
          {
            title: 'Reputación',
            hasXMark: false,
            description:
              'Cuando <strong>te encuentras por primera vez con alguien que ha oído canciones sobre ti</strong>, tira+CAR.',
            detailBullets: [
              'Con un 10+, cuéntale al DJ dos cosas que hayan oído de ti.',
              'Entre 7 y 9, dile al DJ una cosa que hayan oído de ti y el DJ decidirá cuál es la otra.',
            ],
          },
          {
            title: 'Acorde Arcano',
            hasXMark: false,
            relationships: 'Reemplaza a: Tonos arcanos',
            description:
              'Cuando uses tus <em>Artes arcanas</em>, elige dos efectos. También puedes duplicar la intensidad de uno de ellos.',
          },
          {
            title: 'Buen Oído para la Magia',
            hasXMark: false,
            description:
              'Cuando <strong>escuches a un enemigo lanzar un conjuro</strong>, el DJ te dirá el nombre del conjuro y sus efectos. Recibes +1 a la siguiente tirada cuando estés actuando conforme a las respuestas.',
          },
          {
            title: 'Taimado',
            hasXMark: false,
            description:
              'Cuando utilices <strong><em>Abierto y encantador</em></strong> también puedes preguntar «¿En qué sentido eres vulnerable para mí?». Tu objetivo no puede hacerte a ti esa pregunta.',
          },
          {
            title: 'Parada del Duelista',
            hasXMark: false,
            relationships: 'Reemplaza a: Defensa del duelista',
            description:
              'Cuando <strong>realices el movimiento de <em>Saja-Raja</em></strong> recibes +2 armadura en la siguiente tirada.',
          },
          {
            title: 'Timador',
            hasXMark: false,
            relationships: 'Reemplaza a: Engatusar',
            description:
              'Si <strong>sacas 7 o más cuando parlamentes con alguien</strong> también recibes +1 a la siguiente tirada con tu objetivo, y además puedes hacerle una pregunta que debe responder con sinceridad.',
          },
          {
            title: 'Multiclase Experto',
            hasXMark: false,
            description:
              'Recibes un movimiento de otra clase. Trata tu nivel como si fuera inferior en uno al actual para elegir el movimiento.',
          },
        ],
      },
    ],
  },
};
