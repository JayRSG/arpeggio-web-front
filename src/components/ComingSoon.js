import Image from "next/image";
import image_coming_soon from "../../public/image/coming-soon.jpg"

const ComingSoon = () => {
	return (
		<div className='w-full h-full'>
			<Image src={image_coming_soon} width={6001} height={2900} layout='responsive' objectFit='cover' className='' />
		</div>
	);
};

export default ComingSoon;
