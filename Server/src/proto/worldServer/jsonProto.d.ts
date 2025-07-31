import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace GIANTSTEP. */
export namespace GIANTSTEP {

    /** Namespace WS. */
    namespace WS {

        /** Namespace Protocol. */
        namespace Protocol {

            /** PacketType enum. */
            enum PacketType {
                WS_NONE_PACKET = 0,
                WS_CQ_Login = 101,
                WS_CQ_Move = 103,
                WS_CQ_JoinWorld = 104,
                WS_CQ_FullSyncWorld = 105,
                WS_CQ_GetWorldAddress = 106,
                WS_CQ_QuitWorld = 107,
                WS_CQ_GetAvatarSlots = 108,
                WS_CQ_ChangeAvatarSlots = 109,
                WS_CQ_GetMyProfile = 110,
                WS_CQ_Action = 112,
                WS_CQ_SetFieldObject = 113,
                WS_CQ_UpdateFieldObject = 114,
                WS_CQ_RemoveFieldObject = 115,
                WS_CQ_GetMyWorldInventory = 116,
                WS_CQ_GetMyEquipments = 117,
                WS_CQ_EquipItem = 118,
                WS_CQ_UnequipItem = 119,
                WS_CQ_DropItemObject = 120,
                WS_CQ_TakeItemObject = 121,
                WS_CQ_GetMyAvatarInventory = 122,
                WS_CQ_GetWorldInfoTemp = 123,
                WS_CQ_SyncAvatar = 124,
                WS_SA_Login = 1006,
                WS_SN_Kick = 1007,
                WS_SA_Move = 1008,
                WS_SN_Logout = 1009,
                WS_SN_Notice_Message = 1011,
                WS_SA_JoinWorld = 1013,
                WS_SN_UserJoinBroadcast = 1014,
                WS_SA_FullSyncWorld = 1015,
                WS_SA_GetWorldAddress = 1016,
                WS_SN_UserLeaveBroadcast = 1017,
                WS_SA_GetAvatarSlots = 1018,
                WS_SA_ChangeAvatarSlots = 1019,
                WS_SA_GetMyProfile = 1020,
                WS_SA_Action = 1021,
                WS_SA_WorldInfo = 1022,
                WS_SA_FieldObjectList = 1023,
                WS_SA_SetFieldObject = 1024,
                WS_SA_UpdateFieldObject = 1025,
                WS_SA_RemoveFieldObject = 1026,
                WS_SA_GetMyWorldInventory = 1027,
                WS_SA_GetMyEquipments = 1028,
                WS_SA_EquipItem = 1029,
                WS_SA_UnequipItem = 1030,
                WS_SN_EquipSlotUpdateBroadcast = 1031,
                WS_SN_DropItemObject = 1032,
                WS_SN_TakeItemObject = 1033,
                WS_SA_DropItemObject = 1034,
                WS_SA_TakeItemObject = 1035,
                WS_SA_GetMyAvatarInventory = 1036,
                WS_SN_SetFieldObject = 1037,
                WS_SN_UpdateFieldObject = 1038,
                WS_SN_RemoveFieldObject = 1039,
                WS_SA_GetWorldInfoTemp = 1040,
                WS_SN_SyncAvatar = 1041,
                WS_CQ_Ping = 30000,
                WS_SA_Pong = 30001,
                WS_ServerError = 30002,
                WS_SN_RefreshEnterWorldToken = 30003,
                WS_MAX_PACKET = 32767
            }

            /** EDegree enum. */
            enum EDegree {
                DEGREE_0 = 0,
                DEGREE_45 = 1,
                DEGREE_90 = 2,
                DEGREE_135 = 3,
                DEGREE_180 = 4,
                DEGREE_225 = 5,
                DEGREE_270 = 6,
                DEGREE_315 = 7,
                MAX = 8
            }

            /** NOTICE_MESSAGE_TYPE enum. */
            enum NOTICE_MESSAGE_TYPE {
                GENERAL = 0,
                URGENT = 1,
                WARNING = 2
            }

            /** Properties of a CQ_Login. */
            interface ICQ_Login {

                /** CQ_Login isDevLogin */
                isDevLogin?: (boolean|null);

                /** CQ_Login accountId */
                accountId?: (string|null);

                /** CQ_Login enterWorldToken */
                enterWorldToken?: (string|null);

                /** CQ_Login loginPlatform */
                loginPlatform?: (string|null);
            }

            /** Represents a CQ_Login. */
            class CQ_Login implements ICQ_Login {

                /**
                 * Constructs a new CQ_Login.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_Login);

                /** CQ_Login isDevLogin. */
                public isDevLogin: boolean;

                /** CQ_Login accountId. */
                public accountId: string;

                /** CQ_Login enterWorldToken. */
                public enterWorldToken: string;

                /** CQ_Login loginPlatform. */
                public loginPlatform: string;

                /**
                 * Creates a new CQ_Login instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_Login instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_Login): GIANTSTEP.WS.Protocol.CQ_Login;

                /**
                 * Encodes the specified CQ_Login message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Login.verify|verify} messages.
                 * @param message CQ_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_Login message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Login.verify|verify} messages.
                 * @param message CQ_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_Login message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_Login;

                /**
                 * Decodes a CQ_Login message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_Login;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_Login;

                /**
                 * Creates a plain object from a CQ_Login message. Also converts values to other types if specified.
                 * @param message CQ_Login
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_Ping);

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
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_Ping): GIANTSTEP.WS.Protocol.CQ_Ping;

                /**
                 * Encodes the specified CQ_Ping message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Ping.verify|verify} messages.
                 * @param message CQ_Ping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_Ping message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Ping.verify|verify} messages.
                 * @param message CQ_Ping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_Ping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_Ping message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_Ping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_Ping;

                /**
                 * Decodes a CQ_Ping message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_Ping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_Ping;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_Ping;

                /**
                 * Creates a plain object from a CQ_Ping message. Also converts values to other types if specified.
                 * @param message CQ_Ping
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a CQ_Move. */
            interface ICQ_Move {

                /** CQ_Move userId */
                userId?: (number|null);

                /** CQ_Move moveState */
                moveState?: (GIANTSTEP.WS.Protocol.IMoveState|null);
            }

            /** Represents a CQ_Move. */
            class CQ_Move implements ICQ_Move {

                /**
                 * Constructs a new CQ_Move.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_Move);

                /** CQ_Move userId. */
                public userId: number;

                /** CQ_Move moveState. */
                public moveState?: (GIANTSTEP.WS.Protocol.IMoveState|null);

                /**
                 * Creates a new CQ_Move instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_Move instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_Move): GIANTSTEP.WS.Protocol.CQ_Move;

                /**
                 * Encodes the specified CQ_Move message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Move.verify|verify} messages.
                 * @param message CQ_Move message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_Move, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_Move message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Move.verify|verify} messages.
                 * @param message CQ_Move message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_Move, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_Move message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_Move
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_Move;

                /**
                 * Decodes a CQ_Move message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_Move
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_Move;

                /**
                 * Verifies a CQ_Move message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_Move message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_Move
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_Move;

                /**
                 * Creates a plain object from a CQ_Move message. Also converts values to other types if specified.
                 * @param message CQ_Move
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_Move to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_Move
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_JoinWorld. */
            interface ICQ_JoinWorld {

                /** CQ_JoinWorld userId */
                userId?: (number|null);

                /** CQ_JoinWorld worldId */
                worldId?: (number|null);
            }

            /** Represents a CQ_JoinWorld. */
            class CQ_JoinWorld implements ICQ_JoinWorld {

                /**
                 * Constructs a new CQ_JoinWorld.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_JoinWorld);

                /** CQ_JoinWorld userId. */
                public userId: number;

                /** CQ_JoinWorld worldId. */
                public worldId: number;

                /**
                 * Creates a new CQ_JoinWorld instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_JoinWorld instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_JoinWorld): GIANTSTEP.WS.Protocol.CQ_JoinWorld;

                /**
                 * Encodes the specified CQ_JoinWorld message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_JoinWorld.verify|verify} messages.
                 * @param message CQ_JoinWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_JoinWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_JoinWorld message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_JoinWorld.verify|verify} messages.
                 * @param message CQ_JoinWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_JoinWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_JoinWorld message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_JoinWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_JoinWorld;

                /**
                 * Decodes a CQ_JoinWorld message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_JoinWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_JoinWorld;

                /**
                 * Verifies a CQ_JoinWorld message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_JoinWorld message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_JoinWorld
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_JoinWorld;

                /**
                 * Creates a plain object from a CQ_JoinWorld message. Also converts values to other types if specified.
                 * @param message CQ_JoinWorld
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_JoinWorld, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_JoinWorld to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_JoinWorld
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_FullSyncWorld. */
            interface ICQ_FullSyncWorld {

                /** CQ_FullSyncWorld userId */
                userId?: (number|null);

                /** CQ_FullSyncWorld worldId */
                worldId?: (number|null);
            }

            /** Represents a CQ_FullSyncWorld. */
            class CQ_FullSyncWorld implements ICQ_FullSyncWorld {

                /**
                 * Constructs a new CQ_FullSyncWorld.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_FullSyncWorld);

                /** CQ_FullSyncWorld userId. */
                public userId: number;

                /** CQ_FullSyncWorld worldId. */
                public worldId: number;

                /**
                 * Creates a new CQ_FullSyncWorld instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_FullSyncWorld instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_FullSyncWorld): GIANTSTEP.WS.Protocol.CQ_FullSyncWorld;

                /**
                 * Encodes the specified CQ_FullSyncWorld message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_FullSyncWorld.verify|verify} messages.
                 * @param message CQ_FullSyncWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_FullSyncWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_FullSyncWorld message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_FullSyncWorld.verify|verify} messages.
                 * @param message CQ_FullSyncWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_FullSyncWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_FullSyncWorld message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_FullSyncWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_FullSyncWorld;

                /**
                 * Decodes a CQ_FullSyncWorld message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_FullSyncWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_FullSyncWorld;

                /**
                 * Verifies a CQ_FullSyncWorld message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_FullSyncWorld message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_FullSyncWorld
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_FullSyncWorld;

                /**
                 * Creates a plain object from a CQ_FullSyncWorld message. Also converts values to other types if specified.
                 * @param message CQ_FullSyncWorld
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_FullSyncWorld, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_FullSyncWorld to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_FullSyncWorld
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_QuitWorld. */
            interface ICQ_QuitWorld {

                /** CQ_QuitWorld userId */
                userId?: (number|null);
            }

            /** Represents a CQ_QuitWorld. */
            class CQ_QuitWorld implements ICQ_QuitWorld {

                /**
                 * Constructs a new CQ_QuitWorld.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_QuitWorld);

                /** CQ_QuitWorld userId. */
                public userId: number;

                /**
                 * Creates a new CQ_QuitWorld instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_QuitWorld instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_QuitWorld): GIANTSTEP.WS.Protocol.CQ_QuitWorld;

                /**
                 * Encodes the specified CQ_QuitWorld message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_QuitWorld.verify|verify} messages.
                 * @param message CQ_QuitWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_QuitWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_QuitWorld message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_QuitWorld.verify|verify} messages.
                 * @param message CQ_QuitWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_QuitWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_QuitWorld message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_QuitWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_QuitWorld;

                /**
                 * Decodes a CQ_QuitWorld message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_QuitWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_QuitWorld;

                /**
                 * Verifies a CQ_QuitWorld message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_QuitWorld message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_QuitWorld
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_QuitWorld;

                /**
                 * Creates a plain object from a CQ_QuitWorld message. Also converts values to other types if specified.
                 * @param message CQ_QuitWorld
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_QuitWorld, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_QuitWorld to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_QuitWorld
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetWorldAddress. */
            interface ICQ_GetWorldAddress {

                /** CQ_GetWorldAddress userId */
                userId?: (number|null);

                /** CQ_GetWorldAddress worldId */
                worldId?: (number|null);
            }

            /** Represents a CQ_GetWorldAddress. */
            class CQ_GetWorldAddress implements ICQ_GetWorldAddress {

                /**
                 * Constructs a new CQ_GetWorldAddress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_GetWorldAddress);

                /** CQ_GetWorldAddress userId. */
                public userId: number;

                /** CQ_GetWorldAddress worldId. */
                public worldId: number;

                /**
                 * Creates a new CQ_GetWorldAddress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetWorldAddress instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_GetWorldAddress): GIANTSTEP.WS.Protocol.CQ_GetWorldAddress;

                /**
                 * Encodes the specified CQ_GetWorldAddress message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetWorldAddress.verify|verify} messages.
                 * @param message CQ_GetWorldAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_GetWorldAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetWorldAddress message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetWorldAddress.verify|verify} messages.
                 * @param message CQ_GetWorldAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_GetWorldAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetWorldAddress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetWorldAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_GetWorldAddress;

                /**
                 * Decodes a CQ_GetWorldAddress message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetWorldAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_GetWorldAddress;

                /**
                 * Verifies a CQ_GetWorldAddress message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetWorldAddress message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetWorldAddress
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_GetWorldAddress;

                /**
                 * Creates a plain object from a CQ_GetWorldAddress message. Also converts values to other types if specified.
                 * @param message CQ_GetWorldAddress
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_GetWorldAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetWorldAddress to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetWorldAddress
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_SyncAvatar. */
            interface ICQ_SyncAvatar {

                /** CQ_SyncAvatar userId */
                userId?: (number|null);
            }

            /** Represents a CQ_SyncAvatar. */
            class CQ_SyncAvatar implements ICQ_SyncAvatar {

                /**
                 * Constructs a new CQ_SyncAvatar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_SyncAvatar);

                /** CQ_SyncAvatar userId. */
                public userId: number;

                /**
                 * Creates a new CQ_SyncAvatar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_SyncAvatar instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_SyncAvatar): GIANTSTEP.WS.Protocol.CQ_SyncAvatar;

                /**
                 * Encodes the specified CQ_SyncAvatar message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_SyncAvatar.verify|verify} messages.
                 * @param message CQ_SyncAvatar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_SyncAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_SyncAvatar message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_SyncAvatar.verify|verify} messages.
                 * @param message CQ_SyncAvatar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_SyncAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_SyncAvatar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_SyncAvatar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_SyncAvatar;

                /**
                 * Decodes a CQ_SyncAvatar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_SyncAvatar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_SyncAvatar;

                /**
                 * Verifies a CQ_SyncAvatar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_SyncAvatar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_SyncAvatar
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_SyncAvatar;

                /**
                 * Creates a plain object from a CQ_SyncAvatar message. Also converts values to other types if specified.
                 * @param message CQ_SyncAvatar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_SyncAvatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_SyncAvatar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_SyncAvatar
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetAvatarSlots. */
            interface ICQ_GetAvatarSlots {

                /** CQ_GetAvatarSlots userId */
                userId?: (number|null);

                /** CQ_GetAvatarSlots characterCmsId */
                characterCmsId?: (number|null);
            }

            /** Represents a CQ_GetAvatarSlots. */
            class CQ_GetAvatarSlots implements ICQ_GetAvatarSlots {

                /**
                 * Constructs a new CQ_GetAvatarSlots.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_GetAvatarSlots);

                /** CQ_GetAvatarSlots userId. */
                public userId: number;

                /** CQ_GetAvatarSlots characterCmsId. */
                public characterCmsId: number;

