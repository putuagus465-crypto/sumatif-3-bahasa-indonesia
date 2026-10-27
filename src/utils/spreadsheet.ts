import { ExamResultData, ExamSettings, Question } from '../types';
import { INITIAL_QUESTIONS } from '../data/questions';

const STORAGE_KEY_RESULTS = 'sdn3_loloan_bindonesia_results_v6';
const STORAGE_KEY_SETTINGS = 'sdn3_loloan_bindonesia_settings_v6';

export const DEFAULT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwA__bqHqwFqO7P2OrqAx9SXUdefoZMDzsO74CYq5qayUXiEmmjV7Yr0H59MdTsXIur8A/exec';

export const DEFAULT_SETTINGS: ExamSettings = {
  schoolName: 'SD Negeri 3 Loloan Timur',
  headmasterName: 'Susilo Fitri Yatmoko, M.Pd',
  headmasterNip: '19880521 201101 1 010',
  teacherName: 'I Putu Agus Pramana Putra, S.Pd.',
  teacherNip: '199711062022211001',
  className: 'Kelas III',
  subject: 'Bahasa Indonesia',
  topic: 'Teks Fiksi & Fakta serta Pola Kalimat SPOK (Subjek, Predikat, Objek, Keterangan)',
  kktp: 70,
  allowShowSolutions: false,
  sheetWebhookUrl: DEFAULT_WEBHOOK_URL,
  teacherPassword: 'GURUADMIN',
};

/**
 * Loads exam settings from local storage
 */
export function getExamSettings(): ExamSettings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure required identity fields exist and subject updates from IPAS
      return {
        ...DEFAULT_SETTINGS,
        ...parsed,
        schoolName: parsed.schoolName || DEFAULT_SETTINGS.schoolName,
        headmasterName: parsed.headmasterName || DEFAULT_SETTINGS.headmasterName,
        headmasterNip: parsed.headmasterNip || DEFAULT_SETTINGS.headmasterNip,
        teacherName: parsed.teacherName || DEFAULT_SETTINGS.teacherName,
        teacherNip: parsed.teacherNip || DEFAULT_SETTINGS.teacherNip,
        className: parsed.className || DEFAULT_SETTINGS.className,
        subject: parsed.subject && parsed.subject !== 'IPAS' ? parsed.subject : DEFAULT_SETTINGS.subject,
        topic: DEFAULT_SETTINGS.topic, // use latest topic
        sheetWebhookUrl:
          parsed.sheetWebhookUrl && parsed.sheetWebhookUrl.trim() !== ''
            ? parsed.sheetWebhookUrl
            : DEFAULT_WEBHOOK_URL,
        kktp: parsed.kktp ?? DEFAULT_SETTINGS.kktp,
      };
    }
  } catch (e) {
    console.error('Failed to parse settings:', e);
  }
  return DEFAULT_SETTINGS;
}

/**
 * Saves updated exam settings
 */
export function saveExamSettings(settings: ExamSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings:', e);
  }
}

/**
 * Generates realistic initial sample results for Kelas III students of SDN 3 Loloan Timur
 */
