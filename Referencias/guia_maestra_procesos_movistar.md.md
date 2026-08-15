# guia_maestra_procesos_movistar.md

# Guía Maestra de Procesos de Movistar: Diagnóstico, Interconexión y Oportunidades de IA (Retos 1, 2 y 3)

Esta guía ha sido diseñada para actuar como un **mapa de procesos y guía maestra organizativa** de Movistar. El objetivo es que cualquier directivo, desarrollador o analista de negocio pueda comprender con total claridad los subprocesos críticos de la operadora, identificar de manera exacta dónde se encuentran los verdaderos **cuellos de botella y fricciones**, y entender cómo se interconectan los tres desafíos de la Hackathon como un ciclo continuo guiado por la Inteligencia Artificial.

---

## 🗺️ El Macroproceso Integrado de Movistar (Flujo Operativo de Extremo a Extremo)

El ciclo de relación operativa con el cliente de telecomunicaciones no se compone de procesos aislados. Operativamente, responde a un flujo lógico secuencial que viaja desde la preventa comercial hasta el soporte de post-venta, formando un círculo de retroalimentación infinita. El orden de intervención de las tres fases o retos se describe a continuación:

- **Fase 1: Propulsión Comercial y Atracción (Reto 2 - NBO):** Es la puerta de entrada. Mediante analítica predictiva, se identifica qué servicio adicional o paquete convergente (como *Movistar Total*) necesita el cliente móvil u hogar. Se diseña la oferta perfecta y se canaliza por el medio de mayor propensión para concretar la venta o el upgrade.

- **Fase 2: Procesamiento de Operaciones, Facturación y Recaudación (Reto 3 - SON-IA):** Una vez que el cliente acepta el nuevo plan, la orden entra al "back-office". Los sistemas centrales (BSS/OSS) deben aprovisionar el servicio, calcular la tarifa proporcional (fórmula de precio por cantidad o P \times Q), generar y emitir la factura mensual sin errores aritméticos, procesar el recaudo e identificar los depósitos bancarios para realizar la rebaja de deuda.

- **Fase 3: Post-Venta, Explicación y Contención (Reto 1 - Atención Inteligente):** Tras la emisión, el recibo llega a manos del cliente. Al ser un nuevo plan o incluir variaciones comerciales del mes, el usuario no comprende conceptos complejos (como prorrateos) y recurre a los canales digitales buscando respuestas sencillas. Aquí, el asistente de IA explica el recibo con empatía y aritmética exacta, evitando que la queja sature el call center 104 o escale a un reclamo formal en OSIPTEL.

- **Bucle de Retroalimentación Operativa:** Si el asistente del Reto 1 resuelve con éxito y con 0% de alucinaciones la duda de facturación del cliente, el sistema activa de forma controlada el **cross-selling restrictivo** (Fase 1). Al haber recuperado la confianza del cliente, se abre el pase para que el motor NBO (Reto 2) sugiera la siguiente mejor oferta comercial convergente, reiniciando el flujo.

---

## 🔍 Análisis Detallado por Reto: Subprocesos, Cuellos de Botella y Casos de Negocio

A continuación, se desglosa cada desafío, mapeando sus subprocesos core, sus cuellos de botella reales y los escenarios de negocio específicos para diagnosticar el problema de raíz.

---

### Reto 2: Personalización Comercial Inteligente (Next Best Offer - NBO)

*El reto de colocar la oferta comercial correcta al cliente correcto, en el momento idóneo, priorizando la migración al producto convergente Movistar Total (MT).*

A. Subprocesos Core

- **Predicción de Fuga (Churn):** Análisis periódico de comportamiento de red, consumos y reclamos para calcular la probabilidad de baja voluntaria del cliente.

- **Segmentación Predictiva de Planta:** Agrupamiento de clientes basado en consumos de datos, voz, banda ancha y perfiles financieros de pago en lugar de criterios demográficos rígidos.

- **Motor Decisional NBO/NBA:** Algoritmos lógicos de recomendación de productos que evalúan la planta móvil y hogar existente para estructurar ofertas de ahorro de "Movistar Total" (unión de fijo y móvil con hasta 50% de ahorro).

- **Optimización de Canal y Momento:** Módulo de analítica transaccional que determina si un ofrecimiento debe hacerse por SMS, WhatsApp, App Mi Movistar o mediante un speech sugerido para asesores humanos en call center en vivo.

- **Seguimiento Funnel E2E de Venta:** Trazabilidad completa desde el momento en que se genera la sugerencia, el speech de rebote (negociación ante objeciones), hasta el registro de audios y plataformas de DITO para el cierre de venta definitivo.

