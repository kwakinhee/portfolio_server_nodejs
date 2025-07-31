import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a WS2CProtocol. */
export interface IWS2CProtocol {
}

/** Represents a WS2CProtocol. */
export class WS2CProtocol implements IWS2CProtocol {

    /**
     * Constructs a new WS2CProtocol.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWS2CProtocol);

    /**
     * Creates a new WS2CProtocol instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WS2CProtocol instance
     */
    public static create(properties?: IWS2CProtocol): WS2CProtocol;

    /**
     * Encodes the specified WS2CProtocol message. Does not implicitly {@link WS2CProtocol.verify|verify} messages.
     * @param message WS2CProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWS2CProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WS2CProtocol message, length delimited. Does not implicitly {@link WS2CProtocol.verify|verify} messages.
     * @param message WS2CProtocol message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWS2CProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WS2CProtocol message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WS2CProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol;

    /**
     * Decodes a WS2CProtocol message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WS2CProtocol
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol;

    /**
     * Verifies a WS2CProtocol message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WS2CProtocol message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WS2CProtocol
     */
    public static fromObject(object: { [k: string]: any }): WS2CProtocol;

    /**
     * Creates a plain object from a WS2CProtocol message. Also converts values to other types if specified.
     * @param message WS2CProtocol
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WS2CProtocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WS2CProtocol to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WS2CProtocol
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace WS2CProtocol {

    /** PacketType enum. */
    enum PacketType {
        NONE = 0,
        LoginRes = 1001,
        MoveRes = 1002,
        LogoutRes = 1003,
        JoinWorldRes = 1004,
        FullSyncWorldRes = 1005,
        GetWorldAddressRes = 1006,
        LoadAvatarSlotRes = 1007,
        ChangeAvatarSlotRes = 1008,
        GetMyProfileRes = 1009,
        ActionRes = 1010,
        FieldObjectListRes = 1011,
        SetFieldObjectRes = 1012,
        UpdateFieldObjectRes = 1013,
        RemoveFieldObjectRes = 1014,
        KickNoti = 2001,
        UserJoinBroadcastNoti = 2002,
        UserLeaveBroadcastNoti = 2003,
        WorldInfoNoti = 2004,
        Pong = 3001,
        ServerError = 3002,
        ServerNotice = 3003,
        RefreshEnterWorldTokenNoti = 3004,
        GetMyBagRes = 4001,
        EquipRes = 4002,
        UnequipRes = 4003,
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
        constructor(properties?: WS2CProtocol.IMessage);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: WS2CProtocol.IMessage): WS2CProtocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link WS2CProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WS2CProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link WS2CProtocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WS2CProtocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message;

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
        public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: WS2CProtocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** ENoticeMessageType enum. */
        enum ENoticeMessageType {
            GENERAL = 0,
            URGENT = 1,
            WARNING = 2
        }

        /** Properties of a LoginRes. */
        interface ILoginRes {

            /** LoginRes result */
            result?: (boolean|null);

            /** LoginRes loginTimeUtc */
            loginTimeUtc?: (number|Long|null);

            /** LoginRes userCount */
            userCount?: (number|null);

            /** LoginRes user */
            user?: (Common.IUserEntity|null);

            /** LoginRes character */
            character?: (Common.ICharacterEntity|null);
        }

        /** Represents a LoginRes. */
        class LoginRes implements ILoginRes {

            /**
             * Constructs a new LoginRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.ILoginRes);

            /** LoginRes result. */
            public result: boolean;

            /** LoginRes loginTimeUtc. */
            public loginTimeUtc: (number|Long);

            /** LoginRes userCount. */
            public userCount: number;

            /** LoginRes user. */
            public user?: (Common.IUserEntity|null);

            /** LoginRes character. */
            public character?: (Common.ICharacterEntity|null);

            /**
             * Creates a new LoginRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginRes instance
             */
            public static create(properties?: WS2CProtocol.Message.ILoginRes): WS2CProtocol.Message.LoginRes;

            /**
             * Encodes the specified LoginRes message. Does not implicitly {@link WS2CProtocol.Message.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.LoginRes;

            /**
             * Decodes a LoginRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.LoginRes;

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
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.LoginRes;

            /**
             * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
             * @param message LoginRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a KickNoti. */
        interface IKickNoti {

            /** KickNoti kickType */
            kickType?: (number|null);
        }

        /** Represents a KickNoti. */
        class KickNoti implements IKickNoti {

            /**
             * Constructs a new KickNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IKickNoti);

            /** KickNoti kickType. */
            public kickType: number;

            /**
             * Creates a new KickNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KickNoti instance
             */
            public static create(properties?: WS2CProtocol.Message.IKickNoti): WS2CProtocol.Message.KickNoti;

            /**
             * Encodes the specified KickNoti message. Does not implicitly {@link WS2CProtocol.Message.KickNoti.verify|verify} messages.
             * @param message KickNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IKickNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KickNoti message, length delimited. Does not implicitly {@link WS2CProtocol.Message.KickNoti.verify|verify} messages.
             * @param message KickNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IKickNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KickNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KickNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.KickNoti;

            /**
             * Decodes a KickNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KickNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.KickNoti;

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
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.KickNoti;

            /**
             * Creates a plain object from a KickNoti message. Also converts values to other types if specified.
             * @param message KickNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.KickNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a MoveRes. */
        interface IMoveRes {

            /** MoveRes userId */
            userId?: (number|null);

            /** MoveRes moveState */
            moveState?: (Common.IMoveStateEntity|null);
        }

        /** Represents a MoveRes. */
        class MoveRes implements IMoveRes {

            /**
             * Constructs a new MoveRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IMoveRes);

            /** MoveRes userId. */
            public userId: number;

            /** MoveRes moveState. */
            public moveState?: (Common.IMoveStateEntity|null);

            /**
             * Creates a new MoveRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IMoveRes): WS2CProtocol.Message.MoveRes;

            /**
             * Encodes the specified MoveRes message. Does not implicitly {@link WS2CProtocol.Message.MoveRes.verify|verify} messages.
             * @param message MoveRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IMoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MoveRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.MoveRes.verify|verify} messages.
             * @param message MoveRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IMoveRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoveRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.MoveRes;

            /**
             * Decodes a MoveRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MoveRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.MoveRes;

            /**
             * Verifies a MoveRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MoveRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.MoveRes;

            /**
             * Creates a plain object from a MoveRes message. Also converts values to other types if specified.
             * @param message MoveRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.MoveRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MoveRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LogoutRes. */
        interface ILogoutRes {

            /** LogoutRes userId */
            userId?: (number|null);

            /** LogoutRes userCount */
            userCount?: (number|null);
        }

        /** Represents a LogoutRes. */
        class LogoutRes implements ILogoutRes {

            /**
             * Constructs a new LogoutRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.ILogoutRes);

            /** LogoutRes userId. */
            public userId: number;

            /** LogoutRes userCount. */
            public userCount: number;

            /**
             * Creates a new LogoutRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LogoutRes instance
             */
            public static create(properties?: WS2CProtocol.Message.ILogoutRes): WS2CProtocol.Message.LogoutRes;

