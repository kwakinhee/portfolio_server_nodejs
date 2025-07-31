// EInventoryType

export enum EInventoryType {
  WorldInventory = 1,
  AvatarInventory = 2,
}

// EEquipSlot
export enum EEquipSlot {
  Tool = 1,
}

// EItemType

export enum EItemType {
  None = 0,
  Tool = 1,
  StackTool = 2,
  Harvest = 3,
  Vegetation = 4,
  Nature = 5,
  Blueprint = 6,
  UseItem = 7,
  NormalObj = 8,
  WorldObj = 9,
  InHouseObj = 10,
  Facility = 11,
  House = 12,
}

// EItemSubType

export enum EItemSubType {
  None = 0,
  Axe = 1,
  Shovel = 2,
  PickAxe = 3,
  WateringCan = 4,
  Ladder = 5,
  CheeringStick = 6,
  Firecracker = 7,
  Branch = 8,
  Wood = 9,
  Stone = 10,
  Ore = 11,
  Clay = 12,
  ShineSand = 13,
  Fruit = 14,
  CutFlower = 15,
  CutCrop = 16,
  Shell = 17,
  Seed = 18,
  Tree = 19,
  FruitTree = 20,
  Shrub = 21,
  Crop = 22,
  Flower = 23,
  Weed = 24,
  Rock = 25,
  Dirt = 26,
  Stump = 27,
  SlopeBluePrint = 28,
  BridgeBluePrint = 29,
  BuildingBluePrint = 30,
  PCHouseBluePrint = 31,
  NPCHouseBluePrint = 32,
  DIY = 33,
  Coupon = 34,
  Bottle = 35,
  PresentBox = 36,
  Latter = 37,
  Chair = 38,
  Bed = 39,
  Shelf = 40,
  Wardrobe = 41,
  Table = 42,
  Workbench = 43,
  Lamp = 44,
  Amp = 45,
  HomeAppliance = 46,
  Mirror = 47,
  TrashCan = 48,
  Partition = 49,
  Decoration = 50,
  KitchenUtensil = 51,
  StorageCabinet = 52,
  Sign = 53,
  Flowerpot = 54,
  Sports = 55,
  Machine = 56,
  Goods = 57,
  Instrument = 58,
  Season = 59,
  Building = 60,
  Landscape = 61,
  Sculpture = 62,
  Fence = 63,
  Wallpaper = 64,
  Floor = 65,
  WallHanging = 66,
  Rug = 67,
  Ceiling = 68,
  Slope = 69,
  Bridge = 70,
  HousePC = 71,
  HouseNPC = 72,
}

// EItemGrade

export enum EItemGrade {
  None = 0,
  Normal = 1,
}

// EItemPlace

export enum EItemPlace {
  None = 0,
  PlaceAll = 1,
  PlaceFalse = 2,
  PlaceWorld = 3,
  PlaceHouse = 4,
}

// EFacilityType

export enum EFacilityType {
  None = 0,
  Bridge = 1,
  Stairs = 2,
  HousePC = 3,
  Airfield = 4,
  CityHall = 5,
  Market = 6,
  Boutique = 7,
}

// EObjInteractionType

export enum EObjInteractionType {
  None = 0,
  NonInteraction = 1,
  Operate = 2,
  Action = 3,
  FunctionDIY = 4,
  FunctionDressRoom = 5,
  FunctionStorage = 6,
}

// EObjInteractionActionType

export enum EObjInteractionActionType {
  None = 0,
  NonAct = 1,
  Operate = 2,
  Sit = 3,
  Lie = 4,
}

// EInteractionArea

export enum EInteractionArea {
  None = 0,
  Blank = 1,
  All = 2,
  Front = 3,
  Back = 4,
  Left = 5,
  Right = 6,
  SystemTime = 7,
}

// EThemeType

export enum EThemeType {
  None = 0,
  Normal = 1,
  NewJeans = 2,
  BTS = 3,
}

// EGender

export enum EGender {
  None = 0,
  Female = 1,
  Male = 2,
}

// ESlotName

export enum ESlotName {
  None = 0,
  Head = 1,
  HeadDeco = 2,
  Ear = 3,
  Neck = 4,
  Body = 5,
  BodyDeco = 6,
  HalfBody01 = 7,
  HalfBody02 = 8,
  Arm = 9,
  Leg = 10,
  LegDeco = 11,
  Foot = 12,
  Face01 = 13,
  Face02 = 14,
  Face03 = 15,
  Face04 = 16,
  Face05 = 17,
  Face06 = 18,
  Face07 = 19,
  Face08 = 20,
  Face09 = 21,
  Face10 = 22,
  Face11 = 23,
  Face12 = 24,
  Face13 = 25,
  Face14 = 26,
  Face15 = 27,
  Face16 = 28,
  Face17 = 29,
  Face18 = 30,
  Face19 = 31,
  Face20 = 32,
  Back01 = 33,
  Back02 = 34,
  Back03 = 35,
  Hand01 = 36,
  Hand02 = 37,
  Hand03 = 38,
  BodyType = 39,
}

// ELargeCategory

