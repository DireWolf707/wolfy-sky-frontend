import { Stack, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { navType } from "../../../utils/constants"

const NavbarLinks = ({ links, gap = 0.3 }) => {
  return (
    <>
      {links.map((link, idx) => {
        if (link.type === navType.button) return <link.Button key={idx} gap={gap} />
        else if (link.type === navType.link)
          return (
            <Link key={idx} to={link.href}>
              <Button>
                <Stack flexDirection="row" alignItems="center" gap={gap}>
                  <link.Icon />

                  <Typography fontFamily="Righteous" fontSize="14px" textTransform="lowercase">
                    {link.title}
                  </Typography>
                </Stack>
              </Button>
            </Link>
          )
      })}
    </>
  )
}

export default NavbarLinks
