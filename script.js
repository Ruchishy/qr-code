const generateBtn = document.getElementById('generateBtn');
const qrInput = document.getElementById('qrInput');
const qrCodeDiv = document.getElementById('qrCode');
const downloadLink = document.getElementById('downloadLink');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
    const inputValue = qrInput.value;
    if (inputValue.trim() === '') {
        alert('Please enter a message or URL.');
        return;
    }

    const qrCode = new QRCode(qrCodeDiv, {
        text: inputValue,
        width: 200,
        height: 200,
    });

    qrCode.makeCode(inputValue);
    downloadLink.href = qrCodeDiv.firstChild.toDataURL('image/png');
    downloadLink.download = 'qrcode.png';
    downloadLink.style.display = 'block';
}
