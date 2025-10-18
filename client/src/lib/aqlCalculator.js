// AQL Calculator Library (ISO 2859-1 / ANSI Z1.4)
// Complete implementation with arrow symbols in Table B

// Table A: Sample size code letters for GENERAL inspection
const generalInspectionCodeLetters = {
  I: [
    { min: 2, max: 8, code: 'A' },
    { min: 9, max: 15, code: 'A' },
    { min: 16, max: 25, code: 'B' },
    { min: 26, max: 50, code: 'C' },
    { min: 51, max: 90, code: 'C' },
    { min: 91, max: 150, code: 'D' },
    { min: 151, max: 280, code: 'E' },
    { min: 281, max: 500, code: 'F' },
    { min: 501, max: 1200, code: 'G' },
    { min: 1201, max: 3200, code: 'H' },
    { min: 3201, max: 10000, code: 'J' },
    { min: 10001, max: 35000, code: 'K' },
    { min: 35001, max: 150000, code: 'L' },
    { min: 150001, max: 500000, code: 'M' },
    { min: 500001, max: Infinity, code: 'N' }
  ],
  II: [
    { min: 2, max: 8, code: 'A' },
    { min: 9, max: 15, code: 'B' },
    { min: 16, max: 25, code: 'C' },
    { min: 26, max: 50, code: 'D' },
    { min: 51, max: 90, code: 'E' },
    { min: 91, max: 150, code: 'F' },
    { min: 151, max: 280, code: 'G' },
    { min: 281, max: 500, code: 'H' },
    { min: 501, max: 1200, code: 'J' },
    { min: 1201, max: 3200, code: 'K' },
    { min: 3201, max: 10000, code: 'L' },
    { min: 10001, max: 35000, code: 'M' },
    { min: 35001, max: 150000, code: 'N' },
    { min: 150001, max: 500000, code: 'P' },
    { min: 500001, max: Infinity, code: 'Q' }
  ],
  III: [
    { min: 2, max: 8, code: 'B' },
    { min: 9, max: 15, code: 'C' },
    { min: 16, max: 25, code: 'D' },
    { min: 26, max: 50, code: 'E' },
    { min: 51, max: 90, code: 'F' },
    { min: 91, max: 150, code: 'G' },
    { min: 151, max: 280, code: 'H' },
    { min: 281, max: 500, code: 'J' },
    { min: 501, max: 1200, code: 'K' },
    { min: 1201, max: 3200, code: 'L' },
    { min: 3201, max: 10000, code: 'M' },
    { min: 10001, max: 35000, code: 'N' },
    { min: 35001, max: 150000, code: 'P' },
    { min: 150001, max: 500000, code: 'Q' },
    { min: 500001, max: Infinity, code: 'R' }
  ]
};

// Table A: Direct sample sizes for SPECIAL inspection levels
const specialInspectionSampleSizes = {
  S1: [
    { min: 2, max: 8, sampleSize: 2 },
    { min: 9, max: 15, sampleSize: 2 },
    { min: 16, max: 25, sampleSize: 2 },
    { min: 26, max: 50, sampleSize: 2 },
    { min: 51, max: 90, sampleSize: 3 },
    { min: 91, max: 150, sampleSize: 3 },
    { min: 151, max: 280, sampleSize: 3 },
    { min: 281, max: 500, sampleSize: 3 },
    { min: 501, max: 1200, sampleSize: 5 },
    { min: 1201, max: 3200, sampleSize: 5 },
    { min: 3201, max: 10000, sampleSize: 5 },
    { min: 10001, max: 35000, sampleSize: 5 },
    { min: 35001, max: 150000, sampleSize: 8 },
    { min: 150001, max: 500000, sampleSize: 8 },
    { min: 500001, max: Infinity, sampleSize: 8 }
  ],
  S2: [
    { min: 2, max: 8, sampleSize: 2 },
    { min: 9, max: 15, sampleSize: 2 },
    { min: 16, max: 25, sampleSize: 2 },
    { min: 26, max: 50, sampleSize: 3 },
    { min: 51, max: 90, sampleSize: 3 },
    { min: 91, max: 150, sampleSize: 3 },
    { min: 151, max: 280, sampleSize: 5 },
    { min: 281, max: 500, sampleSize: 5 },
    { min: 501, max: 1200, sampleSize: 5 },
    { min: 1201, max: 3200, sampleSize: 8 },
    { min: 3201, max: 10000, sampleSize: 8 },
    { min: 10001, max: 35000, sampleSize: 8 },
    { min: 35001, max: 150000, sampleSize: 13 },
    { min: 150001, max: 500000, sampleSize: 13 },
    { min: 500001, max: Infinity, sampleSize: 13 }
  ],
  S3: [
    { min: 2, max: 8, sampleSize: 2 },
    { min: 9, max: 15, sampleSize: 2 },
    { min: 16, max: 25, sampleSize: 3 },
    { min: 26, max: 50, sampleSize: 3 },
    { min: 51, max: 90, sampleSize: 5 },
    { min: 91, max: 150, sampleSize: 5 },
    { min: 151, max: 280, sampleSize: 8 },
    { min: 281, max: 500, sampleSize: 8 },
    { min: 501, max: 1200, sampleSize: 13 },
    { min: 1201, max: 3200, sampleSize: 13 },
    { min: 3201, max: 10000, sampleSize: 20 },
    { min: 10001, max: 35000, sampleSize: 20 },
    { min: 35001, max: 150000, sampleSize: 32 },
    { min: 150001, max: 500000, sampleSize: 32 },
    { min: 500001, max: Infinity, sampleSize: 32 }
  ],
  S4: [
    { min: 2, max: 8, sampleSize: 2 },
    { min: 9, max: 15, sampleSize: 2 },
    { min: 16, max: 25, sampleSize: 3 },
    { min: 26, max: 50, sampleSize: 5 },
    { min: 51, max: 90, sampleSize: 5 },
    { min: 91, max: 150, sampleSize: 8 },
    { min: 151, max: 280, sampleSize: 13 },
    { min: 281, max: 500, sampleSize: 13 },
    { min: 501, max: 1200, sampleSize: 20 },
    { min: 1201, max: 3200, sampleSize: 32 },
    { min: 3201, max: 10000, sampleSize: 32 },
    { min: 10001, max: 35000, sampleSize: 50 },
    { min: 35001, max: 150000, sampleSize: 80 },
    { min: 150001, max: 500000, sampleSize: 80 },
    { min: 500001, max: Infinity, sampleSize: 80 }
  ]
};

