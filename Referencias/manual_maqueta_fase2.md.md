# manual_maqueta_fase2.md

# Manual Maestro de la Propuesta: Ecosistema Unificado y Maqueta Funcional (Fase 2)

## Ecosistema "Movistar Journey Tracker" (MJT) — Módulo de Eficiencia Operativa, Facturación y Recaudación

Este manual describe en profundidad la propuesta estratégica y tecnológica de la **Fase 2: Eficiencia Operativa, Recaudación y Facturación (Reto 3 - Ecosistema Agéntico SON-IA)**. Su objetivo es explicar detalladamente cómo funciona la maquinaria de back-office financiero y de aprovisionamiento de red de **Movistar**, actuando como el "corazón transaccional" de nuestro orquestador unificado.

Este documento sirve como un mapa detallado del **¿Qué?**, **¿Cómo?** y **¿Por qué?** de la Fase 2, demostrando cómo se conecta orgánicamente con la Fase 1 (Ventas) y la Fase 3 (Atención al Cliente), y cómo sus componentes satisfacen estrictamente la rúbrica y necesidades de la operación real.

---

## 1. Conexión de Procesos: El Flujo Continuo del "Rappi-Track"

En las soluciones tradicionales de telecomunicaciones, la venta (BSS) y la activación/cobro (OSS/Finanzas) son mundos aislados. En nuestra propuesta, el cliente no recorre silos; recorre una línea de vida unificada.

### El Viaje Transaccional de la Factura:

- **Entrada (Trigger desde Fase 1):** En cuanto el cliente Valeria Mendoza acepta la oferta dinámica de *Movistar Total* en la Fase 1, el sistema comercial no se limita a guardar la orden. Registra un **Key de Seguimiento Único (ID de Orden TMF622)**. El estado en el **Movistar Journey Tracker (MJT)** se actualiza instantáneamente: `[Fase 1: Completada] ➡️ [Fase 2: Pendiente de Auditoría Tarifaria]`.

- **Procesamiento (Fase 2):** El sistema contable calcula el prorrateo exacto del ciclo, el agente de IA realiza la auditoría de tarifas frente a la provisión técnica, concilia los pagos con el banco en tiempo real y, de ser necesario por mora, activa el motor de cobros preventivos.

- **Salida (Puerta Abierta hacia Fase 3):** Al cerrarse la transacción y emitirse la factura de forma correcta, la Fase 2 genera un **Extracto de Explicabilidad de Facturación (JSON de Metadatos)**. Este paquete de datos estructurados viaja directamente al repositorio del cliente. Cuando Valeria consulte su recibo a fin de mes y experimente desconcierto (*Bill Shock*), el asistente virtual de la Fase 3 (**BrainyBill**) utilizará este JSON para explicarle de forma visual, empática y matemáticamente exacta cada centavo del prorrateo, impidiendo que llame molesta al call center 104 o inicie un reclamo ante OSIPTEL.

---

## 2. Frente Empleado: La Estación de Trabajo Virtual de Ana

Tradicionalmente, las analistas contables de back-office como **Ana** pasan su jornada laboral descargando archivos de cobranza pesados de los bancos, realizando cruces manuales con fórmulas de Excel (VLOOKUP) propensas a errores, resolviendo inconsistencias de céntimos a mano y transcribiendo órdenes de cobro.

Nuestra propuesta plantea un **rediseño completo de su experiencia laboral (EX)** mediante una **Estación de Trabajo Virtual Unificada** que actúa como su centro de control operativo.

### ¿Qué se quiere hacer?

Consolidar toda la información de facturación, bases de datos de cobro, reportes bancarios y aprovisionamiento técnico de red en una sola pantalla visualmente ordenada, intuitiva y potenciada por un asistente agéntico inteligente.

### ¿Cómo funciona en la cancha?

A. La Interfaz del Dashboard de Ana

En su pantalla, Ana visualiza tres componentes clave:

