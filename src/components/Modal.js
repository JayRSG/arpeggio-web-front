import { useEffect, useState } from 'react'
import { Modal as ModalLibrary } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

const Modal = props => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		props.cb(open)
	}, [open])

	useEffect(() => {
		setOpen(props.state)
		// console.log(props.data);
		// console.log(typeof props.data);
	}, [props.state])

	const onCloseModal = () => {
		setOpen(false)
		props.cb(false)
	}

	return (
		<div>
			<ModalLibrary
				open={open}
				onClose={onCloseModal}
				center
				closeOnOverlayClick={false}
				classNames={{
					root: '',
					overlay: 'opacity-100 absolute',
					modal:
						'!w-full lg:!w-3/5 md:!w-3/5 sm:!w-11/12 !bg-main-color !max-h-full !p-0 !overflow-visible sm:!m-0 xs:!m-auto',
					closeButton:
						'!bg-main-color hover:opacity-70 transition-all duration-500 !top-0 !-right-16 sm:!right-0 sm:-!top-0',
					closeIcon: '',
				}}>
				{/* <div className="min-w-full h-full">
          <div className="w-full text-center bg-gray-300"></div>
        </div> */}
				<div className={`${props.className1}`}>
					<div className={`${props.className2}`}>{props.data}</div>
				</div>
			</ModalLibrary>
		</div>
	)
}

export default Modal
