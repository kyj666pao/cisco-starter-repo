import React, {useState, useEffect} from 'react'
import styles from './DisplayLatency.module.css'
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

const DisplayLatency = () => {
    // console.log('client', client)
    const [latency, setLatency] = useState(null);

    client.onmessage = (message) => {
            setLatency(new Date().getTime() - message.data)
    }
    
  return (
    <div className={styles.container} >
        <p>Pylon Latency</p>
        <p>{latency}</p>
    </div>
  )
}

export default DisplayLatency