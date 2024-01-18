document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let validateForm = true;

    const name = document.getElementById('name');
    const lastName = document.getElementById('lastName');
    const tipoDocumento = document.querySelector('input[name="documentType"]:checked'); // Corregido
    const numeroDocumento = document.getElementById("documentNumber");
    const address = document.getElementById('address')

    const nameError = document.getElementById('nameError');
    const lastNameError = document.getElementById('lastNameError');
    const documentNumberError = document.getElementById('documentNumberError');
    const addressError = document.getElementById('addressError')

    const validateString = (string) => {
      const regex = new RegExp("^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ][a-zñáéíóúü]+$");
      return regex.test(string);
    }

    const validateDirec = (string) => {
      const regex = /^[A-Za-z ÁáÉéÍíÓóÚúÜüÑñÇçÕõÃãÈèÂâÊêÎîÔôÛûËëÏïÀàÙùÿýÝãõÕçÇÊêÑñÕõªº0-9,.\s\-"'()°\/]{10,200}$/;
      return regex.test(string);
    };

    const validateStgLength = (stg, minLength, maxLength) => {
      if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`;
      } else if (stg.length > maxLength) {
        return `El valor debe tener no más de ${maxLength} caracteres.`;
      } else {
        return true;
      }
    }

    // Validación del nombre
    if (validateString(name.value)) {
      const validStg = validateStgLength(name.value, 2, 10);
      if (validStg === true) {
        name.setAttribute('aria-invalid', 'false');
        nameError.innerText = "";
        nameError.style.display = "none";
      } else {
        name.setAttribute('aria-invalid', 'true');
        nameError.innerText = validStg;
        nameError.style.display = "block";
        nameError.style.marginTop = "0px";
        nameError.style.color = "red";
        nameError.style.marginLeft = "5px";
        validateForm = false;
      }
    } else {
      name.setAttribute('aria-invalid', 'true');
      nameError.innerText = "Debe colocar caracteres alfanuméricos";
      nameError.style.display = "block";
      nameError.style.marginTop = "2px";
      nameError.style.color = "red";
      nameError.style.marginLeft = "5px";
      validateForm = false;
    }

    // Validación de la dirección
    if (validateDirec(address.value)) {
      const validStg = validateStgLength(address.value, 10, 200);
      if (validStg === true) {
        address.setAttribute('aria-invalid', 'false');
        addressError.innerText = "";
        addressError.style.display = "none";
      } else {
        address.setAttribute('aria-invalid', 'true');
        addressError.innerText = validStg;
        addressError.style.display = "block";
        addressError.style.marginTop = "2px";
        addressError.style.marginLeft = "5px";
        addressError.style.color = "red";
        validateForm = false;
      }
    } else {
      address.setAttribute('aria-invalid', 'true');
      addressError.innerText = "Debe colocar caracteres alfanuméricos";
      addressError.style.display = "block";
      addressError.style.marginTop = "2px";
      addressError.style.color = "red";
      addressError.style.marginLeft = "5px";
      validateForm = false;
    }

    // Validación del apellido
    if (validateString(lastName.value)) {
      const validStg = validateStgLength(lastName.value, 2, 20);
      if (validStg === true) {
        lastName.setAttribute('aria-invalid', 'false');
        lastNameError.innerText = "";
        lastNameError.style.display = "none";
      } else {
        lastName.setAttribute('aria-invalid', 'true');
        lastNameError.innerText = validStg;
        lastNameError.style.display = "block";
        lastNameError.style.marginTop = "2px";
        lastNameError.style.marginLeft = "5px";
        lastNameError.style.color = "red";
        validateForm = false;
      }
    } else {
      lastName.setAttribute('aria-invalid', 'true');
      lastNameError.innerText = "Debe colocar caracteres alfanuméricos";
      lastNameError.style.display = "block";
      lastNameError.style.marginTop = "2px";
      lastNameError.style.color = "red";
      lastNameError.style.marginLeft = "5px";
      validateForm = false;
    }

    // Validación del tipo de documento y número de documento
    if (tipoDocumento && tipoDocumento.value === "DNI") {
      if (!/^\d{1,3}(?:\.\d{3})*(?:\d{1,2})?$/.test(numeroDocumento.value)) {
        documentNumberError.innerText = "Formato de DNI invalido";
        documentNumberError.style.display = "block";
        documentNumberError.style.marginTop = "2px";
        documentNumberError.style.color = "red";
        documentNumberError.style.marginLeft = "5px";
        validateForm = false;
      }
    } else if (tipoDocumento && tipoDocumento.value === "CUIL") {
      if (!/^\d{2}-\d{7,9}-\d{1}$/.test(numeroDocumento.value) && !/^\d{11}$/.test(numeroDocumento.value)) {
        documentNumberError.innerText = "Formato de CUIL inválido";
        documentNumberError.style.display = "block";
        documentNumberError.style.marginTop = "2px";
        documentNumberError.style.color = "red";
        documentNumberError.style.marginLeft = "5px";
        validateForm = false;
      }
    }

    // Resto de la lógica de envío del formulario si es necesario

    return validateForm;
  });
});
