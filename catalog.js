/* ============================================================
   ALTURIX CANARIAS — DATOS DEL CATÁLOGO (trilingüe ES / IT / EN)
   ------------------------------------------------------------
   Copia de respaldo. El catálogo REAL se gestiona ONLINE desde
   el panel de administración:   tudominio/admin/
   La web muestra catalog.json (publicado por el panel); este
   archivo solo se usa como respaldo al abrir el sitio en local
   (file://). No hace falta editarlo a mano.
   ============================================================ */
window.ALTURIX_CATALOG = {
  "updated": "2026-08-31",
  "categories": [
    { "id": "lineas-vida", "icon": "", "label": { "es": "Líneas de vida",           "it": "Linee vita",  "en": "Lifelines" } },
    { "id": "anclajes",    "icon": "", "label": { "es": "Anclajes",                 "it": "Ancoraggi",   "en": "Anchors" } },
    { "id": "epi",         "icon": "", "label": { "es": "EPI / DPI",                "it": "DPI",         "en": "PPE" } },
    { "id": "parapetos",   "icon": "", "label": { "es": "Barandillas y parapetos",  "it": "Parapetti",   "en": "Railings" } },
    { "id": "cubiertas",   "icon": "", "label": { "es": "Cubiertas",                "it": "Coperture",   "en": "Roofing" } }
  ],
  "products": [
    { "id": "p1", "category": "lineas-vida", "image": "", "price": "", "available": true,
      "name": { "es": "Producto de ejemplo 1", "it": "Prodotto di esempio 1", "en": "Sample product 1" },
      "desc": { "es": "Descripción breve del producto. Edítalo desde el panel /admin/.",
                "it": "Breve descrizione del prodotto. Modificalo dal pannello /admin/.",
                "en": "Short product description. Edit it from the /admin/ panel." } },
    { "id": "p2", "category": "anclajes", "image": "", "price": "", "available": true,
      "name": { "es": "Producto de ejemplo 2", "it": "Prodotto di esempio 2", "en": "Sample product 2" },
      "desc": { "es": "Descripción breve del producto. Edítalo desde el panel /admin/.",
                "it": "Breve descrizione del prodotto. Modificalo dal pannello /admin/.",
                "en": "Short product description. Edit it from the /admin/ panel." } },
    { "id": "p3", "category": "epi", "image": "", "price": "", "available": true,
      "name": { "es": "Producto de ejemplo 3", "it": "Prodotto di esempio 3", "en": "Sample product 3" },
      "desc": { "es": "Descripción breve del producto. Edítalo desde el panel /admin/.",
                "it": "Breve descrizione del prodotto. Modificalo dal pannello /admin/.",
                "en": "Short product description. Edit it from the /admin/ panel." } }
  ]
};
