import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Library } from '@app/core/interfaces';
import { LIBRARIES } from '@data/libraries';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private libraries$ = new BehaviorSubject<Library[]>(LIBRARIES);

  /**
   * Returns libraries behavior subject as observable
   * @returns Libraries observable
   */
  public getLibrariesAsObs(): Observable<Library[]> {
    return this.libraries$.asObservable();
  }
}
