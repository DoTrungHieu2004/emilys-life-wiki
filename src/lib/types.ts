export interface QuickFact {
  label: string;
  value: string;
}

export interface Premise {
  title: string;
  tagline: string;
  logline: string;
  paragraphs: string[];
  quickFacts: QuickFact[];
}

export interface Wing {
  id: string;
  number: string;
  emoji: string;
  title: string;
  description: string;
}

export interface Character {
  id: string;
  name: string;
  alias: string | null;
  emoji: string;
  role: string;
  summary: string;
  traits: string[];
  note?: string;
}

export interface CharacterGroup {
  id: string;
  name: string;
  emoji: string;
  characters: Character[];
}

export interface Wing {
  id: string;
  href: string;
  number: string;
  emoji: string;
  title: string;
  description: string;
}
