/**
 * @copyright 2024 tushxr05
 * @license Apache-2.0
 */

// assets
import { favicon } from "../assets";
import footerLogo from "@/assets/footerLogo.png"

type LogoProps = {
    variant?: "default" | "icon";
};

const IconLogo = ({ variant = "default" }: LogoProps) => {
    return (
        <a href="">
            {variant === "default" && (
                <img src={footerLogo} alt="Logo" width={150} height={31} />
            )}

            {variant === "icon" && (
                <img src={favicon} alt="Favicon" width={32} height={32} />
            )}
        </a>
    );
};

export default IconLogo;