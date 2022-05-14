const inputTextArea = document.querySelector('#inputText')
const paperText = document.querySelector('#paperText')

inputTextArea.addEventListener('keyup', function (e) {
  const textWritten = inputTextArea.value
  const invertedText = invertText(textWrited) || '...'
  
  changePaperText(invertedText, paperText)
})

function invertText(text) {
  return text.split("").reverse().join("")
}

function changePaperText(text, target) {
  target.innerHTML = text
}