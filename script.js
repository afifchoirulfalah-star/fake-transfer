function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(angka);
}

function transfer() {
  let nominal = document.getElementById("nominal").value;
  let status = document.getElementById("status");

  if (!nominal) {
    status.innerHTML = "Masukkan nominal dulu!";
    return;
  }

  status.innerHTML = "⏳ Sedang memproses transfer...";

  setTimeout(() => {
    status.innerHTML = "✅ Uang sebesar " + formatRupiah(nominal) + " berhasil ditransfer!";
  }, 1500);
}