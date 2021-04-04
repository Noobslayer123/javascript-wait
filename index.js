// roblox lua waiting function
function wait(dur) {
  var t = Date.now() + (dur*1000)
  var n = Date.now()
  do {
    n = Date.now()
  } while (n < t)
}
