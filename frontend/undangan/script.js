document.addEventListener("DOMContentLoaded", function() {
    
    // Untuk Fungsi Tombol Buka Undangan (Menghilangkan lock scroll dan geser ke bawah)
    const btnBuka = document.getElementById("btn-buka");
    if(btnBuka) {
        btnBuka.addEventListener("click", function() {
            // Seting untuk Hilangkan class 'locked-scroll' agar halaman bisa di-scroll
            document.body.classList.remove("locked-scroll");
            
            // Scroll otomatis ke section pengantar dengan mulus
            const targetSection = document.getElementById("pengantar");
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Bagian Efek Animasi Fade-in Saat Layar Di-scroll
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Animasi dimulai saat 15% elemen terlihat di layar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' untuk mentrigger CSS animasi
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Hanya dijalankan sekali
            }
        });
    }, observerOptions);

    // Setinggan Terapkan ke semua elemen dengan class fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Bagian Form RSVP Submit Animasi
    const formRsvp = document.getElementById("form-rsvp");
    if(formRsvp) {
        formRsvp.addEventListener("submit", function(e) {
            e.preventDefault(); // Mencegah browser memuat ulang halaman
            
            // Bagian Mengubah tombol menjadi status loading
            const btn = this.querySelector('.btn-submit');
            const originalText = btn.textContent;
            
            btn.textContent = "Mengirim...";
            btn.style.background = "#8a6a6a";
            
            // Bagian Simulasi jeda pengiriman data selama 1.5 detik
            setTimeout(() => {
                btn.textContent = "Berhasil Terkirim ✓";
                btn.style.background = "#6b8a3a"; // Berubah warna hijau
                
                // Bagian Reset form kembali seperti semula setelah 3 detik
                setTimeout(() => {
                    formRsvp.reset();
                    btn.textContent = originalText;
                    btn.style.background = "#6b4c50"; 
                }, 3000);
                
            }, 1500);
        });
    }
});