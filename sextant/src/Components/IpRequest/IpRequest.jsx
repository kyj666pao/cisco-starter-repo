import React, { useState, useEffect } from 'react'
import styles from './IpRequest.module.css'

const IpRequest = ({ IPv}) => {
    const [currIP, setCurrIP] = useState("");
    let url = IPv === "IPv4" 
            ? "https://api.ipify.org?format=json" 
            : "https://api64.ipify.org?format=json"

    useEffect(() => {
        const getIP = async(IPv) =>{
            const res = await fetch (url)
            let parseData = await res.json()
            setCurrIP(parseData.ip)
        }
        getIP(IPv)
    }, []);
    
  return (
    <div className={styles.container}>
        <div>
            <p>Public {IPv} address: </p>
        </div>
        
        <div>
            <p>{currIP}</p>
        </div>
        
    </div>
  )
}

export default IpRequest