export function getMockInitialResults(questions: Question[] = INITIAL_QUESTIONS): ExamResultData[] {
  const sampleStudents = [
    { fullName: 'I Gede Aditya Pratama', absenceNumber: '01', ability: 0.90, durationSec: 880 },
    { fullName: 'Ni Kadek Ayu Maharani', absenceNumber: '02', ability: 0.85, durationSec: 940 },
    { fullName: 'I Komang Bagus Danendra', absenceNumber: '03', ability: 0.76, durationSec: 1020 },
    { fullName: 'Ni Made Citra Dewi', absenceNumber: '04', ability: 0.93, durationSec: 790 },
    { fullName: 'I Putu Dimas Raditya', absenceNumber: '05', ability: 0.65, durationSec: 1150 },
    { fullName: 'Ni Ketut Elsa Pratiwi', absenceNumber: '06', ability: 0.80, durationSec: 920 },
    { fullName: 'Fandi Ahmad Al-Farizi', absenceNumber: '07', ability: 0.70, durationSec: 980 },
    { fullName: 'Gita Saraswati', absenceNumber: '08', ability: 0.86, durationSec: 860 },
    { fullName: 'I Wayan Hendra Wibawa', absenceNumber: '09', ability: 0.58, durationSec: 1220 },
    { fullName: 'Nurul Hidayati', absenceNumber: '10', ability: 0.74, durationSec: 1010 },
  ];

  return sampleStudents.map((s, sIdx) => {
    let fullCorrect = 0;
    let partialCount = 0;
    let totalScoreEarned = 0;

    const evaluations = questions.map((q, qIdx) => {
      // Deterministic pseudo-randomness based on question difficulty and student ability
      const diffPenalty = q.difficulty === 'Sukar' ? 0.35 : q.difficulty === 'Sedang' ? 0.15 : 0.05;
      const passThreshold = s.ability - diffPenalty;
      const randSeed = ((sIdx + 1) * 17 + (qIdx + 1) * 31) % 100 / 100;

      if (q.type === 'pilihan_ganda') {
        const isCorrect = randSeed <= passThreshold;
        if (isCorrect) {
          fullCorrect++;
          totalScoreEarned += 1;
        }
        return {
          questionId: q.id,
          originalNumber: q.originalNumber,
          type: q.type,
          isCorrect,
          isPartial: false,
          score: isCorrect ? 1 : 0,
          maxScore: 1,
          userAnswer: isCorrect ? q.correctAnswer : ((q.correctAnswer ?? 0) + 1) % 4,
        };
      } else {
        // PGK Kategori with 3 statements
        if (randSeed <= passThreshold) {
          fullCorrect++;
          totalScoreEarned += 1;
          const ans: Record<string, string> = {};
          q.statements?.forEach((st) => { ans[st.id] = st.correctAnswer; });
          return {
            questionId: q.id,
            originalNumber: q.originalNumber,
            type: q.type,
            isCorrect: true,
            isPartial: false,
            score: 1,
            maxScore: 1,
            userAnswer: ans,
            details: { correctStatementsCount: 3, totalStatementsCount: 3 },
          };
        } else if (randSeed <= passThreshold + 0.25) {
          partialCount++;
          const score = 0.67;
          totalScoreEarned += score;
          const ans: Record<string, string> = {};
          q.statements?.forEach((st, idx) => {
            ans[st.id] = idx === 2 ? (st.correctAnswer === 'Benar' ? 'Salah' : 'Benar') : st.correctAnswer;
          });
          return {
            questionId: q.id,
            originalNumber: q.originalNumber,
            type: q.type,
            isCorrect: false,
            isPartial: true,
            score,
            maxScore: 1,
            userAnswer: ans,
            details: { correctStatementsCount: 2, totalStatementsCount: 3 },
          };
        } else {
          const ans: Record<string, string> = {};
          q.statements?.forEach((st) => {
            ans[st.id] = st.correctAnswer === 'Benar' ? 'Salah' : 'Benar';
          });
          return {
            questionId: q.id,
            originalNumber: q.originalNumber,
            type: q.type,
            isCorrect: false,
            isPartial: false,
            score: 0,
            maxScore: 1,
            userAnswer: ans,
            details: { correctStatementsCount: 0, totalStatementsCount: 3 },
          };
        }
      }
    });

    const totalQuestions = questions.length;
    const rawScore = (totalScoreEarned / totalQuestions) * 100;
    const score = Math.round(rawScore * 10) / 10;
    const passed = score >= 70;
    const incorrectCount = totalQuestions - fullCorrect - partialCount;

    const m = Math.floor(s.durationSec / 60);
    const sec = s.durationSec % 60;
    const durationFormatted = `${m}m ${sec < 10 ? '0' : ''}${sec}s`;

    return {
      id: `sample-res-${sIdx + 1}`,
      student: {
        fullName: s.fullName,
        absenceNumber: s.absenceNumber,
        className: 'Kelas III',
      },
      timestamp: new Date(Date.now() - (sIdx + 1) * 3600000).toISOString(),
      formattedDate: new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(Date.now() - (sIdx + 1) * 3600000)),
      durationSeconds: s.durationSec,
      durationFormatted,
      totalQuestions,
      correctCount: fullCorrect,
      partialCount,
      incorrectCount,
      score,
      passed,
      kktp: 70,
      breakdown: {
        pg: {
          correct: evaluations.filter((e) => e.type === 'pilihan_ganda' && e.isCorrect).length,
          total: questions.filter((q) => q.type === 'pilihan_ganda').length,
        },
        kategori: {
          correct: evaluations.filter((e) => e.type === 'kategori' && e.isCorrect).length,
          partial: evaluations.filter((e) => e.type === 'kategori' && e.isPartial).length,
          total: questions.filter((q) => q.type === 'kategori').length,
        },
      },
      evaluations,
      sentToSpreadsheet: true,
    };
  });
}

