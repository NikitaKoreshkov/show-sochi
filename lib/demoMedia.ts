import type { Lang } from "@/app/lang";

/**
 * Gallery shots bundled with the repository. On the production site every image
 * here lives in the `Setting` rows the admin edits; without a database the
 * carousels and show covers would render as empty placeholders, so these files
 * keep the demo looking like the real venue.
 */
type Shot = { file: string; ru: string; en: string };

const SHOTS: Shot[] = [
  { file: "stage-pena", ru: "Пенное шоу на сцене амфитеатра", en: "Foam show on the amphitheater stage" },
  { file: "foam-venue", ru: "Дети в пене у сцены", en: "Kids in the foam by the stage" },
  { file: "color-stage", ru: "Фестиваль красок под открытым небом", en: "Color festival outdoors" },
  { file: "amphitheater", ru: "Здание амфитеатра на Южном взморье", en: "Amphitheater building at Yuzhnoye Vzmorye" },
  { file: "foam-family", ru: "Семья в пенном шоу", en: "Family in the foam show" },
  { file: "masterclass-chef", ru: "Юный шеф на кулинарном мастер-классе", en: "Young chef at the culinary master class" },
  { file: "cotton-candy", ru: "Девочка со сладкой ватой", en: "Girl with cotton candy" },
  { file: "cinema-boy", ru: "Мальчик в 3D-очках в открытом кинотеатре", en: "Boy in 3D glasses at the open-air cinema" },
  { file: "cinema-couple", ru: "Пара с попкорном в кинотеатре", en: "Couple with popcorn at the cinema" },
  { file: "mascot-kids", ru: "Ростовая кукла и дети у сцены", en: "Mascot and kids by the stage" },
  { file: "lego-table", ru: "Детская зона с конструктором", en: "Kids area with building bricks" },
  { file: "foam-party", ru: "Взрослые на пенной вечеринке", en: "Adults at the foam party" },
  { file: "color-festival", ru: "Участники фестиваля красок", en: "Color festival participants" },
  { file: "food-flatlay", ru: "Продукты для мастер-класса", en: "Ingredients for the master class" },
  { file: "vr-booth", ru: "Зона виртуальной реальности", en: "Virtual reality area" },
  { file: "foam-portrait", ru: "Семья в облаке пены", en: "Family in a cloud of foam" },
  { file: "sochi-beach", ru: "Сочинский берег на закате", en: "Sochi shore at sunset" },
  { file: "entrance-gate", ru: "Вход на территорию амфитеатра", en: "Entrance to the amphitheater grounds" },
  { file: "poster-showsochi", ru: "Афиша ШоуСочи", en: "Show Sochi poster" },
];

const src = (file: string) => `/uploads/demo/${file}.jpg`;

export function demoGallery(lang: Lang): { src: string; alt: string }[] {
  return SHOTS.map((s) => ({ src: src(s.file), alt: lang === "ru" ? s.ru : s.en }));
}

/** Cards on `/` keep their own titles, only the photos come from here. */
export const demoEventImages: Record<"master" | "upi" | "cinema", string> = {
  master: src("masterclass-chef"),
  upi: src("stage-pena"),
  cinema: src("cinema-boy"),
};

export const demoShowCovers: Record<"master" | "upi" | "cinema", string> = {
  master: src("lego-table"),
  upi: src("foam-venue"),
  cinema: src("cinema-couple"),
};
