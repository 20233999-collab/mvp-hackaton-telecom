# 🎨 Sistema de Diseño: Movistar "Light Tech" (Evolución Futurista)
### *Ecosistema Movistar Journey Tracker (MJT) — MVP Hackathon AI Telecom 2026*

---

## 💎 1. Manifiesto y Filosofía de Diseño

El sistema de diseño **Movistar "Light Tech"** evoluciona la identidad visual de Telefónica / Movistar hacia un territorio corporativo de alta tecnología, minimalista y translúcido, concebido exclusivamente en **Modo Claro (Strict Light Mode)**. 

Se abandona el paradigma tradicional de "cajas grises y tarjetas planas" para adoptar una experiencia de **"Tecnología Táctil, Esmerilada y Conectada"**. La interfaz transmite la sensación de una plataforma SaaS agéntica de última generación: fondos inmaculados con refracciones de luz, mallas nodales casi imperceptibles, superficies de cristal esmerilado (*Light Glassmorphism*) y resplandores (*glows*) que emanan del Azul Movistar (#019DF4).

### 🎯 La Triada de Valor en la Interfaz:
1. **Frente Cliente (CX):** Cercanía, empatía humana y transparencia radical (Aura Concierge + Tracking visual "Rappi-Track").
2. **Frente Empleado (EX):** Cero sobrecarga cognitiva, ergonomía visual, datos contextualizados en pantalla única (*Live Whisper*, formularios autocompletables y botones de decisión rápida *HITL*).
3. **Frente Directivo (DX):** Trazabilidad métrica E2E en tiempo real, KPIs limpios y gobernanza visible con estándares TM Forum (TMF622 / TMF683 / TMF637).

---

## 🌈 2. Paleta de Colores y Tokens Semánticos (Light Mode Only)

El contraste y la jerarquía se construyen a través de la pureza de la luz, sombras cromáticas de baja saturación y bordes de refracción azulados.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              PALETA CORE "LIGHT TECH"                       │
├──────────────┬──────────────┬──────────────┬──────────────┬─────────────────┤
│ Base Canvas  │ Glass Layer  │ Brand Blue   │ Deep Indigo  │ Magenta Accent  │
│   #FFFFFF    │ rgba(255..)  │   #019DF4    │   #0B192C    │    #E6007E      │
└──────────────┴──────────────┴──────────────┴──────────────┴─────────────────┘
```

### 2.1. Tokens de Color (CSS Variables)

```css
:root {
  /* ================= FONDOS Y LIENZOS ================= */
  --bg-canvas-pure: #FFFFFF;
  --bg-canvas-subtle: #F8FBFE;
  --bg-canvas-ice: #EBF4FC;
  --bg-canvas-mesh: radial-gradient(at 0% 0%, rgba(1, 157, 244, 0.08) 0px, transparent 50%),
                    radial-gradient(at 100% 100%, rgba(0, 212, 255, 0.06) 0px, transparent 50%),
                    #FFFFFF;

  /* ================= SUPERFICIES GLASS (LIGHT GLASSMORPHISM) ================= */
  --surface-glass-primary: rgba(255, 255, 255, 0.75);
  --surface-glass-card: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.45) 100%);
  --surface-glass-hover: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.65) 100%);
  --surface-glass-cockpit: rgba(246, 250, 254, 0.8);
  --surface-glass-modal: rgba(255, 255, 255, 0.92);

  /* ================= BORDES Y REFRACCIONES ================= */
  --border-glass-subtle: rgba(1, 157, 244, 0.12);
  --border-glass-card: rgba(255, 255, 255, 0.8);
  --border-glass-focus: rgba(1, 157, 244, 0.4);
  --border-glass-divider: rgba(11, 25, 44, 0.06);

  /* ================= TINTA Y TIPOGRAFÍA ================= */
  --text-primary: #0B192C;        /* Azul índigo ultra profundo corporativo */
  --text-secondary: #4A5B73;      /* Gris pizarra azulado para cuerpo y descripciones */
  --text-tertiary: #8A9BA8;       /* Gris técnico para metadatos y microcopia */
  --text-inverse: #FFFFFF;        /* Texto blanco sobre botones primarios */
  --text-brand: #019DF4;          /* Azul Movistar para acentos textuales */

  /* ================= MARCA Y ENERGÍA ================= */
  --brand-movistar-blue: #019DF4;  /* Azul Primario Vibrante */
  --brand-cyan-aura: #00D4FF;      /* Cian futurista de Aura e Inteligencia Artificial */
  --brand-magenta-telecom: #E6007E;/* Magenta para alertas, badges de oferta y urgencias */
  --brand-deep-navy: #003245;      /* Azul marino institucional */

  /* ================= ESTADOS Y SEMÁFOROS (NLP & PROCESOS) ================= */
  --status-success-bg: rgba(0, 196, 140, 0.12);
  --status-success-border: rgba(0, 196, 140, 0.3);
  --status-success-text: #00875A;  /* Verde para conciliado, ahorro y conformidad */

  --status-warning-bg: rgba(255, 171, 0, 0.12);
  --status-warning-border: rgba(255, 171, 0, 0.35);
  --status-warning-text: #B76E00;  /* Amarillo para prorrateos, alertas y revisión humana */

  --status-danger-bg: rgba(230, 0, 126, 0.1);
  --status-danger-border: rgba(230, 0, 126, 0.3);
  --status-danger-text: #C20063;   /* Magenta/Rojo para riesgo de Churn, Bill Shock y mora */

  --status-ai-pulse: #00D4FF;      /* Resplandor para actividad agéntica */

  /* ================= RESPLANDORES Y SOMBRAS TECH ================= */
  --shadow-tech-subtle: 0 8px 24px -6px rgba(1, 157, 244, 0.08), 0 2px 6px rgba(11, 25, 44, 0.03);
  --shadow-tech-card: 0 16px 36px -8px rgba(1, 157, 244, 0.12), 0 4px 12px rgba(11, 25, 44, 0.04);
  --shadow-tech-hover: 0 24px 48px -10px rgba(1, 157, 244, 0.22), 0 8px 16px rgba(1, 157, 244, 0.08);
  --glow-brand-button: 0 6px 20px rgba(1, 157, 244, 0.35);
  --glow-aura-ai: 0 0 30px rgba(0, 212, 255, 0.25);
}
```

---

## 🔤 3. Tipografía y Jerarquía Textual

Se selecciona una combinación técnica, moderna y de alta legibilidad: **Plus Jakarta Sans** (o *Inter* / *Outfit*) como tipografía principal, optimizada para dashboards de alta densidad y flujos de conversación ágiles.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ESCALA TIPOGRÁFICA "LIGHT TECH"                   │
├──────────────┬──────────────┬──────────────┬──────────────┬─────────────────┤
│ Display / H1 │ H2 Subtítulo │ H3 Card Title│ Body P       │ Badge / Tag     │
│ 28px - 36px  │ 20px - 24px  │ 16px - 18px  │ 14px - 15px  │ 11px - 12px     │
│ Bold (-0.02) │ SemiBold     │ SemiBold     │ Regular(1.6) │ CAPS (+0.10em)  │
└──────────────┴──────────────┴──────────────┴──────────────┴─────────────────┘
```

