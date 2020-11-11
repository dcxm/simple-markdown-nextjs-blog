import NextLink from 'next/link'

export default function Link({ className, style, children, ...props }) {
    return (
        <NextLink {...props}>
            <a className={className} style={style}>
                {children}
            </a>
        </NextLink>
    );
}