const EAdminMode = {
  PLAYERS: 'PLAYERS',
  REFFERALS: 'REFFERALS',
} as const
type EAdminMode = keyof typeof EAdminMode

interface IMenuItem {
  mode: EAdminMode
  title: string
}

export { EAdminMode, type IMenuItem }
