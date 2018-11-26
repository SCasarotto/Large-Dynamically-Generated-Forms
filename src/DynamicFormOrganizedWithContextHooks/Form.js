import React, { memo, useContext } from 'react'

import { FormDataContext } from './Context'
import Title from './Title'
import Body from './Body'

import { albums } from './../formData'
import styles from './../styles'

const Form = memo(() => {
  const context = useContext(FormDataContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting Form! Form data:', context.formData)
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h1 style={styles.formTitle}>Dynamic Form Organized With Context HOOKS!</h1>
      {albums.map((album) => {
        const { albumId, albumName } = album
        return (
          <div key={albumId} style={styles.albumWrapper}>
            <Title albumName={albumName} />
            <Body albumId={albumId} />
          </div>
        )
      })}
      <button type="submit">Submit</button>
    </form>
  )
})

export default Form