### 3.1. Reglas Tipográficas
- **Display / Títulos Principales (`h1`, `h2`):** `font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; letter-spacing: -0.025em; color: var(--text-primary);`. Da una presencia tecnológica y ejecutiva.
- **Títulos de Tarjetas (`h3`, `h4`):** `font-weight: 600; letter-spacing: -0.01em; color: var(--text-primary);`.
- **Cuerpo de Texto (`p`, `span`):** `font-size: 14px; line-height: 1.6; color: var(--text-secondary);`. La generosa altura de línea asegura respiración en explicaciones complejas como el prorrateo.
- **Badges de Datos y Microcopia de Control:** `font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.10em; color: var(--text-tertiary);`. Genera una estética instantánea de panel de telemetría y sala de control.

---

## 🧩 4. Sistema de Componentes UI Translúcidos

### 4.1. Tarjetas de Cristal (*Light Glass Cards*)
Las tarjetas no son bloques planos; simulan placas de cristal de cuarzo flotando sobre un campo de energía de datos.

```css
.mjt-card-glass {
  background: var(--surface-glass-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass-card);
  border-radius: 20px;
  box-shadow: var(--shadow-tech-card);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.mjt-card-glass:hover {
  background: var(--surface-glass-hover);
  border-color: rgba(1, 157, 244, 0.25);
  box-shadow: var(--shadow-tech-hover);
  transform: translateY(-2px);
}
```

