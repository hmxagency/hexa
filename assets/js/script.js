// ==========================================================================
// HEXA DİJİTAL - AWWWARDS PREMIUM JS (60 FPS OPTIMIZED)
// ==========================================================================

// GSAP Plugin Kaydı
gsap.registerPlugin(ScrollTrigger);

const DEV_MODE = false;

// --- DÜZELTME: Sayfa yüklenmeden elemanları gizle ---
gsap.set(".services-header-wrapper > *, .hexa-card", { y: 60, opacity: 0 });

// --------------------------------------------------------
// 1. SPLASH BLOB ANİMASYONU (Arka Plan Kayan Renkler)
// --------------------------------------------------------
if (!DEV_MODE) {
  gsap.to(".splash-blob", {
    x: "random(-30, 30)",
    y: "random(-30, 30)",
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    force3D: true, // GPU Hızlandırması
  });
}

// --------------------------------------------------------
// 2. KAYDIRMA (SCROLL) ANİMASYONLARI (Ana Fonksiyon)
// --------------------------------------------------------

function initScrollAnimations() {
  const isDeviceMobile = window.innerWidth <= 992;

  // --- Tüm Başlıklar ---
  gsap.utils.toArray(".services-header-wrapper").forEach((wrapper) => {
    gsap.to(wrapper.children, {
      scrollTrigger: {
        trigger: wrapper,
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    });
  });

  // --- Sürecimiz Kartları (Bento Grid) ---
  gsap.to(".hexa-card", {
    scrollTrigger: {
      trigger: ".hexa-bento-grid",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.2)",
    clearProps: "all", // Kartın kendi CSS'i devreye girsin diye temizliyoruz
    onComplete: () => {
      document.querySelectorAll(".hexa-card").forEach((card) => {
        card.classList.add("hover-ready");
      });
    },
  });

  // --- Akordeon Galeri (Hizmetlerimiz) ---
  gsap.fromTo(
    ".acc-panel",
    { x: -30, opacity: 0 },
    {
      scrollTrigger: { trigger: ".accordion-gallery", start: "top 85%" },
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all",
    },
  );

  // --- ZIGZAG HİZMET DETAYLARI ANİMASYONU ---
  const zigzagRows = document.querySelectorAll(".zigzag-row");
  zigzagRows.forEach((row) => {
    const visual = row.querySelector(".z-visual");
    const contents = row.querySelectorAll(".z-content > *");
    const isReverse = row.classList.contains("reverse");

    if (visual) {
      gsap.fromTo(
        visual,
        { x: isReverse ? 80 : -80, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: { trigger: row, start: "top 80%" },
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          clearProps: "all",
        },
      );
    }

    if (contents.length > 0) {
      gsap.fromTo(
        contents,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: row, start: "top 80%" },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "y,opacity", // SADECE BUNLARI TEMİZLE
        },
      );
    }
  });

  // --- Projeler (Stacked Cards) ---
  gsap.fromTo(
    ".stacked-card",
    { y: 60, opacity: 0, scale: 0.95 },
    {
      scrollTrigger: { trigger: ".stacked-cards-wrapper", start: "top 85%" },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)",
      clearProps: "all",
    },
  );

  // --- Kutusuz Hakkımızda Yazıları ---
  gsap.fromTo(
    ".manifesto-text-area > *, .fluid-stats > *",
    { y: 50, opacity: 0 },
    {
      scrollTrigger: { trigger: ".section-manifesto-fluid", start: "top 80%" },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all",
    },
  );

  // --- Ekip Kartları (Grid Reveal) ---
  gsap.fromTo(
    ".team-card",
    { y: 60, opacity: 0 },
    {
      scrollTrigger: { trigger: ".team-badge-container", start: "top 85%" },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.2)",
      clearProps: "all",
    },
  );

  // --- Müşteri Yorumu (Testimonial) ---
  gsap.fromTo(
    ".testimonial-single > *",
    { y: 30, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".section-testimonial-fluid",
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    },
  );

  // --- SSS Alanı ---
  gsap.fromTo(
    ".faq-left > *",
    { x: -50, opacity: 0 },
    {
      scrollTrigger: { trigger: ".section-faq-split", start: "top 85%" },
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    },
  );

  gsap.fromTo(
    ".faq-item",
    { x: 50, opacity: 0 },
    {
      scrollTrigger: { trigger: ".faq-right", start: "top 85%" },
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all",
    },
  );

  // --- Kutusuz Devasa Footer İçi ---
  gsap.fromTo(
    ".footer-cta-wrapper > *",
    { y: 50, opacity: 0 },
    {
      scrollTrigger: { trigger: ".fluid-footer", start: "top 85%" },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    },
  );
  gsap.fromTo(
    ".section-tech-marquee",
    { opacity: 0, scale: 0.95, y: 30 },
    {
      scrollTrigger: {
        trigger: ".section-tech-marquee",
        start: "top 90%",
      },
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      clearProps: "y,opacity,scale",
    },
  );
  // =========================================================
  // HİKAYESEL TEKNOLOJİ YIĞINI (Sol Sabit, Sağ Kayan)
  // =========================================================

  // 1. Sol Sabit Alanın Belirmesi
  gsap.fromTo(
    ".story-sticky-left",
    { x: -50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: ".tech-story-section",
        start: "top 80%", // Bölüm ekrana %80 girdiğinde tetiklenir
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      clearProps: "all",
    },
  );

  // 2. Sağ Taraftaki Faz Başlıklarının Belirmesi (01. BÖLÜM vb.)
  gsap.utils
    .toArray(".phase-block > .phase-number, .phase-block > h3")
    .forEach((header) => {
      gsap.fromTo(
        header,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
        },
      );
    });

  // 3. Sağ Taraftaki Maddelerin (philo-item) Scroll ile Tek Tek Belirmesi
  gsap.utils.toArray(".philo-item").forEach((item) => {
    gsap.fromTo(
      item,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 85%", // Her madde ekranın %85'ine ulaştığında kendi animasyonunu oynatır
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)", // Hafifçe yukarı zıplayıp yerine oturma efekti (Premium his verir)
        clearProps: "all",
      },
    );
  });

  ScrollTrigger.refresh();
} // === initScrollAnimations FONKSİYONUNUN BİTİŞİ ===