// Table B: Single sampling plans for normal inspection
// Using '↑' for arrow up and '↓' for arrow down
// Format: { ac: number, re: number } or '↑' or '↓'
const samplingPlans = {
2: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': '↓', '2.5': '↓', '4.0': '↓', '6.5': { ac: 0, re: 1 }, '10': '↓', '15': '↓' },
  3: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': '↓', '2.5': '↓', '4.0': { ac: 0, re: 1 }, '6.5': '↑', '10': '↓', '15': { ac: 1, re: 2 } },
  5: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': '↓', '2.5': { ac: 0, re: 1 }, '4.0': '↑', '6.5': '↓', '10': { ac: 1, re: 2 }, '15': { ac: 2, re: 3 } },
  8: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': { ac: 0, re: 1 }, '2.5': '↑', '4.0': '↓', '6.5': { ac: 1, re: 2 }, '10': { ac: 2, re: 3 }, '15': { ac: 3, re: 4 } },
  13: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': { ac: 0, re: 1 }, '1.5': '↑', '2.5': '↓', '4.0': { ac: 1, re: 2 }, '6.5': { ac: 2, re: 3 }, '10': { ac: 3, re: 4 }, '15': { ac: 5, re: 6 } },
  20: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': { ac: 0, re: 1 }, '1.0': '↑', '1.5': '↓', '2.5': { ac: 1, re: 2 }, '4.0': { ac: 2, re: 3 }, '6.5': { ac: 3, re: 4 }, '10': { ac: 5, re: 6 }, '15': { ac: 7, re: 8 } },
  32: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': { ac: 0, re: 1 }, '0.65': '↑', '1.0': '↓', '1.5': { ac: 1, re: 2 }, '2.5': { ac: 2, re: 3 }, '4.0': { ac: 3, re: 4 }, '6.5': { ac: 5, re: 6 }, '10': { ac: 7, re: 8 }, '15': { ac: 10, re: 11 } },
  50: { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': { ac: 0, re: 1 }, '0.40': '↑', '0.65': '↓', '1.0': { ac: 1, re: 2 }, '1.5': { ac: 2, re: 3 }, '2.5': { ac: 3, re: 4 }, '4.0': { ac: 5, re: 6 }, '6.5': { ac: 7, re: 8 }, '10': { ac: 10, re: 11 }, '15': { ac: 14, re: 15 } },
  80: { '0.065': '↓', '0.10': '↓', '0.15': { ac: 0, re: 1 }, '0.25': '↑', '0.40': '↓', '0.65': { ac: 1, re: 2 }, '1.0': { ac: 2, re: 3 }, '1.5': { ac: 3, re: 4 }, '2.5': { ac: 5, re: 6 }, '4.0': { ac: 7, re: 8 }, '6.5': { ac: 10, re: 11 }, '10': { ac: 14, re: 15 }, '15': { ac: 21, re: 22 } },
  125: { '0.065': '↓', '0.10': { ac: 0, re: 1 }, '0.15': '↑', '0.25': '↓', '0.40': { ac: 1, re: 2 }, '0.65': { ac: 2, re: 3 }, '1.0': { ac: 3, re: 4 }, '1.5': { ac: 5, re: 6 }, '2.5': { ac: 7, re: 8 }, '4.0': { ac: 10, re: 11 }, '6.5': { ac: 14, re: 15 }, '10': { ac: 21, re: 22 }, '15': '↑' },
  200: { '0.065': { ac: 0, re: 1 }, '0.10': '↑', '0.15': '↓', '0.25': { ac: 1, re: 2 }, '0.40': { ac: 2, re: 3 }, '0.65': { ac: 3, re: 4 }, '1.0': { ac: 5, re: 6 }, '1.5': { ac: 7, re: 8 }, '2.5': { ac: 10, re: 11 }, '4.0': { ac: 14, re: 15 }, '6.5': { ac: 21, re: 22 }, '10': '↑', '15': '↑' },
  315: { '0.065': '↑', '0.10': '↓', '0.15': { ac: 1, re: 2 }, '0.25': { ac: 2, re: 3 }, '0.40': { ac: 3, re: 4 }, '0.65': { ac: 5, re: 6 }, '1.0': { ac: 7, re: 8 }, '1.5': { ac: 10, re: 11 }, '2.5': { ac: 14, re: 15 }, '4.0': { ac: 21, re: 22 }, '6.5': '↑', '10': '↑', '15': '↑' },
  500: { '0.065': '↓', '0.10': { ac: 1, re: 2 }, '0.15': { ac: 2, re: 3 }, '0.25': { ac: 3, re: 4 }, '0.40': { ac: 5, re: 6 }, '0.65': { ac: 7, re: 8 }, '1.0': { ac: 10, re: 11 }, '1.5': { ac: 14, re: 15 }, '2.5': { ac: 21, re: 22 }, '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' },
  800: { '0.065': { ac: 1, re: 2 }, '0.10': { ac: 2, re: 3 }, '0.15': { ac: 3, re: 4 }, '0.25': { ac: 5, re: 6 }, '0.40': { ac: 7, re: 8 }, '0.65': { ac: 10, re: 11 }, '1.0': { ac: 14, re: 15 }, '1.5': { ac: 21, re: 22 }, '2.5': '↑', '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' },
  1250: { '0.065': { ac: 2, re: 3 }, '0.10': { ac: 3, re: 4 }, '0.15': { ac: 5, re: 6 }, '0.25': { ac: 7, re: 8 }, '0.40': { ac: 10, re: 11 }, '0.65': { ac: 14, re: 15 }, '1.0': { ac: 21, re: 22 }, '1.5': '↑', '2.5': '↑', '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' },
  2000: { '0.065': { ac: 3, re: 4 }, '0.10': { ac: 5, re: 6 }, '0.15': { ac: 7, re: 8 }, '0.25': { ac: 10, re: 11 }, '0.40': { ac: 14, re: 15 }, '0.65': { ac: 21, re: 22 }, '1.0': '↑', '1.5': '↑', '2.5': '↑', '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' }
};;;;

// Map code letter to sample size
const codeToSampleSize = {
  'A': 2, 'B': 3, 'C': 5, 'D': 8, 'E': 13, 'F': 20, 'G': 32, 'H': 50,
  'J': 80, 'K': 125, 'L': 200, 'M': 315, 'N': 500, 'P': 800, 'Q': 1250, 'R': 2000
};

// All sample sizes in order
const sampleSizesInOrder = [2, 3, 5, 8, 13, 20, 32, 50, 80, 125, 200, 315, 500, 800, 1250, 2000];

// All AQL values in order
const aqlValuesInOrder = ['0.065', '0.10', '0.15', '0.25', '0.40', '0.65', '1.0', '1.5', '2.5', '4.0', '6.5', '10', '15'];

/**
 * Get the sample size for special inspection levels
 */
function getSpecialInspectionSampleSize(lotSize, inspectionLevel) {
  const table = specialInspectionSampleSizes[inspectionLevel];
  if (!table) return null;

  const range = table.find(r => lotSize >= r.min && lotSize <= r.max);
  return range ? range.sampleSize : null;
}

/**
 * Get the sample size code letter for general inspection levels
 */
function getGeneralInspectionCodeLetter(lotSize, inspectionLevel) {
  const table = generalInspectionCodeLetters[inspectionLevel];
  if (!table) return null;

  const range = table.find(r => lotSize >= r.min && lotSize <= r.max);
  return range ? range.code : null;
}

/**
 * Find the actual sampling plan by following arrows
 */
function findSamplingPlan(sampleSize, aqlValue, lotSize) {
  const plan = samplingPlans[sampleSize];
  if (!plan) return null;

  let currentPlan = plan[aqlValue];
  let currentSampleSize = sampleSize;
  let currentAqlValue = aqlValue;

  // Follow arrows until we find a concrete plan
  let maxIterations = 50; // Prevent infinite loops
  let iterations = 0;

  while (iterations < maxIterations) {
    if (typeof currentPlan === 'object' && currentPlan !== null && 'ac' in currentPlan) {
      // Found a concrete plan
      // Check if 100% inspection is required
      if (currentSampleSize >= lotSize) {
        return {
          sampleSize: lotSize,
          acceptanceNumber: currentPlan.ac,
          rejectionNumber: currentPlan.re,
          is100PercentInspection: true
        };
      }
      return {
        sampleSize: currentSampleSize,
        acceptanceNumber: currentPlan.ac,
        rejectionNumber: currentPlan.re,
        is100PercentInspection: false
      };
    }

    if (currentPlan === '↑') {
      // Arrow up: use first sampling plan above (smaller sample size) in the same AQL column
      const currentSizeIndex = sampleSizesInOrder.indexOf(currentSampleSize);
      let found = false;
      for (let i = currentSizeIndex - 1; i >= 0; i--) {
        const prevSampleSize = sampleSizesInOrder[i];
        const prevPlan = samplingPlans[prevSampleSize][currentAqlValue];
        if (typeof prevPlan === 'object' && prevPlan !== null && 'ac' in prevPlan) {
          currentPlan = prevPlan;
          currentSampleSize = prevSampleSize;
          found = true;
          break;
        } else if (prevPlan === '↑') {
          // Continue searching upward
          continue;
        } else if (prevPlan === '↓') {
          // Follow arrow down from this position
          currentSampleSize = prevSampleSize;
          currentPlan = prevPlan;
          found = true;
          break;
        }
      }
      if (!found) return null;
    } else if (currentPlan === '↓') {
      // Arrow down: use first sampling plan below (larger sample size)
      const currentSizeIndex = sampleSizesInOrder.indexOf(currentSampleSize);
      let found = false;
      for (let i = currentSizeIndex + 1; i < sampleSizesInOrder.length; i++) {
        const nextSampleSize = sampleSizesInOrder[i];
        const nextPlan = samplingPlans[nextSampleSize][currentAqlValue];
        if (typeof nextPlan === 'object' && nextPlan !== null && 'ac' in nextPlan) {
          currentPlan = nextPlan;
          currentSampleSize = nextSampleSize;
          found = true;
          break;
        } else if (nextPlan === '↓') {
          // Continue searching downward
          continue;
        } else if (nextPlan === '↑') {
          // Follow arrow up from this position
          currentSampleSize = nextSampleSize;
          currentPlan = nextPlan;
          found = true;
          break;
        }
      }
      if (!found) {
        // If we can't go down further, do 100% inspection
        return {
          sampleSize: lotSize,
          acceptanceNumber: 0,
          rejectionNumber: 1,
          is100PercentInspection: true
        };
      }
    } else {
      // Unknown plan type
      return null;
    }

    iterations++;
  }

  return null;
}

/**
 * Calculate AQL sampling plan
 */
export function calculateAQL(lotSize, inspectionType, inspectionLevel, aqlValue) {
  let sampleSize;
  let codeLetter = null;

  if (inspectionType === 'special') {
    // For special inspection, get sample size directly
    sampleSize = getSpecialInspectionSampleSize(lotSize, inspectionLevel);
    if (!sampleSize) {
      return null;
    }
  } else {
    // For general inspection, get code letter first, then sample size
    codeLetter = getGeneralInspectionCodeLetter(lotSize, inspectionLevel);
    if (!codeLetter) {
      return null;
    }
    
    sampleSize = codeToSampleSize[codeLetter];
  }

  // Find the sampling plan by following arrows
  const result = findSamplingPlan(sampleSize, aqlValue, lotSize);
  
  if (!result) {
    return {
      codeLetter,
      sampleSize,
      acceptanceNumber: null,
      rejectionNumber: null,
      error: 'Unable to find sampling plan'
    };
  }

  return {
    codeLetter,
    ...result
  };
}

/**
 * Get the sample size code letter based on lot size and inspection level
 */
export function getCodeLetter(lotSize, inspectionType, inspectionLevel) {
  if (inspectionType === 'special') {
    return null;
  }
  return getGeneralInspectionCodeLetter(lotSize, inspectionLevel);
}

/**
 * Format number with thousand separators
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Get all available AQL values
 */
export function getAQLValues() {
  return aqlValuesInOrder;
}

// Export the tables for use in AQLTables component
export const sampleSizeCodeLetters = {
  general: generalInspectionCodeLetters,
  special: specialInspectionSampleSizes
};

export { samplingPlans };

