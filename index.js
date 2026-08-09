// ===============================
// I18N — RU / UZ / EN
// ===============================
const I18N = {
  ru: {
    checkAddress: "Проверить адрес",
    avgTime: "Среднее время доставки*: 00:24:19",
    workHours: "Время работы: c 11:00 до 23:00",
    loginAccount: "Войти в аккаунт",

    regTitle: "Зарегистрировать аккаунт",
    regGateNotice: "Чтобы пользоваться сайтом, необходимо войти или зарегистрироваться",
    regSubtitle: "Сможете быстро оформлять заказы,<br>использовать бонусы",
    phName: "имя",
    phEmail: "электронная почта",
    phPhone: "+998",
    phPassword: "пароль",
    regBtn: "Регистрация",
    agreeText: "Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением",
    haveAccount: "У вас уже есть аккаунт?",
    toLoginLink: "Авторизоваться",

    loginTitle: "Вход в аккаунт",
    loginBtn: "Войти",
    needAccount: "Нужен аккаунт?",
    toRegisterLink: "Зарегистрироваться",

    navPromo: "Акции",
    navPizza: "Пицца",
    navSushi: "Суши",
    navDrinks: "Напитки",
    navSnacks: "Закуски",
    navCombo: "Комбо",
    navDesserts: "Десерты",
    navSauces: "Соусы",

    cartTitle: "Ваша корзина",
    cartEmpty: "Корзина пуста",
    cartTotalLabel: "Итого:",
    checkoutBtn: "Оформить заказ",

    checkoutTitle: "Оформление заказа",
    phFullName: "Ваше имя",
    phAddress: "Адрес доставки",
    payCash: "Наличными курьеру",
    payCard: "Картой курьеру",
    toPay: "К оплате:",
    confirmOrder: "Подтвердить заказ",

    checkAddrTitle: "Проверить адрес доставки",
    phAddr: "Адрес",
    checkBtn: "Проверить",

    chooseBtn: "Выбрать",
    addedBtn: "Добавлено ✓",

    deliveryTitle: "Доставка пиццы",
    deliveryP1: "Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Всё пропало? Нет. Недорого заказать пиццу очень просто!",
    deliveryP2: "Вам на помощь спешит супергерой — Куда пицца! Как у всякого супергероя, у нас есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.",
    howToOrderTitle: "Как сделать заказ",
    howToOrderP: "Доставка пиццы от «Куда пицца» — это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Чтобы заказать пиццу онлайн, Вам необходимо выбрать понравившийся вариант и количество порций, положить желаемое в «Корзину», не уходить далеко, так как вкусная пицца уже мчится к Вам из ближайшей пиццерии.",
    showMore: "Показать полностью",
    showLess: "Скрыть",

    footerAbout: "О компании",
    footerTerms: "Пользовательское соглашение",
    footerWarranty: "Условия гарантии",
    footerCompany: "Куда пицца",
    footerHelp: "Помощь",
    footerRestaurant: "Ресторан",
    footerContactsLink: "Контакты",
    footerSupport: "Поддержка",
    footerTrack: "Отследить заказ",
    footerContacts: "Контакты",
    footerAddress: "Ташкент, Юнусабадский район",
    footerCopyright: "© Copyright 2021 — Куда пицца",

    orderThanks: (name, total) => `Спасибо, ${name}! Ваш заказ на сумму ${total} принят.`,
    registeredAlert: "Вы успешно зарегистрировались!",
    loggedInAlert: "Вы успешно вошли в аккаунт!",
    currency: "сум",

    loadingText: "Загрузка вкусного...",
    needLoginToOrder: "Чтобы оформить заказ, зарегистрируйтесь или войдите в аккаунт",
    logoutBtn: "Выйти",
    helloUser: (name) => `Привет, ${name}`,
    logoutConfirm: (name) => `Выйти из аккаунта ${name}?`,
  },

  uz: {
    checkAddress: "Manzilni tekshirish",
    avgTime: "O'rtacha yetkazib berish vaqti*: 00:24:19",
    workHours: "Ish vaqti: 11:00 dan 23:00 gacha",
    loginAccount: "Hisobga kirish",

    regTitle: "Hisob yaratish",
    regGateNotice: "Saytdan foydalanish uchun tizimga kirish yoki ro'yxatdan o'tish zarur",
    regSubtitle: "Buyurtmalarni tez rasmiylashtiring,<br>bonuslardan foydalaning",
    phName: "ism",
    phEmail: "elektron pochta",
    phPhone: "+998",
    phPassword: "parol",
    regBtn: "Ro'yxatdan o'tish",
    agreeText: "Davom etish orqali siz shaxsiy ma'lumotlarni yig'ish va qayta ishlashga hamda foydalanuvchi shartnomasiga rozilik bildirasiz",
    haveAccount: "Hisobingiz bormi?",
    toLoginLink: "Kirish",

    loginTitle: "Hisobga kirish",
    loginBtn: "Kirish",
    needAccount: "Hisobingiz yo'qmi?",
    toRegisterLink: "Ro'yxatdan o'tish",

    navPromo: "Aksiyalar",
    navPizza: "Pitsa",
    navSushi: "Sushi",
    navDrinks: "Ichimliklar",
    navSnacks: "Gazaklar",
    navCombo: "Kombo",
    navDesserts: "Desertlar",
    navSauces: "Souslar",

    cartTitle: "Savatingiz",
    cartEmpty: "Savat bo'sh",
    cartTotalLabel: "Jami:",
    checkoutBtn: "Buyurtma berish",

    checkoutTitle: "Buyurtmani rasmiylashtirish",
    phFullName: "Ismingiz",
    phAddress: "Yetkazib berish manzili",
    payCash: "Kuryerga naqd",
    payCard: "Kuryerga karta orqali",
    toPay: "To'lov summasi:",
    confirmOrder: "Buyurtmani tasdiqlash",

    checkAddrTitle: "Yetkazib berish manzilini tekshirish",
    phAddr: "Manzil",
    checkBtn: "Tekshirish",

    chooseBtn: "Tanlash",
    addedBtn: "Qo'shildi ✓",

    deliveryTitle: "Pitsa yetkazib berish",
    deliveryP1: "Nimadir mazali va to'yimli xohlaysizmi? Istak oddiy va tushunarli, faqat muzlatgichda kerakli narsa yo'q, do'konga borishga esa erinasiz. Hammasi tugadimi? Yo'q. Arzon narxda pitsa buyurtma qilish juda oson!",
    deliveryP2: "Yordamingizga super qahramon — Куда пицца shoshiladi! Har qanday super qahramon kabi bizning ham o'z kuchlarimiz bor: saralangan ingredientlardan tayyorlangan ajoyib mazali mahsulotlar; afsonaviy, firma va klassik turlarni o'z ichiga olgan keng assortiment, vegetarianlar va eksperiment qilishni yaxshi ko'ruvchilar uchun; mazali va xushbo'y taom sovib qolmasligi uchun 30 daqiqada tezkor va bepul yetkazib berish.",
    howToOrderTitle: "Buyurtma qanday beriladi",
    howToOrderP: "«Куда пицца» dan pitsa yetkazib berish — bu qayerga borish yoki qo'ng'iroq qilish shart emasligi, chunki Internet bor. Pitsani onlayn buyurtma qilish uchun sizga yoqqan variantni va porsiyalar sonini tanlash, kerakli narsani «Savat»ga qo'yish kifoya, uzoqqa ketmang, chunki mazali pitsa allaqachon eng yaqin pitseriyadan sizga yo'l olmoqda.",
    showMore: "To'liq ko'rsatish",
    showLess: "Yashirish",

    footerAbout: "Kompaniya haqida",
    footerTerms: "Foydalanuvchi shartnomasi",
    footerWarranty: "Kafolat shartlari",
    footerCompany: "Куда пицца",
    footerHelp: "Yordam",
    footerRestaurant: "Restoran",
    footerContactsLink: "Kontaktlar",
    footerSupport: "Qo'llab-quvvatlash",
    footerTrack: "Buyurtmani kuzatish",
    footerContacts: "Kontaktlar",
    footerAddress: "Toshkent, Yunusobod tumani",
    footerCopyright: "© Copyright 2021 — Куда пицца",

    orderThanks: (name, total) => `Rahmat, ${name}! ${total} summasidagi buyurtmangiz qabul qilindi.`,
    registeredAlert: "Siz muvaffaqiyatli ro'yxatdan o'tdingiz!",
    loggedInAlert: "Siz hisobingizga muvaffaqiyatli kirdingiz!",
    currency: "so'm",

    loadingText: "Mazali narsa yuklanmoqda...",
    needLoginToOrder: "Buyurtma berish uchun ro'yxatdan o'ting yoki hisobingizga kiring",
    logoutBtn: "Chiqish",
    helloUser: (name) => `Salom, ${name}`,
    logoutConfirm: (name) => `${name} hisobidan chiqmoqchimisiz?`,
  },

  en: {
    checkAddress: "Check address",
    avgTime: "Average delivery time*: 00:24:19",
    workHours: "Working hours: 11:00 AM – 11:00 PM",
    loginAccount: "Sign in",

    regTitle: "Create an account",
    regGateNotice: "You need to sign in or sign up to use this site",
    regSubtitle: "Order faster and<br>use bonuses",
    phName: "name",
    phEmail: "email",
    phPhone: "+998",
    phPassword: "password",
    regBtn: "Sign up",
    agreeText: "By continuing, you agree to the collection and processing of personal data and the terms of use",
    haveAccount: "Already have an account?",
    toLoginLink: "Sign in",

    loginTitle: "Sign in",
    loginBtn: "Sign in",
    needAccount: "Need an account?",
    toRegisterLink: "Sign up",

    navPromo: "Deals",
    navPizza: "Pizza",
    navSushi: "Sushi",
    navDrinks: "Drinks",
    navSnacks: "Snacks",
    navCombo: "Combos",
    navDesserts: "Desserts",
    navSauces: "Sauces",

    cartTitle: "Your cart",
    cartEmpty: "Your cart is empty",
    cartTotalLabel: "Total:",
    checkoutBtn: "Checkout",

    checkoutTitle: "Checkout",
    phFullName: "Your name",
    phAddress: "Delivery address",
    payCash: "Cash to courier",
    payCard: "Card to courier",
    toPay: "To pay:",
    confirmOrder: "Confirm order",

    checkAddrTitle: "Check delivery address",
    phAddr: "Address",
    checkBtn: "Check",

    chooseBtn: "Add",
    addedBtn: "Added ✓",

    deliveryTitle: "Pizza delivery",
    deliveryP1: "Craving something tasty and filling? A simple, understandable wish — except the fridge has nothing good, and going to the store feels like too much. All lost? No. Ordering affordable pizza is really easy!",
    deliveryP2: "Куда пицца, your delivery superhero, is coming to help! Like every superhero, we have our own superpowers: delicious food made from top-quality ingredients; a wide range including legendary, signature and classic options, for vegetarians and adventurous eaters alike; fast and free delivery within 30 minutes, so your tasty, fragrant meal doesn't have time to go cold.",
    howToOrderTitle: "How to order",
    howToOrderP: "Delivery from Куда пицца means you don't need to go anywhere or call — the Internet does it all. To order pizza online, just pick your favorite option and quantity, add it to the Cart, and stay close, because delicious pizza is already on its way to you from the nearest pizzeria.",
    showMore: "Show more",
    showLess: "Show less",

    footerAbout: "About us",
    footerTerms: "Terms of use",
    footerWarranty: "Warranty terms",
    footerCompany: "Kuda Pizza",
    footerHelp: "Help",
    footerRestaurant: "Restaurant",
    footerContactsLink: "Contacts",
    footerSupport: "Support",
    footerTrack: "Track order",
    footerContacts: "Contacts",
    footerAddress: "Tashkent, Yunusabad district",
    footerCopyright: "© Copyright 2021 — Kuda Pizza",

    orderThanks: (name, total) => `Thank you, ${name}! Your order for ${total} has been placed.`,
    registeredAlert: "You have successfully signed up!",
    loggedInAlert: "You have successfully signed in!",
    currency: "sum",

    loadingText: "Loading something tasty...",
    needLoginToOrder: "Please sign up or sign in to place an order",
    logoutBtn: "Log out",
    helloUser: (name) => `Hi, ${name}`,
    logoutConfirm: (name) => `Log out of ${name}'s account?`,
  },
};

