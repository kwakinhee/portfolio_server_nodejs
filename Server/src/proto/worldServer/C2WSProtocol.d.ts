import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a C2WSProtocol. */
export interface IC2WSProtocol {
}

/** Represents a C2WSProtocol. */
export class C2WSProtocol implements IC2WSProtocol {

    /**
     * Constructs a new C2WSProtocol.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2WSProtocol);

    /**
     * Creates a new C2WSProtocol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2WSProtocol instance
     */
    public static create(properties?: IC2WSProtocol): C2WSProtocol;

    /**
     * Encodes the specified C2WSProtocol message. Does not implicitly {@link C2WSProtocol.verify|verify} messages.
     * @param message C2WSProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2WSProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2WSProtocol message, length delimited. Does not implicitly {@link C2WSProtocol.verify|verify} messages.
     * @param message C2WSProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2WSProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2WSProtocol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2WSProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol;

    /**
     * Decodes a C2WSProtocol message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2WSProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol;

    /**
     * Verifies a C2WSProtocol message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2WSProtocol message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2WSProtocol
     */
    public static fromObject(object: { [k: string]: any }): C2WSProtocol;

    /**
     * Creates a plain object from a C2WSProtocol message. Also converts values to other types if specified.
     * @param message C2WSProtocol
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2WSProtocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2WSProtocol to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2WSProtocol
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace C2WSProtocol {

    /** PacketType enum. */
    enum PacketType {
        NONE = 0,
        LoginReq = 1001,
        MoveReq = 1002,
        JoinWorldReq = 1003,
        FullSyncWorldReq = 1004,
        GetWorldAddressReq = 1005,
        QuitWorldReq = 1006,
        GetAvatarSlotsReq = 1007,
        ChangeAvatarSlotReq = 1008,
        GetMyProfileReq = 1009,
        ActionReq = 1010,
        SetFieldObjectReq = 1011,
        UpdateFieldObjectReq = 1012,
        RemoveFieldObjectReq = 1013,
        GetMyBagReq = 1014,
        EquipReq = 1015,
        UnequipReq = 1016,
        Ping = 3001,
        MAX = 32767
    }

