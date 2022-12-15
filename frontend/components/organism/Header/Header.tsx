import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { navBarItems } from './headerData';

const drawerWidth = 240;

export const Header: FC = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const handleClickHref = (link: string | undefined) => {
    router.push(link ? link : '/');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Achoo
      </Typography>
      <Divider />
      <List>
        {navBarItems.map(item =>
          item.type === 'link' ? (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => handleClickHref(item.href)}
                sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ) : (
            <Divider key={item.name} />
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar color="transparent" position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: { sm: 'none' } }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                color: '#fff',
                fontFamily: 'monospace',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
              Achoo
            </Typography>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: '#fff',
              fontFamily: 'monospace',
              fontWeight: 700,
              textDecoration: 'none',
            }}>
            Achoo
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: '.5rem',
            }}>
            {navBarItems.map(item =>
              item.type === 'link' ? (
                <Button
                  key={item.name}
                  sx={{
                    color: '#fff',
                    borderRadius: '0',
                    '&:hover': {
                      fontWeight: 'bold',
                      background: 'none',
                      borderBottom: '2px solid #FB6D9D',
                    },
                  }}
                  onClick={() => handleClickHref(item.href)}>
                  {item.name}
                </Button>
              ) : (
                <Divider
                  orientation="vertical"
                  key={item.name}
                  sx={{ height: '1.5rem', borderColor: '#fff' }}
                />
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
