// Clamps a value between an upper and lower bound
const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => clamp(((x - a) * (d - c)) / (b - a) + c, Math.min(c, d), Math.max(c, d));

export { map, clamp };
