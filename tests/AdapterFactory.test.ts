import AdapterFactory from "../src/AdapterFactory"
import ExpressAdapter from "../src/Adapters/ExpressAdapter"
import { RouteConfigType, RouteExportType } from "../src/enums"

test('Returns a ExpressAdapter when config is set to Express', () => {
    const adapter = AdapterFactory.fetch({exportType: RouteExportType.EXPRESS, routeType: RouteConfigType.CODE})
    expect(adapter).toBeInstanceOf(ExpressAdapter)
})