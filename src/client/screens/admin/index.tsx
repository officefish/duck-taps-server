import { FC, useState } from 'react'
import Menu from './menu'
import { EAdminMode, IMenuItem } from './types'
import PlayersList from './database/player/players.list'

const items = [
  { mode: EAdminMode.PLAYERS, title: 'players' },
  { mode: EAdminMode.REFFERALS, title: 'refferals' },
] satisfies IMenuItem[]

const AdminPanel: FC = () => {
  //
  const [mode, setMode] = useState<EAdminMode>(EAdminMode.PLAYERS)

  const handleSelect = (mode: EAdminMode) => {
    console.log(mode)
    setMode(mode)
  }

  return (
    <div className="sm:grid sm:grid-cols-5 sm:gap-4">
      <div className="bg-base-200 dark:bg-base-200-dark h-screen-no-header">
        <Menu items={items} handleSelect={handleSelect} currentMode={mode} />
      </div>
      <div className="col-span-4 text-base-content dark:text-base-content-dark">
        {renderAdminMode(mode)}
      </div>
    </div>
  )
}
export default AdminPanel

const renderAdminMode = (mode: EAdminMode) => {
  switch (mode) {
    case EAdminMode.PLAYERS:
      return <PlayersList />
    case EAdminMode.REFFERALS:
      return null
    default:
      return <></>
  }
}
