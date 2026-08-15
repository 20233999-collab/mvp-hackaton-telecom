# 📜 Historial de Conversación y Decisiones de Arquitectura (Google Antigravity)

Este documento registra la bitácora cronológica completa del trabajo conjunto realizado entre el **Usuario (Arquitecto y Diseñador Líder)** y el **Agente AI (Antigravity)** para la concepción, diseño e implementación del ecosistema **M.O.V.I. (Movistar Journey Tracker)** para la **Hackathon AI Telecom 2026**.

---

## 🎯 1. Tesis Fundamental y Alcance
* **Nombre Oficial:** Movistar Journey Tracker (M.O.V.I.) & Mega-Orquestador E2E Unificado por IA.
* **Tesis Central:** Los 3 retos de la Hackathon no se abordan como silos aislados, sino como un **ciclo continuo e infinito de retroalimentación**:
  1. **Fase 1 (Reto 2):** Propulsión Comercial y Atracción (NBO, CVM, Movistar Total, Zero Spam Telefónico).
  2. **Fase 2 (Reto 3):** Eficiencia Operativa, Facturación y Red GPON (SON-IA, Modo Mantenimiento 15 Mbps, Auditoría $P \times Q$, Conciliación Bancaria BCP y Reconexión GPON en 4.2s).
  3. **Fase 3 (Reto 1):** Post-Venta, Explicación y Contención (Mitigación de Bill Shock, Desglose 3 Barras CSR-RAG 0% Alucinación, Ahorro de 360s de TMO en Atento Call Center).
  4. **Bucle de Cierre:** Conformidad en post-venta desbloquea la bandera de `Cross-Selling Restrictivo`, permitiendo nuevas ofertas comerciales en la Fase 1.

---

## 🗺️ 2. Mapa Completo de Vistas y Rutas Desarrolladas

| Ruta en Vite / Producción | Fase / Reto | Rol / Persona | Descripción y Características |
| :--- | :--- | :--- | :--- |
| [`/index.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/index.html) | **Portal Master** | Todos | Centro de control Bento Grid organizado limpiamente por las 3 Fases con atajos de teclado globales `[1] - [8]`. |
| [`/cliente.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/cliente.html) | **Fase 1 (CX)** | Miguel Mendoza | App Mi Movistar con gráfico didáctico de 4 meses en Arequipa y recepción de llamada sin spam telefónico. |
| [`/operador.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/operador.html) | **Fase 1 (EX)** | Carlos Alvarado | Salesforce CRM con Marcador CATE, Ficha 360 estilo currículo, Cluely AI (Live Whisper 42ms) y odómetro de comisiones. |
| [`/miguel.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/miguel.html) | **Fase 1 (Chat)** | Miguel & Aura | Simulación hiperrealista de WhatsApp con notas de voz interactivas y avance paso a paso tipo historia. |
| [`/operaciones.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/operaciones.html) | **Fase 2 (EX/Red)** | Ana Morales & Juan Carlos | Estación de trabajo para Tablet con 5 pantallas individuales: Touch ID biométrico, Scoring CVM, API BCP, conciliación SGA HITL y reconexión GPON OLT en 4.2s. |
| [`/atencion.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/atencion.html) | **Fase 3 (CX vs EX)** | Miguel vs. Jorge | Pantalla dividida sincronizada con detección de Bill Shock ($S/\ 154.90$), gráfico CSR-RAG 3 barras (0% alucinación), pago con Yape en 1 toque, ahorro de 360s de TMO en Atento y flag de Cross-Selling. |
| [`/mi-movistar.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/mi-movistar.html) | **Fase 3 (Mascota)** | Miguel & Aura 3D | Chat conversacional estilo ChatGPT con la Mascota Robótica 3D de Aura en el centro y ondas de voz dinámicas. |
| [`/mockup-sin-megas.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/mockup-sin-megas.html) | **B-Roll Mockup 1** | Miguel (Mobile) | Pantalla limpia minimalista corporativa (`DESIGN.md` con Plus Jakarta Sans): Notificación de saldo agotado y botón interactivo para activar 2 GB. |
| [`/mockup-whatsapp-sin-megas.html`](file:///home/laptop/Documentos/mvp-hackaton-telecom/mockup-whatsapp-sin-megas.html) | **B-Roll Mockup 2** | Miguel (WhatsApp) | Living mockup hiperrealista de WhatsApp con el isotipo oficial 2025 de Movistar, animación *Tap-to-Receive* con simulación de `escribiendo...` y entrega en vivo. |

---

## 💎 3. Principales Decisiones de Diseño e Ingeniería

1. **Strict Light Mode & Light Glassmorphism (`DESIGN.md`):**
   - Se eliminaron las cajas grises y temas oscuros pesados.
   - Fondos en `#FFFFFF` / `#F8FBFE` con resplandores en Azul Movistar (`#019DF4`) y Cian Aura (`#00D4FF`).
   - Tipografía corporativa oficial: **`Plus Jakarta Sans`** (Display y H1), **`Inter` / `Geist`** (Cuerpo) y **`JetBrains Mono`** (Telemetría, códigos y números).

2. **Cero Alucinaciones Aritméticas (Motor CSR-RAG):**
   - Separación estricta entre la capa lógica/simbólica y el lenguaje generativo.
   - Fórmulas deterministas para el cálculo de prorrateos proporcionales $P = R \times \frac{N - d + 1}{N}$.

3. **Arquitectura TMF Abierta (TM Forum):**
   - TMF622 (Product Ordering Management) para la inyección de órdenes en tiempo real.
   - TMF683 (Party Interaction Management) para el Live Whisper y trazas de voz.
   - TMF637 (Product Inventory Management) para la gestión del inventario de servicios y reconexión GPON.

4. **Experiencia Tablet Ergonómica en Fase 2:**
   - Diseñada pantalla por pantalla para ser manipulada directamente desde una tablet física durante el video pitch de 3 minutos, con barra superior tipo stories y botones táctiles al alcance del pulgar.

5. **Mockups Vivientes para B-Roll:**
   - Diseñados específicamente para tomas de apoyo de video en smartphones, con disparadores táctiles (*Tap-to-Receive*) y botón de reinicio instantáneo (`R`).

---

## 📦 4. Bitácora de Despliegue y Repositorios
* **GitHub:** `https://github.com/20233999-collab/mvp-hackaton-telecom`
* **Vercel Production:** `https://mvp-hackaton-telecom.vercel.app/`
