document.addEventListener('DOMContentLoaded', function() {
    const displayText = document.getElementById('displayText');
    const editText = document.getElementById('editText');

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && (event.key === 'e'|| event.key === 'у')) {
            event.preventDefault();
            editText.value = displayText.innerText;
            displayText.style.display = 'none';
            editText.style.display = 'block';
            editText.focus();
        }

        if (event.ctrlKey && (event.key === 's'|| event.key === 'ы')){
            event.preventDefault();
            displayText.innerText = editText.value;
            editText.style.display = 'none';
            displayText.style.display = 'block';
        }
    });
});
