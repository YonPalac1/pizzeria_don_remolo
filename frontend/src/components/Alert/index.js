import Swal from 'sweetalert2';
import {
    CONFIRM,
    CANCEL,
    ACCEPTED,
    CANCELED,
} from './../../helpers/translations';
import { ICONS, COLORS } from './alertConfig';

export function InfoAlert(title, message) {
    return Swal.fire(title, message, ICONS.INFO);
}

export function ErrorAlert(title, message) {
    return Swal.fire(title, message, ICONS.ERROR);
}

export function SuccessAlert(title, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    return Toast.fire({
        icon: 'success',
        title: message
    });
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