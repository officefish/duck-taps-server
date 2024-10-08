//import { IRole, User } from '@/client/models/user.model'
import { IPlayer } from '@/client/models/player.types'
import { useManyPlayers } from '@/client/services/player.service'
import { FC, useEffect, useState } from 'react'
//import UserItem from './user.item'
//import UpdateRoleDialog from '../../components/dialog/update-role.dialog'
//import { useUpdateRoleValidator } from '../../validator'
//import BanUserDialog from '../../components/dialog/ban-user.dialog'
/*
import {
  useAllUsers,
  useDeleteUser,
  useUpdateRole,
} from '@/client/services/user.service'
 */

const PlayersList: FC = () => {
    
  const { data, trigger: triggerPlayers } = useManyPlayers()
  
  //const { message: updateRoleMessage, trigger: triggerUpdateRole } =
  //  useUpdateRole()

  //const { message: deleteUserMessage, trigger: triggerDeleteUser } =
  //  useDeleteUser()

  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (!isValid) {
      setIsValid(true)
      triggerPlayers({skip:0, take: 20})
    }
  }, [isValid, 
    triggerPlayers
])

//   useEffect(() => {
//     if (updateRoleMessage) {
//       setIsValid(false)
//     }
//     if (deleteUserMessage) {
//       setIsValid(false)
//     }
//   }, [updateRoleMessage, deleteUserMessage, setIsValid])

  const [players, setPlayers] = useState<IPlayer[]>()
  //const [currentRole, setCurrentRole] = useState<IRole>()
  //const [currentUserId, setCurrentUserId] = useState('')
  //const [isUpdateRoleOpen, setIsUpdateRoleOpen] = useState(false)
  //const [isBanUserOpen, setIsBanUseOpen] = useState(false)

  useEffect(() => {
    setPlayers(data?.players)
  }, [data])

  //const handleUpdateRole = (id: string, role: IRole) => {
    //setCurrentRole(role)
    //setCurrentUserId(id)
    //setIsUpdateRoleOpen(true)
  //}

//   const handleBanUser = (id: string) => {
//     setCurrentUserId(id)
//     setIsBanUseOpen(true)
//   }

//const { register, handleSubmit, errors } = useUpdateRoleValidator()

//   const updateRoleHandler = (data) => {
//     setIsUpdateRoleOpen(false)
//     data['id'] = currentUserId
//     triggerUpdateRole(data)
//   }

//   const banUserHandler = () => {
//     setIsBanUseOpen(false)
//     triggerDeleteUser({ id: currentUserId })
//   }

  return (
    <div className="w-full flex justify-center overflow-x-auto py-4">
      <table className="table table-md table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>username</th>
            <th>created at</th>
            <th>tgId</th>
            <th>tasks</th>
            <th>invitations</th>
          </tr>
        </thead>
        <tbody>
          {players?.map((player, i) => (
            <PlayerItem 
            key={i} 
            player={player} 
            />
            /*
            <UserItem
              key={i}
              index={i}
              user={user}
              handleUpdateRole={handleUpdateRole}
              handleBanUser={handleBanUser}
            />
            */
          ))}
        </tbody>
      </table>
      {/* <UpdateRoleDialog
        title="Update role"
        submitHandler={updateRoleHandler}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        setIsOpen={setIsUpdateRoleOpen}
        isOpen={isUpdateRoleOpen}
        initialRole={currentRole}
      />
      <BanUserDialog
        title="Ban user"
        submitHandler={banUserHandler}
        setIsOpen={setIsBanUseOpen}
        isOpen={isBanUserOpen}
      /> */}
    </div>
  )
}
export default PlayersList

interface IPlayerItem {
  player: IPlayer
}

const PlayerItem:FC<IPlayerItem> = ({player}) => {

  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<Date>()

  useEffect(() => {
    const playerDate = new Date(player.createdAt)
    const playerTime = new Date(player.createdAt)
    setDate(playerDate)
    setTime(playerTime)
  }, [player])

  return (
    <tr>
    <th></th>
    <td>{player.username}</td>
    <td>{(date?.toDateString()) + ' ' + (time?.toLocaleTimeString())}</td>
    <td>{player.tgId}</td>
    <td>{player.tasks.length}</td>
    <td>{player.invitations.length}</td>
  </tr>
  )
}

