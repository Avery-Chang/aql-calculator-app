// 語言翻譯配置
export const translations = {
  'zh-TW': {
    // 頁面標題
    title: 'AQL 計算器',
    subtitle: '品質檢查抽樣數量計算工具',
    
    // 按鈕
    instructions: '使用說明',
    
    // 輸入參數區
    inputParams: '輸入參數',
    inputParamsDesc: '設定檢驗參數以計算抽樣數量',
    
    // 批量大小
    lotSize: '批量大小',
    lotSizePlaceholder: '輸入產品總數量',
    
    // 檢驗類型
    inspectionType: '檢驗類型',
    normalInspection: '普通檢驗',
    specialInspection: '特殊檢驗',
    
    // 檢驗級別
    inspectionLevel: '檢驗級別',
    levelS1: 'S-1 - 最小樣本',
    levelS2: 'S-2 - 較小樣本',
    levelS3: 'S-3 - 小樣本',
    levelS4: 'S-4 - 中小樣本',
    levelI: 'I - 較小樣本',
    levelII: 'II - 標準樣本（推薦）',
    levelIII: 'III - 較大樣本',
    
    // 缺陷類型
    defectTypes: '缺陷類型設定',
    defectTypesDesc: '選擇需要檢驗的缺陷類型及其 AQL 值',
    criticalDefect: '關鍵缺陷 (Critical)',
    majorDefect: '主要缺陷 (Major)',
    minorDefect: '輕微缺陷 (Minor)',
    enabled: '已啟用',
    disabled: '已停用',
    
    // 計算結果
    results: '計算結果',
    resultsDesc: '該批檢驗參數以計算抽樣數量',
    codeLetter: '代碼字母',
    sampleSize: '樣本量',
    acceptanceNumber: '接受數量',
    rejectionNumber: '拒絕數量',
    
    // AQL 標準參考表
    aqlTables: 'AQL 標準參考表',
    aqlTablesDesc: 'ISO 2859-1 / ANSI Z1.4 標準表格',
    tableA: 'Table A - 樣本量代碼字母',
    tableADesc: '根據批量大小和檢驗級別確定代碼字母',
    tableB: 'Table B - 單次抽樣計劃',
    tableBDesc: '普通檢驗的接受和拒絕數量',
    
    // Table A 表頭
    lotSizeRange: '批量範圍',
    specialLevels: '特殊檢驗級別',
    generalLevels: '一般檢驗級別',
    
    // Table B 表頭
    sampleSizeCodeLetter: '樣本量代碼字母',
    
    // 使用說明
    instructionsTitle: '使用說明',
    instructionsContent: `
### 什麼是 AQL？

AQL (Acceptable Quality Limit) 是可接受品質水準，用於判斷一批產品是否合格的統計標準。

### 如何使用本計算器？

1. **輸入批量大小**：輸入本批次產品的總數量
2. **選擇檢驗類型**：通常選擇「普通檢驗」
3. **選擇檢驗級別**：推薦使用「II - 標準樣本」
4. **設定缺陷類型**：
   - 關鍵缺陷：嚴重影響安全或功能的缺陷（推薦 AQL 0.065-0.25）
   - 主要缺陷：影響使用或外觀的缺陷（推薦 AQL 1.0-2.5）
   - 輕微缺陷：不影響使用的小瑕疵（推薦 AQL 4.0-6.5）

### 如何判斷合格？

根據計算結果抽取樣本進行檢驗：
- 如果缺陷數量 ≤ 接受數量：批次**合格**
- 如果缺陷數量 ≥ 拒絕數量：批次**不合格**

### 標準依據

本計算器基於以下國際標準：
- ISO 2859-1:1999
- ANSI/ASQ Z1.4-2003
    `,
    
    // 錯誤訊息
    unableToFindPlan: 'Unable to find sampling plan',
    fullInspection: '100% 檢驗',
    
    // ResultCard
    clickToEnable: '點擊啟用此缺陷類型',
    enterValidLotSize: '請輸入有效的批量大小',
    
    // 按鈕和狀態
    disable: '停用',
    enable: '啟用',
    enabled_status: '已啟用',
    
    // 缺陷類型標題
    criticalDefectTitle: '關鍵缺陷',
    majorDefectTitle: '主要缺陷',
    minorDefectTitle: '輕微缺陷',
    
    // 缺陷類型設定描述
    selectDefectTypes: '選擇需要檢驗的缺陷類型及 AQL 值',
    
    // 計算邏輯說明
    calculationLogic: '計算邏輯：首先根據批量大小和檢驗級別在表 A 中查找代碼字母，然後在表 B 中根據代碼字母和 AQL 值查找對應的樣本量、接受數量和拒絕數量。',
    currentCalculation: '當前計算使用：',
    notSet: '未設定',
    
    // 使用說明步驟
    step1: '輸入您的批量大小（產品總數量）',
    step2: '選擇檢驗類型和級別（一般使用「普通檢驗 II」）',
    step3: '啟用需要的缺陷類型並設定對應的 AQL 值',
    step4: '查看計算結果：樣本量、接受數量和拒絕數量',
    
    // Table A
    tableATitle: '表 A - 樣本大小代碼字母',
    tableADesc: '根據批量大小和檢驗級別查找代碼字母',
    tableASource: '來源：ISO 2859-1:1999 / ANSI/ASQ Z1.4-2003',
    current: '當前',
    
    // Table B
    tableBTitle: '表 B - 單次抽樣計劃（普通檢驗）',
    tableBDesc: '根據代碼字母和 AQL 值查找接受數量 (Ac) 和拒絕數量 (Re)',
    tableBSource: '來源：ISO 2859-1:1999 / ANSI/ASQ Z1.4-2003',
    codeLetterCol: '代碼字母',
    sampleSizeCol: '樣本量',
    explanation: '說明：',
    explanationN: '• n = 樣本量（需要檢查的樣本數量）',
    explanationAc: '• Ac = 接受數量（Acceptance Number，允許的最大缺陷數量）',
    explanationRe: '• Re = 拒絕數量（Rejection Number，超過此數量則拒收批次）',
    explanationArrowUp: '• ↑ = 箭頭向上：使用上方第一個可用的抽樣計劃（更小的樣本量）',
    explanationArrowDown: '• ↓ = 箭頭向下：使用下方第一個可用的抽樣計劃（更大的樣本量）；如果樣本量等於或超過批量大小，則進行 100% 檢驗',
    basedOn: '基於 ISO 2859-1 / ANSI Z1.4 國際標準',
    
    // 說明區域
    notes: '說明',
    sampleSizeNote: '樣本量（需要檢查的樣本數量）',
    acceptanceNumberNote: '接受數量（Acceptance Number，允許的最大缺陷數量）',
    rejectionNumberNote: '拒絕數量（Rejection Number，超過此數量則拒收批次）',
    arrowUpNote: '箭頭向上：使用上方第一個可用的抽樣計劃（更小的樣本量）',
    arrowDownNote: '箭頭向下：使用下方第一個可用的抽樣計劃（更大的樣本量）；如果樣本量等於或超過批量大小，則進行 100% 檢驗',
    
    // 其他
    close: '關閉',
  },
  
  'en': {
    // Page title
    title: 'AQL Calculator',
    subtitle: 'Quality Inspection Sampling Size Calculator',
    
    // Buttons
    instructions: 'Instructions',
    
    // Input parameters
    inputParams: 'Input Parameters',
    inputParamsDesc: 'Set inspection parameters to calculate sampling size',
    
    // Lot size
    lotSize: 'Lot Size',
    lotSizePlaceholder: 'Enter total product quantity',
    
    // Inspection type
    inspectionType: 'Inspection Type',
    normalInspection: 'Normal Inspection',
    specialInspection: 'Special Inspection',
    
    // Inspection level
    inspectionLevel: 'Inspection Level',
    levelS1: 'S-1 - Minimum Sample',
    levelS2: 'S-2 - Smaller Sample',
    levelS3: 'S-3 - Small Sample',
    levelS4: 'S-4 - Medium-Small Sample',
    levelI: 'I - Smaller Sample',
    levelII: 'II - Standard Sample (Recommended)',
    levelIII: 'III - Larger Sample',
    
    // Defect types
    defectTypes: 'Defect Type Settings',
    defectTypesDesc: 'Select defect types to inspect and their AQL values',
    criticalDefect: 'Critical Defect',
    majorDefect: 'Major Defect',
    minorDefect: 'Minor Defect',
    enabled: 'Enabled',
    disabled: 'Disabled',
    
    // Results
    results: 'Calculation Results',
    resultsDesc: 'Inspection parameters for this batch to calculate sampling size',
    codeLetter: 'Code Letter',
    sampleSize: 'Sample Size',
    acceptanceNumber: 'Acceptance Number',
    rejectionNumber: 'Rejection Number',
    
    // AQL tables
    aqlTables: 'AQL Standard Reference Tables',
    aqlTablesDesc: 'ISO 2859-1 / ANSI Z1.4 Standard Tables',
    tableA: 'Table A - Sample Size Code Letters',
    tableADesc: 'Determine code letter based on lot size and inspection level',
    tableB: 'Table B - Single Sampling Plans',
    tableBDesc: 'Acceptance and rejection numbers for normal inspection',
    
    // Table A headers
    lotSizeRange: 'Lot Size Range',
    specialLevels: 'Special Inspection Levels',
    generalLevels: 'General Inspection Levels',
    
    // Table B headers
    sampleSizeCodeLetter: 'Sample Size Code Letter',
    
    // Instructions
    instructionsTitle: 'Instructions',
    instructionsContent: `
### What is AQL?

AQL (Acceptable Quality Limit) is a statistical standard used to determine whether a batch of products meets quality requirements.

### How to Use This Calculator?

1. **Enter Lot Size**: Input the total quantity of products in this batch
2. **Select Inspection Type**: Usually choose "Normal Inspection"
3. **Select Inspection Level**: Recommended to use "II - Standard Sample"
4. **Set Defect Types**:
   - Critical Defect: Serious defects affecting safety or functionality (Recommended AQL 0.065-0.25)
   - Major Defect: Defects affecting usability or appearance (Recommended AQL 1.0-2.5)
   - Minor Defect: Minor flaws not affecting usability (Recommended AQL 4.0-6.5)

### How to Determine Acceptance?

Inspect samples according to calculation results:
- If defect count ≤ Acceptance Number: Batch is **Accepted**
- If defect count ≥ Rejection Number: Batch is **Rejected**

### Standards Reference

This calculator is based on the following international standards:
- ISO 2859-1:1999
- ANSI/ASQ Z1.4-2003
    `,
    
    // Error messages
    unableToFindPlan: 'Unable to find sampling plan',
    fullInspection: '100% Inspection',
    
    // ResultCard
    clickToEnable: 'Click to enable this defect type',
    enterValidLotSize: 'Please enter a valid lot size',
    
    // Buttons and status
    disable: 'Disable',
    enable: 'Enable',
    enabled_status: 'Enabled',
    
    // Defect type titles
    criticalDefectTitle: 'Critical Defect',
    majorDefectTitle: 'Major Defect',
    minorDefectTitle: 'Minor Defect',
    
    // Defect type settings description
    selectDefectTypes: 'Select defect types to inspect and their AQL values',
    
    // Calculation logic explanation
    calculationLogic: 'Calculation logic: First, find the code letter in Table A based on lot size and inspection level, then find the corresponding sample size, acceptance number, and rejection number in Table B based on the code letter and AQL value.',
    currentCalculation: 'Current calculation uses:',
    notSet: 'Not set',
    
    // Instructions steps
    step1: 'Enter your lot size (total product quantity)',
    step2: 'Select inspection type and level (generally use "Normal Inspection II")',
    step3: 'Enable required defect types and set corresponding AQL values',
    step4: 'View calculation results: sample size, acceptance number, and rejection number',
    
    // Table A
    tableATitle: 'Table A - Sample Size Code Letters',
    tableADesc: 'Find code letter based on lot size and inspection level',
    tableASource: 'Source: ISO 2859-1:1999 / ANSI/ASQ Z1.4-2003',
    current: 'Current',
    
    // Table B
    tableBTitle: 'Table B - Single Sampling Plans (Normal Inspection)',
    tableBDesc: 'Find acceptance number (Ac) and rejection number (Re) based on code letter and AQL value',
    tableBSource: 'Source: ISO 2859-1:1999 / ANSI/ASQ Z1.4-2003',
    codeLetterCol: 'Code Letter',
    sampleSizeCol: 'Sample Size',
    explanation: 'Explanation:',
    explanationN: '• n = Sample size (number of samples to inspect)',
    explanationAc: '• Ac = Acceptance Number (maximum number of defects allowed)',
    explanationRe: '• Re = Rejection Number (batch is rejected if defects exceed this number)',
    explanationArrowUp: '• ↑ = Arrow up: Use the first available sampling plan above (smaller sample size)',
    explanationArrowDown: '• ↓ = Arrow down: Use the first available sampling plan below (larger sample size); if sample size equals or exceeds lot size, perform 100% inspection',
    basedOn: 'Based on ISO 2859-1 / ANSI Z1.4 International Standards',
    
    // Notes section
    notes: 'Notes',
    sampleSizeNote: 'Sample size (number of samples to inspect)',
    acceptanceNumberNote: 'Acceptance Number (maximum number of defects allowed)',
    rejectionNumberNote: 'Rejection Number (batch is rejected if defects exceed this number)',
    arrowUpNote: 'Arrow up: Use the first available sampling plan above (smaller sample size)',
    arrowDownNote: 'Arrow down: Use the first available sampling plan below (larger sample size); if sample size equals or exceeds lot size, perform 100% inspection',
    
    // Others
    close: 'Close',
  }
};

// 獲取翻譯文本
export const getTranslation = (lang, key) => {
  return translations[lang]?.[key] || translations['zh-TW'][key] || key;
};

