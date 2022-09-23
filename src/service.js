const SERVER_DOMAIN = 'https://632519874cd1a2834c394f69.mockapi.io/api';

export const getColorPalettes = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/color-palettes`);
    return response.json();
  } catch {
    throw new Error('could not fetch color palettes');
  }
};

export const getTags = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/tags`);
    return response.json();
  } catch {
    throw new Error('could not fetch tags');
  }
};