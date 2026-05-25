/* ── Translations ── */
const T = {
  en: {
    headerTag:        'UMS · 4.0 Scale',
    headerTitle:      'CGPA Calculator',
    headerSub:        'Malaysian Public University grading system',
    navSemester:      'Semester',
    navCGPA:          'CGPA',
    navTarget:        'Target',
    navGradeRef:      'Grade Ref',
    navLabel:         'Navigation',

    semPageTitle:     'Semester GPA',
    semPageSub:       'Calculate your GPA for the current semester',
    semNote:          'A+ and A both carry <strong>4.00</strong> grade points per UMS grading policy.',
    semSectionTitle:  'Subjects this semester',
    colSubject:       'Subject',
    colCredit:        'Credit',
    colGrade:         'Grade',
    subjectPlaceholder: i => `Subject ${i + 1}`,
    fieldCredit:      'Credit',
    fieldGrade:       'Grade',
    addSubject:       '+ Add subject',
    calcGPA:          'Calculate GPA',
    semGPALabel:      'Semester GPA',
    totalCredits:     'Total Credits',
    gradePoints:      'Grade Points',
    exportPDF:        'Export PDF',

    cgpaPageTitle:    'CGPA Tracker',
    cgpaPageSub:      "Enter each semester's GPA and credit hours",
    allSemesters:     'All semesters',
    addSemester:      '+ Add semester',
    calcCGPA:         'Calculate CGPA',
    cgpaLabel:        'Cumulative CGPA',
    totalCreditsLbl:  'Total Credits',
    semestersLbl:     'Semesters',
    semGPAField:      'Semester GPA',
    creditHours:      'Credit Hours',
    semesterDefault:  i => `Semester ${i + 1}`,

    targetPageTitle:  'Target Planner',
    targetPageSub:    'Find out the GPA you need to hit your target CGPA',
    curCGPA:          'Current CGPA',
    curCredits:       'Credits completed so far',
    tgtCGPA:          'Target CGPA',
    remCredits:       'Remaining credits to complete',
    calcTarget:       'Calculate required GPA',
    targetLbl:        'Required GPA for remaining semesters',
    targetLblDone:    'Target already achieved',
    targetLblFail:    'Required GPA (not achievable)',
    targetMsgDone:    'Your current CGPA already meets your target. Keep up the great work!',
    targetMsgFail:    'Target not achievable — consider lowering your target CGPA or completing more credits.',
    targetMsgNeed:    cls => `You need at least ${cls.label} performance in your remaining semesters.`,
    targetInfo:       (cur, curC, tgt, remC) =>
      `Current CGPA: <strong>${cur}</strong> over <strong>${curC}</strong> credits &nbsp;·&nbsp; Target: <strong>${tgt}</strong> &nbsp;·&nbsp; Remaining: <strong>${remC}</strong> credits`,
    alertCredits:     'Please enter remaining credits.',

    refPageTitle:     'Grade Reference',
    refPageSub:       'UMS grading scale and degree classifications',
    refNote:          'A+ carries the same 4.00 grade points as A — it is an excellence recognition, not a higher GPA value.',
    gradeScale:       'Grade scale',
    degreeClass:      'Degree classification',

    classes: [
      { label: 'First Class Honours',        desc: '3.67 and above' },
      { label: 'Second Class Upper Honours', desc: '3.33 – 3.66' },
      { label: 'Second Class Lower Honours', desc: '3.00 – 3.32' },
      { label: 'Third Class Honours',        desc: '2.00 – 2.99' },
      { label: 'Pass (no honours)',          desc: 'Below 2.00 — degree conferred without honours' },
    ],

    pdfTitle:         'CGPA Calculator Report',
    pdfSub:           'Malaysian Public University · 4.0 Scale',
    pdfSemBreakdown:  'Semester GPA Breakdown',
    pdfCGPABreakdown: 'Cumulative CGPA Breakdown',
    pdfSemGPA:        'Semester GPA',
    pdfCumCGPA:       'Cumulative CGPA',
    pdfTotalCredits:  'Total Credits',
    pdfSemesters:     'Semesters',
    pdfUnnamed:       'Unnamed Subject',
    pdfGenerated:     date => `Generated: ${date}`,
  },

  my: {
    headerTag:        'UMS · Skala 4.0',
    headerTitle:      'Kalkulator CGPA',
    headerSub:        'Sistem gred Universiti Awam Malaysia',
    navSemester:      'Semester',
    navCGPA:          'CGPA',
    navTarget:        'Sasaran',
    navGradeRef:      'Rujukan Gred',
    navLabel:         'Navigasi',

    semPageTitle:     'GPA Semester',
    semPageSub:       'Kira GPA anda untuk semester ini',
    semNote:          'A+ dan A kedua-duanya membawa <strong>4.00</strong> mata gred mengikut dasar penilaian UMS.',
    semSectionTitle:  'Subjek semester ini',
    colSubject:       'Subjek',
    colCredit:        'Kredit',
    colGrade:         'Gred',
    subjectPlaceholder: i => `Subjek ${i + 1}`,
    fieldCredit:      'Kredit',
    fieldGrade:       'Gred',
    addSubject:       '+ Tambah subjek',
    calcGPA:          'Kira GPA',
    semGPALabel:      'GPA Semester',
    totalCredits:     'Jumlah Kredit',
    gradePoints:      'Mata Gred',
    exportPDF:        'Eksport PDF',

    cgpaPageTitle:    'Penjejak CGPA',
    cgpaPageSub:      'Masukkan GPA dan jam kredit setiap semester',
    allSemesters:     'Semua semester',
    addSemester:      '+ Tambah semester',
    calcCGPA:         'Kira CGPA',
    cgpaLabel:        'CGPA Kumulatif',
    totalCreditsLbl:  'Jumlah Kredit',
    semestersLbl:     'Semester',
    semGPAField:      'GPA Semester',
    creditHours:      'Jam Kredit',
    semesterDefault:  i => `Semester ${i + 1}`,

    targetPageTitle:  'Perancang Sasaran',
    targetPageSub:    'Cari GPA yang diperlukan untuk mencapai sasaran CGPA anda',
    curCGPA:          'CGPA Semasa',
    curCredits:       'Kredit yang telah diselesaikan',
    tgtCGPA:          'Sasaran CGPA',
    remCredits:       'Baki kredit yang perlu diselesaikan',
    calcTarget:       'Kira GPA yang diperlukan',
    targetLbl:        'GPA yang diperlukan untuk semester selebihnya',
    targetLblDone:    'Sasaran telah dicapai',
    targetLblFail:    'GPA yang diperlukan (tidak boleh dicapai)',
    targetMsgDone:    'CGPA semasa anda telah mencapai sasaran. Teruskan usaha cemerlang!',
    targetMsgFail:    'Sasaran tidak boleh dicapai — pertimbangkan untuk menurunkan sasaran CGPA atau melengkapkan lebih banyak kredit.',
    targetMsgNeed:    cls => `Anda memerlukan sekurang-kurangnya prestasi ${cls.label} dalam semester selebihnya.`,
    targetInfo:       (cur, curC, tgt, remC) =>
      `CGPA Semasa: <strong>${cur}</strong> dalam <strong>${curC}</strong> kredit &nbsp;·&nbsp; Sasaran: <strong>${tgt}</strong> &nbsp;·&nbsp; Baki: <strong>${remC}</strong> kredit`,
    alertCredits:     'Sila masukkan baki kredit.',

    refPageTitle:     'Rujukan Gred',
    refPageSub:       'Skala gred UMS dan klasifikasi ijazah',
    refNote:          'A+ membawa mata gred 4.00 yang sama dengan A — ia adalah pengiktirafan kecemerlangan, bukan nilai GPA yang lebih tinggi.',
    gradeScale:       'Skala gred',
    degreeClass:      'Klasifikasi ijazah',

    classes: [
      { label: 'Kepujian Kelas Pertama',         desc: '3.67 ke atas' },
      { label: 'Kepujian Kelas Kedua Tinggi',    desc: '3.33 – 3.66' },
      { label: 'Kepujian Kelas Kedua Rendah',    desc: '3.00 – 3.32' },
      { label: 'Kepujian Kelas Ketiga',          desc: '2.00 – 2.99' },
      { label: 'Lulus (tanpa kepujian)',          desc: 'Di bawah 2.00 — ijazah diberikan tanpa kepujian' },
    ],

    pdfTitle:         'Laporan Kalkulator CGPA',
    pdfSub:           'Universiti Awam Malaysia · Skala 4.0',
    pdfSemBreakdown:  'Pecahan GPA Semester',
    pdfCGPABreakdown: 'Pecahan CGPA Kumulatif',
    pdfSemGPA:        'GPA Semester',
    pdfCumCGPA:       'CGPA Kumulatif',
    pdfTotalCredits:  'Jumlah Kredit',
    pdfSemesters:     'Semester',
    pdfUnnamed:       'Subjek Tanpa Nama',
    pdfGenerated:     date => `Dijana: ${date}`,
  }
};

