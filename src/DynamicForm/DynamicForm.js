import React, { Component } from 'react'

import { albums, fields } from './../formData'

import styles from './../styles'

class App extends Component {
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
        <h1 style={styles.formTitle}>Dynamic Form</h1>
        {albums.map((album) => {
          const { albumId, albumName } = album
          return (
            <div key={albumId} style={styles.albumWrapper}>
              <div style={styles.titleWrapper}>
                <h3 style={styles.title}>{albumName}</h3>
              </div>
              <div style={styles.body}>
                {fields.map((field) => {
                  const { fieldId, fieldName, fieldType, fieldOptions } = field

                  switch (fieldType) {
                    case 'text':
                      return (
                        <div style={styles.formRow} key={fieldId}>
                          <label htmlFor={fieldId} style={styles.rowLabel}>
                            {fieldName}
                          </label>
                          <input
                            type="text"
                            id={fieldId}
                            style={styles.textInput}
                            onChange={(event) =>
                              this.setState({
                                [`${albumId}_${fieldId}`]: event.target.value,
                              })
                            }
                            value={this.state[`${albumId}_${fieldId}`]}
                          />
                        </div>
                      )
                    case 'textarea':
                      return (
                        <div style={styles.formRow} key={fieldId}>
                          <label htmlFor={fieldId} style={styles.rowLabel}>
                            {fieldName}
                          </label>
                          <textarea
                            id={fieldId}
                            style={styles.textareaInput}
                            onChange={(event) =>
                              this.setState({
                                [`${albumId}_${fieldId}`]: event.target.value,
                              })
                            }
                            value={this.state[`${albumId}_${fieldId}`]}
                          />
                        </div>
                      )
                    case 'radio':
                      return (
                        <div style={styles.formRow} key={fieldId}>
                          <label style={styles.rowLabel}>{fieldName}</label>
                          {fieldOptions.map((option, index) => (
                            <div style={styles.radioOptionRow} key={`option_${index}`}>
                              <input
                                type="radio"
                                id={`${albumId}_${fieldId}_${option}`}
                                value={option}
                                onChange={(event) =>
                                  this.setState({
                                    [`${albumId}_${fieldId}`]: event.target.value,
                                  })
                                }
                                checked={this.state[`${albumId}_${fieldId}`] === option}
                              />
                              <label htmlFor={`${albumId}_${fieldId}_${option}`}>{option}</label>
                            </div>
                          ))}
                        </div>
                      )
                    default:
                      return null
                  }
                })}
              </div>
            </div>
          )
        })}
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App
