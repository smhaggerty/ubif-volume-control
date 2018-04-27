chrome.storage.sync.get(data => {
  try {
    document.getElementById("audio-alert").volume = data.volume
    console.log(data.volume)
  } catch (error) {
    console.error(error.message)
  }
});
