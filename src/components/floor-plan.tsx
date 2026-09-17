"use client";

type Seat = { id: string; x: number; y: number };

// Positions traced from the venue floor plan, normalized to the viewBox below.
// The stage sits at the top; the entrance is at the bottom.
const SEATS: Seat[] = [
  { id: "B", x: 293, y: 121 },
  { id: "4", x: 154, y: 100 },
  { id: "17", x: 482, y: 89 },
  { id: "1", x: 62, y: 130 },
  { id: "5", x: 132, y: 162 },
  { id: "8", x: 212, y: 152 },
  { id: "13", x: 406, y: 133 },
  { id: "18", x: 484, y: 150 },
  { id: "2", x: 58, y: 195 },
  { id: "11", x: 291, y: 189 },
  { id: "14", x: 410, y: 194 },
  { id: "6", x: 132, y: 224 },
  { id: "9", x: 210, y: 217 },
  { id: "19", x: 486, y: 207 },
  { id: "3", x: 72, y: 264 },
  { id: "12", x: 293, y: 250 },
  { id: "15", x: 410, y: 254 },
  { id: "20", x: 488, y: 264 },
  { id: "10", x: 223, y: 275 },
  { id: "16", x: 410, y: 312 },
  { id: "7", x: 148, y: 292 },
  { id: "21", x: 194, y: 346 },
];

const RADIUS = 21;
const B_RADIUS = 26;

export function FloorPlan({ highlightedIds }: { highlightedIds: Set<string> }) {
  return (
    <svg
      viewBox="0 0 560 520"
      className="w-full h-auto"
      role="img"
      aria-label="Venue floor plan showing table positions"
    >
      {/* Room outline */}
      <rect
        x={12}
        y={12}
        width={536}
        height={448}
        rx={18}
        fill="var(--card)"
        fillOpacity={0.35}
        stroke="var(--border)"
        strokeWidth={2}
      />

      {/* White-carpet aisle */}
      <rect
        x={352}
        y={82}
        width={46}
        height={330}
        rx={8}
        fill="var(--cream)"
        fillOpacity={0.7}
      />

      {/* Stage / screen */}
      <rect
        x={192}
        y={30}
        width={200}
        height={44}
        rx={8}
        fill="var(--blue-pale)"
        stroke="var(--primary)"
        strokeWidth={1.5}
      />
      <text
        x={292}
        y={53}
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--primary)"
        style={{ fontFamily: "var(--font-seasons)", fontSize: 15, letterSpacing: "0.15em" }}
      >
        STAGE
      </text>

      {/* Bar */}
      <rect
        x={214}
        y={400}
        width={92}
        height={30}
        rx={8}
        fill="var(--accent-soft)"
        stroke="var(--accent)"
        strokeWidth={1.5}
      />
      <text
        x={260}
        y={416}
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--primary-dark)"
        style={{ fontFamily: "var(--font-seasons)", fontSize: 14, letterSpacing: "0.15em" }}
      >
        BAR
      </text>

      {/* Tables */}
      {SEATS.map((seat) => {
        const highlighted = highlightedIds.has(seat.id);
        const r = seat.id === "B" ? B_RADIUS : RADIUS;
        return (
          <g key={seat.id}>
            {highlighted && (
              <circle
                cx={seat.x}
                cy={seat.y}
                r={r + 7}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={2.5}
                className="seat-halo"
              />
            )}
            <circle
              cx={seat.x}
              cy={seat.y}
              r={r}
              fill={highlighted ? "var(--accent-soft)" : "var(--card)"}
              stroke={highlighted ? "var(--accent)" : "var(--primary)"}
              strokeWidth={highlighted ? 3 : 1.75}
            />
            <text
              x={seat.x}
              y={seat.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="var(--primary-dark)"
              style={{
                fontFamily: "var(--font-seasons)",
                fontSize: seat.id === "B" ? 20 : 17,
                fontWeight: highlighted ? 700 : 400,
              }}
            >
              {seat.id}
            </text>
          </g>
        );
      })}

      {/* Entrance */}
      <path
        d="M280 476 l-9 12 h18 z"
        fill="var(--primary-dark)"
      />
      <text
        x={280}
        y={504}
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--primary-dark)"
        style={{ fontFamily: "var(--font-seasons)", fontSize: 14, fontWeight: 700, letterSpacing: "0.2em" }}
      >
        ENTRANCE
      </text>
    </svg>
  );
}
