import * as net from "net";

function isValidPort(port) {
    return   Number.isSafeInteger(port) && (port >= 0 && port <= 65535);
} 


export function parseIp(str: string) {
    if (typeof str != 'string' || str.length == 0) {
        throw new Error('expect string input'); 
    }
    const d = str.split(':');
    if (d.length != 2) {
        throw new Error('invalid ip:port format'); 
    }
    const host = d[0];
    if (!net.isIP(host)) {
        throw new Error('invalid ipv4/ipv6 address'); 
    }
    const port = parseInt(d[1], 10);
    if (!isValidPort(port)) {
        throw new Error('invalid port number'); 
    }
    return {host, port};
}