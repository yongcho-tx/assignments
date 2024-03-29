import React, { useContext } from "react"
import Auth from "./Auth"
import { IoClose } from "react-icons/io5"
import styled from "styled-components"
import { motion } from "framer-motion"
import { DrugContext } from "../context/DrugProvider.js"

function LoginPopup(props) {
  const { token } = useContext(DrugContext)

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* <button className="close-btn" onClick={() => props.setTrigger(false)}> */}
        <CloseIcon
          key="close-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => props.setTrigger(false)}
        >
          <IoClose />
        </CloseIcon>
        {/* </button> */}
        {props.children}
        <Auth />
      </div>
    </div>
  ) : (
    ""
  )
}

export default LoginPopup

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 32px;
  // vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 10px;

  &:hover {
    color: #dfdfdf;
  }
`
