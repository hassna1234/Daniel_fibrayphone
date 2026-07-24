# BUSINESS.md — Fuente de verdad del negocio Fibrayphone

> **Instrucción de uso**
> Este documento es la referencia definitiva del negocio para cualquier agente de IA, desarrollador externo o colaborador que trabaje en este proyecto. Debe leerse completo antes de proponer cualquier cambio, ya sea de código, texto, diseño o estrategia. La ignorancia del negocio produce trabajo técnicamente correcto y comercialmente inútil. Si hay contradicción entre este documento y cualquier otro archivo del repositorio, este documento tiene precedencia.

---

## Principios fundamentales

> Estos ocho principios están por encima de cualquier decisión técnica, creativa o estratégica. No son recomendaciones: son las reglas que definen si un trabajo es correcto o incorrecto para Fibrayphone.

| # | Principio | Implicación práctica |
|---|---|---|
| 1 | **El negocio es más importante que la tecnología** | Ningún cambio técnico justifica poner en riesgo los ingresos, la confianza o el contacto con el cliente. La tecnología sirve al negocio; no al revés. |
| 2 | **La confianza es más importante que el diseño** | Un elemento que genera confianza (reseña real, dato de contacto, transparencia sobre el modelo) no se elimina ni se oculta por razones estéticas. |
| 3 | **La conversión es más importante que la creatividad** | Una propuesta creativa que no mejora WhatsApp, llamadas o formularios no es prioritaria. El criterio de éxito es si más personas contactan con Fibrayphone. |
| 4 | **Nunca romper funcionalidades existentes** | Formulario, WhatsApp, teléfono y email son los canales de ingresos reales. Cualquier cambio que los afecte requiere prueba antes de producción, sin excepciones. |
| 5 | **Si hay duda, preguntar antes de asumir** | Una IA que asume sin evidencia introduce errores con apariencia de verdad. Toda afirmación incierta debe marcarse como tal o consultarse al propietario del negocio. |
| 6 | **Toda afirmación debe poder justificarse** | Precios, estadísticas, perfiles de cliente y comportamientos deben estar respaldados por datos reales del negocio o del repositorio. Si no lo están, se etiquetan como estimación. |
| 7 | **La simplicidad siempre tiene prioridad sobre la complejidad** | La solución más simple que resuelve el problema es la correcta. No se añade complejidad técnica sin una necesidad de negocio documentada. |
| 8 | **Cada cambio debe aportar valor medible** | Antes de aplicar cualquier modificación, debe poder responderse: ¿en qué métrica concreta mejora esto? Si la respuesta es "en ninguna medible", el cambio no es prioritario. |
| 9 | **No asumir información no documentada** | Si un dato (precio, operador, promoción, estadística, proceso interno) no aparece en esta documentación ni en el código, no debe inventarse. Marcarlo como "Pendiente de definir" o consultar al propietario del negocio antes de usarlo. |
| 10 | **Justificar las decisiones** | Toda propuesta relevante debe incluir una explicación breve de por qué mejora el negocio. El argumento debe conectar el cambio con al menos uno de estos cinco criterios: confianza, conversiones, SEO, mantenibilidad o estabilidad del proyecto. |

---

## 1. Qué es Fibrayphone

### 1.1 Historia y origen

Fibrayphone nace en Córdoba en 2022 como respuesta a un problema real y cotidiano: los consumidores tienen dificultades para comparar tarifas de telecomunicaciones y energía porque cada operadora solo ofrece sus propios productos, las condiciones cambian con frecuencia, y la letra pequeña de los contratos está diseñada para confundir más que para aclarar.

El negocio parte de la observación de que en Córdoba, como en muchas ciudades medianas españolas, no existe un intermediario de confianza que ayude a familias y autónomos a tomar estas decisiones sin presión comercial y sin coste. Los comparadores online existen, pero ninguno ofrece atención personalizada presencial ni se hace cargo del proceso de contratación de principio a fin.

Daniel y Hassna abren la tienda en C/ Diego Serrano 13 con un modelo sencillo: atender a cada persona como lo haría un familiar que sabe de tarifas. Sin comisiones escondidas al cliente, sin presión para contratar y con seguimiento real después de la firma.

Desde 2022 han atendido a más de 900 clientes y acumulado más de 200 reseñas de 5 estrellas en Google. Este dato no es decorativo: en un negocio de reputación local, la valoración media de 5,0 es el activo más valioso y el resultado directo de no anteponer la comisión a la honestidad.

### 1.2 Filosofía

La filosofía de Fibrayphone se resume en una frase que aparece literalmente en la web:

> *"No intentamos venderte una compañía. Queremos recomendarte la que realmente mejor encaja contigo."*

Esto tiene consecuencias prácticas que distinguen a Fibrayphone de cualquier tienda de operadora:

- Si la tarifa actual del cliente es la mejor opción para su situación, se le dice. No se cambia por el placer de cobrar una comisión.
- Si una compañía tiene mejor cobertura en el barrio del cliente que otra más barata, se recomienda la de mejor cobertura.
- Si el cliente no está seguro, puede marcharse, pensarlo y volver cuando quiera. Sin seguimiento agresivo.

Esta honestidad no es altruismo; es estrategia. Un cliente que siente que le han tratado bien vuelve cuando necesita cambiar, trae a su familia y deja una reseña de 5 estrellas. Un cliente que siente que le han vendido lo que no necesitaba no vuelve y puede dejar una reseña negativa que cuesta más de recuperar que diez comisiones.

### 1.3 Qué hace diferente a Fibrayphone

**Frente a llamar directamente a una operadora:**
La operadora solo ofrece sus propias tarifas. Su incentivo es maximizar el valor del contrato, no minimizar el gasto del cliente. Su agente de atención al cliente no tiene por qué conocer las condiciones de la competencia. Si el cliente tiene un problema meses después, empieza de cero con otra persona distinta.

En Fibrayphone el cliente siempre habla con el mismo equipo que le asesoró. Si hay un problema, la tienda media y gestiona.

**Frente a un comparador online (HolaMóvil, Kelisto, Rastreator, etc.):**
Los comparadores online muestran resultados de búsqueda. El cliente sigue teniendo que interpretar la información, entender qué condiciones aplican en su dirección, gestionar la portabilidad, llamar para dar la baja en la compañía anterior y resolver problemas si algo falla durante el proceso.

Fibrayphone hace todo eso. El cliente describe su situación; la tienda compara, recomienda, contrata y gestiona la baja anterior. El cliente no hace nada más.

**Frente a una tienda multimarca de operadora:**
Algunas tiendas venden varias operadoras de telecomunicaciones, pero raramente cubren energía y alarmas. Además, su modelo suele estar condicionado por objetivos de venta de marcas específicas.

Fibrayphone cubre cinco categorías (fibra, móvil, luz, gas, alarmas) con independencia real, porque trabaja por comisión y no tiene objetivo de venta por marca.

### 1.4 Por qué existe

Fibrayphone existe porque el mercado español de telecomunicaciones y energía es intencionalmente opaco. Las tarifas cambian cada semana, las promociones tienen fecha de caducidad, las permanencias están escritas en letra de cuerpo seis y el precio del "mes 1" rara vez es el del "mes 13". Navegar este mercado requiere tiempo, paciencia y conocimiento que la mayoría de familias no tienen.

La propuesta de valor es concreta: *alguien que sabe más que tú sobre este mercado te ayuda gratis, te ahorra entre 20 y 30 euros al mes y se encarga del papeleo*.

### 1.5 Posicionamiento en el mercado

