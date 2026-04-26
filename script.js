// ==============================
// FORMAT RUPIAH
// ==============================
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

// ==============================
// SALDO (LOCAL STORAGE)
// ==============================
let saldo = localStorage.getItem("saldo");

if (!saldo) {
  saldo = 999999999;
  localStorage.setItem("saldo", saldo);
} else {
  saldo = parseInt(saldo);
}

updateSaldo();

// tampilkan saldo
function updateSaldo() {
  document.getElementById("saldo").innerText = formatRupiah(saldo);
}

// ==============================
// GENERATE REF
// ==============================
function generateRef() {
  return "TRX" + Math.floor(Math.random() * 1000000000);
}

// ==============================
// UNLOCK AUDIO (BIAR PASTI BUNYI)
// ==============================
document.body.addEventListener("click", () => {
  let audio = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
  audio.play().catch(()=>{});
}, { once: true });

// ==============================
// MULAI TRANSFER
// ==============================
function mulaiTransfer() {
  let rekening = document.getElementById("rekening").value;
  let nama = document.getElementById("nama").value;
  let bank = document.getElementById("bank").value;
  let nominal = parseInt(document.getElementById("nominal").value);

  if (!rekening || !nama || !nominal) {
    alert("Lengkapi semua data!");
    return;
  }

  if (nominal > saldo) {
    alert("Saldo tidak cukup 😄");
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
        selesaiTransfer(rekening, nama, bank, nominal);
      }, 1200);

    }, 1200);

  }, 1200);
}

// ==============================
// SELESAI TRANSFER
// ==============================
function selesaiTransfer(rekening, nama, bank, nominal) {

  // kurangi saldo
  saldo -= nominal;
  localStorage.setItem("saldo", saldo);
  updateSaldo();

  let ref = generateRef();
  let waktu = new Date().toLocaleString();

  let data = {
    rekening,
    nama,
    bank,
    nominal,
    ref,
    waktu
  };

  // simpan riwayat
  let riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];
  riwayat.unshift(data);
  localStorage.setItem("riwayat", JSON.stringify(riwayat));

  tampilkanStruk(data, riwayat);

  // 🔊 SUARA SUKSES (FIX)
  let audio = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
  audio.play().catch(()=>{});
}

// ==============================
// TAMPILKAN STRUK
// ==============================
function tampilkanStruk(data, riwayat) {

  document.getElementById("popup").style.display = "none";
  document.getElementById("pageForm").classList.add("hidden");
  document.getElementById("pageStruk").classList.remove("hidden");

  document.getElementById("strukDetail").innerHTML = `
    <div class="receipt">
      <h3>BUKTI TRANSFER</h3>
      <hr>

      <p><b>Status:</b> BERHASIL</p>
      <p><b>Dari:</b> CEO Sultan Global</p>
      <p><b>Ke:</b> ${data.nama}</p>
      <p><b>Bank:</b> ${data.bank}</p>
      <p><b>Rekening:</b> ${data.rekening}</p>
      <p><b>Nominal:</b> ${formatRupiah(data.nominal)}</p>
      <p><b>No Ref:</b> ${data.ref}</p>
      <p><b>Waktu:</b> ${data.waktu}</p>

      <hr>
      <small>Simulasi CEO 😄</small>
    </div>
  `;

  // tampilkan riwayat
  let html = "";
  riwayat.slice(0,5).forEach(r => {
    html += `
      <div class="history-item">
        <b>${formatRupiah(r.nominal)}</b><br>
        <small>${r.nama} - ${r.bank}</small>
      </div>
    `;
  });

  document.getElementById("riwayat").innerHTML = html;
}
