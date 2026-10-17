import {
  SilaItem,
  PracticeMatchItem,
  TimelineEvent,
  PasalItem,
  StateInstitution,
  CivicDilemma,
  QuizQuestion,
  GlossaryTerm
} from '../types/civic';

export const SILA_LIST: SilaItem[] = [
  {
    id: 1,
    number: 1,
    title: 'Ketuhanan Yang Maha Esa',
    symbol: 'Bintang Emas',
    symbolDesc: 'Bintang bersudut lima berlatar hitam perisai melambangkan cahaya kerohanian yang dipancarkan Tuhan Yang Maha Esa kepada setiap insan manusia.',
    philosophicalMeaning: 'Mengakui keberadaan Tuhan Yang Maha Esa sebagai pencipta alam semesta. Menjamin kemerdekaan setiap warga negara untuk memeluk agama dan beribadah sesuai keyakinan tanpa ada paksaan, serta menjunjung tinggi toleransi antarumat beragama.',
    values: [
      'Bangsa Indonesia menyatakan kepercayaan dan ketakwaan terhadap Tuhan YME.',
      'Saling menghormati dan bekerja sama antar pemeluk agama dan penganut kepercayaan yang berbeda-beda.',
      'Membina kerukunan hidup di antara sesama umat beragama.',
      'Agama dan kepercayaan adalah urusan pribadi manusia dengan Tuhan YME.',
      'Tidak memaksakan suatu agama atau kepercayaan kepada orang lain.'
    ],
    practices: {
      family: ['Menjalankan ibadah bersama anggota keluarga secara tertib', 'Menanamkan rasa syukur dan doa sebelum beraktivitas di rumah'],
      school: ['Menghormati teman dan guru yang berbeda agama saat hendak menunaikan ibadah', 'Menjaga ketenangan ruang ibadah sekolah'],
      community: ['Mendukung perayaan hari besar keagamaan tetangga secara damai', 'Tidak mengganggu jalannya peribadatan di lingkungan tempat tinggal'],
      nation: ['Menolak segala bentuk intoleransi, ekstremisme, dan pemaksaan keyakinan', 'Menjaga kerukunan nasional antar pemuka agama']
    }
  },
  {
    id: 2,
    number: 2,
    title: 'Kemanusiaan yang Adil dan Beradab',
    symbol: 'Rantai Emas',
    symbolDesc: 'Mata rantai berbentuk segi empat (pria) dan lingkaran (wanita) yang saling berkait kokoh melambangkan kesetaraan harkat derajat manusia serta hubungan solidaritas yang tak terputus.',
    philosophicalMeaning: 'Menjunjung tinggi harkat, martabat, hak asasi, dan kewajiban setiap individu tanpa membeda-bedakan suku, agama, ras, gender, maupun status sosial atas dasar peradaban dan keadilan moral.',
    values: [
      'Mengakui persamaan derajat, hak, dan kewajiban asasi setiap manusia.',
      'Mengembangkan sikap saling mencintai sesama manusia dan tenggang rasa.',
      'Tidak bersikap semena-mena terhadap orang lain.',
      'Menjunjung tinggi nilai kemanusiaan dan gemar melakukan kegiatan kemanusiaan.',
      'Berani membela kebenaran dan keadilan.'
    ],
    practices: {
      family: ['Saling menyayangi, menghormati hak privasi saudara, dan memperlakukan asisten rumah tangga secara manusiawi'],
      school: ['Mencegah dan menghentikan perundungan (bullying) di kelas maupun media sosial', 'Membantu teman yang tertimpa musibah sakit atau kedukaan'],
      community: ['Turut serta dalam aksi bakti sosial peduli bencana alam atau warga rentan', 'Menghindari tindakan main hakim sendiri (vigilantisme)'],
      nation: ['Mengembangkan persaudaraan universal dengan bangsa-bangsa di dunia', 'Menegakkan perlindungan hukum yang setara bagi semua kalangan']
    }
  },
  {
    id: 3,
    number: 3,
    title: 'Persatuan Indonesia',
    symbol: 'Pohon Beringin',
    symbolDesc: 'Pohon beringin besar yang berakar tunggang menghunjam dalam ke tanah melambangkan kesatuan NKRI yang kokoh memayungi ragam suku bangsa, budaya, dan bahasa daerah.',
    philosophicalMeaning: 'Mengutamakan persatuan, kesatuan, serta keselamatan bangsa dan negara di atas kepentingan pribadi atau golongan demi keutuhan Negara Kesatuan Republik Indonesia (NKRI) berlandaskan semboyan Bhinneka Tunggal Ika.',
    values: [
      'Menempatkan persatuan dan kesatuan di atas kepentingan pribadi atau kelompok.',
      'Sanggup dan rela berkorban untuk kepentingan negara dan bangsa.',
      'Mengembangkan rasa cinta kepada tanah air dan bangsa.',
      'Mengembangkan rasa kebanggaan berkebangsaan dan bertanah air Indonesia.',
      'Memelihara ketertiban dunia berdasarkan kemerdekaan, perdamaian abadi, dan keadilan sosial.'
    ],
    practices: {
      family: ['Menjaga kerukunan antar keluarga besar walau berbeda pilihan atau latar belakang perkawinan silang adat'],
      school: ['Berteman dengan siapa saja tanpa membedakan suku asal atau dialek daerah', 'Mengikuti upacara bendera dengan khidmat'],
      community: ['Bergotong royong membersihkan lingkungan RT/RW dan pos kamling', 'Melestarikan kebudayaan dan tarian tradisional daerah sekitar'],
      nation: ['Mengutamakan penggunaan produk-produk buatan dalam negeri (UMKM)', 'Menjaga persatuan dan menolak narasi adu domba suku/agama di ruang digital']
    }
  },
  {
    id: 4,
    number: 4,
    title: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
    symbol: 'Kepala Banteng',
    symbolDesc: 'Banteng sebagai hewan sosial yang berkumpul mencerminkan tradisi musyawarah bangsa Indonesia dalam pengambilan keputusan bersama melalui perwakilan rakyat.',
    philosophicalMeaning: 'Sistem kedaulatan rakyat yang dijalankan secara rasional, etis, dan demokratis melalui dialog musyawarah untuk mencapai mufakat, bukan tirani mayoritas maupun dominasi minoritas.',
    values: [
      'Sebagai warga negara, mempunyai kedudukan, hak, dan kewajiban yang sama.',
      'Tidak boleh memaksakan kehendak kepada orang lain.',
      'Mengutamakan musyawarah dalam mengambil keputusan untuk kepentingan bersama.',
      'Musyawarah untuk mencapai mufakat diliputi semangat kekeluargaan.',
      'Menerima dan melaksanakan hasil keputusan musyawarah dengan iktikad baik dan rasa tanggung jawab.'
    ],
    practices: {
      family: ['Mendiskusikan rencana liburan atau pembagian tugas rumah melalui obrolan santai bersama keluarga'],
      school: ['Melakukan musyawarah pemilihan ketua OSIS atau pembentukan panitia pentas seni secara terbuka dan sportif'],
      community: ['Menghadiri rapat warga RT/RW untuk merumuskan iuran kebersihan atau jadwal siskamling', 'Menghormati keputusan mayoritas forum'],
      nation: ['Menggunakan hak pilih dalam Pemilu secara cerdas dan bebas dari paksaan', 'Menyalurkan aspirasi atau kritik secara santun dan konstruktif']
    }
  },
  {
    id: 5,
    number: 5,
    title: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
    symbol: 'Padi dan Kapas',
    symbolDesc: 'Padi (pangan) dan kapas (sandang) melambangkan kebutuhan dasar jasmani seluruh rakyat Indonesia yang harus terdistribusi secara adil dan merata tanpa kesenjangan.',
    philosophicalMeaning: 'Cita-cita kemakmuran bersama yang merata bagi seluruh rakyat Indonesia, menghapus ketimpangan sosial-ekonomi, menghargai kerja keras, dan melindungi kaum rentan.',
    values: [
      'Mengembangkan perbuatan yang luhur yang mencerminkan sikap kekeluargaan dan gotong royong.',
      'Mengembangkan sikap adil terhadap sesama.',
      'Menjaga keseimbangan antara hak dan kewajiban.',
      'Menghormati hak orang lain dan suka memberi pertolongan kepada orang lain.',
      'Suka bekerja keras dan menghargai hasil karya orang lain yang bermanfaat bagi kemajuan bangsa.'
    ],
    practices: {
      family: ['Membiasakan hidup hemat, tidak bergaya hidup boros, dan membagi porsi rezeki keluarga secara berimbang'],
      school: ['Memberikan kesempatan yang sama bagi setiap siswa untuk memanfaatkan laboratorium dan fasilitas perpustakaan'],
      community: ['Tidak merampas trotoar publik untuk kepentingan bisnis pribadi yang merugikan pejalan kaki'],
      nation: ['Mendukung pemerataan akses pendidikan, jaminan kesehatan nasional, serta fasilitas umum di seluruh pelosok negeri']
    }
  }
];

