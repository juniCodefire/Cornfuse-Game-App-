const signInForm = document.querySelector('#signInForm')


const signInFormFunc = (event) => {
	event.preventDefault();
	document.querySelectorAll('.sign_err_msg')[0].textContent = "";	
	document.querySelectorAll('.sign_err_msg')[1].textContent = "";	

	const formData = new FormData(signInForm);
	if (formData.get('username') == "") {
		document.querySelectorAll('.sign_err_msg')[0].textContent = "Username is required!";
	}else if(formData.get('password') == ""){
		document.querySelectorAll('.sign_err_msg')[1].textContent = "Password is required!";
	}else {
		let status;
		const errorHandling = (response) => {
			status = response.status;
			return response.json();
		}

		const data = new URLSearchParams(formData);
		const url = `${baseUrl}api/sign_in`;
		fetch(url, {
		 method: "POST",
		 mode: "cors",
		 body: data
		})
		.then(response => errorHandling(response))
		.then(data => {
		    const flashAlert = (path) => {
				Swal.fire({
				    title: `<b id="title"></b>`,
				    width: 600,
				    padding: '3em',
				    background: 'none',
				    html: `<p id="error_field" style="font-weight:bold;"></p>`,
				    backdrop: `
					    rgba(0,0,123,0.4)
					    url("images/cornfuse-logo.png")
					    center 
					    no-repeat
					  `,
					confirmButtonText: `<span id="action"></span>`
				})
				const title_field =document.querySelector('#title');
				const action_field =document.querySelector('#action');
				const error_field =document.querySelector('#error_field');
				title_field.style.color = 'red';
				action_field.style.color = 'white';
				error_field.style.color = 'red';
				title_field.innerHTML = 'Oops, an error just occured !';
				action_field.innerHTML = '<i class="fa fa-thumbs-down"></i>Try again !';
				if (path == 0) {
					console.log(data)
					data.map((err, i) => {
					error_field.innerHTML +=`Error ${i}:${err.msg} <br>`;
					})
				}else if(path == 1) {
					error_field.innerHTML = data.message;
				}
		    }
			if (status == 422) {
				flashAlert(path = 0);	
			} else if (status == 404 || status == 401) {
				flashAlert(path = 1);
			}else{
				console.log(data)
				localStorage.setItem('cornfuse_gamer_data', JSON.stringify(data));
				// location.replace(`${window.location.origin}/showcase.html`)
			}
		})
		.catch(error => console.error(error))
	}
}

signInForm.addEventListener('submit', (event) => signInFormFunc(event));