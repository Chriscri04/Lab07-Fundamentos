// utils/storage.ts
const FAVORITES_KEY = 'favorite_countries';

export const getFavorites = (): string[] => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const toggleFavorite = (countryName: string): void => {
  const favorites = getFavorites();
  const index = favorites.indexOf(countryName);
  
  if (index > -1) {
    favorites.splice(index, 1); // Quitar si ya existe
  } else {
    favorites.push(countryName); // Agregar si no existe
  }
  
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};