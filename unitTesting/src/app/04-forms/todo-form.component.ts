import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class TodoFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    //We need to test:
    // 1. 1 Form group and 2 forms controls called 'name' and 'email'
    // 2. Name control is required
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
}
