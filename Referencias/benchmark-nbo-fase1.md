# 📊 Reporte de Benchmark Estratégico y Sustentación Técnica
## Modelos Globales de Personalización Comercial (NBO/NBA) y su Implementación en el "Movistar Journey Tracker"

Este documento presenta una investigación profunda y un análisis comparativo de las mejores prácticas globales en la implementación de motores de **Siguiente Mejor Oferta (NBO - Next Best Offer)** y **Siguiente Mejor Acción (NBA - Next Best Action)** en los sectores de telecomunicaciones y banca digital. El objetivo de este reporte es proveer al equipo técnico y directivo de Movistar Perú un marco de referencia de clase mundial, completamente fundamentado en casos de éxito reales, para justificar la viabilidad, el diseño arquitectónico y el retorno de inversión (ROI) de la **Fase 1: Propulsión Comercial y Atracción** dentro de nuestra propuesta unificada **"Movistar Journey Tracker" (MJT)**.

---

## 🗺️ 1. Filosofía de Diseño: De la Campaña Masiva a la Conversación Inteligente

Las empresas de telecomunicaciones tradicionales han operado históricamente bajo un modelo de campañas masivas por lotes (*batch*), lo que en el mercado peruano genera saturación, tasas de conversión de apenas **5.0% a 8.0%**, y un incremento en el *Churn Rate* (tasa de fuga de clientes) que ronda entre el **5.0% y 6.0% mensual** [47, 48]. 

La filosofía del **"Movistar Journey Tracker"** rompe este paradigma reactivo e invasivo. Se inspira en una transición hacia las **"Conversaciones Inteligentes y Continuas"**, donde el canal es un medio secundario y la toma de decisiones se realiza a nivel individual y en tiempo real [114, 115, 231]. Para lograr esto, se estructuran capas analíticas y de orquestación que combinan el poder de la Inteligencia Artificial Predictiva (Machine Learning) con la IA Generativa, garantizando que el negocio no "empuje" productos, sino que resuelva dolores específicos del cliente en el momento preciso de mayor propensión [45, 108, 115].

---

## 🔍 2. Caso de Estudio 1: Vodafone – El Cerebro Único Omnicanal y "Always-on Engagement"

### A. Contexto y Problemática Anterior
Antes de su transformación, Vodafone operaba con canales de atención y ventas en silos de información estricta [232]. La tecnología de la operadora impedía unificar la visión inbound (llamadas de soporte entrantes) con la outbound (campañas salientes) [232]. Las ofertas se basaban en segmentaciones estáticas con un contexto limitado de lo que el cliente necesitaba, dañando severamente la satisfacción (NPS) y perdiendo millones en comisiones de venta redundantes por ofrecer descuentos a clientes que de todos modos no se fugarían [232, 234].

### B. Arquitectura Técnica Implementada
Vodafone unificó sus canales (call centers, tiendas físicas, portales web, aplicaciones móviles, sistemas de IVR y gestión de campañas) bajo un **Cerebro Centralizado de Decisiones**: **Pega Customer Decision Hub (CDH)** [233].
*   **Decisiones en Tiempo Real:** El sistema procesa miles de eventos de telemetría de red, interacciones web y logs de llamadas en tiempo real [233]. Simon Esland (Director Global de Tecnología de Marketing de Vodafone) lo describe así: *"Podemos olvidarnos del canal. El canal es irrelevante... Tenemos comunicaciones uno a uno genuinas, relevantes y personalizadas, tomando decisiones basadas en lo que ocurrió hace medio segundo"* [231].
*   **Manejo de Madurez del Modelo (Outbound Model Maturity):** Para evitar que los algoritmos de IA en fase de aprendizaje molesten a los clientes con ofertas irrelevantes debido a propensiones inestables, Vodafone implementó un límite técnico de "madurez" [137]. Los nuevos modelos predictivos y tratamientos comerciales se despliegan inicialmente solo al **2.0% de la población elegible** [137]. La IA registra activamente los rechazos o aceptaciones de este grupo de control y, una vez que el modelo "madura" y estabiliza su precisión, se escala automáticamente al resto de la base [137].

