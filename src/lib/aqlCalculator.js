// AQL Calculator Library (ISO 2859-1 / ANSI Z1.4)

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
// Special inspection levels directly give sample size, not code letters
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
// Maps sample size and AQL values to acceptance number (Ac) and rejection number (Re)
const samplingPlans = {
  2: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 0, re: 1 } },
  3: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 0, re: 1 } },
  5: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 1, re: 2 } },
  8: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 1, re: 2 }, '6.5': { ac: 1, re: 2 } },
  13: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 1, re: 2 }, '4.0': { ac: 1, re: 2 }, '6.5': { ac: 2, re: 3 } },
  20: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': { ac: 0, re: 1 }, '0.65': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 1, re: 2 }, '2.5': { ac: 1, re: 2 }, '4.0': { ac: 2, re: 3 }, '6.5': { ac: 3, re: 4 } },
  32: { '0.065': null, '0.10': null, '0.15': null, '0.25': { ac: 0, re: 1 }, '0.40': { ac: 0, re: 1 }, '0.65': { ac: 0, re: 1 }, '1.0': { ac: 1, re: 2 }, '1.5': { ac: 1, re: 2 }, '2.5': { ac: 2, re: 3 }, '4.0': { ac: 3, re: 4 }, '6.5': { ac: 5, re: 6 } },
  50: { '0.065': null, '0.10': null, '0.15': { ac: 0, re: 1 }, '0.25': { ac: 0, re: 1 }, '0.40': { ac: 0, re: 1 }, '0.65': { ac: 1, re: 2 }, '1.0': { ac: 1, re: 2 }, '1.5': { ac: 2, re: 3 }, '2.5': { ac: 3, re: 4 }, '4.0': { ac: 5, re: 6 }, '6.5': { ac: 7, re: 8 } },
  80: { '0.065': null, '0.10': { ac: 0, re: 1 }, '0.15': { ac: 0, re: 1 }, '0.25': { ac: 0, re: 1 }, '0.40': { ac: 1, re: 2 }, '0.65': { ac: 1, re: 2 }, '1.0': { ac: 2, re: 3 }, '1.5': { ac: 3, re: 4 }, '2.5': { ac: 5, re: 6 }, '4.0': { ac: 7, re: 8 }, '6.5': { ac: 10, re: 11 } },
  125: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 0, re: 1 }, '0.15': { ac: 0, re: 1 }, '0.25': { ac: 1, re: 2 }, '0.40': { ac: 1, re: 2 }, '0.65': { ac: 2, re: 3 }, '1.0': { ac: 3, re: 4 }, '1.5': { ac: 5, re: 6 }, '2.5': { ac: 7, re: 8 }, '4.0': { ac: 10, re: 11 }, '6.5': { ac: 14, re: 15 } },
  200: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 0, re: 1 }, '0.15': { ac: 1, re: 2 }, '0.25': { ac: 1, re: 2 }, '0.40': { ac: 2, re: 3 }, '0.65': { ac: 3, re: 4 }, '1.0': { ac: 5, re: 6 }, '1.5': { ac: 7, re: 8 }, '2.5': { ac: 10, re: 11 }, '4.0': { ac: 14, re: 15 }, '6.5': { ac: 21, re: 22 } },
  315: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 1, re: 2 }, '0.15': { ac: 1, re: 2 }, '0.25': { ac: 2, re: 3 }, '0.40': { ac: 3, re: 4 }, '0.65': { ac: 5, re: 6 }, '1.0': { ac: 7, re: 8 }, '1.5': { ac: 10, re: 11 }, '2.5': { ac: 14, re: 15 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
  500: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 1, re: 2 }, '0.15': { ac: 2, re: 3 }, '0.25': { ac: 3, re: 4 }, '0.40': { ac: 5, re: 6 }, '0.65': { ac: 7, re: 8 }, '1.0': { ac: 10, re: 11 }, '1.5': { ac: 14, re: 15 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
  800: { '0.065': { ac: 1, re: 2 }, '0.10': { ac: 1, re: 2 }, '0.15': { ac: 2, re: 3 }, '0.25': { ac: 3, re: 4 }, '0.40': { ac: 5, re: 6 }, '0.65': { ac: 7, re: 8 }, '1.0': { ac: 10, re: 11 }, '1.5': { ac: 14, re: 15 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
  1250: { '0.065': { ac: 1, re: 2 }, '0.10': { ac: 2, re: 3 }, '0.15': { ac: 3, re: 4 }, '0.25': { ac: 5, re: 6 }, '0.40': { ac: 7, re: 8 }, '0.65': { ac: 10, re: 11 }, '1.0': { ac: 14, re: 15 }, '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } },
  2000: { '0.065': { ac: 2, re: 3 }, '0.10': { ac: 3, re: 4 }, '0.15': { ac: 5, re: 6 }, '0.25': { ac: 7, re: 8 }, '0.40': { ac: 10, re: 11 }, '0.65': { ac: 14, re: 15 }, '1.0': { ac: 21, re: 22 }, '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } }
};

/**
 * Get the sample size for special inspection levels
 * @param {number} lotSize - The lot or batch size
 * @param {string} inspectionLevel - 'S1', 'S2', 'S3', or 'S4'
 * @returns {number|null} - The sample size or null if not found
 */
function getSpecialInspectionSampleSize(lotSize, inspectionLevel) {
  const table = specialInspectionSampleSizes[inspectionLevel];
  if (!table) return null;

  const range = table.find(r => lotSize >= r.min && lotSize <= r.max);
  return range ? range.sampleSize : null;
}

/**
 * Get the sample size code letter for general inspection levels
 * @param {number} lotSize - The lot or batch size
 * @param {string} inspectionLevel - 'I', 'II', or 'III'
 * @returns {string|null} - The code letter or null if not found
 */
function getGeneralInspectionCodeLetter(lotSize, inspectionLevel) {
  const table = generalInspectionCodeLetters[inspectionLevel];
  if (!table) return null;

  const range = table.find(r => lotSize >= r.min && lotSize <= r.max);
  return range ? range.code : null;
}

/**
 * Calculate AQL sampling plan
 * @param {number} lotSize - The lot or batch size
 * @param {string} inspectionType - 'general' or 'special'
 * @param {string} inspectionLevel - For general: 'I', 'II', 'III'; For special: 'S1', 'S2', 'S3', 'S4'
 * @param {string} aqlValue - The AQL value (e.g., '0.065', '0.10', '2.5', '4.0', '6.5')
 * @returns {object|null} - Object with sampleSize, acceptanceNumber, rejectionNumber, codeLetter or null if not found
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
    
    // Map code letter to sample size
    const codeToSampleSize = {
      'A': 2, 'B': 3, 'C': 5, 'D': 8, 'E': 13, 'F': 20, 'G': 32, 'H': 50,
      'J': 80, 'K': 125, 'L': 200, 'M': 315, 'N': 500, 'P': 800, 'Q': 1250, 'R': 2000
    };
    sampleSize = codeToSampleSize[codeLetter];
  }

  // Get sampling plan based on sample size and AQL value
  const plan = samplingPlans[sampleSize];
  if (!plan) {
    return null;
  }

  let aqlPlan = plan[aqlValue];
  
  // If AQL plan is null (arrow up in table), find the first available plan above
  if (!aqlPlan) {
    const aqlValues = ['0.065', '0.10', '0.15', '0.25', '0.40', '0.65', '1.0', '1.5', '2.5', '4.0', '6.5'];
    const currentIndex = aqlValues.indexOf(aqlValue);
    
    // Search upward (higher AQL values) for the first available plan
    for (let i = currentIndex + 1; i < aqlValues.length; i++) {
      const upperPlan = plan[aqlValues[i]];
      if (upperPlan) {
        aqlPlan = upperPlan;
        break;
      }
    }
    
    // If still not found, return error
    if (!aqlPlan) {
      return {
        codeLetter,
        sampleSize,
        acceptanceNumber: null,
        rejectionNumber: null,
        error: 'AQL value not available for this sample size'
      };
    }
  }

  return {
    codeLetter,
    sampleSize,
    acceptanceNumber: aqlPlan.ac,
    rejectionNumber: aqlPlan.re
  };
}

/**
 * Get the sample size code letter based on lot size and inspection level
 * @param {number} lotSize - The lot or batch size
 * @param {string} inspectionType - 'general' or 'special'
 * @param {string} inspectionLevel - For general: 'I', 'II', 'III'; For special: 'S1', 'S2', 'S3', 'S4'
 * @returns {string|null} - The code letter or null if not found (only for general inspection)
 */
export function getCodeLetter(lotSize, inspectionType, inspectionLevel) {
  if (inspectionType === 'special') {
    // Special inspection doesn't use code letters
    return null;
  }
  return getGeneralInspectionCodeLetter(lotSize, inspectionLevel);
}

/**
 * Format number with thousand separators
 * @param {number} num - The number to format
 * @returns {string} - Formatted number string
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Get all available AQL values
 * @returns {array} - Array of AQL value strings
 */
export function getAQLValues() {
  return ['0.065', '0.10', '0.15', '0.25', '0.40', '0.65', '1.0', '1.5', '2.5', '4.0', '6.5'];
}

// Export the tables for use in AQLTables component
export const sampleSizeCodeLetters = {
  general: generalInspectionCodeLetters,
  special: specialInspectionSampleSizes
};

export { samplingPlans };

