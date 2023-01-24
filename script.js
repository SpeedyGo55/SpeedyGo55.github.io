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
    if (pwHashed == "fe456f5c907b1247608b19b180ed74c8a2ecca2248adc3a7986365268a230d06") {
        window.open("https://speedygo55.github.io/private");
    } else {
        document.getElementById('Output').innerHTML = "Access Denied";
    }
}