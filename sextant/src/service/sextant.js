export async function getIP(IPv) {
    const url = IPv == "IPv4" 
        ? "https://api.ipify.org/?format=json" 
        : "https://api.ipify.org/?format=json"
    const res = await fetch (url)
    let parseData = await res.json()
    return parseData.ip
}

getIP("IPv4")