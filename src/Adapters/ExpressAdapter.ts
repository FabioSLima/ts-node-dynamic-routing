import Route from "../Route";
import IAdapter from "./IAdapter";
import express, { Express, Request, Response } from 'express';

export default class ExpressAdapter implements IAdapter<Function> {
    configureRoutes(routes: Route[], app: Function): void {
        if (routes.length < 1)
            throw new Error('Invalid routes')
        
        if (typeof app !== 'function' || !('get' in app && 'post' in app && 'put' in app && 'delete' in app))
            throw new Error('Invalid app instance')
        /*
        for (let i = 0; i < routes.length; i++) {

        }*/
    }
}