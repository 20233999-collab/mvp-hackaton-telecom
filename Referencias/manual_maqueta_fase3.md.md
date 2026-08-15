# manual_maqueta_fase3.md

# Manual Maestro de la Propuesta: Ecosistema Unificado y Maqueta Funcional (Fase 3)

## Ecosistema "Movistar Journey Tracker" (MJT) — Módulo de Post-Venta, Explicación y Contención

Este manual describe detalladamente la propuesta estratégica y tecnológica de la **Fase 3: Post-Venta, Explicación y Contención (Reto 1 - Atención Inteligente y Explicación de Recibos)**. Esta fase cierra el ciclo de vida del cliente unificado por Inteligencia Artificial, transformando la experiencia fría y reactiva de la atención tradicional en un canal empático, visualmente interactivo, personalizado y enfocado en la contención del descontento por variaciones en la factura (*Bill Shock*).

---

## 1. El Concepto UI/UX: Aura, la "Mascota Concierge" de Movistar

### ¿Qué se quiere hacer?

Para romper la barrera de hablar con una máquina fría, el asistente conversacional del **Concierge Digital** se humaniza mediante una mascota o avatar interactivo con rostro, llamada **Aura**.

Aura no es un chatbot estático con respuestas preprogramadas; es un personaje dinámico y personalizado que acompaña al cliente en múltiples canales (WhatsApp, App Mi Movistar, correo electrónico y el portal web) y que adapta su expresión visual, tono y estado emocional según el perfil y la situación del usuario.

### ¿Cómo se diseña la personalización en la Maqueta?

- **Adaptación de Identidad Visual:** Aura cambia su apariencia para adaptarse a la tipología del cliente. Para un cliente corporativo o profesional, Aura viste un estilo business-casual moderno. Para un cliente joven o residencial (como Valerio Mendoza), Aura se presenta con un diseño más fresco, tecnológico y amigable.

- **Interfaz Emocional Dinámica (Sentiment-Driven UI):**

- *Si el recibo tiene un incremento >20%:* Cuando el cliente abre la sección de facturación, Aura aparece con una expresión de **atención y empatía** (un rostro amable y manos abiertas que denotan "estoy aquí para ayudarte a entender esto"). El microcopiado inicial dice: *"Hola Valerio, notamos un cambio en tu monto de este mes. No te preocupes, lo analizamos juntos para que todo quede súper claro"*.

- *Si la explicación es aceptada:* Aura sonríe con alivio y felicidad, mostrando un botón directo para pagar con tarjeta o autorizar el débito automático.

- *Al confirmarse el pago (Fase 2):* Aura celebra visualmente con confeti digital en pantalla: *"¡Listo! Tu pago de S/ 139.90 ha sido conciliado en tiempo real. ¡Gracias por ser parte de Movistar Total!"*.

---

## 2. El "Rappi-Track" de la Atención: Visor de Progreso del Cliente

Para mantener al cliente con una sensación de control absoluto y total transparencia sobre sus solicitudes o dudas de facturación, la aplicación web y móvil integra el **Visor de Progreso de Atención**.

### ¿Cómo funciona en la pantalla del usuario?

Inspirado en el tracking de Rappi, el cliente puede visualizar en qué etapa exacta de análisis se encuentra su caso en vivo. Si el cliente tiene una duda sobre su recibo, el visor muestra:

- **Paso 1: Analizando Recibo:** El sistema procesa los metadatos transaccionales provenientes de la base de datos de facturación de la Fase 2 (SON-IA).

- **Paso 2: Desglosando Prorrateo:** El motor matemático descompone las tarifas prorrateadas de la Fase 1 comercial.

- **Paso 3: Explicación Lista:** Aura presenta la gráfica simplificada en pantalla.

- **Paso 4: Pago Pendiente:** Se habilita la pasarela de recaudo para liquidar la deuda en tiempo real.

