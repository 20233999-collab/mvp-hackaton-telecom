# Anàlisis pràctico de todo el proceso de Movistar

### Anàlisis pràctico de todo el proceso de Movistar

¡Me parece excelente! Para ganar esos 3 minutos frente al jurado, necesitas que el proceso se sienta tan real que casi puedan escuchar las llamadas y ver las pantallas de los empleados.

Olvidémonos de la teoría y bajemos **"a la cancha"**. Vamos a recorrer el viaje completo de extremo a extremo a través de la historia de dos clientes reales de Movistar Perú: **Valerio Mendoza** y **Juan Carlos Quispe**, junto con los empleados que los atienden.

---

### Acto 1: La Venta Inteligente y Proactiva (Reto 2 - CVM)

- **La cliente:** **Valerio Mendoza**. Ella tiene contratado un plan móvil de S/ 39.90 (20 GB) y fibra hogar de S/ 79.90 (S/ 119.80 en total) 1.

- **El problema real "en la cancha":** Valerio viaja constantemente a Arequipa y Trujillo por su trabajo de diseñadora 1. Constantemente agota sus 20 GB móviles el día 18 del mes y se ve obligada a comprar, con frustración, 4 paquetes "Giga Pass" adicionales (S/ 60.00 extras al mes) 1, 2. Su gasto real promedio mensual se dispara a **S/ 179.80** 3.

- **El proceso tradicional (Silos):** Movistar le enviaría un SMS genérico o la llamaría un asesor de ventas de manera fría diciendo: *"Hola, tengo un plan más caro de S/ 150 para ofrecerte"*. Valerio, ocupada en su viaje, colgaría de inmediato.

- **El viaje bajo el Orquestador:**

- El Orquestador analiza la telemetría de consumo de red de Valerio (ingesta sus patrones de recarga extras y comportamiento) 4.

- El sistema calcula que Valerio califica perfectamente para un plan **Movistar Total** (que unifica su fibra y su móvil en un solo recibo, dándole gigas ilimitados y ahorrándole dinero) 5, 6.

- **Carlos** (un asesor de telemarketing de 22 años de Atento Perú) 7, 8 recibe la llamada de Valerio asignada por su marcador automático 8. En su pantalla única, no tiene un PDF estático; el Orquestador le muestra exactamente: *"Ofrece Movistar Total. Motivo: Se queda sin gigas en el día 18. Beneficio: Gigas ilimitados, mantiene su fibra y pasará a gastar S/ 139.90 en vez de S/ 179.80 (ahorro real de S/ 40.00 al mes)"* 1, 2, 5.

- Carlos lee un pitch sugerido de solo 12 segundos diseñado por el motor de lenguaje: *"Hola Valerio, gracias por tu fidelidad. Veo que viajas mucho y compras gigas extras. ¿Qué te parece si unificamos tu fibra y tu móvil en Movistar Total? Tendrás gigas ilimitados para tus viajes y ahorrarás S/ 40.00 exactos cada mes"* 5, 9.

- Valerio dice: *"¡Me interesa!"* y acepta el cambio en vivo 5.

---

### Acto 2: El Procesamiento en el Back-Office y el Recaudo (Reto 3 - SON-IA)

- **El empleado de operaciones:** **Carlos (Ventas)** y **Ana (Contabilidad de Back-Office)** 8, 10.

- **El problema real "en la cancha":**

- En el Movistar de hoy, tras cerrar la venta, Carlos tiene que registrar la transacción en el CRM Salesforce (comercial) y luego transcribir manualmente la orden técnica en el sistema de red Amdocs (OSS) para que se active la orden 8, 11. Si digita mal un número por la prisa, la orden se cae y Valerio nunca recibe su plan 8.

- Paralelamente, como Valerio cambió de plan a mitad de mes, el sistema contable (SGA) tiene que facturar un **prorrateo** (cobrar los días proporcionales del plan viejo y el plan nuevo) 12, 13.

- Por otro lado, tenemos a **Juan Carlos Quispe**, cliente de fibra con 42 días de mora (deuda de S/ 298.00) que necesita el internet para trabajar como diseñador independiente y tiene su línea suspendida parcialmente 14, 15. Tras recibir una propuesta de fraccionamiento empática por WhatsApp 16, 17, realiza el pago de su primera cuota de S/ 99.33 a través de su App BCP 10, 16, 18.

- *¿El cuello de botella?* Las transacciones bancarias se envían a Movistar por lotes contables (*batch*) al final del día o tardan hasta 48 horas en procesarse 10, 19. Durante ese tiempo, Juan Carlos sigue suspendido a pesar de haber pagado 10.

- **El viaje bajo el Orquestador:**

- El Orquestador automatiza el flujo técnico. Al recibir el "Sí" en el CRM, el sistema conecta las APIs abiertas (TMF622 de órdenes) y actualiza el aprovisionamiento de red en el OSS de manera transparente 20. Carlos no duplica registros; el sistema lo hace por él 8.

