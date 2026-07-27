export interface Station {
  slug: string;
  name: string;
  region: string;
  elevation: number;
  description: string;
  dailyRange: number;
}

export interface Reading {
  hour: number;
  temperature: number;
}
