import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  /**
   * @description Routes
   */
  private readonly routes: Routes;
  /**
   * @description Route paths
   */
  private readonly routePaths: Routes;

  constructor() {
    this.routes = {
      welcome: 'welcome'
    };
    this.routePaths = {
      welcome: '/' + this.routes.welcome
    };
  }

  /**
   * @returns Routes
   * @description Returns routes
   */
  public getRoutes(): Routes {
    return this.routes;
  }

  /**
   * @returns Route paths
   * @description Returns route paths
   */
  public getRoutePaths(): Routes {
    return this.routePaths;
  }
}

/**
 * Routes interface
 */
export interface Routes {
  welcome: string;
}