// ===============================
// PRODUCTS
// ===============================
const PRODUCTS = {
  pizza: [
    { img: "./img/image copy 6.png", price: 49000,
      name: { ru: "Маргарита", uz: "Margarita", en: "Margherita" },
      desc: { ru: "Сыр моцарелла, томатный соус, свежий базилик", uz: "Mozzarella pishlog'i, pomidor sousi, yangi rayhon", en: "Mozzarella, tomato sauce, fresh basil" } },
    { img: "./img/image copy 7.png", price: 57000,
      name: { ru: "Пепперони", uz: "Pepperoni", en: "Pepperoni" },
      desc: { ru: "Пепперони, сыр моцарелла, фирменный соус", uz: "Pepperoni, mozzarella pishlog'i, maxsus sous", en: "Pepperoni, mozzarella, signature sauce" } },
    { img: "./img/image copy 8.png", price: 69000,
      name: { ru: "Четыре сыра", uz: "To'rt pishloq", en: "Four Cheese" },
      desc: { ru: "Моцарелла, чеддер, дорблю, пармезан", uz: "Mozzarella, chedder, dor blyu, parmezan", en: "Mozzarella, cheddar, blue cheese, parmesan" } },
    { img: "./img/image copy 9.png", price: 74000,
      name: { ru: "Мясная", uz: "Go'shtli", en: "Meat Feast" },
      desc: { ru: "Говядина, курица, колбаски, сыр", uz: "Mol go'shti, tovuq, kolbasa, pishloq", en: "Beef, chicken, sausage, cheese" } },
  ],
  sushi: [
    { img: "./img/image copy 10.png", price: 82000,
      name: { ru: "Филадельфия", uz: "Filadelfiya", en: "Philadelphia" },
      desc: { ru: "Лосось, сливочный сыр, огурец", uz: "Losos, qaymoqli pishloq, bodring", en: "Salmon, cream cheese, cucumber" } },
    { img: "./img/image copy 11.png", price: 68000,
      name: { ru: "Лосось Унаги", uz: "Losos Unagi", en: "Salmon Unagi" },
      desc: { ru: "Подкопчёный лосось, сливочный сыр, соус унаги", uz: "Tutatilgan losos, qaymoqli pishloq, unagi sousi", en: "Torched salmon, cream cheese, unagi sauce" } },
    { img: "./img/image copy 12.png", price: 65000,
      name: { ru: "Сяке Маки", uz: "Syake Maki", en: "Sake Maki" },
      desc: { ru: "Свежий лосось, сливочный сыр, рис", uz: "Yangi losos, qaymoqli pishloq, guruch", en: "Fresh salmon, cream cheese, rice" } },
    { img: "./img/image copy 13.png", price: 65000,
      name: { ru: "Магуро ролл", uz: "Maguro roll", en: "Maguro Roll" },
      desc: { ru: "Лосось, сливочный сыр, авокадо", uz: "Losos, qaymoqli pishloq, avokado", en: "Salmon, cream cheese, avocado" } },
  ],
  napitki: [
    { img: "./img/image copy 22.png", price: 18000,
      name: { ru: "Adrenaline Game Fuel", uz: "Adrenaline Game Fuel", en: "Adrenaline Game Fuel" },
      desc: { ru: "Энергетический напиток, 0.5 л", uz: "Energetik ichimlik, 0.5 l", en: "Energy drink, 0.5 L" } },
    { img: "./img/image copy 23.png", price: 12000,
      name: { ru: "Pepsi Max", uz: "Pepsi Max", en: "Pepsi Max" },
      desc: { ru: "Без сахара, 0.33 л", uz: "Shakarsiz, 0.33 l", en: "Sugar-free, 0.33 L" } },
    { img: "./img/image copy 24.png", price: 12000,
      name: { ru: "Pepsi", uz: "Pepsi", en: "Pepsi" },
      desc: { ru: "Классическая, 0.33 л", uz: "Klassik, 0.33 l", en: "Classic, 0.33 L" } },
    { img: "./img/image copy 25.png", price: 13000,
      name: { ru: "Pepsi Wild Cherry", uz: "Pepsi Wild Cherry", en: "Pepsi Wild Cherry" },
      desc: { ru: "Со вкусом вишни, 0.33 л", uz: "Olcha ta'mida, 0.33 l", en: "Cherry flavor, 0.33 L" } },
  ],
  zakuski: [
    { img: "./img/image copy 14.png", price: 22000,
      name: { ru: "Картофель фри", uz: "Fri kartoshka", en: "French Fries" },
      desc: { ru: "Хрустящий картофель фри с солью", uz: "Xrustik fri kartoshka, tuz bilan", en: "Crispy fries with salt" } },
    { img: "./img/image copy 15.png", price: 35000,
      name: { ru: "Куриные крылья", uz: "Tovuq qanotlari", en: "Chicken Wings" },
      desc: { ru: "Острые куриные крылья, 6 шт", uz: "Achchiq tovuq qanotlari, 6 dona", en: "Spicy chicken wings, 6 pcs" } },
    { img: "./img/image copy 16.png", price: 28000,
      name: { ru: "Наггетсы", uz: "Nagetslar", en: "Nuggets" },
      desc: { ru: "Хрустящие куриные наггетсы, 8 шт", uz: "Xrustik tovuq nagetslari, 8 dona", en: "Crispy chicken nuggets, 8 pcs" } },
    { img: "./img/image copy 17.png", price: 30000,
      name: { ru: "Ролл с курицей", uz: "Tovuqli rulet", en: "Chicken Wrap" },
      desc: { ru: "Лаваш с курицей и овощами", uz: "Tovuq va sabzavotli lavash", en: "Flatbread with chicken and vegetables" } },
  ],
  combo: [
    { img: "./img/image copy 30.png", price: 129000,
      name: { ru: "Комбо Дуо −22%", uz: "Kombo Duo −22%", en: "Duo Combo −22%" },
      desc: { ru: "2 пиццы на выбор со скидкой", uz: "Tanlov bo'yicha 2 ta pitsa, chegirma bilan", en: "2 pizzas of your choice, discounted" } },
    { img: "./img/image copy 31.png", price: 159000,
      name: { ru: "Комбо Семейное −18%", uz: "Oilaviy kombo −18%", en: "Family Combo −18%" },
      desc: { ru: "2 пиццы + закуска", uz: "2 ta pitsa + gazak", en: "2 pizzas + a snack" } },
    { img: "./img/image copy 32.png", price: 99000,
      name: { ru: "Комбо с напитком −10%", uz: "Ichimlikli kombo −10%", en: "Combo with Drink −10%" },
      desc: { ru: "Пицца + напиток 1 л", uz: "Pitsa + 1 l ichimlik", en: "Pizza + 1 L drink" } },
    { img: "./img/image copy 33.png", price: 89000,
      name: { ru: "Пицца-роллы −15%", uz: "Pitsa-rulolar −15%", en: "Pizza Rolls −15%" },
      desc: { ru: "Пицца + роллы с начинкой", uz: "Pitsa + ichlikli rulolar", en: "Pizza + filled rolls" } },
  ],
  desserts: [
    { img: "./img/image copy 18.png", price: 19000,
      name: { ru: "Донатсы", uz: "Donatslar", en: "Donut Bites" },
      desc: { ru: "Жареные пончики с сахарной пудрой", uz: "Qandli qovurilgan donatslar", en: "Fried donut bites with powdered sugar" } },
    { img: "./img/image copy 19.png", price: 21000,
      name: { ru: "Сладкие роллы", uz: "Shirin rulolar", en: "Sweet Rolls" },
      desc: { ru: "Роллы с ягодной начинкой", uz: "Meva ichakli rulolar", en: "Rolls with berry filling" } },
    { img: "./img/image copy 20.png", price: 17000,
      name: { ru: "Оладьи", uz: "Оladi", en: "Pancakes" },
      desc: { ru: "Домашние оладьи, 3 шт", uz: "Uy oladi, 3 dona", en: "Homestyle pancakes, 3 pcs" } },
    { img: "./img/image copy 21.png", price: 15000,
      name: { ru: "Мороженое Магнат", uz: "Magnat murojame", en: "Magnat Ice Cream" },
      desc: { ru: "Шоколадное мороженое на палочке", uz: "Tayoqchadagi shokoladli murojame", en: "Chocolate ice cream bar" } },
  ],
  sauces: [
    { img: "./img/image copy 26.png", price: 8000,
      name: { ru: "Чесночный соус", uz: "Sarimsoqli sous", en: "Garlic Sauce" },
      desc: { ru: "Фирменный соус, 30 г", uz: "Maxsus sous, 30 g", en: "Signature sauce, 30 g" } },
    { img: "./img/image copy 27.png", price: 8000,
      name: { ru: "Соус BBQ", uz: "BBQ sousi", en: "BBQ Sauce" },
      desc: { ru: "Фирменный соус, 30 г", uz: "Maxsus sous, 30 g", en: "Signature sauce, 30 g" } },
    { img: "./img/image copy 28.png", price: 7000,
      name: { ru: "Сметанный соус", uz: "Smetana sousi", en: "Sour Cream Sauce" },
      desc: { ru: "Фирменный соус, 30 г", uz: "Maxsus sous, 30 g", en: "Signature sauce, 30 g" } },
    { img: "./img/image copy 29.png", price: 9000,
      name: { ru: "Ягодный соус", uz: "Rezavor sous", en: "Berry Sauce" },
      desc: { ru: "Фирменный соус, 30 г", uz: "Maxsus sous, 30 g", en: "Signature sauce, 30 g" } },
  ],
};

