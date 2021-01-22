require("module-alias/register");

import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import StatusConstants from "@constants/StatusConstants";
import { AppServer } from "@src/index";

chai.use(chaiHttp);

describe("GetUserController tests", async () => {
  const app = await AppServer;

  it("It should return a status 200 and 'Test' message", (done) => {
    chai
      .request(app)
      .get("/user")
      .end((err, res) => {
        expect(res).to.have.status(StatusConstants.code200);
        expect(res.text).to.equals("Test");
        done();
      });
  });
});
