import mongoConnect from "./lib/db";
(async () => {
  await mongoConnect();
})();
