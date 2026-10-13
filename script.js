(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Fungsi untuk memproses dan mencetak nama
  function processName(name) {
    var firstLetter = name.charAt(0).toLowerCase();
    var outputList = document.getElementById("outputList");

    if (firstLetter === 'j') {
      byeSpeaker.speak(name); // Tetap cetak di Console

      // Tampilkan kartu di UI
      if (outputList) {
        outputList.innerHTML += `
          <div class="card-item card-goodbye">
            <div class="card-icon"><i class="fa-solid fa-hand"></i></div>
            <div>Goodbye ${name}</div>
          </div>`;
      }
    } else {
      helloSpeaker.speak(name); // Tetap cetak di Console

      // Tampilkan kartu di UI
      if (outputList) {
        outputList.innerHTML += `
          <div class="card-item card-hello">
            <div class="card-icon"><i class="fa-solid fa-hand-wave"></i></div>
            <div>Hello ${name}</div>
          </div>`;
      }
    }
  }

  // Jalankan daftar nama awal bawaan tugas
  for (var i = 0; i < names.length; i++) {
    processName(names[i]);
  }

  // Fungsi interaktif untuk menambah nama baru melalui input
  window.addCustomName = function () {
    var input = document.getElementById("nameInput");
    var newName = input.value.trim();

    if (newName !== "") {
      processName(newName);
      input.value = "";
    }
  };

})();