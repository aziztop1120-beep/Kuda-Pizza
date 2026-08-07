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

// ===============================
// SAVAT (CART)
// ===============================
// Bu blok sizning HTML'ingizga quyidagilarni qo'shishni talab qiladi:
//  1) Header'dagi "0 ₽" tugmasiga: id="cartBtn", ichidagi matnga id="cartTotalText",
//     va yonida id="cartCountBadge" bo'lgan kichik span (badge).
//  2) index.html oxiriga (footer'dan oldin yoki keyin) cart-drawer.html
//     faylidagi HTML parchasini joylashtiring.

const CART_KEY = "kuda_pizza_cart";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

let cart = loadCart();

function parsePrice(text) {
  // "45,000 ₽" -> 45000
  return parseInt(text.replace(/[^\d]/g, ""), 10) || 0;
}

function formatPrice(num) {
  return num.toLocaleString("ru-RU") + " ₽";
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// --- Har bir mahsulot kartochkasidagi "Выбрать" tugmasini kuzatish (event delegation) ---
document.addEventListener("click", (e) => {
  const chooseBtn = e.target.closest("button");
  if (!chooseBtn) return;
  if (!chooseBtn.textContent.trim().startsWith("Выбрать")) return;

  const card = chooseBtn.closest(".rounded-2xl");
  if (!card) return;

  const name = card.querySelector("h2")?.textContent.trim() || "Товар";
  const priceText = card.querySelector("span")?.textContent.trim() || "0 ₽";
  const price = parsePrice(priceText);
  const img = card.querySelector("img")?.getAttribute("src") || "";

  addToCart({ name, price, img });

  // Foydalanuvchiga tez vizual javob (tugma matni vaqtincha o'zgaradi)
  const original = chooseBtn.textContent;
  chooseBtn.textContent = "Добавлено ✓";
  setTimeout(() => (chooseBtn.textContent = original), 800);
});

function addToCart(product) {
  const existing = cart.find(
    (item) => item.name === product.name && item.price === product.price
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  renderCart();
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cartTotalText = document.getElementById("cartTotalText");
  const cartCountBadge = document.getElementById("cartCountBadge");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (!cartTotalText) return; // Agar HTML hali qo'shilmagan bo'lsa, jim tursin

  const total = cartTotal();
  const count = cartCount();

  cartTotalText.textContent = formatPrice(total);
  cartSubtotal.textContent = formatPrice(total);
  if (checkoutTotal) checkoutTotal.textContent = formatPrice(total);

  if (count > 0) {
    cartCountBadge.textContent = count;
    cartCountBadge.classList.remove("hidden");
  } else {
    cartCountBadge.classList.add("hidden");
  }

  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `<p id="cartEmptyMsg" class="text-gray-500 text-center mt-10">Корзина пуста</p>`;
    return;
  }

  cartItemsList.innerHTML = cart
    .map(
      (item, i) => `
      <div class="flex gap-3 items-center border-b border-gray-100 pb-4">
        <img src="${item.img}" class="w-16 h-16 object-contain shrink-0">
        <div class="flex-1 min-w-0">
          <p class="font-medium truncate">${item.name}</p>
          <p class="text-orange-500 font-semibold">${formatPrice(item.price)}</p>
          <div class="flex items-center gap-3 mt-2">
            <button data-action="dec" data-index="${i}" class="w-7 h-7 rounded-full border border-gray-300 hover:bg-gray-100">−</button>
            <span>${item.qty}</span>
            <button data-action="inc" data-index="${i}" class="w-7 h-7 rounded-full border border-gray-300 hover:bg-gray-100">+</button>
            <button data-action="remove" data-index="${i}" class="ml-auto text-red-500 text-sm hover:underline">Удалить</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Savat ichidagi +/-/o'chirish tugmalari
document.addEventListener("click", (e) => {
  const actionBtn = e.target.closest("[data-action]");
  if (!actionBtn) return;

  const index = parseInt(actionBtn.dataset.index, 10);
  const action = actionBtn.dataset.action;

  if (action === "inc") changeQty(index, 1);
  if (action === "dec") changeQty(index, -1);
  if (action === "remove") removeItem(index);
});

// --- Savat oynasini ochish/yopish ---
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

function openCart() {
  cartDrawer?.classList.add("open");
  cartOverlay?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  cartDrawer?.classList.remove("open");
  cartOverlay?.classList.remove("open");
  document.body.style.overflow = "";
}

cartBtn?.addEventListener("click", openCart);
closeCart?.addEventListener("click", closeCartDrawer);
cartOverlay?.addEventListener("click", closeCartDrawer);

// --- Checkout (buyurtma berish) oynasi ---
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");

checkoutBtn?.addEventListener("click", () => {
  if (cart.length === 0) return;
  closeCartDrawer();
  showModal(checkoutModal);
});

closeCheckout?.addEventListener("click", () => hideModal(checkoutModal));
checkoutModal?.addEventListener("click", (e) => {
  if (e.target === checkoutModal) hideModal(checkoutModal);
});

checkoutForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const order = {
    name: document.getElementById("checkoutName").value,
    phone: document.getElementById("checkoutPhone").value,
    address: document.getElementById("checkoutAddress").value,
    payment: document.getElementById("checkoutPayment").value,
    items: cart,
    total: cartTotal(),
  };

  // TODO: bu yerda order'ni backend API'ga (masalan fetch("/api/order", {...}))
  // yuborish kerak bo'ladi. Hozircha faqat tasdiqlash xabari chiqadi.
  console.log("Yangi buyurtma:", order);
  alert(`Спасибо, ${order.name}! Ваш заказ на сумму ${formatPrice(order.total)} принят.`);

  cart = [];
  saveCart(cart);
  renderCart();
  hideModal(checkoutModal);
  checkoutForm.reset();
});

// Sahifa yuklanganda savatni bir marta chizib qo'yamiz
renderCart();