/* ── Grade data ── */
const GRADES = [
  { ltr: 'A+', pts: 4.00, min: 90, note: true },
  { ltr: 'A',  pts: 4.00, min: 80 },
  { ltr: 'A-', pts: 3.67, min: 75 },
  { ltr: 'B+', pts: 3.33, min: 70 },
  { ltr: 'B',  pts: 3.00, min: 65 },
  { ltr: 'B-', pts: 2.67, min: 60 },
  { ltr: 'C+', pts: 2.33, min: 55 },
  { ltr: 'C',  pts: 2.00, min: 50 },
  { ltr: 'C-', pts: 1.67, min: 45 },
  { ltr: 'D',  pts: 1.00, min: 40 },
  { ltr: 'F',  pts: 0.00, min: 0  }
];

const CLASS_META = [
  { min: 3.67, max: 4.00, color: '#3C3489', bg: '#EEEDFE' },
  { min: 3.33, max: 3.66, color: '#0F6E56', bg: '#E1F5EE' },
  { min: 3.00, max: 3.32, color: '#185FA5', bg: '#E6F1FB' },
  { min: 2.00, max: 2.99, color: '#854F0B', bg: '#FAEEDA' },
  { min: 0,    max: 1.99, color: '#5F5E5A', bg: '#F1EFE8' },
];

