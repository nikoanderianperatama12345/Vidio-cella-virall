window.onload = () => {
  const videoEl = document.getElementById("videoPlayer");
  const nextBtn = document.getElementById("nextBtn");

  const alreadyPlayed = localStorage.getItem("videoPlayed") === "yes";

  if (alreadyPlayed) {
    videoEl.pause();
    nextBtn.classList.remove("hidden");
  } else {
    fetch("video1.mp4")
      .then(res => res.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        videoEl.src = blobUrl;

        videoEl.onplaying = () => {
          setTimeout(() => {
            videoEl.pause();
            nextBtn.classList.remove("hidden");
            localStorage.setItem("videoPlayed", "yes");
          }, 3000); // Ganti ke 5000 kalau mau 5 detik
        };

        videoEl.play().catch(() => {});
      });
  }

  nextBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
};