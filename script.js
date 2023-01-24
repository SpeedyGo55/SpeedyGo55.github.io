function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else 
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
    if (pwHashed == "e234dde9c5d8fcbfadc1b2ade875885112f8f542a22fb918ef4805527995adcd") {
        window.open("https://speedygo55.github.io/private");
    } else {
        document.getElementById('Output').innerHTML = "Access Denied";
    }
}