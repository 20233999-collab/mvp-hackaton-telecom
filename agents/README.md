# 🤖 Hub de Agentes e Inteligencia • Movistar Journey Tracker (M.O.V.I.)
## Hackathon en Tecnologías Digitales AI Telecom 2026

Bienvenido al directorio central de agentes. Este espacio contiene el **contexto maestro, reglas de negocio, arquitectura tecnológica, historial completo de decisiones y transcripciones de interacción** con Google Antigravity para que cualquier agente de IA pueda entender el proyecto en su totalidad y continuar el trabajo de forma consistente y sin fricción.

---

## 📌 1. Regla Suprema de Referencia (NotebookLM)
* **Cuaderno Principal Oficial:** `Hackathon AI Telecom Challenge: Innovation and Guidelines` (ID de biblioteca: `nb_el0iofw1` / `💻 [CONCURSO] Bases de la Hackathon en Tecnologías Digitales 2026`).
* **Protocolo Obligatorio:** Toda consulta estratégica, técnica, de negocio o de bases debe tomar como fuente primaria y verdad de referencia los documentos y directrices indexados en este cuaderno.

---

## 🎯 2. Tesis Central y Nombre de la Solución
* **Nombre de la Solución:** **Movistar Journey Tracker (MJT)** & Mega-Orquestador E2E Unificado por IA (**M.O.V.I. - Modelo Operativo Virtual Inteligente**).
* **Propósito de Competencia:** No desarrollar modelos aislados en silos. La solución unifica los 3 desafíos de la Hackathon en un ciclo continuo optimizado para un **Pitch de 3 minutos (180 segundos)**:
  1. **Fase 1 (Reto 2):** Propulsión Comercial y Atracción (NBO, CVM, Movistar Total, CATE Uplift).
  2. **Fase 2 (Reto 3):** Eficiencia Operativa, Facturación y Recaudación (SON-IA, Auditoría $P \times Q$, Conciliación en Tiempo Real).
  3. **Fase 3 (Reto 1):** Post-Venta, Explicación y Contención (Aura Mascota / BrainyBill, Mitigación de Bill Shock).
  4. **Bucle de Retroalimentación:** Cross-Selling Restrictivo con conformidad del cliente (*Problem-Solving First*).

---

## 👥 3. La Triada de Valor (Perspectivas Obligatorias)
1. **Frente Cliente (CX):** Concierge Digital / Aura, visor de progreso tipo "Rappi-Track", transparencia total de facturación y cero spam telefónico.
2. **Frente Empleado (EX):**
   * **Asesor de Ventas / 104 (Carlos):** Pantalla Única Salesforce CRM, Copiloto *Live Whisper* estilo Cluely (42ms), autocompletado TMF622 y odómetro de comisiones en vivo (+S/ 120).
   * **Analista de Back-Office (Ana):** Estación de trabajo unificada, copiloto contable, conciliación con 1 clic (HITL).
3. **Frente Directivo (DX / ROI):** Trazabilidad E2E con estándares TM Forum (TMF622, TMF683, TMF637), reducción drástica de *Cost-to-Serve*, eliminación del *Churn* y aumento del ARPU.

---

## 📂 4. Mapa del Directorio `agents/`

| Archivo / Carpeta | Propósito |
| :--- | :--- |
| 📄 [`agents/PROJECT_CONTEXT_AND_DECISIONS.md`](./PROJECT_CONTEXT_AND_DECISIONS.md) | Contexto exhaustivo de la arquitectura, decisiones de diseño, benchmarks y estado actual. |
| 📄 [`agents/ROLES_AND_PERSONAS.md`](./ROLES_AND_PERSONAS.md) | Definición técnica de los personajes (Valeria, Carlos, Ana, Aura y M.O.V.I.). |
| 📄 [`agents/CONVERSATION_HISTORY.md`](./CONVERSATION_HISTORY.md) | Registro cronológico y estructurado de todas las interacciones, pedidos del usuario y soluciones generadas. |
| 📁 [`agents/logs/`](./logs/) | Transcripciones raw en formato JSONL (`transcript.jsonl` y `transcript_full.jsonl`) exportadas desde Google Antigravity. |

---

## 🌐 5. Rutas y Despliegue en Producción

* **Producción en Vercel:** 👉 **[`https://mvp-hackaton-telecom.vercel.app/`](https://mvp-hackaton-telecom.vercel.app/)**
* **Repositorio GitHub:** 👉 **[`https://github.com/20233999-collab/mvp-hackaton-telecom`](https://github.com/20233999-collab/mvp-hackaton-telecom)**

### Rutas Activas del Ecosistema:
* `/` (`index.html`) ➔ **Master Launchpad** con Bento Grid de accesos directos y atajos `[1]`, `[2]`, `[3]`, `[4]`.
* `/cliente.html` ➔ **Perspectiva del Cliente (Valeria)**: App Mi Movistar con gráfico didáctico de consumos históricos en Arequipa y llamada entrante respetuosa sin spam.
* `/operador.html` ➔ **Perspectiva del Asesor (Carlos)**: Salesforce CRM corporativo con Copiloto Cluely AI (streaming en vivo), Ficha 360 en formato Dossier/CV, Form-Fill DITO y Odómetro de Comisiones.
* `/mi-movistar.html` ➔ **App Mi Movistar con Mascota Robótica 3D Aura**: Chat ChatGPT-style con visualizador de ondas y CSR-RAG.
* `/valeria.html` ➔ **Simulador WhatsApp Inmersivo**: Flujo conversacional omnicanal tap-to-advance.

---

## 🛡️ 6. Directivas para Agentes Entrantes
1. **Zero Mockups Plásticos:** Todas las vistas deben ocupar el 100% de la pantalla en cualquier dispositivo (`100vw`, `100dvh`), sin carcasas artificiales de teléfonos.
2. **Ocultamiento de Barras en Móviles:** Toda barra flotante de control (`.director-bar`, `.sfdc-workflow-bottom-bar`) debe estar oculta en pantallas móviles (`@media (max-width: 768px)` con `display: none !important;`) y visible únicamente en desktop.
3. **Cero Alucinaciones Aritméticas:** Cálculos exactos ($S/\ 179.80 \rightarrow S/\ 139.90 = S/\ 40.00$ de ahorro).
4. **Política de Git:** **NO realizar `git commit` ni `git push` automáticamente a menos que el usuario lo solicite explícitamente.**