### C. Métricas de Impacto Logradas
*   **+300% de incremento** en la tasa de aceptación de ofertas comerciales [231].
*   **+£1.00 de aumento en el ARPU** mensual promedio por cliente [231].
*   **+£100 millones de ganancia incremental** anual para la corporación [231].
*   **-22% de reducción** en el pago de comisiones por venta directa (gracias al blindaje preventivo y la autogestión) [234].
*   **+7% de incremento** global en el ARPU de la planta de suscriptores [234].

### D. Cómo lo implementamos en nuestro proyecto ("Movistar Journey Tracker")
1.  **Orquestador de Decisión Inbound-Outbound:** Integraremos la lógica de NBO directamente en la consola del asesor Carlos y en el "Concierge Digital" de WhatsApp [59, 254]. Si el cliente llama por una queja de facturación (inbound), el sistema congela temporalmente cualquier script de venta y prioriza el soporte (Fase 3) [207]. Una vez resuelta la duda y registrada la conformidad, el motor "Always-on" recalcula en vivo y libera la oferta de portabilidad o upgrade de Movistar Total [207].
2.  **Filtro de Madurez del 2.0%:** Cada nueva campaña de "Movistar Total" que el área de Customer Value Management (CVM) configure en el orquestador no se lanzará de forma masiva [137, 253]. Entrará en un flujo de autoaprendizaje con el 2.0% de la base para calibrar los speeches y las propensiones antes de impactar a clientes críticos [137].

---

## 🔍 3. Caso de Estudio 2: Nubank – La Priorización de Problemas y el Poder de "nuFormer"

### A. Contexto y Filosofía "Problem-Solving First"
Como neobanco líder, Nubank entendió que la retención de clientes es una métrica estratégica, no solo operativa [172]. El banco detectó que la ceguera publicitaria inhabilitaba los banners tradicionales en la App [188]. Sin embargo, en lugar de inundar al usuario con más publicidad invasiva, reestructuraron la interfaz de su aplicación para inyectar una sección dedicada de **"Sugerencias Inteligentes"** ubicada inmediatamente debajo de la foto de perfil en el *home* [191].
*   **La Regla de Oro de Priorización:** Nubank rechaza categóricamente utilizar este espacio exclusivamente para impulsar productos comerciales [190]. La compañía definió una jerarquía estricta: **los mensajes y sugerencias orientadas a resolver problemas reales o potenciales del cliente tienen prioridad absoluta** sobre los de promoción [190]. Un recordatorio de pago inminente de factura, una advertencia de compra sospechosa o un consejo para ahorrar intereses se mostrarán siempre antes que una campaña de venta de seguros [191]. Esta transparencia consolida una relación de extrema confianza (*trust*) [194].

### B. Arquitectura Técnica de Representación ("nuFormer")
Para alimentar estas sugerencias, Nubank desarrolló **nuFormer**, un modelo de representación profunda (*foundation model*) basado en arquitecturas de **Transformers** [150, 237, 240].
*   **De Reglas Tabulares a Aprendizaje Automático:** Tradicionalmente, los modelos de propensión (como XGBoost o LightGBM) operan sobre variables tabulares rígidamente estructuradas (ej. balance de cuenta, días de mora, número de clics) [237, 243]. nuFormer toma secuencias de transacciones financieras en bruto (compras en tarjeta de crédito, debitos, transferencias) y las convierte en una secuencia de lenguaje usando un procedimiento de tokenización optimizado (donde cada transacción consume un promedio de 14 tokens) [237, 246].
*   **Joint Fusion (Fusión Conjunta con DCNv2):** Para no perder la potencia de las variables tabulares tradicionales del negocio, Nubank implementó un modelo híbrido de **Joint Fusion** [240, 243, 244]. Utilizan una red neuronal **Deep & Cross Network v2 (DCNv2)** optimizada con capas de regularización (dropout y weight decay) que procesa los datos tabulares del cliente y proyecta el resultado en un embedding de baja dimensión [244]. Este vector tabular se concatena con el embedding de comportamiento transaccional del Transformer (nuFormer) y un MLP (perceptrón multicapa) genera la puntuación de recomendación final [242, 244].
*   **Tuning Eficiente con rsLoRA y QLoRA:** Para poder entrenar estos modelos con miles de millones de registros transaccionales sin incurrir en sobreajuste (*overfitting*) o "olvido catastrófico", los ingenieros de Nubank utilizaron **4-bit NF4 Quantization (QLoRA)** y **Rank-Stabilized LoRA (rsLoRA)** [90, 243]. Al escalar las activaciones por $\frac{\alpha}{\sqrt{r}}$ en lugar de $\frac{\alpha}{r}$ (donde $r$ es el rango del adaptador, configurado en $r = 96, 128$), se previene el desvanecimiento de gradientes en capas profundas y se logra comprimir el ciclo de experimentación de meses a **un solo día** [90, 155].

