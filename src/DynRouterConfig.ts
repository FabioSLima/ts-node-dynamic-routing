import { RouteConfigType, RouteExportType } from "./enums";

export default interface IDynRouterConfig {
    routeType: RouteConfigType
    /* TODO: import Routes from File
    routesFilePath: string
    */
    exportType: RouteExportType
}