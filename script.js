function highlightWhiteKey(keyname) {
  // add highlight class
  document.getElementById(keyname).classList.remove("white-key");
  document.getElementById(keyname).classList.add("highlighted-key");
}

function highlightBlackKey(keyname) {
  // add hightlight class
  document.getElementById(keyname).classList.remove("black-key");
  document.getElementById(keyname).classList.add("highlighted-key");
}

function removeHighlightWhiteKey(keyname) {
  // remove higlight class
  document.getElementById(keyname).classList.remove("highlighted-key");
  document.getElementById(keyname).classList.add("white-key");
}

function removeHighlightBlackKey(keyname) {
  //remove highlight class
  document.getElementById(keyname).classList.remove("highlighted-key");
  document.getElementById(keyname).classList.add("black-key");
}

function keyPressHandler(item) {
  if (item.dataset.keystate === "down") {
    playNote(item); // play note if key is idle
  } else {
    item.dataset.keystate = "down"; // return if keyState is still "up"
    return;
  }
}

function playNote(item) {
  let note = new Audio(document.getElementById(item.dataset.key).currentSrc); // create a new audio element
  note.volume = 1; // set volume to max
  note.load(); // re-load the audio
  note.play(); // play audio
  item.dataset.keystate = "up"; // mouseup eventlistener can invoke
  var releaseNote = setInterval(function() {
    // release note when keyup
    if (item.dataset.releasenote === "now") {
      // gradually lower volume to zero
      setTimeout(() => {
        note.volume = 0.8;
      }, 0);
      setTimeout(() => {
        note.volume = 0.6;
      }, 50);
      setTimeout(() => {
        note.volume = 0.4;
      }, 100);
      setTimeout(() => {
        note.volume = 0.1;
      }, 150);
      setTimeout(() => {
        note.volume = 0.05;
      }, 250);
      setTimeout(() => {
        note.volume = 0;
        item.dataset.releasenote = "wait";
        clearInterval(releaseNote);
      }, 400);
    }
  }, 500);
}

function keyReleaseHandler(item) {
  if (item.dataset.keystate === "up") {
    // when keyup
    item.dataset.releasenote = "now"; // gradually lower volume to zero
    item.dataset.keystate = "down"; // same key can be pressed while last audio element is still releasing
  }
}

// eventlistener when key is clicked
[...document.querySelectorAll(".piano-key")].forEach(function(item) {
  item.addEventListener("mousedown", function() {
    keyPressHandler(item); // invoke when user clicks on key
  });
});

// eventlistener when mouseup
[...document.querySelectorAll(".piano-key")].forEach(function(item) {
  item.addEventListener("mouseup", function() {
    keyReleaseHandler(item);
  });
});

// eventlistener when pressing any of these keys --> AWSEDFTGYHUJ
document.addEventListener("keydown", function(event) {
  if (event.repeat) {
    // disable repeats when holding keydown
    return;
  }
  // play note and hightlight piano key based on keycode
  if (event.keyCode === 65 || event.which === 65) {
    keyPressHandler(document.getElementById("C3-key"));
    highlightWhiteKey("C3-key");
  } else if (event.keyCode === 87 || event.which === 87) {
    keyPressHandler(document.getElementById("C3Sharp-key"));
    highlightBlackKey("C3Sharp-key");
  } else if (event.keyCode === 83 || event.which === 83) {
    keyPressHandler(document.getElementById("D3-key"));
    highlightWhiteKey("D3-key");
  } else if (event.keyCode === 69 || event.which === 69) {
    keyPressHandler(document.getElementById("D3Sharp-key"));
    highlightBlackKey("D3Sharp-key");
  } else if (event.keyCode === 68 || event.which === 68) {
    keyPressHandler(document.getElementById("E3-key"));
    highlightWhiteKey("E3-key");
  } else if (event.keyCode === 70 || event.which === 70) {
    keyPressHandler(document.getElementById("F3-key"));
    highlightWhiteKey("F3-key");
  } else if (event.keyCode === 84 || event.which === 84) {
    keyPressHandler(document.getElementById("F3Sharp-key"));
    highlightBlackKey("F3Sharp-key");
  } else if (event.keyCode === 71 || event.which === 71) {
    keyPressHandler(document.getElementById("G3-key"));
    highlightWhiteKey("G3-key");
  } else if (event.keyCode === 89 || event.which === 89) {
    keyPressHandler(document.getElementById("G3Sharp-key"));
    highlightBlackKey("G3Sharp-key");
  } else if (event.keyCode === 72 || event.which === 72) {
    keyPressHandler(document.getElementById("A3-key"));
    highlightWhiteKey("A3-key");
  } else if (event.keyCode === 85 || event.which === 85) {
    keyPressHandler(document.getElementById("A3Sharp-key"));
    highlightBlackKey("A3Sharp-key");
  } else if (event.keyCode === 74 || event.which === 74) {
    keyPressHandler(document.getElementById("B3-key"));
    highlightWhiteKey("B3-key");
  }
});

// eventlistener when keyup for any of these keys --> AWSEDFTGYHUJ
document.addEventListener("keyup", function(event) {
  if (event.repeat) {
    // disable repeats when holding keydown
    return;
  }
  // release note and remove piano key highlight based on keycode
  if (event.keyCode === 65 || event.which === 65) {
    keyReleaseHandler(document.getElementById("C3-key"));
    removeHighlightWhiteKey("C3-key");
  } else if (event.keyCode === 87 || event.which === 87) {
    keyReleaseHandler(document.getElementById("C3Sharp-key"));
    removeHighlightBlackKey("C3Sharp-key");
  } else if (event.keyCode === 83 || event.which === 83) {
    keyReleaseHandler(document.getElementById("D3-key"));
    removeHighlightWhiteKey("D3-key");
  } else if (event.keyCode === 69 || event.which === 69) {
    keyReleaseHandler(document.getElementById("D3Sharp-key"));
    removeHighlightBlackKey("D3Sharp-key");
  } else if (event.keyCode === 68 || event.which === 68) {
    keyReleaseHandler(document.getElementById("E3-key"));
    removeHighlightWhiteKey("E3-key");
  } else if (event.keyCode === 70 || event.which === 70) {
    keyReleaseHandler(document.getElementById("F3-key"));
    removeHighlightWhiteKey("F3-key");
  } else if (event.keyCode === 84 || event.which === 84) {
    keyReleaseHandler(document.getElementById("F3Sharp-key"));
    removeHighlightBlackKey("F3Sharp-key");
  } else if (event.keyCode === 71 || event.which === 71) {
    keyReleaseHandler(document.getElementById("G3-key"));
    removeHighlightWhiteKey("G3-key");
  } else if (event.keyCode === 89 || event.which === 89) {
    keyReleaseHandler(document.getElementById("G3Sharp-key"));
    removeHighlightBlackKey("G3Sharp-key");
  } else if (event.keyCode === 72 || event.which === 72) {
    keyReleaseHandler(document.getElementById("A3-key"));
    removeHighlightWhiteKey("A3-key");
  } else if (event.keyCode === 85 || event.which === 85) {
    keyReleaseHandler(document.getElementById("A3Sharp-key"));
    removeHighlightBlackKey("A3Sharp-key");
  } else if (event.keyCode === 74 || event.which === 74) {
    keyReleaseHandler(document.getElementById("B3-key"));
    removeHighlightWhiteKey("B3-key");
  }
});
