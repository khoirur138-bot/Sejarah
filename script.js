
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // 1. NAVIGASI MOBILE
  // =====================================

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuToggle.textContent =
      navigation.classList.contains("open") ? "✕" : "☰";
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });


  // =====================================
  // 2. TOMBOL KEMBALI KE ATAS
  // =====================================

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  // =====================================
  // 3. FILTER TIMELINE
  // =====================================

  const filterButtons = document.querySelectorAll(".filter-btn");
  const timelineItems = document.querySelectorAll(".timeline-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filter = button.dataset.filter;

      timelineItems.forEach(item => {

        if (
          filter === "all" ||
          item.dataset.type === filter
        ) {
          item.hidden = false;
        } else {
          item.hidden = true;
        }

      });

    });
  });


  // =====================================
  // 4. TAHUN OTOMATIS
  // =====================================

  document.getElementById("year").textContent =
    new Date().getFullYear();


  // =====================================
  // 5. BANK SOAL KUIS
  // =====================================

  const questions = [
    {
      question: "Siapakah tokoh yang dikenal sebagai Bapak Pandu Sedunia?",
      options: [
        "Lord Robert Baden-Powell",
        "Sri Sultan Hamengkubuwono IX",
        "Soekarno",
        "Olave Baden-Powell"
      ],
      answer: 0,
      explanation:
        "Robert Stephenson Smyth Baden-Powell merupakan tokoh pendiri gerakan kepanduan modern."
    },

    {
      question: "Kapan Baden-Powell dilahirkan?",
      options: [
        "14 Agustus 1901",
        "22 Februari 1857",
        "20 Mei 1857",
        "30 Juli 1860"
      ],
      answer: 1,
      explanation:
        "Baden-Powell dilahirkan pada 22 Februari 1857 di London, Inggris."
    },

    {
      question: "Di manakah perkemahan kepanduan perintis yang dilaksanakan BP pada tahun 1907?",
      options: [
        "Olympia",
        "London",
        "Brownsea Island",
        "Oxford"
      ],
      answer: 2,
      explanation:
        "Perkemahan tersebut diselenggarakan di Pulau Brownsea, Inggris."
    },

    {
      question: "Apa judul buku Baden-Powell yang diterbitkan pada tahun 1908?",
      options: [
        "Aids to Scouting",
        "The Jungle Book",
        "Rovering to Success",
        "Scouting for Boys"
      ],
      answer: 3,
      explanation:
        "Scouting for Boys pertama kali diterbitkan pada 15 Januari 1908."
    },

    {
      question: "Pada tahun berapakah Jambore Dunia Pertama diselenggarakan?",
      options: [
        "1907",
        "1916",
        "1920",
        "1923"
      ],
      answer: 2,
      explanation:
        "Jambore Dunia Pertama dilaksanakan pada tahun 1920 di Olympia, London."
    },

    {
      question: "Berapa negara yang mengikuti Jambore Dunia Pertama menurut materi video?",
      options: [
        "12 negara",
        "20 negara",
        "32 negara",
        "45 negara"
      ],
      answer: 2,
      explanation:
        "Jambore Dunia Pertama diikuti oleh perwakilan dari 32 negara."
    },

    {
      question: "Apa kepanjangan dari kata Pramuka?",
      options: [
        "Praja Muda Karana",
        "Praja Mulia Karya",
        "Pemuda Rajin Berkarya",
        "Pasukan Muda Karana"
      ],
      answer: 0,
      explanation:
        "Pramuka merupakan singkatan dari Praja Muda Karana."
    },

    {
      question: "Apa arti dari Praja Muda Karana?",
      options: [
        "Pemuda yang kuat",
        "Jiwa muda yang suka berkarya",
        "Pasukan terdepan",
        "Pemimpin masa depan"
      ],
      answer: 1,
      explanation:
        "Praja Muda Karana memiliki arti jiwa muda yang suka berkarya."
    },

    {
      question: "Siapakah tokoh yang memperkenalkan istilah Pramuka dari kata Poromuko?",
      options: [
        "Soekarno",
        "Baden-Powell",
        "Sri Sultan Hamengkubuwono IX",
        "Ki Hajar Dewantara"
      ],
      answer: 2,
      explanation:
        "Istilah Pramuka dikaitkan dengan kata Poromuko oleh Sri Sultan Hamengkubuwono IX."
    },

    {
      question: "Apa nama organisasi kepanduan Muhammadiyah setelah berganti nama pada tahun 1920?",
      options: [
        "PAPI",
        "IPINDO",
        "JPO",
        "Hizbul Wathan"
      ],
      answer: 3,
      explanation:
        "Padvinder Muhammadiyah berganti nama menjadi Hizbul Wathan."
    },

    {
      question: "Kapan PAPI dibentuk?",
      options: [
        "23 Mei 1928",
        "20 Mei 1961",
        "14 Agustus 1961",
        "27 Desember 1945"
      ],
      answer: 0,
      explanation:
        "Persaudaraan Antara Pandu Indonesia dibentuk pada 23 Mei 1928."
    },

    {
      question: "Di manakah PERKINO I diselenggarakan?",
      options: [
        "Jakarta",
        "Yogyakarta",
        "Bandung",
        "Surakarta"
      ],
      answer: 1,
      explanation:
        "PERKINO I dilaksanakan pada 19–23 Juli 1941 di Yogyakarta."
    },

    {
      question: "Apa hasil Kongres Kepanduan tanggal 27–29 Desember 1945?",
      options: [
        "Pembentukan IPINDO",
        "Pembentukan PAPI",
        "Pembentukan Pandu Rakyat Indonesia",
        "Pembentukan Kwarnas"
      ],
      answer: 2,
      explanation:
        "Kongres di Surakarta menghasilkan pembentukan Pandu Rakyat Indonesia."
    },

    {
      question: "Apa nama federasi kepanduan yang dibentuk pada 16 September 1951?",
      options: [
        "NIPV",
        "JPO",
        "PAPI",
        "IPINDO"
      ],
      answer: 3,
      explanation:
        "IPINDO atau Ikatan Pandu Indonesia dibentuk pada 16 September 1951."
    },

    {
      question: "Kapan Presiden Soekarno mengumpulkan tokoh kepanduan untuk membahas pembentukan Gerakan Pramuka?",
      options: [
        "9 Maret 1961",
        "20 Mei 1961",
        "30 Juli 1961",
        "14 Agustus 1961"
      ],
      answer: 0,
      explanation:
        "Pertemuan tersebut berlangsung pada 9 Maret 1961 dan dikenal sebagai Hari Tunas."
    },

    {
      question: "Apa isi penting Keppres Nomor 238 Tahun 1961?",
      options: [
        "Pembentukan NIPV",
        "Pengesahan Anggaran Dasar Gerakan Pramuka",
        "Pembentukan PAPI",
        "Pelaksanaan PERKINO"
      ],
      answer: 1,
      explanation:
        "Keppres Nomor 238 Tahun 1961 mengatur Gerakan Pramuka dan mengesahkan Anggaran Dasarnya."
    },

    {
      question: "Tanggal berapakah Hari Ikrar Gerakan Pramuka diperingati?",
      options: [
        "9 Maret 1961",
        "20 Mei 1961",
        "30 Juli 1961",
        "14 Agustus 1961"
      ],
      answer: 2,
      explanation:
        "Hari Ikrar Gerakan Pramuka diperingati berdasarkan peristiwa 30 Juli 1961."
    },

    {
      question: "Mengapa tanggal 14 Agustus diperingati sebagai Hari Pramuka?",
      options: [
        "Tanggal lahir Baden-Powell",
        "Tanggal berdirinya JPO",
        "Tanggal terbitnya Scouting for Boys",
        "Tanggal perkenalan resmi Gerakan Pramuka kepada masyarakat"
      ],
      answer: 3,
      explanation:
        "Pada 14 Agustus 1961, Gerakan Pramuka diperkenalkan secara resmi kepada masyarakat Indonesia."
    },

    {
      question: "Siapakah ketua Mapinas pada awal pembentukan Gerakan Pramuka?",
      options: [
        "Presiden Soekarno",
        "Baden-Powell",
        "Prijono",
        "Dr. Azis Saleh"
      ],
      answer: 0,
      explanation:
        "Mapinas diketuai oleh Presiden Soekarno."
    },

    {
      question: "Undang-Undang Nomor berapakah yang mengatur tentang Gerakan Pramuka?",
      options: [
        "UU Nomor 20 Tahun 2003",
        "UU Nomor 12 Tahun 2010",
        "UU Nomor 5 Tahun 1960",
        "UU Nomor 23 Tahun 2002"
      ],
      answer: 1,
      explanation:
        "Undang-Undang Nomor 12 Tahun 2010 merupakan undang-undang tentang Gerakan Pramuka."
    }
  ];


  // =====================================
  // 6. SISTEM KUIS
  // =====================================

  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  const questionNumber =
    document.getElementById("questionNumber");

  const scoreDisplay =
    document.getElementById("scoreDisplay");

  const questionText =
    document.getElementById("questionText");

  const answerOptions =
    document.getElementById("answerOptions");

  const feedback =
    document.getElementById("feedback");

  const nextQuestion =
    document.getElementById("nextQuestion");

  const quizProgress =
    document.getElementById("quizProgress");

  const quizBox =
    document.getElementById("quizBox");

  const quizResult =
    document.getElementById("quizResult");


  function loadQuestion() {

    answered = false;

    const q = questions[currentQuestion];

    questionNumber.textContent =
      `PERTANYAAN ${currentQuestion + 1} / ${questions.length}`;

    scoreDisplay.textContent =
      `Skor: ${score}`;

    questionText.textContent = q.question;

    quizProgress.style.width =
      `${(currentQuestion / questions.length) * 100}%`;

    answerOptions.innerHTML = "";
    feedback.textContent = "";

    nextQuestion.disabled = true;

    nextQuestion.textContent =
      currentQuestion === questions.length - 1
        ? "Lihat Hasil Akhir →"
        : "Pertanyaan Selanjutnya →";


    q.options.forEach((option, index) => {

      const button = document.createElement("button");

      button.className = "answer-btn";
      button.textContent =
        `${String.fromCharCode(65 + index)}. ${option}`;

      button.addEventListener("click", () => {
        selectAnswer(index, button);
      });

      answerOptions.appendChild(button);

    });

  }


  function selectAnswer(selected, selectedButton) {

    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];

    const buttons =
      answerOptions.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
      button.disabled = true;
    });

    if (selected === q.answer) {

      score++;

      selectedButton.classList.add("correct");

      feedback.textContent =
        "✓ Benar! " + q.explanation;

      feedback.style.color = "#21864a";

    } else {

      selectedButton.classList.add("wrong");

      buttons[q.answer].classList.add("correct");

      feedback.textContent =
        "✕ Belum tepat. " + q.explanation;

      feedback.style.color = "#b50925";

    }

    scoreDisplay.textContent =
      `Skor: ${score}`;

    nextQuestion.disabled = false;

  }


  function showResult() {

    quizBox.hidden = true;
    quizResult.hidden = false;

    const percentage =
      Math.round((score / questions.length) * 100);

    document.getElementById("finalScore").textContent =
      `${score} / ${questions.length} (${percentage}%)`;

    let message;

    if (percentage >= 90) {
      message = "Luar biasa! Pemahaman sejarah kepramukaanmu sangat baik.";
    } else if (percentage >= 75) {
      message = "Bagus! Kamu sudah memahami sebagian besar materi.";
    } else if (percentage >= 60) {
      message = "Cukup baik! Terus tingkatkan pemahamanmu.";
    } else {
      message = "Jangan menyerah! Pelajari kembali materi dan coba lagi.";
    }

    document.getElementById("resultText").textContent =
      message;

    quizProgress.style.width = "100%";

    quizResult.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }


  nextQuestion.addEventListener("click", () => {

    if (!answered) return;

    if (currentQuestion < questions.length - 1) {

      currentQuestion++;

      loadQuestion();

    } else {

      showResult();

    }

  });


  document.getElementById("restartQuiz").addEventListener("click", () => {

    currentQuestion = 0;
    score = 0;
    answered = false;

    quizBox.hidden = false;
    quizResult.hidden = true;

    loadQuestion();

    quizBox.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  });


  // =====================================
  // 7. ANIMASI KONTEN
  // =====================================

  const animatedElements = document.querySelectorAll(
    ".content-block, .identity-card, .definition-card, .date-card, .closing-card"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.animation =
            "fadeIn .6s ease both";

          observer.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.08
    });

    animatedElements.forEach(element => {
      observer.observe(element);
    });

  }


  // =====================================
  // 8. INISIALISASI
  // =====================================

  loadQuestion();

  console.log(
    "ASKAGANDI | Website Sejarah Pramuka berhasil dimuat."
  );

});
