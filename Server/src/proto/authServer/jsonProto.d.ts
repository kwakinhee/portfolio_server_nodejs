import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace GIANTSTEP. */
export namespace GIANTSTEP {

    /** Namespace AS. */
    namespace AS {

        /** Namespace Protocol. */
        namespace Protocol {

            /** PacketType enum. */
            enum PacketType {
                AS_NONE_PACKET = 0,
                AS_CQ_Login = 102,
                AS_CQ_GetWorldServerAddress = 104,
                AS_SA_Login = 1000,
                AS_SA_GetWorldServerAddress = 1002,
                AS_SN_Kick = 1005,
                AS_SN_Logout = 1006,
                AS_CQ_Ping = 30000,
                AS_SA_Pong = 30001,
                AS_ServerError = 30002,
                AS_MAX_PACKET = 32767
            }

            /** KICK_TYPE enum. */
            enum KICK_TYPE {
                NAVER_CONTROLLER_KICK = 0
            }

            /** NOTICE_MESSAGE_TYPE enum. */
            enum NOTICE_MESSAGE_TYPE {
                GENERAL = 0,
                URGENT = 1,
                WARNING = 2
            }

            /** Properties of a User. */
            interface IUser {

                /** User userId */
                userId?: (number|null);

                /** User accountId */
                accountId?: (string|null);

                /** User isAdmin */
                isAdmin?: (number|null);
            }

            /** Represents a User. */
            class User implements IUser {

                /**
                 * Constructs a new User.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.IUser);

                /** User userId. */
                public userId?: (number|null);

                /** User accountId. */
                public accountId?: (string|null);

                /** User isAdmin. */
                public isAdmin: number;

                /** User _userId. */
                public _userId?: "userId";

                /** User _accountId. */
                public _accountId?: "accountId";

                /**
                 * Creates a new User instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns User instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.IUser): GIANTSTEP.AS.Protocol.User;

                /**
                 * Encodes the specified User message. Does not implicitly {@link GIANTSTEP.AS.Protocol.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.User;

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.User;

                /**
                 * Verifies a User message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns User
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.User;

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @param message User
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this User to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for User
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_Login. */
            interface ICQ_Login {

                /** CQ_Login accountId */
                accountId?: (string|null);

                /** CQ_Login clientVersion */
                clientVersion?: (string|null);

                /** CQ_Login loginPlatform */
                loginPlatform?: (string|null);
            }

            /** Represents a CQ_Login. */
            class CQ_Login implements ICQ_Login {

                /**
                 * Constructs a new CQ_Login.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ICQ_Login);

                /** CQ_Login accountId. */
                public accountId: string;

                /** CQ_Login clientVersion. */
                public clientVersion: string;

                /** CQ_Login loginPlatform. */
                public loginPlatform: string;

                /**
                 * Creates a new CQ_Login instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_Login instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ICQ_Login): GIANTSTEP.AS.Protocol.CQ_Login;

                /**
                 * Encodes the specified CQ_Login message. Does not implicitly {@link GIANTSTEP.AS.Protocol.CQ_Login.verify|verify} messages.
                 * @param message CQ_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ICQ_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_Login message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.CQ_Login.verify|verify} messages.
                 * @param message CQ_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ICQ_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_Login message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.CQ_Login;

                /**
                 * Decodes a CQ_Login message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.CQ_Login;

                /**
                 * Verifies a CQ_Login message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_Login message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_Login
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.CQ_Login;

                /**
                 * Creates a plain object from a CQ_Login message. Also converts values to other types if specified.
                 * @param message CQ_Login
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.CQ_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_Login to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_Login
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_Ping. */
            interface ICQ_Ping {

                /** CQ_Ping serverTimeUtcRequest */
                serverTimeUtcRequest?: (boolean|null);

                /** CQ_Ping clientTimeUtc */
                clientTimeUtc?: (number|Long|null);

                /** CQ_Ping stressMessage */
                stressMessage?: (string|null);
            }

            /** Represents a CQ_Ping. */
            class CQ_Ping implements ICQ_Ping {

