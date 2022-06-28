import React, { useEffect, useState } from 'react'
import { useLockedBody } from '../../../hooks/useLockedBody'
import { CreditCardModalStyle } from './CreditCardModal.style'
import IconWrapper from '../../UIKit/IconWrapper/IconWrapper'

function CreditCardModal({ isActive, onModalToggle }) {
  const [locked, setLocked] = useLockedBody()
  const [isModalActive, setIsModalActive] = useState(false)

  const toggleModal = () => {
    onModalToggle(!isModalActive)
    setLocked(() => !locked)
    setIsModalActive(() => !isModalActive)
  }

  const handleClose = e => {
    e.stopPropagation()
    if (e.target.dataset.overlay) {
      toggleModal()
    }
  }

  useEffect(() => {
    setLocked(() => isActive)
    setIsModalActive(() => isActive)
  }, [isActive])


  return (

    <CreditCardModalStyle
      className={['credit-card-modal', isModalActive ? 'active' : ''].join(' ')}
      data-overlay onClick={handleClose}>
      <div className="container-xs">
        <div className="content">
          <div className="modal-header">
            <IconWrapper icon="close" className="modal-header__btn-close" color="black" onClick={() => toggleModal()}/>
          </div>

          <div className="modal-body">
            <iframe
              height="550"
              style={{ border: 'none' }}
              src="https://sandbox.nftpay.xyz/iframe/iframe_pay/91d18f08-114d-4480-b9bc-d27187b7f380"
            />
          </div>
        </div>
      </div>
    </CreditCardModalStyle>
  )
}

export default CreditCardModal
