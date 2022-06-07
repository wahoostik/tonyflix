import MuiModal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Modal() {
	
	const [showModal, setShowModal] = useRecoilState(modalState);

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<div>
			<MuiModal
				open={showModal}
				onClose={handleClose}
			>
				<h1>Modal</h1>
			</MuiModal>
		</div>
	);
}

export default Modal;