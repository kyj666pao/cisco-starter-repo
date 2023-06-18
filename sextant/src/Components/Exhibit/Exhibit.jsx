import React from 'react'
import styles from './Exhibit.module.css'
import IpRequest from '../IpRequest/IpRequest'
import DisplayLatency from '../DisplayLatency/DisplayLatency'

const Exhibit = () => {
  return (
    <div className={styles.container}>
      <IpRequest IPv="IPv4" />
      <IpRequest IPv="IPv6" />
      <DisplayLatency />
    </div>
  )
}

export default Exhibit