### 4.2. Botones y Llamados a la Acción (CTAs)

```css
/* Botón Primario Futurista */
.btn-primary-tech {
  background: linear-gradient(135deg, #019DF4 0%, #0080D0 100%);
  color: var(--text-inverse);
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  box-shadow: var(--glow-brand-button);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-primary-tech:hover {
  box-shadow: 0 8px 25px rgba(1, 157, 244, 0.5);
  transform: translateY(-1px);
}

/* Botón Secundario Translúcido */
.btn-secondary-glass {
  background: rgba(1, 157, 244, 0.06);
  color: var(--brand-movistar-blue);
  border: 1px solid rgba(1, 157, 244, 0.2);
  font-weight: 600;
  font-size: 14px;
  padding: 10px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary-glass:hover {
  background: rgba(1, 157, 244, 0.12);
  border-color: var(--brand-movistar-blue);
}

/* Botón de Decisión Rápida HITL (Human-in-the-Loop) */
.btn-hitl-action {
  background: linear-gradient(135deg, #00C48C 0%, #00A375 100%);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px 14px rgba(0, 196, 140, 0.35);
  cursor: pointer;
}
```

---

## 🤖 5. Identidad Visual de Aura y UI Dinámica por Sentimiento

**Aura** es la mascota concierge de Movistar. No es un chatbot genérico, sino un orbe/avatar de tecnología translúcida con estados de ánimo visibles y dinámicos (*Sentiment-Driven UI*):

```
 🟢 [AURA: RESOLUTIVA]           🟡 [AURA: ATENCIÓN & EMPATÍA]         🎉 [AURA: CELEBRACIÓN]
 - Brillo: Cian Suave (#00D4FF)  - Brillo: Ámbar Suave (#FFB800)       - Animación: Confeti Digital
 - Expresión: Sonrisa serena     - Expresión: Manos abiertas / Atenta  - Mensaje: "¡Pago Conciliado
 - Mensaje: "Calculé tu ahorro"  - Mensaje: "Analicemos tu recibo"       en tiempo real!"
```

### 5.1. Orbe de IA en CSS Puro (Glow Pulsante)
```css
.aura-orb-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #FFFFFF 0%, #00D4FF 40%, #019DF4 85%);
  box-shadow: var(--glow-aura-ai);
  position: relative;
  animation: auraFloat 4s ease-in-out infinite;
}

@keyframes auraFloat {
  0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.4)); }
  50% { transform: translateY(-4px) scale(1.03); filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.7)); }
}
```

---

## 🧭 6. Componentes Específicos de la Maqueta (Las 3 Pantallas del Pitch)

Para que el jurado entienda la solución en 3 minutos, la maqueta implementa 3 componentes visuales de alto impacto:

### 6.1. Componente A: El "Rappi-Track" de las Telcos (Línea de Vida E2E)
Barra de progreso horizontal con nodos luminosos y códigos de estándar **TM Forum**.

```
 [ ✓ Fase 1: Venta Cerrada ] ────► [ ⚡ Fase 2: Auditoría P×Q ] ────► [ 💬 Fase 3: Explicación ]
        (TMF622: Orden #8921)            (SGA / Amdocs Conciliado)          (BrainyBill Listo)
```

- **CSS Token:** Línea conectora `height: 2px; background: linear-gradient(90deg, #019DF4, #00D4FF);`.
- **Nodo Activo:** Círculo blanco con borde cian de 3px y pulso animado `animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;`.