B. Cuellos de Botella Reales y Oportunidades de Mejora

- **Recomendaciones basadas en campañas masivas (Spam de ofertas):** Hoy las ofertas dependen de lotes (batch) genéricos o de la intuición subjetiva del asesor. La tasa de conversión en telecomunicaciones es muy baja (entre 5% y 8%), saturando al cliente de opciones irrelevantes.

- **Asesores de atención sin contexto en tiempo real:** Los asesores en call center o tiendas operan bajo una enorme presión de tiempo y no disponen de una pantalla unificada donde el motor NBO les desglose el *porqué* de la oferta sugerida ni un guion de negociación estructurado.

- **Falta de trazabilidad comercial:** La compañía no cuenta con auditorías automáticas que demuestren de forma probatoria (logs o audios de llamadas) si un producto fue efectivamente ofrecido y cuáles fueron los motivos reales de rechazo del cliente.

- **Fricción en el segmento tradicional (+50 años):** Este cluster estratégico es altamente analógico y suele rechazar u omitir los flujos digitales en App o Web, requiriendo canales asistidos con interfaces o speeches sumamente simplificados.

C. Situaciones Específicas de Negocio

- **Caso de Uso - Valerio Mendoza (El hito de consumo):** Valerio es una diseñadora que viaja constantemente por trabajo entre Lima, Arequipa y Trujillo. Cuenta con un plan móvil con un tope de 20 GB de datos. El subproceso de comportamiento detecta que, de manera recurrente, Valerio agota sus gigas el día 18 del mes y gasta soles adicionales adquiriendo paquetes de datos individuales para compartir internet (hotspot) a su laptop.

- *El problema real:* Ofertarle por llamada fría al azar un plan masivo no funciona.

- *La oportunidad de IA:* Al detectar que su gasto individual real asciende a S/ 179.80, el motor NBO calcula automáticamente que al migrar al plan convergente **Movistar Total** gozará de fibra simétrica hogar de alta velocidad, datos móviles ilimitados con compartición libre, y pagará una tarifa plana con ahorro matemático real. El sistema inyecta al asesor un pitch comercial de 30 segundos optimizado que resalta el ahorro exacto y la solución a sus dolores de viaje.

---

### Reto 3: Sinergia Operativa (SON-IA) - Facturación, Recaudación y Cobranzas

*El reto de automatizar el back-office del "ciclo de ingresos" (Order-to-Cash) a través de un ecosistema jerárquico de agentes inteligentes autónomos orquestados por un supervisor.*

A. Subprocesos Core

- **Auditoría de Insumos y Validación Tarifaria (****P \times Q****):** Extracción previa a la emisión de variables contractuales digitalizadas (Precio P) y correlación exacta con los consumos de red (Cantidad Q) de los sistemas de medición.

- **Ejecución y Emisión de Facturación:** Emisión digital de recibos hacia la plataforma de autogestión de clientes, registrando logs bajo estrictos criterios de auditoría tributaria y legal.

- **NLP en Canales de Cobranza (Gestión de Remesas):** Ingesta automática de correos no estructurados de clientes y agencias externas, identificando intenciones de pago, promesas y montos.

- **Conciliación de Recaudo en Tiempo Real:** Cruce continuo de extractos bancarios y pasarelas de pago locales (Yape, Plin, banca electrónica) para aplicar la rebaja automática de cuentas por cobrar en el sistema BSS.

- **Business Intelligence y Recupero Preventivo:** Proyecciones analíticas de la Provisión de Cobranza Dudosa (PCD), identificando quiebres operativos y sugiriendo estrategias de recupero oportuno al vencimiento.

B. Cuellos de Botella Reales y Oportunidades de Mejora

- **Validación manual de contratos a gran escala:** La coordinación física y por correo entre áreas (implantación, ingeniería, comercial y facturación) para registrar tarifas personalizadas es sumamente lenta, provocando fugas de ingresos por servicios no facturados o multas fiscales por errores de cálculo.

- **El retraso en la reconciliación (Reconciliation Lag):** Procesar depósitos bancarios de forma manual o en lotes al final del día (batch) retrasa el reconocimiento de pagos. Esto mantiene suspendidos los servicios de red de clientes que ya pagaron, incrementando severamente las quejas de atención e influyendo en la portabilidad saliente de clientes morosos.

- **Buzones de cobranza sin automatización:** La enorme volumetría de correos que envían los clientes corporativos detallando transferencias o disputas no está centralizada. Los analistas humanos dedican hasta el 70% de su tiempo útil a comparar planillas de cálculo en Excel en lugar de recuperar deudas complejas.

