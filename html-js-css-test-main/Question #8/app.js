const token =
  "DesZO6Mj8m3cudrNnCF4M_BYNRmqpVbWYbgw9DekGq4XoVPgveYIp2KVdHmbbmWPTMw";
let auth_token = "";

fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "api-token": token,
    "user-email": "sudhakar@makoitlab.com",
  },
})
  .then((res) => res.json())
  .then((data) => (auth_token = data.auth_token))
  .then((data) => {
    fetch("https://www.universal-tutorial.com/api/countries", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${data}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

// fetch(`https://www.universal-tutorial.com/api/states/${countryName}`, {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//     Accept: "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => (auth_token = data.auth_token));

// fetch(`https://www.universal-tutorial.com/api/cities/${stateName}`, {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//     Accept: "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => (auth_token = data.auth_token));
