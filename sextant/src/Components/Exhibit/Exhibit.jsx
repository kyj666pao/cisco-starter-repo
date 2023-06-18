import React from 'react'
import styles from './Exhibit.module.css'
import IpRequest from '../IpRequest/IpRequest'

const Exhibit = () => {
  return (
    <div className={styles.container}>
      <IpRequest IPv="IPv4" />
      <IpRequest IPv="IPv6" />
    </div>
  )
}

export default Exhibit