# CONSTRUCCION DE SOFTWARE Y TOMA DE DESICIONES (TC2005B)

## ACTIVIDAD 1

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

## Operadores:

        - Proyección: π
        - Selección: σ
        - Concatenación: ⋈
        - Unión: ∪
        - Intersección: ∩
        - Diferencia: -
        - Producto cartesiano: ×
        - Renombramiento: ρ

1. Apellidos y nombre de los participantes de nacionalidad mexicana.
   $$\Pi_{\text{Nombre,Apellidos}} (\sigma_{\text{Nacionalidad}=\text{"Mexicana"}} (\text{PARTICIPANTE}))$$
2. Apellidos, nombre y puntos acumulados de los participantes de USA.
   $$\Pi_{\text{Nombre,Apellidos,Puntos}} (\sigma_{\text{Nacionalidad}=\text{"USA"}} (\text{PARTICIPANTE} \bowtie \text{PUNTOSACUMULADOS}))$$
3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia.
   $$\Pi_{\text{Nombre,Apellidos}} (\sigma_{\text{Lugar}=1} (\text{PARTICIPANTE} \bowtie \text{CLASIFICACION}))$$
4. Nombre de las competencias en las que intervinieron los participantes mexicanos.
   $$\Pi_{\text{NombreCompetencia}} (\sigma_{\text{Nacionalidad}=\text{"Mexicana"}} (\text{PARTICIPANTE} \bowtie \text{CLASIFICACION}\bowtie \text{COMPETENCIA}))$$
5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia.
   <!-- $$\Pi_{\text{Nombre,Apellidos}} (\sigma_{\text{Lugar} = 1} (\text{PARTICIPANTE} \bowtie \text{CLASIFICACION}))$$ -->
   $$ \Pi*{\text{Nombre,Apellidos}}(\sigma*{\text{Lugar} = 1}\text{PARTICIPANTE}\bowtie \text{CLASIFICACION}) = Q$$
   $$\Pi\_{\text{Nombre,Apellidos}} (\text{PARTICIPANTE} - Q)$$
6. Apellidos y nombre de los participantes siempre se clasificaron en alguna competencia.
   $$ \Pi\_{\text{Nombre,Apellidos}}(\text{PARTICIPANTE} \bowtie \text{CLASIFICACION} )$$

   <!-- Decir por qué estoy haciendo las cosas así y agregar la visualización de las tablas -->

7. Nombre de la competencia que aporta el máximo de puntos.
   $$ R1= \pi _{NumPtos}(COMPETENCIA)$$
$$ R2= \pi _{NumPtos}(COMPETENCIA)$$
$$ R3= \rho _{tabla1}(R1)$$
$$ R4= \rho _{tabla2}(R2)$$
$$ R5= \rho _{NumPtos/NumPtos2}(R4)$$
$$ R6= R3 \times R5$$
$$ R7= \sigma _{NumPtos<NumPtos2}(R6)$$
$$ R8= \pi _{NumPtos}(R7)$$
$$ R9= R1-R2$$
$$\Pi_{NombreCompetencia(COMPETENCIA \bowtie R9)}$$

Otra opción:
Realizar una proyección para seleccionar solamente el nombre de la competencia (NombreCompetencia) y el número de puntos (NumPtos) de la tabla COMPETENCIA:

        π NombreCompetencia, NumPtos (COMPETENCIA)

        Encontrar el número máximo de puntos (MaxNumPtos) utilizando selección y renombramiento:

        ρ MaxNumPtos (σ NumPtos ≥ NumPtos (π NumPtos (COMPETENCIA)))

        Aquí estamos comparando cada fila de la tabla proyectada con el valor máximo de puntos. La selección devuelve solo las filas que tienen un valor de puntos mayor o igual al valor máximo encontrado. Luego, renombramos el resultado de la selección como MaxNumPtos.

        Unir la tabla proyectada con la tabla renombrada de MaxNumPtos utilizando concatenación:

        π NombreCompetencia ((π NombreCompetencia, NumPtos (COMPETENCIA)) ⋈ MaxNumPtos)

        Aquí estamos uniendo la tabla proyectada con la tabla renombrada de MaxNumPtos para obtener solamente las filas que tienen el número máximo de puntos. Luego, proyectamos solamente el nombre de la competencia para obtener la respuesta final.

        Por último, para evitar filas duplicadas, podemos aplicar la operación de intersección con la misma tabla:

        π NombreCompetencia ((π NombreCompetencia, NumPtos (COMPETENCIA)) ⋈ MaxNumPtos) ∩ π NombreCompetencia ((π NombreCompetencia, NumPtos (COMPETENCIA)) ⋈ MaxNumPtos)

        Esta última operación nos devuelve solamente el nombre de la competencia que aporta el máximo de puntos.

        $$π NombreCompetencia ((π NombreCompetencia, NumPtos (COMPETENCIA)) ⋈ ρ MaxNumPtos (σ NumPtos ≥ NumPtos (π NumPtos (COMPETENCIA)) )) ∩ π NombreCompetencia ((π NombreCompetencia, NumPtos (COMPETENCIA)) ⋈ ρ MaxNumPtos (σ NumPtos ≥ NumPtos (π NumPtos (COMPETENCIA)) ))
        $$

8. Países (nacionalidades) que participaron en todas las competencias.

$$R1 =\Pi{\text{Nacionalidad,Número}}(\text{PARTICIPANTE})$$
$$R2 = \Pi{\text{NombreCompetencia,Número}}(\text{CLASIFICACION})$$
$$R3 = \Pi{\text{NombreCompetencia}}(\text{COMPETENCIA})$$

$$R4 = R1 \bowtie R2$$
| NombreCompetencia | Número | Nacionalidad |
| ----------------- | ------ | ------------ |

$$R6 = \Pi_{\text{NombreCompetencia,Nacionalidad}}(R5)$$
De todos los clasificados
| NombreCompetencia | Nacionalidad |
| ----------------- | ------------ |

$$R7 = R6 \bowtie R3$$
De todos los paises que compitieron (quitando a los países clasificados que no compitieron)
| NombreCompetencia | Nacionalidad |
| ----------------- | ------------ |

De alguna forma debemos manipular R7 para que nos quede una tabla con los paises que compitieron en todas las competencias. La tabla de competencias original (R3) contiene un listado de todas las competencias existentes y basta con ¿intersectar $\cap$? las columnas de R7 con R3 para obtener la respuesta.

Es un sigma $\sigma$ para encontrar donde se cumple?

R8 = SELECT NombreCompetencia FROM R7 WHERE NACIONALIDAD='Mexicana'

<!-- Con esto llego a una tabla donde tengo el listado de competencias en donde participó méxico... ¿cómo se si méxico participó en todas?
Explicación de por qué lo hacemos así:
-->

$$T = \Pi_{\text{Nacionalidad}}(R8) - π_{Nacionalidad}(σ_{NombreCompetencia NOT IN (R7)} (R8)$$
