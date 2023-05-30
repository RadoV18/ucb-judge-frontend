import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '../../dto/user.dto';
import { CampusService } from '../../../user/services/campus.service';
import { CampusDto } from 'src/app/user/dto/campus.dto';
import { CampusMajorService } from '../../../user/services/campus-major.service';
import { CampusMajorDto } from 'src/app/user/dto/campus-major.dto';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styles: [
  ]
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  campuses: CampusDto[] = [];
  campusesMajors: CampusMajorDto[] = [];
  selectedCampusMajorId: number = 0;

  @Output() formSubmitted = new EventEmitter<UserDto>();

  constructor(private formBuilder: FormBuilder, private campusService: CampusService, private campusMajorService: CampusMajorService) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.campusService.getCampuses().subscribe({
      next: (data) => {
        // console.log(data);
        this.campuses = data.data!;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.campusMajorService.getMajorsByCampusId(1).subscribe({
      next: (data) => {
        // console.log(data);
        this.campusesMajors = data.data!;
        this.selectedCampusMajorId = this.campusesMajors[0].campusMajorId;
      },
      error: (error) => {
        console.log(error);
      }
    });      
  }

  onCampusChange(event: any) {
    // console.log('event :' + event);
    // console.log(event.value);
    this.campusMajorService.getMajorsByCampusId(event.value.campusId).subscribe({
      next: (data) => {
        this.campusesMajors = data.data!;
        // console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }    

  onMajorChange(event: any) {
    // console.log('event :' + event);
    // console.log(event.value);
    this.selectedCampusMajorId = event.value.campusMajorId;
    console.log(this.selectedCampusMajorId);
  }

  onSubmit() {
    const formData = this.registrationForm.value;
    formData.campusMajorId = this.selectedCampusMajorId;
    console.log(formData);
    this.formSubmitted.emit(formData);
  }
}
