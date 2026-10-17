import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PancasilaModule } from './components/PancasilaModule';
import { ConstitutionModule } from './components/ConstitutionModule';
import { DilemmaSimulatorModule } from './components/DilemmaSimulatorModule';
import { QuizModule } from './components/QuizModule';
import { GlossaryModule } from './components/GlossaryModule';
import { StudentReportModal } from './components/StudentReportModal';
import { UserProgress } from './types/civic';
import { CIVIC_BADGES } from './data/civicData';

const STORAGE_KEY = 'civika_user_progress_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('pancasila');
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);

  // Initialize progress from localStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {
      studentName: 'Kresna Bayu Perdana',
      schoolName: 'Sekolah Global Mandiri',
      completedSilaPracticeCount: 0,
      completedDilemmas: [],
      quizScores: {},
      earnedBadges: ['badge-pancasila']
    };
  });

  // Save to localStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Handler for practice game progress
  const handleUpdatePracticeProgress = () => {
    setProgress((prev) => {
      const newCount = prev.completedSilaPracticeCount + 1;
      const newBadges = [...prev.earnedBadges];
      if (newCount >= 3 && !newBadges.includes('badge-pancasila')) {
        newBadges.push('badge-pancasila');
      }
      return {
        ...prev,
        completedSilaPracticeCount: newCount,
        earnedBadges: newBadges
      };
    });
  };

  // Handler for dilemma completion
  const handleCompleteDilemma = (dilemmaId: string) => {
    setProgress((prev) => {
      const newCompleted = prev.completedDilemmas.includes(dilemmaId)
        ? prev.completedDilemmas
        : [...prev.completedDilemmas, dilemmaId];

      const newBadges = [...prev.earnedBadges];
      if (newCompleted.length >= 2 && !newBadges.includes('badge-musyawarah')) {
        newBadges.push('badge-musyawarah');
      }

      return {
        ...prev,
        completedDilemmas: newCompleted,
        earnedBadges: newBadges
      };
    });
  };

  // Handler for quiz completion
  const handleSaveQuizScore = (packageId: string, score: number, total: number) => {
    setProgress((prev) => {
      const newScores = {
        ...prev.quizScores,
        [packageId]: {
          score,
          total,
          completedAt: new Date().toISOString()
        }
      };

      const newBadges = [...prev.earnedBadges];
      const pct = Math.round((score / total) * 100);

      if (packageId === 'Menengah' && pct >= 70 && !newBadges.includes('badge-konstitusi')) {
        newBadges.push('badge-konstitusi');
      }
      if (pct >= 80 && !newBadges.includes('badge-demokrasi')) {
        newBadges.push('badge-demokrasi');
      }

      return {
        ...prev,
        quizScores: newScores,
        earnedBadges: newBadges
      };
    });
  };

  // Handler for updating student profile
  const handleUpdateProfile = (name: string, school: string) => {
    setProgress((prev) => ({
      ...prev,
      studentName: name,
      schoolName: school
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReport={() => setIsReportOpen(true)}
        studentName={progress.studentName}
      />

      {/* Hero Section */}
      <HeroSection
        onStartLearn={(tab) => {
          setActiveTab(tab);
          const elem = document.getElementById('main-content');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'pancasila' && (
          <PancasilaModule onUpdatePracticeProgress={handleUpdatePracticeProgress} />
        )}

        {activeTab === 'konstitusi' && <ConstitutionModule />}

        {activeTab === 'simulasi' && (
          <DilemmaSimulatorModule
            onCompleteDilemma={handleCompleteDilemma}
            completedDilemmas={progress.completedDilemmas}
          />
        )}

        {activeTab === 'kuis' && (
          <QuizModule onSaveQuizScore={handleSaveQuizScore} />
        )}

        {activeTab === 'glosarium' && <GlossaryModule />}
      </main>

      {/* Quiet Footer */}
      <footer className="no-print mt-auto border-t border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Civika Indonesia</span>
            <span aria-hidden="true">·</span>
            <span>Platform Pembelajaran Pendidikan Kewarganegaraan (PPKn) Interaktif</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Bhinneka Tunggal Ika</span>
            <span aria-hidden="true">·</span>
            <span>UUD NRI 1945</span>
            <span aria-hidden="true">·</span>
            <span>Kedaulatan Rakyat</span>
          </div>
        </div>
      </footer>

      {/* Student Report & Certificate Modal */}
      <StudentReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        progress={progress}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}