                /**
                 * Creates a new CQ_GetAvatarSlots instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetAvatarSlots instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_GetAvatarSlots): GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots;

                /**
                 * Encodes the specified CQ_GetAvatarSlots message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots.verify|verify} messages.
                 * @param message CQ_GetAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_GetAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetAvatarSlots message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots.verify|verify} messages.
                 * @param message CQ_GetAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_GetAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetAvatarSlots message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots;

                /**
                 * Decodes a CQ_GetAvatarSlots message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots;

                /**
                 * Verifies a CQ_GetAvatarSlots message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetAvatarSlots message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetAvatarSlots
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots;

                /**
                 * Creates a plain object from a CQ_GetAvatarSlots message. Also converts values to other types if specified.
                 * @param message CQ_GetAvatarSlots
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_GetAvatarSlots, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetAvatarSlots to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetAvatarSlots
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_ChangeAvatarSlots. */
            interface ICQ_ChangeAvatarSlots {

                /** CQ_ChangeAvatarSlots userId */
                userId?: (number|null);

                /** CQ_ChangeAvatarSlots characterCmsId */
                characterCmsId?: (number|null);

                /** CQ_ChangeAvatarSlots avatarSlots */
                avatarSlots?: (GIANTSTEP.WS.Protocol.IAvatarSlot[]|null);
            }

            /** Represents a CQ_ChangeAvatarSlots. */
            class CQ_ChangeAvatarSlots implements ICQ_ChangeAvatarSlots {

                /**
                 * Constructs a new CQ_ChangeAvatarSlots.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_ChangeAvatarSlots);

                /** CQ_ChangeAvatarSlots userId. */
                public userId: number;

                /** CQ_ChangeAvatarSlots characterCmsId. */
                public characterCmsId: number;

                /** CQ_ChangeAvatarSlots avatarSlots. */
                public avatarSlots: GIANTSTEP.WS.Protocol.IAvatarSlot[];

                /**
                 * Creates a new CQ_ChangeAvatarSlots instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_ChangeAvatarSlots instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_ChangeAvatarSlots): GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots;

                /**
                 * Encodes the specified CQ_ChangeAvatarSlots message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots.verify|verify} messages.
                 * @param message CQ_ChangeAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_ChangeAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_ChangeAvatarSlots message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots.verify|verify} messages.
                 * @param message CQ_ChangeAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_ChangeAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_ChangeAvatarSlots message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_ChangeAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots;

                /**
                 * Decodes a CQ_ChangeAvatarSlots message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_ChangeAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots;

                /**
                 * Verifies a CQ_ChangeAvatarSlots message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_ChangeAvatarSlots message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_ChangeAvatarSlots
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots;

                /**
                 * Creates a plain object from a CQ_ChangeAvatarSlots message. Also converts values to other types if specified.
                 * @param message CQ_ChangeAvatarSlots
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_ChangeAvatarSlots, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_ChangeAvatarSlots to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_ChangeAvatarSlots
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetMyProfile. */
            interface ICQ_GetMyProfile {

                /** CQ_GetMyProfile userId */
                userId?: (number|null);
            }

            /** Represents a CQ_GetMyProfile. */
            class CQ_GetMyProfile implements ICQ_GetMyProfile {

                /**
                 * Constructs a new CQ_GetMyProfile.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyProfile);

                /** CQ_GetMyProfile userId. */
                public userId: number;

                /**
                 * Creates a new CQ_GetMyProfile instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetMyProfile instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyProfile): GIANTSTEP.WS.Protocol.CQ_GetMyProfile;

                /**
                 * Encodes the specified CQ_GetMyProfile message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyProfile.verify|verify} messages.
                 * @param message CQ_GetMyProfile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_GetMyProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetMyProfile message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyProfile.verify|verify} messages.
                 * @param message CQ_GetMyProfile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_GetMyProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetMyProfile message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetMyProfile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_GetMyProfile;

                /**
                 * Decodes a CQ_GetMyProfile message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetMyProfile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_GetMyProfile;

                /**
                 * Verifies a CQ_GetMyProfile message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetMyProfile message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetMyProfile
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_GetMyProfile;

                /**
                 * Creates a plain object from a CQ_GetMyProfile message. Also converts values to other types if specified.
                 * @param message CQ_GetMyProfile
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_GetMyProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetMyProfile to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetMyProfile
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_Action. */
            interface ICQ_Action {

                /** CQ_Action userId */
                userId?: (number|null);

                /** CQ_Action byteArrMessage */
                byteArrMessage?: (Uint8Array|null);
            }

            /** Represents a CQ_Action. */
            class CQ_Action implements ICQ_Action {

                /**
                 * Constructs a new CQ_Action.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_Action);

                /** CQ_Action userId. */
                public userId: number;

                /** CQ_Action byteArrMessage. */
                public byteArrMessage: Uint8Array;

                /**
                 * Creates a new CQ_Action instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_Action instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_Action): GIANTSTEP.WS.Protocol.CQ_Action;

                /**
                 * Encodes the specified CQ_Action message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Action.verify|verify} messages.
                 * @param message CQ_Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_Action, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_Action message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_Action.verify|verify} messages.
                 * @param message CQ_Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_Action, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_Action message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_Action;

                /**
                 * Decodes a CQ_Action message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_Action;

                /**
                 * Verifies a CQ_Action message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_Action message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_Action
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_Action;

                /**
                 * Creates a plain object from a CQ_Action message. Also converts values to other types if specified.
                 * @param message CQ_Action
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_Action to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_Action
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_SetFieldObject. */
            interface ICQ_SetFieldObject {

                /** CQ_SetFieldObject itemDbId */
                itemDbId?: (number|null);

                /** CQ_SetFieldObject itemCmsId */
                itemCmsId?: (number|null);

                /** CQ_SetFieldObject posX */
                posX?: (number|null);

                /** CQ_SetFieldObject posY */
                posY?: (number|null);

                /** CQ_SetFieldObject layer */
                layer?: (number|null);

                /** CQ_SetFieldObject dir */
                dir?: (GIANTSTEP.WS.Protocol.EDegree|null);
            }

            /** Represents a CQ_SetFieldObject. */
            class CQ_SetFieldObject implements ICQ_SetFieldObject {

                /**
                 * Constructs a new CQ_SetFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_SetFieldObject);

                /** CQ_SetFieldObject itemDbId. */
                public itemDbId: number;

                /** CQ_SetFieldObject itemCmsId. */
                public itemCmsId: number;

                /** CQ_SetFieldObject posX. */
                public posX: number;

                /** CQ_SetFieldObject posY. */
                public posY: number;

                /** CQ_SetFieldObject layer. */
                public layer: number;

                /** CQ_SetFieldObject dir. */
                public dir: GIANTSTEP.WS.Protocol.EDegree;

                /**
                 * Creates a new CQ_SetFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_SetFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_SetFieldObject): GIANTSTEP.WS.Protocol.CQ_SetFieldObject;

                /**
                 * Encodes the specified CQ_SetFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_SetFieldObject.verify|verify} messages.
                 * @param message CQ_SetFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_SetFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_SetFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_SetFieldObject.verify|verify} messages.
                 * @param message CQ_SetFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_SetFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_SetFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_SetFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_SetFieldObject;

                /**
                 * Decodes a CQ_SetFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_SetFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_SetFieldObject;

                /**
                 * Verifies a CQ_SetFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_SetFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_SetFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_SetFieldObject;

                /**
                 * Creates a plain object from a CQ_SetFieldObject message. Also converts values to other types if specified.
                 * @param message CQ_SetFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_SetFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_SetFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_SetFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_UpdateFieldObject. */
            interface ICQ_UpdateFieldObject {

                /** CQ_UpdateFieldObject objectDbId */
                objectDbId?: (number|null);

                /** CQ_UpdateFieldObject posX */
                posX?: (number|null);

                /** CQ_UpdateFieldObject posY */
                posY?: (number|null);

                /** CQ_UpdateFieldObject layer */
                layer?: (number|null);

                /** CQ_UpdateFieldObject dir */
                dir?: (GIANTSTEP.WS.Protocol.EDegree|null);
            }

            /** Represents a CQ_UpdateFieldObject. */
            class CQ_UpdateFieldObject implements ICQ_UpdateFieldObject {

                /**
                 * Constructs a new CQ_UpdateFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_UpdateFieldObject);

                /** CQ_UpdateFieldObject objectDbId. */
                public objectDbId: number;

                /** CQ_UpdateFieldObject posX. */
                public posX: number;

                /** CQ_UpdateFieldObject posY. */
                public posY: number;

                /** CQ_UpdateFieldObject layer. */
                public layer: number;

                /** CQ_UpdateFieldObject dir. */
                public dir: GIANTSTEP.WS.Protocol.EDegree;

                /**
                 * Creates a new CQ_UpdateFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_UpdateFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_UpdateFieldObject): GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject;

                /**
                 * Encodes the specified CQ_UpdateFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject.verify|verify} messages.
                 * @param message CQ_UpdateFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_UpdateFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_UpdateFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject.verify|verify} messages.
                 * @param message CQ_UpdateFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_UpdateFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_UpdateFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_UpdateFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject;

                /**
                 * Decodes a CQ_UpdateFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_UpdateFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject;

                /**
                 * Verifies a CQ_UpdateFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_UpdateFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_UpdateFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject;

                /**
                 * Creates a plain object from a CQ_UpdateFieldObject message. Also converts values to other types if specified.
                 * @param message CQ_UpdateFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_UpdateFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_UpdateFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_UpdateFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_RemoveFieldObject. */
            interface ICQ_RemoveFieldObject {

                /** CQ_RemoveFieldObject objectDbId */
                objectDbId?: (number|null);

                /** CQ_RemoveFieldObject isEditorMode */
                isEditorMode?: (boolean|null);
            }

            /** Represents a CQ_RemoveFieldObject. */
            class CQ_RemoveFieldObject implements ICQ_RemoveFieldObject {

                /**
                 * Constructs a new CQ_RemoveFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_RemoveFieldObject);

                /** CQ_RemoveFieldObject objectDbId. */
                public objectDbId: number;

                /** CQ_RemoveFieldObject isEditorMode. */
                public isEditorMode: boolean;

                /**
                 * Creates a new CQ_RemoveFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_RemoveFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_RemoveFieldObject): GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject;

                /**
                 * Encodes the specified CQ_RemoveFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject.verify|verify} messages.
                 * @param message CQ_RemoveFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_RemoveFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_RemoveFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject.verify|verify} messages.
                 * @param message CQ_RemoveFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_RemoveFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_RemoveFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_RemoveFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject;

                /**
                 * Decodes a CQ_RemoveFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_RemoveFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject;

                /**
                 * Verifies a CQ_RemoveFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_RemoveFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_RemoveFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject;

                /**
                 * Creates a plain object from a CQ_RemoveFieldObject message. Also converts values to other types if specified.
                 * @param message CQ_RemoveFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_RemoveFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_RemoveFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_RemoveFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetMyWorldInventory. */
            interface ICQ_GetMyWorldInventory {

                /** CQ_GetMyWorldInventory userId */
                userId?: (number|null);
            }

            /** Represents a CQ_GetMyWorldInventory. */
            class CQ_GetMyWorldInventory implements ICQ_GetMyWorldInventory {

                /**
                 * Constructs a new CQ_GetMyWorldInventory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyWorldInventory);

                /** CQ_GetMyWorldInventory userId. */
                public userId: number;

                /**
                 * Creates a new CQ_GetMyWorldInventory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetMyWorldInventory instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyWorldInventory): GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory;

                /**
                 * Encodes the specified CQ_GetMyWorldInventory message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory.verify|verify} messages.
                 * @param message CQ_GetMyWorldInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_GetMyWorldInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetMyWorldInventory message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory.verify|verify} messages.
                 * @param message CQ_GetMyWorldInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_GetMyWorldInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetMyWorldInventory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetMyWorldInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory;

                /**
                 * Decodes a CQ_GetMyWorldInventory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetMyWorldInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory;

                /**
                 * Verifies a CQ_GetMyWorldInventory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetMyWorldInventory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetMyWorldInventory
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory;

                /**
                 * Creates a plain object from a CQ_GetMyWorldInventory message. Also converts values to other types if specified.
                 * @param message CQ_GetMyWorldInventory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_GetMyWorldInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetMyWorldInventory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetMyWorldInventory
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetMyAvatarInventory. */
            interface ICQ_GetMyAvatarInventory {

                /** CQ_GetMyAvatarInventory userId */
                userId?: (number|null);
            }

            /** Represents a CQ_GetMyAvatarInventory. */
            class CQ_GetMyAvatarInventory implements ICQ_GetMyAvatarInventory {

                /**
                 * Constructs a new CQ_GetMyAvatarInventory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyAvatarInventory);

                /** CQ_GetMyAvatarInventory userId. */
                public userId: number;

                /**
                 * Creates a new CQ_GetMyAvatarInventory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetMyAvatarInventory instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyAvatarInventory): GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory;

                /**
                 * Encodes the specified CQ_GetMyAvatarInventory message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory.verify|verify} messages.
                 * @param message CQ_GetMyAvatarInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_GetMyAvatarInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetMyAvatarInventory message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory.verify|verify} messages.
                 * @param message CQ_GetMyAvatarInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_GetMyAvatarInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetMyAvatarInventory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetMyAvatarInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory;

                /**
                 * Decodes a CQ_GetMyAvatarInventory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetMyAvatarInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory;

                /**
                 * Verifies a CQ_GetMyAvatarInventory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetMyAvatarInventory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetMyAvatarInventory
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory;

                /**
                 * Creates a plain object from a CQ_GetMyAvatarInventory message. Also converts values to other types if specified.
                 * @param message CQ_GetMyAvatarInventory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_GetMyAvatarInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetMyAvatarInventory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetMyAvatarInventory
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetMyEquipments. */
            interface ICQ_GetMyEquipments {

                /** CQ_GetMyEquipments userId */
                userId?: (number|null);
            }

            /** Represents a CQ_GetMyEquipments. */
            class CQ_GetMyEquipments implements ICQ_GetMyEquipments {

                /**
                 * Constructs a new CQ_GetMyEquipments.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyEquipments);

                /** CQ_GetMyEquipments userId. */
                public userId: number;

                /**
                 * Creates a new CQ_GetMyEquipments instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetMyEquipments instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_GetMyEquipments): GIANTSTEP.WS.Protocol.CQ_GetMyEquipments;

                /**
                 * Encodes the specified CQ_GetMyEquipments message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyEquipments.verify|verify} messages.
                 * @param message CQ_GetMyEquipments message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_GetMyEquipments, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetMyEquipments message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetMyEquipments.verify|verify} messages.
                 * @param message CQ_GetMyEquipments message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_GetMyEquipments, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetMyEquipments message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetMyEquipments
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_GetMyEquipments;

                /**
                 * Decodes a CQ_GetMyEquipments message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetMyEquipments
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_GetMyEquipments;

                /**
                 * Verifies a CQ_GetMyEquipments message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetMyEquipments message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetMyEquipments
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_GetMyEquipments;

                /**
                 * Creates a plain object from a CQ_GetMyEquipments message. Also converts values to other types if specified.
                 * @param message CQ_GetMyEquipments
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_GetMyEquipments, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetMyEquipments to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetMyEquipments
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_EquipItem. */
            interface ICQ_EquipItem {

                /** CQ_EquipItem itemDbGuid */
                itemDbGuid?: (number|null);
            }

            /** Represents a CQ_EquipItem. */
            class CQ_EquipItem implements ICQ_EquipItem {

                /**
                 * Constructs a new CQ_EquipItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_EquipItem);

                /** CQ_EquipItem itemDbGuid. */
                public itemDbGuid: number;

