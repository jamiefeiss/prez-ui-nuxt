import type { ListItemProps } from "prez-utils";

export interface ButtonProps {
    color?: "primary" | "secondary";
    size?: "sm" | "lg";
};

export interface ListItemTableProps {
    items: ListItemProps[];
}