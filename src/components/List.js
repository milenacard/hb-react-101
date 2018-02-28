import React from 'react'

import { Text } from './../components'

export default function List ({data}) {
  return (
    <ul className='list'>
      {data.map(({name, color}) => {
        return (
          <li key={name + color}>
            <Text content={name} color={color} />
          </li>
        )
      })}
    </ul>
  )
}