                /**
                 * Creates a new CQ_EquipItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_EquipItem instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_EquipItem): GIANTSTEP.WS.Protocol.CQ_EquipItem;

                /**
                 * Encodes the specified CQ_EquipItem message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_EquipItem.verify|verify} messages.
                 * @param message CQ_EquipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_EquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_EquipItem message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_EquipItem.verify|verify} messages.
                 * @param message CQ_EquipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_EquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_EquipItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_EquipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_EquipItem;

                /**
                 * Decodes a CQ_EquipItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_EquipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_EquipItem;

                /**
                 * Verifies a CQ_EquipItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_EquipItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_EquipItem
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_EquipItem;

                /**
                 * Creates a plain object from a CQ_EquipItem message. Also converts values to other types if specified.
                 * @param message CQ_EquipItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_EquipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_EquipItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_EquipItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_UnequipItem. */
            interface ICQ_UnequipItem {

                /** CQ_UnequipItem itemDbGuid */
                itemDbGuid?: (number|null);
            }

            /** Represents a CQ_UnequipItem. */
            class CQ_UnequipItem implements ICQ_UnequipItem {

                /**
                 * Constructs a new CQ_UnequipItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_UnequipItem);

                /** CQ_UnequipItem itemDbGuid. */
                public itemDbGuid: number;

                /**
                 * Creates a new CQ_UnequipItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_UnequipItem instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_UnequipItem): GIANTSTEP.WS.Protocol.CQ_UnequipItem;

                /**
                 * Encodes the specified CQ_UnequipItem message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_UnequipItem.verify|verify} messages.
                 * @param message CQ_UnequipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_UnequipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_UnequipItem message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_UnequipItem.verify|verify} messages.
                 * @param message CQ_UnequipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_UnequipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_UnequipItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_UnequipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_UnequipItem;

                /**
                 * Decodes a CQ_UnequipItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_UnequipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_UnequipItem;

                /**
                 * Verifies a CQ_UnequipItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_UnequipItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_UnequipItem
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_UnequipItem;

                /**
                 * Creates a plain object from a CQ_UnequipItem message. Also converts values to other types if specified.
                 * @param message CQ_UnequipItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_UnequipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_UnequipItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_UnequipItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_DropItemObject. */
            interface ICQ_DropItemObject {

                /** CQ_DropItemObject itemDbGuid */
                itemDbGuid?: (number|null);

                /** CQ_DropItemObject itemAmount */
                itemAmount?: (number|null);

                /** CQ_DropItemObject posX */
                posX?: (number|null);

                /** CQ_DropItemObject posY */
                posY?: (number|null);

                /** CQ_DropItemObject layer */
                layer?: (number|null);
            }

            /** Represents a CQ_DropItemObject. */
            class CQ_DropItemObject implements ICQ_DropItemObject {

                /**
                 * Constructs a new CQ_DropItemObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_DropItemObject);

                /** CQ_DropItemObject itemDbGuid. */
                public itemDbGuid: number;

                /** CQ_DropItemObject itemAmount. */
                public itemAmount: number;

                /** CQ_DropItemObject posX. */
                public posX: number;

                /** CQ_DropItemObject posY. */
                public posY: number;

                /** CQ_DropItemObject layer. */
                public layer: number;

                /**
                 * Creates a new CQ_DropItemObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_DropItemObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_DropItemObject): GIANTSTEP.WS.Protocol.CQ_DropItemObject;

                /**
                 * Encodes the specified CQ_DropItemObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_DropItemObject.verify|verify} messages.
                 * @param message CQ_DropItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_DropItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_DropItemObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_DropItemObject.verify|verify} messages.
                 * @param message CQ_DropItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_DropItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_DropItemObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_DropItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_DropItemObject;

                /**
                 * Decodes a CQ_DropItemObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_DropItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_DropItemObject;

                /**
                 * Verifies a CQ_DropItemObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_DropItemObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_DropItemObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_DropItemObject;

                /**
                 * Creates a plain object from a CQ_DropItemObject message. Also converts values to other types if specified.
                 * @param message CQ_DropItemObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_DropItemObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_DropItemObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_DropItemObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_TakeItemObject. */
            interface ICQ_TakeItemObject {

                /** CQ_TakeItemObject itemDbGuid */
                itemDbGuid?: (number|null);
            }

            /** Represents a CQ_TakeItemObject. */
            class CQ_TakeItemObject implements ICQ_TakeItemObject {

                /**
                 * Constructs a new CQ_TakeItemObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_TakeItemObject);

                /** CQ_TakeItemObject itemDbGuid. */
                public itemDbGuid: number;

                /**
                 * Creates a new CQ_TakeItemObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_TakeItemObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_TakeItemObject): GIANTSTEP.WS.Protocol.CQ_TakeItemObject;

                /**
                 * Encodes the specified CQ_TakeItemObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_TakeItemObject.verify|verify} messages.
                 * @param message CQ_TakeItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_TakeItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_TakeItemObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_TakeItemObject.verify|verify} messages.
                 * @param message CQ_TakeItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_TakeItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_TakeItemObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_TakeItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_TakeItemObject;

                /**
                 * Decodes a CQ_TakeItemObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_TakeItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_TakeItemObject;

                /**
                 * Verifies a CQ_TakeItemObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_TakeItemObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_TakeItemObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_TakeItemObject;

                /**
                 * Creates a plain object from a CQ_TakeItemObject message. Also converts values to other types if specified.
                 * @param message CQ_TakeItemObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_TakeItemObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_TakeItemObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_TakeItemObject
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

                /** SA_Login userCount */
                userCount?: (number|null);

                /** SA_Login user */
                user?: (GIANTSTEP.WS.Protocol.IUser|null);

                /** SA_Login character */
                character?: (GIANTSTEP.WS.Protocol.ICharacter|null);
            }

            /** Represents a SA_Login. */
            class SA_Login implements ISA_Login {

                /**
                 * Constructs a new SA_Login.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_Login);

                /** SA_Login result. */
                public result: boolean;

                /** SA_Login loginTimeUtc. */
                public loginTimeUtc: (number|Long);

                /** SA_Login userCount. */
                public userCount: number;

                /** SA_Login user. */
                public user?: (GIANTSTEP.WS.Protocol.IUser|null);

                /** SA_Login character. */
                public character?: (GIANTSTEP.WS.Protocol.ICharacter|null);

                /**
                 * Creates a new SA_Login instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_Login instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_Login): GIANTSTEP.WS.Protocol.SA_Login;

                /**
                 * Encodes the specified SA_Login message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Login.verify|verify} messages.
                 * @param message SA_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_Login message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Login.verify|verify} messages.
                 * @param message SA_Login message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_Login, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_Login message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_Login;

                /**
                 * Decodes a SA_Login message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_Login
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_Login;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_Login;

                /**
                 * Creates a plain object from a SA_Login message. Also converts values to other types if specified.
                 * @param message SA_Login
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a SN_Kick. */
            interface ISN_Kick {

                /** SN_Kick kickType */
                kickType?: (number|null);
            }

            /** Represents a SN_Kick. */
            class SN_Kick implements ISN_Kick {

                /**
                 * Constructs a new SN_Kick.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_Kick);

                /** SN_Kick kickType. */
                public kickType: number;

                /**
                 * Creates a new SN_Kick instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_Kick instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_Kick): GIANTSTEP.WS.Protocol.SN_Kick;

                /**
                 * Encodes the specified SN_Kick message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_Kick.verify|verify} messages.
                 * @param message SN_Kick message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_Kick, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_Kick message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_Kick.verify|verify} messages.
                 * @param message SN_Kick message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_Kick, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_Kick message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_Kick
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_Kick;

                /**
                 * Decodes a SN_Kick message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_Kick
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_Kick;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_Kick;

                /**
                 * Creates a plain object from a SN_Kick message. Also converts values to other types if specified.
                 * @param message SN_Kick
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_Kick, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a SA_Move. */
            interface ISA_Move {

                /** SA_Move userId */
                userId?: (number|null);

                /** SA_Move moveState */
                moveState?: (GIANTSTEP.WS.Protocol.IMoveState|null);
            }

            /** Represents a SA_Move. */
            class SA_Move implements ISA_Move {

                /**
                 * Constructs a new SA_Move.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_Move);

                /** SA_Move userId. */
                public userId: number;

                /** SA_Move moveState. */
                public moveState?: (GIANTSTEP.WS.Protocol.IMoveState|null);

                /**
                 * Creates a new SA_Move instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_Move instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_Move): GIANTSTEP.WS.Protocol.SA_Move;

                /**
                 * Encodes the specified SA_Move message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Move.verify|verify} messages.
                 * @param message SA_Move message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_Move, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_Move message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Move.verify|verify} messages.
                 * @param message SA_Move message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_Move, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_Move message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_Move
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_Move;

                /**
                 * Decodes a SA_Move message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_Move
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_Move;

                /**
                 * Verifies a SA_Move message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_Move message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_Move
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_Move;

                /**
                 * Creates a plain object from a SA_Move message. Also converts values to other types if specified.
                 * @param message SA_Move
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_Move to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_Move
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
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_Logout);

                /** SN_Logout userId. */
                public userId: number;

                /** SN_Logout userCount. */
                public userCount: number;

                /**
                 * Creates a new SN_Logout instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_Logout instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_Logout): GIANTSTEP.WS.Protocol.SN_Logout;

                /**
                 * Encodes the specified SN_Logout message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_Logout.verify|verify} messages.
                 * @param message SN_Logout message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_Logout message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_Logout.verify|verify} messages.
                 * @param message SN_Logout message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_Logout message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_Logout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_Logout;

                /**
                 * Decodes a SN_Logout message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_Logout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_Logout;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_Logout;

                /**
                 * Creates a plain object from a SN_Logout message. Also converts values to other types if specified.
                 * @param message SN_Logout
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_Logout, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_Pong);

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
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_Pong): GIANTSTEP.WS.Protocol.SA_Pong;

                /**
                 * Encodes the specified SA_Pong message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Pong.verify|verify} messages.
                 * @param message SA_Pong message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_Pong, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_Pong message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Pong.verify|verify} messages.
                 * @param message SA_Pong message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_Pong, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_Pong message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_Pong
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_Pong;

                /**
                 * Decodes a SA_Pong message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_Pong
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_Pong;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_Pong;

                /**
                 * Creates a plain object from a SA_Pong message. Also converts values to other types if specified.
                 * @param message SA_Pong
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a SA_GetWorldAddress. */
            interface ISA_GetWorldAddress {

                /** SA_GetWorldAddress result */
                result?: (boolean|null);

                /** SA_GetWorldAddress serverAddress */
                serverAddress?: (string|null);

                /** SA_GetWorldAddress worldId */
                worldId?: (number|null);
            }

            /** Represents a SA_GetWorldAddress. */
            class SA_GetWorldAddress implements ISA_GetWorldAddress {

                /**
                 * Constructs a new SA_GetWorldAddress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_GetWorldAddress);

                /** SA_GetWorldAddress result. */
                public result: boolean;

                /** SA_GetWorldAddress serverAddress. */
                public serverAddress: string;

                /** SA_GetWorldAddress worldId. */
                public worldId: number;

                /**
                 * Creates a new SA_GetWorldAddress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetWorldAddress instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_GetWorldAddress): GIANTSTEP.WS.Protocol.SA_GetWorldAddress;

                /**
                 * Encodes the specified SA_GetWorldAddress message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetWorldAddress.verify|verify} messages.
                 * @param message SA_GetWorldAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_GetWorldAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetWorldAddress message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetWorldAddress.verify|verify} messages.
                 * @param message SA_GetWorldAddress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_GetWorldAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetWorldAddress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetWorldAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_GetWorldAddress;

                /**
                 * Decodes a SA_GetWorldAddress message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetWorldAddress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_GetWorldAddress;

                /**
                 * Verifies a SA_GetWorldAddress message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetWorldAddress message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetWorldAddress
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_GetWorldAddress;

                /**
                 * Creates a plain object from a SA_GetWorldAddress message. Also converts values to other types if specified.
                 * @param message SA_GetWorldAddress
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_GetWorldAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetWorldAddress to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetWorldAddress
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_Notice_Message. */
            interface ISN_Notice_Message {

                /** SN_Notice_Message messagetype */
                messagetype?: (GIANTSTEP.WS.Protocol.NOTICE_MESSAGE_TYPE|null);

                /** SN_Notice_Message content */
                content?: (string|null);
            }

            /** Represents a SN_Notice_Message. */
            class SN_Notice_Message implements ISN_Notice_Message {

                /**
                 * Constructs a new SN_Notice_Message.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_Notice_Message);

                /** SN_Notice_Message messagetype. */
                public messagetype: GIANTSTEP.WS.Protocol.NOTICE_MESSAGE_TYPE;

                /** SN_Notice_Message content. */
                public content: string;

                /**
                 * Creates a new SN_Notice_Message instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_Notice_Message instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_Notice_Message): GIANTSTEP.WS.Protocol.SN_Notice_Message;

                /**
                 * Encodes the specified SN_Notice_Message message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_Notice_Message.verify|verify} messages.
                 * @param message SN_Notice_Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_Notice_Message, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_Notice_Message message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_Notice_Message.verify|verify} messages.
                 * @param message SN_Notice_Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_Notice_Message, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_Notice_Message message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_Notice_Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_Notice_Message;

                /**
                 * Decodes a SN_Notice_Message message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_Notice_Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_Notice_Message;

                /**
                 * Verifies a SN_Notice_Message message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_Notice_Message message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_Notice_Message
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_Notice_Message;

                /**
                 * Creates a plain object from a SN_Notice_Message message. Also converts values to other types if specified.
                 * @param message SN_Notice_Message
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_Notice_Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_Notice_Message to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_Notice_Message
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_JoinWorld. */
            interface ISA_JoinWorld {

                /** SA_JoinWorld result */
                result?: (boolean|null);

                /** SA_JoinWorld userId */
                userId?: (number|null);

                /** SA_JoinWorld worldId */
                worldId?: (number|null);
            }

            /** Represents a SA_JoinWorld. */
            class SA_JoinWorld implements ISA_JoinWorld {

                /**
                 * Constructs a new SA_JoinWorld.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_JoinWorld);

                /** SA_JoinWorld result. */
                public result: boolean;

                /** SA_JoinWorld userId. */
                public userId: number;

                /** SA_JoinWorld worldId. */
                public worldId: number;

                /**
                 * Creates a new SA_JoinWorld instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_JoinWorld instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_JoinWorld): GIANTSTEP.WS.Protocol.SA_JoinWorld;

                /**
                 * Encodes the specified SA_JoinWorld message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_JoinWorld.verify|verify} messages.
                 * @param message SA_JoinWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_JoinWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_JoinWorld message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_JoinWorld.verify|verify} messages.
                 * @param message SA_JoinWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_JoinWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_JoinWorld message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_JoinWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_JoinWorld;

                /**
                 * Decodes a SA_JoinWorld message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_JoinWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_JoinWorld;

                /**
                 * Verifies a SA_JoinWorld message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_JoinWorld message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_JoinWorld
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_JoinWorld;

                /**
                 * Creates a plain object from a SA_JoinWorld message. Also converts values to other types if specified.
                 * @param message SA_JoinWorld
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_JoinWorld, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_JoinWorld to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_JoinWorld
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_FullSyncWorld. */
            interface ISA_FullSyncWorld {

                /** SA_FullSyncWorld worldId */
                worldId?: (number|null);

                /** SA_FullSyncWorld time */
                time?: (number|null);

                /** SA_FullSyncWorld worldUserList */
                worldUserList?: (GIANTSTEP.WS.Protocol.IUserData[]|null);

                /** SA_FullSyncWorld NetworkEntityList */
                NetworkEntityList?: (GIANTSTEP.WS.Protocol.INetworkEntity[]|null);
            }