const CATEGORY_LABEL_KEY = {
  pizza: "navPizza", sushi: "navSushi", napitki: "navDrinks",
  zakuski: "navSnacks", combo: "navCombo", desserts: "navDesserts", sauces: "navSauces",
};

let currentLang = localStorage.getItem("lang") || "ru";

function t(key) {
  return I18N[currentLang][key] ?? I18N.ru[key] ?? key;
}

function formatPrice(num) {
  return num.toLocaleString("ru-RU") + " " + t("currency");
}

// ---- render product grids ----
function renderProducts() {
  Object.keys(PRODUCTS).forEach((cat) => {
    const grid = document.getElementById("grid-" + cat);
    if (!grid) return;
    grid.innerHTML = PRODUCTS[cat]
      .map(
        (p) => `
      <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
        <div class="flex justify-center pt-2 sm:pt-4 m-2 sm:m-4">
          <img src="${p.img}" class="w-full max-w-[140px] sm:max-w-none sm:w-56 lg:w-64 aspect-square object-contain hover:scale-105 transition">
        </div>
        <div class="px-3 sm:px-6 pb-3 sm:pb-6">
          <h2 class="text-sm sm:text-[18px] font-semibold">${p.name[currentLang]}</h2>
          <p class="text-gray-500 text-xs sm:text-[15px] mt-1 sm:mt-3 leading-5 sm:leading-6 h-10 sm:h-16 overflow-hidden">${p.desc[currentLang]}</p>
          <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 mt-3 sm:mt-6">
            <button data-price="${p.price}" data-name="${p.name[currentLang].replace(/"/g, '&quot;')}" data-img="${p.img}"
              class="choose-btn bg-[#FF7010] hover:bg-orange-600 active:bg-orange-600 text-white text-xs sm:text-base px-3 sm:px-6 py-2 sm:py-3 rounded-xl order-2 sm:order-1">
              ${t("chooseBtn")}
            </button>
            <span class="text-[#FF7010] text-sm sm:text-2xl font-semibold order-1 sm:order-2">${formatPrice(p.price)}</span>
          </div>
        </div>
      </div>`
      )
      .join("");
  });
}

