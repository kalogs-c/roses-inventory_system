export default async function recebedorDeRequests(request, response) {
  fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      Authorization: "81f12b8c4b116e2d4b85c2eec9489f",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `query {
        allUsers {
          id,
          login,
          password
        }
      }`
    })
  }).then(response => response.json()).then(response => console.log(response))
}
