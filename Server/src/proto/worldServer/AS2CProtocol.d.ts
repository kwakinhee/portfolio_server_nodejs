import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a AS2CProtocol. */
export interface IAS2CProtocol {
}

/** Represents a AS2CProtocol. */
export class AS2CProtocol implements IAS2CProtocol {

    /**
     * Constructs a new AS2CProtocol.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAS2CProtocol);

    /**
     * Creates a new AS2CProtocol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AS2CProtocol instance
     */
    public static create(properties?: IAS2CProtocol): AS2CProtocol;

    /**
     * Encodes the specified AS2CProtocol message. Does not implicitly {@link AS2CProtocol.verify|verify} messages.
     * @param message AS2CProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAS2CProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AS2CProtocol message, length delimited. Does not implicitly {@link AS2CProtocol.verify|verify} messages.
     * @param message AS2CProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAS2CProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a AS2CProtocol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AS2CProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AS2CProtocol;

    /**
     * Decodes a AS2CProtocol message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AS2CProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AS2CProtocol;

    /**
     * Verifies a AS2CProtocol message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a AS2CProtocol message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AS2CProtocol
     */
    public static fromObject(object: { [k: string]: any }): AS2CProtocol;

    /**
     * Creates a plain object from a AS2CProtocol message. Also converts values to other types if specified.
     * @param message AS2CProtocol
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AS2CProtocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AS2CProtocol to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AS2CProtocol
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace AS2CProtocol {

    /** PacketType enum. */
    enum PacketType {
        NONE = 0,
        LoginRes = 1001,
        GetWorldServerAddressRes = 1002,
        KickNoti = 1003,
        LogoutNoti = 1004,
        Pong = 3001,
        ServerErrorNoti = 3002,
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
        constructor(properties?: AS2CProtocol.IMessage);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: AS2CProtocol.IMessage): AS2CProtocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link AS2CProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AS2CProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link AS2CProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AS2CProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AS2CProtocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AS2CProtocol.Message;

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
        public static fromObject(object: { [k: string]: any }): AS2CProtocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AS2CProtocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** EKickType enum. */
        enum EKickType {
            NAVER_CONTROLLER_KICK = 0
        }

        /** Properties of a LoginRes. */
        interface ILoginRes {

            /** LoginRes result */
            result?: (boolean|null);

            /** LoginRes loginTimeUtc */
            loginTimeUtc?: (number|Long|null);

            /** LoginRes enterWorldToken */
            enterWorldToken?: (string|null);

            /** LoginRes isAdmin */
            isAdmin?: (number|null);

            /** LoginRes isNewUser */
            isNewUser?: (boolean|null);
        }

        /** Represents a LoginRes. */
        class LoginRes implements ILoginRes {

            /**
             * Constructs a new LoginRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: AS2CProtocol.Message.ILoginRes);

            /** LoginRes result. */
            public result: boolean;

            /** LoginRes loginTimeUtc. */
            public loginTimeUtc: (number|Long);

            /** LoginRes enterWorldToken. */
            public enterWorldToken: string;

            /** LoginRes isAdmin. */
            public isAdmin: number;

            /** LoginRes isNewUser. */
            public isNewUser: boolean;

            /**
             * Creates a new LoginRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginRes instance
             */
            public static create(properties?: AS2CProtocol.Message.ILoginRes): AS2CProtocol.Message.LoginRes;

            /**
             * Encodes the specified LoginRes message. Does not implicitly {@link AS2CProtocol.Message.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AS2CProtocol.Message.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link AS2CProtocol.Message.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AS2CProtocol.Message.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AS2CProtocol.Message.LoginRes;

            /**
             * Decodes a LoginRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AS2CProtocol.Message.LoginRes;

            /**
             * Verifies a LoginRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginRes
             */
            public static fromObject(object: { [k: string]: any }): AS2CProtocol.Message.LoginRes;

            /**
             * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
             * @param message LoginRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AS2CProtocol.Message.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoginRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetWorldServerAddressRes. */
        interface IGetWorldServerAddressRes {

            /** GetWorldServerAddressRes result */
            result?: (boolean|null);

            /** GetWorldServerAddressRes serverAddress */
            serverAddress?: (string|null);
        }

        /** Represents a GetWorldServerAddressRes. */
        class GetWorldServerAddressRes implements IGetWorldServerAddressRes {

            /**
             * Constructs a new GetWorldServerAddressRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: AS2CProtocol.Message.IGetWorldServerAddressRes);

            /** GetWorldServerAddressRes result. */
            public result: boolean;

            /** GetWorldServerAddressRes serverAddress. */
            public serverAddress: string;

            /**
             * Creates a new GetWorldServerAddressRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetWorldServerAddressRes instance
             */
            public static create(properties?: AS2CProtocol.Message.IGetWorldServerAddressRes): AS2CProtocol.Message.GetWorldServerAddressRes;

            /**
             * Encodes the specified GetWorldServerAddressRes message. Does not implicitly {@link AS2CProtocol.Message.GetWorldServerAddressRes.verify|verify} messages.
             * @param message GetWorldServerAddressRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AS2CProtocol.Message.IGetWorldServerAddressRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetWorldServerAddressRes message, length delimited. Does not implicitly {@link AS2CProtocol.Message.GetWorldServerAddressRes.verify|verify} messages.
             * @param message GetWorldServerAddressRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AS2CProtocol.Message.IGetWorldServerAddressRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetWorldServerAddressRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetWorldServerAddressRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AS2CProtocol.Message.GetWorldServerAddressRes;

            /**
             * Decodes a GetWorldServerAddressRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetWorldServerAddressRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AS2CProtocol.Message.GetWorldServerAddressRes;

            /**
             * Verifies a GetWorldServerAddressRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetWorldServerAddressRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetWorldServerAddressRes
             */
            public static fromObject(object: { [k: string]: any }): AS2CProtocol.Message.GetWorldServerAddressRes;