                /**
                 * Constructs a new CQ_Ping.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ICQ_Ping);

                /** CQ_Ping serverTimeUtcRequest. */
                public serverTimeUtcRequest?: (boolean|null);

                /** CQ_Ping clientTimeUtc. */
                public clientTimeUtc?: (number|Long|null);

                /** CQ_Ping stressMessage. */
                public stressMessage?: (string|null);

                /** CQ_Ping _serverTimeUtcRequest. */
                public _serverTimeUtcRequest?: "serverTimeUtcRequest";

                /** CQ_Ping _clientTimeUtc. */
                public _clientTimeUtc?: "clientTimeUtc";

                /** CQ_Ping _stressMessage. */
                public _stressMessage?: "stressMessage";

                /**
                 * Creates a new CQ_Ping instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_Ping instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ICQ_Ping): GIANTSTEP.AS.Protocol.CQ_Ping;

                /**
                 * Encodes the specified CQ_Ping message. Does not implicitly {@link GIANTSTEP.AS.Protocol.CQ_Ping.verify|verify} messages.
                 * @param message CQ_Ping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ICQ_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_Ping message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.CQ_Ping.verify|verify} messages.
                 * @param message CQ_Ping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ICQ_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_Ping message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_Ping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.CQ_Ping;

                /**
                 * Decodes a CQ_Ping message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_Ping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.CQ_Ping;

                /**
                 * Verifies a CQ_Ping message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_Ping message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_Ping
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.CQ_Ping;

                /**
                 * Creates a plain object from a CQ_Ping message. Also converts values to other types if specified.
                 * @param message CQ_Ping
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.CQ_Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_Ping to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_Ping
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetWorldServerAddress. */
            interface ICQ_GetWorldServerAddress {
            }

            /** Represents a CQ_GetWorldServerAddress. */
            class CQ_GetWorldServerAddress implements ICQ_GetWorldServerAddress {

                /**
                 * Constructs a new CQ_GetWorldServerAddress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ICQ_GetWorldServerAddress);

                /**
                 * Creates a new CQ_GetWorldServerAddress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetWorldServerAddress instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ICQ_GetWorldServerAddress): GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress;

                /**
                 * Encodes the specified CQ_GetWorldServerAddress message. Does not implicitly {@link GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress.verify|verify} messages.
                 * @param message CQ_GetWorldServerAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ICQ_GetWorldServerAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetWorldServerAddress message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress.verify|verify} messages.
                 * @param message CQ_GetWorldServerAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ICQ_GetWorldServerAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetWorldServerAddress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetWorldServerAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress;

                /**
                 * Decodes a CQ_GetWorldServerAddress message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetWorldServerAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress;

                /**
                 * Verifies a CQ_GetWorldServerAddress message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetWorldServerAddress message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetWorldServerAddress
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress;

                /**
                 * Creates a plain object from a CQ_GetWorldServerAddress message. Also converts values to other types if specified.
                 * @param message CQ_GetWorldServerAddress
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.CQ_GetWorldServerAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetWorldServerAddress to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetWorldServerAddress
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
                failedCQPacket?: (GIANTSTEP.AS.Protocol.PacketType|null);
            }

            /** Represents a ServerError. */
            class ServerError implements IServerError {

                /**
                 * Constructs a new ServerError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.IServerError);

                /** ServerError errCode. */
                public errCode: number;

                /** ServerError errMessage. */
                public errMessage?: (string|null);

                /** ServerError failedCQPacket. */
                public failedCQPacket: GIANTSTEP.AS.Protocol.PacketType;

                /** ServerError _errMessage. */
                public _errMessage?: "errMessage";

                /**
                 * Creates a new ServerError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServerError instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.IServerError): GIANTSTEP.AS.Protocol.ServerError;

                /**
                 * Encodes the specified ServerError message. Does not implicitly {@link GIANTSTEP.AS.Protocol.ServerError.verify|verify} messages.
                 * @param message ServerError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServerError message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.ServerError.verify|verify} messages.
                 * @param message ServerError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServerError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServerError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.ServerError;

                /**
                 * Decodes a ServerError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServerError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.ServerError;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.ServerError;

                /**
                 * Creates a plain object from a ServerError message. Also converts values to other types if specified.
                 * @param message ServerError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.ServerError, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a SA_Login. */
            interface ISA_Login {