export const PRACTICE_MATCH_ITEMS: PracticeMatchItem[] = [
  {
    id: 'pm-1',
    actionText: 'Roni memberikan kesempatan bagi rekannya yang beragama Hindu untuk bersembahyang sebelum memulai rapat kelompok tugas sekolah.',
    correctSila: 1,
    explanation: 'Tindakan Roni mencerminkan Sila 1 (Ketuhanan YME) melalui penghormatan dan toleransi antarumat beragama dalam menjalankan ibadah.',
    category: 'Sekolah'
  },
  {
    id: 'pm-2',
    actionText: 'Seluruh siswa kelas X mengumpulkan dana bantuan darurat untuk biaya pengobatan adik kelas yang mengalami musibah kebakaran.',
    correctSila: 2,
    explanation: 'Aksi solidaritas menolong sesama yang terkena musibah adalah wujud nyata tenggang rasa dan nilai kemanusiaan pada Sila 2.',
    category: 'Sekolah'
  },
  {
    id: 'pm-3',
    actionText: 'Keluarga Pak Danu bangga menggunakan batik tradisional dan membeli kopi dari perkebunan lokal saat menjamu tamu.',
    correctSila: 3,
    explanation: 'Mencintai produk dalam negeri dan mengapresiasi warisan budaya bangsa merupakan perwujudan nasionalisme Sila 3.',
    category: 'Keluarga'
  },
  {
    id: 'pm-4',
    actionText: 'Warga Kelurahan Sukamaju mengadakan musyawarah mufakat untuk menentukan jadwal ronda malam tanpa memaksakan kehendak sepihak.',
    correctSila: 4,
    explanation: 'Musyawarah mufakat dengan semangat kekeluargaan untuk kepentingan bersama adalah intisari dari Sila 4.',
    category: 'Masyarakat'
  },
  {
    id: 'pm-5',
    actionText: 'Pemerintah daerah menyalurkan program beasiswa pendidikan dan fasilitas perpustakaan keliling ke daerah terpencil secara transparan.',
    correctSila: 5,
    explanation: 'Pemerataan kesempatan belajar dan penghapusan kesenjangan sosial adalah amanat Sila 5 (Keadilan Sosial).',
    category: 'Bernegara'
  },
  {
    id: 'pm-6',
    actionText: 'Tidak menyebarkan gosip atau memfitnah martabat teman sebangku karena menyadari setiap orang memiliki harga diri yang setara.',
    correctSila: 2,
    explanation: 'Menjaga kehormatan dan martabat orang lain tanpa semena-mena sesuai dengan amanat Sila 2 Kemanusiaan.',
    category: 'Sekolah'
  },
  {
    id: 'pm-7',
    actionText: 'Menghindari perilaku boros serta tidak menggunakan fasilitas umum sembarangan demi kenyamanan seluruh warga kota.',
    correctSila: 5,
    explanation: 'Menjaga keseimbangan hak & kewajiban serta tidak bergaya hidup boros merupakan butir pengamalan Sila 5.',
    category: 'Masyarakat'
  },
  {
    id: 'pm-8',
    actionText: 'Mengikuti pemilihan Ketua OSIS dengan menggunakan hak suara secara bebas, rahasia, dan menerima hasil penghitungan suara.',
    correctSila: 4,
    explanation: 'Partisipasi dalam pemilihan demokratis dan berlapang dada menerima hasil adalah penerapan Sila 4.',
    category: 'Sekolah'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1945',
    date: '29 Mei 1945',
    title: 'Pidato Muhammad Yamin dalam Sidang BPUPKI I',
    actors: ['Prof. Mohammad Yamin, S.H.'],
    summary: 'Mengusulkan 5 asas dasar negara secara lisan: Peri Kebangsaan, Peri Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, dan Kesejahteraan Rakyat.',
    historicalImpact: 'Membuka diskursus konseptual pertama mengenai fondasi filosofis Indonesia merdeka.'
  },
  {
    year: '1945',
    date: '31 Mei 1945',
    title: 'Gagasan Negara Integralistik oleh Prof. Dr. Soepomo',
    actors: ['Prof. Dr. Soepomo'],
    summary: 'Menawarkan konsep Negara Kesatuan yang bersifat integralistik atau kekeluargaan; negara mengatasi segala golongan dan menyatu dengan rakyatnya.',
    historicalImpact: 'Menjadi pijakan pemikiran tentang asas kekeluargaan dan musyawarah mufakat dalam hukum dasar negara.'
  },
  {
    year: '1945',
    date: '1 Juni 1945',
    title: 'Kelahiran Istilah Pancasila oleh Ir. Soekarno',
    actors: ['Ir. Soekarno'],
    summary: 'Mengusulkan lima prinsip dasar dengan nama resmi Pancasila: Kebangsaan Indonesia, Internasionalisme atau Peri Kemanusiaan, Mufakat atau Demokrasi, Kesejahteraan Sosial, dan Ketuhanan yang Berkebudayaan.',
    historicalImpact: 'Ditetapkan sebagai Hari Lahir Pancasila yang diperingati secara nasional setiap 1 Juni.'
  },
  {
    year: '1945',
    date: '22 Juni 1945',
    title: 'Perumusan Piagam Jakarta (Jakarta Charter)',
    actors: ['Panitia Sembilan (Soekarno, Hatta, Maramis, Abikoesno, Kahar Muzakir, Agus Salim, Subardjo, Wahid Hasjim, Muh. Yamin)'],
    summary: 'Menyusun konsensus kompromi kebangsaan yang memuat rumusan Pancasila pada alinea keempat dokumen rancangan pembukaan.',
    historicalImpact: 'Naskah perintis Pembukaan UUD 1945 yang memadukan wawasan kebangsaan dan nilai religius.'
  },
  {
    year: '1945',
    date: '18 Agustus 1945',
    title: 'Pengesahan Pancasila & UUD 1945 oleh Sidang PPKI',
    actors: ['Panitia Persiapan Kemerdekaan Indonesia (PPKI)', 'Drs. Mohammad Hatta', 'Ir. Soekarno'],
    summary: 'PPKI secara aklamasi mengubah rumusan sila pertama menjadi "Ketuhanan Yang Maha Esa" demi menjaga keutuhan Sabang sampai Merauke, mengesahkan Pembukaan dan Batang Tubuh UUD 1945, serta memilih Presiden dan Wakil Presiden pertama.',
    historicalImpact: 'Pancasila dan UUD NRI 1945 resmi menjadi Dasar Negara dan Konstitusi Tertinggi yang sah hingga saat ini.'
  }
];

export const PEMBUKAAN_UUD_DATA = [
  {
    alinea: 1,
    title: 'Hak Kemerdekaan sebagai Hak Segala Bangsa',
    text: 'Bahwa sesungguhnya Kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu, maka penjajahan di atas dunia harus dihapuskan, karena tidak sesuai dengan perikemanusiaan dan perikeadilan.',
    meaning: 'Mengandung dalil objektif bahwa penjajahan bertentangan dengan kemanusiaan dan keadilan, sekaligus dalil subjektif aspirasi bangsa Indonesia untuk membebaskan diri dari belenggu imperialisme.'
  },
  {
    alinea: 2,
    title: 'Perjuangan Menuju Negara yang Merdeka, Bersatu, Berdaulat, Adil dan Makmur',
    text: 'Dan perjuangan pergerakan kemerdekaan Indonesia telah sampailah kepada saat yang berbahagia dengan selamat sentosa mengantarkan rakyat Indonesia ke depan pintu gerbang kemerdekaan Negara Indonesia, yang merdeka, bersatu, berdaulat, adil dan makmur.',
    meaning: 'Menghargai jerih payah para pahlawan pejuang kemerdekaan serta merumuskan visi jangka panjang negara Indonesia yang berdaulat secara politik dan adil-makmur secara ekonomi.'
  },
  {
    alinea: 3,
    title: 'Dimensi Religiusitas & Pengakuan Rahmat Allah YME',
    text: 'Atas berkat rahmat Allah Yang Maha Kuasa dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya.',
    meaning: 'Menegaskan spiritualitas luhur bangsa bahwa kemerdekaan Indonesia bukan sekadar hasil kemampuan senjata manusia semata, melainkan karunia anugerah Tuhan Yang Maha Esa.'
  },
  {
    alinea: 4,
    title: 'Tujuan Negara, Asas Politik Luar Negeri, dan Dasar Negara Pancasila',
    text: 'Kemudian daripada itu untuk membentuk suatu Pemerintah Negara Indonesia yang melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dan untuk memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial, maka disusunlah Kemerdekaan Kebangsaan Indonesia itu dalam suatu Undang-Undang Dasar Negara Indonesia, yang terbentuk dalam suatu susunan Negara Republik Indonesia yang berkedaulatan rakyat dengan berdasar kepada: Ketuhanan Yang Maha Esa, Kemanusiaan yang adil dan beradab, Persatuan Indonesia, dan Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan, serta dengan mewujudkan suatu Keadilan sosial bagi seluruh rakyat Indonesia.',
    meaning: 'Merumuskan 4 Tujuan Nasional, sistem politik republik berkedaulatan rakyat, hierarki hukum konstitusional, serta rumusan otentik lima sila Pancasila.'
  }
];