C. Situaciones Específicas de Negocio

- **Caso de Uso - Juan Carlos Quispe (Cobranza Preventiva Empática):** Juan Carlos es un diseñador gráfico independiente con 42 días de mora por un servicio de fibra (Tramo de Mora 2: 31 a 60 días de atraso, deuda de S/ 298.00). Necesita urgentemente conservar el internet de alta velocidad para entregar sus trabajos y teme ser reportado negativamente ante centrales de riesgo como INFOCORP.

- *El problema real:* Una cobranza reactiva agresiva tradicional genera resentimiento, reclamos y la portabilidad a la competencia.

- *La oportunidad de IA:* Al cruzar sus notas en el CRM con el estado de mora del Tramo 2, el Agente de BI y Cobranzas detecta de manera automatizada su necesidad de uso de red. En lugar de emitir notificaciones de corte punitivas, el sistema de IA formula una oferta de fraccionamiento empática: dividir la deuda de S/ 298.00 en 3 cuotas fijas de S/ 99.33 sin intereses cargadas a sus siguientes recibos, garantizando mantener su línea activa en "Modo Mantenimiento" (velocidad reducida óptima para teletrabajo y mensajería) y asegurando que no se efectuará el reporte a centrales de riesgo si acepta el acuerdo desde su WhatsApp.

- **Caso de Uso - Disputa Contractual de Pago Corto (Short-Pay):** Un cliente corporativo efectúa una transferencia bancaria, pero realiza un "pago corto" (deposita un 5% menos del total facturado).

- *El problema real:* Los ERPs tradicionales rechazarían la remesa por diferencia de importe, dejando la factura con saldo pendiente y gatillando un bloqueo automático de red a los 30 días.

- *La oportunidad de IA:* El Agente de BI y Conciliación intercepta el evento de pago corto en tiempo real y alerta al Agente Supervisor. Este suspende preventivamente el envío a cobranza coactiva y comisiona al Agente de Cobranzas rastrear los buzones de soporte. El agente de IA localiza un correo del cliente donde indica: *"Efectuamos el pago neto deduciendo la multa del 5% debido a la caída de red de banda ancha ocurrida el día 12 de julio de acuerdo con la cláusula de penalización de nuestro contrato"*. El Supervisor le solicita al Agente de Facturación validar la veracidad técnica de la queja. Este último consulta el contrato digitalizado, extrae los reportes del sistema de red (OSS) del día 12 y corrobora la caída física. Con la validez matemática confirmada, el sistema emite de manera autónoma una nota de crédito por el 5% para cuadrar el balance de la cuenta, cierra la deuda y notifica a ambas partes sin intervención humana.

---

### Reto 1: Atención Inteligente y Explicación de Recibos

*El reto de mitigar el Bill Shock (desconcierto ante variaciones del recibo) mediante un asistente conversacional de IA Generativa de alta precisión integrado a la App Mi Movistar y canales de soporte.*

A. Subprocesos Core

- **Detección Proactiva de Desviaciones (Motor BrainyBill):** Monitoreo algorítmico que compara automáticamente el monto de la factura del mes corriente frente a los promedios de hasta 5 recibos previos.

- **Clasificación Semántica de Variaciones:** Agrupamiento de diferencias en lenguaje "cliente" (prorrateos, notas de crédito, reconexiones, fin de promociones, compra de paquetes o cargos de equipos financiados).

- **Generación de Explicaciones Dinámicas (Arquitectura CSR-RAG):** Recuperación de datos estructurados de cobro y traducción en lenguaje natural simple, amigable y empático, erradicando al 100% las alucinaciones numéricas.

- **Interacción y Autogestión de Pagos / Reclamos:** Habilitación de pasarelas de pago y gestiones de cobro (como fraccionamientos del Reto 3) directamente en la interfaz del chat.

- **Derivación Inteligente (Hand-off con contexto):** Transferencia automática al asesor de call center si se superan umbrales lógicos de insatisfacción, enviando toda la traza conversacional para no repetir preguntas.

B. Cuellos de Botella Reales y Oportunidades de Mejora

- **Complejidad y asimetría de información:** Cerca del 40% de los más de 5 millones de recibos mensuales emitidos por Movistar presentan variaciones de monto entre ciclos. Conceptos técnicos y regulatorios como "prorrateos" o "tasas de reajuste por suspensión" resultan incomprensibles para el abonado común.

