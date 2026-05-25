# 🎓 CGPA Calculator — Malaysian Public University

A lightweight, browser-only CGPA calculator built for Malaysian public university students (UMS, UM, UPM, UTM, UiTM, and others using the 4.0 grading scale).

No login. No backend. No data collected. Everything runs locally in your browser.

---

## ✨ Features

- **Semester GPA Calculator** — Add subjects, credit hours, and grades to calculate your GPA for the current semester
- **Cumulative CGPA Tracker** — Track GPA across multiple semesters to get your running CGPA
- **Target CGPA Planner** — Enter your current CGPA and target, and find out exactly what GPA you need in remaining semesters
- **Grade Reference** — Full UMS grade scale (A+ to F) and degree classification table
- **PDF Export** — Download your semester or CGPA result as a clean PDF report
- **Mobile responsive** — Works on phone and desktop

---

## 📊 Grading Scale (UMS / Malaysian Public University)

| Grade | Points | Marks |
|-------|--------|-------|
| A+    | 4.00   | ≥ 90% |
| A     | 4.00   | ≥ 80% |
| A-    | 3.67   | ≥ 75% |
| B+    | 3.33   | ≥ 70% |
| B     | 3.00   | ≥ 65% |
| B-    | 2.67   | ≥ 60% |
| C+    | 2.33   | ≥ 55% |
| C     | 2.00   | ≥ 50% |
| C-    | 1.67   | ≥ 45% |
| D     | 1.00   | ≥ 40% |
| F     | 0.00   | < 40% |

> **Note:** A+ and A carry the same 4.00 grade points. A+ is an excellence recognition, not a higher GPA value.

---

## 🎓 Degree Classification

| Class | CGPA |
|-------|------|
| First Class Honours | ≥ 3.67 |
| Second Class Upper | ≥ 3.33 |
| Second Class Lower | ≥ 3.00 |
| Third Class | ≥ 2.00 |
| Pass | ≥ 0.00 |

---

## 🚀 Usage

### Option 1 — Open directly in browser
Download `cgpa-calculator.html` and open it in any browser. No installation needed.

### Option 2 — GitHub Pages (live link)
1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your app will be live at `https://yourusername.github.io/cgpa-calculator/`

### Option 3 — Clone and run locally
```bash
git clone https://github.com/yourusername/cgpa-calculator.git
cd cgpa-calculator
# Open cgpa-calculator.html in your browser
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | HTML5 + CSS3 |
| Logic | Vanilla JavaScript |
| PDF Export | [jsPDF](https://github.com/parallax/jsPDF) via CDN |
| Fonts | [DM Sans + DM Mono](https://fonts.google.com/) via Google Fonts |
| Backend | None — fully static |

---

## 📁 Project Structure

```
cgpa-calculator/
├── cgpa-calculator.html   # Main app (single file, self-contained)
└── README.md              # This file
```

---

## 🔒 Privacy

This app collects **zero data**. All calculations happen entirely in your browser. Nothing is stored, sent, or tracked.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 🙋 About

Built by a Computing student at Universiti Malaysia Sabah (UMS).  
Feedback and contributions are welcome — open an issue or submit a pull request.
