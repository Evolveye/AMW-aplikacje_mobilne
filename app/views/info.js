import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import styles from "./info.styles.js"

import { B, Br, Code } from "../utils/globalMarkups.js"

export default () => (
  <View style={styles.screen}>
    <Text style={styles.mainText}>
      <B>Spread operator</B> "..." --
      operator służący do "rozwijania" wyrażen iterowalnych.<Br />
      <Br />
      Zapis <Code>console.log( [1,2,3] )</Code> wyświetli w konsoli tablicę z elementami 1, 2, 3.<Br />
      <Br />
      Zapis <Code>console.log( ...[1,2,3] )</Code> wyświetli osobno 3 liczby -- 1, 2, 3
    </Text>

    <Br />
    <Br />

    <Text style={styles.mainText}>
      <B>Rest parameters</B> "..." -- zamienia zmienną lub parametr w akumulator wartości.<Br />
      <Br />
      Zapis <Code>const [ a, b, ...c ] = [ 1, 2, 3, 4, 5 ]</Code> utworzy zmienne "a", "b", oraz "c",
      które będa posiadać wartości kolejno "1", "2", "[ 3, 4, 5 ]"<Br />
      <Br />
      Po wywołaniu funkcji o sygnaturze <Code>abc( a, b, ...c )</Code>
      w postaci <Code>abc( 1, 2, 3, 4, 5 )</Code>
      wartości parametrów będą mieć wartosci kolejno "1", "2", "[ 3, 4, 5 ]"<Br />
    </Text>

    <Br />
    <Br />

    <Text style={styles.mainText}>
      <B>useState</B> -- jest to tzw. "hook",
      który w komponentach funkcyjnych Reakta jest odpowiednikiem metody <Code>this.setState</Code>.<Br />
      <Br />
      Wywołanie tej funkcji zwraca daną -- wartość stanu -- oraz setter tej danej -- funkcję która zmienia stan.
    </Text>
  </View>
)