            /** Represents a SA_FullSyncWorld. */
            class SA_FullSyncWorld implements ISA_FullSyncWorld {

                /**
                 * Constructs a new SA_FullSyncWorld.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_FullSyncWorld);

                /** SA_FullSyncWorld worldId. */
                public worldId: number;

                /** SA_FullSyncWorld time. */
                public time: number;

                /** SA_FullSyncWorld worldUserList. */
                public worldUserList: GIANTSTEP.WS.Protocol.IUserData[];

                /** SA_FullSyncWorld NetworkEntityList. */
                public NetworkEntityList: GIANTSTEP.WS.Protocol.INetworkEntity[];

                /**
                 * Creates a new SA_FullSyncWorld instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_FullSyncWorld instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_FullSyncWorld): GIANTSTEP.WS.Protocol.SA_FullSyncWorld;

                /**
                 * Encodes the specified SA_FullSyncWorld message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_FullSyncWorld.verify|verify} messages.
                 * @param message SA_FullSyncWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_FullSyncWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_FullSyncWorld message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_FullSyncWorld.verify|verify} messages.
                 * @param message SA_FullSyncWorld message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_FullSyncWorld, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_FullSyncWorld message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_FullSyncWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_FullSyncWorld;

                /**
                 * Decodes a SA_FullSyncWorld message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_FullSyncWorld
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_FullSyncWorld;

                /**
                 * Verifies a SA_FullSyncWorld message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_FullSyncWorld message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_FullSyncWorld
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_FullSyncWorld;

                /**
                 * Creates a plain object from a SA_FullSyncWorld message. Also converts values to other types if specified.
                 * @param message SA_FullSyncWorld
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_FullSyncWorld, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_FullSyncWorld to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_FullSyncWorld
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_Action. */
            interface ISA_Action {

                /** SA_Action userId */
                userId?: (number|null);

                /** SA_Action byteArrMessage */
                byteArrMessage?: (Uint8Array|null);
            }

            /** Represents a SA_Action. */
            class SA_Action implements ISA_Action {

                /**
                 * Constructs a new SA_Action.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_Action);

                /** SA_Action userId. */
                public userId: number;

                /** SA_Action byteArrMessage. */
                public byteArrMessage: Uint8Array;

                /**
                 * Creates a new SA_Action instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_Action instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_Action): GIANTSTEP.WS.Protocol.SA_Action;

                /**
                 * Encodes the specified SA_Action message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Action.verify|verify} messages.
                 * @param message SA_Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_Action, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_Action message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_Action.verify|verify} messages.
                 * @param message SA_Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_Action, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_Action message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_Action;

                /**
                 * Decodes a SA_Action message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_Action;

                /**
                 * Verifies a SA_Action message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_Action message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_Action
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_Action;

                /**
                 * Creates a plain object from a SA_Action message. Also converts values to other types if specified.
                 * @param message SA_Action
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_Action to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_Action
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a UserData. */
            interface IUserData {

                /** UserData userId */
                userId?: (number|null);

                /** UserData character */
                character?: (GIANTSTEP.WS.Protocol.ICharacter|null);
            }

            /** Represents a UserData. */
            class UserData implements IUserData {

                /**
                 * Constructs a new UserData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IUserData);

                /** UserData userId. */
                public userId: number;

                /** UserData character. */
                public character?: (GIANTSTEP.WS.Protocol.ICharacter|null);

                /**
                 * Creates a new UserData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserData instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IUserData): GIANTSTEP.WS.Protocol.UserData;

                /**
                 * Encodes the specified UserData message. Does not implicitly {@link GIANTSTEP.WS.Protocol.UserData.verify|verify} messages.
                 * @param message UserData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserData message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.UserData.verify|verify} messages.
                 * @param message UserData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.UserData;

                /**
                 * Decodes a UserData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.UserData;

                /**
                 * Verifies a UserData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserData
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.UserData;

                /**
                 * Creates a plain object from a UserData message. Also converts values to other types if specified.
                 * @param message UserData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UserData
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
                constructor(properties?: GIANTSTEP.WS.Protocol.INetworkEntity);

                /** NetworkEntity objectId. */
                public objectId: number;

                /**
                 * Creates a new NetworkEntity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NetworkEntity instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.INetworkEntity): GIANTSTEP.WS.Protocol.NetworkEntity;

                /**
                 * Encodes the specified NetworkEntity message. Does not implicitly {@link GIANTSTEP.WS.Protocol.NetworkEntity.verify|verify} messages.
                 * @param message NetworkEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.INetworkEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NetworkEntity message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.NetworkEntity.verify|verify} messages.
                 * @param message NetworkEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.INetworkEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NetworkEntity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NetworkEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.NetworkEntity;

                /**
                 * Decodes a NetworkEntity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NetworkEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.NetworkEntity;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.NetworkEntity;

                /**
                 * Creates a plain object from a NetworkEntity message. Also converts values to other types if specified.
                 * @param message NetworkEntity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.NetworkEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a SN_UserJoinBroadcast. */
            interface ISN_UserJoinBroadcast {

                /** SN_UserJoinBroadcast userId */
                userId?: (number|null);

                /** SN_UserJoinBroadcast character */
                character?: (GIANTSTEP.WS.Protocol.ICharacter|null);
            }

            /** Represents a SN_UserJoinBroadcast. */
            class SN_UserJoinBroadcast implements ISN_UserJoinBroadcast {

                /**
                 * Constructs a new SN_UserJoinBroadcast.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_UserJoinBroadcast);

                /** SN_UserJoinBroadcast userId. */
                public userId: number;

                /** SN_UserJoinBroadcast character. */
                public character?: (GIANTSTEP.WS.Protocol.ICharacter|null);

                /**
                 * Creates a new SN_UserJoinBroadcast instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_UserJoinBroadcast instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_UserJoinBroadcast): GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast;

                /**
                 * Encodes the specified SN_UserJoinBroadcast message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast.verify|verify} messages.
                 * @param message SN_UserJoinBroadcast message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_UserJoinBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_UserJoinBroadcast message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast.verify|verify} messages.
                 * @param message SN_UserJoinBroadcast message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_UserJoinBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_UserJoinBroadcast message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_UserJoinBroadcast
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast;

                /**
                 * Decodes a SN_UserJoinBroadcast message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_UserJoinBroadcast
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast;

                /**
                 * Verifies a SN_UserJoinBroadcast message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_UserJoinBroadcast message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_UserJoinBroadcast
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast;

                /**
                 * Creates a plain object from a SN_UserJoinBroadcast message. Also converts values to other types if specified.
                 * @param message SN_UserJoinBroadcast
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_UserJoinBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_UserJoinBroadcast to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_UserJoinBroadcast
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_UserLeaveBroadcast. */
            interface ISN_UserLeaveBroadcast {

                /** SN_UserLeaveBroadcast CharacterName */
                CharacterName?: (string|null);

                /** SN_UserLeaveBroadcast userId */
                userId?: (number|null);
            }

            /** Represents a SN_UserLeaveBroadcast. */
            class SN_UserLeaveBroadcast implements ISN_UserLeaveBroadcast {

                /**
                 * Constructs a new SN_UserLeaveBroadcast.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_UserLeaveBroadcast);

                /** SN_UserLeaveBroadcast CharacterName. */
                public CharacterName: string;

                /** SN_UserLeaveBroadcast userId. */
                public userId: number;

                /**
                 * Creates a new SN_UserLeaveBroadcast instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_UserLeaveBroadcast instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_UserLeaveBroadcast): GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast;

                /**
                 * Encodes the specified SN_UserLeaveBroadcast message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast.verify|verify} messages.
                 * @param message SN_UserLeaveBroadcast message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_UserLeaveBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_UserLeaveBroadcast message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast.verify|verify} messages.
                 * @param message SN_UserLeaveBroadcast message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_UserLeaveBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_UserLeaveBroadcast message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_UserLeaveBroadcast
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast;

                /**
                 * Decodes a SN_UserLeaveBroadcast message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_UserLeaveBroadcast
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast;

                /**
                 * Verifies a SN_UserLeaveBroadcast message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_UserLeaveBroadcast message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_UserLeaveBroadcast
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast;

                /**
                 * Creates a plain object from a SN_UserLeaveBroadcast message. Also converts values to other types if specified.
                 * @param message SN_UserLeaveBroadcast
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_UserLeaveBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_UserLeaveBroadcast to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_UserLeaveBroadcast
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_GetAvatarSlots. */
            interface ISA_GetAvatarSlots {

                /** SA_GetAvatarSlots avatarSlots */
                avatarSlots?: (GIANTSTEP.WS.Protocol.IAvatarSlot[]|null);
            }

            /** Represents a SA_GetAvatarSlots. */
            class SA_GetAvatarSlots implements ISA_GetAvatarSlots {

                /**
                 * Constructs a new SA_GetAvatarSlots.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_GetAvatarSlots);

                /** SA_GetAvatarSlots avatarSlots. */
                public avatarSlots: GIANTSTEP.WS.Protocol.IAvatarSlot[];

                /**
                 * Creates a new SA_GetAvatarSlots instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetAvatarSlots instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_GetAvatarSlots): GIANTSTEP.WS.Protocol.SA_GetAvatarSlots;

                /**
                 * Encodes the specified SA_GetAvatarSlots message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetAvatarSlots.verify|verify} messages.
                 * @param message SA_GetAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_GetAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetAvatarSlots message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetAvatarSlots.verify|verify} messages.
                 * @param message SA_GetAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_GetAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetAvatarSlots message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_GetAvatarSlots;

                /**
                 * Decodes a SA_GetAvatarSlots message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_GetAvatarSlots;

                /**
                 * Verifies a SA_GetAvatarSlots message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetAvatarSlots message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetAvatarSlots
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_GetAvatarSlots;

                /**
                 * Creates a plain object from a SA_GetAvatarSlots message. Also converts values to other types if specified.
                 * @param message SA_GetAvatarSlots
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_GetAvatarSlots, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetAvatarSlots to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetAvatarSlots
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_SyncAvatar. */
            interface ISN_SyncAvatar {

                /** SN_SyncAvatar userId */
                userId?: (number|null);

                /** SN_SyncAvatar characterCmsId */
                characterCmsId?: (number|null);

                /** SN_SyncAvatar avatarSlots */
                avatarSlots?: (GIANTSTEP.WS.Protocol.IAvatarSlot[]|null);
            }

            /** Represents a SN_SyncAvatar. */
            class SN_SyncAvatar implements ISN_SyncAvatar {

                /**
                 * Constructs a new SN_SyncAvatar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_SyncAvatar);

                /** SN_SyncAvatar userId. */
                public userId: number;

                /** SN_SyncAvatar characterCmsId. */
                public characterCmsId?: (number|null);

                /** SN_SyncAvatar avatarSlots. */
                public avatarSlots: GIANTSTEP.WS.Protocol.IAvatarSlot[];

                /** SN_SyncAvatar _characterCmsId. */
                public _characterCmsId?: "characterCmsId";

                /**
                 * Creates a new SN_SyncAvatar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_SyncAvatar instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_SyncAvatar): GIANTSTEP.WS.Protocol.SN_SyncAvatar;

                /**
                 * Encodes the specified SN_SyncAvatar message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_SyncAvatar.verify|verify} messages.
                 * @param message SN_SyncAvatar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_SyncAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_SyncAvatar message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_SyncAvatar.verify|verify} messages.
                 * @param message SN_SyncAvatar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_SyncAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_SyncAvatar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_SyncAvatar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_SyncAvatar;

                /**
                 * Decodes a SN_SyncAvatar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_SyncAvatar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_SyncAvatar;

                /**
                 * Verifies a SN_SyncAvatar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_SyncAvatar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_SyncAvatar
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_SyncAvatar;

                /**
                 * Creates a plain object from a SN_SyncAvatar message. Also converts values to other types if specified.
                 * @param message SN_SyncAvatar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_SyncAvatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_SyncAvatar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_SyncAvatar
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_ChangeAvatarSlots. */
            interface ISA_ChangeAvatarSlots {

                /** SA_ChangeAvatarSlots result */
                result?: (boolean|null);
            }

            /** Represents a SA_ChangeAvatarSlots. */
            class SA_ChangeAvatarSlots implements ISA_ChangeAvatarSlots {

                /**
                 * Constructs a new SA_ChangeAvatarSlots.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_ChangeAvatarSlots);

                /** SA_ChangeAvatarSlots result. */
                public result: boolean;

                /**
                 * Creates a new SA_ChangeAvatarSlots instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_ChangeAvatarSlots instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_ChangeAvatarSlots): GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots;

                /**
                 * Encodes the specified SA_ChangeAvatarSlots message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots.verify|verify} messages.
                 * @param message SA_ChangeAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_ChangeAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_ChangeAvatarSlots message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots.verify|verify} messages.
                 * @param message SA_ChangeAvatarSlots message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_ChangeAvatarSlots, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_ChangeAvatarSlots message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_ChangeAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots;

                /**
                 * Decodes a SA_ChangeAvatarSlots message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_ChangeAvatarSlots
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots;

                /**
                 * Verifies a SA_ChangeAvatarSlots message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_ChangeAvatarSlots message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_ChangeAvatarSlots
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots;

                /**
                 * Creates a plain object from a SA_ChangeAvatarSlots message. Also converts values to other types if specified.
                 * @param message SA_ChangeAvatarSlots
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_ChangeAvatarSlots, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_ChangeAvatarSlots to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_ChangeAvatarSlots
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_GetMyProfile. */
            interface ISA_GetMyProfile {

                /** SA_GetMyProfile userId */
                userId?: (number|null);

                /** SA_GetMyProfile accountId */
                accountId?: (string|null);

                /** SA_GetMyProfile isAdmin */
                isAdmin?: (number|null);

                /** SA_GetMyProfile characterCmsId */
                characterCmsId?: (number|null);
            }

            /** Represents a SA_GetMyProfile. */
            class SA_GetMyProfile implements ISA_GetMyProfile {

                /**
                 * Constructs a new SA_GetMyProfile.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyProfile);

                /** SA_GetMyProfile userId. */
                public userId: number;

                /** SA_GetMyProfile accountId. */
                public accountId: string;

                /** SA_GetMyProfile isAdmin. */
                public isAdmin: number;

                /** SA_GetMyProfile characterCmsId. */
                public characterCmsId: number;

                /**
                 * Creates a new SA_GetMyProfile instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetMyProfile instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyProfile): GIANTSTEP.WS.Protocol.SA_GetMyProfile;

                /**
                 * Encodes the specified SA_GetMyProfile message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyProfile.verify|verify} messages.
                 * @param message SA_GetMyProfile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_GetMyProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetMyProfile message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyProfile.verify|verify} messages.
                 * @param message SA_GetMyProfile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_GetMyProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetMyProfile message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetMyProfile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_GetMyProfile;

                /**
                 * Decodes a SA_GetMyProfile message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetMyProfile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_GetMyProfile;

                /**
                 * Verifies a SA_GetMyProfile message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetMyProfile message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetMyProfile
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_GetMyProfile;

                /**
                 * Creates a plain object from a SA_GetMyProfile message. Also converts values to other types if specified.
                 * @param message SA_GetMyProfile
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_GetMyProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetMyProfile to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetMyProfile
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
                failedCQPacket?: (GIANTSTEP.WS.Protocol.PacketType|null);
            }

            /** Represents a ServerError. */
            class ServerError implements IServerError {

                /**
                 * Constructs a new ServerError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IServerError);

                /** ServerError errCode. */
                public errCode: number;

                /** ServerError errMessage. */
                public errMessage?: (string|null);