- **Bandeja de Transacciones Priorizadas:** Una lista ordenada por criticidad donde la IA agrupa transacciones que requieren validación humana (ej. *"Discrepancia tarifaria detectada"*, *"Pago corto (Short-Pay) corporativo en cola"*, o *"Alerta de mora crítica Tramo 2 - Requiere aprobación de fraccionamiento"*).

- **Visor del "Movistar Journey Tracker":** Una vista de tipo línea de tiempo donde puede ingresar cualquier **Key de Seguimiento** de un cliente o factura y rastrear su estado transaccional completo en tiempo real, interactuando con los metadatos.

- **El Copiloto Contable (Asistente Virtual de IA):** Un chat interactivo integrado en el lateral de su estación de trabajo que tiene acceso seguro a las bases de datos de facturación para responder preguntas en lenguaje natural y ejecutar tareas operativas repetitivas.

B. Interacción Directa con el Copiloto Contable (Human-in-the-Loop - HITL)

- **La duda de Ana:** Ana nota que el pago de **Juan Carlos Quispe** de S/ 99.33 no se liquidó de forma automática y la línea de fibra sigue marcada como suspendida en su panel.

- **La consulta al Bot:** Ana escribe en su chat: *"¿Por qué el abono de Juan Carlos Quispe no se concilió automáticamente?"*.

- **La explicación del Bot:** El asistente de IA consulta la base de datos de recaudación transaccional al instante y responde:

*"Hola Ana. Se detectó una diferencia de S/ 0.10 entre el reporte del banco BCP (S/ 99.33) y el registro de la primera cuota en el sistema contable SGA de Movistar (S/ 99.43) debido a un redondeo de céntimos en el cálculo del impuesto del fraccionamiento. Como excede la tolerancia automatizada estándar de S/ 0.05, el sistema pausó el flujo para validación.*

💡 **Sugerencia de Resolución:** *Sugiero autorizar el ajuste de S/ 0.10 contra la cuenta de compensación contable, marcar el abono como conciliado, actualizar el saldo de Juan Carlos a 'Al día' y disparar el comando de reconexión de fibra de inmediato. ¿Deseas proceder?"*

- **La decisión humana (HITL):** Ana hace clic en el botón verde **[Sí, Ajustar y Reconectar]**. La IA se encarga de rellenar los asientos contables de ajuste en el SGA y disparar la API de reconexión. Ana solucionó un problema complejo en 10 segundos con un solo clic, sin abrir un solo archivo de Excel o llamar a soporte técnico.

---

## 3. Auditoría Tarifaria Automatizada: El Agente Multi-Sistema (P x Q)

Uno de los principales problemas financieros de Movistar es la **fuga de ingresos (Revenue Leakage)** causada por discrepancias entre lo que el comercial vende en el CRM de ventas (BSS) y lo que realmente se activa en la red técnica (OSS). Esto provoca que clientes disfruten de servicios por los que no pagan, o peor aún, que se les cobre por servicios que no disfrutan, detonando reclamos de facturación que saturan los canales de atención.

### ¿Qué se quiere hacer?

Implementar un **Agente de IA de Auditoría Tarifaria** con permisos unificados para auditar continuamente la concordancia contractual frente a la provisión real, asegurando que se emitan facturas correctas mediante la ecuación matemática de control:

\text{Factura Emitida} = \text{Precio Contractual (P)} \times \text{Servicios/Consumos en Red (Q)}

### ¿Cómo se hará en la cancha?

- **Inspección de bases de datos cruzadas:** El Agente de Auditoría de IA tiene acceso seguro de lectura (RBAC) tanto a la base de datos comercial (BSS - CRM) como a la base de datos de aprovisionamiento físico de red (OSS - Central de conmutación de red fija y móvil).

- **La validación en vivo:** El agente audita la orden de **Valeria Mendoza** antes de que el motor de facturación (SGA) imprima su recibo digital.

- Lee el contrato en el CRM: *"Valeria contrató el combo Movistar Total por S/ 139.90 fijos (**P**)"*.

- Consulta la red física (OSS): *"La línea fija de Valeria tiene configurado un paquete adicional técnico de televisión HBO Premium activo (**Q**), cuyo costo comercial es de S/ 20.00 adicionales"*.

