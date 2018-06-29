


function intFormatLength(i, len) {
  var ints = i.toString(); //convert to string
    if (ints.length<len)
      { ints = "0"+ ints; }
    else { ints = ints;}
  return ints;
}