                /** ServerError failedCQPacket. */
                public failedCQPacket: GIANTSTEP.WS.Protocol.PacketType;

                /** ServerError _errMessage. */
                public _errMessage?: "errMessage";

                /**
                 * Creates a new ServerError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServerError instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IServerError): GIANTSTEP.WS.Protocol.ServerError;

                /**
                 * Encodes the specified ServerError message. Does not implicitly {@link GIANTSTEP.WS.Protocol.ServerError.verify|verify} messages.
                 * @param message ServerError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServerError message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.ServerError.verify|verify} messages.
                 * @param message ServerError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IServerError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServerError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServerError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.ServerError;

                /**
                 * Decodes a ServerError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServerError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.ServerError;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.ServerError;

                /**
                 * Creates a plain object from a ServerError message. Also converts values to other types if specified.
                 * @param message ServerError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.ServerError, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a SN_RefreshEnterWorldToken. */
            interface ISN_RefreshEnterWorldToken {

                /** SN_RefreshEnterWorldToken enterWorldToken */
                enterWorldToken?: (string|null);
            }

            /** Represents a SN_RefreshEnterWorldToken. */
            class SN_RefreshEnterWorldToken implements ISN_RefreshEnterWorldToken {

                /**
                 * Constructs a new SN_RefreshEnterWorldToken.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_RefreshEnterWorldToken);

                /** SN_RefreshEnterWorldToken enterWorldToken. */
                public enterWorldToken: string;

                /**
                 * Creates a new SN_RefreshEnterWorldToken instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_RefreshEnterWorldToken instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_RefreshEnterWorldToken): GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken;

                /**
                 * Encodes the specified SN_RefreshEnterWorldToken message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken.verify|verify} messages.
                 * @param message SN_RefreshEnterWorldToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_RefreshEnterWorldToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_RefreshEnterWorldToken message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken.verify|verify} messages.
                 * @param message SN_RefreshEnterWorldToken message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_RefreshEnterWorldToken, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_RefreshEnterWorldToken message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_RefreshEnterWorldToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken;

                /**
                 * Decodes a SN_RefreshEnterWorldToken message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_RefreshEnterWorldToken
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken;

                /**
                 * Verifies a SN_RefreshEnterWorldToken message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_RefreshEnterWorldToken message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_RefreshEnterWorldToken
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken;

                /**
                 * Creates a plain object from a SN_RefreshEnterWorldToken message. Also converts values to other types if specified.
                 * @param message SN_RefreshEnterWorldToken
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_RefreshEnterWorldToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_RefreshEnterWorldToken to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_RefreshEnterWorldToken
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TileEntity. */
            interface ITileEntity {

                /** TileEntity objectCmsId */
                objectCmsId?: (number|null);

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
                constructor(properties?: GIANTSTEP.WS.Protocol.ITileEntity);

                /** TileEntity objectCmsId. */
                public objectCmsId: number;

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
                public static create(properties?: GIANTSTEP.WS.Protocol.ITileEntity): GIANTSTEP.WS.Protocol.TileEntity;

                /**
                 * Encodes the specified TileEntity message. Does not implicitly {@link GIANTSTEP.WS.Protocol.TileEntity.verify|verify} messages.
                 * @param message TileEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ITileEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TileEntity message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.TileEntity.verify|verify} messages.
                 * @param message TileEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ITileEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TileEntity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TileEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.TileEntity;

                /**
                 * Decodes a TileEntity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TileEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.TileEntity;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.TileEntity;

                /**
                 * Creates a plain object from a TileEntity message. Also converts values to other types if specified.
                 * @param message TileEntity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.TileEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                dir?: (GIANTSTEP.WS.Protocol.EDegree|null);
            }

            /** Represents a FieldObjectEntity. */
            class FieldObjectEntity implements IFieldObjectEntity {

                /**
                 * Constructs a new FieldObjectEntity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IFieldObjectEntity);

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
                public dir: GIANTSTEP.WS.Protocol.EDegree;

                /**
                 * Creates a new FieldObjectEntity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FieldObjectEntity instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IFieldObjectEntity): GIANTSTEP.WS.Protocol.FieldObjectEntity;

                /**
                 * Encodes the specified FieldObjectEntity message. Does not implicitly {@link GIANTSTEP.WS.Protocol.FieldObjectEntity.verify|verify} messages.
                 * @param message FieldObjectEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IFieldObjectEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FieldObjectEntity message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.FieldObjectEntity.verify|verify} messages.
                 * @param message FieldObjectEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IFieldObjectEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FieldObjectEntity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FieldObjectEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.FieldObjectEntity;

                /**
                 * Decodes a FieldObjectEntity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FieldObjectEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.FieldObjectEntity;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.FieldObjectEntity;

                /**
                 * Creates a plain object from a FieldObjectEntity message. Also converts values to other types if specified.
                 * @param message FieldObjectEntity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.FieldObjectEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a SA_WorldInfo. */
            interface ISA_WorldInfo {

                /** SA_WorldInfo worldDbId */
                worldDbId?: (number|null);

                /** SA_WorldInfo tileList */
                tileList?: (GIANTSTEP.WS.Protocol.ITileEntity[]|null);

                /** SA_WorldInfo fieldObjectList */
                fieldObjectList?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity[]|null);

                /** SA_WorldInfo itemObjectList */
                itemObjectList?: (GIANTSTEP.WS.Protocol.IItemObjectEntity[]|null);
            }

            /** Represents a SA_WorldInfo. */
            class SA_WorldInfo implements ISA_WorldInfo {

                /**
                 * Constructs a new SA_WorldInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_WorldInfo);

                /** SA_WorldInfo worldDbId. */
                public worldDbId: number;

                /** SA_WorldInfo tileList. */
                public tileList: GIANTSTEP.WS.Protocol.ITileEntity[];

                /** SA_WorldInfo fieldObjectList. */
                public fieldObjectList: GIANTSTEP.WS.Protocol.IFieldObjectEntity[];

                /** SA_WorldInfo itemObjectList. */
                public itemObjectList: GIANTSTEP.WS.Protocol.IItemObjectEntity[];

                /**
                 * Creates a new SA_WorldInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_WorldInfo instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_WorldInfo): GIANTSTEP.WS.Protocol.SA_WorldInfo;

                /**
                 * Encodes the specified SA_WorldInfo message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_WorldInfo.verify|verify} messages.
                 * @param message SA_WorldInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_WorldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_WorldInfo message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_WorldInfo.verify|verify} messages.
                 * @param message SA_WorldInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_WorldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_WorldInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_WorldInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_WorldInfo;

                /**
                 * Decodes a SA_WorldInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_WorldInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_WorldInfo;

                /**
                 * Verifies a SA_WorldInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_WorldInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_WorldInfo
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_WorldInfo;

                /**
                 * Creates a plain object from a SA_WorldInfo message. Also converts values to other types if specified.
                 * @param message SA_WorldInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_WorldInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_WorldInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_WorldInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_FieldObjectList. */
            interface ISA_FieldObjectList {

                /** SA_FieldObjectList fieldObjectList */
                fieldObjectList?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity[]|null);
            }

            /** Represents a SA_FieldObjectList. */
            class SA_FieldObjectList implements ISA_FieldObjectList {

                /**
                 * Constructs a new SA_FieldObjectList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_FieldObjectList);

                /** SA_FieldObjectList fieldObjectList. */
                public fieldObjectList: GIANTSTEP.WS.Protocol.IFieldObjectEntity[];

                /**
                 * Creates a new SA_FieldObjectList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_FieldObjectList instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_FieldObjectList): GIANTSTEP.WS.Protocol.SA_FieldObjectList;

                /**
                 * Encodes the specified SA_FieldObjectList message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_FieldObjectList.verify|verify} messages.
                 * @param message SA_FieldObjectList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_FieldObjectList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_FieldObjectList message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_FieldObjectList.verify|verify} messages.
                 * @param message SA_FieldObjectList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_FieldObjectList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_FieldObjectList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_FieldObjectList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_FieldObjectList;

                /**
                 * Decodes a SA_FieldObjectList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_FieldObjectList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_FieldObjectList;

                /**
                 * Verifies a SA_FieldObjectList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_FieldObjectList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_FieldObjectList
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_FieldObjectList;

                /**
                 * Creates a plain object from a SA_FieldObjectList message. Also converts values to other types if specified.
                 * @param message SA_FieldObjectList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_FieldObjectList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_FieldObjectList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_FieldObjectList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_SetFieldObject. */
            interface ISA_SetFieldObject {

                /** SA_SetFieldObject errorCode */
                errorCode?: (number|null);

                /** SA_SetFieldObject objectData */
                objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);

                /** SA_SetFieldObject setObjectItem */
                setObjectItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);
            }

            /** Represents a SA_SetFieldObject. */
            class SA_SetFieldObject implements ISA_SetFieldObject {

                /**
                 * Constructs a new SA_SetFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_SetFieldObject);

                /** SA_SetFieldObject errorCode. */
                public errorCode: number;

                /** SA_SetFieldObject objectData. */
                public objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);

                /** SA_SetFieldObject setObjectItem. */
                public setObjectItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);

                /**
                 * Creates a new SA_SetFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_SetFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_SetFieldObject): GIANTSTEP.WS.Protocol.SA_SetFieldObject;

                /**
                 * Encodes the specified SA_SetFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_SetFieldObject.verify|verify} messages.
                 * @param message SA_SetFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_SetFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_SetFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_SetFieldObject.verify|verify} messages.
                 * @param message SA_SetFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_SetFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_SetFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_SetFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_SetFieldObject;

                /**
                 * Decodes a SA_SetFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_SetFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_SetFieldObject;

                /**
                 * Verifies a SA_SetFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_SetFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_SetFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_SetFieldObject;

                /**
                 * Creates a plain object from a SA_SetFieldObject message. Also converts values to other types if specified.
                 * @param message SA_SetFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_SetFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_SetFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_SetFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_UpdateFieldObject. */
            interface ISA_UpdateFieldObject {

                /** SA_UpdateFieldObject errorCode */
                errorCode?: (number|null);

                /** SA_UpdateFieldObject objectData */
                objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);
            }

            /** Represents a SA_UpdateFieldObject. */
            class SA_UpdateFieldObject implements ISA_UpdateFieldObject {

                /**
                 * Constructs a new SA_UpdateFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_UpdateFieldObject);

                /** SA_UpdateFieldObject errorCode. */
                public errorCode: number;

                /** SA_UpdateFieldObject objectData. */
                public objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);

                /**
                 * Creates a new SA_UpdateFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_UpdateFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_UpdateFieldObject): GIANTSTEP.WS.Protocol.SA_UpdateFieldObject;

                /**
                 * Encodes the specified SA_UpdateFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_UpdateFieldObject.verify|verify} messages.
                 * @param message SA_UpdateFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_UpdateFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_UpdateFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_UpdateFieldObject.verify|verify} messages.
                 * @param message SA_UpdateFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_UpdateFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_UpdateFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_UpdateFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_UpdateFieldObject;

                /**
                 * Decodes a SA_UpdateFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_UpdateFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_UpdateFieldObject;

                /**
                 * Verifies a SA_UpdateFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_UpdateFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_UpdateFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_UpdateFieldObject;

                /**
                 * Creates a plain object from a SA_UpdateFieldObject message. Also converts values to other types if specified.
                 * @param message SA_UpdateFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_UpdateFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_UpdateFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_UpdateFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_RemoveFieldObject. */
            interface ISA_RemoveFieldObject {

                /** SA_RemoveFieldObject errorCode */
                errorCode?: (number|null);

                /** SA_RemoveFieldObject objectId */
                objectId?: (number|null);

                /** SA_RemoveFieldObject isEditorMode */
                isEditorMode?: (boolean|null);

                /** SA_RemoveFieldObject removedObjectItem */
                removedObjectItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);
            }

            /** Represents a SA_RemoveFieldObject. */
            class SA_RemoveFieldObject implements ISA_RemoveFieldObject {

                /**
                 * Constructs a new SA_RemoveFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_RemoveFieldObject);

                /** SA_RemoveFieldObject errorCode. */
                public errorCode: number;

                /** SA_RemoveFieldObject objectId. */
                public objectId: number;

                /** SA_RemoveFieldObject isEditorMode. */
                public isEditorMode: boolean;

                /** SA_RemoveFieldObject removedObjectItem. */
                public removedObjectItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);

                /**
                 * Creates a new SA_RemoveFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_RemoveFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_RemoveFieldObject): GIANTSTEP.WS.Protocol.SA_RemoveFieldObject;

                /**
                 * Encodes the specified SA_RemoveFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_RemoveFieldObject.verify|verify} messages.
                 * @param message SA_RemoveFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_RemoveFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_RemoveFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_RemoveFieldObject.verify|verify} messages.
                 * @param message SA_RemoveFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_RemoveFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_RemoveFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_RemoveFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_RemoveFieldObject;

                /**
                 * Decodes a SA_RemoveFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_RemoveFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_RemoveFieldObject;

                /**
                 * Verifies a SA_RemoveFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_RemoveFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_RemoveFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_RemoveFieldObject;

                /**
                 * Creates a plain object from a SA_RemoveFieldObject message. Also converts values to other types if specified.
                 * @param message SA_RemoveFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_RemoveFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_RemoveFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_RemoveFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_SetFieldObject. */
            interface ISN_SetFieldObject {

                /** SN_SetFieldObject errorCode */
                errorCode?: (number|null);

                /** SN_SetFieldObject userId */
                userId?: (number|null);

                /** SN_SetFieldObject objectData */
                objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);
            }

            /** Represents a SN_SetFieldObject. */
            class SN_SetFieldObject implements ISN_SetFieldObject {

                /**
                 * Constructs a new SN_SetFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_SetFieldObject);

                /** SN_SetFieldObject errorCode. */
                public errorCode: number;

                /** SN_SetFieldObject userId. */
                public userId: number;

                /** SN_SetFieldObject objectData. */
                public objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);

                /**
                 * Creates a new SN_SetFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_SetFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_SetFieldObject): GIANTSTEP.WS.Protocol.SN_SetFieldObject;

                /**
                 * Encodes the specified SN_SetFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_SetFieldObject.verify|verify} messages.
                 * @param message SN_SetFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_SetFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_SetFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_SetFieldObject.verify|verify} messages.
                 * @param message SN_SetFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_SetFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_SetFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_SetFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_SetFieldObject;

                /**
                 * Decodes a SN_SetFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_SetFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_SetFieldObject;

                /**
                 * Verifies a SN_SetFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_SetFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_SetFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_SetFieldObject;

                /**
                 * Creates a plain object from a SN_SetFieldObject message. Also converts values to other types if specified.
                 * @param message SN_SetFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_SetFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_SetFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_SetFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_UpdateFieldObject. */
            interface ISN_UpdateFieldObject {

                /** SN_UpdateFieldObject errorCode */
                errorCode?: (number|null);

                /** SN_UpdateFieldObject userId */
                userId?: (number|null);

                /** SN_UpdateFieldObject objectData */
                objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);
            }

            /** Represents a SN_UpdateFieldObject. */
            class SN_UpdateFieldObject implements ISN_UpdateFieldObject {

                /**
                 * Constructs a new SN_UpdateFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_UpdateFieldObject);

                /** SN_UpdateFieldObject errorCode. */
                public errorCode: number;

                /** SN_UpdateFieldObject userId. */
                public userId: number;

                /** SN_UpdateFieldObject objectData. */
                public objectData?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity|null);

