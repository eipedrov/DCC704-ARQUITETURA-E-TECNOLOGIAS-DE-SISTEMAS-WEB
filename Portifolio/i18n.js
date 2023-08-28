changeLanguage('pt_BR')

function changeLanguage(lang) {
  fetch(`./i18n/${lang}/content.json`)
    .then((response) => response.json())
    .then((translations) => {
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
          element.textContent = translations[key];
        }
      });
    });
}
