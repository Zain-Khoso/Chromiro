"use strict";

// DOM Selections.
const elem_form = document.querySelector(".form");

// Functions.
const sendMessage = function (event) {
    event.preventDefault();

    elem_form.reset();
};

// Event Listeners.
elem_form.addEventListener("submit", sendMessage);
