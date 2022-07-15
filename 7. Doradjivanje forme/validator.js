class Validator {
   constructor(config) {
      this.elementsConfig = config;
      this.errors = {};

      this.generateErrorsObject();
      this.inputListener();
   }

   generateErrorsObject() {
      for (let field in this.elementsConfig) {
         this.errors[field] = [];
      }
   }

   inputListener() {
      const inputSelector = this.elementsConfig;

      for (let field in inputSelector) {
         const currentField = document.querySelector(`input[name="${field}"]`);

         currentField.addEventListener("input", this.validate.bind(this));
      }
   }

   validate(e) {
      const elFields = this.elementsConfig;

      const field = e.target;
      const fieldName = field.getAttribute("name");
      const fieldValue = field.value;

      this.errors[fieldName] = [];

      // Checking if required fields are filled
      if (elFields[fieldName].required) {
         if (fieldValue === "")
            this.errors[fieldName].push("This field is required");
      }

      // Checking if entered inputs are of proper length
      if (fieldValue.length < elFields[fieldName].minlength)
         this.errors[fieldName].push(`Field must contain at least ${elFields[fieldName].minlength} characters`);
      else if (fieldValue.length > elFields[fieldName].maxlength)
         this.errors[fieldName].push(`Field can contain only ${elFields[fieldName].maxlength} characters`);

      // Checking if both, first and last name, are entered
      if (elFields[fieldName].fullname) {
         let input = fieldValue.trim();
         input = input.split(" ");

         if (input.length < 2)
            this.errors[fieldName].push("You must enter first AND last name");
      }

      // Checking if entered email address is valid
      if (elFields[fieldName].email) {
         const validEmail = this.emailValidation(fieldValue);

         if (!validEmail)
            this.errors[fieldName].push("Invalid email address");
      }

      // Checking if entered phone number is valid
      if (elFields[fieldName].phone) {
         const validPhone = this.phoneValidation(fieldValue);

         if (!validPhone)
            this.errors[fieldName].push("Invalid phone number");
      }

      // Checking if entered zip code is valid
      if (elFields[fieldName].zip) {
         let validZip = /^\d+$/.test(fieldValue);
         if (!validZip)
            this.errors[fieldName].push("Invalid ZIP code");
      }

      // Checking if passwords are matching
      if (elFields[fieldName].matching) {
         const matchingEl = document.querySelector(`input[name="${elFields[fieldName].matching}"]`);


         if (fieldValue !== matchingEl.value)
            this.errors[fieldName].push("Passwords aren't matching");

         if (this.errors[fieldName].length === 0) {
            this.errors[fieldName] = [];
            this.errors[elFields[fieldName].matching] = [];
         }
      }

      this.populateErrors(this.errors);
   }

   populateErrors(errors) {
      document.querySelectorAll("ul").forEach(error => error.remove());

      Object.keys(errors).forEach(key => {
         const parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
         const errorsElement = document.createElement("ul");
         parentElement.append(errorsElement);

         errors[key].forEach(error => {
            const li = document.createElement("li");
            li.innerText = error;
            errorsElement.append(li);
         })
      })
   }

   emailValidation(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : false;
   }

   phoneValidation(phone) {
      const validPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      return phone.match(validPhone) ? true : false;
   }
}