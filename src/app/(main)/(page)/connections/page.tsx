import React from 'react'
import ConnectionCard from './_components/connection-card'
import { connection } from 'next/dist/server/request/connection';
import { CONNECTIONS } from '@/lib/constants';

const Connections = () => {
  return (
    <div>
              <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Connections
      </h1>
  <div className = 'realtive flex flex-col gap-4'>
    <div className = 'flex flex-col gap-4 p-6 text-muted-foreground'>
        <section className = 'flex flex-col gap-4'>
        connect all your apps directly from here

        {CONNECTIONS.map((connection) => (
        <ConnectionCard
         key = {connection.title }
         title = {connection.title}
         description = {connection.description}
         type = {connection.title}
         icon = {connection.image}
         connected = {connection}
         
         />
        ))}
        </section>
        </div>
        </div>
        </div>
  )
}   

export default Connections;