// ========================================================
// KENDİ OLUŞTURDUĞUMUZ SCROLLBAR
// ========================================================
const customScrollbar = document.getElementById("custom-scrollbar");
const customThumb = document.getElementById("custom-scroll-thumb");

if (customScrollbar && customThumb) {
  customScrollbar.style.opacity = "1";
  customScrollbar.style.visibility = "visible";

  function updateThumbHeight() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (documentHeight <= windowHeight) {
      customScrollbar.style.display = "none";
      return;
    }
    customScrollbar.style.display = "block";
    const ratio = windowHeight / documentHeight;
    customThumb.style.height = `${ratio * 100}vh`;
  }

  updateThumbHeight();
  window.addEventListener("resize", updateThumbHeight);

  gsap.to(customThumb, {
    y: () => window.innerHeight - customThumb.offsetHeight,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  let isDragging = false;
  let startY = 0;
  let startScrollTop = 0;

  customThumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startScrollTop = window.scrollY || document.documentElement.scrollTop;
    document.body.style.userSelect = "none";
    customThumb.style.backgroundColor = "#fff";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaY = e.clientY - startY;
    const trackHeight = window.innerHeight - customThumb.offsetHeight;
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollableHeight / trackHeight;

    window.scrollTo({
      top: startScrollTop + deltaY * scrollRatio,
      behavior: "auto",
    });
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.userSelect = "";
      customThumb.style.backgroundColor = "var(--neon-mint)";
    }
  });

  customScrollbar.addEventListener("click", (e) => {
    if (e.target === customThumb) return;

    const trackHeight = window.innerHeight - customThumb.offsetHeight;
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const clickY = e.clientY - customThumb.offsetHeight / 2;
    const clickRatio = clickY / trackHeight;

    window.scrollTo({
      top: clickRatio * scrollableHeight,
      behavior: "smooth",
    });
  });
}

