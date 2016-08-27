import {QoutesService} from "./qoutes";
import {ExternalQoutesService} from "./implementation/qoutes.impl.external"

export namespace QoutesServiceFactory {
    export function generateDefaultInstance (): QoutesService {
        return new ExternalQoutesService();
    }
}