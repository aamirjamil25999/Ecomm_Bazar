const bcrypt = require("bcryptjs");

const generatePassword = () => {
  const password = "12345678";
  const hashPassword = bcrypt.hashSync(password);

  const isPasswordCorrect = bcrypt.compareSync(password, hashPassword);
  console.log(
    "hashPassword",
    hashPassword,
    "isPasswordCorrect",
    isPasswordCorrect
  );

  process.exit();
};

generatePassword();
