# manual_maqueta_fase1.md

# Manual Maestro de la Propuesta: Ecosistema Unificado y Maqueta Funcional (Fase 1)

## Ecosistema "Movistar Journey Tracker" (MJT) — Módulo de Propulsión Comercial y Atracción

Este manual describe detalladamente la propuesta estratégica y tecnológica de la **Fase 1: Propulsión Comercial y Atracción (Reto 2 - Next Best Offer)**. La propuesta rompe el paradigma de soluciones aisladas y plantea un **Mega-Orquestador Agéntico** centralizado, diseñado desde la perspectiva de la experiencia de usuario (CX/EX) y la optimización de recursos corporativos.

---

## 1. El Concepto Core: "Movistar Journey Tracker" (El Rappi-Track de las Telecomunicaciones)

### ¿Qué se quiere hacer?

Movistar no necesita otro modelo predictivo aislado de *Churn* o recomendación de catálogo que termine archivado en un silo tecnológico. Lo que necesita es un **ecosistema interconectado** donde cada venta, proceso de facturación y reclamo del cliente se gestione como un único flujo de datos unificado y visible en tiempo real.

Inspirado en el sistema de seguimiento de pedidos de Rappi, el **Movistar Journey Tracker (MJT)** permite mapear el ciclo de vida del cliente. Cada proceso crítico genera un **Key de Seguimiento Único** (basado en la API abierta **TMF622 de Product Ordering**). Cualquier empleado de la compañía, según su rango de permisos (RBAC), puede consultar este Key y conocer el estado físico exacto en el que se encuentra la solicitud del cliente (ej. *"Validando cobertura de red"*, *"Pre-auditoría contable exitosa"*, *"Contrato emitido"* o *"Explicación del prorrateo enviada al cliente"*).

### ¿Por qué se hace?

- **Problema de Silos:** Hoy en día, el área de Ventas (Fase 1), el área de Facturación/Cobranzas (Fase 2) y el área de Call Center/Post-venta (Fase 3) operan como repúblicas independientes. Un asesor de ventas no sabe si el cliente que está llamando tiene un reclamo activo de facturación en el call center, lo que genera spam comercial molesto y destruye la experiencia del cliente.

- **Problema de Duplicidad:** Los asesores dedican más tiempo a registrar datos de manera manual en múltiples pantallas heredadas (CRM, Billing, OSS de red) que a escuchar y empatizar con el cliente.

- **La Solución:** Centralizar la lógica y la trazabilidad del proceso permite que una sola persona o un canal automatizado maneje el ciclo de vida del cliente de punta a punta con visibilidad total.

---

## 2. Frente Cliente: "Concierge Digital" (Tu amigo de Movistar)

### ¿Qué se quiere hacer?

Eliminar las campañas masivas e intrusivas por SMS o llamadas frías. En su lugar, cada cliente de **Movistar Total** tiene asignado un asistente de IA personalizado 1-a-1. Este asistente actúa como un "amigo dentro de Movistar" que acompaña al cliente en sus canales preferidos (WhatsApp, App Mi Movistar, Portal Web).

### ¿Cómo se hace en la cancha? (Caso Miguel Mendoza)

- **Gatillo Proactivo:** El sistema detecta mediante telemetría de red que Miguel agota sus 20 GB móviles antes del día 18 del mes debido a sus viajes de trabajo a provincias, gastando S/ 60.00 adicionales en paquetes de datos individuales (gasto total: S/ 179.80).

- **Contacto Empático:** En lugar de una llamada invasiva, el **Concierge Digital** le envía un mensaje interactivo de WhatsApp:

- **Transparencia de Facturación (Módulo de Prorrateo Integrado):** Miguel responde con una duda común: *"Me interesa, pero ¿mi próximo recibo vendrá con cobros raros o prorrateos complejos?"*. El Concierge no responde de manera genérica; utiliza el motor de la Fase 3 (**BrainyBill**) para calcular en vivo y mostrarle un gráfico simple:

