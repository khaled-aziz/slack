import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private users: Map<string, string> = new Map(); // socketId -> username

  handleConnection(client: Socket) {
    // Optionally handle new connection
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    const username = this.users.get(client.id);
    this.users.delete(client.id);
    this.server.emit('userLeft', { username });
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() data: { username: string }, @ConnectedSocket() client: Socket) {
    this.users.set(client.id, data.username);
    this.server.emit('userJoined', { username: data.username });
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: { username: string; message: string }) {
    this.server.emit('message', data);
  }
} 