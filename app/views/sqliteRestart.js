import React from "react"
import * as SQLite from 'expo-sqlite'

import SqliteView from "../containers/sqlite.js"

/**
 * @typedef {object} RowLocalRandomNums
 * @property {number} id
 * @property {number} num
 */

const db = SQLite.openDatabase( 'LocalDatabaseReset.db' )



db.transaction( txn => txn.executeSql(
  `SELECT * FROM sqlite_master WHERE type='table';`,
  null,
  (txn, results) => {
    const { rows } = results

    for (let i = 0; i < rows.length; ++i) {
      /** @type {string} */
      const tableName =  rows.item( i ).name

      if (tableName.startsWith( `__` )) continue

      txn.executeSql(
        `DELETE FROM ${tableName}`,
        null,
        () => console.log( `success` ),
        (_, err) => console.error( tableName, err ),
      )
    }

    console.log( `tables droped` )
  },
  (_, err) => console.error( err ),
) )


export default () => <SqliteView db={db} />