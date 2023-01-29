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

                <Link href='/'  component={ NextLink }>
                            <Button sx={{ color: 'white'}}>Home</Button>
                    </Link>
                </Typography>
                
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/productos' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Productos</Button>
                </Link>
                <Link href='/categorias' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categorias</Button>
                </Link>
                <Link href='/proveedor' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Provedor</Button>
                </Link>

                <Link href='/cesta' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>cesta</Button>
                </Link>

                <Link href='/clientes' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>clientes</Button>
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