import { faAngleLeft, faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Children, CSSProperties, ReactNode, useCallback, useRef } from 'react';
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

export function Tab({ children, onClick, active, color, ...props }: TabProps)
{
    const className = `${styles.Tab} ${styles[color]} ${active ? styles.Active : ''}`
    const ref = useRef<HTMLDivElement>(null);

    const scroll = () =>
    {
        if (ref.current)
            ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            className={className}
            {...props}
            onClick={(e) =>
            {
                onClick && onClick(props.eventkey);
                scroll();
            }}
            ref={ref}
        >
            {children}
            {active &&
                <>
                    {' '}
                    <FontAwesomeIcon icon={faArrowLeft} style={{marginLeft: 10}}/>
                </>
            }

        </div>

    )
}