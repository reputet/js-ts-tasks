/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  function inside(obj) {
    const {street, house, apartment, city, postalCode, country} = obj;
    return `${street}, ${house}, ${apartment}, ${city}, ${postalCode}, ${country}`;
  }
  return inside;
};
