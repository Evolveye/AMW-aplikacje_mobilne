import React from "react"
import * as SQLite from 'expo-sqlite'

import SqliteView from "../containers/sqlite.js"

/**
 * @typedef {object} RowLocalRandomNums
 * @property {number} id
 * @property {number} num
 */

const db = SQLite.openDatabase( 'LocalDatabase.db' )

export default () => <SqliteView db={db} />