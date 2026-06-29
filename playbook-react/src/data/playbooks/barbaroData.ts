import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/barbaro-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';

export const barbaroData: PlaybookData = {
  meta: { name: 'El Bárbaro', classIcon },

  raceNames: [
    {
      race: 'ELFO',
      names: ['Elobiir', 'Sharaseth', 'Hasrith', 'Shevaral', 'Cadeus', 'Eldar', 'Kithracet', 'Thelian'],
    },
    {
      race: 'ENANO',
      names: ['Ozruk', 'Surtur', 'Brunhilda', 'Annika', 'Janos', 'Greta', 'Dim', 'Rundrig', 'Jari', 'Xotoq'],
    },
    {
      race: 'MEDIANO',
      names: ['Finnegan', 'Olive', 'Randolph', 'Bartleby', 'Aubrey', 'Baldwin', 'Becca'],
    },
    {
      race: 'HUMANO',
      names: ['Hawke', 'Rudiger', 'Gregor', 'Brianne', 'Walton', 'Castor', 'Shanna', 'Ajax', 'Hob'],
    },
  ],

  appearance: {
    prompt: 'Elige una de cada o escribe una propia:',
    fields: [
      { label: 'CUERPO', options: 'Musculoso, piernas largas, flaco, ágil' },
      { label: 'OJOS', options: 'Atormentados, poseídos, salvajes, apagados' },
      { label: 'PELO', options: 'Largo y descuidado, rapado, exótico' },
      { label: 'DECORACIÓN', options: 'Tatuajes, joyas, sin marcas' },
      { label: 'ROPA', options: 'Hecha jirones, de seda, desarrapado, inapropiada para el clima' },
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

  hpBase: 12,
  damageDie: 'd10',

  alignment: [
    { label: 'Caótico', description: 'Romper una convención del mundo civilizado.' },
    { label: 'Neutral', description: 'Enséñale a alguien las costumbres de tu gente.' },
  ],

  bonds: [
    '_______________ es débil e ingenuo/a, pero me divierte.',
    'Las costumbres de _______________ son extrañas y confusas.',
    '_______________ siempre se está metiendo en problemas. Tengo que protegerlo/la de sí mismo/a.',
    '_______________ comparte mi sed de gloria, ¡la tierra temblará a nuestro paso!',
  ],

  moves: [
    {
      title: '',
      hasXMark: false,
      column: 'left',
      relationships: 'Elige uno de los siguientes para empezar:',
    },
    {
      title: '¡Blindado y Listo para Partir!',
      hasXMark: false,
      column: 'left',
      description:
        'Ignora la etiqueta <em>incómoda</em> de la armadura que llevas.',
    },
    {
      title: 'Sin Carga, sin Daño',
      hasXMark: false,
      column: 'left',
      description:
        'Mientras estés por debajo de tu Carga y no lleves ni armadura ni escudo, recibes +1 armadura.',
    },
    {
      title: '',
      hasXMark: false,
      column: 'left',
      relationships: 'También empiezas con estos movimientos:',
    },
    {
      title: 'Llevar la Delantera',
      hasXMark: true,
      column: 'left',
      description:
        'Recibes +1 en adelante a las tiradas de <em>Último aliento</em>. Cuando <strong>expiras tu último aliento</strong>, con 7-9 le haces una oferta a la Muerte a cambio de tu vida. Si la Muerte acepta, te devolverá a la vida. Si no, mueres.',
    },
    {
      title: '¿A Qué Estás Esperando?',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>gritas un desafío a tus enemigos</strong>, tira+CON.',
      detailBullets: [
        'Con 10+ te tratan como a la amenaza más obvia a la que se tienen que enfrentar e ignoran a tus compañeros, recibes daño +2 en adelante contra ellos.',
        'Con 7-9 solo unos pocos (los más débiles o imprudentes de ellos) caen presas de tu provocación.',
      ],
    },
    {
      title: 'Apetitos Hercúleos',
      hasXMark: true,
      column: 'right',
      description:
        'Puede que otros se contenten con el sabor del vino o con dominar un sirviente o dos, pero tú quieres más. Elige dos apetitos. <strong>Cuando persigues uno de tus apetitos</strong>, si vas a tirar para hacer un movimiento, en lugar de tirar 2d6 tira 1d6+1d8. Si el d6 tiene el resultado más alto de los dos, el DJ también introducirá una complicación o un peligro que sucede debido a tu descuidada búsqueda.',
      choiceGroups: [
        {
          heading: '',
          columns: 2,
          items: [
            { label: 'Pura destrucción' },
            { label: 'Poder sobre los otros' },
            { label: 'Placeres mortales' },
            { label: 'Conquista' },
            { label: 'Riquezas y posesiones' },
            { label: 'Fama y gloria' },
          ],
        },
      ],
    },
    {
      title: 'Músculos',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando <strong>empuñas un arma</strong>, esta recibe las etiquetas <em>contundente</em> y <em>escabrosa</em>.',
    },
  ],

  races: [
    {
      name: 'Extranjero',
      description:
        'Puedes ser elfo, enano, mediano o humano, pero tu gente y tú no sois de por aquí. Al principio de cada sesión, el DJ te preguntará algo sobre tu hogar natal, por qué te marchaste o qué dejaste atrás. Si le respondes, anota PX.',
      footerLabel: 'Respuestas:',
      footerLines: 10,
    },
  ],

  hideRaceExtra: true,

  page2: {
    gear: {
      maxLoadBase: 8,
      fixedItems: [
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
        '<strong>Daga</strong> (toque, peso 1).',
        'Algún <strong>símbolo</strong> de donde hayas viajado o de donde provienes: <span style="display:inline-block;min-width:120px;border-bottom:1px solid #6c6e70;opacity:0.6;height:1em;"></span>',
      ],
      defenseGroup: {
        prompt: 'Elige tu arma:',
        items: [
          {
            text: '<strong>Hacha</strong> (cerca, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Montante</strong> (corto alcance, +1 daño, peso 2).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: 'Elige uno:',
        items: [
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1).<br><strong>Raciones de viaje</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Cota de malla</strong> (armadura 1, peso 1).',
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
          'Cuando subas a un nivel entre 2 y 5, elige uno de los siguientes movimientos.',
        moves: [
          {
            title: 'Aún Hambriento',
            hasXMark: false,
            description: 'Elige un <em>apetito</em> adicional.',
          },
          {
            title: 'Apetito por la Destrucción',
            hasXMark: false,
            description:
              'Elige un movimiento del Guerrero, del Bardo o del Ladrón. No puedes elegir movimientos multiclase de estas clases.',
          },
          {
            title: 'Mi Amor por ti es como un Camión',
            hasXMark: false,
            description:
              'Cuando <strong>realizas una hazaña demostrando tu fortaleza</strong>, nombra a quiénes de los presentes has impresionado y recibe +1 a la siguiente tirada para <em>Parlamentar</em> con ellos.',
          },
          {
            title: '¿Qué es lo Mejor de la Vida?',
            hasXMark: false,
            description:
              'Si durante la sesión de juego has aplastado a tus enemigos, les has visto destrozados y has oído el lamento de su gente, al final de la misma recibes PX.',
          },
          {
            title: 'Trotamundos',
            hasXMark: false,
            description:
              'Has viajado por todo el mundo. Cuando <strong>llegas a algún lugar</strong>, pregunta al DJ sobre cualquier tradición, ritual y demás que sea importante. Él te dirá lo que necesitas saber.',
          },
          {
            title: 'Usurpador',
            hasXMark: false,
            description:
              'Cuando <strong>demuestras que eres superior a una persona en poder</strong>, recibes +1 a la siguiente tirada con sus seguidores, subalternos y gorrones.',
          },
          {
            title: 'Khan de Khanes',
            hasXMark: false,
            description:
              'Tus secuaces siempre aceptan la gratificante satisfacción de uno de tus <em>apetitos</em> como pago.',
          },
          {
            title: 'Sansón',
            hasXMark: false,
            description:
              'Puedes recibir una <em>debilidad</em> para liberarte inmediatamente de cualquier limitación física o mental.',
          },
          {
            title: '¡Aplastar!',
            hasXMark: false,
            description:
              'Cuando <strong>realizas el movimiento <em>Saja-Raja</em></strong> y obtienes 12+, inflige tu daño y elige algo físico que tiene tu objetivo (ej: un arma). Tu objetivo lo perderá.',
          },
          {
            title: 'Hambre Indestructible',
            hasXMark: false,
            description:
              'Cuando <strong>recibes <em>daño</em></strong> puedes elegir recibir -1 en adelante hasta que sacies uno de tus apetitos en lugar de recibir daño. Si ya tienes esta penalización, no puedes elegir esta opción.',
          },
          {
            title: 'Ojo para las Debilidades',
            hasXMark: false,
            description:
              'Cuando <strong>disciernas la realidad</strong>, añade: «¿Qué es débil o vulnerable aquí?» a la lista de preguntas que puedes hacer.',
          },
          {
            title: 'En Contínuo Movimiento',
            hasXMark: false,
            description:
              'Cuando <strong>desafíes un peligro causado por el movimiento</strong> (quizás caerse de un puente estrecho o arremeter contra un guardia armado), recibes +1.',
          },
        ],
      },
      {
        instruction:
          'Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.',
        moves: [
          {
            title: 'Un Buen Día para Morir',
            hasXMark: false,
            description:
              'Siempre y cuando <strong>tengas un valor menor a tu CON en tus PG actuales</strong> (o 1, lo que sea mayor), recibes +1 en adelante.',
          },
          {
            title: 'Mátalos a Todos',
            hasXMark: false,
            relationships: 'Requiere: Apetito por la destrucción',
            description:
              'Elige otro movimiento del Guerrero, del Bardo o del Ladrón. No puedes elegir movimientos multiclase de estas clases.',
          },
          {
            title: 'Grito de Guerra',
            hasXMark: false,
            description:
              'Cuando <strong>entras en una batalla con una demostración de fuerza</strong>, tira+CAR. • <strong>Con 10+</strong> elige las dos opciones, • <strong>con 7-9</strong> elige una de las opciones: • Tus aliados se reagrupan y reciben +1 a la siguiente tirada. • Tus enemigos sienten miedo y actúan de acuerdo a ello (te evitan, se esconden, atacan con el miedo que les empuja a huir).',
          },
          {
            title: 'Marca de Poder',
            hasXMark: false,
            description:
              'Cuando elijas este movimiento y <strong>pases un tiempo ininterrumpido reflexionando sobre tus glorias pasadas</strong>, <strong>puedes marcarte a ti mismo</strong> con un símbolo de tu poder (una trenza larga atada con cascabeles, cicatrices o tatuajes rituales, etc.). Cualquier criatura mortal inteligente que vea este símbolo sabe instintivamente que eres una fuerza que hay que tener en cuenta y te trata adecuadamente.',
          },
          {
            title: '¡Más! ¡Siempre más!',
            hasXMark: false,
            description:
              'Cuando <strong>satisfaces un apetito hasta el extremo</strong> (destruir algo único y valioso, ganar muchísima fama, riquezas, poder, etc.) puedes elegir resolverlo. Táchalo y apunta PX. Aunque puedes volver a perseguir ese apetito de nuevo, no vuelves a sentir el deseo ardiente una vez que lo sacies. En su lugar, elige un nuevo apetito de la lista o escribe uno propio.',
          },
          {
            title: 'Yo Soy el Tío que Llama',
            hasXMark: false,
            description:
              'Cuando <strong>desafías el peligro</strong>, con 12+ vuelves el peligro contra él mismo, el DJ describirá cómo.',
          },
          {
            title: 'Desconfianza Sana',
            hasXMark: false,
            description:
              'En cualquier momento que la magia impura convocada por hombres mortales te haga <strong><em>desafiar el peligro</em></strong>, considera cualquier resultado de 6- como si fuera 7-9.',
          },
          {
            title: 'Por el Dios de la Sangre',
            hasXMark: false,
            description:
              'Eres un iniciado en las antiguas costumbres, las del sacrificio. Elige algo que tus dioses (o tus espíritus ancestros o tótems, etc.) valoren: oro, sangre, huesos o similares. Cuando <strong>sacrificas estas cosas según tus ritos y rituales</strong>, tira+SAB. • <strong>Con 10+,</strong> el DJ te proporcionará conocimiento sobre tu problema actual o una bonificación para ayudarte. • <strong>Con 7-9,</strong> el sacrificio no es suficiente y tus dioses también se llevan tu carne, pero te siguen concediendo algo de conocimiento o una bonificación. Si fallas, la cólera de los caprichosos espíritus cae sobre ti.',
          },
        ],
      },
    ],
  },
};
