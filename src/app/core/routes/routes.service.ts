import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  /**
   * @description Routes
   */
  private readonly routes: Routes = {
    welcome: 'welcome'
  };

  /**
   * @returns Routes
   * @description Returns routes
   */
  public getRoutes(): Routes {
    return this.routes;
  }
}

/**
 * Routes interface
 */
export interface Routes {
  welcome: string;
}