- **Detección de la discrepancia:** El agente calcula la fórmula P \times Q. Detecta que la factura se generaría por S/ 159.90, lo cual viola el acuerdo contractual de la Fase 1.

- **Frenado Preventivo y Reporte Ejecutivo:** El agente de IA **pausa la emisión del recibo** para evitar que a Valeria le llegue un monto cobrado de más (impidiendo un futuro reclamo por facturación) y le envía una tarjeta de reporte detallado a Ana en su Estación de Trabajo:

⚠️ **Reporte de Auditoría de Factura - ID 89271**

- **Cliente:** Valeria Mendoza (Movistar Total)

- **Desvío detectado:** +S/ 20.00 (Monto Proyectado: S/ 159.90 | Monto Pactado: S/ 139.90)

- **Causa Raíz:** Se encuentra activo el aprovisionamiento del canal 'HBO Premium' en el decodificador de TV (OSS), pero no existe registro de compra de este paquete en el contrato comercial del CRM (BSS).

- **Acción Recomendada:** Dar de baja técnica preventiva al paquete de HBO Premium en los sistemas de red OSS y ajustar la factura al valor contractual neto de S/ 139.90.

- **[Botón: Aprobar Ajuste Automático] [Botón: Omitir y Facturar]**

- **Aprobación en un clic:** Ana selecciona "Aprobar Ajuste". El sistema corrige la red y emite el recibo de Valeria de forma impecable.

---

## 4. Detrás de Escena: Justificación de Arquitectura Técnica (Batch a Tiempo Real)

El mayor cuello de botella estructural de Movistar es el **procesamiento en lotes (Batch Processing)**. Los sistemas heredados de facturación y cobro (SGA/STC) procesan las transacciones bancarias mediante archivos planos de texto que las entidades financieras envían una vez al día a medianoche.

Esto genera el **Desfase de Conciliación**: un cliente suspendido por mora realiza su pago en el banco por la mañana, pero su servicio de internet sigue cortado hasta el día siguiente porque el lote contable nocturno no ha corrido, inundando el call center con llamadas molestas y enojadas.

### ¿Cómo lo solucionamos de manera robusta?

Proponemos migrar la recaudación de Movistar hacia una **Arquitectura Orientada a Eventos en Tiempo Real (Event-Driven Architecture)**, utilizando bases de datos modernas de alta velocidad y APIs abiertas de TM Forum.

### Componentes de la Infraestructura Técnica:

- **La Base de Datos Transaccional (PostgreSQL Optimizado):**

- Implementamos una base de datos de alta velocidad y concurrencia (como **PostgreSQL** montado en servicios escalables de nube con soporte para replicación y alta disponibilidad).

- Esta base de datos almacena las cuentas de facturación, los saldos vigentes y las colas de deudas de forma indexada por el número de documento de identidad y el número de servicio.

- **La Cola de Mensajería y Eventos (Apache Kafka / AWS EventBridge):**

- En lugar de procesar archivos de Excel por lotes a medianoche, cada transacción de pago se trata como un **evento único**.

- Los eventos de recaudación entran a un bus de mensajería (como Kafka), garantizando que ningún pago se pierda y se procesen en orden estricto de llegada (*FIFO*).

- **La Integración con APIs de TM Forum (Open Digital Architecture):**

- **TMF666 (Billing Account Management API):** El banco (ej. el portal de recaudación del BCP) envía una solicitud HTTP POST (Webhook) a esta API en el segundo exacto en que Juan Carlos Quispe paga su cuota de S/ 99.33 en su banca móvil.

- **TMF622 (Product Ordering API) & TMF637 (Product Inventory API):** El orquestador de la Fase 2 intercepta el pago, liquida la deuda en la base de datos PostgreSQL, e inmediatamente dispara una llamada a estas APIs dirigidas al sistema OSS.

- **El resultado en la cancha:** El sistema de red recibe la orden técnica de reconexión y activa el puerto de fibra óptica en el router de Juan Carlos. **La reconexión ocurre en menos de 5 minutos, eliminando el desfase de 24 horas.**

