# Alper Kauppa — V8 Game Shell (güvenli ara sürüm)

Bu paket en güncel **V5 fiş arşivi ve Kananmuna düzeltmesi** üzerine kurulmuştur. Özgün V5 oyun kodu korunur. Yeni oyun açılış ekranı, dosya yükleme kontrolü, PELAA menüsü ve mobil oyun navigasyonu eklenir. Bu **Phaser/3D dönüşümü değildir**. Tam master promptun diğer özellikleri ayrı geliştirme ve cihaz testleri gerektirir.

## Kurulum

1. Mevcut `alper-kauppa` projesinin GitHub yedeğini veya etiketini oluşturun.
2. Önce **ayrı önizleme dalına veya yeni bir test deposuna** ZIP'in içindeki dosyaları, klasör yapısını koruyarak yükleyin (ZIP'i tek dosya olarak yüklemeyin).
3. Vercel'de statik proje (Framework: Other, output root) olarak deploy edin.
4. iOS Safari ve Android Chrome'da kontrol edin. Testten geçince üretime alın.

## Kalıcılık

V5 localStorage anahtarlarına müdahale edilmez; V5'in fiş, stok, para ve müşteri verileri aynı origin+tarayıcıda kalır. **Yeni alan adına geçmek kayıtları otomatik taşımaz.** Tarayıcı verilerini silmeyin.

## Sınırlar

- Yükleme göstergesi gerçekten manifest/ikon dosyalarının alınmasını kontrol eder; bütün oyunun ağ dışı varlıklarını temsil etmez.
- Gerçek 3D karakterler, tam Phaser geçişi, yeni oyun varlıkları, veri içe/dışa aktarma ve kapsamlı cihaz testleri bu ara sürümün parçası değildir.
- iPhone Safari Web NFC desteklemez. Gerçek ödeme alınmaz.
- Cihazda tarayıcı kontrolleri, PWA ana ekrana eklenmeden her zaman gizlenemez.
