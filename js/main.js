onload = () =>{
        document.body.classList.remove("container");
};

document.getElementById("backBtn").addEventListener("click", function () {
        window.history.back(); // Kembali ke halaman sebelumnya
      });
      
      document.getElementById("nextBtn").addEventListener("click", function () {
        window.location.href = "index.html"; // Ganti dengan halaman tujuan
      });
