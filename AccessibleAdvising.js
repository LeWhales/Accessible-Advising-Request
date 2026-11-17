const name = document.querySelector("#studentname");
const email = document.querySelector("#studentemail");
const field = document.querySelector("studentfield");

function name(question) {
    const NeedOne = question.advise.trim()
    if (NeedOne === "") { "Please type in the box" }
};
function validateRegistration(raw) {
    const name = raw.name.trim();
    const errors = {};
    if (name.length < 2) errors.name = "Enter at least two characters.";
};
