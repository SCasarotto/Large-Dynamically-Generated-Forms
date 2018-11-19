import React, { PureComponent } from 'react'

import Title from './Title'
import Body from './Body'

import { albums, fields } from './../formData'
import styles from './../styles'

class Form extends PureComponent {
  constructor(props) {
    super(props)
    //Setup initial State
    const state = {}
    for (let i = 0; i < albums.length; i++) {
      for (let j = 0; j < fields.length; j++) {
        state[`${albums[i].albumId}_${fields[j].fieldId}`] = ''
      }
    }
    this.state = state
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting Form! Form data:', this.state)
  }
  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <h1 style={styles.formTitle}>Dynamic Form Organized</h1>
        {albums.map((album) => {
          const { albumId, albumName } = album
          return (
            <div key={albumId} style={styles.albumWrapper}>
              <Title albumName={albumName} />
              <Body
                albumId={albumId}
                state={this.state}
                setState={(object) => this.setState(object)}
              />
            </div>
          )
        })}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