            /**
             * Creates a plain object from a GetWorldServerAddressRes message. Also converts values to other types if specified.
             * @param message GetWorldServerAddressRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AS2CProtocol.Message.GetWorldServerAddressRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetWorldServerAddressRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetWorldServerAddressRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KickNoti. */
        interface IKickNoti {

            /** KickNoti kickType */
            kickType?: (AS2CProtocol.Message.EKickType|null);
        }

        /** Represents a KickNoti. */
        class KickNoti implements IKickNoti {

            /**
             * Constructs a new KickNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: AS2CProtocol.Message.IKickNoti);

            /** KickNoti kickType. */
            public kickType: AS2CProtocol.Message.EKickType;

            /**
             * Creates a new KickNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KickNoti instance
             */
            public static create(properties?: AS2CProtocol.Message.IKickNoti): AS2CProtocol.Message.KickNoti;

            /**
             * Encodes the specified KickNoti message. Does not implicitly {@link AS2CProtocol.Message.KickNoti.verify|verify} messages.
             * @param message KickNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AS2CProtocol.Message.IKickNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KickNoti message, length delimited. Does not implicitly {@link AS2CProtocol.Message.KickNoti.verify|verify} messages.
             * @param message KickNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AS2CProtocol.Message.IKickNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KickNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KickNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AS2CProtocol.Message.KickNoti;

            /**
             * Decodes a KickNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KickNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AS2CProtocol.Message.KickNoti;

            /**
             * Verifies a KickNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KickNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KickNoti
             */
            public static fromObject(object: { [k: string]: any }): AS2CProtocol.Message.KickNoti;

            /**
             * Creates a plain object from a KickNoti message. Also converts values to other types if specified.
             * @param message KickNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AS2CProtocol.Message.KickNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KickNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KickNoti
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LogoutNoti. */
        interface ILogoutNoti {

            /** LogoutNoti userId */
            userId?: (number|null);

            /** LogoutNoti userCount */
            userCount?: (number|null);
        }

        /** Represents a LogoutNoti. */
        class LogoutNoti implements ILogoutNoti {

            /**
             * Constructs a new LogoutNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: AS2CProtocol.Message.ILogoutNoti);

            /** LogoutNoti userId. */
            public userId: number;

            /** LogoutNoti userCount. */
            public userCount: number;

            /**
             * Creates a new LogoutNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LogoutNoti instance
             */
            public static create(properties?: AS2CProtocol.Message.ILogoutNoti): AS2CProtocol.Message.LogoutNoti;

            /**
             * Encodes the specified LogoutNoti message. Does not implicitly {@link AS2CProtocol.Message.LogoutNoti.verify|verify} messages.
             * @param message LogoutNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AS2CProtocol.Message.ILogoutNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LogoutNoti message, length delimited. Does not implicitly {@link AS2CProtocol.Message.LogoutNoti.verify|verify} messages.
             * @param message LogoutNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AS2CProtocol.Message.ILogoutNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LogoutNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LogoutNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AS2CProtocol.Message.LogoutNoti;

            /**
             * Decodes a LogoutNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LogoutNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AS2CProtocol.Message.LogoutNoti;

            /**
             * Verifies a LogoutNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LogoutNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LogoutNoti
             */
            public static fromObject(object: { [k: string]: any }): AS2CProtocol.Message.LogoutNoti;

            /**
             * Creates a plain object from a LogoutNoti message. Also converts values to other types if specified.
             * @param message LogoutNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AS2CProtocol.Message.LogoutNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LogoutNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LogoutNoti
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Pong. */
        interface IPong {

            /** Pong serverTimeUtc */
            serverTimeUtc?: (number|Long|null);

            /** Pong stressMessage */
            stressMessage?: (string|null);
        }

        /** Represents a Pong. */
        class Pong implements IPong {

            /**
             * Constructs a new Pong.
             * @param [properties] Properties to set
             */
            constructor(properties?: AS2CProtocol.Message.IPong);

            /** Pong serverTimeUtc. */
            public serverTimeUtc?: (number|Long|null);

            /** Pong stressMessage. */
            public stressMessage?: (string|null);

            /** Pong _serverTimeUtc. */
            public _serverTimeUtc?: "serverTimeUtc";

            /** Pong _stressMessage. */
            public _stressMessage?: "stressMessage";

            /**
             * Creates a new Pong instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pong instance
             */
            public static create(properties?: AS2CProtocol.Message.IPong): AS2CProtocol.Message.Pong;

            /**
             * Encodes the specified Pong message. Does not implicitly {@link AS2CProtocol.Message.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AS2CProtocol.Message.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link AS2CProtocol.Message.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AS2CProtocol.Message.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AS2CProtocol.Message.Pong;

            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AS2CProtocol.Message.Pong;

            /**
             * Verifies a Pong message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pong
             */
            public static fromObject(object: { [k: string]: any }): AS2CProtocol.Message.Pong;

            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @param message Pong
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AS2CProtocol.Message.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pong to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Pong
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
