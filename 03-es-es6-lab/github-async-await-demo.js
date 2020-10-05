async function init() {
  const usersResp = await fetch("users.json");
  const users = await usersResp.json();

  const gitUsers = await Promise.all(
    users.map(async (user) => {
      const gitUsersResp = await fetch(
        `https://api.github.com/users/${user.name}`,
        {
          headers: {
            Authorization:
              "Basic " + btoa("a7d5408d717f0212486d06ebc04c1b59d91e0a55"),
          },
        }
      );
      return gitUsersResp.json();
    })
  );
  console.log(gitUsers);

  const images = gitUsers
    .map((gitUser) => {
      const img = new Image();
      img.src = gitUser.avatar_url;
      return img;
    })
    .map((img) => {
      document.getElementById("results").append(img);
      return img;
    });

  await new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });

  images.forEach((img) => img.remove());

  console.log("Demo finished.");
}

window.addEventListener("load", init);
