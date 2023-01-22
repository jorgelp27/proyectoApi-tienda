import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="h3" sx={{  }}>
                Home
            </Typography>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/Productos' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Productos</Button>
                </Link>
                <Link href='/categorias' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categorias</Button>
                </Link>
                <Link href='/proveedor' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Proveddor</Button>
                </Link>

                <Link href='/cesta' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Cesta</Button>
                </Link>

            </Box>
            <Box flex={1} />
            <Box>
                Registro
            </Box>
        </Toolbar>
    </AppBar>
  )

  }