// ---- apply static translations ----
function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  document.documentElement.lang = currentLang;
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = currentLang;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyStaticTranslations();
  renderProducts();
  renderCart();
  if (typeof updateAuthUI === "function") updateAuthUI();
}

// ===============================
// AUTH (register / login)
// ===============================
const AUTH_KEY = "kuda_pizza_user";
let currentUser = null;
try {
  currentUser = JSON.parse(localStorage.getItem(AUTH_KEY));
} catch {
  currentUser = null;
}

// Foydalanuvchi tizimga kirmagan bo'lsa, sayt bilan ishlashni bloklovchi "gate" holati
let authGateActive = false;

function updateAuthUI() {
  const authLabel = document.getElementById("authLabel");
  if (!authLabel) return;
  if (currentUser) {
    authLabel.removeAttribute("data-i18n");
    authLabel.textContent = t("helloUser")(currentUser.name);
  } else {
    authLabel.setAttribute("data-i18n", "loginAccount");
    authLabel.textContent = t("loginAccount");
  }
}

function loginUser(user) {
  currentUser = user;
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  updateAuthUI();
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem(AUTH_KEY);
  updateAuthUI();
}

// ===============================
// PAGE LOADER
// ===============================
function hidePageLoader() {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;
  loader.classList.add("hide");
  setTimeout(() => loader.remove(), 600);
}

