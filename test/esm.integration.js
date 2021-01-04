import { AddressFinder } from "address-finder.esm.min.js";
const doc = new DOMParser().parseFromString(
  `
    <html>
      <head></head>
      <body><input type="text" id="line_1"/></body>
    </html>
  `,
  "text/html"
);

describe("Address Finder", () => {
  it("creates address finder tools", (done) => {
    AddressFinder.setup({
      scope: doc,
      inputField: "#line_1",
      apiKey: "iddqd",
      onLoaded: () => {
        const result = doc.querySelector(".idpc_autocomplete");
        if (result === null) return done(Error("Address finder not found"));
        done();
      },
    });
  });
});