            /**
             * Encodes the specified LogoutRes message. Does not implicitly {@link WS2CProtocol.Message.LogoutRes.verify|verify} messages.
             * @param message LogoutRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.ILogoutRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LogoutRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.LogoutRes.verify|verify} messages.
             * @param message LogoutRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.ILogoutRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LogoutRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LogoutRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.LogoutRes;

            /**
             * Decodes a LogoutRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LogoutRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.LogoutRes;

            /**
             * Verifies a LogoutRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LogoutRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LogoutRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.LogoutRes;

            /**
             * Creates a plain object from a LogoutRes message. Also converts values to other types if specified.
             * @param message LogoutRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.LogoutRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LogoutRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LogoutRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WorldAddressRes. */
        interface IWorldAddressRes {

            /** WorldAddressRes result */
            result?: (boolean|null);

            /** WorldAddressRes serverAddress */
            serverAddress?: (string|null);

            /** WorldAddressRes worldId */
            worldId?: (number|null);
        }

        /** Represents a WorldAddressRes. */
        class WorldAddressRes implements IWorldAddressRes {

            /**
             * Constructs a new WorldAddressRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IWorldAddressRes);

            /** WorldAddressRes result. */
            public result: boolean;

            /** WorldAddressRes serverAddress. */
            public serverAddress: string;

            /** WorldAddressRes worldId. */
            public worldId: number;

            /**
             * Creates a new WorldAddressRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorldAddressRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IWorldAddressRes): WS2CProtocol.Message.WorldAddressRes;

            /**
             * Encodes the specified WorldAddressRes message. Does not implicitly {@link WS2CProtocol.Message.WorldAddressRes.verify|verify} messages.
             * @param message WorldAddressRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IWorldAddressRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WorldAddressRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.WorldAddressRes.verify|verify} messages.
             * @param message WorldAddressRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IWorldAddressRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorldAddressRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorldAddressRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.WorldAddressRes;

            /**
             * Decodes a WorldAddressRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WorldAddressRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.WorldAddressRes;

            /**
             * Verifies a WorldAddressRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WorldAddressRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WorldAddressRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.WorldAddressRes;

            /**
             * Creates a plain object from a WorldAddressRes message. Also converts values to other types if specified.
             * @param message WorldAddressRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.WorldAddressRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WorldAddressRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WorldAddressRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinWorldRes. */
        interface IJoinWorldRes {

            /** JoinWorldRes result */
            result?: (boolean|null);

            /** JoinWorldRes userId */
            userId?: (number|null);

            /** JoinWorldRes worldId */
            worldId?: (number|null);
        }

        /** Represents a JoinWorldRes. */
        class JoinWorldRes implements IJoinWorldRes {

            /**
             * Constructs a new JoinWorldRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IJoinWorldRes);

            /** JoinWorldRes result. */
            public result: boolean;

            /** JoinWorldRes userId. */
            public userId: number;

            /** JoinWorldRes worldId. */
            public worldId: number;

            /**
             * Creates a new JoinWorldRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinWorldRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IJoinWorldRes): WS2CProtocol.Message.JoinWorldRes;

            /**
             * Encodes the specified JoinWorldRes message. Does not implicitly {@link WS2CProtocol.Message.JoinWorldRes.verify|verify} messages.
             * @param message JoinWorldRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IJoinWorldRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinWorldRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.JoinWorldRes.verify|verify} messages.
             * @param message JoinWorldRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IJoinWorldRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinWorldRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinWorldRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.JoinWorldRes;

            /**
             * Decodes a JoinWorldRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinWorldRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.JoinWorldRes;

            /**
             * Verifies a JoinWorldRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinWorldRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinWorldRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.JoinWorldRes;

            /**
             * Creates a plain object from a JoinWorldRes message. Also converts values to other types if specified.
             * @param message JoinWorldRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.JoinWorldRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinWorldRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinWorldRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserDataEntity. */
        interface IUserDataEntity {

            /** UserDataEntity userId */
            userId?: (number|null);

            /** UserDataEntity character */
            character?: (Common.ICharacterEntity|null);
        }

        /** Represents a UserDataEntity. */
        class UserDataEntity implements IUserDataEntity {

            /**
             * Constructs a new UserDataEntity.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IUserDataEntity);

            /** UserDataEntity userId. */
            public userId: number;

            /** UserDataEntity character. */
            public character?: (Common.ICharacterEntity|null);

            /**
             * Creates a new UserDataEntity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserDataEntity instance
             */
            public static create(properties?: WS2CProtocol.Message.IUserDataEntity): WS2CProtocol.Message.UserDataEntity;

            /**
             * Encodes the specified UserDataEntity message. Does not implicitly {@link WS2CProtocol.Message.UserDataEntity.verify|verify} messages.
             * @param message UserDataEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IUserDataEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserDataEntity message, length delimited. Does not implicitly {@link WS2CProtocol.Message.UserDataEntity.verify|verify} messages.
             * @param message UserDataEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IUserDataEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserDataEntity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserDataEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.UserDataEntity;

            /**
             * Decodes a UserDataEntity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserDataEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.UserDataEntity;

            /**
             * Verifies a UserDataEntity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserDataEntity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserDataEntity
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.UserDataEntity;

            /**
             * Creates a plain object from a UserDataEntity message. Also converts values to other types if specified.
             * @param message UserDataEntity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.UserDataEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserDataEntity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserDataEntity
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NetworkEntity. */
        interface INetworkEntity {

            /** NetworkEntity objectId */
            objectId?: (number|null);
        }

        /** Represents a NetworkEntity. */
        class NetworkEntity implements INetworkEntity {

            /**
             * Constructs a new NetworkEntity.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.INetworkEntity);

            /** NetworkEntity objectId. */
            public objectId: number;

            /**
             * Creates a new NetworkEntity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkEntity instance
             */
            public static create(properties?: WS2CProtocol.Message.INetworkEntity): WS2CProtocol.Message.NetworkEntity;

            /**
             * Encodes the specified NetworkEntity message. Does not implicitly {@link WS2CProtocol.Message.NetworkEntity.verify|verify} messages.
             * @param message NetworkEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.INetworkEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NetworkEntity message, length delimited. Does not implicitly {@link WS2CProtocol.Message.NetworkEntity.verify|verify} messages.
             * @param message NetworkEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.INetworkEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkEntity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.NetworkEntity;

            /**
             * Decodes a NetworkEntity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NetworkEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.NetworkEntity;

            /**
             * Verifies a NetworkEntity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NetworkEntity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NetworkEntity
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.NetworkEntity;

            /**
             * Creates a plain object from a NetworkEntity message. Also converts values to other types if specified.
             * @param message NetworkEntity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.NetworkEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NetworkEntity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NetworkEntity
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FullSyncWorldRes. */
        interface IFullSyncWorldRes {

            /** FullSyncWorldRes worldId */
            worldId?: (number|null);

            /** FullSyncWorldRes time */
            time?: (number|null);

            /** FullSyncWorldRes worldUserList */
            worldUserList?: (WS2CProtocol.Message.IUserDataEntity[]|null);

            /** FullSyncWorldRes NetworkEntityList */
            NetworkEntityList?: (WS2CProtocol.Message.INetworkEntity[]|null);
        }

        /** Represents a FullSyncWorldRes. */
        class FullSyncWorldRes implements IFullSyncWorldRes {

            /**
             * Constructs a new FullSyncWorldRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IFullSyncWorldRes);

            /** FullSyncWorldRes worldId. */
            public worldId: number;

            /** FullSyncWorldRes time. */
            public time: number;

