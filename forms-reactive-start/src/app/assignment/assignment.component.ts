import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectName = ['test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'projectname': new FormControl(null, [Validators.required, this.forbiddenProject.bind(this)]),
      'projectname': new FormControl(null, Validators.required, this.forbiddenProject),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical')

    })
  }

  // forbiddenProject(control: FormControl): { [s: string]: boolean } {
  //   if (this.forbiddenProjectName.indexOf(control.value) !== -1) {
  //     return { 'nameIsForbidden': true };
  //   }
  //   return null;
  // }

  forbiddenProject(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ 'projectIsForbidden': true });
        }
        else
          resolve(null);
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
