# guia_maestra_fase3_movistar.md

# 🗺️ Guía Maestra de la Fase 3: Post-Venta, Explicación y Contención (Atención Inteligente)

## Ecosistema de Experiencia del Cliente (Reto 1 - Mitigación del Bill Shock)

---

### 📋 1. Ficha de Identidad del Desafío (Reto 1)

- **Nombre Operativo:** Atención inteligente y explicación de recibos (Asistente de IA para la explicación de facturación en App, Bot y canales digitales) [2].

- **El Problema de "La Cancha":** La facturación B2C de Movistar Perú genera un volumen masivo de **más de 5 millones de recibos mensuales** [3, 30]. Cerca del **40% de estos recibos (aproximadamente 2 millones de transacciones) presenta una variación** en el monto de un mes a otro [3, 30]. Los clientes experimentan el fenómeno psicológico del **"Bill Shock"** (ansiedad y desconcierto ante cargos inesperados) [39]. Al no entender conceptos altamente técnicos de facturación, asumen que hay cobros indebidos de la empresa [40].

- **Consecuencias Operativas:** Esto desencadena un flujo incontrolable de **más de 200,000 llamadas al mes hacia el Call Center (línea 104)**, disputas comerciales redundantes, incremento de la tasa de portabilidad hacia la competencia (fuga de clientes) y quejas formales supervisadas por **OSIPTEL** [15, 30, 31, 37].

- **La Limitación del Sistema Actual:** La aplicación móvil "App Mi Movistar" actual tiene un alto tráfico (1.5 millones de interacciones al mes en la sección de recibos), pero opera únicamente como un **repositorio estático de PDFs firmados SUNAT** [3, 30, 60]. Muestra la deuda global, pero no tiene la capacidad analítica ni de procesamiento para explicar proactivamente *por qué* variaron las líneas del recibo [3, 40].

- **El Objetivo de la Propuesta:** Diseñar un asistente virtual con IA y procesamiento de lenguaje natural (NLP) integrado a la App y WhatsApp, sustentado en una arquitectura **CSR-RAG (Retrieval-Augmented Generation con soporte lúdico y numérico)** [2, 5]. Su propósito es traducir los datos rígidos de facturación transaccional en explicaciones didácticas, empáticas y con **0% de alucinaciones numéricas**, conteniendo al cliente en canales digitales antes de que sature el call center [2, 5, 6].

---

### ⚙️ 2. Arquitectura de los 5 Subprocesos Core (Fase 3)

Para que el asistente digital funcione de manera impecable y con alta confiabilidad, se estructura en cinco subprocesos integrados con el back-office de Movistar [45]:

🔄 Subproceso 1: Monitoreo Proactivo y Detección de Desviaciones (BrainyBill Link)

- **Qué hace:** En cuanto el facturador central procesa el corte mensual, el Orquestador conecta con el módulo de datos **BrainyBill** [3, 16]. Este sistema expone los datos de la factura corriente y el historial de hasta cinco recibos previos del cliente [3].

- **Cómo funciona:** El orquestador ejecuta una comparación inmediata de los montos totales: V_t = B_t - B_{t-1} [41] Si el monto actual de la factura (B_t) presenta una variación (V_t) que supera un umbral de riesgo comercial parametrizado (ej. incremento de más de un 20% con respecto al mes previo), el Orquestador **precarga de forma preventiva la traza analítica**. No espera a que el cliente se queje; procesa el desglose del incremento de antemano [16].

🏷️ Subproceso 2: Clasificación Semántica en "Lenguaje Cliente"

- **Qué hace:** Traduce los códigos duros de facturación del sistema SGA hacia categorías entendibles por el usuario promedio [43].

- **Cómo funciona:** El sistema toma las desviaciones contables y las agrupa dentro del catálogo estándar de casuísticas de atención aprobadas por calidad:

- **Prorrateos:** Cargos proporcionales por días transcurridos desde un alta o cambio de plan a mitad de mes [22].

- **Cargos Administrativos:** Cobros por corte y reconexión de servicios tras suspensión morosa [22, 43].

- **Variación Comercial:** Fin de una promoción de descuento temporal o ajuste de tarifa plana [43].

- **Suscripciones y Equipos:** Cobro de cuotas mensuales de celulares financiados o compra de paquetes adicionales de TV/gigas [21, 22].

🧮 Subproceso 3: Motor Neuro-Simbólico de Cálculo Exacto (CSR-RAG)

- **Qué hace:** Garantiza que el asistente de IA proporcione respuestas con **precisión matemática perfecta** y no cometa errores de alucinación aritmética (lo cual destruiría la confianza del cliente y podría acarrear multas regulatorias de OSIPTEL) [6, 42, 60].

- **Cómo funciona:** El procesamiento se divide en dos capas:

- *Capa Simbólica (Código Determinista):* Las operaciones de suma de cargos recurrentes (S), cargos por uso (U), impuestos (T), recargos por reconexión o mora (A) y descuentos aplicados (D) se ejecutan a nivel de bases de datos mediante fórmulas matemáticas rígidas [41, 42]: B_t = \sum U_i + \sum S_j + \sum T_l + \sum A_m - \sum D_k [42] Si se identifica un alta de equipo o cambio de plan en el día d dentro de un ciclo de N días, se aplica de manera estricta la fórmula de prorrateo proporcional [42]: P = R \times \left( \frac{N - d + 1}{N} \right) [42]

- *Capa Neuronal (Modelo de Lenguaje):* El LLM **nunca calcula los números**. Solo recibe los desgloses resultantes de la capa simbólica como un bloque de contexto estructurado e inalterable, limitándose a estructurar una prosa fluida, conversacional, amigable y explicativa basada en dichos datos duros [42].

