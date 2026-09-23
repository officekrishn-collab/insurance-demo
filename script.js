// ============================================================
// SecureCover Insurance (Demo) — script.js
// This script ONLY validates the form and redirects to
// thank-you.html. It does NOT send or store any data anywhere.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("leadForm");

  if (!form) return; // thank-you.html has no form

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop real submission — this is a demo only

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(function (el) {
      el.textContent = "";
    });

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const insuranceType = document.getElementById("insuranceType");

    // Full Name
    if (!fullName.value.trim()) {
      showError("fullName", "Please enter your full name.");
      isValid = false;
    }

    // Email (basic pattern check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
      showError("email", "Please enter a valid email address.");
      isValid = false;
    }

    // Phone (basic digits check, 7-15 digits)
    const phoneDigits = phone.value.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      showError("phone", "Please enter a valid phone number.");
      isValid = false;
    }

    // Insurance Type
    if (!insuranceType.value) {
      showError("insuranceType", "Please select an insurance type.");
      isValid = false;
    }

    if (!isValid) return;

    // ============================================================
    // DEMO BEHAVIOR ONLY:
    // No data is sent to a server, saved, or stored anywhere.
    // The form is simply cleared and the user is redirected.
    // ============================================================
    form.reset();

    // ============================================================
    // OPTIONAL: If you prefer to fire the Google Ads conversion
    // event immediately on submit (instead of on thank-you.html),
    // you could add that call here before the redirect. By default,
    // this demo fires the conversion on thank-you.html instead,
    // since that only loads after a valid submission.
    // ============================================================

    window.location.href = "thank-you.html";
  });

  function showError(fieldId, message) {
    const errorEl = document.getElementById("err-" + fieldId);
    if (errorEl) errorEl.textContent = message;
  }
});