export const PASAL_LIST: PasalItem[] = [
  {
    id: 'pasal-27',
    number: 'Pasal 27',
    title: 'Kesamaan Kedudukan dalam Hukum, Penghidupan Layak, dan Bela Negara',
    category: 'Kewajiban Warga Negara',
    ayats: [
      {
        ayatNumber: 1,
        text: 'Segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan dan wajib menjunjung hukum dan pemerintahan itu dengan tidak ada kecualinya.',
        analysis: 'Prinsip Equality before the law; tidak ada warga negara yang kebal hukum, pejabat maupun rakyat biasa tunduk pada aturan hukum yang sama.'
      },
      {
        ayatNumber: 2,
        text: 'Tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.',
        analysis: 'Kewajiban negara membuka lapangan kerja dan upah berkeadilan demi menjamin martabat manusia.'
      },
      {
        ayatNumber: 3,
        text: 'Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.',
        analysis: 'Bela negara bukan hanya tugas militer bersenjata, melainkan kewajiban moral setiap profesi (guru, dokter, pelajar, dsb.) dalam mempertahankan kedaulatan bangsa.'
      }
    ]
  },
  {
    id: 'pasal-28',
    number: 'Pasal 28A s/d 28J',
    title: 'Jaminan Hak Asasi Manusia (HAM)',
    category: 'Hak Asasi Manusia',
    ayats: [
      {
        ayatNumber: 1,
        text: 'Pasal 28A: Setiap orang berhak untuk hidup serta berhak mempertahankan hidup dan kehidupannya.',
        analysis: 'Hak mutlak atas kehidupan sebagai anugerah Tuhan yang wajib dilindungi oleh segenap instrumen penegak hukum.'
      },
      {
        ayatNumber: 2,
        text: 'Pasal 28E ayat (3): Setiap orang berhak atas kebebasan berserikat, berkumpul, dan mengeluarkan pendapat.',
        analysis: 'Pilar utama kehidupan berdemokrasi di mana rakyat bebas menyampaikan gagasan dan aspirasi secara konstitusional.'
      },
      {
        ayatNumber: 3,
        text: 'Pasal 28J ayat (2): Dalam menjalankan hak dan kebebasannya, setiap orang wajib tunduk kepada pembatasan yang ditetapkan dengan undang-undang semata-mata untuk menjamin pengakuan atas hak orang lain serta pertimbangan moral, nilai agama, dan keamanan umum.',
        analysis: 'Kebebasan di Indonesia bukanlah kebebasan anarki liberal tanpa batas; hak asasi kita berbatasan langsung dengan hak asasi orang lain.'
      }
    ]
  },
  {
    id: 'pasal-29',
    number: 'Pasal 29',
    title: 'Kemerdekaan Beragama dan Beribadah',
    category: 'Hak Asasi Manusia',
    ayats: [
      {
        ayatNumber: 1,
        text: 'Negara berdasar atas Ketuhanan Yang Maha Esa.',
        analysis: 'Indonesia bukan negara sekuler murni (yang memisahkan agama dari ruang publik sama sekali) dan bukan pula negara teokrasi (yang dikuasai satu agama tertentu).'
      },
      {
        ayatNumber: 2,
        text: 'Negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing dan untuk beribadat menurut agamanya dan kepercayaannya itu.',
        analysis: 'Jaminan konstitusional perlindungan bagi setiap warga negara agar dapat beribadah dengan rasa aman, damai, dan tentram.'
      }
    ]
  },
  {
    id: 'pasal-30',
    number: 'Pasal 30',
    title: 'Pertahanan dan Keamanan Negara (Sishankamrata)',
    category: 'Pertahanan & Keamanan',
    ayats: [
      {
        ayatNumber: 1,
        text: 'Tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara.',
        analysis: 'Keterlibatan semesta seluruh elemen rakyat dalam menjaga kedaulatan wilayah NKRI.'
      },
      {
        ayatNumber: 2,
        text: 'Usaha pertahanan dan keamanan negara dilaksanakan melalui sistem pertahanan dan keamanan rakyat semesta oleh TNI dan Kepolisian Negara RI sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung.',
        analysis: 'Konsep Sishankamrata: TNI menjaga kedaulatan luar teritori, Polri menjaga ketertiban umum dan hukum dalam negeri, rakyat menjadi basis pendukung.'
      }
    ]
  },
  {
    id: 'pasal-31',
    number: 'Pasal 31',
    title: 'Hak Memperoleh Pendidikan & Anggaran 20%',
    category: 'Pendidikan & Kebudayaan',
    ayats: [
      {
        ayatNumber: 1,
        text: 'Setiap warga negara berhak mendapat pendidikan.',
        analysis: 'Akses pendidikan adalah hak universal tanpa boleh ada diskriminasi ekonomi maupun kedaerahan.'
      },
      {
        ayatNumber: 4,
        text: 'Negara memprioritaskan anggaran pendidikan sekurang-kurangnya 20% dari APBN serta dari APBD untuk memenuhi kebutuhan penyelenggaraan pendidikan nasional.',
        analysis: 'Mandat imperatif alokasi anggaran agar kualitas sarana, kurikulum, dan kesejahteraan pendidik terus meningkat.'
      }
    ]
  },
  {
    id: 'pasal-33',
    number: 'Pasal 33',
    title: 'Perekonomian Nasional dan Kesejahteraan Sosial',
    category: 'Perekonomian & Kesejahteraan',
    ayats: [
      {
        ayatNumber: 1,
        text: 'Perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan.',
        analysis: 'Mendasari posisi strategis koperasi dan gotong royong ekonomi sebagai sokoguru perekonomian nasional.'
      },
      {
        ayatNumber: 3,
        text: 'Bumi dan air dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat.',
        analysis: 'Prinsip kedaulatan sumber daya alam; hak menguasai negara bertujuan mencegah monopoli segelintir konglomerasi dan memastikan rakyat merasakan manfaatnya.'
      }
    ]
  }
];

