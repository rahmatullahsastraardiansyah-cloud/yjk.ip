AOS.init({
    duration: 1000,
    once: true
});

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
  }
});

let selectedService = "";
let selectedPrice = 0;

function selectService(event, service, price) {
    selectedService = service;
    selectedPrice = price;

    document.querySelectorAll('.card')
        .forEach(card => card.classList.remove('active'));

    event.currentTarget.classList.add('active');

    document.getElementById("total").innerText =
        selectedPrice.toLocaleString("id-ID");
}

function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Selamat Pagi";
    if (hour >= 12 && hour < 15) return "Selamat Siang";
    if (hour >= 15 && hour < 18) return "Selamat Sore";
    return "Selamat Malam";
}

function orderNow() {
    if (!selectedService) {
        alert("Pilih layanan dulu!");
        return;
    }

    const payment = document.getElementById("payment").value;
    const greeting = getGreeting();

    const message = `${greeting} Kak, saya mau order ${selectedService} dengan harga Rp ${selectedPrice.toLocaleString("id-ID")} dan pembayaran via ${payment}.`;

    const url = `https://wa.me/6285847439679?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

function toggleMode() {
    document.body.classList.toggle("light");
}

// Preview upload
document.getElementById("proof").addEventListener("change", function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById("preview").src = event.target.result;
    }
    reader.readAsDataURL(file);
});