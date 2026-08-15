# guia_maestra_fase1_movistar.md

# Guía Maestra de la Fase 1: Propulsión Comercial y Atracción (Next Best Offer & Movistar Total)

Esta guía actúa como el **mapa operativo y de diseño del proceso** de la Fase 1 (Reto 2 de la Hackathon). Su propósito es servir de base conceptual para que el equipo, los evaluadores y los tomadores de decisiones entiendan cómo la Inteligencia Artificial unifica la preventa y la conversión de manera proactiva, eliminando la mala práctica de "ofrecer por ofrecer" (spam telefónico) y acelerando la adopción del producto estrella convergente: **Movistar Total (MT)**.

---

## 🎯 1. Ficha de Identidad del Desafío

- **Nombre del Reto:** Personalización Comercial Inteligente / Motor de Next Best Offer (NBO)

- **Caso de Uso Prioritario:** Blindaje y convergencia mediante **Movistar Total (MT)** (unificación de servicios fijos y móviles en un solo recibo con ahorros de hasta el 50%).

- **Misión Operativa:** Recomendar la oferta comercial ideal para cada cliente en el canal de mayor propensión, usando el discurso persuasivo óptimo, priorizando por probabilidad de aceptación y realizando un seguimiento de extremo a extremo (E2E) de la venta.

- **Metas de Negocio de Movistar:**

- Lograr que **más del 50% de las ventas del portafolio Hogar (residencial)** se realicen bajo la modalidad de Movistar Total.

- Lograr que **más del 10% de las ventas Móviles** se conviertan a planes Movistar Total.

- Reducir significativamente la tasa de deserción (*Churn Rate*) y aumentar el ingreso promedio por usuario (*ARPU*).

---

## 🧠 2. Arquitectura de Subprocesos de la Fase 1

Para estructurar un orquestador inteligente, la corporación debe operar bajo una arquitectura estructurada en capas de datos y toma de decisiones, rompiendo los tradicionales silos de información entre redes fijas (OSS) y móviles (BSS):

### Subproceso A: Ingesta y Unificación de Perfil de Cliente (*Customer Single Profile*)

- **Qué hace:** Extrae y consolida en tiempo real la telemetría de consumo de datos móviles, patrones de recargas extras, llamadas de soporte, clics dentro de la App Mi Movistar e historial de facturación de los sistemas core.

- **Herramientas involucradas:** Data Warehouse / Data Lakehouse de Movistar, conectado con sistemas de red residenciales (OSS) y comerciales (BSS).

### Subproceso B: Predicción de Churn y Segmentación Causal (Uplift Modeling)

- **Qué hace:** Clasifica a los clientes no solo por variables sociodemográficas (edad o distrito), sino por su comportamiento de uso y riesgo de fuga. Un modelo causal divide a la planta en cuatro cuadrantes:

- **Persuadir (Persuadables):** Clientes que solo comprarán/migrarán si un asesor o canal interactúa activamente con ellos (foco del orquestador).

- **Caso Seguro (Sure Things):** Clientes propensos a migrar de forma orgánica en la web (llamarlos genera sobrecostos innecesarios).

- **Causa Perdida (Lost Causes):** Clientes que no comprarán bajo ninguna circunstancia.

- **No Molestar (Sleeping Dogs):** Clientes insatisfechos o con quejas pendientes. Si se les contacta para vender, se recordarán del mal servicio y fugarán de la empresa.

### Subproceso C: Motor Decisional NBO (Next Best Offer)

- **Qué hace:** Compara los servicios contratados actualmente por el cliente frente a su comportamiento real de consumo. Identifica la "brecha" de valor (ej. si el cliente tiene fibra fija y plan móvil por separado, o si consume gigas extras frecuentemente) y selecciona el plan convergente de Movistar Total idóneo del catálogo dinámico de promociones.

- **Explicabilidad (SHAP):** El motor no solo arroja un plan; calcula los factores matemáticos exactos (las variables de consumo) que justifican la oferta.

### Subproceso D: Optimización de Canal y Mensaje (IA Generativa)

