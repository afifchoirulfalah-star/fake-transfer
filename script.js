function rupiah(x){
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(x);
}

function randomRef(){
  return "CEO" + Math.floor(Math.random()*1000000000);
}

function mulaiTransfer(){

  let rekening = document.getElementById("rekening").value;
  let nama = document.getElementById("nama").value;
  let bank = document.getElementById("bank").value;
  let nominal = document.getElementById("nominal").value;

  if(!rekening || !nominal){
    alert("Lengkapi data!");
    return;
  }

  document.getElementById("progressBox").classList.remove("hidden");

  let text = document.getElementById("progressText");

  // STEP 1
  text.innerHTML = "Menghubungi server bank...";
  
  setTimeout(()=>{
    text.innerHTML = "Verifikasi rekening tujuan...";
    
    setTimeout(()=>{
      text.innerHTML = "Memproses transfer...";
      
      setTimeout(()=>{
        sukses(rekening,nama,bank,nominal);
      },1500);

    },1500);

  },1500);
}

function sukses(rek,nama,bank,nominal){

  document.getElementById("progressBox").classList.add("hidden");

  let ref = randomRef();

  document.getElementById("successBox").classList.remove("hidden");

  document.getElementById("detail").innerHTML = `
    Rekening: ${rek}<br>
    Nama: ${nama || "-"}<br>
    Bank: ${bank}<br><br>
    Nominal: <b>${rupiah(nominal)}</b><br><br>
    No Referensi: ${ref}<br><br>
    Status: BERHASIL 💸
  `;

  new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3").play();
}

function reset(){
  location.reload();
}
