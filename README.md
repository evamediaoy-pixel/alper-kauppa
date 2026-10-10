# ALPER KAUPPA V7 — pelattava 3D-prototyyppi

Tämä on uuteen Three.js-pelimoottorinäkymään tehty ensimmäinen pelattava versio. Oikeat 3D-hyllyt, tuotteet, kävelevät 3D-hahmot, kamera, liikkuminen, ostoskori, kassa, käteisvaihtoraha ja tukkutilaukset.

## Julkaisu GitHub + Vercel

Lataa tämän hakemiston **kaikki** tiedostot GitHub-repositorion juureen: `index.html`, `game.js`, `manifest.webmanifest` ja `icons`-hakemisto. Aiemmat versiot kannattaa varmuuskopioida. Vercel: Framework Preset `Other`, ei build commandia, output directory oletus (juuri). Varmista että Vercel käyttää samaa GitHub-repoa ja oikeaa production branchia.

## Tärkeät rajoitukset

- Three.js 0.164.1 ladataan jsDelivr CDN:stä; ensimmäiseen lataukseen tarvitaan verkkoyhteys.
- Tuotteet ja ihmiset ovat ohjelmallisesti mallinnettuja 3D-geometrioita, **eivät** valokuvarealistisia skannattuja 3D-assetteja. Varsinainen PBR asset / animaatiotuotanto on seuraava työvaihe.
- Tämä on erillinen tekninen prototyyppi: aiemman V6:n minipelit, Web NFC ja kamera-barkoodinlukija eivät ole vielä siirretty tähän 3D-käyttöliittymään. Älä korvaa toimivaa V6-julkaisua ilman testausta.
- Rahat, varasto ja asiakasmäärät säilyvät laitteen selaimen localStoragessa, eivät siirry toiselle laitteelle.
- Ei oikeita maksuja eikä käyttäjätilejä.
