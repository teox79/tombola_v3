import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Link from 'next/link'
import { useRouter } from 'next/router'

export const ListItems: React.FC = (props) => {
  const router = useRouter()

  return (
    <div>
      <Link href="/tombola">
        <ListItem
          button
          selected={router.pathname === "/tombola"}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Tombola" />
        </ListItem>
      </Link>
      <Link href="/cartelle">
        <ListItem
          button
          selected={router.pathname === "/cartelle"}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Cartelle" />
        </ListItem>
      </Link>
    </div >
  )
}