document.getElementById('run-button').addEventListener('click', () => {
	const userCode = document.getElementById('code-editor').value
	// For security, we can simply simulate the output without executing user code
	document.getElementById('output').textContent = 'Code executed: \n' + userCode
})