function initPageLoader() {
  const minDelay = new Promise((resolve) => setTimeout(resolve, 1200));
  const pageReady = new Promise((resolve) => {
    if (document.readyState === "complete") resolve();
    else window.addEventListener("load", resolve, { once: true });
  });
  Promise.all([minDelay, pageReady]).then(hidePageLoader);
}

// ===============================
// LOGIN GATE — sayt faqat tizimga kirgandan keyin ochiladi
// ===============================
function showModal(modal) {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}
function hideModal(modal) {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function setGateCloseButtonsVisible(visible) {
  const closeModal = document.getElementById("closeModal");
  const closeLoginModal = document.getElementById("closeLoginModal");
  [closeModal, closeLoginModal].forEach((btn) => {
    if (!btn) return;
    btn.classList.toggle("hidden", !visible);
  });
}

function initAuthGate() {
  const registerModal = document.getElementById("registerModal");
  const regGateNotice = document.getElementById("regGateNotice");
  const loginGateNotice = document.getElementById("loginGateNotice");

  if (currentUser) {
    authGateActive = false;
    return;
  }

  authGateActive = true;
  regGateNotice?.classList.remove("hidden");
  loginGateNotice?.classList.remove("hidden");
  setGateCloseButtonsVisible(false);
  showModal(registerModal);
}

function releaseAuthGate() {
  authGateActive = false;
  document.getElementById("regGateNotice")?.classList.add("hidden");
  document.getElementById("loginGateNotice")?.classList.add("hidden");
  setGateCloseButtonsVisible(true);
}

document.addEventListener("DOMContentLoaded", () => {
  initPageLoader();
  applyStaticTranslations();
  renderProducts();
  updateAuthUI();
  initAuthGate();

  const langSelect = document.getElementById("langSelect");
  langSelect?.addEventListener("change", (e) => setLanguage(e.target.value));

  // toggle "show more" text
  const textBox = document.getElementById("textBox");
  const fade = document.getElementById("fade");
  const btn = document.getElementById("toggleBtn");
  let open = false;
  btn?.addEventListener("click", () => {
    open = !open;
    if (open) {
      textBox.classList.remove("max-h-52");
      textBox.classList.add("max-h-[1000px]");
      fade.classList.add("hidden");
      btn.textContent = t("showLess");
    } else {
      textBox.classList.remove("max-h-[1000px]");
      textBox.classList.add("max-h-52");
      fade.classList.remove("hidden");
      btn.textContent = t("showMore");
    }
  });

  // section active-state observers
  const sectionIds = ["aksiyalar", "pizza", "sushi", "napitki", "zakuski", "combo", "desserts", "sauces"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll(".nav-link");
  const cards = document.querySelectorAll(".category-card");

  const setActive = (id) => {
    navLinks.forEach((link) => link.classList.toggle("active", link.dataset.target === id));
    cards.forEach((card) => card.classList.toggle("active", card.dataset.target === id));
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
    { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );
  sections.forEach((section) => sectionObserver.observe(section));

  const categoriesSection = document.getElementById("categoriesSection");
  const stickyHeader = document.getElementById("stickyHeader");
  if (categoriesSection && stickyHeader) {
    const headerObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          stickyHeader.classList.toggle("header-scrolled", !entry.isIntersecting && entry.boundingClientRect.top < 0);
        }),
      { root: null, threshold: 0 }
    );
    headerObserver.observe(categoriesSection);
  }

  // mobile sidebar
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
  document.querySelectorAll(".sidebar-link").forEach((link) => link.addEventListener("click", closeSidebar));

  // auth modals
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const closeLoginModal = document.getElementById("closeLoginModal");
  const registerModal = document.getElementById("registerModal");
  const loginModal = document.getElementById("loginModal");
  const toLogin = document.getElementById("toLogin");
  const toRegister = document.getElementById("toRegister");

  openModal?.addEventListener("click", () => {
    if (currentUser) {
      if (confirm(t("logoutConfirm")(currentUser.name))) {
        logoutUser();
        initAuthGate(); // chiqqandan keyin sayt yana bloklanadi
      }
    } else {
      showModal(registerModal);
    }
  });

  // Gate faol bo'lganda register/login oynasini yopib bo'lmaydi
  closeModal?.addEventListener("click", () => {
    if (authGateActive) return;
    hideModal(registerModal);
  });
  closeLoginModal?.addEventListener("click", () => {
    if (authGateActive) return;
    hideModal(loginModal);
  });
  toLogin?.addEventListener("click", () => {
    hideModal(registerModal);
    showModal(loginModal);
  });
  toRegister?.addEventListener("click", () => {
    hideModal(loginModal);
    showModal(registerModal);
  });
  registerModal?.addEventListener("click", (e) => {
    if (authGateActive) return;
    if (e.target === registerModal) hideModal(registerModal);
  });
  loginModal?.addEventListener("click", (e) => {
    if (authGateActive) return;
    if (e.target === loginModal) hideModal(loginModal);
  });

  const registerForm = document.getElementById("registerForm");
  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    if (!name || !email) return;
    loginUser({ name, email });
    releaseAuthGate();
    hideModal(registerModal);
    registerForm.reset();
    alert(t("registeredAlert"));
    if (window.cart && window.cart.length > 0) showModal(document.getElementById("checkoutModal"));
  });

  const loginForm = document.getElementById("loginForm");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    if (!email) return;
    const displayName = email.split("@")[0] || email;
    loginUser({ name: displayName, email });
    releaseAuthGate();
    hideModal(loginModal);
    loginForm.reset();
    alert(t("loggedInAlert"));
    if (window.cart && window.cart.length > 0) showModal(document.getElementById("checkoutModal"));
  });

  // dark mode
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
  if (localStorage.getItem("theme") === "dark") enableDark();
  themeBtn?.addEventListener("click", () => {
    document.body.classList.contains("dark") ? disableDark() : enableDark();
  });

  // cart
  const CART_KEY = "kuda_pizza_cart";
  window.cart = loadCart();
  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  }
  window.saveCart = () => localStorage.setItem(CART_KEY, JSON.stringify(window.cart));

  document.addEventListener("click", (e) => {
    const chooseBtn = e.target.closest(".choose-btn");
    if (!chooseBtn) return;
    const name = chooseBtn.dataset.name;
    const price = parseInt(chooseBtn.dataset.price, 10);
    const img = chooseBtn.dataset.img;
    addToCart({ name, price, img });
    const original = chooseBtn.textContent;
    chooseBtn.textContent = t("addedBtn");
    setTimeout(() => (chooseBtn.textContent = original), 800);
  });

  document.addEventListener("click", (e) => {
    const actionBtn = e.target.closest("[data-action]");
    if (!actionBtn) return;
    const index = parseInt(actionBtn.dataset.index, 10);
    const action = actionBtn.dataset.action;
    if (action === "inc") changeQty(index, 1);
    if (action === "dec") changeQty(index, -1);
    if (action === "remove") removeItem(index);
  });

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

  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckout = document.getElementById("closeCheckout");
  const checkoutForm = document.getElementById("checkoutForm");

  checkoutBtn?.addEventListener("click", () => {
    if (window.cart.length === 0) return;
    closeCartDrawer();
    if (!currentUser) {
      alert(t("needLoginToOrder"));
      showModal(registerModal);
      return;
    }
    const nameInput = document.getElementById("checkoutName");
    if (nameInput && !nameInput.value) nameInput.value = currentUser.name;
    showModal(checkoutModal);
  });
  closeCheckout?.addEventListener("click", () => hideModal(checkoutModal));
  checkoutModal?.addEventListener("click", (e) => e.target === checkoutModal && hideModal(checkoutModal));

  checkoutForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const order = {
      name: document.getElementById("checkoutName").value,
      phone: document.getElementById("checkoutPhone").value,
      address: document.getElementById("checkoutAddress").value,
      payment: document.getElementById("checkoutPayment").value,
      items: window.cart,
      total: cartTotal(),
    };
    console.log("Новый заказ:", order);
    alert(t("orderThanks")(order.name, formatPrice(order.total)));
    window.cart = [];
    window.saveCart();
    renderCart();
    hideModal(checkoutModal);
    checkoutForm.reset();
  });

  renderCart();
});

