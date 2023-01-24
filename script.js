function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}
async function validatePassword(input) {
    pwHashed = await hash(input);
    if (pwHashed == "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4") {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    } else {
        document.getElementById('Output').innerHTML = "Access Denied";
    }
}