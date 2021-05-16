// document.querySelector('#character-counter').innerHTML = 0;
// const textarea = document.querySelector('#message');
// textarea.addEventListener('input', characterCounter);

// function characterCounter() {
//   document.querySelector('#character-counter').innerHTML = textarea.value.length;
// }

// function validateEmail(email) {
//   const regex =
//     /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
//   return regex.test(email);
// }

// function sendForm() {
//   const inputs = document.querySelectorAll('input, textarea');
//   const errorMessages = [];

//   inputs.forEach((input) => {
//     console.log(input.id, input.value);
//     if (input.id === 'mail') {
//       const isValidEmail = validateEmail(input.value);
//       if (input.value) {
//         if (!isValidEmail) {
//           errorMessages.push({ id: input.id, message: 'El correo no es válido' });
//         }
//       } else {
//         errorMessages.push({ id: input.id, message: 'Faltó ingresar un correo' });
//       }
//     } else if (input.id === 'message') {
//       if (input.value.length > 200) {
//         errorMessages.push({ id: input.id, message: 'El mensaje es demasiado largo' });
//       }
//     } else {
//       if (input.value.length > 30) {
//         errorMessages.push({ id: input.id, message: 'El texto es demasiado largo' });
//       }
//     }
//   });

//   console.log(errorMessages);
// }

function toggleButtonMenu() {
  const menu = document.getElementById('menu');
  if (menu.classList.length === 1) {
    menu.classList.add('navbar__menu-container--hidden');
  } else {
    menu.classList.remove('navbar__menu-container--hidden');
  }
}
