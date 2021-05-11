import React from 'react'
import { Text } from 'react-native'

export const Br   = ()    =>  <Text>{`\n`}</Text>
export const Code = props =>  <Text {...props} style={{ fontFamily:`monospace`, color:`#556` }} />
export const B    = props =>  <Text {...props} style={{ fontWeight:`bold`, color:`gold` }} />
export const Ok   = props =>  <Text {...props} style={{ color:`#22ee22` }} />
export const Bad  = props =>  <Text {...props} style={{ color:`#ee2222` }} />