            /** FullSyncWorldRes worldUserList. */
            public worldUserList: WS2CProtocol.Message.IUserDataEntity[];

            /** FullSyncWorldRes NetworkEntityList. */
            public NetworkEntityList: WS2CProtocol.Message.INetworkEntity[];

            /**
             * Creates a new FullSyncWorldRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FullSyncWorldRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IFullSyncWorldRes): WS2CProtocol.Message.FullSyncWorldRes;

            /**
             * Encodes the specified FullSyncWorldRes message. Does not implicitly {@link WS2CProtocol.Message.FullSyncWorldRes.verify|verify} messages.
             * @param message FullSyncWorldRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IFullSyncWorldRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FullSyncWorldRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.FullSyncWorldRes.verify|verify} messages.
             * @param message FullSyncWorldRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IFullSyncWorldRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FullSyncWorldRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FullSyncWorldRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.FullSyncWorldRes;

            /**
             * Decodes a FullSyncWorldRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FullSyncWorldRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.FullSyncWorldRes;

            /**
             * Verifies a FullSyncWorldRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FullSyncWorldRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FullSyncWorldRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.FullSyncWorldRes;

            /**
             * Creates a plain object from a FullSyncWorldRes message. Also converts values to other types if specified.
             * @param message FullSyncWorldRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.FullSyncWorldRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FullSyncWorldRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FullSyncWorldRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ActionRes. */
        interface IActionRes {

            /** ActionRes userId */
            userId?: (number|null);

            /** ActionRes byteArrMessage */
            byteArrMessage?: (Uint8Array|null);
        }

        /** Represents an ActionRes. */
        class ActionRes implements IActionRes {

            /**
             * Constructs a new ActionRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IActionRes);

            /** ActionRes userId. */
            public userId: number;

            /** ActionRes byteArrMessage. */
            public byteArrMessage: Uint8Array;

            /**
             * Creates a new ActionRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActionRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IActionRes): WS2CProtocol.Message.ActionRes;

            /**
             * Encodes the specified ActionRes message. Does not implicitly {@link WS2CProtocol.Message.ActionRes.verify|verify} messages.
             * @param message ActionRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IActionRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActionRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.ActionRes.verify|verify} messages.
             * @param message ActionRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IActionRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActionRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActionRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.ActionRes;

            /**
             * Decodes an ActionRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActionRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.ActionRes;

            /**
             * Verifies an ActionRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActionRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActionRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.ActionRes;

            /**
             * Creates a plain object from an ActionRes message. Also converts values to other types if specified.
             * @param message ActionRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.ActionRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActionRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ActionRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserJoinBroadcastNoti. */
        interface IUserJoinBroadcastNoti {

            /** UserJoinBroadcastNoti userId */
            userId?: (number|null);

            /** UserJoinBroadcastNoti character */
            character?: (Common.ICharacterEntity|null);
        }

        /** Represents a UserJoinBroadcastNoti. */
        class UserJoinBroadcastNoti implements IUserJoinBroadcastNoti {

            /**
             * Constructs a new UserJoinBroadcastNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IUserJoinBroadcastNoti);

            /** UserJoinBroadcastNoti userId. */
            public userId: number;

            /** UserJoinBroadcastNoti character. */
            public character?: (Common.ICharacterEntity|null);

            /**
             * Creates a new UserJoinBroadcastNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserJoinBroadcastNoti instance
             */
            public static create(properties?: WS2CProtocol.Message.IUserJoinBroadcastNoti): WS2CProtocol.Message.UserJoinBroadcastNoti;

            /**
             * Encodes the specified UserJoinBroadcastNoti message. Does not implicitly {@link WS2CProtocol.Message.UserJoinBroadcastNoti.verify|verify} messages.
             * @param message UserJoinBroadcastNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IUserJoinBroadcastNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserJoinBroadcastNoti message, length delimited. Does not implicitly {@link WS2CProtocol.Message.UserJoinBroadcastNoti.verify|verify} messages.
             * @param message UserJoinBroadcastNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IUserJoinBroadcastNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserJoinBroadcastNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserJoinBroadcastNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.UserJoinBroadcastNoti;

            /**
             * Decodes a UserJoinBroadcastNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserJoinBroadcastNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.UserJoinBroadcastNoti;

            /**
             * Verifies a UserJoinBroadcastNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserJoinBroadcastNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserJoinBroadcastNoti
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.UserJoinBroadcastNoti;

            /**
             * Creates a plain object from a UserJoinBroadcastNoti message. Also converts values to other types if specified.
             * @param message UserJoinBroadcastNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.UserJoinBroadcastNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserJoinBroadcastNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserJoinBroadcastNoti
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserLeaveBroadcastNoti. */
        interface IUserLeaveBroadcastNoti {

            /** UserLeaveBroadcastNoti CharacterName */
            CharacterName?: (string|null);

            /** UserLeaveBroadcastNoti userId */
            userId?: (number|null);
        }

        /** Represents a UserLeaveBroadcastNoti. */
        class UserLeaveBroadcastNoti implements IUserLeaveBroadcastNoti {

            /**
             * Constructs a new UserLeaveBroadcastNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IUserLeaveBroadcastNoti);

            /** UserLeaveBroadcastNoti CharacterName. */
            public CharacterName: string;

            /** UserLeaveBroadcastNoti userId. */
            public userId: number;

            /**
             * Creates a new UserLeaveBroadcastNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserLeaveBroadcastNoti instance
             */
            public static create(properties?: WS2CProtocol.Message.IUserLeaveBroadcastNoti): WS2CProtocol.Message.UserLeaveBroadcastNoti;

            /**
             * Encodes the specified UserLeaveBroadcastNoti message. Does not implicitly {@link WS2CProtocol.Message.UserLeaveBroadcastNoti.verify|verify} messages.
             * @param message UserLeaveBroadcastNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IUserLeaveBroadcastNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserLeaveBroadcastNoti message, length delimited. Does not implicitly {@link WS2CProtocol.Message.UserLeaveBroadcastNoti.verify|verify} messages.
             * @param message UserLeaveBroadcastNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IUserLeaveBroadcastNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserLeaveBroadcastNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserLeaveBroadcastNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.UserLeaveBroadcastNoti;

            /**
             * Decodes a UserLeaveBroadcastNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserLeaveBroadcastNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.UserLeaveBroadcastNoti;

            /**
             * Verifies a UserLeaveBroadcastNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserLeaveBroadcastNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserLeaveBroadcastNoti
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.UserLeaveBroadcastNoti;

            /**
             * Creates a plain object from a UserLeaveBroadcastNoti message. Also converts values to other types if specified.
             * @param message UserLeaveBroadcastNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.UserLeaveBroadcastNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserLeaveBroadcastNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserLeaveBroadcastNoti
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AvatarSlotRes. */
        interface IAvatarSlotRes {

            /** AvatarSlotRes avaterSlots */
            avaterSlots?: (Common.IAvaterSlotEntity[]|null);
        }

        /** Represents an AvatarSlotRes. */
        class AvatarSlotRes implements IAvatarSlotRes {

            /**
             * Constructs a new AvatarSlotRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IAvatarSlotRes);

            /** AvatarSlotRes avaterSlots. */
            public avaterSlots: Common.IAvaterSlotEntity[];

