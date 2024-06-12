const list = [
  { lang: "nodejs" },
  { lang: "golang" },
  { lang: "php" },
  { lang: "nodejs" },
  { lang: "php" },
  { lang: "php" },
];

const getLanguageFrequency = (lst) => {
  let res = {};
  for (let i = 0; i < lst.length; i++) {
    const lang = lst[i].lang;
    // if the language already exist as a key, accumulate
    if (lang in res) {
      res[lang] += 1;
    } else {
      res[lang] = 1;
    }
  }
  return res;
};

console.log(getLanguageFrequency(list));
