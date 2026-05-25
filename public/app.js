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

const CLASSES = [
  { label: 'First Class Honours', min: 3.67, color: '#3C3489', bg: '#EEEDFE' },
  { label: 'Second Class Upper',  min: 3.33, color: '#0F6E56', bg: '#E1F5EE' },
  { label: 'Second Class Lower',  min: 3.00, color: '#185FA5', bg: '#E6F1FB' },
  { label: 'Third Class',         min: 2.00, color: '#854F0B', bg: '#FAEEDA' },
  { label: 'Pass',                min: 0,    color: '#5F5E5A', bg: '#F1EFE8' }
];

function getClass(gpa) {
  for (const c of CLASSES) if (gpa >= c.min) return c;
  return CLASSES[CLASSES.length - 1];
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
      <input type="text" placeholder="Subject ${i + 1}" value="${s.name}"
        oninput="semSubjects[${i}].name=this.value">
      <input type="number" min="1" max="6" value="${s.credit}"
        oninput="semSubjects[${i}].credit=+this.value">
      <select onchange="semSubjects[${i}].grade=this.value">${gradeOpts()}</select>
      <button class="del-btn" onclick="removeSemSubject(${i})" aria-label="Remove">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>`).join('');
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
  cgpaSemesters.push({ label: `Semester ${cgpaSemesters.length + 1}`, gpa: 0, credits: 0 });
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
          <label>Semester GPA</label>
          <input type="number" min="0" max="4" step="0.01" value="${s.gpa}" placeholder="0.00"
            oninput="cgpaSemesters[${i}].gpa=+this.value;document.getElementById('sem-badge-${i}').textContent=parseFloat(this.value||0).toFixed(2)">
        </div>
        <div class="sem-field">
          <label>Credit hours</label>
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
  if (!remC) { alert('Please enter remaining credits.'); return; }
  const needed = ((tgt * (curC + remC)) - (cur * curC)) / remC;
  const rc  = document.getElementById('target-result-card');
  const msg = document.getElementById('target-msg');
  const val = document.getElementById('target-val');
  rc.className = 'result-card';
  if (needed > 4) {
    rc.classList.add('danger');
    val.textContent = needed.toFixed(2);
    msg.textContent = 'Target not achievable — consider lowering your target CGPA or completing more credits.';
    document.getElementById('target-lbl').textContent = 'Required GPA (not achievable)';
  } else if (needed <= 0) {
    rc.classList.add('success');
    val.textContent = 'Done!';
    msg.textContent = 'Your current CGPA already meets your target. Keep up the great work!';
    document.getElementById('target-lbl').textContent = 'Target already achieved';
  } else {
    val.textContent = needed.toFixed(2);
    const cls = getClass(needed);
    msg.textContent = `You need at least ${cls.label} performance in your remaining semesters.`;
    document.getElementById('target-lbl').textContent = 'Required GPA for remaining semesters';
  }
  document.getElementById('target-info').innerHTML =
    `Current CGPA: <strong>${cur.toFixed(2)}</strong> over <strong>${curC}</strong> credits &nbsp;·&nbsp;
     Target: <strong>${tgt.toFixed(2)}</strong> &nbsp;·&nbsp;
     Remaining: <strong>${remC}</strong> credits`;
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

  document.getElementById('class-table').innerHTML = CLASSES.map(c => `
    <div class="class-item" style="background:${c.bg}">
      <span class="class-name" style="color:${c.color}">${c.label}</span>
      <span class="class-range" style="color:${c.color}">≥ ${c.min.toFixed(2)}</span>
    </div>`).join('');
}

/* ── Tab switching ── */
function switchTab(t) {
  ['sem', 'cgpa', 'target', 'ref'].forEach(id => {
    document.getElementById('tab-' + id).classList.toggle('active', id === t);
    document.getElementById('tbtn-' + id).classList.toggle('active', id === t);
  });
}

/* ── PDF Export ── */
function exportPDF(type) {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { alert('PDF library not loaded yet, try again.'); return; }
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  doc.setFontSize(20); doc.setTextColor(60, 52, 137);
  doc.text('CGPA Calculator Report', 20, 22);
  doc.setFontSize(10); doc.setTextColor(90, 86, 128);
  doc.text('Malaysian Public University · 4.0 Scale', 20, 30);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-MY', { dateStyle: 'long' })}`, 20, 36);
  doc.setDrawColor(127, 119, 221); doc.setLineWidth(0.5); doc.line(20, 40, 190, 40);
  let y = 52;
  if (type === 'sem') {
    doc.setFontSize(13); doc.setTextColor(26, 23, 48);
    doc.text('Semester GPA Breakdown', 20, y); y += 10;
    doc.setFontSize(10); doc.setTextColor(90, 86, 128);
    semSubjects.forEach(s => {
      const pts = parseFloat(s.grade);
      const g = GRADES.find(g => g.pts === pts && g.ltr !== 'A+') || GRADES[0];
      doc.text(`${s.name || 'Unnamed Subject'}   ${s.credit} credit(s)   Grade: ${g.ltr} (${pts.toFixed(2)})`, 20, y); y += 7;
    });
    y += 4;
    doc.setFontSize(16); doc.setTextColor(60, 52, 137);
    doc.text(`Semester GPA: ${document.getElementById('sem-gpa-val').textContent}`, 20, y); y += 8;
    doc.setFontSize(11); doc.setTextColor(90, 86, 128);
    doc.text(`Total Credits: ${document.getElementById('sem-credits').textContent}`, 20, y);
  } else {
    doc.setFontSize(13); doc.setTextColor(26, 23, 48);
    doc.text('Cumulative CGPA Breakdown', 20, y); y += 10;
    doc.setFontSize(10); doc.setTextColor(90, 86, 128);
    cgpaSemesters.forEach(s => {
      doc.text(`${s.label}   GPA: ${s.gpa.toFixed(2)}   Credits: ${s.credits}`, 20, y); y += 7;
    });
    y += 4;
    doc.setFontSize(16); doc.setTextColor(60, 52, 137);
    doc.text(`Cumulative CGPA: ${document.getElementById('cgpa-val').textContent}`, 20, y); y += 8;
    doc.setFontSize(11); doc.setTextColor(90, 86, 128);
    doc.text(`Total Credits: ${document.getElementById('cgpa-total-credits').textContent}   Semesters: ${cgpaSemesters.length}`, 20, y);
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
