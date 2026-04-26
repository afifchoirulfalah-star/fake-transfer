function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

function generateRef() {
  return "TRX" + Math.floor(Math.random() * 1000000000);
}

function prosesTransfer() {
  let bank = document.getElementById("bank").value;
  let rekening = document.getElementById("rekening").value;
  let nominal = document.getElementById("nominal").value;
  let status = document.getElementById("status");

  if (!rekening || !nominal) {
    status.innerHTML = "Lengkapi data terlebih dahulu";
    return;
  }

  status.innerHTML = "Menghubungi server...";

  setTimeout(() => {
    status.innerHTML = "Verifikasi rekening...";

    setTimeout(() => {
      let ref = generateRef();
      tampilkanPopup(bank, rekening, nominal, ref);
      status.innerHTML = "";
    }, 1500);

  }, 1500);
}

function tampilkanPopup(bank, rekening, nominal, ref) {
  let popup = document.getElementById("popup");
  let text = document.getElementById("popupText");

  text.innerHTML = `
    Transfer ke ${bank}<br>
    Rekening: ${rekening}<br><br>
    Nominal: <b>${formatRupiah(nominal)}</b><br><br>
    No. Referensi: ${ref}<br><br>
    Status: <b>BERHASIL</b><br>
    <small>Simulasi CEO 😄</small>
  `;

  popup.style.display = "block";

  // suara (opsional)
  new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3").play();
}

function tutupPopup() {
  document.getElementById("popup").style.display = "none";
}
