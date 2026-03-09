const FAVORITES_KEY = 'country-explorer-favorites';

/** Obtiene la lista de IDs de países favoritos guardados */
export function getFavorites(): string[] {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

/** Guarda o elimina un país de la lista de favoritos */
export function toggleFavorite(countryId: string): void {
  const favorites = getFavorites();
  const index = favorites.indexOf(countryId);

  if (index === -1) {
    favorites.push(countryId);
  } else {
    favorites.splice(index, 1);
  }

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/** Verifica si un país es favorito */
export function isFavorite(countryId: string): boolean {
  return getFavorites().includes(countryId);
}