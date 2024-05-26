interface SubRoute {
    path: string;
    component: () => Promise<any>;
}
interface SubRouteParams {
    path: string;
    params?: Record<string, any>;
}
export default class SubRouter {
    routes: SubRoute[];
    maxRecords: number;
    currentHistoryIndex: number;
    history: Array<SubRouteParams>;
    _subAppRoute: any;
    constructor(routes: SubRoute[], maxRecords?: number);
    init(subApp: any): void;
    push(path: string, params?: Record<string, any>): void;
    replace(path: string, params?: Record<string, any>): void;
    pop(): void;
    update(routeParams: SubRouteParams): void;
    getMatchComponent(path: string): (() => Promise<any>) | undefined;
}
export {};
