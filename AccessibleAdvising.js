const name = document.querySelector("#Student-name");
const email = document.querySelector("#Student-email");
const field = document.querySelector("#Student-field");
const time = document.querySelector("#Time-schedule");
const date = document.querySelector("#Day-schedule");

function validateRegistration(raw) {
    const name = String(raw.name ?? "").trim();
    const email = String(raw.email ?? "").trim();
    const field = String(raw.field ?? "").trim();
    const date = String(raw.date ?? "").trim();
    const time = String(raw.time ?? "").trim();
    const errors = {}
    const summary = []

    if (name.length < 2) {
        errors.name = "Enter at least two characters.";
    };
    if (!/^\S+@\S+\.\S+$/.test(email)) {
  errors.email = "Enter a valid email address.";
} {
        errors.email = "Enter a valid email address.";
    }

    if (!field) {
        errors.field = "Select an advising field.";
    }

    if (!date) {
        errors.date = "Select an appointment date.";
    }

    if (!time) {
        errors.time = "Select an appointment time.";
    }
     if (date && time) {
        const selectedDate = new Date(`${date}T${time}`);
        if (Number.isNaN(selectedDate.getTime())) {
            errors.time = "Enter a valid date and time.";
        }
    const emailConfirm = /^{}[]/;
    if (!emailConfirm.test(email){errors.email = "Enter a Valid email";}
