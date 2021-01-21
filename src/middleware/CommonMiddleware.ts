import { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

/**
 * Middleware applied to all routes
 * Initialized when server is started
 */
export default class CommonMiddleware {
  app: Express;

  constructor(_app: Express) {
    this.app = _app;
  }

  public async useBodyParser() {
    this.app.use(bodyParser.json());
  }

  public async useURLEncoded() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
  }

  public async useCors() {
    this.app.use(cors());
  }

  public async logRequests() {
    this.app.use((req, res, done) => {
      console.info(req.originalUrl);
      done();
    });
  }
}
