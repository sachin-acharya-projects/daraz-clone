type Props = {
    color?: string
    fill?: string
    size?: number
}
export function InstallMobile({
    size = 35,
    color = "#000000",
    fill = "none",
}: Props) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_2_24)">
                <path
                    d="M24.7917 26.25H10.2084V8.74998H20.4167V1.45831H10.2084C8.60419 1.45831 7.29169 2.77081 7.29169 4.37498V30.625C7.29169 32.2291 8.60419 33.5416 10.2084 33.5416H24.7917C26.3959 33.5416 27.7084 32.2291 27.7084 30.625V23.3333H24.7917V26.25Z"
                    fill={color}
                />
                <path
                    d="M26.25 20.4167L33.5417 13.125L31.4855 11.0687L27.7084 14.8312V4.375H24.7917V14.8312L21.0146 11.0687L18.9584 13.125L26.25 20.4167Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_2_24">
                    <rect width={size} height={size} fill={color} />
                </clipPath>
            </defs>
        </svg>
    )
}

export function SearchIcon({
    size = 30,
    color = "#000000",
    fill = "none",
}: Props) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 31 31"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_2_14)">
                <path
                    d="M19.875 18H18.8875L18.5375 17.6625C19.7625 16.2375 20.5 14.3875 20.5 12.375C20.5 7.8875 16.8625 4.25 12.375 4.25C7.8875 4.25 4.25 7.8875 4.25 12.375C4.25 16.8625 7.8875 20.5 12.375 20.5C14.3875 20.5 16.2375 19.7625 17.6625 18.5375L18 18.8875V19.875L24.25 26.1125L26.1125 24.25L19.875 18ZM12.375 18C9.2625 18 6.75 15.4875 6.75 12.375C6.75 9.2625 9.2625 6.75 12.375 6.75C15.4875 6.75 18 9.2625 18 12.375C18 15.4875 15.4875 18 12.375 18Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_2_14">
                    <rect
                        width={size}
                        height={size}
                        fill="white"
                        transform="translate(0.5 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