Fibrayphone se posiciona como **asesoría de barrio**, no como call center ni como gran plataforma digital. Este posicionamiento es deliberado y tiene implicaciones directas en cómo debe comunicarse el negocio:

- Lo local es una ventaja, no una limitación. Ser conocidos en Córdoba genera confianza que un comparador nacional nunca puede replicar.
- La tienda física es un diferencial, no un coste. En un mundo donde todo es digital, poder hablar cara a cara con un asesor que conoce el barrio es valioso.
- El tamaño humano del equipo es un activo. Los clientes hablan con Daniel o con Hassna. No con un agente anónimo de turno.

El posicionamiento objetivo a medio plazo es ser *la primera referencia en Córdoba* para cualquier duda sobre fibra, móvil, luz, gas o alarmas. No la primera en España. No la más grande. La primera de confianza en su ciudad.

---

## 2. Modelo de negocio

### 2.1 Cómo genera ingresos

Fibrayphone ingresa exclusivamente mediante **comisiones de las compañías** con las que trabaja (operadoras de telecomunicaciones, comercializadoras de energía y empresas de seguridad). Cuando un cliente contrata un servicio a través de Fibrayphone, la compañía paga una comisión a la asesoría por haber captado ese cliente.

El importe y las condiciones de las comisiones varían por compañía, por tipo de servicio y por las condiciones comerciales vigentes en cada momento. Este modelo es estándar en el sector de distribución de telecomunicaciones y energía en España.

### 2.2 El asesoramiento al cliente es completamente gratuito

El cliente no paga nada por la comparativa, la recomendación, la gestión de la contratación ni el seguimiento postventa. Esto es un principio no negociable de Fibrayphone y es transparente al respecto: en el propio formulario de la web se lee literalmente *"Gratis para ti: cobramos comisión a las compañías si contratas. Nunca a ti."*

Esta transparencia no es un eslogan; es la base de la confianza. El cliente que entiende el modelo comprende que Fibrayphone tiene incentivo económico solo si le recomienda algo que de verdad le conviene y que además decide contratar. Un cliente descontento no vuelve, no recomienda y puede dejar una reseña negativa.

Si el cliente viene a comparar y decide no contratar, Fibrayphone no cobra nada y no tiene ningún mecanismo para presionarle. Esto también se comunica activamente: *"Puedes venir, comparar y decidir con calma."*

### 2.3 Diferencia respecto a comparadores online

| Aspecto | Comparador online | Fibrayphone |
|---|---|---|
| Atención | Algoritmo + formulario | Persona real, presencial o por WhatsApp |
| Cobertura | Estimada por código postal | Verificada por dirección exacta |
| Gestión contratación | El cliente llama y tramita | Fibrayphone lo hace todo |
| Gestión baja anterior | El cliente llama a su compañía | Fibrayphone gestiona la baja |
| Portabilidad | El cliente la tramita | Fibrayphone la tramita |
| Postventa | No existe | El cliente llama a la tienda |
| Letra pequeña | El cliente la interpreta | El asesor la explica |
| Actualización de ofertas | Automática, pero sin contexto | Manual, con criterio real |

### 2.4 Diferencia respecto a tiendas oficiales de operadoras

Las tiendas oficiales de Movistar, Orange, Vodafone u otras operadoras tienen un catálogo fijo: sus propios productos. Están incentivadas para maximizar el valor del contrato de su operadora. No tienen acceso ni incentivo para recomendar a la competencia.

Fibrayphone no tiene operadora propia. Trabaja con todas simultáneamente. Su incentivo es encontrar la mejor opción para el cliente, porque eso es lo que genera reseñas positivas, fidelización y nuevos clientes por recomendación.

---

## 3. Servicios

### 3.1 Fibra e internet

**Qué hace Fibrayphone:** Compara la oferta vigente de todas las operadoras con cobertura en la dirección exacta del cliente. No solo el precio del primer mes, sino el coste real a 12 meses. Eso incluye:
- Las subidas de precio al terminar la promoción inicial
- Los cargos de instalación, si los hay
- Las condiciones de permanencia y penalizaciones por baja anticipada

**Valor para el cliente:** El mercado de fibra en España tiene una horquilla de precios amplia. La diferencia entre lo que el cliente paga sin comparar y lo que pagaría con la tarifa adecuada puede ser sustancial. Fibrayphone la calcula con datos reales. *(Ver precios orientativos en Información variable.)*

**Qué gestiona:** Alta del servicio nuevo, comprobación de cobertura real en la dirección (no todos los edificios tienen fibra de todas las operadoras), gestión de la baja del servicio anterior, coordinación de la instalación si hace falta técnico.

**Condición para una buena recomendación:** Verificar la cobertura exacta antes de recomendar. Una oferta barata sin cobertura en la calle del cliente no es una oferta.

### 3.2 Telefonía móvil

**Qué hace Fibrayphone:** Analiza el consumo real del cliente (gigas usados al mes, número de llamadas, si viaja al extranjero, número de líneas en el hogar) y compara entre operadoras. El objetivo es encontrar la tarifa que cubra las necesidades reales sin pagar por gigas que no se usan.

**Valor para el cliente:** Muchos usuarios llevan años con la misma tarifa sin revisarla. El mercado de móvil español ha cambiado: existen operadores con precios muy inferiores a los de las grandes operadoras de hace cinco años. Fibrayphone analiza el consumo real del cliente para encontrar la tarifa que le corresponde, no la más cara ni la más barata de forma ciega. *(Precios de referencia del mercado actual en Información variable.)*

**Qué gestiona:** Contratación de la nueva línea, portabilidad del número (el cliente conserva su número), baja con la operadora anterior. El cliente no tiene que llamar a nadie.

### 3.3 Pack fibra + móvil (y TV)

**Qué hace Fibrayphone:** Analiza si al cliente le compensa contratar fibra y móvil por separado o en pack. Los packs de operadora pueden ser más baratos o más caros que la combinación de servicios independientes, dependiendo del momento y la operadora. No hay una respuesta genérica.

**Valor para el cliente:** El pack más solicitado en Fibrayphone es fibra + 2 líneas móviles + acceso a plataformas de streaming. El cliente que lleva años con la misma operadora sin comparar suele encontrar diferencias de precio significativas. *(Precio orientativo vigente en Información variable.)*

**TV y plataformas:** Fibrayphone puede incluir acceso a Netflix, HBO Max, Disney+ y Prime Video dentro de los packs de algunos operadores. Se verifica qué plataformas incluye cada pack antes de recomendarlo.

### 3.4 Electricidad (luz)

**Qué hace Fibrayphone:** Analiza la factura actual de electricidad del cliente. Con la factura en mano, el asesor puede calcular cuánto pagaría con tarifa fija de distintas comercializadoras y compararlo con la tarifa indexada (PVPC) que suele tener el cliente de forma predeterminada.

**Valor para el cliente:** El mercado eléctrico español es volátil. El PVPC puede ser barato en algunos períodos y muy caro en otros. Una tarifa fija elimina esa incertidumbre. El ahorro real depende del perfil de consumo de cada cliente; Fibrayphone lo calcula con la factura en mano antes de recomendar el cambio. *(Ahorro orientativo en Información variable.)*

**Qué explica el asesor:** La diferencia entre tarifa fija e indexada. Los períodos de consumo (punta, llano, valle) y si el cliente tiene discriminación horaria o no. Si merece la pena cambiar de potencia contratada. El proceso de cambio de comercializadora (no hay corte de suministro, el cambio es administrativo).

**Qué gestiona:** Alta con la nueva comercializadora, gestión de la baja con la actual. El cliente no tiene que llamar a Iberdrola ni a Endesa.

### 3.5 Gas natural

