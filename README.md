# Corruption Dungeon Tracker - Chub Stage

A real-time stat, device, and status HUD for The Corruption Dungeon roleplay scenario.

## What This Stage Does

This stage displays a persistent sidebar panel during chat that tracks:

- **Core Stats**: Lust (0-100%), Corruption (0-100%)
- **Mental State**: Calm → Anxious → Aroused → Desperate → Critical → Submitting → Broken
- **Trance Depth**: None → Light → Medium → Deep → Profound
- **Susceptibility**: Resistant → Neutral → Receptive → Highly Suggestible → Mindless
- **Arousal Level**: None → Minimal → Noticeable → Soaking → Throbbing
- **Edge Counter & Ruin Risk**
- **Attached Devices** by body slot (Neck, Jaw, Eyes, Ears, Chest, Arms, Waist, Pussy, Ass, Legs, Feet)
- **Active Triggers & Suggestions**
- **Fluid Status** (cum external/internal/swallowed, milk production, lubrication)
- **Thought Layers** (Surface / Hidden / Intrusive)
- **Room Info** (Tier 1-5, Type)
- **Corruption Stage** (I-Intact through V-Transformed)
- **Session Totals** (rooms cleared, devices applied, orgasms, ruins, fluid deposits)

## How to Use

### As a Player / User
1. Attach this stage to your Corruption Dungeon character chat
2. The stage automatically detects stat markers in AI responses like:
   - `[LUST: 45%]`
   - `[CORRUPTION: 30%]`
   - `[TRANCE: Medium]`
   - `[MENTAL: Desperate]`
   - `[EDGES: 5]`
   - `[ROOM TYPE: Task]`
   - `[TIER: 3]`
   - `[ACTION: Kneeling]`
3. The UI updates in real-time as the AI narrates the scene

### Stage Configuration (User Settings)
- **Show Device Panel**: Toggle the attached devices display
- **Show Trigger Panel**: Toggle the triggers/suggestions display
- **Show Fluid Panel**: Toggle the fluid status display
- **Auto Parse Stats**: Enable/disable automatic stat parsing from AI text
- **Stat Marker Format**: Choose how the AI should format stat updates

### For the AI / Character Creator
Include stat markers in your AI's responses so the stage can track them:

```
The device hums louder. [LUST: 67%] [AROUSAL: Soaking] [EDGES: 4]
Your mind drifts as the spiral spins. [TRANCE: Deep] [MENTAL: Submitting]
The collar locks with a click. [ROOM TYPE: Device] [TIER: 3]
```

## File Structure

```
corruption-dungeon-stage/
├── public/
│   └── chub_meta.yaml          # Stage metadata and config schema
├── src/
│   ├── Stage.tsx               # Main stage class with stat tracking UI
│   ├── App.tsx                 # Entry point
│   ├── TestRunner.tsx          # Dev test harness with sample data
│   ├── main.tsx                # React DOM mount
│   ├── index.ts                # Package exports
│   └── index.scss              # Styling
├── .github/workflows/
│   └── deploy.yml              # Auto-build and publish
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
└── .eslintrc.cjs
```

## Publishing Your Own Version

1. Fork/clone this repository
2. Modify `src/Stage.tsx` for your own stat tracking needs
3. Update `public/chub_meta.yaml` with your metadata
4. Update `package.json` name field
5. Set up `NPM_TOKEN` and `CHUB_API_KEY` repository secrets
6. Push to main branch - GitHub Actions will build and publish automatically

## Development

```bash
yarn install
yarn dev      # Local dev server with test data
yarn build    # Production build
yarn lint     # ESLint check
```

## License

MIT
