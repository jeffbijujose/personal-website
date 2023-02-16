import accessToken from './postmail-access-token';

// update this with your js_form selector
const formIdJs = 'form-contact';

const dataJs = {
  access_token: accessToken,
};

// function jsOnSuccess() {
//   // remove this to avoid redirect
//   window.location = `${window.location.pathname}?message=Email+Successfully+Sent%21&isError=0`;
// }

// function jsOnError(error) {
//   // remove this to avoid redirect
//   window.location = `${window.location.pathname}?message=Email+could+not+be+sent.&isError=1`;
// }

const sendButton = document.getElementById('contact-form-submit-button');

function toParams(dataJsParam) {
  const formData = [];
  const dataJsParamKeys = Object.keys(dataJsParam);
  for (let i = 0, n = dataJsParamKeys.length; i < n; i += 1) {
    formData.push(`${encodeURIComponent(dataJsParamKeys[i])}=${encodeURIComponent(dataJsParam[dataJsParamKeys[i]])}`);
  }

  return formData.join('&');
}

function jsSend() {
  sendButton.value = 'Sending…';
  sendButton.disabled = true;
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // jsOnSuccess();
      sendButton.value = 'Message sent successfully!';
    } else
    if (request.readyState === 4) {
      // jsOnError(request.response);
      sendButton.value = 'Message cannot be sent!';
      // To check if postmail limit has reached
      // console.warn(request.response);
    }
  };

  const name = document.querySelector(`#${formIdJs} [name='name']`).value;
  const email = document.querySelector(`#${formIdJs} [name='email']`).value;
  const subject = document.querySelector(`#${formIdJs} [name='subject']`).value;
  const message = document.querySelector(`#${formIdJs} [name='message']`).value;
  const formattedMessage = `Name: ${name}\nEmail: ${email}\n\n\n\n${message}`;
  dataJs.subject = subject;
  dataJs.text = formattedMessage;
  const params = toParams(dataJs);

  request.open('POST', 'https://postmail.invotes.com/send', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  request.send(params);

  return false;
}

const jsForm = document.getElementById(formIdJs);

jsForm.addEventListener('submit', (e) => {
  if (jsForm.checkValidity()) {
    e.preventDefault();
    jsSend();
  }
});