/**
 * Loads all exam results from local storage (or populates mock if empty)
 */
export function getAllExamResults(): ExamResultData[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_RESULTS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // If question count updated (e.g., expanded to 40 questions), refresh sample data to stay aligned
        if (parsed[0].totalQuestions === INITIAL_QUESTIONS.length) {
          return parsed;
        }
      }
    }
  } catch (e) {
    console.error('Failed to load exam results:', e);
  }
  // Initialize with initial sample class data for immediate rich display
  const initialData = getMockInitialResults();
  try {
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(initialData));
  } catch {
    // Ignore storage issues
  }
  return initialData;
}

/**
 * Broadcasts exam updates across browser tabs in real time
 */
export function broadcastExamSync(type: 'NEW_SUBMISSION' | 'REFRESH_RESULTS', data?: any): void {
  try {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      const channel = new BroadcastChannel('sdn3_exam_sync');
      channel.postMessage({ type, data, timestamp: Date.now() });
      channel.close();
    }
  } catch (e) {
    // Ignore unsupported browser environments
  }
}

/**
 * Saves a new exam result and attempts auto-sync to Spreadsheet
 */
export async function saveExamResult(result: ExamResultData): Promise<ExamResultData> {
  const currentList = getAllExamResults();

  let sentToSheet = false;
  const settings = getExamSettings();

  if (settings.sheetWebhookUrl && settings.sheetWebhookUrl.trim().startsWith('http')) {
    try {
      sentToSheet = await sendToGoogleSheetWebhook(settings.sheetWebhookUrl, result, settings);
    } catch (err) {
      console.warn('Webhook auto-sync failed, saved locally:', err);
    }
  }

  const updatedResult: ExamResultData = {
    ...result,
    sentToSpreadsheet: sentToSheet,
    source: 'local',
  };
  const updatedList = [updatedResult, ...currentList.filter((r) => r.id !== result.id)];

  try {
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(updatedList));
  } catch (e) {
    console.error('Failed to save result in localStorage:', e);
  }

  // Broadcast real-time update to other tabs (such as the open Teacher Panel)
  broadcastExamSync('NEW_SUBMISSION', updatedResult);

  return updatedResult;
}

/**
 * Deletes a single result by ID
 */
export function deleteExamResult(id: string): void {
  const list = getAllExamResults().filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(list));
  broadcastExamSync('REFRESH_RESULTS');
}

/**
 * Clears all exam results and restores sample data or empty
 */
export function clearAllExamResults(): void {
  localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify([]));
  broadcastExamSync('REFRESH_RESULTS');
}

/**
 * Reset to sample results for Kelas III
 */
export function resetToSampleResults(): ExamResultData[] {
  const mock = getMockInitialResults();
  localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(mock));
  broadcastExamSync('REFRESH_RESULTS');
  return mock;
}

/**
 * Sends a result payload to Google Sheets Web App (Google Apps Script)
 */
export async function sendToGoogleSheetWebhook(
  webhookUrl: string,
  result: ExamResultData,
  settingsParam?: ExamSettings
): Promise<boolean> {
  const currentSettings = settingsParam || getExamSettings();
  const payload = {
    timestamp: result.formattedDate || new Date().toLocaleString('id-ID'),
    isoTimestamp: result.timestamp,
    schoolName: currentSettings.schoolName,
    subject: currentSettings.subject,
    topic: currentSettings.topic,
    className: result.student.className || currentSettings.className,
    fullName: result.student.fullName,
    absenceNumber: result.student.absenceNumber,
    correctCount: result.correctCount,
    partialCount: result.partialCount || 0,
    incorrectCount: result.incorrectCount,
    totalQuestions: result.totalQuestions,
    score: result.score,
    duration: result.durationFormatted || '-',
    status: result.passed ? 'Tuntas' : 'Remedial',
    kktp: result.kktp,
    pgScore: `${result.breakdown.pg.correct}/${result.breakdown.pg.total}`,
    kategoriScore: `${result.breakdown.kategori.correct}/${result.breakdown.kategori.total} (Sebagian: ${result.breakdown.kategori.partial || 0})`,
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      mode: 'no-cors',
    });
    return true;
  } catch (err) {
    console.error('Error posting to Google Sheets webhook:', err);
    return false;
  }
}