export enum ELargeCategory {
  None = 0,
  Set = 1,
  Top = 2,
  Bot = 3,
  Underwear = 4,
  Socks = 5,
  Shoes = 6,
  Acc = 7,
  Head = 8,
  FaceAcc = 9,
  Fancy = 10,
  Body = 11,
  Face = 12,
  Eyes = 13,
  Nose = 14,
  Lips = 15,
  Skin = 16,
  MakeupSet = 17,
  Hair = 18,
}

// EMiddleCategory

export enum EMiddleCategory {
  None = 0,
  CommonSet = 1,
  Dress = 2,
  Suit = 3,
  Swimwear = 4,
  Costume = 5,
  Tshirts = 6,
  Hoodie = 7,
  Shirts = 8,
  Kardigan = 9,
  Zipup = 10,
  Jacket = 11,
  Jumper = 12,
  Coat = 13,
  Skirt = 14,
  Pants = 15,
  UnderTop = 16,
  UnderPants = 17,
  NormalSocks = 18,
  Stocking = 19,
  Sneakers = 20,
  Boots = 21,
  Sandals = 22,
  Loafers = 23,
  Heels = 24,
  Necklace = 25,
  Earrings = 26,
  Bracelet = 27,
  Ring = 28,
  Anklet = 29,
  Hat = 30,
  HairAcc = 31,
  Glasses = 32,
  Mask = 33,
  Piercing = 34,
  FaceDeco = 35,
  FaceObj = 36,
  Nailart = 37,
  BodyDeco = 38,
  Backwear = 39,
  Bag = 40,
  Neckwear = 41,
  Gloves = 42,
  BodyType = 43,
  FaceType = 44,
  EyeType = 45,
  Pupil = 46,
  Eyebrow = 47,
  Eyeline = 48,
  Eyelash = 49,
  Eyeshadow = 50,
  NoseType = 51,
  LipType = 52,
  Lipgloss = 53,
  SkinType = 54,
  Blusher = 55,
  Contouring = 56,
  Beard = 57,
  Makeup = 58,
  Painting = 59,
  LongHair = 60,
  MidiHair = 61,
  ShortHair = 62,
}

// ESmallCategory

export enum ESmallCategory {
  None = 0,
  LongDress = 1,
  MidiDress = 2,
  MiniDress = 3,
  LongSkirt = 4,
  MidiSkirt = 5,
  MiniSkirt = 6,
  LongPants = 7,
  MidiPants = 8,
  ShortPants = 9,
  Overknee = 10,
  HighSocks = 11,
  MiddleSocks = 12,
  LowSocks = 13,
  Hightop = 14,
  Lowtop = 15,
  HighBoots = 16,
  MiddleBoots = 17,
  LowBoots = 18,
  Sandal = 19,
  Slipper = 20,
  Loafer = 21,
  Flat = 22,
  Highheel = 23,
  Middleheel = 24,
  Lowheel = 25,
  Choker = 26,
  DropNeck = 27,
  ButtonEar = 28,
  DropEar = 29,
  RingEar = 30,
  Earcuff = 31,
  EarPiercing = 32,
  Wrist = 33,
  Armcuff = 34,
  Watch = 35,
  Cap = 36,
  BucketHat = 37,
  NoCap = 38,
  SeasonHat = 39,
  OtherHat = 40,
  Hairband = 41,
  Hairpin = 42,
  NormalGlasses = 43,
  Sunglasses = 44,
  OverallMask = 45,
  PartialMask = 46,
  Manicure = 47,
  Pedicure = 48,
  CubicDeco = 49,
  TattooDeco = 50,
  Wings = 51,
  Tail = 52,
  Backpack = 53,
  Crossbag = 54,
  Shoulderbag = 55,
  Handbag = 56,
  Muffler = 57,
  Headphone = 58,
  LongStraight = 59,
  LongPerm = 60,
  LongTied = 61,
  LongDecoHair = 62,
  MidiStraight = 63,
  MidiPerm = 64,
  MidiTied = 65,
  MidiDecoHair = 66,
  ShortStraight = 67,
  ShortPerm = 68,
  ShortTied = 69,
  ShortDecoHair = 70,
}

// EAvatarMenu

export enum EAvatarMenu {
  None = 0,
  DressRoom = 1,
  MakeupRoom = 2,
}

// EWorldBlockType

export enum EWorldBlockType {
  None = 0,
  SandBlock = 1,
  LandBlock = 2,
}

// EBlockType

export enum EBlockType {
  None = 0,
  Ground = 1,
  Water = 2,
  Beach = 3,
}

// EBlockShapeType

export enum EBlockShapeType {
  None = 0,
  Normal = 1,
  Corner = 2,
}

// EBroadCastType

export enum EBroadCastType {
  None = 0,
  WorldAccess = 1,
  WorldExit = 2,
}

// ESequenceType

export enum ESequenceType {
  None = 0,
  Stage = 1,
  AttentionDance = 2,
}

// EAcquisitionCondition

export enum EAcquisitionCondition {
  None = 0,
  NormalItem = 1,
  RareItem = 2,
}

// EAvatarGrade

export enum EAvatarGrade {
  None = 0,
  Normal = 1,
}

// EResourceType

export enum EResourceType {
  None = 0,
  Mesh = 1,
  PresetKey = 2,
  Animation = 3,
}
