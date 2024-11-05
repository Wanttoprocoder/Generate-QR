const qrtext = document.getElementById('qr-input');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');
let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
})
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput();
    generateQRcode();
})

downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr =img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`)
    }
    
    
})

function isEmptyInput(){
    if(qrtext.value.length >0){
        generateQRcode();
        }
        else{
            alert("Enter the text or URL to generate your QR code");
        }
}

function generateQRcode(){
    qrContainer.innerHTML= "";
    new QRCode (qrContainer,{
        text:qrtext.value,
        hieght: size,
        width: size,
        colorlight:"#fff",
        colordark:"#000"
    })
}
