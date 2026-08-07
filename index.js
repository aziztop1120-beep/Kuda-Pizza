// const openModal = document.getElementById("openModal");
// const closeModal = document.getElementById("closeModal");
// const modal = document.getElementById("registerModal");

// openModal.addEventListener("click", () => {
//     modal.classList.remove("hidden");
//     modal.classList.add("flex");
// });

// closeModal.addEventListener("click", () => {
//     modal.classList.add("hidden");
//     modal.classList.remove("flex");
// });

// // Tashqarisini bosganda yopiladi
// modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         modal.classList.add("hidden");
//         modal.classList.remove("flex");
//     }
// });


const textBox = document.getElementById("textBox");
const fade = document.getElementById("fade");
const btn = document.getElementById("toggleBtn");

let open = false;

btn.onclick = () => {
    open = !open;

    if (open) {
        textBox.classList.remove("max-h-52");
        textBox.classList.add("max-h-[1000px]");

        fade.classList.add("hidden");

        btn.textContent = "Скрыть";
    } else {
        textBox.classList.remove("max-h-[1000px]");
        textBox.classList.add("max-h-52");

        fade.classList.remove("hidden");

        btn.textContent = "Показать полностью";
    }
};


document.addEventListener('DOMContentLoaded', () => {
  const sectionIds = ['aksiyalar', 'pizza', 'sushi', 'napitki', 'zakuski', 'combo', 'desserts', 'sauces'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const navLinks = document.querySelectorAll('.nav-link');
  const cards = document.querySelectorAll('.category-card');

  // --- 1) Aktiv bo'limni belgilash (ham matnli menyu, ham kartochkalar uchun) ---
  const setActive = (id) => {
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.target === id));
    cards.forEach(card => card.classList.toggle('active', card.dataset.target === id));
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    root: null,
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0
  });

  sections.forEach(section => sectionObserver.observe(section));

  // --- 2) Ikonkali kartochkalar bo'limi ko'rinishdan chiqqanda sticky panelga matnli menyu chiqadi ---
  const categoriesSection = document.getElementById('categoriesSection');
  const stickyHeader = document.getElementById('stickyHeader');

  if (categoriesSection && stickyHeader) {
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Kartochkalar bo'limi ekrandan yuqoriga chiqib ketganda (scroll pastga) -> menyu chiqadi
        stickyHeader.classList.toggle('header-scrolled', !entry.isIntersecting && entry.boundingClientRect.top < 0);
      });
    }, {
      root: null,
      threshold: 0
    });

    headerObserver.observe(categoriesSection);
  }
}); 

// Mobil sidebar navigation
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  mobileSidebar.classList.add("open");
  sidebarOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  mobileSidebar.classList.remove("open");
  sidebarOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

openSidebarBtn?.addEventListener("click", openSidebar);
closeSidebarBtn?.addEventListener("click", closeSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);

// Link bosilganda ham menyu yopilsin
document.querySelectorAll(".sidebar-link").forEach(link => {
  link.addEventListener("click", closeSidebar);
});


const logoButton = document.getElementById('logo-btn');

if (logoButton) {
  logoButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const closeLoginModal = document.getElementById("closeLoginModal");
const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");
const toLogin = document.getElementById("toLogin");
const toRegister = document.getElementById("toRegister");

function showModal(modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function hideModal(modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

// "Войти в аккаунт" bosilganda registratsiya oynasi ochiladi
openModal.addEventListener("click", () => {
    showModal(registerModal);
});

// Registratsiya oynasini yopish
closeModal.addEventListener("click", () => {
    hideModal(registerModal);
});

// Login oynasini yopish
closeLoginModal.addEventListener("click", () => {
    hideModal(loginModal);
});

// "Авторизоваться" bosilganda registratsiyadan login oynasiga o'tadi
toLogin.addEventListener("click", () => {
    hideModal(registerModal);
    showModal(loginModal);
});

// "Войти" bosilganda logindan registratsiya oynasiga qaytadi
toRegister.addEventListener("click", () => {
    hideModal(loginModal);
    showModal(registerModal);
});

// Tashqarisini bosganda yopiladi (register modal)
registerModal.addEventListener("click", (e) => {
    if (e.target === registerModal) {
        hideModal(registerModal);
    }
});

// Tashqarisini bosganda yopiladi (login modal)
loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        hideModal(loginModal);
    }
});

const button =
document.querySelector('#myButton');
button.addEventListener('click', () => {
alert("Siz ro'yhatdan o'tdingiz!");
})

// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("themeToggle");

function enableDark() {
    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
}

function disableDark() {
    document.body.classList.remove("dark");
    themeBtn.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") === "dark") {
    enableDark();
}

themeBtn.addEventListener("click", () => {

    if (document.body.classList.contains("dark")) {

        disableDark();

    } else {

        enableDark();

    }

});

