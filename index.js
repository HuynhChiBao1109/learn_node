const fs = require("fs");
const superagent = require("superagent");

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Husky: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breeds/${data}/images/random`)
    .end((err, res) => {
      if (err) console.log(err.message);
      console.log(res.body.message);

      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        console.log("random dog ");
      });
    });
});
