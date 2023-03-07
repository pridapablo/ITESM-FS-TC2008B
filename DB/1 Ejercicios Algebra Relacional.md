# CONSTRUCCION DE SOFTWARE Y TOMA DE DESICIONES (TC2005B)

## ACTIVIDAD 1
**Pablo Banzo Prida - A01782031**

### TORNEO INTERNACIONAL: Algebra relacional

Se dispone de una Base de Datos RELACIONAL para un torneo internacional compuesto de diversas competencias. El esquema de la base de datos es el siguiente:

## TABLA COMPETENCIA

| NombreCompetencia | NumPtos | Tipo |
| ----------------- | ------- | ---- |
| ...               | ...     | ...  |

COMPETENCIA (NombreCompetencia: STRING, NumPtos: INTEGER, Tipo: STRING)

Una competencia de un cierto TIPO, se identifica por su nombre NOMBRECOMPETENCIA y aporta un cierto número de puntos NUMPTOS.

## TABLA PARTICIPANTE

| Número | Apellidos | Nombre | Nacionalidad |
| ------ | --------- | ------ | ------------ |
| ...    | ...       | ...    | ...          |

PARTICIPANTE ( Número: INTEGER,
Apellidos: STRING, Nombre: STRING, Nacionalidad: STRING)

Una persona que participa en el torneo es identificada por un número de participante NUMERO y se registra con sus APELLIDOS, su NOMBRE y su NACIONALIDAD.

## TABLA PUNTOS ACUMULADOS

| Número | Puntos |
| ------ | ------ |
| ...    | ...    |

PUNTOSACUMULADOS(Número: INTEGER, Puntos: INTEGER )

Todo participante identificado por NUMERO acumula un número de puntos PUNTOS durante el torneo.

## TABLA CLASIFICACION

| NombreCompetencia | Número | Lugar |
| ----------------- | ------ | ----- |
| ...               | ...    | ...   |

CLASIFICACION(NombreCompetencia: STRING, Número: INTEGER, Lugar: INTEGER)
Para la competencia de nombre NOMBRECOMPETENCIA, el participante identificado con el número NUMERO fue clasificado en el lugar LUGAR.

Tomando en cuenta lo anterior, escriba en álgebra relacional las siguientes consultas:

## Modelo algebráico:

   - Proyeccion: $\Pi$
   - Seleccion: $\sigma$
   - Concatenacion: $\bowtie$
   - Union: $\cup$
   - Interseccion: $\cap$
   - Diferencia: -
   - Producto cartesiano: $\times$
   - Renombramiento: $\rho$
   - Division: ÷

1. Apellidos y nombre de los participantes de nacionalidad mexicana.
   $$\Pi_{\text{Nombre,Apellidos}} (\sigma_{\text{Nacionalidad}=\text{"Mexicana"}} (\text{PARTICIPANTE}))$$
2. Apellidos, nombre y puntos acumulados de los participantes de USA.
   $$\Pi_{\text{Nombre,Apellidos,Puntos}} (\sigma_{\text{Nacionalidad}=\text{"USA"}} (\text{PARTICIPANTE} \bowtie \text{PUNTOSACUMULADOS}))$$
3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
   $$\Pi_{\text{Nombre,Apellidos}} (\sigma_{\text{Lugar}=1} (\text{PARTICIPANTE} \bowtie \text{CLASIFICACION}))$$
4. Nombre de las competencias en las que intervinieron los participantes mexicanos.
   $$\Pi_{\text{NombreCompetencia}} (\sigma_{\text{Nacionalidad}=\text{"Mexicana"}} (\text{PARTICIPANTE} \bowtie \text{CLASIFICACION}\bowtie \text{COMPETENCIA}))$$
5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
   $$ \Pi_{\text{Nombre,Apellidos}}(\sigma_{\text{Lugar} = 1}\text{PARTICIPANTE}\bowtie \text{CLASIFICACION}) = Q$$
   $$\Pi_{\text{Nombre,Apellidos}} (\text{PARTICIPANTE} - Q)$$
6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
   $$ \Pi_{\text{Nombre,Apellidos}}(\text{PARTICIPANTE} \bowtie \text{CLASIFICACION} )$$
   Nota: esto es considerando que un participante clasificado necesariamente compitio, en caso de que esta premisa no sea cierta, se debe hacer una interseccion con la tabla competencia.

7. Nombre de la competencia que aporta el máximo de puntos.
   $$ R1= \pi _{NumPtos}(COMPETENCIA)$$
$$ R2= \pi _{NumPtos}(COMPETENCIA)$$
$$ R3= \rho _{tabla1}(R1)$$
$$ R4= \rho _{tabla2}(R2)$$
$$ R5= \rho _{NumPtos/NumPtos2}(R4)$$
$$ R6= R3 \times R5$$
$$ R7= \sigma _{NumPtos<NumPtos2}(R6)$$
$$ R8= \pi_{NumPtos}(R7)$$
$$ R9= R1-R8$$
$$ R10 = \rho _{res}(\Pi_{NombreCompetencia} (R9))$$

Este procedimiento es para encontrar el máximo valor dentro de una relacion, a partir de las diapositivas de la clase (Construccioon de software y toma de decisiones 7-2-1).

8. Países (nacionalidades) que participaron en todas las competencias.

$$R1 =\Pi_{\text{Nacionalidad,Número}}(\text{PARTICIPANTE})$$
$$R2 = \Pi_{\text{NombreCompetencia,Número}}(\text{CLASIFICACION})$$

$$R3 = R1 \bowtie R2$$

R3 sería una tabla como esta:

| NombreCompetencia | Número | Nacionalidad |
| ----------------- | ------ | ------------ |
| ...               | ...    | ...          |

De dicha tabla, se obtiene una tabla con los paises con algún clasificado
$$R4 = \Pi_{\text{NombreCompetencia,Nacionalidad}}(R3)$$
Obteniendo R4 como:

| NombreCompetencia | Nacionalidad |
| ----------------- | ------------ |
| ...               | ...          | 

Posteriormente, se obtiene una tabla con los paises que compitieron (quitando a los países clasificados que no compitieron a traves de la concatenacion):
$$R5 = R4 \bowtie \Pi_{\text{NombreCompetencia}}(\text{COMPETENCIA})$$
Tal que R5 es:

| NombreCompetencia | Nacionalidad |
| ----------------- | ------------ |
| ...               | ...          |

Ahora debemos manipular R5 para que nos quede una tabla con los paises que compitieron en TODAS las competencias. La tabla de competencias original $\Pi_{\text{NombreCompetencia}}(\text{COMPETENCIA})$ contiene un listado de todas las competencias existentes.

Basta con aplicar la division entre ambas relaciones para obtener el resultado deseado, dado que la division nos regresa una tupla con los elementos que están en la primera tabla y sus valores asociados con respecto a la segunda tabla:
$$R5 \text{÷} \Pi_{\text{NombreCompetencia}}(\text{COMPETENCIA})$$

Para extraer las nacionalidades de la tabla resultante, se debe aplicar la proyeccion sobre la columna Nacionalidad:
$$R6 = \Pi_{\text{Nacionalidad}}(R5 \text{÷} \Pi_{\text{NombreCompetencia}}(\text{COMPETENCIA}))$$

Por completitud, se renombra el resultado a "res" y se obtiene la tabla final:

$$ R7 = \rho _{res}(\Pi_{NombreCompetencia} (R6))$$

Nota: el procedimiento de la division fue extraido de la libro sugerido en la clase.
"The Division operation defines a relation over the attributes C that consists of the set of tuples from R that match the combination of every tuple in S." (Página 177)