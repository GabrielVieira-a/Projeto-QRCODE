import inquirer from "inquirer";
import qrcode from "qr-image";
import fs from "fs";

const answer = await inquirer.prompt([
{
    type: "input",
    name: "url",
    message: "Digite uma URL:",
    }
])

console.log(answer.url);

const qr = qrcode.image(answer.url, { type: 'png' });
qr.pipe(fs.createWriteStream('QRCode.png'));

fs.writeFile('url.txt', answer.url, (err) => {
    if (err) throw err;
    console.log('URL salva em url.txt');
});
