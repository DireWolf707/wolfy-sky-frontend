import AccountCircleIcon from "@mui/icons-material/AccountCircle"

export const navHeight = "96px"

export const navType = {
  link: 0,
  button: 1,
}

export const publicNavLinks = []

export const privateNavLinks = [
  {
    title: "profile",
    type: navType.link,
    href: "/profile",
    Icon: AccountCircleIcon,
  },
]
