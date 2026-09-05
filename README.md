# 🧪 Playwright QA Portfolio — Luis Carlos Mazzanti

Centralized repository of practical quality assurance (QA) projects, End-to-End (E2E) automation with **Playwright**, test case design, and technical audits.

---

## 📂 Portfolio Structure

### 📁 `prueba1/` — Basic Form Validation
* **Objective:** Automation of form validation flows and application of formal testing techniques.
* **Applied Techniques:** Equivalence partitioning, boundary value analysis, and prevention of false positives with contrast cases.
* **Technologies:** Playwright (TypeScript/JavaScript).

### 📁 `prueba2/` — FinanceFlow Pro (Advanced Module)
* **Objective:** Regression testing, asynchronous synchronization, and data logic auditing in a simulated financial panel (`dashboard-pro.html`).
* **Demonstrated Skills:** 
  * Handling smart waits and loading states (~1.5s simulated network latency).
  * Prevention of double submissions and validation of dynamic elements in the DOM.
  * **Bug Hunting:** Detection, isolation, and formal documentation of the logical incident `BUG-FF-001` (+500€ deviation in accumulated metrics).
* **Deliverables:** Includes complete test script, configuration, and the formal technical execution report (`INFORME_TECNICO_EJECUCION.md`).

### 📁 `TestingQASwagLabs/` — Swag Labs (E2E & Bug Regression)
* **Objective:** Transition from Manual QA to E2E Automation, documenting real issues in Jira and building a regression suite on SauceDemo.
* **Demonstrated Skills:**
  * Bug reporting and severity classification under industry standards.
  * Automation of error scenarios using Playwright and execution via local browsers to bypass network restrictions.
  * Utilization of soft assertions (`expect.soft()`) to validate multiple critical failure conditions within a single flow.
* **📋 Bug Traceability Matrix (Jira):**

| Ticket ID | Severity | Module / Tag | Finding Description | Associated Script |
| :--- | :--- | :--- | :--- | :--- |
| **BUG-01** | `High-Severity` | `Functionality / Auth` | Session lockout and critical error (*Epic sadface*) with restricted credentials. | `swag-login-bug.spec.ts` |
| **BUG-02** | `Medium-Severity` | `Inventory / Cart` | Absence of direct numeric quantity selectors in the product interface. | `swag-regression-suite.spec.ts` |
| **BUG-03** | `High-Severity` | `Checkout` | Incompleteness in the shipping form (lack of country and global logistics fields). | `swag-regression-suite.spec.ts` |

---

## 🚀 How to clone and run locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/LuigiMazza/playwright-qa-portfolio.git](https://github.com/LuigiMazza/playwright-qa-portfolio.git)