function cartTotal() {
  return window.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}
function cartCount() {
  return window.cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(product) {
  const existing = window.cart.find((item) => item.name === product.name && item.price === product.price);
  if (existing) existing.qty += 1;
  else window.cart.push({ ...product, qty: 1 });
  window.saveCart();
  renderCart();
}
function changeQty(index, delta) {
  window.cart[index].qty += delta;
  if (window.cart[index].qty <= 0) window.cart.splice(index, 1);
  window.saveCart();
  renderCart();
}
function removeItem(index) {
  window.cart.splice(index, 1);
  window.saveCart();
  renderCart();
}

function renderCart() {
  const cartTotalText = document.getElementById("cartTotalText");
  const cartCountBadge = document.getElementById("cartCountBadge");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutTotal = document.getElementById("checkoutTotal");
  if (!cartTotalText) return;

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
  if (checkoutBtn) checkoutBtn.disabled = window.cart.length === 0;

  if (window.cart.length === 0) {
    cartItemsList.innerHTML = `<p id="cartEmptyMsg" class="text-gray-500 text-center mt-10">${t("cartEmpty")}</p>`;
    return;
  }

  cartItemsList.innerHTML = window.cart
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
            <button data-action="remove" data-index="${i}" class="ml-auto text-red-500 text-sm hover:underline">✕</button>
          </div>
        </div>
      </div>`
    )
    .join("");
}

const logoButton = document.getElementById("logo-btn");
logoButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


