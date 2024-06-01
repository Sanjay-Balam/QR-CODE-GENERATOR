# END TO END QR CODE GENERATOR
## Technologies used 
- NodeJs
- Express
- ejs
## Creating Backend
- Create new folder backend and install required dependencies
```sh
npm install express
npm install cors
npm install qrcode
npm install ejs
```
- QRcode.toDataURL -> it generates a long string which represents the QRcode 
- Initially we render the index.ejs file which returns the input url to nodejs(backend)
- Process the input url to generate the long string(QR code string) now render the generate-qr.ejs file 
- generate-qr.ejs file displays the QR Code in the web page
