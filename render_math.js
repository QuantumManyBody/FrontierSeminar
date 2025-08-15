const latexInput = document.getElementById('latexInput');
const latexPreview = document.getElementById('latexPreview');
const characterCount = document.getElementById('characterCount');

latexPreview.innerHTML = latexInput.value; 
renderMathInElement(document.body)
characterCount.textContent = `count: ${latexInput.value.length}/1000`

latexInput.addEventListener('input', () => {
    latexPreview.innerHTML = latexInput.value; 
    renderMathInElement(document.body)
    characterCount.textContent = `count: ${latexInput.value.length}/1000`; 
});