            /**
             * Creates a new AvatarSlotRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AvatarSlotRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IAvatarSlotRes): WS2CProtocol.Message.AvatarSlotRes;

            /**
             * Encodes the specified AvatarSlotRes message. Does not implicitly {@link WS2CProtocol.Message.AvatarSlotRes.verify|verify} messages.
             * @param message AvatarSlotRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IAvatarSlotRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AvatarSlotRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.AvatarSlotRes.verify|verify} messages.
             * @param message AvatarSlotRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IAvatarSlotRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AvatarSlotRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AvatarSlotRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.AvatarSlotRes;

            /**
             * Decodes an AvatarSlotRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AvatarSlotRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.AvatarSlotRes;

            /**
             * Verifies an AvatarSlotRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AvatarSlotRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AvatarSlotRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.AvatarSlotRes;

            /**
             * Creates a plain object from an AvatarSlotRes message. Also converts values to other types if specified.
             * @param message AvatarSlotRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.AvatarSlotRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AvatarSlotRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AvatarSlotRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChangeAvatarSlotRes. */
        interface IChangeAvatarSlotRes {

            /** ChangeAvatarSlotRes result */
            result?: (boolean|null);
        }

        /** Represents a ChangeAvatarSlotRes. */
        class ChangeAvatarSlotRes implements IChangeAvatarSlotRes {

            /**
             * Constructs a new ChangeAvatarSlotRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IChangeAvatarSlotRes);

            /** ChangeAvatarSlotRes result. */
            public result: boolean;

            /**
             * Creates a new ChangeAvatarSlotRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChangeAvatarSlotRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IChangeAvatarSlotRes): WS2CProtocol.Message.ChangeAvatarSlotRes;

            /**
             * Encodes the specified ChangeAvatarSlotRes message. Does not implicitly {@link WS2CProtocol.Message.ChangeAvatarSlotRes.verify|verify} messages.
             * @param message ChangeAvatarSlotRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IChangeAvatarSlotRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChangeAvatarSlotRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.ChangeAvatarSlotRes.verify|verify} messages.
             * @param message ChangeAvatarSlotRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IChangeAvatarSlotRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChangeAvatarSlotRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChangeAvatarSlotRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.ChangeAvatarSlotRes;

            /**
             * Decodes a ChangeAvatarSlotRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChangeAvatarSlotRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.ChangeAvatarSlotRes;

            /**
             * Verifies a ChangeAvatarSlotRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChangeAvatarSlotRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChangeAvatarSlotRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.ChangeAvatarSlotRes;

            /**
             * Creates a plain object from a ChangeAvatarSlotRes message. Also converts values to other types if specified.
             * @param message ChangeAvatarSlotRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.ChangeAvatarSlotRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChangeAvatarSlotRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChangeAvatarSlotRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MyProfileRes. */
        interface IMyProfileRes {

            /** MyProfileRes userId */
            userId?: (number|null);

            /** MyProfileRes accountId */
            accountId?: (string|null);

            /** MyProfileRes isAdmin */
            isAdmin?: (number|null);

            /** MyProfileRes characterCmsId */
            characterCmsId?: (number|null);
        }

        /** Represents a MyProfileRes. */
        class MyProfileRes implements IMyProfileRes {

            /**
             * Constructs a new MyProfileRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IMyProfileRes);

            /** MyProfileRes userId. */
            public userId: number;

            /** MyProfileRes accountId. */
            public accountId: string;

            /** MyProfileRes isAdmin. */
            public isAdmin: number;

            /** MyProfileRes characterCmsId. */
            public characterCmsId: number;

            /**
             * Creates a new MyProfileRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MyProfileRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IMyProfileRes): WS2CProtocol.Message.MyProfileRes;

            /**
             * Encodes the specified MyProfileRes message. Does not implicitly {@link WS2CProtocol.Message.MyProfileRes.verify|verify} messages.
             * @param message MyProfileRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IMyProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MyProfileRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.MyProfileRes.verify|verify} messages.
             * @param message MyProfileRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IMyProfileRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MyProfileRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MyProfileRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.MyProfileRes;

            /**
             * Decodes a MyProfileRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MyProfileRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.MyProfileRes;

            /**
             * Verifies a MyProfileRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MyProfileRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MyProfileRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.MyProfileRes;

            /**
             * Creates a plain object from a MyProfileRes message. Also converts values to other types if specified.
             * @param message MyProfileRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.MyProfileRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MyProfileRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MyProfileRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PickupItemRes. */
        interface IPickupItemRes {

            /** PickupItemRes x */
            x?: (number|null);

            /** PickupItemRes y */
            y?: (number|null);

            /** PickupItemRes z */
            z?: (number|null);

            /** PickupItemRes objectCmsId */
            objectCmsId?: (number|null);

            /** PickupItemRes itemCmsId */
            itemCmsId?: (number|null);
        }

        /** Represents a PickupItemRes. */
        class PickupItemRes implements IPickupItemRes {

            /**
             * Constructs a new PickupItemRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IPickupItemRes);

            /** PickupItemRes x. */
            public x: number;

            /** PickupItemRes y. */
            public y: number;

            /** PickupItemRes z. */
            public z: number;

            /** PickupItemRes objectCmsId. */
            public objectCmsId: number;

            /** PickupItemRes itemCmsId. */
            public itemCmsId: number;

            /**
             * Creates a new PickupItemRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PickupItemRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IPickupItemRes): WS2CProtocol.Message.PickupItemRes;

            /**
             * Encodes the specified PickupItemRes message. Does not implicitly {@link WS2CProtocol.Message.PickupItemRes.verify|verify} messages.
             * @param message PickupItemRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IPickupItemRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PickupItemRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.PickupItemRes.verify|verify} messages.
             * @param message PickupItemRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IPickupItemRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PickupItemRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PickupItemRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.PickupItemRes;

            /**
             * Decodes a PickupItemRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PickupItemRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.PickupItemRes;

            /**
             * Verifies a PickupItemRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PickupItemRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PickupItemRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.PickupItemRes;

            /**
             * Creates a plain object from a PickupItemRes message. Also converts values to other types if specified.
             * @param message PickupItemRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.PickupItemRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PickupItemRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PickupItemRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ThowAwayItemRes. */
        interface IThowAwayItemRes {

            /** ThowAwayItemRes x */
            x?: (number|null);

            /** ThowAwayItemRes y */
            y?: (number|null);

            /** ThowAwayItemRes z */
            z?: (number|null);

            /** ThowAwayItemRes objectType */
            objectType?: (number|null);

            /** ThowAwayItemRes objectCmsId */
            objectCmsId?: (number|null);
        }

        /** Represents a ThowAwayItemRes. */
        class ThowAwayItemRes implements IThowAwayItemRes {

            /**
             * Constructs a new ThowAwayItemRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IThowAwayItemRes);

            /** ThowAwayItemRes x. */
            public x: number;

            /** ThowAwayItemRes y. */
            public y: number;

            /** ThowAwayItemRes z. */
            public z: number;

            /** ThowAwayItemRes objectType. */
            public objectType: number;

            /** ThowAwayItemRes objectCmsId. */
            public objectCmsId: number;

