import { RouteMethod } from "./enums"

export default class Route {
    name: string
    path: string
    target: () => any
    method: RouteMethod
    parameters: string[]

    constructor (name: string, path: string, target: () => any, method: RouteMethod = RouteMethod.GET) {
        this.method = method
        this.target = target

        if (!name || name == '')
            throw new Error('Invalid Name')
        this.name = name

        if (!path || path == '')
            throw new Error('Invalid Path')
        this.path = path

        this.parameters = path.split('/').filter((p) => p.startsWith(':') && p.length > 2)
    }
}