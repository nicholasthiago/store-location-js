// ------------------------------------- //
// --- Munddi App - Header Component --- //

const appHeader = `
	<div class='app-header-core'>

		<img src='assets/munddi-logo-blue.png' />

		<span class='app-header-menu'>
			<a href='https://munddi.com/home/'> Home            </a>
			<a href='https://munddi.com/home/'> Para Marcas     </a>
			<a href='https://munddi.com/home/'> Para Lojas      </a>
			<a href='https://munddi.com/home/'> Entrar          </a>
			<a href='https://munddi.com/home/'> Começe Agora    </a>
		</span>

	</div>
`;

document.querySelector('section.app-header').innerHTML = appHeader;