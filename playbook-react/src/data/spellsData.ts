export interface Spell {
  title: string;
  /** Subtítulo bajo el título: "Plegaria", "Nivel 1", "Nivel 3 (mantenido)", etc. */
  levelLabel: string;
  /** Descripción rica (admite HTML básico y guiones bajos para líneas de relleno). */
  description: string;
  /** Lista de viñetas bajo la descripción. */
  detailBullets?: string[];
  /** Texto adicional tras las viñetas/descripción (admite HTML y guiones bajos
   *  convertidos a líneas de relleno). Útil para campos como Nombre/Esferas/Precepto. */
  postText?: string;
}

export interface SpellSection {
  /** Texto de la cabecera de sección. */
  header: string;
  /** Subtexto opcional bajo la cabecera. */
  subtext?: string;
  /** Slot especial a la derecha de la cabecera (p. ej. nivel de conjurador divino). */
  headerRight?: 'casterLevel';
  /** Cuando true, las casillas de los elementos de esta sección muestran una ✕
   *  (típicamente la sección "Movimientos"). */
  markX?: boolean;
  /** Conjuros agrupados en columnas (cada columna es una lista vertical). */
  columns: Spell[][];
}

export interface SpellSheetData {
  /** Etiqueta del banner vertical, p. ej. "Conjuros de Clérigo". */
  bannerLabel: string;
  /** Secciones de la página 1. */
  page1: SpellSection[];
  /** Secciones de la página 2. */
  page2: SpellSection[];
}