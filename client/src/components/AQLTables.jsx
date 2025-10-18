import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { getTranslation } from '@/i18n/translations.js'

// Table A Component - Sample Size Code Letters
export function TableA({ lotSize, inspectionType, inspectionLevel, language = "zh-TW" }) {
  const t = (key) => getTranslation(language, key);
  // Define lot size ranges
  const lotRanges = [
    { min: 2, max: 8, label: '2 to 8' },
    { min: 9, max: 15, label: '9 to 15' },
    { min: 16, max: 25, label: '16 to 25' },
    { min: 26, max: 50, label: '26 to 50' },
    { min: 51, max: 90, label: '51 to 90' },
    { min: 91, max: 150, label: '91 to 150' },
    { min: 151, max: 280, label: '151 to 280' },
    { min: 281, max: 500, label: '281 to 500' },
    { min: 501, max: 1200, label: '501 to 1,200' },
    { min: 1201, max: 3200, label: '1,201 to 3,200' },
    { min: 3201, max: 10000, label: '3,201 to 10,000' },
    { min: 10001, max: 35000, label: '10,001 to 35,000' },
    { min: 35001, max: 150000, label: '35,001 to 150,000' },
    { min: 150001, max: 500000, label: '150,001 to 500,000' },
    { min: 500001, max: Infinity, label: '500,001 and over' }
  ]

  // Code letters for each combination
  const generalCodeLetters = {
    'I': ['A', 'A', 'B', 'C', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N'],
    'II': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q'],
    'III': ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R']
  }

  const specialCodeLetters = {
    'S1': ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'D', 'D', 'D'],
    'S2': ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'E', 'E', 'E'],
    'S3': ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H'],
    'S4': ['A', 'A', 'B', 'C', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N']
  }

  const codeLetters = inspectionType === 'general' ? generalCodeLetters : specialCodeLetters
  const levels = inspectionType === 'general' ? ['I', 'II', 'III'] : ['S1', 'S2', 'S3', 'S4']

  // Find current row index
  const currentRowIndex = lotRanges.findIndex(r => lotSize >= r.min && lotSize <= r.max)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t("tableATitle")}</CardTitle>
        <CardDescription>
          {t("tableADesc")}
          <span className="block mt-1 text-xs">
            {t("tableASource")}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs md:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-2 text-left font-semibold bg-gray-50 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">{t("lotSize")}</th>
                {levels.map(level => (
                  <th 
                    key={level} 
                    className={`p-2 text-center font-semibold ${
                      level === inspectionLevel ? 'bg-blue-100' : 'bg-gray-50'
                    }`}
                  >
                    {level}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lotRanges.map((range, idx) => {
                const isCurrentRow = idx === currentRowIndex
                return (
                  <tr 
                    key={idx} 
                    className={`border-b ${
                      isCurrentRow ? 'bg-yellow-50 font-semibold' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className={`p-2 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] ${
                      isCurrentRow ? 'bg-yellow-50' : 'bg-white'
                    }`}>
                      {range.label}
                      {isCurrentRow && (
                        <Badge variant="outline" className="ml-2 text-xs">{t("current")}</Badge>
                      )}
                    </td>
                    {levels.map((level, levelIdx) => {
                      const codeLetter = codeLetters[level][idx]
                      const isCurrentCell = isCurrentRow && level === inspectionLevel
                      return (
                        <td 
                          key={level} 
                          className={`p-2 text-center font-mono ${
                            isCurrentCell ? 'bg-blue-200 font-bold text-blue-900' : ''
                          }`}
                        >
                          {codeLetter}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Table B Component - Single Sampling Plans
export function TableB({ codeLetter, aqlValues, language = 'zh-TW' }) {
  const t = (key) => getTranslation(language, key);
  // Sample sizes for each code letter
  const sampleSizes = {
    'A': 2, 'B': 3, 'C': 5, 'D': 8, 'E': 13, 'F': 20, 'G': 32, 'H': 50,
    'J': 80, 'K': 125, 'L': 200, 'M': 315, 'N': 500, 'P': 800, 'Q': 1250, 'R': 2000
  }

  // All code letters in order
  const allCodeLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R']

  // All AQL values
  const allAQLValues = ['0.065', '0.10', '0.15', '0.25', '0.40', '0.65', '1.0', '1.5', '2.5', '4.0', '6.5', '10', '15']

  // Sampling plans data with arrow symbols (↑ and ↓) - from Excel
  const samplingPlans = {
    'A': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': '↓', '2.5': '↓', '4.0': '↓', '6.5': '0/1', '10': '↓', '15': '↓' },
    'B': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': '↓', '2.5': '↓', '4.0': '0/1', '6.5': '↑', '10': '↓', '15': '1/2' },
    'C': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': '↓', '2.5': '0/1', '4.0': '↑', '6.5': '↓', '10': '1/2', '15': '2/3' },
    'D': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '↓', '1.5': '0/1', '2.5': '↑', '4.0': '↓', '6.5': '1/2', '10': '2/3', '15': '3/4' },
    'E': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '↓', '1.0': '0/1', '1.5': '↑', '2.5': '↓', '4.0': '1/2', '6.5': '2/3', '10': '3/4', '15': '5/6' },
    'F': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '↓', '0.65': '0/1', '1.0': '↑', '1.5': '↓', '2.5': '1/2', '4.0': '2/3', '6.5': '3/4', '10': '5/6', '15': '7/8' },
    'G': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '↓', '0.40': '0/1', '0.65': '↑', '1.0': '↓', '1.5': '1/2', '2.5': '2/3', '4.0': '3/4', '6.5': '5/6', '10': '7/8', '15': '10/11' },
    'H': { '0.065': '↓', '0.10': '↓', '0.15': '↓', '0.25': '0/1', '0.40': '↑', '0.65': '↓', '1.0': '1/2', '1.5': '2/3', '2.5': '3/4', '4.0': '5/6', '6.5': '7/8', '10': '10/11', '15': '14/15' },
    'J': { '0.065': '↓', '0.10': '↓', '0.15': '0/1', '0.25': '↑', '0.40': '↓', '0.65': '1/2', '1.0': '2/3', '1.5': '3/4', '2.5': '5/6', '4.0': '7/8', '6.5': '10/11', '10': '14/15', '15': '21/22' },
    'K': { '0.065': '↓', '0.10': '0/1', '0.15': '↑', '0.25': '↓', '0.40': '1/2', '0.65': '2/3', '1.0': '3/4', '1.5': '5/6', '2.5': '7/8', '4.0': '10/11', '6.5': '14/15', '10': '21/22', '15': '↑' },
    'L': { '0.065': '0/1', '0.10': '↑', '0.15': '↓', '0.25': '1/2', '0.40': '2/3', '0.65': '3/4', '1.0': '5/6', '1.5': '7/8', '2.5': '10/11', '4.0': '14/15', '6.5': '21/22', '10': '↑', '15': '↑' },
    'M': { '0.065': '↑', '0.10': '↓', '0.15': '1/2', '0.25': '2/3', '0.40': '3/4', '0.65': '5/6', '1.0': '7/8', '1.5': '10/11', '2.5': '14/15', '4.0': '21/22', '6.5': '↑', '10': '↑', '15': '↑' },
    'N': { '0.065': '↓', '0.10': '1/2', '0.15': '2/3', '0.25': '3/4', '0.40': '5/6', '0.65': '7/8', '1.0': '10/11', '1.5': '14/15', '2.5': '21/22', '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' },
    'P': { '0.065': '1/2', '0.10': '2/3', '0.15': '3/4', '0.25': '5/6', '0.40': '7/8', '0.65': '10/11', '1.0': '14/15', '1.5': '21/22', '2.5': '↑', '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' },
    'Q': { '0.065': '2/3', '0.10': '3/4', '0.15': '5/6', '0.25': '7/8', '0.40': '10/11', '0.65': '14/15', '1.0': '21/22', '1.5': '↑', '2.5': '↑', '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' },
    'R': { '0.065': '3/4', '0.10': '5/6', '0.15': '7/8', '0.25': '10/11', '0.40': '14/15', '0.65': '21/22', '1.0': '↑', '1.5': '↑', '2.5': '↑', '4.0': '↑', '6.5': '↑', '10': '↑', '15': '↑' }
  }
  
  // Function to find the final cell when following arrows
  const findFinalCell = (startCode, startAql) => {
    let currentCode = startCode
    let currentAql = startAql
    const visited = new Set()
    const path = [{ code: currentCode, aql: currentAql }]
    
    while (true) {
      const key = `${currentCode}-${currentAql}`
      if (visited.has(key)) break // Prevent infinite loops
      visited.add(key)
      
      const plan = samplingPlans[currentCode]?.[currentAql]
      if (!plan || (plan !== '↑' && plan !== '↓')) {
        // Found final cell with actual values
        return path
      }
      
      // Follow the arrow
      if (plan === '↑') {
        // Move up to find previous code letter with non-arrow value
        const currentIdx = allCodeLetters.indexOf(currentCode)
        for (let i = currentIdx - 1; i >= 0; i--) {
          const testCode = allCodeLetters[i]
          const testPlan = samplingPlans[testCode]?.[currentAql]
          if (testPlan && testPlan !== '↑' && testPlan !== '↓') {
            currentCode = testCode
            path.push({ code: currentCode, aql: currentAql })
            break
          }
        }
      } else if (plan === '↓') {
        // Move down to find next code letter with non-arrow value
        const currentIdx = allCodeLetters.indexOf(currentCode)
        for (let i = currentIdx + 1; i < allCodeLetters.length; i++) {
          const testCode = allCodeLetters[i]
          const testPlan = samplingPlans[testCode]?.[currentAql]
          if (testPlan && testPlan !== '↑' && testPlan !== '↓') {
            currentCode = testCode
            path.push({ code: currentCode, aql: currentAql })
            break
          }
        }
      }
      
      // Safety check
      if (path.length > 20) break
    }
    
    return path
  }
  
  // Build highlight map for all selected AQL values
  const highlightMap = new Map()
  const sampleSizeHighlight = new Set() // Track which code letters need sample size highlight
  
  if (codeLetter && aqlValues) {
    aqlValues.forEach(aql => {
      const path = findFinalCell(codeLetter, aql)
      if (path.length > 1) {
        // If path has multiple cells, highlight both arrow and final
        path.forEach((cell, idx) => {
          const key = `${cell.code}-${cell.aql}`
          if (idx === 0) {
            // First cell (arrow cell) - orange highlight
            highlightMap.set(key, 'arrow')
          } else if (idx === path.length - 1) {
            // Last cell (final value) - green highlight
            highlightMap.set(key, 'final')
            // Also mark the sample size for this code letter
            sampleSizeHighlight.add(cell.code)
          }
        })
      } else if (path.length === 1) {
        // If path has only one cell and it's an arrow, mark it as arrow
        const cell = path[0]
        const key = `${cell.code}-${cell.aql}`
        const plan = samplingPlans[cell.code]?.[cell.aql]
        if (plan === '↑' || plan === '↓') {
          highlightMap.set(key, 'arrow')
        }
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t("tableBTitle")}</CardTitle>
        <CardDescription>
          {t("tableBDesc")}
          <span className="block mt-1 text-xs">
            {t("tableASource")}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full text-[10px] md:text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-2 text-left font-semibold bg-gray-50 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">代碼</th>
                <th className="p-2 text-center font-semibold bg-gray-50">樣本量</th>
                {allAQLValues.map(aql => {
                  const isHighlighted = aqlValues && aqlValues.includes(aql)
                  return (
                    <th 
                      key={aql} 
                      className={`p-2 text-center font-semibold ${
                        isHighlighted ? 'bg-blue-100' : 'bg-gray-50'
                      }`}
                    >
                      {aql}
                    </th>
                  )
                })}
              </tr>
              <tr className="border-b border-gray-200 text-xs text-gray-600">
                <th className="p-1 bg-gray-50 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">字母</th>
                <th className="p-1 bg-gray-50">n</th>
                {allAQLValues.map(aql => {
                  const isHighlighted = aqlValues && aqlValues.includes(aql)
                  return (
                    <th 
                      key={aql} 
                      className={`p-1 ${isHighlighted ? 'bg-blue-50' : 'bg-gray-50'}`}
                    >
                      Ac/Re
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {allCodeLetters.map(code => {
                const isCurrentRow = code === codeLetter
                return (
                  <tr 
                    key={code} 
                    className={`border-b ${
                      isCurrentRow ? 'bg-yellow-50 font-semibold' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className={`p-2 font-mono font-bold sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] ${
                      isCurrentRow ? 'bg-yellow-100' : 'bg-white'
                    }`}>
                      {code}
                      {isCurrentRow && (
                        <Badge variant="outline" className="ml-1 text-xs">當前</Badge>
                      )}
                    </td>
                    <td className={`p-2 text-center font-semibold ${
                      sampleSizeHighlight.has(code) ? 'bg-purple-200 text-purple-900' : ''
                    }`}>
                      {sampleSizes[code]}
                    </td>
                    {allAQLValues.map(aql => {
                      const plan = samplingPlans[code][aql]
                      const cellKey = `${code}-${aql}`
                      const highlightType = highlightMap.get(cellKey)
                      const isHighlighted = aqlValues && aqlValues.includes(aql)
                      const isCurrentCell = isCurrentRow && isHighlighted
                      
                      // Determine cell styling based on highlight type
                      let cellClass = 'p-2 text-center font-mono '
                      if (highlightType === 'arrow') {
                        // Arrow cell - orange highlight
                        cellClass += 'bg-orange-200 font-bold text-orange-900'
                      } else if (highlightType === 'final') {
                        // Final value cell - green highlight
                        cellClass += 'bg-green-200 font-bold text-green-900'
                      } else if (isCurrentCell) {
                        // Current cell without arrow - blue highlight
                        cellClass += 'bg-blue-200 font-bold text-blue-900'
                      } else if (plan === '↑' || plan === '↓') {
                        // Arrow cells not in path - gray
                        cellClass += 'bg-gray-100 text-gray-600 text-lg'
                      }
                      
                      return (
                        <td key={aql} className={cellClass}>
                          {plan}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-600 space-y-1">
          <p><strong>{t("notes")}:</strong></p>
          <p>• <strong>n</strong> = {t("sampleSizeNote")}</p>
          <p>• <strong>Ac</strong> = {t("acceptanceNumberNote")}</p>
          <p>• <strong>Re</strong> = {t("rejectionNumberNote")}</p>
          <p>• <strong>↑</strong> = {t("arrowUpNote")}</p>
          <p>• <strong>↓</strong> = {t("arrowDownNote")}</p>
        </div>
      </CardContent>
    </Card>
  )
}