**Qué hace Fibrayphone:** Compara tarifas de gas entre comercializadoras. El gas natural se usa principalmente para calefacción, agua caliente y cocina. El consumo varía enormemente según el tipo de vivienda y los hábitos del cliente.

**Valor para el cliente:** Al igual que con la luz, muchos clientes tienen la tarifa por defecto de su distribuidora sin haber comparado. Cambiar de comercializadora de gas puede suponer un ahorro significativo en los meses de mayor consumo (octubre–marzo).

**Qué explica el asesor:** La diferencia entre el mercado libre y la tarifa regulada (TUR). Tarifa fija vs. indexada al mercado. Qué pasa si el precio del gas sube en mercado libre con tarifa fija (nada: el precio está garantizado).

**Qué gestiona:** Alta con la nueva comercializadora de gas. El cambio no implica corte de suministro. La gestión es puramente administrativa.

### 3.6 Alarmas y sistemas de seguridad

**Qué hace Fibrayphone:** Compara sistemas de alarma con conexión a central receptora de alarmas (CRA). Analiza las necesidades del hogar o local del cliente (superficie, número de plantas, si hay jardín, si es primer o último piso) y compara entre las empresas disponibles.

**Valor para el cliente:** El mercado de alarmas tiene contratos de permanencia largos (36–60 meses) y cuotas mensuales que varían según los servicios incluidos. Cambiar de empresa de alarmas sin ayuda puede ser complicado porque las compañías ponen obstáculos al proceso de baja. Fibrayphone gestiona esa baja, que es uno de los puntos de dolor más habituales de los clientes.

**Precio orientativo:** Variable según empresa y configuración. *(Precio de referencia actual en Información variable.)*

**Qué gestiona:** Contratación de la nueva alarma, gestión de la baja de la alarma anterior. El cliente no tiene que llamar a su empresa de alarmas actual ni enfrentarse a la retención telefónica.

---

## 4. Qué comercializa Fibrayphone

> **Aviso:** Esta tabla refleja el catálogo vigente en julio de 2026. Los acuerdos con operadoras pueden cambiar. Antes de publicar contenido específico de una compañía, verificar que sigue en el catálogo activo.

### Telecomunicaciones (fibra y móvil)

| Operadora | Tipo |
|---|---|
| Movistar | Fibra, móvil, packs |
| Orange | Fibra, móvil, packs |
| Vodafone | Fibra, móvil, packs |
| Yoigo | Fibra, móvil, packs |
| MásMóvil | Fibra, móvil, packs |
| Digi | Fibra, móvil |
| O2 | Fibra, móvil |
| Pepephone | Fibra, móvil |
| Lowi | Fibra, móvil |
| Jazztel | Fibra, móvil, packs |
| PTV Telecom | Fibra, móvil |
| Simyo | Móvil |

### Energía (luz y gas)

| Comercializadora | Tipo |
|---|---|
| Iberdrola | Luz, gas |
| Endesa | Luz, gas |
| Naturgy | Luz, gas |
| Repsol | Luz, gas |
| TotalEnergies | Luz, gas |
| Holaluz | Luz |
| Octopus Energy | Luz |
| Gana Energía | Luz |
| Lucera | Luz |
| CHC Energía | Luz |

### Seguridad y alarmas

| Empresa | Tipo |
|---|---|
| Segurma | Alarma con CRA |
| Movistar Prosegur | Alarma con CRA |
| Verisure | Alarma con CRA |

---

## 5. Qué NO comercializa Fibrayphone

Este apartado es tan importante como el anterior. Una IA que proponga contenido, servicios o integraciones fuera de este ámbito generará confusión, expectativas falsas o problemas legales.

Fibrayphone no ofrece, no vende, no intermedia y no gestiona:

**Servicios financieros y seguros**
- Seguros de hogar, vida, salud o coche
- Préstamos, financiación o productos bancarios
- Planes de pensiones o productos de inversión

**Hardware y venta de dispositivos**
- Venta de teléfonos móviles, routers, repetidores o cualquier dispositivo
- Reparación de dispositivos
- Accesorios o periféricos

**Instalaciones y obra**
- Instalaciones eléctricas (electricistas)
- Instalaciones de fontanería, gas (fontaneros, gasistas)
- Obra civil o reformas
- Instalación de paneles solares (salvo que Fibrayphone lo incorpore expresamente en el futuro)

**Conectividad no estándar**
- Internet por satélite (Starlink, HughesNet)
- Antenas de radio o WiMax para zonas sin cobertura de fibra
- Redes corporativas o soluciones empresariales complejas (SD-WAN, MPLS)

**Gestiones públicas y subvenciones**
- Bonos sociales eléctricos o de gas (aunque puede informar sobre su existencia)
- Solicitudes de ayudas o subvenciones gubernamentales
- Trámites con la Administración Pública

**Servicios fuera del ámbito geográfico**
- Fibrayphone opera principalmente en Córdoba y área metropolitana. No tiene capacidad operativa para gestionar servicios en otras provincias, aunque puede dar información orientativa.

**Televisión de pago directa**
- No vende suscripciones directas a Netflix, Disney+ u otras plataformas. Puede incluirlas como parte de un pack de operadora, pero no es distribuidor directo de estas plataformas.

---

## 6. Objetivo principal del negocio

### 6.1 La métrica que importa

El objetivo de Fibrayphone es **aumentar el número de contratos cerrados**. Todo lo demás es instrumental. La web más bonita del mundo sin leads es un fracaso. Un cliente que entra a la tienda o escribe por WhatsApp y contrata es un éxito.

Esto no significa que la imagen, el SEO o la experiencia de usuario sean irrelevantes. Significa que deben evaluarse siempre en función de si contribuyen o no a que más personas de Córdoba contacten con Fibrayphone.

### 6.2 Cómo se construye la confianza local

En un negocio de asesoría local, la confianza es la única ventaja competitiva sostenible. No el precio (las comisiones de las operadoras son similares para todos los distribuidores), no la tecnología (cualquier comparador online tiene más herramientas digitales) y no la publicidad (Fibrayphone no puede competir en inversión publicitaria con Movistar o Iberdrola).

La confianza se construye con:

1. **Honestidad sobre el modelo de negocio.** Los clientes saben que Fibrayphone cobra comisión. Eso no es un problema; es un contrato social claro.

2. **Resultados reales.** Un cliente que ahorra 25 €/mes en la factura de la luz lo cuenta en el trabajo, en el vecindario, en la familia.

3. **Facilidad de acceso.** Sin cita previa, sin formularios interminables, sin call centers. La tienda está ahí, el WhatsApp está ahí.

4. **Seguimiento postventa.** Si el nuevo contrato tiene un problema, el cliente llama a Daniel o a Hassna. No a un 800 de atención al cliente.

5. **Presencia en Google.** 200+ reseñas de 5,0 ★ son el equivalente digital del boca a boca. Cada nueva reseña es un activo acumulativo que reduce el coste de adquisición de los siguientes clientes.

### 6.3 Lo que NO es el objetivo

- No es tener la web más innovadora del sector
- No es posicionarse en Madrid, Barcelona o a nivel nacional
- No es automatizar el proceso de comparativa (el asesor humano es el producto)
- No es escalar a franquicia o modelo nacional en el corto plazo
- No es captar clientes que no vivan en Córdoba y área metropolitana

---

## 7. Perfil del cliente ideal

### 7.1 Particular adulto

**Quién es:** Adulto residente en Córdoba con uno o varios contratos de telecomunicaciones o energía que no ha revisado en mucho tiempo. Sospecha que está pagando de más pero no tiene ni el tiempo ni las ganas de comparar por su cuenta.

