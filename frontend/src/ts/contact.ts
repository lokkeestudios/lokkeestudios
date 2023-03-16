const form = document.getElementById('contact-form') as HTMLFormElement;

function postFormData(formData: FormData) {
  return fetch('/handle_contact-form.php', {
    method: 'POST',
    body: formData,
  });
}

function handleFormSubmit(event: SubmitEvent) {
  if (form != null) {
    event.preventDefault();

    const formData = new FormData(form);
    postFormData(formData)
      .then(() => {
        form.reset();
        form.classList.toggle('hidden');

        const contactFormSuccess = document.getElementById(
          'contact-form-success',
        );
        if (contactFormSuccess != null)
          contactFormSuccess.classList.toggle('hidden');
      })
      .catch(() => {});
  }
}

if (form != null) form.addEventListener('submit', handleFormSubmit);

export {};
