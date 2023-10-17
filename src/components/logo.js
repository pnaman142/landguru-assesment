/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import LogoDark from "assets/logo.svg";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Image src={LogoDark} alt="landguru logo" />
      <span style={{ fontSize: "24px", fontWeight: 1000 }}>Landguru</span>
    </Link>
  );
}