// ==========================================================================
// 11. HİKAYESEL TEKNOLOJİ YIĞINI (YAZI DEĞİŞİMİ)
// ==========================================================================
const stickyTitle = document.getElementById("sticky-title");
const stickyDesc = document.getElementById("sticky-desc");
const phaseBlocks = document.querySelectorAll(".phase-block");

if (stickyTitle && stickyDesc && phaseBlocks.length > 0) {
  const phaseData = {
    "phase-code": {
      title:
        'Sistemin<br><span class="text-gradient-white">Mühendisliği.</span>',
      desc: "Kalıplara sığmıyoruz. Karmaşık problemleri hazır sistemlerle değil, işletmenize özel tasarlanmış güçlü ve ölçeklenebilir arka plan mimarileriyle çözüyoruz.",
    },
    "phase-design": {
      title:
        'Estetiğin<br><span class="text-gradient-white">Matematiği.</span>',
      desc: "Kusursuz işleyen bir altyapıyı, kullanıcının aklına kazınan premium bir deneyimle taçlandırıyoruz. Markanızın ruhunu piksellere dökme zamanı.",
    },
  };

  // HTML'de varsayılan olarak "phase-code" yazdığı için onu aktif kabul ediyoruz
  let activePhaseId = "phase-code";

  function changeText(newPhaseId) {
    if (activePhaseId === newPhaseId) return;
    activePhaseId = newPhaseId;

    gsap.killTweensOf([stickyTitle, stickyDesc]);

    gsap.to([stickyTitle, stickyDesc], {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        stickyTitle.innerHTML = phaseData[newPhaseId].title;
        stickyDesc.innerHTML = phaseData[newPhaseId].desc;

        gsap.to([stickyTitle, stickyDesc], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });
  }

  // Kullanıcı hangi bölüme girerse (aşağı veya yukarı kaydırarak), yazıyı o bölüme göre değiştirir
  phaseBlocks.forEach((block) => {
    ScrollTrigger.create({
      trigger: block,
      start: "top center",
      end: "bottom center",
      onEnter: () => changeText(block.id),
      onEnterBack: () => changeText(block.id),
    });
  });
}

// --------------------------------------------------------
// 3. SPLASH EKRANI VE ANA GEÇİŞ MANTIĞI
// --------------------------------------------------------
const mm = gsap.matchMedia();

mm.add(
  { isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" },
  (context) => {
    let { isDesktop, isMobile } = context.conditions;

    const mainContent = document.getElementById("main-content");
    const splashScreen = document.getElementById("splash-screen");

    document.body.classList.add("no-scroll");

    if (DEV_MODE) {
      if (splashScreen) splashScreen.style.display = "none";
      gsap.set(mainContent, { autoAlpha: 1 });
      document.body.classList.remove("no-scroll");
      initScrollAnimations();
      return;
    }

    gsap.set(mainContent, { opacity: 0 });
    gsap.set(".navbar", { y: -30, opacity: 0 });

    const startBlur = isMobile ? "blur(0px)" : "blur(10px)";
    gsap.set(".hero-content-wrapper > *", {
      y: 40,
      opacity: 0,
      filter: startBlur,
    });
    gsap.set(".hex-item, .dot-item", { scale: 0.5, opacity: 0 });

    const tl = gsap.timeline({
      defaults: { ease: "expo.out", force3D: true },
      onComplete: () => {
        const transitionTl = gsap.timeline({
          onComplete: () => {
            if (splashScreen) splashScreen.style.display = "none";
            document.body.classList.remove("no-scroll");
            initScrollAnimations();
          },
        });

        gsap.set(mainContent, { autoAlpha: 1 });

        transitionTl.to(
          splashScreen,
          { opacity: 0, duration: 0.8, ease: "power2.inOut" },
          0,
        );
        transitionTl.to(
          ".navbar",
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            clearProps: "all",
          },
          0.1,
        );
        transitionTl.to(
          ".hero-content-wrapper > *",
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.5,
            stagger: 0.15,
            ease: "expo.out",
            clearProps: "all",
          },
          0.3,
        );
        transitionTl.to(
          ".hex-item, .dot-item",
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            stagger: 0.05,
            ease: "back.out(1.5)",
          },
          0.5,
        );
      },
    });

    const splashMarkBlur = isMobile ? "blur(0px)" : "blur(15px)";
    gsap.set(".mark-piece", {
      opacity: 0,
      scale: 0.6,
      filter: splashMarkBlur,
      transformOrigin: "center",
    });

    if (isDesktop) {
      gsap.set("#textBlock", { width: 0, height: "auto", opacity: 0 });
    } else {
      gsap.set("#textBlock", { width: "auto", height: 0, opacity: 0 });
    }

    tl.to("#aurora", { opacity: 0.8, duration: 1.2 }, 0);
    tl.to(
      ".mark-piece",
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: { amount: 0.5, from: "center" },
      },
      0.2,
    );

    if (isDesktop) {
      tl.to(
        "#textBlock",
        { width: "auto", opacity: 1, duration: 1.4, ease: "expo.inOut" },
        1.0,
      );
    } else {
      tl.to(
        "#textBlock",
        { height: "auto", opacity: 1, duration: 1.4, ease: "expo.inOut" },
        1.0,
      );
    }

    tl.fromTo(
      "#hexa",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      1.2,
    );
    tl.to(
      "#dijital",
      { opacity: 1, x: 0, duration: 1.0, ease: "power2.out" },
      1.6,
    );

    return () => {
      tl.kill();
    };
  },
);

