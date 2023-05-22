import { Stack, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { navType } from "../../../utils/constants"

const NavbarLinks = ({ links, gap = 0.3 }) => {
  const navigate = useNavigate()

  return (
    <>
      {links.map((link, idx) => {
        if (link.type === navType.button) return <link.Button key={idx} gap={gap} />
        else if (link.type === navType.link)
          return (
            <Button key={idx} onClick={() => navigate(link.href)}>
              <Stack flexDirection="row" alignItems="center" gap={gap}>
                <link.Icon />

                <Typography fontFamily="Righteous" fontSize="14px" textTransform="lowercase">
                  {link.title}
                </Typography>
              </Stack>
            </Button>
          )
      })}
    </>
  )
}

export default NavbarLinks
