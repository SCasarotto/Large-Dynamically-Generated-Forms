import React, { memo } from 'react'

import styles from './../styles'

const Title = memo((props) => {
	const { albumName } = props
	return (
		<div style={styles.titleWrapper}>
			<h3 style={styles.title}>{albumName}</h3>
		</div>
	)
})

export default Title
