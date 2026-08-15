# 📋 Contexto del Proyecto, Decisiones Técnicas y Arquitectura
## Movistar Journey Tracker (MJT) & Orquestador M.O.V.I.

---

## 🏛️ 1. Visión y Tesis de Negocio
El proyecto **Movistar Journey Tracker (MJT)** surge como respuesta al desafío integral de la **Hackathon en Tecnologías Digitales AI Telecom 2026**.

A diferencia de aproximaciones tradicionales que abordan los 3 retos como silos independientes, nuestra tesis postula que **el ciclo de vida del cliente telecom es un bucle continuo e interconectado**:
1. **Fase 1 (Atracción & NBO):** La IA detecta dolores reales y genera ofertas hiperpersonalizadas (*Problem-Solving First*).
2. **Fase 2 (Eficiencia Operativa & Facturación):** La red y los sistemas de cobro auditan en tiempo real cada transacción sin fricción humana innecesaria.
3. **Fase 3 (Post-Venta & Contención):** La IA explica didácticamente cada centavo facturado y previene el *bill shock*.
4. **Bucle Continuo:** Solo tras resolver un dolor post-venta y obtener conformidad del cliente, se habilita el cross-selling restrictivo.

---

## 📊 2. Benchmarks Globales Aplicados

### A. Vodafone (CATE - Customer Action Trigger Engine)
* **Principio:** Reducción del *Cost-to-Serve* mediante ofertas que solucionan fricciones operativas antes de vender.
* **Aplicación en MJT:** En lugar de lanzar promociones ciegas, la IA detecta que Valeria viaja a Arequipa, agota sus 20 GB y compra paquetes extra recurrentes, proponiendo **Movistar Total** como solución económica ($S/\ 40.00$ de ahorro neto mensual).

### B. Nubank (nuFormer - Inferencia en Tiempo Real)
* **Principio:** Latencia ultrabaja (<50ms) en la recomendación de acciones para asesores durante llamadas en vivo.
* **Aplicación en MJT:** El copiloto **Cluely AI** inyecta el pitch de 12 segundos y responde a objeciones en 42ms mediante streaming en tiempo real (*Live Whisper*).

### C. Exacaster (Next Best Action & Predictive Dialer)
* **Principio:** Orquestación omnicanal coordinada entre la App móvil, canales de mensajería (WhatsApp) y el marcador predictivo del contact center (Salesforce).
* **Aplicación en MJT:** Ficha 360 unificada bajo estándares TM Forum (TMF622 Product Ordering, TMF683 CVM, TMF637 Product Inventory).

---

## 🛠️ 3. Decisiones de Arquitectura e Implementación

### 3.1. Frontends Desarrollados
1. **Master Launchpad (`index.html`):**
   * Vista de mando central tipo Bento Grid corporativo con atajos de teclado instantáneos (`[1]`, `[2]`, `[3]`, `[4]`).
2. **Plataforma del Operador Carlos (`operador.html`):**
   * Réplica inmersiva de Salesforce Sales Cloud CRM.
   * Flujo dinámico de 6 estados:
     1. Marcador Predictivo en espera (KPIs y turnos de Carlos).
     2. Entrada de llamada entrante con asignación inteligente.
     3. Ficha 360 de Valeria Mendoza en formato **Dossier Ejecutivo / CV** (Cero tarjetas genéricas).
     4. Transcripción de audio en vivo (*Live Audio Waves*).
     5. Copiloto Cluely AI con efecto typewriter en streaming (42ms) y matriz de manejo de objeciones.
     6. Formulario DITO autocompletado en 1 clic (TMF622) y odómetro de comisiones en vivo ($S/\ 2,450 \rightarrow S/\ 2,570$, $+S/\ 120$).
3. **Perspectiva del Cliente Valeria (`cliente.html`):**
   * Pantalla 1: App Mi Movistar con **gráfico histórico didáctico de 4 meses** (resaltando el sobreconsumo en Arequipa y el gasto disperso de $S/\ 179.80$) y banner de advertencia amigable.
   * Pantalla 2: Llamada entrante de Carlos identificada de forma respetuosa (eliminando el sesgo de "vendedor spam de Claro" gracias a la mención de detalles exactos de su viaje).
4. **App Mi Movistar Mascota 3D (`mi-movistar.html`):**
   * Mascota Aura 3D con animaciones CSS fluidas, selector de preguntas frecuentes y respuesta matemática con desglose CSR-RAG.
5. **Simulador WhatsApp Omnicanal (`valeria.html`):**
   * Chat hiperrealista con avance táctil (*Tap-to-Advance*), tarjeta de producto 1-Touch y desglose de prorrateo en 3 barras.

---

## 🎨 4. Directivas de Diseño y UX (Anti-Slop & Light Tech)

* **Eliminación de Marcos de Teléfono:** Se eliminaron todas las carcasas artificiales tipo mockup (`phone-container` con bordes de 50px y plástico simulado). Ahora las interfaces son **100% fullscreen responsive (`100vw`, `100dvh`)** tanto en móviles físicos como en desktop.
* **Ocultamiento de Controles en Móvil:** Los toolbars de director y botones de fase flotantes se ocultan automáticamente en móviles (`max-width: 768px`) con `display: none !important;` para permitir grabaciones limpias.
* **Paleta Oficial Movistar Light Tech:**
  * Movistar Blue: `#019DF4` / `#0066CC`
  * Aura Cyan: `#00D4FF`
  * Deep Indigo: `#0B192C` / `#0F172A`
  * Canvas Background: `#F8FAFC` / `#FFFFFF`
  * WhatsApp Canvas: `#EFEAE2`
* **Separación de Lógica y Lenguaje Natural (CSR-RAG):**
  * Ningún cálculo matemático se delega a generación estocástica de texto. El prorrateo ($S/\ 5.00 + S/\ 15.00 + S/\ 139.90 = S/\ 159.90$) y el ahorro mensual ($S/\ 40.00$) están auditados y precalculados simbólicamente.

---

## 📈 5. Estado Actual del Proyecto y Próximos Pasos

### ✅ Completado:
* [x] Master Launchpad Hub (`index.html`)
* [x] Fase 1 CX - Perspectiva del Cliente Valeria (`cliente.html`)
* [x] Fase 1 EX - Salesforce CRM Operador Carlos (`operador.html`)
* [x] Fase 3 CX - App Mi Movistar con Mascota Aura (`mi-movistar.html`)
* [x] Fase 1 Omnicanal - WhatsApp Valeria (`valeria.html`)
* [x] 100% Fullscreen Responsive & Cero Mockups Plásticos
* [x] Ocultamiento de Navbars en Móviles
* [x] Despliegue en Producción Vercel: `https://mvp-hackaton-telecom.vercel.app/`
* [x] Repositorio Git Sincronizado en GitHub (`20233999-collab/mvp-hackaton-telecom`)

### ⏳ Pendiente / En Cola:
* [ ] Fase 2 EX - Estación de Back-Office de Ana Morales (SON-IA, Conciliación HITL $P \times Q$).
* [ ] Documento Descriptivo Oficial de 1 Página (PDF de la propuesta).
* [ ] Grabación y sincronización del Video Pitch de 3 Minutos (180s).
