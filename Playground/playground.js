const data = async () => {
  await fetch("https://youtube.com")
    .then((html) => {
      html.text().then((text) => {
        return text;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
console.log(
  data().then((res) => {
    return res;
  })
);