Si el caso se vuelve complejo y requiere análisis manual del back-office, el tracking se actualiza de forma transparente para el cliente: `[🛠️ Derivado a Especialista Humano] ➡️ [Asesor Asignado: Jorge]`. Esto elimina la ansiedad del cliente de no saber qué pasa con su reclamo, reduciendo drásticamente la necesidad de llamar al 104 para consultar "cómo va su caso".

---

## 3. El Frente del Asesor: Cockpit de "Human-in-the-Loop por Demanda"

En esta propuesta, el bot no es una barrera para cansar al cliente, sino un filtro inteligente. El ser humano (el asesor del call center 104, **Jorge**) tiene el control total para intervenir **cuando él lo considere oportuno o cuando el sistema lo requiera de forma automatizada**.

### ¿Cómo se hace en la cancha del empleado?

A. El Cockpit de Atención Unificado

Jorge trabaja con un panel de control avanzado que le muestra todas las conversaciones activas que Aura está sosteniendo en vivo con los clientes en su zona de atención. Cada conversación está clasificada por un **semáforo de frustración y complejidad** basado en NLP:

- 🟢 **Verde (Bajo Riesgo):** Aura está respondiendo dudas rutinarias con éxito. El cliente muestra conformidad.

- 🟡 **Amarillo (Riesgo Moderado):** El cliente ha preguntado dos veces sobre el mismo cobro o muestra leves signos de duda en su escritura.

- 🔴 **Rojo (Alto Riesgo / Intervención Requerida):** El análisis de sentimiento detecta palabras de alta molestia (*"estafa"*, *"cobro indebido"*, *"OSIPTEL"*, *"portabilidad"*).

B. Intervención Humana por Demanda (Hijack Conversacional)

- **El botón "Tomar el Control":** En cualquier momento, si Jorge ve un chat en amarillo o rojo, puede hacer clic en un botón para **"secuestrar" (hijack) la conversación de forma transparente**. Aura se despide amigablemente en el chat: *"Valerio, para darte un trato aún más especializado, te conecto en este segundo con mi compañero Jorge, quien ya tiene todo el detalle de tu caso en su pantalla. ¡Un gusto ayudarte!"*.

- **Resumen Automático del Copiloto:** Al asumir el control, Jorge no tiene que leer todo el historial de chat anterior. El copiloto le presenta un resumen ejecutivo en 3 líneas:

📝 **Resumen del Copiloto:** *El cliente está confundido por un cargo de prorrateo de S/ 15.00 tras migrar a Movistar Total el día 13. Aura explicó la proporción de días pero el cliente exige un descuento adicional por las molestias del corte de señal previo (Fase 2).*

- **Llamada Saliente con Un Clic (Click-to-Call):** Si Jorge evalúa que el chat se está volviendo muy complejo, presiona el botón "Llamar por Voz". El sistema realiza una llamada saliente inmediata al celular de Valerio. Jorge abre la llamada diciendo: *"Hola Valerio, te saluda Jorge de Movistar. Veo que estás chateando con Aura por el cobro del prorrateo de tu nuevo plan Movistar Total. No te preocupes, te llamo personalmente para resolver esto en este segundo y aplicarte una nota de crédito manual por la molestia del corte anterior..."*. El cliente experimenta una atención proactiva e integrada de otro planeta.

---

## 4. Conexión de Datos Ininterrumpida: El Ciclo Completo

Para demostrarle al jurado que tu solución es un engranaje perfecto, el manual mapea la interacción de datos entre las tres fases en tiempo real:

- **Paso de Fase 1 a Fase 2:** El Concierge Digital cierra la venta de **Movistar Total** a Valerio Mendoza en Fase 1, generando un ID de orden técnico.

- **Procesamiento en Fase 2:** El motor de auditoría de SON-IA calcula la porción de prorrateo exacta (S/ 15.00 por los días de transición) y la concilia contablemente tras confirmarse el pago por el banco. Al emitirse la pre-factura, el sistema contable exporta un **JSON de Metadatos de Facturación (Explainability Extract)** con el desglose exacto de los cobros en lenguaje lógico.

