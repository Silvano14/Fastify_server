fetch("http://localhost:3000/login", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "High ev merda", password: "provolone" }),
})
  .then((res) => {
    return res.json();
  })
  .then((res) => console.log(res));
