import Image from "next/image";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";



const ActionLink = ({ scroll, action, children}) => {
    const scrollToSection = (ref) => {
        console.log('action', ref);
        window.scrollTo({
            top: ref.current?.offsetTop,
            behavior: 'smooth',
        })
    }
    if (scroll){
        return (
            <Box onClick={() => scrollToSection(action)}>
                {children}
            </Box>
        )
    }
    return (
        <>
            <NextLink href={action} passHref>
                {children}
            </NextLink>
        </>
    )
}

const LinkCards = (props) => {
    const { icon, name, description, action, color='primary.main', scroll} = props;



    return (
        <>
            <ActionLink {...{ scroll, action}}>
                <Box sx={{
                    backgroundColor: color,
                    color: 'primary.contrastText',
                    ':hover':{
                        backgroundColor: 'warning.main',
                        color: 'text.primary',
                        boxShadow: 10,
                    },
                    cursor:'pointer',
                    transition: 'all 0.3s ease',
                    minHeight: 120,
                    boxShadow: 5,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    py: 3,
                    px: 2,
                    gap: 2,
                }}>

                    <Box>
                        <Image width={55} height={55} quality={100} src={icon} alt={name}/>
                    </Box>
                    <Box color={'inherit'}>
                        <Typography variant={'h6'} gutterBottom>{name}</Typography>
                        {Boolean(description) && (
                            <Typography>{description}</Typography>
                        )}
                    </Box>
                </Box>
            </ActionLink>
        </>
    )
}

export default LinkCards;