### 6.2. Componente B: Live Whisper & Form-Fill (Cockpit del Asesor - Carlos)
- **Chip Live Whisper:** Caja translúcida con borde magenta sutil que despliega sugerencias de 12 segundos ante objeciones en tiempo real.
- **Form-Fill Activo:** Campos de formulario con un sutil destello azul (`box-shadow: 0 0 0 2px rgba(1, 157, 244, 0.3)`) que se rellenan automáticamente a medida que el cliente habla por teléfono.

### 6.3. Componente C: Estación de Trabajo de Ana & Auditoría P x Q (Back-Office)
- **Tarjeta de Discrepancia:** Panel con badge de alerta ámbar que muestra la comparación:
  `Precio Pactado (BSS): S/ 139.90` vs. `Consumo en Red (OSS): S/ 159.90 (+S/ 20.00 HBO no contratado)`.
- **Botón 1-Clic [Frenar Cobro y Ajustar]:** Acción inmediata que previene el reclamo antes de emitir la factura.

### 6.4. Componente D: Desglose Neuro-Simbólico de Factura (BrainyBill)
Tarjeta comparativa en lenguaje humano:
```
┌────────────────────────────────────────────────────────────────────────┐
│ 🧾 TU RECIBO DE ESTE MES (EXPLICACIÓN TRANSPARENTE)                    │
├────────────────────────────────────────────────────────────────────────┤
│ Tarifa Plana Movistar Total:              S/ 139.90                   │
│ (+) Prorrateo Plan Anterior (3 días):     S/   5.00                   │
│ (-) Descuento de Bienvenida:             -S/  10.00                   │
├────────────────────────────────────────────────────────────────────────┤
│ TOTAL NETO A PAGAR ESTE MES:              S/ 134.90 (Ahorras S/ 44.90) │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🎬 7. Micro-Interacciones y Animaciones

- **Velocidad y Curvas:** Todas las transiciones de tarjetas, modales y botones utilizan la curva de suavizado suave de Apple / SaaS premium: `cubic-bezier(0.16, 1, 0.3, 1)` con duración de `250ms` a `400ms`.
- **Fondo con Malla de Datos (Dot Grid):** Malla de puntos súper finos en gris claro (`#E2E8F0` a `16px` de separación) que le da al fondo la textura de un plano arquitectónico digital de telecomunicaciones.
- **Efecto de Secuestro de Chat (Hijack):** Cuando el asesor humano toma el control del chat de Aura, la cabecera del chat realiza una transición fluida de Cian Aura a Azul Índigo Asesor con el aviso: *"Jorge se ha unido a la conversación"*.

---

## 📱 8. Adaptabilidad: Desktop Cockpit vs. Mobile CX

| Vista | Foco Principal | Elementos Visuales Destacados |
| :--- | :--- | :--- |
| **Desktop (Pantalla Dividida del Pitch)** | Demostración simultánea para el Jurado: **Consola del Asesor (Izquierda)** vs. **App del Cliente (Derecha)**. | Líneas conectoras de red, nodos en tiempo real, eventos cruzados instantáneos. |
| **Mobile (Mi Movistar / Aura Web)** | Experiencia del cliente Miguel / Juan Carlos. | *Bottom sheets* translúcidos, botones flotantes de pago con Yape/Plin, visualizador de prorrateo táctil. |

---

## ✍️ 9. Tono de Voz y Guía de Microcopia

- **De:** Mensajes fríos de telemarketing (*"Estimado cliente, pague su deuda o su línea será suspendida"*).
- **A:** Facilitador de soluciones y empatía (*"Hola Juan Carlos, cuidamos tu trabajo. Activemos el Modo Mantenimiento y divide tu saldo en 3 cuotas sin intereses"*).
- **De:** Notificaciones de sistema incomprensibles (*"Error en tasación de tráfico CDR/BSS"*).
- **A:** Explicaciones de impacto (*"Auditoría preventiva exitosa: eliminamos S/ 20.00 de tu recibo para proteger tu tarifa pactada"*).
