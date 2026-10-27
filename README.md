# PrepPath — TCS Placement Preparation Platform

> **Your preparation. Your progress. Your next opportunity.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-teal.svg)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-2.1-green.svg)](https://vitest.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-v10-orange.svg)](https://firebase.google.com/)

---

## 1. Educational Independence Notice

> **IMPORTANT DISCLAIMER:**  
> PrepPath is an **independent placement preparation platform** authored to help university engineering students prepare for campus technical hiring assessments. **PrepPath is not owned, developed, endorsed, sponsored by, or officially affiliated with Tata Consultancy Services (TCS) or any of its subsidiaries.**  
>
> All company names, test titles, and hiring track names (*Ninja*, *Digital*, *Prime*, *NQT*) are trademarks of their respective owners and are used strictly under fair-use for descriptive, curricular classification. PrepPath does not guarantee placement offers, package tiers, or selection outcomes.

---

## 2. Core Preparation Philosophy

PrepPath is designed to definitively answer five questions every student faces during placement preparation:

1. **What should I study today?**  
   The personalized study planner breaks your timeline into prioritized daily minute goals and curated topics.
2. **Which problems should I solve first?**  
   Problems are categorized by target track (*Ninja*, *Digital*, or *Prime*) and ordered by syllabus weight and verified difficulty.
3. **How can I improve when I cannot solve a problem?**  
   A 4-tier progressive hint system reveals problem observations, algorithmic patterns, pseudocode, and full reference solutions without premature answer disclosure.
4. **What did I do the last time I attempted this problem?**  
   Full submission history stores exact judged code snapshots, timestamps, language used, runtime/memory metrics, and one-click code restoration.
5. **How close am I to completing my preparation plan?**  
   Authoritative progress tracking measures real task completion, distinct problems solved, and mistake queues without vanity streaks or fabricated placement numbers.

---

## 3. Technology Stack

- **Frontend Core:** React 18, Vite 5, TypeScript (strict type checking)
- **Styling & UI:** Tailwind CSS, Lucide React icons, Responsive split-pane workspace
- **Coding Workspace:** Monaco Editor (`@monaco-editor/react`) with syntax highlighting for C, C++, Java, and Python 3, automatic indentation, and draft autosaving
- **Data Visualization:** Recharts for genuine submission verdict distribution and topic mastery
- **State Management & Routing:** React Router v6, Zustand (with persistent PostgreSQL & Supabase sync), TanStack Query
- **Backend & Relational Persistence:**
  - PostgreSQL schema (`supabase/migrations/20241027000000_init_preppath.sql`) with 11 relational tables, foreign key constraints, indexes, and Row-Level Security (RLS)
  - Typed Supabase client and PostgreSQL Data Access Layer (`src/lib/db.ts`, `src/lib/supabase.ts`)
  - Firebase Authentication (Email/Password & Google Sign-in)
  - Cloud Functions / Server Execution Gateway (`functions/src/index.ts`)
- **Code Execution:** Sandboxed Judge0 CE gateway integration with timeout protection, output normalization, and client-safe hidden grader tests
- **Testing:** Vitest, React Testing Library, jsdom

---

## 4. Hiring Tracks Overview

| Track | Tier | Preparation Scope | Focus Syllabus Areas |
| :--- | :--- | :--- | :--- |
| **TCS Ninja** | Foundation Pathway | Core Aptitude & Standard Coding | Numerical Ability, Reasoning Ability, Verbal Ability, Programming Logic, Foundational Arithmetic & String Coding |
| **TCS Digital** | Advanced Pathway | Advanced Quantitative & Data Structures | Advanced Quantitative, Advanced Reasoning, Data Structures (Prefix Sums, Two Pointers, 2D Grids, Strings) |
| **TCS Prime** | Premier Pathway | Complex Algorithms & Optimization | Complex Dynamic Programming, Graph/Tree Algorithms, Bit Manipulation, Optimal Time-Space Bounds |

---

## 5. Question Provenance & Evidence Types

PrepPath enforces transparent labeling across all problems in the bank:

- `OFFICIAL_INFORMATION`: Derived directly from official exam patterns and syllabus notifications.
- `RECURRING_PATTERN`: Verified algorithmic problem archetypes consistently tested across multiple placement seasons.
- `CANDIDATE_RECALLED`: Based on student recollection of exam themes, formulated with precise bounds and validated test cases.
- `ORIGINAL_PRACTICE`: Independently authored placement practice questions designed to reinforce specific syllabus concepts.

---

## 6. Getting Started & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9+ or **pnpm** / **yarn**

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone <repository-url>
cd preppath-platform

# Install root dependencies
npm install

# Install Cloud Functions dependencies (optional for local functions development)
cd functions && npm install && cd ..
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Configure your PostgreSQL / Supabase and execution credentials:
```env
# PostgreSQL / Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
DATABASE_URL=postgresql://postgres:your-db-password@db.your-project.supabase.co:5432/postgres

# Server-Side Secrets (Used in functions/ or execution gateway)
JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
JUDGE0_API_KEY=your-judge0-api-key
```

### 3. PostgreSQL Database Setup
Apply the schema migration to your Supabase or PostgreSQL database:
```bash
# Using Supabase CLI or direct SQL query
psql $DATABASE_URL -f supabase/migrations/20241027000000_init_preppath.sql
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 7. Quality Assurance & Testing

Run the automated test suite:
```bash
# Run Vitest unit & integration tests
npm test

# Run TypeScript compilation check
npm run build
```

### Test Suite Coverage:
- `plannerEngine.test.ts`: Feasible timeline calculations, revision day distribution, mock test scheduling, weak topic prioritization.
- `executionGateway.test.ts`: CRLF line ending normalization, whitespace comparison, sandboxed test evaluation, Wrong Answer and Compilation Error verdict handling, hidden test case isolation.
- `questionsAndProgress.test.ts`: Question schema validation, evidence provenance tags, authoritative progress state transitions (marking Solved only on verified Accepted submissions), progressive hint reveal bounds.

---

## 8. Firestore Security Rules & Access Control

The database architecture guarantees strict student privacy:

```
users/{uid}                      -> Readable/writable only by the authenticated owner. Cannot alter own role.
users/{uid}/problemDrafts/*      -> Private autosaved code per problem and language.
users/{uid}/customTestCases/*    -> Private custom test cases (enforces payload limit <= 20KB).
users/{uid}/submissions/*        -> Immutable judged submission history; student-readable only.
questions/{questionId}           -> Publicly readable only if publicationStatus == 'PUBLISHED'. Admin write only.
questions_eval/{questionId}      -> Hidden test cases & grader data. NEVER accessible to normal students.
```

To test security rules with the Firebase Emulator Suite:
```bash
firebase emulators:start
```

---

## 9. Administrative Workflow

Users with the `admin` role have access to `/admin` to:
- Create new problems with markdown problem statements, constraints, and examples.
- Configure starter code across C, C++, Java, and Python.
- Add public and hidden grader test cases.
- Author layered progressive hints and complete complexity explanations.
- Toggle publication status (`DRAFT` vs `PUBLISHED`).
- Inspect chronological audit logs for content changes.

---

## 10. License & Ethics

All original problem statements, hints, and explanations in this repository are licensed for educational, non-commercial placement preparation use. Proprietary question databases from recruitment firms are not reproduced.
