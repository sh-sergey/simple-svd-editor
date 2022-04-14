import { FC } from 'react';
import Tippy, { TippyProps as ReactTippyProps } from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useTheme, typography, scale } from '@scripts/gds';

export type TippyProps = Omit<ReactTippyProps, 'theme'> & {
    theme?: 'dark' | 'light' | 'none';
    /** dropdown min-width */
    minWidth?: number;
};

const Tooltip: FC<TippyProps> = ({
    children,
    theme = 'dark',
    arrow = false,
    ignoreAttributes = true,
    interactive = true,
    appendTo = 'parent',
    onMount,
    onHide,
    onTrigger,
    className,
    minWidth,
    ...props
}) => {
    const { colors, shadows } = useTheme();

    const handleMount = (instance: any) => {
        instance.reference.setAttribute('aria-expanded', 'true');
        if (onMount) onMount(instance);
    };

    const handleHide = (instance: any) => {
        instance.reference.setAttribute('aria-expanded', 'false');
        if (onHide) onHide(instance);
    };

    const handleTrigger = (instance: any, event: Event) => {
        if (event.type === 'focus') instance.setProps({ delay: 0 });
        if (onTrigger) onTrigger(instance, event);
    };

    return (
        <Tippy
            theme={theme}
            arrow={arrow}
            ignoreAttributes={ignoreAttributes}
            interactive={interactive}
            appendTo={appendTo}
            {...props}
            onMount={handleMount}
            onHide={handleHide}
            onTrigger={handleTrigger}
            css={{
                minWidth,

                ...(theme === 'none' && {
                    background: 'transparent',
                    padding: 0,
                    borderRadius: 0,
                    '.tippy-content': { padding: 0 },
                }),

                ...(theme === 'dark' && {
                    display: 'grid',
                    placeItems: 'center',
                    color: colors?.white,
                    backgroundColor: colors?.grey900,
                    border: `1px solid ${colors?.grey900}`,
                    borderRadius: scale(1, true),
                    height: scale(9, true),
                    ...typography('small'),
                    whiteSpace: 'initial',
                    overflow: 'hidden',

                    '&[data-placement^=right]>div.tippy-arrow': {
                        left: -scale(2),
                        borderRightColor: colors?.grey900,
                    },
                    '&[data-placement^=left]>div.tippy-arrow': {
                        right: -scale(2),
                        borderLeftColor: colors?.grey900,
                    },
                }),

                ...(theme === 'light' && {
                    background: colors?.white,
                    color: colors?.grey900,
                    borderRadius: 2,
                    boxShadow: shadows?.box,

                    '&[data-placement^=bottom]>div.tippy-arrow': {
                        '&::before': {
                            top: -10,
                            borderBottomColor: colors?.white,
                        },
                    },
                    '&[data-placement^=top]>div.tippy-arrow': {
                        '&::before': {
                            top: 'initial',
                            bottom: -10,
                            borderTopColor: colors?.white,
                        },
                    },
                    '.tippy-content': { padding: `${scale(1)}px 0` },
                }),
            }}
            className={className}
        >
            {children}
        </Tippy>
    );
};

export default Tooltip;
