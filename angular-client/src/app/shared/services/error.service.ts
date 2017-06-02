import { EventEmitter } from '@angular/core';

import { Error } from '@models';


export class ErrorService {
    public errorOccurred = new EventEmitter<Error>();

    public handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }
}
