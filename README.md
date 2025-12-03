# Angular 21 – Saqly Learning Path

This repository contains a full learning path for Angular 21, organized to match the official Angular Documentation structure.  
Each folder represents a topic or chapter demonstrated in the project.

---

## 1. Introduction
Fundamental Angular concepts and quick start materials.

- What is Angular?  
- Installation  
- Essentials → [`/src/app/Essentials`](src/app/Essentials)  
- Start Coding  

---

## 2. Signals (In-depth Guides)
Modern Angular reactivity using Signals.

Topics include:

- Signal basics  
- Computed signals  
- Effects  
- Signal-based forms  
- Best practices  

Folder:  
[`/src/app/Signals`](src/app/Signals)

---

## 3. Components
Everything related to building and understanding Angular components.

- Component structure  
- Inputs & Outputs  
- Change Detection  
- Content Projection (`ng-content`)  
- View Queries  

Folder:  
[`/src/app/Components`](src/app/Components)

---

## 4. Templates
Full coverage of the new Angular template syntax.

- Control Flow (`@if`, `@for`, `@switch`)  
- Blocks  
- Template expressions  
- Rendering performance tips  

Folder:  
[`/src/app/Templates`](src/app/Templates)

---

## 5. Directives
Deep dive into Angular directives.

- Structural directives  
- Attribute directives  
- HostBinding / HostListener  
- Reusable directive patterns  

Folder:  
[`/src/app/Directives Part`](src/app/Directives%20Part)

---

## 6. Dependency Injection (Updated)
Modern DI system in Angular 21.

Topics include:

- `inject()` function  
- `providedIn` options  
- Tree-shakable providers  
- Hierarchical injectors  

Folder:  
[`/src/app/Dependency injection`](src/app/Dependency%20injection)

---

## 7. Routing (Updated) -- Soon
# Angular Routing Demo (v21)

This folder contains a **complete routing playground** that follows the official
[`angular.dev/guide/routing`](https://angular.dev/guide/routing) topics and shows
them all in a single demo app.

The goal is to use it in teaching / live sessions:
students can open the app and *see* every routing feature working, then open the
corresponding file and compare it with the documentation.

---

## Tech stack

- **Angular v21** (standalone APIs)
- **Router v21** with:
  - `provideRouter(...)`
  - `withComponentInputBinding`
  - `withInMemoryScrolling`
  - `withPreloading(PreloadAllModules)`
  - `withRouterConfig`
  - `withViewTransitions`

---

## How to run

```bash
npm install
ng serve
ng test
# open http://localhost:4200


---

## 8. Forms (Updated) -- Soon
Covers all Angular form systems:

- Template-driven forms  
- Reactive forms  
- Signal Forms (the new recommended system)  

Signal Forms examples are inside the Signals folder.

---

## 9. HTTP Client -- Soon
Best practices for handling APIs in Angular.

Recommended folder name (if added later):  
`/src/app/Http`

---

## 📌 Notes
- Folders are organized based on the Angular Documentation structure.  
- Each chapter aligns with real Angular v21 features and best practices.  
- You can extend the repo with Routing, HTTP, State Management, Tailwind, or Angular ARIA demos at any time.

---

## 🎯 Goal of This Repository
This repo serves as a practical, hands-on learning path for Angular 21 — following the exact order of the official Angular docs, but with real examples, simplified explanations, and clean project organization.