- **Inyección en Fase 3:** Aura intercepta este JSON de metadatos antes de que Valerio reciba su recibo físico. Cuando Valerio abre su App, Aura utiliza estos datos estructurados para construir una explicación matemática 100% exacta sin alucinaciones (Arquitectura **Neuro-Simbólica CSR-RAG**).

- **Cierre y Retroalimentación (Fase 3 a Fase 1):** Una vez que Valerio marca su conformidad en el chat, el Orquestador registra este estado de alta satisfacción en el CRM de ventas. El sistema otorga la **"Luz Verde de Cross-Selling Restrictivo"**, permitiendo que el motor de la Fase 1 considere nuevamente a Valerio apta para recibir ofertas comerciales exclusivas (como la renovación de un equipo móvil financiado) solo cuando su experiencia previa esté completamente resuelta y sin disputas activas.

---

## 5. Gobernanza de Datos y Jarvis en la Fase 3

- **Explainability Extract Conversacional:** Todo el historial de chats de Aura, las transcripciones de las llamadas asistidas por Jorge, los niveles de frustración detectados y las resoluciones de disputas de facturación se anonimizan para eliminar la información confidencial de identificación personal (PII).

- **Almacenamiento de Metadatos:** Se genera una base de datos de metadatos estructurados sobre la experiencia del cliente (ej. *"Tema: Prorrateo | Nivel de Frustración Inicial: Alto | Resolución: Explicación Visual de Aura | Canal: Web | Tasa de Conformidad: Sí | Reducción de Reclamo: Exitosa"*).

- **Auditoría con "Jarvis de Movistar":** Estos datos limpios y seguros quedan listos para que los directivos utilicen al asistente de inteligencia corporativa **Jarvis** para auditar y optimizar la atención de forma conversacional:

- *Pregunta del Directivo:* *"Jarvis, ¿cuál ha sido el impacto del desvío de llamadas al 104 gracias a las explicaciones proactivas de Aura sobre el prorrateo este mes?"*

- *Respuesta de Jarvis:* *"Este mes, Aura interceptó proactivamente a 120,000 clientes residenciales cuyos recibos presentaban prorrateos superiores al 15% debido a migraciones de Movistar Total. El 82% de estos usuarios resolvió su duda en la web o App mediante la explicación visual interactiva, desviando exitosamente 98,400 posibles llamadas de reclamo hacia el call center 104, lo que representa un ahorro operativo estimado de USD 246,000 en costo de atención comercial (Cost-to-Serve)."*

---

## 6. KPIs de Impacto de la Fase 3 (Para Convencer al Jurado)

Para asegurar que tu propuesta arrase con la rúbrica y los criterios de evaluación del jurado, estructuramos las métricas clave de éxito para esta fase:

- **Tasa de Desvío del Call Center (Call Deflection Rate):** Desviar el **40% de las consultas de facturación** hacia los canales digitales de autogestión de Aura, liberando de llamadas repetitivas al call center 104.

- **NPS Transaccional (Net Promoter Score) de Facturación:** Incrementar el NPS de la experiencia de recibo en **+25 puntos** gracias a la transparencia proactiva y la empatía de Aura.

- **Reducción del TMO (Tiempo Medio de Operación) en Reclamos:** Disminución del tiempo promedio de llamada en el 104 de **180 segundos a solo 45 segundos** para los casos asumidos por Jorge, gracias al resumen contextual de 3 líneas provisto por el copiloto de IA.

- **Tasa de Satisfacción de Resolución en Primer Contacto (FCR):** Aumentar la resolución de dudas de facturación en el primer contacto digital al **85%**, evitando que el cliente inicie disputas formales ante OSIPTEL o migre a la competencia (*churn*).