/* ── Active language ── */
let lang = 'en';
const t = () => T[lang];

function getClass(gpa) {
  const labels = t().classes;
  for (let i = 0; i < CLASS_META.length; i++) {
    if (gpa >= CLASS_META[i].min) return { ...CLASS_META[i], label: labels[i].label };
  }
  return { ...CLASS_META[CLASS_META.length - 1], label: labels[labels.length - 1].label };
}

function gradeOpts() {
  return GRADES.map(g =>
    `<option value="${g.pts}">${g.ltr} (${g.pts.toFixed(2)})${g.note ? ' *' : ''}</option>`
  ).join('');
}

let semSubjects = [], cgpaSemesters = [];

/* ── Semester GPA ── */
function addSemSubject(name = '', credit = 3) {
  semSubjects.push({ name, credit, grade: '4.00' });
  renderSemSubjects();
}

function renderSemSubjects() {
  const c = document.getElementById('sem-subjects');
  c.innerHTML = semSubjects.map((s, i) => `
    <div class="subject-row">
      <input type="text" placeholder="${t().subjectPlaceholder(i)}" value="${s.name}"
        oninput="semSubjects[${i}].name=this.value">
      <div class="subject-field">
        <span class="subject-field-label">${t().fieldCredit}</span>
        <input type="number" min="1" max="6" value="${s.credit}"
          oninput="semSubjects[${i}].credit=+this.value">
      </div>
      <div class="subject-field">
        <span class="subject-field-label">${t().fieldGrade}</span>
        <select data-idx="${i}" onchange="semSubjects[${i}].grade=this.value">${gradeOpts()}</select>
      </div>
      <button class="del-btn" onclick="removeSemSubject(${i})" aria-label="Remove">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>`).join('');

  semSubjects.forEach((s, i) => {
    const sel = c.querySelector(`select[data-idx="${i}"]`);
    if (sel) sel.value = s.grade;
  });
}

function removeSemSubject(i) { semSubjects.splice(i, 1); renderSemSubjects(); }

function calcSemGPA() {
  if (!semSubjects.length) return;
  let totalPts = 0, totalCreds = 0;
  semSubjects.forEach(s => {
    totalPts += parseFloat(s.grade) * s.credit;
    totalCreds += +s.credit;
  });
  const gpa = totalCreds ? totalPts / totalCreds : 0;
  const cls = getClass(gpa);
  document.getElementById('sem-gpa-val').textContent = gpa.toFixed(2);
  document.getElementById('sem-credits').textContent = totalCreds;
  document.getElementById('sem-points').textContent = totalPts.toFixed(2);
  const b = document.getElementById('sem-class-badge');
  b.textContent = cls.label;
  b.style.background = 'rgba(255,255,255,0.15)';
  b.style.color = '#fff';
  document.getElementById('sem-result').style.display = 'block';
}