**Cómo llega a Fibrayphone:** Por recomendación de un familiar o vecino ("me han dicho que en Diego Serrano os ayudan a comparar"), por una reseña de Google, o porque pasaba por la calle y vio la tienda.

**Qué necesita:** Alguien que le explique sin tecnicismos cuánto puede ahorrar y se ocupe de todo el proceso. No quiere hacer nada más que tomar la decisión.

**Qué le genera confianza:** Que le digan la verdad, aunque esa verdad sea que no merece la pena cambiar en este momento. Que el asesor tenga paciencia para explicar la letra pequeña. Que pueda venir en persona y hablar cara a cara.

**Qué le genera desconfianza:** La presión para firmar el mismo día, las promesas demasiado buenas, las comisiones ocultas.

### 7.2 Familia con varias líneas

**Quién es:** Unidad familiar con 2–4 miembros, cada uno con su línea móvil. Suelen tener también fibra, y a menudo también luz y gas. Son el perfil con mayor potencial de ahorro porque aglutinan varios contratos que comparar.

**Qué necesita:** Un pack que cubra a toda la familia a un precio razonable. Valoran que alguien gestione todas las portabilidades sin que nadie se quede sin cobertura durante el proceso.

**Ticket habitual:** Pack fibra + 2–3 móviles, a veces con TV y plataformas. Son el perfil con mayor potencial de ahorro porque acumulan varios contratos sin revisar.

### 7.3 Autónomo

**Quién es:** Trabajador por cuenta propia con local o despacho en Córdoba, o que trabaja desde casa. Necesita fibra fiable para trabajar, una o varias líneas móviles de empresa, y a menudo también tiene factura de luz del local.

**Qué necesita:** Estabilidad más que precio mínimo. Un autónomo no puede permitirse quedarse sin internet por una mala migración. Valora que Fibrayphone gestione el proceso sin fricciones y que haya alguien a quien llamar si hay un problema.

**Diferencial relevante:** Algunas operadoras ofrecen tarifas y condiciones específicas para autónomos (fibra simétrica, SLA, etc.). El asesor debe conocer estas diferencias.

### 7.4 Pequeña empresa

**Quién es:** PYME con sede en Córdoba, de 2 a 15 empleados. Tiene varias líneas móviles, posiblemente centralita virtual, internet del local y factura de luz y gas.

**Qué necesita:** Alguien que centralice todos sus contratos de telecomunicaciones y energía y los optimice. Aprecia la eficiencia de no tener que gestionar varios proveedores por separado.

**Potencial de ahorro:** Mayor que el particular, porque acumula varios contratos (móviles, fibra de empresa, luz del local). El ahorro depende del volumen contratado y del tiempo que lleven sin revisar.

### 7.5 Cliente que NO es prioritario para Fibrayphone

- Persona que busca autogestión digital total y no quiere hablar con nadie
- Residente fuera del área de Córdoba que no puede desplazarse ni ser atendido de forma remota con efectividad
- Cliente que solo busca el precio mínimo absoluto sin importar la calidad del servicio ni el proceso de cambio
- Empresas con necesidades de telecomunicaciones corporativas complejas (data centers, redes WAN, infraestructura IT)
- Cliente que quiere comparar solo para informarse sin ninguna intención real de contratar (se atiende, pero no es el perfil objetivo)

---

## 8. Objetivos de la web (fibrayphone.es)

### 8.1 Función de la web

La web de Fibrayphone tiene una función única y bien definida: **convertir visitantes en leads**. Un lead es una persona que ha dado el primer paso para contactar con la asesoría.

La web no es:
- Un comparador automático que resuelve la consulta sin intervención humana
- Un catálogo de tarifas actualizado en tiempo real
- Una tienda online
- Un portal informativo genérico sobre telecomunicaciones

La web es el escaparate digital de una asesoría presencial. Su misión es generar suficiente confianza y facilitar suficientemente el contacto como para que el visitante dé el paso siguiente: escribir por WhatsApp, llamar o rellenar el formulario.

### 8.2 Jerarquía de canales de contacto

El orden de prioridad no es arbitrario; responde a la lógica del comportamiento de compra en servicios de asesoría local:

**1. WhatsApp (prioridad máxima)**
Es el canal con mayor tasa de conversión. El cliente que abre WhatsApp ya está en un contexto de conversación personal. El paso de escribir un mensaje es mínimo. La probabilidad de que esa conversación acabe en visita o contrato es alta. En Fibrayphone, WhatsApp tiene múltiples puntos de entrada en la página (header, hero, sección de servicios, sección vs, sección de pasos, barra móvil, FAB) y cada uno tiene un mensaje contextual preescrito que facilita el inicio de la conversación.

**2. Llamada (prioridad alta)**
El cliente que llama tiene una intención de compra muy alta. No hay fricción de escritura. La conversación es inmediata. Debe ser posible llamar desde cualquier dispositivo con un solo toque.

**3. Formulario (prioridad media)**
El formulario captura leads que no quieren iniciar una conversación en tiempo real. Es asíncrono: el cliente deja sus datos y la tienda responde el mismo día en horario de apertura. El formulario actual redirige a WhatsApp al enviar (el cliente envía un mensaje por WhatsApp con sus datos preformateados) y simultáneamente envía una copia por email a `info@fibrayphone.es` via Resend.

**4. Visita directa a tienda (prioridad complementaria)**
El cliente que entra a la tienda sin haber contactado previamente es el de mayor nivel de confianza previo (viene por recomendación directa de alguien). No tiene un punto de entrada digital específico, pero la dirección, el mapa y el horario deben estar siempre visibles y correctos.

### 8.3 Por qué este orden y no el inverso

Cualquier propuesta que añada fricción antes de que el cliente llegue a WhatsApp o al teléfono es una propuesta que reduce conversiones. Ejemplos de fricción innecesaria que deben evitarse:

- Páginas de registro previo antes de mostrar información
- Formularios con más de cuatro campos (nombre, teléfono, servicio, privacidad es el mínimo viable)
- Pop-ups que bloquean el contenido
- Tiempos de carga superiores a 2–3 segundos
- Navegación compleja que aleja al usuario del CTA
- Chatbots que intentan resolver la comparativa de forma automática (destruyen la propuesta de valor humana)

### 8.4 Métricas de seguimiento (GA4)

Los eventos configurados en `js/main.js` que miden el rendimiento de la web:

| Evento GA4 | Qué mide |
|---|---|
| `clic_whatsapp` | Todo clic en cualquier botón de WhatsApp, con parámetro `punto` (hero, formulario, servicios, etc.) |
| `clic_llamar` | Todo clic en el número de teléfono, con parámetro `punto` |
| `generate_lead` | Envío del formulario (abre WhatsApp con datos), con parámetros `method` y `service` |
| `formulario_enviado` | Confirmación de que el email de lead llegó correctamente |
| `clic_email` | Clic en el enlace de email |
| `clic_como_llegar` | Clic en el enlace de Google Maps |
| `clic_ver_reseñas` | Clic en "Ver todas las reseñas en Google" |

El seguimiento de campaña está implementado con UTM params estándar y con el parámetro `?from=maps` específico para tráfico desde Google Maps. Los parámetros se eliminan de la barra de navegación después de registrarse (history.replaceState) para mantener la URL limpia.

---

## 9. Cómo debe tomar decisiones una IA

Antes de proponer cualquier cambio en este proyecto, una IA debe aplicar este proceso de evaluación en orden estricto. No es un checklist opcional; es un filtro obligatorio.

### Pregunta 1: ¿Rompe alguna funcionalidad existente?

