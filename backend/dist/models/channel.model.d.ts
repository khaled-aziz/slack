import { Document, Types } from 'mongoose';
export type ChannelDocument = Channel & Document;
export declare class Channel {
    name: string;
    description: string;
    members: Types.ObjectId[];
    createdAt: Date;
}
export declare const ChannelSchema: import("mongoose").Schema<Channel, import("mongoose").Model<Channel, any, any, any, Document<unknown, any, Channel> & Channel & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Channel, Document<unknown, {}, import("mongoose").FlatRecord<Channel>> & import("mongoose").FlatRecord<Channel> & {
    _id: Types.ObjectId;
}>;
