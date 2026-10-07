interface KbTreatsLogoProps {
  className?: string;
  size?: number;
  showTextBeside?: boolean;
}

export function KbTreatsLogo({ className = '', size = 52, showTextBeside = false }: KbTreatsLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* 100% Exact Vector Replica of the OG KB Treats Emblem */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs"
        aria-label="KB Treats Original Logo"
      >
        <defs>
          {/* Subtle soft shadow filter for KB letters matching OG logo */}
          <filter id="og-shadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="3.5" dy="3" stdDeviation="0" floodColor="#C3879F" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* 1. Central Pastel Blush/Rose Pink Solid Circle */}
        <circle cx="212" cy="205" r="148" fill="#EAAEC1" />

        {/* 2. Outer Delicate Black Circular Ring with Break for 3 Dots */}
        {/* Main upper & right arc (from top-left vine anchor to bottom-right dot break) */}
        <path
          d="M 125 38 A 180 180 0 0 1 364 274"
          stroke="#1A1A1A"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Bottom arc continuation (after the 3 dots) */}
        <path
          d="M 282 376 A 180 180 0 0 1 54 228"
          stroke="#1A1A1A"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* 3. Three Solid Black Dots on Bottom Right Perimeter */}
        <circle cx="361" cy="285" r="4.2" fill="#1A1A1A" />
        <circle cx="347" cy="328" r="4.2" fill="#1A1A1A" />
        <circle cx="320" cy="363" r="4.2" fill="#1A1A1A" />

        {/* 4. Left Botanical Vine & Leaves in Black Line-Art with White Fill */}
        <g stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Arched Stem */}
          <path
            d="M 52 232 C 34 185, 38 115, 85 60 C 100 42, 118 28, 128 18"
            fill="none"
          />

          {/* Terminal Top Leaf (pointing up-right) */}
          <path
            d="M 128 18 C 135 10, 142 8, 144 14 C 146 22, 138 30, 128 28 Z"
            fill="#FFFFFF"
          />
          <path d="M 128 20 C 136 14, 141 12, 143 14" fill="none" strokeWidth="1.2" />

          {/* Leaf 1 (Top Upper-Left outer) */}
          <path
            d="M 112 36 C 88 12, 72 16, 75 28 C 78 40, 95 48, 110 40 Z"
            fill="#FFFFFF"
          />
          <path d="M 110 38 C 96 28, 85 24, 76 26" fill="none" strokeWidth="1.2" />

          {/* Leaf 2 (Upper Inner pointing toward pink circle) */}
          <path
            d="M 102 52 C 118 42, 134 45, 130 57 C 126 68, 110 70, 98 58 Z"
            fill="#FFFFFF"
          />
          <path d="M 100 54 C 114 50, 124 51, 129 55" fill="none" strokeWidth="1.2" />

          {/* Leaf 3 (Mid-Upper Outer pointing upper-left) */}
          <path
            d="M 82 72 C 55 52, 42 60, 48 72 C 54 84, 72 90, 80 78 Z"
            fill="#FFFFFF"
          />
          <path d="M 80 75 C 66 66, 56 65, 50 70" fill="none" strokeWidth="1.2" />

          {/* Leaf 4 (Mid Inner pointing slightly inward) */}
          <path
            d="M 68 98 C 84 88, 100 94, 96 106 C 92 116, 76 118, 65 104 Z"
            fill="#FFFFFF"
          />
          <path d="M 66 100 C 80 96, 90 98, 95 104" fill="none" strokeWidth="1.2" />

          {/* Leaf 5 (Mid Outer pointing left) */}
          <path
            d="M 52 128 C 22 112, 14 124, 22 136 C 30 148, 48 150, 52 134 Z"
            fill="#FFFFFF"
          />
          <path d="M 50 130 C 36 126, 26 127, 21 134" fill="none" strokeWidth="1.2" />

          {/* Leaf 6 (Lower-Mid Inner pointing inward over pink) */}
          <path
            d="M 44 158 C 58 148, 76 154, 72 166 C 68 176, 52 176, 42 164 Z"
            fill="#FFFFFF"
          />
          <path d="M 43 160 C 56 156, 65 158, 70 164" fill="none" strokeWidth="1.2" />

          {/* Leaf 7 (Lower Outer pointing down-left) */}
          <path
            d="M 38 185 C 15 174, 10 188, 18 200 C 26 210, 42 208, 40 192 Z"
            fill="#FFFFFF"
          />
          <path d="M 38 188 C 28 186, 20 190, 17 197" fill="none" strokeWidth="1.2" />

          {/* Leaf 8 (Base Leaf pointing down) */}
          <path
            d="M 48 214 C 36 218, 34 230, 44 238 C 54 244, 60 234, 54 220 Z"
            fill="#FFFFFF"
          />
          <path d="M 49 216 C 44 224, 42 230, 43 236" fill="none" strokeWidth="1.2" />
        </g>

        {/* 5. Center Typography "KB" with signature swoosh and drop shadow */}
        <g id="kb-letters">
          {/* Shadow layer for KB */}
          <text
            x="207.5"
            y="219"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="98"
            fontWeight="700"
            letterSpacing="-3"
            fill="#C0849D"
          >
            KB
          </text>
          {/* Shadow for K's extended swash stroke */}
          <path
            d="M 183 205 C 193 226, 214 240, 248 238 C 262 237, 273 234, 278 231"
            stroke="#C0849D"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Main deep plum text layer for KB */}
          <text
            x="204"
            y="216"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="98"
            fontWeight="700"
            letterSpacing="-3"
            fill="#5E123B"
          >
            KB
          </text>
          {/* Main K's elegant calligraphic swoosh flowing under the B */}
          <path
            d="M 180 202 C 190 223, 211 237, 245 235 C 259 234, 270 231, 275 228"
            stroke="#5E123B"
            strokeWidth="5.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* 6. "T R E A T S" with drop shadow and wide spacing */}
        <g id="treats-subtitle">
          {/* Shadow layer */}
          <text
            x="214.5"
            y="256.5"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="26"
            fontWeight="600"
            letterSpacing="9"
            fill="#C0849D"
          >
            TREATS
          </text>
          {/* Main plum text */}
          <text
            x="212"
            y="254"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="26"
            fontWeight="600"
            letterSpacing="9"
            fill="#5E123B"
          >
            TREATS
          </text>
        </g>

        {/* 7. Script Tagline: "From our kitchen to your celebration" */}
        <text
          x="212"
          y="288"
          textAnchor="middle"
          fontFamily="'Dancing Script', 'Brush Script MT', cursive, Georgia, serif"
          fontSize="17.5"
          fontWeight="600"
          fontStyle="italic"
          fill="#5E123B"
          letterSpacing="0.4"
        >
          From our kitchen to your celebration
        </text>
      </svg>

      {showTextBeside && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#5E123B] leading-none">
            KB Treats
          </span>
          <span className="text-[11px] font-script italic text-[#8A2B59] mt-1 font-semibold tracking-wide">
            From our kitchen to your celebration
          </span>
        </div>
      )}
    </div>
  );
}
