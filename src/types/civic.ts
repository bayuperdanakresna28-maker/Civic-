export interface SilaItem {
  id: number;
  number: number;
  title: string;
  symbol: string;
  symbolDesc: string;
  philosophicalMeaning: string;
  values: string[];
  practices: {
    family: string[];
    school: string[];
    community: string[];
    nation: string[];
  };
}

export interface PracticeMatchItem {
  id: string;
  actionText: string;
  correctSila: number;
  explanation: string;
  category: 'Keluarga' | 'Sekolah' | 'Masyarakat' | 'Bernegara';
}

export interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  actors: string[];
  summary: string;
  historicalImpact: string;
}

export interface PasalItem {
  id: string;
  number: string;
  title: string;
  category: 'Hak Asasi Manusia' | 'Kewajiban Warga Negara' | 'Perekonomian & Kesejahteraan' | 'Pendidikan & Kebudayaan' | 'Pertahanan & Keamanan';
  ayats: {
    ayatNumber: number;
    text: string;
    analysis: string;
  }[];
}

export interface StateInstitution {
  id: string;
  name: string;
  fullName: string;
  branch: 'Eksekutif' | 'Legislatif' | 'Yudikatif' | 'Eksaminatif';
  role: string;
  members: string;
  duties: string[];
  powers: string[];
  checksAndBalances: {
    target: string;
    relationship: string;
  }[];
}

export interface DilemmaChoice {
  id: string;
  title: string;
  description: string;
  scores: {
    unity: number;      // Persatuan & Toleransi (-10 to +10)
    justice: number;    // Keadilan Sosial
    legal: number;      // Kepastian Hukum
    democracy: number;  // Musyawarah & Demokrasi
  };
  civicFeedback: string;
  constitutionalBasis: string;
}

export interface CivicDilemma {
  id: string;
  title: string;
  context: string;
  location: string;
  role: string;
  problemStatement: string;
  choices: DilemmaChoice[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  constitutionalReference: string;
  difficulty: 'Dasar' | 'Menengah' | 'Lanjutan';
  topic: 'Pancasila' | 'UUD 1945' | 'Lembaga Negara' | 'HAM & Demokrasi';
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Konstitusi' | 'Demokrasi' | 'HAM' | 'Tata Negara' | 'Kebangsaan';
  example: string;
}

export interface UserProgress {
  studentName: string;
  schoolName: string;
  completedSilaPracticeCount: number;
  completedDilemmas: string[];
  quizScores: {
    [packageId: string]: {
      score: number;
      total: number;
      completedAt: string;
    };
  };
  earnedBadges: string[];
}
