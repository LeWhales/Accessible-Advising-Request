const name = document.querySelector("#Student-name");
const email = document.querySelector("#Student-email");
const field = document.querySelector("Student-field");
const time = document.querySelector("Time-schedule");

function validateRegistration(raw) {
    const name = raw.name.trim();
    const result = {
        valid: false,
        errors,
        summary: []

    }
    if (name < 2) result.name = "Enter at least two characters.";

function validateRegistration(raw) {
    const name = raw.name.trim();
    const errors = {};
    if (name.length < 2) errors.name = "Enter at least two characters.";
};
