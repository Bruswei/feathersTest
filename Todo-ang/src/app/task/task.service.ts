/**
 * Created by yijun on 08/07/2017.
 */

import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class TaskService {
  constructor (private _http: Http) {}

  getTasks() {
  }
}


