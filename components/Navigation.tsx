import React, { FC, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// import Link from "next/link";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Link,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { INavigation, INavItem } from "../interfaces/common.interface";
import { GetServerSideProps } from "next";
import { apolloCon } from "../apolloCon";
import { GET_NAVIGATION } from "../graphql/queries";

type SSRComponent = FC & {
  getSsrData: (e: string) => Promise<any>;
};

const fetchNavigationData = async () => {
  const { data: navigation } = await apolloCon.query({
    query: GET_NAVIGATION,
  });
  console.log(
    "Navigation",
    JSON.stringify(navigation.renderNavigation, null, 4)
  );
  return navigation.renderNavigation;
};

export const Navigation: SSRComponent = () => {
  const [navigationProps, setNavigationProps] = useState<INavItem[]>([]);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    fetchNavigationData().then((data) => {
      setNavigationProps(data);
    });
  }, []);
  // console.log(props);
  return (
    <div>
      {/* <Box sx={{ width: 500 }}> */}
      <BottomNavigation
        className={styles.mainnav}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navigationProps.map((item: INavItem, index: number) => (
          <Link key={index} href={item.path} underline="none">
            {item.title}
          </Link>
          // <BottomNavigationAction
          //   key={index}
          //   className={styles.bottomNavigationAction}
          //   label={item.title}
          //   // label="Home"
          //   href={item.path}
          // />
        ))}
        {/* <Link href="/" passHref> */}
        {/* <BottomNavigationAction
          className={styles.bottomNavigationAction}
          label="Home"
          href="/"
          // icon={<HomeIcon />}
        /> */}
        {/* </Link> */}
        {/* <Link href="/blog" passHref>
          <BottomNavigationAction label="Blog" icon={<ContentPasteIcon />} />
        </Link>
        <Link href="/about" passHref>
          <BottomNavigationAction label="About" icon={<BusinessIcon />} />
        </Link>
        <Link href="/contact" passHref>
          <BottomNavigationAction label="Contact" icon={<AddCommentIcon />} />
        </Link> */}
      </BottomNavigation>
      {/* </Box> */}
      {/* <nav className={styles.mainnav}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? styles.active : ""}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

Navigation.getSsrData = fetchNavigationData;
