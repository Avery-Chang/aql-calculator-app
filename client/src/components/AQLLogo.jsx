export default function AQLLogo({ className = "w-16 h-16" }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" stroke="#1E88E5" strokeWidth="2" fill="white"/>
      
      {/* Clipboard background */}
      <rect x="30" y="25" width="40" height="50" rx="3" fill="#1E88E5"/>
      
      {/* Clipboard clip */}
      <path d="M45 25 L45 23 C45 21.8954 45.8954 21 47 21 L53 21 C54.1046 21 55 21.8954 55 23 L55 25 L58 25 L58 28 L42 28 L42 25 Z" fill="#0D47A1"/>
      
      {/* Checkmark 1 */}
      <path d="M35 35 L38 38 L43 33" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Checkmark 2 */}
      <path d="M35 45 L38 48 L43 43" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Magnifying glass circle */}
      <circle cx="57" cy="57" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
      
      {/* Magnifying glass handle */}
      <path d="M64 64 L69 69" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      
      {/* Bar chart inside magnifying glass */}
      <rect x="52" y="60" width="2" height="4" fill="white"/>
      <rect x="55" y="57" width="2" height="7" fill="white"/>
      <rect x="58" y="54" width="2" height="10" fill="white"/>
      
      {/* AQL text */}
      <text x="50" y="88" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1E88E5" textAnchor="middle">AQL</text>
    </svg>
  )
}

