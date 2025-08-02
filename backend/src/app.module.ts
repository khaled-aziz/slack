import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { Message, MessageSchema } from './models/message.model';
import { Channel, ChannelSchema } from './models/channel.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://zizoa7332:khaledaziz7332@cluster0.klv87.mongodb.net/slack'),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Message.name, schema: MessageSchema },
      { name: Channel.name, schema: ChannelSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