Si la respuesta es sí o "no estoy seguro", el cambio no puede aplicarse sin pruebas exhaustivas. Las rutas críticas que nunca pueden romperse:

- El formulario de contacto captura nombre, teléfono, servicio y consentimiento de privacidad, y abre WhatsApp con los datos preformateados
- Simultáneamente, el formulario envía los datos al endpoint `/api/send-lead` que reenvía por email a `info@fibrayphone.es`
- Todos los botones de WhatsApp del sitio generan la URL correcta con el mensaje contextual apropiado
- El número de teléfono es clicable (`tel:`) en todos los dispositivos
- La web carga en menos de 3 segundos en conexión 4G

Si un cambio toca cualquiera de estos elementos, debe probarse en local antes de hacer push.

### Pregunta 2: ¿Aumenta la confianza del visitante?

La confianza en una web de asesoría local se construye con: reseñas reales, datos de contacto verificables, dirección física visible, equipo humano identificable, transparencia sobre el modelo de negocio y ausencia de promesas irreales. Un cambio que elimine alguno de estos elementos en nombre del "minimalismo" o la "modernidad" reduce la confianza aunque mejore la estética.

### Pregunta 3: ¿Aumenta las conversiones?

Un cambio que no mejora las métricas de `clic_whatsapp`, `clic_llamar` o `generate_lead` no es prioritario. Esto aplica a rediseños visuales, reorganizaciones de contenido, nuevas secciones informativas y cualquier mejora que no tenga un mecanismo claro de impacto en la tasa de contacto.

Si la IA no puede explicar con claridad por qué el cambio propuesto debería aumentar conversiones, debe reconsiderar la propuesta.

### Pregunta 4: ¿Mejora o mantiene el SEO?

La web está posicionada localmente en Córdoba para búsquedas como "comparativa fibra Córdoba", "asesoría telecomunicaciones Córdoba", "comparar luz gas Córdoba". Cualquier cambio que afecte a:

- El título (`<title>`) o la meta descripción
- Los encabezados `<h1>`, `<h2>` y su jerarquía
- El Schema.org LocalBusiness y FAQPage en el `<head>`
- La URL canónica
- El sitemap.xml
- La velocidad de carga (Core Web Vitals)

...debe evaluarse antes de aplicarse. Si el cambio mejora el SEO, adelante. Si lo perjudica, no se aplica aunque mejore la estética.

### Pregunta 5: ¿Mantiene o mejora el rendimiento?

La web actual no tiene ninguna dependencia JavaScript de terceros en el critical path. No hay React, no hay Vue, no hay jQuery. Carga un CSS propio y dos JS propios. Cualquier dependencia nueva debe justificar su peso en términos de impacto real en el negocio.

### Si la respuesta a alguna de estas preguntas es negativa

La IA debe:
1. Explicar por qué el cambio propuesto no supera el filtro
2. Proponer una alternativa que sí lo supere, o
3. Indicar que no hay alternativa válida y que el cambio no debe realizarse

No es aceptable aplicar un cambio que no supera este filtro con el argumento de que "mejora el código" o "es más moderno".

---

## 10. Prioridades absolutas

Las siguientes son reglas no negociables. No admiten excepciones salvo instrucción explícita y documentada del propietario del negocio.

### 10.1 Nunca romper funcionalidades existentes

El formulario, el WhatsApp, el teléfono y el email son los canales de ingresos del negocio. Romper cualquiera de estos elementos equivale a cerrar la caja registradora. Todo cambio en estas áreas requiere prueba en local antes de push a main, y verificación posterior en producción.

### 10.2 Nunca perjudicar el SEO local

El posicionamiento en Google para búsquedas locales de Córdoba ha costado tiempo y clientes reales. No se cambian URLs, títulos, encabezados ni metadatos sin analizar el impacto SEO. No se elimina el Schema.org por "limpiar el HTML". No se añaden redirecciones sin verificar que no rompen el canonical.

### 10.3 Nunca reducir la velocidad sin una razón con más peso

La velocidad de carga es un factor de conversión directo (el visitante que espera, abandona) y un factor de SEO (Google penaliza las páginas lentas). No se añaden scripts de terceros, imágenes sin comprimir, fuentes web externas ni animaciones JavaScript sin verificar el impacto en los Core Web Vitals.

### 10.4 Nunca cambiar la identidad visual sin instrucción explícita

Los colores corporativos, el logotipo y la tipografía no se modifican porque "queda mejor" o porque "hay una tendencia nueva". La identidad visual de Fibrayphone está definida en `css/styles.css` mediante variables CSS. Si hay que modificarla, el propietario del negocio debe aprobarlo explícitamente.

### 10.5 Nunca eliminar el formulario de contacto

El formulario es un canal de captación de leads. Existe porque hay personas que no quieren abrir WhatsApp ni llamar, pero sí están dispuestas a dejar sus datos. Eliminar el formulario elimina ese segmento de leads. No importa cuánto se simplifique la web; el formulario permanece.

### 10.6 Nunca eliminar ni ocultar botones de WhatsApp

WhatsApp es el canal de mayor conversión. La web tiene múltiples puntos de entrada porque distintos usuarios se deciden en momentos distintos del scroll: algunos al ver el hero, otros al leer las ofertas, otros al revisar las opiniones. Reducir esos puntos de entrada por "limpieza visual" elimina oportunidades reales de contacto.

### 10.7 Nunca eliminar ni reescribir reseñas de clientes reales

Las reseñas son el testimonio de personas reales que han pasado por la tienda. No son contenido de marketing; son evidencia social auténtica. No se sintetizan, no se reescriben para que "suenen mejor", no se eliminan porque "ocupan espacio". Si hay nuevas reseñas reales que añadir, se añaden. Si hay reseñas desactualizadas o incorrectas, se consulta al propietario antes de modificar.

### 10.8 Nunca añadir complejidad que el equipo no pueda mantener

Fibrayphone es un negocio pequeño gestionado por dos personas. Cualquier sistema, panel, CMS, base de datos o integración que requiera conocimientos técnicos avanzados para su mantenimiento diario es inapropiado para este contexto. La solución más simple que resuelve el problema es siempre la mejor opción.

### 10.9 Nunca complicar el proceso de contacto

Cada paso adicional entre el visitante y el contacto con la asesoría reduce la tasa de conversión. No se añaden pantallas de validación, captchas complejos, páginas de confirmación intermedias ni flujos multistep sin una razón de negocio muy sólida.

### 10.10 Nunca usar datos de contacto incorrectos o desactualizados

El teléfono, el WhatsApp, el email, la dirección y el horario deben ser siempre correctos. Un cliente que llama a un número equivocado o que se persona en la tienda fuera de horario por información incorrecta de la web es una pérdida de confianza irreversible. Estos datos están centralizados en `js/config.js` para facilitar su actualización.

---

## 11. Tono de comunicación

### 11.1 Descripción del tono

El tono de Fibrayphone es el de un asesor experto de confianza que conoce al cliente desde hace tiempo. No el de un vendedor que intenta cerrar una venta. No el de una corporación que se dirige a sus stakeholders. No el de un comparador online que optimiza para el CTR.

Los cinco atributos del tono:

**Cercanía:** Se habla de tú al cliente, siempre. El equipo se identifica con nombres reales. Se menciona el barrio, la calle, la tienda física. La comunicación refleja que Fibrayphone forma parte del tejido local de Córdoba.

**Honestidad:** Se admite que el modelo de negocio implica comisiones. Se reconoce que el cliente puede venir y no contratar. Se dice la verdad sobre los precios ("son orientativos, dependen de tu dirección y del momento"). No se promete lo que no puede garantizarse. Esta honestidad no es debilidad; es la base del posicionamiento.

