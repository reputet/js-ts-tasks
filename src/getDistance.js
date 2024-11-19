/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const vectorSubtraction = {};
  vectorSubtraction.X = firstPoint.X - secondPoint.X;
  vectorSubtraction.Y = firstPoint.Y - secondPoint.Y;
  vectorSubtraction.distance = Math.sqrt(vectorSubtraction.X ** 2 + vectorSubtraction.Y ** 2);

  return vectorSubtraction.distance.toFixed(2);
};