- El módulo de facturación de SON-IA procesa el cálculo exacto ((P \times Q)) del prorrateo de Valerio para evitar cobros indebidos en su próximo recibo 13, 19.

- En el caso de Juan Carlos Quispe, en lugar de esperar a que la analista contable Ana descargue manualmente el Excel del banco al día siguiente 10, el Orquestador está conectado por APIs en tiempo real con el portal de recaudación bancaria (como BCP o BBVA) 10, 21.

- En el instante en que Juan Carlos paga en su banca móvil, el Orquestador intercepta el pago, rebaja la deuda en el sistema SGA y envía la orden inmediata de reconexión al sistema STC/Amdocs (red) 10, 11. En menos de 5 minutos, el internet de Juan Carlos se restablece a velocidad normal 10.

---

### Acto 3: La Llegada del Recibo y la Explicación del Bill Shock (Reto 1 - Post-Venta)

- **La cliente:** **Valerio Mendoza**.

- **El problema real "en la cancha":** A fin de mes, Valerio abre su recibo digital y ve que el monto no es el plan plano de siempre, sino que vino con cargos diferentes debido a la porción de días en que se hizo el cambio a mitad de mes (prorrateo) 12, 13. Se asusta y siente el clásico descontento por variación (*Bill Shock*) 22, 23.

- **El proceso tradicional (Silos):** Valerio llama molesta al 104 24. Le contesta **Jorge** (un asesor telefónico presionado para colgar en menos de 180 segundos por TMO) 13. Jorge, apurado por su métrica, intenta explicarle el prorrateo de manera confusa y técnica 13. Valerio no entiende, se frustra, siente que le están cobrando de más y abre un reclamo formal ante OSIPTEL, o inicia su portabilidad a Claro 24, 25.

- **El viaje bajo el Orquestador:**

- Valerio, en vez de llamar al 104, abre su App "Mi Movistar" 26, 27.

- El Orquestador (que sabe que Valerio acaba de migrar de plan y que su recibo varió más de un 20%) activa proactivamente al asistente inteligente **BrainyBill** 20, 24, 28.

- Valerio ve una tarjeta que dice: *"Hola Valerio, notamos que tu recibo de este mes tiene una variación debido a tu exitosa migración a Movistar Total. Aquí te lo explicamos de forma súper sencilla"* 29, 30.

- Valerio le pregunta al chat: *"¿Por qué me vino más de lo acordado?"* 29. El asistente, utilizando una arquitectura CSR-RAG conectada a su base de facturación con 0% alucinaciones 31, 32, le responde en lenguaje natural y visual: *"Tranquila, Valerio. Tu tarifa plana es de S/ 139.90. Este mes ves una diferencia de S/ 15.00 porque incluye: S/ 5.00 proporcionales por los 3 días que usaste tu plan anterior y un descuento promocional ya aplicado. Tu próximo recibo ya vendrá neto por S/ 139.90"* 30, 32.

- Valerio respira aliviada, entiende perfectamente, realiza su pago con un botón directo dentro del mismo chat y cierra la aplicación satisfecha 29, 32.

---

### Acto 4: El Bucle de Retroalimentación y Cross-Selling Restrictivo (Cierre del Ciclo)

- **El proceso real "en la cancha":** Al cerrar Valerio la interacción con conformidad (medido por la tasa de silencio post-atención de la IA) 32, el Orquestador registra este hito positivo en su perfil de CRM 20.

- **El resultado:** Como Valerio está contenta con su servicio y confía en la transparencia de la empresa, el sistema otorga luz verde al motor de ventas (Reto 2) para considerarla apta para futuras ofertas personalizadas (por ejemplo, el financiamiento de un nuevo equipo móvil) 20, 29. El ciclo de vida vuelve a iniciar de manera orgánica y sin saturar de spam al cliente 19, 33.

---

### 💡 ¿Por qué esta narrativa convencerá al Jurado en tu Pitch?

- **Muestra nombres y sistemas reales:** Hablas de la analista *Ana* de back-office contable, de *Jorge* del call center de Atento presionado por los 180 segundos de TMO, de las APIs bancarias y de plataformas core de Movistar como el CRM Salesforce o el facturador SGA 7, 8, 10, 11, 13.

- **Evidencia el cuello de botella físico:** El jurado entenderá perfectamente que el problema de Movistar no es que "no tengan un modelo predictivo", sino que el proceso de ventas, la contabilidad contable de cobros y el soporte técnico no se hablan entre sí en tiempo real 8, 10, 34.

💬 **Ahora que tenemos súper claro el mapa de "la cancha", ¿te gustaría que armemos las ideas concretas para el prototipo visual de este Orquestador (por ejemplo, qué vería el directivo o el empleado en su pantalla)?**

🧩 Podríamos estructurar una pequeña diapositiva para el pitch llamada **"La Pantalla del Asesor vs. El Visor del Cliente"**, mostrando cómo el orquestador unifica todo bajo el capó para hacerle la vida fácil a ambos.