**Claridad:** Los conceptos técnicos se explican en lenguaje cotidiano. "Letra pequeña" en lugar de "cláusulas contractuales". "Lo que pagarás el mes 13" en lugar de "coste total sin promoción". "Nos encargamos de la baja" en lugar de "gestionamos la portabilidad y rescisión contractual". Si un texto requiere más de una lectura para entenderse, está mal escrito.

**Profesionalidad:** La cercanía no implica informalidad excesiva. El tono es el de un profesional competente, no el de un amigo sin filtros. Los errores gramaticales, las mayúsculas innecesarias y los signos de exclamación múltiples no tienen lugar.

**Sin presión:** No hay urgencia artificial, no hay escasez fabricada, no hay "oferta solo hoy". El cliente decide cuando quiere. Fibrayphone no necesita presionar porque su propuesta de valor habla por sí sola.

### 11.2 Palabras y construcciones que sí se usan

- "Comparamos por ti"
- "Sin compromiso"
- "Gratis para ti"
- "Te explicamos la letra pequeña"
- "Decides tú"
- "Puedes venir cuando quieras"
- "Nuestros clientes ahorran…"
- "Si no contratas, no te cobramos nada"
- "Nos encargamos de todo"

### 11.3 Palabras y construcciones que NO se usan

- "¡Oferta irrepetible!" — urgencia artificial
- "El mejor precio del mercado" — promesa sin respaldo específico
- "Soluciones integrales" — jerga corporativa sin significado
- "Optimice su ahorro energético" — registro formal e impersonal
- "No espere más" — presión innecesaria
- "¡Llame ahora!" — agresividad comercial
- Anglicismos innecesarios cuando existe equivalente en español claro
- Emojis en exceso en textos de cuerpo (los emojis funcionales en listas o bullets son aceptables)

### 11.4 Ejemplo de contraste

**Incorrecto:**
*"¡Maximice su ahorro! Nuestras soluciones de comparativa de tarifas energéticas y de telecomunicaciones le permitirán optimizar su gasto mensual con las mejores condiciones del mercado. ¡No espere más, contáctenos hoy!"*

**Correcto:**
*"Trae tu factura de la luz y te decimos cuánto puedes ahorrar. Nuestros clientes ahorran entre 20 y 30 € al mes. El estudio es gratuito y sin compromiso."*

La diferencia no es solo de estilo; es de credibilidad. El primer texto podría pertenecer a cualquier empresa. El segundo texto solo puede pertenecer a alguien que conoce el negocio.

### 11.5 Tono en distintos contextos

**En el hero de la web:** Directo, orientado al beneficio real, con la garantía de gratuidad y sin compromiso como elemento central.

**En las descripciones de servicios:** Específico, con cifras concretas (precio orientativo, ahorro típico), sin ambigüedades.

**En el formulario:** Transparente sobre el proceso (qué pasa después de enviarlo), sin fricción adicional.

**En las FAQs:** Conversacional, como si el asesor respondiera en persona. Completo pero no exhaustivo.

**En los mensajes de WhatsApp preformateados:** Concreto y personalizado por servicio. El mensaje del formulario incluye los datos del cliente para que la tienda pueda responder sin pedir información adicional.

---

## 12. Cómo debe pensar un desarrollador que trabaje para Fibrayphone

### 12.1 Mentalidad de negocio antes que de tecnología

Un desarrollador que trabaje para Fibrayphone no tiene como función principal escribir código elegante. Su función es ayudar a que más personas de Córdoba contraten a través de Fibrayphone. El código es el medio, no el fin.

Esto significa:
- Antes de refactorizar, preguntarse si la refactorización mejora algo que el cliente nota
- Antes de añadir una dependencia, preguntarse si el problema que resuelve no puede resolverse con menos código
- Antes de rediseñar, preguntarse si el diseño actual tiene algún problema que afecte al cliente o a la conversión

### 12.2 Simplicidad como principio de ingeniería

El stack es deliberadamente simple. Esta simplicidad tiene valor concreto: cualquier persona con conocimientos básicos puede entender cómo funciona, no hay dependencias que deprecarse ni procesos de build que mantener. La arquitectura completa está en §12.5.

Añadir un framework, un bundler o un CMS solo está justificado si resuelve un problema real y documentado, no si "es lo que se usa ahora" o "escala mejor".

### 12.3 Principio de no duplicación

- Toda la configuración editable está en `js/config.js`. No se dispersan valores configurables en el HTML ni en el CSS.
- Los colores corporativos están en variables CSS en `:root`. No se usan valores hexadecimales directos en ningún lugar del CSS.
- Los mensajes de WhatsApp están centralizados en `js/main.js`. No se hardcodea el número ni el mensaje en el HTML.

Cualquier valor que pueda necesitar actualizarse en el futuro debe estar en un único lugar.

### 12.4 Principio de análisis antes de modificación

Antes de modificar cualquier función de `js/main.js`, hay que entender qué hace, por qué está así y qué otras partes dependen de ella. Este archivo gestiona:

- Generación de URLs de WhatsApp con mensaje contextual por punto de entrada
- Configuración de los dos CTAs específicos del hero (`#wa-hero-comparativa`, `#wa-hero-asesor`)
- Menú móvil (apertura, cierre, accesibilidad ARIA)
- Aplicación de datos de contacto desde `config.js` al DOM
- Renderizado de reviews y marcas desde `config.js`
- Tracking de campaña desde parámetros UTM y `?from=maps`
- Limpieza de parámetros de tracking de la barra de navegación
- Inicialización de GA4 y disparo de todos los eventos
- Modal de política de privacidad
- Validación, envío del formulario y apertura de WhatsApp con datos del lead
- Carga de fotos de tienda con fallback progresivo a SVG
- Mensajes de WhatsApp contextuales por categoría de servicio
- Indicador de estado de apertura de la tienda en tiempo real (zona horaria Madrid)

Cada función tiene un propósito de negocio directo. Eliminar o simplificar sin entender ese propósito puede romper algo que genera leads.

### 12.5 Arquitectura técnica de referencia

```
fibrayphone-landing/
├── index.html              # Página única. Todo el contenido HTML, Schema.org y metadatos SEO
├── css/
│   └── styles.css          # Estilos completos. Variables CSS en :root. Sin framework externo
├── js/
│   ├── config.js           # Punto único de configuración: teléfono, reviews, marcas, GA4, fotos
│   └── main.js             # Toda la lógica de interacción. IIFE sin dependencias externas
├── api/
│   └── send-lead.js        # Vercel Function. Recibe el formulario y envía email via Resend
├── assets/                 # Logos SVG, favicon, fotos de tienda (.webp)
├── sitemap.xml             # Sitemap para Google Search Console
├── vercel.json             # Config de deploy: cleanUrls, trailingSlash false, framework null
└── package.json            # Una sola dependencia: resend ^4.0.0
```

### 12.6 Variables de entorno en producción

| Variable | Configuración | Función |
|---|---|---|
| `RESEND_API_KEY` | Vercel → Settings → Environment Variables | Autoriza el envío de emails desde `api/send-lead.js` |

Sin esta variable, el formulario sigue funcionando (abre WhatsApp con los datos del cliente), pero no se envía la copia por email a `info@fibrayphone.es`.

### 12.7 Colores corporativos — referencia completa

