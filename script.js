const data = {
  zh: {
    title: "中俄翻译｜国际交流",
    about: "专注高校合作与国际交流翻译"
  },
  ru: {
    title: "Переводчик китайский-русский",
    about: "Специалист по международным проектам"
  }
};

function setLang(lang) {
  document.getElementById("title").innerText = data[lang].title;
  document.getElementById("about").innerText = data[lang].about;
}
