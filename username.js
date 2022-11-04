export const username = () => {
  let user;
  do {
    user = prompt("What is your username?");
    if (!user) {
      alert(`You need to pick a username.`);
    }
  } while (!user);

  return user;
};
