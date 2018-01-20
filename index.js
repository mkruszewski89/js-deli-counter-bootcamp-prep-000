var katzDeli = []
var katzDeliLine = katzDeli.length

function takeANumber(katzDeliLine, name) {
  katzDeli.push(name)
  var greeting = `Welcome, ${name}. You are number ${katzDeliLine} in line.`
  return greeting
}