            /**
             * Creates a new ThowAwayItemRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThowAwayItemRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IThowAwayItemRes): WS2CProtocol.Message.ThowAwayItemRes;

            /**
             * Encodes the specified ThowAwayItemRes message. Does not implicitly {@link WS2CProtocol.Message.ThowAwayItemRes.verify|verify} messages.
             * @param message ThowAwayItemRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IThowAwayItemRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThowAwayItemRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.ThowAwayItemRes.verify|verify} messages.
             * @param message ThowAwayItemRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IThowAwayItemRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThowAwayItemRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ThowAwayItemRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.ThowAwayItemRes;

            /**
             * Decodes a ThowAwayItemRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ThowAwayItemRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.ThowAwayItemRes;

            /**
             * Verifies a ThowAwayItemRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThowAwayItemRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThowAwayItemRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.ThowAwayItemRes;

            /**
             * Creates a plain object from a ThowAwayItemRes message. Also converts values to other types if specified.
             * @param message ThowAwayItemRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.ThowAwayItemRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThowAwayItemRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ThowAwayItemRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TileEntity. */
        interface ITileEntity {

            /** TileEntity tileId */
            tileId?: (number|null);

            /** TileEntity posX */
            posX?: (number|null);

            /** TileEntity posY */
            posY?: (number|null);

            /** TileEntity layer */
            layer?: (number|null);
        }

        /** Represents a TileEntity. */
        class TileEntity implements ITileEntity {

            /**
             * Constructs a new TileEntity.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.ITileEntity);

            /** TileEntity tileId. */
            public tileId: number;

            /** TileEntity posX. */
            public posX: number;

            /** TileEntity posY. */
            public posY: number;

            /** TileEntity layer. */
            public layer: number;

            /**
             * Creates a new TileEntity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TileEntity instance
             */
            public static create(properties?: WS2CProtocol.Message.ITileEntity): WS2CProtocol.Message.TileEntity;

            /**
             * Encodes the specified TileEntity message. Does not implicitly {@link WS2CProtocol.Message.TileEntity.verify|verify} messages.
             * @param message TileEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.ITileEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TileEntity message, length delimited. Does not implicitly {@link WS2CProtocol.Message.TileEntity.verify|verify} messages.
             * @param message TileEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.ITileEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TileEntity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TileEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.TileEntity;

            /**
             * Decodes a TileEntity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TileEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.TileEntity;

            /**
             * Verifies a TileEntity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TileEntity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TileEntity
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.TileEntity;

            /**
             * Creates a plain object from a TileEntity message. Also converts values to other types if specified.
             * @param message TileEntity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.TileEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TileEntity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TileEntity
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldObjectEntity. */
        interface IFieldObjectEntity {

            /** FieldObjectEntity objectDbId */
            objectDbId?: (number|null);

            /** FieldObjectEntity objectCmsId */
            objectCmsId?: (number|null);

            /** FieldObjectEntity posX */
            posX?: (number|null);

            /** FieldObjectEntity posY */
            posY?: (number|null);

            /** FieldObjectEntity layer */
            layer?: (number|null);

            /** FieldObjectEntity dir */
            dir?: (number|null);
        }

        /** Represents a FieldObjectEntity. */
        class FieldObjectEntity implements IFieldObjectEntity {

            /**
             * Constructs a new FieldObjectEntity.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IFieldObjectEntity);

            /** FieldObjectEntity objectDbId. */
            public objectDbId: number;

            /** FieldObjectEntity objectCmsId. */
            public objectCmsId: number;

            /** FieldObjectEntity posX. */
            public posX: number;

            /** FieldObjectEntity posY. */
            public posY: number;

            /** FieldObjectEntity layer. */
            public layer: number;

            /** FieldObjectEntity dir. */
            public dir: number;

            /**
             * Creates a new FieldObjectEntity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldObjectEntity instance
             */
            public static create(properties?: WS2CProtocol.Message.IFieldObjectEntity): WS2CProtocol.Message.FieldObjectEntity;

            /**
             * Encodes the specified FieldObjectEntity message. Does not implicitly {@link WS2CProtocol.Message.FieldObjectEntity.verify|verify} messages.
             * @param message FieldObjectEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IFieldObjectEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldObjectEntity message, length delimited. Does not implicitly {@link WS2CProtocol.Message.FieldObjectEntity.verify|verify} messages.
             * @param message FieldObjectEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IFieldObjectEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldObjectEntity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldObjectEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.FieldObjectEntity;

            /**
             * Decodes a FieldObjectEntity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldObjectEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.FieldObjectEntity;

            /**
             * Verifies a FieldObjectEntity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldObjectEntity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldObjectEntity
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.FieldObjectEntity;

            /**
             * Creates a plain object from a FieldObjectEntity message. Also converts values to other types if specified.
             * @param message FieldObjectEntity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.FieldObjectEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldObjectEntity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldObjectEntity
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InventoryItem. */
        interface IInventoryItem {

            /** InventoryItem itemDbGuid */
            itemDbGuid?: (number|Long|null);

            /** InventoryItem itemCmsId */
            itemCmsId?: (number|null);

            /** InventoryItem count */
            count?: (number|null);

            /** InventoryItem toolAttr */
            toolAttr?: (WS2CProtocol.Message.InventoryItem.IToolAttributes|null);

            /** InventoryItem vegetationAttr */
            vegetationAttr?: (WS2CProtocol.Message.InventoryItem.IVegetationAttributes|null);
        }

        /** Represents an InventoryItem. */
        class InventoryItem implements IInventoryItem {

            /**
             * Constructs a new InventoryItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IInventoryItem);

            /** InventoryItem itemDbGuid. */
            public itemDbGuid: (number|Long);

            /** InventoryItem itemCmsId. */
            public itemCmsId: number;

            /** InventoryItem count. */
            public count: number;

            /** InventoryItem toolAttr. */
            public toolAttr?: (WS2CProtocol.Message.InventoryItem.IToolAttributes|null);

            /** InventoryItem vegetationAttr. */
            public vegetationAttr?: (WS2CProtocol.Message.InventoryItem.IVegetationAttributes|null);

            /**
             * Creates a new InventoryItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InventoryItem instance
             */
            public static create(properties?: WS2CProtocol.Message.IInventoryItem): WS2CProtocol.Message.InventoryItem;

            /**
             * Encodes the specified InventoryItem message. Does not implicitly {@link WS2CProtocol.Message.InventoryItem.verify|verify} messages.
             * @param message InventoryItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IInventoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InventoryItem message, length delimited. Does not implicitly {@link WS2CProtocol.Message.InventoryItem.verify|verify} messages.
             * @param message InventoryItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IInventoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InventoryItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InventoryItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.InventoryItem;

            /**
             * Decodes an InventoryItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InventoryItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.InventoryItem;

            /**
             * Verifies an InventoryItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InventoryItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InventoryItem
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.InventoryItem;

            /**
             * Creates a plain object from an InventoryItem message. Also converts values to other types if specified.
             * @param message InventoryItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.InventoryItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InventoryItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InventoryItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace InventoryItem {

            /** Properties of a ToolAttributes. */
            interface IToolAttributes {

                /** ToolAttributes durability */
                durability?: (number|null);
            }

            /** Represents a ToolAttributes. */
            class ToolAttributes implements IToolAttributes {

                /**
                 * Constructs a new ToolAttributes.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WS2CProtocol.Message.InventoryItem.IToolAttributes);

                /** ToolAttributes durability. */
                public durability: number;