### C. Métricas de Impacto Logradas
*   **70% de reducción de riesgo** para una población equivalente en comparación con los modelos tradicionales de la industria [150].
*   **Rendimiento 3 veces superior** (3x gain) frente a mejoras típicas de modelos de una sola generación [150].
*   **+1.25% de incremento relativo** en el área bajo la curva (AUC) de pruebas offline [245].
*   **-4.4% de reducción relativa en el Churn a largo plazo (6 meses)**, impactando directamente en la retención del CLV de los clientes [248].

### D. Cómo lo implementamos en nuestro proyecto ("Movistar Journey Tracker")
1.  **La Interfaz del "Concierge Digital" y Priorización Estricta:** Implementaremos el mismo carrusel interactivo en la cabecera de la App Mi Movistar [191]. Si la Valeria Mendoza real ingresa a la aplicación y tiene una desviación contable mayor al 20% en su recibo corriente (detectada por **BrainyBill** en la Fase 3), el carrusel **no le mostrará banners comerciales** [16, 44]. En su lugar, el Concierge desplegará una sugerencia interactiva prioritaria: *“Hola Valeria, notamos una variación en tu recibo de este mes por prorrateo. Haz clic aquí y nuestra mascota Aura te lo desglosará con aritmética exacta”* [44]. Solo tras cerrar satisfactoriamente la contención del reclamo, la interfaz habilitará la recomendación de upgrade a Movistar Total [3, 207].
2.  **Representación del Comportamiento (Joint Fusion de Datos):** No limitaremos el NBO a un scoring básico. Utilizaremos un framework híbrido inspirado en nuFormer: combinaremos las predicciones tabulares de propensión de compra y fuga (XGBoost/CatBoost explicadas con SHAP) con embeddings de eventos en bruto del cliente (uso de datos por zona, caídas de llamadas registradas en red, demoras de recarga) para inyectar un contexto hiper-personalizado al canal conversacional [50, 166, 211, 244].

---

## 🔍 4. Caso de Estudio 3: Exacaster – Inteligencia Rápida y el "Gap Radar"

### A. Contexto y Enfoque en Retorno de Inversión (ROI) de CVM
Exacaster identificó que casi el **50% de las ofertas** comerciales diseñadas por las telcos no están optimizadas para un verdadero impacto de negocio [217]. El **30% de los clientes** reportan insatisfacción con las propuestas porque no implican una mejora real en su servicio o son demasiado costosas, mientras que otro **20% acepta promociones que erosionan el margen del negocio** (ej. descuentos agresivos sin blindaje de permanencia o sin incremento de consumo) [217].

### B. Arquitectura Operativa e Instrumentos Clave
Para solventar esto, Exacaster diseñó una suite ágil de CVM (Customer Value Management) que opera sobre un **Customer Data Platform (CDP)** especializado para telecomunicaciones llamado **Exacaster Customer 360** [221, 225]:
*   **Exacaster Customer 360:** Centraliza registros de llamadas (CDRs), telemetría de red, logs de recarga, estados de facturación y dispositivos móviles para calcular **más de 700 métricas por suscriptor** en tiempo real [107, 221].
*   **Gap Radar (Radar de Brechas):** Un algoritmo analítico que rastrea la base de clientes para identificar las brechas de valor y consumo entre su plan contratado y su gasto real [224]. Si un usuario compra constantemente paquetes adicionales de datos porque su plan básico se agota rápido, el "Gap Radar" calcula la tarifa convergente óptima donde el cliente gaste lo mismo o un poco más, pero obtenga un beneficio exponencial de red, bloqueando la fuga [9, 224].
*   **Strategy Designer:** Una consola gráfica intuitiva que permite a los diseñadores de marketing configurar flujos de recomendación, pools de ofertas dinámicas y criterios de elegibilidad sin requerir conocimientos de programación de base de datos [224].

### C. Métricas de Impacto Logradas
*   **50% a 90% de tasas de aceptación de NBO** en renovaciones y migraciones de contratos pospago [220].
*   **5% a 20% de incremento directo en el ARPU** en semanas de ejecución [220].
*   **Despliegue operativo y escalabilidad en la nube** para millones de ofertas en tiempo récord [219, 222].