- **Cierre Digital Seguro:** Miguel selecciona "Aceptar combo". El asistente genera automáticamente el contrato digital, lo envía por chat para firma electrónica, configura el **débito automático** para evitar suspensiones futuras y actualiza el estado del pedido en el **Movistar Journey Tracker** a: *"Orden Comercial Emitida - Pendiente Activación Técnica"*.

---

## 3. Frente Asesor: "Movistar Copilot" (Inspirado en Cluely / Capacity)

### ¿Qué se quiere hacer?

Cuando el cliente prefiere ser atendido por teléfono o el orquestador detecta que la venta es compleja y requiere negociación humana, el sistema transfiere el caso a un asesor de telemarketing (Carlos), equipándolo con una **consola de atención unificada inteligente** que reduce drásticamente el TMO (Tiempo Medio de Operación).

### ¿Cómo se hace en la cancha?

A. Ficha Inteligente Única del Cliente

En su pantalla, Carlos ve una única interfaz consolidada (estándar de interacción **TMF683**). No tiene que saltar entre el CRM de Salesforce, el facturador Amdocs y el sistema de red OSS. La ficha le muestra:

- **Identidad y Dolor:** *"Miguel Mendoza. Diseñadora. Gasta S/ 179.80 en total. Agota gigas móviles el día 18 en Arequipa"*.

- **Oferta Ganadora (NBO):** *"Movistar Total S/ 139.90 (Ahorro del cliente: S/ 40.00)"*.

- **Historial Omnicanal:** Línea de tiempo unificada que muestra los mensajes de WhatsApp que Miguel intercambió con el Concierge, sus clics en la App Mi Movistar y sus correos electrónicos anteriores.

B. Copiloto de Escucha Activa en Tiempo Real

El copiloto procesa el audio de la llamada en tiempo real (mediante streaming de transcripción de baja latencia).

- **Manejo Inteligente de Objeciones (Live Whisper):** Si Miguel le dice a Carlos: *"Me parece bien, pero he escuchado que Claro da más velocidad en Arequipa"*, el copiloto detecta la objeción en milisegundos y despliega una sugerencia en la pantalla de Carlos:

- **Automatización de Formularios (Form-Fill Activo):** A medida que Miguel acepta las condiciones del contrato en la llamada (*"Sí, estoy de acuerdo con la velocidad de 400 Megas fijos y mi número móvil es el 999..."*), el copiloto de IA extrae estas variables del audio de voz y autocompleta los campos técnicos de la orden comercial. Carlos ya no digita datos bajo presión; solo valida la información y hace clic en "Confirmar Venta".

---

## 4. Detrás de Escena: La Dinámica del Orquestador (Arquitectura Técnica)

La maqueta funcional está respaldada por una arquitectura de datos robusta pero transparente para el usuario final:

### El Cerebro Analítico

- **Modelado de Comportamiento Causal (Uplift CATE - Conditional Average Treatment Effect):** En lugar de algoritmos tradicionales que solo predicen la probabilidad de compra a ciegas, el orquestador utiliza modelos causales. Estos modelos identifican a los clientes **"Persuadibles"** (aquellos que solo migrarán si se realiza la acción de contactarlos). Al excluir a los "No Molestar" (Sleeping Dogs) y "Casos Seguros" (Sure Things), Movistar reduce el costo de comisiones y el spam telefónico, logrando un uso eficiente de sus recursos de telemarketing.

- **Motor Decisional NBO/NBA (Pega Customer Decision Hub):** Evalúa restricciones y reglas de elegibilidad comercial cruzando variables de cobertura de fibra en zonas críticas (ej. Miraflores, San Isidro, Trujillo) para asegurar que la oferta de Movistar Total sea factible técnicamente.

- **Explicabilidad SHAP (Shapley Additive exPlanations):** El orquestador no arroja recomendaciones en caja negra. Calcula el peso de cada variable de consumo y lo traduce en lenguaje humano para alimentar el "Porqué de la oferta" tanto para el Concierge digital como para la pantalla de Carlos.