    /** Properties of a Message. */
    interface IMessage {
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: C2WSProtocol.IMessage);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: C2WSProtocol.IMessage): C2WSProtocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link C2WSProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: C2WSProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link C2WSProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: C2WSProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: C2WSProtocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Message {

        /** Properties of a LoginReq. */
        interface ILoginReq {

            /** LoginReq isDevLogin */
            isDevLogin?: (boolean|null);

            /** LoginReq accountId */
            accountId?: (string|null);

            /** LoginReq enterWorldToken */
            enterWorldToken?: (string|null);

            /** LoginReq loginPlatform */
            loginPlatform?: (string|null);
        }

        /** Represents a LoginReq. */
        class LoginReq implements ILoginReq {

            /**
             * Constructs a new LoginReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.ILoginReq);

            /** LoginReq isDevLogin. */
            public isDevLogin: boolean;

            /** LoginReq accountId. */
            public accountId: string;

            /** LoginReq enterWorldToken. */
            public enterWorldToken: string;

            /** LoginReq loginPlatform. */
            public loginPlatform: string;

            /**
             * Creates a new LoginReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginReq instance
             */
            public static create(properties?: C2WSProtocol.Message.ILoginReq): C2WSProtocol.Message.LoginReq;

            /**
             * Encodes the specified LoginReq message. Does not implicitly {@link C2WSProtocol.Message.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.LoginReq;

            /**
             * Decodes a LoginReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.LoginReq;

            /**
             * Verifies a LoginReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.LoginReq;

            /**
             * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
             * @param message LoginReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoginReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Ping. */
        interface IPing {

            /** Ping serverTimeUtcRequest */
            serverTimeUtcRequest?: (boolean|null);

            /** Ping clientTimeUtc */
            clientTimeUtc?: (number|Long|null);

            /** Ping stressMessage */
            stressMessage?: (string|null);
        }

        /** Represents a Ping. */
        class Ping implements IPing {

            /**
             * Constructs a new Ping.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IPing);

            /** Ping serverTimeUtcRequest. */
            public serverTimeUtcRequest?: (boolean|null);

            /** Ping clientTimeUtc. */
            public clientTimeUtc?: (number|Long|null);

            /** Ping stressMessage. */
            public stressMessage?: (string|null);

            /** Ping _serverTimeUtcRequest. */
            public _serverTimeUtcRequest?: "serverTimeUtcRequest";

            /** Ping _clientTimeUtc. */
            public _clientTimeUtc?: "clientTimeUtc";

            /** Ping _stressMessage. */
            public _stressMessage?: "stressMessage";

            /**
             * Creates a new Ping instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ping instance
             */
            public static create(properties?: C2WSProtocol.Message.IPing): C2WSProtocol.Message.Ping;

            /**
             * Encodes the specified Ping message. Does not implicitly {@link C2WSProtocol.Message.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link C2WSProtocol.Message.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.Ping;

            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.Ping;

            /**
             * Verifies a Ping message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ping
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.Ping;

            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @param message Ping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ping to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Ping
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MoveReq. */
        interface IMoveReq {

            /** MoveReq userId */
            userId?: (number|null);

            /** MoveReq moveState */
            moveState?: (Common.IMoveStateEntity|null);
        }

        /** Represents a MoveReq. */
        class MoveReq implements IMoveReq {

            /**
             * Constructs a new MoveReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IMoveReq);

            /** MoveReq userId. */
            public userId: number;

            /** MoveReq moveState. */
            public moveState?: (Common.IMoveStateEntity|null);

            /**
             * Creates a new MoveReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IMoveReq): C2WSProtocol.Message.MoveReq;

            /**
             * Encodes the specified MoveReq message. Does not implicitly {@link C2WSProtocol.Message.MoveReq.verify|verify} messages.
             * @param message MoveReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IMoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MoveReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.MoveReq.verify|verify} messages.
             * @param message MoveReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IMoveReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoveReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.MoveReq;

            /**
             * Decodes a MoveReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MoveReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.MoveReq;

            /**
             * Verifies a MoveReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MoveReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.MoveReq;

            /**
             * Creates a plain object from a MoveReq message. Also converts values to other types if specified.
             * @param message MoveReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.MoveReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MoveReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinWorldReq. */
        interface IJoinWorldReq {

            /** JoinWorldReq userId */
            userId?: (number|null);

            /** JoinWorldReq worldId */
            worldId?: (number|null);
        }

        /** Represents a JoinWorldReq. */
        class JoinWorldReq implements IJoinWorldReq {

            /**
             * Constructs a new JoinWorldReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IJoinWorldReq);

            /** JoinWorldReq userId. */
            public userId: number;

            /** JoinWorldReq worldId. */
            public worldId: number;

            /**
             * Creates a new JoinWorldReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinWorldReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IJoinWorldReq): C2WSProtocol.Message.JoinWorldReq;

            /**
             * Encodes the specified JoinWorldReq message. Does not implicitly {@link C2WSProtocol.Message.JoinWorldReq.verify|verify} messages.
             * @param message JoinWorldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IJoinWorldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinWorldReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.JoinWorldReq.verify|verify} messages.
             * @param message JoinWorldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IJoinWorldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinWorldReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinWorldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.JoinWorldReq;

            /**
             * Decodes a JoinWorldReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinWorldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.JoinWorldReq;

            /**
             * Verifies a JoinWorldReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinWorldReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinWorldReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.JoinWorldReq;

            /**
             * Creates a plain object from a JoinWorldReq message. Also converts values to other types if specified.
             * @param message JoinWorldReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.JoinWorldReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinWorldReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinWorldReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FullSyncWorldReq. */
        interface IFullSyncWorldReq {

            /** FullSyncWorldReq userId */
            userId?: (number|null);

            /** FullSyncWorldReq worldId */
            worldId?: (number|null);
        }

        /** Represents a FullSyncWorldReq. */
        class FullSyncWorldReq implements IFullSyncWorldReq {

            /**
             * Constructs a new FullSyncWorldReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IFullSyncWorldReq);

            /** FullSyncWorldReq userId. */
            public userId: number;

            /** FullSyncWorldReq worldId. */
            public worldId: number;

            /**
             * Creates a new FullSyncWorldReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FullSyncWorldReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IFullSyncWorldReq): C2WSProtocol.Message.FullSyncWorldReq;

            /**
             * Encodes the specified FullSyncWorldReq message. Does not implicitly {@link C2WSProtocol.Message.FullSyncWorldReq.verify|verify} messages.
             * @param message FullSyncWorldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IFullSyncWorldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FullSyncWorldReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.FullSyncWorldReq.verify|verify} messages.
             * @param message FullSyncWorldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IFullSyncWorldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FullSyncWorldReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FullSyncWorldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.FullSyncWorldReq;

            /**
             * Decodes a FullSyncWorldReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FullSyncWorldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.FullSyncWorldReq;

            /**
             * Verifies a FullSyncWorldReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FullSyncWorldReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FullSyncWorldReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.FullSyncWorldReq;

            /**
             * Creates a plain object from a FullSyncWorldReq message. Also converts values to other types if specified.
             * @param message FullSyncWorldReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.FullSyncWorldReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FullSyncWorldReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FullSyncWorldReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a QuitWorldReq. */
        interface IQuitWorldReq {

            /** QuitWorldReq userId */
            userId?: (number|null);
        }

        /** Represents a QuitWorldReq. */
        class QuitWorldReq implements IQuitWorldReq {

            /**
             * Constructs a new QuitWorldReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IQuitWorldReq);

            /** QuitWorldReq userId. */
            public userId: number;

            /**
             * Creates a new QuitWorldReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuitWorldReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IQuitWorldReq): C2WSProtocol.Message.QuitWorldReq;

            /**
             * Encodes the specified QuitWorldReq message. Does not implicitly {@link C2WSProtocol.Message.QuitWorldReq.verify|verify} messages.
             * @param message QuitWorldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IQuitWorldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuitWorldReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.QuitWorldReq.verify|verify} messages.
             * @param message QuitWorldReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IQuitWorldReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuitWorldReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuitWorldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.QuitWorldReq;

            /**
             * Decodes a QuitWorldReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QuitWorldReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.QuitWorldReq;

            /**
             * Verifies a QuitWorldReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuitWorldReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuitWorldReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.QuitWorldReq;

            /**
             * Creates a plain object from a QuitWorldReq message. Also converts values to other types if specified.
             * @param message QuitWorldReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.QuitWorldReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuitWorldReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for QuitWorldReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetWorldAddressReq. */
        interface IGetWorldAddressReq {

            /** GetWorldAddressReq userId */
            userId?: (number|null);

            /** GetWorldAddressReq worldId */
            worldId?: (number|null);
        }

        /** Represents a GetWorldAddressReq. */
        class GetWorldAddressReq implements IGetWorldAddressReq {

            /**
             * Constructs a new GetWorldAddressReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IGetWorldAddressReq);

            /** GetWorldAddressReq userId. */
            public userId: number;

            /** GetWorldAddressReq worldId. */
            public worldId: number;

            /**
             * Creates a new GetWorldAddressReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetWorldAddressReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IGetWorldAddressReq): C2WSProtocol.Message.GetWorldAddressReq;

            /**
             * Encodes the specified GetWorldAddressReq message. Does not implicitly {@link C2WSProtocol.Message.GetWorldAddressReq.verify|verify} messages.
             * @param message GetWorldAddressReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IGetWorldAddressReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetWorldAddressReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.GetWorldAddressReq.verify|verify} messages.
             * @param message GetWorldAddressReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IGetWorldAddressReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetWorldAddressReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetWorldAddressReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.GetWorldAddressReq;

            /**
             * Decodes a GetWorldAddressReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetWorldAddressReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.GetWorldAddressReq;

            /**
             * Verifies a GetWorldAddressReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetWorldAddressReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetWorldAddressReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.GetWorldAddressReq;

            /**
             * Creates a plain object from a GetWorldAddressReq message. Also converts values to other types if specified.
             * @param message GetWorldAddressReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.GetWorldAddressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetWorldAddressReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetWorldAddressReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AvatarSlotReq. */
        interface IAvatarSlotReq {

            /** AvatarSlotReq userId */
            userId?: (number|null);

            /** AvatarSlotReq characterCmsId */
            characterCmsId?: (number|null);
        }

        /** Represents an AvatarSlotReq. */
        class AvatarSlotReq implements IAvatarSlotReq {

            /**
             * Constructs a new AvatarSlotReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IAvatarSlotReq);

            /** AvatarSlotReq userId. */
            public userId: number;

            /** AvatarSlotReq characterCmsId. */
            public characterCmsId: number;

            /**
             * Creates a new AvatarSlotReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AvatarSlotReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IAvatarSlotReq): C2WSProtocol.Message.AvatarSlotReq;

            /**
             * Encodes the specified AvatarSlotReq message. Does not implicitly {@link C2WSProtocol.Message.AvatarSlotReq.verify|verify} messages.
             * @param message AvatarSlotReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IAvatarSlotReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AvatarSlotReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.AvatarSlotReq.verify|verify} messages.
             * @param message AvatarSlotReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IAvatarSlotReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AvatarSlotReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AvatarSlotReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.AvatarSlotReq;

            /**
             * Decodes an AvatarSlotReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AvatarSlotReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.AvatarSlotReq;

            /**
             * Verifies an AvatarSlotReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AvatarSlotReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AvatarSlotReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.AvatarSlotReq;

            /**
             * Creates a plain object from an AvatarSlotReq message. Also converts values to other types if specified.
             * @param message AvatarSlotReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.AvatarSlotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AvatarSlotReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AvatarSlotReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChangeAvatarSlotReq. */
        interface IChangeAvatarSlotReq {

            /** ChangeAvatarSlotReq userId */
            userId?: (number|null);

            /** ChangeAvatarSlotReq characterCmsId */
            characterCmsId?: (number|null);

            /** ChangeAvatarSlotReq avaterSlots */
            avaterSlots?: (Common.IAvaterSlotEntity[]|null);
        }

        /** Represents a ChangeAvatarSlotReq. */
        class ChangeAvatarSlotReq implements IChangeAvatarSlotReq {

            /**
             * Constructs a new ChangeAvatarSlotReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IChangeAvatarSlotReq);

            /** ChangeAvatarSlotReq userId. */
            public userId: number;

            /** ChangeAvatarSlotReq characterCmsId. */
            public characterCmsId: number;

            /** ChangeAvatarSlotReq avaterSlots. */
            public avaterSlots: Common.IAvaterSlotEntity[];

            /**
             * Creates a new ChangeAvatarSlotReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangeAvatarSlotReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IChangeAvatarSlotReq): C2WSProtocol.Message.ChangeAvatarSlotReq;

            /**
             * Encodes the specified ChangeAvatarSlotReq message. Does not implicitly {@link C2WSProtocol.Message.ChangeAvatarSlotReq.verify|verify} messages.
             * @param message ChangeAvatarSlotReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IChangeAvatarSlotReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangeAvatarSlotReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.ChangeAvatarSlotReq.verify|verify} messages.
             * @param message ChangeAvatarSlotReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IChangeAvatarSlotReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangeAvatarSlotReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangeAvatarSlotReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.ChangeAvatarSlotReq;

            /**
             * Decodes a ChangeAvatarSlotReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangeAvatarSlotReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.ChangeAvatarSlotReq;

            /**
             * Verifies a ChangeAvatarSlotReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangeAvatarSlotReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangeAvatarSlotReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.ChangeAvatarSlotReq;

            /**
             * Creates a plain object from a ChangeAvatarSlotReq message. Also converts values to other types if specified.
             * @param message ChangeAvatarSlotReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.ChangeAvatarSlotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangeAvatarSlotReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChangeAvatarSlotReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MyProfileReq. */
        interface IMyProfileReq {

            /** MyProfileReq UserId */
            UserId?: (number|null);
        }

        /** Represents a MyProfileReq. */
        class MyProfileReq implements IMyProfileReq {

            /**
             * Constructs a new MyProfileReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IMyProfileReq);

            /** MyProfileReq UserId. */
            public UserId: number;

            /**
             * Creates a new MyProfileReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MyProfileReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IMyProfileReq): C2WSProtocol.Message.MyProfileReq;

            /**
             * Encodes the specified MyProfileReq message. Does not implicitly {@link C2WSProtocol.Message.MyProfileReq.verify|verify} messages.
             * @param message MyProfileReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IMyProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MyProfileReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.MyProfileReq.verify|verify} messages.
             * @param message MyProfileReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IMyProfileReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MyProfileReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MyProfileReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.MyProfileReq;

            /**
             * Decodes a MyProfileReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MyProfileReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.MyProfileReq;

            /**
             * Verifies a MyProfileReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MyProfileReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MyProfileReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.MyProfileReq;

            /**
             * Creates a plain object from a MyProfileReq message. Also converts values to other types if specified.
             * @param message MyProfileReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.MyProfileReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MyProfileReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MyProfileReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ActionReq. */
        interface IActionReq {

            /** ActionReq userId */
            userId?: (number|null);

            /** ActionReq byteArrMessage */
            byteArrMessage?: (Uint8Array|null);
        }

        /** Represents an ActionReq. */
        class ActionReq implements IActionReq {

            /**
             * Constructs a new ActionReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IActionReq);

            /** ActionReq userId. */
            public userId: number;

            /** ActionReq byteArrMessage. */
            public byteArrMessage: Uint8Array;

            /**
             * Creates a new ActionReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActionReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IActionReq): C2WSProtocol.Message.ActionReq;

            /**
             * Encodes the specified ActionReq message. Does not implicitly {@link C2WSProtocol.Message.ActionReq.verify|verify} messages.
             * @param message ActionReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IActionReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActionReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.ActionReq.verify|verify} messages.
             * @param message ActionReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IActionReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActionReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActionReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.ActionReq;

            /**
             * Decodes an ActionReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActionReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.ActionReq;

            /**
             * Verifies an ActionReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActionReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActionReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.ActionReq;

            /**
             * Creates a plain object from an ActionReq message. Also converts values to other types if specified.
             * @param message ActionReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.ActionReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActionReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ActionReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlaceObject. */
        interface IPlaceObject {

            /** PlaceObject userId */
            userId?: (number|null);

            /** PlaceObject itemCmsId */
            itemCmsId?: (number|null);
        }

        /** Represents a PlaceObject. */
        class PlaceObject implements IPlaceObject {

            /**
             * Constructs a new PlaceObject.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IPlaceObject);

            /** PlaceObject userId. */
            public userId: number;

            /** PlaceObject itemCmsId. */
            public itemCmsId: number;

            /**
             * Creates a new PlaceObject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaceObject instance
             */
            public static create(properties?: C2WSProtocol.Message.IPlaceObject): C2WSProtocol.Message.PlaceObject;

            /**
             * Encodes the specified PlaceObject message. Does not implicitly {@link C2WSProtocol.Message.PlaceObject.verify|verify} messages.
             * @param message PlaceObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IPlaceObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlaceObject message, length delimited. Does not implicitly {@link C2WSProtocol.Message.PlaceObject.verify|verify} messages.
             * @param message PlaceObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IPlaceObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaceObject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlaceObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.PlaceObject;

            /**
             * Decodes a PlaceObject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlaceObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.PlaceObject;

            /**
             * Verifies a PlaceObject message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaceObject message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaceObject
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.PlaceObject;

            /**
             * Creates a plain object from a PlaceObject message. Also converts values to other types if specified.
             * @param message PlaceObject
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.PlaceObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaceObject to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlaceObject
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RetrieveObject. */
        interface IRetrieveObject {

            /** RetrieveObject userId */
            userId?: (number|null);

            /** RetrieveObject objectCmsId */
            objectCmsId?: (number|null);
        }

        /** Represents a RetrieveObject. */
        class RetrieveObject implements IRetrieveObject {

            /**
             * Constructs a new RetrieveObject.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IRetrieveObject);

            /** RetrieveObject userId. */
            public userId: number;

            /** RetrieveObject objectCmsId. */
            public objectCmsId: number;

            /**
             * Creates a new RetrieveObject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RetrieveObject instance
             */
            public static create(properties?: C2WSProtocol.Message.IRetrieveObject): C2WSProtocol.Message.RetrieveObject;

            /**
             * Encodes the specified RetrieveObject message. Does not implicitly {@link C2WSProtocol.Message.RetrieveObject.verify|verify} messages.
             * @param message RetrieveObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IRetrieveObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RetrieveObject message, length delimited. Does not implicitly {@link C2WSProtocol.Message.RetrieveObject.verify|verify} messages.
             * @param message RetrieveObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IRetrieveObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RetrieveObject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RetrieveObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.RetrieveObject;

            /**
             * Decodes a RetrieveObject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RetrieveObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.RetrieveObject;

            /**
             * Verifies a RetrieveObject message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RetrieveObject message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RetrieveObject
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.RetrieveObject;

            /**
             * Creates a plain object from a RetrieveObject message. Also converts values to other types if specified.
             * @param message RetrieveObject
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.RetrieveObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RetrieveObject to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RetrieveObject
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PickupItemReq. */
        interface IPickupItemReq {

            /** PickupItemReq userId */
            userId?: (number|null);

            /** PickupItemReq objectCmsId */
            objectCmsId?: (number|null);
        }

        /** Represents a PickupItemReq. */
        class PickupItemReq implements IPickupItemReq {

            /**
             * Constructs a new PickupItemReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IPickupItemReq);

            /** PickupItemReq userId. */
            public userId: number;

            /** PickupItemReq objectCmsId. */
            public objectCmsId: number;

            /**
             * Creates a new PickupItemReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PickupItemReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IPickupItemReq): C2WSProtocol.Message.PickupItemReq;

            /**
             * Encodes the specified PickupItemReq message. Does not implicitly {@link C2WSProtocol.Message.PickupItemReq.verify|verify} messages.
             * @param message PickupItemReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IPickupItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PickupItemReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.PickupItemReq.verify|verify} messages.
             * @param message PickupItemReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IPickupItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PickupItemReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PickupItemReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.PickupItemReq;

            /**
             * Decodes a PickupItemReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PickupItemReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.PickupItemReq;

            /**
             * Verifies a PickupItemReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PickupItemReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PickupItemReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.PickupItemReq;

            /**
             * Creates a plain object from a PickupItemReq message. Also converts values to other types if specified.
             * @param message PickupItemReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.PickupItemReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PickupItemReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PickupItemReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ThowAwayItemReq. */
        interface IThowAwayItemReq {

            /** ThowAwayItemReq userId */
            userId?: (number|null);

            /** ThowAwayItemReq itemCmsId */
            itemCmsId?: (number|null);
        }

        /** Represents a ThowAwayItemReq. */
        class ThowAwayItemReq implements IThowAwayItemReq {

            /**
             * Constructs a new ThowAwayItemReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IThowAwayItemReq);

            /** ThowAwayItemReq userId. */
            public userId: number;

            /** ThowAwayItemReq itemCmsId. */
            public itemCmsId: number;

            /**
             * Creates a new ThowAwayItemReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThowAwayItemReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IThowAwayItemReq): C2WSProtocol.Message.ThowAwayItemReq;

            /**
             * Encodes the specified ThowAwayItemReq message. Does not implicitly {@link C2WSProtocol.Message.ThowAwayItemReq.verify|verify} messages.
             * @param message ThowAwayItemReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IThowAwayItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThowAwayItemReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.ThowAwayItemReq.verify|verify} messages.
             * @param message ThowAwayItemReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IThowAwayItemReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThowAwayItemReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ThowAwayItemReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.ThowAwayItemReq;

            /**
             * Decodes a ThowAwayItemReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ThowAwayItemReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.ThowAwayItemReq;

            /**
             * Verifies a ThowAwayItemReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThowAwayItemReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThowAwayItemReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.ThowAwayItemReq;

            /**
             * Creates a plain object from a ThowAwayItemReq message. Also converts values to other types if specified.
             * @param message ThowAwayItemReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.ThowAwayItemReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThowAwayItemReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ThowAwayItemReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetFieldObjectReq. */
        interface ISetFieldObjectReq {

            /** SetFieldObjectReq itemDbId */
            itemDbId?: (number|null);

            /** SetFieldObjectReq itemCmsId */
            itemCmsId?: (number|null);

            /** SetFieldObjectReq posX */
            posX?: (number|null);

            /** SetFieldObjectReq posY */
            posY?: (number|null);

            /** SetFieldObjectReq layer */
            layer?: (number|null);

            /** SetFieldObjectReq dir */
            dir?: (number|null);
        }

        /** Represents a SetFieldObjectReq. */
        class SetFieldObjectReq implements ISetFieldObjectReq {

            /**
             * Constructs a new SetFieldObjectReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.ISetFieldObjectReq);

            /** SetFieldObjectReq itemDbId. */
            public itemDbId: number;

            /** SetFieldObjectReq itemCmsId. */
            public itemCmsId: number;

            /** SetFieldObjectReq posX. */
            public posX: number;

            /** SetFieldObjectReq posY. */
            public posY: number;

            /** SetFieldObjectReq layer. */
            public layer: number;

            /** SetFieldObjectReq dir. */
            public dir: number;

            /**
             * Creates a new SetFieldObjectReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetFieldObjectReq instance
             */
            public static create(properties?: C2WSProtocol.Message.ISetFieldObjectReq): C2WSProtocol.Message.SetFieldObjectReq;

            /**
             * Encodes the specified SetFieldObjectReq message. Does not implicitly {@link C2WSProtocol.Message.SetFieldObjectReq.verify|verify} messages.
             * @param message SetFieldObjectReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.ISetFieldObjectReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetFieldObjectReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.SetFieldObjectReq.verify|verify} messages.
             * @param message SetFieldObjectReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.ISetFieldObjectReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetFieldObjectReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetFieldObjectReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.SetFieldObjectReq;

            /**
             * Decodes a SetFieldObjectReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetFieldObjectReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.SetFieldObjectReq;

            /**
             * Verifies a SetFieldObjectReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetFieldObjectReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetFieldObjectReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.SetFieldObjectReq;

            /**
             * Creates a plain object from a SetFieldObjectReq message. Also converts values to other types if specified.
             * @param message SetFieldObjectReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.SetFieldObjectReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetFieldObjectReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetFieldObjectReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateFieldObjectReq. */
        interface IUpdateFieldObjectReq {

            /** UpdateFieldObjectReq objectDbId */
            objectDbId?: (number|null);

            /** UpdateFieldObjectReq posX */
            posX?: (number|null);

            /** UpdateFieldObjectReq posY */
            posY?: (number|null);

            /** UpdateFieldObjectReq layer */
            layer?: (number|null);

            /** UpdateFieldObjectReq dir */
            dir?: (number|null);
        }

        /** Represents an UpdateFieldObjectReq. */
        class UpdateFieldObjectReq implements IUpdateFieldObjectReq {

            /**
             * Constructs a new UpdateFieldObjectReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IUpdateFieldObjectReq);

            /** UpdateFieldObjectReq objectDbId. */
            public objectDbId: number;

            /** UpdateFieldObjectReq posX. */
            public posX: number;

            /** UpdateFieldObjectReq posY. */
            public posY: number;

            /** UpdateFieldObjectReq layer. */
            public layer: number;

            /** UpdateFieldObjectReq dir. */
            public dir: number;

            /**
             * Creates a new UpdateFieldObjectReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateFieldObjectReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IUpdateFieldObjectReq): C2WSProtocol.Message.UpdateFieldObjectReq;

            /**
             * Encodes the specified UpdateFieldObjectReq message. Does not implicitly {@link C2WSProtocol.Message.UpdateFieldObjectReq.verify|verify} messages.
             * @param message UpdateFieldObjectReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IUpdateFieldObjectReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateFieldObjectReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.UpdateFieldObjectReq.verify|verify} messages.
             * @param message UpdateFieldObjectReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IUpdateFieldObjectReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateFieldObjectReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateFieldObjectReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.UpdateFieldObjectReq;

            /**
             * Decodes an UpdateFieldObjectReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateFieldObjectReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.UpdateFieldObjectReq;

            /**
             * Verifies an UpdateFieldObjectReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateFieldObjectReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateFieldObjectReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.UpdateFieldObjectReq;

            /**
             * Creates a plain object from an UpdateFieldObjectReq message. Also converts values to other types if specified.
             * @param message UpdateFieldObjectReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.UpdateFieldObjectReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateFieldObjectReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateFieldObjectReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RemoveFieldObjectReq. */
        interface IRemoveFieldObjectReq {

            /** RemoveFieldObjectReq objectDbId */
            objectDbId?: (number|null);
        }

        /** Represents a RemoveFieldObjectReq. */
        class RemoveFieldObjectReq implements IRemoveFieldObjectReq {

            /**
             * Constructs a new RemoveFieldObjectReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2WSProtocol.Message.IRemoveFieldObjectReq);

            /** RemoveFieldObjectReq objectDbId. */
            public objectDbId: number;

            /**
             * Creates a new RemoveFieldObjectReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveFieldObjectReq instance
             */
            public static create(properties?: C2WSProtocol.Message.IRemoveFieldObjectReq): C2WSProtocol.Message.RemoveFieldObjectReq;

            /**
             * Encodes the specified RemoveFieldObjectReq message. Does not implicitly {@link C2WSProtocol.Message.RemoveFieldObjectReq.verify|verify} messages.
             * @param message RemoveFieldObjectReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2WSProtocol.Message.IRemoveFieldObjectReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveFieldObjectReq message, length delimited. Does not implicitly {@link C2WSProtocol.Message.RemoveFieldObjectReq.verify|verify} messages.
             * @param message RemoveFieldObjectReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2WSProtocol.Message.IRemoveFieldObjectReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveFieldObjectReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoveFieldObjectReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2WSProtocol.Message.RemoveFieldObjectReq;

            /**
             * Decodes a RemoveFieldObjectReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveFieldObjectReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2WSProtocol.Message.RemoveFieldObjectReq;

            /**
             * Verifies a RemoveFieldObjectReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveFieldObjectReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveFieldObjectReq
             */
            public static fromObject(object: { [k: string]: any }): C2WSProtocol.Message.RemoveFieldObjectReq;

            /**
             * Creates a plain object from a RemoveFieldObjectReq message. Also converts values to other types if specified.
             * @param message RemoveFieldObjectReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2WSProtocol.Message.RemoveFieldObjectReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveFieldObjectReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RemoveFieldObjectReq
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Properties of a Common. */
export interface ICommon {
}

/** Represents a Common. */
export class Common implements ICommon {

    /**
     * Constructs a new Common.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommon);

    /**
     * Creates a new Common instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Common instance
     */
    public static create(properties?: ICommon): Common;

    /**
     * Encodes the specified Common message. Does not implicitly {@link Common.verify|verify} messages.
     * @param message Common message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Common message, length delimited. Does not implicitly {@link Common.verify|verify} messages.
     * @param message Common message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Common message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Common
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common;

    /**
     * Decodes a Common message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Common
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common;

    /**
     * Verifies a Common message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Common message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Common
     */
    public static fromObject(object: { [k: string]: any }): Common;

    /**
     * Creates a plain object from a Common message. Also converts values to other types if specified.
     * @param message Common
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Common, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Common to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Common
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Common {

    /** Properties of a MoveStateEntity. */
    interface IMoveStateEntity {

        /** MoveStateEntity x */
        x?: (number|null);

        /** MoveStateEntity y */
        y?: (number|null);

        /** MoveStateEntity z */
        z?: (number|null);

        /** MoveStateEntity degrees */
        degrees?: (number|null);

        /** MoveStateEntity vx */
        vx?: (number|null);

        /** MoveStateEntity vy */
        vy?: (number|null);

        /** MoveStateEntity vz */
        vz?: (number|null);

        /** MoveStateEntity clientTimeUtc */
        clientTimeUtc?: (number|null);
    }

    /** Represents a MoveStateEntity. */
    class MoveStateEntity implements IMoveStateEntity {

        /**
         * Constructs a new MoveStateEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IMoveStateEntity);

        /** MoveStateEntity x. */
        public x: number;

        /** MoveStateEntity y. */
        public y: number;

        /** MoveStateEntity z. */
        public z: number;

        /** MoveStateEntity degrees. */
        public degrees: number;

        /** MoveStateEntity vx. */
        public vx: number;

        /** MoveStateEntity vy. */
        public vy: number;

        /** MoveStateEntity vz. */
        public vz: number;

        /** MoveStateEntity clientTimeUtc. */
        public clientTimeUtc: number;

        /**
         * Creates a new MoveStateEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveStateEntity instance
         */
        public static create(properties?: Common.IMoveStateEntity): Common.MoveStateEntity;

        /**
         * Encodes the specified MoveStateEntity message. Does not implicitly {@link Common.MoveStateEntity.verify|verify} messages.
         * @param message MoveStateEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IMoveStateEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoveStateEntity message, length delimited. Does not implicitly {@link Common.MoveStateEntity.verify|verify} messages.
         * @param message MoveStateEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IMoveStateEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveStateEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveStateEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.MoveStateEntity;

        /**
         * Decodes a MoveStateEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveStateEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.MoveStateEntity;

        /**
         * Verifies a MoveStateEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoveStateEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoveStateEntity
         */
        public static fromObject(object: { [k: string]: any }): Common.MoveStateEntity;

        /**
         * Creates a plain object from a MoveStateEntity message. Also converts values to other types if specified.
         * @param message MoveStateEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.MoveStateEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoveStateEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MoveStateEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserEntity. */
    interface IUserEntity {

        /** UserEntity userId */
        userId?: (number|null);

        /** UserEntity accountId */
        accountId?: (string|null);

        /** UserEntity pubId */
        pubId?: (string|null);

        /** UserEntity enterWorldToken */
        enterWorldToken?: (string|null);
    }

    /** Represents a UserEntity. */
    class UserEntity implements IUserEntity {

        /**
         * Constructs a new UserEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IUserEntity);

        /** UserEntity userId. */
        public userId?: (number|null);

        /** UserEntity accountId. */
        public accountId?: (string|null);

        /** UserEntity pubId. */
        public pubId?: (string|null);

        /** UserEntity enterWorldToken. */
        public enterWorldToken?: (string|null);

        /** UserEntity _userId. */
        public _userId?: "userId";

        /** UserEntity _accountId. */
        public _accountId?: "accountId";

        /** UserEntity _pubId. */
        public _pubId?: "pubId";

        /** UserEntity _enterWorldToken. */
        public _enterWorldToken?: "enterWorldToken";

        /**
         * Creates a new UserEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserEntity instance
         */
        public static create(properties?: Common.IUserEntity): Common.UserEntity;

        /**
         * Encodes the specified UserEntity message. Does not implicitly {@link Common.UserEntity.verify|verify} messages.
         * @param message UserEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IUserEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserEntity message, length delimited. Does not implicitly {@link Common.UserEntity.verify|verify} messages.
         * @param message UserEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IUserEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.UserEntity;

        /**
         * Decodes a UserEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.UserEntity;

        /**
         * Verifies a UserEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserEntity
         */
        public static fromObject(object: { [k: string]: any }): Common.UserEntity;

        /**
         * Creates a plain object from a UserEntity message. Also converts values to other types if specified.
         * @param message UserEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.UserEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AvaterSlotEntity. */
    interface IAvaterSlotEntity {

        /** AvaterSlotEntity avatarSlotId */
        avatarSlotId?: (number|null);

        /** AvaterSlotEntity avatarItemCmsId */
        avatarItemCmsId?: (number|null);
    }

    /** Represents an AvaterSlotEntity. */
    class AvaterSlotEntity implements IAvaterSlotEntity {

        /**
         * Constructs a new AvaterSlotEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IAvaterSlotEntity);

        /** AvaterSlotEntity avatarSlotId. */
        public avatarSlotId: number;

        /** AvaterSlotEntity avatarItemCmsId. */
        public avatarItemCmsId: number;

        /**
         * Creates a new AvaterSlotEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AvaterSlotEntity instance
         */
        public static create(properties?: Common.IAvaterSlotEntity): Common.AvaterSlotEntity;

        /**
         * Encodes the specified AvaterSlotEntity message. Does not implicitly {@link Common.AvaterSlotEntity.verify|verify} messages.
         * @param message AvaterSlotEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IAvaterSlotEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AvaterSlotEntity message, length delimited. Does not implicitly {@link Common.AvaterSlotEntity.verify|verify} messages.
         * @param message AvaterSlotEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IAvaterSlotEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvaterSlotEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AvaterSlotEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.AvaterSlotEntity;

        /**
         * Decodes an AvaterSlotEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AvaterSlotEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.AvaterSlotEntity;

        /**
         * Verifies an AvaterSlotEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AvaterSlotEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AvaterSlotEntity
         */
        public static fromObject(object: { [k: string]: any }): Common.AvaterSlotEntity;

        /**
         * Creates a plain object from an AvaterSlotEntity message. Also converts values to other types if specified.
         * @param message AvaterSlotEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.AvaterSlotEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AvaterSlotEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AvaterSlotEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CharacterEntity. */
    interface ICharacterEntity {

        /** CharacterEntity name */
        name?: (string|null);

        /** CharacterEntity cmsId */
        cmsId?: (number|null);

        /** CharacterEntity avaterSlots */
        avaterSlots?: (Common.IAvaterSlotEntity[]|null);
    }

    /** Represents a CharacterEntity. */
    class CharacterEntity implements ICharacterEntity {

        /**
         * Constructs a new CharacterEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.ICharacterEntity);

        /** CharacterEntity name. */
        public name?: (string|null);

        /** CharacterEntity cmsId. */
        public cmsId?: (number|null);

        /** CharacterEntity avaterSlots. */
        public avaterSlots: Common.IAvaterSlotEntity[];

        /** CharacterEntity _name. */
        public _name?: "name";

        /** CharacterEntity _cmsId. */
        public _cmsId?: "cmsId";

        /**
         * Creates a new CharacterEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CharacterEntity instance
         */
        public static create(properties?: Common.ICharacterEntity): Common.CharacterEntity;

        /**
         * Encodes the specified CharacterEntity message. Does not implicitly {@link Common.CharacterEntity.verify|verify} messages.
         * @param message CharacterEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.ICharacterEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CharacterEntity message, length delimited. Does not implicitly {@link Common.CharacterEntity.verify|verify} messages.
         * @param message CharacterEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.ICharacterEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CharacterEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CharacterEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.CharacterEntity;

        /**
         * Decodes a CharacterEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CharacterEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.CharacterEntity;

        /**
         * Verifies a CharacterEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CharacterEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CharacterEntity
         */
        public static fromObject(object: { [k: string]: any }): Common.CharacterEntity;

        /**
         * Creates a plain object from a CharacterEntity message. Also converts values to other types if specified.
         * @param message CharacterEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.CharacterEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CharacterEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CharacterEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncEntity. */
    interface ISyncEntity {

        /** SyncEntity user */
        user?: (Common.IUserEntity|null);

        /** SyncEntity character */
        character?: (Common.ICharacterEntity|null);
    }

    /** Represents a SyncEntity. */
    class SyncEntity implements ISyncEntity {

        /**
         * Constructs a new SyncEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.ISyncEntity);

        /** SyncEntity user. */
        public user?: (Common.IUserEntity|null);

        /** SyncEntity character. */
        public character?: (Common.ICharacterEntity|null);

        /** SyncEntity _user. */
        public _user?: "user";

        /** SyncEntity _character. */
        public _character?: "character";

        /**
         * Creates a new SyncEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncEntity instance
         */
        public static create(properties?: Common.ISyncEntity): Common.SyncEntity;

        /**
         * Encodes the specified SyncEntity message. Does not implicitly {@link Common.SyncEntity.verify|verify} messages.
         * @param message SyncEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.ISyncEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncEntity message, length delimited. Does not implicitly {@link Common.SyncEntity.verify|verify} messages.
         * @param message SyncEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.ISyncEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.SyncEntity;

        /**
         * Decodes a SyncEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.SyncEntity;

        /**
         * Verifies a SyncEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncEntity
         */
        public static fromObject(object: { [k: string]: any }): Common.SyncEntity;

        /**
         * Creates a plain object from a SyncEntity message. Also converts values to other types if specified.
         * @param message SyncEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.SyncEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncEntity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