- **Qué hace:** Determina si el cliente prefiere ser contactado por un asesor telefónico, por un mensaje push interactivo en la App, o vía WhatsApp. Diseña un discurso comercial (*speech*) ultra-personalizado y amigable que el asesor o el bot puedan leer en un lapso óptimo de **12 a 30 segundos**.

### Subproceso E: Seguimiento y Cierre en el Funnel de Ventas (Trazabilidad E2E)

- **Qué hace:** Registra cada interacción comercial en las plataformas operativas (**DITO** para el registro de ventas y **Visor** para el control de postventa). El orquestador guarda los audios de call center y logs digitales de aceptación para asegurar la validez legal del contrato y evitar "ventas fantasmas" o reclamos posteriores.

---

## 🗺️ 3. El Journey E2E de la Fase 1: Tres Frentes en Sintonía

El siguiente cuadro cronológico desglosa el viaje de la preventa y contratación en la cancha, contrastando la experiencia del **Cliente**, la jornada del **Asesor Comercial**, y los procesos invisibles de la **Corporación / Orquestador**:

|   |   |   |   |

| --- | --- | --- | --- |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

---

## ⚠️ 4. Cuellos de Botella Reales "En la Cancha" y Oportunidades de IA

Para entender el valor del Mega-Orquestador, debemos visibilizar los problemas crónicos del proceso de venta tradicional de Movistar frente a la solución inteligente:

- **Silos de Información en los Sistemas Origen (El Dolor del Asesor):**

- *El problema:* Tradicionalmente, los datos de red fija se gestionan en Amdocs/SGA y los móviles en Salesforce/DITO. El asesor en call center debe consultar manualmente tres pestañas separadas y adivinar la oferta bajo estrés.

- *La solución de IA:* Una **Pantalla Única unificada por el Orquestador** que consume datos de ambos mundos y presenta la recomendación NBO de manera inmediata y masticada.

- **Campañas Masivas por Lotes (*****Batch Campaigns***** - El Dolor de la Corporación):**

- *El problema:* Se lanzan millones de SMS a toda la base. El cliente los percibe como spam, reduciendo la efectividad del canal (conversión de apenas 5% al 8%) y saturando la red con mensajes de rebote.

- *La solución de IA:* **Contacto Basado en Eventos**. La IA se activa solo cuando detecta un hito crítico de comportamiento (ej. el cliente consumió el 90% de sus datos 3 meses seguidos, o visitó la sección de tarifas en la App).

- **La Desconexión del discurso y Rebate (El Dolor del Cliente):**

- *El problema:* El cliente plantea una duda o una objeción de facturación y el asesor, presionado por el tiempo medio de operación (TMO), responde con argumentos imprecisos, generando desconfianza en la marca.

- *La solución de IA:* **Escucha Activa y Rebate en Caliente**. El asistente de voz transcribe en vivo y provee discursos de contención específicos para neutralizar la objeción del cliente en menos de 5 segundos.

---

## 📊 5. Indicadores Clave de Éxito (KPIs) de la Fase 1

La implementación del Orquestador de Propulsión Comercial se medirá a través de los siguientes indicadores administrativos:

- **Tasa de Conversión de Ofertas (Conversión %):** Incrementar del promedio actual (5% - 8%) a una meta objetivo de **+15% de aceptación** en llamadas y canales digitales.

- **Participación de Movistar Total (MT %):** Superar el umbral del **50% de las ventas en el segmento Hogar** y alcanzar el **10% en el segmento Móvil** mediante el direccionamiento inteligente del NBO.

- **Incremento del ARPU (Average Revenue Per User):** Lograr un crecimiento del ARPU individual mediante la migración orgánica a planes de mayor valor de forma balanceada y transparente.

- **Reducción del Churn Rate (%):** Disminuir la fuga de clientes en al menos un **1.5% anual** gracias al blindaje de la planta con el producto convergente Movistar Total, el cual tiene un ratio de retención históricamente superior.

- **Trazabilidad y Calidad de Venta (%):** Lograr el **100% de trazabilidad** del proceso, garantizando que cada venta cuente con su respectivo speech de recomendación sugerido, audio de aceptación y registro unificado en DITO/Visor.