                /**
                 * Creates a new SN_UpdateFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_UpdateFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_UpdateFieldObject): GIANTSTEP.WS.Protocol.SN_UpdateFieldObject;

                /**
                 * Encodes the specified SN_UpdateFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_UpdateFieldObject.verify|verify} messages.
                 * @param message SN_UpdateFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_UpdateFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_UpdateFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_UpdateFieldObject.verify|verify} messages.
                 * @param message SN_UpdateFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_UpdateFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_UpdateFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_UpdateFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_UpdateFieldObject;

                /**
                 * Decodes a SN_UpdateFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_UpdateFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_UpdateFieldObject;

                /**
                 * Verifies a SN_UpdateFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_UpdateFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_UpdateFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_UpdateFieldObject;

                /**
                 * Creates a plain object from a SN_UpdateFieldObject message. Also converts values to other types if specified.
                 * @param message SN_UpdateFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_UpdateFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_UpdateFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_UpdateFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_RemoveFieldObject. */
            interface ISN_RemoveFieldObject {

                /** SN_RemoveFieldObject errorCode */
                errorCode?: (number|null);

                /** SN_RemoveFieldObject userId */
                userId?: (number|null);

                /** SN_RemoveFieldObject objectId */
                objectId?: (number|null);

                /** SN_RemoveFieldObject isEditorMode */
                isEditorMode?: (boolean|null);
            }

            /** Represents a SN_RemoveFieldObject. */
            class SN_RemoveFieldObject implements ISN_RemoveFieldObject {

                /**
                 * Constructs a new SN_RemoveFieldObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_RemoveFieldObject);

                /** SN_RemoveFieldObject errorCode. */
                public errorCode: number;

                /** SN_RemoveFieldObject userId. */
                public userId: number;

                /** SN_RemoveFieldObject objectId. */
                public objectId: number;

                /** SN_RemoveFieldObject isEditorMode. */
                public isEditorMode: boolean;

                /**
                 * Creates a new SN_RemoveFieldObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_RemoveFieldObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_RemoveFieldObject): GIANTSTEP.WS.Protocol.SN_RemoveFieldObject;

                /**
                 * Encodes the specified SN_RemoveFieldObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_RemoveFieldObject.verify|verify} messages.
                 * @param message SN_RemoveFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_RemoveFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_RemoveFieldObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_RemoveFieldObject.verify|verify} messages.
                 * @param message SN_RemoveFieldObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_RemoveFieldObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_RemoveFieldObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_RemoveFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_RemoveFieldObject;

                /**
                 * Decodes a SN_RemoveFieldObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_RemoveFieldObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_RemoveFieldObject;

                /**
                 * Verifies a SN_RemoveFieldObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_RemoveFieldObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_RemoveFieldObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_RemoveFieldObject;

                /**
                 * Creates a plain object from a SN_RemoveFieldObject message. Also converts values to other types if specified.
                 * @param message SN_RemoveFieldObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_RemoveFieldObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_RemoveFieldObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_RemoveFieldObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_GetMyWorldInventory. */
            interface ISA_GetMyWorldInventory {

                /** SA_GetMyWorldInventory errorCode */
                errorCode?: (number|null);

                /** SA_GetMyWorldInventory capacity */
                capacity?: (number|null);

                /** SA_GetMyWorldInventory itemList */
                itemList?: (GIANTSTEP.WS.Protocol.IWorldItem[]|null);
            }

            /** Represents a SA_GetMyWorldInventory. */
            class SA_GetMyWorldInventory implements ISA_GetMyWorldInventory {

                /**
                 * Constructs a new SA_GetMyWorldInventory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyWorldInventory);

                /** SA_GetMyWorldInventory errorCode. */
                public errorCode: number;

                /** SA_GetMyWorldInventory capacity. */
                public capacity: number;

                /** SA_GetMyWorldInventory itemList. */
                public itemList: GIANTSTEP.WS.Protocol.IWorldItem[];

                /**
                 * Creates a new SA_GetMyWorldInventory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetMyWorldInventory instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyWorldInventory): GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory;

                /**
                 * Encodes the specified SA_GetMyWorldInventory message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory.verify|verify} messages.
                 * @param message SA_GetMyWorldInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_GetMyWorldInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetMyWorldInventory message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory.verify|verify} messages.
                 * @param message SA_GetMyWorldInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_GetMyWorldInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetMyWorldInventory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetMyWorldInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory;

                /**
                 * Decodes a SA_GetMyWorldInventory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetMyWorldInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory;

                /**
                 * Verifies a SA_GetMyWorldInventory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetMyWorldInventory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetMyWorldInventory
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory;

                /**
                 * Creates a plain object from a SA_GetMyWorldInventory message. Also converts values to other types if specified.
                 * @param message SA_GetMyWorldInventory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_GetMyWorldInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetMyWorldInventory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetMyWorldInventory
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_GetMyAvatarInventory. */
            interface ISA_GetMyAvatarInventory {

                /** SA_GetMyAvatarInventory errorCode */
                errorCode?: (number|null);

                /** SA_GetMyAvatarInventory capacity */
                capacity?: (number|null);

                /** SA_GetMyAvatarInventory itemList */
                itemList?: (GIANTSTEP.WS.Protocol.IAvatarItem[]|null);
            }

            /** Represents a SA_GetMyAvatarInventory. */
            class SA_GetMyAvatarInventory implements ISA_GetMyAvatarInventory {

                /**
                 * Constructs a new SA_GetMyAvatarInventory.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyAvatarInventory);

                /** SA_GetMyAvatarInventory errorCode. */
                public errorCode: number;

                /** SA_GetMyAvatarInventory capacity. */
                public capacity: number;

                /** SA_GetMyAvatarInventory itemList. */
                public itemList: GIANTSTEP.WS.Protocol.IAvatarItem[];

                /**
                 * Creates a new SA_GetMyAvatarInventory instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetMyAvatarInventory instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyAvatarInventory): GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory;

                /**
                 * Encodes the specified SA_GetMyAvatarInventory message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory.verify|verify} messages.
                 * @param message SA_GetMyAvatarInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_GetMyAvatarInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetMyAvatarInventory message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory.verify|verify} messages.
                 * @param message SA_GetMyAvatarInventory message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_GetMyAvatarInventory, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetMyAvatarInventory message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetMyAvatarInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory;

                /**
                 * Decodes a SA_GetMyAvatarInventory message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetMyAvatarInventory
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory;

                /**
                 * Verifies a SA_GetMyAvatarInventory message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetMyAvatarInventory message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetMyAvatarInventory
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory;

                /**
                 * Creates a plain object from a SA_GetMyAvatarInventory message. Also converts values to other types if specified.
                 * @param message SA_GetMyAvatarInventory
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_GetMyAvatarInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetMyAvatarInventory to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetMyAvatarInventory
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_GetMyEquipments. */
            interface ISA_GetMyEquipments {

                /** SA_GetMyEquipments errorCode */
                errorCode?: (number|null);

                /** SA_GetMyEquipments equipmentSlotList */
                equipmentSlotList?: (GIANTSTEP.WS.Protocol.IEquipmentSlot[]|null);
            }

            /** Represents a SA_GetMyEquipments. */
            class SA_GetMyEquipments implements ISA_GetMyEquipments {

                /**
                 * Constructs a new SA_GetMyEquipments.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyEquipments);

                /** SA_GetMyEquipments errorCode. */
                public errorCode: number;

                /** SA_GetMyEquipments equipmentSlotList. */
                public equipmentSlotList: GIANTSTEP.WS.Protocol.IEquipmentSlot[];

                /**
                 * Creates a new SA_GetMyEquipments instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetMyEquipments instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_GetMyEquipments): GIANTSTEP.WS.Protocol.SA_GetMyEquipments;

                /**
                 * Encodes the specified SA_GetMyEquipments message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyEquipments.verify|verify} messages.
                 * @param message SA_GetMyEquipments message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_GetMyEquipments, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetMyEquipments message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetMyEquipments.verify|verify} messages.
                 * @param message SA_GetMyEquipments message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_GetMyEquipments, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetMyEquipments message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetMyEquipments
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_GetMyEquipments;

                /**
                 * Decodes a SA_GetMyEquipments message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetMyEquipments
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_GetMyEquipments;

                /**
                 * Verifies a SA_GetMyEquipments message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetMyEquipments message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetMyEquipments
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_GetMyEquipments;

                /**
                 * Creates a plain object from a SA_GetMyEquipments message. Also converts values to other types if specified.
                 * @param message SA_GetMyEquipments
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_GetMyEquipments, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetMyEquipments to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetMyEquipments
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_EquipItem. */
            interface ISA_EquipItem {

                /** SA_EquipItem errorCode */
                errorCode?: (number|null);

                /** SA_EquipItem EquippedItemDbGuid */
                EquippedItemDbGuid?: (number|Long|null);

                /** SA_EquipItem UnequippedItemDbGuid */
                UnequippedItemDbGuid?: (number|Long|null);
            }

            /** Represents a SA_EquipItem. */
            class SA_EquipItem implements ISA_EquipItem {

                /**
                 * Constructs a new SA_EquipItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_EquipItem);

                /** SA_EquipItem errorCode. */
                public errorCode: number;

                /** SA_EquipItem EquippedItemDbGuid. */
                public EquippedItemDbGuid: (number|Long);

                /** SA_EquipItem UnequippedItemDbGuid. */
                public UnequippedItemDbGuid: (number|Long);

                /**
                 * Creates a new SA_EquipItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_EquipItem instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_EquipItem): GIANTSTEP.WS.Protocol.SA_EquipItem;

                /**
                 * Encodes the specified SA_EquipItem message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_EquipItem.verify|verify} messages.
                 * @param message SA_EquipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_EquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_EquipItem message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_EquipItem.verify|verify} messages.
                 * @param message SA_EquipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_EquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_EquipItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_EquipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_EquipItem;

                /**
                 * Decodes a SA_EquipItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_EquipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_EquipItem;

                /**
                 * Verifies a SA_EquipItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_EquipItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_EquipItem
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_EquipItem;

                /**
                 * Creates a plain object from a SA_EquipItem message. Also converts values to other types if specified.
                 * @param message SA_EquipItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_EquipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_EquipItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_EquipItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_UnequipItem. */
            interface ISA_UnequipItem {

                /** SA_UnequipItem errorCode */
                errorCode?: (number|null);

                /** SA_UnequipItem UnequippedItemDbGuid */
                UnequippedItemDbGuid?: (number|Long|null);
            }

            /** Represents a SA_UnequipItem. */
            class SA_UnequipItem implements ISA_UnequipItem {

                /**
                 * Constructs a new SA_UnequipItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_UnequipItem);

                /** SA_UnequipItem errorCode. */
                public errorCode: number;

                /** SA_UnequipItem UnequippedItemDbGuid. */
                public UnequippedItemDbGuid: (number|Long);

                /**
                 * Creates a new SA_UnequipItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_UnequipItem instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_UnequipItem): GIANTSTEP.WS.Protocol.SA_UnequipItem;

                /**
                 * Encodes the specified SA_UnequipItem message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_UnequipItem.verify|verify} messages.
                 * @param message SA_UnequipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_UnequipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_UnequipItem message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_UnequipItem.verify|verify} messages.
                 * @param message SA_UnequipItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_UnequipItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_UnequipItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_UnequipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_UnequipItem;

                /**
                 * Decodes a SA_UnequipItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_UnequipItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_UnequipItem;

                /**
                 * Verifies a SA_UnequipItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_UnequipItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_UnequipItem
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_UnequipItem;

                /**
                 * Creates a plain object from a SA_UnequipItem message. Also converts values to other types if specified.
                 * @param message SA_UnequipItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_UnequipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_UnequipItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_UnequipItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_EquipSlotUpdateBroadcast. */
            interface ISN_EquipSlotUpdateBroadcast {

                /** SN_EquipSlotUpdateBroadcast userId */
                userId?: (number|null);

                /** SN_EquipSlotUpdateBroadcast equipmentSlotList */
                equipmentSlotList?: (GIANTSTEP.WS.Protocol.IEquipmentSlot[]|null);
            }

            /** Represents a SN_EquipSlotUpdateBroadcast. */
            class SN_EquipSlotUpdateBroadcast implements ISN_EquipSlotUpdateBroadcast {

                /**
                 * Constructs a new SN_EquipSlotUpdateBroadcast.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_EquipSlotUpdateBroadcast);

                /** SN_EquipSlotUpdateBroadcast userId. */
                public userId: number;

                /** SN_EquipSlotUpdateBroadcast equipmentSlotList. */
                public equipmentSlotList: GIANTSTEP.WS.Protocol.IEquipmentSlot[];

                /**
                 * Creates a new SN_EquipSlotUpdateBroadcast instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_EquipSlotUpdateBroadcast instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_EquipSlotUpdateBroadcast): GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast;

                /**
                 * Encodes the specified SN_EquipSlotUpdateBroadcast message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast.verify|verify} messages.
                 * @param message SN_EquipSlotUpdateBroadcast message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_EquipSlotUpdateBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_EquipSlotUpdateBroadcast message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast.verify|verify} messages.
                 * @param message SN_EquipSlotUpdateBroadcast message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_EquipSlotUpdateBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_EquipSlotUpdateBroadcast message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_EquipSlotUpdateBroadcast
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast;

                /**
                 * Decodes a SN_EquipSlotUpdateBroadcast message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_EquipSlotUpdateBroadcast
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast;

                /**
                 * Verifies a SN_EquipSlotUpdateBroadcast message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_EquipSlotUpdateBroadcast message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_EquipSlotUpdateBroadcast
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast;

                /**
                 * Creates a plain object from a SN_EquipSlotUpdateBroadcast message. Also converts values to other types if specified.
                 * @param message SN_EquipSlotUpdateBroadcast
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_EquipSlotUpdateBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_EquipSlotUpdateBroadcast to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_EquipSlotUpdateBroadcast
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ItemObjectEntity. */
            interface IItemObjectEntity {

                /** ItemObjectEntity itemObjectGuid */
                itemObjectGuid?: (number|null);

                /** ItemObjectEntity itemCmsId */
                itemCmsId?: (number|null);

                /** ItemObjectEntity itemAmount */
                itemAmount?: (number|null);

                /** ItemObjectEntity posX */
                posX?: (number|null);

                /** ItemObjectEntity posY */
                posY?: (number|null);

                /** ItemObjectEntity layer */
                layer?: (number|null);
            }

            /** Represents an ItemObjectEntity. */
            class ItemObjectEntity implements IItemObjectEntity {

                /**
                 * Constructs a new ItemObjectEntity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IItemObjectEntity);

                /** ItemObjectEntity itemObjectGuid. */
                public itemObjectGuid: number;

                /** ItemObjectEntity itemCmsId. */
                public itemCmsId: number;

                /** ItemObjectEntity itemAmount. */
                public itemAmount: number;

                /** ItemObjectEntity posX. */
                public posX: number;

                /** ItemObjectEntity posY. */
                public posY: number;

                /** ItemObjectEntity layer. */
                public layer: number;

                /**
                 * Creates a new ItemObjectEntity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ItemObjectEntity instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IItemObjectEntity): GIANTSTEP.WS.Protocol.ItemObjectEntity;

                /**
                 * Encodes the specified ItemObjectEntity message. Does not implicitly {@link GIANTSTEP.WS.Protocol.ItemObjectEntity.verify|verify} messages.
                 * @param message ItemObjectEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IItemObjectEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ItemObjectEntity message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.ItemObjectEntity.verify|verify} messages.
                 * @param message ItemObjectEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IItemObjectEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ItemObjectEntity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ItemObjectEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.ItemObjectEntity;

                /**
                 * Decodes an ItemObjectEntity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ItemObjectEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.ItemObjectEntity;

                /**
                 * Verifies an ItemObjectEntity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ItemObjectEntity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ItemObjectEntity
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.ItemObjectEntity;

                /**
                 * Creates a plain object from an ItemObjectEntity message. Also converts values to other types if specified.
                 * @param message ItemObjectEntity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.ItemObjectEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ItemObjectEntity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ItemObjectEntity
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_ItemObjectList. */
            interface ISN_ItemObjectList {

