export interface FoodItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface CountryData {
  name: string;
  slug: string;
  heroImageUrl: string;
  flagImageUrl: string;
  general: {
    capital: string;
    population: string;
    area: string;
    continent: string;
    languages: string[];
    currency: string;
  };
  culture: {
    historyIntro: string;
    customs: string;
  };
  foods: FoodItem[];
  attractions: Attraction[];
  // Añadir más campos según sea necesario para otras secciones
}
