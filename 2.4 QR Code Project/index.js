/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([
    {   
        type: 'input',
        message: 'Type in the URL you would like to turn into a QR code: ',
        name: 'URL',
    }])
    .then(function(answer){
        // console.log(answer);
        fs.writeFile('url.txt', answer.URL, function(err){
            if (err) throw err;
            console.log('URL saved as url.txt');
        });
        var qr_svg = qr.image(answer.URL, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('qr.png'));
        //console.log('QR code saved as qr.svg');
        });


