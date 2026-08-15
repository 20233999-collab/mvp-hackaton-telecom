# guia_maestra_fase2_movistar.md

# Guía Maestra de la Fase 2: Eficiencia Operativa, Facturación y Recaudación

## Ecosistema Agéntico SON-IA (Next Best Action & Back-Office)

Esta guía actúa como el **segundo pilar de nuestro Orquestador Inteligente**, conectando la venta y el alta realizadas en la **Fase 1 (Ventas/NBO)** con el procesamiento operativo, financiero y de cobros de **Movistar**. El objetivo es brindar una visibilidad total en la cancha para identificar cuellos de botella reales y justificar cómo la IA puede automatizar tareas repetitivas de back-office, liberando al factor humano para la toma de decisiones críticas.

---

## 📋 1. Ficha de Identidad del Desafío (Reto 3 - SON-IA)

La Fase 2 representa el "motor y sistema circulatorio" del ciclo de ingresos de Movistar. Aquí se procesa, audita, cobra y concilia el dinero de la operación.

- **Propósito Administrativo:** Asegurar que cada servicio vendido se facture correctamente, acelerar el recaudo de cuentas por cobrar reduciendo el Periodo Medio de Cobro (PMC), automatizar la conciliación de pagos bancarios en tiempo real y acelerar el tiempo de reconexión del servicio para mitigar el descontento del cliente.

- **Alcance Operativo:** Auditoría tarifaria (P \times Q), cobranza conversacional omnicanal, conciliación automática con bancos (BCP, BBVA, etc.), y aprovisionamiento automático de red (BSS/OSS Link) ante eventos de cobro.

---

## ⚙️ 2. Arquitectura de 5 Subprocesos Core de la Fase 2

Para entender las oportunidades de mejora, primero debemos mapear cómo viaja el dinero y la información en el back-office:

### Subproceso 1: Auditoría Tarifaria Automatizada (P \times Q)

- **¿Qué es?** Consiste en contrastar de manera digital que el Precio acordado contractualmente en la Fase 1 (P) multiplicado por la Cantidad de servicios o consumos registrados en red (Q) coincida exactamente con lo procesado por el sistema de facturación antes de emitir el recibo.

- **Problema en la cancha:** Las tarifas promocionales, descuentos temporales y prorrateos se calculan en sistemas heredados (SGA/Billing) con reglas rígidas. Si hay un desajuste, el recibo se emite con errores, generando reclamos inmediatos por facturación (que representan 4 de cada 10 reclamos en telecomunicaciones).

- **Mejora con el Orquestador:** Un microservicio de auditoría automatizado cruza de forma instantánea el contrato digitalizado en el CRM con el CDR (registro de llamadas/datos) de la red física. Si detecta una desviación mayor al 1%, frena la emisión del recibo y alerta al analista para su corrección previa.

### Subproceso 2: Cobranza Preventiva y Negociación Conversacional

- **¿Qué es?** El conjunto de acciones proactivas de contacto con clientes que presentan retrasos de pago en sus recibos, clasificándolos en tramos de mora para ofrecer soluciones de pago personalizadas.

- **Problema en la cancha:** Las llamadas de cobranza tradicionales son intrusivas, costosas y dañan el NPS de la compañía. Además, los analistas de back-office no tienen herramientas automatizadas para ofrecer fraccionamientos de deuda dinámicos, aplicando cortes drásticos que empujan al cliente a abandonar la marca (*churn*).

- **Mejora con el Orquestador:** Un módulo agéntico analiza el historial del cliente (por ejemplo, **Juan Carlos Quispe**, diseñador independiente con mora en su plan de fibra de S/ 298.00). El sistema detecta que es un cliente de bajo riesgo pero con problemas temporales de liquidez (Tramo 2 de mora: 30-45 días) y, en lugar de cortar el servicio, le envía una propuesta por WhatsApp para fraccionar su deuda en 3 cuotas sin intereses de S/ 99.33.

### Subproceso 3: Pasarela de Recaudación e Integración Bancaria (Portal de Recaudo)

- **¿Qué es?** El canal técnico de comunicación que conecta los sistemas de cobro de Movistar con las entidades financieras de recaudación (como el BCP, BBVA, Interbank, etc.).

- **Problema en la cancha:** Las pasarelas de pago tradicionales procesan las transacciones en lotes (*batch*). Los bancos envían la lista de recaudación a Movistar una vez al día (generalmente a medianoche). Si un cliente suspendido paga a las 8:00 a.m. para poder trabajar, el sistema contable de Movistar no se entera del pago hasta el día siguiente, manteniendo su servicio cortado por horas.

- **Mejora con el Orquestador:** Integración mediante **APIs bancarias en tiempo real** (como webhooks de recaudo del BCP). En el segundo exacto en que el cliente paga en su banca móvil, el banco notifica de manera segura al Orquestador de Movistar.

### Subproceso 4: Conciliación Bancaria Automática

- **¿Qué es?** La tarea contable de cruzar la información de ingresos que reporta el banco frente a las facturas pendientes de cobro en el sistema contable interno, liquidando el saldo adeudado.

