const SALDO_KEY = "ceoBankSaldo";
const RIWAYAT_KEY = "ceoBankRiwayat";
const SALDO_AWAL = 199999999999;

let saldo = Number(localStorage.getItem(SALDO_KEY)) || SALDO_AWAL;

const saldoEl = document.getElementById("saldo");
const statusEl = document.getElementById("status");
const popupEl = document.getElementById("popup");
const loadingTextEl = document.getElementById("loadingText");
const pageTransferEl = document.getElementById("pageTransfer");
const pageStrukEl = document.getElementById("pageStruk");
const rekeningEl = document.getElementById("rekening");
const namaEl = document.getElementById("nama");
const bankEl = document.getElementById("bank");
const nominalEl = document.getElementById("nominal");
const jamHeaderEl = document.getElementById("jamHeader");

updateSaldo();
updateJamHeader();
setInterval(updateJamHeader, 30000);

rekeningEl.addEventListener("input", () => {
  rekeningEl.value = rekeningEl.value.replace(/\D/g, "").slice(0, 20);
});

nominalEl.addEventListener("input", () => {
  statusEl.textContent = "";
});

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(angka).replace("Rp", "Rp ");
}

function updateSaldo() {
  saldoEl.textContent = formatRupiah(saldo);
  localStorage.setItem(SALDO_KEY, String(saldo));
}

function updateJamHeader() {
  jamHeaderEl.textContent = new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function generateRef() {
  const tanggal = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const acak = Math.floor(100000 + Math.random() * 900000);
  return `SIM-${tanggal}-${acak}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRiwayat() {
  try {
    return JSON.parse(localStorage.getItem(RIWAYAT_KEY)) || [];
  } catch {
    return [];
  }
}

function simpanRiwayat(data) {
  const riwayat = getRiwayat();
  riwayat.unshift(data);
  localStorage.setItem(RIWAYAT_KEY, JSON.stringify(riwayat.slice(0, 10)));
}

function tampilStatus(pesan) {
  statusEl.textContent = pesan;
}

function validasiForm() {
  const rekening = rekeningEl.value.trim();
  const nama = namaEl.value.trim();
  const bank = bankEl.value;
  const nominal = Number(nominalEl.value);

  if (rekening.length < 6) {
    rekeningEl.focus();
    tampilStatus("Nomor rekening minimal 6 digit.");
    return null;
  }

  if (nama.length < 2) {
    namaEl.focus();
    tampilStatus("Nama penerima perlu diisi.");
    return null;
  }

  if (!Number.isFinite(nominal) || nominal < 1000) {
    nominalEl.focus();
    tampilStatus("Nominal minimal Rp 1.000.");
    return null;
  }

  if (nominal > saldo) {
    nominalEl.focus();
    tampilStatus("Saldo tidak cukup (gak sah serakah)");
    return null;
  }

  return { rekening, nama, bank, nominal };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mulaiTransfer() {
  const dataForm = validasiForm();

  if (!dataForm) {
    return;
  }

  tampilStatus("");
  popupEl.classList.add("is-active");

  const tahapan = [
    "Menghubungi server tujuan...",
    "Memeriksa tujuan transfer...",
    "Membuat tampilan transaksi..."
  ];

  for (const teks of tahapan) {
    loadingTextEl.textContent = teks;
    await delay(850);
  }

  selesaiTransfer(dataForm);
}

function selesaiTransfer(dataForm) {
  saldo -= dataForm.nominal;
  updateSaldo();

  const data = {
    ...dataForm,
    ref: generateRef(),
    waktu: new Date().toLocaleString("id-ID", {
      dateStyle: "medium",
      timeStyle: "short"
    })
  };

  simpanRiwayat(data);
  tampilkanStruk(data);

  if ("vibrate" in navigator) {
    navigator.vibrate(40);
  }
}

function tampilkanStruk(data) {
  popupEl.classList.remove("is-active");
  pageTransferEl.classList.add("hidden");
  pageStrukEl.classList.remove("hidden");

  document.getElementById("strukDetail").innerHTML = `
    <div class="amount">${formatRupiah(data.nominal)}</div>
    <div class="details">
      ${barisDetail("Dari", "CEO YANG MENYAMAR")}
      ${barisDetail("Ke", escapeHtml(data.nama))}
      ${barisDetail("Bank", escapeHtml(data.bank))}
      ${barisDetail("Rekening", escapeHtml(data.rekening))}
      ${barisDetail("No. referensi", escapeHtml(data.ref))}
      ${barisDetail("Waktu", escapeHtml(data.waktu))}
    </div>
    <p class="receipt-note">Dokumen ini hanya simulasi prank cukup dibayangkan saja uangnya.</p>
  `;

  tampilkanRiwayat();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function barisDetail(label, value) {
  return `
    <div class="detail-row">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function tampilkanRiwayat() {
  const riwayat = getRiwayat().slice(0, 5);
  const riwayatEl = document.getElementById("riwayat");

  if (!riwayat.length) {
    riwayatEl.innerHTML = `<p class="muted">Belum ada riwayat transfer.</p>`;
    return;
  }

  riwayatEl.innerHTML = riwayat.map((item) => `
    <div class="history-item">
      <div>
        <strong>${escapeHtml(item.nama)}</strong>
        <small>${escapeHtml(item.bank)} - ${escapeHtml(item.waktu)}</small>
      </div>
      <strong>${formatRupiah(Number(item.nominal))}</strong>
    </div>
  `).join("");
}

function kembaliKeForm() {
  pageStrukEl.classList.add("hidden");
  pageTransferEl.classList.remove("hidden");
  rekeningEl.value = "";
  namaEl.value = "";
  nominalEl.value = "";
  statusEl.textContent = "";
  rekeningEl.focus();
}
