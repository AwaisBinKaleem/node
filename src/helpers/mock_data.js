const getMockData = () => {
    let response = [];
    let id = 0;
    for (let i = 1; i <= 10; i++) {
      id++;
      response.push({
        id: id,
        name: chance.name(),
        email: chance.email(),
        address: {
          city: chance.city(),
          country: chance.country(),
        },
        contact: {
          phone: chance.phone(),
        },
      });
    }
    return response;
  };

  module.exports = {getMockData}