---

## 5. Gobernanza de Datos y el Rol de "Jarvis de Movistar"

La Fase 2 procesa información sumamente delicada: datos bancarios de los clientes, estados de cuenta, montos adeudados y reportes de cobranza que podrían afectar la privacidad del usuario (PII) si se manejan de forma inadecuada.

### El Resguardo de Información (Explainability Extract):

- Para garantizar el cumplimiento normativo de seguridad, todas las transacciones de pago, ajustes contables aplicados por Ana y auditorías del agente de IA de P \times Q se procesan a través de una capa de anonimización.

- Se eliminan los números de tarjeta de crédito, cuentas bancarias, direcciones físicas y nombres.

- Solo se guardan en el repositorio analítico los **metadatos operativos anonimizados** (ej. *"Banco: BCP | Monto: 99.33 | Tipo de Evento: Pago de Fraccionamiento | Tiempo de Conciliación: 0.8s | Tiempo de Reconexión de Red: 4.2 minutos | Ajuste Aplicado: Sí"*).

### Jarvis de Movistar para Altos Directivos:

Al mantener esta estricta gobernanza, la base de datos analítica queda perfectamente limpia y segura para que el **"Jarvis de Movistar"** (el asistente conversacional de analítica ejecutiva para directores y vicepresidentes) pueda consultar el estado de la operación de forma inmediata mediante lenguaje natural, sin violar la privacidad del cliente:

- *Pregunta del Director Financiero (CFO):* *"Jarvis, ¿cuál es el tiempo promedio de reconexión de red de fibra óptica tras un pago bancario esta semana y cómo se compara con el mes pasado?"*

- *Respuesta de Jarvis:* *"El tiempo promedio de reconexión esta semana se situó en ****4.5 minutos**** tras el registro del pago. En comparación con el mes pasado (cuando dependíamos del procesamiento manual de lotes batch y el tiempo promedio era de ****18.2 horas****), hemos logrado una reducción del ****99.5%**** en el tiempo de espera del cliente, disminuyendo a cero los reclamos de call center por reconexiones tardías."*

---

## 6. Cuadros de Mapeo del Proceso: "La Cancha" vs. "Bajo el Capó"

### El Flujo de Conciliación y Reconexión Automática en Tiempo Real

|   |   |   |   |

| --- | --- | --- | --- |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

---

## 7. KPIs de Negocio para Convencer al Jurado (Impacto de la Fase 2)

Para asegurar la máxima puntuación en la rúbrica de la hackathon, la viabilidad de la Fase 2 se sustenta en el impacto de estas cuatro métricas financieras y operativas directas:

- **Periodo Medio de Cobro (Days Sales Outstanding - DSO):** Reducción proyectada de **45 días a menos de 30 días promedio**, acelerando el flujo de caja de la empresa gracias a las alternativas de pago preventivas y fraccionamientos digitales por WhatsApp.

- **Tasa de Conciliación Contable Automática (Auto-Reconciliation Rate):** Incremento del **65% al 99.2%** de abonos conciliados automáticamente en el primer segundo de la transacción contable, eliminando el trabajo operativo de cuadre manual de archivos Excel para el equipo de Ana.

- **Tiempo Medio de Reconexión de Señal (Mean Time to Reconnect):** Disminución radical del tiempo de espera del cliente tras pagar, pasando de **18 horas promedio a menos de 5 minutos de reloj**.

- **Mitigación de Fuga de Ingresos (Revenue Leakage):** Recuperación de hasta un **2.5% de la facturación mensual** de la cartera que hoy se pierde en silos, gracias al Agente de IA de Auditoría Tarifaria que realiza la verificación diaria de la fórmula P \times Q.

---

Este manual maestro demuestra de forma rigurosa y realista cómo la Fase 2 del Orquestador unifica la tecnología y las finanzas de Movistar, erradicando los cuellos de botella del procesamiento por lotes para construir un negocio ágil, eficiente y centrado en las personas.