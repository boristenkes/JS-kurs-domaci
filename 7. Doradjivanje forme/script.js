const config = {
   "full_name": {
      required: true,
      minlength: 5,
      maxlength: 30,
      fullname: true
   },
   "username": {
      required: true,
      minlength: 5,
      maxlength: 30,
   },
   "email": {
      required: true,
      email: true
   },
   "phone_number": {
      required: true,
      phone: true
   },
   "zip": {
      required: true,
      minlength: 5,
      maxlength: 5,
      zip: true,
   },
   "password": {
      required: true,
      minlength: 5,
      maxlength: 50,
      matching: "repeat_password"
   },
   "repeat_password": {
      required: true,
      minlength: 5,
      maxlength: 50,
      matching: "password"
   }
}

const validator = new Validator(config);
