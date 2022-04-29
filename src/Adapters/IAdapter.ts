import Route from "../Route";

export default interface IAdapter<T> {
    configureRoutes(routes: Route[], app: T): void
}