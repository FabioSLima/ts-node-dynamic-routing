import Route from "../Route";

export default interface IAdapter {
    configureRoutes(routes: Route[]): void
}