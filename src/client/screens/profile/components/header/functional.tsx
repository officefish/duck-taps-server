import { FC, MouseEvent } from 'react'
import { useRouter } from 'next/router'

import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  StyledFunctional,
  SettingsButton,
  StyledButton,
} from '../../styled-profile'
import { useUserStore } from '@/client/providers/auth-user-provider'
import { Role } from '@/client/models/user.model'

const HeaderFunctional: FC = () => {
  const router = useRouter()

  const { user } = useUserStore()

  const onWorkspacesClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/admin')
  }

  const settingsClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/me/settings')
  }

  return (
    <StyledFunctional>
      {user.role === Role.ADMIN && (
        <StyledButton type="button" onClick={onWorkspacesClick}>
         Admin
       </StyledButton>   
      )}
     
      <SettingsButton
        $active={true}
        disabled={false}
        type="button"
        onClick={settingsClick}
      >
        Settings
        <FontAwesomeIcon icon={faGear} />
      </SettingsButton>
    </StyledFunctional>
  )
}
export default HeaderFunctional
