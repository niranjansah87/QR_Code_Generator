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




  function htmlEncode(value) {
    return $('<div/>').text(value)
      .html();
  }

  $(function () {

    // Specify an onclick function
    // for the generate button
    $('#generate').click(function () {

      // Generate the link that would be
      // used to generate the QR Code
      // with the given data 
      let finalURL =
'https://chart.googleapis.com/chart?cht=qr&chl=' +
        htmlEncode($('#content').val()) +
        '&chs=160x160&chld=L|0'

      // Replace the src of the image with
      // the QR code image
      $('.qr-code').attr('src', finalURL);
    });
  });