"use client";
import Image from "next/image";
import styles from "./page.module.css";

const FEATURES = [
  {
    icon: "🎯",
    title: "Seviye Seçimi",
    desc: "A1'den C2'ye kadar seviyeni seç, sana uygun kelimelerle çalış.",
  },
  {
    icon: "📚",
    title: "Geniş Kelime Havuzu",
    desc: "44.000'den fazla kelime içeren kapsamlı sözlük ve kişisel listeler.",
  },
  {
    icon: "📱",
    title: "Çevrimdışı Kullanım",
    desc: "İnternete ihtiyaç duymadan tamamen çevrimdışı çalışabilme.",
  },
  {
    icon: "🖼️",
    title: "Görsel Oluşturma",
    desc: "Seçtiğin kelimelerle kilit ekranı görselleri oluştur, galeriye kaydet.",
  },
  {
    icon: "📈",
    title: "İlerleme Takibi",
    desc: "Öğrenilen kelimelerin seviyeye göre istatistiklerini görüntüle.",
  },
  {
    icon: "🎮",
    title: "Egzersiz ve Oyunlar",
    desc: "Boşluk doldurma, eşleştirme ve daha fazlası ile eğlenerek öğren.",
  },
  {
    icon: "📝",
    title: "Gramer ve Eğitim",
    desc: "Seviyeye göre gramer konuları ve interaktif alıştırmalar.",
  },
  {
    icon: "🌗",
    title: "Çoklu Tema ve Dil",
    desc: "Açık, karanlık ve pastel temalar ile Türkçe/Portekizce dil desteği.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image src="/logo-placeholder.png" alt="Memoro Logo" width={64} height={64} className={styles.logo} />
        <h1 className={styles.title}>Memoro</h1>
        <p className={styles.slogan}>Kelime öğrenmeyi kolaylaştıran uygulama</p>
        <a className={styles.downloadBtn} href="https://github.com/eyupduran/memoro/tags" target="_blank" rel="noopener noreferrer">
          Uygulamayı İndir
        </a>
      </header>
      <main className={styles.main}>
        <section className={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <div className={styles.featureCard} key={i}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </section>
        <section className={styles.screenshots}>
          <h2>Uygulamadan Görseller</h2>
          <div className={styles.screenshotGrid}>
            <Image src="/screenshot1.jpg" alt="Ekran Görüntüsü 1" width={200} height={400} className={styles.screenshot} />
            <Image src="/screenshot2.jpg" alt="Ekran Görüntüsü 2" width={200} height={400} className={styles.screenshot} />
            <Image src="/screenshot3.jpg" alt="Ekran Görüntüsü 3" width={200} height={400} className={styles.screenshot} />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Memoro</span>
        <a href="https://github.com/eyupduran/memoro" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
}