// --------------------------------------------------------
// 4. 3D MOUSE ETKİLEŞİMİ (Ana Petek)
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const honeycomb = document.getElementById("interactive-honeycomb");
  if (!honeycomb) return;

  const baseRotateX = 15;
  const baseRotateY = -15;
  const maxTilt = 8;
  let rafId = null;

  document.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 768) return;

    if (rafId) cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = (e.clientX - centerX) / centerX;
      const mouseY = (e.clientY - centerY) / centerY;

      const rotateX = baseRotateX - mouseY * maxTilt;
      const rotateY = baseRotateY + mouseX * maxTilt;

      honeycomb.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });
});

// --------------------------------------------------------
// 5. HAMBURGER MENÜ YÖNETİMİ
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }),
  );
});

// --------------------------------------------------------
// 6. LOTTIE AKILLI OYNATICI (Mobil İçin Odak Modu)
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const bentoCards = document.querySelectorAll(".hexa-card");
  if (bentoCards.length === 0) return;

  const isMobile = window.matchMedia("(max-width: 992px)").matches;

  const mobileObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const lottie = entry.target.querySelector("dotlottie-player");
        if (!lottie) return;

        if (entry.isIntersecting) {
          document
            .querySelectorAll(".hexa-card dotlottie-player")
            .forEach((p) => {
              if (p !== lottie) p.pause();
            });
          lottie.play();
        } else {
          lottie.pause();
        }
      });
    },
    { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
  );

  bentoCards.forEach((card) => {
    setTimeout(() => {
      const lottie = card.querySelector("dotlottie-player");
      if (!lottie) return;

      lottie.pause();

      if (!isMobile) {
        card.addEventListener("mouseenter", () => lottie.play());
        card.addEventListener("mouseleave", () => lottie.pause());
      } else {
        mobileObserver.observe(card);
      }
    }, 500);
  });
});

// --------------------------------------------------------
// 7. AKORDEON GALERİ MANTIĞI
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".acc-panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      if (panel.classList.contains("active")) return;
      panels.forEach((p) => p.classList.remove("active"));
      panel.classList.add("active");
    });
  });
});

// --------------------------------------------------------
// 8. S.S.S. (DEVASA KUTULU AKORDEON MANTIĞI)
// --------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      const answer = item.querySelector(".faq-answer");

      if (isActive) {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        faqItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
        });

        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

// --------------------------------------------------------
// Son Önlem: Sayfa tam yüklendiğinde resimler geç gelirse diye hesaplamaları tazele
// --------------------------------------------------------
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
