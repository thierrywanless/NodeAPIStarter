require("module-alias/register");

import { expect } from "chai";

import UserService from "@services/UserService";

describe("UserService tests", () => {
  it("It should return 'Test'", async () => {
    const result = await UserService.getUser();

    expect(result).to.equal("Test");
  });
});