/* ── CGPA Tracker ── */
function addSemester() {
  cgpaSemesters.push({ label: t().semesterDefault(cgpaSemesters.length), gpa: 0, credits: 0 });
  renderCGPASemesters();
}

function renderCGPASemesters() {
  const c = document.getElementById('cgpa-semesters');
  c.innerHTML = cgpaSemesters.map((s, i) => `
    <div class="sem-card">
      <div class="sem-header">
        <input class="sem-name-input" type="text" value="${s.label}"
          oninput="cgpaSemesters[${i}].label=this.value">
        <div style="display:flex;align-items:center;gap:8px">
          <span class="sem-gpa-badge" id="sem-badge-${i}">${s.gpa.toFixed(2)}</span>
          <button class="del-btn" onclick="removeSemester(${i})" aria-label="Remove semester">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="sem-inputs">
        <div class="sem-field">
          <label>${t().semGPAField}</label>
          <input type="number" min="0" max="4" step="0.01" value="${s.gpa}" placeholder="0.00"
            oninput="cgpaSemesters[${i}].gpa=+this.value;document.getElementById('sem-badge-${i}').textContent=parseFloat(this.value||0).toFixed(2)">
        </div>
        <div class="sem-field">
          <label>${t().creditHours}</label>
          <input type="number" min="1" value="${s.credits}" placeholder="0"
            oninput="cgpaSemesters[${i}].credits=+this.value">
        </div>
      </div>
    </div>`).join('');
}

function removeSemester(i) { cgpaSemesters.splice(i, 1); renderCGPASemesters(); }

function calcCGPA() {
  if (!cgpaSemesters.length) return;
  let totalPts = 0, totalCreds = 0;
  cgpaSemesters.forEach(s => { totalPts += s.gpa * s.credits; totalCreds += +s.credits; });
  const cgpa = totalCreds ? totalPts / totalCreds : 0;
  const cls = getClass(cgpa);
  document.getElementById('cgpa-val').textContent = cgpa.toFixed(2);
  document.getElementById('cgpa-total-credits').textContent = totalCreds;
  document.getElementById('cgpa-sem-count').textContent = cgpaSemesters.length;
  const b = document.getElementById('cgpa-class-badge');
  b.textContent = cls.label;
  b.style.background = 'rgba(255,255,255,0.15)';
  b.style.color = '#fff';
  document.getElementById('cgpa-result').style.display = 'block';
}

/* ── Target Planner ── */
function calcTarget() {
  const cur  = parseFloat(document.getElementById('cur-cgpa').value) || 0;
  const curC = parseFloat(document.getElementById('cur-credits').value) || 0;
  const tgt  = parseFloat(document.getElementById('tgt-cgpa').value) || 0;
  const remC = parseFloat(document.getElementById('rem-credits').value) || 0;
  if (!remC) { alert(t().alertCredits); return; }
  const needed = ((tgt * (curC + remC)) - (cur * curC)) / remC;
  const rc  = document.getElementById('target-result-card');
  const msg = document.getElementById('target-msg');
  const val = document.getElementById('target-val');
  rc.className = 'result-card';
  if (needed > 4) {
    rc.classList.add('danger');
    val.textContent = needed.toFixed(2);
    msg.textContent = t().targetMsgFail;
    document.getElementById('target-lbl').textContent = t().targetLblFail;
  } else if (needed <= 0) {
    rc.classList.add('success');
    val.textContent = lang === 'en' ? 'Done!' : 'Selesai!';
    msg.textContent = t().targetMsgDone;
    document.getElementById('target-lbl').textContent = t().targetLblDone;
  } else {
    val.textContent = needed.toFixed(2);
    const cls = getClass(needed);
    msg.textContent = t().targetMsgNeed(cls);
    document.getElementById('target-lbl').textContent = t().targetLbl;
  }
  document.getElementById('target-info').innerHTML = t().targetInfo(
    cur.toFixed(2), curC, tgt.toFixed(2), remC
  );
  document.getElementById('target-result').style.display = 'block';
}

