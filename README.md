# 🧪 Playwright QA Portfolio — Luis Carlos Mazzanti

Repositorio centralizado de proyectos prácticos de aseguramiento de calidad (QA), automatización End-to-End (E2E) con **Playwright**, diseño de casos de prueba y auditorías técnicas.

---

## 📂 Estructura del Portafolio

### 📁 `prueba1/` — Validación Básica de Formularios
* **Objetivo:** Automatización de flujos de validación de formularios y aplicación de técnicas de testing formal.
* **Técnicas aplicadas:** Particiones de equivalencia, análisis de valores frontera y prevención de falsos positivos con casos de contraste.
* **Tecnologías:** Playwright (TypeScript/JavaScript).

### 📁 `prueba2/` — FinanceFlow Pro (Módulo Avanzado)
* **Objetivo:** Pruebas de regresión, sincronización asíncrona y auditoría lógica de datos en un panel financiero simulado (`dashboard-pro.html`).
* **Habilidades demostradas:** 
  * Manejo de esperas inteligentes y estados de carga (latencia de red simulada de ~1.5s).
  * Prevención de dobles envíos y validación de elementos dinámicos en el DOM.
  * **Bug Hunting:** Detección, aislamiento y documentación formal del incidente lógico `BUG-FF-001` (desviación de +500€ en métricas acumuladas).
* **Entregables:** Incluye script de pruebas completo, configuración y el informe técnico formal de ejecución (`INFORME_TECNICO_EJECUCION.md`).

### 📁 `TestingQASwagLabs/` — Swag Labs (E2E & Bug Regression)
* **Objetivo:** Transición de QA Manual a Automatización E2E, documentando incidencias reales en Jira y construyendo una suite de regresión sobre SauceDemo.
* **Habilidades demostradas:**
  * Reporte de incidencias y clasificación de severidades bajo estándares de la industria.
  * Automatización de casos de error con Playwright y ejecución utilizando navegadores locales para sortear bloqueos de red.
  * Uso de aserciones blandas (`expect.soft()`) para validar múltiples condiciones críticas de fallo en un solo flujo.
* **📋 Matriz de Trazabilidad de Bugs (Jira):**

| ID del Ticket | Severidad | Módulo / Etiqueta | Descripción del Hallazgo | Script Asociado |
| :--- | :--- | :--- | :--- | :--- |
| **BUG-01** | `Severidad-Alta` | `Funcionalidad / Auth` | Bloqueo de sesión y error crítico (*Epic sadface*) con credenciales restringidas. | `swag-login-bug.spec.ts` |
| **BUG-02** | `Severidad-Media` | `Inventario / Carrito` | Ausencia de selectores de cantidad numéricos directos en la interfaz de productos. | `swag-regression-suite.spec.ts` |
| **BUG-03** | `Severidad-Alta` | `Checkout` | Incompletitud en el formulario de envío (carencia de campos para país y logística global). | `swag-regression-suite.spec.ts` |

---

## 🚀 Cómo clonar y ejecutar localmente

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/LuigiMazza/playwright-qa-portfolio.git](https://github.com/LuigiMazza/playwright-qa-portfolio.git)