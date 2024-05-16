import "./scss/style.scss";

const header = document.createElement("h1");
header.textContent = "New App";
const main = document.querySelector("#root");
main!.append(header)