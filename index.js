var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var positionInLine = katzDeliLine.length
  var greeting = `Welcome, ${name}. You are number ${positionInLine} in line.`
  return greeting
}

function nowServing(katzDeliLine) {
  var whoseTurn
  if (katzDeliLine.length > 0) {
    whoseTurn = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  } else {
    whoseTurn = "There is nobody waiting to be served!"
  }
  return whoseTurn
}
