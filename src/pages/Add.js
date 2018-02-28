import React, { Fragment } from 'react'

import TextRetriever from './../components/TextRetriever'

export default function Add ({updateData}) {
  return (
    <Fragment>
      <TextRetriever onSubmit={updateData} />
    </Fragment>
  )
}
