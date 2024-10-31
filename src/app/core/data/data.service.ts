import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Library } from '@core/interfaces/library';
import { LIBRARIES } from '@data/libraries';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private librariesBehaviorSubject: BehaviorSubject<Library[]> = new BehaviorSubject<Library[]>(LIBRARIES);

  /**
   * Returns libraries behavior subject as observable
   * @returns Libraries observable
   */
  public getLibrariesObs(): Observable<Library[]> {
    return this.librariesBehaviorSubject.asObservable();
  }
}
