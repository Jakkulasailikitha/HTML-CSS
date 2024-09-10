// for creating the check box in javascript
let inputElement=document.createElement("input");
inputElement.type="checkbox";
inputElement.id="idcheckbox";
document.body.appendChild(inputElement);

// for creating the label and text for ot
let labelElement=document.createElement("label");
labelElement.htmlFor="idcheckbox";
labelElement.textContent="employee";
document.body.appendChild(labelElement);