function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

function generateRef() {
  return "TRX" + Math.floor(Math.random() * 1000000000);
}

function mulaiTransfer() {
  let rekening = document.getElementById("rekening").value;
  let nominal = document.getElementById("nominal").value;

  if (!rekening || !nominal) {
    alert("Isi dulu!");
    return;
  }

  document.getElementById("popup").style.display = "block";
  let loadingText = document.getElementById("loadingText");

  loadingText.innerText = "Menghubungi server...";

  setTimeout(() => {
    loadingText.innerText = "Verifikasi rekening...";

    setTimeout(() => {
      loadingText.innerText = "Mengirim dana...";

      setTimeout(() => {
        selesaiTransfer(rekening, nominal);
      }, 1200);

    }, 1200);

  }, 1200);
}

function selesaiTransfer(rekening, nominal) {
  let ref = generateRef();
  let waktu = new Date().toLocaleString();

  let data = { rekening, nominal, ref, waktu };

  let riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];
  riwayat.unshift(data);
  localStorage.setItem("riwayat", JSON.stringify(riwayat));

  tampilkanStruk(data, riwayat);

  // 🔊 SUARA SUKSES
  let audio = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
  audio.play();
}

function tampilkanStruk(data, riwayat) {
  document.getElementById("popup").style.display = "none";
  document.getElementById("pageForm").style.display = "none";
  document.getElementById("pageStruk").style.display = "block";

  document.getElementById("strukDetail").innerHTML = `
    <div class="receipt">
      <h3>BUKTI TRANSFER</h3>
      <hr>

      <p><b>Status:</b> BERHASIL</p>
      <p><b>Dari:</b> CEO Sultan Global</p>
      <p><b>Ke Rekening:</b> ${data.rekening}</p>
      <p><b>Nominal:</b> ${formatRupiah(data.nominal)}</p>
      <p><b>No Referensi:</b> ${data.ref}</p>
      <p><b>Waktu:</b> ${data.waktu}</p>

      <hr>
      <p style="font-size:12px;">Transaksi berhasil diproses</p>
    </div>
  `;

  let html = "";
  riwayat.slice(0,5).forEach(r => {
    html += `
      <div class="history-item">
        <b>${formatRupiah(r.nominal)}</b><br>
        <small>${r.rekening}</small>
      </div>
    `;
  });

  document.getElementById("riwayat").innerHTML = html;
}
