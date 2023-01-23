/* eslint-disable*/
export default function createEmployeesObject(departmentName, employess) {
  return { [departmentName]: [...employess] };
}