                /** SN_ItemObjectList itemObjectList */
                itemObjectList?: (GIANTSTEP.WS.Protocol.IItemObjectEntity[]|null);
            }

            /** Represents a SN_ItemObjectList. */
            class SN_ItemObjectList implements ISN_ItemObjectList {

                /**
                 * Constructs a new SN_ItemObjectList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_ItemObjectList);

                /** SN_ItemObjectList itemObjectList. */
                public itemObjectList: GIANTSTEP.WS.Protocol.IItemObjectEntity[];

                /**
                 * Creates a new SN_ItemObjectList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_ItemObjectList instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_ItemObjectList): GIANTSTEP.WS.Protocol.SN_ItemObjectList;

                /**
                 * Encodes the specified SN_ItemObjectList message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_ItemObjectList.verify|verify} messages.
                 * @param message SN_ItemObjectList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_ItemObjectList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_ItemObjectList message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_ItemObjectList.verify|verify} messages.
                 * @param message SN_ItemObjectList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_ItemObjectList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_ItemObjectList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_ItemObjectList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_ItemObjectList;

                /**
                 * Decodes a SN_ItemObjectList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_ItemObjectList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_ItemObjectList;

                /**
                 * Verifies a SN_ItemObjectList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_ItemObjectList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_ItemObjectList
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_ItemObjectList;

                /**
                 * Creates a plain object from a SN_ItemObjectList message. Also converts values to other types if specified.
                 * @param message SN_ItemObjectList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_ItemObjectList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_ItemObjectList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_ItemObjectList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_DropItemObject. */
            interface ISN_DropItemObject {

                /** SN_DropItemObject userId */
                userId?: (number|null);

                /** SN_DropItemObject itemObject */
                itemObject?: (GIANTSTEP.WS.Protocol.IItemObjectEntity|null);
            }

            /** Represents a SN_DropItemObject. */
            class SN_DropItemObject implements ISN_DropItemObject {

                /**
                 * Constructs a new SN_DropItemObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_DropItemObject);

                /** SN_DropItemObject userId. */
                public userId: number;

                /** SN_DropItemObject itemObject. */
                public itemObject?: (GIANTSTEP.WS.Protocol.IItemObjectEntity|null);

                /**
                 * Creates a new SN_DropItemObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_DropItemObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_DropItemObject): GIANTSTEP.WS.Protocol.SN_DropItemObject;

                /**
                 * Encodes the specified SN_DropItemObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_DropItemObject.verify|verify} messages.
                 * @param message SN_DropItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_DropItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_DropItemObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_DropItemObject.verify|verify} messages.
                 * @param message SN_DropItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_DropItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_DropItemObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_DropItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_DropItemObject;

                /**
                 * Decodes a SN_DropItemObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_DropItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_DropItemObject;

                /**
                 * Verifies a SN_DropItemObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_DropItemObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_DropItemObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_DropItemObject;

                /**
                 * Creates a plain object from a SN_DropItemObject message. Also converts values to other types if specified.
                 * @param message SN_DropItemObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_DropItemObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_DropItemObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_DropItemObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SN_TakeItemObject. */
            interface ISN_TakeItemObject {

                /** SN_TakeItemObject takenItemObjectGuid */
                takenItemObjectGuid?: (number|null);

                /** SN_TakeItemObject userId */
                userId?: (number|null);
            }

            /** Represents a SN_TakeItemObject. */
            class SN_TakeItemObject implements ISN_TakeItemObject {

                /**
                 * Constructs a new SN_TakeItemObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISN_TakeItemObject);

                /** SN_TakeItemObject takenItemObjectGuid. */
                public takenItemObjectGuid: number;

                /** SN_TakeItemObject userId. */
                public userId: number;

                /**
                 * Creates a new SN_TakeItemObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SN_TakeItemObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISN_TakeItemObject): GIANTSTEP.WS.Protocol.SN_TakeItemObject;

                /**
                 * Encodes the specified SN_TakeItemObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_TakeItemObject.verify|verify} messages.
                 * @param message SN_TakeItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISN_TakeItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SN_TakeItemObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SN_TakeItemObject.verify|verify} messages.
                 * @param message SN_TakeItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISN_TakeItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SN_TakeItemObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SN_TakeItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SN_TakeItemObject;

                /**
                 * Decodes a SN_TakeItemObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SN_TakeItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SN_TakeItemObject;

                /**
                 * Verifies a SN_TakeItemObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SN_TakeItemObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SN_TakeItemObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SN_TakeItemObject;

                /**
                 * Creates a plain object from a SN_TakeItemObject message. Also converts values to other types if specified.
                 * @param message SN_TakeItemObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SN_TakeItemObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SN_TakeItemObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SN_TakeItemObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_DropItemObject. */
            interface ISA_DropItemObject {

                /** SA_DropItemObject errorCode */
                errorCode?: (number|null);

                /** SA_DropItemObject droppedItem */
                droppedItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);
            }

            /** Represents a SA_DropItemObject. */
            class SA_DropItemObject implements ISA_DropItemObject {

                /**
                 * Constructs a new SA_DropItemObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_DropItemObject);

                /** SA_DropItemObject errorCode. */
                public errorCode: number;

                /** SA_DropItemObject droppedItem. */
                public droppedItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);

                /**
                 * Creates a new SA_DropItemObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_DropItemObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_DropItemObject): GIANTSTEP.WS.Protocol.SA_DropItemObject;

                /**
                 * Encodes the specified SA_DropItemObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_DropItemObject.verify|verify} messages.
                 * @param message SA_DropItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_DropItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_DropItemObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_DropItemObject.verify|verify} messages.
                 * @param message SA_DropItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_DropItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_DropItemObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_DropItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_DropItemObject;

                /**
                 * Decodes a SA_DropItemObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_DropItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_DropItemObject;

                /**
                 * Verifies a SA_DropItemObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_DropItemObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_DropItemObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_DropItemObject;

                /**
                 * Creates a plain object from a SA_DropItemObject message. Also converts values to other types if specified.
                 * @param message SA_DropItemObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_DropItemObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_DropItemObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_DropItemObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_TakeItemObject. */
            interface ISA_TakeItemObject {

                /** SA_TakeItemObject errorCode */
                errorCode?: (number|null);

                /** SA_TakeItemObject takenItem */
                takenItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);
            }

            /** Represents a SA_TakeItemObject. */
            class SA_TakeItemObject implements ISA_TakeItemObject {

                /**
                 * Constructs a new SA_TakeItemObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_TakeItemObject);

                /** SA_TakeItemObject errorCode. */
                public errorCode: number;

                /** SA_TakeItemObject takenItem. */
                public takenItem?: (GIANTSTEP.WS.Protocol.IWorldItem|null);

                /**
                 * Creates a new SA_TakeItemObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_TakeItemObject instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_TakeItemObject): GIANTSTEP.WS.Protocol.SA_TakeItemObject;

                /**
                 * Encodes the specified SA_TakeItemObject message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_TakeItemObject.verify|verify} messages.
                 * @param message SA_TakeItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_TakeItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_TakeItemObject message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_TakeItemObject.verify|verify} messages.
                 * @param message SA_TakeItemObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_TakeItemObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_TakeItemObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_TakeItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_TakeItemObject;

                /**
                 * Decodes a SA_TakeItemObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_TakeItemObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_TakeItemObject;

                /**
                 * Verifies a SA_TakeItemObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_TakeItemObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_TakeItemObject
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_TakeItemObject;

                /**
                 * Creates a plain object from a SA_TakeItemObject message. Also converts values to other types if specified.
                 * @param message SA_TakeItemObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_TakeItemObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_TakeItemObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_TakeItemObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CQ_GetWorldInfoTemp. */
            interface ICQ_GetWorldInfoTemp {

                /** CQ_GetWorldInfoTemp worldDbId */
                worldDbId?: (number|null);
            }

            /** Represents a CQ_GetWorldInfoTemp. */
            class CQ_GetWorldInfoTemp implements ICQ_GetWorldInfoTemp {

                /**
                 * Constructs a new CQ_GetWorldInfoTemp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICQ_GetWorldInfoTemp);

                /** CQ_GetWorldInfoTemp worldDbId. */
                public worldDbId: number;

                /**
                 * Creates a new CQ_GetWorldInfoTemp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CQ_GetWorldInfoTemp instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICQ_GetWorldInfoTemp): GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp;

                /**
                 * Encodes the specified CQ_GetWorldInfoTemp message. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp.verify|verify} messages.
                 * @param message CQ_GetWorldInfoTemp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICQ_GetWorldInfoTemp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CQ_GetWorldInfoTemp message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp.verify|verify} messages.
                 * @param message CQ_GetWorldInfoTemp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICQ_GetWorldInfoTemp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CQ_GetWorldInfoTemp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CQ_GetWorldInfoTemp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp;

                /**
                 * Decodes a CQ_GetWorldInfoTemp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CQ_GetWorldInfoTemp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp;

                /**
                 * Verifies a CQ_GetWorldInfoTemp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CQ_GetWorldInfoTemp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CQ_GetWorldInfoTemp
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp;

                /**
                 * Creates a plain object from a CQ_GetWorldInfoTemp message. Also converts values to other types if specified.
                 * @param message CQ_GetWorldInfoTemp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.CQ_GetWorldInfoTemp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CQ_GetWorldInfoTemp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CQ_GetWorldInfoTemp
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SA_GetWorldInfoTemp. */
            interface ISA_GetWorldInfoTemp {

                /** SA_GetWorldInfoTemp errorCode */
                errorCode?: (number|null);

                /** SA_GetWorldInfoTemp worldDbId */
                worldDbId?: (number|null);

                /** SA_GetWorldInfoTemp fieldObjectList */
                fieldObjectList?: (GIANTSTEP.WS.Protocol.IFieldObjectEntity[]|null);

                /** SA_GetWorldInfoTemp itemObjectList */
                itemObjectList?: (GIANTSTEP.WS.Protocol.IItemObjectEntity[]|null);

                /** SA_GetWorldInfoTemp worldUserList */
                worldUserList?: (GIANTSTEP.WS.Protocol.IUserData[]|null);
            }

            /** Represents a SA_GetWorldInfoTemp. */
            class SA_GetWorldInfoTemp implements ISA_GetWorldInfoTemp {

                /**
                 * Constructs a new SA_GetWorldInfoTemp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ISA_GetWorldInfoTemp);

                /** SA_GetWorldInfoTemp errorCode. */
                public errorCode: number;

                /** SA_GetWorldInfoTemp worldDbId. */
                public worldDbId: number;

                /** SA_GetWorldInfoTemp fieldObjectList. */
                public fieldObjectList: GIANTSTEP.WS.Protocol.IFieldObjectEntity[];

                /** SA_GetWorldInfoTemp itemObjectList. */
                public itemObjectList: GIANTSTEP.WS.Protocol.IItemObjectEntity[];

                /** SA_GetWorldInfoTemp worldUserList. */
                public worldUserList: GIANTSTEP.WS.Protocol.IUserData[];

                /**
                 * Creates a new SA_GetWorldInfoTemp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SA_GetWorldInfoTemp instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ISA_GetWorldInfoTemp): GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp;

                /**
                 * Encodes the specified SA_GetWorldInfoTemp message. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp.verify|verify} messages.
                 * @param message SA_GetWorldInfoTemp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ISA_GetWorldInfoTemp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SA_GetWorldInfoTemp message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp.verify|verify} messages.
                 * @param message SA_GetWorldInfoTemp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ISA_GetWorldInfoTemp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SA_GetWorldInfoTemp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SA_GetWorldInfoTemp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp;

                /**
                 * Decodes a SA_GetWorldInfoTemp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SA_GetWorldInfoTemp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp;

                /**
                 * Verifies a SA_GetWorldInfoTemp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SA_GetWorldInfoTemp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SA_GetWorldInfoTemp
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp;

                /**
                 * Creates a plain object from a SA_GetWorldInfoTemp message. Also converts values to other types if specified.
                 * @param message SA_GetWorldInfoTemp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.SA_GetWorldInfoTemp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SA_GetWorldInfoTemp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SA_GetWorldInfoTemp
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MoveState. */
            interface IMoveState {

                /** MoveState x */
                x?: (number|null);

                /** MoveState y */
                y?: (number|null);

                /** MoveState z */
                z?: (number|null);

                /** MoveState degrees */
                degrees?: (number|null);

                /** MoveState vx */
                vx?: (number|null);

                /** MoveState vy */
                vy?: (number|null);

                /** MoveState vz */
                vz?: (number|null);

                /** MoveState clientTimeUtc */
                clientTimeUtc?: (number|null);

                /** MoveState axisSize */
                axisSize?: (number|null);
            }

            /** Represents a MoveState. */
            class MoveState implements IMoveState {

                /**
                 * Constructs a new MoveState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IMoveState);

                /** MoveState x. */
                public x: number;

                /** MoveState y. */
                public y: number;

                /** MoveState z. */
                public z: number;

                /** MoveState degrees. */
                public degrees: number;

                /** MoveState vx. */
                public vx: number;

                /** MoveState vy. */
                public vy: number;

                /** MoveState vz. */
                public vz: number;

                /** MoveState clientTimeUtc. */
                public clientTimeUtc: number;

                /** MoveState axisSize. */
                public axisSize: number;

                /**
                 * Creates a new MoveState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MoveState instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IMoveState): GIANTSTEP.WS.Protocol.MoveState;

                /**
                 * Encodes the specified MoveState message. Does not implicitly {@link GIANTSTEP.WS.Protocol.MoveState.verify|verify} messages.
                 * @param message MoveState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MoveState message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.MoveState.verify|verify} messages.
                 * @param message MoveState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IMoveState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MoveState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MoveState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.MoveState;

                /**
                 * Decodes a MoveState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MoveState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.MoveState;

                /**
                 * Verifies a MoveState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MoveState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MoveState
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.MoveState;

                /**
                 * Creates a plain object from a MoveState message. Also converts values to other types if specified.
                 * @param message MoveState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.MoveState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MoveState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MoveState
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a User. */
            interface IUser {

                /** User userId */
                userId?: (number|null);

                /** User accountId */
                accountId?: (string|null);

                /** User pubId */
                pubId?: (string|null);

                /** User enterWorldToken */
                enterWorldToken?: (string|null);
            }

            /** Represents a User. */
            class User implements IUser {

                /**
                 * Constructs a new User.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IUser);

                /** User userId. */
                public userId?: (number|null);

                /** User accountId. */
                public accountId?: (string|null);

                /** User pubId. */
                public pubId?: (string|null);

                /** User enterWorldToken. */
                public enterWorldToken?: (string|null);

                /** User _userId. */
                public _userId?: "userId";

                /** User _accountId. */
                public _accountId?: "accountId";

                /** User _pubId. */
                public _pubId?: "pubId";

                /** User _enterWorldToken. */
                public _enterWorldToken?: "enterWorldToken";

