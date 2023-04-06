function getData() {
  let list = document.getElementById("myList");
  let listItem = "";
  axios
    .get("http://localhost:3000/getData")
    .then(function (response) {
      let data = response.data;
      data.forEach((item) => {
        listItem += `<li>${item.name}</li>`;
      });
      list.innerHTML = listItem;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showDetail(userId) {
  axios
    .get(`http://localhost:3000/getData/${userId}`)
    .then(function (response) {
      console.log(response);
      window.alert(response.data.id + response.data.name);
    });
}

function getData2() {
  let table = document.getElementById("myTable");
  console.log(table);
  let tableRow = "";
  axios
    .get("http://localhost:3000/getData")
    .then(function (response) {
      let data = response.data;
      //   console.log(data);
      data.forEach((item) => {
        tableRow += `<tr onclick="showDetail(${item.id})">
          <td id="myId">${item.id}</td>
          <td id="myName">${item.name}</td>
        </tr>`;
      });
      table.innerHTML = tableRow;
    })
    .catch(function (error) {
      console.log(error);
    });
}
