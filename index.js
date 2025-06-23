window.onload = () => {
  const videoEl = document.getElementById("videoPlayer");
  const nextBtn = document.getElementById("nextBtn");

  fetch("video2.mp4")
    .then(res => res.blob())
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);
      videoEl.src = blobUrl;

      videoEl.onplaying = () => {
        setTimeout(() => {
          videoEl.pause();
          nextBtn.classList.remove("hidden");
        }, 5000); // 2000 ms = 2 detik
      };

      videoEl.play().catch(() => {});
    });

  nextBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
};
