const fs = require('fs')
const path = require('path')
const { BLOCKLIST_MESSAGES_FILENAME } = require('../constants')

let messages = []

function init() {
  const watcher = fs.watch(path.join(__dirname, '..', BLOCKLIST_MESSAGES_FILENAME))

  watcher.on('change', updateMessages)

  updateMessages()
}

function getMessages() {
  return messages
}

function updateMessages() {
  fs.readFile(path.join(__dirname, '..', BLOCKLIST_MESSAGES_FILENAME), (err, data) => {
    if (err) {
      messages = []
    } else {
      try {
        messages = JSON.parse(data.toString())
      } catch {}
    }
  })
}

module.exports = {
  init,
  getMessages,
}
