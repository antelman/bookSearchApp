import { AppService } from '../../core/services/app-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private appService: AppService) {
    this.createForm();
  }
  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.fb.group({
      bookAppUser: ['', Validators.required],
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.appService.userName = this.loginForm.value.bookAppUser;
    this.router.navigate(['search-page']);
  }
}
