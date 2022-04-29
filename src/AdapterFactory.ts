import ExpressAdapter from "./Adapters/ExpressAdapter";
import IDynRouterConfig from "./DynRouterConfig";
import { RouteExportType } from "./enums";

export default class AdapterFactory {
    static fetch(config: IDynRouterConfig) {
        switch (config.exportType) {
            case RouteExportType.EXPRESS:
                return new ExpressAdapter()
        }
    }
}