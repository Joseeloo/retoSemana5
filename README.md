# Calculadora de IMC

Este proyecto es una aplicación sencilla en JavaScript que permite **calcular el Índice de Masa Corporal (IMC)** de una persona y mostrar el rango correspondiente según los estándares de la **Organización Mundial de la Salud (OMS)**.

## Reto Semana 5

Crear un programa que:

- Solicite al usuario su **peso (kg)** y **altura (m)**.
- Calcule el IMC con la fórmula:  
  `IMC = peso / (altura)^2`
- Muestre el resultado con **dos decimales**.
- Clasifique el IMC en los siguientes rangos:

| Clasificación            | Rango de IMC         |
|--------------------------|----------------------|
| Bajo peso                | IMC < 18.5           |
| Peso normal              | 18.5 ≤ IMC < 24.9    |
| Sobrepeso                | 25 ≤ IMC < 29.9      |
| Obesidad grado 1         | 30 ≤ IMC < 34.9      |
| Obesidad grado 2         | 35 ≤ IMC < 39.9      |
| Obesidad grado 3         | IMC ≥ 40             |

## Tecnologías

- HTML
- JavaScript

## Estructura del Proyecto

calculadoraIMC/

├── index.html // (opcional, si lo integras a una web)

├── calculadoraIMC.js // Código JS de la calculadora

└── README.md // Este archivo

## Cómo usar

1. Abre el archivo index.html en un navegador.
2. El script catalogoProductos.js se ejecuta automáticamente.
3. Abre la consola del navegador para ver los resultados.

## Ejemplo de ejecución en consola
- Por favor, ingrese su peso (kg): 70
- Por favor, ingrese su altura (m): 1.75
- Su peso ingresado es: 70kg
- Su altura ingresada es: 1.75m
- Su IMC es: 22.86
- Usted se encuentra en el rango de peso normal.
