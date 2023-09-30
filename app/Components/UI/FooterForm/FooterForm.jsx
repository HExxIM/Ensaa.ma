import Styles from './FooterForm.module.css'
//components
import Button from "../../UI/Button";

export default function FooterForm() {
  return (
    <form className={Styles.form}>
        <div>
            <label htmlFor="name">Your Name</label>
            <textarea name="Your Name" id="name" cols="40" rows="1"></textarea>
        </div>
        <div>
            <label htmlFor="email">Your Email</label>
            <textarea
                name="Your Email"
                id="email"
                cols="40"
                rows="1"
            ></textarea>
        </div>
        <div>
            <label htmlFor="text">Your Text</label>
            <textarea name="Your Text" id="text" cols="40" rows="5"></textarea>
        </div>
        <Button text="send" link="/" />
  </form>
  )
}
