import ExpressAdapter from "./Adapters/ExpressAdapter";
import IAdapter from "./Adapters/IAdapter";
import IDynRouterConfig from "./DynRouterConfig";
import { RouteExportType } from "./enums";

export default class AdapterFactory {
    static fetch(config: IDynRouterConfig) : IAdapter {
        switch (config.exportType) {
            case RouteExportType.EXPRESS:
                return new ExpressAdapter()
        }
    }
}