- **Canales digitales estáticos e informativos:** La aplicación digital "Mi Movistar" actual se limita a mostrar los PDFs de facturación. No explica proactivamente el porqué de los cambios conceptuales, forzando a más de 200,000 clientes al mes a llamar al canal de soporte 104 exclusivamente por explicaciones de recibo, saturando las colas humanas y aumentando significativamente los costos operativos de atención (Cost-to-Serve).

- **Desfase temporal de cargos:** Los consumos adicionales a mes vencido ( Cycle Arrears ) se facturan junto a los cargos fijos mensuales adelantados ( Cycle Forward ). Al no existir una línea de tiempo visual, el cliente asume de inmediato que el monto es un cobro indebido y eleva una disputa formal ante el TRASU.

C. Situaciones Específicas de Negocio

- **Caso de Uso - Prorrateo por Alta Intermedia de Equipos:** El cliente "Mario Flores" tiene una fecha de pago regular que cierra los 30 de cada mes y abona S/ 60 por su plan estándar. El 10 de julio decide activar un decodificador adicional de televisión en HD con un costo de S/ 20 mensuales. Al recibir su factura de agosto, observa un cobro total de S/ 95.60 y asume con molestia que la empresa le está duplicando cobros de manera indebida.

- *El problema real:* Mario no entiende que se le están cobrando los 20 días proporcionales de uso del decodificador desde el alta (10 de julio al 30 de julio = S/ 15.60) correspondientes al mes anterior, sumados a la renta fija adelantada de agosto (S/ 20 del deco HD + S/ 60 del plan = S/ 80.00).

- *La oportunidad de IA:* En lugar de forzar a Mario a llamar al 104, el asistente virtual detecta proactivamente la variación en su App. Al escribir Mario: *"¿Por qué me vino más caro?"*, la IA Generativa, integrada a las APIs BSS de órdenes (TMF622) e inventario de productos (TMF637), extrae los datos y responde: *"Hola Mario, veo que tu recibo subió este mes debido a que el 10 de julio activaste un nuevo decodificador adicional HD. Como tu ciclo de pago cierra los 30 de cada mes, en este recibo te cobramos únicamente los 20 días que utilizaste el decodificador en julio (que equivale a S/ 15.60 de prorrateo), más el costo mensual regular de tus servicios por adelantado correspondientes a agosto (S/ 80.00). No es un cobro doble, sino el ajuste de los días exactos que disfrutaste de tu equipo nuevo."*

- **Caso de Uso - Cargo por Corte y Reconexión:** Un usuario sufrió una suspensión del servicio móvil por falta de pago del 5 al 7 de julio. Su línea fue reactivada. Al recibir su recibo, observa un cargo único adicional de S/ 15.00 bajo el concepto "Servicio de Reconexión".

- *La oportunidad de IA:* El chatbot explica con absoluta transparencia y tono amigable (sin sonar punitivo o acusador): *"Hola, tu línea presentó una suspensión temporal por falta de pago y fue reactivada el día 7 de julio. Este recibo incluye un cargo único administrativo de S/ 15.00 que corresponde al costo de red estándar por reconectar tus servicios de manera activa."*

---

## 📊 Matriz de Interconexión Operativa de Datos (Capa ODA y TM Forum)

Para garantizar la interoperabilidad de estos tres desafíos sin generar acoplamientos rígidos con las bases de datos transaccionales heredadas de Movistar, se propone la utilización de los estándares de la Arquitectura de Operación Digital Abierta (ODA) del TM Forum. La siguiente matriz resume cómo interactúan los datos y subprocesos de cada reto:

|   |   |   |   |   |

| --- | --- | --- | --- | --- |

|   |   |   |   |   |

|   |   |   |   |   |

|   |   |   |   |   |

|   |   |   |   |   |

---

## 🎯 Conclusión y Hoja de Ruta Administrativa

Esta guía maestra nos demuestra que los problemas de facturación, ventas y cobranzas en Movistar se solucionan unificando la cadena de valor:

- **La personalización comercial (Reto 2)** reduce el churn inicial colocando planes idóneos que evitan sorpresas de cobro.

- **La automatización operativa de SON-IA (Reto 3)** elimina los errores del back-office, asegurando que el cobro emitido responda fielmente a lo contratado y acortando los tiempos de conciliación bancaria para reactivar líneas en minutos.

- **La explicación inteligente del recibo (Reto 1)** actúa como escudo de contención en el front-office, traduciendo la complejidad matemática de la facturación en un diálogo claro, empático y transparente que fideliza al usuario.

Entender este ciclo como un único engranaje operativo es el paso fundamental para diseñar soluciones de Inteligencia Artificial que no solo automaticen tareas aisladas, sino que **transformen de raíz el modelo de negocio de Movistar**.