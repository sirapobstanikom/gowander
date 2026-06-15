const OBJECT_BASE =
  "https://onrojzovngqbtxdpxcaq.supabase.co/storage/v1/object/public/pic"

const RENDER_BASE =
  "https://onrojzovngqbtxdpxcaq.supabase.co/storage/v1/render/image/public/pic"

const FILES = {
  page1: "BG page 1.png",
  page2a: "BG page 2.1.png",
  page2b: "BG page 2.2.png",
}

function objectUrl(filename) {
  return `${OBJECT_BASE}/${encodeURIComponent(filename)}`
}

function renderUrl(filename, width = 2560, quality = 92) {
  return `${RENDER_BASE}/${encodeURIComponent(filename)}?width=${width}&quality=${quality}`
}

export const backgrounds = {
  page1: objectUrl(FILES.page1),
  page2a: objectUrl(FILES.page2a),
  page2b: objectUrl(FILES.page2b),
}

export const pageBackgrounds = {
  home: objectUrl(FILES.page1),
  about: objectUrl(FILES.page2a),
  services: renderUrl(FILES.page2b),
  promotions: renderUrl(FILES.page2a),
  reviews: renderUrl(FILES.page2b),
  contact: renderUrl(FILES.page2a),
}

export const pageBackgroundFallbacks = {
  home: renderUrl(FILES.page1, 3840, 95),
  about: renderUrl(FILES.page2a, 3840, 95),
  services: objectUrl(FILES.page2b),
  promotions: objectUrl(FILES.page2a),
  reviews: objectUrl(FILES.page2b),
  contact: objectUrl(FILES.page2a),
}
