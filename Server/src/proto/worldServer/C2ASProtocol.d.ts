import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a C2ASProtocol. */
export interface IC2ASProtocol {
}

/** Represents a C2ASProtocol. */
export class C2ASProtocol implements IC2ASProtocol {

    /**
     * Constructs a new C2ASProtocol.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2ASProtocol);

    /**
     * Creates a new C2ASProtocol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2ASProtocol instance
     */
    public static create(properties?: IC2ASProtocol): C2ASProtocol;

    /**
     * Encodes the specified C2ASProtocol message. Does not implicitly {@link C2ASProtocol.verify|verify} messages.
     * @param message C2ASProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2ASProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2ASProtocol message, length delimited. Does not implicitly {@link C2ASProtocol.verify|verify} messages.
     * @param message C2ASProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2ASProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2ASProtocol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2ASProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2ASProtocol;

    /**
     * Decodes a C2ASProtocol message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2ASProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2ASProtocol;

    /**
     * Verifies a C2ASProtocol message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2ASProtocol message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2ASProtocol
     */
    public static fromObject(object: { [k: string]: any }): C2ASProtocol;

    /**
     * Creates a plain object from a C2ASProtocol message. Also converts values to other types if specified.
     * @param message C2ASProtocol
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2ASProtocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2ASProtocol to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2ASProtocol
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace C2ASProtocol {

    /** PacketType enum. */
    enum PacketType {
        NONE = 0,
        LoginReq = 1000,
        GetWorldServerAddressReq = 1001,
        Pong = 3001,
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
        constructor(properties?: C2ASProtocol.IMessage);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: C2ASProtocol.IMessage): C2ASProtocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link C2ASProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: C2ASProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link C2ASProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: C2ASProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2ASProtocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2ASProtocol.Message;

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
        public static fromObject(object: { [k: string]: any }): C2ASProtocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: C2ASProtocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** LoginReq accountId */
            accountId?: (string|null);

            /** LoginReq clientVersion */
            clientVersion?: (string|null);

            /** LoginReq loginPlatform */
            loginPlatform?: (string|null);
        }

        /** Represents a LoginReq. */
        class LoginReq implements ILoginReq {

            /**
             * Constructs a new LoginReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2ASProtocol.Message.ILoginReq);

            /** LoginReq accountId. */
            public accountId: string;

            /** LoginReq clientVersion. */
            public clientVersion: string;

            /** LoginReq loginPlatform. */
            public loginPlatform: string;

            /**
             * Creates a new LoginReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginReq instance
             */
            public static create(properties?: C2ASProtocol.Message.ILoginReq): C2ASProtocol.Message.LoginReq;

            /**
             * Encodes the specified LoginReq message. Does not implicitly {@link C2ASProtocol.Message.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2ASProtocol.Message.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link C2ASProtocol.Message.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2ASProtocol.Message.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2ASProtocol.Message.LoginReq;

            /**
             * Decodes a LoginReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2ASProtocol.Message.LoginReq;

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
            public static fromObject(object: { [k: string]: any }): C2ASProtocol.Message.LoginReq;

            /**
             * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
             * @param message LoginReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2ASProtocol.Message.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a GetWorldServerAddressReq. */
        interface IGetWorldServerAddressReq {
        }

        /** Represents a GetWorldServerAddressReq. */
        class GetWorldServerAddressReq implements IGetWorldServerAddressReq {

            /**
             * Constructs a new GetWorldServerAddressReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: C2ASProtocol.Message.IGetWorldServerAddressReq);

            /**
             * Creates a new GetWorldServerAddressReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetWorldServerAddressReq instance
             */
            public static create(properties?: C2ASProtocol.Message.IGetWorldServerAddressReq): C2ASProtocol.Message.GetWorldServerAddressReq;

            /**
             * Encodes the specified GetWorldServerAddressReq message. Does not implicitly {@link C2ASProtocol.Message.GetWorldServerAddressReq.verify|verify} messages.
             * @param message GetWorldServerAddressReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2ASProtocol.Message.IGetWorldServerAddressReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetWorldServerAddressReq message, length delimited. Does not implicitly {@link C2ASProtocol.Message.GetWorldServerAddressReq.verify|verify} messages.
             * @param message GetWorldServerAddressReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2ASProtocol.Message.IGetWorldServerAddressReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetWorldServerAddressReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetWorldServerAddressReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2ASProtocol.Message.GetWorldServerAddressReq;

            /**
             * Decodes a GetWorldServerAddressReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetWorldServerAddressReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2ASProtocol.Message.GetWorldServerAddressReq;

            /**
             * Verifies a GetWorldServerAddressReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetWorldServerAddressReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetWorldServerAddressReq
             */
            public static fromObject(object: { [k: string]: any }): C2ASProtocol.Message.GetWorldServerAddressReq;

            /**
             * Creates a plain object from a GetWorldServerAddressReq message. Also converts values to other types if specified.
             * @param message GetWorldServerAddressReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2ASProtocol.Message.GetWorldServerAddressReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetWorldServerAddressReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetWorldServerAddressReq
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
            constructor(properties?: C2ASProtocol.Message.IPing);

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
            public static create(properties?: C2ASProtocol.Message.IPing): C2ASProtocol.Message.Ping;

            /**
             * Encodes the specified Ping message. Does not implicitly {@link C2ASProtocol.Message.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: C2ASProtocol.Message.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link C2ASProtocol.Message.Ping.verify|verify} messages.
             * @param message Ping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: C2ASProtocol.Message.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2ASProtocol.Message.Ping;

            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2ASProtocol.Message.Ping;

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
            public static fromObject(object: { [k: string]: any }): C2ASProtocol.Message.Ping;

            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @param message Ping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: C2ASProtocol.Message.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }
}
