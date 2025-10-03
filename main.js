const canvas = document.querySelector("canvas");
canvas.width = 1280;
canvas.height = 960;
fetch('example.txt')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load file');
      return response.text();
    })
    .then(text => {
      document.getElementById('output').textContent = text;
    })
    .catch(error => {
      document.getElementById('output').textContent = 'Error: ' + error;
    });