### La Infraestructura de Integración (Estándares TM Forum)

Para evitar silos de datos y garantizar que la Fase 1 se conecte de forma transparente con la Fase 2 (Facturación) y la Fase 3 (Atención), el orquestador utiliza la **Arquitectura Digital Abierta (ODA)** de TM Forum mediante tres APIs clave:

- **TMF622 (Product Ordering API):** Crea la orden de venta convergente con un ID de tracking único.

- **TMF683 (Interaction Management API):** Unifica los canales de WhatsApp, App y llamadas en un historial único de interacciones.

- **TMF637 (Product Inventory API):** Actualiza el estado técnico de los servicios activos del cliente tras cerrarse la venta.

---

## 5. Gobernanza de Datos de Interacción y "Jarvis de Movistar"

### Almacenamiento Seguro de Metadatos (Explainability Extract)

Toda interacción realizada en la Fase 1 (ofertas sugeridas, objeciones detectadas, speechs leídos, canales elegidos y respuestas del cliente) es procesada por el orquestador para guardar únicamente **metadatos analíticos anonimizados**.

- Se eliminan automáticamente los Datos Personales de Identificación (PII) como nombres completos, números de teléfono, direcciones y datos bancarios.

- Se genera un paquete consolidado de estadísticas operativas denominado **Explainability Extract** (ej. *"Canal: WhatsApp | Categoría de Oferta: MT_139 | Objeción: Prorrateo | Resultado: Venta Cerrada | Satisfacción: 95%"*).

### El Rol de "Jarvis"

Este diseño de gobernanza de datos blinda la privacidad y la seguridad de los clientes de Movistar. Al mismo tiempo, deja el camino perfectamente libre para que en el futuro, el **"Jarvis de Movistar"** (un gran modelo conversacional ejecutivo para Directivos) pueda realizar análisis y auditorías en tiempo real sobre la salud del negocio de manera segura:

- *Pregunta del Directivo:* *"Jarvis, ¿cuál fue el principal motivo de objeción de los clientes frente a la oferta de Movistar Total en Lima durante esta semana?"*

- *Respuesta de Jarvis:* *"El 64% de las objeciones detectadas en el canal telefónico estuvieron relacionadas con el temor al monto del recibo de transición (prorrateo). Sin embargo, tras desplegarse el speech dinámico de explicación del primer recibo en el Copiloto de los asesores, la tasa de reconversión de estas objeciones aumentó de un 12% a un 45%"*.

---

## 6. Cuadros de Mapeo del Proceso: "La Cancha" vs. "Bajo el Capó"

### El Rappi-Track de la Factura (Control de Permisos de Empleados)

|   |   |   |

| --- | --- | --- |

|   |   |   |

|   |   |   |

|   |   |   |

|   |   |   |

---

## 7. KPIs de Negocio para Convencer al Jurado (Impacto de la Fase 1)

- **Tasa de Conversión Comercial (Convergencia MT):** Incremento proyectado de la tasa de conversión de ofertas del **7% tradicional al 22%** gracias al modelado causal (Uplift CATE) y discursos hiper-personalizados.

- **Reducción del TMO (Tiempo Medio de Operación):** Disminución del tiempo de registro y carga de órdenes de **15 minutos a menos de 2 minutos** por la automatización de voz (Form-Fill) y la unificación de pantallas (Salesforce + OSS).

- **Tasa de Adopción de Autogestión (Concierge Digital):** Lograr que el **40% de las migraciones de cartera** se realicen de manera autónoma por los asistentes digitales, disminuyendo drásticamente el costo de comisiones de telemarketing (Cost-to-Serve).

- **Reducción del Churn Preventivo (Fidelización):** Retener de forma proactiva al **15% de clientes persuadibles** antes de que busquen portabilidad con la competencia.