export const STATE_INSTITUTIONS: StateInstitution[] = [
  {
    id: 'presiden',
    name: 'Presiden & Wakil Presiden',
    fullName: 'Kepresidenan Republik Indonesia',
    branch: 'Eksekutif',
    role: 'Kepala Negara sekaligus Kepala Pemerintahan yang memegang kekuasaan pemerintahan menurut UUD 1945.',
    members: 'Dipilih secara langsung oleh rakyat dalam satu pasangan calon setiap 5 tahun sekali (maksimal 2 periode masa jabatan).',
    duties: [
      'Menjalankan undang-undang dan memimpin kabinet kementerian',
      'Memegang kekuasaan tertinggi atas Angkatan Darat, Angkatan Laut, dan Angkatan Udara (TNI)',
      'Mengajukan Rancangan Undang-Undang (RUU) dan RAPBN kepada DPR',
      'Menetapkan Peraturan Pemerintah (PP) dan Peraturan Pemerintah Pengganti Undang-Undang (Perppu) jika dalam kegentingan memaksa'
    ],
    powers: [
      'Menyatakan perang, membuat perdamaian, dan perjanjian dengan negara lain atas persetujuan DPR',
      'Mengangkat duta dan konsul serta menerima penempatan duta negara sahabat',
      'Memberikan grasi dan rehabilitasi dengan pertimbangan MA',
      'Memberikan amnesti dan abolisi dengan pertimbangan DPR'
    ],
    checksAndBalances: [
      { target: 'DPR', relationship: 'Membahas dan menyetujui bersama Rancangan Undang-Undang (RUU) serta APBN.' },
      { target: 'MK', relationship: 'Dapat dimakzulkan oleh MPR apabila MK memutus Presiden bersalah melakukan pengkhianatan terhadap negara/korupsi.' }
    ]
  },
  {
    id: 'dpr',
    name: 'DPR RI',
    fullName: 'Dewan Perwakilan Rakyat Republik Indonesia',
    branch: 'Legislatif',
    role: 'Lembaga perwakilan rakyat yang memegang kekuasaan membentuk undang-undang dan mengawasi jalannya pemerintahan eksekutif.',
    members: 'Dipilih melalui pemilihan umum legislatif berbasis partai politik setiap 5 tahun sekali.',
    duties: [
      'Fungsi Legislasi: Membentuk undang-undang bersama Presiden',
      'Fungsi Anggaran: Membahas dan memberikan persetujuan terhadap Rancangan APBN',
      'Fungsi Pengawasan: Mengawasi pelaksanaan UU, APBN, dan kebijakan pemerintah',
      'Memberikan pertimbangan kepada Presiden atas pengangkatan duta dan penerimaan duta negara lain'
    ],
    powers: [
      'Hak Interpelasi: Meminta keterangan kepada pemerintah mengenai kebijakan penting dan strategis',
      'Hak Angket: Melakukan penyelidikan terhadap pelaksanaan undang-undang atau kebijakan pemerintah yang diduga bertentangan dengan peraturan',
      'Hak Menyatakan Pendapat: Menyatakan pendapat atas kebijakan pemerintah atau dugaan pelanggaran hukum oleh Presiden/Wapres'
    ],
    checksAndBalances: [
      { target: 'Presiden', relationship: 'Mengawasi jalannya pemerintahan serta mengesahkan UU bersama Presiden.' },
      { target: 'MK', relationship: 'UU yang disahkan DPR dapat dibatalkan MK jika dinilai bertentangan dengan UUD 1945.' }
    ]
  },
  {
    id: 'dpd',
    name: 'DPD RI',
    fullName: 'Dewan Perwakilan Daerah Republik Indonesia',
    branch: 'Legislatif',
    role: 'Lembaga perwakilan daerah yang mewakili aspirasi provinsi untuk memperjuangkan otonomi daerah dan pemerataan pembangunan.',
    members: 'Dipilih dari setiap provinsi melalui pemilu dari jalur non-partai (independen perseorangan), 4 anggota per provinsi.',
    duties: [
      'Mengajukan RUU kepada DPR terkait otonomi daerah, hubungan pusat-daerah, pemekaran daerah, dan pengelolaan SDA',
      'Ikut membahas RUU yang berkaitan dengan otonomi daerah bersama DPR',
      'Memberikan pertimbangan kepada DPR atas RUU APBN, pajak, pendidikan, dan agama',
      'Mengawasi pelaksanaan UU terkait otonomi daerah dan menyampaikan hasilnya ke DPR'
    ],
    powers: [
      'Memberikan masukan substantif berbasis kebutuhan nyata daerah terpencil dan perbatasan.',
      'Melakukan advokasi anggaran transfer ke daerah (Dana Alokasi Umum & Khusus).'
    ],
    checksAndBalances: [
      { target: 'DPR', relationship: 'Bermitra dalam pengusulan dan pembahasan RUU otonomi daerah.' },
      { target: 'MPR', relationship: 'Seluruh anggota DPD bersama DPR bergabung menjadi anggota Majelis Permusyawaratan Rakyat (MPR).' }
    ]
  },
  {
    id: 'mpr',
    name: 'MPR RI',
    fullName: 'Majelis Permusyawaratan Rakyat Republik Indonesia',
    branch: 'Legislatif',
    role: 'Lembaga perwakilan rakyat paripurna yang memegang wewenang konstitusional tertinggi untuk mengubah dan menetapkan UUD.',
    members: 'Terdiri atas seluruh anggota DPR RI dan seluruh anggota DPD RI yang diresmikan oleh KPU.',
    duties: [
      'Mengubah dan menetapkan Undang-Undang Dasar',
      'Melantik Presiden dan Wakil Presiden hasil pemilihan umum',
      'Memutuskan usul DPR untuk memberhentikan Presiden/Wakil Presiden dalam masa jabatannya setelah adanya putusan MK'
    ],
    powers: [
      'Memilih Wakil Presiden dari 2 calon yang diajukan Presiden jika terjadi kekosongan jabatan Wapres',
      'Memilih Presiden dan Wapres dari 2 pasangan calon jika keduanya mangkat secara bersamaan'
    ],
    checksAndBalances: [
      { target: 'UUD 1945', relationship: 'Berwenang mengamandemen pasal-pasal UUD kecuali bentuk Negara Kesatuan Republik Indonesia (NKRI).' },
      { target: 'MK', relationship: 'Hanya dapat memproses pemakzulan Presiden jika MK telah memutus terdapat pelanggaran hukum berat.' }
    ]
  },
  {
    id: 'ma',
    name: 'Mahkamah Agung (MA)',
    fullName: 'Mahkamah Agung Republik Indonesia',
    branch: 'Yudikatif',
    role: 'Puncak peradilan tertinggi di Indonesia yang membawahi lingkungan peradilan umum, agama, militer, dan tata usaha negara (TUN).',
    members: 'Hakim Agung yang diusulkan oleh Komisi Yudisial (KY) dan disetujui oleh DPR, kemudian ditetapkan oleh Presiden.',
    duties: [
      'Mengadili perkara pada tingkat kasasi',
      'Menguji peraturan perundang-undangan di bawah undang-undang terhadap undang-undang (Hak Uji Materiil Perpres, PP, Perda)',
      'Melakukan pengawasan tertinggi terhadap penyelenggaraan jalannya peradilan di semua lingkungan peradilan'
    ],
    powers: [
      'Memberikan pertimbangan hukum kepada Presiden dalam permohonan Grasi dan Rehabilitasi',
      'Memberikan nasihat hukum kepada lembaga tinggi negara lainnya jika diminta'
    ],
    checksAndBalances: [
      { target: 'Pemerintah', relationship: 'Menguji keabsahan Peraturan Pemerintah atau Perda jika bertentangan dengan UU di atasnya.' },
      { target: 'KY', relationship: 'Perilaku etik Hakim Agung dan hakim di bawahnya diawasi secara eksternal oleh Komisi Yudisial.' }
    ]
  },
  {
    id: 'mk',
    name: 'Mahkamah Konstitusi (MK)',
    fullName: 'Mahkamah Konstitusi Republik Indonesia',
    branch: 'Yudikatif',
    role: 'Lembaga peradilan pengawal konstitusi (The Guardian of the Constitution) dan penafsir tunggal UUD 1945.',
    members: '9 Hakim Konstitusi (3 diajukan Presiden, 3 diajukan DPR, 3 diajukan MA) yang ditetapkan oleh Presiden.',
    duties: [
      'Menguji undang-undang terhadap Undang-Undang Dasar NRI 1945 (Judicial Review)',
      'Memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh UUD 1945',
      'Memutus pembubaran partai politik yang bertentangan dengan dasar negara',
      'Memutus perselisihan tentang hasil pemilihan umum (PHPU)'
    ],
    powers: [
      'Wajib memberikan putusan atas pendapat DPR bahwa Presiden dan/atau Wakil Presiden diduga telah melakukan pelanggaran hukum (proses pemakzulan).'
    ],
    checksAndBalances: [
      { target: 'DPR & Presiden', relationship: 'Dapat membatalkan produk undang-undang buatan DPR & Presiden jika terbukti inkonstitusional.' },
      { target: 'KPU', relationship: 'Memutus sengketa hasil pemilu yang bersifat final dan mengikat.' }
    ]
  },
  {
    id: 'ky',
    name: 'Komisi Yudisial (KY)',
    fullName: 'Komisi Yudisial Republik Indonesia',
    branch: 'Yudikatif',
    role: 'Lembaga independen yang berwenang mengusulkan pengangkatan hakim agung serta menjaga dan menegakkan kehormatan, keluhuran martabat, serta perilaku hakim.',
    members: '7 orang komisioner berlatar belakang mantan hakim, akademisi hukum, praktisi hukum, dan tokoh masyarakat.',
    duties: [
      'Menerima laporan masyarakat mengenai dugaan pelanggaran Kode Etik dan Pedoman Perilaku Hakim (KEPPH)',
      'Melakukan investigasi dan pemeriksaan dugaan pelanggaran etik peradilan',
      'Menyeleksi dan mengusulkan calon Hakim Agung kepada DPR'
    ],
    powers: [
      'Menjatuhkan rekomendasi sanksi ringan, sedang, hingga berat (pemberhentian) melalui Majelis Kehormatan Hakim (MKH).'
    ],
    checksAndBalances: [
      { target: 'MA', relationship: 'Menjaga integritas moral aparat peradilan MA tanpa mencampuri independensi isi putusan hakim.' }
    ]
  },
  {
    id: 'bpk',
    name: 'Badan Pemeriksa Keuangan (BPK)',
    fullName: 'Badan Pemeriksa Keuangan Republik Indonesia',
    branch: 'Eksaminatif',
    role: 'Lembaga negara yang bebas dan mandiri untuk memeriksa pengelolaan dan tanggung jawab keuangan negara.',
    members: '9 orang anggota BPK yang dipilih oleh DPR dengan memperhatikan pertimbangan DPD dan diresmikan oleh Presiden.',
    duties: [
      'Memeriksa pengelolaan dan tanggung jawab keuangan negara yang dilakukan oleh Pemerintah Pusat, Pemerintah Daerah, Bank Indonesia, BUMN, dan BLU',
      'Menyerahkan hasil pemeriksaan keuangan negara kepada DPR, DPD, dan DPRD sesuai kewenangannya',
      'Menindaklanjuti temuan kerugian negara ke aparat penegak hukum (KPK, Kejaksaan, Polri) jika ditemukan indikasi tindak pidana korupsi'
    ],
    powers: [
      'Menetapkan opini pemeriksaan laporan keuangan (Wajar Tanpa Pengecualian / WTP, Wajar Dengan Pengecualian / WDP, Tidak Memberikan Pendapat / Disclaimer).'
    ],
    checksAndBalances: [
      { target: 'Pemerintah', relationship: 'Mengaudit transparansi penggunaan APBN kementerian dan lembaga negara.' },
      { target: 'DPR & DPD', relationship: 'Laporan audit BPK menjadi dasar DPR untuk mengevaluasi kinerja eksekutif.' }
    ]
  }
];

