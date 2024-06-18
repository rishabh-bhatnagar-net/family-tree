export function getColor(n: number) {
  // Define colors
  const colors = [
    '#87CEFA', // LightSkyBlue
    '#FFD700', // Gold
    '#FFA07A', // LightSalmon
    '#FFB6C1', // LightPink
    '#98FB98', // PaleGreen
    '#BA55D3', // MediumOrchid
    // Add more pastel colors as needed
  ];
  return colors[n % colors.length];
}

