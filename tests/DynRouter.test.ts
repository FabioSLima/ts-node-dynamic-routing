import DynRouter from '../src/DynRouter'
import { RouteConfigType, RouteExportType } from '../src/enums'
import Route from '../src/Route'
import express, {Express} from 'express'

const baseConfig = {exportType: RouteExportType.EXPRESS, routeType: RouteConfigType.CODE}

test('Adding a correct Route to the router increases its quantity', () => {
    const router : DynRouter = new DynRouter(baseConfig)
    router.pushRoute('test-route', '/v1/test', () => { return true })
    const routeQuantity = router.count
    expect(routeQuantity).toBe(1)
})

test('Throws an error when trying to push an invalid route', () => {
    function push() {
        const router : DynRouter = new DynRouter(baseConfig)
        router.pushRoute('', '', () => { return true })
    }
    expect(() => push()).toThrow(Error)
})

test('Should not build routes automatically when no routes are passed as parameters', () => {
    const spy = jest.spyOn(DynRouter.prototype, 'buildRoutes')
    const app = express()
    new DynRouter(baseConfig, [], app)
    expect(spy).not.toBeCalled()
})

test('Should build routes automatically when the routes are passed as parameters', () => {
    const spy = jest.spyOn(DynRouter.prototype, 'buildRoutes')
    const app = express()
    new DynRouter(baseConfig, [new Route('test-route', '/v1', () => { return true })], app)
    expect(spy).toBeCalled()
})

