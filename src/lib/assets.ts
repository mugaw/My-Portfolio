/**
 * Resolves the correct path for local assets, accounting for the Vite base path.
 * Should be used for any local image or asset path that starts with a slash.
 */
export const getAssetPath = (path: string): string => {
  if (!path) return '';
  
  // External URLs don't need the base path
  if (path.startsWith('http')) return path;
  
  // Ensure we don't have double slashes
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${baseUrl}${cleanPath}`;
};
