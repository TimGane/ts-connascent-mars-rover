import { GeoLocation } from "./GeoLocation";
export interface INasaAntenna {
    // received(datagrams: String []): void;
    received(geolocation: GeoLocation): void;
    notifyError(): void;
}
