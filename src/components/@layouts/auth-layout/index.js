import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AuthLayout = props => {
    const { children } = props;

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                //background: 'linear-gradient(345deg, rgba(0, 117, 201, 1) 0%, rgba(4, 132, 225, 1) 30%, rgba(0, 212, 255, 1) 100%)',
                //color: 'primary.contrastText'
            }}>
                <Container sx={{ height: 'fit-content'}} maxWidth={'lg'}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap:2,
                    }}>
                        {children}
                    </Box>
                </Container>

            </Box>

        </>
    )
}


export default AuthLayout;