import Image from "next/image";

const ComingSoon = () => {
	return (
		<div className='w-full h-full'>
			<Image src='/image/coming-soon.jpg' width={6001} height={2900} layout='responsive' objectFit='cover' className='' />
		</div>
	);
};

export default ComingSoon;
