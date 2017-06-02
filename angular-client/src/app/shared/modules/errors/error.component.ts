import { Component, OnInit } from '@angular/core';

import { Error } from '@models';
import { ErrorService } from '@services';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {
  private error: Error;
  private display: string;

  constructor(private errorService: ErrorService) {}

  public onErrorHandled() {
    this.display = 'none';
  }

  public ngOnInit() {
    this.errorService.errorOccurred
      .subscribe(
        (error: Error) => {
          this.error = error;
          this.display = 'block';
        }
      );
  }
}
