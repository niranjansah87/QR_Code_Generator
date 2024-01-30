function generateQRCode() {
    var url = document.getElementById("urlInput").value;
    var qrcodeDiv = document.getElementById("qrcode");

    // Clear previous QR code
    qrcodeDiv.innerHTML = "";

    // Generate new QR code
    var qrcode = new QRCode(qrcodeDiv, {
      text: url,
      width: 128,
      height: 128,
    });
  }