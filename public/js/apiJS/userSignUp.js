const signUpForm = document.querySelector('#signUpForm')


const signUpFormFunc = (event) => {
	event.preventDefault();
	document.querySelectorAll('.con_err_msg')[0].textContent = "";	
	document.querySelectorAll('.con_err_msg')[1].textContent = "";	
	document.querySelectorAll('.con_err_msg')[2].textContent = "";	

	const formData = new FormData(signUpForm);
	if (formData.get('username') == "") {
		document.querySelectorAll('.con_err_msg')[0].textContent = "A username is required!";
	}else if(formData.get('email') == "") {
		document.querySelectorAll('.con_err_msg')[1].textContent = "A valid email is required!";	
	}else if(formData.get('password') == ""){
		document.querySelectorAll('.con_err_msg')[2].textContent = "A secured password is required!";
	}else {
		let status;
		const errorHandling = (response) => {
			status = response.status;
			return response.json();
		}

		const data = new URLSearchParams(formData);
		const url = `${baseUrl}api/sign_up`;
		fetch(url, {
		 method: "POST",
		 mode: "cors",
		 body: data
		})
		.then(response => errorHandling(response))
		.then(data => {
		let title = 'Sign up succesful';
			let msg = `please check you email <a style="color: #cc0044; 
									text-decoration:none; background:#e6e6e6;
											 padding-right:5px; padding-left:5px;">
											 		${formData.get('email')}</a> 
											 		to verify your account, thank you!`;
			let action   = '<i class="fa fa-thumbs-up"></i>Thank You !';
			Swal.fire({
			    title: `<b id="title">${title}</b>`,
			    width: 600,
			    padding: '3em',
			    background: 'none',
			    html: `<p id="error_field" style="font-weight:bold;">${msg}</p>`,
			    backdrop: `
				    rgba(0,0,123,0.4)
				    url("images/cornfuse-logo.png")
				    center 
				    no-repeat
				  `,
				confirmButtonText: `<span id="action">${action}</span>`
			})
			const title_field =document.querySelector('#title');
			const action_field =document.querySelector('#action');
			const error_field =document.querySelector('#error_field');
			if (status == 422) {
				title_field.style.color = 'red';
				action_field.style.color = 'white';
				error_field.style.color = 'red';
				title_field.innerHTML = 'Oops, an error just occured !';
				action_field.innerHTML = '<i class="fa fa-thumbs-down"></i>Try again !';
				data.map((err, i) => {
					msg +=`Error ${i}:${err.msg} <br>`;
				})
				error_field.innerHTML = msg;
			} else if (status == 400) {
				title_field.style.color = 'red';
				action_field.style.color = 'white';
				error_field.style.color = 'red';
				title_field.innerHTML = 'Oops, an error just occured !';
				action_field.innerHTML = '<i class="fa fa-thumbs-down"></i>Try again !';
				error_field.innerHTML = data.message;
			}else{
				title_field.style.color = 'lime';
				action_field.style.color = 'white';
				error_field.style.color = 'white';
				signUpForm.reset();
			}
		})
		.catch(error => console.error(error))
	}
}

signUpForm.addEventListener('submit', (event) => signUpFormFunc(event));