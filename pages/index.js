import { Navbar } from "@/src/components/navbar.component"
import Button from '@/src/components/button.component';
import Modal from '@/src/components/modal.component';
import { useState } from "react";
export default function Home() {
  const [visible, setVisible] = useState(false);

  function onChangeModal() {
    setVisible(!visible)
  }
  return (
    <div>
      <Navbar />
      {/* <Button
        htmlType={'button'}
        type={'default'}
        onClick={(e) => {
          console.log(e, 'button 1')
        }}
      >Button 1</Button>
      <Button
        htmlType={'button'}
        type={'primary'}
        onClick={(e) => {
          console.log(e, 'button 2')
        }}
      >Button 2</Button> */}

      <Button
        htmlType={'button'}
        type={'default'}
        onClick={onChangeModal}
      >Open Modal</Button>
      <Modal visible={visible} onChange={onChangeModal}
      />
      <h1>Home Page</h1>
    </div>
  )
}