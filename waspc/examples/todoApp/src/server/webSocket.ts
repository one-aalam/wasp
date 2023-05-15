import { v4 as uuidv4 } from 'uuid'
import { WebSocketDefinition } from '@wasp/webSocket'
import { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData } from '../shared/webSocket'

export const webSocketFn: WebSocketDefinition<
  ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData> = (io) => {
    console.log('webSocketFn')

    io.on('connection', (socket) => {
      const username = socket.data?.user?.email || socket.data?.user?.username || 'unknown'
      console.log('a user connected: ', username)

      socket.on('chatMessage', (msg) => {
        io.emit('chatMessage', { id: uuidv4(), username, text: msg })
      })
    })
  }
