import { useState, useRef, useEffect, useMemo } from 'react';
import type { PlaybookData } from '../data/playbookData';

interface Props {
  playbooks: Record<string, PlaybookData>;
  selected: string;
  onSelect: (key: string) => void;
}

/** Strip leading article for display: "El Guerrero" → "Guerrero" */
function bareName(name: string): string {
  return name.replace(/^(El|La|Los|Las)\s+/i, '');
}

export default function PlaybookSelector({ playbooks, selected, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const entries = useMemo(
    () => Object.entries(playbooks).map(([key, data]) => ({ key, name: bareName(data.meta.name) })),
    [playbooks],
  );

  const currentName = playbooks[selected] ? bareName(playbooks[selected].meta.name) : 'Elige una clase…';

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return entries;
    return entries.filter((e) => e.name.toLowerCase().includes(q));
  }, [entries, query]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery('');
      // Small delay so the input is mounted before focus
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const select = (key: string) => {
    onSelect(key);
    setOpen(false);
  };

  const dark = '#211d1e';
  const light = '#e8e4dc';

  return (
    <div ref={containerRef} style={{ position: 'relative', fontFamily: 'AveriaLibre, serif' }}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="font-averia font-bold text-sm uppercase tracking-wider border-0 cursor-pointer flex items-center gap-2"
        style={{
          background: dark,
          color: light,
          padding: '10px 14px',
          clipPath:
            'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
        }}
      >
        <span>{currentName}</span>
        <span style={{ fontSize: '0.7em', transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: 4,
            background: dark,
            color: light,
            clipPath:
              'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
            overflow: 'hidden',
            zIndex: 50,
            minWidth: 180,
            boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
          }}
        >
          {/* Search input */}
          <div style={{ padding: '6px 8px' }}>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar clase…"
              className="font-averia text-sm"
              style={{
                width: '100%',
                padding: '6px 8px',
                border: 'none',
                outline: 'none',
                background: '#3a3536',
                color: light,
              }}
            />
          </div>

          {/* Options */}
          <div style={{ maxHeight: 200, overflowY: 'auto' }}>
            {filtered.length === 0 ? (
              <div style={{ padding: '8px 12px', fontSize: '13px', opacity: 0.5 }}>Sin resultados</div>
            ) : (
              filtered.map(({ key, name }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => select(key)}
                  className="font-averia text-sm uppercase tracking-wider text-left cursor-pointer"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px 12px',
                    border: 'none',
                    background: key === selected ? '#3a3536' : 'transparent',
                    color: light,
                    transition: 'background 0.1s',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = '#4a4445';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = key === selected ? '#3a3536' : 'transparent';
                  }}
                >
                  {name}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
