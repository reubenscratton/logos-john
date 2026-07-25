import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { GreekToken } from '../data/types';

// Shared selection state that ties the three columns together.
//
// Everything is expressed in terms of *Greek token ids*. English words and
// annotations declare which Greek ids they relate to; a word/note is
// "highlighted" when any of its ids is in the active set. The active set is the
// union of a transient hover selection and a sticky pinned selection.

interface HighlightApi {
  active: Set<string>;
  pinned: Set<string>;
  /** The Greek token currently under focus, for the inspector. */
  focus: GreekToken | null;
  isActive: (ids: string[]) => boolean;
  isPinned: (ids: string[]) => boolean;
  hover: (ids: string[], focus?: GreekToken | null) => void;
  endHover: () => void;
  toggle: (ids: string[]) => void;
  clear: () => void;
}

const Ctx = createContext<HighlightApi | null>(null);

function sameSet(a: Set<string>, ids: string[]): boolean {
  if (a.size !== ids.length) return false;
  return ids.every((id) => a.has(id));
}

export function HighlightProvider({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState<string[]>([]);
  const [pinned, setPinned] = useState<Set<string>>(new Set());
  const [focus, setFocus] = useState<GreekToken | null>(null);

  const api = useMemo<HighlightApi>(() => {
    const active = new Set<string>([...pinned, ...hovered]);
    return {
      active,
      pinned,
      focus,
      isActive: (ids) => ids.some((id) => active.has(id)),
      isPinned: (ids) => ids.length > 0 && ids.some((id) => pinned.has(id)),
      hover: (ids, f = null) => {
        setHovered(ids);
        if (f !== undefined) setFocus(f);
      },
      endHover: () => {
        setHovered([]);
        setFocus(null);
      },
      toggle: (ids) => {
        setPinned((prev) => (sameSet(prev, ids) ? new Set() : new Set(ids)));
      },
      clear: () => {
        setPinned(new Set());
        setHovered([]);
      },
    };
  }, [hovered, pinned, focus]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useHighlight(): HighlightApi {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useHighlight must be used within HighlightProvider');
  return ctx;
}