                /**
                 * Creates a new ToolAttributes instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ToolAttributes instance
                 */
                public static create(properties?: WS2CProtocol.Message.InventoryItem.IToolAttributes): WS2CProtocol.Message.InventoryItem.ToolAttributes;

                /**
                 * Encodes the specified ToolAttributes message. Does not implicitly {@link WS2CProtocol.Message.InventoryItem.ToolAttributes.verify|verify} messages.
                 * @param message ToolAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WS2CProtocol.Message.InventoryItem.IToolAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ToolAttributes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.InventoryItem.ToolAttributes.verify|verify} messages.
                 * @param message ToolAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WS2CProtocol.Message.InventoryItem.IToolAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ToolAttributes message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ToolAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.InventoryItem.ToolAttributes;

                /**
                 * Decodes a ToolAttributes message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ToolAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.InventoryItem.ToolAttributes;

                /**
                 * Verifies a ToolAttributes message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ToolAttributes message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ToolAttributes
                 */
                public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.InventoryItem.ToolAttributes;

                /**
                 * Creates a plain object from a ToolAttributes message. Also converts values to other types if specified.
                 * @param message ToolAttributes
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WS2CProtocol.Message.InventoryItem.ToolAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ToolAttributes to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ToolAttributes
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VegetationAttributes. */
            interface IVegetationAttributes {

                /** VegetationAttributes durability */
                durability?: (number|null);
            }

            /** Represents a VegetationAttributes. */
            class VegetationAttributes implements IVegetationAttributes {

                /**
                 * Constructs a new VegetationAttributes.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: WS2CProtocol.Message.InventoryItem.IVegetationAttributes);

                /** VegetationAttributes durability. */
                public durability: number;

                /**
                 * Creates a new VegetationAttributes instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VegetationAttributes instance
                 */
                public static create(properties?: WS2CProtocol.Message.InventoryItem.IVegetationAttributes): WS2CProtocol.Message.InventoryItem.VegetationAttributes;

                /**
                 * Encodes the specified VegetationAttributes message. Does not implicitly {@link WS2CProtocol.Message.InventoryItem.VegetationAttributes.verify|verify} messages.
                 * @param message VegetationAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: WS2CProtocol.Message.InventoryItem.IVegetationAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VegetationAttributes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.InventoryItem.VegetationAttributes.verify|verify} messages.
                 * @param message VegetationAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: WS2CProtocol.Message.InventoryItem.IVegetationAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VegetationAttributes message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VegetationAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.InventoryItem.VegetationAttributes;

                /**
                 * Decodes a VegetationAttributes message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VegetationAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.InventoryItem.VegetationAttributes;

                /**
                 * Verifies a VegetationAttributes message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VegetationAttributes message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VegetationAttributes
                 */
                public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.InventoryItem.VegetationAttributes;

                /**
                 * Creates a plain object from a VegetationAttributes message. Also converts values to other types if specified.
                 * @param message VegetationAttributes
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: WS2CProtocol.Message.InventoryItem.VegetationAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VegetationAttributes to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VegetationAttributes
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a TileListNoti. */
        interface ITileListNoti {

            /** TileListNoti tileList */
            tileList?: (WS2CProtocol.Message.ITileEntity[]|null);
        }

        /** Represents a TileListNoti. */
        class TileListNoti implements ITileListNoti {

            /**
             * Constructs a new TileListNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.ITileListNoti);

            /** TileListNoti tileList. */
            public tileList: WS2CProtocol.Message.ITileEntity[];

            /**
             * Creates a new TileListNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TileListNoti instance
             */
            public static create(properties?: WS2CProtocol.Message.ITileListNoti): WS2CProtocol.Message.TileListNoti;

            /**
             * Encodes the specified TileListNoti message. Does not implicitly {@link WS2CProtocol.Message.TileListNoti.verify|verify} messages.
             * @param message TileListNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.ITileListNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TileListNoti message, length delimited. Does not implicitly {@link WS2CProtocol.Message.TileListNoti.verify|verify} messages.
             * @param message TileListNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.ITileListNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TileListNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TileListNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.TileListNoti;

            /**
             * Decodes a TileListNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TileListNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.TileListNoti;

            /**
             * Verifies a TileListNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TileListNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TileListNoti
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.TileListNoti;

            /**
             * Creates a plain object from a TileListNoti message. Also converts values to other types if specified.
             * @param message TileListNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.TileListNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TileListNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TileListNoti
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WorldInfoNoti. */
        interface IWorldInfoNoti {

            /** WorldInfoNoti worldDbId */
            worldDbId?: (number|null);

            /** WorldInfoNoti tileList */
            tileList?: (WS2CProtocol.Message.ITileEntity[]|null);

            /** WorldInfoNoti fieldObjectList */
            fieldObjectList?: (WS2CProtocol.Message.IFieldObjectEntity[]|null);
        }

        /** Represents a WorldInfoNoti. */
        class WorldInfoNoti implements IWorldInfoNoti {

            /**
             * Constructs a new WorldInfoNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IWorldInfoNoti);

            /** WorldInfoNoti worldDbId. */
            public worldDbId: number;

            /** WorldInfoNoti tileList. */
            public tileList: WS2CProtocol.Message.ITileEntity[];

            /** WorldInfoNoti fieldObjectList. */
            public fieldObjectList: WS2CProtocol.Message.IFieldObjectEntity[];

            /**
             * Creates a new WorldInfoNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorldInfoNoti instance
             */
            public static create(properties?: WS2CProtocol.Message.IWorldInfoNoti): WS2CProtocol.Message.WorldInfoNoti;

            /**
             * Encodes the specified WorldInfoNoti message. Does not implicitly {@link WS2CProtocol.Message.WorldInfoNoti.verify|verify} messages.
             * @param message WorldInfoNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IWorldInfoNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WorldInfoNoti message, length delimited. Does not implicitly {@link WS2CProtocol.Message.WorldInfoNoti.verify|verify} messages.
             * @param message WorldInfoNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IWorldInfoNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorldInfoNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorldInfoNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.WorldInfoNoti;

            /**
             * Decodes a WorldInfoNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WorldInfoNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.WorldInfoNoti;

            /**
             * Verifies a WorldInfoNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WorldInfoNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WorldInfoNoti
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.WorldInfoNoti;

            /**
             * Creates a plain object from a WorldInfoNoti message. Also converts values to other types if specified.
             * @param message WorldInfoNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.WorldInfoNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WorldInfoNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WorldInfoNoti
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldObjectListNoti. */
        interface IFieldObjectListNoti {

            /** FieldObjectListNoti fieldObjectList */
            fieldObjectList?: (WS2CProtocol.Message.IFieldObjectEntity[]|null);
        }

        /** Represents a FieldObjectListNoti. */
        class FieldObjectListNoti implements IFieldObjectListNoti {

            /**
             * Constructs a new FieldObjectListNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IFieldObjectListNoti);

            /** FieldObjectListNoti fieldObjectList. */
            public fieldObjectList: WS2CProtocol.Message.IFieldObjectEntity[];

            /**
             * Creates a new FieldObjectListNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldObjectListNoti instance
             */
            public static create(properties?: WS2CProtocol.Message.IFieldObjectListNoti): WS2CProtocol.Message.FieldObjectListNoti;

