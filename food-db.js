const foodDatabase = {
  // Karbohidrat
  "nasi putih": { kalori: 130, porsi: "100 gram", protein: 2.7, lemak: 0.3, karbohidrat: 28.2 },
  "nasi merah": { kalori: 111, porsi: "100 gram", protein: 2.6, lemak: 0.9, karbohidrat: 23 },
  "roti tawar": { kalori: 265, porsi: "100 gram", protein: 9, lemak: 3.2, karbohidrat: 49 },
  "mie instan": { kalori: 380, porsi: "1 bungkus (80g)", protein: 8, lemak: 14, karbohidrat: 54 },
  "kentang rebus": { kalori: 86, porsi: "100 gram", protein: 1.7, lemak: 0.1, karbohidrat: 20 },

  // Protein Hewani
  "ayam panggang tanpa kulit": { kalori: 165, porsi: "100 gram", protein: 31, lemak: 3.6, karbohidrat: 0 },
  "daging sapi tanpa lemak": { kalori: 250, porsi: "100 gram", protein: 26, lemak: 15, karbohidrat: 0 },
  "ikan salmon": { kalori: 208, porsi: "100 gram", protein: 20, lemak: 13, karbohidrat: 0 },
  "telur rebus": { kalori: 155, porsi: "2 butir (100g)", protein: 13, lemak: 11, karbohidrat: 1.1 },
  "tahu": { kalori: 76, porsi: "100 gram", protein: 8, lemak: 4.8, karbohidrat: 1.9 },

  // Sayuran
  "brokoli rebus": { kalori: 35, porsi: "100 gram", protein: 2.4, lemak: 0.4, karbohidrat: 7.2 },
  "wortel rebus": { kalori: 41, porsi: "100 gram", protein: 0.8, lemak: 0.2, karbohidrat: 9.6 },
  "bayam rebus": { kalori: 23, porsi: "100 gram", protein: 2.9, lemak: 0.4, karbohidrat: 3.6 },

  // Buah-buahan
  "apel": { kalori: 52, porsi: "1 buah sedang (182g)", protein: 0.3, lemak: 0.2, karbohidrat: 14 },
  "pisang": { kalori: 89, porsi: "1 buah (118g)", protein: 1.1, lemak: 0.3, karbohidrat: 22.8 },
  "alpukat": { kalori: 160, porsi: "100 gram", protein: 2, lemak: 15, karbohidrat: 9 },
  "jeruk": { kalori: 47, porsi: "1 buah (131g)", protein: 0.9, lemak: 0.1, karbohidrat: 12 },

  // Susu & Olahan
  "susu full cream": { kalori: 61, porsi: "100 ml", protein: 3.2, lemak: 3.3, karbohidrat: 4.8 },
  "yoghurt plain": { kalori: 59, porsi: "100 gram", protein: 3.5, lemak: 3.3, karbohidrat: 4.7 },
  "keju cheddar": { kalori: 403, porsi: "100 gram", protein: 25, lemak: 33, karbohidrat: 1.3 },

  // Cemilan & Minuman
  "es krim vanilla": { kalori: 207, porsi: "100 gram", protein: 3.5, lemak: 11, karbohidrat: 24 },
  "cokelat batang": { kalori: 546, porsi: "100 gram", protein: 4.9, lemak: 31, karbohidrat: 61 },
  "keripik kentang": { kalori: 536, porsi: "100 gram", protein: 7, lemak: 35, karbohidrat: 53 },
  "kopi hitam": { kalori: 2, porsi: "250 ml", protein: 0.3, lemak: 0, karbohidrat: 0 },
  "teh tanpa gula": { kalori: 2, porsi: "250 ml", protein: 0, lemak: 0, karbohidrat: 0.3 },

  // Makanan Indonesia
  "rendang daging": { kalori: 193, porsi: "100 gram", protein: 22, lemak: 10, karbohidrat: 2 },
  "gado-gado": { kalori: 180, porsi: "1 porsi (200g)", protein: 8, lemak: 10, karbohidrat: 15 },
  "sate ayam": { kalori: 150, porsi: "1 tusuk (50g)", protein: 12, lemak: 9, karbohidrat: 3 },
  "tempe goreng": { kalori: 193, porsi: "100 gram", protein: 19, lemak: 11, karbohidrat: 9 },
  "indomie goreng": { kalori: 380, porsi: "1 bungkus (80g)", protein: 8, lemak: 14, karbohidrat: 54 },

  // Makanan Barat
  "pizza pepperoni": { kalori: 296, porsi: "1 slice (107g)", protein: 12, lemak: 11, karbohidrat: 36 },
  "hamburger": { kalori: 295, porsi: "1 buah (120g)", protein: 17, lemak: 12, karbohidrat: 30 },
  "spaghetti bolognese": { kalori: 158, porsi: "100 gram", protein: 7, lemak: 5, karbohidrat: 21 },

  // Sarapan
  "oatmeal": { kalori: 68, porsi: "100 gram", protein: 2.4, lemak: 1.4, karbohidrat: 12 },
  "granola": { kalori: 471, porsi: "100 gram", protein: 10, lemak: 20, karbohidrat: 64 },
  "telur dadar": { kalori: 154, porsi: "1 butir besar (61g)", protein: 10.6, lemak: 11.5, karbohidrat: 0.6 },

  // Kacang-kacangan
  "kacang almond": { kalori: 579, porsi: "100 gram", protein: 21, lemak: 50, karbohidrat: 22 },
  "kacang tanah": { kalori: 567, porsi: "100 gram", protein: 26, lemak: 49, karbohidrat: 16 },
  "edamame": { kalori: 121, porsi: "100 gram", protein: 12, lemak: 5, karbohidrat: 10 },
  
  // === SAYURAN ===
  "kangkung rebus": { kalori: 19, porsi: "100 gram", protein: 1.7, lemak: 0.2, karbohidrat: 3.4 },
  "jamur kancing": { kalori: 22, porsi: "100 gram", protein: 3.1, lemak: 0.3, karbohidrat: 3.3 },

  // === BUAH LOKAL ===
  "mangga harum manis": { kalori: 60, porsi: "100 gram", protein: 0.5, lemak: 0.3, karbohidrat: 15 },
  "durian": { kalori: 147, porsi: "100 gram", protein: 1.5, lemak: 5.3, karbohidrat: 27 },

  // === PROTEIN HEWANI ===
  "cumi goreng": { kalori: 175, porsi: "100 gram", protein: 18, lemak: 9, karbohidrat: 4 },
  "udang rebus": { kalori: 99, porsi: "100 gram", protein: 24, lemak: 0.3, karbohidrat: 0.2 },

  // === MAKANAN JAJANAN ===
  "martabak manis": { kalori: 420, porsi: "1 potong (100g)", protein: 8, lemak: 18, karbohidrat: 55 },
  "siomay": { kalori: 91, porsi: "1 buah (50g)", protein: 7, lemak: 3, karbohidrat: 8 },

  // === MAKANAN WESTERN ===
  "croissant": { kalori: 406, porsi: "100 gram", protein: 8, lemak: 21, karbohidrat: 46 },
  "salad caesar": { kalori: 184, porsi: "100 gram", protein: 6, lemak: 15, karbohidrat: 7 },

  // === MINUMAN ===
  "bubble tea": { kalori: 250, porsi: "500 ml", protein: 2, lemak: 5, karbohidrat: 50 },
  "jus jambu": { kalori: 56, porsi: "250 ml", protein: 1, lemak: 0.5, karbohidrat: 13 },

  // === BAHAN DASAR ===
  "minyak kelapa": { kalori: 862, porsi: "100 gram", protein: 0, lemak: 100, karbohidrat: 0 },
  "gula merah": { kalori: 380, porsi: "100 gram", protein: 0, lemak: 0, karbohidrat: 98 },
};