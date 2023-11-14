export interface ListItemProps {
    label?: string;
    uri: string;
    description?: string;
};

export interface ObjectRowProps {
    
};

export interface ObjectTableProps {
    label?: string;
    uri: string;
    types: string[];
    baseClass: string;
    description?: string;
    geometries?: string[];
    properties: ObjectRowProps[];
};

export interface Value {
    value: string;
    qname?: string;
    label?: string;
    description?: string;
    provenance?: string;
    language?: string;
};

export interface Prefixes {
    [namespace: string]: string;
};
