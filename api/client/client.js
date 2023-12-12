const baseURL = 'http://localhost:3000/api/categorias'



const categoriasContainer = document.getElementById('categorias')

let categoriasState = []    

main()

async function main() {
	// Request al backend
	const res = await fetch(baseURL)
	const categorias = await res.json()

	categoriasState = [...categorias]



    //render()
}

function render() {
	categoriasContainer.innerHTML = ''

	categoriasState.forEach(({ title, tags, _id }) => {
		categoriasContainer.innerHTML += `
		<li class="list-group-item">
							<div class="d-flex">
								<div class="flex-grow-1">
									${title}
									${tags
										.map(
											(tag) =>
												`<span class="mx-1 badge rounded-pill text-bg-dark">${tag.name}</span>`
										)
										.join('')}
									
									
								</div>
	
								<div>
									<button class="btn btn-primary edit-btn" data-id="${_id}" >Editar</button>
									<button class="btn btn-danger delete-btn" data-id="${_id}" >Borrar</button>
								</div>
							</div>
						</li>
		`
	})
}