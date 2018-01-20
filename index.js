var katzDeli = []
function takeANumber(katzDeliLine, name) {
  katzDeli.push(name)
  katzDeliLine = katzDeli.length
  var greeting = `Welcome, ${name}. You are number ${katzDeliLine} in line.`
  return greeting
}
