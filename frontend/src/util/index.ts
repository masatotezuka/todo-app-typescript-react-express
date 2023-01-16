export function getUserIdFromCookie() {
  const cookies = document.cookie;
  console.log(cookies);
  const cookie: { userId: string } = { userId: "" };
  if (cookies !== "") {
    const temp = cookies.split(";");
    for (let i = 0; i < temp.length; i++) {
      const data = temp[i].split("=");
      let key = data[0];
      let value = data[1];
      if (key.trim() === "userId") {
        cookie.userId = value;
        return cookie.userId;
      }
    }
  }

  return cookie.userId;
}
