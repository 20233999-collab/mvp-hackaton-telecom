# 🏗️ Contexto del Proyecto, Arquitectura y Decisiones Técnicas

Este documento contiene la especificación técnica profunda, arquitectura del sistema y estado actual del ecosistema **Movistar Journey Tracker (M.O.V.I.)** desarrollado para la **Hackathon AI Telecom 2026**.

---

## 🏛️ 1. Arquitectura del Mega-Orquestador E2E

El ecosistema conecta tres capas tecnológicas:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CAPA 1: EXPERIENCIA DEL CLIENTE (CX)                  │
│   • App Mi Movistar con Mascota Aura 3D (/mi-movistar.html)                 │
│   • Gráfico Didáctico de Consumo en Arequipa (/cliente.html)                │
│   • WhatsApp Oficial con Notificaciones Vivas (/mockup-whatsapp-sin-megas)  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Webhooks & APIs REST
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                    CAPA 2: MOTOR DE ORQUESTACIÓN IA (M.O.V.I.)               │
│   • Motor Neuro-Simbólico CSR-RAG (0% Alucinación Aritmética)               │
│   • Sentinel NLP: Detección de Emociones y Semáforo de Frustración (L2)     │
│   • Live Whisper: Transcripción y Streaming en 42ms para Asesor             │
│   • Bucle de Cierre: Bandera de Cross-Selling Restrictivo                   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ TMF Open APIs (TMF622, TMF683, TMF637)
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                  CAPA 3: OPERACIONES, RECAUDACIÓN Y RED (EX & BSS)           │
│   • Salesforce CRM / Cockpit Asesor Carlos (/operador.html)                 │
│   • Cockpit Asesor 104 Jorge en Atento Perú (/atencion.html)                │
│   • Centro de Mando SON-IA Tablet Flow Ana Morales (/operaciones.html)       │
│   • Webhooks BCP en Tiempo Real + Conciliación SGA P×Q + GPON OLT en 4.2s   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 👥 2. Roles, Personas y Flujos Mapeados

1. **Miguel Mendoza (Cliente Residencial - CX):**
   - Residente en Arequipa, cliente de fibra 100 Mbps con gasto extra recurrente de $S/\ 40.00$ en paquetes de datos por saturación de red.
   - En Fase 1 recibe llamada consultiva de Carlos basada en sus datos reales (Zero Spam).
   - En Fase 3 experimenta Bill Shock de $S/\ 154.90$ en su primer recibo y lo resuelve en 45 segundos con el gráfico didáctico de 3 barras de Aura, pagando con Yape.

2. **Carlos Alvarado (Asesor Comercial 104 - EX):**
   - Opera en Salesforce CRM con marcador predictivo CATE.
   - Cuenta con el copiloto Cluely AI con *Live Whisper* (42ms) y odómetro de comisiones en vivo (+S/ 120 por Movistar Total).

3. **Ana Morales (Analista de Back-Office & Red - EX):**
   - Utiliza la estación táctil para Tablet de la consola **SON-IA**.
   - Gestiona la clasificación de riesgo de Juan Carlos Quispe (Modo Mantenimiento 15 Mbps en vez de corte), intercepta el pago del BCP, audita la balanza contable SGA con 1 clic (HITL) y reconecta la OLT GPON en 4.2 segundos.

4. **Jorge Ramos (Asesor de Soporte Nivel 2 en Atento Perú - EX):**
   - Opera en la terminal 104 bajo presión de TMO (<180 segundos).
   - El sistema le asigna en standby el caso de Miguel. La explicación automática de Aura CSR-RAG resuelve la duda de prorrateo, ahorrándole 360 segundos (6 minutos) de llamada de reclamo y evitando quejas ante OSIPTEL.

---

## 📊 3. Rúbrica y KPIs de Impacto de Negocio

| KPI Estratégico | Valor / Meta Demostrada | Impacto Operativo |
| :--- | :--- | :--- |
| **Call Deflection Rate** | **40% de Desvío Digital** | Desvío masivo de consultas repetitivas de recibos hacia la autogestión de Aura. |
| **Reducción de TMO** | **180s ➔ 45s ($\downarrow 75\%$)** | Los casos que escalan a humanos cuentan con traza estructurada y resumen contextual. |
| **Tiempo de Reconexión de Red** | **4.2 segundos (vs 18 horas)** | Sincronización instantánea entre la API del banco, el facturador SGA y la central GPON. |
| **Error en Prorrateo y Facturación** | **0% Alucinación ($\pm S/\ 0.00$)** | Separación estricta entre motor simbólico y lenguaje natural (CSR-RAG). |
| **Reclamos Escalados a OSIPTEL** | **0% Quejas Formales** | Transparencia proactiva antes del vencimiento del recibo. |
| **Incremento del ARPU** | **+28% en Hogares Migrados** | Conversión efectiva a Movistar Total ($S/\ 139.90$/mes). |
| **Disminución de Morosidad (DSO)** | **$\downarrow 33\%$ de Reducción** | Fraccionamiento dinámico y Soft-Suspension anti-churn. |

---

## 🛠️ 4. Pila Tecnológica del Prototipo

* **Bundler & Core:** Vite 6 + Vanilla HTML5/CSS3 + JavaScript ES Modules.
* **Sistema de Diseño:** Movistar Light Tech (`DESIGN.md`) con *Plus Jakarta Sans* y *JetBrains Mono*.
* **Motor de Animaciones:** GSAP 3 (GreenSock) + Canvas Confetti.
* **Iconografía:** Lucide Icons & SVG Primitives.
* **Hosting y CI/CD:** Vercel Production + GitHub Integration.
