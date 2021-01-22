export class DatabaseException extends Error {
  public errorCode?: number;

  constructor(message?: string, errorCode?: number) {
    super(message);

    Object.setPrototypeOf(this, DatabaseException.prototype);

    this.errorCode = errorCode;

    console.error(this);
  }
}