            /**
             * Encodes the specified FieldObjectListNoti message. Does not implicitly {@link WS2CProtocol.Message.FieldObjectListNoti.verify|verify} messages.
             * @param message FieldObjectListNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IFieldObjectListNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldObjectListNoti message, length delimited. Does not implicitly {@link WS2CProtocol.Message.FieldObjectListNoti.verify|verify} messages.
             * @param message FieldObjectListNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IFieldObjectListNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldObjectListNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldObjectListNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.FieldObjectListNoti;

            /**
             * Decodes a FieldObjectListNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldObjectListNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.FieldObjectListNoti;

            /**
             * Verifies a FieldObjectListNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldObjectListNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldObjectListNoti
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.FieldObjectListNoti;

            /**
             * Creates a plain object from a FieldObjectListNoti message. Also converts values to other types if specified.
             * @param message FieldObjectListNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.FieldObjectListNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldObjectListNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldObjectListNoti
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SetFieldObjectRes. */
        interface ISetFieldObjectRes {

            /** SetFieldObjectRes errorCode */
            errorCode?: (number|null);

            /** SetFieldObjectRes userId */
            userId?: (number|null);

            /** SetFieldObjectRes objectData */
            objectData?: (WS2CProtocol.Message.IFieldObjectEntity|null);
        }

        /** Represents a SetFieldObjectRes. */
        class SetFieldObjectRes implements ISetFieldObjectRes {

            /**
             * Constructs a new SetFieldObjectRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.ISetFieldObjectRes);

            /** SetFieldObjectRes errorCode. */
            public errorCode: number;

            /** SetFieldObjectRes userId. */
            public userId: number;

            /** SetFieldObjectRes objectData. */
            public objectData?: (WS2CProtocol.Message.IFieldObjectEntity|null);

            /**
             * Creates a new SetFieldObjectRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetFieldObjectRes instance
             */
            public static create(properties?: WS2CProtocol.Message.ISetFieldObjectRes): WS2CProtocol.Message.SetFieldObjectRes;

            /**
             * Encodes the specified SetFieldObjectRes message. Does not implicitly {@link WS2CProtocol.Message.SetFieldObjectRes.verify|verify} messages.
             * @param message SetFieldObjectRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.ISetFieldObjectRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetFieldObjectRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.SetFieldObjectRes.verify|verify} messages.
             * @param message SetFieldObjectRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.ISetFieldObjectRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetFieldObjectRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetFieldObjectRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.SetFieldObjectRes;

            /**
             * Decodes a SetFieldObjectRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetFieldObjectRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.SetFieldObjectRes;

            /**
             * Verifies a SetFieldObjectRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetFieldObjectRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetFieldObjectRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.SetFieldObjectRes;

            /**
             * Creates a plain object from a SetFieldObjectRes message. Also converts values to other types if specified.
             * @param message SetFieldObjectRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.SetFieldObjectRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetFieldObjectRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SetFieldObjectRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateFieldObjectRes. */
        interface IUpdateFieldObjectRes {

            /** UpdateFieldObjectRes errorCode */
            errorCode?: (number|null);

            /** UpdateFieldObjectRes userId */
            userId?: (number|null);

            /** UpdateFieldObjectRes objectData */
            objectData?: (WS2CProtocol.Message.IFieldObjectEntity|null);
        }

        /** Represents an UpdateFieldObjectRes. */
        class UpdateFieldObjectRes implements IUpdateFieldObjectRes {

            /**
             * Constructs a new UpdateFieldObjectRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IUpdateFieldObjectRes);

            /** UpdateFieldObjectRes errorCode. */
            public errorCode: number;

            /** UpdateFieldObjectRes userId. */
            public userId: number;

            /** UpdateFieldObjectRes objectData. */
            public objectData?: (WS2CProtocol.Message.IFieldObjectEntity|null);

            /**
             * Creates a new UpdateFieldObjectRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateFieldObjectRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IUpdateFieldObjectRes): WS2CProtocol.Message.UpdateFieldObjectRes;

            /**
             * Encodes the specified UpdateFieldObjectRes message. Does not implicitly {@link WS2CProtocol.Message.UpdateFieldObjectRes.verify|verify} messages.
             * @param message UpdateFieldObjectRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IUpdateFieldObjectRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateFieldObjectRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.UpdateFieldObjectRes.verify|verify} messages.
             * @param message UpdateFieldObjectRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IUpdateFieldObjectRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateFieldObjectRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateFieldObjectRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.UpdateFieldObjectRes;

            /**
             * Decodes an UpdateFieldObjectRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateFieldObjectRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.UpdateFieldObjectRes;

            /**
             * Verifies an UpdateFieldObjectRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateFieldObjectRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateFieldObjectRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.UpdateFieldObjectRes;

            /**
             * Creates a plain object from an UpdateFieldObjectRes message. Also converts values to other types if specified.
             * @param message UpdateFieldObjectRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.UpdateFieldObjectRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateFieldObjectRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateFieldObjectRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RemoveFieldObjectRes. */
        interface IRemoveFieldObjectRes {

            /** RemoveFieldObjectRes errorCode */
            errorCode?: (number|null);

            /** RemoveFieldObjectRes userId */
            userId?: (number|null);

            /** RemoveFieldObjectRes objectId */
            objectId?: (number|null);
        }

        /** Represents a RemoveFieldObjectRes. */
        class RemoveFieldObjectRes implements IRemoveFieldObjectRes {

            /**
             * Constructs a new RemoveFieldObjectRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IRemoveFieldObjectRes);

            /** RemoveFieldObjectRes errorCode. */
            public errorCode: number;

            /** RemoveFieldObjectRes userId. */
            public userId: number;

            /** RemoveFieldObjectRes objectId. */
            public objectId: number;

            /**
             * Creates a new RemoveFieldObjectRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveFieldObjectRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IRemoveFieldObjectRes): WS2CProtocol.Message.RemoveFieldObjectRes;

            /**
             * Encodes the specified RemoveFieldObjectRes message. Does not implicitly {@link WS2CProtocol.Message.RemoveFieldObjectRes.verify|verify} messages.
             * @param message RemoveFieldObjectRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IRemoveFieldObjectRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveFieldObjectRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.RemoveFieldObjectRes.verify|verify} messages.
             * @param message RemoveFieldObjectRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IRemoveFieldObjectRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveFieldObjectRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoveFieldObjectRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.RemoveFieldObjectRes;

            /**
             * Decodes a RemoveFieldObjectRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveFieldObjectRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.RemoveFieldObjectRes;

            /**
             * Verifies a RemoveFieldObjectRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveFieldObjectRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveFieldObjectRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.RemoveFieldObjectRes;

            /**
             * Creates a plain object from a RemoveFieldObjectRes message. Also converts values to other types if specified.
             * @param message RemoveFieldObjectRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.RemoveFieldObjectRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveFieldObjectRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RemoveFieldObjectRes
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetMyBagRes. */
        interface IGetMyBagRes {

            /** GetMyBagRes errorCode */
            errorCode?: (number|null);

            /** GetMyBagRes bagCapacity */
            bagCapacity?: (number|null);

            /** GetMyBagRes itemList */
            itemList?: (WS2CProtocol.Message.IInventoryItem[]|null);
        }

        /** Represents a GetMyBagRes. */
        class GetMyBagRes implements IGetMyBagRes {

            /**
             * Constructs a new GetMyBagRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IGetMyBagRes);

            /** GetMyBagRes errorCode. */
            public errorCode: number;

