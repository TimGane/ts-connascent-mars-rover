import { GeoLocation } from "./GeoLocation";
export interface INasaAntenna {
    received(geolocation: GeoLocation): void;
    notifyError(): void;
}
