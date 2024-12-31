import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emailPatternValidator } from '../../validators/email-validator.directive';
import { Router } from '@angular/router';
import { UserInfoService } from '../../services/user-info.service';
import { ITicketData } from '../../interfaces/ticket-data.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  ticketForm!: FormGroup;
  picture: string | null = null;
  isImageUploaded: boolean = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userInfo: UserInfoService,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    this.ticketForm = this._fb.group({
      photo: this._fb.control('', [Validators.required]),
      name: this._fb.control('', [Validators.required]),
      email: this._fb.control('', [Validators.required, emailPatternValidator]),
      githubUsername: this._fb.control('', [Validators.required]),
    });
  }

  get photo(): FormControl {
    return this.ticketForm.get('photo') as FormControl;
  }

  get name(): FormControl {
    return this.ticketForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.ticketForm.get('email') as FormControl;
  }

  get githubUsername(): FormControl {
    return this.ticketForm.get('githubUsername') as FormControl;
  }

  onFileSelected() {
    if (
      this.fileInput.nativeElement.files &&
      this.fileInput.nativeElement.files[0]
    ) {
      const file = this.fileInput.nativeElement.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.picture = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      this.photo.disable();
      this.isImageUploaded = true;
    }
  }

  changeImage(): void {
    if (this.fileInput) {
      this.photo.enable();
      this.fileInput.nativeElement.click();
      this.fileInput.nativeElement.value = '';
      setTimeout(() => {
        this.isImageUploaded = false;
      }, 500);
    }
  }

  removeImage() {
    this.picture = null;
    this.photo.enable();
    this.isImageUploaded = false;

    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
    this.photo.reset();
  }

  getUserData() {
    this.photo.enable();
    const formData: ITicketData = {
      ...this.ticketForm.value,
      photo: this.picture
    };
    this._userInfo.saveTicketData(formData);
    this._router.navigate(['/ticket'])
  }
  
}
