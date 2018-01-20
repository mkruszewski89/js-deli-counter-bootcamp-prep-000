var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var positionInLine = katzDeliLine.length
  var greeting = `Welcome, ${name}. You are number ${positionInLine} in line.`
  return greeting
}
