/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]');  
};

defangIPaddr('address = "1.1.1.1"');
defangIPaddr('address = "255.100.50.0"');