| Variable CSS | Valor | Uso |
|---|---|---|
| `--brand` | `#00A9C6` | Color principal de marca (cyan del logo) |
| `--brand-dark` | `#008da6` | Hover de elementos primarios |
| `--brand-darker` | `#006f84` | Estados activos, focus |
| `--brand-light` | `#e5f7fa` | Fondos suaves, secciones alt |
| `--brand-muted` | `#7fd4e4` | Elementos decorativos secundarios |
| `--navy` | `#0f2744` | Header, footer, fondos oscuros |
| `--navy-dark` | `#0a1c33` | Variante más oscura del navy |
| `--white` | `#ffffff` | Fondos blancos |
| `--bg` | `#f4fbfc` | Background general de la página |
| `--text` | `#1e293b` | Texto principal de cuerpo |
| `--muted` | `#64748b` | Texto secundario, labels |
| `--border` | `#dceef2` | Bordes de elementos |
| `--success` | `#059669` | Mensajes de confirmación, estados positivos |
| `--shadow` | `0 4px 24px rgba(0,109,132,0.1)` | Sombra estándar de cards |
| `--shadow-lg` | `0 12px 40px rgba(0,109,132,0.14)` | Sombra de elementos destacados |
| `--radius` | `14px` | Border-radius estándar de componentes |
| `--max` | `1120px` | Ancho máximo del contenedor |

### 12.8 Verificación antes de cualquier push a main

1. El formulario envía correctamente y abre WhatsApp con los datos del cliente
2. El email de lead llega a `info@fibrayphone.es`
3. Todos los botones de WhatsApp tienen la URL correcta con el mensaje apropiado
4. El número de teléfono es clicable en móvil
5. Los eventos de GA4 se disparan correctamente (verificar en Tiempo real de Analytics)
6. La página carga correctamente en móvil (Chrome DevTools → modo responsivo)
7. El horario de tienda se muestra correctamente
8. Las reseñas de clientes se renderizan desde `config.js`

---

## 13. Resumen ejecutivo

Fibrayphone es una asesoría de tarifas con tienda física en C/ Diego Serrano 13, Córdoba. Desde 2022, Daniel y Hassna ayudan a familias, particulares y autónomos a comparar y contratar fibra, móvil, luz, gas y alarmas sin ningún coste para el cliente. Los ingresos vienen de comisiones que pagan las compañías cuando hay contratación, no del cliente.

El modelo funciona porque la honestidad es más rentable que la presión comercial. Un cliente que siente que le han tratado bien vuelve, recomienda a su familia y deja una reseña de 5 estrellas. Con 900+ clientes atendidos y una valoración de 5,0 en Google, este modelo está funcionando.

La web de Fibrayphone tiene un propósito concreto: que un visitante de Córdoba contacte con la asesoría por WhatsApp, teléfono o formulario. Todo lo que facilite ese contacto es valioso. Todo lo que lo dificulte es un problema, independientemente de cómo quede visualmente.

La ventaja competitiva de Fibrayphone no es tecnológica ni de escala. Es la confianza local y la atención personalizada. Cualquier trabajo en este proyecto debe reforzar esa ventaja, nunca erosionarla.

**Regla de oro:** antes de proponer cualquier cambio, preguntarse si hace que más personas de Córdoba contacten y contraten. Si la respuesta no es claramente sí, el cambio no es prioritario.

---

## Información variable

> Esta sección contiene datos que cambian con frecuencia. **No hardcodear estos valores en código ni en otros documentos.** La fuente de verdad en producción es `js/config.js`. Actualizar aquí cuando se actualice el repositorio.

### Estadísticas del negocio