            /** GetMyBagRes bagCapacity. */
            public bagCapacity: number;

            /** GetMyBagRes itemList. */
            public itemList: WS2CProtocol.Message.IInventoryItem[];

            /**
             * Creates a new GetMyBagRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetMyBagRes instance
             */
            public static create(properties?: WS2CProtocol.Message.IGetMyBagRes): WS2CProtocol.Message.GetMyBagRes;

            /**
             * Encodes the specified GetMyBagRes message. Does not implicitly {@link WS2CProtocol.Message.GetMyBagRes.verify|verify} messages.
             * @param message GetMyBagRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IGetMyBagRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetMyBagRes message, length delimited. Does not implicitly {@link WS2CProtocol.Message.GetMyBagRes.verify|verify} messages.
             * @param message GetMyBagRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IGetMyBagRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetMyBagRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetMyBagRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.GetMyBagRes;

            /**
             * Decodes a GetMyBagRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetMyBagRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.GetMyBagRes;

            /**
             * Verifies a GetMyBagRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetMyBagRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetMyBagRes
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.GetMyBagRes;

            /**
             * Creates a plain object from a GetMyBagRes message. Also converts values to other types if specified.
             * @param message GetMyBagRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.GetMyBagRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetMyBagRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetMyBagRes
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
            constructor(properties?: WS2CProtocol.Message.IPong);

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
            public static create(properties?: WS2CProtocol.Message.IPong): WS2CProtocol.Message.Pong;

            /**
             * Encodes the specified Pong message. Does not implicitly {@link WS2CProtocol.Message.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link WS2CProtocol.Message.Pong.verify|verify} messages.
             * @param message Pong message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.Pong;

            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.Pong;

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
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.Pong;

            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @param message Pong
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a ServerError. */
        interface IServerError {

            /** ServerError errCode */
            errCode?: (number|null);

            /** ServerError errMessage */
            errMessage?: (string|null);

            /** ServerError failedCQPacket */
            failedCQPacket?: (WS2CProtocol.PacketType|null);
        }

        /** Represents a ServerError. */
        class ServerError implements IServerError {

            /**
             * Constructs a new ServerError.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IServerError);

            /** ServerError errCode. */
            public errCode: number;

            /** ServerError errMessage. */
            public errMessage?: (string|null);

            /** ServerError failedCQPacket. */
            public failedCQPacket: WS2CProtocol.PacketType;

            /** ServerError _errMessage. */
            public _errMessage?: "errMessage";

            /**
             * Creates a new ServerError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerError instance
             */
            public static create(properties?: WS2CProtocol.Message.IServerError): WS2CProtocol.Message.ServerError;

            /**
             * Encodes the specified ServerError message. Does not implicitly {@link WS2CProtocol.Message.ServerError.verify|verify} messages.
             * @param message ServerError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerError message, length delimited. Does not implicitly {@link WS2CProtocol.Message.ServerError.verify|verify} messages.
             * @param message ServerError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.ServerError;

            /**
             * Decodes a ServerError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServerError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.ServerError;

            /**
             * Verifies a ServerError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerError
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.ServerError;

            /**
             * Creates a plain object from a ServerError message. Also converts values to other types if specified.
             * @param message ServerError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.ServerError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServerError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServerNotice. */
        interface IServerNotice {

            /** ServerNotice messagetype */
            messagetype?: (WS2CProtocol.Message.ENoticeMessageType|null);

            /** ServerNotice content */
            content?: (string|null);
        }

        /** Represents a ServerNotice. */
        class ServerNotice implements IServerNotice {

            /**
             * Constructs a new ServerNotice.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IServerNotice);

            /** ServerNotice messagetype. */
            public messagetype: WS2CProtocol.Message.ENoticeMessageType;

            /** ServerNotice content. */
            public content: string;

            /**
             * Creates a new ServerNotice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerNotice instance
             */
            public static create(properties?: WS2CProtocol.Message.IServerNotice): WS2CProtocol.Message.ServerNotice;

            /**
             * Encodes the specified ServerNotice message. Does not implicitly {@link WS2CProtocol.Message.ServerNotice.verify|verify} messages.
             * @param message ServerNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IServerNotice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerNotice message, length delimited. Does not implicitly {@link WS2CProtocol.Message.ServerNotice.verify|verify} messages.
             * @param message ServerNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IServerNotice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerNotice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.ServerNotice;

            /**
             * Decodes a ServerNotice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServerNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.ServerNotice;

            /**
             * Verifies a ServerNotice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerNotice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerNotice
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.ServerNotice;

            /**
             * Creates a plain object from a ServerNotice message. Also converts values to other types if specified.
             * @param message ServerNotice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.ServerNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerNotice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServerNotice
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RefreshEnterWorldTokenNoti. */
        interface IRefreshEnterWorldTokenNoti {

            /** RefreshEnterWorldTokenNoti enterWorldToken */
            enterWorldToken?: (string|null);
        }

        /** Represents a RefreshEnterWorldTokenNoti. */
        class RefreshEnterWorldTokenNoti implements IRefreshEnterWorldTokenNoti {

            /**
             * Constructs a new RefreshEnterWorldTokenNoti.
             * @param [properties] Properties to set
             */
            constructor(properties?: WS2CProtocol.Message.IRefreshEnterWorldTokenNoti);

            /** RefreshEnterWorldTokenNoti enterWorldToken. */
            public enterWorldToken: string;

            /**
             * Creates a new RefreshEnterWorldTokenNoti instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RefreshEnterWorldTokenNoti instance
             */
            public static create(properties?: WS2CProtocol.Message.IRefreshEnterWorldTokenNoti): WS2CProtocol.Message.RefreshEnterWorldTokenNoti;

            /**
             * Encodes the specified RefreshEnterWorldTokenNoti message. Does not implicitly {@link WS2CProtocol.Message.RefreshEnterWorldTokenNoti.verify|verify} messages.
             * @param message RefreshEnterWorldTokenNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: WS2CProtocol.Message.IRefreshEnterWorldTokenNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RefreshEnterWorldTokenNoti message, length delimited. Does not implicitly {@link WS2CProtocol.Message.RefreshEnterWorldTokenNoti.verify|verify} messages.
             * @param message RefreshEnterWorldTokenNoti message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: WS2CProtocol.Message.IRefreshEnterWorldTokenNoti, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RefreshEnterWorldTokenNoti message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RefreshEnterWorldTokenNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WS2CProtocol.Message.RefreshEnterWorldTokenNoti;

            /**
             * Decodes a RefreshEnterWorldTokenNoti message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RefreshEnterWorldTokenNoti
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WS2CProtocol.Message.RefreshEnterWorldTokenNoti;

            /**
             * Verifies a RefreshEnterWorldTokenNoti message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RefreshEnterWorldTokenNoti message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RefreshEnterWorldTokenNoti
             */
            public static fromObject(object: { [k: string]: any }): WS2CProtocol.Message.RefreshEnterWorldTokenNoti;

            /**
             * Creates a plain object from a RefreshEnterWorldTokenNoti message. Also converts values to other types if specified.
             * @param message RefreshEnterWorldTokenNoti
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: WS2CProtocol.Message.RefreshEnterWorldTokenNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RefreshEnterWorldTokenNoti to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RefreshEnterWorldTokenNoti
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
