export interface DeviceInterface {
    init(): void;
    sendValue(): void;
    shutdown(): void;
    isOnline(): boolean;
}