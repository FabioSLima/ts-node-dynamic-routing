import ExpressAdapter from '../src/Adapters/ExpressAdapter'
import { RouteMethod } from '../src/enums'
import Route from '../src/Route'
import express from 'express'

test('it should throw an error if invalid express instance is sent', () => {
    const adapter = new ExpressAdapter()
    function configure() {
        adapter.configureRoutes([new Route('test-route', '/v1/test', () => true)], function test() { })
    }
    expect(() => configure()).toThrow()
})

test('it should throw an error if no routes are provided to adapter', () => {
    const adapter = new ExpressAdapter()
    function configure() {
        adapter.configureRoutes([], express())
    }
    expect(() => configure()).toThrow()
})