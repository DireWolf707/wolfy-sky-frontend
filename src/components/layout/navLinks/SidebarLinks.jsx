import { Stack, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { navType } from "../../../utils/constants"

const SidebarLinks = ({ links, closeSidebar, gap = 1 }) => {
  const navigate = useNavigate()

  const onClickHandler = (href) => {
    closeSidebar()
    navigate(href)
  }

  return (
    <>
      {links.map((link, idx) => {
        if (link.type === navType.button) return <link.Button key={idx} closeSidebar={closeSidebar} gap={gap} textTransform="uppercase" />
        else if (link.type === navType.link)
          return (
            <Button key={idx} onClick={() => onClickHandler(link.href)}>
              <Stack flexDirection="row" alignItems="center" gap={gap}>
                <link.Icon />

                <Typography fontFamily="Righteous" fontSize="14px">
                  {link.title}
                </Typography>
              </Stack>
            </Button>
          )
      })}
    </>
  )
}

export default SidebarLinks
