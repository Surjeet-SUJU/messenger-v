'use client';

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick,
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    };
    return (
        <Link
            onClick={handleClick}
            href={href}
            className={clsx(`
                group
                flex
                gap-x-3
                text-sm
                leading-6
                font-semibold
                w-full
                justify-center
                text-gray-500
                hover:text-black
                hover:bg-gray-100
            `,
                active && "bg-gray-100 text-sky-600"
            )}>
            <Icon className="w-7 h-7" />
        </Link>
    );
};

export default MobileItem;