export const CIVIC_DILEMMAS: CivicDilemma[] = [
  {
    id: 'dilemma-1',
    title: 'Musyawarah Tata Ruang: Lapangan Olahraga Pemuda vs Sentra Koperasi UMKM Warga',
    context: 'Di Kelurahan Mekar Jaya, terdapat sebidang tanah kas desa seluas 1.500 m². Kelompok Karang Taruna menginginkan tanah tersebut dibangun lapangan futsal dan basket gratis untuk menyalurkan bakat pemuda serta mencegah kenakalan remaja. Namun, perkumpulan ibu-ibu dan pedagang kecil mengusulkan agar lahan itu disulap menjadi kios sentra kuliner UMKM untuk memulihkan ekonomi 30 keluarga kurang mampu.',
    location: 'Kelurahan Mekar Jaya',
    role: 'Kepala Desa / Pemimpin Forum Musyawarah Warga',
    problemStatement: 'Sebagai pemimpin musyawarah desa, forum mulai memanas karena masing-masing pihak merasa aspirasinya paling mendesak. Bagaimana Anda mengambil keputusan yang bijaksana berlandaskan Pancasila Sila ke-4 dan ke-5?',
    choices: [
      {
        id: 'c1-a',
        title: 'Mendominasi keputusan sepihak: Memilih lapangan olahraga karena suara pemuda paling lantang',
        description: 'Menetapkan pembangunan lapangan olahraga secara langsung agar rapat cepat selesai tanpa kompromi.',
        scores: { unity: -6, justice: -4, legal: 2, democracy: -8 },
        civicFeedback: 'Keputusan ini melanggar etika musyawarah mufakat (Sila 4). Sikap otoriter mengabaikan mata pencaharian warga miskin (Sila 5) dan memicu kecemburuan sosial yang merusak kerukunan warga.',
        constitutionalBasis: 'UUD 1945 Pasal 28C ayat (2) & Sila ke-4 Pancasila'
      },
      {
        id: 'c1-b',
        title: 'Solusi Integratif Berimbang: Desain Terpadu (Zona Olahraga Multifungsi & Kios UMKM Mengelilingi Lapangan)',
        description: 'Membentuk tim kerja bersama pemuda dan perwakilan UMKM untuk merancang tata ruang terintegrasi: lapangan multifungsi di tengah yang dikelilingi gerai UMKM higienis, dengan sistem bagi hasil keuntungan kas desa.',
        scores: { unity: 10, justice: 9, legal: 8, democracy: 10 },
        civicFeedback: 'Luar biasa! Ini adalah wujud murni Demokrasi Pancasila yang dipimpin hikmat kebijaksanaan. Aspirasi pemuda terwadahi, roda perekonomian rakyat kecil berjalan, dan kedua kelompok justru saling bergotong royong.',
        constitutionalBasis: 'Pancasila Sila 3, 4, 5 & UUD 1945 Pasal 33 ayat (1)'
      },
      {
        id: 'c1-c',
        title: 'Melakukan voting sederhana mayoritas 50%+1 secara terburu-buru',
        description: 'Langsung mengadakan pemungutan suara hitung kepala tanpa upaya dialog musyawarah mufakat.',
        scores: { unity: -2, justice: 3, legal: 5, democracy: 2 },
        civicFeedback: 'Voting adalah opsi darurat terakhir dalam tradisi musyawarah Indonesia. Voting terburu-buru meninggalkan pihak yang kalah merasa tersisih dan enggan merawat fasilitas desa.',
        constitutionalBasis: 'Ketetapan MPR No. I/MPR/2003 tentang Butir Pengamalan Sila ke-4'
      }
    ]
  },
  {
    id: 'dilemma-2',
    title: 'Kebebasan Berekspresi vs Disinformasi pada Pemilihan Ketua OSIS',
    context: 'Menjelang pemilihan Ketua OSIS SMA Nusantara, sebuah akun media sosial anonim menyebarkan infografis yang memuat fitnah rekayasa terhadap salah satu kandidat terkait keyakinan agamanya. Isu ini dengan cepat memecah belah siswa menjadi kubu-kubu primordial yang saling menghina di grup WhatsApp.',
    location: 'SMA Nusantara',
    role: 'Ketua Panitia Pengawas Pemilihan OSIS (Panwaslu Siswa)',
    problemStatement: 'Sebagian pendukung beralasan bahwa menyebarkan info tersebut adalah bagian dari "kebebasan berbicara dan berpendapat di negara demokrasi". Apa tindakan konstitusional dan etis yang harus Anda ambil?',
    choices: [
      {
        id: 'c2-a',
        title: 'Mendiamkan saja atas nama kebebasan berekspresi mutlak tanpa intervensi',
        description: 'Membiarkan rumor terus beredar liar dengan asumsi bahwa pemilih cerdas akan menyaring sendiri informasinya.',
        scores: { unity: -9, justice: -7, legal: -8, democracy: -5 },
        civicFeedback: 'Keliru besar! Kebebasan berekspresi dalam konstitusi (Pasal 28J UUD 1945) dibatasi oleh kehormatan orang lain dan ketertiban umum. Membiarkan fitnah dan SARA merusak integrasi sosial sekolah.',
        constitutionalBasis: 'UUD 1945 Pasal 28J ayat (2) & UU ITE'
      },
      {
        id: 'c2-b',
        title: 'Klarifikasi Fakta Terbuka, Mediasi Rekonsiliasi, dan Penegakan Regulasi Kampanye Jujur',
        description: 'Memanggil kedua tim sukses, merilis verifikasi fakta objektif di papan pengumuman sekolah, serta memberikan sanksi administratif kepada penyebar hoaks sesuai pakta integritas pemilu.',
        scores: { unity: 9, justice: 10, legal: 10, democracy: 8 },
        civicFeedback: 'Tepat dan berkeadilan! Sikap ini melindungi hak martabat kandidat yang difitnah (Pasal 28G) sekaligus mendidik siswa tentang literasi digital dan asas pemilu LUBER JURDIL.',
        constitutionalBasis: 'UUD 1945 Pasal 28G ayat (1) & Asas Pemilu LUBER JURDIL'
      },
      {
        id: 'c2-c',
        title: 'Membatalkan seluruh proses pemilihan dan menunjuk langsung ketua OSIS',
        description: 'Membekukan pemilihan umum secara sewenang-wenang demi menghindari konflik.',
        scores: { unity: -3, justice: -6, legal: -5, democracy: -10 },
        civicFeedback: 'Membatalkan pemilu mematikan ruang pembelajaran demokrasi bagi generasi muda. Solusi terhadap masalah demokrasi adalah pematangan etika berdemokrasi, bukan pembungkaman.',
        constitutionalBasis: 'Prinsip Kedaulatan Rakyat UUD 1945 Pasal 1 ayat (2)'
      }
    ]
  },
  {
    id: 'dilemma-3',
    title: 'Toleransi Kerukunan Umat Beragama & Pembangunan Tempat Ibadah',
    context: 'Sekelompok warga perumahan minoritas mengajukan izin renovasi rumah doa menjadi tempat peribadatan resmi yang representatif. Seluruh berkas administrasi dan izin bangunan (PBG) telah lengkap menurut regulasi. Namun, sekelompok kecil warga setempat menolak dengan alasan kekhawatiran kenyamanan parkir kendaraan di hari libur.',
    location: 'Perumahan Harmoni Indah',
    role: 'Ketua RW & Fasilitator Forum Kerukunan Umat Beragama (FKUB)',
    problemStatement: 'Bagaimana Anda menengahi situasi ini dengan berpegang pada jaminan kebebasan beragama Pasal 29 UUD 1945 sekaligus memelihara ketertiban lingkungan bersama?',
    choices: [
      {
        id: 'c3-a',
        title: 'Menolak izin renovasi demi menyenangkan kelompok penolak dan menghindari ribut',
        description: 'Mengorbankan hak konstitusional warga pemohon demi mempertahankan ketenangan semu.',
        scores: { unity: -8, justice: -10, legal: -9, democracy: -6 },
        civicFeedback: 'Tindakan ini inkonstitusional! Negara dan aparatur lingkungan berkewajiban menjamin kemerdekaan beribadah tiap penduduk (Pasal 29 ayat 2 UUD 1945). Tunduk pada intoleransi melanggar dasar negara.',
        constitutionalBasis: 'UUD 1945 Pasal 29 ayat (2) & TAP MPR No. I/MPR/2003 Sila 1'
      },
      {
        id: 'c3-b',
        title: 'Dialog Warga Terbuka: Mengukuhkan Hak Ibadah & Menyepakati Rekayasa Parkir Bersama',
        description: 'Menegaskan bahwa hak beribadah dilindungi konstitusi, lalu memfasilitasi dialog teknis untuk mengatur jadwal sirkulasi parkir dan kerja sama keamanan pemuda antarumat beragama.',
        scores: { unity: 10, justice: 10, legal: 10, democracy: 9 },
        civicFeedback: 'Solusi paripurna! Menyandingkan kepatuhan konstitusi dengan dialog solutif teknis. Mengubah prasangka menjadi gotong royong lintas iman yang memperkokoh Bhinneka Tunggal Ika.',
        constitutionalBasis: 'UUD 1945 Pasal 29 & Sila 1, 2, dan 3 Pancasila'
      }
    ]
  },
  {
    id: 'dilemma-4',
    title: 'Integritas Pemilu: Godaan Politik Uang di Tengah Kesulitan Ekonomi',
    context: 'Menjelang Pilkada, salah satu tim sukses calon mendatangi ketua RT Anda dan menawarkan bantuan amplop tunai "uang transport" sebesar Rp300.000 untuk setiap warga dengan syarat warga menandatangani surat komitmen mencoblos paslon tertentu. Warga RT sedang banyak yang membutuhkan dana untuk biaya sekolah anak.',
    location: 'Lingkungan RT 04',
    role: 'Warga Negara Berintegritas / Tokoh Masyarakat',
    problemStatement: 'Apa sikap kewarganegaraan yang paling mencerminkan integritas kedaulatan rakyat dan nilai antikorupsi?',
    choices: [
      {
        id: 'c4-a',
        title: 'Menerima uangnya namun mencoblos sesuai hati nurani (sikap permisif)',
        description: 'Beranggapan bahwa mengambil rezeki tidak apa-apa asalkan di bilik suara tetap bebas memilih.',
        scores: { unity: -2, justice: -5, legal: -6, democracy: -4 },
        civicFeedback: 'Meskipun berniat memilih bebas, menerima uang pelicin menormalisasi budaya suap politik (money politics) dan merupakan pelanggaran hukum pemilu yang merusak masa depan kepemimpinan bangsa.',
        constitutionalBasis: 'UU Tindak Pidana Pemilu & Prinsip Pemilu Jurdil'
      },
      {
        id: 'c4-b',
        title: 'Menolak tegas politik uang, mengedukasi warga, dan melaporkan ke Pengawas Pemilu (Bawaslu)',
        description: 'Menolak tawaran secara santun namun tegas, mengingatkan warga bahwa masa depan 5 tahun tidak boleh dijual, serta melaporkan bukti ke saluran resmi penegak pemilu.',
        scores: { unity: 8, justice: 10, legal: 10, democracy: 10 },
        civicFeedback: 'Tindakan patriotik sejati! Menjaga muruah kedaulatan rakyat (Pasal 1 ayat 2 UUD 1945) dan memastikan pemimpin terpilih murni atas dasar rekam jejak, bukan transaksi haram.',
        constitutionalBasis: 'UUD 1945 Pasal 1 ayat (2) & UU Pemilu No. 7/2017'
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // DASAR - PANCASILA
  {
    id: 'q-1',
    question: 'Rumusan dasar negara Pancasila yang sah dan berlaku secara yuridis konstitusional tercantum di dalam naskah...',
    options: [
      'Pidato Ir. Soekarno tanggal 1 Juni 1945',
      'Naskah Piagam Jakarta tanggal 22 Juni 1945',
      'Pembukaan UUD NRI 1945 Alinea Keempat',
      'Dekrit Presiden 5 Juli 1959'
    ],
    correctIndex: 2,
    explanation: 'Rumusan otentik Pancasila yang sah secara hukum ketatanegaraan berada pada Alinea Keempat Pembukaan UUD NRI 1945 yang disahkan PPKI pada 18 Agustus 1945.',
    constitutionalReference: 'Pembukaan UUD 1945 Alinea IV',
    difficulty: 'Dasar',
    topic: 'Pancasila'
  },
  {
    id: 'q-2',
    question: 'Lambang Sila kedua Pancasila adalah Rantai Emas. Mengapa mata rantai tersebut terdiri atas bentuk lingkaran dan segi empat?',
    options: [
      'Bentuk lingkaran melambangkan alam, segi empat melambangkan teknologi',
      'Mata rantai segi empat melambangkan laki-laki, lingkaran melambangkan perempuan yang saling berkait kokoh',
      'Bentuk segi empat melambangkan hukum, lingkaran melambangkan perdamaian',
      'Melambangkan empat penjuru mata angin kepulauan Nusantara'
    ],
    correctIndex: 1,
    explanation: 'Mata rantai segi empat melambangkan pria, sedangkan lingkaran melambangkan wanita. Keduanya berkait erat menandakan kesetaraan derajat dan perlunya saling bersatu bahu-membahu.',
    constitutionalReference: 'Penjelasan Lambang Garuda Pancasila (PP No. 66/1951)',
    difficulty: 'Dasar',
    topic: 'Pancasila'
  },
  {
    id: 'q-3',
    question: 'Sikap tidak bergaya hidup mewah, tidak memamerkan kekayaan (flexing) secara berlebihan di ruang publik, serta gemar menabung merupakan pengamalan Sila ke...',
    options: ['Sila Pertama', 'Sila Kedua', 'Sila Ketiga', 'Sila Kelima'],
    correctIndex: 3,
    explanation: 'Butir pengamalan Sila ke-5 Keadilan Sosial menekankan sikap tidak bergaya hidup mewah, tidak boros, serta menghargai hasil kerja keras untuk kesejahteraan bersama.',
    constitutionalReference: 'Ketetapan MPR No. I/MPR/2003 Sila 5',
    difficulty: 'Dasar',
    topic: 'Pancasila'
  },
  {
    id: 'q-4',
    question: 'Siapakah tokoh yang pertama kali memperkenalkan istilah "Pancasila" dalam sidang BPUPKI tanggal 1 Juni 1945?',
    options: ['Drs. Mohammad Hatta', 'Prof. Mohammad Yamin', 'Ir. Soekarno', 'Mr. Soepomo'],
    correctIndex: 2,
    explanation: 'Ir. Soekarno dalam pidatonya pada 1 Juni 1945 mengusulkan lima prinsip dasar negara dengan nama Pancasila atas petunjuk seorang ahli bahasa.',
    constitutionalReference: 'Risalah Sidang BPUPKI 1 Juni 1945',
    difficulty: 'Dasar',
    topic: 'Pancasila'
  },
  {
    id: 'q-5',
    question: 'Mengembangkan rasa bangga bertanah air Indonesia dan rela berkorban untuk kepentingan bangsa dan negara merupakan perwujudan dari nilai...',
    options: ['Ketuhanan', 'Kemanusiaan', 'Persatuan', 'Keadilan Sosial'],
    correctIndex: 2,
    explanation: 'Nilai Persatuan Indonesia (Sila ke-3) memuat komitmen nasionalisme, patriotisme, dan mengutamakan keutuhan bangsa di atas kepentingan pribadi.',
    constitutionalReference: 'Sila ke-3 Pancasila',
    difficulty: 'Dasar',
    topic: 'Pancasila'
  },

  // MENENGAH - KONSTITUSI & LEMBAGA
  {
    id: 'q-6',
    question: 'Berdasarkan Pasal 1 ayat (2) UUD NRI 1945 pasca amandemen, kedaulatan berada di tangan...',
    options: [
      'MPR dan dilaksanakan sepenuhnya oleh MPR',
      'Presiden sebagai pemegang kekuasaan pemerintahan tertinggi',
      'Rakyat dan dilaksanakan menurut Undang-Undang Dasar',
      'DPR sebagai wakil rakyat yang dipilih langsung'
    ],
    correctIndex: 2,
    explanation: 'Pasal 1 ayat (2) UUD 1945 menegaskan: "Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar" (prinsip kedaulatan hukum dan konstitusional).',
    constitutionalReference: 'UUD 1945 Pasal 1 ayat (2)',
    difficulty: 'Menengah',
    topic: 'UUD 1945'
  },
  {
    id: 'q-7',
    question: 'Lembaga peradilan yang memiliki kewenangan menguji undang-undang terhadap UUD NRI 1945 (Judicial Review) adalah...',
    options: [
      'Mahkamah Agung (MA)',
      'Mahkamah Konstitusi (MK)',
      'Komisi Yudisial (KY)',
      'Dewan Perwakilan Rakyat (DPR)'
    ],
    correctIndex: 1,
    explanation: 'Mahkamah Konstitusi (MK) berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk menguji undang-undang terhadap UUD 1945.',
    constitutionalReference: 'UUD 1945 Pasal 24C ayat (1)',
    difficulty: 'Menengah',
    topic: 'Lembaga Negara'
  },
  {
    id: 'q-8',
    question: 'Hak DPR untuk meminta keterangan kepada pemerintah mengenai kebijakan yang penting dan strategis serta berdampak luas bagi kehidupan bermasyarakat dinamakan...',
    options: ['Hak Angket', 'Hak Interpelasi', 'Hak Imunitas', 'Hak Menyatakan Pendapat'],
    correctIndex: 1,
    explanation: 'Hak Interpelasi adalah hak DPR untuk meminta keterangan resmi kepada pemerintah tentang kebijakan penting yang berdampak luas.',
    constitutionalReference: 'UUD 1945 Pasal 20A ayat (2)',
    difficulty: 'Menengah',
    topic: 'Lembaga Negara'
  },
  {
    id: 'q-9',
    question: 'Berdasarkan Pasal 31 ayat (4) UUD NRI 1945, prioritas alokasi anggaran pendidikan dari APBN dan APBD sekurang-kurangnya adalah sebesar...',
    options: ['10%', '15%', '20%', '25%'],
    correctIndex: 2,
    explanation: 'Pasal 31 ayat (4) mewajibkan negara memprioritaskan anggaran pendidikan sekurang-kurangnya 20% dari APBN dan APBD demi mencerdaskan kehidupan bangsa.',
    constitutionalReference: 'UUD 1945 Pasal 31 ayat (4)',
    difficulty: 'Menengah',
    topic: 'UUD 1945'
  },
  {
    id: 'q-10',
    question: 'Perhatikan pasangan lembaga yudikatif berikut! Lembaga yang berwenang mengusulkan pengangkatan Hakim Agung serta menjaga keluhuran martabat dan kode etik hakim adalah...',
    options: ['Mahkamah Konstitusi', 'Komisi Yudisial', 'Kejaksaan Agung', 'Kementerian Hukum & HAM'],
    correctIndex: 1,
    explanation: 'Komisi Yudisial (KY) bersifat mandiri dengan wewenang mengusulkan pengangkatan hakim agung dan menegakkan martabat serta perilaku hakim.',
    constitutionalReference: 'UUD 1945 Pasal 24B ayat (1)',
    difficulty: 'Menengah',
    topic: 'Lembaga Negara'
  },

  // LANJUTAN - HAM, DEMOKRASI & KEWARGANEGARAAN
  {
    id: 'q-11',
    question: 'Mengapa dalam Pasal 28J ayat (2) UUD 1945 ditegaskan bahwa pelaksanaan hak asasi seseorang wajib tunduk pada pembatasan undang-undang?',
    options: [
      'Agar pemerintah dapat membatalkan hak asasi warga sewaktu-waktu tanpa alasan',
      'Untuk menjamin pengakuan serta penghormatan atas hak dan kebebasan orang lain serta memenuhi tuntutan moral, nilai agama, dan ketertiban umum',
      'Karena Indonesia menganut sistem monarki mutlak',
      'Agar warga negara tidak diperbolehkan mengkritik kebijakan publik'
    ],
    correctIndex: 1,
    explanation: 'Di Indonesia, kebebasan individu dibatasi oleh undang-undang semata-mata untuk menjamin hak orang lain serta menjaga keharmonisan moral dan ketertiban sosial.',
    constitutionalReference: 'UUD 1945 Pasal 28J ayat (2)',
    difficulty: 'Lanjutan',
    topic: 'HAM & Demokrasi'
  },
  {
    id: 'q-12',
    question: 'Seorang anak lahir di negara yang menganut asas Ius Soli (tempat kelahiran), namun kedua orang tuanya berasal dari negara yang menganut asas Ius Sanguinis (keturunan). Akibatnya anak tersebut berpotensi memiliki status...',
    options: ['Apatride (tanpa kewarganegaraan)', 'Bipatride (kewarganegaraan ganda)', 'Naturalisasi istimewa', 'Stateless refugee'],
    correctIndex: 1,
    explanation: 'Jika lahir di negara Ius Soli ia berhak warga negara setempat, dan dari orang tuanya yang Ius Sanguinis ia juga mewarisi warga negara orang tua, sehingga menjadi Bipatride (kewarganegaraan ganda).',
    constitutionalReference: 'UU No. 12 Tahun 2006 tentang Kewarganegaraan RI',
    difficulty: 'Lanjutan',
    topic: 'HAM & Demokrasi'
  },
  {
    id: 'q-13',
    question: 'Asas penyelenggaraan pemilihan umum di Indonesia yang menjamin bahwa pemilih memberikan suara secara langsung tanpa perantara dan tanpa ada paksaan dari siapa pun adalah asas...',
    options: ['Langsung dan Bebas', 'Umum dan Rahasia', 'Jujur dan Adil', 'Akuntabel dan Terbuka'],
    correctIndex: 0,
    explanation: 'Asas "Langsung" berarti suara diberikan sendiri tanpa perwakilan, sedangkan "Bebas" menjamin pemilih menentukan pilihan sesuai hati nurani tanpa intimidasi atau paksaan.',
    constitutionalReference: 'UUD 1945 Pasal 22E ayat (1)',
    difficulty: 'Lanjutan',
    topic: 'HAM & Demokrasi'
  },
  {
    id: 'q-14',
    question: 'Konsep wawasan nusantara memandang kepulauan Indonesia sebagai satu kesatuan utuh dalam bidang politik, ekonomi, sosial budaya, dan pertahanan keamanan. Hal ini selaras dengan hakikat semboyan...',
    options: ['Mitreka Satata', 'Bhinneka Tunggal Ika', 'Tut Wuri Handayani', 'Kertayasa Gemah Ripah'],
    correctIndex: 1,
    explanation: 'Bhinneka Tunggal Ika (berbeda-beda tetapi tetap satu) menjadi falsafah pemersatu keberagaman kepulauan Indonesia menjadi satu kesatuan geopolitik.',
    constitutionalReference: 'UUD 1945 Pasal 36A',
    difficulty: 'Lanjutan',
    topic: 'HAM & Demokrasi'
  },
  {
    id: 'q-15',
    question: 'Jika DPR dan Presiden mengesahkan sebuah Undang-Undang baru yang diduga merugikan hak konstitusional kelompok masyarakat adat, langkah hukum konstitusional yang dapat ditempuh warga adalah...',
    options: [
      'Mengajukan permohonan pembatalan ke Mahkamah Agung',
      'Mengajukan permohonan pengujian materiil (Judicial Review) ke Mahkamah Konstitusi',
      'Menuntut pencopotan menteri terkait ke Komisi Yudisial',
      'Mengadakan referendum pembubaran dewan perwakilan'
    ],
    correctIndex: 1,
    explanation: 'Kewenangan menguji materi muatan undang-undang yang diduga bertentangan dengan UUD 1945 merupakan wewenang mutlak Mahkamah Konstitusi (MK).',
    constitutionalReference: 'UUD 1945 Pasal 24C ayat (1)',
    difficulty: 'Lanjutan',
    topic: 'UUD 1945'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Amandemen Konstitusi',
    definition: 'Perubahan resmi terhadap dokumen undang-undang dasar tanpa mengganti naskah aslinya secara keseluruhan demi menyesuaikan perkembangan zaman.',
    category: 'Konstitusi',
    example: 'UUD NRI 1945 telah mengalami 4 kali amandemen bertahap pada kurun tahun 1999 hingga 2002 oleh MPR.'
  },
  {
    term: 'Apatride & Bipatride',
    definition: 'Status kewarganegaraan: Apatride adalah kondisi seseorang tanpa kewarganegaraan apapun, sedangkan Bipatride adalah kondisi seseorang yang memiliki kewarganegaraan ganda.',
    category: 'Tata Negara',
    example: 'Perbedaan asas Ius Soli (tempat lahir) dan Ius Sanguinis (garis darah) antar negara dapat menimbulkan status Bipatride atau Apatride.'
  },
  {
    term: 'Checks and Balances',
    definition: 'Prinsip ketatanegaraan di mana masing-masing cabang kekuasaan negara (eksekutif, legislatif, yudikatif) saling mengawasi dan mengimbangi agar tidak terjadi tirani kekuasaan tunggal.',
    category: 'Tata Negara',
    example: 'DPR mengawasi anggaran Presiden, namun UU yang disahkan DPR dan Presiden dapat dibatalkan oleh MK jika melanggar konstitusi.'
  },
  {
    term: 'Chauvinisme',
    definition: 'Bentuk nasionalisme sempit dan berlebihan yang mengagung-agungkan bangsanya sendiri seraya memandang rendah dan meremehkan bangsa lain.',
    category: 'Kebangsaan',
    example: 'Nasionalisme Indonesia berakar pada Sila ke-3 dan kemanusiaan universal, menolak chauvinisme fanatik yang memicu perang.'
  },
  {
    term: 'Demokrasi Pancasila',
    definition: 'Sistem demokrasi khas Indonesia yang bersumber pada kepribadian bangsa, mendasarkan kedaulatan rakyat pada musyawarah mufakat yang dijiwai oleh nilai-nilai luhur ketuhanan, kemanusiaan, persatuan, dan keadilan sosial.',
    category: 'Demokrasi',
    example: 'Pengambilan keputusan dalam musyawarah warga mengedepankan mufakat kekeluargaan dibanding sekadar adu kekuatan suara.'
  },
  {
    term: 'Good Governance',
    definition: 'Penyelenggaraan manajemen pembangunan pemerintahan yang solid, bertanggung jawab, transparan, efektif, akuntabel, dan bebas dari korupsi, kolusi, serta nepotisme (KKN).',
    category: 'Tata Negara',
    example: 'Penyediaan portal layanan perizinan terpadu online berbasis keterbukaan informasi publik oleh pemerintah daerah.'
  },
  {
    term: 'Hak Asasi Manusia (HAM)',
    definition: 'Hak dasar yang melekat pada hakikat dan keberadaan manusia sebagai makhluk Tuhan Yang Maha Esa dan merupakan anugerah-Nya yang wajib dihormati, dijunjung tinggi, dan dilindungi oleh negara, hukum, pemerintah, dan setiap orang.',
    category: 'HAM',
    example: 'Hak untuk hidup, hak bebas dari penyiksaan, dan hak memeluk agama dijamin dalam Pasal 28I UUD 1945 sebagai hak yang tidak dapat dikurangi (non-derogable rights).'
  },
  {
    term: 'Hak Angket',
    definition: 'Hak konstitusional dewan perwakilan (DPR) untuk melakukan penyelidikan terhadap pelaksanaan undang-undang atau kebijakan strategis pemerintah yang diduga bertentangan dengan hukum.',
    category: 'Demokrasi',
    example: 'DPR membentuk Panitia Khusus (Pansus) Hak Angket untuk menyelidiki kasus pengelolaan dana talangan perbankan.'
  },
  {
    term: 'Judicial Review',
    definition: 'Wewenang peradilan untuk menguji keabsahan produk hukum (seperti Undang-Undang atau Peraturan Pemerintah) terhadap norma konstitusi yang lebih tinggi.',
    category: 'Konstitusi',
    example: 'Mahkamah Konstitusi membatalkan pasal dalam suatu UU karena dinilai melanggar hak pendidikan warga dalam UUD 1945.'
  },
  {
    term: 'LUBER dan JURDIL',
    definition: 'Asas pemilihan umum di Indonesia: Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil.',
    category: 'Demokrasi',
    example: 'Penyediaan bilik suara bersekat rapat memastikan asas Rahasia terjaga dari pengawasan pihak manapun.'
  },
  {
    term: 'Otonomi Daerah',
    definition: 'Hak, wewenang, dan kewajiban daerah otonom untuk mengatur dan mengurus sendiri urusan pemerintahan dan kepentingan masyarakat setempat dalam sistem NKRI.',
    category: 'Tata Negara',
    example: 'Pemerintah kabupaten/kota memiliki kewenangan mengelola retribusi pariwisata dan pembangunan puskesmas di wilayahnya.'
  },
  {
    term: 'Primordialisme',
    definition: 'Paham atau ikatan kesetiaan emosional yang berlebihan terhadap tradisi, adat istiadat, suku asal, ras, atau golongan kelahiran sejak kecil sehingga cenderung menolak pembauran.',
    category: 'Kebangsaan',
    example: 'Menolak memilih ketua kelas hanya karena calon tersebut berasal dari suku pendatang merupakan dampak buruk primordialisme.'
  },
  {
    term: 'Rule of Law',
    definition: 'Prinsip negara hukum di mana kekuasaan tertinggi dipegang oleh hukum yang adil, bukan oleh kehendak subjektif penguasa (rechstaat, bukan machtstaat).',
    category: 'Konstitusi',
    example: 'Presiden, menteri, maupun warga sipil harus melalui proses peradilan yang sama jika terbukti melanggar hukum pidana.'
  },
  {
    term: 'Sishankamrata',
    definition: 'Sistem Pertahanan dan Keamanan Rakyat Semesta: doktrin pertahanan negara di mana TNI dan Polri menjadi kekuatan utama, didukung oleh segenap rakyat Indonesia sebagai kekuatan pendukung.',
    category: 'Tata Negara',
    example: 'Partisipasi komponen cadangan dan kesadaran bela negara warga saat menghadapi krisis bencana alam atau ancaman teritorial.'
  },
  {
    term: 'Trias Politica',
    definition: 'Konsep pemisahan atau pembagian kekuasaan pemerintahan menjadi tiga cabang mandiri: Eksekutif (pelaksana hukum), Legislatif (pembuat hukum), dan Yudikatif (pengadil pelanggaran hukum).',
    category: 'Tata Negara',
    example: 'Di Indonesia, konsep ini diterapkan melalui prinsip pembagian kekuasaan (distribution of power) dengan mekanisme saling mengimbangi (checks and balances).'
  }
];

export const CIVIC_BADGES = [
  {
    id: 'badge-pancasila',
    title: 'Ksatria Pancasila',
    description: 'Menyelesaikan kuis dan simulasi pengamalan 5 Sila dengan skor sempurna.',
    icon: 'Shield'
  },
  {
    id: 'badge-konstitusi',
    title: 'Pengawal Konstitusi',
    description: 'Menguasai struktur lembaga negara dan pasal-pasal kunci UUD 1945.',
    icon: 'BookOpen'
  },
  {
    id: 'badge-musyawarah',
    title: 'Diplomat Musyawarah',
    description: 'Menyelesaikan seluruh skenario studi kasus dilema kewarganegaraan dengan keputusan berimbang.',
    icon: 'Users'
  },
  {
    id: 'badge-demokrasi',
    title: 'Warga Negara Teladan',
    description: 'Meraih skor minimal 80% pada seluruh paket evaluasi uji kompetensi Civic.',
    icon: 'Award'
  }
];
