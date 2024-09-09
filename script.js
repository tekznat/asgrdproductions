document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    const fileName = this.files[0]?.name || "No file selected";
    alert(`Selected file: ${fileName}`);
});
