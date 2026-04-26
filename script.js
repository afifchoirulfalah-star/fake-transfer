function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

function prosesTransfer() {
  let rekening = document.getElementById("rekening").value;
  let nominal = document.getElementById("nominal").value;
  let status = document.getElementById("status");

  if (!rekening || !nominal) {
    status.innerHTML = "⚠️ Isi semua data terlebih dahulu!";
    return;
  }

  // STEP 1: Loading
  status.innerHTML = "⏳ Menghubungi server CEO...";

  setTimeout(() => {
    // STEP 2: Verifikasi
    status.innerHTML = "🔐 Memverifikasi rekening...";

    setTimeout(() => {
      // STEP 3: Transfer berhasil
      tampilkanPopup(nominal);
      status.innerHTML = "";
    }, 1500);

  }, 1500);
}

function tampilkanPopup(nominal) {
  let popup = document.getElementById("popup");
  let popupText = document.getElementById("popupText");

  popupText.innerHTML =
    "Uang sebesar <b>" + formatRupiah(nominal) +
    "</b> telah berhasil ditransfer oleh <b>CEO Sultan Global</b> 💼";

  popup.style.display = "block";
}

function tutupPopup() {
  document.getElementById("popup").style.display = "none";
}
