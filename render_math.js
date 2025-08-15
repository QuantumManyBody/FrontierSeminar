const latexInput = document.getElementById('latexInput');
const latexPreview = document.getElementById('latexPreview');
latexPreview.innerHTML = latexInput.value; 
renderMathInElement(document.body)

latexInput.addEventListener('input', () => {
    latexPreview.innerHTML = latexInput.value; 
renderMathInElement(document.body)
});