📱 Subproceso 4: Interfaz de Divulgación Progresiva (Progressive Disclosure)

- **Qué hace:** Organiza la explicación en la pantalla del celular (App Mi Movistar o WhatsApp) bajo principios de Onboarding de Fintech, evitando atiborrar al cliente de texto denso de un solo golpe [44].

- **Cómo funciona:** Se programa una experiencia interactiva estructurada en 3 pasos rápidos [44]:

- *Paso 1: Resumen Macro (Intro y Monto):* "Hola Valerio, notamos que tu recibo subió S/ 15.00 con respecto al mes anterior. Esto se debe principalmente a tu reciente cambio al plan Movistar Total" [44].

- *Paso 2: Desglose Intermedio (Aritmética Sencilla):* Mostrar un comparativo gráfico simple (Plan anterior: S/ 119.80 vs. Plan nuevo proporcional: S/ 139.90, con la porción exacta de días de prorrateo explicados de forma amigable) [12, 44].

- *Paso 3: Llamada a la Acción (CTA de Solución):* Inyección de botones directos dentro de la interfaz de chat (ej: "Pagar Recibo con Descuento", "Verificar Cobertura de Fibra", o "Fraccionar Mi Pago" conectando con SON-IA) [44].

🔌 Subproceso 5: Derivación Inteligente (Hand-off con Contexto) y Retroalimentación

- **Qué hace:** Garantiza un puente de comunicación seguro cuando la interacción escala a canales humanos, y registra la satisfacción para gatillar cross-selling de forma segura [2, 3].

- **Cómo funciona:**

- *Derivación con Contexto:* Si el cliente expresa disconformidad persistente o el modelo detecta señales de enojo en el texto, el sistema transfiere la llamada/chat a un asesor del 104 en tiempo real [2]. La IA envía todo el log de la conversación de facturación al CRM, de modo que el asesor humano recibe la interacción sabiendo exactamente el motivo de consulta del cliente sin obligarlo a repetir su problema [2, 4].

- *Bucle de Conformidad (Tasa de Silencio):* Si el cliente entiende el desglose del prorrateo y cierra la sesión digital de manera satisfactoria sin requerir derivación (medido bajo la métrica de silencio de atención de la IA), el sistema levanta una marca positiva en su perfil [6]. Esto habilita al motor de ventas (Reto 2) a ofrecer promociones comerciales contextuales de forma segura en su próximo ingreso [3].

---

### 🗺️ 3. El Journey E2E en la Cancha: El Viaje de Valerio Mendoza

Para entender el impacto tangible, vivamos el viaje del usuario en un escenario crítico real: **Cambio de plan a mitad de mes que genera prorrateo en su primera factura consolidada de Movistar Total.**

|   |   |   |   |

| --- | --- | --- | --- |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

---

### ⚠️ 4. Cuellos de Botella Críticos y Oportunidades de Mejora

- **Complejidad del Lenguaje Regulatorio en PDFs:**

- *El problema:* Conceptos requeridos por ley (como cobros prorrateados de renta adelantada o cargos administrativos de corte y reconexión) están redactados en términos contables crudos en el PDF [40].

- *La Solución con IA:* El Orquestador traduce proactivamente estos cobros complejos en lenguaje plano para el cliente antes de que los lea en el comprobante SUNAT [16, 43].

- **Saturación del Call Center 104:**

- *El problema:* Los asesores humanos gastan más del 40% de su tiempo explicando sumas y restas de prorrateos en llamadas repetitivas de larga duración que dañan el NPS de la compañía [31, 37].

- *La Solución con IA:* La autogestión conversacional filtra de antemano más del 15% de estos contactos recurrentes mediante una explicación interactiva y transparente en canales digitales [4].

- **Tiempos de Atención Extendidos (TMO Elevado):**

- *El problema:* Cuando un cliente llama, el asesor Jorge pasa hasta 2 minutos buscando datos en Amdocs (CRM) y el sistema de facturación para tratar de calcular un prorrateo de forma manual en un Excel estático mientras el cliente espera molesto en línea [37, 38].

- *La Solución con IA:* El "Visor Cognitivo" del Orquestador calcula el desglose en segundo plano en menos de 3 segundos y le redacta a Jorge un guion de respuesta rápida de 45 segundos, desplomando el TMO del call center [38].

---

### 📊 5. Indicadores Clave de Negocio (KPIs de Éxito de la Fase 3)

Para defender operativamente tu proyecto ante el comité ejecutivo de Movistar Perú, el éxito de la Fase 3 se medirá bajo las siguientes métricas de negocio consolidables [4]:

- **Tasa de Desvío Digital (Deflection Rate):** Reducción de llamadas atendidas en call center por explicaciones de recibo (Meta del Reto: **~15% de desvío general**) [4].

- **Tasa de Alucinación Numérica:** Establecida en **0.00% estricto** gracias a las guardas matemáticas deterministas del motor neuro-simbólico CSR-RAG [4, 45].

- **Reducción de Reclamos por Facturación:** Disminución en la tasa de quejas asociadas a conceptos de recibo ante OSIPTEL (Meta del Reto: **~5% de reducción de quejas**) [4].

- **NPS Transaccional de Facturación (FARECO):** Mejora de la experiencia de transparencia percibida del cliente (Meta: **incremento de ~10% en el NPS de facturación**) [4].

- **Tiempo Medio de Operación (TMO):** Reducción en el tiempo de conversación del asesor humano de 180 segundos a **menos de 90 segundos** gracias a los guiones precargados con IA en su consola de atención [37, 38].