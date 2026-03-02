// 1. GSAP ScrollTrigger Kaydını en üstte yapıyoruz
gsap.registerPlugin(ScrollTrigger);

const DEV_MODE = false;

if (!DEV_MODE) {
  gsap.to(".splash-blob", {
    // HTML'de .splash-blob yaptığımız için burayı güncelledim
    x: "random(-30, 30)",
    y: "random(-30, 30)",
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

// 2. Scroll Animasyonlarını bir fonksiyona bağladık (Splash bitince çağrılacak)
function initScrollAnimations() {
  // Sadece başlık kısmı için animasyon
  gsap.to(".section-header", {
    scrollTrigger: {
      trigger: ".section-services",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  });

  // Kartlar için SIRALI (Stagger) animasyon
  gsap.to(".service-card", {
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2, // İşte kartları peş peşe sıralı çıkaran özellik!
    ease: "power3.out",
  });

  // Sayfa gizliyken oluşan boyut hatalarını düzeltmek için yenileme
  ScrollTrigger.refresh();
}

const mm = gsap.matchMedia();
mm.add(
  { isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" },
  (context) => {
    let { isDesktop } = context.conditions;

    if (DEV_MODE) {
      document.getElementById("splash-screen").style.display = "none";
      const mainContent = document.getElementById("main-content");
      mainContent.classList.remove("hidden");
      gsap.set(mainContent, { opacity: 1 });
      gsap.set(".hero-anim", { y: 0, opacity: 1 });
      gsap.set(".hex-node", { opacity: 1 });

      initScrollAnimations(); // Dev modda direkt başlat
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => {
        gsap.to("#splash-screen", {
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            document.getElementById("splash-screen").style.display = "none";
            const mainContent = document.getElementById("main-content");
            mainContent.classList.remove("hidden");

            gsap.to(mainContent, {
              opacity: 1,
              duration: 0.5,
              ease: "power1.inOut",
            });

            gsap.to(".hero-anim", {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.15,
              ease: "power3.out",
              delay: 0.2,
            });

            gsap.to(".hex-node", {
              opacity: 1,
              duration: 1.2,
              stagger: 0.1,
              ease: "power2.out",
              delay: 0.4,
            });

            // 3. AÇILIŞ BİTTİĞİNDE KAYDIRMA ANİMASYONLARINI BAŞLAT
            initScrollAnimations();
          },
        });
      },
    });

    gsap.set(".mark-piece", {
      opacity: 0,
      scale: 0.6,
      filter: "blur(15px)",
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

    tl.to("#hexa", { y: 0, duration: 1.2 }, 1.2);
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

// Fare hareketine duyarlı 3D petek
document.addEventListener("DOMContentLoaded", () => {
  const honeycomb = document.getElementById("interactive-honeycomb");
  if (!honeycomb) return;
  const baseRotateX = 15;
  const baseRotateY = -15;
  const maxTilt = 8;

  document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = (e.clientX - centerX) / centerX;
    const mouseY = (e.clientY - centerY) / centerY;
    const rotateX = baseRotateX - mouseY * maxTilt;
    const rotateY = baseRotateY + mouseX * maxTilt;
    honeycomb.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