                /** SA_Login result */
                result?: (boolean|null);

                /** SA_Login loginTimeUtc */
                loginTimeUtc?: (number|Long|null);

                /** SA_Login enterWorldToken */
                enterWorldToken?: (string|null);

                /** SA_Login isAdmin */
                isAdmin?: (number|null);

                /** SA_Login isNewUser */
                isNewUser?: (boolean|null);
            }

            /** Represents a SA_Login. */
            class SA_Login implements ISA_Login {

                /**
                 * Constructs a new SA_Login.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ISA_Login);

                /** SA_Login result. */
                public result: boolean;

                /** SA_Login loginTimeUtc. */
                public loginTimeUtc: (number|Long);

                /** SA_Login enterWorldToken. */
                public enterWorldToken: string;

                /** SA_Login isAdmin. */
                public isAdmin: number;

                /** SA_Login isNewUser. */
                public isNewUser: boolean;

                /**
                 * Creates a new SA_Login instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_Login instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ISA_Login): GIANTSTEP.AS.Protocol.SA_Login;

                /**
                 * Encodes the specified SA_Login message. Does not implicitly {@link GIANTSTEP.AS.Protocol.SA_Login.verify|verify} messages.
                 * @param message SA_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ISA_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_Login message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.SA_Login.verify|verify} messages.
                 * @param message SA_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ISA_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_Login message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.SA_Login;

                /**
                 * Decodes a SA_Login message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.SA_Login;

                /**
                 * Verifies a SA_Login message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_Login message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_Login
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.SA_Login;

                /**
                 * Creates a plain object from a SA_Login message. Also converts values to other types if specified.
                 * @param message SA_Login
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.SA_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_Login to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_Login
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_GetWorldServerAddress. */
            interface ISA_GetWorldServerAddress {

                /** SA_GetWorldServerAddress result */
                result?: (boolean|null);

                /** SA_GetWorldServerAddress serverAddress */
                serverAddress?: (string|null);
            }

            /** Represents a SA_GetWorldServerAddress. */
            class SA_GetWorldServerAddress implements ISA_GetWorldServerAddress {

                /**
                 * Constructs a new SA_GetWorldServerAddress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ISA_GetWorldServerAddress);

                /** SA_GetWorldServerAddress result. */
                public result: boolean;

                /** SA_GetWorldServerAddress serverAddress. */
                public serverAddress: string;

                /**
                 * Creates a new SA_GetWorldServerAddress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetWorldServerAddress instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ISA_GetWorldServerAddress): GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress;

                /**
                 * Encodes the specified SA_GetWorldServerAddress message. Does not implicitly {@link GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress.verify|verify} messages.
                 * @param message SA_GetWorldServerAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ISA_GetWorldServerAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetWorldServerAddress message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress.verify|verify} messages.
                 * @param message SA_GetWorldServerAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ISA_GetWorldServerAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetWorldServerAddress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetWorldServerAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress;

                /**
                 * Decodes a SA_GetWorldServerAddress message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetWorldServerAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress;

                /**
                 * Verifies a SA_GetWorldServerAddress message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetWorldServerAddress message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetWorldServerAddress
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress;

                /**
                 * Creates a plain object from a SA_GetWorldServerAddress message. Also converts values to other types if specified.
                 * @param message SA_GetWorldServerAddress
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.SA_GetWorldServerAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetWorldServerAddress to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetWorldServerAddress
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_Kick. */
            interface ISN_Kick {

                /** SN_Kick kickType */
                kickType?: (GIANTSTEP.AS.Protocol.KICK_TYPE|null);
            }

            /** Represents a SN_Kick. */
            class SN_Kick implements ISN_Kick {

                /**
                 * Constructs a new SN_Kick.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ISN_Kick);

                /** SN_Kick kickType. */
                public kickType: GIANTSTEP.AS.Protocol.KICK_TYPE;

