
import React, { useEffect, useState } from 'react';

const codeLines = [
  'const digital = () => {',
  '  return "future";',
  '};',
  '',
  'function transform(idea) {',
  '  return idea + " ✨ experiencia";',
  '}',
  '',
  'const client = {',
  '  nombre: "Empresa Innovadora",',
  '  proyecto: "Solución Web",',
  '};',
  '',
  'console.log("Construyendo soluciones...🚀");',
];

const CodeTypingBackground = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (lineIndex < codeLines.length) {
        const currentLine = codeLines[lineIndex];
        if (charIndex < currentLine.length) {
          const updatedLines = [...displayedLines];
          updatedLines[lineIndex] = (updatedLines[lineIndex] || '') + currentLine[charIndex];
          setDisplayedLines(updatedLines);
          setCharIndex(charIndex + 1);
        } else {
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }
      } else {
        setTimeout(() => {
          setDisplayedLines([]);
          setCharIndex(0);
          setLineIndex(0);
        }, 3000);
      }
    };

    const timer = setTimeout(type, 50);
    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, displayedLines]);

  return (
    <div className="absolute inset-0 z-0 font-mono text-sm leading-relaxed whitespace-pre overflow-hidden pointer-events-none text-white/10 opacity-10 px-6">
      <div className="blur-[1.5px]">
        {displayedLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default CodeTypingBackground;
