export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  // get jwt token
  fetch("https://service-review-ashiqur-russel.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // store token on local storage
      localStorage.setItem("review-token", data.token);
    });
};