                /**
                 * Creates a new User instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns User instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IUser): GIANTSTEP.WS.Protocol.User;

                /**
                 * Encodes the specified User message. Does not implicitly {@link GIANTSTEP.WS.Protocol.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.User;

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.User;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.User;

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @param message User
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an AvatarSlot. */
            interface IAvatarSlot {

                /** AvatarSlot avatarSlotId */
                avatarSlotId?: (number|null);

                /** AvatarSlot avatarItemCmsId */
                avatarItemCmsId?: (number|null);

                /** AvatarSlot itemDbGuid */
                itemDbGuid?: (number|null);

                /** AvatarSlot colorIndex */
                colorIndex?: (number|null);
            }

            /** Represents an AvatarSlot. */
            class AvatarSlot implements IAvatarSlot {

                /**
                 * Constructs a new AvatarSlot.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IAvatarSlot);

                /** AvatarSlot avatarSlotId. */
                public avatarSlotId: number;

                /** AvatarSlot avatarItemCmsId. */
                public avatarItemCmsId: number;

                /** AvatarSlot itemDbGuid. */
                public itemDbGuid: number;

                /** AvatarSlot colorIndex. */
                public colorIndex: number;

                /**
                 * Creates a new AvatarSlot instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AvatarSlot instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IAvatarSlot): GIANTSTEP.WS.Protocol.AvatarSlot;

                /**
                 * Encodes the specified AvatarSlot message. Does not implicitly {@link GIANTSTEP.WS.Protocol.AvatarSlot.verify|verify} messages.
                 * @param message AvatarSlot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IAvatarSlot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AvatarSlot message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.AvatarSlot.verify|verify} messages.
                 * @param message AvatarSlot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IAvatarSlot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AvatarSlot message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AvatarSlot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.AvatarSlot;

                /**
                 * Decodes an AvatarSlot message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AvatarSlot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.AvatarSlot;

                /**
                 * Verifies an AvatarSlot message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AvatarSlot message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AvatarSlot
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.AvatarSlot;

                /**
                 * Creates a plain object from an AvatarSlot message. Also converts values to other types if specified.
                 * @param message AvatarSlot
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.AvatarSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AvatarSlot to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AvatarSlot
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Character. */
            interface ICharacter {

                /** Character name */
                name?: (string|null);

                /** Character cmsId */
                cmsId?: (number|null);

                /** Character avatarSlots */
                avatarSlots?: (GIANTSTEP.WS.Protocol.IAvatarSlot[]|null);

                /** Character equipmentSlots */
                equipmentSlots?: (GIANTSTEP.WS.Protocol.IEquipmentSlot[]|null);
            }

            /** Represents a Character. */
            class Character implements ICharacter {

                /**
                 * Constructs a new Character.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.ICharacter);

                /** Character name. */
                public name?: (string|null);

                /** Character cmsId. */
                public cmsId?: (number|null);

                /** Character avatarSlots. */
                public avatarSlots: GIANTSTEP.WS.Protocol.IAvatarSlot[];

                /** Character equipmentSlots. */
                public equipmentSlots: GIANTSTEP.WS.Protocol.IEquipmentSlot[];

                /** Character _name. */
                public _name?: "name";

                /** Character _cmsId. */
                public _cmsId?: "cmsId";

                /**
                 * Creates a new Character instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Character instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.ICharacter): GIANTSTEP.WS.Protocol.Character;

                /**
                 * Encodes the specified Character message. Does not implicitly {@link GIANTSTEP.WS.Protocol.Character.verify|verify} messages.
                 * @param message Character message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.ICharacter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Character message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.Character.verify|verify} messages.
                 * @param message Character message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.ICharacter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Character message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Character
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.Character;

                /**
                 * Decodes a Character message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Character
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.Character;

                /**
                 * Verifies a Character message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Character message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Character
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.Character;

                /**
                 * Creates a plain object from a Character message. Also converts values to other types if specified.
                 * @param message Character
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.Character, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Character to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Character
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

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
                constructor(properties?: GIANTSTEP.WS.Protocol.IToolAttributes);

                /** ToolAttributes durability. */
                public durability: number;

                /**
                 * Creates a new ToolAttributes instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ToolAttributes instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IToolAttributes): GIANTSTEP.WS.Protocol.ToolAttributes;

                /**
                 * Encodes the specified ToolAttributes message. Does not implicitly {@link GIANTSTEP.WS.Protocol.ToolAttributes.verify|verify} messages.
                 * @param message ToolAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IToolAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ToolAttributes message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.ToolAttributes.verify|verify} messages.
                 * @param message ToolAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IToolAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ToolAttributes message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ToolAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.ToolAttributes;

                /**
                 * Decodes a ToolAttributes message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ToolAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.ToolAttributes;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.ToolAttributes;

                /**
                 * Creates a plain object from a ToolAttributes message. Also converts values to other types if specified.
                 * @param message ToolAttributes
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.ToolAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                constructor(properties?: GIANTSTEP.WS.Protocol.IVegetationAttributes);

                /** VegetationAttributes durability. */
                public durability: number;

                /**
                 * Creates a new VegetationAttributes instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VegetationAttributes instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IVegetationAttributes): GIANTSTEP.WS.Protocol.VegetationAttributes;

                /**
                 * Encodes the specified VegetationAttributes message. Does not implicitly {@link GIANTSTEP.WS.Protocol.VegetationAttributes.verify|verify} messages.
                 * @param message VegetationAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IVegetationAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VegetationAttributes message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.VegetationAttributes.verify|verify} messages.
                 * @param message VegetationAttributes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IVegetationAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VegetationAttributes message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VegetationAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.VegetationAttributes;

                /**
                 * Decodes a VegetationAttributes message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VegetationAttributes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.VegetationAttributes;

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
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.VegetationAttributes;

                /**
                 * Creates a plain object from a VegetationAttributes message. Also converts values to other types if specified.
                 * @param message VegetationAttributes
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.VegetationAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an ItemEntity. */
            interface IItemEntity {

                /** ItemEntity itemDbGuid */
                itemDbGuid?: (number|Long|null);

                /** ItemEntity itemCmsId */
                itemCmsId?: (number|null);

                /** ItemEntity count */
                count?: (number|null);
            }

            /** Represents an ItemEntity. */
            class ItemEntity implements IItemEntity {

                /**
                 * Constructs a new ItemEntity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IItemEntity);

                /** ItemEntity itemDbGuid. */
                public itemDbGuid: (number|Long);

                /** ItemEntity itemCmsId. */
                public itemCmsId: number;

                /** ItemEntity count. */
                public count: number;

                /**
                 * Creates a new ItemEntity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ItemEntity instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IItemEntity): GIANTSTEP.WS.Protocol.ItemEntity;

                /**
                 * Encodes the specified ItemEntity message. Does not implicitly {@link GIANTSTEP.WS.Protocol.ItemEntity.verify|verify} messages.
                 * @param message ItemEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IItemEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ItemEntity message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.ItemEntity.verify|verify} messages.
                 * @param message ItemEntity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IItemEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ItemEntity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ItemEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.ItemEntity;

                /**
                 * Decodes an ItemEntity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ItemEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.ItemEntity;

                /**
                 * Verifies an ItemEntity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ItemEntity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ItemEntity
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.ItemEntity;

                /**
                 * Creates a plain object from an ItemEntity message. Also converts values to other types if specified.
                 * @param message ItemEntity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.ItemEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ItemEntity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ItemEntity
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WorldItem. */
            interface IWorldItem {

                /** WorldItem item */
                item?: (GIANTSTEP.WS.Protocol.IItemEntity|null);

                /** WorldItem toolAttr */
                toolAttr?: (GIANTSTEP.WS.Protocol.IToolAttributes|null);

                /** WorldItem vegetationAttr */
                vegetationAttr?: (GIANTSTEP.WS.Protocol.IVegetationAttributes|null);
            }

            /** Represents a WorldItem. */
            class WorldItem implements IWorldItem {

                /**
                 * Constructs a new WorldItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IWorldItem);

                /** WorldItem item. */
                public item?: (GIANTSTEP.WS.Protocol.IItemEntity|null);

                /** WorldItem toolAttr. */
                public toolAttr?: (GIANTSTEP.WS.Protocol.IToolAttributes|null);

                /** WorldItem vegetationAttr. */
                public vegetationAttr?: (GIANTSTEP.WS.Protocol.IVegetationAttributes|null);

                /**
                 * Creates a new WorldItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorldItem instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IWorldItem): GIANTSTEP.WS.Protocol.WorldItem;

                /**
                 * Encodes the specified WorldItem message. Does not implicitly {@link GIANTSTEP.WS.Protocol.WorldItem.verify|verify} messages.
                 * @param message WorldItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IWorldItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorldItem message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.WorldItem.verify|verify} messages.
                 * @param message WorldItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IWorldItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorldItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorldItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.WorldItem;

                /**
                 * Decodes a WorldItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorldItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.WorldItem;

                /**
                 * Verifies a WorldItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorldItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorldItem
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.WorldItem;

                /**
                 * Creates a plain object from a WorldItem message. Also converts values to other types if specified.
                 * @param message WorldItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.WorldItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorldItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorldItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AvatarItem. */
            interface IAvatarItem {

                /** AvatarItem item */
                item?: (GIANTSTEP.WS.Protocol.IItemEntity|null);
            }

            /** Represents an AvatarItem. */
            class AvatarItem implements IAvatarItem {

                /**
                 * Constructs a new AvatarItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IAvatarItem);

                /** AvatarItem item. */
                public item?: (GIANTSTEP.WS.Protocol.IItemEntity|null);

                /**
                 * Creates a new AvatarItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AvatarItem instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IAvatarItem): GIANTSTEP.WS.Protocol.AvatarItem;

                /**
                 * Encodes the specified AvatarItem message. Does not implicitly {@link GIANTSTEP.WS.Protocol.AvatarItem.verify|verify} messages.
                 * @param message AvatarItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IAvatarItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AvatarItem message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.AvatarItem.verify|verify} messages.
                 * @param message AvatarItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IAvatarItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AvatarItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AvatarItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.AvatarItem;

                /**
                 * Decodes an AvatarItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AvatarItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.AvatarItem;

                /**
                 * Verifies an AvatarItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AvatarItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AvatarItem
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.AvatarItem;

                /**
                 * Creates a plain object from an AvatarItem message. Also converts values to other types if specified.
                 * @param message AvatarItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.AvatarItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AvatarItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AvatarItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an EquipmentSlot. */
            interface IEquipmentSlot {

                /** EquipmentSlot itemCmsId */
                itemCmsId?: (number|null);

                /** EquipmentSlot itemDbGuid */
                itemDbGuid?: (number|null);
            }

            /** Represents an EquipmentSlot. */
            class EquipmentSlot implements IEquipmentSlot {

                /**
                 * Constructs a new EquipmentSlot.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IEquipmentSlot);

                /** EquipmentSlot itemCmsId. */
                public itemCmsId: number;

                /** EquipmentSlot itemDbGuid. */
                public itemDbGuid: number;

                /**
                 * Creates a new EquipmentSlot instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EquipmentSlot instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IEquipmentSlot): GIANTSTEP.WS.Protocol.EquipmentSlot;

                /**
                 * Encodes the specified EquipmentSlot message. Does not implicitly {@link GIANTSTEP.WS.Protocol.EquipmentSlot.verify|verify} messages.
                 * @param message EquipmentSlot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IEquipmentSlot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EquipmentSlot message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.EquipmentSlot.verify|verify} messages.
                 * @param message EquipmentSlot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IEquipmentSlot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EquipmentSlot message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EquipmentSlot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.EquipmentSlot;

                /**
                 * Decodes an EquipmentSlot message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EquipmentSlot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.EquipmentSlot;

                /**
                 * Verifies an EquipmentSlot message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EquipmentSlot message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EquipmentSlot
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.EquipmentSlot;

                /**
                 * Creates a plain object from an EquipmentSlot message. Also converts values to other types if specified.
                 * @param message EquipmentSlot
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.EquipmentSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EquipmentSlot to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EquipmentSlot
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AddSync. */
            interface IAddSync {

                /** AddSync user */
                user?: (GIANTSTEP.WS.Protocol.IUser|null);

                /** AddSync character */
                character?: (GIANTSTEP.WS.Protocol.ICharacter|null);
            }

            /** Represents an AddSync. */
            class AddSync implements IAddSync {

                /**
                 * Constructs a new AddSync.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IAddSync);

                /** AddSync user. */
                public user?: (GIANTSTEP.WS.Protocol.IUser|null);

                /** AddSync character. */
                public character?: (GIANTSTEP.WS.Protocol.ICharacter|null);

                /** AddSync _user. */
                public _user?: "user";

                /** AddSync _character. */
                public _character?: "character";

                /**
                 * Creates a new AddSync instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddSync instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IAddSync): GIANTSTEP.WS.Protocol.AddSync;

                /**
                 * Encodes the specified AddSync message. Does not implicitly {@link GIANTSTEP.WS.Protocol.AddSync.verify|verify} messages.
                 * @param message AddSync message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IAddSync, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddSync message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.AddSync.verify|verify} messages.
                 * @param message AddSync message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IAddSync, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddSync message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddSync
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.AddSync;

                /**
                 * Decodes an AddSync message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddSync
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.AddSync;

                /**
                 * Verifies an AddSync message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddSync message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddSync
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.AddSync;

                /**
                 * Creates a plain object from an AddSync message. Also converts values to other types if specified.
                 * @param message AddSync
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.AddSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddSync to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AddSync
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RemoveSync. */
            interface IRemoveSync {

                /** RemoveSync user */
                user?: (GIANTSTEP.WS.Protocol.IUser|null);

                /** RemoveSync character */
                character?: (GIANTSTEP.WS.Protocol.ICharacter|null);
            }

            /** Represents a RemoveSync. */
            class RemoveSync implements IRemoveSync {

                /**
                 * Constructs a new RemoveSync.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: GIANTSTEP.WS.Protocol.IRemoveSync);

                /** RemoveSync user. */
                public user?: (GIANTSTEP.WS.Protocol.IUser|null);

                /** RemoveSync character. */
                public character?: (GIANTSTEP.WS.Protocol.ICharacter|null);

                /** RemoveSync _user. */
                public _user?: "user";

                /** RemoveSync _character. */
                public _character?: "character";

                /**
                 * Creates a new RemoveSync instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveSync instance
                 */
                public static create(properties?: GIANTSTEP.WS.Protocol.IRemoveSync): GIANTSTEP.WS.Protocol.RemoveSync;

                /**
                 * Encodes the specified RemoveSync message. Does not implicitly {@link GIANTSTEP.WS.Protocol.RemoveSync.verify|verify} messages.
                 * @param message RemoveSync message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: GIANTSTEP.WS.Protocol.IRemoveSync, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RemoveSync message, length delimited. Does not implicitly {@link GIANTSTEP.WS.Protocol.RemoveSync.verify|verify} messages.
                 * @param message RemoveSync message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: GIANTSTEP.WS.Protocol.IRemoveSync, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveSync message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveSync
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GIANTSTEP.WS.Protocol.RemoveSync;

                /**
                 * Decodes a RemoveSync message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RemoveSync
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GIANTSTEP.WS.Protocol.RemoveSync;

                /**
                 * Verifies a RemoveSync message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RemoveSync message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RemoveSync
                 */
                public static fromObject(object: { [k: string]: any }): GIANTSTEP.WS.Protocol.RemoveSync;

                /**
                 * Creates a plain object from a RemoveSync message. Also converts values to other types if specified.
                 * @param message RemoveSync
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: GIANTSTEP.WS.Protocol.RemoveSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RemoveSync to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RemoveSync
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
