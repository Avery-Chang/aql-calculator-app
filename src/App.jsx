import { useState, useEffect, useMemo } from 'react'
import { Calculator, Info, History, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { calculateAQL, formatNumber, getAQLValues } from '@/lib/aqlCalculator.js'
import { TableA, TableB } from '@/components/AQLTables.jsx'
import LanguageSwitcher from '@/components/LanguageSwitcher.jsx'
import { getTranslation } from '@/i18n/translations.js'
import './App.css'

function App() {
  // Language state
  const [language, setLanguage] = useState('zh-TW')
  const t = (key) => getTranslation(language, key)
  
  // Input states
  const [lotSize, setLotSize] = useState('1000')
  const [inspectionType, setInspectionType] = useState('general')
  const [inspectionLevel, setInspectionLevel] = useState('II')
  
  // Defect types states
  const [criticalEnabled, setCriticalEnabled] = useState(true)
  const [criticalAQL, setCriticalAQL] = useState('0.065')
  const [majorEnabled, setMajorEnabled] = useState(true)
  const [majorAQL, setMajorAQL] = useState('2.5')
  const [minorEnabled, setMinorEnabled] = useState(true)
  const [minorAQL, setMinorAQL] = useState('4.0')
  
  // UI states
  const [showTables, setShowTables] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  
  // Quick select lot sizes
  const quickSizes = [100, 500, 1000, 5000, 10000, 50000]
  
  // AQL values
  const aqlValues = getAQLValues()
  
  // Calculate results
  const criticalResult = useMemo(() => {
    if (!criticalEnabled) return null
    const size = parseInt(lotSize) || 0
    if (size <= 0) return null
    return calculateAQL(size, inspectionType, inspectionLevel, criticalAQL)
  }, [criticalEnabled, lotSize, inspectionType, inspectionLevel, criticalAQL])
  
  const majorResult = useMemo(() => {
    if (!majorEnabled) return null
    const size = parseInt(lotSize) || 0
    if (size <= 0) return null
    return calculateAQL(size, inspectionType, inspectionLevel, majorAQL)
  }, [majorEnabled, lotSize, inspectionType, inspectionLevel, majorAQL])
  
  const minorResult = useMemo(() => {
    if (!minorEnabled) return null
    const size = parseInt(lotSize) || 0
    if (size <= 0) return null
    return calculateAQL(size, inspectionType, inspectionLevel, minorAQL)
  }, [minorEnabled, lotSize, inspectionType, inspectionLevel, minorAQL])
  
  // Format lot size with thousand separators
  const handleLotSizeChange = (e) => {
    const value = e.target.value.replace(/,/g, '')
    if (/^\d*$/.test(value)) {
      setLotSize(value)
    }
  }
  
  const displayLotSize = lotSize ? formatNumber(parseInt(lotSize) || 0) : ''
  
  // Result card component
  const ResultCard = ({ title, result, color, enabled, onToggle }) => {
    if (!enabled) {
      return (
        <Card className={`border-2 border-dashed opacity-50 hover:opacity-100 transition-opacity cursor-pointer`} onClick={onToggle}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{title}</span>
              <Badge variant="outline">{t("disabled")}</Badge>
            </CardTitle>
            <CardDescription>{t("clickToEnable")}</CardDescription>
          </CardHeader>
        </Card>
      )
    }
    
    if (!result) {
      return (
        <Card className={`border-2 border-${color}-200`}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{title}</span>
              <Button variant="ghost" size="sm" onClick={onToggle}>{t("disable")}</Button>
            </CardTitle>
            <CardDescription>{t("enterValidLotSize")}</CardDescription>
          </CardHeader>
        </Card>
      )
    }
    
    return (
      <Card className={`border-2 border-${color}-200 bg-${color}-50/30`}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-lg">
            <span>{title}</span>
            <Button variant="ghost" size="sm" onClick={onToggle}>{t("disable")}</Button>
          </CardTitle>
          <CardDescription>{t("codeLetter")}: <strong>{result.codeLetter}</strong></CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-sm text-muted-foreground mb-1">{t("sampleSize")}</div>
              <div className="text-3xl font-bold text-primary">{formatNumber(result.sampleSize)}</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-xs text-green-700 mb-1">{t("acceptanceNumber")}</div>
                <div className="text-2xl font-bold text-green-600">
                  {result.acceptanceNumber !== null ? result.acceptanceNumber : 'N/A'}
                </div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="text-xs text-red-700 mb-1">{t("rejectionNumber")}</div>
                <div className="text-2xl font-bold text-red-600">
                  {result.rejectionNumber !== null ? result.rejectionNumber : 'N/A'}
                </div>
              </div>
            </div>
          </div>
          {result.error && (
            <div className="text-sm text-amber-600 bg-amber-50 p-2 rounded">
              {result.error}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t("title")}</h1>
                <p className="text-sm text-gray-600">{t("subtitle")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => setShowGuide(!showGuide)}>
                <Info className="w-4 h-4 mr-2" />
                {t("instructions")}
              </Button>
              <LanguageSwitcher currentLang={language} onLanguageChange={setLanguage} />
            </div>
          </div>
        </div>
      </header>

      {/* Guide */}
      {showGuide && (
        <div className="bg-blue-50 border-b border-blue-200">
          <div className="container mx-auto px-4 py-6">
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">什麼是 AQL？</h3>
              <p className="text-sm text-blue-800 mb-4">
                AQL（Acceptable Quality Limit，最大可接受質量限值）是一種廣泛用於確定生產訂單樣品的方法，
                基於 ISO 2859-1 / ANSI Z1.4 國際標準，用於判斷整個產品訂單是否符合客戶的規格要求。
              </p>
              <h4 className="text-md font-semibold text-blue-900 mb-2">如何使用：</h4>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>{t("step1")}</li>
                <li>{t("step2")}</li>
                <li>{t("step3")}</li>
                <li>{t("step4")}</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Input */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("inputParams")}</CardTitle>
                <CardDescription>{t("inputParamsDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Lot Size */}
                <div className="space-y-2">
                  <Label htmlFor="lotSize">{t("lotSize")}</Label>
                  <Input
                    id="lotSize"
                    type="text"
                    value={displayLotSize}
                    onChange={handleLotSizeChange}
                    placeholder={t("lotSizePlaceholder")}
                    className="text-lg"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {quickSizes.map(size => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        onClick={() => setLotSize(size.toString())}
                        className="text-xs"
                      >
                        {formatNumber(size)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Inspection Type */}
                <div className="space-y-2">
                  <Label>{t("inspectionType")}</Label>
                  <Tabs value={inspectionType} onValueChange={setInspectionType}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="general">{t("normalInspection")}</TabsTrigger>
                      <TabsTrigger value="special">{t("specialInspection")}</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Inspection Level */}
                <div className="space-y-2">
                  <Label htmlFor="inspectionLevel">{t("inspectionLevel")}</Label>
                  <Select value={inspectionLevel} onValueChange={setInspectionLevel}>
                    <SelectTrigger id="inspectionLevel">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {inspectionType === 'general' ? (
                        <>
                          <SelectItem value="I">{t("levelI")}</SelectItem>
                          <SelectItem value="II">{t("levelII")}</SelectItem>
                          <SelectItem value="III">{t("levelIII")}</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="S1">{t("levelS1")}</SelectItem>
                          <SelectItem value="S2">{t("levelS2")}</SelectItem>
                          <SelectItem value="S3">{t("levelS3")}</SelectItem>
                          <SelectItem value="S4">{t("levelS4")}</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Defect Types Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>{t("defectTypes")}</CardTitle>
                <CardDescription>{t("selectDefectTypes")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Critical Defects */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-red-700 font-semibold">{t("criticalDefect")}</Label>
                    <Button
                      variant={criticalEnabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCriticalEnabled(!criticalEnabled)}
                    >
                      {criticalEnabled ? t("enabled_status") : t("enable")}
                    </Button>
                  </div>
                  {criticalEnabled && (
                    <Select value={criticalAQL} onValueChange={setCriticalAQL}>
                      <SelectTrigger className="border-red-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {aqlValues.map(val => (
                          <SelectItem key={val} value={val}>AQL {val}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* Major Defects */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-orange-700 font-semibold">{t("majorDefect")}</Label>
                    <Button
                      variant={majorEnabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMajorEnabled(!majorEnabled)}
                    >
                      {majorEnabled ? t("enabled_status") : t("enable")}
                    </Button>
                  </div>
                  {majorEnabled && (
                    <Select value={majorAQL} onValueChange={setMajorAQL}>
                      <SelectTrigger className="border-orange-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {aqlValues.map(val => (
                          <SelectItem key={val} value={val}>AQL {val}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* Minor Defects */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-yellow-700 font-semibold">{t("minorDefect")}</Label>
                    <Button
                      variant={minorEnabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMinorEnabled(!minorEnabled)}
                    >
                      {minorEnabled ? t("enabled_status") : t("enable")}
                    </Button>
                  </div>
                  {minorEnabled && (
                    <Select value={minorAQL} onValueChange={setMinorAQL}>
                      <SelectTrigger className="border-yellow-200">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {aqlValues.map(val => (
                          <SelectItem key={val} value={val}>AQL {val}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">{t("results")}</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                <ResultCard
                  title={t("criticalDefectTitle")}
                  result={criticalResult}
                  color="red"
                  enabled={criticalEnabled}
                  onToggle={() => setCriticalEnabled(!criticalEnabled)}
                />
                <ResultCard
                  title={t("majorDefectTitle")}
                  result={majorResult}
                  color="orange"
                  enabled={majorEnabled}
                  onToggle={() => setMajorEnabled(!majorEnabled)}
                />
                <ResultCard
                  title={t("minorDefectTitle")}
                  result={minorResult}
                  color="yellow"
                  enabled={minorEnabled}
                  onToggle={() => setMinorEnabled(!minorEnabled)}
                />
              </div>
            </div>

            {/* Reference Tables */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{t("aqlTables")}</CardTitle>
                    <CardDescription>{t("aqlTablesDesc")}</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setShowTables(!showTables)}>
                    {showTables ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </CardHeader>
              {showTables && (
                <CardContent className="space-y-6">
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-4">
                      {t("calculationLogic")}
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-semibold text-blue-900 mb-2">{t("currentCalculation")}</p>
                      <ul className="space-y-1 text-blue-800">
                        <li>• {t("lotSize")}: <strong>{displayLotSize || t("notSet")}</strong></li>
                        <li>• {t("inspectionType")}: <strong>{inspectionType === 'general' ? t("normalInspection") : t("specialInspection")}</strong></li>
                        <li>• {t("inspectionLevel")}: <strong>{inspectionLevel}</strong></li>
                        {criticalEnabled && <li>• {t("criticalDefect")} AQL: <strong>{criticalAQL}</strong></li>}
                        {majorEnabled && <li>• {t("majorDefect")} AQL: <strong>{majorAQL}</strong></li>}
                        {minorEnabled && <li>• {t("minorDefect")} AQL: <strong>{minorAQL}</strong></li>}
                      </ul>
                    </div>
                  </div>

                  {/* Table A */}
                  <TableA 
                    lotSize={parseInt(lotSize) || 0}
                    inspectionType={inspectionType}
                    inspectionLevel={inspectionLevel}
                    language={language}
                  />

                  {/* Table B */}
                  <TableB 
                    language={language}
                    codeLetter={(
                      criticalResult?.codeLetter || 
                      majorResult?.codeLetter || 
                      minorResult?.codeLetter
                    )}
                    aqlValues={[
                      criticalEnabled && criticalAQL,
                      majorEnabled && majorAQL,
                      minorEnabled && minorAQL
                    ].filter(Boolean)}
                  />
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>基於 ISO 2859-1 / ANSI Z1.4 國際標準</p>
            <p className="mt-1">© 2025 {t("title")} - {t("subtitle")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

