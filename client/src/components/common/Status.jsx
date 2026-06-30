import { useState, useEffect } from 'react'

import { Wifi, WifiOff, Server } from 'lucide-react'

import { healthStatus } from '../../services/healthAPI.js'

const Status = () => {
    const [health, setHealth] = useState('Loading...')

    useEffect(() => {
        const checkHealth = async () => {
        try{
            const res = await healthStatus()

            if(res){
            setHealth('Online')
            }
        }
        catch(e){
            console.error('Unable to connect server: ', e)
            setHealth('Offline')
        }
        finally{
            setTimeout(checkHealth, 30000)
        }
        }

        checkHealth()

        let interval = setInterval(checkHealth, 30000)

        return clearInterval(interval)
    }, [])

    return(
        <span className='flex items-center bg-black gap-1 fixed bottom-5 left-2 p-2 rounded-lg'>
          <Server className='text-foreground'/> : 
          {
            health === 'Online' ? (
              <Wifi className='text-green-400'/>
            ) : health === 'Offline' ? (
              <WifiOff className='text-logo'/>
            ) : (
              <div className='border-3 w-4 h-4 rounded-full border-y-blue border-transparent animate-spin'/>
            )
          }
        </span>
    )
}

export default Status