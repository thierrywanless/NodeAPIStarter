require("module-alias/register");

import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import StatusConstants from "@constants/StatusConstants";
import { AppServer } from "@src/index";

chai.use(chaiHttp);

describe("404 API Error tests", async () => {
  const app = await AppServer;

  it("It should return a status 400", (done) => {
    chai
      .request(app)
      .get("/pathDoesNotExist")
      .end((err, res) => {
        expect(res).to.have.status(StatusConstants.code404);
        expect(res.text).to.equals(StatusConstants.code404Message);
        done();
      });
  });
});
