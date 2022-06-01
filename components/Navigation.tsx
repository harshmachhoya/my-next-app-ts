import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// import Link from "next/link";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { INavItem } from "../interfaces/common.interface";

export const Navigation = ({ navigation }: { navigation: INavItem[] }) => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(props);
  return (
    <div className={styles.mainnav}>
      {/* <BottomNavigation
        className={styles.mainnav}
        value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      > */}
      {navigation.map((item: INavItem, index: number) =>
        item.items.length <= 0 ? (
          <Button key={index}>
            <Link
              className={styles.link}
              key={index}
              href={item.path}
              underline="none"
            >
              {item.title}
            </Link>
          </Button>
        ) : (
          <>
            <Button
              key={index}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Link className={styles.link} key={index} underline="none">
                {item.title}
              </Link>
            </Button>
            <Menu
              key={index}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {item.items.map((item: INavItem, index: number) => (
                <MenuItem key={index} onClick={handleClose}>
                  <Link className={styles.subLink} key={index} href={item.path} underline="none">
                    {item.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        )
      )}
      {/* </BottomNavigation> */}
    </div>
  );
};
