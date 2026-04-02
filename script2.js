
    // Data berita - 
const newsArticles = [
  {
    id: 1,
    title: "Pelantikan Mandiri",
    date: "24 Desember 2025",
    image: "assets/latman.jpeg",
    short: "PKS SMKN 1 Dukuhturi mengadakan pelantikan mandiri",
    full: [
      "Pelantikan Mandiri merupakan kegiatan resmi dalam ekstrakurikuler Patroli Keamanan Sekolah (PKS) yang dilaksanakan sebagai tanda pengesahan calon anggota menjadi anggota PKS secara penuh. Kegiatan ini menjadi tahap akhir dari proses pembinaan dan latihan yang telah diikuti oleh calon anggota sebelum dinyatakan siap menjalankan tugas sebagai anggota PKS.",
      
      "Pelantikan Mandiri dilaksanakan dengan tertib dan khidmat melalui rangkaian kegiatan yang meliputi apel pembukaan, pengecekan kesiapan anggota, penyampaian arahan dari pembina, pengucapan janji anggota PKS, serta penyematan atribut PKS sebagai simbol resmi keanggotaan. Seluruh rangkaian kegiatan dilaksanakan dengan penuh disiplin dan tanggung jawab.",
      
      "Melalui Pelantikan Mandiri, anggota PKS dilatih untuk bersikap mandiri, disiplin, dan bertanggung jawab. Kegiatan ini bertujuan membentuk mental, sikap, dan karakter anggota PKS agar siap menjalankan tugas, menjaga keamanan dan ketertiban, serta membawa nama baik sekolah."
    ]
  },
  {
    id: 2,
    title: "Pelantikan Gabungan",
    date: "12 September 2025",
    image: "assets/latgab.jpeg",
    short: "PKS SMKN 1 Dukuhturi mengadakan pelantikan gabungan",
    full: [
      "Pelantikan Gabungan merupakan kegiatan resmi dalam ekstrakurikuler Patroli Keamanan Sekolah (PKS) yang diikuti oleh PKS SMEKAR bersama beberapa sekolah lainnya. Kegiatan ini bertujuan untuk mengesahkan calon anggota PKS menjadi anggota resmi, sekaligus mempererat kerja sama, solidaritas, dan kekompakan antar sekolah.",
      
      "Pelantikan Gabungan dilaksanakan secara tertib dan khidmat dengan rangkaian kegiatan berupa apel pembukaan, pengecekan pasukan, penyampaian amanat dari pembina atau pihak kepolisian, pengucapan janji anggota PKS, serta penyematan atribut PKS sebagai tanda resmi keanggotaan. Seluruh anggota PKS SMEKAR mengikuti kegiatan dengan penuh disiplin dan tanggung jawab.",
      
      "Melalui Pelantikan Gabungan ini, anggota PKS SMEKAR dilatih untuk bersikap disiplin, bertanggung jawab, dan siap menjalankan tugas dengan menjunjung tinggi nilai kebersamaan serta menjaga nama baik sekolah dan organisasi PKS."
    ]
  },
  {
    id: 3,
    title: "Kegiatan Latihan Rutin",
    date: "6 Januari 2025",
    image: "assets/larut.jpeg",
    short: "Seluruh anggota PKS hadir dalam apel pagi perdana...",
    full: [
      "Latihan rutin merupakan kegiatan wajib dalam ekstrakurikuler Patroli Keamanan Sekolah (PKS) SMEKAR yang dilaksanakan secara berkala sebagai bentuk pembinaan dan peningkatan kualitas anggota. Kegiatan ini bertujuan untuk meningkatkan kedisiplinan, keterampilan, mental, serta kesiapan anggota PKS dalam menjalankan tugas di lingkungan sekolah maupun di luar sekolah.",
      
      "Dalam kegiatan latihan rutin, anggota PKS SMEKAR mendapatkan berbagai materi, antara lain latihan baris-berbaris untuk melatih kekompakan dan ketertiban, pengaturan lalu lintas sebagai bekal saat bertugas di lingkungan sekolah, serta pembinaan sikap dan etika anggota PKS. Selain itu, latihan juga diisi dengan kegiatan kerja sama tim untuk memperkuat solidaritas dan komunikasi antar anggota.",
      
      "Latihan rutin dilaksanakan dengan tertib, teratur, dan penuh semangat di bawah bimbingan pembina PKS serta pihak kepolisian. Melalui latihan rutin ini, anggota PKS SMEKAR dibentuk menjadi pribadi yang disiplin, tangguh, bertanggung jawab, serta siap menjalankan tugas dengan baik dan menjaga nama baik sekolah."
    ]
  },
  {
    id: 4,
    title: "Kegiatan Pasukan Khusus",
    date: "19 Desember 2024",
    image: "assets/pasus.jpeg",
    short: "PKS bekerja sama dengan Polsek Dukuhturi...",
    full: [
      "Kegiatan Pasukan Khusus (Pasus) merupakan bagian dari ekstrakurikuler Patroli Keamanan Sekolah (PKS) yang bertugas membantu pengamanan dan ketertiban pada kegiatan tertentu. Pasus biasanya diterjunkan saat acara sekolah maupun kegiatan keagamaan seperti Isra Mi’raj, Maulid Nabi, dan event penting lainnya.",
      
      "Dalam kegiatan Pasus, anggota PKS dilatih untuk bersikap sigap, disiplin, dan bertanggung jawab dalam menjalankan tugas. Selain menjaga keamanan, kegiatan ini juga melatih kekompakan, kerja sama, dan mental anggota.",
      
      "Melalui kegiatan Pasus, anggota PKS diharapkan mampu menjalankan tugas dengan baik serta menjaga nama baik sekolah."
    ]
  }
];

    // Data anggota PKS
    const anggotaPKS = [
      {
        id: "pembina",
        nama: "Huda Ikhya Ulumudin",
        jabatan: "Pembina PKS",
        foto: "assets/pakhuda.jpeg",
        tentang: "Guru Pendidikan Kewarganegaraan (PKn) sekaligus pembina resmi PKS SMKN 1 Dukuhturi sejak 2015. Aktif membimbing kegiatan ekstrakurikuler dan pelatihan kepemimpinan."
      },
      {
        id: "Ketua Umum",
        nama: "Novi Raizah H.",
        jabatan: "Ketua Umum",
        kelas: "XI AKL 1 ",
        foto: "assets/novi.jpeg",
        tentang: "Siswa aktif kelas XI yang menjabat menjadi ketua umum di ektrakulikuler pks."
      },
      {
        id: "Ketua 1",
        nama: "Mohammad Rizki K.",
        jabatan: "Ketua 1",
        kelas: "XI DKV 3 ",
        foto: "assets/riski.jpeg",
        tentang: "Siswa aktif yang menjabat menjadi ketua 1 di ektrakulikuler pks."
      },
      {
        id: "Ketua 2",
        nama: "Kaila Ikrima",
        jabatan: "Ketua 2",
        kelas: "XI ",
        foto: "assets/kayla.jpeg",
        tentang: "Siswa aktif yang menjabat menjadi ketua 2 di ektrakulikuler pks."
      },
      {
        id: "Sekretaris 1",
        nama: "Juli Deni P.",
        jabatan: "Sekretaris 1",
        kelas: "XI ",
        foto: "assets/juli.jpeg",
        tentang: "Siswa aktif yang menjabat menjadi sekertaris 1 di ektrakulikuler pks."
      },
      {
        id: "Sekretaris 2",
        nama: "Merdiani S. R.",
        jabatan: "Sekretaris 2",
        kelas: "XI ",
        foto: "assets/merdiani.jpeg",
        tentang: "Siswa aktif yang menjabat menjadi sekertaris 2 di ektrakulikuler pks."
      },
      {
        id: "Bendahara 1",
        nama: "Cintya Sheren O.",
        jabatan: "Bendahara 1",
        kelas: "XI ",
        foto: "assets/shintia.jpeg",
        tentang: "Siswa aktif yang menjabat menjadi bendahara 1 di ektrakulikuler pks."
      },
      {
        id: "Bendahara 2",
        nama: "Rayis Abdulloh M.",
        jabatan: "Bendahara 2",
        kelas: "XI RPL ",
        foto: "assets/rayis.jpeg",
        tentang: "Siswa aktif yang menjabat menjadi bendahara 2 di ektrakulikuler pks."
      }
    ];
    
    // Render news cards (2 kolom dengan Bootstrap grid)
    function renderNewsCards() {
      const container = document.getElementById('news-cards-container');
      container.innerHTML = '';

      newsArticles.forEach(article => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        const card = document.createElement('div');
        card.className = 'news-card';
        card.dataset.id = article.id;
        card.innerHTML = `
          <img src="${article.image}" alt="${article.title}" class="news-image">
          <h3>${article.title}</h3>
          <p class="news-date">${article.date}</p>
          <p>${article.short}</p>
        `;
        card.addEventListener('click', () => openNewsDetail(article.id));
        
        col.appendChild(card);
        container.appendChild(col);
      });
    }

    // Buka detail berita
    function openNewsDetail(articleId) {
    const article = newsArticles.find(a => a.id === articleId);
    if (!article) return;

    const paragraphs = article.full.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    document.getElementById('news-detail-content').innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="news-image mb-3">
        <h2>${article.title}</h2>
        <p class="news-date">${article.date}</p>
        ${paragraphs}
    `;

    document.getElementById('news-detail').style.display = 'flex';
    bringToFront('news-detail');
    }
    // Fungsi bawa jendela ke depan
    function bringToFront(windowId) {
      document.querySelectorAll('.window').forEach(w => {
        w.style.zIndex = '1000';
      });
      document.getElementById(windowId).style.zIndex = '1001';
    }

    // Inisialisasi
    document.addEventListener('DOMContentLoaded', () => {
      renderNewsCards();
      
      // Tombol kembali
      document.getElementById('back-to-news').addEventListener('click', () => {
        document.getElementById('news-detail').style.display = 'none';
        document.getElementById('News').style.display = 'flex';
        bringToFront('News');
      });

      // Window management
      const windows = {};
      document.querySelectorAll('.window').forEach(win => {
        const id = win.id;
        windows[id] = {
          element: win,
          isDragging: false,
          offsetX: 0,
          offsetY: 0
        };
      });

      // Open window
      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-target');
          const win = windows[id];
          if (win) {
            win.element.style.display = 'flex';
            Object.values(windows).forEach(w => w.element.style.zIndex = '1000');
            win.element.style.zIndex = '1001';
          }
        });
      });

      // Close window
      document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.closest('.window').style.display = 'none';
        });
      });

      // Draggable windows
      document.querySelectorAll('.window').forEach(win => {
        const header = win.querySelector('.window-header');
        const id = win.id;
        const winObj = windows[id];
        
        header.addEventListener('mousedown', (e) => {
          if (e.target.classList.contains('close-btn')) return;
          
          winObj.isDragging = true;
          const rect = win.getBoundingClientRect();
          winObj.offsetX = e.clientX - rect.left;
          winObj.offsetY = e.clientY - rect.top;
          win.style.transition = 'none';
          
          Object.values(windows).forEach(w => w.element.style.zIndex = '1000');
          win.style.zIndex = '1001';
        });
      });

      document.addEventListener('mousemove', (e) => {
        Object.values(windows).forEach(win => {
          if (win.isDragging) {
            const x = e.clientX - win.offsetX;
            const y = e.clientY - win.offsetY;
            const maxX = window.innerWidth - win.element.offsetWidth;
            const maxY = window.innerHeight - win.element.offsetHeight;
            const boundedX = Math.max(0, Math.min(x, maxX));
            const boundedY = Math.max(0, Math.min(y, maxY));
            win.element.style.left = `${boundedX}px`;
            win.element.style.top = `${boundedY}px`;
            win.element.style.transform = 'none';
          }
        });
      });

      document.addEventListener('mouseup', () => {
        Object.values(windows).forEach(win => {
          if (win.isDragging) {
            win.isDragging = false;
            win.element.style.transition = 'left 0.2s, top 0.2s';
          }
        });
      });

      document.querySelectorAll('.window').forEach(win => {
        win.addEventListener('mousedown', () => {
          Object.values(windows).forEach(w => w.element.style.zIndex = '1000');
          win.style.zIndex = '1001';
        });
      });
    });

    // Tampilkan detail anggota
    document.querySelectorAll('.org-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const anggota = anggotaPKS.find(a => a.id === id);
        
        if (!anggota) return;

        let imgHtml = '';
        if (anggota.foto) {
          imgHtml = `<img src="${anggota.foto}" alt="${anggota.nama}" class="profile-photo">`;
        }

        document.getElementById('detail-content').innerHTML = `
          <div class="profile-header">
            ${imgHtml}
            <div class="profile-info">
              <h3>${anggota.nama}</h3>
              <p><strong>${anggota.jabatan}</strong></p>
              <p><em>Kelas: ${anggota.kelas}</em></p>
            </div>
          </div>
          <p class="profile-bio">${anggota.tentang}</p>
        `;

        document.getElementById('anggota-detail').style.display = 'flex';
        
        // Bawa ke depan
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = '1000');
        document.getElementById('anggota-detail').style.zIndex = '1001';
      });
    });

    // Tutup popup
    document.querySelector('#anggota-detail .close-btn').addEventListener('click', () => {
      document.getElementById('anggota-detail').style.display = 'none';
    });

    // === FANCYBOX CONFIGURATION ===
    document.addEventListener('DOMContentLoaded', () => {
      Fancybox.bind("[data-fancybox]", {
        Toolbar: false,
        caption: function(fancybox, slide) {
          return `
            <div class="custom-caption">
              <span class="window-title">Galeri PKS</span>
              <div class="caption-buttons">
                <button id="back-to-gallery" class="btn-back-fancybox">← Kembali ke Galeri</button>
                <button data-fancybox-close class="fancybox__close">&times;</button>
              </div>
            </div>
          `;
        },
        on: {
          ready: (fancybox) => {
            const backBtn = document.getElementById('back-to-gallery');
            if (backBtn) {
              backBtn.onclick = () => {
                Fancybox.close();
                document.getElementById('Gallery').style.display = 'flex';
                bringToFront('Gallery');
              };
            }
          }
        }
      });
    });
