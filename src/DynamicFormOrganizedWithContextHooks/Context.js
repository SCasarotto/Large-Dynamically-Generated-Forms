import React, { useMemo, useState } from 'react'

import { albums, fields } from './../formData'

export const FormDataContext = React.createContext()

const computeInitialState = () => {
  const data = {}
  for (let i = 0; i < albums.length; i++) {
    for (let j = 0; j < fields.length; j++) {
      data[`${albums[i].albumId}_${fields[j].fieldId}`] = ''
    }
  }
  return data
}

export const FormDataProvider = (props) => {
  const formData = useMemo(() => computeInitialState(), [albums, fields])

  const [state, setState] = useState({ formData })

  const handleSetState = (object) => {
    const { formData } = state
    setState({ formData: { ...formData, ...object }, setState })
  }
  const value = { ...state, setState: handleSetState }

  return <FormDataContext.Provider value={value}>{props.children}</FormDataContext.Provider>
}
