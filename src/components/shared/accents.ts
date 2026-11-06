/** Порядок цветов как в слове KIDS: зелёный, жёлтый, голубой, розовый. */
export const KIDS_ACCENTS = ["accent-green", "accent-yellow", "accent-blue", "accent-pink"] as const;

export const accentAt = (index: number) => KIDS_ACCENTS[index % KIDS_ACCENTS.length];
