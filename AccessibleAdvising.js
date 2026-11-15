const form = document.querySelector("#Question");


function instruction(question) {
    const NeedOne = question.advise.trim()
    if (NeedOne === "yes") { }
};

form.addEventListener("submit", () => {
    const name = document.querySelector("#name").value;
    if (name === ""); { showError("Required") };
});
form.instruction.has("username"); // Returns false
formData.append("username", "Chris");
formData.has("username"); // Returns true