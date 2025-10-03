const canvas = document.querySelector("canvas");
canvas.width = 1280;
canvas.height = 960;

 let fileContents = ""; // <- your string variable

    document.getElementById('example').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = function(e) {
        fileContents = e.target.result; // <-- now the file is in a string
        console.log("File contents as string:", fileContents);
        document.getElementById('output').textContent = fileContents;
        
        // Now you can do anything with the string
        // Example: split lines
        // const lines = fileContents.split('\n');
      };

      reader.readAsText(file);
    });