- **Problema en la cancha:** La conciliación manual obliga a los analistas de back-office contable a descargar diariamente hojas de cálculo de excel kilométricas de los bancos, realizar búsquedas cruzadas (VLOOKUP manuales) con los códigos de pago de los clientes, e ingresar los abonos a mano. Esto genera demoras operativas masivas y errores contables humanos.

- **Mejora con el Orquestador:** Un motor de conciliación automatizada analiza los metadatos del pago entrante (ID de transacción, monto, código de cliente), valida que coincida con la deuda en el SGA de facturación y ejecuta la liquidación contable de inmediato en menos de un segundo, sin intervención humana.

### Subproceso 5: Aprovisionamiento y Reconexión en Tiempo Real (BSS/OSS Link)

- **¿Qué es?** La orden técnica enviada desde el sistema comercial (BSS) hacia los equipos físicos de red (OSS) para reestablecer la señal de internet o telefonía móvil una vez que el cliente ha saldado su deuda.

- **Problema en la cancha:** Tras confirmarse el pago, la orden de reconexión viaja por colas de mensajería lentas o requiere que un técnico active manualmente el servicio en la central de red (OSS), tardando entre 12 a 48 horas en devolver el servicio al cliente.

- **Mejora con el Orquestador:** Al conciliarse el pago automáticamente (Subproceso 4), el Orquestador gatilla instantáneamente una llamada a la Open API de TM Forum (**TMF622 - Product Order**) dirigida al sistema de aprovisionamiento de red. La señal se restablece en el router del cliente en menos de 5 minutos de reloj.

---

## 🗺️ 3. El Journey E2E en la Cancha: El Viaje de la Fase 2

Para ilustrar la interconexión operativa en la vida real, recorramos el caso de **Juan Carlos Quispe** (cliente de Fibra Óptica con 42 días de mora de S/ 298.00) y **Ana** (Analista de Back-Office Contable de Movistar).

|   |   |   |   |

| --- | --- | --- | --- |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

|   |   |   |   |

---

## ⚠️ 4. Cuellos de Botella Críticos en la Cancha (Antes vs. Después)

Este mapa de procesos permite al jurado y a los directivos entender claramente dónde se pierde dinero y satisfacción hoy, y cómo lo soluciona tu ecosistema:

- **El Cuello de Botella del "Procesamiento en Lotes" (*****Batch Processing*****):**

- *Antes:* Los pagos realizados por la mañana tardan hasta 24 horas en registrarse porque los sistemas contables dependen de una descarga de archivo Excel diaria a medianoche. El cliente sigue sin servicio, saturando el call center con quejas.

- *Después:* **Conciliación basada en Eventos (Real-Time).** Las APIs bancarias procesan cada transacción al instante.

- **El Cuello de Botella de la Fuga de Ingresos (*****Revenue Leakage*****):**

- *Antes:* Falta de cruce automatizado entre lo que el vendedor activa en el CRM de ventas y lo que realmente se configura en la red física (OSS). Clientes reciben internet de alta velocidad pero el sistema de facturación "olvida" cobrarles por fallas de sincronización.

- *Después:* **Auditoría continua ****P \times Q****.** La IA reconcilia diariamente la base de datos de aprovisionamiento de red física contra la facturación activa.

- **El Cuello de Botella del "Corte Frío" de Servicio:**

- *Antes:* Se corta el internet de forma binaria (On/Off) a clientes valiosos con pocos días de retraso. Esto genera resentimiento con la marca y frena su capacidad de generar ingresos para pagar.

- *Después:* **Degradación Inteligente de Velocidad.** La IA reduce el servicio a un "Modo Mantenimiento" que permite navegación básica de texto (WhatsApp, correos de trabajo) pero restringe el streaming, manteniendo al cliente conectado e interactuando amigablemente para facilitar su recaudo.

---

## 📊 5. Indicadores Clave de Éxito Administrativos (KPIs)

Este ecosistema agéntico se justifica frente a los directivos con métricas financieras y operativas directas:

- **Periodo Medio de Cobro (Days Sales Outstanding - DSO):** Reducción de 45 días a menos de 30 días promedio gracias a la cobranza preventiva por WhatsApp.

- **Tasa de Conciliación Automática (Auto-Reconciliation Rate):** Incrementar la conciliación automática de pagos bancarios del 65% actual (con intervención manual por errores) a más del **99%**.

- **Tiempo Medio de Reconexión (Mean Time to Reconnect):** Reducir el tiempo en que un cliente recupera su señal tras pagar de **18 horas promedio a menos de 5 minutos**.

- **Fuga de Ingresos Auditada (Revenue Leakage Mitigated):** Identificación y corrección automática de discrepancias de cobro de planes contratados, recuperando hasta un 2.5% de la facturación mensual que antes se perdía en silos.

---

Este es el engranaje del back-office del **Mega-Orquestador**: automatizar las tareas repetitivas de contabilidad y red, y colocar al cliente de vuelta en el centro de la experiencia sin fricciones operativas.