                /**
                 * Creates a new SN_Kick instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_Kick instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ISN_Kick): GIANTSTEP.AS.Protocol.SN_Kick;

                /**
                 * Encodes the specified SN_Kick message. Does not implicitly {@link GIANTSTEP.AS.Protocol.SN_Kick.verify|verify} messages.
                 * @param message SN_Kick message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ISN_Kick, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_Kick message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.SN_Kick.verify|verify} messages.
                 * @param message SN_Kick message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ISN_Kick, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_Kick message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_Kick
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.SN_Kick;

                /**
                 * Decodes a SN_Kick message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_Kick
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.SN_Kick;

                /**
                 * Verifies a SN_Kick message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_Kick message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_Kick
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.SN_Kick;

                /**
                 * Creates a plain object from a SN_Kick message. Also converts values to other types if specified.
                 * @param message SN_Kick
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.SN_Kick, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_Kick to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_Kick
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_Logout. */
            interface ISN_Logout {

                /** SN_Logout userId */
                userId?: (number|null);

                /** SN_Logout userCount */
                userCount?: (number|null);
            }

            /** Represents a SN_Logout. */
            class SN_Logout implements ISN_Logout {

                /**
                 * Constructs a new SN_Logout.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ISN_Logout);

                /** SN_Logout userId. */
                public userId: number;

                /** SN_Logout userCount. */
                public userCount: number;

                /**
                 * Creates a new SN_Logout instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_Logout instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ISN_Logout): GIANTSTEP.AS.Protocol.SN_Logout;

                /**
                 * Encodes the specified SN_Logout message. Does not implicitly {@link GIANTSTEP.AS.Protocol.SN_Logout.verify|verify} messages.
                 * @param message SN_Logout message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ISN_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_Logout message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.SN_Logout.verify|verify} messages.
                 * @param message SN_Logout message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ISN_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_Logout message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_Logout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.SN_Logout;

                /**
                 * Decodes a SN_Logout message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_Logout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.SN_Logout;

                /**
                 * Verifies a SN_Logout message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_Logout message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_Logout
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.SN_Logout;

                /**
                 * Creates a plain object from a SN_Logout message. Also converts values to other types if specified.
                 * @param message SN_Logout
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.SN_Logout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_Logout to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_Logout
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_Pong. */
            interface ISA_Pong {

                /** SA_Pong serverTimeUtc */
                serverTimeUtc?: (number|Long|null);

                /** SA_Pong stressMessage */
                stressMessage?: (string|null);
            }

            /** Represents a SA_Pong. */
            class SA_Pong implements ISA_Pong {

                /**
                 * Constructs a new SA_Pong.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.AS.Protocol.ISA_Pong);

                /** SA_Pong serverTimeUtc. */
                public serverTimeUtc?: (number|Long|null);

                /** SA_Pong stressMessage. */
                public stressMessage?: (string|null);

                /** SA_Pong _serverTimeUtc. */
                public _serverTimeUtc?: "serverTimeUtc";

                /** SA_Pong _stressMessage. */
                public _stressMessage?: "stressMessage";

                /**
                 * Creates a new SA_Pong instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_Pong instance
                 */
                public static create(properties?: GIANTSTEP.AS.Protocol.ISA_Pong): GIANTSTEP.AS.Protocol.SA_Pong;

                /**
                 * Encodes the specified SA_Pong message. Does not implicitly {@link GIANTSTEP.AS.Protocol.SA_Pong.verify|verify} messages.
                 * @param message SA_Pong message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.AS.Protocol.ISA_Pong, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_Pong message, length delimited. Does not implicitly {@link GIANTSTEP.AS.Protocol.SA_Pong.verify|verify} messages.
                 * @param message SA_Pong message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.AS.Protocol.ISA_Pong, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_Pong message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_Pong
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.AS.Protocol.SA_Pong;

                /**
                 * Decodes a SA_Pong message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_Pong
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.AS.Protocol.SA_Pong;

                /**
                 * Verifies a SA_Pong message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_Pong message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_Pong
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.AS.Protocol.SA_Pong;

                /**
                 * Creates a plain object from a SA_Pong message. Also converts values to other types if specified.
                 * @param message SA_Pong
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.AS.Protocol.SA_Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_Pong to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_Pong
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
