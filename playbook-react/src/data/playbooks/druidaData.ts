import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/class-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';

export const druidaData: PlaybookData = {
  meta: { name: 'El Druida', classIcon },

  raceNames: [
    {
      race: 'ELFO',
      names: [
        'Hycorax',
        'Ethanwe',
        'Sinathel',
        'Demanor',
        'Menoliir',
        'Mithralan',
        'Taeros',
        'Aegor',
      ],
    },
    {
      race: 'HUMANO',
      names: [
        'Elana',
        'Obelis',
        'Herran',
        'Syla',
        'Andanna',
        'Siobhan',
        'Aziz',
        'Pelin',
        'Sibel',
        'Nils',
        'Wei',
      ],
    },
    {
      race: 'MEDIANO',
      names: [
        'Tanner',
        'Dunstan',
        'Rose',
        'Ivy',
        'Robard',
        'Mab',
        'Thistle',
        'Puck',
        'Anne',
        'Serah',
      ],
    },
  ],

  appearance: {
    prompt: '<em>Elige una de cada o escribe una propia:</em>',
    fields: [
      { label: 'CUERPO', options: 'Primitivo, exuberante, exótico' },
      { label: 'OJOS', options: 'Sabios, salvajes, acechantes' },
      { label: 'PELO', options: 'Despeinado, trenzado, capucha de piel' },
      { label: 'ROPA', options: 'Atuendo ceremonial, cuero práctico, piel curtida' },
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
    { label: 'Caótico', description: 'Destruir un símbolo de la civilización.' },
    { label: 'Bueno', description: 'Ayudar a crecer a algo o alguien.' },
    { label: 'Neutral', description: 'Eliminar una amenaza no natural.' },
  ],

  bonds: [
    '_______________ huele más a presa que a cazador.',
    'Los espíritus me hablaron del gran peligro que seguía a _______________.',
    'He mostrado a _______________ el ritual secreto de la tierra.',
    '_______________ ha probado mi sangre y yo la suya. Estamos unidos por ella.',
  ],

  moves: [
    {
      title: 'Nacido del Barro',
      hasXMark: true,
      column: 'left',
      description:
        'Has aprendido tu magia en un lugar en el que los espíritus son fuertes y te han marcado como uno de los suyos. No importa dónde vayas, ellos viven en ti y te permiten adoptar su forma. Estás sintonizado con la tierra que elijas y puedes adoptar la forma de cualquier animal que pueda vivir en ese lugar.',
      choiceGroups: [
        {
          heading: 'Elige una de las siguientes tierras:',
          columns: 1,
          items: [
            { label: 'Los Grandes Bosques' },
            { label: 'Las Praderas Susurrantes' },
            { label: 'El Gran Desierto' },
            { label: 'Las Ciénagas Apestosas' },
            { label: 'El Delta del Río' },
            { label: 'Las Profundidades de la Tierra' },
            { label: 'Las Islas Zafiro' },
            { label: 'El Mar Abierto' },
            { label: 'Las Montañas Encumbradas' },
            { label: 'El Norte Helado' },
            { label: 'Los Eriales Condenados' },
          ],
        },
      ],
      postText:
        'Elige un distintivo, un atributo físico que te marque como nacido del barro y que refleje el espíritu de la tierra que has elegido. Puede ser un rasgo animal como cuernos, manchas de leopardo o algo más genérico, como hojas por cabello u ojos brillantes como el cristal. Ese distintivo permanece contigo independientemente de la forma que adoptes.',
    },
    {
      title: 'Esencia Estudiada',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>pases un tiempo en contemplación de un espíritu animal</strong> puedes añadir a dicha especie a aquellas en las que puedes cambiar tu forma.',
    },
    {
      title: 'Alimentado por la Naturaleza',
      hasXMark: true,
      column: 'right',
      description:
        'No necesitas comer o beber. Si un movimiento te dice que marques una ración, ignóralo.',
    },
    {
      title: 'Lengua de los Espíritus',
      hasXMark: true,
      column: 'right',
      description:
        'Los gruñidos, ladridos, trinos y llamadas de las criaturas salvajes son lenguajes para ti. Puedes entender a cualquier animal autóctono de tu tierra (ver el movimiento <em>Nacido del barro</em>) o parecido a aquellos cuya esencia hayas estudiado.',
    },
    {
      title: 'Cambiaformas',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando <strong>invocas a los espíritus para cambiar tu forma</strong>, tira+SAB.',
      detailBullets: [
        'Con un 10+, recibes 3 puntos.',
        'Entre 7 y 9, recibes 2 puntos.',
        'Si fallas, recibes 1 punto, además de acatar lo que elija el DJ.',
      ],
      postText:
        'Puedes adoptar la forma física de una criatura cuya esencia hayas estudiado o que viva en tu tierra: tus posesiones y tú os fundís para crear una copia perfecta de la forma física de esa criatura. Tienes todas las capacidades y debilidades de la nueva forma (garras, alas e incluso branquias para respirar bajo el agua). Sigues usando tus puntuaciones y modificadores de tus características, pero es posible que sea mucho más difícil desencadenar algunos movimientos (a un gato casero le va a costar trabajo combatir contra un ogro, por ejemplo). El DJ te dirá también uno o dos movimientos asociados con tu nueva forma.\n\nGasta 1 punto para hacer ese movimiento. Cuando te quedes sin puntos vuelves a tu forma natural, pero también puedes decidir desprenderte de todos los puntos que te queden y volver a tu forma natural en cualquier momento. Ver la nota <em>Movimientos en forma animal</em> de la página 93.',
    },
  ],

  races: [
    {
      name: 'Elfo',
      description:
        'La savia de los antiguos árboles corre por tus venas. Además del lugar con el que elijas estar sintonizado (ver el movimiento <em>Nacido del barro</em>), se considera que los Grandes Bosques siempre han sido tu tierra natal.',
    },
    {
      name: 'Humano',
      description:
        'Estás ligado a los animales igual que tu gente aprendió a domarlos para trabajar el campo y tenerlos en granjas. Siempre puedes adoptar la forma de cualquier animal domesticado, además de aquellos animales que habitan en las tierras con las que estás en sintonía (ver el movimiento <em>Nacido del barro</em>).',
    },
    {
      name: 'Mediano',
      description:
        'Cantas canciones sanadoras sobre la primavera y los arroyos. Cuando acampas, tus compañeros y tú os curáis 1d6 PG más.',
    },
  ],

  page2: {
    gear: {
      maxLoadBase: 7,
      fixedItems: ['<strong>Algún recuerdo de tu tierra</strong>, descríbelo: ________________'],
      defenseGroup: {
        prompt: '<em>Elige tus defensas:</em>',
        items: [
          {
            text: '<strong>Armadura de pieles</strong> (armadura 1, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Escudo de madera</strong> (+1 armadura, peso 2).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: '<em>Elige tu armamento y un objeto adicional:</em>',
        items: [
          {
            text: '<strong>Mazo de guerra</strong> (cerca, peso 2).',
            checkbox: true,
          },
          {
            text: '<strong>Báculo</strong> (cerca, a dos manos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Lanza</strong> (corto alcance, arrojadiza medio alc, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Hierbas y cataplasmas</strong> (2 usos, cura 7 PG, lento, peso 1), <strong>hierba para pipa de los medianos</strong> (6 usos, peso 0) y <strong>3 antídotos</strong> (peso 0).',
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
            title: 'Hermano del Cazador',
            hasXMark: false,
            column: 'left',
            description: 'Elige un movimiento de la clase del explorador.',
          },
          {
            title: 'Dientes y Garras Rojas',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>adoptes una forma animal apropiada</strong> (una bestia peligrosa, como un oso o un gran felino) aumenta tu daño a d8.',
          },
          {
            title: 'Comunión de Susurros',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>pasas tiempo en un lugar sintiendo a los espíritus que viven en él y apelando a ellos</strong>, tira+SAB. Se te proporcionará una visión relevante para ti, tus compañeros y los espíritus que os rodean.',
            detailBullets: [
              'Con un 10+, la visión será clara y útil para ti.',
              'Entre 7 y 9, la visión es poco clara y su significado turbio.',
              'Si fallas, la visión es desagradable, aterradora o traumatizante; el DJ te la describirá y además recibes -1 a la siguiente tirada.',
            ],
          },
          {
            title: 'Piel de Corteza',
            hasXMark: false,
            column: 'left',
            description: 'Recibes +1 armadura mientras tus pies estén tocando el suelo.',
          },
          {
            title: 'Ojos del Tigre',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>marcas a un animal</strong> (con barro, polvo o sangre) puedes ver a través de sus ojos como si fueran los tuyos propios, sin importar la distancia que os separe. Solo puedes dejar tu marca sobre un animal al mismo tiempo.',
          },
          {
            title: 'Mudar',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>recibes daño mientras estás en un cambio de forma</strong> puedes elegir volver a tu forma natural para no recibir ese daño.',
          },
          {
            title: 'El que Habla con las Cosas',
            hasXMark: false,
            column: 'right',
            description:
              'Puedes ver a los espíritus de las arenas, del agua y de la piedra. Además de a los animales, puedes aplicar los movimientos de <em>Lengua de los espíritus</em>, <em>Cambiaformas</em> y <em>Esencia estudiada</em> a los objetos naturales inanimados (plantas y rocas) o a criaturas hechas a partir de ellas. Las formas adoptadas pueden ser copias idénticas de los originales o tener cierta movilidad, siendo vagamente humanoides.',
          },
          {
            title: 'Creaformas',
            hasXMark: false,
            column: 'right',
            description:
              'Cuando <strong>cambias de forma</strong>, elige una característica: recibes +1 a todas las tiradas usando esa característica hasta que vuelvas a tu forma natural. El DJ elegirá también otra característica: recibes -1 a todas las tiradas con esa característica hasta que vuelvas a tu forma natural.',
          },
          {
            title: 'Maestría Elemental',
            hasXMark: false,
            column: 'right',
            description:
              'Cuando <strong>apelas a los espíritus primarios del agua, la tierra, el fuego o el aire para llevar a cabo una tarea</strong>, tira+SAB.',
            detailBullets: [
              'Con 10+ elige dos de las siguientes opciones.',
              'Entre 7 y 9 elige una de las siguientes opciones.',
              'Si fallas, tiene lugar una catástrofe como resultado de tu petición.',
              'El efecto deseado tiene lugar.',
              'Evitas pagar el precio de la naturaleza.',
              'Tienes el control.',
            ],
          },
          {
            title: 'Equilibrio',
            hasXMark: false,
            column: 'right',
            description:
              'Cuando <strong>haces daño</strong>, recibes 1 punto de equilibrio. Cuando tocas a alguien y canalizas los espíritus de la vida puedes gastar los puntos de equilibrio. Por cada punto de equilibrio que gastes curas 1d4 PG.',
          },
        ],
      },
      {
        instruction:
          '<em>Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.</em>',
        moves: [
          {
            title: 'Entregarse a la Forma',
            hasXMark: false,
            description:
              'Cuando <strong>realices el movimiento de <em>Cambiaformas</em></strong> tira 1d4 y suma el resultado a los puntos recibidos.',
          },
          {
            title: 'Danza del Doppelgänger',
            hasXMark: false,
            description:
              'Puedes estudiar la esencia de individuos concretos para adoptar su forma exacta, incluyendo hombres, elfos y razas similares. Puedes eliminar tu rasgo distintivo, pero si lo haces recibes -1 hasta que vuelvas a tu forma natural.',
          },
          {
            title: 'Sangre y Trueno',
            hasXMark: false,
            relationships: 'Reemplaza a: Dientes y garras rojas',
            description:
              'Cuando <strong>adoptes una forma animal apropiada</strong> (la de uno peligroso) aumenta tu daño a d10.',
          },
          {
            title: 'El Sueño del Druida',
            hasXMark: false,
            description:
              'Una vez que tengas este movimiento, la próxima vez que te encuentres en un entorno seguro y tengas el tiempo suficiente podrás sintonizarte con una nueva tierra. Este efecto tiene lugar una sola vez y el DJ te dirá cuánto tiempo va a llevarte y qué precio tienes que pagar. A partir de ese momento se te considerará nacido del barro en ambos territorios.',
          },
          {
            title: 'Tejedor del Clima',
            hasXMark: false,
            description:
              'Cuando <strong>estás bajo el cielo abierto a la salida del sol</strong>, el DJ te preguntará qué tiempo va a hacer ese día. Dile qué tiempo quieres que haga y acabará pasando.',
          },
          {
            title: 'El que Habla con el Mundo',
            hasXMark: false,
            relationships: 'Requiere: El que habla con las cosas',
            description:
              'Puedes ver los patrones que conforman el tejido del mundo. Ahora puedes aplicar los movimientos de <em>Lengua de los espíritus</em>, <em>Cambiaformas</em> y <em>Esencia estudiada</em> a los elementos en estado puro: tierra, fuego, agua y aire.',
          },
          {
            title: 'Moldeaformas',
            hasXMark: false,
            relationships: 'Requiere: Creaformas',
            description:
              'Puedes aumentar tu armadura en 1 punto o hacer +1d4 de daño adicional mientras estés en forma animal. Elige una de las opciones cuando cambies de forma.',
          },
          {
            title: 'Desconfianza Saludable',
            hasXMark: false,
            description:
              'Cuando <strong>la magia impía tejida por los mortales te obligue a <em>Desafiar el Peligro</em></strong>, trata los resultados de 6 como 7-9.',
          },
          {
            title: 'Quimera',
            hasXMark: false,
            description:
              'Cuando <strong>cambias de forma</strong> puedes crear un cuerpo híbrido a partir de tres formas distintas. Puedes ser un oso con alas de águila y cabeza de carnero, por ejemplo. Cada característica te proporcionará un movimiento diferente. Por lo demás, tu forma de quimera sigue las mismas reglas que la de <em>Cambiaformas</em>.',
          },
          {
            title: 'Hermana del Acechador',
            hasXMark: false,
            description: 'Elige un movimiento de la clase del explorador.',
          },
        ],
      },
    ],
  },
};
