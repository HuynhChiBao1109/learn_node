const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const superagent = require('superagent');

const reafFilePro = file => {
  return new Promise((resolve, rejects) => {
    fs.readFile(file, (err, data) => {
      if (err) rejects("Ngu vailon");
      resolve(data);
    });
  });
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, rejects) => {
    fs.writeFile(file, data, err => {
      if (err) rejects("Can't write");
      resolve("Sucess");
    })
  })
}

const getDogPic = async () => {
  try {
    const data = await reafFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1 = await superagent.get(
      `https://dog.ceo/api/${data}/image/random`
    )

    const res2 = await superagent.get(
      `https://dog.ceo/api/${data}/image/random`
    )

    const res3 = await superagent.get(
      `https://dog.ceo/api/${data}/image/random`
    )

    const all = await Promise.all([res1, res2, res3]);
    const imgs = all.map(el => el.body.message);
    console.log(imgs);

    await writeFilePro(`dog-img.txt`, imgs.join('\n'));
    console.log(`Random dog saved`);

  } catch (err) {
    console.log(err);
  }
  return `2: Ready 😥`;
}

(async () => {
  try {
    console.log("1: Ready");
    const x = await getDogPic();
    console.log(x);
    console.log("3: Done");
  } catch (err) {
    console.log(err);
  }
})();
// console.log("1");
// getDogPic().then(x => {
//   console.log(x);
//   console.log("3: Done")
// }).catch(err => {
//   console.log(err);
// })
// console.log("2");