import React, { Children, CSSProperties, ReactNode } from 'react';
import styles from './Tabs.module.scss';

interface TabsProps
{
    activeKey: string,
    onSelect: (key: any) => void,
    children: ReactNode
}

export default function Tabs({ activeKey, onSelect, children }: TabsProps)  
{
    const childrenWithProps: any = React.Children.map(children, child => 
    {
        if (React.isValidElement(child))
        {
            return React.cloneElement(child, { active: activeKey === child.props.eventkey, style: { minWidth: 100 }, onClick: onSelect })
        }

        return null;
    })

    return (
        <div className={styles.Tabs}>
            {childrenWithProps}
        </div>
    )
}

interface TabProps
{
    eventkey: string,
    children: ReactNode,
    active?: boolean,
    style?: CSSProperties,
    onClick?: (key: any) => void,
    color: 'brown' | 'white' | 'green' | 'black' | 'orange' | string
}

export function Tab(props: TabProps)
{

    const className = `${styles.Tab} ${styles[props.color]}`
    return (
        <div className={className} {...props} onClick={(e) => props.onClick && props.onClick(props.eventkey)}/>
    )
}