### D. Cómo lo implementamos en nuestro proyecto ("Movistar Journey Tracker")
1.  **Cálculo Automatizado del Dolor Financiero (Caso Valeria Mendoza):** Utilizaremos la lógica del "Gap Radar" para parametrizar el orquestador [224]. Cuando el sistema detecte que Valeria Mendoza agota sus 20 GB móviles a mitad de mes y gasta un total de S/ 179.80 mediante micro-compras de paquetes adicionales, el orquestador calculará la brecha matemática [224]. Al ofrecerle la unificación en **Movistar Total por S/ 139.90**, el orquestador presentará al asesor la justificación exacta: *"Ofrecer Movistar Total de S/ 139.90. Valeria ahorrará S/ 40.00 mensuales y Movistar asegura la retención de su fibra residencial y su línea móvil"* [224, 252].
2.  **Strategy Designer para Campañas Dinámicas:** La maqueta de back-office contará con un panel simplificado para los líderes comerciales de Movistar Perú, donde podrán arrastrar y soltar nuevas ofertas convergentes en el pool de NBO, regulando las prioridades de conversión según los inventarios de terminales o las metas de crecimiento mensuales [224].

---

## ⚖️ 5. Cuadro Comparativo de Soluciones Globales y Alineación con MJT

El siguiente cuadro resume cómo cada referente internacional inspira y valida las decisiones de diseño del **"Movistar Journey Tracker"** para la Hackathon:

| Dimensión Técnica / Funcional | Benchmark 1: Vodafone (Pega CDH) | Benchmark 2: Nubank (nuFormer) | Benchmark 3: Exacaster (Match App) | Implementación en "Movistar Journey Tracker" (MJT) |
| :--- | :--- | :--- | :--- | :--- |
| **Cerebro Decisional** | Centralizado en un Hub de Decisión en tiempo real [231, 233]. | Redes neuronales de representación y Transformers (nuFormer) [150, 237]. | CDP unificado con motor analítico Match CVM [221, 225]. | **Mega-Orquestador de Procesos**: IA predictiva (Uplift + SHAP) y generativa (E2R2) [59, 166]. |
| **Integración de Datos** | Ingesta omnicanal de eventos de red y CRM [232]. | Transacciones financieras puras en bruto tokenizadas [237]. | Exacaster Customer 360 (CDRs, red, recargas) [221]. | **CDP Unificado bajo arquitectura ODA**: Integración ágil con APIs de TM Forum [2, 107]. |
| **Priorización de Interacciones** | Basada en pesos de negocio, propensiones y límites de canal [140]. | **Problem-Solving First**: Primero resolver el dolor, luego la venta [190]. | Strategy Designer según KPIs comerciales [224]. | **Priorización Ética**: Resolución de reclamos (BrainyBill - Fase 3) es la llave del cross-selling (Fase 1) [3, 207]. |
| **Soporte al Empleado (EX)** | Widget de Next Best Action en la consola del asesor de soporte [140]. | Enfoque 100% autogestionado en aplicación móvil [191]. | Courier enfocado en habilitar ofertas rápidas en canales [224]. | **"Movistar Copilot"**: Ficha única del cliente, transcripción en tiempo real y *Live Whisper* [254]. |
| **Precisión y Mitigación de Errores** | Outbound Model Maturity limitada inicialmente al 2.0% [137]. | rsLoRA para evitar olvido catastrófico y regularización con DCNv2 [90, 244]. | Deal Radar para visualización instantánea de KPIs [218]. | **Enfoque Neuro-Simbólico**: Aritmética determinista en bases de datos y prosa explicativa vía LLM [5, 42]. |

---

## 🛠️ 6. Arquitectura Tecnológica y Estándares para la Viabilidad en Movistar Perú

Para garantizar que el jurado califique con la máxima puntuación el criterio de **Viabilidad y Alineación con Estándares del Sector**, el **"Movistar Journey Tracker"** se estructurará siguiendo los lineamientos de la **Open Digital Architecture (ODA) de TM Forum** y una arquitectura de datos moderna en la nube [2, 202]:

```
+-----------------------------------------------------------------------------------+
|                        ORQUESTADOR DE PROCESOS - CAPA ODA                         |
+-----------------------------------------------------------------------------------+
        │ (TMF683 - Interacción)                         │ (TMF622 - Orden de Venta)
        ▼                                                ▼
+----------------------------------+            +-----------------------------------+
|     FRONTSTAGE (Movistar Copilot)|            |     BACKSTAGE (SON-IA & BSS/OSS)  |
| - Ficha Inteligente del Cliente  |            | - Reconciliación en Tiempo Real   |
| - Live Whisper para Objeciones   |            | - Auditoría Aritmética de Tarifa  |
+----------------------------------+            +-----------------------------------+
        ▲                                                ▲
        │                                                │
        +─────── [ Delta Lake / Databricks Lakehouse ] ──+
                 - Ingesta de CDRs, Facturas y CRM (Bronze)
                 - Enriquecimiento y Customer 360 (Silver)
                 - Modelos de Propensión y Scoring (Gold)
```

1.  **Arquitectura de Datos (Databricks Lakehouse & Delta Lake):**
    *   **Capa Bronze (Ingesta):** Ingestión continua y en tiempo real de registros de llamadas (CDRs), consumos de red móviles, estados de facturación desde Amdocs y datos relacionales del CRM de Salesforce en tablas Delta [202].
    *   **Capa Silver (Enriquecimiento):** Deduplicación y cruce de datos residenciales y móviles para construir la ficha de cliente **Customer 360** (con las 700 métricas que validan el Gap Radar de consumo) [15, 202, 221].
    *   **Capa Gold (Activación):** Modelos de Machine Learning (CatBoost entrenados con stratified cross-validation y explicados con SHAP) que calculan la probabilidad CATE de aceptación de la oferta de Movistar Total y el riesgo de fuga (*churn*) [50, 58, 202].
2.  **Integración Ágil mediante APIs Abiertas de TM Forum:**
    *   **TMF622 (Product Ordering API):** Utilizada para generar el **Key de Seguimiento Único** que viaja a través del "Movistar Journey Tracker" desde que el cliente acepta el plan convergente en el "Concierge Digital" hasta el aprovisionamiento físico en la red de fibra [59, 107].
    *   **TMF683 (Interaction Management API):** Comunica los eventos omnicanal del cliente hacia la consola del asesor de Atento en vivo, eliminando la necesidad de saltar entre múltiples aplicaciones [107, 254].
    *   **TMF678 (Customer Bill Management API) & TMF636 (Billing Management API):** Permiten al motor decisional conectarse con el sistema de facturación central para extraer al instante el desglose de los cobros prorrateados cuando el cliente los consulta [61, 107].

---

## 📈 7. Conclusión y Retorno de Inversión (ROI) Esperado

Al adoptar las metodologías probadas por **Vodafone**, la filosofía de priorización transparente de **Nubank** y las herramientas de análisis de brechas de **Exacaster**, nuestra propuesta unificada no representa un gasto tecnológico experimental, sino una **infraestructura de ingresos autofinanciable** [206]. 

Para las operaciones de Movistar Perú, la implementación de la **Fase 1 (Next Best Offer)** dentro del ecosistema **Movistar Journey Tracker** proyecta los siguientes impactos de negocio (KPIs) en su primer año de despliegue [253]:
*   **Triplicar la Tasa de Conversión:** Pasar del promedio de campañas masivas (5% - 8%) a un **18% - 27% de conversión** en la migración a Movistar Total [48, 253].
*   **Incrementar la Penetración de Movistar Total:** Superar el **50% de participación en las ventas del segmento Hogar**, fortaleciendo una barrera defensiva imbatible contra la portabilidad hacia Claro o Entel [167, 253].
*   **Retención Proactiva de Clientes:** Disminuir en un **25% a 30% la tasa de deserción mensual (*churn*)** de clientes de alto valor, aumentando el Customer Lifetime Value (CLV) promedio de la compañía [48].
*   **Eficiencia Operativa:** Reducir en un **22% el costo de comisiones por venta directa** gracias a que el "Concierge Digital" de autogestión y los copilotos inteligentes guían al cliente y al asesor hacia la firma electrónica con cero fricciones [167, 253].

Este benchmark estratégico demuestra que, al orquestar con Inteligencia Artificial los datos que Movistar ya posee, es completamente viable **crecer en ingresos (ARPU) y mejorar la experiencia del cliente (NPS) de forma simultánea y escalable** [216, 220].
