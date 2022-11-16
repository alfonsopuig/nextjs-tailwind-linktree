import Link from "next/link";
 
const Button = ({
    name,
    url
}) => {

    return (
		
        <div
            key={name}
            className="m-2 w-full block cursor-pointer rounded-full border-2 border-b-8 border-skin-buttonBorder bg-skin-buttonBase p-3 text-center font-bold text-skin-base no-underline hover:border-skin-buttonBorderHover hover:bg-skin-buttonBaseHover hover:text-skin-inverted"
        >
            <Link href={url} target="_blank" className="block">
                {name}
            </Link>
        </div>
		
    )
}

export default Button