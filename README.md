# 📘 Adbrag

In this project, I aim to build a **modern Angular application** using Signals, standalone components, and Tailwind CSS.  
It serves as a personal brag document tracker for yearly goals and achievements.

- **`Angular 19`**
  - **`Signals`** (`signal()`, `computed()`, `effect()`)
  - **`Standalone components`**
  - **`inject()`**
  - **`@input()`, `@output()`**
  - **`Control flow syntax`** (`@if`, `@for`)
  - **`Reactive Forms` / `ngModel`**
- **`Component Architecture`**
  - **`GoalsComponent`** (Sections, Header, Container, Item)
  - **`GoalForm`** (Add/Edit Mode combined)
  - **`SmallBtn`**, **`ConfirmDialog`**
- **`Tailwind CSS`**
  - **`Custom color palette`**
  - **`Utility-first design`**
  - **`Responsive layout`**
- **`LocalStorage`**
  - **`Data persistence layer`**
  - **`Synced with Signals`**
- **`TypeScript`**
  - **`Strict typing`**
  - **`Custom types & interfaces`**
- **`Project Structure`**
  - **`Modular, feature-based folders`**
  - **`Model layer (Goal, BragDocument)`**
  - **`Service logic separated from UI`**
- **`Dynamic Form Logic`**
  - **`Add & Edit with shared component`**
  - **`Pre-fill via signal`**

---

## 🚀 Getting Started

This project uses **Angular 19**. Below is a brief guide to run it locally.

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v9+)

### Installation

```bash
git clone https://github.com/stekug/adbrag.git
cd adbrag
npm install
npm run start
```

Then navigate to `http://localhost:4200/` in your browser.

---

## 🧱 Folder Structure

```bash
src/
├── app/
│   ├── goals/                       # Feature: Goals
│   ├── shared/                      # Reusable components (ConfirmDialog, SmallBtn)
│   ├── data/                        # Dummy data for init
│   └── brag-document.service.ts     # Core data logic
├── models/                          # Interfaces & types
├── styles/                          # Tailwind & base styles
└── main.ts / app.config.ts          # Bootstrap
```

---

## 🧪 Feature Status

- ✅ Add goal
- ✅ Edit goal
- ✅ Delete goal
- ✅ Confirm dialog on delete
- ✅ Dynamic form (shared for Add/Edit)
- ✅ Section layout: This Year vs Next Year
- ✅ Tailwind UI
- 🔜 Project section
- 🔜 Export (PDF / Markdown)
- 🔜 Year selection (2024 / 2025 / 2026)
- 🔜 Supabase or Firebase backend (optional)

---

## 🧠 Learnings

- How to use **Angular Signals** for reactive state
- How to build **dynamic forms with shared components**
- How to create **input()/output() signals** in Angular
- Deep dive into **Tailwind theming** & component design
- Managing app-wide state with **localStorage + Signal**

---

## 💬 Author

Made with ❤️ by Stephan

---
