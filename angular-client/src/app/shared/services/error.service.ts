import { EventEmitter } from '@angular/core';

import { Error } from '@models';


export class ErrorService {
    public errorOccurred = new EventEmitter<Error>();

    public handleError(error: Error) {
        this.errorOccurred.emit(error);
    }
}
