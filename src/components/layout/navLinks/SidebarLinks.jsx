import { Stack, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { navType } from "../../../utils/constants"

const SidebarLinks = ({ links, closeSidebar, gap = 1 }) => {
  return (
    <>
      {links.map((link, idx) => {
        if (link.type === navType.button) return <link.Button key={idx} closeSidebar={closeSidebar} gap={gap} textTransform="uppercase" />
        else if (link.type === navType.link)
          return (
            <Link key={idx} to={link.href}>
              <Button onClick={closeSidebar}>
                <Stack flexDirection="row" alignItems="center" gap={gap}>
                  <link.Icon />

                  <Typography fontFamily="Righteous" fontSize="14px">
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

export default SidebarLinks
