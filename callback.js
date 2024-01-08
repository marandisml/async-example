const paymentSuccess = false;
const marks = 80;

function enroll(callback) {
  console.log("Course enrollment is in progress.");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed!");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course on prograss...");
  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not enough marks to get the certificate!");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing your certificate.");

  setTimeout(function () {
    console.log("Congrats! you got the cetificate!");
  }, 4000);
}

enroll(function(){
    progress(getCertificate);
})
