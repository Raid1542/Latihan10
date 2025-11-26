const bcrypt = require("bcryptjs");

(async () => {
  const hash = await bcrypt.hash("abcdef", 10);
  console.log(hash);
})();