/**
 * Fetches real-time student exam results directly from Google Spreadsheet (Apps Script Web App or GViz API)
 */
export async function fetchSpreadsheetResults(
  urlParam: string,
  settings: ExamSettings,
  questions: Question[] = INITIAL_QUESTIONS
): Promise<{ success: boolean; data: ExamResultData[]; message: string; count: number }> {
  const targetUrl = (urlParam || settings.sheetWebhookUrl || '').trim();

  if (!targetUrl || !targetUrl.startsWith('http')) {
    return {
      success: false,
      data: [],
      message: 'URL Google Spreadsheet / Web App belum dikonfigurasi.',
      count: 0,
    };
  }

  // CASE 1: Google Sheets Direct Spreadsheet URL (e.g. docs.google.com/spreadsheets/d/{id}/...)
  const sheetDocMatch = targetUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (sheetDocMatch && sheetDocMatch[1]) {
    const spreadsheetId = sheetDocMatch[1];
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&t=${Date.now()}`;

    try {
      const resp = await fetch(gvizUrl);
      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }
      const rawText = await resp.text();
      // Google GViz outputs: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
      const jsonStart = rawText.indexOf('{');
      const jsonEnd = rawText.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const jsonStr = rawText.substring(jsonStart, jsonEnd + 1);
        const parsed = JSON.parse(jsonStr);
        const rows = parsed?.table?.rows || [];

        const results: ExamResultData[] = rows
          .map((r: any, rIdx: number) => {
            const cells = r.c || [];
            const getVal = (idx: number) => cells[idx]?.v ?? cells[idx]?.f ?? '';

            // Check if column 5 (fullName) or column 0 has content
            const fullName = String(getVal(5) || getVal(1) || '').trim();
            if (!fullName || fullName.toLowerCase().includes('nama siswa')) return null;

            const timestamp = String(getVal(0) || new Date().toLocaleString('id-ID'));
            const subject = String(getVal(1) || settings.subject);
            const className = String(getVal(3) || settings.className);
            const absenceNumber = String(getVal(4) || (rIdx + 1));
            const correctCount = Number(getVal(6)) || 0;
            const partialCount = Number(getVal(7)) || 0;
            const incorrectCount = Number(getVal(8)) || 0;
            const totalQuestions = Number(getVal(9)) || questions.length || 40;
            const score = Number(getVal(10)) || 0;
            const status = String(getVal(11) || (score >= settings.kktp ? 'Tuntas' : 'Remedial'));
            const duration = String(getVal(12) || '15m 00s');

            const passed = status.toLowerCase().includes('tuntas') || score >= settings.kktp;

            return {
              id: `sheet-gviz-${absenceNumber}-${rIdx}-${Date.now()}`,
              student: {
                fullName,
                absenceNumber,
                className,
              },
              timestamp: new Date().toISOString(),
              formattedDate: timestamp,
              durationFormatted: duration,
              totalQuestions,
              correctCount,
              partialCount,
              incorrectCount,
              score,
              passed,
              kktp: settings.kktp,
              breakdown: {
                pg: { correct: correctCount, total: 30 },
                kategori: { correct: partialCount > 0 ? 8 : 10, partial: partialCount, total: 10 },
              },
              evaluations: [],
              sentToSpreadsheet: true,
              source: 'spreadsheet',
              spreadsheetRow: rIdx + 2,
            } as ExamResultData;
          })
          .filter(Boolean) as ExamResultData[];

        return {
          success: true,
          data: results,
          message: `Berhasil mengambil ${results.length} data siswa langsung dari Google Spreadsheet.`,
          count: results.length,
        };
      }
    } catch (err: any) {
      console.warn('GViz fetch failed:', err);
    }
  }

  // CASE 2: Google Apps Script Web App URL (script.google.com/macros/s/.../exec)
  try {
    const sep = targetUrl.includes('?') ? '&' : '?';
    const requestUrl = `${targetUrl}${sep}action=getResults&subject=${encodeURIComponent(settings.subject)}&_t=${Date.now()}`;

    const resp = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
    });

    if (resp.ok) {
      const json = await resp.json();
      if (json && json.status === 'success' && Array.isArray(json.data)) {
        const results: ExamResultData[] = json.data.map((row: any, rIdx: number) => {
          const score = Number(row.score) || 0;
          const passed =
            String(row.status || '').toLowerCase().includes('tuntas') || score >= settings.kktp;
          const totalQuestions = Number(row.totalQuestions) || questions.length || 40;
          const correctCount = Number(row.correctCount) || 0;
          const partialCount = Number(row.partialCount) || 0;
          const incorrectCount = Number(row.incorrectCount) || (totalQuestions - correctCount - partialCount);

          return {
            id: `sheet-live-${row.absenceNumber || rIdx}-${rIdx}`,
            student: {
              fullName: String(row.fullName || 'Siswa'),
              absenceNumber: String(row.absenceNumber || `${rIdx + 1}`),
              className: String(row.className || settings.className),
            },
            timestamp: row.isoTimestamp || new Date().toISOString(),
            formattedDate: row.timestamp || new Date().toLocaleString('id-ID'),
            durationFormatted: row.duration || '15m 00s',
            totalQuestions,
            correctCount,
            partialCount,
            incorrectCount,
            score,
            passed,
            kktp: settings.kktp,
            breakdown: {
              pg: { correct: correctCount, total: 30 },
              kategori: { correct: 0, partial: partialCount, total: 10 },
            },
            evaluations: [],
            sentToSpreadsheet: true,
            source: 'spreadsheet',
            spreadsheetRow: row.rowIndex || rIdx + 2,
          } as ExamResultData;
        });

        return {
          success: true,
          data: results,
          message: `Berhasil terhubung secara real-time! Ditemukan ${results.length} baris nilai di Spreadsheet.`,
          count: results.length,
        };
      }
    }
  } catch (err: any) {
    // If CORS or doGet is not deployed yet
    console.warn('Google Apps Script GET failed:', err);
  }

  return {
    success: false,
    data: [],
    message: 'Koneksi ke Web App Spreadsheet belum merespons data GET. Pastikan Apps Script telah di-deploy dengan fungsi doGet() terbaru.',
    count: 0,
  };
}

/**
 * Merges remote spreadsheet results with local exam submissions without duplicate loss
 */
export function mergeSpreadsheetAndLocalResults(
  localResults: ExamResultData[],
  remoteResults: ExamResultData[]
): ExamResultData[] {
  if (!remoteResults || remoteResults.length === 0) {
    return localResults;
  }

  // Create a working copy
  const mergedMap = new Map<string, ExamResultData>();

  // Insert local results first
  localResults.forEach((loc) => {
    const key = `${loc.student.absenceNumber}-${loc.student.fullName.trim().toLowerCase()}`;
    mergedMap.set(key, loc);
  });

  // Merge or append remote spreadsheet rows
  remoteResults.forEach((rem) => {
    const key = `${rem.student.absenceNumber}-${rem.student.fullName.trim().toLowerCase()}`;
    const existing = mergedMap.get(key);
    if (existing) {
      // Mark as verified synced in spreadsheet
      mergedMap.set(key, {
        ...existing,
        sentToSpreadsheet: true,
        source: 'spreadsheet',
        spreadsheetRow: rem.spreadsheetRow,
        formattedDate: rem.formattedDate || existing.formattedDate,
      });
    } else {
      // New record from remote spreadsheet (e.g. submitted from another student phone/device)
      mergedMap.set(key, rem);
    }
  });

  const merged = Array.from(mergedMap.values());
  // Sort by absence number ascending or recent
  merged.sort((a, b) => {
    const noA = parseInt(a.student.absenceNumber, 10) || 0;
    const noB = parseInt(b.student.absenceNumber, 10) || 0;
    return noA - noB;
  });

  try {
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(merged));
  } catch {
    // Ignore storage errors
  }

  return merged;
}

/**
 * Generates and downloads an Excel/CSV spreadsheet file of Item Analysis & Student Response Matrix
 */
export function downloadMatrixItemAnalysisCSV(
  results: ExamResultData[],
  questions: Question[],
  settings: ExamSettings
): void {
  if (results.length === 0) {
    alert('Belum ada data respons siswa untuk diekspor.');
    return;
  }

  const qNumbers = questions.map((q) => `Q${q.originalNumber}`);

  // Header row 1: metadata
  const rows: string[][] = [
    [`"LAPORAN ANALISIS BUTIR SOAL & MATRIKS RESPON SISWA"`],
    [`"Sekolah: ${settings.schoolName}"`, `"Mata Pelajaran: ${settings.subject}"`, `"Kelas: ${settings.className}"`],
    [`"Materi: ${settings.topic}"`, `"KKTP: ${settings.kktp}"`, `"Tanggal Cetak: ${new Date().toLocaleDateString('id-ID')}"`],
    [],
    // Table Headers
    [
      'No',
      'No. Absen',
      'Nama Siswa',
      'Kelas',
      ...qNumbers,
      'Total Skor',
      'Nilai Akhir',
      'Status Ketercapaian',
      'Durasi Pengerjaan',
      `Benar PG (${questions.filter((q) => q.type === 'pilihan_ganda').length})`,
      `Benar Penuh PGK (${questions.filter((q) => q.type === 'kategori').length})`,
      'Benar Sebagian PGK',
    ],
  ];

  // Student rows
  results.forEach((r, idx) => {
    const studentItemResponses = questions.map((q) => {
      const ev = r.evaluations.find((e) => e.originalNumber === q.originalNumber || e.questionId === q.id);
      if (!ev) return '0';
      if (ev.isCorrect) return '1';
      if (ev.isPartial) return '0.5';
      return '0';
    });

    rows.push([
      String(idx + 1),
      `"${r.student.absenceNumber}"`,
      `"${r.student.fullName.replace(/"/g, '""')}"`,
      `"${r.student.className}"`,
      ...studentItemResponses,
      String(r.score ? Math.round((r.score / 100) * questions.length * 10) / 10 : 0),
      String(r.score),
      r.passed ? 'Tuntas' : 'Remedial',
      r.durationFormatted || '15m 00s',
      String(r.breakdown.pg.correct),
      String(r.breakdown.kategori.correct),
      String(r.breakdown.kategori.partial || 0),
    ]);
  });

  // Footer statistics per item
  const correctCounts: string[] = [];
  const percentPasses: string[] = [];
  const difficultyEmpirical: string[] = [];

  questions.forEach((q) => {
    let correctCount = 0;
    results.forEach((r) => {
      const ev = r.evaluations.find((e) => e.originalNumber === q.originalNumber || e.questionId === q.id);
      if (ev?.isCorrect) correctCount += 1;
      else if (ev?.isPartial) correctCount += 0.5;
    });

    const percent = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0;
    correctCounts.push(String(correctCount));
    percentPasses.push(`${percent}%`);

    // Klasifikasi empiris sesuai kriteria Kurikulum Merdeka:
    // Mudah: > 70%, Sedang: 30 - 70%, Sukar: < 30%
    let diff = 'Sedang';
    if (percent > 70) diff = 'Mudah';
    else if (percent < 30) diff = 'Sukar';
    difficultyEmpirical.push(diff);
  });

  rows.push([]);
  rows.push(['REKAPITULASI BUTIR SOAL', '', '', '', ...correctCounts, '', '', '', '', '', '', '']);
  rows.push(['Jumlah Siswa Menjawab Benar', '', '', '', ...correctCounts, '', '', '', '', '', '', '']);
  rows.push(['Persentase Ketercapaian (%)', '', '', '', ...percentPasses, '', '', '', '', '', '', '']);
  rows.push(['Klasifikasi Empiris Kesukaran', '', '', '', ...difficultyEmpirical, '', '', '', '', '', '', '']);

  rows.push([]);
  rows.push([
    `"Mengetahui, Kepala ${settings.schoolName}"`,
    '',
    '',
    '',
    '',
    `"Loloan Timur, ${new Date().toLocaleDateString('id-ID')}"`,
  ]);
  rows.push([`"${settings.headmasterName}"`, '', '', '', '', `"Guru Pengampu: ${settings.teacherName}"`]);
  rows.push([`"NIP. ${settings.headmasterNip}"`, '', '', '', '', `"NIPPPK. ${settings.teacherNip}"`]);

  const csvContent = rows.map((r) => r.join(',')).join('\r\n');
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute(
    'download',
    `Matriks_Analisis_Butir_Soal_Bahasa_Indonesia_Kelas_III_SDN3_Loloan_Timur_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Sample Google Apps Script code for multi-subject teacher setup in ONE Google Sheets
 * Supports POST (submitting student results) and GET (real-time live fetch in Teacher Panel)
 */
export const GOOGLE_APPS_SCRIPT_SAMPLE = `/**
 * GOOGLE APPS SCRIPT UNTUK SD NEGERI 3 LOLOAN TIMUR
 * Mendukung POST (mencatat nilai siswa) dan GET (menampilkan daftar nilai real-time di Panel Guru)
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    // 1. Ambil nama mata pelajaran (contoh: "Bahasa_Indonesia", "IPAS", "Matematika")
    var rawSubject = data.subject || "Bahasa_Indonesia";
    var sheetName = rawSubject.replace(/[/\\\\?*:\\[\\]]/g, "_").trim().substring(0, 30);
    
    // 2. Cari tab sesuai nama mata pelajaran. Jika belum ada, buat otomatis!
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // 3. Jika tab mapel ini masih baru (baris 0), buat header yang rapi
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Waktu & Tanggal",
        "Mata Pelajaran",
        "Materi Pokok",
        "Kelas",
        "No. Absen",
        "Nama Siswa",
        "Benar Penuh",
        "Benar Sebagian",
        "Salah",
        "Total Soal",
        "Nilai Akhir",
        "Status KKTP",
        "Durasi",
        "Rincian PG",
        "Rincian Kategori"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 15);
      headerRange.setFontWeight("bold")
                 .setBackground("#1e3a8a")
                 .setFontColor("#ffffff")
                 .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // 4. Masukkan baris data nilai siswa ke tab mapel bersangkutan
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('id-ID'),
      data.subject || "-",
      data.topic || "-",
      data.className || "-",
      data.absenceNumber || "-",
      data.fullName || "-",
      data.correctCount || 0,
      data.partialCount || 0,
      data.incorrectCount || 0,
      data.totalQuestions || 0,
      data.score || 0,
      data.status || "-",
      data.duration || "-",
      data.pgScore || "-",
      data.kategoriScore || "-"
    ]);

    // 5. Opsi Tambahan: Catat juga ke tab ringkasan "SEMUA_MAPEL"
    var masterSheet = ss.getSheetByName("SEMUA_MAPEL");
    if (!masterSheet) {
      masterSheet = ss.insertSheet("SEMUA_MAPEL", 0);
      masterSheet.appendRow([
        "Waktu", "Mata Pelajaran", "Materi", "Kelas", "No. Absen", "Nama Siswa", "Nilai Akhir", "Status", "Durasi"
      ]);
      masterSheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#0f172a").setFontColor("#ffffff");
      masterSheet.setFrozenRows(1);
    }
    masterSheet.appendRow([
      data.timestamp || new Date().toLocaleString('id-ID'),
      data.subject || "-",
      data.topic || "-",
      data.className || "-",
      data.absenceNumber || "-",
      data.fullName || "-",
      data.score || 0,
      data.status || "-",
      data.duration || "-"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success", sheet: sheetName }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * FUNGSI GET: Mengambil daftar nilai siswa secara real-time untuk ditampilkan di Panel Guru
 */
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = (e && e.parameter && (e.parameter.sheet || e.parameter.subject)) || "Bahasa_Indonesia";
    sheetName = sheetName.replace(/[/\\\\?*:\\[\\]]/g, "_").trim().substring(0, 30);
    
    // Cari tab mapel, atau tab SEMUA_MAPEL, atau tab aktif pertama
    var sheet = ss.getSheetByName(sheetName) || ss.getSheetByName("SEMUA_MAPEL") || ss.getSheets()[0];
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ status: "success", count: 0, data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var values = sheet.getDataRange().getValues();
    if (values.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ status: "success", count: 0, data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var headers = values[0];
    var data = [];
    for (var i = 1; i < values.length; i++) {
      var row = values[i];
      if (!row || row.length === 0 || !row[5]) continue; // lewati baris kosong tanpa nama
      
      data.push({
        rowIndex: i + 1,
        timestamp: String(row[0] || ""),
        subject: String(row[1] || ""),
        topic: String(row[2] || ""),
        className: String(row[3] || ""),
        absenceNumber: String(row[4] || ""),
        fullName: String(row[5] || ""),
        correctCount: Number(row[6]) || 0,
        partialCount: Number(row[7]) || 0,
        incorrectCount: Number(row[8]) || 0,
        totalQuestions: Number(row[9]) || 40,
        score: Number(row[10]) || 0,
        status: String(row[11] || ""),
        duration: String(row[12] || ""),
        pgScore: String(row[13] || ""),
        kategoriScore: String(row[14] || "")
      });
    }
    
    // Urutkan data terbaru di paling atas
    data.reverse();
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      sheetName: sheet.getName(),
      count: data.length,
      updatedAt: new Date().toISOString(),
      data: data
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
