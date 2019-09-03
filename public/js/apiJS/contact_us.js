//Contact Us
const contact_form = document.forms.namedItem("contact_us"); 
//document.querySelector('[data-contact-form]');

const submitContactForm = (event) => {
	event.preventDefault();
	document.querySelectorAll('.con_err_msg')[0].textContent = "";	
	document.querySelectorAll('.con_err_msg')[1].textContent = "";	
	document.querySelectorAll('.con_err_msg')[2].textContent = "";	

	const formData = new FormData(contact_form);
	if (formData.get('name') == "") {
		document.querySelectorAll('.con_err_msg')[0].textContent = "Name field is required!";
	}else if(formData.get('email') == "") {
		document.querySelectorAll('.con_err_msg')[1].textContent = "Email field is required!";	
	}else if(formData.get('message') == ""){
		document.querySelectorAll('.con_err_msg')[2].textContent = "Message field is required!";
	}else {
		let status;
		// const data = {
		// 	name: formData.get('name'),
		// 	email: formData.get('email'),
		// 	message: formData.get('message')
		// }
		const data = new URLSearchParams(formData);
		const errorHandling = (response) => {
			    status = response.status;
			    return response.json()
		}
		const api = `${baseUrl}api/contact_us/create`;
		fetch(api, {
			method: 'POST',
			mode: 'cors',
	        body: data
		})
		.then(response => errorHandling(response))
		.then(data => {
			let title = 'Thank you for contacting us, we will get back to you very soon !.';
			let msg = '';
			let action   = '<i class="fa fa-thumbs-up"></i>Thank You !';
			Swal.fire({
			    title: `<b id="title">${title}</b>`,
			    width: 600,
			    padding: '3em',
			    background: 'none',
			    html: `<p id="error_field"></p>`,
			    backdrop: `
				    rgba(0,0,123,0.4)
				    url("images/cornfuse-logo.png")
				    center 
				    no-repeat
				  `,
				confirmButtonText: `<span id="action">${action}</span>`
			})
			if (status == 422) {
				const title_field =document.querySelector('#title');
				const action_field =document.querySelector('#action');
				const error_field =document.querySelector('#error_field');
				title_field.style.color = 'red';
				action_field.style.color = 'red';
				error_field.style.color = 'red';
				title_field.innerHTML = 'Oops, an error just occured !';
				action_field.innerHTML = '<i class="fa fa-thumbs-down"></i>Try again !';
				data.map((err, i) => {
					msg +=`Error ${i}:${err.msg} <br>`;
					error_field.innerHTML = msg;
				})
			}
			contact_form.reset();
		})
		.catch(err => console.error(err))
		}

}

contact_form.addEventListener('submit', (event) => submitContactForm(event));
