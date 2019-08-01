import {Howl, Howler} from 'howler';

function onChange(event) {
    // Read the file from the input
    if (event.files.length > 0) {
      var file = event.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function() {
        var data = reader.result;
        // Create a Howler sound
        var sound = new Howl({
          volume: 0.8,
          src: data,
          format: file.name.split('.').pop().toLowerCase() // always give file extension: this is optional but helps
        });
      });
      reader.readAsDataURL(file);
  }


	$("#play").on("click", function(){
		sound.play();
    })
};