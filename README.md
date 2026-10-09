# Alper Kauppa 🛒
Lasten leikkikauppa: tuotevalikoima, ostoskori, viivakoodin kameratunnistus (tuetuilla selaimilla), tekstikoodit 10001–10018, kuvitteellinen maksu ja Android Web NFC NDEF -tagien lukeminen.

**Ei käsittele oikeita maksuja.** iPhone Safari ei tue Web NFC -lukua. Android Chrome voi lukea NDEF-tekstitunnisteen `ALPER-KAUPPA` HTTPS-osoitteessa, kun käyttäjä antaa NFC-luvulle luvan.

## Julkaisu
Luo GitHubiin uusi repository nimeltä `alper-kauppa`. Lataa tämän kansion tiedostot repositoryn juureen. Vercelissä valitse Add New Project → Import Git Repository → `alper-kauppa` → Deploy. Framework Preset: Other, Output Directory: jätä tyhjäksi.

## Huomautus viivakoodeista
Tuotekoodeja 10001–10018 voi käyttää manuaalisesti tai tehdä niistä CODE_128 -viivakoodit. Oikeat kauppojen EAN-koodit eivät automaattisesti vastaa tämän leikin tuotteita.
