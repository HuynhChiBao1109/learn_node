const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("failed");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("could not write file");
      resolve("success");
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Husky: ${data}`);

    return superagent.get(`https://dog.ceo/api/breeds/${data}/image/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro("dog-img.txt", res.body.message);
  })
  .then(() => {
    console.log("Random dog");
  })
  .catch((err) => {
    console.log(err.message);
  });
