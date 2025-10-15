import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'

// Table A Component - Sample Size Code Letters
export function TableA({ lotSize, inspectionType, inspectionLevel }) {
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
        <CardTitle className="text-lg">表 A - 樣本大小代碼字母</CardTitle>
        <CardDescription>
          根據批量大小和檢驗級別查找代碼字母
          <span className="block mt-1 text-xs">
            來源：ISO 2859-1:1999 / ANSI/ASQ Z1.4-2003
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-2 text-left font-semibold bg-gray-50">批量大小</th>
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
                    <td className="p-2">
                      {range.label}
                      {isCurrentRow && (
                        <Badge variant="outline" className="ml-2 text-xs">當前</Badge>
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
      </CardContent>
    </Card>
  )
}

// Table B Component - Single Sampling Plans
export function TableB({ codeLetter, aqlValues }) {
  // Sample sizes for each code letter
  const sampleSizes = {
    'A': 2, 'B': 3, 'C': 5, 'D': 8, 'E': 13, 'F': 20, 'G': 32, 'H': 50,
    'J': 80, 'K': 125, 'L': 200, 'M': 315, 'N': 500, 'P': 800, 'Q': 1250, 'R': 2000
  }

  // All code letters in order
  const allCodeLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R']

  // All AQL values
  const allAQLValues = ['0.065', '0.10', '0.15', '0.25', '0.40', '0.65', '1.0', '1.5', '2.5', '4.0', '6.5']

  // Sampling plans data with arrow symbols (↑ and ↓)
  const samplingPlans = {
    'A': { '0.065': '↑', '0.10': '↑', '0.15': '↑', '0.25': '↑', '0.40': '↑', '0.65': '↑', '1.0': '0/1', '1.5': '0/1', '2.5': '0/1', '4.0': '↓', '6.5': '0/1' },
    'B': { '0.065': '↑', '0.10': '↑', '0.15': '↑', '0.25': '↑', '0.40': '↑', '0.65': '↑', '1.0': '0/1', '1.5': '0/1', '2.5': '↓', '4.0': '0/1', '6.5': '↑' },
    'C': { '0.065': '↑', '0.10': '↑', '0.15': '↑', '0.25': '↑', '0.40': '↑', '0.65': '↑', '1.0': '↓', '1.5': '0/1', '2.5': '0/1', '4.0': '↑', '6.5': '1/2' },
    'D': { '0.065': '↑', '0.10': '↑', '0.15': '↑', '0.25': '↑', '0.40': '↑', '0.65': '↓', '1.0': '0/1', '1.5': '0/1', '2.5': '↑', '4.0': '1/2', '6.5': '↓' },
    'E': { '0.065': '↑', '0.10': '↑', '0.15': '↑', '0.25': '↑', '0.40': '↓', '0.65': '0/1', '1.0': '0/1', '1.5': '↑', '2.5': '1/2', '4.0': '↓', '6.5': '2/3' },
    'F': { '0.065': '↑', '0.10': '↑', '0.15': '↑', '0.25': '↓', '0.40': '0/1', '0.65': '0/1', '1.0': '↑', '1.5': '1/2', '2.5': '↓', '4.0': '2/3', '6.5': '3/4' },
    'G': { '0.065': '↑', '0.10': '↑', '0.15': '↓', '0.25': '0/1', '0.40': '0/1', '0.65': '↑', '1.0': '1/2', '1.5': '↓', '2.5': '2/3', '4.0': '3/4', '6.5': '5/6' },
    'H': { '0.065': '↑', '0.10': '↓', '0.15': '0/1', '0.25': '0/1', '0.40': '↑', '0.65': '1/2', '1.0': '↓', '1.5': '2/3', '2.5': '3/4', '4.0': '5/6', '6.5': '7/8' },
    'J': { '0.065': '↓', '0.10': '0/1', '0.15': '0/1', '0.25': '↑', '0.40': '1/2', '0.65': '↓', '1.0': '2/3', '1.5': '↑', '2.5': '5/6', '4.0': '7/8', '6.5': '10/11' },
    'K': { '0.065': '0/1', '0.10': '0/1', '0.15': '↑', '0.25': '1/2', '0.40': '↓', '0.65': '2/3', '1.0': '↑', '1.5': '5/6', '2.5': '7/8', '4.0': '10/11', '6.5': '14/15' },
    'L': { '0.065': '0/1', '0.10': '↑', '0.15': '1/2', '0.25': '↓', '0.40': '2/3', '0.65': '↑', '1.0': '5/6', '1.5': '↓', '2.5': '10/11', '4.0': '14/15', '6.5': '21/22' },
    'M': { '0.065': '↑', '0.10': '1/2', '0.15': '↓', '0.25': '2/3', '0.40': '↑', '0.65': '5/6', '1.0': '↓', '1.5': '10/11', '2.5': '14/15', '4.0': '21/22', '6.5': '↑' },
    'N': { '0.065': '0/1', '0.10': '↓', '0.15': '2/3', '0.25': '↑', '0.40': '5/6', '0.65': '↓', '1.0': '10/11', '1.5': '↑', '2.5': '21/22', '4.0': '↑', '6.5': '↑' },
    'P': { '0.065': '1/2', '0.10': '1/2', '0.15': '↑', '0.25': '3/4', '0.40': '↓', '0.65': '7/8', '1.0': '↑', '1.5': '14/15', '2.5': '21/22', '4.0': '↑', '6.5': '↑' },
    'Q': { '0.065': '1/2', '0.10': '↑', '0.15': '3/4', '0.25': '↓', '0.40': '7/8', '0.65': '↑', '1.0': '14/15', '1.5': '↓', '2.5': '21/22', '4.0': '↑', '6.5': '↑' },
    'R': { '0.065': '↑', '0.10': '3/4', '0.15': '↓', '0.25': '7/8', '0.40': '↑', '0.65': '14/15', '1.0': '↓', '1.5': '21/22', '2.5': '21/22', '4.0': '↑', '6.5': '↑' }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">表 B - 單次抽樣計劃（正常檢驗）</CardTitle>
        <CardDescription>
          根據代碼字母和 AQL 值查找接受數量 (Ac) 和拒絕數量 (Re)
          <span className="block mt-1 text-xs">
            來源：ISO 2859-1:1999 / ANSI/ASQ Z1.4-2003
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-2 text-left font-semibold bg-gray-50 sticky left-0">代碼</th>
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
                <th className="p-1 bg-gray-50 sticky left-0">字母</th>
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
                    <td className={`p-2 font-mono font-bold sticky left-0 ${
                      isCurrentRow ? 'bg-yellow-100' : 'bg-white'
                    }`}>
                      {code}
                      {isCurrentRow && (
                        <Badge variant="outline" className="ml-1 text-xs">當前</Badge>
                      )}
                    </td>
                    <td className="p-2 text-center font-semibold">
                      {sampleSizes[code]}
                    </td>
                    {allAQLValues.map(aql => {
                      const plan = samplingPlans[code][aql]
                      const isHighlighted = aqlValues && aqlValues.includes(aql)
                      const isCurrentCell = isCurrentRow && isHighlighted
                      return (
                        <td 
                          key={aql} 
                          className={`p-2 text-center font-mono ${
                            isCurrentCell ? 'bg-blue-200 font-bold text-blue-900' : 
                            (plan === '↑' || plan === '↓') ? 'bg-gray-100 text-gray-600 text-lg' : ''
                          }`}
                        >
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
        <div className="mt-4 text-xs text-gray-600 space-y-1">
          <p><strong>說明：</strong></p>
          <p>• <strong>n</strong> = 樣本量（需要檢查的樣本數量）</p>
          <p>• <strong>Ac</strong> = 接受數量（Acceptance Number，允許的最大缺陷數量）</p>
          <p>• <strong>Re</strong> = 拒絕數量（Rejection Number，超過此數量則拒收批次）</p>
          <p>• <strong>↑</strong> = 箭頭向上：使用上方第一個可用的抽樣計劃（更高的 AQL 值）</p>
          <p>• <strong>↓</strong> = 箭頭向下：使用下方第一個可用的抽樣計劃（更大的樣本量）；如果樣本量等於或超過批量大小，則進行 100% 檢驗</p>
        </div>
      </CardContent>
    </Card>
  )
}

