var katzDeli = []

function takeANumber(name, katzDeliLine) {
  katzDeli.push(name)
  var katzDeliLine = katzDeli.length
  var greeting = `Welcome, ${name}. You are number ${katzDeliLine} in line.`
  return greeting
}
