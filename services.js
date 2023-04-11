const loginToUser = (data) => {
  //code here
  if (data.email) {
    return "login succesfully";
  } else {
    return "data not found";
  }
};

const signup = (data) => {
  //code here
  return "user created succesfully";
};

module.exports = { loginToUser, signup };
