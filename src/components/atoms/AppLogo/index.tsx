/* eslint-disable prettier/prettier */
/**
 * ロゴ
 */
import Image from "next/image";
import header_logo from "./header_logo.png";

const AppLogo = () => (
  <Image src={header_logo} width={40} height={40} alt="My avatar" />
);

export default AppLogo;
