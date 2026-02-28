gsap.registerPlugin(ScrollTrigger);

// 1. Custom Cursor Mantığı
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
  gsap.to(follower, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.3 });
});

// Linklere gelince cursor büyümesi
const links = document.querySelectorAll("a, .work-item, .menu-btn");
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(follower, {
      scale: 3,
      borderColor: "transparent",
      backgroundColor: "rgba(255, 60, 0, 0.1)",
      duration: 0.3,
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(follower, {
      scale: 1,
      borderColor: "#ff3c00",
      backgroundColor: "transparent",
      duration: 0.3,
    });
  });
});

// 2. Preloader Animasyonu
const tlLoader = gsap.timeline();

tlLoader
  .to(".counter", {
    duration: 1.5,
    innerText: 100,
    snap: { innerText: 5 }, // 5'er 5'er artır
    ease: "power2.inOut",
    onUpdate: function () {
      this.targets()[0].innerText =
        Math.ceil(this.targets()[0].innerText) + "%";
    },
  })
  .to(".preloader", {
    y: "-100%",
    duration: 1,
    ease: "power4.inOut",
  })
  .from(
    ".hero-title .line span",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    },
    "-=0.5",
  );

// 3. Marquee (Kayan Yazı) Efekti
gsap.to(".marquee-content", {
  xPercent: -50,
  ease: "none",
  duration: 10,
  repeat: -1,
});

// 4. Reveal Text (Scroll ettikçe kelimelerin parlaması)
const text = document.querySelector(".reveal-text");
if (text) {
  // Basit bir split efekti simülasyonu
  let content = text.innerHTML;
  // Kelimeleri span içine alabiliriz daha kompleks efekt için ama
  // şimdilik opacity ve y ekseniyle oynayalım.
  gsap.from(text, {
    scrollTrigger: {
      trigger: ".intro",
      start: "top 70%",
      end: "bottom 70%",
      scrub: 1,
    },
    color: "#1a1a1a", // Koyu renkten beyaza
    duration: 1,
  });
}

// 5. Projelerin Listesi (Hover ve Giriş Animasyonu)
gsap.utils.toArray(".work-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});

// --- Hover Reveal Effect ---
const revealContainer = document.querySelector(".hover-reveal");
const targetText = document.querySelector(".outline-text");

// Mouse hareketiyle görseli taşı
window.addEventListener("mousemove", (e) => {
  // Görseli mouse'un tam ortasına getirmek için basit gsap
  gsap.to(revealContainer, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: "power2.out",
  });
});

// Yazının üzerine gelince göster
targetText.addEventListener("mouseenter", () => {
  gsap.to(revealContainer, {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(targetText, {
    color: "transparent", // Yazı içi boş kalsın
    duration: 0.3,
  });
});

// Yazıdan çıkınca gizle
targetText.addEventListener("mouseleave", () => {
  gsap.to(revealContainer, {
    opacity: 0,
    scale: 0.8,
    duration: 0.3,
    ease: "power2.out",
  });
});
