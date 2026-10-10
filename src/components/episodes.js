// Each section is a season and the items inside it are its episodes.
export const pad = (n) => String(n).padStart(2, '0');
export const episodeCode = (i) => `E${pad(i + 1)}`;
