export declare const DefaultD3D11Path: string;
export declare const DefaultDrawPluginPath: string;
export declare const DefaultBinPath: string;
export declare const DefaultDataPath: string;
export declare const DefaultPluginPath: string;
export declare const DefaultPluginDataPath: string;
export declare const enum EMonitoringType {
    None = 0,
    MonitoringOnly = 1,
    MonitoringAndOutput = 2,
}
export declare const enum EDeinterlaceFieldOrder {
    Top = 0,
    Bottom = 1,
}
export declare const enum EDeinterlaceMode {
    Disable = 0,
    Discard = 1,
    Retro = 2,
    Blend = 3,
    Blend2X = 4,
    Linear = 5,
    Linear2X = 6,
    Yadif = 7,
    Yadif2X = 8,
}
export declare const enum EPropertyType {
    Invalid = 0,
    Boolean = 1,
    Int = 2,
    Float = 3,
    Text = 4,
    Path = 5,
    List = 6,
    Color = 7,
    Button = 8,
    Font = 9,
    EditableList = 10,
    FrameRate = 11,
}
export declare const enum EListFormat {
    Invalid = 0,
    Int = 1,
    Float = 2,
    String = 3,
}
export declare const enum EEditableListType {
    Strings = 0,
    Files = 1,
    FilesAndUrls = 2,
}
export declare const enum EPathType {
    File = 0,
    FileSave = 1,
    Directory = 2,
}
export declare const enum ETextType {
    Default = 0,
    Password = 1,
    Multiline = 2,
}
export declare const enum ENumberType {
    Scroller = 0,
    Slider = 1,
}
export declare const enum EAlignment {
    Center = 0,
    Left = 1,
    Right = 2,
    Top = 4,
    Bottom = 8,
    TopLeft = 5,
    TopRight = 6,
    BottomLeft = 9,
    BottomRight = 10,
}
export declare const enum EOutputFlags {
    Video = 1,
    Audio = 2,
    Async = 4,
    AsyncVideo = 5,
    CustomDraw = 8,
    Interaction = 32,
    Composite = 64,
    DoNotDuplicate = 128,
    Deprecated = 256,
    DoNotSelfMonitor = 512,
}
export declare const enum ESceneDupType {
    Refs = 0,
    Copy = 1,
    PrivateRefs = 2,
    PrivateCopy = 3,
}
export declare const enum ESourceType {
    Input = 0,
    Filter = 1,
    Transition = 2,
    Scene = 3,
}
export declare const enum EFaderType {
    Cubic = 0,
    IEC = 1,
    Log = 2,
}
export declare const enum EColorFormat {
    Unknown = 0,
    A8 = 1,
    R8 = 2,
    RGBA = 3,
    BGRX = 4,
    BGRA = 5,
    R10G10B10A2 = 6,
    RGBA16 = 7,
    R16 = 8,
    RGBA16F = 9,
    RGBA32F = 10,
    RG16F = 11,
    RG32F = 12,
    R16F = 13,
    R32F = 14,
    DXT1 = 15,
    DXT3 = 16,
    DXT5 = 17,
}
export declare const enum EZStencilFormat {
    None = 0,
    Z16 = 1,
    Z24_S8 = 2,
    Z32F = 3,
    Z32F_S8X24 = 4,
}
export declare const enum EScaleType {
    Default = 0,
    Point = 1,
    FastBilinear = 2,
    Bilinear = 3,
    Bicubic = 4,
}
export declare const enum ERangeType {
    Default = 0,
    Partial = 1,
    Full = 2,
}
export declare const enum EOutputFormat {
    None = 0,
    I420 = 1,
    NV12 = 2,
    YVYU = 3,
    YUY2 = 4,
    UYVY = 5,
    RGBA = 6,
    BGRA = 7,
    BGRX = 8,
    Y800 = 9,
    I444 = 10,
}
export declare const enum EBoundsType {
    None = 0,
    Stretch = 1,
    ScaleInner = 2,
    ScaleOuter = 3,
    ScaleToWidth = 4,
    ScaleToHeight = 5,
    MaxOnly = 6,
}
export declare const enum EColorSpace {
    Default = 0,
    CS601 = 1,
    CS709 = 2,
}
export declare const enum ESpeakerLayout {
    Unknown = 0,
    Mono = 1,
    Stereo = 2,
    TwoOne = 3,
    Quad = 4,
    FourOne = 5,
    FiveOne = 6,
    FiveOneSurround = 7,
    SevenOne = 8,
    SevenOneSurround = 9,
    Surround = 10,
}
export declare const enum ESceneSignalType {
    ItemAdd = 0,
    ItemRemove = 1,
    Reorder = 2,
    ItemVisible = 3,
    ItemSelect = 4,
    ItemDeselect = 5,
    ItemTransform = 6,
}
export declare const Global: IGlobal;
export declare const InputFactory: IInputFactory;
export declare const SceneFactory: ISceneFactory;
export declare const FilterFactory: IFilterFactory;
export declare const TransitionFactory: ITransitionFactory;
export declare const DisplayFactory: IDisplayFactory;
export declare const VolmeterFactory: IVolmeterFactory;
export declare const FaderFactory: IFaderFactory;
export declare const Audio: IAudio;
export declare const Video: IVideo;
export declare const ModuleFactory: IModuleFactory;
export interface ISettings {
    [key: string]: any;
}
export interface IVec2 {
    readonly x: number;
    readonly y: number;
}
export interface ITransformInfo {
    readonly pos: IVec2;
    readonly rot: number;
    readonly scale: IVec2;
    readonly alignment: EAlignment;
    readonly boundsType: EBoundsType;
    readonly boundsAlignment: number;
    readonly bounds: IVec2;
}
export interface ICropInfo {
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly bottom: number;
}
export interface IVideoInfo {
    readonly graphicsModule: string;
    readonly fpsNum: number;
    readonly fpsDen: number;
    readonly baseWidth: number;
    readonly baseHeight: number;
    readonly outputWidth: number;
    readonly outputHeight: number;
    readonly outputFormat: EOutputFormat;
    readonly adapter: number;
    readonly gpuConversion: boolean;
    readonly colorspace: EColorSpace;
    readonly range: ERangeType;
    readonly scaleType: EScaleType;
}
export interface IAudioInfo {
    readonly samplesPerSec: number;
    readonly speakerLayout: ESpeakerLayout;
}
export interface IDisplayInit {
    width: number;
    height: number;
    format: EColorFormat;
    zsformat: EZStencilFormat;
}
export interface IGlobal {
    startup(locale: string, path?: string): void;
    shutdown(): void;
    getOutputFlagsFromId(id: string): number;
    setOutputSource(channel: number, input: ISource): void;
    getOutputSource(channel: number): ISource;
    readonly initialized: boolean;
    readonly locale: string;
    readonly version: number;
}
export interface IBooleanProperty extends IProperty {
}
export interface IColorProperty extends IProperty {
}
export interface IButtonProperty extends IProperty {
    buttonClicked(source: object): void;
}
export interface IFontProperty extends IProperty {
}
export interface IListProperty extends IProperty {
    readonly details: IListDetails;
}
export interface IListDetails {
    readonly format: EListFormat;
    readonly items: {
        name: string;
        value: string | number;
    }[];
}
export interface IEditableListProperty extends IProperty {
    readonly details: IEditableListDetails;
}
export interface IEditableListDetails extends IListDetails {
    readonly type: EEditableListType;
    readonly filter: string;
    readonly defaultPath: string;
}
export interface IPathProperty extends IProperty {
    readonly details: IPathDetails;
}
export interface IPathDetails {
    readonly type: EPathType;
}
export interface ITextProperty extends IProperty {
    readonly details: ITextDetails;
}
export interface ITextDetails {
    readonly type: ETextType;
}
export interface INumberProperty extends IProperty {
    readonly details: INumberDetails;
}
export interface INumberDetails {
    readonly type: ENumberType;
    readonly min: number;
    readonly max: number;
    readonly step: number;
}
export interface IProperty {
    readonly status: number;
    readonly name: string;
    readonly description: string;
    readonly longDescription: string;
    readonly enabled: boolean;
    readonly visible: boolean;
    readonly type: EPropertyType;
    next(): IProperty;
    modified(): boolean;
}
export interface IProperties {
    readonly status: number;
    first(): IProperty;
    count(): number;
    get(name: string): IProperty;
}
export interface IFilterFactory {
    create(id: string, name: string, settings?: ISettings): IFilter;
    types(): string[];
}
export interface IFilter extends ISource {
}
export interface IInputFactory {
    types(): string[];
    create(id: string, name: string, settings?: ISettings, hotkeys?: ISettings): IInput;
    createPrivate(id: string, name: string, settings?: ISettings): IInput;
    fromName(name: string): IInput;
    getPublicSources(): IInput[];
}
export interface IInput extends ISource {
    volume: number;
    syncOffset: number;
    showing: boolean;
    audioMixers: number;
    monitoringType: EMonitoringType;
    deinterlaceFieldOrder: EDeinterlaceFieldOrder;
    deinterlaceMode: EDeinterlaceMode;
    duplicate(name?: string, isPrivate?: boolean): IInput;
    findFilter(name: string): IFilter;
    addFilter(filter: IFilter): void;
    removeFilter(filter: IFilter): void;
    readonly filters: IFilter[];
    readonly width: number;
    readonly height: number;
}
export interface ISceneFactory {
    create(name: string): IScene;
    createPrivate(name: string): IScene;
    fromName(name: string): IScene;
}
export interface IScene extends ISource {
    duplicate(name: string, type: ESceneDupType): IScene;
    add(source: IInput): ISceneItem;
    readonly source: IInput;
    moveItem(oldIndex: number, newIndex: number): void;
    findItem(id: string | number): ISceneItem;
    getItemAtIdx(idx: number): ISceneItem;
    getItems(): ISceneItem[];
    connect(sigType: ESceneSignalType, cb: (info: ISettings) => void): ICallbackData;
    disconnect(data: ICallbackData): void;
}
export interface ISceneItem {
    readonly source: IInput;
    readonly scene: IScene;
    readonly id: number;
    selected: boolean;
    position: IVec2;
    rotation: number;
    scale: IVec2;
    alignment: EAlignment;
    boundsAlignment: number;
    bounds: IVec2;
    boundsType: EBoundsType;
    scaleFilter: EScaleType;
    visible: boolean;
    readonly transformInfo: ITransformInfo;
    crop: ICropInfo;
    moveUp(): void;
    moveDown(): void;
    moveTop(): void;
    moveBottom(): void;
    move(position: number): void;
    remove(): void;
    deferUpdateBegin(): void;
    deferUpdateEnd(): void;
}
export interface ITransitionFactory {
    types(): string[];
    create(id: string, name: string, settings?: ISettings, hotkeys?: ISettings): ITransition;
    createPrivate(id: string, name: string, settings?: ISettings): ITransition;
}
export interface ITransition extends ISource {
    getActiveSource(): ISource;
    clear(): void;
    set(input: ISource): void;
    start(ms: number, input: ISource): void;
}
export interface ISource {
    release(): void;
    remove(): void;
    update(settings: ISettings): void;
    readonly settings: ISettings;
    readonly properties: IProperties;
    readonly status: number;
    readonly type: ESourceType;
    readonly id: string;
    readonly configurable: boolean;
    readonly outputFlags: number;
    name: string;
    flags: number;
    muted: boolean;
    enabled: boolean;
}
export interface IFaderFactory {
    create(type: EFaderType): IFader;
}
export interface IFader {
    db: number;
    deflection: number;
    mul: number;
    attach(source: IInput): void;
    detach(): void;
    addCallback(cb: (data: {
        db: number;
    }) => void): ICallbackData;
    removeCallback(cbData: ICallbackData): void;
}
export interface IVolmeterFactory {
    create(type: EFaderType): IVolmeter;
}
export interface IVolmeter {
    peakHold: number;
    updateInterval: number;
    attach(source: IInput): void;
    detach(): void;
    addCallback(cb: (data: {
        level: number;
        magnitude: number;
        peak: number;
        muted: boolean;
    }) => void): ICallbackData;
    removeCallback(cbData: ICallbackData): void;
}
export interface ICallbackData {
}
export interface IDisplayFactory {
    create(info: IDisplayInit): IDisplay;
}
export interface IDisplay {
    destroy(): void;
    addDrawer(path: string): void;
    removeDrawer(path: string): void;
    readonly status: number;
    readonly enabled: boolean;
}
export interface IVideo {
    reset(info: IVideoInfo): number;
}
export interface IAudio {
    reset(info: IAudioInfo): boolean;
}
export interface IModuleFactory {
    create(binPath: string, dataPath: string): IModule;
    loadAll(): void;
    addPath(path: string, dataPath: string): void;
    logLoaded(): void;
}
export interface IModule {
    initialize(): void;
    filename(): string;
    name(): string;
    author(): string;
    description(): string;
    binPath(): string;
    dataPath(): string;
    status(): number;
}
export interface ISceneItemInfo {
    name: string;
    sourceId: string;
    sceneItemId: string;
    crop: ICropInfo;
    scaleX: number;
    scaleY: number;
    visible: boolean;
    x: number;
    y: number;
    locked: boolean;
}
export declare function addItems(scene: IScene, sceneItems: ISceneItemInfo[]): ISceneItem[];
export declare function createSources(sources: any[]): IInput[];
export interface ISourceSize {
    name: string;
    width: number;
    height: number;
    outputFlags: number;
}
export declare function getSourcesSize(sourcesNames: string[]): ISourceSize[];
