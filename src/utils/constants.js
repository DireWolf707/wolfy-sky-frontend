import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import CommentIcon from "@mui/icons-material/Comment"

export const navHeight = "96px"

export const navType = {
  link: 0,
  button: 1,
}

export const publicNavLinks = []

export const privateNavLinks = [
  {
    title: "feed",
    type: navType.link,
    href: "/feed",
    Icon: CommentIcon,
  },
  // {
  //   title: "profile",
  //   type: navType.link,
  //   href: "/profile",
  //   Icon: AccountCircleIcon,
  // },
]
