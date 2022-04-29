import AdapterFactory from "./AdapterFactory"
import IAdapter from "./Adapters/IAdapter"
import IDynRouterConfig from "./DynRouterConfig"
import { RouteConfigType, RouteExportType, RouteMethod } from "./enums"
import Route from "./Route"

export default class DynRouter
{
    private routesArray: Route[]
    private config: IDynRouterConfig

    constructor(config: IDynRouterConfig = { exportType: RouteExportType.EXPRESS, routeType: RouteConfigType.CODE }, routes: Route[] = [], app: unknown = null) {
        this.routesArray = routes

        /* TODO: import Routes from File
        if (config.routeType == RouteConfigType.FILE && (!config.routesFilePath || config.routesFilePath == ''))
            throw new Error('Invalid Path for routes file')
        */

        this.config = config

        /* TODO: import Routes from File
        if (config.routeType == RouteConfigType.FILE)        
            this.importRoutes()
        */

        if (routes.length && app)
            this.buildRoutes(app)
    }

    get count() : number {
      return this.routesArray.length
    }

    pushRoute(name: string, path: string, target: () => any, method: RouteMethod = RouteMethod.GET) {
        try
        {
            const route = new Route(name, path, target, method)
            this.routesArray.push(route)
        } catch (ex: any) {
            throw new Error(`Cannot add Route: ${ex}`)
        }
    }

    buildRoutes(app: any) {
        const adapter = AdapterFactory.fetch(this.config)
        adapter.configureRoutes(this.routesArray, app)
    }
}



