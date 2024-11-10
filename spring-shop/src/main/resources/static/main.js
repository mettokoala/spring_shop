addEventListener("DOMContentLoaded", () => {
	fetch('/product')
		.then(response => {
			if(!response.ok){
				return response.json()
				.then(errorBody => {
					throw new Error(errorBody.detail);
				});
			}
			return response.json();
		})
		.then(body => {
			const prodcutList = document.getElementById('product-list');
			body.forEach(product => {
				const row = document.createElement('tr')
				row.innerHTML = `
					<td>${product.name}</td>
					<td>${product.price}</td>
					<td><button>追加</button></td>
				`;
				prodcutList.appendChild(row);
			})
		})
		.catch(error => {
			window.location.href = '/error.html';
			console.log(error);
			
		})
		
	fetch('/cart')
			.then(response => {
				if(!response.ok){
					return response.json()
					.then(errorBody => {
						throw new Error(errorBody.detail);
					});
				}
				return response.json();
			})
			.then(body => {
				const prodcutList = document.getElementById('cart-list');
				body.forEach(cart => {
					const row = document.createElement('tr')
					row.innerHTML = `
						<td>${cart.product.name}</td>
						<td>${cart.quantity}</td>
						<td>${cart.product.price}</td>
					`;
					prodcutList.appendChild(row);
				})
			})
			.catch(error => {
				window.location.href = '/error.html';
				console.log(error);
				
			})
});
