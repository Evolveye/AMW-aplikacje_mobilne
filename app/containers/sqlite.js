import React, { useEffect, useState } from "react"
import { StyleSheet, Button, View, Text } from "react-native"

export default ({ db }) => {
  const [ results, setResults ] = useState(null)



  /** @param {SQLite.SQLTransaction} txn */
  const selectNums = txn => txn.executeSql(
    `SELECT * FROM local_random_nums`,
    null,
    (_, results) => {
      const { rows } = results
      /** @type {RowLocalRandomNums[]} */
      const resultsArr = []

      for (let i = 0; i < rows.length; ++i) resultsArr.push( rows.item( i ) )

      setResults( resultsArr.map( ({ id, num }) => num ) )
    },
    // (_, error) => console.log( error )
  )

  const insertNum = () => db.transaction(
    txn => {
      txn.executeSql( `INSERT INTO local_random_nums (num) VALUES (?)`, [ Math.floor( Math.random() * 1000 ) ] )
      selectNums( txn )
    },
    // console.error,
    // console.log
  )

  const deleteTable = () => {
    db.transaction( txn => txn.executeSql(
      `DELETE FROM local_random_nums`,
      null,
      () => setResults([])
    ) )
  }



  useEffect( () => {
    db.transaction(
      txn => {
        txn.executeSql(
          `CREATE TABLE IF NOT EXISTS local_random_nums (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            num INT
          )`
        )
        selectNums( txn )
      },
      null,
      // console.log,
      // console.error,
    )
  }, [] )



  return (
    <View>
      <Button title="Add random number to local database" onPress={insertNum} />
      <Button title="Delete table" onPress={deleteTable} />
      <View style={styles.nums}>
        {results && results.map( (num, i) => <Text key={i} style={styles.num}>{num}</Text> )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nums: {
    flexDirection: `row`,
  },

  num: {
    color: `#ffffff`,
    margin: 5,
  }
})