/* ── Grade Reference ── */
function buildGradeRef() {
  document.getElementById('grade-ref-table').innerHTML = GRADES.map(g => `
    <div class="grade-item${g.ltr === 'A+' ? ' aplus' : ''}">
      <span class="grade-ltr${g.ltr === 'A+' ? ' aplus' : ''}">${g.ltr}</span>
      <div class="grade-detail">
        <div class="grade-pts">${g.pts.toFixed(2)}</div>
        <div class="grade-min">≥ ${g.min}%</div>
      </div>
    </div>`).join('');

  const labels = t().classes;
  document.getElementById('class-table').innerHTML = CLASS_META.map((c, i) => `
    <div class="class-item" style="background:${c.bg}">
      <span class="class-name" style="color:${c.color}">${labels[i].label}</span>
      <span class="class-desc" style="color:${c.color}">${labels[i].desc}</span>
    </div>`).join('');
}

/* ── Tab switching ── */
function switchTab(tab) {
  ['sem', 'cgpa', 'target', 'ref'].forEach(id => {
    document.getElementById('tab-' + id).classList.toggle('active', id === tab);
    document.getElementById('tbtn-' + id).classList.toggle('active', id === tab);
  });
}

/* ── Language switching ── */
function switchLang(newLang) {
  lang = newLang;

  // update toggle button states
  document.getElementById('lang-en').classList.toggle('lang-active', lang === 'en');
  document.getElementById('lang-my').classList.toggle('lang-active', lang === 'my');

  // update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t()[key] !== undefined) el.innerHTML = t()[key];
  });

  // re-render dynamic sections
  renderSemSubjects();
  renderCGPASemesters();
  buildGradeRef();
}

/* ── PDF Export ── */
function exportPDF(type) {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { alert('PDF library not loaded yet, try again.'); return; }
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  doc.setFontSize(20); doc.setTextColor(60, 52, 137);
  doc.text(t().pdfTitle, 20, 22);
  doc.setFontSize(10); doc.setTextColor(90, 86, 128);
  doc.text(t().pdfSub, 20, 30);
  const dateStr = new Date().toLocaleDateString(lang === 'my' ? 'ms-MY' : 'en-MY', { dateStyle: 'long' });
  doc.text(t().pdfGenerated(dateStr), 20, 36);
  doc.setDrawColor(127, 119, 221); doc.setLineWidth(0.5); doc.line(20, 40, 190, 40);
  let y = 52;
  if (type === 'sem') {
    doc.setFontSize(13); doc.setTextColor(26, 23, 48);
    doc.text(t().pdfSemBreakdown, 20, y); y += 10;
    doc.setFontSize(10); doc.setTextColor(90, 86, 128);
    semSubjects.forEach(s => {
      const pts = parseFloat(s.grade);
      const g = GRADES.find(g => g.pts === pts && g.ltr !== 'A+') || GRADES[0];
      doc.text(`${s.name || t().pdfUnnamed}   ${s.credit} credit(s)   Grade: ${g.ltr} (${pts.toFixed(2)})`, 20, y); y += 7;
    });
    y += 4;
    doc.setFontSize(16); doc.setTextColor(60, 52, 137);
    doc.text(`${t().pdfSemGPA}: ${document.getElementById('sem-gpa-val').textContent}`, 20, y); y += 8;
    doc.setFontSize(11); doc.setTextColor(90, 86, 128);
    doc.text(`${t().pdfTotalCredits}: ${document.getElementById('sem-credits').textContent}`, 20, y);
  } else {
    doc.setFontSize(13); doc.setTextColor(26, 23, 48);
    doc.text(t().pdfCGPABreakdown, 20, y); y += 10;
    doc.setFontSize(10); doc.setTextColor(90, 86, 128);
    cgpaSemesters.forEach(s => {
      doc.text(`${s.label}   GPA: ${s.gpa.toFixed(2)}   ${t().pdfTotalCredits}: ${s.credits}`, 20, y); y += 7;
    });
    y += 4;
    doc.setFontSize(16); doc.setTextColor(60, 52, 137);
    doc.text(`${t().pdfCumCGPA}: ${document.getElementById('cgpa-val').textContent}`, 20, y); y += 8;
    doc.setFontSize(11); doc.setTextColor(90, 86, 128);
    doc.text(`${t().pdfTotalCredits}: ${document.getElementById('cgpa-total-credits').textContent}   ${t().pdfSemesters}: ${cgpaSemesters.length}`, 20, y);
  }
  doc.save('cgpa-report.pdf');
}

/* ── Init ── */
addSemSubject('', 3);
addSemSubject('', 3);
addSemSubject('', 3);
addSemester();
addSemester();
buildGradeRef();
