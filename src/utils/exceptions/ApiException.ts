export class ApiException extends Error {
  public errorCode?: number;

  constructor(message?: string, errorCode?: number) {
    super(message);

    Object.setPrototypeOf(this, ApiException.prototype);

    this.errorCode = errorCode;

    console.error(this);
  }
}
