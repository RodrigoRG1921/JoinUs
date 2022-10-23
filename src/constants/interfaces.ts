interface ICategory {
  imageUri: string;
  title: string;
  key: string;
}

interface IPreference {
  title: string;
  key: string;
}

interface IRestaurant {
  name: string
  address: string
  imageUri: string
  rating: string
  schedule: string
  priceRange: string
  coords: string
  tags: string
  category: string
}

export type {
  ICategory,
  IPreference,
  IRestaurant
}
