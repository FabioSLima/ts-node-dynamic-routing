import Route from '../src/Route'
import { RouteMethod } from '../src/enums'

test('it should build an object with all valid parameters', () => {
    const route = new Route('test-route', '/test/:param1', () => { return true }, RouteMethod.GET)
    expect(route).toBeDefined()
})

test('it should build an object without optional properties', () => {
    const route = new Route('test-route', '/test/:param1', () => { return true })
    expect(route).toBeDefined()
})

test('it should throw an error with invalid name', () => {
    function buildRoute() {
        new Route('', '/test/:param1', () => { return true })
    }
    expect(() => buildRoute()).toThrow()
})

test('it should throw an error with invalid path', () => {
    function buildRoute() {
        new Route('test-route', '', () => { return 1 })
    }
    expect(() => buildRoute()).toThrow()
})
