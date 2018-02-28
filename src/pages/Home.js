import React, { Fragment } from 'react'

import { List } from './../components'

export default function Home ({data}) {
  return (
    <Fragment>
      <List data={data} />
    </Fragment>
  )
}
