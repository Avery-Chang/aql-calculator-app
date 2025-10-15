// AQL Calculator based on ISO 2859-1 / ANSI Z1.4 standard

// Table A: Sample size code letters
// Maps lot size ranges and inspection levels to code letters
const sampleSizeCodeLetters = {
  general: {
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
  },
  special: {
    S1: [
      { min: 2, max: 8, code: 'A' },
      { min: 9, max: 15, code: 'A' },
      { min: 16, max: 25, code: 'A' },
      { min: 26, max: 50, code: 'A' },
      { min: 51, max: 90, code: 'B' },
      { min: 91, max: 150, code: 'B' },
      { min: 151, max: 280, code: 'B' },
      { min: 281, max: 500, code: 'B' },
      { min: 501, max: 1200, code: 'C' },
      { min: 1201, max: 3200, code: 'C' },
      { min: 3201, max: 10000, code: 'C' },
      { min: 10001, max: 35000, code: 'C' },
      { min: 35001, max: 150000, code: 'D' },
      { min: 150001, max: 500000, code: 'D' },
      { min: 500001, max: Infinity, code: 'D' }
    ],
    S2: [
      { min: 2, max: 8, code: 'A' },
      { min: 9, max: 15, code: 'A' },
      { min: 16, max: 25, code: 'A' },
      { min: 26, max: 50, code: 'B' },
      { min: 51, max: 90, code: 'B' },
      { min: 91, max: 150, code: 'B' },
      { min: 151, max: 280, code: 'C' },
      { min: 281, max: 500, code: 'C' },
      { min: 501, max: 1200, code: 'C' },
      { min: 1201, max: 3200, code: 'D' },
      { min: 3201, max: 10000, code: 'D' },
      { min: 10001, max: 35000, code: 'D' },
      { min: 35001, max: 150000, code: 'E' },
      { min: 150001, max: 500000, code: 'E' },
      { min: 500001, max: Infinity, code: 'E' }
    ],
    S3: [
      { min: 2, max: 8, code: 'A' },
      { min: 9, max: 15, code: 'A' },
      { min: 16, max: 25, code: 'B' },
      { min: 26, max: 50, code: 'B' },
      { min: 51, max: 90, code: 'C' },
      { min: 91, max: 150, code: 'C' },
      { min: 151, max: 280, code: 'D' },
      { min: 281, max: 500, code: 'D' },
      { min: 501, max: 1200, code: 'E' },
      { min: 1201, max: 3200, code: 'E' },
      { min: 3201, max: 10000, code: 'F' },
      { min: 10001, max: 35000, code: 'F' },
      { min: 35001, max: 150000, code: 'G' },
      { min: 150001, max: 500000, code: 'G' },
      { min: 500001, max: Infinity, code: 'H' }
    ],
    S4: [
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
    ]
  }
};

