//SERVICE_ID_USER   = "service_yyc267l";  
//SERVICE_ID_OWNER  = "service_tz682kd";
//TEMPLATE_USER     = "template_4y5aais";
//TEMPLATE_OWNER    = "template_vqqsl5c";

console.log("Is this working")

document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ contact.js loaded");

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const loading = form.querySelector(".loading");
    const errorMessage = form.querySelector(".error-message");
    const sentMessage = form.querySelector(".sent-message");

    loading.style.display = "block";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";

    // collect form data
    const formData = {
      name: form.querySelector("[name='name']").value,
      email: form.querySelector("[name='email']").value,
      subject: form.querySelector("[name='subject']").value,
      message: form.querySelector("[name='message']").value,
    };

    // 🚀 Send confirmation to user
    emailjs.send("service_yyc267l", "template_4y5aais", formData)
      .then(() => {
        console.log("✅ Confirmation email sent to user");

        // 🚀 Send notification to owner
        return emailjs.send("service_tz682kd", "template_vqqsl5c", formData);
      })
      .then(() => {
        console.log("✅ Notification email sent to owner");

        loading.style.display = "none";
        sentMessage.style.display = "block";
        form.reset();
      })
      .catch((error) => {
        console.error("❌ EmailJS error:", error);
        loading.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.innerText = "Something went wrong. Please try again.";
      });
  });
});


console.log("Is this working 2")




//+++++++++++++++++++++++Old Code++++++++++++++++++++++++++++++++++++++++++++
// document.getElementById("contactForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const form = this;
//   const loading = form.querySelector(".loading");
//   const errorMsg = form.querySelector(".error-message");
//   const successMsg = form.querySelector(".sent-message");

//   loading.style.display = "block";
//   errorMsg.style.display = "none";
//   successMsg.style.display = "none";

//   const params = {
//     from_name: document.getElementById("name").value,
//     from_email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.querySelector("textarea[name='message']").value
//   };

//   emailjs.send("service_yyc267l", "template_4y5aais", params)
//     .then(function(response) {
//       loading.style.display = "none";
//       successMsg.style.display = "block";
//       form.reset();
//     }, function(error) {
//       loading.style.display = "none";
//       errorMsg.style.display = "block";
//       errorMsg.textContent = "Failed to send message. Please try again.";
//       console.error("EmailJS error:", error);
//     });
// });
