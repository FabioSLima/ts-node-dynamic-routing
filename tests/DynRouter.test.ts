import DynRouter from '../src/DynRouter'
import { RouteConfigType, RouteExportType } from '../src/enums'
import Route from '../src/Route'

test('Adding a correct Route to the router increases its quantity', () => {
    const router : DynRouter = new DynRouter()
    router.pushRoute('test-route', '/v1/test', () => { return true })
    const routeQuantity = router.count
    expect(routeQuantity).toBe(1)
})

test('Throws an error when trying to push an invalid route', () => {
    function push() {
        const router : DynRouter = new DynRouter()
        router.pushRoute('', '', () => { return true })
    }
    expect(() => push()).toThrow(Error)
})

test('Should build routes automatically when the routes are passed as parameters', () => {
    const spy = jest.spyOn(DynRouter.prototype, 'buildRoutes')
    new DynRouter({exportType: RouteExportType.EXPRESS, routeType: RouteConfigType.CODE}, [new Route('test-route', '/v1', () => { return true })])
    expect(spy).toBeCalled()
})