// Table B: Single sampling plans for normal inspection
// Maps code letters and AQL values to sample size, acceptance number, and rejection number
const samplingPlans = {
  'A': { sampleSize: 2, plans: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 0, re: 1 } } },
  'B': { sampleSize: 3, plans: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 0, re: 1 } } },
  'C': { sampleSize: 5, plans: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 0, re: 1 }, '6.5': { ac: 1, re: 2 } } },
  'D': { sampleSize: 8, plans: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': null, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 0, re: 1 }, '4.0': { ac: 1, re: 2 }, '6.5': { ac: 1, re: 2 } } },
  'E': { sampleSize: 13, plans: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': null, '0.65': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 0, re: 1 }, '2.5': { ac: 1, re: 2 }, '4.0': { ac: 1, re: 2 }, '6.5': { ac: 2, re: 3 } } },
  'F': { sampleSize: 20, plans: { '0.065': null, '0.10': null, '0.15': null, '0.25': null, '0.40': { ac: 0, re: 1 }, '0.65': { ac: 0, re: 1 }, '1.0': { ac: 0, re: 1 }, '1.5': { ac: 1, re: 2 }, '2.5': { ac: 1, re: 2 }, '4.0': { ac: 2, re: 3 }, '6.5': { ac: 3, re: 4 } } },
  'G': { sampleSize: 32, plans: { '0.065': null, '0.10': null, '0.15': null, '0.25': { ac: 0, re: 1 }, '0.40': { ac: 0, re: 1 }, '0.65': { ac: 0, re: 1 }, '1.0': { ac: 1, re: 2 }, '1.5': { ac: 1, re: 2 }, '2.5': { ac: 2, re: 3 }, '4.0': { ac: 3, re: 4 }, '6.5': { ac: 5, re: 6 } } },
  'H': { sampleSize: 50, plans: { '0.065': null, '0.10': null, '0.15': { ac: 0, re: 1 }, '0.25': { ac: 0, re: 1 }, '0.40': { ac: 0, re: 1 }, '0.65': { ac: 1, re: 2 }, '1.0': { ac: 1, re: 2 }, '1.5': { ac: 2, re: 3 }, '2.5': { ac: 3, re: 4 }, '4.0': { ac: 5, re: 6 }, '6.5': { ac: 7, re: 8 } } },
  'J': { sampleSize: 80, plans: { '0.065': null, '0.10': { ac: 0, re: 1 }, '0.15': { ac: 0, re: 1 }, '0.25': { ac: 0, re: 1 }, '0.40': { ac: 1, re: 2 }, '0.65': { ac: 1, re: 2 }, '1.0': { ac: 2, re: 3 }, '1.5': { ac: 3, re: 4 }, '2.5': { ac: 5, re: 6 }, '4.0': { ac: 7, re: 8 }, '6.5': { ac: 10, re: 11 } } },
  'K': { sampleSize: 125, plans: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 0, re: 1 }, '0.15': { ac: 0, re: 1 }, '0.25': { ac: 1, re: 2 }, '0.40': { ac: 1, re: 2 }, '0.65': { ac: 2, re: 3 }, '1.0': { ac: 3, re: 4 }, '1.5': { ac: 5, re: 6 }, '2.5': { ac: 7, re: 8 }, '4.0': { ac: 10, re: 11 }, '6.5': { ac: 14, re: 15 } } },
  'L': { sampleSize: 200, plans: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 0, re: 1 }, '0.15': { ac: 1, re: 2 }, '0.25': { ac: 1, re: 2 }, '0.40': { ac: 2, re: 3 }, '0.65': { ac: 3, re: 4 }, '1.0': { ac: 5, re: 6 }, '1.5': { ac: 7, re: 8 }, '2.5': { ac: 10, re: 11 }, '4.0': { ac: 14, re: 15 }, '6.5': { ac: 21, re: 22 } } },
  'M': { sampleSize: 315, plans: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 1, re: 2 }, '0.15': { ac: 1, re: 2 }, '0.25': { ac: 2, re: 3 }, '0.40': { ac: 3, re: 4 }, '0.65': { ac: 5, re: 6 }, '1.0': { ac: 7, re: 8 }, '1.5': { ac: 10, re: 11 }, '2.5': { ac: 14, re: 15 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } } },
  'N': { sampleSize: 500, plans: { '0.065': { ac: 0, re: 1 }, '0.10': { ac: 1, re: 2 }, '0.15': { ac: 2, re: 3 }, '0.25': { ac: 3, re: 4 }, '0.40': { ac: 5, re: 6 }, '0.65': { ac: 7, re: 8 }, '1.0': { ac: 10, re: 11 }, '1.5': { ac: 14, re: 15 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } } },
  'P': { sampleSize: 800, plans: { '0.065': { ac: 1, re: 2 }, '0.10': { ac: 1, re: 2 }, '0.15': { ac: 2, re: 3 }, '0.25': { ac: 3, re: 4 }, '0.40': { ac: 5, re: 6 }, '0.65': { ac: 7, re: 8 }, '1.0': { ac: 10, re: 11 }, '1.5': { ac: 14, re: 15 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } } },
  'Q': { sampleSize: 1250, plans: { '0.065': { ac: 1, re: 2 }, '0.10': { ac: 2, re: 3 }, '0.15': { ac: 3, re: 4 }, '0.25': { ac: 5, re: 6 }, '0.40': { ac: 7, re: 8 }, '0.65': { ac: 10, re: 11 }, '1.0': { ac: 14, re: 15 }, '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } } },
  'R': { sampleSize: 2000, plans: { '0.065': { ac: 2, re: 3 }, '0.10': { ac: 3, re: 4 }, '0.15': { ac: 5, re: 6 }, '0.25': { ac: 7, re: 8 }, '0.40': { ac: 10, re: 11 }, '0.65': { ac: 14, re: 15 }, '1.0': { ac: 21, re: 22 }, '1.5': { ac: 21, re: 22 }, '2.5': { ac: 21, re: 22 }, '4.0': { ac: 21, re: 22 }, '6.5': { ac: 21, re: 22 } } }
};

/**
 * Get the sample size code letter based on lot size and inspection level
 * @param {number} lotSize - The lot or batch size
 * @param {string} inspectionType - 'general' or 'special'
 * @param {string} inspectionLevel - For general: 'I', 'II', 'III'; For special: 'S1', 'S2', 'S3', 'S4'
 * @returns {string|null} - The code letter or null if not found
 */
export function getCodeLetter(lotSize, inspectionType, inspectionLevel) {
  const table = sampleSizeCodeLetters[inspectionType]?.[inspectionLevel];
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
  // Get code letter
  const codeLetter = getCodeLetter(lotSize, inspectionType, inspectionLevel);
  if (!codeLetter) {
    return null;
  }

  // Get sampling plan
  const plan = samplingPlans[codeLetter];
  if (!plan) {
    return null;
  }

  const aqlPlan = plan.plans[aqlValue];
  if (!aqlPlan) {
    return {
      codeLetter,
      sampleSize: plan.sampleSize,
      acceptanceNumber: null,
      rejectionNumber: null,
      error: 'AQL value not available for this sample size'
    };
  }

  return {
    codeLetter,
    sampleSize: plan.sampleSize,
    acceptanceNumber: aqlPlan.ac,
    rejectionNumber: aqlPlan.re
  };
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

