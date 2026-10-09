# Alper Kauppa – oyunlu sürüm v3

Tamamen hayalî market oyunu. Gerçek banka, ödeme veya para aktarımı **yoktur**.

## Yayınlama
Tüm dosyaları ve `icons` klasörünü GitHub deponun kök dizinine yükleyin. Vercel: Framework **Other**, root proje dizini. GitHub-Vercel entegrasyonu bağlıysa yeni commit ile otomatik deploy.

## Oyun
Her üründe 5 başlangıç stoku. Satış yalnızca maksu hyväksytty sonrasında stoktan düşer. Satış geliri kasaya eklenir, Tukku siparişleri toptan fiyatı düşer. 45 € başlangıç oyun parası. Müşteriler ve görevler, market geliştirme eşyaları, Fince tarayıcı seslendirmesi ve Android PWA ikonları vardır. Cihaz tarayıcı yerel depolamasında saklanır; farklı telefona aktarılmaz. Günlük görevler cihazın takvim gününe göre sıfırlanır.

## Barkod
CODE_128 10001–10018 oyun etiketleri desteklenir. Diğer market EAN barkodları tanımlı ürün veritabanında yoksa eklenmez. Kamera API desteklenmeyen tarayıcılarda manuel kod mevcuttur.

## NFC
Web NFC yalnızca destekleyen Android Chromium cihazlarında NDEF etiketleriyle çalışır. iPhone tarayıcısında NFC okuma yoktur; leikkikortti butonu kullanılır.

## Çevrimdışı
Servis çalışanı temel arayüz dosyalarını önbelleğe alır. Kamera, NFC ve Fince konuşma cihaz/tarayıcı desteğine bağlıdır.