| Dato | Valor actual | Fuente en el repo | Nota |
|---|---|---|---|
| Clientes atendidos | 900+ | `index.html` (sección #nosotros) | Actualizar manualmente |
| Reseñas en Google | 200+ según `config.js` / 250+ según HTML fallback | `js/config.js → googleReviewCount` y `index.html` línea ~145 | **Inconsistencia detectada:** hay tres valores distintos en el repositorio (`"200"` en Schema.org, `"200+"` en config.js, `"250+"` en el HTML fallback del hero). Pendiente de unificar. |
| Valoración media | 5,0 ★ | `js/config.js → googleRating` | |
| Año de apertura | 2022 | `index.html` (sección #nosotros) | |

### Equipo

| Nombre | Rol |
|---|---|
| Daniel | Asesor principal, atención presencial y comercial |
| Hassna | Asesoría y gestión operativa |

*Los nombres del equipo aparecen en las reseñas de clientes de `config.js`. Si el equipo cambia, actualizar también el contenido de testimonios donde se mencione por nombre.*

### Horario de tienda

| Días | Turno mañana | Turno tarde |
|---|---|---|
| Lunes a jueves | 9:30–14:00 | 18:00–20:30 |
| Viernes | 9:30–14:00 | Cerrado |
| Sábado | 10:00–13:30 | Cerrado |
| Domingo | Cerrado | Cerrado |

*Fuente: `index.html` (sección #contacto y FAQ). El indicador de estado en tiempo real de `js/main.js` usa estos mismos horarios hardcodeados. Si el horario cambia, actualizar también `js/main.js → updateStoreStatus()`.*

### Precios orientativos (mercado julio 2026)

> Estos precios proceden del HTML de la web y son orientativos. Cambian con frecuencia. No usarlos como referencia definitiva; siempre remitir al cliente a la comparativa personalizada.

| Servicio | Precio orientativo | Fuente |
|---|---|---|
| Fibra (básica) | Desde 20 €/mes | `index.html` sección #ofertas |
| Pack fibra + 2 móviles + TV | ~59 €/mes | `index.html` sección #ofertas |
| Alarma con CRA | Desde 19,90 €/mes | `index.html` sección #ofertas |
| Ahorro típico en luz (cambio comercializadora) | 20–30 €/mes | `index.html` hero y sección #servicios |

### Catálogo de operadores

Ver sección 4. Tiene su propio aviso de vigencia. Antes de publicar contenido específico de una operadora, verificar que sigue activa en el catálogo.

---

## Pendiente de definir

La siguiente información sería recomendable completar en el futuro para tener una documentación más completa y operativa:

| Información | Por qué es importante |
|---|---|
| Rango real de comisiones por tipo de servicio y compañía | Permite entender qué servicios son más rentables y priorizarlos en la estrategia de contenidos |
| Cuáles son los 3 servicios más contratados actualmente | Para priorizar secciones y CTAs de la web |
| Ticket medio de ahorro real por categoría (no solo orientativo) | Para usar en textos de conversión con mayor credibilidad |
| Tiempo medio de respuesta real por canal (WhatsApp, teléfono, email) | Para ajustar las promesas de respuesta en la web |
| De dónde vienen los leads actualmente (Maps, búsqueda orgánica, directo, boca a boca) | Para priorizar inversión SEO y Google Business |
| Si existe o está planificado un CRM o sistema de seguimiento de leads | Para evaluar integraciones futuras |
| Si hay o se planea algún sistema de gestión de citas previas | Para evaluar si hay que añadir funcionalidad a la web |
| Compañías con las que Fibrayphone tiene mejores condiciones comerciales | Para entender si hay conflicto de interés potencial en las recomendaciones |
| Política de devolución o cancelación de contratos gestionados | Para responder correctamente en FAQs y comunicación |
| Si atienden clientes de otras provincias de forma remota | Para definir el alcance geográfico de SEO |
| Nombre legal de la empresa y NIF | Para completar la información legal del sitio (actualmente solo aparece en la política de privacidad de forma parcial) |
| Si existe o se planea Google Business Profile optimizado | Impacto directo en SEO local y en el tráfico `?from=maps` |

---

## Mejoras futuras del conocimiento del negocio

Las siguientes secciones o documentos complementarían este archivo y aumentarían la calidad del contexto disponible para cualquier IA o colaborador:

**Casos de éxito documentados**
Ejemplos reales (anonimizados si es necesario) de clientes que han ahorrado una cantidad específica en una categoría específica. Estos casos son el material más poderoso para textos de conversión porque son verificables y concretos.

**Preguntas reales recibidas en tienda**
Las 20 preguntas más frecuentes que hacen los clientes cuando llegan a la tienda. Estas preguntas son la base perfecta para expandir la sección FAQ de la web y para crear contenido SEO de cola larga.

**Mapa de estacionalidad**
En qué meses hay más demanda de cada categoría. La luz y el gas tienen picos estacionales claros. La fibra y el móvil son más estables. Conocer esto permite planificar campañas y contenidos con anticipación.

**Proceso detallado de cada tipo de cambio**
Qué ocurre exactamente desde que el cliente dice "quiero cambiar de compañía de luz" hasta que el cambio es efectivo. Plazos reales, pasos intermedios, posibles incidencias. Este documento permitiría crear contenido SEO muy específico y útil ("cuánto tarda el cambio de comercializadora de luz en España") y también preparar mejor al cliente antes de contratar.

**Política de gestión de incidencias postventa**
Qué hace Fibrayphone si después de contratar hay un problema (factura incorrecta, portabilidad que falla, alarma que no funciona). Documentar esto reforzaría el argumento de "seguimos aquí después de contratar" con información concreta.

**Estrategia de fidelización**
Si existe algún mecanismo para que los clientes actuales vuelvan cuando necesiten cambiar de nuevo (revisión anual de tarifas, newsletter, etc.). Si no existe, es una oportunidad de negocio a desarrollar.

---

---

## Auditoría del documento (julio 2026)

### Errores encontrados y cambios realizados

| # | Problema encontrado | Tipo | Sección | Cambio realizado |
|---|---|---|---|---|
| 1 | Typo "medía" (verbo medir) en lugar de "media" (intermediario) | Error ortográfico | §1.3 | Corregido |
| 2 | "Tasas de conversión reales de cada canal" — no existe ningún dato de conversión en el repositorio | Afirmación sin evidencia | §8.2 | Reemplazado por "lógica del comportamiento de compra en servicios de asesoría local" |
| 3 | "Tests de comportamiento de usuario muestran que distintas personas hacen clic en puntos distintos" — no hay ningún test documentado | Afirmación inventada | §10.6 | Reemplazado por observación lógica del comportamiento de scroll |
| 4 | Rango de edad "35 y 65 años" — ningún documento del repositorio confirma este dato | Dato inventado | §7.1 | Eliminado. Descripción del perfil mantenida sin rango de edad específico |
| 5 | "90 €/mes" como precio de comparación frente a Movistar/Vodafone — fabricado | Dato inventado | §3.3 | Eliminado. Descripción del valor mantenida sin precio concreto falso |
| 6 | "25–30 € más de lo necesario" para tarifas de móvil de 2020 — cifra sin evidencia | Dato inventado | §3.2 | Eliminado. Sustituido por descripción cualitativa del beneficio |
| 7 | "10–15 GB por menos de 10 €/mes" — dato de mercado volátil presentado como permanente | Dato perecedero en lugar incorrecto | §3.2 | Movido a Información variable con referencia al mercado actual |
| 8 | "100–200 €/mes" de ahorro para pymes — cifra sin evidencia | Dato inventado | §7.4 | Eliminado. Descripción del potencial de ahorro mantenida sin cifra inventada |
| 9 | "30–60 €/mes" de ahorro para familias — cifra sin evidencia | Dato inventado | §7.2 | Eliminado |
| 10 | Frase de ~60 palabras en la descripción de fibra | Frase excesivamente larga | §3.1 | Convertida en lista de tres puntos |
| 11 | Frase de ~80 palabras listando las funciones de main.js | Frase excesivamente larga | §12.4 | Convertida en lista de 14 puntos |
| 12 | Stack técnico descrito dos veces (principios y arquitectura) | Duplicación | §12.2 y §12.5 | §12.2 simplificado a principio; detalle completo únicamente en §12.5 |
| 13 | Precios orientativos dispersos en secciones de servicios, sin indicación de volatilidad | Datos perecederos sin gestión | §3.1, §3.2, §3.3, §3.4, §3.6 | Movidos a sección "Información variable". Cada servicio referencia esa sección |
| 14 | Estadísticas del negocio (900+, 200+, 5.0) sin indicar que son perecederas | Datos perecederos sin gestión | §1.1 y §13 | Añadidos a "Información variable" con fuentes exactas en el repo |
| 15 | **Inconsistencia interna en el repositorio:** `Schema.org` dice `"reviewCount": "200"`, `config.js` dice `"200+"`, HTML fallback del hero dice `"250+"` | Inconsistencia en el código, no en el doc | Codebase | Documentada en "Información variable". Pendiente de resolver en el repositorio |

### Nivel de confianza por sección

| Sección | Nivel | Justificación |
|---|---|---|
| §1.1 Historia | **Medio** | El año 2022 y los nombres están confirmados. La narrativa del origen ("nace como respuesta a…") es una inferencia razonable pero no está documentada explícitamente en ningún archivo |
| §1.2 Filosofía | **Alto** | Cita literal extraída de `index.html` |
| §1.3 Diferenciación | **Alto** | Respaldado por la sección VS de `index.html` |
| §1.4 Por qué existe | **Medio** | Inferencia razonada del modelo de negocio; no contradice ningún dato real |
| §1.5 Posicionamiento | **Alto** | Confirmado por el texto "asesoría de barrio, no call center" de `index.html` |
| §2.1 Ingresos | **Alto** | Confirmado en la FAQ de `index.html` y en el texto del formulario |
| §2.2 Gratuidad | **Alto** | Texto literal del formulario en `index.html` |
| §2.3 vs. comparadores online | **Alto** | Confirmado por la sección VS de `index.html` |
| §2.4 vs. tiendas de operadora | **Alto** | Confirmado por la sección VS de `index.html` |
| §3 Servicios — descripción funcional | **Alto** | Confirmado por secciones de servicios y ofertas de `index.html` |
| §3 Servicios — precios | **Bajo** | Volátiles por definición; movidos a Información variable |
| §4 Catálogo de operadores | **Alto** (en julio 2026) | Extraído de `js/config.js` con advertencia de vigencia |
| §5 Qué no comercializa | **Alto** | Deducido del ámbito del negocio; ningún dato del repo lo contradice |
| §6 Objetivo principal | **Alto** | Confirmado por la arquitectura de CTAs y los eventos de GA4 en `js/main.js` |
| §7 Perfiles de cliente | **Medio** | Perfiles plausibles y coherentes con el negocio; no existe segmentación documentada en el repo |
| §8 Objetivos de la web | **Alto** | Confirmado por la estructura de CTAs, los IDs de WhatsApp y los eventos GA4 |
| §9 Decisiones de IA | **Alto** | Derivado directamente de la lógica de negocio; no depende de datos externos |
| §10 Prioridades absolutas | **Alto** | Derivado de la arquitectura real del sistema y del modelo de negocio |
| §11 Tono | **Alto** | Confirmado por el copy real de `index.html` |
| §12 Mentalidad de desarrollador | **Alto** | Confirmado por la estructura real del repositorio |
| §13 Resumen ejecutivo | **Alto** | Síntesis de datos verificados |
| Información variable | **Alto** | Datos extraídos directamente de archivos del repositorio con referencias exactas |

---

*Documento creado en julio de 2026. Revisado y auditado en julio de 2026. Actualizar cuando cambie información del negocio: operadores del catálogo, horarios, equipo, servicios o datos de contacto. Revisar la sección "Información variable" al inicio de cada año.*
