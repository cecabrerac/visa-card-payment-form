import { AbstractControl, ValidationErrors } from '@angular/forms';

// To validate date

export function isnotdate(control: AbstractControl): ValidationErrors | null {
  const vcontrol = control.value;
  if (vcontrol === '') return null;
  if (vcontrol.length === 5) {
    let actualDate = new Date();
    let month = actualDate.getMonth() + 1; // start january 0 we need to add + 1
    let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2022 -> 22
    let dateNumber = vcontrol.match(/\d{2,4}/g);
    let monthNumber = Number(dateNumber[0]);
    let yearNumber = Number(dateNumber[1]);

    if (
      // vcontrol === '' ||
      monthNumber < 2 ||
      monthNumber > 12 ||
      yearNumber < year ||
      (monthNumber <= month && yearNumber === year)
    ) {
      return { isnotdate: true };
    } else {
      return null;
    }
  }
}
