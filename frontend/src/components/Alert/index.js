import Swal from 'sweetalert2';
import {
  CONFIRM,
  CANCEL,
  ACCEPTED,
  CANCELED,
} from './../../helpers/translations';
import { ICONS, COLORS } from './alertConfig';
import './alert.scss';

export function InfoAlert(title, message) {
  return Swal.fire(title, message, ICONS.INFO);
}

export function ErrorAlert(title, message) {
  return Swal.fire(title, message, ICONS.ERROR);
}

export function SuccessAlert(title, message) {
  return Swal.fire(title, message, ICONS.SUCCESS);
}

export function ConfirmAlert(title, message) {
  return Swal.fire({
    title: title,
    text: message,
    icon: ICONS.WARNING,
    showDenyButton: true,
    confirmButtonText: "si",
    denyButtonText: "no",
    confirmButtonColor: COLORS.CONFIRM,
    cancelButtonColor: COLORS.ERROR,
  }).then((result) => {
    
    return result;
  });
}