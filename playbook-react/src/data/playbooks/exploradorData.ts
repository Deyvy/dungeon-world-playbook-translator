import type { PlaybookData } from '../playbookData';
import classIcon from '../../assets/icons/explorador-icon.png';
import { CONSUMABLE_ROWS } from '../consumables';

export const exploradorData: PlaybookData = {
  meta: { name: 'El Explorador', classIcon },

  raceNames: [
    {
      race: 'ELFO',
      names: ['Thrandir', 'Elrosine', 'Aranwe', 'Celion', 'Dambrath', 'Lanethe'],
    },
    {
      race: 'HUMANO',
      names: ['Jonah', 'Halek', 'Brandon', 'Emory', 'Shrike', 'Nora', 'Diana'],
    },
  ],

  appearance: {
    prompt: '<em>Elige una de cada o escribe una propia:</em>',
    fields: [
      { label: 'CUERPO', options: 'Ágil, salvaje, fuerte' },
      { label: 'OJOS', options: 'Indómitos, penetrantes, animales' },
      { label: 'PELO', options: 'Revuelto, calvo, cubierto por una capucha' },
      { label: 'ROPA', options: 'Capa, ropa de camuflaje, ropa de viaje' },
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
  damageDie: 'd8',

  alignment: [
    { label: 'Bueno', description: 'Ponerte en peligro para combatir una amenaza no natural.' },
    { label: 'Neutral', description: 'Ayudar a un animal o espíritu de la naturaleza.' },
    { label: 'Caótico', description: 'Liberar a alguien de sus ataduras, reales o figuradas.' },
  ],

  bonds: [
    'He guiado anteriormente a _______________ y me debe una por ello.',
    '_______________ es un amigo de la naturaleza, así que seré amigo suyo.',
    '_______________ no respeta la naturaleza, así que tampoco le respeto a él/ ella.',
    '_______________ no comprende la vida en el entorno natural, yo le enseñaré.',
  ],

  moves: [
    {
      title: 'Compañero Animal',
      hasXMark: true,
      span: 'full',
      splitColumnAt: 1,
      description:
        'Tienes una conexión sobrenatural con un animal leal a ti. Aunque no puedes hablar con él, siempre hace lo que quieres. Ponle nombre a tu compañero animal: ____________',
      subtext:
        '<em>Elige su especie:</em> Lobo, pantera, oso, águila, perro, halcón, gato, búho, paloma, rata, mula, ____________',
      choiceGroups: [
        {
          heading: '<em>Elige una base:</em>',
          columns: 1,
          items: [
            { label: 'Ferocidad +2, Astucia +1, Armadura 1, Instinto +1' },
            { label: 'Ferocidad +2, Astucia +2, Armadura 0, Instinto +1' },
            { label: 'Ferocidad +1, Astucia +2, Armadura 1, Instinto +1' },
            { label: 'Ferocidad +3, Astucia +1, Armadura 1, Instinto +2' },
          ],
        },
      ],
      postText:
        '<em>Elige tantas fortalezas como su Ferocidad:</em> Rápido, fuerte, enorme, tranquilo, adaptable, reflejos rápidos, infatigable, camuflaje, feroz, intimidante, sentidos agudos, sigiloso, ____________\n\n<em>Tu compañero animal está entrenado para luchar contra criaturas con forma humanoide. Elige tantos entrenamientos adicionales como su Astucia:</em>\n\nCazar, buscar, explorar, custodiar, luchar contra monstruos, actuar, viajar, hacer pequeñas tareas, ____________\n\n<em>Elige tantas debilidades como su Instinto:</em>\n\nVoluble, salvaje, lento, delicado, asustadizo, olvidadizo, terco, débil, ____________',
    },
    {
      title: 'Rastrear y Cazar',
      hasXMark: true,
      column: 'left',
      description:
        'Cuando <strong>sigues el rastro de pistas dejado por una criatura</strong>, tira+SAB. • Con un 7+, sigues el rastro de la criatura hasta que haya un cambio significativo en su dirección o su manera de viajar. • Con un 10+, también puedes elegir 1 de las siguientes opciones:',
      detailBullets: [
        'Obtienes un dato importante sobre tu presa. El DJ te dirá de qué se trata.',
        'Determinas el motivo que provocó la desaparición del rastro.',
      ],
    },
    {
      title: 'Disparo Certero',
      hasXMark: true,
      column: 'right',
      description:
        'Cuando <strong>atacas a distancia a un enemigo indefenso o sorprendido</strong> puedes elegir entre hacer tu daño o decir dónde estás apuntando y tirar+DES.',
      detailBullets: [
        '<strong>Cabeza</strong> • 10+: Como 7–9, mas tu daño.<br>• 7–9: No hace nada salvo quedarse quieto y embobado durante unos instantes.',
        '<strong>Brazos</strong> • 10+: Como 7–9, mas tu daño.<br>• 7–9: Deja caer lo que estuviera sosteniendo.',
        '<strong>Piernas</strong> • 10+: Como 7–9, mas tu daño.<br>• 7–9: Cojea y se mueve despacio.',
      ],
    },
  ],

  races: [
    {
      name: 'Elfo',
      description:
        'Cuando <strong>hagas el movimiento de <em>Realizar un viaje peligroso</em> a través de las tierras salvajes,</strong> tienes éxito en la tarea que se te encomiende como si hubieras sacado un 10+.',
    },
    {
      name: 'Humano',
      description:
        'Cuando <strong>hagas el movimiento de <em>Acampar en una mazmorra o ciudad</em></strong> no necesitas consumir una ración.',
    },
  ],

  extraMove: {
    title: 'Ordenar',
    hasXMark: true,
    description: 'Cuando <strong>haces algo en lo que está entrenado tu compañero animal</strong>...',
    detailBullets: [
      'y atacáis al mismo objetivo, <strong>añade su Ferocidad</strong> a tu <strong>daño.</strong>',
      'y seguís un rastro, <strong>añade su Astucia</strong> a tu <strong>tirada.</strong>',
      'y recibes daño, <strong>suma su armadura</strong> a la <strong>tuya.</strong>',
      '<em>y disciernes la realidad,</em> <strong>añade su Astucia</strong> a tu <strong>tirada.</strong>',
      '<em>y parlamentas,</em> <strong>añade su Astucia</strong> a tu <strong>tirada.</strong>',
      '<em>y alguien interfiere contigo,</em> <strong>añade su Instinto</strong> a tu <strong>tirada.</strong>',
    ],
  },

  page2: {
    gear: {
      maxLoadBase: 11,
      fixedItems: [
        '<strong>Armadura de cuero</strong> (armadura 1, peso 1).',
        '<strong>Raciones de viaje</strong> (5 usos, peso 1).',
      ],
      defenseGroup: {
        prompt: '<em>Elige tu armamento:</em>',
        items: [
          {
            text: '<strong>Arco de cazador</strong> (medio y largo alcance, peso 1). <strong>Espada corta</strong> (cerca, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Arco de cazador</strong> (medio y largo alcance, peso 1). <strong>Lanza</strong> (corto y medio alcance, arrojadiza, peso 1).',
            checkbox: true,
          },
        ],
      },
      pickTwoGroup: {
        prompt: '<em>Elige uno:</em>',
        items: [
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1). <strong>Raciones de viaje</strong> (5 usos, peso 1).',
            checkbox: true,
          },
          {
            text: '<strong>Equipo de aventurero</strong> (5 usos, peso 1). <strong>Fajo de flechas</strong> (munición 3, peso 1).',
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
            title: 'Semielfo',
            hasXMark: false,
            column: 'left',
            description:
              'Tu linaje se mezcló en algún momento y empieza a notarse. Obtienes el movimiento inicial de elfo si elegiste raza humana al crear el personaje o el de humano si elegiste elfo. <strong>Puedes escoger este movimiento solo durante tu primer avance.</strong>',
          },
          {
            title: 'Empatía Animal',
            hasXMark: false,
            column: 'left',
            description: 'Puedes hablar con los animales y entenderlos.',
          },
          {
            title: 'Una Presa Familiar',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>exhibes conocimientos acerca de un monstruo</strong>, tira+SAB en lugar de +INT.',
          },
          {
            title: 'Ataque de la Víbora',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>golpeas a un enemigo con dos armas al mismo tiempo</strong>, añade 1d4 de daño adicional por el ataque con la otra mano.',
          },
          {
            title: 'Camuflaje',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>te mantienes en silencio en un entorno natural</strong>, los enemigos no pueden verte hasta que te muevas.',
          },
          {
            title: 'El Mejor Amigo del Hombre',
            hasXMark: false,
            column: 'left',
            description:
              'Cuando <strong>permites que tu compañero animal reciba un golpe que iba dirigido a ti</strong>, el daño no te afecta y la Ferocidad de tu compañero animal baja a 0. Si su Ferocidad ya es 0, no puedes usar esta capacidad. Su Ferocidad volverá al valor normal cuando dispongas de unas cuantas horas de descanso junto a tu compañero animal.',
          },
          {
            title: 'Nublar el Sol',
            hasXMark: false,
            column: 'left',
            description:
              'Puedes gastar munición adicional antes de tirar los dados con <em>Disparar</em>. Por cada punto de munición que gastes puedes elegir un objetivo adicional. Tira una vez y aplica el daño a todos los objetivos.',
          },
          {
            title: 'Bien Entrenado',
            hasXMark: false,
            column: 'right',
            description: 'Elige otro entrenamiento para tu compañero animal.',
          },
          {
            title: 'Dios en los Páramos',
            hasXMark: false,
            column: 'right',
            description:
              'Conságrate a una deidad (pon nombre a una nueva o elige una cuya existencia ya haya sido establecida). Obtienes los movimientos de <em>Comunión</em> y <em>Lanzar conjuros</em> del clérigo. Cuando elijas este movimiento, considérate un clérigo de nivel 1 para utilizar conjuros. Cada vez que ganes un nivel, aumenta tu nivel efectivo de clérigo en 1.',
            detailBullets: [
              '<strong>Deidad:</strong> _______________',
              '<strong>Dominio:</strong> _______________',
              '<strong>Precepto:</strong> _______________',
            ],
          },
          {
            title: 'Seguidme',
            hasXMark: false,
            column: 'right',
            description:
              'Cuando <strong>realices un <em>viaje peligroso</em></strong>, puedes asumir dos tareas. Haz tiradas separadas para cada una de ellas.',
          },
          {
            title: 'Un Lugar Seguro',
            hasXMark: false,
            column: 'right',
            description:
              'Cuando <strong>organizas las guardias nocturnas</strong>, todo el mundo recibe un +1 para <em>Hacer guardia</em>.',
          },
        ],
      },
      {
        instruction:
          '<em>Cuando subas a un nivel entre 6 y 10, elige uno de los siguientes movimientos o de los anteriores.</em>',
        moves: [
          {
            title: 'Lengua Salvaje',
            hasXMark: false,
            relationships: 'Reemplaza a: Empatía animal',
            description:
              'Puedes hablar y entender a cualquier criatura, siempre que no sea mágica ni extraplanar.',
          },
          {
            title: 'La Presa del Cazador',
            hasXMark: false,
            relationships: 'Reemplaza a: Una presa familiar',
            description:
              'Cuando <strong>exhibes conocimiento acerca de un monstruo</strong>, tira+SAB en lugar de +INT. Con un 12+, además de los efectos normales, puedes hacerle al DJ cualquier pregunta sobre ese monstruo.',
          },
          {
            title: 'Colmillos de la Víbora',
            hasXMark: false,
            relationships: 'Reemplaza a: Ataque de la víbora',
            description:
              'Cuando <strong>golpeas a un enemigo con dos armas al mismo tiempo</strong>, añade 1d8 de daño adicional por el ataque con la otra mano.',
          },
          {
            title: 'La Tripa de Smaug',
            hasXMark: false,
            description:
              'Cuando <strong>conoces el punto más débil de tu objetivo</strong> se considera que tus flechas poseen penetrante 2.',
          },
          {
            title: 'Montaraz',
            hasXMark: false,
            relationships: 'Reemplaza a: Seguidme',
            description:
              'Cuando <strong>realices un <em>viaje peligroso</em></strong> puedes asumir dos tareas. Tira dos veces y usa el mejor resultado para ambas tareas.',
          },
          {
            title: 'Un Lugar Más Seguro',
            hasXMark: false,
            relationships: 'Reemplaza a: Un lugar seguro',
            description:
              'Cuando <strong>organizas las guardias nocturnas</strong> todo el mundo recibe un +1 para <em>Hacer guardia</em>. Después de una noche acampando en la que tú hayas organizado las guardias nocturnas, todo el mundo recibe +1 a la siguiente tirada.',
          },
          {
            title: 'Observador',
            hasXMark: false,
            description:
              'Si tienes éxito al hacer el movimiento de <em>Rastrear y cazar</em> puedes hacer gratuitamente una pregunta de la lista del movimiento <em>Discernir la realidad</em> para saber algo sobre la criatura a la que estás rastreando.',
          },
          {
            title: 'Truco Especial',
            hasXMark: false,
            description:
              'Elige un movimiento de otra clase. Tendrás acceso a ese movimiento mientras actúes junto a tu compañero animal.',
          },
          {
            title: 'Aliado No Natural',
            hasXMark: false,
            description:
              'Tu compañero animal es un monstruo, no un animal. Descríbelo. Dale +2 a Ferocidad y +1 a Instinto y dótalo de un nuevo entrenamiento.',
          },
        ],
      },
    ],
  },
};